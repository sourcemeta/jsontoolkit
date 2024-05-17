#include <gtest/gtest.h>
#include <sstream>

#include <sourcemeta/jsontoolkit/json.h>

TEST(JSON_prettify, boolean_false) {
  const sourcemeta::jsontoolkit::JSON document{false};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "false");
}

TEST(JSON_prettify, boolean_true) {
  const sourcemeta::jsontoolkit::JSON document{true};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "true");
}

TEST(JSON_prettify, null) {
  const sourcemeta::jsontoolkit::JSON document{nullptr};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "null");
}

TEST(JSON_prettify, integer_positive) {
  const sourcemeta::jsontoolkit::JSON document{1234};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "1234");
}

TEST(JSON_prettify, integer_negative) {
  const sourcemeta::jsontoolkit::JSON document{-1234};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "-1234");
}

TEST(JSON_prettify, integer_zero) {
  const sourcemeta::jsontoolkit::JSON document{0};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "0");
}

TEST(JSON_prettify, integer_minus_zero) {
  const sourcemeta::jsontoolkit::JSON document{-0};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "0");
}

TEST(JSON_prettify, real_positive) {
  const sourcemeta::jsontoolkit::JSON document{12.34};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "12.34");
}

TEST(JSON_prettify, real_negative) {
  const sourcemeta::jsontoolkit::JSON document{-12.34};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "-12.34");
}

TEST(JSON_prettify, real_zero) {
  const sourcemeta::jsontoolkit::JSON document{0.0};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "0.0");
}

TEST(JSON_prettify, real_minus_zero) {
  const sourcemeta::jsontoolkit::JSON document{-0.0};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "0.0");
}

TEST(JSON_prettify, empty_string) {
  const sourcemeta::jsontoolkit::JSON document{""};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "\"\"");
}

TEST(JSON_prettify, small_string) {
  const sourcemeta::jsontoolkit::JSON document{"foo"};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "\"foo\"");
}

TEST(JSON_prettify, array_integers) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::JSON{1}, sourcemeta::jsontoolkit::JSON{2},
      sourcemeta::jsontoolkit::JSON{3}, sourcemeta::jsontoolkit::JSON{4}};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "[\n  1,\n  2,\n  3,\n  4\n]");
}

TEST(JSON_prettify, array_nested_1) {
  sourcemeta::jsontoolkit::JSON array{
      sourcemeta::jsontoolkit::JSON{1}, sourcemeta::jsontoolkit::JSON{2},
      sourcemeta::jsontoolkit::JSON{3}, sourcemeta::jsontoolkit::JSON{4}};
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::JSON::Array{}};
  document.push_back(std::move(array));
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "[\n  [\n    1,\n    2,\n    3,\n    4\n  ]\n]");
}

TEST(JSON_prettify, array_nested_2) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::JSON::Array{}};
  document.push_back(sourcemeta::jsontoolkit::JSON{1});
  sourcemeta::jsontoolkit::JSON nested{sourcemeta::jsontoolkit::JSON{2},
                                       sourcemeta::jsontoolkit::JSON{3}};
  document.push_back(std::move(nested));
  document.push_back(sourcemeta::jsontoolkit::JSON{4});
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "[\n  1,\n  [\n    2,\n    3\n  ],\n  4\n]");
}

TEST(JSON_prettify, array_empty) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::JSON::Array{}};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "[]");
}

TEST(JSON_prettify, object_integers) {
  const sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{1}},
      {"bar", sourcemeta::jsontoolkit::JSON{2}}};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  // Because order is irrelevant
  const bool matches = stream.str() == "{\n  \"foo\": 1,\n  \"bar\": 2\n}" ||
                       stream.str() == "{\n  \"bar\": 2,\n  \"foo\": 1\n}";
  EXPECT_TRUE(matches);
}

TEST(JSON_prettify, object_integers_order_1) {
  const sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{1}},
      {"bar", sourcemeta::jsontoolkit::JSON{2}},
      {"baz", sourcemeta::jsontoolkit::JSON{3}}};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(
      document, stream,
      [](const auto &left, const auto &right) { return left < right; });
  EXPECT_EQ(stream.str(), "{\n  \"bar\": 2,\n  \"baz\": 3,\n  \"foo\": 1\n}");
}

TEST(JSON_prettify, object_integers_order_2) {
  const sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{1}},
      {"bar", sourcemeta::jsontoolkit::JSON{2}},
      {"baz", sourcemeta::jsontoolkit::JSON{3}}};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(
      document, stream,
      [](const auto &left, const auto &right) { return left > right; });
  EXPECT_EQ(stream.str(), "{\n  \"foo\": 1,\n  \"baz\": 3,\n  \"bar\": 2\n}");
}

TEST(JSON_prettify, object_empty) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::JSON::make_object();
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "{}");
}

TEST(JSON_prettify, object_with_array) {
  sourcemeta::jsontoolkit::JSON array{sourcemeta::jsontoolkit::JSON::Array{}};
  array.push_back(sourcemeta::jsontoolkit::JSON{1});
  array.push_back(sourcemeta::jsontoolkit::JSON{2});
  const sourcemeta::jsontoolkit::JSON document{{"foo", std::move(array)}};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "{\n  \"foo\": [\n    1,\n    2\n  ]\n}");
}

TEST(JSON_prettify, object_nested) {
  sourcemeta::jsontoolkit::JSON object =
      sourcemeta::jsontoolkit::JSON::make_object();
  object.assign("bar", sourcemeta::jsontoolkit::JSON{1});
  const sourcemeta::jsontoolkit::JSON document{{"foo", std::move(object)}};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "{\n  \"foo\": {\n    \"bar\": 1\n  }\n}");
}

TEST(JSON_prettify, array_with_object) {
  sourcemeta::jsontoolkit::JSON object =
      sourcemeta::jsontoolkit::JSON::make_object();
  object.assign("foo", sourcemeta::jsontoolkit::JSON{1});
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::JSON::Array{}};
  document.push_back(std::move(object));
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "[\n  {\n    \"foo\": 1\n  }\n]");
}

TEST(JSON_prettify, simple_object) {
  const sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{1}}};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "{\n  \"foo\": 1\n}");
}

TEST(JSON_prettify, prettify_quote) {
  const sourcemeta::jsontoolkit::JSON document{"\""};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "\"\\\"\"");
}

TEST(JSON_prettify, prettify_escape) {
  const sourcemeta::jsontoolkit::JSON document{"\\"};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "\"\\\\\"");
}

TEST(JSON_prettify, prettify_solidus) {
  const sourcemeta::jsontoolkit::JSON document{"/"};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "\"/\"");
}

TEST(JSON_prettify, prettify_backspace) {
  const sourcemeta::jsontoolkit::JSON document{"foo\bbar"};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "\"foo\\bbar\"");
}

TEST(JSON_prettify, prettify_formfeed) {
  const sourcemeta::jsontoolkit::JSON document{"foo\fbar"};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "\"foo\\fbar\"");
}

TEST(JSON_prettify, prettify_newline) {
  const sourcemeta::jsontoolkit::JSON document{"foo\nbar"};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "\"foo\\nbar\"");
}

TEST(JSON_prettify, prettify_carriage_return) {
  const sourcemeta::jsontoolkit::JSON document{"foo\rbar"};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "\"foo\\rbar\"");
}

TEST(JSON_prettify, prettify_tabulation) {
  const sourcemeta::jsontoolkit::JSON document{"foo\tbar"};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "\"foo\\tbar\"");
}

TEST(JSON_prettify, prettify_scientific_real) {
  const sourcemeta::jsontoolkit::JSON document{4.321768E3};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "4321.77");
}
