#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

static const std::unordered_map<std::string, bool> VOCABULARIES_2020_12{
    {"https://json-schema.org/draft/2020-12/vocab/core", true},
    {"https://json-schema.org/draft/2020-12/vocab/applicator", true},
    {"https://json-schema.org/draft/2020-12/vocab/unevaluated", true},
    {"https://json-schema.org/draft/2020-12/vocab/validation", true},
    {"https://json-schema.org/draft/2020-12/vocab/meta-data", true},
    {"https://json-schema.org/draft/2020-12/vocab/format-annotation", true},
    {"https://json-schema.org/draft/2020-12/vocab/content", true}};

TEST(jsonschema, default_walker_2020_12_schema) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("$schema", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("$vocabulary", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_id) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("$id", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_anchor) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("$anchor", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_dynamicAnchor) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("$dynamicAnchor", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_ref) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("$ref", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_dynamicRef) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("$dynamicRef", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_defs) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("$defs", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::Members);
}

TEST(jsonschema, default_walker_2020_12_comment) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("$comment", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_allOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("allOf", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::Elements);
}

TEST(jsonschema, default_walker_2020_12_anyOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("anyOf", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::Elements);
}

TEST(jsonschema, default_walker_2020_12_oneOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("oneOf", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::Elements);
}

TEST(jsonschema, default_walker_2020_12_not) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("not", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::Value);
}

TEST(jsonschema, default_walker_2020_12_if) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("if", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::Value);
}

TEST(jsonschema, default_walker_2020_12_then) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("then", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::Value);
}

TEST(jsonschema, default_walker_2020_12_else) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("else", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::Value);
}

TEST(jsonschema, default_walker_2020_12_dependentSchemas) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("dependentSchemas", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::Members);
}

TEST(jsonschema, default_walker_2020_12_prefixItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("prefixItems", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::Elements);
}

TEST(jsonschema, default_walker_2020_12_items) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("items", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::Value);
}

TEST(jsonschema, default_walker_2020_12_contains) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("contains", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::Value);
}

TEST(jsonschema, default_walker_2020_12_properties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("properties", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::Members);
}

TEST(jsonschema, default_walker_2020_12_patternProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("patternProperties", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::Members);
}

TEST(jsonschema, default_walker_2020_12_additionalProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("additionalProperties", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::Value);
}

TEST(jsonschema, default_walker_2020_12_propertyNames) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("propertyNames", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::Value);
}

TEST(jsonschema, default_walker_2020_12_unevaluatedItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("unevaluatedItems", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::Value);
}

TEST(jsonschema, default_walker_2020_12_unevaluatedProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("unevaluatedProperties", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::Value);
}

TEST(jsonschema, default_walker_2020_12_type) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("type", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_enum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("enum", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_const) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("const", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_multipleOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("multipleOf", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_maximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("maximum", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_minimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("minimum", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_exclusiveMaximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("exclusiveMaximum", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_exclusiveMinimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("exclusiveMinimum", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_maxLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("maxLength", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_minLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("minLength", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_pattern) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("pattern", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_maxItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("maxItems", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_minItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("minItems", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_uniqueItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("uniqueItems", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_maxContains) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("maxContains", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_minContains) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("minContains", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_maxProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("maxProperties", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_minProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("minProperties", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_required) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("required", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_dependentRequired) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("dependentRequired", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_format) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("format", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_contentEncoding) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("contentEncoding", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_contentMediaType) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("contentMediaType", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_contentSchema) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("contentSchema", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::Value);
}

TEST(jsonschema, default_walker_2020_12_title) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("title", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_description) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("description", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_default) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("default", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_deprecated) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{
      default_schema_walker("deprecated", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_readOnly) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("readOnly", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_writeOnly) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("writeOnly", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}

TEST(jsonschema, default_walker_2020_12_examples) {
  using namespace sourcemeta::jsontoolkit;
  const auto strategy{default_schema_walker("examples", VOCABULARIES_2020_12)};
  EXPECT_EQ(strategy, schema_walker_strategy_t::None);
}
