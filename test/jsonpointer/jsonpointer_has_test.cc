#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>

TEST(JSONPointer_has, empty_on_integer) {
  const sourcemeta::jsontoolkit::JSON document{5};
  const sourcemeta::jsontoolkit::Pointer pointer;
  EXPECT_TRUE(sourcemeta::jsontoolkit::has(document, pointer));
}

TEST(JSONPointer_has, empty_on_object) {
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": 1
  })JSON")};

  const sourcemeta::jsontoolkit::Pointer pointer;
  EXPECT_TRUE(sourcemeta::jsontoolkit::has(document, pointer));
}

TEST(JSONPointer_has, empty_on_array) {
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON([ 1, 2, 3 ])JSON")};
  const sourcemeta::jsontoolkit::Pointer pointer;
  EXPECT_TRUE(sourcemeta::jsontoolkit::has(document, pointer));
}

TEST(JSONPointer_has, top_level_property_true) {
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": 1
  })JSON")};

  const sourcemeta::jsontoolkit::Pointer pointer{"foo"};
  EXPECT_TRUE(sourcemeta::jsontoolkit::has(document, pointer));
}

TEST(JSONPointer_has, top_level_property_false) {
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": 1
  })JSON")};

  const sourcemeta::jsontoolkit::Pointer pointer{"bar"};
  EXPECT_FALSE(sourcemeta::jsontoolkit::has(document, pointer));
}

TEST(JSONPointer_has, top_level_index_true) {
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON([ 1, 2, 3 ])JSON")};

  const sourcemeta::jsontoolkit::Pointer pointer{2};
  EXPECT_TRUE(sourcemeta::jsontoolkit::has(document, pointer));
}

TEST(JSONPointer_has, top_level_index_false) {
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON([ 1, 2, 3 ])JSON")};

  const sourcemeta::jsontoolkit::Pointer pointer{3};
  EXPECT_FALSE(sourcemeta::jsontoolkit::has(document, pointer));
}

TEST(JSONPointer_has, top_level_numeric_property_true) {
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON({
    "0": 1
  })JSON")};

  const sourcemeta::jsontoolkit::Pointer pointer{"0"};
  EXPECT_TRUE(sourcemeta::jsontoolkit::has(document, pointer));
}

TEST(JSONPointer_has, top_level_numeric_property_as_index_true) {
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON({
    "0": 1
  })JSON")};

  const sourcemeta::jsontoolkit::Pointer pointer{0};
  EXPECT_TRUE(sourcemeta::jsontoolkit::has(document, pointer));
}

TEST(JSONPointer_has, complex_true) {
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": {
      "bar": [ 1, 2, { "baz": "qux" } ]
    }
  })JSON")};

  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar", 2, "baz"};
  EXPECT_TRUE(sourcemeta::jsontoolkit::has(document, pointer));
}

TEST(JSONPointer_has, complex_false) {
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": {
      "bar": [ 1, 2, { "baz": "qux" } ]
    }
  })JSON")};

  const sourcemeta::jsontoolkit::Pointer pointer{"foo", 2, "baz"};
  EXPECT_FALSE(sourcemeta::jsontoolkit::has(document, pointer));
}
