#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <type_traits>

TEST(JSONPointer_pointer, general_traits) {
  EXPECT_TRUE(
      std::is_default_constructible<sourcemeta::jsontoolkit::Pointer>::value);
  EXPECT_FALSE(std::is_nothrow_default_constructible<
               sourcemeta::jsontoolkit::Pointer>::value);
  EXPECT_TRUE(std::is_destructible<sourcemeta::jsontoolkit::Pointer>::value);
  EXPECT_TRUE(
      std::is_nothrow_destructible<sourcemeta::jsontoolkit::Pointer>::value);
}

TEST(JSONPointer_pointer, copy_traits) {
  EXPECT_TRUE(std::is_copy_assignable<sourcemeta::jsontoolkit::Pointer>::value);
  EXPECT_TRUE(
      std::is_copy_constructible<sourcemeta::jsontoolkit::Pointer>::value);
  EXPECT_FALSE(
      std::is_nothrow_copy_assignable<sourcemeta::jsontoolkit::Pointer>::value);
  EXPECT_FALSE(std::is_nothrow_copy_constructible<
               sourcemeta::jsontoolkit::Pointer>::value);
}

TEST(JSONPointer_pointer, move_traits) {
  EXPECT_TRUE(std::is_move_assignable<sourcemeta::jsontoolkit::Pointer>::value);
  EXPECT_TRUE(
      std::is_move_constructible<sourcemeta::jsontoolkit::Pointer>::value);
  EXPECT_TRUE(
      std::is_nothrow_move_assignable<sourcemeta::jsontoolkit::Pointer>::value);
  EXPECT_TRUE(std::is_nothrow_move_constructible<
              sourcemeta::jsontoolkit::Pointer>::value);
}

TEST(JSONPointer_pointer, empty) {
  const sourcemeta::jsontoolkit::Pointer pointer;
  EXPECT_EQ(pointer.size(), 0);
  EXPECT_TRUE(pointer.empty());
}

TEST(JSONPointer_pointer, one_fragment_property) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo"};
  EXPECT_EQ(pointer.size(), 1);
  EXPECT_FALSE(pointer.empty());
  EXPECT_TRUE(pointer.at(0).is_property());
  EXPECT_EQ(pointer.at(0).to_property(), "foo");
}

TEST(JSONPointer_pointer, one_fragment_back) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo"};
  EXPECT_EQ(pointer.size(), 1);
  EXPECT_TRUE(pointer.back().is_property());
  EXPECT_EQ(pointer.back().to_property(), "foo");
}

TEST(JSONPointer_pointer, one_fragment_index) {
  const sourcemeta::jsontoolkit::Pointer pointer{0};
  EXPECT_EQ(pointer.size(), 1);
  EXPECT_FALSE(pointer.empty());
  EXPECT_TRUE(pointer.at(0).is_index());
  EXPECT_EQ(pointer.at(0).to_index(), 0);
}

TEST(JSONPointer_pointer, multiple_fragments_mixed) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", 1, "bar"};
  EXPECT_EQ(pointer.size(), 3);
  EXPECT_FALSE(pointer.empty());
  EXPECT_TRUE(pointer.at(0).is_property());
  EXPECT_TRUE(pointer.at(1).is_index());
  EXPECT_TRUE(pointer.at(2).is_property());
  EXPECT_EQ(pointer.at(0).to_property(), "foo");
  EXPECT_EQ(pointer.at(1).to_index(), 1);
  EXPECT_EQ(pointer.at(2).to_property(), "bar");
}

TEST(JSONPointer_pointer, multiple_fragments_back) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", 1, "bar"};
  EXPECT_EQ(pointer.size(), 3);
  EXPECT_TRUE(pointer.back().is_property());
  EXPECT_EQ(pointer.back().to_property(), "bar");
}

TEST(JSONPointer_pointer, build_with_emplace_back) {
  sourcemeta::jsontoolkit::Pointer pointer;
  EXPECT_EQ(pointer.size(), 0);

  auto &result_1{pointer.emplace_back("foo")};
  EXPECT_TRUE(result_1.is_property());
  EXPECT_EQ(result_1.to_property(), "foo");

  auto &result_2{pointer.emplace_back(1)};
  EXPECT_TRUE(result_2.is_index());
  EXPECT_EQ(result_2.to_index(), 1);

  EXPECT_EQ(pointer.size(), 2);
  EXPECT_TRUE(pointer.at(0).is_property());
  EXPECT_TRUE(pointer.at(1).is_index());
  EXPECT_EQ(pointer.at(0).to_property(), "foo");
  EXPECT_EQ(pointer.at(1).to_index(), 1);
}
