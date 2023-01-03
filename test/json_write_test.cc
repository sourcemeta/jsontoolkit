#include <algorithm> // std::all_of
#include <gtest/gtest.h>
#include <jsontoolkit/json/write.h>
#include <utility> // std::move

TEST(CATEGORY, make_array) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::make_array(document);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
}

TEST(CATEGORY, make_object) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::make_object(document);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
}

TEST(CATEGORY, set_null) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_null(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::set(document,
                               sourcemeta::jsontoolkit::from(nullptr));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_null(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_boolean(document));
}

TEST(CATEGORY, set_const_null) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_null(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  const sourcemeta::jsontoolkit::JSON new_value{
      sourcemeta::jsontoolkit::from(nullptr)};
  sourcemeta::jsontoolkit::set(document, new_value);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_null(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_boolean(document));
}

TEST(CATEGORY, set_negative_integer) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::set(document, sourcemeta::jsontoolkit::from(-4));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(document), -4);
}

TEST(CATEGORY, set_negative_real) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::set(document, sourcemeta::jsontoolkit::from(-4.3));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -4.3);
}

TEST(CATEGORY, set_negative_integral_real) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::set(document, sourcemeta::jsontoolkit::from(-4.0));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
}

TEST(CATEGORY, set_positive_integer) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::set(document, sourcemeta::jsontoolkit::from(4));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_real(document));
}

TEST(CATEGORY, set_positive_real) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::set(document, sourcemeta::jsontoolkit::from(4.3));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
}

TEST(CATEGORY, set_positive_integral_real) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::set(document, sourcemeta::jsontoolkit::from(4.0));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
}

TEST(CATEGORY, must_delete_one_existent_key) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\":true,\"bar\":false}")};
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
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\":true,\"bar\":false}")};
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
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\":{\"bar\":true}}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  sourcemeta::jsontoolkit::clear(document);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
}

TEST(CATEGORY, object_with_two_keys_clear) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\":1,\"bar\":2}")};
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
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": \"bar\" }")};
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value1), "bar");
  const sourcemeta::jsontoolkit::JSON new_value{
      sourcemeta::jsontoolkit::from("baz")};
  sourcemeta::jsontoolkit::assign(document, "foo", new_value);
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value2{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value2));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value2), "baz");
}

TEST(CATEGORY, key_move_assignment_same_type_parsed) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": \"bar\" }")};
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value1), "bar");
  const sourcemeta::jsontoolkit::JSON new_value{
      sourcemeta::jsontoolkit::from("baz")};
  sourcemeta::jsontoolkit::assign(document, "foo", std::move(new_value));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value2{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value2));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value2), "baz");
}

TEST(CATEGORY, key_copy_assignment_different_type_parsed) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": \"bar\" }")};
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value1), "bar");
  const sourcemeta::jsontoolkit::JSON new_value{
      sourcemeta::jsontoolkit::from(1)};
  sourcemeta::jsontoolkit::assign(document, "foo", new_value);
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value2{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(value2));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(value2), 1);
}

TEST(CATEGORY, key_move_assignment_different_type_parsed) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": \"bar\" }")};
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value1), "bar");
  const sourcemeta::jsontoolkit::JSON new_value{
      sourcemeta::jsontoolkit::from(1)};
  sourcemeta::jsontoolkit::assign(document, "foo", std::move(new_value));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value2{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(value2));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(value2), 1);
}

TEST(CATEGORY, new_key_copy_assignment) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": \"bar\" }")};
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value1), "bar");

  const sourcemeta::jsontoolkit::JSON new_value{
      sourcemeta::jsontoolkit::from("baz")};
  sourcemeta::jsontoolkit::assign(document, "bar", new_value);
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);

  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value2{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value2));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value2), "bar");

  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
  const sourcemeta::jsontoolkit::Value &value3{
      sourcemeta::jsontoolkit::at(document, "bar")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value3));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value3), "baz");
}

TEST(CATEGORY, new_key_move_assignment) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{ \"foo\": \"bar\" }")};
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value1), "bar");

  const sourcemeta::jsontoolkit::JSON new_value{
      sourcemeta::jsontoolkit::from("baz")};
  sourcemeta::jsontoolkit::assign(document, "bar", std::move(new_value));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);

  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value2{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value2));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value2), "bar");

  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
  const sourcemeta::jsontoolkit::Value &value3{
      sourcemeta::jsontoolkit::at(document, "bar")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(value3));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(value3), "baz");
}

TEST(CATEGORY, assignment_string_from_boolean) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(false)};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_string(document));
  sourcemeta::jsontoolkit::set(document, sourcemeta::jsontoolkit::from("foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "foo");
}

TEST(CATEGORY, assignment_string_from_string) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from("foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "foo");
  sourcemeta::jsontoolkit::set(document, sourcemeta::jsontoolkit::from("bar"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "bar");
}

TEST(CATEGORY, array_clear) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[1,2,3]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 3);
  sourcemeta::jsontoolkit::clear(document);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
}

TEST(CATEGORY, array_set_child) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[1,2,3]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 3);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 0)),
            1);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 1)),
            2);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 2)),
            3);
  sourcemeta::jsontoolkit::set(document,
                               sourcemeta::jsontoolkit::at(document, 1),
                               sourcemeta::jsontoolkit::from(6));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 3);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 0)),
            1);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 1)),
            6);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 2)),
            3);
}

TEST(CATEGORY, array_const_push_back) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[1,2]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 0)),
            1);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 1)),
            2);
  const sourcemeta::jsontoolkit::JSON new_element{
      sourcemeta::jsontoolkit::from(3)};
  sourcemeta::jsontoolkit::push_back(document, new_element);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 3);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 0)),
            1);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 1)),
            2);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 2)),
            3);
}

TEST(CATEGORY, array_push_back) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[1,2]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 0)),
            1);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 1)),
            2);
  sourcemeta::jsontoolkit::push_back(document,
                                     sourcemeta::jsontoolkit::from(3));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 3);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 0)),
            1);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 1)),
            2);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 2)),
            3);
}

TEST(CATEGORY, array_const_push_front) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[1,2]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 0)),
            1);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 1)),
            2);
  const sourcemeta::jsontoolkit::JSON new_element{
      sourcemeta::jsontoolkit::from(3)};
  sourcemeta::jsontoolkit::push_front(document, new_element);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 3);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 0)),
            3);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 1)),
            1);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 2)),
            2);
}

TEST(CATEGORY, array_push_front) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[1,2]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 0)),
            1);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 1)),
            2);
  sourcemeta::jsontoolkit::push_front(document,
                                      sourcemeta::jsontoolkit::from(3));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 3);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 0)),
            3);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 1)),
            1);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, 2)),
            2);
}

// TEST(CATEGORY, map_copy_constructor) {
// const sourcemeta::jsontoolkit::JSON
// document{sourcemeta::jsontoolkit::parse("{\"foo\":1}")};
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
// const sourcemeta::jsontoolkit::JSON
// document{sourcemeta::jsontoolkit::parse("{\"foo\":1}")};
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
