#include <sourcemeta/jsontoolkit/jsonschema.h>
#include <sourcemeta/jsontoolkit/jsonschema_compile.h>

#include <cassert>     // assert
#include <functional>  // std::reference_wrapper
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

  auto annotate(const Pointer &current_instance_location, JSON &&value)
      -> std::pair<std::reference_wrapper<const JSON>, bool> {
    const auto result{this->annotations.insert({current_instance_location, {}})
                          .first->second.insert({this->evaluate_path(), {}})
                          .first->second.insert(std::move(value))};
    return {*(result.first), result.second};
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

  auto instance_location(const sourcemeta::jsontoolkit::SchemaCompilerTarget
                             &target) const -> Pointer {
    switch (target.first) {
      case sourcemeta::jsontoolkit::SchemaCompilerTargetType::InstanceParent:
        return this->instance_location().concat(target.second).initial();
      default:
        return this->instance_location().concat(target.second);
    }
  }

  template <typename T> auto instance_location(const T &step) const -> Pointer {
    return this->instance_location(step.target);
  }

  template <typename T>
  auto
  resolve_target(const sourcemeta::jsontoolkit::SchemaCompilerTarget &target,
                 const JSON &instance) -> const T & {
    using namespace sourcemeta::jsontoolkit;
    static_assert(std::is_same_v<JSON, T>);
    switch (target.first) {
      case SchemaCompilerTargetType::Instance:
      case SchemaCompilerTargetType::InstanceParent:
        return get(instance, this->instance_location(target));
      case SchemaCompilerTargetType::InstanceBasename:
        return this->value(this->instance_location(target).back().to_json());
      default:
        // We should never get here
        assert(false);
        return this->value(nullptr);
    }
  }

  template <typename T>
  auto
  resolve_value(const sourcemeta::jsontoolkit::SchemaCompilerValue<T> &value,
                const JSON &instance) -> T {
    using namespace sourcemeta::jsontoolkit;
    // We only define target resolution for JSON documents, at least for now
    if constexpr (std::is_same_v<SchemaCompilerValueJSON, T>) {
      if (std::holds_alternative<SchemaCompilerTarget>(value)) {
        const auto &target{std::get<SchemaCompilerTarget>(value)};
        return this->resolve_target<JSON>(target, instance);
      }
    }

    assert(std::holds_alternative<T>(value));
    return std::get<T>(value);
  }

private:
  Pointer evaluate_path_;
  Pointer instance_location_;
  std::vector<std::pair<std::size_t, std::size_t>> frame_sizes;
  // For efficiency, as we likely reference the same JSON values
  // over and over again
  std::set<JSON> values;
  // We don't use a pair for holding the two pointers for runtime
  // efficiency when resolving keywords like `unevaluatedProperties`
  std::map<Pointer, std::map<Pointer, std::set<JSON>>> annotations;
};

auto callback_noop(
    bool, const sourcemeta::jsontoolkit::SchemaCompilerTemplate::value_type &,
    const sourcemeta::jsontoolkit::Pointer &,
    const sourcemeta::jsontoolkit::Pointer &,
    const sourcemeta::jsontoolkit::JSON &) noexcept -> void {}

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
    EVALUATE_CONDITION_GUARD(assertion.condition, instance);
    const auto &value{context.resolve_value(assertion.value, instance)};
    const auto &target{
        context.resolve_target<JSON>(assertion.target, instance)};
    assert(target.is_object());
    result = target.defines(value);
  } else if (std::holds_alternative<SchemaCompilerAssertionType>(step)) {
    const auto &assertion{std::get<SchemaCompilerAssertionType>(step)};
    context.push(assertion);
    EVALUATE_CONDITION_GUARD(assertion.condition, instance);
    const auto &value{context.resolve_value(assertion.value, instance)};
    const auto &target{
        context.resolve_target<JSON>(assertion.target, instance)};
    result = target.type() == value;
  } else if (std::holds_alternative<SchemaCompilerAssertionRegex>(step)) {
    const auto &assertion{std::get<SchemaCompilerAssertionRegex>(step)};
    context.push(assertion);
    EVALUATE_CONDITION_GUARD(assertion.condition, instance);
    const auto &value{context.resolve_value(assertion.value, instance)};
    const auto &target{
        context.resolve_target<JSON>(assertion.target, instance)};
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
    const auto current_instance_location{context.instance_location(annotation)};
    const auto value{
        context.annotate(current_instance_location,
                         context.resolve_value(annotation.value, instance))};

    // As a safety guard, only emit the annotation if it didn't exist already.
    // Otherwise we risk confusing consumers
    if (value.second) {
      callback(result, step, context.evaluate_path(), current_instance_location,
               value.first);
    }

    context.pop();
    return result;
  } else if (std::holds_alternative<SchemaCompilerAnnotationPrivate>(step)) {
    const auto &annotation{std::get<SchemaCompilerAnnotationPrivate>(step)};
    context.push(annotation);
    EVALUATE_CONDITION_GUARD(annotation.condition, instance);
    const auto current_instance_location{context.instance_location(annotation)};
    const auto value{
        context.annotate(current_instance_location,
                         context.resolve_value(annotation.value, instance))};
    // Annotations never fail
    result = true;

    // As a safety guard, only emit the annotation if it didn't exist already.
    // Otherwise we risk confusing consumers
    if (value.second) {
      // While this is a private annotation, we still emit it on the callback
      // for implementing debugging-related tools, etc
      callback(result, step, context.evaluate_path(), current_instance_location,
               value.first);
    }

    context.pop();
    return result;
  } else if (std::holds_alternative<SchemaCompilerLoopProperties>(step)) {
    const auto &loop{std::get<SchemaCompilerLoopProperties>(step)};
    context.push(loop);
    EVALUATE_CONDITION_GUARD(loop.condition, instance);
    const auto &target{context.resolve_target<JSON>(loop.target, instance)};
    assert(target.is_object());
    result = true;
    for (const auto &[key, value] : target.as_object()) {
      context.push(empty_pointer, {key});
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
