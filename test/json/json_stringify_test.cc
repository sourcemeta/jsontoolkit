#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json/read.h>
#include <sstream> // std::ostringstream

TEST(JSON, array_stringify_scalars_no_space) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "[1,2,3]");
}

TEST(JSON, array_stringify_scalars_space_pretty) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "[\n    1,\n    2,\n    3\n]");
}

TEST(JSON, stringify_array_pretty) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[ 1, [2,3], 4 ]")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(),
            "[\n    1,\n    [\n        2,\n        3\n    ],\n    4\n]");
}

TEST(JSON, array_stringify_object_pretty) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[ { \"foo\": 1 } ]")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "[\n    {\n        \"foo\": 1\n    }\n]");
}

TEST(JSON, stringify_false) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(false)};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "false");
}

TEST(JSON, stringify_true) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(true)};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "true");
}

TEST(JSON, prettify_false) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(false)};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "false");
}

TEST(JSON, prettify_true) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(true)};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "true");
}

TEST(JSON, null_stringify) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(nullptr)};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "null");
}

TEST(JSON, null_prettify) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(nullptr)};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "null");
}

TEST(JSON, stringify_positive_integer) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("54")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "54");
}

TEST(JSON, stringify_negative_integer) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("-54")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "-54");
}

TEST(JSON, stringify_zero) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("0")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "0");
}

TEST(JSON, stringify_positive_real) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("5.4")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "5.4");
}

TEST(JSON, stringify_negative_real) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("-5.4")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "-5.4");
}

TEST(JSON, stringify_single_scalar_no_space) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1 }")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "{\"foo\":1}");
}

TEST(JSON, stringify_scalars_no_space) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": true }")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  // Because order is irrelevant
  const bool matches = stream.str() == "{\"foo\":1,\"bar\":true}" ||
                       stream.str() == "{\"bar\":true,\"foo\":1}";
  EXPECT_TRUE(matches);
}

TEST(JSON, stringify_single_scalar_pretty) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1 }")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "{\n    \"foo\": 1\n}");
}

TEST(JSON, stringify_scalars_pretty) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": true }")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  // Because order is irrelevant
  const bool matches =
      stream.str() == "{\n    \"foo\": 1,\n    \"bar\": true\n}" ||
      stream.str() == "{\n    \"bar\": true,\n    \"foo\": 1\n}";
  EXPECT_TRUE(matches);
}

TEST(JSON, stringify_single_array_no_space) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": [1,2] }")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "{\"foo\":[1,2]}");
}

TEST(JSON, stringify_single_array_pretty) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": [1,2] }")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "{\n    \"foo\": [\n        1,\n        2\n    ]\n}");
}

TEST(JSON, stringify_single_object_pretty) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": {\"bar\":1} }")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "{\n    \"foo\": {\n        \"bar\": 1\n    }\n}");
}

TEST(JSON, stringify_empty_string) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("\"\"")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "\"\"");
}

TEST(JSON, stringify_short_string) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("\"foo\"")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "\"foo\"");
}

TEST(JSON, stringify_quote) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("\"\\\"\"")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "\"\\\"\"");
}

TEST(JSON, stringify_unicode_solidus) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("\"\\u002F\"")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "\"/\"");
}
