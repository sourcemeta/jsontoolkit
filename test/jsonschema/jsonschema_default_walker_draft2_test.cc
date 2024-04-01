#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

static const std::map<std::string, bool> VOCABULARIES_DRAFT2{
    {"http://json-schema.org/draft-02/schema#", true}};

static const std::map<std::string, bool> VOCABULARIES_DRAFT2_HYPERSCHEMA{
    {"http://json-schema.org/draft-02/hyper-schema#", true}};

TEST(JSONSchema_default_walker_draft2, schema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("$schema", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, id) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("id", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, ref) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("$ref", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, items) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("items", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ValueOrElements);
}

TEST(JSONSchema_default_walker_draft2, properties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("properties", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Members);
}

TEST(JSONSchema_default_walker_draft2, additionalProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("additionalProperties", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft2, type) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("type", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Elements);
}

TEST(JSONSchema_default_walker_draft2, enum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("enum", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, maximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("maximum", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, minimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("minimum", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, maximumCanEqual) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maximumCanEqual", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, minimumCanEqual) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minimumCanEqual", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, maxLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("maxLength", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, minLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("minLength", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, pattern) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("pattern", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, maxItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("maxItems", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, minItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("minItems", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, uniqueItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("uniqueItems", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, requires) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("requires", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft2, format) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("format", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, title) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("title", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, description) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("description", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, default) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("default", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, divisibleBy) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("divisibleBy", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, disallow) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("disallow", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, extends) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("extends", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ValueOrElements);
}

TEST(JSONSchema_default_walker_draft2, contentEncoding) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("contentEncoding", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_links) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("links", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_fragmentResolution) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("fragmentResolution",
                                          VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_root) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("root", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_readonly) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("readonly", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_pathStart) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("pathStart", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_mediaType) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("mediaType", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_alternate) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("alternate", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_href) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("href", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_rel) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("rel", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_method) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("method", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_enctype) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("enctype", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_targetSchema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("targetSchema", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_links_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("links", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_schema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("$schema", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_id) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("id", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_ref) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("$ref", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_items) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("items", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ValueOrElements);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_properties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("properties", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Members);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_additionalProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("additionalProperties",
                                          VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_type) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("type", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Elements);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_enum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("enum", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_maximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maximum", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_minimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minimum", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_maximumCanEqual) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("maximumCanEqual",
                                          VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_minimumCanEqual) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("minimumCanEqual",
                                          VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_maxLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxLength", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_minLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minLength", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_pattern) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("pattern", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_maxItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxItems", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_minItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minItems", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_uniqueItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("uniqueItems", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_requires) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("requires", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Value);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_format) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("format", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_title) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("title", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_description) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("description", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_default) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("default", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_divisibleBy) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("divisibleBy", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_disallow) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("disallow", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_extends) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("extends", VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ValueOrElements);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_contentEncoding) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("contentEncoding",
                                          VOCABULARIES_DRAFT2_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2,
     hyperschema_fragmentResolution_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("fragmentResolution", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_root_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("root", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2,
     hyperschema_readonly_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("readonly", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2,
     hyperschema_pathStart_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("pathStart", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2,
     hyperschema_mediaType_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("mediaType", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2,
     hyperschema_alternate_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("alternate", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_href_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("href", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_rel_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("rel", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2, hyperschema_method_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("method", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2,
     hyperschema_enctype_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("enctype", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}

TEST(JSONSchema_default_walker_draft2,
     hyperschema_targetSchema_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("targetSchema", VOCABULARIES_DRAFT2)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
}
