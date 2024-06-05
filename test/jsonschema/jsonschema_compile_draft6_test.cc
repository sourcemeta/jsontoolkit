#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include "jsonschema_test_utils.h"

TEST(JSONSchema_compile_draft6, unknown_keyword) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-06/schema#",
    "foobar": "baz"
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{"foo bar"};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 0);
}

TEST(JSONSchema_compile_draft6, const_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-06/schema#",
    "const": 1
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{1};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);
  EVALUATE_TRACE_SUCCESS(0, AssertionEqual, "/const", "#/const", "");
}

TEST(JSONSchema_compile_draft6, const_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-06/schema#",
    "const": 1
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{"foo"};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 1);
  EVALUATE_TRACE_FAILURE(0, AssertionEqual, "/const", "#/const", "");
}

TEST(JSONSchema_compile_draft6, exclusiveMinimum_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-06/schema#",
    "exclusiveMinimum": 2
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{2.1};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);
  EVALUATE_TRACE_SUCCESS(0, AssertionGreater, "/exclusiveMinimum",
                         "#/exclusiveMinimum", "");

  EVALUATE_TRACE_DESCRIBE(
      0, "The target number is expected to be greater than the given number");
}

TEST(JSONSchema_compile_draft6, exclusiveMinimum_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-06/schema#",
    "exclusiveMinimum": 2
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{2};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 1);
  EVALUATE_TRACE_FAILURE(0, AssertionGreater, "/exclusiveMinimum",
                         "#/exclusiveMinimum", "");

  EVALUATE_TRACE_DESCRIBE(
      0, "The target number is expected to be greater than the given number");
}

TEST(JSONSchema_compile_draft6, exclusiveMaximum_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-06/schema#",
    "exclusiveMaximum": 2
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{1.9};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 1);
  EVALUATE_TRACE_SUCCESS(0, AssertionLess, "/exclusiveMaximum",
                         "#/exclusiveMaximum", "");

  EVALUATE_TRACE_DESCRIBE(
      0, "The target number is expected to be less than the given number");
}

TEST(JSONSchema_compile_draft6, exclusiveMaximum_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-06/schema#",
    "exclusiveMaximum": 2
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{2};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 1);
  EVALUATE_TRACE_FAILURE(0, AssertionLess, "/exclusiveMaximum",
                         "#/exclusiveMaximum", "");

  EVALUATE_TRACE_DESCRIBE(
      0, "The target number is expected to be less than the given number");
}

TEST(JSONSchema_compile_draft6, contains_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-06/schema#",
    "contains": { "type": "string" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{2};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 0);
}

TEST(JSONSchema_compile_draft6, contains_2) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-06/schema#",
    "contains": { "type": "string" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ 1, \"bar\", 3 ]")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 3);

  EVALUATE_TRACE_FAILURE(0, AssertionType, "/contains/type", "#/contains/type",
                         "/0");
  EVALUATE_TRACE_SUCCESS(1, AssertionType, "/contains/type", "#/contains/type",
                         "/1");
  EVALUATE_TRACE_SUCCESS(2, LoopContains, "/contains", "#/contains", "");

  EVALUATE_TRACE_DESCRIBE(
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_DESCRIBE(
      1, "The target document is expected to be of the given type");
  EVALUATE_TRACE_DESCRIBE(
      2, "A certain number of array items must satisfy the given constraints");
}

TEST(JSONSchema_compile_draft6, contains_3) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-06/schema#",
    "contains": { "type": "string" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 4);

  EVALUATE_TRACE_FAILURE(0, AssertionType, "/contains/type", "#/contains/type",
                         "/0");
  EVALUATE_TRACE_FAILURE(1, AssertionType, "/contains/type", "#/contains/type",
                         "/1");
  EVALUATE_TRACE_FAILURE(2, AssertionType, "/contains/type", "#/contains/type",
                         "/2");
  EVALUATE_TRACE_FAILURE(3, LoopContains, "/contains", "#/contains", "");

  EVALUATE_TRACE_DESCRIBE(
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_DESCRIBE(
      1, "The target document is expected to be of the given type");
  EVALUATE_TRACE_DESCRIBE(
      2, "The target document is expected to be of the given type");
  EVALUATE_TRACE_DESCRIBE(
      3, "A certain number of array items must satisfy the given constraints");
}

TEST(JSONSchema_compile_draft6, contains_4) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-06/schema#",
    "contains": { "type": "string" }
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse("[ \"foo\", \"bar\", \"baz\" ]")};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 2);

  EVALUATE_TRACE_SUCCESS(0, AssertionType, "/contains/type", "#/contains/type",
                         "/0");
  EVALUATE_TRACE_SUCCESS(1, LoopContains, "/contains", "#/contains", "");

  EVALUATE_TRACE_DESCRIBE(
      0, "The target document is expected to be of the given type");
  EVALUATE_TRACE_DESCRIBE(
      1, "A certain number of array items must satisfy the given constraints");
}
