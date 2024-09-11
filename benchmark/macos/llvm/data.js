window.BENCHMARK_DATA = {
  "lastUpdate": 1726081611241,
  "repoUrl": "https://github.com/sourcemeta/jsontoolkit",
  "entries": {
    "Benchmark (macos/llvm)": [
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725552601438,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1132.2785055044824,
            "unit": "ns/iter",
            "extra": "iterations: 649664\ncpu: 1111.3190818638557 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2275.744823242262,
            "unit": "ns/iter",
            "extra": "iterations: 317525\ncpu: 2209.21187308086 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 192.51931513673105,
            "unit": "ns/iter",
            "extra": "iterations: 3687393\ncpu: 183.376982057513 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2894.5364065536514,
            "unit": "ns/iter",
            "extra": "iterations: 252070\ncpu: 2702.193835045822 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1952.2366696186853,
            "unit": "ns/iter",
            "extra": "iterations: 371501\ncpu: 1875.208949639435 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1670.0248035677857,
            "unit": "ns/iter",
            "extra": "iterations: 383211\ncpu: 1654.5610642700774 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1417.8708817154914,
            "unit": "ns/iter",
            "extra": "iterations: 534719\ncpu: 1365.952958469775 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1774.7561346315583,
            "unit": "ns/iter",
            "extra": "iterations: 422397\ncpu: 1743.2723243773023 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725556644127,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1017.4531260812771,
            "unit": "ns/iter",
            "extra": "iterations: 693584\ncpu: 1017.29567002699 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2035.8994473619528,
            "unit": "ns/iter",
            "extra": "iterations: 334939\ncpu: 2035.8960885414951 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 162.24643492186433,
            "unit": "ns/iter",
            "extra": "iterations: 4219613\ncpu: 162.23383518820327 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2430.2371548595174,
            "unit": "ns/iter",
            "extra": "iterations: 284232\ncpu: 2428.934813814066 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1721.9999440059937,
            "unit": "ns/iter",
            "extra": "iterations: 392901\ncpu: 1721.8892290933316 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1515.4305408155672,
            "unit": "ns/iter",
            "extra": "iterations: 459824\ncpu: 1515.0231392880755 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1158.9742177459693,
            "unit": "ns/iter",
            "extra": "iterations: 601499\ncpu: 1158.7467310835093 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1545.2661700325746,
            "unit": "ns/iter",
            "extra": "iterations: 441774\ncpu: 1544.980012404533 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725557112552,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1041.3108804132467,
            "unit": "ns/iter",
            "extra": "iterations: 660508\ncpu: 1036.652092026137 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2406.4634763702093,
            "unit": "ns/iter",
            "extra": "iterations: 319218\ncpu: 2396.732013858867 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 167.82709371513894,
            "unit": "ns/iter",
            "extra": "iterations: 3255087\ncpu: 167.79244302840456 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2510.521640417676,
            "unit": "ns/iter",
            "extra": "iterations: 265152\ncpu: 2509.832096307023 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1723.436744670236,
            "unit": "ns/iter",
            "extra": "iterations: 405452\ncpu: 1723.0695618716875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1546.0656825670828,
            "unit": "ns/iter",
            "extra": "iterations: 444806\ncpu: 1545.4220491630065 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1169.5508885164797,
            "unit": "ns/iter",
            "extra": "iterations: 602690\ncpu: 1169.4868008428884 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1629.441640108143,
            "unit": "ns/iter",
            "extra": "iterations: 443361\ncpu: 1629.2569711814965 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725560055998,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1093.4695186150252,
            "unit": "ns/iter",
            "extra": "iterations: 631615\ncpu: 1086.0350055017693 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2392.3567679789385,
            "unit": "ns/iter",
            "extra": "iterations: 310196\ncpu: 2271.125353002618 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 178.78198190956877,
            "unit": "ns/iter",
            "extra": "iterations: 4006984\ncpu: 172.37178885665622 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2755.0509588812683,
            "unit": "ns/iter",
            "extra": "iterations: 266352\ncpu: 2663.8583528563704 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1855.039317495733,
            "unit": "ns/iter",
            "extra": "iterations: 378254\ncpu: 1842.6586367890359 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1683.6190466060675,
            "unit": "ns/iter",
            "extra": "iterations: 423183\ncpu: 1642.0602907016573 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1340.2735605501175,
            "unit": "ns/iter",
            "extra": "iterations: 553128\ncpu: 1257.108662009517 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1717.5147123460868,
            "unit": "ns/iter",
            "extra": "iterations: 409520\ncpu: 1695.5289118968537 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725561236370,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1146.075640983191,
            "unit": "ns/iter",
            "extra": "iterations: 573221\ncpu: 1144.1206794587079 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2265.1553410156775,
            "unit": "ns/iter",
            "extra": "iterations: 304942\ncpu: 2265.0569616517237 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 192.88118378770383,
            "unit": "ns/iter",
            "extra": "iterations: 4007374\ncpu: 185.51500309180042 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2702.2971654579906,
            "unit": "ns/iter",
            "extra": "iterations: 257890\ncpu: 2656.434914110668 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1833.7305776583394,
            "unit": "ns/iter",
            "extra": "iterations: 371621\ncpu: 1832.4906288934149 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1577.253947948459,
            "unit": "ns/iter",
            "extra": "iterations: 460429\ncpu: 1576.8967636704026 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1195.3963986127899,
            "unit": "ns/iter",
            "extra": "iterations: 564949\ncpu: 1194.7981145200729 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1708.9610217789145,
            "unit": "ns/iter",
            "extra": "iterations: 412692\ncpu: 1708.366045380089 ns\nthreads: 1"
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
        "date": 1725563266991,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 996.5261856500551,
            "unit": "ns/iter",
            "extra": "iterations: 711382\ncpu: 996.3971537092588 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2075.0545914380345,
            "unit": "ns/iter",
            "extra": "iterations: 337672\ncpu: 2075.034352863133 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 159.0763741951825,
            "unit": "ns/iter",
            "extra": "iterations: 4404760\ncpu: 159.02773363361447 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2470.206675555647,
            "unit": "ns/iter",
            "extra": "iterations: 291002\ncpu: 2469.879932096685 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1665.364812082918,
            "unit": "ns/iter",
            "extra": "iterations: 415529\ncpu: 1665.255613928268 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1470.4296392862937,
            "unit": "ns/iter",
            "extra": "iterations: 478662\ncpu: 1470.402914791649 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1209.3955508972865,
            "unit": "ns/iter",
            "extra": "iterations: 628756\ncpu: 1158.9074299092179 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1528.0145930069102,
            "unit": "ns/iter",
            "extra": "iterations: 452477\ncpu: 1526.0488378414823 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725566192463,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1065.9659033560708,
            "unit": "ns/iter",
            "extra": "iterations: 653906\ncpu: 1065.8733824127626 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 2032.553887838709,
            "unit": "ns/iter",
            "extra": "iterations: 345449\ncpu: 2032.502627015854 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 163.7602802748366,
            "unit": "ns/iter",
            "extra": "iterations: 4314622\ncpu: 163.74319697067313 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2429.313023865756,
            "unit": "ns/iter",
            "extra": "iterations: 292179\ncpu: 2429.0315183500547 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1690.9927982167112,
            "unit": "ns/iter",
            "extra": "iterations: 412259\ncpu: 1690.9127514499398 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1474.3091931957417,
            "unit": "ns/iter",
            "extra": "iterations: 478691\ncpu: 1473.854741367605 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1114.2539377535463,
            "unit": "ns/iter",
            "extra": "iterations: 625547\ncpu: 1114.173675199464 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1525.9363764208504,
            "unit": "ns/iter",
            "extra": "iterations: 460081\ncpu: 1525.9008739765368 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725567959925,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1048.551903202515,
            "unit": "ns/iter",
            "extra": "iterations: 685555\ncpu: 1041.3533560399967 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1121.0711763242646,
            "unit": "ns/iter",
            "extra": "iterations: 599469\ncpu: 1120.4816262392217 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 172.41186588639027,
            "unit": "ns/iter",
            "extra": "iterations: 4020770\ncpu: 172.3587770501671 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2827.1879774391814,
            "unit": "ns/iter",
            "extra": "iterations: 244141\ncpu: 2820.8248512130303 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1725.3244868334357,
            "unit": "ns/iter",
            "extra": "iterations: 431244\ncpu: 1709.259723033828 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1531.5364416536447,
            "unit": "ns/iter",
            "extra": "iterations: 429042\ncpu: 1529.698724134233 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1318.1382128310947,
            "unit": "ns/iter",
            "extra": "iterations: 533033\ncpu: 1316.5995351132105 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1561.6940319561315,
            "unit": "ns/iter",
            "extra": "iterations: 464323\ncpu: 1558.1954803014253 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725569843087,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 968.7421095868937,
            "unit": "ns/iter",
            "extra": "iterations: 687765\ncpu: 968.6564451520507 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1035.3894971921688,
            "unit": "ns/iter",
            "extra": "iterations: 677933\ncpu: 1035.3014235920073 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 157.67542582928047,
            "unit": "ns/iter",
            "extra": "iterations: 4457009\ncpu: 157.65415775467355 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2460.0329273688117,
            "unit": "ns/iter",
            "extra": "iterations: 287299\ncpu: 2459.413363777806 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1481.8955182485843,
            "unit": "ns/iter",
            "extra": "iterations: 472360\ncpu: 1481.73215344229 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1352.4664348649603,
            "unit": "ns/iter",
            "extra": "iterations: 520272\ncpu: 1352.413737429651 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1039.2437804746517,
            "unit": "ns/iter",
            "extra": "iterations: 674127\ncpu: 1039.1380259209313 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1480.1758163683553,
            "unit": "ns/iter",
            "extra": "iterations: 492639\ncpu: 1479.6108306488147 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725639638544,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 935.4434080141507,
            "unit": "ns/iter",
            "extra": "iterations: 748295\ncpu: 935.3516995302655 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1009.2309633059964,
            "unit": "ns/iter",
            "extra": "iterations: 695210\ncpu: 1009.1828368406668 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 158.06174253278238,
            "unit": "ns/iter",
            "extra": "iterations: 4463147\ncpu: 158.0306451927305 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2440.8379887085707,
            "unit": "ns/iter",
            "extra": "iterations: 283042\ncpu: 2440.800305255054 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1488.3742411897208,
            "unit": "ns/iter",
            "extra": "iterations: 468826\ncpu: 1487.9528865719908 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1342.176319453922,
            "unit": "ns/iter",
            "extra": "iterations: 519211\ncpu: 1342.015095982171 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1047.7480480404085,
            "unit": "ns/iter",
            "extra": "iterations: 672017\ncpu: 1047.720518974968 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1391.0375143997644,
            "unit": "ns/iter",
            "extra": "iterations: 506952\ncpu: 1390.9896794962856 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2132.459423021724,
            "unit": "ns/iter",
            "extra": "iterations: 327846\ncpu: 2132.1992642887208 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725645233765,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 929.5184315778939,
            "unit": "ns/iter",
            "extra": "iterations: 763825\ncpu: 929.4890845416162 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1014.4325108285409,
            "unit": "ns/iter",
            "extra": "iterations: 690533\ncpu: 1014.427985338861 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 157.92646576054617,
            "unit": "ns/iter",
            "extra": "iterations: 4386460\ncpu: 157.90705945112916 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2453.7004647288313,
            "unit": "ns/iter",
            "extra": "iterations: 285973\ncpu: 2453.4623898060267 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1507.6866480055435,
            "unit": "ns/iter",
            "extra": "iterations: 466919\ncpu: 1507.1222203422867 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1380.38883056613,
            "unit": "ns/iter",
            "extra": "iterations: 506758\ncpu: 1380.30973364012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1071.043652513088,
            "unit": "ns/iter",
            "extra": "iterations: 664704\ncpu: 1070.8796697477376 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1411.4056933767283,
            "unit": "ns/iter",
            "extra": "iterations: 496296\ncpu: 1411.3250963134897 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1873.5501634193743,
            "unit": "ns/iter",
            "extra": "iterations: 374496\ncpu: 1873.021340681878 ns\nthreads: 1"
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
        "date": 1725646689506,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 921.8797409602556,
            "unit": "ns/iter",
            "extra": "iterations: 773472\ncpu: 921.3908195771794 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1022.4074721758325,
            "unit": "ns/iter",
            "extra": "iterations: 681060\ncpu: 1022.1801309723082 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 157.73564085657912,
            "unit": "ns/iter",
            "extra": "iterations: 4392184\ncpu: 157.731779907217 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2452.3642529608387,
            "unit": "ns/iter",
            "extra": "iterations: 287649\ncpu: 2452.0370312429363 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1504.5464345241237,
            "unit": "ns/iter",
            "extra": "iterations: 468563\ncpu: 1504.470049918582 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1364.0558545528845,
            "unit": "ns/iter",
            "extra": "iterations: 519886\ncpu: 1363.814374689834 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1048.6511713140264,
            "unit": "ns/iter",
            "extra": "iterations: 671212\ncpu: 1048.650798853417 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1384.0015071013777,
            "unit": "ns/iter",
            "extra": "iterations: 508924\ncpu: 1380.5617341685604 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1899.8455553822585,
            "unit": "ns/iter",
            "extra": "iterations: 371978\ncpu: 1869.3256052777292 ns\nthreads: 1"
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
        "date": 1725649597622,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 976.6852357805093,
            "unit": "ns/iter",
            "extra": "iterations: 772286\ncpu: 967.3035637056734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1026.2491533771838,
            "unit": "ns/iter",
            "extra": "iterations: 649640\ncpu: 1024.5382057755064 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 157.4726112254799,
            "unit": "ns/iter",
            "extra": "iterations: 4441765\ncpu: 157.45362485408398 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2443.2939573639637,
            "unit": "ns/iter",
            "extra": "iterations: 285157\ncpu: 2443.2365328573405 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1505.2456646711912,
            "unit": "ns/iter",
            "extra": "iterations: 465305\ncpu: 1505.053674471581 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1355.9856462384882,
            "unit": "ns/iter",
            "extra": "iterations: 517495\ncpu: 1355.8237277654857 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1050.17827008659,
            "unit": "ns/iter",
            "extra": "iterations: 667016\ncpu: 1049.98830612759 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1382.5390781327133,
            "unit": "ns/iter",
            "extra": "iterations: 506754\ncpu: 1382.3571200227334 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1835.9821844279443,
            "unit": "ns/iter",
            "extra": "iterations: 371136\ncpu: 1835.9604026556294 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725651346102,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 922.003212066586,
            "unit": "ns/iter",
            "extra": "iterations: 766796\ncpu: 921.8044955894397 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1024.199267014633,
            "unit": "ns/iter",
            "extra": "iterations: 691419\ncpu: 1024.1792603327356 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 156.71873503202707,
            "unit": "ns/iter",
            "extra": "iterations: 4467876\ncpu: 156.71585334955583 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2445.7659854304343,
            "unit": "ns/iter",
            "extra": "iterations: 283602\ncpu: 2445.599819465305 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1639.3891360970406,
            "unit": "ns/iter",
            "extra": "iterations: 459577\ncpu: 1625.842894661829 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1382.2833197497364,
            "unit": "ns/iter",
            "extra": "iterations: 483422\ncpu: 1377.0577259619945 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1046.8076268564157,
            "unit": "ns/iter",
            "extra": "iterations: 672256\ncpu: 1046.7336847867468 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1375.884805322854,
            "unit": "ns/iter",
            "extra": "iterations: 508869\ncpu: 1375.8138145573819 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1813.1292425141585,
            "unit": "ns/iter",
            "extra": "iterations: 384324\ncpu: 1812.8792373101815 ns\nthreads: 1"
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
        "date": 1725652456616,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 916.42577856571,
            "unit": "ns/iter",
            "extra": "iterations: 768336\ncpu: 916.3855396597319 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1029.959194814659,
            "unit": "ns/iter",
            "extra": "iterations: 690574\ncpu: 1029.6521444479524 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 157.98995415374293,
            "unit": "ns/iter",
            "extra": "iterations: 4418244\ncpu: 157.96864093517698 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2441.277644168248,
            "unit": "ns/iter",
            "extra": "iterations: 287321\ncpu: 2440.743976249561 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1506.072097388458,
            "unit": "ns/iter",
            "extra": "iterations: 459767\ncpu: 1505.9867280600818 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1351.8811495784846,
            "unit": "ns/iter",
            "extra": "iterations: 518938\ncpu: 1351.7973245358792 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1049.98673740446,
            "unit": "ns/iter",
            "extra": "iterations: 661032\ncpu: 1049.90681237822 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1385.827776506419,
            "unit": "ns/iter",
            "extra": "iterations: 489428\ncpu: 1385.799341271854 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1827.3106951996288,
            "unit": "ns/iter",
            "extra": "iterations: 383041\ncpu: 1827.2560900791293 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725656855678,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 922.963591433225,
            "unit": "ns/iter",
            "extra": "iterations: 758750\ncpu: 922.9087314662269 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1022.718654187747,
            "unit": "ns/iter",
            "extra": "iterations: 681670\ncpu: 1022.6634588583917 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 157.04474443820274,
            "unit": "ns/iter",
            "extra": "iterations: 4462834\ncpu: 156.90411070633593 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2469.8728333682743,
            "unit": "ns/iter",
            "extra": "iterations: 283620\ncpu: 2469.6283759960506 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1486.6121435626305,
            "unit": "ns/iter",
            "extra": "iterations: 462599\ncpu: 1486.5207231316965 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1350.9142856046033,
            "unit": "ns/iter",
            "extra": "iterations: 519376\ncpu: 1350.6303718308122 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1044.8353399181374,
            "unit": "ns/iter",
            "extra": "iterations: 671456\ncpu: 1044.7281728065584 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1375.7871114686102,
            "unit": "ns/iter",
            "extra": "iterations: 507552\ncpu: 1375.7506620011334 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1808.1314992932744,
            "unit": "ns/iter",
            "extra": "iterations: 382907\ncpu: 1808.013434071455 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725660022159,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1028.3709983651938,
            "unit": "ns/iter",
            "extra": "iterations: 696809\ncpu: 1028.3018732536457 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1104.570613044137,
            "unit": "ns/iter",
            "extra": "iterations: 637099\ncpu: 1104.198876469748 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 171.2443823363026,
            "unit": "ns/iter",
            "extra": "iterations: 4152972\ncpu: 171.0931352294212 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2611.098797164698,
            "unit": "ns/iter",
            "extra": "iterations: 267285\ncpu: 2610.816170005799 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1625.8578770312447,
            "unit": "ns/iter",
            "extra": "iterations: 435475\ncpu: 1625.85911935243 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1605.0457902422286,
            "unit": "ns/iter",
            "extra": "iterations: 482985\ncpu: 1604.6750934294041 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1122.5975101009242,
            "unit": "ns/iter",
            "extra": "iterations: 502430\ncpu: 1121.3661604601634 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1502.9805920351732,
            "unit": "ns/iter",
            "extra": "iterations: 472641\ncpu: 1502.8129172035412 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1998.4447778355684,
            "unit": "ns/iter",
            "extra": "iterations: 366936\ncpu: 1996.1328406043547 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725896314960,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 992.6444745779141,
            "unit": "ns/iter",
            "extra": "iterations: 659289\ncpu: 991.3740408227654 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1130.8749919913153,
            "unit": "ns/iter",
            "extra": "iterations: 624320\ncpu: 1130.4363147104061 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 174.68714992043675,
            "unit": "ns/iter",
            "extra": "iterations: 4042831\ncpu: 174.66893867193585 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2816.27976988554,
            "unit": "ns/iter",
            "extra": "iterations: 261783\ncpu: 2813.780879583476 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1645.6663143476987,
            "unit": "ns/iter",
            "extra": "iterations: 412505\ncpu: 1644.123101538165 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1605.4422119833366,
            "unit": "ns/iter",
            "extra": "iterations: 460130\ncpu: 1605.1528915741235 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1150.9812307099735,
            "unit": "ns/iter",
            "extra": "iterations: 586117\ncpu: 1150.8572520503599 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1507.8450721532106,
            "unit": "ns/iter",
            "extra": "iterations: 463874\ncpu: 1507.8340238944172 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1963.808327694563,
            "unit": "ns/iter",
            "extra": "iterations: 357626\ncpu: 1963.3835347541885 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725897253708,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 923.3975051218725,
            "unit": "ns/iter",
            "extra": "iterations: 768775\ncpu: 917.7561705310397 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1028.7246510628108,
            "unit": "ns/iter",
            "extra": "iterations: 687731\ncpu: 1028.7030830368262 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 163.39313603466601,
            "unit": "ns/iter",
            "extra": "iterations: 4389183\ncpu: 159.3872937173045 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2565.4478711647084,
            "unit": "ns/iter",
            "extra": "iterations: 285015\ncpu: 2488.321667280668 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1546.3725473268798,
            "unit": "ns/iter",
            "extra": "iterations: 463321\ncpu: 1518.195808089858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1360.1779094312667,
            "unit": "ns/iter",
            "extra": "iterations: 507393\ncpu: 1359.8867150315436 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1052.317878244663,
            "unit": "ns/iter",
            "extra": "iterations: 670049\ncpu: 1051.9529168762285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1379.7845350044488,
            "unit": "ns/iter",
            "extra": "iterations: 504908\ncpu: 1379.6592646581164 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1814.00617587911,
            "unit": "ns/iter",
            "extra": "iterations: 385856\ncpu: 1813.9409520650206 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725899047389,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1110.7614553382962,
            "unit": "ns/iter",
            "extra": "iterations: 661482\ncpu: 1098.7812215600725 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1139.6427583297877,
            "unit": "ns/iter",
            "extra": "iterations: 535643\ncpu: 1135.692989547143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 185.79671358304856,
            "unit": "ns/iter",
            "extra": "iterations: 3362507\ncpu: 184.62504315976145 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2946.368683493844,
            "unit": "ns/iter",
            "extra": "iterations: 258905\ncpu: 2798.860585929198 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 2021.1891990598253,
            "unit": "ns/iter",
            "extra": "iterations: 358691\ncpu: 1950.271961103012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 2022.378233282248,
            "unit": "ns/iter",
            "extra": "iterations: 428048\ncpu: 1950.0313049003846 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1256.5366359285952,
            "unit": "ns/iter",
            "extra": "iterations: 502635\ncpu: 1242.581594994379 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1594.715336528105,
            "unit": "ns/iter",
            "extra": "iterations: 442786\ncpu: 1520.106778443763 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 2271.997839671707,
            "unit": "ns/iter",
            "extra": "iterations: 349021\ncpu: 2227.2986439211395 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725901699066,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 998.7340832389534,
            "unit": "ns/iter",
            "extra": "iterations: 720624\ncpu: 998.6789227114274 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1055.3385667114467,
            "unit": "ns/iter",
            "extra": "iterations: 637192\ncpu: 1055.2847493377194 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 168.98513393818402,
            "unit": "ns/iter",
            "extra": "iterations: 4135527\ncpu: 168.96032839345503 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2512.9826330787396,
            "unit": "ns/iter",
            "extra": "iterations: 265332\ncpu: 2512.2563429966985 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1525.5666099986158,
            "unit": "ns/iter",
            "extra": "iterations: 465283\ncpu: 1525.5640115800481 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1437.552926685494,
            "unit": "ns/iter",
            "extra": "iterations: 506597\ncpu: 1437.4502809925846 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1112.5193309718843,
            "unit": "ns/iter",
            "extra": "iterations: 619705\ncpu: 1112.2760022914122 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1426.4604228512485,
            "unit": "ns/iter",
            "extra": "iterations: 491142\ncpu: 1426.4225010282137 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1839.5676862171647,
            "unit": "ns/iter",
            "extra": "iterations: 368790\ncpu: 1839.4994441280976 ns\nthreads: 1"
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
        "date": 1725908756632,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 927.7920934986139,
            "unit": "ns/iter",
            "extra": "iterations: 761424\ncpu: 927.7813675429194 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1020.3036573586074,
            "unit": "ns/iter",
            "extra": "iterations: 683280\ncpu: 1020.2567029621825 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 157.58951564246985,
            "unit": "ns/iter",
            "extra": "iterations: 4438498\ncpu: 157.5843900346469 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2485.7392019889926,
            "unit": "ns/iter",
            "extra": "iterations: 278292\ncpu: 2485.285239963778 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1498.2243235468864,
            "unit": "ns/iter",
            "extra": "iterations: 465738\ncpu: 1497.1979954394953 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1352.5685038243982,
            "unit": "ns/iter",
            "extra": "iterations: 517847\ncpu: 1352.5404221710282 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1040.023998352155,
            "unit": "ns/iter",
            "extra": "iterations: 669921\ncpu: 1039.99128255421 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1381.376411239459,
            "unit": "ns/iter",
            "extra": "iterations: 508064\ncpu: 1381.3653397997102 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1855.5936657593008,
            "unit": "ns/iter",
            "extra": "iterations: 382461\ncpu: 1855.535597093567 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1725908988469,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1079.0867573379958,
            "unit": "ns/iter",
            "extra": "iterations: 692391\ncpu: 1076.9334090131158 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1037.14227218525,
            "unit": "ns/iter",
            "extra": "iterations: 679170\ncpu: 1030.3826729684763 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 166.91993995570792,
            "unit": "ns/iter",
            "extra": "iterations: 4384097\ncpu: 163.4888552876454 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2565.113206162339,
            "unit": "ns/iter",
            "extra": "iterations: 272494\ncpu: 2513.5892900394133 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1558.2158185814587,
            "unit": "ns/iter",
            "extra": "iterations: 451861\ncpu: 1532.980274907548 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1361.6105054899729,
            "unit": "ns/iter",
            "extra": "iterations: 508477\ncpu: 1356.7889993057702 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1051.7896345803297,
            "unit": "ns/iter",
            "extra": "iterations: 667315\ncpu: 1051.6397803136456 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1371.5203572569696,
            "unit": "ns/iter",
            "extra": "iterations: 495106\ncpu: 1371.366939604854 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1826.1810904078839,
            "unit": "ns/iter",
            "extra": "iterations: 378739\ncpu: 1824.987656407186 ns\nthreads: 1"
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
        "date": 1725995225010,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 926.8533505824306,
            "unit": "ns/iter",
            "extra": "iterations: 746706\ncpu: 926.823944095802 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1015.2996646040832,
            "unit": "ns/iter",
            "extra": "iterations: 691720\ncpu: 1015.2229225698263 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 159.28553194147304,
            "unit": "ns/iter",
            "extra": "iterations: 4449982\ncpu: 159.26266668044946 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2484.2464179056924,
            "unit": "ns/iter",
            "extra": "iterations: 284959\ncpu: 2483.4660424833037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1516.95803082549,
            "unit": "ns/iter",
            "extra": "iterations: 435939\ncpu: 1516.792487022266 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1348.7273784267347,
            "unit": "ns/iter",
            "extra": "iterations: 515183\ncpu: 1348.6353392872063 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1044.906373190601,
            "unit": "ns/iter",
            "extra": "iterations: 663859\ncpu: 1044.8182520685866 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1373.9052232750503,
            "unit": "ns/iter",
            "extra": "iterations: 505430\ncpu: 1373.838118038109 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1820.834839175849,
            "unit": "ns/iter",
            "extra": "iterations: 387380\ncpu: 1820.8167690639655 ns\nthreads: 1"
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
        "date": 1726072319581,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 946.2983590565789,
            "unit": "ns/iter",
            "extra": "iterations: 731957\ncpu: 946.2263493620528 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1053.8330404878843,
            "unit": "ns/iter",
            "extra": "iterations: 664742\ncpu: 1053.5771773108963 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 162.3428657042456,
            "unit": "ns/iter",
            "extra": "iterations: 4161539\ncpu: 162.3425852791478 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2578.0519411539376,
            "unit": "ns/iter",
            "extra": "iterations: 274888\ncpu: 2577.715287680804 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1574.376492774743,
            "unit": "ns/iter",
            "extra": "iterations: 433756\ncpu: 1574.0692924132447 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1366.983463271941,
            "unit": "ns/iter",
            "extra": "iterations: 501006\ncpu: 1366.9477012251364 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1090.1006813510512,
            "unit": "ns/iter",
            "extra": "iterations: 619211\ncpu: 1090.0662294435995 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1410.4085780089515,
            "unit": "ns/iter",
            "extra": "iterations: 500186\ncpu: 1410.3273582227396 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1895.2274124462515,
            "unit": "ns/iter",
            "extra": "iterations: 380309\ncpu: 1895.2141548056984 ns\nthreads: 1"
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
        "date": 1726081609263,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 949.8498906004144,
            "unit": "ns/iter",
            "extra": "iterations: 728522\ncpu: 941.1287510878187 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1027.0060899092912,
            "unit": "ns/iter",
            "extra": "iterations: 688516\ncpu: 1026.863573250295 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 160.36908089293505,
            "unit": "ns/iter",
            "extra": "iterations: 4375301\ncpu: 160.36268133323856 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2469.48131284882,
            "unit": "ns/iter",
            "extra": "iterations: 282226\ncpu: 2469.163011203785 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1522.7189616700107,
            "unit": "ns/iter",
            "extra": "iterations: 455308\ncpu: 1522.4595219060507 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1367.0033442883616,
            "unit": "ns/iter",
            "extra": "iterations: 518795\ncpu: 1358.856581115855 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1057.8784598938598,
            "unit": "ns/iter",
            "extra": "iterations: 646371\ncpu: 1057.8119996101298 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1391.7482378169502,
            "unit": "ns/iter",
            "extra": "iterations: 505481\ncpu: 1391.2234089906437 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1863.0897346602292,
            "unit": "ns/iter",
            "extra": "iterations: 377591\ncpu: 1853.7571075581761 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}