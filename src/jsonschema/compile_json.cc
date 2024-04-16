#include <sourcemeta/jsontoolkit/jsonschema_compile.h>

#include <cassert>     // assert
#include <sstream>     // std::ostringstream
#include <string_view> // std::string_view
#include <utility>     // std::move

namespace {

struct TargetVisitor {
  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerTargetInstance
                      &pointer) const -> sourcemeta::jsontoolkit::JSON {
    using namespace sourcemeta::jsontoolkit;
    JSON result{JSON::make_object()};
    result.assign("category", JSON{"target"});
    result.assign("type", JSON{"instance"});
    result.assign("location", JSON{to_string(pointer)});
    return result;
  }
};

auto step_to_json(
    const sourcemeta::jsontoolkit::SchemaCompilerTemplate::value_type &step)
    -> sourcemeta::jsontoolkit::JSON;

auto assertion_to_json(
    const std::string_view type,
    const sourcemeta::jsontoolkit::SchemaCompilerTarget &target,
    const sourcemeta::jsontoolkit::Pointer &evaluation_path,
    const std::string &keyword_location, sourcemeta::jsontoolkit::JSON &&value,
    const sourcemeta::jsontoolkit::SchemaCompilerTemplate &condition)
    -> sourcemeta::jsontoolkit::JSON {
  using namespace sourcemeta::jsontoolkit;
  static const TargetVisitor visitor;
  JSON result{JSON::make_object()};
  result.assign("category", JSON{"assertion"});
  result.assign("type", JSON{type});
  result.assign("target", std::visit(visitor, target));
  result.assign("keywordLocation", JSON{to_string(evaluation_path)});
  result.assign("absoluteKeywordLocation", JSON{keyword_location});
  result.assign("value", std::move(value));
  result.assign("condition", JSON::make_array());
  for (const auto &substep : condition) {
    result.at("condition").push_back(step_to_json(substep));
  }

  return result;
}

auto logical_to_json(
    const std::string_view type,
    const sourcemeta::jsontoolkit::Pointer &evaluation_path,
    const std::string &keyword_location,
    const sourcemeta::jsontoolkit::SchemaCompilerTemplate &children,
    const sourcemeta::jsontoolkit::SchemaCompilerTemplate &condition)
    -> sourcemeta::jsontoolkit::JSON {
  using namespace sourcemeta::jsontoolkit;
  JSON result{JSON::make_object()};
  result.assign("category", JSON{"logical"});
  result.assign("type", JSON{type});
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

auto value_string(const sourcemeta::jsontoolkit::SchemaCompilerValueString
                      &value) -> sourcemeta::jsontoolkit::JSON {
  using namespace sourcemeta::jsontoolkit;
  JSON result{JSON::make_object()};
  result.assign("category", JSON{"value"});
  result.assign("type", JSON{"string"});
  result.assign("value", JSON{value});
  return result;
}

auto value_type(const sourcemeta::jsontoolkit::SchemaCompilerValueType &value)
    -> sourcemeta::jsontoolkit::JSON {
  using namespace sourcemeta::jsontoolkit;
  JSON result{JSON::make_object()};
  result.assign("category", JSON{"value"});
  result.assign("type", JSON{"type"});
  std::ostringstream type_string;
  type_string << value;
  result.assign("value", JSON{type_string.str()});
  return result;
}

struct StepVisitor {
  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerAssertionFail
                      &assertion) const -> sourcemeta::jsontoolkit::JSON {
    using namespace sourcemeta::jsontoolkit;
    assert(std::holds_alternative<SchemaCompilerValueNone>(assertion.value));
    return assertion_to_json(
        "fail", assertion.target, assertion.evaluation_path,
        assertion.keyword_location, JSON{nullptr}, assertion.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerAssertionDefines
                      &assertion) const -> sourcemeta::jsontoolkit::JSON {
    using namespace sourcemeta::jsontoolkit;
    assert(std::holds_alternative<SchemaCompilerValueString>(assertion.value));
    return assertion_to_json(
        "defines", assertion.target, assertion.evaluation_path,
        assertion.keyword_location,
        value_string(std::get<SchemaCompilerValueString>(assertion.value)),
        assertion.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerAssertionType
                      &assertion) const -> sourcemeta::jsontoolkit::JSON {
    using namespace sourcemeta::jsontoolkit;
    assert(std::holds_alternative<SchemaCompilerValueType>(assertion.value));
    return assertion_to_json(
        "type", assertion.target, assertion.evaluation_path,
        assertion.keyword_location,
        value_type(std::get<SchemaCompilerValueType>(assertion.value)),
        assertion.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerLogicalOr
                      &logical) const -> sourcemeta::jsontoolkit::JSON {
    return logical_to_json("or", logical.evaluation_path,
                           logical.keyword_location, logical.children,
                           logical.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerLogicalAnd
                      &logical) const -> sourcemeta::jsontoolkit::JSON {
    return logical_to_json("and", logical.evaluation_path,
                           logical.keyword_location, logical.children,
                           logical.condition);
  }

  auto operator()(const sourcemeta::jsontoolkit::SchemaCompilerControlLabel
                      &control) const -> sourcemeta::jsontoolkit::JSON {
    return control_to_json("label", control.id, control.children);
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
