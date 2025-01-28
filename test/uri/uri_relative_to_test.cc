#include <gtest/gtest.h>
#include <sourcemeta/core/uri.h>

TEST(URI_relative_to, absolute_absolute_base_true_1) {
  const sourcemeta::core::URI base{"https://www.example.com"};
  sourcemeta::core::URI uri{"https://www.example.com/foo"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "foo");
}

TEST(URI_relative_to, absolute_absolute_base_true_2) {
  const sourcemeta::core::URI base{"https://www.example.com/foo"};
  sourcemeta::core::URI uri{"https://www.example.com/foo"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "");
}

TEST(URI_relative_to, absolute_absolute_base_true_3) {
  const sourcemeta::core::URI base{"https://www.example.com/foo"};
  sourcemeta::core::URI uri{"https://www.example.com/foo/bar?q=1"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "bar?q=1");
}

TEST(URI_relative_to, absolute_absolute_base_true_4) {
  const sourcemeta::core::URI base{"https://www.example.com/foo"};
  sourcemeta::core::URI uri{"https://www.example.com/foo/bar#baz"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "bar#baz");
}

TEST(URI_relative_to, absolute_absolute_base_false_1) {
  const sourcemeta::core::URI base{"https://www.example.com/foo"};
  sourcemeta::core::URI uri{"http://www.example.com/foo"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "http://www.example.com/foo");
}

TEST(URI_relative_to, absolute_absolute_base_false_2) {
  const sourcemeta::core::URI base{"https://www.example.com/foo"};
  sourcemeta::core::URI uri{"https://www.example.com"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "https://www.example.com");
}

TEST(URI_relative_to, absolute_absolute_base_false_3) {
  const sourcemeta::core::URI base{"https://www.example.com/foo/bar"};
  sourcemeta::core::URI uri{"https://www.example.com/foo"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "https://www.example.com/foo");
}

TEST(URI_relative_to, absolute_absolute_base_false_4) {
  const sourcemeta::core::URI base{"https://foo.com"};
  sourcemeta::core::URI uri{"https://bar.com"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "https://bar.com");
}

TEST(URI_relative_to, absolute_relative_1) {
  const sourcemeta::core::URI base{"https://www.example.com"};
  sourcemeta::core::URI uri{"foo"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "foo");
}

TEST(URI_relative_to, absolute_relative_2) {
  const sourcemeta::core::URI base{"https://www.example.com/foo/bar/baz"};
  sourcemeta::core::URI uri{"/qux"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "/qux");
}

TEST(URI_relative_to, relative_absolute_1) {
  const sourcemeta::core::URI base{"foo/bar"};
  sourcemeta::core::URI uri{"https://www.example.com/foo"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "https://www.example.com/foo");
}

TEST(URI_relative_to, relative_relative_1) {
  const sourcemeta::core::URI base{"foo/bar"};
  sourcemeta::core::URI uri{"foo/bar/baz"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "foo/bar/baz");
}

TEST(URI_relative_to, urn_1) {
  const sourcemeta::core::URI base{"schema:"};
  sourcemeta::core::URI uri{"schema:myschema"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "myschema");
}
