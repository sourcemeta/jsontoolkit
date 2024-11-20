#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <type_traits>
#include <unordered_set>
#include <utility>

TEST(JSON_value, general_traits) {
  EXPECT_FALSE(
      std::is_default_constructible<sourcemeta::jsontoolkit::JSON>::value);
  EXPECT_TRUE(std::is_destructible<sourcemeta::jsontoolkit::JSON>::value);
  EXPECT_TRUE(
      std::is_nothrow_destructible<sourcemeta::jsontoolkit::JSON>::value);
}

TEST(JSON_value, copy_traits) {
  EXPECT_TRUE(std::is_copy_assignable<sourcemeta::jsontoolkit::JSON>::value);
  EXPECT_TRUE(std::is_copy_constructible<sourcemeta::jsontoolkit::JSON>::value);
  EXPECT_FALSE(
      std::is_nothrow_copy_assignable<sourcemeta::jsontoolkit::JSON>::value);
  EXPECT_FALSE(
      std::is_nothrow_copy_constructible<sourcemeta::jsontoolkit::JSON>::value);
}

TEST(JSON_value, move_traits) {
  EXPECT_TRUE(std::is_move_assignable<sourcemeta::jsontoolkit::JSON>::value);
  EXPECT_TRUE(std::is_move_constructible<sourcemeta::jsontoolkit::JSON>::value);
}

TEST(JSON_value, copy_equivalence_assignment) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::JSON::Array{}};
  document.push_back(sourcemeta::jsontoolkit::JSON{1});
  sourcemeta::jsontoolkit::JSON object =
      sourcemeta::jsontoolkit::JSON::make_object();
  object.assign("foo", sourcemeta::jsontoolkit::JSON{1.2});
  document.push_back(object);
  document.push_back(sourcemeta::jsontoolkit::JSON{3});
  sourcemeta::jsontoolkit::JSON copy = document;
  EXPECT_EQ(document, copy);
}

TEST(JSON_value, from_size_t) {
  const std::size_t value{5};
  const sourcemeta::jsontoolkit::JSON document{value};
  EXPECT_TRUE(document.is_integer());
  EXPECT_EQ(document.to_integer(), 5);
}

TEST(JSON_value, compare_int_less_than_int) {
  const sourcemeta::jsontoolkit::JSON left{3};
  const sourcemeta::jsontoolkit::JSON right{4};
  EXPECT_TRUE(left < right);
  EXPECT_FALSE(right < left);
}

TEST(JSON_value, compare_int_greater_than_int) {
  const sourcemeta::jsontoolkit::JSON left{4};
  const sourcemeta::jsontoolkit::JSON right{3};
  EXPECT_FALSE(left < right);
  EXPECT_TRUE(right < left);
}

TEST(JSON_value, compare_int_equal_int) {
  const sourcemeta::jsontoolkit::JSON left{4};
  const sourcemeta::jsontoolkit::JSON right{4};
  EXPECT_FALSE(left < right);
  EXPECT_FALSE(right < left);
}

TEST(JSON_value, compare_int_less_than_real) {
  const sourcemeta::jsontoolkit::JSON left{3};
  const sourcemeta::jsontoolkit::JSON right{4.3};
  EXPECT_TRUE(left < right);
  EXPECT_FALSE(right < left);
}

TEST(JSON_value, compare_int_greater_than_real) {
  const sourcemeta::jsontoolkit::JSON left{4};
  const sourcemeta::jsontoolkit::JSON right{3.8};
  EXPECT_FALSE(left < right);
  EXPECT_TRUE(right < left);
}

TEST(JSON_value, compare_int_equal_real) {
  const sourcemeta::jsontoolkit::JSON left{4};
  const sourcemeta::jsontoolkit::JSON right{4.0};
  EXPECT_FALSE(left < right);
  EXPECT_FALSE(right < left);
}

TEST(JSON_value, compare_real_less_than_int) {
  const sourcemeta::jsontoolkit::JSON left{3.8};
  const sourcemeta::jsontoolkit::JSON right{4};
  EXPECT_TRUE(left < right);
  EXPECT_FALSE(right < left);
}

TEST(JSON_value, compare_real_greater_than_int) {
  const sourcemeta::jsontoolkit::JSON left{4.2};
  const sourcemeta::jsontoolkit::JSON right{3};
  EXPECT_FALSE(left < right);
  EXPECT_TRUE(right < left);
}

TEST(JSON_value, compare_real_equal_int) {
  const sourcemeta::jsontoolkit::JSON left{4.0};
  const sourcemeta::jsontoolkit::JSON right{4};
  EXPECT_FALSE(left < right);
  EXPECT_FALSE(right < left);
}

TEST(JSON_value, compare_real_less_than_real) {
  const sourcemeta::jsontoolkit::JSON left{3.8};
  const sourcemeta::jsontoolkit::JSON right{4.1};
  EXPECT_TRUE(left < right);
  EXPECT_FALSE(right < left);
}

TEST(JSON_value, compare_real_greater_than_real) {
  const sourcemeta::jsontoolkit::JSON left{4.2};
  const sourcemeta::jsontoolkit::JSON right{3.9};
  EXPECT_FALSE(left < right);
  EXPECT_TRUE(right < left);
}

TEST(JSON_value, compare_real_equal_real) {
  const sourcemeta::jsontoolkit::JSON left{4.2};
  const sourcemeta::jsontoolkit::JSON right{4.2};
  EXPECT_FALSE(left < right);
  EXPECT_FALSE(right < left);
}

TEST(JSON_value, compare_false_true) {
  const sourcemeta::jsontoolkit::JSON left{false};
  const sourcemeta::jsontoolkit::JSON right{true};
  EXPECT_TRUE(left < right);
  EXPECT_FALSE(right < left);
}

TEST(JSON_value, compare_false_false) {
  const sourcemeta::jsontoolkit::JSON left{false};
  const sourcemeta::jsontoolkit::JSON right{false};
  EXPECT_FALSE(left < right);
  EXPECT_FALSE(right < left);
}

TEST(JSON_value, compare_true_true) {
  const sourcemeta::jsontoolkit::JSON left{true};
  const sourcemeta::jsontoolkit::JSON right{true};
  EXPECT_FALSE(left < right);
  EXPECT_FALSE(right < left);
}

TEST(JSON_value, compare_bool_int) {
  const sourcemeta::jsontoolkit::JSON left{true};
  const sourcemeta::jsontoolkit::JSON right{0};
  EXPECT_TRUE(left < right);
  EXPECT_FALSE(right < left);
}

TEST(JSON_value, compare_bool_real) {
  const sourcemeta::jsontoolkit::JSON left{true};
  const sourcemeta::jsontoolkit::JSON right{4.5};
  EXPECT_TRUE(left < right);
  EXPECT_FALSE(right < left);
}

TEST(JSON_value, compare_int_array) {
  const sourcemeta::jsontoolkit::JSON left{4};
  const sourcemeta::jsontoolkit::JSON right =
      sourcemeta::jsontoolkit::parse("[1,2,3]");
  EXPECT_TRUE(left < right);
  EXPECT_FALSE(right < left);
}

TEST(JSON_value, compare_array_array_same) {
  const sourcemeta::jsontoolkit::JSON left =
      sourcemeta::jsontoolkit::parse("[1,2,3]");
  const sourcemeta::jsontoolkit::JSON right =
      sourcemeta::jsontoolkit::parse("[1,2,3]");
  EXPECT_FALSE(left < right);
  EXPECT_FALSE(right < left);
}

TEST(JSON_value, compare_array_array_different) {
  const sourcemeta::jsontoolkit::JSON left =
      sourcemeta::jsontoolkit::parse("[1,2]");
  const sourcemeta::jsontoolkit::JSON right =
      sourcemeta::jsontoolkit::parse("[1,2,3]");
  EXPECT_TRUE(left < right);
  EXPECT_FALSE(right < left);
}

TEST(JSON_value, compare_array_array_different_same_size) {
  const sourcemeta::jsontoolkit::JSON left =
      sourcemeta::jsontoolkit::parse("[1,3,4]");
  const sourcemeta::jsontoolkit::JSON right =
      sourcemeta::jsontoolkit::parse("[1,2,3]");
  EXPECT_FALSE(left < right);
  EXPECT_TRUE(right < left);
}

TEST(JSON_value, compare_object_object_same) {
  const sourcemeta::jsontoolkit::JSON left =
      sourcemeta::jsontoolkit::parse("{\"foo\":1}");
  const sourcemeta::jsontoolkit::JSON right =
      sourcemeta::jsontoolkit::parse("{\"foo\":1}");
  EXPECT_FALSE(left < right);
  EXPECT_FALSE(right < left);
}

TEST(JSON_value, compare_object_object_different_same_size) {
  const sourcemeta::jsontoolkit::JSON left =
      sourcemeta::jsontoolkit::parse("{\"foo\":1}");
  const sourcemeta::jsontoolkit::JSON right =
      sourcemeta::jsontoolkit::parse("{\"foo\":2}");
  EXPECT_TRUE(left < right);
  EXPECT_FALSE(right < left);
}

TEST(JSON_value, compare_object_object_different) {
  const sourcemeta::jsontoolkit::JSON left =
      sourcemeta::jsontoolkit::parse("{\"foo\":1}");
  const sourcemeta::jsontoolkit::JSON right =
      sourcemeta::jsontoolkit::parse("{\"foo\":1, \"bar\":2}");
  EXPECT_TRUE(left < right);
  EXPECT_FALSE(right < left);
}

TEST(JSON_value, compare_int_operator_less_than_or_equal_int) {
  const sourcemeta::jsontoolkit::JSON left{3};
  const sourcemeta::jsontoolkit::JSON right{4};
  EXPECT_TRUE(left <= right);
  EXPECT_FALSE(right <= left);
}

TEST(JSON_value, compare_int_operator_greater_than_int) {
  const sourcemeta::jsontoolkit::JSON left{5};
  const sourcemeta::jsontoolkit::JSON right{4};
  EXPECT_TRUE(left > right);
  EXPECT_FALSE(right > left);
}

TEST(JSON_value, compare_int_operator_greater_than_int_equal) {
  const sourcemeta::jsontoolkit::JSON left{5};
  const sourcemeta::jsontoolkit::JSON right{5};
  EXPECT_FALSE(left > right);
}

TEST(JSON_value, compare_int_operator_greater_than_or_equal_int) {
  const sourcemeta::jsontoolkit::JSON left{5};
  const sourcemeta::jsontoolkit::JSON right{4};
  EXPECT_TRUE(left >= right);
  EXPECT_FALSE(right >= left);
}

TEST(JSON_value, compare_int_operator_not_equal_int) {
  const sourcemeta::jsontoolkit::JSON left{5};
  const sourcemeta::jsontoolkit::JSON right{4};
  EXPECT_TRUE(left != right);
}

TEST(JSON_value, set_null) {
  sourcemeta::jsontoolkit::JSON document{true};
  EXPECT_FALSE(document.is_null());
  EXPECT_TRUE(document.is_boolean());
  document.into(sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRUE(document.is_null());
  EXPECT_FALSE(document.is_boolean());
}

TEST(JSON_value, set_const_null) {
  sourcemeta::jsontoolkit::JSON document{true};
  EXPECT_FALSE(document.is_null());
  EXPECT_TRUE(document.is_boolean());
  const sourcemeta::jsontoolkit::JSON new_value{nullptr};
  document.into(new_value);
  EXPECT_TRUE(document.is_null());
  EXPECT_FALSE(document.is_boolean());
}

TEST(JSON_value, set_negative_integer) {
  sourcemeta::jsontoolkit::JSON document{true};
  EXPECT_TRUE(document.is_boolean());
  document.into(sourcemeta::jsontoolkit::JSON{-4});
  EXPECT_TRUE(document.is_integer());
  EXPECT_FALSE(document.is_real());
  EXPECT_EQ(document.to_integer(), -4);
}

TEST(JSON_value, set_negative_real) {
  sourcemeta::jsontoolkit::JSON document{true};
  EXPECT_TRUE(document.is_boolean());
  document.into(sourcemeta::jsontoolkit::JSON{-4.3});
  EXPECT_FALSE(document.is_integer());
  EXPECT_TRUE(document.is_real());
  EXPECT_EQ(document.to_real(), -4.3);
}

TEST(JSON_value, set_negative_integral_real) {
  sourcemeta::jsontoolkit::JSON document{true};
  EXPECT_TRUE(document.is_boolean());
  document.into(sourcemeta::jsontoolkit::JSON{-4.0});
  EXPECT_FALSE(document.is_integer());
  EXPECT_TRUE(document.is_real());
}

TEST(JSON_value, set_positive_integer) {
  sourcemeta::jsontoolkit::JSON document{true};
  EXPECT_TRUE(document.is_boolean());
  document.into(sourcemeta::jsontoolkit::JSON{4});
  EXPECT_TRUE(document.is_integer());
  EXPECT_FALSE(document.is_real());
}

TEST(JSON_value, set_positive_real) {
  sourcemeta::jsontoolkit::JSON document{true};
  EXPECT_TRUE(document.is_boolean());
  document.into(sourcemeta::jsontoolkit::JSON{4.3});
  EXPECT_FALSE(document.is_integer());
  EXPECT_TRUE(document.is_real());
}

TEST(JSON_value, set_positive_integral_real) {
  sourcemeta::jsontoolkit::JSON document{true};
  EXPECT_TRUE(document.is_boolean());
  document.into(sourcemeta::jsontoolkit::JSON{4.0});
  EXPECT_FALSE(document.is_integer());
  EXPECT_TRUE(document.is_real());
}

TEST(JSON_value, into_string_from_boolean) {
  sourcemeta::jsontoolkit::JSON document{false};
  EXPECT_FALSE(document.is_string());
  document.into(sourcemeta::jsontoolkit::JSON{"foo"});
  EXPECT_TRUE(document.is_string());
  EXPECT_EQ(document.to_string(), "foo");
}

TEST(JSON_value, into_string_from_string) {
  sourcemeta::jsontoolkit::JSON document{"foo"};
  EXPECT_TRUE(document.is_string());
  EXPECT_EQ(document.to_string(), "foo");
  document.into(sourcemeta::jsontoolkit::JSON{"bar"});
  EXPECT_TRUE(document.is_string());
  EXPECT_EQ(document.to_string(), "bar");
}

TEST(JSON_value, to_ostream) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::JSON{1}, sourcemeta::jsontoolkit::JSON{2},
      sourcemeta::jsontoolkit::JSON{3}, sourcemeta::jsontoolkit::JSON{4}};
  std::ostringstream stream;
  stream << document;
#ifdef NDEBUG
  EXPECT_EQ(stream.str(), "[1,2,3,4]");
#else
  EXPECT_EQ(stream.str(), "[\n  1,\n  2,\n  3,\n  4\n]");
#endif
}

class ClassMemberInitializerList {
public:
  ClassMemberInitializerList(sourcemeta::jsontoolkit::JSON document)
      : data{std::move(document)} {}
  auto get() const -> const sourcemeta::jsontoolkit::JSON & {
    return this->data;
  }

private:
  const sourcemeta::jsontoolkit::JSON data;
};

TEST(JSON_value, class_member_initializer_list) {
  const sourcemeta::jsontoolkit::JSON document{5};
  EXPECT_TRUE(document.is_integer());
  const ClassMemberInitializerList container{document};
  EXPECT_TRUE(container.get().is_integer());
  EXPECT_EQ(container.get().to_integer(), 5);
  EXPECT_EQ(container.get(), document);
}

TEST(JSON_value, try_at) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{\"foo\":5}");
  EXPECT_TRUE(document.is_object());
  const auto result = document.try_at("foo");
  EXPECT_TRUE(result.has_value());
  EXPECT_EQ(result.value().get().to_integer(), 5);
}

TEST(JSON_value, try_at_fail) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{\"foo\":5}");
  EXPECT_TRUE(document.is_object());
  const auto result = document.try_at("boo");
  EXPECT_FALSE(result.has_value());
}

TEST(JSON_value, unordered_set_with_custom_hash) {
  std::unordered_set<sourcemeta::jsontoolkit::JSON,
                     sourcemeta::jsontoolkit::Hash>
      value;
  value.insert(sourcemeta::jsontoolkit::JSON{"foo"});
  value.insert(sourcemeta::jsontoolkit::JSON{"bar"});
  value.insert(sourcemeta::jsontoolkit::JSON{"baz"});
  value.insert(sourcemeta::jsontoolkit::JSON{"bar"});

  EXPECT_EQ(value.size(), 3);
  EXPECT_TRUE(value.contains(sourcemeta::jsontoolkit::JSON{"foo"}));
  EXPECT_TRUE(value.contains(sourcemeta::jsontoolkit::JSON{"bar"}));
  EXPECT_TRUE(value.contains(sourcemeta::jsontoolkit::JSON{"baz"}));
}
