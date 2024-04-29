#include <sourcemeta/jsontoolkit/jsonschema.h>
#include <sourcemeta/jsontoolkit/jsonschema_compile.h>

#include <cassert>     // assert
#include <map>         // std::map
#include <set>         // std::set
#include <type_traits> // std::is_same_v
#include <vector>      // std::vector

namespace {

class EvaluationContext {
public:
  using Pointer = sourcemeta::jsontoolkit::Pointer;
  using JSON = sourcemeta::jsontoolkit::JSON;

  template <typename T> auto value(T &&document) -> const JSON & {
    return *(this->values.emplace(std::forward<T>(document)).first);
  }

  auto annotate(const sourcemeta::jsontoolkit::SchemaCompilerTarget &target,
                JSON &&value) -> const JSON & {
    const auto current_instance_location{this->instance_location(target)};
    // Will do nothing if the key already exists
    this->annotations.insert({current_instance_location, {}});
    assert(this->annotations.contains(current_instance_location));
    this->annotations[current_instance_location].insert(
        {this->evaluate_path(), {}});
    assert(this->annotations[current_instance_location].contains(
        this->evaluate_path()));
    // Insert the actual value
    return *(this->annotations[current_instance_location][this->evaluate_path()]
                 .insert(std::move(value))
                 .first);
  }

  auto push(const Pointer &relative_evaluate_path,
            const Pointer &relative_instance_location) -> void {
    this->frame_sizes.emplace_back(relative_evaluate_path.size(),
                                   relative_instance_location.size());
    this->evaluate_path_.push_back(relative_evaluate_path);
    this->instance_location_.push_back(relative_instance_location);
  }

  template <typename T> auto push(const T &step) -> void {
    this->push(step.relative_schema_location, step.relative_instance_location);
  }

  auto pop() -> void {
    assert(!this->frame_sizes.empty());
    const auto &sizes{this->frame_sizes.back()};
    this->evaluate_path_.pop_back(sizes.first);
    this->instance_location_.pop_back(sizes.second);
    this->frame_sizes.pop_back();
  }

  auto evaluate_path() const -> const Pointer & { return this->evaluate_path_; }

  auto instance_location() const -> const Pointer & {
    return this->instance_location_;
  }

  template <typename T>
  auto instance_location(const T &target) const -> Pointer {
    return this->instance_location().concat(target.second);
  }

private:
  Pointer evaluate_path_;
  Pointer instance_location_;
  std::vector<std::pair<std::size_t, std::size_t>> frame_sizes;
  // For efficiency, as we likely reference the same JSON values
  // over and over again
  std::set<JSON> values;
  // Maps the instance location + evaluation path to an annotation value
  // We need to use the evaluation path pointer instead of the keyword
  // location URI as we need to quickly determine the keyword name that
  // produced the annotation.
  // We also don't use a pair for holding the two pointers for runtime
  // efficiency when resolving keywords like `unevaluatedProperties`
  std::map<Pointer, std::map<Pointer, std::set<JSON>>> annotations;
};

auto target_value(const sourcemeta::jsontoolkit::SchemaCompilerTarget &target,
                  const sourcemeta::jsontoolkit::JSON &instance,
                  EvaluationContext &context)
    -> const sourcemeta::jsontoolkit::JSON & {
  using namespace sourcemeta::jsontoolkit;
  switch (target.first) {
    case SchemaCompilerTargetType::Instance:
      return get(instance, context.instance_location(target));
    case SchemaCompilerTargetType::InstanceBasename:
      return context.value(context.instance_location(target).back().to_json());
    case SchemaCompilerTargetType::SchemaBasename:
      return context.value(context.evaluate_path().back().to_json());
    default:
      // We should never get here
      assert(false);
      return context.value(nullptr);
  }
}

auto callback_noop(
    bool, const sourcemeta::jsontoolkit::SchemaCompilerTemplate::value_type &,
    const sourcemeta::jsontoolkit::Pointer &,
    const sourcemeta::jsontoolkit::Pointer &,
    const sourcemeta::jsontoolkit::JSON &) noexcept -> void {}

template <typename T>
auto resolve_value(const sourcemeta::jsontoolkit::SchemaCompilerValue<T> &value,
                   const sourcemeta::jsontoolkit::JSON &instance,
                   EvaluationContext &context) -> T {
  using namespace sourcemeta::jsontoolkit;
  // We only define target resolution for JSON documents, at least for now
  if constexpr (std::is_same_v<SchemaCompilerValueJSON, T>) {
    if (std::holds_alternative<SchemaCompilerTarget>(value)) {
      const auto &target{std::get<SchemaCompilerTarget>(value)};
      return target_value(target, instance, context);
    }
  }

  assert(std::holds_alternative<T>(value));
  return std::get<T>(value);
}

auto evaluate_step(
    const sourcemeta::jsontoolkit::SchemaCompilerTemplate::value_type &step,
    const sourcemeta::jsontoolkit::JSON &instance,
    const sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode mode,
    const sourcemeta::jsontoolkit::SchemaCompilerEvaluationCallback &callback,
    EvaluationContext &context) -> bool {
  using namespace sourcemeta::jsontoolkit;
  bool result{false};

#define EVALUATE_CONDITION_GUARD(condition, instance)                          \
  for (const auto &child : condition) {                                        \
    if (!evaluate_step(child, instance, SchemaCompilerEvaluationMode::Fast,    \
                       callback_noop, context)) {                              \
      context.pop();                                                           \
      return true;                                                             \
    }                                                                          \
  }

  if (std::holds_alternative<SchemaCompilerAssertionFail>(step)) {
    const auto &assertion{std::get<SchemaCompilerAssertionFail>(step)};
    context.push(assertion);
    assert(std::holds_alternative<SchemaCompilerValueNone>(assertion.value));
    EVALUATE_CONDITION_GUARD(assertion.condition, instance);
  } else if (std::holds_alternative<SchemaCompilerAssertionDefines>(step)) {
    const auto &assertion{std::get<SchemaCompilerAssertionDefines>(step)};
    context.push(assertion);
    const auto &value{resolve_value(assertion.value, instance, context)};
    EVALUATE_CONDITION_GUARD(assertion.condition, instance);
    const auto &target{target_value(assertion.target, instance, context)};
    assert(target.is_object());
    result = target.defines(value);
  } else if (std::holds_alternative<SchemaCompilerAssertionType>(step)) {
    const auto &assertion{std::get<SchemaCompilerAssertionType>(step)};
    context.push(assertion);
    const auto &value{resolve_value(assertion.value, instance, context)};
    EVALUATE_CONDITION_GUARD(assertion.condition, instance);
    const auto &target{target_value(assertion.target, instance, context)};
    result = target.type() == value;
  } else if (std::holds_alternative<SchemaCompilerAssertionRegex>(step)) {
    const auto &assertion{std::get<SchemaCompilerAssertionRegex>(step)};
    context.push(assertion);
    const auto &value{resolve_value(assertion.value, instance, context)};
    EVALUATE_CONDITION_GUARD(assertion.condition, instance);
    const auto &target{target_value(assertion.target, instance, context)};
    assert(target.is_string());
    result = std::regex_search(target.to_string(), value.first);
  } else if (std::holds_alternative<SchemaCompilerLogicalOr>(step)) {
    const auto &logical{std::get<SchemaCompilerLogicalOr>(step)};
    context.push(logical);
    EVALUATE_CONDITION_GUARD(logical.condition, instance);
    result = logical.children.empty();
    for (const auto &child : logical.children) {
      if (evaluate_step(child, instance, mode, callback, context)) {
        result = true;
        if (mode == SchemaCompilerEvaluationMode::Fast) {
          break;
        }
      }
    }
  } else if (std::holds_alternative<SchemaCompilerLogicalAnd>(step)) {
    const auto &logical{std::get<SchemaCompilerLogicalAnd>(step)};
    context.push(logical);
    EVALUATE_CONDITION_GUARD(logical.condition, instance);
    result = true;
    for (const auto &child : logical.children) {
      if (!evaluate_step(child, instance, mode, callback, context)) {
        result = false;
        if (mode == SchemaCompilerEvaluationMode::Fast) {
          break;
        }
      }
    }
  } else if (std::holds_alternative<SchemaCompilerControlLabel>(step)) {
    const auto &control{std::get<SchemaCompilerControlLabel>(step)};
    context.push(control);
    // TODO: Store the label position in an internal cache for future jumping
    result = true;
    for (const auto &child : control.children) {
      if (!evaluate_step(child, instance, mode, callback, context)) {
        result = false;
        if (mode == SchemaCompilerEvaluationMode::Fast) {
          break;
        }
      }
    }
  } else if (std::holds_alternative<SchemaCompilerAnnotationPublic>(step)) {
    // Annotations never fail
    result = true;

    // No reasons to emit public annotations on this mode
    if (mode == SchemaCompilerEvaluationMode::Fast) {
      return result;
    }

    const auto &annotation{std::get<SchemaCompilerAnnotationPublic>(step)};
    context.push(annotation);
    EVALUATE_CONDITION_GUARD(annotation.condition, instance);
    const auto &value{context.annotate(
        annotation.target, resolve_value(annotation.value, instance, context))};
    callback(result, step, context.evaluate_path(), context.instance_location(),
             value);
    context.pop();
    return result;
  } else if (std::holds_alternative<SchemaCompilerAnnotationPrivate>(step)) {
    const auto &annotation{std::get<SchemaCompilerAnnotationPrivate>(step)};
    context.push(annotation);
    EVALUATE_CONDITION_GUARD(annotation.condition, instance);
    const auto &value{context.annotate(
        annotation.target, resolve_value(annotation.value, instance, context))};
    // Annotations never fail
    result = true;
    // While this is a private annotation, we still emit it on the callback
    // for implementing debugging-related tools, etc
    callback(result, step, context.evaluate_path(), context.instance_location(),
             value);
    context.pop();
    return result;
  } else if (std::holds_alternative<SchemaCompilerLoopProperties>(step)) {
    const auto &loop{std::get<SchemaCompilerLoopProperties>(step)};
    context.push(loop);
    EVALUATE_CONDITION_GUARD(loop.condition, instance);
    const auto &target{target_value(loop.target, instance, context)};
    assert(target.is_object());
    result = true;
    for (const auto &[key, value] : target.as_object()) {
      context.push({key}, {key});
      for (const auto &child : loop.children) {
        if (!evaluate_step(child, instance, mode, callback, context)) {
          result = false;
          if (mode == SchemaCompilerEvaluationMode::Fast) {
            context.pop();
            // For efficiently breaking from the outer loop too
            goto evaluate_step_end;
          } else {
            break;
          }
        }
      }

      context.pop();
    }
  }

#undef EVALUATE_CONDITION_GUARD
evaluate_step_end:
  callback(result, step, context.evaluate_path(), context.instance_location(),
           context.value(nullptr));
  context.pop();
  return result;
} // namespace

} // namespace

namespace sourcemeta::jsontoolkit {

auto evaluate(const SchemaCompilerTemplate &steps, const JSON &instance,
              const SchemaCompilerEvaluationMode mode,
              const SchemaCompilerEvaluationCallback &callback) -> bool {
  EvaluationContext context;
  bool overall{true};
  for (const auto &step : steps) {
    if (!evaluate_step(step, instance, mode, callback, context)) {
      overall = false;
      if (mode == SchemaCompilerEvaluationMode::Fast) {
        break;
      }
    }
  }

  // The evaluation path and instance location must be empty by the time
  // we are done, otherwise there was a frame push/pop mismatch
  assert(context.evaluate_path().empty());
  assert(context.instance_location().empty());
  return overall;
}

auto evaluate(const SchemaCompilerTemplate &steps,
              const JSON &instance) -> bool {
  // Otherwise what's the point of an exhaustive
  // evaluation if you don't get the results?
  return evaluate(steps, instance, SchemaCompilerEvaluationMode::Fast,
                  callback_noop);
}

} // namespace sourcemeta::jsontoolkit
