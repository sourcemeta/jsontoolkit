#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_compile_template_draft4, allof_type) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "allOf": [ { "type": "integer" }, { "type": "number" } ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON compiled_schema_json{
      sourcemeta::jsontoolkit::to_json(compiled_schema)};

  const sourcemeta::jsontoolkit::JSON expected{
      sourcemeta::jsontoolkit::parse(R"EOF([
    {
      "category": "assertion",
      "type": "type",
      "condition": [],
      "keywordLocation": "/allOf/0/type",
      "absoluteKeywordLocation": "#/allOf/0/type",
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "value": {
        "category": "value",
        "type": "type",
        "value": "integer"
      }
    },
    {
      "category": "logical",
      "type": "or",
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "condition": [],
      "keywordLocation": "/allOf/1/type",
      "absoluteKeywordLocation": "#/allOf/1/type",
      "children": [
        {
          "category": "assertion",
          "type": "type",
          "condition": [],
          "keywordLocation": "/allOf/1/type",
          "absoluteKeywordLocation": "#/allOf/1/type",
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
          "value": {
            "category": "value",
            "type": "type",
            "value": "real"
          }
        },
        {
          "category": "assertion",
          "condition": [],
          "keywordLocation": "/allOf/1/type",
          "absoluteKeywordLocation": "#/allOf/1/type",
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
          "type": "type",
          "value": {
            "category": "value",
            "type": "type",
            "value": "integer"
          }
        }
      ]
    }
  ])EOF")};

  EXPECT_EQ(compiled_schema_json, expected);
}

TEST(JSONSchema_compile_template_draft4, allof_type_with_id) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://www.example.com",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "allOf": [
      { "id": "nested", "type": "integer" }
    ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON compiled_schema_json{
      sourcemeta::jsontoolkit::to_json(compiled_schema)};

  const sourcemeta::jsontoolkit::JSON expected{
      sourcemeta::jsontoolkit::parse(R"EOF([
    {
      "category": "assertion",
      "type": "type",
      "condition": [],
      "keywordLocation": "/allOf/0/type",
      "absoluteKeywordLocation": "https://www.example.com/nested#/type",
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "value": {
        "category": "value",
        "type": "type",
        "value": "integer"
      }
    }
  ])EOF")};

  EXPECT_EQ(compiled_schema_json, expected);
}

TEST(JSONSchema_compile_template_draft4, properties_empty) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "properties": {}
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON compiled_schema_json{
      sourcemeta::jsontoolkit::to_json(compiled_schema)};

  const sourcemeta::jsontoolkit::JSON expected{
      sourcemeta::jsontoolkit::parse("[]")};

  EXPECT_EQ(compiled_schema_json, expected);
}

TEST(JSONSchema_compile_template_draft4, properties_single) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "properties": {
      "foo": { "type": "string" }
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON compiled_schema_json{
      sourcemeta::jsontoolkit::to_json(compiled_schema)};

  const sourcemeta::jsontoolkit::JSON expected{
      sourcemeta::jsontoolkit::parse(R"EOF([
    {
      "category": "logical",
      "type": "and",
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "keywordLocation": "/properties",
      "absoluteKeywordLocation": "#/properties",
      "condition": [
        {
          "category": "assertion",
          "type": "type",
          "condition": [],
          "keywordLocation": "/properties",
          "absoluteKeywordLocation": "#/properties",
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
          "value": {
            "category": "value",
            "type": "type",
            "value": "object"
          }
        }
      ],
      "children": [
        {
          "category": "logical",
          "type": "and",
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
          "keywordLocation": "/properties",
          "absoluteKeywordLocation": "#/properties",
          "children": [
            {
              "category": "assertion",
              "type": "type",
              "condition": [],
              "keywordLocation": "/properties/foo/type",
              "absoluteKeywordLocation": "#/properties/foo/type",
              "target": {
                "category": "target",
                "location": "/foo",
                "type": "instance"
              },
              "value": {
                "category": "value",
                "type": "type",
                "value": "string"
              }
            },
            {
              "category": "annotation",
              "type": "private",
              "condition": [],
              "keywordLocation": "/properties",
              "absoluteKeywordLocation": "#/properties",
              "target": {
                "category": "target",
                "location": "",
                "type": "instance"
              },
              "value": {
                "category": "value",
                "type": "json",
                "value": "foo"
              }
            }
          ],
          "condition": [
            {
              "category": "assertion",
              "type": "defines",
              "condition": [],
              "keywordLocation": "/properties",
              "absoluteKeywordLocation": "#/properties",
              "target": {
                "category": "target",
                "location": "",
                "type": "instance"
              },
              "value": {
                "category": "value",
                "type": "string",
                "value": "foo"
              }
            }
          ]
        }
      ]
    }
  ])EOF")};

  EXPECT_EQ(compiled_schema_json, expected);
}

TEST(JSONSchema_compile_template_draft4, properties_multi) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "properties": {
      "foo": { "type": "string" },
      "bar": { "type": "integer" }
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON compiled_schema_json{
      sourcemeta::jsontoolkit::to_json(compiled_schema)};

  const sourcemeta::jsontoolkit::JSON expected{
      sourcemeta::jsontoolkit::parse(R"EOF([
    {
      "category": "logical",
      "type": "and",
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "keywordLocation": "/properties",
      "absoluteKeywordLocation": "#/properties",
      "condition": [
        {
          "category": "assertion",
          "type": "type",
          "condition": [],
          "keywordLocation": "/properties",
          "absoluteKeywordLocation": "#/properties",
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
          "value": {
            "category": "value",
            "type": "type",
            "value": "object"
          }
        }
      ],
      "children": [
        {
          "category": "logical",
          "type": "and",
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
          "keywordLocation": "/properties",
          "absoluteKeywordLocation": "#/properties",
          "children": [
            {
              "category": "assertion",
              "type": "type",
              "condition": [],
              "keywordLocation": "/properties/bar/type",
              "absoluteKeywordLocation": "#/properties/bar/type",
              "target": {
                "category": "target",
                "location": "/bar",
                "type": "instance"
              },
              "value": {
                "category": "value",
                "type": "type",
                "value": "integer"
              }
            },
            {
              "category": "annotation",
              "type": "private",
              "condition": [],
              "keywordLocation": "/properties",
              "absoluteKeywordLocation": "#/properties",
              "target": {
                "category": "target",
                "location": "",
                "type": "instance"
              },
              "value": {
                "category": "value",
                "type": "json",
                "value": "bar"
              }
            }
          ],
          "condition": [
            {
              "category": "assertion",
              "type": "defines",
              "condition": [],
              "keywordLocation": "/properties",
              "absoluteKeywordLocation": "#/properties",
              "target": {
                "category": "target",
                "location": "",
                "type": "instance"
              },
              "value": {
                "category": "value",
                "type": "string",
                "value": "bar"
              }
            }
          ]
        },
        {
          "category": "logical",
          "type": "and",
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
          "keywordLocation": "/properties",
          "absoluteKeywordLocation": "#/properties",
          "children": [
            {
              "category": "assertion",
              "type": "type",
              "condition": [],
              "keywordLocation": "/properties/foo/type",
              "absoluteKeywordLocation": "#/properties/foo/type",
              "target": {
                "category": "target",
                "location": "/foo",
                "type": "instance"
              },
              "value": {
                "category": "value",
                "type": "type",
                "value": "string"
              }
            },
            {
              "category": "annotation",
              "type": "private",
              "condition": [],
              "keywordLocation": "/properties",
              "absoluteKeywordLocation": "#/properties",
              "target": {
                "category": "target",
                "location": "",
                "type": "instance"
              },
              "value": {
                "category": "value",
                "type": "json",
                "value": "foo"
              }
            }
          ],
          "condition": [
            {
              "category": "assertion",
              "type": "defines",
              "condition": [],
              "keywordLocation": "/properties",
              "absoluteKeywordLocation": "#/properties",
              "target": {
                "category": "target",
                "location": "",
                "type": "instance"
              },
              "value": {
                "category": "value",
                "type": "string",
                "value": "foo"
              }
            }
          ]
        }
      ]
    }
  ])EOF")};

  EXPECT_EQ(compiled_schema_json, expected);
}
