#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/jsonpointer.h>

TEST(JSONPointer_concat, multi_multi) {
  const sourcemeta::jsontoolkit::Pointer left{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer right{"baz", "qux"};
  const sourcemeta::jsontoolkit::Pointer result{"foo", "bar", "baz", "qux"};
  EXPECT_EQ(left.concat(right), result);
}

TEST(JSONPointer_concat, single_single) {
  const sourcemeta::jsontoolkit::Pointer left{"foo"};
  const sourcemeta::jsontoolkit::Pointer right{"bar"};
  const sourcemeta::jsontoolkit::Pointer result{"foo", "bar"};
  EXPECT_EQ(left.concat(right), result);
}

TEST(JSONPointer_concat, empty_multi) {
  const sourcemeta::jsontoolkit::Pointer left;
  const sourcemeta::jsontoolkit::Pointer right{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer result{"foo", "bar"};
  EXPECT_EQ(left.concat(right), result);
}

TEST(JSONPointer_concat, multi_empty) {
  const sourcemeta::jsontoolkit::Pointer left{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer right;
  const sourcemeta::jsontoolkit::Pointer result{"foo", "bar"};
  EXPECT_EQ(left.concat(right), result);
}

TEST(JSONPointer_concat, empty_empty) {
  const sourcemeta::jsontoolkit::Pointer left;
  const sourcemeta::jsontoolkit::Pointer right;
  const sourcemeta::jsontoolkit::Pointer result;
  EXPECT_EQ(left.concat(right), result);
}
