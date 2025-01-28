#include <gtest/gtest.h>

#include <sourcemeta/core/json.h>
#include <sourcemeta/core/yaml.h>

TEST(YAML_parse, scalar_1) {
  const std::string input{"1"};
  const auto result{sourcemeta::core::from_yaml(input)};
  const sourcemeta::core::JSON expected{1};
  EXPECT_EQ(result, expected);
}

TEST(YAML_parse, object_1) {
  const std::string input{"hello: world\nfoo: 1\nbar: true"};

  const auto result{sourcemeta::core::from_yaml(input)};

  const sourcemeta::core::JSON expected = sourcemeta::core::parse(R"JSON({
    "hello": "world",
    "foo": 1,
    "bar": true
  })JSON");

  EXPECT_EQ(result, expected);
}

TEST(YAML_parse, object_2) {
  const std::string input{"foo: >\n  bar\n  baz"};

  const auto result{sourcemeta::core::from_yaml(input)};

  const sourcemeta::core::JSON expected = sourcemeta::core::parse(R"JSON({
    "foo": "bar baz"
  })JSON");

  EXPECT_EQ(result, expected);
}

TEST(YAML_parse, array_1) {
  const std::string input{"- foo\n- true"};

  const auto result{sourcemeta::core::from_yaml(input)};

  const sourcemeta::core::JSON expected =
      sourcemeta::core::parse(R"JSON([ "foo", true ])JSON");

  EXPECT_EQ(result, expected);
}

TEST(YAML_parse, empty) {
  const std::string input{""};
  EXPECT_THROW(sourcemeta::core::from_yaml(input),
               sourcemeta::core::YAMLParseError);
}

TEST(YAML_parse, blank) {
  const std::string input{"    "};
  EXPECT_THROW(sourcemeta::core::from_yaml(input),
               sourcemeta::core::YAMLParseError);
}

TEST(YAML_parse, invalid_1) {
  const std::string input{"{ xx"};
  EXPECT_THROW(sourcemeta::core::from_yaml(input),
               sourcemeta::core::YAMLParseError);
}

TEST(YAML_parse, stub_test_1) {
  const auto result{sourcemeta::core::from_yaml(
      std::filesystem::path{STUBS_PATH} / "test_1.yaml")};
  const sourcemeta::core::JSON expected = sourcemeta::core::parse(R"JSON({
    "foo": "bar",
    "baz": 2
  })JSON");

  EXPECT_EQ(result, expected);
}

TEST(YAML_parse, file_not_exists) {
  EXPECT_THROW(sourcemeta::core::from_yaml(std::filesystem::path{STUBS_PATH} /
                                           "not_exists.yaml"),
               std::filesystem::filesystem_error);
}
