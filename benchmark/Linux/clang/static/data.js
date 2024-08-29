window.BENCHMARK_DATA = {
  "lastUpdate": 1724896200101,
  "repoUrl": "https://github.com/sourcemeta/jsontoolkit",
  "entries": {
    "Benchmark Linux (clang/static)": [
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
          "id": "e5f6ad059b73d9e326ae28d92c7f99a0e5e87a00",
          "message": "Print nanoseconds in the validation profile helper (#1050)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-28T21:44:04-04:00",
          "tree_id": "abac8468e94ee6b627d109e24370ff98e25c6009",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/e5f6ad059b73d9e326ae28d92c7f99a0e5e87a00"
        },
        "date": 1724896199205,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 385316.41111721186,
            "unit": "ns/iter",
            "extra": "iterations: 1817\ncpu: 385307.5410016511 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17865.199558136246,
            "unit": "ns/iter",
            "extra": "iterations: 38926\ncpu: 17864.82096799054 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 10006.414545663827,
            "unit": "ns/iter",
            "extra": "iterations: 69739\ncpu: 10006.250663187027 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}