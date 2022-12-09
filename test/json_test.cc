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

TEST(JSON, is_object_at_boolean_1) {
  const sourcemeta::jsontoolkit::JSON document{"{ \"foo\": false }"};
  EXPECT_TRUE(document.at("foo").is_boolean());
}

TEST(JSON, is_object_at_boolean_2) {
  const sourcemeta::jsontoolkit::JSON document{"{ \"foo\": 1 }"};
  EXPECT_FALSE(document.at("foo").is_boolean());
}

TEST(JSON, is_object_at_nested_boolean) {
  const sourcemeta::jsontoolkit::JSON document{
      "{ \"foo\": { \"bar\": { \"baz\": true } } }"};
  EXPECT_TRUE(document.at("foo").at("bar").at("baz").is_boolean());
}
