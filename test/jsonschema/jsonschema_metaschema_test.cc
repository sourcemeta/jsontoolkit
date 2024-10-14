#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_metaschema, example_2020_12) {
  const auto schema{sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "type": "string"
  })JSON")};

  const auto metaschema{sourcemeta::jsontoolkit::metaschema(
      schema, sourcemeta::jsontoolkit::official_resolver)};
  EXPECT_TRUE(metaschema.is_object());
  EXPECT_TRUE(sourcemeta::jsontoolkit::official_resolver(
                  "https://json-schema.org/draft/2020-12/schema")
                  .has_value());
  EXPECT_EQ(metaschema, sourcemeta::jsontoolkit::official_resolver(
                            "https://json-schema.org/draft/2020-12/schema")
                            .value());
}

TEST(JSONSchema_metaschema, with_default_dialect) {
  const auto schema{sourcemeta::jsontoolkit::parse(R"JSON({
    "type": "string"
  })JSON")};

  const auto metaschema{sourcemeta::jsontoolkit::metaschema(
      schema, sourcemeta::jsontoolkit::official_resolver,
      "https://json-schema.org/draft/2020-12/schema")};
  EXPECT_TRUE(metaschema.is_object());
  EXPECT_TRUE(sourcemeta::jsontoolkit::official_resolver(
                  "https://json-schema.org/draft/2020-12/schema")
                  .has_value());
  EXPECT_EQ(metaschema, sourcemeta::jsontoolkit::official_resolver(
                            "https://json-schema.org/draft/2020-12/schema")
                            .value());
}

TEST(JSONSchema_metaschema, no_dialect) {
  const auto schema{sourcemeta::jsontoolkit::parse(R"JSON({
    "type": "string"
  })JSON")};

  EXPECT_THROW(sourcemeta::jsontoolkit::metaschema(
                   schema, sourcemeta::jsontoolkit::official_resolver),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(JSONSchema_metaschema, unknown_dialect) {
  const auto schema{sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://example.com",
    "type": "string"
  })JSON")};

  EXPECT_THROW(sourcemeta::jsontoolkit::metaschema(
                   schema, sourcemeta::jsontoolkit::official_resolver),
               sourcemeta::jsontoolkit::SchemaResolutionError);
}
