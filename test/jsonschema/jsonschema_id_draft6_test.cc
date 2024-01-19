#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

static auto test_resolver(std::string_view identifier)
    -> std::future<std::optional<sourcemeta::jsontoolkit::JSON>> {
  std::promise<std::optional<sourcemeta::jsontoolkit::JSON>> promise;

  if (identifier == "https://sourcemeta.com/metaschema") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/metaschema",
      "$schema": "http://json-schema.org/draft-06/schema#"
    })JSON"));
  } else {
    return sourcemeta::jsontoolkit::official_resolver(identifier);
  }

  return promise.get_future();
}

TEST(JSONSchema_id_draft6, valid_one_hop) {
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

TEST(JSONSchema_id_draft6, old_one_hop) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://example.com/my-schema",
    "$schema": "https://sourcemeta.com/metaschema"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::id(document, test_resolver).get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_id_draft6, id_boolean_default_dialect) {
  const sourcemeta::jsontoolkit::JSON document{true};
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::id(document,
                                  sourcemeta::jsontoolkit::official_resolver,
                                  "http://json-schema.org/draft-06/schema#")
          .get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_id_draft6, empty_object_default_dialect) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{}");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::id(document,
                                  sourcemeta::jsontoolkit::official_resolver,
                                  "http://json-schema.org/draft-06/schema#")
          .get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_id_draft6, valid_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "http://json-schema.org/draft-06/schema#"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::id(document,
                                  sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}

TEST(JSONSchema_id_draft6, old_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://example.com/my-schema",
    "$schema": "http://json-schema.org/draft-06/schema#"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::id(document,
                                  sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_id_draft6, default_dialect_precedence) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "http://json-schema.org/draft-06/schema#"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::id(document,
                                  sourcemeta::jsontoolkit::official_resolver,
                                  "http://json-schema.org/draft-04/schema#")
          .get()};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}

TEST(JSONSchema_id_draft6, base_dialect_shortcut) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "http://json-schema.org/draft-06/schema#"
  })JSON");
  const std::optional<std::string> id{sourcemeta::jsontoolkit::id(
      document, "http://json-schema.org/draft-06/schema#")};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}
