#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_compile_json, defines_basic_root) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionDefines{Pointer{}, Pointer{}, "#", "", true, true,
                                     SchemaCompilerValueString{"foo"}, 0}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "defines",
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#",
      "evaluatePathDepth": 0,
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
      Pointer{"foo", "bar"}, Pointer{}, "#/foo/bar", "", true, true,
      SchemaCompilerValueString{"foo"}, 0}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "defines",
      "relativeSchemaLocation": "/foo/bar",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#/foo/bar",
      "evaluatePathDepth": 0,
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
      Pointer{}, Pointer{}, "#", "", true, true, SchemaCompilerValueNone{}, 0}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "fail",
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#",
      "evaluatePathDepth": 0,
      "value": null
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, type_basic_root) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{SchemaCompilerAssertionTypeStrict{
      Pointer{}, Pointer{}, "#", "", true, true,
      SchemaCompilerValueType{JSON::Type::String}, 0}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "type-strict",
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#",
      "evaluatePathDepth": 0,
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
      Pointer{}, Pointer{}, "#", "", true, true, false, {}, 0}};

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
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#",
      "evaluatePathDepth": 0,
      "children": []
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, or_single_child) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{}, Pointer{}, "#", "", true, true,
      SchemaCompilerValueType{JSON::Type::String}, 0}};

  const SchemaCompilerTemplate steps{SchemaCompilerLogicalOr{
      Pointer{}, Pointer{}, "#", "", true, true, false, children, 0}};

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
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#",
      "evaluatePathDepth": 0,
      "children": [
        {
          "category": "assertion",
          "type": "type-strict",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
          "schemaResource": "",
          "dynamic": true,
          "report": true,
          "absoluteKeywordLocation": "#",
          "evaluatePathDepth": 0,
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
          Pointer{}, Pointer{}, "#", "", true, true,
          SchemaCompilerValueType{JSON::Type::String}, 0},
      SchemaCompilerAssertionTypeStrict{
          Pointer{}, Pointer{}, "#", "", true, true,
          SchemaCompilerValueType{JSON::Type::Array}, 0}};

  const SchemaCompilerTemplate steps{SchemaCompilerLogicalOr{
      Pointer{}, Pointer{}, "#", "", true, true, false, children, 0}};

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
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#",
      "evaluatePathDepth": 0,
      "children": [
        {
          "category": "assertion",
          "type": "type-strict",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
          "schemaResource": "",
          "dynamic": true,
          "report": true,
          "absoluteKeywordLocation": "#",
          "evaluatePathDepth": 0,
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
          "relativeInstanceLocation": "",
          "schemaResource": "",
          "dynamic": true,
          "report": true,
          "absoluteKeywordLocation": "#",
          "evaluatePathDepth": 0,
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
                               Pointer{},
                               "#",
                               "",
                               true,
                               true,
                               SchemaCompilerValueNone{},
                               {},
                               0}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "and",
      "value": null,
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#",
      "evaluatePathDepth": 0,
      "children": []
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, and_single_child) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{}, Pointer{}, "#", "", true, true,
      SchemaCompilerValueType{JSON::Type::String}, 0}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{Pointer{}, Pointer{}, "#", "", true, true,
                               SchemaCompilerValueNone{}, children, 0}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "and",
      "value": null,
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#",
      "evaluatePathDepth": 0,
      "children": [
        {
          "category": "assertion",
          "type": "type-strict",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
          "schemaResource": "",
          "dynamic": true,
          "report": true,
          "absoluteKeywordLocation": "#",
          "evaluatePathDepth": 0,
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
          Pointer{}, Pointer{}, "#", "", true, true,
          SchemaCompilerValueType{JSON::Type::String}, 0},
      SchemaCompilerAssertionTypeStrict{
          Pointer{}, Pointer{}, "#", "", true, true,
          SchemaCompilerValueType{JSON::Type::Array}, 0}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{Pointer{}, Pointer{}, "#", "", true, true,
                               SchemaCompilerValueNone{}, children, 0}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "and",
      "value": null,
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#",
      "evaluatePathDepth": 0,
      "children": [
        {
          "category": "assertion",
          "type": "type-strict",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
          "schemaResource": "",
          "dynamic": true,
          "report": true,
          "absoluteKeywordLocation": "#",
          "evaluatePathDepth": 0,
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
          "relativeInstanceLocation": "",
          "schemaResource": "",
          "dynamic": true,
          "report": true,
          "absoluteKeywordLocation": "#",
          "evaluatePathDepth": 0,
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
      Pointer{}, Pointer{}, "#", "", true, true,
      SchemaCompilerValueRegex{std::regex{"^a", std::regex::ECMAScript}, "^a"},
      0}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "regex",
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#",
      "evaluatePathDepth": 0,
      "value": {
        "category": "value",
        "type": "regex",
        "value": "^a"
      }
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}
