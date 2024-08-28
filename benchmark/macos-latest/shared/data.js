window.BENCHMARK_DATA = {
  "lastUpdate": 1724866617025,
  "repoUrl": "https://github.com/sourcemeta/jsontoolkit",
  "entries": {
    "Benchmark": [
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
          "id": "c776035b01919f77367d3eef04f0ba795406b77d",
          "message": "Introduce automated benchmark comparisons (#1041)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-28T13:33:24-04:00",
          "tree_id": "1d76166271c901fa3fbc79bd2c9599f812e958cc",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/c776035b01919f77367d3eef04f0ba795406b77d"
        },
        "date": 1724866615353,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 212540.0711935437,
            "unit": "ns/iter",
            "extra": "iterations: 3343\ncpu: 212532.7550104696 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 14563.717433382257,
            "unit": "ns/iter",
            "extra": "iterations: 51149\ncpu: 14220.766779409185 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}