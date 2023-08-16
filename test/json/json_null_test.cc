#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>

TEST(JSON_null, nullptr_value) {
  const sourcemeta::jsontoolkit::JSON document{nullptr};
  EXPECT_TRUE(document.is_null());
}

TEST(JSON_null, type) {
  const sourcemeta::jsontoolkit::JSON document{nullptr};
  EXPECT_EQ(document.type(), sourcemeta::jsontoolkit::JSON::Type::Null);
}

TEST(JSON_null, literal_equality) {
  const sourcemeta::jsontoolkit::JSON left{nullptr};
  const sourcemeta::jsontoolkit::JSON right{false};
  EXPECT_EQ(left, left);
  EXPECT_FALSE(left == right);
  EXPECT_FALSE(right == left);
}
