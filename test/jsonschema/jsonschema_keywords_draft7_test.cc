#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include "jsonschema_test_utils.h"

#define EXPECT_KEYWORD_STATIC_DRAFT7(keywords, expected_pointer,               \
                                     expected_dependencies_size)               \
  EXPECT_KEYWORD_STATIC(keywords, expected_pointer,                            \
                        "http://json-schema.org/draft-07/schema#",             \
                        expected_dependencies_size)

TEST(JSONSchema_keywords_draft7, additionalProperties_anonymous) {
  const auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
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

  EXPECT_KEYWORD_STATIC_DRAFT7(result, "#/$schema", 0);
  EXPECT_KEYWORD_STATIC_DRAFT7(result, "#/properties", 0);
  EXPECT_KEYWORD_STATIC_DRAFT7(result, "#/patternProperties", 0);
  EXPECT_KEYWORD_STATIC_DRAFT7(result, "#/additionalProperties/type", 0);
  EXPECT_KEYWORD_STATIC_DRAFT7(result, "#/properties/foo/properties", 0);
  EXPECT_KEYWORD_STATIC_DRAFT7(result, "#/properties/foo/patternProperties", 0);
  EXPECT_KEYWORD_STATIC_DRAFT7(result, "#/properties/bar/additionalProperties",
                               0);

  EXPECT_KEYWORD_STATIC_DRAFT7(result, "#/additionalProperties", 2);
  EXPECT_KEYWORD_DEPENDENCY(result, "#/additionalProperties", "/properties");
  EXPECT_KEYWORD_DEPENDENCY(result, "#/additionalProperties",
                            "/patternProperties");
}

TEST(JSONSchema_keywords_draft7, additionalProperties) {
  const auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com",
    "$schema": "http://json-schema.org/draft-07/schema#",
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

  EXPECT_KEYWORD_STATIC_DRAFT7(result, "https://example.com#/$id", 0);
  EXPECT_KEYWORD_STATIC_DRAFT7(result, "https://example.com#/$schema", 0);
  EXPECT_KEYWORD_STATIC_DRAFT7(result, "https://example.com#/properties", 0);
  EXPECT_KEYWORD_STATIC_DRAFT7(result, "https://example.com#/patternProperties",
                               0);
  EXPECT_KEYWORD_STATIC_DRAFT7(
      result, "https://example.com#/additionalProperties/type", 0);
  EXPECT_KEYWORD_STATIC_DRAFT7(
      result, "https://example.com#/properties/foo/properties", 0);
  EXPECT_KEYWORD_STATIC_DRAFT7(
      result, "https://example.com#/properties/foo/patternProperties", 0);
  EXPECT_KEYWORD_STATIC_DRAFT7(
      result, "https://example.com#/properties/bar/additionalProperties", 0);

  EXPECT_KEYWORD_STATIC_DRAFT7(result,
                               "https://example.com#/additionalProperties", 2);
  EXPECT_KEYWORD_DEPENDENCY(result, "https://example.com#/additionalProperties",
                            "/properties");
  EXPECT_KEYWORD_DEPENDENCY(result, "https://example.com#/additionalProperties",
                            "/patternProperties");
}

TEST(JSONSchema_keywords_draft7, additionalItems) {
  const auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
      "foo": { "items": true },
      "bar": { "additionalItems": true }
    },
    "items": true,
    "additionalItems": false
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

  EXPECT_KEYWORD_STATIC_DRAFT7(result, "#/$schema", 0);
  EXPECT_KEYWORD_STATIC_DRAFT7(result, "#/properties", 0);
  EXPECT_KEYWORD_STATIC_DRAFT7(result, "#/properties/foo/items", 0);
  EXPECT_KEYWORD_STATIC_DRAFT7(result, "#/properties/bar/additionalItems", 0);
  EXPECT_KEYWORD_STATIC_DRAFT7(result, "#/items", 0);
  EXPECT_KEYWORD_STATIC_DRAFT7(result, "#/additionalItems", 1);
  EXPECT_KEYWORD_DEPENDENCY(result, "#/additionalItems", "/items");
}

TEST(JSONSchema_keywords_draft7, if_then_else) {
  const auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
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

  EXPECT_KEYWORD_STATIC_DRAFT7(result, "#/$schema", 0);
  EXPECT_KEYWORD_STATIC_DRAFT7(result, "#/then", 0);
  EXPECT_KEYWORD_STATIC_DRAFT7(result, "#/properties", 0);
  EXPECT_KEYWORD_STATIC_DRAFT7(result, "#/properties/foo/if", 0);
  EXPECT_KEYWORD_STATIC_DRAFT7(result, "#/properties/bar/then", 0);

  EXPECT_KEYWORD_STATIC_DRAFT7(result, "#/properties/foo/then", 1);
  EXPECT_KEYWORD_DEPENDENCY(result, "#/properties/foo/then",
                            "/properties/foo/if");
  EXPECT_KEYWORD_STATIC_DRAFT7(result, "#/properties/foo/else", 1);
  EXPECT_KEYWORD_DEPENDENCY(result, "#/properties/foo/else",
                            "/properties/foo/if");
}
