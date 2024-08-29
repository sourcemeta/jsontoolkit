window.BENCHMARK_DATA = {
  "lastUpdate": 1724897554059,
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
      },
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
          "id": "66a594a329330d28dced59b8937e360c4101b240",
          "message": "Reduce `maximum`/`minimum` conditions from 3 steps to 1 (#1051)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-28T22:06:23-04:00",
          "tree_id": "cc568b45811886ef14294cd7d102844d169ddeb6",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/66a594a329330d28dced59b8937e360c4101b240"
        },
        "date": 1724897553162,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 369629.7385177579,
            "unit": "ns/iter",
            "extra": "iterations: 1916\ncpu: 369594.52609603346 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18647.51568891481,
            "unit": "ns/iter",
            "extra": "iterations: 39359\ncpu: 18646.451866155126 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 11410.119901232218,
            "unit": "ns/iter",
            "extra": "iterations: 61559\ncpu: 11409.500885329513 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}