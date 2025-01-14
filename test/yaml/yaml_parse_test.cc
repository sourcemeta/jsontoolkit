#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/yaml.h>

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
