#include <benchmark/benchmark.h>

#include <cassert> // assert

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>

static void Pointer_Object_Traverse(benchmark::State &state) {
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON({
    "one": {
      "two": {
        "three": {
          "four": {
            "five": {
              "six": {
                "seven": {
                  "eight": {
                    "nine": {
                      "ten": true
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  })JSON")};

  const sourcemeta::jsontoolkit::Pointer pointer{
      "one", "two",   "three", "four", "five",
      "six", "seven", "eight", "nine", "ten"};

  for (auto _ : state) {
    auto result{sourcemeta::jsontoolkit::get(document, pointer)};
    assert(result.is_boolean());
    assert(result.to_boolean());
    benchmark::DoNotOptimize(result);
  }
}

static void Pointer_Object_Try_Traverse(benchmark::State &state) {
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON({
    "one": {
      "two": {
        "three": {
          "four": {
            "five": {
              "six": {
                "seven": {
                  "eight": {
                    "nine": {
                      "ten": true
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  })JSON")};

  const sourcemeta::jsontoolkit::Pointer pointer{
      "one", "two",   "three", "four", "five",
      "six", "seven", "eight", "nine", "ten"};

  for (auto _ : state) {
    auto result{sourcemeta::jsontoolkit::try_get(document, pointer)};
    assert(result.has_value());
    assert(result.value().get().is_boolean());
    assert(result.value().get().to_boolean());
    benchmark::DoNotOptimize(result);
  }
}

BENCHMARK(Pointer_Object_Traverse);
BENCHMARK(Pointer_Object_Try_Traverse);
