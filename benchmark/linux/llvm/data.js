window.BENCHMARK_DATA = {
  "lastUpdate": 1725408921072,
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
      }
    ]
  }
}