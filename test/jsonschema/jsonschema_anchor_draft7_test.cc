#include <gtest/gtest.h>

#include <sourcemeta/core/json.h>
#include <sourcemeta/core/jsonschema.h>

TEST(JSONSchema_anchor_draft7, boolean_schema) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse("true");
  const auto anchors{
      sourcemeta::core::anchors(document, sourcemeta::core::official_resolver,
                                "http://json-schema.org/draft-07/schema#")};
  EXPECT_TRUE(anchors.empty());
}

TEST(JSONSchema_anchor_draft7, top_level_no_anchor) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#"
  })JSON");

  const auto anchors{
      sourcemeta::core::anchors(document, sourcemeta::core::official_resolver)};
  EXPECT_TRUE(anchors.empty());
}

TEST(JSONSchema_anchor_draft7, top_level_static_anchor) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "#foo"
  })JSON");

  const auto anchors{
      sourcemeta::core::anchors(document, sourcemeta::core::official_resolver)};
  EXPECT_EQ(anchors.size(), 1);
  EXPECT_TRUE(anchors.contains("foo"));
  EXPECT_EQ(anchors.at("foo"), sourcemeta::core::AnchorType::Static);
}

TEST(JSONSchema_anchor_draft7, nested_static_with_default_dialect) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse(R"JSON({
    "$id": "#foo"
  })JSON");

  const auto anchors{
      sourcemeta::core::anchors(document, sourcemeta::core::official_resolver,
                                "http://json-schema.org/draft-07/schema#")};
  EXPECT_EQ(anchors.size(), 1);
  EXPECT_TRUE(anchors.contains("foo"));
  EXPECT_EQ(anchors.at("foo"), sourcemeta::core::AnchorType::Static);
}

TEST(JSONSchema_anchor_draft7, vocabularies_shortcut) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "#foo"
  })JSON");

  const std::map<std::string, bool> vocabularies{sourcemeta::core::vocabularies(
      document, sourcemeta::core::official_resolver)};

  const auto anchors{sourcemeta::core::anchors(document, vocabularies)};
  EXPECT_EQ(anchors.size(), 1);
  EXPECT_TRUE(anchors.contains("foo"));
  EXPECT_EQ(anchors.at("foo"), sourcemeta::core::AnchorType::Static);
}

TEST(JSONSchema_anchor_draft7, non_fragment_relative_id) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "foo"
  })JSON");

  const auto anchors{
      sourcemeta::core::anchors(document, sourcemeta::core::official_resolver)};
  EXPECT_TRUE(anchors.empty());
}

TEST(JSONSchema_anchor_draft7, not_only_fragment) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "foo#bar"
  })JSON");

  const auto anchors{
      sourcemeta::core::anchors(document, sourcemeta::core::official_resolver)};
  EXPECT_TRUE(anchors.empty());
}
