#include <gtest/gtest.h>
#include <limits>
#include <sourcemeta/jsontoolkit/json.h>

TEST(JSON_real, positive) {
  const sourcemeta::jsontoolkit::JSON document{10.2};
  EXPECT_TRUE(document.is_real());
  EXPECT_EQ(document.to_real(), 10.2);
}

TEST(JSON_real, negative) {
  const sourcemeta::jsontoolkit::JSON document{-10.02};
  EXPECT_TRUE(document.is_real());
  EXPECT_EQ(document.to_real(), -10.02);
}

TEST(JSON_real, zero) {
  const sourcemeta::jsontoolkit::JSON document{0.0};
  EXPECT_TRUE(document.is_real());
  EXPECT_EQ(document.to_real(), 0.0);
}

TEST(JSON_real, type) {
  const sourcemeta::jsontoolkit::JSON document{1.23};
  EXPECT_EQ(document.type(), sourcemeta::jsontoolkit::JSON::Type::Real);
}

TEST(JSON_real, long_double_nan) {
  const double value{static_cast<double>(NAN)};
  EXPECT_THROW(sourcemeta::jsontoolkit::JSON{value}, std::invalid_argument);
}

TEST(JSON_real, double_nan) {
  const double value{static_cast<double>(NAN)};
  EXPECT_THROW(sourcemeta::jsontoolkit::JSON{value}, std::invalid_argument);
}

TEST(JSON_real, float_nan) {
  const float value{NAN};
  EXPECT_THROW(sourcemeta::jsontoolkit::JSON{value}, std::invalid_argument);
}

TEST(JSON_real, long_double_infinity) {
  const double value{std::numeric_limits<double>::infinity()};
  EXPECT_THROW(sourcemeta::jsontoolkit::JSON{value}, std::invalid_argument);
}

TEST(JSON_real, double_infinity) {
  const double value{std::numeric_limits<double>::infinity()};
  EXPECT_THROW(sourcemeta::jsontoolkit::JSON{value}, std::invalid_argument);
}

TEST(JSON_real, float_infinity) {
  const float value{std::numeric_limits<float>::infinity()};
  EXPECT_THROW(sourcemeta::jsontoolkit::JSON{value}, std::invalid_argument);
}

TEST(JSON_real, estimated_byte_size_3_14) {
  const sourcemeta::jsontoolkit::JSON document{3.14};
  EXPECT_EQ(document.estimated_byte_size(), 8);
}

TEST(JSON_real, estimated_byte_size_minus_3_14) {
  const sourcemeta::jsontoolkit::JSON document{-3.14};
  EXPECT_EQ(document.estimated_byte_size(), 8);
}

TEST(JSON_real, estimated_byte_size_minus_5_0) {
  const sourcemeta::jsontoolkit::JSON document{5.0};
  EXPECT_EQ(document.estimated_byte_size(), 8);
}

TEST(JSON_real, estimated_byte_size_minus_0_0) {
  const sourcemeta::jsontoolkit::JSON document{0.0};
  EXPECT_EQ(document.estimated_byte_size(), 8);
}
