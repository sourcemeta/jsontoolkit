#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

static const std::map<std::string, bool> VOCABULARIES_DRAFT3{
    {"http://json-schema.org/draft-03/schema#", true}};

TEST(JSONSchema_default_walker_draft3, schema) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("$schema", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft3, id) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("id", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft3, ref) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("$ref", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft3, items) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("items", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::ValueOrElements);
}

TEST(JSONSchema_default_walker_draft3, additionalItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("additionalItems", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft3, properties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("properties", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Members);
}

TEST(JSONSchema_default_walker_draft3, patternProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("patternProperties", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Members);
}

TEST(JSONSchema_default_walker_draft3, dependencies) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("dependencies", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Members);
}

TEST(JSONSchema_default_walker_draft3, additionalProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("additionalProperties", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft3, type) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("type", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Elements);
}

TEST(JSONSchema_default_walker_draft3, enum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("enum", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft3, maximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("maximum", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft3, minimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("minimum", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft3, exclusiveMaximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("exclusiveMaximum", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft3, exclusiveMinimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("exclusiveMinimum", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft3, maxLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("maxLength", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft3, minLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("minLength", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft3, pattern) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("pattern", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft3, maxItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("maxItems", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft3, minItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("minItems", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft3, uniqueItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("uniqueItems", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft3, required) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("required", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft3, format) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("format", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft3, title) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("title", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft3, description) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("description", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft3, default) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("default", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft3, divisibleBy) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("divisibleBy", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft3, disallow) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("disallow", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Elements);
}

TEST(JSONSchema_default_walker_draft3, extends) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("extends", VOCABULARIES_DRAFT3)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::ValueOrElements);
}
