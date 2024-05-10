#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_anchor_draft4, boolean_schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("true");
  const auto anchors{sourcemeta::jsontoolkit::anchors(
                         document, sourcemeta::jsontoolkit::official_resolver,
                         "http://json-schema.org/draft-04/schema#")
                         .get()};
  EXPECT_TRUE(anchors.empty());
}

TEST(JSONSchema_anchor_draft4, top_level_no_anchor) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#"
  })JSON");

  const auto anchors{sourcemeta::jsontoolkit::anchors(
                         document, sourcemeta::jsontoolkit::official_resolver)
                         .get()};
  EXPECT_TRUE(anchors.empty());
}

TEST(JSONSchema_anchor_draft4, top_level_static_anchor) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "#foo"
  })JSON");

  const auto anchors{sourcemeta::jsontoolkit::anchors(
                         document, sourcemeta::jsontoolkit::official_resolver)
                         .get()};
  EXPECT_EQ(anchors.size(), 1);
  EXPECT_TRUE(anchors.contains("foo"));
  EXPECT_EQ(anchors.at("foo"), sourcemeta::jsontoolkit::AnchorType::Static);
}

TEST(JSONSchema_anchor_draft4, nested_static_with_default_dialect) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "#foo"
  })JSON");

  const auto anchors{sourcemeta::jsontoolkit::anchors(
                         document, sourcemeta::jsontoolkit::official_resolver,
                         "http://json-schema.org/draft-04/schema#")
                         .get()};
  EXPECT_EQ(anchors.size(), 1);
  EXPECT_TRUE(anchors.contains("foo"));
  EXPECT_EQ(anchors.at("foo"), sourcemeta::jsontoolkit::AnchorType::Static);
}

TEST(JSONSchema_anchor_draft4, vocabularies_shortcut) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "#foo"
  })JSON");

  const std::map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};

  const auto anchors{sourcemeta::jsontoolkit::anchors(document, vocabularies)};
  EXPECT_EQ(anchors.size(), 1);
  EXPECT_TRUE(anchors.contains("foo"));
  EXPECT_EQ(anchors.at("foo"), sourcemeta::jsontoolkit::AnchorType::Static);
}

TEST(JSONSchema_anchor_draft4, non_fragment_relative_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "foo"
  })JSON");

  const auto anchors{sourcemeta::jsontoolkit::anchors(
                         document, sourcemeta::jsontoolkit::official_resolver)
                         .get()};
  EXPECT_TRUE(anchors.empty());
}

TEST(JSONSchema_anchor_draft4, not_only_fragment) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "foo#bar"
  })JSON");

  const auto anchors{sourcemeta::jsontoolkit::anchors(
                         document, sourcemeta::jsontoolkit::official_resolver)
                         .get()};
  EXPECT_TRUE(anchors.empty());
}
