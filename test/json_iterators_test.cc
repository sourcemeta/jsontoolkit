#include <algorithm> // std::all_of
#include <gtest/gtest.h>
#include <jsontoolkit/iterators.h>
#include <jsontoolkit/read.h>

TEST(CATEGORY, object_const_all_of_true) {
  const auto document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};
  const bool result = std::all_of(
      sourcemeta::jsontoolkit::object::cbegin(document),
      sourcemeta::jsontoolkit::object::cend(document), [](const auto &pair) {
        return sourcemeta::jsontoolkit::is_integer(
            sourcemeta::jsontoolkit::value(pair));
      });
  EXPECT_TRUE(result);
}

TEST(CATEGORY, object_const_all_of_false) {
  const auto document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": \"2\" }")};
  const bool result = std::all_of(
      sourcemeta::jsontoolkit::object::cbegin(document),
      sourcemeta::jsontoolkit::object::cend(document), [](const auto &pair) {
        return sourcemeta::jsontoolkit::is_integer(
            sourcemeta::jsontoolkit::value(pair));
      });
  EXPECT_FALSE(result);
}

TEST(CATEGORY, object_all_of_true) {
  auto document{sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};
  const bool result = std::all_of(
      sourcemeta::jsontoolkit::object::begin(document),
      sourcemeta::jsontoolkit::object::end(document), [](auto &pair) {
        return sourcemeta::jsontoolkit::is_integer(
            sourcemeta::jsontoolkit::value(pair));
      });
  EXPECT_TRUE(result);
}
