#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include "jsonschema_test_utils.h"

TEST(JSONSchema_unevaluated_2019_09, unevaluatedProperties_1) {
  const auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
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
  const auto result{sourcemeta::jsontoolkit::unevaluated(
      schema, frame, references, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver)};

  EXPECT_EQ(result.size(), 1);

  EXPECT_UNEVALUATED_STATIC(result, "#/unevaluatedProperties", 3);
  EXPECT_UNEVALUATED_STATIC_DEPENDENCY(result, "#/unevaluatedProperties",
                                       "/properties");
  EXPECT_UNEVALUATED_STATIC_DEPENDENCY(result, "#/unevaluatedProperties",
                                       "/patternProperties");
  EXPECT_UNEVALUATED_STATIC_DEPENDENCY(result, "#/unevaluatedProperties",
                                       "/additionalProperties");

  EXPECT_UNEVALUATED_DYNAMIC(result, "#/unevaluatedProperties", 0);

  EXPECT_UNEVALUATED_RESOLVED(result, "#/unevaluatedProperties");
}

TEST(JSONSchema_unevaluated_2019_09, unevaluatedProperties_2) {
  const auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
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
  const auto result{sourcemeta::jsontoolkit::unevaluated(
      schema, frame, references, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver)};

  EXPECT_EQ(result.size(), 1);

  EXPECT_UNEVALUATED_STATIC(result,
                            "https://example.com#/unevaluatedProperties", 3);
  EXPECT_UNEVALUATED_STATIC_DEPENDENCY(
      result, "https://example.com#/unevaluatedProperties", "/properties");
  EXPECT_UNEVALUATED_STATIC_DEPENDENCY(
      result, "https://example.com#/unevaluatedProperties",
      "/patternProperties");
  EXPECT_UNEVALUATED_STATIC_DEPENDENCY(
      result, "https://example.com#/unevaluatedProperties",
      "/additionalProperties");

  EXPECT_UNEVALUATED_DYNAMIC(result,
                             "https://example.com#/unevaluatedProperties", 0);

  EXPECT_UNEVALUATED_RESOLVED(result,
                              "https://example.com#/unevaluatedProperties");
}

TEST(JSONSchema_unevaluated_2019_09, unevaluatedItems_1) {
  const auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "items": true,
    "additionalItems": true,
    "contains": true,
    "unevaluatedItems": false
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(schema, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);
  const auto result{sourcemeta::jsontoolkit::unevaluated(
      schema, frame, references, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver)};

  EXPECT_EQ(result.size(), 1);

  EXPECT_UNEVALUATED_STATIC(result, "#/unevaluatedItems", 2);
  EXPECT_UNEVALUATED_STATIC_DEPENDENCY(result, "#/unevaluatedItems", "/items");
  EXPECT_UNEVALUATED_STATIC_DEPENDENCY(result, "#/unevaluatedItems",
                                       "/additionalItems");

  EXPECT_UNEVALUATED_DYNAMIC(result, "#/unevaluatedItems", 0);

  EXPECT_UNEVALUATED_RESOLVED(result, "#/unevaluatedItems");
}
