window.BENCHMARK_DATA = {
  "lastUpdate": 1724990650880,
  "repoUrl": "https://github.com/sourcemeta/jsontoolkit",
  "entries": {
    "Benchmark (linux/gcc)": [
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724901989005,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 18171.19151818153,
            "unit": "ns/iter",
            "extra": "iterations: 38388\ncpu: 18169.9052568511 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 10468.824594481895,
            "unit": "ns/iter",
            "extra": "iterations: 66828\ncpu: 10468.62668342611 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 404609.9070567866,
            "unit": "ns/iter",
            "extra": "iterations: 1743\ncpu: 404599.8009179575 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724902195957,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 13868.912501717046,
            "unit": "ns/iter",
            "extra": "iterations: 50961\ncpu: 13868.470811012337 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 9364.979988449444,
            "unit": "ns/iter",
            "extra": "iterations: 74457\ncpu: 9364.232496608778 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 394682.1432731509,
            "unit": "ns/iter",
            "extra": "iterations: 1717\ncpu: 394674.09202096675 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724903131429,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 13905.290039951942,
            "unit": "ns/iter",
            "extra": "iterations: 50562\ncpu: 13904.73100352043 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 9373.056541969752,
            "unit": "ns/iter",
            "extra": "iterations: 74794\ncpu: 9372.872503141967 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 393423.6467236984,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 393421.71737891744 ns\nthreads: 1"
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
        "date": 1724943153424,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 13888.948631239684,
            "unit": "ns/iter",
            "extra": "iterations: 49680\ncpu: 13888.490921900164 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 9226.319807140208,
            "unit": "ns/iter",
            "extra": "iterations: 74251\ncpu: 9225.966963407904 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 395973.888574656,
            "unit": "ns/iter",
            "extra": "iterations: 1768\ncpu: 395967.8269230771 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724956806770,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 13981.057911312384,
            "unit": "ns/iter",
            "extra": "iterations: 50491\ncpu: 13980.867164445152 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 9595.616466938409,
            "unit": "ns/iter",
            "extra": "iterations: 72849\ncpu: 9595.134977830858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 399602.3977143262,
            "unit": "ns/iter",
            "extra": "iterations: 1750\ncpu: 399592.0828571428 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724957446407,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 12078.927395313724,
            "unit": "ns/iter",
            "extra": "iterations: 57696\ncpu: 12078.688349278982 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3453.454532331799,
            "unit": "ns/iter",
            "extra": "iterations: 200901\ncpu: 3453.2099641116756 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 391350.33632287395,
            "unit": "ns/iter",
            "extra": "iterations: 1784\ncpu: 391328.9125560539 ns\nthreads: 1"
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
        "date": 1724958747620,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 12067.841694072053,
            "unit": "ns/iter",
            "extra": "iterations: 57471\ncpu: 12067.681978737099 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3466.327724999479,
            "unit": "ns/iter",
            "extra": "iterations: 202734\ncpu: 3466.24579991516 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 398730.9828962311,
            "unit": "ns/iter",
            "extra": "iterations: 1754\ncpu: 398732.98688711517 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724959548760,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 12213.991350690265,
            "unit": "ns/iter",
            "extra": "iterations: 57230\ncpu: 12213.195212301238 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3571.8471784479707,
            "unit": "ns/iter",
            "extra": "iterations: 196399\ncpu: 3571.7203753583262 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 400579.17636785243,
            "unit": "ns/iter",
            "extra": "iterations: 1718\ncpu: 400552.34807916183 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724959568728,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 12236.337205843976,
            "unit": "ns/iter",
            "extra": "iterations: 57155\ncpu: 12236.383448517188 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3456.7917936590175,
            "unit": "ns/iter",
            "extra": "iterations: 202112\ncpu: 3456.7817051931597 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 393223.5569335032,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 393212.2638105976 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724964730831,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 11794.648067621009,
            "unit": "ns/iter",
            "extra": "iterations: 57261\ncpu: 11794.53114685388 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3276.7750790078,
            "unit": "ns/iter",
            "extra": "iterations: 217383\ncpu: 3276.7445982436548 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 379536.25123968866,
            "unit": "ns/iter",
            "extra": "iterations: 1815\ncpu: 379529.06280991726 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724966643637,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 12616.912451742533,
            "unit": "ns/iter",
            "extra": "iterations: 56209\ncpu: 12616.581330391928 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3432.5377427353815,
            "unit": "ns/iter",
            "extra": "iterations: 206861\ncpu: 3432.486727802728 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 15278.06068745553,
            "unit": "ns/iter",
            "extra": "iterations: 45792\ncpu: 15277.805511879804 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 397792.2929010526,
            "unit": "ns/iter",
            "extra": "iterations: 1789\ncpu: 397782.3549468976 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724967322040,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 12262.226449983362,
            "unit": "ns/iter",
            "extra": "iterations: 56242\ncpu: 12262.160058319407 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3428.1304547270774,
            "unit": "ns/iter",
            "extra": "iterations: 202737\ncpu: 3428.138904097427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12655.551537957925,
            "unit": "ns/iter",
            "extra": "iterations: 55008\ncpu: 12655.580061082022 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 408999.7354466903,
            "unit": "ns/iter",
            "extra": "iterations: 1735\ncpu: 408997.19365994225 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724975898140,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 12452.465695599243,
            "unit": "ns/iter",
            "extra": "iterations: 55197\ncpu: 12452.144337554577 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3590.601396623549,
            "unit": "ns/iter",
            "extra": "iterations: 194469\ncpu: 3590.462593009681 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 1510.0273854870845,
            "unit": "ns/iter",
            "extra": "iterations: 463092\ncpu: 1510.0025286552138 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11605.062829664515,
            "unit": "ns/iter",
            "extra": "iterations: 60099\ncpu: 11604.899016622574 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 398150.78221208684,
            "unit": "ns/iter",
            "extra": "iterations: 1754\ncpu: 398144.0342075256 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724985789000,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7541.2834060990945,
            "unit": "ns/iter",
            "extra": "iterations: 91847\ncpu: 7541.131827931234 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3331.803742150356,
            "unit": "ns/iter",
            "extra": "iterations: 209719\ncpu: 3331.7333002732234 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 817.1096203183968,
            "unit": "ns/iter",
            "extra": "iterations: 850107\ncpu: 817.0774796584428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11700.726641805006,
            "unit": "ns/iter",
            "extra": "iterations: 59797\ncpu: 11700.415806813053 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 387130.370680043,
            "unit": "ns/iter",
            "extra": "iterations: 1794\ncpu: 387117.435897436 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724988508081,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7582.484738293526,
            "unit": "ns/iter",
            "extra": "iterations: 92126\ncpu: 7581.913205826802 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3425.6788503684247,
            "unit": "ns/iter",
            "extra": "iterations: 203961\ncpu: 3425.593922367512 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 813.00854736591,
            "unit": "ns/iter",
            "extra": "iterations: 861084\ncpu: 812.9500211361492 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11578.25328221264,
            "unit": "ns/iter",
            "extra": "iterations: 60249\ncpu: 11577.579627877642 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 390860.5811110988,
            "unit": "ns/iter",
            "extra": "iterations: 1800\ncpu: 390831.3561111113 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724990650567,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7741.584719364136,
            "unit": "ns/iter",
            "extra": "iterations: 90847\ncpu: 7741.393386683106 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3464.6245915317745,
            "unit": "ns/iter",
            "extra": "iterations: 201362\ncpu: 3464.5880255460315 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 838.4495625318308,
            "unit": "ns/iter",
            "extra": "iterations: 829889\ncpu: 838.4336194358519 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11802.335646388812,
            "unit": "ns/iter",
            "extra": "iterations: 59229\ncpu: 11802.324621384802 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 392850.36231072055,
            "unit": "ns/iter",
            "extra": "iterations: 1783\ncpu: 392840.4542905215 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}