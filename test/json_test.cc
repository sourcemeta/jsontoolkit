#include <gtest/gtest.h>
#include <jsontoolkit/json.h>

TEST(JSON, is_boolean_true) {
  const sourcemeta::jsontoolkit::JSON document{"true"};
  EXPECT_TRUE(document.is_boolean());
}

TEST(JSON, is_boolean_false) {
  const sourcemeta::jsontoolkit::JSON document{"false"};
  EXPECT_TRUE(document.is_boolean());
}

TEST(JSON, is_boolean_object) {
  const sourcemeta::jsontoolkit::JSON document{"{}"};
  EXPECT_FALSE(document.is_boolean());
}

TEST(JSON, is_object_true) {
  const sourcemeta::jsontoolkit::JSON document{"true"};
  EXPECT_FALSE(document.is_object());
}

TEST(JSON, is_object_empty_object) {
  const sourcemeta::jsontoolkit::JSON document{"{}"};
  EXPECT_TRUE(document.is_object());
}
