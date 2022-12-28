#include <gtest/gtest.h>
#include <jsontoolkit/read.h>
#include <sstream> // std::ostringstream

TEST(CATEGORY, array_stringify_scalars_no_space) {
  const auto document{sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "[1,2,3]");
}

TEST(CATEGORY, array_stringify_scalars_space_pretty) {
  const auto document{sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "[\n    1,\n    2,\n    3\n]");
}

TEST(CATEGORY, stringify_array_pretty) {
  const auto document{sourcemeta::jsontoolkit::parse("[ 1, [2,3], 4 ]")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(),
            "[\n    1,\n    [\n        2,\n        3\n    ],\n    4\n]");
}

TEST(CATEGORY, array_stringify_object_pretty) {
  const auto document{sourcemeta::jsontoolkit::parse("[ { \"foo\": 1 } ]")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "[\n    {\n        \"foo\": 1\n    }\n]");
}

TEST(CATEGORY, stringify_false) {
  const auto document{sourcemeta::jsontoolkit::from(false)};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "false");
}

TEST(CATEGORY, stringify_true) {
  const auto document{sourcemeta::jsontoolkit::from(true)};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "true");
}

TEST(CATEGORY, prettify_false) {
  const auto document{sourcemeta::jsontoolkit::from(false)};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "false");
}

TEST(CATEGORY, prettify_true) {
  const auto document{sourcemeta::jsontoolkit::from(true)};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "true");
}

TEST(CATEGORY, null_stringify) {
  const auto document{sourcemeta::jsontoolkit::from(nullptr)};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "null");
}

TEST(CATEGORY, null_prettify) {
  const auto document{sourcemeta::jsontoolkit::from(nullptr)};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "null");
}

TEST(CATEGORY, stringify_positive_integer) {
  const auto document{sourcemeta::jsontoolkit::parse("54")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "54");
}

TEST(CATEGORY, stringify_negative_integer) {
  const auto document{sourcemeta::jsontoolkit::parse("-54")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "-54");
}

TEST(CATEGORY, stringify_zero) {
  const auto document{sourcemeta::jsontoolkit::parse("0")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "0");
}

TEST(CATEGORY, stringify_positive_real) {
  const auto document{sourcemeta::jsontoolkit::parse("5.4")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "5.4");
}

TEST(CATEGORY, stringify_negative_real) {
  const auto document{sourcemeta::jsontoolkit::parse("-5.4")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "-5.4");
}

TEST(CATEGORY, stringify_single_scalar_no_space) {
  const auto document{sourcemeta::jsontoolkit::parse("{ \"foo\": 1 }")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "{\"foo\":1}");
}

TEST(CATEGORY, stringify_scalars_no_space) {
  const auto document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": true }")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  // Because order is irrelevant
  const bool matches = stream.str() == "{\"foo\":1,\"bar\":true}" ||
                       stream.str() == "{\"bar\":true,\"foo\":1}";
  EXPECT_TRUE(matches);
}

TEST(CATEGORY, stringify_single_scalar_pretty) {
  const auto document{sourcemeta::jsontoolkit::parse("{ \"foo\": 1 }")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "{\n    \"foo\": 1\n}");
}

TEST(CATEGORY, stringify_scalars_pretty) {
  const auto document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": true }")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  // Because order is irrelevant
  const bool matches =
      stream.str() == "{\n    \"foo\": 1,\n    \"bar\": true\n}" ||
      stream.str() == "{\n    \"bar\": true,\n    \"foo\": 1\n}";
  EXPECT_TRUE(matches);
}

TEST(CATEGORY, stringify_single_array_no_space) {
  const auto document{sourcemeta::jsontoolkit::parse("{ \"foo\": [1,2] }")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::stringify(document, stream);
  EXPECT_EQ(stream.str(), "{\"foo\":[1,2]}");
}

TEST(CATEGORY, stringify_single_array_pretty) {
  const auto document{sourcemeta::jsontoolkit::parse("{ \"foo\": [1,2] }")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "{\n    \"foo\": [\n        1,\n        2\n    ]\n}");
}

TEST(CATEGORY, stringify_single_object_pretty) {
  const auto document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": {\"bar\":1} }")};
  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(document, stream);
  EXPECT_EQ(stream.str(), "{\n    \"foo\": {\n        \"bar\": 1\n    }\n}");
}
