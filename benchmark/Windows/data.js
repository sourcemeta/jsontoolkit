window.BENCHMARK_DATA = {
  "lastUpdate": 1724898823066,
  "repoUrl": "https://github.com/sourcemeta/jsontoolkit",
  "entries": {
    "Benchmark Windows": [
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
          "id": "3541e9c45854d178ff866aab90840fea84794763",
          "message": "Only benchmark static builds (#1053)\n\nOtherwise we get a massive stream of comments on every PR\r\n\r\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-28T22:24:40-04:00",
          "tree_id": "6805802e6c75da224a75b00208d65f8683d0c236",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/3541e9c45854d178ff866aab90840fea84794763"
        },
        "date": 1724898813222,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 813011.6465864282,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 794846.0508701473 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 34085.292673341995,
            "unit": "ns/iter",
            "extra": "iterations: 20364\ncpu: 33760.5578471813 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 22504.093749997624,
            "unit": "ns/iter",
            "extra": "iterations: 32000\ncpu: 22460.9375 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}