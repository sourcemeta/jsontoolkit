#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>

TEST(JSONPointer_set, property_to_integer) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1 }");
  const sourcemeta::jsontoolkit::Pointer pointer{"foo"};
  sourcemeta::jsontoolkit::set(document, pointer,
                               sourcemeta::jsontoolkit::JSON{2});
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 1);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.at("foo").is_integer());
  EXPECT_EQ(document.at("foo").to_integer(), 2);
}

TEST(JSONPointer_set, property_to_integer_copy) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1 }");
  const sourcemeta::jsontoolkit::Pointer pointer{"foo"};
  const sourcemeta::jsontoolkit::JSON value{2};
  sourcemeta::jsontoolkit::set(document, pointer, value);
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 1);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.at("foo").is_integer());
  EXPECT_EQ(document.at("foo").to_integer(), 2);
}

TEST(JSONPointer_set, top_level_to_integer) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1 }");
  const sourcemeta::jsontoolkit::Pointer pointer;
  sourcemeta::jsontoolkit::set(document, pointer,
                               sourcemeta::jsontoolkit::JSON{2});
  EXPECT_TRUE(document.is_integer());
  EXPECT_EQ(document.to_integer(), 2);
}

TEST(JSONPointer_set, top_level_to_integer_copy) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1 }");
  const sourcemeta::jsontoolkit::Pointer pointer;
  const sourcemeta::jsontoolkit::JSON value{2};
  sourcemeta::jsontoolkit::set(document, pointer, value);
  EXPECT_TRUE(document.is_integer());
  EXPECT_EQ(document.to_integer(), 2);
}

TEST(JSONPointer_set, array_element_to_integer) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": [ 1, 2, 3 ] }");
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", 1};
  sourcemeta::jsontoolkit::set(document, pointer,
                               sourcemeta::jsontoolkit::JSON{9});
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 1);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.at("foo").is_array());
  EXPECT_EQ(document.at("foo").size(), 3);
  EXPECT_TRUE(document.at("foo").at(0).is_integer());
  EXPECT_TRUE(document.at("foo").at(1).is_integer());
  EXPECT_TRUE(document.at("foo").at(2).is_integer());
  EXPECT_EQ(document.at("foo").at(0).to_integer(), 1);
  EXPECT_EQ(document.at("foo").at(1).to_integer(), 9);
  EXPECT_EQ(document.at("foo").at(2).to_integer(), 3);
}

TEST(JSONPointer_set, array_element_to_integer_copy) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": [ 1, 2, 3 ] }");
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", 1};
  const sourcemeta::jsontoolkit::JSON value{9};
  sourcemeta::jsontoolkit::set(document, pointer, value);
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 1);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.at("foo").is_array());
  EXPECT_EQ(document.at("foo").size(), 3);
  EXPECT_TRUE(document.at("foo").at(0).is_integer());
  EXPECT_TRUE(document.at("foo").at(1).is_integer());
  EXPECT_TRUE(document.at("foo").at(2).is_integer());
  EXPECT_EQ(document.at("foo").at(0).to_integer(), 1);
  EXPECT_EQ(document.at("foo").at(1).to_integer(), 9);
  EXPECT_EQ(document.at("foo").at(2).to_integer(), 3);
}

TEST(JSONPointer_set, hyphen_property_in_object) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": { \"-\": 1 } }");
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "-"};
  sourcemeta::jsontoolkit::set(document, pointer,
                               sourcemeta::jsontoolkit::JSON{2});
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 1);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_EQ(document.at("foo").size(), 1);
  EXPECT_TRUE(document.at("foo").defines("-"));
  EXPECT_TRUE(document.at("foo").at("-").is_integer());
  EXPECT_EQ(document.at("foo").at("-").to_integer(), 2);
}

TEST(JSONPointer_set, hyphen_in_array_single_token) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]");
  const sourcemeta::jsontoolkit::Pointer pointer{"-"};
  sourcemeta::jsontoolkit::set(document, pointer,
                               sourcemeta::jsontoolkit::JSON{4});
  EXPECT_TRUE(document.is_array());
  EXPECT_EQ(document.size(), 4);
  EXPECT_TRUE(document.at(0).is_integer());
  EXPECT_TRUE(document.at(1).is_integer());
  EXPECT_TRUE(document.at(2).is_integer());
  EXPECT_TRUE(document.at(3).is_integer());
  EXPECT_EQ(document.at(0).to_integer(), 1);
  EXPECT_EQ(document.at(1).to_integer(), 2);
  EXPECT_EQ(document.at(2).to_integer(), 3);
  EXPECT_EQ(document.at(3).to_integer(), 4);
}

TEST(JSONPointer_set, hyphen_in_array_single_token_copy) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]");
  const sourcemeta::jsontoolkit::Pointer pointer{"-"};
  const sourcemeta::jsontoolkit::JSON value{4};
  sourcemeta::jsontoolkit::set(document, pointer, value);
  EXPECT_TRUE(document.is_array());
  EXPECT_EQ(document.size(), 4);
  EXPECT_TRUE(document.at(0).is_integer());
  EXPECT_TRUE(document.at(1).is_integer());
  EXPECT_TRUE(document.at(2).is_integer());
  EXPECT_TRUE(document.at(3).is_integer());
  EXPECT_EQ(document.at(0).to_integer(), 1);
  EXPECT_EQ(document.at(1).to_integer(), 2);
  EXPECT_EQ(document.at(2).to_integer(), 3);
  EXPECT_EQ(document.at(3).to_integer(), 4);
}

TEST(JSONPointer_set, hyphen_in_array_multiple_tokens) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": [ 1, 2, 3 ] }");
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "-"};
  sourcemeta::jsontoolkit::set(document, pointer,
                               sourcemeta::jsontoolkit::JSON{4});
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 1);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.at("foo").is_array());
  EXPECT_TRUE(document.at("foo").at(0).is_integer());
  EXPECT_TRUE(document.at("foo").at(1).is_integer());
  EXPECT_TRUE(document.at("foo").at(2).is_integer());
  EXPECT_TRUE(document.at("foo").at(3).is_integer());
  EXPECT_EQ(document.at("foo").at(0).to_integer(), 1);
  EXPECT_EQ(document.at("foo").at(1).to_integer(), 2);
  EXPECT_EQ(document.at("foo").at(2).to_integer(), 3);
  EXPECT_EQ(document.at("foo").at(3).to_integer(), 4);
}

TEST(JSONPointer_set, hyphen_in_array_multiple_tokens_copy) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": [ 1, 2, 3 ] }");
  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "-"};
  const sourcemeta::jsontoolkit::JSON value{4};
  sourcemeta::jsontoolkit::set(document, pointer, value);
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 1);
  EXPECT_TRUE(document.defines("foo"));
  EXPECT_TRUE(document.at("foo").is_array());
  EXPECT_TRUE(document.at("foo").at(0).is_integer());
  EXPECT_TRUE(document.at("foo").at(1).is_integer());
  EXPECT_TRUE(document.at("foo").at(2).is_integer());
  EXPECT_TRUE(document.at("foo").at(3).is_integer());
  EXPECT_EQ(document.at("foo").at(0).to_integer(), 1);
  EXPECT_EQ(document.at("foo").at(1).to_integer(), 2);
  EXPECT_EQ(document.at("foo").at(2).to_integer(), 3);
  EXPECT_EQ(document.at("foo").at(3).to_integer(), 4);
}

TEST(JSONPointer_set, hyphen_in_array_multiple_tokens_with_inner_hyphen) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"-\": [ 1, 2, 3 ] }");
  const sourcemeta::jsontoolkit::Pointer pointer{"-", "-"};
  sourcemeta::jsontoolkit::set(document, pointer,
                               sourcemeta::jsontoolkit::JSON{4});
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 1);
  EXPECT_TRUE(document.defines("-"));
  EXPECT_TRUE(document.at("-").is_array());
  EXPECT_TRUE(document.at("-").at(0).is_integer());
  EXPECT_TRUE(document.at("-").at(1).is_integer());
  EXPECT_TRUE(document.at("-").at(2).is_integer());
  EXPECT_TRUE(document.at("-").at(3).is_integer());
  EXPECT_EQ(document.at("-").at(0).to_integer(), 1);
  EXPECT_EQ(document.at("-").at(1).to_integer(), 2);
  EXPECT_EQ(document.at("-").at(2).to_integer(), 3);
  EXPECT_EQ(document.at("-").at(3).to_integer(), 4);
}

TEST(JSONPointer_set, hyphen_in_array_multiple_tokens_with_inner_hyphen_copy) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"-\": [ 1, 2, 3 ] }");
  const sourcemeta::jsontoolkit::Pointer pointer{"-", "-"};
  const sourcemeta::jsontoolkit::JSON value{4};
  sourcemeta::jsontoolkit::set(document, pointer, value);
  EXPECT_TRUE(document.is_object());
  EXPECT_EQ(document.size(), 1);
  EXPECT_TRUE(document.defines("-"));
  EXPECT_TRUE(document.at("-").is_array());
  EXPECT_TRUE(document.at("-").at(0).is_integer());
  EXPECT_TRUE(document.at("-").at(1).is_integer());
  EXPECT_TRUE(document.at("-").at(2).is_integer());
  EXPECT_TRUE(document.at("-").at(3).is_integer());
  EXPECT_EQ(document.at("-").at(0).to_integer(), 1);
  EXPECT_EQ(document.at("-").at(1).to_integer(), 2);
  EXPECT_EQ(document.at("-").at(2).to_integer(), 3);
  EXPECT_EQ(document.at("-").at(3).to_integer(), 4);
}

TEST(JSONPointer_set, positive_integer_property) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "0": 1
  })JSON");

  const sourcemeta::jsontoolkit::Pointer pointer{0};
  const sourcemeta::jsontoolkit::JSON value{4};
  sourcemeta::jsontoolkit::set(document, pointer, value);
  EXPECT_TRUE(document.at("0").is_integer());
  EXPECT_EQ(document.at("0").to_integer(), 4);
}
