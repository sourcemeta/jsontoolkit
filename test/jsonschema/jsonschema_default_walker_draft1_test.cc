#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

static const std::map<std::string, bool> VOCABULARIES_DRAFT1{
    {"http://json-schema.org/draft-01/schema#", true}};

TEST(JSONSchema_default_walker_draft1, schema) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("$schema", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft1, id) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("id", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft1, ref) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("$ref", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft1, items) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("items", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::ValueOrElements);
}

TEST(JSONSchema_default_walker_draft1, properties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("properties", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Members);
}

TEST(JSONSchema_default_walker_draft1, additionalProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("additionalProperties", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft1, type) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("type", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Elements);
}

TEST(JSONSchema_default_walker_draft1, enum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("enum", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft1, maximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("maximum", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft1, minimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("minimum", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft1, maximumCanEqual) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("maximumCanEqual", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft1, minimumCanEqual) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("minimumCanEqual", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft1, maxLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("maxLength", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft1, minLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("minLength", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft1, pattern) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("pattern", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft1, maxItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("maxItems", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft1, minItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("minItems", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft1, requires) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("requires", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft1, format) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("format", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft1, title) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("title", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft1, description) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("description", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft1, default) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("default", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft1, disallow) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("disallow", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft1, extends) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("extends", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::ValueOrElements);
}

TEST(JSONSchema_default_walker_draft1, contentEncoding) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("contentEncoding", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft1, optional) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("optional", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft1, maxDecimal) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("maxDecimal", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(strategy, SchemaWalkerStrategy::None);
}
