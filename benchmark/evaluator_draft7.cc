#include <benchmark/benchmark.h>

#include <cassert> // assert

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

static void Evaluator_Draft7_If_Then_Else(benchmark::State &state) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
        "$schema": "http://json-schema.org/draft-07/schema#",
        "if": {
          "type": "string"
        },
        "then": {
          "if": { "minLength": 2 },
          "then": { "maxLength": 5 },
          "else": { "maxLength": 3 }
        },
        "else": {
          "if": { "type": "integer" },
          "then": { "minimum": 4 },
          "else": { "maxProperties": 4 }
        }
      })JSON")};

  const sourcemeta::jsontoolkit::JSON instance{"foo"};

  const auto schema_template{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};
  for (auto _ : state) {
    auto result{sourcemeta::jsontoolkit::evaluate(schema_template, instance)};
    assert(result);
    benchmark::DoNotOptimize(result);
  }
}

BENCHMARK(Evaluator_Draft7_If_Then_Else);
