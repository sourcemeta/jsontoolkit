#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_DEFAULT_COMPILER_DRAFT7_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_DEFAULT_COMPILER_DRAFT7_H_

#include <sourcemeta/jsontoolkit/jsonschema.h>
#include <sourcemeta/jsontoolkit/jsonschema_compile.h>

#include "compile_helpers.h"

namespace internal {
using namespace sourcemeta::jsontoolkit;

auto compiler_draft7_applicator_if(
    const SchemaCompilerContext &context,
    const SchemaCompilerSchemaContext &schema_context,
    const SchemaCompilerDynamicContext &dynamic_context)
    -> SchemaCompilerTemplate {
  SchemaCompilerTemplate children{compile(context, schema_context,
                                          relative_dynamic_context,
                                          empty_pointer, empty_pointer)};
  children.push_back(make<SchemaCompilerAnnotationEmit>(
      true, context, schema_context, relative_dynamic_context, JSON{true}, {},
      SchemaCompilerTargetType::Instance));
  // TODO: Make this a "try-and-mark" step that internally emits the annotation
  // Maybe then we make the other rules about "marked", "unmarked", without
  // pointing out the fact that annotations are produced? It would also
  // avoid emitting this unnecessary annotation
  return {make<SchemaCompilerLogicalTry>(
      true, context, schema_context, dynamic_context, SchemaCompilerValueNone{},
      std::move(children), SchemaCompilerTemplate{})};
}

auto compiler_draft7_applicator_then(
    const SchemaCompilerContext &context,
    const SchemaCompilerSchemaContext &schema_context,
    const SchemaCompilerDynamicContext &dynamic_context)
    -> SchemaCompilerTemplate {
  assert(schema_context.schema.is_object());

  // Nothing to do here
  if (!schema_context.schema.defines("if")) {
    return {};
  }

  return {make<SchemaCompilerLogicalWhenAdjacentAnnotations>(
      true, context, schema_context, dynamic_context, "if",
      compile(context, schema_context, relative_dynamic_context, empty_pointer,
              empty_pointer),
      SchemaCompilerTemplate{})};
}

auto compiler_draft7_applicator_else(
    const SchemaCompilerContext &context,
    const SchemaCompilerSchemaContext &schema_context,
    const SchemaCompilerDynamicContext &dynamic_context)
    -> SchemaCompilerTemplate {
  assert(schema_context.schema.is_object());

  // Nothing to do here
  if (!schema_context.schema.defines("if")) {
    return {};
  }

  return {make<SchemaCompilerLogicalWhenNoAdjacentAnnotations>(
      true, context, schema_context, dynamic_context, "if",
      compile(context, schema_context, relative_dynamic_context, empty_pointer,
              empty_pointer),
      SchemaCompilerTemplate{})};
}

} // namespace internal
#endif
