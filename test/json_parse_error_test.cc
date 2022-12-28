#include <algorithm> // std::all_of
#include <gtest/gtest.h>
#include <jsontoolkit/read.h>
#include <stdexcept> // std::domain_error
#include <utility>   // std::move

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
