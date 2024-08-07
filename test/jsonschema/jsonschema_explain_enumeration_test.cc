#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include "jsonschema_test_utils.h"

// TODO: Test all other JSON Schema dialects

TEST(JSONSchema_explain_enumeration, draft7_enum) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "enum": [ "foo", "bar", "baz" ]
  })JSON")};

  EXPLAIN(schema, SchemaExplanationEnumeration);

  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_FALSE(explanation.description.has_value());
  EXPECT_EQ(explanation.values.size(), 3);
  EXPECT_TRUE(
      explanation.values.contains(sourcemeta::jsontoolkit::JSON{"foo"}));
  EXPECT_TRUE(
      explanation.values.contains(sourcemeta::jsontoolkit::JSON{"bar"}));
  EXPECT_TRUE(
      explanation.values.contains(sourcemeta::jsontoolkit::JSON{"baz"}));
}

TEST(JSONSchema_explain_enumeration, draft7_examples) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "examples": [ "xxx" ],
    "enum": [ "foo", "bar", "baz" ]
  })JSON")};

  EXPLAIN(schema, SchemaExplanationEnumeration);

  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_FALSE(explanation.description.has_value());
  EXPECT_EQ(explanation.values.size(), 3);
  EXPECT_TRUE(
      explanation.values.contains(sourcemeta::jsontoolkit::JSON{"foo"}));
  EXPECT_TRUE(
      explanation.values.contains(sourcemeta::jsontoolkit::JSON{"bar"}));
  EXPECT_TRUE(
      explanation.values.contains(sourcemeta::jsontoolkit::JSON{"baz"}));
}

TEST(JSONSchema_explain_enumeration, draft7_title) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "My Enum",
    "enum": [ "foo", "bar", "baz" ]
  })JSON")};

  EXPLAIN(schema, SchemaExplanationEnumeration);

  EXPECT_TRUE(explanation.title.has_value());
  EXPECT_EQ(explanation.title.value(), "My Enum");
  EXPECT_FALSE(explanation.description.has_value());
  EXPECT_EQ(explanation.values.size(), 3);
  EXPECT_TRUE(
      explanation.values.contains(sourcemeta::jsontoolkit::JSON{"foo"}));
  EXPECT_TRUE(
      explanation.values.contains(sourcemeta::jsontoolkit::JSON{"bar"}));
  EXPECT_TRUE(
      explanation.values.contains(sourcemeta::jsontoolkit::JSON{"baz"}));
}

TEST(JSONSchema_explain_enumeration, draft7_description) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "My description",
    "enum": [ "foo", "bar", "baz" ]
  })JSON")};

  EXPLAIN(schema, SchemaExplanationEnumeration);

  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_TRUE(explanation.description.has_value());
  EXPECT_EQ(explanation.description.value(), "My description");
  EXPECT_EQ(explanation.values.size(), 3);
  EXPECT_TRUE(
      explanation.values.contains(sourcemeta::jsontoolkit::JSON{"foo"}));
  EXPECT_TRUE(
      explanation.values.contains(sourcemeta::jsontoolkit::JSON{"bar"}));
  EXPECT_TRUE(
      explanation.values.contains(sourcemeta::jsontoolkit::JSON{"baz"}));
}
