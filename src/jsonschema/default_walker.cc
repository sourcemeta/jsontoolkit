#include <sourcemeta/jsontoolkit/jsonschema_walker.h>

auto sourcemeta::jsontoolkit::default_schema_walker(
    std::string_view keyword, const std::map<std::string, bool> &vocabularies)
    -> sourcemeta::jsontoolkit::SchemaWalkerResult {
#define WALK(vocabulary, _keyword, strategy, ...)                              \
  if (vocabularies.contains(vocabulary) && keyword == _keyword)                \
    return {sourcemeta::jsontoolkit::SchemaWalkerStrategy::strategy,           \
            {__VA_ARGS__}};

#define WALK_MAYBE_DEPENDENT(vocabulary, _keyword, strategy,                   \
                             dependent_vocabulary, ...)                        \
  if (vocabularies.contains(dependent_vocabulary)) {                           \
    WALK(vocabulary, _keyword, strategy, __VA_ARGS__)                          \
  } else {                                                                     \
    WALK(vocabulary, _keyword, strategy)                                       \
  }

#define HTTPS_BASE "https://json-schema.org/draft/"
  // 2020-12
  WALK(HTTPS_BASE "2020-12/vocab/core", "$defs", LocationMembers)
  WALK(HTTPS_BASE "2020-12/vocab/applicator", "prefixItems", ApplicatorElements)
  WALK(HTTPS_BASE "2020-12/vocab/applicator", "dependentSchemas",
       ApplicatorMembers)
  WALK(HTTPS_BASE "2020-12/vocab/applicator", "patternProperties",
       ApplicatorMembers)
  WALK(HTTPS_BASE "2020-12/vocab/applicator", "allOf",
       ApplicatorElementsInPlace)
  WALK(HTTPS_BASE "2020-12/vocab/applicator", "anyOf",
       ApplicatorElementsInPlace)
  WALK(HTTPS_BASE "2020-12/vocab/applicator", "oneOf",
       ApplicatorElementsInPlace)
  WALK(HTTPS_BASE "2020-12/vocab/applicator", "not", ApplicatorValueInPlace)
  WALK(HTTPS_BASE "2020-12/vocab/applicator", "if", ApplicatorValueInPlace)
  WALK(HTTPS_BASE "2020-12/vocab/applicator", "propertyNames",
       ApplicatorValueInPlace)
  WALK(HTTPS_BASE "2020-12/vocab/content", "contentSchema",
       ApplicatorValueInPlace)
  WALK(HTTPS_BASE "2020-12/vocab/validation", "maximum", None, "type")
  WALK(HTTPS_BASE "2020-12/vocab/validation", "minimum", None, "type")

  // See https://json-schema.org/blog/posts/schema-static-analysis for a study
  // of 2020-12 keyword dependency
  WALK(HTTPS_BASE "2020-12/vocab/applicator", "items", ApplicatorValue,
       "prefixItems")
  WALK(HTTPS_BASE "2020-12/vocab/applicator", "then", ApplicatorValueInPlace,
       "if")
  WALK(HTTPS_BASE "2020-12/vocab/applicator", "else", ApplicatorValueInPlace,
       "if")
  WALK(HTTPS_BASE "2020-12/vocab/applicator", "additionalProperties",
       ApplicatorValue, "properties", "patternProperties")
  WALK_MAYBE_DEPENDENT(
      HTTPS_BASE "2020-12/vocab/applicator", "contains", ApplicatorValueInPlace,
      HTTPS_BASE "2020-12/vocab/validation", "minContains", "maxContains")
  WALK_MAYBE_DEPENDENT(HTTPS_BASE "2020-12/vocab/unevaluated",
                       "unevaluatedProperties", ApplicatorValue,
                       HTTPS_BASE "2020-12/vocab/applicator", "properties",
                       "patternProperties", "additionalProperties")
  WALK_MAYBE_DEPENDENT(HTTPS_BASE "2020-12/vocab/unevaluated",
                       "unevaluatedItems", ApplicatorValue,
                       HTTPS_BASE "2020-12/vocab/applicator", "prefixItems",
                       "items", "contains")

  // For the purpose of compiler optimizations
  WALK_MAYBE_DEPENDENT(HTTPS_BASE "2020-12/vocab/applicator", "properties",
                       ApplicatorMembers, HTTPS_BASE "2020-12/vocab/validation",
                       "required")
  WALK_MAYBE_DEPENDENT(HTTPS_BASE "2020-12/vocab/validation", "type", None,
                       HTTPS_BASE "2020-12/vocab/applicator", "properties")

  // JSON Schema still defines this for backwards-compatibility
  // See https://json-schema.org/draft/2020-12/schema
  WALK(HTTPS_BASE "2020-12/vocab/core", "definitions", LocationMembers)

  // 2019-09
  WALK(HTTPS_BASE "2019-09/vocab/core", "$defs", LocationMembers)
  WALK(HTTPS_BASE "2019-09/vocab/applicator", "items",
       ApplicatorValueOrElements)
  WALK(HTTPS_BASE "2019-09/vocab/applicator", "dependentSchemas",
       ApplicatorMembers)
  WALK(HTTPS_BASE "2019-09/vocab/applicator", "patternProperties",
       ApplicatorMembers)
  WALK(HTTPS_BASE "2019-09/vocab/applicator", "allOf",
       ApplicatorElementsInPlace)
  WALK(HTTPS_BASE "2019-09/vocab/applicator", "anyOf",
       ApplicatorElementsInPlace)
  WALK(HTTPS_BASE "2019-09/vocab/applicator", "oneOf",
       ApplicatorElementsInPlace)
  WALK(HTTPS_BASE "2019-09/vocab/applicator", "not", ApplicatorValueInPlace)
  WALK(HTTPS_BASE "2019-09/vocab/applicator", "if", ApplicatorValueInPlace)
  WALK(HTTPS_BASE "2019-09/vocab/applicator", "propertyNames",
       ApplicatorValueInPlace)
  WALK(HTTPS_BASE "2019-09/vocab/content", "contentSchema",
       ApplicatorValueInPlace)
  WALK(HTTPS_BASE "2019-09/vocab/hyper-schema", "hrefSchema", ApplicatorValue)
  WALK(HTTPS_BASE "2019-09/vocab/hyper-schema", "targetSchema", ApplicatorValue)
  WALK(HTTPS_BASE "2019-09/vocab/hyper-schema", "headerSchema", ApplicatorValue)
  WALK(HTTPS_BASE "2019-09/vocab/hyper-schema", "submissionSchema",
       ApplicatorValue)
  WALK(HTTPS_BASE "2019-09/vocab/validation", "maximum", None, "type")
  WALK(HTTPS_BASE "2019-09/vocab/validation", "minimum", None, "type")

  // See
  // https://json-schema.org/draft/2019-09/draft-handrews-json-schema-02#rfc.section.9.1
  WALK(HTTPS_BASE "2019-09/vocab/applicator", "additionalItems",
       ApplicatorValue, "items")
  WALK(HTTPS_BASE "2019-09/vocab/applicator", "then", ApplicatorValueInPlace,
       "if")
  WALK(HTTPS_BASE "2019-09/vocab/applicator", "else", ApplicatorValueInPlace,
       "if")
  WALK(HTTPS_BASE "2019-09/vocab/applicator", "additionalProperties",
       ApplicatorValue, "properties", "patternProperties")
  WALK_MAYBE_DEPENDENT(
      HTTPS_BASE "2019-09/vocab/applicator", "contains", ApplicatorValueInPlace,
      HTTPS_BASE "2019-09/vocab/validation", "minContains", "maxContains")
  WALK(HTTPS_BASE "2019-09/vocab/applicator", "unevaluatedProperties",
       ApplicatorValue, "properties", "patternProperties",
       "additionalProperties")
  WALK(HTTPS_BASE "2019-09/vocab/applicator", "unevaluatedItems",
       ApplicatorValue, "items", "additionalItems")

  // For the purpose of compiler optimizations
  WALK_MAYBE_DEPENDENT(HTTPS_BASE "2019-09/vocab/applicator", "properties",
                       ApplicatorMembers, HTTPS_BASE "2019-09/vocab/validation",
                       "required")
  WALK_MAYBE_DEPENDENT(HTTPS_BASE "2019-09/vocab/validation", "type", None,
                       HTTPS_BASE "2019-09/vocab/applicator", "properties")

  // JSON Schema still defines this for backwards-compatibility
  // See https://json-schema.org/draft/2019-09/schema
  WALK(HTTPS_BASE "2019-09/vocab/core", "definitions", LocationMembers)

#undef HTTPS_BASE

#define HTTP_BASE "http://json-schema.org/"
  // Draft7
  WALK(HTTP_BASE "draft-07/schema#", "definitions", LocationMembers, "$ref")
  WALK(HTTP_BASE "draft-07/schema#", "dependencies", ApplicatorMembers, "$ref")
  WALK(HTTP_BASE "draft-07/schema#", "items", ApplicatorValueOrElements, "$ref")
  WALK(HTTP_BASE "draft-07/schema#", "patternProperties", ApplicatorMembers,
       "$ref")
  WALK(HTTP_BASE "draft-07/schema#", "allOf", ApplicatorElementsInPlace, "$ref")
  WALK(HTTP_BASE "draft-07/schema#", "anyOf", ApplicatorElementsInPlace, "$ref")
  WALK(HTTP_BASE "draft-07/schema#", "oneOf", ApplicatorElementsInPlace, "$ref")
  WALK(HTTP_BASE "draft-07/schema#", "not", ApplicatorValueInPlace, "$ref")
  WALK(HTTP_BASE "draft-07/schema#", "if", ApplicatorValueInPlace, "$ref")
  WALK(HTTP_BASE "draft-07/schema#", "contains", ApplicatorValueInPlace, "$ref")
  WALK(HTTP_BASE "draft-07/schema#", "propertyNames", ApplicatorValueInPlace,
       "$ref")
  WALK(HTTP_BASE "draft-07/schema#", "maximum", None, "$ref")
  WALK(HTTP_BASE "draft-07/schema#", "minimum", None, "$ref")

  WALK_MAYBE_DEPENDENT(HTTP_BASE "draft-07/hyper-schema#", "hrefSchema",
                       ApplicatorValue, HTTP_BASE "draft-07/schema#", "$ref")
  WALK_MAYBE_DEPENDENT(HTTP_BASE "draft-07/hyper-schema#", "targetSchema",
                       ApplicatorValue, HTTP_BASE "draft-07/schema#", "$ref")
  WALK_MAYBE_DEPENDENT(HTTP_BASE "draft-07/hyper-schema#", "headerSchema",
                       ApplicatorValue, HTTP_BASE "draft-07/schema#", "$ref")
  WALK_MAYBE_DEPENDENT(HTTP_BASE "draft-07/hyper-schema#", "submissionSchema",
                       ApplicatorValue, HTTP_BASE "draft-07/schema#", "$ref")

  // See
  // https://json-schema.org/draft-07/draft-handrews-json-schema-validation-01
  WALK(HTTP_BASE "draft-07/schema#", "additionalItems", ApplicatorValue,
       "items")
  WALK(HTTP_BASE "draft-07/schema#", "additionalProperties", ApplicatorValue,
       "properties", "patternProperties")
  WALK(HTTP_BASE "draft-07/schema#", "then", ApplicatorValueInPlace, "if")
  WALK(HTTP_BASE "draft-07/schema#", "else", ApplicatorValueInPlace, "if")

  // For the purpose of compiler optimizations
  WALK(HTTP_BASE "draft-07/schema#", "properties", ApplicatorMembers, "$ref",
       "required")
  WALK(HTTP_BASE "draft-07/schema#", "type", None, "properties")

  // $ref also takes precedence over any unknown keyword
  if (vocabularies.contains(HTTP_BASE "draft-07/schema#") &&
      keyword != "$ref") {
    return {sourcemeta::jsontoolkit::SchemaWalkerStrategy::None, {"$ref"}};
  }

  // Draft6
  WALK(HTTP_BASE "draft-06/schema#", "definitions", LocationMembers, "$ref")
  WALK(HTTP_BASE "draft-06/schema#", "dependencies", ApplicatorMembers, "$ref")
  WALK(HTTP_BASE "draft-06/schema#", "items", ApplicatorValueOrElements, "$ref")
  WALK(HTTP_BASE "draft-06/schema#", "patternProperties", ApplicatorMembers,
       "$ref")
  WALK(HTTP_BASE "draft-06/schema#", "allOf", ApplicatorElementsInPlace, "$ref")
  WALK(HTTP_BASE "draft-06/schema#", "anyOf", ApplicatorElementsInPlace, "$ref")
  WALK(HTTP_BASE "draft-06/schema#", "oneOf", ApplicatorElementsInPlace, "$ref")
  WALK(HTTP_BASE "draft-06/schema#", "not", ApplicatorValueInPlace, "$ref")
  WALK(HTTP_BASE "draft-06/schema#", "contains", ApplicatorValueInPlace, "$ref")
  WALK(HTTP_BASE "draft-06/schema#", "propertyNames", ApplicatorValueInPlace,
       "$ref")
  WALK(HTTP_BASE "draft-06/schema#", "maximum", None, "$ref")
  WALK(HTTP_BASE "draft-06/schema#", "minimum", None, "$ref")

  WALK_MAYBE_DEPENDENT(HTTP_BASE "draft-06/hyper-schema#", "hrefSchema",
                       ApplicatorValue, HTTP_BASE "draft-06/schema#", "$ref")
  WALK_MAYBE_DEPENDENT(HTTP_BASE "draft-06/hyper-schema#", "targetSchema",
                       ApplicatorValue, HTTP_BASE "draft-06/schema#", "$ref")
  WALK_MAYBE_DEPENDENT(HTTP_BASE "draft-06/hyper-schema#", "submissionSchema",
                       ApplicatorValue, HTTP_BASE "draft-06/schema#", "$ref")

  // See https://json-schema.org/draft-06/draft-wright-json-schema-validation-01
  WALK(HTTP_BASE "draft-06/schema#", "additionalItems", ApplicatorValue,
       "items")
  WALK(HTTP_BASE "draft-06/schema#", "additionalProperties", ApplicatorValue,
       "properties", "patternProperties")

  // For the purpose of compiler optimizations
  WALK(HTTP_BASE "draft-06/schema#", "properties", ApplicatorMembers, "$ref",
       "required")
  WALK(HTTP_BASE "draft-06/schema#", "type", None, "properties")

  // $ref also takes precedence over any unknown keyword
  if (vocabularies.contains(HTTP_BASE "draft-06/schema#") &&
      keyword != "$ref") {
    return {sourcemeta::jsontoolkit::SchemaWalkerStrategy::None, {"$ref"}};
  }

  // Draft4
  WALK(HTTP_BASE "draft-04/schema#", "definitions", LocationMembers, "$ref")
  WALK(HTTP_BASE "draft-04/schema#", "items", ApplicatorValueOrElements, "$ref")
  WALK(HTTP_BASE "draft-04/schema#", "patternProperties", ApplicatorMembers,
       "$ref")
  WALK(HTTP_BASE "draft-04/schema#", "allOf", ApplicatorElementsInPlace, "$ref")
  WALK(HTTP_BASE "draft-04/schema#", "anyOf", ApplicatorElementsInPlace, "$ref")
  WALK(HTTP_BASE "draft-04/schema#", "oneOf", ApplicatorElementsInPlace, "$ref")
  WALK(HTTP_BASE "draft-04/schema#", "not", ApplicatorValueInPlace, "$ref")
  WALK(HTTP_BASE "draft-04/schema#", "dependencies", ApplicatorMembers, "$ref")
  WALK(HTTP_BASE "draft-04/schema#", "required", None, "$ref")
  WALK(HTTP_BASE "draft-04/schema#", "uniqueItems", None, "$ref")
  WALK(HTTP_BASE "draft-04/schema#", "pattern", None, "$ref")
  WALK(HTTP_BASE "draft-04/schema#", "format", None, "$ref")
  WALK(HTTP_BASE "draft-04/schema#", "maxLength", None, "$ref")
  WALK(HTTP_BASE "draft-04/schema#", "minLength", None, "$ref")
  WALK(HTTP_BASE "draft-04/schema#", "maxItems", None, "$ref")
  WALK(HTTP_BASE "draft-04/schema#", "minItems", None, "$ref")
  WALK(HTTP_BASE "draft-04/schema#", "maximum", None, "$ref")
  WALK(HTTP_BASE "draft-04/schema#", "minimum", None, "$ref")
  WALK(HTTP_BASE "draft-04/schema#", "maxProperties", None, "$ref")
  WALK(HTTP_BASE "draft-04/schema#", "minProperties", None, "$ref")

  // These dependencies are only for the purpose of compiler optimizations
  WALK(HTTP_BASE "draft-04/schema#", "properties", ApplicatorMembers, "$ref",
       "required")
  WALK(HTTP_BASE "draft-04/schema#", "type", None, "properties")

  WALK_MAYBE_DEPENDENT(HTTP_BASE "draft-04/hyper-schema#", "targetSchema",
                       ApplicatorValue, HTTP_BASE "draft-04/schema#", "$ref")
  WALK_MAYBE_DEPENDENT(HTTP_BASE "draft-04/hyper-schema#", "schema",
                       ApplicatorValue, HTTP_BASE "draft-04/schema#", "$ref")

  // See https://json-schema.org/draft-04/draft-fge-json-schema-validation-00
  WALK(HTTP_BASE "draft-04/schema#", "additionalItems", ApplicatorValue,
       "items")
  WALK(HTTP_BASE "draft-04/schema#", "additionalProperties", ApplicatorValue,
       "properties", "patternProperties")

  // $ref also takes precedence over any unknown keyword
  if (vocabularies.contains(HTTP_BASE "draft-04/schema#") &&
      keyword != "$ref") {
    return {sourcemeta::jsontoolkit::SchemaWalkerStrategy::None, {"$ref"}};
  }

  // Draft3
  WALK(HTTP_BASE "draft-03/schema#", "type", ApplicatorElements, "$ref")
  WALK(HTTP_BASE "draft-03/schema#", "dependencies", ApplicatorMembers, "$ref")
  WALK(HTTP_BASE "draft-03/schema#", "items", ApplicatorValueOrElements, "$ref")
  WALK(HTTP_BASE "draft-03/schema#", "properties", ApplicatorMembers, "$ref")
  WALK(HTTP_BASE "draft-03/schema#", "patternProperties", ApplicatorMembers,
       "$ref")
  WALK(HTTP_BASE "draft-03/schema#", "disallow", ApplicatorElementsInPlace,
       "$ref")
  WALK(HTTP_BASE "draft-03/schema#", "extends",
       ApplicatorValueOrElementsInPlace, "$ref")

  WALK_MAYBE_DEPENDENT(HTTP_BASE "draft-03/hyper-schema#", "targetSchema",
                       ApplicatorValue, HTTP_BASE "draft-03/schema#", "$ref")

  // See https://json-schema.org/draft-03/draft-zyp-json-schema-03.pdf
  WALK(HTTP_BASE "draft-03/schema#", "additionalItems", ApplicatorValue,
       "items")
  WALK(HTTP_BASE "draft-03/schema#", "additionalProperties", ApplicatorValue,
       "properties", "patternProperties")

  // $ref also takes precedence over any unknown keyword
  if (vocabularies.contains(HTTP_BASE "draft-03/schema#") &&
      keyword != "$ref") {
    return {sourcemeta::jsontoolkit::SchemaWalkerStrategy::None, {"$ref"}};
  }

  // Draft2
  WALK(HTTP_BASE "draft-02/schema#", "type", ApplicatorElements)
  WALK(HTTP_BASE "draft-02/schema#", "items", ApplicatorValueOrElements)
  WALK(HTTP_BASE "draft-02/schema#", "properties", ApplicatorMembers)
  WALK(HTTP_BASE "draft-02/schema#", "extends",
       ApplicatorValueOrElementsInPlace)
  WALK(HTTP_BASE "draft-02/schema#", "requires", ApplicatorValueInPlace)
  WALK(HTTP_BASE "draft-02/hyper-schema#", "targetSchema", ApplicatorValue)
  WALK(HTTP_BASE "draft-02/hyper-schema#", "type", ApplicatorElements)
  WALK(HTTP_BASE "draft-02/hyper-schema#", "items", ApplicatorValueOrElements)
  WALK(HTTP_BASE "draft-02/hyper-schema#", "properties", ApplicatorMembers)
  WALK(HTTP_BASE "draft-02/hyper-schema#", "extends",
       ApplicatorValueOrElementsInPlace)
  WALK(HTTP_BASE "draft-02/hyper-schema#", "requires", ApplicatorValueInPlace)

  // See https://json-schema.org/draft-02/draft-zyp-json-schema-02.txt
  WALK(HTTP_BASE "draft-02/schema#", "additionalProperties", ApplicatorValue,
       "properties")
  WALK(HTTP_BASE "draft-02/hyper-schema#", "additionalProperties",
       ApplicatorValue, "properties")

  // Draft1
  WALK(HTTP_BASE "draft-01/schema#", "type", ApplicatorElements)
  WALK(HTTP_BASE "draft-01/schema#", "items", ApplicatorValueOrElements)
  WALK(HTTP_BASE "draft-01/schema#", "properties", ApplicatorMembers)
  WALK(HTTP_BASE "draft-01/schema#", "extends",
       ApplicatorValueOrElementsInPlace)
  WALK(HTTP_BASE "draft-01/schema#", "requires", ApplicatorValueInPlace)
  WALK(HTTP_BASE "draft-01/hyper-schema#", "type", ApplicatorElements)
  WALK(HTTP_BASE "draft-01/hyper-schema#", "items", ApplicatorValueOrElements)
  WALK(HTTP_BASE "draft-01/hyper-schema#", "properties", ApplicatorMembers)
  WALK(HTTP_BASE "draft-01/hyper-schema#", "extends",
       ApplicatorValueOrElementsInPlace)
  WALK(HTTP_BASE "draft-01/hyper-schema#", "requires", ApplicatorValueInPlace)

  // See https://json-schema.org/draft-01/draft-zyp-json-schema-01
  WALK(HTTP_BASE "draft-01/schema#", "additionalProperties", ApplicatorValue,
       "properties")
  WALK(HTTP_BASE "draft-01/hyper-schema#", "additionalProperties",
       ApplicatorValue, "properties")

  // Draft0
  WALK(HTTP_BASE "draft-00/schema#", "type", ApplicatorElements)
  WALK(HTTP_BASE "draft-00/schema#", "items", ApplicatorValueOrElements)
  WALK(HTTP_BASE "draft-00/schema#", "properties", ApplicatorMembers)
  WALK(HTTP_BASE "draft-00/schema#", "extends",
       ApplicatorValueOrElementsInPlace)
  WALK(HTTP_BASE "draft-00/schema#", "requires", ApplicatorValueInPlace)
  WALK(HTTP_BASE "draft-00/hyper-schema#", "type", ApplicatorElements)
  WALK(HTTP_BASE "draft-00/hyper-schema#", "items", ApplicatorValueOrElements)
  WALK(HTTP_BASE "draft-00/hyper-schema#", "properties", ApplicatorMembers)
  WALK(HTTP_BASE "draft-00/hyper-schema#", "extends",
       ApplicatorValueOrElementsInPlace)
  WALK(HTTP_BASE "draft-00/hyper-schema#", "requires", ApplicatorValueInPlace)

  // See https://json-schema.org/draft-00/draft-zyp-json-schema-00.txt
  WALK(HTTP_BASE "draft-00/schema#", "additionalProperties", ApplicatorValue,
       "properties")
  WALK(HTTP_BASE "draft-00/hyper-schema#", "additionalProperties",
       ApplicatorValue, "properties")
#undef HTTP_BASE
#undef WALK
#undef WALK_MAYBE_DEPENDENT
  return {sourcemeta::jsontoolkit::SchemaWalkerStrategy::None, {}};
}
