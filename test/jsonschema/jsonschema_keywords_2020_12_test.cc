#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include "jsonschema_test_utils.h"

#define EXPECT_KEYWORD_STATIC_2020_12_CORE(keywords, expected_pointer,         \
                                           expected_dependencies_size)         \
  EXPECT_KEYWORD_STATIC(keywords, expected_pointer,                            \
                        "https://json-schema.org/draft/2020-12/vocab/core",    \
                        expected_dependencies_size)

#define EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(keywords, expected_pointer,   \
                                                 expected_dependencies_size)   \
  EXPECT_KEYWORD_STATIC(                                                       \
      keywords, expected_pointer,                                              \
      "https://json-schema.org/draft/2020-12/vocab/applicator",                \
      expected_dependencies_size)

#define EXPECT_KEYWORD_STATIC_2020_12_VALIDATION(keywords, expected_pointer,   \
                                                 expected_dependencies_size)   \
  EXPECT_KEYWORD_STATIC(                                                       \
      keywords, expected_pointer,                                              \
      "https://json-schema.org/draft/2020-12/vocab/validation",                \
      expected_dependencies_size)

#define EXPECT_KEYWORD_DYNAMIC_2020_12_UNEVALUATED(keywords, expected_pointer, \
                                                   expected_dependencies_size) \
  EXPECT_KEYWORD_DYNAMIC(                                                      \
      keywords, expected_pointer,                                              \
      "https://json-schema.org/draft/2020-12/vocab/unevaluated",               \
      expected_dependencies_size)

TEST(JSONSchema_keywords_2020_12, additionalProperties_anonymous) {
  const auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": {
        "properties": { "baz": false },
        "patternProperties": { "^@": true }
      },
      "bar": { "additionalProperties": true }
    },
    "patternProperties": { "^/": true },
    "additionalProperties": { "type": "boolean" }
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(schema, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);
  const auto result{sourcemeta::jsontoolkit::keywords(
      schema, frame, references, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver)};

  EXPECT_EQ(result.size(), 8);

  EXPECT_KEYWORD_STATIC_2020_12_CORE(result, "#/$schema", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result, "#/properties", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result, "#/patternProperties", 0);
  EXPECT_KEYWORD_STATIC_2020_12_VALIDATION(result,
                                           "#/additionalProperties/type", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result,
                                           "#/properties/foo/properties", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(
      result, "#/properties/foo/patternProperties", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(
      result, "#/properties/bar/additionalProperties", 0);

  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result, "#/additionalProperties", 2);
  EXPECT_KEYWORD_DEPENDENCY(result, "#/additionalProperties", "/properties");
  EXPECT_KEYWORD_DEPENDENCY(result, "#/additionalProperties",
                            "/patternProperties");
}

TEST(JSONSchema_keywords_2020_12, additionalProperties) {
  const auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": {
        "properties": { "baz": false },
        "patternProperties": { "^@": true }
      },
      "bar": { "additionalProperties": true }
    },
    "patternProperties": { "^/": true },
    "additionalProperties": { "type": "boolean" }
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(schema, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);
  const auto result{sourcemeta::jsontoolkit::keywords(
      schema, frame, references, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver)};

  EXPECT_EQ(result.size(), 9);

  EXPECT_KEYWORD_STATIC_2020_12_CORE(result, "https://example.com#/$id", 0);
  EXPECT_KEYWORD_STATIC_2020_12_CORE(result, "https://example.com#/$schema", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(
      result, "https://example.com#/properties", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(
      result, "https://example.com#/patternProperties", 0);
  EXPECT_KEYWORD_STATIC_2020_12_VALIDATION(
      result, "https://example.com#/additionalProperties/type", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(
      result, "https://example.com#/properties/foo/properties", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(
      result, "https://example.com#/properties/foo/patternProperties", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(
      result, "https://example.com#/properties/bar/additionalProperties", 0);

  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(
      result, "https://example.com#/additionalProperties", 2);
  EXPECT_KEYWORD_DEPENDENCY(result, "https://example.com#/additionalProperties",
                            "/properties");
  EXPECT_KEYWORD_DEPENDENCY(result, "https://example.com#/additionalProperties",
                            "/patternProperties");
}

TEST(JSONSchema_keywords_2020_12, items) {
  const auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "prefixItems": [ true ] },
      "bar": { "items": true }
    },
    "prefixItems": [ true, false, true ],
    "items": false
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(schema, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);
  const auto result{sourcemeta::jsontoolkit::keywords(
      schema, frame, references, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver)};

  EXPECT_EQ(result.size(), 6);

  EXPECT_KEYWORD_STATIC_2020_12_CORE(result, "#/$schema", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result, "#/properties", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result,
                                           "#/properties/foo/prefixItems", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result, "#/properties/bar/items", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result, "#/prefixItems", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result, "#/items", 1);
  EXPECT_KEYWORD_DEPENDENCY(result, "#/items", "/prefixItems");
}

TEST(JSONSchema_keywords_2020_12, if_then_else) {
  const auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "then": false,
    "properties": {
      "foo": { "if": true, "then": false, "else": true },
      "bar": { "then": true }
    }
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(schema, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);
  const auto result{sourcemeta::jsontoolkit::keywords(
      schema, frame, references, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver)};

  EXPECT_EQ(result.size(), 7);

  EXPECT_KEYWORD_STATIC_2020_12_CORE(result, "#/$schema", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result, "#/then", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result, "#/properties", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result, "#/properties/foo/if", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result, "#/properties/bar/then", 0);

  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result, "#/properties/foo/then", 1);
  EXPECT_KEYWORD_DEPENDENCY(result, "#/properties/foo/then",
                            "/properties/foo/if");
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result, "#/properties/foo/else", 1);
  EXPECT_KEYWORD_DEPENDENCY(result, "#/properties/foo/else",
                            "/properties/foo/if");
}

TEST(JSONSchema_keywords_2020_12, contains) {
  const auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "contains": true,
    "minContains": 2,
    "properties": {
      "foo": { "maxContains": 1 },
      "bar": { "contains": false, "minContains": 2 }
    }
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(schema, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);
  const auto result{sourcemeta::jsontoolkit::keywords(
      schema, frame, references, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver)};

  EXPECT_EQ(result.size(), 7);

  EXPECT_KEYWORD_STATIC_2020_12_CORE(result, "#/$schema", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result, "#/contains", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result, "#/properties", 0);
  EXPECT_KEYWORD_STATIC_2020_12_VALIDATION(result,
                                           "#/properties/foo/maxContains", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result, "#/properties/bar/contains",
                                           0);

  EXPECT_KEYWORD_STATIC_2020_12_VALIDATION(result, "#/minContains", 1);
  EXPECT_KEYWORD_DEPENDENCY(result, "#/minContains", "/contains");
  EXPECT_KEYWORD_STATIC_2020_12_VALIDATION(result,
                                           "#/properties/bar/minContains", 1);
  EXPECT_KEYWORD_DEPENDENCY(result, "#/properties/bar/minContains",
                            "/properties/bar/contains");
}

TEST(JSONSchema_keywords_2020_12, unevaluatedProperties_1) {
  const auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": { "foo": true },
    "patternProperties": { "^@": true },
    "additionalProperties": true,
    "unevaluatedProperties": false
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(schema, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);
  const auto result{sourcemeta::jsontoolkit::keywords(
      schema, frame, references, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver)};

  EXPECT_EQ(result.size(), 5);

  EXPECT_KEYWORD_STATIC_2020_12_CORE(result, "#/$schema", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result, "#/properties", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result, "#/patternProperties", 0);

  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result, "#/additionalProperties", 2);
  EXPECT_KEYWORD_DEPENDENCY(result, "#/additionalProperties", "/properties");
  EXPECT_KEYWORD_DEPENDENCY(result, "#/additionalProperties",
                            "/patternProperties");

  EXPECT_KEYWORD_DYNAMIC_2020_12_UNEVALUATED(result, "#/unevaluatedProperties",
                                             3);
  EXPECT_KEYWORD_DEPENDENCY(result, "#/unevaluatedProperties", "/properties");
  EXPECT_KEYWORD_DEPENDENCY(result, "#/unevaluatedProperties",
                            "/patternProperties");
  EXPECT_KEYWORD_DEPENDENCY(result, "#/unevaluatedProperties",
                            "/additionalProperties");
}

TEST(JSONSchema_keywords_2020_12, unevaluatedItems_1) {
  const auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "prefixItems": true,
    "items": true,
    "contains": true,
    "unevaluatedItems": false
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(schema, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);
  const auto result{sourcemeta::jsontoolkit::keywords(
      schema, frame, references, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver)};

  EXPECT_EQ(result.size(), 5);

  EXPECT_KEYWORD_STATIC_2020_12_CORE(result, "#/$schema", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result, "#/prefixItems", 0);
  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result, "#/contains", 0);

  EXPECT_KEYWORD_STATIC_2020_12_APPLICATOR(result, "#/items", 1);
  EXPECT_KEYWORD_DEPENDENCY(result, "#/items", "/prefixItems");

  EXPECT_KEYWORD_DYNAMIC_2020_12_UNEVALUATED(result, "#/unevaluatedItems", 3);
  EXPECT_KEYWORD_DEPENDENCY(result, "#/unevaluatedItems", "/prefixItems");
  EXPECT_KEYWORD_DEPENDENCY(result, "#/unevaluatedItems", "/items");
  EXPECT_KEYWORD_DEPENDENCY(result, "#/unevaluatedItems", "/contains");
}
