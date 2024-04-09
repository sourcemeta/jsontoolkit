#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_DEFAULT_COMPILER_DRAFT0_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_DEFAULT_COMPILER_DRAFT0_H_

#include <sourcemeta/jsontoolkit/jsonschema_compile.h>

#include <cassert> // assert
#include <utility> // std::move

namespace {

// See https://json-schema.org/draft-00/draft-zyp-json-schema-00.txt
//
// The following are acceptable strings:
//
// - string: Value must be a string
// - number: Value must be a number, floating point numbers are allowed
// - integer: Value must be an integer, no floating point numbers are allowed
// - boolean: Value must be a boolean
// - object: Value must be an object
// - array: Value must be an array
// - null: Value must be null
// - any: Value may be of any type including null
auto compiler_draft0_type_to_assertion(
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

    // See https://json-schema.org/draft-00/draft-zyp-json-schema-00.txt
    // If the property is not defined or is not in this list, than any type of
    // value is acceptable.  Other type values may be used for custom purposes,
    // but minimal validators of the specification implementation can allow any
    // instance value on unknown type values.
  } else {
    return {};
  }
}

} // namespace

namespace internal {

auto compiler_draft0_validation_type(
    const sourcemeta::jsontoolkit::SchemaCompilerContext &context)
    -> sourcemeta::jsontoolkit::SchemaCompilerTemplate {
  using namespace sourcemeta::jsontoolkit;

  if (context.value.is_string()) {
    return compiler_draft0_type_to_assertion(context.instance_location,
                                             context.schema_location,
                                             context.value.to_string());
  } else if (context.value.is_array()) {
    // See https://json-schema.org/draft-00/draft-zyp-json-schema-00.txt
    // An array with two or more items which indicates a union of type
    // definitions.
    assert(context.value.size() >= 2);

    SchemaCompilerTemplate disjunctors;
    for (const auto &type : context.value.as_array()) {
      if (type.is_string()) {
        SchemaCompilerTemplate disjunctor{compiler_draft0_type_to_assertion(
            context.instance_location, context.schema_location,
            type.to_string())};
        assert(disjunctor.size() == 1);
        disjunctors.push_back(std::move(disjunctor).front());
      } else if (type.is_object()) {
        // TODO: Handle the schema case with recursion
      }
    }

    assert(disjunctors.size() == context.value.size());
    return {SchemaCompilerLogicalOr{
        context.schema_location, {}, std::move(disjunctors)}};
  }

  return {};
}

} // namespace internal

#endif
