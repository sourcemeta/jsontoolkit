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

TEST(JSONPointer_pointer, equality_empty) {
  const sourcemeta::jsontoolkit::Pointer pointer_1;
  const sourcemeta::jsontoolkit::Pointer pointer_2;
  EXPECT_EQ(pointer_1, pointer_2);
}

TEST(JSONPointer_pointer, equality_true) {
  const sourcemeta::jsontoolkit::Pointer pointer_1{"foo", 1, "bar"};
  const sourcemeta::jsontoolkit::Pointer pointer_2{"foo", 1, "bar"};
  EXPECT_EQ(pointer_1, pointer_2);
}

TEST(JSONPointer_pointer, equality_false) {
  const sourcemeta::jsontoolkit::Pointer pointer_1{"foo", 1, "bar"};
  const sourcemeta::jsontoolkit::Pointer pointer_2{"foo", 2, "bar"};
  EXPECT_FALSE(pointer_1 == pointer_2);
}

TEST(JSONPointer_pointer, pop_back_non_empty) {
  sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  pointer.pop_back();
  EXPECT_EQ(pointer.size(), 1);
  EXPECT_TRUE(pointer.at(0).is_property());
  EXPECT_EQ(pointer.at(0).to_property(), "foo");
}

TEST(JSONPointer_pointer, pop_back_empty) {
  sourcemeta::jsontoolkit::Pointer pointer;
  EXPECT_EQ(pointer.size(), 0);
  EXPECT_THROW(pointer.pop_back(), std::runtime_error);
}

TEST(JSONPointer_pointer, ordering_less_than) {
  const sourcemeta::jsontoolkit::Pointer pointer_1{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer pointer_2{"foo"};
  const sourcemeta::jsontoolkit::Pointer pointer_3{"baz"};
  EXPECT_TRUE(pointer_2 < pointer_1);
  EXPECT_TRUE(pointer_3 < pointer_1);
  EXPECT_TRUE(pointer_3 < pointer_2);
}

TEST(JSONPointer_pointer, pop_back_zero_empty) {
  sourcemeta::jsontoolkit::Pointer pointer{};
  pointer.pop_back(0);
  EXPECT_EQ(pointer.size(), 0);
}

TEST(JSONPointer_pointer, pop_back_many_subset) {
  sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar", "baz"};
  pointer.pop_back(2);
  EXPECT_EQ(pointer.size(), 1);
  EXPECT_TRUE(pointer.at(0).is_property());
  EXPECT_EQ(pointer.at(0).to_property(), "foo");
}

TEST(JSONPointer_pointer, pop_back_many_all) {
  sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar", "baz"};
  pointer.pop_back(3);
  EXPECT_EQ(pointer.size(), 0);
}

TEST(JSONPointer_pointer, push_back_pointer_copy) {
  sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer other{"baz", "qux"};
  pointer.push_back(other);
  EXPECT_EQ(pointer.size(), 4);
  EXPECT_TRUE(pointer.at(0).is_property());
  EXPECT_EQ(pointer.at(0).to_property(), "foo");
  EXPECT_TRUE(pointer.at(1).is_property());
  EXPECT_EQ(pointer.at(1).to_property(), "bar");
  EXPECT_TRUE(pointer.at(2).is_property());
  EXPECT_EQ(pointer.at(2).to_property(), "baz");
  EXPECT_TRUE(pointer.at(3).is_property());
  EXPECT_EQ(pointer.at(3).to_property(), "qux");
}

TEST(JSONPointer_pointer, push_back_pointer_move) {
  sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  sourcemeta::jsontoolkit::Pointer other{"baz", "qux"};
  pointer.push_back(std::move(other));
  EXPECT_EQ(pointer.size(), 4);
  EXPECT_TRUE(pointer.at(0).is_property());
  EXPECT_EQ(pointer.at(0).to_property(), "foo");
  EXPECT_TRUE(pointer.at(1).is_property());
  EXPECT_EQ(pointer.at(1).to_property(), "bar");
  EXPECT_TRUE(pointer.at(2).is_property());
  EXPECT_EQ(pointer.at(2).to_property(), "baz");
  EXPECT_TRUE(pointer.at(3).is_property());
  EXPECT_EQ(pointer.at(3).to_property(), "qux");
}

TEST(JSONPointer_pointer, initial_with_one_token) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo"};
  const sourcemeta::jsontoolkit::Pointer result{pointer.initial()};
  EXPECT_EQ(result.size(), 0);
}

TEST(JSONPointer_pointer, initial_with_two_tokens) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  const sourcemeta::jsontoolkit::Pointer result{pointer.initial()};
  EXPECT_EQ(result.size(), 1);
  EXPECT_TRUE(pointer.at(0).is_property());
  EXPECT_EQ(pointer.at(0).to_property(), "foo");
}

TEST(JSONPointer_pointer, initial_with_three_tokens) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar", "baz"};
  const sourcemeta::jsontoolkit::Pointer result{pointer.initial()};
  EXPECT_EQ(result.size(), 2);
  EXPECT_TRUE(pointer.at(0).is_property());
  EXPECT_EQ(pointer.at(0).to_property(), "foo");
  EXPECT_TRUE(pointer.at(1).is_property());
  EXPECT_EQ(pointer.at(1).to_property(), "bar");
}

TEST(JSONPointer_pointer, push_back_property_copy) {
  sourcemeta::jsontoolkit::Pointer pointer{"foo"};
  const sourcemeta::jsontoolkit::Pointer other{"bar"};
  pointer.push_back(other.back().to_property());
  EXPECT_EQ(pointer.size(), 2);
  EXPECT_TRUE(pointer.at(0).is_property());
  EXPECT_EQ(pointer.at(0).to_property(), "foo");
  EXPECT_TRUE(pointer.at(1).is_property());
  EXPECT_EQ(pointer.at(1).to_property(), "bar");
}

TEST(JSONPointer_pointer, push_back_property_move) {
  sourcemeta::jsontoolkit::Pointer pointer{"foo"};
  pointer.push_back("bar");
  EXPECT_EQ(pointer.size(), 2);
  EXPECT_TRUE(pointer.at(0).is_property());
  EXPECT_EQ(pointer.at(0).to_property(), "foo");
  EXPECT_TRUE(pointer.at(1).is_property());
  EXPECT_EQ(pointer.at(1).to_property(), "bar");
}

TEST(JSONPointer_pointer, push_back_index_copy) {
  sourcemeta::jsontoolkit::Pointer pointer{"foo"};
  const sourcemeta::jsontoolkit::Pointer other{0};
  pointer.push_back(other.back().to_index());
  EXPECT_EQ(pointer.size(), 2);
  EXPECT_TRUE(pointer.at(0).is_property());
  EXPECT_EQ(pointer.at(0).to_property(), "foo");
  EXPECT_TRUE(pointer.at(1).is_index());
  EXPECT_EQ(pointer.at(1).to_index(), 0);
}

TEST(JSONPointer_pointer, push_back_index_move) {
  sourcemeta::jsontoolkit::Pointer pointer{"foo"};
  pointer.push_back(0);
  EXPECT_EQ(pointer.size(), 2);
  EXPECT_TRUE(pointer.at(0).is_property());
  EXPECT_EQ(pointer.at(0).to_property(), "foo");
  EXPECT_TRUE(pointer.at(1).is_index());
  EXPECT_EQ(pointer.at(1).to_index(), 0);
}
