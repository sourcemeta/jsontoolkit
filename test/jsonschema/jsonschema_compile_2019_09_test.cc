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
