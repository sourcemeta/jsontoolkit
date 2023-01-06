#include <algorithm> // std::all_of, std::for_each
#include <gtest/gtest.h>
#include <jsontoolkit/json/iterators.h>
#include <jsontoolkit/json/read.h>

TEST(JSON, array_const_iterator_for_each) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
  std::vector<std::int64_t> result;
  std::for_each(sourcemeta::jsontoolkit::cbegin_array(document),
                sourcemeta::jsontoolkit::cend_array(document),
                [&result](const auto &element) {
                  result.push_back(
                      sourcemeta::jsontoolkit::to_integer(element));
                });
  EXPECT_EQ(result.size(), 3);
  EXPECT_EQ(result.at(0), 1);
  EXPECT_EQ(result.at(1), 2);
  EXPECT_EQ(result.at(2), 3);
}

TEST(JSON, array_iterator_for_each) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
  std::vector<std::int64_t> result;
  std::for_each(
      sourcemeta::jsontoolkit::begin_array(document),
      sourcemeta::jsontoolkit::end_array(document), [&result](auto &element) {
        result.push_back(sourcemeta::jsontoolkit::to_integer(element));
      });
  EXPECT_EQ(result.size(), 3);
  EXPECT_EQ(result.at(0), 1);
  EXPECT_EQ(result.at(1), 2);
  EXPECT_EQ(result.at(2), 3);
}

TEST(JSON, array_reverse_const_iterator_for_each) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
  std::vector<std::int64_t> result;
  std::for_each(sourcemeta::jsontoolkit::crbegin_array(document),
                sourcemeta::jsontoolkit::crend_array(document),
                [&result](const auto &element) {
                  result.push_back(
                      sourcemeta::jsontoolkit::to_integer(element));
                });
  EXPECT_EQ(result.size(), 3);
  EXPECT_EQ(result.at(0), 3);
  EXPECT_EQ(result.at(1), 2);
  EXPECT_EQ(result.at(2), 1);
}

TEST(JSON, array_reverse_iterator_for_each) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
  std::vector<std::int64_t> result;
  std::for_each(
      sourcemeta::jsontoolkit::rbegin_array(document),
      sourcemeta::jsontoolkit::rend_array(document), [&result](auto &element) {
        result.push_back(sourcemeta::jsontoolkit::to_integer(element));
      });
  EXPECT_EQ(result.size(), 3);
  EXPECT_EQ(result.at(0), 3);
  EXPECT_EQ(result.at(1), 2);
  EXPECT_EQ(result.at(2), 1);
}

TEST(JSON, object_const_all_of_true) {
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

TEST(JSON, object_const_all_of_false) {
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

TEST(JSON, object_all_of_true) {
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

TEST(JSON, object_all_of_with_key_true) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};
  const bool result = std::all_of(
      sourcemeta::jsontoolkit::begin_object(document),
      sourcemeta::jsontoolkit::end_object(document),
      [](auto &pair) { return sourcemeta::jsontoolkit::key(pair).size() > 2; });
  EXPECT_TRUE(result);
}

TEST(JSON, object_all_of_with_key_false) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"f\": 1, \"bar\": 2 }")};
  const bool result = std::all_of(
      sourcemeta::jsontoolkit::begin_object(document),
      sourcemeta::jsontoolkit::end_object(document),
      [](auto &pair) { return sourcemeta::jsontoolkit::key(pair).size() > 2; });
  EXPECT_FALSE(result);
}
