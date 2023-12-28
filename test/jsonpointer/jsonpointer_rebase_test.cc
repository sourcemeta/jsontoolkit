#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/jsonpointer.h>

TEST(JSONPointer_rebase, first_property_for_one) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer prefix{"foo"};
  const sourcemeta::jsontoolkit::Pointer replacement{"baz"};
  const sourcemeta::jsontoolkit::Pointer expected{"baz", "bar"};
  EXPECT_EQ(pointer.rebase(prefix, replacement), expected);
}

TEST(JSONPointer_rebase, first_property_for_two) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer prefix{"foo"};
  const sourcemeta::jsontoolkit::Pointer replacement{"baz", "qux"};
  const sourcemeta::jsontoolkit::Pointer expected{"baz", "qux", "bar"};
  EXPECT_EQ(pointer.rebase(prefix, replacement), expected);
}

TEST(JSONPointer_rebase, first_property_for_empty) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer prefix{"foo"};
  const sourcemeta::jsontoolkit::Pointer replacement;
  const sourcemeta::jsontoolkit::Pointer expected{"bar"};
  EXPECT_EQ(pointer.rebase(prefix, replacement), expected);
}

TEST(JSONPointer_rebase, empty_for_single_property) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer prefix;
  const sourcemeta::jsontoolkit::Pointer replacement{"baz"};
  const sourcemeta::jsontoolkit::Pointer expected{"baz", "foo", "bar"};
  EXPECT_EQ(pointer.rebase(prefix, replacement), expected);
}

TEST(JSONPointer_rebase, empty_for_multi_property) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer prefix;
  const sourcemeta::jsontoolkit::Pointer replacement{"baz", "qux"};
  const sourcemeta::jsontoolkit::Pointer expected{"baz", "qux", "foo", "bar"};
  EXPECT_EQ(pointer.rebase(prefix, replacement), expected);
}

TEST(JSONPointer_rebase, prefix_equal_pointer) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer prefix{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer replacement{"baz", "qux"};
  const sourcemeta::jsontoolkit::Pointer expected{"baz", "qux"};
  EXPECT_EQ(pointer.rebase(prefix, replacement), expected);
}

TEST(JSONPointer_rebase, empty_replacement) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar", "baz"};
  const sourcemeta::jsontoolkit::Pointer prefix{"foo"};
  const sourcemeta::jsontoolkit::Pointer replacement;
  const sourcemeta::jsontoolkit::Pointer expected{"bar", "baz"};
  EXPECT_EQ(pointer.rebase(prefix, replacement), expected);
}

TEST(JSONPointer_rebase, empty_empty_empty) {
  const sourcemeta::jsontoolkit::Pointer pointer;
  const sourcemeta::jsontoolkit::Pointer prefix;
  const sourcemeta::jsontoolkit::Pointer replacement;
  const sourcemeta::jsontoolkit::Pointer expected;
  EXPECT_EQ(pointer.rebase(prefix, replacement), expected);
}

TEST(JSONPointer_rebase, no_prefix_match_1) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer prefix{"bar"};
  const sourcemeta::jsontoolkit::Pointer replacement{"baz"};
  const sourcemeta::jsontoolkit::Pointer expected{"foo", "bar"};
  EXPECT_EQ(pointer.rebase(prefix, replacement), expected);
}
