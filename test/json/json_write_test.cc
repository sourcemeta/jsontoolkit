#include <algorithm> // std::all_of
#include <gtest/gtest.h>
#include <jsontoolkit/json/write.h>
#include <set>     // std::set
#include <utility> // std::move
#include <vector>  // std::vector

TEST(JSON, make_array) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::make_array(document);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
}

TEST(JSON, make_object) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::make_object(document);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
}

TEST(JSON, construct_object) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::make_object()};
  sourcemeta::jsontoolkit::JSON child{sourcemeta::jsontoolkit::make_object()};
  sourcemeta::jsontoolkit::assign(child, "bar",
                                  sourcemeta::jsontoolkit::from(true));
  sourcemeta::jsontoolkit::assign(document, "foo", child);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::at(document, "foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(value1), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(value1, "bar"));
  const sourcemeta::jsontoolkit::Value &value2{
      sourcemeta::jsontoolkit::at(value1, "bar")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(value2));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(value2));
}

TEST(JSON, construct_array) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::make_array()};
  sourcemeta::jsontoolkit::JSON child{sourcemeta::jsontoolkit::make_array()};
  sourcemeta::jsontoolkit::push_front(child, sourcemeta::jsontoolkit::from(1));
  sourcemeta::jsontoolkit::push_front(document, child);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  const sourcemeta::jsontoolkit::Value &value1{
      sourcemeta::jsontoolkit::front(document)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(value1));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(value1), 1);
  const sourcemeta::jsontoolkit::Value &value2{
      sourcemeta::jsontoolkit::front(value1)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(value2));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(value2), 1);
}

TEST(JSON, set_null) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_null(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::set(document,
                               sourcemeta::jsontoolkit::from(nullptr));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_null(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_boolean(document));
}

TEST(JSON, set_const_null) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_null(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  const sourcemeta::jsontoolkit::JSON new_value{
      sourcemeta::jsontoolkit::from(nullptr)};
  sourcemeta::jsontoolkit::set(document, new_value);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_null(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_boolean(document));
}

TEST(JSON, set_negative_integer) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::set(document, sourcemeta::jsontoolkit::from(-4));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(document), -4);
}

TEST(JSON, set_negative_real) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::set(document, sourcemeta::jsontoolkit::from(-4.3));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), -4.3);
}

TEST(JSON, set_negative_integral_real) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::set(document, sourcemeta::jsontoolkit::from(-4.0));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
}

TEST(JSON, set_positive_integer) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::set(document, sourcemeta::jsontoolkit::from(4));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_real(document));
}

TEST(JSON, set_positive_real) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::set(document, sourcemeta::jsontoolkit::from(4.3));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
}

TEST(JSON, set_positive_integral_real) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(document));
  sourcemeta::jsontoolkit::set(document, sourcemeta::jsontoolkit::from(4.0));
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
}

TEST(JSON, must_delete_one_existent_key) {
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

TEST(JSON, must_delete_one_non_existent_key) {
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

TEST(JSON, nested_object_clear) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\":{\"bar\":true}}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  sourcemeta::jsontoolkit::clear(document);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
}

TEST(JSON, object_with_two_keys_clear) {
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

TEST(JSON, key_copy_assignment_same_type_parsed) {
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

TEST(JSON, key_move_assignment_same_type_parsed) {
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

TEST(JSON, key_copy_assignment_different_type_parsed) {
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

TEST(JSON, key_move_assignment_different_type_parsed) {
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

TEST(JSON, new_key_copy_assignment) {
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

TEST(JSON, new_key_move_assignment) {
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

TEST(JSON, assignment_string_from_boolean) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(false)};
  EXPECT_FALSE(sourcemeta::jsontoolkit::is_string(document));
  sourcemeta::jsontoolkit::set(document, sourcemeta::jsontoolkit::from("foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "foo");
}

TEST(JSON, assignment_string_from_string) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from("foo")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "foo");
  sourcemeta::jsontoolkit::set(document, sourcemeta::jsontoolkit::from("bar"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_string(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(document), "bar");
}

TEST(JSON, array_clear) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("[1,2,3]")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 3);
  sourcemeta::jsontoolkit::clear(document);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_array(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
}

TEST(JSON, array_set_child) {
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

TEST(JSON, array_const_push_back) {
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

TEST(JSON, array_push_back) {
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

TEST(JSON, array_const_push_front) {
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

TEST(JSON, array_push_front) {
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

TEST(JSON, assign_move_empty_object) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("{}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::empty(document));
  sourcemeta::jsontoolkit::assign(document, "foo",
                                  sourcemeta::jsontoolkit::from(true));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
}

TEST(JSON, erase_many_with_set) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse(
      "{\"foo\":true,\"bar\":false,\"baz\":true}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 3);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "baz"));
  const std::set<std::string> keys{"foo", "baz"};
  sourcemeta::jsontoolkit::erase_many(document, keys);
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
}

TEST(JSON, erase_many_with_vector) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse(
      "{\"foo\":true,\"bar\":false,\"baz\":true}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 3);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "baz"));
  const std::vector<std::string> keys{"foo", "baz"};
  sourcemeta::jsontoolkit::erase_many(document, keys);
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
}

TEST(JSON, erase_many_with_initializer_list) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse(
      "{\"foo\":true,\"bar\":false,\"baz\":true}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 3);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "baz"));
  sourcemeta::jsontoolkit::erase_many(document, {"foo", "baz"});
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
}

TEST(JSON, erase_many_with_vector_iterators) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse(
      "{\"foo\":true,\"bar\":false,\"baz\":true}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 3);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "baz"));
  const std::vector<std::string> keys{"foo", "baz"};
  sourcemeta::jsontoolkit::erase_many(document, keys.cbegin(), keys.cend());
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
}

TEST(JSON, erase_many_non_existent) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse(
      "{\"foo\":true,\"bar\":false,\"baz\":true}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 3);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "baz"));
  sourcemeta::jsontoolkit::erase_many(document, {"foo", "qux"});
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  EXPECT_FALSE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "baz"));
}

TEST(JSON, add_integer_integer) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(5)};
  const sourcemeta::jsontoolkit::JSON value{sourcemeta::jsontoolkit::from(3)};
  sourcemeta::jsontoolkit::add(document, value);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(document), 8);
}

TEST(JSON, add_integer_real) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(5)};
  const sourcemeta::jsontoolkit::JSON value{sourcemeta::jsontoolkit::from(3.2)};
  sourcemeta::jsontoolkit::add(document, value);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 8.2);
}

TEST(JSON, add_real_integer) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(3.2)};
  const sourcemeta::jsontoolkit::JSON value{sourcemeta::jsontoolkit::from(2)};
  sourcemeta::jsontoolkit::add(document, value);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 5.2);
}

TEST(JSON, add_real_real) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(3.2)};
  const sourcemeta::jsontoolkit::JSON value{sourcemeta::jsontoolkit::from(2.0)};
  sourcemeta::jsontoolkit::add(document, value);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(document), 5.2);
}

TEST(JSON, add_integer_integer_within_object) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\": 5}")};
  const sourcemeta::jsontoolkit::JSON value{sourcemeta::jsontoolkit::from(3)};
  sourcemeta::jsontoolkit::add(
      document, sourcemeta::jsontoolkit::at(document, "foo"), value);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_integer(
      sourcemeta::jsontoolkit::at(document, "foo")));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_integer(
                sourcemeta::jsontoolkit::at(document, "foo")),
            8);
}

TEST(JSON, add_integer_real_within_object) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\": 5}")};
  const sourcemeta::jsontoolkit::JSON value{sourcemeta::jsontoolkit::from(3.2)};
  sourcemeta::jsontoolkit::add(
      document, sourcemeta::jsontoolkit::at(document, "foo"), value);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(
      sourcemeta::jsontoolkit::at(document, "foo")));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(
                sourcemeta::jsontoolkit::at(document, "foo")),
            8.2);
}

TEST(JSON, add_real_integer_within_object) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\": 3.2}")};
  const sourcemeta::jsontoolkit::JSON value{sourcemeta::jsontoolkit::from(2)};
  sourcemeta::jsontoolkit::add(
      document, sourcemeta::jsontoolkit::at(document, "foo"), value);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(
      sourcemeta::jsontoolkit::at(document, "foo")));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(
                sourcemeta::jsontoolkit::at(document, "foo")),
            5.2);
}

TEST(JSON, add_real_real_within_object) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\": 3.2}")};
  const sourcemeta::jsontoolkit::JSON value{sourcemeta::jsontoolkit::from(2.0)};
  sourcemeta::jsontoolkit::add(
      document, sourcemeta::jsontoolkit::at(document, "foo"), value);
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_real(
      sourcemeta::jsontoolkit::at(document, "foo")));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_real(
                sourcemeta::jsontoolkit::at(document, "foo")),
            5.2);
}

TEST(JSON, clear_except_one_key_set) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\":true,\"bar\":false}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
  const std::set<std::string> keys{"bar"};
  sourcemeta::jsontoolkit::clear_except(document, keys);
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_FALSE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
}

TEST(JSON, clear_except_extra_key_set) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\":true,\"bar\":false}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
  const std::set<std::string> keys{"qux"};
  sourcemeta::jsontoolkit::clear_except(document, keys);
  EXPECT_TRUE(sourcemeta::jsontoolkit::empty(document));
}

TEST(JSON, clear_except_multiple_intersection_set) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse(
      "{\"foo\":1,\"bar\":2,\"baz\":3,\"qux\":4}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 4);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "baz"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "qux"));
  const std::set<std::string> keys{"foo", "baz", "xxx", "yyy"};
  sourcemeta::jsontoolkit::clear_except(document, keys);
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_FALSE(sourcemeta::jsontoolkit::defines(document, "bar"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "baz"));
  EXPECT_FALSE(sourcemeta::jsontoolkit::defines(document, "qux"));
}

TEST(JSON, clear_except_one_key_initializer_list) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\":true,\"bar\":false}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
  sourcemeta::jsontoolkit::clear_except(document, {"bar"});
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 1);
  EXPECT_FALSE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
}

TEST(JSON, clear_except_extra_key_initializer_list) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{\"foo\":true,\"bar\":false}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
  sourcemeta::jsontoolkit::clear_except(document, {"qux"});
  EXPECT_TRUE(sourcemeta::jsontoolkit::empty(document));
}

TEST(JSON, clear_except_multiple_intersection_initializer_list) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse(
      "{\"foo\":1,\"bar\":2,\"baz\":3,\"qux\":4}")};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 4);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "bar"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "baz"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "qux"));
  sourcemeta::jsontoolkit::clear_except(document, {"foo", "baz", "xxx", "yyy"});
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 2);
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "foo"));
  EXPECT_FALSE(sourcemeta::jsontoolkit::defines(document, "bar"));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "baz"));
  EXPECT_FALSE(sourcemeta::jsontoolkit::defines(document, "qux"));
}

TEST(JSON, long_object_key_assign) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::make_object()};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_EQ(sourcemeta::jsontoolkit::size(document), 0);
  const std::string key(30, 'x');
  EXPECT_EQ(key.size(), 30);
  sourcemeta::jsontoolkit::assign(document, key,
                                  sourcemeta::jsontoolkit::from(true));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, key));
  const auto &value{sourcemeta::jsontoolkit::at(document, key)};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_boolean(value));
  EXPECT_TRUE(sourcemeta::jsontoolkit::to_boolean(value));
}
