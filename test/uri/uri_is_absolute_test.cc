#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/uri.h>

TEST(URI_is_absolute, example_url) {
  const sourcemeta::jsontoolkit::URI uri{"https://example.com"};
  EXPECT_TRUE(uri.is_absolute());
}

TEST(URI_is_absolute, relative_url) {
  const sourcemeta::jsontoolkit::URI uri{"../foo"};
  EXPECT_FALSE(uri.is_absolute());
}

TEST(URI_is_absolute, urn) {
  const sourcemeta::jsontoolkit::URI uri{"urn:example:schema"};
  EXPECT_TRUE(uri.is_absolute());
}

TEST(URI_is_absolute, slash) {
  // The is a relative URI, even if the path is absolute.
  const sourcemeta::jsontoolkit::URI uri{"/foo"};
  EXPECT_FALSE(uri.is_absolute());
}
