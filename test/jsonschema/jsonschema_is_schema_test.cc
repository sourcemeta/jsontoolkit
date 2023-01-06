#include <gtest/gtest.h>
#include <jsontoolkit/json.h>
#include <jsontoolkit/jsonschema.h>

TEST(jsonschema, is_schema_true) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_schema(document));
}

TEST(jsonschema, is_schema_false) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(false)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_schema(document));
}

TEST(jsonschema, is_schema_int) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(5)};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_schema(document));
}

TEST(jsonschema, is_schema_real) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(5.3)};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_schema(document));
}

TEST(jsonschema, is_schema_null) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(nullptr)};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_schema(document));
}

TEST(jsonschema, is_schema_string) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from("foo")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_schema(document));
}

TEST(jsonschema, is_schema_array) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_schema(document));
}

TEST(jsonschema, is_schema_empty_object) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_schema(document));
}
