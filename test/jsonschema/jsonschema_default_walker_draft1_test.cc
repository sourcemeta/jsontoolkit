#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

static const std::map<std::string, bool> VOCABULARIES_DRAFT1{
    {"http://json-schema.org/draft-01/schema#", true}};

static const std::map<std::string, bool> VOCABULARIES_DRAFT1_HYPERSCHEMA{
    {"http://json-schema.org/draft-01/hyper-schema#", true}};

TEST(JSONSchema_default_walker_draft1, schema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("$schema", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, id) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("id", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, ref) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("$ref", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Reference);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, items) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("items", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorValueOrElements);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, properties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("properties", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorMembers);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, additionalProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("additionalProperties", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorValue);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  const std::set<std::string> expected{"properties"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft1, type) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("type", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorElements);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, enum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("enum", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, maximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("maximum", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, minimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("minimum", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, maximumCanEqual) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maximumCanEqual", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, minimumCanEqual) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minimumCanEqual", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, maxLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("maxLength", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, minLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("minLength", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, pattern) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("pattern", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, maxItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("maxItems", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, minItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("minItems", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, requires) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("requires", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorValueInPlace);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, format) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("format", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, title) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("title", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, description) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("description", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, default) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("default", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, disallow) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("disallow", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, extends) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("extends", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorValueOrElementsInPlace);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, contentEncoding) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("contentEncoding", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, optional) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("optional", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, maxDecimal) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("maxDecimal", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_links) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("links", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_fragmentResolution) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("fragmentResolution",
                                          VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_root) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("root", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_readonly) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("readonly", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_pathStart) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("pathStart", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_mediaType) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("mediaType", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_alternate) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("alternate", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_href) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("href", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_rel) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("rel", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_method) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("method", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_enctype) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("enctype", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_schema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("$schema", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_id) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("id", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_ref) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("$ref", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_items) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("items", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorValueOrElements);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/hyper-schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_properties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("properties", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorMembers);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/hyper-schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_additionalProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("additionalProperties",
                                          VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorValue);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/hyper-schema#");
  const std::set<std::string> expected{"properties"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_draft1, hyperschema_type) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("type", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorElements);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/hyper-schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_enum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("enum", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_maximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maximum", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_minimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minimum", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_maximumCanEqual) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("maximumCanEqual",
                                          VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_minimumCanEqual) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("minimumCanEqual",
                                          VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_maxLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxLength", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_minLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minLength", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_pattern) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("pattern", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_maxItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxItems", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_minItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minItems", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_requires) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("requires", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorValueInPlace);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/hyper-schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_format) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("format", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_title) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("title", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_description) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("description", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_default) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("default", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_disallow) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("disallow", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_extends) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("extends", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::ApplicatorValueOrElementsInPlace);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "http://json-schema.org/draft-01/hyper-schema#");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_contentEncoding) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("contentEncoding",
                                          VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_optional) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("optional", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_maxDecimal) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxDecimal", VOCABULARIES_DRAFT1_HYPERSCHEMA)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_links_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("links", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1,
     hyperschema_fragmentResolution_without_hyperchema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("fragmentResolution", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_root_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("root", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1,
     hyperschema_readonly_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("readonly", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1,
     hyperschema_pathStart_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("pathStart", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1,
     hyperschema_mediaType_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("mediaType", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1,
     hyperschema_alternate_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("alternate", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_href_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("href", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_rel_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("rel", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, hyperschema_method_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("method", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1,
     hyperschema_enctype_without_hyperschema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("enctype", VOCABULARIES_DRAFT1)};
  EXPECT_EQ(result.type, KeywordType::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_draft1, keyword_priority_object) {
  const auto &vocabularies = VOCABULARIES_DRAFT1;
  const auto &walker = sourcemeta::jsontoolkit::default_schema_walker;
  using namespace sourcemeta::jsontoolkit;
  EXPECT_EQ(keyword_priority("properties", vocabularies, walker), 0);
  EXPECT_EQ(keyword_priority("additionalProperties", vocabularies, walker), 1);
}

TEST(JSONSchema_default_walker_draft1, keyword_priority_unknown) {
  const auto &vocabularies = VOCABULARIES_DRAFT1;
  const auto &walker = sourcemeta::jsontoolkit::default_schema_walker;
  using namespace sourcemeta::jsontoolkit;
  EXPECT_EQ(keyword_priority("foobar", vocabularies, walker), 0);
}
