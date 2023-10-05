#include <sourcemeta/jsontoolkit/jsonschema_walker.h>

// TODO: Extend this default walker to recognize as many official
// JSON Schema vocabularies as possible.
auto sourcemeta::jsontoolkit::default_schema_walker(
    std::string_view keyword, const std::map<std::string, bool> &vocabularies)
    -> sourcemeta::jsontoolkit::SchemaWalkerStrategy {
  if ((vocabularies.contains(
           "https://json-schema.org/draft/2020-12/vocab/core") ||
       vocabularies.contains(
           "https://json-schema.org/draft/2019-09/vocab/core")) &&
      keyword == "$defs") {
    return sourcemeta::jsontoolkit::SchemaWalkerStrategy::Members;
  }

  if ((vocabularies.contains(
           "https://json-schema.org/draft/2020-12/vocab/content") ||
       vocabularies.contains(
           "https://json-schema.org/draft/2019-09/vocab/content")) &&
      keyword == "contentSchema") {
    return sourcemeta::jsontoolkit::SchemaWalkerStrategy::Value;
  }

  if (vocabularies.contains(
          "https://json-schema.org/draft/2020-12/vocab/unevaluated") ||
      vocabularies.contains(
          "https://json-schema.org/draft/2019-09/vocab/applicator")) {
    if (keyword == "unevaluatedProperties" || keyword == "unevaluatedItems") {
      return sourcemeta::jsontoolkit::SchemaWalkerStrategy::Value;
    }
  }

  if (vocabularies.contains(
          "https://json-schema.org/draft/2019-09/vocab/applicator") &&
      keyword == "items") {
    return sourcemeta::jsontoolkit::SchemaWalkerStrategy::ValueOrElements;
  }

  if (vocabularies.contains(
          "https://json-schema.org/draft/2020-12/vocab/applicator") &&
      keyword == "items") {
    return sourcemeta::jsontoolkit::SchemaWalkerStrategy::Value;
  }

  if (vocabularies.contains(
          "https://json-schema.org/draft/2020-12/vocab/applicator") &&
      keyword == "prefixItems") {
    return sourcemeta::jsontoolkit::SchemaWalkerStrategy::Elements;
  }

  if (vocabularies.contains(
          "https://json-schema.org/draft/2019-09/vocab/applicator") &&
      keyword == "additionalItems") {
    return sourcemeta::jsontoolkit::SchemaWalkerStrategy::Value;
  }

  if (vocabularies.contains(
          "https://json-schema.org/draft/2020-12/vocab/applicator") ||
      vocabularies.contains(
          "https://json-schema.org/draft/2019-09/vocab/applicator")) {
    if (keyword == "dependentSchemas" || keyword == "properties" ||
        keyword == "patternProperties") {
      return sourcemeta::jsontoolkit::SchemaWalkerStrategy::Members;
    }

    if (keyword == "allOf" || keyword == "anyOf" || keyword == "oneOf") {
      return sourcemeta::jsontoolkit::SchemaWalkerStrategy::Elements;
    }

    if (keyword == "not" || keyword == "if" || keyword == "then" ||
        keyword == "else" || keyword == "contains" ||
        keyword == "additionalProperties" || keyword == "propertyNames") {
      return sourcemeta::jsontoolkit::SchemaWalkerStrategy::Value;
    }
  }

  return sourcemeta::jsontoolkit::SchemaWalkerStrategy::None;
}
