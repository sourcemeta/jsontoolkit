#include <gtest/gtest.h>

#include <sourcemeta/core/jsonpointer.h>

TEST(JSONPointer_template, equality_without_wildcard_true) {
  const sourcemeta::core::Pointer pointer{"foo", "bar"};
  const sourcemeta::core::PointerTemplate left{pointer};
  const sourcemeta::core::PointerTemplate right{pointer};

  EXPECT_EQ(left, right);
}

TEST(JSONPointer_template, equality_without_wildcard_false) {
  const sourcemeta::core::Pointer pointer_left{"foo", "bar"};
  const sourcemeta::core::Pointer pointer_right{"foo", "baz"};
  const sourcemeta::core::PointerTemplate left{pointer_left};
  const sourcemeta::core::PointerTemplate right{pointer_right};

  EXPECT_NE(left, right);
}

TEST(JSONPointer_template, equality_with_property_wildcard_true) {
  const sourcemeta::core::Pointer prefix{"foo", "bar"};
  const sourcemeta::core::Pointer suffix{"baz"};

  sourcemeta::core::PointerTemplate left{prefix};
  left.emplace_back(sourcemeta::core::PointerTemplate::Wildcard::Property);
  left.push_back(suffix);

  sourcemeta::core::PointerTemplate right{prefix};
  right.emplace_back(sourcemeta::core::PointerTemplate::Wildcard::Property);
  right.push_back(suffix);

  EXPECT_EQ(left, right);
}

TEST(JSONPointer_template, equality_with_property_wildcard_false) {
  const sourcemeta::core::Pointer prefix{"foo", "bar"};
  const sourcemeta::core::Pointer suffix{"baz"};

  sourcemeta::core::PointerTemplate left{prefix};
  left.emplace_back(sourcemeta::core::PointerTemplate::Wildcard::Property);
  left.push_back(suffix);

  sourcemeta::core::PointerTemplate right{prefix};
  right.push_back(suffix);
  right.emplace_back(sourcemeta::core::PointerTemplate::Wildcard::Property);

  EXPECT_NE(left, right);
}

TEST(JSONPointer_template, equality_with_regex_wildcard_true) {
  const sourcemeta::core::Pointer prefix{"foo", "bar"};
  const sourcemeta::core::Pointer suffix{"baz"};

  sourcemeta::core::PointerTemplate left{prefix};
  left.emplace_back(sourcemeta::core::PointerTemplate::Regex{"^@"});
  left.push_back(suffix);

  sourcemeta::core::PointerTemplate right{prefix};
  right.emplace_back(sourcemeta::core::PointerTemplate::Regex{"^@"});
  right.push_back(suffix);

  EXPECT_EQ(left, right);
}

TEST(JSONPointer_template, equality_with_regex_wildcard_false) {
  const sourcemeta::core::Pointer prefix{"foo", "bar"};
  const sourcemeta::core::Pointer suffix{"baz"};

  sourcemeta::core::PointerTemplate left{prefix};
  left.emplace_back(sourcemeta::core::PointerTemplate::Regex{"^@"});
  left.push_back(suffix);

  sourcemeta::core::PointerTemplate right{prefix};
  right.push_back(suffix);
  right.emplace_back(sourcemeta::core::PointerTemplate::Regex{"^@"});

  EXPECT_NE(left, right);
}

TEST(JSONPointer_template, equality_with_item_wildcard_true) {
  const sourcemeta::core::Pointer prefix{"foo", "bar"};
  const sourcemeta::core::Pointer suffix{"baz"};

  sourcemeta::core::PointerTemplate left{prefix};
  left.emplace_back(sourcemeta::core::PointerTemplate::Wildcard::Item);
  left.push_back(suffix);

  sourcemeta::core::PointerTemplate right{prefix};
  right.emplace_back(sourcemeta::core::PointerTemplate::Wildcard::Item);
  right.push_back(suffix);

  EXPECT_EQ(left, right);
}

TEST(JSONPointer_template, equality_with_item_wildcard_false) {
  const sourcemeta::core::Pointer prefix{"foo", "bar"};
  const sourcemeta::core::Pointer suffix{"baz"};

  sourcemeta::core::PointerTemplate left{prefix};
  left.emplace_back(sourcemeta::core::PointerTemplate::Wildcard::Item);
  left.push_back(suffix);

  sourcemeta::core::PointerTemplate right{prefix};
  right.push_back(suffix);
  right.emplace_back(sourcemeta::core::PointerTemplate::Wildcard::Item);

  EXPECT_NE(left, right);
}

TEST(JSONPointer_template, equality_with_key_wildcard_true) {
  const sourcemeta::core::Pointer prefix{"foo", "bar"};

  sourcemeta::core::PointerTemplate left{prefix};
  left.emplace_back(sourcemeta::core::PointerTemplate::Wildcard::Key);

  sourcemeta::core::PointerTemplate right{prefix};
  right.emplace_back(sourcemeta::core::PointerTemplate::Wildcard::Key);

  EXPECT_EQ(left, right);
}

TEST(JSONPointer_template, equality_with_key_wildcard_false) {
  const sourcemeta::core::Pointer prefix_1{"foo"};
  const sourcemeta::core::Pointer prefix_2{"bar"};

  sourcemeta::core::PointerTemplate left{prefix_1};
  left.emplace_back(sourcemeta::core::PointerTemplate::Wildcard::Key);

  sourcemeta::core::PointerTemplate right{prefix_2};
  right.emplace_back(sourcemeta::core::PointerTemplate::Wildcard::Key);

  EXPECT_NE(left, right);
}

TEST(JSONPointer_template, stringify_multiple_property_wildcards) {
  const sourcemeta::core::Pointer prefix{"foo", "bar"};
  const sourcemeta::core::Pointer suffix{"baz"};

  sourcemeta::core::PointerTemplate pointer{prefix};
  pointer.emplace_back(sourcemeta::core::PointerTemplate::Wildcard::Property);
  pointer.push_back(suffix);
  pointer.emplace_back(sourcemeta::core::PointerTemplate::Wildcard::Property);

  std::ostringstream stream;
  sourcemeta::core::stringify(pointer, stream);

  EXPECT_EQ(stream.str(), "/foo/bar/~P~/baz/~P~");
}

TEST(JSONPointer_template, stringify_multiple_regex_wildcards) {
  const sourcemeta::core::Pointer prefix{"foo", "bar"};
  const sourcemeta::core::Pointer suffix{"baz"};

  sourcemeta::core::PointerTemplate pointer{prefix};
  pointer.emplace_back(sourcemeta::core::PointerTemplate::Regex{"^@"});
  pointer.push_back(suffix);
  pointer.emplace_back(sourcemeta::core::PointerTemplate::Regex{"[0-9]+"});

  std::ostringstream stream;
  sourcemeta::core::stringify(pointer, stream);

  EXPECT_EQ(stream.str(), "/foo/bar/~R^@~/baz/~R[0-9]+~");
}

TEST(JSONPointer_template, stringify_multiple_item_wildcards) {
  const sourcemeta::core::Pointer prefix{"foo", "bar"};
  const sourcemeta::core::Pointer suffix{"baz"};

  sourcemeta::core::PointerTemplate pointer{prefix};
  pointer.emplace_back(sourcemeta::core::PointerTemplate::Wildcard::Item);
  pointer.push_back(suffix);
  pointer.emplace_back(sourcemeta::core::PointerTemplate::Wildcard::Item);

  std::ostringstream stream;
  sourcemeta::core::stringify(pointer, stream);

  EXPECT_EQ(stream.str(), "/foo/bar/~I~/baz/~I~");
}

TEST(JSONPointer_template, stringify_key_wildcard) {
  const sourcemeta::core::Pointer prefix{"foo", "bar"};

  sourcemeta::core::PointerTemplate pointer{prefix};
  pointer.emplace_back(sourcemeta::core::PointerTemplate::Wildcard::Key);

  std::ostringstream stream;
  sourcemeta::core::stringify(pointer, stream);

  EXPECT_EQ(stream.str(), "/foo/bar/~K~");
}
