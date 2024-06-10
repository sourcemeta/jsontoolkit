#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include "jsonschema_test_utils.h"

TEST(JSONSchema_compile_draft7, metaschema) {
  const auto metaschema{sourcemeta::jsontoolkit::official_resolver(
                            "http://json-schema.org/draft-07/schema#")
                            .get()};
  EXPECT_TRUE(metaschema.has_value());

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      metaschema.value(), sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("{}")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 2);
}

TEST(JSONSchema_compile_draft7, if_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "if": { "const": 1 }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{1};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 3);
  EVALUATE_TRACE_SUCCESS(0, AssertionEqual, "/if/const", "#/if/const", "");
  EVALUATE_TRACE_ANNOTATION_PRIVATE(1, "/if", "#/if", "", true);
  EVALUATE_TRACE_SUCCESS(2, LogicalTry, "/if", "#/if", "");

  EVALUATE_TRACE_DESCRIBE(
      0, "The target is expected to be equal to the given value");
  EVALUATE_TRACE_DESCRIBE(1, "Emit an internal annotation");
  EVALUATE_TRACE_DESCRIBE(2,
                          "The target might match all of the given assertions");
}

TEST(JSONSchema_compile_draft7, if_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "if": { "const": 1 }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{2};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 2);
  EVALUATE_TRACE_FAILURE(0, AssertionEqual, "/if/const", "#/if/const", "");
  EVALUATE_TRACE_SUCCESS(1, LogicalTry, "/if", "#/if", "");

  EVALUATE_TRACE_DESCRIBE(
      0, "The target is expected to be equal to the given value");
  EVALUATE_TRACE_DESCRIBE(1,
                          "The target might match all of the given assertions");
}

TEST(JSONSchema_compile_draft7, then_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "then": { "multipleOf": 5 }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{3};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 0);
}

TEST(JSONSchema_compile_draft7, then_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "if": { "const": 10 },
    "then": { "multipleOf": 5 }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{10};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 5);
  EVALUATE_TRACE_SUCCESS(0, AssertionEqual, "/if/const", "#/if/const", "");
  EVALUATE_TRACE_ANNOTATION_PRIVATE(1, "/if", "#/if", "", true);
  EVALUATE_TRACE_SUCCESS(2, LogicalTry, "/if", "#/if", "");
  EVALUATE_TRACE_SUCCESS(3, AssertionDivisible, "/then/multipleOf",
                         "#/then/multipleOf", "");
  EVALUATE_TRACE_SUCCESS(4, LogicalAnd, "/then", "#/then", "");

  EVALUATE_TRACE_DESCRIBE(
      0, "The target is expected to be equal to the given value");
  EVALUATE_TRACE_DESCRIBE(1, "Emit an internal annotation");
  EVALUATE_TRACE_DESCRIBE(2,
                          "The target might match all of the given assertions");
  EVALUATE_TRACE_DESCRIBE(
      3, "The target number is expected to be divisible by the given number");
  EVALUATE_TRACE_DESCRIBE(
      4, "The target is expected to match all of the given assertions");
}

TEST(JSONSchema_compile_draft7, then_3) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "if": { "const": 10 },
    "then": { "multipleOf": 5 }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 2);
  EVALUATE_TRACE_FAILURE(0, AssertionEqual, "/if/const", "#/if/const", "");
  EVALUATE_TRACE_SUCCESS(1, LogicalTry, "/if", "#/if", "");

  EVALUATE_TRACE_DESCRIBE(
      0, "The target is expected to be equal to the given value");
  EVALUATE_TRACE_DESCRIBE(1,
                          "The target might match all of the given assertions");
}

TEST(JSONSchema_compile_draft7, else_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "else": { "multipleOf": 5 }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{3};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 0);
}

TEST(JSONSchema_compile_draft7, else_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "if": { "const": 1 },
    "else": { "multipleOf": 5 }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{1};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 3);
  EVALUATE_TRACE_SUCCESS(0, AssertionEqual, "/if/const", "#/if/const", "");
  EVALUATE_TRACE_ANNOTATION_PRIVATE(1, "/if", "#/if", "", true);
  EVALUATE_TRACE_SUCCESS(2, LogicalTry, "/if", "#/if", "");

  EVALUATE_TRACE_DESCRIBE(
      0, "The target is expected to be equal to the given value");
  EVALUATE_TRACE_DESCRIBE(1, "Emit an internal annotation");
  EVALUATE_TRACE_DESCRIBE(2,
                          "The target might match all of the given assertions");
}

TEST(JSONSchema_compile_draft7, else_3) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "if": { "const": 1 },
    "else": { "multipleOf": 5 }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{10};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 4);
  EVALUATE_TRACE_FAILURE(0, AssertionEqual, "/if/const", "#/if/const", "");
  EVALUATE_TRACE_SUCCESS(1, LogicalTry, "/if", "#/if", "");
  EVALUATE_TRACE_SUCCESS(2, AssertionDivisible, "/else/multipleOf",
                         "#/else/multipleOf", "");
  EVALUATE_TRACE_SUCCESS(3, LogicalAnd, "/else", "#/else", "");

  EVALUATE_TRACE_DESCRIBE(
      0, "The target is expected to be equal to the given value");
  EVALUATE_TRACE_DESCRIBE(1,
                          "The target might match all of the given assertions");
  EVALUATE_TRACE_DESCRIBE(
      2, "The target number is expected to be divisible by the given number");
  EVALUATE_TRACE_DESCRIBE(
      3, "The target is expected to match all of the given assertions");
}

TEST(JSONSchema_compile_draft7, else_4) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "if": { "const": 1 },
    "else": { "multipleOf": 5 }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{8};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 4);
  EVALUATE_TRACE_FAILURE(0, AssertionEqual, "/if/const", "#/if/const", "");
  EVALUATE_TRACE_SUCCESS(1, LogicalTry, "/if", "#/if", "");
  EVALUATE_TRACE_FAILURE(2, AssertionDivisible, "/else/multipleOf",
                         "#/else/multipleOf", "");
  EVALUATE_TRACE_FAILURE(3, LogicalAnd, "/else", "#/else", "");

  EVALUATE_TRACE_DESCRIBE(
      0, "The target is expected to be equal to the given value");
  EVALUATE_TRACE_DESCRIBE(1,
                          "The target might match all of the given assertions");
  EVALUATE_TRACE_DESCRIBE(
      2, "The target number is expected to be divisible by the given number");
  EVALUATE_TRACE_DESCRIBE(
      3, "The target is expected to match all of the given assertions");
}
