#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>

#include <sstream>

TEST(JSON_type, print_null) {
  std::ostringstream output;
  output << sourcemeta::jsontoolkit::JSON::Type::Null;
  EXPECT_EQ(output.str(), "null");
}

TEST(JSON_type, print_boolean) {
  std::ostringstream output;
  output << sourcemeta::jsontoolkit::JSON::Type::Boolean;
  EXPECT_EQ(output.str(), "boolean");
}

TEST(JSON_type, print_integer) {
  std::ostringstream output;
  output << sourcemeta::jsontoolkit::JSON::Type::Integer;
  EXPECT_EQ(output.str(), "integer");
}

TEST(JSON_type, print_real) {
  std::ostringstream output;
  output << sourcemeta::jsontoolkit::JSON::Type::Real;
  EXPECT_EQ(output.str(), "real");
}

TEST(JSON_type, print_string) {
  std::ostringstream output;
  output << sourcemeta::jsontoolkit::JSON::Type::String;
  EXPECT_EQ(output.str(), "string");
}

TEST(JSON_type, print_array) {
  std::ostringstream output;
  output << sourcemeta::jsontoolkit::JSON::Type::Array;
  EXPECT_EQ(output.str(), "array");
}

TEST(JSON_type, print_object) {
  std::ostringstream output;
  output << sourcemeta::jsontoolkit::JSON::Type::Object;
  EXPECT_EQ(output.str(), "object");
}
