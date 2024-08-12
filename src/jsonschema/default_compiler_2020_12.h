#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_DEFAULT_COMPILER_2020_12_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_DEFAULT_COMPILER_2020_12_H_

#include <sourcemeta/jsontoolkit/jsonschema.h>
#include <sourcemeta/jsontoolkit/jsonschema_compile.h>

#include "compile_helpers.h"
#include "default_compiler_draft4.h"

namespace internal {
using namespace sourcemeta::jsontoolkit;

auto compiler_2020_12_applicator_prefixitems(
    const SchemaCompilerContext &context,
    const SchemaCompilerSchemaContext &schema_context,
    const SchemaCompilerDynamicContext &dynamic_context)
    -> SchemaCompilerTemplate {
  return compiler_draft4_applicator_items_array(context, schema_context,
                                                dynamic_context, true);
}

auto compiler_2020_12_applicator_items(
    const SchemaCompilerContext &context,
    const SchemaCompilerSchemaContext &schema_context,
    const SchemaCompilerDynamicContext &dynamic_context)
    -> SchemaCompilerTemplate {
  const auto cursor{(schema_context.schema.defines("prefixItems") &&
                     schema_context.schema.at("prefixItems").is_array())
                        ? schema_context.schema.at("prefixItems").size()
                        : 0};

  return compiler_draft4_applicator_additionalitems_from_cursor(
      context, schema_context, dynamic_context, cursor, true);
}

auto compiler_2020_12_applicator_contains(
    const SchemaCompilerContext &context,
    const SchemaCompilerSchemaContext &schema_context,
    const SchemaCompilerDynamicContext &dynamic_context)
    -> SchemaCompilerTemplate {
  return compiler_2019_09_applicator_contains_conditional_annotate(
      context, schema_context, dynamic_context, true);
}

auto compiler_2020_12_core_dynamicref(
    const SchemaCompilerContext &, const SchemaCompilerSchemaContext &,
    const SchemaCompilerDynamicContext &) -> SchemaCompilerTemplate {
  // TODO: Implement
  return {};
}

auto compiler_2020_12_unevaluated_unevaluateditems(
    const SchemaCompilerContext &, const SchemaCompilerSchemaContext &,
    const SchemaCompilerDynamicContext &) -> SchemaCompilerTemplate {
  // TODO: Implement
  return {};
}

} // namespace internal
#endif
