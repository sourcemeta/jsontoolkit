#include <benchmark/benchmark.h>

#include <cassert> // assert

#include <sourcemeta/jsontoolkit/regex.h>

#define BENCHMARK_REGEX(name, pattern, string)                                 \
  static void name(benchmark::State &state) {                                  \
    const auto regex{sourcemeta::jsontoolkit::compile(pattern)};               \
    assert(regex.has_value());                                                 \
    for (auto _ : state) {                                                     \
      auto result{sourcemeta::jsontoolkit::validate(regex.value(), string)};   \
      assert(result);                                                          \
      benchmark::DoNotOptimize(result);                                        \
    }                                                                          \
  }                                                                            \
  BENCHMARK(name);

BENCHMARK_REGEX(Regex_Period_Asterisk, ".*", "foo")
BENCHMARK_REGEX(Regex_Caret_Period_Asterisk_Dollar, "^.*$", "foo")
BENCHMARK_REGEX(Regex_Caret_Group_Period_Asterisk_Group_Dollar, "^(.*)$", "foo")
BENCHMARK_REGEX(Regex_Caret_X_Hyphen, "^x-", "x-foo")
BENCHMARK_REGEX(Regex_Period_Md_Dollar, "\\.md$", "foo.md")
