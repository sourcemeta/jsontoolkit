#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_compile_json, defines_basic_root) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionDefines{{SchemaCompilerTargetType::Instance, {}},
                                     Pointer{},
                                     "#",
                                     SchemaCompilerValueString{"foo"},
                                     {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "defines",
      "keywordLocation": "",
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
      "#/foo/bar",
      SchemaCompilerValueString{"foo"},
      {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "defines",
      "keywordLocation": "/foo/bar",
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
                                     "#",
                                     SchemaCompilerValueString{"xxx"},
                                     {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionDefines{{SchemaCompilerTargetType::Instance, {}},
                                     Pointer{},
                                     "#",
                                     SchemaCompilerValueString{"baz"},
                                     condition}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "defines",
      "keywordLocation": "",
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
          "keywordLocation": "",
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
                                  "#",
                                  SchemaCompilerValueNone{},
                                  {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "fail",
      "keywordLocation": "",
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
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "type",
      "keywordLocation": "",
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
      SchemaCompilerLogicalOr{Pointer{}, "#", {}, {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "or",
      "keywordLocation": "",
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
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{Pointer{}, "#", children, {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "or",
      "keywordLocation": "",
      "absoluteKeywordLocation": "#",
      "children": [
        {
          "category": "assertion",
          "type": "type",
          "keywordLocation": "",
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
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}},
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Array},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{Pointer{}, "#", children, {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "or",
      "keywordLocation": "",
      "absoluteKeywordLocation": "#",
      "children": [
        {
          "category": "assertion",
          "type": "type",
          "keywordLocation": "",
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
          "keywordLocation": "",
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
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{Pointer{}, "#", {}, condition}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "or",
      "keywordLocation": "",
      "absoluteKeywordLocation": "#",
      "children": [],
      "condition": [
        {
          "category": "assertion",
          "type": "type",
          "keywordLocation": "",
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
      SchemaCompilerLogicalAnd{Pointer{}, "#", {}, {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "and",
      "keywordLocation": "",
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
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{Pointer{}, "#", children, {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "and",
      "keywordLocation": "",
      "absoluteKeywordLocation": "#",
      "children": [
        {
          "category": "assertion",
          "type": "type",
          "keywordLocation": "",
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
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}},
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Array},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{Pointer{}, "#", children, {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "and",
      "keywordLocation": "",
      "absoluteKeywordLocation": "#",
      "children": [
        {
          "category": "assertion",
          "type": "type",
          "keywordLocation": "",
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
          "keywordLocation": "",
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
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{Pointer{}, "#", {}, condition}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "and",
      "keywordLocation": "",
      "absoluteKeywordLocation": "#",
      "children": [],
      "condition": [
        {
          "category": "assertion",
          "type": "type",
          "keywordLocation": "",
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
      "#/test",
      JSON{5},
      {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "annotation",
      "type": "public",
      "keywordLocation": "/test",
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
      "#/test",
      JSON{5},
      {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "annotation",
      "type": "private",
      "keywordLocation": "/test",
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
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Object},
                                  {}}};

  const SchemaCompilerTemplate steps{SchemaCompilerAnnotationPublic{
      {SchemaCompilerTargetType::Instance, {"foo"}},
      Pointer{"test"},
      "#/test",
      JSON{5},
      condition}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "annotation",
      "type": "public",
      "keywordLocation": "/test",
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
          "keywordLocation": "",
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
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Object},
                                  {}}};

  const SchemaCompilerTemplate steps{SchemaCompilerAnnotationPrivate{
      {SchemaCompilerTargetType::Instance, {"foo"}},
      Pointer{"test"},
      "#/test",
      JSON{5},
      condition}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "annotation",
      "type": "private",
      "keywordLocation": "/test",
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
          "keywordLocation": "",
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

TEST(JSONSchema_compile_json, target_instance_template) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{SchemaCompilerAssertionDefines{
      {SchemaCompilerTargetType::TemplateInstance, {"xxx"}},
      Pointer{},
      "#",
      SchemaCompilerValueString{"foo"},
      {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "defines",
      "keywordLocation": "",
      "absoluteKeywordLocation": "#",
      "target": {
        "category": "target",
        "location": "/xxx",
        "type": "template-instance"
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

TEST(JSONSchema_compile_json, loop_properties_with_children_and_condition) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionType{
      {SchemaCompilerTargetType::TemplateInstance, {"loop"}},
      Pointer{},
      "#",
      SchemaCompilerValueType{JSON::Type::String},
      {}}};

  const SchemaCompilerTemplate condition{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Object},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{SchemaCompilerTargetType::Instance, {}},
                                   Pointer{"loop"},
                                   "#/loop",
                                   children,
                                   condition}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "loop",
      "type": "properties",
      "keywordLocation": "/loop",
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
          "keywordLocation": "",
          "absoluteKeywordLocation": "#",
          "target": {
            "category": "target",
            "location": "/loop",
            "type": "template-instance"
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
          "keywordLocation": "",
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
      "#",
      SchemaCompilerValueRegex{std::regex{"^a", std::regex::ECMAScript}, "^a"},
      {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "regex",
      "keywordLocation": "",
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
