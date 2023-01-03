#include <gtest/gtest.h>
#include <jsontoolkit/json/read.h>
#include <sstream>   // std::istringstream
#include <stdexcept> // std::domain_error

TEST(CATEGORY, input_stream_error) {
  std::istringstream stream{"["};
  EXPECT_THROW(sourcemeta::jsontoolkit::parse(stream), std::domain_error);
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

TEST(CATEGORY, empty_object_missing_left_curly) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("}"), std::domain_error);
}

TEST(CATEGORY, empty_object_missing_right_curly) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{"), std::domain_error);
}

TEST(CATEGORY, object_integer_key) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{1:false}"), std::domain_error);
}

TEST(CATEGORY, object_colon_but_no_key) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{:false}"), std::domain_error);
}

TEST(CATEGORY, object_colon_but_no_key_with_space) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{  :    false}"),
               std::domain_error);
}

TEST(CATEGORY, object_colon_but_no_value) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"x\":}"), std::domain_error);
}

TEST(CATEGORY, object_colon_but_no_value_with_space) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{    \"x\"  :   }"),
               std::domain_error);
}

TEST(CATEGORY, object_missing_key_left_quote) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{foo\":true}"),
               std::domain_error);
}

TEST(CATEGORY, object_missing_key_right_quote) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo:true}"),
               std::domain_error);
}

TEST(CATEGORY, object_missing_key_both_quotes) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{foo:true}"), std::domain_error);
}

TEST(CATEGORY, object_missing_colon) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\" true}"),
               std::domain_error);
}

TEST(CATEGORY, object_multiple_colons) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\"::true}"),
               std::domain_error);
}

TEST(CATEGORY, object_parse_deep_failure) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\":true"),
               std::domain_error);
}

TEST(CATEGORY, parse_deep_failure_member) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\":tru}"),
               std::domain_error);
}

TEST(CATEGORY, key_without_value) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\"}"), std::domain_error);
}

TEST(CATEGORY, key_without_value_after_valid_key) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\": 1,\"bar\"}"),
               std::domain_error);
}

TEST(CATEGORY, trailing_comma_after_element) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\": 1,\"bar\":0,}"),
               std::domain_error);
}

TEST(CATEGORY, trailing_comma) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\": 1,}"),
               std::domain_error);
}

TEST(CATEGORY, trailing_comma_with_spacing) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\": 1  ,   } "),
               std::domain_error);
}

TEST(CATEGORY, trailing_comma_with_left_spacing) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\": 1  ,}"),
               std::domain_error);
}

TEST(CATEGORY, multiple_commas) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\": 1,,,,,}"),
               std::domain_error);
}

TEST(CATEGORY, multiple_commas_with_spacing) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\": 1 ,  ,  , , }"),
               std::domain_error);
}

TEST(CATEGORY, no_right_quote) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo"), std::domain_error);
}

TEST(CATEGORY, no_left_quote) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("foo\""), std::domain_error);
}

TEST(CATEGORY, no_single_quotes) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("'foo'"), std::domain_error);
}

TEST(CATEGORY, only_quote) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\""), std::domain_error);
}

TEST(CATEGORY, escaped_invalid) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo\\xbar\""),
               std::domain_error);
}

TEST(CATEGORY, escaped_incomplete) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo\\\""), std::domain_error);
}

TEST(CATEGORY, invalid_with_double_quote) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo\"bar\""),
               std::domain_error);
}

TEST(CATEGORY, invalid_control_characters) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0000 bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0001 bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0002 bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0003 bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0004 bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0005 bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0006 bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0007 bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0008 bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0009 bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u000A bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u000B bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u000C bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u000D bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u000E bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u000F bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0010 bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0011 bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0012 bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0013 bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0014 bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0015 bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0016 bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0017 bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0018 bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0019 bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u001A bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u001B bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u001C bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u001D bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u001E bar\""),
               std::domain_error);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u001F bar\""),
               std::domain_error);
}

TEST(CATEGORY, invalid_code_point) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"\\uXXXX\""),
               std::domain_error);
}

TEST(CATEGORY, invalid_lowercase_code_point) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"\\uqqqq\""),
               std::domain_error);
}

TEST(CATEGORY, incomplete_code_point_0) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"\\u\""), std::domain_error);
}

TEST(CATEGORY, incomplete_code_point_1) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"\\u6\""), std::domain_error);
}

TEST(CATEGORY, incomplete_code_point_2) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"\\u2F\""), std::domain_error);
}

TEST(CATEGORY, incomplete_code_point_3) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"\\u02F\""), std::domain_error);
}

TEST(CATEGORY, incomplete_code_point_space) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"\\u0F 2F\""),
               std::domain_error);
}

TEST(CATEGORY, parse_deep_failure) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo"), std::domain_error);
}
