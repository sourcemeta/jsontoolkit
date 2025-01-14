#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/yaml.h>

TEST(YAML_parse, array_1) {
  const std::string input{"- foo\n- true"};

  const auto result{sourcemeta::jsontoolkit::from_yaml(input)};

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON([ "foo", true ])JSON");

  EXPECT_EQ(result, expected);
}

TEST(YAML_parse, empty) {
  const std::string input{""};
  EXPECT_THROW(sourcemeta::jsontoolkit::from_yaml(input),
               sourcemeta::jsontoolkit::YAMLParseError);
}

TEST(YAML_parse, blank) {
  const std::string input{"    "};
  EXPECT_THROW(sourcemeta::jsontoolkit::from_yaml(input),
               sourcemeta::jsontoolkit::YAMLParseError);
}
