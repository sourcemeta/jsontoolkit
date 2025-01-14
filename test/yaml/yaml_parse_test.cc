#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/yaml.h>

TEST(YAML_parse, scalar_1) {
  const std::string input{"1"};
  const auto result{sourcemeta::jsontoolkit::from_yaml(input)};
  const sourcemeta::jsontoolkit::JSON expected{nullptr};
  EXPECT_EQ(result, expected);
}
