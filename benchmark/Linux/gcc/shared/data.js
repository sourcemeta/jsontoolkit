window.BENCHMARK_DATA = {
  "lastUpdate": 1724896213842,
  "repoUrl": "https://github.com/sourcemeta/jsontoolkit",
  "entries": {
    "Benchmark Linux (gcc/shared)": [
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
        "date": 1724896212916,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 350748.01427115203,
            "unit": "ns/iter",
            "extra": "iterations: 1962\ncpu: 350738.35728848114 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16415.690931313125,
            "unit": "ns/iter",
            "extra": "iterations: 40910\ncpu: 16415.62593497923 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 10776.603135326719,
            "unit": "ns/iter",
            "extra": "iterations: 62641\ncpu: 10776.197937453107 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}