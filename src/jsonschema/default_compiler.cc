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
      context.keyword == (_keyword)) {                                         \
    return internal::handler(context);                                         \
  }

#define STOP_IF_SIBLING_KEYWORD(vocabulary, _keyword)                          \
  if (context.vocabularies.contains(vocabulary) &&                             \
      context.schema.is_object() && context.schema.defines(_keyword)) {        \
    return {};                                                                 \
  }

  COMPILE("https://json-schema.org/draft/2020-12/vocab/validation", "type",
          compiler_2020_12_validation_type);

  // TODO: Draft 4
  // - Simple:
  // multipleOf
  // maximum
  // exclusiveMaximum
  // minimum
  // exclusiveMinimum
  // maxLength
  // minLength
  // maxItems
  // minItems
  // uniqueItems
  // maxProperties
  // minProperties
  // enum
  // format
  // - Semi Complex
  // not
  // anyOf
  // oneOf
  // dependencies
  // items
  // - Complex
  // additionalItems

  COMPILE("http://json-schema.org/draft-04/schema#", "$ref",
          compiler_draft4_core_ref);
  STOP_IF_SIBLING_KEYWORD("http://json-schema.org/draft-04/schema#", "$ref");

  COMPILE("http://json-schema.org/draft-04/schema#", "type",
          compiler_draft4_validation_type);
  COMPILE("http://json-schema.org/draft-04/schema#", "required",
          compiler_draft4_validation_required);
  COMPILE("http://json-schema.org/draft-04/schema#", "allOf",
          compiler_draft4_validation_allof);
  COMPILE("http://json-schema.org/draft-04/schema#", "properties",
          compiler_draft4_validation_properties);
  COMPILE("http://json-schema.org/draft-04/schema#", "patternProperties",
          compiler_draft4_validation_patternproperties);
  COMPILE("http://json-schema.org/draft-04/schema#", "additionalProperties",
          compiler_draft4_validation_additionalproperties);
  COMPILE("http://json-schema.org/draft-04/schema#", "pattern",
          compiler_draft4_validation_pattern);

#undef COMPILE
#undef STOP_IF_SIBLING_KEYWORD

  // TODO: Collect unknown keywords as annotations starting in 2019-09
  return {};
}
