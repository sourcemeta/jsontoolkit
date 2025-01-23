#include <benchmark/benchmark.h>

#include <cassert>       // assert
#include <unordered_set> // std::unordered_set
#include <utility>       // std::utility
#include <vector>        // std::vector

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

static void JSON_String_Set_Flat_Perfect(benchmark::State &state) {
  const sourcemeta::jsontoolkit::KeyHash<sourcemeta::jsontoolkit::JSON::String>
      hasher;
  std::vector<
      std::pair<sourcemeta::jsontoolkit::JSON::String,
                sourcemeta::jsontoolkit::JSON::Object::Container::hash_type>>
      set;

  set.emplace_back("elm", hasher("elm"));
  set.emplace_back("docker", hasher("docker"));
  set.emplace_back("python", hasher("python"));
  set.emplace_back("go:dep", hasher("go:dep"));
  set.emplace_back("terraform", hasher("terraform"));
  set.emplace_back("elixir:hex", hasher("elixir:hex"));
  set.emplace_back("go:modules", hasher("go:modules"));
  set.emplace_back("javascript", hasher("javascript"));
  set.emplace_back("java:maven", hasher("java:maven"));
  set.emplace_back("rust:cargo", hasher("rust:cargo"));
  set.emplace_back("submodules", hasher("submodules"));
  set.emplace_back("java:gradle", hasher("java:gradle"));
  set.emplace_back("php:composer", hasher("php:composer"));
  set.emplace_back("ruby:bundler", hasher("ruby:bundler"));
  set.emplace_back("dotnet:nuget", hasher("dotnet:nuget"));
  set.emplace_back("github_actions", hasher("github_actions"));

  std::vector<std::pair<std::size_t, std::size_t>> toc;
  // 0 = none
  toc.emplace_back(0, 0);
  // 1 = none
  toc.emplace_back(0, 0);
  // 2 = none
  toc.emplace_back(0, 0);
  // 3 = "elm"
  toc.emplace_back(1, 1);
  // 4 = none
  toc.emplace_back(0, 0);
  // 5 = none
  toc.emplace_back(0, 0);
  // 6 = "docker", "python", "go:dep"
  toc.emplace_back(2, 4);
  // 7 = none
  toc.emplace_back(0, 0);
  // 8 = none
  toc.emplace_back(0, 0);
  // 9 = "terraform"
  toc.emplace_back(5, 5);
  // 10 = "elixir:hex", "go:modules", "javascript", "java:maven", "rust:cargo",
  // "submodules"
  toc.emplace_back(6, 11);
  // 11 = "java:grammar"
  toc.emplace_back(12, 12);
  // 12 = "php:composer", "ruby:bundler", "dotnet:nuget"
  toc.emplace_back(13, 15);
  // 13 = none
  toc.emplace_back(0, 0);
  // 14 = "github_actions"
  toc.emplace_back(16, 16);

  const sourcemeta::jsontoolkit::JSON value{"github_actions"};
  for (auto _ : state) {
    const auto value_hash{hasher(value.to_string())};
    auto result = false;

    const auto &hint{toc[value.byte_size()]};
    assert(hint.first <= hint.second);
    if (hint.second != 0) {
      for (std::size_t index = hint.first - 1; index < hint.second; index++) {
        assert(hasher.is_perfect(set[index].second));
        if (set[index].second == value_hash) {
          result = true;
          break;
        }
      }
    }

    assert(result);
    benchmark::DoNotOptimize(result);
  }
}

static void JSON_String_Set_Flat_Perfect_Pre_Hashed(benchmark::State &state) {
  const sourcemeta::jsontoolkit::KeyHash<sourcemeta::jsontoolkit::JSON::String>
      hasher;
  std::vector<
      std::pair<sourcemeta::jsontoolkit::JSON::String,
                sourcemeta::jsontoolkit::JSON::Object::Container::hash_type>>
      set;

  set.emplace_back("elm", hasher("elm"));
  set.emplace_back("docker", hasher("docker"));
  set.emplace_back("python", hasher("python"));
  set.emplace_back("go:dep", hasher("go:dep"));
  set.emplace_back("terraform", hasher("terraform"));
  set.emplace_back("elixir:hex", hasher("elixir:hex"));
  set.emplace_back("go:modules", hasher("go:modules"));
  set.emplace_back("javascript", hasher("javascript"));
  set.emplace_back("java:maven", hasher("java:maven"));
  set.emplace_back("rust:cargo", hasher("rust:cargo"));
  set.emplace_back("submodules", hasher("submodules"));
  set.emplace_back("java:gradle", hasher("java:gradle"));
  set.emplace_back("php:composer", hasher("php:composer"));
  set.emplace_back("ruby:bundler", hasher("ruby:bundler"));
  set.emplace_back("dotnet:nuget", hasher("dotnet:nuget"));
  set.emplace_back("github_actions", hasher("github_actions"));

  std::vector<std::pair<std::size_t, std::size_t>> toc;
  // 0 = none
  toc.emplace_back(0, 0);
  // 1 = none
  toc.emplace_back(0, 0);
  // 2 = none
  toc.emplace_back(0, 0);
  // 3 = "elm"
  toc.emplace_back(1, 1);
  // 4 = none
  toc.emplace_back(0, 0);
  // 5 = none
  toc.emplace_back(0, 0);
  // 6 = "docker", "python", "go:dep"
  toc.emplace_back(2, 4);
  // 7 = none
  toc.emplace_back(0, 0);
  // 8 = none
  toc.emplace_back(0, 0);
  // 9 = "terraform"
  toc.emplace_back(5, 5);
  // 10 = "elixir:hex", "go:modules", "javascript", "java:maven", "rust:cargo",
  // "submodules"
  toc.emplace_back(6, 11);
  // 11 = "java:grammar"
  toc.emplace_back(12, 12);
  // 12 = "php:composer", "ruby:bundler", "dotnet:nuget"
  toc.emplace_back(13, 15);
  // 13 = none
  toc.emplace_back(0, 0);
  // 14 = "github_actions"
  toc.emplace_back(16, 16);

  const sourcemeta::jsontoolkit::JSON value{"github_actions"};
  const auto value_hash{hasher(value.to_string())};
  for (auto _ : state) {
    auto result = false;
    const auto &hint{toc[value.byte_size()]};
    assert(hint.first <= hint.second);
    if (hint.second != 0) {
      for (std::size_t index = hint.first - 1; index < hint.second; index++) {
        assert(hasher.is_perfect(set[index].second));
        if (set[index].second == value_hash) {
          result = true;
          break;
        }
      }
    }

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
BENCHMARK(JSON_String_Set_Unordered);
BENCHMARK(JSON_String_Set_Flat_Perfect);
BENCHMARK(JSON_String_Set_Flat_Perfect_Pre_Hashed);
