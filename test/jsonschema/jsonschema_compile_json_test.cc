#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_compile_json, defines_basic_root) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionDefines{{SchemaCompilerTargetType::Instance, {}},
                                     Pointer{},
                                     Pointer{},
                                     "#",
                                     "",
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
      "absoluteKeywordLocation": "#",
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
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
  const SchemaCompilerTemplate steps{SchemaCompilerAssertionDefines{
      {SchemaCompilerTargetType::Instance, {"xxx"}},
      Pointer{"foo", "bar"},
      Pointer{},
      "#/foo/bar",
      "",
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
      "absoluteKeywordLocation": "#/foo/bar",
      "target": {
        "category": "target",
        "location": "/xxx",
        "type": "instance"
      },
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
      SchemaCompilerAssertionDefines{{SchemaCompilerTargetType::Instance, {}},
                                     Pointer{},
                                     Pointer{},
                                     "#",
                                     "",
                                     true,
                                     SchemaCompilerValueString{"xxx"},
                                     {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionDefines{{SchemaCompilerTargetType::Instance, {}},
                                     Pointer{},
                                     Pointer{},
                                     "#",
                                     "",
                                     true,
                                     SchemaCompilerValueString{"baz"},
                                     condition}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "defines",
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "absoluteKeywordLocation": "#",
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
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
          "absoluteKeywordLocation": "#",
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
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
      SchemaCompilerAssertionFail{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  "",
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
      "absoluteKeywordLocation": "#",
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "value": null,
      "condition": []
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, type_basic_root) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      "",
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
      "absoluteKeywordLocation": "#",
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
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
  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{{SchemaCompilerTargetType::Instance, {}},
                              Pointer{},
                              Pointer{},
                              "#",
                              "",
                              true,
                              false,
                              {},
                              {}}};

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
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
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
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{{SchemaCompilerTargetType::Instance, {}},
                              Pointer{},
                              Pointer{},
                              "#",
                              "",
                              true,
                              false,
                              children,
                              {}}};

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
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "absoluteKeywordLocation": "#",
      "children": [
        {
          "category": "assertion",
          "type": "type-strict",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
          "schemaResource": "",
          "dynamic": true,
          "absoluteKeywordLocation": "#",
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
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
          {SchemaCompilerTargetType::Instance, {}},
          Pointer{},
          Pointer{},
          "#",
          "",
          true,
          SchemaCompilerValueType{JSON::Type::String},
          {}},
      SchemaCompilerAssertionTypeStrict{
          {SchemaCompilerTargetType::Instance, {}},
          Pointer{},
          Pointer{},
          "#",
          "",
          true,
          SchemaCompilerValueType{JSON::Type::Array},
          {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{{SchemaCompilerTargetType::Instance, {}},
                              Pointer{},
                              Pointer{},
                              "#",
                              "",
                              true,
                              false,
                              children,
                              {}}};

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
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "absoluteKeywordLocation": "#",
      "children": [
        {
          "category": "assertion",
          "type": "type-strict",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
          "schemaResource": "",
          "dynamic": true,
          "absoluteKeywordLocation": "#",
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
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
          "absoluteKeywordLocation": "#",
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
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
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{{SchemaCompilerTargetType::Instance, {}},
                              Pointer{},
                              Pointer{},
                              "#",
                              "",
                              true,
                              false,
                              {},
                              condition}};

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
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
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
          "absoluteKeywordLocation": "#",
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
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
      SchemaCompilerLogicalAnd{{SchemaCompilerTargetType::Instance, {}},
                               Pointer{},
                               Pointer{},
                               "#",
                               "",
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
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
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
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{{SchemaCompilerTargetType::Instance, {}},
                               Pointer{},
                               Pointer{},
                               "#",
                               "",
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
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "absoluteKeywordLocation": "#",
      "children": [
        {
          "category": "assertion",
          "type": "type-strict",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
          "schemaResource": "",
          "dynamic": true,
          "absoluteKeywordLocation": "#",
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
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
          {SchemaCompilerTargetType::Instance, {}},
          Pointer{},
          Pointer{},
          "#",
          "",
          true,
          SchemaCompilerValueType{JSON::Type::String},
          {}},
      SchemaCompilerAssertionTypeStrict{
          {SchemaCompilerTargetType::Instance, {}},
          Pointer{},
          Pointer{},
          "#",
          "",
          true,
          SchemaCompilerValueType{JSON::Type::Array},
          {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{{SchemaCompilerTargetType::Instance, {}},
                               Pointer{},
                               Pointer{},
                               "#",
                               "",
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
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "absoluteKeywordLocation": "#",
      "children": [
        {
          "category": "assertion",
          "type": "type-strict",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
          "schemaResource": "",
          "dynamic": true,
          "absoluteKeywordLocation": "#",
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
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
          "absoluteKeywordLocation": "#",
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
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
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{{SchemaCompilerTargetType::Instance, {}},
                               Pointer{},
                               Pointer{},
                               "#",
                               "",
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
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
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
          "absoluteKeywordLocation": "#",
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
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

  const SchemaCompilerTemplate steps{SchemaCompilerAnnotationPublic{
      {SchemaCompilerTargetType::Instance, {"foo"}},
      Pointer{"test"},
      Pointer{},
      "#/test",
      "",
      true,
      JSON{5},
      {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "annotation",
      "type": "public",
      "relativeSchemaLocation": "/test",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "absoluteKeywordLocation": "#/test",
      "target": {
        "category": "target",
        "location": "/foo",
        "type": "instance"
      },
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
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::Object},
      {}}};

  const SchemaCompilerTemplate steps{SchemaCompilerAnnotationPublic{
      {SchemaCompilerTargetType::Instance, {"foo"}},
      Pointer{"test"},
      Pointer{},
      "#/test",
      "",
      true,
      JSON{5},
      condition}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "annotation",
      "type": "public",
      "relativeSchemaLocation": "/test",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "absoluteKeywordLocation": "#/test",
      "target": {
        "category": "target",
        "location": "/foo",
        "type": "instance"
      },
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
          "absoluteKeywordLocation": "#",
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
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
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};

  const SchemaCompilerTemplate condition{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::Object},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{SchemaCompilerTargetType::Instance, {}},
                                   Pointer{"loop"},
                                   Pointer{},
                                   "#/loop",
                                   "",
                                   true,
                                   true,
                                   children,
                                   condition}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "loop",
      "type": "properties",
      "value": {
        "category": "value",
        "type": "boolean",
        "value": true
      },
      "relativeSchemaLocation": "/loop",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "absoluteKeywordLocation": "#/loop",
      "target": {
        "category": "target",
        "type": "instance",
        "location": ""
      },
      "children": [
        {
          "category": "assertion",
          "type": "type-strict",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
          "schemaResource": "",
          "dynamic": true,
          "absoluteKeywordLocation": "#",
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
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
          "absoluteKeywordLocation": "#",
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
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
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      "",
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
      "absoluteKeywordLocation": "#",
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
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

TEST(JSONSchema_compile_json, loop_properties_annotation_instance_basename) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAnnotationPublic{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      SchemaCompilerTarget{SchemaCompilerTargetType::InstanceBasename, {}},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{SchemaCompilerTargetType::Instance, {}},
                                   Pointer{"loop"},
                                   Pointer{},
                                   "#/loop",
                                   "",
                                   true,
                                   true,
                                   children,
                                   {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "loop",
      "type": "properties",
      "value": {
        "category": "value",
        "type": "boolean",
        "value": true
      },
      "relativeSchemaLocation": "/loop",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "absoluteKeywordLocation": "#/loop",
      "target": {
        "category": "target",
        "type": "instance",
        "location": ""
      },
      "children": [
        {
          "category": "annotation",
          "type": "public",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
          "schemaResource": "",
          "dynamic": true,
          "absoluteKeywordLocation": "#",
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
          "value": {
            "category": "target",
            "type": "instance-basename",
            "location": ""
          },
          "condition": []
        }
      ],
      "condition": []
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, loop_properties_annotation_instance_parent) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAnnotationPublic{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      SchemaCompilerTarget{SchemaCompilerTargetType::InstanceParent, {}},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{SchemaCompilerTargetType::Instance, {}},
                                   Pointer{"loop"},
                                   Pointer{},
                                   "#/loop",
                                   "",
                                   true,
                                   true,
                                   children,
                                   {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "loop",
      "type": "properties",
      "value": {
        "category": "value",
        "type": "boolean",
        "value": true
      },
      "relativeSchemaLocation": "/loop",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "dynamic": true,
      "absoluteKeywordLocation": "#/loop",
      "target": {
        "category": "target",
        "type": "instance",
        "location": ""
      },
      "children": [
        {
          "category": "annotation",
          "type": "public",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
          "schemaResource": "",
          "dynamic": true,
          "absoluteKeywordLocation": "#",
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
          "value": {
            "category": "target",
            "type": "instance-parent",
            "location": ""
          },
          "condition": []
        }
      ],
      "condition": []
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}
