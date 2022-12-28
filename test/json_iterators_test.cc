#include <algorithm> // std::all_of
#include <gtest/gtest.h>
#include <jsontoolkit/read.h>
#include <jsontoolkit/iterators.h>

TEST(CATEGORY, object_const_all_of_true) {
  const auto document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};
  const bool result = std::all_of(
      sourcemeta::jsontoolkit::object::cbegin(document),
      sourcemeta::jsontoolkit::object::cend(document), [](const auto &pair) {
        return sourcemeta::jsontoolkit::is_integer(pair.value);
      });
  EXPECT_TRUE(result);
}

TEST(CATEGORY, object_const_all_of_false) {
  const auto document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": \"2\" }")};
  const bool result = std::all_of(
      sourcemeta::jsontoolkit::object::cbegin(document),
      sourcemeta::jsontoolkit::object::cend(document), [](const auto &pair) {
        return sourcemeta::jsontoolkit::is_integer(pair.value);
      });
  EXPECT_FALSE(result);
}
