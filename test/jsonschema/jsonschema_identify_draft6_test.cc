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

TEST(JSONSchema_identify_draft6, valid_one_hop) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "https://sourcemeta.com/metaschema"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(document, test_resolver).get()};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}

TEST(JSONSchema_identify_draft6, old_one_hop) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://example.com/my-schema",
    "$schema": "https://sourcemeta.com/metaschema"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(document, test_resolver).get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_identify_draft6, id_boolean_default_dialect) {
  const sourcemeta::jsontoolkit::JSON document{true};
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver,
          sourcemeta::jsontoolkit::IdentificationStrategy::Strict,
          "http://json-schema.org/draft-06/schema#")
          .get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_identify_draft6, empty_object_default_dialect) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{}");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver,
          sourcemeta::jsontoolkit::IdentificationStrategy::Strict,
          "http://json-schema.org/draft-06/schema#")
          .get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_identify_draft6, valid_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "http://json-schema.org/draft-06/schema#"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}

TEST(JSONSchema_identify_draft6, old_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://example.com/my-schema",
    "$schema": "http://json-schema.org/draft-06/schema#"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_identify_draft6, default_dialect_precedence) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "http://json-schema.org/draft-06/schema#"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver,
          sourcemeta::jsontoolkit::IdentificationStrategy::Strict,
          "http://json-schema.org/draft-04/schema#")
          .get()};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}

TEST(JSONSchema_identify_draft6, base_dialect_shortcut) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "http://json-schema.org/draft-06/schema#"
  })JSON");
  const std::optional<std::string> id{sourcemeta::jsontoolkit::identify(
      document, "http://json-schema.org/draft-06/schema#")};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}

TEST(JSONSchema_identify_draft6, anonymize_with_base_dialect) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "http://json-schema.org/draft-06/schema#"
  })JSON");

  const auto base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  sourcemeta::jsontoolkit::anonymize(document, base_dialect.value());

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-06/schema#"
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_identify_draft6, anonymize_with_base_dialect_no_id) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-06/schema#"
  })JSON");

  const auto base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  sourcemeta::jsontoolkit::anonymize(document, base_dialect.value());

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-06/schema#"
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_identify_draft6, sibling_ref) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "http://json-schema.org/draft-06/schema#",
    "$ref": "#"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(document, test_resolver).get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_identify_draft6, reidentify_replace) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "http://json-schema.org/draft-06/schema#"
  })JSON");

  sourcemeta::jsontoolkit::reidentify(
      document, "https://example.com/my-new-id",
      sourcemeta::jsontoolkit::official_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-new-id",
    "$schema": "http://json-schema.org/draft-06/schema#"
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_identify_draft6, reidentify_set) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-06/schema#"
  })JSON");

  sourcemeta::jsontoolkit::reidentify(
      document, "https://example.com/my-new-id",
      sourcemeta::jsontoolkit::official_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-new-id",
    "$schema": "http://json-schema.org/draft-06/schema#"
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_identify_draft6, reidentify_replace_default_dialect) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema"
  })JSON");

  sourcemeta::jsontoolkit::reidentify(
      document, "https://example.com/my-new-id",
      sourcemeta::jsontoolkit::official_resolver,
      "http://json-schema.org/draft-06/schema#");

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-new-id"
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_identify_draft6, reidentify_replace_base_dialect_shortcut) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "http://json-schema.org/draft-06/schema#"
  })JSON");

  const auto base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());

  sourcemeta::jsontoolkit::reidentify(document, "https://example.com/my-new-id",
                                      base_dialect.value());

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-new-id",
    "$schema": "http://json-schema.org/draft-06/schema#"
  })JSON");

  EXPECT_EQ(document, expected);
}
