#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

static auto test_resolver(std::string_view identifier)
    -> std::optional<sourcemeta::jsontoolkit::JSON> {
  if (identifier == "https://sourcemeta.com/metaschema_1") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "id": "https://sourcemeta.com/metaschema_1",
      "$schema": "http://json-schema.org/draft-04/schema#"
    })JSON");
  } else if (identifier == "https://sourcemeta.com/metaschema_2") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "id": "https://sourcemeta.com/metaschema_2",
      "$schema": "https://sourcemeta.com/metaschema_1"
    })JSON");
  } else {
    return std::nullopt;
  }
}

TEST(JSONSchema_base_dialect_draft4, jsonschema_draft_hyperschema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/hyper-schema#",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-04/hyper-schema#");
}

TEST(JSONSchema_base_dialect_draft4, jsonschema_draft_schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "http://json-schema.org/draft-04/schema#");
}

TEST(JSONSchema_base_dialect_draft4, jsonschema_draft_links) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/links#"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-04/hyper-schema#");
}

TEST(JSONSchema_base_dialect_draft4, jsonschema_base_one_hop) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/metaschema_1"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(document, test_resolver)};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "http://json-schema.org/draft-04/schema#");
}

TEST(JSONSchema_base_dialect_draft4, jsonschema_base_two_hops) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/metaschema_2"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(document, test_resolver)};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "http://json-schema.org/draft-04/schema#");
}
