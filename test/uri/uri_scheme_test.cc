#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/uri.h>

TEST(URI_scheme, https_example_url) {
  const sourcemeta::jsontoolkit::URI uri{"https://example.com/foo"};
  EXPECT_TRUE(uri.scheme().has_value());
  EXPECT_EQ(uri.scheme().value(), "https");
}

TEST(URI_scheme, http_example_url) {
  const sourcemeta::jsontoolkit::URI uri{"http://example.com/foo"};
  EXPECT_TRUE(uri.scheme().has_value());
  EXPECT_EQ(uri.scheme().value(), "http");
}

TEST(URI_scheme, relative_url) {
  const sourcemeta::jsontoolkit::URI uri{"../foo"};
  EXPECT_FALSE(uri.scheme().has_value());
}
