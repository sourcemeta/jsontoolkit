#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/uri.h>

TEST(URI, copy_constructor) {
  const sourcemeta::jsontoolkit::URI uri_1{"https://example.com"};
  const sourcemeta::jsontoolkit::URI uri_2{uri_1};
  EXPECT_EQ(uri_1.recompose(), uri_2.recompose());
}

TEST(URI, move_constructor) {
  sourcemeta::jsontoolkit::URI uri_1{"https://example.com"};
  const sourcemeta::jsontoolkit::URI uri_2{std::move(uri_1)};
  EXPECT_EQ(uri_2.recompose(), "https://example.com");
}
