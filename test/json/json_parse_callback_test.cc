#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>

#include <sstream>
#include <tuple>
#include <vector>

#define PARSE_WITH_TRACES(result, input, expected_size)                        \
  std::vector<std::tuple<sourcemeta::jsontoolkit::CallbackPhase,               \
                         sourcemeta::jsontoolkit::JSON::Type, std::uint64_t,   \
                         std::uint64_t, sourcemeta::jsontoolkit::JSON>>        \
      traces;                                                                  \
  const auto result{sourcemeta::jsontoolkit::parse(                            \
      input, [&traces](const sourcemeta::jsontoolkit::CallbackPhase phase,     \
                       const sourcemeta::jsontoolkit::JSON::Type type,         \
                       const std::uint64_t line, const std::uint64_t column,   \
                       const sourcemeta::jsontoolkit::JSON &value) {           \
        traces.emplace_back(phase, type, line, column, value);                 \
      })};                                                                     \
  EXPECT_EQ(traces.size(), expected_size)

#define EXPECT_TRACE(index, expected_phase, expected_type, expected_line,      \
                     expected_column, expected_value)                          \
  EXPECT_EQ(std::get<0>(traces.at(index)),                                     \
            sourcemeta::jsontoolkit::CallbackPhase::expected_phase);           \
  EXPECT_EQ(std::get<1>(traces.at(index)),                                     \
            sourcemeta::jsontoolkit::JSON::Type::expected_type);               \
  EXPECT_EQ(std::get<2>(traces.at(index)), expected_line);                     \
  EXPECT_EQ(std::get<3>(traces.at(index)), expected_column);                   \
  EXPECT_EQ(std::get<4>(traces.at(index)), expected_value);

TEST(JSON_parse_callback, true) {
  const auto input{"true"};
  PARSE_WITH_TRACES(document, input, 2);
  EXPECT_TRACE(0, Pre, Boolean, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Post, Boolean, 1, 4, sourcemeta::jsontoolkit::JSON{true});
}

TEST(JSON_parse_callback, true_with_padding) {
  const auto input{"  true  "};
  PARSE_WITH_TRACES(document, input, 2);
  EXPECT_TRACE(0, Pre, Boolean, 1, 3, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Post, Boolean, 1, 6, sourcemeta::jsontoolkit::JSON{true});
}

TEST(JSON_parse_callback, false) {
  const auto input{"false"};
  PARSE_WITH_TRACES(document, input, 2);
  EXPECT_TRACE(0, Pre, Boolean, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Post, Boolean, 1, 5, sourcemeta::jsontoolkit::JSON{false});
}

TEST(JSON_parse_callback, null) {
  const auto input{"null"};
  PARSE_WITH_TRACES(document, input, 2);
  EXPECT_TRACE(0, Pre, Null, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Post, Null, 1, 4, sourcemeta::jsontoolkit::JSON{nullptr});
}

TEST(JSON_parse_callback, empty_string) {
  const auto input{"\"\""};
  PARSE_WITH_TRACES(document, input, 2);
  EXPECT_TRACE(0, Pre, String, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Post, String, 1, 2, sourcemeta::jsontoolkit::JSON{""});
}

TEST(JSON_parse_callback, non_empty_string) {
  const auto input{"\"foo\""};
  PARSE_WITH_TRACES(document, input, 2);
  EXPECT_TRACE(0, Pre, String, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Post, String, 1, 5, sourcemeta::jsontoolkit::JSON{"foo"});
}

TEST(JSON_parse_callback, integer) {
  const auto input{"1234"};
  PARSE_WITH_TRACES(document, input, 2);
  EXPECT_TRACE(0, Pre, Integer, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Post, Integer, 1, 4, sourcemeta::jsontoolkit::JSON{1234});
}

TEST(JSON_parse_callback, real) {
  const auto input{"3.14"};
  PARSE_WITH_TRACES(document, input, 2);
  EXPECT_TRACE(0, Pre, Real, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Post, Real, 1, 4, sourcemeta::jsontoolkit::JSON{3.14});
}

TEST(JSON_parse_callback, empty_array) {
  const auto input{"[]"};
  PARSE_WITH_TRACES(document, input, 2);
  EXPECT_TRACE(0, Pre, Array, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Post, Array, 1, 2,
               sourcemeta::jsontoolkit::JSON::make_array());
}

TEST(JSON_parse_callback, array_booleans) {
  const auto input{"[\n  true,\n  false\n]"};

  PARSE_WITH_TRACES(document, input, 6);
  EXPECT_TRACE(0, Pre, Array, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Pre, Boolean, 2, 3, sourcemeta::jsontoolkit::JSON{0});
  EXPECT_TRACE(2, Post, Boolean, 2, 6, sourcemeta::jsontoolkit::JSON{true});
  EXPECT_TRACE(3, Pre, Boolean, 3, 3, sourcemeta::jsontoolkit::JSON{1});
  EXPECT_TRACE(4, Post, Boolean, 3, 7, sourcemeta::jsontoolkit::JSON{false});
  EXPECT_TRACE(5, Post, Array, 4, 1, sourcemeta::jsontoolkit::parse(input));
}

TEST(JSON_parse_callback, array_nulls) {
  const auto input{"[\n  null,\n  null\n]"};
  PARSE_WITH_TRACES(document, input, 6);
  EXPECT_TRACE(0, Pre, Array, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Pre, Null, 2, 3, sourcemeta::jsontoolkit::JSON{0});
  EXPECT_TRACE(2, Post, Null, 2, 6, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(3, Pre, Null, 3, 3, sourcemeta::jsontoolkit::JSON{1});
  EXPECT_TRACE(4, Post, Null, 3, 6, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(5, Post, Array, 4, 1, sourcemeta::jsontoolkit::parse(input));
}

TEST(JSON_parse_callback, array_strings) {
  const auto input{"[\n  \"foo\",\n  \"bar\"\n]"};
  PARSE_WITH_TRACES(document, input, 6);
  EXPECT_TRACE(0, Pre, Array, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Pre, String, 2, 3, sourcemeta::jsontoolkit::JSON{0});
  EXPECT_TRACE(2, Post, String, 2, 7, sourcemeta::jsontoolkit::JSON{"foo"});
  EXPECT_TRACE(3, Pre, String, 3, 3, sourcemeta::jsontoolkit::JSON{1});
  EXPECT_TRACE(4, Post, String, 3, 7, sourcemeta::jsontoolkit::JSON{"bar"});
  EXPECT_TRACE(5, Post, Array, 4, 1, sourcemeta::jsontoolkit::parse(input));
}

TEST(JSON_parse_callback, array_integers) {
  const auto input{"[\n  1,\n  234\n]"};
  PARSE_WITH_TRACES(document, input, 6);
  EXPECT_TRACE(0, Pre, Array, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Pre, Integer, 2, 3, sourcemeta::jsontoolkit::JSON{0});
  EXPECT_TRACE(2, Post, Integer, 2, 3, sourcemeta::jsontoolkit::JSON{1});
  EXPECT_TRACE(3, Pre, Integer, 3, 3, sourcemeta::jsontoolkit::JSON{1});
  EXPECT_TRACE(4, Post, Integer, 3, 5, sourcemeta::jsontoolkit::JSON{234});
  EXPECT_TRACE(5, Post, Array, 4, 1, sourcemeta::jsontoolkit::parse(input));
}

TEST(JSON_parse_callback, array_reals) {
  const auto input{"[\n  1.0,\n  2.34\n]"};
  PARSE_WITH_TRACES(document, input, 6);
  EXPECT_TRACE(0, Pre, Array, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Pre, Real, 2, 3, sourcemeta::jsontoolkit::JSON{0});
  EXPECT_TRACE(2, Post, Real, 2, 5, sourcemeta::jsontoolkit::JSON{1.0});
  EXPECT_TRACE(3, Pre, Real, 3, 3, sourcemeta::jsontoolkit::JSON{1});
  EXPECT_TRACE(4, Post, Real, 3, 6, sourcemeta::jsontoolkit::JSON{2.34});
  EXPECT_TRACE(5, Post, Array, 4, 1, sourcemeta::jsontoolkit::parse(input));
}

TEST(JSON_parse_callback, array_empty_objects) {
  const auto input{"[\n  {},\n  {}\n]"};
  PARSE_WITH_TRACES(document, input, 6);
  EXPECT_TRACE(0, Pre, Array, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Pre, Object, 2, 3, sourcemeta::jsontoolkit::JSON{0});
  EXPECT_TRACE(2, Post, Object, 2, 4, sourcemeta::jsontoolkit::parse("{}"));
  EXPECT_TRACE(3, Pre, Object, 3, 3, sourcemeta::jsontoolkit::JSON{1});
  EXPECT_TRACE(4, Post, Object, 3, 4, sourcemeta::jsontoolkit::parse("{}"));
  EXPECT_TRACE(5, Post, Array, 4, 1, sourcemeta::jsontoolkit::parse(input));
}

TEST(JSON_parse_callback, array_empty_arrays) {
  const auto input{"[\n  [],\n  []\n]"};
  PARSE_WITH_TRACES(document, input, 6);
  EXPECT_TRACE(0, Pre, Array, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Pre, Array, 2, 3, sourcemeta::jsontoolkit::JSON{0});
  EXPECT_TRACE(2, Post, Array, 2, 4, sourcemeta::jsontoolkit::parse("[]"));
  EXPECT_TRACE(3, Pre, Array, 3, 3, sourcemeta::jsontoolkit::JSON{1});
  EXPECT_TRACE(4, Post, Array, 3, 4, sourcemeta::jsontoolkit::parse("[]"));
  EXPECT_TRACE(5, Post, Array, 4, 1, sourcemeta::jsontoolkit::parse(input));
}

TEST(JSON_parse_callback, empty_object) {
  const auto input{"{}"};
  PARSE_WITH_TRACES(document, input, 2);
  EXPECT_TRACE(0, Pre, Object, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Post, Object, 1, 2,
               sourcemeta::jsontoolkit::JSON::make_object());
}

TEST(JSON_parse_callback, object_booleans) {
  const auto input{"{\n  \"foo\": true,\n  \"bar\": false\n}"};
  PARSE_WITH_TRACES(document, input, 6);
  EXPECT_TRACE(0, Pre, Object, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Pre, Boolean, 2, 10, sourcemeta::jsontoolkit::JSON{"foo"});
  EXPECT_TRACE(2, Post, Boolean, 2, 13, sourcemeta::jsontoolkit::JSON{true});
  EXPECT_TRACE(3, Pre, Boolean, 3, 10, sourcemeta::jsontoolkit::JSON{"bar"});
  EXPECT_TRACE(4, Post, Boolean, 3, 14, sourcemeta::jsontoolkit::JSON{false});
  EXPECT_TRACE(5, Post, Object, 4, 1, sourcemeta::jsontoolkit::parse(input));
}

TEST(JSON_parse_callback, object_nulls) {
  const auto input{"{\n  \"foo\": null,\n  \"bar\": null\n}"};
  PARSE_WITH_TRACES(document, input, 6);
  EXPECT_TRACE(0, Pre, Object, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Pre, Null, 2, 10, sourcemeta::jsontoolkit::JSON{"foo"});
  EXPECT_TRACE(2, Post, Null, 2, 13, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(3, Pre, Null, 3, 10, sourcemeta::jsontoolkit::JSON{"bar"});
  EXPECT_TRACE(4, Post, Null, 3, 13, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(5, Post, Object, 4, 1, sourcemeta::jsontoolkit::parse(input));
}

TEST(JSON_parse_callback, object_strings) {
  const auto input{"{\n  \"foo\": \"baz\",\n  \"bar\": \"qux\"\n}"};
  PARSE_WITH_TRACES(document, input, 6);
  EXPECT_TRACE(0, Pre, Object, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Pre, String, 2, 10, sourcemeta::jsontoolkit::JSON{"foo"});
  EXPECT_TRACE(2, Post, String, 2, 14, sourcemeta::jsontoolkit::JSON{"baz"});
  EXPECT_TRACE(3, Pre, String, 3, 10, sourcemeta::jsontoolkit::JSON{"bar"});
  EXPECT_TRACE(4, Post, String, 3, 14, sourcemeta::jsontoolkit::JSON{"qux"});
  EXPECT_TRACE(5, Post, Object, 4, 1, sourcemeta::jsontoolkit::parse(input));
}

TEST(JSON_parse_callback, object_integers) {
  const auto input{"{\n  \"foo\": 1,\n  \"bar\": 234\n}"};
  PARSE_WITH_TRACES(document, input, 6);
  EXPECT_TRACE(0, Pre, Object, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Pre, Integer, 2, 10, sourcemeta::jsontoolkit::JSON{"foo"});
  EXPECT_TRACE(2, Post, Integer, 2, 10, sourcemeta::jsontoolkit::JSON{1});
  EXPECT_TRACE(3, Pre, Integer, 3, 10, sourcemeta::jsontoolkit::JSON{"bar"});
  EXPECT_TRACE(4, Post, Integer, 3, 12, sourcemeta::jsontoolkit::JSON{234});
  EXPECT_TRACE(5, Post, Object, 4, 1, sourcemeta::jsontoolkit::parse(input));
}

TEST(JSON_parse_callback, object_reals) {
  const auto input{"{\n  \"foo\": 1.0,\n  \"bar\": 2.34\n}"};
  PARSE_WITH_TRACES(document, input, 6);
  EXPECT_TRACE(0, Pre, Object, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Pre, Real, 2, 10, sourcemeta::jsontoolkit::JSON{"foo"});
  EXPECT_TRACE(2, Post, Real, 2, 12, sourcemeta::jsontoolkit::JSON{1.0});
  EXPECT_TRACE(3, Pre, Real, 3, 10, sourcemeta::jsontoolkit::JSON{"bar"});
  EXPECT_TRACE(4, Post, Real, 3, 13, sourcemeta::jsontoolkit::JSON{2.34});
  EXPECT_TRACE(5, Post, Object, 4, 1, sourcemeta::jsontoolkit::parse(input));
}

TEST(JSON_parse_callback, object_empty_arrays) {
  const auto input{"{\n  \"foo\": [],\n  \"bar\": []\n}"};
  PARSE_WITH_TRACES(document, input, 6);
  EXPECT_TRACE(0, Pre, Object, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Pre, Array, 2, 10, sourcemeta::jsontoolkit::JSON{"foo"});
  EXPECT_TRACE(2, Post, Array, 2, 11, sourcemeta::jsontoolkit::parse("[]"));
  EXPECT_TRACE(3, Pre, Array, 3, 10, sourcemeta::jsontoolkit::JSON{"bar"});
  EXPECT_TRACE(4, Post, Array, 3, 11, sourcemeta::jsontoolkit::parse("[]"));
  EXPECT_TRACE(5, Post, Object, 4, 1, sourcemeta::jsontoolkit::parse(input));
}

TEST(JSON_parse_callback, object_empty_objects) {
  const auto input{"{\n  \"foo\": {},\n  \"bar\": {}\n}"};
  PARSE_WITH_TRACES(document, input, 6);
  EXPECT_TRACE(0, Pre, Object, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Pre, Object, 2, 10, sourcemeta::jsontoolkit::JSON{"foo"});
  EXPECT_TRACE(2, Post, Object, 2, 11, sourcemeta::jsontoolkit::parse("{}"));
  EXPECT_TRACE(3, Pre, Object, 3, 10, sourcemeta::jsontoolkit::JSON{"bar"});
  EXPECT_TRACE(4, Post, Object, 3, 11, sourcemeta::jsontoolkit::parse("{}"));
  EXPECT_TRACE(5, Post, Object, 4, 1, sourcemeta::jsontoolkit::parse(input));
}

TEST(JSON_parse_callback, complex_1) {
  const auto input{R"JSON([
  {
    "foo": {
      "bar": 3
    }
  }
])JSON"};

  PARSE_WITH_TRACES(document, input, 8);
  EXPECT_TRACE(0, Pre, Array, 1, 1, sourcemeta::jsontoolkit::JSON{nullptr});
  EXPECT_TRACE(1, Pre, Object, 2, 3, sourcemeta::jsontoolkit::JSON{0});
  EXPECT_TRACE(2, Pre, Object, 3, 12, sourcemeta::jsontoolkit::JSON{"foo"});
  EXPECT_TRACE(3, Pre, Integer, 4, 14, sourcemeta::jsontoolkit::JSON{"bar"});
  EXPECT_TRACE(4, Post, Integer, 4, 14, sourcemeta::jsontoolkit::JSON{3});
  EXPECT_TRACE(5, Post, Object, 5, 5,
               sourcemeta::jsontoolkit::parse(input).at(0).at("foo"));
  EXPECT_TRACE(6, Post, Object, 6, 3,
               sourcemeta::jsontoolkit::parse(input).at(0));
  EXPECT_TRACE(7, Post, Array, 7, 1, sourcemeta::jsontoolkit::parse(input));
}
