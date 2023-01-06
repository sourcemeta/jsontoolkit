#include <gtest/gtest.h>
#include <jsontoolkit/json/read.h>
#include <sstream> // std::istringstream
#include <utility> // std::move

TEST(JSON, parse_from_stream) {
  std::istringstream stream{"true"};
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(stream)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(document));
}

TEST(JSON, is_boolean_true) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("true")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
}

TEST(JSON, empty_array_string) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
}

TEST(JSON, empty_array_with_inner_space) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[        ]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
}

TEST(JSON, array_parse_deep_success) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[true]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const sourcemeta::jsontoolkit::Value &value{
      sourcemeta::jsontoolkit::at(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(value));
}

TEST(JSON, array_single_element_with_inner_space) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[    true    ]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const sourcemeta::jsontoolkit::Value &value{
      sourcemeta::jsontoolkit::at(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(value));
}

TEST(JSON, array_single_element_with_padding) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("   [ true ]   ")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const sourcemeta::jsontoolkit::Value &value{
      sourcemeta::jsontoolkit::at(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(value));
}

TEST(JSON, array_two_elements_with_spacing) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[   true  ,   false   ]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  const sourcemeta::jsontoolkit::Value &value_1{
      sourcemeta::jsontoolkit::at(document, 0)};
  const sourcemeta::jsontoolkit::Value &value_2{
      sourcemeta::jsontoolkit::at(document, 1)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(value_1));
  EXPECT_FALSE(sourcemeta::jsontoolkit::to_boolean(value_2));
}

TEST(JSON, one_level_nested_array) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[[true],false]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  const sourcemeta::jsontoolkit::Value &value_1{
      sourcemeta::jsontoolkit::at(document, 0)};
  const sourcemeta::jsontoolkit::Value &value_2{
      sourcemeta::jsontoolkit::at(document, 1)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(value_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(value_2));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(value_1), 1);
  const sourcemeta::jsontoolkit::Value &subvalue_1{
      sourcemeta::jsontoolkit::at(value_1, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(subvalue_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(subvalue_1));
  EXPECT_FALSE(sourcemeta::jsontoolkit::to_boolean(value_2));
}

TEST(JSON, one_level_nested_array_with_padding) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("  [  [ true  ]  ,  false  ]  ")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  const sourcemeta::jsontoolkit::Value &value_1{
      sourcemeta::jsontoolkit::at(document, 0)};
  const sourcemeta::jsontoolkit::Value &value_2{
      sourcemeta::jsontoolkit::at(document, 1)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(value_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(value_2));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(value_1), 1);
  const sourcemeta::jsontoolkit::Value &subvalue_1{
      sourcemeta::jsontoolkit::at(value_1, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(subvalue_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(subvalue_1));
  EXPECT_FALSE(sourcemeta::jsontoolkit::to_boolean(value_2));
}

TEST(JSON, two_levels_nested_array) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[true,[false,[true]]]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  const sourcemeta::jsontoolkit::Value &value_1{
      sourcemeta::jsontoolkit::at(document, 0)};
  const sourcemeta::jsontoolkit::Value &value_2{
      sourcemeta::jsontoolkit::at(document, 1)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(value_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(value_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(value_2));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(value_2), 2);
  const sourcemeta::jsontoolkit::Value &subvalue_1{
      sourcemeta::jsontoolkit::at(value_2, 0)};
  const sourcemeta::jsontoolkit::Value &subvalue_2{
      sourcemeta::jsontoolkit::at(value_2, 1)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(subvalue_1));
  EXPECT_FALSE(sourcemeta::jsontoolkit::to_boolean(subvalue_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(subvalue_2));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(subvalue_2), 1);
  const sourcemeta::jsontoolkit::Value &subsubvalue_1{
      sourcemeta::jsontoolkit::at(subvalue_2, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(subsubvalue_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(subsubvalue_1));
}

TEST(JSON, two_levels_nested_array_with_padding) {
  const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse(
      "  [  true , [  false  , [ true ]  ]  ] ")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  const sourcemeta::jsontoolkit::Value &value_1{
      sourcemeta::jsontoolkit::at(document, 0)};
  const sourcemeta::jsontoolkit::Value &value_2{
      sourcemeta::jsontoolkit::at(document, 1)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(value_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(value_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(value_2));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(value_2), 2);
  const sourcemeta::jsontoolkit::Value &subvalue_1{
      sourcemeta::jsontoolkit::at(value_2, 0)};
  const sourcemeta::jsontoolkit::Value &subvalue_2{
      sourcemeta::jsontoolkit::at(value_2, 1)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(subvalue_1));
  EXPECT_FALSE(sourcemeta::jsontoolkit::to_boolean(subvalue_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(subvalue_2));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(subvalue_2), 1);
  const sourcemeta::jsontoolkit::Value &subsubvalue_1{
      sourcemeta::jsontoolkit::at(subvalue_2, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(subsubvalue_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(subsubvalue_1));
}

TEST(JSON, array_of_single0_string) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[\"foo\"]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const sourcemeta::jsontoolkit::Value &value_1{
      sourcemeta::jsontoolkit::at(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value_1), "foo");
}

TEST(JSON, array_comma_within_string_element) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[\"foo,bar\"]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const sourcemeta::jsontoolkit::Value &value_1{
      sourcemeta::jsontoolkit::at(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value_1), "foo,bar");
}

TEST(JSON, boolean_array_within_string_element) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[\"[false,true]\"]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const sourcemeta::jsontoolkit::Value &value_1{
      sourcemeta::jsontoolkit::at(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value_1), "[false,true]");
}

TEST(JSON, array_escaped_quote_within_string_element) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[\"foo\\\"bar\"]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const sourcemeta::jsontoolkit::Value &value_1{
      sourcemeta::jsontoolkit::at(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value_1), "foo\"bar");
}

TEST(JSON, array_single_positive_integer_element) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[4]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const sourcemeta::jsontoolkit::Value &value_1{
      sourcemeta::jsontoolkit::at(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(value_1), 4);
}

TEST(JSON, array_single_negative_integer_element) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[-4]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const sourcemeta::jsontoolkit::Value &value_1{
      sourcemeta::jsontoolkit::at(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(value_1), -4);
}

TEST(JSON, array_single_positive_real_number_element) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[4.3]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const sourcemeta::jsontoolkit::Value &value_1{
      sourcemeta::jsontoolkit::at(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(value_1), 4.3);
}

TEST(JSON, array_single_negative_real_number_element) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[-4.3]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const sourcemeta::jsontoolkit::Value &value_1{
      sourcemeta::jsontoolkit::at(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(value_1), -4.3);
}

TEST(JSON, array_single_exponential_number_element) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[3e2]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const sourcemeta::jsontoolkit::Value &value_1{
      sourcemeta::jsontoolkit::at(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(value_1), 300.0);
}

TEST(JSON, array_single_empty_object_element) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[{}]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const sourcemeta::jsontoolkit::Value &value_1{
      sourcemeta::jsontoolkit::at(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(value_1), 0);
}

TEST(JSON, array_single_object_element_with_one_simple_key) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[{\"foo\":1}]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const sourcemeta::jsontoolkit::Value &value_1{
      sourcemeta::jsontoolkit::at(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(value_1), 1);
  const sourcemeta::jsontoolkit::Value &subvalue_1{
      sourcemeta::jsontoolkit::at(value_1, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(subvalue_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(subvalue_1), 1);
}

TEST(JSON, array_single_object_element_with_two_simple_keys) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[{\"foo\":1,\"bar\":2}]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const sourcemeta::jsontoolkit::Value &value_1{
      sourcemeta::jsontoolkit::at(document, 0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(value_1));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(value_1), 2);
  const sourcemeta::jsontoolkit::Value &subvalue_1{
      sourcemeta::jsontoolkit::at(value_1, "foo")};
  const sourcemeta::jsontoolkit::Value &subvalue_2{
      sourcemeta::jsontoolkit::at(value_1, "bar")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(subvalue_1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(subvalue_2));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(subvalue_1), 1);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(subvalue_2), 2);
}

TEST(JSON, array_contains_string_key_true) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[ \"foo\", \"bar\" ]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::contains(
      document, sourcemeta::jsontoolkit::from("bar")));
}

TEST(JSON, array_contains_string_key_false) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[ \"foo\", \"bar\" ]")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::contains(
      document, sourcemeta::jsontoolkit::from("baz")));
}

TEST(JSON, array_equality_with_padding) {
  const sourcemeta::jsontoolkit::JSON left{
      sourcemeta::jsontoolkit::parse("[1,2,3]")};
  const sourcemeta::jsontoolkit::JSON right{
      sourcemeta::jsontoolkit::parse("   [ 1  , 2,  3 ]")};
  const sourcemeta::jsontoolkit::JSON extra{
      sourcemeta::jsontoolkit::parse(" [1,2,2]")};
  EXPECT_EQ(left, right);
  EXPECT_FALSE(left == extra);
  EXPECT_FALSE(right == extra);
}

TEST(JSON, from_real_number) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(3.4)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 3.4);
}

TEST(JSON, from_real_integral_number) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(3.0)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 3.0);
}

TEST(JSON, true_bool) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(document));
  EXPECT_EQ(document, true);
}

TEST(JSON, false_bool) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(false)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::to_boolean(document));
  EXPECT_EQ(document, false);
}

TEST(JSON, true_string) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("true")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(document));
  EXPECT_EQ(document, true);
}

TEST(JSON, false_string) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("false")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::to_boolean(document));
  EXPECT_EQ(document, false);
}

TEST(JSON, true_string_padded) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("  true   ")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(document));
  EXPECT_EQ(document, true);
}

TEST(JSON, false_string_padded) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("   false   ")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::to_boolean(document));
  EXPECT_EQ(document, false);
}

TEST(JSON, false_literal_equality) {
  const sourcemeta::jsontoolkit::JSON left{
      sourcemeta::jsontoolkit::from(false)};
  const sourcemeta::jsontoolkit::JSON right{
      sourcemeta::jsontoolkit::from(false)};
  const sourcemeta::jsontoolkit::JSON extra{
      sourcemeta::jsontoolkit::from(true)};
  EXPECT_EQ(left, right);
  EXPECT_FALSE(left == extra);
  EXPECT_FALSE(right == extra);
}

TEST(JSON, true_literal_equality) {
  const sourcemeta::jsontoolkit::JSON left{sourcemeta::jsontoolkit::from(true)};
  const sourcemeta::jsontoolkit::JSON right{
      sourcemeta::jsontoolkit::from(true)};
  const sourcemeta::jsontoolkit::JSON extra{
      sourcemeta::jsontoolkit::from(false)};
  EXPECT_EQ(left, right);
  EXPECT_FALSE(left == extra);
  EXPECT_FALSE(right == extra);
}

TEST(JSON, false_equality_with_padding) {
  const sourcemeta::jsontoolkit::JSON left{
      sourcemeta::jsontoolkit::parse("false")};
  const sourcemeta::jsontoolkit::JSON right{
      sourcemeta::jsontoolkit::parse("  false  ")};
  const sourcemeta::jsontoolkit::JSON extra{
      sourcemeta::jsontoolkit::parse("true")};
  EXPECT_EQ(left, right);
  EXPECT_FALSE(left == extra);
  EXPECT_FALSE(right == extra);
}

TEST(JSON, true_equality_with_padding) {
  const sourcemeta::jsontoolkit::JSON left{
      sourcemeta::jsontoolkit::parse("true")};
  const sourcemeta::jsontoolkit::JSON right{
      sourcemeta::jsontoolkit::parse("  true  ")};
  const sourcemeta::jsontoolkit::JSON extra{
      sourcemeta::jsontoolkit::parse("false")};
  EXPECT_EQ(left, right);
  EXPECT_FALSE(left == extra);
  EXPECT_FALSE(right == extra);
}

TEST(JSON, nullptr) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(nullptr)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_null(document));
}

TEST(JSON, null_parse_valid) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("null")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_null(document));
}

TEST(JSON, null_valid_with_padding) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("   null   ")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_null(document));
}

TEST(JSON, null_equality_with_literal) {
  const sourcemeta::jsontoolkit::JSON left{
      sourcemeta::jsontoolkit::from(nullptr)};
  const sourcemeta::jsontoolkit::JSON right{
      sourcemeta::jsontoolkit::from(nullptr)};
  const sourcemeta::jsontoolkit::JSON extra{
      sourcemeta::jsontoolkit::from(false)};
  EXPECT_EQ(left, right);
  EXPECT_FALSE(left == extra);
  EXPECT_FALSE(right == extra);
}

TEST(JSON, null_equality_with_padding) {
  const sourcemeta::jsontoolkit::JSON left{
      sourcemeta::jsontoolkit::parse("null")};
  const sourcemeta::jsontoolkit::JSON right{
      sourcemeta::jsontoolkit::parse("   null  ")};
  const sourcemeta::jsontoolkit::JSON extra{
      sourcemeta::jsontoolkit::from(false)};
  EXPECT_EQ(left, right);
  EXPECT_FALSE(left == extra);
  EXPECT_FALSE(right == extra);
}

TEST(JSON, string_integer_zero) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("0")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(document), 0);
  EXPECT_EQ(document, 0);
  EXPECT_EQ(document, 0.0);
}

TEST(JSON, string_integer_positive_single_digit_integer) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("3")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(document), 3);
  EXPECT_EQ(document, 3);
  EXPECT_EQ(document, 3.0);
}

TEST(JSON, string_integer_negative_single_digit_integer) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("-3")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(document), -3);
  EXPECT_EQ(document, -3);
  EXPECT_EQ(document, -3.0);
}

TEST(JSON, string_integer_positive_long_integer) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("12345")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(document), 12345);
  EXPECT_EQ(document, 12345);
  EXPECT_EQ(document, 12345.0);
}

TEST(JSON, string_integer_negative_long_integer) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("-12345")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(document), -12345);
  EXPECT_EQ(document, -12345);
  EXPECT_EQ(document, -12345.0);
}

TEST(JSON, string_integer_minus_zero) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("-0")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(document), 0);
  EXPECT_EQ(document, 0);
  EXPECT_EQ(document, 0.0);
}

TEST(JSON, trailing_zero_positive) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("1.50000")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 1.5);
  EXPECT_EQ(document, 1.5);
  EXPECT_FALSE(document == 1);
  EXPECT_FALSE(document == 2);
}

TEST(JSON, trailing_zero_negative) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("-1.50000")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -1.5);
  EXPECT_EQ(document, -1.5);
  EXPECT_FALSE(document == -1);
  EXPECT_FALSE(document == -2);
}

TEST(JSON, single_left_digit_positive_real) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("1.5")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 1.5);
  EXPECT_EQ(document, 1.5);
  EXPECT_FALSE(document == 1);
  EXPECT_FALSE(document == 2);
}

TEST(JSON, single_left_digit_negative_real) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("-1.5")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -1.5);
  EXPECT_EQ(document, -1.5);
  EXPECT_FALSE(document == -1);
  EXPECT_FALSE(document == -2);
}

TEST(JSON, leading_decimal_zero) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("1.0005")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 1.0005);
  EXPECT_EQ(document, 1.0005);
  EXPECT_FALSE(document == -1);
  EXPECT_FALSE(document == -2);
}

TEST(JSON, multi_left_digit_positive_real) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("1234.5")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 1234.5);
  EXPECT_EQ(document, 1234.5);
  EXPECT_FALSE(document == 1234);
  EXPECT_FALSE(document == 1235);
}

TEST(JSON, multi_left_digit_negative_real) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("-1234.5")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -1234.5);
  EXPECT_EQ(document, -1234.5);
  EXPECT_FALSE(document == -1234);
  EXPECT_FALSE(document == -1235);
}

TEST(JSON, long_positive_real) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("1234.56789")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 1234.56789);
  EXPECT_EQ(document, 1234.56789);
  EXPECT_FALSE(document == 1234);
  EXPECT_FALSE(document == 1235);
}

TEST(JSON, long_negative_real) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("-1234.56789")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -1234.56789);
  EXPECT_EQ(document, -1234.56789);
  EXPECT_FALSE(document == -1235);
  EXPECT_FALSE(document == -1234);
}

TEST(JSON, single_digit_positive_real_integer) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("1.0")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 1.0);
  EXPECT_EQ(document, 1.0);
  EXPECT_EQ(document, 1);
}

TEST(JSON, single_digit_positive_real_integer_trailing_zero) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("1.0000000")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 1.0);
  EXPECT_EQ(document, 1.0);
  EXPECT_EQ(document, 1);
}

TEST(JSON, single_digit_negative_real_integer) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("-1.0")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -1.0);
  EXPECT_EQ(document, -1.0);
  EXPECT_EQ(document, -1);
}

TEST(JSON, single_digit_negative_real_integer_trailing_zero) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("-1.0000000")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -1.0);
  EXPECT_EQ(document, -1);
}

TEST(JSON, large_positive_exponential_number) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("1.0e28")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 1e28);
}

TEST(JSON, leading_zero_real_number) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("-0.2")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -0.2);
}

TEST(JSON, large_negative_exponential_number) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("-1.0e28")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -1e28);
}

TEST(JSON, large_positive_exponential_number_with_plus_exponent) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("1.0e+28")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 1e28);
}

TEST(JSON, large_negative_exponential_number_with_plus_exponent) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("-1.0e+28")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -1e28);
}

TEST(JSON, exponential_notation_plus_after_e) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("3E+2")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 300.0);
  EXPECT_EQ(document, 300);
  EXPECT_EQ(document, 300.0);
}

// From https://en.wikipedia.org/wiki/Scientific_notation

TEST(JSON, exponential_notation_integer_1_upper) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("2E0")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 2.0);
  EXPECT_EQ(document, 2);
  EXPECT_EQ(document, 2.0);
}

TEST(JSON, exponential_notation_integer_2_upper) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("3E2")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 300.0);
  EXPECT_EQ(document, 300);
  EXPECT_EQ(document, 300.0);
}

TEST(JSON, exponential_notation_integer_3_upper) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("4.321768E3")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 4321.768);
  EXPECT_FALSE(document == 4321);
  EXPECT_FALSE(document == 4322);
}

TEST(JSON, exponential_notation_integer_4_upper) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("-5.3E4")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -53000);
  EXPECT_EQ(document, -53000);
}

TEST(JSON, exponential_notation_integer_5_upper) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("6.72E9")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 6720000000);
}

TEST(JSON, exponential_notation_integer_6_upper) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("2E-1")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 0.2);
  EXPECT_FALSE(document == 0);
  EXPECT_FALSE(document == 1);
}

TEST(JSON, exponential_notation_integer_7_upper) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("9.87E2")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 987);
  EXPECT_EQ(document, 987);
}

TEST(JSON, exponential_notation_integer_8_upper) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("7.51E-9")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 0.00000000751);
  EXPECT_FALSE(document == 0);
  EXPECT_FALSE(document == 1);
}

TEST(JSON, exponential_notation_integer_1_lower) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("2e0")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 2.0);
  EXPECT_EQ(document, 2);
}

TEST(JSON, exponential_notation_integer_2_lower) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("3e2")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 300.0);
  EXPECT_EQ(document, 300);
}

TEST(JSON, exponential_notation_integer_3_lower) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("4.321768e3")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 4321.768);
  EXPECT_FALSE(document == 4321);
  EXPECT_FALSE(document == 4322);
}

TEST(JSON, exponential_notation_integer_4_lower) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("-5.3e4")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -53000);
  EXPECT_EQ(document, -53000);
}

TEST(JSON, exponential_notation_integer_5_lower) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("6.72e9")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 6720000000);
}

TEST(JSON, exponential_notation_integer_6_lower) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("2e-1")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 0.2);
  EXPECT_FALSE(document == 0);
  EXPECT_FALSE(document == 1);
}

TEST(JSON, exponential_notation_integer_7_lower) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("9.87e2")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 987);
  EXPECT_EQ(document, 987);
}

TEST(JSON, exponential_notation_integer_8_lower) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("7.51e-9")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 0.00000000751);
  EXPECT_FALSE(document == 0);
  EXPECT_FALSE(document == 1);
}

TEST(JSON, exponential_notation_integer_1_real) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("2.0e0")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 2.0);
  EXPECT_EQ(document, 2);
}

TEST(JSON, exponential_notation_integer_2_real) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("3.0e2")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 300.0);
  EXPECT_EQ(document, 300);
}

TEST(JSON, exponential_notation_integer_3_real) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("2.0e-1")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 0.2);
  EXPECT_FALSE(document == 0);
  EXPECT_FALSE(document == 1);
}

TEST(JSON, integer_equality_with_padding) {
  const sourcemeta::jsontoolkit::JSON left{sourcemeta::jsontoolkit::parse("5")};
  const sourcemeta::jsontoolkit::JSON right{
      sourcemeta::jsontoolkit::parse("   5   ")};
  const sourcemeta::jsontoolkit::JSON extra{
      sourcemeta::jsontoolkit::parse("   5.1   ")};
  EXPECT_EQ(left, right);
  EXPECT_FALSE(left == extra);
  EXPECT_FALSE(right == extra);
}

TEST(JSON, real_equality_with_padding) {
  const sourcemeta::jsontoolkit::JSON left{
      sourcemeta::jsontoolkit::parse("5.4")};
  const sourcemeta::jsontoolkit::JSON right{
      sourcemeta::jsontoolkit::parse("   5.4   ")};
  const sourcemeta::jsontoolkit::JSON extra{
      sourcemeta::jsontoolkit::parse("   5   ")};
  EXPECT_EQ(left, right);
  EXPECT_FALSE(left == extra);
  EXPECT_FALSE(right == extra);
}

// JSON has no distinction between integers and reals
TEST(JSON, json_integer_json_real_equal) {
  const sourcemeta::jsontoolkit::JSON left{sourcemeta::jsontoolkit::parse("1")};
  const sourcemeta::jsontoolkit::JSON right{
      sourcemeta::jsontoolkit::parse("1.0")};
  EXPECT_EQ(left, right);
}

// JSON has no distinction between integers and reals
TEST(JSON, json_real_json_integer_equal) {
  const sourcemeta::jsontoolkit::JSON left{
      sourcemeta::jsontoolkit::parse("1.0")};
  const sourcemeta::jsontoolkit::JSON right{
      sourcemeta::jsontoolkit::parse("1")};
  EXPECT_EQ(left, right);
}

TEST(JSON, empty_object_string) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
}

TEST(JSON, blank_object_string) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{    }")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
}

TEST(JSON, blank_object_string_empty) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{    }")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::empty(document));
}

TEST(JSON, non_blank_object_string_not_empty) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\":1}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::empty(document));
}

TEST(JSON, object_parse_deep_success) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\":true}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(value1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(value1));
}

TEST(JSON, minified_one_true_boolean_element) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\":true}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(value1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(value1));
}

TEST(JSON, minified_one_false_boolean_element) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\":false}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(value1));
  EXPECT_FALSE(sourcemeta::jsontoolkit::to_boolean(value1));
}

TEST(JSON, minified_two_boolean_values) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\":true,\"bar\":false}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(value1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(value1));
  const sourcemeta::jsontoolkit::Value &value2{
      sourcemeta::jsontoolkit::at(document, "bar")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(value2));
  EXPECT_FALSE(sourcemeta::jsontoolkit::to_boolean(value2));
}

TEST(JSON, object_minified_one_array_element) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\":[true,false]}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(value1), 2);
  const sourcemeta::jsontoolkit::Value &subvalue1{
      sourcemeta::jsontoolkit::at(value1, 0)};
  const sourcemeta::jsontoolkit::Value &subvalue2{
      sourcemeta::jsontoolkit::at(value1, 1)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(subvalue1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(subvalue2));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(subvalue1));
  EXPECT_FALSE(sourcemeta::jsontoolkit::to_boolean(subvalue2));
}

TEST(JSON, object_string_value_with_comma) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\":\"bar,baz\"}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value1), "bar,baz");
}

TEST(JSON, object_string_value_with_escaped_quote) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\":\"bar\\\"baz\"}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value1), "bar\"baz");
}

TEST(JSON, empty_string_key) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"\":\"foo\"}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, ""));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value1), "foo");
}

TEST(JSON, string_key_with_comma) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo,bar\":\"baz\"}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo,bar"));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "foo,bar")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value1), "baz");
}

TEST(JSON, string_key_with_space) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo bar\":\"baz\"}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo bar"));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "foo bar")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value1), "baz");
}

TEST(JSON, string_value_with_stringified_object) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\":\"{\\\"x\\\":1}\"}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value1), "{\"x\":1}");
}

TEST(JSON, one_true_boolean_element_with_space) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("    {   \"foo\"   :   true  }    ")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(value1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(value1));
}

TEST(JSON, two_boolean_values_with_space) {
  const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse(
      "{   \"foo\"  :   true    ,     \"bar\"   :   false}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(value1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(value1));
  const sourcemeta::jsontoolkit::Value &value2{
      sourcemeta::jsontoolkit::at(document, "bar")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(value2));
  EXPECT_FALSE(sourcemeta::jsontoolkit::to_boolean(value2));
}

TEST(JSON, one_array_element_with_space) {
  const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse(
      "{   \"foo\"   :  [  true  ,  false   ]   }")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(value1), 2);
  const sourcemeta::jsontoolkit::Value &subvalue1{
      sourcemeta::jsontoolkit::at(value1, 0)};
  const sourcemeta::jsontoolkit::Value &subvalue2{
      sourcemeta::jsontoolkit::at(value1, 1)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(subvalue1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(subvalue1));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(subvalue2));
  EXPECT_FALSE(sourcemeta::jsontoolkit::to_boolean(subvalue2));
}

TEST(JSON, minified_nested_object) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\":{\"bar\":true}}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(value1), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(value1, "bar"));
}

TEST(JSON, empty_nested_object_with_new_line_before_end) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"x\":{}\n}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "x"));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "x")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(value1), 0);
}

TEST(JSON, object_equality_with_padding) {
  const sourcemeta::jsontoolkit::JSON left{
      sourcemeta::jsontoolkit::parse("{\"foo\":1}")};
  const sourcemeta::jsontoolkit::JSON right{
      sourcemeta::jsontoolkit::parse("  { \"foo\"   : 1 } ")};
  const sourcemeta::jsontoolkit::JSON extra{
      sourcemeta::jsontoolkit::parse(" { \"fo\":1 }")};
  EXPECT_EQ(left, right);
  EXPECT_FALSE(left == extra);
  EXPECT_FALSE(right == extra);
}

TEST(JSON, empty_string) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("\"\"")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "");
}

TEST(JSON, string_parse_success) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("\"foo\"")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 3);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "foo");
}

TEST(JSON, string_parse_non_empty) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("\"foo\"")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 3);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "foo");
}

TEST(JSON, string_parse_padded) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("   \"foo\"    ")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 3);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "foo");
}

TEST(JSON, string_parse_padded_internal) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("\"  foo  \"")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 7);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "  foo  ");
}

TEST(JSON, string_escaped_quotes) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("\"\\\"foo\\\"\"")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 5);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "\"foo\"");
}

TEST(JSON, string_escaped_reverse_solidus) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("\"foo\\\\bar\"")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 7);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "foo\\bar");
}

TEST(JSON, string_escaped_solidus) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("\"foo\\/bar\"")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 7);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "foo/bar");
}

TEST(JSON, string_escaped_backspace) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("\"foo\\bbar\"")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 7);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "foo\bbar");
}

TEST(JSON, string_escaped_form_feed) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("\"foo\\fbar\"")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 7);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "foo\fbar");
}

TEST(JSON, string_escaped_line_feed) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("\"foo\\nbar\"")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 7);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "foo\nbar");
}

TEST(JSON, string_escaped_carriage_return) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("\"foo\\rbar\"")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 7);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "foo\rbar");
}

TEST(JSON, string_escaped_tab) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("\"foo\\tbar\"")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 7);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "foo\tbar");
}

TEST(JSON, string_unicode_code_points) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("\"\\u002F\"")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "\u002F");
}

TEST(JSON, string_unicode_code_point_equality) {
  const sourcemeta::jsontoolkit::JSON document1{
      sourcemeta::jsontoolkit::parse("\"\\u002F\"")};
  const sourcemeta::jsontoolkit::JSON document2{
      sourcemeta::jsontoolkit::parse("\"\\u002f\"")};
  const sourcemeta::jsontoolkit::JSON document3{
      sourcemeta::jsontoolkit::parse("\"\\/\"")};
  const sourcemeta::jsontoolkit::JSON document4{
      sourcemeta::jsontoolkit::parse("\"/\"")};
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document1),
            sourcemeta::jsontoolkit::to_string(document2));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document2),
            sourcemeta::jsontoolkit::to_string(document3));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document3),
            sourcemeta::jsontoolkit::to_string(document4));
}

TEST(JSON, string_equality_with_padding) {
  const sourcemeta::jsontoolkit::JSON left{
      sourcemeta::jsontoolkit::parse("\"foo\"")};
  const sourcemeta::jsontoolkit::JSON right{
      sourcemeta::jsontoolkit::parse("  \"foo\"  ")};
  const sourcemeta::jsontoolkit::JSON extra{
      sourcemeta::jsontoolkit::parse("\"fooo\"")};
  EXPECT_EQ(left, right);
  EXPECT_FALSE(left == extra);
  EXPECT_FALSE(right == extra);
}

TEST(JSON, to_string_not_modify_result) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("\"foo\"")};
  sourcemeta::jsontoolkit::to_string(document)[0] = 'x';
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "foo");
}

TEST(JSON, const_array_front) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  const sourcemeta::jsontoolkit::Value &front{
      sourcemeta::jsontoolkit::front(document)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(front));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(front), 1);
}

TEST(JSON, const_array_back) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  const sourcemeta::jsontoolkit::Value &back{
      sourcemeta::jsontoolkit::back(document)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(back));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(back), 3);
}

TEST(JSON, array_front) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  sourcemeta::jsontoolkit::Value &front{
      sourcemeta::jsontoolkit::front(document)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(front));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(front), 1);
}

TEST(JSON, array_back) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  sourcemeta::jsontoolkit::Value &back{sourcemeta::jsontoolkit::back(document)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(back));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(back), 3);
}

TEST(JSON, make_object_top_level) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::make_object()};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
}

TEST(JSON, make_array_top_level) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::make_array()};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
}
