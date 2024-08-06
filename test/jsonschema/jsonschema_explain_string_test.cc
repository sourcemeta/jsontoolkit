#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#define EXPLAIN_SCALAR(schema)                                                 \
  const auto result{sourcemeta::jsontoolkit::explain(                          \
      (schema), sourcemeta::jsontoolkit::official_resolver)};                  \
  EXPECT_TRUE(result.has_value());                                             \
  EXPECT_TRUE(                                                                 \
      std::holds_alternative<sourcemeta::jsontoolkit::SchemaExplainerScalar>(  \
          result.value()));                                                    \
  const auto &explanation{                                                     \
      std::get<sourcemeta::jsontoolkit::SchemaExplainerScalar>(                \
          result.value())};

// TODO: Test all other JSON Schema dialects

TEST(JSONSchema_explain_string, draft7_type) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "string"
  })JSON")};

  EXPLAIN_SCALAR(schema);

  EXPECT_EQ(explanation.type, "string");
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

  EXPLAIN_SCALAR(schema);

  EXPECT_EQ(explanation.type, "string");
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

  EXPLAIN_SCALAR(schema);

  EXPECT_EQ(explanation.type, "string");
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

  EXPLAIN_SCALAR(schema);

  EXPECT_EQ(explanation.type, "string");
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

  EXPLAIN_SCALAR(schema);

  EXPECT_EQ(explanation.type, "string");
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

  EXPLAIN_SCALAR(schema);

  EXPECT_EQ(explanation.constraints.size(), 1);
  EXPECT_TRUE(explanation.constraints.contains("matches"));
  EXPECT_EQ(explanation.constraints.at("matches"), "^[a-z]+$");
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

  EXPLAIN_SCALAR(schema);

  EXPECT_EQ(explanation.type, "string");
  EXPECT_TRUE(explanation.constraints.empty());
  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_FALSE(explanation.description.has_value());
  EXPECT_EQ(explanation.examples.size(), 3);
  EXPECT_TRUE(explanation.examples.contains("foo"));
  EXPECT_TRUE(explanation.examples.contains("bar"));
  EXPECT_TRUE(explanation.examples.contains("baz"));
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
