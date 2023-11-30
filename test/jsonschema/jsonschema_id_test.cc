#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_id, boolean_no_dialect) {
  const sourcemeta::jsontoolkit::JSON document{true};
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::id(document,
                                  sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_id, boolean_no_dialect_with_default_id) {
  const sourcemeta::jsontoolkit::JSON document{true};
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::id(
          document, sourcemeta::jsontoolkit::official_resolver, std::nullopt,
          "https://www.sourcemeta.com/foo")
          .get()};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://www.sourcemeta.com/foo");
}

TEST(JSONSchema_id, empty_old_no_dollar_sign_id_with_default) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{}");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::id(document,
                                  sourcemeta::jsontoolkit::official_resolver,
                                  "http://json-schema.org/draft-00/schema#",
                                  "https://example.com/my-schema")
          .get()};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}

TEST(JSONSchema_id, empty_dollar_sign_id_with_default) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{}");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::id(
          document, sourcemeta::jsontoolkit::official_resolver,
          "https://json-schema.org/draft/2020-12/schema",
          "https://example.com/my-schema")
          .get()};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}

TEST(JSONSchema_id, boolean_unknown_dialect) {
  const sourcemeta::jsontoolkit::JSON document{true};
  EXPECT_THROW(sourcemeta::jsontoolkit::id(
                   document, sourcemeta::jsontoolkit::official_resolver,
                   "https://www.sourcemeta.com/invalid-dialect"),
               sourcemeta::jsontoolkit::SchemaResolutionError);
}

TEST(JSONSchema_id, empty_object_no_dialect) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{}");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::id(document,
                                  sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_id, empty_object_unknown_dialect) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{}");
  EXPECT_THROW(sourcemeta::jsontoolkit::id(
                   document, sourcemeta::jsontoolkit::official_resolver,
                   "https://www.sourcemeta.com/invalid-dialect"),
               sourcemeta::jsontoolkit::SchemaResolutionError);
}

TEST(JSONSchema_id, object_with_dollar_id_with_no_dialect) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::id(document,
                                  sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_id, object_with_id_with_no_dialect) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://example.com/my-schema"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::id(document,
                                  sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_FALSE(id.has_value());
}
