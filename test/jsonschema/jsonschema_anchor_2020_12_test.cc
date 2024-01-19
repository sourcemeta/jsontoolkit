#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_anchor_2020_12, boolean_schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("true");
  const auto anchors{sourcemeta::jsontoolkit::anchors(
                         document, sourcemeta::jsontoolkit::official_resolver,
                         "https://json-schema.org/draft/2020-12/schema")
                         .get()};
  EXPECT_TRUE(anchors.empty());
}

TEST(JSONSchema_anchor_2020_12, top_level_no_anchor) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  const auto anchors{sourcemeta::jsontoolkit::anchors(
                         document, sourcemeta::jsontoolkit::official_resolver)
                         .get()};
  EXPECT_TRUE(anchors.empty());
}

TEST(JSONSchema_anchor_2020_12, top_level_static_anchor) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$anchor": "foo"
  })JSON");

  const auto anchors{sourcemeta::jsontoolkit::anchors(
                         document, sourcemeta::jsontoolkit::official_resolver)
                         .get()};
  EXPECT_EQ(anchors.size(), 1);
  EXPECT_TRUE(anchors.contains("foo"));
  EXPECT_EQ(anchors.at("foo"), sourcemeta::jsontoolkit::AnchorType::Static);
}

TEST(JSONSchema_anchor_2020_12, top_level_dynamic_anchor) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$dynamicAnchor": "foo"
  })JSON");

  const auto anchors{sourcemeta::jsontoolkit::anchors(
                         document, sourcemeta::jsontoolkit::official_resolver)
                         .get()};
  EXPECT_EQ(anchors.size(), 1);
  EXPECT_TRUE(anchors.contains("foo"));
  EXPECT_EQ(anchors.at("foo"), sourcemeta::jsontoolkit::AnchorType::Dynamic);
}

TEST(JSONSchema_anchor_2020_12, top_level_static_and_dynamic_anchor_different) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$anchor": "bar",
    "$dynamicAnchor": "foo"
  })JSON");

  const auto anchors{sourcemeta::jsontoolkit::anchors(
                         document, sourcemeta::jsontoolkit::official_resolver)
                         .get()};
  EXPECT_EQ(anchors.size(), 2);
  EXPECT_TRUE(anchors.contains("foo"));
  EXPECT_TRUE(anchors.contains("bar"));
  EXPECT_EQ(anchors.at("foo"), sourcemeta::jsontoolkit::AnchorType::Dynamic);
  EXPECT_EQ(anchors.at("bar"), sourcemeta::jsontoolkit::AnchorType::Static);
}

TEST(JSONSchema_anchor_2020_12, top_level_static_and_dynamic_anchor_same) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$anchor": "foo",
    "$dynamicAnchor": "foo"
  })JSON");

  const auto anchors{sourcemeta::jsontoolkit::anchors(
                         document, sourcemeta::jsontoolkit::official_resolver)
                         .get()};
  EXPECT_EQ(anchors.size(), 1);
  EXPECT_TRUE(anchors.contains("foo"));
  EXPECT_EQ(anchors.at("foo"), sourcemeta::jsontoolkit::AnchorType::All);
}

TEST(JSONSchema_anchor_2020_12, nested_static_with_default_dialect) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$anchor": "foo"
  })JSON");

  const auto anchors{sourcemeta::jsontoolkit::anchors(
                         document, sourcemeta::jsontoolkit::official_resolver,
                         "https://json-schema.org/draft/2020-12/schema")
                         .get()};
  EXPECT_EQ(anchors.size(), 1);
  EXPECT_TRUE(anchors.contains("foo"));
  EXPECT_EQ(anchors.at("foo"), sourcemeta::jsontoolkit::AnchorType::Static);
}

TEST(JSONSchema_anchor_2020_12, vocabularies_shortcut) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$anchor": "foo",
    "$dynamicAnchor": "bar"
  })JSON");

  const std::map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};

  const auto anchors{sourcemeta::jsontoolkit::anchors(document, vocabularies)};
  EXPECT_EQ(anchors.size(), 2);
  EXPECT_TRUE(anchors.contains("foo"));
  EXPECT_TRUE(anchors.contains("bar"));
  EXPECT_EQ(anchors.at("foo"), sourcemeta::jsontoolkit::AnchorType::Static);
  EXPECT_EQ(anchors.at("bar"), sourcemeta::jsontoolkit::AnchorType::Dynamic);
}
