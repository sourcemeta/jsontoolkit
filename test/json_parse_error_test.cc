#include <gtest/gtest.h>
#include <jsontoolkit/read.h>
#include <stdexcept> // std::domain_error

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

// TEST(String, no_right_quote) {
// sourcemeta::jsontoolkit::JSON<std::string> document{"\"foo"};
// EXPECT_THROW(document.size(), std::domain_error);
// }

// TEST(String, no_left_quote) {
// sourcemeta::jsontoolkit::JSON<std::string> document{"foo\""};
// EXPECT_THROW(document.size(), std::domain_error);
// }

// TEST(String, no_single_quotes) {
// sourcemeta::jsontoolkit::JSON<std::string> document{"'foo'"};
// EXPECT_THROW(document.size(), std::domain_error);
// }

// TEST(String, only_quote) {
// sourcemeta::jsontoolkit::JSON<std::string> document{"\""};
// EXPECT_THROW(document.size(), std::domain_error);
// }

// TEST(String, escaped_invalid) {
// sourcemeta::jsontoolkit::JSON<std::string> document{"\"foo\\xbar\""};
// EXPECT_THROW(document.size(), std::domain_error);
// }

// TEST(String, escaped_incomplete) {
// sourcemeta::jsontoolkit::JSON<std::string> document{"\"foo\\\""};
// EXPECT_THROW(document.size(), std::domain_error);
// }

// TEST(String, invalid_with_double_quote) {
// sourcemeta::jsontoolkit::JSON<std::string> document{"\"foo\"bar\""};
// EXPECT_THROW(document.size(), std::domain_error);
// }

// TEST(String, invalid_control_characters) {
// sourcemeta::jsontoolkit::JSON<std::string> document00{"\"foo \u0000 bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document01{"\"foo \u0001 bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document02{"\"foo \u0002 bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document03{"\"foo \u0003 bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document04{"\"foo \u0004 bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document05{"\"foo \u0005 bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document06{"\"foo \u0006 bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document07{"\"foo \u0007 bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document08{"\"foo \u0008 bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document09{"\"foo \u0009 bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document0A{"\"foo \u000A bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document0B{"\"foo \u000B bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document0C{"\"foo \u000C bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document0D{"\"foo \u000D bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document0E{"\"foo \u000E bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document0F{"\"foo \u000F bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document10{"\"foo \u0010 bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document11{"\"foo \u0011 bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document12{"\"foo \u0012 bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document13{"\"foo \u0013 bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document14{"\"foo \u0014 bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document15{"\"foo \u0015 bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document16{"\"foo \u0016 bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document17{"\"foo \u0017 bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document18{"\"foo \u0018 bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document19{"\"foo \u0019 bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document1A{"\"foo \u001A bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document1B{"\"foo \u001B bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document1C{"\"foo \u001C bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document1D{"\"foo \u001D bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document1E{"\"foo \u001E bar\""};
// sourcemeta::jsontoolkit::JSON<std::string> document1F{"\"foo \u001F bar\""};

// EXPECT_THROW(document00.size(), std::domain_error);
// EXPECT_THROW(document01.size(), std::domain_error);
// EXPECT_THROW(document02.size(), std::domain_error);
// EXPECT_THROW(document03.size(), std::domain_error);
// EXPECT_THROW(document04.size(), std::domain_error);
// EXPECT_THROW(document05.size(), std::domain_error);
// EXPECT_THROW(document06.size(), std::domain_error);
// EXPECT_THROW(document07.size(), std::domain_error);
// EXPECT_THROW(document08.size(), std::domain_error);
// EXPECT_THROW(document09.size(), std::domain_error);
// EXPECT_THROW(document0A.size(), std::domain_error);
// EXPECT_THROW(document0B.size(), std::domain_error);
// EXPECT_THROW(document0C.size(), std::domain_error);
// EXPECT_THROW(document0D.size(), std::domain_error);
// EXPECT_THROW(document0E.size(), std::domain_error);
// EXPECT_THROW(document0F.size(), std::domain_error);
// EXPECT_THROW(document10.size(), std::domain_error);
// EXPECT_THROW(document11.size(), std::domain_error);
// EXPECT_THROW(document12.size(), std::domain_error);
// EXPECT_THROW(document13.size(), std::domain_error);
// EXPECT_THROW(document14.size(), std::domain_error);
// EXPECT_THROW(document15.size(), std::domain_error);
// EXPECT_THROW(document16.size(), std::domain_error);
// EXPECT_THROW(document17.size(), std::domain_error);
// EXPECT_THROW(document18.size(), std::domain_error);
// EXPECT_THROW(document19.size(), std::domain_error);
// EXPECT_THROW(document1A.size(), std::domain_error);
// EXPECT_THROW(document1B.size(), std::domain_error);
// EXPECT_THROW(document1C.size(), std::domain_error);
// EXPECT_THROW(document1D.size(), std::domain_error);
// EXPECT_THROW(document1E.size(), std::domain_error);
// EXPECT_THROW(document1F.size(), std::domain_error);
// }

// TEST(String, invalid_code_point) {
// sourcemeta::jsontoolkit::JSON<std::string> document{"\"\\uXXXX\""};
// EXPECT_THROW(document.size(), std::domain_error);
// }

// TEST(String, invalid_lowercase_code_point) {
// sourcemeta::jsontoolkit::JSON<std::string> document{"\"\\uqqqq\""};
// EXPECT_THROW(document.size(), std::domain_error);
// }

// TEST(String, incomplete_code_point_0) {
// sourcemeta::jsontoolkit::JSON<std::string> document{"\"\\u\""};
// EXPECT_THROW(document.size(), std::domain_error);
// }

// TEST(String, incomplete_code_point_1) {
// sourcemeta::jsontoolkit::JSON<std::string> document{"\"\\u6\""};
// EXPECT_THROW(document.size(), std::domain_error);
// }

// TEST(String, incomplete_code_point_2) {
// sourcemeta::jsontoolkit::JSON<std::string> document{"\"\\u2F\""};
// EXPECT_THROW(document.size(), std::domain_error);
// }

// TEST(String, incomplete_code_point_3) {
// sourcemeta::jsontoolkit::JSON<std::string> document{"\"\\u02F\""};
// EXPECT_THROW(document.size(), std::domain_error);
// }

// TEST(String, incomplete_code_point_space) {
// sourcemeta::jsontoolkit::JSON<std::string> document{"\"\\u0F 2F\""};
// EXPECT_THROW(document.size(), std::domain_error);
// }

// TEST(CATEGORY, parse_deep_failure) {
// sourcemeta::jsontoolkit::JSON<std::string> document{"\"foo"};
// EXPECT_THROW(document.parse(), std::domain_error);
// }
