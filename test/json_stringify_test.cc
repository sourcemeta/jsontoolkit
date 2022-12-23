#include <gtest/gtest.h>
#include <jsontoolkit/json.h>
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
