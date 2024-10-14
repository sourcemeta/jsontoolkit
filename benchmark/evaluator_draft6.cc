#include <benchmark/benchmark.h>

#include <cassert> // assert

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

static void Evaluator_Draft6_Property_Names(benchmark::State &state) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
        "$schema": "http://json-schema.org/draft-06/schema#",
        "propertyNames": {
          "minLength": 2
        }
      })JSON")};

  const sourcemeta::jsontoolkit::JSON instance{
      sourcemeta::jsontoolkit::parse(R"JSON({
        "aa": true,
        "bb": true,
        "cc": true,
        "dd": true,
        "ee": true,
        "ff": true,
        "gg": true,
        "hh": true,
        "ii": true,
        "jj": true,
        "kk": true,
        "ll": true,
        "mm": true,
        "nn": true,
        "oo": true,
        "pp": true,
        "qq": true,
        "rr": true,
        "ss": true,
        "tt": true,
        "uu": true,
        "vv": true,
        "ww": true,
        "xx": true,
        "yy": true,
        "zz": true
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

BENCHMARK(Evaluator_Draft6_Property_Names);
