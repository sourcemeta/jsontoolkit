#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_DEFAULT_COMPILER_2020_12_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_DEFAULT_COMPILER_2020_12_H_

#include <sourcemeta/jsontoolkit/jsonschema_compile.h>

#include <cassert> // assert
#include <utility> // std::move

namespace {

auto type_to_assertion(
    const sourcemeta::jsontoolkit::Pointer &instance_location,
    const sourcemeta::jsontoolkit::Pointer &schema_location,
    const std::string &type)
    -> sourcemeta::jsontoolkit::SchemaCompilerTemplate {
  using namespace sourcemeta::jsontoolkit;
  if (type == "null") {
    return {SchemaCompilerAssertionType{
        instance_location, schema_location, JSON::Type::Null, {}}};
  } else if (type == "boolean") {
    return {SchemaCompilerAssertionType{
        instance_location, schema_location, JSON::Type::Boolean, {}}};
  } else if (type == "object") {
    return {SchemaCompilerAssertionType{
        instance_location, schema_location, JSON::Type::Object, {}}};
  } else if (type == "array") {
    return {SchemaCompilerAssertionType{
        instance_location, schema_location, JSON::Type::Array, {}}};
  } else if (type == "number") {
    return {SchemaCompilerLogicalOr{
        schema_location,
        {},
        {SchemaCompilerAssertionType{
             instance_location, schema_location, JSON::Type::Real, {}},
         SchemaCompilerAssertionType{
             instance_location, schema_location, JSON::Type::Integer, {}}}}};
  } else if (type == "integer") {
    return {SchemaCompilerAssertionType{
        instance_location, schema_location, JSON::Type::Integer, {}}};
  } else if (type == "string") {
    return {SchemaCompilerAssertionType{
        instance_location, schema_location, JSON::Type::String, {}}};
  } else {
    return {};
  }
}

} // namespace

namespace internal {

auto compiler_2020_12_validation_type(
    const sourcemeta::jsontoolkit::SchemaCompilerContext &context)
    -> sourcemeta::jsontoolkit::SchemaCompilerTemplate {
  using namespace sourcemeta::jsontoolkit;
  if (context.value.is_string()) {
    return type_to_assertion(context.instance_location, context.schema_location,
                             context.value.to_string());
  } else if (context.value.is_array()) {
    assert(!context.value.empty());
    SchemaCompilerTemplate disjunctors;
    for (const auto &type : context.value.as_array()) {
      assert(type.is_string());
      SchemaCompilerTemplate disjunctor{
          type_to_assertion(context.instance_location, context.schema_location,
                            type.to_string())};
      assert(disjunctor.size() == 1);
      disjunctors.push_back(std::move(disjunctor).front());
    }

    assert(disjunctors.size() == context.value.size());
    return {SchemaCompilerLogicalOr{
        context.schema_location, {}, std::move(disjunctors)}};
  }

  return {};
}

} // namespace internal

#endif
