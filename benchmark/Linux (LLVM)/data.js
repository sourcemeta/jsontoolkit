window.BENCHMARK_DATA = {
  "lastUpdate": 1724898637406,
  "repoUrl": "https://github.com/sourcemeta/jsontoolkit",
  "entries": {
    "Benchmark Linux (LLVM)": [
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
        "date": 1724898636458,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 399140.4712513989,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 399099.36978579476 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18244.608397978624,
            "unit": "ns/iter",
            "extra": "iterations: 38414\ncpu: 18243.426302910397 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 9785.930047093581,
            "unit": "ns/iter",
            "extra": "iterations: 71348\ncpu: 9785.358818747549 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}