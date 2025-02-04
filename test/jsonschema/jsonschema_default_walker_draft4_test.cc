#include <gtest/gtest.h>
#include <sourcemeta/core/jsonschema.h>

static const std::map<std::string, bool> VOCABULARIES_DRAFT4{
    {"http://json-schema.org/draft-04/schema#", true}};

static const std::map<std::string, bool> VOCABULARIES_DRAFT4_HYPERSCHEMA{
    {"http://json-schema.org/draft-04/hyper-schema#", true}};

TEST(JSONSchema_default_walker_draft4, schema) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("$schema", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, id) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("id", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, ref) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("$ref", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Reference);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, definitions) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("definitions", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::LocationMembers);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, allOf) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("allOf", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::ApplicatorElementsInline);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, anyOf) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("anyOf", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::ApplicatorElementsInPlace);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, oneOf) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("oneOf", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::ApplicatorElementsInPlace);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, not) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("not", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::ApplicatorValueOther);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, items) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("items", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::ApplicatorValueOrElements);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, additionalItems) {
  using namespace sourcemeta::core;
  const auto result{
      schema_official_walker("additionalItems", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::ApplicatorValue);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"items"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, properties) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("properties", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type,
            SchemaKeywordType::ApplicatorMembersTraversePropertyStatic);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref", "required"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, patternProperties) {
  using namespace sourcemeta::core;
  const auto result{
      schema_official_walker("patternProperties", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type,
            SchemaKeywordType::ApplicatorMembersTraversePropertyRegex);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, dependencies) {
  using namespace sourcemeta::core;
  const auto result{
      schema_official_walker("dependencies", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::ApplicatorMembers);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, additionalProperties) {
  using namespace sourcemeta::core;
  const auto result{
      schema_official_walker("additionalProperties", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::ApplicatorValueTraverseAnyProperty);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"properties", "patternProperties"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, type) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("type", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"properties"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, enum) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("enum", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, multipleOf) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("multipleOf", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, maximum) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("maximum", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, minimum) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("minimum", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, exclusiveMaximum) {
  using namespace sourcemeta::core;
  const auto result{
      schema_official_walker("exclusiveMaximum", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, exclusiveMinimum) {
  using namespace sourcemeta::core;
  const auto result{
      schema_official_walker("exclusiveMinimum", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, maxLength) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("maxLength", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, minLength) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("minLength", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, pattern) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("pattern", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, maxItems) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("maxItems", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, minItems) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("minItems", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, uniqueItems) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("uniqueItems", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, maxProperties) {
  using namespace sourcemeta::core;
  const auto result{
      schema_official_walker("maxProperties", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, minProperties) {
  using namespace sourcemeta::core;
  const auto result{
      schema_official_walker("minProperties", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, required) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("required", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, format) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("format", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, title) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("title", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Comment);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, description) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("description", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Comment);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, default) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("default", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Comment);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, hyperschema_links) {
  using namespace sourcemeta::core;
  const auto result{
      schema_official_walker("links", VOCABULARIES_DRAFT4_HYPERSCHEMA)};
  EXPECT_EQ(result.type, SchemaKeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, hyperschema_media) {
  using namespace sourcemeta::core;
  const auto result{
      schema_official_walker("media", VOCABULARIES_DRAFT4_HYPERSCHEMA)};
  EXPECT_EQ(result.type, SchemaKeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, hyperschema_pathStart) {
  using namespace sourcemeta::core;
  const auto result{
      schema_official_walker("pathStart", VOCABULARIES_DRAFT4_HYPERSCHEMA)};
  EXPECT_EQ(result.type, SchemaKeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, hyperschema_href) {
  using namespace sourcemeta::core;
  const auto result{
      schema_official_walker("href", VOCABULARIES_DRAFT4_HYPERSCHEMA)};
  EXPECT_EQ(result.type, SchemaKeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, hyperschema_rel) {
  using namespace sourcemeta::core;
  const auto result{
      schema_official_walker("rel", VOCABULARIES_DRAFT4_HYPERSCHEMA)};
  EXPECT_EQ(result.type, SchemaKeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, hyperschema_mediaType) {
  using namespace sourcemeta::core;
  const auto result{
      schema_official_walker("mediaType", VOCABULARIES_DRAFT4_HYPERSCHEMA)};
  EXPECT_EQ(result.type, SchemaKeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, hyperschema_method) {
  using namespace sourcemeta::core;
  const auto result{
      schema_official_walker("method", VOCABULARIES_DRAFT4_HYPERSCHEMA)};
  EXPECT_EQ(result.type, SchemaKeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, hyperschema_encType) {
  using namespace sourcemeta::core;
  const auto result{
      schema_official_walker("encType", VOCABULARIES_DRAFT4_HYPERSCHEMA)};
  EXPECT_EQ(result.type, SchemaKeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, hyperschema_readOnly) {
  using namespace sourcemeta::core;
  const auto result{
      schema_official_walker("readOnly", VOCABULARIES_DRAFT4_HYPERSCHEMA)};
  EXPECT_EQ(result.type, SchemaKeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, hyperschema_targetSchema) {
  using namespace sourcemeta::core;
  const auto result{
      schema_official_walker("targetSchema", VOCABULARIES_DRAFT4_HYPERSCHEMA)};
  EXPECT_EQ(result.type, SchemaKeywordType::ApplicatorValue);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/hyper-schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, hyperschema_schema) {
  using namespace sourcemeta::core;
  const auto result{
      schema_official_walker("schema", VOCABULARIES_DRAFT4_HYPERSCHEMA)};
  EXPECT_EQ(result.type, SchemaKeywordType::ApplicatorValue);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-04/hyper-schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft4, hyperschema_links_without_hyperschema) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("links", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, hyperschema_media_without_hyperschema) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("media", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4,
     hyperschema_pathStart_without_hyperschema) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("pathStart", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, hyperschema_href_without_hyperschema) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("href", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, hyperschema_rel_without_hyperschema) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("rel", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4,
     hyperschema_mediaType_without_hyperschema) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("mediaType", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, hyperschema_method_without_hyperschema) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("method", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4,
     hyperschema_encType_without_hyperschema) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("encType", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4,
     hyperschema_readOnly_without_hyperschema) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("readOnly", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4,
     hyperschema_targetSchema_without_hyperschema) {
  using namespace sourcemeta::core;
  const auto result{
      schema_official_walker("targetSchema", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, hyperschema_schema_without_hyperschema) {
  using namespace sourcemeta::core;
  const auto result{schema_official_walker("schema", VOCABULARIES_DRAFT4)};
  EXPECT_EQ(result.type, SchemaKeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft4, schema_keyword_priority_array) {
  const auto &vocabularies = VOCABULARIES_DRAFT4;
  const auto &walker = sourcemeta::core::schema_official_walker;
  using namespace sourcemeta::core;
  EXPECT_EQ(schema_keyword_priority("items", vocabularies, walker), 1);
  EXPECT_EQ(schema_keyword_priority("additionalItems", vocabularies, walker),
            2);
}

TEST(JSONSchema_default_walker_draft4, schema_keyword_priority_object) {
  const auto &vocabularies = VOCABULARIES_DRAFT4;
  const auto &walker = sourcemeta::core::schema_official_walker;
  using namespace sourcemeta::core;
  EXPECT_EQ(schema_keyword_priority("properties", vocabularies, walker), 2);
  EXPECT_EQ(schema_keyword_priority("patternProperties", vocabularies, walker),
            1);
  EXPECT_EQ(
      schema_keyword_priority("additionalProperties", vocabularies, walker), 3);
}

TEST(JSONSchema_default_walker_draft4, schema_keyword_priority_unknown) {
  const auto &vocabularies = VOCABULARIES_DRAFT4;
  const auto &walker = sourcemeta::core::schema_official_walker;
  using namespace sourcemeta::core;
  EXPECT_EQ(schema_keyword_priority("foobar", vocabularies, walker), 1);
}
