#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include "jsonschema_test_utils.h"

TEST(JSONSchema_compile_2019_09, properties_1_exhaustive) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
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

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }")};

  EVALUATE_WITH_TRACE_EXHAUSTIVE_FAILURE(compiled_schema, instance, 4);

  EVALUATE_TRACE_PRE(0, LogicalAnd, "/properties", "#/properties", "");
  EVALUATE_TRACE_PRE(1, AssertionType, "/properties/bar/type",
                     "#/properties/bar/type", "/bar");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(2, "/properties", "#/properties", "");
  EVALUATE_TRACE_PRE(3, AssertionTypeStrict, "/properties/foo/type",
                     "#/properties/foo/type", "/foo");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionType, "/properties/bar/type",
                              "#/properties/bar/type", "/bar");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(1, "/properties", "#/properties", "",
                                        "bar");
  EVALUATE_TRACE_POST_FAILURE(2, AssertionTypeStrict, "/properties/foo/type",
                              "#/properties/foo/type", "/foo");
  EVALUATE_TRACE_POST_FAILURE(3, LogicalAnd, "/properties", "#/properties", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The object property \"bar\" successfully "
                               "validated against its property subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "The value was expected to be of type string but it was of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 3,
                               "The object value was expected to validate "
                               "against the 2 defined properties subschemas");
}

TEST(JSONSchema_compile_2019_09, dependentRequired_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "dependentRequired": {
      "foo": [ "bar", "baz" ],
      "qux": [ "extra" ]
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 0);
}

TEST(JSONSchema_compile_2019_09, dependentRequired_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "dependentRequired": {
      "foo": [ "bar", "baz" ],
      "qux": [ "extra" ]
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2, \"baz\": 3 }")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);

  EVALUATE_TRACE_PRE(0, LogicalAnd, "/dependentRequired", "#/dependentRequired",
                     "");
  EVALUATE_TRACE_POST_SUCCESS(0, LogicalAnd, "/dependentRequired",
                              "#/dependentRequired", "");

  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 0,
      "The target is expected to match all of the given assertions");
}

TEST(JSONSchema_compile_2019_09, dependentSchemas_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "dependentSchemas": {
      "foo": { "required": [ "bar", "baz" ] },
      "qux": { "required": [ "extra" ] }
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 0);
}

TEST(JSONSchema_compile_2019_09, dependentSchemas_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "dependentSchemas": {
      "foo": { "required": [ "bar", "baz" ] },
      "qux": { "required": [ "extra" ] }
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"qux\": 1, \"extra\": 2 }")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 2);

  EVALUATE_TRACE_PRE(0, LogicalAnd, "/dependentSchemas", "#/dependentSchemas",
                     "");
  EVALUATE_TRACE_PRE(1, AssertionDefines, "/dependentSchemas/qux/required",
                     "#/dependentSchemas/qux/required", "");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionDefines,
                              "/dependentSchemas/qux/required",
                              "#/dependentSchemas/qux/required", "");
  EVALUATE_TRACE_POST_SUCCESS(1, LogicalAnd, "/dependentSchemas",
                              "#/dependentSchemas", "");

  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 0,
      "The object value was expected to define the property \"extra\"");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 1,
      "The target is expected to match all of the given assertions");
}

TEST(JSONSchema_compile_2019_09, additionalProperties_1_fast) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
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

  EVALUATE_TRACE_PRE(0, LoopProperties, "/additionalProperties",
                     "#/additionalProperties", "");
  EVALUATE_TRACE_PRE(1, AssertionType, "/additionalProperties/type",
                     "#/additionalProperties/type", "/bar");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(2, "/additionalProperties",
                                       "#/additionalProperties", "");
  EVALUATE_TRACE_PRE(3, AssertionType, "/additionalProperties/type",
                     "#/additionalProperties/type", "/foo");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(4, "/additionalProperties",
                                       "#/additionalProperties", "");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionType, "/additionalProperties/type",
                              "#/additionalProperties/type", "/bar");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(1, "/additionalProperties",
                                        "#/additionalProperties", "", "bar");
  EVALUATE_TRACE_POST_SUCCESS(2, AssertionType, "/additionalProperties/type",
                              "#/additionalProperties/type", "/foo");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(3, "/additionalProperties",
                                        "#/additionalProperties", "", "foo");
  EVALUATE_TRACE_POST_SUCCESS(4, LoopProperties, "/additionalProperties",
                              "#/additionalProperties", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 1,
      "The object property \"bar\" successfully validated against the "
      "additional properties subschema");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 2,
                               "The value was expected to be of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 3,
      "The object property \"foo\" successfully validated against the "
      "additional properties subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 4,
      "The object properties not covered by other adjacent object keywords are "
      "expected to validated against this subschema");
}

TEST(JSONSchema_compile_2019_09, additionalProperties_1_exhaustive) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
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

  EVALUATE_WITH_TRACE_EXHAUSTIVE_SUCCESS(compiled_schema, instance, 5);

  EVALUATE_TRACE_PRE(0, LoopProperties, "/additionalProperties",
                     "#/additionalProperties", "");
  EVALUATE_TRACE_PRE(1, AssertionType, "/additionalProperties/type",
                     "#/additionalProperties/type", "/bar");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(2, "/additionalProperties",
                                       "#/additionalProperties", "");
  EVALUATE_TRACE_PRE(3, AssertionType, "/additionalProperties/type",
                     "#/additionalProperties/type", "/foo");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(4, "/additionalProperties",
                                       "#/additionalProperties", "");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionType, "/additionalProperties/type",
                              "#/additionalProperties/type", "/bar");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(1, "/additionalProperties",
                                        "#/additionalProperties", "", "bar");
  EVALUATE_TRACE_POST_SUCCESS(2, AssertionType, "/additionalProperties/type",
                              "#/additionalProperties/type", "/foo");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(3, "/additionalProperties",
                                        "#/additionalProperties", "", "foo");
  EVALUATE_TRACE_POST_SUCCESS(4, LoopProperties, "/additionalProperties",
                              "#/additionalProperties", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 1,
      "The object property \"bar\" successfully validated against the "
      "additional properties subschema");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 2,
                               "The value was expected to be of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 3,
      "The object property \"foo\" successfully validated against the "
      "additional properties subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 4,
      "The object properties not covered by other adjacent object keywords are "
      "expected to validated against this subschema");
}

TEST(JSONSchema_compile_2019_09, additionalProperties_2_fast) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
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

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 6);

  EVALUATE_TRACE_PRE(0, LogicalAnd, "/properties", "#/properties", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/properties/foo/type",
                     "#/properties/foo/type", "/foo");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(2, "/properties", "#/properties", "");
  EVALUATE_TRACE_PRE(3, LoopProperties, "/additionalProperties",
                     "#/additionalProperties", "");
  EVALUATE_TRACE_PRE(4, AssertionType, "/additionalProperties/type",
                     "#/additionalProperties/type", "/bar");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(5, "/additionalProperties",
                                       "#/additionalProperties", "");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionTypeStrict, "/properties/foo/type",
                              "#/properties/foo/type", "/foo");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(1, "/properties", "#/properties", "",
                                        "foo");
  EVALUATE_TRACE_POST_SUCCESS(2, LogicalAnd, "/properties", "#/properties", "");
  EVALUATE_TRACE_POST_SUCCESS(3, AssertionType, "/additionalProperties/type",
                              "#/additionalProperties/type", "/bar");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(4, "/additionalProperties",
                                        "#/additionalProperties", "", "bar");
  EVALUATE_TRACE_POST_SUCCESS(5, LoopProperties, "/additionalProperties",
                              "#/additionalProperties", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type boolean");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The object property \"foo\" successfully "
                               "validated against its property subschema");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 2,
                               "The object value was expected to validate "
                               "against the single defined property subschema");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 3,
                               "The value was expected to be of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 4,
      "The object property \"bar\" successfully validated against the "
      "additional properties subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 5,
      "The object properties not covered by other adjacent object keywords are "
      "expected to validated against this subschema");
}

TEST(JSONSchema_compile_2019_09, additionalProperties_2_exhaustive) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
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

  EVALUATE_WITH_TRACE_EXHAUSTIVE_SUCCESS(compiled_schema, instance, 6);

  EVALUATE_TRACE_PRE(0, LogicalAnd, "/properties", "#/properties", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/properties/foo/type",
                     "#/properties/foo/type", "/foo");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(2, "/properties", "#/properties", "");
  EVALUATE_TRACE_PRE(3, LoopProperties, "/additionalProperties",
                     "#/additionalProperties", "");
  EVALUATE_TRACE_PRE(4, AssertionType, "/additionalProperties/type",
                     "#/additionalProperties/type", "/bar");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(5, "/additionalProperties",
                                       "#/additionalProperties", "");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionTypeStrict, "/properties/foo/type",
                              "#/properties/foo/type", "/foo");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(1, "/properties", "#/properties", "",
                                        "foo");
  EVALUATE_TRACE_POST_SUCCESS(2, LogicalAnd, "/properties", "#/properties", "");
  EVALUATE_TRACE_POST_SUCCESS(3, AssertionType, "/additionalProperties/type",
                              "#/additionalProperties/type", "/bar");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(4, "/additionalProperties",
                                        "#/additionalProperties", "", "bar");
  EVALUATE_TRACE_POST_SUCCESS(5, LoopProperties, "/additionalProperties",
                              "#/additionalProperties", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type boolean");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The object property \"foo\" successfully "
                               "validated against its property subschema");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 2,
                               "The object value was expected to validate "
                               "against the single defined property subschema");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 3,
                               "The value was expected to be of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 4,
      "The object property \"bar\" successfully validated against the "
      "additional properties subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 5,
      "The object properties not covered by other adjacent object keywords are "
      "expected to validated against this subschema");
}

TEST(JSONSchema_compile_2019_09, additionalProperties_3_fast) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalProperties": {
      "type": "integer"
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": \"baz\" }")};

  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 2);

  EVALUATE_TRACE_PRE(0, LoopProperties, "/additionalProperties",
                     "#/additionalProperties", "");
  EVALUATE_TRACE_PRE(1, AssertionType, "/additionalProperties/type",
                     "#/additionalProperties/type", "/bar");

  EVALUATE_TRACE_POST_FAILURE(0, AssertionType, "/additionalProperties/type",
                              "#/additionalProperties/type", "/bar");
  EVALUATE_TRACE_POST_FAILURE(1, LoopProperties, "/additionalProperties",
                              "#/additionalProperties", "");

  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 0,
      "The value was expected to be of type integer but it was of type string");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 1,
      "The object properties not covered by other adjacent object keywords are "
      "expected to validated against this subschema");
}

TEST(JSONSchema_compile_2019_09, additionalProperties_3_exhaustive) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalProperties": {
      "type": "integer"
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": \"baz\" }")};

  EVALUATE_WITH_TRACE_EXHAUSTIVE_FAILURE(compiled_schema, instance, 4);

  EVALUATE_TRACE_PRE(0, LoopProperties, "/additionalProperties",
                     "#/additionalProperties", "");
  EVALUATE_TRACE_PRE(1, AssertionType, "/additionalProperties/type",
                     "#/additionalProperties/type", "/bar");
  EVALUATE_TRACE_PRE(2, AssertionType, "/additionalProperties/type",
                     "#/additionalProperties/type", "/foo");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(3, "/additionalProperties",
                                       "#/additionalProperties", "");

  EVALUATE_TRACE_POST_FAILURE(0, AssertionType, "/additionalProperties/type",
                              "#/additionalProperties/type", "/bar");
  EVALUATE_TRACE_POST_SUCCESS(1, AssertionType, "/additionalProperties/type",
                              "#/additionalProperties/type", "/foo");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(2, "/additionalProperties",
                                        "#/additionalProperties", "", "foo");
  EVALUATE_TRACE_POST_FAILURE(3, LoopProperties, "/additionalProperties",
                              "#/additionalProperties", "");

  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 0,
      "The value was expected to be of type integer but it was of type string");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The value was expected to be of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "The object property \"foo\" successfully validated against the "
      "additional properties subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 3,
      "The object properties not covered by other adjacent object keywords are "
      "expected to validated against this subschema");
}

TEST(JSONSchema_compile_2019_09, contains_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "contains": { "type": "string" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{2};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 0);
}

TEST(JSONSchema_compile_2019_09, contains_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "contains": { "type": "string" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ 1, \"bar\", 3 ]")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 3);

  EVALUATE_TRACE_PRE(0, LoopContains, "/contains", "#/contains", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/0");
  EVALUATE_TRACE_PRE(2, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/1");

  EVALUATE_TRACE_POST_FAILURE(0, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/0");
  EVALUATE_TRACE_POST_SUCCESS(1, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/1");
  EVALUATE_TRACE_POST_SUCCESS(2, LoopContains, "/contains", "#/contains", "");

  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 0,
      "The value was expected to be of type string but it was of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "The array value was expected to contain at least 1 item that validates "
      "against the given subschema");
}

TEST(JSONSchema_compile_2019_09, contains_3) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "contains": { "type": "string" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 4);

  EVALUATE_TRACE_PRE(0, LoopContains, "/contains", "#/contains", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/0");
  EVALUATE_TRACE_PRE(2, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/1");
  EVALUATE_TRACE_PRE(3, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/2");

  EVALUATE_TRACE_POST_FAILURE(0, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/0");
  EVALUATE_TRACE_POST_FAILURE(1, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/1");
  EVALUATE_TRACE_POST_FAILURE(2, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/2");
  EVALUATE_TRACE_POST_FAILURE(3, LoopContains, "/contains", "#/contains", "");

  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 0,
      "The value was expected to be of type string but it was of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 1,
      "The value was expected to be of type string but it was of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "The value was expected to be of type string but it was of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 3,
      "The array value was expected to contain at least 1 item that validates "
      "against the given subschema");
}

TEST(JSONSchema_compile_2019_09, contains_4) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "contains": { "type": "string" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ \"foo\", \"bar\", \"baz\" ]")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 2);

  EVALUATE_TRACE_PRE(0, LoopContains, "/contains", "#/contains", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/0");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/0");
  EVALUATE_TRACE_POST_SUCCESS(1, LoopContains, "/contains", "#/contains", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 1,
      "The array value was expected to contain at least 1 item that validates "
      "against the given subschema");
}

TEST(JSONSchema_compile_2019_09, contains_5) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "minContains": 2,
    "contains": { "type": "string" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ 1, \"bar\", \"baz\" ]")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 4);

  EVALUATE_TRACE_PRE(0, LoopContains, "/contains", "#/contains", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/0");
  EVALUATE_TRACE_PRE(2, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/1");
  EVALUATE_TRACE_PRE(3, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/2");

  EVALUATE_TRACE_POST_FAILURE(0, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/0");
  EVALUATE_TRACE_POST_SUCCESS(1, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/1");
  EVALUATE_TRACE_POST_SUCCESS(2, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/2");
  EVALUATE_TRACE_POST_SUCCESS(3, LoopContains, "/contains", "#/contains", "");

  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 0,
      "The value was expected to be of type string but it was of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 2,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 3,
      "The array value was expected to contain at least 2 items that validate "
      "against the given subschema");
}

TEST(JSONSchema_compile_2019_09, contains_6) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "minContains": 2,
    "contains": { "type": "string" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ 1, \"foo\", \"bar\", \"baz\" ]")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 4);

  EVALUATE_TRACE_PRE(0, LoopContains, "/contains", "#/contains", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/0");
  EVALUATE_TRACE_PRE(2, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/1");
  EVALUATE_TRACE_PRE(3, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/2");

  EVALUATE_TRACE_POST_FAILURE(0, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/0");
  EVALUATE_TRACE_POST_SUCCESS(1, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/1");
  EVALUATE_TRACE_POST_SUCCESS(2, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/2");
  EVALUATE_TRACE_POST_SUCCESS(3, LoopContains, "/contains", "#/contains", "");

  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 0,
      "The value was expected to be of type string but it was of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 2,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 3,
      "The array value was expected to contain at least 2 items that validate "
      "against the given subschema");
}

TEST(JSONSchema_compile_2019_09, contains_7) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "minContains": 2,
    "contains": { "type": "string" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ 1, \"foo\", 2 ]")};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 4);

  EVALUATE_TRACE_PRE(0, LoopContains, "/contains", "#/contains", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/0");
  EVALUATE_TRACE_PRE(2, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/1");
  EVALUATE_TRACE_PRE(3, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/2");

  EVALUATE_TRACE_POST_FAILURE(0, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/0");
  EVALUATE_TRACE_POST_SUCCESS(1, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/1");
  EVALUATE_TRACE_POST_FAILURE(2, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/2");
  EVALUATE_TRACE_POST_FAILURE(3, LoopContains, "/contains", "#/contains", "");

  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 0,
      "The value was expected to be of type string but it was of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "The value was expected to be of type string but it was of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 3,
      "The array value was expected to contain at least 2 items that validate "
      "against the given subschema");
}

TEST(JSONSchema_compile_2019_09, contains_8) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "maxContains": 2,
    "contains": { "type": "string" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ 1, \"foo\", \"bar\" ]")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 4);

  EVALUATE_TRACE_PRE(0, LoopContains, "/contains", "#/contains", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/0");
  EVALUATE_TRACE_PRE(2, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/1");
  EVALUATE_TRACE_PRE(3, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/2");

  EVALUATE_TRACE_POST_FAILURE(0, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/0");
  EVALUATE_TRACE_POST_SUCCESS(1, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/1");
  EVALUATE_TRACE_POST_SUCCESS(2, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/2");
  EVALUATE_TRACE_POST_SUCCESS(3, LoopContains, "/contains", "#/contains", "");

  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 0,
      "The value was expected to be of type string but it was of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 2,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 3,
      "The array value was expected to contain 1 to 2 items that validate "
      "against the given subschema");
}

TEST(JSONSchema_compile_2019_09, contains_9) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "maxContains": 2,
    "contains": { "type": "string" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ \"foo\", \"bar\", \"baz\" ]")};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 4);

  EVALUATE_TRACE_PRE(0, LoopContains, "/contains", "#/contains", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/0");
  EVALUATE_TRACE_PRE(2, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/1");
  EVALUATE_TRACE_PRE(3, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/2");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/0");
  EVALUATE_TRACE_POST_SUCCESS(1, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/1");
  EVALUATE_TRACE_POST_SUCCESS(2, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/2");
  EVALUATE_TRACE_POST_FAILURE(3, LoopContains, "/contains", "#/contains", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 2,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 3,
      "The array value was expected to contain 1 to 2 items that validate "
      "against the given subschema");
}

TEST(JSONSchema_compile_2019_09, contains_10) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "minContains": 2,
    "maxContains": 2,
    "contains": { "type": "string" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ \"foo\", \"bar\", 1 ]")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 4);

  EVALUATE_TRACE_PRE(0, LoopContains, "/contains", "#/contains", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/0");
  EVALUATE_TRACE_PRE(2, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/1");
  EVALUATE_TRACE_PRE(3, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/2");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/0");
  EVALUATE_TRACE_POST_SUCCESS(1, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/1");
  EVALUATE_TRACE_POST_FAILURE(2, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/2");
  EVALUATE_TRACE_POST_SUCCESS(3, LoopContains, "/contains", "#/contains", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "The value was expected to be of type string but it was of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 3,
      "The array value was expected to contain exactly 2 items that validate "
      "against the given subschema");
}

TEST(JSONSchema_compile_2019_09, contains_11) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "minContains": 2,
    "maxContains": 2,
    "contains": { "type": "string" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ \"foo\", \"bar\", \"baz\" ]")};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 4);

  EVALUATE_TRACE_PRE(0, LoopContains, "/contains", "#/contains", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/0");
  EVALUATE_TRACE_PRE(2, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/1");
  EVALUATE_TRACE_PRE(3, AssertionTypeStrict, "/contains/type",
                     "#/contains/type", "/2");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/0");
  EVALUATE_TRACE_POST_SUCCESS(1, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/1");
  EVALUATE_TRACE_POST_SUCCESS(2, AssertionTypeStrict, "/contains/type",
                              "#/contains/type", "/2");
  EVALUATE_TRACE_POST_FAILURE(3, LoopContains, "/contains", "#/contains", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 2,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 3,
      "The array value was expected to contain exactly 2 items that validate "
      "against the given subschema");
}

TEST(JSONSchema_compile_2019_09, contains_12) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "minContains": 3,
    "maxContains": 2,
    "contains": { "type": "string" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ \"foo\", \"bar\", \"baz\" ]")};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 1);

  EVALUATE_TRACE_PRE(0, AssertionFail, "/contains", "#/contains", "");
  EVALUATE_TRACE_POST_FAILURE(0, AssertionFail, "/contains", "#/contains", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0, "Abort evaluation on failure");
}

TEST(JSONSchema_compile_2019_09, title) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "title": "My title"
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);

  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(0, "/title", "#/title", "");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(0, "/title", "#/title", "", "My title");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The title of the instance is \"My title\"");
}

TEST(JSONSchema_compile_2019_09, title_with_core_keywords) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "https://example.com",
    "$comment": "My comment",
    "$anchor": "main",
    "title": "My title"
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);

  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(0, "/title",
                                       "https://example.com#/title", "");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(
      0, "/title", "https://example.com#/title", "", "My title");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The title of the instance is \"My title\"");
}

TEST(JSONSchema_compile_2019_09, description) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "description": "My description"
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);

  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(0, "/description", "#/description", "");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(0, "/description", "#/description", "",
                                        "My description");

  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 0, "The description of the instance is \"My description\"");
}

TEST(JSONSchema_compile_2019_09, default) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "default": 1
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);

  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(0, "/default", "#/default", "");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(0, "/default", "#/default", "", 1);

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The default value of the instance is 1");
}

TEST(JSONSchema_compile_2019_09, deprecated_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "deprecated": true
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);

  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(0, "/deprecated", "#/deprecated", "");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(0, "/deprecated", "#/deprecated", "",
                                        true);

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The instance is considered deprecated");
}

TEST(JSONSchema_compile_2019_09, deprecated_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "deprecated": false
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);

  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(0, "/deprecated", "#/deprecated", "");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(0, "/deprecated", "#/deprecated", "",
                                        false);

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The instance is not considered deprecated");
}

TEST(JSONSchema_compile_2019_09, readOnly_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "readOnly": false
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);

  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(0, "/readOnly", "#/readOnly", "");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(0, "/readOnly", "#/readOnly", "",
                                        false);

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The instance is not considered read-only");
}

TEST(JSONSchema_compile_2019_09, readOnly_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "readOnly": true
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);

  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(0, "/readOnly", "#/readOnly", "");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(0, "/readOnly", "#/readOnly", "", true);

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The instance is considered read-only");
}

TEST(JSONSchema_compile_2019_09, writeOnly_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "writeOnly": false
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);

  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(0, "/writeOnly", "#/writeOnly", "");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(0, "/writeOnly", "#/writeOnly", "",
                                        false);

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The instance is not considered write-only");
}

TEST(JSONSchema_compile_2019_09, writeOnly_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "writeOnly": true
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);

  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(0, "/writeOnly", "#/writeOnly", "");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(0, "/writeOnly", "#/writeOnly", "",
                                        true);

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The instance is considered write-only");
}

TEST(JSONSchema_compile_2019_09, examples) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "examples": [ 1, 2, 3 ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);

  auto examples{sourcemeta::jsontoolkit::JSON::make_array()};
  examples.push_back(sourcemeta::jsontoolkit::JSON{1});
  examples.push_back(sourcemeta::jsontoolkit::JSON{2});
  examples.push_back(sourcemeta::jsontoolkit::JSON{3});

  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(0, "/examples", "#/examples", "");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(0, "/examples", "#/examples", "",
                                        examples);

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "Examples of the instance are 1, 2, and 3");
}

TEST(JSONSchema_compile_2019_09, contentEncoding) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "contentEncoding": "base64"
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{"foo"};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);

  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(0, "/contentEncoding",
                                       "#/contentEncoding", "");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(0, "/contentEncoding",
                                        "#/contentEncoding", "", "base64");

  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 0, "The content encoding of the instance is \"base64\"");
}

TEST(JSONSchema_compile_2019_09, contentMediaType) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "contentMediaType": "application/json"
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{"foo"};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);

  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(0, "/contentMediaType",
                                       "#/contentMediaType", "");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(
      0, "/contentMediaType", "#/contentMediaType", "", "application/json");

  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 0,
      "The content media type of the instance is \"application/json\"");
}

TEST(JSONSchema_compile_2019_09, contentSchema) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "contentSchema": { "type": "string" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{"foo"};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);

  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(0, "/contentSchema", "#/contentSchema",
                                       "");

  auto content_schema{sourcemeta::jsontoolkit::JSON::make_object()};
  content_schema.assign("type", sourcemeta::jsontoolkit::JSON{"string"});

  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(0, "/contentSchema", "#/contentSchema",
                                        "", content_schema);

  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 0,
      "When decoded, the instance is expected to validate against the schema "
      "{\"type\":\"string\"}");
}

TEST(JSONSchema_compile_2019_09, unknown_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "fooBar": "baz"
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{"foo"};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);

  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(0, "/fooBar", "#/fooBar", "");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(0, "/fooBar", "#/fooBar", "", "baz");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The unrecognized keyword \"fooBar\" was "
                               "collected as the annotation \"baz\"");
}

TEST(JSONSchema_compile_2019_09, unknown_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "x-test": 1
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{"foo"};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);

  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(0, "/x-test", "#/x-test", "");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(0, "/x-test", "#/x-test", "", 1);

  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 0,
      "The unrecognized keyword \"x-test\" was collected as the annotation 1");
}

TEST(JSONSchema_compile_2019_09, items_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
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

TEST(JSONSchema_compile_2019_09, items_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
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
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 5);

  EVALUATE_TRACE_PRE(0, LoopItems, "/items", "#/items", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/items/type", "#/items/type",
                     "/0");
  EVALUATE_TRACE_PRE(2, AssertionTypeStrict, "/items/type", "#/items/type",
                     "/1");
  EVALUATE_TRACE_PRE(3, AssertionTypeStrict, "/items/type", "#/items/type",
                     "/2");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(4, "/items", "#/items", "");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionTypeStrict, "/items/type",
                              "#/items/type", "/0");
  EVALUATE_TRACE_POST_SUCCESS(1, AssertionTypeStrict, "/items/type",
                              "#/items/type", "/1");
  EVALUATE_TRACE_POST_SUCCESS(2, AssertionTypeStrict, "/items/type",
                              "#/items/type", "/2");
  EVALUATE_TRACE_POST_SUCCESS(3, LoopItems, "/items", "#/items", "");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(4, "/items", "#/items", "", true);

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 2,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 3,
                               "Every item in the array value was expected to "
                               "validate against the given subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 4,
      "At least one item of the array value successfully validated against the "
      "given subschema");
}

TEST(JSONSchema_compile_2019_09, items_3) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
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

  EVALUATE_TRACE_PRE(0, LoopItems, "/items", "#/items", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/items/type", "#/items/type",
                     "/0");
  EVALUATE_TRACE_PRE(2, AssertionTypeStrict, "/items/type", "#/items/type",
                     "/1");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionTypeStrict, "/items/type",
                              "#/items/type", "/0");
  EVALUATE_TRACE_POST_FAILURE(1, AssertionTypeStrict, "/items/type",
                              "#/items/type", "/1");
  EVALUATE_TRACE_POST_FAILURE(2, LoopItems, "/items", "#/items", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 1,
      "The value was expected to be of type string but it was of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 2,
                               "Every item in the array value was expected to "
                               "validate against the given subschema");
}

TEST(JSONSchema_compile_2019_09, items_4) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "items": [ { "type": "string" } ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 0);
}

TEST(JSONSchema_compile_2019_09, items_5) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "items": [ { "type": "integer" }, { "type": "boolean" } ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[]")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);

  EVALUATE_TRACE_PRE(0, LogicalAnd, "/items", "#/items", "");
  EVALUATE_TRACE_POST_SUCCESS(0, LogicalAnd, "/items", "#/items", "");

  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 0,
      "The first 2 items of the array value were expected to validate against "
      "the corresponding subschemas");
}

TEST(JSONSchema_compile_2019_09, items_6) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "items": [ { "type": "integer" }, { "type": "boolean" } ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ 5 ]")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 3);

  EVALUATE_TRACE_PRE(0, LogicalAnd, "/items", "#/items", "");
  EVALUATE_TRACE_PRE(1, AssertionType, "/items/0/type", "#/items/0/type", "/0");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(2, "/items", "#/items", "");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionType, "/items/0/type",
                              "#/items/0/type", "/0");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(1, "/items", "#/items", "", 0);
  EVALUATE_TRACE_POST_SUCCESS(2, LogicalAnd, "/items", "#/items", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 1,
      "The first item of the array value successfully validated against the "
      "first positional subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "The first 2 items of the array value were expected to validate against "
      "the corresponding subschemas");
}

TEST(JSONSchema_compile_2019_09, items_7) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "items": [ { "type": "integer" }, { "type": "boolean" } ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ 5, true, \"extra\" ]")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 4);

  EVALUATE_TRACE_PRE(0, LogicalAnd, "/items", "#/items", "");
  EVALUATE_TRACE_PRE(1, AssertionType, "/items/0/type", "#/items/0/type", "/0");
  EVALUATE_TRACE_PRE(2, AssertionTypeStrict, "/items/1/type", "#/items/1/type",
                     "/1");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(3, "/items", "#/items", "");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionType, "/items/0/type",
                              "#/items/0/type", "/0");
  EVALUATE_TRACE_POST_SUCCESS(1, AssertionTypeStrict, "/items/1/type",
                              "#/items/1/type", "/1");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(2, "/items", "#/items", "", 1);
  EVALUATE_TRACE_POST_SUCCESS(3, LogicalAnd, "/items", "#/items", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The value was expected to be of type boolean");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "The first 2 items of the array value successfully validated against the "
      "given positional subschemas");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 3,
      "The first 2 items of the array value were expected to validate against "
      "the corresponding subschemas");
}

TEST(JSONSchema_compile_2019_09, items_8) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "items": [ { "type": "integer" }, { "type": "boolean" } ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ 5, 1, \"extra\" ]")};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 3);

  EVALUATE_TRACE_PRE(0, LogicalAnd, "/items", "#/items", "");
  EVALUATE_TRACE_PRE(1, AssertionType, "/items/0/type", "#/items/0/type", "/0");
  EVALUATE_TRACE_PRE(2, AssertionTypeStrict, "/items/1/type", "#/items/1/type",
                     "/1");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionType, "/items/0/type",
                              "#/items/0/type", "/0");
  EVALUATE_TRACE_POST_FAILURE(1, AssertionTypeStrict, "/items/1/type",
                              "#/items/1/type", "/1");
  EVALUATE_TRACE_POST_FAILURE(2, LogicalAnd, "/items", "#/items", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The value was expected to be of type boolean "
                               "but it was of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "The first 2 items of the array value were expected to validate against "
      "the corresponding subschemas");
}

TEST(JSONSchema_compile_2019_09, items_9) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "items": [ { "type": "integer" }, { "type": "boolean" } ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ 5, true ]")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 4);

  EVALUATE_TRACE_PRE(0, LogicalAnd, "/items", "#/items", "");
  EVALUATE_TRACE_PRE(1, AssertionType, "/items/0/type", "#/items/0/type", "/0");
  EVALUATE_TRACE_PRE(2, AssertionTypeStrict, "/items/1/type", "#/items/1/type",
                     "/1");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(3, "/items", "#/items", "");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionType, "/items/0/type",
                              "#/items/0/type", "/0");
  EVALUATE_TRACE_POST_SUCCESS(1, AssertionTypeStrict, "/items/1/type",
                              "#/items/1/type", "/1");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(2, "/items", "#/items", "", true);
  EVALUATE_TRACE_POST_SUCCESS(3, LogicalAnd, "/items", "#/items", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The value was expected to be of type boolean");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "At least one item of the array value successfully validated against the "
      "given subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 3,
      "The first 2 items of the array value were expected to validate against "
      "the corresponding subschemas");
}

TEST(JSONSchema_compile_2019_09, additionalItems_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalItems": {
      "type": "string"
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ \"foo\", \"bar\", \"baz\" ]")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 0);
}

TEST(JSONSchema_compile_2019_09, additionalItems_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalItems": { "type": "integer" },
    "items": { "type": "string" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ \"foo\", \"bar\", \"baz\" ]")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 5);

  EVALUATE_TRACE_PRE(0, LoopItems, "/items", "#/items", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/items/type", "#/items/type",
                     "/0");
  EVALUATE_TRACE_PRE(2, AssertionTypeStrict, "/items/type", "#/items/type",
                     "/1");
  EVALUATE_TRACE_PRE(3, AssertionTypeStrict, "/items/type", "#/items/type",
                     "/2");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(4, "/items", "#/items", "");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionTypeStrict, "/items/type",
                              "#/items/type", "/0");
  EVALUATE_TRACE_POST_SUCCESS(1, AssertionTypeStrict, "/items/type",
                              "#/items/type", "/1");
  EVALUATE_TRACE_POST_SUCCESS(2, AssertionTypeStrict, "/items/type",
                              "#/items/type", "/2");
  EVALUATE_TRACE_POST_SUCCESS(3, LoopItems, "/items", "#/items", "");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(4, "/items", "#/items", "", true);

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 2,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 3,
                               "Every item in the array value was expected to "
                               "validate against the given subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 4,
      "At least one item of the array value successfully validated against the "
      "given subschema");
}

TEST(JSONSchema_compile_2019_09, additionalItems_3) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalItems": { "type": "string" },
    "items": [
      { "type": "boolean" },
      { "type": "integer" }
    ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ true, 5 ]")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 4);

  EVALUATE_TRACE_PRE(0, LogicalAnd, "/items", "#/items", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/items/0/type", "#/items/0/type",
                     "/0");
  EVALUATE_TRACE_PRE(2, AssertionType, "/items/1/type", "#/items/1/type", "/1");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(3, "/items", "#/items", "");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionTypeStrict, "/items/0/type",
                              "#/items/0/type", "/0");
  EVALUATE_TRACE_POST_SUCCESS(1, AssertionType, "/items/1/type",
                              "#/items/1/type", "/1");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(2, "/items", "#/items", "", true);
  EVALUATE_TRACE_POST_SUCCESS(3, LogicalAnd, "/items", "#/items", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type boolean");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The value was expected to be of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "At least one item of the array value successfully validated against the "
      "given subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 3,
      "The first 2 items of the array value were expected to validate against "
      "the corresponding subschemas");
}

TEST(JSONSchema_compile_2019_09, additionalItems_4) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalItems": { "type": "string" },
    "items": [
      { "type": "boolean" },
      { "type": "integer" }
    ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ true, 5, \"foo\", \"bar\" ]")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 8);

  EVALUATE_TRACE_PRE(0, LogicalAnd, "/items", "#/items", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/items/0/type", "#/items/0/type",
                     "/0");
  EVALUATE_TRACE_PRE(2, AssertionType, "/items/1/type", "#/items/1/type", "/1");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(3, "/items", "#/items", "");
  EVALUATE_TRACE_PRE(4, LoopItems, "/additionalItems", "#/additionalItems", "");
  EVALUATE_TRACE_PRE(5, AssertionTypeStrict, "/additionalItems/type",
                     "#/additionalItems/type", "/2");
  EVALUATE_TRACE_PRE(6, AssertionTypeStrict, "/additionalItems/type",
                     "#/additionalItems/type", "/3");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(7, "/additionalItems",
                                       "#/additionalItems", "");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionTypeStrict, "/items/0/type",
                              "#/items/0/type", "/0");
  EVALUATE_TRACE_POST_SUCCESS(1, AssertionType, "/items/1/type",
                              "#/items/1/type", "/1");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(2, "/items", "#/items", "", 1);
  EVALUATE_TRACE_POST_SUCCESS(3, LogicalAnd, "/items", "#/items", "");
  EVALUATE_TRACE_POST_SUCCESS(4, AssertionTypeStrict, "/additionalItems/type",
                              "#/additionalItems/type", "/2");
  EVALUATE_TRACE_POST_SUCCESS(5, AssertionTypeStrict, "/additionalItems/type",
                              "#/additionalItems/type", "/3");
  EVALUATE_TRACE_POST_SUCCESS(6, LoopItems, "/additionalItems",
                              "#/additionalItems", "");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(7, "/additionalItems",
                                        "#/additionalItems", "", true);

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type boolean");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The value was expected to be of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "The first 2 items of the array value successfully validated against the "
      "given positional subschemas");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 3,
      "The first 2 items of the array value were expected to validate against "
      "the corresponding subschemas");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 4,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 5,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 6,
      "Every item in the array value except for the first 2 was expected to "
      "validate against the given subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 7,
      "At least one item of the array value successfully validated against the "
      "given subschema");
}

TEST(JSONSchema_compile_2019_09, additionalItems_5) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalItems": { "type": "string" },
    "items": [
      { "type": "boolean" },
      { "type": "integer" }
    ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ true, 5, 6, \"bar\" ]")};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 6);

  EVALUATE_TRACE_PRE(0, LogicalAnd, "/items", "#/items", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/items/0/type", "#/items/0/type",
                     "/0");
  EVALUATE_TRACE_PRE(2, AssertionType, "/items/1/type", "#/items/1/type", "/1");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(3, "/items", "#/items", "");
  EVALUATE_TRACE_PRE(4, LoopItems, "/additionalItems", "#/additionalItems", "");
  EVALUATE_TRACE_PRE(5, AssertionTypeStrict, "/additionalItems/type",
                     "#/additionalItems/type", "/2");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionTypeStrict, "/items/0/type",
                              "#/items/0/type", "/0");
  EVALUATE_TRACE_POST_SUCCESS(1, AssertionType, "/items/1/type",
                              "#/items/1/type", "/1");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(2, "/items", "#/items", "", 1);
  EVALUATE_TRACE_POST_SUCCESS(3, LogicalAnd, "/items", "#/items", "");
  EVALUATE_TRACE_POST_FAILURE(4, AssertionTypeStrict, "/additionalItems/type",
                              "#/additionalItems/type", "/2");
  EVALUATE_TRACE_POST_FAILURE(5, LoopItems, "/additionalItems",
                              "#/additionalItems", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type boolean");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The value was expected to be of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "The first 2 items of the array value successfully validated against the "
      "given positional subschemas");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 3,
      "The first 2 items of the array value were expected to validate against "
      "the corresponding subschemas");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 4,
      "The value was expected to be of type string but it was of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 5,
      "Every item in the array value except for the first 2 was expected to "
      "validate against the given subschema");
}

TEST(JSONSchema_compile_2019_09, unevaluatedProperties_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "unevaluatedProperties": { "type": "boolean" },
    "properties": {
      "foo": { "type": "string" }
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": \"baz\", \"bar\": true }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 6);

  EVALUATE_TRACE_PRE(0, LogicalAnd, "/properties", "#/properties", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/properties/foo/type",
                     "#/properties/foo/type", "/foo");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(2, "/properties", "#/properties", "");
  EVALUATE_TRACE_PRE(3, LoopProperties, "/unevaluatedProperties",
                     "#/unevaluatedProperties", "");
  EVALUATE_TRACE_PRE(4, AssertionTypeStrict, "/unevaluatedProperties/type",
                     "#/unevaluatedProperties/type", "/bar");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(5, "/unevaluatedProperties",
                                       "#/unevaluatedProperties", "");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionTypeStrict, "/properties/foo/type",
                              "#/properties/foo/type", "/foo");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(1, "/properties", "#/properties", "",
                                        "foo");
  EVALUATE_TRACE_POST_SUCCESS(2, LogicalAnd, "/properties", "#/properties", "");
  EVALUATE_TRACE_POST_SUCCESS(3, AssertionTypeStrict,
                              "/unevaluatedProperties/type",
                              "#/unevaluatedProperties/type", "/bar");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(4, "/unevaluatedProperties",
                                        "#/unevaluatedProperties", "", "bar");
  EVALUATE_TRACE_POST_SUCCESS(5, LoopProperties, "/unevaluatedProperties",
                              "#/unevaluatedProperties", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The object property \"foo\" successfully "
                               "validated against its property subschema");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 2,
                               "The object value was expected to validate "
                               "against the single defined property subschema");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 3,
                               "The value was expected to be of type boolean");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 4,
      "The object property \"bar\" successfully validated against the "
      "subschema for unevaluated properties");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 5,
                               "Loop over the properties of the target object");
}

TEST(JSONSchema_compile_2019_09, unevaluatedProperties_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "unevaluatedProperties": { "type": "boolean" },
    "allOf": [
      {
        "properties": {
          "foo": { "type": "string" }
        }
      }
    ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": \"baz\", \"bar\": true }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 7);

  EVALUATE_TRACE_PRE(0, LogicalAnd, "/allOf", "#/allOf", "");
  EVALUATE_TRACE_PRE(1, LogicalAnd, "/allOf/0/properties",
                     "#/allOf/0/properties", "");
  EVALUATE_TRACE_PRE(2, AssertionTypeStrict, "/allOf/0/properties/foo/type",
                     "#/allOf/0/properties/foo/type", "/foo");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(3, "/allOf/0/properties",
                                       "#/allOf/0/properties", "");
  EVALUATE_TRACE_PRE(4, LoopProperties, "/unevaluatedProperties",
                     "#/unevaluatedProperties", "");
  EVALUATE_TRACE_PRE(5, AssertionTypeStrict, "/unevaluatedProperties/type",
                     "#/unevaluatedProperties/type", "/bar");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(6, "/unevaluatedProperties",
                                       "#/unevaluatedProperties", "");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionTypeStrict,
                              "/allOf/0/properties/foo/type",
                              "#/allOf/0/properties/foo/type", "/foo");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(1, "/allOf/0/properties",
                                        "#/allOf/0/properties", "", "foo");
  EVALUATE_TRACE_POST_SUCCESS(2, LogicalAnd, "/allOf/0/properties",
                              "#/allOf/0/properties", "");
  EVALUATE_TRACE_POST_SUCCESS(3, LogicalAnd, "/allOf", "#/allOf", "");
  EVALUATE_TRACE_POST_SUCCESS(4, AssertionTypeStrict,
                              "/unevaluatedProperties/type",
                              "#/unevaluatedProperties/type", "/bar");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(5, "/unevaluatedProperties",
                                        "#/unevaluatedProperties", "", "bar");
  EVALUATE_TRACE_POST_SUCCESS(6, LoopProperties, "/unevaluatedProperties",
                              "#/unevaluatedProperties", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The object property \"foo\" successfully "
                               "validated against its property subschema");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 2,
                               "The object value was expected to validate "
                               "against the single defined property subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 3,
      "The object value was expected to validate against the given subschema");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 4,
                               "The value was expected to be of type boolean");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 5,
      "The object property \"bar\" successfully validated against the "
      "subschema for unevaluated properties");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 6,
                               "Loop over the properties of the target object");
}

TEST(JSONSchema_compile_2019_09, unevaluatedProperties_3) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "unevaluatedProperties": { "type": "boolean" },
    "allOf": [
      {
        "properties": {
          "foo": { "type": "string" }
        }
      }
    ]
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": \"baz\", \"bar\": 1 }")};

  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 6);

  EVALUATE_TRACE_PRE(0, LogicalAnd, "/allOf", "#/allOf", "");
  EVALUATE_TRACE_PRE(1, LogicalAnd, "/allOf/0/properties",
                     "#/allOf/0/properties", "");
  EVALUATE_TRACE_PRE(2, AssertionTypeStrict, "/allOf/0/properties/foo/type",
                     "#/allOf/0/properties/foo/type", "/foo");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(3, "/allOf/0/properties",
                                       "#/allOf/0/properties", "");
  EVALUATE_TRACE_PRE(4, LoopProperties, "/unevaluatedProperties",
                     "#/unevaluatedProperties", "");
  EVALUATE_TRACE_PRE(5, AssertionTypeStrict, "/unevaluatedProperties/type",
                     "#/unevaluatedProperties/type", "/bar");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionTypeStrict,
                              "/allOf/0/properties/foo/type",
                              "#/allOf/0/properties/foo/type", "/foo");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(1, "/allOf/0/properties",
                                        "#/allOf/0/properties", "", "foo");
  EVALUATE_TRACE_POST_SUCCESS(2, LogicalAnd, "/allOf/0/properties",
                              "#/allOf/0/properties", "");
  EVALUATE_TRACE_POST_SUCCESS(3, LogicalAnd, "/allOf", "#/allOf", "");
  EVALUATE_TRACE_POST_FAILURE(4, AssertionTypeStrict,
                              "/unevaluatedProperties/type",
                              "#/unevaluatedProperties/type", "/bar");
  EVALUATE_TRACE_POST_FAILURE(5, LoopProperties, "/unevaluatedProperties",
                              "#/unevaluatedProperties", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "The object property \"foo\" successfully "
                               "validated against its property subschema");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 2,
                               "The object value was expected to validate "
                               "against the single defined property subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 3,
      "The object value was expected to validate against the given subschema");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 4,
                               "The value was expected to be of type boolean "
                               "but it was of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 5,
                               "Loop over the properties of the target object");
}

TEST(JSONSchema_compile_2019_09, unevaluatedItems_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "unevaluatedItems": { "type": "boolean" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[]")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);

  EVALUATE_TRACE_PRE(0, LoopItemsFromAnnotationIndex, "/unevaluatedItems",
                     "#/unevaluatedItems", "");
  EVALUATE_TRACE_POST_SUCCESS(0, LoopItemsFromAnnotationIndex,
                              "/unevaluatedItems", "#/unevaluatedItems", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "Loop over the items of the target array "
                               "potentially bound by an annotation result");
}

TEST(JSONSchema_compile_2019_09, unevaluatedItems_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "unevaluatedItems": { "type": "boolean" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ true, false ]")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 4);
  EVALUATE_TRACE_PRE(0, LoopItemsFromAnnotationIndex, "/unevaluatedItems",
                     "#/unevaluatedItems", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/unevaluatedItems/type",
                     "#/unevaluatedItems/type", "/0");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(2, "/unevaluatedItems",
                                       "#/unevaluatedItems", "");
  EVALUATE_TRACE_PRE(3, AssertionTypeStrict, "/unevaluatedItems/type",
                     "#/unevaluatedItems/type", "/1");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionTypeStrict, "/unevaluatedItems/type",
                              "#/unevaluatedItems/type", "/0");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(1, "/unevaluatedItems",
                                        "#/unevaluatedItems", "", true);
  EVALUATE_TRACE_POST_SUCCESS(2, AssertionTypeStrict, "/unevaluatedItems/type",
                              "#/unevaluatedItems/type", "/1");
  EVALUATE_TRACE_POST_SUCCESS(3, LoopItemsFromAnnotationIndex,
                              "/unevaluatedItems", "#/unevaluatedItems", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type boolean");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 1,
      "At least one item of the array value successfully validated against the "
      "subschema for unevaluated items");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 2,
                               "The value was expected to be of type boolean");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 3,
                               "Loop over the items of the target array "
                               "potentially bound by an annotation result");
}

TEST(JSONSchema_compile_2019_09, unevaluatedItems_3) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "items": { "type": "string" },
    "unevaluatedItems": { "type": "boolean" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ \"foo\" ]")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 3);

  EVALUATE_TRACE_PRE(0, LoopItems, "/items", "#/items", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/items/type", "#/items/type",
                     "/0");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(2, "/items", "#/items", "");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionTypeStrict, "/items/type",
                              "#/items/type", "/0");
  EVALUATE_TRACE_POST_SUCCESS(1, LoopItems, "/items", "#/items", "");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(2, "/items", "#/items", "", true);

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1,
                               "Every item in the array value was expected to "
                               "validate against the given subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "At least one item of the array value successfully validated against the "
      "given subschema");
}

TEST(JSONSchema_compile_2019_09, unevaluatedItems_4) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "items": [ { "type": "string" }, { "type": "string" } ],
    "unevaluatedItems": { "type": "boolean" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ \"foo\" ]")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 4);

  EVALUATE_TRACE_PRE(0, LogicalAnd, "/items", "#/items", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/items/0/type", "#/items/0/type",
                     "/0");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(2, "/items", "#/items", "");
  EVALUATE_TRACE_PRE(3, LoopItemsFromAnnotationIndex, "/unevaluatedItems",
                     "#/unevaluatedItems", "");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionTypeStrict, "/items/0/type",
                              "#/items/0/type", "/0");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(1, "/items", "#/items", "", 0);
  EVALUATE_TRACE_POST_SUCCESS(2, LogicalAnd, "/items", "#/items", "");
  EVALUATE_TRACE_POST_SUCCESS(3, LoopItemsFromAnnotationIndex,
                              "/unevaluatedItems", "#/unevaluatedItems", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 1,
      "The first item of the array value successfully validated against the "
      "first positional subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "The first 2 items of the array value were expected to validate against "
      "the corresponding subschemas");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 3,
                               "Loop over the items of the target array "
                               "potentially bound by an annotation result");
}

TEST(JSONSchema_compile_2019_09, unevaluatedItems_5) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "items": [ { "type": "string" } ],
    "unevaluatedItems": { "type": "boolean" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ \"foo\" ]")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 3);

  EVALUATE_TRACE_PRE(0, LogicalAnd, "/items", "#/items", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/items/0/type", "#/items/0/type",
                     "/0");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(2, "/items", "#/items", "");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionTypeStrict, "/items/0/type",
                              "#/items/0/type", "/0");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(1, "/items", "#/items", "", true);
  EVALUATE_TRACE_POST_SUCCESS(2, LogicalAnd, "/items", "#/items", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 1,
      "At least one item of the array value successfully validated against the "
      "given subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "The first item of the array value was expected to validate against the "
      "corresponding subschemas");
}

TEST(JSONSchema_compile_2019_09, unevaluatedItems_6) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "items": [ { "type": "string" } ],
    "unevaluatedItems": { "type": "boolean" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ \"foo\", true ]")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 6);

  EVALUATE_TRACE_PRE(0, LogicalAnd, "/items", "#/items", "");
  EVALUATE_TRACE_PRE(1, AssertionTypeStrict, "/items/0/type", "#/items/0/type",
                     "/0");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(2, "/items", "#/items", "");
  EVALUATE_TRACE_PRE(3, LoopItemsFromAnnotationIndex, "/unevaluatedItems",
                     "#/unevaluatedItems", "");
  EVALUATE_TRACE_PRE(4, AssertionTypeStrict, "/unevaluatedItems/type",
                     "#/unevaluatedItems/type", "/1");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(5, "/unevaluatedItems",
                                       "#/unevaluatedItems", "");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionTypeStrict, "/items/0/type",
                              "#/items/0/type", "/0");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(1, "/items", "#/items", "", 0);
  EVALUATE_TRACE_POST_SUCCESS(2, LogicalAnd, "/items", "#/items", "");
  EVALUATE_TRACE_POST_SUCCESS(3, AssertionTypeStrict, "/unevaluatedItems/type",
                              "#/unevaluatedItems/type", "/1");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(4, "/unevaluatedItems",
                                        "#/unevaluatedItems", "", true);
  EVALUATE_TRACE_POST_SUCCESS(5, LoopItemsFromAnnotationIndex,
                              "/unevaluatedItems", "#/unevaluatedItems", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 1,
      "The first item of the array value successfully validated against the "
      "first positional subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "The first item of the array value was expected to validate against the "
      "corresponding subschemas");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 3,
                               "The value was expected to be of type boolean");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 4,
      "At least one item of the array value successfully validated against the "
      "subschema for unevaluated items");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 5,
                               "Loop over the items of the target array "
                               "potentially bound by an annotation result");
}

TEST(JSONSchema_compile_2019_09, unevaluatedItems_7) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "allOf": [
      { "items": [ { "type": "string" } ] }
    ],
    "unevaluatedItems": { "type": "boolean" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ \"foo\", true ]")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 7);

  EVALUATE_TRACE_PRE(0, LogicalAnd, "/allOf", "#/allOf", "");
  EVALUATE_TRACE_PRE(1, LogicalAnd, "/allOf/0/items", "#/allOf/0/items", "");
  EVALUATE_TRACE_PRE(2, AssertionTypeStrict, "/allOf/0/items/0/type",
                     "#/allOf/0/items/0/type", "/0");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(3, "/allOf/0/items", "#/allOf/0/items",
                                       "");
  EVALUATE_TRACE_PRE(4, LoopItemsFromAnnotationIndex, "/unevaluatedItems",
                     "#/unevaluatedItems", "");
  EVALUATE_TRACE_PRE(5, AssertionTypeStrict, "/unevaluatedItems/type",
                     "#/unevaluatedItems/type", "/1");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(6, "/unevaluatedItems",
                                       "#/unevaluatedItems", "");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionTypeStrict, "/allOf/0/items/0/type",
                              "#/allOf/0/items/0/type", "/0");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(1, "/allOf/0/items", "#/allOf/0/items",
                                        "", 0);
  EVALUATE_TRACE_POST_SUCCESS(2, LogicalAnd, "/allOf/0/items",
                              "#/allOf/0/items", "");
  EVALUATE_TRACE_POST_SUCCESS(3, LogicalAnd, "/allOf", "#/allOf", "");
  EVALUATE_TRACE_POST_SUCCESS(4, AssertionTypeStrict, "/unevaluatedItems/type",
                              "#/unevaluatedItems/type", "/1");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(5, "/unevaluatedItems",
                                        "#/unevaluatedItems", "", true);
  EVALUATE_TRACE_POST_SUCCESS(6, LoopItemsFromAnnotationIndex,
                              "/unevaluatedItems", "#/unevaluatedItems", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 1,
      "The first item of the array value successfully validated against the "
      "first positional subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "The first item of the array value was expected to validate against the "
      "corresponding subschemas");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 3,
      "The array value was expected to validate against the given subschema");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 4,
                               "The value was expected to be of type boolean");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 5,
      "At least one item of the array value successfully validated against the "
      "subschema for unevaluated items");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 6,
                               "Loop over the items of the target array "
                               "potentially bound by an annotation result");
}

TEST(JSONSchema_compile_2019_09, unevaluatedItems_8) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "allOf": [
      { "items": [ { "type": "string" } ] }
    ],
    "unevaluatedItems": { "type": "boolean" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ \"foo\", 1 ]")};

  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 6);

  EVALUATE_TRACE_PRE(0, LogicalAnd, "/allOf", "#/allOf", "");
  EVALUATE_TRACE_PRE(1, LogicalAnd, "/allOf/0/items", "#/allOf/0/items", "");
  EVALUATE_TRACE_PRE(2, AssertionTypeStrict, "/allOf/0/items/0/type",
                     "#/allOf/0/items/0/type", "/0");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(3, "/allOf/0/items", "#/allOf/0/items",
                                       "");
  EVALUATE_TRACE_PRE(4, LoopItemsFromAnnotationIndex, "/unevaluatedItems",
                     "#/unevaluatedItems", "");
  EVALUATE_TRACE_PRE(5, AssertionTypeStrict, "/unevaluatedItems/type",
                     "#/unevaluatedItems/type", "/1");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionTypeStrict, "/allOf/0/items/0/type",
                              "#/allOf/0/items/0/type", "/0");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(1, "/allOf/0/items", "#/allOf/0/items",
                                        "", 0);
  EVALUATE_TRACE_POST_SUCCESS(2, LogicalAnd, "/allOf/0/items",
                              "#/allOf/0/items", "");
  EVALUATE_TRACE_POST_SUCCESS(3, LogicalAnd, "/allOf", "#/allOf", "");
  EVALUATE_TRACE_POST_FAILURE(4, AssertionTypeStrict, "/unevaluatedItems/type",
                              "#/unevaluatedItems/type", "/1");
  EVALUATE_TRACE_POST_FAILURE(5, LoopItemsFromAnnotationIndex,
                              "/unevaluatedItems", "#/unevaluatedItems", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The value was expected to be of type string");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 1,
      "The first item of the array value successfully validated against the "
      "first positional subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "The first item of the array value was expected to validate against the "
      "corresponding subschemas");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 3,
      "The array value was expected to validate against the given subschema");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 4,
                               "The value was expected to be of type boolean "
                               "but it was of type integer");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 5,
                               "Loop over the items of the target array "
                               "potentially bound by an annotation result");
}

TEST(JSONSchema_compile_2019_09, recursiveRef_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": true,
    "additionalProperties": {
      "$recursiveRef": "#"
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1 }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 3);

  EVALUATE_TRACE_PRE(0, LoopProperties, "/additionalProperties",
                     "https://example.com/schema#/additionalProperties", "");
  EVALUATE_TRACE_PRE(
      1, ControlDynamicAnchorJump, "/additionalProperties/$recursiveRef",
      "https://example.com/schema#/additionalProperties/$recursiveRef", "/foo");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(
      2, "/additionalProperties",
      "https://example.com/schema#/additionalProperties", "");

  EVALUATE_TRACE_POST_SUCCESS(
      0, ControlDynamicAnchorJump, "/additionalProperties/$recursiveRef",
      "https://example.com/schema#/additionalProperties/$recursiveRef", "/foo");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(
      1, "/additionalProperties",
      "https://example.com/schema#/additionalProperties", "", "foo");
  EVALUATE_TRACE_POST_SUCCESS(
      2, LoopProperties, "/additionalProperties",
      "https://example.com/schema#/additionalProperties", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0, "Jump to a dynamic anchor");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 1,
      "The object property \"foo\" successfully validated against the "
      "additional properties subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "The object properties not covered by other adjacent object keywords are "
      "expected to validated against this subschema");
}

TEST(JSONSchema_compile_2019_09, recursiveRef_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": true,
    "minimum": 1,
    "additionalProperties": {
      "$recursiveRef": "#"
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1 }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 4);

  EVALUATE_TRACE_PRE(0, LoopProperties, "/additionalProperties",
                     "https://example.com/schema#/additionalProperties", "");
  EVALUATE_TRACE_PRE(
      1, ControlDynamicAnchorJump, "/additionalProperties/$recursiveRef",
      "https://example.com/schema#/additionalProperties/$recursiveRef", "/foo");
  EVALUATE_TRACE_PRE(2, AssertionGreaterEqual,
                     "/additionalProperties/$recursiveRef/minimum",
                     "https://example.com/schema#/minimum", "/foo");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(
      3, "/additionalProperties",
      "https://example.com/schema#/additionalProperties", "");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionGreaterEqual,
                              "/additionalProperties/$recursiveRef/minimum",
                              "https://example.com/schema#/minimum", "/foo");
  EVALUATE_TRACE_POST_SUCCESS(
      1, ControlDynamicAnchorJump, "/additionalProperties/$recursiveRef",
      "https://example.com/schema#/additionalProperties/$recursiveRef", "/foo");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(
      2, "/additionalProperties",
      "https://example.com/schema#/additionalProperties", "", "foo");
  EVALUATE_TRACE_POST_SUCCESS(
      3, LoopProperties, "/additionalProperties",
      "https://example.com/schema#/additionalProperties", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The target number is expected to be greater "
                               "than or equal to the given number");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1, "Jump to a dynamic anchor");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "The object property \"foo\" successfully validated against the "
      "additional properties subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 3,
      "The object properties not covered by other adjacent object keywords are "
      "expected to validated against this subschema");
}

TEST(JSONSchema_compile_2019_09, recursiveRef_3) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalProperties": {
      "$id": "nested",
      "$recursiveAnchor": true,
      "minimum": 1,
      "additionalProperties": {
        "$recursiveRef": "#"
      }
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1 }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 3);

  EVALUATE_TRACE_PRE(0, LoopProperties, "/additionalProperties",
                     "https://example.com/schema#/additionalProperties", "");
  EVALUATE_TRACE_PRE(1, AssertionGreaterEqual, "/additionalProperties/minimum",
                     "https://example.com/nested#/minimum", "/foo");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(
      2, "/additionalProperties",
      "https://example.com/schema#/additionalProperties", "");

  EVALUATE_TRACE_POST_SUCCESS(0, AssertionGreaterEqual,
                              "/additionalProperties/minimum",
                              "https://example.com/nested#/minimum", "/foo");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(
      1, "/additionalProperties",
      "https://example.com/schema#/additionalProperties", "", "foo");
  EVALUATE_TRACE_POST_SUCCESS(
      2, LoopProperties, "/additionalProperties",
      "https://example.com/schema#/additionalProperties", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The target number is expected to be greater "
                               "than or equal to the given number");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 1,
      "The object property \"foo\" successfully validated against the "
      "additional properties subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "The object properties not covered by other adjacent object keywords are "
      "expected to validated against this subschema");
}

TEST(JSONSchema_compile_2019_09, recursiveRef_4) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalProperties": {
      "$id": "nested",
      "$recursiveAnchor": true,
      "minimum": 1,
      "additionalProperties": {
        "$recursiveRef": "#"
      }
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": { \"bar\": 1 } }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 6);

  EVALUATE_TRACE_PRE(0, LoopProperties, "/additionalProperties",
                     "https://example.com/schema#/additionalProperties", "");
  EVALUATE_TRACE_PRE(
      1, LoopProperties, "/additionalProperties/additionalProperties",
      "https://example.com/nested#/additionalProperties", "/foo");
  EVALUATE_TRACE_PRE(
      2, ControlDynamicAnchorJump,
      "/additionalProperties/additionalProperties/$recursiveRef",
      "https://example.com/nested#/additionalProperties/$recursiveRef",
      "/foo/bar");
  EVALUATE_TRACE_PRE(
      3, AssertionGreaterEqual,
      "/additionalProperties/additionalProperties/$recursiveRef/minimum",
      "https://example.com/nested#/minimum", "/foo/bar");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(
      4, "/additionalProperties/additionalProperties",
      "https://example.com/nested#/additionalProperties", "/foo");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(
      5, "/additionalProperties",
      "https://example.com/schema#/additionalProperties", "");

  EVALUATE_TRACE_POST_SUCCESS(
      0, AssertionGreaterEqual,
      "/additionalProperties/additionalProperties/$recursiveRef/minimum",
      "https://example.com/nested#/minimum", "/foo/bar");
  EVALUATE_TRACE_POST_SUCCESS(
      1, ControlDynamicAnchorJump,
      "/additionalProperties/additionalProperties/$recursiveRef",
      "https://example.com/nested#/additionalProperties/$recursiveRef",
      "/foo/bar");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(
      2, "/additionalProperties/additionalProperties",
      "https://example.com/nested#/additionalProperties", "/foo", "bar");
  EVALUATE_TRACE_POST_SUCCESS(
      3, LoopProperties, "/additionalProperties/additionalProperties",
      "https://example.com/nested#/additionalProperties", "/foo");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(
      4, "/additionalProperties",
      "https://example.com/schema#/additionalProperties", "", "foo");
  EVALUATE_TRACE_POST_SUCCESS(
      5, LoopProperties, "/additionalProperties",
      "https://example.com/schema#/additionalProperties", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0,
                               "The target number is expected to be greater "
                               "than or equal to the given number");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 1, "Jump to a dynamic anchor");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "The object property \"bar\" successfully validated against the "
      "additional properties subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 3,
      "The object properties not covered by other adjacent object keywords are "
      "expected to validated against this subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 4,
      "The object property \"foo\" successfully validated against the "
      "additional properties subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 5,
      "The object properties not covered by other adjacent object keywords are "
      "expected to validated against this subschema");
}

TEST(JSONSchema_compile_2019_09, recursiveRef_5) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "items": {
      "$id": "nested",
      "$recursiveAnchor": true,
      "items": [
        { "$recursiveRef": "#" }
      ]
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ [ 1 ] ]")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 5);

  EVALUATE_TRACE_PRE(0, LoopItems, "/items",
                     "https://example.com/schema#/items", "");
  EVALUATE_TRACE_PRE(1, LogicalAnd, "/items/items",
                     "https://example.com/nested#/items", "/0");
  EVALUATE_TRACE_PRE(
      2, ControlDynamicAnchorJump, "/items/items/0/$recursiveRef",
      "https://example.com/nested#/items/0/$recursiveRef", "/0/0");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(
      3, "/items/items", "https://example.com/nested#/items", "/0");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(4, "/items",
                                       "https://example.com/schema#/items", "");

  EVALUATE_TRACE_POST_SUCCESS(
      0, ControlDynamicAnchorJump, "/items/items/0/$recursiveRef",
      "https://example.com/nested#/items/0/$recursiveRef", "/0/0");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(
      1, "/items/items", "https://example.com/nested#/items", "/0", true);
  EVALUATE_TRACE_POST_SUCCESS(2, LogicalAnd, "/items/items",
                              "https://example.com/nested#/items", "/0");
  EVALUATE_TRACE_POST_SUCCESS(3, LoopItems, "/items",
                              "https://example.com/schema#/items", "");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(
      4, "/items", "https://example.com/schema#/items", "", true);

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0, "Jump to a dynamic anchor");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 1,
      "At least one item of the array value successfully validated against the "
      "given subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "The first item of the array value was expected to validate against the "
      "corresponding subschemas");
  EVALUATE_TRACE_POST_DESCRIBE(instance, 3,
                               "Every item in the array value was expected to "
                               "validate against the given subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 4,
      "At least one item of the array value successfully validated against the "
      "given subschema");
}

TEST(JSONSchema_compile_2019_09, recursiveRef_6) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": true,
    "additionalProperties": {
      "$recursiveRef": "#"
    }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1 }")};

  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 3);

  EVALUATE_TRACE_PRE(0, LoopProperties, "/additionalProperties",
                     "#/additionalProperties", "");
  EVALUATE_TRACE_PRE(1, ControlDynamicAnchorJump,
                     "/additionalProperties/$recursiveRef",
                     "#/additionalProperties/$recursiveRef", "/foo");
  EVALUATE_TRACE_PRE_ANNOTATION_PUBLIC(2, "/additionalProperties",
                                       "#/additionalProperties", "");

  EVALUATE_TRACE_POST_SUCCESS(0, ControlDynamicAnchorJump,
                              "/additionalProperties/$recursiveRef",
                              "#/additionalProperties/$recursiveRef", "/foo");
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(1, "/additionalProperties",
                                        "#/additionalProperties", "", "foo");
  EVALUATE_TRACE_POST_SUCCESS(2, LoopProperties, "/additionalProperties",
                              "#/additionalProperties", "");

  EVALUATE_TRACE_POST_DESCRIBE(instance, 0, "Jump to a dynamic anchor");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 1,
      "The object property \"foo\" successfully validated against the "
      "additional properties subschema");
  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 2,
      "The object properties not covered by other adjacent object keywords are "
      "expected to validated against this subschema");
}

TEST(JSONSchema_compile_2019_09, reference_from_unknown_keyword) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "properties": {
      "foo": { "$ref": "#/definitions/bar" },
      "baz": { "type": "string" }
    },
    "definitions": {
      "bar": {
        "$ref": "#/properties/baz"
      }
    }
  })JSON")};

  try {
    sourcemeta::jsontoolkit::compile(
        schema, sourcemeta::jsontoolkit::default_schema_walker,
        sourcemeta::jsontoolkit::official_resolver,
        sourcemeta::jsontoolkit::default_schema_compiler);
  } catch (const sourcemeta::jsontoolkit::SchemaReferenceError &error) {
    EXPECT_EQ(error.id(), "#/properties/baz");
    EXPECT_EQ(error.location(),
              sourcemeta::jsontoolkit::Pointer({"definitions", "bar", "$ref"}));
  } catch (...) {
    throw;
  }
}
