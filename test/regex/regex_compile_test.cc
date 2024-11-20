#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/regex.h>

TEST(Regex_compile, valid_1) {
  const auto regex{sourcemeta::jsontoolkit::compile("^foo")};
  EXPECT_TRUE(regex.has_value());
}

TEST(Regex_compile, invalid_1) {
  const auto regex{sourcemeta::jsontoolkit::compile("(?<name>a)(?<name>b)")};
  EXPECT_FALSE(regex.has_value());
}
