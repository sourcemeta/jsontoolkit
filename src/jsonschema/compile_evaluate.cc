#include <sourcemeta/jsontoolkit/jsonschema.h>
#include <sourcemeta/jsontoolkit/jsonschema_compile.h>

#include <cassert> // assert
#include <map>     // std::map
#include <set>     // std::set
#include <vector>  // std::vector

namespace {

class EvaluationContext {
public:
  using Pointer = sourcemeta::jsontoolkit::Pointer;
  using JSON = sourcemeta::jsontoolkit::JSON;

  auto annotate(const Pointer &instance_location,
                const Pointer &evaluation_path, const JSON &value) -> void {
    // Will do nothing if the key already exists
    this->annotations.insert({instance_location, {}});
    assert(this->annotations.contains(instance_location));
    this->annotations[instance_location].insert({evaluation_path, {}});
    assert(this->annotations[instance_location].contains(evaluation_path));
    // Insert the actual value
    this->annotations[instance_location][evaluation_path].insert(value);
  }

private:
  // Maps the instance location + evaluation path to an annotation value
  // We need to use the evaluation path pointer instead of the keyword
  // location URI as we need to quickly determine the keyword name that
  // produced the annotation.
  // We also don't use a pair for holding the two pointers for runtime
  // efficiency when resolving keywords like `unevaluatedProperties`
  std::map<Pointer, std::map<Pointer, std::set<JSON>>> annotations;
};

auto target_instance(
    const sourcemeta::jsontoolkit::SchemaCompilerTarget &target,
    const sourcemeta::jsontoolkit::JSON &instance)
    -> const sourcemeta::jsontoolkit::JSON & {
  using namespace sourcemeta::jsontoolkit;
  switch (target.first) {
    case SchemaCompilerTargetType::Instance:
      return get(instance, target.second);
    default:
      // We should never get here
      assert(false);
      static JSON placeholder{nullptr};
      return placeholder;
  }
}

auto target_location(const sourcemeta::jsontoolkit::SchemaCompilerTarget
                         &target) -> const sourcemeta::jsontoolkit::Pointer & {
  using namespace sourcemeta::jsontoolkit;
  switch (target.first) {
    case SchemaCompilerTargetType::Instance:
      return target.second;
    default:
      // We should never get here
      assert(false);
      static Pointer placeholder;
      return placeholder;
  }
}

auto callback_noop(
    bool, const sourcemeta::jsontoolkit::SchemaCompilerTemplate::value_type
              &) noexcept -> void {}

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
      return true;                                                             \
    }                                                                          \
  }

  if (std::holds_alternative<SchemaCompilerAssertionFail>(step)) {
    const auto &assertion{std::get<SchemaCompilerAssertionFail>(step)};
    assert(std::holds_alternative<SchemaCompilerValueNone>(assertion.value));
    EVALUATE_CONDITION_GUARD(assertion.condition, instance);
  } else if (std::holds_alternative<SchemaCompilerAssertionDefines>(step)) {
    const auto &assertion{std::get<SchemaCompilerAssertionDefines>(step)};
    assert(std::holds_alternative<SchemaCompilerValueString>(assertion.value));
    const auto &value{std::get<SchemaCompilerValueString>(assertion.value)};
    EVALUATE_CONDITION_GUARD(assertion.condition, instance);
    const auto &target{target_instance(assertion.target, instance)};
    assert(target.is_object());
    result = target.defines(value);
  } else if (std::holds_alternative<SchemaCompilerAssertionType>(step)) {
    const auto &assertion{std::get<SchemaCompilerAssertionType>(step)};
    assert(std::holds_alternative<SchemaCompilerValueType>(assertion.value));
    const auto value{std::get<SchemaCompilerValueType>(assertion.value)};
    EVALUATE_CONDITION_GUARD(assertion.condition, instance);
    const auto &target{target_instance(assertion.target, instance)};
    result = target.type() == value;
  } else if (std::holds_alternative<SchemaCompilerLogicalOr>(step)) {
    const auto &logical{std::get<SchemaCompilerLogicalOr>(step)};
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
    EVALUATE_CONDITION_GUARD(annotation.condition, instance);
    const auto &instance_location{target_location(annotation.target)};
    context.annotate(instance_location, annotation.evaluation_path,
                     annotation.value);
  } else if (std::holds_alternative<SchemaCompilerAnnotationPrivate>(step)) {
    const auto &annotation{std::get<SchemaCompilerAnnotationPrivate>(step)};
    EVALUATE_CONDITION_GUARD(annotation.condition, instance);
    const auto &instance_location{target_location(annotation.target)};
    context.annotate(instance_location, annotation.evaluation_path,
                     annotation.value);

    // Don't execute the step callback, as this is a private annotation
    return true;
  }

#undef EVALUATE_CONDITION_GUARD

  callback(result, step);
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

  return overall;
}

auto evaluate(const SchemaCompilerTemplate &steps,
              const JSON &instance) -> bool {
  // Otherwise what's the point of an exhaustive
  // evaluation if you don't get the results?
  return evaluate(steps, instance, SchemaCompilerEvaluationMode::Fast,
                  callback_noop);
} // namespace sourcemeta::jsontoolkit

} // namespace sourcemeta::jsontoolkit
