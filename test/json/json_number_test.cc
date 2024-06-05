#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>

TEST(JSON_number, is_number_zero) {
  const sourcemeta::jsontoolkit::JSON document{0};
  EXPECT_TRUE(document.is_number());
}

TEST(JSON_number, is_number_zero_real) {
  const sourcemeta::jsontoolkit::JSON document{0.0};
  EXPECT_TRUE(document.is_number());
}

TEST(JSON_number, is_number_positive_integer) {
  const sourcemeta::jsontoolkit::JSON document{5};
  EXPECT_TRUE(document.is_number());
}

TEST(JSON_number, is_number_positive_real) {
  const sourcemeta::jsontoolkit::JSON document{5.3};
  EXPECT_TRUE(document.is_number());
}

TEST(JSON_number, is_number_negative_integer) {
  const sourcemeta::jsontoolkit::JSON document{-5};
  EXPECT_TRUE(document.is_number());
}

TEST(JSON_number, is_number_negative_real) {
  const sourcemeta::jsontoolkit::JSON document{-5.3};
  EXPECT_TRUE(document.is_number());
}

TEST(JSON_number, is_number_string) {
  const sourcemeta::jsontoolkit::JSON document{"0"};
  EXPECT_FALSE(document.is_number());
}

TEST(JSON_number, is_number_null) {
  const sourcemeta::jsontoolkit::JSON document{nullptr};
  EXPECT_FALSE(document.is_number());
}

TEST(JSON_number, is_positive_negative_integer) {
  const sourcemeta::jsontoolkit::JSON document{-3};
  EXPECT_FALSE(document.is_positive());
}

TEST(JSON_number, is_positive_zero_integer) {
  const sourcemeta::jsontoolkit::JSON document{0};
  EXPECT_TRUE(document.is_positive());
}

TEST(JSON_number, is_positive_positive_integer) {
  const sourcemeta::jsontoolkit::JSON document{5};
  EXPECT_TRUE(document.is_positive());
}

TEST(JSON_number, is_positive_negative_real) {
  const sourcemeta::jsontoolkit::JSON document{-3.2};
  EXPECT_FALSE(document.is_positive());
}

TEST(JSON_number, is_positive_zero_real) {
  const sourcemeta::jsontoolkit::JSON document{0.0};
  EXPECT_TRUE(document.is_positive());
}

TEST(JSON_number, is_positive_positive_real) {
  const sourcemeta::jsontoolkit::JSON document{5.1};
  EXPECT_TRUE(document.is_positive());
}

TEST(JSON_number, add_integer_integer) {
  const sourcemeta::jsontoolkit::JSON left{5};
  const sourcemeta::jsontoolkit::JSON right{3};
  const sourcemeta::jsontoolkit::JSON document{left + right};
  EXPECT_TRUE(document.is_integer());
  EXPECT_EQ(document.to_integer(), 8);
}

TEST(JSON_number, add_integer_real) {
  const sourcemeta::jsontoolkit::JSON left{5};
  const sourcemeta::jsontoolkit::JSON right{3.2};
  const sourcemeta::jsontoolkit::JSON document{left + right};
  EXPECT_TRUE(document.is_real());
  EXPECT_EQ(document.to_real(), 8.2);
}

TEST(JSON_number, add_real_integer) {
  const sourcemeta::jsontoolkit::JSON left{3.2};
  const sourcemeta::jsontoolkit::JSON right{2};
  const sourcemeta::jsontoolkit::JSON document{left + right};
  EXPECT_TRUE(document.is_real());
  EXPECT_EQ(document.to_real(), 5.2);
}

TEST(JSON_number, add_real_real) {
  const sourcemeta::jsontoolkit::JSON left{3.2};
  const sourcemeta::jsontoolkit::JSON right{2.0};
  const sourcemeta::jsontoolkit::JSON document{left + right};
  EXPECT_TRUE(document.is_real());
  EXPECT_EQ(document.to_real(), 5.2);
}

TEST(JSON_number, substract_integer_integer) {
  const sourcemeta::jsontoolkit::JSON left{5};
  const sourcemeta::jsontoolkit::JSON right{3};
  const sourcemeta::jsontoolkit::JSON document{left - right};
  EXPECT_TRUE(document.is_integer());
  EXPECT_EQ(document.to_integer(), 2);
}

TEST(JSON_number, substract_integer_real) {
  const sourcemeta::jsontoolkit::JSON left{5};
  const sourcemeta::jsontoolkit::JSON right{3.2};
  const sourcemeta::jsontoolkit::JSON document{left - right};
  EXPECT_TRUE(document.is_real());
  EXPECT_DOUBLE_EQ(document.to_real(), 1.8);
}

TEST(JSON_number, substract_real_integer) {
  const sourcemeta::jsontoolkit::JSON left{3.2};
  const sourcemeta::jsontoolkit::JSON right{2};
  const sourcemeta::jsontoolkit::JSON document{left - right};
  EXPECT_TRUE(document.is_real());
  EXPECT_DOUBLE_EQ(document.to_real(), 1.2);
}

TEST(JSON_number, substract_real_real) {
  const sourcemeta::jsontoolkit::JSON left{3.2};
  const sourcemeta::jsontoolkit::JSON right{2.0};
  const sourcemeta::jsontoolkit::JSON document{left - right};
  EXPECT_TRUE(document.is_real());
  EXPECT_DOUBLE_EQ(document.to_real(), 1.2);
}

TEST(JSON_number, increment_integer_integer) {
  sourcemeta::jsontoolkit::JSON document{5};
  const sourcemeta::jsontoolkit::JSON value{3};
  document += value;
  EXPECT_TRUE(document.is_integer());
  EXPECT_EQ(document.to_integer(), 8);
}

TEST(JSON_number, increment_integer_real) {
  sourcemeta::jsontoolkit::JSON document{5};
  const sourcemeta::jsontoolkit::JSON value{3.2};
  document += value;
  EXPECT_TRUE(document.is_real());
  EXPECT_EQ(document.to_real(), 8.2);
}

TEST(JSON_number, increment_real_integer) {
  sourcemeta::jsontoolkit::JSON document{3.2};
  const sourcemeta::jsontoolkit::JSON value{2};
  document += value;
  EXPECT_TRUE(document.is_real());
  EXPECT_EQ(document.to_real(), 5.2);
}

TEST(JSON_number, increment_real_real) {
  sourcemeta::jsontoolkit::JSON document{3.2};
  const sourcemeta::jsontoolkit::JSON value{2.0};
  document += value;
  EXPECT_TRUE(document.is_real());
  EXPECT_EQ(document.to_real(), 5.2);
}

TEST(JSON_number, decrement_integer_integer) {
  sourcemeta::jsontoolkit::JSON document{5};
  const sourcemeta::jsontoolkit::JSON value{3};
  document -= value;
  EXPECT_TRUE(document.is_integer());
  EXPECT_EQ(document.to_integer(), 2);
}

TEST(JSON_number, decrement_integer_real) {
  sourcemeta::jsontoolkit::JSON document{5};
  const sourcemeta::jsontoolkit::JSON value{3.2};
  document -= value;
  EXPECT_TRUE(document.is_real());
  EXPECT_DOUBLE_EQ(document.to_real(), 1.8);
}

TEST(JSON_number, decrement_real_integer) {
  sourcemeta::jsontoolkit::JSON document{3.2};
  const sourcemeta::jsontoolkit::JSON value{2};
  document -= value;
  EXPECT_TRUE(document.is_real());
  EXPECT_DOUBLE_EQ(document.to_real(), 1.2);
}

TEST(JSON_number, decrement_real_real) {
  sourcemeta::jsontoolkit::JSON document{3.2};
  const sourcemeta::jsontoolkit::JSON value{2.0};
  document -= value;
  EXPECT_TRUE(document.is_real());
  EXPECT_DOUBLE_EQ(document.to_real(), 1.2);
}

TEST(JSON_number, add_integer_integer_within_object) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{\"foo\": 5}");
  const sourcemeta::jsontoolkit::JSON value{3};
  document.at("foo") += value;
  EXPECT_TRUE(document.at("foo").is_integer());
  EXPECT_EQ(document.at("foo").to_integer(), 8);
}

TEST(JSON_number, add_integer_real_within_object) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{\"foo\": 5}");
  const sourcemeta::jsontoolkit::JSON value{3.2};
  document.at("foo") += value;
  EXPECT_TRUE(document.at("foo").is_real());
  EXPECT_EQ(document.at("foo").to_real(), 8.2);
}

TEST(JSON_number, add_real_integer_within_object) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{\"foo\": 3.2}");
  const sourcemeta::jsontoolkit::JSON value{2};
  document.at("foo") += value;
  EXPECT_TRUE(document.at("foo").is_real());
  EXPECT_EQ(document.at("foo").to_real(), 5.2);
}

TEST(JSON_number, add_real_real_within_object) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{\"foo\": 3.2}");
  const sourcemeta::jsontoolkit::JSON value{2.0};
  document.at("foo") += value;
  EXPECT_TRUE(document.at("foo").is_real());
  EXPECT_EQ(document.at("foo").to_real(), 5.2);
}

TEST(JSON_number, divisible_by_integer_integer_true) {
  const sourcemeta::jsontoolkit::JSON dividend{10};
  const sourcemeta::jsontoolkit::JSON divisor{5};
  EXPECT_TRUE(dividend.divisible_by(divisor));
}

TEST(JSON_number, divisible_by_integer_integer_false) {
  const sourcemeta::jsontoolkit::JSON dividend{11};
  const sourcemeta::jsontoolkit::JSON divisor{5};
  EXPECT_FALSE(dividend.divisible_by(divisor));
}

TEST(JSON_number, divisible_by_integer_real_true) {
  const sourcemeta::jsontoolkit::JSON dividend{6};
  const sourcemeta::jsontoolkit::JSON divisor{1.5};
  EXPECT_TRUE(dividend.divisible_by(divisor));
}

TEST(JSON_number, divisible_by_integer_real_false) {
  const sourcemeta::jsontoolkit::JSON dividend{7};
  const sourcemeta::jsontoolkit::JSON divisor{1.5};
  EXPECT_FALSE(dividend.divisible_by(divisor));
}

TEST(JSON_number, divisible_by_real_integer_true) {
  const sourcemeta::jsontoolkit::JSON dividend{6.0};
  EXPECT_TRUE(dividend.is_real());
  const sourcemeta::jsontoolkit::JSON divisor{2};
  EXPECT_TRUE(dividend.divisible_by(divisor));
}

TEST(JSON_number, divisible_by_real_integer_false) {
  const sourcemeta::jsontoolkit::JSON dividend{6.0};
  EXPECT_TRUE(dividend.is_real());
  const sourcemeta::jsontoolkit::JSON divisor{2.5};
  EXPECT_FALSE(dividend.divisible_by(divisor));
}

TEST(JSON_number, divisible_by_real_real_true) {
  const sourcemeta::jsontoolkit::JSON dividend{4.5};
  EXPECT_TRUE(dividend.is_real());
  const sourcemeta::jsontoolkit::JSON divisor{1.5};
  EXPECT_TRUE(dividend.divisible_by(divisor));
}

TEST(JSON_number, divisible_by_real_real_false) {
  const sourcemeta::jsontoolkit::JSON dividend{4.7};
  EXPECT_TRUE(dividend.is_real());
  const sourcemeta::jsontoolkit::JSON divisor{1.5};
  EXPECT_FALSE(dividend.divisible_by(divisor));
}

TEST(JSON_number, divisible_by_infinity) {
  const sourcemeta::jsontoolkit::JSON dividend{1e308};
  const sourcemeta::jsontoolkit::JSON divisor{0.123456789};
  EXPECT_FALSE(dividend.divisible_by(divisor));
}

TEST(JSON_number, divisible_by_tiny_true) {
  const sourcemeta::jsontoolkit::JSON dividend{0.0075};
  const sourcemeta::jsontoolkit::JSON divisor{0.0001};
  EXPECT_TRUE(dividend.divisible_by(divisor));
}

TEST(JSON_number, divisible_by_tiny_false) {
  const sourcemeta::jsontoolkit::JSON dividend{0.00751};
  const sourcemeta::jsontoolkit::JSON divisor{0.0001};
  EXPECT_FALSE(dividend.divisible_by(divisor));
}

TEST(JSON_number, divisible_by_real_zero) {
  const sourcemeta::jsontoolkit::JSON dividend{0.00751};
  const sourcemeta::jsontoolkit::JSON divisor{0};
  EXPECT_FALSE(dividend.divisible_by(divisor));
}

TEST(JSON_number, divisible_by_integer_zero) {
  const sourcemeta::jsontoolkit::JSON dividend{5};
  const sourcemeta::jsontoolkit::JSON divisor{0};
  EXPECT_FALSE(dividend.divisible_by(divisor));
}

TEST(JSON_number, divisible_by_zero_zero) {
  const sourcemeta::jsontoolkit::JSON dividend{0};
  const sourcemeta::jsontoolkit::JSON divisor{0};
  EXPECT_FALSE(dividend.divisible_by(divisor));
}

TEST(JSON_number, divisible_by_zero_interger) {
  const sourcemeta::jsontoolkit::JSON dividend{0};
  const sourcemeta::jsontoolkit::JSON divisor{5};
  EXPECT_TRUE(dividend.divisible_by(divisor));
}

TEST(JSON_number, divisible_by_zero_real_zero_real) {
  const sourcemeta::jsontoolkit::JSON dividend{0.0};
  const sourcemeta::jsontoolkit::JSON divisor{0.0};
  EXPECT_FALSE(dividend.divisible_by(divisor));
}

TEST(JSON_number, divisible_by_float_overflow_integer_0_5) {
  const sourcemeta::jsontoolkit::JSON document{1e308};
  const sourcemeta::jsontoolkit::JSON divisor{0.5};
  EXPECT_TRUE(document.divisible_by(divisor));
}

TEST(JSON_number, divisible_by_float_overflow_integer_1) {
  const sourcemeta::jsontoolkit::JSON document{1e308};
  const sourcemeta::jsontoolkit::JSON divisor{1};
  EXPECT_TRUE(document.divisible_by(divisor));
}

TEST(JSON_number, divisible_by_float_overflow_integer_1_0) {
  const sourcemeta::jsontoolkit::JSON document{1e308};
  const sourcemeta::jsontoolkit::JSON divisor{1.0};
  EXPECT_TRUE(document.divisible_by(divisor));
}

TEST(JSON_number, as_real_real) {
  const sourcemeta::jsontoolkit::JSON document{4.7};
  EXPECT_DOUBLE_EQ(document.as_real(), 4.7);
}

TEST(JSON_number, as_real_integer) {
  const sourcemeta::jsontoolkit::JSON document{4};
  EXPECT_DOUBLE_EQ(document.as_real(), 4.0);
}

TEST(JSON_value, compare_int_real_equal) {
  const sourcemeta::jsontoolkit::JSON left{300};
  const sourcemeta::jsontoolkit::JSON right{300.0};
  EXPECT_TRUE(left.is_integer());
  EXPECT_TRUE(right.is_real());
  EXPECT_TRUE(left <= right);
  EXPECT_TRUE(right <= left);
  EXPECT_TRUE(left >= right);
  EXPECT_TRUE(right >= left);
}

TEST(JSON_number, big_real) {
  const sourcemeta::jsontoolkit::JSON document{1e308};
  EXPECT_TRUE(document.is_number());
  EXPECT_FALSE(document.is_integer());
  EXPECT_TRUE(document.is_real());
  EXPECT_EQ(document.to_real(), 1e308);
}

TEST(JSON_number, is_integer_real_integer) {
  const sourcemeta::jsontoolkit::JSON document{5};
  EXPECT_FALSE(document.is_integer_real());
}

TEST(JSON_number, is_integer_real_non_integer_real) {
  const sourcemeta::jsontoolkit::JSON document{5.3};
  EXPECT_FALSE(document.is_integer_real());
}

TEST(JSON_number, is_integer_real_integer_real) {
  const sourcemeta::jsontoolkit::JSON document{5.0};
  EXPECT_TRUE(document.is_integer_real());
}

TEST(JSON_number, as_integer_integer) {
  const sourcemeta::jsontoolkit::JSON document{5};
  EXPECT_EQ(document.as_integer(), 5);
}

TEST(JSON_number, as_integer_integer_real) {
  const sourcemeta::jsontoolkit::JSON document{5.0};
  EXPECT_EQ(document.as_integer(), 5);
}

TEST(JSON_number, as_integer_non_integer_real) {
  const sourcemeta::jsontoolkit::JSON document{5.5};
  EXPECT_EQ(document.as_integer(), 5);
}
