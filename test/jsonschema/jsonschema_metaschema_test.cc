#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(jsonschema_metaschema, metaschema_true) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(true)};
  const std::optional<std::string> metaschema{
      sourcemeta::jsontoolkit::metaschema(document)};
  EXPECT_FALSE(metaschema.has_value());
}

TEST(jsonschema_metaschema, metaschema_false) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(false)};
  const std::optional<std::string> metaschema{
      sourcemeta::jsontoolkit::metaschema(document)};
  EXPECT_FALSE(metaschema.has_value());
}

TEST(jsonschema_metaschema, metaschema_empty_object) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{}")};
  const std::optional<std::string> metaschema{
      sourcemeta::jsontoolkit::metaschema(document)};
  EXPECT_FALSE(metaschema.has_value());
}

TEST(jsonschema_metaschema, metaschema_valid) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON")};
  const std::optional<std::string> metaschema{
      sourcemeta::jsontoolkit::metaschema(document)};
  EXPECT_TRUE(metaschema.has_value());
  EXPECT_EQ(metaschema.value(), "https://json-schema.org/draft/2020-12/schema");
}

TEST(jsonschema_metaschema, metaschema_integer) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(5)};
  EXPECT_THROW(sourcemeta::jsontoolkit::metaschema(document),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(jsonschema_metaschema, metaschema_object_with_integer_metaschema) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"$schema\": 1 }")};
  EXPECT_THROW(sourcemeta::jsontoolkit::metaschema(document),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(jsonschema_metaschema, metaschema_object_empty_metaschema) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"$schema\": \"\" }")};
  EXPECT_THROW(sourcemeta::jsontoolkit::metaschema(document),
               sourcemeta::jsontoolkit::SchemaError);
}
