#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_identify, boolean_no_dialect) {
  const sourcemeta::jsontoolkit::JSON document{true};
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_identify, boolean_no_dialect_with_default_id) {
  const sourcemeta::jsontoolkit::JSON document{true};
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver,
          sourcemeta::jsontoolkit::IdentificationStrategy::Strict, std::nullopt,
          "https://www.sourcemeta.com/foo")
          .get()};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://www.sourcemeta.com/foo");
}

TEST(JSONSchema_identify, empty_old_no_dollar_sign_id_with_default) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{}");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver,
          sourcemeta::jsontoolkit::IdentificationStrategy::Strict,
          "http://json-schema.org/draft-00/schema#",
          "https://example.com/my-schema")
          .get()};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}

TEST(JSONSchema_identify, empty_dollar_sign_id_with_default) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{}");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver,
          sourcemeta::jsontoolkit::IdentificationStrategy::Strict,
          "https://json-schema.org/draft/2020-12/schema",
          "https://example.com/my-schema")
          .get()};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}

TEST(JSONSchema_identify, boolean_unknown_dialect) {
  const sourcemeta::jsontoolkit::JSON document{true};
  EXPECT_THROW(sourcemeta::jsontoolkit::identify(
                   document, sourcemeta::jsontoolkit::official_resolver,
                   sourcemeta::jsontoolkit::IdentificationStrategy::Strict,
                   "https://www.sourcemeta.com/invalid-dialect"),
               sourcemeta::jsontoolkit::SchemaResolutionError);
}

TEST(JSONSchema_identify, empty_object_no_dialect) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{}");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_identify, empty_object_unknown_dialect) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{}");
  EXPECT_THROW(sourcemeta::jsontoolkit::identify(
                   document, sourcemeta::jsontoolkit::official_resolver,
                   sourcemeta::jsontoolkit::IdentificationStrategy::Strict,
                   "https://www.sourcemeta.com/invalid-dialect"),
               sourcemeta::jsontoolkit::SchemaResolutionError);
}

TEST(JSONSchema_identify, object_with_dollar_id_with_no_dialect) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_identify, object_with_id_with_no_dialect) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://example.com/my-schema"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_identify, loose_boolean) {
  const sourcemeta::jsontoolkit::JSON document{true};
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver,
          sourcemeta::jsontoolkit::IdentificationStrategy::Loose)
          .get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_identify, loose_with_valid_dollar_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver,
          sourcemeta::jsontoolkit::IdentificationStrategy::Loose)
          .get()};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}

TEST(JSONSchema_identify, loose_with_invalid_dollar_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": false
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver,
          sourcemeta::jsontoolkit::IdentificationStrategy::Loose)
          .get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_identify, loose_with_valid_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://example.com/my-schema"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver,
          sourcemeta::jsontoolkit::IdentificationStrategy::Loose)
          .get()};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}

TEST(JSONSchema_identify, loose_with_invalid_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": false
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver,
          sourcemeta::jsontoolkit::IdentificationStrategy::Loose)
          .get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_identify, loose_with_valid_dollar_id_and_invalid_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "id": false
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver,
          sourcemeta::jsontoolkit::IdentificationStrategy::Loose)
          .get()};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}

TEST(JSONSchema_identify, loose_with_valid_id_and_invalid_dollar_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://example.com/my-schema",
    "$id": false
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver,
          sourcemeta::jsontoolkit::IdentificationStrategy::Loose)
          .get()};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}

TEST(JSONSchema_identify, loose_with_invalid_id_and_invalid_dollar_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": 1,
    "id": false
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver,
          sourcemeta::jsontoolkit::IdentificationStrategy::Loose)
          .get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_identify, loose_with_matching_id_and_dollar_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "id": "https://example.com/my-schema"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver,
          sourcemeta::jsontoolkit::IdentificationStrategy::Loose)
          .get()};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}

TEST(JSONSchema_identify, loose_with_non_matching_id_and_dollar_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "http://example.com/my-schema",
    "id": "https://example.com/my-schema"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver,
          sourcemeta::jsontoolkit::IdentificationStrategy::Loose)
          .get()};
  EXPECT_FALSE(id.has_value());
}

TEST(JSONSchema_identify, loose_with_resolvable_default_dialect) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "http://example.com/my-schema",
    "id": "https://example.com/my-schema"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver,
          sourcemeta::jsontoolkit::IdentificationStrategy::Loose,
          "https://json-schema.org/draft/2020-12/schema")
          .get()};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "http://example.com/my-schema");
}

TEST(JSONSchema_identify, loose_with_unresolvable_dialect) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "https://www.sourcemeta.com/invalid-dialect"
  })JSON");
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::identify(
          document, sourcemeta::jsontoolkit::official_resolver,
          sourcemeta::jsontoolkit::IdentificationStrategy::Loose)
          .get()};
  EXPECT_TRUE(id.has_value());
  EXPECT_EQ(id.value(), "https://example.com/my-schema");
}
