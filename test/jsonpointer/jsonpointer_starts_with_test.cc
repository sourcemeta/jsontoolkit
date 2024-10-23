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

TEST(JSONPointer_starts_with, tail_equal_initial) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar", "baz"};
  const sourcemeta::jsontoolkit::Pointer::Token tail{"qux"};
  const sourcemeta::jsontoolkit::Pointer prefix{"foo", "bar", "baz"};
  EXPECT_TRUE(pointer.starts_with(prefix, tail));
}

TEST(JSONPointer_starts_with, tail_subset_initial_true) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar", "baz"};
  const sourcemeta::jsontoolkit::Pointer::Token tail{"qux"};
  const sourcemeta::jsontoolkit::Pointer prefix{"foo", "bar"};
  EXPECT_TRUE(pointer.starts_with(prefix, tail));
}

TEST(JSONPointer_starts_with, tail_subset_initial_false) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar", "baz"};
  const sourcemeta::jsontoolkit::Pointer::Token tail{"qux"};
  const sourcemeta::jsontoolkit::Pointer prefix{"foo", "qux"};
  EXPECT_FALSE(pointer.starts_with(prefix, tail));
}

TEST(JSONPointer_starts_with, tail_equal_initial_plus_tail_true) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar", "baz"};
  const sourcemeta::jsontoolkit::Pointer::Token tail{"qux"};
  const sourcemeta::jsontoolkit::Pointer prefix{"foo", "bar", "baz", "qux"};
  EXPECT_TRUE(pointer.starts_with(prefix, tail));
}

TEST(JSONPointer_starts_with, tail_equal_initial_plus_tail_false) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar", "baz"};
  const sourcemeta::jsontoolkit::Pointer::Token tail{"qux"};
  const sourcemeta::jsontoolkit::Pointer prefix{"foo", "bar", "baz", "xxx"};
  EXPECT_FALSE(pointer.starts_with(prefix, tail));
}

TEST(JSONPointer_starts_with, tail_equal_tail) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar", "baz"};
  const sourcemeta::jsontoolkit::Pointer::Token tail{"qux"};
  const sourcemeta::jsontoolkit::Pointer prefix{"qux"};
  EXPECT_FALSE(pointer.starts_with(prefix, tail));
}

TEST(JSONPointer_starts_with, tail_empty_initial_true) {
  const sourcemeta::jsontoolkit::Pointer pointer;
  const sourcemeta::jsontoolkit::Pointer::Token tail{"qux"};
  const sourcemeta::jsontoolkit::Pointer prefix{"qux"};
  EXPECT_TRUE(pointer.starts_with(prefix, tail));
}

TEST(JSONPointer_starts_with, tail_empty_initial_false) {
  const sourcemeta::jsontoolkit::Pointer pointer;
  const sourcemeta::jsontoolkit::Pointer::Token tail{"qux"};
  const sourcemeta::jsontoolkit::Pointer prefix{"bar"};
  EXPECT_FALSE(pointer.starts_with(prefix, tail));
}

TEST(JSONPointer_starts_with, tail_empty_prefix) {
  const sourcemeta::jsontoolkit::Pointer pointer;
  const sourcemeta::jsontoolkit::Pointer::Token tail{"qux"};
  const sourcemeta::jsontoolkit::Pointer prefix;
  EXPECT_TRUE(pointer.starts_with(prefix, tail));
}
