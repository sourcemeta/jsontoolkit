#include <benchmark/benchmark.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

static void Compiler_Basic(benchmark::State &state) {
  for (auto _ : state) {
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
  }
}
BENCHMARK(Compiler_Basic);

BENCHMARK_MAIN();
