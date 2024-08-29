window.BENCHMARK_DATA = {
  "lastUpdate": 1724896037482,
  "repoUrl": "https://github.com/sourcemeta/jsontoolkit",
  "entries": {
    "Benchmark macOS (clang/shared)": [
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
        "date": 1724896035947,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 221466.266929892,
            "unit": "ns/iter",
            "extra": "iterations: 3293\ncpu: 221299.42301852407 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 13350.450103371286,
            "unit": "ns/iter",
            "extra": "iterations: 54172\ncpu: 13350.014767776709 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 9510.373768128418,
            "unit": "ns/iter",
            "extra": "iterations: 73567\ncpu: 9510.391887667021 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}