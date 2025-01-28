#include <gtest/gtest.h>
#include <sourcemeta/core/json.h>
#include <sourcemeta/core/jsonschema.h>

TEST(JSONSchema_anchor_2019_09, boolean_schema) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json("true");
  const auto anchors{sourcemeta::core::anchors(
      document, sourcemeta::core::official_resolver,
      "https://json-schema.org/draft/2019-09/schema")};
  EXPECT_TRUE(anchors.empty());
}

TEST(JSONSchema_anchor_2019_09, top_level_no_anchor) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema"
  })JSON");

  const auto anchors{
      sourcemeta::core::anchors(document, sourcemeta::core::official_resolver)};
  EXPECT_TRUE(anchors.empty());
}

TEST(JSONSchema_anchor_2019_09, top_level_static_anchor) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$anchor": "foo"
  })JSON");

  const auto anchors{
      sourcemeta::core::anchors(document, sourcemeta::core::official_resolver)};
  EXPECT_EQ(anchors.size(), 1);
  EXPECT_TRUE(anchors.contains("foo"));
  EXPECT_EQ(anchors.at("foo"), sourcemeta::core::AnchorType::Static);
}

TEST(JSONSchema_anchor_2019_09, top_level_dynamic_anchor) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$dynamicAnchor": "foo"
  })JSON");

  const auto anchors{
      sourcemeta::core::anchors(document, sourcemeta::core::official_resolver)};
  EXPECT_TRUE(anchors.empty());
}

TEST(JSONSchema_anchor_2019_09, top_level_recursive_anchor_false) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": false
  })JSON");

  const auto anchors{
      sourcemeta::core::anchors(document, sourcemeta::core::official_resolver)};

  EXPECT_TRUE(anchors.empty());
}

TEST(JSONSchema_anchor_2019_09, top_level_recursive_anchor_true) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": true
  })JSON");

  const auto anchors{
      sourcemeta::core::anchors(document, sourcemeta::core::official_resolver)};

  EXPECT_EQ(anchors.size(), 1);
  EXPECT_TRUE(anchors.contains(""));
  EXPECT_EQ(anchors.at(""), sourcemeta::core::AnchorType::Dynamic);
}

TEST(JSONSchema_anchor_2019_09, top_level_recursive_anchor_true_and_empty) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": true,
    "$anchor": ""
  })JSON");

  const auto anchors{
      sourcemeta::core::anchors(document, sourcemeta::core::official_resolver)};

  EXPECT_EQ(anchors.size(), 1);
  EXPECT_TRUE(anchors.contains(""));
  EXPECT_EQ(anchors.at(""), sourcemeta::core::AnchorType::All);
}

TEST(JSONSchema_anchor_2019_09, nested_static_with_default_dialect) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$anchor": "foo"
  })JSON");

  const auto anchors{sourcemeta::core::anchors(
      document, sourcemeta::core::official_resolver,
      "https://json-schema.org/draft/2019-09/schema")};
  EXPECT_EQ(anchors.size(), 1);
  EXPECT_TRUE(anchors.contains("foo"));
  EXPECT_EQ(anchors.at("foo"), sourcemeta::core::AnchorType::Static);
}

TEST(JSONSchema_anchor_2019_09, vocabularies_shortcut) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$anchor": "foo"
  })JSON");

  const std::map<std::string, bool> vocabularies{sourcemeta::core::vocabularies(
      document, sourcemeta::core::official_resolver)};

  const auto anchors{sourcemeta::core::anchors(document, vocabularies)};
  EXPECT_EQ(anchors.size(), 1);
  EXPECT_TRUE(anchors.contains("foo"));
  EXPECT_EQ(anchors.at("foo"), sourcemeta::core::AnchorType::Static);
}

TEST(JSONSchema_anchor_2019_09, old_id_anchor_not_recognized) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "#foo"
  })JSON");

  const auto anchors{
      sourcemeta::core::anchors(document, sourcemeta::core::official_resolver)};
  EXPECT_TRUE(anchors.empty());
}
