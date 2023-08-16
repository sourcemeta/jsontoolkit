#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema, is_schema_true) {
  const sourcemeta::jsontoolkit::JSON document{true};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_schema(document));
}

TEST(JSONSchema, is_schema_false) {
  const sourcemeta::jsontoolkit::JSON document{false};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_schema(document));
}

TEST(JSONSchema, is_schema_int) {
  const sourcemeta::jsontoolkit::JSON document{5};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_schema(document));
}

TEST(JSONSchema, is_schema_real) {
  const sourcemeta::jsontoolkit::JSON document{5.3};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_schema(document));
}

TEST(JSONSchema, is_schema_null) {
  const sourcemeta::jsontoolkit::JSON document{nullptr};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_schema(document));
}

TEST(JSONSchema, is_schema_string) {
  const sourcemeta::jsontoolkit::JSON document{"foo"};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_schema(document));
}

TEST(JSONSchema, is_schema_array) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_schema(document));
}

TEST(JSONSchema, is_schema_empty_object) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_schema(document));
}
