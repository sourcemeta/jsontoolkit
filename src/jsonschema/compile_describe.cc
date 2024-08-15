#include <sourcemeta/jsontoolkit/jsonschema_compile.h>

#include <cassert> // assert
#include <sstream> // std::ostringstream
#include <variant> // std::visit

namespace {
using namespace sourcemeta::jsontoolkit;

template <typename T>
auto step_value(const SchemaCompilerStepValue<T> &value) -> const T & {
  assert(std::holds_alternative<T>(value));
  return std::get<T>(value);
}

template <typename T> auto step_value(const T &step) -> decltype(auto) {
  return step_value(step.value);
}

auto to_string(const JSON::Type type) -> std::string {
  // Otherwise the type "real" might not make a lot
  // of sense to JSON Schema users
  if (type == JSON::Type::Real) {
    return "number";
  } else {
    std::ostringstream result;
    result << type;
    return result.str();
  }
}

auto describe_type_check(const bool valid, const JSON::Type current,
                         const JSON::Type expected,
                         std::ostringstream &message) -> void {
  message << "The value was expected to be of type ";
  message << to_string(expected);
  if (!valid) {
    message << " but it was of type ";
    message << to_string(current);
  }
}

auto describe_types_check(const bool valid, const JSON::Type current,
                          const std::set<JSON::Type> &expected,
                          std::ostringstream &message) -> void {
  assert(expected.size() > 1);
  auto copy = expected;
  if (copy.contains(JSON::Type::Real) && copy.contains(JSON::Type::Integer)) {
    copy.erase(JSON::Type::Integer);
  }

  if (copy.size() == 1) {
    describe_type_check(valid, current, *(copy.cbegin()), message);
    return;
  }

  message << "The value was expected to be of type ";
  for (auto iterator = copy.cbegin(); iterator != copy.cend(); ++iterator) {
    if (std::next(iterator) == copy.cend()) {
      message << "or " << to_string(*iterator);
    } else {
      message << to_string(*iterator) << ", ";
    }
  }

  if (valid) {
    message << " and it was of type ";
  } else {
    message << " but it was of type ";
  }

  if (valid && current == JSON::Type::Integer &&
      copy.contains(JSON::Type::Real)) {
    message << "number";
  } else {
    message << to_string(current);
  }
}

struct DescribeVisitor {
  const bool valid;
  const Pointer &evaluate_path;
  const JSON &target;
  const JSON &annotation;

  auto operator()(const SchemaCompilerLogicalOr &) const -> std::string {
    return "The target is expected to match at least one of the given "
           "assertions";
  }
  auto operator()(const SchemaCompilerLogicalAnd &) const -> std::string {
    return "The target is expected to match all of the given assertions";
  }
  auto operator()(const SchemaCompilerLogicalXor &) const -> std::string {
    return "The target is expected to match one and only one of the given "
           "assertions";
  }
  auto operator()(const SchemaCompilerLogicalTry &) const -> std::string {
    return "The target might match all of the given assertions";
  }
  auto operator()(const SchemaCompilerLogicalNot &) const -> std::string {
    return "The given schema is expected to not validate successfully";
  }
  auto
  operator()(const SchemaCompilerInternalContainer &) const -> std::string {
    return "Internal";
  }
  auto
  operator()(const SchemaCompilerInternalAnnotation &) const -> std::string {
    return "The target was annotated with the given value";
  }
  auto operator()(const SchemaCompilerInternalNoAdjacentAnnotation &) const
      -> std::string {
    return "The target was not annotated with the given value at the same "
           "schema location";
  }
  auto
  operator()(const SchemaCompilerInternalNoAnnotation &) const -> std::string {
    return "The target was not annotated with the given value";
  }
  auto
  operator()(const SchemaCompilerInternalDefinesAll &) const -> std::string {
    return "The target object is expected to define all of the given "
           "properties";
  }
  auto operator()(const SchemaCompilerControlLabel &) const -> std::string {
    return "Mark the current position of the evaluation process for future "
           "jumps";
  }
  auto operator()(const SchemaCompilerControlMark &) const -> std::string {
    return "Mark the current position of the evaluation process for future "
           "jumps";
  }
  auto operator()(const SchemaCompilerControlJump &) const -> std::string {
    return "Jump to another point of the evaluation process";
  }
  auto operator()(const SchemaCompilerControlDynamicAnchorJump &) const
      -> std::string {
    return "Jump to a dynamic anchor";
  }
  auto operator()(const SchemaCompilerAnnotationPublic &) const -> std::string {
    return "Emit an annotation";
  }
  auto operator()(const SchemaCompilerLoopProperties &) const -> std::string {
    return "Loop over the properties of the target object";
  }
  auto operator()(const SchemaCompilerLoopKeys &) const -> std::string {
    return "Loop over the property keys of the target object";
  }
  auto operator()(const SchemaCompilerLoopItems &) const -> std::string {
    return "Loop over the items of the target array";
  }
  auto operator()(const SchemaCompilerLoopItemsFromAnnotationIndex &) const
      -> std::string {
    return "Loop over the items of the target array potentially bound by an "
           "annotation result";
  }
  auto operator()(const SchemaCompilerLoopContains &) const -> std::string {
    return "A certain number of array items must satisfy the given constraints";
  }
  auto operator()(const SchemaCompilerAssertionFail &) const -> std::string {
    return "Abort evaluation on failure";
  }
  auto operator()(const SchemaCompilerAssertionDefines &) const -> std::string {
    return "The target object is expected to define the given property";
  }
  auto
  operator()(const SchemaCompilerAssertionDefinesAll &) const -> std::string {
    return "The target object is expected to define all of the given "
           "properties";
  }

  auto
  operator()(const SchemaCompilerAssertionType &step) const -> std::string {
    std::ostringstream message;
    describe_type_check(this->valid, this->target.type(), step_value(step),
                        message);
    return message.str();
  }

  auto operator()(const SchemaCompilerAssertionTypeStrict &step) const
      -> std::string {
    std::ostringstream message;
    const auto &value{step_value(step)};
    if (!this->valid && value == JSON::Type::Real &&
        this->target.type() == JSON::Type::Integer) {
      message
          << "The value was expected to be a real number but it was an integer";
    } else if (!this->valid && value == JSON::Type::Integer &&
               this->target.type() == JSON::Type::Real) {
      message
          << "The value was expected to be an integer but it was a real number";
    } else {
      describe_type_check(this->valid, this->target.type(), value, message);
    }

    return message.str();
  }

  auto
  operator()(const SchemaCompilerAssertionTypeAny &step) const -> std::string {
    std::ostringstream message;
    describe_types_check(this->valid, this->target.type(), step_value(step),
                         message);
    return message.str();
  }

  auto operator()(const SchemaCompilerAssertionTypeStrictAny &step) const
      -> std::string {
    std::ostringstream message;
    describe_types_check(this->valid, this->target.type(), step_value(step),
                         message);
    return message.str();
  }

  auto operator()(const SchemaCompilerAssertionRegex &) const -> std::string {
    return "The target string is expected to match the given regular "
           "expression";
  }
  auto
  operator()(const SchemaCompilerAssertionSizeGreater &) const -> std::string {
    return "The target size is expected to be greater than the given number";
  }
  auto
  operator()(const SchemaCompilerAssertionSizeLess &) const -> std::string {
    return "The target size is expected to be less than the given number";
  }
  auto
  operator()(const SchemaCompilerAssertionSizeEqual &) const -> std::string {
    return "The target size is expected to be equal to the given number";
  }

  auto operator()(const SchemaCompilerAssertionEqual &) const -> std::string {
    return "The target is expected to be equal to the given value";
  }
  auto operator()(const SchemaCompilerAssertionGreaterEqual &) const {
    return "The target number is expected to be greater than or equal to the "
           "given number";
  }
  auto
  operator()(const SchemaCompilerAssertionLessEqual &) const -> std::string {
    return "The target number is expected to be less than or equal to the "
           "given number";
  }
  auto operator()(const SchemaCompilerAssertionGreater &) const -> std::string {
    return "The target number is expected to be greater than the given number";
  }
  auto operator()(const SchemaCompilerAssertionLess &) const -> std::string {
    return "The target number is expected to be less than the given number";
  }
  auto operator()(const SchemaCompilerAssertionUnique &) const -> std::string {
    return "The target array is expected to not contain duplicates";
  }
  auto
  operator()(const SchemaCompilerAssertionDivisible &) const -> std::string {
    return "The target number is expected to be divisible by the given number";
  }
  auto
  operator()(const SchemaCompilerAssertionStringType &) const -> std::string {
    return "The target string is expected to match the given logical type";
  }
  auto
  operator()(const SchemaCompilerAssertionEqualsAny &) const -> std::string {
    return "The target document is expected to be one of the given values";
  }
};

} // namespace

namespace sourcemeta::jsontoolkit {

auto describe(const bool valid, const SchemaCompilerTemplate::value_type &step,
              const Pointer &evaluate_path, const Pointer &instance_location,
              const JSON &instance, const JSON &annotation) -> std::string {
  return std::visit<std::string>(
      DescribeVisitor{valid, evaluate_path, get(instance, instance_location),
                      annotation},
      step);
}

} // namespace sourcemeta::jsontoolkit
