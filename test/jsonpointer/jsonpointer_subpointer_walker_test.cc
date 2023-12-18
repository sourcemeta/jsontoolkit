#include <gtest/gtest.h>
#include <memory>
#include <string>
#include <vector>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>

TEST(JSONPointer_subpointer_walker, equality_null_subpointer_iterators) {
  const sourcemeta::jsontoolkit::SubPointerWalker::const_iterator first{
      nullptr};
  const sourcemeta::jsontoolkit::SubPointerWalker::const_iterator second{
      nullptr};
  EXPECT_EQ(first, second);
  EXPECT_EQ(second, first);
  EXPECT_FALSE(first != second);
  EXPECT_FALSE(second != first);
}

TEST(JSONPointer_subpointer_walker,
     equality_null_and_not_null_subpointer_iterators) {
  sourcemeta::jsontoolkit::Pointer pointer;
  const sourcemeta::jsontoolkit::SubPointerWalker::const_iterator first{
      &pointer};
  const sourcemeta::jsontoolkit::SubPointerWalker::const_iterator second{
      nullptr};
  EXPECT_FALSE(first == second);
  EXPECT_FALSE(second == first);
  EXPECT_TRUE(first != second);
  EXPECT_TRUE(second != first);
}

TEST(JSONPointer_subpointer_walker, equality_same_subpointer_iterators) {
  sourcemeta::jsontoolkit::Pointer pointer_1;
  sourcemeta::jsontoolkit::Pointer pointer_2;
  const sourcemeta::jsontoolkit::SubPointerWalker::const_iterator first{
      &pointer_1};
  const sourcemeta::jsontoolkit::SubPointerWalker::const_iterator second{
      &pointer_2};
  EXPECT_EQ(first, second);
  EXPECT_EQ(second, first);
  EXPECT_FALSE(first != second);
  EXPECT_FALSE(second != first);
}

TEST(JSONPointer_subpointer_walker, equality_different_subpointer_iterators) {
  sourcemeta::jsontoolkit::Pointer pointer_1{"foo"};
  sourcemeta::jsontoolkit::Pointer pointer_2{"bar"};
  const sourcemeta::jsontoolkit::SubPointerWalker::const_iterator first{
      &pointer_1};
  const sourcemeta::jsontoolkit::SubPointerWalker::const_iterator second{
      &pointer_2};
  EXPECT_FALSE(first == second);
  EXPECT_FALSE(second == first);
  EXPECT_TRUE(first != second);
  EXPECT_TRUE(second != first);
}

TEST(JSONPointer_subpointer_walker, subpointer_walker) {
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar", "baz"};
  std::vector<sourcemeta::jsontoolkit::Pointer> subpointers;
  for (const auto &subpointer :
       sourcemeta::jsontoolkit::SubPointerWalker{pointer}) {
    subpointers.push_back(subpointer);
  }

  EXPECT_EQ(subpointers.size(), 4);

  // First subpointer
  EXPECT_EQ(subpointers.at(0).size(), 3);
  EXPECT_TRUE(subpointers.at(0).at(0).is_property());
  EXPECT_TRUE(subpointers.at(0).at(1).is_property());
  EXPECT_TRUE(subpointers.at(0).at(2).is_property());
  EXPECT_EQ(subpointers.at(0).at(0).to_property(), "foo");
  EXPECT_EQ(subpointers.at(0).at(1).to_property(), "bar");
  EXPECT_EQ(subpointers.at(0).at(2).to_property(), "baz");

  // Second subpointer
  EXPECT_EQ(subpointers.at(1).size(), 2);
  EXPECT_TRUE(subpointers.at(1).at(0).is_property());
  EXPECT_TRUE(subpointers.at(1).at(1).is_property());
  EXPECT_EQ(subpointers.at(1).at(0).to_property(), "foo");
  EXPECT_EQ(subpointers.at(1).at(1).to_property(), "bar");

  // Third subpointer
  EXPECT_EQ(subpointers.at(2).size(), 1);
  EXPECT_TRUE(subpointers.at(2).at(0).is_property());
  EXPECT_EQ(subpointers.at(2).at(0).to_property(), "foo");

  // Fourth subpointer
  EXPECT_EQ(subpointers.at(3).size(), 0);
  EXPECT_TRUE(subpointers.at(3).empty());

  // Original remains intact
  EXPECT_EQ(pointer.size(), 3);
  EXPECT_TRUE(pointer.at(0).is_property());
  EXPECT_TRUE(pointer.at(1).is_property());
  EXPECT_TRUE(pointer.at(2).is_property());
  EXPECT_EQ(pointer.at(0).to_property(), "foo");
  EXPECT_EQ(pointer.at(1).to_property(), "bar");
  EXPECT_EQ(pointer.at(2).to_property(), "baz");
}
