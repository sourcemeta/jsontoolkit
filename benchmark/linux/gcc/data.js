window.BENCHMARK_DATA = {
  "lastUpdate": 1724901989945,
  "repoUrl": "https://github.com/sourcemeta/jsontoolkit",
  "entries": {
    "Benchmark (linux/gcc)": [
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
          "id": "80c122533f0ad7d3cea419889792bb8576364110",
          "message": "Fix benchmark names in the GitHub Actions matrix (#1055)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-28T23:19:48-04:00",
          "tree_id": "66d00469fedb1af257cd6c53e0e557397597dcde",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/80c122533f0ad7d3cea419889792bb8576364110"
        },
        "date": 1724901989005,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18171.19151818153,
            "unit": "ns/iter",
            "extra": "iterations: 38388\ncpu: 18169.9052568511 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 10468.824594481895,
            "unit": "ns/iter",
            "extra": "iterations: 66828\ncpu: 10468.62668342611 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 404609.9070567866,
            "unit": "ns/iter",
            "extra": "iterations: 1743\ncpu: 404599.8009179575 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}