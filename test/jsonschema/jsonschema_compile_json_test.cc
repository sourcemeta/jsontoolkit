#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_compile_json, defines_basic_root) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionDefines{Pointer{}, std::nullopt, "#", "", true,
                                     true, SchemaCompilerValueString{"foo"}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "defines",
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": null,
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#",
      "value": {
        "category": "value",
        "type": "string",
        "value": "foo"
      }
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, defines_basic_nested) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{SchemaCompilerAssertionDefines{
      Pointer{"foo", "bar"}, std::nullopt, "#/foo/bar", "", true, true,
      SchemaCompilerValueString{"foo"}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "defines",
      "relativeSchemaLocation": "/foo/bar",
      "relativeInstanceLocation": null,
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#/foo/bar",
      "value": {
        "category": "value",
        "type": "string",
        "value": "foo"
      }
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, fail_basic_root) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{SchemaCompilerAssertionFail{
      Pointer{}, std::nullopt, "#", "", true, true, SchemaCompilerValueNone{}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "fail",
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": null,
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#",
      "value": null
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, type_basic_root) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{SchemaCompilerAssertionTypeStrict{
      Pointer{}, std::nullopt, "#", "", true, true,
      SchemaCompilerValueType{JSON::Type::String}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "type-strict",
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": null,
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#",
      "value": {
        "category": "value",
        "type": "type",
        "value": "string"
      }
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, or_empty) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{SchemaCompilerLogicalOr{
      Pointer{}, std::nullopt, "#", "", true, true, false, {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "or",
      "value": {
        "category": "value",
        "type": "boolean",
        "value": false
      },
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": null,
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#",
      "children": []
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, or_single_child) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{}, std::nullopt, "#", "", true, true,
      SchemaCompilerValueType{JSON::Type::String}}};

  const SchemaCompilerTemplate steps{SchemaCompilerLogicalOr{
      Pointer{}, std::nullopt, "#", "", true, true, false, children}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "or",
      "value": {
        "category": "value",
        "type": "boolean",
        "value": false
      },
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": null,
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#",
      "children": [
        {
          "category": "assertion",
          "type": "type-strict",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": null,
          "schemaResource": "",
          "dynamic": true,
          "report": true,
          "absoluteKeywordLocation": "#",
          "value": {
            "category": "value",
            "type": "type",
            "value": "string"
          }
        }
      ]
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, or_multiple_children) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionTypeStrict{
          Pointer{}, std::nullopt, "#", "", true, true,
          SchemaCompilerValueType{JSON::Type::String}},
      SchemaCompilerAssertionTypeStrict{
          Pointer{}, std::nullopt, "#", "", true, true,
          SchemaCompilerValueType{JSON::Type::Array}}};

  const SchemaCompilerTemplate steps{SchemaCompilerLogicalOr{
      Pointer{}, std::nullopt, "#", "", true, true, false, children}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "or",
      "value": {
        "category": "value",
        "type": "boolean",
        "value": false
      },
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": null,
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#",
      "children": [
        {
          "category": "assertion",
          "type": "type-strict",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": null,
          "schemaResource": "",
          "dynamic": true,
          "report": true,
          "absoluteKeywordLocation": "#",
          "value": {
            "category": "value",
            "type": "type",
            "value": "string"
          }
        },
        {
          "category": "assertion",
          "type": "type-strict",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": null,
          "schemaResource": "",
          "dynamic": true,
          "report": true,
          "absoluteKeywordLocation": "#",
          "value": {
            "category": "value",
            "type": "type",
            "value": "array"
          }
        }
      ]
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, and_empty) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{Pointer{},
                               std::nullopt,
                               "#",
                               "",
                               true,
                               true,
                               SchemaCompilerValueNone{},
                               {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "and",
      "value": null,
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": null,
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#",
      "children": []
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, and_single_child) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{}, std::nullopt, "#", "", true, true,
      SchemaCompilerValueType{JSON::Type::String}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{Pointer{}, std::nullopt, "#", "", true, true,
                               SchemaCompilerValueNone{}, children}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "and",
      "value": null,
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": null,
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#",
      "children": [
        {
          "category": "assertion",
          "type": "type-strict",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": null,
          "schemaResource": "",
          "dynamic": true,
          "report": true,
          "absoluteKeywordLocation": "#",
          "value": {
            "category": "value",
            "type": "type",
            "value": "string"
          }
        }
      ]
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, and_multiple_children) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionTypeStrict{
          Pointer{}, std::nullopt, "#", "", true, true,
          SchemaCompilerValueType{JSON::Type::String}},
      SchemaCompilerAssertionTypeStrict{
          Pointer{}, std::nullopt, "#", "", true, true,
          SchemaCompilerValueType{JSON::Type::Array}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{Pointer{}, std::nullopt, "#", "", true, true,
                               SchemaCompilerValueNone{}, children}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "and",
      "value": null,
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": null,
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#",
      "children": [
        {
          "category": "assertion",
          "type": "type-strict",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": null,
          "schemaResource": "",
          "dynamic": true,
          "report": true,
          "absoluteKeywordLocation": "#",
          "value": {
            "category": "value",
            "type": "type",
            "value": "string"
          }
        },
        {
          "category": "assertion",
          "type": "type-strict",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": null,
          "schemaResource": "",
          "dynamic": true,
          "report": true,
          "absoluteKeywordLocation": "#",
          "value": {
            "category": "value",
            "type": "type",
            "value": "array"
          }
        }
      ]
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, regex_basic) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{SchemaCompilerAssertionRegex{
      Pointer{}, std::nullopt, "#", "", true, true,
      SchemaCompilerValueRegex{std::regex{"^a", std::regex::ECMAScript},
                               "^a"}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "regex",
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": null,
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#",
      "value": {
        "category": "value",
        "type": "regex",
        "value": "^a"
      }
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}
