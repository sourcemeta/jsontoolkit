#include <gtest/gtest.h>

#include <sourcemeta/core/jsonpointer.h>

TEST(JSONPointer_starts_with_initial, property_prefix_true) {
  const sourcemeta::core::Pointer pointer{"foo", "bar"};
  const sourcemeta::core::Pointer prefix{"foo"};
  EXPECT_TRUE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, property_prefix_false) {
  const sourcemeta::core::Pointer pointer{"foo", "bar"};
  const sourcemeta::core::Pointer prefix{"bar"};
  EXPECT_TRUE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, index_prefix_false) {
  const sourcemeta::core::Pointer pointer{0, 1};
  const sourcemeta::core::Pointer prefix{1};
  EXPECT_TRUE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, property_same) {
  const sourcemeta::core::Pointer pointer{"foo", "bar"};
  const sourcemeta::core::Pointer prefix{"foo", "bar"};
  EXPECT_TRUE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, index_same) {
  const sourcemeta::core::Pointer pointer{0, 1};
  const sourcemeta::core::Pointer prefix{0, 1};
  EXPECT_TRUE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, property_different) {
  const sourcemeta::core::Pointer pointer{"foo", "bar"};
  const sourcemeta::core::Pointer prefix{"bar", "baz"};
  EXPECT_FALSE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, index_different) {
  const sourcemeta::core::Pointer pointer{0, 1};
  const sourcemeta::core::Pointer prefix{2, 3};
  EXPECT_FALSE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, non_empty_empty) {
  const sourcemeta::core::Pointer pointer{"foo"};
  const sourcemeta::core::Pointer prefix;
  EXPECT_TRUE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, empty_non_empty_1) {
  const sourcemeta::core::Pointer pointer;
  const sourcemeta::core::Pointer prefix{"foo"};
  EXPECT_TRUE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, empty_non_empty_3) {
  const sourcemeta::core::Pointer pointer;
  const sourcemeta::core::Pointer prefix{"foo", 1, "bar"};
  EXPECT_FALSE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, empty_empty) {
  const sourcemeta::core::Pointer pointer;
  const sourcemeta::core::Pointer prefix;
  EXPECT_TRUE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, initial_equal_true) {
  const sourcemeta::core::Pointer pointer{"foo", "bar"};
  const sourcemeta::core::Pointer prefix{"foo", "bar", "baz"};
  EXPECT_TRUE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, initial_equal_false) {
  const sourcemeta::core::Pointer pointer{"foo", "bar"};
  const sourcemeta::core::Pointer prefix{"foo", "qux", "baz"};
  EXPECT_FALSE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, initial_subset) {
  const sourcemeta::core::Pointer pointer{"foo", "bar", "qux"};
  const sourcemeta::core::Pointer prefix{"foo", "bar", "baz"};
  EXPECT_TRUE(pointer.starts_with_initial(prefix));
}
