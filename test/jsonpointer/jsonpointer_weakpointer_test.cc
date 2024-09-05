#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <type_traits>

TEST(JSONWeakPointer_pointer, general_traits) {
  EXPECT_TRUE(std::is_default_constructible<
              sourcemeta::jsontoolkit::WeakPointer>::value);
  EXPECT_FALSE(std::is_nothrow_default_constructible<
               sourcemeta::jsontoolkit::WeakPointer>::value);
  EXPECT_TRUE(
      std::is_destructible<sourcemeta::jsontoolkit::WeakPointer>::value);
  EXPECT_TRUE(std::is_nothrow_destructible<
              sourcemeta::jsontoolkit::WeakPointer>::value);
}

TEST(JSONWeakPointer_pointer, copy_traits) {
  EXPECT_TRUE(
      std::is_copy_assignable<sourcemeta::jsontoolkit::WeakPointer>::value);
  EXPECT_TRUE(
      std::is_copy_constructible<sourcemeta::jsontoolkit::WeakPointer>::value);
  EXPECT_FALSE(std::is_nothrow_copy_assignable<
               sourcemeta::jsontoolkit::WeakPointer>::value);
  EXPECT_FALSE(std::is_nothrow_copy_constructible<
               sourcemeta::jsontoolkit::WeakPointer>::value);
}

TEST(JSONWeakPointer_pointer, move_traits) {
  EXPECT_TRUE(
      std::is_move_assignable<sourcemeta::jsontoolkit::WeakPointer>::value);
  EXPECT_TRUE(
      std::is_move_constructible<sourcemeta::jsontoolkit::WeakPointer>::value);
  EXPECT_TRUE(std::is_nothrow_move_assignable<
              sourcemeta::jsontoolkit::WeakPointer>::value);
  EXPECT_TRUE(std::is_nothrow_move_constructible<
              sourcemeta::jsontoolkit::WeakPointer>::value);
}

TEST(JSONWeakPointer_pointer, empty) {
  const sourcemeta::jsontoolkit::WeakPointer pointer;
  EXPECT_EQ(pointer.size(), 0);
  EXPECT_TRUE(pointer.empty());
}

TEST(JSONWeakPointer_pointer, store_a_const_ref) {
  const std::string str = "foo";
  const sourcemeta::jsontoolkit::WeakPointer pointer{std::cref(str)};

  EXPECT_EQ(pointer.size(), 1);
  EXPECT_FALSE(pointer.empty());
  EXPECT_TRUE(pointer.at(0).is_property());
  EXPECT_EQ(pointer.at(0).to_property().get(), "foo");
}
