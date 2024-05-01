#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_DEFAULT_COMPILER_DRAFT4_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_DEFAULT_COMPILER_DRAFT4_H_

#include <sourcemeta/jsontoolkit/jsonschema.h>
#include <sourcemeta/jsontoolkit/jsonschema_compile.h>

#include <cassert> // assert
#include <regex>   // std::regex
#include <sstream> // std::ostringstream
#include <utility> // std::move

#include "compile_helpers.h"

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
    const auto subcontext{applicate(context)};
    return {make<SchemaCompilerLogicalOr>(
        context,
        {make<SchemaCompilerAssertionType>(subcontext, JSON::Type::Real, {}),
         make<SchemaCompilerAssertionType>(subcontext, JSON::Type::Integer,
                                           {})},
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
  const auto current{keyword_location(context)};
  assert(context.frame.contains({type, current}));
  const auto &entry{context.frame.at({type, current})};
  assert(context.references.contains({type, entry.pointer}));
  const auto &reference{context.references.at({type, entry.pointer})};

  // The label captures the origin and the destination
  std::ostringstream label;
  label << current << "|" << reference.destination;
  return {make<SchemaCompilerControlLabel>(
      context, std::hash<std::string>{}(label.str()),
      compile(applicate(context), empty_pointer, empty_pointer,
              reference.destination))};
}

auto compiler_draft4_validation_type(const SchemaCompilerContext &context)
    -> SchemaCompilerTemplate {
  if (context.value.is_string()) {
    return type_string_to_assertion(context, context.value.to_string());
  } else if (context.value.is_array()) {
    assert(!context.value.empty());
    SchemaCompilerTemplate disjunctors;
    const auto subcontext{applicate(context)};
    for (const auto &type : context.value.as_array()) {
      assert(type.is_string());
      SchemaCompilerTemplate disjunctor{
          type_string_to_assertion(subcontext, type.to_string())};
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
  SchemaCompilerTemplate condition{
      make<SchemaCompilerAssertionType>(context, JSON::Type::Object, {})};

  if (context.value.size() > 1) {
    SchemaCompilerTemplate children;
    const auto subcontext{applicate(context)};
    for (const auto &property : context.value.as_array()) {
      assert(property.is_string());
      children.push_back(make<SchemaCompilerAssertionDefines>(
          subcontext, property.to_string(), {}));
    }

    return {make<SchemaCompilerLogicalAnd>(context, std::move(children),
                                           std::move(condition))};
  } else {
    assert(context.value.front().is_string());
    return {make<SchemaCompilerAssertionDefines>(
        context, context.value.front().to_string(), std::move(condition))};
  }
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

  const auto subcontext{applicate(context)};
  SchemaCompilerTemplate children;
  for (auto &[key, subschema] : context.value.as_object()) {
    auto substeps{compile(subcontext, {key}, {key})};
    // Annotations as such don't exist in Draft 4,
    // so emit a private annotation instead
    substeps.push_back(
        make<SchemaCompilerAnnotationPrivate>(subcontext, JSON{key}, {}));
    children.push_back(make<SchemaCompilerLogicalAnd>(
        subcontext, std::move(substeps),
        {make<SchemaCompilerAssertionDefines>(subcontext, key, {})}));
  }

  return {make<SchemaCompilerLogicalAnd>(
      context, std::move(children),
      {make<SchemaCompilerAssertionType>(subcontext, JSON::Type::Object, {})})};
}

auto compiler_draft4_validation_patternproperties(
    const SchemaCompilerContext &context) -> SchemaCompilerTemplate {
  assert(context.value.is_object());
  if (context.value.empty()) {
    return {};
  }

  const auto subcontext{applicate(context)};
  SchemaCompilerTemplate children;

  // For each regular expression and corresponding subschema in the object
  for (auto &entry : context.value.as_object()) {
    auto substeps{compile(subcontext, {entry.first}, {})};

    // Annotations as such don't exist in Draft 4, so emit a private annotation
    // instead
    // The evaluator will make sure the same annotation is not reported twice.
    // For example, if the same property matches more than one subschema in
    // `patternProperties`
    substeps.push_back(make<SchemaCompilerAnnotationPrivate>(
        subcontext,
        SchemaCompilerTarget{SchemaCompilerTargetType::InstanceBasename,
                             empty_pointer},
        {}, SchemaCompilerTargetType::InstanceParent));

    // The instance property matches the schema property regex
    SchemaCompilerTemplate loop_condition{make<SchemaCompilerAssertionRegex>(
        subcontext,
        SchemaCompilerValueRegex{
            std::regex{entry.first, std::regex::ECMAScript}, entry.first},
        {}, SchemaCompilerTargetType::InstanceBasename)};

    // Loop over the instance properties
    children.push_back(make<SchemaCompilerLoopProperties>(
        subcontext,
        {make<SchemaCompilerLogicalAnd>(subcontext, std::move(substeps),
                                        std::move(loop_condition))},
        {}));
  }

  // If the instance is an object...
  return {make<SchemaCompilerLogicalAnd>(
      context, std::move(children),
      {make<SchemaCompilerAssertionType>(subcontext, JSON::Type::Object, {})})};
}

auto compiler_draft4_validation_additionalproperties(
    const SchemaCompilerContext &context) -> SchemaCompilerTemplate {
  const auto subcontext{applicate(context)};

  // Evaluate the subschema against the current property if it
  // was NOT collected as an annotation on either "properties" or
  // "patternProperties"
  SchemaCompilerTemplate conjunctions{
      make<SchemaCompilerAssertionNotContains>(
          subcontext,
          SchemaCompilerTarget{SchemaCompilerTargetType::InstanceBasename,
                               empty_pointer},
          {}, SchemaCompilerTargetType::ParentAdjacentAnnotations,
          Pointer{"properties"}),
      make<SchemaCompilerAssertionNotContains>(
          subcontext,
          SchemaCompilerTarget{SchemaCompilerTargetType::InstanceBasename,
                               empty_pointer},
          {}, SchemaCompilerTargetType::ParentAdjacentAnnotations,
          Pointer{"patternProperties"}),
  };

  SchemaCompilerTemplate wrapper{make<SchemaCompilerLogicalAnd>(
      subcontext, compile(subcontext, empty_pointer, empty_pointer),
      {make<SchemaCompilerLogicalAnd>(subcontext, std::move(conjunctions),
                                      {})})};

  return {make<SchemaCompilerLoopProperties>(
      context, {std::move(wrapper)},
      {make<SchemaCompilerAssertionType>(subcontext, JSON::Type::Object, {})})};
}

auto compiler_draft4_validation_pattern(const SchemaCompilerContext &context)
    -> SchemaCompilerTemplate {
  assert(context.value.is_string());
  const auto &regex_string{context.value.to_string()};
  return {make<SchemaCompilerAssertionRegex>(
      context,
      SchemaCompilerValueRegex{std::regex{regex_string, std::regex::ECMAScript},
                               regex_string},
      {make<SchemaCompilerAssertionType>(context, JSON::Type::String, {})})};
}

} // namespace internal
#endif
