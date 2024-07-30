#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/uri.h>

TEST(URI_relative_to, absolute_absolute_base_true_1) {
  const sourcemeta::jsontoolkit::URI base{"https://www.example.com"};
  sourcemeta::jsontoolkit::URI uri{"https://www.example.com/foo"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "foo");
}

TEST(URI_relative_to, absolute_absolute_base_true_2) {
  const sourcemeta::jsontoolkit::URI base{"https://www.example.com/foo"};
  sourcemeta::jsontoolkit::URI uri{"https://www.example.com/foo"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "");
}

TEST(URI_relative_to, absolute_absolute_base_true_3) {
  const sourcemeta::jsontoolkit::URI base{"https://www.example.com/foo"};
  sourcemeta::jsontoolkit::URI uri{"https://www.example.com/foo/bar?q=1"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "bar?q=1");
}

TEST(URI_relative_to, absolute_absolute_base_true_4) {
  const sourcemeta::jsontoolkit::URI base{"https://www.example.com/foo"};
  sourcemeta::jsontoolkit::URI uri{"https://www.example.com/foo/bar#baz"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "bar#baz");
}

TEST(URI_relative_to, absolute_absolute_base_false_1) {
  const sourcemeta::jsontoolkit::URI base{"https://www.example.com/foo"};
  sourcemeta::jsontoolkit::URI uri{"http://www.example.com/foo"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "http://www.example.com/foo");
}

TEST(URI_relative_to, absolute_absolute_base_false_2) {
  const sourcemeta::jsontoolkit::URI base{"https://www.example.com/foo"};
  sourcemeta::jsontoolkit::URI uri{"https://www.example.com"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "https://www.example.com");
}

TEST(URI_relative_to, absolute_absolute_base_false_3) {
  const sourcemeta::jsontoolkit::URI base{"https://www.example.com/foo/bar"};
  sourcemeta::jsontoolkit::URI uri{"https://www.example.com/foo"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "https://www.example.com/foo");
}

TEST(URI_relative_to, absolute_absolute_base_false_4) {
  const sourcemeta::jsontoolkit::URI base{"https://foo.com"};
  sourcemeta::jsontoolkit::URI uri{"https://bar.com"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "https://bar.com");
}

TEST(URI_relative_to, absolute_relative_1) {
  const sourcemeta::jsontoolkit::URI base{"https://www.example.com"};
  sourcemeta::jsontoolkit::URI uri{"foo"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "foo");
}

TEST(URI_relative_to, relative_absolute_1) {
  const sourcemeta::jsontoolkit::URI base{"foo/bar"};
  sourcemeta::jsontoolkit::URI uri{"https://www.example.com/foo"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "https://www.example.com/foo");
}

TEST(URI_relative_to, relative_relative_1) {
  const sourcemeta::jsontoolkit::URI base{"foo/bar"};
  sourcemeta::jsontoolkit::URI uri{"foo/bar/baz"};
  uri.relative_to(base);
  EXPECT_EQ(uri.recompose(), "foo/bar/baz");
}
