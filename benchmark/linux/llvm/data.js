window.BENCHMARK_DATA = {
  "lastUpdate": 1732306755824,
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
        "date": 1726567526913,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17363.39675363158,
            "unit": "ns/iter",
            "extra": "iterations: 40476\ncpu: 17362.783402510133 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7166.146206138026,
            "unit": "ns/iter",
            "extra": "iterations: 100030\ncpu: 7165.991312606219 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1867.9518477430809,
            "unit": "ns/iter",
            "extra": "iterations: 375891\ncpu: 1867.882920846735 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 923.1668171928796,
            "unit": "ns/iter",
            "extra": "iterations: 760665\ncpu: 923.1452452788014 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 116310.40697480271,
            "unit": "ns/iter",
            "extra": "iterations: 5993\ncpu: 116307.04021358251 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 55778.72085219884,
            "unit": "ns/iter",
            "extra": "iterations: 12814\ncpu: 55777.10527547993 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 9006.195378415192,
            "unit": "ns/iter",
            "extra": "iterations: 79410\ncpu: 9005.903677118753 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8241.687180635345,
            "unit": "ns/iter",
            "extra": "iterations: 84934\ncpu: 8241.52580827466 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8998.113288946635,
            "unit": "ns/iter",
            "extra": "iterations: 77651\ncpu: 8997.811502749477 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4398.260553796078,
            "unit": "ns/iter",
            "extra": "iterations: 159445\ncpu: 4398.122136159814 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6394.555096722367,
            "unit": "ns/iter",
            "extra": "iterations: 108972\ncpu: 6394.437561942521 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 927.9816460548135,
            "unit": "ns/iter",
            "extra": "iterations: 755151\ncpu: 927.9754247825921 ns\nthreads: 1"
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
        "date": 1726600139244,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17655.303614880777,
            "unit": "ns/iter",
            "extra": "iterations: 39863\ncpu: 17654.930286230334 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7173.284877640675,
            "unit": "ns/iter",
            "extra": "iterations: 100401\ncpu: 7173.134231730761 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1883.3037968887504,
            "unit": "ns/iter",
            "extra": "iterations: 371146\ncpu: 1883.1825588851823 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 946.1662966102728,
            "unit": "ns/iter",
            "extra": "iterations: 743130\ncpu: 946.1400306810385 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 117983.70471380395,
            "unit": "ns/iter",
            "extra": "iterations: 5940\ncpu: 117975.50050505053 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 56509.986760317646,
            "unit": "ns/iter",
            "extra": "iterations: 12387\ncpu: 56507.668927101 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8915.65890407357,
            "unit": "ns/iter",
            "extra": "iterations: 78582\ncpu: 8915.092692983126 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8332.387811864635,
            "unit": "ns/iter",
            "extra": "iterations: 84131\ncpu: 8332.085307437208 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9069.155591823404,
            "unit": "ns/iter",
            "extra": "iterations: 77202\ncpu: 9068.871790886247 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4470.470516431879,
            "unit": "ns/iter",
            "extra": "iterations: 157291\ncpu: 4470.279564628616 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6466.679900262881,
            "unit": "ns/iter",
            "extra": "iterations: 108285\ncpu: 6466.574077665407 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 945.1329429867546,
            "unit": "ns/iter",
            "extra": "iterations: 740197\ncpu: 945.0805420719072 ns\nthreads: 1"
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
        "date": 1726686518699,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17507.593048168976,
            "unit": "ns/iter",
            "extra": "iterations: 39673\ncpu: 17507.138582915337 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7102.927138608056,
            "unit": "ns/iter",
            "extra": "iterations: 99504\ncpu: 7102.650174867344 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1882.1279274919802,
            "unit": "ns/iter",
            "extra": "iterations: 371820\ncpu: 1882.0423242429135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 940.7125699223518,
            "unit": "ns/iter",
            "extra": "iterations: 760665\ncpu: 940.6999835670105 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 117575.58953352294,
            "unit": "ns/iter",
            "extra": "iterations: 5981\ncpu: 117573.48419996652 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 56353.14557270978,
            "unit": "ns/iter",
            "extra": "iterations: 12310\ncpu: 56350.07920389928 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8932.658228009925,
            "unit": "ns/iter",
            "extra": "iterations: 78172\ncpu: 8932.527106892492 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8371.570642025585,
            "unit": "ns/iter",
            "extra": "iterations: 83548\ncpu: 8370.906939723272 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9236.842580661645,
            "unit": "ns/iter",
            "extra": "iterations: 76833\ncpu: 9236.411815235651 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4506.874201018407,
            "unit": "ns/iter",
            "extra": "iterations: 155041\ncpu: 4506.694803310091 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6794.989569616111,
            "unit": "ns/iter",
            "extra": "iterations: 105557\ncpu: 6794.895118277337 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 930.4941029710817,
            "unit": "ns/iter",
            "extra": "iterations: 712647\ncpu: 930.4483018942055 ns\nthreads: 1"
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
        "date": 1726772935590,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17622.15276384375,
            "unit": "ns/iter",
            "extra": "iterations: 39872\ncpu: 17621.391252006422 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7201.924880643273,
            "unit": "ns/iter",
            "extra": "iterations: 96979\ncpu: 7201.6917270749345 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1884.9637652286672,
            "unit": "ns/iter",
            "extra": "iterations: 366416\ncpu: 1884.865925614602 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 930.7662615013575,
            "unit": "ns/iter",
            "extra": "iterations: 751545\ncpu: 930.6988310746528 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 118397.57731958288,
            "unit": "ns/iter",
            "extra": "iterations: 5917\ncpu: 118391.8037857022 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 56666.52663585636,
            "unit": "ns/iter",
            "extra": "iterations: 12333\ncpu: 56665.4921754642 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8939.674069069555,
            "unit": "ns/iter",
            "extra": "iterations: 78443\ncpu: 8939.585801154979 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8350.364653536628,
            "unit": "ns/iter",
            "extra": "iterations: 83833\ncpu: 8349.890544296402 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9095.559456929483,
            "unit": "ns/iter",
            "extra": "iterations: 76896\ncpu: 9095.352827195167 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4377.317329723787,
            "unit": "ns/iter",
            "extra": "iterations: 158860\ncpu: 4377.300245499182 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6459.5128915233645,
            "unit": "ns/iter",
            "extra": "iterations: 108327\ncpu: 6459.536846769502 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 931.279942922254,
            "unit": "ns/iter",
            "extra": "iterations: 754761\ncpu: 931.2647261848456 ns\nthreads: 1"
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
        "date": 1726819476054,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17499.673228443775,
            "unit": "ns/iter",
            "extra": "iterations: 40233\ncpu: 17499.35518107027 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7121.404012772704,
            "unit": "ns/iter",
            "extra": "iterations: 98336\ncpu: 7120.736332574034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1886.0917244683865,
            "unit": "ns/iter",
            "extra": "iterations: 371384\ncpu: 1885.8940557482279 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 940.6089170194338,
            "unit": "ns/iter",
            "extra": "iterations: 743993\ncpu: 940.5591181637463 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 118636.159471816,
            "unit": "ns/iter",
            "extra": "iterations: 5907\ncpu: 118624.52547824607 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 56498.00514634565,
            "unit": "ns/iter",
            "extra": "iterations: 12436\ncpu: 56497.538517208115 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8897.87955107443,
            "unit": "ns/iter",
            "extra": "iterations: 78855\ncpu: 8897.305674973053 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8318.1808392923,
            "unit": "ns/iter",
            "extra": "iterations: 84047\ncpu: 8317.283627018218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9087.507090640816,
            "unit": "ns/iter",
            "extra": "iterations: 77426\ncpu: 9086.785730891435 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4407.38807487667,
            "unit": "ns/iter",
            "extra": "iterations: 160317\ncpu: 4406.963952668771 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6476.737473269092,
            "unit": "ns/iter",
            "extra": "iterations: 108488\ncpu: 6476.2809896025365 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 951.0972755082219,
            "unit": "ns/iter",
            "extra": "iterations: 740762\ncpu: 951.0157769972003 ns\nthreads: 1"
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
        "date": 1726859329492,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17465.878144635702,
            "unit": "ns/iter",
            "extra": "iterations: 39949\ncpu: 17464.654884978347 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7198.2600568419,
            "unit": "ns/iter",
            "extra": "iterations: 100628\ncpu: 7198.193832730454 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1867.255710466343,
            "unit": "ns/iter",
            "extra": "iterations: 376633\ncpu: 1867.211168431869 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 926.3677955121477,
            "unit": "ns/iter",
            "extra": "iterations: 731662\ncpu: 926.3260070907063 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 117843.20006696664,
            "unit": "ns/iter",
            "extra": "iterations: 5973\ncpu: 117837.06847480328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 56206.14373947151,
            "unit": "ns/iter",
            "extra": "iterations: 12467\ncpu: 56202.625571508805 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8888.566142891264,
            "unit": "ns/iter",
            "extra": "iterations: 79487\ncpu: 8888.233509882126 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8298.622923882358,
            "unit": "ns/iter",
            "extra": "iterations: 84593\ncpu: 8298.391604506283 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9061.388736209678,
            "unit": "ns/iter",
            "extra": "iterations: 77505\ncpu: 9060.869182633382 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4359.574845139478,
            "unit": "ns/iter",
            "extra": "iterations: 160144\ncpu: 4359.420777550206 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6434.2419305479425,
            "unit": "ns/iter",
            "extra": "iterations: 107845\ncpu: 6433.948926700357 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 934.4368031538927,
            "unit": "ns/iter",
            "extra": "iterations: 753843\ncpu: 934.3962416577456 ns\nthreads: 1"
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
        "date": 1726937138063,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17729.26830192477,
            "unit": "ns/iter",
            "extra": "iterations: 39586\ncpu: 17727.23798817764 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7261.3480942746755,
            "unit": "ns/iter",
            "extra": "iterations: 97758\ncpu: 7261.1235704494775 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1890.6649045435702,
            "unit": "ns/iter",
            "extra": "iterations: 370954\ncpu: 1890.5795139019926 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 939.6359202409514,
            "unit": "ns/iter",
            "extra": "iterations: 752868\ncpu: 939.5643432846125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 117619.84888216267,
            "unit": "ns/iter",
            "extra": "iterations: 5949\ncpu: 117608.23129937812 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 56933.87480755148,
            "unit": "ns/iter",
            "extra": "iterations: 12341\ncpu: 56932.16181832919 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8867.753292506675,
            "unit": "ns/iter",
            "extra": "iterations: 79195\ncpu: 8867.545716269957 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8324.24364604875,
            "unit": "ns/iter",
            "extra": "iterations: 84475\ncpu: 8324.083977508135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9051.317487531707,
            "unit": "ns/iter",
            "extra": "iterations: 76992\ncpu: 9051.173979114716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4481.3812133993815,
            "unit": "ns/iter",
            "extra": "iterations: 157442\ncpu: 4481.294832382717 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6437.8655236800505,
            "unit": "ns/iter",
            "extra": "iterations: 109246\ncpu: 6437.674651703494 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 939.7475171753259,
            "unit": "ns/iter",
            "extra": "iterations: 743508\ncpu: 939.7403888055 ns\nthreads: 1"
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
        "date": 1726940981625,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17473.13042500601,
            "unit": "ns/iter",
            "extra": "iterations: 40023\ncpu: 17472.278489868324 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7151.661607241466,
            "unit": "ns/iter",
            "extra": "iterations: 99089\ncpu: 7151.38196974437 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1871.9930645663264,
            "unit": "ns/iter",
            "extra": "iterations: 373012\ncpu: 1871.98314263348 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 913.8141543562224,
            "unit": "ns/iter",
            "extra": "iterations: 767368\ncpu: 913.7685373901433 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 116654.19890054557,
            "unit": "ns/iter",
            "extra": "iterations: 6003\ncpu: 116644.14692653684 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 56400.19112325901,
            "unit": "ns/iter",
            "extra": "iterations: 12437\ncpu: 56396.23068264045 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8824.030131541012,
            "unit": "ns/iter",
            "extra": "iterations: 78987\ncpu: 8823.492359502192 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8291.825763694877,
            "unit": "ns/iter",
            "extra": "iterations: 84196\ncpu: 8291.786189367667 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9005.2868175228,
            "unit": "ns/iter",
            "extra": "iterations: 77823\ncpu: 9005.154632949132 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4378.716357634848,
            "unit": "ns/iter",
            "extra": "iterations: 159962\ncpu: 4378.64599092285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6435.050026566147,
            "unit": "ns/iter",
            "extra": "iterations: 109162\ncpu: 6435.00310547625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 923.3524514876088,
            "unit": "ns/iter",
            "extra": "iterations: 758825\ncpu: 923.2882904490493 ns\nthreads: 1"
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
        "date": 1727115685181,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17226.7991384629,
            "unit": "ns/iter",
            "extra": "iterations: 40625\ncpu: 17225.94631384615 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6930.780995242423,
            "unit": "ns/iter",
            "extra": "iterations: 101322\ncpu: 6930.24900811275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1898.85531812982,
            "unit": "ns/iter",
            "extra": "iterations: 367413\ncpu: 1898.6835958444585 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 896.6698709328912,
            "unit": "ns/iter",
            "extra": "iterations: 780834\ncpu: 896.6300980746224 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 119697.23220339169,
            "unit": "ns/iter",
            "extra": "iterations: 5900\ncpu: 119692.44610169489 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 55761.39679645209,
            "unit": "ns/iter",
            "extra": "iterations: 12611\ncpu: 55758.954404884644 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8855.576460826605,
            "unit": "ns/iter",
            "extra": "iterations: 79544\ncpu: 8854.987478628182 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8294.245323154393,
            "unit": "ns/iter",
            "extra": "iterations: 84619\ncpu: 8293.490528131977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8993.832075520568,
            "unit": "ns/iter",
            "extra": "iterations: 77648\ncpu: 8993.251184834124 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4218.882254376694,
            "unit": "ns/iter",
            "extra": "iterations: 165314\ncpu: 4218.512001403392 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6185.4943527212645,
            "unit": "ns/iter",
            "extra": "iterations: 113506\ncpu: 6185.048781562208 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 896.2427334868452,
            "unit": "ns/iter",
            "extra": "iterations: 777849\ncpu: 896.2135671576367 ns\nthreads: 1"
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
        "date": 1727117581209,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16863.505879494653,
            "unit": "ns/iter",
            "extra": "iterations: 41160\ncpu: 16861.481000971813 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7199.058394685412,
            "unit": "ns/iter",
            "extra": "iterations: 97389\ncpu: 7198.3120064894365 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1852.8524072799921,
            "unit": "ns/iter",
            "extra": "iterations: 378020\ncpu: 1852.7974551611032 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 891.923311106897,
            "unit": "ns/iter",
            "extra": "iterations: 787350\ncpu: 891.9039169365598 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 115605.86972176732,
            "unit": "ns/iter",
            "extra": "iterations: 6110\ncpu: 115604.70965630129 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 54210.99690330504,
            "unit": "ns/iter",
            "extra": "iterations: 12917\ncpu: 54208.245103352165 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8922.170623599046,
            "unit": "ns/iter",
            "extra": "iterations: 78512\ncpu: 8921.753133278986 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8399.559822729583,
            "unit": "ns/iter",
            "extra": "iterations: 83714\ncpu: 8399.36879136106 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9076.201339938718,
            "unit": "ns/iter",
            "extra": "iterations: 77317\ncpu: 9075.986031532535 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4320.309868513465,
            "unit": "ns/iter",
            "extra": "iterations: 164047\ncpu: 4320.16925027583 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6347.999564858741,
            "unit": "ns/iter",
            "extra": "iterations: 110309\ncpu: 6347.94145536629 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 896.0627892339013,
            "unit": "ns/iter",
            "extra": "iterations: 784832\ncpu: 896.05098288551 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 7179.903897025245,
            "unit": "ns/iter",
            "extra": "iterations: 98665\ncpu: 7179.709218061114 ns\nthreads: 1"
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
        "date": 1727117975975,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16831.147837377677,
            "unit": "ns/iter",
            "extra": "iterations: 41593\ncpu: 16830.198999831704 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7189.715674586635,
            "unit": "ns/iter",
            "extra": "iterations: 97304\ncpu: 7189.030450957826 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1869.5197613246444,
            "unit": "ns/iter",
            "extra": "iterations: 375405\ncpu: 1869.343658182497 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 879.5656586390148,
            "unit": "ns/iter",
            "extra": "iterations: 794092\ncpu: 879.5100341018424 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 114992.3894667318,
            "unit": "ns/iter",
            "extra": "iterations: 6057\ncpu: 114986.24302459974 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 54351.78155940554,
            "unit": "ns/iter",
            "extra": "iterations: 12928\ncpu: 54351.703975866316 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8920.810515910778,
            "unit": "ns/iter",
            "extra": "iterations: 78909\ncpu: 8920.798413362229 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8267.909707548517,
            "unit": "ns/iter",
            "extra": "iterations: 83296\ncpu: 8267.469578371112 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9046.09541965046,
            "unit": "ns/iter",
            "extra": "iterations: 77374\ncpu: 9045.782446299783 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4265.247413010994,
            "unit": "ns/iter",
            "extra": "iterations: 164187\ncpu: 4265.039284474406 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6337.08336567396,
            "unit": "ns/iter",
            "extra": "iterations: 110801\ncpu: 6336.845885867442 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 888.9569721266382,
            "unit": "ns/iter",
            "extra": "iterations: 791975\ncpu: 888.9038934309813 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 7177.144633135105,
            "unit": "ns/iter",
            "extra": "iterations: 98456\ncpu: 7176.829812301943 ns\nthreads: 1"
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
        "date": 1727119005110,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17053.12537694987,
            "unit": "ns/iter",
            "extra": "iterations: 41451\ncpu: 17051.81206726014 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7162.285303154954,
            "unit": "ns/iter",
            "extra": "iterations: 97640\ncpu: 7162.111491192134 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1848.608004231017,
            "unit": "ns/iter",
            "extra": "iterations: 378175\ncpu: 1848.6007932835328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 892.6423514809288,
            "unit": "ns/iter",
            "extra": "iterations: 786381\ncpu: 892.6394750127478 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 115070.04306141274,
            "unit": "ns/iter",
            "extra": "iterations: 6154\ncpu: 115066.58303542412 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 53819.66158677206,
            "unit": "ns/iter",
            "extra": "iterations: 13058\ncpu: 53818.99081023124 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8841.84646274041,
            "unit": "ns/iter",
            "extra": "iterations: 79440\ncpu: 8841.694171701909 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8253.44892226762,
            "unit": "ns/iter",
            "extra": "iterations: 85086\ncpu: 8253.501151775856 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8976.59859551926,
            "unit": "ns/iter",
            "extra": "iterations: 78036\ncpu: 8976.405210415702 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4225.448252915678,
            "unit": "ns/iter",
            "extra": "iterations: 165304\ncpu: 4225.435754730685 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6273.220299647581,
            "unit": "ns/iter",
            "extra": "iterations: 111598\ncpu: 6273.135414613159 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 892.5204786849945,
            "unit": "ns/iter",
            "extra": "iterations: 789162\ncpu: 892.4970867831964 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 7110.603608817619,
            "unit": "ns/iter",
            "extra": "iterations: 98481\ncpu: 7110.580568840695 ns\nthreads: 1"
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
        "date": 1727119782787,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17483.282801788875,
            "unit": "ns/iter",
            "extra": "iterations: 40417\ncpu: 17482.56646955489 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7195.048809720544,
            "unit": "ns/iter",
            "extra": "iterations: 96784\ncpu: 7195.012264423871 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1895.3667848804628,
            "unit": "ns/iter",
            "extra": "iterations: 369669\ncpu: 1895.3217959850556 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 914.0628615885564,
            "unit": "ns/iter",
            "extra": "iterations: 768657\ncpu: 914.0383070732456 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 124998.01222754786,
            "unit": "ns/iter",
            "extra": "iterations: 5643\ncpu: 124996.21229842282 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 56330.434278857196,
            "unit": "ns/iter",
            "extra": "iterations: 12515\ncpu: 56326.640351578164 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 9155.152472527303,
            "unit": "ns/iter",
            "extra": "iterations: 76440\ncpu: 9154.994858712716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8585.703742796806,
            "unit": "ns/iter",
            "extra": "iterations: 82425\ncpu: 8585.288650288137 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9397.634789258145,
            "unit": "ns/iter",
            "extra": "iterations: 74546\ncpu: 9397.35135352667 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2237.873632379703,
            "unit": "ns/iter",
            "extra": "iterations: 313775\ncpu: 2237.8270193610115 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6525.520940086395,
            "unit": "ns/iter",
            "extra": "iterations: 107139\ncpu: 6525.40786268305 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 922.0790979757547,
            "unit": "ns/iter",
            "extra": "iterations: 757984\ncpu: 922.0602083948995 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 2373.3122994832643,
            "unit": "ns/iter",
            "extra": "iterations: 295175\ncpu: 2373.1877665791503 ns\nthreads: 1"
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
        "date": 1727135913509,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17448.961043854946,
            "unit": "ns/iter",
            "extra": "iterations: 39814\ncpu: 17447.149444918872 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7362.299809591901,
            "unit": "ns/iter",
            "extra": "iterations: 95584\ncpu: 7362.00933210579 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1906.3441609754127,
            "unit": "ns/iter",
            "extra": "iterations: 368255\ncpu: 1906.1867999076737 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 901.6233118061654,
            "unit": "ns/iter",
            "extra": "iterations: 779013\ncpu: 901.5729750337927 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 122640.35836533767,
            "unit": "ns/iter",
            "extra": "iterations: 5726\ncpu: 122637.02759343348 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 55565.221394025335,
            "unit": "ns/iter",
            "extra": "iterations: 12611\ncpu: 55560.11926096266 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 9042.232493180058,
            "unit": "ns/iter",
            "extra": "iterations: 76970\ncpu: 9041.7563206444 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8450.501657205046,
            "unit": "ns/iter",
            "extra": "iterations: 82971\ncpu: 8450.194477588562 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9303.827800063273,
            "unit": "ns/iter",
            "extra": "iterations: 75784\ncpu: 9303.527578380648 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2217.409278589301,
            "unit": "ns/iter",
            "extra": "iterations: 315091\ncpu: 2217.2788972074736 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6556.357033974928,
            "unit": "ns/iter",
            "extra": "iterations: 106931\ncpu: 6556.1758517174685 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 904.6588827129658,
            "unit": "ns/iter",
            "extra": "iterations: 780623\ncpu: 904.6239093646993 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 2329.6338506222396,
            "unit": "ns/iter",
            "extra": "iterations: 300219\ncpu: 2329.4743637144898 ns\nthreads: 1"
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
        "date": 1727140937412,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17513.881490546453,
            "unit": "ns/iter",
            "extra": "iterations: 40039\ncpu: 17513.254027323357 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7374.187667588759,
            "unit": "ns/iter",
            "extra": "iterations: 94726\ncpu: 7373.721787048965 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1911.4322541933395,
            "unit": "ns/iter",
            "extra": "iterations: 366650\ncpu: 1911.3561243692898 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 914.9494039437831,
            "unit": "ns/iter",
            "extra": "iterations: 767629\ncpu: 914.8927906579878 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 125058.93131673573,
            "unit": "ns/iter",
            "extra": "iterations: 5620\ncpu: 125050.6268683274 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 55962.29267127581,
            "unit": "ns/iter",
            "extra": "iterations: 12567\ncpu: 55957.09103206809 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 9097.86273847822,
            "unit": "ns/iter",
            "extra": "iterations: 76999\ncpu: 9097.489759607275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8468.095230033985,
            "unit": "ns/iter",
            "extra": "iterations: 82705\ncpu: 8467.657759506683 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9241.711428533104,
            "unit": "ns/iter",
            "extra": "iterations: 75399\ncpu: 9241.019151447632 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2233.357278704449,
            "unit": "ns/iter",
            "extra": "iterations: 312851\ncpu: 2233.2327593646824 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6525.558567469087,
            "unit": "ns/iter",
            "extra": "iterations: 107167\ncpu: 6525.167029029457 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 922.0075132843752,
            "unit": "ns/iter",
            "extra": "iterations: 759721\ncpu: 921.9454168043267 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 2333.48699917988,
            "unit": "ns/iter",
            "extra": "iterations: 300058\ncpu: 2333.4323497457167 ns\nthreads: 1"
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
        "date": 1727141650801,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17830.63363587419,
            "unit": "ns/iter",
            "extra": "iterations: 38893\ncpu: 17829.047797804236 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7357.249488924075,
            "unit": "ns/iter",
            "extra": "iterations: 94898\ncpu: 7357.250721827648 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1946.8599382627167,
            "unit": "ns/iter",
            "extra": "iterations: 358292\ncpu: 1946.829454746408 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 933.7844425956488,
            "unit": "ns/iter",
            "extra": "iterations: 753609\ncpu: 933.7538869626021 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 128815.45720555854,
            "unit": "ns/iter",
            "extra": "iterations: 5468\ncpu: 128811.92538405271 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 58650.52337466545,
            "unit": "ns/iter",
            "extra": "iterations: 11936\ncpu: 58646.879356568345 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 9128.045008023284,
            "unit": "ns/iter",
            "extra": "iterations: 76653\ncpu: 9127.796511552064 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8598.81486943213,
            "unit": "ns/iter",
            "extra": "iterations: 81375\ncpu: 8598.501185867903 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9327.066425185236,
            "unit": "ns/iter",
            "extra": "iterations: 75092\ncpu: 9326.350316944541 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2250.944425014007,
            "unit": "ns/iter",
            "extra": "iterations: 311651\ncpu: 2250.785413812247 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6367.831038787098,
            "unit": "ns/iter",
            "extra": "iterations: 109753\ncpu: 6367.276721365254 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 937.5000006718183,
            "unit": "ns/iter",
            "extra": "iterations: 744235\ncpu: 937.4943801353065 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 2381.9592857532057,
            "unit": "ns/iter",
            "extra": "iterations: 294688\ncpu: 2381.929511890543 ns\nthreads: 1"
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
        "date": 1727188669290,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18117.328437038475,
            "unit": "ns/iter",
            "extra": "iterations: 38056\ncpu: 18116.51949758251 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7550.194105362479,
            "unit": "ns/iter",
            "extra": "iterations: 92898\ncpu: 7548.781147064522 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1975.247637643153,
            "unit": "ns/iter",
            "extra": "iterations: 354413\ncpu: 1974.968598781647 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 940.4755358926374,
            "unit": "ns/iter",
            "extra": "iterations: 742966\ncpu: 940.417373069562 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 129573.5609305829,
            "unit": "ns/iter",
            "extra": "iterations: 5416\ncpu: 129565.69054652874 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 59672.32288136051,
            "unit": "ns/iter",
            "extra": "iterations: 11800\ncpu: 59671.152966101676 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 9297.454348893783,
            "unit": "ns/iter",
            "extra": "iterations: 75387\ncpu: 9297.38323583642 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8718.150421707756,
            "unit": "ns/iter",
            "extra": "iterations: 79676\ncpu: 8717.637870877054 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9478.14312788529,
            "unit": "ns/iter",
            "extra": "iterations: 73871\ncpu: 9477.811752920628 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2309.396357328653,
            "unit": "ns/iter",
            "extra": "iterations: 303239\ncpu: 2309.1781861831755 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6546.365751734318,
            "unit": "ns/iter",
            "extra": "iterations: 106966\ncpu: 6546.033674251646 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 953.8600791411726,
            "unit": "ns/iter",
            "extra": "iterations: 738932\ncpu: 953.8296081371475 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 2411.5252071884497,
            "unit": "ns/iter",
            "extra": "iterations: 291643\ncpu: 2411.470894209705 ns\nthreads: 1"
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
        "date": 1727189650148,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18114.635272296644,
            "unit": "ns/iter",
            "extra": "iterations: 38818\ncpu: 18114.294708640322 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7379.399304347091,
            "unit": "ns/iter",
            "extra": "iterations: 94875\ncpu: 7379.123667984189 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1964.2327069487524,
            "unit": "ns/iter",
            "extra": "iterations: 355692\ncpu: 1964.1790144282131 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 936.744641833017,
            "unit": "ns/iter",
            "extra": "iterations: 749790\ncpu: 936.7328678696709 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 129171.16081978969,
            "unit": "ns/iter",
            "extra": "iterations: 5416\ncpu: 129168.84342688335 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 58563.002494801694,
            "unit": "ns/iter",
            "extra": "iterations: 12025\ncpu: 58560.0306029106 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 9330.635535337233,
            "unit": "ns/iter",
            "extra": "iterations: 76279\ncpu: 9330.532531889505 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8638.025616055906,
            "unit": "ns/iter",
            "extra": "iterations: 81121\ncpu: 8637.755722932403 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9358.440682741848,
            "unit": "ns/iter",
            "extra": "iterations: 74523\ncpu: 9357.905532520159 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2227.2427807147974,
            "unit": "ns/iter",
            "extra": "iterations: 314955\ncpu: 2227.2076360114975 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6423.6735528085865,
            "unit": "ns/iter",
            "extra": "iterations: 108866\ncpu: 6423.398177576106 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 941.8743331841155,
            "unit": "ns/iter",
            "extra": "iterations: 746458\ncpu: 941.8043895302862 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 2357.993505314636,
            "unit": "ns/iter",
            "extra": "iterations: 297474\ncpu: 2357.9280306850387 ns\nthreads: 1"
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
        "date": 1727191020546,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18219.147273242947,
            "unit": "ns/iter",
            "extra": "iterations: 38819\ncpu: 18217.762023751253 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7378.473889539978,
            "unit": "ns/iter",
            "extra": "iterations: 93047\ncpu: 7378.331843047064 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 2007.6590755570267,
            "unit": "ns/iter",
            "extra": "iterations: 356777\ncpu: 2007.6202810158727 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 936.6128427949651,
            "unit": "ns/iter",
            "extra": "iterations: 752126\ncpu: 936.6020307767583 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 129182.54151426879,
            "unit": "ns/iter",
            "extra": "iterations: 5468\ncpu: 129176.92538405278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 58891.83030251829,
            "unit": "ns/iter",
            "extra": "iterations: 11933\ncpu: 58890.05069974023 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 9206.894957156484,
            "unit": "ns/iter",
            "extra": "iterations: 76207\ncpu: 9206.499061765975 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8660.706439254596,
            "unit": "ns/iter",
            "extra": "iterations: 81438\ncpu: 8660.517927748713 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9402.917186037264,
            "unit": "ns/iter",
            "extra": "iterations: 74770\ncpu: 9402.749926441087 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2255.5966025826565,
            "unit": "ns/iter",
            "extra": "iterations: 310530\ncpu: 2255.4951598879356 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6516.083139523981,
            "unit": "ns/iter",
            "extra": "iterations: 107494\ncpu: 6515.595093679651 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 935.9989385589521,
            "unit": "ns/iter",
            "extra": "iterations: 750866\ncpu: 935.9794091089498 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 2371.9389311165246,
            "unit": "ns/iter",
            "extra": "iterations: 294962\ncpu: 2371.869139075541 ns\nthreads: 1"
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
        "date": 1727200202242,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17942.862532378767,
            "unit": "ns/iter",
            "extra": "iterations: 38991\ncpu: 17941.942294375618 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7586.719189604292,
            "unit": "ns/iter",
            "extra": "iterations: 95114\ncpu: 7586.676114977814 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1973.22972006335,
            "unit": "ns/iter",
            "extra": "iterations: 355080\ncpu: 1973.223115917539 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 950.9750912100974,
            "unit": "ns/iter",
            "extra": "iterations: 742790\ncpu: 950.9416416483799 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 128685.71720487766,
            "unit": "ns/iter",
            "extra": "iterations: 5481\ncpu: 128676.60992519613 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 58662.66658327177,
            "unit": "ns/iter",
            "extra": "iterations: 11991\ncpu: 58658.24384955382 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 9181.336454595747,
            "unit": "ns/iter",
            "extra": "iterations: 76358\ncpu: 9180.735823358395 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8623.346908364903,
            "unit": "ns/iter",
            "extra": "iterations: 81203\ncpu: 8623.306811324708 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9363.0869135407,
            "unit": "ns/iter",
            "extra": "iterations: 74856\ncpu: 9362.765990702148 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2280.294952520905,
            "unit": "ns/iter",
            "extra": "iterations: 305083\ncpu: 2280.14956257805 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6540.797484007804,
            "unit": "ns/iter",
            "extra": "iterations: 107552\ncpu: 6540.592132177914 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 952.1822463931935,
            "unit": "ns/iter",
            "extra": "iterations: 732009\ncpu: 952.1375638824119 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 2402.628936532027,
            "unit": "ns/iter",
            "extra": "iterations: 291659\ncpu: 2402.543713720476 ns\nthreads: 1"
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
        "date": 1727204191094,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16969.40386571674,
            "unit": "ns/iter",
            "extra": "iterations: 40303\ncpu: 16968.94102176017 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6316.814136761349,
            "unit": "ns/iter",
            "extra": "iterations: 111157\ncpu: 6316.702025063649 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1843.0826832341972,
            "unit": "ns/iter",
            "extra": "iterations: 384044\ncpu: 1843.044268365083 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 911.7470444855292,
            "unit": "ns/iter",
            "extra": "iterations: 772116\ncpu: 911.7203762129003 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 118245.53647777437,
            "unit": "ns/iter",
            "extra": "iterations: 5894\ncpu: 118245.79708177815 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 54153.03328161264,
            "unit": "ns/iter",
            "extra": "iterations: 12890\ncpu: 54153.144840962006 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8656.356156282007,
            "unit": "ns/iter",
            "extra": "iterations: 81161\ncpu: 8655.880595359838 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8100.713853683042,
            "unit": "ns/iter",
            "extra": "iterations: 86634\ncpu: 8100.378523443456 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8786.44792137407,
            "unit": "ns/iter",
            "extra": "iterations: 79668\ncpu: 8786.278016267512 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2147.2468371541595,
            "unit": "ns/iter",
            "extra": "iterations: 325498\ncpu: 2147.210879943965 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6041.541694980157,
            "unit": "ns/iter",
            "extra": "iterations: 114786\ncpu: 6041.396372379919 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 908.848709863979,
            "unit": "ns/iter",
            "extra": "iterations: 774492\ncpu: 908.7953058262688 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 2280.5242343494624,
            "unit": "ns/iter",
            "extra": "iterations: 307353\ncpu: 2280.50244832489 ns\nthreads: 1"
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
        "date": 1727204942170,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17058.76736754783,
            "unit": "ns/iter",
            "extra": "iterations: 40996\ncpu: 17057.916772368033 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6303.386085778532,
            "unit": "ns/iter",
            "extra": "iterations: 110750\ncpu: 6303.00936343115 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1828.9796225700106,
            "unit": "ns/iter",
            "extra": "iterations: 379832\ncpu: 1828.8574290739064 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 911.7843782735797,
            "unit": "ns/iter",
            "extra": "iterations: 770363\ncpu: 911.7471685426227 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 119147.3176510436,
            "unit": "ns/iter",
            "extra": "iterations: 5909\ncpu: 119138.22998815356 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 54365.198795647855,
            "unit": "ns/iter",
            "extra": "iterations: 12953\ncpu: 54362.14143441673 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 8667.219806793446,
            "unit": "ns/iter",
            "extra": "iterations: 81053\ncpu: 8666.966725475933 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8120.969615906273,
            "unit": "ns/iter",
            "extra": "iterations: 85604\ncpu: 8120.449254707724 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 8819.854685668899,
            "unit": "ns/iter",
            "extra": "iterations: 79359\ncpu: 8819.5246789904 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2143.3305726739213,
            "unit": "ns/iter",
            "extra": "iterations: 326975\ncpu: 2143.17092744094 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6054.730728033001,
            "unit": "ns/iter",
            "extra": "iterations: 115764\ncpu: 6054.477825576176 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 913.868942790063,
            "unit": "ns/iter",
            "extra": "iterations: 768939\ncpu: 913.8234632396073 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 2288.492950228722,
            "unit": "ns/iter",
            "extra": "iterations: 311003\ncpu: 2288.493847326229 ns\nthreads: 1"
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
        "date": 1727207873332,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18509.77049094612,
            "unit": "ns/iter",
            "extra": "iterations: 38273\ncpu: 18509.147963316173 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7284.257429865209,
            "unit": "ns/iter",
            "extra": "iterations: 96065\ncpu: 7284.261801904959 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1916.330547294335,
            "unit": "ns/iter",
            "extra": "iterations: 367188\ncpu: 1916.2419360109798 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 971.0989601012524,
            "unit": "ns/iter",
            "extra": "iterations: 727667\ncpu: 971.0938162648574 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 125481.25530767707,
            "unit": "ns/iter",
            "extra": "iterations: 5558\ncpu: 125472.33015473187 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 56938.0150443197,
            "unit": "ns/iter",
            "extra": "iterations: 12297\ncpu: 56937.13938358949 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 9199.40942554872,
            "unit": "ns/iter",
            "extra": "iterations: 76473\ncpu: 9199.536163090248 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8607.751496783581,
            "unit": "ns/iter",
            "extra": "iterations: 80840\ncpu: 8607.075841167745 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9726.168509209003,
            "unit": "ns/iter",
            "extra": "iterations: 74987\ncpu: 9725.662368143798 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2207.0602924068735,
            "unit": "ns/iter",
            "extra": "iterations: 318050\ncpu: 2207.0348027039763 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6521.448017019788,
            "unit": "ns/iter",
            "extra": "iterations: 107641\ncpu: 6520.8129337334285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 976.759720210506,
            "unit": "ns/iter",
            "extra": "iterations: 723544\ncpu: 976.7203971009374 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 2340.1737916855827,
            "unit": "ns/iter",
            "extra": "iterations: 300584\ncpu: 2340.128223724482 ns\nthreads: 1"
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
        "date": 1727208901197,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 17903.62954255202,
            "unit": "ns/iter",
            "extra": "iterations: 39130\ncpu: 17902.372016355734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 6652.145705989608,
            "unit": "ns/iter",
            "extra": "iterations: 104704\ncpu: 6651.710631876525 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1926.2716972508333,
            "unit": "ns/iter",
            "extra": "iterations: 363099\ncpu: 1926.2747955791665 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 986.5946861101723,
            "unit": "ns/iter",
            "extra": "iterations: 708784\ncpu: 986.589316350256 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 126883.79793590456,
            "unit": "ns/iter",
            "extra": "iterations: 5523\ncpu: 126881.1082744885 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 57555.00969756544,
            "unit": "ns/iter",
            "extra": "iterations: 12168\ncpu: 57554.08127876396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 9005.9852474526,
            "unit": "ns/iter",
            "extra": "iterations: 77207\ncpu: 9005.65137876099 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8487.417441789683,
            "unit": "ns/iter",
            "extra": "iterations: 82675\ncpu: 8487.155863320228 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9186.733850706172,
            "unit": "ns/iter",
            "extra": "iterations: 76025\ncpu: 9186.455205524491 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2283.3169950626675,
            "unit": "ns/iter",
            "extra": "iterations: 306642\ncpu: 2283.3222780962765 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6280.779433949226,
            "unit": "ns/iter",
            "extra": "iterations: 111368\ncpu: 6280.382255225916 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 1011.9653303747596,
            "unit": "ns/iter",
            "extra": "iterations: 701219\ncpu: 1011.929514174602 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 2401.3185859915557,
            "unit": "ns/iter",
            "extra": "iterations: 290267\ncpu: 2401.1967705595202 ns\nthreads: 1"
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
        "date": 1727212746266,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18344.51478284128,
            "unit": "ns/iter",
            "extra": "iterations: 37645\ncpu: 18343.01035994156 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7234.259747901612,
            "unit": "ns/iter",
            "extra": "iterations: 96867\ncpu: 7233.7414702633505 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1906.6417616710378,
            "unit": "ns/iter",
            "extra": "iterations: 367878\ncpu: 1906.5578642919663 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 985.496726396572,
            "unit": "ns/iter",
            "extra": "iterations: 710532\ncpu: 985.4517206825305 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 125051.78761378219,
            "unit": "ns/iter",
            "extra": "iterations: 5603\ncpu: 125049.78922006073 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 55920.84695263252,
            "unit": "ns/iter",
            "extra": "iterations: 12519\ncpu: 55919.93977154721 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 9107.38878541154,
            "unit": "ns/iter",
            "extra": "iterations: 76775\ncpu: 9107.266636274826 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8531.660694371412,
            "unit": "ns/iter",
            "extra": "iterations: 81599\ncpu: 8531.511697447271 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9323.222975402889,
            "unit": "ns/iter",
            "extra": "iterations: 75089\ncpu: 9323.079026222218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2200.5786648154763,
            "unit": "ns/iter",
            "extra": "iterations: 318338\ncpu: 2200.5252310437336 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6361.638415921463,
            "unit": "ns/iter",
            "extra": "iterations: 109944\ncpu: 6361.591210070586 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 986.8271999954138,
            "unit": "ns/iter",
            "extra": "iterations: 701956\ncpu: 986.8143245445589 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 2338.2478573363433,
            "unit": "ns/iter",
            "extra": "iterations: 299277\ncpu: 2338.20032611928 ns\nthreads: 1"
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
        "date": 1727216253670,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2097.5552826674348,
            "unit": "ns/iter",
            "extra": "iterations: 328584\ncpu: 2097.5309844666813 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18304.17174766033,
            "unit": "ns/iter",
            "extra": "iterations: 36443\ncpu: 18302.503443734047 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7007.487634977536,
            "unit": "ns/iter",
            "extra": "iterations: 100202\ncpu: 7007.034151014948 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1924.8332839157113,
            "unit": "ns/iter",
            "extra": "iterations: 364242\ncpu: 1924.7364911240327 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 983.1747772784797,
            "unit": "ns/iter",
            "extra": "iterations: 710304\ncpu: 983.1728738680902 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 124972.34558430462,
            "unit": "ns/iter",
            "extra": "iterations: 5605\ncpu: 124969.79357716315 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 56022.757690144805,
            "unit": "ns/iter",
            "extra": "iterations: 12451\ncpu: 56017.97614649426 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 9196.191170492762,
            "unit": "ns/iter",
            "extra": "iterations: 76267\ncpu: 9195.453931582468 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8642.066774181185,
            "unit": "ns/iter",
            "extra": "iterations: 81229\ncpu: 8641.328023242928 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9369.03349025569,
            "unit": "ns/iter",
            "extra": "iterations: 74559\ncpu: 9368.710028299738 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2218.940475585874,
            "unit": "ns/iter",
            "extra": "iterations: 314980\ncpu: 2218.8929519334533 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6501.223564029535,
            "unit": "ns/iter",
            "extra": "iterations: 107732\ncpu: 6500.741386032008 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 992.4525350969881,
            "unit": "ns/iter",
            "extra": "iterations: 701413\ncpu: 992.3674325967712 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 2349.2392161754437,
            "unit": "ns/iter",
            "extra": "iterations: 296648\ncpu: 2349.030072678733 ns\nthreads: 1"
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
        "date": 1727279237714,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2114.330056948876,
            "unit": "ns/iter",
            "extra": "iterations: 328716\ncpu: 2114.2944030713443 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18393.466732133566,
            "unit": "ns/iter",
            "extra": "iterations: 37679\ncpu: 18392.18631067703 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 7022.640901594242,
            "unit": "ns/iter",
            "extra": "iterations: 100045\ncpu: 7022.562346943878 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 1927.165945694412,
            "unit": "ns/iter",
            "extra": "iterations: 363167\ncpu: 1927.070391858291 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 981.7546391753106,
            "unit": "ns/iter",
            "extra": "iterations: 711495\ncpu: 981.7587572646321 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 124854.5201857779,
            "unit": "ns/iter",
            "extra": "iterations: 5598\ncpu: 124853.55841371923 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 55919.5670012791,
            "unit": "ns/iter",
            "extra": "iterations: 12552\ncpu: 55917.02182919058 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 9171.521730049702,
            "unit": "ns/iter",
            "extra": "iterations: 76599\ncpu: 9171.424626953352 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 8615.71106690683,
            "unit": "ns/iter",
            "extra": "iterations: 81441\ncpu: 8614.828685797074 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 9386.291883773329,
            "unit": "ns/iter",
            "extra": "iterations: 75232\ncpu: 9386.206481284571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2199.8966241531675,
            "unit": "ns/iter",
            "extra": "iterations: 317076\ncpu: 2199.8526441610193 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 6458.832649163489,
            "unit": "ns/iter",
            "extra": "iterations: 108891\ncpu: 6458.550017907802 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 991.0448979707129,
            "unit": "ns/iter",
            "extra": "iterations: 707003\ncpu: 991.0312869959533 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 2338.3269284015746,
            "unit": "ns/iter",
            "extra": "iterations: 299769\ncpu: 2338.2013950742053 ns\nthreads: 1"
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
        "date": 1727281134405,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2132.128916594841,
            "unit": "ns/iter",
            "extra": "iterations: 329655\ncpu: 2132.053292078082 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 997.4042756559057,
            "unit": "ns/iter",
            "extra": "iterations: 688409\ncpu: 997.3418578199877 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1423.1510442700317,
            "unit": "ns/iter",
            "extra": "iterations: 492114\ncpu: 1423.0480417139117 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 183.65467104640268,
            "unit": "ns/iter",
            "extra": "iterations: 3805111\ncpu: 183.65498036719563 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 141.53835273933188,
            "unit": "ns/iter",
            "extra": "iterations: 4947013\ncpu: 141.53867839037417 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3359.1723497032062,
            "unit": "ns/iter",
            "extra": "iterations: 208222\ncpu: 3359.06960359616 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1551.9117036392745,
            "unit": "ns/iter",
            "extra": "iterations: 451774\ncpu: 1551.886927977263 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1838.2122643107598,
            "unit": "ns/iter",
            "extra": "iterations: 383715\ncpu: 1838.1689613384954 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1490.6055732598431,
            "unit": "ns/iter",
            "extra": "iterations: 464109\ncpu: 1490.5329394603402 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1933.4481316843728,
            "unit": "ns/iter",
            "extra": "iterations: 367363\ncpu: 1933.3169943625248 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 449.27018116026096,
            "unit": "ns/iter",
            "extra": "iterations: 1566845\ncpu: 449.2710453171828 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2495.69231704887,
            "unit": "ns/iter",
            "extra": "iterations: 279528\ncpu: 2495.675027188686 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 144.30862395140807,
            "unit": "ns/iter",
            "extra": "iterations: 4862539\ncpu: 144.3090441022686 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 537.8564337002589,
            "unit": "ns/iter",
            "extra": "iterations: 1301747\ncpu: 537.8514980253457 ns\nthreads: 1"
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
        "date": 1727282455294,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2131.996079478792,
            "unit": "ns/iter",
            "extra": "iterations: 329548\ncpu: 2131.937195795453 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1106.1759666891287,
            "unit": "ns/iter",
            "extra": "iterations: 637149\ncpu: 1106.1740770212302 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1486.1461699576323,
            "unit": "ns/iter",
            "extra": "iterations: 471718\ncpu: 1486.0542951509171 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 185.47139204601035,
            "unit": "ns/iter",
            "extra": "iterations: 3773496\ncpu: 185.46477086500153 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 139.61690180432768,
            "unit": "ns/iter",
            "extra": "iterations: 4966878\ncpu: 139.61334745890667 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3689.148277554768,
            "unit": "ns/iter",
            "extra": "iterations: 189469\ncpu: 3689.103721453114 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1593.359255501689,
            "unit": "ns/iter",
            "extra": "iterations: 439598\ncpu: 1593.2842142138963 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1869.0602119976509,
            "unit": "ns/iter",
            "extra": "iterations: 374344\ncpu: 1869.0034807556694 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1540.4262861228333,
            "unit": "ns/iter",
            "extra": "iterations: 455769\ncpu: 1540.3761554647217 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1958.2534562857047,
            "unit": "ns/iter",
            "extra": "iterations: 356886\ncpu: 1958.1675212813016 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 450.38154514931176,
            "unit": "ns/iter",
            "extra": "iterations: 1551397\ncpu: 450.3750735627299 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2472.019266636156,
            "unit": "ns/iter",
            "extra": "iterations: 284170\ncpu: 2471.9746067494802 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 142.69877057801764,
            "unit": "ns/iter",
            "extra": "iterations: 4944600\ncpu: 142.6964239776725 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 533.5123821015048,
            "unit": "ns/iter",
            "extra": "iterations: 1312782\ncpu: 533.4986182016509 ns\nthreads: 1"
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
        "date": 1727282814219,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2112.625941146819,
            "unit": "ns/iter",
            "extra": "iterations: 327526\ncpu: 2112.5162704640247 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1002.6358161707736,
            "unit": "ns/iter",
            "extra": "iterations: 701912\ncpu: 1002.5749552650475 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1411.9824721096993,
            "unit": "ns/iter",
            "extra": "iterations: 497664\ncpu: 1411.8264230484824 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 189.80658682537234,
            "unit": "ns/iter",
            "extra": "iterations: 3687148\ncpu: 189.79567866546174 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 148.31472324386587,
            "unit": "ns/iter",
            "extra": "iterations: 4728170\ncpu: 148.30345440202012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3366.3812677982482,
            "unit": "ns/iter",
            "extra": "iterations: 206831\ncpu: 3366.1991819408095 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1544.8266895334777,
            "unit": "ns/iter",
            "extra": "iterations: 453054\ncpu: 1544.7431299580182 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1823.4231398288075,
            "unit": "ns/iter",
            "extra": "iterations: 386416\ncpu: 1823.2813806881693 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1523.6127023286117,
            "unit": "ns/iter",
            "extra": "iterations: 462923\ncpu: 1523.4986574441111 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1897.4481088960322,
            "unit": "ns/iter",
            "extra": "iterations: 364311\ncpu: 1897.2927498757892 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 451.7429394131599,
            "unit": "ns/iter",
            "extra": "iterations: 1513826\ncpu: 451.71057241717335 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2501.536865981299,
            "unit": "ns/iter",
            "extra": "iterations: 280394\ncpu: 2501.3920233671192 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 152.54389064540518,
            "unit": "ns/iter",
            "extra": "iterations: 4711938\ncpu: 152.53489477153553 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 531.2805564051502,
            "unit": "ns/iter",
            "extra": "iterations: 1311059\ncpu: 531.2607624828476 ns\nthreads: 1"
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
        "date": 1727295783344,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2131.042032529541,
            "unit": "ns/iter",
            "extra": "iterations: 330839\ncpu: 2131.0172349692753 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1004.6856948272055,
            "unit": "ns/iter",
            "extra": "iterations: 695986\ncpu: 1004.6443319262169 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1411.8289492783842,
            "unit": "ns/iter",
            "extra": "iterations: 496040\ncpu: 1411.7892972340942 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 185.5575195810847,
            "unit": "ns/iter",
            "extra": "iterations: 3769073\ncpu: 185.54824621332628 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 140.67538593137724,
            "unit": "ns/iter",
            "extra": "iterations: 4982492\ncpu: 140.66851406886354 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3411.2338831822926,
            "unit": "ns/iter",
            "extra": "iterations: 205996\ncpu: 3411.1587215285717 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1577.9646434109536,
            "unit": "ns/iter",
            "extra": "iterations: 448205\ncpu: 1577.8687944132691 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1813.128261958529,
            "unit": "ns/iter",
            "extra": "iterations: 385313\ncpu: 1813.0551655407407 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1509.1672422512165,
            "unit": "ns/iter",
            "extra": "iterations: 466772\ncpu: 1509.0845102105527 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1896.0242936330721,
            "unit": "ns/iter",
            "extra": "iterations: 367833\ncpu: 1895.924868078717 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 450.65968886060256,
            "unit": "ns/iter",
            "extra": "iterations: 1560137\ncpu: 450.63298928235184 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2400.2750285552784,
            "unit": "ns/iter",
            "extra": "iterations: 291537\ncpu: 2400.102134548961 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 143.09462151433317,
            "unit": "ns/iter",
            "extra": "iterations: 4906474\ncpu: 143.08486807430342 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 532.8575455738255,
            "unit": "ns/iter",
            "extra": "iterations: 1312869\ncpu: 532.811886029756 ns\nthreads: 1"
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
        "date": 1727297526274,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2213.992684368799,
            "unit": "ns/iter",
            "extra": "iterations: 316309\ncpu: 2213.836308799307 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1090.6767849435885,
            "unit": "ns/iter",
            "extra": "iterations: 634726\ncpu: 1090.6165573806647 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1558.0877834082296,
            "unit": "ns/iter",
            "extra": "iterations: 445779\ncpu: 1558.0881176547125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 184.5433527656933,
            "unit": "ns/iter",
            "extra": "iterations: 3794187\ncpu: 184.54031469719328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 139.97002536100567,
            "unit": "ns/iter",
            "extra": "iterations: 5004931\ncpu: 139.96713960691957 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3736.442045516167,
            "unit": "ns/iter",
            "extra": "iterations: 185870\ncpu: 3736.3819336095094 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1718.5927112144755,
            "unit": "ns/iter",
            "extra": "iterations: 409643\ncpu: 1718.57977067837 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1819.2140137963602,
            "unit": "ns/iter",
            "extra": "iterations: 384307\ncpu: 1819.1793514039573 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1512.9239059416832,
            "unit": "ns/iter",
            "extra": "iterations: 463755\ncpu: 1512.8592295500882 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1982.8009720887253,
            "unit": "ns/iter",
            "extra": "iterations: 363547\ncpu: 1982.7999680921594 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 480.31563950914534,
            "unit": "ns/iter",
            "extra": "iterations: 1450167\ncpu: 480.30205762508814 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2477.957483047249,
            "unit": "ns/iter",
            "extra": "iterations: 282993\ncpu: 2477.90701183421 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 142.68838171074304,
            "unit": "ns/iter",
            "extra": "iterations: 4911971\ncpu: 142.68462578463885 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 595.0669323906039,
            "unit": "ns/iter",
            "extra": "iterations: 1178667\ncpu: 595.066943419982 ns\nthreads: 1"
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
        "date": 1727299326716,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2212.323817286608,
            "unit": "ns/iter",
            "extra": "iterations: 317744\ncpu: 2212.2180403091797 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1029.2126311533807,
            "unit": "ns/iter",
            "extra": "iterations: 697466\ncpu: 1029.076263215698 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1465.2929875380237,
            "unit": "ns/iter",
            "extra": "iterations: 477778\ncpu: 1465.1545529513708 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 189.5851989563073,
            "unit": "ns/iter",
            "extra": "iterations: 3832500\ncpu: 189.57040782778876 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 141.12070929472128,
            "unit": "ns/iter",
            "extra": "iterations: 5045237\ncpu: 141.11392388504245 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3754.6097736522443,
            "unit": "ns/iter",
            "extra": "iterations: 186174\ncpu: 3754.3224134411926 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1635.067777303278,
            "unit": "ns/iter",
            "extra": "iterations: 428403\ncpu: 1634.8819919561718 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1805.370393036829,
            "unit": "ns/iter",
            "extra": "iterations: 388895\ncpu: 1805.3666336671868 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1519.0502704002377,
            "unit": "ns/iter",
            "extra": "iterations: 461723\ncpu: 1519.0011955219927 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1898.5303116638042,
            "unit": "ns/iter",
            "extra": "iterations: 370303\ncpu: 1898.5055508597034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 486.9726825325229,
            "unit": "ns/iter",
            "extra": "iterations: 1440031\ncpu: 486.92741614590244 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2433.2512305544033,
            "unit": "ns/iter",
            "extra": "iterations: 288691\ncpu: 2433.1861505900793 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 143.84402073746656,
            "unit": "ns/iter",
            "extra": "iterations: 4873494\ncpu: 143.83851565222017 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 604.6959006075584,
            "unit": "ns/iter",
            "extra": "iterations: 1157513\ncpu: 604.6599260656253 ns\nthreads: 1"
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
        "date": 1727300276394,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2204.6894298371444,
            "unit": "ns/iter",
            "extra": "iterations: 324574\ncpu: 2204.5926907269222 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1007.0193179516453,
            "unit": "ns/iter",
            "extra": "iterations: 690860\ncpu: 1006.9702660452192 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1473.1749402277549,
            "unit": "ns/iter",
            "extra": "iterations: 479318\ncpu: 1473.09581947684 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 184.73751753530934,
            "unit": "ns/iter",
            "extra": "iterations: 3778801\ncpu: 184.72990136289272 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 141.2666718272027,
            "unit": "ns/iter",
            "extra": "iterations: 4960734\ncpu: 141.25767194935273 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3790.1114466910267,
            "unit": "ns/iter",
            "extra": "iterations: 185748\ncpu: 3789.9727910933098 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1658.9712020999784,
            "unit": "ns/iter",
            "extra": "iterations: 423642\ncpu: 1658.9080520817101 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1818.2883797326058,
            "unit": "ns/iter",
            "extra": "iterations: 382943\ncpu: 1818.1828131079562 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1505.308019863152,
            "unit": "ns/iter",
            "extra": "iterations: 464983\ncpu: 1505.1838583346084 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1896.1828641301702,
            "unit": "ns/iter",
            "extra": "iterations: 363915\ncpu: 1896.0945825261376 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 487.61885213937103,
            "unit": "ns/iter",
            "extra": "iterations: 1436028\ncpu: 487.60028286356544 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2521.983447255951,
            "unit": "ns/iter",
            "extra": "iterations: 277235\ncpu: 2521.8278860894134 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 150.51094873026636,
            "unit": "ns/iter",
            "extra": "iterations: 4717031\ncpu: 150.4995858623782 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 612.6606420025564,
            "unit": "ns/iter",
            "extra": "iterations: 1156413\ncpu: 612.627837113558 ns\nthreads: 1"
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
        "date": 1727301198037,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2189.631022962659,
            "unit": "ns/iter",
            "extra": "iterations: 306805\ncpu: 2189.535248773651 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 982.8141771160689,
            "unit": "ns/iter",
            "extra": "iterations: 710483\ncpu: 982.8171004795329 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1474.6587189617485,
            "unit": "ns/iter",
            "extra": "iterations: 474896\ncpu: 1474.621466594791 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 187.64190254910815,
            "unit": "ns/iter",
            "extra": "iterations: 3734947\ncpu: 187.6341629479615 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 139.15099253362638,
            "unit": "ns/iter",
            "extra": "iterations: 5033633\ncpu: 139.14461582717675 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3986.602958396424,
            "unit": "ns/iter",
            "extra": "iterations: 174216\ncpu: 3986.520692703307 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1656.1143311073006,
            "unit": "ns/iter",
            "extra": "iterations: 423603\ncpu: 1656.0025826068274 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1867.6806610956673,
            "unit": "ns/iter",
            "extra": "iterations: 382819\ncpu: 1867.6171062564806 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1515.40576045886,
            "unit": "ns/iter",
            "extra": "iterations: 460380\ncpu: 1515.3034189148077 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1900.9602629544563,
            "unit": "ns/iter",
            "extra": "iterations: 367516\ncpu: 1900.86590787884 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 477.2050529812852,
            "unit": "ns/iter",
            "extra": "iterations: 1464007\ncpu: 477.17870406357304 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2381.822896122225,
            "unit": "ns/iter",
            "extra": "iterations: 294076\ncpu: 2381.7682333818493 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 143.45575389585431,
            "unit": "ns/iter",
            "extra": "iterations: 4896691\ncpu: 143.45040313958953 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 591.6615250096582,
            "unit": "ns/iter",
            "extra": "iterations: 1182563\ncpu: 591.6405476917516 ns\nthreads: 1"
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
        "date": 1727366542576,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2242.3404728422897,
            "unit": "ns/iter",
            "extra": "iterations: 319303\ncpu: 2242.1881191219627 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1024.0818009623476,
            "unit": "ns/iter",
            "extra": "iterations: 696361\ncpu: 1023.9889066159647 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1467.0516154030843,
            "unit": "ns/iter",
            "extra": "iterations: 477435\ncpu: 1466.812378648402 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 188.81124901292407,
            "unit": "ns/iter",
            "extra": "iterations: 3710370\ncpu: 188.7896913245848 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 139.0529209374271,
            "unit": "ns/iter",
            "extra": "iterations: 5048191\ncpu: 139.04491826874215 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 4000.2663173567516,
            "unit": "ns/iter",
            "extra": "iterations: 174630\ncpu: 4000.0627898986468 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1656.18166776354,
            "unit": "ns/iter",
            "extra": "iterations: 425480\ncpu: 1656.041548368901 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1816.2059861476612,
            "unit": "ns/iter",
            "extra": "iterations: 386793\ncpu: 1816.0762940384147 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1500.468629320034,
            "unit": "ns/iter",
            "extra": "iterations: 466885\ncpu: 1500.425899311394 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1894.132977790391,
            "unit": "ns/iter",
            "extra": "iterations: 370513\ncpu: 1894.1259847832557 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 478.04856311488686,
            "unit": "ns/iter",
            "extra": "iterations: 1465392\ncpu: 478.03924478910795 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2433.174608128521,
            "unit": "ns/iter",
            "extra": "iterations: 285170\ncpu: 2433.12672441 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 142.4092275544837,
            "unit": "ns/iter",
            "extra": "iterations: 4923493\ncpu: 142.40753993150796 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 585.2662230994526,
            "unit": "ns/iter",
            "extra": "iterations: 1196812\ncpu: 585.2586730413793 ns\nthreads: 1"
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
        "date": 1727368544462,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2223.111277678457,
            "unit": "ns/iter",
            "extra": "iterations: 314187\ncpu: 2223.008109819948 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1012.2786353872871,
            "unit": "ns/iter",
            "extra": "iterations: 692299\ncpu: 1012.198542826149 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1504.229325841784,
            "unit": "ns/iter",
            "extra": "iterations: 465944\ncpu: 1504.172016379651 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 187.41592435733148,
            "unit": "ns/iter",
            "extra": "iterations: 3732496\ncpu: 187.41257271273705 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 134.21051418083755,
            "unit": "ns/iter",
            "extra": "iterations: 5213302\ncpu: 134.20514675727586 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3836.4320060271616,
            "unit": "ns/iter",
            "extra": "iterations: 181847\ncpu: 3836.436867256541 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1666.7664923312263,
            "unit": "ns/iter",
            "extra": "iterations: 425425\ncpu: 1666.7035505670797 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1818.2698623053286,
            "unit": "ns/iter",
            "extra": "iterations: 384837\ncpu: 1818.2397716435778 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1499.8986059636072,
            "unit": "ns/iter",
            "extra": "iterations: 464909\ncpu: 1499.7811657765285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1908.9566886781033,
            "unit": "ns/iter",
            "extra": "iterations: 369049\ncpu: 1908.871244739857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 487.88694380477585,
            "unit": "ns/iter",
            "extra": "iterations: 1489967\ncpu: 487.87678183476555 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2456.537389389212,
            "unit": "ns/iter",
            "extra": "iterations: 285121\ncpu: 2456.5161598058394 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 134.2780791916241,
            "unit": "ns/iter",
            "extra": "iterations: 5216158\ncpu: 134.27650983731704 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 611.276689615143,
            "unit": "ns/iter",
            "extra": "iterations: 1143722\ncpu: 611.2770480938551 ns\nthreads: 1"
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
        "date": 1727377727381,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2241.3283146301537,
            "unit": "ns/iter",
            "extra": "iterations: 306188\ncpu: 2241.2568846590984 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1005.5684731007326,
            "unit": "ns/iter",
            "extra": "iterations: 694499\ncpu: 1005.5468172020406 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1488.6194712117156,
            "unit": "ns/iter",
            "extra": "iterations: 465744\ncpu: 1488.593300182074 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 186.5854209619465,
            "unit": "ns/iter",
            "extra": "iterations: 3742963\ncpu: 186.57766026541006 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.55409846920793,
            "unit": "ns/iter",
            "extra": "iterations: 5376178\ncpu: 130.54391800271486 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3824.2480702133867,
            "unit": "ns/iter",
            "extra": "iterations: 183440\ncpu: 3824.0482064980383 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1643.8048097360154,
            "unit": "ns/iter",
            "extra": "iterations: 426302\ncpu: 1643.6676088782121 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1845.931319735384,
            "unit": "ns/iter",
            "extra": "iterations: 380546\ncpu: 1845.8115707430877 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1526.1918020092642,
            "unit": "ns/iter",
            "extra": "iterations: 459698\ncpu: 1526.1009967413406 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1930.900116368445,
            "unit": "ns/iter",
            "extra": "iterations: 362642\ncpu: 1930.763664991917 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 490.78247906119407,
            "unit": "ns/iter",
            "extra": "iterations: 1426419\ncpu: 490.73845553094856 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2484.1494444881373,
            "unit": "ns/iter",
            "extra": "iterations: 279562\ncpu: 2484.015563631684 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 134.26219110109773,
            "unit": "ns/iter",
            "extra": "iterations: 5219750\ncpu: 134.2523682168684 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 624.5269750797502,
            "unit": "ns/iter",
            "extra": "iterations: 1129524\ncpu: 624.4826572963477 ns\nthreads: 1"
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
        "date": 1727464235976,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2206.4082153360355,
            "unit": "ns/iter",
            "extra": "iterations: 308058\ncpu: 2206.2466418661425 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1018.4028046232205,
            "unit": "ns/iter",
            "extra": "iterations: 691715\ncpu: 1018.3418980360409 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1497.2009575513164,
            "unit": "ns/iter",
            "extra": "iterations: 468069\ncpu: 1497.078093187115 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 186.91182109825394,
            "unit": "ns/iter",
            "extra": "iterations: 3724950\ncpu: 186.9043702600035 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 131.11298114351445,
            "unit": "ns/iter",
            "extra": "iterations: 5330686\ncpu: 131.1113312620553 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3821.28439187436,
            "unit": "ns/iter",
            "extra": "iterations: 182783\ncpu: 3821.2017802530863 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1632.0164624656593,
            "unit": "ns/iter",
            "extra": "iterations: 429887\ncpu: 1631.950638190966 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1810.1260432907889,
            "unit": "ns/iter",
            "extra": "iterations: 385439\ncpu: 1810.05450927384 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1502.796665826327,
            "unit": "ns/iter",
            "extra": "iterations: 464103\ncpu: 1502.697396914046 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1879.9309426765174,
            "unit": "ns/iter",
            "extra": "iterations: 370721\ncpu: 1879.7457090372538 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 487.36498666391947,
            "unit": "ns/iter",
            "extra": "iterations: 1435573\ncpu: 487.3502768580909 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2431.7071696380503,
            "unit": "ns/iter",
            "extra": "iterations: 287518\ncpu: 2431.6757559526727 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 136.38769007960585,
            "unit": "ns/iter",
            "extra": "iterations: 5276671\ncpu: 136.37891276526446 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 611.7731004968144,
            "unit": "ns/iter",
            "extra": "iterations: 1111567\ncpu: 611.7197415900256 ns\nthreads: 1"
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
        "date": 1727704908663,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2225.699485778161,
            "unit": "ns/iter",
            "extra": "iterations: 319123\ncpu: 2225.59217292392 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 991.0886244723707,
            "unit": "ns/iter",
            "extra": "iterations: 712512\ncpu: 991.0236178478394 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1459.7742008450148,
            "unit": "ns/iter",
            "extra": "iterations: 477473\ncpu: 1459.7059310159948 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 187.17217337599763,
            "unit": "ns/iter",
            "extra": "iterations: 3740195\ncpu: 187.1624081097377 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 131.2613364673794,
            "unit": "ns/iter",
            "extra": "iterations: 5330695\ncpu: 131.2553963413777 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 4051.588492533037,
            "unit": "ns/iter",
            "extra": "iterations: 173105\ncpu: 4051.4171456630397 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1669.1988523363116,
            "unit": "ns/iter",
            "extra": "iterations: 416324\ncpu: 1669.097585053948 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1794.0591905598935,
            "unit": "ns/iter",
            "extra": "iterations: 388812\ncpu: 1793.9979167309664 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1482.3629125395819,
            "unit": "ns/iter",
            "extra": "iterations: 466713\ncpu: 1482.3105248836027 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1869.556042632596,
            "unit": "ns/iter",
            "extra": "iterations: 368639\ncpu: 1869.5184882771507 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 476.51339470529064,
            "unit": "ns/iter",
            "extra": "iterations: 1463862\ncpu: 476.50344909561113 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2406.764741687121,
            "unit": "ns/iter",
            "extra": "iterations: 290791\ncpu: 2406.7261951023233 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 135.1643600817821,
            "unit": "ns/iter",
            "extra": "iterations: 5248452\ncpu: 135.15192022333457 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 588.0538853239505,
            "unit": "ns/iter",
            "extra": "iterations: 1172991\ncpu: 588.0484343017137 ns\nthreads: 1"
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
        "date": 1727706178779,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2223.0350812749675,
            "unit": "ns/iter",
            "extra": "iterations: 313073\ncpu: 2222.9621813442873 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 987.5790380749788,
            "unit": "ns/iter",
            "extra": "iterations: 707893\ncpu: 987.5501212753904 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1482.721258970154,
            "unit": "ns/iter",
            "extra": "iterations: 480202\ncpu: 1482.6991536894893 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 188.27152685620126,
            "unit": "ns/iter",
            "extra": "iterations: 3736809\ncpu: 188.2686963663384 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.1686379741355,
            "unit": "ns/iter",
            "extra": "iterations: 5376381\ncpu: 130.16441673311473 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 4071.8876011383522,
            "unit": "ns/iter",
            "extra": "iterations: 174637\ncpu: 4071.8275279579975 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1672.0075578987967,
            "unit": "ns/iter",
            "extra": "iterations: 417841\ncpu: 1671.954363023256 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1812.7109084193783,
            "unit": "ns/iter",
            "extra": "iterations: 387123\ncpu: 1812.6414498751053 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1487.5665973895225,
            "unit": "ns/iter",
            "extra": "iterations: 465281\ncpu: 1487.4987545160866 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1879.9114341214529,
            "unit": "ns/iter",
            "extra": "iterations: 373225\ncpu: 1879.8691566749249 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 478.08043668740413,
            "unit": "ns/iter",
            "extra": "iterations: 1469976\ncpu: 478.07329235307225 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2407.580008166353,
            "unit": "ns/iter",
            "extra": "iterations: 291439\ncpu: 2407.5435888813786 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 133.36662496604103,
            "unit": "ns/iter",
            "extra": "iterations: 5178979\ncpu: 133.36130171603324 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 589.6203991413344,
            "unit": "ns/iter",
            "extra": "iterations: 1193011\ncpu: 589.6115802788077 ns\nthreads: 1"
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
        "date": 1727723338301,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2327.997323040879,
            "unit": "ns/iter",
            "extra": "iterations: 301835\ncpu: 2327.9419782331406 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 990.4459979368731,
            "unit": "ns/iter",
            "extra": "iterations: 688270\ncpu: 990.4209438156541 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1453.480300711252,
            "unit": "ns/iter",
            "extra": "iterations: 480195\ncpu: 1453.4099188871194 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 185.42481384864175,
            "unit": "ns/iter",
            "extra": "iterations: 3778914\ncpu: 185.421441186542 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.313723413134,
            "unit": "ns/iter",
            "extra": "iterations: 5343095\ncpu: 130.31013485629592 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3976.499037910039,
            "unit": "ns/iter",
            "extra": "iterations: 176179\ncpu: 3976.2162403010593 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1638.5858344797552,
            "unit": "ns/iter",
            "extra": "iterations: 427404\ncpu: 1638.465618010126 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1823.6530235210928,
            "unit": "ns/iter",
            "extra": "iterations: 385395\ncpu: 1823.5556740487043 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1496.996955889232,
            "unit": "ns/iter",
            "extra": "iterations: 467460\ncpu: 1496.9132139648332 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1945.8279016688632,
            "unit": "ns/iter",
            "extra": "iterations: 368917\ncpu: 1945.711219596821 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 477.6546002030464,
            "unit": "ns/iter",
            "extra": "iterations: 1467870\ncpu: 477.6263899391636 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2405.4801096024776,
            "unit": "ns/iter",
            "extra": "iterations: 290140\ncpu: 2405.380302612535 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 135.33661490669874,
            "unit": "ns/iter",
            "extra": "iterations: 5225339\ncpu: 135.32973726680675 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 590.9049531559143,
            "unit": "ns/iter",
            "extra": "iterations: 1195884\ncpu: 590.8864680855337 ns\nthreads: 1"
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
        "date": 1727809722109,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2197.9802136278126,
            "unit": "ns/iter",
            "extra": "iterations: 319715\ncpu: 2197.9430086170496 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 984.7419636447057,
            "unit": "ns/iter",
            "extra": "iterations: 696460\ncpu: 984.7204448209515 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1454.384605562834,
            "unit": "ns/iter",
            "extra": "iterations: 477744\ncpu: 1454.360755969724 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 186.7458948638384,
            "unit": "ns/iter",
            "extra": "iterations: 3742994\ncpu: 186.7460252407565 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.15522810436826,
            "unit": "ns/iter",
            "extra": "iterations: 5395885\ncpu: 130.15169392972606 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3988.1887259253094,
            "unit": "ns/iter",
            "extra": "iterations: 174613\ncpu: 3988.1932502161935 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1666.2790832401138,
            "unit": "ns/iter",
            "extra": "iterations: 421179\ncpu: 1666.2245767239122 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1806.9630565928883,
            "unit": "ns/iter",
            "extra": "iterations: 388053\ncpu: 1806.9264816919335 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1503.0060460959266,
            "unit": "ns/iter",
            "extra": "iterations: 469890\ncpu: 1502.9413288216392 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1896.6713091020358,
            "unit": "ns/iter",
            "extra": "iterations: 370567\ncpu: 1896.594880278059 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 478.0626681255584,
            "unit": "ns/iter",
            "extra": "iterations: 1465051\ncpu: 478.05897269105265 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2430.41237896272,
            "unit": "ns/iter",
            "extra": "iterations: 291026\ncpu: 2430.3871337956016 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 133.39050145382456,
            "unit": "ns/iter",
            "extra": "iterations: 5254741\ncpu: 133.3884857502966 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 592.8110966374273,
            "unit": "ns/iter",
            "extra": "iterations: 1190667\ncpu: 592.7866481560345 ns\nthreads: 1"
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
        "date": 1727809936789,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2193.0842380091403,
            "unit": "ns/iter",
            "extra": "iterations: 317517\ncpu: 2193.022704296148 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1019.2404255380422,
            "unit": "ns/iter",
            "extra": "iterations: 683276\ncpu: 1019.1691190675513 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1464.707013687473,
            "unit": "ns/iter",
            "extra": "iterations: 481316\ncpu: 1464.5882559482757 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 192.29148182114832,
            "unit": "ns/iter",
            "extra": "iterations: 3741187\ncpu: 192.28433248591963 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 129.88640373597056,
            "unit": "ns/iter",
            "extra": "iterations: 5401322\ncpu: 129.8859318144706 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3994.8445338973816,
            "unit": "ns/iter",
            "extra": "iterations: 175884\ncpu: 3994.720992244892 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1626.712119274877,
            "unit": "ns/iter",
            "extra": "iterations: 430199\ncpu: 1626.6744994758237 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1813.8750012828318,
            "unit": "ns/iter",
            "extra": "iterations: 389772\ncpu: 1813.8217265478256 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1508.295249786346,
            "unit": "ns/iter",
            "extra": "iterations: 468400\ncpu: 1508.2458198121265 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1903.539757838582,
            "unit": "ns/iter",
            "extra": "iterations: 368267\ncpu: 1903.4554412966656 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 478.50753862412444,
            "unit": "ns/iter",
            "extra": "iterations: 1460744\ncpu: 478.48648976138213 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2409.683687066416,
            "unit": "ns/iter",
            "extra": "iterations: 291180\ncpu: 2409.599062435605 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 133.23896856345857,
            "unit": "ns/iter",
            "extra": "iterations: 5251084\ncpu: 133.23677739681915 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 587.3613739811592,
            "unit": "ns/iter",
            "extra": "iterations: 1167032\ncpu: 587.339009555865 ns\nthreads: 1"
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
        "date": 1727814144828,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2256.379032703579,
            "unit": "ns/iter",
            "extra": "iterations: 307765\ncpu: 2256.251110425162 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 992.22644269089,
            "unit": "ns/iter",
            "extra": "iterations: 709005\ncpu: 992.1670651123758 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1610.6367007040435,
            "unit": "ns/iter",
            "extra": "iterations: 437463\ncpu: 1610.5562184687617 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 183.20220457347997,
            "unit": "ns/iter",
            "extra": "iterations: 3797560\ncpu: 183.19494859857375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 131.07745816375248,
            "unit": "ns/iter",
            "extra": "iterations: 5243721\ncpu: 131.07637839618087 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 4015.683879883415,
            "unit": "ns/iter",
            "extra": "iterations: 173665\ncpu: 4015.545786427894 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1649.237357712511,
            "unit": "ns/iter",
            "extra": "iterations: 424844\ncpu: 1649.2040513694433 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1818.655872918433,
            "unit": "ns/iter",
            "extra": "iterations: 384698\ncpu: 1818.5728935424659 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1497.4154347222764,
            "unit": "ns/iter",
            "extra": "iterations: 468230\ncpu: 1497.3795399696753 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1915.5809400292135,
            "unit": "ns/iter",
            "extra": "iterations: 368563\ncpu: 1915.5126504830941 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 477.52081377323725,
            "unit": "ns/iter",
            "extra": "iterations: 1465568\ncpu: 477.51661335400354 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2413.2860228653362,
            "unit": "ns/iter",
            "extra": "iterations: 289344\ncpu: 2413.181731779474 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 134.39009194046642,
            "unit": "ns/iter",
            "extra": "iterations: 5223707\ncpu: 134.38897855488443 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 593.4383092658466,
            "unit": "ns/iter",
            "extra": "iterations: 1179464\ncpu: 593.4210616008634 ns\nthreads: 1"
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
        "date": 1727819175456,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2148.8474051148046,
            "unit": "ns/iter",
            "extra": "iterations: 318569\ncpu: 2148.840816275281 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1002.8766258074784,
            "unit": "ns/iter",
            "extra": "iterations: 710570\ncpu: 1002.8399158422109 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1608.1321940231708,
            "unit": "ns/iter",
            "extra": "iterations: 438628\ncpu: 1608.111488550663 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 184.21259432817956,
            "unit": "ns/iter",
            "extra": "iterations: 3782274\ncpu: 184.2034754753359 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.9760835463606,
            "unit": "ns/iter",
            "extra": "iterations: 5349748\ncpu: 130.97438645708166 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 4006.7963419951507,
            "unit": "ns/iter",
            "extra": "iterations: 174248\ncpu: 4006.575197419773 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1642.673096911866,
            "unit": "ns/iter",
            "extra": "iterations: 423312\ncpu: 1642.5524790225643 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1875.967675962389,
            "unit": "ns/iter",
            "extra": "iterations: 383832\ncpu: 1875.9365633923164 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1499.1094764969992,
            "unit": "ns/iter",
            "extra": "iterations: 466301\ncpu: 1499.072704111724 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1914.5957129199103,
            "unit": "ns/iter",
            "extra": "iterations: 367103\ncpu: 1914.5154384464286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 478.768395048248,
            "unit": "ns/iter",
            "extra": "iterations: 1463315\ncpu: 478.76196512712573 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2410.585668505682,
            "unit": "ns/iter",
            "extra": "iterations: 288023\ncpu: 2410.554191852731 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 134.06263398835694,
            "unit": "ns/iter",
            "extra": "iterations: 5233197\ncpu: 134.06233971318107 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 593.8181815869281,
            "unit": "ns/iter",
            "extra": "iterations: 1179413\ncpu: 593.8042119257635 ns\nthreads: 1"
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
        "date": 1727887696248,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2188.548960645495,
            "unit": "ns/iter",
            "extra": "iterations: 293307\ncpu: 2188.431189845452 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1010.9054084275766,
            "unit": "ns/iter",
            "extra": "iterations: 693085\ncpu: 1010.8478310741103 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1620.7127829172293,
            "unit": "ns/iter",
            "extra": "iterations: 429675\ncpu: 1620.6993145982428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 188.48091057558395,
            "unit": "ns/iter",
            "extra": "iterations: 3697178\ncpu: 188.47626730441436 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 131.78161892874246,
            "unit": "ns/iter",
            "extra": "iterations: 5311747\ncpu: 131.77895295088416 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3789.171711774973,
            "unit": "ns/iter",
            "extra": "iterations: 183412\ncpu: 3789.144919634482 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1638.010330038332,
            "unit": "ns/iter",
            "extra": "iterations: 424587\ncpu: 1637.9965354568083 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1823.7685905624733,
            "unit": "ns/iter",
            "extra": "iterations: 387495\ncpu: 1823.688687595969 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1506.135697596145,
            "unit": "ns/iter",
            "extra": "iterations: 449809\ncpu: 1506.0417777323264 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1896.311758061517,
            "unit": "ns/iter",
            "extra": "iterations: 371830\ncpu: 1896.2259204475122 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 501.8294699999615,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 501.7949469999987 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2394.7782214005492,
            "unit": "ns/iter",
            "extra": "iterations: 288283\ncpu: 2394.6222635396466 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 134.30184814370463,
            "unit": "ns/iter",
            "extra": "iterations: 5197756\ncpu: 134.30098450177329 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 620.7858140808823,
            "unit": "ns/iter",
            "extra": "iterations: 1125877\ncpu: 620.749784390303 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5813318198.999923,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5811600561.000001 ns\nthreads: 1"
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
        "date": 1727895552759,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2231.2427896920694,
            "unit": "ns/iter",
            "extra": "iterations: 314515\ncpu: 2231.1947474683243 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1033.2469363617201,
            "unit": "ns/iter",
            "extra": "iterations: 682277\ncpu: 1033.2241567574456 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1615.3539477265517,
            "unit": "ns/iter",
            "extra": "iterations: 433338\ncpu: 1615.313570469241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 193.80732907174274,
            "unit": "ns/iter",
            "extra": "iterations: 3651049\ncpu: 193.8024532127616 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 134.73567941740603,
            "unit": "ns/iter",
            "extra": "iterations: 5171909\ncpu: 134.7236511701966 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3811.9630245366197,
            "unit": "ns/iter",
            "extra": "iterations: 184663\ncpu: 3811.9152131179508 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1658.6326743888999,
            "unit": "ns/iter",
            "extra": "iterations: 421988\ncpu: 1658.5739997345904 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1850.6127255170845,
            "unit": "ns/iter",
            "extra": "iterations: 379018\ncpu: 1850.5756111846913 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1531.2926230363641,
            "unit": "ns/iter",
            "extra": "iterations: 459376\ncpu: 1531.2366253352384 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1942.4944452245068,
            "unit": "ns/iter",
            "extra": "iterations: 363201\ncpu: 1942.4535890595014 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 506.56390188516605,
            "unit": "ns/iter",
            "extra": "iterations: 1393347\ncpu: 506.55427040069645 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2516.864425272049,
            "unit": "ns/iter",
            "extra": "iterations: 277714\ncpu: 2516.8172256350026 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 142.40383360870786,
            "unit": "ns/iter",
            "extra": "iterations: 4752076\ncpu: 142.40101000068174 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 623.5036648683242,
            "unit": "ns/iter",
            "extra": "iterations: 1124597\ncpu: 623.4815556150328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5782820822.999951,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5782660453 ns\nthreads: 1"
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
        "date": 1727896129112,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2197.0797250089527,
            "unit": "ns/iter",
            "extra": "iterations: 321756\ncpu: 2196.963385298176 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1020.3256381627303,
            "unit": "ns/iter",
            "extra": "iterations: 678001\ncpu: 1020.2722931087119 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1714.0060047903153,
            "unit": "ns/iter",
            "extra": "iterations: 412504\ncpu: 1713.9214431860048 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 189.581852731056,
            "unit": "ns/iter",
            "extra": "iterations: 3692754\ncpu: 189.5699291098187 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 132.22300667336765,
            "unit": "ns/iter",
            "extra": "iterations: 5296272\ncpu: 132.2144921937543 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3805.8088376249793,
            "unit": "ns/iter",
            "extra": "iterations: 184665\ncpu: 3805.634798147997 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1654.2771313160724,
            "unit": "ns/iter",
            "extra": "iterations: 423330\ncpu: 1654.1206552807507 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1819.2678222031816,
            "unit": "ns/iter",
            "extra": "iterations: 383314\ncpu: 1819.154471268987 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1604.5061975200363,
            "unit": "ns/iter",
            "extra": "iterations: 462201\ncpu: 1604.3877339079756 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1914.8442286508907,
            "unit": "ns/iter",
            "extra": "iterations: 364958\ncpu: 1914.7429923443256 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 500.77363718019086,
            "unit": "ns/iter",
            "extra": "iterations: 1397195\ncpu: 500.76527471111723 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2404.0113721025286,
            "unit": "ns/iter",
            "extra": "iterations: 284556\ncpu: 2403.950923544047 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 133.47900926856622,
            "unit": "ns/iter",
            "extra": "iterations: 5237383\ncpu: 133.4774273716471 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 623.5228759677261,
            "unit": "ns/iter",
            "extra": "iterations: 1127384\ncpu: 623.4904903741757 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5833790200.999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5833350271 ns\nthreads: 1"
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
        "date": 1727903886012,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2211.683037341971,
            "unit": "ns/iter",
            "extra": "iterations: 320899\ncpu: 2211.583414096024 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1024.9145991193013,
            "unit": "ns/iter",
            "extra": "iterations: 683096\ncpu: 1024.9164934357689 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1654.7897137490277,
            "unit": "ns/iter",
            "extra": "iterations: 423789\ncpu: 1654.794661966214 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 189.05384399422383,
            "unit": "ns/iter",
            "extra": "iterations: 3693671\ncpu: 189.04929621506622 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 133.88438163471784,
            "unit": "ns/iter",
            "extra": "iterations: 5229126\ncpu: 133.8547713327236 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3796.680603767069,
            "unit": "ns/iter",
            "extra": "iterations: 185237\ncpu: 3796.650831097459 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1648.8956534777815,
            "unit": "ns/iter",
            "extra": "iterations: 426847\ncpu: 1648.58969373101 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1814.0642788955274,
            "unit": "ns/iter",
            "extra": "iterations: 385492\ncpu: 1813.7678473223843 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1553.643138298041,
            "unit": "ns/iter",
            "extra": "iterations: 466189\ncpu: 1553.372224569866 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1922.7417681007223,
            "unit": "ns/iter",
            "extra": "iterations: 360579\ncpu: 1922.5545414458363 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 489.0809952655944,
            "unit": "ns/iter",
            "extra": "iterations: 1429528\ncpu: 489.0623709364215 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2403.7595812004206,
            "unit": "ns/iter",
            "extra": "iterations: 291691\ncpu: 2403.644942764776 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 138.25654729631137,
            "unit": "ns/iter",
            "extra": "iterations: 5114363\ncpu: 138.25272042676676 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 614.2975347334901,
            "unit": "ns/iter",
            "extra": "iterations: 1138741\ncpu: 614.2564015873667 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5825935193.000077,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5825633467.999999 ns\nthreads: 1"
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
        "date": 1727965302251,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2202.723880215469,
            "unit": "ns/iter",
            "extra": "iterations: 312828\ncpu: 2202.5802006214276 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1099.0453139586946,
            "unit": "ns/iter",
            "extra": "iterations: 629828\ncpu: 1098.98404167487 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1662.160227888894,
            "unit": "ns/iter",
            "extra": "iterations: 416694\ncpu: 1662.1231503213382 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 215.1171901206562,
            "unit": "ns/iter",
            "extra": "iterations: 3243456\ncpu: 215.11172187937797 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 145.3267865860628,
            "unit": "ns/iter",
            "extra": "iterations: 4782935\ncpu: 145.32539350837928 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3706.3936375727603,
            "unit": "ns/iter",
            "extra": "iterations: 189456\ncpu: 3706.2916402753135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1664.178985876247,
            "unit": "ns/iter",
            "extra": "iterations: 414407\ncpu: 1664.1068297591487 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1863.6572365278394,
            "unit": "ns/iter",
            "extra": "iterations: 366025\ncpu: 1863.6033385697685 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1535.3678014665275,
            "unit": "ns/iter",
            "extra": "iterations: 458965\ncpu: 1535.3585480374318 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1934.6955467487862,
            "unit": "ns/iter",
            "extra": "iterations: 362095\ncpu: 1934.621958325853 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 491.10168474562414,
            "unit": "ns/iter",
            "extra": "iterations: 1418315\ncpu: 491.08996520519077 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2440.6706408607724,
            "unit": "ns/iter",
            "extra": "iterations: 286599\ncpu: 2440.6185715930606 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 145.80042617946833,
            "unit": "ns/iter",
            "extra": "iterations: 4810180\ncpu: 145.79895035113032 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 605.1697806675721,
            "unit": "ns/iter",
            "extra": "iterations: 1154731\ncpu: 605.1405219051006 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 721.1979374296393,
            "unit": "ns/iter",
            "extra": "iterations: 972282\ncpu: 721.17741663427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5860952659.999952,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5860712035.999999 ns\nthreads: 1"
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
        "date": 1727966554311,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2096.590021956605,
            "unit": "ns/iter",
            "extra": "iterations: 319722\ncpu: 2096.439841487292 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1018.8014462170042,
            "unit": "ns/iter",
            "extra": "iterations: 674311\ncpu: 1018.4224845805569 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1659.4830814034212,
            "unit": "ns/iter",
            "extra": "iterations: 418238\ncpu: 1659.360232690478 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 188.15245780768086,
            "unit": "ns/iter",
            "extra": "iterations: 3718924\ncpu: 188.1519649231873 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 134.12083129895555,
            "unit": "ns/iter",
            "extra": "iterations: 5206358\ncpu: 134.1205495280962 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3790.11453302311,
            "unit": "ns/iter",
            "extra": "iterations: 185309\ncpu: 3790.1060930661765 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1630.1591330369981,
            "unit": "ns/iter",
            "extra": "iterations: 426731\ncpu: 1630.134534402234 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1774.5076727637484,
            "unit": "ns/iter",
            "extra": "iterations: 395164\ncpu: 1774.4559600570879 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1467.937761240901,
            "unit": "ns/iter",
            "extra": "iterations: 477050\ncpu: 1467.9187275966885 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1859.5360091810714,
            "unit": "ns/iter",
            "extra": "iterations: 375557\ncpu: 1859.4837081987548 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 478.17275531580856,
            "unit": "ns/iter",
            "extra": "iterations: 1490889\ncpu: 478.14472707223655 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2352.314657026262,
            "unit": "ns/iter",
            "extra": "iterations: 297632\ncpu: 2352.259787254059 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 136.90646677427705,
            "unit": "ns/iter",
            "extra": "iterations: 5120822\ncpu: 136.90616740827946 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 611.2876652835002,
            "unit": "ns/iter",
            "extra": "iterations: 1146666\ncpu: 611.2811917332501 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 767.7873560251656,
            "unit": "ns/iter",
            "extra": "iterations: 910315\ncpu: 767.762688739613 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 3309.192365633342,
            "unit": "ns/iter",
            "extra": "iterations: 207771\ncpu: 3309.111656583448 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5822778067.000058,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5822606770 ns\nthreads: 1"
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
        "date": 1727968947062,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2172.750571458234,
            "unit": "ns/iter",
            "extra": "iterations: 318921\ncpu: 2172.7298265087593 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 999.048466737846,
            "unit": "ns/iter",
            "extra": "iterations: 695054\ncpu: 999.0355871630113 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1571.9689757575218,
            "unit": "ns/iter",
            "extra": "iterations: 449874\ncpu: 1571.9481388122008 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 184.9616948601213,
            "unit": "ns/iter",
            "extra": "iterations: 3708719\ncpu: 184.9596294569635 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 128.88293123865319,
            "unit": "ns/iter",
            "extra": "iterations: 5421899\ncpu: 128.88135872689634 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3648.795057768411,
            "unit": "ns/iter",
            "extra": "iterations: 192059\ncpu: 3648.786680134751 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1626.726556426583,
            "unit": "ns/iter",
            "extra": "iterations: 427068\ncpu: 1626.708086300073 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1805.0993297488515,
            "unit": "ns/iter",
            "extra": "iterations: 390749\ncpu: 1805.0510071682852 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1508.0632430296307,
            "unit": "ns/iter",
            "extra": "iterations: 460446\ncpu: 1508.0463311658707 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1881.0736265185935,
            "unit": "ns/iter",
            "extra": "iterations: 371483\ncpu: 1881.026902980757 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 476.6156644721338,
            "unit": "ns/iter",
            "extra": "iterations: 1469708\ncpu: 476.600206979891 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2431.1647630102066,
            "unit": "ns/iter",
            "extra": "iterations: 287692\ncpu: 2431.129732491695 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 130.02005160355645,
            "unit": "ns/iter",
            "extra": "iterations: 5372887\ncpu: 130.01983458799722 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 593.791514249864,
            "unit": "ns/iter",
            "extra": "iterations: 1180426\ncpu: 593.7753946456619 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 733.6806519308309,
            "unit": "ns/iter",
            "extra": "iterations: 954457\ncpu: 733.6740020765723 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 3210.2610892829857,
            "unit": "ns/iter",
            "extra": "iterations: 232116\ncpu: 3210.1931792724263 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5888550574.000078,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5888331338.999999 ns\nthreads: 1"
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
        "date": 1727969451156,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2245.0128342247704,
            "unit": "ns/iter",
            "extra": "iterations: 324445\ncpu: 2244.4753779531197 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 990.559287238121,
            "unit": "ns/iter",
            "extra": "iterations: 708736\ncpu: 990.2497813007943 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1615.5723862502703,
            "unit": "ns/iter",
            "extra": "iterations: 441693\ncpu: 1615.5590874204481 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 183.2732200212908,
            "unit": "ns/iter",
            "extra": "iterations: 3674749\ncpu: 183.27089850218354 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 132.06137269883556,
            "unit": "ns/iter",
            "extra": "iterations: 5299327\ncpu: 132.0592624308709 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3987.0731947041522,
            "unit": "ns/iter",
            "extra": "iterations: 174999\ncpu: 3987.0698118274954 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1653.0566474123736,
            "unit": "ns/iter",
            "extra": "iterations: 429340\ncpu: 1652.9303978199089 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1816.993317438736,
            "unit": "ns/iter",
            "extra": "iterations: 380842\ncpu: 1816.8799817247059 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1528.4255255001292,
            "unit": "ns/iter",
            "extra": "iterations: 461037\ncpu: 1528.3359968939594 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1903.321049620233,
            "unit": "ns/iter",
            "extra": "iterations: 368781\ncpu: 1903.2381440475488 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 478.09307904840836,
            "unit": "ns/iter",
            "extra": "iterations: 1467645\ncpu: 478.0643691083323 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2423.977625046166,
            "unit": "ns/iter",
            "extra": "iterations: 289833\ncpu: 2423.8947393844046 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 137.38081681756248,
            "unit": "ns/iter",
            "extra": "iterations: 5206842\ncpu: 137.3677102166726 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 586.0557106947856,
            "unit": "ns/iter",
            "extra": "iterations: 1190687\ncpu: 586.0131562702871 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 773.5851660539852,
            "unit": "ns/iter",
            "extra": "iterations: 908349\ncpu: 773.5413480941796 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 3388.7433321222557,
            "unit": "ns/iter",
            "extra": "iterations: 214686\ncpu: 3388.6049625965406 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 864.8960555583607,
            "unit": "ns/iter",
            "extra": "iterations: 809240\ncpu: 864.8714757056013 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5754227016.000016,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5753891313 ns\nthreads: 1"
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
        "date": 1727970605947,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2176.305480753493,
            "unit": "ns/iter",
            "extra": "iterations: 317876\ncpu: 2176.1899262605543 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 988.6307144733271,
            "unit": "ns/iter",
            "extra": "iterations: 681887\ncpu: 988.3276187990095 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1604.7881149015534,
            "unit": "ns/iter",
            "extra": "iterations: 439054\ncpu: 1604.2548638664034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 184.00065476409029,
            "unit": "ns/iter",
            "extra": "iterations: 3812060\ncpu: 183.94897745575872 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.93766443183227,
            "unit": "ns/iter",
            "extra": "iterations: 5340739\ncpu: 130.91057417334946 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3861.0436860738473,
            "unit": "ns/iter",
            "extra": "iterations: 182438\ncpu: 3860.131639241821 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1649.5665827393123,
            "unit": "ns/iter",
            "extra": "iterations: 422985\ncpu: 1649.2753147274711 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1786.0167405505908,
            "unit": "ns/iter",
            "extra": "iterations: 392281\ncpu: 1785.747828724817 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1500.2701882496067,
            "unit": "ns/iter",
            "extra": "iterations: 468899\ncpu: 1500.2525810462375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1875.0320303638875,
            "unit": "ns/iter",
            "extra": "iterations: 372022\ncpu: 1874.9186580363562 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 500.0433755317473,
            "unit": "ns/iter",
            "extra": "iterations: 1400052\ncpu: 500.025749757866 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2408.598879494447,
            "unit": "ns/iter",
            "extra": "iterations: 294510\ncpu: 2408.4965943431457 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 134.00091876152672,
            "unit": "ns/iter",
            "extra": "iterations: 5228778\ncpu: 133.9979528677639 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 617.2537071589496,
            "unit": "ns/iter",
            "extra": "iterations: 1136787\ncpu: 617.2021900320831 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 764.5994117557572,
            "unit": "ns/iter",
            "extra": "iterations: 912206\ncpu: 764.5225552123096 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1269.5606930260524,
            "unit": "ns/iter",
            "extra": "iterations: 554034\ncpu: 1269.4460899511591 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 860.602020356524,
            "unit": "ns/iter",
            "extra": "iterations: 823914\ncpu: 860.5525528149799 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5816967159.000001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5816448031 ns\nthreads: 1"
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
        "date": 1727974462463,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2136.270124662039,
            "unit": "ns/iter",
            "extra": "iterations: 328167\ncpu: 2136.1921034107636 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 988.8453090114019,
            "unit": "ns/iter",
            "extra": "iterations: 709925\ncpu: 988.8185047716305 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1604.8371330276684,
            "unit": "ns/iter",
            "extra": "iterations: 436307\ncpu: 1604.8025862523407 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 189.19995035848245,
            "unit": "ns/iter",
            "extra": "iterations: 3706575\ncpu: 189.19011513324298 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 132.2438780851249,
            "unit": "ns/iter",
            "extra": "iterations: 5253830\ncpu: 132.23708589733582 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3685.3232422184874,
            "unit": "ns/iter",
            "extra": "iterations: 189870\ncpu: 3685.197761626375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1711.6214753604454,
            "unit": "ns/iter",
            "extra": "iterations: 414475\ncpu: 1711.5404692683503 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1767.6769086309268,
            "unit": "ns/iter",
            "extra": "iterations: 398296\ncpu: 1767.605293550524 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1488.2961980196508,
            "unit": "ns/iter",
            "extra": "iterations: 478619\ncpu: 1488.257064596266 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1847.0836717663758,
            "unit": "ns/iter",
            "extra": "iterations: 376244\ncpu: 1846.9645097330465 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 474.16099619639937,
            "unit": "ns/iter",
            "extra": "iterations: 1473364\ncpu: 474.13953442598086 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2396.136647934389,
            "unit": "ns/iter",
            "extra": "iterations: 289869\ncpu: 2396.052930806676 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 135.4174697263841,
            "unit": "ns/iter",
            "extra": "iterations: 5192640\ncpu: 135.41326242527873 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 583.530615173956,
            "unit": "ns/iter",
            "extra": "iterations: 1198409\ncpu: 583.5141883947801 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 739.4453916754759,
            "unit": "ns/iter",
            "extra": "iterations: 943217\ncpu: 739.393400458218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1255.9042581081299,
            "unit": "ns/iter",
            "extra": "iterations: 560695\ncpu: 1255.850480207598 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 850.5292537824788,
            "unit": "ns/iter",
            "extra": "iterations: 822133\ncpu: 850.4906383760302 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5907575625.00005,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5907291978 ns\nthreads: 1"
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
        "date": 1727982672059,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2164.2517952946746,
            "unit": "ns/iter",
            "extra": "iterations: 321535\ncpu: 2164.043416735348 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 990.9335141744613,
            "unit": "ns/iter",
            "extra": "iterations: 711490\ncpu: 990.8949430069293 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1614.3207877920677,
            "unit": "ns/iter",
            "extra": "iterations: 439253\ncpu: 1614.3027253086493 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 189.19007223279766,
            "unit": "ns/iter",
            "extra": "iterations: 3699704\ncpu: 189.18505669642752 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 132.84366813892268,
            "unit": "ns/iter",
            "extra": "iterations: 5294794\ncpu: 132.5621597365261 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3690.236091675878,
            "unit": "ns/iter",
            "extra": "iterations: 190803\ncpu: 3690.167990021122 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1644.107863715874,
            "unit": "ns/iter",
            "extra": "iterations: 425435\ncpu: 1644.10532043673 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1832.9558332562335,
            "unit": "ns/iter",
            "extra": "iterations: 388188\ncpu: 1832.8779045204892 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1501.274583998086,
            "unit": "ns/iter",
            "extra": "iterations: 461957\ncpu: 1501.222689557688 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1961.2013114626984,
            "unit": "ns/iter",
            "extra": "iterations: 368901\ncpu: 1961.0952965700806 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 477.3504273913369,
            "unit": "ns/iter",
            "extra": "iterations: 1462945\ncpu: 477.3308641131414 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2407.2217510291707,
            "unit": "ns/iter",
            "extra": "iterations: 291223\ncpu: 2407.193302040019 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 135.0014823184138,
            "unit": "ns/iter",
            "extra": "iterations: 5158136\ncpu: 134.99325512161738 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 581.833578585813,
            "unit": "ns/iter",
            "extra": "iterations: 1204881\ncpu: 581.7851854249506 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 742.2534064665424,
            "unit": "ns/iter",
            "extra": "iterations: 917960\ncpu: 742.2063619329836 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1221.129617637226,
            "unit": "ns/iter",
            "extra": "iterations: 563627\ncpu: 1221.0908952197103 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 862.2893098306133,
            "unit": "ns/iter",
            "extra": "iterations: 813467\ncpu: 862.2782116545599 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5801195054.000005,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5800757669.999999 ns\nthreads: 1"
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
        "date": 1727984255365,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2130.559367639023,
            "unit": "ns/iter",
            "extra": "iterations: 328167\ncpu: 2130.442430226074 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1011.321337709429,
            "unit": "ns/iter",
            "extra": "iterations: 696504\ncpu: 1011.3043342177502 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1582.345674452091,
            "unit": "ns/iter",
            "extra": "iterations: 443990\ncpu: 1582.2878668438486 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 187.98916870149176,
            "unit": "ns/iter",
            "extra": "iterations: 3826688\ncpu: 187.98619223725575 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 134.0253667275938,
            "unit": "ns/iter",
            "extra": "iterations: 5214429\ncpu: 134.01773482772498 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3797.6849094176387,
            "unit": "ns/iter",
            "extra": "iterations: 184804\ncpu: 3797.6132226575196 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1647.1021306855794,
            "unit": "ns/iter",
            "extra": "iterations: 423291\ncpu: 1647.0160645985848 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1796.649175962198,
            "unit": "ns/iter",
            "extra": "iterations: 389788\ncpu: 1796.5749740884762 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1494.9700244229523,
            "unit": "ns/iter",
            "extra": "iterations: 461042\ncpu: 1494.8626545954564 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1874.9348240863578,
            "unit": "ns/iter",
            "extra": "iterations: 370551\ncpu: 1874.8993121054887 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 479.3716097359661,
            "unit": "ns/iter",
            "extra": "iterations: 1459289\ncpu: 479.3415697644532 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2362.269678196547,
            "unit": "ns/iter",
            "extra": "iterations: 290550\ncpu: 2362.200481844779 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 135.87203700772113,
            "unit": "ns/iter",
            "extra": "iterations: 5204536\ncpu: 135.5813461565066 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 601.1995373864621,
            "unit": "ns/iter",
            "extra": "iterations: 1162093\ncpu: 601.1807264995138 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 497.7826554599749,
            "unit": "ns/iter",
            "extra": "iterations: 1407613\ncpu: 497.7465937015363 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1274.0897017626442,
            "unit": "ns/iter",
            "extra": "iterations: 546511\ncpu: 1274.0825234990687 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 838.3791106949385,
            "unit": "ns/iter",
            "extra": "iterations: 837328\ncpu: 838.3116926700181 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5938204237.000036,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5937671491 ns\nthreads: 1"
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
        "date": 1727986082158,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2154.457692625874,
            "unit": "ns/iter",
            "extra": "iterations: 326267\ncpu: 2154.4423830788896 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1080.2331315232018,
            "unit": "ns/iter",
            "extra": "iterations: 650281\ncpu: 1080.221682626434 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1582.5289420391966,
            "unit": "ns/iter",
            "extra": "iterations: 443939\ncpu: 1582.5021388073585 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 186.9591298689435,
            "unit": "ns/iter",
            "extra": "iterations: 3757365\ncpu: 186.95689638882567 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 132.29783768426202,
            "unit": "ns/iter",
            "extra": "iterations: 5314210\ncpu: 132.296933316523 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3631.1108457112846,
            "unit": "ns/iter",
            "extra": "iterations: 189651\ncpu: 3631.0510253043744 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1654.7105977112446,
            "unit": "ns/iter",
            "extra": "iterations: 425356\ncpu: 1654.5099022936074 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1772.3216003069356,
            "unit": "ns/iter",
            "extra": "iterations: 391175\ncpu: 1771.7501936473452 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1481.813872253389,
            "unit": "ns/iter",
            "extra": "iterations: 475222\ncpu: 1481.6236327442753 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1880.0018239709507,
            "unit": "ns/iter",
            "extra": "iterations: 375006\ncpu: 1879.8543089977209 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 483.12020029230854,
            "unit": "ns/iter",
            "extra": "iterations: 1445687\ncpu: 483.0958423227161 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2500.2673675768247,
            "unit": "ns/iter",
            "extra": "iterations: 279256\ncpu: 2500.082501360761 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 134.17441797830259,
            "unit": "ns/iter",
            "extra": "iterations: 5086666\ncpu: 134.17308744077172 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 596.8279692053042,
            "unit": "ns/iter",
            "extra": "iterations: 1173319\ncpu: 596.8183026099463 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 471.8569788155633,
            "unit": "ns/iter",
            "extra": "iterations: 1475236\ncpu: 471.85368442744084 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1275.1310910863417,
            "unit": "ns/iter",
            "extra": "iterations: 557536\ncpu: 1275.1196729897244 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 208.81698363729362,
            "unit": "ns/iter",
            "extra": "iterations: 3357514\ncpu: 208.8171173671949 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5734397792.999971,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5734187186 ns\nthreads: 1"
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
        "date": 1727987429321,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2163.123772017525,
            "unit": "ns/iter",
            "extra": "iterations: 325025\ncpu: 2162.9603784324286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1005.2458589416502,
            "unit": "ns/iter",
            "extra": "iterations: 693784\ncpu: 1005.16194809912 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1577.282783307429,
            "unit": "ns/iter",
            "extra": "iterations: 444464\ncpu: 1577.2213475107096 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 190.74254191645971,
            "unit": "ns/iter",
            "extra": "iterations: 3593517\ncpu: 190.73852468208725 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 128.4178056575215,
            "unit": "ns/iter",
            "extra": "iterations: 5454536\ncpu: 128.41490550250293 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3829.661684144206,
            "unit": "ns/iter",
            "extra": "iterations: 182906\ncpu: 3829.5932172810058 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1649.307973453268,
            "unit": "ns/iter",
            "extra": "iterations: 435307\ncpu: 1649.2413974505341 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1859.6037890412454,
            "unit": "ns/iter",
            "extra": "iterations: 384530\ncpu: 1859.5827113619218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1509.7482129049677,
            "unit": "ns/iter",
            "extra": "iterations: 465560\ncpu: 1509.685209210411 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1897.8342840990424,
            "unit": "ns/iter",
            "extra": "iterations: 371455\ncpu: 1897.7873632068472 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 486.88549864455786,
            "unit": "ns/iter",
            "extra": "iterations: 1439031\ncpu: 486.87502215032157 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2440.2217902329676,
            "unit": "ns/iter",
            "extra": "iterations: 289359\ncpu: 2440.2161052533315 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 132.15995179293193,
            "unit": "ns/iter",
            "extra": "iterations: 5345273\ncpu: 132.15555463677921 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 611.2328029389671,
            "unit": "ns/iter",
            "extra": "iterations: 1104084\ncpu: 611.2103752975319 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 509.46161258443044,
            "unit": "ns/iter",
            "extra": "iterations: 1370905\ncpu: 509.4366079341753 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1261.3932992941116,
            "unit": "ns/iter",
            "extra": "iterations: 550151\ncpu: 1261.3665357329194 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 219.82982957234472,
            "unit": "ns/iter",
            "extra": "iterations: 3180059\ncpu: 219.8281742571445 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5829269001.999932,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5829072149.999998 ns\nthreads: 1"
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
        "date": 1727989006506,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2160.7168623837456,
            "unit": "ns/iter",
            "extra": "iterations: 325725\ncpu: 2160.574595133932 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1005.6087054885568,
            "unit": "ns/iter",
            "extra": "iterations: 702798\ncpu: 1005.5384477474328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1567.9118968329183,
            "unit": "ns/iter",
            "extra": "iterations: 454331\ncpu: 1567.7751881337615 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 188.16276695816796,
            "unit": "ns/iter",
            "extra": "iterations: 3782334\ncpu: 188.15392982216798 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.13311402508506,
            "unit": "ns/iter",
            "extra": "iterations: 5391498\ncpu: 130.12789061592898 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3847.8449659088374,
            "unit": "ns/iter",
            "extra": "iterations: 180986\ncpu: 3847.6156829810006 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1636.0295370752256,
            "unit": "ns/iter",
            "extra": "iterations: 432338\ncpu: 1635.9845421868986 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1843.456291509016,
            "unit": "ns/iter",
            "extra": "iterations: 380338\ncpu: 1843.4460900567394 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1527.4152500053615,
            "unit": "ns/iter",
            "extra": "iterations: 460590\ncpu: 1527.343051303762 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1943.835845478096,
            "unit": "ns/iter",
            "extra": "iterations: 360648\ncpu: 1943.674716066638 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 482.8415847461368,
            "unit": "ns/iter",
            "extra": "iterations: 1448863\ncpu: 482.82610847264397 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2492.3547102334555,
            "unit": "ns/iter",
            "extra": "iterations: 282969\ncpu: 2492.3191232961944 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 132.95675324788053,
            "unit": "ns/iter",
            "extra": "iterations: 5260765\ncpu: 132.9506461512727 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 617.3896817312564,
            "unit": "ns/iter",
            "extra": "iterations: 1137749\ncpu: 617.3613758394865 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 486.2560221369048,
            "unit": "ns/iter",
            "extra": "iterations: 1418807\ncpu: 486.24321771741944 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1250.5224546652978,
            "unit": "ns/iter",
            "extra": "iterations: 560663\ncpu: 1250.4649406149492 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 215.89416786218467,
            "unit": "ns/iter",
            "extra": "iterations: 3237835\ncpu: 215.8929491465749 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5870728607.000047,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5870375477 ns\nthreads: 1"
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
        "date": 1727990998863,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2175.949858359697,
            "unit": "ns/iter",
            "extra": "iterations: 325119\ncpu: 2175.8394833891593 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 963.3350969702417,
            "unit": "ns/iter",
            "extra": "iterations: 728419\ncpu: 963.2741471598076 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1560.9359290048972,
            "unit": "ns/iter",
            "extra": "iterations: 449158\ncpu: 1560.9387542913632 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 184.10045079055365,
            "unit": "ns/iter",
            "extra": "iterations: 3795998\ncpu: 184.08963518948102 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 129.34284058210554,
            "unit": "ns/iter",
            "extra": "iterations: 5422459\ncpu: 129.3381194767909 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 4110.3774503243385,
            "unit": "ns/iter",
            "extra": "iterations: 171967\ncpu: 4110.2480708508 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1636.658667052241,
            "unit": "ns/iter",
            "extra": "iterations: 428854\ncpu: 1636.6186067985843 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1820.8382229410777,
            "unit": "ns/iter",
            "extra": "iterations: 383330\ncpu: 1820.701606970496 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1516.6202490906915,
            "unit": "ns/iter",
            "extra": "iterations: 462964\ncpu: 1516.5651800139942 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1908.8666385388242,
            "unit": "ns/iter",
            "extra": "iterations: 367370\ncpu: 1908.7809320303775 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 480.32355024292224,
            "unit": "ns/iter",
            "extra": "iterations: 1458503\ncpu: 480.3117360745913 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2489.6743646986383,
            "unit": "ns/iter",
            "extra": "iterations: 280851\ncpu: 2489.5592004301257 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 131.65404553679468,
            "unit": "ns/iter",
            "extra": "iterations: 5305600\ncpu: 131.65026406061506 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 598.2082292794161,
            "unit": "ns/iter",
            "extra": "iterations: 1170066\ncpu: 598.1909268366069 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 486.11001649266996,
            "unit": "ns/iter",
            "extra": "iterations: 1430331\ncpu: 486.0952835392642 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1236.8711093087784,
            "unit": "ns/iter",
            "extra": "iterations: 567155\ncpu: 1236.7838333436212 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 215.60752743297357,
            "unit": "ns/iter",
            "extra": "iterations: 3247827\ncpu: 215.60757669666563 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5787447329.999964,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5787233320.999999 ns\nthreads: 1"
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
        "date": 1728051839185,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2148.9496243964463,
            "unit": "ns/iter",
            "extra": "iterations: 324145\ncpu: 2148.8548273149363 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 990.0275912150995,
            "unit": "ns/iter",
            "extra": "iterations: 709175\ncpu: 989.9748806712028 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1571.6583875336705,
            "unit": "ns/iter",
            "extra": "iterations: 450490\ncpu: 1571.616020333414 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 183.47551250231632,
            "unit": "ns/iter",
            "extra": "iterations: 3834324\ncpu: 183.46923056058904 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.41779441130845,
            "unit": "ns/iter",
            "extra": "iterations: 5360256\ncpu: 130.4147898906321 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 4039.364197034671,
            "unit": "ns/iter",
            "extra": "iterations: 174142\ncpu: 4039.2511283894746 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1648.972769412943,
            "unit": "ns/iter",
            "extra": "iterations: 443325\ncpu: 1648.927441493261 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1866.7755702157951,
            "unit": "ns/iter",
            "extra": "iterations: 377138\ncpu: 1866.763797336783 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1542.0142584715295,
            "unit": "ns/iter",
            "extra": "iterations: 454116\ncpu: 1541.9810268741878 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1962.0334774792282,
            "unit": "ns/iter",
            "extra": "iterations: 357046\ncpu: 1962.0202466909038 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 481.81926613960496,
            "unit": "ns/iter",
            "extra": "iterations: 1453192\ncpu: 481.79831777218703 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2489.161410757224,
            "unit": "ns/iter",
            "extra": "iterations: 281239\ncpu: 2489.112413285494 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 133.0555063454986,
            "unit": "ns/iter",
            "extra": "iterations: 5254120\ncpu: 133.05110484724372 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 608.9158202487312,
            "unit": "ns/iter",
            "extra": "iterations: 1149255\ncpu: 608.8947396356762 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 495.48277385067445,
            "unit": "ns/iter",
            "extra": "iterations: 1415087\ncpu: 495.472540557577 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1256.207268787947,
            "unit": "ns/iter",
            "extra": "iterations: 575089\ncpu: 1256.2085381567006 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 215.80639237739862,
            "unit": "ns/iter",
            "extra": "iterations: 3238576\ncpu: 215.79687739302673 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5689338240.000097,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5689104704.999998 ns\nthreads: 1"
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
        "date": 1728052312210,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2182.9740027386756,
            "unit": "ns/iter",
            "extra": "iterations: 326419\ncpu: 2182.8009245785324 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 963.8368892162929,
            "unit": "ns/iter",
            "extra": "iterations: 707513\ncpu: 963.7634827911286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1550.035119739843,
            "unit": "ns/iter",
            "extra": "iterations: 453107\ncpu: 1549.9189396765005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 182.64466437376754,
            "unit": "ns/iter",
            "extra": "iterations: 3787681\ncpu: 182.63686540656414 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 129.19842384007455,
            "unit": "ns/iter",
            "extra": "iterations: 5434347\ncpu: 129.19401889500253 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 4092.162961684643,
            "unit": "ns/iter",
            "extra": "iterations: 173820\ncpu: 4091.908290185249 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1613.0874931692542,
            "unit": "ns/iter",
            "extra": "iterations: 433691\ncpu: 1613.0890426594049 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1812.4824625900078,
            "unit": "ns/iter",
            "extra": "iterations: 386260\ncpu: 1812.4512090301891 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1537.8913410297898,
            "unit": "ns/iter",
            "extra": "iterations: 456925\ncpu: 1537.8474169721503 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1905.288624866176,
            "unit": "ns/iter",
            "extra": "iterations: 369244\ncpu: 1905.1436231868345 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 480.4294362178446,
            "unit": "ns/iter",
            "extra": "iterations: 1458489\ncpu: 480.4112694713506 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2452.880311354559,
            "unit": "ns/iter",
            "extra": "iterations: 285591\ncpu: 2452.7733892174497 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 132.41329101264972,
            "unit": "ns/iter",
            "extra": "iterations: 5209114\ncpu: 132.40911736621638 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 597.9042439759944,
            "unit": "ns/iter",
            "extra": "iterations: 1163885\ncpu: 597.8552674877673 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 489.7666872682761,
            "unit": "ns/iter",
            "extra": "iterations: 1440020\ncpu: 489.767003236067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1228.6577636899522,
            "unit": "ns/iter",
            "extra": "iterations: 561872\ncpu: 1228.6260749779315 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 215.31431444926525,
            "unit": "ns/iter",
            "extra": "iterations: 3263318\ncpu: 215.30560674748764 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5848453121.999909,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5848171682 ns\nthreads: 1"
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
        "date": 1728054331955,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2125.466187203498,
            "unit": "ns/iter",
            "extra": "iterations: 328840\ncpu: 2125.4224151563076 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 969.8297490641231,
            "unit": "ns/iter",
            "extra": "iterations: 720184\ncpu: 969.793058440621 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1550.6650848154436,
            "unit": "ns/iter",
            "extra": "iterations: 456638\ncpu: 1550.5991704588753 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 178.66687902311585,
            "unit": "ns/iter",
            "extra": "iterations: 3875559\ncpu: 178.65704018439666 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 127.76845643075254,
            "unit": "ns/iter",
            "extra": "iterations: 5499980\ncpu: 127.76249259088215 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 4021.3208777623354,
            "unit": "ns/iter",
            "extra": "iterations: 173122\ncpu: 4020.990515359113 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1623.690513745676,
            "unit": "ns/iter",
            "extra": "iterations: 434281\ncpu: 1623.697707244849 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1830.8155239609716,
            "unit": "ns/iter",
            "extra": "iterations: 381784\ncpu: 1830.780179368441 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1522.9760682388805,
            "unit": "ns/iter",
            "extra": "iterations: 460852\ncpu: 1522.8736535807607 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1918.1837939895374,
            "unit": "ns/iter",
            "extra": "iterations: 352215\ncpu: 1918.0791476796853 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 484.9073095400828,
            "unit": "ns/iter",
            "extra": "iterations: 1394178\ncpu: 484.8916379400627 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2485.7303650443373,
            "unit": "ns/iter",
            "extra": "iterations: 282048\ncpu: 2485.6249468175647 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 130.3317448280249,
            "unit": "ns/iter",
            "extra": "iterations: 5332686\ncpu: 130.32802906452747 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 607.4604941581644,
            "unit": "ns/iter",
            "extra": "iterations: 1152627\ncpu: 607.4631151274432 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 501.29739099998005,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 501.26681499999927 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1266.1937730728878,
            "unit": "ns/iter",
            "extra": "iterations: 564516\ncpu: 1266.1625587228716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 216.23716011899097,
            "unit": "ns/iter",
            "extra": "iterations: 3242164\ncpu: 216.2325079792388 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5718458451.999936,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5718260188 ns\nthreads: 1"
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
        "date": 1728055397145,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2130.281557214664,
            "unit": "ns/iter",
            "extra": "iterations: 333236\ncpu: 2130.1765355483803 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 977.0449984502455,
            "unit": "ns/iter",
            "extra": "iterations: 709780\ncpu: 976.9482586153456 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1524.52299449641,
            "unit": "ns/iter",
            "extra": "iterations: 459523\ncpu: 1524.4353100932924 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 179.07401254213346,
            "unit": "ns/iter",
            "extra": "iterations: 4003943\ncpu: 179.06237576309138 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 124.54725571924801,
            "unit": "ns/iter",
            "extra": "iterations: 5572881\ncpu: 124.54089886362185 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3924.226127206713,
            "unit": "ns/iter",
            "extra": "iterations: 173482\ncpu: 3924.0033721077657 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1601.6905582110778,
            "unit": "ns/iter",
            "extra": "iterations: 450815\ncpu: 1601.6007430986103 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1833.571606347944,
            "unit": "ns/iter",
            "extra": "iterations: 370449\ncpu: 1833.4724968889104 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1489.8944377184082,
            "unit": "ns/iter",
            "extra": "iterations: 475776\ncpu: 1489.7980436171645 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1946.970206136997,
            "unit": "ns/iter",
            "extra": "iterations: 366552\ncpu: 1946.8186778410684 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 478.5392142297824,
            "unit": "ns/iter",
            "extra": "iterations: 1447217\ncpu: 478.5197112803397 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2492.8287404090147,
            "unit": "ns/iter",
            "extra": "iterations: 289467\ncpu: 2492.7043808102476 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 130.06606385632944,
            "unit": "ns/iter",
            "extra": "iterations: 5435983\ncpu: 130.05984179862205 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 596.402069900963,
            "unit": "ns/iter",
            "extra": "iterations: 1154548\ncpu: 596.3894805586248 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 481.59809131341433,
            "unit": "ns/iter",
            "extra": "iterations: 1464253\ncpu: 481.5741473638773 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1221.5853069156099,
            "unit": "ns/iter",
            "extra": "iterations: 604189\ncpu: 1221.562673269457 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 213.65062247577202,
            "unit": "ns/iter",
            "extra": "iterations: 3277718\ncpu: 213.64874647544394 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5610572218.000015,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5610346830.000001 ns\nthreads: 1"
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
        "date": 1728055775797,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2157.632373842345,
            "unit": "ns/iter",
            "extra": "iterations: 320135\ncpu: 2157.541530916645 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1039.7991880747188,
            "unit": "ns/iter",
            "extra": "iterations: 687748\ncpu: 1039.7872534707483 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1614.5905004111223,
            "unit": "ns/iter",
            "extra": "iterations: 428208\ncpu: 1614.5578247020142 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 185.65373306501732,
            "unit": "ns/iter",
            "extra": "iterations: 3776133\ncpu: 185.65136238580567 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 128.3631592657806,
            "unit": "ns/iter",
            "extra": "iterations: 5431895\ncpu: 128.36185640554538 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 4299.987658124528,
            "unit": "ns/iter",
            "extra": "iterations: 165534\ncpu: 4299.997396305292 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1682.5719451538118,
            "unit": "ns/iter",
            "extra": "iterations: 413155\ncpu: 1682.5134707313248 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1713.7772765254813,
            "unit": "ns/iter",
            "extra": "iterations: 414074\ncpu: 1713.7651192781962 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1509.314484189926,
            "unit": "ns/iter",
            "extra": "iterations: 488581\ncpu: 1509.27664399557 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1818.0167556205147,
            "unit": "ns/iter",
            "extra": "iterations: 385781\ncpu: 1818.0070972909489 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 475.75539897047116,
            "unit": "ns/iter",
            "extra": "iterations: 1518947\ncpu: 475.74626830297467 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2515.7972994172937,
            "unit": "ns/iter",
            "extra": "iterations: 274089\ncpu: 2515.7814906836875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 127.58868399257445,
            "unit": "ns/iter",
            "extra": "iterations: 5446603\ncpu: 127.58715166132018 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 580.4769145279405,
            "unit": "ns/iter",
            "extra": "iterations: 1160730\ncpu: 580.4729316895415 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 515.6152899999711,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 515.6092700000005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1240.4018184600209,
            "unit": "ns/iter",
            "extra": "iterations: 581591\ncpu: 1240.3716718449914 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 215.14917095432887,
            "unit": "ns/iter",
            "extra": "iterations: 3300361\ncpu: 215.14810652531713 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5373003992.999997,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5371395970.999998 ns\nthreads: 1"
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
        "date": 1728055977932,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2102.8682742975384,
            "unit": "ns/iter",
            "extra": "iterations: 325821\ncpu: 2102.7445100223745 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1036.620636559516,
            "unit": "ns/iter",
            "extra": "iterations: 676072\ncpu: 1036.6170969955863 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1669.2732172160615,
            "unit": "ns/iter",
            "extra": "iterations: 426580\ncpu: 1669.2141427164902 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 186.8406769637506,
            "unit": "ns/iter",
            "extra": "iterations: 3676179\ncpu: 186.83797062112586 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 133.1222628404555,
            "unit": "ns/iter",
            "extra": "iterations: 5249420\ncpu: 133.116684700405 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 4289.51846217136,
            "unit": "ns/iter",
            "extra": "iterations: 163009\ncpu: 4289.357882080132 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1739.19234938634,
            "unit": "ns/iter",
            "extra": "iterations: 401275\ncpu: 1739.1874475110578 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1835.6381803921238,
            "unit": "ns/iter",
            "extra": "iterations: 382500\ncpu: 1835.5856653594783 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1532.6239369146244,
            "unit": "ns/iter",
            "extra": "iterations: 458806\ncpu: 1530.726869308598 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1920.9372444179876,
            "unit": "ns/iter",
            "extra": "iterations: 366565\ncpu: 1920.850744069946 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 486.2986283149758,
            "unit": "ns/iter",
            "extra": "iterations: 1439033\ncpu: 486.2852005478671 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2558.4363684810396,
            "unit": "ns/iter",
            "extra": "iterations: 273968\ncpu: 2558.39313715471 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 135.7339554324512,
            "unit": "ns/iter",
            "extra": "iterations: 5159628\ncpu: 135.7263190292014 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 605.6757889058457,
            "unit": "ns/iter",
            "extra": "iterations: 1156697\ncpu: 605.6339741522632 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 537.5680509982101,
            "unit": "ns/iter",
            "extra": "iterations: 1299496\ncpu: 537.5520917340262 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1312.5223155077078,
            "unit": "ns/iter",
            "extra": "iterations: 533844\ncpu: 1312.5036958362364 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 231.22807340615944,
            "unit": "ns/iter",
            "extra": "iterations: 2997570\ncpu: 231.22246786563747 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5673500844.000046,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5673238909.999998 ns\nthreads: 1"
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
        "date": 1728057361139,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2083.6876028989655,
            "unit": "ns/iter",
            "extra": "iterations: 324955\ncpu: 2083.334304749889 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1037.2048407080913,
            "unit": "ns/iter",
            "extra": "iterations: 678000\ncpu: 1036.850424778761 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1661.4827327150406,
            "unit": "ns/iter",
            "extra": "iterations: 423286\ncpu: 1660.854998747891 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 185.5500166577504,
            "unit": "ns/iter",
            "extra": "iterations: 3776022\ncpu: 185.52778479574528 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.49251118365163,
            "unit": "ns/iter",
            "extra": "iterations: 5360727\ncpu: 130.48517076135383 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 4283.780727052148,
            "unit": "ns/iter",
            "extra": "iterations: 163317\ncpu: 4283.616286118407 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1717.192795551463,
            "unit": "ns/iter",
            "extra": "iterations: 408220\ncpu: 1717.1109401793144 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1824.4177154299834,
            "unit": "ns/iter",
            "extra": "iterations: 384580\ncpu: 1824.3846403869156 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1518.5983997822698,
            "unit": "ns/iter",
            "extra": "iterations: 463187\ncpu: 1518.5558877947776 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1908.3089939422023,
            "unit": "ns/iter",
            "extra": "iterations: 365635\ncpu: 1908.2668863757572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 486.7098883079436,
            "unit": "ns/iter",
            "extra": "iterations: 1439225\ncpu: 486.6898580833439 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2522.1372931008727,
            "unit": "ns/iter",
            "extra": "iterations: 277188\ncpu: 2522.071298180297 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 131.1420707989973,
            "unit": "ns/iter",
            "extra": "iterations: 5348805\ncpu: 131.13914098569697 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 603.3848274298349,
            "unit": "ns/iter",
            "extra": "iterations: 1137276\ncpu: 603.3465025200568 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 532.2041271730205,
            "unit": "ns/iter",
            "extra": "iterations: 1315719\ncpu: 532.1782629877656 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1313.6815857969107,
            "unit": "ns/iter",
            "extra": "iterations: 537118\ncpu: 1313.5445600408086 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 226.6004320611662,
            "unit": "ns/iter",
            "extra": "iterations: 3091692\ncpu: 226.59224786945092 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5766739982.999979,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5766381813.999999 ns\nthreads: 1"
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
        "date": 1728069337248,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2201.206288423189,
            "unit": "ns/iter",
            "extra": "iterations: 308408\ncpu: 2201.084245544863 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1031.680592584317,
            "unit": "ns/iter",
            "extra": "iterations: 681152\ncpu: 1031.6644875152683 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1650.0888947222043,
            "unit": "ns/iter",
            "extra": "iterations: 426662\ncpu: 1650.0710117141903 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 183.4139745296891,
            "unit": "ns/iter",
            "extra": "iterations: 3756062\ncpu: 183.4060385584689 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 129.0638515695021,
            "unit": "ns/iter",
            "extra": "iterations: 5420180\ncpu: 129.05552306380977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 4277.438315776907,
            "unit": "ns/iter",
            "extra": "iterations: 162805\ncpu: 4277.33606461718 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1705.0227430468426,
            "unit": "ns/iter",
            "extra": "iterations: 409180\ncpu: 1704.91603450804 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1829.9376568829166,
            "unit": "ns/iter",
            "extra": "iterations: 382849\ncpu: 1829.8373875862299 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1514.969871235087,
            "unit": "ns/iter",
            "extra": "iterations: 462548\ncpu: 1514.8620597213685 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1923.133376696909,
            "unit": "ns/iter",
            "extra": "iterations: 359748\ncpu: 1922.9985962395886 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 483.060922156117,
            "unit": "ns/iter",
            "extra": "iterations: 1448258\ncpu: 483.0412806281756 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2653.6219376783633,
            "unit": "ns/iter",
            "extra": "iterations: 269281\ncpu: 2653.4675227736075 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 132.07151399813935,
            "unit": "ns/iter",
            "extra": "iterations: 5306136\ncpu: 132.0657992934969 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 608.1058009180089,
            "unit": "ns/iter",
            "extra": "iterations: 1150973\ncpu: 608.0609779725501 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 538.9396200333166,
            "unit": "ns/iter",
            "extra": "iterations: 1310799\ncpu: 538.9141714328438 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1307.966190409571,
            "unit": "ns/iter",
            "extra": "iterations: 536475\ncpu: 1307.904685213666 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 228.6877340747008,
            "unit": "ns/iter",
            "extra": "iterations: 3048706\ncpu: 228.6848220195718 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5624285104.000023,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5623907372.000002 ns\nthreads: 1"
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
        "date": 1728073438684,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2110.93227359603,
            "unit": "ns/iter",
            "extra": "iterations: 328572\ncpu: 2110.932017944317 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 995.2322015271445,
            "unit": "ns/iter",
            "extra": "iterations: 697911\ncpu: 995.1873304762355 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1563.5187470442213,
            "unit": "ns/iter",
            "extra": "iterations: 450391\ncpu: 1563.4656864813016 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 186.05657062928154,
            "unit": "ns/iter",
            "extra": "iterations: 3749755\ncpu: 186.05112920710818 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 133.86187880672327,
            "unit": "ns/iter",
            "extra": "iterations: 5451705\ncpu: 133.85990914768863 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3969.5686488390234,
            "unit": "ns/iter",
            "extra": "iterations: 176019\ncpu: 3969.5259716280616 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1603.0770496451255,
            "unit": "ns/iter",
            "extra": "iterations: 430294\ncpu: 1603.0741330346223 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1843.58002534945,
            "unit": "ns/iter",
            "extra": "iterations: 381073\ncpu: 1843.5318718460776 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1521.1404179148549,
            "unit": "ns/iter",
            "extra": "iterations: 460333\ncpu: 1521.1043483738945 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1914.6678244962777,
            "unit": "ns/iter",
            "extra": "iterations: 367354\ncpu: 1914.6186974961458 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 485.47592558145504,
            "unit": "ns/iter",
            "extra": "iterations: 1499787\ncpu: 485.4755015212152 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2469.8819495903313,
            "unit": "ns/iter",
            "extra": "iterations: 282049\ncpu: 2469.84303791185 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 133.99974937606297,
            "unit": "ns/iter",
            "extra": "iterations: 5238925\ncpu: 133.99827311900805 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 603.3761531868886,
            "unit": "ns/iter",
            "extra": "iterations: 1158637\ncpu: 603.366847425035 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 492.9288556306975,
            "unit": "ns/iter",
            "extra": "iterations: 1409711\ncpu: 492.91906851829896 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1249.723336249835,
            "unit": "ns/iter",
            "extra": "iterations: 556589\ncpu: 1249.6778808061267 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 231.69834215547,
            "unit": "ns/iter",
            "extra": "iterations: 3037438\ncpu: 231.69591642693715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5671247164.000022,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5671097130 ns\nthreads: 1"
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
        "date": 1728077670118,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2150.838531070716,
            "unit": "ns/iter",
            "extra": "iterations: 319498\ncpu: 2150.7768405436027 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1014.5259667801068,
            "unit": "ns/iter",
            "extra": "iterations: 672128\ncpu: 1014.4699476885355 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1585.6168178052292,
            "unit": "ns/iter",
            "extra": "iterations: 446610\ncpu: 1585.5987819350212 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 189.6670047259465,
            "unit": "ns/iter",
            "extra": "iterations: 3675884\ncpu: 189.66264795080588 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 131.16755053733735,
            "unit": "ns/iter",
            "extra": "iterations: 5372958\ncpu: 131.1679687427298 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3973.3185083501467,
            "unit": "ns/iter",
            "extra": "iterations: 174840\ncpu: 3973.2829844429166 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1617.46360652784,
            "unit": "ns/iter",
            "extra": "iterations: 424142\ncpu: 1617.3990856835685 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1821.2875882190026,
            "unit": "ns/iter",
            "extra": "iterations: 386963\ncpu: 1821.27911970912 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1519.7146438794216,
            "unit": "ns/iter",
            "extra": "iterations: 459086\ncpu: 1519.6965318044968 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1902.9766575386898,
            "unit": "ns/iter",
            "extra": "iterations: 370655\ncpu: 1902.9373541433415 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 487.711083685754,
            "unit": "ns/iter",
            "extra": "iterations: 1437437\ncpu: 487.7064330471528 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2448.986799556753,
            "unit": "ns/iter",
            "extra": "iterations: 286051\ncpu: 2448.977951484176 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 130.82876110882083,
            "unit": "ns/iter",
            "extra": "iterations: 5371747\ncpu: 130.82806021951507 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 611.5463979764002,
            "unit": "ns/iter",
            "extra": "iterations: 1151214\ncpu: 611.5336271101625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 494.9992706380692,
            "unit": "ns/iter",
            "extra": "iterations: 1364206\ncpu: 494.9754531207169 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1253.6921027249127,
            "unit": "ns/iter",
            "extra": "iterations: 558813\ncpu: 1253.674057332237 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 220.26797175765276,
            "unit": "ns/iter",
            "extra": "iterations: 3254690\ncpu: 220.266538441449 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5822619687.999918,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5822432762.000002 ns\nthreads: 1"
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
        "date": 1728163954996,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2157.443111067481,
            "unit": "ns/iter",
            "extra": "iterations: 325406\ncpu: 2157.4329914015107 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1010.1316748109083,
            "unit": "ns/iter",
            "extra": "iterations: 691499\ncpu: 1010.107852650546 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1587.4074496242672,
            "unit": "ns/iter",
            "extra": "iterations: 446546\ncpu: 1587.3521787229085 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 189.76616545627544,
            "unit": "ns/iter",
            "extra": "iterations: 3693060\ncpu: 189.76208564171728 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.33344225009387,
            "unit": "ns/iter",
            "extra": "iterations: 5377195\ncpu: 130.33051377158532 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 4003.4457595706863,
            "unit": "ns/iter",
            "extra": "iterations: 175902\ncpu: 4003.397437209357 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1600.5836420159858,
            "unit": "ns/iter",
            "extra": "iterations: 433293\ncpu: 1600.4579695494735 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1831.707056654647,
            "unit": "ns/iter",
            "extra": "iterations: 382405\ncpu: 1831.5673592134 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1541.5439636414953,
            "unit": "ns/iter",
            "extra": "iterations: 451282\ncpu: 1541.4244352755038 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1918.3794686541914,
            "unit": "ns/iter",
            "extra": "iterations: 367896\ncpu: 1918.3197235088155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 488.771862292822,
            "unit": "ns/iter",
            "extra": "iterations: 1433244\ncpu: 488.729087301255 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2435.0954004714663,
            "unit": "ns/iter",
            "extra": "iterations: 286225\ncpu: 2434.9113005502654 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 131.28816761311816,
            "unit": "ns/iter",
            "extra": "iterations: 5271616\ncpu: 131.27633082531048 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 610.4297131321408,
            "unit": "ns/iter",
            "extra": "iterations: 1148159\ncpu: 610.4169169949473 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 491.7060027175176,
            "unit": "ns/iter",
            "extra": "iterations: 1422639\ncpu: 491.66478916998636 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1249.6863289430876,
            "unit": "ns/iter",
            "extra": "iterations: 560498\ncpu: 1249.6710389689154 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 215.59379945170397,
            "unit": "ns/iter",
            "extra": "iterations: 3244326\ncpu: 215.58460462974426 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5706044300.0000305,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5705507562.000001 ns\nthreads: 1"
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
        "date": 1728167195899,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2102.8899416170193,
            "unit": "ns/iter",
            "extra": "iterations: 334686\ncpu: 2102.872650783122 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1018.8232032510256,
            "unit": "ns/iter",
            "extra": "iterations: 699583\ncpu: 1018.8006083624102 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1602.2752290871967,
            "unit": "ns/iter",
            "extra": "iterations: 441098\ncpu: 1602.2249228062701 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 197.0797881557022,
            "unit": "ns/iter",
            "extra": "iterations: 3560917\ncpu: 197.07786365141328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 136.38791710381534,
            "unit": "ns/iter",
            "extra": "iterations: 5137510\ncpu: 136.3837316131745 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3986.9812880417835,
            "unit": "ns/iter",
            "extra": "iterations: 174808\ncpu: 3986.8315008466425 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1649.6578263142385,
            "unit": "ns/iter",
            "extra": "iterations: 426529\ncpu: 1649.5990401590516 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1878.3650978855896,
            "unit": "ns/iter",
            "extra": "iterations: 375387\ncpu: 1878.3314499436592 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1551.714037543228,
            "unit": "ns/iter",
            "extra": "iterations: 450150\ncpu: 1551.6634255248257 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1935.946835863937,
            "unit": "ns/iter",
            "extra": "iterations: 360920\ncpu: 1935.9101324393212 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 493.86646067021957,
            "unit": "ns/iter",
            "extra": "iterations: 1417500\ncpu: 493.85659823633193 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2526.396289074535,
            "unit": "ns/iter",
            "extra": "iterations: 276427\ncpu: 2526.3210684918636 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 138.9481546847761,
            "unit": "ns/iter",
            "extra": "iterations: 5019007\ncpu: 138.94568965534424 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 616.2985128938702,
            "unit": "ns/iter",
            "extra": "iterations: 1137713\ncpu: 616.295381172581 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 501.99104397465516,
            "unit": "ns/iter",
            "extra": "iterations: 1374382\ncpu: 501.98813066527254 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1253.0088459603785,
            "unit": "ns/iter",
            "extra": "iterations: 558447\ncpu: 1252.961221029033 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 220.01926683746882,
            "unit": "ns/iter",
            "extra": "iterations: 3121218\ncpu: 220.01206548212954 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5731730401.00005,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5731194100 ns\nthreads: 1"
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
        "date": 1728328137796,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2112.4333089986794,
            "unit": "ns/iter",
            "extra": "iterations: 324639\ncpu: 2112.2793348919877 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1003.3659147155175,
            "unit": "ns/iter",
            "extra": "iterations: 702262\ncpu: 1003.3463408243647 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1585.9772995229946,
            "unit": "ns/iter",
            "extra": "iterations: 447832\ncpu: 1585.9658019078577 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 195.23801720716875,
            "unit": "ns/iter",
            "extra": "iterations: 3706711\ncpu: 195.23453325603208 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.41380722521748,
            "unit": "ns/iter",
            "extra": "iterations: 5369551\ncpu: 130.40872225629292 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3983.675687795206,
            "unit": "ns/iter",
            "extra": "iterations: 176179\ncpu: 3983.6069281809937 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1627.2462329051973,
            "unit": "ns/iter",
            "extra": "iterations: 430836\ncpu: 1627.211760391425 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1826.0942154710865,
            "unit": "ns/iter",
            "extra": "iterations: 386168\ncpu: 1826.0459955252604 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1511.0817985770313,
            "unit": "ns/iter",
            "extra": "iterations: 461854\ncpu: 1511.0239079882367 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1910.4721482383475,
            "unit": "ns/iter",
            "extra": "iterations: 367948\ncpu: 1910.4056823246754 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 474.58265414389564,
            "unit": "ns/iter",
            "extra": "iterations: 1433449\ncpu: 474.5603715235077 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2465.4643459982926,
            "unit": "ns/iter",
            "extra": "iterations: 282591\ncpu: 2465.338598893806 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 133.7181353545071,
            "unit": "ns/iter",
            "extra": "iterations: 5269806\ncpu: 133.70992480558107 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 610.149126282917,
            "unit": "ns/iter",
            "extra": "iterations: 1148255\ncpu: 610.1165934396104 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 501.4753699999801,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 501.464283999999 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1247.8272182463447,
            "unit": "ns/iter",
            "extra": "iterations: 568839\ncpu: 1247.7718862454938 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 216.92529994296098,
            "unit": "ns/iter",
            "extra": "iterations: 3217695\ncpu: 216.91150373170802 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5766341066.999985,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5766099649.000001 ns\nthreads: 1"
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
        "date": 1728414530445,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2132.1391826053787,
            "unit": "ns/iter",
            "extra": "iterations: 329021\ncpu: 2132.042082420271 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 995.9575531542567,
            "unit": "ns/iter",
            "extra": "iterations: 704646\ncpu: 995.9238042932195 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1591.6686469332328,
            "unit": "ns/iter",
            "extra": "iterations: 443038\ncpu: 1591.6594626194599 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 189.967444816581,
            "unit": "ns/iter",
            "extra": "iterations: 3686479\ncpu: 189.96391706015422 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 128.9243936674019,
            "unit": "ns/iter",
            "extra": "iterations: 5441568\ncpu: 128.91908471969853 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 4004.4529876555353,
            "unit": "ns/iter",
            "extra": "iterations: 175539\ncpu: 4004.2804789818792 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1647.5039156081389,
            "unit": "ns/iter",
            "extra": "iterations: 440800\ncpu: 1647.481669691471 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1832.7724897692162,
            "unit": "ns/iter",
            "extra": "iterations: 383152\ncpu: 1832.7614106151111 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1513.4099875047823,
            "unit": "ns/iter",
            "extra": "iterations: 464180\ncpu: 1513.3854323753721 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1910.2143279209106,
            "unit": "ns/iter",
            "extra": "iterations: 367241\ncpu: 1910.143320054134 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 487.93005361544795,
            "unit": "ns/iter",
            "extra": "iterations: 1437644\ncpu: 487.92281607964173 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2497.6076719586567,
            "unit": "ns/iter",
            "extra": "iterations: 284647\ncpu: 2497.5875523016234 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 133.36198087549036,
            "unit": "ns/iter",
            "extra": "iterations: 5303352\ncpu: 133.3600794365528 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 611.4699592463875,
            "unit": "ns/iter",
            "extra": "iterations: 1147874\ncpu: 611.4459801337082 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 500.64128524284786,
            "unit": "ns/iter",
            "extra": "iterations: 1395036\ncpu: 500.6122695041561 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1295.457446637234,
            "unit": "ns/iter",
            "extra": "iterations: 559427\ncpu: 1295.39797507092 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 215.8250239883416,
            "unit": "ns/iter",
            "extra": "iterations: 3226568\ncpu: 215.81300161657828 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5715514252.000048,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5715178485.999999 ns\nthreads: 1"
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
        "date": 1728500439080,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2116.855635459668,
            "unit": "ns/iter",
            "extra": "iterations: 331508\ncpu: 2116.8157269206176 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 960.9093905515043,
            "unit": "ns/iter",
            "extra": "iterations: 725410\ncpu: 960.8880095394329 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1556.7342911793073,
            "unit": "ns/iter",
            "extra": "iterations: 454840\ncpu: 1556.729375164893 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 182.55865652215903,
            "unit": "ns/iter",
            "extra": "iterations: 3833930\ncpu: 182.55806522289134 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 129.10088676073576,
            "unit": "ns/iter",
            "extra": "iterations: 5422545\ncpu: 129.09924933771873 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3941.449329384307,
            "unit": "ns/iter",
            "extra": "iterations: 174914\ncpu: 3941.244783150574 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1598.2388769968538,
            "unit": "ns/iter",
            "extra": "iterations: 431201\ncpu: 1598.1797352046951 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1812.412012423902,
            "unit": "ns/iter",
            "extra": "iterations: 390862\ncpu: 1812.3113784404748 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1575.1451169510574,
            "unit": "ns/iter",
            "extra": "iterations: 470710\ncpu: 1575.0229738055284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1886.4706072656088,
            "unit": "ns/iter",
            "extra": "iterations: 370925\ncpu: 1886.3415434386995 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 477.24589646117147,
            "unit": "ns/iter",
            "extra": "iterations: 1462640\ncpu: 477.22778742547627 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2490.9084954619757,
            "unit": "ns/iter",
            "extra": "iterations: 283057\ncpu: 2490.7415856170273 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 131.62089933305793,
            "unit": "ns/iter",
            "extra": "iterations: 5241373\ncpu: 131.61105649225894 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 593.0286109442782,
            "unit": "ns/iter",
            "extra": "iterations: 1182170\ncpu: 592.9814823587138 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 489.42122347886993,
            "unit": "ns/iter",
            "extra": "iterations: 1420474\ncpu: 489.3968097972932 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1242.698094220741,
            "unit": "ns/iter",
            "extra": "iterations: 564441\ncpu: 1242.6360363616366 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 214.5869437633426,
            "unit": "ns/iter",
            "extra": "iterations: 3266393\ncpu: 214.5740889109183 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5588933613.999984,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5588563756.000003 ns\nthreads: 1"
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
        "date": 1728501159874,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2103.777276460901,
            "unit": "ns/iter",
            "extra": "iterations: 336004\ncpu: 2103.6952804133284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 968.1256848166763,
            "unit": "ns/iter",
            "extra": "iterations: 724829\ncpu: 968.0619318487535 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1541.646745924581,
            "unit": "ns/iter",
            "extra": "iterations: 448745\ncpu: 1541.5744843953692 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 181.83191920787004,
            "unit": "ns/iter",
            "extra": "iterations: 3855622\ncpu: 181.8138616804239 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 128.08484789004615,
            "unit": "ns/iter",
            "extra": "iterations: 5461444\ncpu: 128.07841186323623 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3955.229020840408,
            "unit": "ns/iter",
            "extra": "iterations: 176866\ncpu: 3954.914562437096 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1617.8160836918069,
            "unit": "ns/iter",
            "extra": "iterations: 439613\ncpu: 1617.7170761556197 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1792.6838354755919,
            "unit": "ns/iter",
            "extra": "iterations: 389000\ncpu: 1792.5701542416436 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1489.450824027333,
            "unit": "ns/iter",
            "extra": "iterations: 470494\ncpu: 1489.3267926902347 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1890.4523216424366,
            "unit": "ns/iter",
            "extra": "iterations: 372538\ncpu: 1890.3387010184213 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 460.2747335060566,
            "unit": "ns/iter",
            "extra": "iterations: 1461853\ncpu: 460.2469379616144 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2465.141843298037,
            "unit": "ns/iter",
            "extra": "iterations: 284349\ncpu: 2465.0050430984465 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 131.7349438817787,
            "unit": "ns/iter",
            "extra": "iterations: 5327502\ncpu: 131.72699400206704 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 591.8358946431208,
            "unit": "ns/iter",
            "extra": "iterations: 1182533\ncpu: 591.8233241693894 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 484.1518977455492,
            "unit": "ns/iter",
            "extra": "iterations: 1446901\ncpu: 484.1267066647966 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1238.154900760356,
            "unit": "ns/iter",
            "extra": "iterations: 568422\ncpu: 1238.125420902077 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 214.32451230182772,
            "unit": "ns/iter",
            "extra": "iterations: 3263904\ncpu: 214.3174116027922 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5631571362.999921,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5631150870.999999 ns\nthreads: 1"
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
        "date": 1728568137940,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2220.164543527712,
            "unit": "ns/iter",
            "extra": "iterations: 316591\ncpu: 2220.105530479388 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 983.7468202845617,
            "unit": "ns/iter",
            "extra": "iterations: 707296\ncpu: 983.7012891349591 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1613.392224377734,
            "unit": "ns/iter",
            "extra": "iterations: 433020\ncpu: 1613.2440672486262 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 184.13449810148208,
            "unit": "ns/iter",
            "extra": "iterations: 3798009\ncpu: 184.13047599413267 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 132.02378928525653,
            "unit": "ns/iter",
            "extra": "iterations: 5330467\ncpu: 132.0212112747346 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3541.7610203622376,
            "unit": "ns/iter",
            "extra": "iterations: 196636\ncpu: 3541.6488079497144 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1622.7606159786017,
            "unit": "ns/iter",
            "extra": "iterations: 426833\ncpu: 1622.7155796295042 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1811.783561056926,
            "unit": "ns/iter",
            "extra": "iterations: 387458\ncpu: 1811.7438457845756 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1500.7582677766131,
            "unit": "ns/iter",
            "extra": "iterations: 458255\ncpu: 1500.760135732289 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1901.92886974799,
            "unit": "ns/iter",
            "extra": "iterations: 368493\ncpu: 1901.9071488467898 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 498.8011441772997,
            "unit": "ns/iter",
            "extra": "iterations: 1399783\ncpu: 498.80153423780786 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2561.2610702894863,
            "unit": "ns/iter",
            "extra": "iterations: 273141\ncpu: 2561.208083004751 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 133.52214391673257,
            "unit": "ns/iter",
            "extra": "iterations: 5236472\ncpu: 133.5188206869052 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 594.8817042558945,
            "unit": "ns/iter",
            "extra": "iterations: 1174049\ncpu: 594.86268716212 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 466.4101305118239,
            "unit": "ns/iter",
            "extra": "iterations: 1498562\ncpu: 466.4054987381241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1240.6537466778373,
            "unit": "ns/iter",
            "extra": "iterations: 560243\ncpu: 1240.6190260297756 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 210.50621121560528,
            "unit": "ns/iter",
            "extra": "iterations: 3326402\ncpu: 210.50132365240248 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5524145599.999997,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5523888254.999999 ns\nthreads: 1"
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
        "date": 1728569145862,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2188.8999140608344,
            "unit": "ns/iter",
            "extra": "iterations: 319995\ncpu: 2188.802690667042 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 985.6932839270869,
            "unit": "ns/iter",
            "extra": "iterations: 704906\ncpu: 985.6699602500188 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1579.12097472252,
            "unit": "ns/iter",
            "extra": "iterations: 435529\ncpu: 1579.0599684521576 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 185.59769906352827,
            "unit": "ns/iter",
            "extra": "iterations: 3653469\ncpu: 185.5975706924021 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.64349981770602,
            "unit": "ns/iter",
            "extra": "iterations: 5406533\ncpu: 130.6367503906848 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3560.8001091235765,
            "unit": "ns/iter",
            "extra": "iterations: 194276\ncpu: 3560.7283606827395 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 33.711919255840755,
            "unit": "ns/iter",
            "extra": "iterations: 20699950\ncpu: 33.70994413029982 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1787.3600233276306,
            "unit": "ns/iter",
            "extra": "iterations: 392669\ncpu: 1787.3027639054767 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1519.580571897643,
            "unit": "ns/iter",
            "extra": "iterations: 467601\ncpu: 1516.3930145572808 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1857.4518876998072,
            "unit": "ns/iter",
            "extra": "iterations: 377523\ncpu: 1857.3658929389726 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 474.9713619283437,
            "unit": "ns/iter",
            "extra": "iterations: 1469233\ncpu: 474.9641118869507 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2497.794088860497,
            "unit": "ns/iter",
            "extra": "iterations: 278931\ncpu: 2497.723236212545 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 130.27684926457258,
            "unit": "ns/iter",
            "extra": "iterations: 5324103\ncpu: 130.26783028051875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 580.4941889563722,
            "unit": "ns/iter",
            "extra": "iterations: 1210798\ncpu: 580.4583778631943 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 465.3023697292546,
            "unit": "ns/iter",
            "extra": "iterations: 1507092\ncpu: 465.281106926451 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1243.9140167554606,
            "unit": "ns/iter",
            "extra": "iterations: 563761\ncpu: 1243.8494468400609 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 209.65668310319305,
            "unit": "ns/iter",
            "extra": "iterations: 3339923\ncpu: 209.63107772245135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5516969380.000092,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5516598764.999998 ns\nthreads: 1"
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
        "date": 1728587342179,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2155.0951887970436,
            "unit": "ns/iter",
            "extra": "iterations: 324555\ncpu: 2154.9892560582953 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 996.5209964099153,
            "unit": "ns/iter",
            "extra": "iterations: 705573\ncpu: 996.4754376939029 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1563.7120403300044,
            "unit": "ns/iter",
            "extra": "iterations: 444531\ncpu: 1563.6068553149273 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 185.38989233734895,
            "unit": "ns/iter",
            "extra": "iterations: 3775868\ncpu: 185.3825795817015 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 129.64526466619648,
            "unit": "ns/iter",
            "extra": "iterations: 5391225\ncpu: 129.6320799076277 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3569.723490252097,
            "unit": "ns/iter",
            "extra": "iterations: 197682\ncpu: 3569.5231128782625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 33.75155873900989,
            "unit": "ns/iter",
            "extra": "iterations: 20536472\ncpu: 33.750619337148095 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1801.3374465967886,
            "unit": "ns/iter",
            "extra": "iterations: 389958\ncpu: 1801.2373845388463 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1484.3910688477804,
            "unit": "ns/iter",
            "extra": "iterations: 469122\ncpu: 1484.3449486487523 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1875.0300829904775,
            "unit": "ns/iter",
            "extra": "iterations: 371007\ncpu: 1874.9503917715836 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 476.86901058847474,
            "unit": "ns/iter",
            "extra": "iterations: 1467256\ncpu: 476.8640884753586 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2538.9606350791937,
            "unit": "ns/iter",
            "extra": "iterations: 276312\ncpu: 2538.842069834096 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 131.82840572422572,
            "unit": "ns/iter",
            "extra": "iterations: 5304973\ncpu: 131.82235819107845 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 581.3334019689352,
            "unit": "ns/iter",
            "extra": "iterations: 1204429\ncpu: 581.3091547945136 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 487.87480412289113,
            "unit": "ns/iter",
            "extra": "iterations: 1492645\ncpu: 487.8647267099674 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1248.9922475663325,
            "unit": "ns/iter",
            "extra": "iterations: 562920\ncpu: 1248.9389096141545 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 210.25107522013033,
            "unit": "ns/iter",
            "extra": "iterations: 3322343\ncpu: 210.24417647425315 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5559082619.000037,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5556329052.999999 ns\nthreads: 1"
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
        "date": 1728592892411,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2169.7165764555325,
            "unit": "ns/iter",
            "extra": "iterations: 325347\ncpu: 2169.6467310287176 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 981.7494394887298,
            "unit": "ns/iter",
            "extra": "iterations: 687319\ncpu: 981.7114905887952 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1592.5544237793943,
            "unit": "ns/iter",
            "extra": "iterations: 441489\ncpu: 1592.4772463187076 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 180.02485957474525,
            "unit": "ns/iter",
            "extra": "iterations: 3889970\ncpu: 180.02195723874465 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.51063187652954,
            "unit": "ns/iter",
            "extra": "iterations: 5119228\ncpu: 130.50692194213661 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3520.438592379231,
            "unit": "ns/iter",
            "extra": "iterations: 200537\ncpu: 3520.396370744552 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 33.54106243272831,
            "unit": "ns/iter",
            "extra": "iterations: 20922567\ncpu: 33.540656125034744 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1799.7635709252675,
            "unit": "ns/iter",
            "extra": "iterations: 390375\ncpu: 1799.7236605827723 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1497.271063932209,
            "unit": "ns/iter",
            "extra": "iterations: 469701\ncpu: 1497.2528246693134 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1882.726012012194,
            "unit": "ns/iter",
            "extra": "iterations: 371290\ncpu: 1882.704225807318 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 482.31024682220965,
            "unit": "ns/iter",
            "extra": "iterations: 1453475\ncpu: 482.2945485818461 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2523.1219769292215,
            "unit": "ns/iter",
            "extra": "iterations: 284603\ncpu: 2523.065926922765 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 133.6719767972648,
            "unit": "ns/iter",
            "extra": "iterations: 5256619\ncpu: 133.67018153683952 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 600.2479797521946,
            "unit": "ns/iter",
            "extra": "iterations: 1167926\ncpu: 600.1970801232281 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 472.1355217474952,
            "unit": "ns/iter",
            "extra": "iterations: 1481895\ncpu: 472.1210713309648 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1242.3396573498328,
            "unit": "ns/iter",
            "extra": "iterations: 582752\ncpu: 1242.2619193070104 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 209.8878774342789,
            "unit": "ns/iter",
            "extra": "iterations: 3360287\ncpu: 209.87458303412754 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5507881609.000037,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5507436410.999997 ns\nthreads: 1"
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
        "date": 1728595392832,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2174.985408046147,
            "unit": "ns/iter",
            "extra": "iterations: 323603\ncpu: 2174.874886821198 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 977.4513869037038,
            "unit": "ns/iter",
            "extra": "iterations: 724095\ncpu: 977.4137992942918 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1550.5428167037169,
            "unit": "ns/iter",
            "extra": "iterations: 445819\ncpu: 1550.4942028042763 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 180.53857074311838,
            "unit": "ns/iter",
            "extra": "iterations: 3888958\ncpu: 180.53423744869457 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 128.79651600542286,
            "unit": "ns/iter",
            "extra": "iterations: 5421478\ncpu: 128.79524162968113 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3489.733631887188,
            "unit": "ns/iter",
            "extra": "iterations: 197396\ncpu: 3489.7218484670407 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 33.4368700655597,
            "unit": "ns/iter",
            "extra": "iterations: 20882431\ncpu: 33.436081603717504 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1782.26120768523,
            "unit": "ns/iter",
            "extra": "iterations: 393480\ncpu: 1782.2254447494142 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1485.9218420138002,
            "unit": "ns/iter",
            "extra": "iterations: 471788\ncpu: 1485.8767666833419 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1883.8885984928488,
            "unit": "ns/iter",
            "extra": "iterations: 376880\ncpu: 1883.8237369985136 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 481.5418599320939,
            "unit": "ns/iter",
            "extra": "iterations: 1452881\ncpu: 481.5299849058534 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2447.594610993615,
            "unit": "ns/iter",
            "extra": "iterations: 286769\ncpu: 2447.539559715313 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 132.0714280042046,
            "unit": "ns/iter",
            "extra": "iterations: 5288976\ncpu: 132.0699400035093 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 599.0656722803168,
            "unit": "ns/iter",
            "extra": "iterations: 1164068\ncpu: 599.0401213674799 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 472.2450434111126,
            "unit": "ns/iter",
            "extra": "iterations: 1480958\ncpu: 472.23040423833714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1226.8275637836662,
            "unit": "ns/iter",
            "extra": "iterations: 562840\ncpu: 1226.8044097789789 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 209.68793416543483,
            "unit": "ns/iter",
            "extra": "iterations: 3354712\ncpu: 209.67819800924758 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5483468854.000023,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5483170714 ns\nthreads: 1"
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
        "date": 1728596517267,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2128.076861965134,
            "unit": "ns/iter",
            "extra": "iterations: 329786\ncpu: 2128.0655788905533 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1002.8146386044235,
            "unit": "ns/iter",
            "extra": "iterations: 695927\ncpu: 1002.801309620118 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1630.9593186771508,
            "unit": "ns/iter",
            "extra": "iterations: 417071\ncpu: 1630.9297769444531 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 181.08993959471638,
            "unit": "ns/iter",
            "extra": "iterations: 3867707\ncpu: 181.0852947237214 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 129.81869169033394,
            "unit": "ns/iter",
            "extra": "iterations: 5392974\ncpu: 129.81533435911254 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3551.6944333116962,
            "unit": "ns/iter",
            "extra": "iterations: 197119\ncpu: 3551.6557358752816 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 32.55396513199086,
            "unit": "ns/iter",
            "extra": "iterations: 21547719\ncpu: 32.553274525252526 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1786.5987469060244,
            "unit": "ns/iter",
            "extra": "iterations: 391511\ncpu: 1786.5674425495076 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1503.5467933626228,
            "unit": "ns/iter",
            "extra": "iterations: 465472\ncpu: 1503.446931286951 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1882.173808824814,
            "unit": "ns/iter",
            "extra": "iterations: 371293\ncpu: 1882.090093268656 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 481.657403195996,
            "unit": "ns/iter",
            "extra": "iterations: 1453271\ncpu: 481.6320727517435 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2423.8484124131837,
            "unit": "ns/iter",
            "extra": "iterations: 289496\ncpu: 2423.697063171861 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 133.98170960031456,
            "unit": "ns/iter",
            "extra": "iterations: 5258387\ncpu: 133.97389560715106 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 599.1407891480193,
            "unit": "ns/iter",
            "extra": "iterations: 1167867\ncpu: 599.1365754833388 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 475.5293533359972,
            "unit": "ns/iter",
            "extra": "iterations: 1469867\ncpu: 475.50454632970167 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1248.2066861473375,
            "unit": "ns/iter",
            "extra": "iterations: 562955\ncpu: 1248.1527280155608 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 210.36840247183747,
            "unit": "ns/iter",
            "extra": "iterations: 3331115\ncpu: 210.36464697256085 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5548031551.999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5547652567 ns\nthreads: 1"
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
        "date": 1728597539451,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2135.7396648484587,
            "unit": "ns/iter",
            "extra": "iterations: 328926\ncpu: 2135.6839623501946 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 956.0751725731602,
            "unit": "ns/iter",
            "extra": "iterations: 735920\ncpu: 956.076059897815 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1605.1569766261202,
            "unit": "ns/iter",
            "extra": "iterations: 443187\ncpu: 1605.158303379838 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 179.4524554466117,
            "unit": "ns/iter",
            "extra": "iterations: 3917210\ncpu: 179.45107691443667 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.60677402774948,
            "unit": "ns/iter",
            "extra": "iterations: 5379665\ncpu: 130.60222467384122 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3544.2524505272713,
            "unit": "ns/iter",
            "extra": "iterations: 200059\ncpu: 3544.2199401176654 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 33.449290037406946,
            "unit": "ns/iter",
            "extra": "iterations: 20936596\ncpu: 33.44931272495301 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1812.8220854612528,
            "unit": "ns/iter",
            "extra": "iterations: 386725\ncpu: 1812.7886534359016 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1496.3260140177208,
            "unit": "ns/iter",
            "extra": "iterations: 469124\ncpu: 1496.2578614609374 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1897.4478142873231,
            "unit": "ns/iter",
            "extra": "iterations: 369948\ncpu: 1897.386881399549 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 481.4698865501708,
            "unit": "ns/iter",
            "extra": "iterations: 1452889\ncpu: 481.4566329568193 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2424.343904452599,
            "unit": "ns/iter",
            "extra": "iterations: 287103\ncpu: 2424.2480921481106 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 133.14509385951501,
            "unit": "ns/iter",
            "extra": "iterations: 5255088\ncpu: 133.13807190288742 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 605.3871128443448,
            "unit": "ns/iter",
            "extra": "iterations: 1156221\ncpu: 605.3670474762179 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 473.31565413507064,
            "unit": "ns/iter",
            "extra": "iterations: 1477386\ncpu: 473.2992427165279 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1257.4498797324077,
            "unit": "ns/iter",
            "extra": "iterations: 571226\ncpu: 1257.4043600956525 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 208.93379048145422,
            "unit": "ns/iter",
            "extra": "iterations: 3352524\ncpu: 208.92987641550133 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5495286106.9999695,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5495010550 ns\nthreads: 1"
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
        "date": 1728598859995,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2136.352662386968,
            "unit": "ns/iter",
            "extra": "iterations: 332108\ncpu: 2136.2985805822204 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 969.6580404212965,
            "unit": "ns/iter",
            "extra": "iterations: 718930\ncpu: 969.5893703142166 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1624.3589105705537,
            "unit": "ns/iter",
            "extra": "iterations: 432520\ncpu: 1624.2506450568762 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 179.53087584359727,
            "unit": "ns/iter",
            "extra": "iterations: 3878809\ncpu: 179.51641831294103 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 131.3788323741565,
            "unit": "ns/iter",
            "extra": "iterations: 5334911\ncpu: 131.37416462992545 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3531.6118436671886,
            "unit": "ns/iter",
            "extra": "iterations: 198013\ncpu: 3531.4449707847457 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 33.069912531345686,
            "unit": "ns/iter",
            "extra": "iterations: 20707990\ncpu: 33.06879170793494 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1812.212505167662,
            "unit": "ns/iter",
            "extra": "iterations: 391854\ncpu: 1812.1694916984409 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1483.1050044134547,
            "unit": "ns/iter",
            "extra": "iterations: 473542\ncpu: 1483.0828353134473 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1874.8941280902843,
            "unit": "ns/iter",
            "extra": "iterations: 376266\ncpu: 1874.862953336205 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 482.039007683336,
            "unit": "ns/iter",
            "extra": "iterations: 1451714\ncpu: 482.03365332290036 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2458.160970640438,
            "unit": "ns/iter",
            "extra": "iterations: 285667\ncpu: 2458.0005880973317 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 134.3032565119076,
            "unit": "ns/iter",
            "extra": "iterations: 5103221\ncpu: 134.2960963281817 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 606.1745326558644,
            "unit": "ns/iter",
            "extra": "iterations: 1153807\ncpu: 606.145259995823 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 473.9668792029137,
            "unit": "ns/iter",
            "extra": "iterations: 1474572\ncpu: 473.9562639192935 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1248.1741195366385,
            "unit": "ns/iter",
            "extra": "iterations: 564078\ncpu: 1248.1453575569321 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 209.49261367760937,
            "unit": "ns/iter",
            "extra": "iterations: 3345711\ncpu: 209.490719311979 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5529102521.000027,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5528915095.000002 ns\nthreads: 1"
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
        "date": 1728653857623,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2197.216756198936,
            "unit": "ns/iter",
            "extra": "iterations: 323534\ncpu: 2197.142408525843 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 972.7178549544182,
            "unit": "ns/iter",
            "extra": "iterations: 704992\ncpu: 972.6678231809723 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1614.6910811917624,
            "unit": "ns/iter",
            "extra": "iterations: 436953\ncpu: 1614.6032044636383 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 181.61538733476021,
            "unit": "ns/iter",
            "extra": "iterations: 3903600\ncpu: 181.52133825187013 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 129.9578128478961,
            "unit": "ns/iter",
            "extra": "iterations: 5371588\ncpu: 129.9485196928729 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3509.661896950024,
            "unit": "ns/iter",
            "extra": "iterations: 199942\ncpu: 3509.418911484329 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 33.120863821716924,
            "unit": "ns/iter",
            "extra": "iterations: 21095742\ncpu: 33.11843612801103 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1783.151211509941,
            "unit": "ns/iter",
            "extra": "iterations: 395003\ncpu: 1783.0389110968772 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1469.08672469018,
            "unit": "ns/iter",
            "extra": "iterations: 476358\ncpu: 1468.9431750910032 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1847.7535972834391,
            "unit": "ns/iter",
            "extra": "iterations: 379314\ncpu: 1847.6955292976286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 480.365058223926,
            "unit": "ns/iter",
            "extra": "iterations: 1458077\ncpu: 480.3346160730882 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2391.719039505017,
            "unit": "ns/iter",
            "extra": "iterations: 292849\ncpu: 2391.5729778828018 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 133.75532873978995,
            "unit": "ns/iter",
            "extra": "iterations: 5266536\ncpu: 133.74793849315768 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 603.6879982005977,
            "unit": "ns/iter",
            "extra": "iterations: 1160426\ncpu: 603.6695084391428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 470.8338664746431,
            "unit": "ns/iter",
            "extra": "iterations: 1486160\ncpu: 470.8045089357806 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1243.5704803866413,
            "unit": "ns/iter",
            "extra": "iterations: 562880\ncpu: 1243.5441870380866 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 205.96763564681928,
            "unit": "ns/iter",
            "extra": "iterations: 3395804\ncpu: 205.95653547731294 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5623182831.999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5622713979 ns\nthreads: 1"
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
        "date": 1728654862991,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2253.424778679465,
            "unit": "ns/iter",
            "extra": "iterations: 326676\ncpu: 2253.413158603632 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 960.2907943600823,
            "unit": "ns/iter",
            "extra": "iterations: 719787\ncpu: 960.1955828599293 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1578.429682701226,
            "unit": "ns/iter",
            "extra": "iterations: 446078\ncpu: 1578.2606337905024 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 181.44707339430656,
            "unit": "ns/iter",
            "extra": "iterations: 3883680\ncpu: 181.43704862398553 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 128.34650094743466,
            "unit": "ns/iter",
            "extra": "iterations: 5436343\ncpu: 128.33623172783618 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3499.9090474340906,
            "unit": "ns/iter",
            "extra": "iterations: 200742\ncpu: 3499.642775303622 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 33.46909453930829,
            "unit": "ns/iter",
            "extra": "iterations: 20933388\ncpu: 33.46776045043449 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1820.0803606551588,
            "unit": "ns/iter",
            "extra": "iterations: 386408\ncpu: 1820.0006185172124 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1514.0928670346043,
            "unit": "ns/iter",
            "extra": "iterations: 464309\ncpu: 1514.0844674559378 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1906.715118944506,
            "unit": "ns/iter",
            "extra": "iterations: 368617\ncpu: 1906.6050290681123 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 486.2853576118158,
            "unit": "ns/iter",
            "extra": "iterations: 1441493\ncpu: 486.2463917618745 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2538.6131622750513,
            "unit": "ns/iter",
            "extra": "iterations: 277566\ncpu: 2538.448405064025 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 133.28450425406004,
            "unit": "ns/iter",
            "extra": "iterations: 5252519\ncpu: 133.2789038935415 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 613.4406709939428,
            "unit": "ns/iter",
            "extra": "iterations: 1157149\ncpu: 613.4372375554057 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 472.6603954965137,
            "unit": "ns/iter",
            "extra": "iterations: 1480266\ncpu: 472.62100865655253 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1242.279238931118,
            "unit": "ns/iter",
            "extra": "iterations: 563786\ncpu: 1242.2330210398957 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 208.5074608741865,
            "unit": "ns/iter",
            "extra": "iterations: 3351752\ncpu: 208.50423062326828 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5533763547.000035,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5533328595.999997 ns\nthreads: 1"
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
        "date": 1728656498472,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2176.9784075202147,
            "unit": "ns/iter",
            "extra": "iterations: 326271\ncpu: 2176.8973951102003 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 958.9518617232611,
            "unit": "ns/iter",
            "extra": "iterations: 720757\ncpu: 958.9321047176785 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1568.6355436610318,
            "unit": "ns/iter",
            "extra": "iterations: 442031\ncpu: 1568.5703491384083 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 179.58244392889955,
            "unit": "ns/iter",
            "extra": "iterations: 3895678\ncpu: 179.57802390238626 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.07306015598047,
            "unit": "ns/iter",
            "extra": "iterations: 5380046\ncpu: 130.06778324943696 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3490.8710586318375,
            "unit": "ns/iter",
            "extra": "iterations: 199106\ncpu: 3490.876161441644 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 33.46466711060523,
            "unit": "ns/iter",
            "extra": "iterations: 20914409\ncpu: 33.46346793734408 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1791.3471075011705,
            "unit": "ns/iter",
            "extra": "iterations: 392498\ncpu: 1791.3079251359243 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1477.3005678463987,
            "unit": "ns/iter",
            "extra": "iterations: 470902\ncpu: 1477.2418507460143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1852.9408610124974,
            "unit": "ns/iter",
            "extra": "iterations: 377602\ncpu: 1852.8830249839773 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 481.59945836437515,
            "unit": "ns/iter",
            "extra": "iterations: 1451160\ncpu: 481.5816891314525 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2410.8706263628987,
            "unit": "ns/iter",
            "extra": "iterations: 280173\ncpu: 2410.8492609923132 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 133.53551498543834,
            "unit": "ns/iter",
            "extra": "iterations: 5221303\ncpu: 133.53397265012197 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 600.0668822617672,
            "unit": "ns/iter",
            "extra": "iterations: 1164838\ncpu: 600.0410889754623 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 472.8652933571193,
            "unit": "ns/iter",
            "extra": "iterations: 1477210\ncpu: 472.84203464639444 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1243.43785705884,
            "unit": "ns/iter",
            "extra": "iterations: 569759\ncpu: 1243.4268752226808 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 208.64555748286318,
            "unit": "ns/iter",
            "extra": "iterations: 3358175\ncpu: 208.64033500338778 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5571823074.000008,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5571512451 ns\nthreads: 1"
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
        "date": 1728660934180,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2113.328638128594,
            "unit": "ns/iter",
            "extra": "iterations: 330905\ncpu: 2113.3012798235145 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1024.0604276641184,
            "unit": "ns/iter",
            "extra": "iterations: 682171\ncpu: 1024.0062447685407 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1603.6627109395008,
            "unit": "ns/iter",
            "extra": "iterations: 434307\ncpu: 1603.5802508363904 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 180.96881592437913,
            "unit": "ns/iter",
            "extra": "iterations: 3887978\ncpu: 180.9574701811584 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.28620326188562,
            "unit": "ns/iter",
            "extra": "iterations: 5382091\ncpu: 130.2764338246976 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3640.693648288703,
            "unit": "ns/iter",
            "extra": "iterations: 200198\ncpu: 3640.46289173718 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 32.46772004720749,
            "unit": "ns/iter",
            "extra": "iterations: 20945074\ncpu: 32.46716554928381 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1816.1448587632337,
            "unit": "ns/iter",
            "extra": "iterations: 369415\ncpu: 1816.1274095529418 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1499.677035818621,
            "unit": "ns/iter",
            "extra": "iterations: 466962\ncpu: 1499.608154410852 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1895.024806506937,
            "unit": "ns/iter",
            "extra": "iterations: 365388\ncpu: 1895.00454311581 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 481.65934967794766,
            "unit": "ns/iter",
            "extra": "iterations: 1453649\ncpu: 481.6489661534529 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2431.1528671331066,
            "unit": "ns/iter",
            "extra": "iterations: 286000\ncpu: 2431.148870629372 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 133.95679811078188,
            "unit": "ns/iter",
            "extra": "iterations: 5256784\ncpu: 133.95193106659883 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 601.7655572030578,
            "unit": "ns/iter",
            "extra": "iterations: 1169394\ncpu: 601.7514174008085 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 473.6924520961653,
            "unit": "ns/iter",
            "extra": "iterations: 1475562\ncpu: 473.68735641064194 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1244.5978290579721,
            "unit": "ns/iter",
            "extra": "iterations: 559757\ncpu: 1244.596044354959 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 209.67776786519102,
            "unit": "ns/iter",
            "extra": "iterations: 3329100\ncpu: 209.67745426691874 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5509634097.999992,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5509428441.999997 ns\nthreads: 1"
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
        "date": 1728663352746,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2137.107548344646,
            "unit": "ns/iter",
            "extra": "iterations: 327648\ncpu: 2137.014698701045 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 971.4310574447973,
            "unit": "ns/iter",
            "extra": "iterations: 721579\ncpu: 971.3890592714035 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1624.5323667293087,
            "unit": "ns/iter",
            "extra": "iterations: 441132\ncpu: 1624.4583095309347 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 194.55649009562518,
            "unit": "ns/iter",
            "extra": "iterations: 3917554\ncpu: 194.54813896630392 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.75279391365666,
            "unit": "ns/iter",
            "extra": "iterations: 5352975\ncpu: 130.74929156216874 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3516.8228920572333,
            "unit": "ns/iter",
            "extra": "iterations: 196400\ncpu: 3516.6046690427706 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 33.42734956180857,
            "unit": "ns/iter",
            "extra": "iterations: 20944299\ncpu: 33.42628640853528 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1789.6755700940773,
            "unit": "ns/iter",
            "extra": "iterations: 393444\ncpu: 1789.6135739774927 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1545.4653543788488,
            "unit": "ns/iter",
            "extra": "iterations: 473321\ncpu: 1545.39236374469 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1868.3250695416339,
            "unit": "ns/iter",
            "extra": "iterations: 373517\ncpu: 1868.2700733835377 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 482.89917500663046,
            "unit": "ns/iter",
            "extra": "iterations: 1447042\ncpu: 482.8779731341589 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2439.3484272766427,
            "unit": "ns/iter",
            "extra": "iterations: 269755\ncpu: 2439.237148523659 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 133.8165896172112,
            "unit": "ns/iter",
            "extra": "iterations: 5091751\ncpu: 133.8079466179706 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 619.8431870746065,
            "unit": "ns/iter",
            "extra": "iterations: 1153572\ncpu: 619.8097223233567 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 473.8063719910758,
            "unit": "ns/iter",
            "extra": "iterations: 1475928\ncpu: 473.7886678753977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1257.7812403119715,
            "unit": "ns/iter",
            "extra": "iterations: 558037\ncpu: 1257.7594514342197 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 210.59358200867436,
            "unit": "ns/iter",
            "extra": "iterations: 3345969\ncpu: 210.5866025656545 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5514657437.999972,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5514245644.000003 ns\nthreads: 1"
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
        "date": 1728669591409,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2173.2134143557723,
            "unit": "ns/iter",
            "extra": "iterations: 306418\ncpu: 2173.1693862632096 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 979.3410819526543,
            "unit": "ns/iter",
            "extra": "iterations: 721806\ncpu: 979.3176518344268 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1588.8717214413202,
            "unit": "ns/iter",
            "extra": "iterations: 442420\ncpu: 1588.8590095384468 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 179.4538996182834,
            "unit": "ns/iter",
            "extra": "iterations: 3900651\ncpu: 179.4500082165772 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.66353059515342,
            "unit": "ns/iter",
            "extra": "iterations: 5382424\ncpu: 130.65934437718025 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3507.1594458249906,
            "unit": "ns/iter",
            "extra": "iterations: 199215\ncpu: 3507.0828803051972 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 32.54991829237319,
            "unit": "ns/iter",
            "extra": "iterations: 21529202\ncpu: 32.548348610412965 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1787.723163582305,
            "unit": "ns/iter",
            "extra": "iterations: 391809\ncpu: 1787.692207172374 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1500.563687925136,
            "unit": "ns/iter",
            "extra": "iterations: 472515\ncpu: 1500.4729077383763 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1871.1931806557718,
            "unit": "ns/iter",
            "extra": "iterations: 371414\ncpu: 1871.0911570376975 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 482.1329415019169,
            "unit": "ns/iter",
            "extra": "iterations: 1453346\ncpu: 482.12776517085393 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2429.7498096707686,
            "unit": "ns/iter",
            "extra": "iterations: 286346\ncpu: 2429.7198005210466 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 133.5130175741457,
            "unit": "ns/iter",
            "extra": "iterations: 5248789\ncpu: 133.50514509156287 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 610.2876083325023,
            "unit": "ns/iter",
            "extra": "iterations: 1153162\ncpu: 610.250221564706 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 477.1177325521879,
            "unit": "ns/iter",
            "extra": "iterations: 1466918\ncpu: 477.08989255023033 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1262.7927907103801,
            "unit": "ns/iter",
            "extra": "iterations: 545130\ncpu: 1262.7544952580095 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 209.0990445720801,
            "unit": "ns/iter",
            "extra": "iterations: 3325735\ncpu: 209.09171987545616 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5779102297.999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5778657062.000001 ns\nthreads: 1"
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
        "date": 1728670443785,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2170.3743446640433,
            "unit": "ns/iter",
            "extra": "iterations: 322163\ncpu: 2170.2114085105986 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1026.788488768698,
            "unit": "ns/iter",
            "extra": "iterations: 683628\ncpu: 1026.71575769278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1624.1099953682283,
            "unit": "ns/iter",
            "extra": "iterations: 431800\ncpu: 1624.0052616952296 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 195.35793659453046,
            "unit": "ns/iter",
            "extra": "iterations: 3813424\ncpu: 195.34931232404276 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 131.2571239207513,
            "unit": "ns/iter",
            "extra": "iterations: 5339686\ncpu: 131.25471759949937 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3801.0493610501057,
            "unit": "ns/iter",
            "extra": "iterations: 184052\ncpu: 3800.978701671266 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 32.09739736099945,
            "unit": "ns/iter",
            "extra": "iterations: 21513971\ncpu: 32.09447354000799 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1804.4053999071805,
            "unit": "ns/iter",
            "extra": "iterations: 388340\ncpu: 1804.3013828088804 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1505.8608170194593,
            "unit": "ns/iter",
            "extra": "iterations: 460552\ncpu: 1505.7979858951855 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1891.471382412993,
            "unit": "ns/iter",
            "extra": "iterations: 367676\ncpu: 1891.3771309522501 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 480.5282120123193,
            "unit": "ns/iter",
            "extra": "iterations: 1456330\ncpu: 480.50103822622737 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2443.066355130267,
            "unit": "ns/iter",
            "extra": "iterations: 285253\ncpu: 2442.9527016367942 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 138.1487958838616,
            "unit": "ns/iter",
            "extra": "iterations: 5290395\ncpu: 138.14527440767665 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 598.5307973600096,
            "unit": "ns/iter",
            "extra": "iterations: 1155927\ncpu: 598.5053052658171 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 516.1536588657121,
            "unit": "ns/iter",
            "extra": "iterations: 1356199\ncpu: 516.1444220206619 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1301.0700728761556,
            "unit": "ns/iter",
            "extra": "iterations: 538996\ncpu: 1301.0129370162301 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 222.28742288759543,
            "unit": "ns/iter",
            "extra": "iterations: 3136817\ncpu: 222.28167279124085 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5481160259.000034,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5480575208.999998 ns\nthreads: 1"
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
        "date": 1728671943342,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2105.1106745487705,
            "unit": "ns/iter",
            "extra": "iterations: 337485\ncpu: 2105.0888217254105 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1018.5094102704204,
            "unit": "ns/iter",
            "extra": "iterations: 690469\ncpu: 1018.438562773998 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1659.8907280490973,
            "unit": "ns/iter",
            "extra": "iterations: 425919\ncpu: 1659.7933081172703 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 183.3500397405002,
            "unit": "ns/iter",
            "extra": "iterations: 3829848\ncpu: 183.3381692954916 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 131.63353163428425,
            "unit": "ns/iter",
            "extra": "iterations: 5312464\ncpu: 131.63100493480997 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3793.4469468819834,
            "unit": "ns/iter",
            "extra": "iterations: 185286\ncpu: 3793.248745183122 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 32.52067729852961,
            "unit": "ns/iter",
            "extra": "iterations: 21535260\ncpu: 32.520445817696185 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1804.0293375379326,
            "unit": "ns/iter",
            "extra": "iterations: 387524\ncpu: 1803.9192127455321 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1507.6647223422817,
            "unit": "ns/iter",
            "extra": "iterations: 464943\ncpu: 1507.6403774226078 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1887.468363516614,
            "unit": "ns/iter",
            "extra": "iterations: 358036\ncpu: 1887.4131819146685 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 481.93936483761297,
            "unit": "ns/iter",
            "extra": "iterations: 1448417\ncpu: 481.91909926492065 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2470.271941343755,
            "unit": "ns/iter",
            "extra": "iterations: 283278\ncpu: 2470.1579190759617 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 137.68855208236334,
            "unit": "ns/iter",
            "extra": "iterations: 4978460\ncpu: 137.68667579934353 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 605.2190895614962,
            "unit": "ns/iter",
            "extra": "iterations: 1153510\ncpu: 605.2143067680382 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 518.2994117881791,
            "unit": "ns/iter",
            "extra": "iterations: 1351894\ncpu: 518.2657545635986 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1285.8222314491036,
            "unit": "ns/iter",
            "extra": "iterations: 541890\ncpu: 1285.7397460739248 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 223.12060945227495,
            "unit": "ns/iter",
            "extra": "iterations: 3138162\ncpu: 223.1009578218076 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5621398539.999973,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5621051394.999998 ns\nthreads: 1"
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
        "date": 1728672186639,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2118.748205350983,
            "unit": "ns/iter",
            "extra": "iterations: 329173\ncpu: 2118.7076795484445 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1024.686902048728,
            "unit": "ns/iter",
            "extra": "iterations: 685779\ncpu: 1024.6582980814521 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1667.2276952895122,
            "unit": "ns/iter",
            "extra": "iterations: 426188\ncpu: 1667.1604409321706 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 181.43617658291055,
            "unit": "ns/iter",
            "extra": "iterations: 3881146\ncpu: 181.4348097185729 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.2021838202546,
            "unit": "ns/iter",
            "extra": "iterations: 5383868\ncpu: 130.1955252246155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3805.263500244285,
            "unit": "ns/iter",
            "extra": "iterations: 185867\ncpu: 3805.232429640547 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 32.24451011579385,
            "unit": "ns/iter",
            "extra": "iterations: 21745996\ncpu: 32.244017473377596 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1802.3824136972846,
            "unit": "ns/iter",
            "extra": "iterations: 389212\ncpu: 1802.361764282705 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1503.1280126789916,
            "unit": "ns/iter",
            "extra": "iterations: 451135\ncpu: 1503.0913185631769 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1887.6695791716525,
            "unit": "ns/iter",
            "extra": "iterations: 372646\ncpu: 1887.5950312092432 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 477.7836797819292,
            "unit": "ns/iter",
            "extra": "iterations: 1466451\ncpu: 477.7862397038835 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2442.2766912016245,
            "unit": "ns/iter",
            "extra": "iterations: 287754\ncpu: 2442.255718426156 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 135.47460564715678,
            "unit": "ns/iter",
            "extra": "iterations: 5054864\ncpu: 135.4682723412536 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 598.0328807417822,
            "unit": "ns/iter",
            "extra": "iterations: 1166762\ncpu: 597.9907487559598 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 518.6461448229502,
            "unit": "ns/iter",
            "extra": "iterations: 1346955\ncpu: 518.6294501301094 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1289.4409899097393,
            "unit": "ns/iter",
            "extra": "iterations: 542797\ncpu: 1289.4080899489122 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 222.1619993146715,
            "unit": "ns/iter",
            "extra": "iterations: 3163464\ncpu: 222.15587944101748 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5717623537.999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5717333462.000003 ns\nthreads: 1"
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
        "date": 1728673774004,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2115.6801718407282,
            "unit": "ns/iter",
            "extra": "iterations: 321926\ncpu: 2115.5825158576818 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1059.8590764582987,
            "unit": "ns/iter",
            "extra": "iterations: 662125\ncpu: 1059.8420977912026 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1650.2428700370192,
            "unit": "ns/iter",
            "extra": "iterations: 418796\ncpu: 1650.1962673951034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 183.58493238381504,
            "unit": "ns/iter",
            "extra": "iterations: 3809813\ncpu: 183.58226217402256 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 131.46954203655602,
            "unit": "ns/iter",
            "extra": "iterations: 5322237\ncpu: 131.46565175507962 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3859.936498811383,
            "unit": "ns/iter",
            "extra": "iterations: 180910\ncpu: 3859.9175722735076 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 33.10249722541583,
            "unit": "ns/iter",
            "extra": "iterations: 21078834\ncpu: 33.101834380402614 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1877.994573930771,
            "unit": "ns/iter",
            "extra": "iterations: 374857\ncpu: 1877.9491245995155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1569.1585099020665,
            "unit": "ns/iter",
            "extra": "iterations: 447890\ncpu: 1569.109305856349 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1956.5711425030001,
            "unit": "ns/iter",
            "extra": "iterations: 358056\ncpu: 1956.4863345398492 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 478.9805044644016,
            "unit": "ns/iter",
            "extra": "iterations: 1457308\ncpu: 478.9727394620761 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2572.9070645210763,
            "unit": "ns/iter",
            "extra": "iterations: 272361\ncpu: 2572.799589515383 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 134.71649811565348,
            "unit": "ns/iter",
            "extra": "iterations: 5199909\ncpu: 134.7134901783857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 599.5577557530147,
            "unit": "ns/iter",
            "extra": "iterations: 1173026\ncpu: 599.523951728265 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 526.6842172253178,
            "unit": "ns/iter",
            "extra": "iterations: 1312057\ncpu: 526.6609659488882 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1308.1940894795428,
            "unit": "ns/iter",
            "extra": "iterations: 528143\ncpu: 1308.1573683642512 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 225.3230051342133,
            "unit": "ns/iter",
            "extra": "iterations: 3055970\ncpu: 225.3199249338178 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5513867582.999978,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5513583542.999999 ns\nthreads: 1"
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
        "date": 1728683399701,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2160.3723010695044,
            "unit": "ns/iter",
            "extra": "iterations: 327074\ncpu: 2160.2882100075217 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1030.6849279129694,
            "unit": "ns/iter",
            "extra": "iterations: 670856\ncpu: 1030.6516033247078 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1636.7701350664254,
            "unit": "ns/iter",
            "extra": "iterations: 428382\ncpu: 1636.7023964592356 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 183.78160430658477,
            "unit": "ns/iter",
            "extra": "iterations: 3813523\ncpu: 183.77708355240026 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 131.01388877462762,
            "unit": "ns/iter",
            "extra": "iterations: 5347772\ncpu: 131.00944972971922 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3807.7855817507284,
            "unit": "ns/iter",
            "extra": "iterations: 183240\ncpu: 3807.6875300152765 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 33.10641676732541,
            "unit": "ns/iter",
            "extra": "iterations: 21137684\ncpu: 33.1047426482485 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1815.5032071435935,
            "unit": "ns/iter",
            "extra": "iterations: 386481\ncpu: 1815.450888918212 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1505.564089624996,
            "unit": "ns/iter",
            "extra": "iterations: 463710\ncpu: 1505.487300252314 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1886.679062071379,
            "unit": "ns/iter",
            "extra": "iterations: 371670\ncpu: 1886.618260822775 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 477.8358902788615,
            "unit": "ns/iter",
            "extra": "iterations: 1466007\ncpu: 477.8168603560552 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2429.876354100556,
            "unit": "ns/iter",
            "extra": "iterations: 288291\ncpu: 2429.80654269471 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 134.38188890755004,
            "unit": "ns/iter",
            "extra": "iterations: 5191117\ncpu: 134.37848540111895 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 593.5916680516334,
            "unit": "ns/iter",
            "extra": "iterations: 1185293\ncpu: 593.5651514013829 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 520.9463084500284,
            "unit": "ns/iter",
            "extra": "iterations: 1318606\ncpu: 520.9370486710966 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1283.3662168238614,
            "unit": "ns/iter",
            "extra": "iterations: 547154\ncpu: 1283.2978357098716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 223.82049003994504,
            "unit": "ns/iter",
            "extra": "iterations: 3114440\ncpu: 223.8165085858132 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5425246187.99996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5424978804.000002 ns\nthreads: 1"
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
        "date": 1728684743065,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2158.200180251915,
            "unit": "ns/iter",
            "extra": "iterations: 328429\ncpu: 2158.0917245432042 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1030.967034865222,
            "unit": "ns/iter",
            "extra": "iterations: 683146\ncpu: 1030.9290327397073 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1648.1677852034088,
            "unit": "ns/iter",
            "extra": "iterations: 426003\ncpu: 1648.0916824529404 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 183.096345341317,
            "unit": "ns/iter",
            "extra": "iterations: 3826267\ncpu: 183.0919279809798 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.98361787919018,
            "unit": "ns/iter",
            "extra": "iterations: 5331361\ncpu: 130.97658384041148 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3807.4072529410128,
            "unit": "ns/iter",
            "extra": "iterations: 184146\ncpu: 3807.4049667111967 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 33.10455662173434,
            "unit": "ns/iter",
            "extra": "iterations: 21136997\ncpu: 33.10388500315349 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1797.6832404860988,
            "unit": "ns/iter",
            "extra": "iterations: 387016\ncpu: 1797.6391854600342 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1531.2494135726754,
            "unit": "ns/iter",
            "extra": "iterations: 468515\ncpu: 1531.185759260643 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1878.659812067717,
            "unit": "ns/iter",
            "extra": "iterations: 373326\ncpu: 1878.6606933350479 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 484.5770369363915,
            "unit": "ns/iter",
            "extra": "iterations: 1463681\ncpu: 484.56870247000535 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2447.5794433074875,
            "unit": "ns/iter",
            "extra": "iterations: 283460\ncpu: 2447.5035384181206 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 133.01345802625755,
            "unit": "ns/iter",
            "extra": "iterations: 4645332\ncpu: 133.01059665918362 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 598.3348922582303,
            "unit": "ns/iter",
            "extra": "iterations: 1176238\ncpu: 598.3169333077157 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 516.7241290413956,
            "unit": "ns/iter",
            "extra": "iterations: 1357642\ncpu: 516.706216366317 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1296.0099782515492,
            "unit": "ns/iter",
            "extra": "iterations: 537970\ncpu: 1295.9668271464977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 221.3621604297808,
            "unit": "ns/iter",
            "extra": "iterations: 3145189\ncpu: 221.35662340164652 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5444039061.000012,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5443839984 ns\nthreads: 1"
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
        "date": 1728685800178,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2137.640880041647,
            "unit": "ns/iter",
            "extra": "iterations: 332666\ncpu: 2137.597740676835 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1011.2791365068838,
            "unit": "ns/iter",
            "extra": "iterations: 704580\ncpu: 1011.238854352948 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1587.6124219236085,
            "unit": "ns/iter",
            "extra": "iterations: 435311\ncpu: 1587.5827075355319 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 188.5442385411892,
            "unit": "ns/iter",
            "extra": "iterations: 3812038\ncpu: 188.53584172036054 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 132.334791888428,
            "unit": "ns/iter",
            "extra": "iterations: 5234404\ncpu: 132.32628776838789 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3619.1100703314773,
            "unit": "ns/iter",
            "extra": "iterations: 190242\ncpu: 3618.839998528189 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 33.12390363981007,
            "unit": "ns/iter",
            "extra": "iterations: 21111333\ncpu: 33.12172964161001 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1821.922172815473,
            "unit": "ns/iter",
            "extra": "iterations: 387037\ncpu: 1821.7482333730359 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1497.8387577872168,
            "unit": "ns/iter",
            "extra": "iterations: 469356\ncpu: 1497.7264890616061 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1905.5558402039896,
            "unit": "ns/iter",
            "extra": "iterations: 357556\ncpu: 1905.4726504379732 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 492.04189321307945,
            "unit": "ns/iter",
            "extra": "iterations: 1424837\ncpu: 492.0205139254528 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2441.788125416647,
            "unit": "ns/iter",
            "extra": "iterations: 288128\ncpu: 2441.628068080852 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 139.95139848421047,
            "unit": "ns/iter",
            "extra": "iterations: 5102310\ncpu: 139.93876009101746 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 622.0221165113974,
            "unit": "ns/iter",
            "extra": "iterations: 1123821\ncpu: 621.9868751340293 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 482.70570428259407,
            "unit": "ns/iter",
            "extra": "iterations: 1430697\ncpu: 482.67777523822394 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1231.2305365190764,
            "unit": "ns/iter",
            "extra": "iterations: 566895\ncpu: 1231.153628096914 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 211.09648734766827,
            "unit": "ns/iter",
            "extra": "iterations: 3316269\ncpu: 211.08105072296587 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5673982712.999987,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5673603723.999999 ns\nthreads: 1"
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
        "date": 1728836057664,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2161.4760046110646,
            "unit": "ns/iter",
            "extra": "iterations: 319228\ncpu: 2161.3734885411054 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1046.9972514545368,
            "unit": "ns/iter",
            "extra": "iterations: 671628\ncpu: 1046.9469081098466 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1587.7048612219821,
            "unit": "ns/iter",
            "extra": "iterations: 438326\ncpu: 1587.6329649621516 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 185.68398964542652,
            "unit": "ns/iter",
            "extra": "iterations: 3787705\ncpu: 185.67779328115574 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 132.86315295071216,
            "unit": "ns/iter",
            "extra": "iterations: 5267377\ncpu: 132.85954679150552 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3675.679766452237,
            "unit": "ns/iter",
            "extra": "iterations: 192166\ncpu: 3675.5725414485423 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 33.459430347148256,
            "unit": "ns/iter",
            "extra": "iterations: 20933837\ncpu: 33.45775822177272 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1826.0754071809838,
            "unit": "ns/iter",
            "extra": "iterations: 377842\ncpu: 1825.9990657470576 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1501.9867296727937,
            "unit": "ns/iter",
            "extra": "iterations: 455829\ncpu: 1501.961698356181 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1894.5364671280304,
            "unit": "ns/iter",
            "extra": "iterations: 367180\ncpu: 1894.529492347079 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 484.593667820038,
            "unit": "ns/iter",
            "extra": "iterations: 1445379\ncpu: 484.5812606935617 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2544.0580979472275,
            "unit": "ns/iter",
            "extra": "iterations: 275965\ncpu: 2544.0128385846033 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 137.0662373200657,
            "unit": "ns/iter",
            "extra": "iterations: 5257912\ncpu: 137.0602627050436 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 604.8456599569215,
            "unit": "ns/iter",
            "extra": "iterations: 1159712\ncpu: 604.8430187839733 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 530.0078453367903,
            "unit": "ns/iter",
            "extra": "iterations: 1317598\ncpu: 529.9940657165532 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1290.9646134583027,
            "unit": "ns/iter",
            "extra": "iterations: 524691\ncpu: 1290.94782262322 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 215.67793123181485,
            "unit": "ns/iter",
            "extra": "iterations: 3250340\ncpu: 215.67488324298333 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5486346679.000008,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5486178043.999999 ns\nthreads: 1"
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
        "date": 1728845407181,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2129.7482971443546,
            "unit": "ns/iter",
            "extra": "iterations: 331502\ncpu: 2129.6300897128826 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1021.1851785119057,
            "unit": "ns/iter",
            "extra": "iterations: 682644\ncpu: 1021.1392761087769 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1611.5520017007527,
            "unit": "ns/iter",
            "extra": "iterations: 437428\ncpu: 1611.52282204157 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 182.76400297425715,
            "unit": "ns/iter",
            "extra": "iterations: 3832900\ncpu: 182.75986485428777 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 129.66637334385214,
            "unit": "ns/iter",
            "extra": "iterations: 5387693\ncpu: 129.6622016139376 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3594.868101734803,
            "unit": "ns/iter",
            "extra": "iterations: 194741\ncpu: 3594.774767511717 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 33.26358328181035,
            "unit": "ns/iter",
            "extra": "iterations: 21076037\ncpu: 33.261782373982335 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1793.6127672764378,
            "unit": "ns/iter",
            "extra": "iterations: 390326\ncpu: 1793.5774224622485 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1479.0515503703514,
            "unit": "ns/iter",
            "extra": "iterations: 469017\ncpu: 1478.9854546850108 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1905.5036980436253,
            "unit": "ns/iter",
            "extra": "iterations: 371683\ncpu: 1905.3925710888007 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 482.0217641950772,
            "unit": "ns/iter",
            "extra": "iterations: 1454499\ncpu: 482.01119079490593 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2447.526124983162,
            "unit": "ns/iter",
            "extra": "iterations: 286871\ncpu: 2447.433679249558 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 132.27309908139276,
            "unit": "ns/iter",
            "extra": "iterations: 5245122\ncpu: 132.2676080747024 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 602.0956787476762,
            "unit": "ns/iter",
            "extra": "iterations: 1165912\ncpu: 602.0621127495045 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 506.9532063418618,
            "unit": "ns/iter",
            "extra": "iterations: 1366916\ncpu: 506.9160511692014 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1296.15426143517,
            "unit": "ns/iter",
            "extra": "iterations: 539208\ncpu: 1296.1264002017767 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 208.64915032281078,
            "unit": "ns/iter",
            "extra": "iterations: 3353097\ncpu: 208.64200409352839 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5559734777.000017,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5558375813.999998 ns\nthreads: 1"
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
        "date": 1728865286252,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1862.834962097188,
            "unit": "ns/iter",
            "extra": "iterations: 393243\ncpu: 1862.817781880415 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 999.3433355913504,
            "unit": "ns/iter",
            "extra": "iterations: 717438\ncpu: 999.3303909187972 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1568.8952964615619,
            "unit": "ns/iter",
            "extra": "iterations: 448237\ncpu: 1568.8728552082932 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 183.15261616152213,
            "unit": "ns/iter",
            "extra": "iterations: 3821037\ncpu: 183.1500576937621 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 132.68871975345323,
            "unit": "ns/iter",
            "extra": "iterations: 5261924\ncpu: 132.6800719660717 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3501.11695906439,
            "unit": "ns/iter",
            "extra": "iterations: 200583\ncpu: 3501.0251766101815 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 33.51494178167471,
            "unit": "ns/iter",
            "extra": "iterations: 21023363\ncpu: 33.514415652719286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1754.3765131373107,
            "unit": "ns/iter",
            "extra": "iterations: 403962\ncpu: 1754.3683589050459 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1439.458019645177,
            "unit": "ns/iter",
            "extra": "iterations: 481237\ncpu: 1439.4238327476892 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1835.65214001293,
            "unit": "ns/iter",
            "extra": "iterations: 383479\ncpu: 1835.5644194336562 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 491.79389042344974,
            "unit": "ns/iter",
            "extra": "iterations: 1418789\ncpu: 491.79212060426136 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2538.4081716147493,
            "unit": "ns/iter",
            "extra": "iterations: 276200\ncpu: 2538.3467089065875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 140.0458904008732,
            "unit": "ns/iter",
            "extra": "iterations: 4959839\ncpu: 140.04508674575933 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 613.6269310495104,
            "unit": "ns/iter",
            "extra": "iterations: 1142384\ncpu: 613.6115036625164 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 459.3230976646359,
            "unit": "ns/iter",
            "extra": "iterations: 1531670\ncpu: 459.30977103422975 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1238.5178756944551,
            "unit": "ns/iter",
            "extra": "iterations: 570803\ncpu: 1238.4752550354476 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 202.6921877474572,
            "unit": "ns/iter",
            "extra": "iterations: 3479163\ncpu: 202.68919536106853 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5186909077.999985,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5186764584.999999 ns\nthreads: 1"
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
        "date": 1728868232881,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1898.168069886419,
            "unit": "ns/iter",
            "extra": "iterations: 372833\ncpu: 1898.0533482819385 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 994.2615215246171,
            "unit": "ns/iter",
            "extra": "iterations: 711234\ncpu: 994.2418205541359 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1599.355174526746,
            "unit": "ns/iter",
            "extra": "iterations: 438987\ncpu: 1599.2410595302367 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 182.51561650882476,
            "unit": "ns/iter",
            "extra": "iterations: 3825663\ncpu: 182.50525281500217 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 124.93132321766063,
            "unit": "ns/iter",
            "extra": "iterations: 5607339\ncpu: 124.9211460195292 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3579.2679621303146,
            "unit": "ns/iter",
            "extra": "iterations: 195091\ncpu: 3578.9827106324724 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 33.27541925107425,
            "unit": "ns/iter",
            "extra": "iterations: 21030596\ncpu: 33.273034772766316 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1697.6864033277222,
            "unit": "ns/iter",
            "extra": "iterations: 411586\ncpu: 1697.4979591142535 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1432.3120052608863,
            "unit": "ns/iter",
            "extra": "iterations: 489652\ncpu: 1432.2833359202048 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1796.4842096252557,
            "unit": "ns/iter",
            "extra": "iterations: 385488\ncpu: 1796.3619697630004 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 482.2679492253895,
            "unit": "ns/iter",
            "extra": "iterations: 1450174\ncpu: 482.2525255590018 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2318.151395253225,
            "unit": "ns/iter",
            "extra": "iterations: 302024\ncpu: 2318.039324689428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 129.53495904010026,
            "unit": "ns/iter",
            "extra": "iterations: 5406141\ncpu: 129.53374190573285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 593.7587807258783,
            "unit": "ns/iter",
            "extra": "iterations: 1179259\ncpu: 593.7446896737688 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 472.13881267765163,
            "unit": "ns/iter",
            "extra": "iterations: 1483085\ncpu: 472.1342249432779 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1221.7799030726717,
            "unit": "ns/iter",
            "extra": "iterations: 577959\ncpu: 1221.733792535455 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 202.78586439204784,
            "unit": "ns/iter",
            "extra": "iterations: 3445653\ncpu: 202.78582172958158 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5275755700.99998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5275486893 ns\nthreads: 1"
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
        "date": 1728919452395,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1899.3235152181783,
            "unit": "ns/iter",
            "extra": "iterations: 360558\ncpu: 1899.2173547667783 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 989.2200477105008,
            "unit": "ns/iter",
            "extra": "iterations: 709278\ncpu: 989.1937618254055 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1624.8096575633938,
            "unit": "ns/iter",
            "extra": "iterations: 431496\ncpu: 1624.6815914863637 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 182.40862199902173,
            "unit": "ns/iter",
            "extra": "iterations: 3852842\ncpu: 182.39566455099887 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 125.34791387839365,
            "unit": "ns/iter",
            "extra": "iterations: 5538819\ncpu: 125.34047185871209 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3603.4098316036757,
            "unit": "ns/iter",
            "extra": "iterations: 194719\ncpu: 3603.2046282078245 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 32.129533442011876,
            "unit": "ns/iter",
            "extra": "iterations: 21776500\ncpu: 32.127942139462256 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1757.6035257371218,
            "unit": "ns/iter",
            "extra": "iterations: 400200\ncpu: 1757.4884757621178 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1460.587241817446,
            "unit": "ns/iter",
            "extra": "iterations: 476165\ncpu: 1460.4445181817223 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1837.1082451197803,
            "unit": "ns/iter",
            "extra": "iterations: 380516\ncpu: 1837.0175919015248 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 469.8001967922982,
            "unit": "ns/iter",
            "extra": "iterations: 1490912\ncpu: 469.77223270052093 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2332.14706835668,
            "unit": "ns/iter",
            "extra": "iterations: 299269\ncpu: 2332.006826634232 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 131.4385656601666,
            "unit": "ns/iter",
            "extra": "iterations: 5310206\ncpu: 131.42853610575568 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 591.8489956407155,
            "unit": "ns/iter",
            "extra": "iterations: 1184138\ncpu: 591.8283071736558 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 470.55742154423126,
            "unit": "ns/iter",
            "extra": "iterations: 1488100\ncpu: 470.52874605201237 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1224.671335466507,
            "unit": "ns/iter",
            "extra": "iterations: 576308\ncpu: 1224.5889194666725 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 204.80900462332917,
            "unit": "ns/iter",
            "extra": "iterations: 3427617\ncpu: 204.7992135644092 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5279117849.999977,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5278703098.000001 ns\nthreads: 1"
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
        "date": 1728920560466,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1887.4363165418115,
            "unit": "ns/iter",
            "extra": "iterations: 375647\ncpu: 1887.2991345598393 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 5137724787.999901,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5134976467 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 983.1200956582254,
            "unit": "ns/iter",
            "extra": "iterations: 713373\ncpu: 983.1030120287706 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1648.4598751401109,
            "unit": "ns/iter",
            "extra": "iterations: 433285\ncpu: 1648.3129602917256 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 184.8334738937953,
            "unit": "ns/iter",
            "extra": "iterations: 3784848\ncpu: 184.82501886469416 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 126.2588478954406,
            "unit": "ns/iter",
            "extra": "iterations: 5534706\ncpu: 126.25241105850962 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3482.4185449501297,
            "unit": "ns/iter",
            "extra": "iterations: 201780\ncpu: 3482.2923877490352 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 34.0201128186655,
            "unit": "ns/iter",
            "extra": "iterations: 21061941\ncpu: 34.01836017867486 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1713.4792862509066,
            "unit": "ns/iter",
            "extra": "iterations: 407314\ncpu: 1713.4684641333208 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1432.6337580267475,
            "unit": "ns/iter",
            "extra": "iterations: 490864\ncpu: 1432.5944864565352 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1813.8551566967894,
            "unit": "ns/iter",
            "extra": "iterations: 388330\ncpu: 1813.8429299822317 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 504.5487231495156,
            "unit": "ns/iter",
            "extra": "iterations: 1387359\ncpu: 504.53577841063384 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2412.282387876675,
            "unit": "ns/iter",
            "extra": "iterations: 290618\ncpu: 2412.2419327089083 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 128.53422310035253,
            "unit": "ns/iter",
            "extra": "iterations: 5425765\ncpu: 128.53337547792842 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 631.1888786875779,
            "unit": "ns/iter",
            "extra": "iterations: 1112063\ncpu: 631.1661308756791 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 472.95893261724405,
            "unit": "ns/iter",
            "extra": "iterations: 1484341\ncpu: 472.9508468741348 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1247.0616883641812,
            "unit": "ns/iter",
            "extra": "iterations: 555437\ncpu: 1247.0330748581732 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 209.29846488262905,
            "unit": "ns/iter",
            "extra": "iterations: 3404300\ncpu: 209.2888444026669 ns\nthreads: 1"
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
        "date": 1728926100298,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1870.3187277091042,
            "unit": "ns/iter",
            "extra": "iterations: 377115\ncpu: 1870.2061625764024 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 5186515953.999958,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5186072007 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 982.9305306710622,
            "unit": "ns/iter",
            "extra": "iterations: 696552\ncpu: 982.8438092202739 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1626.874154938542,
            "unit": "ns/iter",
            "extra": "iterations: 432365\ncpu: 1626.8303539833262 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 188.90183361154433,
            "unit": "ns/iter",
            "extra": "iterations: 3733997\ncpu: 188.8964372494138 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 124.11070953940852,
            "unit": "ns/iter",
            "extra": "iterations: 5652512\ncpu: 123.94432386875066 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3734.323508213844,
            "unit": "ns/iter",
            "extra": "iterations: 188700\ncpu: 3734.184080551136 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 32.051981160396984,
            "unit": "ns/iter",
            "extra": "iterations: 21851840\ncpu: 32.05071815462677 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1725.079881098483,
            "unit": "ns/iter",
            "extra": "iterations: 408069\ncpu: 1724.9979807336515 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1460.0907509554736,
            "unit": "ns/iter",
            "extra": "iterations: 487499\ncpu: 1460.053760110277 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1805.164813363267,
            "unit": "ns/iter",
            "extra": "iterations: 389125\ncpu: 1805.107744298105 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 472.24295487525006,
            "unit": "ns/iter",
            "extra": "iterations: 1478966\ncpu: 472.2236887122492 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2382.4437858418373,
            "unit": "ns/iter",
            "extra": "iterations: 295744\ncpu: 2382.3419071899975 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 125.60483243409766,
            "unit": "ns/iter",
            "extra": "iterations: 5561752\ncpu: 125.59978456428854 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 577.3783992926237,
            "unit": "ns/iter",
            "extra": "iterations: 1213451\ncpu: 577.3557284142521 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 494.0700344479851,
            "unit": "ns/iter",
            "extra": "iterations: 1428240\ncpu: 494.0443951996848 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1246.488919452931,
            "unit": "ns/iter",
            "extra": "iterations: 561299\ncpu: 1246.4316932686497 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 209.88590917471367,
            "unit": "ns/iter",
            "extra": "iterations: 3335965\ncpu: 209.8807931138368 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 3264.719156667398,
            "unit": "ns/iter",
            "extra": "iterations: 213012\ncpu: 3264.585802677792 ns\nthreads: 1"
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
        "date": 1728927669540,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1873.4954375670584,
            "unit": "ns/iter",
            "extra": "iterations: 325813\ncpu: 1873.4931724639594 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 5107689445.999995,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5104204365.999999 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 1012.2152481013884,
            "unit": "ns/iter",
            "extra": "iterations: 691955\ncpu: 1012.1964968820226 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1625.179368296952,
            "unit": "ns/iter",
            "extra": "iterations: 431152\ncpu: 1625.1745857609387 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 190.43118412165697,
            "unit": "ns/iter",
            "extra": "iterations: 3614333\ncpu: 190.4263860026181 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 125.09706178396166,
            "unit": "ns/iter",
            "extra": "iterations: 5597342\ncpu: 125.09539670793755 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3699.794215534958,
            "unit": "ns/iter",
            "extra": "iterations: 188090\ncpu: 3699.7461374873733 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 32.33934622992502,
            "unit": "ns/iter",
            "extra": "iterations: 21615428\ncpu: 32.336831359527075 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1721.5405208586858,
            "unit": "ns/iter",
            "extra": "iterations: 403718\ncpu: 1718.7579102244642 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1430.9629674229725,
            "unit": "ns/iter",
            "extra": "iterations: 489947\ncpu: 1430.9016873253638 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1817.292393644624,
            "unit": "ns/iter",
            "extra": "iterations: 387334\ncpu: 1817.2138387025143 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 472.9279191717693,
            "unit": "ns/iter",
            "extra": "iterations: 1478493\ncpu: 472.934289847838 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2366.944712178007,
            "unit": "ns/iter",
            "extra": "iterations: 296937\ncpu: 2366.8526455106708 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 127.83822949345632,
            "unit": "ns/iter",
            "extra": "iterations: 5493795\ncpu: 127.83450128736133 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 578.772668286691,
            "unit": "ns/iter",
            "extra": "iterations: 1209840\ncpu: 578.7478683131649 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 497.71614926726363,
            "unit": "ns/iter",
            "extra": "iterations: 1420405\ncpu: 497.69832547759324 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1222.196027661447,
            "unit": "ns/iter",
            "extra": "iterations: 563094\ncpu: 1222.1323526800174 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 211.21854625905326,
            "unit": "ns/iter",
            "extra": "iterations: 3320853\ncpu: 211.2078749044298 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 3268.740835536221,
            "unit": "ns/iter",
            "extra": "iterations: 214497\ncpu: 3268.593821825017 ns\nthreads: 1"
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
        "date": 1728931861341,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1870.7733591164515,
            "unit": "ns/iter",
            "extra": "iterations: 375956\ncpu: 1870.7047447041675 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 5147554956.000022,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5144630897 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 1018.6547283964011,
            "unit": "ns/iter",
            "extra": "iterations: 694210\ncpu: 1018.5924835424432 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1653.3453225800442,
            "unit": "ns/iter",
            "extra": "iterations: 427661\ncpu: 1653.28346283622 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 176.43045832807033,
            "unit": "ns/iter",
            "extra": "iterations: 3930787\ncpu: 176.42770773384566 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 122.3124180783025,
            "unit": "ns/iter",
            "extra": "iterations: 5655553\ncpu: 122.30250109936182 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3695.8327917192187,
            "unit": "ns/iter",
            "extra": "iterations: 189249\ncpu: 3695.6861489360576 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 32.67513248000905,
            "unit": "ns/iter",
            "extra": "iterations: 21342466\ncpu: 32.674301460759025 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1692.5411824803307,
            "unit": "ns/iter",
            "extra": "iterations: 413064\ncpu: 1692.4261083028298 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1427.039372576601,
            "unit": "ns/iter",
            "extra": "iterations: 494913\ncpu: 1426.9162620500972 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1771.7540375007168,
            "unit": "ns/iter",
            "extra": "iterations: 388421\ncpu: 1771.7486206976457 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 470.8228401614379,
            "unit": "ns/iter",
            "extra": "iterations: 1484648\ncpu: 470.8173984675165 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2329.8465687645003,
            "unit": "ns/iter",
            "extra": "iterations: 300708\ncpu: 2329.8411049922265 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 127.5318552128116,
            "unit": "ns/iter",
            "extra": "iterations: 5477722\ncpu: 127.5315384753004 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 600.0920771337807,
            "unit": "ns/iter",
            "extra": "iterations: 1210572\ncpu: 600.0835811500682 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 495.2561208879398,
            "unit": "ns/iter",
            "extra": "iterations: 1415195\ncpu: 495.24926741544544 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1237.8626961434575,
            "unit": "ns/iter",
            "extra": "iterations: 570756\ncpu: 1237.7936824141964 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 218.39958304662164,
            "unit": "ns/iter",
            "extra": "iterations: 3209951\ncpu: 218.38867633804992 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 3295.1630895480307,
            "unit": "ns/iter",
            "extra": "iterations: 214232\ncpu: 3292.597156353857 ns\nthreads: 1"
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
        "date": 1728932936843,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1858.3339887984719,
            "unit": "ns/iter",
            "extra": "iterations: 381917\ncpu: 1858.1708250745585 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 5299393975.000044,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5298972897.000001 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 972.8550525462703,
            "unit": "ns/iter",
            "extra": "iterations: 713086\ncpu: 972.7772484665248 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1657.0353588100234,
            "unit": "ns/iter",
            "extra": "iterations: 426089\ncpu: 1657.0043418159105 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 178.86106430262524,
            "unit": "ns/iter",
            "extra": "iterations: 3939218\ncpu: 178.8560963115012 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 123.68150203547238,
            "unit": "ns/iter",
            "extra": "iterations: 5672862\ncpu: 123.6734107052137 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3696.724251420672,
            "unit": "ns/iter",
            "extra": "iterations: 189292\ncpu: 3696.612286837274 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 32.32823301418916,
            "unit": "ns/iter",
            "extra": "iterations: 21819615\ncpu: 32.32705059186427 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1687.3751391589929,
            "unit": "ns/iter",
            "extra": "iterations: 415891\ncpu: 1687.3180881529074 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1417.366412754373,
            "unit": "ns/iter",
            "extra": "iterations: 494265\ncpu: 1417.2212133167423 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1771.9001809262893,
            "unit": "ns/iter",
            "extra": "iterations: 390767\ncpu: 1771.7766648667916 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 472.36082263357923,
            "unit": "ns/iter",
            "extra": "iterations: 1481340\ncpu: 472.3496968960524 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2358.266869669121,
            "unit": "ns/iter",
            "extra": "iterations: 297205\ncpu: 2358.1290792550526 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 125.1236424437761,
            "unit": "ns/iter",
            "extra": "iterations: 5597374\ncpu: 125.11513095247906 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 578.9743128922672,
            "unit": "ns/iter",
            "extra": "iterations: 1214111\ncpu: 578.9383779572049 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 493.0419871686498,
            "unit": "ns/iter",
            "extra": "iterations: 1419648\ncpu: 493.0178290674874 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1228.270218215815,
            "unit": "ns/iter",
            "extra": "iterations: 557109\ncpu: 1228.1814689764478 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 216.390611145965,
            "unit": "ns/iter",
            "extra": "iterations: 3331610\ncpu: 216.36512376898833 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 3333.7743976948454,
            "unit": "ns/iter",
            "extra": "iterations: 210317\ncpu: 3333.4070427022048 ns\nthreads: 1"
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
        "date": 1728935515980,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1877.376217256541,
            "unit": "ns/iter",
            "extra": "iterations: 361674\ncpu: 1877.3061845750592 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 5209861585.999989,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5209645671.000001 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 963.7540302518255,
            "unit": "ns/iter",
            "extra": "iterations: 723528\ncpu: 963.7424412047633 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1584.0124031113728,
            "unit": "ns/iter",
            "extra": "iterations: 441744\ncpu: 1583.8633959940603 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 174.6088348344846,
            "unit": "ns/iter",
            "extra": "iterations: 4012254\ncpu: 174.60370106179707 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 125.5933688836554,
            "unit": "ns/iter",
            "extra": "iterations: 5578759\ncpu: 125.58914124091022 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3542.6082461632277,
            "unit": "ns/iter",
            "extra": "iterations: 196455\ncpu: 3542.440843959171 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 31.50840593989135,
            "unit": "ns/iter",
            "extra": "iterations: 22243973\ncpu: 31.507110128213135 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1686.4515947060213,
            "unit": "ns/iter",
            "extra": "iterations: 414810\ncpu: 1686.3808273667473 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1414.4980951017717,
            "unit": "ns/iter",
            "extra": "iterations: 495827\ncpu: 1414.4359806948798 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1778.791122563804,
            "unit": "ns/iter",
            "extra": "iterations: 396218\ncpu: 1778.7004578287733 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 477.6118074903072,
            "unit": "ns/iter",
            "extra": "iterations: 1464799\ncpu: 477.58995944153463 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2311.1436753639014,
            "unit": "ns/iter",
            "extra": "iterations: 302049\ncpu: 2311.055024184816 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 129.21412939052732,
            "unit": "ns/iter",
            "extra": "iterations: 5420984\ncpu: 129.2083562688988 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 593.21381654877,
            "unit": "ns/iter",
            "extra": "iterations: 1178384\ncpu: 593.1816292481916 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 464.4607110311913,
            "unit": "ns/iter",
            "extra": "iterations: 1505588\ncpu: 464.4370578139567 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1238.1798921659088,
            "unit": "ns/iter",
            "extra": "iterations: 575328\ncpu: 1238.1353836420237 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 204.26232596645931,
            "unit": "ns/iter",
            "extra": "iterations: 3444882\ncpu: 204.2529703484765 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 3445.1647073635586,
            "unit": "ns/iter",
            "extra": "iterations: 206536\ncpu: 3444.9114827439325 ns\nthreads: 1"
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
        "date": 1728937760915,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1827.995144986077,
            "unit": "ns/iter",
            "extra": "iterations: 391348\ncpu: 1827.8147479992233 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 5075923687.000056,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5075496687 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 982.4707532046976,
            "unit": "ns/iter",
            "extra": "iterations: 699239\ncpu: 982.4343679342828 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1636.8762350890881,
            "unit": "ns/iter",
            "extra": "iterations: 431649\ncpu: 1636.8741268947692 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 175.4563522630317,
            "unit": "ns/iter",
            "extra": "iterations: 3986839\ncpu: 175.45559577399524 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 122.36637141927112,
            "unit": "ns/iter",
            "extra": "iterations: 5725594\ncpu: 122.36279729229832 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3448.8139853182397,
            "unit": "ns/iter",
            "extra": "iterations: 203113\ncpu: 3448.798176384572 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 33.2608243027564,
            "unit": "ns/iter",
            "extra": "iterations: 21413273\ncpu: 33.25867227303362 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1686.710211223213,
            "unit": "ns/iter",
            "extra": "iterations: 412076\ncpu: 1686.681529620749 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1402.3854933860164,
            "unit": "ns/iter",
            "extra": "iterations: 499386\ncpu: 1402.357258713701 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1775.578637726959,
            "unit": "ns/iter",
            "extra": "iterations: 396044\ncpu: 1775.5759764066652 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 470.03770454375854,
            "unit": "ns/iter",
            "extra": "iterations: 1489290\ncpu: 470.0375494363094 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2414.997444625056,
            "unit": "ns/iter",
            "extra": "iterations: 291151\ncpu: 2413.400822940674 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 127.57073156745098,
            "unit": "ns/iter",
            "extra": "iterations: 5510729\ncpu: 127.56803755002294 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 590.7205249693924,
            "unit": "ns/iter",
            "extra": "iterations: 1183612\ncpu: 590.7117602727915 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 469.556621779953,
            "unit": "ns/iter",
            "extra": "iterations: 1519901\ncpu: 469.54293273048626 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1226.9451716729677,
            "unit": "ns/iter",
            "extra": "iterations: 570125\ncpu: 1226.9429826792384 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 200.33312391678942,
            "unit": "ns/iter",
            "extra": "iterations: 3489059\ncpu: 200.32575574101813 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1799.0174188541991,
            "unit": "ns/iter",
            "extra": "iterations: 385387\ncpu: 1798.9228879022926 ns\nthreads: 1"
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
        "date": 1728940275588,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1781.9946572422864,
            "unit": "ns/iter",
            "extra": "iterations: 396986\ncpu: 1781.9400885673551 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 5109537698.999987,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5109178784 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 986.3063740355199,
            "unit": "ns/iter",
            "extra": "iterations: 712296\ncpu: 986.2455299482236 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1622.7152275396809,
            "unit": "ns/iter",
            "extra": "iterations: 433353\ncpu: 1622.6205979882443 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 179.32660130789017,
            "unit": "ns/iter",
            "extra": "iterations: 3905214\ncpu: 179.32154627121608 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 127.24673789760372,
            "unit": "ns/iter",
            "extra": "iterations: 5515768\ncpu: 127.2386267877838 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3614.0737744816392,
            "unit": "ns/iter",
            "extra": "iterations: 193102\ncpu: 3614.056105063644 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 32.745654551891434,
            "unit": "ns/iter",
            "extra": "iterations: 21426674\ncpu: 32.7451589546749 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1695.7715591022222,
            "unit": "ns/iter",
            "extra": "iterations: 413039\ncpu: 1695.7624098450742 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1400.2518580396213,
            "unit": "ns/iter",
            "extra": "iterations: 500393\ncpu: 1400.2334525063316 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1774.3286372173752,
            "unit": "ns/iter",
            "extra": "iterations: 392381\ncpu: 1774.2923663480137 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 480.7379362909144,
            "unit": "ns/iter",
            "extra": "iterations: 1457657\ncpu: 480.7353773898801 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2373.5326088431952,
            "unit": "ns/iter",
            "extra": "iterations: 294920\ncpu: 2373.521575342467 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 128.87124957015948,
            "unit": "ns/iter",
            "extra": "iterations: 5345054\ncpu: 128.86949692182714 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 615.8906018657809,
            "unit": "ns/iter",
            "extra": "iterations: 1136034\ncpu: 615.8614328444384 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 477.1683300598978,
            "unit": "ns/iter",
            "extra": "iterations: 1474496\ncpu: 477.1522764388656 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1365.1388650813853,
            "unit": "ns/iter",
            "extra": "iterations: 513376\ncpu: 1365.1332668453535 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 207.578008866824,
            "unit": "ns/iter",
            "extra": "iterations: 3371668\ncpu: 207.56859750129635 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1842.1021964770976,
            "unit": "ns/iter",
            "extra": "iterations: 388076\ncpu: 1842.0401880044164 ns\nthreads: 1"
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
        "date": 1728941326219,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1928.5581533910354,
            "unit": "ns/iter",
            "extra": "iterations: 382669\ncpu: 1928.450193247951 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 4839805606.000028,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4835919648 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 985.9951083128246,
            "unit": "ns/iter",
            "extra": "iterations: 704256\ncpu: 985.944295824245 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1606.2812972683328,
            "unit": "ns/iter",
            "extra": "iterations: 433033\ncpu: 1606.2137827833008 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 175.78728583297575,
            "unit": "ns/iter",
            "extra": "iterations: 3986608\ncpu: 175.77578934271938 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 121.42588216068572,
            "unit": "ns/iter",
            "extra": "iterations: 5752070\ncpu: 121.41954357300921 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3555.1982164204023,
            "unit": "ns/iter",
            "extra": "iterations: 198253\ncpu: 3554.9906130045915 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 31.434521917104426,
            "unit": "ns/iter",
            "extra": "iterations: 22285037\ncpu: 31.42779027021584 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1667.8228402947436,
            "unit": "ns/iter",
            "extra": "iterations: 419548\ncpu: 1667.7162446251689 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1411.8681239812859,
            "unit": "ns/iter",
            "extra": "iterations: 498817\ncpu: 1408.8398250260136 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1752.2903629381167,
            "unit": "ns/iter",
            "extra": "iterations: 400454\ncpu: 1752.157021780277 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 469.9747436369256,
            "unit": "ns/iter",
            "extra": "iterations: 1489684\ncpu: 469.94736803241534 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2295.8551285070976,
            "unit": "ns/iter",
            "extra": "iterations: 305664\ncpu: 2295.7354807893566 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 124.5098425729509,
            "unit": "ns/iter",
            "extra": "iterations: 5617332\ncpu: 124.5081018889395 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 576.6692166585715,
            "unit": "ns/iter",
            "extra": "iterations: 1216213\ncpu: 576.6515692563693 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 473.6163645686108,
            "unit": "ns/iter",
            "extra": "iterations: 1478328\ncpu: 473.6142209306731 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1234.6776598578003,
            "unit": "ns/iter",
            "extra": "iterations: 566957\ncpu: 1234.6520617965718 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 200.26913608311648,
            "unit": "ns/iter",
            "extra": "iterations: 3492917\ncpu: 200.2681546684332 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1792.1043080409227,
            "unit": "ns/iter",
            "extra": "iterations: 396259\ncpu: 1791.9835839690663 ns\nthreads: 1"
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
        "date": 1728944551202,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1908.0069129872184,
            "unit": "ns/iter",
            "extra": "iterations: 372198\ncpu: 1907.872326020022 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 4966958524.999995,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4966625668.000001 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 969.3346870325463,
            "unit": "ns/iter",
            "extra": "iterations: 711384\ncpu: 969.3021546731444 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1600.217772961744,
            "unit": "ns/iter",
            "extra": "iterations: 439274\ncpu: 1600.1823895791688 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 175.62625758634803,
            "unit": "ns/iter",
            "extra": "iterations: 3980343\ncpu: 175.61869165546787 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 122.10138913197987,
            "unit": "ns/iter",
            "extra": "iterations: 5770510\ncpu: 121.81961195804169 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3558.206298716356,
            "unit": "ns/iter",
            "extra": "iterations: 196802\ncpu: 3557.9083698336362 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 31.440533288476715,
            "unit": "ns/iter",
            "extra": "iterations: 22281449\ncpu: 31.436648128225468 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1719.026099805355,
            "unit": "ns/iter",
            "extra": "iterations: 416210\ncpu: 1718.911830566302 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1413.822686699781,
            "unit": "ns/iter",
            "extra": "iterations: 495180\ncpu: 1413.7947998707518 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1784.9444544854491,
            "unit": "ns/iter",
            "extra": "iterations: 392831\ncpu: 1784.9251815666298 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 471.7722531979704,
            "unit": "ns/iter",
            "extra": "iterations: 1484135\ncpu: 471.76695111967507 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2306.5682748292043,
            "unit": "ns/iter",
            "extra": "iterations: 301773\ncpu: 2306.5419404651766 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 125.4287160771857,
            "unit": "ns/iter",
            "extra": "iterations: 5535582\ncpu: 125.4258618154335 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 597.4738335599029,
            "unit": "ns/iter",
            "extra": "iterations: 1174921\ncpu: 597.4539760545615 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 482.4898967893767,
            "unit": "ns/iter",
            "extra": "iterations: 1480371\ncpu: 482.4738643218501 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1270.18724584135,
            "unit": "ns/iter",
            "extra": "iterations: 561903\ncpu: 1268.4218219158809 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 201.37201913823685,
            "unit": "ns/iter",
            "extra": "iterations: 3478063\ncpu: 201.35555968940275 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1804.9504449167036,
            "unit": "ns/iter",
            "extra": "iterations: 388275\ncpu: 1804.8089009078558 ns\nthreads: 1"
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
        "date": 1729004655024,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1898.1370056907142,
            "unit": "ns/iter",
            "extra": "iterations: 377977\ncpu: 1898.1060937570278 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 5044892788.99996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5044595609 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 1005.2602468267893,
            "unit": "ns/iter",
            "extra": "iterations: 706487\ncpu: 1005.2080646919195 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1592.1815695006103,
            "unit": "ns/iter",
            "extra": "iterations: 440140\ncpu: 1592.0585722724572 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 177.45507578766598,
            "unit": "ns/iter",
            "extra": "iterations: 3960804\ncpu: 177.4412472821174 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 121.99962411736504,
            "unit": "ns/iter",
            "extra": "iterations: 5735833\ncpu: 121.99005654453319 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3536.1612287754997,
            "unit": "ns/iter",
            "extra": "iterations: 198116\ncpu: 3535.9911213632345 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 31.729350899834767,
            "unit": "ns/iter",
            "extra": "iterations: 22037631\ncpu: 31.726574603232102 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1680.4081771178573,
            "unit": "ns/iter",
            "extra": "iterations: 415452\ncpu: 1680.3393917949604 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1409.4198237425644,
            "unit": "ns/iter",
            "extra": "iterations: 497454\ncpu: 1409.275336010968 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1767.4838600660578,
            "unit": "ns/iter",
            "extra": "iterations: 396501\ncpu: 1767.476293880724 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 471.9663946574169,
            "unit": "ns/iter",
            "extra": "iterations: 1483038\ncpu: 471.9283538250537 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2308.493172979681,
            "unit": "ns/iter",
            "extra": "iterations: 302914\ncpu: 2308.375235215272 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 126.54171214901906,
            "unit": "ns/iter",
            "extra": "iterations: 5597410\ncpu: 126.54102343762543 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 584.9230252086427,
            "unit": "ns/iter",
            "extra": "iterations: 1212280\ncpu: 584.9180222390866 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 473.2598394984859,
            "unit": "ns/iter",
            "extra": "iterations: 1477743\ncpu: 473.2382586146586 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1196.472345363418,
            "unit": "ns/iter",
            "extra": "iterations: 555820\ncpu: 1196.4651020114468 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 204.6089426347115,
            "unit": "ns/iter",
            "extra": "iterations: 3423935\ncpu: 204.60760353219305 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1807.738513790595,
            "unit": "ns/iter",
            "extra": "iterations: 390120\ncpu: 1807.6121988106192 ns\nthreads: 1"
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
        "date": 1729010284224,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1880.3676954184614,
            "unit": "ns/iter",
            "extra": "iterations: 383766\ncpu: 1880.2014717301693 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 4905624603.999968,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4903887833.000001 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 974.2469174493729,
            "unit": "ns/iter",
            "extra": "iterations: 708342\ncpu: 974.2119569360565 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1597.5283723596572,
            "unit": "ns/iter",
            "extra": "iterations: 439618\ncpu: 1597.4801577733379 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 176.9171672257129,
            "unit": "ns/iter",
            "extra": "iterations: 3946421\ncpu: 176.90928007934272 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 122.88560507657944,
            "unit": "ns/iter",
            "extra": "iterations: 5693924\ncpu: 122.88125183968027 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3541.7872499927744,
            "unit": "ns/iter",
            "extra": "iterations: 196094\ncpu: 3541.5263547074346 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 31.7149335865802,
            "unit": "ns/iter",
            "extra": "iterations: 22043586\ncpu: 31.71385431571794 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1687.913442879935,
            "unit": "ns/iter",
            "extra": "iterations: 410723\ncpu: 1687.8062514151898 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1424.5819778029388,
            "unit": "ns/iter",
            "extra": "iterations: 495378\ncpu: 1424.5501152655145 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1781.0554292305515,
            "unit": "ns/iter",
            "extra": "iterations: 394485\ncpu: 1780.9688632013906 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 472.2021681605468,
            "unit": "ns/iter",
            "extra": "iterations: 1479872\ncpu: 472.19297817649004 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2297.335864040929,
            "unit": "ns/iter",
            "extra": "iterations: 303209\ncpu: 2297.2250230039394 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 126.89201745919908,
            "unit": "ns/iter",
            "extra": "iterations: 5526486\ncpu: 126.88781605526528 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 577.8354340071144,
            "unit": "ns/iter",
            "extra": "iterations: 1206835\ncpu: 577.8043767374974 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 476.82382344102376,
            "unit": "ns/iter",
            "extra": "iterations: 1464440\ncpu: 476.80597839447086 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1247.133946767273,
            "unit": "ns/iter",
            "extra": "iterations: 566755\ncpu: 1247.0660902859229 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 199.72484722209177,
            "unit": "ns/iter",
            "extra": "iterations: 3508360\ncpu: 199.71832024079552 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1781.851680591795,
            "unit": "ns/iter",
            "extra": "iterations: 390785\ncpu: 1781.7261025883822 ns\nthreads: 1"
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
        "date": 1729017315882,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1866.035539656009,
            "unit": "ns/iter",
            "extra": "iterations: 375693\ncpu: 1865.9834598994396 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 4959257692.999984,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4959088312 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 983.6633927184557,
            "unit": "ns/iter",
            "extra": "iterations: 701803\ncpu: 983.63828595774 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1586.919556897017,
            "unit": "ns/iter",
            "extra": "iterations: 439988\ncpu: 1586.8743056628807 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 183.61985244266404,
            "unit": "ns/iter",
            "extra": "iterations: 3951413\ncpu: 183.61404641833192 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 125.48287649069617,
            "unit": "ns/iter",
            "extra": "iterations: 5655558\ncpu: 125.48115570559088 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3552.1166033726763,
            "unit": "ns/iter",
            "extra": "iterations: 196701\ncpu: 3551.9276719487953 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 31.73707712282816,
            "unit": "ns/iter",
            "extra": "iterations: 22056582\ncpu: 31.736451096548 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1693.6261473442444,
            "unit": "ns/iter",
            "extra": "iterations: 413128\ncpu: 1693.3549698882684 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1413.0117438988743,
            "unit": "ns/iter",
            "extra": "iterations: 491915\ncpu: 1412.8136812254156 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1786.3997773456879,
            "unit": "ns/iter",
            "extra": "iterations: 389842\ncpu: 1786.1819429409873 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 471.1207171105118,
            "unit": "ns/iter",
            "extra": "iterations: 1483286\ncpu: 471.10288440664874 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2307.1805917800352,
            "unit": "ns/iter",
            "extra": "iterations: 302511\ncpu: 2307.0890248619 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 127.68807996511599,
            "unit": "ns/iter",
            "extra": "iterations: 5459380\ncpu: 127.68303983236223 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 582.9580770870814,
            "unit": "ns/iter",
            "extra": "iterations: 1217091\ncpu: 582.9450616264493 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 471.8385370247001,
            "unit": "ns/iter",
            "extra": "iterations: 1482185\ncpu: 471.8252208732371 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1298.0002288958567,
            "unit": "ns/iter",
            "extra": "iterations: 563575\ncpu: 1297.9652433127792 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 199.86579194358984,
            "unit": "ns/iter",
            "extra": "iterations: 3502137\ncpu: 199.85878165246018 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1777.2516169361515,
            "unit": "ns/iter",
            "extra": "iterations: 396738\ncpu: 1777.1748156213976 ns\nthreads: 1"
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
        "date": 1729017538502,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1819.3789835630264,
            "unit": "ns/iter",
            "extra": "iterations: 395814\ncpu: 1819.3004390951307 ns\nthreads: 1"
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
        "date": 1729019421456,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1878.1080111933577,
            "unit": "ns/iter",
            "extra": "iterations: 392376\ncpu: 1878.0352162211757 ns\nthreads: 1"
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
        "date": 1729105630108,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2073.798027871808,
            "unit": "ns/iter",
            "extra": "iterations: 342067\ncpu: 2073.6820388988126 ns\nthreads: 1"
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
        "date": 1729192279778,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2076.0227065518297,
            "unit": "ns/iter",
            "extra": "iterations: 335630\ncpu: 2076.0038941691746 ns\nthreads: 1"
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
        "date": 1729210932426,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2063.6907479894676,
            "unit": "ns/iter",
            "extra": "iterations: 342077\ncpu: 2063.6266513095006 ns\nthreads: 1"
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
        "date": 1729278541668,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2201.2742984697375,
            "unit": "ns/iter",
            "extra": "iterations: 334198\ncpu: 2200.925011520117 ns\nthreads: 1"
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
        "date": 1729537642503,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2051.1270878807704,
            "unit": "ns/iter",
            "extra": "iterations: 339938\ncpu: 2051.079608634516 ns\nthreads: 1"
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
        "date": 1729624255239,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2110.671468542956,
            "unit": "ns/iter",
            "extra": "iterations: 332023\ncpu: 2110.6338085012185 ns\nthreads: 1"
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
          "id": "415950175681e90af4fba2cf04971cf37ee044a9",
          "message": "Implement `starts_with_initial` for `GenericPointer` (#1314)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-22T18:27:59-04:00",
          "tree_id": "14d68e22288f939a4d194281bb7cdee638e36b2b",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/415950175681e90af4fba2cf04971cf37ee044a9"
        },
        "date": 1729636314269,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2059.8747627469434,
            "unit": "ns/iter",
            "extra": "iterations: 339300\ncpu: 2059.7329560860594 ns\nthreads: 1"
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
          "id": "7654c30ef2f0a0ccb36affa810ffebebd6179ebd",
          "message": "Implement a JSON Pointer `starts_with` variant that takes a token tail (#1315)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-23T11:18:39-04:00",
          "tree_id": "c677b6ee3cd3d77568ae47a588b747629cb6cc96",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/7654c30ef2f0a0ccb36affa810ffebebd6179ebd"
        },
        "date": 1729696969149,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2050.5692816158366,
            "unit": "ns/iter",
            "extra": "iterations: 342811\ncpu: 2050.4806905262667 ns\nthreads: 1"
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
          "id": "7654c30ef2f0a0ccb36affa810ffebebd6179ebd",
          "message": "Implement a JSON Pointer `starts_with` variant that takes a token tail (#1315)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-23T15:18:39Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/7654c30ef2f0a0ccb36affa810ffebebd6179ebd"
        },
        "date": 1729710582346,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2099.550439165953,
            "unit": "ns/iter",
            "extra": "iterations: 335067\ncpu: 2099.45033978279 ns\nthreads: 1"
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
          "id": "7654c30ef2f0a0ccb36affa810ffebebd6179ebd",
          "message": "Implement a JSON Pointer `starts_with` variant that takes a token tail (#1315)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-23T15:18:39Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/7654c30ef2f0a0ccb36affa810ffebebd6179ebd"
        },
        "date": 1729796922134,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2090.4954432427494,
            "unit": "ns/iter",
            "extra": "iterations: 333790\ncpu: 2090.4052428173404 ns\nthreads: 1"
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
          "id": "7654c30ef2f0a0ccb36affa810ffebebd6179ebd",
          "message": "Implement a JSON Pointer `starts_with` variant that takes a token tail (#1315)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-23T15:18:39Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/7654c30ef2f0a0ccb36affa810ffebebd6179ebd"
        },
        "date": 1729883515018,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2093.2808673933278,
            "unit": "ns/iter",
            "extra": "iterations: 335119\ncpu: 2093.214834133547 ns\nthreads: 1"
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
          "id": "9a82213f47f0cb7297276016af106cac66b77753",
          "message": "Simplify README\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-28T09:50:52-04:00",
          "tree_id": "93f4dfb9723398db87c4e013359ef44d6951a18f",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9a82213f47f0cb7297276016af106cac66b77753"
        },
        "date": 1730123723489,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2138.7635275250823,
            "unit": "ns/iter",
            "extra": "iterations: 336111\ncpu: 2138.7184590804823 ns\nthreads: 1"
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
          "id": "9a82213f47f0cb7297276016af106cac66b77753",
          "message": "Simplify README\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-28T13:50:52Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9a82213f47f0cb7297276016af106cac66b77753"
        },
        "date": 1730142500390,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2037.4530545667346,
            "unit": "ns/iter",
            "extra": "iterations: 339639\ncpu: 2037.1952838160516 ns\nthreads: 1"
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
          "id": "9a82213f47f0cb7297276016af106cac66b77753",
          "message": "Simplify README\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-28T13:50:52Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9a82213f47f0cb7297276016af106cac66b77753"
        },
        "date": 1730228915168,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2072.0631851226376,
            "unit": "ns/iter",
            "extra": "iterations: 334794\ncpu: 2071.908719989008 ns\nthreads: 1"
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
          "id": "9a82213f47f0cb7297276016af106cac66b77753",
          "message": "Simplify README\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-28T13:50:52Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9a82213f47f0cb7297276016af106cac66b77753"
        },
        "date": 1730315380815,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2100.040257337083,
            "unit": "ns/iter",
            "extra": "iterations: 335591\ncpu: 2099.8619003489366 ns\nthreads: 1"
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
          "id": "3b644bfb012c506b4e5f749f26e789d38bff1254",
          "message": "Revise default walker keyword dependencies for compiler optimisations (#1316)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-31T09:43:49-04:00",
          "tree_id": "c996e571272ab714d2b652ab16b1527e009ef3a5",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/3b644bfb012c506b4e5f749f26e789d38bff1254"
        },
        "date": 1730382468447,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2068.1158343752654,
            "unit": "ns/iter",
            "extra": "iterations: 339925\ncpu: 2068.056924321542 ns\nthreads: 1"
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
          "id": "3b644bfb012c506b4e5f749f26e789d38bff1254",
          "message": "Revise default walker keyword dependencies for compiler optimisations (#1316)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-31T13:43:49Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/3b644bfb012c506b4e5f749f26e789d38bff1254"
        },
        "date": 1730401643176,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2067.215499595192,
            "unit": "ns/iter",
            "extra": "iterations: 303866\ncpu: 2067.2244114181913 ns\nthreads: 1"
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
          "id": "3b644bfb012c506b4e5f749f26e789d38bff1254",
          "message": "Revise default walker keyword dependencies for compiler optimisations (#1316)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-31T13:43:49Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/3b644bfb012c506b4e5f749f26e789d38bff1254"
        },
        "date": 1730488235563,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2056.5590829182497,
            "unit": "ns/iter",
            "extra": "iterations: 341867\ncpu: 2056.5404206899175 ns\nthreads: 1"
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
          "id": "9126bc8c7d4e131381eafe8afda8063f04038470",
          "message": "Correctly canonicalize relative URIs that do not begin with `/` (#1318)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-04T10:19:03-04:00",
          "tree_id": "c8068366858c972aa35235a8b96069198c9f60e4",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9126bc8c7d4e131381eafe8afda8063f04038470"
        },
        "date": 1730730184718,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2045.4620128877755,
            "unit": "ns/iter",
            "extra": "iterations: 343735\ncpu: 2045.3448150464747 ns\nthreads: 1"
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
          "id": "6b7eac4d388977781c7ec52cab8de64887384ac8",
          "message": "Rename `resolve_from_if_absolute` to `try_resolve_from` (#1319)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-04T10:20:48-04:00",
          "tree_id": "e921a5a9e5b65f9d92e2b694adaacb8c4d9e5afd",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/6b7eac4d388977781c7ec52cab8de64887384ac8"
        },
        "date": 1730730290313,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2061.8518980180356,
            "unit": "ns/iter",
            "extra": "iterations: 330529\ncpu: 2061.806295362888 ns\nthreads: 1"
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
          "id": "688abb095405df69bdf7d6c1605b689ad20677d0",
          "message": "Support resolving fragments on relative paths (#1320)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-04T10:31:22-04:00",
          "tree_id": "7ae9ca63307d5d1a91d380c436553d26cf3711c2",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/688abb095405df69bdf7d6c1605b689ad20677d0"
        },
        "date": 1730730927514,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2109.325732947923,
            "unit": "ns/iter",
            "extra": "iterations: 332834\ncpu: 2109.1617352794487 ns\nthreads: 1"
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
          "id": "49e5bf649130d16b46f056ff15bce6a02d7a460a",
          "message": "Test framing with relative base identifiers (#1321)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-04T10:54:52-04:00",
          "tree_id": "cd313e2bd4aacd002a653267d1e9897865399643",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/49e5bf649130d16b46f056ff15bce6a02d7a460a"
        },
        "date": 1730732354960,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2120.1592437369236,
            "unit": "ns/iter",
            "extra": "iterations: 329991\ncpu: 2120.010636653727 ns\nthreads: 1"
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
          "id": "c6d056cc608bf98705ad7700c8c891e1cf6865a0",
          "message": "Support relative base URIs (#1317)\n\nFixes: https://github.com/sourcemeta/jsontoolkit/issues/960\r\nSee: https://github.com/sourcemeta/jsonschema/issues/185\r\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-04T11:06:33-04:00",
          "tree_id": "2c9f65fec5dd6d29e9eb5ff00ca17f7d16a0ae2f",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/c6d056cc608bf98705ad7700c8c891e1cf6865a0"
        },
        "date": 1730733036014,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2053.0639641271264,
            "unit": "ns/iter",
            "extra": "iterations: 342098\ncpu: 2053.014586463528 ns\nthreads: 1"
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
          "id": "c6d056cc608bf98705ad7700c8c891e1cf6865a0",
          "message": "Support relative base URIs (#1317)\n\nFixes: https://github.com/sourcemeta/jsontoolkit/issues/960\r\nSee: https://github.com/sourcemeta/jsonschema/issues/185\r\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-04T15:06:33Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/c6d056cc608bf98705ad7700c8c891e1cf6865a0"
        },
        "date": 1730747685230,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2101.49215248652,
            "unit": "ns/iter",
            "extra": "iterations: 334246\ncpu: 2101.402643561928 ns\nthreads: 1"
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
          "id": "c6d056cc608bf98705ad7700c8c891e1cf6865a0",
          "message": "Support relative base URIs (#1317)\n\nFixes: https://github.com/sourcemeta/jsontoolkit/issues/960\r\nSee: https://github.com/sourcemeta/jsonschema/issues/185\r\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-04T15:06:33Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/c6d056cc608bf98705ad7700c8c891e1cf6865a0"
        },
        "date": 1730833784711,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2095.6491959426494,
            "unit": "ns/iter",
            "extra": "iterations: 328397\ncpu: 2095.5671915395087 ns\nthreads: 1"
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
          "id": "c6d056cc608bf98705ad7700c8c891e1cf6865a0",
          "message": "Support relative base URIs (#1317)\n\nFixes: https://github.com/sourcemeta/jsontoolkit/issues/960\r\nSee: https://github.com/sourcemeta/jsonschema/issues/185\r\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-04T15:06:33Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/c6d056cc608bf98705ad7700c8c891e1cf6865a0"
        },
        "date": 1730920144485,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2100.0293852197956,
            "unit": "ns/iter",
            "extra": "iterations: 329077\ncpu: 2100.008226038283 ns\nthreads: 1"
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
          "id": "7a398224cc2e76ea9ae8541a872b131c7c025267",
          "message": "Throw if cannot determine base dialect in `frame()` (#1322)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-07T12:41:40-04:00",
          "tree_id": "689087feb787e129b25c6437307cfa61eee00452",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/7a398224cc2e76ea9ae8541a872b131c7c025267"
        },
        "date": 1730997942804,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2102.5702270765046,
            "unit": "ns/iter",
            "extra": "iterations: 333632\ncpu: 2102.514192283714 ns\nthreads: 1"
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
          "id": "7a398224cc2e76ea9ae8541a872b131c7c025267",
          "message": "Throw if cannot determine base dialect in `frame()` (#1322)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-07T16:41:40Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/7a398224cc2e76ea9ae8541a872b131c7c025267"
        },
        "date": 1731006532353,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2087.648506506935,
            "unit": "ns/iter",
            "extra": "iterations: 335790\ncpu: 2087.657860567617 ns\nthreads: 1"
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
          "id": "7a398224cc2e76ea9ae8541a872b131c7c025267",
          "message": "Throw if cannot determine base dialect in `frame()` (#1322)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-07T16:41:40Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/7a398224cc2e76ea9ae8541a872b131c7c025267"
        },
        "date": 1731093035655,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2086.8430125437426,
            "unit": "ns/iter",
            "extra": "iterations: 333791\ncpu: 2086.7926367097975 ns\nthreads: 1"
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
          "id": "7a398224cc2e76ea9ae8541a872b131c7c025267",
          "message": "Throw if cannot determine base dialect in `frame()` (#1322)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-07T16:41:40Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/7a398224cc2e76ea9ae8541a872b131c7c025267"
        },
        "date": 1731352203198,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2053.5252009618575,
            "unit": "ns/iter",
            "extra": "iterations: 342229\ncpu: 2053.410400638169 ns\nthreads: 1"
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
          "id": "7a398224cc2e76ea9ae8541a872b131c7c025267",
          "message": "Throw if cannot determine base dialect in `frame()` (#1322)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-07T16:41:40Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/7a398224cc2e76ea9ae8541a872b131c7c025267"
        },
        "date": 1731438655559,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2051.0690608638297,
            "unit": "ns/iter",
            "extra": "iterations: 305238\ncpu: 2050.945727596171 ns\nthreads: 1"
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
          "id": "7a398224cc2e76ea9ae8541a872b131c7c025267",
          "message": "Throw if cannot determine base dialect in `frame()` (#1322)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-07T16:41:40Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/7a398224cc2e76ea9ae8541a872b131c7c025267"
        },
        "date": 1731525128572,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2071.4166822278253,
            "unit": "ns/iter",
            "extra": "iterations: 337377\ncpu: 2071.3711545244637 ns\nthreads: 1"
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
          "id": "7a398224cc2e76ea9ae8541a872b131c7c025267",
          "message": "Throw if cannot determine base dialect in `frame()` (#1322)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-07T16:41:40Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/7a398224cc2e76ea9ae8541a872b131c7c025267"
        },
        "date": 1731611526393,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2074.4523711876413,
            "unit": "ns/iter",
            "extra": "iterations: 338923\ncpu: 2074.4594819472272 ns\nthreads: 1"
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
          "id": "36515ff27cc93056d6bd641aeb30f61cc5950563",
          "message": "Implement a fast hashing mechanism for JSON values (#1324)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-15T12:23:59-04:00",
          "tree_id": "e00fbc06496aeb82503552b4df9af961a5e28e94",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/36515ff27cc93056d6bd641aeb30f61cc5950563"
        },
        "date": 1731688082287,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2182.585242622163,
            "unit": "ns/iter",
            "extra": "iterations: 322415\ncpu: 2182.468849154041 ns\nthreads: 1"
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
          "id": "a64204f6f69b12021bd1802143f61244f5ea9619",
          "message": "Optimise uniqueness checks by hashing values (#1323)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-15T12:36:47-04:00",
          "tree_id": "4066e79a91dd38ae09a71633eebd3ebb7c3765b2",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/a64204f6f69b12021bd1802143f61244f5ea9619"
        },
        "date": 1731689447846,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 407.84868390179315,
            "unit": "ns/iter",
            "extra": "iterations: 1746906\ncpu: 407.8326584258111 ns\nthreads: 1"
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
          "id": "a64204f6f69b12021bd1802143f61244f5ea9619",
          "message": "Optimise uniqueness checks by hashing values (#1323)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-15T16:36:47Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/a64204f6f69b12021bd1802143f61244f5ea9619"
        },
        "date": 1731697808197,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 404.64829354306283,
            "unit": "ns/iter",
            "extra": "iterations: 1742763\ncpu: 404.64139644920164 ns\nthreads: 1"
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
          "id": "117a478711f0aaec0e77a6bee3af0c5030340bb7",
          "message": "Implement a fast constant hash function for object keys (#1325)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-15T23:16:40-04:00",
          "tree_id": "0913bbeb6b316d69716dfc399c005bf7ea2e8860",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/117a478711f0aaec0e77a6bee3af0c5030340bb7"
        },
        "date": 1731727247289,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 454.6221706303759,
            "unit": "ns/iter",
            "extra": "iterations: 1542879\ncpu: 454.59395778930167 ns\nthreads: 1"
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
          "id": "117a478711f0aaec0e77a6bee3af0c5030340bb7",
          "message": "Implement a fast constant hash function for object keys (#1325)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-16T03:16:40Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/117a478711f0aaec0e77a6bee3af0c5030340bb7"
        },
        "date": 1731956864347,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 455.5454028750834,
            "unit": "ns/iter",
            "extra": "iterations: 1521886\ncpu: 455.52867494674365 ns\nthreads: 1"
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
          "id": "117a478711f0aaec0e77a6bee3af0c5030340bb7",
          "message": "Implement a fast constant hash function for object keys (#1325)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-16T03:16:40Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/117a478711f0aaec0e77a6bee3af0c5030340bb7"
        },
        "date": 1732043587526,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 457.22504247756723,
            "unit": "ns/iter",
            "extra": "iterations: 1563767\ncpu: 457.19714509898216 ns\nthreads: 1"
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
          "id": "579738816650ab02837a5fdb264901b722793193",
          "message": "Keep `ObjectKeyHash` available for clients even on older GCC (#1326)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-20T13:06:32-04:00",
          "tree_id": "3ee6909ec8b820743bc4cd2642fdb43fd96de11d",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/579738816650ab02837a5fdb264901b722793193"
        },
        "date": 1732122647212,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 454.49089734560204,
            "unit": "ns/iter",
            "extra": "iterations: 1548010\ncpu: 454.4818722101278 ns\nthreads: 1"
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
          "id": "bf3fdaad712a6193af503bfdafcf517aca5e6a52",
          "message": "Expose general-purpose JSON hasher helpers (#1327)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-20T14:11:49-04:00",
          "tree_id": "fd1501bd9fc696694fdd3dd34e9f54aca02a9013",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/bf3fdaad712a6193af503bfdafcf517aca5e6a52"
        },
        "date": 1732126565538,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 458.98054972687737,
            "unit": "ns/iter",
            "extra": "iterations: 1536945\ncpu: 458.9570212336811 ns\nthreads: 1"
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
          "id": "bf3fdaad712a6193af503bfdafcf517aca5e6a52",
          "message": "Expose general-purpose JSON hasher helpers (#1327)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-20T18:11:49Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/bf3fdaad712a6193af503bfdafcf517aca5e6a52"
        },
        "date": 1732130146352,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 455.10539516016786,
            "unit": "ns/iter",
            "extra": "iterations: 1535061\ncpu: 455.0859275299157 ns\nthreads: 1"
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
          "id": "59f3deca673fad9195e41605e10655b4ede90478",
          "message": "Implement a new ECMA-262 `src/regex` module (#1329)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-20T15:44:56-04:00",
          "tree_id": "294e335bc28f1ce0ba3526af0e3989e5b260cd1f",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/59f3deca673fad9195e41605e10655b4ede90478"
        },
        "date": 1732132420853,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 457.6016687076797,
            "unit": "ns/iter",
            "extra": "iterations: 1534361\ncpu: 457.5782922011182 ns\nthreads: 1"
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
          "id": "4829e706f5ae2e1730cfd34fc982d690ba729cfd",
          "message": "Short-circuit Pointer traversal on empty Pointers (#1330)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-21T14:59:39-04:00",
          "tree_id": "9a4f8c2dfc41e36cfee3a8e04d7996f9f1a1012d",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/4829e706f5ae2e1730cfd34fc982d690ba729cfd"
        },
        "date": 1732215889132,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 457.9580757335117,
            "unit": "ns/iter",
            "extra": "iterations: 1560075\ncpu: 457.94455330673196 ns\nthreads: 1"
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
          "id": "4829e706f5ae2e1730cfd34fc982d690ba729cfd",
          "message": "Short-circuit Pointer traversal on empty Pointers (#1330)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-21T18:59:39Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/4829e706f5ae2e1730cfd34fc982d690ba729cfd"
        },
        "date": 1732216924226,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 457.9095566273366,
            "unit": "ns/iter",
            "extra": "iterations: 1557516\ncpu: 457.9045062779452 ns\nthreads: 1"
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
          "id": "aae184d87d6c4efe600cfb3c85163eda61f207c4",
          "message": "Expose a Pointer method to reserve capacity (#1331)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-21T17:13:33-04:00",
          "tree_id": "7cbd9deb091af37c3eeca4ccf1f222cadf7cf337",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/aae184d87d6c4efe600cfb3c85163eda61f207c4"
        },
        "date": 1732224613113,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 453.9176596898866,
            "unit": "ns/iter",
            "extra": "iterations: 1515406\ncpu: 453.8678255200256 ns\nthreads: 1"
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
          "id": "c8c1f6bb8530b0fe0aa83bdfccb8ccb8db5e54ea",
          "message": "Implement type-specific `size` JSON methods (#1332)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-22T12:48:09-04:00",
          "tree_id": "ba13ae5d15450e7e638b159aa0b876f22d3fd4a9",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/c8c1f6bb8530b0fe0aa83bdfccb8ccb8db5e54ea"
        },
        "date": 1732294391698,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 452.716791971705,
            "unit": "ns/iter",
            "extra": "iterations: 1519226\ncpu: 452.671457044574 ns\nthreads: 1"
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
          "id": "07f2dcebb9cad6b03101c0754303ef63f6d39b86",
          "message": "Benchmark common regular expressions (#1333)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-22T14:35:46-04:00",
          "tree_id": "bc6244e504f21b1cc981a1673fe294cce653ac8a",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/07f2dcebb9cad6b03101c0754303ef63f6d39b86"
        },
        "date": 1732300827031,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 455.636858354223,
            "unit": "ns/iter",
            "extra": "iterations: 1527225\ncpu: 455.61520011786075 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 115.15623799020318,
            "unit": "ns/iter",
            "extra": "iterations: 6060165\ncpu: 115.14667999963697 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 124.45234278421783,
            "unit": "ns/iter",
            "extra": "iterations: 5735270\ncpu: 124.44889429791452 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 122.4560619778757,
            "unit": "ns/iter",
            "extra": "iterations: 5704615\ncpu: 122.45413774636847 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 96.01679144225847,
            "unit": "ns/iter",
            "extra": "iterations: 7317537\ncpu: 96.01619014703996 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 148.71284154478954,
            "unit": "ns/iter",
            "extra": "iterations: 4690783\ncpu: 148.70976039607868 ns\nthreads: 1"
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
          "id": "e892b3c45de29322fbca1459099e782c0b0dde77",
          "message": "Revisit public interface of `src/regex` (#1334)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-22T14:52:17-04:00",
          "tree_id": "8bf16d82c726f759d4171a82dbdbcbe094caac5d",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/e892b3c45de29322fbca1459099e782c0b0dde77"
        },
        "date": 1732301812452,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 544.6809155053752,
            "unit": "ns/iter",
            "extra": "iterations: 1311101\ncpu: 544.6356260883028 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 116.43458431847353,
            "unit": "ns/iter",
            "extra": "iterations: 5999112\ncpu: 116.43177390253757 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 124.90513381168297,
            "unit": "ns/iter",
            "extra": "iterations: 5595102\ncpu: 124.9015286942043 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 125.92324540503074,
            "unit": "ns/iter",
            "extra": "iterations: 5497964\ncpu: 125.9151620490786 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 96.28872142721018,
            "unit": "ns/iter",
            "extra": "iterations: 7337533\ncpu: 96.28113440852673 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 149.88719339192204,
            "unit": "ns/iter",
            "extra": "iterations: 4673556\ncpu: 149.87578280863647 ns\nthreads: 1"
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
          "id": "8c8099b5fb2373d765a43d6dc213c4d48fab1f92",
          "message": "Add a regex stress test to the benchmark (#1335)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-22T14:53:54-04:00",
          "tree_id": "fb9195ee10621a3e74e948faf50c0271e9dfd42a",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/8c8099b5fb2373d765a43d6dc213c4d48fab1f92"
        },
        "date": 1732301969497,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 429.46103407257164,
            "unit": "ns/iter",
            "extra": "iterations: 1708236\ncpu: 429.4590735706308 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 118.85828149655771,
            "unit": "ns/iter",
            "extra": "iterations: 5898644\ncpu: 118.85768780078945 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 127.25684650817718,
            "unit": "ns/iter",
            "extra": "iterations: 5644118\ncpu: 127.25753324080051 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 129.28263219713895,
            "unit": "ns/iter",
            "extra": "iterations: 5476991\ncpu: 129.27250400813142 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 98.08064509666187,
            "unit": "ns/iter",
            "extra": "iterations: 7237799\ncpu: 98.07665203192296 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 150.81669940498378,
            "unit": "ns/iter",
            "extra": "iterations: 4647459\ncpu: 150.8112788084844 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 394.31590179686066,
            "unit": "ns/iter",
            "extra": "iterations: 1775422\ncpu: 394.2963543315336 ns\nthreads: 1"
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
          "id": "8c8099b5fb2373d765a43d6dc213c4d48fab1f92",
          "message": "Add a regex stress test to the benchmark (#1335)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-22T18:53:54Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/8c8099b5fb2373d765a43d6dc213c4d48fab1f92"
        },
        "date": 1732303109703,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 426.6284099477907,
            "unit": "ns/iter",
            "extra": "iterations: 1706881\ncpu: 426.6079486501988 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 119.30101682027991,
            "unit": "ns/iter",
            "extra": "iterations: 5844494\ncpu: 119.29744166047566 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 126.7913290858201,
            "unit": "ns/iter",
            "extra": "iterations: 5516950\ncpu: 126.78357897026437 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 127.11940824828808,
            "unit": "ns/iter",
            "extra": "iterations: 5507107\ncpu: 127.11577603267918 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 95.79163145696931,
            "unit": "ns/iter",
            "extra": "iterations: 7284924\ncpu: 95.78466721135325 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 150.9103549366928,
            "unit": "ns/iter",
            "extra": "iterations: 4716813\ncpu: 150.90354779805764 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 387.01169510660384,
            "unit": "ns/iter",
            "extra": "iterations: 1827773\ncpu: 386.9719456409521 ns\nthreads: 1"
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
          "id": "0b73d5d327e6ebe3f333c5b5afb462aa1a85d59e",
          "message": "Extend `Regex` to support non-full regex evaluation (#1336)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-22T15:30:27-04:00",
          "tree_id": "8932947e6ae8594a1e55354d78bce6c3868e4784",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/0b73d5d327e6ebe3f333c5b5afb462aa1a85d59e"
        },
        "date": 1732304136146,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 527.4045070101212,
            "unit": "ns/iter",
            "extra": "iterations: 1332857\ncpu: 527.3868884659045 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.4746215829604368,
            "unit": "ns/iter",
            "extra": "iterations: 280740067\ncpu: 2.474587024302449 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.473919512882047,
            "unit": "ns/iter",
            "extra": "iterations: 280333606\ncpu: 2.4739061252613435 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.4736735162658445,
            "unit": "ns/iter",
            "extra": "iterations: 282704522\ncpu: 2.473620478557468 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 5.833636112609675,
            "unit": "ns/iter",
            "extra": "iterations: 119042163\ncpu: 5.833609424586816 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 150.55249864252903,
            "unit": "ns/iter",
            "extra": "iterations: 4687045\ncpu: 150.54606047093634 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 394.1938046059545,
            "unit": "ns/iter",
            "extra": "iterations: 1775448\ncpu: 394.1917116130687 ns\nthreads: 1"
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
          "id": "6468fc7b9e12deae67c0edc05acfc0c9f4d4316b",
          "message": "Optimise regexes for non-empty strings (#1337)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-22T15:45:35-04:00",
          "tree_id": "4f6f2fb367fa4b16d5db472643d937b826b2fba0",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/6468fc7b9e12deae67c0edc05acfc0c9f4d4316b"
        },
        "date": 1732305047805,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 436.1704487045853,
            "unit": "ns/iter",
            "extra": "iterations: 1663433\ncpu: 436.1410143961313 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.8248963695794824,
            "unit": "ns/iter",
            "extra": "iterations: 251302174\ncpu: 2.8248670144811396 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 3.093081779288856,
            "unit": "ns/iter",
            "extra": "iterations: 226150952\ncpu: 3.0928970752243394 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 4.024523732902733,
            "unit": "ns/iter",
            "extra": "iterations: 174082307\ncpu: 4.024335253093812 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 4.028208567988186,
            "unit": "ns/iter",
            "extra": "iterations: 174170947\ncpu: 4.027999118590082 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 10.208161789758172,
            "unit": "ns/iter",
            "extra": "iterations: 68540408\ncpu: 10.207676543156843 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 155.92110519366875,
            "unit": "ns/iter",
            "extra": "iterations: 4492932\ncpu: 155.91758855909674 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 402.6280478960845,
            "unit": "ns/iter",
            "extra": "iterations: 1737428\ncpu: 402.61219169945446 ns\nthreads: 1"
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
          "id": "6fd20d7de47632de469afa06057c8f4096f5dea0",
          "message": "Optimise range-based regexes (#1340)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-22T16:10:00-04:00",
          "tree_id": "faf73b4b44b844bd9203e0c604a9dd2400a98d1b",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/6fd20d7de47632de469afa06057c8f4096f5dea0"
        },
        "date": 1732306516165,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 411.43299175431184,
            "unit": "ns/iter",
            "extra": "iterations: 1698582\ncpu: 411.42428743504877 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.4813846982862615,
            "unit": "ns/iter",
            "extra": "iterations: 282761439\ncpu: 2.4812945374775803 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.784414940188815,
            "unit": "ns/iter",
            "extra": "iterations: 251113454\ncpu: 2.7843875262852307 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 3.710946952820891,
            "unit": "ns/iter",
            "extra": "iterations: 188501936\ncpu: 3.7108784283255325 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.4782190140621263,
            "unit": "ns/iter",
            "extra": "iterations: 282988085\ncpu: 2.478045239961251 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 12.38525798904649,
            "unit": "ns/iter",
            "extra": "iterations: 56562731\ncpu: 12.38432141828513 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 151.77206999123837,
            "unit": "ns/iter",
            "extra": "iterations: 4602290\ncpu: 151.76186224683798 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 6.193932553517688,
            "unit": "ns/iter",
            "extra": "iterations: 113009155\ncpu: 6.1938968926898 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.019671924882156,
            "unit": "ns/iter",
            "extra": "iterations: 174007832\ncpu: 4.01949761088915 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 398.9101763866162,
            "unit": "ns/iter",
            "extra": "iterations: 1761018\ncpu: 398.8869301733435 ns\nthreads: 1"
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
          "id": "8375f16fce32e47547f8cacdb02aa3e590c8caee",
          "message": "Improve optimisations for regexes for non-empty strings (#1341)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-22T16:14:23-04:00",
          "tree_id": "1f8233f03113d7a6941da8b655b091dc1a7fda14",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/8375f16fce32e47547f8cacdb02aa3e590c8caee"
        },
        "date": 1732306754614,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 447.54579501696634,
            "unit": "ns/iter",
            "extra": "iterations: 1622349\ncpu: 447.5201063396347 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.4740245001055574,
            "unit": "ns/iter",
            "extra": "iterations: 281293239\ncpu: 2.4738370160400467 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.4797455801189994,
            "unit": "ns/iter",
            "extra": "iterations: 281206326\ncpu: 2.4796276346926835 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.4794956168242837,
            "unit": "ns/iter",
            "extra": "iterations: 282023602\ncpu: 2.479347107977153 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.4855560493349356,
            "unit": "ns/iter",
            "extra": "iterations: 281241268\ncpu: 2.4854080980747106 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 3.4013423186533696,
            "unit": "ns/iter",
            "extra": "iterations: 205535101\ncpu: 3.400995078694613 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 3.4008954674356486,
            "unit": "ns/iter",
            "extra": "iterations: 205555437\ncpu: 3.400681875420302 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 12.387172148416703,
            "unit": "ns/iter",
            "extra": "iterations: 56494885\ncpu: 12.386330054481927 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 151.52841142413268,
            "unit": "ns/iter",
            "extra": "iterations: 4626836\ncpu: 151.52452928956197 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 6.81299016415359,
            "unit": "ns/iter",
            "extra": "iterations: 100572940\ncpu: 6.812849798365239 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.031989981245728,
            "unit": "ns/iter",
            "extra": "iterations: 174203697\ncpu: 4.0319890570405015 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 384.34737531379125,
            "unit": "ns/iter",
            "extra": "iterations: 1823437\ncpu: 384.3379710952453 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}