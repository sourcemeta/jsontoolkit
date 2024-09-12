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

TEST(JSONWeakPointer_to_string, empty) {
  const sourcemeta::jsontoolkit::WeakPointer pointer;
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(pointer), "");
}

TEST(JSONWeakPointer_to_string, empty_property) {
  const std::string empty = "";
  const sourcemeta::jsontoolkit::WeakPointer pointer{std::cref(empty)};
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(pointer), "/");
}

TEST(JSONWeakPointer_to_string, foo_bar_baz) {
  const std::string foo = "foo";
  const std::string bar = "bar";
  const std::string baz = "baz";
  const sourcemeta::jsontoolkit::WeakPointer pointer{
      std::cref(foo), std::cref(bar), std::cref(baz)};
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(pointer), "/foo/bar/baz");
}

TEST(JSONWeakPointer_to_string, foo_1_2) {
  const std::string foo = "foo";
  const sourcemeta::jsontoolkit::WeakPointer pointer{std::cref(foo), 1, 2};
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(pointer), "/foo/1/2");
}
