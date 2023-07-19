#include <gtest/gtest.h>
#include <jsontoolkit/json/read.h>
#include <sstream> // std::istringstream

TEST(JSON, input_stream_error) {
  std::istringstream stream{"["};
  EXPECT_THROW(sourcemeta::jsontoolkit::parse(stream),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, empty_array_incomplete_right) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("["),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, empty_array_incomplete_right_with_inner_space) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[  "),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, empty_array_with_comma) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[,]"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, empty_array_with_comma_and_no_right_bracket) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[,"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, empty_array_with_comma_and_spacing) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[    ,    ]"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, array_parse_deep_failure) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[true"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, array_parse_deep_failure_in_item) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[tru]"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, array_without_comma_after_element) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[1[2]]"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, array_unclosed_string_element) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[\"foo]"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, array_single_element_trailing_comma) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[true,]"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, array_single_element_trailing_commas) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[true,,,]"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, array_single_element_middle_comma) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[true,,true]"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, array_single_element_leading_comma) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[,true]"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, array_single_element_leading_commas) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[,,,true]"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, concat_array) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[true][false]"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, concat_array_middle_comma) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[true],[false]"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, concat_array_middle_unbalanced_left) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[true],false]"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, concat_array_middle_unbalanced_right) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("[true,[false]"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, true_more_than_needed) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("truee"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, true_incomplete_1) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("tru"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, true_incomplete_2) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("tr"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, true_incomplete_3) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("t"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, false_more_than_needed) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("falsee"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, false_incomplete_1) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("fals"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, false_incomplete_2) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("fal"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, false_incomplete_3) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("fa"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, false_incomplete_4) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("f"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, null_more_than_needed) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("nulll"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, null_incomplete_1) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("nul"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, null_incomplete_2) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("nu"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, null_incomplete_3) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("n"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, invalid_string_integer_trailing_minus) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("-0-"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, invalid_string_integer_trailing_character) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("-0x"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, invalid_minus_in_between_integer) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("123-45"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, invalid_double_minus) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("--123"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, two_zeroes) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("00"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, multiple_zeroes) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("000"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, leading_zero_with_one_digit_integer) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("01"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, leading_zero_with_two_digits_integer) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("012"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, leading_period) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse(".0"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, trailing_period) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("0."),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, trailing_period_and_minus) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("0.-"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, double_minus_at_start) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("--5"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, leading_minus_and_period) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("-.0"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, multiple_leading_plus) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("++5"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, multiple_separate_periods) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("12.34.56"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, string_integer_with_plus) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("+5"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, string_zero_with_plus) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("+0"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, negative_with_leading_zero) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("-05"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, negative_with_leading_zero_and_space) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("-0 5"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, leading_zero_positive_integer_number) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("02"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, leading_zero_negative_integer_number) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("-02"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, two_leading_zeroes_real_number) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("-00.2"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, multiple_leading_zeroes_real_number) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("-00000.2"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, exponential_notation_error_double_upper_e) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3EE2"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, exponential_notation_error_double_lower_e) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3ee2"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, exponential_notation_error_double_mixed_e) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3eE2"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, exponential_notation_error_trailing_upper_e) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3E"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, exponential_notation_error_trailing_lower_e) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3e"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, exponential_notation_error_trailing_upper_e_minus) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3E-"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, exponential_notation_error_trailing_lower_e_minus) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3e-"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, exponential_notation_error_leading_upper_e) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("E2"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, exponential_notation_error_leading_lower_e) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("e2"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, exponential_notation_error_minus_leading_upper_e) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("-E2"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, exponential_notation_error_minus_leading_lower_e) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("-e2"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, exponential_notation_error_double_e_with_digits) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3E1E2"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, exponential_notation_error_left_e_space) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3 E2"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, exponential_notation_error_right_e_space) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3E 2"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, exponential_notation_error_double_minus_after_e) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3E--2"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, exponential_notation_error_double_minus_with_digits_after_e) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("3E-2-2"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, empty_object_missing_left_curly) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("}"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, empty_object_missing_right_curly) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, object_integer_key) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{1:false}"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, object_colon_but_no_key) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{:false}"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, object_colon_but_no_key_with_space) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{  :    false}"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, object_colon_but_no_value) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"x\":}"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, object_colon_but_no_value_with_space) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{    \"x\"  :   }"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, object_missing_key_left_quote) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{foo\":true}"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, object_missing_key_right_quote) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo:true}"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, object_missing_key_both_quotes) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{foo:true}"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, object_missing_colon) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\" true}"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, object_multiple_colons) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\"::true}"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, object_parse_deep_failure) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\":true"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, parse_deep_failure_member) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\":tru}"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, key_without_value) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\"}"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, key_without_value_after_valid_key) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\": 1,\"bar\"}"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, trailing_comma_after_element) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\": 1,\"bar\":0,}"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, trailing_comma) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\": 1,}"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, trailing_comma_with_spacing) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\": 1  ,   } "),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, trailing_comma_with_left_spacing) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\": 1  ,}"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, multiple_commas) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\": 1,,,,,}"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, multiple_commas_with_spacing) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("{\"foo\": 1 ,  ,  , , }"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, no_right_quote) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, no_left_quote) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("foo\""),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, no_single_quotes) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("'foo'"),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, only_quote) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\""),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, escaped_invalid) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo\\xbar\""),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, escaped_incomplete) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo\\\""),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, invalid_with_double_quote) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo\"bar\""),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, invalid_control_characters) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0000 bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0001 bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0002 bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0003 bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0004 bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0005 bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0006 bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0007 bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0008 bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0009 bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u000A bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u000B bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u000C bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u000D bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u000E bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u000F bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0010 bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0011 bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0012 bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0013 bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0014 bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0015 bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0016 bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0017 bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0018 bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u0019 bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u001A bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u001B bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u001C bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u001D bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u001E bar\""),
               sourcemeta::jsontoolkit::ParseError);
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo \u001F bar\""),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, invalid_code_point) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"\\uXXXX\""),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, invalid_lowercase_code_point) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"\\uqqqq\""),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, incomplete_code_point_0) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"\\u\""),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, incomplete_code_point_1) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"\\u6\""),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, incomplete_code_point_2) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"\\u2F\""),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, incomplete_code_point_3) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"\\u02F\""),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, incomplete_code_point_space) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"\\u0F 2F\""),
               sourcemeta::jsontoolkit::ParseError);
}

TEST(JSON, parse_deep_failure) {
  EXPECT_THROW(sourcemeta::jsontoolkit::parse("\"foo"),
               sourcemeta::jsontoolkit::ParseError);
}
