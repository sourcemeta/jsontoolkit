window.BENCHMARK_DATA = {
  "lastUpdate": 1724897538793,
  "repoUrl": "https://github.com/sourcemeta/jsontoolkit",
  "entries": {
    "Benchmark Linux (clang/shared)": [
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
        "date": 1724896181101,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 378888.8901159609,
            "unit": "ns/iter",
            "extra": "iterations: 1811\ncpu: 378883.7471010492 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17515.606879544437,
            "unit": "ns/iter",
            "extra": "iterations: 40148\ncpu: 17514.385598286342 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 9949.107871677958,
            "unit": "ns/iter",
            "extra": "iterations: 70074\ncpu: 9948.495262151439 ns\nthreads: 1"
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
        "date": 1724897538435,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 380495.82087145903,
            "unit": "ns/iter",
            "extra": "iterations: 1859\ncpu: 380472.7014523938 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17585.55107371612,
            "unit": "ns/iter",
            "extra": "iterations: 39815\ncpu: 17583.880045209087 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 9852.45755608761,
            "unit": "ns/iter",
            "extra": "iterations: 70870\ncpu: 9851.735614505433 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}