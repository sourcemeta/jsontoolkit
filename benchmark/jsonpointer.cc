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
    assert(result);
    assert(result->is_boolean());
    assert(result->to_boolean());
    benchmark::DoNotOptimize(result);
  }
}

static void Pointer_Push_Back_Pointer_To_Weak_Pointer(benchmark::State &state) {
  const sourcemeta::jsontoolkit::Pointer pointer{"QG5",
                                                 "hzh4HOy0CDatvDds",
                                                 "A2Fmfu3",
                                                 "SsDf",
                                                 "IWKDjcbspyIi",
                                                 "ShnIIXXJ16rJqU",
                                                 "kr20Vl0fTl",
                                                 "k86GNqPRqYcrshgW",
                                                 "MZasv",
                                                 "mu12raEM0",
                                                 "ERmTaob",
                                                 "N4051TZZgmHJxw0kA2",
                                                 "JyYLja7uU4rGiPnO0HaF",
                                                 "z39HymGubGiCkAj",
                                                 "pBTXBPoibBe",
                                                 "jO6qKBYc",
                                                 "RSYx",
                                                 "v5qyRqbc0t1Stb5",
                                                 "cNSajmQSUeImEznA",
                                                 "86R5NCY4bGJBB",
                                                 "7NGrw3bVRH",
                                                 "USCmFPlMHJ1bZWi",
                                                 "Er9UMJ6yL8ny1x3qj1c",
                                                 "260JkYXaCtfYo0QC",
                                                 "SPtyuBHw",
                                                 "O6QI5wHP1",
                                                 "1iDJs1u5i",
                                                 "onYiosjbLHA6QuiNidB",
                                                 "cetyYrbEvZ",
                                                 "KAWwqfXHPMtL",
                                                 "NvzaQYhMBmad",
                                                 "B68v67OylYcwROoaZxb",
                                                 "aG9u12vgak",
                                                 "5thqNjai",
                                                 "bIOCVt3JEZO2",
                                                 "rVZLu42FBk",
                                                 "Wjm",
                                                 "z23mpKaOHDU7utfy9euC",
                                                 "2k9DYyIr4uQKSUfKPV",
                                                 "53ITE3Rxdsy862S",
                                                 "7NR",
                                                 "ByKyUzTz1uLQOt",
                                                 "ReSknCy",
                                                 "VbD8",
                                                 "fHugvDUJe",
                                                 "japh5",
                                                 "6rhjhRDxhd",
                                                 "Q7sX8",
                                                 "VtFTA5YnQhbAPhxbdi",
                                                 "BuY1vG92USX0Y6NvEGcf",
                                                 "y4fs5dRPK",
                                                 "5iz39wrHyeQQHb1",
                                                 "4GrQCWp74AnBSL9",
                                                 "m6KK",
                                                 "6buqIqqDVJwu",
                                                 "4FSzmT06",
                                                 "2CUY",
                                                 "f1P3LTAP",
                                                 "hlFnm",
                                                 "Q6OQxzHNwZsSpM0Fib",
                                                 "ltLJ5HS1fUXQIIE"};

  for (auto _ : state) {
    sourcemeta::jsontoolkit::WeakPointer destination;
    destination.push_back(pointer);
    assert(destination.size() == pointer.size());
    benchmark::DoNotOptimize(destination);
  }
}

BENCHMARK(Pointer_Object_Traverse);
BENCHMARK(Pointer_Object_Try_Traverse);
BENCHMARK(Pointer_Push_Back_Pointer_To_Weak_Pointer);
