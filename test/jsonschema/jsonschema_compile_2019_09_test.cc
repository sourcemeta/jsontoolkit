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

  EVALUATE_TRACE_POST_DESCRIBE(
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(1, "Emit an annotation");
  EVALUATE_TRACE_POST_DESCRIBE(
      2, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      3, "The target is expected to match all of the given assertions");
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
      0, "The target is expected to match all of the given assertions");
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
      0, "The target object is expected to define the given property");
  EVALUATE_TRACE_POST_DESCRIBE(
      1, "The target is expected to match all of the given assertions");
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

  EVALUATE_TRACE_POST_DESCRIBE(
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(1, "Emit an annotation");
  EVALUATE_TRACE_POST_DESCRIBE(
      2, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(3, "Emit an annotation");
  EVALUATE_TRACE_POST_DESCRIBE(4,
                               "Loop over the properties of the target object");
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

  EVALUATE_TRACE_POST_DESCRIBE(
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(1, "Emit an annotation");
  EVALUATE_TRACE_POST_DESCRIBE(
      2, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(3, "Emit an annotation");
  EVALUATE_TRACE_POST_DESCRIBE(4,
                               "Loop over the properties of the target object");
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

  EVALUATE_TRACE_POST_DESCRIBE(
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(1, "Emit an annotation");
  EVALUATE_TRACE_POST_DESCRIBE(
      2, "The target is expected to match all of the given assertions");
  EVALUATE_TRACE_POST_DESCRIBE(
      3, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(4, "Emit an annotation");
  EVALUATE_TRACE_POST_DESCRIBE(5,
                               "Loop over the properties of the target object");
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

  EVALUATE_TRACE_POST_DESCRIBE(
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(1, "Emit an annotation");
  EVALUATE_TRACE_POST_DESCRIBE(
      2, "The target is expected to match all of the given assertions");
  EVALUATE_TRACE_POST_DESCRIBE(
      3, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(4, "Emit an annotation");
  EVALUATE_TRACE_POST_DESCRIBE(5,
                               "Loop over the properties of the target object");
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
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(1,
                               "Loop over the properties of the target object");
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
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      1, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(2, "Emit an annotation");
  EVALUATE_TRACE_POST_DESCRIBE(3,
                               "Loop over the properties of the target object");
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
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      1, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      2, "A certain number of array items must satisfy the given constraints");
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
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      1, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      2, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      3, "A certain number of array items must satisfy the given constraints");
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

  EVALUATE_TRACE_POST_DESCRIBE(
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      1, "A certain number of array items must satisfy the given constraints");
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
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      1, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      2, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      3, "A certain number of array items must satisfy the given constraints");
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
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      1, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      2, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      3, "A certain number of array items must satisfy the given constraints");
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
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      1, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      2, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      3, "A certain number of array items must satisfy the given constraints");
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
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      1, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      2, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      3, "A certain number of array items must satisfy the given constraints");
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

  EVALUATE_TRACE_POST_DESCRIBE(
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      1, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      2, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      3, "A certain number of array items must satisfy the given constraints");
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

  EVALUATE_TRACE_POST_DESCRIBE(
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      1, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      2, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      3, "A certain number of array items must satisfy the given constraints");
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

  EVALUATE_TRACE_POST_DESCRIBE(
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      1, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      2, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      3, "A certain number of array items must satisfy the given constraints");
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

  EVALUATE_TRACE_POST_DESCRIBE(0, "Abort evaluation on failure");
}
