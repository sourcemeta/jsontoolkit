#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <algorithm>

static const std::map<std::string, bool> VOCABULARIES_2019_09_CORE{
    {"https://json-schema.org/draft/2019-09/vocab/core", true}};

static const std::map<std::string, bool> VOCABULARIES_2019_09_APPLICATOR{
    {"https://json-schema.org/draft/2019-09/vocab/core", true},
    {"https://json-schema.org/draft/2019-09/vocab/applicator", true}};

static const std::map<std::string, bool> VOCABULARIES_2019_09_VALIDATION{
    {"https://json-schema.org/draft/2019-09/vocab/core", true},
    {"https://json-schema.org/draft/2019-09/vocab/validation", true}};

static const std::map<std::string, bool> VOCABULARIES_2019_09_FORMAT{
    {"https://json-schema.org/draft/2019-09/vocab/core", true},
    {"https://json-schema.org/draft/2019-09/vocab/format", true}};

static const std::map<std::string, bool> VOCABULARIES_2019_09_CONTENT{
    {"https://json-schema.org/draft/2019-09/vocab/core", true},
    {"https://json-schema.org/draft/2019-09/vocab/content", true}};

static const std::map<std::string, bool> VOCABULARIES_2019_09_METADATA{
    {"https://json-schema.org/draft/2019-09/vocab/core", true},
    {"https://json-schema.org/draft/2019-09/vocab/meta-data", true}};

static const std::map<std::string, bool> VOCABULARIES_2019_09_HYPERSCHEMA{
    {"https://json-schema.org/draft/2019-09/vocab/core", true},
    {"https://json-schema.org/draft/2019-09/vocab/hyper-schema", true}};

TEST(JSONSchema_default_walker_2019_09, core_schema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("$schema", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, core_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("$vocabulary", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, core_id) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("$id", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, core_anchor) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("$anchor", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, core_recursiveAnchor) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("$recursiveAnchor", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, core_ref) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("$ref", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, core_recursiveRef) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("$recursiveRef", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, core_defs) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("$defs", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Members);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, core_comment) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("$comment", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, applicator_allOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("allOf", VOCABULARIES_2019_09_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ElementsInPlace);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, applicator_anyOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("anyOf", VOCABULARIES_2019_09_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ElementsInPlace);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, applicator_oneOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("oneOf", VOCABULARIES_2019_09_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ElementsInPlace);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, applicator_not) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("not", VOCABULARIES_2019_09_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ValueInPlace);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, applicator_if) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("if", VOCABULARIES_2019_09_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ValueInPlace);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, applicator_then) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("then", VOCABULARIES_2019_09_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ValueInPlace);
  const std::set<std::string> expected{"if"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_2019_09, applicator_else) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("else", VOCABULARIES_2019_09_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ValueInPlace);
  const std::set<std::string> expected{"if"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_2019_09, applicator_dependentSchemas) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("dependentSchemas",
                                          VOCABULARIES_2019_09_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Members);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, applicator_items) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("items", VOCABULARIES_2019_09_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ValueOrElements);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, applicator_additionalItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("additionalItems",
                                          VOCABULARIES_2019_09_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Value);
  const std::set<std::string> expected{"items"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_2019_09, applicator_contains_only) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("contains", VOCABULARIES_2019_09_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ValueInPlace);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, applicator_contains_with_validation) {
  using namespace sourcemeta::jsontoolkit;
  std::map<std::string, bool> vocabularies;
  std::copy(VOCABULARIES_2019_09_APPLICATOR.cbegin(),
            VOCABULARIES_2019_09_APPLICATOR.cend(),
            std::inserter(vocabularies, vocabularies.end()));
  std::copy(VOCABULARIES_2019_09_VALIDATION.cbegin(),
            VOCABULARIES_2019_09_VALIDATION.cend(),
            std::inserter(vocabularies, vocabularies.end()));
  const auto result{default_schema_walker("contains", vocabularies)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ValueInPlace);
  const std::set<std::string> expected{"minContains", "maxContains"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_2019_09, applicator_properties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("properties", VOCABULARIES_2019_09_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Members);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, applicator_patternProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("patternProperties",
                                          VOCABULARIES_2019_09_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Members);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, applicator_additionalProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("additionalProperties",
                                          VOCABULARIES_2019_09_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Value);
  const std::set<std::string> expected{"properties", "patternProperties"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_2019_09, applicator_propertyNames) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("propertyNames", VOCABULARIES_2019_09_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ValueInPlace);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, applicator_unevaluatedItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("unevaluatedItems",
                                          VOCABULARIES_2019_09_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Value);
  const std::set<std::string> expected{"items", "additionalItems"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_2019_09, applicator_unevaluatedProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("unevaluatedProperties",
                                          VOCABULARIES_2019_09_APPLICATOR)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Value);
  const std::set<std::string> expected{"properties", "patternProperties",
                                       "additionalProperties"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_2019_09, validation_type) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("type", VOCABULARIES_2019_09_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_enum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("enum", VOCABULARIES_2019_09_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_const) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("const", VOCABULARIES_2019_09_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_multipleOf) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("multipleOf", VOCABULARIES_2019_09_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_maximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maximum", VOCABULARIES_2019_09_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  const std::set<std::string> expected{"type"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_2019_09, validation_minimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minimum", VOCABULARIES_2019_09_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  const std::set<std::string> expected{"type"};
  EXPECT_EQ(result.dependencies, expected);
}

TEST(JSONSchema_default_walker_2019_09, validation_exclusiveMaximum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("exclusiveMaximum",
                                          VOCABULARIES_2019_09_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_exclusiveMinimum) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("exclusiveMinimum",
                                          VOCABULARIES_2019_09_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_maxLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxLength", VOCABULARIES_2019_09_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_minLength) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minLength", VOCABULARIES_2019_09_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_pattern) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("pattern", VOCABULARIES_2019_09_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_maxItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxItems", VOCABULARIES_2019_09_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_minItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minItems", VOCABULARIES_2019_09_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_uniqueItems) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("uniqueItems", VOCABULARIES_2019_09_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_maxContains) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxContains", VOCABULARIES_2019_09_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_minContains) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minContains", VOCABULARIES_2019_09_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_maxProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxProperties", VOCABULARIES_2019_09_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_minProperties) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minProperties", VOCABULARIES_2019_09_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_required) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("required", VOCABULARIES_2019_09_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_dependentRequired) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("dependentRequired",
                                          VOCABULARIES_2019_09_VALIDATION)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, format_format) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("format", VOCABULARIES_2019_09_FORMAT)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, content_contentEncoding) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("contentEncoding", VOCABULARIES_2019_09_CONTENT)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, content_contentMediaType) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("contentMediaType", VOCABULARIES_2019_09_CONTENT)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, content_contentSchema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("contentSchema", VOCABULARIES_2019_09_CONTENT)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::ValueInPlace);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, metadata_title) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("title", VOCABULARIES_2019_09_METADATA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, metadata_description) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("description", VOCABULARIES_2019_09_METADATA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, metadata_default) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("default", VOCABULARIES_2019_09_METADATA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, metadata_deprecated) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("deprecated", VOCABULARIES_2019_09_METADATA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, metadata_readOnly) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("readOnly", VOCABULARIES_2019_09_METADATA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, metadata_writeOnly) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("writeOnly", VOCABULARIES_2019_09_METADATA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, metadata_examples) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("examples", VOCABULARIES_2019_09_METADATA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, hyperschema_base) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("base", VOCABULARIES_2019_09_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, hyperschema_links) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("links", VOCABULARIES_2019_09_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, hyperschema_ref) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("ref", VOCABULARIES_2019_09_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, hyperschema_href) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("href", VOCABULARIES_2019_09_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, hyperschema_anchor) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("anchor", VOCABULARIES_2019_09_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, hyperschema_anchorPointer) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("anchorPointer", VOCABULARIES_2019_09_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, hyperschema_rel) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("rel", VOCABULARIES_2019_09_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, hyperschema_templatePointers) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("templatePointers",
                                          VOCABULARIES_2019_09_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, hyperschema_templateRequired) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("templateRequired",
                                          VOCABULARIES_2019_09_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, hyperschema_targetMediaType) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("targetMediaType",
                                          VOCABULARIES_2019_09_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, hyperschema_targetHints) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("targetHints", VOCABULARIES_2019_09_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, hyperschema_submissionMediaType) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("submissionMediaType",
                                          VOCABULARIES_2019_09_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, hyperschema_hrefSchema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("hrefSchema", VOCABULARIES_2019_09_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Value);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, hyperschema_targetSchema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("targetSchema", VOCABULARIES_2019_09_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Value);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, hyperschema_headerSchema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("headerSchema", VOCABULARIES_2019_09_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Value);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, hyperschema_submissionSchema) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("submissionSchema",
                                          VOCABULARIES_2019_09_HYPERSCHEMA)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::Value);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, applicator_allOf_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("allOf", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, applicator_anyOf_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("anyOf", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, applicator_oneOf_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("oneOf", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, applicator_not_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("not", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, applicator_if_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("if", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, applicator_then_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("then", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, applicator_else_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("else", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     applicator_dependentSchemas_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("dependentSchemas", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     applicator_additionalItems_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("additionalItems", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, applicator_items_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("items", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     applicator_contains_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("contains", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     applicator_properties_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("properties", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     applicator_patternProperties_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("patternProperties", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     applicator_additionalProperties_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("additionalProperties", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     applicator_propertyNames_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("propertyNames", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     applicator_unevaluatedItems_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("unevaluatedItems", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     applicator_unevaluatedProperties_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("unevaluatedProperties",
                                          VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_type_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("type", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_enum_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("enum", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_const_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("const", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     validation_multipleOf_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("multipleOf", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_maximum_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maximum", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_minimum_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minimum", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     validation_exclusiveMaximum_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("exclusiveMaximum", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     validation_exclusiveMinimum_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("exclusiveMinimum", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     validation_maxLength_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxLength", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     validation_minLength_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minLength", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, validation_pattern_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("pattern", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     validation_maxItems_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxItems", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     validation_minItems_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minItems", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     validation_uniqueItems_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("uniqueItems", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     validation_maxContains_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxContains", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     validation_minContains_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minContains", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     validation_maxProperties_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("maxProperties", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     validation_minProperties_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("minProperties", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     validation_required_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("required", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     validation_dependentRequired_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("dependentRequired", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, format_format_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("format", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     content_contentEncoding_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("contentEncoding", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     content_contentMediaType_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("contentMediaType", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     content_contentSchema_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("contentSchema", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, metadata_title_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("title", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     metadata_description_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("description", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, metadata_default_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("default", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     metadata_deprecated_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("deprecated", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, metadata_readOnly_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("readOnly", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, metadata_writeOnly_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("writeOnly", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, metadata_examples_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("examples", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, hyperschema_base_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("base", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, hyperschema_links_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("links", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, hyperschema_ref_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("ref", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, hyperschema_href_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("href", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, hyperschema_anchor_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("anchor", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     hyperschema_anchorPointer_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("anchorPointer", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, hyperschema_rel_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{default_schema_walker("rel", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     hyperschema_templatePointers_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("templatePointers", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     hyperschema_templateRequired_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("templateRequired", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     hyperschema_targetMediaType_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("targetMediaType", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     hyperschema_targetHints_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("targetHints", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     hyperschema_submissionMediaType_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("submissionMediaType", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     hyperschema_hrefSchema_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("hrefSchema", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     hyperschema_targetSchema_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("targetSchema", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     hyperschema_headerSchema_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("headerSchema", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09,
     hyperschema_submissionSchema_without_vocabulary) {
  using namespace sourcemeta::jsontoolkit;
  const auto result{
      default_schema_walker("submissionSchema", VOCABULARIES_2019_09_CORE)};
  EXPECT_EQ(result.strategy, SchemaWalkerStrategy::None);
  EXPECT_TRUE(result.dependencies.empty());
}

TEST(JSONSchema_default_walker_2019_09, keyword_priority_array) {
  std::map<std::string, bool> vocabularies;
  std::copy(VOCABULARIES_2019_09_APPLICATOR.cbegin(),
            VOCABULARIES_2019_09_APPLICATOR.cend(),
            std::inserter(vocabularies, vocabularies.end()));
  std::copy(VOCABULARIES_2019_09_VALIDATION.cbegin(),
            VOCABULARIES_2019_09_VALIDATION.cend(),
            std::inserter(vocabularies, vocabularies.end()));

  const auto &walker = sourcemeta::jsontoolkit::default_schema_walker;
  using namespace sourcemeta::jsontoolkit;
  EXPECT_EQ(keyword_priority("items", vocabularies, walker), 0);
  EXPECT_EQ(keyword_priority("additionalItems", vocabularies, walker), 1);
  EXPECT_EQ(keyword_priority("minContains", vocabularies, walker), 0);
  EXPECT_EQ(keyword_priority("maxContains", vocabularies, walker), 0);
  EXPECT_EQ(keyword_priority("contains", vocabularies, walker), 1);
  EXPECT_EQ(keyword_priority("unevaluatedItems", vocabularies, walker), 2);
}

TEST(JSONSchema_default_walker_2019_09, keyword_priority_object) {
  const auto &vocabularies = VOCABULARIES_2019_09_APPLICATOR;
  const auto &walker = sourcemeta::jsontoolkit::default_schema_walker;
  using namespace sourcemeta::jsontoolkit;
  EXPECT_EQ(keyword_priority("properties", vocabularies, walker), 0);
  EXPECT_EQ(keyword_priority("patternProperties", vocabularies, walker), 0);
  EXPECT_EQ(keyword_priority("additionalProperties", vocabularies, walker), 1);
  EXPECT_EQ(keyword_priority("unevaluatedProperties", vocabularies, walker), 2);
}

TEST(JSONSchema_default_walker_2019_09, keyword_priority_other) {
  const auto &vocabularies = VOCABULARIES_2019_09_APPLICATOR;
  const auto &walker = sourcemeta::jsontoolkit::default_schema_walker;
  using namespace sourcemeta::jsontoolkit;
  EXPECT_EQ(keyword_priority("if", vocabularies, walker), 0);
  EXPECT_EQ(keyword_priority("then", vocabularies, walker), 1);
  EXPECT_EQ(keyword_priority("else", vocabularies, walker), 1);
}

TEST(JSONSchema_default_walker_2019_09, keyword_priority_unknown) {
  const auto &vocabularies = VOCABULARIES_2019_09_CORE;
  const auto &walker = sourcemeta::jsontoolkit::default_schema_walker;
  using namespace sourcemeta::jsontoolkit;
  EXPECT_EQ(keyword_priority("foobar", vocabularies, walker), 0);
}
