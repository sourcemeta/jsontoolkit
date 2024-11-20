#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/regex.h>

TEST(Regex_validate, match_true_1) {
  const auto regex{sourcemeta::jsontoolkit::compile("^foo")};
  EXPECT_TRUE(regex.has_value());
  EXPECT_TRUE(sourcemeta::jsontoolkit::validate(regex.value(), "foobar"));
}

TEST(Regex_validate, match_false_1) {
  const auto regex{sourcemeta::jsontoolkit::compile("^foo")};
  EXPECT_TRUE(regex.has_value());
  EXPECT_FALSE(sourcemeta::jsontoolkit::validate(regex.value(), "bar"));
}
