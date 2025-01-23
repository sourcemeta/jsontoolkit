#include <benchmark/benchmark.h>

#include <cassert>       // assert
#include <unordered_set> // unordered_set

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

static void JSON_String_Equal(benchmark::State &state) {
  const auto length{static_cast<std::size_t>(state.range(0))};
  sourcemeta::jsontoolkit::JSON::String string_left(length, 'x');
  sourcemeta::jsontoolkit::JSON::String string_right(length, 'x');
  const sourcemeta::jsontoolkit::JSON left{std::move(string_left)};
  const sourcemeta::jsontoolkit::JSON right{std::move(string_right)};
  for (auto _ : state) {
    bool result = left == right;
    assert(result);
    benchmark::DoNotOptimize(result);
  }
}

static void JSON_String_Equal_Small_By_Perfect_Hash(benchmark::State &state) {
  const auto length{static_cast<std::size_t>(state.range(0))};
  sourcemeta::jsontoolkit::JSON::String left(length, 'x');
  sourcemeta::jsontoolkit::JSON::String right(length, 'x');
  const sourcemeta::jsontoolkit::KeyHash<sourcemeta::jsontoolkit::JSON::String>
      hasher;
  const auto hash_left{hasher(left)};
  const auto hash_right{hasher(right)};
  assert(hasher.is_perfect(hash_left));
  assert(hasher.is_perfect(hash_right));
  for (auto _ : state) {
    bool result = hash_left == hash_right;
    assert(result);
    benchmark::DoNotOptimize(result);
  }
}

static void
JSON_String_Equal_Small_By_Runtime_Perfect_Hash(benchmark::State &state) {
  const auto length{static_cast<std::size_t>(state.range(0))};
  sourcemeta::jsontoolkit::JSON::String left(length, 'x');
  sourcemeta::jsontoolkit::JSON::String right(length, 'x');
  const sourcemeta::jsontoolkit::KeyHash<sourcemeta::jsontoolkit::JSON::String>
      hasher;
  for (auto _ : state) {
    const auto hash_left{hasher(left)};
    const auto hash_right{hasher(right)};
    assert(hasher.is_perfect(hash_left));
    assert(hasher.is_perfect(hash_right));
    bool result = hash_left == hash_right;
    assert(result);
    benchmark::DoNotOptimize(result);
  }
}

static void JSON_String_Fast_Hash(benchmark::State &state) {
  const auto length{static_cast<std::size_t>(state.range(0))};
  sourcemeta::jsontoolkit::JSON::String value(length, 'x');
  const sourcemeta::jsontoolkit::JSON document{std::move(value)};
  for (auto _ : state) {
    benchmark::DoNotOptimize(document.fast_hash());
  }
}

static void JSON_String_Key_Hash(benchmark::State &state) {
  const auto length{static_cast<std::size_t>(state.range(0))};
  sourcemeta::jsontoolkit::JSON::String value(length, 'x');
  const sourcemeta::jsontoolkit::KeyHash<sourcemeta::jsontoolkit::JSON::String>
      hasher;
  for (auto _ : state) {
    benchmark::DoNotOptimize(hasher(value));
  }
}

static void JSON_Object_Defines_Miss_Same_Length(benchmark::State &state) {
  auto document{sourcemeta::jsontoolkit::JSON::make_object()};
  document.assign("abcdefg", sourcemeta::jsontoolkit::JSON{1});
  document.assign("abcdefgh", sourcemeta::jsontoolkit::JSON{2});
  document.assign("abcdefghi", sourcemeta::jsontoolkit::JSON{3});
  const sourcemeta::jsontoolkit::KeyHash<sourcemeta::jsontoolkit::JSON::String>
      hasher;
  const auto &object{document.as_object()};
  const sourcemeta::jsontoolkit::JSON::String key{"foobarbaz"};
  const auto key_hash{hasher(key)};
  for (auto _ : state) {
    auto result = object.defines(key, key_hash);
    assert(!result);
    benchmark::DoNotOptimize(result);
  }
}

static void JSON_Object_Defines_Miss_Too_Small(benchmark::State &state) {
  auto document{sourcemeta::jsontoolkit::JSON::make_object()};
  document.assign("abcdefg", sourcemeta::jsontoolkit::JSON{1});
  document.assign("abcdefgh", sourcemeta::jsontoolkit::JSON{2});
  document.assign("abcdefghi", sourcemeta::jsontoolkit::JSON{3});
  const sourcemeta::jsontoolkit::KeyHash<sourcemeta::jsontoolkit::JSON::String>
      hasher;
  const auto &object{document.as_object()};
  const sourcemeta::jsontoolkit::JSON::String key{"foo"};
  const auto key_hash{hasher(key)};
  for (auto _ : state) {
    auto result = object.defines(key, key_hash);
    assert(!result);
    benchmark::DoNotOptimize(result);
  }
}

static void JSON_Object_Defines_Miss_Too_Large(benchmark::State &state) {
  auto document{sourcemeta::jsontoolkit::JSON::make_object()};
  document.assign("abcdefg", sourcemeta::jsontoolkit::JSON{1});
  document.assign("abcdefgh", sourcemeta::jsontoolkit::JSON{2});
  document.assign("abcdefghi", sourcemeta::jsontoolkit::JSON{3});
  const sourcemeta::jsontoolkit::KeyHash<sourcemeta::jsontoolkit::JSON::String>
      hasher;
  const auto &object{document.as_object()};
  const sourcemeta::jsontoolkit::JSON::String key{"toolargestring"};
  const auto key_hash{hasher(key)};
  for (auto _ : state) {
    auto result = object.defines(key, key_hash);
    assert(!result);
    benchmark::DoNotOptimize(result);
  }
}

static void JSON_String_Set_Unordered(benchmark::State &state) {
  std::unordered_set<sourcemeta::jsontoolkit::JSON,
                     sourcemeta::jsontoolkit::Hash>
      set;
  set.emplace("javascript");
  set.emplace("ruby:bundler");
  set.emplace("php:composer");
  set.emplace("python");
  set.emplace("go:modules");
  set.emplace("go:dep");
  set.emplace("java:maven");
  set.emplace("java:gradle");
  set.emplace("dotnet:nuget");
  set.emplace("rust:cargo");
  set.emplace("elixir:hex");
  set.emplace("docker");
  set.emplace("terraform");
  set.emplace("submodules");
  set.emplace("elm");
  set.emplace("github_actions");

  const sourcemeta::jsontoolkit::JSON value{"github_actions"};
  for (auto _ : state) {
    auto result = set.contains(value);
    assert(result);
    benchmark::DoNotOptimize(result);
  }
}

BENCHMARK(JSON_Array_Of_Objects_Unique);
BENCHMARK(JSON_Parse_1);
BENCHMARK(JSON_Fast_Hash_Helm_Chart_Lock);
BENCHMARK(JSON_Equality_Helm_Chart_Lock);
BENCHMARK(JSON_String_Equal)->Args({10})->Args({100});
BENCHMARK(JSON_String_Equal_Small_By_Perfect_Hash)->Args({10});
BENCHMARK(JSON_String_Equal_Small_By_Runtime_Perfect_Hash)->Args({10});
BENCHMARK(JSON_String_Fast_Hash)->Args({10})->Args({100});
BENCHMARK(JSON_String_Key_Hash)->Args({10})->Args({100});
BENCHMARK(JSON_Object_Defines_Miss_Same_Length);
BENCHMARK(JSON_Object_Defines_Miss_Too_Small);
BENCHMARK(JSON_Object_Defines_Miss_Too_Large);
BENCHMARK(JSON_String_Set_Unordered);
