#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/uri.h>

TEST(URI_recompose_without_fragment, example_1) {
  const sourcemeta::jsontoolkit::URI uri{"https://example.com/foo"};
  EXPECT_EQ(uri.recompose_without_fragment(), "https://example.com/foo");
}

TEST(URI_recompose_without_fragment, example_2) {
  const sourcemeta::jsontoolkit::URI uri{"https://example.com/foo/../bar"};
  EXPECT_EQ(uri.recompose_without_fragment(), "https://example.com/bar");
}

TEST(URI_recompose_without_fragment, urn) {
  const sourcemeta::jsontoolkit::URI uri{"urn:example:schema"};
  EXPECT_EQ(uri.recompose_without_fragment(), "urn:example:schema");
}

TEST(URI_recompose_without_fragment, https_with_empty_fragment) {
  const sourcemeta::jsontoolkit::URI uri{"https://example.com/foo#"};
  EXPECT_EQ(uri.recompose_without_fragment(), "https://example.com/foo");
}

TEST(URI_recompose_without_fragment, http_trailing_slash) {
  const sourcemeta::jsontoolkit::URI uri{"http://example.com/"};
  EXPECT_EQ(uri.recompose_without_fragment(), "http://example.com/");
}

TEST(URI_recompose_without_fragment, https_with_fragment) {
  const sourcemeta::jsontoolkit::URI uri{"https://example.com/foo#bar"};
  EXPECT_EQ(uri.recompose_without_fragment(), "https://example.com/foo");
}

TEST(URI_recompose_without_fragment, urn_with_fragment) {
  const sourcemeta::jsontoolkit::URI uri{"urn:example:schema#test"};
  EXPECT_EQ(uri.recompose_without_fragment(), "urn:example:schema");
}
