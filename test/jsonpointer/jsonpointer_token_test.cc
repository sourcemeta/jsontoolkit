#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <type_traits>

TEST(JSONPointer_token, general_traits) {
  EXPECT_FALSE(std::is_default_constructible<
               sourcemeta::jsontoolkit::Pointer::Token>::value);
  EXPECT_FALSE(std::is_nothrow_default_constructible<
               sourcemeta::jsontoolkit::Pointer::Token>::value);
  EXPECT_TRUE(
      std::is_destructible<sourcemeta::jsontoolkit::Pointer::Token>::value);
  EXPECT_TRUE(std::is_nothrow_destructible<
              sourcemeta::jsontoolkit::Pointer::Token>::value);
}

TEST(JSONPointer_token, copy_traits) {
  EXPECT_TRUE(
      std::is_copy_assignable<sourcemeta::jsontoolkit::Pointer::Token>::value);
  EXPECT_TRUE(std::is_copy_constructible<
              sourcemeta::jsontoolkit::Pointer::Token>::value);
  EXPECT_FALSE(std::is_nothrow_copy_assignable<
               sourcemeta::jsontoolkit::Pointer::Token>::value);
  EXPECT_FALSE(std::is_nothrow_copy_constructible<
               sourcemeta::jsontoolkit::Pointer::Token>::value);
}

TEST(JSONPointer_token, move_traits) {
  EXPECT_TRUE(
      std::is_move_assignable<sourcemeta::jsontoolkit::Pointer::Token>::value);
  EXPECT_TRUE(std::is_move_constructible<
              sourcemeta::jsontoolkit::Pointer::Token>::value);
  EXPECT_TRUE(std::is_nothrow_move_assignable<
              sourcemeta::jsontoolkit::Pointer::Token>::value);
  EXPECT_TRUE(std::is_nothrow_move_constructible<
              sourcemeta::jsontoolkit::Pointer::Token>::value);
}

TEST(JSONPointer_token, character_token) {
  const sourcemeta::jsontoolkit::Pointer::Token token{'f'};
  EXPECT_TRUE(token.is_property());
  EXPECT_FALSE(token.is_index());
  EXPECT_FALSE(token.is_hyphen());
  EXPECT_EQ(token.to_property(), "f");
}

TEST(JSONPointer_token, string_token) {
  const sourcemeta::jsontoolkit::Pointer::Token token{"foo"};
  EXPECT_TRUE(token.is_property());
  EXPECT_FALSE(token.is_index());
  EXPECT_FALSE(token.is_hyphen());
  EXPECT_EQ(token.to_property(), "foo");
}

TEST(JSONPointer_token, integer_token) {
  const sourcemeta::jsontoolkit::Pointer::Token token{5};
  EXPECT_TRUE(token.is_index());
  EXPECT_FALSE(token.is_property());
  EXPECT_FALSE(token.is_hyphen());
  EXPECT_EQ(token.to_index(), 5);
}

TEST(JSONPointer_token, hyphen_string_token) {
  const sourcemeta::jsontoolkit::Pointer::Token token{"-"};
  EXPECT_FALSE(token.is_index());
  EXPECT_TRUE(token.is_hyphen());
}

TEST(JSONPointer_token, hyphen_char_token) {
  const sourcemeta::jsontoolkit::Pointer::Token token{'-'};
  EXPECT_FALSE(token.is_index());
  EXPECT_TRUE(token.is_hyphen());
}
