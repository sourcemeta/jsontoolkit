window.BENCHMARK_DATA = {
  "lastUpdate": 1726531977796,
  "repoUrl": "https://github.com/sourcemeta/jsontoolkit",
  "entries": {
    "Benchmark (linux/llvm)": [
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
          "id": "80c122533f0ad7d3cea419889792bb8576364110",
          "message": "Fix benchmark names in the GitHub Actions matrix (#1055)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-28T23:19:48-04:00",
          "tree_id": "66d00469fedb1af257cd6c53e0e557397597dcde",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/80c122533f0ad7d3cea419889792bb8576364110"
        },
        "date": 1724901943453,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 390595.31360275426,
            "unit": "ns/iter",
            "extra": "iterations: 1757\ncpu: 390580.62435970403 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17990.66705660949,
            "unit": "ns/iter",
            "extra": "iterations: 39322\ncpu: 17989.310996388787 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 9927.139015593151,
            "unit": "ns/iter",
            "extra": "iterations: 71251\ncpu: 9926.946625310524 ns\nthreads: 1"
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
          "id": "79253e81f99a3ea39f4cda62fa3be2a0cda0d12c",
          "message": "Optimize how we determine instance location on target resolution (#1056)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-28T23:19:59-04:00",
          "tree_id": "21ffbaaf0bbb1ba5b227ee04c646f483adcd3ed8",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/79253e81f99a3ea39f4cda62fa3be2a0cda0d12c"
        },
        "date": 1724902082022,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 391340.94084190566,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 391323.2997724687 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 14516.194564378904,
            "unit": "ns/iter",
            "extra": "iterations: 47943\ncpu: 14516.475669023632 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 9358.559179271895,
            "unit": "ns/iter",
            "extra": "iterations: 73252\ncpu: 9358.467386555998 ns\nthreads: 1"
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
          "id": "5f1e1a070854658dd704d41bc00a7826ecb5c0b6",
          "message": "Add various pointer-related evaluator optimization TODOs (#1054)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-28T23:39:09-04:00",
          "tree_id": "e7e3feb3eecf4608adb385da5be986705dd0c065",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/5f1e1a070854658dd704d41bc00a7826ecb5c0b6"
        },
        "date": 1724903088541,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 399347.54301995464,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 399335.0336182336 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 14388.134415161165,
            "unit": "ns/iter",
            "extra": "iterations: 49176\ncpu: 14387.528916544657 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 9016.234444531045,
            "unit": "ns/iter",
            "extra": "iterations: 76854\ncpu: 9016.035977307623 ns\nthreads: 1"
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
          "id": "cf9503fd399f5dd7c78214759af043a36939763d",
          "message": "chore: highlights dialect support (#1057)\n\nPREVIEW: https://github.com/sourcemeta/jsontoolkit/tree/impr-rdme\r\n\r\nIt triggers me when I check the readme this morning!\r\n\r\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-08-29T16:46:05+02:00",
          "tree_id": "79ff4d206c3097e34c6786773432999ab682ad43",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/cf9503fd399f5dd7c78214759af043a36939763d"
        },
        "date": 1724943140303,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 406159.84167634137,
            "unit": "ns/iter",
            "extra": "iterations: 1718\ncpu: 406125.3259604191 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 14241.046504934622,
            "unit": "ns/iter",
            "extra": "iterations: 48640\ncpu: 14240.228906249997 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 9102.773863353867,
            "unit": "ns/iter",
            "extra": "iterations: 76299\ncpu: 9102.091783640679 ns\nthreads: 1"
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
          "id": "201fab700c50f44b37dbc16aaae6f20b0990d13a",
          "message": "Support performing schema compilation in \"optimized\" mode (#1059)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-29T14:33:49-04:00",
          "tree_id": "ec9a8cde74fde53771c08ebc399f6336aef662cb",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/201fab700c50f44b37dbc16aaae6f20b0990d13a"
        },
        "date": 1724956784009,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 395168.2497155959,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 395162.85836177465 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 13850.601930251496,
            "unit": "ns/iter",
            "extra": "iterations: 50667\ncpu: 13850.243274715296 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 9035.453937535262,
            "unit": "ns/iter",
            "extra": "iterations: 77612\ncpu: 9035.162320259753 ns\nthreads: 1"
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
          "id": "821c1480dfbb7375154cbc3fc6b403a86956f461",
          "message": "Don't unnecessarily emit `properties` annotations in the \"optimized\" mode (#1058)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-29T14:44:14-04:00",
          "tree_id": "82f4754f9c8cba12afc013406f2362983b864362",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/821c1480dfbb7375154cbc3fc6b403a86956f461"
        },
        "date": 1724957425614,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 388656.61015058676,
            "unit": "ns/iter",
            "extra": "iterations: 1793\ncpu: 388647.1327384272 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 12181.60014872749,
            "unit": "ns/iter",
            "extra": "iterations: 57824\ncpu: 12181.622215688987 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3351.6303284216983,
            "unit": "ns/iter",
            "extra": "iterations: 209091\ncpu: 3351.6112936472646 ns\nthreads: 1"
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
          "id": "821c1480dfbb7375154cbc3fc6b403a86956f461",
          "message": "Don't unnecessarily emit `properties` annotations in the \"optimized\" mode (#1058)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-29T18:44:14Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/821c1480dfbb7375154cbc3fc6b403a86956f461"
        },
        "date": 1724958604549,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 391686.8216094411,
            "unit": "ns/iter",
            "extra": "iterations: 1777\ncpu: 391680.4327518289 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 12082.298647568838,
            "unit": "ns/iter",
            "extra": "iterations: 57526\ncpu: 12081.461043701976 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3452.1658814993066,
            "unit": "ns/iter",
            "extra": "iterations: 206750\ncpu: 3451.8990423216446 ns\nthreads: 1"
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
          "id": "eb8c8794a72352932adf5dcd3b23f5d344e3b320",
          "message": "Correctly format the new `report` step option (#1060)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-29T15:19:27-04:00",
          "tree_id": "958feb406f0b7b335ae3aba6ee60cd54549a81b2",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/eb8c8794a72352932adf5dcd3b23f5d344e3b320"
        },
        "date": 1724959514893,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 389044.2757659985,
            "unit": "ns/iter",
            "extra": "iterations: 1795\ncpu: 389023.5682451254 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 12332.960086205128,
            "unit": "ns/iter",
            "extra": "iterations: 57073\ncpu: 12332.619977923016 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3440.468831725468,
            "unit": "ns/iter",
            "extra": "iterations: 203043\ncpu: 3440.4503282555916 ns\nthreads: 1"
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
          "id": "2b5158f237584fff7e35d520c2e5a722d01fd678",
          "message": "Avoid unnecessary `patternProperties` annotations in optimized mode (#1061)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-29T15:19:49-04:00",
          "tree_id": "64acfd6035f0c97218d268782c3431ca857e827e",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/2b5158f237584fff7e35d520c2e5a722d01fd678"
        },
        "date": 1724959545533,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 390870.83041956363,
            "unit": "ns/iter",
            "extra": "iterations: 1716\ncpu: 390831.4994172494 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 12126.290208944838,
            "unit": "ns/iter",
            "extra": "iterations: 57910\ncpu: 12125.390433431186 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3351.4041154441666,
            "unit": "ns/iter",
            "extra": "iterations: 211739\ncpu: 3351.420569663596 ns\nthreads: 1"
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
          "id": "96a12c3bb487c65af92e6d93961570fe68740936",
          "message": "Establish implicit preconditions for compiler steps (#1062)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-29T16:45:55-04:00",
          "tree_id": "d2c3d2ea117edb2096b64caa2e2b27a96dc6099f",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/96a12c3bb487c65af92e6d93961570fe68740936"
        },
        "date": 1724964724599,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 392989.465129325,
            "unit": "ns/iter",
            "extra": "iterations: 1778\ncpu: 392980.3543307086 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 12262.462665613992,
            "unit": "ns/iter",
            "extra": "iterations: 56985\ncpu: 12261.7863297359 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3399.7357811266284,
            "unit": "ns/iter",
            "extra": "iterations: 205818\ncpu: 3399.674353069217 ns\nthreads: 1"
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
          "id": "0e5e3e22e1741af944490da28c2eb5ccda1b7b77",
          "message": "Add a benchmark case exercising schema `items` in Draft 4 (#1064)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-29T17:17:39-04:00",
          "tree_id": "b0fcd429666896585b6cb8073093849e61a5f3fb",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/0e5e3e22e1741af944490da28c2eb5ccda1b7b77"
        },
        "date": 1724966602936,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 391118.3772954927,
            "unit": "ns/iter",
            "extra": "iterations: 1797\ncpu: 391093.28825820814 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 12544.142768686295,
            "unit": "ns/iter",
            "extra": "iterations: 56525\ncpu: 12543.917487837245 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3307.3900433451104,
            "unit": "ns/iter",
            "extra": "iterations: 212943\ncpu: 3307.267818148518 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 13957.481800594996,
            "unit": "ns/iter",
            "extra": "iterations: 50139\ncpu: 13957.131574223657 ns\nthreads: 1"
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
          "id": "ddc6917ba4af30d18bf64aadb6c25eb6bca32190",
          "message": "Reduce generated steps for `items` schemas before 2019-09 (#1063)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-29T17:29:01-04:00",
          "tree_id": "c1743107e23c56de6ae4563e9ed5fb7238bf346c",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/ddc6917ba4af30d18bf64aadb6c25eb6bca32190"
        },
        "date": 1724967283041,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 397076.81792073854,
            "unit": "ns/iter",
            "extra": "iterations: 1741\ncpu: 397054.525560023 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 12209.443939526645,
            "unit": "ns/iter",
            "extra": "iterations: 57215\ncpu: 12208.590352180374 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3275.0369452681593,
            "unit": "ns/iter",
            "extra": "iterations: 194531\ncpu: 3274.960705491671 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10562.578523530965,
            "unit": "ns/iter",
            "extra": "iterations: 66063\ncpu: 10562.243540257026 ns\nthreads: 1"
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
          "id": "9183959ccc0b63aa26a4202cd5adf66f51861b32",
          "message": "Start benchmarking optional schema properties with minimal matches (#1067)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-29T19:51:49-04:00",
          "tree_id": "edd348c77b5d73a66a852f01fdf50dfc5916b3d9",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9183959ccc0b63aa26a4202cd5adf66f51861b32"
        },
        "date": 1724975864871,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 399662.3879064432,
            "unit": "ns/iter",
            "extra": "iterations: 1753\ncpu: 399642.9395322304 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 11885.112393847392,
            "unit": "ns/iter",
            "extra": "iterations: 58642\ncpu: 11884.181542239348 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3301.820967355966,
            "unit": "ns/iter",
            "extra": "iterations: 213179\ncpu: 3301.701982840712 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1384.1405102024542,
            "unit": "ns/iter",
            "extra": "iterations: 508504\ncpu: 1384.1125222220467 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10261.978306148718,
            "unit": "ns/iter",
            "extra": "iterations: 68176\ncpu: 10261.884108777283 ns\nthreads: 1"
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
          "id": "5ca7adfc6d08af5affad44ba5c1fa5d784c31c00",
          "message": "Emit `properties` steps in two ways depending on `required` (#1066)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-29T22:36:50-04:00",
          "tree_id": "a54d718ce277e47b252bb8a42c05c7586541b739",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/5ca7adfc6d08af5affad44ba5c1fa5d784c31c00"
        },
        "date": 1724985759829,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 385590.5055248508,
            "unit": "ns/iter",
            "extra": "iterations: 1810\ncpu: 385577.45690607734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7376.3157581933565,
            "unit": "ns/iter",
            "extra": "iterations: 94224\ncpu: 7375.878406775347 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3356.087424746214,
            "unit": "ns/iter",
            "extra": "iterations: 210787\ncpu: 3355.881724205003 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 793.1576194529042,
            "unit": "ns/iter",
            "extra": "iterations: 891711\ncpu: 793.1033585993671 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10513.78355611089,
            "unit": "ns/iter",
            "extra": "iterations: 66359\ncpu: 10513.604198375504 ns\nthreads: 1"
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
          "id": "ab0a7b441e3488d41e47c1c22b8fd698c9ee508a",
          "message": "Get rid of `AssertionRegex` explicit type conditions (#1068)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-29T23:22:09-04:00",
          "tree_id": "922422459b61635aaf6bc473e0efef715392144c",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/ab0a7b441e3488d41e47c1c22b8fd698c9ee508a"
        },
        "date": 1724988482686,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 386348.6751381,
            "unit": "ns/iter",
            "extra": "iterations: 1810\ncpu: 386342.18618784525 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7243.748745549146,
            "unit": "ns/iter",
            "extra": "iterations: 96058\ncpu: 7243.568416998061 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3226.3642508710464,
            "unit": "ns/iter",
            "extra": "iterations: 215250\ncpu: 3226.315981416957 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 782.0700985233815,
            "unit": "ns/iter",
            "extra": "iterations: 872686\ncpu: 782.0455776762777 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10267.51858133092,
            "unit": "ns/iter",
            "extra": "iterations: 67810\ncpu: 10267.459887922125 ns\nthreads: 1"
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
          "id": "9a29791df08f66c365f104b5059944f4ed5affd6",
          "message": "Introduce a new `LogicalWhenType` step (#1069)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-29T23:57:51-04:00",
          "tree_id": "e69cea9ec84c6abc2ac573aaee9ff2c837c04fb3",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9a29791df08f66c365f104b5059944f4ed5affd6"
        },
        "date": 1724990623724,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 406167.25214901683,
            "unit": "ns/iter",
            "extra": "iterations: 1745\ncpu: 406157.94727793697 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7586.847662468809,
            "unit": "ns/iter",
            "extra": "iterations: 92341\ncpu: 7586.803662511778 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3279.893597897913,
            "unit": "ns/iter",
            "extra": "iterations: 218069\ncpu: 3279.81659016183 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 790.9909897662443,
            "unit": "ns/iter",
            "extra": "iterations: 897424\ncpu: 790.994671415072 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10690.071460288345,
            "unit": "ns/iter",
            "extra": "iterations: 65309\ncpu: 10690.025387006392 ns\nthreads: 1"
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
          "id": "b97fab38ba9693ed4aeafc25e7cb915dfb98422c",
          "message": "Avoid type preconditions on `AssertionDefines` for `required` (#1070)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-30T10:50:20-04:00",
          "tree_id": "7f8d8fa60fbe0dd1a178b41091fd5ddcf819b044",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/b97fab38ba9693ed4aeafc25e7cb915dfb98422c"
        },
        "date": 1725029789139,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 393084.2486002166,
            "unit": "ns/iter",
            "extra": "iterations: 1786\ncpu: 393040.60694288905 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7619.984787515959,
            "unit": "ns/iter",
            "extra": "iterations: 91701\ncpu: 7619.190586798399 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3208.611335290599,
            "unit": "ns/iter",
            "extra": "iterations: 218327\ncpu: 3208.613405579704 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 782.159442932942,
            "unit": "ns/iter",
            "extra": "iterations: 898635\ncpu: 782.1127309753125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11578.013920806487,
            "unit": "ns/iter",
            "extra": "iterations: 60485\ncpu: 11576.986558650906 ns\nthreads: 1"
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
          "id": "585747c3825591282fe60a6b94d0c292e04f14e8",
          "message": "Implement a new `LogicalWhenDefines` compile step (#1071)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-30T11:40:49-04:00",
          "tree_id": "e47532ff9de1009385dd46e23ee4e4f6280280d9",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/585747c3825591282fe60a6b94d0c292e04f14e8"
        },
        "date": 1725032800375,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 383831.8241150522,
            "unit": "ns/iter",
            "extra": "iterations: 1808\ncpu: 383812.3982300884 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7429.916126238509,
            "unit": "ns/iter",
            "extra": "iterations: 94678\ncpu: 7429.443144130633 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3354.8711256735396,
            "unit": "ns/iter",
            "extra": "iterations: 211198\ncpu: 3354.703155332912 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 798.8852005205512,
            "unit": "ns/iter",
            "extra": "iterations: 843131\ncpu: 798.837496189798 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10354.697724793496,
            "unit": "ns/iter",
            "extra": "iterations: 66939\ncpu: 10354.670207203577 ns\nthreads: 1"
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
          "id": "a4b8893dfb9dc133fb64e896116bc2953c50429d",
          "message": "Introduce a new `AnnotationBasenameToParent` compiler step (#1072)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-30T14:35:54-04:00",
          "tree_id": "1acc67650b38db1ee601e57ec7c390d76e6fbbd2",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/a4b8893dfb9dc133fb64e896116bc2953c50429d"
        },
        "date": 1725043348720,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 390756.02406268637,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 390711.1275881365 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7638.027413393869,
            "unit": "ns/iter",
            "extra": "iterations: 92546\ncpu: 7637.43539429041 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3412.097264508518,
            "unit": "ns/iter",
            "extra": "iterations: 214806\ncpu: 3411.657877340483 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 814.9968967407065,
            "unit": "ns/iter",
            "extra": "iterations: 890032\ncpu: 814.9382381757065 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10703.402348356067,
            "unit": "ns/iter",
            "extra": "iterations: 63619\ncpu: 10702.459359625269 ns\nthreads: 1"
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
          "id": "ce47228946b3c0d8e8198daa859aa5d67f6c6d07",
          "message": "Introduce a new `AnnotationToParent` compiler step (#1073)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-30T14:56:49-04:00",
          "tree_id": "b7bb03fbb10bb2819cc78dcb490335285bd4e311",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/ce47228946b3c0d8e8198daa859aa5d67f6c6d07"
        },
        "date": 1725044564475,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 391453.89949750295,
            "unit": "ns/iter",
            "extra": "iterations: 1791\ncpu: 391434.20826353994 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7603.899957410598,
            "unit": "ns/iter",
            "extra": "iterations: 91571\ncpu: 7603.793176879143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3229.8864984173156,
            "unit": "ns/iter",
            "extra": "iterations: 217019\ncpu: 3229.8374980992453 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 813.4057304299735,
            "unit": "ns/iter",
            "extra": "iterations: 845591\ncpu: 813.3943573193189 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10711.029342832877,
            "unit": "ns/iter",
            "extra": "iterations: 64002\ncpu: 10710.591919002523 ns\nthreads: 1"
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
          "id": "ce47228946b3c0d8e8198daa859aa5d67f6c6d07",
          "message": "Introduce a new `AnnotationToParent` compiler step (#1073)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-30T18:56:49Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/ce47228946b3c0d8e8198daa859aa5d67f6c6d07"
        },
        "date": 1725044962569,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 390431.34021199157,
            "unit": "ns/iter",
            "extra": "iterations: 1793\ncpu: 390421.474623536 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7419.773827923296,
            "unit": "ns/iter",
            "extra": "iterations: 97050\ncpu: 7419.643822771767 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3184.033304745423,
            "unit": "ns/iter",
            "extra": "iterations: 223872\ncpu: 3183.945821719553 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 800.6946594596135,
            "unit": "ns/iter",
            "extra": "iterations: 888955\ncpu: 800.6730520667523 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10157.418646674214,
            "unit": "ns/iter",
            "extra": "iterations: 66961\ncpu: 10157.209286002302 ns\nthreads: 1"
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
          "id": "7789be6882d9552d9cc13eb8eafccb77cc694e81",
          "message": "Introduce a new `LoopPropertiesRegex` compiler step (#1074)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-30T15:28:40-04:00",
          "tree_id": "79859096a15d0ce38e45928cd95ee0e5ebf77049",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/7789be6882d9552d9cc13eb8eafccb77cc694e81"
        },
        "date": 1725046492185,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 386739.16954822233,
            "unit": "ns/iter",
            "extra": "iterations: 1793\ncpu: 386708.4651422198 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7462.441005761438,
            "unit": "ns/iter",
            "extra": "iterations: 93899\ncpu: 7461.798613403765 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3274.4145738987377,
            "unit": "ns/iter",
            "extra": "iterations: 216181\ncpu: 3274.101567667835 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 777.0137173085205,
            "unit": "ns/iter",
            "extra": "iterations: 901343\ncpu: 776.9529846018663 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10378.975223022591,
            "unit": "ns/iter",
            "extra": "iterations: 67482\ncpu: 10378.267078628374 ns\nthreads: 1"
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
          "id": "480064ef950c18125fc846f9b76a9548292e8762",
          "message": "Implement a new `LoopPropertiesNoAdjacentAnnotation` compile step (#1076)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-30T19:55:54-04:00",
          "tree_id": "3ba76b184989310229f5c5e3d43a4441c4bd7967",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/480064ef950c18125fc846f9b76a9548292e8762"
        },
        "date": 1725062518535,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 386266.53455964563,
            "unit": "ns/iter",
            "extra": "iterations: 1794\ncpu: 386237.2876254181 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 5989.054565142286,
            "unit": "ns/iter",
            "extra": "iterations: 115440\ncpu: 5989.02421171171 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3277.5309923937107,
            "unit": "ns/iter",
            "extra": "iterations: 213504\ncpu: 3277.4828153102517 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 786.4345209741658,
            "unit": "ns/iter",
            "extra": "iterations: 869118\ncpu: 786.421818441224 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11228.439590213111,
            "unit": "ns/iter",
            "extra": "iterations: 62374\ncpu: 11228.192083239817 ns\nthreads: 1"
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
          "id": "0c43415e1ebe2f39d1623873ea897648f6284fb0",
          "message": "Add a new `LogicalWhenNoAdjacentAnnotations` compiler step (#1077)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-31T15:35:14-04:00",
          "tree_id": "b16c2dbc02d01784fd451dccc96769b8899cd0c3",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/0c43415e1ebe2f39d1623873ea897648f6284fb0"
        },
        "date": 1725133295688,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 395421.90715885034,
            "unit": "ns/iter",
            "extra": "iterations: 1788\ncpu: 395399.2997762863 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6088.930098526194,
            "unit": "ns/iter",
            "extra": "iterations: 114690\ncpu: 6088.704063126688 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3262.718518310988,
            "unit": "ns/iter",
            "extra": "iterations: 214188\ncpu: 3262.5432377163975 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 804.2761404600207,
            "unit": "ns/iter",
            "extra": "iterations: 870767\ncpu: 804.246250719193 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10869.298311473403,
            "unit": "ns/iter",
            "extra": "iterations: 64198\ncpu: 10869.15181158291 ns\nthreads: 1"
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
          "id": "adf73051de54ee3c40cf70d881f4a8a5fdc75817",
          "message": "Implement a new `LogicalWhenAdjacentAnnotations` compiler step (#1078)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-31T15:51:59-04:00",
          "tree_id": "2df2bc782091f69c066d289ec576f57b65207c13",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/adf73051de54ee3c40cf70d881f4a8a5fdc75817"
        },
        "date": 1725134276893,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 393242.6071428439,
            "unit": "ns/iter",
            "extra": "iterations: 1792\ncpu: 393235.72544642846 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 5985.251449430998,
            "unit": "ns/iter",
            "extra": "iterations: 116425\ncpu: 5985.067098990767 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3332.339888755645,
            "unit": "ns/iter",
            "extra": "iterations: 209089\ncpu: 3332.2695885484172 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 797.3393270655973,
            "unit": "ns/iter",
            "extra": "iterations: 878362\ncpu: 797.3265544274458 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10351.026556681616,
            "unit": "ns/iter",
            "extra": "iterations: 67403\ncpu: 10350.734225479575 ns\nthreads: 1"
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
          "id": "5165ffb6b2e7433595a777da17c6dc0764dc7127",
          "message": "Streamline how we compile `if`/`then`/`else` (#1079)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-31T16:17:20-04:00",
          "tree_id": "bd202d241ed44e7a1e5113ace25309f05cda0cac",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/5165ffb6b2e7433595a777da17c6dc0764dc7127"
        },
        "date": 1725135829354,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 388492.1071829152,
            "unit": "ns/iter",
            "extra": "iterations: 1782\ncpu: 388488.4517396184 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6132.665899922391,
            "unit": "ns/iter",
            "extra": "iterations: 114771\ncpu: 6132.515731325858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3342.569075828852,
            "unit": "ns/iter",
            "extra": "iterations: 209907\ncpu: 3342.4614567403646 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 811.8733566622279,
            "unit": "ns/iter",
            "extra": "iterations: 867594\ncpu: 811.8348547823057 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10330.8688879653,
            "unit": "ns/iter",
            "extra": "iterations: 67408\ncpu: 10330.488087467367 ns\nthreads: 1"
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
          "id": "a4a0cbd8bbc257713645b5a6374e5b2699f6fa29",
          "message": "Simplify `unevaluatedItems` instruction wrapping (#1080)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-31T17:09:45-04:00",
          "tree_id": "2d17104463662f4a7803fbbcf1fc11efe879fe0d",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/a4a0cbd8bbc257713645b5a6374e5b2699f6fa29"
        },
        "date": 1725138952867,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 392833.1775754006,
            "unit": "ns/iter",
            "extra": "iterations: 1757\ncpu: 392821.6642003415 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6073.637966411492,
            "unit": "ns/iter",
            "extra": "iterations: 115992\ncpu: 6073.424029243396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3426.5693431733707,
            "unit": "ns/iter",
            "extra": "iterations: 203387\ncpu: 3426.450776106633 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 795.527638042247,
            "unit": "ns/iter",
            "extra": "iterations: 878644\ncpu: 795.5060581987697 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10578.722750274392,
            "unit": "ns/iter",
            "extra": "iterations: 66597\ncpu: 10578.248254425873 ns\nthreads: 1"
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
          "id": "23502c6299a977dcd74c14cc7c993443935245ab",
          "message": "Centralise annotation logic on the `EvaluationContext` (#1081)\n\nSo we can more easily create other compiler rules without duplicating\r\nall of the currently messy logic.\r\n\r\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-31T19:17:53-04:00",
          "tree_id": "1cec93c011ce9fbd0de8993444728da1e3c947b2",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/23502c6299a977dcd74c14cc7c993443935245ab"
        },
        "date": 1725146636656,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 394957.3816155781,
            "unit": "ns/iter",
            "extra": "iterations: 1795\ncpu: 394955.8066852368 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6132.756710979964,
            "unit": "ns/iter",
            "extra": "iterations: 113359\ncpu: 6132.545214760186 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3272.5608682404186,
            "unit": "ns/iter",
            "extra": "iterations: 213305\ncpu: 3272.410576404678 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 799.5323810228975,
            "unit": "ns/iter",
            "extra": "iterations: 878215\ncpu: 799.4785809852946 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10895.053995982884,
            "unit": "ns/iter",
            "extra": "iterations: 64227\ncpu: 10894.761097357812 ns\nthreads: 1"
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
          "id": "5595dfd03a0f8454cc9e4fcc75fe95615add2afe",
          "message": "Introduce a new `LoopPropertiesNoAnnotation` compiler step (#1082)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-02T11:31:33-04:00",
          "tree_id": "8d7d4f7f28ba137b8227ddd65c10f1164e37abbc",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/5595dfd03a0f8454cc9e4fcc75fe95615add2afe"
        },
        "date": 1725291458874,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 389698.5237825682,
            "unit": "ns/iter",
            "extra": "iterations: 1766\ncpu: 389686.8227633069 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6149.2489231605405,
            "unit": "ns/iter",
            "extra": "iterations: 113991\ncpu: 6149.125369546717 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3310.684517444782,
            "unit": "ns/iter",
            "extra": "iterations: 212297\ncpu: 3310.645157491627 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 790.1116892941736,
            "unit": "ns/iter",
            "extra": "iterations: 893604\ncpu: 790.0857672973714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10259.612774185543,
            "unit": "ns/iter",
            "extra": "iterations: 67746\ncpu: 10259.389100463493 ns\nthreads: 1"
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
          "id": "449bdf0cdad3afef5d1c7ca5eae53411ed5aeca5",
          "message": "Unwrangle `unevaluatedItems` annotation related instructions (#1083)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-02T12:04:50-04:00",
          "tree_id": "766248dcef0f2ff8738efad59707ca87d7c9859c",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/449bdf0cdad3afef5d1c7ca5eae53411ed5aeca5"
        },
        "date": 1725293448522,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 392038.5895986591,
            "unit": "ns/iter",
            "extra": "iterations: 1769\ncpu: 392011.1729790843 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6095.180283375471,
            "unit": "ns/iter",
            "extra": "iterations: 115324\ncpu: 6094.649691304499 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3295.38959746722,
            "unit": "ns/iter",
            "extra": "iterations: 210045\ncpu: 3295.2006427194183 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 788.3655915305054,
            "unit": "ns/iter",
            "extra": "iterations: 891670\ncpu: 788.3064822187584 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10141.08398250834,
            "unit": "ns/iter",
            "extra": "iterations: 69062\ncpu: 10140.871926674588 ns\nthreads: 1"
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
          "id": "1b0bdd7b6cfe33b264e9724db1cc76450e6f1971",
          "message": "Introduce a new `LoopItemsUnmarked` compiler step (#1084)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-02T12:27:57-04:00",
          "tree_id": "96ca8632486e17cae1c4e2ce439842dd583ec060",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/1b0bdd7b6cfe33b264e9724db1cc76450e6f1971"
        },
        "date": 1725294834288,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 381905.8184019006,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 381880.3946731233 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6056.111703864403,
            "unit": "ns/iter",
            "extra": "iterations: 116406\ncpu: 6055.824184320399 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3256.135791128151,
            "unit": "ns/iter",
            "extra": "iterations: 214447\ncpu: 3255.9955700009787 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 797.37934610494,
            "unit": "ns/iter",
            "extra": "iterations: 876532\ncpu: 797.3430633450923 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11170.044560424778,
            "unit": "ns/iter",
            "extra": "iterations: 63038\ncpu: 11169.34207938069 ns\nthreads: 1"
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
          "id": "50fe01f9eeb3b4fd3ba38e35aa6c83cfda0f64f3",
          "message": "Start generalizing `LoopItemsFromAnnotationIndex` as `LoopItemsUnevaluated` (#1085)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-02T12:44:14-04:00",
          "tree_id": "0f38597600ac0acc8d7f576f14029df8424c7f29",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/50fe01f9eeb3b4fd3ba38e35aa6c83cfda0f64f3"
        },
        "date": 1725295819112,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 388092.2300443555,
            "unit": "ns/iter",
            "extra": "iterations: 1804\ncpu: 388072.6635254989 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 5997.12240285169,
            "unit": "ns/iter",
            "extra": "iterations: 115030\ncpu: 5996.84650960619 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3288.9645719105997,
            "unit": "ns/iter",
            "extra": "iterations: 215761\ncpu: 3288.7210292870336 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 795.4269430522041,
            "unit": "ns/iter",
            "extra": "iterations: 880895\ncpu: 795.3828662893986 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10394.517235281655,
            "unit": "ns/iter",
            "extra": "iterations: 67855\ncpu: 10393.748714169913 ns\nthreads: 1"
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
          "id": "7bc5c57fb79817e2c2091fb3c6354a66f8344aed",
          "message": "Take a mask as part of `LoopItemsUnevaluated` (#1086)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-02T13:01:11-04:00",
          "tree_id": "f3b15f55c955b393c289397a32ba43de66451eaf",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/7bc5c57fb79817e2c2091fb3c6354a66f8344aed"
        },
        "date": 1725296858551,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 390621.40855374665,
            "unit": "ns/iter",
            "extra": "iterations: 1777\ncpu: 390604.3483398987 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6256.94527039451,
            "unit": "ns/iter",
            "extra": "iterations: 113741\ncpu: 6256.845561407057 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3340.1408526587406,
            "unit": "ns/iter",
            "extra": "iterations: 211597\ncpu: 3340.070638997717 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 820.7850212858741,
            "unit": "ns/iter",
            "extra": "iterations: 757782\ncpu: 820.7688240153506 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10745.218617902307,
            "unit": "ns/iter",
            "extra": "iterations: 65292\ncpu: 10744.948401029214 ns\nthreads: 1"
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
          "id": "78f5e18965aa3a0e1c29afb2536eeb1393a33962",
          "message": "Get rid of the concept of compiler target types (#1087)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-02T14:17:39-04:00",
          "tree_id": "182ed78d918be978b4923c77c6efea31c6359d25",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/78f5e18965aa3a0e1c29afb2536eeb1393a33962"
        },
        "date": 1725301410247,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 394978.818994393,
            "unit": "ns/iter",
            "extra": "iterations: 1790\ncpu: 394964.10055865924 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2348.1856228392403,
            "unit": "ns/iter",
            "extra": "iterations: 296192\ncpu: 2348.0056922536733 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2576.1935945721316,
            "unit": "ns/iter",
            "extra": "iterations: 270302\ncpu: 2576.045922708674 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 201.3050985314664,
            "unit": "ns/iter",
            "extra": "iterations: 3537195\ncpu: 201.29083638306622 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10262.651968896002,
            "unit": "ns/iter",
            "extra": "iterations: 68287\ncpu: 10262.040256564209 ns\nthreads: 1"
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
          "id": "ccd841394ae5f599441c6dd88936674caeab3b2b",
          "message": "Delete `resolve_value` from `EvaluationContext` (#1089)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-02T14:28:41-04:00",
          "tree_id": "645832cd9e86de9d280fceda89ab092055dbad46",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/ccd841394ae5f599441c6dd88936674caeab3b2b"
        },
        "date": 1725302081684,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 392556.1217197073,
            "unit": "ns/iter",
            "extra": "iterations: 1791\ncpu: 392536.35064209934 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2361.372103929917,
            "unit": "ns/iter",
            "extra": "iterations: 292120\ncpu: 2361.250948240449 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2618.757075471629,
            "unit": "ns/iter",
            "extra": "iterations: 270512\ncpu: 2618.7123824451414 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 195.91907887444984,
            "unit": "ns/iter",
            "extra": "iterations: 3590694\ncpu: 195.9169238592873 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10403.037727082836,
            "unit": "ns/iter",
            "extra": "iterations: 66716\ncpu: 10402.91501289046 ns\nthreads: 1"
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
          "id": "e186e22cf195d93d71b3fee4c65fff4337b50082",
          "message": "Unify how applicator and control steps are defined (#1090)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-02T14:47:09-04:00",
          "tree_id": "2269b32b78e504c2ce3bc9e80d0f6891b7fee2dd",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/e186e22cf195d93d71b3fee4c65fff4337b50082"
        },
        "date": 1725303176853,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 394630.3027420371,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 394620.19809737 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2305.6483624303596,
            "unit": "ns/iter",
            "extra": "iterations: 305758\ncpu: 2305.540260598251 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2572.523970096006,
            "unit": "ns/iter",
            "extra": "iterations: 260971\ncpu: 2572.4357687252605 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 198.67072595092384,
            "unit": "ns/iter",
            "extra": "iterations: 3525252\ncpu: 198.66583835708747 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10018.250214285932,
            "unit": "ns/iter",
            "extra": "iterations: 70000\ncpu: 10017.741614285722 ns\nthreads: 1"
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
          "id": "e186e22cf195d93d71b3fee4c65fff4337b50082",
          "message": "Unify how applicator and control steps are defined (#1090)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-02T18:47:09Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/e186e22cf195d93d71b3fee4c65fff4337b50082"
        },
        "date": 1725304082161,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 398324.17951603554,
            "unit": "ns/iter",
            "extra": "iterations: 1777\ncpu: 398319.02194710186 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2300.3419749471527,
            "unit": "ns/iter",
            "extra": "iterations: 303917\ncpu: 2300.309137034124 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2606.94260680382,
            "unit": "ns/iter",
            "extra": "iterations: 267523\ncpu: 2606.915674540133 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 197.71764077115424,
            "unit": "ns/iter",
            "extra": "iterations: 3543819\ncpu: 197.71326836951874 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9907.084695962905,
            "unit": "ns/iter",
            "extra": "iterations: 70452\ncpu: 9906.942812127403 ns\nthreads: 1"
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
          "id": "ef534473973d1d37af062c4aa9f6e3918b2f7e97",
          "message": "Don't evaluate conditions for compiler steps that don't use them (#1091)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-02T15:25:46-04:00",
          "tree_id": "e9a336500f6f900b991a84ddc17c74ca75e05073",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/ef534473973d1d37af062c4aa9f6e3918b2f7e97"
        },
        "date": 1725305518204,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 396508.28839594027,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 396490.86689419794 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2307.573891682375,
            "unit": "ns/iter",
            "extra": "iterations: 304899\ncpu: 2307.4274563052018 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2597.933380967302,
            "unit": "ns/iter",
            "extra": "iterations: 271514\ncpu: 2597.8528289517303 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 199.1596496763078,
            "unit": "ns/iter",
            "extra": "iterations: 3502475\ncpu: 199.15338439246537 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10512.616807530525,
            "unit": "ns/iter",
            "extra": "iterations: 66494\ncpu: 10512.460718260303 ns\nthreads: 1"
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
          "id": "ad4b77012190bd7d75ff923003ef0a20a81ab61e",
          "message": "Introduce a new `AssertionPropertyDependencies` compiler step (#1092)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-02T16:19:51-04:00",
          "tree_id": "097038cd91d8d406f31e555ec1ff49f8da8e00c6",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/ad4b77012190bd7d75ff923003ef0a20a81ab61e"
        },
        "date": 1725308744230,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 389373.84460592445,
            "unit": "ns/iter",
            "extra": "iterations: 1789\ncpu: 389332.07098937954 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2187.6304676652508,
            "unit": "ns/iter",
            "extra": "iterations: 321961\ncpu: 2187.50325971158 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2636.7671367063244,
            "unit": "ns/iter",
            "extra": "iterations: 263382\ncpu: 2636.716404310091 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 203.32117947667922,
            "unit": "ns/iter",
            "extra": "iterations: 3380957\ncpu: 203.30311033237032 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10805.287072979008,
            "unit": "ns/iter",
            "extra": "iterations: 64663\ncpu: 10804.104340967791 ns\nthreads: 1"
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
          "id": "623c7d1e85f6e2be3d1a1f722cdcdd929d213e88",
          "message": "Remove unnecessary conditions for `exclusive(Max|min)imum` on Draft 6 (#1093)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-02T16:27:55-04:00",
          "tree_id": "e74c6899c320a899457b36c2c05803e1869677c1",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/623c7d1e85f6e2be3d1a1f722cdcdd929d213e88"
        },
        "date": 1725309490219,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 389271.2736960336,
            "unit": "ns/iter",
            "extra": "iterations: 1783\ncpu: 389258.0897363993 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2229.9050204707455,
            "unit": "ns/iter",
            "extra": "iterations: 321922\ncpu: 2229.8561266393735 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2741.342431934923,
            "unit": "ns/iter",
            "extra": "iterations: 258025\ncpu: 2741.192120918517 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 196.22124829818955,
            "unit": "ns/iter",
            "extra": "iterations: 3558685\ncpu: 196.21794735976906 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10509.178659827705,
            "unit": "ns/iter",
            "extra": "iterations: 67066\ncpu: 10508.966182566428 ns\nthreads: 1"
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
          "id": "82cd27343392da4278315bd61f33a6b2441a359a",
          "message": "Simplify `resolve_target` in the `EvaluationContext` (#1094)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-02T16:39:35-04:00",
          "tree_id": "09aef05d2719cfa53492989ea3c00e07ba088ae3",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/82cd27343392da4278315bd61f33a6b2441a359a"
        },
        "date": 1725309923106,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 388388.8402699568,
            "unit": "ns/iter",
            "extra": "iterations: 1778\ncpu: 388373.3278965129 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2173.2208249786418,
            "unit": "ns/iter",
            "extra": "iterations: 328663\ncpu: 2173.20194545781 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2556.6211523051766,
            "unit": "ns/iter",
            "extra": "iterations: 273313\ncpu: 2556.617815471638 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 202.68039753650692,
            "unit": "ns/iter",
            "extra": "iterations: 3469870\ncpu: 202.67616279572417 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10067.959967072604,
            "unit": "ns/iter",
            "extra": "iterations: 69243\ncpu: 10067.580592984132 ns\nthreads: 1"
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
          "id": "4edd167aaae75e6b3c1ec6260dd96d6f5becb834",
          "message": "Introduce a new `LogicalWhenArraySizeGreater` step (#1095)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-02T16:59:18-04:00",
          "tree_id": "083fe44518f229ea7b91886d5a9b332390247693",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/4edd167aaae75e6b3c1ec6260dd96d6f5becb834"
        },
        "date": 1725311112493,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 383578.10163934564,
            "unit": "ns/iter",
            "extra": "iterations: 1830\ncpu: 383567.79672131146 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2100.6278132640687,
            "unit": "ns/iter",
            "extra": "iterations: 333776\ncpu: 2100.622456377929 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2676.1020107952477,
            "unit": "ns/iter",
            "extra": "iterations: 261041\ncpu: 2676.022958079383 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 208.78891768624348,
            "unit": "ns/iter",
            "extra": "iterations: 3356790\ncpu: 208.7833742950856 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9919.2266145709,
            "unit": "ns/iter",
            "extra": "iterations: 69616\ncpu: 9918.785106871977 ns\nthreads: 1"
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
          "id": "861aceec6f70c421a6b462a55a68434e60386789",
          "message": "Introduce a new `LogicalWhenArraySizeEqual` compiler step (#1096)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-02T17:20:55-04:00",
          "tree_id": "bbf060e12fe917494167d7e152de3e86fd39e0d1",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/861aceec6f70c421a6b462a55a68434e60386789"
        },
        "date": 1725312402625,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 391156.4874141713,
            "unit": "ns/iter",
            "extra": "iterations: 1748\ncpu: 391136.55549199076 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2201.523071988668,
            "unit": "ns/iter",
            "extra": "iterations: 311785\ncpu: 2201.3887197908825 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2576.5288447726366,
            "unit": "ns/iter",
            "extra": "iterations: 271505\ncpu: 2576.4987532457967 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 203.05273868883566,
            "unit": "ns/iter",
            "extra": "iterations: 3450465\ncpu: 203.04328865819545 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10202.454392927002,
            "unit": "ns/iter",
            "extra": "iterations: 68542\ncpu: 10202.318665927452 ns\nthreads: 1"
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
          "id": "446c8a55e954fc75014b9c54be562ce5938f30f1",
          "message": "Implement a new `AnnotationWhenArraySizeEqual` compiler step (#1097)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-02T17:32:34-04:00",
          "tree_id": "5ad37aff06ecc65282dc4afebff33b0f45ad3907",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/446c8a55e954fc75014b9c54be562ce5938f30f1"
        },
        "date": 1725313116153,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 384167.9646409036,
            "unit": "ns/iter",
            "extra": "iterations: 1810\ncpu: 384156.03480662976 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16835.97709303747,
            "unit": "ns/iter",
            "extra": "iterations: 41865\ncpu: 16835.268601457065 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7743.500701434632,
            "unit": "ns/iter",
            "extra": "iterations: 89816\ncpu: 7743.312305157207 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1560.3980533702218,
            "unit": "ns/iter",
            "extra": "iterations: 447440\ncpu: 1560.357417754335 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 106137.31248114795,
            "unit": "ns/iter",
            "extra": "iterations: 6634\ncpu: 106133.33629785953 ns\nthreads: 1"
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
          "id": "b29de65eba42300f53c975cbbdb763d426492661",
          "message": "Implement a new `AnnotationWhenArraySizeGreater` compiler step (#1098)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-02T18:06:21-04:00",
          "tree_id": "d9e44f448ba0bb2229aa748df4139c19781a4002",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/b29de65eba42300f53c975cbbdb763d426492661"
        },
        "date": 1725315178000,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 391864.60775620455,
            "unit": "ns/iter",
            "extra": "iterations: 1805\ncpu: 391816.7180055401 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16650.35405617414,
            "unit": "ns/iter",
            "extra": "iterations: 42047\ncpu: 16648.210787927794 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8208.450116630971,
            "unit": "ns/iter",
            "extra": "iterations: 85740\ncpu: 8207.324725915563 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1563.5008376216072,
            "unit": "ns/iter",
            "extra": "iterations: 448890\ncpu: 1563.2891510169518 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 109444.21641678351,
            "unit": "ns/iter",
            "extra": "iterations: 6603\ncpu: 109432.03725579279 ns\nthreads: 1"
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
          "id": "1abf1db4712909ed2c5415157df0b1f7d27c577a",
          "message": "Compile out assertions that would never run anyway (#1099)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-02T18:22:53-04:00",
          "tree_id": "3aa397e3521f15c80e37921cc72d3b234e00ae62",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/1abf1db4712909ed2c5415157df0b1f7d27c577a"
        },
        "date": 1725316140087,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 390770.88024619897,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 390748.53217683267 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16712.404949005475,
            "unit": "ns/iter",
            "extra": "iterations: 41867\ncpu: 16710.45916831873 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8153.480031776332,
            "unit": "ns/iter",
            "extra": "iterations: 88115\ncpu: 8153.026397321683 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1565.3725641636925,
            "unit": "ns/iter",
            "extra": "iterations: 449281\ncpu: 1565.3322775723873 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 106439.87255347312,
            "unit": "ns/iter",
            "extra": "iterations: 6591\ncpu: 106434.41617356999 ns\nthreads: 1"
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
          "id": "2917e0c2c178d6d94b236e62faa57d77ed4a02c1",
          "message": "Remove the idea of explicit conditions from the compiler (#1100)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-02T20:10:49-04:00",
          "tree_id": "baef02c432d27b410580488a4224bf53c287a0cc",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/2917e0c2c178d6d94b236e62faa57d77ed4a02c1"
        },
        "date": 1725322638704,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 386107.70388888544,
            "unit": "ns/iter",
            "extra": "iterations: 1800\ncpu: 386099.1072222222 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18873.597333190737,
            "unit": "ns/iter",
            "extra": "iterations: 37423\ncpu: 18872.67375678059 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8083.825567421225,
            "unit": "ns/iter",
            "extra": "iterations: 87369\ncpu: 8083.355938605228 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1701.0656826638995,
            "unit": "ns/iter",
            "extra": "iterations: 410839\ncpu: 1700.8906408593139 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 114870.9017303271,
            "unit": "ns/iter",
            "extra": "iterations: 6126\ncpu: 114635.22755468491 ns\nthreads: 1"
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
          "id": "b4a860937a694687b2bd77fa2e2161092bf16b3d",
          "message": "Improve Doxygen layout for documenting compiler instructions (#1102)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T10:41:31-04:00",
          "tree_id": "ea57bd62bc8a7f82ba5ddca8447c92dc1e82f63d",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/b4a860937a694687b2bd77fa2e2161092bf16b3d"
        },
        "date": 1725374864852,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 388825.1250691698,
            "unit": "ns/iter",
            "extra": "iterations: 1807\ncpu: 388790.2739346985 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 19055.984397933313,
            "unit": "ns/iter",
            "extra": "iterations: 36790\ncpu: 19055.017368850225 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8060.96650071023,
            "unit": "ns/iter",
            "extra": "iterations: 86569\ncpu: 8060.223983181045 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1721.4452199677235,
            "unit": "ns/iter",
            "extra": "iterations: 407037\ncpu: 1721.332495571655 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 115839.10004961565,
            "unit": "ns/iter",
            "extra": "iterations: 6047\ncpu: 115832.5950057881 ns\nthreads: 1"
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
          "id": "d8cc64966b984fefeb56cd27b201182836dcfd95",
          "message": "Improve how detailed description is shown on Doxygen (#1103)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T11:28:48-04:00",
          "tree_id": "5fbb9bf3a809493fc4332889872901dad76070c1",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/d8cc64966b984fefeb56cd27b201182836dcfd95"
        },
        "date": 1725377707268,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 386596.845257894,
            "unit": "ns/iter",
            "extra": "iterations: 1803\ncpu: 386584.62950637826 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18695.762025250653,
            "unit": "ns/iter",
            "extra": "iterations: 37546\ncpu: 18695.621957065996 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8209.682737378636,
            "unit": "ns/iter",
            "extra": "iterations: 82137\ncpu: 8209.330362686735 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1715.6960758435935,
            "unit": "ns/iter",
            "extra": "iterations: 409158\ncpu: 1715.6673314465304 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 115250.2659783608,
            "unit": "ns/iter",
            "extra": "iterations: 6102\ncpu: 115247.28892166502 ns\nthreads: 1"
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
          "id": "2adf4c37a7d33d62bb5edfced461f7262eac1104",
          "message": "Revise Pointer Token templates to only configure property type (#1104)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-03T12:07:57-04:00",
          "tree_id": "0bc821d1b36bb8f3c7751efce3586005ba1d2543",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/2adf4c37a7d33d62bb5edfced461f7262eac1104"
        },
        "date": 1725380055567,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 392996.9462365607,
            "unit": "ns/iter",
            "extra": "iterations: 1767\ncpu: 392992.13921901525 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 19052.17186606067,
            "unit": "ns/iter",
            "extra": "iterations: 36703\ncpu: 19051.675830313598 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7947.861960677063,
            "unit": "ns/iter",
            "extra": "iterations: 87888\ncpu: 7947.765303568178 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1731.3651633152906,
            "unit": "ns/iter",
            "extra": "iterations: 403299\ncpu: 1731.3198049090126 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 115846.76718699002,
            "unit": "ns/iter",
            "extra": "iterations: 6022\ncpu: 115843.85951511118 ns\nthreads: 1"
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
          "id": "755c55dcf9b578c1580647d979a6ca409bf90f05",
          "message": "Improve template arguments of Pointer walker classes/iterators (#1105)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-03T12:28:45-04:00",
          "tree_id": "990f0c1cdf847a531f97f8bd1dbccec49e26ae79",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/755c55dcf9b578c1580647d979a6ca409bf90f05"
        },
        "date": 1725381289425,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 390742.581962588,
            "unit": "ns/iter",
            "extra": "iterations: 1763\ncpu: 390725.066931367 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18500.93808296382,
            "unit": "ns/iter",
            "extra": "iterations: 37631\ncpu: 18500.73819457363 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7985.001768326347,
            "unit": "ns/iter",
            "extra": "iterations: 87088\ncpu: 7984.587210637519 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1698.4276381082504,
            "unit": "ns/iter",
            "extra": "iterations: 413118\ncpu: 1698.3955770506245 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 114155.98775111367,
            "unit": "ns/iter",
            "extra": "iterations: 6123\ncpu: 114156.00571615221 ns\nthreads: 1"
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
          "id": "bf6265f8b045d41ae5d153e617f392de1e8b3191",
          "message": "refactor: get rid of args for Pointer class (#1106)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-03T19:11:38+02:00",
          "tree_id": "ea00154572e3214eb7610159da021f5077df3f85",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/bf6265f8b045d41ae5d153e617f392de1e8b3191"
        },
        "date": 1725383859715,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 387812.3147124013,
            "unit": "ns/iter",
            "extra": "iterations: 1808\ncpu: 387807.3777654867 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18975.394437798986,
            "unit": "ns/iter",
            "extra": "iterations: 36784\ncpu: 18974.915153327536 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8090.416638603352,
            "unit": "ns/iter",
            "extra": "iterations: 86113\ncpu: 8090.2560821246525 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1720.464218437171,
            "unit": "ns/iter",
            "extra": "iterations: 406634\ncpu: 1720.4215018911364 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 115689.2137806263,
            "unit": "ns/iter",
            "extra": "iterations: 6081\ncpu: 115685.22167406687 ns\nthreads: 1"
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
          "id": "1f796e4070028cc37b4183547343950d829b3fe2",
          "message": "Create better evaluator step begin/end macros (#1101)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T13:43:09-04:00",
          "tree_id": "a6a481dbc699451ea49155766f262b80172c4729",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/1f796e4070028cc37b4183547343950d829b3fe2"
        },
        "date": 1725385757496,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 391052.87674286007,
            "unit": "ns/iter",
            "extra": "iterations: 1793\ncpu: 391019.55326268816 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18178.13584368622,
            "unit": "ns/iter",
            "extra": "iterations: 38640\ncpu: 18177.198059006212 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8210.1788230574,
            "unit": "ns/iter",
            "extra": "iterations: 84592\ncpu: 8210.058989029692 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1721.3905031838976,
            "unit": "ns/iter",
            "extra": "iterations: 407505\ncpu: 1721.3523613207208 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 117157.87929013872,
            "unit": "ns/iter",
            "extra": "iterations: 5973\ncpu: 117150.80981081529 ns\nthreads: 1"
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
          "id": "c16086f105c91186254cbf273fd45d634e584cc6",
          "message": "Jump control compiler steps are not applicators (#1107)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T13:54:57-04:00",
          "tree_id": "187d692f91e2b6f9a433802e6b4b43963aeae422",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/c16086f105c91186254cbf273fd45d634e584cc6"
        },
        "date": 1725386482583,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 386716.27429204294,
            "unit": "ns/iter",
            "extra": "iterations: 1801\ncpu: 386703.4758467518 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18321.8635934547,
            "unit": "ns/iter",
            "extra": "iterations: 38136\ncpu: 18320.776798825256 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8143.512102690067,
            "unit": "ns/iter",
            "extra": "iterations: 86551\ncpu: 8142.890746496286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1715.7981607055033,
            "unit": "ns/iter",
            "extra": "iterations: 407765\ncpu: 1715.6801834389896 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 116772.92102207657,
            "unit": "ns/iter",
            "extra": "iterations: 6027\ncpu: 116761.42044134717 ns\nthreads: 1"
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
          "id": "26b27ba164f4b11f49e46ae9dae8d82a01d21142",
          "message": "Simplify annotation-related types in `EvaluationContext` (#1109)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T14:42:54-04:00",
          "tree_id": "9bff3c22ed27b8882affef4f9d7fbe09dea57ae7",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/26b27ba164f4b11f49e46ae9dae8d82a01d21142"
        },
        "date": 1725389340209,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 386577.4552661764,
            "unit": "ns/iter",
            "extra": "iterations: 1766\ncpu: 386564.44337485835 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18980.28374381507,
            "unit": "ns/iter",
            "extra": "iterations: 37192\ncpu: 18979.142288664236 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8214.014241231405,
            "unit": "ns/iter",
            "extra": "iterations: 85105\ncpu: 8213.433946301628 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1742.0901670710343,
            "unit": "ns/iter",
            "extra": "iterations: 402464\ncpu: 1741.9966605708828 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 117542.15373110354,
            "unit": "ns/iter",
            "extra": "iterations: 6017\ncpu: 117531.97241150081 ns\nthreads: 1"
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
          "id": "91bf076ac0e6fc2ca67b1d0c8ccbbb4aaa6ff0dd",
          "message": "Get rid of `EvaluationContext::push` overload (#1110)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T14:42:44-04:00",
          "tree_id": "a5415ae4e165077c8d7fbbc465c78afb6e67ac22",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/91bf076ac0e6fc2ca67b1d0c8ccbbb4aaa6ff0dd"
        },
        "date": 1725389352132,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 387469.5448467772,
            "unit": "ns/iter",
            "extra": "iterations: 1795\ncpu: 387468.2094707521 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18878.53281771015,
            "unit": "ns/iter",
            "extra": "iterations: 37495\ncpu: 18878.19458594479 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8170.8244036845035,
            "unit": "ns/iter",
            "extra": "iterations: 85651\ncpu: 8170.702502013985 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1758.7113554561815,
            "unit": "ns/iter",
            "extra": "iterations: 394797\ncpu: 1758.6445540366326 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 115530.77964426656,
            "unit": "ns/iter",
            "extra": "iterations: 6072\ncpu: 115530.89311594203 ns\nthreads: 1"
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
          "id": "7a10acc7890531361d0cfaecc49ae5f75e1e2dc7",
          "message": "Attempt to improve Pointer's `push_back` for zero or one tokens (#1111)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T19:07:10Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/7a10acc7890531361d0cfaecc49ae5f75e1e2dc7"
        },
        "date": 1725390526447,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 386546.79731244687,
            "unit": "ns/iter",
            "extra": "iterations: 1786\ncpu: 386510.82866741315 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 19009.61711492533,
            "unit": "ns/iter",
            "extra": "iterations: 37032\ncpu: 19008.75380751782 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8075.4617331392665,
            "unit": "ns/iter",
            "extra": "iterations: 86929\ncpu: 8074.764819565394 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1758.0364475231172,
            "unit": "ns/iter",
            "extra": "iterations: 399890\ncpu: 1757.9570481882506 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 117794.88388506763,
            "unit": "ns/iter",
            "extra": "iterations: 5951\ncpu: 117787.08317929768 ns\nthreads: 1"
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
          "id": "7a10acc7890531361d0cfaecc49ae5f75e1e2dc7",
          "message": "Attempt to improve Pointer's `push_back` for zero or one tokens (#1111)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T15:07:10-04:00",
          "tree_id": "0f40eed3f853c7a4a8f9f35245435d73e32977e6",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/7a10acc7890531361d0cfaecc49ae5f75e1e2dc7"
        },
        "date": 1725390877579,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 394829.28539328394,
            "unit": "ns/iter",
            "extra": "iterations: 1780\ncpu: 394812.60561797745 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18290.743187727796,
            "unit": "ns/iter",
            "extra": "iterations: 38460\ncpu: 18289.88783151327 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8190.13696931376,
            "unit": "ns/iter",
            "extra": "iterations: 85479\ncpu: 8189.416488260275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1711.9010672331754,
            "unit": "ns/iter",
            "extra": "iterations: 409470\ncpu: 1711.8043128922766 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 114678.31985595278,
            "unit": "ns/iter",
            "extra": "iterations: 6109\ncpu: 114670.27402193479 ns\nthreads: 1"
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
          "id": "265cd2e9675437cbfe8083ed9a9f906b2746825e",
          "message": "Try a vector for keeping track of annotation blacklists (#1113)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T15:29:27-04:00",
          "tree_id": "37f3564c2b82fcd32c7fa173246e107a4a51a5b5",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/265cd2e9675437cbfe8083ed9a9f906b2746825e"
        },
        "date": 1725392146756,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 394117.6388261881,
            "unit": "ns/iter",
            "extra": "iterations: 1772\ncpu: 394100.17945823923 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18136.408265447153,
            "unit": "ns/iter",
            "extra": "iterations: 38546\ncpu: 18135.097675504596 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8254.605651746373,
            "unit": "ns/iter",
            "extra": "iterations: 86345\ncpu: 8254.567120273321 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1704.7027155341505,
            "unit": "ns/iter",
            "extra": "iterations: 406513\ncpu: 1704.6271681348453 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 114540.35470085249,
            "unit": "ns/iter",
            "extra": "iterations: 6084\ncpu: 114534.91995397772 ns\nthreads: 1"
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
          "id": "f2f47da81e81789141638425c48af75790cc9c7b",
          "message": "Prefer vector over sets when configuring compiler steps (#1112)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T15:42:08-04:00",
          "tree_id": "b1365e9e14a6bc23e52f322983c62640fd19e33d",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/f2f47da81e81789141638425c48af75790cc9c7b"
        },
        "date": 1725392902688,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 385853.96885427047,
            "unit": "ns/iter",
            "extra": "iterations: 1798\ncpu: 385837.3470522803 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18936.42320489474,
            "unit": "ns/iter",
            "extra": "iterations: 37268\ncpu: 18935.624718256942 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7926.471601521701,
            "unit": "ns/iter",
            "extra": "iterations: 86730\ncpu: 7926.160313616973 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1717.9696678018952,
            "unit": "ns/iter",
            "extra": "iterations: 407257\ncpu: 1717.9412680445039 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 113641.20323623887,
            "unit": "ns/iter",
            "extra": "iterations: 6180\ncpu: 113635.41990291265 ns\nthreads: 1"
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
          "id": "5d1fd1bead736cf4f2593f533571ebe0577eb562",
          "message": "Use `.find()` instead of `.at()` to access JSON object values (#1117)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T16:58:01-04:00",
          "tree_id": "285e3f745bf44c8dc650e9fc98641eaf181c17c4",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/5d1fd1bead736cf4f2593f533571ebe0577eb562"
        },
        "date": 1725397516289,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 385352.5008301204,
            "unit": "ns/iter",
            "extra": "iterations: 1807\ncpu: 385343.5860542336 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18916.621318829657,
            "unit": "ns/iter",
            "extra": "iterations: 36775\ncpu: 18916.271624745073 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7986.529536149883,
            "unit": "ns/iter",
            "extra": "iterations: 88908\ncpu: 7986.326731002833 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1737.027844229996,
            "unit": "ns/iter",
            "extra": "iterations: 400873\ncpu: 1736.9974031675865 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 116494.7008988008,
            "unit": "ns/iter",
            "extra": "iterations: 6008\ncpu: 116489.91111850864 ns\nthreads: 1"
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
          "id": "9ff9e4c357a500647430619119dce79528943147",
          "message": "Add a schema benchmark case of highly nested objects (#1118)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T17:05:52-04:00",
          "tree_id": "30768d1c5b31be197a85dc8a7e0d436c8a12d408",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9ff9e4c357a500647430619119dce79528943147"
        },
        "date": 1725397926431,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 390400.3124999912,
            "unit": "ns/iter",
            "extra": "iterations: 1792\ncpu: 390369.1517857142 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18534.837420311396,
            "unit": "ns/iter",
            "extra": "iterations: 37803\ncpu: 18533.83673253446 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8026.378493090253,
            "unit": "ns/iter",
            "extra": "iterations: 88353\ncpu: 8026.172693626703 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1699.8544727146887,
            "unit": "ns/iter",
            "extra": "iterations: 410679\ncpu: 1699.8318467708357 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 113351.61845305933,
            "unit": "ns/iter",
            "extra": "iterations: 6167\ncpu: 113342.04345711047 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 57847.992193277525,
            "unit": "ns/iter",
            "extra": "iterations: 12169\ncpu: 57844.14200016432 ns\nthreads: 1"
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
          "id": "100f80091b1096d8ccd8bb4eb46dd2ac10dd9f86",
          "message": "Add helpers to query a document using a single Pointer token (#1119)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T18:49:47-04:00",
          "tree_id": "a4f5b4f1ae35270d3ea22bf63f5c399b4d5eb975",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/100f80091b1096d8ccd8bb4eb46dd2ac10dd9f86"
        },
        "date": 1725404498091,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 392755.5706150269,
            "unit": "ns/iter",
            "extra": "iterations: 1756\ncpu: 392749.6919134397 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18505.237985006952,
            "unit": "ns/iter",
            "extra": "iterations: 38015\ncpu: 18488.721557280027 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8026.92325071907,
            "unit": "ns/iter",
            "extra": "iterations: 87193\ncpu: 8026.377289461313 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1693.2734273344367,
            "unit": "ns/iter",
            "extra": "iterations: 413470\ncpu: 1693.243812126636 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 114028.04270174386,
            "unit": "ns/iter",
            "extra": "iterations: 6159\ncpu: 114025.25004059103 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 57334.1509092435,
            "unit": "ns/iter",
            "extra": "iterations: 12153\ncpu: 57332.41693409033 ns\nthreads: 1"
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
          "id": "a8d4e391b3ab3cf556ca1c5cf143e51cd354e5cc",
          "message": "Keep a reference to the instance on the `EvaluationContext` (#1122)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T19:20:34-04:00",
          "tree_id": "a16ed93258a2dd6fd91e12d9a73a572e92a88907",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/a8d4e391b3ab3cf556ca1c5cf143e51cd354e5cc"
        },
        "date": 1725407375627,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 397277.03828566516,
            "unit": "ns/iter",
            "extra": "iterations: 1750\ncpu: 397254.49028571433 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18555.084483579492,
            "unit": "ns/iter",
            "extra": "iterations: 37818\ncpu: 18553.511740441063 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8195.881886902747,
            "unit": "ns/iter",
            "extra": "iterations: 85325\ncpu: 8195.482109581017 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1725.8505920259645,
            "unit": "ns/iter",
            "extra": "iterations: 405641\ncpu: 1725.8020491025316 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 112982.55210178696,
            "unit": "ns/iter",
            "extra": "iterations: 6209\ncpu: 112973.17007569654 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 55966.359417508116,
            "unit": "ns/iter",
            "extra": "iterations: 12498\ncpu: 55963.378060489704 ns\nthreads: 1"
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
          "id": "5bd9a62d3ad0c79ab2214212cf34faf0ba4ececc",
          "message": "Add helpers to directly push properties and indexes to pointers (#1121)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T19:21:40-04:00",
          "tree_id": "f49e141ca47db6ad5b7c8e5d551600c4d5c17794",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/5bd9a62d3ad0c79ab2214212cf34faf0ba4ececc"
        },
        "date": 1725407743774,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 398228.9831744009,
            "unit": "ns/iter",
            "extra": "iterations: 1783\ncpu: 398214.6141334828 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18714.885596159664,
            "unit": "ns/iter",
            "extra": "iterations: 37490\ncpu: 18714.501253667648 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8209.492385131854,
            "unit": "ns/iter",
            "extra": "iterations: 85228\ncpu: 8209.031996526961 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1776.8239022999803,
            "unit": "ns/iter",
            "extra": "iterations: 392958\ncpu: 1776.775263514166 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 115408.03143737523,
            "unit": "ns/iter",
            "extra": "iterations: 6171\ncpu: 115404.66780100473 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 57268.41259881272,
            "unit": "ns/iter",
            "extra": "iterations: 12271\ncpu: 57268.51780620976 ns\nthreads: 1"
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
          "id": "57f1785804c803ace8019e5731150f3c8a936150",
          "message": "Keep a vector of instances in `EvaluationContext` (#1123)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T19:39:50-04:00",
          "tree_id": "e7ff6bd86142643a249a9131727eb112c8bf305c",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/57f1785804c803ace8019e5731150f3c8a936150"
        },
        "date": 1725408920658,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 405432.70097756514,
            "unit": "ns/iter",
            "extra": "iterations: 1739\ncpu: 405404.4071305349 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17926.972860660415,
            "unit": "ns/iter",
            "extra": "iterations: 38984\ncpu: 17925.93599938436 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7963.70465320854,
            "unit": "ns/iter",
            "extra": "iterations: 87531\ncpu: 7963.139379191371 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1674.935764844322,
            "unit": "ns/iter",
            "extra": "iterations: 417902\ncpu: 1674.8302831764381 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 107976.40670666631,
            "unit": "ns/iter",
            "extra": "iterations: 6501\ncpu: 107967.82710352246 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 54239.535073536674,
            "unit": "ns/iter",
            "extra": "iterations: 12987\ncpu: 54234.6279356279 ns\nthreads: 1"
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
          "id": "f9f830bcdc283ecfc9e58c7e28c210fa866477ce",
          "message": "Create specialized methods for traversing instances during loops (#1120)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T20:25:35-04:00",
          "tree_id": "84b093e7c08683d705b1809a3413143297803964",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/f9f830bcdc283ecfc9e58c7e28c210fa866477ce"
        },
        "date": 1725409917233,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 389349.39283715433,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 389327.27140458865 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18764.62690722146,
            "unit": "ns/iter",
            "extra": "iterations: 37358\ncpu: 18764.38462979817 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8631.655006833236,
            "unit": "ns/iter",
            "extra": "iterations: 81219\ncpu: 8631.275514350089 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1817.8270811459734,
            "unit": "ns/iter",
            "extra": "iterations: 383839\ncpu: 1817.790654415002 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 109302.21934072372,
            "unit": "ns/iter",
            "extra": "iterations: 6401\ncpu: 109292.09639118885 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 54977.86791712737,
            "unit": "ns/iter",
            "extra": "iterations: 12742\ncpu: 54976.95094961546 ns\nthreads: 1"
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
          "id": "7c1edc9c7e922e4d6684f8439f094e52dc22ec3a",
          "message": "Upgrade `actions/checkout` due to deprecation warning (#1125)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T20:29:27-04:00",
          "tree_id": "3d4f19543f1aa625152bda8848b2d2fccd472f54",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/7c1edc9c7e922e4d6684f8439f094e52dc22ec3a"
        },
        "date": 1725410142391,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 390589.46724635724,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 390559.52057971014 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18665.68235038304,
            "unit": "ns/iter",
            "extra": "iterations: 36811\ncpu: 18664.624840400968 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8513.703005002128,
            "unit": "ns/iter",
            "extra": "iterations: 82163\ncpu: 8513.28428854837 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1801.6465244762614,
            "unit": "ns/iter",
            "extra": "iterations: 389150\ncpu: 1801.6173326480791 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 108295.4416511519,
            "unit": "ns/iter",
            "extra": "iterations: 6444\ncpu: 108286.99208566111 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 54758.06811925139,
            "unit": "ns/iter",
            "extra": "iterations: 12713\ncpu: 54755.76268386691 ns\nthreads: 1"
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
          "id": "eba0d998c1850bc3f3d79cf0645d6caa0315f378",
          "message": "Assert that annotation steps have no relative instance location (#1124)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T20:29:37-04:00",
          "tree_id": "4f0bd5e0e78ffc64a8f5986bb7b59cf95aa4809b",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/eba0d998c1850bc3f3d79cf0645d6caa0315f378"
        },
        "date": 1725410353319,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 387343.67454952275,
            "unit": "ns/iter",
            "extra": "iterations: 1776\ncpu: 387317.2725225224 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 19148.697343686126,
            "unit": "ns/iter",
            "extra": "iterations: 36705\ncpu: 19147.388775371197 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8626.239571582579,
            "unit": "ns/iter",
            "extra": "iterations: 80669\ncpu: 8625.371133892822 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1782.8645130984212,
            "unit": "ns/iter",
            "extra": "iterations: 355503\ncpu: 1782.8162687797287 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 107759.34838909084,
            "unit": "ns/iter",
            "extra": "iterations: 6487\ncpu: 107752.62956682598 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 53652.03575314826,
            "unit": "ns/iter",
            "extra": "iterations: 12866\ncpu: 53649.124591947766 ns\nthreads: 1"
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
          "id": "72f4ce2169a8d9704d82a8ff0833ffcac616649e",
          "message": "Support JSONL input in the benchmark validate helper (#1126)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T21:00:10-04:00",
          "tree_id": "167fc95887a5de53a9fbcfbd1f97cc1f80a34333",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/72f4ce2169a8d9704d82a8ff0833ffcac616649e"
        },
        "date": 1725411988132,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 400905.56719952833,
            "unit": "ns/iter",
            "extra": "iterations: 1689\ncpu: 400904.60864416824 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18671.336963757443,
            "unit": "ns/iter",
            "extra": "iterations: 37553\ncpu: 18670.770963704636 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8463.498521334908,
            "unit": "ns/iter",
            "extra": "iterations: 82845\ncpu: 8463.139151427364 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1790.5043695699958,
            "unit": "ns/iter",
            "extra": "iterations: 391915\ncpu: 1790.4385338657617 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 109760.63152156996,
            "unit": "ns/iter",
            "extra": "iterations: 6421\ncpu: 109754.31615013239 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 55133.81084044961,
            "unit": "ns/iter",
            "extra": "iterations: 12767\ncpu: 55131.62512728121 ns\nthreads: 1"
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
          "id": "79916090b5e76a8ea187ec6f84ac2802bf22b33d",
          "message": "Simplify `EvaluationContext::push` signature (#1127)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T21:00:24-04:00",
          "tree_id": "f8e8829c8149040904c257b4c61ae449e31656c3",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/79916090b5e76a8ea187ec6f84ac2802bf22b33d"
        },
        "date": 1725412031828,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 381656.1190211467,
            "unit": "ns/iter",
            "extra": "iterations: 1798\ncpu: 381635.7491657397 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18881.304452566532,
            "unit": "ns/iter",
            "extra": "iterations: 36945\ncpu: 18879.85519014752 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8527.265404102493,
            "unit": "ns/iter",
            "extra": "iterations: 82900\ncpu: 8526.739987937275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1742.4875756027047,
            "unit": "ns/iter",
            "extra": "iterations: 400945\ncpu: 1742.3705046826872 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 110179.6319037731,
            "unit": "ns/iter",
            "extra": "iterations: 6319\ncpu: 110174.92261433767 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 56565.79682743404,
            "unit": "ns/iter",
            "extra": "iterations: 12482\ncpu: 56563.437429899066 ns\nthreads: 1"
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
          "id": "9ba2381f6ae0cf6bb93f7b39f5f66b51d0129085",
          "message": "Keep a stack of instance references in the evaluator (#1115)\n\nTo avoid continuous pointer traversal.\r\n\r\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T21:28:13-04:00",
          "tree_id": "382b55c1e98f91e72058c90daa02bf47755f065e",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9ba2381f6ae0cf6bb93f7b39f5f66b51d0129085"
        },
        "date": 1725413675538,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 392407.0932203444,
            "unit": "ns/iter",
            "extra": "iterations: 1770\ncpu: 392390.5977401129 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17781.536305830068,
            "unit": "ns/iter",
            "extra": "iterations: 39002\ncpu: 17781.039818470857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8083.964883840119,
            "unit": "ns/iter",
            "extra": "iterations: 85744\ncpu: 8083.943238010825 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1706.912197418554,
            "unit": "ns/iter",
            "extra": "iterations: 409931\ncpu: 1706.882541208153 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 104863.46959662759,
            "unit": "ns/iter",
            "extra": "iterations: 6644\ncpu: 104859.92820590005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50750.82141579089,
            "unit": "ns/iter",
            "extra": "iterations: 13971\ncpu: 50749.926562164525 ns\nthreads: 1"
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
          "id": "b27ac8c0aebcae87061ca8df872fd68a50e09dee",
          "message": "Refactor how we get the next instance stack entry (#1128)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T21:43:49-04:00",
          "tree_id": "642cbac0f02e61050e380d40ce377f3c26f5f654",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/b27ac8c0aebcae87061ca8df872fd68a50e09dee"
        },
        "date": 1725414595424,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 388227.64006791374,
            "unit": "ns/iter",
            "extra": "iterations: 1767\ncpu: 388210.3621958121 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17962.84274369566,
            "unit": "ns/iter",
            "extra": "iterations: 38911\ncpu: 17962.526355015296 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8199.880016504858,
            "unit": "ns/iter",
            "extra": "iterations: 84820\ncpu: 8199.820007073804 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1739.676013750205,
            "unit": "ns/iter",
            "extra": "iterations: 401159\ncpu: 1739.6292467575201 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 106399.25126553663,
            "unit": "ns/iter",
            "extra": "iterations: 6519\ncpu: 106399.44638748275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50314.43011689709,
            "unit": "ns/iter",
            "extra": "iterations: 13773\ncpu: 50314.008131852184 ns\nthreads: 1"
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
          "id": "da2b68ab374b1916223352c7040275670564d1ce",
          "message": "Don't bother with `frame_sizes` in `enter`/`leave` (#1129)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T21:55:32-04:00",
          "tree_id": "0349a354d78f7f783652a9cc19dce4c9e54b268c",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/da2b68ab374b1916223352c7040275670564d1ce"
        },
        "date": 1725415768219,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 392454.73357446183,
            "unit": "ns/iter",
            "extra": "iterations: 1659\ncpu: 392446.55153707054 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18074.947943658863,
            "unit": "ns/iter",
            "extra": "iterations: 38977\ncpu: 18074.727377684274 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8177.426830926828,
            "unit": "ns/iter",
            "extra": "iterations: 88234\ncpu: 8177.453804655803 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1744.3148102059417,
            "unit": "ns/iter",
            "extra": "iterations: 401804\ncpu: 1744.2908457855087 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 108415.07643704677,
            "unit": "ns/iter",
            "extra": "iterations: 6489\ncpu: 108409.2783171521 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50825.84074290673,
            "unit": "ns/iter",
            "extra": "iterations: 13676\ncpu: 50824.03794969287 ns\nthreads: 1"
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
          "id": "e9ae2b7f0edcbbe305aeb576e11be098d7abbf31",
          "message": "Use a vector to present frame sizes (#1133)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T22:26:31-04:00",
          "tree_id": "20bf8d54ffb85e24c3070ca56d296e60d68f0e0a",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/e9ae2b7f0edcbbe305aeb576e11be098d7abbf31"
        },
        "date": 1725417157874,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 395662.53511315834,
            "unit": "ns/iter",
            "extra": "iterations: 1723\ncpu: 395650.5589088798 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18290.568325649612,
            "unit": "ns/iter",
            "extra": "iterations: 38397\ncpu: 18290.380550563845 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8305.592357594109,
            "unit": "ns/iter",
            "extra": "iterations: 84319\ncpu: 8305.391750376548 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1777.3339115814476,
            "unit": "ns/iter",
            "extra": "iterations: 393718\ncpu: 1777.3052743334056 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 105235.19137101636,
            "unit": "ns/iter",
            "extra": "iterations: 6652\ncpu: 105232.79885748638 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 51466.29532120916,
            "unit": "ns/iter",
            "extra": "iterations: 13636\ncpu: 51465.11674977999 ns\nthreads: 1"
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
          "id": "178f6d9852d917fa065036ad2e0b7184b6412a6e",
          "message": "Optimize how to get null values to evaluation callbacks (#1131)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T22:28:32-04:00",
          "tree_id": "d8e0657edbddc8dae8171c0d835cc313e0279578",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/178f6d9852d917fa065036ad2e0b7184b6412a6e"
        },
        "date": 1725417291625,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 385798.2451144584,
            "unit": "ns/iter",
            "extra": "iterations: 1791\ncpu: 385784.2529313232 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18051.764357303044,
            "unit": "ns/iter",
            "extra": "iterations: 38813\ncpu: 18051.280524566515 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7722.784224514568,
            "unit": "ns/iter",
            "extra": "iterations: 91433\ncpu: 7722.570231754404 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1730.1877478544588,
            "unit": "ns/iter",
            "extra": "iterations: 405480\ncpu: 1730.1090140080898 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 105293.23645098627,
            "unit": "ns/iter",
            "extra": "iterations: 6661\ncpu: 105290.23134664468 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50518.75112075065,
            "unit": "ns/iter",
            "extra": "iterations: 13830\ncpu: 50518.0410701374 ns\nthreads: 1"
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
          "id": "e4d35ddf4720ae1c848b36cbf76c371c4ebcede3",
          "message": "Set `noexcept` in a few `EvaluationContext` methods (#1132)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-04T09:52:46-04:00",
          "tree_id": "269539b314c442161daa9d2f932f664494c97c36",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/e4d35ddf4720ae1c848b36cbf76c371c4ebcede3"
        },
        "date": 1725458336760,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 414084.42469547497,
            "unit": "ns/iter",
            "extra": "iterations: 1806\ncpu: 414071.81284606864 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18287.515604817312,
            "unit": "ns/iter",
            "extra": "iterations: 38706\ncpu: 18286.621144008684 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7707.671059887609,
            "unit": "ns/iter",
            "extra": "iterations: 90670\ncpu: 7707.15784713797 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1723.7423199063091,
            "unit": "ns/iter",
            "extra": "iterations: 379455\ncpu: 1723.7131095913876 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 106505.58305547253,
            "unit": "ns/iter",
            "extra": "iterations: 6598\ncpu: 106499.1288269172 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50756.269155207156,
            "unit": "ns/iter",
            "extra": "iterations: 13743\ncpu: 50754.30495524993 ns\nthreads: 1"
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
          "id": "9ea09ca457ccd56f87962d4bf475b5db72d0d8f4",
          "message": "More benchmarks for `properties`/`patternProperties`/`additionalProperties` (#1135)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-04T11:06:44-04:00",
          "tree_id": "f598781cbfed963fd6e03d176b0efb77788bdd7d",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9ea09ca457ccd56f87962d4bf475b5db72d0d8f4"
        },
        "date": 1725462808763,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 389870.8572225437,
            "unit": "ns/iter",
            "extra": "iterations: 1793\ncpu: 389862.29280535417 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18971.91956580455,
            "unit": "ns/iter",
            "extra": "iterations: 36850\ncpu: 18970.776743554958 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7914.546779464532,
            "unit": "ns/iter",
            "extra": "iterations: 87827\ncpu: 7914.215935873935 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1811.3960309247598,
            "unit": "ns/iter",
            "extra": "iterations: 385581\ncpu: 1811.2440239534628 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 111346.46201427274,
            "unit": "ns/iter",
            "extra": "iterations: 6305\ncpu: 111340.26994448855 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 52301.18871726232,
            "unit": "ns/iter",
            "extra": "iterations: 13401\ncpu: 52299.992388627776 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 18973.359369102604,
            "unit": "ns/iter",
            "extra": "iterations: 37090\ncpu: 18972.823537341606 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 18291.176511644557,
            "unit": "ns/iter",
            "extra": "iterations: 38683\ncpu: 18290.82638368275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 19251.731608039456,
            "unit": "ns/iter",
            "extra": "iterations: 36361\ncpu: 19250.868732983145 ns\nthreads: 1"
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
          "id": "f7f856a0085bc9b7057c3930fbf46b958577463a",
          "message": "Stop benchmarking the compiler for now (#1134)\n\nWe don't really look at this number. At least right now, we are only\r\ninterested in the evaluator's performance.\r\n\r\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-04T11:06:55-04:00",
          "tree_id": "827470b288a1b0450009758af0ac830656b689bf",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/f7f856a0085bc9b7057c3930fbf46b958577463a"
        },
        "date": 1725463157639,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18314.501212928,
            "unit": "ns/iter",
            "extra": "iterations: 38337\ncpu: 18313.63789550565 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8231.504774559718,
            "unit": "ns/iter",
            "extra": "iterations: 88804\ncpu: 8231.082755281297 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1768.1094650122527,
            "unit": "ns/iter",
            "extra": "iterations: 395953\ncpu: 1767.9196899632016 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 107136.49379690627,
            "unit": "ns/iter",
            "extra": "iterations: 6529\ncpu: 107130.00597334963 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50523.38294787194,
            "unit": "ns/iter",
            "extra": "iterations: 13793\ncpu: 50521.72609294566 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 18542.799618320536,
            "unit": "ns/iter",
            "extra": "iterations: 37728\ncpu: 18542.073632315525 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 17625.4902236037,
            "unit": "ns/iter",
            "extra": "iterations: 39892\ncpu: 17625.357515291278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 18681.224511061675,
            "unit": "ns/iter",
            "extra": "iterations: 37428\ncpu: 18680.099177086668 ns\nthreads: 1"
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
          "id": "dfd7fa5081d640579331166ccab727b3c06aab3f",
          "message": "Only check `required` when it intersects with `properties` (#1136)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-04T11:07:15-04:00",
          "tree_id": "5d39f90f6d4545a9b86f073f1b4b46a32eb64e54",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/dfd7fa5081d640579331166ccab727b3c06aab3f"
        },
        "date": 1725463341464,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18233.52805902073,
            "unit": "ns/iter",
            "extra": "iterations: 38223\ncpu: 18233.018496716635 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8049.13044031698,
            "unit": "ns/iter",
            "extra": "iterations: 86415\ncpu: 8049.079523230919 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1762.656092600281,
            "unit": "ns/iter",
            "extra": "iterations: 396284\ncpu: 1762.6192528590607 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 110078.81311939756,
            "unit": "ns/iter",
            "extra": "iterations: 6357\ncpu: 110075.82019820673 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50325.46092962935,
            "unit": "ns/iter",
            "extra": "iterations: 13898\ncpu: 50325.0622391711 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 18604.17777069484,
            "unit": "ns/iter",
            "extra": "iterations: 37644\ncpu: 18604.028450749138 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 17667.74131826697,
            "unit": "ns/iter",
            "extra": "iterations: 39825\ncpu: 17667.555580665405 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 18823.262152545485,
            "unit": "ns/iter",
            "extra": "iterations: 37379\ncpu: 18822.88921586987 ns\nthreads: 1"
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
          "id": "a2146dc481501479484ba3ba8e8c2b8d1d811ac2",
          "message": "refactor(jsonpointer): clean write_character from templating (#1139)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-04T19:25:13+02:00",
          "tree_id": "b4ac8d762660b6b69bd8b7667b01dd156ee0eb70",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/a2146dc481501479484ba3ba8e8c2b8d1d811ac2"
        },
        "date": 1725471096322,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18864.11462471274,
            "unit": "ns/iter",
            "extra": "iterations: 38264\ncpu: 18863.9228779009 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8075.042914903851,
            "unit": "ns/iter",
            "extra": "iterations: 85821\ncpu: 8075.018142412695 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1778.9732990416474,
            "unit": "ns/iter",
            "extra": "iterations: 395042\ncpu: 1778.887376532115 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 107345.86505876902,
            "unit": "ns/iter",
            "extra": "iterations: 6551\ncpu: 107345.86963822317 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 51251.29525012731,
            "unit": "ns/iter",
            "extra": "iterations: 13453\ncpu: 51250.325800936596 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 18421.63384981984,
            "unit": "ns/iter",
            "extra": "iterations: 37755\ncpu: 18421.348907429463 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 17761.567315769607,
            "unit": "ns/iter",
            "extra": "iterations: 39285\ncpu: 17761.522413134782 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 18683.84678022214,
            "unit": "ns/iter",
            "extra": "iterations: 37456\ncpu: 18683.337943186674 ns\nthreads: 1"
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
          "id": "d4d7e7a089710e0e8169df2285ba854eb8369e64",
          "message": "Better guard the use of `properties`/`patternProperties` annotations (#1140)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-04T13:36:10-04:00",
          "tree_id": "b550ae0e8760809654bc6b2c29be7d3a235fbf13",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/d4d7e7a089710e0e8169df2285ba854eb8369e64"
        },
        "date": 1725471772498,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18274.341360956176,
            "unit": "ns/iter",
            "extra": "iterations: 38326\ncpu: 18274.11068204352 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8105.771292264712,
            "unit": "ns/iter",
            "extra": "iterations: 86569\ncpu: 8105.584377779576 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1809.77728268393,
            "unit": "ns/iter",
            "extra": "iterations: 400373\ncpu: 1809.7313130505806 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 106787.11623645033,
            "unit": "ns/iter",
            "extra": "iterations: 6547\ncpu: 106785.66946693134 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 51558.099911448146,
            "unit": "ns/iter",
            "extra": "iterations: 13552\ncpu: 51556.02870425034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 18729.868457782708,
            "unit": "ns/iter",
            "extra": "iterations: 37258\ncpu: 18729.525578399287 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 18044.699274526338,
            "unit": "ns/iter",
            "extra": "iterations: 39009\ncpu: 18043.49421928274 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 19029.0444751594,
            "unit": "ns/iter",
            "extra": "iterations: 36897\ncpu: 19028.46773450415 ns\nthreads: 1"
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
          "id": "8d47de94eec26643c64198344769c2656cef432e",
          "message": "refactor(jsonpointer): get rid of templating for parse_pointer (#1138)\n\nSigned-off-by: Tony Gorez <gorez.tony@gmail.com>",
          "timestamp": "2024-09-04T20:11:18+02:00",
          "tree_id": "d271f7b9dddf3977a5c18a329e79381c40267e41",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/8d47de94eec26643c64198344769c2656cef432e"
        },
        "date": 1725473910420,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18572.19316821608,
            "unit": "ns/iter",
            "extra": "iterations: 37589\ncpu: 18571.97299741946 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8044.096692754333,
            "unit": "ns/iter",
            "extra": "iterations: 87142\ncpu: 8043.5219756259885 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1781.5327014458476,
            "unit": "ns/iter",
            "extra": "iterations: 392475\ncpu: 1781.4823007834893 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 106856.10668911524,
            "unit": "ns/iter",
            "extra": "iterations: 6533\ncpu: 106849.59605081889 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50992.84352400277,
            "unit": "ns/iter",
            "extra": "iterations: 13689\ncpu: 50990.28490028486 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 18668.997776307326,
            "unit": "ns/iter",
            "extra": "iterations: 37775\ncpu: 18668.122011912626 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 17737.513454565236,
            "unit": "ns/iter",
            "extra": "iterations: 39429\ncpu: 17736.65200740572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 18858.095457942767,
            "unit": "ns/iter",
            "extra": "iterations: 37472\ncpu: 18857.147390051257 ns\nthreads: 1"
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
          "id": "d75c517c706b3077fc91447a8a9035984a6e3a46",
          "message": "Implement a new `LoopPropertiesExcept` instruction (#1141)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-04T14:49:18-04:00",
          "tree_id": "83f67fc0913f98b51059410c06c706f436f5043d",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/d75c517c706b3077fc91447a8a9035984a6e3a46"
        },
        "date": 1725476145921,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18383.915589493008,
            "unit": "ns/iter",
            "extra": "iterations: 38372\ncpu: 18383.608047534657 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7595.549242914812,
            "unit": "ns/iter",
            "extra": "iterations: 92724\ncpu: 7595.368912040033 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1778.4055502907524,
            "unit": "ns/iter",
            "extra": "iterations: 393601\ncpu: 1778.3633044631486 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 105668.83976485317,
            "unit": "ns/iter",
            "extra": "iterations: 6634\ncpu: 105667.01597829367 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 51966.0161793057,
            "unit": "ns/iter",
            "extra": "iterations: 13474\ncpu: 51964.28165355502 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8534.07245458593,
            "unit": "ns/iter",
            "extra": "iterations: 82079\ncpu: 8533.563481523903 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7906.919177772272,
            "unit": "ns/iter",
            "extra": "iterations: 88540\ncpu: 7906.621786763052 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8727.603417766686,
            "unit": "ns/iter",
            "extra": "iterations: 80813\ncpu: 8727.323908282078 ns\nthreads: 1"
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
          "id": "d75c517c706b3077fc91447a8a9035984a6e3a46",
          "message": "Implement a new `LoopPropertiesExcept` instruction (#1141)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-04T18:49:18Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/d75c517c706b3077fc91447a8a9035984a6e3a46"
        },
        "date": 1725476931993,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18277.95683081129,
            "unit": "ns/iter",
            "extra": "iterations: 38685\ncpu: 18276.1728835466 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7522.286640963308,
            "unit": "ns/iter",
            "extra": "iterations: 93113\ncpu: 7521.312856421766 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1765.289336048469,
            "unit": "ns/iter",
            "extra": "iterations: 398267\ncpu: 1765.1727886066383 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 105878.51299093234,
            "unit": "ns/iter",
            "extra": "iterations: 6620\ncpu: 105872.74154078541 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 52148.422192941274,
            "unit": "ns/iter",
            "extra": "iterations: 13662\ncpu: 52144.49824330258 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8429.970858878232,
            "unit": "ns/iter",
            "extra": "iterations: 83353\ncpu: 8429.477043417748 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7775.245247886322,
            "unit": "ns/iter",
            "extra": "iterations: 90223\ncpu: 7774.970484244598 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8617.235614593405,
            "unit": "ns/iter",
            "extra": "iterations: 81680\ncpu: 8616.912659157682 ns\nthreads: 1"
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
          "id": "82df827fece0ca474898967edd7a6d390e8f5a06",
          "message": "Fix module test order on `CMakeLists.txt` (#1143)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-04T16:29:24-04:00",
          "tree_id": "9fdefcc122c2132e1d6b46b6ccb3ff088c00c778",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/82df827fece0ca474898967edd7a6d390e8f5a06"
        },
        "date": 1725482173581,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18333.544917227817,
            "unit": "ns/iter",
            "extra": "iterations: 38237\ncpu: 18332.80735936397 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7530.73091031183,
            "unit": "ns/iter",
            "extra": "iterations: 92419\ncpu: 7530.376297081771 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1795.3068728967091,
            "unit": "ns/iter",
            "extra": "iterations: 379447\ncpu: 1795.2753480723263 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 107030.1806019976,
            "unit": "ns/iter",
            "extra": "iterations: 6578\ncpu: 107028.77455153546 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 52131.0047986786,
            "unit": "ns/iter",
            "extra": "iterations: 13337\ncpu: 52128.014246082326 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8606.303263547663,
            "unit": "ns/iter",
            "extra": "iterations: 81200\ncpu: 8605.52783251232 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7987.0310930395935,
            "unit": "ns/iter",
            "extra": "iterations: 87801\ncpu: 7986.404403138912 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8744.54929912699,
            "unit": "ns/iter",
            "extra": "iterations: 79829\ncpu: 8744.27709228476 ns\nthreads: 1"
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
          "id": "2b8c2e9fe3ef2a4b0236536136f881e6f1ba645a",
          "message": "Stop supporting reverse iterators on JSON objects (#1144)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-04T16:30:52-04:00",
          "tree_id": "5d380944a3b1a729797ad6633b47295a0ef8a9bd",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/2b8c2e9fe3ef2a4b0236536136f881e6f1ba645a"
        },
        "date": 1725482991702,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18024.32384396054,
            "unit": "ns/iter",
            "extra": "iterations: 39272\ncpu: 18014.859187207167 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7548.482080962286,
            "unit": "ns/iter",
            "extra": "iterations: 93476\ncpu: 7548.442102785741 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1766.0753613629624,
            "unit": "ns/iter",
            "extra": "iterations: 397246\ncpu: 1766.052355467393 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 105079.08444778132,
            "unit": "ns/iter",
            "extra": "iterations: 6655\ncpu: 105071.16543951919 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 51041.654202877624,
            "unit": "ns/iter",
            "extra": "iterations: 13693\ncpu: 51037.70890235887 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8424.297300570526,
            "unit": "ns/iter",
            "extra": "iterations: 82573\ncpu: 8423.516355225074 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7803.487883289372,
            "unit": "ns/iter",
            "extra": "iterations: 90206\ncpu: 7803.061514755119 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8584.1142423153,
            "unit": "ns/iter",
            "extra": "iterations: 80977\ncpu: 8583.904281462635 ns\nthreads: 1"
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
          "id": "756811e52d2644ff92fe93be378bb5a1a64e0c36",
          "message": "Make schema validation object trace tests order independent (#1146)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-04T16:49:28-04:00",
          "tree_id": "dd763a9694de839a4cacec1518138f92d8f98dac",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/756811e52d2644ff92fe93be378bb5a1a64e0c36"
        },
        "date": 1725483566755,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17942.010188969467,
            "unit": "ns/iter",
            "extra": "iterations: 39160\ncpu: 17940.95380490296 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7589.602007266397,
            "unit": "ns/iter",
            "extra": "iterations: 92763\ncpu: 7589.514364563459 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1759.903430095227,
            "unit": "ns/iter",
            "extra": "iterations: 397919\ncpu: 1759.8376126799678 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 105052.58804086679,
            "unit": "ns/iter",
            "extra": "iterations: 6656\ncpu: 105049.42457932691 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50849.2071914059,
            "unit": "ns/iter",
            "extra": "iterations: 13683\ncpu: 50845.30600014616 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8587.912999228194,
            "unit": "ns/iter",
            "extra": "iterations: 81551\ncpu: 8587.360069159178 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7879.390917518317,
            "unit": "ns/iter",
            "extra": "iterations: 88456\ncpu: 7879.019862982733 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9112.96852276079,
            "unit": "ns/iter",
            "extra": "iterations: 80312\ncpu: 9112.591032473352 ns\nthreads: 1"
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
          "id": "ce9969ea33ea252618643768703ec2d688a736ff",
          "message": "Make JSON Pointer object walker tests independent of key ordering (#1147)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-04T17:05:13-04:00",
          "tree_id": "bf9e5e2f291df33665f8425fdeaf5665250a3056",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/ce9969ea33ea252618643768703ec2d688a736ff"
        },
        "date": 1725484280340,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16718.58689417768,
            "unit": "ns/iter",
            "extra": "iterations: 41844\ncpu: 16717.872096357896 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7017.503627212144,
            "unit": "ns/iter",
            "extra": "iterations: 99939\ncpu: 7017.117501676021 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1644.0436785598827,
            "unit": "ns/iter",
            "extra": "iterations: 432180\ncpu: 1643.9660303577207 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 97609.57818491544,
            "unit": "ns/iter",
            "extra": "iterations: 7041\ncpu: 97605.05993466833 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 47418.7681061789,
            "unit": "ns/iter",
            "extra": "iterations: 14843\ncpu: 47415.68692312872 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 7794.55587363452,
            "unit": "ns/iter",
            "extra": "iterations: 88727\ncpu: 7794.304157697204 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7296.785686555219,
            "unit": "ns/iter",
            "extra": "iterations: 97880\ncpu: 7296.756242337561 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 7986.58968700744,
            "unit": "ns/iter",
            "extra": "iterations: 88820\ncpu: 7986.470952488184 ns\nthreads: 1"
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
          "id": "b948b70578a9ddfd1165351640d008d98607c796",
          "message": "Use an `std::unordered_map` for compiler values (#1148)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-04T17:22:42-04:00",
          "tree_id": "26ed16010770761dec605bc365f76c81f8c30893",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/b948b70578a9ddfd1165351640d008d98607c796"
        },
        "date": 1725485343583,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17470.733127305524,
            "unit": "ns/iter",
            "extra": "iterations: 40124\ncpu: 17470.564151131493 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7997.231824218233,
            "unit": "ns/iter",
            "extra": "iterations: 82830\ncpu: 7996.920523964748 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1693.1467897022767,
            "unit": "ns/iter",
            "extra": "iterations: 412672\ncpu: 1693.0749069478913 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 104454.42686567112,
            "unit": "ns/iter",
            "extra": "iterations: 6700\ncpu: 104450.00791044769 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 49783.16055013408,
            "unit": "ns/iter",
            "extra": "iterations: 14033\ncpu: 49780.35908216342 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8440.7631129986,
            "unit": "ns/iter",
            "extra": "iterations: 82647\ncpu: 8440.175081975152 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7850.418759099093,
            "unit": "ns/iter",
            "extra": "iterations: 89290\ncpu: 7850.2367454362275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8624.212651529004,
            "unit": "ns/iter",
            "extra": "iterations: 81255\ncpu: 8624.146944803393 ns\nthreads: 1"
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
          "id": "34870fd73118ce9157ada540da2181f00ab7903d",
          "message": "Correctly compile `trace.h` on macOS on GCC (#1149)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-04T17:41:16-04:00",
          "tree_id": "233f8b74fa37c9f92061ec355508891208057681",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/34870fd73118ce9157ada540da2181f00ab7903d"
        },
        "date": 1725486458824,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17430.97962074582,
            "unit": "ns/iter",
            "extra": "iterations: 40237\ncpu: 17430.460794790863 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8217.626426894361,
            "unit": "ns/iter",
            "extra": "iterations: 86026\ncpu: 8217.51306581731 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1719.3070479901357,
            "unit": "ns/iter",
            "extra": "iterations: 408542\ncpu: 1719.252519936751 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 103564.89124629211,
            "unit": "ns/iter",
            "extra": "iterations: 6740\ncpu: 103564.34035608309 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50725.96578526236,
            "unit": "ns/iter",
            "extra": "iterations: 13766\ncpu: 50724.75192503269 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8420.598732777518,
            "unit": "ns/iter",
            "extra": "iterations: 83174\ncpu: 8420.004881333116 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7831.1618547380085,
            "unit": "ns/iter",
            "extra": "iterations: 89673\ncpu: 7830.819745073765 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8607.63041525621,
            "unit": "ns/iter",
            "extra": "iterations: 81275\ncpu: 8607.481636419558 ns\nthreads: 1"
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
          "id": "deebe06257efd48eaa7a5ca31807b8e8f2eac8d0",
          "message": "Stop supporting ordering on JSON objects (#1150)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-05T10:43:45-04:00",
          "tree_id": "1c146c55192840cfcbae52dfbc062840b56c4bee",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/deebe06257efd48eaa7a5ca31807b8e8f2eac8d0"
        },
        "date": 1725547814607,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18100.675256513296,
            "unit": "ns/iter",
            "extra": "iterations: 38107\ncpu: 18099.17319652557 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8291.475761902633,
            "unit": "ns/iter",
            "extra": "iterations: 85444\ncpu: 8290.697064744158 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1736.143739737241,
            "unit": "ns/iter",
            "extra": "iterations: 402547\ncpu: 1735.99581663756 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 104970.16959238634,
            "unit": "ns/iter",
            "extra": "iterations: 6722\ncpu: 104962.15233561436 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50555.11253858085,
            "unit": "ns/iter",
            "extra": "iterations: 13933\ncpu: 50552.650613651 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8561.158702355735,
            "unit": "ns/iter",
            "extra": "iterations: 81070\ncpu: 8560.773985444683 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7981.510660808189,
            "unit": "ns/iter",
            "extra": "iterations: 86954\ncpu: 7980.864664075256 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8746.337571719067,
            "unit": "ns/iter",
            "extra": "iterations: 79826\ncpu: 8745.540989151406 ns\nthreads: 1"
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
          "id": "bfbd2f82b3a917cfc2f58973a7f7ec36d8a28fee",
          "message": "Run tests on GCC for macOS (#1151)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-05T11:38:56-04:00",
          "tree_id": "7cf9ec53ed16b0e4fbbc2eba9a5ebbdcdd6f2739",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/bfbd2f82b3a917cfc2f58973a7f7ec36d8a28fee"
        },
        "date": 1725551154883,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18180.713244750037,
            "unit": "ns/iter",
            "extra": "iterations: 30329\ncpu: 18180.015035114906 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8376.666409968528,
            "unit": "ns/iter",
            "extra": "iterations: 85704\ncpu: 8376.407518902271 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1745.4662284678798,
            "unit": "ns/iter",
            "extra": "iterations: 401492\ncpu: 1745.3209528458851 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 111203.38358230432,
            "unit": "ns/iter",
            "extra": "iterations: 6627\ncpu: 111196.76309038785 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50580.2031927211,
            "unit": "ns/iter",
            "extra": "iterations: 13844\ncpu: 50576.00021670039 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8811.68931352568,
            "unit": "ns/iter",
            "extra": "iterations: 82057\ncpu: 8810.730979684855 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7969.503513229431,
            "unit": "ns/iter",
            "extra": "iterations: 87384\ncpu: 7969.294207177512 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8708.055105733132,
            "unit": "ns/iter",
            "extra": "iterations: 80155\ncpu: 8707.895427609017 ns\nthreads: 1"
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
          "id": "15595e0c311ea528f8262d2811a59bdd650406d8",
          "message": "Use compiler suffixes for all benchmarked platforms (#1153)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-05T12:06:02-04:00",
          "tree_id": "78a440b30c56913824be11c277c0372775572040",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/15595e0c311ea528f8262d2811a59bdd650406d8"
        },
        "date": 1725552753030,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18187.64951643128,
            "unit": "ns/iter",
            "extra": "iterations: 38464\ncpu: 18187.2294093178 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8219.766403273568,
            "unit": "ns/iter",
            "extra": "iterations: 85044\ncpu: 8219.624841258645 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1752.5692676973406,
            "unit": "ns/iter",
            "extra": "iterations: 399111\ncpu: 1752.5689970960466 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 105858.63540091725,
            "unit": "ns/iter",
            "extra": "iterations: 6610\ncpu: 105855.15264750377 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 51320.503928338556,
            "unit": "ns/iter",
            "extra": "iterations: 13619\ncpu: 51316.87451354728 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8607.516820852157,
            "unit": "ns/iter",
            "extra": "iterations: 81179\ncpu: 8607.222274233478 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8038.375143145909,
            "unit": "ns/iter",
            "extra": "iterations: 87324\ncpu: 8038.145996518707 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8762.492165512202,
            "unit": "ns/iter",
            "extra": "iterations: 78882\ncpu: 8762.491759843819 ns\nthreads: 1"
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
        "date": 1725556937717,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18303.373635752952,
            "unit": "ns/iter",
            "extra": "iterations: 38666\ncpu: 18302.533440231724 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8256.394090930642,
            "unit": "ns/iter",
            "extra": "iterations: 84988\ncpu: 8256.174542288325 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1765.5534777868743,
            "unit": "ns/iter",
            "extra": "iterations: 397221\ncpu: 1765.5454872728276 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 106320.75756654105,
            "unit": "ns/iter",
            "extra": "iterations: 6575\ncpu: 106317.4295057034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50201.10747529916,
            "unit": "ns/iter",
            "extra": "iterations: 13966\ncpu: 50199.619790920755 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8547.512964846219,
            "unit": "ns/iter",
            "extra": "iterations: 82608\ncpu: 8547.176350958747 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7938.208571300124,
            "unit": "ns/iter",
            "extra": "iterations: 88598\ncpu: 7938.022652881546 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8724.256041549193,
            "unit": "ns/iter",
            "extra": "iterations: 79905\ncpu: 8724.10503723171 ns\nthreads: 1"
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
        "date": 1725557144763,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18226.088456631394,
            "unit": "ns/iter",
            "extra": "iterations: 38403\ncpu: 18224.909251881363 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8248.146186142052,
            "unit": "ns/iter",
            "extra": "iterations: 85268\ncpu: 8247.499261153067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1750.3699680543484,
            "unit": "ns/iter",
            "extra": "iterations: 398802\ncpu: 1750.2420073118983 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 105470.48929756213,
            "unit": "ns/iter",
            "extra": "iterations: 6634\ncpu: 105461.62345492923 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50757.416000582976,
            "unit": "ns/iter",
            "extra": "iterations: 13762\ncpu: 50756.51693067863 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8548.081013892235,
            "unit": "ns/iter",
            "extra": "iterations: 82060\ncpu: 8547.56710943212 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7966.902773985102,
            "unit": "ns/iter",
            "extra": "iterations: 87888\ncpu: 7966.272107682499 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8764.613934140492,
            "unit": "ns/iter",
            "extra": "iterations: 80292\ncpu: 8763.929930752745 ns\nthreads: 1"
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
        "date": 1725560204366,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18351.20766655323,
            "unit": "ns/iter",
            "extra": "iterations: 37931\ncpu: 18349.755846141674 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8297.761684156621,
            "unit": "ns/iter",
            "extra": "iterations: 85479\ncpu: 8297.580867815486 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1754.0516796833501,
            "unit": "ns/iter",
            "extra": "iterations: 400254\ncpu: 1753.960027882294 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 106793.55714066693,
            "unit": "ns/iter",
            "extra": "iterations: 6519\ncpu: 106790.1797821752 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50710.408781333914,
            "unit": "ns/iter",
            "extra": "iterations: 13802\ncpu: 50708.5660049268 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8643.793231016856,
            "unit": "ns/iter",
            "extra": "iterations: 81903\ncpu: 8642.820678119237 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8025.0846735885425,
            "unit": "ns/iter",
            "extra": "iterations: 87359\ncpu: 8024.571606817852 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8757.386296784605,
            "unit": "ns/iter",
            "extra": "iterations: 78872\ncpu: 8756.923204686076 ns\nthreads: 1"
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
        "date": 1725561363740,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 19638.045086370865,
            "unit": "ns/iter",
            "extra": "iterations: 38149\ncpu: 19637.217934939315 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8294.430911581845,
            "unit": "ns/iter",
            "extra": "iterations: 86136\ncpu: 8294.197513234885 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1773.8217606591447,
            "unit": "ns/iter",
            "extra": "iterations: 395227\ncpu: 1773.7850678217844 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 106908.53939949046,
            "unit": "ns/iter",
            "extra": "iterations: 6561\ncpu: 106904.70217954574 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 51674.93329462848,
            "unit": "ns/iter",
            "extra": "iterations: 13777\ncpu: 51673.81926399077 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8578.222610466488,
            "unit": "ns/iter",
            "extra": "iterations: 81564\ncpu: 8578.039882791432 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8018.8841513389525,
            "unit": "ns/iter",
            "extra": "iterations: 87856\ncpu: 8018.629177290118 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8748.926931862332,
            "unit": "ns/iter",
            "extra": "iterations: 80117\ncpu: 8748.821236441709 ns\nthreads: 1"
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
          "id": "1167bc4b20358edaee38789106b748f3f8b277ff",
          "message": "Make compiler 2019-09 object tests independent of ordering (#1157)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-05T18:29:34Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/1167bc4b20358edaee38789106b748f3f8b277ff"
        },
        "date": 1725563457266,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18663.45070966531,
            "unit": "ns/iter",
            "extra": "iterations: 31071\ncpu: 18662.4807698497 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8325.363883899867,
            "unit": "ns/iter",
            "extra": "iterations: 86305\ncpu: 8325.20495915648 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1751.802575378201,
            "unit": "ns/iter",
            "extra": "iterations: 396136\ncpu: 1751.6997142395542 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 106350.49453718516,
            "unit": "ns/iter",
            "extra": "iterations: 6590\ncpu: 106348.13839150227 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 51715.75774793576,
            "unit": "ns/iter",
            "extra": "iterations: 13552\ncpu: 51714.85182998818 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8577.458695732194,
            "unit": "ns/iter",
            "extra": "iterations: 81747\ncpu: 8577.310433410401 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7969.565008925832,
            "unit": "ns/iter",
            "extra": "iterations: 87388\ncpu: 7969.431008834175 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8759.995217232376,
            "unit": "ns/iter",
            "extra": "iterations: 79661\ncpu: 8759.665997162983 ns\nthreads: 1"
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
        "date": 1725566297235,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18053.135307375054,
            "unit": "ns/iter",
            "extra": "iterations: 38601\ncpu: 18051.961995803213 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8296.053029602152,
            "unit": "ns/iter",
            "extra": "iterations: 86348\ncpu: 8295.480161671378 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1738.1761530167357,
            "unit": "ns/iter",
            "extra": "iterations: 401577\ncpu: 1738.1344125784094 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 106137.37641724227,
            "unit": "ns/iter",
            "extra": "iterations: 6615\ncpu: 106134.84429327285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50483.65450305127,
            "unit": "ns/iter",
            "extra": "iterations: 13291\ncpu: 50479.904672334626 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8501.27848408929,
            "unit": "ns/iter",
            "extra": "iterations: 82274\ncpu: 8500.710734861561 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7936.347969512359,
            "unit": "ns/iter",
            "extra": "iterations: 88821\ncpu: 7935.851273910454 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8699.822389094,
            "unit": "ns/iter",
            "extra": "iterations: 80834\ncpu: 8699.601306380975 ns\nthreads: 1"
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
        "date": 1725568441488,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18208.84120005169,
            "unit": "ns/iter",
            "extra": "iterations: 38665\ncpu: 18208.284934695457 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7088.281419343982,
            "unit": "ns/iter",
            "extra": "iterations: 100018\ncpu: 7088.070567297887 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1771.2486629528332,
            "unit": "ns/iter",
            "extra": "iterations: 395648\ncpu: 1771.2299013264312 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 104370.72272182662,
            "unit": "ns/iter",
            "extra": "iterations: 6672\ncpu: 104368.78102517982 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50070.447063864216,
            "unit": "ns/iter",
            "extra": "iterations: 13998\ncpu: 50069.37498214028 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8303.942936196345,
            "unit": "ns/iter",
            "extra": "iterations: 84572\ncpu: 8303.75963675921 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7723.196173821212,
            "unit": "ns/iter",
            "extra": "iterations: 91266\ncpu: 7722.99983564526 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8470.790281671216,
            "unit": "ns/iter",
            "extra": "iterations: 82401\ncpu: 8470.701302168669 ns\nthreads: 1"
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
        "date": 1725569971946,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18128.77166701229,
            "unit": "ns/iter",
            "extra": "iterations: 38584\ncpu: 18127.74559402861 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7836.659274042086,
            "unit": "ns/iter",
            "extra": "iterations: 92705\ncpu: 7834.636297934311 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1768.958941540514,
            "unit": "ns/iter",
            "extra": "iterations: 391588\ncpu: 1768.7904481240478 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 106294.08163884623,
            "unit": "ns/iter",
            "extra": "iterations: 6590\ncpu: 106286.83201820936 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50874.37727074307,
            "unit": "ns/iter",
            "extra": "iterations: 13762\ncpu: 50873.099767475665 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8542.10207663063,
            "unit": "ns/iter",
            "extra": "iterations: 82056\ncpu: 8541.723335283212 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7975.193560486025,
            "unit": "ns/iter",
            "extra": "iterations: 87988\ncpu: 7974.790266854572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8714.350435877288,
            "unit": "ns/iter",
            "extra": "iterations: 80183\ncpu: 8713.833056882375 ns\nthreads: 1"
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
        "date": 1725639824476,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17992.26375086166,
            "unit": "ns/iter",
            "extra": "iterations: 39143\ncpu: 17990.761183353345 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7492.53698627295,
            "unit": "ns/iter",
            "extra": "iterations: 95576\ncpu: 7492.424562651711 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1735.762534889697,
            "unit": "ns/iter",
            "extra": "iterations: 403773\ncpu: 1735.7445272467442 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 106430.96838122826,
            "unit": "ns/iter",
            "extra": "iterations: 6610\ncpu: 106421.34931921336 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 49978.06776268515,
            "unit": "ns/iter",
            "extra": "iterations: 13990\ncpu: 49978.0666190136 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8424.937778574522,
            "unit": "ns/iter",
            "extra": "iterations: 83685\ncpu: 8424.522530919518 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7782.745080550029,
            "unit": "ns/iter",
            "extra": "iterations: 89695\ncpu: 7782.194302915432 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8541.466976813164,
            "unit": "ns/iter",
            "extra": "iterations: 81897\ncpu: 8541.468344383795 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 111594.32903123797,
            "unit": "ns/iter",
            "extra": "iterations: 6276\ncpu: 111588.57823454436 ns\nthreads: 1"
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
        "date": 1725645402386,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17380.19793113789,
            "unit": "ns/iter",
            "extra": "iterations: 40312\ncpu: 17379.91781603493 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7526.286647228262,
            "unit": "ns/iter",
            "extra": "iterations: 92947\ncpu: 7526.218199619139 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1747.1117181998357,
            "unit": "ns/iter",
            "extra": "iterations: 400454\ncpu: 1747.09911500447 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 106688.46502372765,
            "unit": "ns/iter",
            "extra": "iterations: 6533\ncpu: 106685.60799020353 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50451.529382292094,
            "unit": "ns/iter",
            "extra": "iterations: 13971\ncpu: 50449.99069501107 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8536.294258344578,
            "unit": "ns/iter",
            "extra": "iterations: 82781\ncpu: 8535.94103719453 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7856.943634771584,
            "unit": "ns/iter",
            "extra": "iterations: 89062\ncpu: 7856.918000943159 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8713.169681330135,
            "unit": "ns/iter",
            "extra": "iterations: 80993\ncpu: 8713.150877236307 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 79076.27348353631,
            "unit": "ns/iter",
            "extra": "iterations: 8655\ncpu: 79073.50306181397 ns\nthreads: 1"
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
        "date": 1725646845917,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17165.71827334504,
            "unit": "ns/iter",
            "extra": "iterations: 39730\ncpu: 17164.82212433929 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7712.764126114363,
            "unit": "ns/iter",
            "extra": "iterations: 92329\ncpu: 7712.251892688107 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1709.656836605449,
            "unit": "ns/iter",
            "extra": "iterations: 408814\ncpu: 1709.5091190614812 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 106068.86921681484,
            "unit": "ns/iter",
            "extra": "iterations: 6614\ncpu: 106061.38010281218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 49573.35155306127,
            "unit": "ns/iter",
            "extra": "iterations: 14069\ncpu: 49568.56059421418 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8302.021718646813,
            "unit": "ns/iter",
            "extra": "iterations: 84904\ncpu: 8301.36235041929 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7695.597257268172,
            "unit": "ns/iter",
            "extra": "iterations: 91150\ncpu: 7695.00176631926 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8484.25003930694,
            "unit": "ns/iter",
            "extra": "iterations: 82683\ncpu: 8484.226152897207 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 78961.6089750827,
            "unit": "ns/iter",
            "extra": "iterations: 8869\ncpu: 78954.8004284587 ns\nthreads: 1"
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
        "date": 1725649767540,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17392.700339284016,
            "unit": "ns/iter",
            "extra": "iterations: 40379\ncpu: 17392.498972238045 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7685.990739816846,
            "unit": "ns/iter",
            "extra": "iterations: 90279\ncpu: 7685.916381439758 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1736.9480331304326,
            "unit": "ns/iter",
            "extra": "iterations: 403738\ncpu: 1736.92683869242 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 107510.96482642526,
            "unit": "ns/iter",
            "extra": "iterations: 6539\ncpu: 107509.2004893715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50114.23079999986,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50114.55309999997 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8322.006967636184,
            "unit": "ns/iter",
            "extra": "iterations: 83242\ncpu: 8321.910730160258 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7769.15130810444,
            "unit": "ns/iter",
            "extra": "iterations: 90742\ncpu: 7769.044929580575 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8505.142097790096,
            "unit": "ns/iter",
            "extra": "iterations: 82401\ncpu: 8505.180276938388 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 79131.7745109184,
            "unit": "ns/iter",
            "extra": "iterations: 8843\ncpu: 79130.33359719552 ns\nthreads: 1"
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
        "date": 1725651508519,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17282.88693721609,
            "unit": "ns/iter",
            "extra": "iterations: 40535\ncpu: 17282.42274577526 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7660.088419784615,
            "unit": "ns/iter",
            "extra": "iterations: 92943\ncpu: 7659.701526742198 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1742.6611854456341,
            "unit": "ns/iter",
            "extra": "iterations: 402161\ncpu: 1742.5361807833185 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 107002.9017953185,
            "unit": "ns/iter",
            "extra": "iterations: 6517\ncpu: 106998.38622065367 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50545.34658519188,
            "unit": "ns/iter",
            "extra": "iterations: 13910\ncpu: 50543.985262401184 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8374.384490439656,
            "unit": "ns/iter",
            "extra": "iterations: 83729\ncpu: 8374.323030252355 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7855.740940477548,
            "unit": "ns/iter",
            "extra": "iterations: 89933\ncpu: 7855.558860485025 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8552.269184012257,
            "unit": "ns/iter",
            "extra": "iterations: 81435\ncpu: 8552.011334192923 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 78663.07619370025,
            "unit": "ns/iter",
            "extra": "iterations: 8859\ncpu: 78658.95552545441 ns\nthreads: 1"
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
        "date": 1725652605977,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17245.869109426305,
            "unit": "ns/iter",
            "extra": "iterations: 40255\ncpu: 17245.304334865235 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7702.348812048439,
            "unit": "ns/iter",
            "extra": "iterations: 92428\ncpu: 7702.16073051456 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1710.0250077639516,
            "unit": "ns/iter",
            "extra": "iterations: 408953\ncpu: 1709.9602643824594 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 105808.33589743677,
            "unit": "ns/iter",
            "extra": "iterations: 6630\ncpu: 105806.31085972849 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 49636.593186661754,
            "unit": "ns/iter",
            "extra": "iterations: 14090\ncpu: 49634.56288147624 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8321.1344238129,
            "unit": "ns/iter",
            "extra": "iterations: 84122\ncpu: 8320.999536387631 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7695.153662691033,
            "unit": "ns/iter",
            "extra": "iterations: 90985\ncpu: 7694.5820959498815 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8472.23950680121,
            "unit": "ns/iter",
            "extra": "iterations: 82482\ncpu: 8471.921982978101 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 78831.57981008322,
            "unit": "ns/iter",
            "extra": "iterations: 8846\ncpu: 78826.95048609539 ns\nthreads: 1"
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
        "date": 1725657078139,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17315.681265387142,
            "unit": "ns/iter",
            "extra": "iterations: 40620\ncpu: 17315.32693254554 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7604.637316333684,
            "unit": "ns/iter",
            "extra": "iterations: 92083\ncpu: 7604.328822909766 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1738.1576392094198,
            "unit": "ns/iter",
            "extra": "iterations: 402882\ncpu: 1738.100957600488 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 106906.80638264825,
            "unit": "ns/iter",
            "extra": "iterations: 6549\ncpu: 106898.87646969002 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50156.453173070026,
            "unit": "ns/iter",
            "extra": "iterations: 13977\ncpu: 50154.401159046996 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8447.538875519214,
            "unit": "ns/iter",
            "extra": "iterations: 82687\ncpu: 8447.246302320798 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7881.853715946094,
            "unit": "ns/iter",
            "extra": "iterations: 88793\ncpu: 7881.516606038757 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8639.29536717708,
            "unit": "ns/iter",
            "extra": "iterations: 81160\ncpu: 8639.256678166594 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 79130.27671755447,
            "unit": "ns/iter",
            "extra": "iterations: 8908\ncpu: 79125.15648854953 ns\nthreads: 1"
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
        "date": 1725660066316,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18203.454163097515,
            "unit": "ns/iter",
            "extra": "iterations: 38517\ncpu: 18201.80149025106 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7738.4800293465905,
            "unit": "ns/iter",
            "extra": "iterations: 92686\ncpu: 7737.9987053060895 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1757.1582174039156,
            "unit": "ns/iter",
            "extra": "iterations: 404197\ncpu: 1757.0332461646171 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 109963.29229323601,
            "unit": "ns/iter",
            "extra": "iterations: 6384\ncpu: 109957.53179824557 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 51196.27875329487,
            "unit": "ns/iter",
            "extra": "iterations: 13668\ncpu: 51195.04558091896 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8470.570783879162,
            "unit": "ns/iter",
            "extra": "iterations: 82653\ncpu: 8469.458422561795 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7834.243116140379,
            "unit": "ns/iter",
            "extra": "iterations: 89521\ncpu: 7833.576546285233 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8647.180376499695,
            "unit": "ns/iter",
            "extra": "iterations: 80903\ncpu: 8646.606491724657 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 79771.24494203755,
            "unit": "ns/iter",
            "extra": "iterations: 8798\ncpu: 79765.13764491916 ns\nthreads: 1"
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
        "date": 1725896484706,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16385.727589400954,
            "unit": "ns/iter",
            "extra": "iterations: 35597\ncpu: 16383.958816754184 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7067.0369581828845,
            "unit": "ns/iter",
            "extra": "iterations: 104740\ncpu: 7066.392419324039 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1698.3459336286896,
            "unit": "ns/iter",
            "extra": "iterations: 416022\ncpu: 1698.308959622326 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 104381.30898792803,
            "unit": "ns/iter",
            "extra": "iterations: 6709\ncpu: 104377.62006260257 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 49701.203886248804,
            "unit": "ns/iter",
            "extra": "iterations: 14101\ncpu: 49697.813204737366 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8213.27091038573,
            "unit": "ns/iter",
            "extra": "iterations: 85711\ncpu: 8212.931584044043 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7639.933422421913,
            "unit": "ns/iter",
            "extra": "iterations: 92043\ncpu: 7639.088241365455 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8369.248613130261,
            "unit": "ns/iter",
            "extra": "iterations: 81118\ncpu: 8368.779321482281 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 77217.5950121432,
            "unit": "ns/iter",
            "extra": "iterations: 9062\ncpu: 77210.14400794535 ns\nthreads: 1"
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
        "date": 1725897412761,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16854.396516419758,
            "unit": "ns/iter",
            "extra": "iterations: 41509\ncpu: 16853.62152786143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6747.432842954728,
            "unit": "ns/iter",
            "extra": "iterations: 104613\ncpu: 6747.31418657337 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1722.3883774253316,
            "unit": "ns/iter",
            "extra": "iterations: 407328\ncpu: 1722.3160990651268 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 106794.45883610104,
            "unit": "ns/iter",
            "extra": "iterations: 6547\ncpu: 106791.30319230189 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50908.77916875281,
            "unit": "ns/iter",
            "extra": "iterations: 13979\ncpu: 50906.51098075679 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8235.446587536924,
            "unit": "ns/iter",
            "extra": "iterations: 84924\ncpu: 8235.04919692902 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7688.42721867392,
            "unit": "ns/iter",
            "extra": "iterations: 90820\ncpu: 7688.296994054177 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8384.360519854778,
            "unit": "ns/iter",
            "extra": "iterations: 83485\ncpu: 8384.03310774391 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 75925.99783900983,
            "unit": "ns/iter",
            "extra": "iterations: 9255\ncpu: 75922.94197730954 ns\nthreads: 1"
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
        "date": 1725899176298,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16728.44139990442,
            "unit": "ns/iter",
            "extra": "iterations: 41860\ncpu: 16727.329359770658 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6796.678523980963,
            "unit": "ns/iter",
            "extra": "iterations: 103874\ncpu: 6796.296484202014 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1735.223108430668,
            "unit": "ns/iter",
            "extra": "iterations: 402589\ncpu: 1735.1985424340955 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 106022.23458851846,
            "unit": "ns/iter",
            "extra": "iterations: 6586\ncpu: 106016.84892195568 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50885.26575821614,
            "unit": "ns/iter",
            "extra": "iterations: 13723\ncpu: 50882.193106463674 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8305.634539007058,
            "unit": "ns/iter",
            "extra": "iterations: 84600\ncpu: 8305.205378250595 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7682.138040181162,
            "unit": "ns/iter",
            "extra": "iterations: 90988\ncpu: 7681.738086341054 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8532.20472507681,
            "unit": "ns/iter",
            "extra": "iterations: 82623\ncpu: 8532.068891228839 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 75843.59773707244,
            "unit": "ns/iter",
            "extra": "iterations: 9280\ncpu: 75840.266487069 ns\nthreads: 1"
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
        "date": 1725901872161,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16797.890326911795,
            "unit": "ns/iter",
            "extra": "iterations: 41724\ncpu: 16797.706523823217 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7210.71395106527,
            "unit": "ns/iter",
            "extra": "iterations: 96903\ncpu: 7210.647100708953 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1728.633933814468,
            "unit": "ns/iter",
            "extra": "iterations: 401900\ncpu: 1728.5142348842996 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 101962.98288365865,
            "unit": "ns/iter",
            "extra": "iterations: 6894\ncpu: 101960.27487670444 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 47880.28704586088,
            "unit": "ns/iter",
            "extra": "iterations: 14698\ncpu: 47877.36447135662 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8568.988083393304,
            "unit": "ns/iter",
            "extra": "iterations: 85427\ncpu: 8568.787924192584 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7651.381053898101,
            "unit": "ns/iter",
            "extra": "iterations: 91470\ncpu: 7651.229616267622 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8376.23805135074,
            "unit": "ns/iter",
            "extra": "iterations: 83545\ncpu: 8376.029457178769 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 75474.2108968787,
            "unit": "ns/iter",
            "extra": "iterations: 9232\ncpu: 75470.86871750432 ns\nthreads: 1"
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
        "date": 1725908927926,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16861.17563587492,
            "unit": "ns/iter",
            "extra": "iterations: 41085\ncpu: 16860.926810271387 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7271.10714137487,
            "unit": "ns/iter",
            "extra": "iterations: 96312\ncpu: 7270.87577871916 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1736.5394280409791,
            "unit": "ns/iter",
            "extra": "iterations: 402721\ncpu: 1736.5180708232251 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 103046.40269636495,
            "unit": "ns/iter",
            "extra": "iterations: 6824\ncpu: 103042.4353751465 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 48190.773143995764,
            "unit": "ns/iter",
            "extra": "iterations: 14507\ncpu: 48189.72551182182 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8333.790674980297,
            "unit": "ns/iter",
            "extra": "iterations: 84032\ncpu: 8333.546149086063 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7669.333834421597,
            "unit": "ns/iter",
            "extra": "iterations: 91135\ncpu: 7669.199286772367 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8447.699703500151,
            "unit": "ns/iter",
            "extra": "iterations: 82968\ncpu: 8447.619262848328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 75808.33498491762,
            "unit": "ns/iter",
            "extra": "iterations: 9284\ncpu: 75806.55816458428 ns\nthreads: 1"
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
        "date": 1725909404629,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17845.666115370997,
            "unit": "ns/iter",
            "extra": "iterations: 39906\ncpu: 17845.44955645768 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7602.404309606299,
            "unit": "ns/iter",
            "extra": "iterations: 93280\ncpu: 7602.135077186964 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1767.4014592479173,
            "unit": "ns/iter",
            "extra": "iterations: 397465\ncpu: 1767.357015083089 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 105226.71762589912,
            "unit": "ns/iter",
            "extra": "iterations: 6672\ncpu: 105223.52368105517 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 50496.603165547545,
            "unit": "ns/iter",
            "extra": "iterations: 14026\ncpu: 50495.439398260336 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8538.360826251042,
            "unit": "ns/iter",
            "extra": "iterations: 82009\ncpu: 8538.178382860426 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7934.066222610322,
            "unit": "ns/iter",
            "extra": "iterations: 88127\ncpu: 7934.055510796913 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8707.280555242325,
            "unit": "ns/iter",
            "extra": "iterations: 80109\ncpu: 8707.093010772824 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 79876.93014538426,
            "unit": "ns/iter",
            "extra": "iterations: 8804\ncpu: 79874.58848250794 ns\nthreads: 1"
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
        "date": 1725995447661,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17502.48420420854,
            "unit": "ns/iter",
            "extra": "iterations: 39979\ncpu: 17501.8458940944 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7462.33826519149,
            "unit": "ns/iter",
            "extra": "iterations: 93947\ncpu: 7462.043918379511 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1761.268144933186,
            "unit": "ns/iter",
            "extra": "iterations: 397673\ncpu: 1761.1689277371108 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 105420.46226555988,
            "unit": "ns/iter",
            "extra": "iterations: 6665\ncpu: 105418.50037509378 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 49389.85287681212,
            "unit": "ns/iter",
            "extra": "iterations: 14165\ncpu: 49388.12905047649 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8564.221622737954,
            "unit": "ns/iter",
            "extra": "iterations: 82293\ncpu: 8563.991736842745 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7957.354108036014,
            "unit": "ns/iter",
            "extra": "iterations: 87767\ncpu: 7957.110611049717 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8738.727052264241,
            "unit": "ns/iter",
            "extra": "iterations: 79997\ncpu: 8738.491555933351 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 79823.30895419774,
            "unit": "ns/iter",
            "extra": "iterations: 8778\ncpu: 79821.21166552747 ns\nthreads: 1"
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
        "date": 1726072440854,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17337.484464269237,
            "unit": "ns/iter",
            "extra": "iterations: 39908\ncpu: 17336.363886939966 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7552.913341107614,
            "unit": "ns/iter",
            "extra": "iterations: 92616\ncpu: 7552.445624946016 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1743.2160688361962,
            "unit": "ns/iter",
            "extra": "iterations: 403626\ncpu: 1743.1003825323446 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 104045.1590977024,
            "unit": "ns/iter",
            "extra": "iterations: 6694\ncpu: 104040.39064834178 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 49987.70851185271,
            "unit": "ns/iter",
            "extra": "iterations: 14004\ncpu: 49986.130034275935 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8468.387012516332,
            "unit": "ns/iter",
            "extra": "iterations: 82695\ncpu: 8468.138013180973 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7885.860008098334,
            "unit": "ns/iter",
            "extra": "iterations: 88898\ncpu: 7885.579236878222 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8688.107630572824,
            "unit": "ns/iter",
            "extra": "iterations: 79745\ncpu: 8687.932534955167 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 79665.2279328284,
            "unit": "ns/iter",
            "extra": "iterations: 8814\ncpu: 79663.74234172911 ns\nthreads: 1"
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
        "date": 1726081770763,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17497.620715593188,
            "unit": "ns/iter",
            "extra": "iterations: 39883\ncpu: 17496.594639320014 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7566.318307481071,
            "unit": "ns/iter",
            "extra": "iterations: 94770\ncpu: 7565.999577925502 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1743.5271129621674,
            "unit": "ns/iter",
            "extra": "iterations: 402409\ncpu: 1743.5264420030362 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 105505.21350172965,
            "unit": "ns/iter",
            "extra": "iterations: 6651\ncpu: 105504.87054578257 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 49841.54288762127,
            "unit": "ns/iter",
            "extra": "iterations: 14060\ncpu: 49837.266856330054 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8550.29814081089,
            "unit": "ns/iter",
            "extra": "iterations: 82025\ncpu: 8550.114318805245 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7927.9046981387355,
            "unit": "ns/iter",
            "extra": "iterations: 88120\ncpu: 7927.7699954607315 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8734.46924163073,
            "unit": "ns/iter",
            "extra": "iterations: 80027\ncpu: 8734.208592100165 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 80221.74138728467,
            "unit": "ns/iter",
            "extra": "iterations: 8650\ncpu: 80220.5989595375 ns\nthreads: 1"
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
        "date": 1726086344696,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17424.834663341826,
            "unit": "ns/iter",
            "extra": "iterations: 40100\ncpu: 17424.82735660848 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7511.939008611179,
            "unit": "ns/iter",
            "extra": "iterations: 94292\ncpu: 7511.889598269205 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1721.778569849436,
            "unit": "ns/iter",
            "extra": "iterations: 407090\ncpu: 1721.761502370482 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 105106.97960398898,
            "unit": "ns/iter",
            "extra": "iterations: 6717\ncpu: 105104.80705672177 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 49670.52934106385,
            "unit": "ns/iter",
            "extra": "iterations: 14144\ncpu: 49669.26442307693 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8385.143624517004,
            "unit": "ns/iter",
            "extra": "iterations: 83029\ncpu: 8384.859832106855 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7834.573455947161,
            "unit": "ns/iter",
            "extra": "iterations: 89278\ncpu: 7834.330842984837 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8638.263821568713,
            "unit": "ns/iter",
            "extra": "iterations: 81286\ncpu: 8638.213960583618 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 80490.015768878,
            "unit": "ns/iter",
            "extra": "iterations: 8688\ncpu: 80489.46052025784 ns\nthreads: 1"
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
        "date": 1726151142620,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16581.732215206277,
            "unit": "ns/iter",
            "extra": "iterations: 42452\ncpu: 16580.80512107792 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6754.4400239683155,
            "unit": "ns/iter",
            "extra": "iterations: 101799\ncpu: 6754.312625860766 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1643.0752747561755,
            "unit": "ns/iter",
            "extra": "iterations: 427288\ncpu: 1643.035563835165 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 102252.46916105386,
            "unit": "ns/iter",
            "extra": "iterations: 6842\ncpu: 102244.87182110497 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 47502.590266446954,
            "unit": "ns/iter",
            "extra": "iterations: 14712\ncpu: 47501.28493746599 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8000.4299897178025,
            "unit": "ns/iter",
            "extra": "iterations: 87530\ncpu: 7999.820918542211 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7453.192381302761,
            "unit": "ns/iter",
            "extra": "iterations: 92483\ncpu: 7452.862169263534 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8175.989099895168,
            "unit": "ns/iter",
            "extra": "iterations: 85779\ncpu: 8175.274449457318 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 77499.02454395579,
            "unit": "ns/iter",
            "extra": "iterations: 9045\ncpu: 77491.48148148142 ns\nthreads: 1"
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
        "date": 1726168128526,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16552.706116115,
            "unit": "ns/iter",
            "extra": "iterations: 42527\ncpu: 16552.536106473533 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6911.4120911023,
            "unit": "ns/iter",
            "extra": "iterations: 101645\ncpu: 6911.178424910227 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1636.215966058035,
            "unit": "ns/iter",
            "extra": "iterations: 427081\ncpu: 1636.1869458018505 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 103196.91787084815,
            "unit": "ns/iter",
            "extra": "iterations: 6782\ncpu: 103192.54187555294 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 48332.48571821338,
            "unit": "ns/iter",
            "extra": "iterations: 14564\ncpu: 48331.103886295 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8080.092327773753,
            "unit": "ns/iter",
            "extra": "iterations: 86572\ncpu: 8079.682749618813 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7516.813486232121,
            "unit": "ns/iter",
            "extra": "iterations: 93221\ncpu: 7516.639169285894 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8277.797782172205,
            "unit": "ns/iter",
            "extra": "iterations: 84948\ncpu: 8277.654388567125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 76828.84619600406,
            "unit": "ns/iter",
            "extra": "iterations: 9122\ncpu: 76822.01326463505 ns\nthreads: 1"
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
        "date": 1726177389343,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16417.231454581524,
            "unit": "ns/iter",
            "extra": "iterations: 41304\ncpu: 16416.019852798763 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6769.746224546864,
            "unit": "ns/iter",
            "extra": "iterations: 104557\ncpu: 6769.384804460726 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1679.2895645484882,
            "unit": "ns/iter",
            "extra": "iterations: 417337\ncpu: 1679.0001437687047 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 102356.48377101946,
            "unit": "ns/iter",
            "extra": "iterations: 6778\ncpu: 102355.88949542637 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 47448.4959041372,
            "unit": "ns/iter",
            "extra": "iterations: 14771\ncpu: 47445.45095118814 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8010.2465021335765,
            "unit": "ns/iter",
            "extra": "iterations: 87196\ncpu: 8010.045713106099 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7640.377404999875,
            "unit": "ns/iter",
            "extra": "iterations: 93711\ncpu: 7640.333632124297 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8161.144397332732,
            "unit": "ns/iter",
            "extra": "iterations: 85611\ncpu: 8160.656714674515 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 76664.34022309916,
            "unit": "ns/iter",
            "extra": "iterations: 9144\ncpu: 76663.0216535432 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 10164.709796805475,
            "unit": "ns/iter",
            "extra": "iterations: 69982\ncpu: 10164.138049784237 ns\nthreads: 1"
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
        "date": 1726178149665,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16493.874066945,
            "unit": "ns/iter",
            "extra": "iterations: 42602\ncpu: 16492.649687808083 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6596.7442602773735,
            "unit": "ns/iter",
            "extra": "iterations: 104012\ncpu: 6596.618909356612 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1667.0908480738394,
            "unit": "ns/iter",
            "extra": "iterations: 420152\ncpu: 1667.0896342276133 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 102160.41978726503,
            "unit": "ns/iter",
            "extra": "iterations: 6863\ncpu: 102154.61561999121 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 47690.828184547594,
            "unit": "ns/iter",
            "extra": "iterations: 14696\ncpu: 47689.22686445292 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8027.300906559587,
            "unit": "ns/iter",
            "extra": "iterations: 87253\ncpu: 8026.656195202464 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7487.039361553931,
            "unit": "ns/iter",
            "extra": "iterations: 93289\ncpu: 7486.656100933662 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8213.957437345201,
            "unit": "ns/iter",
            "extra": "iterations: 85427\ncpu: 8213.452760836732 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 77241.89286498258,
            "unit": "ns/iter",
            "extra": "iterations: 9110\ncpu: 77235.6925356751 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 10077.137492126014,
            "unit": "ns/iter",
            "extra": "iterations: 69844\ncpu: 10076.978738331147 ns\nthreads: 1"
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
        "date": 1726179113314,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16390.157861008476,
            "unit": "ns/iter",
            "extra": "iterations: 42132\ncpu: 16389.384885597643 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6683.140428864843,
            "unit": "ns/iter",
            "extra": "iterations: 105954\ncpu: 6682.839156615135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1638.282423644848,
            "unit": "ns/iter",
            "extra": "iterations: 423973\ncpu: 1638.1831083583156 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 101797.30592395469,
            "unit": "ns/iter",
            "extra": "iterations: 6786\ncpu: 101792.5760389036 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 47504.917347496885,
            "unit": "ns/iter",
            "extra": "iterations: 14688\ncpu: 47501.69975490195 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8009.690801003745,
            "unit": "ns/iter",
            "extra": "iterations: 87303\ncpu: 8009.196488093196 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7455.075406935326,
            "unit": "ns/iter",
            "extra": "iterations: 93811\ncpu: 7454.800918868783 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8214.782690378115,
            "unit": "ns/iter",
            "extra": "iterations: 85698\ncpu: 8214.48710588345 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 77086.67579202124,
            "unit": "ns/iter",
            "extra": "iterations: 9059\ncpu: 77083.22187879452 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6141.686634824218,
            "unit": "ns/iter",
            "extra": "iterations: 115150\ncpu: 6141.3373947025575 ns\nthreads: 1"
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
        "date": 1726240237112,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16104.426190763807,
            "unit": "ns/iter",
            "extra": "iterations: 41465\ncpu: 16103.560786205233 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6285.7258599491,
            "unit": "ns/iter",
            "extra": "iterations: 113059\ncpu: 6285.546891446058 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1646.1739340159788,
            "unit": "ns/iter",
            "extra": "iterations: 424983\ncpu: 1646.0437993990342 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 1809.6146607103105,
            "unit": "ns/iter",
            "extra": "iterations: 386366\ncpu: 1809.5022155158574 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 103282.72159930176,
            "unit": "ns/iter",
            "extra": "iterations: 6778\ncpu: 103278.07185010338 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 47137.9826945218,
            "unit": "ns/iter",
            "extra": "iterations: 14793\ncpu: 47135.177043196134 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 7878.549824006094,
            "unit": "ns/iter",
            "extra": "iterations: 88923\ncpu: 7878.4473870652155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7353.268764091716,
            "unit": "ns/iter",
            "extra": "iterations: 95355\ncpu: 7352.78669183578 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8045.460735758146,
            "unit": "ns/iter",
            "extra": "iterations: 86822\ncpu: 8045.067552002937 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 75202.60678496819,
            "unit": "ns/iter",
            "extra": "iterations: 9580\ncpu: 75197.73559498969 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 5837.735241159568,
            "unit": "ns/iter",
            "extra": "iterations: 119962\ncpu: 5837.387322652173 ns\nthreads: 1"
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
        "date": 1726242374383,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 15640.183943721147,
            "unit": "ns/iter",
            "extra": "iterations: 43497\ncpu: 15639.949881601027 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6221.4011470807445,
            "unit": "ns/iter",
            "extra": "iterations: 114726\ncpu: 6221.229782263829 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1602.0747668052027,
            "unit": "ns/iter",
            "extra": "iterations: 436116\ncpu: 1602.090372744866 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 1736.9326421264107,
            "unit": "ns/iter",
            "extra": "iterations: 402195\ncpu: 1736.8949091858424 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 99719.30758225877,
            "unit": "ns/iter",
            "extra": "iterations: 6990\ncpu: 99717.48998569381 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 46350.9641527001,
            "unit": "ns/iter",
            "extra": "iterations: 15036\ncpu: 46347.641859537114 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 7803.145427751048,
            "unit": "ns/iter",
            "extra": "iterations: 90251\ncpu: 7803.048165671295 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7437.9379437742955,
            "unit": "ns/iter",
            "extra": "iterations: 96896\ncpu: 7437.80928005284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 7948.365436482593,
            "unit": "ns/iter",
            "extra": "iterations: 87873\ncpu: 7947.988198877919 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 72227.08303174289,
            "unit": "ns/iter",
            "extra": "iterations: 9671\ncpu: 72223.52776341645 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 5729.699494457946,
            "unit": "ns/iter",
            "extra": "iterations: 118091\ncpu: 5729.562845602121 ns\nthreads: 1"
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
        "date": 1726244625368,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16006.356845999391,
            "unit": "ns/iter",
            "extra": "iterations: 43792\ncpu: 16005.95476342711 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6293.467750045099,
            "unit": "ns/iter",
            "extra": "iterations: 111380\ncpu: 6293.329358951339 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1666.0993067342129,
            "unit": "ns/iter",
            "extra": "iterations: 434754\ncpu: 1666.0158135405304 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 1768.585407829445,
            "unit": "ns/iter",
            "extra": "iterations: 396281\ncpu: 1768.542334858346 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 100957.17580992564,
            "unit": "ns/iter",
            "extra": "iterations: 6945\ncpu: 100957.59640028804 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 47594.767566100476,
            "unit": "ns/iter",
            "extra": "iterations: 14787\ncpu: 47591.33164265907 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 7844.892114141883,
            "unit": "ns/iter",
            "extra": "iterations: 89502\ncpu: 7844.748027977022 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7311.466451243124,
            "unit": "ns/iter",
            "extra": "iterations: 95935\ncpu: 7311.316954187732 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8023.834056597824,
            "unit": "ns/iter",
            "extra": "iterations: 87566\ncpu: 8023.733104172844 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 73681.05258639694,
            "unit": "ns/iter",
            "extra": "iterations: 9318\ncpu: 73677.64477355659 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 5803.296141502885,
            "unit": "ns/iter",
            "extra": "iterations: 120591\ncpu: 5803.160708510583 ns\nthreads: 1"
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
        "date": 1726254520728,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16059.579238384984,
            "unit": "ns/iter",
            "extra": "iterations: 43224\ncpu: 16059.199495650568 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6259.265924418634,
            "unit": "ns/iter",
            "extra": "iterations: 112092\ncpu: 6258.896219177107 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1636.1838024874812,
            "unit": "ns/iter",
            "extra": "iterations: 429461\ncpu: 1636.1168418086854 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 1777.8504796584405,
            "unit": "ns/iter",
            "extra": "iterations: 395177\ncpu: 1777.8078152321616 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 103719.90615792914,
            "unit": "ns/iter",
            "extra": "iterations: 6788\ncpu: 103714.42162639949 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 47189.43026786369,
            "unit": "ns/iter",
            "extra": "iterations: 14821\ncpu: 47187.251872343295 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 7880.043175047322,
            "unit": "ns/iter",
            "extra": "iterations: 88616\ncpu: 7879.754288164673 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7326.846136070072,
            "unit": "ns/iter",
            "extra": "iterations: 95201\ncpu: 7326.636390374047 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8060.782586231127,
            "unit": "ns/iter",
            "extra": "iterations: 87092\ncpu: 8060.620987002245 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 73304.41806612514,
            "unit": "ns/iter",
            "extra": "iterations: 9587\ncpu: 73302.93877125287 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 5811.508245814585,
            "unit": "ns/iter",
            "extra": "iterations: 119879\ncpu: 5811.341369213957 ns\nthreads: 1"
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
        "date": 1726258886768,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18738.397387306384,
            "unit": "ns/iter",
            "extra": "iterations: 37203\ncpu: 18738.385049592773 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6745.660101126747,
            "unit": "ns/iter",
            "extra": "iterations: 104028\ncpu: 6745.593224900986 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1855.125569531411,
            "unit": "ns/iter",
            "extra": "iterations: 375967\ncpu: 1855.0767062002783 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 1714.63948698158,
            "unit": "ns/iter",
            "extra": "iterations: 409264\ncpu: 1714.6233433676066 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 117959.43342872064,
            "unit": "ns/iter",
            "extra": "iterations: 5941\ncpu: 117959.26426527527 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 55505.83595863165,
            "unit": "ns/iter",
            "extra": "iterations: 12570\ncpu: 55504.57661097853 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8905.249773720694,
            "unit": "ns/iter",
            "extra": "iterations: 78443\ncpu: 8905.136748976964 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8307.983551847952,
            "unit": "ns/iter",
            "extra": "iterations: 83900\ncpu: 8307.891156138265 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9039.830202078834,
            "unit": "ns/iter",
            "extra": "iterations: 77445\ncpu: 9039.665285040985 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 86459.62164846073,
            "unit": "ns/iter",
            "extra": "iterations: 8056\ncpu: 86458.73237338632 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6316.006535298522,
            "unit": "ns/iter",
            "extra": "iterations: 110783\ncpu: 6315.952582977535 ns\nthreads: 1"
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
        "date": 1726262956520,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16833.121800551013,
            "unit": "ns/iter",
            "extra": "iterations: 41765\ncpu: 16831.83519693523 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6809.32363554991,
            "unit": "ns/iter",
            "extra": "iterations: 102807\ncpu: 6809.178645422976 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1833.900873740563,
            "unit": "ns/iter",
            "extra": "iterations: 381120\ncpu: 1833.8141136649874 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 1675.0226049284238,
            "unit": "ns/iter",
            "extra": "iterations: 417785\ncpu: 1674.9495553933236 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 116508.2859520654,
            "unit": "ns/iter",
            "extra": "iterations: 6008\ncpu: 116499.24550599205 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 55064.04756689419,
            "unit": "ns/iter",
            "extra": "iterations: 12782\ncpu: 55059.30730715071 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8755.03643531494,
            "unit": "ns/iter",
            "extra": "iterations: 79648\ncpu: 8754.649231619123 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8241.29031116628,
            "unit": "ns/iter",
            "extra": "iterations: 84778\ncpu: 8241.005709028286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8931.41894669521,
            "unit": "ns/iter",
            "extra": "iterations: 78325\ncpu: 8931.007698691355 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4263.087363902186,
            "unit": "ns/iter",
            "extra": "iterations: 164679\ncpu: 4262.886573272851 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6257.374410972485,
            "unit": "ns/iter",
            "extra": "iterations: 111837\ncpu: 6257.059309530836 ns\nthreads: 1"
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
        "date": 1726513723708,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16936.689744773572,
            "unit": "ns/iter",
            "extra": "iterations: 41179\ncpu: 16936.103790767138 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6697.539942592416,
            "unit": "ns/iter",
            "extra": "iterations: 104863\ncpu: 6697.415151197278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1823.732267392859,
            "unit": "ns/iter",
            "extra": "iterations: 379696\ncpu: 1823.7052510429394 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 1696.496845942165,
            "unit": "ns/iter",
            "extra": "iterations: 415338\ncpu: 1695.4706480023506 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 116697.10772053647,
            "unit": "ns/iter",
            "extra": "iterations: 5997\ncpu: 116689.95064198753 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 55360.01130077903,
            "unit": "ns/iter",
            "extra": "iterations: 12654\ncpu: 55356.715663031464 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8736.683929485798,
            "unit": "ns/iter",
            "extra": "iterations: 80153\ncpu: 8736.095779322046 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8213.45773135418,
            "unit": "ns/iter",
            "extra": "iterations: 85205\ncpu: 8213.213121295703 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8893.192618723833,
            "unit": "ns/iter",
            "extra": "iterations: 78523\ncpu: 8892.910090037318 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4205.351440902459,
            "unit": "ns/iter",
            "extra": "iterations: 166597\ncpu: 4205.285689418176 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6177.829199206006,
            "unit": "ns/iter",
            "extra": "iterations: 113325\ncpu: 6177.726926979922 ns\nthreads: 1"
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
        "date": 1726528429374,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16696.675437761645,
            "unit": "ns/iter",
            "extra": "iterations: 42032\ncpu: 16695.481466501715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6428.069409659983,
            "unit": "ns/iter",
            "extra": "iterations: 109005\ncpu: 6427.687528095041 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1835.7227570344485,
            "unit": "ns/iter",
            "extra": "iterations: 382585\ncpu: 1835.5902740567458 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 1666.0805834175592,
            "unit": "ns/iter",
            "extra": "iterations: 419528\ncpu: 1665.982580423714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 116160.2410137402,
            "unit": "ns/iter",
            "extra": "iterations: 6037\ncpu: 116160.28242504549 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 55030.79565592599,
            "unit": "ns/iter",
            "extra": "iterations: 12753\ncpu: 55028.30847643687 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8685.708164654865,
            "unit": "ns/iter",
            "extra": "iterations: 80775\ncpu: 8685.151866295255 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8110.24919344612,
            "unit": "ns/iter",
            "extra": "iterations: 86479\ncpu: 8109.68201528694 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8836.8246014245,
            "unit": "ns/iter",
            "extra": "iterations: 78906\ncpu: 8835.943122196033 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4128.143410464854,
            "unit": "ns/iter",
            "extra": "iterations: 169883\ncpu: 4127.982381992315 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6153.630768696992,
            "unit": "ns/iter",
            "extra": "iterations: 115234\ncpu: 6153.206484197374 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 1683.3960366329018,
            "unit": "ns/iter",
            "extra": "iterations: 416565\ncpu: 1683.3173574352134 ns\nthreads: 1"
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
        "date": 1726529617542,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17174.373453374596,
            "unit": "ns/iter",
            "extra": "iterations: 40653\ncpu: 17172.155560475243 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6681.776018598424,
            "unit": "ns/iter",
            "extra": "iterations: 108826\ncpu: 6681.5149964162965 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1840.2382134647871,
            "unit": "ns/iter",
            "extra": "iterations: 380625\ncpu: 1840.157354351395 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 1714.1937867841048,
            "unit": "ns/iter",
            "extra": "iterations: 410673\ncpu: 1714.1755094686039 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 118295.11579481153,
            "unit": "ns/iter",
            "extra": "iterations: 5907\ncpu: 118294.77061113942 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 55561.50127287328,
            "unit": "ns/iter",
            "extra": "iterations: 12570\ncpu: 55558.05592680986 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8748.08899516758,
            "unit": "ns/iter",
            "extra": "iterations: 80083\ncpu: 8747.31615948453 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8247.689150804534,
            "unit": "ns/iter",
            "extra": "iterations: 84845\ncpu: 8247.30037126524 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8946.237353986806,
            "unit": "ns/iter",
            "extra": "iterations: 78246\ncpu: 8945.751961761624 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4193.021673366327,
            "unit": "ns/iter",
            "extra": "iterations: 166933\ncpu: 4192.909730251059 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6097.779952121663,
            "unit": "ns/iter",
            "extra": "iterations: 114875\ncpu: 6097.757005440708 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 1710.7151615848766,
            "unit": "ns/iter",
            "extra": "iterations: 409878\ncpu: 1710.7235250489175 ns\nthreads: 1"
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
        "date": 1726530195114,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16364.715651164704,
            "unit": "ns/iter",
            "extra": "iterations: 43000\ncpu: 16364.505860465117 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6680.26612694258,
            "unit": "ns/iter",
            "extra": "iterations: 108080\ncpu: 6680.203589933382 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1790.84453885895,
            "unit": "ns/iter",
            "extra": "iterations: 390477\ncpu: 1790.828671086901 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 1643.993265622462,
            "unit": "ns/iter",
            "extra": "iterations: 426914\ncpu: 1643.932963079216 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 111880.5342641549,
            "unit": "ns/iter",
            "extra": "iterations: 6231\ncpu: 111875.43813192114 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 52150.24356597505,
            "unit": "ns/iter",
            "extra": "iterations: 13483\ncpu: 52147.71571608692 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8475.704196667853,
            "unit": "ns/iter",
            "extra": "iterations: 82494\ncpu: 8475.41175115766 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7949.837679352046,
            "unit": "ns/iter",
            "extra": "iterations: 88165\ncpu: 7949.5730051607825 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8648.111870313738,
            "unit": "ns/iter",
            "extra": "iterations: 80933\ncpu: 8647.258102380978 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4137.07083476383,
            "unit": "ns/iter",
            "extra": "iterations: 168886\ncpu: 4136.769323685794 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6383.5901105334015,
            "unit": "ns/iter",
            "extra": "iterations: 117883\ncpu: 6382.193963506189 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 1663.3221459494134,
            "unit": "ns/iter",
            "extra": "iterations: 422023\ncpu: 1663.255180404859 ns\nthreads: 1"
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
        "date": 1726531182381,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16421.91511158993,
            "unit": "ns/iter",
            "extra": "iterations: 42656\ncpu: 16420.99852306827 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6661.345692395457,
            "unit": "ns/iter",
            "extra": "iterations: 108854\ncpu: 6660.8280357175645 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1781.9400980551636,
            "unit": "ns/iter",
            "extra": "iterations: 392024\ncpu: 1781.8401551945801 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 1652.4360867711086,
            "unit": "ns/iter",
            "extra": "iterations: 424427\ncpu: 1652.3559269320758 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 112901.5113801437,
            "unit": "ns/iter",
            "extra": "iterations: 6195\ncpu: 112894.13849878934 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 52980.26901248326,
            "unit": "ns/iter",
            "extra": "iterations: 13215\ncpu: 52977.81551267496 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8452.999493139536,
            "unit": "ns/iter",
            "extra": "iterations: 82863\ncpu: 8452.4694616415 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 7918.159417671355,
            "unit": "ns/iter",
            "extra": "iterations: 88541\ncpu: 7917.654645870275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8660.196784073205,
            "unit": "ns/iter",
            "extra": "iterations: 80972\ncpu: 8659.576347379325 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4183.269841550406,
            "unit": "ns/iter",
            "extra": "iterations: 169518\ncpu: 4183.027678476624 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 5989.532055575493,
            "unit": "ns/iter",
            "extra": "iterations: 117967\ncpu: 5989.182813837765 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 1661.6891447290402,
            "unit": "ns/iter",
            "extra": "iterations: 423094\ncpu: 1661.5963332025526 ns\nthreads: 1"
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
        "date": 1726531977379,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16565.434060824122,
            "unit": "ns/iter",
            "extra": "iterations: 36564\ncpu: 16564.253774204135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6678.853178279034,
            "unit": "ns/iter",
            "extra": "iterations: 109037\ncpu: 6678.759650393902 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1889.6647225091783,
            "unit": "ns/iter",
            "extra": "iterations: 395887\ncpu: 1889.6306218693712 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 868.3611936509324,
            "unit": "ns/iter",
            "extra": "iterations: 811393\ncpu: 868.3548687257596 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 114592.56199547891,
            "unit": "ns/iter",
            "extra": "iterations: 6194\ncpu: 114590.18598643849 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 52827.79427793012,
            "unit": "ns/iter",
            "extra": "iterations: 13212\ncpu: 52823.93346957315 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8602.46395288738,
            "unit": "ns/iter",
            "extra": "iterations: 81338\ncpu: 8602.28037325727 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8047.682909750145,
            "unit": "ns/iter",
            "extra": "iterations: 87114\ncpu: 8047.480083568656 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8763.375446038732,
            "unit": "ns/iter",
            "extra": "iterations: 80150\ncpu: 8763.220823456013 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4212.329836892985,
            "unit": "ns/iter",
            "extra": "iterations: 165597\ncpu: 4212.161512587782 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6062.716165251205,
            "unit": "ns/iter",
            "extra": "iterations: 115606\ncpu: 6062.638972025684 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 877.330995449429,
            "unit": "ns/iter",
            "extra": "iterations: 801437\ncpu: 877.329199924636 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}