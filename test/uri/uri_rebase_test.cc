#include <gtest/gtest.h>

#include <sourcemeta/core/uri.h>

TEST(URI_rebase, absolute_to_relative_match) {
  sourcemeta::core::URI uri{"https://example.com/foo/bar/baz"};
  const sourcemeta::core::URI base{"https://example.com/foo"};
  const sourcemeta::core::URI new_base{"/qux"};
  uri.rebase(base, new_base);
  EXPECT_EQ(uri.recompose(), "/qux/bar/baz");
}

TEST(URI_rebase, absolute_to_relative_mismatch) {
  sourcemeta::core::URI uri{"https://example.com/foo/bar/baz"};
  const sourcemeta::core::URI base{"https://another.com/test"};
  const sourcemeta::core::URI new_base{"/qux"};
  uri.rebase(base, new_base);
  EXPECT_EQ(uri.recompose(), "https://example.com/foo/bar/baz");
}

TEST(URI_rebase, absolute_to_relative_equal) {
  sourcemeta::core::URI uri{"https://example.com/foo/bar/baz"};
  const sourcemeta::core::URI base{"https://example.com/foo/bar/baz"};
  const sourcemeta::core::URI new_base{"/qux"};
  uri.rebase(base, new_base);
  EXPECT_EQ(uri.recompose(), "/qux");
}
