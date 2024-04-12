#include <sourcemeta/jsontoolkit/jsonschema_compile.h>

#include "default_compiler_2020_12.h"
#include "default_compiler_draft4.h"

#include <cassert> // assert

// TODO: Support every keyword
auto sourcemeta::jsontoolkit::default_schema_compiler(
    const sourcemeta::jsontoolkit::SchemaCompilerContext &context)
    -> sourcemeta::jsontoolkit::SchemaCompilerTemplate {
  assert(!context.keyword.empty());
  using namespace sourcemeta::jsontoolkit;

#define COMPILE(vocabulary, _keyword, handler)                                 \
  if (context.vocabularies.contains(vocabulary) &&                             \
      context.keyword == _keyword) {                                           \
    return internal::handler(context);                                         \
  }

  COMPILE("https://json-schema.org/draft/2020-12/vocab/validation", "type",
          compiler_2020_12_validation_type);

  // TODO: Draft 4
  // $ref
  // not
  // multipleOf
  // maximum
  // exclusiveMaximum
  // minimum
  // exclusiveMinimum
  // maxLength
  // minLength
  // pattern
  // additionalItems
  // items
  // maxItems
  // minItems
  // uniqueItems
  // maxProperties
  // minProperties
  // required
  // additionalProperties
  // properties
  // patternProperties
  // dependencies
  // enum
  // allOf
  // anyOf
  // oneOf
  // format

  COMPILE("http://json-schema.org/draft-04/schema#", "type",
          compiler_draft4_validation_type);

#undef COMPILE

  return {};
}
