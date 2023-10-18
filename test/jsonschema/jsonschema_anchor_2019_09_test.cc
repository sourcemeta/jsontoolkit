#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_anchor_2019_09, top_level_no_anchor) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema"
  })JSON");

  const auto anchors{sourcemeta::jsontoolkit::anchors(
                         document, sourcemeta::jsontoolkit::official_resolver)
                         .get()};
  EXPECT_TRUE(anchors.empty());
}

TEST(JSONSchema_anchor_2019_09, top_level_static_anchor) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$anchor": "foo"
  })JSON");

  const auto anchors{sourcemeta::jsontoolkit::anchors(
                         document, sourcemeta::jsontoolkit::official_resolver)
                         .get()};
  EXPECT_EQ(anchors.size(), 1);
  EXPECT_TRUE(anchors.contains("foo"));
  EXPECT_EQ(anchors.at("foo"), sourcemeta::jsontoolkit::AnchorType::Static);
}

TEST(JSONSchema_anchor_2019_09, top_level_dynamic_anchor) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$dynamicAnchor": "foo"
  })JSON");

  const auto anchors{sourcemeta::jsontoolkit::anchors(
                         document, sourcemeta::jsontoolkit::official_resolver)
                         .get()};
  EXPECT_TRUE(anchors.empty());
}

TEST(JSONSchema_anchor_2019_09, nested_static_with_default_dialect) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$anchor": "foo"
  })JSON");

  const auto anchors{sourcemeta::jsontoolkit::anchors(
                         document, sourcemeta::jsontoolkit::official_resolver,
                         "https://json-schema.org/draft/2019-09/schema")
                         .get()};
  EXPECT_EQ(anchors.size(), 1);
  EXPECT_TRUE(anchors.contains("foo"));
  EXPECT_EQ(anchors.at("foo"), sourcemeta::jsontoolkit::AnchorType::Static);
}
