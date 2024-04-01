#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

static const std::map<std::string, bool> VOCABULARIES_DRAFT4{
    {"http://json-schema.org/draft-04/schema#", true}};

static const std::map<std::string, bool> VOCABULARIES_DRAFT4_HYPERSCHEMA{
    {"http://json-schema.org/draft-04/hyper-schema#", true}};

TEST(JSONSchema_default_walker_draft4, schema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("$schema", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, id) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("id", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, ref) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("$ref", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, definitions) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("definitions", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Members);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, allOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("allOf", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Elements);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, anyOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("anyOf", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Elements);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, oneOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("oneOf", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Elements);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, not ) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("not", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Value);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, items) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("items", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ValueOrElements);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, additionalItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("additionalItems", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Value);
  const std::set<std::string> expected{"items"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, properties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("properties", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Members);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, patternProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("patternProperties", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Members);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, dependencies) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("dependencies", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Members);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, additionalProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("additionalProperties", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Value);
  const std::set<std::string> expected{"properties", "patternProperties"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, type) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("type", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, enum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("enum", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, multipleOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("multipleOf", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, maximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("maximum", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, minimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("minimum", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, exclusiveMaximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("exclusiveMaximum", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, exclusiveMinimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("exclusiveMinimum", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, maxLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("maxLength", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, minLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("minLength", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, pattern) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("pattern", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, maxItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("maxItems", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, minItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("minItems", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, uniqueItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("uniqueItems", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, maxProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxProperties", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, minProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minProperties", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, required) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("required", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, format) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("format", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, title) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("title", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, description) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("description", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, default) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("default", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, hyperschema_links) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("links", VOCABULARIES_DRAFT4_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, hyperschema_media) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("media", VOCABULARIES_DRAFT4_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, hyperschema_pathStart) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("pathStart", VOCABULARIES_DRAFT4_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, hyperschema_href) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("href", VOCABULARIES_DRAFT4_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, hyperschema_rel) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("rel", VOCABULARIES_DRAFT4_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, hyperschema_mediaType) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("mediaType", VOCABULARIES_DRAFT4_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, hyperschema_method) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("method", VOCABULARIES_DRAFT4_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, hyperschema_encType) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("encType", VOCABULARIES_DRAFT4_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, hyperschema_readOnly) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("readOnly", VOCABULARIES_DRAFT4_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, hyperschema_targetSchema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("targetSchema", VOCABULARIES_DRAFT4_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Value);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, hyperschema_schema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("schema", VOCABULARIES_DRAFT4_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Value);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, hyperschema_links_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("links", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, hyperschema_media_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("media", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4,
     hyperschema_pathStart_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("pathStart", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, hyperschema_href_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("href", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, hyperschema_rel_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("rel", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4,
     hyperschema_mediaType_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("mediaType", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, hyperschema_method_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("method", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4,
     hyperschema_encType_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("encType", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4,
     hyperschema_readOnly_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("readOnly", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4,
     hyperschema_targetSchema_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("targetSchema", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, hyperschema_schema_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("schema", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, keyword_priority_array) {
  const auto &vocabularies = VOCABULARIES_DRAFT4;
  const auto &walker = sourcemeta::jsontoolkit::default_schema_walker;
  using namespace sourcemeta::jsontoolkit;
  EXPECT_EQ(keyword_priority("items", vocabularies, walker), 0);
  EXPECT_EQ(keyword_priority("additionalItems", vocabularies, walker), 1);
}

TEST(JSONSchema_default_walker_draft4, keyword_priority_object) {
  const auto &vocabularies = VOCABULARIES_DRAFT4;
  const auto &walker = sourcemeta::jsontoolkit::default_schema_walker;
  using namespace sourcemeta::jsontoolkit;
  EXPECT_EQ(keyword_priority("properties", vocabularies, walker), 0);
  EXPECT_EQ(keyword_priority("patternProperties", vocabularies, walker), 0);
  EXPECT_EQ(keyword_priority("additionalProperties", vocabularies, walker), 1);
}

TEST(JSONSchema_default_walker_draft4, keyword_priority_unknown) {
  const auto &vocabularies = VOCABULARIES_DRAFT4;
  const auto &walker = sourcemeta::jsontoolkit::default_schema_walker;
  using namespace sourcemeta::jsontoolkit;
  EXPECT_EQ(keyword_priority("foobar", vocabularies, walker), 0);
}
