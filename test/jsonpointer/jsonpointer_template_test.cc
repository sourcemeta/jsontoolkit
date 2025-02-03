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

TEST(JSONPointer_template, equality_with_wildcard_true) {
  const sourcemeta::core::Pointer prefix{"foo", "bar"};
  const sourcemeta::core::Pointer suffix{"baz"};

  sourcemeta::core::PointerTemplate left{prefix};
  left.emplace_back(sourcemeta::core::PointerTemplate::Wildcard{});
  left.push_back(suffix);

  sourcemeta::core::PointerTemplate right{prefix};
  right.emplace_back(sourcemeta::core::PointerTemplate::Wildcard{});
  right.push_back(suffix);

  EXPECT_EQ(left, right);
}

TEST(JSONPointer_template, equality_with_wildcard_false) {
  const sourcemeta::core::Pointer prefix{"foo", "bar"};
  const sourcemeta::core::Pointer suffix{"baz"};

  sourcemeta::core::PointerTemplate left{prefix};
  left.emplace_back(sourcemeta::core::PointerTemplate::Wildcard{});
  left.push_back(suffix);

  sourcemeta::core::PointerTemplate right{prefix};
  right.push_back(suffix);
  right.emplace_back(sourcemeta::core::PointerTemplate::Wildcard{});

  EXPECT_NE(left, right);
}

TEST(JSONPointer_template, stringify_multiple_wildcards) {
  const sourcemeta::core::Pointer prefix{"foo", "bar"};
  const sourcemeta::core::Pointer suffix{"baz"};

  sourcemeta::core::PointerTemplate pointer{prefix};
  pointer.emplace_back(sourcemeta::core::PointerTemplate::Wildcard{});
  pointer.push_back(suffix);
  pointer.emplace_back(sourcemeta::core::PointerTemplate::Wildcard{});

  std::ostringstream stream;
  sourcemeta::core::stringify(pointer, stream);

  EXPECT_EQ(stream.str(), "/foo/bar/~/baz/~");
}
