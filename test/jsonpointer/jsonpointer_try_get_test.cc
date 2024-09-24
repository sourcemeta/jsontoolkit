#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>

TEST(JSONPointer_try_get, empty_on_integer) {
  const sourcemeta::jsontoolkit::JSON document{5};
  const sourcemeta::jsontoolkit::Pointer pointer;
  const auto result{sourcemeta::jsontoolkit::try_get(document, pointer)};
  EXPECT_TRUE(result.has_value());
  EXPECT_EQ(result.value().get(), document);
}

TEST(JSONPointer_try_get, empty_on_object) {
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": 1
  })JSON")};

  const sourcemeta::jsontoolkit::Pointer pointer;
  const auto result{sourcemeta::jsontoolkit::try_get(document, pointer)};
  EXPECT_TRUE(result.has_value());
  EXPECT_EQ(result.value().get(), document);
}

TEST(JSONPointer_try_get, empty_on_array) {
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON([ 1, 2, 3 ])JSON")};
  const sourcemeta::jsontoolkit::Pointer pointer;
  const auto result{sourcemeta::jsontoolkit::try_get(document, pointer)};
  EXPECT_TRUE(result.has_value());
  EXPECT_EQ(result.value().get(), document);
}

TEST(JSONPointer_try_get, top_level_property_true) {
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": 1
  })JSON")};

  const sourcemeta::jsontoolkit::Pointer pointer{"foo"};
  const auto result{sourcemeta::jsontoolkit::try_get(document, pointer)};
  EXPECT_TRUE(result.has_value());
  EXPECT_EQ(result.value().get(), document.at("foo"));
}

TEST(JSONPointer_try_get, top_level_property_false) {
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": 1
  })JSON")};

  const sourcemeta::jsontoolkit::Pointer pointer{"bar"};
  const auto result{sourcemeta::jsontoolkit::try_get(document, pointer)};
  EXPECT_FALSE(result.has_value());
}

TEST(JSONPointer_try_get, top_level_index_true) {
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON([ 1, 2, 3 ])JSON")};

  const sourcemeta::jsontoolkit::Pointer pointer{2};
  const auto result{sourcemeta::jsontoolkit::try_get(document, pointer)};
  EXPECT_TRUE(result.has_value());
  EXPECT_EQ(result.value().get(), document.at(2));
}

TEST(JSONPointer_try_get, top_level_index_false) {
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON([ 1, 2, 3 ])JSON")};

  const sourcemeta::jsontoolkit::Pointer pointer{3};
  const auto result{sourcemeta::jsontoolkit::try_get(document, pointer)};
  EXPECT_FALSE(result.has_value());
}

TEST(JSONPointer_try_get, top_level_numeric_property_true) {
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON({
    "0": 1
  })JSON")};

  const sourcemeta::jsontoolkit::Pointer pointer{"0"};
  const auto result{sourcemeta::jsontoolkit::try_get(document, pointer)};
  EXPECT_TRUE(result.has_value());
  EXPECT_EQ(result.value().get(), document.at("0"));
}

TEST(JSONPointer_try_get, top_level_numeric_property_as_index_true) {
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON({
    "0": 1
  })JSON")};

  const sourcemeta::jsontoolkit::Pointer pointer{0};
  const auto result{sourcemeta::jsontoolkit::try_get(document, pointer)};
  EXPECT_TRUE(result.has_value());
  EXPECT_EQ(result.value().get(), document.at("0"));
}

TEST(JSONPointer_try_get, complex_true) {
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": {
      "bar": [ 1, 2, { "baz": "qux" } ]
    }
  })JSON")};

  const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar", 2, "baz"};
  const auto result{sourcemeta::jsontoolkit::try_get(document, pointer)};
  EXPECT_TRUE(result.has_value());
  EXPECT_EQ(result.value().get(), document.at("foo").at("bar").at(2).at("baz"));
}

TEST(JSONPointer_try_get, complex_false) {
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": {
      "bar": [ 1, 2, { "baz": "qux" } ]
    }
  })JSON")};

  const sourcemeta::jsontoolkit::Pointer pointer{"foo", 2, "baz"};
  const auto result{sourcemeta::jsontoolkit::try_get(document, pointer)};
  EXPECT_FALSE(result.has_value());
}
