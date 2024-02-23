#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>

TEST(JSON_integer, positive) {
  const sourcemeta::jsontoolkit::JSON document{10};
  EXPECT_TRUE(document.is_integer());
  EXPECT_EQ(document.to_integer(), 10);
}

TEST(JSON_integer, type) {
  const sourcemeta::jsontoolkit::JSON document{5};
  EXPECT_EQ(document.type(), sourcemeta::jsontoolkit::JSON::Type::Integer);
}

TEST(JSON_integer, negative) {
  const sourcemeta::jsontoolkit::JSON document{-10};
  EXPECT_TRUE(document.is_integer());
  EXPECT_EQ(document.to_integer(), -10);
}

TEST(JSON_integer, zero) {
  const sourcemeta::jsontoolkit::JSON document{0};
  EXPECT_TRUE(document.is_integer());
  EXPECT_EQ(document.to_integer(), 0);
}

// We have seen GCC getting confused about this one,
// creating an array with a single integer item instead.
TEST(JSON_integer, copy_constructor) {
  const sourcemeta::jsontoolkit::JSON integer{5};
  const sourcemeta::jsontoolkit::JSON document{integer};
  EXPECT_TRUE(document.is_integer());
  EXPECT_EQ(document.to_integer(), 5);
}

TEST(JSON_integer, estimated_byte_size_5) {
  const sourcemeta::jsontoolkit::JSON document{5};
  EXPECT_EQ(document.estimated_byte_size(), 8);
}

TEST(JSON_integer, estimated_byte_size_minus_5) {
  const sourcemeta::jsontoolkit::JSON document{-5};
  EXPECT_EQ(document.estimated_byte_size(), 8);
}

TEST(JSON_integer, estimated_byte_size_0) {
  const sourcemeta::jsontoolkit::JSON document{0};
  EXPECT_EQ(document.estimated_byte_size(), 8);
}

TEST(JSON_integer, estimated_byte_size_1234567) {
  const sourcemeta::jsontoolkit::JSON document{1234567};
  EXPECT_EQ(document.estimated_byte_size(), 8);
}
