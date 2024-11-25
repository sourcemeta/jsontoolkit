#include <benchmark/benchmark.h>

#include <cassert> // assert

#include <sourcemeta/jsontoolkit/json.h>

static void JSON_Array_Of_Objects_Unique(benchmark::State &state) {
  // From Unreal Engine `uproject` files
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON([
    { "Enabled": true, "Name": "DDTools" },
    { "Enabled": true, "Name": "VideoCore" },
    { "Enabled": true, "Name": "EditorScriptingUtilities" },
    { "Enabled": true, "Name": "PythonScriptPlugin" },
    { "Enabled": true, "Name": "SequencerScripting" },
    { "Enabled": true, "Name": "PlaybackCtrl" },
    { "Enabled": false, "Name": "NDIIOPlugin" },
    { "Enabled": true, "Name": "Takes" },
    { "Enabled": true, "Name": "MultiUserClient" },
    { "Enabled": true, "Name": "LiveLink" },
    { "Enabled": true, "Name": "VirtualCamera" },
    { "Enabled": true, "Name": "PixelStreaming" },
    { "SupportedTargetPlatforms": [ "Win64" ], "Enabled": true, "Name": "nDisplay" },
    { "Enabled": true, "Name": "RigLogic" },
    { "Enabled": true, "Name": "LiveLinkControlRig" },
    { "Enabled": true, "Name": "HairStrands" },
    { "SupportedTargetPlatforms": [ "IOS", "Win64", "Mac" ], "Enabled": true, "Name": "AppleARKitFaceSupport" },
    { "SupportedTargetPlatforms": [ "IOS", "Win64", "Mac" ], "Enabled": true, "Name": "AppleARKit" },
    { "SupportedTargetPlatforms": [ "Win64" ], "Enabled": true, "Name": "LiveLinkOverNDisplay" }
  ])JSON")};

  for (auto _ : state) {
    auto result{document.unique()};
    assert(result);
    benchmark::DoNotOptimize(result);
  }
}

static void JSON_Parse_1(benchmark::State &state) {
  const auto document{R"JSON({
    "metadata": {
        "description": "Comprehensive JSON grammar stress test",
        "version": 1.0,
        "generated": "2024-11-25"
    },
    "primitives": {
        "string": "Hello, 世界! Special chars: \n \t \\ \" / Unicode: ∑ π",
        "number_integer": 42,
        "number_float": 3.14159,
        "number_scientific": 6.022e23,
        "boolean_true": true,
        "boolean_false": false,
        "null_value": null
    },
    "nested_objects": {
        "level1": {
            "level2": {
                "level3": {
                    "deepest": "Nested object test"
                }
            }
        }
    },
    "arrays": {
        "mixed_types": [1, "string", true, null, 3.14, {"nested": "object"}],
        "nested_arrays": [[1, 2], [3, 4], [5, 6]],
        "large_array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    "unicode_test": {
        "languages": {
            "chinese": "你好世界",
            "japanese": "こんにちは世界",
            "arabic": "مرحبا بالعالم",
            "emoji": "🌍🚀👩‍💻"
        }
    },
    "edge_cases": {
        "empty_object": {},
        "empty_array": [],
        "zero": 0,
        "negative_number": -273.15,
        "scientific_notation": {
            "small": 1.23e-10,
            "large": 9.87e+15
        }
    }
  })JSON"};

  for (auto _ : state) {
    auto result{sourcemeta::jsontoolkit::parse(document)};
    assert(result.is_object());
    benchmark::DoNotOptimize(result);
  }
}

static void JSON_Fast_Hash_Helm_Chart_Lock(benchmark::State &state) {
  // From `helm-chart-lock`
  const auto document{sourcemeta::jsontoolkit::parse(R"JSON({
    "digest": "sha256:157d6244f0fac36b70be1aecfed8811037504d4e3a1060f50688e93531174040",
    "generated": "2021-12-23T14:00:42.29198548Z",
    "dependencies": [
      {
        "name": "memcached",
        "repository": "https://charts.bitnami.com/bitnami",
        "version": "5.9.0"
      },
      {
        "name": "mysql",
        "repository": "https://charts.bitnami.com/bitnami",
        "version": "6.14.10"
      },
      {
        "name": "postgresql",
        "repository": "https://charts.bitnami.com/bitnami",
        "version": "10.3.17"
      },
      {
        "name": "mariadb",
        "repository": "https://charts.bitnami.com/bitnami",
        "version": "9.3.6"
      }
    ]
  })JSON")};

  for (auto _ : state) {
    auto result{document.fast_hash()};
    assert(result >= 0);
    benchmark::DoNotOptimize(result);
  }
}

static void JSON_Equality_Helm_Chart_Lock(benchmark::State &state) {
  // From `helm-chart-lock`

  const auto document_1{sourcemeta::jsontoolkit::parse(R"JSON({
    "digest": "sha256:157d6244f0fac36b70be1aecfed8811037504d4e3a1060f50688e93531174040",
    "generated": "2021-12-23T14:00:42.29198548Z",
    "dependencies": [
      {
        "name": "memcached",
        "repository": "https://charts.bitnami.com/bitnami",
        "version": "5.9.0"
      },
      {
        "name": "mysql",
        "repository": "https://charts.bitnami.com/bitnami",
        "version": "6.14.10"
      },
      {
        "name": "postgresql",
        "repository": "https://charts.bitnami.com/bitnami",
        "version": "10.3.17"
      },
      {
        "name": "mariadb",
        "repository": "https://charts.bitnami.com/bitnami",
        "version": "9.3.6"
      }
    ]
  })JSON")};

  const auto document_2{sourcemeta::jsontoolkit::parse(R"JSON({
    "digest": "sha256:157d6244f0fac36b70be1aecfed8811037504d4e3a1060f50688e93531174040",
    "generated": "2021-12-23T14:00:42.29198548Z",
    "dependencies": [
      {
        "name": "memcached",
        "repository": "https://charts.bitnami.com/bitnami",
        "version": "5.9.0"
      },
      {
        "name": "mysql",
        "repository": "https://charts.bitnami.com/bitnami",
        "version": "6.14.10"
      },
      {
        "name": "postgresql",
        "repository": "https://charts.bitnami.com/bitnami",
        "version": "10.3.17"
      },
      {
        "name": "mariadb",
        "repository": "https://charts.bitnami.com/bitnami",
        "version": "9.3.6"
      }
    ]
  })JSON")};

  for (auto _ : state) {
    auto result{document_1 == document_2};
    assert(result);
    benchmark::DoNotOptimize(result);
  }
}

BENCHMARK(JSON_Array_Of_Objects_Unique);
BENCHMARK(JSON_Parse_1);
BENCHMARK(JSON_Fast_Hash_Helm_Chart_Lock);
BENCHMARK(JSON_Equality_Helm_Chart_Lock);
