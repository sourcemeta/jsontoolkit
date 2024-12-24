#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include "jsonschema_test_utils.h"

#define EXPECT_KEYWORD_STATIC_DRAFT0(keywords, expected_pointer,               \
                                     expected_dependencies_size)               \
  EXPECT_KEYWORD_STATIC(keywords, expected_pointer,                            \
                        "http://json-schema.org/draft-00/hyper-schema#",       \
                        expected_dependencies_size)

TEST(JSONSchema_keywords_draft0, additionalProperties_anonymous) {
  const auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-00/schema#",
    "properties": {
      "foo": { "type": "string" },
      "bar": { "additionalProperties": true }
    },
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

  EXPECT_EQ(result.size(), 6);

  // TODO: Why is this unknown?
  EXPECT_KEYWORD_UNKNOWN(result, "#/$schema", 0);
  EXPECT_KEYWORD_STATIC_DRAFT0(result, "#/properties", 0);
  EXPECT_KEYWORD_STATIC_DRAFT0(result, "#/properties/foo/type", 0);
  EXPECT_KEYWORD_STATIC_DRAFT0(result, "#/properties/bar/additionalProperties",
                               0);
  EXPECT_KEYWORD_STATIC_DRAFT0(result, "#/additionalProperties/type", 0);
  EXPECT_KEYWORD_STATIC_DRAFT0(result, "#/additionalProperties", 1);
  EXPECT_KEYWORD_DEPENDENCY(result, "#/additionalProperties", "/properties");
}

TEST(JSONSchema_keywords_draft0, additionalProperties) {
  const auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://example.com",
    "$schema": "http://json-schema.org/draft-00/schema#",
    "properties": {
      "foo": { "type": "string" },
      "bar": { "additionalProperties": true }
    },
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

  EXPECT_EQ(result.size(), 7);

  // TODO: Why are these unknown?
  EXPECT_KEYWORD_UNKNOWN(result, "https://example.com#/id", 0);
  EXPECT_KEYWORD_UNKNOWN(result, "https://example.com#/$schema", 0);
  EXPECT_KEYWORD_STATIC_DRAFT0(result, "https://example.com#/properties", 0);
  EXPECT_KEYWORD_STATIC_DRAFT0(result,
                               "https://example.com#/properties/foo/type", 0);
  EXPECT_KEYWORD_STATIC_DRAFT0(
      result, "https://example.com#/properties/bar/additionalProperties", 0);
  EXPECT_KEYWORD_STATIC_DRAFT0(
      result, "https://example.com#/additionalProperties/type", 0);
  EXPECT_KEYWORD_STATIC_DRAFT0(result,
                               "https://example.com#/additionalProperties", 1);
  EXPECT_KEYWORD_DEPENDENCY(result, "https://example.com#/additionalProperties",
                            "/properties");
}
