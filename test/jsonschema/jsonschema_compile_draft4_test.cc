#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include "jsonschema_test_utils.h"

TEST(JSONSchema_compile_draft4, type_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "string"
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{"foo bar"};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/type", "#/type", "");
}

TEST(JSONSchema_compile_draft4, type_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "string"
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 1);
  EVALUATE_TRACE_FAILURE(0, AssertionType, "/type", "#/type", "");
}

TEST(JSONSchema_compile_draft4, type_3) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "number"
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 3);
  EVALUATE_TRACE_FAILURE(0, AssertionType, "/type", "#/type", "");
  EVALUATE_TRACE_SUCCESS(1, AssertionType, "/type", "#/type", "");
  EVALUATE_TRACE_SUCCESS(2, LogicalOr, "/type", "#/type", "");
}

TEST(JSONSchema_compile_draft4, type_4) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "number"
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{3.14};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 2);
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/type", "#/type", "");
  EVALUATE_TRACE_SUCCESS(1, LogicalOr, "/type", "#/type", "");
}

TEST(JSONSchema_compile_draft4, type_5) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "number"
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{"3.14"};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 3);
  EVALUATE_TRACE_FAILURE(0, AssertionType, "/type", "#/type", "");
  EVALUATE_TRACE_FAILURE(1, AssertionType, "/type", "#/type", "");
  EVALUATE_TRACE_FAILURE(2, LogicalOr, "/type", "#/type", "");
}

TEST(JSONSchema_compile_draft4, type_6) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": [ "string" ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{"foo"};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 2);
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/type", "#/type", "");
  EVALUATE_TRACE_SUCCESS(1, LogicalOr, "/type", "#/type", "");
}

TEST(JSONSchema_compile_draft4, type_7) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": [ "string" ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 2);
  EVALUATE_TRACE_FAILURE(0, AssertionType, "/type", "#/type", "");
  EVALUATE_TRACE_FAILURE(1, LogicalOr, "/type", "#/type", "");
}

TEST(JSONSchema_compile_draft4, type_8) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": [ "string", "number", "object" ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{3};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 5);
  EVALUATE_TRACE_FAILURE(0, AssertionType, "/type", "#/type", "");
  EVALUATE_TRACE_FAILURE(1, AssertionType, "/type", "#/type", "");
  EVALUATE_TRACE_SUCCESS(2, AssertionType, "/type", "#/type", "");
  EVALUATE_TRACE_SUCCESS(3, LogicalOr, "/type", "#/type", "");
  EVALUATE_TRACE_SUCCESS(4, LogicalOr, "/type", "#/type", "");
}

TEST(JSONSchema_compile_draft4, type_9) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": [ "string", "number", "object" ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{true};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 6);
  EVALUATE_TRACE_FAILURE(0, AssertionType, "/type", "#/type", "");
  EVALUATE_TRACE_FAILURE(1, AssertionType, "/type", "#/type", "");
  EVALUATE_TRACE_FAILURE(2, AssertionType, "/type", "#/type", "");
  EVALUATE_TRACE_FAILURE(3, LogicalOr, "/type", "#/type", "");
  EVALUATE_TRACE_FAILURE(4, AssertionType, "/type", "#/type", "");
  EVALUATE_TRACE_FAILURE(5, LogicalOr, "/type", "#/type", "");
}

TEST(JSONSchema_compile_draft4, required_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "required": [ "foo" ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{"foo bar"};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 0);
}

TEST(JSONSchema_compile_draft4, required_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "required": [ "foo" ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);
  EVALUATE_TRACE_SUCCESS(0, AssertionDefines, "/required", "#/required", "");
}

TEST(JSONSchema_compile_draft4, required_3) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "required": [ "foo", "baz" ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 3);
  EVALUATE_TRACE_SUCCESS(0, AssertionDefines, "/required", "#/required", "");
  EVALUATE_TRACE_FAILURE(1, AssertionDefines, "/required", "#/required", "");
  EVALUATE_TRACE_FAILURE(2, LogicalAnd, "/required", "#/required", "");
}

TEST(JSONSchema_compile_draft4, required_4) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "required": [ "foo", "bar" ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 4);
  EVALUATE_TRACE_SUCCESS(0, AssertionDefines, "/required", "#/required", "");
  EVALUATE_TRACE_SUCCESS(1, AssertionDefines, "/required", "#/required", "");
  EVALUATE_TRACE_SUCCESS(2, LogicalAnd, "/required", "#/required", "");
  EVALUATE_TRACE_SUCCESS(3, AssertionType, "/type", "#/type", "");
}

TEST(JSONSchema_compile_draft4, allOf_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "allOf": [
      { "type": "object" },
      { "required": [ "foo", "bar" ] }
    ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 4);
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/allOf/0/type", "#/allOf/0/type",
                         "");
  EVALUATE_TRACE_SUCCESS(1, AssertionDefines, "/allOf/1/required",
                         "#/allOf/1/required", "");
  EVALUATE_TRACE_SUCCESS(2, AssertionDefines, "/allOf/1/required",
                         "#/allOf/1/required", "");
  EVALUATE_TRACE_SUCCESS(3, LogicalAnd, "/allOf/1/required",
                         "#/allOf/1/required", "");
}

TEST(JSONSchema_compile_draft4, allOf_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "allOf": [
      { "type": "object" },
      { "required": [ "foo", "bar" ] }
    ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"baz\": 2 }")};

  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 4);
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/allOf/0/type", "#/allOf/0/type",
                         "");
  EVALUATE_TRACE_SUCCESS(1, AssertionDefines, "/allOf/1/required",
                         "#/allOf/1/required", "");
  EVALUATE_TRACE_FAILURE(2, AssertionDefines, "/allOf/1/required",
                         "#/allOf/1/required", "");
  EVALUATE_TRACE_FAILURE(3, LogicalAnd, "/allOf/1/required",
                         "#/allOf/1/required", "");
}

TEST(JSONSchema_compile_draft4, ref_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "allOf": [ { "$ref": "#/definitions/string" } ],
    "definitions": {
      "string": { "type": "string" }
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 2);
  EVALUATE_TRACE_FAILURE(0, AssertionType, "/allOf/0/$ref/type",
                         "#/definitions/string/type", "");
  EVALUATE_TRACE_FAILURE(1, ControlLabel, "/allOf/0/$ref", "#/allOf/0/$ref",
                         "");
}

TEST(JSONSchema_compile_draft4, ref_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "allOf": [ { "$ref": "#/definitions/string" } ],
    "definitions": {
      "string": { "type": "string" }
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{"foo"};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 2);
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/allOf/0/$ref/type",
                         "#/definitions/string/type", "");
  EVALUATE_TRACE_SUCCESS(1, ControlLabel, "/allOf/0/$ref", "#/allOf/0/$ref",
                         "");
}

TEST(JSONSchema_compile_draft4, ref_3) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://example.com",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "foo": {
        "$ref": "https://example.com"
      }
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": {} }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 7);
  EVALUATE_TRACE_SUCCESS(0, LogicalAnd, "/properties/foo/$ref/properties",
                         "https://example.com#/properties", "/foo");
  EVALUATE_TRACE_SUCCESS(1, AssertionType, "/properties/foo/$ref/type",
                         "https://example.com#/type", "/foo");
  EVALUATE_TRACE_SUCCESS(2, ControlLabel, "/properties/foo/$ref",
                         "https://example.com#/properties/foo/$ref", "/foo");
  EVALUATE_TRACE_ANNOTATION_PRIVATE(
      3, "/properties", "https://example.com#/properties", "", "foo");
  EVALUATE_TRACE_SUCCESS(4, LogicalAnd, "/properties",
                         "https://example.com#/properties", "");
  EVALUATE_TRACE_SUCCESS(5, LogicalAnd, "/properties",
                         "https://example.com#/properties", "");
  EVALUATE_TRACE_SUCCESS(6, AssertionType, "/type", "https://example.com#/type",
                         "");
}

TEST(JSONSchema_compile_draft4, ref_4) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://example.com",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "foo": {
        "$ref": "https://example.com"
      }
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": { \"foo\": {} } }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 12);

  // Nested `foo`
  EVALUATE_TRACE_SUCCESS(0, LogicalAnd,
                         "/properties/foo/$ref/properties/foo/$ref/properties",
                         "https://example.com#/properties", "/foo/foo");
  EVALUATE_TRACE_SUCCESS(1, AssertionType,
                         "/properties/foo/$ref/properties/foo/$ref/type",
                         "https://example.com#/type", "/foo/foo");
  EVALUATE_TRACE_SUCCESS(
      2, ControlJump, "/properties/foo/$ref/properties/foo/$ref",
      "https://example.com#/properties/foo/$ref", "/foo/foo");
  EVALUATE_TRACE_ANNOTATION_PRIVATE(3, "/properties/foo/$ref/properties",
                                    "https://example.com#/properties", "/foo",
                                    "foo");
  EVALUATE_TRACE_SUCCESS(4, LogicalAnd, "/properties/foo/$ref/properties",
                         "https://example.com#/properties", "/foo");
  EVALUATE_TRACE_SUCCESS(5, LogicalAnd, "/properties/foo/$ref/properties",
                         "https://example.com#/properties", "/foo");

  // Top level `foo`
  EVALUATE_TRACE_SUCCESS(6, AssertionType, "/properties/foo/$ref/type",
                         "https://example.com#/type", "/foo");
  EVALUATE_TRACE_SUCCESS(7, ControlLabel, "/properties/foo/$ref",
                         "https://example.com#/properties/foo/$ref", "/foo");
  EVALUATE_TRACE_ANNOTATION_PRIVATE(
      8, "/properties", "https://example.com#/properties", "", "foo");
  EVALUATE_TRACE_SUCCESS(9, LogicalAnd, "/properties",
                         "https://example.com#/properties", "");
  EVALUATE_TRACE_SUCCESS(10, LogicalAnd, "/properties",
                         "https://example.com#/properties", "");

  // Top level object
  EVALUATE_TRACE_SUCCESS(11, AssertionType, "/type",
                         "https://example.com#/type", "");
}

TEST(JSONSchema_compile_draft4, ref_5) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://example.com",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "foo": {
        "$ref": "https://example.com"
      }
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": { \"foo\": 1 } }")};

  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 7);

  // Nested `foo`
  EVALUATE_TRACE_FAILURE(0, AssertionType,
                         "/properties/foo/$ref/properties/foo/$ref/type",
                         "https://example.com#/type", "/foo/foo");
  EVALUATE_TRACE_FAILURE(
      1, ControlJump, "/properties/foo/$ref/properties/foo/$ref",
      "https://example.com#/properties/foo/$ref", "/foo/foo");
  EVALUATE_TRACE_FAILURE(2, LogicalAnd, "/properties/foo/$ref/properties",
                         "https://example.com#/properties", "/foo");
  EVALUATE_TRACE_FAILURE(3, LogicalAnd, "/properties/foo/$ref/properties",
                         "https://example.com#/properties", "/foo");

  // Top level `foo`
  EVALUATE_TRACE_FAILURE(4, ControlLabel, "/properties/foo/$ref",
                         "https://example.com#/properties/foo/$ref", "/foo");
  EVALUATE_TRACE_FAILURE(5, LogicalAnd, "/properties",
                         "https://example.com#/properties", "");
  EVALUATE_TRACE_FAILURE(6, LogicalAnd, "/properties",
                         "https://example.com#/properties", "");
}

TEST(JSONSchema_compile_draft4, ref_6) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "foo": {
        "$ref": "#"
      }
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": {} }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 7);
  EVALUATE_TRACE_SUCCESS(0, LogicalAnd, "/properties/foo/$ref/properties",
                         "#/properties", "/foo");
  EVALUATE_TRACE_SUCCESS(1, AssertionType, "/properties/foo/$ref/type",
                         "#/type", "/foo");
  EVALUATE_TRACE_SUCCESS(2, ControlLabel, "/properties/foo/$ref",
                         "#/properties/foo/$ref", "/foo");
  EVALUATE_TRACE_ANNOTATION_PRIVATE(3, "/properties", "#/properties", "",
                                    "foo");
  EVALUATE_TRACE_SUCCESS(4, LogicalAnd, "/properties", "#/properties", "");
  EVALUATE_TRACE_SUCCESS(5, LogicalAnd, "/properties", "#/properties", "");
  EVALUATE_TRACE_SUCCESS(6, AssertionType, "/type", "#/type", "");
}

TEST(JSONSchema_compile_draft4, properties_1) {
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

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};

  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 6);
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/properties/bar/type",
                         "#/properties/bar/type", "/bar");
  EVALUATE_TRACE_ANNOTATION_PRIVATE(1, "/properties", "#/properties", "",
                                    "bar");
  EVALUATE_TRACE_SUCCESS(2, LogicalAnd, "/properties", "#/properties", "");
  EVALUATE_TRACE_FAILURE(3, AssertionType, "/properties/foo/type",
                         "#/properties/foo/type", "/foo");
  EVALUATE_TRACE_FAILURE(4, LogicalAnd, "/properties", "#/properties", "");
  EVALUATE_TRACE_FAILURE(5, LogicalAnd, "/properties", "#/properties", "");
}

TEST(JSONSchema_compile_draft4, properties_2) {
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

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": \"xxx\", \"bar\": 2 }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 7);
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/properties/bar/type",
                         "#/properties/bar/type", "/bar");
  EVALUATE_TRACE_ANNOTATION_PRIVATE(1, "/properties", "#/properties", "",
                                    "bar");
  EVALUATE_TRACE_SUCCESS(2, LogicalAnd, "/properties", "#/properties", "");
  EVALUATE_TRACE_SUCCESS(3, AssertionType, "/properties/foo/type",
                         "#/properties/foo/type", "/foo");
  EVALUATE_TRACE_ANNOTATION_PRIVATE(4, "/properties", "#/properties", "",
                                    "foo");
  EVALUATE_TRACE_SUCCESS(5, LogicalAnd, "/properties", "#/properties", "");
  EVALUATE_TRACE_SUCCESS(6, LogicalAnd, "/properties", "#/properties", "");
}

TEST(JSONSchema_compile_draft4, properties_3) {
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

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"baz\": [] }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);
  EVALUATE_TRACE_SUCCESS(0, LogicalAnd, "/properties", "#/properties", "");
}

TEST(JSONSchema_compile_draft4, properties_4) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "properties": {
      "foo": {
        "properties": {
          "bar": {
            "type": "string"
          }
        }
      }
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": { \"bar\": \"baz\" } }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 7);
  EVALUATE_TRACE_SUCCESS(0, AssertionType,
                         "/properties/foo/properties/bar/type",
                         "#/properties/foo/properties/bar/type", "/foo/bar");
  EVALUATE_TRACE_ANNOTATION_PRIVATE(1, "/properties/foo/properties",
                                    "#/properties/foo/properties", "/foo",
                                    "bar");
  EVALUATE_TRACE_SUCCESS(2, LogicalAnd, "/properties/foo/properties",
                         "#/properties/foo/properties", "/foo");
  EVALUATE_TRACE_SUCCESS(3, LogicalAnd, "/properties/foo/properties",
                         "#/properties/foo/properties", "/foo");
  EVALUATE_TRACE_ANNOTATION_PRIVATE(4, "/properties", "#/properties", "",
                                    "foo");
  EVALUATE_TRACE_SUCCESS(5, LogicalAnd, "/properties", "#/properties", "");
  EVALUATE_TRACE_SUCCESS(6, LogicalAnd, "/properties", "#/properties", "");
}

TEST(JSONSchema_compile_draft4, pattern_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "pattern": "^x"
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{"xxx"};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);
  EVALUATE_TRACE_SUCCESS(0, AssertionRegex, "/pattern", "#/pattern", "");
}

TEST(JSONSchema_compile_draft4, pattern_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "pattern": "^x"
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{"aaa"};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 1);
  EVALUATE_TRACE_FAILURE(0, AssertionRegex, "/pattern", "#/pattern", "");
}

TEST(JSONSchema_compile_draft4, pattern_3) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "pattern": "^x"
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 0);
}

TEST(JSONSchema_compile_draft4, patternProperties_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "patternProperties": {}
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 0);
}

TEST(JSONSchema_compile_draft4, patternProperties_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "patternProperties": {
      "^v": true
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 2);
  EVALUATE_TRACE_SUCCESS(0, LoopProperties, "/patternProperties",
                         "#/patternProperties", "");
  EVALUATE_TRACE_SUCCESS(1, LogicalAnd, "/patternProperties",
                         "#/patternProperties", "");
}

TEST(JSONSchema_compile_draft4, patternProperties_3) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "patternProperties": {
      "^f": true
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 4);
  EVALUATE_TRACE_ANNOTATION_PRIVATE(0, "/patternProperties",
                                    "#/patternProperties", "", "foo");
  EVALUATE_TRACE_SUCCESS(1, LogicalAnd, "/patternProperties",
                         "#/patternProperties", "/foo");
  EVALUATE_TRACE_SUCCESS(2, LoopProperties, "/patternProperties",
                         "#/patternProperties", "");
  EVALUATE_TRACE_SUCCESS(3, LogicalAnd, "/patternProperties",
                         "#/patternProperties", "");
}

TEST(JSONSchema_compile_draft4, patternProperties_4) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "patternProperties": {
      "^f": { "type": "integer" }
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 5);
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/patternProperties/^f/type",
                         // Note that the caret needs to be URI escaped
                         "#/patternProperties/%5Ef/type", "/foo");
  EVALUATE_TRACE_ANNOTATION_PRIVATE(1, "/patternProperties",
                                    "#/patternProperties", "", "foo");
  EVALUATE_TRACE_SUCCESS(2, LogicalAnd, "/patternProperties",
                         "#/patternProperties", "/foo");
  EVALUATE_TRACE_SUCCESS(3, LoopProperties, "/patternProperties",
                         "#/patternProperties", "");
  EVALUATE_TRACE_SUCCESS(4, LogicalAnd, "/patternProperties",
                         "#/patternProperties", "");
}

TEST(JSONSchema_compile_draft4, patternProperties_5) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "patternProperties": {
      "^f": { "type": "string" }
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};

  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 4);
  EVALUATE_TRACE_FAILURE(0, AssertionType, "/patternProperties/^f/type",
                         // Note that the caret needs to be URI escaped
                         "#/patternProperties/%5Ef/type", "/foo");
  EVALUATE_TRACE_FAILURE(1, LogicalAnd, "/patternProperties",
                         "#/patternProperties", "/foo");
  EVALUATE_TRACE_FAILURE(2, LoopProperties, "/patternProperties",
                         "#/patternProperties", "");
  EVALUATE_TRACE_FAILURE(3, LogicalAnd, "/patternProperties",
                         "#/patternProperties", "");
}

TEST(JSONSchema_compile_draft4, patternProperties_6) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "patternProperties": {
      "^f": { "type": "integer" },
      "o$": { "type": "integer" }
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 8);
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/patternProperties/^f/type",
                         // Note that the caret needs to be URI escaped
                         "#/patternProperties/%5Ef/type", "/foo");
  EVALUATE_TRACE_ANNOTATION_PRIVATE(1, "/patternProperties",
                                    "#/patternProperties", "", "foo");
  EVALUATE_TRACE_SUCCESS(2, LogicalAnd, "/patternProperties",
                         "#/patternProperties", "/foo");
  EVALUATE_TRACE_SUCCESS(3, LoopProperties, "/patternProperties",
                         "#/patternProperties", "");
  EVALUATE_TRACE_SUCCESS(4, AssertionType, "/patternProperties/o$/type",
                         "#/patternProperties/o$/type", "/foo");
  EVALUATE_TRACE_SUCCESS(5, LogicalAnd, "/patternProperties",
                         "#/patternProperties", "/foo");
  EVALUATE_TRACE_SUCCESS(6, LoopProperties, "/patternProperties",
                         "#/patternProperties", "");
}

TEST(JSONSchema_compile_draft4, patternProperties_7) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "patternProperties": {
      "^f": {
        "patternProperties": {
          "^b": { "type": "integer" }
        }
      }
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": { \"bar\": 2 } }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 9);
  EVALUATE_TRACE_SUCCESS(
      0, AssertionType, "/patternProperties/^f/patternProperties/^b/type",
      "#/patternProperties/%5Ef/patternProperties/%5Eb/type", "/foo/bar");
  EVALUATE_TRACE_ANNOTATION_PRIVATE(
      1, "/patternProperties/^f/patternProperties",
      "#/patternProperties/%5Ef/patternProperties", "/foo", "bar");
  EVALUATE_TRACE_SUCCESS(
      2, LogicalAnd, "/patternProperties/^f/patternProperties",
      "#/patternProperties/%5Ef/patternProperties", "/foo/bar");
  EVALUATE_TRACE_SUCCESS(3, LoopProperties,
                         "/patternProperties/^f/patternProperties",
                         "#/patternProperties/%5Ef/patternProperties", "/foo");
  EVALUATE_TRACE_SUCCESS(4, LogicalAnd,
                         "/patternProperties/^f/patternProperties",
                         "#/patternProperties/%5Ef/patternProperties", "/foo");
  EVALUATE_TRACE_ANNOTATION_PRIVATE(5, "/patternProperties",
                                    "#/patternProperties", "", "foo");
  EVALUATE_TRACE_SUCCESS(6, LogicalAnd, "/patternProperties",
                         "#/patternProperties", "/foo");
  EVALUATE_TRACE_SUCCESS(7, LoopProperties, "/patternProperties",
                         "#/patternProperties", "");
  EVALUATE_TRACE_SUCCESS(8, LogicalAnd, "/patternProperties",
                         "#/patternProperties", "");
}

TEST(JSONSchema_compile_draft4, additionalProperties_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "additionalProperties": {
      "type": "integer"
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 5);
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/additionalProperties/type",
                         "#/additionalProperties/type", "/bar");
  EVALUATE_TRACE_SUCCESS(1, LogicalAnd, "/additionalProperties",
                         "#/additionalProperties", "/bar");
  EVALUATE_TRACE_SUCCESS(2, AssertionType, "/additionalProperties/type",
                         "#/additionalProperties/type", "/foo");
  EVALUATE_TRACE_SUCCESS(3, LogicalAnd, "/additionalProperties",
                         "#/additionalProperties", "/foo");
  EVALUATE_TRACE_SUCCESS(4, LoopProperties, "/additionalProperties",
                         "#/additionalProperties", "");
}

TEST(JSONSchema_compile_draft4, additionalProperties_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "properties": {
      "foo": {
        "type": "boolean"
      }
    },
    "additionalProperties": {
      "type": "integer"
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": true, \"bar\": 2 }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 7);
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/properties/foo/type",
                         "#/properties/foo/type", "/foo");
  EVALUATE_TRACE_ANNOTATION_PRIVATE(1, "/properties", "#/properties", "",
                                    "foo");
  EVALUATE_TRACE_SUCCESS(2, LogicalAnd, "/properties", "#/properties", "");
  EVALUATE_TRACE_SUCCESS(3, LogicalAnd, "/properties", "#/properties", "");
  EVALUATE_TRACE_SUCCESS(4, AssertionType, "/additionalProperties/type",
                         "#/additionalProperties/type", "/bar");
  EVALUATE_TRACE_SUCCESS(5, LogicalAnd, "/additionalProperties",
                         "#/additionalProperties", "/bar");
  EVALUATE_TRACE_SUCCESS(6, LoopProperties, "/additionalProperties",
                         "#/additionalProperties", "");
}

TEST(JSONSchema_compile_draft4, additionalProperties_3) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "properties": {
      "baz": {
        "type": "integer"
      }
    },
    "additionalProperties": {
      "type": "integer"
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 6);
  EVALUATE_TRACE_SUCCESS(0, LogicalAnd, "/properties", "#/properties", "");
  EVALUATE_TRACE_SUCCESS(1, AssertionType, "/additionalProperties/type",
                         "#/additionalProperties/type", "/bar");
  EVALUATE_TRACE_SUCCESS(2, LogicalAnd, "/additionalProperties",
                         "#/additionalProperties", "/bar");
  EVALUATE_TRACE_SUCCESS(3, AssertionType, "/additionalProperties/type",
                         "#/additionalProperties/type", "/foo");
  EVALUATE_TRACE_SUCCESS(4, LogicalAnd, "/additionalProperties",
                         "#/additionalProperties", "/foo");
  EVALUATE_TRACE_SUCCESS(5, LoopProperties, "/additionalProperties",
                         "#/additionalProperties", "");
}

TEST(JSONSchema_compile_draft4, additionalProperties_4) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "properties": {
      "foo": { "type": "boolean" }
    },
    "patternProperties": {
      "^bar$": { "type": "integer" }
    },
    "additionalProperties": { "type": "string" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{sourcemeta::jsontoolkit::parse(
      "{ \"foo\": true, \"bar\": 2, \"baz\": \"qux\" }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 12);

  // `patternProperties`
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/patternProperties/^bar$/type",
                         // Note that the caret needs to be URI escaped
                         "#/patternProperties/%5Ebar$/type", "/bar");
  EVALUATE_TRACE_ANNOTATION_PRIVATE(1, "/patternProperties",
                                    "#/patternProperties", "", "bar");
  EVALUATE_TRACE_SUCCESS(2, LogicalAnd, "/patternProperties",
                         "#/patternProperties", "/bar");
  EVALUATE_TRACE_SUCCESS(3, LoopProperties, "/patternProperties",
                         "#/patternProperties", "");
  EVALUATE_TRACE_SUCCESS(4, LogicalAnd, "/patternProperties",
                         "#/patternProperties", "");

  // `properties`
  EVALUATE_TRACE_SUCCESS(5, AssertionType, "/properties/foo/type",
                         "#/properties/foo/type", "/foo");
  EVALUATE_TRACE_ANNOTATION_PRIVATE(6, "/properties", "#/properties", "",
                                    "foo");
  EVALUATE_TRACE_SUCCESS(7, LogicalAnd, "/properties", "#/properties", "");

  EVALUATE_TRACE_SUCCESS(8, LogicalAnd, "/properties", "#/properties", "");

  // `additionalProperties`
  EVALUATE_TRACE_SUCCESS(9, AssertionType, "/additionalProperties/type",
                         "#/additionalProperties/type", "/baz");
  EVALUATE_TRACE_SUCCESS(10, LogicalAnd, "/additionalProperties",
                         "#/additionalProperties", "/baz");
  EVALUATE_TRACE_SUCCESS(11, LoopProperties, "/additionalProperties",
                         "#/additionalProperties", "");
}

TEST(JSONSchema_compile_draft4, not_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "not": {
      "type": "string"
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 2);
  EVALUATE_TRACE_FAILURE(0, AssertionType, "/not/type", "#/not/type", "");
  EVALUATE_TRACE_SUCCESS(1, LogicalNot, "/not", "#/not", "");
}

TEST(JSONSchema_compile_draft4, not_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "not": {
      "type": "string"
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{"foo"};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 2);
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/not/type", "#/not/type", "");
  EVALUATE_TRACE_FAILURE(1, LogicalNot, "/not", "#/not", "");
}

TEST(JSONSchema_compile_draft4, not_3) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "not": {
      "properties": {
        "foo": {
          "type": "boolean"
        }
      },
      "additionalProperties": {
        "type": "integer"
      }
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": true, \"bar\": false }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 8);
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/not/properties/foo/type",
                         "#/not/properties/foo/type", "/foo");
  EVALUATE_TRACE_ANNOTATION_PRIVATE(1, "/not/properties", "#/not/properties",
                                    "", "foo");
  EVALUATE_TRACE_SUCCESS(2, LogicalAnd, "/not/properties", "#/not/properties",
                         "");
  EVALUATE_TRACE_SUCCESS(3, LogicalAnd, "/not/properties", "#/not/properties",
                         "");
  EVALUATE_TRACE_FAILURE(4, AssertionType, "/not/additionalProperties/type",
                         "#/not/additionalProperties/type", "/bar");
  EVALUATE_TRACE_FAILURE(5, LogicalAnd, "/not/additionalProperties",
                         "#/not/additionalProperties", "/bar");
  EVALUATE_TRACE_FAILURE(6, LoopProperties, "/not/additionalProperties",
                         "#/not/additionalProperties", "");
  EVALUATE_TRACE_SUCCESS(7, LogicalNot, "/not", "#/not", "");
}

TEST(JSONSchema_compile_draft4, items_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "items": {
      "type": "string"
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 0);
}

TEST(JSONSchema_compile_draft4, items_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "items": {
      "type": "string"
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ \"foo\", \"bar\", \"baz\" ]")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 4);
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/items/type", "#/items/type", "/0");
  EVALUATE_TRACE_SUCCESS(1, AssertionType, "/items/type", "#/items/type", "/1");
  EVALUATE_TRACE_SUCCESS(2, AssertionType, "/items/type", "#/items/type", "/2");
  EVALUATE_TRACE_SUCCESS(3, LoopItems, "/items", "#/items", "");
}

TEST(JSONSchema_compile_draft4, items_3) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "items": {
      "type": "string"
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ \"foo\", 5, \"baz\" ]")};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 3);
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/items/type", "#/items/type", "/0");
  EVALUATE_TRACE_FAILURE(1, AssertionType, "/items/type", "#/items/type", "/1");
  EVALUATE_TRACE_FAILURE(2, LoopItems, "/items", "#/items", "");
}

TEST(JSONSchema_compile_draft4, items_4) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "items": [ { "type": "string" } ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 0);
}

TEST(JSONSchema_compile_draft4, items_5) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "items": [ { "type": "integer" }, { "type": "boolean" } ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[]")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);
  EVALUATE_TRACE_SUCCESS(0, LogicalAnd, "/items", "#/items", "");
}

TEST(JSONSchema_compile_draft4, items_6) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "items": [ { "type": "integer" }, { "type": "boolean" } ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ 5 ]")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 3);
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/items/0/type", "#/items/0/type",
                         "/0");
  EVALUATE_TRACE_SUCCESS(1, LogicalAnd, "/items", "#/items", "");
  EVALUATE_TRACE_SUCCESS(2, LogicalAnd, "/items", "#/items", "");
}

TEST(JSONSchema_compile_draft4, items_7) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "items": [ { "type": "integer" }, { "type": "boolean" } ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ 5, true, \"extra\" ]")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 5);
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/items/0/type", "#/items/0/type",
                         "/0");
  EVALUATE_TRACE_SUCCESS(1, LogicalAnd, "/items", "#/items", "");
  EVALUATE_TRACE_SUCCESS(2, AssertionType, "/items/1/type", "#/items/1/type",
                         "/1");
  EVALUATE_TRACE_SUCCESS(3, LogicalAnd, "/items", "#/items", "");
  EVALUATE_TRACE_SUCCESS(4, LogicalAnd, "/items", "#/items", "");
}

TEST(JSONSchema_compile_draft4, items_8) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "items": [ { "type": "integer" }, { "type": "boolean" } ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ 5, 1, \"extra\" ]")};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 5);
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/items/0/type", "#/items/0/type",
                         "/0");
  EVALUATE_TRACE_SUCCESS(1, LogicalAnd, "/items", "#/items", "");
  EVALUATE_TRACE_FAILURE(2, AssertionType, "/items/1/type", "#/items/1/type",
                         "/1");
  EVALUATE_TRACE_FAILURE(3, LogicalAnd, "/items", "#/items", "");
  EVALUATE_TRACE_FAILURE(4, LogicalAnd, "/items", "#/items", "");
}
