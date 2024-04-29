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
                                     SchemaCompilerValueString{"foo"},
                                     {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "defines",
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
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
      SchemaCompilerValueString{"foo"},
      {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "defines",
      "relativeSchemaLocation": "/foo/bar",
      "relativeInstanceLocation": "",
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
                                     SchemaCompilerValueString{"xxx"},
                                     {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionDefines{{SchemaCompilerTargetType::Instance, {}},
                                     Pointer{},
                                     Pointer{},
                                     "#",
                                     SchemaCompilerValueString{"baz"},
                                     condition}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "defines",
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
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
                                  SchemaCompilerValueNone{},
                                  {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "fail",
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
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
  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "type",
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
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
                              {},
                              {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "or",
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "absoluteKeywordLocation": "#",
      "children": [],
      "condition": []
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, or_single_child) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{{SchemaCompilerTargetType::Instance, {}},
                              Pointer{},
                              Pointer{},
                              "#",
                              children,
                              {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "or",
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "absoluteKeywordLocation": "#",
      "children": [
        {
          "category": "assertion",
          "type": "type",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
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
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}},
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Array},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{{SchemaCompilerTargetType::Instance, {}},
                              Pointer{},
                              Pointer{},
                              "#",
                              children,
                              {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "or",
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "absoluteKeywordLocation": "#",
      "children": [
        {
          "category": "assertion",
          "type": "type",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
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
          "type": "type",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
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

  const SchemaCompilerTemplate condition{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{{SchemaCompilerTargetType::Instance, {}},
                              Pointer{},
                              Pointer{},
                              "#",
                              {},
                              condition}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "or",
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "absoluteKeywordLocation": "#",
      "children": [],
      "condition": [
        {
          "category": "assertion",
          "type": "type",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
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
                               {},
                               {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "and",
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "absoluteKeywordLocation": "#",
      "children": [],
      "condition": []
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, and_single_child) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{{SchemaCompilerTargetType::Instance, {}},
                               Pointer{},
                               Pointer{},
                               "#",
                               children,
                               {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "and",
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "absoluteKeywordLocation": "#",
      "children": [
        {
          "category": "assertion",
          "type": "type",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
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
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}},
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Array},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{{SchemaCompilerTargetType::Instance, {}},
                               Pointer{},
                               Pointer{},
                               "#",
                               children,
                               {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "and",
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "absoluteKeywordLocation": "#",
      "children": [
        {
          "category": "assertion",
          "type": "type",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
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
          "type": "type",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
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

  const SchemaCompilerTemplate condition{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{{SchemaCompilerTargetType::Instance, {}},
                               Pointer{},
                               Pointer{},
                               "#",
                               {},
                               condition}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "and",
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
      "absoluteKeywordLocation": "#",
      "children": [],
      "condition": [
        {
          "category": "assertion",
          "type": "type",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
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
      JSON{5},
      {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "annotation",
      "type": "public",
      "relativeSchemaLocation": "/test",
      "relativeInstanceLocation": "",
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

TEST(JSONSchema_compile_json, private_annotation_without_condition) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate steps{SchemaCompilerAnnotationPrivate{
      {SchemaCompilerTargetType::Instance, {"foo"}},
      Pointer{"test"},
      Pointer{},
      "#/test",
      JSON{5},
      {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "annotation",
      "type": "private",
      "relativeSchemaLocation": "/test",
      "relativeInstanceLocation": "",
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

  const SchemaCompilerTemplate condition{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Object},
                                  {}}};

  const SchemaCompilerTemplate steps{SchemaCompilerAnnotationPublic{
      {SchemaCompilerTargetType::Instance, {"foo"}},
      Pointer{"test"},
      Pointer{},
      "#/test",
      JSON{5},
      condition}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "annotation",
      "type": "public",
      "relativeSchemaLocation": "/test",
      "relativeInstanceLocation": "",
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
          "type": "type",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
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

TEST(JSONSchema_compile_json, private_annotation_with_condition) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate condition{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Object},
                                  {}}};

  const SchemaCompilerTemplate steps{SchemaCompilerAnnotationPrivate{
      {SchemaCompilerTargetType::Instance, {"foo"}},
      Pointer{"test"},
      Pointer{},
      "#/test",
      JSON{5},
      condition}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "annotation",
      "type": "private",
      "relativeSchemaLocation": "/test",
      "relativeInstanceLocation": "",
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
          "type": "type",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
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

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}}};

  const SchemaCompilerTemplate condition{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Object},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{SchemaCompilerTargetType::Instance, {}},
                                   Pointer{"loop"},
                                   Pointer{},
                                   "#/loop",
                                   children,
                                   condition}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "loop",
      "type": "properties",
      "relativeSchemaLocation": "/loop",
      "relativeInstanceLocation": "",
      "absoluteKeywordLocation": "#/loop",
      "target": {
        "category": "target",
        "type": "instance",
        "location": ""
      },
      "children": [
        {
          "category": "assertion",
          "type": "type",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
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
          "type": "type",
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
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
      SchemaCompilerValueRegex{std::regex{"^a", std::regex::ECMAScript}, "^a"},
      {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "regex",
      "relativeSchemaLocation": "",
      "relativeInstanceLocation": "",
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

TEST(JSONSchema_compile_json, loop_properties_annotation_instance_property) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAnnotationPublic{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      SchemaCompilerTarget{SchemaCompilerTargetType::InstanceBasename, {}},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{SchemaCompilerTargetType::Instance, {}},
                                   Pointer{"loop"},
                                   Pointer{},
                                   "#/loop",
                                   children,
                                   {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "loop",
      "type": "properties",
      "relativeSchemaLocation": "/loop",
      "relativeInstanceLocation": "",
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
