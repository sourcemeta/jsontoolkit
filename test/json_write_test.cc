#include <algorithm> // std::all_of
#include <gtest/gtest.h>
#include <jsontoolkit/json/write.h>
#include <utility> // std::move

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

TEST(CATEGORY, must_delete_one_existent_key) {
  auto document{sourcemeta::jsontoolkit::parse("{\"foo\":true,\"bar\":false}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
  sourcemeta::jsontoolkit::erase(document, "foo");
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_FALSE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
}

TEST(CATEGORY, must_delete_one_non_existent_key) {
  auto document{sourcemeta::jsontoolkit::parse("{\"foo\":true,\"bar\":false}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
  sourcemeta::jsontoolkit::erase(document, "xxx");
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
}

TEST(CATEGORY, nested_object_clear) {
  auto document{sourcemeta::jsontoolkit::parse("{\"foo\":{\"bar\":true}}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  sourcemeta::jsontoolkit::clear(document);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
}

TEST(CATEGORY, object_with_two_keys_clear) {
  auto document{sourcemeta::jsontoolkit::parse("{\"foo\":1,\"bar\":2}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
  sourcemeta::jsontoolkit::clear(document);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
  EXPECT_FALSE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_FALSE(sourcemeta::jsontoolkit::defines(document, "bar"));
}

TEST(CATEGORY, key_copy_assignment_same_type_parsed) {
  auto document{sourcemeta::jsontoolkit::parse("{ \"foo\": \"bar\" }")};
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const auto &value1{sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value1), "bar");
  const auto new_value{sourcemeta::jsontoolkit::from("baz")};
  sourcemeta::jsontoolkit::assign(document, "foo", new_value);
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const auto &value2{sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value2));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value2), "baz");
}

TEST(CATEGORY, key_move_assignment_same_type_parsed) {
  auto document{sourcemeta::jsontoolkit::parse("{ \"foo\": \"bar\" }")};
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const auto &value1{sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value1), "bar");
  const auto new_value{sourcemeta::jsontoolkit::from("baz")};
  sourcemeta::jsontoolkit::assign(document, "foo", std::move(new_value));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const auto &value2{sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value2));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value2), "baz");
}

TEST(CATEGORY, key_copy_assignment_different_type_parsed) {
  auto document{sourcemeta::jsontoolkit::parse("{ \"foo\": \"bar\" }")};
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const auto &value1{sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value1), "bar");
  const auto new_value{sourcemeta::jsontoolkit::from(1)};
  sourcemeta::jsontoolkit::assign(document, "foo", new_value);
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const auto &value2{sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(value2));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(value2), 1);
}

TEST(CATEGORY, key_move_assignment_different_type_parsed) {
  auto document{sourcemeta::jsontoolkit::parse("{ \"foo\": \"bar\" }")};
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const auto &value1{sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value1), "bar");
  const auto new_value{sourcemeta::jsontoolkit::from(1)};
  sourcemeta::jsontoolkit::assign(document, "foo", std::move(new_value));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const auto &value2{sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(value2));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(value2), 1);
}

TEST(CATEGORY, new_key_copy_assignment) {
  auto document{sourcemeta::jsontoolkit::parse("{ \"foo\": \"bar\" }")};
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const auto &value1{sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value1), "bar");

  const auto new_value{sourcemeta::jsontoolkit::from("baz")};
  sourcemeta::jsontoolkit::assign(document, "bar", new_value);
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);

  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const auto &value2{sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value2));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value2), "bar");

  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
  const auto &value3{sourcemeta::jsontoolkit::at(document, "bar")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value3));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value3), "baz");
}

TEST(CATEGORY, new_key_move_assignment) {
  auto document{sourcemeta::jsontoolkit::parse("{ \"foo\": \"bar\" }")};
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const auto &value1{sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value1), "bar");

  const auto new_value{sourcemeta::jsontoolkit::from("baz")};
  sourcemeta::jsontoolkit::assign(document, "bar", std::move(new_value));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);

  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const auto &value2{sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value2));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value2), "bar");

  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
  const auto &value3{sourcemeta::jsontoolkit::at(document, "bar")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value3));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value3), "baz");
}

TEST(CATEGORY, assignment_string_from_boolean) {
  auto document{sourcemeta::jsontoolkit::from(false)};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_string(document));
  sourcemeta::jsontoolkit::set(document, "foo");
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "foo");
}

TEST(CATEGORY, assignment_string_from_string) {
  auto document{sourcemeta::jsontoolkit::from("foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "foo");
  sourcemeta::jsontoolkit::set(document, "bar");
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "bar");
}

TEST(CATEGORY, array_clear) {
  auto document{sourcemeta::jsontoolkit::parse("[1,2,3]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 3);
  sourcemeta::jsontoolkit::clear(document);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
}

// TEST(CATEGORY, map_copy_constructor) {
// const auto document{sourcemeta::jsontoolkit::parse("{\"foo\":1}")};
// EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
// EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
// EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
// EXPECT_TRUE(document.at("foo").is_integer());
// const std::map<std::string, sourcemeta::jsontoolkit::JSON<std::string>>
// value{
// {"bar", 5}};
// document.assign("xxx", value);
// EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
// EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
// EXPECT_TRUE(document.at("foo").is_integer());
// EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "xxx"));
// EXPECT_TRUE(document.at("xxx").is_object());
// EXPECT_EQ(document.at("xxx").size(), 1);
// EXPECT_TRUE(document.at("xxx").defines(document, "bar"));
// EXPECT_TRUE(document.at("xxx").at("bar").is_integer());
// EXPECT_EQ(document.at("xxx").at("bar"), 5);
// }

// TEST(CATEGORY, map_move_constructor) {
// const auto document{sourcemeta::jsontoolkit::parse("{\"foo\":1}")};
// EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
// EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
// EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
// EXPECT_TRUE(document.at("foo").is_integer());
// std::map<std::string, sourcemeta::jsontoolkit::JSON<std::string>> value{
// {"bar", 5}};
// document.assign("xxx", std::move(value));
// EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
// EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
// EXPECT_TRUE(document.at("foo").is_integer());
// EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "xxx"));
// EXPECT_TRUE(document.at("xxx").is_object());
// EXPECT_EQ(document.at("xxx").size(), 1);
// EXPECT_TRUE(document.at("xxx").defines(document, "bar"));
// EXPECT_TRUE(document.at("xxx").at("bar").is_integer());
// EXPECT_EQ(document.at("xxx").at("bar"), 5);
// }
