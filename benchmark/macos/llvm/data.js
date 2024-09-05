window.BENCHMARK_DATA = {
  "lastUpdate": 1725552603303,
  "repoUrl": "https://github.com/sourcemeta/jsontoolkit",
  "entries": {
    "Benchmark (macos/llvm)": [
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15595e0c311ea528f8262d2811a59bdd650406d8",
          "message": "Use compiler suffixes for all benchmarked platforms (#1153)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-05T12:06:02-04:00",
          "tree_id": "78a440b30c56913824be11c277c0372775572040",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/15595e0c311ea528f8262d2811a59bdd650406d8"
        },
        "date": 1725552601438,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1132.2785055044824,
            "unit": "ns/iter",
            "extra": "iterations: 649664\ncpu: 1111.3190818638557 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2275.744823242262,
            "unit": "ns/iter",
            "extra": "iterations: 317525\ncpu: 2209.21187308086 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 192.51931513673105,
            "unit": "ns/iter",
            "extra": "iterations: 3687393\ncpu: 183.376982057513 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2894.5364065536514,
            "unit": "ns/iter",
            "extra": "iterations: 252070\ncpu: 2702.193835045822 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1952.2366696186853,
            "unit": "ns/iter",
            "extra": "iterations: 371501\ncpu: 1875.208949639435 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1670.0248035677857,
            "unit": "ns/iter",
            "extra": "iterations: 383211\ncpu: 1654.5610642700774 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1417.8708817154914,
            "unit": "ns/iter",
            "extra": "iterations: 534719\ncpu: 1365.952958469775 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1774.7561346315583,
            "unit": "ns/iter",
            "extra": "iterations: 422397\ncpu: 1743.2723243773023 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}