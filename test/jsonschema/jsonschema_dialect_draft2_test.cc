#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_dialect_draft2, jsonschema_draft_hyperschema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-02/hyper-schema#",
    "type": "object"
  })JSON");
  const std::optional<std::string> dialect{
      sourcemeta::jsontoolkit::dialect(document)};
  EXPECT_TRUE(dialect.has_value());
  EXPECT_EQ(dialect.value(), "http://json-schema.org/draft-02/hyper-schema#");
}

TEST(JSONSchema_dialect_draft2, jsonschema_draft_schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-02/schema#",
    "type": "object"
  })JSON");
  const std::optional<std::string> dialect{
      sourcemeta::jsontoolkit::dialect(document)};
  EXPECT_TRUE(dialect.has_value());
  EXPECT_EQ(dialect.value(), "http://json-schema.org/draft-02/schema#");
}

TEST(JSONSchema_dialect_draft2, jsonschema_draft_jsonref) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-02/json-ref#"
  })JSON");
  const std::optional<std::string> dialect{
      sourcemeta::jsontoolkit::dialect(document)};
  EXPECT_TRUE(dialect.has_value());
  EXPECT_EQ(dialect.value(), "http://json-schema.org/draft-02/json-ref#");
}

TEST(JSONSchema_dialect_draft2, jsonschema_draft_links) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-02/links#"
  })JSON");
  const std::optional<std::string> dialect{
      sourcemeta::jsontoolkit::dialect(document)};
  EXPECT_TRUE(dialect.has_value());
  EXPECT_EQ(dialect.value(), "http://json-schema.org/draft-02/links#");
}
