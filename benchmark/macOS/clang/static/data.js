window.BENCHMARK_DATA = {
  "lastUpdate": 1724897394338,
  "repoUrl": "https://github.com/sourcemeta/jsontoolkit",
  "entries": {
    "Benchmark macOS (clang/static)": [
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
        "date": 1724896058205,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 198066.55621301147,
            "unit": "ns/iter",
            "extra": "iterations: 3549\ncpu: 198043.95604395604 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 12474.095575440067,
            "unit": "ns/iter",
            "extra": "iterations: 56887\ncpu: 12304.392919296155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 9715.084070852616,
            "unit": "ns/iter",
            "extra": "iterations: 77399\ncpu: 9122.766444010906 ns\nthreads: 1"
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
        "date": 1724897392706,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 197563.08839163836,
            "unit": "ns/iter",
            "extra": "iterations: 3575\ncpu: 197562.23776223775 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 12203.334622754974,
            "unit": "ns/iter",
            "extra": "iterations: 56873\ncpu: 12201.501591264745 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8928.867774732376,
            "unit": "ns/iter",
            "extra": "iterations: 78094\ncpu: 8927.817758086414 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}