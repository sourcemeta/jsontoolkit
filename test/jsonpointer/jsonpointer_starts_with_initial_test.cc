#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/jsonpointer.h>

TEST(JSONPointer_starts_with_initial, property_prefix_true) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer prefix{"foo"};
  EXPECT_TRUE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, property_prefix_false) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer prefix{"bar"};
  EXPECT_TRUE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, index_prefix_false) {
  const sourcemeta::jsontoolkit::Pointer pointer{0, 1};
  const sourcemeta::jsontoolkit::Pointer prefix{1};
  EXPECT_TRUE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, property_same) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer prefix{"foo", "bar"};
  EXPECT_TRUE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, index_same) {
  const sourcemeta::jsontoolkit::Pointer pointer{0, 1};
  const sourcemeta::jsontoolkit::Pointer prefix{0, 1};
  EXPECT_TRUE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, property_different) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer prefix{"bar", "baz"};
  EXPECT_FALSE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, index_different) {
  const sourcemeta::jsontoolkit::Pointer pointer{0, 1};
  const sourcemeta::jsontoolkit::Pointer prefix{2, 3};
  EXPECT_FALSE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, non_empty_empty) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo"};
  const sourcemeta::jsontoolkit::Pointer prefix;
  EXPECT_TRUE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, empty_non_empty_1) {
  const sourcemeta::jsontoolkit::Pointer pointer;
  const sourcemeta::jsontoolkit::Pointer prefix{"foo"};
  EXPECT_TRUE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, empty_non_empty_3) {
  const sourcemeta::jsontoolkit::Pointer pointer;
  const sourcemeta::jsontoolkit::Pointer prefix{"foo", 1, "bar"};
  EXPECT_FALSE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, empty_empty) {
  const sourcemeta::jsontoolkit::Pointer pointer;
  const sourcemeta::jsontoolkit::Pointer prefix;
  EXPECT_TRUE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, initial_equal_true) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer prefix{"foo", "bar", "baz"};
  EXPECT_TRUE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, initial_equal_false) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer prefix{"foo", "qux", "baz"};
  EXPECT_FALSE(pointer.starts_with_initial(prefix));
}

TEST(JSONPointer_starts_with_initial, initial_subset) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar", "qux"};
  const sourcemeta::jsontoolkit::Pointer prefix{"foo", "bar", "baz"};
  EXPECT_TRUE(pointer.starts_with_initial(prefix));
}
