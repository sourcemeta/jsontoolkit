#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/jsonpointer.h>

TEST(JSONPointer_resolve_from, mismatch_base_shorter) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer base{"foo", "bar", "baz"};
  EXPECT_EQ(pointer.resolve_from(base), pointer);
}

TEST(JSONPointer_resolve_from, mismatch_pointer_empty) {
  const sourcemeta::jsontoolkit::Pointer pointer;
  const sourcemeta::jsontoolkit::Pointer base{"foo", "bar", "baz"};
  EXPECT_EQ(pointer.resolve_from(base), pointer);
}

TEST(JSONPointer_resolve_from, mismatch_base_empty) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer base;
  EXPECT_EQ(pointer.resolve_from(base), pointer);
}

TEST(JSONPointer_resolve_from, equal_empty) {
  const sourcemeta::jsontoolkit::Pointer pointer;
  const sourcemeta::jsontoolkit::Pointer base;
  EXPECT_EQ(pointer.resolve_from(base), pointer);
}

TEST(JSONPointer_resolve_from, equal_non_empty) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer base{"foo", "bar"};
  EXPECT_EQ(pointer.resolve_from(base), sourcemeta::jsontoolkit::Pointer{});
}

TEST(JSONPointer_resolve_from, match_1) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar", "baz", "qux"};
  const sourcemeta::jsontoolkit::Pointer base{"foo", "bar"};
  EXPECT_EQ(pointer.resolve_from(base),
            sourcemeta::jsontoolkit::Pointer({"baz", "qux"}));
}

TEST(JSONPointer_resolve_from, match_2) {
  const sourcemeta::jsontoolkit::Pointer pointer{0, 1, 2};
  const sourcemeta::jsontoolkit::Pointer base{0, 1};
  EXPECT_EQ(pointer.resolve_from(base), sourcemeta::jsontoolkit::Pointer({2}));
}
