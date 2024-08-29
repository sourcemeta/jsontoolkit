window.BENCHMARK_DATA = {
  "lastUpdate": 1724898647995,
  "repoUrl": "https://github.com/sourcemeta/jsontoolkit",
  "entries": {
    "Benchmark Linux (GCC)": [
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
        "date": 1724898647634,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18585.308768681854,
            "unit": "ns/iter",
            "extra": "iterations: 37805\ncpu: 18584.443195344535 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 11202.286847386087,
            "unit": "ns/iter",
            "extra": "iterations: 62786\ncpu: 11201.834644666005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 398792.2434584713,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 398774.45335608633 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}