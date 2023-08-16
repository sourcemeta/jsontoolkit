#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema, id_boolean) {
  const sourcemeta::jsontoolkit::JSON document{true};
  std::optional<std::string> id{sourcemeta::jsontoolkit::id(document)};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema, id_empty_object) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{}");
  std::optional<std::string> id{sourcemeta::jsontoolkit::id(document)};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema, id_object_with_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema"
  })JSON");
  std::optional<std::string> id{sourcemeta::jsontoolkit::id(document)};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}

TEST(JSONSchema, id_object_with_old_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://example.com/my-schema"
  })JSON");
  std::optional<std::string> id{sourcemeta::jsontoolkit::id(document)};
  EXPECT_FALSE(id.has_value());
}
