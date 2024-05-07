#include <sourcemeta/jsontoolkit/jsonschema_compile.h>

#include <cassert>     // assert
#include <sstream>     // std::ostringstream
#include <string_view> // std::string_view
#include <type_traits> // std::is_same_v
#include <utility>     // std::move

namespace {

auto target_to_json(const sourcemeta::jsontoolkit::SchemaCompilerTarget &target)
    -> sourcemeta::jsontoolkit::JSON {
  using namespace sourcemeta::jsontoolkit;
  JSON result{JSON::make_object()};
  switch (target.first) {
    case SchemaCompilerTargetType::Instance:
      result.assign("category", JSON{"target"});
      result.assign("type", JSON{"instance"});
      result.assign("location", JSON{to_string(target.second)});
      return result;
    case SchemaCompilerTargetType::InstanceBasename:
      result.assign("category", JSON{"target"});
      result.assign("type", JSON{"instance-basename"});
      result.assign("location", JSON{to_string(target.second)});
      return result;
    case SchemaCompilerTargetType::InstanceParent:
      result.assign("category", JSON{"target"});
      result.assign("type", JSON{"instance-parent"});
      result.assign("location", JSON{to_string(target.second)});
      return result;
    case SchemaCompilerTargetType::ParentAdjacentAnnotations:
      result.assign("category", JSON{"target"});
      result.assign("type", JSON{"parent-adjacent-annotations"});
      result.assign("location", JSON{to_string(target.second)});
      return result;
    default:
      // We should never get here
      assert(false);
      return result;
  }
}

auto step_to_json(
    const sourcemeta::jsontoolkit::SchemaCompilerTemplate::value_type &step)
    -> sourcemeta::jsontoolkit::JSON;

template <typename T>
auto value_to_json(const sourcemeta::jsontoolkit::SchemaCompilerValue<T> &value)
    -> sourcemeta::jsontoolkit::JSON {
  using namespace sourcemeta::jsontoolkit;
  if (std::holds_alternative<SchemaCompilerTarget>(value)) {
    return target_to_json(std::get<SchemaCompilerTarget>(value));
  }

  assert(std::holds_alternative<T>(value));
  if constexpr (std::is_same_v<SchemaCompilerValueJSON, T>) {
    JSON result{JSON::make_object()};
    result.assign("category", JSON{"value"});
    result.assign("type", JSON{"json"});
    result.assign("value", JSON{std::get<T>(value)});
    return result;
  } else if constexpr (std::is_same_v<SchemaCompilerValueRegex, T>) {
    JSON result{JSON::make_object()};
    result.assign("category", JSON{"value"});
    result.assign("type", JSON{"regex"});
    result.assign("value", JSON{std::get<T>(value).second});
    return result;
  } else if constexpr (std::is_same_v<SchemaCompilerValueType, T>) {
    JSON result{JSON::make_object()};
    result.assign("category", JSON{"value"});
    result.assign("type", JSON{"type"});
    std::ostringstream type_string;
    type_string << std::get<T>(value);
    result.assign("value", JSON{type_string.str()});
    return result;
  } else if constexpr (std::is_same_v<SchemaCompilerValueString, T>) {
    JSON result{JSON::make_object()};
    result.assign("category", JSON{"value"});
    result.assign("type", JSON{"string"});
    result.assign("value", JSON{std::get<T>(value)});
    return result;
  } else if constexpr (std::is_same_v<SchemaCompilerValueUnsignedInteger, T>) {
    JSON result{JSON::make_object()};
    result.assign("category", JSON{"value"});
    result.assign("type", JSON{"unsigned-integer"});
    result.assign("value", JSON{std::get<T>(value)});
    return result;
  } else {
    static_assert(std::is_same_v<SchemaCompilerValueNone, T>);
    return JSON{nullptr};
  }
}

template <typename ValueType>
auto step_with_value_to_json(
    const std::string_view category, const std::string_view type,
    const sourcemeta::jsontoolkit::SchemaCompilerTarget &target,
    const sourcemeta::jsontoolkit::Pointer &relative_schema_location,
    const sourcemeta::jsontoolkit::Pointer &relative_instance_location,
    const std::string &keyword_location,
    const sourcemeta::jsontoolkit::SchemaCompilerValue<ValueType> &value,
    const sourcemeta::jsontoolkit::SchemaCompilerTemplate &condition)
    -> sourcemeta::jsontoolkit::JSON {
  using namespace sourcemeta::jsontoolkit;
  JSON result{JSON::make_object()};
  result.assign("category", JSON{category});
  result.assign("type", JSON{type});
  result.assign("target", target_to_json(target));
  result.assign("relativeSchemaLocation",
                JSON{to_string(relative_schema_location)});
  result.assign("relativeInstanceLocation",
                JSON{to_string(relative_instance_location)});
  result.assign("absoluteKeywordLocation", JSON{keyword_location});
  result.assign("value", value_to_json(value));
  result.assign("condition", JSON::make_array());
  for (const auto &substep : condition) {
    result.at("condition").push_back(step_to_json(substep));
  }

  return result;
}

template <typename ValueType>
auto step_applicator_to_json(
    const std::string_view category, const std::string_view type,
    const sourcemeta::jsontoolkit::SchemaCompilerTarget &target,
    const sourcemeta::jsontoolkit::Pointer &relative_schema_location,
    const sourcemeta::jsontoolkit::Pointer &relative_instance_location,
    const std::string &keyword_location,
    const sourcemeta::jsontoolkit::SchemaCompilerValue<ValueType> &value,
    const sourcemeta::jsontoolkit::SchemaCompilerTemplate &children,
    const sourcemeta::jsontoolkit::SchemaCompilerTemplate &condition)
    -> sourcemeta::jsontoolkit::JSON {
  using namespace sourcemeta::jsontoolkit;
  JSON result{JSON::make_object()};
  result.assign("category", JSON{category});
  result.assign("type", JSON{type});
  result.assign("target", target_to_json(target));
  result.assign("relativeSchemaLocation",
                JSON{to_string(relative_schema_location)});
  result.assign("relativeInstanceLocation",
                JSON{to_string(relative_instance_location)});
  result.assign("absoluteKeywordLocation", JSON{keyword_location});
  result.assign("value", value_to_json(value));
  result.assign("condition", JSON::make_array());
  result.assign("children", JSON::make_array());

  for (const auto &substep : condition) {
    result.at("condition").push_back(step_to_json(substep));
  }

  for (const auto &child : children) {
    result.at("children").push_back(step_to_json(child));
  }

  return result;
}

auto control_to_json(
    const std::string_view type,
    const sourcemeta::jsontoolkit::Pointer &relative_schema_location,
    const sourcemeta::jsontoolkit::Pointer &relative_instance_location,
    const std::string &keyword_location, const std::size_t id,
    const sourcemeta::jsontoolkit::SchemaCompilerTemplate &children)
    -> sourcemeta::jsontoolkit::JSON {
  using namespace sourcemeta::jsontoolkit;
  JSON result{JSON::make_object()};
  result.assign("category", JSON{"control"});
  result.assign("type", JSON{type});
  result.assign("relativeSchemaLocation",
                JSON{to_string(relative_schema_location)});
  result.assign("relativeInstanceLocation",
                JSON{to_string(relative_instance_location)});
  result.assign("absoluteKeywordLocation", JSON{keyword_location});
  result.assign("id", JSON{id});
  result.assign("children", JSON::make_array());
  for (const auto &child : children) {
    result.at("children").push_back(step_to_json(child));
  }

  return result;
}

// TODO: Simplify this class, which is already getting quite repetitive
struct StepVisitor {
  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerAssertionFail
                      &assertion) const -> sourcemeta::jsontoolkit::JSON {
    return step_with_value_to_json("assertion", "fail", assertion.target,
                                   assertion.relative_schema_location,
                                   assertion.relative_instance_location,
                                   assertion.keyword_location, assertion.value,
                                   assertion.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerAssertionDefines
                      &assertion) const -> sourcemeta::jsontoolkit::JSON {
    return step_with_value_to_json("assertion", "defines", assertion.target,
                                   assertion.relative_schema_location,
                                   assertion.relative_instance_location,
                                   assertion.keyword_location, assertion.value,
                                   assertion.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerAssertionType
                      &assertion) const -> sourcemeta::jsontoolkit::JSON {
    return step_with_value_to_json("assertion", "type", assertion.target,
                                   assertion.relative_schema_location,
                                   assertion.relative_instance_location,
                                   assertion.keyword_location, assertion.value,
                                   assertion.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerAssertionRegex
                      &assertion) const -> sourcemeta::jsontoolkit::JSON {
    return step_with_value_to_json("assertion", "regex", assertion.target,
                                   assertion.relative_schema_location,
                                   assertion.relative_instance_location,
                                   assertion.keyword_location, assertion.value,
                                   assertion.condition);
  }

  auto
  operator()(const sourcemeta::jsontoolkit::SchemaCompilerAssertionNotContains
                 &assertion) const -> sourcemeta::jsontoolkit::JSON {
    return step_with_value_to_json(
        "assertion", "not-contains", assertion.target,
        assertion.relative_schema_location,
        assertion.relative_instance_location, assertion.keyword_location,
        assertion.value, assertion.condition);
  }

  auto
  operator()(const sourcemeta::jsontoolkit::SchemaCompilerAssertionSizeGreater
                 &assertion) const -> sourcemeta::jsontoolkit::JSON {
    return step_with_value_to_json(
        "assertion", "size-greater", assertion.target,
        assertion.relative_schema_location,
        assertion.relative_instance_location, assertion.keyword_location,
        assertion.value, assertion.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerAssertionEqual
                      &assertion) const -> sourcemeta::jsontoolkit::JSON {
    return step_with_value_to_json("assertion", "equal", assertion.target,
                                   assertion.relative_schema_location,
                                   assertion.relative_instance_location,
                                   assertion.keyword_location, assertion.value,
                                   assertion.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerLogicalOr
                      &logical) const -> sourcemeta::jsontoolkit::JSON {
    return step_applicator_to_json(
        "logical", "or", logical.target, logical.relative_schema_location,
        logical.relative_instance_location, logical.keyword_location,
        logical.value, logical.children, logical.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerLogicalAnd
                      &logical) const -> sourcemeta::jsontoolkit::JSON {
    return step_applicator_to_json(
        "logical", "and", logical.target, logical.relative_schema_location,
        logical.relative_instance_location, logical.keyword_location,
        logical.value, logical.children, logical.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerLogicalXor
                      &logical) const -> sourcemeta::jsontoolkit::JSON {
    return step_applicator_to_json(
        "logical", "xor", logical.target, logical.relative_schema_location,
        logical.relative_instance_location, logical.keyword_location,
        logical.value, logical.children, logical.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerLogicalNot
                      &logical) const -> sourcemeta::jsontoolkit::JSON {
    return step_applicator_to_json(
        "logical", "not", logical.target, logical.relative_schema_location,
        logical.relative_instance_location, logical.keyword_location,
        logical.value, logical.children, logical.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerControlLabel
                      &control) const -> sourcemeta::jsontoolkit::JSON {
    return control_to_json("label", control.relative_schema_location,
                           control.relative_instance_location,
                           control.keyword_location, control.id,
                           control.children);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerControlJump
                      &control) const -> sourcemeta::jsontoolkit::JSON {
    return control_to_json("jump", control.relative_schema_location,
                           control.relative_instance_location,
                           control.keyword_location, control.id,
                           control.children);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerAnnotationPublic
                      &annotation) const -> sourcemeta::jsontoolkit::JSON {
    return step_with_value_to_json("annotation", "public", annotation.target,
                                   annotation.relative_schema_location,
                                   annotation.relative_instance_location,
                                   annotation.keyword_location,
                                   annotation.value, annotation.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerAnnotationPrivate
                      &annotation) const -> sourcemeta::jsontoolkit::JSON {
    return step_with_value_to_json("annotation", "private", annotation.target,
                                   annotation.relative_schema_location,
                                   annotation.relative_instance_location,
                                   annotation.keyword_location,
                                   annotation.value, annotation.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerLoopProperties
                      &loop) const -> sourcemeta::jsontoolkit::JSON {
    return step_applicator_to_json(
        "loop", "properties", loop.target, loop.relative_schema_location,
        loop.relative_instance_location, loop.keyword_location, loop.value,
        loop.children, loop.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerLoopItems &loop)
      const -> sourcemeta::jsontoolkit::JSON {
    return step_applicator_to_json(
        "loop", "items", loop.target, loop.relative_schema_location,
        loop.relative_instance_location, loop.keyword_location, loop.value,
        loop.children, loop.condition);
  }
};

auto step_to_json(
    const sourcemeta::jsontoolkit::SchemaCompilerTemplate::value_type &step)
    -> sourcemeta::jsontoolkit::JSON {
  static StepVisitor visitor;
  return std::visit(visitor, step);
}

} // namespace

namespace sourcemeta::jsontoolkit {

auto to_json(const SchemaCompilerTemplate &steps) -> JSON {
  JSON result{JSON::make_array()};
  for (const auto &step : steps) {
    result.push_back(step_to_json(step));
  }

  return result;
}

} // namespace sourcemeta::jsontoolkit
