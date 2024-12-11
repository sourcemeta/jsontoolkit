#include <algorithm>
#include <gtest/gtest.h>
#include <map>
#include <set>
#include <string>
#include <type_traits>

#include <sourcemeta/jsontoolkit/json.h>

TEST(JSON_object, general_traits) {
  EXPECT_TRUE(std::is_default_constructible<
              sourcemeta::jsontoolkit::JSON::Object>::value);
  EXPECT_TRUE(std::is_nothrow_default_constructible<
              sourcemeta::jsontoolkit::JSON::Object>::value);
  EXPECT_TRUE(
      std::is_destructible<sourcemeta::jsontoolkit::JSON::Object>::value);
  EXPECT_TRUE(std::is_nothrow_destructible<
              sourcemeta::jsontoolkit::JSON::Object>::value);
}

TEST(JSON_object, copy_traits) {
  EXPECT_TRUE(
      std::is_copy_assignable<sourcemeta::jsontoolkit::JSON::Object>::value);
  EXPECT_TRUE(
      std::is_copy_constructible<sourcemeta::jsontoolkit::JSON::Object>::value);
  EXPECT_FALSE(std::is_nothrow_copy_assignable<
               sourcemeta::jsontoolkit::JSON::Object>::value);
  EXPECT_FALSE(std::is_nothrow_copy_constructible<
               sourcemeta::jsontoolkit::JSON::Object>::value);
}

TEST(JSON_object, move_traits) {
  EXPECT_TRUE(
      std::is_move_assignable<sourcemeta::jsontoolkit::JSON::Object>::value);
  EXPECT_TRUE(
      std::is_move_constructible<sourcemeta::jsontoolkit::JSON::Object>::value);
  EXPECT_TRUE(std::is_nothrow_move_assignable<
              sourcemeta::jsontoolkit::JSON::Object>::value);
}

TEST(JSON_object, type) {
  const sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{false}},
      {"bar", sourcemeta::jsontoolkit::JSON{true}}};
  EXPECT_EQ(document.type(), sourcemeta::jsontoolkit::JSON::Type::Object);
}

TEST(JSON_object, initializer_list_2_booleans) {
  const sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{false}},
      {"bar", sourcemeta::jsontoolkit::JSON{true}}};
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);
  EXPECT_TRUE(document.at("foo").is_boolean());
  EXPECT_TRUE(document.at("bar").is_boolean());
  EXPECT_FALSE(document.at("foo").to_boolean());
  EXPECT_TRUE(document.at("bar").to_boolean());
}

TEST(JSON_object, empty_with_copy_constructor) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::JSON::Object{}};

  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 0);
  EXPECT_EQ(document.object_size(), 0);
}

TEST(JSON_object, empty_with_make_object) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::JSON::make_object();
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 0);
  EXPECT_EQ(document.object_size(), 0);
}

TEST(JSON_object, assign_booleans) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::JSON::make_object();
  EXPECT_TRUE(document.is_object());
  document.assign("foo", sourcemeta::jsontoolkit::JSON{false});
  document.assign("bar", sourcemeta::jsontoolkit::JSON{true});
  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);
  EXPECT_TRUE(document.at("foo").is_boolean());
  EXPECT_TRUE(document.at("bar").is_boolean());
  EXPECT_FALSE(document.at("foo").to_boolean());
  EXPECT_TRUE(document.at("bar").to_boolean());
}

TEST(JSON_object, must_delete_one_existent_key) {
  sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{false}},
      {"bar", sourcemeta::jsontoolkit::JSON{true}}};

  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.defines("bar"));

  document.erase("foo");

  EXPECT_EQ(document.size(), 1);
  EXPECT_EQ(document.object_size(), 1);
  EXPECT_FALSE(document.defines("foo"));
  EXPECT_TRUE(document.defines("bar"));
}

TEST(JSON_object, must_delete_one_non_existent_key) {
  sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{false}},
      {"bar", sourcemeta::jsontoolkit::JSON{true}}};

  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.defines("bar"));

  document.erase("xxx");

  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.defines("bar"));
}

TEST(JSON_object, modify_after_copy) {
  // Original document
  sourcemeta::jsontoolkit::JSON document{
      {"x", sourcemeta::jsontoolkit::JSON{1}},
      {"y", sourcemeta::jsontoolkit::JSON{2}}};
  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);
  EXPECT_TRUE(document.defines("x"));
  EXPECT_TRUE(document.defines("y"));
  EXPECT_EQ(document.at("x").to_integer(), 1);
  EXPECT_EQ(document.at("y").to_integer(), 2);

  // Make copy
  sourcemeta::jsontoolkit::JSON copy = document;
  EXPECT_EQ(copy.size(), 2);
  EXPECT_EQ(copy.object_size(), 2);
  EXPECT_TRUE(copy.defines("x"));
  EXPECT_TRUE(copy.defines("y"));
  EXPECT_EQ(copy.at("x").to_integer(), 1);
  EXPECT_EQ(copy.at("y").to_integer(), 2);

  // Modify copy
  copy.erase("x");
  EXPECT_EQ(copy.size(), 1);
  EXPECT_EQ(copy.object_size(), 1);
  EXPECT_TRUE(copy.defines("y"));
  EXPECT_EQ(copy.at("y").to_integer(), 2);

  // Original document must remain intact
  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);
  EXPECT_TRUE(document.defines("x"));
  EXPECT_TRUE(document.defines("y"));
  EXPECT_EQ(document.at("x").to_integer(), 1);
  EXPECT_EQ(document.at("y").to_integer(), 2);
}

TEST(JSON_object, nested_object_clear) {
  sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{true}}};
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 1);
  EXPECT_EQ(document.object_size(), 1);
  document.clear();
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 0);
  EXPECT_EQ(document.object_size(), 0);
}

TEST(JSON_object, const_all_of_false) {
  const sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{1}},
      {"bar", sourcemeta::jsontoolkit::JSON{"2"}}};
  const bool result =
      std::all_of(document.as_object().cbegin(), document.as_object().cend(),
                  [](const auto &pair) { return pair.second.is_integer(); });
  EXPECT_FALSE(result);
}

TEST(JSON_object, const_all_of_true) {
  const sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{1}},
      {"bar", sourcemeta::jsontoolkit::JSON{2}}};
  const bool result =
      std::all_of(document.as_object().cbegin(), document.as_object().cend(),
                  [](const auto &pair) { return pair.second.is_integer(); });
  EXPECT_TRUE(result);
}

TEST(JSON_object, assign_literal_lvalue_string) {
  sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{1}}};
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 1);
  EXPECT_EQ(document.object_size(), 1);
  EXPECT_TRUE(document.defines("foo"));

  const sourcemeta::jsontoolkit::JSON value{"baz"};
  document.assign("bar", value);
  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.defines("bar"));

  EXPECT_EQ(document.at("foo").to_integer(), 1);
  EXPECT_EQ(document.at("bar").to_string(), "baz");
}

TEST(JSON_object, assign_literal_rvalue_string) {
  sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{1}}};
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 1);
  EXPECT_EQ(document.object_size(), 1);
  EXPECT_TRUE(document.defines("foo"));

  document.assign("bar", sourcemeta::jsontoolkit::JSON{"baz"});
  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.defines("bar"));

  EXPECT_EQ(document.at("foo").to_integer(), 1);
  EXPECT_EQ(document.at("bar").to_string(), "baz");
}

TEST(JSON_object, key_copy_assignment_same_type) {
  sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{"bar"}}};
  EXPECT_EQ(document.size(), 1);
  EXPECT_EQ(document.object_size(), 1);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.at("foo").is_string());
  EXPECT_EQ(document.at("foo").to_string(), "bar");

  const sourcemeta::jsontoolkit::JSON value{"baz"};
  document.assign("foo", value);

  EXPECT_EQ(document.size(), 1);
  EXPECT_EQ(document.object_size(), 1);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.at("foo").is_string());
  EXPECT_EQ(document.at("foo").to_string(), "baz");
}

TEST(JSON_object, key_move_assignment_same_type) {
  sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{"bar"}}};
  EXPECT_EQ(document.size(), 1);
  EXPECT_EQ(document.object_size(), 1);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.at("foo").is_string());
  EXPECT_EQ(document.at("foo").to_string(), "bar");

  sourcemeta::jsontoolkit::JSON value{"baz"};
  document.assign("foo", std::move(value));

  EXPECT_EQ(document.size(), 1);
  EXPECT_EQ(document.object_size(), 1);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.at("foo").is_string());
  EXPECT_EQ(document.at("foo").to_string(), "baz");
}

TEST(JSON_object, key_copy_assignment_different_type) {
  sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{"bar"}}};
  EXPECT_EQ(document.size(), 1);
  EXPECT_EQ(document.object_size(), 1);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.at("foo").is_string());
  EXPECT_EQ(document.at("foo").to_string(), "bar");

  const sourcemeta::jsontoolkit::JSON value{1};
  document.assign("foo", value);

  EXPECT_EQ(document.size(), 1);
  EXPECT_EQ(document.object_size(), 1);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.at("foo").is_integer());
  EXPECT_EQ(document.at("foo").to_integer(), 1);
}

TEST(JSON_object, key_move_assignment_different_type) {
  sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{"bar"}}};
  EXPECT_EQ(document.size(), 1);
  EXPECT_EQ(document.object_size(), 1);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.at("foo").is_string());
  EXPECT_EQ(document.at("foo").to_string(), "bar");

  sourcemeta::jsontoolkit::JSON value{1};
  document.assign("foo", std::move(value));

  EXPECT_EQ(document.size(), 1);
  EXPECT_EQ(document.object_size(), 1);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.at("foo").is_integer());
  EXPECT_EQ(document.at("foo").to_integer(), 1);
}

TEST(JSON_object, all_of_true) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }");
  const bool result =
      std::all_of(document.as_object().begin(), document.as_object().end(),
                  [](auto &pair) { return pair.second.is_integer(); });
  EXPECT_TRUE(result);
}

TEST(JSON_object, all_of_with_key_true) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }");
  const bool result =
      std::all_of(document.as_object().begin(), document.as_object().end(),
                  [](auto &pair) { return pair.first.size() > 2; });
  EXPECT_TRUE(result);
}

TEST(JSON_object, all_of_with_key_false) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"f\": 1, \"bar\": 2 }");
  const bool result =
      std::all_of(document.as_object().begin(), document.as_object().end(),
                  [](auto &pair) { return pair.first.size() > 2; });
  EXPECT_FALSE(result);
}

TEST(JSON, const_object_iterator) {
  std::map<std::string, std::int64_t> result;
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }");
  for (const auto &pair : document.as_object()) {
    result.insert({pair.first, pair.second.to_integer()});
  }

  EXPECT_EQ(result.size(), 2);
  EXPECT_EQ(result.at("foo"), 1);
  EXPECT_EQ(result.at("bar"), 2);
}

TEST(JSON_object, iterator) {
  std::map<std::string, std::int64_t> result;
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }");
  for (auto &pair : document.as_object()) {
    result.insert({pair.first, pair.second.to_integer()});
  }

  EXPECT_EQ(result.size(), 2);
  EXPECT_EQ(result.at("foo"), 1);
  EXPECT_EQ(result.at("bar"), 2);
}

TEST(JSON_object, into_object) {
  sourcemeta::jsontoolkit::JSON document{true};
  EXPECT_TRUE(document.is_boolean());
  document.into_object();
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 0);
  EXPECT_EQ(document.object_size(), 0);
}

TEST(JSON_object, erase_with_initializer_list) {
  sourcemeta::jsontoolkit::JSON document = sourcemeta::jsontoolkit::parse(
      "{\"foo\":true,\"bar\":false,\"baz\":true}");
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 3);
  EXPECT_EQ(document.object_size(), 3);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.defines("bar"));
  EXPECT_TRUE(document.defines("baz"));
  document.erase_keys({"foo", "baz"});
  EXPECT_EQ(document.size(), 1);
  EXPECT_EQ(document.object_size(), 1);
  EXPECT_TRUE(document.defines("bar"));
}

TEST(JSON_object, erase_with_vector_iterators) {
  sourcemeta::jsontoolkit::JSON document = sourcemeta::jsontoolkit::parse(
      "{\"foo\":true,\"bar\":false,\"baz\":true}");
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 3);
  EXPECT_EQ(document.object_size(), 3);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.defines("bar"));
  EXPECT_TRUE(document.defines("baz"));
  const std::vector<std::string> keys{"foo", "baz"};
  document.erase_keys(keys.cbegin(), keys.cend());
  EXPECT_EQ(document.size(), 1);
  EXPECT_EQ(document.object_size(), 1);
  EXPECT_TRUE(document.defines("bar"));
}

TEST(JSON_object, erase_non_existent) {
  sourcemeta::jsontoolkit::JSON document = sourcemeta::jsontoolkit::parse(
      "{\"foo\":true,\"bar\":false,\"baz\":true}");
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 3);
  EXPECT_EQ(document.object_size(), 3);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.defines("bar"));
  EXPECT_TRUE(document.defines("baz"));
  document.erase_keys({"foo", "qux"});
  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);
  EXPECT_FALSE(document.defines("foo"));
  EXPECT_TRUE(document.defines("bar"));
  EXPECT_TRUE(document.defines("baz"));
}

TEST(JSON_object, assign_move_empty_object) {
  sourcemeta::jsontoolkit::JSON document = sourcemeta::jsontoolkit::parse("{}");
  EXPECT_TRUE(document.empty());
  document.assign("foo", sourcemeta::jsontoolkit::JSON{true});
  EXPECT_TRUE(document.defines("foo"));
}

TEST(JSON_object, long_key_assign) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::JSON::make_object();
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 0);
  EXPECT_EQ(document.object_size(), 0);
  const std::string key(30, 'x');
  EXPECT_EQ(key.size(), 30);
  document.assign(key, sourcemeta::jsontoolkit::JSON{true});
  EXPECT_TRUE(document.defines(key));
  const auto &value{document.at(key)};
  EXPECT_TRUE(value.is_boolean());
  EXPECT_TRUE(value.to_boolean());
}

TEST(JSON_object, clear_except_one_key_initializer_list) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{\"foo\":true,\"bar\":false}");
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.defines("bar"));
  document.clear_except({"bar"});
  EXPECT_EQ(document.size(), 1);
  EXPECT_EQ(document.object_size(), 1);
  EXPECT_FALSE(document.defines("foo"));
  EXPECT_TRUE(document.defines("bar"));
}

TEST(JSON_object, clear_except_extra_key_initializer_list) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{\"foo\":true,\"bar\":false}");
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.defines("bar"));
  document.clear_except({"qux"});
  EXPECT_TRUE(document.empty());
}

TEST(JSON_object, clear_except_multiple_intersection_initializer_list) {
  sourcemeta::jsontoolkit::JSON document = sourcemeta::jsontoolkit::parse(
      "{\"foo\":1,\"bar\":2,\"baz\":3,\"qux\":4}");
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 4);
  EXPECT_EQ(document.object_size(), 4);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.defines("bar"));
  EXPECT_TRUE(document.defines("baz"));
  EXPECT_TRUE(document.defines("qux"));
  document.clear_except({"foo", "baz", "xxx", "yyy"});
  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_FALSE(document.defines("bar"));
  EXPECT_TRUE(document.defines("baz"));
  EXPECT_FALSE(document.defines("qux"));
}

TEST(JSON_object, at_index_using_integer) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{\"0\":1,\"1\":2,\"2\":3}");
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 3);
  EXPECT_EQ(document.object_size(), 3);
  EXPECT_TRUE(document.defines("0"));
  EXPECT_TRUE(document.defines("1"));
  EXPECT_TRUE(document.defines("2"));
  EXPECT_TRUE(document.at("0").is_integer());
  EXPECT_TRUE(document.at("1").is_integer());
  EXPECT_TRUE(document.at("2").is_integer());
  EXPECT_EQ(document.at("0").to_integer(), 1);
  EXPECT_EQ(document.at("1").to_integer(), 2);
  EXPECT_EQ(document.at("2").to_integer(), 3);
}

TEST(JSON_object, at_index_using_integer_non_const) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{\"0\":1,\"1\":2,\"2\":3}");
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 3);
  EXPECT_EQ(document.object_size(), 3);
  EXPECT_TRUE(document.defines("0"));
  EXPECT_TRUE(document.defines("1"));
  EXPECT_TRUE(document.defines("2"));
  EXPECT_TRUE(document.at("0").is_integer());
  EXPECT_TRUE(document.at("1").is_integer());
  EXPECT_TRUE(document.at("2").is_integer());
  EXPECT_EQ(document.at("0").to_integer(), 1);
  EXPECT_EQ(document.at("1").to_integer(), 2);
  EXPECT_EQ(document.at("2").to_integer(), 3);
}

TEST(JSON_object, defines_property_using_integer) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{\"0\":1,\"1\":2,\"2\":3}");
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 3);
  EXPECT_EQ(document.object_size(), 3);
  EXPECT_TRUE(document.defines(0));
  EXPECT_TRUE(document.defines(1));
  EXPECT_TRUE(document.defines(2));
}

TEST(JSON_object, assign_if_missing_not_missing_lvalue) {
  sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{false}},
      {"bar", sourcemeta::jsontoolkit::JSON{true}}};

  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.defines("bar"));
  EXPECT_FALSE(document.at("foo").to_boolean());
  EXPECT_TRUE(document.at("bar").to_boolean());

  const sourcemeta::jsontoolkit::JSON new_value{1};
  document.assign_if_missing("foo", new_value);

  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.defines("bar"));
  EXPECT_FALSE(document.at("foo").to_boolean());
  EXPECT_TRUE(document.at("bar").to_boolean());
}

TEST(JSON_object, assign_if_missing_missing_lvalue) {
  sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{false}},
      {"bar", sourcemeta::jsontoolkit::JSON{true}}};

  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.defines("bar"));
  EXPECT_FALSE(document.at("foo").to_boolean());
  EXPECT_TRUE(document.at("bar").to_boolean());

  const sourcemeta::jsontoolkit::JSON new_value{1};
  document.assign_if_missing("baz", new_value);

  EXPECT_EQ(document.size(), 3);
  EXPECT_EQ(document.object_size(), 3);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.defines("bar"));
  EXPECT_TRUE(document.defines("baz"));
  EXPECT_FALSE(document.at("foo").to_boolean());
  EXPECT_TRUE(document.at("bar").to_boolean());
  EXPECT_EQ(document.at("baz").to_integer(), 1);
}

TEST(JSON_object, assign_if_missing_not_missing_rvalue) {
  sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{false}},
      {"bar", sourcemeta::jsontoolkit::JSON{true}}};

  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.defines("bar"));
  EXPECT_FALSE(document.at("foo").to_boolean());
  EXPECT_TRUE(document.at("bar").to_boolean());

  document.assign_if_missing("foo", sourcemeta::jsontoolkit::JSON{1});

  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.defines("bar"));
  EXPECT_FALSE(document.at("foo").to_boolean());
  EXPECT_TRUE(document.at("bar").to_boolean());
}

TEST(JSON_object, assign_if_missing_missing_rvalue) {
  sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{false}},
      {"bar", sourcemeta::jsontoolkit::JSON{true}}};

  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.defines("bar"));
  EXPECT_FALSE(document.at("foo").to_boolean());
  EXPECT_TRUE(document.at("bar").to_boolean());

  document.assign_if_missing("baz", sourcemeta::jsontoolkit::JSON{1});

  EXPECT_EQ(document.size(), 3);
  EXPECT_EQ(document.object_size(), 3);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.defines("bar"));
  EXPECT_TRUE(document.defines("baz"));
  EXPECT_FALSE(document.at("foo").to_boolean());
  EXPECT_TRUE(document.at("bar").to_boolean());
  EXPECT_EQ(document.at("baz").to_integer(), 1);
}

TEST(JSON_object, estimated_byte_size_integers) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }");
  EXPECT_EQ(document.estimated_byte_size(), 22);
}

TEST(JSON_object, estimated_byte_size_nested) {
  const sourcemeta::jsontoolkit::JSON document = sourcemeta::jsontoolkit::parse(
      "{ \"foo\": 1, \"bar\": { \"bar\": true } }");
  EXPECT_EQ(document.estimated_byte_size(), 18);
}

TEST(JSON_object, fast_hash_integers) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }");
  EXPECT_EQ(document.fast_hash(), 26);
}

TEST(JSON_object, fast_hash_nested) {
  const sourcemeta::jsontoolkit::JSON document = sourcemeta::jsontoolkit::parse(
      "{ \"foo\": 1, \"bar\": { \"bar\": true } }");
  EXPECT_EQ(document.fast_hash(), 32);
}

TEST(JSON_object, find) {
  const auto document{sourcemeta::jsontoolkit::parse("{\"foo\":5}")};
  const auto hash{document.as_object().hash("foo")};
  EXPECT_NE(document.as_object().find("foo", hash),
            document.as_object().cend());
  EXPECT_EQ(document.as_object().find("foo", hash)->first, "foo");
  EXPECT_TRUE(document.as_object().find("foo", hash)->second.is_integer());
  EXPECT_EQ(document.as_object().find("foo", hash)->second.to_integer(), 5);
  EXPECT_EQ(document.as_object().find("bar", document.as_object().hash("bar")),
            document.as_object().cend());
}

TEST(JSON_object, at_hash_const) {
  const sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{false}},
      {"bar", sourcemeta::jsontoolkit::JSON{true}}};
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);

  const sourcemeta::jsontoolkit::Hash hasher;
  const auto hash_foo{hasher("foo")};
  const auto hash_bar{hasher("bar")};

  EXPECT_TRUE(document.at("foo", hash_foo).is_boolean());
  EXPECT_TRUE(document.at("bar", hash_bar).is_boolean());
  EXPECT_FALSE(document.at("foo", hash_foo).to_boolean());
  EXPECT_TRUE(document.at("bar", hash_bar).to_boolean());
}

TEST(JSON_object, at_hash_non_const) {
  sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{false}},
      {"bar", sourcemeta::jsontoolkit::JSON{true}}};
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);

  const sourcemeta::jsontoolkit::Hash hasher;
  const auto hash_foo{hasher("foo")};
  const auto hash_bar{hasher("bar")};

  EXPECT_TRUE(document.at("foo", hash_foo).is_boolean());
  EXPECT_TRUE(document.at("bar", hash_bar).is_boolean());
  EXPECT_FALSE(document.at("foo", hash_foo).to_boolean());
  EXPECT_TRUE(document.at("bar", hash_bar).to_boolean());
}

TEST(JSON_object, defines_hash_const) {
  const sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{false}},
      {"bar", sourcemeta::jsontoolkit::JSON{true}}};
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);

  const sourcemeta::jsontoolkit::Hash hasher;
  EXPECT_TRUE(document.defines("foo", hasher("foo")));
  EXPECT_TRUE(document.defines("bar", hasher("bar")));
  EXPECT_FALSE(document.defines("baz", hasher("baz")));
}

TEST(JSON_object, iterator_hash) {
  const sourcemeta::jsontoolkit::JSON document{
      {"foo", sourcemeta::jsontoolkit::JSON{false}},
      {"bar", sourcemeta::jsontoolkit::JSON{true}}};
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 2);
  EXPECT_EQ(document.object_size(), 2);

  for (const auto &entry : document.as_object()) {
    EXPECT_EQ(document.at(entry.first, entry.hash), entry.second);
  }
}
