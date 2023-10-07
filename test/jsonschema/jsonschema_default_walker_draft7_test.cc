#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

static const std::map<std::string, bool> VOCABULARIES_DRAFT7{
    {"http://json-schema.org/draft-07/schema#", true}};

TEST(JSONSchema_default_walker_draft7, schema) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("$schema", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, id) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("$id", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, ref) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("$ref", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, definitions) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("definitions", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Members);
}

TEST(JSONSchema_default_walker_draft7, comment) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("$comment", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, allOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("allOf", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Elements);
}

TEST(JSONSchema_default_walker_draft7, anyOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("anyOf", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Elements);
}

TEST(JSONSchema_default_walker_draft7, oneOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("oneOf", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Elements);
}

TEST(JSONSchema_default_walker_draft7, not ) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("not", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft7, if) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("if", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft7, then) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("then", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft7, else) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("else", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft7, items) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("items", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::ValueOrElements);
}

TEST(JSONSchema_default_walker_draft7, additionalItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("additionalItems", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft7, contains) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("contains", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft7, properties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("properties", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Members);
}

TEST(JSONSchema_default_walker_draft7, patternProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("patternProperties", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Members);
}

TEST(JSONSchema_default_walker_draft7, dependencies) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("dependencies", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Members);
}

TEST(JSONSchema_default_walker_draft7, additionalProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("additionalProperties", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft7, propertyNames) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("propertyNames", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft7, type) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("type", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, enum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("enum", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, const) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("const", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, multipleOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("multipleOf", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, maximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("maximum", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, minimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("minimum", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, exclusiveMaximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("exclusiveMaximum", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, exclusiveMinimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("exclusiveMinimum", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, maxLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("maxLength", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, minLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("minLength", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, pattern) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("pattern", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, maxItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("maxItems", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, minItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("minItems", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, uniqueItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("uniqueItems", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, maxProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("maxProperties", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, minProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("minProperties", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, required) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("required", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, format) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("format", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, contentEncoding) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("contentEncoding", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, contentMediaType) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("contentMediaType", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, title) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("title", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, description) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("description", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, default) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("default", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, readOnly) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("readOnly", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, writeOnly) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("writeOnly", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft7, examples) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("examples", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}
