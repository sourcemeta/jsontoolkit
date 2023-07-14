#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>

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
