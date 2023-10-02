#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_base_dialect_2020_12, jsonschema_schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_base_dialect_2020_12, jsonschema_hyperschema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/hyper-schema",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/hyper-schema");
}

TEST(JSONSchema_base_dialect_2020_12, jsonschema_links) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/links"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_base_dialect_2020_12, jsonschema_output) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/output/schema"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_base_dialect_2020_12, jsonschema_meta_applicator) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/meta/applicator"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_base_dialect_2020_12, jsonschema_meta_content) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/meta/content"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_base_dialect_2020_12, jsonschema_meta_core) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/meta/core"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_base_dialect_2020_12, jsonschema_meta_format_annotation) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/meta/format-annotation"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_base_dialect_2020_12, jsonschema_meta_format_assertion) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/meta/format-assertion"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_base_dialect_2020_12, jsonschema_meta_hyperschema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/meta/hyper-schema"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/hyper-schema");
}

TEST(JSONSchema_base_dialect_2020_12, jsonschema_meta_meta_data) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/meta/meta-data"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_base_dialect_2020_12, jsonschema_meta_unevaluated) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/meta/unevaluated"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_base_dialect_2020_12, jsonschema_meta_validation) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/meta/validation"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/schema");
}
