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

  EVALUATE_TRACE_POST_DESCRIBE(0, "Emit an annotation");
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

  EVALUATE_TRACE_POST_DESCRIBE(0, "Emit an annotation");
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

  EVALUATE_TRACE_POST_DESCRIBE(0, "Emit an annotation");
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

  EVALUATE_TRACE_POST_DESCRIBE(0, "Emit an annotation");
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

  EVALUATE_TRACE_POST_DESCRIBE(0, "Emit an annotation");
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

  EVALUATE_TRACE_POST_DESCRIBE(0, "Emit an annotation");
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

  EVALUATE_TRACE_POST_DESCRIBE(0, "Emit an annotation");
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

  EVALUATE_TRACE_POST_DESCRIBE(0, "Emit an annotation");
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

  EVALUATE_TRACE_POST_DESCRIBE(0, "Emit an annotation");
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

  EVALUATE_TRACE_POST_DESCRIBE(0, "Emit an annotation");
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

  EVALUATE_TRACE_POST_DESCRIBE(0, "Emit an annotation");
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

  EVALUATE_TRACE_POST_DESCRIBE(0, "Emit an annotation");
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

  EVALUATE_TRACE_POST_DESCRIBE(0, "Emit an annotation");
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

  EVALUATE_TRACE_POST_DESCRIBE(0, "Emit an annotation");
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

  EVALUATE_TRACE_POST_DESCRIBE(0, "Emit an annotation");
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

  EVALUATE_TRACE_POST_DESCRIBE(0, "Emit an annotation");
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

  EVALUATE_TRACE_POST_DESCRIBE(
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      1, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      2, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(3, "Loop over the items of the target array");
  EVALUATE_TRACE_POST_DESCRIBE(4, "Emit an annotation");
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

  EVALUATE_TRACE_POST_DESCRIBE(
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      1, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(2, "Loop over the items of the target array");
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
      0, "The target is expected to match all of the given assertions");
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

  EVALUATE_TRACE_POST_DESCRIBE(
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(1, "Emit an annotation");
  EVALUATE_TRACE_POST_DESCRIBE(
      2, "The target is expected to match all of the given assertions");
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
  EVALUATE_TRACE_POST_ANNOTATION_PUBLIC(2, "/items", "#/items", "", true);
  EVALUATE_TRACE_POST_SUCCESS(3, LogicalAnd, "/items", "#/items", "");

  EVALUATE_TRACE_POST_DESCRIBE(
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      1, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(2, "Emit an annotation");
  EVALUATE_TRACE_POST_DESCRIBE(
      3, "The target is expected to match all of the given assertions");
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

  EVALUATE_TRACE_POST_DESCRIBE(
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      1, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      2, "The target is expected to match all of the given assertions");
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

  EVALUATE_TRACE_POST_DESCRIBE(
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(
      1, "The target document is expected to be of the given type");
  EVALUATE_TRACE_POST_DESCRIBE(2, "Emit an annotation");
  EVALUATE_TRACE_POST_DESCRIBE(
      3, "The target is expected to match all of the given assertions");
}
