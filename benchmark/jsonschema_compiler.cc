#include <benchmark/benchmark.h>

#include <cassert> // assert

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

static void JSONSchema_Compiler_Draft6_AdaptiveCard(benchmark::State &state) {
  const auto schema{sourcemeta::jsontoolkit::from_file(
      std::filesystem::path{CURRENT_DIRECTORY} / "draft6_adaptivecard.json")};

  for (auto _ : state) {
    auto result{sourcemeta::jsontoolkit::compile(
        schema, sourcemeta::jsontoolkit::default_schema_walker,
        sourcemeta::jsontoolkit::official_resolver,
        sourcemeta::jsontoolkit::default_schema_compiler)};
    assert(!result.empty());
    benchmark::DoNotOptimize(result);
  }
}

BENCHMARK(JSONSchema_Compiler_Draft6_AdaptiveCard);
