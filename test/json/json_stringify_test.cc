#include <gtest/gtest.h>
#include <sstream>

#include <sourcemeta/jsontoolkit/json.h>

TEST(JSON_stringify, boolean_false) {
  const sourcemeta::jsontoolkit::JSON document{false};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "false");
}

TEST(JSON_stringify, boolean_true) {
  const sourcemeta::jsontoolkit::JSON document{true};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "true");
}

TEST(JSON_stringify, null) {
  const sourcemeta::jsontoolkit::JSON document{nullptr};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "null");
}

TEST(JSON_stringify, integer_positive) {
  const sourcemeta::jsontoolkit::JSON document{1234};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "1234");
}

TEST(JSON_stringify, integer_negative) {
  const sourcemeta::jsontoolkit::JSON document{-1234};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "-1234");
}

TEST(JSON_stringify, integer_zero) {
  const sourcemeta::jsontoolkit::JSON document{0};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "0");
}

TEST(JSON_stringify, integer_minus_zero) {
  const sourcemeta::jsontoolkit::JSON document{-0};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "0");
}

TEST(JSON_stringify, real_positive) {
  const sourcemeta::jsontoolkit::JSON document{12.34};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "12.34");
}

TEST(JSON_stringify, real_negative) {
  const sourcemeta::jsontoolkit::JSON document{-12.34};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "-12.34");
}

TEST(JSON_stringify, real_zero) {
  const sourcemeta::jsontoolkit::JSON document{0.0};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "0.0");
}

TEST(JSON_stringify, real_minus_zero) {
  const sourcemeta::jsontoolkit::JSON document{-0.0};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "0.0");
}

TEST(JSON_stringify, empty_string) {
  const sourcemeta::jsontoolkit::JSON document{""};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "\"\"");
}

TEST(JSON_stringify, small_string) {
  const sourcemeta::jsontoolkit::JSON document{"foo"};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "\"foo\"");
}

TEST(JSON_stringify, array_integers) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::JSON{1}, sourcemeta::jsontoolkit::JSON{2},
      sourcemeta::jsontoolkit::JSON{3}, sourcemeta::jsontoolkit::JSON{4}};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "[1,2,3,4]");
}

TEST(JSON_stringify, array_nested) {
  sourcemeta::jsontoolkit::JSON array{
      sourcemeta::jsontoolkit::JSON{1}, sourcemeta::jsontoolkit::JSON{2},
      sourcemeta::jsontoolkit::JSON{3}, sourcemeta::jsontoolkit::JSON{4}};
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::JSON::Array{}};
  document.push_back(std::move(array));
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "[[1,2,3,4]]");
}

TEST(JSON_stringify, array_empty) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::JSON::Array{}};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "[]");
}

TEST(JSON_stringify, object_integers) {
  const sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{1}},
      {"bar", sourcemeta::jsontoolkit::JSON{2}}};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  // Because order is irrelevant
  const bool matches = stream.str() == "{\"foo\":1,\"bar\":2}" ||
                       stream.str() == "{\"bar\":2,\"foo\":1}";
  EXPECT_TRUE(matches);
}

TEST(JSON_stringify, object_empty) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::JSON::make_object()};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "{}");
}

TEST(JSON_stringify, object_with_array) {
  sourcemeta::jsontoolkit::JSON array{sourcemeta::jsontoolkit::JSON::Array{}};
  array.push_back(sourcemeta::jsontoolkit::JSON{1});
  array.push_back(sourcemeta::jsontoolkit::JSON{2});
  const sourcemeta::jsontoolkit::JSON document{{"foo", std::move(array)}};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "{\"foo\":[1,2]}");
}

TEST(JSON_stringify, stringify_quote) {
  const sourcemeta::jsontoolkit::JSON document{"\""};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "\"\\\"\"");
}

TEST(JSON_stringify, stringify_escape) {
  const sourcemeta::jsontoolkit::JSON document{"\\"};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "\"\\\\\"");
}

TEST(JSON_stringify, stringify_solidus) {
  const sourcemeta::jsontoolkit::JSON document{"/"};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "\"/\"");
}

TEST(JSON_stringify, stringify_backspace) {
  const sourcemeta::jsontoolkit::JSON document{"foo\bbar"};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "\"foo\\bbar\"");
}

TEST(JSON_stringify, stringify_formfeed) {
  const sourcemeta::jsontoolkit::JSON document{"foo\fbar"};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "\"foo\\fbar\"");
}

TEST(JSON_stringify, stringify_newline) {
  const sourcemeta::jsontoolkit::JSON document{"foo\nbar"};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "\"foo\\nbar\"");
}

TEST(JSON_stringify, stringify_carriage_return) {
  const sourcemeta::jsontoolkit::JSON document{"foo\rbar"};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "\"foo\\rbar\"");
}

TEST(JSON_stringify, stringify_tabulation) {
  const sourcemeta::jsontoolkit::JSON document{"foo\tbar"};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "\"foo\\tbar\"");
}

TEST(JSON_stringify, stringify_scientific_real) {
  const sourcemeta::jsontoolkit::JSON document{4.321768E3};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "4321.77");
}
