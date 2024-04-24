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
    case SchemaCompilerTargetType::TemplateInstance:
      result.assign("category", JSON{"target"});
      result.assign("type", JSON{"template-instance"});
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
  // TODO: Support templated values too
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
  } else {
    static_assert(std::is_same_v<SchemaCompilerValueNone, T>);
    return JSON{nullptr};
  }
}

template <typename ValueType>
auto step_with_value_to_json(
    const std::string_view category, const std::string_view type,
    const sourcemeta::jsontoolkit::SchemaCompilerTarget &target,
    const sourcemeta::jsontoolkit::Pointer &evaluation_path,
    const std::string &keyword_location,
    const sourcemeta::jsontoolkit::SchemaCompilerValue<ValueType> &value,
    const sourcemeta::jsontoolkit::SchemaCompilerTemplate &condition)
    -> sourcemeta::jsontoolkit::JSON {
  using namespace sourcemeta::jsontoolkit;
  JSON result{JSON::make_object()};
  result.assign("category", JSON{category});
  result.assign("type", JSON{type});
  result.assign("target", target_to_json(target));
  result.assign("keywordLocation", JSON{to_string(evaluation_path)});
  result.assign("absoluteKeywordLocation", JSON{keyword_location});
  result.assign("value", value_to_json(value));
  result.assign("condition", JSON::make_array());
  for (const auto &substep : condition) {
    result.at("condition").push_back(step_to_json(substep));
  }

  return result;
}

auto step_applicator_to_json(
    const std::string_view category, const std::string_view type,
    const sourcemeta::jsontoolkit::SchemaCompilerTarget &target,
    const sourcemeta::jsontoolkit::Pointer &evaluation_path,
    const std::string &keyword_location,
    const sourcemeta::jsontoolkit::SchemaCompilerTemplate &children,
    const sourcemeta::jsontoolkit::SchemaCompilerTemplate &condition)
    -> sourcemeta::jsontoolkit::JSON {
  using namespace sourcemeta::jsontoolkit;
  JSON result{JSON::make_object()};
  result.assign("category", JSON{category});
  result.assign("type", JSON{type});
  result.assign("target", target_to_json(target));
  result.assign("keywordLocation", JSON{to_string(evaluation_path)});
  result.assign("absoluteKeywordLocation", JSON{keyword_location});
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

auto control_to_json(const std::string_view type, const std::size_t id,
                     const sourcemeta::jsontoolkit::SchemaCompilerTemplate
                         &children) -> sourcemeta::jsontoolkit::JSON {
  using namespace sourcemeta::jsontoolkit;
  JSON result{JSON::make_object()};
  result.assign("category", JSON{"control"});
  result.assign("type", JSON{type});
  result.assign("id", JSON{id});
  result.assign("children", JSON::make_array());
  for (const auto &child : children) {
    result.at("children").push_back(step_to_json(child));
  }

  return result;
}

struct StepVisitor {
  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerAssertionFail
                      &assertion) const -> sourcemeta::jsontoolkit::JSON {
    return step_with_value_to_json(
        "assertion", "fail", assertion.target, assertion.evaluation_path,
        assertion.keyword_location, assertion.value, assertion.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerAssertionDefines
                      &assertion) const -> sourcemeta::jsontoolkit::JSON {
    return step_with_value_to_json(
        "assertion", "defines", assertion.target, assertion.evaluation_path,
        assertion.keyword_location, assertion.value, assertion.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerAssertionType
                      &assertion) const -> sourcemeta::jsontoolkit::JSON {
    return step_with_value_to_json(
        "assertion", "type", assertion.target, assertion.evaluation_path,
        assertion.keyword_location, assertion.value, assertion.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerAssertionRegex
                      &assertion) const -> sourcemeta::jsontoolkit::JSON {
    return step_with_value_to_json(
        "assertion", "regex", assertion.target, assertion.evaluation_path,
        assertion.keyword_location, assertion.value, assertion.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerLogicalOr
                      &logical) const -> sourcemeta::jsontoolkit::JSON {
    return step_applicator_to_json(
        "logical", "or", logical.target, logical.evaluation_path,
        logical.keyword_location, logical.children, logical.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerLogicalAnd
                      &logical) const -> sourcemeta::jsontoolkit::JSON {
    return step_applicator_to_json(
        "logical", "and", logical.target, logical.evaluation_path,
        logical.keyword_location, logical.children, logical.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerControlLabel
                      &control) const -> sourcemeta::jsontoolkit::JSON {
    return control_to_json("label", control.id, control.children);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerAnnotationPublic
                      &annotation) const -> sourcemeta::jsontoolkit::JSON {
    return step_with_value_to_json(
        "annotation", "public", annotation.target, annotation.evaluation_path,
        annotation.keyword_location, annotation.value, annotation.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerAnnotationPrivate
                      &annotation) const -> sourcemeta::jsontoolkit::JSON {
    return step_with_value_to_json(
        "annotation", "private", annotation.target, annotation.evaluation_path,
        annotation.keyword_location, annotation.value, annotation.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerLoopProperties
                      &loop) const -> sourcemeta::jsontoolkit::JSON {
    return step_applicator_to_json("loop", "properties", loop.target,
                                   loop.evaluation_path, loop.keyword_location,
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
