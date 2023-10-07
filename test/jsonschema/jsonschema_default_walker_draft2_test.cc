#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

static const std::map<std::string, bool> VOCABULARIES_DRAFT2{
    {"http://json-schema.org/draft-02/schema#", true}};

TEST(JSONSchema_default_walker_draft2, schema) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("$schema", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, id) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("id", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, ref) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("$ref", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, items) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("items", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::ValueOrElements);
}

TEST(JSONSchema_default_walker_draft2, properties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("properties", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Members);
}

TEST(JSONSchema_default_walker_draft2, additionalProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("additionalProperties", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft2, type) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("type", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Elements);
}

TEST(JSONSchema_default_walker_draft2, enum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("enum", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, maximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("maximum", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, minimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("minimum", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, maximumCanEqual) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("maximumCanEqual", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, minimumCanEqual) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("minimumCanEqual", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, maxLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("maxLength", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, minLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("minLength", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, pattern) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("pattern", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, maxItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("maxItems", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, minItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("minItems", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, uniqueItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("uniqueItems", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, requires) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("requires", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft2, format) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("format", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, title) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("title", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, description) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("description", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, default) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("default", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, divisibleBy) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("divisibleBy", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, disallow) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("disallow", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, extends) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("extends", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::ValueOrElements);
}

TEST(JSONSchema_default_walker_draft2, contentEncoding) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("contentEncoding", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}
