#include <gtest/gtest.h>
#include <string>

#include <sourcemeta/jsontoolkit/json.h>

TEST(JSON_string, foo_value_string) {
  const std::string value{"foo"};
  const sourcemeta::jsontoolkit::JSON document{value};
  EXPECT_TRUE(document.is_string());
  EXPECT_EQ(document.to_string(), "foo");
}

TEST(JSON_string, type) {
  const sourcemeta::jsontoolkit::JSON document{"foo"};
  EXPECT_EQ(document.type(), sourcemeta::jsontoolkit::JSON::Type::String);
}
