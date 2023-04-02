#include <algorithm> // std::all_of, std::for_each, std::sort
#include <gtest/gtest.h>
#include <jsontoolkit/json/iterators.h>
#include <jsontoolkit/json/read.h>
#include <jsontoolkit/json/write.h>
#include <map>    // std::map
#include <string> // std::string
#include <vector> // std::vector

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

TEST(JSON, const_array_iterator) {
  std::vector<std::int64_t> result;
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
  for (const auto &element :
       sourcemeta::jsontoolkit::array_iterator(document)) {
    result.push_back(sourcemeta::jsontoolkit::to_integer(element));
  }

  EXPECT_EQ(result.size(), 3);
  EXPECT_EQ(result.at(0), 1);
  EXPECT_EQ(result.at(1), 2);
  EXPECT_EQ(result.at(2), 3);
}

TEST(JSON, array_iterator) {
  std::vector<std::int64_t> result;
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
  for (auto &element : sourcemeta::jsontoolkit::array_iterator(document)) {
    result.push_back(sourcemeta::jsontoolkit::to_integer(element));
  }

  EXPECT_EQ(result.size(), 3);
  EXPECT_EQ(result.at(0), 1);
  EXPECT_EQ(result.at(1), 2);
  EXPECT_EQ(result.at(2), 3);
}

TEST(JSON, const_object_iterator) {
  std::map<std::string, std::int64_t> result;
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};
  for (const auto &pair : sourcemeta::jsontoolkit::object_iterator(document)) {
    result.insert({sourcemeta::jsontoolkit::key(pair),
                   sourcemeta::jsontoolkit::to_integer(
                       sourcemeta::jsontoolkit::value(pair))});
  }

  EXPECT_EQ(result.size(), 2);
  EXPECT_EQ(result.at("foo"), 1);
  EXPECT_EQ(result.at("bar"), 2);
}

TEST(JSON, object_iterator) {
  std::map<std::string, std::int64_t> result;
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};
  for (auto &pair : sourcemeta::jsontoolkit::object_iterator(document)) {
    result.insert({sourcemeta::jsontoolkit::key(pair),
                   sourcemeta::jsontoolkit::to_integer(
                       sourcemeta::jsontoolkit::value(pair))});
  }

  EXPECT_EQ(result.size(), 2);
  EXPECT_EQ(result.at("foo"), 1);
  EXPECT_EQ(result.at("bar"), 2);
}

TEST(JSON, array_int_standard_sort) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[3,2,1]")};
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 3);
  EXPECT_EQ(sourcemeta::jsontoolkit::at(document, 0), 3);
  EXPECT_EQ(sourcemeta::jsontoolkit::at(document, 1), 2);
  EXPECT_EQ(sourcemeta::jsontoolkit::at(document, 2), 1);
  std::sort(sourcemeta::jsontoolkit::begin_array(document),
            sourcemeta::jsontoolkit::end_array(document),
            sourcemeta::jsontoolkit::compare);
  EXPECT_EQ(sourcemeta::jsontoolkit::at(document, 0), 1);
  EXPECT_EQ(sourcemeta::jsontoolkit::at(document, 1), 2);
  EXPECT_EQ(sourcemeta::jsontoolkit::at(document, 2), 3);
}

TEST(JSON, erase_many_array_full) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[1,2,3]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 3);
  sourcemeta::jsontoolkit::erase_many(
      document, sourcemeta::jsontoolkit::begin_array(document),
      sourcemeta::jsontoolkit::end_array(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
}

TEST(JSON, erase_many_array_partial) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[1,2,3]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 3);
  sourcemeta::jsontoolkit::erase_many(
      document, std::next(sourcemeta::jsontoolkit::begin_array(document)),
      sourcemeta::jsontoolkit::end_array(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_EQ(sourcemeta::jsontoolkit::at(document, 0), 1);
}

TEST(JSON, erase_many_array_full_const) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[1,2,3]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 3);
  sourcemeta::jsontoolkit::erase_many(
      document, sourcemeta::jsontoolkit::cbegin_array(document),
      sourcemeta::jsontoolkit::cend_array(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
}
