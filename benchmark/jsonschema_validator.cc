#include <benchmark/benchmark.h>

#include <cassert> // assert

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

static void
JSONSchema_Validate_Draft4_Meta_1_No_Callback(benchmark::State &state) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "properties": {
      "foo": { "type": "string" },
      "bar": { "type": "integer" }
    }
  })JSON")};

  const auto metaschema{sourcemeta::jsontoolkit::metaschema(
      schema, sourcemeta::jsontoolkit::official_resolver)};
  const auto metaschema_template{sourcemeta::jsontoolkit::compile(
      metaschema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  for (auto _ : state) {
    auto result{sourcemeta::jsontoolkit::evaluate(metaschema_template, schema)};
    assert(result);
    benchmark::DoNotOptimize(result);
  }
}

static void
JSONSchema_Validate_Draft4_Required_Properties(benchmark::State &state) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "required": [
      "a", "b", "c", "d", "e", "f", "g", "h", "i",
      "j", "k", "l", "m", "n", "o", "p", "q", "r",
      "s", "t", "u", "v", "w", "x", "y", "z"
    ],
    "properties": {
      "a": { "type": "boolean" },
      "b": { "type": "boolean" },
      "c": { "type": "boolean" },
      "d": { "type": "boolean" },
      "e": { "type": "boolean" },
      "f": { "type": "boolean" },
      "g": { "type": "boolean" },
      "h": { "type": "boolean" },
      "i": { "type": "boolean" },
      "j": { "type": "boolean" },
      "k": { "type": "boolean" },
      "l": { "type": "boolean" },
      "m": { "type": "boolean" },
      "n": { "type": "boolean" },
      "o": { "type": "boolean" },
      "p": { "type": "boolean" },
      "q": { "type": "boolean" },
      "r": { "type": "boolean" },
      "s": { "type": "boolean" },
      "t": { "type": "boolean" },
      "u": { "type": "boolean" },
      "v": { "type": "boolean" },
      "w": { "type": "boolean" },
      "x": { "type": "boolean" },
      "y": { "type": "boolean" },
      "z": { "type": "boolean" }
    }
  })JSON")};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "a": true,
    "b": true,
    "c": true,
    "d": true,
    "e": true,
    "f": true,
    "g": true,
    "h": true,
    "i": true,
    "j": true,
    "k": true,
    "l": true,
    "m": true,
    "n": true,
    "o": true,
    "p": true,
    "q": true,
    "r": true,
    "s": true,
    "t": true,
    "u": true,
    "v": true,
    "w": true,
    "x": true,
    "y": true,
    "z": true
  })JSON")};

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

BENCHMARK(JSONSchema_Validate_Draft4_Meta_1_No_Callback);
BENCHMARK(JSONSchema_Validate_Draft4_Required_Properties);
