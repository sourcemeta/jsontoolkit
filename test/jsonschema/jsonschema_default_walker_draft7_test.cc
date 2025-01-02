#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

static const std::map<std::string, bool> VOCABULARIES_DRAFT7{
    {"http://json-schema.org/draft-07/schema#", true}};

static const std::map<std::string, bool> VOCABULARIES_DRAFT7_HYPERSCHEMA{
    {"http://json-schema.org/draft-07/hyper-schema#", true}};

TEST(JSONSchema_default_walker_draft7, schema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("$schema", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, id) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("$id", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, ref) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("$ref", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Reference);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft7, definitions) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("definitions", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::LocationMembers);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, comment) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("$comment", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, allOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("allOf", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorElementsInline);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, anyOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("anyOf", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorElementsInPlace);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, oneOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("oneOf", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorElementsInPlace);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, not) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("not", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorValueOther);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, if) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("if", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorValueInPlace);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, then) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("then", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorValueInPlace);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"if"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, else) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("else", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorValueInPlace);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"if"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, items) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("items", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorValueOrElements);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, additionalItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("additionalItems", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorValue);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"items"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, contains) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("contains", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorValueInPlace);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, properties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("properties", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorMembers);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref", "required"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, patternProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("patternProperties", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorMembers);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, dependencies) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("dependencies", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorMembers);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, additionalProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("additionalProperties", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorValue);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"properties", "patternProperties"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, propertyNames) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("propertyNames", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorValueInPlace);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, type) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("type", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"properties"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, enum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("enum", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, const) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("const", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, multipleOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("multipleOf", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, maximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("maximum", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, minimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("minimum", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, exclusiveMaximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("exclusiveMaximum", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, exclusiveMinimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("exclusiveMinimum", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, maxLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("maxLength", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, minLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("minLength", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, pattern) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("pattern", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, maxItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("maxItems", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, minItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("minItems", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, uniqueItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("uniqueItems", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, maxProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxProperties", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, minProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minProperties", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, required) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("required", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, format) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("format", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, contentEncoding) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("contentEncoding", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, contentMediaType) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("contentMediaType", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, title) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("title", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, description) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("description", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, default) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("default", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, readOnly) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("readOnly", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, writeOnly) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("writeOnly", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, examples) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("examples", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/schema#");
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, hyperschema_links) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("links", VOCABULARIES_DRAFT7_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft7, hyperschema_base) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("base", VOCABULARIES_DRAFT7_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft7, hyperschema_anchor) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("anchor", VOCABULARIES_DRAFT7_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft7, hyperschema_anchorPointer) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("anchorPointer", VOCABULARIES_DRAFT7_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft7, hyperschema_rel) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("rel", VOCABULARIES_DRAFT7_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft7, hyperschema_href) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("href", VOCABULARIES_DRAFT7_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft7, hyperschema_templatePointers) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("templatePointers",
                                          VOCABULARIES_DRAFT7_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft7, hyperschema_templateRequired) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("templateRequired",
                                          VOCABULARIES_DRAFT7_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft7, hyperschema_targetMediaType) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("targetMediaType",
                                          VOCABULARIES_DRAFT7_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft7, hyperschema_targetHints) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("targetHints", VOCABULARIES_DRAFT7_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft7, hyperschema_submissionMediaType) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("submissionMediaType",
                                          VOCABULARIES_DRAFT7_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft7, hyperschema_hrefSchema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("hrefSchema", VOCABULARIES_DRAFT7_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorValue);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/hyper-schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft7, hyperschema_targetSchema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("targetSchema", VOCABULARIES_DRAFT7_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorValue);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/hyper-schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft7, hyperschema_headerSchema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("headerSchema", VOCABULARIES_DRAFT7_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorValue);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/hyper-schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft7, hyperschema_submissionSchema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("submissionSchema",
                                          VOCABULARIES_DRAFT7_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorValue);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-07/hyper-schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft7, hyperschema_links_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("links", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, hyperschema_base_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("base", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, hyperschema_anchor_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("anchor", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7,
     hyperschema_anchorPointer_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("anchorPointer", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, hyperschema_rel_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("rel", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, hyperschema_href_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("href", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7,
     hyperschema_templatePointers_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("templatePointers", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7,
     hyperschema_templateRequired_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("templateRequired", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7,
     hyperschema_targetMediaType_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("targetMediaType", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7,
     hyperschema_targetHints_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("targetHints", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7,
     hyperschema_submissionMediaType_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("submissionMediaType", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7,
     hyperschema_hrefSchema_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("hrefSchema", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7,
     hyperschema_targetSchema_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("targetSchema", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7,
     hyperschema_headerSchema_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("headerSchema", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7,
     hyperschema_submissionSchema_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("submissionSchema", VOCABULARIES_DRAFT7)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  const std::set<std::string> expected{"$ref"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft7, keyword_priority_array) {
  const auto &vocabularies = VOCABULARIES_DRAFT7;
  const auto &walker = sourcemeta::jsontoolkit::default_schema_walker;
  using namespace sourcemeta::jsontoolkit;
  EXPECT_EQ(keyword_priority("items", vocabularies, walker), 1);
  EXPECT_EQ(keyword_priority("additionalItems", vocabularies, walker), 2);
}

TEST(JSONSchema_default_walker_draft7, keyword_priority_object) {
  const auto &vocabularies = VOCABULARIES_DRAFT7;
  const auto &walker = sourcemeta::jsontoolkit::default_schema_walker;
  using namespace sourcemeta::jsontoolkit;
  EXPECT_EQ(keyword_priority("properties", vocabularies, walker), 2);
  EXPECT_EQ(keyword_priority("patternProperties", vocabularies, walker), 1);
  EXPECT_EQ(keyword_priority("additionalProperties", vocabularies, walker), 3);
}

TEST(JSONSchema_default_walker_draft7, keyword_priority_other) {
  const auto &vocabularies = VOCABULARIES_DRAFT7;
  const auto &walker = sourcemeta::jsontoolkit::default_schema_walker;
  using namespace sourcemeta::jsontoolkit;
  EXPECT_EQ(keyword_priority("if", vocabularies, walker), 1);
  EXPECT_EQ(keyword_priority("then", vocabularies, walker), 2);
  EXPECT_EQ(keyword_priority("else", vocabularies, walker), 2);
}

TEST(JSONSchema_default_walker_draft7, keyword_priority_unknown) {
  const auto &vocabularies = VOCABULARIES_DRAFT7;
  const auto &walker = sourcemeta::jsontoolkit::default_schema_walker;
  using namespace sourcemeta::jsontoolkit;
  EXPECT_EQ(keyword_priority("foobar", vocabularies, walker), 1);
}
