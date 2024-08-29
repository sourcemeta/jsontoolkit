window.BENCHMARK_DATA = {
  "lastUpdate": 1724897771317,
  "repoUrl": "https://github.com/sourcemeta/jsontoolkit",
  "entries": {
    "Benchmark Windows (/static)": [
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
        "date": 1724896356841,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 802388.1696429059,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 34653.933411908256,
            "unit": "ns/iter",
            "extra": "iterations: 20364\ncpu: 34527.84325279906 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 22131.61562499977,
            "unit": "ns/iter",
            "extra": "iterations: 32000\ncpu: 21972.65625 ns\nthreads: 1"
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
        "date": 1724897756155,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 817778.1793841533,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 815763.0522088354 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 35221.57238263583,
            "unit": "ns/iter",
            "extra": "iterations: 20364\ncpu: 35295.12865841681 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 23046.573140922952,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 23018.716308969764 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}