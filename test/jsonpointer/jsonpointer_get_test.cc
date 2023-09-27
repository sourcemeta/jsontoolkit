#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>

TEST(JSONPointer_get, integer_property) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "0": 1
  })JSON");

  const sourcemeta::jsontoolkit::Pointer pointer{"0"};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 1);
}

TEST(JSONPointer_get, integer_property_as_character) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "0": 1
  })JSON");

  const sourcemeta::jsontoolkit::Pointer pointer{'0'};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 1);
}

TEST(JSONPointer_get, character_after_property) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": { "x": 1 }
  })JSON");

  const sourcemeta::jsontoolkit::Pointer pointer{"foo", 'x'};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 1);
}

TEST(JSONPointer_get, const_empty) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": 1
  })JSON");

  const sourcemeta::jsontoolkit::Pointer pointer;
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_object());
  EXPECT_EQ(result, document);
}

TEST(JSONPointer_get, empty) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": 1
  })JSON");

  const sourcemeta::jsontoolkit::Pointer pointer;
  sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_object());
  EXPECT_EQ(result, document);
}

TEST(JSONPointer_get, const_foo) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": 1,
    "bar": 2,
    "baz": 3
  })JSON");

  const sourcemeta::jsontoolkit::Pointer pointer{"foo"};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 1);
}

TEST(JSONPointer_get, foo) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": 1,
    "bar": 2,
    "baz": 3
  })JSON");

  const sourcemeta::jsontoolkit::Pointer pointer{"foo"};
  sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 1);
}

TEST(JSONPointer_get, const_foo_0_bar_1) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": [
      { "bar": [ 1, 2, 3 ] },
      { "baz": [ 4, 5, 6 ] }
    ]
  })JSON");

  const sourcemeta::jsontoolkit::Pointer pointer{"foo", 0, "bar", 1};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 2);
}

TEST(JSONPointer_get, foo_0_bar_1) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": [
      { "bar": [ 1, 2, 3 ] },
      { "baz": [ 4, 5, 6 ] }
    ]
  })JSON");

  const sourcemeta::jsontoolkit::Pointer pointer{"foo", 0, "bar", 1};
  sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 2);
}

TEST(JSONPointer_get, slash) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "/": 1
  })JSON");

  const sourcemeta::jsontoolkit::Pointer pointer{"/"};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 1);
}

TEST(JSONPointer_get, tilde) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "~": 1
  })JSON");

  const sourcemeta::jsontoolkit::Pointer pointer{"~"};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 1);
}

TEST(JSONPointer_get, hyphen) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "-": 1
  })JSON");

  const sourcemeta::jsontoolkit::Pointer pointer{"-"};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 1);
}

// Escaping should only happen while parsing
TEST(JSONPointer_get, no_tilde_0_escape) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "~0": 1
  })JSON");

  const sourcemeta::jsontoolkit::Pointer pointer{"~0"};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 1);
}

// Escaping should only happen while parsing
TEST(JSONPointer_get, no_tilde_1_escape) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "~1": 1
  })JSON");

  const sourcemeta::jsontoolkit::Pointer pointer{"~1"};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 1);
}

// See https://www.rfc-editor.org/rfc/rfc6901#section-5
TEST(JSONPointer_get, rfc6901_1) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": ["bar", "baz"],
    "": 0,
    "a/b": 1,
    "c%d": 2,
    "e^f": 3,
    "g|h": 4,
    "i\\j": 5,
    "k\"l": 6,
    " ": 7,
    "m~n": 8
  })JSON");

  // Pointer: ""
  const sourcemeta::jsontoolkit::Pointer pointer;
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_object());
  EXPECT_EQ(result, document);
}

// See https://www.rfc-editor.org/rfc/rfc6901#section-5
TEST(JSONPointer_get, rfc6901_2) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": ["bar", "baz"],
    "": 0,
    "a/b": 1,
    "c%d": 2,
    "e^f": 3,
    "g|h": 4,
    "i\\j": 5,
    "k\"l": 6,
    " ": 7,
    "m~n": 8
  })JSON");

  // Pointer: "/foo"
  const sourcemeta::jsontoolkit::Pointer pointer{"foo"};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_array());
  EXPECT_EQ(result.size(), 2);
  EXPECT_TRUE(result.at(0).is_string());
  EXPECT_TRUE(result.at(1).is_string());
  EXPECT_EQ(result.at(0).to_string(), "bar");
  EXPECT_EQ(result.at(1).to_string(), "baz");
}

// See https://www.rfc-editor.org/rfc/rfc6901#section-5
TEST(JSONPointer_get, rfc6901_3) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": ["bar", "baz"],
    "": 0,
    "a/b": 1,
    "c%d": 2,
    "e^f": 3,
    "g|h": 4,
    "i\\j": 5,
    "k\"l": 6,
    " ": 7,
    "m~n": 8
  })JSON");

  // Pointer: "/foo/0"
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", 0};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_string());
  EXPECT_EQ(result.to_string(), "bar");
}

// See https://www.rfc-editor.org/rfc/rfc6901#section-5
TEST(JSONPointer_get, rfc6901_4) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": ["bar", "baz"],
    "": 0,
    "a/b": 1,
    "c%d": 2,
    "e^f": 3,
    "g|h": 4,
    "i\\j": 5,
    "k\"l": 6,
    " ": 7,
    "m~n": 8
  })JSON");

  // Pointer: ""
  const sourcemeta::jsontoolkit::Pointer pointer{""};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 0);
}

// See https://www.rfc-editor.org/rfc/rfc6901#section-5
TEST(JSONPointer_get, rfc6901_5) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": ["bar", "baz"],
    "": 0,
    "a/b": 1,
    "c%d": 2,
    "e^f": 3,
    "g|h": 4,
    "i\\j": 5,
    "k\"l": 6,
    " ": 7,
    "m~n": 8
  })JSON");

  // Pointer: "/a~1b"
  const sourcemeta::jsontoolkit::Pointer pointer{"a/b"};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 1);
}

// See https://www.rfc-editor.org/rfc/rfc6901#section-5
TEST(JSONPointer_get, rfc6901_6) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": ["bar", "baz"],
    "": 0,
    "a/b": 1,
    "c%d": 2,
    "e^f": 3,
    "g|h": 4,
    "i\\j": 5,
    "k\"l": 6,
    " ": 7,
    "m~n": 8
  })JSON");

  // Pointer: "/c%d"
  const sourcemeta::jsontoolkit::Pointer pointer{"c%d"};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 2);
}

// See https://www.rfc-editor.org/rfc/rfc6901#section-5
TEST(JSONPointer_get, rfc6901_7) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": ["bar", "baz"],
    "": 0,
    "a/b": 1,
    "c%d": 2,
    "e^f": 3,
    "g|h": 4,
    "i\\j": 5,
    "k\"l": 6,
    " ": 7,
    "m~n": 8
  })JSON");

  // Pointer: "/e^f"
  const sourcemeta::jsontoolkit::Pointer pointer{"e^f"};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 3);
}

// See https://www.rfc-editor.org/rfc/rfc6901#section-5
TEST(JSONPointer_get, rfc6901_8) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": ["bar", "baz"],
    "": 0,
    "a/b": 1,
    "c%d": 2,
    "e^f": 3,
    "g|h": 4,
    "i\\j": 5,
    "k\"l": 6,
    " ": 7,
    "m~n": 8
  })JSON");

  // Pointer: "/g|h"
  const sourcemeta::jsontoolkit::Pointer pointer{"g|h"};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 4);
}

// See https://www.rfc-editor.org/rfc/rfc6901#section-5
TEST(JSONPointer_get, rfc6901_9) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": ["bar", "baz"],
    "": 0,
    "a/b": 1,
    "c%d": 2,
    "e^f": 3,
    "g|h": 4,
    "i\\j": 5,
    "k\"l": 6,
    " ": 7,
    "m~n": 8
  })JSON");

  // Pointer: "/i\\j"
  const sourcemeta::jsontoolkit::Pointer pointer{"i\\j"};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 5);
}

// See https://www.rfc-editor.org/rfc/rfc6901#section-5
TEST(JSONPointer_get, rfc6901_10) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": ["bar", "baz"],
    "": 0,
    "a/b": 1,
    "c%d": 2,
    "e^f": 3,
    "g|h": 4,
    "i\\j": 5,
    "k\"l": 6,
    " ": 7,
    "m~n": 8
  })JSON");

  // Pointer: "/k\"l"
  const sourcemeta::jsontoolkit::Pointer pointer{"k\"l"};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 6);
}

// See https://www.rfc-editor.org/rfc/rfc6901#section-5
TEST(JSONPointer_get, rfc6901_11) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": ["bar", "baz"],
    "": 0,
    "a/b": 1,
    "c%d": 2,
    "e^f": 3,
    "g|h": 4,
    "i\\j": 5,
    "k\"l": 6,
    " ": 7,
    "m~n": 8
  })JSON");

  // Pointer: "/ "
  const sourcemeta::jsontoolkit::Pointer pointer{" "};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 7);
}

// See https://www.rfc-editor.org/rfc/rfc6901#section-5
TEST(JSONPointer_get, rfc6901_12) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": ["bar", "baz"],
    "": 0,
    "a/b": 1,
    "c%d": 2,
    "e^f": 3,
    "g|h": 4,
    "i\\j": 5,
    "k\"l": 6,
    " ": 7,
    "m~n": 8
  })JSON");

  // Pointer: "/m~0n"
  const sourcemeta::jsontoolkit::Pointer pointer{"m~n"};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 8);
}

// Note that JSON pointers can contain the NUL (Unicode U+0000)
// character.  Care is needed not to misinterpret this character in
// programming languages that use NUL to mark the end of a string.
// See https://www.rfc-editor.org/rfc/rfc6901#section-8
TEST(JSONPointer_get, null) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo\u0000bar": 1
  })JSON");

  // See https://stackoverflow.com/a/164274
  using namespace std::string_literals;
  const sourcemeta::jsontoolkit::Pointer pointer{"foo\0bar"s};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 1);
}

TEST(JSONPointer_get, positive_integer_property) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "0": 1
  })JSON");

  const sourcemeta::jsontoolkit::Pointer pointer{0};
  const sourcemeta::jsontoolkit::JSON &result{
      sourcemeta::jsontoolkit::get(document, pointer)};
  EXPECT_TRUE(result.is_integer());
  EXPECT_EQ(result.to_integer(), 1);
}
