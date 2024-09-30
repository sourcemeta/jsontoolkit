window.BENCHMARK_DATA = {
  "lastUpdate": 1727704974718,
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
      }
    ]
  }
}