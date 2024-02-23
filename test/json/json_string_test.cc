#include <gtest/gtest.h>
#include <string>
#include <string_view>

#include <sourcemeta/jsontoolkit/json.h>

TEST(JSON_string, foo_value_string) {
  const std::string value{"foo"};
  const sourcemeta::jsontoolkit::JSON document{value};
  EXPECT_TRUE(document.is_string());
  EXPECT_EQ(document.to_string(), "foo");
}

TEST(JSON_string, foo_value_string_view) {
  const std::string_view value{"foo"};
  const sourcemeta::jsontoolkit::JSON document{value};
  EXPECT_TRUE(document.is_string());
  EXPECT_EQ(document.to_string(), "foo");
}

TEST(JSON_string, type) {
  const sourcemeta::jsontoolkit::JSON document{"foo"};
  EXPECT_EQ(document.type(), sourcemeta::jsontoolkit::JSON::Type::String);
}

TEST(JSON_string, to_stringstream) {
  const std::string value{"foo bar"};
  const sourcemeta::jsontoolkit::JSON document{value};
  EXPECT_TRUE(document.is_string());
  auto stream{document.to_stringstream()};
  EXPECT_EQ(stream.get(), 'f');
  EXPECT_EQ(stream.get(), 'o');
  EXPECT_EQ(stream.get(), 'o');
  EXPECT_EQ(stream.get(), ' ');
  EXPECT_EQ(stream.get(), 'b');
  EXPECT_EQ(stream.get(), 'a');
  EXPECT_EQ(stream.get(), 'r');
  EXPECT_EQ(stream.get(), -1);
  EXPECT_TRUE(stream.eof());
}

TEST(JSON_string, estimated_byte_size_foo) {
  const sourcemeta::jsontoolkit::JSON document{"foo"};
  EXPECT_EQ(document.estimated_byte_size(), 3);
}

TEST(JSON_string, estimated_byte_size_foo_bar_baz) {
  const sourcemeta::jsontoolkit::JSON document{"foo bar baz"};
  EXPECT_EQ(document.estimated_byte_size(), 11);
}

TEST(JSON_string, estimated_byte_size_empty) {
  const sourcemeta::jsontoolkit::JSON document{""};
  EXPECT_EQ(document.estimated_byte_size(), 0);
}
