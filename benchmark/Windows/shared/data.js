window.BENCHMARK_DATA = {
  "lastUpdate": 1724897690622,
  "repoUrl": "https://github.com/sourcemeta/jsontoolkit",
  "entries": {
    "Benchmark Windows (/shared)": [
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
        "date": 1724896365442,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 823937.4999998716,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 819614.9553571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 30112.201535260447,
            "unit": "ns/iter",
            "extra": "iterations: 23579\ncpu: 30482.632851265957 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 20590.31977250558,
            "unit": "ns/iter",
            "extra": "iterations: 34462\ncpu: 20402.90755034531 ns\nthreads: 1"
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
        "date": 1724897684987,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 852860.0446428162,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 854492.1875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 30128.703507359365,
            "unit": "ns/iter",
            "extra": "iterations: 23579\ncpu: 29819.9669197167 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 20582.241309268673,
            "unit": "ns/iter",
            "extra": "iterations: 34462\ncpu: 20856.30549590854 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}