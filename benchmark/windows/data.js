window.BENCHMARK_DATA = {
  "lastUpdate": 1725486751588,
  "repoUrl": "https://github.com/sourcemeta/jsontoolkit",
  "entries": {
    "Benchmark (windows)": [
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724902116720,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 822106.0267856421,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 819614.9553571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 34654.26733450812,
            "unit": "ns/iter",
            "extra": "iterations: 20364\ncpu: 35295.12865841681 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 22371.821743062716,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 22495.56366558409 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724902436100,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 813849.9999998622,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 819614.9553571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 26961.57553219578,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 26681.02303343073 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 20397.31008066851,
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
          "id": "5f1e1a070854658dd704d41bc00a7826ecb5c0b6",
          "message": "Add various pointer-related evaluator optimization TODOs (#1054)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-28T23:39:09-04:00",
          "tree_id": "e7e3feb3eecf4608adb385da5be986705dd0c065",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/5f1e1a070854658dd704d41bc00a7826ecb5c0b6"
        },
        "date": 1724903329560,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 806144.419642837,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 819614.9553571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 26648.396766973638,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 26681.02303343073 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 20483.209374997812,
            "unit": "ns/iter",
            "extra": "iterations: 32000\ncpu: 20507.8125 ns\nthreads: 1"
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
        "date": 1724943319678,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 802396.3855420841,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 794846.0508701473 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 26549.580692898628,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 26088.1114104656 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 20418.11560559147,
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
          "id": "201fab700c50f44b37dbc16aaae6f20b0990d13a",
          "message": "Support performing schema compilation in \"optimized\" mode (#1059)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-08-29T14:33:49-04:00",
          "tree_id": "ec9a8cde74fde53771c08ebc399f6336aef662cb",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/201fab700c50f44b37dbc16aaae6f20b0990d13a"
        },
        "date": 1724956985631,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 794108.4821429761,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 26512.386998269034,
            "unit": "ns/iter",
            "extra": "iterations: 24889\ncpu: 26367.069789867008 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 20380.165624999336,
            "unit": "ns/iter",
            "extra": "iterations: 32000\ncpu: 20507.8125 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724957587820,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 795292.3694779719,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 794846.0508701473 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 23081.903103761862,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 23541.868952355442 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5367.486000000099,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
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
        "date": 1724958743036,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 825783.2663991529,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 815763.0522088354 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 22717.64489235229,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 23018.716308969764 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5312.0250000010365,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5161.830357142857 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724959728324,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 806906.1383930075,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 819614.9553571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 22491.22142857069,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 22321.428571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5267.557000001943,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724959747938,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 817387.8179382599,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 815763.0522088354 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 22680.14531087773,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 23018.716308969764 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5300.059821428656,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724964902158,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 821528.7946427959,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 837053.5714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 23516.154953624155,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 23541.868952355442 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5298.549107142288,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724966858924,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 798743.5267858041,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 23167.445675829702,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 23018.716308969764 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5332.669642857216,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 30950.928571427434,
            "unit": "ns/iter",
            "extra": "iterations: 22400\ncpu: 30691.964285714286 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724967526108,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 788483.4821427132,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 23651.071428576288,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 23995.535714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5190.574999999171,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25595.279474819272,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 25495.199787500474 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724976030714,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 803638.7276785716,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 23298.70357142941,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 23437.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5395.175892856636,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 3325.5937064177274,
            "unit": "ns/iter",
            "extra": "iterations: 203636\ncpu: 3299.392052485808 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 24303.79348444553,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 24588.174239126794 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724985974775,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 801195.089285857,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 15354.808035711794,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 15345.982142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5431.542000001173,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 2266.0653125001318,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2246.09375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 24984.303571427194,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25111.60714285714 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724988710677,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 819200.4464286283,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 837053.5714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 14979.725983366066,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 14753.00333480654 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5218.188000000055,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 2257.663216893685,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2249.5789625234793 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25683.089285714846,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25669.64285714286 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1724990813993,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 774012.4999998495,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 15422.81026785933,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 15345.982142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5227.731250000391,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5161.830357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 2255.7971875002636,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2246.09375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 24937.178571422333,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25111.60714285714 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725030002596,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 774121.651785745,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 15344.772791191792,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 15694.684398730364 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5389.506249999597,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 2271.1031250000956,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2197.265625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25040.094418588116,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 24588.174239126794 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725033019837,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 782240.9598214262,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 15765.877232141178,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 15694.754464285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5389.220000001842,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 2272.275812192576,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25779.81633969968,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 25495.199787500474 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725043518905,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 784039.174107219,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 15484.089285714272,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 15345.982142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5495.557142856862,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 2285.623118724322,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 26222.441467766235,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 26088.1114104656 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725044794179,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 857372.4230254544,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 857597.0548862115 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 16152.21428571496,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 16043.526785714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5386.480000000803,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 2314.645407761756,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 26546.696770767492,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 26088.1114104656 ns\nthreads: 1"
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
        "date": 1725045159881,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 840405.3547523122,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 836680.0535475235 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 15445.142857143222,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 15694.754464285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5312.975000000506,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 2275.7659868682063,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25683.812089705654,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 25495.199787500474 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725046693938,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 784526.5625001017,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 15602.646892724584,
            "unit": "ns/iter",
            "extra": "iterations: 40727\ncpu: 15729.737029489037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5337.157999999818,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 2289.679999999805,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2294.921875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25856.357142856723,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25669.64285714286 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725062717453,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 789299.2187498647,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 13027.503571428108,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12834.82142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5295.269642857647,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 2302.3993276791516,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 26561.051872647815,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 26681.02303343073 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725133500383,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 782294.1964286758,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 13045.937964560395,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 13183.534894933504 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5368.115999999645,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 2295.0265624999133,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2294.921875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25981.262095396818,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 26088.1114104656 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725134477071,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 793118.8616071085,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 12955.476785711946,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 13113.839285714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5359.2214285710525,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 2325.4324999996356,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2392.578125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25842.693431492753,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 25495.199787500474 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725136008061,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 844704.5758927121,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 854492.1875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 13159.48210052974,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 13183.534894933504 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5502.762999999504,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 2289.602187499895,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2294.921875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 27442.621238304007,
            "unit": "ns/iter",
            "extra": "iterations: 24889\ncpu: 26994.857165816225 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725139148630,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 802887.6116070093,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 13029.044959619308,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 13183.534894933504 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5558.538392857518,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 2301.035937500018,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2294.921875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 27012.901281689457,
            "unit": "ns/iter",
            "extra": "iterations: 24889\ncpu: 26994.857165816225 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725146839845,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 782156.361607278,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 13229.83647394526,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 13183.534894933504 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5225.399000000834,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 2309.7519980441825,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25863.68214286137,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25669.64285714286 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725291686717,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 782739.1741069992,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 767299.1071428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 13062.23214285751,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 13113.839285714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5407.591999999113,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 2286.2903571430184,
            "unit": "ns/iter",
            "extra": "iterations: 280000\ncpu: 2287.9464285714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 26916.81465707896,
            "unit": "ns/iter",
            "extra": "iterations: 24889\ncpu: 26367.069789867008 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725293653091,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 796953.5475232959,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 794846.0508701473 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 12989.945357387956,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 13183.534894933504 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5357.415000000856,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 2328.65750000002,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2294.921875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 27213.914924293706,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 26681.02303343073 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725295021910,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 788134.2633927956,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 13061.693921008577,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 13183.534894933504 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5405.97321428647,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 2330.0655914450517,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 26010.438346256113,
            "unit": "ns/iter",
            "extra": "iterations: 24889\ncpu: 26367.069789867008 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725296036245,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 794358.2589283895,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 819614.9553571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 13030.0815621346,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 12869.641206958897 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5340.402678569945,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5440.848214285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 2302.8222066719673,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25757.655674883914,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 25495.199787500474 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725297008927,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 787919.7544643342,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 13042.279721966333,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 13183.534894933504 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 5380.282000000988,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 2289.0078247677393,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25951.614285718602,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 26227.678571428572 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725301599775,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 809638.3928570816,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 819614.9553571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 5031.322999998338,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3858.263950892647,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3836.495535714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 773.0632812500256,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25403.849999999497,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25669.64285714286 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725302250211,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 792210.4910714925,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 5146.676000001662,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3842.1891741067884,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3836.495535714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 784.7363839287777,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25355.849428905174,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 24902.28816453535 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725303371855,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 795634.2633928923,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4881.943999998839,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3670.3690773843873,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3690.003747760328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 771.94564732151,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 24864.564285711105,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25111.60714285714 ns\nthreads: 1"
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
        "date": 1725304251943,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 801641.6294644049,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4912.29199999907,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3642.9811636545005,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3690.003747760328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 761.4388392855886,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 24996.641778547655,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 25111.326882512472 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725305683734,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 782923.9955357638,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 5020.327999998244,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3624.9428126028492,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3599.3239297786968 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 774.9802455358739,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 24666.592857142532,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25111.60714285714 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725308963847,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 780069.5312499987,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 767299.1071428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4741.559265421493,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4753.759313322502 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3734.5620811396707,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3766.734345117241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 750.5143973214651,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 24013.081327222473,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 24065.02159574112 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725309703460,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 797491.5178571454,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4652.229047855975,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4652.615498145427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3884.891812693726,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3850.439552786513 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 766.2698660715656,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 24318.914285710693,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 24553.571428571428 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725310116621,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 814719.4196429349,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 819614.9553571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4663.022238888402,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4708.436849189396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3957.272321428411,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3923.6886160714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 773.5620535715019,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25065.396428569133,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25111.60714285714 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725311311831,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 795722.321428676,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 819614.9553571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4666.74680077286,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4603.804919207409 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3759.9816786032275,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3766.734345117241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 751.032142857306,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 23972.498074796637,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 24065.02159574112 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725312568991,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 799430.4687500682,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4635.388025419744,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4708.436849189396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3891.1559086501693,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3850.439552786513 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 794.162500000084,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25196.089285714155,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25111.60714285714 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725313322968,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 775357.0312501219,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4802.316969457869,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4708.436849189396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3685.3861607141375,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3662.109375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 810.2354910715094,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 26093.417857144428,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25669.64285714286 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725315351190,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 787890.9598212199,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4647.183832524478,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4652.615498145427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3760.838284216279,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3683.029137447969 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 780.9710937500824,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 26074.427958865337,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 26088.1114104656 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725316355658,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 839142.522321217,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 854492.1875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4838.967944124349,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4813.068779171382 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3802.796959291389,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3766.734345117241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 774.106361607098,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 24780.01071428285,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25111.60714285714 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725322821398,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 797801.2048191973,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 794846.0508701473 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4705.916977493449,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4708.436849189396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3733.6338386808925,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3690.003747760328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 778.9469866071081,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 24722.55357142623,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 24553.571428571428 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725375090012,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 819919.1432395115,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 815763.0522088354 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4727.463392855822,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 4743.303571428572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3875.8225446424076,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3836.495535714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 790.283816964126,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25318.100000000806,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25111.60714285714 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725377897100,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 813526.8973215354,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 819614.9553571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4682.728556008897,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4757.258711838135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3728.717448718902,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3683.029137447969 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 770.2417410713838,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 24455.15714285713,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 24553.571428571428 ns\nthreads: 1"
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
        "date": 1725380285069,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 797545.8705356938,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4820.983928571617,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 4882.8125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3783.0055660612747,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3766.734345117241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 786.0220982142912,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 24713.685714280993,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 24553.571428571428 ns\nthreads: 1"
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
        "date": 1725381455657,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 796975.6696427156,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4678.373166012447,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4708.436849189396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3744.028135664426,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3766.734345117241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 783.4090401786905,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 24922.53928571537,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25111.60714285714 ns\nthreads: 1"
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
        "date": 1725384062868,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 797975.8928571913,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4808.706715863712,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4708.436849189396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3768.785714285881,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3749.3024553571427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 779.3429687499297,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 24600.721428571756,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 24553.571428571428 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725385930499,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 794172.32142858,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4785.590592835633,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4813.068779171382 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3666.923704841144,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3690.003747760328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 775.5803571430115,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25510.607142856705,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25669.64285714286 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725386672070,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 803168.5267857469,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4665.991441945385,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4603.804919207409 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3623.7222960931445,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3609.7862749829296 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 775.8310267857687,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 24894.785714285004,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 24553.571428571428 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725389524789,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 780106.026785735,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4669.331627972223,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4603.804919207409 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3616.834117967823,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3609.7862749829296 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 751.0164062498603,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25436.292857144897,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25669.64285714286 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725389544222,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 788034.821428799,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4724.694474764973,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4708.436849189396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3636.379458166422,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3609.7862749829296 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 772.7549107143159,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 26049.03426554105,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 26088.1114104656 ns\nthreads: 1"
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
        "date": 1725390775065,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 827678.9062498276,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 837053.5714285715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4672.80239464849,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4708.436849189396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3620.2507405681954,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3690.003747760328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 777.9073660714175,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25555.7317952371,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 25495.199787500474 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725391082626,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 795571.8750000277,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4766.955907996879,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4757.258711838135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3748.2811637832083,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3766.734345117241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 775.8750000000448,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25110.093727467123,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 24902.28816453535 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725392356972,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 796538.6160712232,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4658.024683090648,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4603.804919207409 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3757.643825635651,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3766.734345117241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 749.1135044642558,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 23924.15357142649,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 23995.535714285714 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725393108445,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 792991.7410712965,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4718.781515136772,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4708.436849189396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3706.8228449591224,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3683.029137447969 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 740.9227678571993,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 732.421875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 24057.60000000003,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 23995.535714285714 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725397791472,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 787490.959821367,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4657.868503329344,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4652.615498145427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3765.849882410904,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3766.734345117241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 740.6752232143837,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 732.421875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 24183.014285711124,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 23995.535714285714 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725398141522,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 783410.3571428029,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 795200.8928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4718.806961622537,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4708.436849189396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3621.393550771937,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3609.7862749829296 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 748.5463169643682,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25066.142857143957,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25111.60714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 18553.35761926468,
            "unit": "ns/iter",
            "extra": "iterations: 37333\ncpu: 18833.87351672783 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725404857806,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 788528.3482142062,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4810.3774785208725,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4813.068779171382 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3639.2914166021046,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3690.003747760328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 749.2447544640765,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25355.24285713921,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25669.64285714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 18635.836927112654,
            "unit": "ns/iter",
            "extra": "iterations: 37333\ncpu: 18415.342994133876 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725406528608,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 797571.3169641503,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4740.339713755162,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4753.759313322502 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3731.394943937356,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3766.734345117241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 741.6059151785146,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25126.132142856608,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25111.60714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 18666.908633110754,
            "unit": "ns/iter",
            "extra": "iterations: 37333\ncpu: 18833.87351672783 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725406956829,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 792918.9732142865,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4776.732537348733,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4708.436849189396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3665.1443479569125,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3683.029137447969 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 719.2879464284374,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 711.4955357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 25873.957424202752,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 26088.1114104656 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 19241.71912249387,
            "unit": "ns/iter",
            "extra": "iterations: 37333\ncpu: 19252.40403932178 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725408088703,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 780104.5758927419,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4860.5019513408315,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3864.575420401218,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3934.1447604557848 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 817.8760044642734,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 819.6149553571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 24943.664285716848,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25111.60714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 18736.21728765547,
            "unit": "ns/iter",
            "extra": "iterations: 37333\ncpu: 18415.342994133876 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725410123505,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 799577.7901785215,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4610.6158719112755,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4603.804919207409 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3707.4570162703803,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3690.003747760328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 793.0970982142429,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 14106.456667604476,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 14125.215958857327 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 15644.21651785608,
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
          "id": "7c1edc9c7e922e4d6684f8439f094e52dc22ec3a",
          "message": "Upgrade `actions/checkout` due to deprecation warning (#1125)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T20:29:27-04:00",
          "tree_id": "3d4f19543f1aa625152bda8848b2d2fccd472f54",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/7c1edc9c7e922e4d6684f8439f094e52dc22ec3a"
        },
        "date": 1725410294954,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 789624.665178528,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4676.401934193844,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4652.615498145427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3684.487349129341,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3683.029137447969 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 796.1632812502221,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 14045.62457310615,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 14125.215958857327 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 15970.84151785769,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 16043.526785714286 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725410488207,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 794880.7228915244,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 794846.0508701473 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4651.779579864598,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4708.436849189396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3787.2585941812745,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3766.734345117241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 797.4679687499732,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 14064.620916870646,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 13811.32227088272 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 15429.308035714534,
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
          "id": "79916090b5e76a8ea187ec6f84ac2802bf22b33d",
          "message": "Simplify `EvaluationContext::push` signature (#1127)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-03T21:00:24-04:00",
          "tree_id": "f8e8829c8149040904c257b4c61ae449e31656c3",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/79916090b5e76a8ea187ec6f84ac2802bf22b33d"
        },
        "date": 1725412219185,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 792532.2623828016,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 773929.0495314592 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4697.197538387723,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4708.436849189396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3825.3136160713652,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3836.495535714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 810.3842633927018,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 14276.381132226612,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 14439.109646831934 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 15571.305803569707,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 15694.754464285714 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725412271544,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 840313.7884873615,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 836680.0535475235 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4845.0988125883705,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4757.258711838135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3965.6417410720883,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 4010.8816964285716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 835.7282429785955,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 837.0531977441082 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 14872.99776785887,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 14997.20982142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 16208.065902226099,
            "unit": "ns/iter",
            "extra": "iterations: 40727\ncpu: 16113.389152159501 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725413880964,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 792238.8392856813,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 784737.7232142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4410.1849394431165,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3818.2293526783133,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3749.3024553571427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 852.3442177037094,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 857.9795276877109 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 13953.075655909272,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 14125.215958857327 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 11611.973214286309,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11439.732142857143 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725414782355,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 796280.9151784711,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4402.860000000431,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4492.1875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3922.6188616073696,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3923.6886160714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 831.6151785712528,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 837.0535714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 13948.575676000695,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 14125.215958857327 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 11547.649999999163,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11439.732142857143 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725415729652,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 803307.0950469205,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 794846.0508701473 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4283.640624998952,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4296.875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3853.244419642315,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3836.495535714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 893.5971457156953,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 899.8321875749162 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 13063.548214282555,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 13113.839285714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 10304.229445405446,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 10253.86047383717 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725417379412,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 807157.0312499737,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4007.2661830351362,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 4010.8816964285716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3667.6423792102723,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3683.029137447969 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 737.9571428571502,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12759.142857141065,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12834.82142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9583.938018134104,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725417470972,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 802206.808035777,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3875.4280133928323,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3923.6886160714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3491.473075165693,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3529.5688022055315 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 675.8354910714511,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 680.1060267857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12522.96964285701,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12276.785714285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9471.284503193378,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725458532160,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 786543.6412313543,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 773929.0495314592 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3915.0011160707772,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3923.6886160714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3517.130345050766,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3529.5688022055315 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 690.9665178570532,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 697.5446428571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12584.126785717282,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12555.80357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9355.341717224519,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725463176837,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Compile_Basic",
            "value": 801979.7991072965,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 802176.3392857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4018.6416184977047,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 4080.628873877011 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3497.0392693415206,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3529.5688022055315 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 677.0799107140846,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 680.1060267857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12786.357142857696,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12834.82142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9283.083557663826,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9207.54818058848 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 11217.056250000467,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10986.328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 10116.78593750176,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10009.765625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 11368.446428572757,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11439.732142857143 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725463379799,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3977.3203125001037,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 4010.8816964285716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3656.444864285027,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3690.003747760328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 691.7805803572056,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 697.5446428571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12608.632142855316,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12834.82142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9315.882518380638,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 11105.139285713709,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 10881.69642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 10020.28906250274,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10009.765625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 11301.695312500471,
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
          "id": "dfd7fa5081d640579331166ccab727b3c06aab3f",
          "message": "Only check `required` when it intersects with `properties` (#1136)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-04T11:07:15-04:00",
          "tree_id": "5d39f90f6d4545a9b86f073f1b4b46a32eb64e54",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/dfd7fa5081d640579331166ccab727b3c06aab3f"
        },
        "date": 1725463388563,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4080.588829305565,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 4080.628873877011 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3562.8317193419284,
            "unit": "ns/iter",
            "extra": "iterations: 203636\ncpu: 3606.3122434147203 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 689.3128571428114,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 697.5446428571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12881.217857142246,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 13113.839285714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9315.986982200646,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9207.54818058848 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 11120.87031249942,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10986.328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 10087.008986566376,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 10044.598015187432 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 11215.66562499865,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11230.46875 ns\nthreads: 1"
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
        "date": 1725471344902,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4109.113912296848,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 4171.309515518722 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3568.305702331265,
            "unit": "ns/iter",
            "extra": "iterations: 203636\ncpu: 3529.5821956824925 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 691.5944642857751,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 697.5446428571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12792.96677246945,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 12555.74751898429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9398.129026210738,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 11387.770312499157,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11474.609375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 10240.5781249999,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10253.90625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 11629.464285712336,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11718.75 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725471938261,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4005.2028924942583,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 4080.628873877011 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3568.953656119964,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3529.5688022055315 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 701.4092857141512,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 711.4955357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12824.835714285753,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12834.82142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9490.91432627658,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 11215.737499998822,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11230.46875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 10134.843749998623,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10009.765625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 11412.08571428365,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11439.732142857143 ns\nthreads: 1"
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
        "date": 1725474043949,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3998.884486607425,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 4010.8816964285716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3552.341923824849,
            "unit": "ns/iter",
            "extra": "iterations: 203636\ncpu: 3529.5821956824925 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 701.3809821428042,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 711.4955357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12791.019642857496,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12834.82142857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9562.560434998388,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 11150.706249999586,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10986.328125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 10123.24218750038,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10253.90625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 11323.789285713458,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11160.714285714286 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725476357433,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 4038.15725329004,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 3989.9482322352997 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3762.039889214094,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3766.734345117241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 692.6910714286955,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 714.9832589285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12929.874999997537,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 13113.839285714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9638.560937499817,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 9765.625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 6218.482142857949,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5225.08900000048,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6360.922321428169,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
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
        "date": 1725477103689,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3977.026785713735,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 4010.8816964285716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3868.3649553572504,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3836.495535714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 692.7562500000104,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 683.59375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12658.216071429251,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12555.80357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9600.050892630172,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9626.073097887956 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 6260.725892857976,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5238.011000001279,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6383.181919643123,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6277.901785714285 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725482359857,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3958.0558035710665,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3923.6886160714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3778.48360985051,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3766.734345117241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 703.8193080356946,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 714.9832589285714 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12878.375989392778,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 12555.74751898429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9624.578461702198,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9626.073097887956 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 6217.608035713949,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5227.765178572343,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5161.830357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6330.149107142802,
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
          "id": "2b8c2e9fe3ef2a4b0236536136f881e6f1ba645a",
          "message": "Stop supporting reverse iterators on JSON objects (#1144)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-04T16:30:52-04:00",
          "tree_id": "5d380944a3b1a729797ad6633b47295a0ef8a9bd",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/2b8c2e9fe3ef2a4b0236536136f881e6f1ba645a"
        },
        "date": 1725482753515,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3981.9196428573073,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 4010.8816964285716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3802.03298744108,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 3808.586948951877 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 692.7219642857299,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 697.5446428571429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12614.239285714544,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12555.80357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9440.85606760673,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 6302.030357142639,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5243.480000000318,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6448.6991071431385,
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
          "id": "756811e52d2644ff92fe93be378bb5a1a64e0c36",
          "message": "Make schema validation object trace tests order independent (#1146)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-04T16:49:28-04:00",
          "tree_id": "dd763a9694de839a4cacec1518138f92d8f98dac",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/756811e52d2644ff92fe93be378bb5a1a64e0c36"
        },
        "date": 1725483779073,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3997.8610491075983,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 4010.8816964285716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3767.657379183418,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3766.734345117241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 685.7747321429233,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 683.59375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12493.587500001371,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12555.80357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9453.998419648748,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 6326.348214287236,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5267.241964286231,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6424.598214284823,
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
          "id": "ce9969ea33ea252618643768703ec2d688a736ff",
          "message": "Make JSON Pointer object walker tests independent of key ordering (#1147)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-04T17:05:13-04:00",
          "tree_id": "bf9e5e2f291df33665f8425fdeaf5665250a3056",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/ce9969ea33ea252618643768703ec2d688a736ff"
        },
        "date": 1725484483915,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3981.351004463793,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3923.6886160714284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3756.8364955355346,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3749.3024553571427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 714.3419642857348,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 725.4464285714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12579.244642856629,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12555.80357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9485.498279025544,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 6230.959821428834,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5231.718000000001,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6372.913392856917,
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
          "id": "b948b70578a9ddfd1165351640d008d98607c796",
          "message": "Use an `std::unordered_map` for compiler values (#1148)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-09-04T17:22:42-04:00",
          "tree_id": "26ed16010770761dec605bc365f76c81f8c30893",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/b948b70578a9ddfd1165351640d008d98607c796"
        },
        "date": 1725485581701,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3779.3493225906805,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3850.439552786513 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3611.192968585505,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3609.7862749829296 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 660.8334821429196,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 655.6919642857143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12995.271428571137,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 13113.839285714286 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9420.551247538917,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 6146.840178571112,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5098.687999999356,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6231.835714285491,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725486740596,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 3806.4880241285896,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3766.734345117241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 3591.0941919986,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3609.7862749829296 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 663.3032142858042,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 669.6428571428571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 12583.84999999862,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12555.80357142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 9546.75693411995,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 6128.5017857142875,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 5143.588000000818,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 6201.391071428475,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}