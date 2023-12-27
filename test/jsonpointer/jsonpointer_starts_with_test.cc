#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/jsonpointer.h>

TEST(JSONPointer_starts_with, property_prefix_true) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer prefix{"foo"};
  EXPECT_TRUE(pointer.starts_with(prefix));
}

TEST(JSONPointer_starts_with, property_prefix_false) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer prefix{"bar"};
  EXPECT_FALSE(pointer.starts_with(prefix));
}

TEST(JSONPointer_starts_with, index_prefix_true) {
  const sourcemeta::jsontoolkit::Pointer pointer{0, 1};
  const sourcemeta::jsontoolkit::Pointer prefix{0};
  EXPECT_TRUE(pointer.starts_with(prefix));
}

TEST(JSONPointer_starts_with, index_prefix_false) {
  const sourcemeta::jsontoolkit::Pointer pointer{0, 1};
  const sourcemeta::jsontoolkit::Pointer prefix{1};
  EXPECT_FALSE(pointer.starts_with(prefix));
}

TEST(JSONPointer_starts_with, property_same) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer prefix{"foo", "bar"};
  EXPECT_TRUE(pointer.starts_with(prefix));
}

TEST(JSONPointer_starts_with, index_same) {
  const sourcemeta::jsontoolkit::Pointer pointer{0, 1};
  const sourcemeta::jsontoolkit::Pointer prefix{0, 1};
  EXPECT_TRUE(pointer.starts_with(prefix));
}

TEST(JSONPointer_starts_with, property_different) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer prefix{"bar", "baz"};
  EXPECT_FALSE(pointer.starts_with(prefix));
}

TEST(JSONPointer_starts_with, index_different) {
  const sourcemeta::jsontoolkit::Pointer pointer{0, 1};
  const sourcemeta::jsontoolkit::Pointer prefix{2, 3};
  EXPECT_FALSE(pointer.starts_with(prefix));
}

TEST(JSONPointer_starts_with, non_empty_empty) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo"};
  const sourcemeta::jsontoolkit::Pointer prefix;
  EXPECT_TRUE(pointer.starts_with(prefix));
}

TEST(JSONPointer_starts_with, empty_non_empty) {
  const sourcemeta::jsontoolkit::Pointer pointer;
  const sourcemeta::jsontoolkit::Pointer prefix{"foo"};
  EXPECT_FALSE(pointer.starts_with(prefix));
}

TEST(JSONPointer_starts_with, empty_empty) {
  const sourcemeta::jsontoolkit::Pointer pointer;
  const sourcemeta::jsontoolkit::Pointer prefix;
  EXPECT_TRUE(pointer.starts_with(prefix));
}
