window.BENCHMARK_DATA = {
  "lastUpdate": 1727118735816,
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
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726086182748,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 981.1503291747572,
            "unit": "ns/iter",
            "extra": "iterations: 714818\ncpu: 981.0986852597449 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1059.808284931477,
            "unit": "ns/iter",
            "extra": "iterations: 638750\ncpu: 1059.4410958904111 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 165.68848052721,
            "unit": "ns/iter",
            "extra": "iterations: 4217884\ncpu: 165.688530078115 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2563.5345123887,
            "unit": "ns/iter",
            "extra": "iterations: 275814\ncpu: 2562.9192136729803 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1561.690473849052,
            "unit": "ns/iter",
            "extra": "iterations: 447484\ncpu: 1561.260290870735 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1389.6413326155186,
            "unit": "ns/iter",
            "extra": "iterations: 505262\ncpu: 1389.6137053647426 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1084.0001911566508,
            "unit": "ns/iter",
            "extra": "iterations: 627758\ncpu: 1080.0053523810132 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1426.969543229362,
            "unit": "ns/iter",
            "extra": "iterations: 492961\ncpu: 1426.7538405675075 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1887.1831282300195,
            "unit": "ns/iter",
            "extra": "iterations: 372089\ncpu: 1886.9947781310395 ns\nthreads: 1"
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
        "date": 1726150968618,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 733.4301713206776,
            "unit": "ns/iter",
            "extra": "iterations: 958904\ncpu: 733.2756980886512 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 789.6208735233456,
            "unit": "ns/iter",
            "extra": "iterations: 893256\ncpu: 789.6011893566905 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 141.74878653369433,
            "unit": "ns/iter",
            "extra": "iterations: 4895892\ncpu: 141.73229311430882 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 1996.0239091148767,
            "unit": "ns/iter",
            "extra": "iterations: 351916\ncpu: 1995.8399163436702 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1233.8663726682566,
            "unit": "ns/iter",
            "extra": "iterations: 573019\ncpu: 1233.7706079554093 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1312.209520213315,
            "unit": "ns/iter",
            "extra": "iterations: 537614\ncpu: 1311.9840629150278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1003.8977928796015,
            "unit": "ns/iter",
            "extra": "iterations: 725742\ncpu: 1003.8774109807621 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1367.9057595395836,
            "unit": "ns/iter",
            "extra": "iterations: 527247\ncpu: 1367.8143261128116 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1639.2147783117375,
            "unit": "ns/iter",
            "extra": "iterations: 438927\ncpu: 1638.3202673793148 ns\nthreads: 1"
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
        "date": 1726167975409,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 730.8769204622864,
            "unit": "ns/iter",
            "extra": "iterations: 970860\ncpu: 730.8396679232848 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 780.4880478154572,
            "unit": "ns/iter",
            "extra": "iterations: 885403\ncpu: 780.1487006481793 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 141.4711895659177,
            "unit": "ns/iter",
            "extra": "iterations: 4988349\ncpu: 141.45682268822813 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2034.8663398003205,
            "unit": "ns/iter",
            "extra": "iterations: 354885\ncpu: 2034.839455034731 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1260.2185797770753,
            "unit": "ns/iter",
            "extra": "iterations: 544323\ncpu: 1260.1708911804212 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1315.3437399841905,
            "unit": "ns/iter",
            "extra": "iterations: 527291\ncpu: 1315.2566609329572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 968.8005090941508,
            "unit": "ns/iter",
            "extra": "iterations: 710674\ncpu: 968.7099851690091 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1336.8620234361913,
            "unit": "ns/iter",
            "extra": "iterations: 521074\ncpu: 1336.8235605691316 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1570.1136204418356,
            "unit": "ns/iter",
            "extra": "iterations: 451072\ncpu: 1570.0775042565276 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726177243536,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 762.8907996587812,
            "unit": "ns/iter",
            "extra": "iterations: 918129\ncpu: 762.7370445765249 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 806.5732274409189,
            "unit": "ns/iter",
            "extra": "iterations: 867926\ncpu: 806.4155239041115 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 147.85384031169244,
            "unit": "ns/iter",
            "extra": "iterations: 4745344\ncpu: 147.82173852938791 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2080.7195951177864,
            "unit": "ns/iter",
            "extra": "iterations: 341927\ncpu: 2080.084345488948 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1269.8423392014847,
            "unit": "ns/iter",
            "extra": "iterations: 550752\ncpu: 1269.5006100749522 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1349.5365978826078,
            "unit": "ns/iter",
            "extra": "iterations: 510535\ncpu: 1349.4745707933848 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1010.8486405992553,
            "unit": "ns/iter",
            "extra": "iterations: 691665\ncpu: 1010.6279774168148 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1386.383978528221,
            "unit": "ns/iter",
            "extra": "iterations: 501864\ncpu: 1386.3018666411633 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1635.7374114986894,
            "unit": "ns/iter",
            "extra": "iterations: 426123\ncpu: 1635.171065631283 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2454.243871896226,
            "unit": "ns/iter",
            "extra": "iterations: 287487\ncpu: 2453.7700835168143 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726178126593,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 860.1924572099057,
            "unit": "ns/iter",
            "extra": "iterations: 870235\ncpu: 860.1538664843406 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 900.2756496918734,
            "unit": "ns/iter",
            "extra": "iterations: 832125\ncpu: 900.0342496620098 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 164.33741192037593,
            "unit": "ns/iter",
            "extra": "iterations: 4513246\ncpu: 164.18648573554364 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2187.7293666896176,
            "unit": "ns/iter",
            "extra": "iterations: 309548\ncpu: 2187.5153449545783 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1318.0500697691245,
            "unit": "ns/iter",
            "extra": "iterations: 524588\ncpu: 1317.4967784242115 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1424.3751930556991,
            "unit": "ns/iter",
            "extra": "iterations: 505036\ncpu: 1424.124220847623 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1036.6805817005236,
            "unit": "ns/iter",
            "extra": "iterations: 678906\ncpu: 1036.4542366689946 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1447.221323094018,
            "unit": "ns/iter",
            "extra": "iterations: 484667\ncpu: 1446.8263776985052 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1715.9723310554687,
            "unit": "ns/iter",
            "extra": "iterations: 411436\ncpu: 1715.8683245996922 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2599.1591901258803,
            "unit": "ns/iter",
            "extra": "iterations: 275796\ncpu: 2598.8955604867324 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726178956206,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 729.2259159815563,
            "unit": "ns/iter",
            "extra": "iterations: 981024\ncpu: 728.3287666764525 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 783.4522755427253,
            "unit": "ns/iter",
            "extra": "iterations: 897632\ncpu: 783.4379790381809 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Optional_Properties_Minimal_Match",
            "value": 142.60770723519462,
            "unit": "ns/iter",
            "extra": "iterations: 4953683\ncpu: 142.51941434282335 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 1981.7646428004973,
            "unit": "ns/iter",
            "extra": "iterations: 353416\ncpu: 1981.5260203273192 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1218.7000199129448,
            "unit": "ns/iter",
            "extra": "iterations: 577515\ncpu: 1218.5397781875788 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1308.8919149587318,
            "unit": "ns/iter",
            "extra": "iterations: 545996\ncpu: 1308.77149283145 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 966.8050658239378,
            "unit": "ns/iter",
            "extra": "iterations: 724660\ncpu: 966.7181850799002 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1332.716966606539,
            "unit": "ns/iter",
            "extra": "iterations: 531273\ncpu: 1332.572895667574 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1557.8809775030786,
            "unit": "ns/iter",
            "extra": "iterations: 447344\ncpu: 1557.7810365177613 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1298.0003340271753,
            "unit": "ns/iter",
            "extra": "iterations: 544866\ncpu: 1297.9117801441128 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726240103544,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 729.6639806540096,
            "unit": "ns/iter",
            "extra": "iterations: 963510\ncpu: 729.272140403317 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 772.4555849483564,
            "unit": "ns/iter",
            "extra": "iterations: 893267\ncpu: 772.3222731837179 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 140.94542532328452,
            "unit": "ns/iter",
            "extra": "iterations: 4873634\ncpu: 140.91271523466875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 211.82643761310337,
            "unit": "ns/iter",
            "extra": "iterations: 3374291\ncpu: 211.75618818886704 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 1989.7439857149318,
            "unit": "ns/iter",
            "extra": "iterations: 347215\ncpu: 1989.7297063778965 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1264.711815361656,
            "unit": "ns/iter",
            "extra": "iterations: 575048\ncpu: 1264.5535677021753 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1332.8984350130318,
            "unit": "ns/iter",
            "extra": "iterations: 537193\ncpu: 1332.6607010888092 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 987.066728308056,
            "unit": "ns/iter",
            "extra": "iterations: 713805\ncpu: 986.6518166726198 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1342.7386310234556,
            "unit": "ns/iter",
            "extra": "iterations: 523486\ncpu: 1342.631894644748 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1562.5886563581103,
            "unit": "ns/iter",
            "extra": "iterations: 446488\ncpu: 1562.4809625342696 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1342.9483560601752,
            "unit": "ns/iter",
            "extra": "iterations: 540257\ncpu: 1342.772051079399 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726242372657,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 897.7664324667064,
            "unit": "ns/iter",
            "extra": "iterations: 803729\ncpu: 897.625941082131 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 866.4854590671463,
            "unit": "ns/iter",
            "extra": "iterations: 797748\ncpu: 866.1845595350911 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 157.71276379775094,
            "unit": "ns/iter",
            "extra": "iterations: 4576091\ncpu: 157.70250198258734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 184.32073599669607,
            "unit": "ns/iter",
            "extra": "iterations: 3883387\ncpu: 184.21058730432986 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2385.50104618289,
            "unit": "ns/iter",
            "extra": "iterations: 304918\ncpu: 2384.2442886284157 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1344.767179948292,
            "unit": "ns/iter",
            "extra": "iterations: 460566\ncpu: 1343.7162100545854 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1418.9837116956571,
            "unit": "ns/iter",
            "extra": "iterations: 486791\ncpu: 1418.5862105092324 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1131.8420975388012,
            "unit": "ns/iter",
            "extra": "iterations: 667735\ncpu: 1130.8183635723733 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1493.1336699307756,
            "unit": "ns/iter",
            "extra": "iterations: 490200\ncpu: 1492.9396164830698 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1670.9645168416566,
            "unit": "ns/iter",
            "extra": "iterations: 421073\ncpu: 1670.6058094439654 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1387.5626850152105,
            "unit": "ns/iter",
            "extra": "iterations: 501986\ncpu: 1387.4370998394381 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726244488928,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 756.7834644094082,
            "unit": "ns/iter",
            "extra": "iterations: 950338\ncpu: 756.6286942119542 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 812.565144365238,
            "unit": "ns/iter",
            "extra": "iterations: 856751\ncpu: 812.5231251553837 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 149.39434878073118,
            "unit": "ns/iter",
            "extra": "iterations: 4768847\ncpu: 149.3618897817438 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 190.2225844147155,
            "unit": "ns/iter",
            "extra": "iterations: 4016894\ncpu: 184.11314811891984 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2082.1714017860027,
            "unit": "ns/iter",
            "extra": "iterations: 314670\ncpu: 2078.5521339816314 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1252.9484342110707,
            "unit": "ns/iter",
            "extra": "iterations: 550617\ncpu: 1252.9271707920389 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1332.7069732268183,
            "unit": "ns/iter",
            "extra": "iterations: 531576\ncpu: 1332.2855057414204 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 992.776920750513,
            "unit": "ns/iter",
            "extra": "iterations: 687778\ncpu: 992.3027488521 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1382.3715507737443,
            "unit": "ns/iter",
            "extra": "iterations: 475324\ncpu: 1382.021526369381 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1586.9245489806096,
            "unit": "ns/iter",
            "extra": "iterations: 433407\ncpu: 1586.4972185497666 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1330.4603373594127,
            "unit": "ns/iter",
            "extra": "iterations: 534445\ncpu: 1330.4343758478442 ns\nthreads: 1"
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
        "date": 1726254384825,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 788.4042590265182,
            "unit": "ns/iter",
            "extra": "iterations: 918238\ncpu: 788.2019694240494 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 818.596612023876,
            "unit": "ns/iter",
            "extra": "iterations: 848176\ncpu: 818.4610269566697 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 146.31784976706888,
            "unit": "ns/iter",
            "extra": "iterations: 4802382\ncpu: 146.3140583152277 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 171.16796178276277,
            "unit": "ns/iter",
            "extra": "iterations: 4108512\ncpu: 171.15004166958732 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2035.1807737986624,
            "unit": "ns/iter",
            "extra": "iterations: 342699\ncpu: 2034.415040604146 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1270.4351129650602,
            "unit": "ns/iter",
            "extra": "iterations: 545656\ncpu: 1270.1995396366926 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1317.1032235450648,
            "unit": "ns/iter",
            "extra": "iterations: 533512\ncpu: 1317.061284469703 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 968.6157377845395,
            "unit": "ns/iter",
            "extra": "iterations: 715717\ncpu: 968.6007178815076 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1341.7894593115125,
            "unit": "ns/iter",
            "extra": "iterations: 530971\ncpu: 1341.6777940791485 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1563.690886051137,
            "unit": "ns/iter",
            "extra": "iterations: 438767\ncpu: 1563.6932586087796 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1315.2882242553649,
            "unit": "ns/iter",
            "extra": "iterations: 546734\ncpu: 1314.9849835569034 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726258750141,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 717.0566395964963,
            "unit": "ns/iter",
            "extra": "iterations: 994940\ncpu: 716.4120449474343 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 802.2847186925854,
            "unit": "ns/iter",
            "extra": "iterations: 865672\ncpu: 802.1999094345197 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 140.77072818745214,
            "unit": "ns/iter",
            "extra": "iterations: 4975230\ncpu: 140.76876847904518 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 141.21952762762845,
            "unit": "ns/iter",
            "extra": "iterations: 4940467\ncpu: 141.21195425452692 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2050.79118732217,
            "unit": "ns/iter",
            "extra": "iterations: 358302\ncpu: 2050.4323168723618 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1264.2397223240214,
            "unit": "ns/iter",
            "extra": "iterations: 551146\ncpu: 1263.846603259391 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1389.5758116230677,
            "unit": "ns/iter",
            "extra": "iterations: 504606\ncpu: 1389.0461072599219 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1054.8757513447915,
            "unit": "ns/iter",
            "extra": "iterations: 710559\ncpu: 1054.6893361423913 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1403.394137586029,
            "unit": "ns/iter",
            "extra": "iterations: 485602\ncpu: 1403.3982561851092 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 1662.583072603177,
            "unit": "ns/iter",
            "extra": "iterations: 399199\ncpu: 1661.9380309068913 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1429.825922457254,
            "unit": "ns/iter",
            "extra": "iterations: 484738\ncpu: 1429.741427327755 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726262793668,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 646.4453608476834,
            "unit": "ns/iter",
            "extra": "iterations: 1084918\ncpu: 646.4212041831737 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 833.986676686618,
            "unit": "ns/iter",
            "extra": "iterations: 868928\ncpu: 833.8654065699347 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 140.22452652099722,
            "unit": "ns/iter",
            "extra": "iterations: 4978521\ncpu: 140.21975602794487 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 143.17693014002356,
            "unit": "ns/iter",
            "extra": "iterations: 5021773\ncpu: 143.15262756799248 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 1954.0335238348825,
            "unit": "ns/iter",
            "extra": "iterations: 357477\ncpu: 1953.857171230596 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1205.344084953244,
            "unit": "ns/iter",
            "extra": "iterations: 573681\ncpu: 1205.2987635985849 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1300.260689703849,
            "unit": "ns/iter",
            "extra": "iterations: 539304\ncpu: 1300.2332636138437 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 973.4397896285519,
            "unit": "ns/iter",
            "extra": "iterations: 724053\ncpu: 972.7740925042783 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1329.2620272475278,
            "unit": "ns/iter",
            "extra": "iterations: 528342\ncpu: 1329.1882909176252 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 476.7266877112864,
            "unit": "ns/iter",
            "extra": "iterations: 1469890\ncpu: 476.70573988529827 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1303.6389069387455,
            "unit": "ns/iter",
            "extra": "iterations: 541708\ncpu: 1303.5934488691305 ns\nthreads: 1"
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
        "date": 1726513614524,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 755.2151278959831,
            "unit": "ns/iter",
            "extra": "iterations: 968912\ncpu: 754.918919365226 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 896.7819386282173,
            "unit": "ns/iter",
            "extra": "iterations: 779675\ncpu: 896.5671593933373 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 159.10936150738064,
            "unit": "ns/iter",
            "extra": "iterations: 4429511\ncpu: 159.08370020979734 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 157.21127531976913,
            "unit": "ns/iter",
            "extra": "iterations: 4438526\ncpu: 157.1778558917982 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2167.41386767727,
            "unit": "ns/iter",
            "extra": "iterations: 321366\ncpu: 2167.164541364052 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1397.3149527389085,
            "unit": "ns/iter",
            "extra": "iterations: 512896\ncpu: 1396.9011261542307 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1432.346117536231,
            "unit": "ns/iter",
            "extra": "iterations: 486199\ncpu: 1431.5784277631171 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1088.5747732385807,
            "unit": "ns/iter",
            "extra": "iterations: 654432\ncpu: 1088.5042296220236 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1479.2515105819662,
            "unit": "ns/iter",
            "extra": "iterations: 474155\ncpu: 1478.837089137514 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 534.38882846031,
            "unit": "ns/iter",
            "extra": "iterations: 1306409\ncpu: 533.9744291412572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1495.8576912058984,
            "unit": "ns/iter",
            "extra": "iterations: 471285\ncpu: 1477.9019064897027 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726528278288,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 659.9257533439347,
            "unit": "ns/iter",
            "extra": "iterations: 1068735\ncpu: 659.8941739533186 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 855.6338558001248,
            "unit": "ns/iter",
            "extra": "iterations: 759474\ncpu: 855.5144744915561 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 149.72364751727528,
            "unit": "ns/iter",
            "extra": "iterations: 4620096\ncpu: 149.70403212400785 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 150.2345443712851,
            "unit": "ns/iter",
            "extra": "iterations: 4572056\ncpu: 150.22366305224622 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 1981.12583944496,
            "unit": "ns/iter",
            "extra": "iterations: 355890\ncpu: 1981.1121413920011 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1211.175207531531,
            "unit": "ns/iter",
            "extra": "iterations: 576659\ncpu: 1211.0900896370301 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1312.7309044405272,
            "unit": "ns/iter",
            "extra": "iterations: 532506\ncpu: 1312.711969442598 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 979.760031213392,
            "unit": "ns/iter",
            "extra": "iterations: 729174\ncpu: 979.6742615617123 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1373.9709302770364,
            "unit": "ns/iter",
            "extra": "iterations: 521264\ncpu: 1373.8892384664955 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 490.0176948692206,
            "unit": "ns/iter",
            "extra": "iterations: 1475682\ncpu: 489.9090725508618 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1318.4981963350137,
            "unit": "ns/iter",
            "extra": "iterations: 527537\ncpu: 1318.334069458639 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 148.17900204253854,
            "unit": "ns/iter",
            "extra": "iterations: 4675550\ncpu: 148.15711520569752 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726529368015,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 701.235123167572,
            "unit": "ns/iter",
            "extra": "iterations: 1009926\ncpu: 701.0335410713261 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 879.3534434038854,
            "unit": "ns/iter",
            "extra": "iterations: 826319\ncpu: 879.0866481346796 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 152.91109373580235,
            "unit": "ns/iter",
            "extra": "iterations: 4572265\ncpu: 152.83103669625453 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 147.95344271907544,
            "unit": "ns/iter",
            "extra": "iterations: 4645761\ncpu: 147.9355050765632 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2097.2893724396117,
            "unit": "ns/iter",
            "extra": "iterations: 321005\ncpu: 2096.8178065762218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1306.9021339513395,
            "unit": "ns/iter",
            "extra": "iterations: 554605\ncpu: 1306.405459741618 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1402.3200958326572,
            "unit": "ns/iter",
            "extra": "iterations: 462474\ncpu: 1402.1544994961878 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1010.8182988859242,
            "unit": "ns/iter",
            "extra": "iterations: 699671\ncpu: 1010.3948855962302 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1413.4200376776835,
            "unit": "ns/iter",
            "extra": "iterations: 489418\ncpu: 1412.8863262078637 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 511.7952241336319,
            "unit": "ns/iter",
            "extra": "iterations: 1326084\ncpu: 511.65235384786996 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1360.114725669501,
            "unit": "ns/iter",
            "extra": "iterations: 521287\ncpu: 1360.0607726645828 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 153.66505334744042,
            "unit": "ns/iter",
            "extra": "iterations: 4327104\ncpu: 153.66166378252038 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726529974914,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 656.3935766619693,
            "unit": "ns/iter",
            "extra": "iterations: 1069911\ncpu: 656.3826336956998 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 779.8987406392845,
            "unit": "ns/iter",
            "extra": "iterations: 899107\ncpu: 779.8882669137266 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 140.72045333276392,
            "unit": "ns/iter",
            "extra": "iterations: 4919565\ncpu: 140.70837563890302 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 139.89449338250205,
            "unit": "ns/iter",
            "extra": "iterations: 5004397\ncpu: 139.8853847926135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 1982.6372838896361,
            "unit": "ns/iter",
            "extra": "iterations: 360869\ncpu: 1982.522743710323 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1207.477263732449,
            "unit": "ns/iter",
            "extra": "iterations: 578613\ncpu: 1207.4599084362103 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1306.5308693432264,
            "unit": "ns/iter",
            "extra": "iterations: 535013\ncpu: 1306.4729268260799 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 970.1897677465734,
            "unit": "ns/iter",
            "extra": "iterations: 720291\ncpu: 970.0648765568376 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1338.613205542492,
            "unit": "ns/iter",
            "extra": "iterations: 527112\ncpu: 1338.5618236731475 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 481.06079568251937,
            "unit": "ns/iter",
            "extra": "iterations: 1458245\ncpu: 481.04536617646454 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1297.5758896505688,
            "unit": "ns/iter",
            "extra": "iterations: 531838\ncpu: 1297.2446496865612 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 147.01801842760344,
            "unit": "ns/iter",
            "extra": "iterations: 4794980\ncpu: 146.94513845730364 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726531039441,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 712.0638280563484,
            "unit": "ns/iter",
            "extra": "iterations: 971062\ncpu: 711.9823451025786 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 860.0134957838867,
            "unit": "ns/iter",
            "extra": "iterations: 808697\ncpu: 859.8782980522992 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 157.6024011608068,
            "unit": "ns/iter",
            "extra": "iterations: 4576120\ncpu: 157.5741020777428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 156.3305403420152,
            "unit": "ns/iter",
            "extra": "iterations: 4408893\ncpu: 156.31134618145668 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2140.7352745969624,
            "unit": "ns/iter",
            "extra": "iterations: 334490\ncpu: 2139.7799635265615 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1359.2380229917974,
            "unit": "ns/iter",
            "extra": "iterations: 559593\ncpu: 1358.9787577757397 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1465.9598542346614,
            "unit": "ns/iter",
            "extra": "iterations: 480773\ncpu: 1465.7915481942618 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1098.2583955076814,
            "unit": "ns/iter",
            "extra": "iterations: 635042\ncpu: 1098.2045282044337 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1461.8615209899222,
            "unit": "ns/iter",
            "extra": "iterations: 497505\ncpu: 1461.8566647571338 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 526.065208999853,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 525.9460000000012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1424.9182679342043,
            "unit": "ns/iter",
            "extra": "iterations: 504392\ncpu: 1424.7232311376872 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 163.08370811844864,
            "unit": "ns/iter",
            "extra": "iterations: 4272226\ncpu: 163.0765788139489 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726531811318,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 658.8367913349689,
            "unit": "ns/iter",
            "extra": "iterations: 1072633\ncpu: 658.7239064992411 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 785.7233159090523,
            "unit": "ns/iter",
            "extra": "iterations: 886502\ncpu: 785.6451536488352 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 142.33482783381845,
            "unit": "ns/iter",
            "extra": "iterations: 4984051\ncpu: 142.32980360754732 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 105.17191899110043,
            "unit": "ns/iter",
            "extra": "iterations: 6644455\ncpu: 105.17055198658122 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 1954.208437470312,
            "unit": "ns/iter",
            "extra": "iterations: 359302\ncpu: 1954.0804114644493 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1212.0592334015541,
            "unit": "ns/iter",
            "extra": "iterations: 582678\ncpu: 1211.779061505668 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1329.8401704453045,
            "unit": "ns/iter",
            "extra": "iterations: 524978\ncpu: 1329.4671395753728 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 989.5349437892426,
            "unit": "ns/iter",
            "extra": "iterations: 728241\ncpu: 989.371650319056 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1340.8189848273337,
            "unit": "ns/iter",
            "extra": "iterations: 528127\ncpu: 1340.798709401337 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 477.1638922273727,
            "unit": "ns/iter",
            "extra": "iterations: 1431941\ncpu: 477.1146297228735 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1308.491412048002,
            "unit": "ns/iter",
            "extra": "iterations: 546405\ncpu: 1308.177999835288 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 108.49923418528799,
            "unit": "ns/iter",
            "extra": "iterations: 6493085\ncpu: 108.49357431790908 ns\nthreads: 1"
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
        "date": 1726567416987,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 702.7786998537782,
            "unit": "ns/iter",
            "extra": "iterations: 1048359\ncpu: 702.7478182569137 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 842.4641791504788,
            "unit": "ns/iter",
            "extra": "iterations: 844564\ncpu: 841.5525644000926 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 152.28887407257585,
            "unit": "ns/iter",
            "extra": "iterations: 4438048\ncpu: 152.13873306462665 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 105.20974068010514,
            "unit": "ns/iter",
            "extra": "iterations: 6206774\ncpu: 105.1978048499913 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2087.3777332219593,
            "unit": "ns/iter",
            "extra": "iterations: 343139\ncpu: 2085.2074523735305 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1273.0527995632187,
            "unit": "ns/iter",
            "extra": "iterations: 549550\ncpu: 1272.8778091165484 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1354.0325664449122,
            "unit": "ns/iter",
            "extra": "iterations: 512982\ncpu: 1353.4646439836108 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1053.7228316627595,
            "unit": "ns/iter",
            "extra": "iterations: 691071\ncpu: 1053.1218934089254 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1396.9404366570743,
            "unit": "ns/iter",
            "extra": "iterations: 492652\ncpu: 1396.6775736219458 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 556.9333848123381,
            "unit": "ns/iter",
            "extra": "iterations: 1384384\ncpu: 553.4273727520691 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1464.3035503099265,
            "unit": "ns/iter",
            "extra": "iterations: 465903\ncpu: 1462.944003365511 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 121.35382084862955,
            "unit": "ns/iter",
            "extra": "iterations: 5845560\ncpu: 121.2751216307759 ns\nthreads: 1"
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
        "date": 1726599961958,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 661.6761119308201,
            "unit": "ns/iter",
            "extra": "iterations: 968563\ncpu: 661.6131320316802 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 787.1483644360765,
            "unit": "ns/iter",
            "extra": "iterations: 888562\ncpu: 787.0885768241272 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 143.3443939106229,
            "unit": "ns/iter",
            "extra": "iterations: 4861651\ncpu: 143.29885053452017 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 104.47728170700611,
            "unit": "ns/iter",
            "extra": "iterations: 6788010\ncpu: 104.47598044198516 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 1949.23831517474,
            "unit": "ns/iter",
            "extra": "iterations: 358328\ncpu: 1948.65318925677 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1221.5712450176136,
            "unit": "ns/iter",
            "extra": "iterations: 579044\ncpu: 1221.0298353838389 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1308.5274680116609,
            "unit": "ns/iter",
            "extra": "iterations: 537771\ncpu: 1307.8838390318558 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 980.4985764416454,
            "unit": "ns/iter",
            "extra": "iterations: 728105\ncpu: 980.5000652378444 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1361.952226442077,
            "unit": "ns/iter",
            "extra": "iterations: 520539\ncpu: 1361.1007052305397 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 493.0986798741583,
            "unit": "ns/iter",
            "extra": "iterations: 1389716\ncpu: 493.05037863851317 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1301.3834425859877,
            "unit": "ns/iter",
            "extra": "iterations: 523862\ncpu: 1297.568825377677 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 109.80995366314401,
            "unit": "ns/iter",
            "extra": "iterations: 6500441\ncpu: 109.7702448187748 ns\nthreads: 1"
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
        "date": 1726686460901,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 696.3367365281368,
            "unit": "ns/iter",
            "extra": "iterations: 1018063\ncpu: 695.2978352027334 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 826.9958406654365,
            "unit": "ns/iter",
            "extra": "iterations: 835951\ncpu: 826.8702352171354 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 148.86978373799317,
            "unit": "ns/iter",
            "extra": "iterations: 4685659\ncpu: 148.84971356216914 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 109.60922952126295,
            "unit": "ns/iter",
            "extra": "iterations: 6400527\ncpu: 109.60941184999304 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2122.3280379359294,
            "unit": "ns/iter",
            "extra": "iterations: 334882\ncpu: 2122.11166918497 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1380.7455326808872,
            "unit": "ns/iter",
            "extra": "iterations: 544510\ncpu: 1379.6000073460555 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1413.9954056553831,
            "unit": "ns/iter",
            "extra": "iterations: 503445\ncpu: 1412.6289862844997 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1045.3382110775362,
            "unit": "ns/iter",
            "extra": "iterations: 667385\ncpu: 1045.125377405845 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1420.2988890453407,
            "unit": "ns/iter",
            "extra": "iterations: 490299\ncpu: 1420.2415260891835 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 506.11411546245665,
            "unit": "ns/iter",
            "extra": "iterations: 1398601\ncpu: 506.0635592281149 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1369.0810019444734,
            "unit": "ns/iter",
            "extra": "iterations: 512284\ncpu: 1369.0082063855207 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 115.18464746366003,
            "unit": "ns/iter",
            "extra": "iterations: 6104633\ncpu: 115.1666283624256 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726936967009,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 667.1735415967004,
            "unit": "ns/iter",
            "extra": "iterations: 1047841\ncpu: 667.1517911591549 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 785.4626709026937,
            "unit": "ns/iter",
            "extra": "iterations: 882301\ncpu: 785.4473700018472 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 142.42895641924292,
            "unit": "ns/iter",
            "extra": "iterations: 4895481\ncpu: 142.4207345509052 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 104.10384579570086,
            "unit": "ns/iter",
            "extra": "iterations: 6625651\ncpu: 104.09060181407077 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 1970.5488733595168,
            "unit": "ns/iter",
            "extra": "iterations: 357168\ncpu: 1970.4060834117274 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1210.4202302106576,
            "unit": "ns/iter",
            "extra": "iterations: 568348\ncpu: 1210.2989717567395 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1319.5710442532716,
            "unit": "ns/iter",
            "extra": "iterations: 538988\ncpu: 1319.4134192226907 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 982.906971142387,
            "unit": "ns/iter",
            "extra": "iterations: 726495\ncpu: 982.8863240627936 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1322.1507604358912,
            "unit": "ns/iter",
            "extra": "iterations: 511812\ncpu: 1322.1300008596863 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 472.96031295359404,
            "unit": "ns/iter",
            "extra": "iterations: 1477535\ncpu: 472.93566649859395 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1363.0788039232045,
            "unit": "ns/iter",
            "extra": "iterations: 537156\ncpu: 1324.1479197849405 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 111.56104119109007,
            "unit": "ns/iter",
            "extra": "iterations: 6258102\ncpu: 111.04229365389041 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1726940809896,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 720.2525959256295,
            "unit": "ns/iter",
            "extra": "iterations: 885426\ncpu: 720.0861506212831 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 934.1942275584938,
            "unit": "ns/iter",
            "extra": "iterations: 814560\ncpu: 934.0146827735217 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 152.4594895915016,
            "unit": "ns/iter",
            "extra": "iterations: 4658778\ncpu: 152.3951130532513 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 134.2628155775465,
            "unit": "ns/iter",
            "extra": "iterations: 6270884\ncpu: 130.1988682935292 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2097.7039604082793,
            "unit": "ns/iter",
            "extra": "iterations: 334006\ncpu: 2097.1359795931808 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1270.8307180228974,
            "unit": "ns/iter",
            "extra": "iterations: 541682\ncpu: 1270.830487260052 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1476.7680117961638,
            "unit": "ns/iter",
            "extra": "iterations: 498465\ncpu: 1475.997311747061 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1058.6010950961033,
            "unit": "ns/iter",
            "extra": "iterations: 693090\ncpu: 1057.954955344905 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1471.9725273529396,
            "unit": "ns/iter",
            "extra": "iterations: 505339\ncpu: 1471.7269001600919 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 517.8857555334384,
            "unit": "ns/iter",
            "extra": "iterations: 1338253\ncpu: 517.6412830757705 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1419.2381572618394,
            "unit": "ns/iter",
            "extra": "iterations: 519770\ncpu: 1418.5158820247375 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 118.16146903874511,
            "unit": "ns/iter",
            "extra": "iterations: 5992381\ncpu: 118.14452385454159 ns\nthreads: 1"
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
        "date": 1727115627709,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 801.3294090718083,
            "unit": "ns/iter",
            "extra": "iterations: 987362\ncpu: 801.1691760468804 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 863.6115663423917,
            "unit": "ns/iter",
            "extra": "iterations: 791417\ncpu: 863.3767028001674 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 155.30629017356915,
            "unit": "ns/iter",
            "extra": "iterations: 4631621\ncpu: 155.20268173928724 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 115.97240864695749,
            "unit": "ns/iter",
            "extra": "iterations: 5857741\ncpu: 115.91977180281624 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2246.945087132407,
            "unit": "ns/iter",
            "extra": "iterations: 304537\ncpu: 2246.360869122635 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1455.3519536782733,
            "unit": "ns/iter",
            "extra": "iterations: 507581\ncpu: 1453.6458220461361 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1616.773009974131,
            "unit": "ns/iter",
            "extra": "iterations: 362734\ncpu: 1614.8858392100017 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1088.4847027637916,
            "unit": "ns/iter",
            "extra": "iterations: 667735\ncpu: 1088.3209656525441 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1460.591311966448,
            "unit": "ns/iter",
            "extra": "iterations: 471384\ncpu: 1460.357161040682 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 540.398775060151,
            "unit": "ns/iter",
            "extra": "iterations: 1385864\ncpu: 540.3372913936724 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1871.1575913750603,
            "unit": "ns/iter",
            "extra": "iterations: 483529\ncpu: 1870.1318845405349 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 161.91300277319075,
            "unit": "ns/iter",
            "extra": "iterations: 3441512\ncpu: 161.65133232137535 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727117457106,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 718.8056340438887,
            "unit": "ns/iter",
            "extra": "iterations: 970067\ncpu: 718.5843864392873 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 809.2799501108497,
            "unit": "ns/iter",
            "extra": "iterations: 810598\ncpu: 808.9842313945996 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 141.976728222745,
            "unit": "ns/iter",
            "extra": "iterations: 4865808\ncpu: 141.91764245527156 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 106.31137759327929,
            "unit": "ns/iter",
            "extra": "iterations: 6577217\ncpu: 106.30103887404053 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2089.948540273126,
            "unit": "ns/iter",
            "extra": "iterations: 350682\ncpu: 2089.4970372017956 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1296.5783962868566,
            "unit": "ns/iter",
            "extra": "iterations: 538176\ncpu: 1296.4290492329653 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1403.2854238783864,
            "unit": "ns/iter",
            "extra": "iterations: 489952\ncpu: 1403.112958004048 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1016.4759371470143,
            "unit": "ns/iter",
            "extra": "iterations: 681590\ncpu: 1016.2517055707966 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1351.2359847507064,
            "unit": "ns/iter",
            "extra": "iterations: 480548\ncpu: 1351.0949998751444 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 485.0102890414495,
            "unit": "ns/iter",
            "extra": "iterations: 1444741\ncpu: 484.972046892834 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1335.8462609048331,
            "unit": "ns/iter",
            "extra": "iterations: 525234\ncpu: 1335.6713388699159 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 109.85730314088799,
            "unit": "ns/iter",
            "extra": "iterations: 6231805\ncpu: 109.8368771166619 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 607.8258311618016,
            "unit": "ns/iter",
            "extra": "iterations: 1186923\ncpu: 607.7580432766061 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727117770510,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 662.9837825042317,
            "unit": "ns/iter",
            "extra": "iterations: 1068784\ncpu: 662.8785610563032 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 935.3374111735848,
            "unit": "ns/iter",
            "extra": "iterations: 871785\ncpu: 931.4257529092606 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 150.54767039197702,
            "unit": "ns/iter",
            "extra": "iterations: 4344615\ncpu: 150.52726190928317 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 106.51822096457093,
            "unit": "ns/iter",
            "extra": "iterations: 6780843\ncpu: 106.50593148963927 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2006.8852870599044,
            "unit": "ns/iter",
            "extra": "iterations: 324218\ncpu: 2006.363002671042 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1302.9271860153333,
            "unit": "ns/iter",
            "extra": "iterations: 501346\ncpu: 1302.750994323283 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1444.532248040341,
            "unit": "ns/iter",
            "extra": "iterations: 514884\ncpu: 1438.772616744743 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1355.171459000998,
            "unit": "ns/iter",
            "extra": "iterations: 517354\ncpu: 1300.471244061125 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1812.428244695791,
            "unit": "ns/iter",
            "extra": "iterations: 480515\ncpu: 1790.073150682079 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 548.7750426774016,
            "unit": "ns/iter",
            "extra": "iterations: 1251833\ncpu: 548.6115160728316 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1418.5625097292054,
            "unit": "ns/iter",
            "extra": "iterations: 468943\ncpu: 1418.249126226427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 118.04574213664098,
            "unit": "ns/iter",
            "extra": "iterations: 5782830\ncpu: 117.9420802617403 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 653.3327039931861,
            "unit": "ns/iter",
            "extra": "iterations: 1045010\ncpu: 653.138247480886 ns\nthreads: 1"
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
        "date": 1727118732882,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 768.4116964639468,
            "unit": "ns/iter",
            "extra": "iterations: 986110\ncpu: 767.2845828558682 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 866.8196412718464,
            "unit": "ns/iter",
            "extra": "iterations: 832441\ncpu: 866.559912354148 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 161.40662346142722,
            "unit": "ns/iter",
            "extra": "iterations: 4750658\ncpu: 161.30228696740525 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 118.63357530622011,
            "unit": "ns/iter",
            "extra": "iterations: 5787563\ncpu: 118.38160552204783 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2077.242749154637,
            "unit": "ns/iter",
            "extra": "iterations: 327548\ncpu: 2076.9902426514564 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1255.98986252347,
            "unit": "ns/iter",
            "extra": "iterations: 538201\ncpu: 1255.4435982095908 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1479.2016603238326,
            "unit": "ns/iter",
            "extra": "iterations: 504239\ncpu: 1479.0208611392611 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1097.561957213763,
            "unit": "ns/iter",
            "extra": "iterations: 694334\ncpu: 1097.0527152638338 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1439.5353453052364,
            "unit": "ns/iter",
            "extra": "iterations: 490928\ncpu: 1439.2619691685945 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 519.2743880338112,
            "unit": "ns/iter",
            "extra": "iterations: 1382225\ncpu: 518.8518511819707 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1413.7547404034117,
            "unit": "ns/iter",
            "extra": "iterations: 498639\ncpu: 1413.507567599007 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 119.14885291696025,
            "unit": "ns/iter",
            "extra": "iterations: 5890768\ncpu: 117.86425810692239 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 715.1348749293031,
            "unit": "ns/iter",
            "extra": "iterations: 985083\ncpu: 682.762772274011 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}