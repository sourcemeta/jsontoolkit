window.BENCHMARK_DATA = {
  "lastUpdate": 1725462724251,
  "repoUrl": "https://github.com/sourcemeta/jsontoolkit",
  "entries": {
    "Benchmark (macos)": [
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724901876987,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 240083.37398373717,
            "unit": "ns/iter",
            "extra": "iterations: 3075\ncpu: 235814.63414634147 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 13229.059194050886,
            "unit": "ns/iter",
            "extra": "iterations: 53502\ncpu: 13223.767335800527 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 9494.76615768629,
            "unit": "ns/iter",
            "extra": "iterations: 72891\ncpu: 9491.254064287772 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724901928040,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 199348.8630137186,
            "unit": "ns/iter",
            "extra": "iterations: 3504\ncpu: 199335.90182648404 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 9553.853360572954,
            "unit": "ns/iter",
            "extra": "iterations: 73916\ncpu: 9552.749066507933 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8125.081818804495,
            "unit": "ns/iter",
            "extra": "iterations: 87596\ncpu: 8123.727110826985 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724902990315,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 211676.12055728456,
            "unit": "ns/iter",
            "extra": "iterations: 3517\ncpu: 210265.5672448109 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 9491.854095551244,
            "unit": "ns/iter",
            "extra": "iterations: 74117\ncpu: 9490.75110973191 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8155.508991336474,
            "unit": "ns/iter",
            "extra": "iterations: 86917\ncpu: 8154.91791019019 ns\nthreads: 1"
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
        "date": 1724943008683,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 203770.03732866948,
            "unit": "ns/iter",
            "extra": "iterations: 3429\ncpu: 203728.20064158645 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 9691.372417234397,
            "unit": "ns/iter",
            "extra": "iterations: 72161\ncpu: 9690.28976871163 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8340.658707696646,
            "unit": "ns/iter",
            "extra": "iterations: 83386\ncpu: 8340.488811071402 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724956655453,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 219919.42007549992,
            "unit": "ns/iter",
            "extra": "iterations: 3178\ncpu: 219902.13971050974 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 10194.390943480126,
            "unit": "ns/iter",
            "extra": "iterations: 72169\ncpu: 10194.127672546378 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 8183.623218584636,
            "unit": "ns/iter",
            "extra": "iterations: 83080\ncpu: 8181.608088589316 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724957292561,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 205137.19757014207,
            "unit": "ns/iter",
            "extra": "iterations: 3457\ncpu: 205111.0789702054 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 8704.739140590882,
            "unit": "ns/iter",
            "extra": "iterations: 81335\ncpu: 8704.346222413473 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3471.9638024355563,
            "unit": "ns/iter",
            "extra": "iterations: 201008\ncpu: 3471.5682957892245 ns\nthreads: 1"
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
        "date": 1724958511202,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 224404.0534207965,
            "unit": "ns/iter",
            "extra": "iterations: 3201\ncpu: 224160.57482036864 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 9241.688938291407,
            "unit": "ns/iter",
            "extra": "iterations: 75567\ncpu: 9240.89880503394 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3918.7457955482564,
            "unit": "ns/iter",
            "extra": "iterations: 185815\ncpu: 3914.005866049566 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724959419345,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 222231.2905982931,
            "unit": "ns/iter",
            "extra": "iterations: 3276\ncpu: 222097.0695970696 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 9298.04392486541,
            "unit": "ns/iter",
            "extra": "iterations: 76130\ncpu: 9295.008538027063 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3741.600132622311,
            "unit": "ns/iter",
            "extra": "iterations: 186997\ncpu: 3740.9798018149986 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724959468639,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 211332.8593108022,
            "unit": "ns/iter",
            "extra": "iterations: 3163\ncpu: 210321.53019285484 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 8786.028890299136,
            "unit": "ns/iter",
            "extra": "iterations: 80373\ncpu: 8785.674293606056 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3450.7517456123783,
            "unit": "ns/iter",
            "extra": "iterations: 202651\ncpu: 3449.4327686515253 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724964585630,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 198753.17957446392,
            "unit": "ns/iter",
            "extra": "iterations: 3525\ncpu: 198734.46808510637 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 8563.581942766965,
            "unit": "ns/iter",
            "extra": "iterations: 81142\ncpu: 8561.299943309261 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3410.279458021562,
            "unit": "ns/iter",
            "extra": "iterations: 205691\ncpu: 3409.9936312235354 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724966480691,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 213199.14829657608,
            "unit": "ns/iter",
            "extra": "iterations: 3493\ncpu: 207727.74119667904 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 8748.517046228002,
            "unit": "ns/iter",
            "extra": "iterations: 80751\ncpu: 8668.17748387017 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3407.901723666532,
            "unit": "ns/iter",
            "extra": "iterations: 204912\ncpu: 3407.5163972827354 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10913.11946916623,
            "unit": "ns/iter",
            "extra": "iterations: 64276\ncpu: 10912.051154396662 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724967187814,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 231541.3690360341,
            "unit": "ns/iter",
            "extra": "iterations: 3081\ncpu: 231480.68808828297 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 9665.826947852864,
            "unit": "ns/iter",
            "extra": "iterations: 73735\ncpu: 9662.656811554894 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3666.7415151626155,
            "unit": "ns/iter",
            "extra": "iterations: 188719\ncpu: 3664.082577800858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10233.30795099022,
            "unit": "ns/iter",
            "extra": "iterations: 72557\ncpu: 10231.307799385306 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724975755369,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 220989.14093355366,
            "unit": "ns/iter",
            "extra": "iterations: 3342\ncpu: 220904.8473967684 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 9372.058686653607,
            "unit": "ns/iter",
            "extra": "iterations: 73918\ncpu: 9371.817419302472 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3594.6480434231144,
            "unit": "ns/iter",
            "extra": "iterations: 189208\ncpu: 3591.761447718916 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1109.450836395648,
            "unit": "ns/iter",
            "extra": "iterations: 653339\ncpu: 1109.2526238292835 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9660.853201556716,
            "unit": "ns/iter",
            "extra": "iterations: 76697\ncpu: 9657.913608094184 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724985664620,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 250877.6874202081,
            "unit": "ns/iter",
            "extra": "iterations: 3132\ncpu: 249013.4099616858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 8860.257684154225,
            "unit": "ns/iter",
            "extra": "iterations: 75480\ncpu: 8854.87546369899 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 4126.57776009271,
            "unit": "ns/iter",
            "extra": "iterations: 170891\ncpu: 4116.009620167241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1407.8275632547543,
            "unit": "ns/iter",
            "extra": "iterations: 459728\ncpu: 1401.8310827271773 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12695.704254902992,
            "unit": "ns/iter",
            "extra": "iterations: 51000\ncpu: 12683.392156862747 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724988356529,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 226016.44848691492,
            "unit": "ns/iter",
            "extra": "iterations: 2941\ncpu: 225926.21557293442 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7600.1283684312675,
            "unit": "ns/iter",
            "extra": "iterations: 93738\ncpu: 7599.660756576847 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 4284.436581719547,
            "unit": "ns/iter",
            "extra": "iterations: 177914\ncpu: 4282.585968501635 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1534.6997975393335,
            "unit": "ns/iter",
            "extra": "iterations: 454903\ncpu: 1533.2433507802764 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12906.384105538842,
            "unit": "ns/iter",
            "extra": "iterations: 47224\ncpu: 12901.236659325748 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724990491287,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 196539.24020155813,
            "unit": "ns/iter",
            "extra": "iterations: 3572\ncpu: 196535.27435610304 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7235.543473031625,
            "unit": "ns/iter",
            "extra": "iterations: 103915\ncpu: 7168.8302939902815 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3398.2017316058686,
            "unit": "ns/iter",
            "extra": "iterations: 206398\ncpu: 3397.7703272318518 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1194.331993104596,
            "unit": "ns/iter",
            "extra": "iterations: 598654\ncpu: 1192.906085986228 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9118.17232895212,
            "unit": "ns/iter",
            "extra": "iterations: 78443\ncpu: 9117.14238364162 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725029675189,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 210156.81720744845,
            "unit": "ns/iter",
            "extra": "iterations: 3452\ncpu: 208547.79837775207 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7306.330274647771,
            "unit": "ns/iter",
            "extra": "iterations: 78792\ncpu: 7301.845365011678 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3818.1725820221786,
            "unit": "ns/iter",
            "extra": "iterations: 180378\ncpu: 3817.2005455210724 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1308.6967279721716,
            "unit": "ns/iter",
            "extra": "iterations: 523009\ncpu: 1308.390486588184 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10125.572795890363,
            "unit": "ns/iter",
            "extra": "iterations: 69688\ncpu: 10121.254735392022 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725032701230,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 263270.35881585657,
            "unit": "ns/iter",
            "extra": "iterations: 3074\ncpu: 249775.53675992187 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7054.995151322622,
            "unit": "ns/iter",
            "extra": "iterations: 100646\ncpu: 7054.666852135204 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3568.769716265915,
            "unit": "ns/iter",
            "extra": "iterations: 195676\ncpu: 3566.69698890002 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1302.14057632453,
            "unit": "ns/iter",
            "extra": "iterations: 567215\ncpu: 1296.487222658074 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9882.696637026214,
            "unit": "ns/iter",
            "extra": "iterations: 67589\ncpu: 9873.011880631466 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725043174049,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 201172.30355129213,
            "unit": "ns/iter",
            "extra": "iterations: 3548\ncpu: 201151.91657271702 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6878.698177471619,
            "unit": "ns/iter",
            "extra": "iterations: 100410\ncpu: 6878.378647545061 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3437.8122504429566,
            "unit": "ns/iter",
            "extra": "iterations: 205364\ncpu: 3437.549911376874 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1207.7210446488389,
            "unit": "ns/iter",
            "extra": "iterations: 586800\ncpu: 1207.5034083162916 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 8982.050764502093,
            "unit": "ns/iter",
            "extra": "iterations: 77436\ncpu: 8978.73082287308 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725044437917,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 206305.9865752231,
            "unit": "ns/iter",
            "extra": "iterations: 3352\ncpu: 202286.99284009545 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7060.030094692462,
            "unit": "ns/iter",
            "extra": "iterations: 102543\ncpu: 6905.0447129496915 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3494.5444373640357,
            "unit": "ns/iter",
            "extra": "iterations: 202431\ncpu: 3454.6932041041164 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1192.122630557557,
            "unit": "ns/iter",
            "extra": "iterations: 579725\ncpu: 1192.0514036827801 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9122.088249602542,
            "unit": "ns/iter",
            "extra": "iterations: 76057\ncpu: 9117.885270257833 ns\nthreads: 1"
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
        "date": 1725044778993,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 202838.4086427095,
            "unit": "ns/iter",
            "extra": "iterations: 3448\ncpu: 202824.24593967517 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7049.65626169782,
            "unit": "ns/iter",
            "extra": "iterations: 96172\ncpu: 7046.562409017176 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3454.8454980074093,
            "unit": "ns/iter",
            "extra": "iterations: 203732\ncpu: 3452.9479904973214 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1242.8883248731663,
            "unit": "ns/iter",
            "extra": "iterations: 567951\ncpu: 1242.6688217821609 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9393.491241534859,
            "unit": "ns/iter",
            "extra": "iterations: 72958\ncpu: 9386.811590229981 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725046380166,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 206830.07481524645,
            "unit": "ns/iter",
            "extra": "iterations: 3248\ncpu: 206811.88423645316 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7392.894571660287,
            "unit": "ns/iter",
            "extra": "iterations: 94633\ncpu: 7391.692115858105 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3654.227698522444,
            "unit": "ns/iter",
            "extra": "iterations: 188631\ncpu: 3652.7718137527772 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1306.3695505374967,
            "unit": "ns/iter",
            "extra": "iterations: 558289\ncpu: 1305.7968184936476 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10439.41741670299,
            "unit": "ns/iter",
            "extra": "iterations: 67441\ncpu: 10437.656618377545 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725062381751,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 227165.89116716702,
            "unit": "ns/iter",
            "extra": "iterations: 3170\ncpu: 216395.89905362777 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6592.511059077348,
            "unit": "ns/iter",
            "extra": "iterations: 108056\ncpu: 6581.790923225 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3754.8350718569322,
            "unit": "ns/iter",
            "extra": "iterations: 187803\ncpu: 3740.2916886311714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1356.523137438307,
            "unit": "ns/iter",
            "extra": "iterations: 564129\ncpu: 1253.2931297628747 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9108.107636411585,
            "unit": "ns/iter",
            "extra": "iterations: 75690\ncpu: 9106.130268199237 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725133138343,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 195940.84611085083,
            "unit": "ns/iter",
            "extra": "iterations: 3574\ncpu: 195928.37157246782 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6037.750789703864,
            "unit": "ns/iter",
            "extra": "iterations: 116183\ncpu: 6037.294612809102 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3446.89567948083,
            "unit": "ns/iter",
            "extra": "iterations: 204744\ncpu: 3433.096940569683 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1278.2144624672735,
            "unit": "ns/iter",
            "extra": "iterations: 582736\ncpu: 1261.9144861481022 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9479.108532344015,
            "unit": "ns/iter",
            "extra": "iterations: 69887\ncpu: 9467.769399172945 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725134139659,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 197746.89795918885,
            "unit": "ns/iter",
            "extra": "iterations: 3479\ncpu: 197732.10692727796 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6014.0444764863305,
            "unit": "ns/iter",
            "extra": "iterations: 117208\ncpu: 6013.352330898916 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3416.530299187251,
            "unit": "ns/iter",
            "extra": "iterations: 205022\ncpu: 3416.018768717504 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1198.6364680905672,
            "unit": "ns/iter",
            "extra": "iterations: 577025\ncpu: 1198.6101122135083 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9002.564715278142,
            "unit": "ns/iter",
            "extra": "iterations: 76373\ncpu: 9002.19973027117 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725135668449,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 216568.0071695568,
            "unit": "ns/iter",
            "extra": "iterations: 3208\ncpu: 215078.86533665835 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6610.233369352394,
            "unit": "ns/iter",
            "extra": "iterations: 108279\ncpu: 6587.583926707859 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3646.1036065253793,
            "unit": "ns/iter",
            "extra": "iterations: 184998\ncpu: 3634.42307484405 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1295.4398624418723,
            "unit": "ns/iter",
            "extra": "iterations: 543770\ncpu: 1294.7128381484815 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9804.167022549027,
            "unit": "ns/iter",
            "extra": "iterations: 70248\ncpu: 9790.556314770527 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725138804948,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 197034.1969384449,
            "unit": "ns/iter",
            "extra": "iterations: 3397\ncpu: 197003.8269060936 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 5988.400992934582,
            "unit": "ns/iter",
            "extra": "iterations: 118638\ncpu: 5988.03924543569 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3428.6066442324927,
            "unit": "ns/iter",
            "extra": "iterations: 203846\ncpu: 3428.4705120532167 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1232.906348950351,
            "unit": "ns/iter",
            "extra": "iterations: 581734\ncpu: 1213.1627169806136 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9455.953181785766,
            "unit": "ns/iter",
            "extra": "iterations: 75398\ncpu: 9234.435926682385 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725146493050,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 199947.56763005062,
            "unit": "ns/iter",
            "extra": "iterations: 3460\ncpu: 199901.15606936414 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6032.668557253795,
            "unit": "ns/iter",
            "extra": "iterations: 116895\ncpu: 6030.583001839256 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3412.1311021203296,
            "unit": "ns/iter",
            "extra": "iterations: 204642\ncpu: 3411.9144652612845 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1198.9096910254602,
            "unit": "ns/iter",
            "extra": "iterations: 589886\ncpu: 1198.670590588689 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9006.709632425674,
            "unit": "ns/iter",
            "extra": "iterations: 77426\ncpu: 9006.548187947197 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725291358698,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 205486.49692894705,
            "unit": "ns/iter",
            "extra": "iterations: 3419\ncpu: 205429.95027785905 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6148.390850564484,
            "unit": "ns/iter",
            "extra": "iterations: 112772\ncpu: 6146.8360940658995 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3548.5229802996514,
            "unit": "ns/iter",
            "extra": "iterations: 200302\ncpu: 3547.578156982955 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1228.5662105939778,
            "unit": "ns/iter",
            "extra": "iterations: 574251\ncpu: 1228.2433987925162 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9373.272646773514,
            "unit": "ns/iter",
            "extra": "iterations: 74536\ncpu: 9372.55822689708 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725293356881,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 214023.5140931493,
            "unit": "ns/iter",
            "extra": "iterations: 3264\ncpu: 213960.78431372554 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6203.1416168348405,
            "unit": "ns/iter",
            "extra": "iterations: 114718\ncpu: 6199.69839083666 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3603.6411456981186,
            "unit": "ns/iter",
            "extra": "iterations: 203963\ncpu: 3603.1044846369223 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1286.998911729535,
            "unit": "ns/iter",
            "extra": "iterations: 547658\ncpu: 1286.740995292681 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9391.20145088586,
            "unit": "ns/iter",
            "extra": "iterations: 74713\ncpu: 9390.869058932181 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725294720883,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 199088.96578053734,
            "unit": "ns/iter",
            "extra": "iterations: 3536\ncpu: 197487.8393665158 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6718.300342014171,
            "unit": "ns/iter",
            "extra": "iterations: 114323\ncpu: 6236.391627231614 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3413.573757799256,
            "unit": "ns/iter",
            "extra": "iterations: 200189\ncpu: 3411.6110275789383 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1164.6511798653362,
            "unit": "ns/iter",
            "extra": "iterations: 593839\ncpu: 1160.779268454919 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9186.658565798345,
            "unit": "ns/iter",
            "extra": "iterations: 77646\ncpu: 9154.302861705703 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725295688806,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 199471.11657662524,
            "unit": "ns/iter",
            "extra": "iterations: 3517\ncpu: 199462.04151265282 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6118.447906131565,
            "unit": "ns/iter",
            "extra": "iterations: 116674\ncpu: 6117.8583060493365 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3403.102415776192,
            "unit": "ns/iter",
            "extra": "iterations: 204158\ncpu: 3403.0309858051137 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1187.3301977604604,
            "unit": "ns/iter",
            "extra": "iterations: 589047\ncpu: 1186.6506407807876 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9196.0951038547,
            "unit": "ns/iter",
            "extra": "iterations: 78041\ncpu: 9173.49854563628 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725296748188,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 198447.71598633815,
            "unit": "ns/iter",
            "extra": "iterations: 3528\ncpu: 198402.49433106577 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6062.21570710264,
            "unit": "ns/iter",
            "extra": "iterations: 116737\ncpu: 6061.891259840497 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3418.6317003962445,
            "unit": "ns/iter",
            "extra": "iterations: 201947\ncpu: 3418.2533040847334 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1205.7215718522214,
            "unit": "ns/iter",
            "extra": "iterations: 584966\ncpu: 1205.5589555632298 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9216.663204284554,
            "unit": "ns/iter",
            "extra": "iterations: 76922\ncpu: 9215.127011778157 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725301298266,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 200242.41862461626,
            "unit": "ns/iter",
            "extra": "iterations: 3490\ncpu: 200204.29799426932 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1790.3382781195055,
            "unit": "ns/iter",
            "extra": "iterations: 394557\ncpu: 1789.9847170370822 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2432.9643084920363,
            "unit": "ns/iter",
            "extra": "iterations: 293207\ncpu: 2432.4896745302813 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 165.6520822843309,
            "unit": "ns/iter",
            "extra": "iterations: 4293794\ncpu: 165.6183319460598 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9110.435121938943,
            "unit": "ns/iter",
            "extra": "iterations: 77006\ncpu: 9109.147339168376 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725301982901,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 202876.62713335396,
            "unit": "ns/iter",
            "extra": "iterations: 3457\ncpu: 202841.19178478458 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1832.8819251744785,
            "unit": "ns/iter",
            "extra": "iterations: 383799\ncpu: 1832.3236902649558 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2488.733097351863,
            "unit": "ns/iter",
            "extra": "iterations: 272620\ncpu: 2488.676546108135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 170.95239948972764,
            "unit": "ns/iter",
            "extra": "iterations: 4135796\ncpu: 170.9337211022982 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9566.36863232773,
            "unit": "ns/iter",
            "extra": "iterations: 73987\ncpu: 9562.733993809728 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725303069967,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 204728.2110091171,
            "unit": "ns/iter",
            "extra": "iterations: 3270\ncpu: 204657.7981651376 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1771.9850055745828,
            "unit": "ns/iter",
            "extra": "iterations: 394680\ncpu: 1771.5339008817261 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2385.4860036629407,
            "unit": "ns/iter",
            "extra": "iterations: 292648\ncpu: 2385.189715972772 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 164.5931437460358,
            "unit": "ns/iter",
            "extra": "iterations: 4236570\ncpu: 164.55576091035928 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9112.574470255553,
            "unit": "ns/iter",
            "extra": "iterations: 78434\ncpu: 9112.374735446372 ns\nthreads: 1"
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
        "date": 1725303957990,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 201372.0574505825,
            "unit": "ns/iter",
            "extra": "iterations: 3342\ncpu: 201345.00299222016 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1799.637640102208,
            "unit": "ns/iter",
            "extra": "iterations: 396407\ncpu: 1799.501522425184 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2421.460546216454,
            "unit": "ns/iter",
            "extra": "iterations: 287615\ncpu: 2421.121985988215 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 170.08768394900648,
            "unit": "ns/iter",
            "extra": "iterations: 4112349\ncpu: 170.06533249001964 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9212.453483116893,
            "unit": "ns/iter",
            "extra": "iterations: 72995\ncpu: 9210.726762107002 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725305367685,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 203147.57066821982,
            "unit": "ns/iter",
            "extra": "iterations: 3382\ncpu: 203124.1868716735 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1754.9250231724027,
            "unit": "ns/iter",
            "extra": "iterations: 385159\ncpu: 1754.794773067746 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2394.392849202357,
            "unit": "ns/iter",
            "extra": "iterations: 296862\ncpu: 2394.0484130673494 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 163.8086073847964,
            "unit": "ns/iter",
            "extra": "iterations: 4236339\ncpu: 163.78623146070228 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9041.45385848217,
            "unit": "ns/iter",
            "extra": "iterations: 76753\ncpu: 9039.803004442816 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725308636226,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 209398.1300690977,
            "unit": "ns/iter",
            "extra": "iterations: 3329\ncpu: 209377.2904776209 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1653.0829519957508,
            "unit": "ns/iter",
            "extra": "iterations: 425258\ncpu: 1652.9259884587705 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2497.7904689323027,
            "unit": "ns/iter",
            "extra": "iterations: 282130\ncpu: 2497.0474603906005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 171.94955733842792,
            "unit": "ns/iter",
            "extra": "iterations: 4026552\ncpu: 171.88105356642606 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9423.979664381668,
            "unit": "ns/iter",
            "extra": "iterations: 72582\ncpu: 9423.190322669543 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725309343799,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 207922.74315470294,
            "unit": "ns/iter",
            "extra": "iterations: 3360\ncpu: 207921.13095238095 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1699.320090867944,
            "unit": "ns/iter",
            "extra": "iterations: 422152\ncpu: 1699.274195076655 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2546.780576543576,
            "unit": "ns/iter",
            "extra": "iterations: 275955\ncpu: 2546.295591672553 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 174.803194894191,
            "unit": "ns/iter",
            "extra": "iterations: 4036816\ncpu: 174.74118215940499 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9562.419604707617,
            "unit": "ns/iter",
            "extra": "iterations: 72554\ncpu: 9559.128373349511 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725309804589,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 198526.12835735356,
            "unit": "ns/iter",
            "extra": "iterations: 3537\ncpu: 198497.8795589483 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1547.4327987627796,
            "unit": "ns/iter",
            "extra": "iterations: 447462\ncpu: 1547.192834251847 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2341.5634681734336,
            "unit": "ns/iter",
            "extra": "iterations: 299985\ncpu: 2341.2803973532023 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 162.77334825113653,
            "unit": "ns/iter",
            "extra": "iterations: 4309841\ncpu: 162.7628490238968 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9133.270005904868,
            "unit": "ns/iter",
            "extra": "iterations: 77902\ncpu: 9133.141639495781 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725311009344,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 204976.7673611445,
            "unit": "ns/iter",
            "extra": "iterations: 3456\ncpu: 204967.5925925925 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1619.734050353235,
            "unit": "ns/iter",
            "extra": "iterations: 436436\ncpu: 1619.5180965823165 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2432.3146763727514,
            "unit": "ns/iter",
            "extra": "iterations: 295618\ncpu: 2431.627979351731 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 165.21935291427891,
            "unit": "ns/iter",
            "extra": "iterations: 4146993\ncpu: 165.18691977536497 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 8797.167069364037,
            "unit": "ns/iter",
            "extra": "iterations: 79464\ncpu: 8796.511627906986 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725312291991,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 203190.0137504512,
            "unit": "ns/iter",
            "extra": "iterations: 2909\ncpu: 203163.97387418346 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1732.8319284748634,
            "unit": "ns/iter",
            "extra": "iterations: 424242\ncpu: 1731.4858029143736 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2566.362104863072,
            "unit": "ns/iter",
            "extra": "iterations: 273291\ncpu: 2565.2107094635367 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 177.15075221709478,
            "unit": "ns/iter",
            "extra": "iterations: 3779228\ncpu: 177.02213256252327 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10243.713791583232,
            "unit": "ns/iter",
            "extra": "iterations: 70253\ncpu: 10237.512988769155 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725312982381,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 201976.72209500815,
            "unit": "ns/iter",
            "extra": "iterations: 3494\ncpu: 199033.199771036 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1604.4579549939835,
            "unit": "ns/iter",
            "extra": "iterations: 438209\ncpu: 1584.8328080892902 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2475.1339894153225,
            "unit": "ns/iter",
            "extra": "iterations: 287769\ncpu: 2420.698546403539 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 167.52181478113985,
            "unit": "ns/iter",
            "extra": "iterations: 4201807\ncpu: 166.92532522317177 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9575.568985114855,
            "unit": "ns/iter",
            "extra": "iterations: 72146\ncpu: 9478.793003077102 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725315013130,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 204049.65753429395,
            "unit": "ns/iter",
            "extra": "iterations: 3431\ncpu: 204024.48265811717 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1599.5496768072023,
            "unit": "ns/iter",
            "extra": "iterations: 440759\ncpu: 1599.1278680639539 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2401.6238914099445,
            "unit": "ns/iter",
            "extra": "iterations: 293729\ncpu: 2401.4448692502283 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 165.32197851504478,
            "unit": "ns/iter",
            "extra": "iterations: 4259073\ncpu: 165.2979415943329 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 8964.991558762851,
            "unit": "ns/iter",
            "extra": "iterations: 76766\ncpu: 8964.710939738945 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725316013646,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 196226.76803394748,
            "unit": "ns/iter",
            "extra": "iterations: 3535\ncpu: 196218.95332390384 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1594.761266570678,
            "unit": "ns/iter",
            "extra": "iterations: 439486\ncpu: 1594.6924361640647 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2446.842602561657,
            "unit": "ns/iter",
            "extra": "iterations: 294433\ncpu: 2446.7332126493975 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 168.34540484314013,
            "unit": "ns/iter",
            "extra": "iterations: 4098217\ncpu: 168.2529256015481 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9097.066254912957,
            "unit": "ns/iter",
            "extra": "iterations: 76583\ncpu: 9095.739263282972 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725322537673,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 219456.9733239552,
            "unit": "ns/iter",
            "extra": "iterations: 2849\ncpu: 215444.01544401547 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1650.526482546473,
            "unit": "ns/iter",
            "extra": "iterations: 405569\ncpu: 1650.0718743296463 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2481.170113577368,
            "unit": "ns/iter",
            "extra": "iterations: 293016\ncpu: 2480.9634968738887 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 176.9487637737001,
            "unit": "ns/iter",
            "extra": "iterations: 4166915\ncpu: 176.8912972786821 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9483.548418128574,
            "unit": "ns/iter",
            "extra": "iterations: 73805\ncpu: 9483.408983131225 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725374760299,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 213730.56683714266,
            "unit": "ns/iter",
            "extra": "iterations: 2738\ncpu: 213671.29291453617 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1694.8502132157603,
            "unit": "ns/iter",
            "extra": "iterations: 423749\ncpu: 1694.363880504733 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2561.426124611032,
            "unit": "ns/iter",
            "extra": "iterations: 263958\ncpu: 2561.26732283166 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 174.54577393180574,
            "unit": "ns/iter",
            "extra": "iterations: 4105885\ncpu: 174.47152075618305 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9387.726997994656,
            "unit": "ns/iter",
            "extra": "iterations: 72798\ncpu: 9387.098546663367 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725377574118,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 206064.517541218,
            "unit": "ns/iter",
            "extra": "iterations: 3335\ncpu: 206013.79310344823 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1654.379508865012,
            "unit": "ns/iter",
            "extra": "iterations: 431816\ncpu: 1653.9475146821796 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2510.702984379532,
            "unit": "ns/iter",
            "extra": "iterations: 279120\ncpu: 2509.5335339638855 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 163.48228290490496,
            "unit": "ns/iter",
            "extra": "iterations: 4189259\ncpu: 163.48022406826595 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 8954.195170948222,
            "unit": "ns/iter",
            "extra": "iterations: 77158\ncpu: 8954.12011716219 ns\nthreads: 1"
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
        "date": 1725379982688,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 199226.12562666408,
            "unit": "ns/iter",
            "extra": "iterations: 3391\ncpu: 199212.3267472722 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1621.3018833731062,
            "unit": "ns/iter",
            "extra": "iterations: 435920\ncpu: 1620.994677922555 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2490.5313801866064,
            "unit": "ns/iter",
            "extra": "iterations: 288048\ncpu: 2480.388685219129 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 167.09829560099269,
            "unit": "ns/iter",
            "extra": "iterations: 4202009\ncpu: 167.0236784357197 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9134.103622840657,
            "unit": "ns/iter",
            "extra": "iterations: 77039\ncpu: 9133.581692389573 ns\nthreads: 1"
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
        "date": 1725381177028,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 210799.7882283427,
            "unit": "ns/iter",
            "extra": "iterations: 3381\ncpu: 210738.24312333632 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1682.282647285973,
            "unit": "ns/iter",
            "extra": "iterations: 412921\ncpu: 1682.1595414134902 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2458.1663335740686,
            "unit": "ns/iter",
            "extra": "iterations: 275699\ncpu: 2457.604126239125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 165.62807445732003,
            "unit": "ns/iter",
            "extra": "iterations: 4211109\ncpu: 165.61931785665 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9061.271853789684,
            "unit": "ns/iter",
            "extra": "iterations: 77641\ncpu: 9060.071354052632 ns\nthreads: 1"
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
        "date": 1725383736742,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 196779.96359560476,
            "unit": "ns/iter",
            "extra": "iterations: 3571\ncpu: 196763.6516381966 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1574.47263275659,
            "unit": "ns/iter",
            "extra": "iterations: 446099\ncpu: 1574.4801041921176 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2383.3608179981584,
            "unit": "ns/iter",
            "extra": "iterations: 293497\ncpu: 2383.070355063256 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 168.21252261763877,
            "unit": "ns/iter",
            "extra": "iterations: 4198052\ncpu: 168.12512088940292 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9417.274126215447,
            "unit": "ns/iter",
            "extra": "iterations: 77851\ncpu: 9410.64340856251 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725385640708,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 209280.86106962175,
            "unit": "ns/iter",
            "extra": "iterations: 3347\ncpu: 209268.89752016732 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1695.3442335737193,
            "unit": "ns/iter",
            "extra": "iterations: 408676\ncpu: 1695.218216875961 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2502.3787317574293,
            "unit": "ns/iter",
            "extra": "iterations: 283747\ncpu: 2501.8942931555207 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 178.6488938969746,
            "unit": "ns/iter",
            "extra": "iterations: 3974901\ncpu: 178.6102345693642 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9120.567738719492,
            "unit": "ns/iter",
            "extra": "iterations: 74219\ncpu: 9117.665287864293 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725386341935,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 196468.0527631421,
            "unit": "ns/iter",
            "extra": "iterations: 3601\ncpu: 196458.7614551513 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1637.3482352556264,
            "unit": "ns/iter",
            "extra": "iterations: 428759\ncpu: 1637.0805044325596 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2414.8426288435544,
            "unit": "ns/iter",
            "extra": "iterations: 287092\ncpu: 2414.5604893204986 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 183.7946724121735,
            "unit": "ns/iter",
            "extra": "iterations: 3914004\ncpu: 183.7065061762841 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9173.530707715092,
            "unit": "ns/iter",
            "extra": "iterations: 76528\ncpu: 9170.081538783184 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725389207944,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 194434.80483688661,
            "unit": "ns/iter",
            "extra": "iterations: 3556\ncpu: 194430.82114735662 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1582.8354607717354,
            "unit": "ns/iter",
            "extra": "iterations: 442551\ncpu: 1582.7667319698753 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2388.7872504287257,
            "unit": "ns/iter",
            "extra": "iterations: 292151\ncpu: 2388.4977289141552 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 167.27060274570408,
            "unit": "ns/iter",
            "extra": "iterations: 4121987\ncpu: 167.26423445779903 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 8806.855669317614,
            "unit": "ns/iter",
            "extra": "iterations: 78722\ncpu: 8806.44546632453 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725389250059,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 222591.9515272101,
            "unit": "ns/iter",
            "extra": "iterations: 3012\ncpu: 220426.62682602918 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1766.2006838077325,
            "unit": "ns/iter",
            "extra": "iterations: 385781\ncpu: 1762.5284811849194 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2720.210487876635,
            "unit": "ns/iter",
            "extra": "iterations: 261521\ncpu: 2707.591359776078 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 198.16912823666908,
            "unit": "ns/iter",
            "extra": "iterations: 3662026\ncpu: 191.81540491520272 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10375.864695858949,
            "unit": "ns/iter",
            "extra": "iterations: 65726\ncpu: 10363.235249368592 ns\nthreads: 1"
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
          "id": "26b27ba164f4b11f49e46ae9dae8d82a01d21142",
          "message": "Simplify annotation-related types in `EvaluationContext` (#1109)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T18:42:54Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/26b27ba164f4b11f49e46ae9dae8d82a01d21142"
        },
        "date": 1725390383749,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 218529.55061249825,
            "unit": "ns/iter",
            "extra": "iterations: 3102\ncpu: 218527.40167633785 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1793.871328916325,
            "unit": "ns/iter",
            "extra": "iterations: 393787\ncpu: 1793.3273571753252 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2499.0063098751702,
            "unit": "ns/iter",
            "extra": "iterations: 255948\ncpu: 2498.2496444590297 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 169.0290366921952,
            "unit": "ns/iter",
            "extra": "iterations: 4143826\ncpu: 168.99913268559052 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9313.16367247833,
            "unit": "ns/iter",
            "extra": "iterations: 79042\ncpu: 9312.011335745554 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725390746541,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 219901.4085326489,
            "unit": "ns/iter",
            "extra": "iterations: 3094\ncpu: 219801.87459599224 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1950.9588935228412,
            "unit": "ns/iter",
            "extra": "iterations: 414071\ncpu: 1834.550113386352 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2619.6749868300635,
            "unit": "ns/iter",
            "extra": "iterations: 263857\ncpu: 2605.456743614916 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 191.690712795835,
            "unit": "ns/iter",
            "extra": "iterations: 3620153\ncpu: 191.60460897647144 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 8887.62007045862,
            "unit": "ns/iter",
            "extra": "iterations: 78912\ncpu: 8886.69657339821 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725392062061,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 230445.27687298539,
            "unit": "ns/iter",
            "extra": "iterations: 3070\ncpu: 230370.0325732899 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1735.203608771139,
            "unit": "ns/iter",
            "extra": "iterations: 433056\ncpu: 1734.085199142836 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2687.1806334958183,
            "unit": "ns/iter",
            "extra": "iterations: 251083\ncpu: 2683.753977768308 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 194.71237842250645,
            "unit": "ns/iter",
            "extra": "iterations: 3797681\ncpu: 194.60586605352051 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9369.645935345236,
            "unit": "ns/iter",
            "extra": "iterations: 80056\ncpu: 9362.733586489469 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725392770654,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 195005.89370075444,
            "unit": "ns/iter",
            "extra": "iterations: 3556\ncpu: 194987.6265466816 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1498.80861392177,
            "unit": "ns/iter",
            "extra": "iterations: 461857\ncpu: 1497.5154647434167 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2327.8258387128067,
            "unit": "ns/iter",
            "extra": "iterations: 300371\ncpu: 2327.784639662285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 171.1673560764237,
            "unit": "ns/iter",
            "extra": "iterations: 4129136\ncpu: 171.15444974444992 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 8405.114968655309,
            "unit": "ns/iter",
            "extra": "iterations: 83588\ncpu: 8404.998325118446 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725397332218,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 250642.81207785197,
            "unit": "ns/iter",
            "extra": "iterations: 2517\ncpu: 250375.84425903854 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1741.7798764030113,
            "unit": "ns/iter",
            "extra": "iterations: 419428\ncpu: 1735.0248433580969 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2576.0491504961265,
            "unit": "ns/iter",
            "extra": "iterations: 289051\ncpu: 2545.97285600119 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 238.35250341084912,
            "unit": "ns/iter",
            "extra": "iterations: 3736622\ncpu: 237.99570842327654 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 9786.817111729128,
            "unit": "ns/iter",
            "extra": "iterations: 78753\ncpu: 9777.862430637564 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725397948972,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 319040.4834746001,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 317940.2542372882 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1868.896769666899,
            "unit": "ns/iter",
            "extra": "iterations: 357734\ncpu: 1863.8541486132144 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3172.557824752782,
            "unit": "ns/iter",
            "extra": "iterations: 243062\ncpu: 2993.4090890390116 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 216.79840080934034,
            "unit": "ns/iter",
            "extra": "iterations: 3161099\ncpu: 216.1510917563797 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12899.416583206088,
            "unit": "ns/iter",
            "extra": "iterations: 51920\ncpu: 11382.203389830518 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 8870.185610481987,
            "unit": "ns/iter",
            "extra": "iterations: 79683\ncpu: 8733.04217963681 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725404367302,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 196739.80349593566,
            "unit": "ns/iter",
            "extra": "iterations: 3547\ncpu: 196732.73188610098 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1459.1904001457274,
            "unit": "ns/iter",
            "extra": "iterations: 482799\ncpu: 1458.9673963699183 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2192.3736454390746,
            "unit": "ns/iter",
            "extra": "iterations: 318738\ncpu: 2191.982129523308 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 168.9707013745326,
            "unit": "ns/iter",
            "extra": "iterations: 4129477\ncpu: 168.9308355513303 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 8000.260824872715,
            "unit": "ns/iter",
            "extra": "iterations: 86583\ncpu: 7999.942251943221 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6657.047873411632,
            "unit": "ns/iter",
            "extra": "iterations: 104275\ncpu: 6656.849676336606 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725406192187,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 212122.3493810296,
            "unit": "ns/iter",
            "extra": "iterations: 2908\ncpu: 212105.57083906472 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1608.4036951779176,
            "unit": "ns/iter",
            "extra": "iterations: 448747\ncpu: 1607.8480747503593 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2361.9988218265917,
            "unit": "ns/iter",
            "extra": "iterations: 292826\ncpu: 2361.5218593977324 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 181.59231977409,
            "unit": "ns/iter",
            "extra": "iterations: 3958269\ncpu: 181.46492822999147 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 8917.202061985989,
            "unit": "ns/iter",
            "extra": "iterations: 79535\ncpu: 8915.798076318604 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 7245.0943633127745,
            "unit": "ns/iter",
            "extra": "iterations: 97167\ncpu: 7243.395391439483 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725406615273,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 202892.85714288708,
            "unit": "ns/iter",
            "extra": "iterations: 3479\ncpu: 200201.20724346073 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1481.3806426642766,
            "unit": "ns/iter",
            "extra": "iterations: 490925\ncpu: 1459.6038091358146 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2264.1425677851244,
            "unit": "ns/iter",
            "extra": "iterations: 310540\ncpu: 2236.639402331421 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 173.36684890548906,
            "unit": "ns/iter",
            "extra": "iterations: 4055667\ncpu: 168.57054585595898 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 8215.668068670015,
            "unit": "ns/iter",
            "extra": "iterations: 87256\ncpu: 8214.850554689663 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6699.3909165558425,
            "unit": "ns/iter",
            "extra": "iterations: 105951\ncpu: 6698.530452756465 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725407352506,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 197374.8150305237,
            "unit": "ns/iter",
            "extra": "iterations: 3606\ncpu: 197368.27509706048 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1458.655693280148,
            "unit": "ns/iter",
            "extra": "iterations: 483412\ncpu: 1458.5591586472822 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2202.4697464744495,
            "unit": "ns/iter",
            "extra": "iterations: 314327\ncpu: 2202.46749404283 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 178.40360925030916,
            "unit": "ns/iter",
            "extra": "iterations: 3955115\ncpu: 178.38975605007712 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 8093.677234719004,
            "unit": "ns/iter",
            "extra": "iterations: 87181\ncpu: 8093.219852949606 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6750.571467317069,
            "unit": "ns/iter",
            "extra": "iterations: 103243\ncpu: 6750.055693848499 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725409801021,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 207891.97908801527,
            "unit": "ns/iter",
            "extra": "iterations: 3443\ncpu: 207884.11269241944 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1469.1569498758583,
            "unit": "ns/iter",
            "extra": "iterations: 478433\ncpu: 1469.0061095283972 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2261.6485133713477,
            "unit": "ns/iter",
            "extra": "iterations: 294290\ncpu: 2261.554928811715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 176.33863924372983,
            "unit": "ns/iter",
            "extra": "iterations: 3981095\ncpu: 176.3210875399859 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3625.349219120544,
            "unit": "ns/iter",
            "extra": "iterations: 193884\ncpu: 3625.2501495739725 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 5596.341958603156,
            "unit": "ns/iter",
            "extra": "iterations: 106045\ncpu: 5596.143146777309 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725410076580,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 269173.10510888475,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 268868.5092127304 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1631.7964278376894,
            "unit": "ns/iter",
            "extra": "iterations: 403901\ncpu: 1630.2831634484685 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2524.788725548225,
            "unit": "ns/iter",
            "extra": "iterations: 288014\ncpu: 2521.7593589200555 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 199.23277502657572,
            "unit": "ns/iter",
            "extra": "iterations: 3265230\ncpu: 199.09807272382045 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 4335.275163162971,
            "unit": "ns/iter",
            "extra": "iterations: 152455\ncpu: 4332.399724508873 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6981.662840011423,
            "unit": "ns/iter",
            "extra": "iterations: 113415\ncpu: 6979.500066128817 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725410095524,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 276729.9191745308,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 254987.10232158212 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1699.047934583564,
            "unit": "ns/iter",
            "extra": "iterations: 432673\ncpu: 1682.8667376979852 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2733.684672959011,
            "unit": "ns/iter",
            "extra": "iterations: 249709\ncpu: 2611.503790412039 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 223.0011004456786,
            "unit": "ns/iter",
            "extra": "iterations: 3424976\ncpu: 213.4689410962295 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 4265.10589404289,
            "unit": "ns/iter",
            "extra": "iterations: 159008\ncpu: 4257.609680016098 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6799.848782299438,
            "unit": "ns/iter",
            "extra": "iterations: 113082\ncpu: 6721.06966625988 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725411856814,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 200629.69041915864,
            "unit": "ns/iter",
            "extra": "iterations: 3340\ncpu: 198752.3952095808 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1391.81600479308,
            "unit": "ns/iter",
            "extra": "iterations: 505736\ncpu: 1391.540250249142 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2218.4331307902826,
            "unit": "ns/iter",
            "extra": "iterations: 316805\ncpu: 2218.348826565238 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 177.360070169784,
            "unit": "ns/iter",
            "extra": "iterations: 3919636\ncpu: 177.33432390150512 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3559.591534071446,
            "unit": "ns/iter",
            "extra": "iterations: 195206\ncpu: 3559.3987889716473 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 5612.353355052376,
            "unit": "ns/iter",
            "extra": "iterations: 124931\ncpu: 5610.809166659996 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725411863104,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 197198.51382022176,
            "unit": "ns/iter",
            "extra": "iterations: 3437\ncpu: 197143.72999709047 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1372.9598602504082,
            "unit": "ns/iter",
            "extra": "iterations: 509769\ncpu: 1372.8767343639965 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2195.244800270904,
            "unit": "ns/iter",
            "extra": "iterations: 319007\ncpu: 2194.904814000944 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 176.8779033365735,
            "unit": "ns/iter",
            "extra": "iterations: 3988127\ncpu: 176.8193440178811 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3547.864354520423,
            "unit": "ns/iter",
            "extra": "iterations: 198488\ncpu: 3547.393293297327 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 5500.483441169256,
            "unit": "ns/iter",
            "extra": "iterations: 127817\ncpu: 5498.908595883179 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725413566439,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 204005.98190838308,
            "unit": "ns/iter",
            "extra": "iterations: 3427\ncpu: 203997.66559673182 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1077.2871015403352,
            "unit": "ns/iter",
            "extra": "iterations: 664622\ncpu: 1075.22170496914 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2214.380603724898,
            "unit": "ns/iter",
            "extra": "iterations: 325877\ncpu: 2214.2556854273253 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 200.25438787214972,
            "unit": "ns/iter",
            "extra": "iterations: 3527621\ncpu: 200.16294267439756 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2918.3866986333087,
            "unit": "ns/iter",
            "extra": "iterations: 219812\ncpu: 2918.2028278710886 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1763.569912569632,
            "unit": "ns/iter",
            "extra": "iterations: 410384\ncpu: 1763.1510975086733 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725414453599,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 197938.8077680936,
            "unit": "ns/iter",
            "extra": "iterations: 3553\ncpu: 197937.23613847452 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1031.663534959065,
            "unit": "ns/iter",
            "extra": "iterations: 678650\ncpu: 1031.645177926767 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2071.71129178846,
            "unit": "ns/iter",
            "extra": "iterations: 336634\ncpu: 2071.1009583108066 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 185.83601616549302,
            "unit": "ns/iter",
            "extra": "iterations: 3780147\ncpu: 185.6983339536795 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2760.2367577069863,
            "unit": "ns/iter",
            "extra": "iterations: 252562\ncpu: 2760.181658365073 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1675.6525056186658,
            "unit": "ns/iter",
            "extra": "iterations: 418260\ncpu: 1675.4267680390176 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725415282963,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 205023.43269820942,
            "unit": "ns/iter",
            "extra": "iterations: 3254\ncpu: 204520.59004302396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1067.9552668413464,
            "unit": "ns/iter",
            "extra": "iterations: 658706\ncpu: 1067.7950405795605 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2119.9513798686885,
            "unit": "ns/iter",
            "extra": "iterations: 336445\ncpu: 2119.927477002185 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 188.94605343876495,
            "unit": "ns/iter",
            "extra": "iterations: 3690504\ncpu: 188.94194397296408 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2664.79965835141,
            "unit": "ns/iter",
            "extra": "iterations: 264014\ncpu: 2664.46855091018 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1672.3191646989599,
            "unit": "ns/iter",
            "extra": "iterations: 425188\ncpu: 1672.1497314129276 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725417029719,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 210014.454415111,
            "unit": "ns/iter",
            "extra": "iterations: 3488\ncpu: 204173.45183486232 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1116.9377336301375,
            "unit": "ns/iter",
            "extra": "iterations: 619837\ncpu: 1104.2241750653805 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2175.0600939026613,
            "unit": "ns/iter",
            "extra": "iterations: 323527\ncpu: 2129.188599405923 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 185.1224855220827,
            "unit": "ns/iter",
            "extra": "iterations: 3836184\ncpu: 182.22405390356664 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2725.0587454633587,
            "unit": "ns/iter",
            "extra": "iterations: 258454\ncpu: 2724.724709232593 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1714.1758793597546,
            "unit": "ns/iter",
            "extra": "iterations: 409218\ncpu: 1713.7271576519115 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725417186446,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 244617.0320000376,
            "unit": "ns/iter",
            "extra": "iterations: 2625\ncpu: 231684.57142857148 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1216.6391935763181,
            "unit": "ns/iter",
            "extra": "iterations: 618484\ncpu: 1213.3798125739709 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2197.2093117371105,
            "unit": "ns/iter",
            "extra": "iterations: 289119\ncpu: 2196.9500447912455 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 193.47900381669882,
            "unit": "ns/iter",
            "extra": "iterations: 3702411\ncpu: 193.4493496265002 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2616.480097062899,
            "unit": "ns/iter",
            "extra": "iterations: 262097\ncpu: 2616.2565767635638 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1826.6115270582493,
            "unit": "ns/iter",
            "extra": "iterations: 382127\ncpu: 1826.4111146294274 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725458317346,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 288467.23632480256,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 288140.17094017094 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1423.2860307197127,
            "unit": "ns/iter",
            "extra": "iterations: 412634\ncpu: 1419.9314646878347 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2807.424617191691,
            "unit": "ns/iter",
            "extra": "iterations: 224786\ncpu: 2569.359301735875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 329.58190971243766,
            "unit": "ns/iter",
            "extra": "iterations: 2379730\ncpu: 252.2403802112005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3618.064352041492,
            "unit": "ns/iter",
            "extra": "iterations: 200522\ncpu: 3537.9708959615446 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 2406.363587045232,
            "unit": "ns/iter",
            "extra": "iterations: 331794\ncpu: 2401.6106379259404 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725462722093,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1433.684010029343,
            "unit": "ns/iter",
            "extra": "iterations: 598250\ncpu: 1424.5800250731293 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3015.5913306596835,
            "unit": "ns/iter",
            "extra": "iterations: 264057\ncpu: 2688.510435246935 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 249.8260903440943,
            "unit": "ns/iter",
            "extra": "iterations: 2566942\ncpu: 243.70554535318692 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3407.20095061396,
            "unit": "ns/iter",
            "extra": "iterations: 236058\ncpu: 3400.660007286345 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 2231.933089747963,
            "unit": "ns/iter",
            "extra": "iterations: 290658\ncpu: 2225.48149371426 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 4145.662341443921,
            "unit": "ns/iter",
            "extra": "iterations: 164847\ncpu: 4125.382930838897 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 4255.236120050287,
            "unit": "ns/iter",
            "extra": "iterations: 209745\ncpu: 3671.20074376028 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 3785.4243776303356,
            "unit": "ns/iter",
            "extra": "iterations: 197230\ncpu: 3753.668306038631 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}