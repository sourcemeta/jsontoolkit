#include <gtest/gtest.h>
#include <jsontoolkit/json.h>
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

TEST(CATEGORY, true_bool) {
  const auto document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(document));
  EXPECT_EQ(document, true);
}

TEST(CATEGORY, false_bool) {
  const auto document{sourcemeta::jsontoolkit::from(false)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::to_boolean(document));
  EXPECT_EQ(document, false);
}

TEST(CATEGORY, true_string) {
  const auto document{sourcemeta::jsontoolkit::parse("true")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(document));
  EXPECT_EQ(document, true);
}

TEST(CATEGORY, false_string) {
  const auto document{sourcemeta::jsontoolkit::parse("false")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::to_boolean(document));
  EXPECT_EQ(document, false);
}

TEST(CATEGORY, true_string_padded) {
  const auto document{sourcemeta::jsontoolkit::parse("  true   ")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(document));
  EXPECT_EQ(document, true);
}

TEST(CATEGORY, false_string_padded) {
  const auto document{sourcemeta::jsontoolkit::parse("   false   ")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::to_boolean(document));
  EXPECT_EQ(document, false);
}

TEST(CATEGORY, true_more_than_needed) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("truee"), std::domain_error);
}

TEST(CATEGORY, true_incomplete_1) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("tru"), std::domain_error);
}

TEST(CATEGORY, true_incomplete_2) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("tr"), std::domain_error);
}

TEST(CATEGORY, true_incomplete_3) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("t"), std::domain_error);
}

TEST(CATEGORY, false_more_than_needed) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("falsee"), std::domain_error);
}

TEST(CATEGORY, false_incomplete_1) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("fals"), std::domain_error);
}

TEST(CATEGORY, false_incomplete_2) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("fal"), std::domain_error);
}

TEST(CATEGORY, false_incomplete_3) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("fa"), std::domain_error);
}

TEST(CATEGORY, false_incomplete_4) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("f"), std::domain_error);
}

TEST(CATEGORY, false_literal_equality) {
  const auto left{sourcemeta::jsontoolkit::from(false)};
  const auto right{sourcemeta::jsontoolkit::from(false)};
  const auto extra{sourcemeta::jsontoolkit::from(true)};
  EXPECT_EQ(left, right);
  EXPECT_FALSE(left == extra);
  EXPECT_FALSE(right == extra);
}

TEST(CATEGORY, true_literal_equality) {
  const auto left{sourcemeta::jsontoolkit::from(true)};
  const auto right{sourcemeta::jsontoolkit::from(true)};
  const auto extra{sourcemeta::jsontoolkit::from(false)};
  EXPECT_EQ(left, right);
  EXPECT_FALSE(left == extra);
  EXPECT_FALSE(right == extra);
}

TEST(CATEGORY, false_equality_with_padding) {
  const auto left{sourcemeta::jsontoolkit::parse("false")};
  const auto right{sourcemeta::jsontoolkit::parse("  false  ")};
  const auto extra{sourcemeta::jsontoolkit::parse("true")};
  EXPECT_EQ(left, right);
  EXPECT_FALSE(left == extra);
  EXPECT_FALSE(right == extra);
}

TEST(CATEGORY, true_equality_with_padding) {
  const auto left{sourcemeta::jsontoolkit::parse("true")};
  const auto right{sourcemeta::jsontoolkit::parse("  true  ")};
  const auto extra{sourcemeta::jsontoolkit::parse("false")};
  EXPECT_EQ(left, right);
  EXPECT_FALSE(left == extra);
  EXPECT_FALSE(right == extra);
}

TEST(CATEGORY, nullptr) {
  const auto document{sourcemeta::jsontoolkit::from(nullptr)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_null(document));
}

TEST(CATEGORY, null_parse_valid) {
  const auto document{sourcemeta::jsontoolkit::parse("null")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_null(document));
}

TEST(CATEGORY, null_valid_with_padding) {
  const auto document{sourcemeta::jsontoolkit::parse("   null   ")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_null(document));
}

TEST(CATEGORY, null_more_than_needed) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("nulll"), std::domain_error);
}

TEST(CATEGORY, null_incomplete_1) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("nul"), std::domain_error);
}

TEST(CATEGORY, null_incomplete_2) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("nu"), std::domain_error);
}

TEST(CATEGORY, null_incomplete_3) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("n"), std::domain_error);
}

TEST(CATEGORY, null_equality_with_literal) {
  const auto left{sourcemeta::jsontoolkit::from(nullptr)};
  const auto right{sourcemeta::jsontoolkit::from(nullptr)};
  const auto extra{sourcemeta::jsontoolkit::from(false)};
  EXPECT_EQ(left, right);
  EXPECT_FALSE(left == extra);
  EXPECT_FALSE(right == extra);
}

TEST(CATEGORY, null_equality_with_padding) {
  const auto left{sourcemeta::jsontoolkit::parse("null")};
  const auto right{sourcemeta::jsontoolkit::parse("   null  ")};
  const auto extra{sourcemeta::jsontoolkit::from(false)};
  EXPECT_EQ(left, right);
  EXPECT_FALSE(left == extra);
  EXPECT_FALSE(right == extra);
}

TEST(CATEGORY, set_null) {
  auto document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_null(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::set(document, nullptr);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_null(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_boolean(document));
}

TEST(CATEGORY, set_negative_integer) {
  auto document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::set(document, -4);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_real(document));
}

TEST(CATEGORY, set_negative_real) {
  auto document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::set(document, -4.3);
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
}

TEST(CATEGORY, set_negative_integral_real) {
  auto document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::set(document, -4.0);
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
}

TEST(CATEGORY, set_positive_integer) {
  auto document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::set(document, 4);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_real(document));
}

TEST(CATEGORY, set_positive_real) {
  auto document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::set(document, 4.3);
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
}

TEST(CATEGORY, set_positive_integral_real) {
  auto document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::set(document, 4.0);
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
}

TEST(CATEGORY, string_integer_zero) {
  const auto document{sourcemeta::jsontoolkit::parse("0")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(document), 0);
  EXPECT_EQ(document, 0);
  EXPECT_EQ(document, 0.0);
}

TEST(CATEGORY, string_integer_positive_single_digit_integer) {
  const auto document{sourcemeta::jsontoolkit::parse("3")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(document), 3);
  EXPECT_EQ(document, 3);
  EXPECT_EQ(document, 3.0);
}

TEST(CATEGORY, string_integer_negative_single_digit_integer) {
  const auto document{sourcemeta::jsontoolkit::parse("-3")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(document), -3);
  EXPECT_EQ(document, -3);
  EXPECT_EQ(document, -3.0);
}

TEST(CATEGORY, string_integer_positive_long_integer) {
  const auto document{sourcemeta::jsontoolkit::parse("12345")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(document), 12345);
  EXPECT_EQ(document, 12345);
  EXPECT_EQ(document, 12345.0);
}

TEST(CATEGORY, string_integer_negative_long_integer) {
  const auto document{sourcemeta::jsontoolkit::parse("-12345")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(document), -12345);
  EXPECT_EQ(document, -12345);
  EXPECT_EQ(document, -12345.0);
}

TEST(CATEGORY, string_integer_minus_zero) {
  const auto document{sourcemeta::jsontoolkit::parse("-0")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(document), 0);
  EXPECT_EQ(document, 0);
  EXPECT_EQ(document, 0.0);
}

TEST(CATEGORY, invalid_string_integer_trailing_minus) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("-0-"), std::domain_error);
}

TEST(CATEGORY, invalid_string_integer_trailing_character) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("-0x"), std::domain_error);
}

TEST(CATEGORY, invalid_minus_in_between_integer) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("123-45"), std::domain_error);
}

TEST(CATEGORY, invalid_double_minus) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("--123"), std::domain_error);
}

TEST(CATEGORY, two_zeroes) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("00"), std::domain_error);
}

TEST(CATEGORY, multiple_zeroes) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("000"), std::domain_error);
}

TEST(CATEGORY, leading_zero_with_one_digit_integer) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("01"), std::domain_error);
}

TEST(CATEGORY, leading_zero_with_two_digits_integer) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("012"), std::domain_error);
}

TEST(CATEGORY, leading_period) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse(".0"), std::domain_error);
}

TEST(CATEGORY, trailing_period) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("0."), std::domain_error);
}

TEST(CATEGORY, trailing_period_and_minus) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("0.-"), std::domain_error);
}

TEST(CATEGORY, double_minus_at_start) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("--5"), std::domain_error);
}

TEST(CATEGORY, leading_minus_and_period) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("-.0"), std::domain_error);
}

TEST(CATEGORY, multiple_leading_plus) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("++5"), std::domain_error);
}

TEST(CATEGORY, trailing_zero_positive) {
  const auto document{sourcemeta::jsontoolkit::parse("1.50000")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 1.5);
  EXPECT_EQ(document, 1.5);
  EXPECT_FALSE(document == 1);
  EXPECT_FALSE(document == 2);
}

TEST(CATEGORY, trailing_zero_negative) {
  const auto document{sourcemeta::jsontoolkit::parse("-1.50000")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -1.5);
  EXPECT_EQ(document, -1.5);
  EXPECT_FALSE(document == -1);
  EXPECT_FALSE(document == -2);
}

TEST(CATEGORY, single_left_digit_positive_real) {
  const auto document{sourcemeta::jsontoolkit::parse("1.5")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 1.5);
  EXPECT_EQ(document, 1.5);
  EXPECT_FALSE(document == 1);
  EXPECT_FALSE(document == 2);
}

TEST(CATEGORY, single_left_digit_negative_real) {
  const auto document{sourcemeta::jsontoolkit::parse("-1.5")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -1.5);
  EXPECT_EQ(document, -1.5);
  EXPECT_FALSE(document == -1);
  EXPECT_FALSE(document == -2);
}

TEST(CATEGORY, leading_decimal_zero) {
  const auto document{sourcemeta::jsontoolkit::parse("1.0005")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 1.0005);
  EXPECT_EQ(document, 1.0005);
  EXPECT_FALSE(document == -1);
  EXPECT_FALSE(document == -2);
}

TEST(CATEGORY, multi_left_digit_positive_real) {
  const auto document{sourcemeta::jsontoolkit::parse("1234.5")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 1234.5);
  EXPECT_EQ(document, 1234.5);
  EXPECT_FALSE(document == 1234);
  EXPECT_FALSE(document == 1235);
}

TEST(CATEGORY, multi_left_digit_negative_real) {
  const auto document{sourcemeta::jsontoolkit::parse("-1234.5")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -1234.5);
  EXPECT_EQ(document, -1234.5);
  EXPECT_FALSE(document == -1234);
  EXPECT_FALSE(document == -1235);
}

TEST(CATEGORY, long_positive_real) {
  const auto document{sourcemeta::jsontoolkit::parse("1234.56789")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 1234.56789);
  EXPECT_EQ(document, 1234.56789);
  EXPECT_FALSE(document == 1234);
  EXPECT_FALSE(document == 1235);
}

TEST(CATEGORY, long_negative_real) {
  const auto document{sourcemeta::jsontoolkit::parse("-1234.56789")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -1234.56789);
  EXPECT_EQ(document, -1234.56789);
  EXPECT_FALSE(document == -1235);
  EXPECT_FALSE(document == -1234);
}

TEST(CATEGORY, single_digit_positive_real_integer) {
  const auto document{sourcemeta::jsontoolkit::parse("1.0")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 1.0);
  EXPECT_EQ(document, 1.0);
  EXPECT_EQ(document, 1);
}

TEST(CATEGORY, single_digit_positive_real_integer_trailing_zero) {
  const auto document{sourcemeta::jsontoolkit::parse("1.0000000")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 1.0);
  EXPECT_EQ(document, 1.0);
  EXPECT_EQ(document, 1);
}

TEST(CATEGORY, single_digit_negative_real_integer) {
  const auto document{sourcemeta::jsontoolkit::parse("-1.0")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -1.0);
  EXPECT_EQ(document, -1.0);
  EXPECT_EQ(document, -1);
}

TEST(CATEGORY, single_digit_negative_real_integer_trailing_zero) {
  const auto document{sourcemeta::jsontoolkit::parse("-1.0000000")};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -1.0);
  EXPECT_EQ(document, -1);
}

TEST(CATEGORY, multiple_sibling_periods) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("123..56"), std::domain_error);
}

TEST(CATEGORY, multiple_separate_periods) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("12.34.56"), std::domain_error);
}

TEST(CATEGORY, string_integer_with_plus) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("+5"), std::domain_error);
}

TEST(CATEGORY, string_zero_with_plus) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("+0"), std::domain_error);
}

TEST(CATEGORY, negative_with_leading_zero) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("-05"), std::domain_error);
}

TEST(CATEGORY, negative_with_leading_zero_and_space) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("-0 5"), std::domain_error);
}

TEST(CATEGORY, leading_zero_positive_integer_number) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("02"), std::domain_error);
}

TEST(CATEGORY, leading_zero_negative_integer_number) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("-02"), std::domain_error);
}

TEST(CATEGORY, two_leading_zeroes_real_number) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("-00.2"), std::domain_error);
}

TEST(CATEGORY, multiple_leading_zeroes_real_number) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("-00000.2"), std::domain_error);
}

TEST(CATEGORY, large_positive_exponential_number) {
  const auto document{sourcemeta::jsontoolkit::parse("1.0e28")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 1e28);
}

TEST(CATEGORY, leading_zero_real_number) {
  const auto document{sourcemeta::jsontoolkit::parse("-0.2")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -0.2);
}

TEST(CATEGORY, large_negative_exponential_number) {
  const auto document{sourcemeta::jsontoolkit::parse("-1.0e28")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -1e28);
}

TEST(CATEGORY, large_positive_exponential_number_with_plus_exponent) {
  const auto document{sourcemeta::jsontoolkit::parse("1.0e+28")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 1e28);
}

TEST(CATEGORY, large_negative_exponential_number_with_plus_exponent) {
  const auto document{sourcemeta::jsontoolkit::parse("-1.0e+28")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -1e28);
}

TEST(CATEGORY, exponential_notation_error_double_upper_e) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3EE2"), std::domain_error);
}

TEST(CATEGORY, exponential_notation_error_double_lower_e) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3ee2"), std::domain_error);
}

TEST(CATEGORY, exponential_notation_error_double_mixed_e) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3eE2"), std::domain_error);
}

TEST(CATEGORY, exponential_notation_error_trailing_upper_e) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3E"), std::domain_error);
}

TEST(CATEGORY, exponential_notation_error_trailing_lower_e) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3e"), std::domain_error);
}

TEST(CATEGORY, exponential_notation_error_trailing_upper_e_minus) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3E-"), std::domain_error);
}

TEST(CATEGORY, exponential_notation_error_trailing_lower_e_minus) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3e-"), std::domain_error);
}

TEST(CATEGORY, exponential_notation_error_leading_upper_e) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("E2"), std::domain_error);
}

TEST(CATEGORY, exponential_notation_error_leading_lower_e) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("e2"), std::domain_error);
}

TEST(CATEGORY, exponential_notation_error_minus_leading_upper_e) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("-E2"), std::domain_error);
}

TEST(CATEGORY, exponential_notation_error_minus_leading_lower_e) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("-e2"), std::domain_error);
}

TEST(CATEGORY, exponential_notation_error_double_e_with_digits) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3E1E2"), std::domain_error);
}

TEST(CATEGORY, exponential_notation_error_left_e_space) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3 E2"), std::domain_error);
}

TEST(CATEGORY, exponential_notation_error_right_e_space) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3E 2"), std::domain_error);
}

TEST(CATEGORY, exponential_notation_error_double_minus_after_e) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3E--2"), std::domain_error);
}

TEST(CATEGORY, exponential_notation_error_double_minus_with_digits_after_e) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3E-2-2"), std::domain_error);
}

TEST(CATEGORY, exponential_notation_plus_after_e) {
  const auto document{sourcemeta::jsontoolkit::parse("3E+2")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 300.0);
  EXPECT_EQ(document, 300);
  EXPECT_EQ(document, 300.0);
}

// From https://en.wikipedia.org/wiki/Scientific_notation

TEST(CATEGORY, exponential_notation_integer_1_upper) {
  const auto document{sourcemeta::jsontoolkit::parse("2E0")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 2.0);
  EXPECT_EQ(document, 2);
  EXPECT_EQ(document, 2.0);
}

TEST(CATEGORY, exponential_notation_integer_2_upper) {
  const auto document{sourcemeta::jsontoolkit::parse("3E2")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 300.0);
  EXPECT_EQ(document, 300);
  EXPECT_EQ(document, 300.0);
}

TEST(CATEGORY, exponential_notation_integer_3_upper) {
  const auto document{sourcemeta::jsontoolkit::parse("4.321768E3")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 4321.768);
  EXPECT_FALSE(document == 4321);
  EXPECT_FALSE(document == 4322);
}

TEST(CATEGORY, exponential_notation_integer_4_upper) {
  const auto document{sourcemeta::jsontoolkit::parse("-5.3E4")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -53000);
  EXPECT_EQ(document, -53000);
}

// TODO: Enable this
// TEST(CATEGORY, exponential_notation_integer_5_upper) {
// const auto document{sourcemeta::jsontoolkit::parse("6.72E9")};
// EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
// EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
// EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 6720000000);
// EXPECT_EQ(document, 6720000000);
// }

TEST(CATEGORY, exponential_notation_integer_6_upper) {
  const auto document{sourcemeta::jsontoolkit::parse("2E-1")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 0.2);
  EXPECT_FALSE(document == 0);
  EXPECT_FALSE(document == 1);
}

TEST(CATEGORY, exponential_notation_integer_7_upper) {
  const auto document{sourcemeta::jsontoolkit::parse("9.87E2")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 987);
  EXPECT_EQ(document, 987);
}

TEST(CATEGORY, exponential_notation_integer_8_upper) {
  const auto document{sourcemeta::jsontoolkit::parse("7.51E-9")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 0.00000000751);
  EXPECT_FALSE(document == 0);
  EXPECT_FALSE(document == 1);
}

TEST(CATEGORY, exponential_notation_integer_1_lower) {
  const auto document{sourcemeta::jsontoolkit::parse("2e0")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 2.0);
  EXPECT_EQ(document, 2);
}

TEST(CATEGORY, exponential_notation_integer_2_lower) {
  const auto document{sourcemeta::jsontoolkit::parse("3e2")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 300.0);
  EXPECT_EQ(document, 300);
}

TEST(CATEGORY, exponential_notation_integer_3_lower) {
  const auto document{sourcemeta::jsontoolkit::parse("4.321768e3")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 4321.768);
  EXPECT_FALSE(document == 4321);
  EXPECT_FALSE(document == 4322);
}

TEST(CATEGORY, exponential_notation_integer_4_lower) {
  const auto document{sourcemeta::jsontoolkit::parse("-5.3e4")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -53000);
  EXPECT_EQ(document, -53000);
}

// TODO: Enable this
// TEST(CATEGORY, exponential_notation_integer_5_lower) {
// const auto document{sourcemeta::jsontoolkit::parse("6.72e9")};
// EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
// EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
// EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 6720000000);
// EXPECT_EQ(document, 6720000000);
// }

TEST(CATEGORY, exponential_notation_integer_6_lower) {
  const auto document{sourcemeta::jsontoolkit::parse("2e-1")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 0.2);
  EXPECT_FALSE(document == 0);
  EXPECT_FALSE(document == 1);
}

TEST(CATEGORY, exponential_notation_integer_7_lower) {
  const auto document{sourcemeta::jsontoolkit::parse("9.87e2")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 987);
  EXPECT_EQ(document, 987);
}

TEST(CATEGORY, exponential_notation_integer_8_lower) {
  const auto document{sourcemeta::jsontoolkit::parse("7.51e-9")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 0.00000000751);
  EXPECT_FALSE(document == 0);
  EXPECT_FALSE(document == 1);
}

TEST(CATEGORY, exponential_notation_integer_1_real) {
  const auto document{sourcemeta::jsontoolkit::parse("2.0e0")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 2.0);
  EXPECT_EQ(document, 2);
}

TEST(CATEGORY, exponential_notation_integer_2_real) {
  const auto document{sourcemeta::jsontoolkit::parse("3.0e2")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 300.0);
  EXPECT_EQ(document, 300);
}

TEST(CATEGORY, exponential_notation_integer_3_real) {
  const auto document{sourcemeta::jsontoolkit::parse("2.0e-1")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 0.2);
  EXPECT_FALSE(document == 0);
  EXPECT_FALSE(document == 1);
}

// TEST(CATEGORY, integer_equality_with_padding) {
// sourcemeta::jsontoolkit::JSON<std::string> left{"5")};
// left.parse();
// sourcemeta::jsontoolkit::JSON<std::string> right{"  5   ")};
// right.parse();
// sourcemeta::jsontoolkit::JSON<std::string> extra{"  5.1 ")};
// extra.parse();
// EXPECT_EQ(left, right);
// EXPECT_FALSE(left == extra);
// EXPECT_FALSE(right == extra);
// }

// TEST(CATEGORY, real_equality_with_padding) {
// sourcemeta::jsontoolkit::JSON<std::string> left{"5.4")};
// left.parse();
// sourcemeta::jsontoolkit::JSON<std::string> right{"  5.4   ")};
// right.parse();
// sourcemeta::jsontoolkit::JSON<std::string> extra{"  5 ")};
// extra.parse();
// EXPECT_EQ(left, right);
// EXPECT_FALSE(left == extra);
// EXPECT_FALSE(right == extra);
// }

// TEST(CATEGORY, stringify_positive_integer) {
// const auto document{sourcemeta::jsontoolkit::parse("54")};
// std::ostringstream stream;
// stream << document;
// EXPECT_EQ(stream.str(), "54");
// }

// TEST(CATEGORY, stringify_negative_integer) {
// const auto document{sourcemeta::jsontoolkit::parse("-54")};
// std::ostringstream stream;
// stream << document;
// EXPECT_EQ(stream.str(), "-54");
// }

// TEST(CATEGORY, stringify_zero) {
// const auto document{sourcemeta::jsontoolkit::parse("0")};
// std::ostringstream stream;
// stream << document;
// EXPECT_EQ(stream.str(), "0");
// }

// TEST(CATEGORY, stringify_positive_real) {
// const auto document{sourcemeta::jsontoolkit::parse("5.4")};
// std::ostringstream stream;
// stream << document;
// EXPECT_EQ(stream.str(), "5.4");
// }

// TEST(CATEGORY, stringify_negative_real) {
// const auto document{sourcemeta::jsontoolkit::parse("-5.4")};
// std::ostringstream stream;
// stream << document;
// EXPECT_EQ(stream.str(), "-5.4");
// }

// // JSON has no distinction between integers and reals
// TEST(CATEGORY, json_integer_json_real_equal) {
// sourcemeta::jsontoolkit::JSON<std::string> left{"1")};
// sourcemeta::jsontoolkit::JSON<std::string> right{"1.0")};
// left.parse();
// right.parse();
// EXPECT_EQ(left, right);
// }

// // JSON has no distinction between integers and reals
// TEST(CATEGORY, json_real_json_integer_equal) {
// sourcemeta::jsontoolkit::JSON<std::string> left{"1.0")};
// sourcemeta::jsontoolkit::JSON<std::string> right{"1")};
// left.parse();
// right.parse();
// EXPECT_EQ(left, right);
// }
