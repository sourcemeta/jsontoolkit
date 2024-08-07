#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/uri.h>

TEST(URI_is_relative, dot_slash) {
  const sourcemeta::jsontoolkit::URI uri{"./foo"};
  EXPECT_TRUE(uri.is_relative());
}

TEST(URI_is_relative, dot_dot_slash) {
  const sourcemeta::jsontoolkit::URI uri{"../foo"};
  EXPECT_TRUE(uri.is_relative());
}

TEST(URI_is_relative, without_dot_and_slash) {
  const sourcemeta::jsontoolkit::URI uri{"foo"};
  EXPECT_TRUE(uri.is_relative());
}

TEST(URI_is_relative, unique_slash) {
  const sourcemeta::jsontoolkit::URI uri{"/foo"};
  EXPECT_FALSE(uri.is_relative());
}
