#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

// TODO: Extract into a common utility helper
#define EXPLAIN(schema, kind)                                                  \
  const auto result{sourcemeta::jsontoolkit::explain(                          \
      (schema), sourcemeta::jsontoolkit::official_resolver)};                  \
  EXPECT_TRUE(result.has_value());                                             \
  EXPECT_TRUE(                                                                 \
      std::holds_alternative<sourcemeta::jsontoolkit::kind>(result.value()));  \
  const auto &explanation{                                                     \
      std::get<sourcemeta::jsontoolkit::kind>(result.value())};

// TODO: Test all other JSON Schema dialects

TEST(JSONSchema_explain_string, draft7_type) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "string"
  })JSON")};

  EXPLAIN(schema, SchemaExplanationScalar);

  EXPECT_EQ(explanation.type, "String");
  EXPECT_TRUE(explanation.constraints.empty());
  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_FALSE(explanation.description.has_value());
  EXPECT_TRUE(explanation.examples.empty());
}

TEST(JSONSchema_explain_string, draft7_type_id) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "string"
  })JSON")};

  EXPLAIN(schema, SchemaExplanationScalar);

  EXPECT_EQ(explanation.type, "String");
  EXPECT_TRUE(explanation.constraints.empty());
  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_FALSE(explanation.description.has_value());
  EXPECT_TRUE(explanation.examples.empty());
}

TEST(JSONSchema_explain_string, draft7_type_comment) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$comment": "My comment",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "string"
  })JSON")};

  EXPLAIN(schema, SchemaExplanationScalar);

  EXPECT_EQ(explanation.type, "String");
  EXPECT_TRUE(explanation.constraints.empty());
  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_FALSE(explanation.description.has_value());
  EXPECT_TRUE(explanation.examples.empty());
}

TEST(JSONSchema_explain_string, draft7_type_title) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Foo Bar",
    "type": "string"
  })JSON")};

  EXPLAIN(schema, SchemaExplanationScalar);

  EXPECT_EQ(explanation.type, "String");
  EXPECT_TRUE(explanation.constraints.empty());
  EXPECT_TRUE(explanation.title.has_value());
  EXPECT_EQ(explanation.title, "Foo Bar");
  EXPECT_FALSE(explanation.description.has_value());
  EXPECT_TRUE(explanation.examples.empty());
}

TEST(JSONSchema_explain_string, draft7_type_description) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "My description",
    "type": "string"
  })JSON")};

  EXPLAIN(schema, SchemaExplanationScalar);

  EXPECT_EQ(explanation.type, "String");
  EXPECT_TRUE(explanation.constraints.empty());
  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_TRUE(explanation.description.has_value());
  EXPECT_EQ(explanation.description, "My description");
  EXPECT_TRUE(explanation.examples.empty());
}

TEST(JSONSchema_explain_string, draft7_type_pattern) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "pattern": "^[a-z]+$",
    "type": "string"
  })JSON")};

  EXPLAIN(schema, SchemaExplanationScalar);

  EXPECT_EQ(explanation.type, "String");
  EXPECT_EQ(explanation.constraints.size(), 1);
  EXPECT_TRUE(explanation.constraints.contains("matches"));
  EXPECT_EQ(explanation.constraints.at("matches"), "^[a-z]+$");
  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_FALSE(explanation.description.has_value());
  EXPECT_TRUE(explanation.examples.empty());
}

TEST(JSONSchema_explain_string, draft7_type_format) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "format": "ipv4",
    "type": "string"
  })JSON")};

  EXPLAIN(schema, SchemaExplanationScalar);

  EXPECT_EQ(explanation.type, "String (IP Address v4)");
  EXPECT_TRUE(explanation.constraints.empty());
  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_FALSE(explanation.description.has_value());
  EXPECT_TRUE(explanation.examples.empty());
}

TEST(JSONSchema_explain_string, draft7_type_examples) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "string",
    "examples": [ "foo", "bar", "baz" ]
  })JSON")};

  EXPLAIN(schema, SchemaExplanationScalar);

  EXPECT_EQ(explanation.type, "String");
  EXPECT_TRUE(explanation.constraints.empty());
  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_FALSE(explanation.description.has_value());
  EXPECT_EQ(explanation.examples.size(), 3);
  EXPECT_TRUE(
      explanation.examples.contains(sourcemeta::jsontoolkit::JSON{"foo"}));
  EXPECT_TRUE(
      explanation.examples.contains(sourcemeta::jsontoolkit::JSON{"bar"}));
  EXPECT_TRUE(
      explanation.examples.contains(sourcemeta::jsontoolkit::JSON{"baz"}));
}

TEST(JSONSchema_explain_string, draft7_type_if_then) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "string",
    "if": { "const": "foo" },
    "then": { "minLength": 3 }
  })JSON")};

  const auto result{sourcemeta::jsontoolkit::explain(
      schema, sourcemeta::jsontoolkit::official_resolver)};
  EXPECT_FALSE(result.has_value());
}

TEST(JSONSchema_explain_string, draft7_type_minlength) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "minLength": 2,
    "type": "string"
  })JSON")};

  EXPLAIN(schema, SchemaExplanationScalar);

  EXPECT_EQ(explanation.type, "String");
  EXPECT_EQ(explanation.constraints.size(), 1);
  EXPECT_TRUE(explanation.constraints.contains("range"));
  EXPECT_EQ(explanation.constraints.at("range"), ">= 2 characters");
  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_FALSE(explanation.description.has_value());
  EXPECT_TRUE(explanation.examples.empty());
}

TEST(JSONSchema_explain_string, draft7_type_maxlength) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "maxLength": 3,
    "type": "string"
  })JSON")};

  EXPLAIN(schema, SchemaExplanationScalar);

  EXPECT_EQ(explanation.type, "String");
  EXPECT_EQ(explanation.constraints.size(), 1);
  EXPECT_TRUE(explanation.constraints.contains("range"));
  EXPECT_EQ(explanation.constraints.at("range"), "<= 3 characters");
  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_FALSE(explanation.description.has_value());
  EXPECT_TRUE(explanation.examples.empty());
}

TEST(JSONSchema_explain_string, draft7_type_minlength_maxlength_different) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "minLength": 2,
    "maxLength": 3,
    "type": "string"
  })JSON")};

  EXPLAIN(schema, SchemaExplanationScalar);

  EXPECT_EQ(explanation.type, "String");
  EXPECT_EQ(explanation.constraints.size(), 1);
  EXPECT_TRUE(explanation.constraints.contains("range"));
  EXPECT_EQ(explanation.constraints.at("range"), "2 to 3 characters");
  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_FALSE(explanation.description.has_value());
  EXPECT_TRUE(explanation.examples.empty());
}

TEST(JSONSchema_explain_string, draft7_type_minlength_maxlength_equal) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "minLength": 3,
    "maxLength": 3,
    "type": "string"
  })JSON")};

  EXPLAIN(schema, SchemaExplanationScalar);

  EXPECT_EQ(explanation.type, "String");
  EXPECT_EQ(explanation.constraints.size(), 1);
  EXPECT_TRUE(explanation.constraints.contains("range"));
  EXPECT_EQ(explanation.constraints.at("range"), "exactly 3 characters");
  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_FALSE(explanation.description.has_value());
  EXPECT_TRUE(explanation.examples.empty());
}

TEST(JSONSchema_explain_string, draft7_type_minlength_maxlength_equal_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "minLength": 1,
    "maxLength": 1,
    "type": "string"
  })JSON")};

  EXPLAIN(schema, SchemaExplanationScalar);

  EXPECT_EQ(explanation.type, "String");
  EXPECT_EQ(explanation.constraints.size(), 1);
  EXPECT_TRUE(explanation.constraints.contains("range"));
  EXPECT_EQ(explanation.constraints.at("range"), "exactly 1 character");
  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_FALSE(explanation.description.has_value());
  EXPECT_TRUE(explanation.examples.empty());
}

TEST(JSONSchema_explain_string, draft7_type_minlength_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "minLength": 1,
    "type": "string"
  })JSON")};

  EXPLAIN(schema, SchemaExplanationScalar);

  EXPECT_EQ(explanation.type, "String");
  EXPECT_EQ(explanation.constraints.size(), 1);
  EXPECT_TRUE(explanation.constraints.contains("range"));
  EXPECT_EQ(explanation.constraints.at("range"), ">= 1 character");
  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_FALSE(explanation.description.has_value());
  EXPECT_TRUE(explanation.examples.empty());
}

TEST(JSONSchema_explain_string, draft7_type_maxlength_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "maxLength": 1,
    "type": "string"
  })JSON")};

  EXPLAIN(schema, SchemaExplanationScalar);

  EXPECT_EQ(explanation.type, "String");
  EXPECT_EQ(explanation.constraints.size(), 1);
  EXPECT_TRUE(explanation.constraints.contains("range"));
  EXPECT_EQ(explanation.constraints.at("range"), "<= 1 character");
  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_FALSE(explanation.description.has_value());
  EXPECT_TRUE(explanation.examples.empty());
}

TEST(JSONSchema_explain_string, draft7_type_minlength_0_maxlength) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "minLength": 0,
    "maxLength": 3,
    "type": "string"
  })JSON")};

  EXPLAIN(schema, SchemaExplanationScalar);

  EXPECT_EQ(explanation.type, "String");
  EXPECT_EQ(explanation.constraints.size(), 1);
  EXPECT_TRUE(explanation.constraints.contains("range"));
  EXPECT_EQ(explanation.constraints.at("range"), "<= 3 characters");
  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_FALSE(explanation.description.has_value());
  EXPECT_TRUE(explanation.examples.empty());
}

TEST(JSONSchema_explain_string, draft7_type_minlength_0) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "minLength": 0,
    "type": "string"
  })JSON")};

  EXPLAIN(schema, SchemaExplanationScalar);

  EXPECT_EQ(explanation.type, "String");
  EXPECT_TRUE(explanation.constraints.empty());
  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_FALSE(explanation.description.has_value());
  EXPECT_TRUE(explanation.examples.empty());
}

TEST(JSONSchema_explain_string, draft7_type_maxlength_0) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "maxLength": 0,
    "type": "string"
  })JSON")};

  EXPLAIN(schema, SchemaExplanationConstant);

  EXPECT_TRUE(explanation.value.is_string());
  EXPECT_EQ(explanation.value.to_string(), "");
  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_FALSE(explanation.description.has_value());
}

TEST(JSONSchema_explain_string, draft7_type_minlength_0_maxlength_0) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "minLength": 0,
    "maxLength": 0,
    "type": "string"
  })JSON")};

  EXPLAIN(schema, SchemaExplanationConstant);

  EXPECT_TRUE(explanation.value.is_string());
  EXPECT_EQ(explanation.value.to_string(), "");
  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_FALSE(explanation.description.has_value());
}
