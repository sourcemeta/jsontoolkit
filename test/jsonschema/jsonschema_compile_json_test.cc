#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_compile_json, defines_basic_root) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionDefines{Pointer{},
                                     Pointer{},
                                     "#",
                                     "",
                                     true,
                                     true,
                                     SchemaCompilerValueString{"foo"},
                                     {}}};

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
      "value": {
        "category": "value",
        "type": "string",
        "value": "foo"
      },
      "condition": []
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, defines_basic_nested) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionDefines{Pointer{"foo", "bar"},
                                     Pointer{},
                                     "#/foo/bar",
                                     "",
                                     true,
                                     true,
                                     SchemaCompilerValueString{"foo"},
                                     {}}};

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
      "value": {
        "category": "value",
        "type": "string",
        "value": "foo"
      },
      "condition": []
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, defines_with_condition) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate condition{
      SchemaCompilerAssertionDefines{Pointer{},
                                     Pointer{},
                                     "#",
                                     "",
                                     true,
                                     true,
                                     SchemaCompilerValueString{"xxx"},
                                     {}}};

  const SchemaCompilerTemplate steps{SchemaCompilerAssertionDefines{
      Pointer{}, Pointer{}, "#", "", true, true,
      SchemaCompilerValueString{"baz"}, condition}};

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
      "value": {
        "category": "value",
        "type": "string",
        "value": "baz"
      },
      "condition": [
        {
          "category": "assertion",
          "condition": [],
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
          "schemaResource": "",
          "dynamic": true,
          "report": true,
          "absoluteKeywordLocation": "#",
          "type": "defines",
          "value": {
            "category": "value",
            "type": "string",
            "value": "xxx"
          }
        }
      ]
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, fail_basic_root) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionFail{Pointer{},
                                  Pointer{},
                                  "#",
                                  "",
                                  true,
                                  true,
                                  SchemaCompilerValueNone{},
                                  {}}};

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
      "value": null,
      "condition": []
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, type_basic_root) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{SchemaCompilerAssertionTypeStrict{
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};

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
      "value": {
        "category": "value",
        "type": "type",
        "value": "string"
      },
      "condition": []
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, or_empty) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{SchemaCompilerLogicalOr{
      Pointer{}, Pointer{}, "#", "", true, true, false, {}, {}}};

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
      "children": [],
      "condition": []
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, or_single_child) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};

  const SchemaCompilerTemplate steps{SchemaCompilerLogicalOr{
      Pointer{}, Pointer{}, "#", "", true, true, false, children, {}}};

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
          "value": {
            "category": "value",
            "type": "type",
            "value": "string"
          },
          "condition": []
        }
      ],
      "condition": []
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, or_multiple_children) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionTypeStrict{
          Pointer{},
          Pointer{},
          "#",
          "",
          true,
          true,
          SchemaCompilerValueType{JSON::Type::String},
          {}},
      SchemaCompilerAssertionTypeStrict{
          Pointer{},
          Pointer{},
          "#",
          "",
          true,
          true,
          SchemaCompilerValueType{JSON::Type::Array},
          {}}};

  const SchemaCompilerTemplate steps{SchemaCompilerLogicalOr{
      Pointer{}, Pointer{}, "#", "", true, true, false, children, {}}};

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
          "value": {
            "category": "value",
            "type": "type",
            "value": "string"
          },
          "condition": []
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
          "value": {
            "category": "value",
            "type": "type",
            "value": "array"
          },
          "condition": []
        }
      ],
      "condition": []
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, or_empty_single_condition) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate condition{SchemaCompilerAssertionTypeStrict{
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};

  const SchemaCompilerTemplate steps{SchemaCompilerLogicalOr{
      Pointer{}, Pointer{}, "#", "", true, true, false, {}, condition}};

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
      "children": [],
      "condition": [
        {
          "category": "assertion",
          "type": "type-strict",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
          "schemaResource": "",
          "dynamic": true,
          "report": true,
          "absoluteKeywordLocation": "#",
          "value": {
            "category": "value",
            "type": "type",
            "value": "string"
          },
          "condition": []
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
                               {}}};

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
      "children": [],
      "condition": []
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, and_single_child) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{Pointer{},
                               Pointer{},
                               "#",
                               "",
                               true,
                               true,
                               SchemaCompilerValueNone{},
                               children,
                               {}}};

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
          "value": {
            "category": "value",
            "type": "type",
            "value": "string"
          },
          "condition": []
        }
      ],
      "condition": []
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, and_multiple_children) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionTypeStrict{
          Pointer{},
          Pointer{},
          "#",
          "",
          true,
          true,
          SchemaCompilerValueType{JSON::Type::String},
          {}},
      SchemaCompilerAssertionTypeStrict{
          Pointer{},
          Pointer{},
          "#",
          "",
          true,
          true,
          SchemaCompilerValueType{JSON::Type::Array},
          {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{Pointer{},
                               Pointer{},
                               "#",
                               "",
                               true,
                               true,
                               SchemaCompilerValueNone{},
                               children,
                               {}}};

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
          "value": {
            "category": "value",
            "type": "type",
            "value": "string"
          },
          "condition": []
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
          "value": {
            "category": "value",
            "type": "type",
            "value": "array"
          },
          "condition": []
        }
      ],
      "condition": []
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, and_empty_single_condition) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate condition{SchemaCompilerAssertionTypeStrict{
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{Pointer{},
                               Pointer{},
                               "#",
                               "",
                               true,
                               true,
                               SchemaCompilerValueNone{},
                               {},
                               condition}};

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
      "children": [],
      "condition": [
        {
          "category": "assertion",
          "type": "type-strict",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
          "schemaResource": "",
          "dynamic": true,
          "report": true,
          "absoluteKeywordLocation": "#",
          "value": {
            "category": "value",
            "type": "type",
            "value": "string"
          },
          "condition": []
        }
      ]
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, public_annotation_without_condition) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate steps{SchemaCompilerAnnotationEmit{
      Pointer{"test"}, Pointer{}, "#/test", "", true, true, JSON{5}, {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "annotation",
      "type": "emit",
      "relativeSchemaLocation": "/test",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#/test",
      "value": {
        "category": "value",
        "type": "json",
        "value": 5
      },
      "condition": []
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, public_annotation_with_condition) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate condition{SchemaCompilerAssertionTypeStrict{
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      true,
      SchemaCompilerValueType{JSON::Type::Object},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerAnnotationEmit{Pointer{"test"}, Pointer{}, "#/test", "",
                                   true, true, JSON{5}, condition}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "annotation",
      "type": "emit",
      "relativeSchemaLocation": "/test",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#/test",
      "value": {
        "category": "value",
        "type": "json",
        "value": 5
      },
      "condition": [
        {
          "category": "assertion",
          "type": "type-strict",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
          "schemaResource": "",
          "dynamic": true,
          "report": true,
          "absoluteKeywordLocation": "#",
          "value": {
            "category": "value",
            "type": "type",
            "value": "object"
          },
          "condition": []
        }
      ]
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, loop_properties_with_children_and_condition) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};

  const SchemaCompilerTemplate condition{SchemaCompilerAssertionTypeStrict{
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      true,
      SchemaCompilerValueType{JSON::Type::Object},
      {}}};

  const SchemaCompilerTemplate steps{SchemaCompilerLoopProperties{
      Pointer{"loop"}, Pointer{}, "#/loop", "", true, true,
      SchemaCompilerValueNone{}, children, condition}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "loop",
      "type": "properties",
      "value": null,
      "relativeSchemaLocation": "/loop",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "report": true,
      "absoluteKeywordLocation": "#/loop",
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
          "value": {
            "category": "value",
            "type": "type",
            "value": "string"
          },
          "condition": []
        }
      ],
      "condition": [
        {
          "category": "assertion",
          "type": "type-strict",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
          "schemaResource": "",
          "dynamic": true,
          "report": true,
          "absoluteKeywordLocation": "#",
          "value": {
            "category": "value",
            "type": "type",
            "value": "object"
          },
          "condition": []
        }
      ]
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, regex_basic) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{SchemaCompilerAssertionRegex{
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      true,
      SchemaCompilerValueRegex{std::regex{"^a", std::regex::ECMAScript}, "^a"},
      {}}};

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
      "value": {
        "category": "value",
        "type": "regex",
        "value": "^a"
      },
      "condition": []
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}
