#include <gtest/gtest.h>
#include <jsontoolkit/json.h>
#include <sstream>   // std::ostringstream
#include <stdexcept> // std::domain_error

TEST(CATEGORY, is_boolean_true) {
  const auto document{sourcemeta::jsontoolkit::parse("true")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
}

TEST(CATEGORY, empty_array_string) {
  const auto document{sourcemeta::jsontoolkit::parse("[]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
}

TEST(CATEGORY, empty_array_with_inner_space) {
  const auto document{sourcemeta::jsontoolkit::parse("[        ]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
}

TEST(CATEGORY, empty_array_incomplete_right) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("["), std::domain_error);
}

TEST(CATEGORY, empty_array_incomplete_right_with_inner_space) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[  "), std::domain_error);
}

TEST(CATEGORY, empty_array_with_comma) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[,]"), std::domain_error);
}

TEST(CATEGORY, empty_array_with_comma_and_no_right_bracket) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[,"), std::domain_error);
}

TEST(CATEGORY, empty_array_with_comma_and_spacing) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[    ,    ]"),
               std::domain_error);
}

TEST(CATEGORY, array_parse_deep_failure) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[true"), std::domain_error);
}

TEST(CATEGORY, array_parse_deep_failure_in_item) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[tru]"), std::domain_error);
}

TEST(CATEGORY, array_without_comma_after_element) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[1[2]]"), std::domain_error);
}

TEST(CATEGORY, array_unclosed_string_element) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[\"foo]"), std::domain_error);
}

TEST(CATEGORY, array_single_element_trailing_comma) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[true,]"), std::domain_error);
}

TEST(CATEGORY, array_single_element_trailing_commas) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[true,,,]"), std::domain_error);
}

TEST(CATEGORY, array_single_element_middle_comma) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[true,,true]"),
               std::domain_error);
}

TEST(CATEGORY, array_single_element_leading_comma) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[,true]"), std::domain_error);
}

TEST(CATEGORY, array_single_element_leading_commas) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[,,,true]"), std::domain_error);
}

TEST(CATEGORY, concat_array) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[true][false]"),
               std::domain_error);
}

TEST(CATEGORY, concat_array_middle_comma) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[true],[false]"),
               std::domain_error);
}

TEST(CATEGORY, concat_array_middle_unbalanced_left) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[true],false]"),
               std::domain_error);
}

TEST(CATEGORY, concat_array_middle_unbalanced_right) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[true,[false]"),
               std::domain_error);
}

TEST(CATEGORY, array_parse_deep_success) {
  const auto document{sourcemeta::jsontoolkit::parse("[true]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const auto &value{sourcemeta::jsontoolkit::get(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(value));
}

TEST(CATEGORY, array_single_element_with_inner_space) {
  const auto document{sourcemeta::jsontoolkit::parse("[    true    ]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const auto &value{sourcemeta::jsontoolkit::get(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(value));
}

TEST(CATEGORY, array_single_element_with_padding) {
  const auto document{sourcemeta::jsontoolkit::parse("   [ true ]   ")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const auto &value{sourcemeta::jsontoolkit::get(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(value));
}

TEST(CATEGORY, array_two_elements_with_spacing) {
  const auto document{
      sourcemeta::jsontoolkit::parse("[   true  ,   false   ]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  const auto &value_1{sourcemeta::jsontoolkit::get(document, 0)};
  const auto &value_2{sourcemeta::jsontoolkit::get(document, 1)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(value_1));
  EXPECT_FALSE(sourcemeta::jsontoolkit::to_boolean(value_2));
}

TEST(CATEGORY, one_level_nested_array) {
  const auto document{sourcemeta::jsontoolkit::parse("[[true],false]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  const auto &value_1{sourcemeta::jsontoolkit::get(document, 0)};
  const auto &value_2{sourcemeta::jsontoolkit::get(document, 1)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(value_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(value_2));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(value_1), 1);
  const auto &subvalue_1{sourcemeta::jsontoolkit::get(value_1, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(subvalue_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(subvalue_1));
  EXPECT_FALSE(sourcemeta::jsontoolkit::to_boolean(value_2));
}

TEST(CATEGORY, one_level_nested_array_with_padding) {
  const auto document{
      sourcemeta::jsontoolkit::parse("  [  [ true  ]  ,  false  ]  ")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  const auto &value_1{sourcemeta::jsontoolkit::get(document, 0)};
  const auto &value_2{sourcemeta::jsontoolkit::get(document, 1)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(value_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(value_2));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(value_1), 1);
  const auto &subvalue_1{sourcemeta::jsontoolkit::get(value_1, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(subvalue_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(subvalue_1));
  EXPECT_FALSE(sourcemeta::jsontoolkit::to_boolean(value_2));
}

TEST(CATEGORY, two_levels_nested_array) {
  const auto document{sourcemeta::jsontoolkit::parse("[true,[false,[true]]]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  const auto &value_1{sourcemeta::jsontoolkit::get(document, 0)};
  const auto &value_2{sourcemeta::jsontoolkit::get(document, 1)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(value_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(value_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(value_2));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(value_2), 2);
  const auto &subvalue_1{sourcemeta::jsontoolkit::get(value_2, 0)};
  const auto &subvalue_2{sourcemeta::jsontoolkit::get(value_2, 1)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(subvalue_1));
  EXPECT_FALSE(sourcemeta::jsontoolkit::to_boolean(subvalue_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(subvalue_2));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(subvalue_2), 1);
  const auto &subsubvalue_1{sourcemeta::jsontoolkit::get(subvalue_2, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(subsubvalue_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(subsubvalue_1));
}

TEST(CATEGORY, two_levels_nested_array_with_padding) {
  const auto document{sourcemeta::jsontoolkit::parse(
      "  [  true , [  false  , [ true ]  ]  ] ")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  const auto &value_1{sourcemeta::jsontoolkit::get(document, 0)};
  const auto &value_2{sourcemeta::jsontoolkit::get(document, 1)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(value_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(value_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(value_2));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(value_2), 2);
  const auto &subvalue_1{sourcemeta::jsontoolkit::get(value_2, 0)};
  const auto &subvalue_2{sourcemeta::jsontoolkit::get(value_2, 1)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(subvalue_1));
  EXPECT_FALSE(sourcemeta::jsontoolkit::to_boolean(subvalue_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(subvalue_2));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(subvalue_2), 1);
  const auto &subsubvalue_1{sourcemeta::jsontoolkit::get(subvalue_2, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(subsubvalue_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(subsubvalue_1));
}

TEST(CATEGORY, array_of_single0_string) {
  const auto document{sourcemeta::jsontoolkit::parse("[\"foo\"]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const auto &value_1{sourcemeta::jsontoolkit::get(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value_1), "foo");
}

TEST(CATEGORY, array_comma_within_string_element) {
  const auto document{sourcemeta::jsontoolkit::parse("[\"foo,bar\"]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const auto &value_1{sourcemeta::jsontoolkit::get(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value_1), "foo,bar");
}

TEST(CATEGORY, boolean_array_within_string_element) {
  const auto document{sourcemeta::jsontoolkit::parse("[\"[false,true]\"]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const auto &value_1{sourcemeta::jsontoolkit::get(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value_1), "[false,true]");
}

TEST(CATEGORY, array_escaped_quote_within_string_element) {
  const auto document{sourcemeta::jsontoolkit::parse("[\"foo\\\"bar\"]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const auto &value_1{sourcemeta::jsontoolkit::get(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value_1), "foo\"bar");
}

TEST(CATEGORY, array_single_positive_integer_element) {
  const auto document{sourcemeta::jsontoolkit::parse("[4]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const auto &value_1{sourcemeta::jsontoolkit::get(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(value_1), 4);
}

TEST(CATEGORY, array_single_negative_integer_element) {
  const auto document{sourcemeta::jsontoolkit::parse("[-4]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const auto &value_1{sourcemeta::jsontoolkit::get(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(value_1), -4);
}

TEST(CATEGORY, array_single_positive_real_number_element) {
  const auto document{sourcemeta::jsontoolkit::parse("[4.3]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const auto &value_1{sourcemeta::jsontoolkit::get(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(value_1), 4.3);
}

TEST(CATEGORY, array_single_negative_real_number_element) {
  const auto document{sourcemeta::jsontoolkit::parse("[-4.3]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const auto &value_1{sourcemeta::jsontoolkit::get(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(value_1), -4.3);
}

TEST(CATEGORY, array_single_exponential_number_element) {
  const auto document{sourcemeta::jsontoolkit::parse("[3e2]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const auto &value_1{sourcemeta::jsontoolkit::get(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(value_1), 300.0);
}

TEST(CATEGORY, array_single_empty_object_element) {
  const auto document{sourcemeta::jsontoolkit::parse("[{}]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const auto &value_1{sourcemeta::jsontoolkit::get(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(value_1), 0);
}

TEST(CATEGORY, array_single_object_element_with_one_simple_key) {
  const auto document{sourcemeta::jsontoolkit::parse("[{\"foo\":1}]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const auto &value_1{sourcemeta::jsontoolkit::get(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(value_1), 1);
  const auto &subvalue_1{sourcemeta::jsontoolkit::get(value_1, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(subvalue_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(subvalue_1), 1);
}

TEST(CATEGORY, array_single_object_element_with_two_simple_keys) {
  const auto document{
      sourcemeta::jsontoolkit::parse("[{\"foo\":1,\"bar\":2}]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const auto &value_1{sourcemeta::jsontoolkit::get(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(value_1), 2);
  const auto &subvalue_1{sourcemeta::jsontoolkit::get(value_1, "foo")};
  const auto &subvalue_2{sourcemeta::jsontoolkit::get(value_1, "bar")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(subvalue_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(subvalue_2));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(subvalue_1), 1);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(subvalue_2), 2);
}

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

TEST(CATEGORY, array_contains_string_key_true) {
  const auto document{sourcemeta::jsontoolkit::parse("[ \"foo\", \"bar\" ]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::contains(document, "bar"));
}

TEST(CATEGORY, array_contains_string_key_false) {
  const auto document{sourcemeta::jsontoolkit::parse("[ \"foo\", \"bar\" ]")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::contains(document, "baz"));
}

TEST(CATEGORY, array_equality_with_padding) {
  const auto left{sourcemeta::jsontoolkit::parse("[1,2,3]")};
  const auto right{sourcemeta::jsontoolkit::parse("   [ 1  , 2,  3 ]")};
  const auto extra{sourcemeta::jsontoolkit::parse(" [1,2,2]")};
  EXPECT_EQ(left, right);
  EXPECT_FALSE(left == extra);
  EXPECT_FALSE(right == extra);
}
