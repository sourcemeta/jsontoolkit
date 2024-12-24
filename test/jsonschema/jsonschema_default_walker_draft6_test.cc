#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

static const std::map<std::string, bool> VOCABULARIES_DRAFT6{
    {"http://json-schema.org/draft-06/schema#", true}};

static const std::map<std::string, bool> VOCABULARIES_DRAFT6_HYPERSCHEMA{
    {"http://json-schema.org/draft-06/hyper-schema#", true}};

TEST(JSONSchema_default_walker_draft6, schema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("$schema", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Other);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, id) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("$id", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Other);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, ref) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("$ref", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Reference);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft6, definitions) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("definitions", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::LocationMembers);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, allOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("allOf", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorElementsInPlace);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, anyOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("anyOf", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorElementsInPlace);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, oneOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("oneOf", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorElementsInPlace);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, not) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("not", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValueInPlace);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, items) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("items", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValueOrElements);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, additionalItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("additionalItems", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValue);
  const std::set<std::string> expected{"items"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, contains) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("contains", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValueInPlace);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, properties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("properties", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorMembers);
  const std::set<std::string> expected{"$ref", "required"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, patternProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("patternProperties", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorMembers);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, dependencies) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("dependencies", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorMembers);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, additionalProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("additionalProperties", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValue);
  const std::set<std::string> expected{"properties", "patternProperties"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, propertyNames) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("propertyNames", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValueInPlace);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, type) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("type", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  const std::set<std::string> expected{"properties"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, enum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("enum", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, const) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("const", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, multipleOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("multipleOf", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, maximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("maximum", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, minimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("minimum", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, exclusiveMaximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("exclusiveMaximum", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, exclusiveMinimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("exclusiveMinimum", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, maxLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("maxLength", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, minLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("minLength", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, pattern) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("pattern", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, maxItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("maxItems", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, minItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("minItems", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, uniqueItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("uniqueItems", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, maxProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxProperties", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, minProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minProperties", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, required) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("required", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, format) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("format", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Other);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, title) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("title", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Other);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, description) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("description", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Other);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, default) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("default", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Other);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, examples) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("examples", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Other);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, hyperschema_links) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("links", VOCABULARIES_DRAFT6_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft6, hyperschema_href) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("href", VOCABULARIES_DRAFT6_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft6, hyperschema_rel) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("rel", VOCABULARIES_DRAFT6_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft6, hyperschema_mediaType) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("mediaType", VOCABULARIES_DRAFT6_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft6, hyperschema_submissionEncType) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("submissionEncType",
                                          VOCABULARIES_DRAFT6_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft6, hyperschema_base) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("base", VOCABULARIES_DRAFT6_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft6, hyperschema_media) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("media", VOCABULARIES_DRAFT6_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft6, hyperschema_readOnly) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("readOnly", VOCABULARIES_DRAFT6_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft6, hyperschema_hrefSchema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("hrefSchema", VOCABULARIES_DRAFT6_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValue);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft6, hyperschema_targetSchema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("targetSchema", VOCABULARIES_DRAFT6_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValue);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft6, hyperschema_submissionSchema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("submissionSchema",
                                          VOCABULARIES_DRAFT6_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValue);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft6, hyperschema_links_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("links", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, hyperschema_href_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("href", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, hyperschema_rel_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("rel", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6,
     hyperschema_mediaType_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("mediaType", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6,
     hyperschema_submissionEncType_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("submissionEncType", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, hyperschema_base_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("base", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, hyperschema_media_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("media", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6,
     hyperschema_readOnly_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("readOnly", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Other);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6,
     hyperschema_hrefSchema_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("hrefSchema", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6,
     hyperschema_targetSchema_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("targetSchema", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6,
     hyperschema_submissionSchema_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("submissionSchema", VOCABULARIES_DRAFT6)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft6, keyword_priority_array) {
  const auto &vocabularies = VOCABULARIES_DRAFT6;
  const auto &walker = sourcemeta::jsontoolkit::default_schema_walker;
  using namespace sourcemeta::jsontoolkit;
  EXPECT_EQ(keyword_priority("items", vocabularies, walker), 1);
  EXPECT_EQ(keyword_priority("additionalItems", vocabularies, walker), 2);
}

TEST(JSONSchema_default_walker_draft6, keyword_priority_object) {
  const auto &vocabularies = VOCABULARIES_DRAFT6;
  const auto &walker = sourcemeta::jsontoolkit::default_schema_walker;
  using namespace sourcemeta::jsontoolkit;
  EXPECT_EQ(keyword_priority("properties", vocabularies, walker), 2);
  EXPECT_EQ(keyword_priority("patternProperties", vocabularies, walker), 1);
  EXPECT_EQ(keyword_priority("additionalProperties", vocabularies, walker), 3);
}

TEST(JSONSchema_default_walker_draft6, keyword_priority_unknown) {
  const auto &vocabularies = VOCABULARIES_DRAFT6;
  const auto &walker = sourcemeta::jsontoolkit::default_schema_walker;
  using namespace sourcemeta::jsontoolkit;
  EXPECT_EQ(keyword_priority("foobar", vocabularies, walker), 1);
}
