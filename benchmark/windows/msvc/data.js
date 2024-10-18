window.BENCHMARK_DATA = {
  "lastUpdate": 1729278724352,
  "repoUrl": "https://github.com/sourcemeta/jsontoolkit",
  "entries": {
    "Benchmark (windows/msvc)": [
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
          "id": "15595e0c311ea528f8262d2811a59bdd650406d8",
          "message": "Use compiler suffixes for all benchmarked platforms (#1153)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-05T12:06:02-04:00",
          "tree_id": "78a440b30c56913824be11c277c0372775572040",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/15595e0c311ea528f8262d2811a59bdd650406d8"
        },
        "date": 1725552946341,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3770.748445092342,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3766.734345117241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3706.1971527297233,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3690.003747760328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 662.1094866071177,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 662.6674107142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12516.440624999348,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 12695.3125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9435.946268096817,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 6200.698214284119,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5213.589999998476,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6340.532142857569,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
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
          "id": "379f384c0fc5b06020d8e0bdd867c649ca55c10c",
          "message": "Clarify that schema walkers do not depend on property order (#1155)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-05T13:12:01-04:00",
          "tree_id": "46351d59852c80f5ae01fdf626cbf71c10afb664",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/379f384c0fc5b06020d8e0bdd867c649ca55c10c"
        },
        "date": 1725556944528,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3690.106981951854,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3683.029137447969 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3664.1945282243487,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3683.029137447969 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 654.2485714285411,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 655.6919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12689.101785712508,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12834.82142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9434.18913308481,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 6141.654464285702,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5105.696000000535,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6234.88214285674,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
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
          "id": "cce494944151091adc5fbb8c44d5781fd89670e7",
          "message": "Enforce a specific ordering when framing schema pointers (#1154)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-05T13:19:15-04:00",
          "tree_id": "92d9e9b674ab9806d6eae4ed63e430fe15ae638d",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/cce494944151091adc5fbb8c44d5781fd89670e7"
        },
        "date": 1725557354908,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3755.3274012011834,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3683.029137447969 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3732.0088714134936,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3766.734345117241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 650.5333928570524,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 641.7410714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 13183.050000001069,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 13392.857142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9395.336627961191,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 6179.1455357130035,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5191.222321428769,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5161.830357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6336.053571428936,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
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
          "id": "4d28211c0ebd46dd6495e35aa4a6fb71fccc86fd",
          "message": "Make compiler Draft 6 object tests independent of ordering (#1156)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-05T14:09:52-04:00",
          "tree_id": "0233a86935bfd2cce67ef06a0f1ce81df1c3bb13",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/4d28211c0ebd46dd6495e35aa4a6fb71fccc86fd"
        },
        "date": 1725560419134,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3831.3858368110587,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3850.439552786513 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3688.8260269115876,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3690.003747760328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 657.3707142857797,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 655.6919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12999.907589700075,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 12869.641206958897 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9499.510937500232,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 9277.34375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 6214.325892856769,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5184.926999999107,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6325.375892856756,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
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
          "id": "1167bc4b20358edaee38789106b748f3f8b277ff",
          "message": "Make compiler 2019-09 object tests independent of ordering (#1157)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-05T14:29:34-04:00",
          "tree_id": "c37692279e6a4f55c0c622eeae2ce79617358c7f",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/1167bc4b20358edaee38789106b748f3f8b277ff"
        },
        "date": 1725561546559,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3837.3547547234957,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3850.439552786513 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3688.2164496138457,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3683.029137447969 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 657.4807142856441,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 655.6919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 13016.574999998706,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 13113.839285714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9466.49657814014,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 6228.670535713426,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5204.794999999649,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6333.6598214281785,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
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
          "id": "bb3882da4c41e8df8e2d7ddd3db251b313bd9999",
          "message": "Stop assuming object ordering on the compiler/evaluator (#1158)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-05T15:51:36-04:00",
          "tree_id": "c8c0b5b0a3436309112966dbe00948ae736bbd4b",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/bb3882da4c41e8df8e2d7ddd3db251b313bd9999"
        },
        "date": 1725566440828,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3784.484134850684,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3850.439552786513 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3564.5071695172355,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3529.5688022055315 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 644.8943749999461,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 641.7410714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12900.176785714328,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 13113.839285714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9436.598497330706,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 6152.067857142031,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5118.213392857943,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5022.321428571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6251.173999999082,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 6250 ns\nthreads: 1"
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
          "id": "88705fa8e137c403709ca800024ee6617257a721",
          "message": "Make use of `unordered_map` for JSON objects (#1142)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-05T16:06:03-04:00",
          "tree_id": "ced2076b78728c57cd1d0ad014e3abd6d8e73c4d",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/88705fa8e137c403709ca800024ee6617257a721"
        },
        "date": 1725568029080,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3649.8457257563623,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3609.7862749829296 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2133.745000000076,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2148.4375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 636.8503348214308,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 627.7901785714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12804.80892857229,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12834.82142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 8957.857142857556,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 9068.080357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5995.420535714605,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4976.476785714112,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 4882.8125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6240.454464285148,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
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
          "id": "567e714a7f552a680da7a161a7c97c95d18c895a",
          "message": "Upgrade Noa to the latest version (#1166)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-05T16:52:58-04:00",
          "tree_id": "e5b0af78c69d18c8e0dc8b078c733b1f01b73d1b",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/567e714a7f552a680da7a161a7c97c95d18c895a"
        },
        "date": 1725570160540,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3626.172715277862,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3609.7862749829296 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2137.2390625003845,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2148.4375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 635.5453571428272,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 627.7901785714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12736.387500000643,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12555.80357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 8969.438975719671,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8998.28572193874 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5969.68035714391,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5004.847000000154,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6049.828571428456,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
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
          "id": "c389796a6892e4d8428a0db545fa7bb6b16c4ac8",
          "message": "Add a Draft 4 benchmark case that exercises non-recursive `$ref` (#1168)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-06T12:16:35-04:00",
          "tree_id": "ed6e71c22d52ad62bbaf4fdd6573c9782991a46b",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/c389796a6892e4d8428a0db545fa7bb6b16c4ac8"
        },
        "date": 1725639950981,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3680.2584281106115,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3683.029137447969 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2105.9179083902814,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2085.6608098892966 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 665.0138392858805,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 669.6428571428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12681.17642331621,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 12555.74751898429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9562.371596556637,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5998.9633928572475,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5012.509999999111,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6151.771428572975,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 11209.671875000993,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11230.46875 ns\nthreads: 1"
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
          "id": "8b1d2e700655bb27a552b8343d956e943c34ee09",
          "message": "Don't mark `$ref` destination on non-recursive cases (#1169)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-06T13:49:49-04:00",
          "tree_id": "ad3c6d0cf5dc0c1def74ae610194af73cef836ec",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/8b1d2e700655bb27a552b8343d956e943c34ee09"
        },
        "date": 1725645564122,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3604.735526201097,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3609.7862749829296 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2106.0693750001747,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2099.609375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 640.5600892857625,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 641.7410714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12661.47678571323,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12555.80357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9519.771786732896,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5941.629464285622,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4972.919000000502,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6045.835714286138,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 8039.443080356535,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gorez.tony@gmail.com",
            "name": "Tony Gorez",
            "username": "tony-go"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "84974daae1bbc6f8041e9d759e5117a2e0e064a3",
          "message": "Make generic pointer token operators explicit (#1170)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-06T14:14:06-04:00",
          "tree_id": "bbffc7c80b7ca3213e28dca0f41ed14d323abf13",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/84974daae1bbc6f8041e9d759e5117a2e0e064a3"
        },
        "date": 1725647054384,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3675.7498647321263,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3599.3239297786968 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2191.4262499997503,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2197.265625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 645.0017857142752,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 641.7410714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12958.549961831932,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 12869.641206958897 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9558.466256847229,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 6095.612500000616,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5113.868000000821,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6279.162499999253,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 8363.723214285405,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8370.535714285714 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tony Gorez",
            "username": "tony-go",
            "email": "gorez.tony@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "84974daae1bbc6f8041e9d759e5117a2e0e064a3",
          "message": "Make generic pointer token operators explicit (#1170)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-06T18:14:06Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/84974daae1bbc6f8041e9d759e5117a2e0e064a3"
        },
        "date": 1725650068977,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3683.2482442004116,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3683.029137447969 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2158.42124999952,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2197.265625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 654.4204464286654,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 655.6919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 13747.318092331669,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 13811.32227088272 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9633.504687499795,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 9521.484375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 6077.124107142547,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5081.70199999995,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6120.740178571639,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 8457.864920247304,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8370.498345989527 ns\nthreads: 1"
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
          "id": "dd78dbdf45cdcd83b16c594991c203b16fd9d1f3",
          "message": "Check static reference labels before unconditionally unrolling (#1172)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-06T15:31:48-04:00",
          "tree_id": "2ea7fd56aaf6844f68d5d8432bf6c0706c848985",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/dd78dbdf45cdcd83b16c594991c203b16fd9d1f3"
        },
        "date": 1725651726988,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3656.5958014818907,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3690.003747760328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2383.5847281419938,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 646.2435714286332,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 627.7901785714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12845.97678571434,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12834.82142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9342.041330173215,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5971.999999999866,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4954.825071272721,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4973.497744194415 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6044.862499999835,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 8297.176798317381,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8370.498345989527 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gorez.tony@gmail.com",
            "name": "Tony Gorez",
            "username": "tony-go"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2ade645fab3ac37ecdf09ca57aa54eedf5071a77",
          "message": "feat(jsonpointer): introduce `WeakPointer` (#1173)\n\nThe current `Pointer` abstraction stores properties by making copies\r\ninstead of keeping references. The new `WeakPointer` is designed to\r\neliminate unnecessary copies by holding references to the properties\r\ninstead, thereby improving efficiency.\r\n\r\n---------\r\n\r\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-06T21:49:49+02:00",
          "tree_id": "0c08db90905f5f8c98cfaf9b9fe82b2ccbf26c9b",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/2ade645fab3ac37ecdf09ca57aa54eedf5071a77"
        },
        "date": 1725652822253,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3625.525132990641,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3599.3239297786968 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2302.6606249999304,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2294.921875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 653.1998883928683,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 645.2287946428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12752.901785717086,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12834.82142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9325.979348306355,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9207.54818058848 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5941.028571429894,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4967.936999998983,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6024.76999999908,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5937.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 8274.024553571735,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8370.535714285714 ns\nthreads: 1"
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
          "id": "64e3fa611d3fd0c8f71125f2e40778fb5d1f4b0d",
          "message": "Measure compile time on `validator_helper.cc` (#1174)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-06T17:03:37-04:00",
          "tree_id": "a45077ba6d2e87129c2e629f3515d8f5d8b725f9",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/64e3fa611d3fd0c8f71125f2e40778fb5d1f4b0d"
        },
        "date": 1725657390508,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3730.3567315060213,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3683.029137447969 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2294.6016801320434,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 649.0042410714889,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 645.2287946428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 13292.610714285858,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 13392.857142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9613.650000000362,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 9521.484375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 6003.482142856699,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4996.678999999631,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6057.455357143178,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 8322.654017856987,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8370.535714285714 ns\nthreads: 1"
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
          "id": "67cd9bacfaab33f22a422a0b02718c9e2f54293d",
          "message": "Fix static reference cycles between subschemas (#1175)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-06T17:54:21-04:00",
          "tree_id": "061a3da65c5742645137b73bfce95f5011d96e83",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/67cd9bacfaab33f22a422a0b02718c9e2f54293d"
        },
        "date": 1725660205443,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3701.071962132465,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3690.003747760328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2093.527187500044,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2099.609375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 646.1502678571865,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 641.7410714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12928.024428464334,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 12869.641206958897 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9418.67357734951,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5987.238392858022,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4967.77450247776,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 5081.617260372554 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6110.321428571247,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 8300.886160714783,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8370.535714285714 ns\nthreads: 1"
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
          "id": "f640240e814603f709efb86dc2391c53b519485b",
          "message": "Property detect recursion when compiling `$ref` (#1176)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-09T11:34:07-04:00",
          "tree_id": "ece2265798ba8b8134e320f7b345622c78ed4262",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/f640240e814603f709efb86dc2391c53b519485b"
        },
        "date": 1725896665296,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3497.8406739811085,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3449.351329428133 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2199.7834375000025,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2197.265625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 647.2148437499976,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 645.2287946428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 13275.94519667287,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 13497.428582908113 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9480.50544417316,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 6063.272000000098,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5937.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5045.001000000866,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6111.4633928564135,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 8854.765826939163,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8789.023263289004 ns\nthreads: 1"
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
          "id": "fc68c8a8a30f8f7dfc5468589aa39745115aeb26",
          "message": "Improve compilation speed of highly recursive schemas (#1177)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-09T11:49:54-04:00",
          "tree_id": "2596c042dc82088a83dba0a8009837492239da4b",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/fc68c8a8a30f8f7dfc5468589aa39745115aeb26"
        },
        "date": 1725897583380,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3618.5267708165743,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3609.7862749829296 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2341.5549759432374,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 645.4684821427747,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 641.7410714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12956.173409940457,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 12869.641206958897 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9362.87723214286,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 9416.85267857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5934.30624999972,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4951.282902930768,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4973.497744194415 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6109.054464285382,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 8748.00916067371,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8998.28572193874 ns\nthreads: 1"
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
          "id": "6c78f131029c647be79cc5da5874fa8d50415cde",
          "message": "Better handle invalid static references when compiling (#1178)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-09T12:19:35-04:00",
          "tree_id": "cd30c8ddb822ace930770c235bfe5ca1bf7e927e",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/6c78f131029c647be79cc5da5874fa8d50415cde"
        },
        "date": 1725899319840,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3661.7918539430807,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3599.3239297786968 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2283.0985679703754,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 671.9875000000185,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 680.1060267857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 13235.531761018055,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 13183.534894933504 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9623.335610110009,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9626.073097887956 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 6304.693750000264,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5169.015999999829,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6369.234821428498,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 8910.886160713766,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8893.69419642857 ns\nthreads: 1"
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
          "id": "98b9007745106d35a64489b6f2733e6e419e5ecd",
          "message": "Guard against infinite recursion on the schema evaluator (#1179)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-09T13:04:20-04:00",
          "tree_id": "a3a873969ba58a3b3b555a93ce1b64901941f46b",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/98b9007745106d35a64489b6f2733e6e419e5ecd"
        },
        "date": 1725902068505,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3619.607460609146,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3609.7862749829296 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2153.0931249998275,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2197.265625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 652.129285714206,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 641.7410714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12379.848214286376,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12276.785714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9072.07467823628,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8998.28572193874 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5984.4866071431725,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4996.507000000747,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6054.914285714728,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 8194.266741072503,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a0aafd3f62c03514db9b71b1c89f2ed69669b130",
          "message": "Fix sorting JSON arrays of objects (#1180)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-09T19:02:01Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/a0aafd3f62c03514db9b71b1c89f2ed69669b130"
        },
        "date": 1725909149675,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3570.2232741048774,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3609.7862749829296 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2124.42218750013,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2148.4375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 641.1806249998011,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 641.7410714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12358.078571427963,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12555.80357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 8880.879103218114,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8789.023263289004 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5956.014999999298,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5937.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5001.776000001428,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6044.908928570538,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 8146.8660714304315,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
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
          "id": "a0aafd3f62c03514db9b71b1c89f2ed69669b130",
          "message": "Fix sorting JSON arrays of objects (#1180)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-09T15:02:01-04:00",
          "tree_id": "ef2092c5a36af64acd7b3d9f53e27c549bc2a32f",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/a0aafd3f62c03514db9b71b1c89f2ed69669b130"
        },
        "date": 1725909188340,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3630.727014164315,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3690.003747760328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2117.879374999987,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2148.4375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 651.6411607142305,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 641.7410714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12551.11607142924,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12555.80357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 8819.580357143206,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8893.69419642857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5955.21500000018,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5937.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4976.7050000002655,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6067.8160714289215,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 8452.149553571177,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8544.921875 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a0aafd3f62c03514db9b71b1c89f2ed69669b130",
          "message": "Fix sorting JSON arrays of objects (#1180)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-09T19:02:01Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/a0aafd3f62c03514db9b71b1c89f2ed69669b130"
        },
        "date": 1725995613123,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3652.7730859467797,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3609.7862749829296 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2112.004120540474,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2085.6608098892966 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 658.6141964285324,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 669.6428571428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12800.808928570208,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12834.82142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9038.76545194052,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9207.54818058848 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5977.01785714325,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4944.520999999895,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6045.105999999123,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5937.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 8423.595982142628,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8370.535714285714 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gorez.tony@gmail.com",
            "name": "Tony Gorez",
            "username": "tony-go"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fda77d5cda5588f9c22888d95eb2ae4e8b41b259",
          "message": "refactor: stringify and get to handle WeakPointer (#1182)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-11T18:27:02+02:00",
          "tree_id": "86994b08718ad6c4264cff4f6c5bed9800f6f156",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/fda77d5cda5588f9c22888d95eb2ae4e8b41b259"
        },
        "date": 1726072622972,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3579.460750962788,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3599.3239297786968 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2128.6956250001767,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2148.4375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 643.3550223212998,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 645.2287946428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12484.251785715676,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12555.80357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9147.319431609942,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9207.54818058848 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5976.888392857356,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4956.316964286397,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 4882.8125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6013.281249999685,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 8436.164062499378,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8370.535714285714 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tony Gorez",
            "username": "tony-go",
            "email": "gorez.tony@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fda77d5cda5588f9c22888d95eb2ae4e8b41b259",
          "message": "refactor: stringify and get to handle WeakPointer (#1182)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-11T16:27:02Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/fda77d5cda5588f9c22888d95eb2ae4e8b41b259"
        },
        "date": 1726081989999,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3659.835428865092,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3683.029137447969 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2104.9194028119027,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2085.6608098892966 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 662.265513392768,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 662.6674107142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 13012.963558197627,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 12869.641206958897 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9067.17693224746,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8998.28572193874 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 6129.724107142108,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5058.164000001852,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6114.036607142128,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 8419.865536312802,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8370.498345989527 ns\nthreads: 1"
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
          "id": "6e9309cdab7eb6bebf3f9eb5a5e8dd5677524231",
          "message": "Support pushing a `Pointer` to the back of a `WeakPointer` (#1184)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-11T16:18:58-04:00",
          "tree_id": "ca7b69e72df554f608d379693a6050c0759b2544",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/6e9309cdab7eb6bebf3f9eb5a5e8dd5677524231"
        },
        "date": 1726086522603,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3586.17230456512,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3609.7862749829296 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2102.7630834406154,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2085.6608098892966 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 635.4034598213027,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 627.7901785714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12463.124999998498,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12555.80357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 8944.551140396243,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8789.023263289004 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5935.807142857844,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4932.42339948559,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6021.705357142082,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 8410.5122767854,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8370.535714285714 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gorez.tony@gmail.com",
            "name": "Tony Gorez",
            "username": "tony-go"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5152b09cd26a9755ab4af6a15011918d6f4e6e57",
          "message": "feat(jsonschema): use `WeakPointer `in `EvaluationContext`  (#1186)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-12T10:18:52-04:00",
          "tree_id": "1fa2e1cd978558f9a2d7512dbfe55a11b3923c10",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/5152b09cd26a9755ab4af6a15011918d6f4e6e57"
        },
        "date": 1726151277304,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3143.2830357139046,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 3138.9508928571427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1686.5115045682385,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1688.0569053190366 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 620.5881999999292,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 609.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11581.510937499927,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6603.187500000932,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5854.6803571419205,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4821.00205580861,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4813.068779171382 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5938.3723214279735,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 7232.48102678653,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7324.21875 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tony Gorez",
            "username": "tony-go",
            "email": "gorez.tony@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5152b09cd26a9755ab4af6a15011918d6f4e6e57",
          "message": "feat(jsonschema): use `WeakPointer `in `EvaluationContext`  (#1186)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-12T14:18:52Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/5152b09cd26a9755ab4af6a15011918d6f4e6e57"
        },
        "date": 1726168367219,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3087.7562499997325,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 3069.1964285714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1669.203949193901,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1688.0569053190366 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 607.6084821428043,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11569.132142860943,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6753.218749998219,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5919.673000000785,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5781.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4881.914113315252,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4973.497744194415 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5978.371428572667,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 7198.216071429896,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 7254.464285714285 ns\nthreads: 1"
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
          "id": "4f689bd9da2db682f0faef1253e2634b3f89893d",
          "message": "Add benchmark case for `patternProperties` with true schemas (#1187)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-12T17:36:17-04:00",
          "tree_id": "f42e68df5723aa3e1347893a24156e73e92a3002",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/4f689bd9da2db682f0faef1253e2634b3f89893d"
        },
        "date": 1726177525030,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3089.169978243242,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 3114.5430872517377 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1639.5567592256832,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1649.691975652695 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 617.7470535713984,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11315.046428571966,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11439.732142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6518.46071428557,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5739.459821429347,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5719.866071428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4736.790389991177,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4757.258711838135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5782.189285714675,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5719.866071428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 7233.989955357195,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7149.832589285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 15258.953125000726,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 14997.20982142857 ns\nthreads: 1"
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
          "id": "9959e1fbec73e66142af7266fbfe3cdb3043f27d",
          "message": "Test `patternProperties` with wildcard schema on 2019-09 (#1188)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-12T17:49:12-04:00",
          "tree_id": "a81fe767de7c98c3f2816c491e3fef4606d107ec",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9959e1fbec73e66142af7266fbfe3cdb3043f27d"
        },
        "date": 1726178342436,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3119.204464285628,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 3138.9508928571427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1637.6573660714655,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1639.2299107142858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 615.6332142856919,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11282.723437499699,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11230.46875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6509.093749999449,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5752.680000000509,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4762.572907529241,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4813.068779171382 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5847.480357143046,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 7242.4620535700105,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7149.832589285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 15381.665178568126,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 15345.982142857143 ns\nthreads: 1"
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
          "id": "8e19adee60109171661aa5dad7a672383d660252",
          "message": "Optimize `patternProperties` set to wildcard schemas before 2019-09 (#1189)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-12T18:05:17-04:00",
          "tree_id": "701099754023aa5ec390ddd3b367d94f8343b429",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/8e19adee60109171661aa5dad7a672383d660252"
        },
        "date": 1726179278461,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3097.5736607134404,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 3069.1964285714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1644.5178571429558,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1639.2299107142858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 602.638214285735,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11487.128571425435,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11439.732142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6536.537946428515,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6452.287946428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5691.988392858402,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5719.866071428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4710.593290708664,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4649.139195659996 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5777.740000000904,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5781.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 7338.311383929659,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7324.21875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8028.24665178749,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
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
          "id": "0e6f059ece2c01f7346c9b1ad467efe198f73fcf",
          "message": "Add a new JSON Schema benchmark case for few optional `properties` (#1190)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-13T11:03:32-04:00",
          "tree_id": "d96bef385261c0d7d6cd8142508e03169a4afa2c",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/0e6f059ece2c01f7346c9b1ad467efe198f73fcf"
        },
        "date": 1726240428260,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3142.5919642862664,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 3138.9508928571427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1643.0962053572023,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1639.2299107142858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 611.61669642859,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 627.7901785714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 935.8459661403339,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 941.6848474621216 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11468.53749999975,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11439.732142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6515.732142858611,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5889.363392857458,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4871.030889311845,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5963.917857142422,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 7444.805803569209,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7498.604910714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8215.39397321404,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
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
          "id": "6e26075d85e584ff1b03d516afcc8d230a576cad",
          "message": "Prefer unrolling `properties` for a small amount of optional subschemas (#1191)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-13T11:39:33-04:00",
          "tree_id": "56ffe2ff4cc0d4a217e3cd475474c7870aa642b5",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/6e26075d85e584ff1b03d516afcc8d230a576cad"
        },
        "date": 1726242519879,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3300.561563377353,
            "unit": "ns/iter",
            "extra": "iterations: 213333\ncpu: 3295.9035873493553 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1652.0464160406268,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1611.3270459863531 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 605.5844642856657,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 641.3469866072116,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 627.7901785714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11447.38749999874,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11474.609375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6601.482142857305,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5894.82999999973,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5781.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4839.215035012612,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5958.398214285613,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 7425.185714286695,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 7393.973214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8276.363839286712,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8370.535714285714 ns\nthreads: 1"
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
          "id": "8a89db2c8b6b3c0e6ea4576037e92939d726d657",
          "message": "Print the compiled schema in `benchmark/validator_helper.cc` (#1192)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-13T12:16:49-04:00",
          "tree_id": "06f36d077509c1295da08df179bc08033b2694b6",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/8a89db2c8b6b3c0e6ea4576037e92939d726d657"
        },
        "date": 1726245093295,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3099.6263392860815,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 3069.1964285714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1619.043973214218,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1604.3526785714287 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 599.2136607142738,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 585.9375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 633.913214285745,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 641.7410714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11670.66071428532,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6545.184821428661,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5941.949999999403,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4909.462000000531,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6023.649999999999,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 7596.256696428431,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7672.991071428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8405.164062499993,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8370.535714285714 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8a89db2c8b6b3c0e6ea4576037e92939d726d657",
          "message": "Print the compiled schema in `benchmark/validator_helper.cc` (#1192)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-13T16:16:49Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/8a89db2c8b6b3c0e6ea4576037e92939d726d657"
        },
        "date": 1726254823671,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3092.739285714328,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 3069.1964285714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1626.6654017858937,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1604.3526785714287 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 595.9927999999763,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 593.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 633.455892857171,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 627.7901785714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11437.12321428682,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11439.732142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6523.4589285714555,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5952.480357142877,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4903.975000000855,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6025.99375000068,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 7357.620535714459,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7324.21875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8208.068080356614,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
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
          "id": "7051a3c836cebfa9e3b6c8d612877616f1ed1d75",
          "message": "Implement new `AssertionPropertyType(Strict)` instructions (#1193)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-13T16:15:04-04:00",
          "tree_id": "a818160d7697d154c45e185dfc84051fbce7c761",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/7051a3c836cebfa9e3b6c8d612877616f1ed1d75"
        },
        "date": 1726259100720,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3253.931249999604,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 3208.7053571428573 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1678.237938679899,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1688.0569053190366 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 614.9486607142762,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 592.4450000000953,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 585.9375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11992.301562500528,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 12207.03125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6740.599999998511,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6835.9375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5849.950000000247,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4842.311577956397,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5939.420999998219,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5937.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 7852.353794642092,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7672.991071428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8374.667410713244,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8370.535714285714 ns\nthreads: 1"
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
          "id": "dcf4042039449479b985ddcd7aa30446682bf342",
          "message": "Don't emit a wrapper instruction when unrolling `$ref` (#1195)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-13T17:22:36-04:00",
          "tree_id": "b117ef5c42037a7c908b5dc585a7f9d22436d854",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/dcf4042039449479b985ddcd7aa30446682bf342"
        },
        "date": 1726263112296,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3073.4397321430556,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 3069.1964285714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1651.0183586928968,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1649.691975652695 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 619.1101785712964,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 585.2369642856355,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 585.9375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11839.576785713949,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6726.0357142860785,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5915.2319999998335,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5781.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4860.720612249956,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5966.155357143066,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1188.4440625003378,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1196.2890625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8388.24218750034,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8370.535714285714 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dcf4042039449479b985ddcd7aa30446682bf342",
          "message": "Don't emit a wrapper instruction when unrolling `$ref` (#1195)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-13T21:22:36Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/dcf4042039449479b985ddcd7aa30446682bf342"
        },
        "date": 1726513990126,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3013.8950502361386,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 2982.0093388580467 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1658.2118136975132,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1688.0569053190366 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 605.3946428571472,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 589.9480357141687,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 585.9375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12012.989062498036,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11962.890625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6812.500000001315,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6835.9375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5833.01800000072,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5937.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4789.2046555385905,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4757.258711838135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6024.331249999396,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1187.7237499999994,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1171.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8164.355069845156,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8161.235887339789 ns\nthreads: 1"
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
          "id": "241387ecf50f11838b5b10cc5db97f200835d080",
          "message": "Benchmark a Draft 4 `$ref` to a single property (#1198)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-16T20:07:07-03:00",
          "tree_id": "04ec68f635b588870ff3b87d397b6d0d0bd63aa1",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/241387ecf50f11838b5b10cc5db97f200835d080"
        },
        "date": 1726528598710,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3041.1602678570252,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 3069.1964285714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1628.0210080216484,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1611.3270459863531 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 611.2630357142125,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 586.3154999999551,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 593.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11816.69464285611,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6723.175000000684,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5660.959821428589,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5719.866071428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4743.5550388885695,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4757.258711838135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5770.113392857062,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5719.866071428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1146.1150000000332,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1143.9732142857142 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8019.621651785665,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 593.1309821428548,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 585.9375 ns\nthreads: 1"
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
          "id": "7a0e25844a9e9f9668c722227b6315f1d6b3eabb",
          "message": "Add a `has` function to check if a document contains a given Pointer (#1201)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-16T20:25:12-03:00",
          "tree_id": "255395af8621818a3e035bc2536bc7c9e01a7917",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/7a0e25844a9e9f9668c722227b6315f1d6b3eabb"
        },
        "date": 1726529773339,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3067.868750000408,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 3069.1964285714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1632.1799107143725,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1604.3526785714287 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 608.2867857143373,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 580.118303571453,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 585.9375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12343.624999999747,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12276.785714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6891.356249999449,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6835.9375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5725.125000000162,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4785.347321428292,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 4743.303571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5923.069642857318,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1145.9500000000844,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1147.4609375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8037.207589285548,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 593.0941071429377,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
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
          "id": "bbd5ea9920ab4f42578a002c98cce65cb27b4e4a",
          "message": "Stop assuming that relative instance locations have up to 1 token (#1202)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-16T20:29:06-03:00",
          "tree_id": "dff7d7b4bfd477a4536333d7243dfc6a9d6cae30",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/bbd5ea9920ab4f42578a002c98cce65cb27b4e4a"
        },
        "date": 1726530048228,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3160.681250000558,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 3138.9508928571427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1762.0448768262163,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1757.8140694768476 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 640.5598214286101,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 641.7410714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 595.4863392856525,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11792.667857142598,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6935.8102678585,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6975.446428571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5851.109821429239,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4902.351988705902,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5952.052000000094,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 6093.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1208.5514062501802,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1196.2890625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8065.665178571229,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 621.454910714192,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
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
          "id": "d57beae35a288341306ea7b0cf285e75cfcbf95a",
          "message": "Generalize `AssertionPropertyType` to work on multi-token paths (#1203)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-16T20:53:03-03:00",
          "tree_id": "2ef8d64834f04dfbae169521f0e1fc4d196ba20e",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/d57beae35a288341306ea7b0cf285e75cfcbf95a"
        },
        "date": 1726531374669,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3022.048214284772,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 2999.441964285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1651.6879464286865,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1639.2299107142858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 629.6154464284394,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 627.7901785714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 589.7159000001011,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 593.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12009.349999999586,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 12207.03125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6574.740178572419,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5639.312999999219,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5781.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4694.440612590438,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4708.436849189396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5714.669000001322,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1164.147142856921,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1171.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7894.6562499991405,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 590.3569642857829,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 585.9375 ns\nthreads: 1"
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
          "id": "3785582e0eeff22aeeee61d70922324ce1c7d750",
          "message": "Unroll `properties` of 1 keyword even more aggressively (#1199)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-16T21:06:17-03:00",
          "tree_id": "bcec3be9ad840bc4c57a9712e939355b35b5aea3",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/3785582e0eeff22aeeee61d70922324ce1c7d750"
        },
        "date": 1726532156992,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3032.164774438195,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 3048.276213054892 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1636.1217168830967,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1649.691975652695 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 616.2248214286998,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 427.71791504525777,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 433.1752908979249 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11542.885714285538,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11439.732142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6545.711607143647,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5671.5749999989375,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5781.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4715.052935386061,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4708.436849189396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5709.127678571235,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5719.866071428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1154.4870312501841,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1171.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7882.447399788681,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 7742.7109700403125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 432.53106250006107,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 429.6875 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gorez.tony@gmail.com",
            "name": "Tony Gorez",
            "username": "tony-go"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e86ad1e333c11b6fc2659a0f32ae883ef1040e20",
          "message": "refactor: clean bundle from std::future (#1197)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-17T11:59:00+02:00",
          "tree_id": "3a8e00b54de6c330306398ded943f2be286dec84",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/e86ad1e333c11b6fc2659a0f32ae883ef1040e20"
        },
        "date": 1726567699809,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3536.868651357257,
            "unit": "ns/iter",
            "extra": "iterations: 213333\ncpu: 3588.8727951137425 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2092.069120612777,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2085.6608098892966 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 752.8852678570428,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 502.733400000011,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 500 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11899.665625000112,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6794.247767856833,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6801.060267857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 6660.330357143655,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5478.7820000001375,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5861.384821428268,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1179.0926785713348,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1171.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8247.84041142657,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8161.235887339789 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 442.1720625000347,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 439.453125 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tony Gorez",
            "username": "tony-go",
            "email": "gorez.tony@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e86ad1e333c11b6fc2659a0f32ae883ef1040e20",
          "message": "refactor: clean bundle from std::future (#1197)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-17T09:59:00Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/e86ad1e333c11b6fc2659a0f32ae883ef1040e20"
        },
        "date": 1726600456874,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2940.3441212274033,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 2982.0093388580467 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1612.9976698675453,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1611.3270459863531 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 605.925446428606,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 427.72831250005083,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 429.6875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11558.723437499197,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6542.313392858188,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5663.69800000075,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5781.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4719.858972899508,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4708.436849189396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5707.915178569628,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5719.866071428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1168.535357142884,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1171.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8017.883928572087,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 435.42020865937866,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 442.5921450478798 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tony Gorez",
            "username": "tony-go",
            "email": "gorez.tony@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e86ad1e333c11b6fc2659a0f32ae883ef1040e20",
          "message": "refactor: clean bundle from std::future (#1197)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-17T09:59:00Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/e86ad1e333c11b6fc2659a0f32ae883ef1040e20"
        },
        "date": 1726686820494,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2910.268926879763,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 2915.742464661201 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1617.8963496232823,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1611.3270459863531 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 615.4758928571725,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 424.34508416107474,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11829.198437499856,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11962.890625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6531.764285715066,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5642.668000000413,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5781.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4684.669162207741,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4708.436849189396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5691.483035714587,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1168.6029687499656,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1171.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8080.241071429636,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 434.69418749992883,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 429.6875 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tony Gorez",
            "username": "tony-go",
            "email": "gorez.tony@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e86ad1e333c11b6fc2659a0f32ae883ef1040e20",
          "message": "refactor: clean bundle from std::future (#1197)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-17T09:59:00Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/e86ad1e333c11b6fc2659a0f32ae883ef1040e20"
        },
        "date": 1726773211186,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2968.9917680639956,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 2982.0093388580467 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1633.8404460890072,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1649.691975652695 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 625.4478571429039,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 627.7901785714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 431.41890446274925,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 433.1752908979249 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11811.901785713579,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6587.257142857286,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5656.612000000223,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4725.010546898569,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4708.436849189396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5730.617857142509,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5719.866071428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1187.1848214285917,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1171.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8029.118620006887,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 7951.97342869005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 441.2515624999713,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 439.453125 ns\nthreads: 1"
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
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "distinct": true,
          "id": "1e772cfa4c19fbae1234af8cebb40911a82f2ea3",
          "message": "Update contribution agreement link\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-20T10:55:51+03:00",
          "tree_id": "b49f9b7b7e161b7d80b1ac8adc4038136036af35",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/1e772cfa4c19fbae1234af8cebb40911a82f2ea3"
        },
        "date": 1726819581485,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2931.1850849698135,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 2915.742464661201 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1624.895758928245,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1639.2299107142858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 624.1845535715892,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 432.9665832761376,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 433.1752908979249 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11558.096874999534,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11474.609375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6618.761607143142,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5698.604464285495,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5719.866071428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4844.72889448437,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4813.068779171382 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5777.976785714551,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1179.8909374999055,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1171.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8086.719866070727,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 439.70981249998425,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 439.453125 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "id": "1e772cfa4c19fbae1234af8cebb40911a82f2ea3",
          "message": "Update contribution agreement link\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-20T07:55:51Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/1e772cfa4c19fbae1234af8cebb40911a82f2ea3"
        },
        "date": 1726859552068,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2904.462040214146,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 2849.4755904643557 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1623.4004464286452,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1604.3526785714287 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 604.1857142857258,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 421.0522287358133,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11494.048214282364,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11439.732142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6449.179464287422,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5593.862499998588,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4635.375971820983,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4603.804919207409 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5657.894642855662,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1153.8058928571056,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1143.9732142857142 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7981.732142857213,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 430.6820092584096,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 433.1752908979249 ns\nthreads: 1"
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
          "id": "be7d39bf8a716eed4f928a4213e4becf2919b418",
          "message": "Pull ClangFormat from `pip` on CI (#1209)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-21T13:38:50-03:00",
          "tree_id": "877498fe1266562c795cfcf2602ddec4bb551dc0",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/be7d39bf8a716eed4f928a4213e4becf2919b418"
        },
        "date": 1726937300673,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2965.8249536662247,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 2982.0093388580467 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1613.3189732143092,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1639.2299107142858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 614.1255357142938,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 429.42656933000563,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 433.1752908979249 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11525.062500000771,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11439.732142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6598.435714286057,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5740.125892857456,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5719.866071428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4820.480777215212,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5816.117857142851,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1171.3431249999574,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1171.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8116.256696428793,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 446.0694006064073,
            "unit": "ns/iter",
            "extra": "iterations: 1544828\ncpu: 445.0333629374921 ns\nthreads: 1"
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
          "id": "1f0cfa2e2bdf9fd8d9413b281e2f5aa30319a480",
          "message": "Make compiler JSON formatter more resilient to unknown keywords (#1194)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-21T14:42:54-03:00",
          "tree_id": "cbbdb8927bfe3adbd5a87ebb53dda1c9ee80f815",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/1f0cfa2e2bdf9fd8d9413b281e2f5aa30319a480"
        },
        "date": 1726941139245,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2924.6640004413052,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 2915.742464661201 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1603.5794642859407,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1604.3526785714287 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 613.8299999999422,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 423.4408750001251,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 419.921875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11498.616071431146,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11439.732142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6696.429464286422,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5602.031250000599,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4655.377578967403,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4603.804919207409 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5644.843749999089,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1162.7771428570504,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1143.9732142857142 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7942.603827658952,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 7951.97342869005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 434.6361874999616,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 439.453125 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gorez.tony@gmail.com",
            "name": "Tony Gorez",
            "username": "tony-go"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "efb9776ebf10bc6db145c806e00991f07e5a9bdd",
          "message": "refactor: use `std::uint8_t` for enum (#1210)\n\nFirst advice taken from the great tidy!\r\n\r\n---------\r\n\r\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-23T20:14:30+02:00",
          "tree_id": "ba709d087f8f8090158225d48d7cbd5e63049e88",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/efb9776ebf10bc6db145c806e00991f07e5a9bdd"
        },
        "date": 1727115916851,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2963.785842426494,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 2982.0093388580467 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1603.7721626525783,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1611.3270459863531 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 590.7068750001291,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 425.29803966706794,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11453.767187500574,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11474.609375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6765.745535714375,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5863.274107144077,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4670.101564574265,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4652.615498145427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5681.637499999884,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5719.866071428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1192.625312500084,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1171.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8002.720982143481,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 439.033625000036,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 439.453125 ns\nthreads: 1"
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
          "id": "b5496c2dc2fb883822daa1e9c9c8dfadd718c434",
          "message": "Benchmark `additionalProperties` with only `type` inside (#1211)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-23T14:46:17-04:00",
          "tree_id": "3281e129384d71e2bcf612f88470ada519e24eb2",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/b5496c2dc2fb883822daa1e9c9c8dfadd718c434"
        },
        "date": 1727117783581,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2984.9017553824383,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 2982.0093388580467 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1623.6733100403148,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1649.691975652695 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 607.8116071429512,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 433.11099999996827,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 429.6875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11495.201562500059,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11474.609375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6723.01785714272,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5811.19642857126,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4818.276603296468,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4813.068779171382 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5843.740000000253,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5781.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1183.1432142855647,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1171.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8223.366413540778,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8161.235887339789 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 438.5238750001008,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 439.453125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1599.6614064766843,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1572.9621163200113 ns\nthreads: 1"
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
          "id": "a4c71c90c47bd1f5b977eaec440a4370e1433213",
          "message": "Upgrade ClangFormat to v19.1.0 (#1212)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-23T14:47:03-04:00",
          "tree_id": "a202780771c0140a90ac21537d7acae5efb463ab",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/a4c71c90c47bd1f5b977eaec440a4370e1433213"
        },
        "date": 1727118197228,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2933.6355809640017,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 2915.742464661201 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1634.0462053570093,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1604.3526785714287 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 623.4852678572013,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 627.7901785714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 443.61294590729307,
            "unit": "ns/iter",
            "extra": "iterations: 1544828\ncpu: 445.0333629374921 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11493.320312499833,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11474.609375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6699.348214287478,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5785.50357142912,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4807.117550997643,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5859.0223214289545,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1215.5746428573723,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1227.6785714285713 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8162.9497767846515,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 449.8988236877546,
            "unit": "ns/iter",
            "extra": "iterations: 1544828\ncpu: 455.1477575497078 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1619.5848975993179,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1611.3270459863531 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a4c71c90c47bd1f5b977eaec440a4370e1433213",
          "message": "Upgrade ClangFormat to v19.1.0 (#1212)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-23T18:47:03Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/a4c71c90c47bd1f5b977eaec440a4370e1433213"
        },
        "date": 1727119189212,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2999.1861367582283,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 2982.0093388580467 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1640.259821428458,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1639.2299107142858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 616.5778571428859,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 440.0714999999877,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 439.453125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11430.782812499985,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11474.609375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6851.9848214277445,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5893.737000001237,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5781.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4889.443750000412,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 4882.8125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5944.633035714527,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1183.6816071426679,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1199.7767857142858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8633.811456200337,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8579.760804639265 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 447.5693125000646,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 449.21875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1608.2392857142177,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1604.3526785714287 ns\nthreads: 1"
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
          "id": "23ee0c8f9f348933503d51c4e18393293681ee94",
          "message": "Introduce a new `LoopPropertiesType(Strict)` compiler step (#1213)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-23T15:22:50-04:00",
          "tree_id": "c920dbab7f396ae4987fb77ed96531eefb72703e",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/23ee0c8f9f348933503d51c4e18393293681ee94"
        },
        "date": 1727119989968,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3029.699858772314,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 3048.276213054892 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1638.6676339286462,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1639.2299107142858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 608.3584821429408,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 430.5101855708911,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 433.1752908979249 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12094.737499998993,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11997.767857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6767.978571427793,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6835.9375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5806.8455357138355,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5719.866071428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4786.101192946576,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4757.258711838135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5894.770535714348,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 690.6915178570878,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 697.5446428571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8104.43526785625,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 428.1153213572947,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 433.1752908979249 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 960.373767690115,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 962.6111774057243 ns\nthreads: 1"
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
          "id": "16ce6900ee9de7b126c1c429dfab820f24360b2c",
          "message": "Improve error when making a `$ref` to a non-schema (#1214)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-23T19:51:50-04:00",
          "tree_id": "349d0d36196714dc7602db185fa598f77a782a88",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/16ce6900ee9de7b126c1c429dfab820f24360b2c"
        },
        "date": 1727136122616,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3007.090237457712,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 2982.0093388580467 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1659.683928570997,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1639.2299107142858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 608.1151785713652,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 420.7865679800311,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12071.51093749914,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 12207.03125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6754.177455357636,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6626.674107142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5804.689999999937,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5781.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4800.087187578119,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5894.0464285715925,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 683.5138392858653,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 683.59375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8127.135044644668,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 428.338191927859,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 433.1752908979249 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 968.258674884513,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 962.6111774057243 ns\nthreads: 1"
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
          "id": "373d89e2a842504d995aa04cad8aac96b23e33b2",
          "message": "Remake `Pointer` method `.has()` as `.try_get()` (#1215)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-23T21:15:13-04:00",
          "tree_id": "e9711d17de0586e3ba8733dcd01d076d10946c18",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/373d89e2a842504d995aa04cad8aac96b23e33b2"
        },
        "date": 1727141108278,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2990.14754717126,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 2982.0093388580467 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1641.8209821428115,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1674.107142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 603.5468750001526,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 433.9938124999776,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 429.6875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12169.557142856645,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12276.785714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6746.772321429363,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6626.674107142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5730.243000000428,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4722.095131335689,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4757.258711838135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5807.437500000186,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 673.5187499999589,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 662.6674107142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8047.209821430303,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 437.6111249999326,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 439.453125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 960.5544372525145,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 941.6848474621216 ns\nthreads: 1"
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
          "id": "15667db3116ab9dc8eeeb2b886d2125e6cc6b050",
          "message": "Perform a one-time pointer resolution on `AssertionPropertyType(Strict)` (#1216)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-23T21:27:25-04:00",
          "tree_id": "a4be1f55db789719fa1152fe386ebc4902d85e04",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/15667db3116ab9dc8eeeb2b886d2125e6cc6b050"
        },
        "date": 1727141859273,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3011.2193528954645,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 2982.0093388580467 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1637.7823660716574,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1639.2299107142858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 603.4238392857105,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 424.1712113661121,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11844.148214281957,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6692.300000001491,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5720.284821429848,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5719.866071428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4735.876304353784,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4757.258711838135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5790.156250000678,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 678.0556250000863,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 669.6428571428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7961.864009537345,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 7951.97342869005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 428.99099999999635,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 429.6875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 961.8965348674129,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 962.6111774057243 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gorez.tony@gmail.com",
            "name": "Tony Gorez",
            "username": "tony-go"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f69aa975142a567cc584f20e8f834f0c1fae011",
          "message": "fix(jsonschema): delete effectless std::move (#1217)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-24T16:30:44+02:00",
          "tree_id": "7dc5ce46b7f7193ed5fdbfe10c98938591e0a276",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/6f69aa975142a567cc584f20e8f834f0c1fae011"
        },
        "date": 1727188883495,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2960.8382918624275,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 2982.0093388580467 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1641.6683035715655,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1639.2299107142858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 592.947410714219,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 585.9375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 422.85839642886083,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11825.039285716748,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6632.163392857088,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5794.548999999733,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5781.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4843.591021063195,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5850.531250000505,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 671.0652678569724,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 669.6428571428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8108.074517521967,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 7951.97342869005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 438.1630000000314,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 439.453125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 955.8331893601974,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 962.6111774057243 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gorez.tony@gmail.com",
            "name": "Tony Gorez",
            "username": "tony-go"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f9d541d14b82d9eb2363963356cf7eec094050bf",
          "message": "fix(jsonschema): remove effect less move (#1218)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-24T16:47:06+02:00",
          "tree_id": "1844eb1708a7a262ed8ed0a33ef4563489c0177d",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/f9d541d14b82d9eb2363963356cf7eec094050bf"
        },
        "date": 1727189841008,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2959.803468355172,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 2915.742464661201 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1638.3881696427748,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1639.2299107142858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 594.6882142857086,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 418.7242015863575,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11879.09375000018,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11962.890625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6645.65446428611,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5742.172321429199,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5719.866071428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4742.304112286105,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4917.700709153369 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5822.635714285493,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 676.2833705356337,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 680.1060267857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7947.424107141997,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 430.8307500000552,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 429.6875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 954.39452928824,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 941.6848474621216 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gorez.tony@gmail.com",
            "name": "Tony Gorez",
            "username": "tony-go"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18bda4cba448e9a4c8e1656086a4bc4556354502",
          "message": "fix(jsonschema): use ref in fragment_string (#1219)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-24T17:10:15+02:00",
          "tree_id": "10a45d322327c6a2722d2eb2e626fb8ad890730d",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/18bda4cba448e9a4c8e1656086a4bc4556354502"
        },
        "date": 1727191283917,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3050.1851231396136,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 3048.276213054892 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1651.348883928705,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1639.2299107142858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 603.2872321428938,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 435.2566875000008,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 439.453125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11843.142857141434,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6710.8526785710455,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5834.596000000828,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5937.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4788.175011763464,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5868.388392857225,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 683.3033035714412,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 669.6428571428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8175.093414761422,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8161.235887339789 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 449.3687323119514,
            "unit": "ns/iter",
            "extra": "iterations: 1544828\ncpu: 434.91896832527635 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 974.0759374999186,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 976.5625 ns\nthreads: 1"
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
          "id": "47c995618cdc0d5e47cd9d68b6fe187b91af8fd1",
          "message": "Increase threshold for preferring `properties` loop vs unroll (#1220)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-24T13:43:08-04:00",
          "tree_id": "e2ba5153c0fa548dbc44c683ffb36ba42eb14860",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/47c995618cdc0d5e47cd9d68b6fe187b91af8fd1"
        },
        "date": 1727200411469,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3022.4225896889034,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 3048.276213054892 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1644.7160714285758,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1674.107142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 605.1322321427831,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 422.49835619399664,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12114.410714283558,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12276.785714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6857.005357143667,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6975.446428571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5826.204464284501,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4819.442137894709,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5895.870535714007,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 670.0623883928764,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 662.6674107142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8179.939732142166,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 435.99987500002163,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 439.453125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 957.2670280058697,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 962.6111774057243 ns\nthreads: 1"
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
          "id": "8bc8744a66238e783c2786f24e60588fef19e37c",
          "message": "Introduce a new `AssertionTypeStringBounded` instruction (#1221)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-24T14:49:55-04:00",
          "tree_id": "cdc7ce6fef46945530970c8ff070a036f62c382f",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/8bc8744a66238e783c2786f24e60588fef19e37c"
        },
        "date": 1727204474879,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2983.647668041959,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 2982.0093388580467 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1691.5769029617175,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1688.0569053190366 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 619.0045535715528,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 426.1313031902249,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 433.1752908979249 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12133.796428571486,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11997.767857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6872.9107142852445,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6801.060267857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5934.274107141439,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4923.876248996301,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4973.497744194415 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6017.696428571639,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 682.046316964145,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 680.1060267857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8285.861607143985,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8370.535714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 433.42244941865835,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 433.1752908979249 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 983.2392187497873,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 976.5625 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8bc8744a66238e783c2786f24e60588fef19e37c",
          "message": "Introduce a new `AssertionTypeStringBounded` instruction (#1221)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-24T18:49:55Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/8bc8744a66238e783c2786f24e60588fef19e37c"
        },
        "date": 1727205188403,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2958.1248489101617,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 2982.0093388580467 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1677.9710415370603,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1688.0569053190366 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 605.5762499999315,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 420.92283362616354,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12124.245312499226,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 12207.03125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6962.854464282893,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6975.446428571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5794.184821431664,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4797.6784577497065,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4757.258711838135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5890.343750000479,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 678.0800892853124,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 683.59375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8200.167410714292,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 428.3539375001055,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 429.6875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 973.632343750097,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 952.1484375 ns\nthreads: 1"
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
          "id": "0fd8c922be04f008997ff3250594e426f08ea4fa",
          "message": "Introduce a new `SchemaCompilerAssertionTypeArrayBounded` (#1222)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-24T15:50:47-04:00",
          "tree_id": "6ee72a198c99865f76ec9f398bde723e6157235c",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/0fd8c922be04f008997ff3250594e426f08ea4fa"
        },
        "date": 1727208059647,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3062.019196428472,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 3069.1964285714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1657.356613377233,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1688.0569053190366 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 610.9516071429002,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 427.7566875001071,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 429.6875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12251.155357140371,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12276.785714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6835.630580356776,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6801.060267857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5827.261607141817,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4843.494145976943,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5934.634000000187,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5937.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 686.4872767854889,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 680.1060267857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8107.915178572662,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 435.604187499905,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 429.6875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 987.8629687499085,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1000.9765625 ns\nthreads: 1"
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
          "id": "b252e8b13c15936b06c50dba15baf2eca76efa49",
          "message": "Introduce a new `SchemaCompilerAssertionTypeObjectBounded` (#1223)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-24T16:08:01-04:00",
          "tree_id": "23f057fc68961731e007543e9867e8cca4ea244d",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/b252e8b13c15936b06c50dba15baf2eca76efa49"
        },
        "date": 1727209072306,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3085.437946428523,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 3138.9508928571427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1705.4263356518952,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1726.4218349853784 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 626.5556249999804,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 447.0038088382948,
            "unit": "ns/iter",
            "extra": "iterations: 1544828\ncpu: 445.0333629374921 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12415.457142858648,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12555.80357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6913.619642856718,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6975.446428571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5852.516964286077,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4844.465178572526,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 4743.303571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5953.700000000188,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 671.2578125000083,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 662.6674107142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8092.954049312928,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8161.235887339789 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 444.6568161634277,
            "unit": "ns/iter",
            "extra": "iterations: 1544828\ncpu: 445.0333629374921 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 961.555151091452,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 962.6111774057243 ns\nthreads: 1"
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
          "id": "d4ec572a9eb758d78eec6b6004fa93dcab53cb99",
          "message": "Short-circuit `unique()` on JSON arrays of 0/1 items (#1224)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-24T17:07:43-04:00",
          "tree_id": "3d64da82f7470ef056215ef78c6dc3edabec6f4a",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/d4ec572a9eb758d78eec6b6004fa93dcab53cb99"
        },
        "date": 1727213002056,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3014.3115242867143,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 2982.0093388580467 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1666.4664733485893,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1649.691975652695 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 614.3907142856619,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 439.1955625000321,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 439.453125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12219.889285712985,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12276.785714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6891.2555803584455,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6801.060267857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5832.843999999113,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5937.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4834.02599999863,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5890.959000000748,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5781.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 663.4529464284761,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 669.6428571428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8031.284598215242,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 450.7533125000407,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 449.21875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 948.7250675334762,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 941.6848474621216 ns\nthreads: 1"
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
          "id": "a92e2f9a59b5f945c20de9242ab0567e53f25e57",
          "message": "Benchmark JSON uniqueness on arrays of objects (#1225)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-24T18:07:08-04:00",
          "tree_id": "0751900474f0068b430934b5a4c3fc842a7b6270",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/a92e2f9a59b5f945c20de9242ab0567e53f25e57"
        },
        "date": 1727216376728,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5043.423214285017,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5022.321428571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3239.7549107139002,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 3208.7053571428573 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1706.1175182248335,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1726.4218349853784 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 633.1360714284529,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 641.7410714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 446.88547851288143,
            "unit": "ns/iter",
            "extra": "iterations: 1544828\ncpu: 445.0333629374921 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12378.045312498642,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 12207.03125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 7089.6857142871895,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 7114.955357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5810.356250001242,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4791.614077334029,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4757.258711838135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5891.182142856825,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 692.1544642856198,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 697.5446428571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8069.7232142869425,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 454.8426784281,
            "unit": "ns/iter",
            "extra": "iterations: 1445161\ncpu: 454.10165372577865 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 984.1214356598172,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 983.537507349327 ns\nthreads: 1"
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
          "id": "b0fd711f112303bf4dc5a565341d064dd7f822d6",
          "message": "Add additional PoS traces for prelude/dispatch on the evaluator (#1227)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-25T11:40:24-04:00",
          "tree_id": "496782c5610944904f9901041a22e6f85ae66d99",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/b0fd711f112303bf4dc5a565341d064dd7f822d6"
        },
        "date": 1727279383757,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5167.782999999417,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3260.6214285709916,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 3208.7053571428573 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1712.4309738185007,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1726.4218349853784 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 615.6985714285262,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 447.7047282933728,
            "unit": "ns/iter",
            "extra": "iterations: 1544828\ncpu: 445.0333629374921 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12405.16071428642,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12276.785714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 7111.083705356894,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7149.832589285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5800.2446428570165,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5719.866071428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4772.738778434431,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4708.436849189396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5866.462000000183,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5781.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 683.4392857143712,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 683.59375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8081.069280941216,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 7951.97342869005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 453.2863852803854,
            "unit": "ns/iter",
            "extra": "iterations: 1544828\ncpu: 455.1477575497078 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 973.4688957727622,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 983.537507349327 ns\nthreads: 1"
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
          "id": "54a7659947038786397fb63ee5b887ad4e14e5e4",
          "message": "Dispatch evaluator instructions using `switch` (#1228)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-25T12:11:55-04:00",
          "tree_id": "091488dd5c045e18f873dc19ba75d263a21a6f37",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/54a7659947038786397fb63ee5b887ad4e14e5e4"
        },
        "date": 1727281344692,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5123.470535715617,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5022.321428571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2285.1265625000397,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2294.921875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1743.0647705933886,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1757.8140694768476 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 530.9729000000516,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 531.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 397.49921875006527,
            "unit": "ns/iter",
            "extra": "iterations: 1792000\ncpu: 401.08816964285717 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6188.53303571346,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 4079.800125356636,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 4080.628873877011 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5405.754464285499,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4409.435624999957,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4492.1875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5459.978571429198,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 571.9724107143926,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8045.175223215952,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 406.5554818501693,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 776.4217633928284,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
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
          "id": "8cfbb8c09a6a7fae4c69179cd2188bfef2638000",
          "message": "Reduce a bit evaluation macros (#1229)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-25T12:33:28-04:00",
          "tree_id": "8dafd5b4b23097cca9a975980688ec3736f823c3",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/8cfbb8c09a6a7fae4c69179cd2188bfef2638000"
        },
        "date": 1727282627423,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4917.16199999928,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2156.6353124995885,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2148.4375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1721.8263916342146,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1726.4218349853784 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 526.5557142856941,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 530.1339285714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 395.74190848209616,
            "unit": "ns/iter",
            "extra": "iterations: 1792000\ncpu: 392.36886160714283 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5406.833035712973,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3555.5962275964625,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3529.5688022055315 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5281.004464285794,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4266.976242420487,
            "unit": "ns/iter",
            "extra": "iterations: 165926\ncpu: 4331.75029832576 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5322.25089285784,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 511.1696428571122,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 516.1830357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7719.939285714921,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 7812.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 399.87029018433736,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 398.9955179019858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 693.5798214286137,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 683.59375 ns\nthreads: 1"
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
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "distinct": true,
          "id": "c2f5bfa08f944d54dd417d8a185b57f9d599224c",
          "message": "Revert \"Reduce a bit evaluation macros (#1229)\"\n\nThis reverts commit 8cfbb8c09a6a7fae4c69179cd2188bfef2638000.",
          "timestamp": "2024-09-25T12:39:35-04:00",
          "tree_id": "091488dd5c045e18f873dc19ba75d263a21a6f37",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/c2f5bfa08f944d54dd417d8a185b57f9d599224c"
        },
        "date": 1727282972261,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5100.903000000017,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2304.0503303010855,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1756.9247163448076,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1726.4218349853784 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 537.0070000001306,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 407.23223628429577,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6235.350000001257,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 4153.282494138128,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 4171.309515518722 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5541.203000000223,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4398.019846842927,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4349.184052614203 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5475.203999999394,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 570.630625000084,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8099.8616071426,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 408.0309237486954,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 787.0043526787234,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
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
          "id": "0f78f54e220d56853500312271faab7b09f096a7",
          "message": "Split JSON Schema evaluator into a separate standalone module (#1234)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-25T16:16:03-04:00",
          "tree_id": "776d6c33a5a96655a733c1182ea8e1819c9230af",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/0f78f54e220d56853500312271faab7b09f096a7"
        },
        "date": 1727295999284,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5158.810714285827,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5161.830357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2266.374062500631,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2246.09375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1737.89325587512,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1764.7867646517202 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 534.5725000001949,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 531.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 403.5810935901052,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6390.196428573145,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 4104.0150428509605,
            "unit": "ns/iter",
            "extra": "iterations: 165926\ncpu: 4049.244844087123 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5329.376000001957,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4326.7637380522965,
            "unit": "ns/iter",
            "extra": "iterations: 165926\ncpu: 4331.75029832576 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5410.289999999804,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 542.3867999998038,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8001.177455356462,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 414.45460649748577,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 426.19975775893937 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 757.3309151785526,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
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
          "id": "3f36f09378595894161ccb763ec281f469d353d3",
          "message": "Internally split `EvaluationContext` into its own file (#1235)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-25T16:45:25-04:00",
          "tree_id": "47976f28725e4528b902941875be4145d8f78f6f",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/3f36f09378595894161ccb763ec281f469d353d3"
        },
        "date": 1727297784867,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4847.956250001419,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 4882.8125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2212.7359374998437,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2246.09375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1692.9307859835462,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1726.4218349853784 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 531.4900000000762,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 531.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 404.7220176462903,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 398.9955179019858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6296.584821429617,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3851.8470982142258,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3836.495535714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5318.207142857595,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4323.630624999452,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4296.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5381.628999998611,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 534.6589285715758,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 530.1339285714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8048.784598214199,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 404.92572299441866,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 738.315535714256,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 739.3973214285714 ns\nthreads: 1"
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
          "id": "aef3550d5bd6eae44cf7e94faa4b41df343e9093",
          "message": "Revise `EvaluationContext` interface to support resetting instances (#1236)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-25T17:15:22-04:00",
          "tree_id": "22b012ecd2759af29fad77665a05e1c46efe7474",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/aef3550d5bd6eae44cf7e94faa4b41df343e9093"
        },
        "date": 1727299570480,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5074.68599999811,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2289.4146323493515,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1789.1065697951638,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1803.1516943180618 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 562.8508035712798,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 417.5085384500566,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6525.610714285384,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3972.167968749726,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 4010.8816964285716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5394.5339285722375,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4452.21250000003,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4492.1875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5486.365178571516,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 573.1139285714448,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8057.139508927946,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 425.0945625000213,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 419.921875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 959.6383662327801,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 962.6111774057243 ns\nthreads: 1"
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
          "id": "bf8d8e6ecaa528f2dacb8e17d48dc0259c72321a",
          "message": "Elevate `EvaluationContext` as part of the public interface (#1237)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-25T17:30:56-04:00",
          "tree_id": "45b0bc96fd5f8ee46b0cee0d62639cc8854573fd",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/bf8d8e6ecaa528f2dacb8e17d48dc0259c72321a"
        },
        "date": 1727300526336,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4981.626999999662,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2317.8235292148674,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1784.8020860697156,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1803.1516943180618 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 546.9484821428441,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 413.5174458250548,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6642.151785714288,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3942.132254464476,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3923.6886160714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5407.3429999994005,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4458.28019911592,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5507.411999999476,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 573.9115178570842,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7990.93303571498,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 423.0307022592832,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 807.6246651787601,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
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
          "id": "8a0d3e89e0be66fb6fafac42b84f347f243e486c",
          "message": "Support reusing the `EvaluationContext` across evaluation runs (#1238)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-25T17:46:26-04:00",
          "tree_id": "a13388efb57f2c02abd9076e9201011ed13c710f",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/8a0d3e89e0be66fb6fafac42b84f347f243e486c"
        },
        "date": 1727301407588,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5004.349999999249,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2335.632995945211,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1762.518752777792,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1764.7867646517202 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 550.6272000000081,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 422.93077813646426,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6385.861607142829,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3949.6975446429165,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 4010.8816964285716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5529.511000002003,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4525.584044845192,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4551.471682968352 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5580.351000000974,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 577.9526999999689,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 578.125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8257.45758928623,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 429.3320090474547,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 442.5921450478798 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 804.0495535713684,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
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
          "id": "00f4879203ab505d62f3edc12a39f3c7ecb2c1d1",
          "message": "Remove unnecessary `break` statements in the evaluator (#1240)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-26T11:55:21-04:00",
          "tree_id": "c1c81815d39a05ebcf2b507bed0e99c04fd505d5",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/00f4879203ab505d62f3edc12a39f3c7ecb2c1d1"
        },
        "date": 1727366709285,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5174.256999999898,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2359.518571428712,
            "unit": "ns/iter",
            "extra": "iterations: 280000\ncpu: 2343.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1757.2652297008697,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1757.8140694768476 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 570.450089285706,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 431.4239375000284,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 439.453125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6469.738839285049,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6452.287946428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3888.1210926403523,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3934.1447604557848 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5592.514285714246,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4628.130419933613,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4603.804919207409 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5668.064999999842,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5781.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 574.9158928571164,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8353.489493349265,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8370.498345989527 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 429.1804374999941,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 429.6875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 799.1763392856756,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gorez.tony@gmail.com",
            "name": "Tony Gorez",
            "username": "tony-go"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ef19daf7ca042544239111c701a51232f3f5576",
          "message": "feat(json): expose JSON::try_at (#1231)\n\nThe final goal is to replace [this\r\ncode](https://github.com/sourcemeta/jsontoolkit/blob/main/src/jsonpointer/jsonpointer.cc#L69-L70),\r\nthat do two check instead of one.\r\n\r\n---------\r\n\r\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-26T18:28:44+02:00",
          "tree_id": "ba99dcc12f669b7c53f0f4632717d5724ea74341",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/3ef19daf7ca042544239111c701a51232f3f5576"
        },
        "date": 1727368724776,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5052.667857142978,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5022.321428571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2304.407584366852,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1725.9887102751707,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1726.4218349853784 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 540.8743999998933,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 400.4732812288418,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 398.9955179019858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6474.308928572116,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3833.3643973219114,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3836.495535714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5418.075892858302,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4441.471875000502,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4394.53125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5511.168750000398,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 553.8041964283836,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8078.963169642707,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 403.0175668295856,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 398.9955179019858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 781.759040178441,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tony Gorez",
            "username": "tony-go",
            "email": "gorez.tony@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3ef19daf7ca042544239111c701a51232f3f5576",
          "message": "feat(json): expose JSON::try_at (#1231)\n\nThe final goal is to replace [this\r\ncode](https://github.com/sourcemeta/jsontoolkit/blob/main/src/jsonpointer/jsonpointer.cc#L69-L70),\r\nthat do two check instead of one.\r\n\r\n---------\r\n\r\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-26T16:28:44Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/3ef19daf7ca042544239111c701a51232f3f5576"
        },
        "date": 1727378022360,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5305.942857142602,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2299.9447545259945,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1740.8541436193796,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1715.9613535369228 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 542.5802000002024,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 399.9571696447825,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6455.463392857805,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3805.1183035709664,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3836.495535714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5408.410714285391,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4459.264773469881,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5484.896428571671,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 567.718124999926,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8143.2841817654735,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8161.235887339789 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 406.78791487554713,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 781.5686383926743,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tony Gorez",
            "username": "tony-go",
            "email": "gorez.tony@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3ef19daf7ca042544239111c701a51232f3f5576",
          "message": "feat(json): expose JSON::try_at (#1231)\n\nThe final goal is to replace [this\r\ncode](https://github.com/sourcemeta/jsontoolkit/blob/main/src/jsonpointer/jsonpointer.cc#L69-L70),\r\nthat do two check instead of one.\r\n\r\n---------\r\n\r\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-26T16:28:44Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/3ef19daf7ca042544239111c701a51232f3f5576"
        },
        "date": 1727464372989,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5291.492999999718,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2341.0914285721315,
            "unit": "ns/iter",
            "extra": "iterations: 280000\ncpu: 2343.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1726.2875270396903,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1726.4218349853784 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 539.0690000001541,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 531.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 401.8044463480497,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 398.9955179019858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6424.332589285747,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6452.287946428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3887.404843920019,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3934.1447604557848 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5470.849107142937,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4458.47568988096,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5599.140178572627,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 555.6027000000086,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8125.967633928,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 410.7898254111803,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 779.3091517857168,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gorez.tony@gmail.com",
            "name": "Tony Gorez",
            "username": "tony-go"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a749553891d18d9821536549be9540d3e4f47b7",
          "message": "refactor(uri): use smaller base type for enum (#1243)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-30T15:54:57+02:00",
          "tree_id": "2578c4d183180899689b72f078963ac2c6f4c8f7",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9a749553891d18d9821536549be9540d3e4f47b7"
        },
        "date": 1727705118638,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5174.060714284881,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5161.830357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2414.380714285715,
            "unit": "ns/iter",
            "extra": "iterations: 280000\ncpu: 2399.5535714285716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1800.1244865238039,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1764.7867646517202 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 561.9617999999491,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 401.77130795657746,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 398.9955179019858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6727.650000000956,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3981.4494974114277,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 3989.9482322352997 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5410.860000000639,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4461.890305081915,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5668.156000000409,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 582.5449107142333,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 585.9375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8171.577805456607,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8161.235887339789 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 405.82278099005754,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 812.3561383928748,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gorez.tony@gmail.com",
            "name": "Tony Gorez",
            "username": "tony-go"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9546dc83361caa221b928268084b7855b214729d",
          "message": "refactor(jsonschema/uri): remove useless std::move (#1242)\n\nAccording to clang tidy:\r\n\r\n```cpp\r\n/Users/tonygo/oss/jsontoolkit/src/evaluator/context.cc:74:33: error: std::move of the variable 'new_instance' of \r\nthe trivially-copyable type 'std::reference_wrapper<const JSON>' has no effect; remove std::move() \r\n[performance-move-const-arg,-warnings-as-errors]\r\n```\r\n\r\n---------\r\n\r\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-30T16:16:16+02:00",
          "tree_id": "7cdc6447d572d285471b9207c8bbaaec05af2403",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9546dc83361caa221b928268084b7855b214729d"
        },
        "date": 1727706425143,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5308.648214285736,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2344.542919036663,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1802.976873006609,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1803.1516943180618 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 568.0640178571903,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 414.3149145395316,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6745.843750000598,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3989.7990807157103,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 3989.9482322352997 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5386.3669999998365,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4447.387091136234,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5487.488999999641,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 572.5942857142943,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8145.707589285931,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 416.9454557727652,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 804.9974084833833,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 795.2005378569028 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tony Gorez",
            "username": "tony-go",
            "email": "gorez.tony@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9546dc83361caa221b928268084b7855b214729d",
          "message": "refactor(jsonschema/uri): remove useless std::move (#1242)\n\nAccording to clang tidy:\r\n\r\n```cpp\r\n/Users/tonygo/oss/jsontoolkit/src/evaluator/context.cc:74:33: error: std::move of the variable 'new_instance' of \r\nthe trivially-copyable type 'std::reference_wrapper<const JSON>' has no effect; remove std::move() \r\n[performance-move-const-arg,-warnings-as-errors]\r\n```\r\n\r\n---------\r\n\r\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-30T14:16:16Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9546dc83361caa221b928268084b7855b214729d"
        },
        "date": 1727723665621,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5074.9544642850915,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5022.321428571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2455.3996428575633,
            "unit": "ns/iter",
            "extra": "iterations: 280000\ncpu: 2455.3571428571427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1847.4439709319586,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1841.5195013566977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 561.4575892857537,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 408.77674067949835,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6834.282366069897,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6801.060267857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 4094.1718749998304,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 4098.074776785715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5477.07589285754,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4518.943184686913,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5535.222321429144,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 573.2446428571133,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8178.952008928471,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 415.72994126209176,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 806.8598214285215,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 819.6149553571429 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michael Mior",
            "username": "michaelmior",
            "email": "michael.mior@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dfaec1d45fc830d7c63fb34e4b1f09546eda7270",
          "message": "Use the `nosubs` option to `std::regex` (#1244)\n\nThis is possible since any matching groups will not be exposed in the\r\nfinal schema and might make matching slightly more efficient.\r\n\r\nSigned-off-by: Michael Mior <mmior@mail.rit.edu>",
          "timestamp": "2024-10-01T19:01:47Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/dfaec1d45fc830d7c63fb34e4b1f09546eda7270"
        },
        "date": 1727810058113,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4961.148246561513,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4973.497744194415 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2336.9341105651,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1840.4448442468042,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1858.958547944808 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 553.2801785715183,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 415.577945733197,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6733.847098213833,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6626.674107142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 4078.722984422248,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 4080.628873877011 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5453.177678571056,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4459.976825928402,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5690.308928572156,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5719.866071428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 570.7663392856587,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8282.844866069894,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 412.3590711275714,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 800.7969866071614,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michael.mior@gmail.com",
            "name": "Michael Mior",
            "username": "michaelmior"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dfaec1d45fc830d7c63fb34e4b1f09546eda7270",
          "message": "Use the `nosubs` option to `std::regex` (#1244)\n\nThis is possible since any matching groups will not be exposed in the\r\nfinal schema and might make matching slightly more efficient.\r\n\r\nSigned-off-by: Michael Mior <mmior@mail.rit.edu>",
          "timestamp": "2024-10-01T15:01:47-04:00",
          "tree_id": "3f2cd757fad72c8d085d622112f480997ae83c87",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/dfaec1d45fc830d7c63fb34e4b1f09546eda7270"
        },
        "date": 1727810113323,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5464.391964285451,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2578.646372885517,
            "unit": "ns/iter",
            "extra": "iterations: 263529\ncpu: 2549.52965328294 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1987.1912133833503,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 628.4093749999086,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 627.7901785714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 470.34740409544287,
            "unit": "ns/iter",
            "extra": "iterations: 1493333\ncpu: 470.8427390273971 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 7454.762276787161,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7498.604910714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 4467.90875000005,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4492.1875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5989.543999999114,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5937.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4931.368749999316,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 4882.8125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6190.827678571915,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 644.1227678570677,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 641.7410714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 9188.560267858747,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 9068.080357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 468.7754841017359,
            "unit": "ns/iter",
            "extra": "iterations: 1493333\ncpu: 460.3795670490105 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 890.1138392857381,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 889.3694196428571 ns\nthreads: 1"
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
          "id": "ea9fa250822a99d20dc02a00fd453d3d2bace647",
          "message": "Don't assume the instance is an object when unrolling `properties` (#1245)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-01T16:15:33-04:00",
          "tree_id": "9b65bd33937f9b56a496ca87e9cda17bc7bfa61c",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/ea9fa250822a99d20dc02a00fd453d3d2bace647"
        },
        "date": 1727814331167,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4998.699999998735,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2353.457857143277,
            "unit": "ns/iter",
            "extra": "iterations: 280000\ncpu: 2343.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1970.4525339872732,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 553.4657142858025,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 403.5780757330783,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 398.9955179019858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6813.989955356854,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6801.060267857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3988.052208835576,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 3989.9482322352997 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5436.506000000918,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4470.558749999042,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4394.53125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5531.734000001052,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 575.4148214285643,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 585.9375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8215.043526786607,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 415.94729936669233,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 808.8188616071079,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 819.6149553571429 ns\nthreads: 1"
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
          "id": "d3a3b9e0cfc2009077edc2c689c6c629c35c4a34",
          "message": "Print more descriptive failures on validation benchmark helper (#1246)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-01T17:39:29-04:00",
          "tree_id": "a099de2c022cc87db484f46321deb22288c762b7",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/d3a3b9e0cfc2009077edc2c689c6c629c35c4a34"
        },
        "date": 1727819424403,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4951.274999999669,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2356.263571428485,
            "unit": "ns/iter",
            "extra": "iterations: 280000\ncpu: 2343.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1948.5507576345155,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1967.0776491764725 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 552.2762500000056,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 415.568877432608,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6785.900892856895,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6835.9375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3923.767857142911,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3923.6886160714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5458.5740000004525,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4499.662098742143,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5539.99900000008,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 579.4446428570918,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 585.9375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8174.2801339285925,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 422.41562499995666,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 419.921875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 805.6003546426913,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 795.2005378569028 ns\nthreads: 1"
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
          "id": "4a8bd26eed1577f6eba149c629c348fc63cf09ea",
          "message": "Don't expand reference targets with lots of children references (#1247)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-02T12:41:26-04:00",
          "tree_id": "406e2e73eb8717d0454749a9651511954a82145f",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/4a8bd26eed1577f6eba149c629c348fc63cf09ea"
        },
        "date": 1727887927006,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4941.268000000036,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2316.4664285713698,
            "unit": "ns/iter",
            "extra": "iterations: 280000\ncpu: 2287.9464285714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2000.318036069351,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 541.5192000000388,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 531.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 402.1789062500503,
            "unit": "ns/iter",
            "extra": "iterations: 1792000\ncpu: 409.80747767857144 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6593.613392855754,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3881.343191963284,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3836.495535714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5360.195000000658,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4368.008749999319,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4394.53125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5439.925000000503,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 569.1045535714676,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7921.250000000006,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 406.8388121947004,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 804.7761160714374,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 12575172000.000067,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 12562500000 ns\nthreads: 1"
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
          "id": "42d73080c3239706027767bd879e4c764da1a92a",
          "message": "Improve error when compiling invalid regular expresions (#1248)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-02T14:52:15-04:00",
          "tree_id": "ce46151b79a07d80618ea52848de44b7a046b86c",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/42d73080c3239706027767bd879e4c764da1a92a"
        },
        "date": 1727895740996,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5093.159999996715,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2319.4785496903637,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1970.5664915767904,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1967.0776491764725 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 555.2821428571925,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 413.53839274055866,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6653.9392857164,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3974.9419643890346,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 3899.267590593588 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5482.5080000046,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4477.260281069322,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5539.493749998721,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 585.5779464281698,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 585.9375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8133.44583283884,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 7951.97342869005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 417.04718793116524,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 819.303906250671,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 819.6149553571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 11173491599.999578,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11156250000 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "42d73080c3239706027767bd879e4c764da1a92a",
          "message": "Improve error when compiling invalid regular expresions (#1248)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-02T18:52:15Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/42d73080c3239706027767bd879e4c764da1a92a"
        },
        "date": 1727896438922,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5136.854999998377,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2372.947463227677,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1967.3998520086236,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 543.4434000001147,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 531.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 405.59452653593763,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6631.3142857146495,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3940.0486338418877,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 3899.267590593588 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5405.152000000726,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4418.789999999717,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4492.1875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5461.88303571325,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 574.1333035715002,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 585.9375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7999.898437502294,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 407.5767362689175,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 831.9420312499659,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 830.078125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 11161519499.99994,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11156250000 ns\nthreads: 1"
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
          "id": "c20211d8027ed50197b88ebca6cceff021a4e588",
          "message": "Support `definitions` in 2019-09 and 2020-12 (#1249)\n\nJSON Schema actually defines it for backwards compatibility reasons.\r\n\r\nKudos to @michaelmior for catching this.\r\n\r\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-02T17:11:03-04:00",
          "tree_id": "55c55a1dd55aaf5071c5bcabefb0175b76aeb6cb",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/c20211d8027ed50197b88ebca6cceff021a4e588"
        },
        "date": 1727904102791,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4984.286999999767,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2316.75578487113,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1923.5166780319482,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1949.6394527226034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 544.871700000158,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 399.2784040178776,
            "unit": "ns/iter",
            "extra": "iterations: 1792000\ncpu: 392.36886160714283 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6597.661830356165,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6452.287946428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3907.0306919646623,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3836.495535714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5294.4109999998545,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4362.215625000942,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4394.53125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5358.100892857059,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 565.9772321428542,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7860.756696427273,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 402.8100891602395,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 398.9955179019858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 804.1226562500725,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 11073870700.000044,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11078125000 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gorez.tony@gmail.com",
            "name": "Tony Gorez",
            "username": "tony-go"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e682658183f5bab9337e4fce53422a7e50bae257",
          "message": "benchmark: add nested oneof (draft4) (#1250)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-10-03T16:14:47+02:00",
          "tree_id": "c1f01a9f783c27149c4d4377d329ce9de4fea857",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/e682658183f5bab9337e4fce53422a7e50bae257"
        },
        "date": 1727965539499,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5337.8280000004,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2362.572363200616,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1952.5821568997878,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1949.6394527226034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 566.467142857111,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 413.68393963810416,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6693.863392857427,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3982.054129464555,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 4010.8816964285716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5537.968749999932,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4566.770453706375,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4551.471682968352 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5599.559999999427,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 597.1763392857099,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8114.366071428743,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 415.79108505666244,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 864.46849800515,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 857.9795276877109 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1565.2930803570696,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1569.4754464285713 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 11328204600.00005,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11343750000 ns\nthreads: 1"
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
          "id": "b2d26648736a03f5066df0e8325bce36c941ccf3",
          "message": "Benchmark `propertyNames` on Draft 6 (#1251)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-03T10:35:31-04:00",
          "tree_id": "67218be7ecfdaeafb627caa76b9d43ba773ae8f0",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/b2d26648736a03f5066df0e8325bce36c941ccf3"
        },
        "date": 1727966753006,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5008.065542915866,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 5081.617260372554 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2324.254437215418,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1956.7003757820194,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1949.6394527226034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 568.9458928571867,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 422.77298112613556,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6666.706249999622,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3890.7717633929196,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3836.495535714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5332.50199999884,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4372.911874999374,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4296.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5386.465000001408,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 583.250178571453,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7979.029557901529,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 7951.97342869005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 422.96736073157234,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 824.2268641843879,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 816.1268678005055 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1551.4580357144528,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1569.4754464285713 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 4880.445999999665,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 11158681100.000195,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11171875000 ns\nthreads: 1"
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
          "id": "d4356568dd3d844fa3ff6499eac36126a273925a",
          "message": "Extract JSON string logical size method as `static` (#1253)\n\nThere are cases in which we want to check the logical size of a string\r\naccording to the JSON grammar without turning the string into a JSON\r\ndocument (for performance reasons).\r\n\r\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-03T11:08:22-04:00",
          "tree_id": "ca115262af76fbfb9cdee1e93d92c34446ebad80",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/d4356568dd3d844fa3ff6499eac36126a273925a"
        },
        "date": 1727969226532,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4947.875000000295,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2367.9499999998047,
            "unit": "ns/iter",
            "extra": "iterations: 280000\ncpu: 2399.5535714285716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1952.2287190053605,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1949.6394527226034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 581.644100000176,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 578.125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 426.0386714791523,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6705.04017857151,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3941.5647321420065,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3923.6886160714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5372.333999998773,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4434.276250000835,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4492.1875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5441.930357142562,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 600.0097321428858,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8025.275669642744,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 430.40590926623986,
            "unit": "ns/iter",
            "extra": "iterations: 1544828\ncpu: 424.8045737130606 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 833.336413688984,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 816.1268678005055 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1560.0625000001653,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1569.4754464285713 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 4861.366215505766,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 11095790999.999964,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11078125000 ns\nthreads: 1"
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
          "id": "d51de1a44cc8f7014947bc26ea8fb926e6176950",
          "message": "Benchmark `if`/`then`/`else` on Draft 7 (#1254)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-03T11:23:50-04:00",
          "tree_id": "20e81d762ba896d4929e0704ae87c57b21f8a5d1",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/d51de1a44cc8f7014947bc26ea8fb926e6176950"
        },
        "date": 1727969678879,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5133.800999999494,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2307.3449999998275,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2294.921875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1929.0215437693334,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1925.2249332365475 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 545.8080357141982,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 408.70895496830434,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6466.473214284666,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3916.85881696421,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3923.6886160714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5425.991964287391,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4448.159999999746,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4492.1875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5501.57767857229,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 588.4046428570449,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 585.9375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8191.604055339258,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8161.235887339789 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 413.8100802828446,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 844.4494419642521,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 854.4921875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1510.0625178292519,
            "unit": "ns/iter",
            "extra": "iterations: 497778\ncpu: 1538.0852508547987 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 4762.854632013804,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4757.258711838135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 2602.476767262732,
            "unit": "ns/iter",
            "extra": "iterations: 263529\ncpu: 2608.82104056859 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 11241783400.00003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11250000000 ns\nthreads: 1"
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
          "id": "bffce4aa6b6a101a938b7770a7a3344ec6351f49",
          "message": "Avoid JSON allocations when handling `propertyNames` (#1252)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-03T11:42:59-04:00",
          "tree_id": "8276b5adab284597f7c3f05f6a15d694c8c4d8d2",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/bffce4aa6b6a101a938b7770a7a3344ec6351f49"
        },
        "date": 1727970805201,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5245.287000000189,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2382.086403920779,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2406.5263320018616 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1878.6474809352121,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1841.5195013566977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 552.5360714287331,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 397.19698660713374,
            "unit": "ns/iter",
            "extra": "iterations: 1792000\ncpu: 401.08816964285717 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6425.991071428224,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 4012.33837082455,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 4080.628873877011 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5318.775000000642,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4370.552500000713,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4394.53125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5380.471428572215,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 552.6803571427763,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8033.329241070269,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 404.10074535261515,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 398.9955179019858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 770.8956473214204,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1517.0171875002072,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1534.5982142857142 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1806.320630643278,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1799.6667854167727 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 2337.4082171780806,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 11149159000.000053,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11140625000 ns\nthreads: 1"
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
          "id": "eac12e205eeef700a734a661a683de15d869527f",
          "message": "Try `unordered_set` in `SchemaCompilerValuePropertyFilter` (#1255)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-03T12:47:04-04:00",
          "tree_id": "4de3b03e6f6d7f9dd516609ccf9230d7e2bf7bd8",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/eac12e205eeef700a734a661a683de15d869527f"
        },
        "date": 1727974706657,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5165.874999998924,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5161.830357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2368.7116420632105,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1947.2457670153713,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1949.6394527226034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 543.5327678573085,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 530.1339285714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 404.0950578528438,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6576.682142857798,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3959.054129464131,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 4010.8816964285716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5264.220000001387,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4302.274999999156,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4296.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5333.158999999341,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 552.3983035713188,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7907.421875000661,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 407.26897288977847,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 777.6311383927188,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1548.221875000065,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1534.5982142857142 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 2010.4922884964778,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2040.320357500399 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 2329.67351598936,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 11834068800.000069,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11828125000 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "eac12e205eeef700a734a661a683de15d869527f",
          "message": "Try `unordered_set` in `SchemaCompilerValuePropertyFilter` (#1255)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-03T16:47:04Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/eac12e205eeef700a734a661a683de15d869527f"
        },
        "date": 1727982969799,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5074.953999999252,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2316.6131511012704,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2406.5263320018616 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1940.700782031994,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1949.6394527226034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 558.9270535714214,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 410.48647274619805,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6523.412499999738,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3950.2286603059583,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 3899.267590593588 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5234.009000000697,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4336.803750000228,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4296.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5316.917000000103,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 552.9636999999639,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8075.597098213498,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 410.56772274249766,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 782.235491071402,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1543.6741071427816,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1534.5982142857142 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1889.9078682008576,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1904.2990003337056 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 2309.069632734294,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 11072325099.999943,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11062500000 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gorez.tony@gmail.com",
            "name": "Tony Gorez",
            "username": "tony-go"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a1901f425561871bc1142ff71f24695424a65bb",
          "message": "refactor: simplify SchemaCompilerLogicalXor step (#1257)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-10-03T21:30:23+02:00",
          "tree_id": "8db512fd3f7981f6495e957152fe766d7599c5df",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/2a1901f425561871bc1142ff71f24695424a65bb"
        },
        "date": 1727984478370,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5138.778000000457,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2360.8771641993962,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1928.4325253861546,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1925.2249332365475 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 543.1811999999354,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 531.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 402.44665178576105,
            "unit": "ns/iter",
            "extra": "iterations: 1792000\ncpu: 401.08816964285717 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6588.390624998448,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6626.674107142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3930.7635164940352,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 3989.9482322352997 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5261.213999999654,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4336.001250000265,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4394.53125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5413.9446428556375,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 563.3837499999572,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8042.4218749998645,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 402.3104597183127,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 398.9955179019858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 803.7004464284284,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1107.0715624999395,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1123.046875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1960.5841301162623,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1949.6394527226034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 2359.4960273478573,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 11397394000.000076,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11406250000 ns\nthreads: 1"
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
          "id": "220f436f462b6d3ae8d6fbd05d4cf96284ff54f6",
          "message": "Introduce a new `LogicalCondition` instruction for `if`/`then`/`else` (#1256)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-03T16:01:01-04:00",
          "tree_id": "3e6906184eb636b1e3da21912343244ba8fa7cbd",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/220f436f462b6d3ae8d6fbd05d4cf96284ff54f6"
        },
        "date": 1727986299778,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5005.044642857115,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5022.321428571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2283.713634248135,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2105.2504969314823,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2131.0012622781946 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 549.1499999998999,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 407.862039827496,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6503.674107142793,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 4039.997348216344,
            "unit": "ns/iter",
            "extra": "iterations: 165926\ncpu: 4049.244844087123 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5364.677999998548,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4322.653124999932,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4296.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5382.3560000000725,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 565.9216071427815,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8079.047991070049,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 408.06800856832854,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 792.7750925113049,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 795.2005378569028 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1106.944999999726,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1123.046875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1912.5520647782243,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1883.3722172966227 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 556.3251999999466,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 11270473899.999842,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11281250000 ns\nthreads: 1"
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
          "id": "abfaa6569388be42f4dbf301ff9928c2239bb68e",
          "message": "Revert \"Try `unordered_set` in `SchemaCompilerValuePropertyFilter` (#1255)\" (#1258)\n\nThis reverts commit eac12e205eeef700a734a661a683de15d869527f.\r\n\r\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-03T16:22:46-04:00",
          "tree_id": "eb4549a8100e3cd059ee50439c08dba4c0c18a0a",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/abfaa6569388be42f4dbf301ff9928c2239bb68e"
        },
        "date": 1727987622338,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5150.922000000264,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2260.837320494376,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1946.9933113767772,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1949.6394527226034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 545.6970999998703,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 393.4384824357983,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 389.92743794966793 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6662.193749999038,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 4000.4079903429233,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 3989.9482322352997 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5428.753999999572,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4458.759863544321,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5511.129464285399,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5719.866071428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 564.6116964285852,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7915.922696772426,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 7742.7109700403125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 401.9287388393268,
            "unit": "ns/iter",
            "extra": "iterations: 1792000\ncpu: 401.08816964285717 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 800.8205799906463,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 795.2005378569028 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1062.8132812499302,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1049.8046875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1969.8492520637424,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1949.6394527226034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 547.3782999999912,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 11232934599.999908,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11218750000 ns\nthreads: 1"
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
          "id": "897625ac7c68b3bc775bd2d8e1d1eaf0bcf60b4a",
          "message": "Remove unused annotation logic from `EvaluationContext` (#1259)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-03T16:49:10-04:00",
          "tree_id": "c921de089c342c0a97e20a45543f03eb77ca2148",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/897625ac7c68b3bc775bd2d8e1d1eaf0bcf60b4a"
        },
        "date": 1727989265686,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5169.938000001366,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2312.2651648827486,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1934.944503286198,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1949.6394527226034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 566.7558928570721,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 415.538201088449,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6525.596428571946,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 4037.4022099955996,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 3989.9482322352997 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5513.198999999531,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4512.5139983036925,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4551.471682968352 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5588.170535714555,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 584.8547321428604,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 585.9375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8109.822277577527,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 7951.97342869005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 423.06222235342113,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 825.6882812498795,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 837.0535714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1112.9393750000104,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1905.4742013164193,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1883.3722172966227 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 571.3593000000401,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 578.125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 11621390100.0001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11640625000 ns\nthreads: 1"
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
          "id": "1b39a41ade778bf6ff49ef8a438e2cbbaaf35482",
          "message": "Inline private `annotations` getter from `EvaluationContext` (#1261)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-03T17:22:37-04:00",
          "tree_id": "eea8c9e635b0dec40ffc4c171acb116492a63eba",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/1b39a41ade778bf6ff49ef8a438e2cbbaaf35482"
        },
        "date": 1727991231453,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5079.978999999639,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2284.164638209033,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1902.2796454014408,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1904.2990003337056 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 544.5608035714145,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 404.15297749314055,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 398.9955179019858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6333.80625000005,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3877.054687499992,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3836.495535714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5390.950999999404,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4403.553749999389,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4492.1875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5478.667857143397,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 575.4758000000493,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7893.01674107179,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 405.5371872528223,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 811.3626116070805,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 819.6149553571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1078.5101562500897,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1074.21875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1841.5128049223165,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1841.5195013566977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 549.19214285718,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 11184137899.999996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11171875000 ns\nthreads: 1"
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
          "id": "3adf7cd2a321d612ef344e454d5ab4a97fff0daa",
          "message": "Focus project description on the JSON Schema evaluator (#1262)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-04T10:17:03-04:00",
          "tree_id": "13abccacfa777e89615b1c484b05482802f8c911",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/3adf7cd2a321d612ef344e454d5ab4a97fff0daa"
        },
        "date": 1728052194786,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5071.9790000005105,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2304.4140625000155,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2294.921875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1935.9094963476778,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1925.2249332365475 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 545.1783035713984,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 409.8915486655527,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6407.85379464199,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3883.551897321575,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3923.6886160714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5339.069000000336,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4350.518125000491,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4394.53125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5425.1719999990655,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 587.5554464285163,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 585.9375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7905.655133928491,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 408.4641023007344,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 809.7275669642912,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1088.5093749999796,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1074.21875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1872.2349752095065,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1883.3722172966227 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 552.998660714264,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 11275115400.000004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11265625000 ns\nthreads: 1"
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
          "id": "6294999a9dbcf0315b1502461aa1c525dbd46159",
          "message": "Refactor how we compile substeps in `properties` (#1263)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-04T10:24:18-04:00",
          "tree_id": "e7d4ac7dccf59d25162645d1bde290983fbf87c8",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/6294999a9dbcf0315b1502461aa1c525dbd46159"
        },
        "date": 1728052484609,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5262.526999999864,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2280.126026645512,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2249.5789625234793 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1930.8094540285438,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1949.6394527226034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 538.8468999999532,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 531.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 403.43519181089005,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6448.38482142924,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3821.128906250796,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3836.495535714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5247.669000000315,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4307.124375000626,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4296.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5352.0720000005895,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 564.8828571427852,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7874.395089285509,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 410.63208434675647,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 795.0976562501719,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1070.2284375000204,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1074.21875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1866.8470534505484,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1879.8815536507452 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 554.5963392858002,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 11150981799.999954,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11140625000 ns\nthreads: 1"
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
          "id": "b61df7115b78113043fd9375841f57aed4bcc3f1",
          "message": "Prioritize smaller subschemas when unrolling `properties` (#1264)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-04T10:58:26-04:00",
          "tree_id": "487957e1dd101e0bb5a04ecd4523afbe788a20eb",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/b61df7115b78113043fd9375841f57aed4bcc3f1"
        },
        "date": 1728054540933,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5175.542857142342,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5161.830357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2275.7921874998033,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2294.921875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2082.5222349577925,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2085.6608098892966 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 549.6886000000814,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 405.59359796460564,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6346.158035714415,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3838.726180846141,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3850.439552786513 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5329.37899999979,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4358.736250000561,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4394.53125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5437.367999999196,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 559.1048214285925,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7977.271083610246,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 7951.97342869005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 413.17045741501,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 404.92472844806025 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 798.640759535353,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 795.2005378569028 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1066.4462499999418,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1074.21875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1847.3172743905548,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1841.5195013566977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 566.4353571427837,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 11459921900.00004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11453125000 ns\nthreads: 1"
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
          "id": "a96af18be48cf0dce4e29678fa2b4b83265fea38",
          "message": "Test `oneOf` smart `properties` short-circuit checks (#1265)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-04T11:16:21-04:00",
          "tree_id": "73c89814f77b145c951b23c77369742ba9c15489",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/a96af18be48cf0dce4e29678fa2b4b83265fea38"
        },
        "date": 1728055793478,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5100.562999998601,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2299.3671874999677,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2294.921875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2073.748749999993,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2050.78125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 563.6942000001,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 411.2463923550458,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6361.558035714715,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3893.939732142471,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3836.495535714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5349.292000000787,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4358.120487445751,
            "unit": "ns/iter",
            "extra": "iterations: 165926\ncpu: 4331.75029832576 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5437.541071430019,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 568.3159999998679,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7959.120535715616,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 413.34818735354605,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 404.92472844806025 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 805.344283328414,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 795.2005378569028 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1084.2971875000273,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1074.21875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1823.8151998348737,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1799.6667854167727 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 566.0052999999152,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 578.125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 11279013499.999792,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11265625000 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gorez.tony@gmail.com",
            "name": "Tony Gorez",
            "username": "tony-go"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "82e48f0151b5fda6f74e340bd1315bf5ef47eda0",
          "message": "refactor(json): remove `is_object` check from `.at(index)` API (#1266)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-10-04T17:19:17+02:00",
          "tree_id": "d8771d10344a8fd508cecd870da68a9dc85c303c",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/82e48f0151b5fda6f74e340bd1315bf5ef47eda0"
        },
        "date": 1728055884628,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4823.296927001978,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4813.068779171382 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2334.2903635150774,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2013.1662870159178,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 544.8323999999047,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 407.3492362791203,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6558.627678572293,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3900.4547991071195,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3923.6886160714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5368.767857143147,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4390.579999999034,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4394.53125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5529.692857142062,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 560.7289285714095,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7962.8504464273365,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 411.6882897727424,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 771.5140624997881,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1089.9584419828886,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 1088.1691570673406 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1860.68308989559,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1883.3722172966227 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 561.8539285714113,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10886091299.999863,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10875000000 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gorez.tony@gmail.com",
            "name": "Tony Gorez",
            "username": "tony-go"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5ceffcc7c5149d65fbd07ad93e2f3ffa32a98023",
          "message": "refactor(walker): use std::ranges:sort instead of std::sort (#1267)\n\nClang tidy recommandation\r\n\r\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-10-04T11:25:49-04:00",
          "tree_id": "0c954a95c2bb283ecba7ca52c63352a5580c86b2",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/5ceffcc7c5149d65fbd07ad93e2f3ffa32a98023"
        },
        "date": 1728056392520,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5240.476999999828,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2338.3346670372407,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2022.3498686937967,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2040.320357500399 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 539.5201785713003,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 412.2105976690715,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 426.19975775893937 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6471.800892857767,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3940.3934151785843,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 4010.8816964285716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5405.448999999861,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4449.199588305518,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5485.45357143025,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 557.5144000001728,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8083.485491073057,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 410.81234326723455,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 773.9575892859054,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1087.4649999998098,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1074.21875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1849.1700439018157,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1841.5195013566977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 548.7993750000848,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10380249499.99999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10375000000 ns\nthreads: 1"
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
          "id": "45dfaf8b1884639f0e52defb3181e51e3fdeac3e",
          "message": "Always unroll `properties` under `oneOf` (#1268)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-04T11:48:48-04:00",
          "tree_id": "354b8780e5c89c3eee9160b4fb81cec5b158022e",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/45dfaf8b1884639f0e52defb3181e51e3fdeac3e"
        },
        "date": 1728057532938,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4822.268814526007,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2278.49076061346,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2004.3596477211765,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 538.3859000003213,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 531.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 411.79279425335346,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6488.854464285915,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3814.5440848223548,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3749.3024553571427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5395.552678570376,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4387.113749999116,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4394.53125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5469.175000005829,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 549.5171000002301,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7958.6897321450215,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 413.72080295876873,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 760.8359374994426,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1082.7800000001275,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1074.21875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1827.8221242279485,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1841.5166239844036 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 558.6395535715383,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10201534900.000298,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10218750000 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "45dfaf8b1884639f0e52defb3181e51e3fdeac3e",
          "message": "Always unroll `properties` under `oneOf` (#1268)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-04T15:48:48Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/45dfaf8b1884639f0e52defb3181e51e3fdeac3e"
        },
        "date": 1728069257319,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4831.659470231604,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2256.1886649683347,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2249.5789625234793 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1997.5654442548387,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1967.0776491764725 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 534.2115999999351,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 531.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 415.5400693924241,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6515.488392858109,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3841.3934151788303,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3836.495535714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5315.174999998362,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4368.489567639011,
            "unit": "ns/iter",
            "extra": "iterations: 165926\ncpu: 4331.75029832576 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5405.30982142887,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 550.5695535713277,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7834.309151785338,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 415.772539474355,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 758.4061383926357,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1086.8481250000173,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1829.2926154399793,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1841.5195013566977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 558.7499107142386,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10402078500.000015,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10421875000 ns\nthreads: 1"
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
          "id": "3e3ac593146af68e9bd01f3418a263821f8f47cc",
          "message": "Properly parse UTF-16, UTF-32, and surrogate pairs (#1269)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-04T16:16:50-04:00",
          "tree_id": "6f60e95e887fe74e986175330a110fe530777f66",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/3e3ac593146af68e9bd01f3418a263821f8f47cc"
        },
        "date": 1728073652063,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4941.397999998571,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2352.7493830925455,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2041.0896217517482,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2040.320357500399 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 547.1642857143268,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 414.3415825980151,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6431.844642857446,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3885.915736607158,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3923.6886160714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5369.367999999213,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4431.067499999131,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4492.1875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5447.346428569842,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 547.0533928571188,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7946.078125001017,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 422.27711285574986,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 751.6184151786629,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1088.703281249792,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1877.2350689600303,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1883.3722172966227 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 549.8192857144447,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10384522300.00007,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10390625000 ns\nthreads: 1"
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
          "id": "b5c8f63fbc4b4b7a9cd4bdd71774d89db6ee2a99",
          "message": "Upgrade Noa to `517e88aef5981b88ac6bb8caff15d17dffcb4320` (#1270)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-04T17:26:32-04:00",
          "tree_id": "54c5bf6b1eba515d6841c4850997884b424cccaa",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/b5c8f63fbc4b4b7a9cd4bdd71774d89db6ee2a99"
        },
        "date": 1728077898558,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5090.039285714657,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5022.321428571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2312.9920613928625,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2044.4606299783534,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2040.320357500399 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 549.325500000009,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 412.52828515493144,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6389.081249999152,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3881.33314732134,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3923.6886160714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5414.327000000867,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4431.401249999567,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4394.53125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5465.01071428602,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 555.5828999999903,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7958.090401785713,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 417.8991947610285,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 754.0331473214122,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1080.6279687500364,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1074.21875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1866.4055950047732,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1841.5195013566977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 541.807053571424,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10184336400.000006,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10187500000 ns\nthreads: 1"
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
          "id": "e01e4494441400416ed71dd5c219803d14891a2b",
          "message": "Upgrade Noa to `3b98a611b647926dd32065c4ac5011a40b5d8b20` (#1274)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-05T17:24:50-04:00",
          "tree_id": "87cda5d98dc428faf47988d71c900c03d27cbaa5",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/e01e4494441400416ed71dd5c219803d14891a2b"
        },
        "date": 1728164243895,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5235.705999999709,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2421.5310027553023,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2458.842121827989 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2067.0656249997423,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2050.78125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 555.7896000000255,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 414.45120984730505,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6379.949999999975,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3919.943000101708,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3934.1447604557848 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5437.519642856817,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4478.209900118786,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5498.880000000099,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 549.9808035714133,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7994.20982142886,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 422.7882445184113,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 426.19975775893937 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 757.2351562500198,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1099.2139062500073,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1852.6304934202597,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1883.3722172966227 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 551.0841999999911,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10260852399.999975,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10250000000 ns\nthreads: 1"
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
          "id": "9ee86a3ebfbf53fdf8e7d7ed879e73760f8b0e81",
          "message": "Emit loop vectorization diagnostics on the schema evaluator (#1272)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-05T18:19:37-04:00",
          "tree_id": "1eda74759c1aa8d96c12041f88e9157e7b39f093",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9ee86a3ebfbf53fdf8e7d7ed879e73760f8b0e81"
        },
        "date": 1728167390524,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5158.774999999878,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2342.808545972539,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2089.887187499784,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2050.78125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 550.0534821428411,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 410.7864593398708,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6371.178571428057,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3891.912335870387,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3934.1447604557848 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5396.5098214285545,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4458.065000000033,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4492.1875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5497.454464286226,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 547.9723999999351,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7946.720982142505,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 421.50194755613865,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 758.231473214315,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1114.7206250001318,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1147.4609375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1897.46231916287,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1883.3722172966227 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 548.9673000000721,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10308526799.99998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10296875000 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9ee86a3ebfbf53fdf8e7d7ed879e73760f8b0e81",
          "message": "Emit loop vectorization diagnostics on the schema evaluator (#1272)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-05T22:19:37Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9ee86a3ebfbf53fdf8e7d7ed879e73760f8b0e81"
        },
        "date": 1728328446692,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4937.299999999141,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2306.86282716227,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2045.8354975842578,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2040.320357500399 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 549.4622999999592,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 414.8437947300294,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6433.804464285637,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3870.5995167864717,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3850.439552786513 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5411.7040000005545,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4452.915207498577,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5537.908928571613,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 549.2436607142841,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7955.246651785787,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 422.2776552665681,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 759.5212053572402,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1089.3239062500727,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1869.3943476735521,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1883.3722172966227 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 552.3206249999848,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10842389200.00007,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10828125000 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9ee86a3ebfbf53fdf8e7d7ed879e73760f8b0e81",
          "message": "Emit loop vectorization diagnostics on the schema evaluator (#1272)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-05T22:19:37Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9ee86a3ebfbf53fdf8e7d7ed879e73760f8b0e81"
        },
        "date": 1728414836643,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5052.375000000211,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2317.3514315275265,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2069.7482698082977,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2085.6608098892966 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 560.4925892857946,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 418.6248801422712,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6418.839285714739,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3884.1696428563005,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3923.6886160714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5466.361607143913,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4474.151201101833,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5596.170999999686,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 569.7505000000547,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8069.475446428649,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 425.7099102671797,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 760.86227678575,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1097.8142187500594,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1868.3105967058518,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1883.3722172966227 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 581.7352678572466,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 585.9375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10076041700.000132,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10078125000 ns\nthreads: 1"
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
          "id": "9abbaee71e9e00e95632858d29c7ebe5c2a723b0",
          "message": "Fix how JSON integer reals are stringified (#1275)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-09T14:53:30-04:00",
          "tree_id": "2ce0db7ff8835e01237afce31c0e381a88cd1d88",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9abbaee71e9e00e95632858d29c7ebe5c2a723b0"
        },
        "date": 1728500669887,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5140.783035713525,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5022.321428571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2321.0774999995465,
            "unit": "ns/iter",
            "extra": "iterations: 280000\ncpu: 2287.9464285714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2056.3422950252725,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2040.320357500399 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 554.8215178572085,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 413.81128564017274,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6427.668750000797,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3910.0703125008863,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3923.6886160714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5420.306000000892,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4467.272471589726,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4394.5410592434355 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5477.333000001181,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 549.9395535713753,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8051.279017856468,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 420.8732331721033,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 761.4276785715849,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1099.427031249789,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1868.4105075094265,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1883.3722172966227 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 550.7351785713662,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10368048399.999907,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10359375000 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9abbaee71e9e00e95632858d29c7ebe5c2a723b0",
          "message": "Fix how JSON integer reals are stringified (#1275)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-09T18:53:30Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9abbaee71e9e00e95632858d29c7ebe5c2a723b0"
        },
        "date": 1728501244978,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5219.17300000041,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2329.2737396493876,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2065.1251396482185,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2085.6608098892966 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 548.3582142856237,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 409.4356577242788,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 404.92472844806025 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6421.739285715132,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3905.911830356855,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3923.6886160714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5434.942857141729,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4467.616875000147,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4492.1875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5501.038392856523,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 554.0900892857588,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8003.048200678449,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 7951.97342869005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 419.75785576569643,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 765.4703125000241,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1097.284843750046,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1855.6990675879472,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1841.5195013566977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 555.0602999999228,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10034351900.000048,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10031250000 ns\nthreads: 1"
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
          "id": "60507a102ec0cdeaa908ac0975e580d256d91e2f",
          "message": "Don't use sets in the evaluator (#1276)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-10T09:41:53-04:00",
          "tree_id": "032c2908569bd921b45cbf2a948245d6d0b7e507",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/60507a102ec0cdeaa908ac0975e580d256d91e2f"
        },
        "date": 1728568347333,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5056.973000000653,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2364.9315123528,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2036.1211787068169,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2040.320357500399 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 555.6590178571241,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 404.9518390646814,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6545.942857142352,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3866.0818462826946,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3850.439552786513 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5426.004999999351,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4501.791250000054,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4492.1875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5601.375999999618,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 544.9732000001859,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8090.833705358998,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 409.563182608781,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 772.4717633928536,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1100.5796875000585,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1859.5302003687334,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1858.958547944808 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 559.054553571465,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10288867100.000061,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10281250000 ns\nthreads: 1"
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
          "id": "03c208104ef4e881798a5347f6ac9b01f2d55980",
          "message": "Avoid emitting instructions for `additionalProperties: true` (#1277)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-10T09:58:36-04:00",
          "tree_id": "35c23b138ced69f5cca4f24e66a4a8125dc96a68",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/03c208104ef4e881798a5347f6ac9b01f2d55980"
        },
        "date": 1728569349423,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4947.182000000794,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2348.30095055705,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1973.0267616309386,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1967.0776491764725 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 568.738125000071,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 409.88632545144736,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6290.991071428006,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 157.66409091498758,
            "unit": "ns/iter",
            "extra": "iterations: 4072727\ncpu: 161.13282329014442 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5379.2410000005475,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4407.667499999946,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4394.53125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5466.195999999854,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 552.6124999998875,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8063.431919642333,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 415.2797122088583,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 772.3797991070163,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1119.2939062500072,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1123.046875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1855.2265671670211,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1841.5195013566977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 563.5530000001836,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 578.125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10200021099.999958,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10187500000 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "03c208104ef4e881798a5347f6ac9b01f2d55980",
          "message": "Avoid emitting instructions for `additionalProperties: true` (#1277)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-10T13:58:36Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/03c208104ef4e881798a5347f6ac9b01f2d55980"
        },
        "date": 1728587672714,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4965.292999997928,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2348.6277359062515,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1987.468044049351,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 575.6156250001254,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 416.7469936881301,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6352.158928570312,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 163.45873416016155,
            "unit": "ns/iter",
            "extra": "iterations: 4072727\ncpu: 161.13282329014442 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5413.9517857143865,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4429.719999998838,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4394.53125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5597.994642857073,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 560.3367999999591,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8047.485491071069,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 420.2142040513951,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 776.9288049426016,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 774.2742079133001 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1099.9779687502098,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1820.4771611408892,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1799.6667854167727 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 580.1300999999057,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 578.125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10140450099.999952,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10140625000 ns\nthreads: 1"
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
          "id": "fc93df7d0295dc663a7215db71328d86790f7740",
          "message": "Introduce the concept of JSON Schema compiler modes (#1278)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-10T16:34:12-04:00",
          "tree_id": "29c45bacd7b95c8f9a26e681f0bd1d85c80e02a2",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/fc93df7d0295dc663a7215db71328d86790f7740"
        },
        "date": 1728593097213,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5022.624999999152,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2380.021897296913,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2037.6727652602651,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2040.320357500399 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 567.3317999999199,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 411.5054370655274,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 404.92472844806025 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6364.809821428301,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 162.18504464288026,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 163.92299107142858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5447.4789999994755,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4486.87410714399,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 4464.285714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5539.311607143255,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 539.8354464286318,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8093.867438092267,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8161.235887339789 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 415.30372699537253,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 746.8366071429041,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1118.1785714285297,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1116.0714285714287 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1846.1148626028908,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1841.5195013566977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 564.399000000094,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10144675799.99996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10140625000 ns\nthreads: 1"
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
          "id": "37aff6f0a6ba0a4f6cce006c3336e7645884febd",
          "message": "Don't apply `additionalProperties` type optimization in exhaustive mode (#1279)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-10T17:16:08-04:00",
          "tree_id": "6d21f05df657726680a7e8cecd0b95dd15f54660",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/37aff6f0a6ba0a4f6cce006c3336e7645884febd"
        },
        "date": 1728595581020,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5265.401999999995,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2393.770989095413,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2406.5263320018616 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2023.0065435341899,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2040.320357500399 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 556.4482142856622,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 408.268928202329,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6485.616071427407,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6452.287946428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 160.41886160712082,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 160.43526785714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5441.794999999274,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4441.994375000036,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4492.1875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5485.782142855554,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 534.0078999997786,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 531.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8020.671782713101,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8161.235887339789 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 416.13310519938176,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 735.8639508928836,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 732.421875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1109.7532812499367,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1865.3130047440675,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1841.5195013566977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 557.8491999999642,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10214839699.999857,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10234375000 ns\nthreads: 1"
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
          "id": "e1fbd4bb0ee98abd94135d861455007b60a3ec11",
          "message": "Only apply type bounds optimizations on `FastValidation` mode (#1280)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-10T17:34:24-04:00",
          "tree_id": "ca976242144940af0f8fcbe66bbe5f49dde1ddbf",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/e1fbd4bb0ee98abd94135d861455007b60a3ec11"
        },
        "date": 1728596722596,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5175.736999999572,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2345.2917857144125,
            "unit": "ns/iter",
            "extra": "iterations: 280000\ncpu: 2343.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2013.7666671501734,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 565.6636607142218,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 410.6144369263109,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 404.92472844806025 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6344.918750000618,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 161.67758928570413,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 160.43526785714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5649.7303571429065,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4529.7006249995775,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4492.1875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5484.171999999035,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 575.3708035714209,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8037.893973215558,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 418.78832659640693,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 742.7126116069819,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1101.4648437498665,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1856.4913897245672,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1841.5195013566977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 554.0840000001026,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10081019799.999922,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10093750000 ns\nthreads: 1"
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
          "id": "d7929a2a2089753f8ed789cf09512d4bbb5b0ea3",
          "message": "Don't collapse `properties` with only `type` on exhaustive mode (#1281)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-10T17:51:52-04:00",
          "tree_id": "938e1475e01caa95fc2af8217d673489653b4087",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/d7929a2a2089753f8ed789cf09512d4bbb5b0ea3"
        },
        "date": 1728597796362,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5075.467000001481,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2382.4905329348726,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2068.6705453906825,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2040.320357500399 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 559.255199999825,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 415.2965305672197,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6522.911607141119,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 158.75198607713745,
            "unit": "ns/iter",
            "extra": "iterations: 4072727\ncpu: 161.13282329014442 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5378.892857143975,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4395.797595851294,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4349.184052614203 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5433.4670000002925,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 552.7878000000328,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8173.260044644439,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 420.50397195374035,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 761.1329241069394,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1120.4892857145003,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1116.0714285714287 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1870.693613374562,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1841.5166239844036 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 573.1597999999849,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 578.125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10519105300.000092,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10515625000 ns\nthreads: 1"
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
          "id": "73275eff6ccbc3690466f122aed71f96cd49edc8",
          "message": "Don't directly unroll `$ref` in exhaustive mode (#1282)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-10T18:13:57-04:00",
          "tree_id": "05fcdf844af5bf4eb4ba5569d63a3445bf085d40",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/73275eff6ccbc3690466f122aed71f96cd49edc8"
        },
        "date": 1728599082049,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5139.909821429407,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5161.830357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2377.099244308454,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2066.59750736309,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2085.6608098892966 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 560.3268749999708,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 415.1845216436016,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6420.2214285700165,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 160.24649553573664,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 160.43526785714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5296.520535714373,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4362.993750000044,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4394.53125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5370.130999999674,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 543.4537499998069,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7982.660714286486,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 420.86196308102336,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 742.7904464285413,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 739.3973214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1112.667968750003,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1849.7392408382273,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1841.5195013566977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 572.7018749999908,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10029944699.999987,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10046875000 ns\nthreads: 1"
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
          "id": "1dff8cbd154c10f39479214c6ccc7539c2f75186",
          "message": "Only emit unknown and pure annotation keywords on exhaustive mode (#1283)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-11T09:30:02-04:00",
          "tree_id": "8b5ec2541d968183caf02ca65d32ad082e21df00",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/1dff8cbd154c10f39479214c6ccc7539c2f75186"
        },
        "date": 1728654030715,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4960.616000000755,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2333.474069783572,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2041.6563411338393,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2040.320357500399 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 555.8386000000155,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 414.0654352333546,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6328.743750001666,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 159.8698883928559,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 160.43526785714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5386.312000000544,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4438.502618411801,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5522.990178570401,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 541.8884821429921,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7982.837130191873,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8161.235887339789 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 416.40147800925513,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 743.4885044645005,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 732.421875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1092.9434375000824,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1848.608079114365,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1841.5195013566977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 564.8696000000655,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 9975128199.999971,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9984375000 ns\nthreads: 1"
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
          "id": "0ef1a6c1a58f19f2a8f08daf40740644f9714513",
          "message": "Make conditional applicator annotations depend on the context (#1284)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-11T09:47:09-04:00",
          "tree_id": "fc23e73dfaf6028c681e50c0f75e6cd04f8223b7",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/0ef1a6c1a58f19f2a8f08daf40740644f9714513"
        },
        "date": 1728655084168,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5127.418999999236,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2272.9082891649173,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2249.5789625234793 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1987.344427839874,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 562.49241071425,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 408.8998924598261,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6251.510714285757,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 157.4416071428735,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 160.43526785714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5365.170999999691,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4424.840624999859,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4394.53125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5459.811607141977,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 546.0259000001315,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8232.016741072102,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 421.8808516331268,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 750.1217633927938,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1082.4703124999503,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1961.6818768770408,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 544.2872000000989,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 531.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 9916609999.999992,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9906250000 ns\nthreads: 1"
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
          "id": "4e7bbb026d3b80d5a322d66d39ea4cb245a2961c",
          "message": "Correctly proxy compiler mode on `make` compiler helpers (#1285)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-11T10:14:01-04:00",
          "tree_id": "1ef73cdea661d11942a63cf2bb037c6c3e1e9026",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/4e7bbb026d3b80d5a322d66d39ea4cb245a2961c"
        },
        "date": 1728656655490,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5205.4450000014185,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2301.3620520512177,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2023.1150206382881,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 2008.9303651163975 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 567.6690000000235,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 402.59529899122526,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 398.9955179019858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6420.508928570713,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 156.99520247731363,
            "unit": "ns/iter",
            "extra": "iterations: 4072727\ncpu: 157.29632749752193 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5312.32700000146,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4382.358750000038,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4394.53125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5376.92399999969,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 546.7424999998067,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7964.539062498436,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 408.62481384758985,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 404.92472844806025 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 748.8666294643207,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1091.472343750155,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1074.21875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1891.5257960046874,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1883.3722172966227 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 549.5005000000219,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10278893799.999878,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10265625000 ns\nthreads: 1"
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
          "id": "47edec0524f52340b5ae5f13b61d7dd0e6b992d1",
          "message": "Fix `LoopPropertiesType` non-strict guard logic (#1287)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-11T11:25:14-04:00",
          "tree_id": "be73878b952c52f1ec4f5ea075b129f950b18a2b",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/47edec0524f52340b5ae5f13b61d7dd0e6b992d1"
        },
        "date": 1728661168007,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5132.069999999658,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2352.0239285712055,
            "unit": "ns/iter",
            "extra": "iterations: 280000\ncpu: 2343.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2017.456001624733,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2040.320357500399 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 575.3916071429087,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 412.20363338375165,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6420.6160714278385,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 162.70707562770912,
            "unit": "ns/iter",
            "extra": "iterations: 4072727\ncpu: 164.9693190827669 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5440.660714286188,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4463.535000000007,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4394.53125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5519.956999999068,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 553.6350892857708,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8050.736607143299,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 410.90239679280097,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 404.92472844806025 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 751.3512276786015,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1092.5446875001298,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1904.7180399267368,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1925.2249332365475 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 559.5943750000133,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10133277100.000101,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10125000000 ns\nthreads: 1"
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
          "id": "c61180922ffd5a1357642380c2ae3056539d7681",
          "message": "Propertly detect presence of `unevaluated*` keywords (#1286)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-11T12:08:28-04:00",
          "tree_id": "b50f5e61938638a6eb5c07cbabc97a59148221f3",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/c61180922ffd5a1357642380c2ae3056539d7681"
        },
        "date": 1728663587010,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4963.612999999896,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2299.626004881633,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1975.8497105799681,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1967.0776491764725 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 555.7100000000252,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 411.8071334014375,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6327.265178569519,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 162.36107142856125,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 163.92299107142858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5361.915999999383,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4434.044999999287,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4492.1875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5459.24375000035,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 557.4172321429062,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8159.762276786101,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 416.2080974906797,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 755.5063616072135,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1083.3389062501199,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1074.21875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1929.0332690101152,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1904.2990003337056 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 555.804500000022,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10387040999.999954,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10390625000 ns\nthreads: 1"
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
          "id": "671a503fb07149318c53f5f5492b244b44369368",
          "message": "Support expanding `$ref` on 2019-09 and 2020-12 (#1288)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-11T13:52:07-04:00",
          "tree_id": "924a0bf56b198e18180d5bfa8120f3e5120059ab",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/671a503fb07149318c53f5f5492b244b44369368"
        },
        "date": 1728669751124,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5119.7720000004665,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2256.135428420247,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2249.5789625234793 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1970.219520334252,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1949.6394527226034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 551.2734999999793,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 414.2499725781574,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6315.163392857568,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 156.46511160716565,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 160.43526785714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5350.625999999465,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4376.260624999873,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4296.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5446.33900000008,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 544.2524000000049,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 531.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8074.694196429684,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 414.5821719212896,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 748.6414062500199,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1061.4582812500828,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1074.21875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1953.0697795268748,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1925.2249332365475 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 546.7425000000097,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10135436900.00006,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10140625000 ns\nthreads: 1"
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
          "id": "e81ee8deff90447c8648140a373629d1288273a2",
          "message": "Don't rely on `exhaustive` flag for `LogicalOr` (#1289)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-11T14:06:43-04:00",
          "tree_id": "3f39c8a4aab01bd7db23859d50d92986302741f8",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/e81ee8deff90447c8648140a373629d1288273a2"
        },
        "date": 1728670635027,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5236.944000000676,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2343.1426973854627,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1999.8253123048767,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 557.5611000001572,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 408.5090799772833,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6467.5392857144025,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 156.77029017854443,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 156.94754464285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5476.056250001549,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4499.311898396843,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4551.471682968352 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5561.198214286784,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 548.3143750000505,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8132.5334821436,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 414.23689731379795,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 739.0948660714563,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 732.421875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1110.1135937501283,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1912.3073574863224,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1904.2990003337056 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 552.7646428571334,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10318694499.999992,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10312500000 ns\nthreads: 1"
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
          "id": "9210087cfe7c7f68645b6d0c3f1624c9ce08ef8c",
          "message": "Don't rely on the `exhaustive` flag for `LogicalXor` (#1290)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-11T14:31:44-04:00",
          "tree_id": "1ecec8a1555a2f15609f2b36ede88255211448f4",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9210087cfe7c7f68645b6d0c3f1624c9ce08ef8c"
        },
        "date": 1728672150711,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5036.791999998513,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2253.7113239828936,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2249.5789625234793 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1971.9620285375267,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1967.0776491764725 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 550.6456249999507,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 412.3636958765714,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6249.376785713625,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 158.38044642860285,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 156.94754464285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5435.3249999995305,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4442.613750380717,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5472.563392856956,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 537.1533,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8141.960937498384,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 414.8811608072706,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 735.3123883928297,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 732.421875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1083.7001562499893,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1873.808743089966,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1904.2990003337056 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 550.1916071427867,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10186974299.999975,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10171875000 ns\nthreads: 1"
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
          "id": "5afe305cb6095b211f390d0d9fee5a2e39d5b9f1",
          "message": "Don't consider exhausive evaluation on `LogicalNot` (#1291)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-11T14:31:59-04:00",
          "tree_id": "0d665dba83506941beee1fff32c908ad273f003f",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/5afe305cb6095b211f390d0d9fee5a2e39d5b9f1"
        },
        "date": 1728672282172,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5218.323214285599,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5161.830357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2261.10843750007,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2294.921875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2052.74093750063,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2050.78125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 552.9687499999015,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 416.0178127705947,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6347.525892857268,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 159.30734374996243,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 160.43526785714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5415.5470000000605,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4442.9043972474965,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5500.774107141687,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 546.6128000000481,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7975.459038129684,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 7951.97342869005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 420.5714116963395,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 751.7927455357969,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1069.1479687501726,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1074.21875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1974.7857754299428,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 550.3839000000426,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 9933251799.99988,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9953125000 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5afe305cb6095b211f390d0d9fee5a2e39d5b9f1",
          "message": "Don't consider exhausive evaluation on `LogicalNot` (#1291)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-11T18:31:59Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/5afe305cb6095b211f390d0d9fee5a2e39d5b9f1"
        },
        "date": 1728674036590,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5196.625999999469,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2277.586743764502,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2249.5789625234793 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2010.314699012218,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 554.9984000001587,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 408.8273741471818,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 404.92472844806025 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6335.566071427934,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 156.20049107139624,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 156.94754464285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5421.082142857716,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4447.7674999996,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4492.1875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5524.97946428738,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 561.104107142845,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8079.265625001244,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 417.09606517134927,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 746.3416294642502,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1071.158593749999,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1074.21875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1930.5906591414544,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1904.2990003337056 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 542.2320000000127,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10411014199.999954,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10406250000 ns\nthreads: 1"
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
          "id": "2dccfa5489982eeb6a5a0532272d852600bf8145",
          "message": "Remove the `exhaustive` step boolean flag (#1292)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-11T17:42:39-04:00",
          "tree_id": "59204df693117c25950c3187e3cab0f22082ab20",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/2dccfa5489982eeb6a5a0532272d852600bf8145"
        },
        "date": 1728683570060,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5057.329464286958,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5022.321428571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2369.119454108023,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1975.968639257526,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1967.0776491764725 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 547.4028571429454,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 404.1099149950794,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6235.728571427655,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 156.00203125001957,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 156.94754464285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5339.122000000316,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4400.909374999173,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4394.53125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5480.923000000075,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 540.1769999998578,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 531.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8016.061981867414,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 7951.97342869005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 406.75698184121933,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 755.8612723213645,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1067.4810937498337,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1074.21875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 2007.4539352266793,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 2008.9303651163975 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 552.756600000066,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10199454500.000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10187500000 ns\nthreads: 1"
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
          "id": "35ae2c9983b2c2c1578155692feb66509e53e64f",
          "message": "Minor improvements to `SchemaCompilerValuePropertyFilter` definition (#1293)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-11T18:05:05-04:00",
          "tree_id": "c10334be7ee7408914a4241781f7067dd936f15b",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/35ae2c9983b2c2c1578155692feb66509e53e64f"
        },
        "date": 1728684994413,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5073.81500000065,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2409.03428571398,
            "unit": "ns/iter",
            "extra": "iterations: 280000\ncpu: 2399.5535714285716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1982.8512978254137,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 554.9166964286201,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 405.82301313282454,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6375.66339285708,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 155.5743080357124,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 153.45982142857142 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5406.562000000577,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4469.1512982016275,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5474.721428571781,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 550.8497000000716,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8150.397321427607,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 407.6184639456065,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 765.8589285714105,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1077.9510937499738,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1868.9306865450228,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1883.3722172966227 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 553.1164285715461,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10164834100.000008,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10156250000 ns\nthreads: 1"
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
          "id": "3a4fe47db83a6dd9d56fcc8827b42dbf76ec3412",
          "message": "Better group instructions that are annotation related (#1294)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-11T18:22:10-04:00",
          "tree_id": "0869276d1f6292a1227fda982a4f019064a5084e",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/3a4fe47db83a6dd9d56fcc8827b42dbf76ec3412"
        },
        "date": 1728685959555,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5140.114999999241,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2336.7004054683894,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2057.8084375003414,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2050.78125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 553.3603571428055,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 409.5960308216625,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6445.889285714656,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 160.14011160712423,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 160.43526785714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5426.927999999406,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4443.189865551247,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5493.878571428469,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 546.8381250001439,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8123.293526787835,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 411.0367673643791,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 766.9361607141363,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1102.560624999782,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1123.046875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1903.14893138271,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1925.2249332365475 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 560.327857142795,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 10156487200.000128,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10156250000 ns\nthreads: 1"
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
          "id": "325d8d55bf8179ac14c4fc580a05f5fb5d0b3c9c",
          "message": "Revise `EvaluationContext` annotation interface (#1295)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-13T12:06:52-04:00",
          "tree_id": "576614eba73cfdc9b9541683f3a5b26c3626cf7b",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/325d8d55bf8179ac14c4fc580a05f5fb5d0b3c9c"
        },
        "date": 1728836256098,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5109.583000000839,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2357.2960714285987,
            "unit": "ns/iter",
            "extra": "iterations: 280000\ncpu: 2399.5535714285716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2032.681398082235,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 562.9867000000104,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 409.98590334601863,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6249.211607141093,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 156.89470982143763,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 156.94754464285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5502.149107142275,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4505.31967918685,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5615.056999999979,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 555.5636999999933,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8455.160914460374,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8370.498345989527 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 410.99135216376925,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 404.92472844806025 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 789.9059151785793,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1097.370468750114,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1858.4620164839218,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1841.5195013566977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 595.73649999993,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 593.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 9984234000.000015,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9984375000 ns\nthreads: 1"
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
          "id": "80035b1eecaede6c49a0fdaa3b07a3bce8387f75",
          "message": "Write a custom simplified CMake `uriparser` integration (#1297)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-13T14:42:29-04:00",
          "tree_id": "627f4bd83aabe1d7ebbd4dcaffcca3f6bc326ec5",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/80035b1eecaede6c49a0fdaa3b07a3bce8387f75"
        },
        "date": 1728845554658,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5009.974999998121,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2282.832050410901,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2015.2740314951293,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 2008.9303651163975 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 551.9125892858158,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 417.4175339714386,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6272.371428571384,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 153.79663375905193,
            "unit": "ns/iter",
            "extra": "iterations: 4977778\ncpu: 153.80858688354522 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5327.908928569919,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4385.980624999775,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4296.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5409.059999999499,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 565.3479000000061,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7989.553571428689,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 420.0249026824129,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 788.8535714284066,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1077.0853124999035,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1074.21875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1857.9991589278716,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1841.5195013566977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 554.3655357141931,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 9988133800.000013,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9984375000 ns\nthreads: 1"
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
          "id": "e8aa461752edbe8c40e0d9df38e0e228a4d7f534",
          "message": "Fix ClangFormat installation on Linux (#1299)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-13T20:14:24-04:00",
          "tree_id": "d99d013e4029f1ed1b40ca9482f6866e8df3476c",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/e8aa461752edbe8c40e0d9df38e0e228a4d7f534"
        },
        "date": 1728865539695,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5092.255357143114,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5022.321428571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2320.988592646757,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2025.9231853533072,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2040.3158032189697 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 553.2735714284951,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 417.0799099518941,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6241.419642855865,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 153.95558035713464,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 153.45982142857142 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5339.195999999902,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4358.204862407871,
            "unit": "ns/iter",
            "extra": "iterations: 165926\ncpu: 4425.918783071972 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5393.641964285426,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 565.6672000000071,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7972.386160715368,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 416.75229835918117,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 800.8402901786837,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1076.6134374996739,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1074.21875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1849.4272883296758,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1841.5166239844036 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 556.6774107141522,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 9933958000.000074,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9937500000 ns\nthreads: 1"
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
          "id": "32b9cd113af43d577b348da7e944d5f5b7478976",
          "message": "Get rid of `std::future` everywhere (#1298)\n\nFixes: https://github.com/sourcemeta/jsontoolkit/issues/651\r\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-13T21:03:35-04:00",
          "tree_id": "a913ae9423cacee1d2e4748ad643d65af135fea6",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/32b9cd113af43d577b348da7e944d5f5b7478976"
        },
        "date": 1728868419273,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4872.178859088089,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2329.333337797236,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2001.1134164208802,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 557.4214000000666,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 421.3236752068529,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6382.480357144361,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 157.09493303569997,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 156.94754464285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5285.621000000447,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4392.43088236241,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4349.184052614203 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5435.570535713705,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 584.9553571429007,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 585.9375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 7990.947544642373,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 425.017312499989,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 429.6875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 791.5850037568093,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 774.2742079133001 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1113.8065625001304,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1123.046875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1835.1161027818969,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1841.5195013566977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 559.8162499999099,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 9799042599.999893,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9796875000 ns\nthreads: 1"
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
          "id": "1d2aeb8b00eb0090c1167d874ff8ba12d55c65b3",
          "message": "Remove weird blank lines (#1300)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-14T11:16:55-04:00",
          "tree_id": "dab5318fefe58ddb4bdab5d8ac34161cd73884ca",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/1d2aeb8b00eb0090c1167d874ff8ba12d55c65b3"
        },
        "date": 1728919607208,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4854.9980624971795,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2317.6373687098862,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2000.8072776869585,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 558.4820000003674,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 416.8552537114546,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6351.730357144853,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 157.53747767856146,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 156.94754464285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 5323.287999999593,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4378.685624999434,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4296.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 5365.689999998722,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 565.3262499996409,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 8005.981026784069,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 425.6688075823308,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 793.9939732141607,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 1106.9641071425656,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1088.169642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1839.2491421860104,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1841.5195013566977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 566.3388000002669,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 9791581399.999813,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9812500000 ns\nthreads: 1"
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
          "id": "06b6bbef62c7419f738d9f5848dd2ed4dee4bc7e",
          "message": "Re-organize Google Benchmark cases (#1301)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-14T11:35:35-04:00",
          "tree_id": "b9bc3bfd3d0a2a1709fdf014fbed8428b6f68f7c",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/06b6bbef62c7419f738d9f5848dd2ed4dee4bc7e"
        },
        "date": 1728920798926,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5114.724107142722,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5022.321428571428 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 10337271200.000032,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10343750000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 2396.886499010695,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 2092.8900367075557,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2085.6608098892966 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 561.3636607143186,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 408.01682107065056,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 6304.404464285897,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 155.13381696428448,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 156.94754464285714 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 5321.6437500002,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 4378.5066837026525,
            "unit": "ns/iter",
            "extra": "iterations: 165926\ncpu: 4425.918783071972 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 5423.317857144688,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 569.2103571427814,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 7965.097098213851,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 412.11546841090797,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 404.92472844806025 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 815.1787878666768,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 837.0531977441082 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 1080.4673437498025,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1074.21875 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1875.7658712198822,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1883.3722172966227 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 554.8126785713846,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
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
          "id": "dcc720017bfb127d6281c43b60515da57a00e286",
          "message": "Add a `$dynamicRef` benchmark case (#1302)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-14T13:08:13-04:00",
          "tree_id": "145ed5ba2206ea201be8460aa5f97826da2e7aee",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/dcc720017bfb127d6281c43b60515da57a00e286"
        },
        "date": 1728926359844,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4851.144509950205,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 9829075999.999872,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9812500000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 2278.5999122771536,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2249.5789625234793 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1982.156319370807,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 556.315799999993,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 414.4451466764968,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 6366.958035714885,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 161.30069196432623,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 163.92299107142858 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 5335.67800000128,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 4405.119657178959,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4349.184052614203 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 5441.696000000319,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 562.8154999999424,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 8018.22625791916,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 7951.97342869005 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 422.3572691182775,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 793.59866071422,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 1091.9509375000302,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1074.21875 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1817.1091626499074,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1841.5166239844036 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 553.9108000000397,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 8876.332589284886,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8893.69419642857 ns\nthreads: 1"
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
          "id": "1f8309e767163d11674c5406c0b0e1593415ac53",
          "message": "Guard export includes in every public header (#1303)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-14T13:34:26-04:00",
          "tree_id": "43be65cc08faab6ec2973953b462ee12ae051083",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/1f8309e767163d11674c5406c0b0e1593415ac53"
        },
        "date": 1728927915208,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4861.711505991998,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 10051556799.999958,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10031250000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 2345.2105522206302,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1998.5343063999278,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 560.6835714285045,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 414.50335649538425,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 6375.81339285731,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 158.41486607140862,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 160.43526785714286 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 5598.872000000483,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5625 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 4420.274075464988,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4349.184052614203 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 5415.6430000000455,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 560.8776785713587,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 8050.046875000153,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 420.88932469249573,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 805.9635687661616,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 795.2005378569028 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 1093.8273437499647,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1825.547969239112,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1799.6667854167727 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 549.6598999999378,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 8747.780143839998,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8579.760804639265 ns\nthreads: 1"
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
          "id": "b378cd617978ded2092cfb683d7141aeaca57762",
          "message": "Keep a list of all possible schema resources during compilation (#1304)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-14T14:44:05-04:00",
          "tree_id": "75479eb3feba5c4552ef37f455581fcebcdb7a79",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/b378cd617978ded2092cfb683d7141aeaca57762"
        },
        "date": 1728932080154,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4747.989392833716,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4708.436849189396 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 10069335899.999943,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10062500000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 2347.345371265845,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 2020.3032369455095,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 550.4977678571419,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 413.5623074302862,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 6416.490178572027,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 163.0469461861452,
            "unit": "ns/iter",
            "extra": "iterations: 4072727\ncpu: 161.13282329014442 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 5402.7320000000145,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 4449.596395719556,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 5471.634821426667,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 553.8299107141954,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 8082.0837053557125,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 420.46232685793626,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 778.0680803572336,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 1121.1637500001157,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1116.0714285714287 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1922.0071625068756,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1925.2249332365475 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 551.7171428573014,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 8890.99200450122,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8789.023263289004 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b378cd617978ded2092cfb683d7141aeaca57762",
          "message": "Keep a list of all possible schema resources during compilation (#1304)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-14T18:44:05Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/b378cd617978ded2092cfb683d7141aeaca57762"
        },
        "date": 1728933164001,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4913.380000000416,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 9993275500.00021,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9984375000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 2331.3074427376523,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 2026.0261451182666,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2040.320357500399 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 544.6577000000161,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 412.87899496081417,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 6500.047321430153,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 159.75571428573485,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 160.43526785714286 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 5390.258928571257,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 4514.364999999998,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4492.1875 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 5462.83800000083,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 549.8097999998208,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 8056.229910715322,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 418.7008779219961,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 779.0074776785616,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 1119.7089062498833,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1927.402345895027,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1925.2249332365475 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 559.0234999999666,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 8948.72969317219,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8998.28572193874 ns\nthreads: 1"
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
          "id": "7d89944574ae285577959b91344354f51c57dd2a",
          "message": "Centralize how we compute reference label hashes (#1305)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-14T15:44:55-04:00",
          "tree_id": "5bcf736b9db5b0eb63bc064a226f0f58e7968a55",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/7d89944574ae285577959b91344354f51c57dd2a"
        },
        "date": 1728935726926,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4945.967000001019,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 9814097199.999878,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9828125000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 2263.403124999996,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2246.09375 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1956.2521930820878,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1925.2249332365475 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 552.3571999999604,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 412.0216313426442,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 6408.515178571455,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 162.39589285714626,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 163.92299107142858 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 5436.904000000595,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 4419.771874999868,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4394.53125 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 5418.570535716023,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 569.3101785713648,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 8146.367187501978,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8370.535714285714 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 412.99381229824746,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 404.92472844806025 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 796.949218749938,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 1065.3790779557237,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 1046.3164971801352 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1798.1499090625637,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1757.8140694768476 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 551.9090000000233,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 8797.312065571981,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8789.023263289004 ns\nthreads: 1"
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
          "id": "c8a0c0347ad431f0eac004e66a3bce0b15d14afe",
          "message": "Emit step schema resources as hashes (#1306)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-14T16:22:23-04:00",
          "tree_id": "83842a6285d97eecde508369e025f5f81a20dfa7",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/c8a0c0347ad431f0eac004e66a3bce0b15d14afe"
        },
        "date": 1728937993070,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5264.1140000014275,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 9798267200.000055,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9812500000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 2420.483214285696,
            "unit": "ns/iter",
            "extra": "iterations: 280000\ncpu: 2455.3571428571427 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 2058.2423864313137,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2040.320357500399 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 558.0905000001621,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 413.15882571678645,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 404.92472844806025 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 6440.30245535784,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6452.287946428572 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 156.9702232142589,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 156.94754464285714 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 5511.577678571403,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 4484.078507019829,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 5527.881249999415,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 559.0033035714116,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 8192.002232141655,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 407.0428077213534,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 781.2539062501044,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 1132.7017187500844,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1123.046875 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1990.2746543242295,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 567.6239285713385,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 585.9375 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 4730.139223339093,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4649.139195659996 ns\nthreads: 1"
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
          "id": "5abaac66ab4993589d1865517c85770a1349115f",
          "message": "Rename `LogicalNot` to `AnnotationNot` (#1307)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-14T17:04:07-04:00",
          "tree_id": "db81d7d872ba4c6b24003afe1f509e9f9f906325",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/5abaac66ab4993589d1865517c85770a1349115f"
        },
        "date": 1728940518221,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5031.651785714075,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5022.321428571428 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 9787464000,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9781250000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 2305.5884982270845,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1966.7260566136824,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1949.6394527226034 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 550.1489000000674,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 409.24717815864165,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 6266.196428571545,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 158.7644196428682,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 156.94754464285714 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 5398.1026785712465,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 4407.456250000052,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4394.53125 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 5472.9040000006535,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 568.0688392857292,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 8206.926339285405,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 407.2551603903904,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 398.9955179019858 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 809.3246386943264,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 816.1268678005055 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 1053.6623437499059,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1049.8046875 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1969.4457762905872,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1967.0776491764725 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 540.2857999999924,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 4700.310714979617,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4708.436849189396 ns\nthreads: 1"
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
          "id": "5a0cb5d242fb2b0ead5639d4448e095833f292e1",
          "message": "Implement a \"not\" instruction that is not annotation-aware (#1308)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-14T17:21:52-04:00",
          "tree_id": "bf6ec2dacc1b4facd3383bf5a2a25e2b27cd2849",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/5a0cb5d242fb2b0ead5639d4448e095833f292e1"
        },
        "date": 1728941563639,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5101.690999999846,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 10105380900,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10109375000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 2327.2273133623635,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1952.6515096560154,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1949.6394527226034 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 549.0480999999363,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 396.66501116083657,
            "unit": "ns/iter",
            "extra": "iterations: 1792000\ncpu: 401.08816964285717 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 6352.433928571242,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 154.14732142856127,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 153.45982142857142 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 5451.986607143665,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 4477.925079135231,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 5525.1079999993635,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5625 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 534.3715178572746,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 530.1339285714286 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 8178.623883929552,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 401.4135602677778,
            "unit": "ns/iter",
            "extra": "iterations: 1792000\ncpu: 401.08816964285717 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 738.6137276785831,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 732.421875 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 1052.434687499826,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1049.8046875 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1919.3096644079162,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1904.2990003337056 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 540.9738392856411,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 4779.935785656653,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4757.258711838135 ns\nthreads: 1"
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
          "id": "dfe60124d3e8e79a59c71c7dfa52f4b29e207e4f",
          "message": "Don't use C++ ranges just yet (Emscripten support is limited) (#1309)\n\nThis reverts commit 5ceffcc7c5149d65fbd07ad93e2f3ffa32a98023.\r\n\r\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-14T18:15:36-04:00",
          "tree_id": "762906b7a52c0c05a43d017e793eb8c6a6b1e547",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/dfe60124d3e8e79a59c71c7dfa52f4b29e207e4f"
        },
        "date": 1728944976985,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5181.03500000052,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 10340930800.000023,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10343750000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 2373.965357142132,
            "unit": "ns/iter",
            "extra": "iterations: 280000\ncpu: 2343.75 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1959.0148741204684,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1967.0776491764725 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 554.4322999999167,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 400.031281248555,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 398.9955179019858 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 6251.93035714184,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 154.0568749999543,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 153.45982142857142 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 5442.777678571328,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 4462.220438494556,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 5505.382999999711,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5625 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 535.9030357143167,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 530.1339285714286 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 8075.103794644077,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 409.9313031280622,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 417.13167780662155 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 744.5776785713422,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 1071.591485896489,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 1067.242827123738 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1891.1536061988495,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1904.2990003337056 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 546.0547000000133,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 531.25 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 4775.080267928263,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4757.258711838135 ns\nthreads: 1"
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
          "id": "da8da4f7f8b2b0b3fb9c47045363f660b82fea48",
          "message": "Add a basic Node.js distribution based on WebAssembly (#1296)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-15T10:57:03-04:00",
          "tree_id": "64b144e0848f18f7fe00e752040d89a2dffb1bb7",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/da8da4f7f8b2b0b3fb9c47045363f660b82fea48"
        },
        "date": 1729004891772,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4860.871460599805,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 10374119800.000017,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10375000000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 2316.396856699903,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1954.588743960428,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1949.6394527226034 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 554.2042857142754,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 558.0357142857143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 404.23503998952066,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 6221.845535714619,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 158.28689732142465,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 160.43526785714286 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 5480.522321428387,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 4487.333881397689,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4551.471682968352 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 5543.099107143235,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 543.5354464286287,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 8160.781250000479,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 411.85239917338805,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 404.92472844806025 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 746.0361607142728,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 1063.9874267913397,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 1046.3164971801352 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1900.958929427338,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1925.2249332365475 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 545.890000000071,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 4845.7831658772675,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gorez.tony@gmail.com",
            "name": "Tony Gorez",
            "username": "tony-go"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96fb35380a81946c4b82e2eaab740cf67b8b7866",
          "message": "deps: update noa to 837e1ff981f8df45d9e2977a50f5da61d8affed4 (#1311)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-10-15T18:30:47+02:00",
          "tree_id": "9e275f3998041583577749c2e28e14033fd6f099",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/96fb35380a81946c4b82e2eaab740cf67b8b7866"
        },
        "date": 1729010551254,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4937.830000001213,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 10249630100.000105,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10250000000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 2324.5373610074157,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1964.7444249380396,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1949.6394527226034 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 550.7109000000128,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 562.5 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 397.88231026781165,
            "unit": "ns/iter",
            "extra": "iterations: 1792000\ncpu: 401.08816964285717 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 6223.173214286654,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 155.5254241071375,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 153.45982142857142 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 5517.4239999996635,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 4489.071289397157,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 5582.337000000734,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 532.341200000019,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 531.25 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 8218.984374998176,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 408.3610213957828,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 404.92472844806025 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 735.6351562499697,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 732.421875 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 1056.8704687500485,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1049.8046875 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1897.2166939439078,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1883.3722172966227 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 547.2426785713327,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 4784.989205347113,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4757.258711838135 ns\nthreads: 1"
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
          "id": "9685d29e2e633d71319c64b1ab2fbceab865dbf3",
          "message": "Extract the JSON Schema compiler & evaluator out of this repository (#1312)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-15T14:30:16-04:00",
          "tree_id": "5d125d5d4a9f726993e07d4ff5202b0d560100ea",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9685d29e2e633d71319c64b1ab2fbceab865dbf3"
        },
        "date": 1729017465818,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4267.5174475364365,
            "unit": "ns/iter",
            "extra": "iterations: 165926\ncpu: 4331.75029832576 ns\nthreads: 1"
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
          "id": "0469c53c224c08e3568dcdeb0ed35594b91ba5a5",
          "message": "Fix typo on `FindGoogleBenchmark` (#1310)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-15T14:28:18-04:00",
          "tree_id": "6f474213c233160b8a5e4822edb3c62cdbc1ddaa",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/0469c53c224c08e3568dcdeb0ed35594b91ba5a5"
        },
        "date": 1729017661258,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5047.016999999414,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 10354969199.999914,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10359375000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 2375.800808258368,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2354.210542175734 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1968.5551504953505,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1967.0776491764725 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 548.0827999999748,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 397.45461172072777,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 389.92743794966793 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 6234.3062499995285,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 153.92610919972745,
            "unit": "ns/iter",
            "extra": "iterations: 4977778\ncpu: 153.80858688354522 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 5439.754999999877,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 4453.047260863192,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 5506.207999999332,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 537.3591000000033,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 531.25 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 8099.668526784549,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 409.6110000000408,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 410.15625 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 751.8827008929918,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 1057.9840624998837,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1049.8046875 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1918.0926947256912,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1925.2249332365475 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 540.8071428569932,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 4806.975698193169,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4757.258711838135 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9685d29e2e633d71319c64b1ab2fbceab865dbf3",
          "message": "Extract the JSON Schema compiler & evaluator out of this repository (#1312)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-15T18:30:16Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9685d29e2e633d71319c64b1ab2fbceab865dbf3"
        },
        "date": 1729019338031,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4408.975097583385,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4349.184052614203 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9685d29e2e633d71319c64b1ab2fbceab865dbf3",
          "message": "Extract the JSON Schema compiler & evaluator out of this repository (#1312)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-15T18:30:16Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9685d29e2e633d71319c64b1ab2fbceab865dbf3"
        },
        "date": 1729105850454,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4321.288124999966,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4296.875 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9685d29e2e633d71319c64b1ab2fbceab865dbf3",
          "message": "Extract the JSON Schema compiler & evaluator out of this repository (#1312)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-15T18:30:16Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9685d29e2e633d71319c64b1ab2fbceab865dbf3"
        },
        "date": 1729192204225,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4373.523750000174,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4394.53125 ns\nthreads: 1"
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
          "id": "2d78929faf0f96110edfb67fa3ddf6916cf35ef7",
          "message": "Use fully qualified includes for export headers (#1313)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-17T20:18:13-04:00",
          "tree_id": "c0266d2ec9630bd3e8d3ed51f285a8bb4e43df03",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/2d78929faf0f96110edfb67fa3ddf6916cf35ef7"
        },
        "date": 1729211106954,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4320.946875000686,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4296.875 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2d78929faf0f96110edfb67fa3ddf6916cf35ef7",
          "message": "Use fully qualified includes for export headers (#1313)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-18T00:18:13Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/2d78929faf0f96110edfb67fa3ddf6916cf35ef7"
        },
        "date": 1729278717066,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4357.75437499899,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4296.875 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}