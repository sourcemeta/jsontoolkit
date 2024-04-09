#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_compile_json, defines_basic_root) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionDefines{SchemaCompilerTargetInstance{},
                                     Pointer{},
                                     SchemaCompilerValueString{"foo"},
                                     {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "defines",
      "schemaLocation": "",
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
  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionDefines{SchemaCompilerTargetInstance{"xxx"},
                                     Pointer{"foo", "bar"},
                                     SchemaCompilerValueString{"foo"},
                                     {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "defines",
      "schemaLocation": "/foo/bar",
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
      SchemaCompilerAssertionDefines{SchemaCompilerTargetInstance{},
                                     Pointer{},
                                     SchemaCompilerValueString{"xxx"},
                                     {}}};

  const SchemaCompilerTemplate steps{SchemaCompilerAssertionDefines{
      SchemaCompilerTargetInstance{}, Pointer{},
      SchemaCompilerValueString{"baz"}, condition}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "defines",
      "schemaLocation": "",
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
          "schemaLocation": "",
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
      SchemaCompilerAssertionFail{SchemaCompilerTargetInstance{},
                                  Pointer{},
                                  SchemaCompilerValueNone{},
                                  {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "fail",
      "schemaLocation": "",
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
      SchemaCompilerAssertionType{SchemaCompilerTargetInstance{},
                                  Pointer{},
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "assertion",
      "type": "type",
      "schemaLocation": "",
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
      SchemaCompilerLogicalOr{Pointer{}, {}, {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "or",
      "schemaLocation": "",
      "children": [],
      "condition": []
    }
  ])EOF")};

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_compile_json, or_single_child) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionType{SchemaCompilerTargetInstance{},
                                  Pointer{},
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{Pointer{}, {}, children}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "or",
      "schemaLocation": "",
      "children": [
        {
          "category": "assertion",
          "type": "type",
          "schemaLocation": "",
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
      SchemaCompilerAssertionType{SchemaCompilerTargetInstance{},
                                  Pointer{},
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}},
      SchemaCompilerAssertionType{SchemaCompilerTargetInstance{},
                                  Pointer{},
                                  SchemaCompilerValueType{JSON::Type::Array},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{Pointer{}, {}, children}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "or",
      "schemaLocation": "",
      "children": [
        {
          "category": "assertion",
          "type": "type",
          "schemaLocation": "",
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
          "schemaLocation": "",
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
      SchemaCompilerAssertionType{SchemaCompilerTargetInstance{},
                                  Pointer{},
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{Pointer{}, condition, {}}};

  const JSON result{to_json(steps)};
  const JSON expected{parse(R"EOF([
    {
      "category": "logical",
      "type": "or",
      "schemaLocation": "",
      "children": [],
      "condition": [
        {
          "category": "assertion",
          "type": "type",
          "schemaLocation": "",
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
