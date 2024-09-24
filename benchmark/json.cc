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

BENCHMARK(JSON_Array_Of_Objects_Unique);
