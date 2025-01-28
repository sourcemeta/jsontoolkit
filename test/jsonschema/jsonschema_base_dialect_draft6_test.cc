#include <gtest/gtest.h>
#include <sourcemeta/core/json.h>
#include <sourcemeta/core/jsonschema.h>

TEST(JSONSchema_base_dialect_draft6, jsonschema_draft_hyperschema) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "http://json-schema.org/draft-06/hyper-schema#",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{sourcemeta::core::base_dialect(
      document, sourcemeta::core::official_resolver)};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-06/hyper-schema#");
}

TEST(JSONSchema_base_dialect_draft6, jsonschema_draft_schema) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "http://json-schema.org/draft-06/schema#",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{sourcemeta::core::base_dialect(
      document, sourcemeta::core::official_resolver)};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "http://json-schema.org/draft-06/schema#");
}

TEST(JSONSchema_base_dialect_draft6, jsonschema_draft_links) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "http://json-schema.org/draft-06/links#"
  })JSON");
  const std::optional<std::string> base_dialect{sourcemeta::core::base_dialect(
      document, sourcemeta::core::official_resolver)};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-06/hyper-schema#");
}
