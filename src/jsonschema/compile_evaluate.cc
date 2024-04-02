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
    -> bool;

struct StepVisitor {
  StepVisitor(
      const sourcemeta::jsontoolkit::JSON &instance,
      const sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode mode,
      const sourcemeta::jsontoolkit::SchemaCompilerEvaluationCallback &callback)
      : instance_{instance}, mode_{mode}, callback_{callback},
        target_visitor{instance} {}

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerAssertionFail
                      &assertion) const -> bool {
    using namespace sourcemeta::jsontoolkit;
    assert(std::holds_alternative<SchemaCompilerValueNone>(assertion.value));
    return !evaluate(assertion.condition, this->instance_,
                     SchemaCompilerEvaluationMode::Fast, callback_noop);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerAssertionDefines
                      &assertion) const -> bool {
    using namespace sourcemeta::jsontoolkit;
    const auto &target{std::visit(this->target_visitor, assertion.target)};
    assert(std::holds_alternative<SchemaCompilerValueString>(assertion.value));
    const auto &value{std::get<SchemaCompilerValueString>(assertion.value)};
    return !evaluate(assertion.condition, this->instance_,
                     SchemaCompilerEvaluationMode::Fast, callback_noop) ||
           target.defines(value);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerAssertionType
                      &assertion) const -> bool {
    using namespace sourcemeta::jsontoolkit;
    const auto &target{std::visit(this->target_visitor, assertion.target)};
    assert(std::holds_alternative<SchemaCompilerValueType>(assertion.value));
    const auto value{std::get<SchemaCompilerValueType>(assertion.value)};
    return !evaluate(assertion.condition, this->instance_,
                     SchemaCompilerEvaluationMode::Fast, callback_noop) ||
           target.type() == value;
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerLogicalOr
                      &logical) const -> bool {
    using namespace sourcemeta::jsontoolkit;
    if (!evaluate(logical.condition, this->instance_,
                  SchemaCompilerEvaluationMode::Fast, callback_noop) ||
        logical.children.empty()) {
      return true;
    } else if (this->mode_ == SchemaCompilerEvaluationMode::Fast) {
      for (const auto &child : logical.children) {
        if (evaluate_step(child, this->instance_, this->mode_,
                          this->callback_)) {
          return true;
        }
      }

      return false;
    } else {
      bool overall{false};
      for (const auto &child : logical.children) {
        if (evaluate_step(child, this->instance_, this->mode_,
                          this->callback_)) {
          overall = true;
        }
      }

      return overall;
    }
  }

private:
  const sourcemeta::jsontoolkit::JSON &instance_;
  const sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode mode_;
  const sourcemeta::jsontoolkit::SchemaCompilerEvaluationCallback &callback_;
  const TargetVisitor target_visitor;
};

auto evaluate_step(
    const sourcemeta::jsontoolkit::SchemaCompilerTemplate::value_type &step,
    const sourcemeta::jsontoolkit::JSON &instance,
    const sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode mode,
    const sourcemeta::jsontoolkit::SchemaCompilerEvaluationCallback &callback)
    -> bool {
  const bool result{std::visit(StepVisitor{instance, mode, callback}, step)};
  callback(result, step);
  return result;
}

} // namespace

namespace sourcemeta::jsontoolkit {

auto evaluate(const SchemaCompilerTemplate &steps, const JSON &instance,
              const SchemaCompilerEvaluationMode mode,
              const SchemaCompilerEvaluationCallback &callback) -> bool {
  if (mode == SchemaCompilerEvaluationMode::Fast) {
    for (const auto &step : steps) {
      if (!evaluate_step(step, instance, mode, callback)) {
        return false;
      }
    }

    return true;
  } else {
    bool overall{true};
    for (const auto &step : steps) {
      if (!evaluate_step(step, instance, mode, callback)) {
        overall = false;
      }
    }

    return overall;
  }
}

auto evaluate(const SchemaCompilerTemplate &steps,
              const JSON &instance) -> bool {
  // Otherwise what's the point of an exhaustive
  // evaluation if you don't get the results?
  return evaluate(steps, instance, SchemaCompilerEvaluationMode::Fast,
                  callback_noop);
} // namespace sourcemeta::jsontoolkit

} // namespace sourcemeta::jsontoolkit
