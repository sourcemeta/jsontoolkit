window.BENCHMARK_DATA = {
  "lastUpdate": 1724898554281,
  "repoUrl": "https://github.com/sourcemeta/jsontoolkit",
  "entries": {
    "Benchmark macOS": [
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
        "date": 1724898552533,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 221924.46472340616,
            "unit": "ns/iter",
            "extra": "iterations: 3019\ncpu: 221924.47830407423 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 14221.440999313463,
            "unit": "ns/iter",
            "extra": "iterations: 53957\ncpu: 14135.737717071002 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 10575.45533847046,
            "unit": "ns/iter",
            "extra": "iterations: 66948\ncpu: 10540.001194957287 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}