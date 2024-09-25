#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/evaluator.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include "evaluator_utils.h"

static auto test_resolver(std::string_view identifier)
    -> std::future<std::optional<sourcemeta::jsontoolkit::JSON>> {
  std::promise<std::optional<sourcemeta::jsontoolkit::JSON>> promise;
  if (identifier == "https://example.com/metaschema") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://example.com/metaschema",
      "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/core": true,
        "https://example.com/vocab/custom": true
      }
    })JSON"));
  } else {
    promise.set_value(
        sourcemeta::jsontoolkit::official_resolver(identifier).get());
  }

  return promise.get_future();
}

TEST(JSONSchema_evaluator, unknown_vocabulary_required) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://example.com/metaschema"
  })JSON")};

  try {
    sourcemeta::jsontoolkit::compile(
        schema, sourcemeta::jsontoolkit::default_schema_walker, test_resolver,
        sourcemeta::jsontoolkit::default_schema_compiler);
    FAIL() << "The compile function was expected to throw";
  } catch (const sourcemeta::jsontoolkit::SchemaVocabularyError &error) {
    EXPECT_EQ(error.uri(), "https://example.com/vocab/custom");
    SUCCEED();
  } catch (const std::exception &) {
    FAIL() << "The compile function was expected to throw a vocabulary error";
  }
}

TEST(JSONSchema_evaluator, boolean_true) {
  const sourcemeta::jsontoolkit::JSON schema{true};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler,
      "https://json-schema.org/draft/2020-12/schema")};

  const sourcemeta::jsontoolkit::JSON instance{"foo bar"};
  EVALUATE_WITH_TRACE_FAST_SUCCESS(compiled_schema, instance, 0);
}

TEST(JSONSchema_evaluator, boolean_false) {
  const sourcemeta::jsontoolkit::JSON schema{false};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler,
      "https://json-schema.org/draft/2020-12/schema")};

  const sourcemeta::jsontoolkit::JSON instance{"foo bar"};
  EVALUATE_WITH_TRACE_FAST_FAILURE(compiled_schema, instance, 1);

  EVALUATE_TRACE_PRE(0, AssertionFail, "", "", "");
  EVALUATE_TRACE_POST_FAILURE(0, AssertionFail, "", "", "");

  EVALUATE_TRACE_POST_DESCRIBE(
      instance, 0,
      "No instance is expected to succeed against the false schema");
}
