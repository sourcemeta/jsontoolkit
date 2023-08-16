#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>

TEST(JSON_number, is_number_zero) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::JSON{0}};
  EXPECT_TRUE(document.is_number());
}

TEST(JSON_number, is_number_zero_real) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::JSON{0.0}};
  EXPECT_TRUE(document.is_number());
}

TEST(JSON_number, is_number_positive_integer) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::JSON{5}};
  EXPECT_TRUE(document.is_number());
}

TEST(JSON_number, is_number_positive_real) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::JSON{5.3}};
  EXPECT_TRUE(document.is_number());
}

TEST(JSON_number, is_number_negative_integer) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::JSON{-5}};
  EXPECT_TRUE(document.is_number());
}

TEST(JSON_number, is_number_negative_real) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::JSON{-5.3}};
  EXPECT_TRUE(document.is_number());
}

TEST(JSON_number, is_number_string) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::JSON{"0"}};
  EXPECT_FALSE(document.is_number());
}

TEST(JSON_number, is_number_null) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::JSON{nullptr}};
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
  sourcemeta::jsontoolkit::JSON document{5};
  const sourcemeta::jsontoolkit::JSON value{3};
  document += value;
  EXPECT_TRUE(document.is_integer());
  EXPECT_EQ(document.to_integer(), 8);
}

TEST(JSON_number, add_integer_real) {
  sourcemeta::jsontoolkit::JSON document{5};
  const sourcemeta::jsontoolkit::JSON value{3.2};
  document += value;
  EXPECT_TRUE(document.is_real());
  EXPECT_EQ(document.to_real(), 8.2);
}

TEST(JSON_number, add_real_integer) {
  sourcemeta::jsontoolkit::JSON document{3.2};
  const sourcemeta::jsontoolkit::JSON value{2};
  document += value;
  EXPECT_TRUE(document.is_real());
  EXPECT_EQ(document.to_real(), 5.2);
}

TEST(JSON_number, add_real_real) {
  sourcemeta::jsontoolkit::JSON document{3.2};
  const sourcemeta::jsontoolkit::JSON value{2.0};
  document += value;
  EXPECT_TRUE(document.is_real());
  EXPECT_EQ(document.to_real(), 5.2);
}

TEST(JSON_number, add_integer_integer_within_object) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\": 5}")};
  const sourcemeta::jsontoolkit::JSON value{3};
  document.at("foo") += value;
  EXPECT_TRUE(document.at("foo").is_integer());
  EXPECT_EQ(document.at("foo").to_integer(), 8);
}

TEST(JSON_number, add_integer_real_within_object) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\": 5}")};
  const sourcemeta::jsontoolkit::JSON value{3.2};
  document.at("foo") += value;
  EXPECT_TRUE(document.at("foo").is_real());
  EXPECT_EQ(document.at("foo").to_real(), 8.2);
}

TEST(JSON_number, add_real_integer_within_object) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\": 3.2}")};
  const sourcemeta::jsontoolkit::JSON value{2};
  document.at("foo") += value;
  EXPECT_TRUE(document.at("foo").is_real());
  EXPECT_EQ(document.at("foo").to_real(), 5.2);
}

TEST(JSON_number, add_real_real_within_object) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\": 3.2}")};
  const sourcemeta::jsontoolkit::JSON value{2.0};
  document.at("foo") += value;
  EXPECT_TRUE(document.at("foo").is_real());
  EXPECT_EQ(document.at("foo").to_real(), 5.2);
}
