#include <benchmark/benchmark.h>

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
    benchmark::DoNotOptimize(result);
  }
}

BENCHMARK(JSONSchema_Validate_Draft4_Meta_1_No_Callback);
