#include <sourcemeta/jsontoolkit/jsonschema.h>
#include <sourcemeta/jsontoolkit/jsonschema_compile.h>

#include <cassert> // assert

namespace {

struct TargetVisitor {
  TargetVisitor(const sourcemeta::jsontoolkit::JSON &instance)
      : instance_{instance} {}

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerTargetInstance
                      &pointer) const -> const sourcemeta::jsontoolkit::JSON & {
    return sourcemeta::jsontoolkit::get(this->instance_, pointer);
  }

private:
  const sourcemeta::jsontoolkit::JSON &instance_;
};

auto callback_noop(
    bool, const sourcemeta::jsontoolkit::SchemaCompilerTemplate::value_type
              &) noexcept -> void {}

auto evaluate_step(
    const sourcemeta::jsontoolkit::SchemaCompilerTemplate::value_type &step,
    const sourcemeta::jsontoolkit::JSON &instance,
    const sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode mode,
    const sourcemeta::jsontoolkit::SchemaCompilerEvaluationCallback &callback)
    -> bool {
  using namespace sourcemeta::jsontoolkit;
  bool result{false};

#define EVALUATE_CONDITION_GUARD(condition, instance)                          \
  if (!evaluate(condition, instance, SchemaCompilerEvaluationMode::Fast,       \
                callback_noop)) {                                              \
    return true;                                                               \
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
    const auto &target{std::visit(TargetVisitor{instance}, assertion.target)};
    assert(target.is_object());
    result = target.defines(value);
  } else if (std::holds_alternative<SchemaCompilerAssertionType>(step)) {
    const auto &assertion{std::get<SchemaCompilerAssertionType>(step)};
    assert(std::holds_alternative<SchemaCompilerValueType>(assertion.value));
    const auto value{std::get<SchemaCompilerValueType>(assertion.value)};
    EVALUATE_CONDITION_GUARD(assertion.condition, instance);
    const auto &target{std::visit(TargetVisitor{instance}, assertion.target)};
    result = target.type() == value;
  } else if (std::holds_alternative<SchemaCompilerLogicalOr>(step)) {
    const auto &logical{std::get<SchemaCompilerLogicalOr>(step)};
    EVALUATE_CONDITION_GUARD(logical.condition, instance);
    result = logical.children.empty();
    for (const auto &child : logical.children) {
      if (evaluate_step(child, instance, mode, callback)) {
        result = true;
        if (mode == SchemaCompilerEvaluationMode::Fast) {
          break;
        }
      }
    }
  } else if (std::holds_alternative<SchemaCompilerLogicalAnd>(step)) {
    const auto &logical{std::get<SchemaCompilerLogicalAnd>(step)};
    EVALUATE_CONDITION_GUARD(logical.condition, instance);
    result = evaluate(logical.children, instance, mode, callback);
  } else if (std::holds_alternative<SchemaCompilerControlLabel>(step)) {
    const auto &control{std::get<SchemaCompilerControlLabel>(step)};
    // TODO: Store the label position in an internal cache for future jumping
    result = evaluate(control.children, instance, mode, callback);
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
  bool overall{true};
  for (const auto &step : steps) {
    if (!evaluate_step(step, instance, mode, callback)) {
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
