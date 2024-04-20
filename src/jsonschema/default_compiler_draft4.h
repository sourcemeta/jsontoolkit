#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_DEFAULT_COMPILER_DRAFT4_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_DEFAULT_COMPILER_DRAFT4_H_

#include <sourcemeta/jsontoolkit/jsonschema.h>
#include <sourcemeta/jsontoolkit/jsonschema_compile.h>

#include <cassert> // assert
#include <sstream> // std::ostringstream
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
        context,
        {make<SchemaCompilerAssertionType>(context, JSON::Type::Real, {}),
         make<SchemaCompilerAssertionType>(context, JSON::Type::Integer, {})},
        {})};
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
using namespace sourcemeta::jsontoolkit;

// TODO: Handle recursive references by detecting if the corresponding
// label was registered already or not. If it was, jump to it with a step
// instruction rather than compiling the destination.
auto compiler_draft4_core_ref(const SchemaCompilerContext &context)
    -> SchemaCompilerTemplate {
  const auto type{ReferenceType::Static};
  const auto current{
      to_uri(context.relative_pointer, context.base).recompose()};
  assert(context.frame.contains({type, current}));
  const auto &entry{context.frame.at({type, current})};
  assert(context.references.contains({type, entry.pointer}));
  const auto &reference{context.references.at({type, entry.pointer})};

  // The label captures the origin and the destination
  std::ostringstream label;
  label << current << "|" << reference.destination;
  return {make<SchemaCompilerControlLabel>(
      std::hash<std::string>{}(label.str()),
      compile(context, empty_pointer, empty_pointer, reference.destination))};
}

auto compiler_draft4_validation_type(const SchemaCompilerContext &context)
    -> SchemaCompilerTemplate {
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
    return {make<SchemaCompilerLogicalOr>(context, std::move(disjunctors), {})};
  }

  return {};
}

auto compiler_draft4_validation_required(const SchemaCompilerContext &context)
    -> SchemaCompilerTemplate {
  assert(context.value.is_array());
  assert(!context.value.empty());
  SchemaCompilerTemplate children;

  for (const auto &property : context.value.as_array()) {
    assert(property.is_string());
    children.push_back(make<SchemaCompilerAssertionDefines>(
        context, property.to_string(), {}));
  }

  return {make<SchemaCompilerLogicalAnd>(
      context, std::move(children),
      {make<SchemaCompilerAssertionType>(context, JSON::Type::Object, {})})};
}

auto compiler_draft4_validation_allof(const SchemaCompilerContext &context)
    -> SchemaCompilerTemplate {
  assert(context.value.is_array());
  assert(!context.value.empty());

  SchemaCompilerTemplate result;
  for (std::uint64_t index = 0; index < context.value.size(); index++) {
    for (auto &&step :
         compile(context, {static_cast<Pointer::Token::Index>(index)})) {
      result.push_back(std::move(step));
    }
  }

  return result;
}

auto compiler_draft4_validation_properties(const SchemaCompilerContext &context)
    -> SchemaCompilerTemplate {
  assert(context.value.is_object());
  if (context.value.empty()) {
    return {};
  }

  SchemaCompilerTemplate children;
  for (auto &[key, subschema] : context.value.as_object()) {
    auto substeps{compile(context, {key}, {key})};
    // Annotations as such don't exist in Draft 4,
    // so emit a private annotation instead
    substeps.push_back(SchemaCompilerAnnotationPrivate{
        context.instance_location,
        context.evaluation_path,
        to_uri(context.relative_pointer, context.base).recompose(),
        JSON{key},
        {}});
    children.push_back(make<SchemaCompilerLogicalAnd>(
        context, std::move(substeps),
        {make<SchemaCompilerAssertionDefines>(context, key, {})}));
  }

  return {make<SchemaCompilerLogicalAnd>(
      context, std::move(children),
      {make<SchemaCompilerAssertionType>(context, JSON::Type::Object, {})})};
}

} // namespace internal
#endif
