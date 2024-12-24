#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <algorithm>

static const std::map<std::string, bool> VOCABULARIES_2020_12_CORE{
    {"https://json-schema.org/draft/2020-12/vocab/core", true}};

static const std::map<std::string, bool> VOCABULARIES_2020_12_APPLICATOR{
    {"https://json-schema.org/draft/2020-12/vocab/core", true},
    {"https://json-schema.org/draft/2020-12/vocab/applicator", true}};

static const std::map<std::string, bool> VOCABULARIES_2020_12_UNEVALUATED{
    {"https://json-schema.org/draft/2020-12/vocab/core", true},
    {"https://json-schema.org/draft/2020-12/vocab/unevaluated", true}};

static const std::map<std::string, bool> VOCABULARIES_2020_12_VALIDATION{
    {"https://json-schema.org/draft/2020-12/vocab/core", true},
    {"https://json-schema.org/draft/2020-12/vocab/validation", true}};

static const std::map<std::string, bool> VOCABULARIES_2020_12_FORMAT_ANNOTATION{
    {"https://json-schema.org/draft/2020-12/vocab/core", true},
    {"https://json-schema.org/draft/2020-12/vocab/format-annotation", true}};

static const std::map<std::string, bool> VOCABULARIES_2020_12_FORMAT_ASSERTION{
    {"https://json-schema.org/draft/2020-12/vocab/core", true},
    {"https://json-schema.org/draft/2020-12/vocab/format-assertion", true}};

static const std::map<std::string, bool> VOCABULARIES_2020_12_CONTENT{
    {"https://json-schema.org/draft/2020-12/vocab/core", true},
    {"https://json-schema.org/draft/2020-12/vocab/content", true}};

static const std::map<std::string, bool> VOCABULARIES_2020_12_METADATA{
    {"https://json-schema.org/draft/2020-12/vocab/core", true},
    {"https://json-schema.org/draft/2020-12/vocab/meta-data", true}};

static const std::map<std::string, bool> VOCABULARIES_2020_12_HYPERSCHEMA{
    {"https://json-schema.org/draft/2020-12/vocab/core", true},
    {"https://json-schema.org/draft/2019-09/vocab/hyper-schema", true}};

TEST(JSONSchema_default_walker_2020_12, core_schema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("$schema", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/core");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, core_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("$vocabulary", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/core");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, core_id) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("$id", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/core");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, core_anchor) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("$anchor", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/core");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, core_dynamicAnchor) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("$dynamicAnchor", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/core");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, core_ref) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("$ref", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Reference);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/core");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, core_dynamicRef) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("$dynamicRef", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Reference);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/core");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, core_defs) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("$defs", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::LocationMembers);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/core");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, core_comment) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("$comment", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Other);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/core");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, applicator_allOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("allOf", VOCABULARIES_2020_12_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorElementsInPlace);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/applicator");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, applicator_anyOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("anyOf", VOCABULARIES_2020_12_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorElementsInPlace);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/applicator");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, applicator_oneOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("oneOf", VOCABULARIES_2020_12_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorElementsInPlace);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/applicator");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, applicator_not) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("not", VOCABULARIES_2020_12_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValueOther);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/applicator");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, applicator_if) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("if", VOCABULARIES_2020_12_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValueOther);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/applicator");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, applicator_then) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("then", VOCABULARIES_2020_12_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValueInPlace);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/applicator");
  const std::set<std::string> expected{"if"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_2020_12, applicator_else) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("else", VOCABULARIES_2020_12_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValueInPlace);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/applicator");
  const std::set<std::string> expected{"if"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_2020_12, applicator_dependentSchemas) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("dependentSchemas",
                                          VOCABULARIES_2020_12_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorMembersInPlace);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/applicator");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, applicator_prefixItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("prefixItems", VOCABULARIES_2020_12_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorElements);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/applicator");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, applicator_items) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("items", VOCABULARIES_2020_12_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValue);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/applicator");
  const std::set<std::string> expected{"prefixItems"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_2020_12, applicator_contains_only) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("contains", VOCABULARIES_2020_12_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValueInPlace);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/applicator");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, applicator_contains_with_validation) {
  using namespace sourcemeta::jsontoolkit;
  std::map<std::string, bool> vocabularies;
  std::copy(VOCABULARIES_2020_12_APPLICATOR.cbegin(),
            VOCABULARIES_2020_12_APPLICATOR.cend(),
            std::inserter(vocabularies, vocabularies.end()));
  std::copy(VOCABULARIES_2020_12_VALIDATION.cbegin(),
            VOCABULARIES_2020_12_VALIDATION.cend(),
            std::inserter(vocabularies, vocabularies.end()));
  const auto result{default_schema_walker("contains", vocabularies)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValueInPlace);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/applicator");
  const std::set<std::string> expected{"minContains", "maxContains"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_2020_12, applicator_properties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("properties", VOCABULARIES_2020_12_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorMembers);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/applicator");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, applicator_patternProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("patternProperties",
                                          VOCABULARIES_2020_12_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorMembers);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/applicator");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, applicator_additionalProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("additionalProperties",
                                          VOCABULARIES_2020_12_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValue);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/applicator");
  const std::set<std::string> expected{"properties", "patternProperties"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_2020_12, applicator_propertyNames) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("propertyNames", VOCABULARIES_2020_12_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValueInPlace);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/applicator");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, unevaluated_unevaluatedItems_only) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("unevaluatedItems",
                                          VOCABULARIES_2020_12_UNEVALUATED)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValue);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/unevaluated");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     unevaluated_unevaluatedItems_with_applicator) {
  using namespace sourcemeta::jsontoolkit;
  std::map<std::string, bool> vocabularies;
  std::copy(VOCABULARIES_2020_12_UNEVALUATED.cbegin(),
            VOCABULARIES_2020_12_UNEVALUATED.cend(),
            std::inserter(vocabularies, vocabularies.end()));
  std::copy(VOCABULARIES_2020_12_APPLICATOR.cbegin(),
            VOCABULARIES_2020_12_APPLICATOR.cend(),
            std::inserter(vocabularies, vocabularies.end()));
  const auto result{default_schema_walker("unevaluatedItems", vocabularies)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValue);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/unevaluated");
  const std::set<std::string> expected{"prefixItems", "items", "contains"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_2020_12,
     unevaluated_unevaluatedProperties_only) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("unevaluatedProperties",
                                          VOCABULARIES_2020_12_UNEVALUATED)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValue);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/unevaluated");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     unevaluated_unevaluatedProperties_with_applicator) {
  using namespace sourcemeta::jsontoolkit;
  std::map<std::string, bool> vocabularies;
  std::copy(VOCABULARIES_2020_12_UNEVALUATED.cbegin(),
            VOCABULARIES_2020_12_UNEVALUATED.cend(),
            std::inserter(vocabularies, vocabularies.end()));
  std::copy(VOCABULARIES_2020_12_APPLICATOR.cbegin(),
            VOCABULARIES_2020_12_APPLICATOR.cend(),
            std::inserter(vocabularies, vocabularies.end()));
  const auto result{
      default_schema_walker("unevaluatedProperties", vocabularies)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValue);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/unevaluated");
  const std::set<std::string> expected{"properties", "patternProperties",
                                       "additionalProperties"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_2020_12, validation_type) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("type", VOCABULARIES_2020_12_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/validation");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_enum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("enum", VOCABULARIES_2020_12_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/validation");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_const) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("const", VOCABULARIES_2020_12_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/validation");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_multipleOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("multipleOf", VOCABULARIES_2020_12_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/validation");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_maximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maximum", VOCABULARIES_2020_12_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/validation");
  const std::set<std::string> expected{"type"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_2020_12, validation_minimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minimum", VOCABULARIES_2020_12_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/validation");
  const std::set<std::string> expected{"type"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_2020_12, validation_exclusiveMaximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("exclusiveMaximum",
                                          VOCABULARIES_2020_12_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/validation");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_exclusiveMinimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("exclusiveMinimum",
                                          VOCABULARIES_2020_12_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/validation");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_maxLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxLength", VOCABULARIES_2020_12_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/validation");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_minLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minLength", VOCABULARIES_2020_12_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/validation");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_pattern) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("pattern", VOCABULARIES_2020_12_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/validation");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_maxItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxItems", VOCABULARIES_2020_12_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/validation");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_minItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minItems", VOCABULARIES_2020_12_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/validation");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_uniqueItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("uniqueItems", VOCABULARIES_2020_12_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/validation");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_maxContains) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxContains", VOCABULARIES_2020_12_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/validation");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_minContains) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minContains", VOCABULARIES_2020_12_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/validation");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_maxProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxProperties", VOCABULARIES_2020_12_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/validation");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_minProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minProperties", VOCABULARIES_2020_12_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/validation");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_required) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("required", VOCABULARIES_2020_12_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/validation");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_dependentRequired) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("dependentRequired",
                                          VOCABULARIES_2020_12_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/validation");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, format_annotation_format) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("format", VOCABULARIES_2020_12_FORMAT_ANNOTATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Annotation);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/format-annotation");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, format_assertion_format) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("format", VOCABULARIES_2020_12_FORMAT_ASSERTION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Assertion);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/format-assertion");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, content_contentEncoding) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("contentEncoding", VOCABULARIES_2020_12_CONTENT)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Annotation);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/content");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, content_contentMediaType) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("contentMediaType", VOCABULARIES_2020_12_CONTENT)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Annotation);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/content");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, content_contentSchema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("contentSchema", VOCABULARIES_2020_12_CONTENT)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValueOther);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/content");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, metadata_title) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("title", VOCABULARIES_2020_12_METADATA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Annotation);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/meta-data");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, metadata_description) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("description", VOCABULARIES_2020_12_METADATA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Annotation);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/meta-data");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, metadata_default) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("default", VOCABULARIES_2020_12_METADATA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Annotation);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/meta-data");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, metadata_deprecated) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("deprecated", VOCABULARIES_2020_12_METADATA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Annotation);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/meta-data");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, metadata_readOnly) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("readOnly", VOCABULARIES_2020_12_METADATA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Annotation);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/meta-data");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, metadata_writeOnly) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("writeOnly", VOCABULARIES_2020_12_METADATA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Annotation);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/meta-data");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, metadata_examples) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("examples", VOCABULARIES_2020_12_METADATA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Annotation);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2020-12/vocab/meta-data");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, hyperschema_base) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("base", VOCABULARIES_2020_12_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, hyperschema_links) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("links", VOCABULARIES_2020_12_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, hyperschema_ref) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("ref", VOCABULARIES_2020_12_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, hyperschema_href) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("href", VOCABULARIES_2020_12_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, hyperschema_anchor) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("anchor", VOCABULARIES_2020_12_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, hyperschema_anchorPointer) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("anchorPointer", VOCABULARIES_2020_12_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, hyperschema_rel) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("rel", VOCABULARIES_2020_12_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, hyperschema_templatePointers) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("templatePointers",
                                          VOCABULARIES_2020_12_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, hyperschema_templateRequired) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("templateRequired",
                                          VOCABULARIES_2020_12_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, hyperschema_targetMediaType) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("targetMediaType",
                                          VOCABULARIES_2020_12_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, hyperschema_targetHints) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("targetHints", VOCABULARIES_2020_12_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, hyperschema_submissionMediaType) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("submissionMediaType",
                                          VOCABULARIES_2020_12_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, hyperschema_hrefSchema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("hrefSchema", VOCABULARIES_2020_12_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValue);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2019-09/vocab/hyper-schema");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, hyperschema_targetSchema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("targetSchema", VOCABULARIES_2020_12_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValue);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2019-09/vocab/hyper-schema");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, hyperschema_headerSchema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("headerSchema", VOCABULARIES_2020_12_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValue);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2019-09/vocab/hyper-schema");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, hyperschema_submissionSchema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("submissionSchema",
                                          VOCABULARIES_2020_12_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ApplicatorValue);
  EXPECT_TRUE(result.vocabulary.has_value());
  EXPECT_EQ(result.vocabulary.value(),
            "https://json-schema.org/draft/2019-09/vocab/hyper-schema");
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, applicator_allOf_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("allOf", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, applicator_anyOf_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("anyOf", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, applicator_oneOf_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("oneOf", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, applicator_not_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("not", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, applicator_if_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("if", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, applicator_then_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("then", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, applicator_else_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("else", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     applicator_dependentSchemas_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("dependentSchemas", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     applicator_prefixItems_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("prefixItems", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, applicator_items_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("items", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     applicator_contains_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("contains", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     applicator_properties_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("properties", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     applicator_patternProperties_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("patternProperties", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     applicator_additionalProperties_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("additionalProperties", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     applicator_propertyNames_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("propertyNames", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     unevaluated_unevaluatedItems_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("unevaluatedItems", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     unevaluated_unevaluatedProperties_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("unevaluatedProperties",
                                          VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_type_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("type", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_enum_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("enum", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_const_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("const", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     validation_multipleOf_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("multipleOf", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_maximum_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maximum", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_minimum_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minimum", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     validation_exclusiveMaximum_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("exclusiveMaximum", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     validation_exclusiveMinimum_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("exclusiveMinimum", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     validation_maxLength_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxLength", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     validation_minLength_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minLength", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, validation_pattern_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("pattern", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     validation_maxItems_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxItems", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     validation_minItems_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minItems", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     validation_uniqueItems_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("uniqueItems", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     validation_maxContains_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxContains", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     validation_minContains_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minContains", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     validation_maxProperties_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxProperties", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     validation_minProperties_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minProperties", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     validation_required_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("required", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     validation_dependentRequired_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("dependentRequired", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     format_annotation_format_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("format", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     format_assertion_format_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("format", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     content_contentEncoding_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("contentEncoding", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     content_contentMediaType_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("contentMediaType", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     content_contentSchema_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("contentSchema", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, metadata_title_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("title", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     metadata_description_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("description", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, metadata_default_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("default", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     metadata_deprecated_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("deprecated", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, metadata_readOnly_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("readOnly", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, metadata_writeOnly_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("writeOnly", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, metadata_examples_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("examples", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, hyperschema_base_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("base", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, hyperschema_links_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("links", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, hyperschema_ref_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("ref", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, hyperschema_href_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("href", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, hyperschema_anchor_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("anchor", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     hyperschema_anchorPointer_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("anchorPointer", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, hyperschema_rel_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("rel", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     hyperschema_templatePointers_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("templatePointers", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     hyperschema_templateRequired_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("templateRequired", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     hyperschema_targetMediaType_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("targetMediaType", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     hyperschema_targetHints_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("targetHints", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     hyperschema_submissionMediaType_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("submissionMediaType", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     hyperschema_hrefSchema_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("hrefSchema", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     hyperschema_targetSchema_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("targetSchema", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     hyperschema_headerSchema_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("headerSchema", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12,
     hyperschema_submissionSchema_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("submissionSchema", VOCABULARIES_2020_12_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Unknown);
  EXPECT_FALSE(result.vocabulary.has_value());
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2020_12, keyword_priority_array) {
  std::map<std::string, bool> vocabularies;
  std::copy(VOCABULARIES_2020_12_APPLICATOR.cbegin(),
            VOCABULARIES_2020_12_APPLICATOR.cend(),
            std::inserter(vocabularies, vocabularies.end()));
  std::copy(VOCABULARIES_2020_12_UNEVALUATED.cbegin(),
            VOCABULARIES_2020_12_UNEVALUATED.cend(),
            std::inserter(vocabularies, vocabularies.end()));
  std::copy(VOCABULARIES_2020_12_VALIDATION.cbegin(),
            VOCABULARIES_2020_12_VALIDATION.cend(),
            std::inserter(vocabularies, vocabularies.end()));

  const auto &walker = sourcemeta::jsontoolkit::default_schema_walker;
  using namespace sourcemeta::jsontoolkit;
  EXPECT_EQ(keyword_priority("prefixItems", vocabularies, walker), 0);
  EXPECT_EQ(keyword_priority("items", vocabularies, walker), 1);
  EXPECT_EQ(keyword_priority("minContains", vocabularies, walker), 0);
  EXPECT_EQ(keyword_priority("maxContains", vocabularies, walker), 0);
  EXPECT_EQ(keyword_priority("contains", vocabularies, walker), 1);
  EXPECT_EQ(keyword_priority("unevaluatedItems", vocabularies, walker), 2);
}

TEST(JSONSchema_default_walker_2020_12, keyword_priority_object) {
  std::map<std::string, bool> vocabularies;
  std::copy(VOCABULARIES_2020_12_APPLICATOR.cbegin(),
            VOCABULARIES_2020_12_APPLICATOR.cend(),
            std::inserter(vocabularies, vocabularies.end()));
  std::copy(VOCABULARIES_2020_12_UNEVALUATED.cbegin(),
            VOCABULARIES_2020_12_UNEVALUATED.cend(),
            std::inserter(vocabularies, vocabularies.end()));

  const auto &walker = sourcemeta::jsontoolkit::default_schema_walker;
  using namespace sourcemeta::jsontoolkit;
  EXPECT_EQ(keyword_priority("properties", vocabularies, walker), 0);
  EXPECT_EQ(keyword_priority("patternProperties", vocabularies, walker), 0);
  EXPECT_EQ(keyword_priority("additionalProperties", vocabularies, walker), 1);
  EXPECT_EQ(keyword_priority("unevaluatedProperties", vocabularies, walker), 2);
}

TEST(JSONSchema_default_walker_2020_12, keyword_priority_other) {
  const auto &vocabularies = VOCABULARIES_2020_12_APPLICATOR;
  const auto &walker = sourcemeta::jsontoolkit::default_schema_walker;
  using namespace sourcemeta::jsontoolkit;
  EXPECT_EQ(keyword_priority("if", vocabularies, walker), 0);
  EXPECT_EQ(keyword_priority("then", vocabularies, walker), 1);
  EXPECT_EQ(keyword_priority("else", vocabularies, walker), 1);
}

TEST(JSONSchema_default_walker_2020_12, keyword_priority_unknown) {
  const auto &vocabularies = VOCABULARIES_2020_12_CORE;
  const auto &walker = sourcemeta::jsontoolkit::default_schema_walker;
  using namespace sourcemeta::jsontoolkit;
  EXPECT_EQ(keyword_priority("foobar", vocabularies, walker), 0);
}
