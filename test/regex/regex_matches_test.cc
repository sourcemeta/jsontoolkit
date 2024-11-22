#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/regex.h>

TEST(Regex_matches, match_true_1) {
  const auto regex{sourcemeta::jsontoolkit::to_regex("^foo")};
  EXPECT_TRUE(regex.has_value());
  EXPECT_TRUE(sourcemeta::jsontoolkit::matches(regex.value(), "foobar"));
}

TEST(Regex_matches, match_true_2) {
  const auto regex{sourcemeta::jsontoolkit::to_regex("^.*$")};
  EXPECT_TRUE(regex.has_value());
  EXPECT_TRUE(sourcemeta::jsontoolkit::matches(regex.value(), "foobar"));
}

TEST(Regex_matches, match_true_3) {
  const auto regex{sourcemeta::jsontoolkit::to_regex("^(.*)$")};
  EXPECT_TRUE(regex.has_value());
  EXPECT_TRUE(sourcemeta::jsontoolkit::matches(regex.value(), "foobar"));
}

TEST(Regex_matches, match_true_4) {
  const auto regex{sourcemeta::jsontoolkit::to_regex(".*")};
  EXPECT_TRUE(regex.has_value());
  EXPECT_TRUE(sourcemeta::jsontoolkit::matches(regex.value(), "foobar"));
}

TEST(Regex_matches, match_false_1) {
  const auto regex{sourcemeta::jsontoolkit::to_regex("^foo")};
  EXPECT_TRUE(regex.has_value());
  EXPECT_FALSE(sourcemeta::jsontoolkit::matches(regex.value(), "bar"));
}
