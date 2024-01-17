#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/uri.h>

TEST(URI_recompose_without_fragment, example_1) {
  const sourcemeta::jsontoolkit::URI uri{"https://example.com/foo"};
  EXPECT_TRUE(uri.recompose_without_fragment().has_value());
  EXPECT_EQ(uri.recompose_without_fragment(), "https://example.com/foo");
}

TEST(URI_recompose_without_fragment, example_2) {
  const sourcemeta::jsontoolkit::URI uri{"https://example.com/foo/../bar"};
  EXPECT_TRUE(uri.recompose_without_fragment().has_value());
  EXPECT_EQ(uri.recompose_without_fragment().value(),
            "https://example.com/bar");
}

TEST(URI_recompose_without_fragment, urn) {
  const sourcemeta::jsontoolkit::URI uri{"urn:example:schema"};
  EXPECT_TRUE(uri.recompose_without_fragment().has_value());
  EXPECT_EQ(uri.recompose_without_fragment().value(), "urn:example:schema");
}

TEST(URI_recompose_without_fragment, https_with_empty_fragment) {
  const sourcemeta::jsontoolkit::URI uri{"https://example.com/foo#"};
  EXPECT_TRUE(uri.recompose_without_fragment().has_value());
  EXPECT_EQ(uri.recompose_without_fragment().value(),
            "https://example.com/foo");
}

TEST(URI_recompose_without_fragment, http_trailing_slash) {
  const sourcemeta::jsontoolkit::URI uri{"http://example.com/"};
  EXPECT_TRUE(uri.recompose_without_fragment().has_value());
  EXPECT_EQ(uri.recompose_without_fragment().value(), "http://example.com/");
}

TEST(URI_recompose_without_fragment, https_with_fragment) {
  const sourcemeta::jsontoolkit::URI uri{"https://example.com/foo#bar"};
  EXPECT_TRUE(uri.recompose_without_fragment().has_value());
  EXPECT_EQ(uri.recompose_without_fragment().value(),
            "https://example.com/foo");
}

TEST(URI_recompose_without_fragment, urn_with_fragment) {
  const sourcemeta::jsontoolkit::URI uri{"urn:example:schema#test"};
  EXPECT_TRUE(uri.recompose_without_fragment().has_value());
  EXPECT_EQ(uri.recompose_without_fragment().value(), "urn:example:schema");
}

TEST(URI_recompose_without_fragment, fragment_only) {
  const sourcemeta::jsontoolkit::URI uri{"#bar"};
  EXPECT_FALSE(uri.recompose_without_fragment().has_value());
}
