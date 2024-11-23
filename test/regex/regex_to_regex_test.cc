#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/regex.h>

TEST(Regex_to_regex, valid_1) {
  const auto regex{sourcemeta::jsontoolkit::to_regex("^foo")};
  EXPECT_TRUE(regex.has_value());
}

TEST(Regex_to_regex, invalid_1) {
  const auto regex{sourcemeta::jsontoolkit::to_regex("(abc")};
  EXPECT_FALSE(regex.has_value());
}
