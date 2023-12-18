#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>

TEST(JSONPointer_to_string, empty) {
  const sourcemeta::jsontoolkit::Pointer pointer;
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(pointer), "");
}

TEST(JSONPointer_to_string, empty_property) {
  const sourcemeta::jsontoolkit::Pointer pointer{""};
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(pointer), "/");
}

TEST(JSONPointer_to_string, foo_bar_baz) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar", "baz"};
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(pointer), "/foo/bar/baz");
}

TEST(JSONPointer_to_string, foo_1_2) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", 1, 2};
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(pointer), "/foo/1/2");
}
