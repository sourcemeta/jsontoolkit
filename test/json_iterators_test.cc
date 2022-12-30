#include <algorithm> // std::all_of
#include <gtest/gtest.h>
#include <jsontoolkit/json/iterators.h>
#include <jsontoolkit/json/read.h>

TEST(CATEGORY, object_const_all_of_true) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};
  const bool result = std::all_of(
      sourcemeta::jsontoolkit::cbegin_object(document),
      sourcemeta::jsontoolkit::cend_object(document), [](const auto &pair) {
        return sourcemeta::jsontoolkit::is_integer(
            sourcemeta::jsontoolkit::value(pair));
      });
  EXPECT_TRUE(result);
}

TEST(CATEGORY, object_const_all_of_false) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": \"2\" }")};
  const bool result = std::all_of(
      sourcemeta::jsontoolkit::cbegin_object(document),
      sourcemeta::jsontoolkit::cend_object(document), [](const auto &pair) {
        return sourcemeta::jsontoolkit::is_integer(
            sourcemeta::jsontoolkit::value(pair));
      });
  EXPECT_FALSE(result);
}

TEST(CATEGORY, object_all_of_true) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};
  const bool result = std::all_of(
      sourcemeta::jsontoolkit::begin_object(document),
      sourcemeta::jsontoolkit::end_object(document), [](auto &pair) {
        return sourcemeta::jsontoolkit::is_integer(
            sourcemeta::jsontoolkit::value(pair));
      });
  EXPECT_TRUE(result);
}

TEST(CATEGORY, object_all_of_with_key_true) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};
  const bool result = std::all_of(
      sourcemeta::jsontoolkit::begin_object(document),
      sourcemeta::jsontoolkit::end_object(document),
      [](auto &pair) { return sourcemeta::jsontoolkit::key(pair).size() > 2; });
  EXPECT_TRUE(result);
}

TEST(CATEGORY, object_all_of_with_key_false) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"f\": 1, \"bar\": 2 }")};
  const bool result = std::all_of(
      sourcemeta::jsontoolkit::begin_object(document),
      sourcemeta::jsontoolkit::end_object(document),
      [](auto &pair) { return sourcemeta::jsontoolkit::key(pair).size() > 2; });
  EXPECT_FALSE(result);
}
