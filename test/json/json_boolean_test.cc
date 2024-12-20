#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>

TEST(JSON_boolean, true_value) {
  const sourcemeta::jsontoolkit::JSON document{true};
  EXPECT_TRUE(document.is_boolean());
  EXPECT_TRUE(document.to_boolean());
}

TEST(JSON_boolean, false_value) {
  const sourcemeta::jsontoolkit::JSON document{false};
  EXPECT_TRUE(document.is_boolean());
  EXPECT_FALSE(document.to_boolean());
}

TEST(JSON_boolean, type_false) {
  const sourcemeta::jsontoolkit::JSON document{false};
  EXPECT_EQ(document.type(), sourcemeta::jsontoolkit::JSON::Type::Boolean);
}

TEST(JSON_boolean, type_true) {
  const sourcemeta::jsontoolkit::JSON document{true};
  EXPECT_EQ(document.type(), sourcemeta::jsontoolkit::JSON::Type::Boolean);
}

TEST(JSON_boolean, literal_equality_false) {
  const sourcemeta::jsontoolkit::JSON left{false};
  const sourcemeta::jsontoolkit::JSON right{false};
  const sourcemeta::jsontoolkit::JSON extra{true};
  EXPECT_EQ(left, left);
  EXPECT_EQ(right, right);
  EXPECT_EQ(left, right);
  EXPECT_EQ(right, left);
  EXPECT_FALSE(left == extra);
  EXPECT_FALSE(right == extra);
}

TEST(JSON_boolean, literal_equality_true) {
  const sourcemeta::jsontoolkit::JSON left{true};
  const sourcemeta::jsontoolkit::JSON right{true};
  const sourcemeta::jsontoolkit::JSON extra{false};
  EXPECT_EQ(left, left);
  EXPECT_EQ(right, right);
  EXPECT_EQ(left, right);
  EXPECT_EQ(right, left);
  EXPECT_FALSE(left == extra);
  EXPECT_FALSE(right == extra);
}

TEST(JSON_boolean, estimated_byte_size_false) {
  const sourcemeta::jsontoolkit::JSON document{false};
  EXPECT_EQ(document.estimated_byte_size(), 1);
}

TEST(JSON_boolean, estimated_byte_size_true) {
  const sourcemeta::jsontoolkit::JSON document{true};
  EXPECT_EQ(document.estimated_byte_size(), 1);
}

TEST(JSON_boolean, fast_hash_false) {
  const sourcemeta::jsontoolkit::JSON document{false};
  EXPECT_EQ(document.fast_hash(), 0);
}

TEST(JSON_boolean, fast_hash_true) {
  const sourcemeta::jsontoolkit::JSON document{true};
  EXPECT_EQ(document.fast_hash(), 1);
}
