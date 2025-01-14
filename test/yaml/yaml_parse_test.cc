#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/yaml.h>

TEST(YAML_parse, object_2) {
  const std::string input{"foo: >\n  bar\n  baz"};

  const auto result{sourcemeta::jsontoolkit::from_yaml(input)};

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": "bar baz"
  })JSON");

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
