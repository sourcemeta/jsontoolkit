#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

static const std::map<std::string, bool> VOCABULARIES_DRAFT6{
    {"http://json-schema.org/draft-06/schema#", true}};

TEST(JSONSchema_default_walker_draft6, schema) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("$schema", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, id) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("$id", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, ref) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("$ref", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, definitions) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("definitions", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Members);
}

TEST(JSONSchema_default_walker_draft6, allOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("allOf", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Elements);
}

TEST(JSONSchema_default_walker_draft6, anyOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("anyOf", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Elements);
}

TEST(JSONSchema_default_walker_draft6, oneOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("oneOf", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Elements);
}

TEST(JSONSchema_default_walker_draft6, not ) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("not", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft6, items) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("items", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::ValueOrElements);
}

TEST(JSONSchema_default_walker_draft6, additionalItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("additionalItems", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft6, contains) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("contains", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft6, properties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("properties", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Members);
}

TEST(JSONSchema_default_walker_draft6, patternProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("patternProperties", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Members);
}

TEST(JSONSchema_default_walker_draft6, dependencies) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("dependencies", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Members);
}

TEST(JSONSchema_default_walker_draft6, additionalProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("additionalProperties", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft6, propertyNames) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("propertyNames", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft6, type) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("type", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, enum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("enum", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, const) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("const", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, multipleOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("multipleOf", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, maximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("maximum", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, minimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("minimum", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, exclusiveMaximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("exclusiveMaximum", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, exclusiveMinimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("exclusiveMinimum", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, maxLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("maxLength", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, minLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("minLength", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, pattern) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("pattern", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, maxItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("maxItems", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, minItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("minItems", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, uniqueItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("uniqueItems", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, maxProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("maxProperties", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, minProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("minProperties", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, required) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("required", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, format) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("format", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, title) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("title", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, description) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("description", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, default) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("default", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft6, examples) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("examples", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}
