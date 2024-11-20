window.BENCHMARK_DATA = {
  "lastUpdate": 1732132490991,
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
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725029809889,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7623.813889040246,
            "unit": "ns/iter",
            "extra": "iterations: 91655\ncpu: 7623.459451202878 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3405.260828374937,
            "unit": "ns/iter",
            "extra": "iterations: 206887\ncpu: 3405.1499175878607 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 831.9810580668367,
            "unit": "ns/iter",
            "extra": "iterations: 842839\ncpu: 831.9762789809206 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11659.404912797265,
            "unit": "ns/iter",
            "extra": "iterations: 59803\ncpu: 11659.17708141731 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 391728.2035894752,
            "unit": "ns/iter",
            "extra": "iterations: 1783\ncpu: 391721.9966348853 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725032837488,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7863.040671701687,
            "unit": "ns/iter",
            "extra": "iterations: 88194\ncpu: 7862.530172120552 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3398.472279420314,
            "unit": "ns/iter",
            "extra": "iterations: 205425\ncpu: 3398.2194280150907 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 826.9953075141991,
            "unit": "ns/iter",
            "extra": "iterations: 847099\ncpu: 826.9621968624681 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11631.376380133192,
            "unit": "ns/iter",
            "extra": "iterations: 59958\ncpu: 11630.571299909934 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 388490.46759001806,
            "unit": "ns/iter",
            "extra": "iterations: 1805\ncpu: 388446.23601108027 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725043384144,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7566.872675558014,
            "unit": "ns/iter",
            "extra": "iterations: 92818\ncpu: 7566.458499428989 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3496.1221052209635,
            "unit": "ns/iter",
            "extra": "iterations: 200663\ncpu: 3495.913426989529 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 818.3198488409537,
            "unit": "ns/iter",
            "extra": "iterations: 840175\ncpu: 818.2614086351055 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11625.325174421434,
            "unit": "ns/iter",
            "extra": "iterations: 60629\ncpu: 11624.446156129905 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 387135.16989484616,
            "unit": "ns/iter",
            "extra": "iterations: 1807\ncpu: 387101.573879358 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725044619208,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7454.2481722919565,
            "unit": "ns/iter",
            "extra": "iterations: 93423\ncpu: 7453.98419018871 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3350.3667818248646,
            "unit": "ns/iter",
            "extra": "iterations: 208988\ncpu: 3350.315453518862 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 813.2146235328283,
            "unit": "ns/iter",
            "extra": "iterations: 870501\ncpu: 813.1996344633721 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11263.91771391939,
            "unit": "ns/iter",
            "extra": "iterations: 62465\ncpu: 11263.519042663886 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 386372.5500276437,
            "unit": "ns/iter",
            "extra": "iterations: 1809\ncpu: 386365.4184632391 ns\nthreads: 1"
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
        "date": 1725045057798,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7508.108153482319,
            "unit": "ns/iter",
            "extra": "iterations: 94708\ncpu: 7507.799393926595 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3438.726400311292,
            "unit": "ns/iter",
            "extra": "iterations: 205490\ncpu: 3438.5590393693124 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 805.5068196713823,
            "unit": "ns/iter",
            "extra": "iterations: 874309\ncpu: 805.4470581910973 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11284.850208399752,
            "unit": "ns/iter",
            "extra": "iterations: 62380\ncpu: 11284.843796088493 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 384466.72807019035,
            "unit": "ns/iter",
            "extra": "iterations: 1824\ncpu: 384466.7648026315 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725046526966,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 7684.8167530219835,
            "unit": "ns/iter",
            "extra": "iterations: 86850\ncpu: 7684.676649395511 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3448.3168521620123,
            "unit": "ns/iter",
            "extra": "iterations: 203060\ncpu: 3448.2274204668583 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 821.8162443909573,
            "unit": "ns/iter",
            "extra": "iterations: 837052\ncpu: 821.802343223599 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11951.22582302829,
            "unit": "ns/iter",
            "extra": "iterations: 58382\ncpu: 11950.913774793602 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 389227.54550500284,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 389213.15926748014 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725062573880,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6257.373380736289,
            "unit": "ns/iter",
            "extra": "iterations: 114481\ncpu: 6256.885360889578 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3477.9908922972154,
            "unit": "ns/iter",
            "extra": "iterations: 201917\ncpu: 3477.7884625861134 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 822.1333332551211,
            "unit": "ns/iter",
            "extra": "iterations: 852908\ncpu: 822.0948461029792 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12053.86300426822,
            "unit": "ns/iter",
            "extra": "iterations: 58104\ncpu: 12052.911193721598 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 385088.9200220885,
            "unit": "ns/iter",
            "extra": "iterations: 1813\ncpu: 385054.06343077787 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725133311488,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6264.41489605974,
            "unit": "ns/iter",
            "extra": "iterations: 113238\ncpu: 6264.3020717427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3497.9399046706426,
            "unit": "ns/iter",
            "extra": "iterations: 201197\ncpu: 3497.7986699602875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 807.3775417655877,
            "unit": "ns/iter",
            "extra": "iterations: 858901\ncpu: 807.3650083071278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12006.24987120015,
            "unit": "ns/iter",
            "extra": "iterations: 58230\ncpu: 12005.87073673364 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 389587.60222221323,
            "unit": "ns/iter",
            "extra": "iterations: 1800\ncpu: 389575.7361111111 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725134322499,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6249.846650315542,
            "unit": "ns/iter",
            "extra": "iterations: 111712\ncpu: 6249.5967845889445 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3513.4596351121663,
            "unit": "ns/iter",
            "extra": "iterations: 201103\ncpu: 3513.238280880943 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 824.4736643282225,
            "unit": "ns/iter",
            "extra": "iterations: 839147\ncpu: 824.4182818981654 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12026.330718667257,
            "unit": "ns/iter",
            "extra": "iterations: 59026\ncpu: 12025.697370650216 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 390307.01387345174,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 390276.6664816868 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725135853047,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6272.835288828571,
            "unit": "ns/iter",
            "extra": "iterations: 113441\ncpu: 6272.6978517467205 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3495.958208820784,
            "unit": "ns/iter",
            "extra": "iterations: 200114\ncpu: 3495.8854103161184 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 831.8309535988003,
            "unit": "ns/iter",
            "extra": "iterations: 840710\ncpu: 831.7991721283199 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12333.739910236303,
            "unit": "ns/iter",
            "extra": "iterations: 56815\ncpu: 12333.367737393284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 387044.3375760925,
            "unit": "ns/iter",
            "extra": "iterations: 1807\ncpu: 387025.72385168774 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725138985016,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6502.3900247633965,
            "unit": "ns/iter",
            "extra": "iterations: 108629\ncpu: 6502.3772473280615 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3588.421989371823,
            "unit": "ns/iter",
            "extra": "iterations: 193448\ncpu: 3588.4112578057156 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 856.364016440521,
            "unit": "ns/iter",
            "extra": "iterations: 820169\ncpu: 856.3539185216705 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11737.717529793783,
            "unit": "ns/iter",
            "extra": "iterations: 59493\ncpu: 11737.615669070316 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 385491.1359867286,
            "unit": "ns/iter",
            "extra": "iterations: 1809\ncpu: 385483.2974018795 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725146681722,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6213.351357145991,
            "unit": "ns/iter",
            "extra": "iterations: 111926\ncpu: 6213.078641245107 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3447.2694749391403,
            "unit": "ns/iter",
            "extra": "iterations: 203043\ncpu: 3447.2730012854427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 787.4701264124765,
            "unit": "ns/iter",
            "extra": "iterations: 881163\ncpu: 787.4289705763858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12052.639712518838,
            "unit": "ns/iter",
            "extra": "iterations: 57604\ncpu: 12052.23215401709 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 385392.2955421137,
            "unit": "ns/iter",
            "extra": "iterations: 1817\ncpu: 385364.3203082003 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725291488627,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6286.227133199371,
            "unit": "ns/iter",
            "extra": "iterations: 112718\ncpu: 6286.1676307244625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3524.967281380678,
            "unit": "ns/iter",
            "extra": "iterations: 200039\ncpu: 3524.808547333271 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 824.7075550410616,
            "unit": "ns/iter",
            "extra": "iterations: 872530\ncpu: 824.6928071241102 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12167.41853658553,
            "unit": "ns/iter",
            "extra": "iterations: 57400\ncpu: 12166.821480836237 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 392777.14555100776,
            "unit": "ns/iter",
            "extra": "iterations: 1697\ncpu: 392761.1266941658 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725293508818,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6352.99369030928,
            "unit": "ns/iter",
            "extra": "iterations: 110465\ncpu: 6352.825057710587 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3520.751900263247,
            "unit": "ns/iter",
            "extra": "iterations: 200367\ncpu: 3520.6200072866304 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 836.5853862108236,
            "unit": "ns/iter",
            "extra": "iterations: 835088\ncpu: 836.5416039986206 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12078.114781887924,
            "unit": "ns/iter",
            "extra": "iterations: 57814\ncpu: 12077.402705227114 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 398978.03064698057,
            "unit": "ns/iter",
            "extra": "iterations: 1762\ncpu: 398949.3280363223 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725294890798,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6234.616710945959,
            "unit": "ns/iter",
            "extra": "iterations: 113674\ncpu: 6234.48377817267 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3439.11190899857,
            "unit": "ns/iter",
            "extra": "iterations: 204568\ncpu: 3439.072284032692 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 812.3290173518326,
            "unit": "ns/iter",
            "extra": "iterations: 861295\ncpu: 812.3268032439528 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12319.885257706697,
            "unit": "ns/iter",
            "extra": "iterations: 58322\ncpu: 12319.593378142044 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 390585.56109863875,
            "unit": "ns/iter",
            "extra": "iterations: 1784\ncpu: 390584.7774663676 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725295855179,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6402.16862752198,
            "unit": "ns/iter",
            "extra": "iterations: 110326\ncpu: 6401.714944799956 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3716.4865152253938,
            "unit": "ns/iter",
            "extra": "iterations: 189028\ncpu: 3716.2629557525856 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 832.0222331763067,
            "unit": "ns/iter",
            "extra": "iterations: 839871\ncpu: 832.0141533640284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12279.369037223685,
            "unit": "ns/iter",
            "extra": "iterations: 56119\ncpu: 12279.090860492883 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 381331.69960252,
            "unit": "ns/iter",
            "extra": "iterations: 1761\ncpu: 381321.06814310065 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725296881829,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 6341.194235116055,
            "unit": "ns/iter",
            "extra": "iterations: 111468\ncpu: 6340.746958768435 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3438.082896370951,
            "unit": "ns/iter",
            "extra": "iterations: 202916\ncpu: 3437.9489986004073 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 837.16261953491,
            "unit": "ns/iter",
            "extra": "iterations: 844837\ncpu: 837.1339607521926 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12610.197019574596,
            "unit": "ns/iter",
            "extra": "iterations: 56502\ncpu: 12609.10272202753 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 394509.41847526695,
            "unit": "ns/iter",
            "extra": "iterations: 1797\ncpu: 394001.6805787425 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725301463213,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2507.087579794158,
            "unit": "ns/iter",
            "extra": "iterations: 280567\ncpu: 2507.0201663060875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2869.7281924274444,
            "unit": "ns/iter",
            "extra": "iterations: 242668\ncpu: 2869.5420409777958 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 212.48558360548395,
            "unit": "ns/iter",
            "extra": "iterations: 3314525\ncpu: 212.47175507802785 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12162.194653329596,
            "unit": "ns/iter",
            "extra": "iterations: 57980\ncpu: 12161.822214556743 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 383265.690450039,
            "unit": "ns/iter",
            "extra": "iterations: 1822\ncpu: 383248.54774972546 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725302164499,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2419.0228793540577,
            "unit": "ns/iter",
            "extra": "iterations: 278111\ncpu: 2418.529986228521 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2776.165488050717,
            "unit": "ns/iter",
            "extra": "iterations: 251142\ncpu: 2775.936948021438 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 208.623691220944,
            "unit": "ns/iter",
            "extra": "iterations: 3340900\ncpu: 208.6139546230058 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11948.800870826535,
            "unit": "ns/iter",
            "extra": "iterations: 58565\ncpu: 11948.163015452916 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 390780.0998914541,
            "unit": "ns/iter",
            "extra": "iterations: 1842\ncpu: 390759.6080347445 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725303240039,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2412.2112004630835,
            "unit": "ns/iter",
            "extra": "iterations: 290113\ncpu: 2412.0031746250597 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2900.1433596930965,
            "unit": "ns/iter",
            "extra": "iterations: 241909\ncpu: 2900.030131165026 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 211.6466274718531,
            "unit": "ns/iter",
            "extra": "iterations: 3333434\ncpu: 211.63375786051273 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11904.853023097348,
            "unit": "ns/iter",
            "extra": "iterations: 58880\ncpu: 11904.8488620924 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 394335.41160063323,
            "unit": "ns/iter",
            "extra": "iterations: 1793\ncpu: 394302.21193530434 ns\nthreads: 1"
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
        "date": 1725304129177,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2386.8486960157647,
            "unit": "ns/iter",
            "extra": "iterations: 296476\ncpu: 2386.770814501005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2940.1334751718327,
            "unit": "ns/iter",
            "extra": "iterations: 238299\ncpu: 2939.9917162892 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 213.41658849001644,
            "unit": "ns/iter",
            "extra": "iterations: 3320471\ncpu: 213.40825232323968 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11833.159101711126,
            "unit": "ns/iter",
            "extra": "iterations: 58912\ncpu: 11832.64959600761 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 389120.9905503182,
            "unit": "ns/iter",
            "extra": "iterations: 1799\ncpu: 389097.6820455809 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725305524430,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2401.318615076374,
            "unit": "ns/iter",
            "extra": "iterations: 287987\ncpu: 2401.1838207974674 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2799.148134116365,
            "unit": "ns/iter",
            "extra": "iterations: 248113\ncpu: 2799.0114383365653 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 209.534344393601,
            "unit": "ns/iter",
            "extra": "iterations: 3388588\ncpu: 209.52639152354905 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11470.027772257554,
            "unit": "ns/iter",
            "extra": "iterations: 60384\ncpu: 11469.68554583996 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 382312.37766831805,
            "unit": "ns/iter",
            "extra": "iterations: 1827\ncpu: 382288.49863163655 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725308784225,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2375.34838911163,
            "unit": "ns/iter",
            "extra": "iterations: 307346\ncpu: 2375.286276704431 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2747.1143802741303,
            "unit": "ns/iter",
            "extra": "iterations: 255621\ncpu: 2747.0197988428195 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 218.28921658633715,
            "unit": "ns/iter",
            "extra": "iterations: 3202344\ncpu: 218.28144946326822 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12041.355921630693,
            "unit": "ns/iter",
            "extra": "iterations: 59308\ncpu: 12041.103409320838 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 387116.83573010314,
            "unit": "ns/iter",
            "extra": "iterations: 1808\ncpu: 387115.44469026575 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725309559551,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2230.362379690139,
            "unit": "ns/iter",
            "extra": "iterations: 306292\ncpu: 2230.376128008567 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2732.7673614759915,
            "unit": "ns/iter",
            "extra": "iterations: 256905\ncpu: 2732.763554621359 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 197.63576087719105,
            "unit": "ns/iter",
            "extra": "iterations: 3570550\ncpu: 197.63348307683694 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11863.211387499356,
            "unit": "ns/iter",
            "extra": "iterations: 60382\ncpu: 11862.587741379886 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 385126.71698111267,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 385111.43451720325 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725309965573,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2288.876103251499,
            "unit": "ns/iter",
            "extra": "iterations: 306707\ncpu: 2288.828197595751 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2818.8780348682776,
            "unit": "ns/iter",
            "extra": "iterations: 261214\ncpu: 2818.798092751536 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 202.43738145636098,
            "unit": "ns/iter",
            "extra": "iterations: 3434917\ncpu: 202.42807468128046 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12234.386578598629,
            "unit": "ns/iter",
            "extra": "iterations: 56775\ncpu: 12233.980713342135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 386054.5487264273,
            "unit": "ns/iter",
            "extra": "iterations: 1806\ncpu: 386035.8576965671 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725311153930,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2287.981486608293,
            "unit": "ns/iter",
            "extra": "iterations: 310640\ncpu: 2287.862229590523 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3157.83289638178,
            "unit": "ns/iter",
            "extra": "iterations: 221611\ncpu: 3157.798371921972 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 210.04036388209,
            "unit": "ns/iter",
            "extra": "iterations: 3381315\ncpu: 210.02872255320796 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12016.901473931044,
            "unit": "ns/iter",
            "extra": "iterations: 58076\ncpu: 12015.969247193336 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 391854.81032548874,
            "unit": "ns/iter",
            "extra": "iterations: 1782\ncpu: 391824.3198653199 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725312454277,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2153.7857272657093,
            "unit": "ns/iter",
            "extra": "iterations: 324675\ncpu: 2153.633787633788 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2876.647774572989,
            "unit": "ns/iter",
            "extra": "iterations: 244088\ncpu: 2876.457298187539 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 203.64644448456514,
            "unit": "ns/iter",
            "extra": "iterations: 3427309\ncpu: 203.63289128584555 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11705.211405453107,
            "unit": "ns/iter",
            "extra": "iterations: 59568\ncpu: 11704.29819701854 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 386147.24035282375,
            "unit": "ns/iter",
            "extra": "iterations: 1814\ncpu: 386117.8522601984 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725313154276,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2220.5265662275265,
            "unit": "ns/iter",
            "extra": "iterations: 317339\ncpu: 2220.5145349295235 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2808.450689032594,
            "unit": "ns/iter",
            "extra": "iterations: 243820\ncpu: 2808.3482733163814 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 204.48548949175242,
            "unit": "ns/iter",
            "extra": "iterations: 3473276\ncpu: 204.47936415073264 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11860.530190857715,
            "unit": "ns/iter",
            "extra": "iterations: 58892\ncpu: 11860.101134279694 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 395414.15346258995,
            "unit": "ns/iter",
            "extra": "iterations: 1805\ncpu: 395408.14681440423 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725315188269,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2285.514874075199,
            "unit": "ns/iter",
            "extra": "iterations: 308120\ncpu: 2285.4341814877325 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2846.202824670392,
            "unit": "ns/iter",
            "extra": "iterations: 246188\ncpu: 2846.0812793474915 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 212.87328586916013,
            "unit": "ns/iter",
            "extra": "iterations: 3162244\ncpu: 212.86384795101193 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11551.45066766161,
            "unit": "ns/iter",
            "extra": "iterations: 58937\ncpu: 11550.995639411582 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 386650.7541436813,
            "unit": "ns/iter",
            "extra": "iterations: 1810\ncpu: 386640.3745856354 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725316190145,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2262.645817470263,
            "unit": "ns/iter",
            "extra": "iterations: 304696\ncpu: 2262.5279130674508 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2790.6076460504382,
            "unit": "ns/iter",
            "extra": "iterations: 253098\ncpu: 2790.5486649440136 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 221.70541130855193,
            "unit": "ns/iter",
            "extra": "iterations: 3206267\ncpu: 221.69615630887873 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12088.773145912433,
            "unit": "ns/iter",
            "extra": "iterations: 57980\ncpu: 12088.492773370126 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 381287.5500544322,
            "unit": "ns/iter",
            "extra": "iterations: 1838\ncpu: 381264.81719260104 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725322657465,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2230.3699313517304,
            "unit": "ns/iter",
            "extra": "iterations: 323533\ncpu: 2230.321562251764 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2803.165440954927,
            "unit": "ns/iter",
            "extra": "iterations: 248971\ncpu: 2803.1386868350137 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 202.44954390979092,
            "unit": "ns/iter",
            "extra": "iterations: 3459513\ncpu: 202.44607521347666 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11678.648198799068,
            "unit": "ns/iter",
            "extra": "iterations: 59960\ncpu: 11678.422715143424 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 382126.2940854064,
            "unit": "ns/iter",
            "extra": "iterations: 1826\ncpu: 382114.1757940853 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725374900663,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2171.9100491460204,
            "unit": "ns/iter",
            "extra": "iterations: 321898\ncpu: 2171.912711480034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2805.1818978184283,
            "unit": "ns/iter",
            "extra": "iterations: 251141\ncpu: 2805.185859736164 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 201.40744556819175,
            "unit": "ns/iter",
            "extra": "iterations: 3467781\ncpu: 201.40640397995148 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11638.409516525004,
            "unit": "ns/iter",
            "extra": "iterations: 60127\ncpu: 11637.614000365884 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 386650.2634199931,
            "unit": "ns/iter",
            "extra": "iterations: 1807\ncpu: 386634.5384615387 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725377757798,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2320.246035980491,
            "unit": "ns/iter",
            "extra": "iterations: 324229\ncpu: 2320.124766754362 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2783.492350277145,
            "unit": "ns/iter",
            "extra": "iterations: 252166\ncpu: 2783.366183387134 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 207.11244816836285,
            "unit": "ns/iter",
            "extra": "iterations: 3393439\ncpu: 207.0994893381022 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11699.700357691534,
            "unit": "ns/iter",
            "extra": "iterations: 58710\ncpu: 11699.651251916193 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 392543.07058821345,
            "unit": "ns/iter",
            "extra": "iterations: 1785\ncpu: 392518.5064425772 ns\nthreads: 1"
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
        "date": 1725380109598,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2224.9177458610643,
            "unit": "ns/iter",
            "extra": "iterations: 317212\ncpu: 2224.7879872135986 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2820.4126156072653,
            "unit": "ns/iter",
            "extra": "iterations: 251498\ncpu: 2820.182597873542 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 206.07984546587215,
            "unit": "ns/iter",
            "extra": "iterations: 3408697\ncpu: 206.0705468981256 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11902.130196412696,
            "unit": "ns/iter",
            "extra": "iterations: 58550\ncpu: 11901.560871050384 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 385891.39745007374,
            "unit": "ns/iter",
            "extra": "iterations: 1804\ncpu: 385858.0443458977 ns\nthreads: 1"
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
        "date": 1725381339660,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2226.8062970396677,
            "unit": "ns/iter",
            "extra": "iterations: 317419\ncpu: 2226.696379233757 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2805.082777648332,
            "unit": "ns/iter",
            "extra": "iterations: 248642\ncpu: 2805.000108589861 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 207.84148177173307,
            "unit": "ns/iter",
            "extra": "iterations: 3358844\ncpu: 207.83721780469716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11765.342438925622,
            "unit": "ns/iter",
            "extra": "iterations: 59231\ncpu: 11764.897722476406 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 383174.0706849291,
            "unit": "ns/iter",
            "extra": "iterations: 1825\ncpu: 383155.299178082 ns\nthreads: 1"
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
        "date": 1725383910415,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2164.397832535399,
            "unit": "ns/iter",
            "extra": "iterations: 323973\ncpu: 2164.2656795473704 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2856.4879680661425,
            "unit": "ns/iter",
            "extra": "iterations: 246760\ncpu: 2856.369561517264 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 206.2334725832497,
            "unit": "ns/iter",
            "extra": "iterations: 3368524\ncpu: 206.21884748334892 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11673.147415042102,
            "unit": "ns/iter",
            "extra": "iterations: 58705\ncpu: 11672.515646026743 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 387001.73329206085,
            "unit": "ns/iter",
            "extra": "iterations: 1616\ncpu: 386977.022277228 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725385806116,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2230.0485695298953,
            "unit": "ns/iter",
            "extra": "iterations: 312974\ncpu: 2229.9087400231333 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2765.82961449989,
            "unit": "ns/iter",
            "extra": "iterations: 253126\ncpu: 2765.6814827398225 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 204.7048064879807,
            "unit": "ns/iter",
            "extra": "iterations: 3418754\ncpu: 204.69312767166056 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11656.194355495545,
            "unit": "ns/iter",
            "extra": "iterations: 60271\ncpu: 11656.021735162845 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 386197.9585406193,
            "unit": "ns/iter",
            "extra": "iterations: 1809\ncpu: 386179.580983969 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725386507184,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2166.0648448228467,
            "unit": "ns/iter",
            "extra": "iterations: 323372\ncpu: 2165.9681048451944 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2806.370591780386,
            "unit": "ns/iter",
            "extra": "iterations: 248910\ncpu: 2806.264107508739 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 203.02164481183607,
            "unit": "ns/iter",
            "extra": "iterations: 3528051\ncpu: 203.00611980949256 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12001.4701819112,
            "unit": "ns/iter",
            "extra": "iterations: 59645\ncpu: 12000.739894375045 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 381111.8481228838,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 381080.4994311716 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725389388825,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2252.9896420478467,
            "unit": "ns/iter",
            "extra": "iterations: 310293\ncpu: 2252.8669193310834 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2824.1675833320114,
            "unit": "ns/iter",
            "extra": "iterations: 249273\ncpu: 2824.079242437007 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 209.6599097916097,
            "unit": "ns/iter",
            "extra": "iterations: 3331175\ncpu: 209.65363002544143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11822.679981090821,
            "unit": "ns/iter",
            "extra": "iterations: 59234\ncpu: 11822.388864503495 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 384831.39187703,
            "unit": "ns/iter",
            "extra": "iterations: 1822\ncpu: 384810.05488474236 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725389396858,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2188.7255865331167,
            "unit": "ns/iter",
            "extra": "iterations: 321380\ncpu: 2188.662937955069 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2800.533099623702,
            "unit": "ns/iter",
            "extra": "iterations: 252450\ncpu: 2800.407122202417 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 207.760227360332,
            "unit": "ns/iter",
            "extra": "iterations: 3424344\ncpu: 207.7519451900861 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11686.2750497404,
            "unit": "ns/iter",
            "extra": "iterations: 59811\ncpu: 11685.839979268023 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 385798.21287133,
            "unit": "ns/iter",
            "extra": "iterations: 1818\ncpu: 385779.82233223325 ns\nthreads: 1"
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
        "date": 1725390606830,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2184.1219544590645,
            "unit": "ns/iter",
            "extra": "iterations: 323752\ncpu: 2183.94401270108 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2801.0487942941168,
            "unit": "ns/iter",
            "extra": "iterations: 247324\ncpu: 2800.81184599958 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 203.6785857649855,
            "unit": "ns/iter",
            "extra": "iterations: 3460217\ncpu: 203.6752689209954 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11748.46871565862,
            "unit": "ns/iter",
            "extra": "iterations: 59151\ncpu: 11747.270037700122 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 382836.5202628752,
            "unit": "ns/iter",
            "extra": "iterations: 1826\ncpu: 382808.30175246455 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725390925745,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2115.968396845005,
            "unit": "ns/iter",
            "extra": "iterations: 333954\ncpu: 2115.910397839223 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2792.128114387155,
            "unit": "ns/iter",
            "extra": "iterations: 252056\ncpu: 2792.0681594566286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 211.9849073958154,
            "unit": "ns/iter",
            "extra": "iterations: 3335541\ncpu: 211.97631808453255 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10506.328431225968,
            "unit": "ns/iter",
            "extra": "iterations: 66638\ncpu: 10506.122122512672 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 386206.1449834929,
            "unit": "ns/iter",
            "extra": "iterations: 1814\ncpu: 386195.4299889749 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725392205762,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2059.487143433589,
            "unit": "ns/iter",
            "extra": "iterations: 342082\ncpu: 2059.3840570389552 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2711.522957570305,
            "unit": "ns/iter",
            "extra": "iterations: 259348\ncpu: 2711.3212093403463 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 207.76569461600113,
            "unit": "ns/iter",
            "extra": "iterations: 3348728\ncpu: 207.7602032771846 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10418.105458983198,
            "unit": "ns/iter",
            "extra": "iterations: 67998\ncpu: 10417.79037618753 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 384746.10263446264,
            "unit": "ns/iter",
            "extra": "iterations: 1822\ncpu: 384739.7074643251 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725392943351,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2066.5782327618194,
            "unit": "ns/iter",
            "extra": "iterations: 337985\ncpu: 2066.5556370844865 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2590.747093377224,
            "unit": "ns/iter",
            "extra": "iterations: 270847\ncpu: 2590.6951193847467 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 202.9103674626319,
            "unit": "ns/iter",
            "extra": "iterations: 3365240\ncpu: 202.9104242193722 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10424.010483487491,
            "unit": "ns/iter",
            "extra": "iterations: 67344\ncpu: 10423.902515443098 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 386031.1175496662,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 386030.8035320091 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725397671568,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2140.613481156053,
            "unit": "ns/iter",
            "extra": "iterations: 316145\ncpu: 2140.4632020117347 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2858.1481728359418,
            "unit": "ns/iter",
            "extra": "iterations: 246037\ncpu: 2857.9593435133743 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 224.69236321010527,
            "unit": "ns/iter",
            "extra": "iterations: 3023286\ncpu: 224.67646990724657 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10905.875650654982,
            "unit": "ns/iter",
            "extra": "iterations: 64166\ncpu: 10905.216064582492 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 385342.3283664881,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 385279.29801324476 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725397969199,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2087.3639996193997,
            "unit": "ns/iter",
            "extra": "iterations: 325841\ncpu: 2087.2698217842444 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2859.353241393758,
            "unit": "ns/iter",
            "extra": "iterations: 246684\ncpu: 2859.2433112808276 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 216.26970148409666,
            "unit": "ns/iter",
            "extra": "iterations: 3226026\ncpu: 216.25720220481787 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10900.37113434284,
            "unit": "ns/iter",
            "extra": "iterations: 64090\ncpu: 10899.825230145101 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9030.983665760657,
            "unit": "ns/iter",
            "extra": "iterations: 78363\ncpu: 9030.580631165225 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 387437.775938184,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 387418.9254966888 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725404625072,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2133.353085342925,
            "unit": "ns/iter",
            "extra": "iterations: 325604\ncpu: 2133.182976867606 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2854.4597776164687,
            "unit": "ns/iter",
            "extra": "iterations: 246691\ncpu: 2854.3727335006142 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 220.10896465478882,
            "unit": "ns/iter",
            "extra": "iterations: 3220916\ncpu: 220.09666846325712 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10885.629297294758,
            "unit": "ns/iter",
            "extra": "iterations: 64081\ncpu: 10885.360933818143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9133.516872674156,
            "unit": "ns/iter",
            "extra": "iterations: 77344\ncpu: 9132.94803733968 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 390391.87192395807,
            "unit": "ns/iter",
            "extra": "iterations: 1788\ncpu: 390376.9200223715 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725407440248,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2075.4413188170993,
            "unit": "ns/iter",
            "extra": "iterations: 333693\ncpu: 2075.307606093026 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2742.5878921062604,
            "unit": "ns/iter",
            "extra": "iterations: 257105\ncpu: 2742.4819976274293 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 219.63989937605194,
            "unit": "ns/iter",
            "extra": "iterations: 3243760\ncpu: 219.62687344316473 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10253.467848353275,
            "unit": "ns/iter",
            "extra": "iterations: 68659\ncpu: 10252.538181447442 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 8583.332834466608,
            "unit": "ns/iter",
            "extra": "iterations: 81518\ncpu: 8582.775742780741 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 383371.169696949,
            "unit": "ns/iter",
            "extra": "iterations: 1815\ncpu: 383345.05950413225 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725407805361,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2153.2786186784065,
            "unit": "ns/iter",
            "extra": "iterations: 325775\ncpu: 2153.21904688819 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2812.6268906011023,
            "unit": "ns/iter",
            "extra": "iterations: 249061\ncpu: 2812.592252500392 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 205.67393369583036,
            "unit": "ns/iter",
            "extra": "iterations: 3443131\ncpu: 205.6714661742466 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 10124.40383917847,
            "unit": "ns/iter",
            "extra": "iterations: 68921\ncpu: 10124.265869618841 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 8552.33395666013,
            "unit": "ns/iter",
            "extra": "iterations: 81819\ncpu: 8551.882472286386 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 384358.87299835123,
            "unit": "ns/iter",
            "extra": "iterations: 1811\ncpu: 384340.0463832135 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725408987936,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2110.5308557884027,
            "unit": "ns/iter",
            "extra": "iterations: 327394\ncpu: 2110.4992119586796 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2803.7229152512377,
            "unit": "ns/iter",
            "extra": "iterations: 248747\ncpu: 2803.6697327002944 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 223.91437785521344,
            "unit": "ns/iter",
            "extra": "iterations: 3205339\ncpu: 223.91143807254088 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 11135.248143022533,
            "unit": "ns/iter",
            "extra": "iterations: 62871\ncpu: 11134.825515738576 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 8770.78637538846,
            "unit": "ns/iter",
            "extra": "iterations: 80061\ncpu: 8770.501630007117 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 385290.6631810502,
            "unit": "ns/iter",
            "extra": "iterations: 1817\ncpu: 385272.11502476595 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725409957490,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2032.8348333191168,
            "unit": "ns/iter",
            "extra": "iterations: 344670\ncpu: 2032.7062784692607 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2663.344265579678,
            "unit": "ns/iter",
            "extra": "iterations: 264508\ncpu: 2663.0583044747236 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 228.82494344012397,
            "unit": "ns/iter",
            "extra": "iterations: 3090087\ncpu: 228.80935099885545 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 7150.91184187553,
            "unit": "ns/iter",
            "extra": "iterations: 97189\ncpu: 7150.180123264975 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 7017.796035345659,
            "unit": "ns/iter",
            "extra": "iterations: 98571\ncpu: 7017.448225137205 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 385442.76642738486,
            "unit": "ns/iter",
            "extra": "iterations: 1811\ncpu: 385409.8210933187 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725410189497,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2023.3690580645994,
            "unit": "ns/iter",
            "extra": "iterations: 343049\ncpu: 2023.1652591903778 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2719.010813450038,
            "unit": "ns/iter",
            "extra": "iterations: 260139\ncpu: 2718.7314320421006 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 232.77701028682344,
            "unit": "ns/iter",
            "extra": "iterations: 3088129\ncpu: 232.75792915386623 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 7199.064215635702,
            "unit": "ns/iter",
            "extra": "iterations: 96830\ncpu: 7198.312392853453 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6969.514256362461,
            "unit": "ns/iter",
            "extra": "iterations: 99289\ncpu: 6969.096032793165 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 386369.3652993121,
            "unit": "ns/iter",
            "extra": "iterations: 1804\ncpu: 386346.4733924611 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725410510175,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2064.802632112597,
            "unit": "ns/iter",
            "extra": "iterations: 345122\ncpu: 2064.6641680333323 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2745.2473216315793,
            "unit": "ns/iter",
            "extra": "iterations: 259953\ncpu: 2745.0991448454142 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 229.24023538962973,
            "unit": "ns/iter",
            "extra": "iterations: 3133868\ncpu: 229.2346502788248 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 7045.337044340136,
            "unit": "ns/iter",
            "extra": "iterations: 98895\ncpu: 7044.630153192776 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 7021.263625562603,
            "unit": "ns/iter",
            "extra": "iterations: 98473\ncpu: 7020.606785616363 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 384748.96917997155,
            "unit": "ns/iter",
            "extra": "iterations: 1817\ncpu: 384726.9785360485 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725412030949,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2024.5857888301327,
            "unit": "ns/iter",
            "extra": "iterations: 328854\ncpu: 2024.4576103681266 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2724.7479851682688,
            "unit": "ns/iter",
            "extra": "iterations: 256473\ncpu: 2724.654653706239 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 229.1678632961591,
            "unit": "ns/iter",
            "extra": "iterations: 3065137\ncpu: 229.1597445725917 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 7142.4805292420215,
            "unit": "ns/iter",
            "extra": "iterations: 97120\ncpu: 7142.1868616145 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6987.658640444574,
            "unit": "ns/iter",
            "extra": "iterations: 97929\ncpu: 6987.311868802902 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 390080.0534819176,
            "unit": "ns/iter",
            "extra": "iterations: 1795\ncpu: 390067.6272980499 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725412045381,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 2045.065752824034,
            "unit": "ns/iter",
            "extra": "iterations: 342145\ncpu: 2045.0304520013444 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2689.868010925162,
            "unit": "ns/iter",
            "extra": "iterations: 260317\ncpu: 2689.8546349258795 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 227.78652440829245,
            "unit": "ns/iter",
            "extra": "iterations: 3089215\ncpu: 227.78521663270448 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 7290.878905772292,
            "unit": "ns/iter",
            "extra": "iterations: 98188\ncpu: 7290.750071291807 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 6928.572081899493,
            "unit": "ns/iter",
            "extra": "iterations: 99928\ncpu: 6928.2502301657205 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 386685.3184326281,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 386664.25993377465 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725413713671,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1839.38171613148,
            "unit": "ns/iter",
            "extra": "iterations: 378957\ncpu: 1839.2846048496267 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3031.9027358469925,
            "unit": "ns/iter",
            "extra": "iterations: 234845\ncpu: 3031.7115629457708 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 238.85816872627342,
            "unit": "ns/iter",
            "extra": "iterations: 2926160\ncpu: 238.8498294693387 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5840.235773298349,
            "unit": "ns/iter",
            "extra": "iterations: 121040\ncpu: 5839.830147058819 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3494.430182725195,
            "unit": "ns/iter",
            "extra": "iterations: 196470\ncpu: 3494.194711660812 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 388881.86229874083,
            "unit": "ns/iter",
            "extra": "iterations: 1801\ncpu: 388844.26762909483 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725414648984,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1820.7201823187697,
            "unit": "ns/iter",
            "extra": "iterations: 388989\ncpu: 1820.6146523423545 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3082.0778800922617,
            "unit": "ns/iter",
            "extra": "iterations: 230444\ncpu: 3081.9147081286574 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 231.3609251840543,
            "unit": "ns/iter",
            "extra": "iterations: 3023139\ncpu: 231.3510080085633 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5802.073322802275,
            "unit": "ns/iter",
            "extra": "iterations: 119649\ncpu: 5801.819806266662 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3535.9510474900385,
            "unit": "ns/iter",
            "extra": "iterations: 196231\ncpu: 3535.8827504318865 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 386773.2747374393,
            "unit": "ns/iter",
            "extra": "iterations: 1809\ncpu: 386746.38087341073 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725415903348,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1893.5288034206665,
            "unit": "ns/iter",
            "extra": "iterations: 368116\ncpu: 1893.499432244184 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2798.9394825470686,
            "unit": "ns/iter",
            "extra": "iterations: 252390\ncpu: 2798.898419113277 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 255.4980160146201,
            "unit": "ns/iter",
            "extra": "iterations: 2746492\ncpu: 255.49074128014936 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5530.7423642872145,
            "unit": "ns/iter",
            "extra": "iterations: 126609\ncpu: 5530.602619087115 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3461.768693898714,
            "unit": "ns/iter",
            "extra": "iterations: 205321\ncpu: 3461.632857817758 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 382565.65098470444,
            "unit": "ns/iter",
            "extra": "iterations: 1828\ncpu: 382562.3763676149 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725417220370,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1777.3471708885809,
            "unit": "ns/iter",
            "extra": "iterations: 395831\ncpu: 1777.291336454194 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2726.4684813873655,
            "unit": "ns/iter",
            "extra": "iterations: 241984\ncpu: 2726.337253702725 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 230.45331316365528,
            "unit": "ns/iter",
            "extra": "iterations: 3050785\ncpu: 230.44267524587934 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5479.706936946318,
            "unit": "ns/iter",
            "extra": "iterations: 127621\ncpu: 5479.399322995432 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3455.876757362212,
            "unit": "ns/iter",
            "extra": "iterations: 203501\ncpu: 3455.7475589800547 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 382759.6482192161,
            "unit": "ns/iter",
            "extra": "iterations: 1825\ncpu: 382736.2679452051 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725417331675,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1751.8700624651433,
            "unit": "ns/iter",
            "extra": "iterations: 393820\ncpu: 1751.836968665888 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2816.2639698091707,
            "unit": "ns/iter",
            "extra": "iterations: 241664\ncpu: 2816.242936473781 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 238.58530725110265,
            "unit": "ns/iter",
            "extra": "iterations: 2937939\ncpu: 238.581874572617 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5450.052292091323,
            "unit": "ns/iter",
            "extra": "iterations: 128987\ncpu: 5449.8925705691245 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3559.602634406193,
            "unit": "ns/iter",
            "extra": "iterations: 196401\ncpu: 3559.404947021656 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 387284.02839645307,
            "unit": "ns/iter",
            "extra": "iterations: 1796\ncpu: 387280.83351893094 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725458388240,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1822.3445463162614,
            "unit": "ns/iter",
            "extra": "iterations: 377598\ncpu: 1822.2985423651612 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2954.3599654738214,
            "unit": "ns/iter",
            "extra": "iterations: 238659\ncpu: 2954.2321890228313 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 238.91017519367384,
            "unit": "ns/iter",
            "extra": "iterations: 2934067\ncpu: 238.90218969096492 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5611.363754838274,
            "unit": "ns/iter",
            "extra": "iterations: 127377\ncpu: 5611.136476757973 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3480.3248674073548,
            "unit": "ns/iter",
            "extra": "iterations: 203443\ncpu: 3480.2622159523817 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 386795.2002212533,
            "unit": "ns/iter",
            "extra": "iterations: 1808\ncpu: 386775.61559734493 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725462839244,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1688.8040377558902,
            "unit": "ns/iter",
            "extra": "iterations: 410426\ncpu: 1688.745103867689 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2783.4202647053476,
            "unit": "ns/iter",
            "extra": "iterations: 256436\ncpu: 2783.2462992715537 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 231.0523825069385,
            "unit": "ns/iter",
            "extra": "iterations: 3020264\ncpu: 231.03888236260144 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5471.107028265219,
            "unit": "ns/iter",
            "extra": "iterations: 127471\ncpu: 5470.869397745369 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3501.5821415672963,
            "unit": "ns/iter",
            "extra": "iterations: 196557\ncpu: 3501.457953672469 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 4342.1738079369015,
            "unit": "ns/iter",
            "extra": "iterations: 165050\ncpu: 4342.006416237504 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 3823.3556504010485,
            "unit": "ns/iter",
            "extra": "iterations: 183925\ncpu: 3823.330373793668 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 4434.096938935754,
            "unit": "ns/iter",
            "extra": "iterations: 127668\ncpu: 4433.8652990569235 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 391840.82181005,
            "unit": "ns/iter",
            "extra": "iterations: 1779\ncpu: 391834.4896008991 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725463202989,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1754.1147178794545,
            "unit": "ns/iter",
            "extra": "iterations: 385633\ncpu: 1754.07373850267 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2775.880078212364,
            "unit": "ns/iter",
            "extra": "iterations: 250088\ncpu: 2775.876759380698 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 237.20940673613728,
            "unit": "ns/iter",
            "extra": "iterations: 2948334\ncpu: 237.20621408564972 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5359.783045648171,
            "unit": "ns/iter",
            "extra": "iterations: 131046\ncpu: 5359.662515452593 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3575.406422642981,
            "unit": "ns/iter",
            "extra": "iterations: 192413\ncpu: 3575.286565876526 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 4428.187556809607,
            "unit": "ns/iter",
            "extra": "iterations: 159525\ncpu: 4428.167973671839 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 3948.451389544182,
            "unit": "ns/iter",
            "extra": "iterations: 180095\ncpu: 3948.3733418473576 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 4452.270767659626,
            "unit": "ns/iter",
            "extra": "iterations: 146875\ncpu: 4452.135959148936 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725463437541,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1783.97456600106,
            "unit": "ns/iter",
            "extra": "iterations: 393607\ncpu: 1783.8381761503226 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2689.5665238707397,
            "unit": "ns/iter",
            "extra": "iterations: 258411\ncpu: 2689.401302576129 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 234.83213574991393,
            "unit": "ns/iter",
            "extra": "iterations: 2989910\ncpu: 234.82308062784492 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5348.214347999048,
            "unit": "ns/iter",
            "extra": "iterations: 130736\ncpu: 5348.014020621709 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3521.2623337688146,
            "unit": "ns/iter",
            "extra": "iterations: 197466\ncpu: 3521.0107360254456 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 4368.7358066608185,
            "unit": "ns/iter",
            "extra": "iterations: 160216\ncpu: 4368.471438557943 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 3907.603922532005,
            "unit": "ns/iter",
            "extra": "iterations: 179119\ncpu: 3907.4220266973375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 4568.106563782419,
            "unit": "ns/iter",
            "extra": "iterations: 152275\ncpu: 4567.820174027261 ns\nthreads: 1"
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
        "date": 1725471154268,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1813.6708681596792,
            "unit": "ns/iter",
            "extra": "iterations: 387878\ncpu: 1813.6154667189169 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2734.8499297151307,
            "unit": "ns/iter",
            "extra": "iterations: 256100\ncpu: 2734.7683209683723 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 240.01140873350778,
            "unit": "ns/iter",
            "extra": "iterations: 2962292\ncpu: 240.00312764575537 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5362.995370086967,
            "unit": "ns/iter",
            "extra": "iterations: 130456\ncpu: 5362.960661065803 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3619.668879676946,
            "unit": "ns/iter",
            "extra": "iterations: 197318\ncpu: 3619.5124671849476 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 4447.908497730997,
            "unit": "ns/iter",
            "extra": "iterations: 157089\ncpu: 4447.830484629732 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 3926.2717759628617,
            "unit": "ns/iter",
            "extra": "iterations: 174114\ncpu: 3926.075795168686 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 4576.852059431697,
            "unit": "ns/iter",
            "extra": "iterations: 151838\ncpu: 4576.870980913859 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725471833026,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1733.865327166658,
            "unit": "ns/iter",
            "extra": "iterations: 399353\ncpu: 1733.7409334598713 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2699.168511466555,
            "unit": "ns/iter",
            "extra": "iterations: 258926\ncpu: 2699.107312514001 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 228.3284455687353,
            "unit": "ns/iter",
            "extra": "iterations: 3062477\ncpu: 228.31824826766046 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5321.854712921031,
            "unit": "ns/iter",
            "extra": "iterations: 131044\ncpu: 5321.79129910564 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3436.6723617839302,
            "unit": "ns/iter",
            "extra": "iterations: 199235\ncpu: 3436.4676336988955 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 4424.848966443901,
            "unit": "ns/iter",
            "extra": "iterations: 159256\ncpu: 4424.623819510722 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 3952.0621277902433,
            "unit": "ns/iter",
            "extra": "iterations: 175976\ncpu: 3951.8714029185758 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 4493.308369902712,
            "unit": "ns/iter",
            "extra": "iterations: 155641\ncpu: 4493.254919976091 ns\nthreads: 1"
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
        "date": 1725473920757,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1756.3188363938045,
            "unit": "ns/iter",
            "extra": "iterations: 394704\ncpu: 1756.2185587174185 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2688.9765386315185,
            "unit": "ns/iter",
            "extra": "iterations: 260215\ncpu: 2688.8319697173483 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 230.2620642596873,
            "unit": "ns/iter",
            "extra": "iterations: 3035122\ncpu: 230.24763485619363 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5365.587283317517,
            "unit": "ns/iter",
            "extra": "iterations: 129452\ncpu: 5365.418324938974 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3718.5988206181205,
            "unit": "ns/iter",
            "extra": "iterations: 189930\ncpu: 3718.37816563997 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 4370.675172736586,
            "unit": "ns/iter",
            "extra": "iterations: 158044\ncpu: 4370.393004479766 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 3904.3305449385057,
            "unit": "ns/iter",
            "extra": "iterations: 178956\ncpu: 3904.0641889626486 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 4526.647157351409,
            "unit": "ns/iter",
            "extra": "iterations: 156421\ncpu: 4526.412514943644 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725476172336,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1757.3719348753912,
            "unit": "ns/iter",
            "extra": "iterations: 398067\ncpu: 1757.325801937865 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2930.4334997695223,
            "unit": "ns/iter",
            "extra": "iterations: 238330\ncpu: 2930.318537322201 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 245.93727128733335,
            "unit": "ns/iter",
            "extra": "iterations: 2852378\ncpu: 245.9321299631396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5573.31680372314,
            "unit": "ns/iter",
            "extra": "iterations: 124645\ncpu: 5573.119772152913 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3479.8065318785298,
            "unit": "ns/iter",
            "extra": "iterations: 198534\ncpu: 3479.7340808123563 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1973.155646068125,
            "unit": "ns/iter",
            "extra": "iterations: 353051\ncpu: 1973.0278854896328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1634.069317611147,
            "unit": "ns/iter",
            "extra": "iterations: 430136\ncpu: 1634.08033505682 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2071.1022754984842,
            "unit": "ns/iter",
            "extra": "iterations: 336278\ncpu: 2071.0774180886065 ns\nthreads: 1"
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
        "date": 1725476952598,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1790.9316951993105,
            "unit": "ns/iter",
            "extra": "iterations: 392886\ncpu: 1790.874892462445 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2933.433959101285,
            "unit": "ns/iter",
            "extra": "iterations: 238640\ncpu: 2933.277480724102 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 248.47703084810706,
            "unit": "ns/iter",
            "extra": "iterations: 2826073\ncpu: 248.47353978471193 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5514.20292961794,
            "unit": "ns/iter",
            "extra": "iterations: 128754\ncpu: 5514.047905307795 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3542.1908455816497,
            "unit": "ns/iter",
            "extra": "iterations: 198396\ncpu: 3542.0702433516803 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1962.263320036777,
            "unit": "ns/iter",
            "extra": "iterations: 356737\ncpu: 1962.1480194092587 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1630.9011367461978,
            "unit": "ns/iter",
            "extra": "iterations: 430615\ncpu: 1630.8633303530994 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2076.4522792715566,
            "unit": "ns/iter",
            "extra": "iterations: 339297\ncpu: 2076.4171330722043 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725482188760,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1754.7636594375308,
            "unit": "ns/iter",
            "extra": "iterations: 398717\ncpu: 1754.692473609101 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2914.190396776638,
            "unit": "ns/iter",
            "extra": "iterations: 239253\ncpu: 2914.0827659423294 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 245.3796643444545,
            "unit": "ns/iter",
            "extra": "iterations: 2854474\ncpu: 245.37509082233706 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5478.096507374745,
            "unit": "ns/iter",
            "extra": "iterations: 128757\ncpu: 5478.099047042102 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3478.3333333332243,
            "unit": "ns/iter",
            "extra": "iterations: 200190\ncpu: 3478.159733253409 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 2031.0539465238146,
            "unit": "ns/iter",
            "extra": "iterations: 355148\ncpu: 2030.9984034824918 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1621.3542951126542,
            "unit": "ns/iter",
            "extra": "iterations: 430466\ncpu: 1621.3308066142279 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2122.416437844109,
            "unit": "ns/iter",
            "extra": "iterations: 321210\ncpu: 2122.38500669344 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725483121275,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1748.6868516619722,
            "unit": "ns/iter",
            "extra": "iterations: 402857\ncpu: 1748.650032145402 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2951.3686868687932,
            "unit": "ns/iter",
            "extra": "iterations: 238392\ncpu: 2951.230725024329 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 245.17400242262283,
            "unit": "ns/iter",
            "extra": "iterations: 2864690\ncpu: 245.16909333994246 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5431.20308629016,
            "unit": "ns/iter",
            "extra": "iterations: 128763\ncpu: 5430.904390236325 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3449.8204085662474,
            "unit": "ns/iter",
            "extra": "iterations: 202660\ncpu: 3449.760372051715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1950.890458158201,
            "unit": "ns/iter",
            "extra": "iterations: 354659\ncpu: 1950.7901448997495 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1628.058690270566,
            "unit": "ns/iter",
            "extra": "iterations: 433036\ncpu: 1627.9835279283925 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2085.0456394287626,
            "unit": "ns/iter",
            "extra": "iterations: 344198\ncpu: 2084.957184527509 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725483628765,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1841.4759293680097,
            "unit": "ns/iter",
            "extra": "iterations: 387360\ncpu: 1841.3339193515076 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2976.5551416082913,
            "unit": "ns/iter",
            "extra": "iterations: 235403\ncpu: 2976.346648088597 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 245.2666160990704,
            "unit": "ns/iter",
            "extra": "iterations: 2843718\ncpu: 245.25112581486638 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5628.833399141057,
            "unit": "ns/iter",
            "extra": "iterations: 126632\ncpu: 5628.599295596689 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3578.5583990134387,
            "unit": "ns/iter",
            "extra": "iterations: 197803\ncpu: 3578.2371753714556 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1960.4686773960993,
            "unit": "ns/iter",
            "extra": "iterations: 355095\ncpu: 1960.3942015516977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1632.4988584195382,
            "unit": "ns/iter",
            "extra": "iterations: 370101\ncpu: 1632.4503446356534 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2085.119801450734,
            "unit": "ns/iter",
            "extra": "iterations: 334829\ncpu: 2085.0737570521096 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725484351536,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1810.1249810885051,
            "unit": "ns/iter",
            "extra": "iterations: 389979\ncpu: 1810.0431100136168 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2932.152310223092,
            "unit": "ns/iter",
            "extra": "iterations: 239544\ncpu: 2932.126586347393 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 246.90103213422208,
            "unit": "ns/iter",
            "extra": "iterations: 2814944\ncpu: 246.88690254584117 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5701.500833741926,
            "unit": "ns/iter",
            "extra": "iterations: 112145\ncpu: 5701.167060502032 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3637.600730336946,
            "unit": "ns/iter",
            "extra": "iterations: 194157\ncpu: 3637.3165015940726 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1978.9872253391375,
            "unit": "ns/iter",
            "extra": "iterations: 357896\ncpu: 1978.849682589356 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1625.6254636442407,
            "unit": "ns/iter",
            "extra": "iterations: 430017\ncpu: 1625.5577081836304 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2072.437352708019,
            "unit": "ns/iter",
            "extra": "iterations: 337764\ncpu: 2072.3460848403042 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725485376193,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1657.300746217134,
            "unit": "ns/iter",
            "extra": "iterations: 420923\ncpu: 1657.2489837808819 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2759.8897081651803,
            "unit": "ns/iter",
            "extra": "iterations: 257680\ncpu: 2759.8604936355164 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 242.68948094404016,
            "unit": "ns/iter",
            "extra": "iterations: 2904234\ncpu: 242.68650838740956 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5398.405118673469,
            "unit": "ns/iter",
            "extra": "iterations: 129135\ncpu: 5398.266929957023 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3604.2037049535124,
            "unit": "ns/iter",
            "extra": "iterations: 192661\ncpu: 3604.048359553831 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1980.4779994013502,
            "unit": "ns/iter",
            "extra": "iterations: 350695\ncpu: 1980.4103879439392 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1638.6015806333091,
            "unit": "ns/iter",
            "extra": "iterations: 428689\ncpu: 1638.557833301064 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2111.1880504521287,
            "unit": "ns/iter",
            "extra": "iterations: 337904\ncpu: 2111.0757848382955 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725486557263,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1688.8786745464515,
            "unit": "ns/iter",
            "extra": "iterations: 418453\ncpu: 1688.8245346550273 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2772.94113380059,
            "unit": "ns/iter",
            "extra": "iterations: 255036\ncpu: 2772.8968263304 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 236.03335782444367,
            "unit": "ns/iter",
            "extra": "iterations: 2977952\ncpu: 236.03136618723215 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5372.6934145961595,
            "unit": "ns/iter",
            "extra": "iterations: 130440\ncpu: 5372.3793314934055 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3601.5336131843096,
            "unit": "ns/iter",
            "extra": "iterations: 192960\ncpu: 3601.4725953565508 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1970.7997350033404,
            "unit": "ns/iter",
            "extra": "iterations: 353212\ncpu: 1970.7089368424608 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1620.9255031762782,
            "unit": "ns/iter",
            "extra": "iterations: 430515\ncpu: 1620.8341010185486 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2055.663554720099,
            "unit": "ns/iter",
            "extra": "iterations: 343622\ncpu: 2055.5513616706735 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725547837280,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1674.6790140000574,
            "unit": "ns/iter",
            "extra": "iterations: 425355\ncpu: 1674.6433285138298 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2788.646258014223,
            "unit": "ns/iter",
            "extra": "iterations: 250335\ncpu: 2788.5899974034783 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 234.80819711199365,
            "unit": "ns/iter",
            "extra": "iterations: 3000325\ncpu: 234.8072375492656 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5413.564417037952,
            "unit": "ns/iter",
            "extra": "iterations: 131518\ncpu: 5413.496205842545 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3523.070099374525,
            "unit": "ns/iter",
            "extra": "iterations: 193511\ncpu: 3522.911643265758 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1870.7376057458573,
            "unit": "ns/iter",
            "extra": "iterations: 374246\ncpu: 1870.6848917556895 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1561.8027915742282,
            "unit": "ns/iter",
            "extra": "iterations: 451000\ncpu: 1561.7215365853658 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1975.7260101619315,
            "unit": "ns/iter",
            "extra": "iterations: 353681\ncpu: 1975.627571172891 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725551354656,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1692.1997953908635,
            "unit": "ns/iter",
            "extra": "iterations: 404674\ncpu: 1692.1349629578376 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2784.3337429436006,
            "unit": "ns/iter",
            "extra": "iterations: 246576\ncpu: 2784.2347592628657 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 238.7179464199163,
            "unit": "ns/iter",
            "extra": "iterations: 2945646\ncpu: 238.7141812016787 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5389.018501351783,
            "unit": "ns/iter",
            "extra": "iterations: 130531\ncpu: 5388.948617569776 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3624.489399477419,
            "unit": "ns/iter",
            "extra": "iterations: 192066\ncpu: 3624.364395572356 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1911.7169905655687,
            "unit": "ns/iter",
            "extra": "iterations: 368016\ncpu: 1911.6385673448958 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1579.9619322393776,
            "unit": "ns/iter",
            "extra": "iterations: 438455\ncpu: 1579.8907231072742 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2013.2994597429515,
            "unit": "ns/iter",
            "extra": "iterations: 351129\ncpu: 2013.2731246920669 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725552778708,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1651.1596677955006,
            "unit": "ns/iter",
            "extra": "iterations: 425521\ncpu: 1651.0676652856148 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2779.00732485479,
            "unit": "ns/iter",
            "extra": "iterations: 251063\ncpu: 2778.881858338347 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 236.61442107934096,
            "unit": "ns/iter",
            "extra": "iterations: 2833713\ncpu: 236.59779554245625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 6011.445348888187,
            "unit": "ns/iter",
            "extra": "iterations: 115725\ncpu: 6011.068040613521 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3613.656236353937,
            "unit": "ns/iter",
            "extra": "iterations: 194657\ncpu: 3613.367050761081 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1978.4636815263314,
            "unit": "ns/iter",
            "extra": "iterations: 362529\ncpu: 1978.3262470036886 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1588.8964365056702,
            "unit": "ns/iter",
            "extra": "iterations: 443834\ncpu: 1588.7673972701496 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2010.7660990612007,
            "unit": "ns/iter",
            "extra": "iterations: 338498\ncpu: 2010.648435145851 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725557026850,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1667.1546228857521,
            "unit": "ns/iter",
            "extra": "iterations: 424659\ncpu: 1667.0845101599164 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2770.0132818673633,
            "unit": "ns/iter",
            "extra": "iterations: 254407\ncpu: 2769.8429760187432 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 240.12126882001144,
            "unit": "ns/iter",
            "extra": "iterations: 2936839\ncpu: 240.10656695855647 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5391.1152828582535,
            "unit": "ns/iter",
            "extra": "iterations: 130401\ncpu: 5390.872593001586 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3612.4207414738876,
            "unit": "ns/iter",
            "extra": "iterations: 196042\ncpu: 3612.0619612123915 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1927.0865177269511,
            "unit": "ns/iter",
            "extra": "iterations: 366815\ncpu: 1926.9775309079503 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1582.1790562146819,
            "unit": "ns/iter",
            "extra": "iterations: 442537\ncpu: 1582.0963038118841 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2130.2125156518455,
            "unit": "ns/iter",
            "extra": "iterations: 343410\ncpu: 2130.092641448995 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725557173652,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1715.5908041760374,
            "unit": "ns/iter",
            "extra": "iterations: 408990\ncpu: 1715.5945866647103 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2832.6099398796987,
            "unit": "ns/iter",
            "extra": "iterations: 248836\ncpu: 2832.618668520632 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 227.39034829611583,
            "unit": "ns/iter",
            "extra": "iterations: 3085880\ncpu: 227.38830706313917 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5490.001953648103,
            "unit": "ns/iter",
            "extra": "iterations: 126942\ncpu: 5489.963408485764 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3554.176540534899,
            "unit": "ns/iter",
            "extra": "iterations: 198470\ncpu: 3554.129933995061 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1919.725706105938,
            "unit": "ns/iter",
            "extra": "iterations: 343008\ncpu: 1919.6995696893357 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1594.6111664685714,
            "unit": "ns/iter",
            "extra": "iterations: 438563\ncpu: 1594.5375168447852 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2053.9193826899655,
            "unit": "ns/iter",
            "extra": "iterations: 341676\ncpu: 2053.8570751238003 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725560304802,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1690.0695142822692,
            "unit": "ns/iter",
            "extra": "iterations: 416044\ncpu: 1689.9727360567636 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2859.517711835564,
            "unit": "ns/iter",
            "extra": "iterations: 246276\ncpu: 2859.4083629748743 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 228.02323301969676,
            "unit": "ns/iter",
            "extra": "iterations: 3068908\ncpu: 228.02227274326893 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5445.4228134164405,
            "unit": "ns/iter",
            "extra": "iterations: 128591\ncpu: 5445.122014759971 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3620.084450861323,
            "unit": "ns/iter",
            "extra": "iterations: 189779\ncpu: 3619.7997407510843 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1941.0573111332615,
            "unit": "ns/iter",
            "extra": "iterations: 358255\ncpu: 1940.9157946155685 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1605.517997881044,
            "unit": "ns/iter",
            "extra": "iterations: 435079\ncpu: 1605.3954270373883 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2053.3990313436116,
            "unit": "ns/iter",
            "extra": "iterations: 341091\ncpu: 2053.270892518417 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725561401518,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1703.596815760463,
            "unit": "ns/iter",
            "extra": "iterations: 416740\ncpu: 1703.5576786485576 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2818.8057306074015,
            "unit": "ns/iter",
            "extra": "iterations: 246117\ncpu: 2818.730323382782 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 228.5774076851655,
            "unit": "ns/iter",
            "extra": "iterations: 3058934\ncpu: 228.56769907425272 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5450.263586026545,
            "unit": "ns/iter",
            "extra": "iterations: 128588\ncpu: 5450.267863253183 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3462.918413166175,
            "unit": "ns/iter",
            "extra": "iterations: 200878\ncpu: 3462.821055566066 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1950.3672018630693,
            "unit": "ns/iter",
            "extra": "iterations: 358996\ncpu: 1950.3689846126429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1573.0876010965112,
            "unit": "ns/iter",
            "extra": "iterations: 443636\ncpu: 1573.06883571216 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2034.4006193587627,
            "unit": "ns/iter",
            "extra": "iterations: 347779\ncpu: 2034.3790223101473 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725566336052,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1603.6694023210675,
            "unit": "ns/iter",
            "extra": "iterations: 433778\ncpu: 1603.533152903098 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2835.5488601541088,
            "unit": "ns/iter",
            "extra": "iterations: 245077\ncpu: 2835.3034352468812 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 228.39349482000603,
            "unit": "ns/iter",
            "extra": "iterations: 3075672\ncpu: 228.37518565048558 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5474.92877848116,
            "unit": "ns/iter",
            "extra": "iterations: 128332\ncpu: 5474.561925318704 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3663.6129527407993,
            "unit": "ns/iter",
            "extra": "iterations: 193488\ncpu: 3663.2158635160845 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1941.5518350559387,
            "unit": "ns/iter",
            "extra": "iterations: 360316\ncpu: 1941.417744424338 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1580.0102729277924,
            "unit": "ns/iter",
            "extra": "iterations: 435903\ncpu: 1579.8595650867283 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2018.7210741887163,
            "unit": "ns/iter",
            "extra": "iterations: 345228\ncpu: 2018.6030188744837 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725568568511,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1618.3101756235662,
            "unit": "ns/iter",
            "extra": "iterations: 428986\ncpu: 1618.2973337125225 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2900.600003276272,
            "unit": "ns/iter",
            "extra": "iterations: 244177\ncpu: 2900.5278466030786 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 229.00330386936292,
            "unit": "ns/iter",
            "extra": "iterations: 3059443\ncpu: 229.0012329041595 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5391.939380442263,
            "unit": "ns/iter",
            "extra": "iterations: 130222\ncpu: 5391.42628741687 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3614.1971268668008,
            "unit": "ns/iter",
            "extra": "iterations: 193865\ncpu: 3614.1264952415327 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1914.169439439485,
            "unit": "ns/iter",
            "extra": "iterations: 365759\ncpu: 1913.9799676836387 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1594.1138329213768,
            "unit": "ns/iter",
            "extra": "iterations: 442965\ncpu: 1594.0588398631937 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2010.790551387503,
            "unit": "ns/iter",
            "extra": "iterations: 350697\ncpu: 2010.6713573255545 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725570051343,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1729.4517596405603,
            "unit": "ns/iter",
            "extra": "iterations: 378117\ncpu: 1729.3528907719042 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2660.5620952766526,
            "unit": "ns/iter",
            "extra": "iterations: 264996\ncpu: 2660.5279815544372 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 226.62536559786716,
            "unit": "ns/iter",
            "extra": "iterations: 3089460\ncpu: 226.6213373858215 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5378.558181914907,
            "unit": "ns/iter",
            "extra": "iterations: 131149\ncpu: 5378.563328732966 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3519.818718950298,
            "unit": "ns/iter",
            "extra": "iterations: 199883\ncpu: 3519.6643036176156 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1979.3422536575783,
            "unit": "ns/iter",
            "extra": "iterations: 351482\ncpu: 1979.2479301927285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1620.3271242688058,
            "unit": "ns/iter",
            "extra": "iterations: 430607\ncpu: 1620.3090497832147 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2065.202943604846,
            "unit": "ns/iter",
            "extra": "iterations: 340331\ncpu: 2065.1314749464477 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725639843598,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1694.497309719944,
            "unit": "ns/iter",
            "extra": "iterations: 423376\ncpu: 1694.4423727372357 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2682.6597939759704,
            "unit": "ns/iter",
            "extra": "iterations: 255504\ncpu: 2682.558578339281 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 230.21548977376574,
            "unit": "ns/iter",
            "extra": "iterations: 3048734\ncpu: 230.20541346014448 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5296.290813034974,
            "unit": "ns/iter",
            "extra": "iterations: 131741\ncpu: 5296.072885434299 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3599.6172078680174,
            "unit": "ns/iter",
            "extra": "iterations: 192935\ncpu: 3599.4409827143836 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 2019.9574576790133,
            "unit": "ns/iter",
            "extra": "iterations: 350357\ncpu: 2019.8925695790294 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1658.0212934036078,
            "unit": "ns/iter",
            "extra": "iterations: 417735\ncpu: 1657.968439321579 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2096.8176658760035,
            "unit": "ns/iter",
            "extra": "iterations: 333547\ncpu: 2096.766056957492 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4507.187043398487,
            "unit": "ns/iter",
            "extra": "iterations: 156044\ncpu: 4507.058586039831 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725645452930,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1645.7923832578854,
            "unit": "ns/iter",
            "extra": "iterations: 426324\ncpu: 1645.7510696090299 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2699.06014516756,
            "unit": "ns/iter",
            "extra": "iterations: 256945\ncpu: 2698.9628753235124 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 227.08793525031373,
            "unit": "ns/iter",
            "extra": "iterations: 3085236\ncpu: 227.08303416659209 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5280.0957891862245,
            "unit": "ns/iter",
            "extra": "iterations: 131946\ncpu: 5279.869476907219 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3597.541367664521,
            "unit": "ns/iter",
            "extra": "iterations: 192167\ncpu: 3597.487133586931 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1950.387467111802,
            "unit": "ns/iter",
            "extra": "iterations: 357651\ncpu: 1950.273618695321 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1612.7785417000812,
            "unit": "ns/iter",
            "extra": "iterations: 434890\ncpu: 1612.694798684725 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2067.787924689881,
            "unit": "ns/iter",
            "extra": "iterations: 341308\ncpu: 2067.6927994655834 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4012.7355487101363,
            "unit": "ns/iter",
            "extra": "iterations: 174327\ncpu: 4012.4373791782145 ns\nthreads: 1"
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
        "date": 1725646912558,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1691.5476154567068,
            "unit": "ns/iter",
            "extra": "iterations: 404459\ncpu: 1691.504177184832 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2713.9774697449934,
            "unit": "ns/iter",
            "extra": "iterations: 257476\ncpu: 2713.868900402368 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 231.6748082857723,
            "unit": "ns/iter",
            "extra": "iterations: 3027162\ncpu: 231.67172685175103 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5297.526055793538,
            "unit": "ns/iter",
            "extra": "iterations: 131986\ncpu: 5297.318253451124 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3560.896377327862,
            "unit": "ns/iter",
            "extra": "iterations: 196540\ncpu: 3560.7096112750573 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1989.774702884531,
            "unit": "ns/iter",
            "extra": "iterations: 352388\ncpu: 1989.7066330295013 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1625.706496498243,
            "unit": "ns/iter",
            "extra": "iterations: 430632\ncpu: 1625.6650620483385 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2089.766497795364,
            "unit": "ns/iter",
            "extra": "iterations: 334772\ncpu: 2089.7403247583406 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4133.414300096999,
            "unit": "ns/iter",
            "extra": "iterations: 167859\ncpu: 4133.180294175472 ns\nthreads: 1"
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
        "date": 1725649867478,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1686.3411408133993,
            "unit": "ns/iter",
            "extra": "iterations: 416054\ncpu: 1686.3197830089364 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2750.201540626827,
            "unit": "ns/iter",
            "extra": "iterations: 256519\ncpu: 2750.170560465308 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 232.74621869718231,
            "unit": "ns/iter",
            "extra": "iterations: 2996454\ncpu: 232.74661783561504 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5298.982806459303,
            "unit": "ns/iter",
            "extra": "iterations: 131910\ncpu: 5298.713850352509 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3539.639488256972,
            "unit": "ns/iter",
            "extra": "iterations: 193769\ncpu: 3539.468330847555 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 2013.2843150586634,
            "unit": "ns/iter",
            "extra": "iterations: 345599\ncpu: 2013.1103706897318 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1640.6499042211487,
            "unit": "ns/iter",
            "extra": "iterations: 429114\ncpu: 1640.55940612518 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2083.5450233445467,
            "unit": "ns/iter",
            "extra": "iterations: 336270\ncpu: 2083.363663127842 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4057.2203553880163,
            "unit": "ns/iter",
            "extra": "iterations: 172544\ncpu: 4056.9569848850115 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725651556951,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1723.9630496147129,
            "unit": "ns/iter",
            "extra": "iterations: 405625\ncpu: 1723.9647063174114 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2681.571247348845,
            "unit": "ns/iter",
            "extra": "iterations: 259350\ncpu: 2681.5300096394835 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 223.44172698705077,
            "unit": "ns/iter",
            "extra": "iterations: 3128987\ncpu: 223.44465956553984 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5240.598055554945,
            "unit": "ns/iter",
            "extra": "iterations: 133200\ncpu: 5240.4129579579585 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3553.8613433921514,
            "unit": "ns/iter",
            "extra": "iterations: 198036\ncpu: 3553.8354188127405 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 2027.0008383428788,
            "unit": "ns/iter",
            "extra": "iterations: 342342\ncpu: 2026.960089617983 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1677.4663418996072,
            "unit": "ns/iter",
            "extra": "iterations: 415888\ncpu: 1677.4616290924484 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2134.436922180954,
            "unit": "ns/iter",
            "extra": "iterations: 329688\ncpu: 2134.3895258547473 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4184.2280361676485,
            "unit": "ns/iter",
            "extra": "iterations: 167662\ncpu: 4184.247265331435 ns\nthreads: 1"
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
        "date": 1725652662687,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1687.4361991472435,
            "unit": "ns/iter",
            "extra": "iterations: 398921\ncpu: 1687.4155208675402 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2662.8984077294467,
            "unit": "ns/iter",
            "extra": "iterations: 263209\ncpu: 2662.822080551957 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 224.38980074996724,
            "unit": "ns/iter",
            "extra": "iterations: 3122308\ncpu: 224.3790465258392 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5245.029709147764,
            "unit": "ns/iter",
            "extra": "iterations: 133023\ncpu: 5244.859287491639 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3567.493011358293,
            "unit": "ns/iter",
            "extra": "iterations: 197034\ncpu: 3567.3198382005116 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 2015.9113984866178,
            "unit": "ns/iter",
            "extra": "iterations: 351766\ncpu: 2015.8510003809351 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1656.3145779257395,
            "unit": "ns/iter",
            "extra": "iterations: 419950\ncpu: 1656.2396428146228 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2099.917243188199,
            "unit": "ns/iter",
            "extra": "iterations: 331731\ncpu: 2099.8358670127295 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4135.648437500072,
            "unit": "ns/iter",
            "extra": "iterations: 168704\ncpu: 4135.365901223452 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725657081541,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1700.5895630355542,
            "unit": "ns/iter",
            "extra": "iterations: 405731\ncpu: 1700.5378711510825 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2673.174627911416,
            "unit": "ns/iter",
            "extra": "iterations: 261161\ncpu: 2673.118999391179 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 223.42189626244408,
            "unit": "ns/iter",
            "extra": "iterations: 3147423\ncpu: 223.42214122474167 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5237.078337574192,
            "unit": "ns/iter",
            "extra": "iterations: 133997\ncpu: 5236.9075725575985 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3538.0732431743277,
            "unit": "ns/iter",
            "extra": "iterations: 198981\ncpu: 3538.0069755403806 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1975.262102085246,
            "unit": "ns/iter",
            "extra": "iterations: 353782\ncpu: 1975.237456965025 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1650.251410683095,
            "unit": "ns/iter",
            "extra": "iterations: 428693\ncpu: 1650.2338993172284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2079.36391139505,
            "unit": "ns/iter",
            "extra": "iterations: 336821\ncpu: 2079.3138432579894 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4128.775366981512,
            "unit": "ns/iter",
            "extra": "iterations: 169423\ncpu: 4128.634376678486 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725660215560,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1678.7808413063574,
            "unit": "ns/iter",
            "extra": "iterations: 361747\ncpu: 1678.7173549469665 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2699.440576042668,
            "unit": "ns/iter",
            "extra": "iterations: 261578\ncpu: 2699.374446627774 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 232.74647038349855,
            "unit": "ns/iter",
            "extra": "iterations: 3007763\ncpu: 232.74104808124838 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5274.246534475974,
            "unit": "ns/iter",
            "extra": "iterations: 133746\ncpu: 5274.126680424086 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3569.6255061355364,
            "unit": "ns/iter",
            "extra": "iterations: 193624\ncpu: 3569.4139827707313 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 2010.351895869851,
            "unit": "ns/iter",
            "extra": "iterations: 350024\ncpu: 2010.2712014033327 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1736.414731695674,
            "unit": "ns/iter",
            "extra": "iterations: 392297\ncpu: 1736.3211852244606 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2111.298863578001,
            "unit": "ns/iter",
            "extra": "iterations: 331479\ncpu: 2111.2132171268795 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 3993.9757070716782,
            "unit": "ns/iter",
            "extra": "iterations: 175442\ncpu: 3993.7569624149246 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725896533214,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1552.6379247439847,
            "unit": "ns/iter",
            "extra": "iterations: 449506\ncpu: 1552.59851036471 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2675.0003580924695,
            "unit": "ns/iter",
            "extra": "iterations: 262502\ncpu: 2674.909779735015 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 223.83329775074552,
            "unit": "ns/iter",
            "extra": "iterations: 3096083\ncpu: 223.82999357575392 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5363.487995292625,
            "unit": "ns/iter",
            "extra": "iterations: 132573\ncpu: 5363.37278329676 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3483.9488685779083,
            "unit": "ns/iter",
            "extra": "iterations: 201207\ncpu: 3483.931781697452 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1952.9084589616225,
            "unit": "ns/iter",
            "extra": "iterations: 358200\ncpu: 1952.8073450586307 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1651.117214775344,
            "unit": "ns/iter",
            "extra": "iterations: 428504\ncpu: 1651.0592969960564 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2060.2032860272784,
            "unit": "ns/iter",
            "extra": "iterations: 338646\ncpu: 2060.177185025075 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 3996.2099337065156,
            "unit": "ns/iter",
            "extra": "iterations: 174074\ncpu: 3996.087503015949 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725897457821,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1623.8610672237116,
            "unit": "ns/iter",
            "extra": "iterations: 431662\ncpu: 1623.823776473259 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2666.2854923819264,
            "unit": "ns/iter",
            "extra": "iterations: 262662\ncpu: 2666.28849624232 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 228.90848445117678,
            "unit": "ns/iter",
            "extra": "iterations: 3069238\ncpu: 228.90870926269002 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5222.094600068925,
            "unit": "ns/iter",
            "extra": "iterations: 133298\ncpu: 5221.962527569808 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3469.743184912739,
            "unit": "ns/iter",
            "extra": "iterations: 199007\ncpu: 3469.6730014522122 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1921.8870578122676,
            "unit": "ns/iter",
            "extra": "iterations: 363053\ncpu: 1921.886721773406 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1604.349216917655,
            "unit": "ns/iter",
            "extra": "iterations: 434054\ncpu: 1604.2784492252122 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2047.139659212597,
            "unit": "ns/iter",
            "extra": "iterations: 342677\ncpu: 2047.066237302179 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 3900.112192189279,
            "unit": "ns/iter",
            "extra": "iterations: 179656\ncpu: 3899.9446720398983 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725899237874,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1704.5082348677247,
            "unit": "ns/iter",
            "extra": "iterations: 413850\ncpu: 1704.4504047360158 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2750.576342430959,
            "unit": "ns/iter",
            "extra": "iterations: 253365\ncpu: 2750.4753458449277 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 232.16075466061176,
            "unit": "ns/iter",
            "extra": "iterations: 3038929\ncpu: 232.14313463723565 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5438.3235529274225,
            "unit": "ns/iter",
            "extra": "iterations: 128829\ncpu: 5438.128511437642 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3548.193280580315,
            "unit": "ns/iter",
            "extra": "iterations: 197904\ncpu: 3547.9166818255317 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 2003.1818174035984,
            "unit": "ns/iter",
            "extra": "iterations: 350445\ncpu: 2003.0464666352777 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1662.871838914958,
            "unit": "ns/iter",
            "extra": "iterations: 423826\ncpu: 1662.8083883480488 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2100.092090126912,
            "unit": "ns/iter",
            "extra": "iterations: 334683\ncpu: 2100.0037229258764 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4149.767858722616,
            "unit": "ns/iter",
            "extra": "iterations: 169539\ncpu: 4149.444086611345 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725901944413,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1678.1669839450233,
            "unit": "ns/iter",
            "extra": "iterations: 419190\ncpu: 1678.0469381426087 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2692.6991935141937,
            "unit": "ns/iter",
            "extra": "iterations: 258033\ncpu: 2692.4759274976464 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 228.93329826302622,
            "unit": "ns/iter",
            "extra": "iterations: 3060520\ncpu: 228.92938422228906 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5275.488843308119,
            "unit": "ns/iter",
            "extra": "iterations: 132611\ncpu: 5275.454328826418 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3531.1841216124794,
            "unit": "ns/iter",
            "extra": "iterations: 181429\ncpu: 3531.089236009677 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 2003.6363092781046,
            "unit": "ns/iter",
            "extra": "iterations: 351205\ncpu: 2003.5422673367407 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1636.97825954634,
            "unit": "ns/iter",
            "extra": "iterations: 427176\ncpu: 1636.970239432925 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2084.0125024621843,
            "unit": "ns/iter",
            "extra": "iterations: 335054\ncpu: 2083.881944402995 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4166.448735281466,
            "unit": "ns/iter",
            "extra": "iterations: 167903\ncpu: 4166.289899525326 ns\nthreads: 1"
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
        "date": 1725908973009,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1662.5226768854598,
            "unit": "ns/iter",
            "extra": "iterations: 418576\ncpu: 1662.4718641298118 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2698.329422379257,
            "unit": "ns/iter",
            "extra": "iterations: 258249\ncpu: 2698.247900282286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 225.57450997382227,
            "unit": "ns/iter",
            "extra": "iterations: 3092794\ncpu: 225.56767376036046 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5295.922421491445,
            "unit": "ns/iter",
            "extra": "iterations: 132150\ncpu: 5295.828497919031 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3517.304288050237,
            "unit": "ns/iter",
            "extra": "iterations: 200021\ncpu: 3517.238224986379 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1959.8668524617938,
            "unit": "ns/iter",
            "extra": "iterations: 355230\ncpu: 1959.8196013850174 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1620.623295486567,
            "unit": "ns/iter",
            "extra": "iterations: 427688\ncpu: 1620.6099493088411 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2071.547441919902,
            "unit": "ns/iter",
            "extra": "iterations: 336991\ncpu: 2071.4732589297655 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4119.883257940243,
            "unit": "ns/iter",
            "extra": "iterations: 169776\ncpu: 4119.802634058993 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725909493346,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1652.4835033909042,
            "unit": "ns/iter",
            "extra": "iterations: 425542\ncpu: 1652.4255843136518 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2833.6591398505416,
            "unit": "ns/iter",
            "extra": "iterations: 246585\ncpu: 2833.572009651845 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 232.4203433067072,
            "unit": "ns/iter",
            "extra": "iterations: 3001223\ncpu: 232.4114872503644 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5460.310470398548,
            "unit": "ns/iter",
            "extra": "iterations: 129890\ncpu: 5460.169112325817 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3608.3268918214762,
            "unit": "ns/iter",
            "extra": "iterations: 195658\ncpu: 3608.1011458769876 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 2007.6363855496768,
            "unit": "ns/iter",
            "extra": "iterations: 348479\ncpu: 2007.5521652667746 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1673.4416301762922,
            "unit": "ns/iter",
            "extra": "iterations: 420200\ncpu: 1673.3589267015693 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2129.3109047314615,
            "unit": "ns/iter",
            "extra": "iterations: 329059\ncpu: 2129.2406255413175 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4029.185007481054,
            "unit": "ns/iter",
            "extra": "iterations: 174447\ncpu: 4028.957792338079 ns\nthreads: 1"
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
        "date": 1725995458169,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1655.9805021266327,
            "unit": "ns/iter",
            "extra": "iterations: 425072\ncpu: 1655.9329313622168 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2850.3504319852027,
            "unit": "ns/iter",
            "extra": "iterations: 247115\ncpu: 2850.298868947657 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 230.39985174911877,
            "unit": "ns/iter",
            "extra": "iterations: 3028650\ncpu: 230.40198372212046 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5325.891787403074,
            "unit": "ns/iter",
            "extra": "iterations: 131140\ncpu: 5325.6013649534825 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3530.890411654723,
            "unit": "ns/iter",
            "extra": "iterations: 196791\ncpu: 3530.836542321549 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1973.9151811597148,
            "unit": "ns/iter",
            "extra": "iterations: 355322\ncpu: 1973.932376830029 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1653.8559574946153,
            "unit": "ns/iter",
            "extra": "iterations: 425548\ncpu: 1653.7605064528548 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2088.0107960321225,
            "unit": "ns/iter",
            "extra": "iterations: 335401\ncpu: 2087.990694720648 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 3978.9020367470953,
            "unit": "ns/iter",
            "extra": "iterations: 176556\ncpu: 3978.850268470064 ns\nthreads: 1"
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
        "date": 1726072479977,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1642.9057759333236,
            "unit": "ns/iter",
            "extra": "iterations: 428935\ncpu: 1642.8265471458383 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2821.2760713071884,
            "unit": "ns/iter",
            "extra": "iterations: 246708\ncpu: 2821.2521726089144 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 230.48849393806165,
            "unit": "ns/iter",
            "extra": "iterations: 3051913\ncpu: 230.481139206786 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5345.464987336565,
            "unit": "ns/iter",
            "extra": "iterations: 131481\ncpu: 5345.244286246682 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3585.561381761883,
            "unit": "ns/iter",
            "extra": "iterations: 195229\ncpu: 3585.305764000223 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 2000.9434955505915,
            "unit": "ns/iter",
            "extra": "iterations: 351052\ncpu: 2000.85873602771 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1704.5788233495168,
            "unit": "ns/iter",
            "extra": "iterations: 418442\ncpu: 1704.4832784471928 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2123.9767711893815,
            "unit": "ns/iter",
            "extra": "iterations: 330710\ncpu: 2123.9032475582844 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4004.0982447053316,
            "unit": "ns/iter",
            "extra": "iterations: 169943\ncpu: 4003.7533114044127 ns\nthreads: 1"
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
        "date": 1726081878091,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1669.642215631809,
            "unit": "ns/iter",
            "extra": "iterations: 428230\ncpu: 1669.6206384419588 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2839.4370664224584,
            "unit": "ns/iter",
            "extra": "iterations: 246784\ncpu: 2839.3705588692947 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 231.7675867294391,
            "unit": "ns/iter",
            "extra": "iterations: 3043488\ncpu: 231.7649979234352 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5313.6848810593265,
            "unit": "ns/iter",
            "extra": "iterations: 130611\ncpu: 5313.451661804902 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3622.82657783201,
            "unit": "ns/iter",
            "extra": "iterations: 195569\ncpu: 3622.8215514728836 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 2006.6393028000487,
            "unit": "ns/iter",
            "extra": "iterations: 317097\ncpu: 2006.6148118714464 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1648.8193702850047,
            "unit": "ns/iter",
            "extra": "iterations: 417268\ncpu: 1648.7313093743105 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2097.4987104037714,
            "unit": "ns/iter",
            "extra": "iterations: 330336\ncpu: 2097.351157609219 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4063.8544110567063,
            "unit": "ns/iter",
            "extra": "iterations: 170322\ncpu: 4063.8514460844717 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726086404565,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1656.4574700875123,
            "unit": "ns/iter",
            "extra": "iterations: 419975\ncpu: 1656.3545282457287 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2887.878703711273,
            "unit": "ns/iter",
            "extra": "iterations: 242662\ncpu: 2887.6844540966435 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 232.52208779637817,
            "unit": "ns/iter",
            "extra": "iterations: 3028188\ncpu: 232.51031706089572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 5333.588158988413,
            "unit": "ns/iter",
            "extra": "iterations: 131053\ncpu: 5333.239353543982 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 3549.0689974497086,
            "unit": "ns/iter",
            "extra": "iterations: 197616\ncpu: 3548.915452190104 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 2027.6490023160268,
            "unit": "ns/iter",
            "extra": "iterations: 347555\ncpu: 2027.6154680554164 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1694.0232439416907,
            "unit": "ns/iter",
            "extra": "iterations: 409397\ncpu: 1693.8974320769319 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2126.9369377846774,
            "unit": "ns/iter",
            "extra": "iterations: 329389\ncpu: 2126.8853483267467 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 4003.685413874008,
            "unit": "ns/iter",
            "extra": "iterations: 176044\ncpu: 4003.530543500491 ns\nthreads: 1"
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
        "date": 1726151174833,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1120.9216383659052,
            "unit": "ns/iter",
            "extra": "iterations: 617713\ncpu: 1120.8900006961162 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2150.389513826938,
            "unit": "ns/iter",
            "extra": "iterations: 323321\ncpu: 2150.3304703375284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 184.83319090366217,
            "unit": "ns/iter",
            "extra": "iterations: 3756240\ncpu: 184.82993844908745 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3631.1542440371227,
            "unit": "ns/iter",
            "extra": "iterations: 192364\ncpu: 3631.0833471959418 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1734.8621128554003,
            "unit": "ns/iter",
            "extra": "iterations: 403047\ncpu: 1734.7798296476587 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1708.7204294180885,
            "unit": "ns/iter",
            "extra": "iterations: 405572\ncpu: 1708.656033947117 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1424.074444554728,
            "unit": "ns/iter",
            "extra": "iterations: 503650\ncpu: 1424.0515099771671 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1758.919021959433,
            "unit": "ns/iter",
            "extra": "iterations: 392131\ncpu: 1758.886945944084 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2651.1832404159522,
            "unit": "ns/iter",
            "extra": "iterations: 267441\ncpu: 2651.042308396992 ns\nthreads: 1"
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
        "date": 1726168180781,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1138.2482859838678,
            "unit": "ns/iter",
            "extra": "iterations: 617993\ncpu: 1138.1953646724153 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2180.392081217689,
            "unit": "ns/iter",
            "extra": "iterations: 322196\ncpu: 2180.2565860532095 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 188.29740529529167,
            "unit": "ns/iter",
            "extra": "iterations: 3702271\ncpu: 188.28691497732063 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3640.6051002944355,
            "unit": "ns/iter",
            "extra": "iterations: 191636\ncpu: 3640.4591308522395 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1738.0255324824989,
            "unit": "ns/iter",
            "extra": "iterations: 404896\ncpu: 1737.910777088439 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1680.8124277435425,
            "unit": "ns/iter",
            "extra": "iterations: 416053\ncpu: 1680.7370310994029 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1374.1802895796134,
            "unit": "ns/iter",
            "extra": "iterations: 511638\ncpu: 1374.0879176292615 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1771.9950423063192,
            "unit": "ns/iter",
            "extra": "iterations: 394740\ncpu: 1771.9272939149835 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2726.3152780167693,
            "unit": "ns/iter",
            "extra": "iterations: 261585\ncpu: 2726.120209492132 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726177431967,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1144.630422946143,
            "unit": "ns/iter",
            "extra": "iterations: 595064\ncpu: 1144.5500937714262 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2427.1389109332376,
            "unit": "ns/iter",
            "extra": "iterations: 288559\ncpu: 2427.001285698939 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 194.57808691942355,
            "unit": "ns/iter",
            "extra": "iterations: 3590659\ncpu: 194.56385443452027 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3628.982382225003,
            "unit": "ns/iter",
            "extra": "iterations: 193441\ncpu: 3628.74755093284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1751.321416563473,
            "unit": "ns/iter",
            "extra": "iterations: 398542\ncpu: 1751.2092502170415 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1747.6820346133072,
            "unit": "ns/iter",
            "extra": "iterations: 403025\ncpu: 1747.6210309534154 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1423.1254895677505,
            "unit": "ns/iter",
            "extra": "iterations: 493037\ncpu: 1423.069067838723 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1832.4324052613456,
            "unit": "ns/iter",
            "extra": "iterations: 380969\ncpu: 1832.361373235092 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2779.7492316880835,
            "unit": "ns/iter",
            "extra": "iterations: 252827\ncpu: 2779.6443220067495 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 4030.7868252196454,
            "unit": "ns/iter",
            "extra": "iterations: 174242\ncpu: 4030.629584141592 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726178200791,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1137.8396604036463,
            "unit": "ns/iter",
            "extra": "iterations: 617321\ncpu: 1137.7547370006853 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2395.0251305508523,
            "unit": "ns/iter",
            "extra": "iterations: 292990\ncpu: 2394.916942557767 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 192.7588232752665,
            "unit": "ns/iter",
            "extra": "iterations: 3633713\ncpu: 192.74283329475932 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3605.537419460414,
            "unit": "ns/iter",
            "extra": "iterations: 195246\ncpu: 3605.4490898661193 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1744.948762432967,
            "unit": "ns/iter",
            "extra": "iterations: 401756\ncpu: 1744.8704462410028 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1716.5968664347563,
            "unit": "ns/iter",
            "extra": "iterations: 408991\ncpu: 1716.5692790305889 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1407.4107281360866,
            "unit": "ns/iter",
            "extra": "iterations: 496377\ncpu: 1407.3449051829548 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1790.1480478903732,
            "unit": "ns/iter",
            "extra": "iterations: 390475\ncpu: 1790.0549433382416 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2810.960409425121,
            "unit": "ns/iter",
            "extra": "iterations: 250009\ncpu: 2810.8291581503063 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 3968.978388363654,
            "unit": "ns/iter",
            "extra": "iterations: 176479\ncpu: 3968.8221771428834 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726179174097,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1111.093942538803,
            "unit": "ns/iter",
            "extra": "iterations: 627309\ncpu: 1111.048516759683 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2289.560508156796,
            "unit": "ns/iter",
            "extra": "iterations: 305339\ncpu: 2289.538434330367 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 200.009947128165,
            "unit": "ns/iter",
            "extra": "iterations: 3673221\ncpu: 200.0068177221027 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3564.8858236484775,
            "unit": "ns/iter",
            "extra": "iterations: 194112\ncpu: 3564.8427042119984 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1702.6830949565804,
            "unit": "ns/iter",
            "extra": "iterations: 414610\ncpu: 1702.6681073780187 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1695.1832815895204,
            "unit": "ns/iter",
            "extra": "iterations: 416152\ncpu: 1695.128505930525 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1387.3433879265365,
            "unit": "ns/iter",
            "extra": "iterations: 504214\ncpu: 1387.319314814741 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1764.117300169156,
            "unit": "ns/iter",
            "extra": "iterations: 396973\ncpu: 1764.1167384179798 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2731.708552826035,
            "unit": "ns/iter",
            "extra": "iterations: 253425\ncpu: 2731.6115142547146 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2336.953321063876,
            "unit": "ns/iter",
            "extra": "iterations: 298850\ncpu: 2336.9199866153576 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726240269571,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1154.3360077211642,
            "unit": "ns/iter",
            "extra": "iterations: 609236\ncpu: 1154.2713628216325 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2087.1443134572432,
            "unit": "ns/iter",
            "extra": "iterations: 312923\ncpu: 2087.1050609894437 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 188.59692289474756,
            "unit": "ns/iter",
            "extra": "iterations: 3716155\ncpu: 188.58417531023323 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 382.1740677466653,
            "unit": "ns/iter",
            "extra": "iterations: 1832120\ncpu: 382.17455461432655 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 4166.95147788205,
            "unit": "ns/iter",
            "extra": "iterations: 164729\ncpu: 4166.772122698493 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1706.4892204465862,
            "unit": "ns/iter",
            "extra": "iterations: 411056\ncpu: 1706.422280662489 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1695.7462778196268,
            "unit": "ns/iter",
            "extra": "iterations: 413736\ncpu: 1695.6874117794923 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1411.3639662505102,
            "unit": "ns/iter",
            "extra": "iterations: 493282\ncpu: 1411.350742577269 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1789.9104178629418,
            "unit": "ns/iter",
            "extra": "iterations: 391875\ncpu: 1789.8922385964906 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2730.4431670955305,
            "unit": "ns/iter",
            "extra": "iterations: 255477\ncpu: 2730.4219401355103 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2350.099369514055,
            "unit": "ns/iter",
            "extra": "iterations: 297707\ncpu: 2350.0390954865056 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726242423668,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1155.974585767706,
            "unit": "ns/iter",
            "extra": "iterations: 609501\ncpu: 1155.9695947996806 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2079.0815663933363,
            "unit": "ns/iter",
            "extra": "iterations: 336646\ncpu: 2079.051163536772 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 194.37127028849056,
            "unit": "ns/iter",
            "extra": "iterations: 3604937\ncpu: 194.36896372946316 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 242.7304561472483,
            "unit": "ns/iter",
            "extra": "iterations: 2882863\ncpu: 242.72419743844918 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3584.169273106168,
            "unit": "ns/iter",
            "extra": "iterations: 194774\ncpu: 3584.10075780135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1739.9141211620126,
            "unit": "ns/iter",
            "extra": "iterations: 402998\ncpu: 1739.8686147325782 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1723.6012341268888,
            "unit": "ns/iter",
            "extra": "iterations: 405955\ncpu: 1723.5618874013126 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1397.7403903758309,
            "unit": "ns/iter",
            "extra": "iterations: 502439\ncpu: 1397.7354564434695 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1779.4070323716635,
            "unit": "ns/iter",
            "extra": "iterations: 394234\ncpu: 1779.3755815074308 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2636.8165878815175,
            "unit": "ns/iter",
            "extra": "iterations: 267605\ncpu: 2636.770990826027 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2290.417437545766,
            "unit": "ns/iter",
            "extra": "iterations: 306144\ncpu: 2290.3631950977356 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726244680667,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1145.7948214754672,
            "unit": "ns/iter",
            "extra": "iterations: 609440\ncpu: 1145.754906143345 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2075.492390836513,
            "unit": "ns/iter",
            "extra": "iterations: 336765\ncpu: 2075.4104969340633 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 186.0014554421497,
            "unit": "ns/iter",
            "extra": "iterations: 3784417\ncpu: 185.99946068311192 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 230.60849161762815,
            "unit": "ns/iter",
            "extra": "iterations: 3036783\ncpu: 230.5965941590163 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3554.72692044583,
            "unit": "ns/iter",
            "extra": "iterations: 195866\ncpu: 3554.56350770425 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1700.929521972606,
            "unit": "ns/iter",
            "extra": "iterations: 410667\ncpu: 1700.8572273886139 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1685.2295539951697,
            "unit": "ns/iter",
            "extra": "iterations: 414861\ncpu: 1685.1942240895132 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1368.3667291502393,
            "unit": "ns/iter",
            "extra": "iterations: 511601\ncpu: 1368.3256053056982 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1756.9729131412232,
            "unit": "ns/iter",
            "extra": "iterations: 398865\ncpu: 1756.8919484035973 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2633.2189965268662,
            "unit": "ns/iter",
            "extra": "iterations: 265438\ncpu: 2633.0965799923133 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2249.832567782541,
            "unit": "ns/iter",
            "extra": "iterations: 311105\ncpu: 2249.795454910722 ns\nthreads: 1"
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
        "date": 1726254597654,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1151.3654614607178,
            "unit": "ns/iter",
            "extra": "iterations: 612869\ncpu: 1151.351001600668 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2136.099208191638,
            "unit": "ns/iter",
            "extra": "iterations: 327352\ncpu: 2136.072979544954 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 185.89934287032037,
            "unit": "ns/iter",
            "extra": "iterations: 3746749\ncpu: 185.89844449147785 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 230.15035655441366,
            "unit": "ns/iter",
            "extra": "iterations: 3039648\ncpu: 230.15133331227818 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3560.115481017128,
            "unit": "ns/iter",
            "extra": "iterations: 195097\ncpu: 3560.0970901654055 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1693.155398530578,
            "unit": "ns/iter",
            "extra": "iterations: 408852\ncpu: 1693.1628046334613 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1683.093667016685,
            "unit": "ns/iter",
            "extra": "iterations: 413486\ncpu: 1682.999247858454 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1379.544871534301,
            "unit": "ns/iter",
            "extra": "iterations: 516597\ncpu: 1379.4917217870009 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1755.3788756819658,
            "unit": "ns/iter",
            "extra": "iterations: 394995\ncpu: 1755.2776136406783 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2622.4614402258044,
            "unit": "ns/iter",
            "extra": "iterations: 266236\ncpu: 2622.3490023888553 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2231.5811121629476,
            "unit": "ns/iter",
            "extra": "iterations: 314774\ncpu: 2231.400112461638 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726258962325,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1149.4347953118433,
            "unit": "ns/iter",
            "extra": "iterations: 605800\ncpu: 1149.4166886761307 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2168.006264146841,
            "unit": "ns/iter",
            "extra": "iterations: 322949\ncpu: 2167.9667780361606 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 187.8913016943475,
            "unit": "ns/iter",
            "extra": "iterations: 3727703\ncpu: 187.8883508155022 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 201.84994792477613,
            "unit": "ns/iter",
            "extra": "iterations: 3459419\ncpu: 201.84663696418394 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3583.3197989489317,
            "unit": "ns/iter",
            "extra": "iterations: 195970\ncpu: 3583.2645149767804 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1688.9282969577434,
            "unit": "ns/iter",
            "extra": "iterations: 407277\ncpu: 1688.8914522548544 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1722.4046276559034,
            "unit": "ns/iter",
            "extra": "iterations: 407204\ncpu: 1722.348508364358 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1416.9709685442904,
            "unit": "ns/iter",
            "extra": "iterations: 494567\ncpu: 1416.9434899619255 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1820.7725562786025,
            "unit": "ns/iter",
            "extra": "iterations: 384117\ncpu: 1820.6959077572712 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2653.8649004911576,
            "unit": "ns/iter",
            "extra": "iterations: 263243\ncpu: 2653.8123292927125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2307.606929333791,
            "unit": "ns/iter",
            "extra": "iterations: 305253\ncpu: 2307.5702679416745 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726263011973,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1059.686137866138,
            "unit": "ns/iter",
            "extra": "iterations: 656782\ncpu: 1059.6593801291754 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2106.2101162089084,
            "unit": "ns/iter",
            "extra": "iterations: 335086\ncpu: 2106.143154294718 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 182.549840470764,
            "unit": "ns/iter",
            "extra": "iterations: 3793975\ncpu: 182.54708689435225 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 202.16204065747777,
            "unit": "ns/iter",
            "extra": "iterations: 3548523\ncpu: 202.15191024547386 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3576.750406416996,
            "unit": "ns/iter",
            "extra": "iterations: 187000\ncpu: 3576.6205775401068 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1702.8285810450639,
            "unit": "ns/iter",
            "extra": "iterations: 410013\ncpu: 1702.752446873637 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1652.1658151264432,
            "unit": "ns/iter",
            "extra": "iterations: 425112\ncpu: 1652.0971743916882 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1366.4352696418214,
            "unit": "ns/iter",
            "extra": "iterations: 515276\ncpu: 1366.3613830257948 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1748.9593568715934,
            "unit": "ns/iter",
            "extra": "iterations: 397681\ncpu: 1748.8507421777774 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 743.5067794776929,
            "unit": "ns/iter",
            "extra": "iterations: 961726\ncpu: 743.4510078754245 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2286.735260631385,
            "unit": "ns/iter",
            "extra": "iterations: 304779\ncpu: 2286.5790293950686 ns\nthreads: 1"
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
        "date": 1726513770787,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1073.6405681058716,
            "unit": "ns/iter",
            "extra": "iterations: 651428\ncpu: 1073.604897241138 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2088.4292536545013,
            "unit": "ns/iter",
            "extra": "iterations: 333572\ncpu: 2088.3715359802372 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 183.69068036344896,
            "unit": "ns/iter",
            "extra": "iterations: 3833701\ncpu: 183.68733007608043 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 197.37559061559807,
            "unit": "ns/iter",
            "extra": "iterations: 3532543\ncpu: 197.37163567435704 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3578.6725249032643,
            "unit": "ns/iter",
            "extra": "iterations: 195053\ncpu: 3578.556259068049 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1699.745156957295,
            "unit": "ns/iter",
            "extra": "iterations: 411673\ncpu: 1699.6842299592151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1649.747345721425,
            "unit": "ns/iter",
            "extra": "iterations: 423844\ncpu: 1649.7036433215997 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1401.0275323737665,
            "unit": "ns/iter",
            "extra": "iterations: 514231\ncpu: 1400.9907259577913 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1753.874320814363,
            "unit": "ns/iter",
            "extra": "iterations: 397719\ncpu: 1753.8216680621215 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 725.2599614881927,
            "unit": "ns/iter",
            "extra": "iterations: 963862\ncpu: 725.2351093828788 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2295.582564519599,
            "unit": "ns/iter",
            "extra": "iterations: 304907\ncpu: 2295.521591829636 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726528496177,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1127.1970477037303,
            "unit": "ns/iter",
            "extra": "iterations: 639028\ncpu: 1127.178122085417 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2150.0243760632984,
            "unit": "ns/iter",
            "extra": "iterations: 325073\ncpu: 2149.918581364801 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 186.05503639143868,
            "unit": "ns/iter",
            "extra": "iterations: 3760639\ncpu: 186.0374915007795 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 204.2405947056044,
            "unit": "ns/iter",
            "extra": "iterations: 3439685\ncpu: 204.21956341932488 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3630.3941449081162,
            "unit": "ns/iter",
            "extra": "iterations: 194634\ncpu: 3630.183323571419 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1739.6749858488904,
            "unit": "ns/iter",
            "extra": "iterations: 406330\ncpu: 1739.4783279600344 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1716.4765262990886,
            "unit": "ns/iter",
            "extra": "iterations: 408095\ncpu: 1716.4262169347833 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1399.3795502794871,
            "unit": "ns/iter",
            "extra": "iterations: 500711\ncpu: 1399.311043695864 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1805.6879708692607,
            "unit": "ns/iter",
            "extra": "iterations: 386121\ncpu: 1805.638292141578 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 725.2728136296266,
            "unit": "ns/iter",
            "extra": "iterations: 973760\ncpu: 725.2351565067363 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2374.1137266758483,
            "unit": "ns/iter",
            "extra": "iterations: 294434\ncpu: 2373.988381097287 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 212.79960610448012,
            "unit": "ns/iter",
            "extra": "iterations: 3325755\ncpu: 212.7894402925051 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726529755635,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1106.2598534726612,
            "unit": "ns/iter",
            "extra": "iterations: 627596\ncpu: 1106.1933122582043 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2160.231290901529,
            "unit": "ns/iter",
            "extra": "iterations: 324254\ncpu: 2160.081917262393 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 202.1741887646959,
            "unit": "ns/iter",
            "extra": "iterations: 3660282\ncpu: 202.16725022826103 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 205.6295755824072,
            "unit": "ns/iter",
            "extra": "iterations: 3404430\ncpu: 205.6252441671586 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3656.455502010197,
            "unit": "ns/iter",
            "extra": "iterations: 190076\ncpu: 3656.424735369009 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1765.6175407784597,
            "unit": "ns/iter",
            "extra": "iterations: 396288\ncpu: 1765.583855680716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1727.57623296799,
            "unit": "ns/iter",
            "extra": "iterations: 404897\ncpu: 1727.545494286201 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1413.9154701357882,
            "unit": "ns/iter",
            "extra": "iterations: 498037\ncpu: 1413.87310982919 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1815.0557327977128,
            "unit": "ns/iter",
            "extra": "iterations: 385536\ncpu: 1814.9877598979062 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 774.7512683881275,
            "unit": "ns/iter",
            "extra": "iterations: 870396\ncpu: 774.7192059706146 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2364.275293291267,
            "unit": "ns/iter",
            "extra": "iterations: 296037\ncpu: 2364.222009410985 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 214.40924804392122,
            "unit": "ns/iter",
            "extra": "iterations: 3255456\ncpu: 214.40608136003075 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726530298212,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1114.622977621706,
            "unit": "ns/iter",
            "extra": "iterations: 628777\ncpu: 1114.5797906093892 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2403.5513940278865,
            "unit": "ns/iter",
            "extra": "iterations: 290812\ncpu: 2403.4594686601645 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 187.56597456266567,
            "unit": "ns/iter",
            "extra": "iterations: 3760851\ncpu: 187.561102527061 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 202.5104219776374,
            "unit": "ns/iter",
            "extra": "iterations: 3461771\ncpu: 202.50046984621451 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3605.151718572231,
            "unit": "ns/iter",
            "extra": "iterations: 194551\ncpu: 3605.024029688874 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1732.238141312155,
            "unit": "ns/iter",
            "extra": "iterations: 407212\ncpu: 1732.1662524680014 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1743.512737062448,
            "unit": "ns/iter",
            "extra": "iterations: 400053\ncpu: 1743.4700502183464 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1417.3153467222144,
            "unit": "ns/iter",
            "extra": "iterations: 493089\ncpu: 1417.2712045898425 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1862.9358437169624,
            "unit": "ns/iter",
            "extra": "iterations: 381615\ncpu: 1862.8593896990442 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 796.4202432159921,
            "unit": "ns/iter",
            "extra": "iterations: 879712\ncpu: 796.4037446346078 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2375.0259051905077,
            "unit": "ns/iter",
            "extra": "iterations: 295076\ncpu: 2375.0245292738196 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 214.86350998804792,
            "unit": "ns/iter",
            "extra": "iterations: 3173441\ncpu: 214.86173651881353 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726531248295,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1105.0562477749472,
            "unit": "ns/iter",
            "extra": "iterations: 629216\ncpu: 1104.948645616132 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2181.335805032025,
            "unit": "ns/iter",
            "extra": "iterations: 320832\ncpu: 2181.1238498653506 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 191.36697468707422,
            "unit": "ns/iter",
            "extra": "iterations: 3657225\ncpu: 191.3507558326327 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 211.71105968221605,
            "unit": "ns/iter",
            "extra": "iterations: 3329300\ncpu: 211.69301084312025 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3562.2429042770095,
            "unit": "ns/iter",
            "extra": "iterations: 193673\ncpu: 3561.9097964094094 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1721.4206104615118,
            "unit": "ns/iter",
            "extra": "iterations: 406250\ncpu: 1721.3011101538468 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1747.7580652429906,
            "unit": "ns/iter",
            "extra": "iterations: 399430\ncpu: 1747.6347395037944 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1440.4425341478293,
            "unit": "ns/iter",
            "extra": "iterations: 475726\ncpu: 1440.3516309808588 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1827.1298579685326,
            "unit": "ns/iter",
            "extra": "iterations: 382310\ncpu: 1827.0456645130932 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 758.9195430973797,
            "unit": "ns/iter",
            "extra": "iterations: 921947\ncpu: 758.8638880543024 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2413.6076486422517,
            "unit": "ns/iter",
            "extra": "iterations: 290143\ncpu: 2413.4210199798013 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 223.5325863342504,
            "unit": "ns/iter",
            "extra": "iterations: 3130392\ncpu: 223.51831016690602 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726532027657,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1150.1157964673541,
            "unit": "ns/iter",
            "extra": "iterations: 605053\ncpu: 1150.0741918476565 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2179.16366254507,
            "unit": "ns/iter",
            "extra": "iterations: 320837\ncpu: 2179.106296966995 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 222.1631592103254,
            "unit": "ns/iter",
            "extra": "iterations: 3148483\ncpu: 222.14941354296664 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 154.4391608795456,
            "unit": "ns/iter",
            "extra": "iterations: 4537656\ncpu: 154.43397912931266 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3600.1140139230547,
            "unit": "ns/iter",
            "extra": "iterations: 195213\ncpu: 3599.8574428957113 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1724.2939608100148,
            "unit": "ns/iter",
            "extra": "iterations: 406942\ncpu: 1724.2145195138376 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1790.6552228390751,
            "unit": "ns/iter",
            "extra": "iterations: 389788\ncpu: 1790.5227251736837 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1485.390859839454,
            "unit": "ns/iter",
            "extra": "iterations: 470867\ncpu: 1485.3014205709892 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1867.1938599250702,
            "unit": "ns/iter",
            "extra": "iterations: 375142\ncpu: 1867.048256393578 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 763.119013935854,
            "unit": "ns/iter",
            "extra": "iterations: 918926\ncpu: 763.0932719283155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2293.6735920464803,
            "unit": "ns/iter",
            "extra": "iterations: 305976\ncpu: 2293.5492424242398 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 166.14221526556827,
            "unit": "ns/iter",
            "extra": "iterations: 4210195\ncpu: 166.14159724193323 ns\nthreads: 1"
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
        "date": 1726567616926,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1060.6416273473726,
            "unit": "ns/iter",
            "extra": "iterations: 663583\ncpu: 1060.6205614067874 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2106.757579849261,
            "unit": "ns/iter",
            "extra": "iterations: 333285\ncpu: 2106.7037670462223 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 186.57762219684977,
            "unit": "ns/iter",
            "extra": "iterations: 3752245\ncpu: 186.57307158780938 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 153.78943429957982,
            "unit": "ns/iter",
            "extra": "iterations: 4559622\ncpu: 153.78579101513236 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3632.3456532490964,
            "unit": "ns/iter",
            "extra": "iterations: 194076\ncpu: 3632.2407355881214 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1673.8365074391688,
            "unit": "ns/iter",
            "extra": "iterations: 418123\ncpu: 1673.764200964787 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1733.9500734030782,
            "unit": "ns/iter",
            "extra": "iterations: 397123\ncpu: 1733.840976221473 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1401.6701259537665,
            "unit": "ns/iter",
            "extra": "iterations: 498754\ncpu: 1401.5977054820612 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1799.5666392788892,
            "unit": "ns/iter",
            "extra": "iterations: 389470\ncpu: 1799.4043828792967 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 716.9846185075972,
            "unit": "ns/iter",
            "extra": "iterations: 980334\ncpu: 716.9806514922465 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2395.5208978803166,
            "unit": "ns/iter",
            "extra": "iterations: 293714\ncpu: 2395.3807377244557 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 161.9410798621687,
            "unit": "ns/iter",
            "extra": "iterations: 4318829\ncpu: 161.93865119457178 ns\nthreads: 1"
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
        "date": 1726600175918,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1133.4836160792631,
            "unit": "ns/iter",
            "extra": "iterations: 630130\ncpu: 1133.4277799819085 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2131.410040302318,
            "unit": "ns/iter",
            "extra": "iterations: 329014\ncpu: 2131.194319998542 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 192.97219995956658,
            "unit": "ns/iter",
            "extra": "iterations: 3654599\ncpu: 192.95692413859902 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 157.3096625476069,
            "unit": "ns/iter",
            "extra": "iterations: 4392827\ncpu: 157.29472638007374 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3633.2843788961277,
            "unit": "ns/iter",
            "extra": "iterations: 193309\ncpu: 3633.0776166655414 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1712.4150700118937,
            "unit": "ns/iter",
            "extra": "iterations: 409502\ncpu: 1712.255351622214 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1754.091795555759,
            "unit": "ns/iter",
            "extra": "iterations: 398211\ncpu: 1753.927144152219 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1436.4522764809287,
            "unit": "ns/iter",
            "extra": "iterations: 486804\ncpu: 1436.3528113984296 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1826.2730971688666,
            "unit": "ns/iter",
            "extra": "iterations: 382417\ncpu: 1826.1201620220845 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 733.7391098134447,
            "unit": "ns/iter",
            "extra": "iterations: 957215\ncpu: 733.7086652423951 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2455.158497151545,
            "unit": "ns/iter",
            "extra": "iterations: 288226\ncpu: 2455.119985705666 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 167.05760282870577,
            "unit": "ns/iter",
            "extra": "iterations: 4138703\ncpu: 167.0567793823331 ns\nthreads: 1"
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
        "date": 1726686573074,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1068.2290832037902,
            "unit": "ns/iter",
            "extra": "iterations: 647494\ncpu: 1068.1662594556863 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2116.268589757089,
            "unit": "ns/iter",
            "extra": "iterations: 330787\ncpu: 2116.194263982562 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 192.2575970438273,
            "unit": "ns/iter",
            "extra": "iterations: 3645826\ncpu: 192.24864351727146 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 155.40473503903883,
            "unit": "ns/iter",
            "extra": "iterations: 4518949\ncpu: 155.398591575165 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3709.1325170459386,
            "unit": "ns/iter",
            "extra": "iterations: 188904\ncpu: 3708.9359992377053 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1689.6366249506716,
            "unit": "ns/iter",
            "extra": "iterations: 408077\ncpu: 1689.55593919775 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1739.1429510047456,
            "unit": "ns/iter",
            "extra": "iterations: 400284\ncpu: 1739.034570454977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1434.9500327596425,
            "unit": "ns/iter",
            "extra": "iterations: 492983\ncpu: 1434.8570072396003 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1816.7074803891944,
            "unit": "ns/iter",
            "extra": "iterations: 381424\ncpu: 1816.619625403751 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 719.1503539527044,
            "unit": "ns/iter",
            "extra": "iterations: 964677\ncpu: 719.1268590419382 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2377.111948074777,
            "unit": "ns/iter",
            "extra": "iterations: 293654\ncpu: 2377.061395383681 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 165.48820784887056,
            "unit": "ns/iter",
            "extra": "iterations: 4260249\ncpu: 165.48582042974488 ns\nthreads: 1"
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
        "date": 1726772974229,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1087.7026291421882,
            "unit": "ns/iter",
            "extra": "iterations: 641502\ncpu: 1087.6429379799283 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2123.828415651816,
            "unit": "ns/iter",
            "extra": "iterations: 329593\ncpu: 2123.6709032048616 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 184.24206713597772,
            "unit": "ns/iter",
            "extra": "iterations: 3785392\ncpu: 184.23998386428667 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 154.2212885957772,
            "unit": "ns/iter",
            "extra": "iterations: 4530839\ncpu: 154.21382772594652 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3655.00004161199,
            "unit": "ns/iter",
            "extra": "iterations: 192251\ncpu: 3654.9474905202046 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1708.3116700982323,
            "unit": "ns/iter",
            "extra": "iterations: 414281\ncpu: 1708.213106562936 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1726.3637488759268,
            "unit": "ns/iter",
            "extra": "iterations: 404804\ncpu: 1726.3669380737347 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1411.0364033424628,
            "unit": "ns/iter",
            "extra": "iterations: 498663\ncpu: 1410.8797243830008 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1794.551468102495,
            "unit": "ns/iter",
            "extra": "iterations: 390436\ncpu: 1794.4037307010633 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 725.4733578869418,
            "unit": "ns/iter",
            "extra": "iterations: 971751\ncpu: 725.4137963326003 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2365.0451455008383,
            "unit": "ns/iter",
            "extra": "iterations: 294603\ncpu: 2364.8699809574246 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 169.89585212724432,
            "unit": "ns/iter",
            "extra": "iterations: 4281086\ncpu: 169.88192925813667 ns\nthreads: 1"
          }
        ]
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
        "date": 1726819487422,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1084.5774559572965,
            "unit": "ns/iter",
            "extra": "iterations: 647497\ncpu: 1084.5399438144116 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2114.360903967043,
            "unit": "ns/iter",
            "extra": "iterations: 329481\ncpu: 2114.3485238906037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 183.7015578382358,
            "unit": "ns/iter",
            "extra": "iterations: 3804888\ncpu: 183.69737742608987 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 151.82478391236222,
            "unit": "ns/iter",
            "extra": "iterations: 4605770\ncpu: 151.8197576083913 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3568.9417144588288,
            "unit": "ns/iter",
            "extra": "iterations: 191454\ncpu: 3568.8126025050396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1692.7491661923655,
            "unit": "ns/iter",
            "extra": "iterations: 417962\ncpu: 1692.6992094975142 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1748.1771047028278,
            "unit": "ns/iter",
            "extra": "iterations: 407516\ncpu: 1748.1263435055316 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1432.4138809173749,
            "unit": "ns/iter",
            "extra": "iterations: 485746\ncpu: 1432.3708399039847 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1796.347725765408,
            "unit": "ns/iter",
            "extra": "iterations: 396551\ncpu: 1796.3249619847113 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 733.5381483495338,
            "unit": "ns/iter",
            "extra": "iterations: 991537\ncpu: 733.5144033959408 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2408.1075373122685,
            "unit": "ns/iter",
            "extra": "iterations: 293805\ncpu: 2408.0767992375886 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 159.92495994911377,
            "unit": "ns/iter",
            "extra": "iterations: 4420626\ncpu: 159.91712825287664 ns\nthreads: 1"
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
        "date": 1726859411525,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1091.7019016665147,
            "unit": "ns/iter",
            "extra": "iterations: 644908\ncpu: 1091.6333042852623 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2114.5004389495566,
            "unit": "ns/iter",
            "extra": "iterations: 329195\ncpu: 2114.523483041966 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 188.09077139466245,
            "unit": "ns/iter",
            "extra": "iterations: 3726912\ncpu: 188.0946359881854 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 153.5125261904092,
            "unit": "ns/iter",
            "extra": "iterations: 4546035\ncpu: 153.50531287154632 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3700.289352801219,
            "unit": "ns/iter",
            "extra": "iterations: 192661\ncpu: 3700.2426853384986 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1705.9614633728283,
            "unit": "ns/iter",
            "extra": "iterations: 408235\ncpu: 1705.9985939471126 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1747.3192719379497,
            "unit": "ns/iter",
            "extra": "iterations: 400790\ncpu: 1747.3313655530321 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1427.9106410078869,
            "unit": "ns/iter",
            "extra": "iterations: 496156\ncpu: 1427.8238356484665 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1841.3473262599455,
            "unit": "ns/iter",
            "extra": "iterations: 384742\ncpu: 1841.197347833094 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 723.9696642422422,
            "unit": "ns/iter",
            "extra": "iterations: 973142\ncpu: 723.9383440443427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2417.2999078799603,
            "unit": "ns/iter",
            "extra": "iterations: 289839\ncpu: 2417.2251767360453 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 163.02414921871377,
            "unit": "ns/iter",
            "extra": "iterations: 4291526\ncpu: 163.0101367205979 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726937164242,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1099.680419438895,
            "unit": "ns/iter",
            "extra": "iterations: 637423\ncpu: 1099.6471997402039 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2127.231024956107,
            "unit": "ns/iter",
            "extra": "iterations: 327575\ncpu: 2127.0071800351066 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 201.64598630117217,
            "unit": "ns/iter",
            "extra": "iterations: 3735943\ncpu: 201.64371752995157 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 154.67408025809732,
            "unit": "ns/iter",
            "extra": "iterations: 4526596\ncpu: 154.67093529000607 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3644.8656233657716,
            "unit": "ns/iter",
            "extra": "iterations: 175916\ncpu: 3644.7910423156486 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1688.0388400066759,
            "unit": "ns/iter",
            "extra": "iterations: 414830\ncpu: 1687.9802593833613 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1822.1938109141336,
            "unit": "ns/iter",
            "extra": "iterations: 404874\ncpu: 1822.1914817943339 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1489.4100042700743,
            "unit": "ns/iter",
            "extra": "iterations: 489451\ncpu: 1489.3971245334074 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1806.3300164895954,
            "unit": "ns/iter",
            "extra": "iterations: 387517\ncpu: 1806.3263185873157 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 730.1348265515346,
            "unit": "ns/iter",
            "extra": "iterations: 968155\ncpu: 730.1262514783269 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2414.1310316580293,
            "unit": "ns/iter",
            "extra": "iterations: 292975\ncpu: 2414.10094035327 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 168.5694812717015,
            "unit": "ns/iter",
            "extra": "iterations: 4251455\ncpu: 168.5692832218619 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726941001821,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1072.1488220157507,
            "unit": "ns/iter",
            "extra": "iterations: 657564\ncpu: 1072.1125563443256 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2106.4476105455738,
            "unit": "ns/iter",
            "extra": "iterations: 332691\ncpu: 2106.3927879022876 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 184.91853167286337,
            "unit": "ns/iter",
            "extra": "iterations: 3797083\ncpu: 184.90922057800694 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 151.01272440363317,
            "unit": "ns/iter",
            "extra": "iterations: 4630551\ncpu: 151.0088216283549 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3639.095570093325,
            "unit": "ns/iter",
            "extra": "iterations: 195354\ncpu: 3638.938905781299 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1687.571627229883,
            "unit": "ns/iter",
            "extra": "iterations: 415645\ncpu: 1687.5092374502292 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1745.9663770913398,
            "unit": "ns/iter",
            "extra": "iterations: 404040\ncpu: 1745.890275715277 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1417.6420134954967,
            "unit": "ns/iter",
            "extra": "iterations: 496907\ncpu: 1417.5720788799501 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1806.6197879510853,
            "unit": "ns/iter",
            "extra": "iterations: 386892\ncpu: 1806.510682567748 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 715.8868903826683,
            "unit": "ns/iter",
            "extra": "iterations: 975284\ncpu: 715.8670243744402 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2371.016070134145,
            "unit": "ns/iter",
            "extra": "iterations: 292468\ncpu: 2370.9614145821056 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 161.54215793264063,
            "unit": "ns/iter",
            "extra": "iterations: 4331581\ncpu: 161.53903390009333 ns\nthreads: 1"
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
        "date": 1727115734375,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1124.7516135193764,
            "unit": "ns/iter",
            "extra": "iterations: 623017\ncpu: 1124.6437753704954 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2219.181088489953,
            "unit": "ns/iter",
            "extra": "iterations: 314454\ncpu: 2219.0119158923085 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 188.72426216577188,
            "unit": "ns/iter",
            "extra": "iterations: 3709607\ncpu: 188.71248841184524 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 154.74086221760112,
            "unit": "ns/iter",
            "extra": "iterations: 4527001\ncpu: 154.72989248290426 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3663.5800950389107,
            "unit": "ns/iter",
            "extra": "iterations: 191922\ncpu: 3663.409640374738 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1744.8957984735894,
            "unit": "ns/iter",
            "extra": "iterations: 392643\ncpu: 1744.7670937722035 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1809.1025454022401,
            "unit": "ns/iter",
            "extra": "iterations: 390783\ncpu: 1808.989260024105 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1467.2019172380367,
            "unit": "ns/iter",
            "extra": "iterations: 477562\ncpu: 1467.0576930325274 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1866.671226875222,
            "unit": "ns/iter",
            "extra": "iterations: 374325\ncpu: 1866.5153302611357 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 752.810658665689,
            "unit": "ns/iter",
            "extra": "iterations: 923549\ncpu: 752.7608605499012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2409.2308515524965,
            "unit": "ns/iter",
            "extra": "iterations: 289671\ncpu: 2409.149756102609 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 164.37836009369818,
            "unit": "ns/iter",
            "extra": "iterations: 4274732\ncpu: 164.37271459357012 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727117629638,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1070.430545460168,
            "unit": "ns/iter",
            "extra": "iterations: 643860\ncpu: 1070.3739586245458 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2206.7956584088975,
            "unit": "ns/iter",
            "extra": "iterations: 320067\ncpu: 2206.7162719055696 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 189.37367667295823,
            "unit": "ns/iter",
            "extra": "iterations: 3610691\ncpu: 189.36946722940297 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 159.83687713030267,
            "unit": "ns/iter",
            "extra": "iterations: 4383481\ncpu: 159.83408186324974 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3603.457103393002,
            "unit": "ns/iter",
            "extra": "iterations: 193302\ncpu: 3603.28929343721 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1723.82923747386,
            "unit": "ns/iter",
            "extra": "iterations: 403619\ncpu: 1723.7646964092382 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1805.3331304241638,
            "unit": "ns/iter",
            "extra": "iterations: 402479\ncpu: 1805.2660884170348 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1421.5981518667563,
            "unit": "ns/iter",
            "extra": "iterations: 496501\ncpu: 1421.558627273661 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1827.9558071480972,
            "unit": "ns/iter",
            "extra": "iterations: 383071\ncpu: 1827.8525965160534 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 757.6728419966686,
            "unit": "ns/iter",
            "extra": "iterations: 919519\ncpu: 757.6360477597532 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2447.887134594708,
            "unit": "ns/iter",
            "extra": "iterations: 286155\ncpu: 2447.7988362950164 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 171.1859210072774,
            "unit": "ns/iter",
            "extra": "iterations: 4163295\ncpu: 171.18686713288412 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1469.6460983569393,
            "unit": "ns/iter",
            "extra": "iterations: 477709\ncpu: 1469.6551750124038 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727118055739,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1068.3806690821775,
            "unit": "ns/iter",
            "extra": "iterations: 651340\ncpu: 1068.3665934842018 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2167.7456390669754,
            "unit": "ns/iter",
            "extra": "iterations: 323096\ncpu: 2167.739151831035 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 186.06058978528634,
            "unit": "ns/iter",
            "extra": "iterations: 3787107\ncpu: 186.06003104744602 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 156.30582160850665,
            "unit": "ns/iter",
            "extra": "iterations: 4478745\ncpu: 156.30141278416164 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3593.4061142355195,
            "unit": "ns/iter",
            "extra": "iterations: 193810\ncpu: 3593.3632010732135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1716.7446382848507,
            "unit": "ns/iter",
            "extra": "iterations: 410876\ncpu: 1716.7387021875206 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1760.9218499589288,
            "unit": "ns/iter",
            "extra": "iterations: 395598\ncpu: 1760.8061087265366 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1406.708472734892,
            "unit": "ns/iter",
            "extra": "iterations: 497065\ncpu: 1406.661118767164 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1831.2276060941203,
            "unit": "ns/iter",
            "extra": "iterations: 372099\ncpu: 1831.1055310549086 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 748.1414275887705,
            "unit": "ns/iter",
            "extra": "iterations: 943451\ncpu: 748.1270972207357 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2445.3707815120842,
            "unit": "ns/iter",
            "extra": "iterations: 287366\ncpu: 2445.224706471884 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 166.2516122456232,
            "unit": "ns/iter",
            "extra": "iterations: 4061571\ncpu: 166.24440444350216 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1420.7888262167417,
            "unit": "ns/iter",
            "extra": "iterations: 490738\ncpu: 1420.7330836413707 ns\nthreads: 1"
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
        "date": 1727119042384,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1051.5448399520749,
            "unit": "ns/iter",
            "extra": "iterations: 614597\ncpu: 1051.487394178624 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2181.3952227500613,
            "unit": "ns/iter",
            "extra": "iterations: 320561\ncpu: 2181.3246776744527 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 182.2082258966129,
            "unit": "ns/iter",
            "extra": "iterations: 3842572\ncpu: 182.19986300842248 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 154.25007169340134,
            "unit": "ns/iter",
            "extra": "iterations: 4536679\ncpu: 154.243962599073 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3579.207584481475,
            "unit": "ns/iter",
            "extra": "iterations: 194687\ncpu: 3579.0316251213467 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1726.7254181536782,
            "unit": "ns/iter",
            "extra": "iterations: 407984\ncpu: 1726.595854249187 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1721.8313187799715,
            "unit": "ns/iter",
            "extra": "iterations: 406459\ncpu: 1721.727682250856 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1391.3917847121959,
            "unit": "ns/iter",
            "extra": "iterations: 501431\ncpu: 1391.3443504689578 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1808.4795426216365,
            "unit": "ns/iter",
            "extra": "iterations: 387513\ncpu: 1808.484063760441 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 740.3379896080169,
            "unit": "ns/iter",
            "extra": "iterations: 951118\ncpu: 740.338621495967 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2385.6421335134182,
            "unit": "ns/iter",
            "extra": "iterations: 292869\ncpu: 2385.6333002127253 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 163.68814235146954,
            "unit": "ns/iter",
            "extra": "iterations: 4268983\ncpu: 163.6861791204137 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1418.1163998049128,
            "unit": "ns/iter",
            "extra": "iterations: 492140\ncpu: 1418.086977282886 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727119817688,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1065.6927341507485,
            "unit": "ns/iter",
            "extra": "iterations: 643944\ncpu: 1065.6215136719964 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2213.5482720835466,
            "unit": "ns/iter",
            "extra": "iterations: 316653\ncpu: 2213.47145929456 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 189.7473042650364,
            "unit": "ns/iter",
            "extra": "iterations: 3690181\ncpu: 189.7378087958286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 162.1801057568127,
            "unit": "ns/iter",
            "extra": "iterations: 4314615\ncpu: 162.17435205690418 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3631.2486955978106,
            "unit": "ns/iter",
            "extra": "iterations: 191467\ncpu: 3631.007698454567 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1751.2367485932516,
            "unit": "ns/iter",
            "extra": "iterations: 398203\ncpu: 1751.1269151663853 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1720.6624010972555,
            "unit": "ns/iter",
            "extra": "iterations: 408230\ncpu: 1720.5620875486863 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1407.5350087667568,
            "unit": "ns/iter",
            "extra": "iterations: 496190\ncpu: 1407.4550877687964 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1801.291847665703,
            "unit": "ns/iter",
            "extra": "iterations: 389275\ncpu: 1801.2153516151795 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 437.65128083865466,
            "unit": "ns/iter",
            "extra": "iterations: 1602817\ncpu: 437.62023362617214 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2369.2337482899075,
            "unit": "ns/iter",
            "extra": "iterations: 294569\ncpu: 2369.1297930196333 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 176.95924234654288,
            "unit": "ns/iter",
            "extra": "iterations: 4097071\ncpu: 176.94698773831365 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1048.306034108336,
            "unit": "ns/iter",
            "extra": "iterations: 667870\ncpu: 1048.2296659529559 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727135950329,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1080.280900280286,
            "unit": "ns/iter",
            "extra": "iterations: 640245\ncpu: 1080.2847550547056 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2163.606427217475,
            "unit": "ns/iter",
            "extra": "iterations: 323437\ncpu: 2163.5736016596748 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 190.93504322332757,
            "unit": "ns/iter",
            "extra": "iterations: 3682849\ncpu: 190.9356995087227 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 154.94710311004232,
            "unit": "ns/iter",
            "extra": "iterations: 4516447\ncpu: 154.94526648934436 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3616.8174258280355,
            "unit": "ns/iter",
            "extra": "iterations: 194447\ncpu: 3616.767160203035 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1734.0099090687213,
            "unit": "ns/iter",
            "extra": "iterations: 398322\ncpu: 1733.9630374420692 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1810.8329566717025,
            "unit": "ns/iter",
            "extra": "iterations: 390713\ncpu: 1810.804516358554 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1461.6778163892707,
            "unit": "ns/iter",
            "extra": "iterations: 477979\ncpu: 1461.6490933702125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1875.6886557299497,
            "unit": "ns/iter",
            "extra": "iterations: 371897\ncpu: 1875.6232478347524 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 438.1374217808273,
            "unit": "ns/iter",
            "extra": "iterations: 1598553\ncpu: 438.1285556375043 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2399.858219173424,
            "unit": "ns/iter",
            "extra": "iterations: 290674\ncpu: 2399.8332186573243 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 166.45216363358145,
            "unit": "ns/iter",
            "extra": "iterations: 4197476\ncpu: 166.44847570301744 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1042.8328403325017,
            "unit": "ns/iter",
            "extra": "iterations: 678836\ncpu: 1042.8256810186872 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727140972238,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1110.1166426863015,
            "unit": "ns/iter",
            "extra": "iterations: 621342\ncpu: 1110.0425450074197 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2218.3169342441192,
            "unit": "ns/iter",
            "extra": "iterations: 315485\ncpu: 2218.231082301853 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 194.8689936764266,
            "unit": "ns/iter",
            "extra": "iterations: 3586262\ncpu: 194.86347455930434 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 184.86552430352705,
            "unit": "ns/iter",
            "extra": "iterations: 3802702\ncpu: 184.86120316553865 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3609.9667494178593,
            "unit": "ns/iter",
            "extra": "iterations: 193350\ncpu: 3609.8824825446095 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1758.3993558413356,
            "unit": "ns/iter",
            "extra": "iterations: 399591\ncpu: 1758.2691151702602 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1765.4467936159392,
            "unit": "ns/iter",
            "extra": "iterations: 397114\ncpu: 1765.4517191536925 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1443.5711314935663,
            "unit": "ns/iter",
            "extra": "iterations: 487126\ncpu: 1443.5449000874507 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1844.3738472308212,
            "unit": "ns/iter",
            "extra": "iterations: 374316\ncpu: 1844.3803738018103 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 450.92516060517704,
            "unit": "ns/iter",
            "extra": "iterations: 1555678\ncpu: 450.9105309710615 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2335.4352438926467,
            "unit": "ns/iter",
            "extra": "iterations: 300296\ncpu: 2335.4083304472906 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 194.37432746549678,
            "unit": "ns/iter",
            "extra": "iterations: 3586619\ncpu: 194.36779903301687 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1083.0352855605051,
            "unit": "ns/iter",
            "extra": "iterations: 654432\ncpu: 1083.0112861229265 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727141699414,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1081.4049435206828,
            "unit": "ns/iter",
            "extra": "iterations: 643954\ncpu: 1081.3550238060484 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2118.2958486793136,
            "unit": "ns/iter",
            "extra": "iterations: 331798\ncpu: 2118.1716978402524 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 186.47089239406955,
            "unit": "ns/iter",
            "extra": "iterations: 3751717\ncpu: 186.4631367451223 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 151.9816456060353,
            "unit": "ns/iter",
            "extra": "iterations: 4604565\ncpu: 151.97594582767317 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3612.7995277780747,
            "unit": "ns/iter",
            "extra": "iterations: 193553\ncpu: 3612.677230526003 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1726.8388361783393,
            "unit": "ns/iter",
            "extra": "iterations: 406729\ncpu: 1726.7250232956094 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1675.2797145601612,
            "unit": "ns/iter",
            "extra": "iterations: 421805\ncpu: 1675.1979042448527 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1376.9560273609372,
            "unit": "ns/iter",
            "extra": "iterations: 505246\ncpu: 1376.91364404666 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1749.3730262794438,
            "unit": "ns/iter",
            "extra": "iterations: 398106\ncpu: 1749.3289124002167 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 427.45442956556667,
            "unit": "ns/iter",
            "extra": "iterations: 1630871\ncpu: 427.43235179238593 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2230.162416685263,
            "unit": "ns/iter",
            "extra": "iterations: 313570\ncpu: 2230.1362566572043 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 166.84382180460472,
            "unit": "ns/iter",
            "extra": "iterations: 4344691\ncpu: 166.83989333188495 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1011.9670613942842,
            "unit": "ns/iter",
            "extra": "iterations: 691954\ncpu: 1011.9292843165875 ns\nthreads: 1"
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
        "date": 1727188719763,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1076.4637881966894,
            "unit": "ns/iter",
            "extra": "iterations: 615628\ncpu: 1076.4137774760081 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2122.732776038021,
            "unit": "ns/iter",
            "extra": "iterations: 331123\ncpu: 2122.538700120498 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 208.70729687980884,
            "unit": "ns/iter",
            "extra": "iterations: 3751535\ncpu: 208.6374537356042 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 152.07851128558195,
            "unit": "ns/iter",
            "extra": "iterations: 4574336\ncpu: 152.06454357528597 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3615.604254354134,
            "unit": "ns/iter",
            "extra": "iterations: 194107\ncpu: 3615.4826513211765 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1726.589930632912,
            "unit": "ns/iter",
            "extra": "iterations: 407831\ncpu: 1726.552003158171 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1680.1472054357432,
            "unit": "ns/iter",
            "extra": "iterations: 417668\ncpu: 1680.099279810759 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1424.5247117132176,
            "unit": "ns/iter",
            "extra": "iterations: 508868\ncpu: 1424.4616698240022 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1768.9546452451887,
            "unit": "ns/iter",
            "extra": "iterations: 398106\ncpu: 1768.8570782655836 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 425.47887452287773,
            "unit": "ns/iter",
            "extra": "iterations: 1646093\ncpu: 425.46754284235465 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2242.1670481347887,
            "unit": "ns/iter",
            "extra": "iterations: 314574\ncpu: 2242.0813926134997 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 161.16268994379922,
            "unit": "ns/iter",
            "extra": "iterations: 4353459\ncpu: 161.15899219448258 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1016.2806578436084,
            "unit": "ns/iter",
            "extra": "iterations: 694390\ncpu: 1016.2417474330003 ns\nthreads: 1"
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
        "date": 1727189712190,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1086.1656501631442,
            "unit": "ns/iter",
            "extra": "iterations: 643054\ncpu: 1086.1032075066792 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2171.6921907462774,
            "unit": "ns/iter",
            "extra": "iterations: 322963\ncpu: 2171.549279638844 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 192.36244919915367,
            "unit": "ns/iter",
            "extra": "iterations: 3732959\ncpu: 192.35298780404503 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 154.58249432593706,
            "unit": "ns/iter",
            "extra": "iterations: 4531148\ncpu: 154.57206672569515 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3643.6086913436125,
            "unit": "ns/iter",
            "extra": "iterations: 191731\ncpu: 3643.298308567731 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1754.7569396178653,
            "unit": "ns/iter",
            "extra": "iterations: 401427\ncpu: 1754.6061948996955 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1731.6284931316325,
            "unit": "ns/iter",
            "extra": "iterations: 402862\ncpu: 1731.504922281078 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1414.9932979061575,
            "unit": "ns/iter",
            "extra": "iterations: 499993\ncpu: 1414.8807843309805 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1812.4213207835855,
            "unit": "ns/iter",
            "extra": "iterations: 385877\ncpu: 1812.278518802622 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 437.9417457481953,
            "unit": "ns/iter",
            "extra": "iterations: 1590974\ncpu: 437.91189359474214 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2292.662312260797,
            "unit": "ns/iter",
            "extra": "iterations: 307275\ncpu: 2292.4451257017313 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 162.14460441546856,
            "unit": "ns/iter",
            "extra": "iterations: 4334674\ncpu: 162.13282498291687 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1037.9650407992237,
            "unit": "ns/iter",
            "extra": "iterations: 677218\ncpu: 1037.9000011813027 ns\nthreads: 1"
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
        "date": 1727191090529,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1115.8767887995439,
            "unit": "ns/iter",
            "extra": "iterations: 626258\ncpu: 1115.8368867144213 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2163.2623386930886,
            "unit": "ns/iter",
            "extra": "iterations: 322522\ncpu: 2163.2110491687386 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 193.76765554957774,
            "unit": "ns/iter",
            "extra": "iterations: 3609460\ncpu: 193.75802474608386 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 153.97043513695044,
            "unit": "ns/iter",
            "extra": "iterations: 4569343\ncpu: 153.95776088597424 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3638.886743767821,
            "unit": "ns/iter",
            "extra": "iterations: 194550\ncpu: 3638.689560524285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1721.661442416198,
            "unit": "ns/iter",
            "extra": "iterations: 412946\ncpu: 1721.5167043632807 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1693.0539322377183,
            "unit": "ns/iter",
            "extra": "iterations: 414891\ncpu: 1692.9368460631822 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1386.7967707010762,
            "unit": "ns/iter",
            "extra": "iterations: 502462\ncpu: 1386.714067929516 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1775.7462596264422,
            "unit": "ns/iter",
            "extra": "iterations: 390068\ncpu: 1775.7282243096067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 442.6673144955645,
            "unit": "ns/iter",
            "extra": "iterations: 1588897\ncpu: 442.6175157986963 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2235.949303834859,
            "unit": "ns/iter",
            "extra": "iterations: 312785\ncpu: 2235.8092843326854 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 165.0182919079091,
            "unit": "ns/iter",
            "extra": "iterations: 4240673\ncpu: 165.00962394412372 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1063.5559147843544,
            "unit": "ns/iter",
            "extra": "iterations: 659128\ncpu: 1063.4977303346252 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727200250042,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1105.2789787653883,
            "unit": "ns/iter",
            "extra": "iterations: 636837\ncpu: 1105.2167948784386 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2197.6591587254943,
            "unit": "ns/iter",
            "extra": "iterations: 318374\ncpu: 2197.534962025794 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 197.2115937342439,
            "unit": "ns/iter",
            "extra": "iterations: 3587110\ncpu: 197.2022753693085 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 152.92585128645655,
            "unit": "ns/iter",
            "extra": "iterations: 4575575\ncpu: 152.91731465444238 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3637.977512258056,
            "unit": "ns/iter",
            "extra": "iterations: 192327\ncpu: 3637.635828562813 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1693.9378562461045,
            "unit": "ns/iter",
            "extra": "iterations: 415794\ncpu: 1693.826120627041 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1704.1378042805152,
            "unit": "ns/iter",
            "extra": "iterations: 418405\ncpu: 1703.984362041562 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1371.2876869606635,
            "unit": "ns/iter",
            "extra": "iterations: 513009\ncpu: 1371.2229473557002 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1772.9167623508865,
            "unit": "ns/iter",
            "extra": "iterations: 397140\ncpu: 1772.8805030971437 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 428.13967670051426,
            "unit": "ns/iter",
            "extra": "iterations: 1637553\ncpu: 428.11238048478424 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2215.8420651534793,
            "unit": "ns/iter",
            "extra": "iterations: 316238\ncpu: 2215.7046970952256 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 164.3021176412981,
            "unit": "ns/iter",
            "extra": "iterations: 4161753\ncpu: 164.29872772363 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1024.1001825349772,
            "unit": "ns/iter",
            "extra": "iterations: 684800\ncpu: 1024.0484185163552 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727204275861,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1044.1275993414176,
            "unit": "ns/iter",
            "extra": "iterations: 668679\ncpu: 1044.1147531177141 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2253.9619527285727,
            "unit": "ns/iter",
            "extra": "iterations: 310929\ncpu: 2253.8361330078574 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 185.08711706108392,
            "unit": "ns/iter",
            "extra": "iterations: 3772338\ncpu: 185.0778315728866 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 149.8024205286866,
            "unit": "ns/iter",
            "extra": "iterations: 4671624\ncpu: 149.79307131738332 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3554.7007167457173,
            "unit": "ns/iter",
            "extra": "iterations: 196583\ncpu: 3554.4780474405193 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1699.0355779382141,
            "unit": "ns/iter",
            "extra": "iterations: 412025\ncpu: 1698.9162186760498 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1679.3683079090351,
            "unit": "ns/iter",
            "extra": "iterations: 416331\ncpu: 1679.28697358592 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1379.1003318895787,
            "unit": "ns/iter",
            "extra": "iterations: 505891\ncpu: 1379.0007847540269 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1764.9340963888935,
            "unit": "ns/iter",
            "extra": "iterations: 396913\ncpu: 1764.840163965404 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 423.08791656901633,
            "unit": "ns/iter",
            "extra": "iterations: 1655308\ncpu: 423.04959560396077 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2158.753480849398,
            "unit": "ns/iter",
            "extra": "iterations: 323987\ncpu: 2158.6750702960344 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 158.39914855119605,
            "unit": "ns/iter",
            "extra": "iterations: 4447948\ncpu: 158.38483745763233 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1011.994460640029,
            "unit": "ns/iter",
            "extra": "iterations: 690513\ncpu: 1011.9369946691792 ns\nthreads: 1"
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
        "date": 1727204978093,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1052.0559514763615,
            "unit": "ns/iter",
            "extra": "iterations: 660626\ncpu: 1051.9921559248348 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2079.844462090133,
            "unit": "ns/iter",
            "extra": "iterations: 336246\ncpu: 2079.7436162809377 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 191.04431147937782,
            "unit": "ns/iter",
            "extra": "iterations: 3646572\ncpu: 191.0341243776346 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 154.28472077717916,
            "unit": "ns/iter",
            "extra": "iterations: 4546226\ncpu: 154.2789535759992 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3560.2936183905467,
            "unit": "ns/iter",
            "extra": "iterations: 189576\ncpu: 3559.994503523651 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1760.5365326963329,
            "unit": "ns/iter",
            "extra": "iterations: 404268\ncpu: 1760.428406403673 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1748.3181544797314,
            "unit": "ns/iter",
            "extra": "iterations: 392388\ncpu: 1748.1470636207016 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1417.4562976799064,
            "unit": "ns/iter",
            "extra": "iterations: 493658\ncpu: 1417.3768276823246 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1827.6486857540363,
            "unit": "ns/iter",
            "extra": "iterations: 380218\ncpu: 1827.4683181753603 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 429.33181023873647,
            "unit": "ns/iter",
            "extra": "iterations: 1632641\ncpu: 429.30825821475776 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2266.6874858609253,
            "unit": "ns/iter",
            "extra": "iterations: 309426\ncpu: 2266.4993051650436 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 163.75400355403275,
            "unit": "ns/iter",
            "extra": "iterations: 4277387\ncpu: 163.74581701398543 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1016.4682100216829,
            "unit": "ns/iter",
            "extra": "iterations: 689148\ncpu: 1016.4409052917524 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727207894876,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1110.0602148625035,
            "unit": "ns/iter",
            "extra": "iterations: 629612\ncpu: 1110.0643761554734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2218.2713650934725,
            "unit": "ns/iter",
            "extra": "iterations: 315070\ncpu: 2218.2691497127626 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 189.57407917143155,
            "unit": "ns/iter",
            "extra": "iterations: 3680191\ncpu: 189.57543888347092 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 156.1978044053039,
            "unit": "ns/iter",
            "extra": "iterations: 4475234\ncpu: 156.1977315599586 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3626.8852220171734,
            "unit": "ns/iter",
            "extra": "iterations: 192868\ncpu: 3626.9424787937864 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1717.632699720749,
            "unit": "ns/iter",
            "extra": "iterations: 406768\ncpu: 1717.588809837548 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1695.148604182702,
            "unit": "ns/iter",
            "extra": "iterations: 408757\ncpu: 1695.1612645165694 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1397.2887774639264,
            "unit": "ns/iter",
            "extra": "iterations: 502979\ncpu: 1397.258684756222 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1785.9994968972323,
            "unit": "ns/iter",
            "extra": "iterations: 391570\ncpu: 1785.982434813701 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 447.239959158991,
            "unit": "ns/iter",
            "extra": "iterations: 1564112\ncpu: 447.23859928189324 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2196.5052960358576,
            "unit": "ns/iter",
            "extra": "iterations: 319201\ncpu: 2196.540361715656 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 170.14066219086402,
            "unit": "ns/iter",
            "extra": "iterations: 4038292\ncpu: 170.1369447776438 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1059.3226163180464,
            "unit": "ns/iter",
            "extra": "iterations: 664644\ncpu: 1059.3203474341162 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727208951148,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1078.5516817420826,
            "unit": "ns/iter",
            "extra": "iterations: 608387\ncpu: 1078.4856826329294 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2115.948358997239,
            "unit": "ns/iter",
            "extra": "iterations: 330164\ncpu: 2115.865745508293 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 182.27853712693434,
            "unit": "ns/iter",
            "extra": "iterations: 3843423\ncpu: 182.26941322878065 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 148.80160675143736,
            "unit": "ns/iter",
            "extra": "iterations: 4243718\ncpu: 148.80151579346222 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3696.492124170553,
            "unit": "ns/iter",
            "extra": "iterations: 188869\ncpu: 3696.3115122121703 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1730.5895011566058,
            "unit": "ns/iter",
            "extra": "iterations: 401168\ncpu: 1730.5209039604351 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1707.670617011583,
            "unit": "ns/iter",
            "extra": "iterations: 417010\ncpu: 1707.668211793482 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1384.0817340294413,
            "unit": "ns/iter",
            "extra": "iterations: 489588\ncpu: 1384.0803062983582 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1771.6200947474924,
            "unit": "ns/iter",
            "extra": "iterations: 395367\ncpu: 1771.5803544554808 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 447.4151276170305,
            "unit": "ns/iter",
            "extra": "iterations: 1590971\ncpu: 447.40346618511563 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2235.2638188051224,
            "unit": "ns/iter",
            "extra": "iterations: 311532\ncpu: 2235.239811640539 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 162.6209190494121,
            "unit": "ns/iter",
            "extra": "iterations: 4307146\ncpu: 162.61752840512034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1028.4623142728847,
            "unit": "ns/iter",
            "extra": "iterations: 677405\ncpu: 1028.4346764490965 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727212802993,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1122.0307221031926,
            "unit": "ns/iter",
            "extra": "iterations: 616657\ncpu: 1121.9993724225944 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2255.192029277967,
            "unit": "ns/iter",
            "extra": "iterations: 309859\ncpu: 2255.1465311641746 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 189.27067767046773,
            "unit": "ns/iter",
            "extra": "iterations: 3679694\ncpu: 189.26659526580195 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 156.18150652605254,
            "unit": "ns/iter",
            "extra": "iterations: 4661320\ncpu: 156.1777286262261 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3708.650585012668,
            "unit": "ns/iter",
            "extra": "iterations: 188372\ncpu: 3708.5498057036057 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1704.057804495512,
            "unit": "ns/iter",
            "extra": "iterations: 410712\ncpu: 1704.0219253394105 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1752.797150350641,
            "unit": "ns/iter",
            "extra": "iterations: 401874\ncpu: 1752.7614326878575 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1440.4231419405182,
            "unit": "ns/iter",
            "extra": "iterations: 486260\ncpu: 1440.4046723974816 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1865.3309717300517,
            "unit": "ns/iter",
            "extra": "iterations: 375310\ncpu: 1865.3329407689675 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 455.09972468963565,
            "unit": "ns/iter",
            "extra": "iterations: 1540080\ncpu: 455.0796413173344 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2407.8136062486897,
            "unit": "ns/iter",
            "extra": "iterations: 286780\ncpu: 2407.763348211168 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 164.82053251235413,
            "unit": "ns/iter",
            "extra": "iterations: 4161556\ncpu: 164.81746226651762 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1090.7285046326929,
            "unit": "ns/iter",
            "extra": "iterations: 651024\ncpu: 1090.692621162967 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727216357175,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1081.491079586538,
            "unit": "ns/iter",
            "extra": "iterations: 649017\ncpu: 1081.4256868464151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2168.2793951669073,
            "unit": "ns/iter",
            "extra": "iterations: 323395\ncpu: 2168.200587516814 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 183.02565297484824,
            "unit": "ns/iter",
            "extra": "iterations: 3830316\ncpu: 183.02308008007705 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 148.46443616866725,
            "unit": "ns/iter",
            "extra": "iterations: 4711205\ncpu: 148.46213293626576 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3696.9070253955992,
            "unit": "ns/iter",
            "extra": "iterations: 188815\ncpu: 3696.748865291423 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1678.1769256914367,
            "unit": "ns/iter",
            "extra": "iterations: 411930\ncpu: 1678.1610613453722 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1668.1171675764215,
            "unit": "ns/iter",
            "extra": "iterations: 417607\ncpu: 1668.0686937718972 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1367.2766892342122,
            "unit": "ns/iter",
            "extra": "iterations: 502047\ncpu: 1367.203761799194 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1769.7571061651436,
            "unit": "ns/iter",
            "extra": "iterations: 395572\ncpu: 1769.6356693598132 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 450.4877495227219,
            "unit": "ns/iter",
            "extra": "iterations: 1600305\ncpu: 450.4764373041389 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2189.8161185776953,
            "unit": "ns/iter",
            "extra": "iterations: 316889\ncpu: 2189.666264843524 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 162.25217472883875,
            "unit": "ns/iter",
            "extra": "iterations: 4220986\ncpu: 162.2459873119695 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1051.2812024503626,
            "unit": "ns/iter",
            "extra": "iterations: 680211\ncpu: 1051.2022563586893 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3298.053873519585,
            "unit": "ns/iter",
            "extra": "iterations: 213630\ncpu: 3297.9832046060906 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727279288797,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1086.762172630567,
            "unit": "ns/iter",
            "extra": "iterations: 649572\ncpu: 1086.7071733387525 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2166.2268831181245,
            "unit": "ns/iter",
            "extra": "iterations: 322351\ncpu: 2166.041380358678 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 183.37767053245938,
            "unit": "ns/iter",
            "extra": "iterations: 3815344\ncpu: 183.37505713770497 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 148.7427151861576,
            "unit": "ns/iter",
            "extra": "iterations: 4701836\ncpu: 148.74209861849718 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3699.979010828632,
            "unit": "ns/iter",
            "extra": "iterations: 188764\ncpu: 3699.951701595646 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1689.324224510813,
            "unit": "ns/iter",
            "extra": "iterations: 407517\ncpu: 1689.3106618864977 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1666.2076396849384,
            "unit": "ns/iter",
            "extra": "iterations: 422164\ncpu: 1666.1833505462334 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1356.5593355396372,
            "unit": "ns/iter",
            "extra": "iterations: 515787\ncpu: 1356.470157254837 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1762.2561405987287,
            "unit": "ns/iter",
            "extra": "iterations: 396134\ncpu: 1762.1041541498587 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 456.5433910742592,
            "unit": "ns/iter",
            "extra": "iterations: 1581316\ncpu: 456.53701537200664 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2207.6285815540114,
            "unit": "ns/iter",
            "extra": "iterations: 318856\ncpu: 2207.568002483881 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 159.97304629483858,
            "unit": "ns/iter",
            "extra": "iterations: 4384592\ncpu: 159.96264806394737 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1054.207324711776,
            "unit": "ns/iter",
            "extra": "iterations: 668941\ncpu: 1054.1813418522702 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3256.3524935668584,
            "unit": "ns/iter",
            "extra": "iterations: 216838\ncpu: 3256.1501074534926 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727281178421,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1106.2116825731616,
            "unit": "ns/iter",
            "extra": "iterations: 643865\ncpu: 1106.1859038773655 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2080.408367027754,
            "unit": "ns/iter",
            "extra": "iterations: 334623\ncpu: 2080.225898996781 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 190.639822168033,
            "unit": "ns/iter",
            "extra": "iterations: 3686851\ncpu: 190.6230799671589 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 152.0237084427281,
            "unit": "ns/iter",
            "extra": "iterations: 4581659\ncpu: 152.0182789683824 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3825.9446512766244,
            "unit": "ns/iter",
            "extra": "iterations: 183455\ncpu: 3825.735477365024 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1762.1335632402224,
            "unit": "ns/iter",
            "extra": "iterations: 399002\ncpu: 1762.0118545771682 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1713.335743035839,
            "unit": "ns/iter",
            "extra": "iterations: 415404\ncpu: 1713.2958252688957 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1382.0090802126715,
            "unit": "ns/iter",
            "extra": "iterations: 508248\ncpu: 1381.9759684248638 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1774.0379389342697,
            "unit": "ns/iter",
            "extra": "iterations: 399405\ncpu: 1773.9856536598186 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 431.5402829585474,
            "unit": "ns/iter",
            "extra": "iterations: 1626457\ncpu: 431.5267849073167 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2214.0594964447787,
            "unit": "ns/iter",
            "extra": "iterations: 317582\ncpu: 2214.0129194979577 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 156.73254966742692,
            "unit": "ns/iter",
            "extra": "iterations: 4477078\ncpu: 156.72966676032917 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1026.2589567885332,
            "unit": "ns/iter",
            "extra": "iterations: 690119\ncpu: 1026.199766996706 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3455.7298949976284,
            "unit": "ns/iter",
            "extra": "iterations: 204091\ncpu: 3455.6037404883186 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727282478175,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1144.886419544073,
            "unit": "ns/iter",
            "extra": "iterations: 602859\ncpu: 1144.8272448449802 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2233.0712088424407,
            "unit": "ns/iter",
            "extra": "iterations: 309147\ncpu: 2232.990696982342 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 192.15144585900634,
            "unit": "ns/iter",
            "extra": "iterations: 3652500\ncpu: 192.14986146475022 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 165.37625533963978,
            "unit": "ns/iter",
            "extra": "iterations: 4234611\ncpu: 165.37392431087525 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3871.4070981207715,
            "unit": "ns/iter",
            "extra": "iterations: 182499\ncpu: 3871.349377256862 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1724.3231281926628,
            "unit": "ns/iter",
            "extra": "iterations: 398198\ncpu: 1724.2755162004846 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1745.0211468761843,
            "unit": "ns/iter",
            "extra": "iterations: 403653\ncpu: 1744.9570249694657 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1428.7138015485257,
            "unit": "ns/iter",
            "extra": "iterations: 490387\ncpu: 1428.697673470139 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1819.809081497484,
            "unit": "ns/iter",
            "extra": "iterations: 383483\ncpu: 1819.8104713898629 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 443.59374756858887,
            "unit": "ns/iter",
            "extra": "iterations: 1580857\ncpu: 443.5871290066088 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2320.8978099025844,
            "unit": "ns/iter",
            "extra": "iterations: 300078\ncpu: 2320.7847226387807 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 173.6149479110131,
            "unit": "ns/iter",
            "extra": "iterations: 4030891\ncpu: 173.61296174964792 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1056.2267174775675,
            "unit": "ns/iter",
            "extra": "iterations: 670460\ncpu: 1056.2260373474937 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3374.029681809312,
            "unit": "ns/iter",
            "extra": "iterations: 208680\ncpu: 3374.0332902051036 ns\nthreads: 1"
          }
        ]
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
        "date": 1727282833564,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1084.2628125063382,
            "unit": "ns/iter",
            "extra": "iterations: 642907\ncpu: 1084.2450401068893 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2084.7828775105,
            "unit": "ns/iter",
            "extra": "iterations: 337229\ncpu: 2084.7702836944636 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 187.62702243044245,
            "unit": "ns/iter",
            "extra": "iterations: 3743083\ncpu: 187.6193554885104 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 149.73657619585964,
            "unit": "ns/iter",
            "extra": "iterations: 4675910\ncpu: 149.7262015308251 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3800.2343430055553,
            "unit": "ns/iter",
            "extra": "iterations: 183624\ncpu: 3800.0290049231044 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1776.7145834576982,
            "unit": "ns/iter",
            "extra": "iterations: 402552\ncpu: 1776.6593558099332 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1718.2933463290074,
            "unit": "ns/iter",
            "extra": "iterations: 414493\ncpu: 1718.1713466813676 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1400.3903739577177,
            "unit": "ns/iter",
            "extra": "iterations: 500725\ncpu: 1400.3167926506549 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1783.0828287768607,
            "unit": "ns/iter",
            "extra": "iterations: 392424\ncpu: 1782.9490678449795 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 442.0810925378436,
            "unit": "ns/iter",
            "extra": "iterations: 1582920\ncpu: 442.05178657165254 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2237.757952197645,
            "unit": "ns/iter",
            "extra": "iterations: 313624\ncpu: 2237.6066372471487 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 158.87581087704515,
            "unit": "ns/iter",
            "extra": "iterations: 4303211\ncpu: 158.8674520027022 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1042.276857378948,
            "unit": "ns/iter",
            "extra": "iterations: 672776\ncpu: 1042.2068905549563 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3345.549420750472,
            "unit": "ns/iter",
            "extra": "iterations: 207251\ncpu: 3345.2656054735603 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727295854385,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1083.605951275957,
            "unit": "ns/iter",
            "extra": "iterations: 630285\ncpu: 1083.5258049929796 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2162.576061326196,
            "unit": "ns/iter",
            "extra": "iterations: 322733\ncpu: 2162.4878831727774 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 187.69759480162287,
            "unit": "ns/iter",
            "extra": "iterations: 3723934\ncpu: 187.6929494453983 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 149.04782585301794,
            "unit": "ns/iter",
            "extra": "iterations: 4702143\ncpu: 149.04801534109026 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3844.9682638729955,
            "unit": "ns/iter",
            "extra": "iterations: 181087\ncpu: 3844.867373141088 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1739.0819118066975,
            "unit": "ns/iter",
            "extra": "iterations: 401505\ncpu: 1739.0130060646823 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1677.8151162733361,
            "unit": "ns/iter",
            "extra": "iterations: 419442\ncpu: 1677.760078866685 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1376.6150802071031,
            "unit": "ns/iter",
            "extra": "iterations: 508932\ncpu: 1376.6116455636504 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1768.8486471965086,
            "unit": "ns/iter",
            "extra": "iterations: 398321\ncpu: 1768.781427542111 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 436.39480720328856,
            "unit": "ns/iter",
            "extra": "iterations: 1619089\ncpu: 436.3895344851331 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2313.4937184184296,
            "unit": "ns/iter",
            "extra": "iterations: 301994\ncpu: 2313.472105406062 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 159.46706452837373,
            "unit": "ns/iter",
            "extra": "iterations: 4388627\ncpu: 159.46520039183105 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1032.865432650264,
            "unit": "ns/iter",
            "extra": "iterations: 682595\ncpu: 1032.8310857829326 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3186.9812323824603,
            "unit": "ns/iter",
            "extra": "iterations: 217822\ncpu: 3186.9827290172716 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727297614359,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1108.4291969617295,
            "unit": "ns/iter",
            "extra": "iterations: 628264\ncpu: 1108.360572943858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2124.43887056934,
            "unit": "ns/iter",
            "extra": "iterations: 329334\ncpu: 2124.253851712851 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 193.04444233935965,
            "unit": "ns/iter",
            "extra": "iterations: 3610341\ncpu: 193.0292232783552 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 155.47083019778393,
            "unit": "ns/iter",
            "extra": "iterations: 4499482\ncpu: 155.45867168709643 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3711.145742618348,
            "unit": "ns/iter",
            "extra": "iterations: 188778\ncpu: 3710.831325684137 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1800.1448756738755,
            "unit": "ns/iter",
            "extra": "iterations: 390666\ncpu: 1799.9544009460756 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1685.9178445294183,
            "unit": "ns/iter",
            "extra": "iterations: 410843\ncpu: 1685.7448003251848 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1379.7886205312961,
            "unit": "ns/iter",
            "extra": "iterations: 507159\ncpu: 1379.7369306272794 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1796.243986708403,
            "unit": "ns/iter",
            "extra": "iterations: 393628\ncpu: 1796.1764330789504 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 461.49715817209096,
            "unit": "ns/iter",
            "extra": "iterations: 1518213\ncpu: 461.48873840495276 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2250.5483698658963,
            "unit": "ns/iter",
            "extra": "iterations: 310772\ncpu: 2250.4963928539282 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 167.01125131414582,
            "unit": "ns/iter",
            "extra": "iterations: 4185200\ncpu: 167.01148833986446 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1065.6506109967647,
            "unit": "ns/iter",
            "extra": "iterations: 658023\ncpu: 1065.595269466265 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3513.1180590875083,
            "unit": "ns/iter",
            "extra": "iterations: 208438\ncpu: 3513.088064556367 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727299406381,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1096.9453544605335,
            "unit": "ns/iter",
            "extra": "iterations: 635642\ncpu: 1096.9127763741226 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2212.8462765337235,
            "unit": "ns/iter",
            "extra": "iterations: 316627\ncpu: 2212.757196954145 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 197.2593092269131,
            "unit": "ns/iter",
            "extra": "iterations: 3545998\ncpu: 197.25439100642475 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 166.5087502242462,
            "unit": "ns/iter",
            "extra": "iterations: 4202978\ncpu: 166.50573022271362 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3440.316378407872,
            "unit": "ns/iter",
            "extra": "iterations: 199647\ncpu: 3440.0643636017567 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1775.3792124094132,
            "unit": "ns/iter",
            "extra": "iterations: 395053\ncpu: 1775.3336995289237 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1679.4899891877128,
            "unit": "ns/iter",
            "extra": "iterations: 418048\ncpu: 1679.3817767337716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1376.8174972475902,
            "unit": "ns/iter",
            "extra": "iterations: 509543\ncpu: 1376.7857609661994 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1753.503350586543,
            "unit": "ns/iter",
            "extra": "iterations: 399930\ncpu: 1753.4125371940054 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 483.3574329330212,
            "unit": "ns/iter",
            "extra": "iterations: 1445681\ncpu: 483.3554117402111 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2370.4146676835117,
            "unit": "ns/iter",
            "extra": "iterations: 298902\ncpu: 2370.3073482278432 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 179.41909796690663,
            "unit": "ns/iter",
            "extra": "iterations: 3609934\ncpu: 179.41540343950913 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1136.7280291768852,
            "unit": "ns/iter",
            "extra": "iterations: 615555\ncpu: 1136.6723347223253 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3346.7461635912346,
            "unit": "ns/iter",
            "extra": "iterations: 209962\ncpu: 3346.6744458521107 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727300359498,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1103.0616619328307,
            "unit": "ns/iter",
            "extra": "iterations: 625994\ncpu: 1102.964889439835 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2221.9438804966835,
            "unit": "ns/iter",
            "extra": "iterations: 315238\ncpu: 2221.8157392192566 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 202.6114357715489,
            "unit": "ns/iter",
            "extra": "iterations: 3452325\ncpu: 202.6026277943124 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 171.29129555461824,
            "unit": "ns/iter",
            "extra": "iterations: 4094563\ncpu: 171.27835400261282 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3547.089778200871,
            "unit": "ns/iter",
            "extra": "iterations: 197431\ncpu: 3546.875809776579 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1785.0377918986248,
            "unit": "ns/iter",
            "extra": "iterations: 394529\ncpu: 1784.9688768126052 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1687.4602603323294,
            "unit": "ns/iter",
            "extra": "iterations: 416775\ncpu: 1687.3607150140951 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1374.8487788951743,
            "unit": "ns/iter",
            "extra": "iterations: 511463\ncpu: 1374.8096753821903 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1754.464031784784,
            "unit": "ns/iter",
            "extra": "iterations: 399436\ncpu: 1754.4496139556793 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 476.12117362996185,
            "unit": "ns/iter",
            "extra": "iterations: 1469833\ncpu: 476.0865887485178 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2334.6072704870976,
            "unit": "ns/iter",
            "extra": "iterations: 301933\ncpu: 2334.4258693153783 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 179.1231478656481,
            "unit": "ns/iter",
            "extra": "iterations: 3867700\ncpu: 179.11531452801418 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1131.5673790343649,
            "unit": "ns/iter",
            "extra": "iterations: 619577\ncpu: 1131.557787006299 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3333.975266489457,
            "unit": "ns/iter",
            "extra": "iterations: 206481\ncpu: 3333.8752766598363 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727301228958,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1088.8712837435992,
            "unit": "ns/iter",
            "extra": "iterations: 672720\ncpu: 1088.8564885836604 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2067.0051581691673,
            "unit": "ns/iter",
            "extra": "iterations: 337329\ncpu: 2066.981934550543 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 186.73495889011986,
            "unit": "ns/iter",
            "extra": "iterations: 3811371\ncpu: 186.7340896491053 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 152.06439206471455,
            "unit": "ns/iter",
            "extra": "iterations: 4667454\ncpu: 152.06263650375567 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3388.383525479466,
            "unit": "ns/iter",
            "extra": "iterations: 210604\ncpu: 3388.3676568346273 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1694.6979632091195,
            "unit": "ns/iter",
            "extra": "iterations: 399501\ncpu: 1694.689955719761 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1619.1373952137903,
            "unit": "ns/iter",
            "extra": "iterations: 436842\ncpu: 1619.1145837625506 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1346.4554381059743,
            "unit": "ns/iter",
            "extra": "iterations: 516439\ncpu: 1346.4382124510346 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1733.3772779860506,
            "unit": "ns/iter",
            "extra": "iterations: 393275\ncpu: 1733.3136354967894 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 443.40661904223793,
            "unit": "ns/iter",
            "extra": "iterations: 1495171\ncpu: 443.3881569399089 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2244.8825571914294,
            "unit": "ns/iter",
            "extra": "iterations: 317661\ncpu: 2244.761875080667 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 156.66899598462948,
            "unit": "ns/iter",
            "extra": "iterations: 4418747\ncpu: 156.6602889914266 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1056.6234512511205,
            "unit": "ns/iter",
            "extra": "iterations: 673124\ncpu: 1056.5594348143877 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3073.5786463176582,
            "unit": "ns/iter",
            "extra": "iterations: 228148\ncpu: 3073.478509563963 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727366619722,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1099.411203350804,
            "unit": "ns/iter",
            "extra": "iterations: 596875\ncpu: 1099.344487539267 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2236.9557149069583,
            "unit": "ns/iter",
            "extra": "iterations: 312656\ncpu: 2236.9564985159413 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 196.32683936070046,
            "unit": "ns/iter",
            "extra": "iterations: 3556888\ncpu: 196.32069606914806 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 161.72689582806737,
            "unit": "ns/iter",
            "extra": "iterations: 4322834\ncpu: 161.72519833053957 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3502.1823367067245,
            "unit": "ns/iter",
            "extra": "iterations: 201095\ncpu: 3502.0859543996617 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1795.9661599160859,
            "unit": "ns/iter",
            "extra": "iterations: 391843\ncpu: 1795.910129822402 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1693.9392194623847,
            "unit": "ns/iter",
            "extra": "iterations: 411793\ncpu: 1693.8744660545449 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1406.6698599458612,
            "unit": "ns/iter",
            "extra": "iterations: 505019\ncpu: 1406.6025654480338 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1780.5452197515986,
            "unit": "ns/iter",
            "extra": "iterations: 387961\ncpu: 1780.3966558494258 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 475.6853038543507,
            "unit": "ns/iter",
            "extra": "iterations: 1475312\ncpu: 475.665337230362 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2369.5633370574697,
            "unit": "ns/iter",
            "extra": "iterations: 297172\ncpu: 2369.4934549688364 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 168.11579163288945,
            "unit": "ns/iter",
            "extra": "iterations: 4109727\ncpu: 168.1085882346929 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1135.8388711107912,
            "unit": "ns/iter",
            "extra": "iterations: 606862\ncpu: 1135.7612307246134 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3287.828379231446,
            "unit": "ns/iter",
            "extra": "iterations: 212282\ncpu: 3287.7504168982737 ns\nthreads: 1"
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
        "date": 1727368616453,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1072.4512168977383,
            "unit": "ns/iter",
            "extra": "iterations: 648329\ncpu: 1072.409842842137 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2239.4990082513254,
            "unit": "ns/iter",
            "extra": "iterations: 312075\ncpu: 2239.4306945445805 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 193.99919822946293,
            "unit": "ns/iter",
            "extra": "iterations: 3602028\ncpu: 193.98380995372602 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 138.24453598027551,
            "unit": "ns/iter",
            "extra": "iterations: 5062985\ncpu: 138.2413757891837 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3308.2407304563376,
            "unit": "ns/iter",
            "extra": "iterations: 212470\ncpu: 3308.013328940558 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1735.0843776476524,
            "unit": "ns/iter",
            "extra": "iterations: 407205\ncpu: 1735.0405176753723 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1727.3895742500135,
            "unit": "ns/iter",
            "extra": "iterations: 408949\ncpu: 1727.2920999929074 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1408.9220148332367,
            "unit": "ns/iter",
            "extra": "iterations: 501044\ncpu: 1408.7673457820074 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1823.2404381022714,
            "unit": "ns/iter",
            "extra": "iterations: 387946\ncpu: 1823.0994494079057 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 487.8147606238653,
            "unit": "ns/iter",
            "extra": "iterations: 1437988\ncpu: 487.77601899320433 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2319.254317571724,
            "unit": "ns/iter",
            "extra": "iterations: 303585\ncpu: 2319.0639557290374 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 145.99877759239965,
            "unit": "ns/iter",
            "extra": "iterations: 4788910\ncpu: 145.98960786483775 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1145.8070963287885,
            "unit": "ns/iter",
            "extra": "iterations: 609921\ncpu: 1145.7246610626607 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3198.57417661441,
            "unit": "ns/iter",
            "extra": "iterations: 219065\ncpu: 3198.2229429621366 ns\nthreads: 1"
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
        "date": 1727377808597,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1070.2487979055788,
            "unit": "ns/iter",
            "extra": "iterations: 645540\ncpu: 1070.1654459832077 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2254.0727827023543,
            "unit": "ns/iter",
            "extra": "iterations: 312272\ncpu: 2254.059544243479 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 194.31447346106003,
            "unit": "ns/iter",
            "extra": "iterations: 3608508\ncpu: 194.31180670792466 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 139.3223080115023,
            "unit": "ns/iter",
            "extra": "iterations: 5036890\ncpu: 139.32369616966028 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3313.934899195969,
            "unit": "ns/iter",
            "extra": "iterations: 206787\ncpu: 3313.8613065618233 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1738.1477613864113,
            "unit": "ns/iter",
            "extra": "iterations: 403062\ncpu: 1738.113905552991 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1737.788433084948,
            "unit": "ns/iter",
            "extra": "iterations: 404170\ncpu: 1737.7543880050462 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1436.5520924787477,
            "unit": "ns/iter",
            "extra": "iterations: 485214\ncpu: 1436.5279340662078 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1825.623607808726,
            "unit": "ns/iter",
            "extra": "iterations: 383568\ncpu: 1825.430909252078 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 480.5101556479968,
            "unit": "ns/iter",
            "extra": "iterations: 1460025\ncpu: 480.4992441910243 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2315.267093093258,
            "unit": "ns/iter",
            "extra": "iterations: 305328\ncpu: 2315.179957291828 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 143.50283289085363,
            "unit": "ns/iter",
            "extra": "iterations: 4870996\ncpu: 143.5043722064233 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1136.8904212672735,
            "unit": "ns/iter",
            "extra": "iterations: 621909\ncpu: 1136.8691207234488 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3230.4288507424017,
            "unit": "ns/iter",
            "extra": "iterations: 215835\ncpu: 3230.4645354089935 ns\nthreads: 1"
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
        "date": 1727464350767,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1061.6683856743684,
            "unit": "ns/iter",
            "extra": "iterations: 659489\ncpu: 1061.5919037315255 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2208.1032614348715,
            "unit": "ns/iter",
            "extra": "iterations: 317253\ncpu: 2207.906033985494 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 195.46944411897786,
            "unit": "ns/iter",
            "extra": "iterations: 3575891\ncpu: 195.4616541723447 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 138.17675830785885,
            "unit": "ns/iter",
            "extra": "iterations: 5070500\ncpu: 138.16772547086077 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3305.6263557865336,
            "unit": "ns/iter",
            "extra": "iterations: 212515\ncpu: 3305.4828647389613 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1746.6809144124995,
            "unit": "ns/iter",
            "extra": "iterations: 406731\ncpu: 1746.5486082939337 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1730.7763492388012,
            "unit": "ns/iter",
            "extra": "iterations: 403987\ncpu: 1730.7240183471254 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1417.5737905782244,
            "unit": "ns/iter",
            "extra": "iterations: 490503\ncpu: 1417.4530084423516 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1822.9881963857079,
            "unit": "ns/iter",
            "extra": "iterations: 385221\ncpu: 1822.937900581742 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 487.2171824753218,
            "unit": "ns/iter",
            "extra": "iterations: 1429503\ncpu: 487.1922773159622 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2358.6085611311237,
            "unit": "ns/iter",
            "extra": "iterations: 301876\ncpu: 2358.5524884389633 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 143.24714397629376,
            "unit": "ns/iter",
            "extra": "iterations: 4882575\ncpu: 143.2381720710896 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1132.3309153706819,
            "unit": "ns/iter",
            "extra": "iterations: 618427\ncpu: 1132.2598819262412 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3320.509010871223,
            "unit": "ns/iter",
            "extra": "iterations: 220123\ncpu: 3320.2118497385527 ns\nthreads: 1"
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
        "date": 1727704974049,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1091.0358785378721,
            "unit": "ns/iter",
            "extra": "iterations: 646654\ncpu: 1090.9991185394351 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2207.8714583553956,
            "unit": "ns/iter",
            "extra": "iterations: 295943\ncpu: 2207.7962918534986 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 190.56232910385307,
            "unit": "ns/iter",
            "extra": "iterations: 3671455\ncpu: 190.56030293167154 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 136.7200455072209,
            "unit": "ns/iter",
            "extra": "iterations: 5114792\ncpu: 136.72003201694227 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3362.4988317085636,
            "unit": "ns/iter",
            "extra": "iterations: 207996\ncpu: 3362.4238783438136 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1744.4600505433102,
            "unit": "ns/iter",
            "extra": "iterations: 395700\ncpu: 1744.434215314632 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1700.0061073089157,
            "unit": "ns/iter",
            "extra": "iterations: 414094\ncpu: 1699.9593449796434 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1394.0584410398171,
            "unit": "ns/iter",
            "extra": "iterations: 500898\ncpu: 1394.0247056286898 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1770.5573477200282,
            "unit": "ns/iter",
            "extra": "iterations: 395735\ncpu: 1770.5045346001712 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 475.6225896982999,
            "unit": "ns/iter",
            "extra": "iterations: 1471600\ncpu: 475.617190812721 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2287.7160060591086,
            "unit": "ns/iter",
            "extra": "iterations: 302348\ncpu: 2287.652463386557 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 141.53966926718223,
            "unit": "ns/iter",
            "extra": "iterations: 4943991\ncpu: 141.53818423213153 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1125.2539176844411,
            "unit": "ns/iter",
            "extra": "iterations: 622434\ncpu: 1125.234651384725 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3264.694333544237,
            "unit": "ns/iter",
            "extra": "iterations: 216661\ncpu: 3264.6640419826363 ns\nthreads: 1"
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
        "date": 1727706250857,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1118.109112324766,
            "unit": "ns/iter",
            "extra": "iterations: 629104\ncpu: 1118.0626955161622 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2230.63368909231,
            "unit": "ns/iter",
            "extra": "iterations: 314820\ncpu: 2230.5590305571436 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 204.0035413659552,
            "unit": "ns/iter",
            "extra": "iterations: 3440198\ncpu: 203.9977742560167 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 148.51775888568451,
            "unit": "ns/iter",
            "extra": "iterations: 4648152\ncpu: 148.51579746101257 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3392.2494508925474,
            "unit": "ns/iter",
            "extra": "iterations: 211252\ncpu: 3392.047317895213 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1768.2050970964272,
            "unit": "ns/iter",
            "extra": "iterations: 398933\ncpu: 1768.1391286256076 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1718.8386739385205,
            "unit": "ns/iter",
            "extra": "iterations: 408880\ncpu: 1718.775892682451 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1409.5565046243605,
            "unit": "ns/iter",
            "extra": "iterations: 493349\ncpu: 1409.5528256872922 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1797.293521866132,
            "unit": "ns/iter",
            "extra": "iterations: 388615\ncpu: 1797.2165999768429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 488.38315092551215,
            "unit": "ns/iter",
            "extra": "iterations: 1438809\ncpu: 488.37177902000957 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2357.5734759404127,
            "unit": "ns/iter",
            "extra": "iterations: 296199\ncpu: 2357.5030638185776 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 152.3443204468849,
            "unit": "ns/iter",
            "extra": "iterations: 4571416\ncpu: 152.34397700843687 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1128.281845767131,
            "unit": "ns/iter",
            "extra": "iterations: 622202\ncpu: 1128.2124406543207 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3415.478145092531,
            "unit": "ns/iter",
            "extra": "iterations: 211051\ncpu: 3415.3461011793365 ns\nthreads: 1"
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
        "date": 1727723415974,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1105.2929319313487,
            "unit": "ns/iter",
            "extra": "iterations: 635506\ncpu: 1105.2544696666907 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2237.137973141826,
            "unit": "ns/iter",
            "extra": "iterations: 312829\ncpu: 2237.0744272429993 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 197.46580148954806,
            "unit": "ns/iter",
            "extra": "iterations: 3508954\ncpu: 197.45606753465566 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 138.29995144316135,
            "unit": "ns/iter",
            "extra": "iterations: 4856166\ncpu: 138.29696987294085 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3402.5346629786313,
            "unit": "ns/iter",
            "extra": "iterations: 206070\ncpu: 3402.474498956663 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1755.1273870855562,
            "unit": "ns/iter",
            "extra": "iterations: 399860\ncpu: 1755.0832041214437 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1709.4095618392753,
            "unit": "ns/iter",
            "extra": "iterations: 406449\ncpu: 1709.3496920892908 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1408.6907180511778,
            "unit": "ns/iter",
            "extra": "iterations: 501371\ncpu: 1408.660403174495 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1786.4264749864624,
            "unit": "ns/iter",
            "extra": "iterations: 391207\ncpu: 1786.3502237945634 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 476.7844778278766,
            "unit": "ns/iter",
            "extra": "iterations: 1484367\ncpu: 476.76577288500795 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2307.040628651374,
            "unit": "ns/iter",
            "extra": "iterations: 303825\ncpu: 2306.9725861927104 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 145.2261471352309,
            "unit": "ns/iter",
            "extra": "iterations: 4884581\ncpu: 145.22283897022078 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1128.7852847444751,
            "unit": "ns/iter",
            "extra": "iterations: 619099\ncpu: 1128.7297540457982 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3231.53744639656,
            "unit": "ns/iter",
            "extra": "iterations: 216870\ncpu: 3231.384151796006 ns\nthreads: 1"
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
        "date": 1727809792151,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1087.1363801914304,
            "unit": "ns/iter",
            "extra": "iterations: 628757\ncpu: 1087.0489425962653 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2236.8721590998894,
            "unit": "ns/iter",
            "extra": "iterations: 314469\ncpu: 2236.8075199781215 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 200.109307253648,
            "unit": "ns/iter",
            "extra": "iterations: 3503418\ncpu: 200.10330454430502 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 147.07126154549636,
            "unit": "ns/iter",
            "extra": "iterations: 4741351\ncpu: 147.06802428253044 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3370.7682820003006,
            "unit": "ns/iter",
            "extra": "iterations: 212340\ncpu: 3370.6909767354273 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1736.8569913797546,
            "unit": "ns/iter",
            "extra": "iterations: 399871\ncpu: 1736.8463054335034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1685.0911370465428,
            "unit": "ns/iter",
            "extra": "iterations: 410766\ncpu: 1685.0646499466854 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1388.8547576582375,
            "unit": "ns/iter",
            "extra": "iterations: 504061\ncpu: 1388.7975840225693 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1771.2310289660254,
            "unit": "ns/iter",
            "extra": "iterations: 395669\ncpu: 1771.1393336349302 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 476.28948110143716,
            "unit": "ns/iter",
            "extra": "iterations: 1468842\ncpu: 476.2804978343482 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2314.9994282033454,
            "unit": "ns/iter",
            "extra": "iterations: 302555\ncpu: 2314.9863628100697 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 150.7180626842735,
            "unit": "ns/iter",
            "extra": "iterations: 4678845\ncpu: 150.71452591398094 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1121.3888866689954,
            "unit": "ns/iter",
            "extra": "iterations: 625663\ncpu: 1121.3600101012853 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3243.185722950191,
            "unit": "ns/iter",
            "extra": "iterations: 215983\ncpu: 3243.1263154970516 ns\nthreads: 1"
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
        "date": 1727810201091,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1103.0633698638103,
            "unit": "ns/iter",
            "extra": "iterations: 636091\ncpu: 1103.0653570008062 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2214.1266833703176,
            "unit": "ns/iter",
            "extra": "iterations: 317295\ncpu: 2213.95813044643 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 193.94778281623832,
            "unit": "ns/iter",
            "extra": "iterations: 3569438\ncpu: 193.93946301910833 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 139.7787288675319,
            "unit": "ns/iter",
            "extra": "iterations: 5022309\ncpu: 139.7692836103873 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3394.3998661815067,
            "unit": "ns/iter",
            "extra": "iterations: 206249\ncpu: 3394.226289582007 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1772.606029932369,
            "unit": "ns/iter",
            "extra": "iterations: 400104\ncpu: 1772.4118379221406 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1697.7585734115535,
            "unit": "ns/iter",
            "extra": "iterations: 412817\ncpu: 1697.6848870080453 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1384.6712864361364,
            "unit": "ns/iter",
            "extra": "iterations: 506158\ncpu: 1384.636660884546 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1808.828765047037,
            "unit": "ns/iter",
            "extra": "iterations: 389278\ncpu: 1808.7522105025198 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 472.5137194551677,
            "unit": "ns/iter",
            "extra": "iterations: 1470503\ncpu: 472.48480893952603 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2309.26698852557,
            "unit": "ns/iter",
            "extra": "iterations: 302410\ncpu: 2309.2072252901694 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 144.2240605138299,
            "unit": "ns/iter",
            "extra": "iterations: 4853238\ncpu: 144.2188699585717 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1113.229491729598,
            "unit": "ns/iter",
            "extra": "iterations: 629173\ncpu: 1113.2045431065865 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3281.3650058261624,
            "unit": "ns/iter",
            "extra": "iterations: 214550\ncpu: 3281.208930319273 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727814226752,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1081.7323102862986,
            "unit": "ns/iter",
            "extra": "iterations: 642916\ncpu: 1081.6294243727016 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2235.4595836204876,
            "unit": "ns/iter",
            "extra": "iterations: 314761\ncpu: 2235.379818338358 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 195.02145740461978,
            "unit": "ns/iter",
            "extra": "iterations: 3609430\ncpu: 195.0103625780247 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 137.58935525983597,
            "unit": "ns/iter",
            "extra": "iterations: 5086080\ncpu: 137.58714117748832 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3412.7647629914522,
            "unit": "ns/iter",
            "extra": "iterations: 206005\ncpu: 3412.5236377757847 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1734.3153876719578,
            "unit": "ns/iter",
            "extra": "iterations: 402660\ncpu: 1734.0763820593056 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1704.367161282895,
            "unit": "ns/iter",
            "extra": "iterations: 411228\ncpu: 1704.3264490744793 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1391.8977863453135,
            "unit": "ns/iter",
            "extra": "iterations: 501117\ncpu: 1391.8578196309434 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1802.0917011049435,
            "unit": "ns/iter",
            "extra": "iterations: 391522\ncpu: 1801.9923656908163 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 470.69771119431135,
            "unit": "ns/iter",
            "extra": "iterations: 1477845\ncpu: 470.6969425075024 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2372.351657943879,
            "unit": "ns/iter",
            "extra": "iterations: 292139\ncpu: 2372.283190536012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 144.53075539591475,
            "unit": "ns/iter",
            "extra": "iterations: 4873974\ncpu: 144.52626152704133 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1115.927114060208,
            "unit": "ns/iter",
            "extra": "iterations: 627844\ncpu: 1115.8704168551412 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3332.0733170889785,
            "unit": "ns/iter",
            "extra": "iterations: 208478\ncpu: 3331.870864071996 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727819232722,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1106.8777998871349,
            "unit": "ns/iter",
            "extra": "iterations: 630204\ncpu: 1106.8661369969088 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2219.5205545857443,
            "unit": "ns/iter",
            "extra": "iterations: 315623\ncpu: 2219.4585027073435 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 198.74413860802943,
            "unit": "ns/iter",
            "extra": "iterations: 3525741\ncpu: 198.74268274385446 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 140.42865694177542,
            "unit": "ns/iter",
            "extra": "iterations: 4988369\ncpu: 140.41543638812607 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3413.238870013325,
            "unit": "ns/iter",
            "extra": "iterations: 204852\ncpu: 3413.1030451252605 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1761.6711961134756,
            "unit": "ns/iter",
            "extra": "iterations: 400564\ncpu: 1761.5959871581058 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1717.885261751819,
            "unit": "ns/iter",
            "extra": "iterations: 409567\ncpu: 1717.8270930030967 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1388.0620221566555,
            "unit": "ns/iter",
            "extra": "iterations: 498725\ncpu: 1388.0425003759603 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1781.215781191017,
            "unit": "ns/iter",
            "extra": "iterations: 392708\ncpu: 1781.1681987634583 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 475.08523329718247,
            "unit": "ns/iter",
            "extra": "iterations: 1481651\ncpu: 475.08142133336395 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2354.9064729584857,
            "unit": "ns/iter",
            "extra": "iterations: 297561\ncpu: 2354.846021488032 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 143.7736200048647,
            "unit": "ns/iter",
            "extra": "iterations: 4860615\ncpu: 143.77261066758007 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1126.1430390288824,
            "unit": "ns/iter",
            "extra": "iterations: 624410\ncpu: 1126.104551496614 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3324.015582152427,
            "unit": "ns/iter",
            "extra": "iterations: 210048\ncpu: 3324.0145157297306 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727887804228,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6525023885.999986,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6524653109 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1080.6792966883495,
            "unit": "ns/iter",
            "extra": "iterations: 644892\ncpu: 1080.617860044783 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2230.3192003945373,
            "unit": "ns/iter",
            "extra": "iterations: 310103\ncpu: 2230.285592206465 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 201.58697590387945,
            "unit": "ns/iter",
            "extra": "iterations: 3497164\ncpu: 201.45381457661117 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 147.383163619284,
            "unit": "ns/iter",
            "extra": "iterations: 4746317\ncpu: 147.38049797348157 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3448.2260687185767,
            "unit": "ns/iter",
            "extra": "iterations: 204544\ncpu: 3448.1890400109496 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1732.3923068425022,
            "unit": "ns/iter",
            "extra": "iterations: 407375\ncpu: 1732.3910475606017 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1728.230574801973,
            "unit": "ns/iter",
            "extra": "iterations: 406714\ncpu: 1728.2291315273103 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1412.6330789183194,
            "unit": "ns/iter",
            "extra": "iterations: 494992\ncpu: 1412.620957510424 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1801.7504089406023,
            "unit": "ns/iter",
            "extra": "iterations: 389421\ncpu: 1801.733137144635 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 471.89489332288736,
            "unit": "ns/iter",
            "extra": "iterations: 1472856\ncpu: 471.8894684884329 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2331.137640249641,
            "unit": "ns/iter",
            "extra": "iterations: 295277\ncpu: 2331.11445524033 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 154.59328618971142,
            "unit": "ns/iter",
            "extra": "iterations: 4644814\ncpu: 154.59060233628344 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1116.658013795034,
            "unit": "ns/iter",
            "extra": "iterations: 629502\ncpu: 1116.6593052921219 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3271.326110489027,
            "unit": "ns/iter",
            "extra": "iterations: 213397\ncpu: 3271.202430212232 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727895621070,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6289674835.000028,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6285996940 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1120.2031396638185,
            "unit": "ns/iter",
            "extra": "iterations: 628666\ncpu: 1120.1347488173378 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2276.1574031463083,
            "unit": "ns/iter",
            "extra": "iterations: 308558\ncpu: 2276.0317087873264 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 210.75633191108517,
            "unit": "ns/iter",
            "extra": "iterations: 3322733\ncpu: 210.74257606614773 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 141.00643605399273,
            "unit": "ns/iter",
            "extra": "iterations: 4957230\ncpu: 140.99719540953294 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3638.5289679909692,
            "unit": "ns/iter",
            "extra": "iterations: 191539\ncpu: 3638.326257315743 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1807.0564297863498,
            "unit": "ns/iter",
            "extra": "iterations: 383893\ncpu: 1806.787469425076 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1748.1633330897737,
            "unit": "ns/iter",
            "extra": "iterations: 396521\ncpu: 1747.8376428991169 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1425.8734847156202,
            "unit": "ns/iter",
            "extra": "iterations: 490502\ncpu: 1425.7006536160902 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1840.6003795674546,
            "unit": "ns/iter",
            "extra": "iterations: 381487\ncpu: 1840.3919163693636 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 497.8844308521034,
            "unit": "ns/iter",
            "extra": "iterations: 1371032\ncpu: 497.8758475367469 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2292.3873091829796,
            "unit": "ns/iter",
            "extra": "iterations: 306773\ncpu: 2292.3121004782024 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 144.5304438677182,
            "unit": "ns/iter",
            "extra": "iterations: 4850747\ncpu: 144.5220257828328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1164.2018650168084,
            "unit": "ns/iter",
            "extra": "iterations: 603319\ncpu: 1164.147644944054 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3212.8516507010704,
            "unit": "ns/iter",
            "extra": "iterations: 217453\ncpu: 3212.699456894134 ns\nthreads: 1"
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
        "date": 1727896214429,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6265457518.000062,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6261668677 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1113.9041380003314,
            "unit": "ns/iter",
            "extra": "iterations: 627767\ncpu: 1113.8651235251298 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2288.0579931006473,
            "unit": "ns/iter",
            "extra": "iterations: 298570\ncpu: 2287.9735639883434 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 212.7503738261566,
            "unit": "ns/iter",
            "extra": "iterations: 3288962\ncpu: 212.74515850289563 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 141.2347759178733,
            "unit": "ns/iter",
            "extra": "iterations: 4972418\ncpu: 141.23124845899915 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3483.1526000566114,
            "unit": "ns/iter",
            "extra": "iterations: 201861\ncpu: 3483.055969206533 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1838.3487422683277,
            "unit": "ns/iter",
            "extra": "iterations: 380407\ncpu: 1838.1751939370201 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1732.374442517413,
            "unit": "ns/iter",
            "extra": "iterations: 403600\ncpu: 1732.2770118929636 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1414.5268621007433,
            "unit": "ns/iter",
            "extra": "iterations: 496536\ncpu: 1414.4948321974641 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1824.6495464594095,
            "unit": "ns/iter",
            "extra": "iterations: 385412\ncpu: 1824.6302268740983 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 485.2275602510051,
            "unit": "ns/iter",
            "extra": "iterations: 1462962\ncpu: 485.2125414057231 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2313.0501767156525,
            "unit": "ns/iter",
            "extra": "iterations: 303029\ncpu: 2312.9815331205855 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 144.05220693372425,
            "unit": "ns/iter",
            "extra": "iterations: 4791988\ncpu: 144.04797946071696 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1123.9349190665907,
            "unit": "ns/iter",
            "extra": "iterations: 622425\ncpu: 1123.9148604249488 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3211.479216716602,
            "unit": "ns/iter",
            "extra": "iterations: 217699\ncpu: 3211.4241131103054 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727903976029,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6518421861.999969,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6518197264 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1128.5621375265289,
            "unit": "ns/iter",
            "extra": "iterations: 619183\ncpu: 1128.549756695516 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2260.3115214784,
            "unit": "ns/iter",
            "extra": "iterations: 307096\ncpu: 2260.2880792976775 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 213.1348599138475,
            "unit": "ns/iter",
            "extra": "iterations: 3286692\ncpu: 213.13219005614133 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 141.74171616748504,
            "unit": "ns/iter",
            "extra": "iterations: 4951603\ncpu: 141.73602710071862 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3487.7402570760864,
            "unit": "ns/iter",
            "extra": "iterations: 199863\ncpu: 3487.27461310998 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1746.7578535278442,
            "unit": "ns/iter",
            "extra": "iterations: 399502\ncpu: 1746.5598069596656 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1760.917649068303,
            "unit": "ns/iter",
            "extra": "iterations: 392236\ncpu: 1760.8367768384346 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1479.508470136093,
            "unit": "ns/iter",
            "extra": "iterations: 480984\ncpu: 1479.4200202085717 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1869.3550736405944,
            "unit": "ns/iter",
            "extra": "iterations: 381718\ncpu: 1869.2146768032956 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 483.25862303052196,
            "unit": "ns/iter",
            "extra": "iterations: 1450969\ncpu: 483.2448522332322 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2332.125677121718,
            "unit": "ns/iter",
            "extra": "iterations: 301829\ncpu: 2332.066464786348 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 151.92738708260106,
            "unit": "ns/iter",
            "extra": "iterations: 4569490\ncpu: 151.92761052108645 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1132.2903879934393,
            "unit": "ns/iter",
            "extra": "iterations: 619392\ncpu: 1132.270618606633 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3536.7091618192053,
            "unit": "ns/iter",
            "extra": "iterations: 198203\ncpu: 3536.7184906383977 ns\nthreads: 1"
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
        "date": 1727965377216,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6272540353.000068,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6268696476 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1115.5065748456777,
            "unit": "ns/iter",
            "extra": "iterations: 633551\ncpu: 1115.4852821635513 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2290.604758688631,
            "unit": "ns/iter",
            "extra": "iterations: 307984\ncpu: 2290.527244921815 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 201.97078274622942,
            "unit": "ns/iter",
            "extra": "iterations: 3467369\ncpu: 201.9668050905454 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 144.98536130555664,
            "unit": "ns/iter",
            "extra": "iterations: 4837180\ncpu: 144.9846730946543 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3494.7541132174533,
            "unit": "ns/iter",
            "extra": "iterations: 199722\ncpu: 3494.7352419863664 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1795.692181927757,
            "unit": "ns/iter",
            "extra": "iterations: 391452\ncpu: 1795.4706068687865 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1720.4149913009574,
            "unit": "ns/iter",
            "extra": "iterations: 405782\ncpu: 1720.335894642936 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1406.8117750562656,
            "unit": "ns/iter",
            "extra": "iterations: 500125\ncpu: 1406.797976505873 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1799.852200560781,
            "unit": "ns/iter",
            "extra": "iterations: 387992\ncpu: 1799.7882791397749 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 508.40073782950935,
            "unit": "ns/iter",
            "extra": "iterations: 1377554\ncpu: 508.3844357462568 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2351.8169834519263,
            "unit": "ns/iter",
            "extra": "iterations: 294416\ncpu: 2351.6551580077103 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 157.42810183960694,
            "unit": "ns/iter",
            "extra": "iterations: 4427276\ncpu: 157.42095116726412 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1217.4489046730682,
            "unit": "ns/iter",
            "extra": "iterations: 568506\ncpu: 1217.3615722613285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 680.0884974570475,
            "unit": "ns/iter",
            "extra": "iterations: 1034606\ncpu: 680.0497909349078 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3166.8078415615228,
            "unit": "ns/iter",
            "extra": "iterations: 219038\ncpu: 3166.6467051379327 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727966647296,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6633952792.999935,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6633434291 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1124.8906950681273,
            "unit": "ns/iter",
            "extra": "iterations: 620155\ncpu: 1124.8232957889552 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2247.7631396671527,
            "unit": "ns/iter",
            "extra": "iterations: 311842\ncpu: 2247.5363838097483 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 205.90589387396452,
            "unit": "ns/iter",
            "extra": "iterations: 3404518\ncpu: 205.89380728784536 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 142.4919661657651,
            "unit": "ns/iter",
            "extra": "iterations: 4924361\ncpu: 142.48036202057511 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3475.307712797219,
            "unit": "ns/iter",
            "extra": "iterations: 202728\ncpu: 3475.101633716117 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1849.6662043830665,
            "unit": "ns/iter",
            "extra": "iterations: 383603\ncpu: 1849.4495272456184 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1733.0704939026473,
            "unit": "ns/iter",
            "extra": "iterations: 399836\ncpu: 1732.9136470953094 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1412.9253541798805,
            "unit": "ns/iter",
            "extra": "iterations: 490570\ncpu: 1412.75726399902 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1819.1665979801332,
            "unit": "ns/iter",
            "extra": "iterations: 383384\ncpu: 1819.0980818187516 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 552.804478439583,
            "unit": "ns/iter",
            "extra": "iterations: 1265932\ncpu: 552.7865825336584 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2390.797554642561,
            "unit": "ns/iter",
            "extra": "iterations: 295008\ncpu: 2390.6766460570584 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 148.82901353891233,
            "unit": "ns/iter",
            "extra": "iterations: 4705548\ncpu: 148.82069484786888 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1312.5583970614666,
            "unit": "ns/iter",
            "extra": "iterations: 534693\ncpu: 1312.4292332235498 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 673.4173369642655,
            "unit": "ns/iter",
            "extra": "iterations: 1046550\ncpu: 673.3681735225272 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 3674.4271304221493,
            "unit": "ns/iter",
            "extra": "iterations: 190244\ncpu: 3674.1895355438296 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3246.800560460104,
            "unit": "ns/iter",
            "extra": "iterations: 216251\ncpu: 3246.6682003782594 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727969018789,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6328019882.000035,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6327553366 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1116.6842540619518,
            "unit": "ns/iter",
            "extra": "iterations: 626225\ncpu: 1116.6674102758582 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2243.3250575217735,
            "unit": "ns/iter",
            "extra": "iterations: 311188\ncpu: 2243.292263840507 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 203.90499473589637,
            "unit": "ns/iter",
            "extra": "iterations: 3429831\ncpu: 203.89961954393686 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 142.69306778972742,
            "unit": "ns/iter",
            "extra": "iterations: 4874780\ncpu: 142.69216764654024 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3480.320313628037,
            "unit": "ns/iter",
            "extra": "iterations: 200875\ncpu: 3480.231576851273 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1790.1888609715656,
            "unit": "ns/iter",
            "extra": "iterations: 394020\ncpu: 1790.151281660827 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1692.723136187958,
            "unit": "ns/iter",
            "extra": "iterations: 415345\ncpu: 1692.685781699552 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1381.1369204662099,
            "unit": "ns/iter",
            "extra": "iterations: 505622\ncpu: 1381.1071076812311 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1788.606434750161,
            "unit": "ns/iter",
            "extra": "iterations: 390629\ncpu: 1788.5622240028272 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 468.4497764990843,
            "unit": "ns/iter",
            "extra": "iterations: 1495296\ncpu: 468.4370499218876 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2312.2578938182405,
            "unit": "ns/iter",
            "extra": "iterations: 303687\ncpu: 2312.2140723837424 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 148.40695595683644,
            "unit": "ns/iter",
            "extra": "iterations: 4725590\ncpu: 148.40509015805466 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1104.9494397694957,
            "unit": "ns/iter",
            "extra": "iterations: 634471\ncpu: 1104.9263228737016 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 701.2807535538028,
            "unit": "ns/iter",
            "extra": "iterations: 1007599\ncpu: 701.2532813152841 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 3698.643744550654,
            "unit": "ns/iter",
            "extra": "iterations: 189235\ncpu: 3698.5973155071642 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3234.340891372366,
            "unit": "ns/iter",
            "extra": "iterations: 215488\ncpu: 3234.296661531031 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727969512717,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6305861733.000029,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6305537298 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1112.991758172774,
            "unit": "ns/iter",
            "extra": "iterations: 636388\ncpu: 1112.9848032961024 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2308.4761774413723,
            "unit": "ns/iter",
            "extra": "iterations: 303221\ncpu: 2308.4162805346546 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 204.54806573058352,
            "unit": "ns/iter",
            "extra": "iterations: 3425195\ncpu: 204.54706024036577 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 138.8528705016869,
            "unit": "ns/iter",
            "extra": "iterations: 5042150\ncpu: 138.85212201144338 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3469.844348104381,
            "unit": "ns/iter",
            "extra": "iterations: 200216\ncpu: 3469.8528938746176 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1763.102611104884,
            "unit": "ns/iter",
            "extra": "iterations: 386235\ncpu: 1763.0736468730192 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1767.4577129950803,
            "unit": "ns/iter",
            "extra": "iterations: 403812\ncpu: 1767.3804196012002 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1445.7962604970287,
            "unit": "ns/iter",
            "extra": "iterations: 488835\ncpu: 1445.6919778657425 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1868.471212754089,
            "unit": "ns/iter",
            "extra": "iterations: 373464\ncpu: 1868.2179353297784 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 479.5798148605984,
            "unit": "ns/iter",
            "extra": "iterations: 1458469\ncpu: 479.5728376811576 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2344.7313570699152,
            "unit": "ns/iter",
            "extra": "iterations: 303131\ncpu: 2344.65892303988 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 143.07470772997053,
            "unit": "ns/iter",
            "extra": "iterations: 4895986\ncpu: 143.06704369661176 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1132.4601876856466,
            "unit": "ns/iter",
            "extra": "iterations: 617309\ncpu: 1132.385942858436 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 694.1483060753104,
            "unit": "ns/iter",
            "extra": "iterations: 1009608\ncpu: 694.1224524766055 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 3788.5935533094494,
            "unit": "ns/iter",
            "extra": "iterations: 183505\ncpu: 3788.4855017574537 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 816.3532010488743,
            "unit": "ns/iter",
            "extra": "iterations: 865357\ncpu: 816.3236433055936 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3266.670550429359,
            "unit": "ns/iter",
            "extra": "iterations: 212852\ncpu: 3266.5718997237545 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727970683330,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6437587581.000003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6437051302 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1089.0512614539791,
            "unit": "ns/iter",
            "extra": "iterations: 636131\ncpu: 1088.9618521971095 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2286.012707537527,
            "unit": "ns/iter",
            "extra": "iterations: 306511\ncpu: 2285.824593570867 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 200.18279076897912,
            "unit": "ns/iter",
            "extra": "iterations: 3515927\ncpu: 200.16105937353058 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 137.83006793919813,
            "unit": "ns/iter",
            "extra": "iterations: 5079836\ncpu: 137.81771635934695 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3244.9445113148713,
            "unit": "ns/iter",
            "extra": "iterations: 216837\ncpu: 3244.695513219611 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1757.2292607905845,
            "unit": "ns/iter",
            "extra": "iterations: 396640\ncpu: 1757.0876033682946 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1742.1797078213374,
            "unit": "ns/iter",
            "extra": "iterations: 402904\ncpu: 1742.0208238190753 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1430.3000233784771,
            "unit": "ns/iter",
            "extra": "iterations: 491905\ncpu: 1430.2486821642422 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1827.2700748090065,
            "unit": "ns/iter",
            "extra": "iterations: 377762\ncpu: 1827.2030749519538 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 474.208676567322,
            "unit": "ns/iter",
            "extra": "iterations: 1475791\ncpu: 474.1909091463503 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2323.7762175955745,
            "unit": "ns/iter",
            "extra": "iterations: 300962\ncpu: 2323.6176361135326 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 144.10168283856257,
            "unit": "ns/iter",
            "extra": "iterations: 4900886\ncpu: 144.09813450057834 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1120.049372063505,
            "unit": "ns/iter",
            "extra": "iterations: 624665\ncpu: 1119.9958745887775 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 672.3203684500909,
            "unit": "ns/iter",
            "extra": "iterations: 1074338\ncpu: 672.2534835405612 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1616.5105275384547,
            "unit": "ns/iter",
            "extra": "iterations: 430490\ncpu: 1616.4128272433716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 819.230201893182,
            "unit": "ns/iter",
            "extra": "iterations: 857582\ncpu: 819.1876170442005 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3326.2548586763796,
            "unit": "ns/iter",
            "extra": "iterations: 212455\ncpu: 3326.0147466522385 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727974505071,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6366361271.000073,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6366042129 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1087.3623419101816,
            "unit": "ns/iter",
            "extra": "iterations: 642672\ncpu: 1087.3225471157934 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2279.5350494497097,
            "unit": "ns/iter",
            "extra": "iterations: 308293\ncpu: 2279.4577917760066 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 194.30644712035598,
            "unit": "ns/iter",
            "extra": "iterations: 3604524\ncpu: 194.29566012044882 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 139.71532154551366,
            "unit": "ns/iter",
            "extra": "iterations: 4998608\ncpu: 139.7104123788063 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3388.7137285826802,
            "unit": "ns/iter",
            "extra": "iterations: 210517\ncpu: 3388.5423362483784 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1765.9740948774977,
            "unit": "ns/iter",
            "extra": "iterations: 398261\ncpu: 1765.9108725182743 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1632.357651026851,
            "unit": "ns/iter",
            "extra": "iterations: 431099\ncpu: 1632.2696248425543 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1344.1508127845252,
            "unit": "ns/iter",
            "extra": "iterations: 528861\ncpu: 1344.1017185990281 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1718.5479944214167,
            "unit": "ns/iter",
            "extra": "iterations: 409433\ncpu: 1718.494620609475 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 472.06277879339103,
            "unit": "ns/iter",
            "extra": "iterations: 1476900\ncpu: 472.0420008125147 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2318.7720496834468,
            "unit": "ns/iter",
            "extra": "iterations: 303281\ncpu: 2318.696380584346 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 143.5824366415701,
            "unit": "ns/iter",
            "extra": "iterations: 4884157\ncpu: 143.57893941574758 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1105.2735256757437,
            "unit": "ns/iter",
            "extra": "iterations: 632968\ncpu: 1105.2346137561458 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 747.803160416101,
            "unit": "ns/iter",
            "extra": "iterations: 944749\ncpu: 747.7806539091335 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1609.1868397243072,
            "unit": "ns/iter",
            "extra": "iterations: 434383\ncpu: 1609.1639889222154 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 823.6721976846156,
            "unit": "ns/iter",
            "extra": "iterations: 851983\ncpu: 823.6326745956226 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3310.0126748167027,
            "unit": "ns/iter",
            "extra": "iterations: 211364\ncpu: 3309.916717132525 ns\nthreads: 1"
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
        "date": 1727982864845,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6585609169.999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6581284219.000001 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1126.9543127395202,
            "unit": "ns/iter",
            "extra": "iterations: 630307\ncpu: 1126.904695648311 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2274.27031255575,
            "unit": "ns/iter",
            "extra": "iterations: 309353\ncpu: 2274.279622308497 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 195.9236724753147,
            "unit": "ns/iter",
            "extra": "iterations: 3499144\ncpu: 195.92115728875402 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 141.57389902134412,
            "unit": "ns/iter",
            "extra": "iterations: 4873664\ncpu: 141.57462681054773 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3668.091935826593,
            "unit": "ns/iter",
            "extra": "iterations: 192667\ncpu: 3667.979897958649 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1766.336449257133,
            "unit": "ns/iter",
            "extra": "iterations: 397100\ncpu: 1766.2377335683723 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1645.2332144622437,
            "unit": "ns/iter",
            "extra": "iterations: 426513\ncpu: 1645.2143920583917 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1346.0838605558047,
            "unit": "ns/iter",
            "extra": "iterations: 520495\ncpu: 1346.034705424646 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1721.3001233603597,
            "unit": "ns/iter",
            "extra": "iterations: 407749\ncpu: 1721.2501612511608 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 473.35903069558174,
            "unit": "ns/iter",
            "extra": "iterations: 1479659\ncpu: 473.33031529561816 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2334.419866893505,
            "unit": "ns/iter",
            "extra": "iterations: 300812\ncpu: 2334.3973810885295 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 145.38826672473866,
            "unit": "ns/iter",
            "extra": "iterations: 4813217\ncpu: 145.3829295458732 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1101.501809161428,
            "unit": "ns/iter",
            "extra": "iterations: 633719\ncpu: 1101.50688869988 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 749.0050996813899,
            "unit": "ns/iter",
            "extra": "iterations: 942804\ncpu: 748.9580389985631 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1627.6530154439283,
            "unit": "ns/iter",
            "extra": "iterations: 429290\ncpu: 1627.661149805492 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 832.0097939688999,
            "unit": "ns/iter",
            "extra": "iterations: 847154\ncpu: 831.9916579512078 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3314.6104346571515,
            "unit": "ns/iter",
            "extra": "iterations: 208440\ncpu: 3314.491705047013 ns\nthreads: 1"
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
        "date": 1727984315608,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6470118446.000015,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6469732806 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1102.4560461379492,
            "unit": "ns/iter",
            "extra": "iterations: 639648\ncpu: 1102.3878586347473 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2292.2427017075124,
            "unit": "ns/iter",
            "extra": "iterations: 307983\ncpu: 2292.0449310513914 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 194.8226804797715,
            "unit": "ns/iter",
            "extra": "iterations: 3610488\ncpu: 194.81065523552465 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 136.3263738805392,
            "unit": "ns/iter",
            "extra": "iterations: 5145280\ncpu: 136.31620242241448 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3349.479928352747,
            "unit": "ns/iter",
            "extra": "iterations: 218293\ncpu: 3349.2491422079465 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1742.732361659019,
            "unit": "ns/iter",
            "extra": "iterations: 403496\ncpu: 1742.6464698534826 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1636.947890018763,
            "unit": "ns/iter",
            "extra": "iterations: 431165\ncpu: 1636.895446058933 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1353.5076936932064,
            "unit": "ns/iter",
            "extra": "iterations: 521921\ncpu: 1353.3712247638996 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1748.9697167852844,
            "unit": "ns/iter",
            "extra": "iterations: 412902\ncpu: 1748.876902993929 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 477.7873665958991,
            "unit": "ns/iter",
            "extra": "iterations: 1469501\ncpu: 477.7602614765165 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2336.525929505866,
            "unit": "ns/iter",
            "extra": "iterations: 300025\ncpu: 2336.4768069327556 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 140.2342620322563,
            "unit": "ns/iter",
            "extra": "iterations: 4991607\ncpu: 140.22802636505617 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1110.379077936242,
            "unit": "ns/iter",
            "extra": "iterations: 627462\ncpu: 1110.3249599178898 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 446.95593111801895,
            "unit": "ns/iter",
            "extra": "iterations: 1567841\ncpu: 446.93588635582256 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1653.7081617521908,
            "unit": "ns/iter",
            "extra": "iterations: 423512\ncpu: 1653.604162337789 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 796.474346775594,
            "unit": "ns/iter",
            "extra": "iterations: 880708\ncpu: 796.4052080825844 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3266.7109444326443,
            "unit": "ns/iter",
            "extra": "iterations: 214118\ncpu: 3266.4930365499313 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727986178219,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6476052006.000031,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6475831294.000001 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1116.7326307813125,
            "unit": "ns/iter",
            "extra": "iterations: 633405\ncpu: 1116.7401236175892 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2203.7124057194246,
            "unit": "ns/iter",
            "extra": "iterations: 317934\ncpu: 2203.638217365869 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 199.49036102740183,
            "unit": "ns/iter",
            "extra": "iterations: 3481647\ncpu: 199.485569616908 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 140.53037936664833,
            "unit": "ns/iter",
            "extra": "iterations: 4984123\ncpu: 140.5274446477343 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3347.8186114699943,
            "unit": "ns/iter",
            "extra": "iterations: 207356\ncpu: 3347.760016589829 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1781.3951303092074,
            "unit": "ns/iter",
            "extra": "iterations: 368853\ncpu: 1781.3529129490614 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1644.3779674931052,
            "unit": "ns/iter",
            "extra": "iterations: 426370\ncpu: 1644.3421019302466 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1370.2805217142732,
            "unit": "ns/iter",
            "extra": "iterations: 518598\ncpu: 1370.2328508787134 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1719.6610039401653,
            "unit": "ns/iter",
            "extra": "iterations: 399984\ncpu: 1719.6146670866856 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 472.2370626421679,
            "unit": "ns/iter",
            "extra": "iterations: 1475108\ncpu: 472.221345826881 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2354.8069353673527,
            "unit": "ns/iter",
            "extra": "iterations: 297605\ncpu: 2354.754624418269 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 151.29978796557674,
            "unit": "ns/iter",
            "extra": "iterations: 4616703\ncpu: 151.29680358472265 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1107.590350247393,
            "unit": "ns/iter",
            "extra": "iterations: 628327\ncpu: 1107.5657643233499 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 447.5536269453595,
            "unit": "ns/iter",
            "extra": "iterations: 1556158\ncpu: 447.53413213825513 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1618.2931579194565,
            "unit": "ns/iter",
            "extra": "iterations: 427940\ncpu: 1618.2544094966627 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 219.15871953902916,
            "unit": "ns/iter",
            "extra": "iterations: 3201597\ncpu: 219.15818667995944 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3193.003348504279,
            "unit": "ns/iter",
            "extra": "iterations: 219501\ncpu: 3192.853727317867 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727987519719,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6453089320.999993,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6452700171 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1106.0498141346434,
            "unit": "ns/iter",
            "extra": "iterations: 627874\ncpu: 1105.9811108598215 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2246.0915394182625,
            "unit": "ns/iter",
            "extra": "iterations: 314411\ncpu: 2245.8854747448413 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 191.0497112778911,
            "unit": "ns/iter",
            "extra": "iterations: 3641910\ncpu: 191.0353789632363 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 135.20533708563445,
            "unit": "ns/iter",
            "extra": "iterations: 5190061\ncpu: 135.1947996372295 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3466.452476182576,
            "unit": "ns/iter",
            "extra": "iterations: 202267\ncpu: 3466.162527747978 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1746.4945202632794,
            "unit": "ns/iter",
            "extra": "iterations: 399563\ncpu: 1746.3177546469512 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1646.1061177110387,
            "unit": "ns/iter",
            "extra": "iterations: 425584\ncpu: 1645.9024563893379 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1344.4005090057087,
            "unit": "ns/iter",
            "extra": "iterations: 515122\ncpu: 1344.2646732230444 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1757.6691664120415,
            "unit": "ns/iter",
            "extra": "iterations: 402441\ncpu: 1757.5789917031298 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 468.0761527684825,
            "unit": "ns/iter",
            "extra": "iterations: 1490412\ncpu: 468.0388503313188 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2163.562527836695,
            "unit": "ns/iter",
            "extra": "iterations: 325559\ncpu: 2163.510334532292 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 143.11356921898147,
            "unit": "ns/iter",
            "extra": "iterations: 4875837\ncpu: 143.1129481974064 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1110.1366566206323,
            "unit": "ns/iter",
            "extra": "iterations: 634071\ncpu: 1110.058446136161 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 455.06904078614883,
            "unit": "ns/iter",
            "extra": "iterations: 1537019\ncpu: 455.0668235070608 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1648.6242495567997,
            "unit": "ns/iter",
            "extra": "iterations: 428247\ncpu: 1648.5886439367935 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 205.40381405902076,
            "unit": "ns/iter",
            "extra": "iterations: 3439328\ncpu: 205.3973924557356 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3284.955782392948,
            "unit": "ns/iter",
            "extra": "iterations: 211997\ncpu: 3284.859082911562 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727989065592,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6392825841.999979,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6389291984.000001 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1139.8305101465025,
            "unit": "ns/iter",
            "extra": "iterations: 618391\ncpu: 1139.7838794549084 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2238.269771542966,
            "unit": "ns/iter",
            "extra": "iterations: 311875\ncpu: 2238.097978356715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 189.84968820282418,
            "unit": "ns/iter",
            "extra": "iterations: 3700162\ncpu: 189.83701010928675 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 135.1938184758643,
            "unit": "ns/iter",
            "extra": "iterations: 5192797\ncpu: 135.1854064389575 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3433.015458163718,
            "unit": "ns/iter",
            "extra": "iterations: 206040\ncpu: 3432.8136915162117 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1775.2411997428726,
            "unit": "ns/iter",
            "extra": "iterations: 379648\ncpu: 1775.1050631110952 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1695.7055783319606,
            "unit": "ns/iter",
            "extra": "iterations: 411736\ncpu: 1695.6019026755023 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1378.5276653805581,
            "unit": "ns/iter",
            "extra": "iterations: 509355\ncpu: 1378.506299143033 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1779.0505209986798,
            "unit": "ns/iter",
            "extra": "iterations: 393955\ncpu: 1778.9179094058934 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 472.63611352642806,
            "unit": "ns/iter",
            "extra": "iterations: 1478986\ncpu: 472.61233169211926 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2206.8611698733903,
            "unit": "ns/iter",
            "extra": "iterations: 316718\ncpu: 2206.7071527352387 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 146.23722089768518,
            "unit": "ns/iter",
            "extra": "iterations: 4924583\ncpu: 146.23454107687937 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1112.3396647494158,
            "unit": "ns/iter",
            "extra": "iterations: 628664\ncpu: 1112.294785449776 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 453.19606341287863,
            "unit": "ns/iter",
            "extra": "iterations: 1545806\ncpu: 453.1718022830806 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1639.5859266977352,
            "unit": "ns/iter",
            "extra": "iterations: 428883\ncpu: 1639.4887906491974 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 202.68838286438145,
            "unit": "ns/iter",
            "extra": "iterations: 3483406\ncpu: 202.68679390228948 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3365.862391535641,
            "unit": "ns/iter",
            "extra": "iterations: 209631\ncpu: 3365.7173032614605 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727991070940,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6601510203.999965,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6601063751.000001 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1084.0617386900406,
            "unit": "ns/iter",
            "extra": "iterations: 641575\ncpu: 1083.9896582628683 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2240.324828316433,
            "unit": "ns/iter",
            "extra": "iterations: 313658\ncpu: 2240.157429429506 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 203.38226417485637,
            "unit": "ns/iter",
            "extra": "iterations: 3458187\ncpu: 203.36923509341727 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 150.90407366018263,
            "unit": "ns/iter",
            "extra": "iterations: 4873406\ncpu: 150.89283059937935 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3330.3493835392374,
            "unit": "ns/iter",
            "extra": "iterations: 216072\ncpu: 3330.120570920811 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1771.899126500936,
            "unit": "ns/iter",
            "extra": "iterations: 396566\ncpu: 1771.7784454542248 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1731.7597663481474,
            "unit": "ns/iter",
            "extra": "iterations: 399740\ncpu: 1731.6238680142067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1415.341302039596,
            "unit": "ns/iter",
            "extra": "iterations: 500123\ncpu: 1415.3239803008448 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1824.3855066159563,
            "unit": "ns/iter",
            "extra": "iterations: 381581\ncpu: 1824.3258757642554 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 474.6870893302955,
            "unit": "ns/iter",
            "extra": "iterations: 1482487\ncpu: 474.6815783207548 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2400.000500359554,
            "unit": "ns/iter",
            "extra": "iterations: 291790\ncpu: 2399.9940093903115 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 147.9375166039234,
            "unit": "ns/iter",
            "extra": "iterations: 4735322\ncpu: 147.9370465197507 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1101.893726811911,
            "unit": "ns/iter",
            "extra": "iterations: 635833\ncpu: 1101.8693619236474 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 448.3199976507855,
            "unit": "ns/iter",
            "extra": "iterations: 1566449\ncpu: 448.31871896244206 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1603.0283298176432,
            "unit": "ns/iter",
            "extra": "iterations: 437066\ncpu: 1603.007236893286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 208.2402748448587,
            "unit": "ns/iter",
            "extra": "iterations: 3311104\ncpu: 208.23953309832586 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3444.280434452209,
            "unit": "ns/iter",
            "extra": "iterations: 204119\ncpu: 3444.208471528863 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728051921356,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6476566929.000001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6472378973 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1041.9432071103004,
            "unit": "ns/iter",
            "extra": "iterations: 666756\ncpu: 1041.8850209071982 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2234.4695804095495,
            "unit": "ns/iter",
            "extra": "iterations: 316523\ncpu: 2234.301621051234 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 199.5936933770335,
            "unit": "ns/iter",
            "extra": "iterations: 3490743\ncpu: 199.59001077993994 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 142.24172622194183,
            "unit": "ns/iter",
            "extra": "iterations: 4910423\ncpu: 142.23443031282633 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3196.1402253056795,
            "unit": "ns/iter",
            "extra": "iterations: 218370\ncpu: 3196.06169345606 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1740.106900355055,
            "unit": "ns/iter",
            "extra": "iterations: 401617\ncpu: 1739.9210167896288 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1686.3624624508382,
            "unit": "ns/iter",
            "extra": "iterations: 416788\ncpu: 1686.3568576830455 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1382.7799922676036,
            "unit": "ns/iter",
            "extra": "iterations: 512132\ncpu: 1382.6728987839076 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1752.8418057947704,
            "unit": "ns/iter",
            "extra": "iterations: 400710\ncpu: 1752.7297272341582 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 464.0948855427842,
            "unit": "ns/iter",
            "extra": "iterations: 1510346\ncpu: 464.07703334202796 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2405.014702936218,
            "unit": "ns/iter",
            "extra": "iterations: 294499\ncpu: 2405.008186785015 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 149.3240645388424,
            "unit": "ns/iter",
            "extra": "iterations: 4694102\ncpu: 149.31331573110208 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1079.9812787440148,
            "unit": "ns/iter",
            "extra": "iterations: 649262\ncpu: 1079.9135495377814 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 438.2508890305473,
            "unit": "ns/iter",
            "extra": "iterations: 1592465\ncpu: 438.2186792174396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1562.0361858103818,
            "unit": "ns/iter",
            "extra": "iterations: 450287\ncpu: 1561.9489170240288 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 211.31974815536205,
            "unit": "ns/iter",
            "extra": "iterations: 3380179\ncpu: 211.30323512453072 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3341.5506336321855,
            "unit": "ns/iter",
            "extra": "iterations: 210690\ncpu: 3341.2958279937334 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728052369684,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6433234743.000071,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6432940370.000001 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1069.5909789852094,
            "unit": "ns/iter",
            "extra": "iterations: 653585\ncpu: 1069.5282771177424 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2215.572399811603,
            "unit": "ns/iter",
            "extra": "iterations: 318150\ncpu: 2215.483866100894 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 195.11242584902269,
            "unit": "ns/iter",
            "extra": "iterations: 3458653\ncpu: 195.10629600598818 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 136.2061426688963,
            "unit": "ns/iter",
            "extra": "iterations: 5121943\ncpu: 136.20061039336073 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3473.737210692548,
            "unit": "ns/iter",
            "extra": "iterations: 207478\ncpu: 3473.6269965972256 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1754.7800964004336,
            "unit": "ns/iter",
            "extra": "iterations: 400621\ncpu: 1754.6581781783802 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1714.4558625453071,
            "unit": "ns/iter",
            "extra": "iterations: 408338\ncpu: 1714.2574386904942 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1406.3312669506115,
            "unit": "ns/iter",
            "extra": "iterations: 498133\ncpu: 1406.1809376210795 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1790.8074309908486,
            "unit": "ns/iter",
            "extra": "iterations: 391361\ncpu: 1790.7977085095354 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 480.05388233589053,
            "unit": "ns/iter",
            "extra": "iterations: 1458864\ncpu: 480.0334280645758 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2318.8436514762325,
            "unit": "ns/iter",
            "extra": "iterations: 301007\ncpu: 2318.805379941334 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 142.1822246081362,
            "unit": "ns/iter",
            "extra": "iterations: 4919599\ncpu: 142.17891966398054 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1144.26057243759,
            "unit": "ns/iter",
            "extra": "iterations: 615019\ncpu: 1144.242982737121 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 449.77776658022447,
            "unit": "ns/iter",
            "extra": "iterations: 1557889\ncpu: 449.7753857944933 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1674.786142951919,
            "unit": "ns/iter",
            "extra": "iterations: 422240\ncpu: 1674.7774298976838 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 210.9531054678023,
            "unit": "ns/iter",
            "extra": "iterations: 3348642\ncpu: 210.94859438542602 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3213.7175289417746,
            "unit": "ns/iter",
            "extra": "iterations: 217332\ncpu: 3213.6501895717115 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728054403117,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6337498589.000006,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6337282102 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1071.00218471577,
            "unit": "ns/iter",
            "extra": "iterations: 656836\ncpu: 1070.9838102661852 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2213.849232737453,
            "unit": "ns/iter",
            "extra": "iterations: 317297\ncpu: 2213.839191672155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 189.939282994826,
            "unit": "ns/iter",
            "extra": "iterations: 3682428\ncpu: 189.9401321628016 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 133.7014831079329,
            "unit": "ns/iter",
            "extra": "iterations: 5163279\ncpu: 133.7021890546685 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3323.038183948757,
            "unit": "ns/iter",
            "extra": "iterations: 210743\ncpu: 3322.9514337368214 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1728.2659043137805,
            "unit": "ns/iter",
            "extra": "iterations: 407248\ncpu: 1728.273594959336 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1664.5526159290514,
            "unit": "ns/iter",
            "extra": "iterations: 420386\ncpu: 1664.514246430664 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1350.834848610817,
            "unit": "ns/iter",
            "extra": "iterations: 516847\ncpu: 1350.8163866676218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1752.186969079661,
            "unit": "ns/iter",
            "extra": "iterations: 399189\ncpu: 1752.0984721522893 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 468.0941453933242,
            "unit": "ns/iter",
            "extra": "iterations: 1494635\ncpu: 468.0626072586282 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2260.2885569095783,
            "unit": "ns/iter",
            "extra": "iterations: 310729\ncpu: 2260.205825655153 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 143.19506605534158,
            "unit": "ns/iter",
            "extra": "iterations: 4984004\ncpu: 143.1936912570695 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1109.9155069693222,
            "unit": "ns/iter",
            "extra": "iterations: 630265\ncpu: 1109.8577122321578 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 429.05788632978897,
            "unit": "ns/iter",
            "extra": "iterations: 1607668\ncpu: 429.04308476625744 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1653.3827042390626,
            "unit": "ns/iter",
            "extra": "iterations: 432765\ncpu: 1653.309842524231 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 203.44449435695464,
            "unit": "ns/iter",
            "extra": "iterations: 3425994\ncpu: 203.4403831413597 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3192.926992207455,
            "unit": "ns/iter",
            "extra": "iterations: 217648\ncpu: 3192.8184178122583 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728055623515,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6348054746.999992,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6344963833 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1088.126740080621,
            "unit": "ns/iter",
            "extra": "iterations: 642930\ncpu: 1088.0872490006682 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2206.4449579926536,
            "unit": "ns/iter",
            "extra": "iterations: 314587\ncpu: 2206.4320394676215 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 189.0431641560868,
            "unit": "ns/iter",
            "extra": "iterations: 3702586\ncpu: 189.03637187630474 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 135.53462753011607,
            "unit": "ns/iter",
            "extra": "iterations: 5191534\ncpu: 135.5313953448056 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3403.1124227470605,
            "unit": "ns/iter",
            "extra": "iterations: 208730\ncpu: 3402.965826666031 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1749.9168887323171,
            "unit": "ns/iter",
            "extra": "iterations: 399657\ncpu: 1749.9107009260458 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1665.566032903209,
            "unit": "ns/iter",
            "extra": "iterations: 421661\ncpu: 1665.531996082163 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1348.5714959613802,
            "unit": "ns/iter",
            "extra": "iterations: 519365\ncpu: 1348.5556766435911 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1746.903289475379,
            "unit": "ns/iter",
            "extra": "iterations: 402283\ncpu: 1746.8804200028383 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 472.5515056974417,
            "unit": "ns/iter",
            "extra": "iterations: 1482768\ncpu: 472.550466424957 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2274.3214473859603,
            "unit": "ns/iter",
            "extra": "iterations: 309413\ncpu: 2274.2782882425754 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 140.50643940366206,
            "unit": "ns/iter",
            "extra": "iterations: 4988816\ncpu: 140.50640632967804 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1110.7431182908397,
            "unit": "ns/iter",
            "extra": "iterations: 630294\ncpu: 1110.7340114295878 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 428.7258172069613,
            "unit": "ns/iter",
            "extra": "iterations: 1636091\ncpu: 428.71720093808943 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1629.1300504728877,
            "unit": "ns/iter",
            "extra": "iterations: 430133\ncpu: 1629.1008781004957 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 203.53938163873653,
            "unit": "ns/iter",
            "extra": "iterations: 3443521\ncpu: 203.53514324437123 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3215.0072692228473,
            "unit": "ns/iter",
            "extra": "iterations: 217905\ncpu: 3214.87595511807 ns\nthreads: 1"
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
        "date": 1728055908486,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6344971050.000027,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6344627233 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1101.7370410671253,
            "unit": "ns/iter",
            "extra": "iterations: 639636\ncpu: 1101.7205598183969 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2452.780128552883,
            "unit": "ns/iter",
            "extra": "iterations: 285485\ncpu: 2452.770236614885 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 198.62687127674397,
            "unit": "ns/iter",
            "extra": "iterations: 3538894\ncpu: 198.6160851384644 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 139.6465332796852,
            "unit": "ns/iter",
            "extra": "iterations: 5018331\ncpu: 139.63682148507118 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3210.1044838342923,
            "unit": "ns/iter",
            "extra": "iterations: 218273\ncpu: 3209.9551295854308 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1738.539516699736,
            "unit": "ns/iter",
            "extra": "iterations: 402855\ncpu: 1738.4620868550705 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1660.937222939609,
            "unit": "ns/iter",
            "extra": "iterations: 422065\ncpu: 1660.8355940435736 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1362.435432927389,
            "unit": "ns/iter",
            "extra": "iterations: 516068\ncpu: 1362.2952866676494 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1748.9823828016085,
            "unit": "ns/iter",
            "extra": "iterations: 397339\ncpu: 1748.891606411652 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 469.6774187476461,
            "unit": "ns/iter",
            "extra": "iterations: 1487464\ncpu: 469.65462491865367 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2274.872455433494,
            "unit": "ns/iter",
            "extra": "iterations: 306732\ncpu: 2274.74261570361 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 145.2288361287263,
            "unit": "ns/iter",
            "extra": "iterations: 4809647\ncpu: 145.22502919652956 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1105.2671683420886,
            "unit": "ns/iter",
            "extra": "iterations: 631351\ncpu: 1105.2285368994415 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 450.09989079108357,
            "unit": "ns/iter",
            "extra": "iterations: 1556650\ncpu: 450.0697626312914 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1659.6565147250892,
            "unit": "ns/iter",
            "extra": "iterations: 424615\ncpu: 1659.5676106590681 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 198.45794650635798,
            "unit": "ns/iter",
            "extra": "iterations: 3519446\ncpu: 198.44997849093326 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3325.380590459243,
            "unit": "ns/iter",
            "extra": "iterations: 212885\ncpu: 3325.1354534138145 ns\nthreads: 1"
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
        "date": 1728056123059,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6410052627.000028,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6405045373.999999 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1059.0876412458883,
            "unit": "ns/iter",
            "extra": "iterations: 657453\ncpu: 1059.0606020506411 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2368.5063835362707,
            "unit": "ns/iter",
            "extra": "iterations: 297719\ncpu: 2368.441355775076 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 190.48707913190503,
            "unit": "ns/iter",
            "extra": "iterations: 3674637\ncpu: 190.47995761213954 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 138.9728414495219,
            "unit": "ns/iter",
            "extra": "iterations: 5041543\ncpu: 138.96627580088057 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3062.40769395784,
            "unit": "ns/iter",
            "extra": "iterations: 228387\ncpu: 3062.356469501325 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1727.9609674477003,
            "unit": "ns/iter",
            "extra": "iterations: 404611\ncpu: 1727.8527746403315 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1667.5505133436793,
            "unit": "ns/iter",
            "extra": "iterations: 422037\ncpu: 1666.444979942514 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1364.7976551895158,
            "unit": "ns/iter",
            "extra": "iterations: 517142\ncpu: 1364.755454014564 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1751.708448345078,
            "unit": "ns/iter",
            "extra": "iterations: 399960\ncpu: 1751.6058105810569 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 480.813844012553,
            "unit": "ns/iter",
            "extra": "iterations: 1453437\ncpu: 480.79270584139533 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2335.4275254419463,
            "unit": "ns/iter",
            "extra": "iterations: 300195\ncpu: 2335.320708206331 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 143.7310665749886,
            "unit": "ns/iter",
            "extra": "iterations: 4862921\ncpu: 143.72789091165583 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1151.345635421773,
            "unit": "ns/iter",
            "extra": "iterations: 608352\ncpu: 1151.3088310714882 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 430.5515434301001,
            "unit": "ns/iter",
            "extra": "iterations: 1625600\ncpu: 430.53453617125956 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1621.6906341211466,
            "unit": "ns/iter",
            "extra": "iterations: 432378\ncpu: 1621.6653715036375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 197.02103190509737,
            "unit": "ns/iter",
            "extra": "iterations: 3552032\ncpu: 197.0124303497264 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3192.577458775558,
            "unit": "ns/iter",
            "extra": "iterations: 217832\ncpu: 3192.4448657681082 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728057413833,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6225248083.999987,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6224850679 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1081.8219977573242,
            "unit": "ns/iter",
            "extra": "iterations: 652812\ncpu: 1081.7871102246895 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2265.8699601398657,
            "unit": "ns/iter",
            "extra": "iterations: 309582\ncpu: 2265.7696765315823 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 191.02292728007103,
            "unit": "ns/iter",
            "extra": "iterations: 3621799\ncpu: 191.0147214133086 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 143.33314716261862,
            "unit": "ns/iter",
            "extra": "iterations: 4880825\ncpu: 143.33024580885427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3141.66345841714,
            "unit": "ns/iter",
            "extra": "iterations: 218707\ncpu: 3141.559008170749 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1753.4799732977162,
            "unit": "ns/iter",
            "extra": "iterations: 398468\ncpu: 1753.43226808677 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1684.3705622382022,
            "unit": "ns/iter",
            "extra": "iterations: 417919\ncpu: 1684.314199641558 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1385.3348612367004,
            "unit": "ns/iter",
            "extra": "iterations: 507231\ncpu: 1385.2914668070373 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1758.3805186938082,
            "unit": "ns/iter",
            "extra": "iterations: 397807\ncpu: 1758.3113620423937 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 466.5211749431316,
            "unit": "ns/iter",
            "extra": "iterations: 1499579\ncpu: 466.5119470197963 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2290.174322373654,
            "unit": "ns/iter",
            "extra": "iterations: 298579\ncpu: 2290.1064609366367 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 147.8712194543859,
            "unit": "ns/iter",
            "extra": "iterations: 4658157\ncpu: 147.86805983568158 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1101.005415221975,
            "unit": "ns/iter",
            "extra": "iterations: 637647\ncpu: 1100.9762658649652 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 447.39845175750577,
            "unit": "ns/iter",
            "extra": "iterations: 1577014\ncpu: 447.3867454569184 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1624.9050568774837,
            "unit": "ns/iter",
            "extra": "iterations: 428288\ncpu: 1624.8594333719373 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 195.78872366754095,
            "unit": "ns/iter",
            "extra": "iterations: 3521606\ncpu: 195.78613933529107 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3274.3216976510857,
            "unit": "ns/iter",
            "extra": "iterations: 212364\ncpu: 3274.2287063720796 ns\nthreads: 1"
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
        "date": 1728069376683,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6431999513.999927,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6431693132 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1050.396733484703,
            "unit": "ns/iter",
            "extra": "iterations: 662296\ncpu: 1050.365686943603 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2315.626768147975,
            "unit": "ns/iter",
            "extra": "iterations: 304556\ncpu: 2315.5021736560793 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 193.82490294461317,
            "unit": "ns/iter",
            "extra": "iterations: 3611340\ncpu: 193.82025619299208 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 143.57970260736687,
            "unit": "ns/iter",
            "extra": "iterations: 4868379\ncpu: 143.5749349013295 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3320.1102727908865,
            "unit": "ns/iter",
            "extra": "iterations: 212727\ncpu: 3320.018582502457 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1807.5273293278744,
            "unit": "ns/iter",
            "extra": "iterations: 390295\ncpu: 1807.4745103063049 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1707.9759361039244,
            "unit": "ns/iter",
            "extra": "iterations: 408288\ncpu: 1707.9356287718467 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1396.878037105977,
            "unit": "ns/iter",
            "extra": "iterations: 505580\ncpu: 1396.800213616044 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1799.573634933225,
            "unit": "ns/iter",
            "extra": "iterations: 387710\ncpu: 1799.51467333832 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 474.6322063535836,
            "unit": "ns/iter",
            "extra": "iterations: 1479441\ncpu: 474.622358715218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2318.7098800476,
            "unit": "ns/iter",
            "extra": "iterations: 299452\ncpu: 2318.668113754466 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 147.5236207420083,
            "unit": "ns/iter",
            "extra": "iterations: 4741680\ncpu: 147.52216893590466 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1139.9113569697524,
            "unit": "ns/iter",
            "extra": "iterations: 619778\ncpu: 1139.8986992116536 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 467.0938498910176,
            "unit": "ns/iter",
            "extra": "iterations: 1509144\ncpu: 467.0853463950434 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1670.7170102525863,
            "unit": "ns/iter",
            "extra": "iterations: 417266\ncpu: 1670.6708406627906 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 198.36880147591577,
            "unit": "ns/iter",
            "extra": "iterations: 3537334\ncpu: 198.36682597685174 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3283.073367358901,
            "unit": "ns/iter",
            "extra": "iterations: 210625\ncpu: 3283.045445697332 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728073518103,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6439390790.999937,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6435258304 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1063.1476473121172,
            "unit": "ns/iter",
            "extra": "iterations: 650320\ncpu: 1063.089402140484 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2321.6027937321937,
            "unit": "ns/iter",
            "extra": "iterations: 297022\ncpu: 2321.3731777444054 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 188.03657058088228,
            "unit": "ns/iter",
            "extra": "iterations: 3677929\ncpu: 188.0186189021049 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 135.99314237785583,
            "unit": "ns/iter",
            "extra": "iterations: 5143328\ncpu: 135.98284048771538 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3068.9493907823376,
            "unit": "ns/iter",
            "extra": "iterations: 228654\ncpu: 3068.7036220665304 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1745.0562301631405,
            "unit": "ns/iter",
            "extra": "iterations: 403609\ncpu: 1744.917610856052 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1656.940599993476,
            "unit": "ns/iter",
            "extra": "iterations: 427138\ncpu: 1655.7120204711327 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1348.9180345180266,
            "unit": "ns/iter",
            "extra": "iterations: 511386\ncpu: 1348.9028678923544 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1720.9190288681934,
            "unit": "ns/iter",
            "extra": "iterations: 406330\ncpu: 1720.8174808653082 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 461.48914477502717,
            "unit": "ns/iter",
            "extra": "iterations: 1515952\ncpu: 461.4531772773806 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2152.44789334247,
            "unit": "ns/iter",
            "extra": "iterations: 322003\ncpu: 2152.3136958351324 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 147.9485260510931,
            "unit": "ns/iter",
            "extra": "iterations: 4719397\ncpu: 147.9466213586183 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1102.1274802209882,
            "unit": "ns/iter",
            "extra": "iterations: 637040\ncpu: 1102.0968102473992 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 436.45211051514775,
            "unit": "ns/iter",
            "extra": "iterations: 1577340\ncpu: 436.4468662431688 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1602.6657047678943,
            "unit": "ns/iter",
            "extra": "iterations: 433171\ncpu: 1602.6229525983927 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 200.49511575217804,
            "unit": "ns/iter",
            "extra": "iterations: 3500539\ncpu: 200.4917879789375 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3240.6149320915574,
            "unit": "ns/iter",
            "extra": "iterations: 218603\ncpu: 3240.4736074070265 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728077739631,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6299200148.999944,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6295914406.000001 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1082.2566919091464,
            "unit": "ns/iter",
            "extra": "iterations: 653924\ncpu: 1082.2065041197445 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2312.542258572224,
            "unit": "ns/iter",
            "extra": "iterations: 301146\ncpu: 2312.5123461709563 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 194.06313530127284,
            "unit": "ns/iter",
            "extra": "iterations: 3593964\ncpu: 194.05652143427127 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 137.19873022374483,
            "unit": "ns/iter",
            "extra": "iterations: 5107829\ncpu: 137.19677557725615 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3129.6558586854007,
            "unit": "ns/iter",
            "extra": "iterations: 229275\ncpu: 3129.557269654343 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1773.2494821422235,
            "unit": "ns/iter",
            "extra": "iterations: 391034\ncpu: 1773.211991796112 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1663.9731376691054,
            "unit": "ns/iter",
            "extra": "iterations: 413702\ncpu: 1663.925436666973 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1363.9799170964066,
            "unit": "ns/iter",
            "extra": "iterations: 511679\ncpu: 1363.9392978801172 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1739.0455812700857,
            "unit": "ns/iter",
            "extra": "iterations: 401371\ncpu: 1739.0074245523454 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 473.35608250016594,
            "unit": "ns/iter",
            "extra": "iterations: 1478882\ncpu: 473.34604789293604 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2213.156358895829,
            "unit": "ns/iter",
            "extra": "iterations: 316816\ncpu: 2213.1157359476747 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 147.48911381073557,
            "unit": "ns/iter",
            "extra": "iterations: 4744957\ncpu: 147.4853567693033 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1113.9421983233176,
            "unit": "ns/iter",
            "extra": "iterations: 629134\ncpu: 1113.941759625137 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 436.2700259713171,
            "unit": "ns/iter",
            "extra": "iterations: 1601383\ncpu: 436.25854402101186 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1625.7775346615751,
            "unit": "ns/iter",
            "extra": "iterations: 431892\ncpu: 1625.7756290924572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 196.7054444245292,
            "unit": "ns/iter",
            "extra": "iterations: 3555913\ncpu: 196.70008461961822 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3220.880425620118,
            "unit": "ns/iter",
            "extra": "iterations: 217095\ncpu: 3220.784223496617 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728164064276,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6351732786.000071,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6348989707 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1071.0585465091237,
            "unit": "ns/iter",
            "extra": "iterations: 658690\ncpu: 1071.0010687880485 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2303.0890142477097,
            "unit": "ns/iter",
            "extra": "iterations: 303839\ncpu: 2303.0548185058515 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 195.95835423061476,
            "unit": "ns/iter",
            "extra": "iterations: 3581012\ncpu: 195.94502140735656 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 137.3264338659808,
            "unit": "ns/iter",
            "extra": "iterations: 5119429\ncpu: 137.32240333834082 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3072.603067648357,
            "unit": "ns/iter",
            "extra": "iterations: 232556\ncpu: 3072.448059822147 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1733.6924459765,
            "unit": "ns/iter",
            "extra": "iterations: 404963\ncpu: 1733.570731153215 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1665.617289528529,
            "unit": "ns/iter",
            "extra": "iterations: 420532\ncpu: 1665.5185978712643 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1371.5885575402467,
            "unit": "ns/iter",
            "extra": "iterations: 516777\ncpu: 1371.477875369838 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1745.109031421669,
            "unit": "ns/iter",
            "extra": "iterations: 391832\ncpu: 1745.0480333408168 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 468.2371506168565,
            "unit": "ns/iter",
            "extra": "iterations: 1495636\ncpu: 468.1881213075901 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2170.276085306704,
            "unit": "ns/iter",
            "extra": "iterations: 320209\ncpu: 2170.2050442055033 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 140.35649216698977,
            "unit": "ns/iter",
            "extra": "iterations: 4991184\ncpu: 140.35178787237692 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1110.3167777625406,
            "unit": "ns/iter",
            "extra": "iterations: 629637\ncpu: 1110.2878881006031 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 437.3465388874284,
            "unit": "ns/iter",
            "extra": "iterations: 1594834\ncpu: 437.32080266661006 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1583.9934868853052,
            "unit": "ns/iter",
            "extra": "iterations: 441110\ncpu: 1583.9402076579554 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 195.70720850428003,
            "unit": "ns/iter",
            "extra": "iterations: 3559615\ncpu: 195.69848256061312 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3205.939707287014,
            "unit": "ns/iter",
            "extra": "iterations: 218849\ncpu: 3205.808146256096 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728167263840,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6347006970.9999275,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6346775994 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1072.5369831969579,
            "unit": "ns/iter",
            "extra": "iterations: 656609\ncpu: 1072.5072927724118 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2307.6786986605343,
            "unit": "ns/iter",
            "extra": "iterations: 301474\ncpu: 2307.5875133510663 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 198.51961531993445,
            "unit": "ns/iter",
            "extra": "iterations: 3556098\ncpu: 198.13685505854988 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 138.61973218768162,
            "unit": "ns/iter",
            "extra": "iterations: 5050104\ncpu: 138.61337113057465 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3037.5265369797407,
            "unit": "ns/iter",
            "extra": "iterations: 219863\ncpu: 3037.4506579096965 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1744.8407097787406,
            "unit": "ns/iter",
            "extra": "iterations: 400012\ncpu: 1744.7946536603927 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1680.4673321582532,
            "unit": "ns/iter",
            "extra": "iterations: 418638\ncpu: 1680.4306489138598 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1365.7853309725294,
            "unit": "ns/iter",
            "extra": "iterations: 513940\ncpu: 1365.7787037397381 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1753.1246339165118,
            "unit": "ns/iter",
            "extra": "iterations: 398816\ncpu: 1753.0638690523951 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 469.38815031808514,
            "unit": "ns/iter",
            "extra": "iterations: 1482217\ncpu: 469.37792981729314 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2267.1436271380276,
            "unit": "ns/iter",
            "extra": "iterations: 310206\ncpu: 2267.0800919389058 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 144.76869460004525,
            "unit": "ns/iter",
            "extra": "iterations: 4829991\ncpu: 144.76766996046126 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1122.6958173749674,
            "unit": "ns/iter",
            "extra": "iterations: 625325\ncpu: 1122.6628313277097 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 455.55622094444465,
            "unit": "ns/iter",
            "extra": "iterations: 1572848\ncpu: 455.5469384199868 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1604.7398414890797,
            "unit": "ns/iter",
            "extra": "iterations: 439213\ncpu: 1604.6694451211672 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 196.87328041666902,
            "unit": "ns/iter",
            "extra": "iterations: 3562709\ncpu: 196.86635675268437 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3187.0446396684297,
            "unit": "ns/iter",
            "extra": "iterations: 221171\ncpu: 3186.8294351429495 ns\nthreads: 1"
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
        "date": 1728328219396,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6314659339.999934,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6314477210.000001 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1074.9838831914983,
            "unit": "ns/iter",
            "extra": "iterations: 665020\ncpu: 1074.9586884604971 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2288.852796317065,
            "unit": "ns/iter",
            "extra": "iterations: 307601\ncpu: 2288.7986189901903 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 194.93087819734205,
            "unit": "ns/iter",
            "extra": "iterations: 3600398\ncpu: 194.92680642528978 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 136.5074959411678,
            "unit": "ns/iter",
            "extra": "iterations: 5119704\ncpu: 136.5056600928492 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3007.89303570496,
            "unit": "ns/iter",
            "extra": "iterations: 232012\ncpu: 3007.7849809492577 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1746.1354469676653,
            "unit": "ns/iter",
            "extra": "iterations: 399123\ncpu: 1746.111885308541 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1682.1066998516146,
            "unit": "ns/iter",
            "extra": "iterations: 422681\ncpu: 1682.0973405475984 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1354.2352504830596,
            "unit": "ns/iter",
            "extra": "iterations: 504186\ncpu: 1354.2154304165517 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1765.9394514895873,
            "unit": "ns/iter",
            "extra": "iterations: 401232\ncpu: 1765.8786437771619 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 458.0783412698859,
            "unit": "ns/iter",
            "extra": "iterations: 1529411\ncpu: 458.0715183819124 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2183.507734220753,
            "unit": "ns/iter",
            "extra": "iterations: 317873\ncpu: 2183.5153504701593 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 141.36043782632515,
            "unit": "ns/iter",
            "extra": "iterations: 4968180\ncpu: 141.35574898654988 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1094.4597312751785,
            "unit": "ns/iter",
            "extra": "iterations: 637455\ncpu: 1094.4645049454482 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 445.0856197058296,
            "unit": "ns/iter",
            "extra": "iterations: 1614056\ncpu: 445.087550246088 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1606.622210558722,
            "unit": "ns/iter",
            "extra": "iterations: 442024\ncpu: 1606.611627422941 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 200.9704129655395,
            "unit": "ns/iter",
            "extra": "iterations: 3605870\ncpu: 200.96919522889047 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3362.692299635094,
            "unit": "ns/iter",
            "extra": "iterations: 210029\ncpu: 3362.6794156997476 ns\nthreads: 1"
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
        "date": 1728414618197,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6413897413.000086,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6411014172.000001 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1073.6570102844728,
            "unit": "ns/iter",
            "extra": "iterations: 651072\ncpu: 1073.6014066032653 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2332.429978493634,
            "unit": "ns/iter",
            "extra": "iterations: 299915\ncpu: 2332.3232249137236 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 196.27813094804782,
            "unit": "ns/iter",
            "extra": "iterations: 3583100\ncpu: 196.25602132231862 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 137.68247697893796,
            "unit": "ns/iter",
            "extra": "iterations: 5107932\ncpu: 137.6770552153005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3027.4573943931687,
            "unit": "ns/iter",
            "extra": "iterations: 231378\ncpu: 3027.1723802608676 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1743.8097515840784,
            "unit": "ns/iter",
            "extra": "iterations: 402027\ncpu: 1743.7433132600538 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1670.1677614166786,
            "unit": "ns/iter",
            "extra": "iterations: 421253\ncpu: 1669.9640239950822 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1370.6384289670361,
            "unit": "ns/iter",
            "extra": "iterations: 515788\ncpu: 1370.5400241959865 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1756.033467437501,
            "unit": "ns/iter",
            "extra": "iterations: 397700\ncpu: 1755.9080211214466 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 464.40392683347216,
            "unit": "ns/iter",
            "extra": "iterations: 1508340\ncpu: 464.37979832133396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2216.476476571604,
            "unit": "ns/iter",
            "extra": "iterations: 316578\ncpu: 2216.295690161656 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 142.87135892184205,
            "unit": "ns/iter",
            "extra": "iterations: 4911526\ncpu: 142.86620960573111 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1118.3349837858284,
            "unit": "ns/iter",
            "extra": "iterations: 631544\ncpu: 1118.2549307728361 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 439.6397615198349,
            "unit": "ns/iter",
            "extra": "iterations: 1604662\ncpu: 439.62357057124893 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1588.1228320277821,
            "unit": "ns/iter",
            "extra": "iterations: 439120\ncpu: 1588.0273478775787 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 201.58385069816643,
            "unit": "ns/iter",
            "extra": "iterations: 3511223\ncpu: 201.5700147783271 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3201.281623953243,
            "unit": "ns/iter",
            "extra": "iterations: 217691\ncpu: 3200.9783546402928 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728500522320,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6276381786.999991,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6276014745 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1061.8864877705146,
            "unit": "ns/iter",
            "extra": "iterations: 660942\ncpu: 1061.8275748855415 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2291.003586847677,
            "unit": "ns/iter",
            "extra": "iterations: 306676\ncpu: 2290.9265739738366 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 194.64993411591493,
            "unit": "ns/iter",
            "extra": "iterations: 3570665\ncpu: 194.644648545859 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 135.16455713053787,
            "unit": "ns/iter",
            "extra": "iterations: 5182893\ncpu: 135.15908682660424 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 4095.396399025451,
            "unit": "ns/iter",
            "extra": "iterations: 233048\ncpu: 4093.538116611171 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1750.415363158723,
            "unit": "ns/iter",
            "extra": "iterations: 389334\ncpu: 1750.3728546697678 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1647.1851602279394,
            "unit": "ns/iter",
            "extra": "iterations: 424427\ncpu: 1647.1507797571794 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1356.557865100242,
            "unit": "ns/iter",
            "extra": "iterations: 517851\ncpu: 1356.555319966554 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1748.2348180451504,
            "unit": "ns/iter",
            "extra": "iterations: 402682\ncpu: 1747.8525486612273 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 458.12991877901953,
            "unit": "ns/iter",
            "extra": "iterations: 1525099\ncpu: 458.1102675957426 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2191.054540733504,
            "unit": "ns/iter",
            "extra": "iterations: 319651\ncpu: 2190.9245301907354 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 140.08317292950338,
            "unit": "ns/iter",
            "extra": "iterations: 4993127\ncpu: 140.0758492623958 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1101.6070611762011,
            "unit": "ns/iter",
            "extra": "iterations: 630065\ncpu: 1101.5608421353356 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 440.1725418545746,
            "unit": "ns/iter",
            "extra": "iterations: 1593254\ncpu: 440.1343301193641 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1603.6269661694057,
            "unit": "ns/iter",
            "extra": "iterations: 438861\ncpu: 1603.5446941058806 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 199.54154642166148,
            "unit": "ns/iter",
            "extra": "iterations: 3520243\ncpu: 199.528151891787 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3171.7800881592793,
            "unit": "ns/iter",
            "extra": "iterations: 219829\ncpu: 3171.596136087591 ns\nthreads: 1"
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
        "date": 1728501278167,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6363341558.000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6363040433 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1048.9230718648764,
            "unit": "ns/iter",
            "extra": "iterations: 669131\ncpu: 1048.8970889108411 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2264.947839690543,
            "unit": "ns/iter",
            "extra": "iterations: 310025\ncpu: 2264.8954568179965 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 194.52205013997644,
            "unit": "ns/iter",
            "extra": "iterations: 3602993\ncpu: 194.52159524040138 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 136.0647449310758,
            "unit": "ns/iter",
            "extra": "iterations: 5154195\ncpu: 136.06284705953118 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3001.0291095816187,
            "unit": "ns/iter",
            "extra": "iterations: 233497\ncpu: 3001.0121714625816 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1753.4404125372782,
            "unit": "ns/iter",
            "extra": "iterations: 399673\ncpu: 1753.393399103764 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1656.3644160793333,
            "unit": "ns/iter",
            "extra": "iterations: 425563\ncpu: 1656.3555102299786 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1344.1996286691135,
            "unit": "ns/iter",
            "extra": "iterations: 521368\ncpu: 1344.1613658682522 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1734.3088718458555,
            "unit": "ns/iter",
            "extra": "iterations: 406026\ncpu: 1734.2733494899353 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 456.68890001233206,
            "unit": "ns/iter",
            "extra": "iterations: 1530299\ncpu: 456.68339585924144 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2207.1791344594512,
            "unit": "ns/iter",
            "extra": "iterations: 317605\ncpu: 2207.149037326235 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 140.50531463564855,
            "unit": "ns/iter",
            "extra": "iterations: 4979363\ncpu: 140.50450067609026 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1105.10712120489,
            "unit": "ns/iter",
            "extra": "iterations: 636690\ncpu: 1105.0456957074857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 437.29419965445607,
            "unit": "ns/iter",
            "extra": "iterations: 1606025\ncpu: 437.2851481141325 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1572.6467101923813,
            "unit": "ns/iter",
            "extra": "iterations: 445102\ncpu: 1572.5897996414303 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 195.0688627919155,
            "unit": "ns/iter",
            "extra": "iterations: 3542087\ncpu: 195.0649588787625 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3193.5225639485584,
            "unit": "ns/iter",
            "extra": "iterations: 219864\ncpu: 3193.335598369896 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728568229567,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6329765504.000079,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6329028096 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1068.8105146868907,
            "unit": "ns/iter",
            "extra": "iterations: 649016\ncpu: 1068.8203541977384 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2261.2395839799397,
            "unit": "ns/iter",
            "extra": "iterations: 306139\ncpu: 2261.223218864635 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 191.25366432016472,
            "unit": "ns/iter",
            "extra": "iterations: 3674829\ncpu: 191.2508288140756 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 136.6485400806567,
            "unit": "ns/iter",
            "extra": "iterations: 5128434\ncpu: 136.64837960281835 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3188.725501722765,
            "unit": "ns/iter",
            "extra": "iterations: 221138\ncpu: 3188.668139351902 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1711.2098157493363,
            "unit": "ns/iter",
            "extra": "iterations: 414273\ncpu: 1711.2125337639677 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1708.7617195751022,
            "unit": "ns/iter",
            "extra": "iterations: 411939\ncpu: 1708.7282874406142 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1410.5904906095857,
            "unit": "ns/iter",
            "extra": "iterations: 497361\ncpu: 1410.5871389192162 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1779.4492203362647,
            "unit": "ns/iter",
            "extra": "iterations: 394016\ncpu: 1779.3859310281825 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 465.2461177754149,
            "unit": "ns/iter",
            "extra": "iterations: 1500042\ncpu: 465.2500636648847 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2370.327887603565,
            "unit": "ns/iter",
            "extra": "iterations: 296379\ncpu: 2370.315902948581 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 140.47854879032244,
            "unit": "ns/iter",
            "extra": "iterations: 4995336\ncpu: 140.47424237328528 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1111.7784673609763,
            "unit": "ns/iter",
            "extra": "iterations: 630977\ncpu: 1111.7150228930645 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 431.93617303352477,
            "unit": "ns/iter",
            "extra": "iterations: 1621697\ncpu: 431.9187406772042 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1630.1355703882766,
            "unit": "ns/iter",
            "extra": "iterations: 428331\ncpu: 1630.0810307916038 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 195.77305243842702,
            "unit": "ns/iter",
            "extra": "iterations: 3585445\ncpu: 195.76447581820375 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3161.562255579289,
            "unit": "ns/iter",
            "extra": "iterations: 221442\ncpu: 3161.348140822422 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728569237980,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6183611536.000057,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6183221582 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1077.3097584665984,
            "unit": "ns/iter",
            "extra": "iterations: 651711\ncpu: 1077.2624000515557 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2275.8731845336283,
            "unit": "ns/iter",
            "extra": "iterations: 310664\ncpu: 2275.7811107820635 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 190.31273474960264,
            "unit": "ns/iter",
            "extra": "iterations: 3651497\ncpu: 190.30181101066228 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 134.1505790499664,
            "unit": "ns/iter",
            "extra": "iterations: 5219325\ncpu: 134.1450174112552 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3096.4717606530485,
            "unit": "ns/iter",
            "extra": "iterations: 230494\ncpu: 3096.345080566085 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.732173507501663,
            "unit": "ns/iter",
            "extra": "iterations: 30829284\ncpu: 22.730518100906867 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1705.962792565257,
            "unit": "ns/iter",
            "extra": "iterations: 413412\ncpu: 1705.8345814828806 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1406.7691726955513,
            "unit": "ns/iter",
            "extra": "iterations: 502016\ncpu: 1406.667375143419 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1823.2147337430852,
            "unit": "ns/iter",
            "extra": "iterations: 389962\ncpu: 1823.1180012411487 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 463.1948050832186,
            "unit": "ns/iter",
            "extra": "iterations: 1513133\ncpu: 463.17909793785594 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2405.088464853503,
            "unit": "ns/iter",
            "extra": "iterations: 292376\ncpu: 2404.9120584452894 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 139.04174509906628,
            "unit": "ns/iter",
            "extra": "iterations: 5045215\ncpu: 139.03460248968628 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1104.3903404194052,
            "unit": "ns/iter",
            "extra": "iterations: 634541\ncpu: 1104.3847127293557 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 442.0413822549635,
            "unit": "ns/iter",
            "extra": "iterations: 1601991\ncpu: 442.02644022344623 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1576.8085617910172,
            "unit": "ns/iter",
            "extra": "iterations: 441730\ncpu: 1576.793108912691 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 192.5016324074872,
            "unit": "ns/iter",
            "extra": "iterations: 3633284\ncpu: 192.50088982859532 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3197.645799147027,
            "unit": "ns/iter",
            "extra": "iterations: 218777\ncpu: 3197.6376401541193 ns\nthreads: 1"
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
        "date": 1728587427728,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6231540561.000088,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6231216352 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1049.8019553233755,
            "unit": "ns/iter",
            "extra": "iterations: 671091\ncpu: 1049.7787379058886 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2276.8665715917305,
            "unit": "ns/iter",
            "extra": "iterations: 307828\ncpu: 2276.8484088516984 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 190.18372780225423,
            "unit": "ns/iter",
            "extra": "iterations: 3693785\ncpu: 190.1844230240799 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 134.16687920385786,
            "unit": "ns/iter",
            "extra": "iterations: 5216342\ncpu: 134.16464679654837 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3077.2631659431004,
            "unit": "ns/iter",
            "extra": "iterations: 228886\ncpu: 3077.2228838810593 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.73805276414435,
            "unit": "ns/iter",
            "extra": "iterations: 30798149\ncpu: 22.737125598035153 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1697.229491128072,
            "unit": "ns/iter",
            "extra": "iterations: 412992\ncpu: 1697.1879140516053 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1396.8249687820587,
            "unit": "ns/iter",
            "extra": "iterations: 502916\ncpu: 1396.8019709056782 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1773.049245493677,
            "unit": "ns/iter",
            "extra": "iterations: 391183\ncpu: 1773.012180999682 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 465.21807133496907,
            "unit": "ns/iter",
            "extra": "iterations: 1482414\ncpu: 465.2200842679572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2384.9645459274575,
            "unit": "ns/iter",
            "extra": "iterations: 294127\ncpu: 2384.949226014607 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 140.09595151114794,
            "unit": "ns/iter",
            "extra": "iterations: 4996284\ncpu: 140.0948941253144 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1111.7528480599854,
            "unit": "ns/iter",
            "extra": "iterations: 621739\ncpu: 1111.7199644867037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 434.30378473051076,
            "unit": "ns/iter",
            "extra": "iterations: 1592980\ncpu: 434.29578274680307 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1587.1687809162604,
            "unit": "ns/iter",
            "extra": "iterations: 437271\ncpu: 1587.1592376352455 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 191.95815988793427,
            "unit": "ns/iter",
            "extra": "iterations: 3639474\ncpu: 191.95391229611778 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3128.467380304953,
            "unit": "ns/iter",
            "extra": "iterations: 222335\ncpu: 3128.4026806395696 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728592957449,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6078907442.000059,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6078657275.999999 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1176.5387222903798,
            "unit": "ns/iter",
            "extra": "iterations: 592075\ncpu: 1176.515230333994 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2376.1476746842177,
            "unit": "ns/iter",
            "extra": "iterations: 293659\ncpu: 2376.141606421054 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 216.21575393346416,
            "unit": "ns/iter",
            "extra": "iterations: 3244358\ncpu: 216.21262172670205 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 149.34858950665554,
            "unit": "ns/iter",
            "extra": "iterations: 4693925\ncpu: 149.34515101966906 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3136.8445879961682,
            "unit": "ns/iter",
            "extra": "iterations: 223226\ncpu: 3136.653140763171 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.688024927282775,
            "unit": "ns/iter",
            "extra": "iterations: 30643054\ncpu: 22.687115422633756 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1764.0356296205928,
            "unit": "ns/iter",
            "extra": "iterations: 398208\ncpu: 1763.9259356919006 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1451.7441188003759,
            "unit": "ns/iter",
            "extra": "iterations: 484510\ncpu: 1451.6637117912926 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1854.3389302576456,
            "unit": "ns/iter",
            "extra": "iterations: 377231\ncpu: 1854.1870312885223 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 474.0714184054892,
            "unit": "ns/iter",
            "extra": "iterations: 1475516\ncpu: 474.0532586566332 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2402.929597893401,
            "unit": "ns/iter",
            "extra": "iterations: 291639\ncpu: 2402.8395550663645 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 154.83252595125845,
            "unit": "ns/iter",
            "extra": "iterations: 4522229\ncpu: 154.83090307899008 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1128.518250554197,
            "unit": "ns/iter",
            "extra": "iterations: 619762\ncpu: 1128.5159351493005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 484.14675924996465,
            "unit": "ns/iter",
            "extra": "iterations: 1444897\ncpu: 484.145509333883 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1795.7525184486178,
            "unit": "ns/iter",
            "extra": "iterations: 388235\ncpu: 1795.7134261465274 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 232.41252420015383,
            "unit": "ns/iter",
            "extra": "iterations: 3017023\ncpu: 232.40665516968252 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3236.927592450315,
            "unit": "ns/iter",
            "extra": "iterations: 217063\ncpu: 3236.8606902143583 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728595481573,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6102685909.999991,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6102452624 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1065.4603791484517,
            "unit": "ns/iter",
            "extra": "iterations: 655627\ncpu: 1065.450304822713 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2241.519664105006,
            "unit": "ns/iter",
            "extra": "iterations: 313312\ncpu: 2241.4612622561526 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 186.8751048294911,
            "unit": "ns/iter",
            "extra": "iterations: 3751330\ncpu: 186.87367040489627 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 132.99983007624684,
            "unit": "ns/iter",
            "extra": "iterations: 5278838\ncpu: 132.99465507371133 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2999.2824093086397,
            "unit": "ns/iter",
            "extra": "iterations: 233760\ncpu: 2999.1809334360037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 24.021828934570998,
            "unit": "ns/iter",
            "extra": "iterations: 29231248\ncpu: 24.021063247111453 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1759.5718155656675,
            "unit": "ns/iter",
            "extra": "iterations: 390925\ncpu: 1759.4916058067374 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1442.1280331315686,
            "unit": "ns/iter",
            "extra": "iterations: 488233\ncpu: 1442.0449027411105 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1851.2428725673444,
            "unit": "ns/iter",
            "extra": "iterations: 379730\ncpu: 1851.1374792615786 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 461.26461474018566,
            "unit": "ns/iter",
            "extra": "iterations: 1537352\ncpu: 461.2494366937429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2363.420447805156,
            "unit": "ns/iter",
            "extra": "iterations: 301783\ncpu: 2363.3359268083395 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 140.30373469008543,
            "unit": "ns/iter",
            "extra": "iterations: 5004351\ncpu: 140.29846227812519 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1080.2937232871002,
            "unit": "ns/iter",
            "extra": "iterations: 651838\ncpu: 1080.2571068271557 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 425.0937193771304,
            "unit": "ns/iter",
            "extra": "iterations: 1643993\ncpu: 425.079535618462 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1555.8833485225211,
            "unit": "ns/iter",
            "extra": "iterations: 447684\ncpu: 1555.8338917629405 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 193.47477997376217,
            "unit": "ns/iter",
            "extra": "iterations: 3578664\ncpu: 193.4699387816237 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3211.57328972226,
            "unit": "ns/iter",
            "extra": "iterations: 217070\ncpu: 3211.343861427193 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728596573837,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6097579111.9999485,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6097165910 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1060.4012339073236,
            "unit": "ns/iter",
            "extra": "iterations: 663421\ncpu: 1060.3860112959953 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2238.8627905046883,
            "unit": "ns/iter",
            "extra": "iterations: 313076\ncpu: 2238.818197498368 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 192.10103785830472,
            "unit": "ns/iter",
            "extra": "iterations: 3657243\ncpu: 192.09349939284868 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 138.00162208561028,
            "unit": "ns/iter",
            "extra": "iterations: 5071249\ncpu: 137.99319654783275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3014.472530214511,
            "unit": "ns/iter",
            "extra": "iterations: 232419\ncpu: 3014.344270477027 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.68977018780971,
            "unit": "ns/iter",
            "extra": "iterations: 30874428\ncpu: 22.689367038637915 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1691.1989168123507,
            "unit": "ns/iter",
            "extra": "iterations: 414148\ncpu: 1691.1239508581502 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1408.2112288794392,
            "unit": "ns/iter",
            "extra": "iterations: 498625\ncpu: 1408.1064126347471 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1766.3757960979763,
            "unit": "ns/iter",
            "extra": "iterations: 396465\ncpu: 1766.273075807449 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 470.0944695152115,
            "unit": "ns/iter",
            "extra": "iterations: 1488893\ncpu: 470.06608198171347 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2226.4417491434356,
            "unit": "ns/iter",
            "extra": "iterations: 315240\ncpu: 2226.343836442071 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 146.26158567273671,
            "unit": "ns/iter",
            "extra": "iterations: 4772662\ncpu: 146.25479700846168 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1098.4992648012455,
            "unit": "ns/iter",
            "extra": "iterations: 632482\ncpu: 1098.4510009771034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 425.6813259656307,
            "unit": "ns/iter",
            "extra": "iterations: 1638323\ncpu: 425.662395632607 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1575.2913536458516,
            "unit": "ns/iter",
            "extra": "iterations: 444326\ncpu: 1575.2136224303836 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 205.92983562539715,
            "unit": "ns/iter",
            "extra": "iterations: 3567765\ncpu: 205.91685663153288 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3158.5907489694314,
            "unit": "ns/iter",
            "extra": "iterations: 219435\ncpu: 3158.411698224989 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728597619008,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6198320409.999951,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6197415173 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1073.1876285065396,
            "unit": "ns/iter",
            "extra": "iterations: 654149\ncpu: 1073.142524103836 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2307.4004281950274,
            "unit": "ns/iter",
            "extra": "iterations: 303600\ncpu: 2307.396926877472 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 192.09161641603438,
            "unit": "ns/iter",
            "extra": "iterations: 3547552\ncpu: 192.08747947880687 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 135.78709189602924,
            "unit": "ns/iter",
            "extra": "iterations: 5163237\ncpu: 135.78288775045567 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3112.6289156952926,
            "unit": "ns/iter",
            "extra": "iterations: 220427\ncpu: 3112.5439034238107 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.413635720226996,
            "unit": "ns/iter",
            "extra": "iterations: 30992657\ncpu: 22.413273666726894 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1721.9589401082628,
            "unit": "ns/iter",
            "extra": "iterations: 407551\ncpu: 1721.9313877281625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1423.8432937941134,
            "unit": "ns/iter",
            "extra": "iterations: 488883\ncpu: 1423.8200612416447 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1809.4157465898522,
            "unit": "ns/iter",
            "extra": "iterations: 389913\ncpu: 1809.355943505346 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 470.7458828899615,
            "unit": "ns/iter",
            "extra": "iterations: 1489880\ncpu: 470.7314649501978 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2333.9745890479694,
            "unit": "ns/iter",
            "extra": "iterations: 301130\ncpu: 2333.9597217148735 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 142.17822446547484,
            "unit": "ns/iter",
            "extra": "iterations: 4925390\ncpu: 142.1781223415809 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1113.3194527245948,
            "unit": "ns/iter",
            "extra": "iterations: 632369\ncpu: 1113.3097574359274 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 422.7490345732372,
            "unit": "ns/iter",
            "extra": "iterations: 1646940\ncpu: 422.74122250962535 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1771.8267354682396,
            "unit": "ns/iter",
            "extra": "iterations: 394951\ncpu: 1771.7601272056525 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 197.40855727063544,
            "unit": "ns/iter",
            "extra": "iterations: 3581843\ncpu: 197.4091876723802 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3267.74614833222,
            "unit": "ns/iter",
            "extra": "iterations: 214842\ncpu: 3267.7264454808624 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728598938934,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6102350798.999965,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6101848693 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1077.1487209656746,
            "unit": "ns/iter",
            "extra": "iterations: 654400\ncpu: 1077.0700275061129 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2280.979906777337,
            "unit": "ns/iter",
            "extra": "iterations: 307865\ncpu: 2280.783992983934 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 190.58389323509502,
            "unit": "ns/iter",
            "extra": "iterations: 3683682\ncpu: 190.57730960490056 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 138.89750584691024,
            "unit": "ns/iter",
            "extra": "iterations: 5037702\ncpu: 138.89059674430922 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3097.0873300534845,
            "unit": "ns/iter",
            "extra": "iterations: 224997\ncpu: 3096.9451059347393 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.989111889799084,
            "unit": "ns/iter",
            "extra": "iterations: 30452392\ncpu: 22.987488700394987 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1652.0168028168343,
            "unit": "ns/iter",
            "extra": "iterations: 415228\ncpu: 1651.9342722552424 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1376.4713264886561,
            "unit": "ns/iter",
            "extra": "iterations: 497916\ncpu: 1376.392355337047 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1734.719536209943,
            "unit": "ns/iter",
            "extra": "iterations: 403717\ncpu: 1734.6323612827791 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 453.0170563654138,
            "unit": "ns/iter",
            "extra": "iterations: 1546109\ncpu: 452.9922178837311 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2205.0763082633066,
            "unit": "ns/iter",
            "extra": "iterations: 316794\ncpu: 2204.983462439307 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 147.05966679118274,
            "unit": "ns/iter",
            "extra": "iterations: 4762599\ncpu: 147.05360098551222 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1079.0392566520616,
            "unit": "ns/iter",
            "extra": "iterations: 650947\ncpu: 1078.9961809486842 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 436.4525220904463,
            "unit": "ns/iter",
            "extra": "iterations: 1603630\ncpu: 436.43388499840864 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1724.2800962664235,
            "unit": "ns/iter",
            "extra": "iterations: 403879\ncpu: 1724.2264589146728 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 195.60148618877773,
            "unit": "ns/iter",
            "extra": "iterations: 3595371\ncpu: 195.5903969298305 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3179.5933011703196,
            "unit": "ns/iter",
            "extra": "iterations: 216396\ncpu: 3179.4007236732696 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728653920271,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6065963957.000009,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6064469708 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1077.0928668741874,
            "unit": "ns/iter",
            "extra": "iterations: 651061\ncpu: 1077.070526417648 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2282.7795306712383,
            "unit": "ns/iter",
            "extra": "iterations: 303625\ncpu: 2282.7444347468095 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 195.61139430030642,
            "unit": "ns/iter",
            "extra": "iterations: 3652054\ncpu: 195.60045223865802 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 139.78832370736902,
            "unit": "ns/iter",
            "extra": "iterations: 5018545\ncpu: 139.781099501947 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3220.8174283047574,
            "unit": "ns/iter",
            "extra": "iterations: 225851\ncpu: 3220.6139268809948 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.742063395674027,
            "unit": "ns/iter",
            "extra": "iterations: 30465044\ncpu: 22.740160854519008 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1738.7805705972419,
            "unit": "ns/iter",
            "extra": "iterations: 408309\ncpu: 1738.7079760671468 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1436.4157799265056,
            "unit": "ns/iter",
            "extra": "iterations: 490091\ncpu: 1436.3513714799897 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1798.840020780207,
            "unit": "ns/iter",
            "extra": "iterations: 390757\ncpu: 1798.7768920326462 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 447.7076137437281,
            "unit": "ns/iter",
            "extra": "iterations: 1563449\ncpu: 447.6857364710968 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2218.552804646964,
            "unit": "ns/iter",
            "extra": "iterations: 317794\ncpu: 2218.4529443601778 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 146.60969120605048,
            "unit": "ns/iter",
            "extra": "iterations: 4790735\ncpu: 146.60273381850658 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1065.1916822971252,
            "unit": "ns/iter",
            "extra": "iterations: 660567\ncpu: 1065.153923826048 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 432.957078212721,
            "unit": "ns/iter",
            "extra": "iterations: 1617640\ncpu: 432.94151170841445 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1707.6437992956426,
            "unit": "ns/iter",
            "extra": "iterations: 403180\ncpu: 1707.5658117962162 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 196.58164550423112,
            "unit": "ns/iter",
            "extra": "iterations: 3553233\ncpu: 196.57332519426606 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3271.052407966246,
            "unit": "ns/iter",
            "extra": "iterations: 206419\ncpu: 3271.0031586239616 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728654947001,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6383864121.999977,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6383527656 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1063.920462671789,
            "unit": "ns/iter",
            "extra": "iterations: 664229\ncpu: 1063.9005463477204 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2225.262257338573,
            "unit": "ns/iter",
            "extra": "iterations: 311854\ncpu: 2225.169303584372 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 187.50285278776298,
            "unit": "ns/iter",
            "extra": "iterations: 3713210\ncpu: 187.49255819089157 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 132.96810299155956,
            "unit": "ns/iter",
            "extra": "iterations: 5289054\ncpu: 132.96333805629519 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3044.701425840829,
            "unit": "ns/iter",
            "extra": "iterations: 232284\ncpu: 3044.608767715381 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.79186265340142,
            "unit": "ns/iter",
            "extra": "iterations: 30871562\ncpu: 22.790750950664595 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1667.444676231127,
            "unit": "ns/iter",
            "extra": "iterations: 421844\ncpu: 1667.4229833777426 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1380.6818652789011,
            "unit": "ns/iter",
            "extra": "iterations: 509586\ncpu: 1380.6538562676337 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1746.225002559679,
            "unit": "ns/iter",
            "extra": "iterations: 400471\ncpu: 1746.1772013454151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 467.94233292443107,
            "unit": "ns/iter",
            "extra": "iterations: 1501446\ncpu: 467.9317311445096 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2196.7414688103586,
            "unit": "ns/iter",
            "extra": "iterations: 318244\ncpu: 2196.6955889191886 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 139.93922110141548,
            "unit": "ns/iter",
            "extra": "iterations: 4954894\ncpu: 139.9341372388592 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1091.7509902124611,
            "unit": "ns/iter",
            "extra": "iterations: 641529\ncpu: 1091.7153565933909 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 421.42820578279765,
            "unit": "ns/iter",
            "extra": "iterations: 1660858\ncpu: 421.41036560621194 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1619.7473716346535,
            "unit": "ns/iter",
            "extra": "iterations: 435632\ncpu: 1619.6793004186986 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 193.49823189325772,
            "unit": "ns/iter",
            "extra": "iterations: 3599613\ncpu: 193.49176175327773 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3309.8233165876336,
            "unit": "ns/iter",
            "extra": "iterations: 211995\ncpu: 3309.6413500318286 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728656578808,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6205570908.000027,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6205081205 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1072.022524437383,
            "unit": "ns/iter",
            "extra": "iterations: 651559\ncpu: 1071.984692100024 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2271.4124666127555,
            "unit": "ns/iter",
            "extra": "iterations: 310750\ncpu: 2271.320862429609 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 192.3124334170335,
            "unit": "ns/iter",
            "extra": "iterations: 3642072\ncpu: 192.3005190452026 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 135.31930454602428,
            "unit": "ns/iter",
            "extra": "iterations: 5167042\ncpu: 135.3125052980022 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3100.2778589541517,
            "unit": "ns/iter",
            "extra": "iterations: 225161\ncpu: 3100.122507894352 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 23.037305049498823,
            "unit": "ns/iter",
            "extra": "iterations: 30372966\ncpu: 23.036035499463537 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1681.005764806671,
            "unit": "ns/iter",
            "extra": "iterations: 417707\ncpu: 1680.9124673515173 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1385.8587733924962,
            "unit": "ns/iter",
            "extra": "iterations: 506144\ncpu: 1385.758363232597 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1750.5917660194457,
            "unit": "ns/iter",
            "extra": "iterations: 399418\ncpu: 1750.432238907614 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 472.15589354119027,
            "unit": "ns/iter",
            "extra": "iterations: 1483166\ncpu: 472.1336013635695 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2264.324400582501,
            "unit": "ns/iter",
            "extra": "iterations: 308341\ncpu: 2264.292711640683 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 140.5594560485938,
            "unit": "ns/iter",
            "extra": "iterations: 4991990\ncpu: 140.55491697699705 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1116.5950405447184,
            "unit": "ns/iter",
            "extra": "iterations: 627085\ncpu: 1116.5711984818618 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 433.75466077084326,
            "unit": "ns/iter",
            "extra": "iterations: 1611536\ncpu: 433.73193710844726 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1638.5654629406245,
            "unit": "ns/iter",
            "extra": "iterations: 423186\ncpu: 1638.510692697771 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 202.11565993173497,
            "unit": "ns/iter",
            "extra": "iterations: 3469715\ncpu: 202.10523083307936 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3244.015346327308,
            "unit": "ns/iter",
            "extra": "iterations: 219792\ncpu: 3243.89378139333 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728661174737,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6359412871.000018,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6358780267 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1108.5612964604843,
            "unit": "ns/iter",
            "extra": "iterations: 638014\ncpu: 1108.437002949779 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2258.146274130973,
            "unit": "ns/iter",
            "extra": "iterations: 304278\ncpu: 2257.9384970323244 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 202.09757876269302,
            "unit": "ns/iter",
            "extra": "iterations: 3543271\ncpu: 202.07898887779123 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 135.00307763239954,
            "unit": "ns/iter",
            "extra": "iterations: 5205300\ncpu: 134.99288782586967 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3058.841925587918,
            "unit": "ns/iter",
            "extra": "iterations: 210907\ncpu: 3058.568558653816 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 23.39944917653415,
            "unit": "ns/iter",
            "extra": "iterations: 30010704\ncpu: 23.397234533385156 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1701.2308821104275,
            "unit": "ns/iter",
            "extra": "iterations: 412284\ncpu: 1701.0661388751444 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1409.5475724063867,
            "unit": "ns/iter",
            "extra": "iterations: 498230\ncpu: 1409.4296971278313 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1787.2286822888425,
            "unit": "ns/iter",
            "extra": "iterations: 393030\ncpu: 1787.1096277637857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 469.1834295108136,
            "unit": "ns/iter",
            "extra": "iterations: 1495152\ncpu: 469.1464292593664 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2359.8942385852656,
            "unit": "ns/iter",
            "extra": "iterations: 298937\ncpu: 2359.698682331063 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 140.2758742001748,
            "unit": "ns/iter",
            "extra": "iterations: 4988560\ncpu: 140.26284518979426 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1106.3950055552448,
            "unit": "ns/iter",
            "extra": "iterations: 633624\ncpu: 1106.3241922654454 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 437.79995986720104,
            "unit": "ns/iter",
            "extra": "iterations: 1594705\ncpu: 437.7575501425026 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1628.2246609229162,
            "unit": "ns/iter",
            "extra": "iterations: 429327\ncpu: 1628.113626676167 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 209.4442784280615,
            "unit": "ns/iter",
            "extra": "iterations: 3495639\ncpu: 209.43839509743358 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3194.079484185953,
            "unit": "ns/iter",
            "extra": "iterations: 220157\ncpu: 3193.8604359616133 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728663521888,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6579251217.999968,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6578856057 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1054.6488989319832,
            "unit": "ns/iter",
            "extra": "iterations: 663356\ncpu: 1054.600612642381 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2271.4964997081047,
            "unit": "ns/iter",
            "extra": "iterations: 308260\ncpu: 2271.432209822873 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 189.03270664640925,
            "unit": "ns/iter",
            "extra": "iterations: 3705944\ncpu: 189.02276693873398 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 134.6270621024799,
            "unit": "ns/iter",
            "extra": "iterations: 5203609\ncpu: 134.61835103290807 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3017.304801697217,
            "unit": "ns/iter",
            "extra": "iterations: 231918\ncpu: 3017.1749928854106 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.72975807631938,
            "unit": "ns/iter",
            "extra": "iterations: 30856467\ncpu: 22.72872616946068 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1721.7013874846448,
            "unit": "ns/iter",
            "extra": "iterations: 405482\ncpu: 1721.5703829023246 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1420.5779976990696,
            "unit": "ns/iter",
            "extra": "iterations: 489367\ncpu: 1420.4850633573574 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1806.9425646087273,
            "unit": "ns/iter",
            "extra": "iterations: 387061\ncpu: 1806.8580895517737 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 451.54568280662727,
            "unit": "ns/iter",
            "extra": "iterations: 1544881\ncpu: 451.53968493366153 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2314.2537788487875,
            "unit": "ns/iter",
            "extra": "iterations: 301613\ncpu: 2314.1882942711272 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 140.23014108864018,
            "unit": "ns/iter",
            "extra": "iterations: 4977438\ncpu: 140.22487070657598 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1073.0359546329346,
            "unit": "ns/iter",
            "extra": "iterations: 653073\ncpu: 1073.0055537436094 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 426.5033382515877,
            "unit": "ns/iter",
            "extra": "iterations: 1629296\ncpu: 426.4602699570861 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1595.0936016593828,
            "unit": "ns/iter",
            "extra": "iterations: 440708\ncpu: 1594.9937850005037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 195.09779552618832,
            "unit": "ns/iter",
            "extra": "iterations: 3618233\ncpu: 195.08091988548009 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3196.4910884586675,
            "unit": "ns/iter",
            "extra": "iterations: 219154\ncpu: 3196.2202013196256 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728669652697,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6134009278.999997,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6133513776 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1046.4594539673326,
            "unit": "ns/iter",
            "extra": "iterations: 669264\ncpu: 1046.3843027564615 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2252.6332241611385,
            "unit": "ns/iter",
            "extra": "iterations: 310214\ncpu: 2252.559942491313 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 193.41869447388405,
            "unit": "ns/iter",
            "extra": "iterations: 3644906\ncpu: 193.408274726426 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 141.0571796947764,
            "unit": "ns/iter",
            "extra": "iterations: 4973951\ncpu: 141.0506528914338 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3030.290289394675,
            "unit": "ns/iter",
            "extra": "iterations: 231345\ncpu: 3030.0826255160077 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.995305214894287,
            "unit": "ns/iter",
            "extra": "iterations: 30446974\ncpu: 22.994065288721295 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1728.5034506852576,
            "unit": "ns/iter",
            "extra": "iterations: 406441\ncpu: 1728.4158635570725 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1419.1763149747374,
            "unit": "ns/iter",
            "extra": "iterations: 497462\ncpu: 1419.0827480289952 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1798.8840605396715,
            "unit": "ns/iter",
            "extra": "iterations: 389298\ncpu: 1798.7262534099857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 452.94260355909375,
            "unit": "ns/iter",
            "extra": "iterations: 1548319\ncpu: 452.9179613503418 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2299.3216575336032,
            "unit": "ns/iter",
            "extra": "iterations: 307131\ncpu: 2299.2546177364084 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 147.57867886251103,
            "unit": "ns/iter",
            "extra": "iterations: 4521316\ncpu: 147.56775040718182 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1070.8250193710508,
            "unit": "ns/iter",
            "extra": "iterations: 653038\ncpu: 1070.7605682977091 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 429.43585663532616,
            "unit": "ns/iter",
            "extra": "iterations: 1630192\ncpu: 429.4179059889859 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1575.6024097457812,
            "unit": "ns/iter",
            "extra": "iterations: 450421\ncpu: 1575.5298887041288 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 193.0356439334244,
            "unit": "ns/iter",
            "extra": "iterations: 3600248\ncpu: 193.03050567627636 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3161.4627922331497,
            "unit": "ns/iter",
            "extra": "iterations: 221056\ncpu: 3161.3683772437803 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728670565979,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6292233868.000039,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6291827070 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1075.6566026785838,
            "unit": "ns/iter",
            "extra": "iterations: 654810\ncpu: 1075.6120324979768 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2245.5920400407244,
            "unit": "ns/iter",
            "extra": "iterations: 311283\ncpu: 2245.5676731463004 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 192.38172654154445,
            "unit": "ns/iter",
            "extra": "iterations: 3656987\ncpu: 192.3792086217427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 148.47241829363915,
            "unit": "ns/iter",
            "extra": "iterations: 4883708\ncpu: 148.46449808219484 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3079.130438019176,
            "unit": "ns/iter",
            "extra": "iterations: 228392\ncpu: 3078.9438640582916 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 23.13862871737906,
            "unit": "ns/iter",
            "extra": "iterations: 30222158\ncpu: 23.137652612364775 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1685.262255736356,
            "unit": "ns/iter",
            "extra": "iterations: 414153\ncpu: 1685.1765555241666 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1409.4985657929249,
            "unit": "ns/iter",
            "extra": "iterations: 497836\ncpu: 1409.482558513244 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1805.04348464805,
            "unit": "ns/iter",
            "extra": "iterations: 394829\ncpu: 1805.0037155325456 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 468.5879390319951,
            "unit": "ns/iter",
            "extra": "iterations: 1492915\ncpu: 468.57697658607503 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2273.8316780901328,
            "unit": "ns/iter",
            "extra": "iterations: 306098\ncpu: 2273.7538206718154 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 151.67002055432079,
            "unit": "ns/iter",
            "extra": "iterations: 4617030\ncpu: 151.66649751030383 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1113.410831137125,
            "unit": "ns/iter",
            "extra": "iterations: 628392\ncpu: 1113.3731858457754 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 439.5563979367849,
            "unit": "ns/iter",
            "extra": "iterations: 1216525\ncpu: 439.54881486200577 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1647.1278889106768,
            "unit": "ns/iter",
            "extra": "iterations: 433165\ncpu: 1647.0659794766475 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 200.0877910077106,
            "unit": "ns/iter",
            "extra": "iterations: 3497545\ncpu: 200.07850906850348 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3315.905674450938,
            "unit": "ns/iter",
            "extra": "iterations: 213166\ncpu: 3315.677823855575 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728672036762,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6182452634.000014,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6182191793 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1072.7780535593524,
            "unit": "ns/iter",
            "extra": "iterations: 654302\ncpu: 1072.7644176542333 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2274.21576511468,
            "unit": "ns/iter",
            "extra": "iterations: 307895\ncpu: 2274.1960960717133 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 191.5920024196918,
            "unit": "ns/iter",
            "extra": "iterations: 3669860\ncpu: 191.5883859329786 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 142.3003870163265,
            "unit": "ns/iter",
            "extra": "iterations: 4913488\ncpu: 142.29767224423853 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3184.1800264780345,
            "unit": "ns/iter",
            "extra": "iterations: 220562\ncpu: 3184.1444627814385 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 23.00818381565316,
            "unit": "ns/iter",
            "extra": "iterations: 30401589\ncpu: 23.007249653957228 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1707.6239410021626,
            "unit": "ns/iter",
            "extra": "iterations: 408287\ncpu: 1707.577108749479 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1411.3567622529715,
            "unit": "ns/iter",
            "extra": "iterations: 490761\ncpu: 1411.326354376163 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1779.6024326985464,
            "unit": "ns/iter",
            "extra": "iterations: 392897\ncpu: 1779.5616382919716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 456.6032951108093,
            "unit": "ns/iter",
            "extra": "iterations: 1536094\ncpu: 456.5919859071125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2307.4010096987186,
            "unit": "ns/iter",
            "extra": "iterations: 303853\ncpu: 2307.3722918648223 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 148.8215983299956,
            "unit": "ns/iter",
            "extra": "iterations: 4674917\ncpu: 148.82169758308007 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1078.2262682226394,
            "unit": "ns/iter",
            "extra": "iterations: 649393\ncpu: 1078.2097250817299 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 440.8486613495904,
            "unit": "ns/iter",
            "extra": "iterations: 1541067\ncpu: 440.8357657389337 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1655.3328984673162,
            "unit": "ns/iter",
            "extra": "iterations: 429251\ncpu: 1655.3337348078367 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 204.01306288113955,
            "unit": "ns/iter",
            "extra": "iterations: 3466540\ncpu: 204.00908312034437 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3180.6082496259733,
            "unit": "ns/iter",
            "extra": "iterations: 219913\ncpu: 3180.565955627899 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728672481596,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6133449696.999947,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6133164436 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1061.350272787481,
            "unit": "ns/iter",
            "extra": "iterations: 647207\ncpu: 1061.3110890333394 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2302.384788030269,
            "unit": "ns/iter",
            "extra": "iterations: 304760\ncpu: 2302.2353458459156 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 188.9912998589589,
            "unit": "ns/iter",
            "extra": "iterations: 3703848\ncpu: 188.98302927117962 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 136.550905008004,
            "unit": "ns/iter",
            "extra": "iterations: 5097966\ncpu: 136.5442380353263 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3110.2444607019606,
            "unit": "ns/iter",
            "extra": "iterations: 224171\ncpu: 3110.1148364418254 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.672885739523092,
            "unit": "ns/iter",
            "extra": "iterations: 30881720\ncpu: 22.67196830357891 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1712.9029918251654,
            "unit": "ns/iter",
            "extra": "iterations: 411254\ncpu: 1712.8142923837838 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1400.5705146252053,
            "unit": "ns/iter",
            "extra": "iterations: 500811\ncpu: 1400.5576015702504 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1785.4966321776935,
            "unit": "ns/iter",
            "extra": "iterations: 392687\ncpu: 1785.4561622870142 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 465.7115997616824,
            "unit": "ns/iter",
            "extra": "iterations: 1515557\ncpu: 465.69308973532435 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2319.700609901236,
            "unit": "ns/iter",
            "extra": "iterations: 302672\ncpu: 2319.672083972083 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 143.05750977530425,
            "unit": "ns/iter",
            "extra": "iterations: 4892177\ncpu: 143.0548911047167 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1093.6232676666727,
            "unit": "ns/iter",
            "extra": "iterations: 639239\ncpu: 1093.56324942627 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 434.7193886349784,
            "unit": "ns/iter",
            "extra": "iterations: 1611934\ncpu: 434.7153624155841 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1610.822442725884,
            "unit": "ns/iter",
            "extra": "iterations: 433049\ncpu: 1610.7788518158513 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 197.23142185694314,
            "unit": "ns/iter",
            "extra": "iterations: 3549682\ncpu: 197.22264839498303 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3192.962197669479,
            "unit": "ns/iter",
            "extra": "iterations: 221653\ncpu: 3192.9333282202397 ns\nthreads: 1"
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
        "date": 1728673874407,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6197623475,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6197151227 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1070.9494032571602,
            "unit": "ns/iter",
            "extra": "iterations: 658659\ncpu: 1070.8577655509146 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2305.5910038272823,
            "unit": "ns/iter",
            "extra": "iterations: 301795\ncpu: 2305.457505922896 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 188.7461408086542,
            "unit": "ns/iter",
            "extra": "iterations: 3707642\ncpu: 188.73194580275046 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 135.58295655961163,
            "unit": "ns/iter",
            "extra": "iterations: 5177511\ncpu: 135.57589795560062 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3025.147910605529,
            "unit": "ns/iter",
            "extra": "iterations: 232005\ncpu: 3024.936152238097 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 23.92191539403958,
            "unit": "ns/iter",
            "extra": "iterations: 29248979\ncpu: 23.920370280275407 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1717.3814378666689,
            "unit": "ns/iter",
            "extra": "iterations: 408035\ncpu: 1717.2784834634272 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1418.324623377865,
            "unit": "ns/iter",
            "extra": "iterations: 494262\ncpu: 1418.2683010225342 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1785.9956143957647,
            "unit": "ns/iter",
            "extra": "iterations: 389228\ncpu: 1785.912647599866 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 456.58316362009305,
            "unit": "ns/iter",
            "extra": "iterations: 1532978\ncpu: 456.5799346109339 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2266.4883700583096,
            "unit": "ns/iter",
            "extra": "iterations: 308600\ncpu: 2266.4504925469887 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 143.7418833254684,
            "unit": "ns/iter",
            "extra": "iterations: 4848753\ncpu: 143.73937381425685 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1095.9890900184473,
            "unit": "ns/iter",
            "extra": "iterations: 632815\ncpu: 1095.9632989104216 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 432.2722613788277,
            "unit": "ns/iter",
            "extra": "iterations: 1619565\ncpu: 432.2584792830162 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1593.7677284140411,
            "unit": "ns/iter",
            "extra": "iterations: 438491\ncpu: 1593.7048924607323 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 195.85779931487582,
            "unit": "ns/iter",
            "extra": "iterations: 3574814\ncpu: 195.8532108243947 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3180.856173443663,
            "unit": "ns/iter",
            "extra": "iterations: 220752\ncpu: 3180.7247046459393 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728683490885,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6171890020.999968,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6171761010 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1071.057174627851,
            "unit": "ns/iter",
            "extra": "iterations: 642103\ncpu: 1071.0504763254503 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2275.4040546544416,
            "unit": "ns/iter",
            "extra": "iterations: 308337\ncpu: 2275.382260319069 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 190.09622723159535,
            "unit": "ns/iter",
            "extra": "iterations: 3688114\ncpu: 190.09310422617102 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 134.66018398147094,
            "unit": "ns/iter",
            "extra": "iterations: 5206176\ncpu: 134.65803326664317 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3096.314776076673,
            "unit": "ns/iter",
            "extra": "iterations: 231374\ncpu: 3096.2136756939 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.748249261100305,
            "unit": "ns/iter",
            "extra": "iterations: 30888815\ncpu: 22.747755749127958 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1670.4458402368182,
            "unit": "ns/iter",
            "extra": "iterations: 420072\ncpu: 1670.4168737740204 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1375.2763921290561,
            "unit": "ns/iter",
            "extra": "iterations: 507945\ncpu: 1375.226559962202 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1761.1664892763727,
            "unit": "ns/iter",
            "extra": "iterations: 398368\ncpu: 1761.1253539440916 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 466.0950022835755,
            "unit": "ns/iter",
            "extra": "iterations: 1475754\ncpu: 466.09567312709265 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2234.4259626632725,
            "unit": "ns/iter",
            "extra": "iterations: 314544\ncpu: 2234.388200061042 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 140.85270304921335,
            "unit": "ns/iter",
            "extra": "iterations: 4972255\ncpu: 140.85013841808157 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1112.378782453156,
            "unit": "ns/iter",
            "extra": "iterations: 628329\ncpu: 1112.361740425797 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 435.30546559828707,
            "unit": "ns/iter",
            "extra": "iterations: 1603539\ncpu: 435.3023736872002 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1599.7200388809474,
            "unit": "ns/iter",
            "extra": "iterations: 434146\ncpu: 1599.7018790913621 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 189.31130038793873,
            "unit": "ns/iter",
            "extra": "iterations: 3650972\ncpu: 189.30710999700958 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3317.2328045800377,
            "unit": "ns/iter",
            "extra": "iterations: 213269\ncpu: 3317.1198908420747 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728684831833,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6177678373.999925,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6177444791 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1070.4504840126815,
            "unit": "ns/iter",
            "extra": "iterations: 657111\ncpu: 1070.41533926536 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2247.076207963468,
            "unit": "ns/iter",
            "extra": "iterations: 311516\ncpu: 2246.996937556976 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 193.68557687360828,
            "unit": "ns/iter",
            "extra": "iterations: 3557391\ncpu: 193.67392844924828 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 138.6355517891523,
            "unit": "ns/iter",
            "extra": "iterations: 5046964\ncpu: 138.63294111073512 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3097.296558430707,
            "unit": "ns/iter",
            "extra": "iterations: 222108\ncpu: 3097.086854143027 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 38.21273588046238,
            "unit": "ns/iter",
            "extra": "iterations: 18263064\ncpu: 38.21046041343332 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1651.6914295410838,
            "unit": "ns/iter",
            "extra": "iterations: 424318\ncpu: 1651.5819927507189 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1376.7188257395487,
            "unit": "ns/iter",
            "extra": "iterations: 513685\ncpu: 1376.6493843503308 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1742.386496527279,
            "unit": "ns/iter",
            "extra": "iterations: 404296\ncpu: 1742.3058798504098 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 467.2671384725362,
            "unit": "ns/iter",
            "extra": "iterations: 1502030\ncpu: 467.2485795889554 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2222.893634864839,
            "unit": "ns/iter",
            "extra": "iterations: 315987\ncpu: 2222.7879279843814 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 142.8219068303017,
            "unit": "ns/iter",
            "extra": "iterations: 4923962\ncpu: 142.81800387574017 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1118.6380676837534,
            "unit": "ns/iter",
            "extra": "iterations: 628717\ncpu: 1118.6185883314754 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 425.2082468636863,
            "unit": "ns/iter",
            "extra": "iterations: 1645086\ncpu: 425.20173656574786 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1567.093440647625,
            "unit": "ns/iter",
            "extra": "iterations: 449023\ncpu: 1567.0835525128973 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 229.04454742884735,
            "unit": "ns/iter",
            "extra": "iterations: 3056989\ncpu: 229.04176331677982 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3321.660291322319,
            "unit": "ns/iter",
            "extra": "iterations: 210969\ncpu: 3321.549203911476 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728685856292,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6252062793.000051,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6251590938 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1078.9147022041338,
            "unit": "ns/iter",
            "extra": "iterations: 648481\ncpu: 1078.849088870761 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2291.8973900288606,
            "unit": "ns/iter",
            "extra": "iterations: 304103\ncpu: 2291.8752889645993 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 195.82817690354526,
            "unit": "ns/iter",
            "extra": "iterations: 3586881\ncpu: 195.82613223020215 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 137.2107533278727,
            "unit": "ns/iter",
            "extra": "iterations: 5099891\ncpu: 137.20353866386577 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3078.5310473437903,
            "unit": "ns/iter",
            "extra": "iterations: 226831\ncpu: 3078.451569670808 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.686073076710056,
            "unit": "ns/iter",
            "extra": "iterations: 30860147\ncpu: 22.68566040855217 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1726.2935193364506,
            "unit": "ns/iter",
            "extra": "iterations: 414402\ncpu: 1726.2488236060601 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1393.4087155077277,
            "unit": "ns/iter",
            "extra": "iterations: 501887\ncpu: 1393.3291976082276 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1779.8570804707992,
            "unit": "ns/iter",
            "extra": "iterations: 393858\ncpu: 1779.746604106051 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 472.326041552563,
            "unit": "ns/iter",
            "extra": "iterations: 1478514\ncpu: 472.3176689568043 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2325.710832059663,
            "unit": "ns/iter",
            "extra": "iterations: 300303\ncpu: 2325.6903560736923 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 140.86203494581542,
            "unit": "ns/iter",
            "extra": "iterations: 4968722\ncpu: 140.85304571276117 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1115.7069373575357,
            "unit": "ns/iter",
            "extra": "iterations: 628712\ncpu: 1115.636222944688 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 433.2267651895623,
            "unit": "ns/iter",
            "extra": "iterations: 1615733\ncpu: 433.19236346599365 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1620.868124300633,
            "unit": "ns/iter",
            "extra": "iterations: 429829\ncpu: 1620.784146718812 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 196.12464334596655,
            "unit": "ns/iter",
            "extra": "iterations: 3505498\ncpu: 196.10406652635356 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3267.846664787346,
            "unit": "ns/iter",
            "extra": "iterations: 212880\ncpu: 3267.779176061627 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728836139441,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6096565805.000069,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6096031107 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1068.7569706779334,
            "unit": "ns/iter",
            "extra": "iterations: 653057\ncpu: 1068.7292594673968 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2228.087821262491,
            "unit": "ns/iter",
            "extra": "iterations: 314696\ncpu: 2228.0642207082383 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 187.8614577336374,
            "unit": "ns/iter",
            "extra": "iterations: 3732767\ncpu: 187.85804846645956 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 131.84615226402724,
            "unit": "ns/iter",
            "extra": "iterations: 5299584\ncpu: 131.8446695061346 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3169.8085298163483,
            "unit": "ns/iter",
            "extra": "iterations: 225210\ncpu: 3169.685426934859 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.395024477255976,
            "unit": "ns/iter",
            "extra": "iterations: 31256977\ncpu: 22.394389419040728 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1714.0403844673463,
            "unit": "ns/iter",
            "extra": "iterations: 402531\ncpu: 1713.9932998949125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1423.2336896693096,
            "unit": "ns/iter",
            "extra": "iterations: 495974\ncpu: 1423.2013593454499 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1821.2695044419013,
            "unit": "ns/iter",
            "extra": "iterations: 387886\ncpu: 1821.2311117183913 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 454.7486075398781,
            "unit": "ns/iter",
            "extra": "iterations: 1535412\ncpu: 454.72845789924764 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2259.6506273785826,
            "unit": "ns/iter",
            "extra": "iterations: 309303\ncpu: 2259.599567414478 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 144.73176980318598,
            "unit": "ns/iter",
            "extra": "iterations: 4823316\ncpu: 144.73059281208234 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1069.8795104903218,
            "unit": "ns/iter",
            "extra": "iterations: 654696\ncpu: 1069.855965211335 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 426.12291734646726,
            "unit": "ns/iter",
            "extra": "iterations: 1658041\ncpu: 426.11620339907137 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1583.9339249665736,
            "unit": "ns/iter",
            "extra": "iterations: 441377\ncpu: 1583.9051309877948 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 209.88699317788087,
            "unit": "ns/iter",
            "extra": "iterations: 3527495\ncpu: 209.88351280441177 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3224.1391836145463,
            "unit": "ns/iter",
            "extra": "iterations: 216491\ncpu: 3223.9498963005485 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728845476757,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 6180430808.999972,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6179996758 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1074.8940526989795,
            "unit": "ns/iter",
            "extra": "iterations: 664604\ncpu: 1074.8819462416732 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2256.9993685172067,
            "unit": "ns/iter",
            "extra": "iterations: 308797\ncpu: 2256.9655663753224 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 196.71809818803362,
            "unit": "ns/iter",
            "extra": "iterations: 3562329\ncpu: 196.7174615258726 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 142.61018772140514,
            "unit": "ns/iter",
            "extra": "iterations: 4870942\ncpu: 142.606360535601 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3086.2665121873865,
            "unit": "ns/iter",
            "extra": "iterations: 226999\ncpu: 3086.232247719149 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 23.958393336813533,
            "unit": "ns/iter",
            "extra": "iterations: 29199001\ncpu: 23.958109285999157 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1717.1716713770718,
            "unit": "ns/iter",
            "extra": "iterations: 407616\ncpu: 1717.0652010715971 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1393.5436000399366,
            "unit": "ns/iter",
            "extra": "iterations: 500550\ncpu: 1393.454789731295 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1773.2287017166484,
            "unit": "ns/iter",
            "extra": "iterations: 395607\ncpu: 1773.1982902223663 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 469.92206579551583,
            "unit": "ns/iter",
            "extra": "iterations: 1481134\ncpu: 469.900626817019 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2239.314230668066,
            "unit": "ns/iter",
            "extra": "iterations: 311946\ncpu: 2239.2843697306653 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 145.01920213261306,
            "unit": "ns/iter",
            "extra": "iterations: 4858627\ncpu: 145.01884894642046 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 1116.5152927213971,
            "unit": "ns/iter",
            "extra": "iterations: 620197\ncpu: 1116.4839043078225 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 432.30519235504585,
            "unit": "ns/iter",
            "extra": "iterations: 1619323\ncpu: 432.2963003674983 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1585.0089575930424,
            "unit": "ns/iter",
            "extra": "iterations: 437171\ncpu: 1584.973456610805 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 202.75580146277298,
            "unit": "ns/iter",
            "extra": "iterations: 3446286\ncpu: 202.75319953132117 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3223.1306541919316,
            "unit": "ns/iter",
            "extra": "iterations: 217184\ncpu: 3223.008476683362 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728865376130,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5537924852.00006,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5537799184.000001 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 943.1878487028703,
            "unit": "ns/iter",
            "extra": "iterations: 760676\ncpu: 943.1591834105457 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1669.5981041288308,
            "unit": "ns/iter",
            "extra": "iterations: 416695\ncpu: 1669.599064063643 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 177.2577081947157,
            "unit": "ns/iter",
            "extra": "iterations: 3953390\ncpu: 177.2564191744302 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 123.76041071547984,
            "unit": "ns/iter",
            "extra": "iterations: 5641375\ncpu: 123.75850072012575 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3370.974291092616,
            "unit": "ns/iter",
            "extra": "iterations: 201331\ncpu: 3370.924482568512 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 24.079171743204295,
            "unit": "ns/iter",
            "extra": "iterations: 29056882\ncpu: 24.07883843146006 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1746.423691777115,
            "unit": "ns/iter",
            "extra": "iterations: 401346\ncpu: 1746.3781425503141 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1465.4546757397243,
            "unit": "ns/iter",
            "extra": "iterations: 473786\ncpu: 1465.419212471454 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1851.840312522152,
            "unit": "ns/iter",
            "extra": "iterations: 377957\ncpu: 1851.7884203758622 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 530.9977821370526,
            "unit": "ns/iter",
            "extra": "iterations: 1319288\ncpu: 530.9980656232756 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2358.149755094621,
            "unit": "ns/iter",
            "extra": "iterations: 296237\ncpu: 2358.1176794256 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 128.4657799063508,
            "unit": "ns/iter",
            "extra": "iterations: 5482203\ncpu: 128.4630886525 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 571.97893229286,
            "unit": "ns/iter",
            "extra": "iterations: 1228895\ncpu: 571.1545648733214 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 439.5986618568501,
            "unit": "ns/iter",
            "extra": "iterations: 1593402\ncpu: 439.5934905315799 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1300.5628908951194,
            "unit": "ns/iter",
            "extra": "iterations: 534990\ncpu: 1300.5634553916923 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 195.73388437681422,
            "unit": "ns/iter",
            "extra": "iterations: 3585682\ncpu: 195.73226822679737 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2010.2789516062528,
            "unit": "ns/iter",
            "extra": "iterations: 347770\ncpu: 2010.22646289214 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728868323760,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5300848396.999982,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5300476428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 956.2661620823342,
            "unit": "ns/iter",
            "extra": "iterations: 731295\ncpu: 956.2416234214646 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1664.7530248640594,
            "unit": "ns/iter",
            "extra": "iterations: 423986\ncpu: 1660.2734311982008 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 187.68612580138532,
            "unit": "ns/iter",
            "extra": "iterations: 3734904\ncpu: 187.6780583918624 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 129.7352478792655,
            "unit": "ns/iter",
            "extra": "iterations: 5379413\ncpu: 129.7328595145975 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3451.8176739089454,
            "unit": "ns/iter",
            "extra": "iterations: 202434\ncpu: 3451.686337275364 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 25.0108004021098,
            "unit": "ns/iter",
            "extra": "iterations: 27998402\ncpu: 25.009976426511727 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1681.807389172115,
            "unit": "ns/iter",
            "extra": "iterations: 413118\ncpu: 1681.7171582937565 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1421.7268454897135,
            "unit": "ns/iter",
            "extra": "iterations: 499190\ncpu: 1421.6829263406732 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1774.6778719086753,
            "unit": "ns/iter",
            "extra": "iterations: 394250\ncpu: 1774.6017679137635 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 511.19090996995214,
            "unit": "ns/iter",
            "extra": "iterations: 1365078\ncpu: 511.17183779974494 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2175.3888353263615,
            "unit": "ns/iter",
            "extra": "iterations: 322571\ncpu: 2175.3450806179117 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 130.15966314214478,
            "unit": "ns/iter",
            "extra": "iterations: 5378292\ncpu: 130.1533622570144 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 578.0675131566688,
            "unit": "ns/iter",
            "extra": "iterations: 1227894\ncpu: 578.0638116970999 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 445.0967028775964,
            "unit": "ns/iter",
            "extra": "iterations: 1573190\ncpu: 445.08400638193615 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1303.9095609238964,
            "unit": "ns/iter",
            "extra": "iterations: 541569\ncpu: 1303.8834866840627 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 197.9419211202439,
            "unit": "ns/iter",
            "extra": "iterations: 3534469\ncpu: 197.9321476578242 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1910.4415007838531,
            "unit": "ns/iter",
            "extra": "iterations: 366022\ncpu: 1910.4093278546168 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728919510819,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 5253404908.999983,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5253248114 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 971.1490674491652,
            "unit": "ns/iter",
            "extra": "iterations: 732078\ncpu: 971.1516614349839 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1654.5358785068713,
            "unit": "ns/iter",
            "extra": "iterations: 421687\ncpu: 1650.3485476194426 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 188.35895143892554,
            "unit": "ns/iter",
            "extra": "iterations: 3688407\ncpu: 188.35746353371522 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.4705584935816,
            "unit": "ns/iter",
            "extra": "iterations: 5361852\ncpu: 130.46403686636611 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3450.4815460894893,
            "unit": "ns/iter",
            "extra": "iterations: 200066\ncpu: 3450.452040826529 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 25.316552684940795,
            "unit": "ns/iter",
            "extra": "iterations: 27609104\ncpu: 25.315533166161384 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1712.778689416249,
            "unit": "ns/iter",
            "extra": "iterations: 404400\ncpu: 1712.6857492581582 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1428.9944168390482,
            "unit": "ns/iter",
            "extra": "iterations: 486821\ncpu: 1428.9370815967272 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1810.4040153552905,
            "unit": "ns/iter",
            "extra": "iterations: 386317\ncpu: 1810.303820437618 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 515.2106505647959,
            "unit": "ns/iter",
            "extra": "iterations: 1363984\ncpu: 515.2022787657329 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2196.6014304067157,
            "unit": "ns/iter",
            "extra": "iterations: 318371\ncpu: 2196.570143009252 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 133.40870201158455,
            "unit": "ns/iter",
            "extra": "iterations: 5316311\ncpu: 133.40534554882123 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 567.4035892732453,
            "unit": "ns/iter",
            "extra": "iterations: 1223256\ncpu: 567.3700541832615 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 449.38863211772593,
            "unit": "ns/iter",
            "extra": "iterations: 1552831\ncpu: 449.38940489982514 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1315.001620518561,
            "unit": "ns/iter",
            "extra": "iterations: 535631\ncpu: 1314.9733771943766 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 199.8657226287934,
            "unit": "ns/iter",
            "extra": "iterations: 3483476\ncpu: 199.8661302675829 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1879.5879266497102,
            "unit": "ns/iter",
            "extra": "iterations: 373931\ncpu: 1879.493363748921 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728920632078,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 200.284929690472,
            "unit": "ns/iter",
            "extra": "iterations: 3509908\ncpu: 200.27743205804828 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1279.6001206893889,
            "unit": "ns/iter",
            "extra": "iterations: 551829\ncpu: 1279.5580514978374 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 945.1665691036854,
            "unit": "ns/iter",
            "extra": "iterations: 736277\ncpu: 945.1533566850517 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1644.2422266552287,
            "unit": "ns/iter",
            "extra": "iterations: 423595\ncpu: 1644.232712850718 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 186.6773556418424,
            "unit": "ns/iter",
            "extra": "iterations: 3842838\ncpu: 186.6672365579814 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 125.18260577577207,
            "unit": "ns/iter",
            "extra": "iterations: 5589867\ncpu: 125.17874432432822 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3375.376214632554,
            "unit": "ns/iter",
            "extra": "iterations: 207573\ncpu: 3375.2507503384363 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 24.373311020254075,
            "unit": "ns/iter",
            "extra": "iterations: 28735913\ncpu: 24.37240995266099 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1708.270878675962,
            "unit": "ns/iter",
            "extra": "iterations: 409844\ncpu: 1708.1708942914875 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1453.9015832104094,
            "unit": "ns/iter",
            "extra": "iterations: 488880\ncpu: 1453.8001677303228 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1812.598873391009,
            "unit": "ns/iter",
            "extra": "iterations: 367652\ncpu: 1812.4794724358899 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 535.0758741384822,
            "unit": "ns/iter",
            "extra": "iterations: 1309089\ncpu: 535.046028956015 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2235.9819262714614,
            "unit": "ns/iter",
            "extra": "iterations: 313881\ncpu: 2235.886536617383 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 126.13418856655846,
            "unit": "ns/iter",
            "extra": "iterations: 5551546\ncpu: 126.12732741474166 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 584.0388773530981,
            "unit": "ns/iter",
            "extra": "iterations: 1203014\ncpu: 583.9992252791735 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 429.6699464953601,
            "unit": "ns/iter",
            "extra": "iterations: 1600795\ncpu: 429.6541980703341 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 5229295266.000009,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5228990816 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1908.9755339229635,
            "unit": "ns/iter",
            "extra": "iterations: 378238\ncpu: 1908.9432235788086 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728926195667,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 3813.918160527042,
            "unit": "ns/iter",
            "extra": "iterations: 184031\ncpu: 3813.8810689503393 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 215.30053465184264,
            "unit": "ns/iter",
            "extra": "iterations: 3263058\ncpu: 215.2971899365565 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1311.9087204335399,
            "unit": "ns/iter",
            "extra": "iterations: 536166\ncpu: 1311.9093657561273 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 945.82798259592,
            "unit": "ns/iter",
            "extra": "iterations: 738216\ncpu: 945.8156989282278 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1669.8251505216874,
            "unit": "ns/iter",
            "extra": "iterations: 421534\ncpu: 1669.7653997067846 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 180.46260271649817,
            "unit": "ns/iter",
            "extra": "iterations: 3915632\ncpu: 180.46226637232516 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 126.92111782939567,
            "unit": "ns/iter",
            "extra": "iterations: 5514795\ncpu: 126.92171114248129 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3531.3848283690627,
            "unit": "ns/iter",
            "extra": "iterations: 202615\ncpu: 3531.353305530194 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 27.757603041599932,
            "unit": "ns/iter",
            "extra": "iterations: 25036296\ncpu: 27.757337027809594 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1730.377135983718,
            "unit": "ns/iter",
            "extra": "iterations: 407365\ncpu: 1730.3406134547645 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1459.1538176267588,
            "unit": "ns/iter",
            "extra": "iterations: 485367\ncpu: 1459.1544336553554 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1810.940010791519,
            "unit": "ns/iter",
            "extra": "iterations: 385486\ncpu: 1810.9239194160077 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 516.5998498299572,
            "unit": "ns/iter",
            "extra": "iterations: 1355796\ncpu: 516.6008617815669 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2239.14848597188,
            "unit": "ns/iter",
            "extra": "iterations: 307524\ncpu: 2239.0400846763205 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 132.23776512464767,
            "unit": "ns/iter",
            "extra": "iterations: 5287937\ncpu: 132.23692093911103 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 574.8973504880565,
            "unit": "ns/iter",
            "extra": "iterations: 1218866\ncpu: 574.8984687406173 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 459.92714274346577,
            "unit": "ns/iter",
            "extra": "iterations: 1521029\ncpu: 459.92777455262217 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 5213529884.999957,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5213424426 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1894.2779221562707,
            "unit": "ns/iter",
            "extra": "iterations: 363627\ncpu: 1894.2517469824877 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728927770866,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 3794.591816561471,
            "unit": "ns/iter",
            "extra": "iterations: 185130\ncpu: 3794.4844271592924 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 204.84167236091218,
            "unit": "ns/iter",
            "extra": "iterations: 3421582\ncpu: 204.83003914563494 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1293.8806476739705,
            "unit": "ns/iter",
            "extra": "iterations: 549474\ncpu: 1293.8626522820007 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 968.5442046145163,
            "unit": "ns/iter",
            "extra": "iterations: 725931\ncpu: 968.5088899633708 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1662.1132868027546,
            "unit": "ns/iter",
            "extra": "iterations: 422088\ncpu: 1662.086380091356 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 180.10822533018055,
            "unit": "ns/iter",
            "extra": "iterations: 3900427\ncpu: 180.10314896292115 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 124.43336005728378,
            "unit": "ns/iter",
            "extra": "iterations: 5626663\ncpu: 124.42965448614937 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3484.056714601152,
            "unit": "ns/iter",
            "extra": "iterations: 202082\ncpu: 3483.942147247157 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 24.084384256116994,
            "unit": "ns/iter",
            "extra": "iterations: 29103391\ncpu: 24.083808240764778 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1727.5318052520101,
            "unit": "ns/iter",
            "extra": "iterations: 406741\ncpu: 1727.5047683906923 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1450.3111697556135,
            "unit": "ns/iter",
            "extra": "iterations: 482759\ncpu: 1450.2886409160667 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1820.3952701634917,
            "unit": "ns/iter",
            "extra": "iterations: 380140\ncpu: 1820.3824564634074 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 534.673307304226,
            "unit": "ns/iter",
            "extra": "iterations: 1304694\ncpu: 534.6416753660251 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2203.094539102342,
            "unit": "ns/iter",
            "extra": "iterations: 306836\ncpu: 2202.949347534184 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 126.28679745819171,
            "unit": "ns/iter",
            "extra": "iterations: 5561573\ncpu: 126.27691428306355 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 587.6713833803865,
            "unit": "ns/iter",
            "extra": "iterations: 1199352\ncpu: 587.6563294178852 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 456.458500491918,
            "unit": "ns/iter",
            "extra": "iterations: 1527741\ncpu: 456.4090058458851 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 5223344337.000072,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5223003449 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1897.4765755708975,
            "unit": "ns/iter",
            "extra": "iterations: 366391\ncpu: 1897.3229992003137 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728931973638,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 3773.0336732171536,
            "unit": "ns/iter",
            "extra": "iterations: 177708\ncpu: 3772.9900904855153 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 211.27260230725548,
            "unit": "ns/iter",
            "extra": "iterations: 3310005\ncpu: 211.26551138140275 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1313.628050994222,
            "unit": "ns/iter",
            "extra": "iterations: 528844\ncpu: 1313.5162675571628 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 959.0506595114516,
            "unit": "ns/iter",
            "extra": "iterations: 735696\ncpu: 958.9553524825473 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1669.920726082936,
            "unit": "ns/iter",
            "extra": "iterations: 402213\ncpu: 1669.764965329316 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 193.5393115585423,
            "unit": "ns/iter",
            "extra": "iterations: 3659280\ncpu: 193.528703734068 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.53756449002594,
            "unit": "ns/iter",
            "extra": "iterations: 5353540\ncpu: 130.53480108488964 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3499.101575964898,
            "unit": "ns/iter",
            "extra": "iterations: 201337\ncpu: 3498.9140595121576 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 25.91397875657785,
            "unit": "ns/iter",
            "extra": "iterations: 27050539\ncpu: 25.912582148547973 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1750.0593801679804,
            "unit": "ns/iter",
            "extra": "iterations: 400302\ncpu: 1749.9627306383659 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1464.0638572059543,
            "unit": "ns/iter",
            "extra": "iterations: 467919\ncpu: 1463.4841372117803 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1851.781746695879,
            "unit": "ns/iter",
            "extra": "iterations: 376425\ncpu: 1851.6870292887038 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 528.0658877014138,
            "unit": "ns/iter",
            "extra": "iterations: 1336046\ncpu: 528.030727235439 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2332.129643672022,
            "unit": "ns/iter",
            "extra": "iterations: 300678\ncpu: 2332.0028136411706 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 134.00147608257203,
            "unit": "ns/iter",
            "extra": "iterations: 5169765\ncpu: 133.99398019058899 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 584.5278683779155,
            "unit": "ns/iter",
            "extra": "iterations: 1202169\ncpu: 584.5136557339276 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 456.5145132265134,
            "unit": "ns/iter",
            "extra": "iterations: 1540388\ncpu: 456.49057769860525 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 5471472025.000026,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5471187639 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1940.767466996147,
            "unit": "ns/iter",
            "extra": "iterations: 367307\ncpu: 1940.6224438957097 ns\nthreads: 1"
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
        "date": 1728933022465,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 3706.7635422971102,
            "unit": "ns/iter",
            "extra": "iterations: 184976\ncpu: 3706.4652603581 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 201.4406855969788,
            "unit": "ns/iter",
            "extra": "iterations: 3464951\ncpu: 201.4292069353939 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1313.4111787185734,
            "unit": "ns/iter",
            "extra": "iterations: 540867\ncpu: 1313.3136020500426 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 942.9618295024927,
            "unit": "ns/iter",
            "extra": "iterations: 745864\ncpu: 942.9172087672816 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1659.4771500897664,
            "unit": "ns/iter",
            "extra": "iterations: 423087\ncpu: 1659.3708646212235 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 180.83840873283447,
            "unit": "ns/iter",
            "extra": "iterations: 3732120\ncpu: 180.827489469792 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 125.66051065161271,
            "unit": "ns/iter",
            "extra": "iterations: 5528035\ncpu: 125.6503433860313 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3483.178806535304,
            "unit": "ns/iter",
            "extra": "iterations: 201732\ncpu: 3482.932132730548 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 23.518383354582678,
            "unit": "ns/iter",
            "extra": "iterations: 29110329\ncpu: 23.51750294543222 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1683.9317382685135,
            "unit": "ns/iter",
            "extra": "iterations: 416075\ncpu: 1683.8594820645317 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1408.376578691813,
            "unit": "ns/iter",
            "extra": "iterations: 494080\ncpu: 1408.3513236722815 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1791.7179813802265,
            "unit": "ns/iter",
            "extra": "iterations: 391733\ncpu: 1791.6852932992624 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 514.1980489089891,
            "unit": "ns/iter",
            "extra": "iterations: 1358932\ncpu: 514.1888129796044 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2246.126532322409,
            "unit": "ns/iter",
            "extra": "iterations: 312679\ncpu: 2246.066851307568 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 130.7116971739939,
            "unit": "ns/iter",
            "extra": "iterations: 5395098\ncpu: 130.709055145986 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 573.6173172472309,
            "unit": "ns/iter",
            "extra": "iterations: 1236178\ncpu: 573.6009619973821 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 453.3479619278309,
            "unit": "ns/iter",
            "extra": "iterations: 1544646\ncpu: 453.3289757005819 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 5310633857.000084,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5310335043.999998 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1802.6791481767457,
            "unit": "ns/iter",
            "extra": "iterations: 376557\ncpu: 1802.6519915975466 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728935589323,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 3633.978034638864,
            "unit": "ns/iter",
            "extra": "iterations: 186612\ncpu: 3633.715693524532 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 193.9079829940825,
            "unit": "ns/iter",
            "extra": "iterations: 3613093\ncpu: 193.89966352928084 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1297.5866886580438,
            "unit": "ns/iter",
            "extra": "iterations: 535964\ncpu: 1297.550117172049 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 964.4314563783954,
            "unit": "ns/iter",
            "extra": "iterations: 723459\ncpu: 964.3867696718129 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1668.7073565499288,
            "unit": "ns/iter",
            "extra": "iterations: 421366\ncpu: 1668.6140125211818 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 188.56572711816096,
            "unit": "ns/iter",
            "extra": "iterations: 3702665\ncpu: 188.5584745041748 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 134.96957625256485,
            "unit": "ns/iter",
            "extra": "iterations: 5217306\ncpu: 134.9597922759371 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3511.677342852524,
            "unit": "ns/iter",
            "extra": "iterations: 200290\ncpu: 3511.515307803686 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 23.83261473801737,
            "unit": "ns/iter",
            "extra": "iterations: 29408300\ncpu: 23.831236113614178 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1721.9342614603725,
            "unit": "ns/iter",
            "extra": "iterations: 408421\ncpu: 1721.8481052639331 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1456.4519790680847,
            "unit": "ns/iter",
            "extra": "iterations: 488058\ncpu: 1456.4246810829852 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1810.1252568724597,
            "unit": "ns/iter",
            "extra": "iterations: 381512\ncpu: 1810.0774628320996 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 538.0855460575794,
            "unit": "ns/iter",
            "extra": "iterations: 1303672\ncpu: 538.0755995373069 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2345.2457896826127,
            "unit": "ns/iter",
            "extra": "iterations: 297246\ncpu: 2345.2186101747347 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 132.74880120767048,
            "unit": "ns/iter",
            "extra": "iterations: 5258417\ncpu: 132.74726671543925 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 576.3109434416609,
            "unit": "ns/iter",
            "extra": "iterations: 1196269\ncpu: 576.2921190802404 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 438.1923970537112,
            "unit": "ns/iter",
            "extra": "iterations: 1571838\ncpu: 438.1738448873246 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 5240878876.0000105,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5240683502 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1865.2393921761436,
            "unit": "ns/iter",
            "extra": "iterations: 381558\ncpu: 1865.2016154817863 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728937859633,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1892.3239998803776,
            "unit": "ns/iter",
            "extra": "iterations: 367281\ncpu: 1892.206607474931 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 194.29898660742242,
            "unit": "ns/iter",
            "extra": "iterations: 3589231\ncpu: 194.26663288041362 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1271.4985804980945,
            "unit": "ns/iter",
            "extra": "iterations: 548784\ncpu: 1271.3049542260715 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 942.6422020811544,
            "unit": "ns/iter",
            "extra": "iterations: 745077\ncpu: 942.6056850500019 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1664.8369532374604,
            "unit": "ns/iter",
            "extra": "iterations: 420315\ncpu: 1664.6993492975498 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 183.02461082735488,
            "unit": "ns/iter",
            "extra": "iterations: 3827543\ncpu: 183.0151261527304 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 132.17396658344555,
            "unit": "ns/iter",
            "extra": "iterations: 5284147\ncpu: 132.1649558575869 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3484.771545486577,
            "unit": "ns/iter",
            "extra": "iterations: 204544\ncpu: 3484.666414072278 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 24.817811857387714,
            "unit": "ns/iter",
            "extra": "iterations: 27674677\ncpu: 24.81610137672068 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1753.8564113363418,
            "unit": "ns/iter",
            "extra": "iterations: 408347\ncpu: 1753.7349043827921 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1434.1936510416313,
            "unit": "ns/iter",
            "extra": "iterations: 486442\ncpu: 1434.0967905731807 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1809.9647985966508,
            "unit": "ns/iter",
            "extra": "iterations: 387655\ncpu: 1809.890557325456 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 552.6372653973273,
            "unit": "ns/iter",
            "extra": "iterations: 1306837\ncpu: 552.6372684581163 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2320.8755010779423,
            "unit": "ns/iter",
            "extra": "iterations: 302348\ncpu: 2320.874981809042 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 132.86326865371672,
            "unit": "ns/iter",
            "extra": "iterations: 5269099\ncpu: 132.85810761953772 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 593.577043705755,
            "unit": "ns/iter",
            "extra": "iterations: 1195977\ncpu: 593.5317635707032 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 437.2129876175034,
            "unit": "ns/iter",
            "extra": "iterations: 1551062\ncpu: 437.19448416633367 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 5063568662.999955,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5063285313.000002 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2045.2004448099754,
            "unit": "ns/iter",
            "extra": "iterations: 342618\ncpu: 2045.1337407841945 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728940351577,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1914.7012940411937,
            "unit": "ns/iter",
            "extra": "iterations: 365058\ncpu: 1914.627889266911 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 196.5070556795177,
            "unit": "ns/iter",
            "extra": "iterations: 3570953\ncpu: 196.50566613450246 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1287.9181077308592,
            "unit": "ns/iter",
            "extra": "iterations: 577698\ncpu: 1287.9210954512564 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 960.6598617950433,
            "unit": "ns/iter",
            "extra": "iterations: 737021\ncpu: 960.6321543076789 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1646.093080045325,
            "unit": "ns/iter",
            "extra": "iterations: 423023\ncpu: 1646.0347782508272 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 188.1332521549012,
            "unit": "ns/iter",
            "extra": "iterations: 3715272\ncpu: 188.1251453460206 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 129.84380482151494,
            "unit": "ns/iter",
            "extra": "iterations: 5417011\ncpu: 129.84187220590843 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3514.541145964295,
            "unit": "ns/iter",
            "extra": "iterations: 198610\ncpu: 3514.357001158047 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 24.69854969713916,
            "unit": "ns/iter",
            "extra": "iterations: 28319809\ncpu: 24.697700927290867 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1751.3209276777975,
            "unit": "ns/iter",
            "extra": "iterations: 398716\ncpu: 1751.2008773161876 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1501.5976154491043,
            "unit": "ns/iter",
            "extra": "iterations: 476400\ncpu: 1501.5791876574335 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1850.4677481123108,
            "unit": "ns/iter",
            "extra": "iterations: 378629\ncpu: 1850.4092924736358 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 535.9606032547244,
            "unit": "ns/iter",
            "extra": "iterations: 1305717\ncpu: 535.9541477977231 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2406.3981789827344,
            "unit": "ns/iter",
            "extra": "iterations: 293682\ncpu: 2406.2668600731454 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 130.90407350227468,
            "unit": "ns/iter",
            "extra": "iterations: 5280272\ncpu: 130.90229688925106 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 589.138164158483,
            "unit": "ns/iter",
            "extra": "iterations: 1208917\ncpu: 589.1036903277893 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 445.1595632648338,
            "unit": "ns/iter",
            "extra": "iterations: 1569647\ncpu: 445.1470534457735 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 5057633194.999994,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5057385725 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1991.786385736531,
            "unit": "ns/iter",
            "extra": "iterations: 349031\ncpu: 1991.729917972902 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728941428064,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1928.5804314768031,
            "unit": "ns/iter",
            "extra": "iterations: 343286\ncpu: 1928.550406949308 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 197.47374390973704,
            "unit": "ns/iter",
            "extra": "iterations: 3533504\ncpu: 197.472700186557 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1289.8195809297977,
            "unit": "ns/iter",
            "extra": "iterations: 545541\ncpu: 1289.822229676596 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 1005.702016734114,
            "unit": "ns/iter",
            "extra": "iterations: 715067\ncpu: 1005.691904394973 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1674.354223710283,
            "unit": "ns/iter",
            "extra": "iterations: 422922\ncpu: 1674.349125843535 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 178.58326068314008,
            "unit": "ns/iter",
            "extra": "iterations: 3921761\ncpu: 178.58394761944945 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 131.84022426718664,
            "unit": "ns/iter",
            "extra": "iterations: 5293864\ncpu: 131.83288085980303 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3520.9998441009443,
            "unit": "ns/iter",
            "extra": "iterations: 198847\ncpu: 3520.7979451538076 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 25.785668922571748,
            "unit": "ns/iter",
            "extra": "iterations: 27175933\ncpu: 25.784324939276186 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1673.9224937402714,
            "unit": "ns/iter",
            "extra": "iterations: 415360\ncpu: 1673.8801353043166 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1406.2836125745725,
            "unit": "ns/iter",
            "extra": "iterations: 494495\ncpu: 1406.17772677176 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1772.2664216498213,
            "unit": "ns/iter",
            "extra": "iterations: 395347\ncpu: 1772.1962807356567 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 543.3377145115796,
            "unit": "ns/iter",
            "extra": "iterations: 1290140\ncpu: 543.3216433875393 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2232.2759957568283,
            "unit": "ns/iter",
            "extra": "iterations: 316744\ncpu: 2232.1990945369125 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 135.352109871028,
            "unit": "ns/iter",
            "extra": "iterations: 5166785\ncpu: 135.34827092669798 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 584.9831185829038,
            "unit": "ns/iter",
            "extra": "iterations: 1203335\ncpu: 584.9580075373859 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 456.1042755183084,
            "unit": "ns/iter",
            "extra": "iterations: 1531136\ncpu: 456.0517021348841 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 4905356505.999975,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4905014559.999998 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2023.2000231160805,
            "unit": "ns/iter",
            "extra": "iterations: 354734\ncpu: 2023.124312865418 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728944645683,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1916.8341420227246,
            "unit": "ns/iter",
            "extra": "iterations: 373856\ncpu: 1916.573637978259 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 194.72507659998914,
            "unit": "ns/iter",
            "extra": "iterations: 3590080\ncpu: 194.67774367145026 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1255.3590013219593,
            "unit": "ns/iter",
            "extra": "iterations: 577243\ncpu: 1255.1415123266977 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 939.0328604927071,
            "unit": "ns/iter",
            "extra": "iterations: 750993\ncpu: 939.0070000652466 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1644.7488411404481,
            "unit": "ns/iter",
            "extra": "iterations: 420025\ncpu: 1644.6847711445741 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 185.36390743221077,
            "unit": "ns/iter",
            "extra": "iterations: 3777642\ncpu: 185.35317242872665 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 131.7140206621891,
            "unit": "ns/iter",
            "extra": "iterations: 5221615\ncpu: 131.6940038666197 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3377.5111724712556,
            "unit": "ns/iter",
            "extra": "iterations: 207519\ncpu: 3377.0893894053097 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 25.347844560482475,
            "unit": "ns/iter",
            "extra": "iterations: 27644733\ncpu: 25.346348000539543 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1713.8590243221695,
            "unit": "ns/iter",
            "extra": "iterations: 407737\ncpu: 1713.7336003355113 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1504.1827832452461,
            "unit": "ns/iter",
            "extra": "iterations: 484377\ncpu: 1504.1082937464023 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1813.0670547454897,
            "unit": "ns/iter",
            "extra": "iterations: 386863\ncpu: 1813.054877307988 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 515.5612731224763,
            "unit": "ns/iter",
            "extra": "iterations: 1358581\ncpu: 515.5520009480483 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2267.7000236079602,
            "unit": "ns/iter",
            "extra": "iterations: 309221\ncpu: 2267.6825894748436 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 135.76926796605431,
            "unit": "ns/iter",
            "extra": "iterations: 5172069\ncpu: 135.7575212163641 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 565.0856576204859,
            "unit": "ns/iter",
            "extra": "iterations: 1243392\ncpu: 565.0709164929485 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 441.6565179190018,
            "unit": "ns/iter",
            "extra": "iterations: 1583151\ncpu: 441.64576910225384 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 5049311145.000047,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5049047285 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1864.0964325270202,
            "unit": "ns/iter",
            "extra": "iterations: 369253\ncpu: 1864.0333673660014 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1729004735021,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1893.8895817973105,
            "unit": "ns/iter",
            "extra": "iterations: 382446\ncpu: 1893.820691025661 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 193.04977015078583,
            "unit": "ns/iter",
            "extra": "iterations: 3627596\ncpu: 193.03909365872056 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1273.1266824963134,
            "unit": "ns/iter",
            "extra": "iterations: 554236\ncpu: 1273.087507848642 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 927.1601284253003,
            "unit": "ns/iter",
            "extra": "iterations: 763712\ncpu: 927.1057388125362 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1660.0018114400582,
            "unit": "ns/iter",
            "extra": "iterations: 423420\ncpu: 1659.9112937508849 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 183.8057954303171,
            "unit": "ns/iter",
            "extra": "iterations: 3824565\ncpu: 183.7933597677121 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 131.08780844840607,
            "unit": "ns/iter",
            "extra": "iterations: 5369415\ncpu: 131.0847030821793 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3377.2089546479683,
            "unit": "ns/iter",
            "extra": "iterations: 207356\ncpu: 3377.0299484943785 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 25.025210302276285,
            "unit": "ns/iter",
            "extra": "iterations: 27993040\ncpu: 25.02446772483445 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1707.2052516923604,
            "unit": "ns/iter",
            "extra": "iterations: 411753\ncpu: 1707.0588921027925 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1430.8578125358251,
            "unit": "ns/iter",
            "extra": "iterations: 479121\ncpu: 1430.8465418965166 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1792.5529694161141,
            "unit": "ns/iter",
            "extra": "iterations: 391188\ncpu: 1792.480398171723 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 517.1274784668155,
            "unit": "ns/iter",
            "extra": "iterations: 1363242\ncpu: 517.1227302269142 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2245.07142419097,
            "unit": "ns/iter",
            "extra": "iterations: 309839\ncpu: 2245.0182643243743 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 133.3485304344554,
            "unit": "ns/iter",
            "extra": "iterations: 5216916\ncpu: 133.34742192513744 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 569.7718831116883,
            "unit": "ns/iter",
            "extra": "iterations: 1240877\ncpu: 569.772157917344 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 438.16003736765083,
            "unit": "ns/iter",
            "extra": "iterations: 1602457\ncpu: 438.1562806365484 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 4990209715.999981,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4989984304 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1931.7253606727463,
            "unit": "ns/iter",
            "extra": "iterations: 363626\ncpu: 1931.6777568160644 ns\nthreads: 1"
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
        "date": 1729010349684,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1864.4880550906012,
            "unit": "ns/iter",
            "extra": "iterations: 381334\ncpu: 1864.3798218884233 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 197.63282174693163,
            "unit": "ns/iter",
            "extra": "iterations: 3610143\ncpu: 197.6014033239127 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1271.3043883568012,
            "unit": "ns/iter",
            "extra": "iterations: 587851\ncpu: 1271.0712323360851 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 934.793728797069,
            "unit": "ns/iter",
            "extra": "iterations: 753731\ncpu: 934.7638971993986 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1640.4781009710664,
            "unit": "ns/iter",
            "extra": "iterations: 431252\ncpu: 1640.3886868930463 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 181.30722891408857,
            "unit": "ns/iter",
            "extra": "iterations: 3869945\ncpu: 181.2928095877331 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 128.7753780170483,
            "unit": "ns/iter",
            "extra": "iterations: 5434940\ncpu: 128.76617184366344 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3392.14077989823,
            "unit": "ns/iter",
            "extra": "iterations: 207899\ncpu: 3391.9509521450304 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 25.373555109810013,
            "unit": "ns/iter",
            "extra": "iterations: 27598118\ncpu: 25.37242564873442 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1748.015650461569,
            "unit": "ns/iter",
            "extra": "iterations: 406250\ncpu: 1747.879601230767 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1451.3465058666714,
            "unit": "ns/iter",
            "extra": "iterations: 483582\ncpu: 1451.2595898937536 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1807.6456272289495,
            "unit": "ns/iter",
            "extra": "iterations: 381886\ncpu: 1807.5754623107434 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 514.2738028602035,
            "unit": "ns/iter",
            "extra": "iterations: 1364920\ncpu: 514.2534251091649 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2229.862441965949,
            "unit": "ns/iter",
            "extra": "iterations: 312748\ncpu: 2229.830141199942 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 138.136559667939,
            "unit": "ns/iter",
            "extra": "iterations: 5342368\ncpu: 138.1314667952489 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 562.530237954523,
            "unit": "ns/iter",
            "extra": "iterations: 1254946\ncpu: 562.5024766005874 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 435.01994134789834,
            "unit": "ns/iter",
            "extra": "iterations: 1608467\ncpu: 434.99748207454707 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 4988819660.99998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4988468132.000001 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1889.232937195237,
            "unit": "ns/iter",
            "extra": "iterations: 375290\ncpu: 1889.1704202083693 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1729017413072,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1881.0597660156886,
            "unit": "ns/iter",
            "extra": "iterations: 374042\ncpu: 1880.971984429556 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 193.33910836243987,
            "unit": "ns/iter",
            "extra": "iterations: 3601598\ncpu: 193.32930604692697 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 1337.1361789547125,
            "unit": "ns/iter",
            "extra": "iterations: 546149\ncpu: 1337.0816425554203 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 925.1342706534967,
            "unit": "ns/iter",
            "extra": "iterations: 762244\ncpu: 925.083611022192 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1628.7186906549232,
            "unit": "ns/iter",
            "extra": "iterations: 422318\ncpu: 1628.6715389824717 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 187.5853893655236,
            "unit": "ns/iter",
            "extra": "iterations: 3603786\ncpu: 187.58345168109324 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 132.69905471983293,
            "unit": "ns/iter",
            "extra": "iterations: 5295996\ncpu: 132.69231453347018 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3403.547303516876,
            "unit": "ns/iter",
            "extra": "iterations: 205323\ncpu: 3403.5131719291035 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 26.905882412532414,
            "unit": "ns/iter",
            "extra": "iterations: 26060719\ncpu: 26.905391865819226 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1742.4958785891279,
            "unit": "ns/iter",
            "extra": "iterations: 405565\ncpu: 1742.4552883015053 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1467.7053758976062,
            "unit": "ns/iter",
            "extra": "iterations: 481780\ncpu: 1467.6336543650616 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1818.7173032306819,
            "unit": "ns/iter",
            "extra": "iterations: 378883\ncpu: 1818.6045613025628 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 518.5883553504871,
            "unit": "ns/iter",
            "extra": "iterations: 1349856\ncpu: 518.5662374356968 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 2274.574089066017,
            "unit": "ns/iter",
            "extra": "iterations: 308804\ncpu: 2274.43197303144 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 134.58369469682572,
            "unit": "ns/iter",
            "extra": "iterations: 5214279\ncpu: 134.5765579478965 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 583.3938557795959,
            "unit": "ns/iter",
            "extra": "iterations: 1224598\ncpu: 583.3892820337787 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 434.87935124373024,
            "unit": "ns/iter",
            "extra": "iterations: 1590551\ncpu: 434.8792940308109 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 5027987322.999934,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5027826805 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1890.5313054483465,
            "unit": "ns/iter",
            "extra": "iterations: 373657\ncpu: 1890.4746866778864 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1729017596670,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1393.9231606938968,
            "unit": "ns/iter",
            "extra": "iterations: 505041\ncpu: 1393.9108052613553 ns\nthreads: 1"
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
        "date": 1729019435031,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 1404.0912285278152,
            "unit": "ns/iter",
            "extra": "iterations: 506004\ncpu: 1403.7294230875646 ns\nthreads: 1"
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
        "date": 1729105660504,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3191.0899110059413,
            "unit": "ns/iter",
            "extra": "iterations: 232263\ncpu: 3191.092778445124 ns\nthreads: 1"
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
        "date": 1729192311733,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3068.388212358795,
            "unit": "ns/iter",
            "extra": "iterations: 226729\ncpu: 3068.207450304108 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1729210951461,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3116.5918714433174,
            "unit": "ns/iter",
            "extra": "iterations: 229315\ncpu: 3116.502684080849 ns\nthreads: 1"
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
        "date": 1729278722773,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3139.6869296385057,
            "unit": "ns/iter",
            "extra": "iterations: 228364\ncpu: 3139.5433036730833 ns\nthreads: 1"
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
        "date": 1729537705194,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3059.5965548224085,
            "unit": "ns/iter",
            "extra": "iterations: 227042\ncpu: 3059.0756379876852 ns\nthreads: 1"
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
        "date": 1729624300226,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3001.394714907121,
            "unit": "ns/iter",
            "extra": "iterations: 230346\ncpu: 3001.1845484618784 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1729636334860,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3036.86571127971,
            "unit": "ns/iter",
            "extra": "iterations: 215759\ncpu: 3036.7825119693734 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1729696991070,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3185.915399128728,
            "unit": "ns/iter",
            "extra": "iterations: 222610\ncpu: 3185.7654058667626 ns\nthreads: 1"
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
        "date": 1729710590946,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3048.0028621885513,
            "unit": "ns/iter",
            "extra": "iterations: 234436\ncpu: 3047.805772151035 ns\nthreads: 1"
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
        "date": 1729797007237,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3085.251516387438,
            "unit": "ns/iter",
            "extra": "iterations: 230482\ncpu: 3085.0885014881856 ns\nthreads: 1"
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
        "date": 1729883548571,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3031.928940439609,
            "unit": "ns/iter",
            "extra": "iterations: 230539\ncpu: 3031.8171849448468 ns\nthreads: 1"
          }
        ]
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
        "date": 1730123735793,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3047.7349650569386,
            "unit": "ns/iter",
            "extra": "iterations: 224793\ncpu: 3047.695978077609 ns\nthreads: 1"
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
        "date": 1730142615194,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3061.1882020605008,
            "unit": "ns/iter",
            "extra": "iterations: 225853\ncpu: 3061.2097559031754 ns\nthreads: 1"
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
        "date": 1730229034757,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 2997.799331418179,
            "unit": "ns/iter",
            "extra": "iterations: 233928\ncpu: 2997.7132451010566 ns\nthreads: 1"
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
        "date": 1730315419423,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3033.7147404011007,
            "unit": "ns/iter",
            "extra": "iterations: 232185\ncpu: 3033.6248637939575 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1730382512192,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3018.4237552938216,
            "unit": "ns/iter",
            "extra": "iterations: 232344\ncpu: 3018.328598973935 ns\nthreads: 1"
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
        "date": 1730401876157,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3025.177705580279,
            "unit": "ns/iter",
            "extra": "iterations: 227770\ncpu: 3024.8914079992974 ns\nthreads: 1"
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
        "date": 1730488271954,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3213.6516983010065,
            "unit": "ns/iter",
            "extra": "iterations: 216746\ncpu: 3213.5188331041863 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1730730218928,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3273.007339911912,
            "unit": "ns/iter",
            "extra": "iterations: 230248\ncpu: 3272.9830400264063 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1730730314470,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3054.9742694780916,
            "unit": "ns/iter",
            "extra": "iterations: 230349\ncpu: 3054.9203252456055 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1730730954765,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3227.411917567828,
            "unit": "ns/iter",
            "extra": "iterations: 220884\ncpu: 3227.220808207022 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1730732355876,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3025.0932040988773,
            "unit": "ns/iter",
            "extra": "iterations: 234303\ncpu: 3024.8962753357837 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1730733059970,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3013.7896132624824,
            "unit": "ns/iter",
            "extra": "iterations: 234164\ncpu: 3013.645278522745 ns\nthreads: 1"
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
        "date": 1730747731169,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3027.97149165973,
            "unit": "ns/iter",
            "extra": "iterations: 233686\ncpu: 3027.789255667862 ns\nthreads: 1"
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
        "date": 1730833815688,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3026.4554250322153,
            "unit": "ns/iter",
            "extra": "iterations: 232653\ncpu: 3026.3966808938635 ns\nthreads: 1"
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
        "date": 1730920213753,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3034.686252040206,
            "unit": "ns/iter",
            "extra": "iterations: 230376\ncpu: 3034.5323297565715 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1730997971838,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3064.3762018256466,
            "unit": "ns/iter",
            "extra": "iterations: 234539\ncpu: 3064.1340288821903 ns\nthreads: 1"
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
        "date": 1731006654294,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3092.1995394001747,
            "unit": "ns/iter",
            "extra": "iterations: 228832\ncpu: 3092.0702218221227 ns\nthreads: 1"
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
        "date": 1731093115762,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3027.1795004373025,
            "unit": "ns/iter",
            "extra": "iterations: 232083\ncpu: 3027.1428411387305 ns\nthreads: 1"
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
        "date": 1731352281114,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3035.830588673989,
            "unit": "ns/iter",
            "extra": "iterations: 230569\ncpu: 3035.7786345952845 ns\nthreads: 1"
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
        "date": 1731438738064,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3033.006133356308,
            "unit": "ns/iter",
            "extra": "iterations: 232010\ncpu: 3032.915167449679 ns\nthreads: 1"
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
        "date": 1731525178587,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3001.5145804514887,
            "unit": "ns/iter",
            "extra": "iterations: 230617\ncpu: 3001.3734330079747 ns\nthreads: 1"
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
        "date": 1731611536152,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3085.3330339558415,
            "unit": "ns/iter",
            "extra": "iterations: 224911\ncpu: 3085.2964150263883 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1731688729371,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3026.7489378253536,
            "unit": "ns/iter",
            "extra": "iterations: 231365\ncpu: 3026.360011237655 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1731688880648,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 576.5221057592064,
            "unit": "ns/iter",
            "extra": "iterations: 1235108\ncpu: 576.5132603788495 ns\nthreads: 1"
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
        "date": 1731697846046,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 568.831800625642,
            "unit": "ns/iter",
            "extra": "iterations: 1198750\ncpu: 568.8183090719499 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1731727277206,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 574.7063997931348,
            "unit": "ns/iter",
            "extra": "iterations: 1187179\ncpu: 574.7036150403604 ns\nthreads: 1"
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
        "date": 1731956974596,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 566.5873530818044,
            "unit": "ns/iter",
            "extra": "iterations: 1229596\ncpu: 566.57229285066 ns\nthreads: 1"
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
        "date": 1732043615303,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 578.5586343643818,
            "unit": "ns/iter",
            "extra": "iterations: 1190215\ncpu: 578.5450947937977 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1732122668525,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 570.1168872590678,
            "unit": "ns/iter",
            "extra": "iterations: 1235310\ncpu: 570.099796002623 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1732126579355,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 573.1808578952322,
            "unit": "ns/iter",
            "extra": "iterations: 1219333\ncpu: 573.1650148072758 ns\nthreads: 1"
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
        "date": 1732130176799,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 579.569419823376,
            "unit": "ns/iter",
            "extra": "iterations: 1236520\ncpu: 579.5690558988128 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1732132489851,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 575.9902220770259,
            "unit": "ns/iter",
            "extra": "iterations: 1236868\ncpu: 575.9736382540417 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}