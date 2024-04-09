#include <sourcemeta/jsontoolkit/jsonschema_compile.h>

#include "default_compiler_2020_12.h"

#include <cassert> // assert

auto sourcemeta::jsontoolkit::default_schema_compiler(
    const sourcemeta::jsontoolkit::SchemaCompilerContext &context)
    -> sourcemeta::jsontoolkit::SchemaCompilerTemplate {
  assert(!context.keyword.empty());
  using namespace sourcemeta::jsontoolkit;

  // TODO: Support every keyword

  if (context.keyword == "type" &&
      context.vocabularies.contains(
          "https://json-schema.org/draft/2020-12/vocab/validation")) {
    return internal::compiler_2020_12_validation_type(context);
  }

  return {};
}
