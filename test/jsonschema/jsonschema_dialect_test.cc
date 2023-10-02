#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_dialect, dialect_true) {
  const sourcemeta::jsontoolkit::JSON document{true};
  const std::optional<std::string> dialect{
      sourcemeta::jsontoolkit::dialect(document)};
  EXPECT_FALSE(dialect.has_value());
}

TEST(JSONSchema_dialect, dialect_false) {
  const sourcemeta::jsontoolkit::JSON document{false};
  const std::optional<std::string> dialect{
      sourcemeta::jsontoolkit::dialect(document)};
  EXPECT_FALSE(dialect.has_value());
}

TEST(JSONSchema_dialect, dialect_empty_object) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{}");
  const std::optional<std::string> dialect{
      sourcemeta::jsontoolkit::dialect(document)};
  EXPECT_FALSE(dialect.has_value());
}

TEST(JSONSchema_dialect, dialect_valid) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");
  const std::optional<std::string> dialect{
      sourcemeta::jsontoolkit::dialect(document)};
  EXPECT_TRUE(dialect.has_value());
  EXPECT_EQ(dialect.value(), "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_dialect, dialect_object_with_integer_dialect) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"$schema\": 1 }");
  EXPECT_THROW(sourcemeta::jsontoolkit::dialect(document),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(JSONSchema_dialect, dialect_object_empty_dialect) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"$schema\": \"\" }");
  EXPECT_THROW(sourcemeta::jsontoolkit::dialect(document),
               sourcemeta::jsontoolkit::SchemaError);
}
