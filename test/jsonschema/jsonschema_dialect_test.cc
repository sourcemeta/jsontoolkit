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
