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
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/type", "#/type");
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
  EVALUATE_TRACE_FAILURE(0, AssertionType, "/type", "#/type");
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
  EVALUATE_TRACE_FAILURE(0, AssertionType, "/type", "#/type");
  EVALUATE_TRACE_SUCCESS(1, AssertionType, "/type", "#/type");
  EVALUATE_TRACE_SUCCESS(2, LogicalOr, "/type", "#/type");
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
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/type", "#/type");
  EVALUATE_TRACE_SUCCESS(1, LogicalOr, "/type", "#/type");
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
  EVALUATE_TRACE_FAILURE(0, AssertionType, "/type", "#/type");
  EVALUATE_TRACE_FAILURE(1, AssertionType, "/type", "#/type");
  EVALUATE_TRACE_FAILURE(2, LogicalOr, "/type", "#/type");
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
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/type", "#/type");
  EVALUATE_TRACE_SUCCESS(1, LogicalOr, "/type", "#/type");
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
  EVALUATE_TRACE_FAILURE(0, AssertionType, "/type", "#/type");
  EVALUATE_TRACE_FAILURE(1, LogicalOr, "/type", "#/type");
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
  EVALUATE_TRACE_FAILURE(0, AssertionType, "/type", "#/type");
  EVALUATE_TRACE_FAILURE(1, AssertionType, "/type", "#/type");
  EVALUATE_TRACE_SUCCESS(2, AssertionType, "/type", "#/type");
  EVALUATE_TRACE_SUCCESS(3, LogicalOr, "/type", "#/type");
  EVALUATE_TRACE_SUCCESS(4, LogicalOr, "/type", "#/type");
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
  EVALUATE_TRACE_FAILURE(0, AssertionType, "/type", "#/type");
  EVALUATE_TRACE_FAILURE(1, AssertionType, "/type", "#/type");
  EVALUATE_TRACE_FAILURE(2, AssertionType, "/type", "#/type");
  EVALUATE_TRACE_FAILURE(3, LogicalOr, "/type", "#/type");
  EVALUATE_TRACE_FAILURE(4, AssertionType, "/type", "#/type");
  EVALUATE_TRACE_FAILURE(5, LogicalOr, "/type", "#/type");
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
  EVALUATE_TRACE_SUCCESS(0, AssertionDefines, "/required", "#/required");
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
  EVALUATE_TRACE_SUCCESS(0, AssertionDefines, "/required", "#/required");
  EVALUATE_TRACE_FAILURE(1, AssertionDefines, "/required", "#/required");
  EVALUATE_TRACE_FAILURE(2, LogicalAnd, "/required", "#/required");
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
  EVALUATE_TRACE_SUCCESS(0, AssertionDefines, "/required", "#/required");
  EVALUATE_TRACE_SUCCESS(1, AssertionDefines, "/required", "#/required");
  EVALUATE_TRACE_SUCCESS(2, LogicalAnd, "/required", "#/required");
  EVALUATE_TRACE_SUCCESS(3, AssertionType, "/type", "#/type");
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
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/allOf/0/type", "#/allOf/0/type");
  EVALUATE_TRACE_SUCCESS(1, AssertionDefines, "/allOf/1/required",
                         "#/allOf/1/required");
  EVALUATE_TRACE_SUCCESS(2, AssertionDefines, "/allOf/1/required",
                         "#/allOf/1/required");
  EVALUATE_TRACE_SUCCESS(3, LogicalAnd, "/allOf/1/required",
                         "#/allOf/1/required");
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
  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/allOf/0/type", "#/allOf/0/type");
  EVALUATE_TRACE_SUCCESS(1, AssertionDefines, "/allOf/1/required",
                         "#/allOf/1/required");
  EVALUATE_TRACE_FAILURE(2, AssertionDefines, "/allOf/1/required",
                         "#/allOf/1/required");
  EVALUATE_TRACE_FAILURE(3, LogicalAnd, "/allOf/1/required",
                         "#/allOf/1/required");
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
                         "#/definitions/string/type");
  EVALUATE_TRACE_FAILURE(1, ControlLabel, "/allOf/0/$ref", "#/allOf/0/$ref");
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
                         "#/definitions/string/type");
  EVALUATE_TRACE_SUCCESS(1, ControlLabel, "/allOf/0/$ref", "#/allOf/0/$ref");
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
                         "#/properties/bar/type");
  EVALUATE_TRACE_SUCCESS(1, AnnotationPrivate, "/properties", "#/properties");
  EVALUATE_TRACE_SUCCESS(2, LogicalAnd, "/properties", "#/properties");
  EVALUATE_TRACE_FAILURE(3, AssertionType, "/properties/foo/type",
                         "#/properties/foo/type");
  EVALUATE_TRACE_FAILURE(4, LogicalAnd, "/properties", "#/properties");
  EVALUATE_TRACE_FAILURE(5, LogicalAnd, "/properties", "#/properties");
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
                         "#/properties/bar/type");
  EVALUATE_TRACE_SUCCESS(1, AnnotationPrivate, "/properties", "#/properties");
  EVALUATE_TRACE_SUCCESS(2, LogicalAnd, "/properties", "#/properties");
  EVALUATE_TRACE_SUCCESS(3, AssertionType, "/properties/foo/type",
                         "#/properties/foo/type");
  EVALUATE_TRACE_SUCCESS(4, AnnotationPrivate, "/properties", "#/properties");
  EVALUATE_TRACE_SUCCESS(5, LogicalAnd, "/properties", "#/properties");
  EVALUATE_TRACE_SUCCESS(6, LogicalAnd, "/properties", "#/properties");
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
  EVALUATE_TRACE_SUCCESS(0, LogicalAnd, "/properties", "#/properties");
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
  EVALUATE_TRACE_SUCCESS(0, AssertionRegex, "/pattern", "#/pattern");
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
  EVALUATE_TRACE_FAILURE(0, AssertionRegex, "/pattern", "#/pattern");
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
