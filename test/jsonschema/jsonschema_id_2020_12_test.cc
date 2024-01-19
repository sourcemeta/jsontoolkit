#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

static auto test_resolver(std::string_view identifier)
    -> std::future<std::optional<sourcemeta::jsontoolkit::JSON>> {
  std::promise<std::optional<sourcemeta::jsontoolkit::JSON>> promise;

  if (identifier == "https://sourcemeta.com/metaschema") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/metaschema",
      "$schema": "https://json-schema.org/draft/2020-12/schema"
    })JSON"));
  } else {
    return sourcemeta::jsontoolkit::official_resolver(identifier);
  }

  return promise.get_future();
}

TEST(JSONSchema_id_2020_12, valid_one_hop) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "https://sourcemeta.com/metaschema"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::id(document, test_resolver).get()};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}

TEST(JSONSchema_id_2020_12, old_one_hop) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://example.com/my-schema",
    "$schema": "https://sourcemeta.com/metaschema"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::id(document, test_resolver).get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_id_2020_12, id_boolean_default_dialect) {
  const sourcemeta::jsontoolkit::JSON document{true};
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::id(
          document, sourcemeta::jsontoolkit::official_resolver,
          "https://json-schema.org/draft/2020-12/schema")
          .get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_id_2020_12, empty_object_default_dialect) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{}");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::id(
          document, sourcemeta::jsontoolkit::official_resolver,
          "https://json-schema.org/draft/2020-12/schema")
          .get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_id_2020_12, valid_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::id(document,
                                  sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}

TEST(JSONSchema_id_2020_12, old_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://example.com/my-schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::id(document,
                                  sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_id_2020_12, default_dialect_precedence) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::id(document,
                                  sourcemeta::jsontoolkit::official_resolver,
                                  "http://json-schema.org/draft-04/schema#")
          .get()};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}

TEST(JSONSchema_id_2020_12, base_dialect_shortcut) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");
  const std::optional<std::string> id{sourcemeta::jsontoolkit::id(
      document, "https://json-schema.org/draft/2020-12/schema")};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}
