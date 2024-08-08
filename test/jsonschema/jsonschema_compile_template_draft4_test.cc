#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

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
    "id": "https://example.com/schema",
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
      "value": null,
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "relativeSchemaLocation": "/properties",
      "relativeInstanceLocation": "",
      "schemaResource": "https://example.com/schema",
      "absoluteKeywordLocation": "https://example.com/schema#/properties",
      "condition": [],
      "children": [
        {
          "category": "internal",
          "type": "container",
          "value": null,
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
          "schemaResource": "https://example.com/schema",
          "absoluteKeywordLocation": "https://example.com/schema#/properties",
          "children": [
            {
              "category": "assertion",
              "type": "type-strict",
              "condition": [],
              "relativeSchemaLocation": "/foo/type",
              "relativeInstanceLocation": "/foo",
              "schemaResource": "https://example.com/schema",
              "absoluteKeywordLocation": "https://example.com/schema#/properties/foo/type",
              "target": {
                "category": "target",
                "location": "",
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
              "type": "public",
              "condition": [],
              "relativeSchemaLocation": "",
              "relativeInstanceLocation": "",
              "schemaResource": "https://example.com/schema",
              "absoluteKeywordLocation": "https://example.com/schema#/properties",
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
              "relativeSchemaLocation": "",
              "relativeInstanceLocation": "",
              "schemaResource": "https://example.com/schema",
              "absoluteKeywordLocation": "https://example.com/schema#/properties",
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
      "value": null,
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "relativeSchemaLocation": "/properties",
      "relativeInstanceLocation": "",
      "schemaResource": "",
      "absoluteKeywordLocation": "#/properties",
      "condition": [],
      "children": [
        {
          "category": "internal",
          "type": "container",
          "value": null,
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
          "schemaResource": "",
          "absoluteKeywordLocation": "#/properties",
          "children": [
            {
              "category": "assertion",
              "type": "type-strict",
              "condition": [],
              "relativeSchemaLocation": "/bar/type",
              "relativeInstanceLocation": "/bar",
              "schemaResource": "",
              "absoluteKeywordLocation": "#/properties/bar/type",
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
              "category": "annotation",
              "type": "public",
              "condition": [],
              "relativeSchemaLocation": "",
              "relativeInstanceLocation": "",
              "schemaResource": "",
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
              "relativeSchemaLocation": "",
              "relativeInstanceLocation": "",
              "schemaResource": "",
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
          "category": "internal",
          "type": "container",
          "value": null,
          "target": {
            "category": "target",
            "location": "",
            "type": "instance"
          },
          "relativeSchemaLocation": "",
          "relativeInstanceLocation": "",
          "schemaResource": "",
          "absoluteKeywordLocation": "#/properties",
          "children": [
            {
              "category": "assertion",
              "type": "type-strict",
              "condition": [],
              "relativeSchemaLocation": "/foo/type",
              "relativeInstanceLocation": "/foo",
              "schemaResource": "",
              "absoluteKeywordLocation": "#/properties/foo/type",
              "target": {
                "category": "target",
                "location": "",
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
              "type": "public",
              "condition": [],
              "relativeSchemaLocation": "",
              "relativeInstanceLocation": "",
              "schemaResource": "",
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
              "relativeSchemaLocation": "",
              "relativeInstanceLocation": "",
              "schemaResource": "",
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
