#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_DEFAULT_COMPILER_DRAFT4_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_DEFAULT_COMPILER_DRAFT4_H_

#include <sourcemeta/jsontoolkit/jsonschema.h>
#include <sourcemeta/jsontoolkit/jsonschema_compile.h>

#include <cassert> // assert
#include <utility> // std::move

namespace {

auto type_string_to_assertion(
    const sourcemeta::jsontoolkit::SchemaCompilerContext &context,
    const std::string &type)
    -> sourcemeta::jsontoolkit::SchemaCompilerTemplate {
  using namespace sourcemeta::jsontoolkit;
  if (type == "null") {
    return {make<SchemaCompilerAssertionType>(context, JSON::Type::Null, {})};
  } else if (type == "boolean") {
    return {
        make<SchemaCompilerAssertionType>(context, JSON::Type::Boolean, {})};
  } else if (type == "object") {
    return {make<SchemaCompilerAssertionType>(context, JSON::Type::Object, {})};
  } else if (type == "array") {
    return {make<SchemaCompilerAssertionType>(context, JSON::Type::Array, {})};
  } else if (type == "number") {
    return {make<SchemaCompilerLogicalOr>(
        context, {},
        {make<SchemaCompilerAssertionType>(context, JSON::Type::Real, {}),
         make<SchemaCompilerAssertionType>(context, JSON::Type::Integer, {})})};
  } else if (type == "integer") {
    return {
        make<SchemaCompilerAssertionType>(context, JSON::Type::Integer, {})};
  } else if (type == "string") {
    return {make<SchemaCompilerAssertionType>(context, JSON::Type::String, {})};
  } else {
    return {};
  }
}

} // namespace

namespace internal {

auto compiler_draft4_validation_type(
    const sourcemeta::jsontoolkit::SchemaCompilerContext &context)
    -> sourcemeta::jsontoolkit::SchemaCompilerTemplate {
  using namespace sourcemeta::jsontoolkit;
  if (context.value.is_string()) {
    return type_string_to_assertion(context, context.value.to_string());
  } else if (context.value.is_array()) {
    assert(!context.value.empty());
    SchemaCompilerTemplate disjunctors;
    for (const auto &type : context.value.as_array()) {
      assert(type.is_string());
      SchemaCompilerTemplate disjunctor{
          type_string_to_assertion(context, type.to_string())};
      assert(disjunctor.size() == 1);
      disjunctors.push_back(std::move(disjunctor).front());
    }

    assert(disjunctors.size() == context.value.size());
    return {make<SchemaCompilerLogicalOr>(context, {}, std::move(disjunctors))};
  }

  return {};
}

auto compiler_draft4_validation_required(
    const sourcemeta::jsontoolkit::SchemaCompilerContext &context)
    -> sourcemeta::jsontoolkit::SchemaCompilerTemplate {
  using namespace sourcemeta::jsontoolkit;
  assert(context.value.is_array());
  assert(!context.value.empty());
  SchemaCompilerTemplate children;

  for (const auto &property : context.value.as_array()) {
    assert(property.is_string());
    children.push_back(make<SchemaCompilerAssertionDefines>(
        context, property.to_string(), {}));
  }

  return {make<SchemaCompilerLogicalAnd>(
      context,
      {make<SchemaCompilerAssertionType>(context, JSON::Type::Object, {})},
      std::move(children))};
}

auto compiler_draft4_validation_allof(
    const sourcemeta::jsontoolkit::SchemaCompilerContext &context)
    -> sourcemeta::jsontoolkit::SchemaCompilerTemplate {
  using namespace sourcemeta::jsontoolkit;
  assert(context.value.is_array());
  assert(!context.value.empty());
  SchemaCompilerTemplate children;

  for (std::uint64_t index = 0; index < context.value.size(); index++) {
    for (auto &&step :
         compile(context, {static_cast<Pointer::Token::Index>(index)})) {
      children.push_back(std::move(step));
    }
  }

  return {make<SchemaCompilerLogicalAnd>(context, {}, std::move(children))};
}

} // namespace internal
#endif
