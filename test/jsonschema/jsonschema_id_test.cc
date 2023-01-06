#include <gtest/gtest.h>
#include <jsontoolkit/json.h>
#include <jsontoolkit/jsonschema.h>

TEST(jsonschema, id_boolean) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(true)};
  std::optional<std::string> id{sourcemeta::jsontoolkit::id(document)};
  EXPECT_FALSE(id.has_value());
}

TEST(jsonschema, id_empty_object) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{}")};
  std::optional<std::string> id{sourcemeta::jsontoolkit::id(document)};
  EXPECT_FALSE(id.has_value());
}

TEST(jsonschema, id_object_with_id) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema"
  })JSON")};
  std::optional<std::string> id{sourcemeta::jsontoolkit::id(document)};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}

TEST(jsonschema, id_object_with_old_id) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://example.com/my-schema"
  })JSON")};
  std::optional<std::string> id{sourcemeta::jsontoolkit::id(document)};
  EXPECT_FALSE(id.has_value());
}
