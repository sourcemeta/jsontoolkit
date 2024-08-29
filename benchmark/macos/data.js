window.BENCHMARK_DATA = {
  "lastUpdate": 1724959470412,
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
      }
    ]
  }
}