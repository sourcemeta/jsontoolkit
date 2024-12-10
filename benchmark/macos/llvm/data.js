window.BENCHMARK_DATA = {
  "lastUpdate": 1733858850753,
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
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727119649877,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 694.6673961078225,
            "unit": "ns/iter",
            "extra": "iterations: 1033668\ncpu: 694.426063300789 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 890.5208143264445,
            "unit": "ns/iter",
            "extra": "iterations: 857150\ncpu: 890.1277489354262 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 154.9996342330371,
            "unit": "ns/iter",
            "extra": "iterations: 4516537\ncpu: 154.96629386629635 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 107.63533544464467,
            "unit": "ns/iter",
            "extra": "iterations: 6118774\ncpu: 107.61665653936561 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2112.1205854572636,
            "unit": "ns/iter",
            "extra": "iterations: 323986\ncpu: 2098.9116813689466 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1291.1982147418419,
            "unit": "ns/iter",
            "extra": "iterations: 520597\ncpu: 1284.8767856902753 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1438.2914600986426,
            "unit": "ns/iter",
            "extra": "iterations: 505685\ncpu: 1437.673650592762 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1058.0773247938298,
            "unit": "ns/iter",
            "extra": "iterations: 667328\ncpu: 1057.9864774144064 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1442.1622008864679,
            "unit": "ns/iter",
            "extra": "iterations: 508795\ncpu: 1441.9107892176612 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 191.64956978613205,
            "unit": "ns/iter",
            "extra": "iterations: 3686306\ncpu: 191.62950661176802 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1380.827346202137,
            "unit": "ns/iter",
            "extra": "iterations: 518668\ncpu: 1380.5999213369628 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 114.39457122803245,
            "unit": "ns/iter",
            "extra": "iterations: 5951217\ncpu: 114.32955645878798 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 355.53428195892405,
            "unit": "ns/iter",
            "extra": "iterations: 1988772\ncpu: 355.3569740523295 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727135795819,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 720.2896050492413,
            "unit": "ns/iter",
            "extra": "iterations: 1059322\ncpu: 705.1227105639264 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 842.3510234024105,
            "unit": "ns/iter",
            "extra": "iterations: 861538\ncpu: 829.0754441475588 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 147.4574668459784,
            "unit": "ns/iter",
            "extra": "iterations: 4626967\ncpu: 145.2080812333435 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 105.12358108136398,
            "unit": "ns/iter",
            "extra": "iterations: 6435006\ncpu: 105.08956790405462 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2031.6751066613072,
            "unit": "ns/iter",
            "extra": "iterations: 351580\ncpu: 2009.320780476703 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1263.8330180406713,
            "unit": "ns/iter",
            "extra": "iterations: 551868\ncpu: 1258.3407626461415 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1305.2978808167659,
            "unit": "ns/iter",
            "extra": "iterations: 542190\ncpu: 1305.2896586067604 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 985.3972778513751,
            "unit": "ns/iter",
            "extra": "iterations: 730232\ncpu: 983.3819936677648 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1588.9352651743213,
            "unit": "ns/iter",
            "extra": "iterations: 479232\ncpu: 1535.3523971688066 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 205.66246093083268,
            "unit": "ns/iter",
            "extra": "iterations: 3476205\ncpu: 199.35072874010572 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1406.2432974498388,
            "unit": "ns/iter",
            "extra": "iterations: 492611\ncpu: 1405.7765660937332 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 109.28462333886048,
            "unit": "ns/iter",
            "extra": "iterations: 6302389\ncpu: 109.27760885594341 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 327.48756312673015,
            "unit": "ns/iter",
            "extra": "iterations: 2122318\ncpu: 327.4353796179452 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727140753158,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 652.637783064617,
            "unit": "ns/iter",
            "extra": "iterations: 1067203\ncpu: 652.5600096701377 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 774.2364841837301,
            "unit": "ns/iter",
            "extra": "iterations: 891992\ncpu: 774.1885577449121 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 140.48627069708076,
            "unit": "ns/iter",
            "extra": "iterations: 5018281\ncpu: 140.48276690763225 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 107.88246097035793,
            "unit": "ns/iter",
            "extra": "iterations: 6426912\ncpu: 107.86673288820515 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 1988.130453918338,
            "unit": "ns/iter",
            "extra": "iterations: 354447\ncpu: 1987.9784565816617 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1214.2442321771862,
            "unit": "ns/iter",
            "extra": "iterations: 573700\ncpu: 1214.1990587415023 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1311.7228333678902,
            "unit": "ns/iter",
            "extra": "iterations: 529970\ncpu: 1311.6421684246293 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 976.1900072153106,
            "unit": "ns/iter",
            "extra": "iterations: 723462\ncpu: 976.0388244303092 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1332.5260335971234,
            "unit": "ns/iter",
            "extra": "iterations: 532485\ncpu: 1332.4187535799133 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 182.5909171882057,
            "unit": "ns/iter",
            "extra": "iterations: 3817210\ncpu: 182.59435556335654 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1310.4905406325597,
            "unit": "ns/iter",
            "extra": "iterations: 542901\ncpu: 1310.3236133291327 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 114.69651559356228,
            "unit": "ns/iter",
            "extra": "iterations: 6062496\ncpu: 114.69384887016825 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 330.3371363324559,
            "unit": "ns/iter",
            "extra": "iterations: 2152687\ncpu: 330.3104445746177 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727141521134,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 733.8315913838597,
            "unit": "ns/iter",
            "extra": "iterations: 1002995\ncpu: 733.7912950712615 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 872.0368456081333,
            "unit": "ns/iter",
            "extra": "iterations: 796350\ncpu: 871.9294280153208 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 151.33601951292556,
            "unit": "ns/iter",
            "extra": "iterations: 4736963\ncpu: 151.2806834252241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 109.22323198157166,
            "unit": "ns/iter",
            "extra": "iterations: 6350358\ncpu: 109.16880591613885 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2111.7815216412378,
            "unit": "ns/iter",
            "extra": "iterations: 344089\ncpu: 2109.6402384266858 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1270.255259930934,
            "unit": "ns/iter",
            "extra": "iterations: 529237\ncpu: 1269.8564159346383 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1393.940901480093,
            "unit": "ns/iter",
            "extra": "iterations: 505258\ncpu: 1393.4979752918307 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1023.6729880834149,
            "unit": "ns/iter",
            "extra": "iterations: 685764\ncpu: 1023.5080873303363 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1380.6014490721154,
            "unit": "ns/iter",
            "extra": "iterations: 499216\ncpu: 1380.5967757443707 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 186.87368950792245,
            "unit": "ns/iter",
            "extra": "iterations: 3368105\ncpu: 186.82315426627122 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1388.8421768910866,
            "unit": "ns/iter",
            "extra": "iterations: 536398\ncpu: 1388.761703063768 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 113.69004268021752,
            "unit": "ns/iter",
            "extra": "iterations: 6387502\ncpu: 113.65789004840981 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 349.65722771029635,
            "unit": "ns/iter",
            "extra": "iterations: 1996054\ncpu: 347.40342696139487 ns\nthreads: 1"
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
        "date": 1727188546721,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 710.7847316816764,
            "unit": "ns/iter",
            "extra": "iterations: 979322\ncpu: 710.3138702081645 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 857.7317559066267,
            "unit": "ns/iter",
            "extra": "iterations: 829748\ncpu: 857.4193610590202 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 150.21968312243752,
            "unit": "ns/iter",
            "extra": "iterations: 4608720\ncpu: 150.14776337030662 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 108.77267615056094,
            "unit": "ns/iter",
            "extra": "iterations: 6631174\ncpu: 108.76942755536204 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2151.908777086162,
            "unit": "ns/iter",
            "extra": "iterations: 317782\ncpu: 2151.8147660975133 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1368.7515807923596,
            "unit": "ns/iter",
            "extra": "iterations: 510029\ncpu: 1368.4339517948965 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1471.56444345723,
            "unit": "ns/iter",
            "extra": "iterations: 472740\ncpu: 1466.9818504886414 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 997.0133709432822,
            "unit": "ns/iter",
            "extra": "iterations: 652310\ncpu: 996.9646333798338 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1373.3714446738763,
            "unit": "ns/iter",
            "extra": "iterations: 489723\ncpu: 1373.3620842802989 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 185.29452758605757,
            "unit": "ns/iter",
            "extra": "iterations: 3678596\ncpu: 183.970188626313 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1403.3156348708646,
            "unit": "ns/iter",
            "extra": "iterations: 529029\ncpu: 1402.717053318437 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 117.06564815431656,
            "unit": "ns/iter",
            "extra": "iterations: 6038022\ncpu: 117.02011022815076 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 352.090036866468,
            "unit": "ns/iter",
            "extra": "iterations: 1961130\ncpu: 352.0138899512019 ns\nthreads: 1"
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
        "date": 1727189643668,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1125.2995388789122,
            "unit": "ns/iter",
            "extra": "iterations: 711093\ncpu: 993.2329526517625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1303.6051832998685,
            "unit": "ns/iter",
            "extra": "iterations: 625123\ncpu: 1298.664422841585 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 216.80119378896353,
            "unit": "ns/iter",
            "extra": "iterations: 3261548\ncpu: 215.86007625826758 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 163.206555262248,
            "unit": "ns/iter",
            "extra": "iterations: 4576659\ncpu: 155.20994681928454 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2918.278380460864,
            "unit": "ns/iter",
            "extra": "iterations: 247873\ncpu: 2913.584779302303 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1978.0752987796943,
            "unit": "ns/iter",
            "extra": "iterations: 363897\ncpu: 1972.6351137821946 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 2029.1298041018745,
            "unit": "ns/iter",
            "extra": "iterations: 376267\ncpu: 2025.657312493522 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1447.754837994706,
            "unit": "ns/iter",
            "extra": "iterations: 415048\ncpu: 1444.2209093887968 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1977.3123704307768,
            "unit": "ns/iter",
            "extra": "iterations: 378176\ncpu: 1968.9588974445742 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 281.9037017258602,
            "unit": "ns/iter",
            "extra": "iterations: 2142271\ncpu: 277.3738709995142 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1960.156785214401,
            "unit": "ns/iter",
            "extra": "iterations: 361654\ncpu: 1956.8261376896198 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 150.5298539020807,
            "unit": "ns/iter",
            "extra": "iterations: 4275488\ncpu: 149.99854987313708 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 524.9357499999405,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 505.05799999999823 ns\nthreads: 1"
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
        "date": 1727190854021,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 754.5528464559909,
            "unit": "ns/iter",
            "extra": "iterations: 981712\ncpu: 704.4112733673422 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 827.0417134428023,
            "unit": "ns/iter",
            "extra": "iterations: 839993\ncpu: 825.4473549184336 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 147.01888062969232,
            "unit": "ns/iter",
            "extra": "iterations: 4625958\ncpu: 146.8822241792943 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 107.2475167155275,
            "unit": "ns/iter",
            "extra": "iterations: 6498450\ncpu: 107.23141672244927 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2094.9968899472397,
            "unit": "ns/iter",
            "extra": "iterations: 338901\ncpu: 2094.596947191068 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1288.092979325594,
            "unit": "ns/iter",
            "extra": "iterations: 544734\ncpu: 1287.924014289542 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1375.94888165677,
            "unit": "ns/iter",
            "extra": "iterations: 507000\ncpu: 1375.5621301775157 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1024.785347673866,
            "unit": "ns/iter",
            "extra": "iterations: 691467\ncpu: 1024.4682681892266 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1410.8242110770984,
            "unit": "ns/iter",
            "extra": "iterations: 496880\ncpu: 1410.3163741748485 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 186.68701490476295,
            "unit": "ns/iter",
            "extra": "iterations: 3728005\ncpu: 186.64647713723565 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1379.447399987261,
            "unit": "ns/iter",
            "extra": "iterations: 517709\ncpu: 1379.048847904904 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 111.0117933189496,
            "unit": "ns/iter",
            "extra": "iterations: 6222167\ncpu: 110.95635973769261 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 339.26089047016416,
            "unit": "ns/iter",
            "extra": "iterations: 2071490\ncpu: 339.16311447315667 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727200048062,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 678.4027424510847,
            "unit": "ns/iter",
            "extra": "iterations: 1062699\ncpu: 677.7761153440438 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 793.318173051431,
            "unit": "ns/iter",
            "extra": "iterations: 886615\ncpu: 793.1221556143307 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 144.14959516141911,
            "unit": "ns/iter",
            "extra": "iterations: 4868854\ncpu: 144.0043180592393 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 104.78752786522175,
            "unit": "ns/iter",
            "extra": "iterations: 6651211\ncpu: 104.77625803782206 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2049.8563631998427,
            "unit": "ns/iter",
            "extra": "iterations: 341542\ncpu: 2049.174040088777 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1313.0866064651036,
            "unit": "ns/iter",
            "extra": "iterations: 491349\ncpu: 1313.0442923461758 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1447.4132001971943,
            "unit": "ns/iter",
            "extra": "iterations: 519068\ncpu: 1446.7353025037185 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1123.357899949277,
            "unit": "ns/iter",
            "extra": "iterations: 638156\ncpu: 1121.3621747660459 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1486.0196487821474,
            "unit": "ns/iter",
            "extra": "iterations: 494280\ncpu: 1485.5547462976415 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 194.33578057032705,
            "unit": "ns/iter",
            "extra": "iterations: 3466222\ncpu: 194.2642450483558 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1357.063871754039,
            "unit": "ns/iter",
            "extra": "iterations: 509521\ncpu: 1356.6820602094865 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 111.56757263208489,
            "unit": "ns/iter",
            "extra": "iterations: 6265103\ncpu: 111.56767893520667 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 348.7959460449906,
            "unit": "ns/iter",
            "extra": "iterations: 2019608\ncpu: 348.5859632166246 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727204066602,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 725.0057409864564,
            "unit": "ns/iter",
            "extra": "iterations: 959417\ncpu: 724.834977908459 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 888.8603416115436,
            "unit": "ns/iter",
            "extra": "iterations: 757527\ncpu: 888.6481933977273 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 157.23143581727868,
            "unit": "ns/iter",
            "extra": "iterations: 4338637\ncpu: 157.2002912435403 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 115.34949151102568,
            "unit": "ns/iter",
            "extra": "iterations: 6099739\ncpu: 115.33509876406191 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2780.53823689288,
            "unit": "ns/iter",
            "extra": "iterations: 246542\ncpu: 2779.8022243674495 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1556.3514261815778,
            "unit": "ns/iter",
            "extra": "iterations: 512873\ncpu: 1556.034339885312 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1466.565219302046,
            "unit": "ns/iter",
            "extra": "iterations: 455080\ncpu: 1466.5135800298865 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1085.0812646656334,
            "unit": "ns/iter",
            "extra": "iterations: 632009\ncpu: 1084.6332884500075 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1509.2037873134916,
            "unit": "ns/iter",
            "extra": "iterations: 466452\ncpu: 1507.9129256600902 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 206.06891508600478,
            "unit": "ns/iter",
            "extra": "iterations: 3428364\ncpu: 206.0175057257631 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1465.7304393652041,
            "unit": "ns/iter",
            "extra": "iterations: 491459\ncpu: 1465.658376385417 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 116.57364027370431,
            "unit": "ns/iter",
            "extra": "iterations: 5885964\ncpu: 116.55847708208888 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 364.428408624335,
            "unit": "ns/iter",
            "extra": "iterations: 1858499\ncpu: 364.2633114142111 ns\nthreads: 1"
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
        "date": 1727204811936,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 765.8986614686885,
            "unit": "ns/iter",
            "extra": "iterations: 867518\ncpu: 765.4976611436307 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 899.1756709472611,
            "unit": "ns/iter",
            "extra": "iterations: 668756\ncpu: 898.8704400409126 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 148.62643612616063,
            "unit": "ns/iter",
            "extra": "iterations: 4612060\ncpu: 148.57482339778755 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 108.59211462943948,
            "unit": "ns/iter",
            "extra": "iterations: 6634945\ncpu: 108.55885014872003 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2651.1806373285262,
            "unit": "ns/iter",
            "extra": "iterations: 262753\ncpu: 2650.934527864575 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1315.20130014557,
            "unit": "ns/iter",
            "extra": "iterations: 539478\ncpu: 1314.782067109317 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1387.5093477520375,
            "unit": "ns/iter",
            "extra": "iterations: 510818\ncpu: 1387.3336491666298 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1031.971558635439,
            "unit": "ns/iter",
            "extra": "iterations: 690649\ncpu: 1031.6007117942665 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1413.9703069289355,
            "unit": "ns/iter",
            "extra": "iterations: 507088\ncpu: 1413.6658725901625 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 185.0808257088894,
            "unit": "ns/iter",
            "extra": "iterations: 3766945\ncpu: 185.0621657603179 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1383.8194063738347,
            "unit": "ns/iter",
            "extra": "iterations: 518407\ncpu: 1383.7371023153605 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 111.0829886744299,
            "unit": "ns/iter",
            "extra": "iterations: 6257878\ncpu: 111.07423315059823 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 338.49299625902364,
            "unit": "ns/iter",
            "extra": "iterations: 2074320\ncpu: 338.37836013729714 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727207730540,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 749.1266296028281,
            "unit": "ns/iter",
            "extra": "iterations: 951152\ncpu: 749.09162783656 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 889.389810961436,
            "unit": "ns/iter",
            "extra": "iterations: 790791\ncpu: 888.8100648591097 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 173.82713846933268,
            "unit": "ns/iter",
            "extra": "iterations: 4529747\ncpu: 169.4657560344981 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 138.23017371407224,
            "unit": "ns/iter",
            "extra": "iterations: 5299858\ncpu: 132.1535407175059 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2775.9666126908173,
            "unit": "ns/iter",
            "extra": "iterations: 257523\ncpu: 2775.13464816735 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1367.8669267574398,
            "unit": "ns/iter",
            "extra": "iterations: 510591\ncpu: 1367.1020444935382 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1472.7402831233082,
            "unit": "ns/iter",
            "extra": "iterations: 484312\ncpu: 1472.3256908769558 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1106.1128378610363,
            "unit": "ns/iter",
            "extra": "iterations: 640574\ncpu: 1105.8737944406114 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1480.905916569726,
            "unit": "ns/iter",
            "extra": "iterations: 483422\ncpu: 1480.609074473235 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 213.94666687146486,
            "unit": "ns/iter",
            "extra": "iterations: 3515751\ncpu: 207.86028362076863 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1536.9412278417103,
            "unit": "ns/iter",
            "extra": "iterations: 468334\ncpu: 1505.3743695738528 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 123.51861311199376,
            "unit": "ns/iter",
            "extra": "iterations: 5412636\ncpu: 121.09885091109031 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 357.4999667449632,
            "unit": "ns/iter",
            "extra": "iterations: 1729061\ncpu: 357.24361373022725 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727208729016,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 755.3319557372072,
            "unit": "ns/iter",
            "extra": "iterations: 949964\ncpu: 754.9907154376376 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 884.8643229375305,
            "unit": "ns/iter",
            "extra": "iterations: 790023\ncpu: 882.2629214592489 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 154.8908624008867,
            "unit": "ns/iter",
            "extra": "iterations: 4569012\ncpu: 154.86717916258485 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 122.0725782501435,
            "unit": "ns/iter",
            "extra": "iterations: 6279829\ncpu: 121.02670311564216 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2741.1067117109337,
            "unit": "ns/iter",
            "extra": "iterations: 258116\ncpu: 2739.9463806970516 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1404.8000076516737,
            "unit": "ns/iter",
            "extra": "iterations: 496619\ncpu: 1404.7428712957014 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1537.4686511262132,
            "unit": "ns/iter",
            "extra": "iterations: 481676\ncpu: 1535.8352917728907 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1089.2508326874572,
            "unit": "ns/iter",
            "extra": "iterations: 648803\ncpu: 1089.057849609204 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1475.8257014122605,
            "unit": "ns/iter",
            "extra": "iterations: 479390\ncpu: 1475.4479651223455 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 205.42227507627038,
            "unit": "ns/iter",
            "extra": "iterations: 3477501\ncpu: 205.40526084679829 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1502.317050122973,
            "unit": "ns/iter",
            "extra": "iterations: 489973\ncpu: 1501.8235698701774 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 119.21122851729112,
            "unit": "ns/iter",
            "extra": "iterations: 5767725\ncpu: 119.12045043756419 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 341.20608532275594,
            "unit": "ns/iter",
            "extra": "iterations: 1966535\ncpu: 341.20572479005006 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727212682997,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 767.1673360821146,
            "unit": "ns/iter",
            "extra": "iterations: 975229\ncpu: 767.0803472825355 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 893.1005699446712,
            "unit": "ns/iter",
            "extra": "iterations: 773233\ncpu: 892.9830982381774 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 148.53620990547904,
            "unit": "ns/iter",
            "extra": "iterations: 4412729\ncpu: 148.5294021001516 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 105.6127208949273,
            "unit": "ns/iter",
            "extra": "iterations: 6603026\ncpu: 105.60552086270748 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2518.3618160379124,
            "unit": "ns/iter",
            "extra": "iterations: 273078\ncpu: 2518.0021825266053 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1284.7705897407732,
            "unit": "ns/iter",
            "extra": "iterations: 547020\ncpu: 1284.7025702899332 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1373.4114235145757,
            "unit": "ns/iter",
            "extra": "iterations: 519805\ncpu: 1373.361164282759 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1028.9940802377987,
            "unit": "ns/iter",
            "extra": "iterations: 682122\ncpu: 1028.972823043385 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1369.235963082756,
            "unit": "ns/iter",
            "extra": "iterations: 505346\ncpu: 1369.0144969980943 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 183.06610787575124,
            "unit": "ns/iter",
            "extra": "iterations: 3839361\ncpu: 183.05103375275178 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1441.2742176519341,
            "unit": "ns/iter",
            "extra": "iterations: 516586\ncpu: 1437.5592834494194 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 109.44553540153062,
            "unit": "ns/iter",
            "extra": "iterations: 6360572\ncpu: 109.42663647231731 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 333.09299767288763,
            "unit": "ns/iter",
            "extra": "iterations: 2095332\ncpu: 333.04411902266514 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727215914452,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3662.693529386615,
            "unit": "ns/iter",
            "extra": "iterations: 190152\ncpu: 3661.055366233331 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 722.9815748431736,
            "unit": "ns/iter",
            "extra": "iterations: 964985\ncpu: 722.9397348145309 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 844.8505381758025,
            "unit": "ns/iter",
            "extra": "iterations: 808193\ncpu: 844.4443344597145 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 154.46928084415086,
            "unit": "ns/iter",
            "extra": "iterations: 4636130\ncpu: 154.46978406558912 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 109.39988379087995,
            "unit": "ns/iter",
            "extra": "iterations: 6364389\ncpu: 109.36776491820346 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2660.22232007883,
            "unit": "ns/iter",
            "extra": "iterations: 264560\ncpu: 2659.5857272452404 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1335.7277223216474,
            "unit": "ns/iter",
            "extra": "iterations: 494385\ncpu: 1335.248844524003 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1427.2509421425464,
            "unit": "ns/iter",
            "extra": "iterations: 505762\ncpu: 1427.1910503359304 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1064.121067118515,
            "unit": "ns/iter",
            "extra": "iterations: 668117\ncpu: 1064.0022630766782 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1441.2123905852309,
            "unit": "ns/iter",
            "extra": "iterations: 499476\ncpu: 1441.1983758979377 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 190.16493587061973,
            "unit": "ns/iter",
            "extra": "iterations: 3704076\ncpu: 190.16429468509824 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1398.5856683681277,
            "unit": "ns/iter",
            "extra": "iterations: 504632\ncpu: 1398.5815406078095 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 114.76574615023434,
            "unit": "ns/iter",
            "extra": "iterations: 6222775\ncpu: 114.65126089244761 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 340.45956827452517,
            "unit": "ns/iter",
            "extra": "iterations: 2048107\ncpu: 340.4470567211576 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727279076569,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4497.514907017569,
            "unit": "ns/iter",
            "extra": "iterations: 140672\ncpu: 4497.042766151047 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 767.0545290886332,
            "unit": "ns/iter",
            "extra": "iterations: 753231\ncpu: 766.8882454386506 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 921.7578886415392,
            "unit": "ns/iter",
            "extra": "iterations: 777130\ncpu: 920.1163254539134 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 161.13514486117904,
            "unit": "ns/iter",
            "extra": "iterations: 4276611\ncpu: 161.0922761036718 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 118.63975548366635,
            "unit": "ns/iter",
            "extra": "iterations: 5315473\ncpu: 118.39247419749844 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2939.5301096865273,
            "unit": "ns/iter",
            "extra": "iterations: 231022\ncpu: 2938.7287790773184 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1520.0371227187252,
            "unit": "ns/iter",
            "extra": "iterations: 415406\ncpu: 1519.0488341526136 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1508.6190507430576,
            "unit": "ns/iter",
            "extra": "iterations: 411564\ncpu: 1502.954583005318 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1164.2644307554463,
            "unit": "ns/iter",
            "extra": "iterations: 634253\ncpu: 1164.0433707053814 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1470.3305579128225,
            "unit": "ns/iter",
            "extra": "iterations: 470199\ncpu: 1470.332773995689 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 264.8768961407977,
            "unit": "ns/iter",
            "extra": "iterations: 3061943\ncpu: 258.78698591058037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1616.9306323945134,
            "unit": "ns/iter",
            "extra": "iterations: 357530\ncpu: 1593.5893491455213 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 130.19564156139458,
            "unit": "ns/iter",
            "extra": "iterations: 5930243\ncpu: 130.1187826535943 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 423.10575081483927,
            "unit": "ns/iter",
            "extra": "iterations: 1544442\ncpu: 417.9975680537052 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727281000823,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3566.3189773385775,
            "unit": "ns/iter",
            "extra": "iterations: 190327\ncpu: 3565.8787245109725 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 802.3417001781452,
            "unit": "ns/iter",
            "extra": "iterations: 921574\ncpu: 801.9475375824403 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 921.0919399393467,
            "unit": "ns/iter",
            "extra": "iterations: 776148\ncpu: 920.1634224400498 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 149.0178827275992,
            "unit": "ns/iter",
            "extra": "iterations: 4513014\ncpu: 149.01460531697887 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 109.37484557999073,
            "unit": "ns/iter",
            "extra": "iterations: 6640169\ncpu: 109.37086089224522 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2665.6654247478705,
            "unit": "ns/iter",
            "extra": "iterations: 263839\ncpu: 2665.4436986192313 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1318.4945836181844,
            "unit": "ns/iter",
            "extra": "iterations: 521012\ncpu: 1318.3093671546922 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1406.5213187455704,
            "unit": "ns/iter",
            "extra": "iterations: 492923\ncpu: 1406.2865802569581 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1091.5492530375595,
            "unit": "ns/iter",
            "extra": "iterations: 688455\ncpu: 1091.2870122230197 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1483.110135361869,
            "unit": "ns/iter",
            "extra": "iterations: 467561\ncpu: 1482.2942888735383 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 231.84637020393933,
            "unit": "ns/iter",
            "extra": "iterations: 3889213\ncpu: 231.79599574515439 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1420.924082235593,
            "unit": "ns/iter",
            "extra": "iterations: 491466\ncpu: 1420.6516829241498 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 115.34618358648167,
            "unit": "ns/iter",
            "extra": "iterations: 6035575\ncpu: 115.31312261052175 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 344.03856219000585,
            "unit": "ns/iter",
            "extra": "iterations: 2150604\ncpu: 343.9178016966385 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727282262643,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3543.7332490328076,
            "unit": "ns/iter",
            "extra": "iterations: 198496\ncpu: 3541.1796711268735 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 772.2681737834121,
            "unit": "ns/iter",
            "extra": "iterations: 918177\ncpu: 772.2160324207642 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 876.2579025337739,
            "unit": "ns/iter",
            "extra": "iterations: 803951\ncpu: 876.1703138624118 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 149.07062992644288,
            "unit": "ns/iter",
            "extra": "iterations: 4774605\ncpu: 149.0531677489551 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 105.00334529734033,
            "unit": "ns/iter",
            "extra": "iterations: 6703440\ncpu: 104.96506271406919 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2683.8567568400285,
            "unit": "ns/iter",
            "extra": "iterations: 259796\ncpu: 2683.3861953224837 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1309.6277102548465,
            "unit": "ns/iter",
            "extra": "iterations: 534221\ncpu: 1309.5947182907437 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1372.4119054922542,
            "unit": "ns/iter",
            "extra": "iterations: 511831\ncpu: 1372.25177841905 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1038.4992849245116,
            "unit": "ns/iter",
            "extra": "iterations: 684543\ncpu: 1038.4563131899697 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1406.752589131987,
            "unit": "ns/iter",
            "extra": "iterations: 495726\ncpu: 1406.6843377188222 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 180.9886527520154,
            "unit": "ns/iter",
            "extra": "iterations: 3864990\ncpu: 180.97588868276543 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1365.4459383362428,
            "unit": "ns/iter",
            "extra": "iterations: 514986\ncpu: 1365.0740020117094 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 110.030253374137,
            "unit": "ns/iter",
            "extra": "iterations: 6432109\ncpu: 110.00155625472117 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 321.89067051321445,
            "unit": "ns/iter",
            "extra": "iterations: 2185833\ncpu: 321.81735750169366 ns\nthreads: 1"
          }
        ]
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
        "date": 1727282764311,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3861.289599006422,
            "unit": "ns/iter",
            "extra": "iterations: 180377\ncpu: 3860.9246189924456 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 724.8649202828482,
            "unit": "ns/iter",
            "extra": "iterations: 916866\ncpu: 724.7645784662096 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 867.660432900121,
            "unit": "ns/iter",
            "extra": "iterations: 807484\ncpu: 867.6258600789614 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 152.16911273442184,
            "unit": "ns/iter",
            "extra": "iterations: 4719207\ncpu: 152.1353057833658 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 110.57535132120756,
            "unit": "ns/iter",
            "extra": "iterations: 6484664\ncpu: 110.4923863441498 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2597.2055291039615,
            "unit": "ns/iter",
            "extra": "iterations: 261272\ncpu: 2596.9870479806514 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1303.3092120518002,
            "unit": "ns/iter",
            "extra": "iterations: 487329\ncpu: 1303.2674025145222 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1351.2631508094478,
            "unit": "ns/iter",
            "extra": "iterations: 512554\ncpu: 1351.264452135775 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1032.4741030389769,
            "unit": "ns/iter",
            "extra": "iterations: 685119\ncpu: 1032.3505843510377 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1403.8946511852205,
            "unit": "ns/iter",
            "extra": "iterations: 498316\ncpu: 1398.9877908796807 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 180.84781569116058,
            "unit": "ns/iter",
            "extra": "iterations: 3684598\ncpu: 180.81375498765354 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1377.3715579869274,
            "unit": "ns/iter",
            "extra": "iterations: 509985\ncpu: 1377.2365853897631 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 110.23031043947759,
            "unit": "ns/iter",
            "extra": "iterations: 6285412\ncpu: 110.22061879157631 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 323.4288234453512,
            "unit": "ns/iter",
            "extra": "iterations: 2133645\ncpu: 323.42728054573314 ns\nthreads: 1"
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
          "id": "c2f5bfa08f944d54dd417d8a185b57f9d599224c",
          "message": "Revert \"Reduce a bit evaluation macros (#1229)\"\n\nThis reverts commit 8cfbb8c09a6a7fae4c69179cd2188bfef2638000.",
          "timestamp": "2024-09-25T16:39:35Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/c2f5bfa08f944d54dd417d8a185b57f9d599224c"
        },
        "date": 1727291182283,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3573.7897888531675,
            "unit": "ns/iter",
            "extra": "iterations: 195551\ncpu: 3560.7130620656517 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 714.5700648843036,
            "unit": "ns/iter",
            "extra": "iterations: 1000858\ncpu: 714.5369273163626 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 839.2598893239935,
            "unit": "ns/iter",
            "extra": "iterations: 838303\ncpu: 839.222810845244 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 144.99993867033942,
            "unit": "ns/iter",
            "extra": "iterations: 4810071\ncpu: 144.97020937944575 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 103.74936323940173,
            "unit": "ns/iter",
            "extra": "iterations: 6727018\ncpu: 103.74730675612882 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2462.643579132144,
            "unit": "ns/iter",
            "extra": "iterations: 283443\ncpu: 2462.1740526313947 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1248.5640395239625,
            "unit": "ns/iter",
            "extra": "iterations: 556828\ncpu: 1248.5219852449945 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1340.4118280581902,
            "unit": "ns/iter",
            "extra": "iterations: 519967\ncpu: 1340.161971817442 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 992.4103521052118,
            "unit": "ns/iter",
            "extra": "iterations: 709788\ncpu: 992.344192913941 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1379.092322131876,
            "unit": "ns/iter",
            "extra": "iterations: 518868\ncpu: 1379.0251085054347 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 178.41322477664028,
            "unit": "ns/iter",
            "extra": "iterations: 3960082\ncpu: 177.96348661467127 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1434.5629095131815,
            "unit": "ns/iter",
            "extra": "iterations: 482280\ncpu: 1417.890022393628 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 110.49578450250651,
            "unit": "ns/iter",
            "extra": "iterations: 6471834\ncpu: 110.49340882352665 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 333.4037243667488,
            "unit": "ns/iter",
            "extra": "iterations: 2098397\ncpu: 333.3763820668822 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727295616495,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3560.3348722578135,
            "unit": "ns/iter",
            "extra": "iterations: 195158\ncpu: 3560.100021521025 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 710.9835058354056,
            "unit": "ns/iter",
            "extra": "iterations: 996413\ncpu: 710.6591343147871 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 842.939353484982,
            "unit": "ns/iter",
            "extra": "iterations: 825472\ncpu: 842.8547546131186 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 144.39766535984066,
            "unit": "ns/iter",
            "extra": "iterations: 4834321\ncpu: 144.39545905205716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 104.22857840408426,
            "unit": "ns/iter",
            "extra": "iterations: 6729669\ncpu: 104.2018559902426 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2477.2432740243885,
            "unit": "ns/iter",
            "extra": "iterations: 279216\ncpu: 2476.935419173687 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1275.6592285673614,
            "unit": "ns/iter",
            "extra": "iterations: 553412\ncpu: 1275.5361285985853 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1350.9975547512306,
            "unit": "ns/iter",
            "extra": "iterations: 505879\ncpu: 1350.9317445476077 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1010.1410196232782,
            "unit": "ns/iter",
            "extra": "iterations: 703044\ncpu: 1010.0875620871504 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1395.8758380064344,
            "unit": "ns/iter",
            "extra": "iterations: 510736\ncpu: 1395.8718398546425 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 178.28021612986907,
            "unit": "ns/iter",
            "extra": "iterations: 3939113\ncpu: 178.26881330898556 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1316.6317958913837,
            "unit": "ns/iter",
            "extra": "iterations: 528150\ncpu: 1316.6335321404906 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 108.60201492435505,
            "unit": "ns/iter",
            "extra": "iterations: 6464064\ncpu: 108.58323803724709 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 318.90458775132237,
            "unit": "ns/iter",
            "extra": "iterations: 2181984\ncpu: 318.85201724668894 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727297408758,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3823.5556728431898,
            "unit": "ns/iter",
            "extra": "iterations: 182836\ncpu: 3822.8849898269486 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 774.5648634957224,
            "unit": "ns/iter",
            "extra": "iterations: 900044\ncpu: 774.5354671549389 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 931.3682320863586,
            "unit": "ns/iter",
            "extra": "iterations: 767611\ncpu: 930.9663358133228 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 152.6206436198345,
            "unit": "ns/iter",
            "extra": "iterations: 4772196\ncpu: 152.57755549017688 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 117.03825985931539,
            "unit": "ns/iter",
            "extra": "iterations: 6343855\ncpu: 116.33730594409862 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2926.931771092856,
            "unit": "ns/iter",
            "extra": "iterations: 214777\ncpu: 2926.4027339985137 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1460.1293894902171,
            "unit": "ns/iter",
            "extra": "iterations: 490148\ncpu: 1459.7284901703156 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1466.5095899986486,
            "unit": "ns/iter",
            "extra": "iterations: 477633\ncpu: 1466.0502938448594 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1144.2108797862713,
            "unit": "ns/iter",
            "extra": "iterations: 613615\ncpu: 1143.8133031298141 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1494.0981939382639,
            "unit": "ns/iter",
            "extra": "iterations: 462055\ncpu: 1493.9844823668182 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 211.7401731554703,
            "unit": "ns/iter",
            "extra": "iterations: 3334921\ncpu: 211.262575635225 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1928.2147118267203,
            "unit": "ns/iter",
            "extra": "iterations: 410690\ncpu: 1881.3387226375148 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 122.78369238636996,
            "unit": "ns/iter",
            "extra": "iterations: 5387226\ncpu: 121.75375601469077 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 383.46099471481006,
            "unit": "ns/iter",
            "extra": "iterations: 1805422\ncpu: 383.33641663832685 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727299195596,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3526.6235660723355,
            "unit": "ns/iter",
            "extra": "iterations: 198319\ncpu: 3526.34392065309 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 721.3536848281766,
            "unit": "ns/iter",
            "extra": "iterations: 978241\ncpu: 721.3161173984732 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 876.474280672322,
            "unit": "ns/iter",
            "extra": "iterations: 723036\ncpu: 875.8111629296463 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 147.19268013403274,
            "unit": "ns/iter",
            "extra": "iterations: 4746535\ncpu: 147.1863159125553 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 105.06676915914738,
            "unit": "ns/iter",
            "extra": "iterations: 6642438\ncpu: 105.06564005565404 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2740.9238525501737,
            "unit": "ns/iter",
            "extra": "iterations: 253889\ncpu: 2740.6780128323817 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1341.630173929239,
            "unit": "ns/iter",
            "extra": "iterations: 512449\ncpu: 1341.5481345460719 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1368.0249813894955,
            "unit": "ns/iter",
            "extra": "iterations: 517185\ncpu: 1367.85482950975 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1042.5594609808604,
            "unit": "ns/iter",
            "extra": "iterations: 682128\ncpu: 1042.4524429432597 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1420.3198217407441,
            "unit": "ns/iter",
            "extra": "iterations: 508921\ncpu: 1420.1595139520643 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 190.64793571689032,
            "unit": "ns/iter",
            "extra": "iterations: 3625835\ncpu: 190.6435345237715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1352.0692044428743,
            "unit": "ns/iter",
            "extra": "iterations: 523897\ncpu: 1351.9584956584984 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 110.40730399456515,
            "unit": "ns/iter",
            "extra": "iterations: 6452743\ncpu: 110.40467596493428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 353.0647583002183,
            "unit": "ns/iter",
            "extra": "iterations: 1929853\ncpu: 353.07196973033666 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727300134357,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3757.0412474095842,
            "unit": "ns/iter",
            "extra": "iterations: 187236\ncpu: 3756.8469738725457 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 770.6724144108744,
            "unit": "ns/iter",
            "extra": "iterations: 920883\ncpu: 770.499618301131 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 912.9844790598161,
            "unit": "ns/iter",
            "extra": "iterations: 695963\ncpu: 912.9249687124176 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 153.833140539295,
            "unit": "ns/iter",
            "extra": "iterations: 4618054\ncpu: 153.788370599391 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 109.86505549949719,
            "unit": "ns/iter",
            "extra": "iterations: 6495374\ncpu: 109.80337698799173 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2867.074048319853,
            "unit": "ns/iter",
            "extra": "iterations: 247352\ncpu: 2866.433261101586 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1381.5174005545205,
            "unit": "ns/iter",
            "extra": "iterations: 512340\ncpu: 1381.3268532615068 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1446.6845566452168,
            "unit": "ns/iter",
            "extra": "iterations: 488728\ncpu: 1446.334157240842 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1121.0761207502146,
            "unit": "ns/iter",
            "extra": "iterations: 598260\ncpu: 1114.6675358539778 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1484.7693485454151,
            "unit": "ns/iter",
            "extra": "iterations: 478744\ncpu: 1482.383069030632 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 203.8511242648342,
            "unit": "ns/iter",
            "extra": "iterations: 3437135\ncpu: 203.84448094124932 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1422.4088826942652,
            "unit": "ns/iter",
            "extra": "iterations: 500794\ncpu: 1422.3592934420128 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 116.68390776305314,
            "unit": "ns/iter",
            "extra": "iterations: 6033027\ncpu: 116.67443225432288 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 369.2173591252791,
            "unit": "ns/iter",
            "extra": "iterations: 1883482\ncpu: 369.0998905219162 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727301046512,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3489.5857960535463,
            "unit": "ns/iter",
            "extra": "iterations: 190609\ncpu: 3489.4155050391114 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 735.1323535803888,
            "unit": "ns/iter",
            "extra": "iterations: 943231\ncpu: 734.8146954457602 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 883.9919818090104,
            "unit": "ns/iter",
            "extra": "iterations: 779727\ncpu: 883.8298532691566 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 151.80674128160535,
            "unit": "ns/iter",
            "extra": "iterations: 4680208\ncpu: 151.78128835299626 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 113.67075504181089,
            "unit": "ns/iter",
            "extra": "iterations: 6409963\ncpu: 111.5374612926783 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2773.7519264619973,
            "unit": "ns/iter",
            "extra": "iterations: 252276\ncpu: 2773.395011812459 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1345.2581634756114,
            "unit": "ns/iter",
            "extra": "iterations: 503952\ncpu: 1345.0388132203047 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1355.294908138015,
            "unit": "ns/iter",
            "extra": "iterations: 522088\ncpu: 1355.179586583105 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1030.463572149498,
            "unit": "ns/iter",
            "extra": "iterations: 673880\ncpu: 1030.4356858787892 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1368.834402313916,
            "unit": "ns/iter",
            "extra": "iterations: 505466\ncpu: 1368.7389458440325 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 195.5014453030865,
            "unit": "ns/iter",
            "extra": "iterations: 3546315\ncpu: 195.4541545237803 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1352.8218666219811,
            "unit": "ns/iter",
            "extra": "iterations: 514373\ncpu: 1352.6370940931968 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 111.97804169604414,
            "unit": "ns/iter",
            "extra": "iterations: 6229033\ncpu: 111.94337869136365 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 353.7605974415872,
            "unit": "ns/iter",
            "extra": "iterations: 1957949\ncpu: 353.75129791429697 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727366543418,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3961.428588034939,
            "unit": "ns/iter",
            "extra": "iterations: 172051\ncpu: 3959.0760879041695 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 928.1835570135519,
            "unit": "ns/iter",
            "extra": "iterations: 782814\ncpu: 927.4936319483302 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1018.0526032851608,
            "unit": "ns/iter",
            "extra": "iterations: 738490\ncpu: 1017.7253585018079 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 171.2327285111408,
            "unit": "ns/iter",
            "extra": "iterations: 4263457\ncpu: 170.87917152676786 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 126.04760835144606,
            "unit": "ns/iter",
            "extra": "iterations: 5863236\ncpu: 126.0442185850952 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3208.013647070108,
            "unit": "ns/iter",
            "extra": "iterations: 214405\ncpu: 3207.2339730883145 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1537.8676973763372,
            "unit": "ns/iter",
            "extra": "iterations: 425532\ncpu: 1537.8772924245443 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1524.5054948707264,
            "unit": "ns/iter",
            "extra": "iterations: 481358\ncpu: 1523.2633507701105 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1169.1798901298187,
            "unit": "ns/iter",
            "extra": "iterations: 620551\ncpu: 1168.9627443997347 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1515.3260905201146,
            "unit": "ns/iter",
            "extra": "iterations: 475828\ncpu: 1514.4947333910616 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 219.12683421834225,
            "unit": "ns/iter",
            "extra": "iterations: 2813460\ncpu: 219.07437816780788 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1612.4186752367627,
            "unit": "ns/iter",
            "extra": "iterations: 464551\ncpu: 1612.096411373559 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 140.71025349201653,
            "unit": "ns/iter",
            "extra": "iterations: 4825556\ncpu: 140.5386239430233 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 427.817444709416,
            "unit": "ns/iter",
            "extra": "iterations: 1224440\ncpu: 427.78249648819093 ns\nthreads: 1"
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
        "date": 1727368381755,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3594.033464773373,
            "unit": "ns/iter",
            "extra": "iterations: 200091\ncpu: 3593.2950507519085 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 772.8594344651027,
            "unit": "ns/iter",
            "extra": "iterations: 919130\ncpu: 772.558832809287 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 948.8651336387298,
            "unit": "ns/iter",
            "extra": "iterations: 766544\ncpu: 948.7583230708213 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 160.51392307653,
            "unit": "ns/iter",
            "extra": "iterations: 4270141\ncpu: 160.1516202860746 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 116.9310476487059,
            "unit": "ns/iter",
            "extra": "iterations: 6319857\ncpu: 115.57286818356808 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3172.0324005893135,
            "unit": "ns/iter",
            "extra": "iterations: 220675\ncpu: 3169.1627959669186 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1534.503270071023,
            "unit": "ns/iter",
            "extra": "iterations: 464363\ncpu: 1534.4245773242058 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1564.8320037175945,
            "unit": "ns/iter",
            "extra": "iterations: 434712\ncpu: 1564.4288632473906 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1152.9857807092515,
            "unit": "ns/iter",
            "extra": "iterations: 573376\ncpu: 1152.6642203370902 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1543.2634484388532,
            "unit": "ns/iter",
            "extra": "iterations: 456856\ncpu: 1537.7274239585336 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 244.5329492721291,
            "unit": "ns/iter",
            "extra": "iterations: 3107838\ncpu: 235.0109626048724 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1607.7740692180375,
            "unit": "ns/iter",
            "extra": "iterations: 416424\ncpu: 1601.8289051543622 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 127.3828822374229,
            "unit": "ns/iter",
            "extra": "iterations: 5603945\ncpu: 126.99678530035519 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 576.252250780699,
            "unit": "ns/iter",
            "extra": "iterations: 1463159\ncpu: 559.2939660009612 ns\nthreads: 1"
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
        "date": 1727377606426,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3588.702253855464,
            "unit": "ns/iter",
            "extra": "iterations: 197262\ncpu: 3586.767851892406 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 742.7561519274577,
            "unit": "ns/iter",
            "extra": "iterations: 916542\ncpu: 742.7046441952469 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 887.2062272173484,
            "unit": "ns/iter",
            "extra": "iterations: 744538\ncpu: 887.1179174199299 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 156.79480498040874,
            "unit": "ns/iter",
            "extra": "iterations: 4688452\ncpu: 156.79247649330725 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 105.42911996987188,
            "unit": "ns/iter",
            "extra": "iterations: 6509993\ncpu: 105.42883840274477 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2789.8234784935867,
            "unit": "ns/iter",
            "extra": "iterations: 242605\ncpu: 2788.932627109911 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1528.9771821972315,
            "unit": "ns/iter",
            "extra": "iterations: 515650\ncpu: 1503.4907398429164 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1440.0133922106086,
            "unit": "ns/iter",
            "extra": "iterations: 469452\ncpu: 1435.2883787905894 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1160.6655408378335,
            "unit": "ns/iter",
            "extra": "iterations: 602519\ncpu: 1160.1078140274426 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1519.7769649179022,
            "unit": "ns/iter",
            "extra": "iterations: 473773\ncpu: 1519.6792556772953 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 195.64000334558952,
            "unit": "ns/iter",
            "extra": "iterations: 3443357\ncpu: 195.60504472815353 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1374.6767786450955,
            "unit": "ns/iter",
            "extra": "iterations: 512033\ncpu: 1374.4524278708611 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 107.81085067419181,
            "unit": "ns/iter",
            "extra": "iterations: 6595498\ncpu: 107.74789106144833 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 362.0909745391456,
            "unit": "ns/iter",
            "extra": "iterations: 1959911\ncpu: 362.059807817803 ns\nthreads: 1"
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
        "date": 1727464095934,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3654.3786111985364,
            "unit": "ns/iter",
            "extra": "iterations: 197926\ncpu: 3652.895526610956 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 740.2455164612068,
            "unit": "ns/iter",
            "extra": "iterations: 959956\ncpu: 740.239135960398 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 983.8998563367286,
            "unit": "ns/iter",
            "extra": "iterations: 789346\ncpu: 953.5159486460946 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 151.6264334017884,
            "unit": "ns/iter",
            "extra": "iterations: 4599635\ncpu: 151.5818102958171 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 106.19683798531072,
            "unit": "ns/iter",
            "extra": "iterations: 6708065\ncpu: 106.09766005547056 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2875.984606070872,
            "unit": "ns/iter",
            "extra": "iterations: 251073\ncpu: 2875.582002047215 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1401.5485797008353,
            "unit": "ns/iter",
            "extra": "iterations: 488383\ncpu: 1401.5229850342862 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1417.528777756937,
            "unit": "ns/iter",
            "extra": "iterations: 499066\ncpu: 1417.3355828687988 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1082.4880766496776,
            "unit": "ns/iter",
            "extra": "iterations: 639795\ncpu: 1080.5132894130154 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1490.6860997863942,
            "unit": "ns/iter",
            "extra": "iterations: 467518\ncpu: 1490.6656000410687 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 211.3841088813217,
            "unit": "ns/iter",
            "extra": "iterations: 3282840\ncpu: 211.23112914427767 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1469.7194924584737,
            "unit": "ns/iter",
            "extra": "iterations: 486896\ncpu: 1469.1823305182218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 113.65030829078074,
            "unit": "ns/iter",
            "extra": "iterations: 6364446\ncpu: 113.61460211933601 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 376.1828068749558,
            "unit": "ns/iter",
            "extra": "iterations: 1853043\ncpu: 376.14129839404796 ns\nthreads: 1"
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
        "date": 1727704802076,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3704.008541680178,
            "unit": "ns/iter",
            "extra": "iterations: 187668\ncpu: 3703.987893514078 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 739.3003633331313,
            "unit": "ns/iter",
            "extra": "iterations: 930826\ncpu: 739.2702825232643 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 921.9820225177199,
            "unit": "ns/iter",
            "extra": "iterations: 784982\ncpu: 921.8822851988973 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 153.03307004639592,
            "unit": "ns/iter",
            "extra": "iterations: 4512694\ncpu: 153.0183522303972 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 105.1940017128995,
            "unit": "ns/iter",
            "extra": "iterations: 6440572\ncpu: 105.18568847611691 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2793.1007152767725,
            "unit": "ns/iter",
            "extra": "iterations: 248016\ncpu: 2792.9246500225822 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1356.2367392231379,
            "unit": "ns/iter",
            "extra": "iterations: 525384\ncpu: 1356.175673412208 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1391.528665869136,
            "unit": "ns/iter",
            "extra": "iterations: 502357\ncpu: 1391.375057976699 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1033.8832248308818,
            "unit": "ns/iter",
            "extra": "iterations: 679862\ncpu: 1033.2670453709727 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1432.4662622804904,
            "unit": "ns/iter",
            "extra": "iterations: 498863\ncpu: 1432.2609614262824 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 202.69332473153452,
            "unit": "ns/iter",
            "extra": "iterations: 3425630\ncpu: 202.67512837054855 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1424.0454072151522,
            "unit": "ns/iter",
            "extra": "iterations: 494591\ncpu: 1423.984666118066 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 113.67780019136414,
            "unit": "ns/iter",
            "extra": "iterations: 6422195\ncpu: 113.23838656409542 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 387.7328175251423,
            "unit": "ns/iter",
            "extra": "iterations: 1878993\ncpu: 387.5937802855043 ns\nthreads: 1"
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
        "date": 1727706033066,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3500.808998718317,
            "unit": "ns/iter",
            "extra": "iterations: 199784\ncpu: 3500.730789252393 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 728.9239742138504,
            "unit": "ns/iter",
            "extra": "iterations: 967185\ncpu: 728.8688306787217 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 883.4475364404271,
            "unit": "ns/iter",
            "extra": "iterations: 775443\ncpu: 883.425345254261 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 152.54975377588744,
            "unit": "ns/iter",
            "extra": "iterations: 4666480\ncpu: 152.5342442269119 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 103.77265457916478,
            "unit": "ns/iter",
            "extra": "iterations: 6803779\ncpu: 103.76160072218687 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2822.7183850516494,
            "unit": "ns/iter",
            "extra": "iterations: 251748\ncpu: 2822.5527114415963 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1345.0891635129758,
            "unit": "ns/iter",
            "extra": "iterations: 522411\ncpu: 1344.818543254258 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1351.6450543203148,
            "unit": "ns/iter",
            "extra": "iterations: 520798\ncpu: 1351.4241606150547 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1026.8264604836131,
            "unit": "ns/iter",
            "extra": "iterations: 683147\ncpu: 1026.8097495853738 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1393.5156608657205,
            "unit": "ns/iter",
            "extra": "iterations: 503612\ncpu: 1393.2729958777804 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 195.24210471441293,
            "unit": "ns/iter",
            "extra": "iterations: 3567952\ncpu: 195.23468925590933 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1358.9156993380407,
            "unit": "ns/iter",
            "extra": "iterations: 511977\ncpu: 1358.9145606150253 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 104.92161810099302,
            "unit": "ns/iter",
            "extra": "iterations: 6661908\ncpu: 104.91438789007604 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 370.180063754524,
            "unit": "ns/iter",
            "extra": "iterations: 1996093\ncpu: 370.07644433400634 ns\nthreads: 1"
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
        "date": 1727723320056,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4028.1200708369506,
            "unit": "ns/iter",
            "extra": "iterations: 175613\ncpu: 4023.5517871683746 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 856.9254415548892,
            "unit": "ns/iter",
            "extra": "iterations: 873221\ncpu: 856.4590178202311 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1010.4845017627669,
            "unit": "ns/iter",
            "extra": "iterations: 650945\ncpu: 1010.1882647535512 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 160.8015878002199,
            "unit": "ns/iter",
            "extra": "iterations: 4122181\ncpu: 160.79861607241395 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 117.32262327330695,
            "unit": "ns/iter",
            "extra": "iterations: 6004666\ncpu: 117.16438516313818 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3001.3482396090176,
            "unit": "ns/iter",
            "extra": "iterations: 216486\ncpu: 2999.3255914932147 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1475.296552429836,
            "unit": "ns/iter",
            "extra": "iterations: 459251\ncpu: 1474.6968433383938 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1386.617900359441,
            "unit": "ns/iter",
            "extra": "iterations: 495923\ncpu: 1386.3543332331815 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1293.2046498714237,
            "unit": "ns/iter",
            "extra": "iterations: 637523\ncpu: 1293.0560936625038 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1550.682015770564,
            "unit": "ns/iter",
            "extra": "iterations: 427886\ncpu: 1550.1839274947063 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 208.63366628768046,
            "unit": "ns/iter",
            "extra": "iterations: 3284134\ncpu: 208.61054999582848 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1507.104783076482,
            "unit": "ns/iter",
            "extra": "iterations: 505616\ncpu: 1505.2055314705196 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 113.32878828276871,
            "unit": "ns/iter",
            "extra": "iterations: 6173602\ncpu: 113.31877241195672 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 361.97586606486493,
            "unit": "ns/iter",
            "extra": "iterations: 1914897\ncpu: 361.95471610222296 ns\nthreads: 1"
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
        "date": 1727809619213,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3684.5369039807333,
            "unit": "ns/iter",
            "extra": "iterations: 193597\ncpu: 3670.418446566837 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 748.882856424702,
            "unit": "ns/iter",
            "extra": "iterations: 966677\ncpu: 748.4982057088354 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 900.5444034630441,
            "unit": "ns/iter",
            "extra": "iterations: 800906\ncpu: 900.5214095037368 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 154.2558772974125,
            "unit": "ns/iter",
            "extra": "iterations: 4595437\ncpu: 154.2136253853553 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 103.71036282182565,
            "unit": "ns/iter",
            "extra": "iterations: 6663050\ncpu: 103.66693931457823 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2848.278538152141,
            "unit": "ns/iter",
            "extra": "iterations: 248781\ncpu: 2848.006881554462 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1355.106571260748,
            "unit": "ns/iter",
            "extra": "iterations: 515411\ncpu: 1354.831386990188 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1415.9475107847948,
            "unit": "ns/iter",
            "extra": "iterations: 487262\ncpu: 1415.739376351945 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1051.2692977553963,
            "unit": "ns/iter",
            "extra": "iterations: 671205\ncpu: 1051.075304862148 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1468.290497250477,
            "unit": "ns/iter",
            "extra": "iterations: 499929\ncpu: 1468.0144580530466 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 208.2903592982363,
            "unit": "ns/iter",
            "extra": "iterations: 3349891\ncpu: 208.28438895474457 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1393.202028697351,
            "unit": "ns/iter",
            "extra": "iterations: 468478\ncpu: 1392.697202429996 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 107.98670512294152,
            "unit": "ns/iter",
            "extra": "iterations: 6562603\ncpu: 107.92805842437835 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 364.616461437218,
            "unit": "ns/iter",
            "extra": "iterations: 1946683\ncpu: 364.5601261222286 ns\nthreads: 1"
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
        "date": 1727809937540,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3795.101832146718,
            "unit": "ns/iter",
            "extra": "iterations: 182791\ncpu: 3793.8082290703596 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 786.083912042674,
            "unit": "ns/iter",
            "extra": "iterations: 899847\ncpu: 785.457972299735 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 995.5874175490018,
            "unit": "ns/iter",
            "extra": "iterations: 737106\ncpu: 995.4877588840681 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 162.24599622770234,
            "unit": "ns/iter",
            "extra": "iterations: 4318802\ncpu: 162.20123080428328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 111.90707386214117,
            "unit": "ns/iter",
            "extra": "iterations: 6272401\ncpu: 111.88713859333939 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2957.1760335887952,
            "unit": "ns/iter",
            "extra": "iterations: 236506\ncpu: 2957.1596492266567 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1446.597812006554,
            "unit": "ns/iter",
            "extra": "iterations: 464718\ncpu: 1446.1996307438048 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1485.7371128289312,
            "unit": "ns/iter",
            "extra": "iterations: 485444\ncpu: 1485.227956262721 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1112.306299953534,
            "unit": "ns/iter",
            "extra": "iterations: 626830\ncpu: 1111.6921653398852 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1490.8545407270763,
            "unit": "ns/iter",
            "extra": "iterations: 476917\ncpu: 1490.3578610114553 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 210.38125978316174,
            "unit": "ns/iter",
            "extra": "iterations: 3336098\ncpu: 210.31036858029935 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1443.4397015897998,
            "unit": "ns/iter",
            "extra": "iterations: 480278\ncpu: 1443.3807086728914 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 113.93321087757525,
            "unit": "ns/iter",
            "extra": "iterations: 6170391\ncpu: 113.92665391869022 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 376.75669030477934,
            "unit": "ns/iter",
            "extra": "iterations: 1854624\ncpu: 376.70762375554284 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727814023516,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3690.4987248632324,
            "unit": "ns/iter",
            "extra": "iterations: 187823\ncpu: 3689.8569397784077 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 763.4768330463047,
            "unit": "ns/iter",
            "extra": "iterations: 906701\ncpu: 763.2427889679176 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 982.8398250343956,
            "unit": "ns/iter",
            "extra": "iterations: 716941\ncpu: 982.8312232108357 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 156.7363332186894,
            "unit": "ns/iter",
            "extra": "iterations: 4303720\ncpu: 156.72859758534491 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 107.92879055017615,
            "unit": "ns/iter",
            "extra": "iterations: 6559958\ncpu: 107.92828246766202 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2897.6116564367203,
            "unit": "ns/iter",
            "extra": "iterations: 244706\ncpu: 2897.1950013485584 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1486.7753395800996,
            "unit": "ns/iter",
            "extra": "iterations: 503195\ncpu: 1486.2270094098699 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1424.2620783577852,
            "unit": "ns/iter",
            "extra": "iterations: 494169\ncpu: 1423.2074452262307 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1071.8047051903334,
            "unit": "ns/iter",
            "extra": "iterations: 656254\ncpu: 1071.7938481136882 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1448.536731599565,
            "unit": "ns/iter",
            "extra": "iterations: 474850\ncpu: 1448.5269032326023 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 204.3644101503889,
            "unit": "ns/iter",
            "extra": "iterations: 3404156\ncpu: 204.33611150605304 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1449.747045860513,
            "unit": "ns/iter",
            "extra": "iterations: 498707\ncpu: 1449.600667325703 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 110.59571519296699,
            "unit": "ns/iter",
            "extra": "iterations: 6270154\ncpu: 110.57591248954958 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 369.61684168766595,
            "unit": "ns/iter",
            "extra": "iterations: 1915960\ncpu: 369.5708678678053 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727819012060,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3527.2045063345668,
            "unit": "ns/iter",
            "extra": "iterations: 199852\ncpu: 3527.080039229029 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 810.475138440612,
            "unit": "ns/iter",
            "extra": "iterations: 882869\ncpu: 810.4713156765046 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 940.0162644088446,
            "unit": "ns/iter",
            "extra": "iterations: 735225\ncpu: 939.9843585297031 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 168.7666255470425,
            "unit": "ns/iter",
            "extra": "iterations: 4238853\ncpu: 168.7489516621594 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 109.18810865448393,
            "unit": "ns/iter",
            "extra": "iterations: 6491881\ncpu: 109.17898833943514 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2891.269028163055,
            "unit": "ns/iter",
            "extra": "iterations: 244506\ncpu: 2890.9720006870994 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1475.6059810260906,
            "unit": "ns/iter",
            "extra": "iterations: 470655\ncpu: 1475.3758060575171 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1478.5432423736165,
            "unit": "ns/iter",
            "extra": "iterations: 481715\ncpu: 1478.480014116231 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1104.0526685875734,
            "unit": "ns/iter",
            "extra": "iterations: 638540\ncpu: 1103.9574654681 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1492.2249909247596,
            "unit": "ns/iter",
            "extra": "iterations: 468290\ncpu: 1492.0732879198772 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 201.12596057811382,
            "unit": "ns/iter",
            "extra": "iterations: 3505311\ncpu: 201.11139924531648 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1478.226857107034,
            "unit": "ns/iter",
            "extra": "iterations: 477490\ncpu: 1478.2173448658598 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 111.35007590294414,
            "unit": "ns/iter",
            "extra": "iterations: 6313985\ncpu: 111.33523440426285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 359.479776018197,
            "unit": "ns/iter",
            "extra": "iterations: 1958195\ncpu: 359.4774779835513 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727887564168,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3554.7717738673273,
            "unit": "ns/iter",
            "extra": "iterations: 197760\ncpu: 3554.647046925567 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 724.5908746408601,
            "unit": "ns/iter",
            "extra": "iterations: 961869\ncpu: 724.5466898299035 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 916.8433376309688,
            "unit": "ns/iter",
            "extra": "iterations: 736067\ncpu: 916.8092035100066 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 149.36214891658904,
            "unit": "ns/iter",
            "extra": "iterations: 4664490\ncpu: 149.36145216304465 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 102.5714185379632,
            "unit": "ns/iter",
            "extra": "iterations: 6834269\ncpu: 102.5638586950557 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2785.9782256864164,
            "unit": "ns/iter",
            "extra": "iterations: 254566\ncpu: 2785.548737851871 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1358.072701079766,
            "unit": "ns/iter",
            "extra": "iterations: 490763\ncpu: 1358.032288497706 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1530.011997075478,
            "unit": "ns/iter",
            "extra": "iterations: 485535\ncpu: 1512.0990247870902 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1119.1734285315415,
            "unit": "ns/iter",
            "extra": "iterations: 595669\ncpu: 1116.7527603417332 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1443.7739351247287,
            "unit": "ns/iter",
            "extra": "iterations: 485949\ncpu: 1442.9991624635504 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 194.60784935165063,
            "unit": "ns/iter",
            "extra": "iterations: 3600119\ncpu: 194.57579041137186 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1363.3518660387588,
            "unit": "ns/iter",
            "extra": "iterations: 523435\ncpu: 1362.937136416178 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 105.23590799376525,
            "unit": "ns/iter",
            "extra": "iterations: 6691329\ncpu: 105.20809842110586 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 354.620807744762,
            "unit": "ns/iter",
            "extra": "iterations: 1954974\ncpu: 354.57760563567575 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2999993125.00006,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2999438999.999999 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727895401874,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3518.2873453279412,
            "unit": "ns/iter",
            "extra": "iterations: 198646\ncpu: 3518.1982018263657 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 724.3092845224718,
            "unit": "ns/iter",
            "extra": "iterations: 970443\ncpu: 724.2867432708565 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 914.3895041599973,
            "unit": "ns/iter",
            "extra": "iterations: 770934\ncpu: 914.3830729997637 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 149.63049986293115,
            "unit": "ns/iter",
            "extra": "iterations: 4690526\ncpu: 149.54804642379142 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 104.33548518543546,
            "unit": "ns/iter",
            "extra": "iterations: 6743803\ncpu: 104.28893014816715 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2805.491417736984,
            "unit": "ns/iter",
            "extra": "iterations: 249468\ncpu: 2774.8328442926536 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1341.8637591890304,
            "unit": "ns/iter",
            "extra": "iterations: 516255\ncpu: 1341.7477796825226 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1358.6191321760164,
            "unit": "ns/iter",
            "extra": "iterations: 516418\ncpu: 1358.575804871246 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1035.9565097257532,
            "unit": "ns/iter",
            "extra": "iterations: 684015\ncpu: 1035.9158790377403 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1378.2583791793634,
            "unit": "ns/iter",
            "extra": "iterations: 510223\ncpu: 1377.866148723204 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 195.74944421061704,
            "unit": "ns/iter",
            "extra": "iterations: 3585441\ncpu: 195.73045547256234 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1350.6699603153654,
            "unit": "ns/iter",
            "extra": "iterations: 521610\ncpu: 1349.5849389390523 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 104.70721936504869,
            "unit": "ns/iter",
            "extra": "iterations: 6689411\ncpu: 104.70264123403403 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 351.1867134954788,
            "unit": "ns/iter",
            "extra": "iterations: 1993075\ncpu: 351.15989112301327 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2947617083.000068,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2947410000.0000014 ns\nthreads: 1"
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
        "date": 1727896011523,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3598.16010870071,
            "unit": "ns/iter",
            "extra": "iterations: 195030\ncpu: 3584.52033020561 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 725.7964520968503,
            "unit": "ns/iter",
            "extra": "iterations: 970376\ncpu: 725.7279652423388 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 920.2093601358245,
            "unit": "ns/iter",
            "extra": "iterations: 743408\ncpu: 920.119234659838 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 158.2224834761971,
            "unit": "ns/iter",
            "extra": "iterations: 4568564\ncpu: 158.2225837265277 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 104.28554979387253,
            "unit": "ns/iter",
            "extra": "iterations: 6492724\ncpu: 104.2819623935963 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2820.3411372938385,
            "unit": "ns/iter",
            "extra": "iterations: 255554\ncpu: 2814.7084373557063 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1337.8142674701146,
            "unit": "ns/iter",
            "extra": "iterations: 528545\ncpu: 1337.2655119242436 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1357.5551604147738,
            "unit": "ns/iter",
            "extra": "iterations: 523020\ncpu: 1357.4356621161708 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1039.3326465424086,
            "unit": "ns/iter",
            "extra": "iterations: 670267\ncpu: 1039.3335790065723 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1409.50094794033,
            "unit": "ns/iter",
            "extra": "iterations: 507416\ncpu: 1409.3859870402223 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 194.06473706159113,
            "unit": "ns/iter",
            "extra": "iterations: 3544214\ncpu: 194.05741301174282 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1370.0370389273146,
            "unit": "ns/iter",
            "extra": "iterations: 509491\ncpu: 1369.541365794491 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 106.46791569576725,
            "unit": "ns/iter",
            "extra": "iterations: 6660640\ncpu: 106.45523553292163 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 354.3828515304101,
            "unit": "ns/iter",
            "extra": "iterations: 1952804\ncpu: 354.37913892024 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2971651750.000092,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2971406000.000002 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727903775204,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3650.1908374877567,
            "unit": "ns/iter",
            "extra": "iterations: 186761\ncpu: 3649.402177114066 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 742.9521585962246,
            "unit": "ns/iter",
            "extra": "iterations: 962848\ncpu: 742.1742580344982 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 974.8340744551779,
            "unit": "ns/iter",
            "extra": "iterations: 699615\ncpu: 974.4916847123068 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 152.39782949037271,
            "unit": "ns/iter",
            "extra": "iterations: 4430941\ncpu: 152.37959611739336 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 109.36880678544718,
            "unit": "ns/iter",
            "extra": "iterations: 6706715\ncpu: 109.36263133292523 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2866.103019822656,
            "unit": "ns/iter",
            "extra": "iterations: 243458\ncpu: 2865.5538121565155 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1391.2929243905376,
            "unit": "ns/iter",
            "extra": "iterations: 523333\ncpu: 1390.9480197121138 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1384.8806016485516,
            "unit": "ns/iter",
            "extra": "iterations: 508935\ncpu: 1384.8173145883065 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1050.1475351738943,
            "unit": "ns/iter",
            "extra": "iterations: 660290\ncpu: 1050.1325175301777 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1418.5740983791277,
            "unit": "ns/iter",
            "extra": "iterations: 480773\ncpu: 1418.3679199955104 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 198.0193409427823,
            "unit": "ns/iter",
            "extra": "iterations: 3532713\ncpu: 198.01778406567436 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1377.4712459435038,
            "unit": "ns/iter",
            "extra": "iterations: 507824\ncpu: 1377.3748385267315 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 107.03523652094067,
            "unit": "ns/iter",
            "extra": "iterations: 6237080\ncpu: 107.02828887877011 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 361.84044901415194,
            "unit": "ns/iter",
            "extra": "iterations: 1960740\ncpu: 361.6930342625738 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3107661416.9999175,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3104780999.999997 ns\nthreads: 1"
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
        "date": 1727965195373,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3919.036269464047,
            "unit": "ns/iter",
            "extra": "iterations: 153876\ncpu: 3911.4286828355284 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 807.9996700738668,
            "unit": "ns/iter",
            "extra": "iterations: 851706\ncpu: 807.8914555022506 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 979.5689293625983,
            "unit": "ns/iter",
            "extra": "iterations: 692905\ncpu: 979.5498661432658 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 158.4628543856761,
            "unit": "ns/iter",
            "extra": "iterations: 4445545\ncpu: 158.42084603799998 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 108.70760638518814,
            "unit": "ns/iter",
            "extra": "iterations: 6414545\ncpu: 108.69469307643796 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2888.4040614953915,
            "unit": "ns/iter",
            "extra": "iterations: 244245\ncpu: 2888.095969211241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1440.4538206486618,
            "unit": "ns/iter",
            "extra": "iterations: 483766\ncpu: 1440.3037832340447 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1432.9354475872858,
            "unit": "ns/iter",
            "extra": "iterations: 487201\ncpu: 1432.6181596507417 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1101.6194871111088,
            "unit": "ns/iter",
            "extra": "iterations: 600910\ncpu: 1101.0767003378203 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1525.047966434187,
            "unit": "ns/iter",
            "extra": "iterations: 474290\ncpu: 1524.8708596006668 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 210.45408212538314,
            "unit": "ns/iter",
            "extra": "iterations: 3458566\ncpu: 210.38777342979697 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1445.1891062459008,
            "unit": "ns/iter",
            "extra": "iterations: 477044\ncpu: 1445.1748685655848 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 111.96689590597339,
            "unit": "ns/iter",
            "extra": "iterations: 6234969\ncpu: 111.96463045766569 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 380.73283529183703,
            "unit": "ns/iter",
            "extra": "iterations: 1878826\ncpu: 380.709549473981 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 562.3207630533664,
            "unit": "ns/iter",
            "extra": "iterations: 1222195\ncpu: 562.26215947537 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3345213082.999976,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3344761000.000002 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727966461759,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3817.901746534256,
            "unit": "ns/iter",
            "extra": "iterations: 183220\ncpu: 3817.639995633663 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 768.8851431946399,
            "unit": "ns/iter",
            "extra": "iterations: 946509\ncpu: 768.7016182624784 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 999.2219803720901,
            "unit": "ns/iter",
            "extra": "iterations: 710725\ncpu: 999.0727777973194 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 158.66834423580994,
            "unit": "ns/iter",
            "extra": "iterations: 4342593\ncpu: 158.63632626866027 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 105.54403849310425,
            "unit": "ns/iter",
            "extra": "iterations: 6665714\ncpu: 105.51847859059065 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2770.8183639144927,
            "unit": "ns/iter",
            "extra": "iterations: 249119\ncpu: 2770.174093505512 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1348.2808437009292,
            "unit": "ns/iter",
            "extra": "iterations: 513784\ncpu: 1347.9925416128194 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1402.2551681544028,
            "unit": "ns/iter",
            "extra": "iterations: 514884\ncpu: 1402.0497820868418 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1056.0526495033698,
            "unit": "ns/iter",
            "extra": "iterations: 666540\ncpu: 1056.03264620278 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1420.3622731265739,
            "unit": "ns/iter",
            "extra": "iterations: 506615\ncpu: 1419.5592313689885 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 205.41554830176258,
            "unit": "ns/iter",
            "extra": "iterations: 3537158\ncpu: 205.38522734918837 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1427.5936124997145,
            "unit": "ns/iter",
            "extra": "iterations: 501135\ncpu: 1427.4317299729626 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 107.03238050797452,
            "unit": "ns/iter",
            "extra": "iterations: 6566296\ncpu: 106.99669950912939 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 356.1898187144311,
            "unit": "ns/iter",
            "extra": "iterations: 1955313\ncpu: 356.1741777403412 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 527.2844328603645,
            "unit": "ns/iter",
            "extra": "iterations: 1331330\ncpu: 527.2802385584337 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 2778.835081604118,
            "unit": "ns/iter",
            "extra": "iterations: 249008\ncpu: 2777.52120413802 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3233033958.000078,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3230633999.9999986 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727968672809,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3828.10666841051,
            "unit": "ns/iter",
            "extra": "iterations: 183522\ncpu: 3812.1097198156085 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 733.8023444836848,
            "unit": "ns/iter",
            "extra": "iterations: 970107\ncpu: 733.6984476970065 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 929.6009125995919,
            "unit": "ns/iter",
            "extra": "iterations: 760465\ncpu: 928.3543621336939 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 152.14534795590504,
            "unit": "ns/iter",
            "extra": "iterations: 4584963\ncpu: 152.12183827873866 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 102.50648481559426,
            "unit": "ns/iter",
            "extra": "iterations: 6820086\ncpu: 102.49606823139753 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2872.6829154150773,
            "unit": "ns/iter",
            "extra": "iterations: 250009\ncpu: 2812.502749901004 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1396.0032755704706,
            "unit": "ns/iter",
            "extra": "iterations: 520520\ncpu: 1360.7123645585184 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1411.0538540168734,
            "unit": "ns/iter",
            "extra": "iterations: 503825\ncpu: 1381.5868605170463 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1078.9187089293373,
            "unit": "ns/iter",
            "extra": "iterations: 667601\ncpu: 1054.2584567728316 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1379.3032336936344,
            "unit": "ns/iter",
            "extra": "iterations: 505521\ncpu: 1379.1870169587414 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 196.8466262771204,
            "unit": "ns/iter",
            "extra": "iterations: 3607039\ncpu: 196.77164566282775 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1378.8063799616564,
            "unit": "ns/iter",
            "extra": "iterations: 520442\ncpu: 1376.0457457315147 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 110.37321385533616,
            "unit": "ns/iter",
            "extra": "iterations: 6227869\ncpu: 109.33932618043218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 353.2231902341875,
            "unit": "ns/iter",
            "extra": "iterations: 1975297\ncpu: 353.1109498976621 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 527.7125899353522,
            "unit": "ns/iter",
            "extra": "iterations: 1339713\ncpu: 527.4517751190002 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 2746.3619901441616,
            "unit": "ns/iter",
            "extra": "iterations: 252645\ncpu: 2746.082447703295 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2968896667.000081,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2968486999.999998 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727969306340,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3600.7895135433,
            "unit": "ns/iter",
            "extra": "iterations: 198065\ncpu: 3591.9117461439437 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 734.2672805961206,
            "unit": "ns/iter",
            "extra": "iterations: 967212\ncpu: 731.3556903760499 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 965.8157602913582,
            "unit": "ns/iter",
            "extra": "iterations: 757486\ncpu: 941.8088255096466 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 158.76269109539706,
            "unit": "ns/iter",
            "extra": "iterations: 4658995\ncpu: 154.25107775389327 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 121.07377700782837,
            "unit": "ns/iter",
            "extra": "iterations: 6738739\ncpu: 113.2124274289299 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2883.405797101661,
            "unit": "ns/iter",
            "extra": "iterations: 244950\ncpu: 2815.7909777505597 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1377.8290948588362,
            "unit": "ns/iter",
            "extra": "iterations: 511898\ncpu: 1351.9919984059327 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1445.5933182866843,
            "unit": "ns/iter",
            "extra": "iterations: 505978\ncpu: 1405.1658372498403 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1099.9298216512716,
            "unit": "ns/iter",
            "extra": "iterations: 651084\ncpu: 1072.8047379447212 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1466.4896750580813,
            "unit": "ns/iter",
            "extra": "iterations: 495596\ncpu: 1435.1528260922178 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 194.34147169095922,
            "unit": "ns/iter",
            "extra": "iterations: 3554075\ncpu: 194.29134162897526 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1355.6623981579169,
            "unit": "ns/iter",
            "extra": "iterations: 513294\ncpu: 1355.5642575210268 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 105.34624203127598,
            "unit": "ns/iter",
            "extra": "iterations: 6681748\ncpu: 105.32962332611181 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 351.7162595752839,
            "unit": "ns/iter",
            "extra": "iterations: 1993410\ncpu: 351.6702534852335 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 524.716907520156,
            "unit": "ns/iter",
            "extra": "iterations: 1338227\ncpu: 524.6374494013343 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 2784.95504664962,
            "unit": "ns/iter",
            "extra": "iterations: 254664\ncpu: 2783.004272296039 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 669.602072949108,
            "unit": "ns/iter",
            "extra": "iterations: 1048265\ncpu: 669.5043715091139 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3102750000.000015,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3102283000.0000033 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727970507352,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3636.4769337641483,
            "unit": "ns/iter",
            "extra": "iterations: 195784\ncpu: 3613.7069423446233 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 730.6772461711947,
            "unit": "ns/iter",
            "extra": "iterations: 952187\ncpu: 730.4951653404213 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 934.8233878894401,
            "unit": "ns/iter",
            "extra": "iterations: 756896\ncpu: 934.7836426668914 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 151.9208712475255,
            "unit": "ns/iter",
            "extra": "iterations: 4600300\ncpu: 151.90791904875766 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 104.18945267341236,
            "unit": "ns/iter",
            "extra": "iterations: 6733877\ncpu: 104.18916175629575 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2902.5340985682437,
            "unit": "ns/iter",
            "extra": "iterations: 247767\ncpu: 2895.559134186552 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1351.2194810975925,
            "unit": "ns/iter",
            "extra": "iterations: 514509\ncpu: 1350.8587799241604 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1369.9258755431574,
            "unit": "ns/iter",
            "extra": "iterations: 513110\ncpu: 1369.8232347839642 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1035.6999378657304,
            "unit": "ns/iter",
            "extra": "iterations: 679176\ncpu: 1035.659387257501 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1413.5768996470078,
            "unit": "ns/iter",
            "extra": "iterations: 508884\ncpu: 1413.1157591907013 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 196.53523291741845,
            "unit": "ns/iter",
            "extra": "iterations: 3604754\ncpu: 196.52880612657597 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1378.7218679067219,
            "unit": "ns/iter",
            "extra": "iterations: 509276\ncpu: 1378.4058153142914 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 106.35756324195783,
            "unit": "ns/iter",
            "extra": "iterations: 6625902\ncpu: 106.34446449706012 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 368.91887215635757,
            "unit": "ns/iter",
            "extra": "iterations: 1981835\ncpu: 358.39714204260173 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 537.4933197570132,
            "unit": "ns/iter",
            "extra": "iterations: 1269864\ncpu: 534.8037270132868 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 779.4058513037941,
            "unit": "ns/iter",
            "extra": "iterations: 891186\ncpu: 778.7790652007546 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 665.1238108057906,
            "unit": "ns/iter",
            "extra": "iterations: 1054916\ncpu: 665.0548479689381 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2972519041.999931,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2972271999.9999967 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727974365515,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3664.5722871540233,
            "unit": "ns/iter",
            "extra": "iterations: 189515\ncpu: 3663.403952193758 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 759.4223938707908,
            "unit": "ns/iter",
            "extra": "iterations: 926441\ncpu: 759.3090115830366 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 951.5097339318478,
            "unit": "ns/iter",
            "extra": "iterations: 733722\ncpu: 951.440736409703 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 161.18376202014773,
            "unit": "ns/iter",
            "extra": "iterations: 4508886\ncpu: 158.7917725132108 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 109.49513982952146,
            "unit": "ns/iter",
            "extra": "iterations: 6493085\ncpu: 107.76064074319062 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2953.2658718693224,
            "unit": "ns/iter",
            "extra": "iterations: 238803\ncpu: 2915.629200638182 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1421.0902713772407,
            "unit": "ns/iter",
            "extra": "iterations: 499084\ncpu: 1393.933686513693 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1398.2933361925507,
            "unit": "ns/iter",
            "extra": "iterations: 531588\ncpu: 1345.0002633618494 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1025.9930290583513,
            "unit": "ns/iter",
            "extra": "iterations: 705787\ncpu: 999.5579402851 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1338.5082647041743,
            "unit": "ns/iter",
            "extra": "iterations: 513630\ncpu: 1338.3077312462253 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 209.33581180867148,
            "unit": "ns/iter",
            "extra": "iterations: 3487897\ncpu: 209.29402445083667 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1426.5530949839617,
            "unit": "ns/iter",
            "extra": "iterations: 468500\ncpu: 1426.4055496264652 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 109.08136724210092,
            "unit": "ns/iter",
            "extra": "iterations: 6436841\ncpu: 109.06390261931297 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 366.84094490810173,
            "unit": "ns/iter",
            "extra": "iterations: 1925182\ncpu: 364.6278637552195 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 552.3137297401743,
            "unit": "ns/iter",
            "extra": "iterations: 1259514\ncpu: 552.2233178829289 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 797.2438627020132,
            "unit": "ns/iter",
            "extra": "iterations: 883247\ncpu: 796.294807681205 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 697.4717286906193,
            "unit": "ns/iter",
            "extra": "iterations: 1009504\ncpu: 696.9610818778334 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3165961292.00002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3164947999.999999 ns\nthreads: 1"
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
        "date": 1727982594582,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3852.9867227037334,
            "unit": "ns/iter",
            "extra": "iterations: 174885\ncpu: 3846.968007547816 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 802.6009262146864,
            "unit": "ns/iter",
            "extra": "iterations: 888347\ncpu: 801.6653402330394 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1008.3238595389329,
            "unit": "ns/iter",
            "extra": "iterations: 707214\ncpu: 1007.9410192671523 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 162.09035054846186,
            "unit": "ns/iter",
            "extra": "iterations: 3885112\ncpu: 162.07743817938862 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 110.7746893440252,
            "unit": "ns/iter",
            "extra": "iterations: 6330717\ncpu: 110.71826461362906 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2996.5150750249136,
            "unit": "ns/iter",
            "extra": "iterations: 235323\ncpu: 2981.000582178541 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1499.3526995521613,
            "unit": "ns/iter",
            "extra": "iterations: 488118\ncpu: 1486.8904650105117 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1383.6943390536044,
            "unit": "ns/iter",
            "extra": "iterations: 523976\ncpu: 1383.1873978960875 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1007.8957155822806,
            "unit": "ns/iter",
            "extra": "iterations: 689662\ncpu: 1007.8980718090897 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1377.6744983757362,
            "unit": "ns/iter",
            "extra": "iterations: 490357\ncpu: 1377.6105979928905 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 209.08296113503587,
            "unit": "ns/iter",
            "extra": "iterations: 3194086\ncpu: 209.03538602279374 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1474.1053348395853,
            "unit": "ns/iter",
            "extra": "iterations: 443481\ncpu: 1469.607491640002 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 172.74613712860682,
            "unit": "ns/iter",
            "extra": "iterations: 6171316\ncpu: 168.25860156893611 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 652.8736135216477,
            "unit": "ns/iter",
            "extra": "iterations: 931136\ncpu: 634.2800622035893 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 681.7737586659902,
            "unit": "ns/iter",
            "extra": "iterations: 1124516\ncpu: 675.9165721074677 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1066.295931102975,
            "unit": "ns/iter",
            "extra": "iterations: 835681\ncpu: 1029.2336429809916 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 1112.0694727631133,
            "unit": "ns/iter",
            "extra": "iterations: 633169\ncpu: 971.2098981472544 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 4508635874.999982,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4267922999.9999995 ns\nthreads: 1"
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
        "date": 1727984107474,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3721.7680271845406,
            "unit": "ns/iter",
            "extra": "iterations: 184513\ncpu: 3720.101022692168 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 779.9690541917157,
            "unit": "ns/iter",
            "extra": "iterations: 928074\ncpu: 779.9259541803777 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 954.8659939067494,
            "unit": "ns/iter",
            "extra": "iterations: 699804\ncpu: 954.8559310892759 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 164.9230183571413,
            "unit": "ns/iter",
            "extra": "iterations: 4505113\ncpu: 164.87399983085865 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 109.75876462095181,
            "unit": "ns/iter",
            "extra": "iterations: 6540956\ncpu: 109.70919235659123 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3002.7197440614987,
            "unit": "ns/iter",
            "extra": "iterations: 230368\ncpu: 3001.5366717599663 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1476.7949845439734,
            "unit": "ns/iter",
            "extra": "iterations: 482349\ncpu: 1475.5001046959765 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1323.098992111682,
            "unit": "ns/iter",
            "extra": "iterations: 530416\ncpu: 1323.0709480860323 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1031.8865605035012,
            "unit": "ns/iter",
            "extra": "iterations: 695093\ncpu: 1031.6403704252552 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1377.922145783255,
            "unit": "ns/iter",
            "extra": "iterations: 494514\ncpu: 1377.922566398525 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 201.54772261769887,
            "unit": "ns/iter",
            "extra": "iterations: 3471310\ncpu: 201.46486484929306 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1520.212348827818,
            "unit": "ns/iter",
            "extra": "iterations: 470490\ncpu: 1520.0068014197948 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 109.71010929885338,
            "unit": "ns/iter",
            "extra": "iterations: 6411137\ncpu: 109.65839600682345 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 395.4666338243478,
            "unit": "ns/iter",
            "extra": "iterations: 1897955\ncpu: 394.0899547144167 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 377.7838845730215,
            "unit": "ns/iter",
            "extra": "iterations: 1863134\ncpu: 377.70981582645214 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 799.8291039019706,
            "unit": "ns/iter",
            "extra": "iterations: 876556\ncpu: 799.7868932504024 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 693.0524752349704,
            "unit": "ns/iter",
            "extra": "iterations: 1018671\ncpu: 692.8370396330126 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3343883917.000085,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3340000000 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727985936482,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3902.7429293669225,
            "unit": "ns/iter",
            "extra": "iterations: 157447\ncpu: 3902.100389337366 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 833.4277949675538,
            "unit": "ns/iter",
            "extra": "iterations: 905574\ncpu: 832.4918780795387 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 998.3437606596439,
            "unit": "ns/iter",
            "extra": "iterations: 700659\ncpu: 997.566576608593 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 162.7126287822749,
            "unit": "ns/iter",
            "extra": "iterations: 4356675\ncpu: 162.68186174089178 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 110.17519253711103,
            "unit": "ns/iter",
            "extra": "iterations: 6327741\ncpu: 110.17296694033463 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2972.6940895446137,
            "unit": "ns/iter",
            "extra": "iterations: 236530\ncpu: 2971.4793049507452 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1435.0011373603838,
            "unit": "ns/iter",
            "extra": "iterations: 487972\ncpu: 1434.379431606732 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1353.3428832934949,
            "unit": "ns/iter",
            "extra": "iterations: 524435\ncpu: 1352.90169420424 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1023.9787511062449,
            "unit": "ns/iter",
            "extra": "iterations: 688177\ncpu: 1023.0958023880496 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1373.5578919614602,
            "unit": "ns/iter",
            "extra": "iterations: 512040\ncpu: 1373.4024685571433 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 246.68320265666878,
            "unit": "ns/iter",
            "extra": "iterations: 3363008\ncpu: 233.6907911012999 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1787.817360825163,
            "unit": "ns/iter",
            "extra": "iterations: 393426\ncpu: 1778.3115503296672 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 113.7864331118987,
            "unit": "ns/iter",
            "extra": "iterations: 6200287\ncpu: 113.57619413423927 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 415.48394685650845,
            "unit": "ns/iter",
            "extra": "iterations: 1532379\ncpu: 409.4620195134497 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 387.4721239974495,
            "unit": "ns/iter",
            "extra": "iterations: 1623260\ncpu: 387.0070105836407 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 824.7449937440049,
            "unit": "ns/iter",
            "extra": "iterations: 849587\ncpu: 824.6312620131889 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 183.03088831577256,
            "unit": "ns/iter",
            "extra": "iterations: 3903353\ncpu: 182.94655902246095 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3413659499.9999943,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3410532000 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727987228494,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3560.337815941901,
            "unit": "ns/iter",
            "extra": "iterations: 195645\ncpu: 3560.142094099005 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 737.6267314045631,
            "unit": "ns/iter",
            "extra": "iterations: 958326\ncpu: 737.5371220231946 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 922.2921252098681,
            "unit": "ns/iter",
            "extra": "iterations: 762560\ncpu: 922.2343159882496 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 149.90920006457128,
            "unit": "ns/iter",
            "extra": "iterations: 4664739\ncpu: 149.90334936209737 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 103.37432093024573,
            "unit": "ns/iter",
            "extra": "iterations: 6830668\ncpu: 103.36983147182676 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2771.2844441836423,
            "unit": "ns/iter",
            "extra": "iterations: 255435\ncpu: 2771.162918159218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1340.2602816655628,
            "unit": "ns/iter",
            "extra": "iterations: 523529\ncpu: 1340.2161102823331 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1359.5068531257111,
            "unit": "ns/iter",
            "extra": "iterations: 521295\ncpu: 1359.4951035402203 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1023.7699230886128,
            "unit": "ns/iter",
            "extra": "iterations: 686766\ncpu: 1023.6951159492467 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1395.9672895273568,
            "unit": "ns/iter",
            "extra": "iterations: 509959\ncpu: 1395.7514231536268 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 197.3395805937944,
            "unit": "ns/iter",
            "extra": "iterations: 3549876\ncpu: 197.33956904410226 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1369.058264483025,
            "unit": "ns/iter",
            "extra": "iterations: 513795\ncpu: 1365.1903969481991 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 106.33355955022184,
            "unit": "ns/iter",
            "extra": "iterations: 6616069\ncpu: 106.31600123880226 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 362.8742773375403,
            "unit": "ns/iter",
            "extra": "iterations: 1953021\ncpu: 362.8409525550418 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 363.49670212609306,
            "unit": "ns/iter",
            "extra": "iterations: 1918812\ncpu: 363.4722943154422 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 767.7391152345505,
            "unit": "ns/iter",
            "extra": "iterations: 912468\ncpu: 767.7200734710688 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 169.70995996286715,
            "unit": "ns/iter",
            "extra": "iterations: 4161391\ncpu: 169.68701090572895 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2982118874.999969,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2981898999.9999948 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727988872084,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3761.0406446621664,
            "unit": "ns/iter",
            "extra": "iterations: 178326\ncpu: 3757.9096710518957 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 796.6977537914513,
            "unit": "ns/iter",
            "extra": "iterations: 897735\ncpu: 795.9397817841563 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 990.8878073234793,
            "unit": "ns/iter",
            "extra": "iterations: 678235\ncpu: 990.6389378312816 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 164.48687398862918,
            "unit": "ns/iter",
            "extra": "iterations: 4338180\ncpu: 164.42978391860188 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 109.81135457227262,
            "unit": "ns/iter",
            "extra": "iterations: 6118293\ncpu: 109.79533016807137 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3045.1594170813046,
            "unit": "ns/iter",
            "extra": "iterations: 230358\ncpu: 3043.9880533777864 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1502.3238746027698,
            "unit": "ns/iter",
            "extra": "iterations: 487028\ncpu: 1502.0183644472177 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1462.0295192308822,
            "unit": "ns/iter",
            "extra": "iterations: 457600\ncpu: 1461.1713286713261 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1131.5191107676005,
            "unit": "ns/iter",
            "extra": "iterations: 613293\ncpu: 1131.0107892964693 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1529.281211284907,
            "unit": "ns/iter",
            "extra": "iterations: 424574\ncpu: 1510.8956271462682 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 221.12893757356653,
            "unit": "ns/iter",
            "extra": "iterations: 3201464\ncpu: 220.23611697648337 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1569.42414359866,
            "unit": "ns/iter",
            "extra": "iterations: 461787\ncpu: 1569.1325221368302 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 114.2350995556391,
            "unit": "ns/iter",
            "extra": "iterations: 5714192\ncpu: 114.19602281477414 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 382.7619096755888,
            "unit": "ns/iter",
            "extra": "iterations: 1725005\ncpu: 382.67541253503595 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 393.55168468875956,
            "unit": "ns/iter",
            "extra": "iterations: 1808524\ncpu: 393.37603482176723 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 839.6580554861517,
            "unit": "ns/iter",
            "extra": "iterations: 839490\ncpu: 838.717554705834 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 175.43028177571477,
            "unit": "ns/iter",
            "extra": "iterations: 3884508\ncpu: 175.2765086337838 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3398159707.99998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3393754999.999995 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1727991075510,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5160.673793820503,
            "unit": "ns/iter",
            "extra": "iterations: 125997\ncpu: 5139.447764629317 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 1142.311882730219,
            "unit": "ns/iter",
            "extra": "iterations: 773669\ncpu: 1136.5092823933753 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1045.9506000601277,
            "unit": "ns/iter",
            "extra": "iterations: 708179\ncpu: 1044.1272616104118 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 266.12051082628363,
            "unit": "ns/iter",
            "extra": "iterations: 3856027\ncpu: 264.2997572371769 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 175.27528195143913,
            "unit": "ns/iter",
            "extra": "iterations: 4910420\ncpu: 174.28305521727245 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 4771.380341201528,
            "unit": "ns/iter",
            "extra": "iterations: 144841\ncpu: 4711.531955730773 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 2242.446429224757,
            "unit": "ns/iter",
            "extra": "iterations: 327996\ncpu: 2237.70411834291 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 2476.6016628848306,
            "unit": "ns/iter",
            "extra": "iterations: 315115\ncpu: 2444.028370594865 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1803.459550580233,
            "unit": "ns/iter",
            "extra": "iterations: 368386\ncpu: 1785.4342998919606 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2111.8138315428228,
            "unit": "ns/iter",
            "extra": "iterations: 272710\ncpu: 2103.7842396685164 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 340.35658754780343,
            "unit": "ns/iter",
            "extra": "iterations: 1604254\ncpu: 338.3959148613624 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 2502.8074374789308,
            "unit": "ns/iter",
            "extra": "iterations: 372196\ncpu: 2489.7527109372495 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 170.45975982241157,
            "unit": "ns/iter",
            "extra": "iterations: 3608247\ncpu: 169.34899412373886 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 546.6724510230582,
            "unit": "ns/iter",
            "extra": "iterations: 1122568\ncpu: 543.1777852210295 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 664.092865362503,
            "unit": "ns/iter",
            "extra": "iterations: 1294810\ncpu: 612.821958434056 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1154.4853869088638,
            "unit": "ns/iter",
            "extra": "iterations: 686234\ncpu: 1122.2513020340034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 309.2190314939152,
            "unit": "ns/iter",
            "extra": "iterations: 2244942\ncpu: 285.0380989798408 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 4521878875.000084,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4447436000 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728051693701,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4583.043659621875,
            "unit": "ns/iter",
            "extra": "iterations: 111476\ncpu: 4578.510172593204 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 821.3613778486074,
            "unit": "ns/iter",
            "extra": "iterations: 883203\ncpu: 821.2925001386997 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1087.6423416795083,
            "unit": "ns/iter",
            "extra": "iterations: 712258\ncpu: 1087.5497361910993 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 176.86448091239436,
            "unit": "ns/iter",
            "extra": "iterations: 3988036\ncpu: 176.8141009760192 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 121.66420732825269,
            "unit": "ns/iter",
            "extra": "iterations: 6152061\ncpu: 121.53699386270722 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2985.681226660745,
            "unit": "ns/iter",
            "extra": "iterations: 220925\ncpu: 2984.650899626571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1458.3713597910769,
            "unit": "ns/iter",
            "extra": "iterations: 465667\ncpu: 1457.9796292200215 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 2088.22830787335,
            "unit": "ns/iter",
            "extra": "iterations: 465503\ncpu: 2087.0026616369832 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1828.6622694419443,
            "unit": "ns/iter",
            "extra": "iterations: 379785\ncpu: 1827.3286201403419 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1714.441466459979,
            "unit": "ns/iter",
            "extra": "iterations: 314717\ncpu: 1714.2226190514032 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 232.51579962517604,
            "unit": "ns/iter",
            "extra": "iterations: 3112827\ncpu: 232.47517449572393 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1553.392811563712,
            "unit": "ns/iter",
            "extra": "iterations: 427826\ncpu: 1552.572774913168 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 114.16649052621355,
            "unit": "ns/iter",
            "extra": "iterations: 6106870\ncpu: 114.0549905270622 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 407.4386292985136,
            "unit": "ns/iter",
            "extra": "iterations: 1785013\ncpu: 407.34829382194954 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 396.1743907613998,
            "unit": "ns/iter",
            "extra": "iterations: 1760271\ncpu: 396.08503463387086 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 837.8176647597285,
            "unit": "ns/iter",
            "extra": "iterations: 840770\ncpu: 837.6036252482835 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 183.2700818336689,
            "unit": "ns/iter",
            "extra": "iterations: 3825074\ncpu: 183.20534452405434 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 4139363124.999818,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4128114999.9999976 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728052153454,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3937.528900839911,
            "unit": "ns/iter",
            "extra": "iterations: 187434\ncpu: 3817.903902173566 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 806.1586002987991,
            "unit": "ns/iter",
            "extra": "iterations: 859412\ncpu: 804.5943040125109 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1009.7666566931343,
            "unit": "ns/iter",
            "extra": "iterations: 705197\ncpu: 1008.8088860275932 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 154.51073469189382,
            "unit": "ns/iter",
            "extra": "iterations: 4512286\ncpu: 154.07556169976814 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 113.08618920983065,
            "unit": "ns/iter",
            "extra": "iterations: 6610259\ncpu: 112.7386990434111 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2980.5212906220127,
            "unit": "ns/iter",
            "extra": "iterations: 219956\ncpu: 2975.486006292167 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1444.7322346039996,
            "unit": "ns/iter",
            "extra": "iterations: 501185\ncpu: 1432.3712800662422 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1418.578794682174,
            "unit": "ns/iter",
            "extra": "iterations: 475692\ncpu: 1416.780185498177 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1067.8162157467318,
            "unit": "ns/iter",
            "extra": "iterations: 644941\ncpu: 1066.9580628305525 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1391.0498854596124,
            "unit": "ns/iter",
            "extra": "iterations: 501569\ncpu: 1390.6481461174844 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 196.57118449831242,
            "unit": "ns/iter",
            "extra": "iterations: 3438080\ncpu: 196.5114249813846 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1402.889794701279,
            "unit": "ns/iter",
            "extra": "iterations: 516418\ncpu: 1401.7462598127863 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 108.90832806301363,
            "unit": "ns/iter",
            "extra": "iterations: 6479682\ncpu: 108.30269139750997 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 368.3868667057541,
            "unit": "ns/iter",
            "extra": "iterations: 1950752\ncpu: 367.82174258952483 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 384.23050258074966,
            "unit": "ns/iter",
            "extra": "iterations: 1836461\ncpu: 383.2752233780072 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 797.7241642313325,
            "unit": "ns/iter",
            "extra": "iterations: 887626\ncpu: 796.4908643955887 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 186.49332325872,
            "unit": "ns/iter",
            "extra": "iterations: 3959791\ncpu: 186.27447761763136 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3277179000.0000463,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3262433999.999999 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728054225665,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4228.983833536213,
            "unit": "ns/iter",
            "extra": "iterations: 177528\ncpu: 4092.137578297509 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 756.8970007657384,
            "unit": "ns/iter",
            "extra": "iterations: 838414\ncpu: 756.8671324667763 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 944.3472298982031,
            "unit": "ns/iter",
            "extra": "iterations: 729197\ncpu: 944.1001540050215 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 163.10640559463337,
            "unit": "ns/iter",
            "extra": "iterations: 4338879\ncpu: 162.72544129485954 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 110.2332090922805,
            "unit": "ns/iter",
            "extra": "iterations: 6370412\ncpu: 110.14138489001957 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2997.754831915101,
            "unit": "ns/iter",
            "extra": "iterations: 228843\ncpu: 2997.3781151269677 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1425.7948252337903,
            "unit": "ns/iter",
            "extra": "iterations: 498380\ncpu: 1424.7702556282356 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1407.773732902339,
            "unit": "ns/iter",
            "extra": "iterations: 475279\ncpu: 1407.7268299251605 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1127.4141609006783,
            "unit": "ns/iter",
            "extra": "iterations: 664534\ncpu: 1127.1823563579887 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1447.88217283138,
            "unit": "ns/iter",
            "extra": "iterations: 493163\ncpu: 1447.8154281647262 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 199.9800586967782,
            "unit": "ns/iter",
            "extra": "iterations: 3410409\ncpu: 199.90857401560933 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1422.2993634325308,
            "unit": "ns/iter",
            "extra": "iterations: 492171\ncpu: 1422.113452438275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 118.82817779364315,
            "unit": "ns/iter",
            "extra": "iterations: 6563587\ncpu: 117.99112284182414 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 431.2833290797157,
            "unit": "ns/iter",
            "extra": "iterations: 1340046\ncpu: 423.3683022821602 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 388.48040997733597,
            "unit": "ns/iter",
            "extra": "iterations: 1719217\ncpu: 388.4274061971241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 798.4428659732785,
            "unit": "ns/iter",
            "extra": "iterations: 833155\ncpu: 797.867143568724 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 175.58734697807049,
            "unit": "ns/iter",
            "extra": "iterations: 4082013\ncpu: 175.50017601609733 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3289723541.9999332,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3273924000.000001 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728055311216,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3772.666168375686,
            "unit": "ns/iter",
            "extra": "iterations: 185300\ncpu: 3771.279007015649 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 798.8218122838375,
            "unit": "ns/iter",
            "extra": "iterations: 885336\ncpu: 798.3217671031113 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 984.8737681073043,
            "unit": "ns/iter",
            "extra": "iterations: 710898\ncpu: 984.6700933185916 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 161.7606787317781,
            "unit": "ns/iter",
            "extra": "iterations: 4325420\ncpu: 161.67331727323585 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 108.23454075527242,
            "unit": "ns/iter",
            "extra": "iterations: 6337939\ncpu: 108.22556039116192 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2907.0150849245283,
            "unit": "ns/iter",
            "extra": "iterations: 235268\ncpu: 2906.876413281873 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1396.4825398588503,
            "unit": "ns/iter",
            "extra": "iterations: 486909\ncpu: 1396.1705369997276 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1441.0745587386216,
            "unit": "ns/iter",
            "extra": "iterations: 478911\ncpu: 1440.9733750112248 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1084.2239261613552,
            "unit": "ns/iter",
            "extra": "iterations: 643672\ncpu: 1084.0738761356731 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1492.663575334233,
            "unit": "ns/iter",
            "extra": "iterations: 470563\ncpu: 1492.4165308364686 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 210.09074203237444,
            "unit": "ns/iter",
            "extra": "iterations: 3374974\ncpu: 210.04458108418072 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1473.984636420372,
            "unit": "ns/iter",
            "extra": "iterations: 479771\ncpu: 1473.4383695554757 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 113.56637504633795,
            "unit": "ns/iter",
            "extra": "iterations: 6219845\ncpu: 113.54945340277749 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 378.5809854852923,
            "unit": "ns/iter",
            "extra": "iterations: 1841509\ncpu: 378.58082691966223 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 395.5197416313751,
            "unit": "ns/iter",
            "extra": "iterations: 1762443\ncpu: 395.45278911147676 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 828.272124823517,
            "unit": "ns/iter",
            "extra": "iterations: 842470\ncpu: 828.1363134592331 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 181.41307257638772,
            "unit": "ns/iter",
            "extra": "iterations: 3856516\ncpu: 181.3940354454636 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3205865166.999956,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3203106000.000002 ns\nthreads: 1"
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
        "date": 1728055553413,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3995.5399262600627,
            "unit": "ns/iter",
            "extra": "iterations: 191215\ncpu: 3952.864576523807 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 774.0963649633727,
            "unit": "ns/iter",
            "extra": "iterations: 886401\ncpu: 774.0559859476692 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 973.9796454891994,
            "unit": "ns/iter",
            "extra": "iterations: 710162\ncpu: 973.8116091821298 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 160.44223548699966,
            "unit": "ns/iter",
            "extra": "iterations: 4476018\ncpu: 160.41155330474558 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 106.55257426723915,
            "unit": "ns/iter",
            "extra": "iterations: 6714435\ncpu: 106.54314175355027 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2768.946745052337,
            "unit": "ns/iter",
            "extra": "iterations: 255488\ncpu: 2768.384425100198 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1401.4626568295323,
            "unit": "ns/iter",
            "extra": "iterations: 498391\ncpu: 1401.1007421883621 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1393.7266897106397,
            "unit": "ns/iter",
            "extra": "iterations: 508016\ncpu: 1393.727756606091 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1058.959850077662,
            "unit": "ns/iter",
            "extra": "iterations: 656340\ncpu: 1058.5062619983537 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1417.2136118878116,
            "unit": "ns/iter",
            "extra": "iterations: 480624\ncpu: 1417.1285661972763 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 199.13361110570705,
            "unit": "ns/iter",
            "extra": "iterations: 3530949\ncpu: 199.12012323032687 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1390.9907556116348,
            "unit": "ns/iter",
            "extra": "iterations: 499979\ncpu: 1390.5624036209556 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 108.34658072614582,
            "unit": "ns/iter",
            "extra": "iterations: 6552283\ncpu: 108.30408271437621 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 363.2046208696293,
            "unit": "ns/iter",
            "extra": "iterations: 1910939\ncpu: 363.17067159129505 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 373.6773191551827,
            "unit": "ns/iter",
            "extra": "iterations: 1928407\ncpu: 373.5912595214606 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 833.5054035017199,
            "unit": "ns/iter",
            "extra": "iterations: 911446\ncpu: 833.5085128466159 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 175.0987496403575,
            "unit": "ns/iter",
            "extra": "iterations: 3555537\ncpu: 175.0992887994139 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3090445666.0000505,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3089877999.9999986 ns\nthreads: 1"
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
        "date": 1728055862252,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3784.8978662231107,
            "unit": "ns/iter",
            "extra": "iterations: 181556\ncpu: 3768.1762100949563 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 798.8841480558408,
            "unit": "ns/iter",
            "extra": "iterations: 885639\ncpu: 798.833384708668 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1015.6660752904231,
            "unit": "ns/iter",
            "extra": "iterations: 694989\ncpu: 1015.3541998506452 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 161.79997970870286,
            "unit": "ns/iter",
            "extra": "iterations: 4307268\ncpu: 161.79884790080393 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 112.3691521948755,
            "unit": "ns/iter",
            "extra": "iterations: 6302899\ncpu: 112.33243623291446 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2818.090088091676,
            "unit": "ns/iter",
            "extra": "iterations: 247924\ncpu: 2817.8433713557406 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1441.3055751119657,
            "unit": "ns/iter",
            "extra": "iterations: 482932\ncpu: 1440.846744469199 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1500.132463669815,
            "unit": "ns/iter",
            "extra": "iterations: 478116\ncpu: 1499.956077604601 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1121.4930756209956,
            "unit": "ns/iter",
            "extra": "iterations: 618467\ncpu: 1121.49395198127 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1485.3545476358092,
            "unit": "ns/iter",
            "extra": "iterations: 462581\ncpu: 1484.9853322985591 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 208.26287991411326,
            "unit": "ns/iter",
            "extra": "iterations: 3368656\ncpu: 208.25189630523292 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1463.0809322059686,
            "unit": "ns/iter",
            "extra": "iterations: 474187\ncpu: 1463.0177545989254 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 115.67794671711938,
            "unit": "ns/iter",
            "extra": "iterations: 6120540\ncpu: 115.6724733438551 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 378.59047267176106,
            "unit": "ns/iter",
            "extra": "iterations: 1848619\ncpu: 378.5355446417041 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 389.84884271118574,
            "unit": "ns/iter",
            "extra": "iterations: 1790089\ncpu: 389.8130204699324 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 824.0157211933015,
            "unit": "ns/iter",
            "extra": "iterations: 850826\ncpu: 823.8735064513771 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 180.61002675001055,
            "unit": "ns/iter",
            "extra": "iterations: 3863924\ncpu: 180.59076731322878 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3342542166.000044,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3337070999.999998 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728057202327,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3557.612159446521,
            "unit": "ns/iter",
            "extra": "iterations: 196555\ncpu: 3557.319834143116 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 802.0955919213762,
            "unit": "ns/iter",
            "extra": "iterations: 941544\ncpu: 789.8558113056852 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 939.9787673106571,
            "unit": "ns/iter",
            "extra": "iterations: 745784\ncpu: 939.8485352327217 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 152.5325571330377,
            "unit": "ns/iter",
            "extra": "iterations: 4616592\ncpu: 152.5254993293756 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 110.98616716717085,
            "unit": "ns/iter",
            "extra": "iterations: 6679326\ncpu: 109.87830209215724 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2652.8616314062397,
            "unit": "ns/iter",
            "extra": "iterations: 260536\ncpu: 2652.838763165167 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1351.2280061684453,
            "unit": "ns/iter",
            "extra": "iterations: 512280\ncpu: 1350.9760287342867 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1356.9819038214707,
            "unit": "ns/iter",
            "extra": "iterations: 514418\ncpu: 1356.4066576208465 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1029.6930006667005,
            "unit": "ns/iter",
            "extra": "iterations: 684008\ncpu: 1029.4660296370794 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1383.554434145945,
            "unit": "ns/iter",
            "extra": "iterations: 504821\ncpu: 1383.4309586962509 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 199.904785558836,
            "unit": "ns/iter",
            "extra": "iterations: 3579373\ncpu: 197.01159951756918 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1393.6464229637224,
            "unit": "ns/iter",
            "extra": "iterations: 506956\ncpu: 1373.4347754045668 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 108.2614836737599,
            "unit": "ns/iter",
            "extra": "iterations: 6582040\ncpu: 106.70901422659263 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 360.0010762555084,
            "unit": "ns/iter",
            "extra": "iterations: 1967005\ncpu: 355.7764215139259 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 370.6466878600228,
            "unit": "ns/iter",
            "extra": "iterations: 1917582\ncpu: 365.08060672242465 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 777.4036139892505,
            "unit": "ns/iter",
            "extra": "iterations: 887053\ncpu: 774.6808815256802 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 167.6508479795286,
            "unit": "ns/iter",
            "extra": "iterations: 4169794\ncpu: 167.5646326892892 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3000189291.999959,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2999856999.9999986 ns\nthreads: 1"
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
        "date": 1728069069177,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3540.578963437218,
            "unit": "ns/iter",
            "extra": "iterations: 196515\ncpu: 3540.2742793170987 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 735.0708679868125,
            "unit": "ns/iter",
            "extra": "iterations: 938816\ncpu: 735.051383870748 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 948.8039766434529,
            "unit": "ns/iter",
            "extra": "iterations: 735897\ncpu: 948.3338021489413 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 151.30236699677556,
            "unit": "ns/iter",
            "extra": "iterations: 4555097\ncpu: 151.27998371933683 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 103.7238074943724,
            "unit": "ns/iter",
            "extra": "iterations: 6767012\ncpu: 103.72111058765677 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2634.9898825345285,
            "unit": "ns/iter",
            "extra": "iterations: 265185\ncpu: 2634.9114768934887 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1345.62130995853,
            "unit": "ns/iter",
            "extra": "iterations: 524215\ncpu: 1345.3201453602042 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1347.2762681318386,
            "unit": "ns/iter",
            "extra": "iterations: 508839\ncpu: 1347.2630832149239 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1051.2101804963718,
            "unit": "ns/iter",
            "extra": "iterations: 682894\ncpu: 1049.9960462385088 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1408.2226863593696,
            "unit": "ns/iter",
            "extra": "iterations: 502725\ncpu: 1408.141628126709 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 194.08017710413714,
            "unit": "ns/iter",
            "extra": "iterations: 3587720\ncpu: 194.063081845852 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1366.2323419604083,
            "unit": "ns/iter",
            "extra": "iterations: 511311\ncpu: 1366.1783141766944 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 106.41904923504084,
            "unit": "ns/iter",
            "extra": "iterations: 6612507\ncpu: 106.39535050775753 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 359.6812899473069,
            "unit": "ns/iter",
            "extra": "iterations: 1932079\ncpu: 359.63125731401277 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 362.37054033602215,
            "unit": "ns/iter",
            "extra": "iterations: 1948325\ncpu: 362.2706683946468 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 777.3233818271661,
            "unit": "ns/iter",
            "extra": "iterations: 882245\ncpu: 777.3169584412493 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 167.0319208544764,
            "unit": "ns/iter",
            "extra": "iterations: 4185101\ncpu: 167.02010297959382 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2960279666.999895,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2960028000.0000014 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728073271829,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3532.796532755365,
            "unit": "ns/iter",
            "extra": "iterations: 199236\ncpu: 3532.4238591419235 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 739.7672803558901,
            "unit": "ns/iter",
            "extra": "iterations: 933806\ncpu: 739.7457287702161 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 955.8058499540748,
            "unit": "ns/iter",
            "extra": "iterations: 747664\ncpu: 955.7394765563141 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 150.4148818280936,
            "unit": "ns/iter",
            "extra": "iterations: 4655463\ncpu: 150.40824081299732 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 103.44401487757901,
            "unit": "ns/iter",
            "extra": "iterations: 6754866\ncpu: 103.44202238800881 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2648.599525755561,
            "unit": "ns/iter",
            "extra": "iterations: 266951\ncpu: 2647.9840869672685 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1344.6273105184853,
            "unit": "ns/iter",
            "extra": "iterations: 521528\ncpu: 1344.5874430519539 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1375.1546617436295,
            "unit": "ns/iter",
            "extra": "iterations: 510249\ncpu: 1372.5377217789749 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1042.0036893047345,
            "unit": "ns/iter",
            "extra": "iterations: 680345\ncpu: 1041.8126097788606 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1377.6580637177346,
            "unit": "ns/iter",
            "extra": "iterations: 500991\ncpu: 1377.625546167495 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 201.98073486036594,
            "unit": "ns/iter",
            "extra": "iterations: 3470673\ncpu: 201.980999074243 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1364.6421228056233,
            "unit": "ns/iter",
            "extra": "iterations: 518446\ncpu: 1364.4873332999014 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 104.69426910150653,
            "unit": "ns/iter",
            "extra": "iterations: 6672322\ncpu: 104.68214813373814 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 375.785891807545,
            "unit": "ns/iter",
            "extra": "iterations: 1879447\ncpu: 375.7498881319874 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 357.77017762407354,
            "unit": "ns/iter",
            "extra": "iterations: 1964317\ncpu: 357.74622935096494 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 774.2347357299856,
            "unit": "ns/iter",
            "extra": "iterations: 914292\ncpu: 774.2253022010487 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 168.58539916999152,
            "unit": "ns/iter",
            "extra": "iterations: 4166270\ncpu: 168.57452829509293 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2959591875.000001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2959348999.9999995 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728077589226,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3616.5383948307503,
            "unit": "ns/iter",
            "extra": "iterations: 189114\ncpu: 3615.2373700519274 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 799.3115720956614,
            "unit": "ns/iter",
            "extra": "iterations: 863707\ncpu: 798.8820282804243 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 984.7734512091894,
            "unit": "ns/iter",
            "extra": "iterations: 732862\ncpu: 984.6669632209076 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 158.7273236893778,
            "unit": "ns/iter",
            "extra": "iterations: 4440019\ncpu: 158.64594273132622 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 107.53340845552461,
            "unit": "ns/iter",
            "extra": "iterations: 6660260\ncpu: 107.45181119055415 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2807.1434451061496,
            "unit": "ns/iter",
            "extra": "iterations: 247586\ncpu: 2807.08925383503 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1386.1886290411103,
            "unit": "ns/iter",
            "extra": "iterations: 504355\ncpu: 1386.1070079606627 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1432.058883523393,
            "unit": "ns/iter",
            "extra": "iterations: 513777\ncpu: 1431.3583519698236 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1085.6331993754343,
            "unit": "ns/iter",
            "extra": "iterations: 661651\ncpu: 1085.0735508598952 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1451.348782112342,
            "unit": "ns/iter",
            "extra": "iterations: 474428\ncpu: 1451.099007647104 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 198.52317004941972,
            "unit": "ns/iter",
            "extra": "iterations: 3492526\ncpu: 198.52192940009624 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1376.9720477987712,
            "unit": "ns/iter",
            "extra": "iterations: 517419\ncpu: 1374.1590471165482 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 107.52987652121806,
            "unit": "ns/iter",
            "extra": "iterations: 6489293\ncpu: 107.51340708456209 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 361.21296281447167,
            "unit": "ns/iter",
            "extra": "iterations: 1932821\ncpu: 361.18192010537973 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 366.52995105968415,
            "unit": "ns/iter",
            "extra": "iterations: 1899866\ncpu: 366.5079537188419 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 827.3547490443633,
            "unit": "ns/iter",
            "extra": "iterations: 867743\ncpu: 825.8654924326661 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 190.6517941785721,
            "unit": "ns/iter",
            "extra": "iterations: 3729952\ncpu: 189.5056558368579 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3379517040.9999857,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3366831000.0000014 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728163758537,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3603.5426226008212,
            "unit": "ns/iter",
            "extra": "iterations: 197102\ncpu: 3593.449077127579 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 736.7615593923181,
            "unit": "ns/iter",
            "extra": "iterations: 934954\ncpu: 736.6137799292803 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 956.4440870338389,
            "unit": "ns/iter",
            "extra": "iterations: 710667\ncpu: 956.4338853499611 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 152.03507553015396,
            "unit": "ns/iter",
            "extra": "iterations: 4648939\ncpu: 151.99833768522254 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 107.03607766170587,
            "unit": "ns/iter",
            "extra": "iterations: 6753237\ncpu: 107.0337084275288 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2666.63035926694,
            "unit": "ns/iter",
            "extra": "iterations: 254769\ncpu: 2666.3016301041303 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1348.7994460009693,
            "unit": "ns/iter",
            "extra": "iterations: 523106\ncpu: 1348.2124081926029 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1375.2354129140342,
            "unit": "ns/iter",
            "extra": "iterations: 499123\ncpu: 1375.0919112122654 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1043.9138242701836,
            "unit": "ns/iter",
            "extra": "iterations: 682640\ncpu: 1043.813723192311 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1411.0101618842912,
            "unit": "ns/iter",
            "extra": "iterations: 498136\ncpu: 1410.962066584224 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 196.2054081800288,
            "unit": "ns/iter",
            "extra": "iterations: 3547663\ncpu: 196.19845515202567 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1389.8969911503211,
            "unit": "ns/iter",
            "extra": "iterations: 510461\ncpu: 1389.7535756894256 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 106.04486715929805,
            "unit": "ns/iter",
            "extra": "iterations: 6556087\ncpu: 106.04069165037006 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 357.93909096628505,
            "unit": "ns/iter",
            "extra": "iterations: 1974272\ncpu: 357.9243386929461 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 359.58538443007313,
            "unit": "ns/iter",
            "extra": "iterations: 1934006\ncpu: 359.5516249691058 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 774.1399772624189,
            "unit": "ns/iter",
            "extra": "iterations: 908619\ncpu: 773.985575912456 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 170.47487792049077,
            "unit": "ns/iter",
            "extra": "iterations: 4135625\ncpu: 170.46032945443548 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2995892041.999923,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2995425999.9999986 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728167043225,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3534.108000489823,
            "unit": "ns/iter",
            "extra": "iterations: 196138\ncpu: 3533.8129276325844 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 744.4129278525897,
            "unit": "ns/iter",
            "extra": "iterations: 949655\ncpu: 744.3387335400752 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 949.9384020183497,
            "unit": "ns/iter",
            "extra": "iterations: 745966\ncpu: 949.80200169981 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 156.38118109313527,
            "unit": "ns/iter",
            "extra": "iterations: 4486403\ncpu: 156.33994538609218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 103.27834283117258,
            "unit": "ns/iter",
            "extra": "iterations: 6757670\ncpu: 103.2574837185006 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2673.3459743160365,
            "unit": "ns/iter",
            "extra": "iterations: 265222\ncpu: 2672.723228088169 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1335.5179507493642,
            "unit": "ns/iter",
            "extra": "iterations: 522708\ncpu: 1335.533414449366 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1361.1375578130662,
            "unit": "ns/iter",
            "extra": "iterations: 516750\ncpu: 1360.9830672472176 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1036.4906341843914,
            "unit": "ns/iter",
            "extra": "iterations: 682215\ncpu: 1036.4694414517428 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1386.9279466674948,
            "unit": "ns/iter",
            "extra": "iterations: 509109\ncpu: 1386.830717979845 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 194.11956738274228,
            "unit": "ns/iter",
            "extra": "iterations: 3619273\ncpu: 194.11135882814014 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1351.8062420130632,
            "unit": "ns/iter",
            "extra": "iterations: 518807\ncpu: 1351.7435192663181 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 105.46275491490094,
            "unit": "ns/iter",
            "extra": "iterations: 6639225\ncpu: 105.44152367181398 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 351.68111218066315,
            "unit": "ns/iter",
            "extra": "iterations: 1990468\ncpu: 351.65749964330104 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 358.33276670104993,
            "unit": "ns/iter",
            "extra": "iterations: 1956001\ncpu: 358.32548142869115 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 771.0333972223345,
            "unit": "ns/iter",
            "extra": "iterations: 913040\ncpu: 770.8983177078768 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 167.22612199186133,
            "unit": "ns/iter",
            "extra": "iterations: 4102949\ncpu: 167.21679942889918 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3079400042.000088,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3076689999.999999 ns\nthreads: 1"
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
        "date": 1728327994981,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3542.2708782695527,
            "unit": "ns/iter",
            "extra": "iterations: 197502\ncpu: 3542.212230762221 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 747.8985915613928,
            "unit": "ns/iter",
            "extra": "iterations: 931954\ncpu: 747.8502157831821 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 943.7158697736762,
            "unit": "ns/iter",
            "extra": "iterations: 732386\ncpu: 943.6089712255564 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 152.77080192375368,
            "unit": "ns/iter",
            "extra": "iterations: 4650916\ncpu: 152.7647456974067 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 103.3289238447866,
            "unit": "ns/iter",
            "extra": "iterations: 6683088\ncpu: 103.32618693633829 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2656.230234326565,
            "unit": "ns/iter",
            "extra": "iterations: 265612\ncpu: 2656.1751728084596 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1342.1030387953047,
            "unit": "ns/iter",
            "extra": "iterations: 521687\ncpu: 1342.0460927721017 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1370.9388458732828,
            "unit": "ns/iter",
            "extra": "iterations: 509892\ncpu: 1370.9020733802447 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1038.1444848541519,
            "unit": "ns/iter",
            "extra": "iterations: 678604\ncpu: 1038.148905694632 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1411.9015399310679,
            "unit": "ns/iter",
            "extra": "iterations: 498334\ncpu: 1411.6917569341063 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 194.39896760692366,
            "unit": "ns/iter",
            "extra": "iterations: 3559497\ncpu: 194.36931678829868 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1365.182335134482,
            "unit": "ns/iter",
            "extra": "iterations: 508399\ncpu: 1365.1246363584496 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 105.93430637399035,
            "unit": "ns/iter",
            "extra": "iterations: 6501407\ncpu: 105.92922424330612 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 355.5479027795564,
            "unit": "ns/iter",
            "extra": "iterations: 1967652\ncpu: 355.4276874162708 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 357.5890091647551,
            "unit": "ns/iter",
            "extra": "iterations: 1942109\ncpu: 357.4768460472613 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 770.800847699861,
            "unit": "ns/iter",
            "extra": "iterations: 892061\ncpu: 770.6333983886736 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 167.632307813449,
            "unit": "ns/iter",
            "extra": "iterations: 4153243\ncpu: 167.62515460809766 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2943691957.9999313,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2943397000.000001 ns\nthreads: 1"
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
        "date": 1728414559434,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4291.253995428628,
            "unit": "ns/iter",
            "extra": "iterations: 146605\ncpu: 4290.099246274002 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 974.1088559469497,
            "unit": "ns/iter",
            "extra": "iterations: 846945\ncpu: 964.1192757499014 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1135.9213977076827,
            "unit": "ns/iter",
            "extra": "iterations: 679942\ncpu: 1133.3554920860884 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 172.05802763064835,
            "unit": "ns/iter",
            "extra": "iterations: 4101098\ncpu: 172.03636684614722 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 117.64482643594874,
            "unit": "ns/iter",
            "extra": "iterations: 6187572\ncpu: 117.6012174080559 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3100.9997330320684,
            "unit": "ns/iter",
            "extra": "iterations: 221001\ncpu: 3100.78234940113 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1507.7259110220498,
            "unit": "ns/iter",
            "extra": "iterations: 453776\ncpu: 1507.497091075774 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1600.6841272310326,
            "unit": "ns/iter",
            "extra": "iterations: 418295\ncpu: 1599.930670937974 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1235.5340991301555,
            "unit": "ns/iter",
            "extra": "iterations: 610954\ncpu: 1234.6330492966756 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1660.3112179619884,
            "unit": "ns/iter",
            "extra": "iterations: 422813\ncpu: 1659.4924943178162 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 233.13289906180597,
            "unit": "ns/iter",
            "extra": "iterations: 2554623\ncpu: 233.11424033996386 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1551.7051672612017,
            "unit": "ns/iter",
            "extra": "iterations: 415907\ncpu: 1550.89238699998 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 120.3818335528405,
            "unit": "ns/iter",
            "extra": "iterations: 5650538\ncpu: 120.26447747099469 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 401.1225472217604,
            "unit": "ns/iter",
            "extra": "iterations: 1720447\ncpu: 400.9504506677615 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 421.25574728909345,
            "unit": "ns/iter",
            "extra": "iterations: 1643775\ncpu: 420.93108850055455 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 848.5132551402951,
            "unit": "ns/iter",
            "extra": "iterations: 819682\ncpu: 848.0605893505046 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 197.931191995459,
            "unit": "ns/iter",
            "extra": "iterations: 3510391\ncpu: 190.38420506433638 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3975298874.9999075,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3973296000.0000014 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728500401957,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3699.4250962800957,
            "unit": "ns/iter",
            "extra": "iterations: 195264\ncpu: 3616.5703867584384 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 770.841418810436,
            "unit": "ns/iter",
            "extra": "iterations: 912088\ncpu: 754.6695055740238 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1109.7711043982413,
            "unit": "ns/iter",
            "extra": "iterations: 743518\ncpu: 1069.0474205062967 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 176.1280297873767,
            "unit": "ns/iter",
            "extra": "iterations: 4104826\ncpu: 164.5204936823143 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 108.8698790605968,
            "unit": "ns/iter",
            "extra": "iterations: 6668381\ncpu: 105.93635846542064 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2718.7555653632553,
            "unit": "ns/iter",
            "extra": "iterations: 258294\ncpu: 2718.4216435534663 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1455.8561188338244,
            "unit": "ns/iter",
            "extra": "iterations: 523286\ncpu: 1454.2773932419377 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1391.6633773622245,
            "unit": "ns/iter",
            "extra": "iterations: 511861\ncpu: 1391.5496589894517 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1056.5005937144192,
            "unit": "ns/iter",
            "extra": "iterations: 648460\ncpu: 1056.43370446905 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1511.1386786966455,
            "unit": "ns/iter",
            "extra": "iterations: 498750\ncpu: 1511.1017543859655 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 205.48364317279487,
            "unit": "ns/iter",
            "extra": "iterations: 3256041\ncpu: 205.2391232174288 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1451.080940833559,
            "unit": "ns/iter",
            "extra": "iterations: 492372\ncpu: 1450.9171926917063 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 108.89002348407982,
            "unit": "ns/iter",
            "extra": "iterations: 6653866\ncpu: 108.84814933153152 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 370.8959993852989,
            "unit": "ns/iter",
            "extra": "iterations: 1860989\ncpu: 370.82325580645596 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 375.4792066116961,
            "unit": "ns/iter",
            "extra": "iterations: 1866627\ncpu: 375.0481483445809 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 811.3135830118338,
            "unit": "ns/iter",
            "extra": "iterations: 867142\ncpu: 811.223536629527 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 172.18316311170537,
            "unit": "ns/iter",
            "extra": "iterations: 3966006\ncpu: 172.16791906013216 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3167207250.0000467,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3160484000.000004 ns\nthreads: 1"
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
        "date": 1728500852167,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3550.500497073716,
            "unit": "ns/iter",
            "extra": "iterations: 197154\ncpu: 3550.148614788439 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 752.9615611116509,
            "unit": "ns/iter",
            "extra": "iterations: 935641\ncpu: 752.9629419830895 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 939.2077518715158,
            "unit": "ns/iter",
            "extra": "iterations: 722819\ncpu: 939.1867120261084 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 153.26132223759456,
            "unit": "ns/iter",
            "extra": "iterations: 4607901\ncpu: 153.25003727293614 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 103.68517351215175,
            "unit": "ns/iter",
            "extra": "iterations: 6615444\ncpu: 103.67119727715938 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2685.6008106410914,
            "unit": "ns/iter",
            "extra": "iterations: 262755\ncpu: 2685.395139959273 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1340.3915335675295,
            "unit": "ns/iter",
            "extra": "iterations: 513652\ncpu: 1339.65019118002 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1382.7952940438618,
            "unit": "ns/iter",
            "extra": "iterations: 509907\ncpu: 1382.761954630942 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1063.3236310533773,
            "unit": "ns/iter",
            "extra": "iterations: 666991\ncpu: 1063.2902093131675 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1422.8472033238934,
            "unit": "ns/iter",
            "extra": "iterations: 492406\ncpu: 1419.273932486604 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 195.83538162359488,
            "unit": "ns/iter",
            "extra": "iterations: 3578513\ncpu: 195.74611018599086 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1442.253975405273,
            "unit": "ns/iter",
            "extra": "iterations: 488315\ncpu: 1441.9094232206658 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 105.09679593618871,
            "unit": "ns/iter",
            "extra": "iterations: 6686727\ncpu: 105.07532309902886 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 351.42955912741274,
            "unit": "ns/iter",
            "extra": "iterations: 1975877\ncpu: 351.37713531763393 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 404.2738343024081,
            "unit": "ns/iter",
            "extra": "iterations: 1880462\ncpu: 404.2448079248615 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 830.4275130314464,
            "unit": "ns/iter",
            "extra": "iterations: 858306\ncpu: 824.534606538927 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 171.58727640058615,
            "unit": "ns/iter",
            "extra": "iterations: 3918671\ncpu: 171.18533298661666 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3153296374.999968,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3151475999.999999 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728568022583,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3657.3838012708393,
            "unit": "ns/iter",
            "extra": "iterations: 186706\ncpu: 3657.306139063553 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 733.4158972602241,
            "unit": "ns/iter",
            "extra": "iterations: 957448\ncpu: 733.402753987684 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 931.8121511390688,
            "unit": "ns/iter",
            "extra": "iterations: 709810\ncpu: 931.7817444104762 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 152.12425633800348,
            "unit": "ns/iter",
            "extra": "iterations: 4650298\ncpu: 152.10831649928667 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 105.25806651310428,
            "unit": "ns/iter",
            "extra": "iterations: 6687493\ncpu: 105.17453999578018 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2695.013951326643,
            "unit": "ns/iter",
            "extra": "iterations: 262484\ncpu: 2694.827113271665 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 1442.4847861886249,
            "unit": "ns/iter",
            "extra": "iterations: 479137\ncpu: 1442.1303301560938 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1357.9108397476568,
            "unit": "ns/iter",
            "extra": "iterations: 524348\ncpu: 1357.5564319879134 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1023.2583390621528,
            "unit": "ns/iter",
            "extra": "iterations: 692404\ncpu: 1022.9461412701257 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1378.7209720322205,
            "unit": "ns/iter",
            "extra": "iterations: 512411\ncpu: 1378.1378619896914 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 208.86276970170883,
            "unit": "ns/iter",
            "extra": "iterations: 3354354\ncpu: 208.81993969628752 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1449.050694352231,
            "unit": "ns/iter",
            "extra": "iterations: 489305\ncpu: 1448.7364731609114 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 110.04393065850508,
            "unit": "ns/iter",
            "extra": "iterations: 6326197\ncpu: 110.02739876737942 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 370.7019917466976,
            "unit": "ns/iter",
            "extra": "iterations: 1844110\ncpu: 370.6796232328865 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 375.92237070278657,
            "unit": "ns/iter",
            "extra": "iterations: 1824556\ncpu: 375.9232383111289 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 822.4128052738906,
            "unit": "ns/iter",
            "extra": "iterations: 864347\ncpu: 822.4000314688429 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 175.6632924520762,
            "unit": "ns/iter",
            "extra": "iterations: 4014959\ncpu: 175.61325034701446 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3210904708.000044,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3208278999.9999976 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728568973043,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3583.566992069477,
            "unit": "ns/iter",
            "extra": "iterations: 193299\ncpu: 3582.8845467384717 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 748.6509214524834,
            "unit": "ns/iter",
            "extra": "iterations: 948394\ncpu: 748.6013197046798 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 940.0047468858445,
            "unit": "ns/iter",
            "extra": "iterations: 753336\ncpu: 939.9696815232506 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 152.12101762604624,
            "unit": "ns/iter",
            "extra": "iterations: 4636713\ncpu: 152.07820712647094 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 103.22362054788879,
            "unit": "ns/iter",
            "extra": "iterations: 6778742\ncpu: 103.21384115223735 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2648.744372954003,
            "unit": "ns/iter",
            "extra": "iterations: 265770\ncpu: 2648.4065169131195 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.739235009853996,
            "unit": "ns/iter",
            "extra": "iterations: 30873182\ncpu: 22.73824576941889 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1265.5966604418209,
            "unit": "ns/iter",
            "extra": "iterations: 558517\ncpu: 1265.4117958808758 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 950.7308772827867,
            "unit": "ns/iter",
            "extra": "iterations: 739317\ncpu: 950.6706865931667 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1298.9962947723277,
            "unit": "ns/iter",
            "extra": "iterations: 544366\ncpu: 1298.861427789391 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 195.97794658019305,
            "unit": "ns/iter",
            "extra": "iterations: 3529702\ncpu: 195.94628668369128 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1359.8512361591133,
            "unit": "ns/iter",
            "extra": "iterations: 510897\ncpu: 1359.8005077344321 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 106.8170868733476,
            "unit": "ns/iter",
            "extra": "iterations: 6541384\ncpu: 106.81271730875302 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 361.33479379729926,
            "unit": "ns/iter",
            "extra": "iterations: 1929752\ncpu: 361.34228646997104 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 365.7875650392383,
            "unit": "ns/iter",
            "extra": "iterations: 1939982\ncpu: 365.70030031206505 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 786.126790419769,
            "unit": "ns/iter",
            "extra": "iterations: 886873\ncpu: 785.4709749874007 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 168.03395783902792,
            "unit": "ns/iter",
            "extra": "iterations: 4193023\ncpu: 168.01744230832992 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2874344000.000065,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2873976999.9999967 ns\nthreads: 1"
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
        "date": 1728587313487,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3580.0340440607106,
            "unit": "ns/iter",
            "extra": "iterations: 194777\ncpu: 3579.8939299814647 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 750.582924803528,
            "unit": "ns/iter",
            "extra": "iterations: 949951\ncpu: 750.5166055933415 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 934.5058416862707,
            "unit": "ns/iter",
            "extra": "iterations: 753036\ncpu: 934.3829511470906 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 153.77493253349576,
            "unit": "ns/iter",
            "extra": "iterations: 4573011\ncpu: 153.7549330189671 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 105.11643393454031,
            "unit": "ns/iter",
            "extra": "iterations: 6704274\ncpu: 105.11399146275942 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2682.934794096865,
            "unit": "ns/iter",
            "extra": "iterations: 261142\ncpu: 2682.889002917953 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 23.525680053685576,
            "unit": "ns/iter",
            "extra": "iterations: 29855584\ncpu: 23.520893109979028 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1314.9533074147885,
            "unit": "ns/iter",
            "extra": "iterations: 537837\ncpu: 1314.9411438781622 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 982.6466614382391,
            "unit": "ns/iter",
            "extra": "iterations: 716596\ncpu: 982.4601309524498 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1398.1857928594775,
            "unit": "ns/iter",
            "extra": "iterations: 525257\ncpu: 1358.2988898767665 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 198.1964872784196,
            "unit": "ns/iter",
            "extra": "iterations: 3234586\ncpu: 197.881274450579 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1366.7841145304099,
            "unit": "ns/iter",
            "extra": "iterations: 507533\ncpu: 1366.391939046327 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 106.25701063779839,
            "unit": "ns/iter",
            "extra": "iterations: 6672895\ncpu: 106.25358259046507 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 371.0001120690617,
            "unit": "ns/iter",
            "extra": "iterations: 1918460\ncpu: 370.96108336895236 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 375.2982641528707,
            "unit": "ns/iter",
            "extra": "iterations: 1831152\ncpu: 375.1654696060185 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 779.8694047686979,
            "unit": "ns/iter",
            "extra": "iterations: 903716\ncpu: 779.7659884299934 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 169.44474736058592,
            "unit": "ns/iter",
            "extra": "iterations: 3963693\ncpu: 169.43971190503262 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2969132875.000014,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2968044000.0000024 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728592771575,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3539.179085406428,
            "unit": "ns/iter",
            "extra": "iterations: 193310\ncpu: 3538.963323159691 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 739.1293202761764,
            "unit": "ns/iter",
            "extra": "iterations: 952225\ncpu: 739.1362335582452 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 937.0832300764722,
            "unit": "ns/iter",
            "extra": "iterations: 751363\ncpu: 937.0716950395481 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 151.4340338328654,
            "unit": "ns/iter",
            "extra": "iterations: 4584062\ncpu: 151.42858015445688 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 104.63587497031037,
            "unit": "ns/iter",
            "extra": "iterations: 6805168\ncpu: 104.6329789360086 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2641.6021858931176,
            "unit": "ns/iter",
            "extra": "iterations: 260031\ncpu: 2640.942810664884 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.99128429116757,
            "unit": "ns/iter",
            "extra": "iterations: 30690447\ncpu: 22.989368646210995 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1254.7051918008842,
            "unit": "ns/iter",
            "extra": "iterations: 539466\ncpu: 1254.696310796231 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 959.2408046318733,
            "unit": "ns/iter",
            "extra": "iterations: 723163\ncpu: 959.2111322067091 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1302.0293141170928,
            "unit": "ns/iter",
            "extra": "iterations: 537045\ncpu: 1301.995177312888 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 213.08314720042492,
            "unit": "ns/iter",
            "extra": "iterations: 3236934\ncpu: 213.05871543874554 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1333.1403319427945,
            "unit": "ns/iter",
            "extra": "iterations: 514245\ncpu: 1333.0922031327495 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 105.23816043919281,
            "unit": "ns/iter",
            "extra": "iterations: 6576722\ncpu: 105.231147066882 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 406.48224309233063,
            "unit": "ns/iter",
            "extra": "iterations: 1728792\ncpu: 406.4780494125381 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 368.94203231720104,
            "unit": "ns/iter",
            "extra": "iterations: 1879185\ncpu: 368.92801932752775 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 787.2748635395394,
            "unit": "ns/iter",
            "extra": "iterations: 890551\ncpu: 787.2249876761697 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 168.9486897187057,
            "unit": "ns/iter",
            "extra": "iterations: 4093663\ncpu: 168.9384299586944 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2917366915.999992,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2916957999.9999976 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728595340207,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4783.578877227337,
            "unit": "ns/iter",
            "extra": "iterations: 156826\ncpu: 4734.11934245597 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 925.2822699975223,
            "unit": "ns/iter",
            "extra": "iterations: 703525\ncpu: 920.8855406701965 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1034.7158184268337,
            "unit": "ns/iter",
            "extra": "iterations: 691864\ncpu: 1033.4415434247187 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 165.21926272485166,
            "unit": "ns/iter",
            "extra": "iterations: 4019639\ncpu: 165.05636451432574 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 111.96255678071621,
            "unit": "ns/iter",
            "extra": "iterations: 6262469\ncpu: 111.9550452066111 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3114.72661587016,
            "unit": "ns/iter",
            "extra": "iterations: 248705\ncpu: 3103.524255644236 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 25.068596771055155,
            "unit": "ns/iter",
            "extra": "iterations: 27833555\ncpu: 25.04006405218449 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1999.316521895905,
            "unit": "ns/iter",
            "extra": "iterations: 376688\ncpu: 1992.1314191054685 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1405.5608246835068,
            "unit": "ns/iter",
            "extra": "iterations: 491922\ncpu: 1402.1348913039053 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1463.0862907775188,
            "unit": "ns/iter",
            "extra": "iterations: 386426\ncpu: 1461.2422559558581 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 231.34435339610073,
            "unit": "ns/iter",
            "extra": "iterations: 2931532\ncpu: 231.13136748976308 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1487.1378834159893,
            "unit": "ns/iter",
            "extra": "iterations: 485178\ncpu: 1485.5249001397385 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 115.15384919791448,
            "unit": "ns/iter",
            "extra": "iterations: 6115300\ncpu: 115.14578189132169 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 541.949449338809,
            "unit": "ns/iter",
            "extra": "iterations: 1470505\ncpu: 533.9614622187624 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 457.25810138375846,
            "unit": "ns/iter",
            "extra": "iterations: 1421825\ncpu: 455.17767657763915 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 1079.2418627134848,
            "unit": "ns/iter",
            "extra": "iterations: 682660\ncpu: 1070.812703249059 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 208.17015817112323,
            "unit": "ns/iter",
            "extra": "iterations: 3493432\ncpu: 207.08432280920266 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3579290708.0000305,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3576167999.999999 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728596353960,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3542.5797568279286,
            "unit": "ns/iter",
            "extra": "iterations: 195582\ncpu: 3542.2124735405087 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 757.3809552328534,
            "unit": "ns/iter",
            "extra": "iterations: 918394\ncpu: 757.1891802429022 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 968.355495416522,
            "unit": "ns/iter",
            "extra": "iterations: 722029\ncpu: 968.3461467614178 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 156.34823259392374,
            "unit": "ns/iter",
            "extra": "iterations: 4499843\ncpu: 156.34812147890466 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 106.07597382735692,
            "unit": "ns/iter",
            "extra": "iterations: 6597114\ncpu: 106.06713784239604 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2767.6847794736827,
            "unit": "ns/iter",
            "extra": "iterations: 253099\ncpu: 2741.575430957845 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 23.03123385949121,
            "unit": "ns/iter",
            "extra": "iterations: 30172544\ncpu: 23.024342925807 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1277.6275903038488,
            "unit": "ns/iter",
            "extra": "iterations: 557174\ncpu: 1277.432184559941 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 960.4896487250758,
            "unit": "ns/iter",
            "extra": "iterations: 728461\ncpu: 960.3410477705722 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1307.7536343464242,
            "unit": "ns/iter",
            "extra": "iterations: 528637\ncpu: 1307.679939164304 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 213.93484004924338,
            "unit": "ns/iter",
            "extra": "iterations: 3257814\ncpu: 213.90509095976697 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1358.3983197232913,
            "unit": "ns/iter",
            "extra": "iterations: 514082\ncpu: 1358.3124871129494 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 105.06836684988922,
            "unit": "ns/iter",
            "extra": "iterations: 6524434\ncpu: 105.05033846614135 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 404.78599900114506,
            "unit": "ns/iter",
            "extra": "iterations: 1730048\ncpu: 404.7280769088485 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 369.79399388625916,
            "unit": "ns/iter",
            "extra": "iterations: 1895735\ncpu: 369.7626514254366 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 780.9149964704314,
            "unit": "ns/iter",
            "extra": "iterations: 903786\ncpu: 780.8961413431933 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 169.47619161574724,
            "unit": "ns/iter",
            "extra": "iterations: 4095028\ncpu: 169.46892670819426 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2982391582.9999804,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2981768000.0000024 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728597374813,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3532.9775363117005,
            "unit": "ns/iter",
            "extra": "iterations: 191331\ncpu: 3532.950750270472 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 733.7035222854163,
            "unit": "ns/iter",
            "extra": "iterations: 958497\ncpu: 733.6256660166906 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 941.1993314478193,
            "unit": "ns/iter",
            "extra": "iterations: 744594\ncpu: 941.1007878118829 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 151.44525578483578,
            "unit": "ns/iter",
            "extra": "iterations: 4632663\ncpu: 151.42629627926732 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 105.52662040244232,
            "unit": "ns/iter",
            "extra": "iterations: 6783932\ncpu: 104.8815052981074 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2699.0592012505304,
            "unit": "ns/iter",
            "extra": "iterations: 262410\ncpu: 2697.381959528981 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.727402001829955,
            "unit": "ns/iter",
            "extra": "iterations: 30853994\ncpu: 22.723022503990887 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1316.250546748359,
            "unit": "ns/iter",
            "extra": "iterations: 551442\ncpu: 1316.1456689914805 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 968.1358405158121,
            "unit": "ns/iter",
            "extra": "iterations: 724585\ncpu: 967.981672267574 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1281.4382141139556,
            "unit": "ns/iter",
            "extra": "iterations: 542543\ncpu: 1281.3804620094636 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 212.47696367185648,
            "unit": "ns/iter",
            "extra": "iterations: 3266037\ncpu: 212.44094907681742 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1349.3413918408087,
            "unit": "ns/iter",
            "extra": "iterations: 516266\ncpu: 1349.3354201128886 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 107.40701572776767,
            "unit": "ns/iter",
            "extra": "iterations: 6661718\ncpu: 107.39106638858014 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 405.24265704863063,
            "unit": "ns/iter",
            "extra": "iterations: 1726758\ncpu: 405.24902736805024 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 364.8110968967731,
            "unit": "ns/iter",
            "extra": "iterations: 1944039\ncpu: 364.80132343024036 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 775.0083705414057,
            "unit": "ns/iter",
            "extra": "iterations: 909977\ncpu: 774.696503318217 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 168.98620830876314,
            "unit": "ns/iter",
            "extra": "iterations: 4175340\ncpu: 168.98432223483644 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2875372917.0000496,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2875062000 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728598713209,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3554.7801552089704,
            "unit": "ns/iter",
            "extra": "iterations: 197926\ncpu: 3554.409223649242 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 742.3011912989036,
            "unit": "ns/iter",
            "extra": "iterations: 953497\ncpu: 742.2687223976583 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 939.9547028686065,
            "unit": "ns/iter",
            "extra": "iterations: 737199\ncpu: 939.6024682616219 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 152.32464566166672,
            "unit": "ns/iter",
            "extra": "iterations: 4605415\ncpu: 152.30440687755618 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 105.97448830120834,
            "unit": "ns/iter",
            "extra": "iterations: 6673213\ncpu: 105.96274987775746 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2626.4518507313874,
            "unit": "ns/iter",
            "extra": "iterations: 264490\ncpu: 2625.925365798331 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 23.499608088678084,
            "unit": "ns/iter",
            "extra": "iterations: 30463524\ncpu: 23.49544327176332 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1308.4993993205571,
            "unit": "ns/iter",
            "extra": "iterations: 541054\ncpu: 1308.3536948252852 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 954.294428293158,
            "unit": "ns/iter",
            "extra": "iterations: 729220\ncpu: 954.2607169304172 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1287.322828360174,
            "unit": "ns/iter",
            "extra": "iterations: 537428\ncpu: 1287.2552230252218 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 215.02499070223888,
            "unit": "ns/iter",
            "extra": "iterations: 3288423\ncpu: 214.99940853108043 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1364.558605399449,
            "unit": "ns/iter",
            "extra": "iterations: 522759\ncpu: 1364.4566616739253 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 105.7334447150982,
            "unit": "ns/iter",
            "extra": "iterations: 6660577\ncpu: 105.72822744936374 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 407.6268944158721,
            "unit": "ns/iter",
            "extra": "iterations: 1729095\ncpu: 407.59588108230037 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 359.8783467763029,
            "unit": "ns/iter",
            "extra": "iterations: 1942653\ncpu: 359.67926335789326 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 774.0832172348311,
            "unit": "ns/iter",
            "extra": "iterations: 904404\ncpu: 774.0434584544064 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 168.29681188480905,
            "unit": "ns/iter",
            "extra": "iterations: 4163024\ncpu: 168.29112683472349 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2982330957.9999204,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2966346999.999999 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728653679910,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3645.8044525925984,
            "unit": "ns/iter",
            "extra": "iterations: 196919\ncpu: 3645.6969616949095 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 742.9591387674003,
            "unit": "ns/iter",
            "extra": "iterations: 906654\ncpu: 742.8809667193879 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 937.8226012435105,
            "unit": "ns/iter",
            "extra": "iterations: 751702\ncpu: 937.7386251466677 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 152.34727250519407,
            "unit": "ns/iter",
            "extra": "iterations: 4576599\ncpu: 152.32796231437376 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 102.95383252814636,
            "unit": "ns/iter",
            "extra": "iterations: 6775658\ncpu: 102.94409782784196 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2616.6958973035626,
            "unit": "ns/iter",
            "extra": "iterations: 267117\ncpu: 2616.5463074233385 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 23.21692379281912,
            "unit": "ns/iter",
            "extra": "iterations: 30741395\ncpu: 23.216480579362166 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1275.711739585146,
            "unit": "ns/iter",
            "extra": "iterations: 550752\ncpu: 1275.6830660624018 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 977.3172626541307,
            "unit": "ns/iter",
            "extra": "iterations: 740396\ncpu: 977.2054414124327 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1454.662886731709,
            "unit": "ns/iter",
            "extra": "iterations: 516411\ncpu: 1454.1924939631388 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 218.8259922294332,
            "unit": "ns/iter",
            "extra": "iterations: 3195909\ncpu: 218.80691846983183 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1346.1148570929481,
            "unit": "ns/iter",
            "extra": "iterations: 513795\ncpu: 1345.9881859496513 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 105.02933239530172,
            "unit": "ns/iter",
            "extra": "iterations: 6680600\ncpu: 105.02484806753864 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 406.60210477764764,
            "unit": "ns/iter",
            "extra": "iterations: 1730159\ncpu: 406.59095493535557 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 373.414562592075,
            "unit": "ns/iter",
            "extra": "iterations: 1865547\ncpu: 373.3532309826553 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 781.3448634652449,
            "unit": "ns/iter",
            "extra": "iterations: 873624\ncpu: 781.3235442249768 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 172.36498298882643,
            "unit": "ns/iter",
            "extra": "iterations: 3979443\ncpu: 172.3567846052822 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2887625999.9999547,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2887180000.0000043 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728654847816,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4892.05050901433,
            "unit": "ns/iter",
            "extra": "iterations: 129957\ncpu: 4891.702640104034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 928.7900366853229,
            "unit": "ns/iter",
            "extra": "iterations: 709824\ncpu: 921.2959832296453 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1185.0629443059115,
            "unit": "ns/iter",
            "extra": "iterations: 672960\ncpu: 1184.2353185924874 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 179.90556561600954,
            "unit": "ns/iter",
            "extra": "iterations: 3943373\ncpu: 179.89371028304947 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 114.86142444513081,
            "unit": "ns/iter",
            "extra": "iterations: 6091565\ncpu: 114.83239528758207 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3215.6807938283614,
            "unit": "ns/iter",
            "extra": "iterations: 227505\ncpu: 3215.0150546141876 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 26.165567496157795,
            "unit": "ns/iter",
            "extra": "iterations: 25754421\ncpu: 26.159625176586164 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1499.176390287556,
            "unit": "ns/iter",
            "extra": "iterations: 491535\ncpu: 1498.1659495254676 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1134.219892017948,
            "unit": "ns/iter",
            "extra": "iterations: 638809\ncpu: 1133.7723795375452 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1537.1681524637,
            "unit": "ns/iter",
            "extra": "iterations: 468099\ncpu: 1536.8031121621718 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 237.89233368366408,
            "unit": "ns/iter",
            "extra": "iterations: 2917542\ncpu: 237.68123989303342 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1790.2184040473696,
            "unit": "ns/iter",
            "extra": "iterations: 466104\ncpu: 1727.011568233698 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 130.46286673822593,
            "unit": "ns/iter",
            "extra": "iterations: 5164413\ncpu: 129.74291560338014 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 504.9913843922992,
            "unit": "ns/iter",
            "extra": "iterations: 1229861\ncpu: 503.80896702960564 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 464.3648164210037,
            "unit": "ns/iter",
            "extra": "iterations: 1526428\ncpu: 464.32848454037935 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 869.8424579080355,
            "unit": "ns/iter",
            "extra": "iterations: 800567\ncpu: 869.5699423033926 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 196.69129077241587,
            "unit": "ns/iter",
            "extra": "iterations: 3701373\ncpu: 196.63730188770458 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3578210874.999968,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3572905999.9999995 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728656301294,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3536.3810873768757,
            "unit": "ns/iter",
            "extra": "iterations: 197889\ncpu: 3536.0783065253754 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 740.9789885800068,
            "unit": "ns/iter",
            "extra": "iterations: 949912\ncpu: 740.9181060982489 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 933.9588534271984,
            "unit": "ns/iter",
            "extra": "iterations: 751387\ncpu: 933.8636415056424 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 151.79890588248466,
            "unit": "ns/iter",
            "extra": "iterations: 4612850\ncpu: 151.767128781556 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 103.09458096570675,
            "unit": "ns/iter",
            "extra": "iterations: 6797964\ncpu: 103.08542381218842 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2635.106976551212,
            "unit": "ns/iter",
            "extra": "iterations: 265217\ncpu: 2634.9743794703945 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.67504624231715,
            "unit": "ns/iter",
            "extra": "iterations: 30454247\ncpu: 22.671944573116498 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1259.7243416374347,
            "unit": "ns/iter",
            "extra": "iterations: 559798\ncpu: 1259.6811707080044 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 941.291969596113,
            "unit": "ns/iter",
            "extra": "iterations: 731881\ncpu: 940.8032180094854 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1312.568662384259,
            "unit": "ns/iter",
            "extra": "iterations: 542211\ncpu: 1312.5222468743732 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 212.22201360345952,
            "unit": "ns/iter",
            "extra": "iterations: 3301077\ncpu: 212.22255645657484 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1358.50446717355,
            "unit": "ns/iter",
            "extra": "iterations: 525612\ncpu: 1358.4545253913527 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 105.05049073021225,
            "unit": "ns/iter",
            "extra": "iterations: 6648052\ncpu: 105.04189798756107 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 406.49997804083364,
            "unit": "ns/iter",
            "extra": "iterations: 1730484\ncpu: 406.440625859587 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 360.1355445936401,
            "unit": "ns/iter",
            "extra": "iterations: 1943899\ncpu: 360.0058439250183 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 776.3277206734474,
            "unit": "ns/iter",
            "extra": "iterations: 905750\ncpu: 776.2539332045264 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 168.01378704163244,
            "unit": "ns/iter",
            "extra": "iterations: 4168552\ncpu: 168.01133822967796 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2897557916.999972,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2884041000 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728660894465,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3886.68849282841,
            "unit": "ns/iter",
            "extra": "iterations: 181678\ncpu: 3886.441946740937 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 822.8170469146477,
            "unit": "ns/iter",
            "extra": "iterations: 863910\ncpu: 822.5023439941665 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1041.308364321238,
            "unit": "ns/iter",
            "extra": "iterations: 598889\ncpu: 1040.661959060862 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 170.0530255973037,
            "unit": "ns/iter",
            "extra": "iterations: 4185752\ncpu: 170.00696649013105 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 116.9128075411056,
            "unit": "ns/iter",
            "extra": "iterations: 6126539\ncpu: 116.89062944021079 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2894.929416221768,
            "unit": "ns/iter",
            "extra": "iterations: 242832\ncpu: 2894.511431771761 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 24.604984093884188,
            "unit": "ns/iter",
            "extra": "iterations: 27203059\ncpu: 24.604438787564305 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1386.5480430408404,
            "unit": "ns/iter",
            "extra": "iterations: 486980\ncpu: 1386.1719167111564 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1117.6894357611327,
            "unit": "ns/iter",
            "extra": "iterations: 684905\ncpu: 1116.7066965491554 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1545.9689324795622,
            "unit": "ns/iter",
            "extra": "iterations: 471457\ncpu: 1516.2082650167451 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 231.93492320044308,
            "unit": "ns/iter",
            "extra": "iterations: 2859652\ncpu: 231.1330189827291 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1501.527606507495,
            "unit": "ns/iter",
            "extra": "iterations: 488182\ncpu: 1501.1839846614585 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 120.2630662701897,
            "unit": "ns/iter",
            "extra": "iterations: 6063073\ncpu: 120.25535565875566 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 535.8577079999804,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 535.0509999999992 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 389.03322159552744,
            "unit": "ns/iter",
            "extra": "iterations: 1788114\ncpu: 388.90864900112643 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 882.9773184778253,
            "unit": "ns/iter",
            "extra": "iterations: 843506\ncpu: 882.6908166628336 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 179.66522678072695,
            "unit": "ns/iter",
            "extra": "iterations: 3839656\ncpu: 179.6554170477761 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3241009749.999989,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3237128999.9999995 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728663187650,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3744.4226493203505,
            "unit": "ns/iter",
            "extra": "iterations: 195635\ncpu: 3733.784854448335 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 740.8032418363167,
            "unit": "ns/iter",
            "extra": "iterations: 902143\ncpu: 739.6199937260501 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 930.0853506114387,
            "unit": "ns/iter",
            "extra": "iterations: 725689\ncpu: 930.044412964782 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 151.68754466072554,
            "unit": "ns/iter",
            "extra": "iterations: 4654534\ncpu: 151.68134984082195 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 102.81654142172606,
            "unit": "ns/iter",
            "extra": "iterations: 6756626\ncpu: 102.81566568876241 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2619.3489923552247,
            "unit": "ns/iter",
            "extra": "iterations: 266066\ncpu: 2619.3125014094244 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.725472928273316,
            "unit": "ns/iter",
            "extra": "iterations: 30733836\ncpu: 22.72410772283682 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1257.4794743391067,
            "unit": "ns/iter",
            "extra": "iterations: 556328\ncpu: 1257.2798780575492 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 949.3667512179978,
            "unit": "ns/iter",
            "extra": "iterations: 743534\ncpu: 949.2249177576301 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1279.7338003505818,
            "unit": "ns/iter",
            "extra": "iterations: 550444\ncpu: 1279.6833102004905 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 212.39624958540014,
            "unit": "ns/iter",
            "extra": "iterations: 3295529\ncpu: 212.3868429013978 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1343.5778209110651,
            "unit": "ns/iter",
            "extra": "iterations: 522411\ncpu: 1343.5704837761832 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 106.26619037617927,
            "unit": "ns/iter",
            "extra": "iterations: 6643005\ncpu: 106.04146767916039 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 407.62614609255564,
            "unit": "ns/iter",
            "extra": "iterations: 1728809\ncpu: 407.4857315064885 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 375.0231628176356,
            "unit": "ns/iter",
            "extra": "iterations: 1917556\ncpu: 374.97262139932343 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 784.1412308890821,
            "unit": "ns/iter",
            "extra": "iterations: 899350\ncpu: 784.1096347361952 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 167.55021094453787,
            "unit": "ns/iter",
            "extra": "iterations: 4104633\ncpu: 167.54871872832427 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2869675041.999926,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2869346000 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728669416296,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4270.997331375557,
            "unit": "ns/iter",
            "extra": "iterations: 156635\ncpu: 4270.712165224883 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 819.0346488693392,
            "unit": "ns/iter",
            "extra": "iterations: 867099\ncpu: 818.5040001199402 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1026.368950810276,
            "unit": "ns/iter",
            "extra": "iterations: 680649\ncpu: 1026.1559188362874 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 163.01117089037666,
            "unit": "ns/iter",
            "extra": "iterations: 4120531\ncpu: 162.91541065945145 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 113.58044846663202,
            "unit": "ns/iter",
            "extra": "iterations: 6194307\ncpu: 113.5331200084205 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2815.7128890905005,
            "unit": "ns/iter",
            "extra": "iterations: 246922\ncpu: 2815.5490397777403 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 24.28533952303458,
            "unit": "ns/iter",
            "extra": "iterations: 28960804\ncpu: 24.28323467815326 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1362.8255087364619,
            "unit": "ns/iter",
            "extra": "iterations: 538835\ncpu: 1359.1377694470468 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 976.901122083638,
            "unit": "ns/iter",
            "extra": "iterations: 700126\ncpu: 976.4942310384132 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1341.4592927357608,
            "unit": "ns/iter",
            "extra": "iterations: 524415\ncpu: 1341.3765815241716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 258.535943206085,
            "unit": "ns/iter",
            "extra": "iterations: 3167664\ncpu: 258.5119507624543 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1738.9767288269034,
            "unit": "ns/iter",
            "extra": "iterations: 392159\ncpu: 1738.027177751881 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 138.73156232159604,
            "unit": "ns/iter",
            "extra": "iterations: 5107476\ncpu: 138.72409777353818 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 573.5719704675943,
            "unit": "ns/iter",
            "extra": "iterations: 1233763\ncpu: 571.7451406793692 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 547.4019036243291,
            "unit": "ns/iter",
            "extra": "iterations: 1234067\ncpu: 545.5287273705571 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 984.0126253259876,
            "unit": "ns/iter",
            "extra": "iterations: 665963\ncpu: 983.7048004168423 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 186.6469001588933,
            "unit": "ns/iter",
            "extra": "iterations: 3605088\ncpu: 186.60099281903746 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3356218249.9999833,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3349714999.999996 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728670313024,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3790.6076100670916,
            "unit": "ns/iter",
            "extra": "iterations: 178185\ncpu: 3788.798159216545 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 785.7815782549118,
            "unit": "ns/iter",
            "extra": "iterations: 862611\ncpu: 785.6264295261713 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 962.7349092331559,
            "unit": "ns/iter",
            "extra": "iterations: 713201\ncpu: 962.7342081685254 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 152.66719635201167,
            "unit": "ns/iter",
            "extra": "iterations: 4522811\ncpu: 152.60619999376482 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 104.73793905209541,
            "unit": "ns/iter",
            "extra": "iterations: 6798823\ncpu: 104.71194793569414 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2626.6786192093177,
            "unit": "ns/iter",
            "extra": "iterations: 264602\ncpu: 2626.60902033998 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.74441296508522,
            "unit": "ns/iter",
            "extra": "iterations: 30545943\ncpu: 22.743674994744783 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1284.4386312735396,
            "unit": "ns/iter",
            "extra": "iterations: 548276\ncpu: 1284.307538538981 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 998.7294266385628,
            "unit": "ns/iter",
            "extra": "iterations: 707128\ncpu: 998.7300743288364 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1380.5551699963892,
            "unit": "ns/iter",
            "extra": "iterations: 510658\ncpu: 1380.2290378296195 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 226.83082476933222,
            "unit": "ns/iter",
            "extra": "iterations: 3170074\ncpu: 226.81174004139936 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1406.9620198747607,
            "unit": "ns/iter",
            "extra": "iterations: 507081\ncpu: 1406.82652278433 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 118.07772986176279,
            "unit": "ns/iter",
            "extra": "iterations: 6201825\ncpu: 117.41301955472788 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 482.61263555218864,
            "unit": "ns/iter",
            "extra": "iterations: 1371796\ncpu: 474.65512364812275 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 371.07878973275103,
            "unit": "ns/iter",
            "extra": "iterations: 1735848\ncpu: 371.0653236919356 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 775.8141289275607,
            "unit": "ns/iter",
            "extra": "iterations: 887739\ncpu: 775.6525285021821 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 172.74703380579237,
            "unit": "ns/iter",
            "extra": "iterations: 3989877\ncpu: 172.74392167979175 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2924266416.999899,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2923732999.9999986 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728671805786,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3551.688752013014,
            "unit": "ns/iter",
            "extra": "iterations: 194986\ncpu: 3551.6037048813755 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 744.0397844911156,
            "unit": "ns/iter",
            "extra": "iterations: 951979\ncpu: 743.9019138027209 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 937.3785880619843,
            "unit": "ns/iter",
            "extra": "iterations: 745911\ncpu: 937.2780398733898 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 150.5257586176018,
            "unit": "ns/iter",
            "extra": "iterations: 4634779\ncpu: 150.5172091269074 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 103.17953288754978,
            "unit": "ns/iter",
            "extra": "iterations: 6820884\ncpu: 103.17284387185008 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2621.7340463275395,
            "unit": "ns/iter",
            "extra": "iterations: 264892\ncpu: 2621.128610905576 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.88607193912936,
            "unit": "ns/iter",
            "extra": "iterations: 30879855\ncpu: 22.884822483784347 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1346.6142793359759,
            "unit": "ns/iter",
            "extra": "iterations: 542014\ncpu: 1343.550166600864 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1044.5586643214917,
            "unit": "ns/iter",
            "extra": "iterations: 642520\ncpu: 1044.0873435846358 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1325.172184592178,
            "unit": "ns/iter",
            "extra": "iterations: 505806\ncpu: 1324.8280961475357 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 212.35822183661762,
            "unit": "ns/iter",
            "extra": "iterations: 3294118\ncpu: 212.35699510460822 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1356.5620734564156,
            "unit": "ns/iter",
            "extra": "iterations: 511378\ncpu: 1356.501452936967 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 105.39928281431875,
            "unit": "ns/iter",
            "extra": "iterations: 6674422\ncpu: 105.38950039419151 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 404.6109611596966,
            "unit": "ns/iter",
            "extra": "iterations: 1732043\ncpu: 404.44781105318987 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 365.12705530099447,
            "unit": "ns/iter",
            "extra": "iterations: 1917724\ncpu: 365.11719100350194 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 775.7710895558438,
            "unit": "ns/iter",
            "extra": "iterations: 891152\ncpu: 775.642090238255 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 168.23663315801025,
            "unit": "ns/iter",
            "extra": "iterations: 4171161\ncpu: 168.2162352400209 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2889689000.0000896,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2889511000.0000024 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728672232934,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4008.1294234544694,
            "unit": "ns/iter",
            "extra": "iterations: 177124\ncpu: 4006.966870666879 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 831.302096432552,
            "unit": "ns/iter",
            "extra": "iterations: 869954\ncpu: 828.6196741436901 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1063.6144055040247,
            "unit": "ns/iter",
            "extra": "iterations: 637784\ncpu: 1062.5666369805442 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 195.50810020038,
            "unit": "ns/iter",
            "extra": "iterations: 3465655\ncpu: 195.47185164132046 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 127.32264892292032,
            "unit": "ns/iter",
            "extra": "iterations: 6218905\ncpu: 127.19506086682443 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 3069.2993686638374,
            "unit": "ns/iter",
            "extra": "iterations: 230622\ncpu: 3065.46643425172 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 25.684004030680935,
            "unit": "ns/iter",
            "extra": "iterations: 21871241\ncpu: 25.6464642312707 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1473.2491053346844,
            "unit": "ns/iter",
            "extra": "iterations: 498231\ncpu: 1472.6703075481078 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1091.5889940283591,
            "unit": "ns/iter",
            "extra": "iterations: 641161\ncpu: 1091.1518323790706 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1568.6015840057155,
            "unit": "ns/iter",
            "extra": "iterations: 484973\ncpu: 1568.2254476022392 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 244.84848041496053,
            "unit": "ns/iter",
            "extra": "iterations: 2289737\ncpu: 244.76566522705457 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1519.8101297979056,
            "unit": "ns/iter",
            "extra": "iterations: 456633\ncpu: 1517.4177074368242 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 149.53067588474977,
            "unit": "ns/iter",
            "extra": "iterations: 4523863\ncpu: 146.2705656647871 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 499.2028887454913,
            "unit": "ns/iter",
            "extra": "iterations: 1266709\ncpu: 498.6804388379657 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 413.47871655219967,
            "unit": "ns/iter",
            "extra": "iterations: 1541691\ncpu: 413.28320655695586 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 853.380414189511,
            "unit": "ns/iter",
            "extra": "iterations: 824985\ncpu: 852.2530712679629 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 183.79326281877465,
            "unit": "ns/iter",
            "extra": "iterations: 3834482\ncpu: 183.72416404614856 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3585877875.000051,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3577298000.0000024 ns\nthreads: 1"
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
        "date": 1728673727487,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3819.280295139514,
            "unit": "ns/iter",
            "extra": "iterations: 182422\ncpu: 3817.379482737828 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 792.3342550669632,
            "unit": "ns/iter",
            "extra": "iterations: 885650\ncpu: 792.1413650990801 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1006.3276302216291,
            "unit": "ns/iter",
            "extra": "iterations: 696871\ncpu: 1005.6624540266416 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 161.78395300516235,
            "unit": "ns/iter",
            "extra": "iterations: 4327452\ncpu: 161.69237694606423 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 110.47324714017441,
            "unit": "ns/iter",
            "extra": "iterations: 6346443\ncpu: 110.46124577184405 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2820.1261330169136,
            "unit": "ns/iter",
            "extra": "iterations: 235323\ncpu: 2818.513277495185 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 25.089252041275895,
            "unit": "ns/iter",
            "extra": "iterations: 28717360\ncpu: 25.08200614541164 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1350.7888111138736,
            "unit": "ns/iter",
            "extra": "iterations: 504018\ncpu: 1350.2692364161628 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1029.7599667436,
            "unit": "ns/iter",
            "extra": "iterations: 687988\ncpu: 1029.653133484887 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1390.4813124738794,
            "unit": "ns/iter",
            "extra": "iterations: 508414\ncpu: 1389.8830480671256 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 229.01282622257312,
            "unit": "ns/iter",
            "extra": "iterations: 3073937\ncpu: 228.94320866042457 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1438.1051548213377,
            "unit": "ns/iter",
            "extra": "iterations: 487272\ncpu: 1437.9053177691285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 112.59953004806201,
            "unit": "ns/iter",
            "extra": "iterations: 6213827\ncpu: 112.56718283273729 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 437.081666830102,
            "unit": "ns/iter",
            "extra": "iterations: 1611058\ncpu: 436.2263804282649 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 394.00429231369844,
            "unit": "ns/iter",
            "extra": "iterations: 1778528\ncpu: 393.8976501916197 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 838.4526499069484,
            "unit": "ns/iter",
            "extra": "iterations: 839671\ncpu: 838.3390637523512 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 182.64173518954925,
            "unit": "ns/iter",
            "extra": "iterations: 3858322\ncpu: 182.57703737531475 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3294354875.000181,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3289296999.9999976 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728683233701,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3543.105462567331,
            "unit": "ns/iter",
            "extra": "iterations: 199009\ncpu: 3542.960368626545 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 735.4182687897567,
            "unit": "ns/iter",
            "extra": "iterations: 915452\ncpu: 735.4050239663034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 929.6776409885359,
            "unit": "ns/iter",
            "extra": "iterations: 748839\ncpu: 929.5442678599813 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 152.92999934062297,
            "unit": "ns/iter",
            "extra": "iterations: 4610328\ncpu: 152.9147166969465 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 102.61864724965533,
            "unit": "ns/iter",
            "extra": "iterations: 6783735\ncpu: 102.6042438273311 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2659.7377720412023,
            "unit": "ns/iter",
            "extra": "iterations: 265723\ncpu: 2655.4231285963224 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.89517889210984,
            "unit": "ns/iter",
            "extra": "iterations: 30862429\ncpu: 22.891036865568807 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1265.4607541036683,
            "unit": "ns/iter",
            "extra": "iterations: 561753\ncpu: 1265.4173631471483 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 943.251622040745,
            "unit": "ns/iter",
            "extra": "iterations: 744895\ncpu: 943.1772263204873 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1288.5922011722362,
            "unit": "ns/iter",
            "extra": "iterations: 548903\ncpu: 1288.539140795369 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 212.94841422287342,
            "unit": "ns/iter",
            "extra": "iterations: 3295482\ncpu: 212.94183976729352 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1331.7372766328506,
            "unit": "ns/iter",
            "extra": "iterations: 526767\ncpu: 1331.7026313341569 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 104.86425180126723,
            "unit": "ns/iter",
            "extra": "iterations: 6657790\ncpu: 104.85776811824925 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 404.61464763204816,
            "unit": "ns/iter",
            "extra": "iterations: 1732635\ncpu: 404.5641465167219 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 359.9373018613811,
            "unit": "ns/iter",
            "extra": "iterations: 1931413\ncpu: 359.87435105800716 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 772.4069618084202,
            "unit": "ns/iter",
            "extra": "iterations: 904650\ncpu: 772.3019952467803 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 168.75205441024,
            "unit": "ns/iter",
            "extra": "iterations: 4138779\ncpu: 168.7444533762258 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2869925040.9999876,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2869424999.9999995 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728684592971,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3922.116819403727,
            "unit": "ns/iter",
            "extra": "iterations: 174483\ncpu: 3921.4422035384528 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 833.2211600753941,
            "unit": "ns/iter",
            "extra": "iterations: 833532\ncpu: 833.1305816693299 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 1026.6108307306379,
            "unit": "ns/iter",
            "extra": "iterations: 685180\ncpu: 1026.3317668349919 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 162.04401238093584,
            "unit": "ns/iter",
            "extra": "iterations: 4419052\ncpu: 162.03316910504776 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 109.08897583614379,
            "unit": "ns/iter",
            "extra": "iterations: 6398771\ncpu: 109.06688174963595 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2895.0352397433376,
            "unit": "ns/iter",
            "extra": "iterations: 242113\ncpu: 2893.7066576350758 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 24.719828432684213,
            "unit": "ns/iter",
            "extra": "iterations: 28169468\ncpu: 24.719636167782827 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1684.5109811432278,
            "unit": "ns/iter",
            "extra": "iterations: 479777\ncpu: 1683.2924462823328 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1539.8087679883981,
            "unit": "ns/iter",
            "extra": "iterations: 453559\ncpu: 1466.9822448678144 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 2194.7810803246675,
            "unit": "ns/iter",
            "extra": "iterations: 325069\ncpu: 2152.075405529285 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 296.36045304736155,
            "unit": "ns/iter",
            "extra": "iterations: 2494397\ncpu: 296.07676725076254 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1956.471613035669,
            "unit": "ns/iter",
            "extra": "iterations: 356167\ncpu: 1956.2508598494576 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 146.24298790666086,
            "unit": "ns/iter",
            "extra": "iterations: 4592031\ncpu: 146.19130402211965 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 593.2241670000167,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 592.7670000000003 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 464.00829995957156,
            "unit": "ns/iter",
            "extra": "iterations: 1467718\ncpu: 463.89292766049164 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 934.7600092470249,
            "unit": "ns/iter",
            "extra": "iterations: 692110\ncpu: 934.6736790394605 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 235.19239463152508,
            "unit": "ns/iter",
            "extra": "iterations: 3382558\ncpu: 235.13063190638536 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3810412332.999931,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3799339999.999997 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728685596849,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3549.393265882946,
            "unit": "ns/iter",
            "extra": "iterations: 195898\ncpu: 3548.979571001234 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 734.1725795083421,
            "unit": "ns/iter",
            "extra": "iterations: 957605\ncpu: 734.0709373906782 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 945.2266017646925,
            "unit": "ns/iter",
            "extra": "iterations: 739372\ncpu: 945.118289575478 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 153.6907047478036,
            "unit": "ns/iter",
            "extra": "iterations: 4633828\ncpu: 153.68869971004534 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 103.0077705579607,
            "unit": "ns/iter",
            "extra": "iterations: 6818558\ncpu: 102.99831723951007 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2659.5580418166933,
            "unit": "ns/iter",
            "extra": "iterations: 267023\ncpu: 2659.4113615681026 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.783026745988277,
            "unit": "ns/iter",
            "extra": "iterations: 30817591\ncpu: 22.77958715202628 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1265.7504878534703,
            "unit": "ns/iter",
            "extra": "iterations: 561644\ncpu: 1265.5543369109282 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 946.1034076987258,
            "unit": "ns/iter",
            "extra": "iterations: 741879\ncpu: 946.0707204274545 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1285.5867607536527,
            "unit": "ns/iter",
            "extra": "iterations: 549563\ncpu: 1285.388572374779 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 217.4742164170237,
            "unit": "ns/iter",
            "extra": "iterations: 3266342\ncpu: 217.47447144236565 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1375.888668120108,
            "unit": "ns/iter",
            "extra": "iterations: 511345\ncpu: 1375.8890768463536 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 106.05604820684901,
            "unit": "ns/iter",
            "extra": "iterations: 6641051\ncpu: 106.0411973948101 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 405.4761293396963,
            "unit": "ns/iter",
            "extra": "iterations: 1725256\ncpu: 405.4464960562361 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 362.43916855723046,
            "unit": "ns/iter",
            "extra": "iterations: 1936778\ncpu: 362.40550026900394 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 774.568959249853,
            "unit": "ns/iter",
            "extra": "iterations: 885784\ncpu: 774.540971613847 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 169.54774506262194,
            "unit": "ns/iter",
            "extra": "iterations: 4112132\ncpu: 169.5475728891982 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2858944000.000065,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2858637999.999999 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728835905149,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3601.20531728524,
            "unit": "ns/iter",
            "extra": "iterations: 196905\ncpu: 3600.8989106421873 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 759.0822256651695,
            "unit": "ns/iter",
            "extra": "iterations: 892641\ncpu: 759.072236206941 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 937.3719000425016,
            "unit": "ns/iter",
            "extra": "iterations: 748599\ncpu: 937.3202475557664 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 155.73805638945015,
            "unit": "ns/iter",
            "extra": "iterations: 4632142\ncpu: 155.66815525085354 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 105.68416360676466,
            "unit": "ns/iter",
            "extra": "iterations: 6718108\ncpu: 105.66352907693651 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2637.8901797582394,
            "unit": "ns/iter",
            "extra": "iterations: 264077\ncpu: 2637.6208454352322 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.856555156030144,
            "unit": "ns/iter",
            "extra": "iterations: 30677401\ncpu: 22.852783389309923 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1251.3728065119212,
            "unit": "ns/iter",
            "extra": "iterations: 563657\ncpu: 1251.3620872268054 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 947.204010681582,
            "unit": "ns/iter",
            "extra": "iterations: 742966\ncpu: 947.192738294889 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1290.1556189434955,
            "unit": "ns/iter",
            "extra": "iterations: 547247\ncpu: 1290.0829058907627 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 212.21779049455017,
            "unit": "ns/iter",
            "extra": "iterations: 3300268\ncpu: 212.19094934108418 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1336.24399196807,
            "unit": "ns/iter",
            "extra": "iterations: 524423\ncpu: 1336.2095102617518 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 105.36712688851483,
            "unit": "ns/iter",
            "extra": "iterations: 6630860\ncpu: 105.35843012821873 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 404.58275075378754,
            "unit": "ns/iter",
            "extra": "iterations: 1730951\ncpu: 404.5602677372141 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 367.01093976465825,
            "unit": "ns/iter",
            "extra": "iterations: 1906988\ncpu: 366.9881509479872 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 772.3649948488365,
            "unit": "ns/iter",
            "extra": "iterations: 905621\ncpu: 772.3528937601924 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 170.1775544856989,
            "unit": "ns/iter",
            "extra": "iterations: 4113098\ncpu: 170.1668669212352 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2877265915.9999423,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2876971999.9999986 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728845231925,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3524.4809743153646,
            "unit": "ns/iter",
            "extra": "iterations: 198416\ncpu: 3523.7480848318673 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 732.9016436046949,
            "unit": "ns/iter",
            "extra": "iterations: 958077\ncpu: 732.7657380356695 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 925.0930892596449,
            "unit": "ns/iter",
            "extra": "iterations: 758240\ncpu: 925.076492930999 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 152.13577630639696,
            "unit": "ns/iter",
            "extra": "iterations: 4666418\ncpu: 152.12610614822773 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 103.58019963067537,
            "unit": "ns/iter",
            "extra": "iterations: 6818691\ncpu: 103.54949359048517 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2641.4814997005737,
            "unit": "ns/iter",
            "extra": "iterations: 264266\ncpu: 2640.895915479099 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 23.272336820529222,
            "unit": "ns/iter",
            "extra": "iterations: 30457692\ncpu: 23.268637689290436 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1318.7281112081664,
            "unit": "ns/iter",
            "extra": "iterations: 544925\ncpu: 1315.5938890673026 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 959.7773795244619,
            "unit": "ns/iter",
            "extra": "iterations: 733760\ncpu: 959.665285651985 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1308.460280615523,
            "unit": "ns/iter",
            "extra": "iterations: 542808\ncpu: 1308.458976286273 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 212.77591336091416,
            "unit": "ns/iter",
            "extra": "iterations: 3251836\ncpu: 212.76503489105897 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1357.962821058604,
            "unit": "ns/iter",
            "extra": "iterations: 525916\ncpu: 1357.638862479938 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 105.38767637184328,
            "unit": "ns/iter",
            "extra": "iterations: 6685450\ncpu: 105.38168709660548 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 407.06509162632284,
            "unit": "ns/iter",
            "extra": "iterations: 1724231\ncpu: 406.97853129888034 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 357.7076872471596,
            "unit": "ns/iter",
            "extra": "iterations: 1930470\ncpu: 357.69838433127694 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 772.9132230947268,
            "unit": "ns/iter",
            "extra": "iterations: 906278\ncpu: 772.9008096853294 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 167.93387209758976,
            "unit": "ns/iter",
            "extra": "iterations: 4185752\ncpu: 167.9313537925805 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2959068749.9999146,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2957676000.000003 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728865149410,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3516.411486676567,
            "unit": "ns/iter",
            "extra": "iterations: 198456\ncpu: 3516.315959205064 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 732.0138295153246,
            "unit": "ns/iter",
            "extra": "iterations: 959325\ncpu: 731.9844682459022 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 955.5022610579457,
            "unit": "ns/iter",
            "extra": "iterations: 754514\ncpu: 955.5104345313679 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 151.1132697417725,
            "unit": "ns/iter",
            "extra": "iterations: 4662781\ncpu: 151.0960947983617 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 103.04393029678964,
            "unit": "ns/iter",
            "extra": "iterations: 6842954\ncpu: 103.03357292771508 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2625.8033563695635,
            "unit": "ns/iter",
            "extra": "iterations: 266538\ncpu: 2625.479293759236 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.874123552868728,
            "unit": "ns/iter",
            "extra": "iterations: 30776671\ncpu: 22.866800636105232 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1254.6357367308767,
            "unit": "ns/iter",
            "extra": "iterations: 559458\ncpu: 1254.6017752896548 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 956.6923515662061,
            "unit": "ns/iter",
            "extra": "iterations: 732869\ncpu: 956.6375436810681 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1334.3677486154177,
            "unit": "ns/iter",
            "extra": "iterations: 540845\ncpu: 1334.3323872828598 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 229.887226196462,
            "unit": "ns/iter",
            "extra": "iterations: 3113090\ncpu: 229.37820621954373 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1440.2788727401803,
            "unit": "ns/iter",
            "extra": "iterations: 496567\ncpu: 1440.0372960748512 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 111.91262378203625,
            "unit": "ns/iter",
            "extra": "iterations: 6215261\ncpu: 111.90793113917528 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 429.68226970737396,
            "unit": "ns/iter",
            "extra": "iterations: 1620667\ncpu: 429.6416228626855 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 383.23846201973197,
            "unit": "ns/iter",
            "extra": "iterations: 1822286\ncpu: 383.18792988586966 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 815.6043101366048,
            "unit": "ns/iter",
            "extra": "iterations: 865309\ncpu: 815.1966522941511 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 177.12177016208548,
            "unit": "ns/iter",
            "extra": "iterations: 3956971\ncpu: 177.09985744146235 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2992392166.9999347,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2991936999.9999967 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728868114309,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3533.266938771116,
            "unit": "ns/iter",
            "extra": "iterations: 199188\ncpu: 3532.9487720143807 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 730.8551843685683,
            "unit": "ns/iter",
            "extra": "iterations: 954745\ncpu: 730.7720909771718 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 923.4110057245551,
            "unit": "ns/iter",
            "extra": "iterations: 759532\ncpu: 923.3975658695093 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 150.94379295647778,
            "unit": "ns/iter",
            "extra": "iterations: 4668970\ncpu: 150.93071919502597 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 102.53589905415897,
            "unit": "ns/iter",
            "extra": "iterations: 6838676\ncpu: 102.53315115381992 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2636.4685877907204,
            "unit": "ns/iter",
            "extra": "iterations: 266823\ncpu: 2636.092091011646 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 23.01968460740504,
            "unit": "ns/iter",
            "extra": "iterations: 30368500\ncpu: 23.014505161598386 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1259.424559917334,
            "unit": "ns/iter",
            "extra": "iterations: 561883\ncpu: 1259.2781771294024 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 1006.8325556404641,
            "unit": "ns/iter",
            "extra": "iterations: 731437\ncpu: 1000.2994106122594 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1334.4268583425096,
            "unit": "ns/iter",
            "extra": "iterations: 505437\ncpu: 1328.0824316383653 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 212.0295704015176,
            "unit": "ns/iter",
            "extra": "iterations: 3305738\ncpu: 212.0201298469513 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1382.0347335285323,
            "unit": "ns/iter",
            "extra": "iterations: 517166\ncpu: 1379.2728060235968 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 105.33908357188976,
            "unit": "ns/iter",
            "extra": "iterations: 6694273\ncpu: 105.3291373088609 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 404.30831391298494,
            "unit": "ns/iter",
            "extra": "iterations: 1731002\ncpu: 404.2548766552554 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 365.0862473394832,
            "unit": "ns/iter",
            "extra": "iterations: 1951666\ncpu: 365.05939028501723 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 769.2332751534865,
            "unit": "ns/iter",
            "extra": "iterations: 906959\ncpu: 769.1097392495149 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 167.12955518767072,
            "unit": "ns/iter",
            "extra": "iterations: 4187204\ncpu: 167.12393282008688 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 2974512000.0000043,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2973321999.9999995 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728919309547,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3523.6964691181406,
            "unit": "ns/iter",
            "extra": "iterations: 196863\ncpu: 3523.66366457892 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Meta_1_No_Callback",
            "value": 735.1821370294781,
            "unit": "ns/iter",
            "extra": "iterations: 959706\ncpu: 735.1574336307158 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Required_Properties",
            "value": 940.7833279710044,
            "unit": "ns/iter",
            "extra": "iterations: 752146\ncpu: 940.5780260747259 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 154.92182004153105,
            "unit": "ns/iter",
            "extra": "iterations: 4665454\ncpu: 154.85052472921177 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 104.38335258927604,
            "unit": "ns/iter",
            "extra": "iterations: 6637777\ncpu: 104.24529175957547 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Items_Schema",
            "value": 2738.9844976832073,
            "unit": "ns/iter",
            "extra": "iterations: 248608\ncpu: 2721.690371991247 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Object",
            "value": 22.866456707887895,
            "unit": "ns/iter",
            "extra": "iterations: 30579971\ncpu: 22.862121092266573 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Optional",
            "value": 1291.6957393143712,
            "unit": "ns/iter",
            "extra": "iterations: 561811\ncpu: 1291.256312176159 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Closed",
            "value": 982.6517053457628,
            "unit": "ns/iter",
            "extra": "iterations: 702790\ncpu: 982.4741387896823 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Properties_Triad_Required",
            "value": 1278.83336046655,
            "unit": "ns/iter",
            "extra": "iterations: 546683\ncpu: 1278.735574363938 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Non_Recursive_Ref",
            "value": 212.23583286743258,
            "unit": "ns/iter",
            "extra": "iterations: 3301762\ncpu: 212.21426620089497 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Pattern_Properties_True",
            "value": 1379.7245242549145,
            "unit": "ns/iter",
            "extra": "iterations: 513773\ncpu: 1379.7163338672926 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Ref_To_Single_Property",
            "value": 112.73003280725433,
            "unit": "ns/iter",
            "extra": "iterations: 6373893\ncpu: 112.6798018102908 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Additional_Properties_Type",
            "value": 436.5870205396269,
            "unit": "ns/iter",
            "extra": "iterations: 1591607\ncpu: 436.41112410287076 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft4_Nested_Oneof",
            "value": 390.5832696520224,
            "unit": "ns/iter",
            "extra": "iterations: 1808486\ncpu: 390.470813708261 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft6_Property_Names",
            "value": 842.3115400026425,
            "unit": "ns/iter",
            "extra": "iterations: 841083\ncpu: 840.2404994513021 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Validate_Draft7_If_Then_Else",
            "value": 189.62156985953288,
            "unit": "ns/iter",
            "extra": "iterations: 3622082\ncpu: 186.83425720345417 ns\nthreads: 1"
          },
          {
            "name": "JSONSchema_Compiler_Draft6_AdaptiveCard",
            "value": 3206402582.999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3143730999.999999 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728920428684,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3779.9362501216497,
            "unit": "ns/iter",
            "extra": "iterations: 174667\ncpu: 3779.6149243989994 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 2942357500.000071,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2941718000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 733.8604646914176,
            "unit": "ns/iter",
            "extra": "iterations: 930381\ncpu: 733.7338144265619 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 965.2349010684638,
            "unit": "ns/iter",
            "extra": "iterations: 748447\ncpu: 963.0808861549315 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 156.1443111902124,
            "unit": "ns/iter",
            "extra": "iterations: 4533356\ncpu: 156.10907239581462 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 103.49308948127563,
            "unit": "ns/iter",
            "extra": "iterations: 6745948\ncpu: 103.48123051052275 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2623.4190461536814,
            "unit": "ns/iter",
            "extra": "iterations: 266479\ncpu: 2623.3249149088683 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 22.874136504631984,
            "unit": "ns/iter",
            "extra": "iterations: 30722371\ncpu: 22.87310442283249 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1249.2255406981187,
            "unit": "ns/iter",
            "extra": "iterations: 562005\ncpu: 1249.2202026672371 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 948.0999191849303,
            "unit": "ns/iter",
            "extra": "iterations: 737486\ncpu: 948.0790143812893 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1293.4442974506828,
            "unit": "ns/iter",
            "extra": "iterations: 547264\ncpu: 1293.101684013569 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 214.45911599640075,
            "unit": "ns/iter",
            "extra": "iterations: 3291593\ncpu: 214.43538128802717 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1353.954941860429,
            "unit": "ns/iter",
            "extra": "iterations: 516000\ncpu: 1353.7112403100818 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 105.66417795742133,
            "unit": "ns/iter",
            "extra": "iterations: 6629541\ncpu: 105.61470243565857 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 405.09846581951746,
            "unit": "ns/iter",
            "extra": "iterations: 1731413\ncpu: 405.0731974404723 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 362.67111242367594,
            "unit": "ns/iter",
            "extra": "iterations: 1950399\ncpu: 362.5929873836078 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 813.3226603598522,
            "unit": "ns/iter",
            "extra": "iterations: 867206\ncpu: 802.782729824286 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 173.50489611225402,
            "unit": "ns/iter",
            "extra": "iterations: 4179030\ncpu: 173.17008970981334 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728925972102,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3524.4735654568276,
            "unit": "ns/iter",
            "extra": "iterations: 197223\ncpu: 3524.320185779548 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 2950641499.9999604,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2906560000.0000005 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 765.858422591543,
            "unit": "ns/iter",
            "extra": "iterations: 912801\ncpu: 755.3683661608608 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 933.4179259934622,
            "unit": "ns/iter",
            "extra": "iterations: 748879\ncpu: 933.2508990103885 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 152.11738412611282,
            "unit": "ns/iter",
            "extra": "iterations: 4657197\ncpu: 152.10715801800956 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 104.03532234549847,
            "unit": "ns/iter",
            "extra": "iterations: 6685513\ncpu: 104.02507631052394 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2637.8712793300565,
            "unit": "ns/iter",
            "extra": "iterations: 265342\ncpu: 2637.8259001590454 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 23.52449118359853,
            "unit": "ns/iter",
            "extra": "iterations: 30622244\ncpu: 23.154834766518118 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1315.9646994450834,
            "unit": "ns/iter",
            "extra": "iterations: 542796\ncpu: 1281.8241107156252 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 975.1195987456857,
            "unit": "ns/iter",
            "extra": "iterations: 739481\ncpu: 955.1171700151842 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1348.3031815452437,
            "unit": "ns/iter",
            "extra": "iterations: 534363\ncpu: 1317.0728512265964 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 212.59035981158456,
            "unit": "ns/iter",
            "extra": "iterations: 3214460\ncpu: 212.54300877907954 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1353.841369304453,
            "unit": "ns/iter",
            "extra": "iterations: 527275\ncpu: 1353.730027025744 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 106.56729954044972,
            "unit": "ns/iter",
            "extra": "iterations: 6580617\ncpu: 106.55034322769401 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 404.5404972901826,
            "unit": "ns/iter",
            "extra": "iterations: 1729091\ncpu: 404.46569902914314 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 367.9497753030654,
            "unit": "ns/iter",
            "extra": "iterations: 1895442\ncpu: 367.9199891107195 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 783.5318242188841,
            "unit": "ns/iter",
            "extra": "iterations: 890721\ncpu: 781.7330005692016 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 178.17315395495953,
            "unit": "ns/iter",
            "extra": "iterations: 4078232\ncpu: 172.13709274018814 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 2954.559862047694,
            "unit": "ns/iter",
            "extra": "iterations: 233704\ncpu: 2925.7094444254267 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728927557061,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3744.347395492898,
            "unit": "ns/iter",
            "extra": "iterations: 182357\ncpu: 3743.9473121404712 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 4385005874.999933,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4381578999.999999 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 815.4006179948369,
            "unit": "ns/iter",
            "extra": "iterations: 835282\ncpu: 815.2073192047723 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1020.2027507430499,
            "unit": "ns/iter",
            "extra": "iterations: 652042\ncpu: 1019.9818416605069 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 163.2750773378874,
            "unit": "ns/iter",
            "extra": "iterations: 4210096\ncpu: 163.2706237577478 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 129.62172458496516,
            "unit": "ns/iter",
            "extra": "iterations: 6103196\ncpu: 129.50690097450595 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2857.514006019123,
            "unit": "ns/iter",
            "extra": "iterations: 241896\ncpu: 2856.0455733042218 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 27.576311768757492,
            "unit": "ns/iter",
            "extra": "iterations: 27752338\ncpu: 26.8751771472371 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1397.249282524177,
            "unit": "ns/iter",
            "extra": "iterations: 508728\ncpu: 1381.8504190844635 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1012.4670168982035,
            "unit": "ns/iter",
            "extra": "iterations: 713623\ncpu: 1012.35526321321 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1337.7267537045823,
            "unit": "ns/iter",
            "extra": "iterations: 527740\ncpu: 1337.4597339599043 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 227.36815983058673,
            "unit": "ns/iter",
            "extra": "iterations: 3136271\ncpu: 226.94403640501662 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1420.3377892113526,
            "unit": "ns/iter",
            "extra": "iterations: 485501\ncpu: 1420.209227169456 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 108.02501573849497,
            "unit": "ns/iter",
            "extra": "iterations: 6295077\ncpu: 107.99740813337158 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 412.77045836785663,
            "unit": "ns/iter",
            "extra": "iterations: 1660653\ncpu: 411.75730269959934 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 372.34261879019726,
            "unit": "ns/iter",
            "extra": "iterations: 1860149\ncpu: 372.3244750823716 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 782.7082091811931,
            "unit": "ns/iter",
            "extra": "iterations: 865202\ncpu: 782.5837203335167 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 169.62069197717125,
            "unit": "ns/iter",
            "extra": "iterations: 4143287\ncpu: 169.45290055938688 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 2914.6049452280754,
            "unit": "ns/iter",
            "extra": "iterations: 241364\ncpu: 2913.9308264695624 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728931758123,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3540.91867146052,
            "unit": "ns/iter",
            "extra": "iterations: 194409\ncpu: 3540.453374072189 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 2960908625.000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2950900000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 745.5678371553371,
            "unit": "ns/iter",
            "extra": "iterations: 945588\ncpu: 745.4800610836855 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 947.0852195745583,
            "unit": "ns/iter",
            "extra": "iterations: 743984\ncpu: 947.0620335921203 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 152.44306825096706,
            "unit": "ns/iter",
            "extra": "iterations: 4617810\ncpu: 152.41272378032016 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 103.79994996048373,
            "unit": "ns/iter",
            "extra": "iterations: 6830601\ncpu: 103.78998861154402 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2652.442208440592,
            "unit": "ns/iter",
            "extra": "iterations: 263317\ncpu: 2652.008795482257 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 23.18741068236578,
            "unit": "ns/iter",
            "extra": "iterations: 30623852\ncpu: 23.01007071220175 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1277.0475124883983,
            "unit": "ns/iter",
            "extra": "iterations: 561726\ncpu: 1276.3001890601479 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 952.4354102541563,
            "unit": "ns/iter",
            "extra": "iterations: 730681\ncpu: 952.4101488885041 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1302.9037838235179,
            "unit": "ns/iter",
            "extra": "iterations: 543630\ncpu: 1302.4833066607803 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 215.82698405882326,
            "unit": "ns/iter",
            "extra": "iterations: 3282501\ncpu: 215.82019320024574 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1346.2557963281868,
            "unit": "ns/iter",
            "extra": "iterations: 523823\ncpu: 1345.9680082776065 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 106.75500064102441,
            "unit": "ns/iter",
            "extra": "iterations: 6606703\ncpu: 106.68816200758513 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 408.94927046379894,
            "unit": "ns/iter",
            "extra": "iterations: 1721916\ncpu: 408.31550435677553 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 382.07365532161856,
            "unit": "ns/iter",
            "extra": "iterations: 1780686\ncpu: 379.3886176451092 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 777.5600794746153,
            "unit": "ns/iter",
            "extra": "iterations: 901922\ncpu: 777.4508216896767 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 171.87298481875118,
            "unit": "ns/iter",
            "extra": "iterations: 4135112\ncpu: 171.87345832470837 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 2928.7826381027385,
            "unit": "ns/iter",
            "extra": "iterations: 243948\ncpu: 2925.9227376326094 ns\nthreads: 1"
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
        "date": 1728932950561,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3578.2256592394388,
            "unit": "ns/iter",
            "extra": "iterations: 197652\ncpu: 3577.029324266893 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 2880516416.0000916,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2879990999.9999995 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 747.5869606989121,
            "unit": "ns/iter",
            "extra": "iterations: 936768\ncpu: 747.5031171004982 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 953.4873771749851,
            "unit": "ns/iter",
            "extra": "iterations: 755140\ncpu: 952.9544190481236 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 151.27383878145875,
            "unit": "ns/iter",
            "extra": "iterations: 4641848\ncpu: 151.26626291942355 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 102.4951462867549,
            "unit": "ns/iter",
            "extra": "iterations: 6766881\ncpu: 102.47719739714643 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2624.4081109036174,
            "unit": "ns/iter",
            "extra": "iterations: 265815\ncpu: 2624.3063784963174 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 22.88183169174345,
            "unit": "ns/iter",
            "extra": "iterations: 30337965\ncpu: 22.880835942687703 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1292.1302741238221,
            "unit": "ns/iter",
            "extra": "iterations: 559382\ncpu: 1285.1450350565422 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 958.1898528993017,
            "unit": "ns/iter",
            "extra": "iterations: 748943\ncpu: 957.9006680081134 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1297.027692386275,
            "unit": "ns/iter",
            "extra": "iterations: 547804\ncpu: 1296.768552255918 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 212.8187575786429,
            "unit": "ns/iter",
            "extra": "iterations: 3290510\ncpu: 212.77279205958976 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1357.5800519780398,
            "unit": "ns/iter",
            "extra": "iterations: 519450\ncpu: 1357.4569255943782 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 104.91704674028475,
            "unit": "ns/iter",
            "extra": "iterations: 6588855\ncpu: 104.91428328594263 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 414.3206988465743,
            "unit": "ns/iter",
            "extra": "iterations: 1728391\ncpu: 414.317709360905 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 365.57327859561684,
            "unit": "ns/iter",
            "extra": "iterations: 1825922\ncpu: 365.5643559801565 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 806.4468197787326,
            "unit": "ns/iter",
            "extra": "iterations: 891243\ncpu: 804.1084193648611 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 179.6351941771732,
            "unit": "ns/iter",
            "extra": "iterations: 3995320\ncpu: 179.59387483355565 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 3124.442697206846,
            "unit": "ns/iter",
            "extra": "iterations: 229378\ncpu: 3124.214179215086 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728935396097,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3526.589275693622,
            "unit": "ns/iter",
            "extra": "iterations: 196022\ncpu: 3524.538062054259 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 2886706499.9999456,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2879824000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 788.5864336608646,
            "unit": "ns/iter",
            "extra": "iterations: 928961\ncpu: 762.9459148446498 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 942.5052974646587,
            "unit": "ns/iter",
            "extra": "iterations: 741298\ncpu: 941.7427269465182 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 150.82408162813857,
            "unit": "ns/iter",
            "extra": "iterations: 4602629\ncpu: 150.79316625346078 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 104.59020106228397,
            "unit": "ns/iter",
            "extra": "iterations: 6704788\ncpu: 104.55960725380136 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2642.513595448415,
            "unit": "ns/iter",
            "extra": "iterations: 267516\ncpu: 2641.3784596061564 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 22.882256755094225,
            "unit": "ns/iter",
            "extra": "iterations: 30659933\ncpu: 22.88083930255159 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1250.2354584755092,
            "unit": "ns/iter",
            "extra": "iterations: 557249\ncpu: 1250.0946614529564 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 956.1677598995284,
            "unit": "ns/iter",
            "extra": "iterations: 731927\ncpu: 955.9969778406853 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1298.2150737781965,
            "unit": "ns/iter",
            "extra": "iterations: 539387\ncpu: 1298.1922070795165 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 213.96519620466776,
            "unit": "ns/iter",
            "extra": "iterations: 3235423\ncpu: 213.9343139985098 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1353.4096300934643,
            "unit": "ns/iter",
            "extra": "iterations: 526890\ncpu: 1353.3602839302328 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 106.47670650414248,
            "unit": "ns/iter",
            "extra": "iterations: 6629855\ncpu: 106.46160436389647 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 408.63746901771344,
            "unit": "ns/iter",
            "extra": "iterations: 1711462\ncpu: 408.61322074343417 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 364.492578340592,
            "unit": "ns/iter",
            "extra": "iterations: 1920460\ncpu: 364.4762192391384 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 776.3324258922434,
            "unit": "ns/iter",
            "extra": "iterations: 909150\ncpu: 776.1700489468186 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 172.12546421466942,
            "unit": "ns/iter",
            "extra": "iterations: 4186102\ncpu: 171.82333349736942 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 2955.570011813018,
            "unit": "ns/iter",
            "extra": "iterations: 246337\ncpu: 2905.617101775212 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728937636413,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3534.9168876609747,
            "unit": "ns/iter",
            "extra": "iterations: 198346\ncpu: 3534.3641918667386 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 2791473083.000028,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2789965999.999999 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 732.782291313407,
            "unit": "ns/iter",
            "extra": "iterations: 955644\ncpu: 732.6567215406576 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 932.5981061172159,
            "unit": "ns/iter",
            "extra": "iterations: 756013\ncpu: 932.4866106799748 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 150.47735724008103,
            "unit": "ns/iter",
            "extra": "iterations: 4639695\ncpu: 150.47454627944293 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 104.0341985829844,
            "unit": "ns/iter",
            "extra": "iterations: 6835137\ncpu: 104.03215034314587 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2613.4992278007935,
            "unit": "ns/iter",
            "extra": "iterations: 263533\ncpu: 2613.198347076082 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 24.11290127860588,
            "unit": "ns/iter",
            "extra": "iterations: 30656039\ncpu: 24.10859406852916 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1257.9937641764511,
            "unit": "ns/iter",
            "extra": "iterations: 564320\ncpu: 1257.882052736038 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 943.8705633815686,
            "unit": "ns/iter",
            "extra": "iterations: 741274\ncpu: 943.6847913187298 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1274.5960401168054,
            "unit": "ns/iter",
            "extra": "iterations: 548198\ncpu: 1274.5632052652502 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 211.55723937181915,
            "unit": "ns/iter",
            "extra": "iterations: 3302089\ncpu: 211.5482047879383 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1339.5653426768692,
            "unit": "ns/iter",
            "extra": "iterations: 527144\ncpu: 1339.504955002806 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 104.70214307581404,
            "unit": "ns/iter",
            "extra": "iterations: 6696450\ncpu: 104.69711563589652 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 423.18006574434753,
            "unit": "ns/iter",
            "extra": "iterations: 1737943\ncpu: 410.28158000578765 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 362.30830378683424,
            "unit": "ns/iter",
            "extra": "iterations: 1898423\ncpu: 362.2317049466826 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 762.878492254532,
            "unit": "ns/iter",
            "extra": "iterations: 794723\ncpu: 762.484538637991 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 168.05931057183483,
            "unit": "ns/iter",
            "extra": "iterations: 4186252\ncpu: 168.04005110060294 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1393.247566769046,
            "unit": "ns/iter",
            "extra": "iterations: 500980\ncpu: 1389.7480937362748 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728940143293,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3500.9059127204932,
            "unit": "ns/iter",
            "extra": "iterations: 198741\ncpu: 3500.923312250617 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 2778201125.0000095,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2777857999.9999995 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 735.2472167411423,
            "unit": "ns/iter",
            "extra": "iterations: 953289\ncpu: 734.9460656736835 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 922.418761829693,
            "unit": "ns/iter",
            "extra": "iterations: 757101\ncpu: 922.3683497974497 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 151.32337552298966,
            "unit": "ns/iter",
            "extra": "iterations: 4641817\ncpu: 151.32091592581105 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 102.38053905230021,
            "unit": "ns/iter",
            "extra": "iterations: 6829801\ncpu: 102.37150394279419 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2681.651809392391,
            "unit": "ns/iter",
            "extra": "iterations: 266222\ncpu: 2676.3152556888663 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 22.887007061892838,
            "unit": "ns/iter",
            "extra": "iterations: 30357437\ncpu: 22.885825308638502 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1259.2297078353427,
            "unit": "ns/iter",
            "extra": "iterations: 564134\ncpu: 1259.2061460574982 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 950.7911563729059,
            "unit": "ns/iter",
            "extra": "iterations: 744016\ncpu: 950.725522031784 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1296.8052612596975,
            "unit": "ns/iter",
            "extra": "iterations: 532344\ncpu: 1296.6352584043395 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 217.05965570213854,
            "unit": "ns/iter",
            "extra": "iterations: 3308066\ncpu: 213.8881146869496 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1347.8187774134271,
            "unit": "ns/iter",
            "extra": "iterations: 523235\ncpu: 1347.664051525605 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 112.20026637400842,
            "unit": "ns/iter",
            "extra": "iterations: 6689091\ncpu: 110.9291232545651 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 403.6800712326485,
            "unit": "ns/iter",
            "extra": "iterations: 1716629\ncpu: 403.4051620938476 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 369.6462374352687,
            "unit": "ns/iter",
            "extra": "iterations: 1906027\ncpu: 368.70988711072744 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 765.4302272301951,
            "unit": "ns/iter",
            "extra": "iterations: 914447\ncpu: 765.1509600884473 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 167.733672973223,
            "unit": "ns/iter",
            "extra": "iterations: 4172851\ncpu: 167.65659737191655 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1392.8250674356075,
            "unit": "ns/iter",
            "extra": "iterations: 495288\ncpu: 1392.6341845552447 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728941202941,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3530.2243864882716,
            "unit": "ns/iter",
            "extra": "iterations: 198733\ncpu: 3529.8063230565635 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 2806943917.000126,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2806745000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 737.2886017477723,
            "unit": "ns/iter",
            "extra": "iterations: 958182\ncpu: 736.7598222467127 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 917.9042506028255,
            "unit": "ns/iter",
            "extra": "iterations: 760151\ncpu: 917.8860515871191 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 151.95304687273202,
            "unit": "ns/iter",
            "extra": "iterations: 4604869\ncpu: 151.90920740633427 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 103.29480794743064,
            "unit": "ns/iter",
            "extra": "iterations: 6732193\ncpu: 103.26456772703922 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2597.53389105338,
            "unit": "ns/iter",
            "extra": "iterations: 266442\ncpu: 2597.405814398642 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 23.0410932187371,
            "unit": "ns/iter",
            "extra": "iterations: 30543677\ncpu: 23.034652965980516 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1261.4537730530164,
            "unit": "ns/iter",
            "extra": "iterations: 537403\ncpu: 1261.3941492697295 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 947.2013693339338,
            "unit": "ns/iter",
            "extra": "iterations: 748247\ncpu: 947.1698516666288 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1294.0576166574783,
            "unit": "ns/iter",
            "extra": "iterations: 547307\ncpu: 1294.0214541381727 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 214.26688078417757,
            "unit": "ns/iter",
            "extra": "iterations: 3310021\ncpu: 214.25664671009645 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1344.3321173359636,
            "unit": "ns/iter",
            "extra": "iterations: 513159\ncpu: 1344.287053330446 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 106.86452051684479,
            "unit": "ns/iter",
            "extra": "iterations: 6598918\ncpu: 106.86357975655996 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 406.4513217616606,
            "unit": "ns/iter",
            "extra": "iterations: 1736546\ncpu: 406.4067407370719 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 363.58638405782585,
            "unit": "ns/iter",
            "extra": "iterations: 1911759\ncpu: 363.5772082150539 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 773.5876974158098,
            "unit": "ns/iter",
            "extra": "iterations: 907159\ncpu: 773.5082824510376 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 170.56688689981095,
            "unit": "ns/iter",
            "extra": "iterations: 4090816\ncpu: 170.55570331200406 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1382.538391513864,
            "unit": "ns/iter",
            "extra": "iterations: 503119\ncpu: 1382.5079156223467 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1728944431178,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3517.5772619918616,
            "unit": "ns/iter",
            "extra": "iterations: 196895\ncpu: 3517.260468777776 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 2785286249.9998994,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2785122999.9999995 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 733.9752485867962,
            "unit": "ns/iter",
            "extra": "iterations: 955501\ncpu: 733.9437635334764 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 921.2982006845506,
            "unit": "ns/iter",
            "extra": "iterations: 753620\ncpu: 921.220243624108 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 150.85305973803213,
            "unit": "ns/iter",
            "extra": "iterations: 4665236\ncpu: 150.8315978012688 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 102.60345196884451,
            "unit": "ns/iter",
            "extra": "iterations: 6811591\ncpu: 102.6026078195241 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2600.1449487333302,
            "unit": "ns/iter",
            "extra": "iterations: 266646\ncpu: 2599.6414722140985 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 22.943714489124062,
            "unit": "ns/iter",
            "extra": "iterations: 30643961\ncpu: 22.93339297749403 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1279.575190411158,
            "unit": "ns/iter",
            "extra": "iterations: 562073\ncpu: 1278.00837257794 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 944.9636587669515,
            "unit": "ns/iter",
            "extra": "iterations: 736904\ncpu: 944.9507669927166 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1288.9034460714608,
            "unit": "ns/iter",
            "extra": "iterations: 550656\ncpu: 1288.8518421664376 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 212.64498845166887,
            "unit": "ns/iter",
            "extra": "iterations: 3297873\ncpu: 212.63826714976554 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1345.3192617057448,
            "unit": "ns/iter",
            "extra": "iterations: 530737\ncpu: 1345.1332769337744 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 105.01366339911623,
            "unit": "ns/iter",
            "extra": "iterations: 6603774\ncpu: 104.98723911508792 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 403.8227846055116,
            "unit": "ns/iter",
            "extra": "iterations: 1732073\ncpu: 403.82016231417396 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 383.77847402168663,
            "unit": "ns/iter",
            "extra": "iterations: 1929241\ncpu: 383.7545438853938 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 781.2874907987141,
            "unit": "ns/iter",
            "extra": "iterations: 908843\ncpu: 781.1525202922811 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 167.85894918574206,
            "unit": "ns/iter",
            "extra": "iterations: 4180777\ncpu: 167.85420509154102 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1396.9883452621266,
            "unit": "ns/iter",
            "extra": "iterations: 502285\ncpu: 1393.8421414137354 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1729004534494,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3555.9688679343117,
            "unit": "ns/iter",
            "extra": "iterations: 198734\ncpu: 3555.4962915253554 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 2826195292.0000796,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2825701999.999999 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 795.5424290737639,
            "unit": "ns/iter",
            "extra": "iterations: 955253\ncpu: 764.8622930260358 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 933.8698933354743,
            "unit": "ns/iter",
            "extra": "iterations: 761921\ncpu: 930.6030415226774 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 152.13527279280416,
            "unit": "ns/iter",
            "extra": "iterations: 4627028\ncpu: 152.09914441840422 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 109.04279064286119,
            "unit": "ns/iter",
            "extra": "iterations: 6720301\ncpu: 109.03574110742966 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2621.3753428559608,
            "unit": "ns/iter",
            "extra": "iterations: 266876\ncpu: 2621.127414979245 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 22.845915829835345,
            "unit": "ns/iter",
            "extra": "iterations: 30711857\ncpu: 22.845834428051706 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1375.6773915712952,
            "unit": "ns/iter",
            "extra": "iterations: 541046\ncpu: 1375.1529444816154 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 955.9040262158916,
            "unit": "ns/iter",
            "extra": "iterations: 703390\ncpu: 955.6917215200694 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1290.8760691448272,
            "unit": "ns/iter",
            "extra": "iterations: 550323\ncpu: 1290.569356541524 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 211.66774765879478,
            "unit": "ns/iter",
            "extra": "iterations: 3309614\ncpu: 211.66788634565927 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1367.5307333719707,
            "unit": "ns/iter",
            "extra": "iterations: 529213\ncpu: 1366.9940080837011 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 104.92424825409267,
            "unit": "ns/iter",
            "extra": "iterations: 6489593\ncpu: 104.88870411441806 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 403.4996873759292,
            "unit": "ns/iter",
            "extra": "iterations: 1733712\ncpu: 403.47185691741043 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 363.88798210615164,
            "unit": "ns/iter",
            "extra": "iterations: 1926469\ncpu: 363.84909386032155 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 762.8041876339098,
            "unit": "ns/iter",
            "extra": "iterations: 911541\ncpu: 762.7632766929885 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 169.45065519257193,
            "unit": "ns/iter",
            "extra": "iterations: 4153588\ncpu: 168.8126025017412 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1387.8334780378705,
            "unit": "ns/iter",
            "extra": "iterations: 506780\ncpu: 1387.7066971861532 ns\nthreads: 1"
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
        "date": 1729010175333,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3524.137430614277,
            "unit": "ns/iter",
            "extra": "iterations: 197627\ncpu: 3520.9308444696303 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 2835301709.0000777,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2834758000.0000005 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 759.337220510121,
            "unit": "ns/iter",
            "extra": "iterations: 925436\ncpu: 759.099494724648 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 957.5081893582529,
            "unit": "ns/iter",
            "extra": "iterations: 730277\ncpu: 957.1340737829613 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 154.09277275397656,
            "unit": "ns/iter",
            "extra": "iterations: 4266134\ncpu: 154.07110981511607 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 107.51723724569308,
            "unit": "ns/iter",
            "extra": "iterations: 6364967\ncpu: 107.50142145277428 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2770.5007673496934,
            "unit": "ns/iter",
            "extra": "iterations: 254773\ncpu: 2770.105152429809 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 24.723513526367174,
            "unit": "ns/iter",
            "extra": "iterations: 28534159\ncpu: 24.722403768760078 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1366.0992859536825,
            "unit": "ns/iter",
            "extra": "iterations: 501088\ncpu: 1365.7720799540195 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1136.9570076144857,
            "unit": "ns/iter",
            "extra": "iterations: 650999\ncpu: 1136.2628821242429 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1498.6385151616414,
            "unit": "ns/iter",
            "extra": "iterations: 473533\ncpu: 1498.2799509221127 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 243.88464629643767,
            "unit": "ns/iter",
            "extra": "iterations: 2906530\ncpu: 243.8780951856679 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1512.7812155713955,
            "unit": "ns/iter",
            "extra": "iterations: 445667\ncpu: 1512.5239248138153 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 115.5481177982847,
            "unit": "ns/iter",
            "extra": "iterations: 6027728\ncpu: 115.5402168113758 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 463.417030639078,
            "unit": "ns/iter",
            "extra": "iterations: 1559413\ncpu: 463.40193393283033 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 415.2946221585998,
            "unit": "ns/iter",
            "extra": "iterations: 1617173\ncpu: 415.14791552913795 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 997.9522170715751,
            "unit": "ns/iter",
            "extra": "iterations: 753742\ncpu: 997.8998118719654 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 253.0533771705391,
            "unit": "ns/iter",
            "extra": "iterations: 2766295\ncpu: 251.87299257671475 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1726.704230352896,
            "unit": "ns/iter",
            "extra": "iterations: 405569\ncpu: 1726.6186518200434 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1729017341423,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4498.9886640974255,
            "unit": "ns/iter",
            "extra": "iterations: 149966\ncpu: 4493.898617019856 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1729017350188,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3668.084712979904,
            "unit": "ns/iter",
            "extra": "iterations: 186642\ncpu: 3667.6310798212608 ns\nthreads: 1"
          },
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 2906959750.0000553,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2906631000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 765.9707403634078,
            "unit": "ns/iter",
            "extra": "iterations: 952951\ncpu: 765.6154408778631 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 949.1868602947146,
            "unit": "ns/iter",
            "extra": "iterations: 723380\ncpu: 948.8774917747251 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 159.62493124797413,
            "unit": "ns/iter",
            "extra": "iterations: 4478051\ncpu: 158.67059129072024 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 115.13721563447191,
            "unit": "ns/iter",
            "extra": "iterations: 6130402\ncpu: 112.10830872102659 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2708.5280605688035,
            "unit": "ns/iter",
            "extra": "iterations: 256766\ncpu: 2707.948092816027 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 25.420496872855278,
            "unit": "ns/iter",
            "extra": "iterations: 29277188\ncpu: 24.855904877203407 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1505.8473081788752,
            "unit": "ns/iter",
            "extra": "iterations: 467936\ncpu: 1466.856578677428 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1125.730552807545,
            "unit": "ns/iter",
            "extra": "iterations: 640838\ncpu: 1115.8077392414307 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1478.282298363975,
            "unit": "ns/iter",
            "extra": "iterations: 499886\ncpu: 1474.4481741837155 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 230.91803951837164,
            "unit": "ns/iter",
            "extra": "iterations: 3134291\ncpu: 230.51784279123987 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1389.3683502880751,
            "unit": "ns/iter",
            "extra": "iterations: 490134\ncpu: 1388.1713980258444 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 107.98256831366784,
            "unit": "ns/iter",
            "extra": "iterations: 6517327\ncpu: 107.8976089430528 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 422.516489365579,
            "unit": "ns/iter",
            "extra": "iterations: 1666468\ncpu: 421.94209549778355 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 376.741764462179,
            "unit": "ns/iter",
            "extra": "iterations: 1855829\ncpu: 376.57294933962226 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 791.7741793651253,
            "unit": "ns/iter",
            "extra": "iterations: 882457\ncpu: 791.2056904755717 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 172.61420023003922,
            "unit": "ns/iter",
            "extra": "iterations: 3903810\ncpu: 172.437695482105 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1486.7122320030962,
            "unit": "ns/iter",
            "extra": "iterations: 491097\ncpu: 1479.717856146552 ns\nthreads: 1"
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
        "date": 1729020043806,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3532.1019829007073,
            "unit": "ns/iter",
            "extra": "iterations: 195219\ncpu: 3531.828356871001 ns\nthreads: 1"
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
        "date": 1729105812058,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3547.195959954217,
            "unit": "ns/iter",
            "extra": "iterations: 197275\ncpu: 3546.7342542136607 ns\nthreads: 1"
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
        "date": 1729192198445,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4662.074253758937,
            "unit": "ns/iter",
            "extra": "iterations: 164692\ncpu: 4659.194132076847 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1729210845658,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3532.869988357588,
            "unit": "ns/iter",
            "extra": "iterations: 198413\ncpu: 3532.520550568761 ns\nthreads: 1"
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
        "date": 1729278368758,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4145.3637120985295,
            "unit": "ns/iter",
            "extra": "iterations: 184855\ncpu: 4018.912120310514 ns\nthreads: 1"
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
        "date": 1729537608045,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3809.433548879399,
            "unit": "ns/iter",
            "extra": "iterations: 186039\ncpu: 3808.4917678551274 ns\nthreads: 1"
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
        "date": 1729623991122,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3602.2629149646796,
            "unit": "ns/iter",
            "extra": "iterations: 196071\ncpu: 3599.7878319588312 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1729636232483,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3541.670254705589,
            "unit": "ns/iter",
            "extra": "iterations: 197601\ncpu: 3541.282685816369 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1729696888593,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4129.840005945115,
            "unit": "ns/iter",
            "extra": "iterations: 181663\ncpu: 4016.4810665903374 ns\nthreads: 1"
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
        "date": 1729710369157,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3680.6957566730994,
            "unit": "ns/iter",
            "extra": "iterations: 189309\ncpu: 3680.1419900797114 ns\nthreads: 1"
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
        "date": 1729796904167,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 6337.509693121939,
            "unit": "ns/iter",
            "extra": "iterations: 130247\ncpu: 5946.125438589758 ns\nthreads: 1"
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
        "date": 1729883457087,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3895.843582673354,
            "unit": "ns/iter",
            "extra": "iterations: 174808\ncpu: 3894.221088279714 ns\nthreads: 1"
          }
        ]
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
        "date": 1730123694821,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4088.2933864058946,
            "unit": "ns/iter",
            "extra": "iterations: 177619\ncpu: 4087.929782286806 ns\nthreads: 1"
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
        "date": 1730142355979,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3780.9910256063454,
            "unit": "ns/iter",
            "extra": "iterations: 185305\ncpu: 3780.30814063301 ns\nthreads: 1"
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
        "date": 1730228826765,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4905.39198226981,
            "unit": "ns/iter",
            "extra": "iterations: 127243\ncpu: 4781.26891066699 ns\nthreads: 1"
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
        "date": 1730315285797,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3538.9630124914174,
            "unit": "ns/iter",
            "extra": "iterations: 197418\ncpu: 3538.780658298636 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1730382480152,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4475.124590972704,
            "unit": "ns/iter",
            "extra": "iterations: 141800\ncpu: 4470.373765867419 ns\nthreads: 1"
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
        "date": 1730401728220,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3572.7786713574674,
            "unit": "ns/iter",
            "extra": "iterations: 193852\ncpu: 3571.172853517117 ns\nthreads: 1"
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
        "date": 1730487985878,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4075.7306550110193,
            "unit": "ns/iter",
            "extra": "iterations: 179142\ncpu: 4049.3854037579135 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1730730106632,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4146.914445578215,
            "unit": "ns/iter",
            "extra": "iterations: 178366\ncpu: 3937.6843120325616 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1730730266907,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3914.7531116047085,
            "unit": "ns/iter",
            "extra": "iterations: 154904\ncpu: 3913.6368331353606 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1730730835479,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4029.1647011253103,
            "unit": "ns/iter",
            "extra": "iterations: 175609\ncpu: 3943.0894771908074 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1730732309174,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4799.2133962654725,
            "unit": "ns/iter",
            "extra": "iterations: 173944\ncpu: 4794.6350549602175 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1730732955509,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3569.5962784908124,
            "unit": "ns/iter",
            "extra": "iterations: 195942\ncpu: 3562.748160169845 ns\nthreads: 1"
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
        "date": 1730747963366,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3583.979246355725,
            "unit": "ns/iter",
            "extra": "iterations: 193460\ncpu: 3583.6762121368756 ns\nthreads: 1"
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
        "date": 1730833678763,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3583.0991694422687,
            "unit": "ns/iter",
            "extra": "iterations: 196976\ncpu: 3582.903500934125 ns\nthreads: 1"
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
        "date": 1730920014358,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3704.8568098308556,
            "unit": "ns/iter",
            "extra": "iterations: 191319\ncpu: 3685.760431530583 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1730997884275,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3784.6919881307026,
            "unit": "ns/iter",
            "extra": "iterations: 180295\ncpu: 3784.6307440583514 ns\nthreads: 1"
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
        "date": 1731006422407,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3591.720886034813,
            "unit": "ns/iter",
            "extra": "iterations: 186268\ncpu: 3589.457126291149 ns\nthreads: 1"
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
        "date": 1731092766971,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3567.4211618468216,
            "unit": "ns/iter",
            "extra": "iterations: 197582\ncpu: 3565.7954671984303 ns\nthreads: 1"
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
        "date": 1731351994746,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 5016.32897637866,
            "unit": "ns/iter",
            "extra": "iterations: 151941\ncpu: 4650.3247971252 ns\nthreads: 1"
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
        "date": 1731438470803,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 3636.6741617377447,
            "unit": "ns/iter",
            "extra": "iterations: 187501\ncpu: 3633.9219524162545 ns\nthreads: 1"
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
        "date": 1731524941071,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4032.44801552297,
            "unit": "ns/iter",
            "extra": "iterations: 179342\ncpu: 3899.231635645862 ns\nthreads: 1"
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
        "date": 1731611369354,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4053.746585376284,
            "unit": "ns/iter",
            "extra": "iterations: 181572\ncpu: 4047.3255788337415 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1731688025044,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 4320.334055314654,
            "unit": "ns/iter",
            "extra": "iterations: 150050\ncpu: 4307.577474175277 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1731689359403,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 433.76351834854074,
            "unit": "ns/iter",
            "extra": "iterations: 1622443\ncpu: 433.56222683940223 ns\nthreads: 1"
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
        "date": 1731697710293,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 413.027202383038,
            "unit": "ns/iter",
            "extra": "iterations: 1722827\ncpu: 412.9544057528701 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1731727154172,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 398.74955896365935,
            "unit": "ns/iter",
            "extra": "iterations: 1760059\ncpu: 398.6053876603002 ns\nthreads: 1"
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
        "date": 1731956829489,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 473.9044209458734,
            "unit": "ns/iter",
            "extra": "iterations: 1648991\ncpu: 470.55563068567375 ns\nthreads: 1"
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
        "date": 1732043397761,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 519.9985438180536,
            "unit": "ns/iter",
            "extra": "iterations: 1365214\ncpu: 519.2790287823007 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1732122656669,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 482.98491769418035,
            "unit": "ns/iter",
            "extra": "iterations: 1338058\ncpu: 481.025486189687 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1732126567150,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 591.6807258507649,
            "unit": "ns/iter",
            "extra": "iterations: 1133897\ncpu: 589.6020538020648 ns\nthreads: 1"
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
        "date": 1732129943678,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 387.2749074385508,
            "unit": "ns/iter",
            "extra": "iterations: 1806368\ncpu: 387.0219135857144 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1732132313312,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 419.74190899158344,
            "unit": "ns/iter",
            "extra": "iterations: 1663297\ncpu: 419.3484386733098 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1732216028621,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 406.46369692013263,
            "unit": "ns/iter",
            "extra": "iterations: 1735569\ncpu: 406.41023203341376 ns\nthreads: 1"
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
        "date": 1732216904333,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 521.0397761780495,
            "unit": "ns/iter",
            "extra": "iterations: 1458838\ncpu: 514.9434001582082 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1732224567154,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 382.9604727603543,
            "unit": "ns/iter",
            "extra": "iterations: 1825703\ncpu: 382.89634184749656 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1732294306069,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 389.76219576411887,
            "unit": "ns/iter",
            "extra": "iterations: 1804110\ncpu: 389.61759537943925 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1732300839916,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 593.8703576341865,
            "unit": "ns/iter",
            "extra": "iterations: 1279520\ncpu: 593.4256596223585 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 660.9426629604501,
            "unit": "ns/iter",
            "extra": "iterations: 1518896\ncpu: 660.4217800297059 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 723.0495362324874,
            "unit": "ns/iter",
            "extra": "iterations: 1048909\ncpu: 721.9367933729244 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 708.5634129401699,
            "unit": "ns/iter",
            "extra": "iterations: 1016496\ncpu: 706.1788733059442 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 122.12158331508031,
            "unit": "ns/iter",
            "extra": "iterations: 5608031\ncpu: 121.7782141361201 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 343.53710134783955,
            "unit": "ns/iter",
            "extra": "iterations: 1977664\ncpu: 342.88281528105875 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1732301866185,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 384.61042302992456,
            "unit": "ns/iter",
            "extra": "iterations: 1737844\ncpu: 384.5051684731197 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 368.99145282744615,
            "unit": "ns/iter",
            "extra": "iterations: 1980304\ncpu: 368.86306344884423 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 349.750795257447,
            "unit": "ns/iter",
            "extra": "iterations: 1896870\ncpu: 349.6897520652443 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 348.4266082084778,
            "unit": "ns/iter",
            "extra": "iterations: 1986605\ncpu: 348.35661845208307 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 60.531445827887644,
            "unit": "ns/iter",
            "extra": "iterations: 11471649\ncpu: 60.51841369972186 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 185.89722551801776,
            "unit": "ns/iter",
            "extra": "iterations: 3857621\ncpu: 185.88373507921082 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 1137.662724325978,
            "unit": "ns/iter",
            "extra": "iterations: 651897\ncpu: 1136.3942463303251 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1732301749850,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 366.85956840911064,
            "unit": "ns/iter",
            "extra": "iterations: 1926454\ncpu: 366.8273418415387 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 340.3645341223866,
            "unit": "ns/iter",
            "extra": "iterations: 2035878\ncpu: 340.31115813422986 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 347.1371068308899,
            "unit": "ns/iter",
            "extra": "iterations: 2002351\ncpu: 347.0989851429642 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 347.15825784330866,
            "unit": "ns/iter",
            "extra": "iterations: 2018257\ncpu: 347.14558155874107 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 60.48129783437099,
            "unit": "ns/iter",
            "extra": "iterations: 11580584\ncpu: 60.47397955059953 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 181.24059676356075,
            "unit": "ns/iter",
            "extra": "iterations: 4011438\ncpu: 181.2178076789422 ns\nthreads: 1"
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
        "date": 1732303007931,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 401.0573587260833,
            "unit": "ns/iter",
            "extra": "iterations: 1772372\ncpu: 400.5186270150962 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 382.05915336286586,
            "unit": "ns/iter",
            "extra": "iterations: 1875278\ncpu: 381.6180854252008 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 364.5422455981822,
            "unit": "ns/iter",
            "extra": "iterations: 1862123\ncpu: 364.3674451150647 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 386.94957672190924,
            "unit": "ns/iter",
            "extra": "iterations: 1802243\ncpu: 386.26145308928943 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 63.4227748098011,
            "unit": "ns/iter",
            "extra": "iterations: 10417132\ncpu: 63.37876874364265 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 192.19386703054047,
            "unit": "ns/iter",
            "extra": "iterations: 3579995\ncpu: 190.7198194410885 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 1149.931293690851,
            "unit": "ns/iter",
            "extra": "iterations: 596379\ncpu: 1145.570182719377 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1732304047621,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 424.1500723803634,
            "unit": "ns/iter",
            "extra": "iterations: 1654455\ncpu: 423.091592095282 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 0.5284643388639568,
            "unit": "ns/iter",
            "extra": "iterations: 1365960270\ncpu: 0.5266595345412204 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 0.5212118330000521,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 0.5201020000000001 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 0.5584152790172275,
            "unit": "ns/iter",
            "extra": "iterations: 1337204860\ncpu: 0.5280604499149063 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 5.508468684834418,
            "unit": "ns/iter",
            "extra": "iterations: 122637047\ncpu: 5.467344627109298 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 187.96747283924176,
            "unit": "ns/iter",
            "extra": "iterations: 3757260\ncpu: 187.57285894508217 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 1166.7679914258952,
            "unit": "ns/iter",
            "extra": "iterations: 627938\ncpu: 1163.6976898993219 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1732304948233,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 364.01402640480353,
            "unit": "ns/iter",
            "extra": "iterations: 1924727\ncpu: 363.99395862374257 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 0.508767552119334,
            "unit": "ns/iter",
            "extra": "iterations: 1375029465\ncpu: 0.5087229167121883 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 0.5091406893571809,
            "unit": "ns/iter",
            "extra": "iterations: 1375705049\ncpu: 0.5088656180399029 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 0.5089568204759112,
            "unit": "ns/iter",
            "extra": "iterations: 1375948422\ncpu: 0.5089224194771457 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 0.5140256121379414,
            "unit": "ns/iter",
            "extra": "iterations: 1369166373\ncpu: 0.513944845474232 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 5.027056534957441,
            "unit": "ns/iter",
            "extra": "iterations: 137662491\ncpu: 5.026837702653515 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 178.34562366014148,
            "unit": "ns/iter",
            "extra": "iterations: 3853437\ncpu: 178.28914810336838 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 1102.9937930056624,
            "unit": "ns/iter",
            "extra": "iterations: 627679\ncpu: 1102.9762028042992 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1732306445254,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 439.36328266983935,
            "unit": "ns/iter",
            "extra": "iterations: 1383837\ncpu: 438.8081833337307 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.5149264201487673,
            "unit": "ns/iter",
            "extra": "iterations: 490969665\ncpu: 1.512969238130018 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.7893236404029513,
            "unit": "ns/iter",
            "extra": "iterations: 407265619\ncpu: 1.7843710986072707 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.4494625242484989,
            "unit": "ns/iter",
            "extra": "iterations: 463785016\ncpu: 1.4487725493917216 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.442267248097392,
            "unit": "ns/iter",
            "extra": "iterations: 431770939\ncpu: 1.4419381754639125 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.444898924414663,
            "unit": "ns/iter",
            "extra": "iterations: 93195404\ncpu: 6.433686365048647 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 204.89587334221477,
            "unit": "ns/iter",
            "extra": "iterations: 3517447\ncpu: 204.81929080949908 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 7.926352726152195,
            "unit": "ns/iter",
            "extra": "iterations: 82510196\ncpu: 7.909713364394391 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.0993113281652787,
            "unit": "ns/iter",
            "extra": "iterations: 318913870\ncpu: 2.0787963847417443 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 1254.4478455422943,
            "unit": "ns/iter",
            "extra": "iterations: 591541\ncpu: 1253.7000816511443 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
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
        "date": 1732306664932,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 367.7757234696144,
            "unit": "ns/iter",
            "extra": "iterations: 1863347\ncpu: 367.7216320953639 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.304143453683124,
            "unit": "ns/iter",
            "extra": "iterations: 532311296\ncpu: 1.3037916069321955 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.612426632353917,
            "unit": "ns/iter",
            "extra": "iterations: 416485694\ncpu: 1.6121586159451617 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.5912924555097048,
            "unit": "ns/iter",
            "extra": "iterations: 400187516\ncpu: 1.5909666707344272 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.5938783992794805,
            "unit": "ns/iter",
            "extra": "iterations: 441684965\ncpu: 1.5937468009580114 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.342286267038851,
            "unit": "ns/iter",
            "extra": "iterations: 532996277\ncpu: 1.3422795446655615 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.3556453744141759,
            "unit": "ns/iter",
            "extra": "iterations: 532436811\ncpu: 1.3551016479211835 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 5.80856002986877,
            "unit": "ns/iter",
            "extra": "iterations: 115740741\ncpu: 5.808317746989371 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 180.8948497054351,
            "unit": "ns/iter",
            "extra": "iterations: 3864478\ncpu: 180.88678470934542 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.089724178957071,
            "unit": "ns/iter",
            "extra": "iterations: 169935910\ncpu: 4.08921810581413 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.0665064006171723,
            "unit": "ns/iter",
            "extra": "iterations: 363933182\ncpu: 2.065903954863891 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 1171.2632097051974,
            "unit": "ns/iter",
            "extra": "iterations: 636937\ncpu: 1171.2665459849263 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "796cda46a7c43312e36920f523e15f15de4ba2f4",
          "message": "Optimise more common regex cases (#1342)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-22T16:25:06-04:00",
          "tree_id": "80e07318cc57916ebe624ead7e772bac5265ad98",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/796cda46a7c43312e36920f523e15f15de4ba2f4"
        },
        "date": 1732307288918,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 379.10836724971114,
            "unit": "ns/iter",
            "extra": "iterations: 1891171\ncpu: 368.7456078799854 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.3067218032236487,
            "unit": "ns/iter",
            "extra": "iterations: 530918413\ncpu: 1.3067148982079089 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.2964552878526678,
            "unit": "ns/iter",
            "extra": "iterations: 534110591\ncpu: 1.2963700995024827 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.3061562423479605,
            "unit": "ns/iter",
            "extra": "iterations: 542395996\ncpu: 1.306154553545045 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.2956702137330225,
            "unit": "ns/iter",
            "extra": "iterations: 533923191\ncpu: 1.2956114505990806 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.594730973878928,
            "unit": "ns/iter",
            "extra": "iterations: 444633590\ncpu: 1.5946635970530274 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.626491191253163,
            "unit": "ns/iter",
            "extra": "iterations: 444455732\ncpu: 1.6168921857891558 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.573510482571907,
            "unit": "ns/iter",
            "extra": "iterations: 437754445\ncpu: 1.5731604964056944 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.5849405840329585,
            "unit": "ns/iter",
            "extra": "iterations: 433519747\ncpu: 1.5849105023582646 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.2975361592650982,
            "unit": "ns/iter",
            "extra": "iterations: 537168203\ncpu: 1.2974632454184936 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.294631154222075,
            "unit": "ns/iter",
            "extra": "iterations: 534947346\ncpu: 1.2945498378077778 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 5.663032155815288,
            "unit": "ns/iter",
            "extra": "iterations: 122738112\ncpu: 5.662324347958037 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 177.89993295912626,
            "unit": "ns/iter",
            "extra": "iterations: 3888673\ncpu: 177.8730173506488 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.086734449096119,
            "unit": "ns/iter",
            "extra": "iterations: 168892835\ncpu: 4.08650254464613 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 1.893098869991246,
            "unit": "ns/iter",
            "extra": "iterations: 367602653\ncpu: 1.8930521701104253 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 1074.74238565365,
            "unit": "ns/iter",
            "extra": "iterations: 629010\ncpu: 1074.4821227007521 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "26c9c31e452a42a614d304525c73513b06cb38b5",
          "message": "Add more regex test cases (#1344)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-22T20:38:50-04:00",
          "tree_id": "f204f8ac605cc3ff05a7379b85ecbe8616e5b37f",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/26c9c31e452a42a614d304525c73513b06cb38b5"
        },
        "date": 1732322701617,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 394.94101752669593,
            "unit": "ns/iter",
            "extra": "iterations: 1787904\ncpu: 394.77734822451316 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.3443870827116853,
            "unit": "ns/iter",
            "extra": "iterations: 520322303\ncpu: 1.3440784605383322 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.347513420269607,
            "unit": "ns/iter",
            "extra": "iterations: 519681064\ncpu: 1.3471223958239131 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.3767029021486035,
            "unit": "ns/iter",
            "extra": "iterations: 522091948\ncpu: 1.375636997948876 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.386537150860905,
            "unit": "ns/iter",
            "extra": "iterations: 507551643\ncpu: 1.385596933236604 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.6291540160744227,
            "unit": "ns/iter",
            "extra": "iterations: 428265525\ncpu: 1.628914678574699 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.6363508176586168,
            "unit": "ns/iter",
            "extra": "iterations: 429748413\ncpu: 1.6360851575733448 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.6476545793805824,
            "unit": "ns/iter",
            "extra": "iterations: 428082192\ncpu: 1.6467982391568425 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.6299907405930194,
            "unit": "ns/iter",
            "extra": "iterations: 420781813\ncpu: 1.6295428623955281 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.3594908553682095,
            "unit": "ns/iter",
            "extra": "iterations: 518422514\ncpu: 1.3589861184153758 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.357460985022868,
            "unit": "ns/iter",
            "extra": "iterations: 511206374\ncpu: 1.3560883339064131 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 5.705047790630057,
            "unit": "ns/iter",
            "extra": "iterations: 124256679\ncpu: 5.703178337801864 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 178.7504781241652,
            "unit": "ns/iter",
            "extra": "iterations: 4037654\ncpu: 178.7263098819267 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.112952193486797,
            "unit": "ns/iter",
            "extra": "iterations: 171404365\ncpu: 4.1123865194448355 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 1.934183371030364,
            "unit": "ns/iter",
            "extra": "iterations: 369677958\ncpu: 1.930693958226207 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 1147.411150470411,
            "unit": "ns/iter",
            "extra": "iterations: 626987\ncpu: 1140.5914317202767 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0508592a5fea1e4d9e7c506a5e7d9a5c22332c93",
          "message": "Consider `@` as a valid regex prefix character (#1345)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-22T20:40:59-04:00",
          "tree_id": "f4efd687e6f6fc45f95b033965c2c442fa54602e",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/0508592a5fea1e4d9e7c506a5e7d9a5c22332c93"
        },
        "date": 1732322845144,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 562.4802607851881,
            "unit": "ns/iter",
            "extra": "iterations: 1145157\ncpu: 555.9115474996004 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.58412171094837,
            "unit": "ns/iter",
            "extra": "iterations: 463705137\ncpu: 1.578220600993688 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.6285211965708886,
            "unit": "ns/iter",
            "extra": "iterations: 476491930\ncpu: 1.620915174785855 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.4761823313286448,
            "unit": "ns/iter",
            "extra": "iterations: 436237637\ncpu: 1.4738847487384499 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.4737617166455597,
            "unit": "ns/iter",
            "extra": "iterations: 491835530\ncpu: 1.4677142173929558 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.8119176647914383,
            "unit": "ns/iter",
            "extra": "iterations: 363492855\ncpu: 1.8098237446785603 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.7454378948687215,
            "unit": "ns/iter",
            "extra": "iterations: 380579568\ncpu: 1.7435749467244124 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.7944611407485298,
            "unit": "ns/iter",
            "extra": "iterations: 397876476\ncpu: 1.7878262297668484 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.7651405923857313,
            "unit": "ns/iter",
            "extra": "iterations: 402849875\ncpu: 1.76115233993805 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.4435528439544871,
            "unit": "ns/iter",
            "extra": "iterations: 499760829\ncpu: 1.4428021528674086 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.4371175765343491,
            "unit": "ns/iter",
            "extra": "iterations: 496080960\ncpu: 1.4365921239952457 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.267208269242306,
            "unit": "ns/iter",
            "extra": "iterations: 100876182\ncpu: 6.261527622050582 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 212.53278052373614,
            "unit": "ns/iter",
            "extra": "iterations: 3547213\ncpu: 208.20289055097635 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.5056173084451485,
            "unit": "ns/iter",
            "extra": "iterations: 151725334\ncpu: 4.502946093366331 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.0628513419670793,
            "unit": "ns/iter",
            "extra": "iterations: 342099219\ncpu: 2.0623052050873043 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 1216.7611393213872,
            "unit": "ns/iter",
            "extra": "iterations: 587648\ncpu: 1214.6863428446966 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1e3284f8c8d1dd66e551def983bc0a8a64c69aef",
          "message": "Integrate with Boost.Regex (#1343)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-22T22:43:23-04:00",
          "tree_id": "a77e78aed15693f1b410afd0ca3d2f7d04d6c83a",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/1e3284f8c8d1dd66e551def983bc0a8a64c69aef"
        },
        "date": 1732329990932,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 380.21646720110294,
            "unit": "ns/iter",
            "extra": "iterations: 1857547\ncpu: 379.9220154321801 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.6265884152035879,
            "unit": "ns/iter",
            "extra": "iterations: 431284118\ncpu: 1.6254598088399816 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.5911128508137886,
            "unit": "ns/iter",
            "extra": "iterations: 430745374\ncpu: 1.5902945019207566 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.6423991503201747,
            "unit": "ns/iter",
            "extra": "iterations: 445928040\ncpu: 1.642404007606248 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.578247661780275,
            "unit": "ns/iter",
            "extra": "iterations: 438758689\ncpu: 1.5779653311891462 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.8913694641945342,
            "unit": "ns/iter",
            "extra": "iterations: 370023840\ncpu: 1.8911781467918407 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.8859225798069004,
            "unit": "ns/iter",
            "extra": "iterations: 365054863\ncpu: 1.885637118604826 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.914357574810709,
            "unit": "ns/iter",
            "extra": "iterations: 361844996\ncpu: 1.9120175977229794 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.8829886128473472,
            "unit": "ns/iter",
            "extra": "iterations: 370908089\ncpu: 1.8816063081331185 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.5809801492200655,
            "unit": "ns/iter",
            "extra": "iterations: 438923759\ncpu: 1.5807665585949728 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.5832723839677567,
            "unit": "ns/iter",
            "extra": "iterations: 447398696\ncpu: 1.5832477973963501 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.071410320629888,
            "unit": "ns/iter",
            "extra": "iterations: 117771758\ncpu: 6.070708395131533 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 68.21609926036996,
            "unit": "ns/iter",
            "extra": "iterations: 10425510\ncpu: 68.213641347042 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.491030261500889,
            "unit": "ns/iter",
            "extra": "iterations: 154222389\ncpu: 4.489626989243438 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.200480693678008,
            "unit": "ns/iter",
            "extra": "iterations: 313179488\ncpu: 2.200016368888118 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 698.2866253490246,
            "unit": "ns/iter",
            "extra": "iterations: 1006673\ncpu: 697.8462718280913 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6cb23643cbf12f15be0d491b58862e924b537766",
          "message": "Add a JSON parsing benchmark case (#1346)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-25T11:30:17-04:00",
          "tree_id": "d73d656ad8ec724f6b69706a735cd1776c076a15",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/6cb23643cbf12f15be0d491b58862e924b537766"
        },
        "date": 1732548859770,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 396.54341963245764,
            "unit": "ns/iter",
            "extra": "iterations: 1726051\ncpu: 386.4764135011076 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 24722.623207058536,
            "unit": "ns/iter",
            "extra": "iterations: 32628\ncpu: 24707.122716685048 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.689770990162079,
            "unit": "ns/iter",
            "extra": "iterations: 385796090\ncpu: 1.6889595744736559 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.719721795710113,
            "unit": "ns/iter",
            "extra": "iterations: 416235566\ncpu: 1.717959872751479 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.7142691696604209,
            "unit": "ns/iter",
            "extra": "iterations: 373422955\ncpu: 1.7130039582060494 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.6758627912148827,
            "unit": "ns/iter",
            "extra": "iterations: 434896060\ncpu: 1.6739884927906672 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.081044858732939,
            "unit": "ns/iter",
            "extra": "iterations: 328612270\ncpu: 2.076200623914622 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.192361843820414,
            "unit": "ns/iter",
            "extra": "iterations: 349735949\ncpu: 2.1879163471410825 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.0405482433912887,
            "unit": "ns/iter",
            "extra": "iterations: 328479655\ncpu: 2.0394109339891995 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.122090248461501,
            "unit": "ns/iter",
            "extra": "iterations: 330728453\ncpu: 2.1212598844647936 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.6622343121332024,
            "unit": "ns/iter",
            "extra": "iterations: 424221856\ncpu: 1.661625845133264 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.6599891848256814,
            "unit": "ns/iter",
            "extra": "iterations: 385097815\ncpu: 1.6579735722468323 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.476234063760636,
            "unit": "ns/iter",
            "extra": "iterations: 111871124\ncpu: 6.473359470313365 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 73.62372534617656,
            "unit": "ns/iter",
            "extra": "iterations: 9858461\ncpu: 73.61138822783782 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.74321750181249,
            "unit": "ns/iter",
            "extra": "iterations: 147392004\ncpu: 4.7423400254467 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.3422926372692427,
            "unit": "ns/iter",
            "extra": "iterations: 311493209\ncpu: 2.338166544105941 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 731.2260174824955,
            "unit": "ns/iter",
            "extra": "iterations: 928468\ncpu: 730.8652532989809 ns\nthreads: 1"
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
          "id": "6cb23643cbf12f15be0d491b58862e924b537766",
          "message": "Add a JSON parsing benchmark case (#1346)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-25T15:30:17Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/6cb23643cbf12f15be0d491b58862e924b537766"
        },
        "date": 1732561780977,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 423.5936763913384,
            "unit": "ns/iter",
            "extra": "iterations: 1625148\ncpu: 419.15074811647906 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 21610.162419964465,
            "unit": "ns/iter",
            "extra": "iterations: 30612\ncpu: 21581.536652293224 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.6860911740319793,
            "unit": "ns/iter",
            "extra": "iterations: 415602921\ncpu: 1.6843216556699794 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.6668472129868457,
            "unit": "ns/iter",
            "extra": "iterations: 412099233\ncpu: 1.666520937203488 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.6555529165837366,
            "unit": "ns/iter",
            "extra": "iterations: 422593031\ncpu: 1.6550911839338862 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.6674835420830854,
            "unit": "ns/iter",
            "extra": "iterations: 416166276\ncpu: 1.6649066489952693 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.9538439448084608,
            "unit": "ns/iter",
            "extra": "iterations: 358882338\ncpu: 1.9537378292492067 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.9289430111890213,
            "unit": "ns/iter",
            "extra": "iterations: 364672602\ncpu: 1.9286121198652628 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.9229748255105594,
            "unit": "ns/iter",
            "extra": "iterations: 366937851\ncpu: 1.9228351560820565 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.9446710798167053,
            "unit": "ns/iter",
            "extra": "iterations: 359400110\ncpu: 1.944081207988501 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.6333425911434372,
            "unit": "ns/iter",
            "extra": "iterations: 431930792\ncpu: 1.6330602334088768 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.5967337358514402,
            "unit": "ns/iter",
            "extra": "iterations: 441253412\ncpu: 1.5965859545580132 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.183205220691065,
            "unit": "ns/iter",
            "extra": "iterations: 114678899\ncpu: 6.180099444449668 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 80.4525903907509,
            "unit": "ns/iter",
            "extra": "iterations: 10014879\ncpu: 80.43941419561831 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 6.567385240967696,
            "unit": "ns/iter",
            "extra": "iterations: 78391847\ncpu: 6.561651749320298 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.913076084800988,
            "unit": "ns/iter",
            "extra": "iterations: 237851723\ncpu: 2.9122681612863435 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 906.1920151801367,
            "unit": "ns/iter",
            "extra": "iterations: 785766\ncpu: 905.2135114016124 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11434fadc16bbf76dd613059648f64385525d608",
          "message": "Benchmark object fast hashing and equality (#1348)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-25T19:03:03-04:00",
          "tree_id": "be0c13037b042c5c54b19aae13db138aa6c7d6d0",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/11434fadc16bbf76dd613059648f64385525d608"
        },
        "date": 1732576004811,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 383.0552471856291,
            "unit": "ns/iter",
            "extra": "iterations: 1823387\ncpu: 382.847963707101 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 21260.781119985615,
            "unit": "ns/iter",
            "extra": "iterations: 33411\ncpu: 21256.023465325794 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 48.508740672588196,
            "unit": "ns/iter",
            "extra": "iterations: 13916778\ncpu: 48.49728866839721 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 323.5679800976664,
            "unit": "ns/iter",
            "extra": "iterations: 2140450\ncpu: 323.50533766264124 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.6655636843053447,
            "unit": "ns/iter",
            "extra": "iterations: 354383727\ncpu: 1.6654348239867114 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.7112015389780046,
            "unit": "ns/iter",
            "extra": "iterations: 417133459\ncpu: 1.7109224508408483 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.7827040204094904,
            "unit": "ns/iter",
            "extra": "iterations: 382526203\ncpu: 1.7823720170092496 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.77168550114101,
            "unit": "ns/iter",
            "extra": "iterations: 395486929\ncpu: 1.771274721445976 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.1026940210664,
            "unit": "ns/iter",
            "extra": "iterations: 340770238\ncpu: 2.100479796008476 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.072244490769396,
            "unit": "ns/iter",
            "extra": "iterations: 334985931\ncpu: 2.0716959602700507 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.2198815470744555,
            "unit": "ns/iter",
            "extra": "iterations: 335082143\ncpu: 2.2056382753884862 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.0308539582735063,
            "unit": "ns/iter",
            "extra": "iterations: 335228171\ncpu: 2.0305841181825928 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.693616354345756,
            "unit": "ns/iter",
            "extra": "iterations: 414620711\ncpu: 1.692353954793154 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.8334157654887546,
            "unit": "ns/iter",
            "extra": "iterations: 422743606\ncpu: 1.8330874530128292 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 7.950033351217854,
            "unit": "ns/iter",
            "extra": "iterations: 85662539\ncpu: 7.948316824930909 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 85.01572414216122,
            "unit": "ns/iter",
            "extra": "iterations: 9534447\ncpu: 84.99695892168684 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 7.053253704123303,
            "unit": "ns/iter",
            "extra": "iterations: 103336286\ncpu: 7.051366254831354 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.3939647872044105,
            "unit": "ns/iter",
            "extra": "iterations: 287865641\ncpu: 2.3936583664738116 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 761.3237801903449,
            "unit": "ns/iter",
            "extra": "iterations: 992204\ncpu: 761.2345848232842 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0cb8a2f1bf702d5ebeaa213f2bf6cf8a1962d2b1",
          "message": "Take an optional callback to obtain parse metadata (#1347)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-26T09:47:14-04:00",
          "tree_id": "49ac08808429253e8fbe5132f50b717329c09706",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/0cb8a2f1bf702d5ebeaa213f2bf6cf8a1962d2b1"
        },
        "date": 1732629072424,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 417.4387505245783,
            "unit": "ns/iter",
            "extra": "iterations: 1649108\ncpu: 417.2710337952397 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 22415.10381604659,
            "unit": "ns/iter",
            "extra": "iterations: 30660\ncpu: 22392.433137638625 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 58.9753786701799,
            "unit": "ns/iter",
            "extra": "iterations: 12245683\ncpu: 58.9513871949813 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 307.6914880828856,
            "unit": "ns/iter",
            "extra": "iterations: 2162944\ncpu: 307.5188261924488 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.7322153248359884,
            "unit": "ns/iter",
            "extra": "iterations: 408847459\ncpu: 1.7287254315551464 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.6612527653941798,
            "unit": "ns/iter",
            "extra": "iterations: 401100160\ncpu: 1.6519514726695697 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.6481125233934821,
            "unit": "ns/iter",
            "extra": "iterations: 430806346\ncpu: 1.6470695164736502 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.7326151011910846,
            "unit": "ns/iter",
            "extra": "iterations: 430827558\ncpu: 1.7061745154194614 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.027257071069515,
            "unit": "ns/iter",
            "extra": "iterations: 368333816\ncpu: 1.9983313180237574 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.0017755794387746,
            "unit": "ns/iter",
            "extra": "iterations: 343349324\ncpu: 1.9861871054681364 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.0624883627702872,
            "unit": "ns/iter",
            "extra": "iterations: 339293591\ncpu: 2.0583412670473895 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.0930430334082857,
            "unit": "ns/iter",
            "extra": "iterations: 317396982\ncpu: 2.0894338560534913 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.627210967911766,
            "unit": "ns/iter",
            "extra": "iterations: 426556168\ncpu: 1.6266392378131096 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.6780930674686292,
            "unit": "ns/iter",
            "extra": "iterations: 425697536\ncpu: 1.6686847818635244 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.520973978205597,
            "unit": "ns/iter",
            "extra": "iterations: 116159437\ncpu: 6.512126948411442 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 77.41460383837025,
            "unit": "ns/iter",
            "extra": "iterations: 9624771\ncpu: 77.36371078335262 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.829655366864029,
            "unit": "ns/iter",
            "extra": "iterations: 139015768\ncpu: 4.824711683066059 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.297821312326325,
            "unit": "ns/iter",
            "extra": "iterations: 297058274\ncpu: 2.29716543764743 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 748.5210266501191,
            "unit": "ns/iter",
            "extra": "iterations: 958379\ncpu: 748.0860912019192 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd591596c6739ba8414df0b6946abffe9d69731e",
          "message": "Add safety value assertions to parser pre/post callbacks (#1349)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-26T10:06:06-04:00",
          "tree_id": "a91a0888058e3b86abd243fd07620018bb0fc01a",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/dd591596c6739ba8414df0b6946abffe9d69731e"
        },
        "date": 1732630216264,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 544.0032233843482,
            "unit": "ns/iter",
            "extra": "iterations: 1113426\ncpu: 519.0996078769491 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 27003.16187847585,
            "unit": "ns/iter",
            "extra": "iterations: 25723\ncpu: 26808.26497686896 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 86.8888120777453,
            "unit": "ns/iter",
            "extra": "iterations: 10545345\ncpu: 70.54506040342919 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 374.8463652279012,
            "unit": "ns/iter",
            "extra": "iterations: 1775861\ncpu: 372.5837776717884 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 3.2313301529499743,
            "unit": "ns/iter",
            "extra": "iterations: 265161559\ncpu: 2.775157163712405 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.6091504125103295,
            "unit": "ns/iter",
            "extra": "iterations: 293883035\ncpu: 2.5614510208117305 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.429203485326721,
            "unit": "ns/iter",
            "extra": "iterations: 317631738\ncpu: 2.3930669044162074 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.4929109710634263,
            "unit": "ns/iter",
            "extra": "iterations: 293266189\ncpu: 2.4855234846046343 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.623481049026943,
            "unit": "ns/iter",
            "extra": "iterations: 269914900\ncpu: 2.6196404866867216 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.549380408617268,
            "unit": "ns/iter",
            "extra": "iterations: 255829252\ncpu: 2.524766010729693 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.5201835460281834,
            "unit": "ns/iter",
            "extra": "iterations: 306916584\ncpu: 2.307561848792111 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.5650846877082687,
            "unit": "ns/iter",
            "extra": "iterations: 290370887\ncpu: 2.5590306510308003 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.3192108045836966,
            "unit": "ns/iter",
            "extra": "iterations: 328376413\ncpu: 2.290246711477416 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.1483727495731038,
            "unit": "ns/iter",
            "extra": "iterations: 372312700\ncpu: 2.069037666456181 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 7.934879284867261,
            "unit": "ns/iter",
            "extra": "iterations: 84274397\ncpu: 6.961343194185059 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 85.63554785895118,
            "unit": "ns/iter",
            "extra": "iterations: 8974819\ncpu: 84.97441564002588 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 6.599063073366324,
            "unit": "ns/iter",
            "extra": "iterations: 121605893\ncpu: 5.674404282364843 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.768591189428643,
            "unit": "ns/iter",
            "extra": "iterations: 267362318\ncpu: 2.6350609362984416 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 1009.5769690469946,
            "unit": "ns/iter",
            "extra": "iterations: 783120\ncpu: 875.5197160077637 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc3104d25262a50112cfb6106b360cb8b350fe8a",
          "message": "Implement a helper class for mapping pointers to lines/columns (#1350)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-26T11:04:09-04:00",
          "tree_id": "3faf3b56a0dc328ae4906a00a216966f37889a83",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/dc3104d25262a50112cfb6106b360cb8b350fe8a"
        },
        "date": 1732633643991,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 456.5425413453891,
            "unit": "ns/iter",
            "extra": "iterations: 1662277\ncpu: 420.802910706218 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 23048.64339568257,
            "unit": "ns/iter",
            "extra": "iterations: 31169\ncpu: 22437.485963617684 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 57.34500477156678,
            "unit": "ns/iter",
            "extra": "iterations: 12442454\ncpu: 57.207846619324464 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 324.4711928979019,
            "unit": "ns/iter",
            "extra": "iterations: 2265240\ncpu: 310.8703713513802 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.7470990819757466,
            "unit": "ns/iter",
            "extra": "iterations: 405924173\ncpu: 1.722728151003709 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.723877420148832,
            "unit": "ns/iter",
            "extra": "iterations: 404423235\ncpu: 1.7226532496333944 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.6941581009836733,
            "unit": "ns/iter",
            "extra": "iterations: 412657989\ncpu: 1.692559016469205 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.7914017445301158,
            "unit": "ns/iter",
            "extra": "iterations: 406428538\ncpu: 1.7388124453012677 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.066649164717208,
            "unit": "ns/iter",
            "extra": "iterations: 337947116\ncpu: 2.0654059968364944 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.1263423218687487,
            "unit": "ns/iter",
            "extra": "iterations: 337360778\ncpu: 2.1233529405721256 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.0494641181766307,
            "unit": "ns/iter",
            "extra": "iterations: 335916693\ncpu: 2.0478113006429246 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.1370507224005317,
            "unit": "ns/iter",
            "extra": "iterations: 337271378\ncpu: 2.0710740536067647 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.726472505842045,
            "unit": "ns/iter",
            "extra": "iterations: 404671060\ncpu: 1.709403187863245 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.880212177854549,
            "unit": "ns/iter",
            "extra": "iterations: 412713948\ncpu: 1.7320616457576075 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.5749466407528345,
            "unit": "ns/iter",
            "extra": "iterations: 108535545\ncpu: 6.501787041286808 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 77.38467267463174,
            "unit": "ns/iter",
            "extra": "iterations: 9476748\ncpu: 77.31323023467525 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.987393877899283,
            "unit": "ns/iter",
            "extra": "iterations: 143196138\ncpu: 4.930475150104958 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.3455131771371818,
            "unit": "ns/iter",
            "extra": "iterations: 294282099\ncpu: 2.3385282432690517 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 780.0465806029796,
            "unit": "ns/iter",
            "extra": "iterations: 909327\ncpu: 759.2549214968845 ns\nthreads: 1"
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
          "id": "dc3104d25262a50112cfb6106b360cb8b350fe8a",
          "message": "Implement a helper class for mapping pointers to lines/columns (#1350)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-26T15:04:09Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/dc3104d25262a50112cfb6106b360cb8b350fe8a"
        },
        "date": 1732649138071,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 467.6987750713014,
            "unit": "ns/iter",
            "extra": "iterations: 1246195\ncpu: 466.0097336291673 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 25590.641804325445,
            "unit": "ns/iter",
            "extra": "iterations: 25849\ncpu: 25312.197763936718 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 59.80884435191268,
            "unit": "ns/iter",
            "extra": "iterations: 12295802\ncpu: 59.74730237198028 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 329.57962447380794,
            "unit": "ns/iter",
            "extra": "iterations: 2323513\ncpu: 328.6450301762889 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.8350329898351183,
            "unit": "ns/iter",
            "extra": "iterations: 382169083\ncpu: 1.8246452447855366 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.806398014954662,
            "unit": "ns/iter",
            "extra": "iterations: 407445781\ncpu: 1.7712638924097717 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.7123446333518064,
            "unit": "ns/iter",
            "extra": "iterations: 397860646\ncpu: 1.7115490231220314 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.7942532330164236,
            "unit": "ns/iter",
            "extra": "iterations: 398980889\ncpu: 1.7919730486138628 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.138061894283,
            "unit": "ns/iter",
            "extra": "iterations: 283895040\ncpu: 2.134855896038187 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.1934898048822777,
            "unit": "ns/iter",
            "extra": "iterations: 356489899\ncpu: 2.1876608627275558 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.254013539162713,
            "unit": "ns/iter",
            "extra": "iterations: 301846438\ncpu: 2.249577647823691 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.4492594093788007,
            "unit": "ns/iter",
            "extra": "iterations: 265205762\ncpu: 2.4041860749616797 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.1040409852544544,
            "unit": "ns/iter",
            "extra": "iterations: 271474611\ncpu: 2.090541719203342 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.1693061005761716,
            "unit": "ns/iter",
            "extra": "iterations: 333969466\ncpu: 2.1544933691632715 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 7.739800932187387,
            "unit": "ns/iter",
            "extra": "iterations: 86410152\ncpu: 7.698007521153284 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 82.46005004267322,
            "unit": "ns/iter",
            "extra": "iterations: 8172224\ncpu: 82.1365151028656 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.539204983845501,
            "unit": "ns/iter",
            "extra": "iterations: 136678707\ncpu: 5.534088056598324 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.932064260481576,
            "unit": "ns/iter",
            "extra": "iterations: 257270652\ncpu: 2.9296540205448784 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 849.4772374512964,
            "unit": "ns/iter",
            "extra": "iterations: 889092\ncpu: 849.1236002573411 ns\nthreads: 1"
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
          "id": "dc3104d25262a50112cfb6106b360cb8b350fe8a",
          "message": "Implement a helper class for mapping pointers to lines/columns (#1350)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-26T15:04:09Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/dc3104d25262a50112cfb6106b360cb8b350fe8a"
        },
        "date": 1732734491342,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 499.68911651179,
            "unit": "ns/iter",
            "extra": "iterations: 1589959\ncpu: 461.3389401865077 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 25721.632383167955,
            "unit": "ns/iter",
            "extra": "iterations: 25785\ncpu: 25707.69827419043 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 63.11487400711595,
            "unit": "ns/iter",
            "extra": "iterations: 11978097\ncpu: 63.02545387635449 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 330.36416398466,
            "unit": "ns/iter",
            "extra": "iterations: 2055022\ncpu: 330.05729379052843 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.7515149041921452,
            "unit": "ns/iter",
            "extra": "iterations: 352795908\ncpu: 1.7508819858534208 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.8956513457407336,
            "unit": "ns/iter",
            "extra": "iterations: 296661708\ncpu: 1.8947305460804504 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.888968853753809,
            "unit": "ns/iter",
            "extra": "iterations: 412563137\ncpu: 1.88743232287377 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.3455979947763246,
            "unit": "ns/iter",
            "extra": "iterations: 305952079\ncpu: 2.266129396035253 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.2149942745620654,
            "unit": "ns/iter",
            "extra": "iterations: 316014248\ncpu: 2.213681833738085 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.1531470410599294,
            "unit": "ns/iter",
            "extra": "iterations: 284411796\ncpu: 2.1526252026480606 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.230108915548949,
            "unit": "ns/iter",
            "extra": "iterations: 313833794\ncpu: 2.2283929053223606 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.191565009196557,
            "unit": "ns/iter",
            "extra": "iterations: 266846598\ncpu: 2.190700591206345 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.8871810605513424,
            "unit": "ns/iter",
            "extra": "iterations: 379811397\ncpu: 1.8861177038349863 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.8682275374418253,
            "unit": "ns/iter",
            "extra": "iterations: 396935657\ncpu: 1.86666777583048 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.998961457345331,
            "unit": "ns/iter",
            "extra": "iterations: 83292679\ncpu: 6.995968997467331 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 78.28103781051048,
            "unit": "ns/iter",
            "extra": "iterations: 9018178\ncpu: 78.25261377630821 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.625754996409608,
            "unit": "ns/iter",
            "extra": "iterations: 97107581\ncpu: 5.620302703246204 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.9357544451485142,
            "unit": "ns/iter",
            "extra": "iterations: 289832270\ncpu: 2.894211883307544 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 895.6421450091698,
            "unit": "ns/iter",
            "extra": "iterations: 908136\ncpu: 879.1932045420513 ns\nthreads: 1"
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
          "id": "dc3104d25262a50112cfb6106b360cb8b350fe8a",
          "message": "Implement a helper class for mapping pointers to lines/columns (#1350)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-26T15:04:09Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/dc3104d25262a50112cfb6106b360cb8b350fe8a"
        },
        "date": 1732820835544,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 401.0176447222816,
            "unit": "ns/iter",
            "extra": "iterations: 1754689\ncpu: 400.82430561769064 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 20876.518796765642,
            "unit": "ns/iter",
            "extra": "iterations: 33277\ncpu: 20876.521321032527 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 54.12718257806535,
            "unit": "ns/iter",
            "extra": "iterations: 13381251\ncpu: 53.892121147716324 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 293.15183546614935,
            "unit": "ns/iter",
            "extra": "iterations: 2367464\ncpu: 292.90455947798995 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.651806009059719,
            "unit": "ns/iter",
            "extra": "iterations: 446753379\ncpu: 1.6307095463512977 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.6165857498467253,
            "unit": "ns/iter",
            "extra": "iterations: 423224121\ncpu: 1.6084811007262971 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.6089713904610374,
            "unit": "ns/iter",
            "extra": "iterations: 439020107\ncpu: 1.6082748574429184 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.6794536069203854,
            "unit": "ns/iter",
            "extra": "iterations: 419144108\ncpu: 1.6742547171866706 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.9406077628446907,
            "unit": "ns/iter",
            "extra": "iterations: 361187792\ncpu: 1.940024041565614 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.9303693519706646,
            "unit": "ns/iter",
            "extra": "iterations: 372366174\ncpu: 1.9303069134308684 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.9064412739274303,
            "unit": "ns/iter",
            "extra": "iterations: 366068580\ncpu: 1.905435314880077 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.9232356227238347,
            "unit": "ns/iter",
            "extra": "iterations: 361921701\ncpu: 1.9223964688428572 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.598965350706942,
            "unit": "ns/iter",
            "extra": "iterations: 432806752\ncpu: 1.5987620267070144 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.586328976396668,
            "unit": "ns/iter",
            "extra": "iterations: 434138143\ncpu: 1.5861472001551384 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.039228070137921,
            "unit": "ns/iter",
            "extra": "iterations: 117573946\ncpu: 6.039212122726574 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 67.52153521342058,
            "unit": "ns/iter",
            "extra": "iterations: 10465255\ncpu: 67.51808723246599 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.572128790178069,
            "unit": "ns/iter",
            "extra": "iterations: 157078872\ncpu: 4.571830640596897 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.2895585995838212,
            "unit": "ns/iter",
            "extra": "iterations: 297324504\ncpu: 2.2889670741702437 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 733.9169908564317,
            "unit": "ns/iter",
            "extra": "iterations: 1007383\ncpu: 733.7120042724583 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6bdf5de51a311e14eff06cb41701d0ebbfeb6b52",
          "message": "Introduce a `.find()` method for JSON objects (#1353)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-29T13:09:29+01:00",
          "tree_id": "1ee7eb04ecf6d2f9691a11129b851a653163ef1d",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/6bdf5de51a311e14eff06cb41701d0ebbfeb6b52"
        },
        "date": 1732882422629,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 448.0758557060629,
            "unit": "ns/iter",
            "extra": "iterations: 1587870\ncpu: 447.63992014459615 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 23300.140795743686,
            "unit": "ns/iter",
            "extra": "iterations: 30839\ncpu: 23240.312591199458 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 57.98718012299708,
            "unit": "ns/iter",
            "extra": "iterations: 12743492\ncpu: 57.333970939833435 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 319.8142368968755,
            "unit": "ns/iter",
            "extra": "iterations: 2249198\ncpu: 319.6877286926269 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.7669079050186964,
            "unit": "ns/iter",
            "extra": "iterations: 411189041\ncpu: 1.7651905270500647 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.938272549692906,
            "unit": "ns/iter",
            "extra": "iterations: 413511183\ncpu: 1.9338074346589094 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.7524978478079185,
            "unit": "ns/iter",
            "extra": "iterations: 332337902\ncpu: 1.7518284748635145 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.7815740767685568,
            "unit": "ns/iter",
            "extra": "iterations: 414228145\ncpu: 1.7803377411740124 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.2904236697251306,
            "unit": "ns/iter",
            "extra": "iterations: 339150573\ncpu: 2.288364112538301 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.1524006048458255,
            "unit": "ns/iter",
            "extra": "iterations: 338596084\ncpu: 2.1496409273298025 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.0982920293272374,
            "unit": "ns/iter",
            "extra": "iterations: 330054789\ncpu: 2.0914800300019283 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.107634686285952,
            "unit": "ns/iter",
            "extra": "iterations: 341448424\ncpu: 2.1065934104296775 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.7829534665458435,
            "unit": "ns/iter",
            "extra": "iterations: 410453669\ncpu: 1.7823107825599664 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.7470500541865273,
            "unit": "ns/iter",
            "extra": "iterations: 391382867\ncpu: 1.7452092505623187 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.639592608982208,
            "unit": "ns/iter",
            "extra": "iterations: 109154984\ncpu: 6.631744822572635 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 85.43582004208929,
            "unit": "ns/iter",
            "extra": "iterations: 9268945\ncpu: 83.60325797596157 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 6.371608358115988,
            "unit": "ns/iter",
            "extra": "iterations: 124632778\ncpu: 6.3195574441901705 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.885855551132705,
            "unit": "ns/iter",
            "extra": "iterations: 203195418\ncpu: 2.8845532333804993 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 829.0752905838245,
            "unit": "ns/iter",
            "extra": "iterations: 717779\ncpu: 828.8163905603295 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dcc9582a5610235a9d9f24f0b3652199e17f3866",
          "message": "Do not support mutable iterators in `Object` (#1354)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-29T13:29:16+01:00",
          "tree_id": "6172e96c3cb3ab2aac0b99284caceb4f56bddc45",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/dcc9582a5610235a9d9f24f0b3652199e17f3866"
        },
        "date": 1732883593046,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 487.20552296248366,
            "unit": "ns/iter",
            "extra": "iterations: 1582991\ncpu: 460.53136120167454 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 25888.26619763719,
            "unit": "ns/iter",
            "extra": "iterations: 27859\ncpu: 25798.66470440432 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 61.67221731530755,
            "unit": "ns/iter",
            "extra": "iterations: 12098586\ncpu: 61.537604477085196 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 334.88583650076396,
            "unit": "ns/iter",
            "extra": "iterations: 2171815\ncpu: 334.52619122715345 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.8324845020335614,
            "unit": "ns/iter",
            "extra": "iterations: 404437254\ncpu: 1.8285778391720575 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.687762608663535,
            "unit": "ns/iter",
            "extra": "iterations: 404685097\ncpu: 1.6763330427263026 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.7853464415985265,
            "unit": "ns/iter",
            "extra": "iterations: 415847348\ncpu: 1.7825892206964378 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.8808798203968653,
            "unit": "ns/iter",
            "extra": "iterations: 410444042\ncpu: 1.8693023201442884 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.199421942191743,
            "unit": "ns/iter",
            "extra": "iterations: 340304719\ncpu: 2.194903444756521 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.097331254045933,
            "unit": "ns/iter",
            "extra": "iterations: 322301416\ncpu: 2.0952188432209646 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.106413471516867,
            "unit": "ns/iter",
            "extra": "iterations: 346185041\ncpu: 2.1032855662876537 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.1606176877055003,
            "unit": "ns/iter",
            "extra": "iterations: 336036023\ncpu: 2.14560330039378 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.0577045938200818,
            "unit": "ns/iter",
            "extra": "iterations: 352001126\ncpu: 1.854678726226579 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.8420892168747824,
            "unit": "ns/iter",
            "extra": "iterations: 406308225\ncpu: 1.77946926868143 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 7.127829909614456,
            "unit": "ns/iter",
            "extra": "iterations: 104550954\ncpu: 7.101704686501458 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 78.27875704930217,
            "unit": "ns/iter",
            "extra": "iterations: 9464575\ncpu: 78.21291500146599 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.143818595921725,
            "unit": "ns/iter",
            "extra": "iterations: 136628020\ncpu: 5.130887500236064 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.5955570822823626,
            "unit": "ns/iter",
            "extra": "iterations: 280949610\ncpu: 2.4742408434024843 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 796.2531863925655,
            "unit": "ns/iter",
            "extra": "iterations: 921732\ncpu: 795.0836034769321 ns\nthreads: 1"
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
          "id": "dcc9582a5610235a9d9f24f0b3652199e17f3866",
          "message": "Do not support mutable iterators in `Object` (#1354)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-29T12:29:16Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/dcc9582a5610235a9d9f24f0b3652199e17f3866"
        },
        "date": 1732907423157,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 388.0117419177503,
            "unit": "ns/iter",
            "extra": "iterations: 1800217\ncpu: 387.75880907690583 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 21030.747769059428,
            "unit": "ns/iter",
            "extra": "iterations: 33394\ncpu: 21029.735880697146 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 53.18892476923303,
            "unit": "ns/iter",
            "extra": "iterations: 12447542\ncpu: 53.187689585622586 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 284.74294167405117,
            "unit": "ns/iter",
            "extra": "iterations: 2442718\ncpu: 284.73814824306385 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.5747819228282296,
            "unit": "ns/iter",
            "extra": "iterations: 438824702\ncpu: 1.5746606716775025 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.6122602267910826,
            "unit": "ns/iter",
            "extra": "iterations: 441827145\ncpu: 1.6122300498309154 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.5767737751580975,
            "unit": "ns/iter",
            "extra": "iterations: 447130064\ncpu: 1.5764026102257362 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.5804240795876472,
            "unit": "ns/iter",
            "extra": "iterations: 446104235\ncpu: 1.5800881155051125 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.9307739121456098,
            "unit": "ns/iter",
            "extra": "iterations: 370839315\ncpu: 1.9307742492189626 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.9043434723590065,
            "unit": "ns/iter",
            "extra": "iterations: 367826722\ncpu: 1.9030564070872515 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.8846420937796853,
            "unit": "ns/iter",
            "extra": "iterations: 371632742\ncpu: 1.8843065232395524 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.893604574670843,
            "unit": "ns/iter",
            "extra": "iterations: 365688016\ncpu: 1.8935512505282641 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.5760155181084414,
            "unit": "ns/iter",
            "extra": "iterations: 437046564\ncpu: 1.5759007317124212 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.5956265702885035,
            "unit": "ns/iter",
            "extra": "iterations: 445715086\ncpu: 1.595534955709349 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.051894253710689,
            "unit": "ns/iter",
            "extra": "iterations: 117700469\ncpu: 6.039406690894311 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 67.43114029978389,
            "unit": "ns/iter",
            "extra": "iterations: 10407684\ncpu: 67.42806564841898 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.572002079739652,
            "unit": "ns/iter",
            "extra": "iterations: 156446606\ncpu: 4.571591664954373 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.2575722172730774,
            "unit": "ns/iter",
            "extra": "iterations: 307044478\ncpu: 2.243622827830184 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 697.3971920116007,
            "unit": "ns/iter",
            "extra": "iterations: 996158\ncpu: 696.9808002345023 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "377e315808008f27665d4484dc5e3d0cc3004165",
          "message": "Benchmark object pointer traversal (#1355)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-29T22:05:19+01:00",
          "tree_id": "f6edd0cf9e619403cfa1b7f10087e9e02e51c9c6",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/377e315808008f27665d4484dc5e3d0cc3004165"
        },
        "date": 1732914547597,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 382.69442984689624,
            "unit": "ns/iter",
            "extra": "iterations: 1923843\ncpu: 381.8908299689736 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 21520.534873136898,
            "unit": "ns/iter",
            "extra": "iterations: 32948\ncpu: 21516.38946218284 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 48.54943604768604,
            "unit": "ns/iter",
            "extra": "iterations: 14410527\ncpu: 48.536184693314844 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 303.77746421382824,
            "unit": "ns/iter",
            "extra": "iterations: 2317443\ncpu: 303.72915320894623 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.6825297514600892,
            "unit": "ns/iter",
            "extra": "iterations: 424391604\ncpu: 1.6796609388153683 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.6188664148252556,
            "unit": "ns/iter",
            "extra": "iterations: 429163499\ncpu: 1.618031360118072 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.6160517107906283,
            "unit": "ns/iter",
            "extra": "iterations: 444585583\ncpu: 1.616035308999213 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.5974829926408705,
            "unit": "ns/iter",
            "extra": "iterations: 439403165\ncpu: 1.5972256367338689 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.9286718452454914,
            "unit": "ns/iter",
            "extra": "iterations: 364488414\ncpu: 1.9281573103720144 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.9413508729507076,
            "unit": "ns/iter",
            "extra": "iterations: 364467539\ncpu: 1.9412099138957857 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.9394329114964082,
            "unit": "ns/iter",
            "extra": "iterations: 364788527\ncpu: 1.9388054931892058 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.998837766200905,
            "unit": "ns/iter",
            "extra": "iterations: 361480625\ncpu: 1.9951193788048809 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.6345024281418776,
            "unit": "ns/iter",
            "extra": "iterations: 397675304\ncpu: 1.6257987194497703 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.6065368878825994,
            "unit": "ns/iter",
            "extra": "iterations: 443593871\ncpu: 1.6052566244766726 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.36891109609723,
            "unit": "ns/iter",
            "extra": "iterations: 111790728\ncpu: 6.368372518336233 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 69.05395270875583,
            "unit": "ns/iter",
            "extra": "iterations: 10424889\ncpu: 69.0058186710668 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.899448173665108,
            "unit": "ns/iter",
            "extra": "iterations: 144437108\ncpu: 4.895660192808635 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.262724475649273,
            "unit": "ns/iter",
            "extra": "iterations: 314264934\ncpu: 2.2621168418363826 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 744.0728987471672,
            "unit": "ns/iter",
            "extra": "iterations: 985888\ncpu: 743.9962754389913 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 52.535683000369495,
            "unit": "ns/iter",
            "extra": "iterations: 13304949\ncpu: 52.52571806175271 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 50.84197740337757,
            "unit": "ns/iter",
            "extra": "iterations: 13744085\ncpu: 50.67954687416437 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b36b73f996a4804f35f1a53bcdd0b0144fec063d",
          "message": "Implement a flat map container for JSON objects (#1352)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-11-29T22:38:51+01:00",
          "tree_id": "ffa7df18ae1d64fe62506e3473259d38bfc6465c",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/b36b73f996a4804f35f1a53bcdd0b0144fec063d"
        },
        "date": 1732916547042,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 360.8053594234045,
            "unit": "ns/iter",
            "extra": "iterations: 1960696\ncpu: 360.5928711029144 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 21426.56837863615,
            "unit": "ns/iter",
            "extra": "iterations: 33256\ncpu: 21426.569641568458 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 46.746859374473416,
            "unit": "ns/iter",
            "extra": "iterations: 14955699\ncpu: 46.71516857888086 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 181.59081452550697,
            "unit": "ns/iter",
            "extra": "iterations: 3766033\ncpu: 181.57541370455326 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.6608361637763973,
            "unit": "ns/iter",
            "extra": "iterations: 413428146\ncpu: 1.6607553371559776 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.6716447994004775,
            "unit": "ns/iter",
            "extra": "iterations: 428711416\ncpu: 1.6710355107501986 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.6896408722398444,
            "unit": "ns/iter",
            "extra": "iterations: 417648638\ncpu: 1.6891615003901916 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.667259200806724,
            "unit": "ns/iter",
            "extra": "iterations: 418740429\ncpu: 1.6646398382516805 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.990617266096109,
            "unit": "ns/iter",
            "extra": "iterations: 352506320\ncpu: 1.9904182143457727 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.001168800277934,
            "unit": "ns/iter",
            "extra": "iterations: 358933864\ncpu: 2.000733483313794 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.9998650434884764,
            "unit": "ns/iter",
            "extra": "iterations: 357915297\ncpu: 1.9992719115327486 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.9486926601088146,
            "unit": "ns/iter",
            "extra": "iterations: 359160386\ncpu: 1.9486113371088754 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.610102218317659,
            "unit": "ns/iter",
            "extra": "iterations: 435285485\ncpu: 1.6098216553212206 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.6674963196522123,
            "unit": "ns/iter",
            "extra": "iterations: 421212249\ncpu: 1.6673256812149329 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.1232208590154915,
            "unit": "ns/iter",
            "extra": "iterations: 114912338\ncpu: 6.122266870942959 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 68.98436520172537,
            "unit": "ns/iter",
            "extra": "iterations: 9658903\ncpu: 68.96238630825894 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.596032799560272,
            "unit": "ns/iter",
            "extra": "iterations: 150632873\ncpu: 4.595623692313188 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.328584394179153,
            "unit": "ns/iter",
            "extra": "iterations: 304500076\ncpu: 2.322679223239355 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 705.7922050955449,
            "unit": "ns/iter",
            "extra": "iterations: 987209\ncpu: 705.7026425002205 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 66.4337277172198,
            "unit": "ns/iter",
            "extra": "iterations: 11013043\ncpu: 66.30964756970424 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 63.47252993586622,
            "unit": "ns/iter",
            "extra": "iterations: 11143658\ncpu: 63.45878525704978 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mmior@mail.rit.edu",
            "name": "Michael Mior",
            "username": "michaelmior"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4a6ba798d74efc1eb1dad45edb8e63aa719e80d",
          "message": "Fix string overrun in URL canonicalization (#1360)\n\nThis is minor, the way URL canonicalization is currently written, it's\r\npossible that the implementation will access a character past the end of\r\nthe string.\r\n\r\nSigned-off-by: Michael Mior <mmior@mail.rit.edu>",
          "timestamp": "2024-12-02T09:43:36+01:00",
          "tree_id": "ef70212789618b8ae49dd192ced9e0ee2f70fb64",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/b4a6ba798d74efc1eb1dad45edb8e63aa719e80d"
        },
        "date": 1733129237605,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 384.7032384710304,
            "unit": "ns/iter",
            "extra": "iterations: 1924087\ncpu: 383.21655933437523 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 23949.114468518015,
            "unit": "ns/iter",
            "extra": "iterations: 28759\ncpu: 23875.16951215272 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 50.150045799989584,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 50.07890000000002 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 193.080513539591,
            "unit": "ns/iter",
            "extra": "iterations: 3634929\ncpu: 192.95342494997828 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.6869018316553048,
            "unit": "ns/iter",
            "extra": "iterations: 422991395\ncpu: 1.6864740238982843 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.7420380412139815,
            "unit": "ns/iter",
            "extra": "iterations: 402187902\ncpu: 1.741191111213485 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.7416512401971445,
            "unit": "ns/iter",
            "extra": "iterations: 402896248\ncpu: 1.741036317617928 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.7383910907277127,
            "unit": "ns/iter",
            "extra": "iterations: 413738482\ncpu: 1.7369691997854784 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.9852892002050366,
            "unit": "ns/iter",
            "extra": "iterations: 348064760\ncpu: 1.984403706942354 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.9817540678287993,
            "unit": "ns/iter",
            "extra": "iterations: 348968797\ncpu: 1.9813118133882905 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.984572343117214,
            "unit": "ns/iter",
            "extra": "iterations: 358792203\ncpu: 1.9845024335715604 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.1058251933313015,
            "unit": "ns/iter",
            "extra": "iterations: 340149277\ncpu: 2.101847771971012 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.7022232837286386,
            "unit": "ns/iter",
            "extra": "iterations: 414434149\ncpu: 1.6980285087462668 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.6647938621608407,
            "unit": "ns/iter",
            "extra": "iterations: 437245851\ncpu: 1.6616944410983132 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.377608980808088,
            "unit": "ns/iter",
            "extra": "iterations: 108934157\ncpu: 6.3750711358605265 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 73.66698396774599,
            "unit": "ns/iter",
            "extra": "iterations: 9220475\ncpu: 73.64360295971716 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.611796190483362,
            "unit": "ns/iter",
            "extra": "iterations: 150342028\ncpu: 4.6109129244950795 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.292915757525131,
            "unit": "ns/iter",
            "extra": "iterations: 306083185\ncpu: 2.2921938688007355 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 732.7269157181095,
            "unit": "ns/iter",
            "extra": "iterations: 935041\ncpu: 732.7026301520491 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 68.68920169651979,
            "unit": "ns/iter",
            "extra": "iterations: 11014082\ncpu: 68.62977776994954 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 65.16477741356948,
            "unit": "ns/iter",
            "extra": "iterations: 10827030\ncpu: 65.14547387418328 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a11784f7875040c4aa904c601895f6e587a95567",
          "message": "Pre-calculate property hashes in JSON Pointer (#1358)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-12-02T16:01:03+01:00",
          "tree_id": "55f3a0c4aacd4a8ccd1ce03358a81602758720dd",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/a11784f7875040c4aa904c601895f6e587a95567"
        },
        "date": 1733151858390,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 384.5984632215944,
            "unit": "ns/iter",
            "extra": "iterations: 1881078\ncpu: 378.5829189432868 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 22856.914082773383,
            "unit": "ns/iter",
            "extra": "iterations: 30832\ncpu: 22469.252724442144 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 56.12911287248071,
            "unit": "ns/iter",
            "extra": "iterations: 13176223\ncpu: 54.93805015291558 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 185.57658807970176,
            "unit": "ns/iter",
            "extra": "iterations: 3850893\ncpu: 180.09017648633719 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.69597518226537,
            "unit": "ns/iter",
            "extra": "iterations: 419201840\ncpu: 1.650877772864738 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.6953197933736384,
            "unit": "ns/iter",
            "extra": "iterations: 409713727\ncpu: 1.6589973808712555 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.7064706884063978,
            "unit": "ns/iter",
            "extra": "iterations: 417349829\ncpu: 1.6781748819166282 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.7276104810032105,
            "unit": "ns/iter",
            "extra": "iterations: 403404736\ncpu: 1.725944040478493 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.1275475995000988,
            "unit": "ns/iter",
            "extra": "iterations: 337147921\ncpu: 2.053801779189976 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.113632704250075,
            "unit": "ns/iter",
            "extra": "iterations: 337084603\ncpu: 2.054570258731156 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.315032790952725,
            "unit": "ns/iter",
            "extra": "iterations: 341683425\ncpu: 2.024280223718783 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.083534990146021,
            "unit": "ns/iter",
            "extra": "iterations: 337917751\ncpu: 2.075291984291172 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.7149901444225342,
            "unit": "ns/iter",
            "extra": "iterations: 407320125\ncpu: 1.7139516492095732 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.719085229894472,
            "unit": "ns/iter",
            "extra": "iterations: 410590899\ncpu: 1.7053885064315528 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.711378954200018,
            "unit": "ns/iter",
            "extra": "iterations: 108164905\ncpu: 6.491643477151874 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 74.78112768063109,
            "unit": "ns/iter",
            "extra": "iterations: 9404684\ncpu: 74.38070221179146 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.89481319071528,
            "unit": "ns/iter",
            "extra": "iterations: 141874158\ncpu: 4.889826376978405 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.393681190895545,
            "unit": "ns/iter",
            "extra": "iterations: 291750545\ncpu: 2.3915190972479605 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 757.9816886991593,
            "unit": "ns/iter",
            "extra": "iterations: 919323\ncpu: 755.9562852229298 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 60.441830727639086,
            "unit": "ns/iter",
            "extra": "iterations: 10609115\ncpu: 60.3275579537032 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 63.607154849283795,
            "unit": "ns/iter",
            "extra": "iterations: 11108466\ncpu: 63.57781533471851 ns\nthreads: 1"
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
          "id": "a11784f7875040c4aa904c601895f6e587a95567",
          "message": "Pre-calculate property hashes in JSON Pointer (#1358)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-12-02T15:01:03Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/a11784f7875040c4aa904c601895f6e587a95567"
        },
        "date": 1733166453207,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 499.00524133866656,
            "unit": "ns/iter",
            "extra": "iterations: 1105252\ncpu: 498.5731760720631 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 28348.381870662164,
            "unit": "ns/iter",
            "extra": "iterations: 23906\ncpu: 28260.89684598009 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 63.31054160672528,
            "unit": "ns/iter",
            "extra": "iterations: 12187478\ncpu: 63.22965259916773 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 208.44932364148235,
            "unit": "ns/iter",
            "extra": "iterations: 3176274\ncpu: 208.30350278345034 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.7913324349464566,
            "unit": "ns/iter",
            "extra": "iterations: 380399637\ncpu: 1.78458635069623 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.7777962651475019,
            "unit": "ns/iter",
            "extra": "iterations: 366622672\ncpu: 1.7635406901404094 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.907908199631794,
            "unit": "ns/iter",
            "extra": "iterations: 402745574\ncpu: 1.837179717833475 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.8235119103850268,
            "unit": "ns/iter",
            "extra": "iterations: 398862672\ncpu: 1.7582166726296207 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.1312163805621442,
            "unit": "ns/iter",
            "extra": "iterations: 336889928\ncpu: 2.1192589646075755 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.228113596849722,
            "unit": "ns/iter",
            "extra": "iterations: 311755406\ncpu: 2.222819513833867 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.288703303626582,
            "unit": "ns/iter",
            "extra": "iterations: 296907077\ncpu: 2.1689210190163273 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.160397991687738,
            "unit": "ns/iter",
            "extra": "iterations: 329500148\ncpu: 2.1567881056004845 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.8628003770665846,
            "unit": "ns/iter",
            "extra": "iterations: 378535931\ncpu: 1.8611126244710465 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.7844040795485452,
            "unit": "ns/iter",
            "extra": "iterations: 405712431\ncpu: 1.7825236417269181 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.577033474709141,
            "unit": "ns/iter",
            "extra": "iterations: 108086407\ncpu: 6.54983378252181 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 85.35258577870815,
            "unit": "ns/iter",
            "extra": "iterations: 8846426\ncpu: 79.32401175344731 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.972284176873727,
            "unit": "ns/iter",
            "extra": "iterations: 104112441\ncpu: 5.372883342539242 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.6000482279553094,
            "unit": "ns/iter",
            "extra": "iterations: 282877429\ncpu: 2.583786916417429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 787.1595392436826,
            "unit": "ns/iter",
            "extra": "iterations: 886716\ncpu: 782.5233783984946 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 62.83553682878666,
            "unit": "ns/iter",
            "extra": "iterations: 10451349\ncpu: 62.77945555162314 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 76.02083594322225,
            "unit": "ns/iter",
            "extra": "iterations: 8221946\ncpu: 75.9698494735918 ns\nthreads: 1"
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
          "id": "a11784f7875040c4aa904c601895f6e587a95567",
          "message": "Pre-calculate property hashes in JSON Pointer (#1358)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-12-02T15:01:03Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/a11784f7875040c4aa904c601895f6e587a95567"
        },
        "date": 1733252947599,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 529.634458999908,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 526.8519999999999 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 29224.09717995446,
            "unit": "ns/iter",
            "extra": "iterations: 24645\ncpu: 28743.112193142635 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 69.16741030709521,
            "unit": "ns/iter",
            "extra": "iterations: 8738094\ncpu: 69.11896347189675 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 252.55599300724055,
            "unit": "ns/iter",
            "extra": "iterations: 2879556\ncpu: 251.5207205555302 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.2306369996468294,
            "unit": "ns/iter",
            "extra": "iterations: 369110707\ncpu: 2.212867263154197 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.4694844516987153,
            "unit": "ns/iter",
            "extra": "iterations: 305921326\ncpu: 2.2768860514157185 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.1359268981047843,
            "unit": "ns/iter",
            "extra": "iterations: 287172418\ncpu: 2.135316491293396 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.2209674672968007,
            "unit": "ns/iter",
            "extra": "iterations: 269216273\ncpu: 2.2078197330961498 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.54063992818482,
            "unit": "ns/iter",
            "extra": "iterations: 260021990\ncpu: 2.5367623715209677 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.5421319089944823,
            "unit": "ns/iter",
            "extra": "iterations: 260911700\ncpu: 2.538901091825324 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.4667638579956876,
            "unit": "ns/iter",
            "extra": "iterations: 280179315\ncpu: 2.4503057979137384 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.630286565205676,
            "unit": "ns/iter",
            "extra": "iterations: 282318399\ncpu: 2.625114064917888 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.055425780576687,
            "unit": "ns/iter",
            "extra": "iterations: 285160260\ncpu: 2.051786598876017 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.2191794414713755,
            "unit": "ns/iter",
            "extra": "iterations: 355456253\ncpu: 2.202465123042864 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 7.646724128042477,
            "unit": "ns/iter",
            "extra": "iterations: 92510606\ncpu: 7.636691948596676 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 93.16337218047055,
            "unit": "ns/iter",
            "extra": "iterations: 9387908\ncpu: 92.87127653999147 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 6.248273046749755,
            "unit": "ns/iter",
            "extra": "iterations: 101320056\ncpu: 6.2330403765272475 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 3.3064425954344223,
            "unit": "ns/iter",
            "extra": "iterations: 228155720\ncpu: 3.289713709566432 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 904.4399856123807,
            "unit": "ns/iter",
            "extra": "iterations: 814588\ncpu: 901.1107455548051 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 77.34041783084214,
            "unit": "ns/iter",
            "extra": "iterations: 9606280\ncpu: 76.56803674263062 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 91.18056067531268,
            "unit": "ns/iter",
            "extra": "iterations: 8230646\ncpu: 83.91309746525366 ns\nthreads: 1"
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
          "id": "a11784f7875040c4aa904c601895f6e587a95567",
          "message": "Pre-calculate property hashes in JSON Pointer (#1358)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-12-02T15:01:03Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/a11784f7875040c4aa904c601895f6e587a95567"
        },
        "date": 1733339324715,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 586.9808749999947,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 533.838 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 25677.038298404103,
            "unit": "ns/iter",
            "extra": "iterations: 24048\ncpu: 24946.440452428466 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 59.98852139538804,
            "unit": "ns/iter",
            "extra": "iterations: 12488626\ncpu: 57.49015143859699 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 267.200615645835,
            "unit": "ns/iter",
            "extra": "iterations: 3170979\ncpu: 252.08618537051206 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.049954124885279,
            "unit": "ns/iter",
            "extra": "iterations: 315387769\ncpu: 1.9726288117406334 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.9226444882150318,
            "unit": "ns/iter",
            "extra": "iterations: 399090075\ncpu: 1.8009869075295846 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.796627159488625,
            "unit": "ns/iter",
            "extra": "iterations: 419269632\ncpu: 1.7329683443421926 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.6861540871379628,
            "unit": "ns/iter",
            "extra": "iterations: 321438575\ncpu: 2.4590452468251516 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.4258699678001223,
            "unit": "ns/iter",
            "extra": "iterations: 275834893\ncpu: 2.2571582341469685 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.9889289242281403,
            "unit": "ns/iter",
            "extra": "iterations: 331008393\ncpu: 1.945962741796708 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.9962534541008015,
            "unit": "ns/iter",
            "extra": "iterations: 313819724\ncpu: 1.9702745006556646 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.015013388109015,
            "unit": "ns/iter",
            "extra": "iterations: 355364223\ncpu: 1.9561564023849403 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.6351419754448897,
            "unit": "ns/iter",
            "extra": "iterations: 425715658\ncpu: 1.6067720017946807 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.5975304415070328,
            "unit": "ns/iter",
            "extra": "iterations: 442690547\ncpu: 1.5944320582024993 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.32241764383972,
            "unit": "ns/iter",
            "extra": "iterations: 116230801\ncpu: 6.319770608825099 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 71.2315781301885,
            "unit": "ns/iter",
            "extra": "iterations: 10124678\ncpu: 71.19465922768123 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.965535067159054,
            "unit": "ns/iter",
            "extra": "iterations: 152495147\ncpu: 4.953101884612772 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.2290400053353103,
            "unit": "ns/iter",
            "extra": "iterations: 313818317\ncpu: 2.228193709929294 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 700.2656268592928,
            "unit": "ns/iter",
            "extra": "iterations: 1000057\ncpu: 700.0200988543659 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 54.77059596303552,
            "unit": "ns/iter",
            "extra": "iterations: 12344373\ncpu: 54.720559723851295 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 56.33983197269861,
            "unit": "ns/iter",
            "extra": "iterations: 12274672\ncpu: 56.33511021720171 ns\nthreads: 1"
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
          "id": "a11784f7875040c4aa904c601895f6e587a95567",
          "message": "Pre-calculate property hashes in JSON Pointer (#1358)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-12-02T15:01:03Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/a11784f7875040c4aa904c601895f6e587a95567"
        },
        "date": 1733425686049,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 372.86311637203875,
            "unit": "ns/iter",
            "extra": "iterations: 1928178\ncpu: 365.6742271719727 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 21339.35750446411,
            "unit": "ns/iter",
            "extra": "iterations: 33580\ncpu: 20929.54139368672 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 53.708714011222874,
            "unit": "ns/iter",
            "extra": "iterations: 13167300\ncpu: 52.81242168098245 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 181.8512429821313,
            "unit": "ns/iter",
            "extra": "iterations: 3941730\ncpu: 176.9885304168475 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.6270311497351042,
            "unit": "ns/iter",
            "extra": "iterations: 434731305\ncpu: 1.59830909807611 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.6232386149234146,
            "unit": "ns/iter",
            "extra": "iterations: 432590102\ncpu: 1.5987397695937113 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.6534307949750462,
            "unit": "ns/iter",
            "extra": "iterations: 434601750\ncpu: 1.60714953402742 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.581068204454292,
            "unit": "ns/iter",
            "extra": "iterations: 439234978\ncpu: 1.58077574596074 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.909030223481895,
            "unit": "ns/iter",
            "extra": "iterations: 365611616\ncpu: 1.908713972588886 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.898115902472233,
            "unit": "ns/iter",
            "extra": "iterations: 367191926\ncpu: 1.8976288710661917 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.897165132770669,
            "unit": "ns/iter",
            "extra": "iterations: 369116546\ncpu: 1.8970295631234082 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.9059892527685987,
            "unit": "ns/iter",
            "extra": "iterations: 365407403\ncpu: 1.9044058612025425 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.5771542720161795,
            "unit": "ns/iter",
            "extra": "iterations: 446893135\ncpu: 1.5761284853928232 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.5839158250299692,
            "unit": "ns/iter",
            "extra": "iterations: 437606667\ncpu: 1.583369386828834 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 5.959015186509661,
            "unit": "ns/iter",
            "extra": "iterations: 117463460\ncpu: 5.958108164019697 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 67.94961349536116,
            "unit": "ns/iter",
            "extra": "iterations: 10315659\ncpu: 67.75902538073423 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.453745233903363,
            "unit": "ns/iter",
            "extra": "iterations: 158129910\ncpu: 4.45147284280373 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.2703413187523713,
            "unit": "ns/iter",
            "extra": "iterations: 312948466\ncpu: 2.2295747568866435 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 724.2474373653529,
            "unit": "ns/iter",
            "extra": "iterations: 998289\ncpu: 709.7073092060523 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 61.921913166816964,
            "unit": "ns/iter",
            "extra": "iterations: 11673671\ncpu: 60.53100177313545 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 60.79538687670448,
            "unit": "ns/iter",
            "extra": "iterations: 10026786\ncpu: 59.06119867323379 ns\nthreads: 1"
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
          "id": "a11784f7875040c4aa904c601895f6e587a95567",
          "message": "Pre-calculate property hashes in JSON Pointer (#1358)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-12-02T15:01:03Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/a11784f7875040c4aa904c601895f6e587a95567"
        },
        "date": 1733512124913,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 356.7229589904135,
            "unit": "ns/iter",
            "extra": "iterations: 1959006\ncpu: 356.71253686818704 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 20573.783469320755,
            "unit": "ns/iter",
            "extra": "iterations: 33949\ncpu: 20572.270169960826 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 53.283046416852066,
            "unit": "ns/iter",
            "extra": "iterations: 13435443\ncpu: 53.276695081807134 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 174.381491745247,
            "unit": "ns/iter",
            "extra": "iterations: 4040824\ncpu: 174.33523459571617 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.591153851808208,
            "unit": "ns/iter",
            "extra": "iterations: 439342493\ncpu: 1.5903059939162312 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.6245266730964474,
            "unit": "ns/iter",
            "extra": "iterations: 431483502\ncpu: 1.6244375433849143 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.6711106516652376,
            "unit": "ns/iter",
            "extra": "iterations: 436526001\ncpu: 1.654609343648239 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.5756682393453858,
            "unit": "ns/iter",
            "extra": "iterations: 419008626\ncpu: 1.5748673393659436 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.8802774212033966,
            "unit": "ns/iter",
            "extra": "iterations: 369198312\ncpu: 1.8801548583461527 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.889976216913899,
            "unit": "ns/iter",
            "extra": "iterations: 372073245\ncpu: 1.8898590786875882 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.886429697769462,
            "unit": "ns/iter",
            "extra": "iterations: 372435515\ncpu: 1.8862755341686448 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.8911013246798114,
            "unit": "ns/iter",
            "extra": "iterations: 372081156\ncpu: 1.8905929221527116 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.567031624373815,
            "unit": "ns/iter",
            "extra": "iterations: 444184984\ncpu: 1.5669169942043801 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.5712977187225656,
            "unit": "ns/iter",
            "extra": "iterations: 444582759\ncpu: 1.5712170250848632 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.113130593933086,
            "unit": "ns/iter",
            "extra": "iterations: 117645082\ncpu: 6.080305167367711 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 71.17458938283598,
            "unit": "ns/iter",
            "extra": "iterations: 9766579\ncpu: 71.04319741846166 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.561553491122737,
            "unit": "ns/iter",
            "extra": "iterations: 153187615\ncpu: 4.561517587436825 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.193354660934395,
            "unit": "ns/iter",
            "extra": "iterations: 310148960\ncpu: 2.193352510355023 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 695.2941492354867,
            "unit": "ns/iter",
            "extra": "iterations: 1007441\ncpu: 695.1523712058602 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 55.95946239697808,
            "unit": "ns/iter",
            "extra": "iterations: 11868832\ncpu: 55.958581265620914 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 64.38295989761386,
            "unit": "ns/iter",
            "extra": "iterations: 10320830\ncpu: 64.36594731237705 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "691dab3740eb053d3da31a61e1a613e94e1e77d9",
          "message": "Extend `to_pointer` to convert weak pointers to non-weak pointers (#1363)\n\nFixes: https://github.com/sourcemeta/jsontoolkit/issues/1362\r\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-12-08T12:19:20+01:00",
          "tree_id": "5015ec36ae1f364be49bab1f95e3a676eea4afdb",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/691dab3740eb053d3da31a61e1a613e94e1e77d9"
        },
        "date": 1733656955488,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 359.2114196106764,
            "unit": "ns/iter",
            "extra": "iterations: 1939891\ncpu: 359.1877069381732 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 20591.492022839713,
            "unit": "ns/iter",
            "extra": "iterations: 33972\ncpu: 20590.221358766034 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 52.20057653820205,
            "unit": "ns/iter",
            "extra": "iterations: 13397898\ncpu: 52.1936351508274 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 173.09549268294765,
            "unit": "ns/iter",
            "extra": "iterations: 4050059\ncpu: 173.0026648994498 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.5822445187735577,
            "unit": "ns/iter",
            "extra": "iterations: 447050108\ncpu: 1.5816951776689876 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.5671956166660213,
            "unit": "ns/iter",
            "extra": "iterations: 447358667\ncpu: 1.5669664001390633 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.5769375074512804,
            "unit": "ns/iter",
            "extra": "iterations: 446913107\ncpu: 1.5768344874253153 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.5900152530704468,
            "unit": "ns/iter",
            "extra": "iterations: 440340194\ncpu: 1.5898480527989267 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.8786251656766477,
            "unit": "ns/iter",
            "extra": "iterations: 370427208\ncpu: 1.8786390010530731 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.8777678573739978,
            "unit": "ns/iter",
            "extra": "iterations: 371502569\ncpu: 1.8777662880710786 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.8793336615477112,
            "unit": "ns/iter",
            "extra": "iterations: 371739315\ncpu: 1.8793250318438852 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.8979864069506112,
            "unit": "ns/iter",
            "extra": "iterations: 371978340\ncpu: 1.8978067378869412 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.5801751456826536,
            "unit": "ns/iter",
            "extra": "iterations: 441821567\ncpu: 1.5799636145874252 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.5680210042672116,
            "unit": "ns/iter",
            "extra": "iterations: 443214700\ncpu: 1.567951153244691 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 5.962320055480761,
            "unit": "ns/iter",
            "extra": "iterations: 114491331\ncpu: 5.958075550715726 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 67.48789741832854,
            "unit": "ns/iter",
            "extra": "iterations: 10353039\ncpu: 67.45652170343415 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.467742461455004,
            "unit": "ns/iter",
            "extra": "iterations: 156300937\ncpu: 4.466550318889016 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.2032617785659308,
            "unit": "ns/iter",
            "extra": "iterations: 314243772\ncpu: 2.2032481203796066 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 697.9790797672563,
            "unit": "ns/iter",
            "extra": "iterations: 994205\ncpu: 697.9636996394115 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 57.12616685196145,
            "unit": "ns/iter",
            "extra": "iterations: 11836120\ncpu: 57.124378597040376 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 67.68824269002026,
            "unit": "ns/iter",
            "extra": "iterations: 10153462\ncpu: 67.67189358664085 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c43d044b36c5d2b79da366dbc4e06319da711e4c",
          "message": "Implement a `.defines()` JSON overload that takes a property hash (#1364)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-12-08T22:47:05+01:00",
          "tree_id": "3369a8014f3f52f6d8041cbaf47ca90c961b636a",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/c43d044b36c5d2b79da366dbc4e06319da711e4c"
        },
        "date": 1733694667663,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 357.55500660599745,
            "unit": "ns/iter",
            "extra": "iterations: 1961119\ncpu: 357.5229244120322 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 20505.320455074856,
            "unit": "ns/iter",
            "extra": "iterations: 34192\ncpu: 20505.205896116066 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 52.02987288873971,
            "unit": "ns/iter",
            "extra": "iterations: 13436732\ncpu: 52.02835034590257 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 173.16345885990333,
            "unit": "ns/iter",
            "extra": "iterations: 4042014\ncpu: 173.16120132191529 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.575149733652415,
            "unit": "ns/iter",
            "extra": "iterations: 438772440\ncpu: 1.5750510674736087 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.5737841636807144,
            "unit": "ns/iter",
            "extra": "iterations: 440819925\ncpu: 1.5737605327163937 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.5805168756909824,
            "unit": "ns/iter",
            "extra": "iterations: 447115784\ncpu: 1.580492179627458 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.592666435519336,
            "unit": "ns/iter",
            "extra": "iterations: 446713465\ncpu: 1.5903908336409798 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.9062960012626549,
            "unit": "ns/iter",
            "extra": "iterations: 365392144\ncpu: 1.9060480950022791 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.895138737641056,
            "unit": "ns/iter",
            "extra": "iterations: 371157853\ncpu: 1.894708664563804 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.9190852081081382,
            "unit": "ns/iter",
            "extra": "iterations: 360260211\ncpu: 1.908867476902685 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.8908827835813709,
            "unit": "ns/iter",
            "extra": "iterations: 366250536\ncpu: 1.8893023544953929 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.5960235122173,
            "unit": "ns/iter",
            "extra": "iterations: 443259604\ncpu: 1.5940500637184132 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.576378200205221,
            "unit": "ns/iter",
            "extra": "iterations: 447004432\ncpu: 1.5759463431897234 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 5.95758111768999,
            "unit": "ns/iter",
            "extra": "iterations: 117680682\ncpu: 5.956534140412263 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 67.17335658249995,
            "unit": "ns/iter",
            "extra": "iterations: 10492708\ncpu: 67.16921885179686 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.455464569082588,
            "unit": "ns/iter",
            "extra": "iterations: 156693499\ncpu: 4.455098676429447 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.2040608260318004,
            "unit": "ns/iter",
            "extra": "iterations: 319399893\ncpu: 2.2039925980814297 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 695.5419675890257,
            "unit": "ns/iter",
            "extra": "iterations: 1002750\ncpu: 695.4515083520287 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 58.509205594733615,
            "unit": "ns/iter",
            "extra": "iterations: 11391931\ncpu: 58.474546589160354 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 67.46225988308944,
            "unit": "ns/iter",
            "extra": "iterations: 10406910\ncpu: 67.46142707105193 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb1707bd23e15127ecc0f98d91a73982606caccc",
          "message": "Cap key hash at 8 bits (#1365)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-12-09T07:11:54+01:00",
          "tree_id": "1082ccdec44a235da2b266ba391b7130189d0b2f",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/cb1707bd23e15127ecc0f98d91a73982606caccc"
        },
        "date": 1733724913755,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 356.4238225668276,
            "unit": "ns/iter",
            "extra": "iterations: 1873652\ncpu: 356.3879525119927 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 20548.734932657746,
            "unit": "ns/iter",
            "extra": "iterations: 33931\ncpu: 20545.04730187734 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 52.02669204654115,
            "unit": "ns/iter",
            "extra": "iterations: 13477348\ncpu: 52.02128786761314 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 172.87282248997954,
            "unit": "ns/iter",
            "extra": "iterations: 4055033\ncpu: 172.8565464202141 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.5794220575592706,
            "unit": "ns/iter",
            "extra": "iterations: 437921499\ncpu: 1.5793310024269895 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.583342158529615,
            "unit": "ns/iter",
            "extra": "iterations: 447704873\ncpu: 1.5795293789442393 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.6324989651478647,
            "unit": "ns/iter",
            "extra": "iterations: 437497266\ncpu: 1.6211964168022956 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.620803040275977,
            "unit": "ns/iter",
            "extra": "iterations: 419704528\ncpu: 1.613063369190049 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.8888549497747236,
            "unit": "ns/iter",
            "extra": "iterations: 365455096\ncpu: 1.8885931747959543 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.9024169658990928,
            "unit": "ns/iter",
            "extra": "iterations: 366834013\ncpu: 1.9021654897633464 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.903433416769799,
            "unit": "ns/iter",
            "extra": "iterations: 368611178\ncpu: 1.9032927970513194 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.8934623303294393,
            "unit": "ns/iter",
            "extra": "iterations: 369455528\ncpu: 1.8928259208507507 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.5829325558752367,
            "unit": "ns/iter",
            "extra": "iterations: 443239957\ncpu: 1.582440817717164 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.6147570295241664,
            "unit": "ns/iter",
            "extra": "iterations: 442167632\ncpu: 1.6145098562981206 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.006449508865354,
            "unit": "ns/iter",
            "extra": "iterations: 117194040\ncpu: 6.004836082107925 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 67.1899435368234,
            "unit": "ns/iter",
            "extra": "iterations: 10363922\ncpu: 67.1884639811068 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.526440726472287,
            "unit": "ns/iter",
            "extra": "iterations: 156310361\ncpu: 4.525720467116068 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.266266079317681,
            "unit": "ns/iter",
            "extra": "iterations: 301860756\ncpu: 2.2656406518772476 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 696.2904980254945,
            "unit": "ns/iter",
            "extra": "iterations: 1008864\ncpu: 696.074000063438 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 56.678899075980986,
            "unit": "ns/iter",
            "extra": "iterations: 12531328\ncpu: 56.67563725089609 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 58.98871803980719,
            "unit": "ns/iter",
            "extra": "iterations: 12058986\ncpu: 58.986717457006506 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "57a3bfed1ce366135363a93a7d1c14dbdd1ba62a",
          "message": "Support perfect hashing for small JSON strings (#1366)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-12-09T13:36:28-05:00",
          "tree_id": "8e3c78d5cebaa0aae04fa8e1f6e10124d9c71fa9",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/57a3bfed1ce366135363a93a7d1c14dbdd1ba62a"
        },
        "date": 1733769622077,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 362.1863453632222,
            "unit": "ns/iter",
            "extra": "iterations: 1932047\ncpu: 359.16621075988314 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 23510.837215320757,
            "unit": "ns/iter",
            "extra": "iterations: 30912\ncpu: 22564.861542443057 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 62.01201927016137,
            "unit": "ns/iter",
            "extra": "iterations: 12449092\ncpu: 58.33084051431222 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 165.69238999334848,
            "unit": "ns/iter",
            "extra": "iterations: 4206882\ncpu: 164.6872909675146 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.718475656685278,
            "unit": "ns/iter",
            "extra": "iterations: 408933443\ncpu: 1.709889499059631 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.6751882075366804,
            "unit": "ns/iter",
            "extra": "iterations: 419417848\ncpu: 1.6686581253928876 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.7047078405478984,
            "unit": "ns/iter",
            "extra": "iterations: 406820639\ncpu: 1.685895292052772 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.6003987940612476,
            "unit": "ns/iter",
            "extra": "iterations: 440243266\ncpu: 1.598011950056724 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.9015313119281687,
            "unit": "ns/iter",
            "extra": "iterations: 361955386\ncpu: 1.894429607962788 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.8863843919364267,
            "unit": "ns/iter",
            "extra": "iterations: 369424331\ncpu: 1.8858313910027749 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.893264213208931,
            "unit": "ns/iter",
            "extra": "iterations: 370533091\ncpu: 1.8928808709287466 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.9090952962361114,
            "unit": "ns/iter",
            "extra": "iterations: 368265993\ncpu: 1.908634012807156 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.6234964344683462,
            "unit": "ns/iter",
            "extra": "iterations: 442053147\ncpu: 1.6229383386789884 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.6183028575863472,
            "unit": "ns/iter",
            "extra": "iterations: 426436635\ncpu: 1.6179472947956264 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.419096371925057,
            "unit": "ns/iter",
            "extra": "iterations: 115817340\ncpu: 6.411950058600888 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 69.18441460936637,
            "unit": "ns/iter",
            "extra": "iterations: 9765761\ncpu: 69.18262693506422 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.413929049890879,
            "unit": "ns/iter",
            "extra": "iterations: 155592206\ncpu: 4.411589871024747 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.203086485501881,
            "unit": "ns/iter",
            "extra": "iterations: 315707817\ncpu: 2.1985138239386726 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 697.0411799415416,
            "unit": "ns/iter",
            "extra": "iterations: 1008355\ncpu: 696.8012257587845 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 25.009878953708846,
            "unit": "ns/iter",
            "extra": "iterations: 29131830\ncpu: 24.683756564554912 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 27.011158942763345,
            "unit": "ns/iter",
            "extra": "iterations: 25730753\ncpu: 26.986073823801476 ns\nthreads: 1"
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
          "id": "57a3bfed1ce366135363a93a7d1c14dbdd1ba62a",
          "message": "Support perfect hashing for small JSON strings (#1366)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-12-09T18:36:28Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/57a3bfed1ce366135363a93a7d1c14dbdd1ba62a"
        },
        "date": 1733771231299,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 384.28586823189767,
            "unit": "ns/iter",
            "extra": "iterations: 1892127\ncpu: 383.0429986993475 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 21777.17016533495,
            "unit": "ns/iter",
            "extra": "iterations: 32298\ncpu: 21771.564802774163 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 56.5241325303936,
            "unit": "ns/iter",
            "extra": "iterations: 13098067\ncpu: 56.42634138304529 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 171.06909839244352,
            "unit": "ns/iter",
            "extra": "iterations: 4400551\ncpu: 170.9574551005088 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.7217429009713041,
            "unit": "ns/iter",
            "extra": "iterations: 403902856\ncpu: 1.7211861458092776 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.7623845624074017,
            "unit": "ns/iter",
            "extra": "iterations: 361532899\ncpu: 1.7607802824052268 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.8019843109658396,
            "unit": "ns/iter",
            "extra": "iterations: 408656513\ncpu: 1.7997315021380795 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.7602775791620924,
            "unit": "ns/iter",
            "extra": "iterations: 404926217\ncpu: 1.7595106715453794 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.001868581937448,
            "unit": "ns/iter",
            "extra": "iterations: 340513299\ncpu: 2.0017338588587674 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.2404109515026214,
            "unit": "ns/iter",
            "extra": "iterations: 328703312\ncpu: 2.22927172696087 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.2146693141922476,
            "unit": "ns/iter",
            "extra": "iterations: 346080637\ncpu: 2.1325290151959604 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.500664648045437,
            "unit": "ns/iter",
            "extra": "iterations: 293957082\ncpu: 2.4368829460621724 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.6989323184344531,
            "unit": "ns/iter",
            "extra": "iterations: 424883612\ncpu: 1.6961962750401411 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.7504391689285317,
            "unit": "ns/iter",
            "extra": "iterations: 424948096\ncpu: 1.7467568556890305 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.736074816280015,
            "unit": "ns/iter",
            "extra": "iterations: 105556812\ncpu: 6.733388272468848 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 71.653235590029,
            "unit": "ns/iter",
            "extra": "iterations: 7224911\ncpu: 71.45513626396222 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.987753550780095,
            "unit": "ns/iter",
            "extra": "iterations: 139170544\ncpu: 4.966640067168235 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.449301786343136,
            "unit": "ns/iter",
            "extra": "iterations: 286862908\ncpu: 2.4475628616300424 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 805.1300897306528,
            "unit": "ns/iter",
            "extra": "iterations: 914292\ncpu: 804.9835282382406 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 25.43930736443008,
            "unit": "ns/iter",
            "extra": "iterations: 25688545\ncpu: 25.43791405858145 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 29.711109430449373,
            "unit": "ns/iter",
            "extra": "iterations: 23747248\ncpu: 29.701925882106362 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e687fb5f126ce575b562dcac87a1b62c6d910568",
          "message": "Try to use 128-bit unsigned integers for string perfect hashes (#1367)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-12-09T15:58:40-05:00",
          "tree_id": "adb935c799869ba589fa5f829cc482df36c36a2b",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/e687fb5f126ce575b562dcac87a1b62c6d910568"
        },
        "date": 1733778273604,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 336.7505220555031,
            "unit": "ns/iter",
            "extra": "iterations: 2082633\ncpu: 336.68726078958696 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 20782.236742147106,
            "unit": "ns/iter",
            "extra": "iterations: 33961\ncpu: 20779.982921586514 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 52.387964368162855,
            "unit": "ns/iter",
            "extra": "iterations: 13390722\ncpu: 52.37738487887356 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 125.65170489459598,
            "unit": "ns/iter",
            "extra": "iterations: 5549610\ncpu: 125.63927915655321 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.5891404263761464,
            "unit": "ns/iter",
            "extra": "iterations: 447647612\ncpu: 1.5889060522900784 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.5818567072416803,
            "unit": "ns/iter",
            "extra": "iterations: 446533940\ncpu: 1.5817453875958438 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.5823460639250344,
            "unit": "ns/iter",
            "extra": "iterations: 446744826\ncpu: 1.5821112162136162 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.6009629826923393,
            "unit": "ns/iter",
            "extra": "iterations: 446847491\ncpu: 1.6003961405257185 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.892334584301192,
            "unit": "ns/iter",
            "extra": "iterations: 365374979\ncpu: 1.8919932664573593 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.8889099713171817,
            "unit": "ns/iter",
            "extra": "iterations: 370229331\ncpu: 1.8885537731747208 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.9302519763874497,
            "unit": "ns/iter",
            "extra": "iterations: 373060750\ncpu: 1.930122640883556 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.9084622834888232,
            "unit": "ns/iter",
            "extra": "iterations: 365121507\ncpu: 1.9076088004862515 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.5757450301868359,
            "unit": "ns/iter",
            "extra": "iterations: 431619189\ncpu: 1.575599550093219 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.5813271807982068,
            "unit": "ns/iter",
            "extra": "iterations: 445374783\ncpu: 1.5787557509739 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.034799863828388,
            "unit": "ns/iter",
            "extra": "iterations: 117101895\ncpu: 6.025854662727701 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 76.05165845353218,
            "unit": "ns/iter",
            "extra": "iterations: 10447293\ncpu: 73.87674491373016 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.597818193625661,
            "unit": "ns/iter",
            "extra": "iterations: 148742805\ncpu: 4.590796845602056 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.2776301205239267,
            "unit": "ns/iter",
            "extra": "iterations: 300904433\ncpu: 2.272422487042603 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 743.8389659869877,
            "unit": "ns/iter",
            "extra": "iterations: 911826\ncpu: 743.0419838872799 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 28.426207226786172,
            "unit": "ns/iter",
            "extra": "iterations: 22997191\ncpu: 28.402338355149542 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 31.115564972859662,
            "unit": "ns/iter",
            "extra": "iterations: 22639654\ncpu: 31.08930021633724 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc5b364b46a1bc6b6bf34199d30eeb5a0cceeb00",
          "message": "Make `FlatMap` harder to use in non-performant manners (#1368)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-12-09T17:41:43-05:00",
          "tree_id": "c30f2b6031b428b939b465c155215c6212fa314b",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/fc5b364b46a1bc6b6bf34199d30eeb5a0cceeb00"
        },
        "date": 1733784348740,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 318.321701877757,
            "unit": "ns/iter",
            "extra": "iterations: 2169204\ncpu: 318.3213750297343 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 20918.712076038348,
            "unit": "ns/iter",
            "extra": "iterations: 33877\ncpu: 20910.41119343507 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 45.76670666195665,
            "unit": "ns/iter",
            "extra": "iterations: 15296802\ncpu: 45.76119897479226 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 126.07483300497522,
            "unit": "ns/iter",
            "extra": "iterations: 5571873\ncpu: 126.07394317853255 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.5800630637930244,
            "unit": "ns/iter",
            "extra": "iterations: 445783209\ncpu: 1.58003259382522 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.5881859796115976,
            "unit": "ns/iter",
            "extra": "iterations: 447224334\ncpu: 1.5880374702508917 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.6023375714822425,
            "unit": "ns/iter",
            "extra": "iterations: 437916020\ncpu: 1.6022912338306343 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.581324287283536,
            "unit": "ns/iter",
            "extra": "iterations: 447647612\ncpu: 1.5810829344935715 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.8887203343716097,
            "unit": "ns/iter",
            "extra": "iterations: 366670683\ncpu: 1.8872984181285088 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.8813271513106489,
            "unit": "ns/iter",
            "extra": "iterations: 369881110\ncpu: 1.8812179946145384 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.8853674621589567,
            "unit": "ns/iter",
            "extra": "iterations: 371924977\ncpu: 1.8850226345513792 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.9100912573485052,
            "unit": "ns/iter",
            "extra": "iterations: 365495168\ncpu: 1.9099978908613056 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.6023402022348001,
            "unit": "ns/iter",
            "extra": "iterations: 440961548\ncpu: 1.6021487660416178 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.6012165667792346,
            "unit": "ns/iter",
            "extra": "iterations: 439781366\ncpu: 1.6008818345432099 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.32745905016863,
            "unit": "ns/iter",
            "extra": "iterations: 111874700\ncpu: 6.320866111819747 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 67.8908323357488,
            "unit": "ns/iter",
            "extra": "iterations: 9400137\ncpu: 67.8878403580715 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.068282041858091,
            "unit": "ns/iter",
            "extra": "iterations: 143967751\ncpu: 5.068100285875824 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.2894846772133137,
            "unit": "ns/iter",
            "extra": "iterations: 297411669\ncpu: 2.2894898585838654 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 719.11954627896,
            "unit": "ns/iter",
            "extra": "iterations: 952744\ncpu: 719.115523162571 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 28.639550152979503,
            "unit": "ns/iter",
            "extra": "iterations: 24511177\ncpu: 28.630612067303 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 30.725644429401616,
            "unit": "ns/iter",
            "extra": "iterations: 21861200\ncpu: 30.72310760616986 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cad6ade1a2687e44d5e7d6b1327b40f38be692ae",
          "message": "Keep hash on the entry vector on `FlatMap` (#1370)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-12-09T19:16:45-05:00",
          "tree_id": "2485668a525cfd12bf04d0ea4ea6473ce46ffbc9",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/cad6ade1a2687e44d5e7d6b1327b40f38be692ae"
        },
        "date": 1733790024678,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 317.69193807472305,
            "unit": "ns/iter",
            "extra": "iterations: 2223712\ncpu: 317.6643378279203 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 19752.95246743802,
            "unit": "ns/iter",
            "extra": "iterations: 35239\ncpu: 19747.94971480461 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 47.989087803835474,
            "unit": "ns/iter",
            "extra": "iterations: 14522008\ncpu: 47.9556270730604 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 123.11862033128966,
            "unit": "ns/iter",
            "extra": "iterations: 5661736\ncpu: 123.08097728329274 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.5998226156929436,
            "unit": "ns/iter",
            "extra": "iterations: 443256798\ncpu: 1.599510719743097 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.5957818858192008,
            "unit": "ns/iter",
            "extra": "iterations: 439342493\ncpu: 1.5957117992681842 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.5888192585925323,
            "unit": "ns/iter",
            "extra": "iterations: 445556213\ncpu: 1.5887624935891103 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.6343694739517027,
            "unit": "ns/iter",
            "extra": "iterations: 437234926\ncpu: 1.6342656030181801 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.0558532020420115,
            "unit": "ns/iter",
            "extra": "iterations: 330661275\ncpu: 2.0405987970620387 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.0580920302329315,
            "unit": "ns/iter",
            "extra": "iterations: 344293338\ncpu: 2.0533856510462036 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.9391473118846811,
            "unit": "ns/iter",
            "extra": "iterations: 367494579\ncpu: 1.9387605714858718 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.9129815667589052,
            "unit": "ns/iter",
            "extra": "iterations: 371134239\ncpu: 1.9126825967679024 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.5931427547343084,
            "unit": "ns/iter",
            "extra": "iterations: 437417984\ncpu: 1.5931283703232477 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.5756034276126114,
            "unit": "ns/iter",
            "extra": "iterations: 445159526\ncpu: 1.5752420403107346 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.2865620912669,
            "unit": "ns/iter",
            "extra": "iterations: 111788942\ncpu: 6.28479872365194 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 71.30869892321192,
            "unit": "ns/iter",
            "extra": "iterations: 10460720\ncpu: 70.74207129145998 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.968206361097914,
            "unit": "ns/iter",
            "extra": "iterations: 125337965\ncpu: 4.953558963559066 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.2426040926166335,
            "unit": "ns/iter",
            "extra": "iterations: 307215617\ncpu: 2.237643407301137 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 703.8492400361733,
            "unit": "ns/iter",
            "extra": "iterations: 946624\ncpu: 703.4915658170522 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 21.28113038923869,
            "unit": "ns/iter",
            "extra": "iterations: 32544365\ncpu: 21.27717041029978 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 31.366952750483268,
            "unit": "ns/iter",
            "extra": "iterations: 22437480\ncpu: 31.360741045785833 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d4592ea5805335eb9b0df803195f8bda05ac5d0",
          "message": "Access `std::variant` with `std::get_if` (#1371)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-12-10T11:05:49-04:00",
          "tree_id": "ed9163624b94eb7010830af1342b2758ea6dbba1",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9d4592ea5805335eb9b0df803195f8bda05ac5d0"
        },
        "date": 1733843487990,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 330.4669269150075,
            "unit": "ns/iter",
            "extra": "iterations: 2113622\ncpu: 330.45170801590825 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 19932.7462750476,
            "unit": "ns/iter",
            "extra": "iterations: 35034\ncpu: 19930.125021407774 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 52.23431619657977,
            "unit": "ns/iter",
            "extra": "iterations: 13487736\ncpu: 52.22677846007662 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 115.61594062143114,
            "unit": "ns/iter",
            "extra": "iterations: 6064544\ncpu: 115.60489956046165 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.5673604535309065,
            "unit": "ns/iter",
            "extra": "iterations: 427462643\ncpu: 1.567329943262434 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.564825520260564,
            "unit": "ns/iter",
            "extra": "iterations: 445669682\ncpu: 1.5648069145524668 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.5697637261575474,
            "unit": "ns/iter",
            "extra": "iterations: 446793301\ncpu: 1.569358802897537 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.5679295212731212,
            "unit": "ns/iter",
            "extra": "iterations: 447644749\ncpu: 1.5670394918449042 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.897903330842994,
            "unit": "ns/iter",
            "extra": "iterations: 369258687\ncpu: 1.8975938134124404 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.8937506001284445,
            "unit": "ns/iter",
            "extra": "iterations: 372368155\ncpu: 1.8937038265261956 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.8904112151924606,
            "unit": "ns/iter",
            "extra": "iterations: 365758714\ncpu: 1.8903883175835967 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.8927372363687556,
            "unit": "ns/iter",
            "extra": "iterations: 372516777\ncpu: 1.8925187898315792 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.5951376228585534,
            "unit": "ns/iter",
            "extra": "iterations: 438824702\ncpu: 1.5950879629378778 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.5708855555518233,
            "unit": "ns/iter",
            "extra": "iterations: 445513677\ncpu: 1.5708631095516272 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.580895365267561,
            "unit": "ns/iter",
            "extra": "iterations: 106483313\ncpu: 6.579753956378114 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 68.46254167421988,
            "unit": "ns/iter",
            "extra": "iterations: 10391615\ncpu: 68.36069273159163 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.0117317396214345,
            "unit": "ns/iter",
            "extra": "iterations: 139742873\ncpu: 5.01135396006923 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.1963203837817122,
            "unit": "ns/iter",
            "extra": "iterations: 319424671\ncpu: 2.1960921108689164 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 694.8235266069042,
            "unit": "ns/iter",
            "extra": "iterations: 1006673\ncpu: 694.8035757390923 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 21.925928538719273,
            "unit": "ns/iter",
            "extra": "iterations: 32149467\ncpu: 21.914671244782987 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 34.36950744866371,
            "unit": "ns/iter",
            "extra": "iterations: 20394666\ncpu: 34.35947418800579 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ea09fa47f7b601564809e92a2b1c44aac909d97",
          "message": "Reduce instances of `std::reference_wrapper` in JSON and JSON Pointer (#1373)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-12-10T13:16:43-04:00",
          "tree_id": "1957165cf81e1413a71e906792d4ab79d978af75",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/6ea09fa47f7b601564809e92a2b1c44aac909d97"
        },
        "date": 1733851215318,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 329.0358618751176,
            "unit": "ns/iter",
            "extra": "iterations: 2135025\ncpu: 328.9699183850305 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 19677.00317217913,
            "unit": "ns/iter",
            "extra": "iterations: 34046\ncpu: 19672.971861599006 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 49.36937078386535,
            "unit": "ns/iter",
            "extra": "iterations: 14712528\ncpu: 49.36534360376411 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 122.28717119443641,
            "unit": "ns/iter",
            "extra": "iterations: 5604528\ncpu: 122.27220561660148 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.5989271347274556,
            "unit": "ns/iter",
            "extra": "iterations: 417479260\ncpu: 1.598788404482657 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.5786332216795123,
            "unit": "ns/iter",
            "extra": "iterations: 441417581\ncpu: 1.5780227838274523 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.5746737408953855,
            "unit": "ns/iter",
            "extra": "iterations: 446693511\ncpu: 1.5746456634781958 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.5948097826507988,
            "unit": "ns/iter",
            "extra": "iterations: 439044889\ncpu: 1.5945408260976248 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.8877883554250812,
            "unit": "ns/iter",
            "extra": "iterations: 372647662\ncpu: 1.8874075211559993 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.8859706734889974,
            "unit": "ns/iter",
            "extra": "iterations: 365237718\ncpu: 1.8856705265035079 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.9058915124953966,
            "unit": "ns/iter",
            "extra": "iterations: 355879123\ncpu: 1.905304234438051 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.8944698243320501,
            "unit": "ns/iter",
            "extra": "iterations: 370272415\ncpu: 1.8940298320629687 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.5729949261077592,
            "unit": "ns/iter",
            "extra": "iterations: 445655496\ncpu: 1.5728651532214013 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.5754633713723307,
            "unit": "ns/iter",
            "extra": "iterations: 446476978\ncpu: 1.5752928698599094 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.300214944534391,
            "unit": "ns/iter",
            "extra": "iterations: 111502254\ncpu: 6.29715521266503 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 72.94891444410003,
            "unit": "ns/iter",
            "extra": "iterations: 9663436\ncpu: 72.8847378924018 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 6.649206497019612,
            "unit": "ns/iter",
            "extra": "iterations: 116255896\ncpu: 6.562789727240979 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.2583249152809213,
            "unit": "ns/iter",
            "extra": "iterations: 315625254\ncpu: 2.2467086870051283 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 732.9535436736647,
            "unit": "ns/iter",
            "extra": "iterations: 884788\ncpu: 732.8467384277352 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 22.14128795152318,
            "unit": "ns/iter",
            "extra": "iterations: 30802945\ncpu: 22.131000785801465 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 36.19170003677491,
            "unit": "ns/iter",
            "extra": "iterations: 19523460\ncpu: 36.17299392628134 ns\nthreads: 1"
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
          "id": "6ea09fa47f7b601564809e92a2b1c44aac909d97",
          "message": "Reduce instances of `std::reference_wrapper` in JSON and JSON Pointer (#1373)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-12-10T17:16:43Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/6ea09fa47f7b601564809e92a2b1c44aac909d97"
        },
        "date": 1733857948986,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 308.45967300078536,
            "unit": "ns/iter",
            "extra": "iterations: 2270464\ncpu: 308.4338707858834 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 20322.184429326724,
            "unit": "ns/iter",
            "extra": "iterations: 35721\ncpu: 20214.299711654203 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 47.285039402630645,
            "unit": "ns/iter",
            "extra": "iterations: 15046839\ncpu: 46.534624315445924 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 120.83706161298,
            "unit": "ns/iter",
            "extra": "iterations: 5823821\ncpu: 117.84084710021129 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.623261563727837,
            "unit": "ns/iter",
            "extra": "iterations: 439086199\ncpu: 1.5911021607855198 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.7162279865952652,
            "unit": "ns/iter",
            "extra": "iterations: 429218761\ncpu: 1.6697476091917618 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.600372607291243,
            "unit": "ns/iter",
            "extra": "iterations: 439654306\ncpu: 1.5830323745310948 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.6053631782455413,
            "unit": "ns/iter",
            "extra": "iterations: 439190885\ncpu: 1.5847915422925973 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.9805154758624048,
            "unit": "ns/iter",
            "extra": "iterations: 367461784\ncpu: 1.92536212146621 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.9277832656584497,
            "unit": "ns/iter",
            "extra": "iterations: 370674363\ncpu: 1.9081411357278006 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.9440103162066098,
            "unit": "ns/iter",
            "extra": "iterations: 365493259\ncpu: 1.9076685625000787 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.9664927243778183,
            "unit": "ns/iter",
            "extra": "iterations: 355472499\ncpu: 1.9219011369990668 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.6671663617914665,
            "unit": "ns/iter",
            "extra": "iterations: 426686172\ncpu: 1.6257686457202547 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.7916604297139427,
            "unit": "ns/iter",
            "extra": "iterations: 431246920\ncpu: 1.699597066107742 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.463864921334219,
            "unit": "ns/iter",
            "extra": "iterations: 111084662\ncpu: 6.3677737976103295 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 70.3881985627148,
            "unit": "ns/iter",
            "extra": "iterations: 10285798\ncpu: 68.9263973490437 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.2496129224554196,
            "unit": "ns/iter",
            "extra": "iterations: 135794496\ncpu: 5.24840123122515 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.044372933801661,
            "unit": "ns/iter",
            "extra": "iterations: 331618393\ncpu: 2.044147774396827 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 697.3772299063413,
            "unit": "ns/iter",
            "extra": "iterations: 1007049\ncpu: 697.2014271400898 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 21.673632361356596,
            "unit": "ns/iter",
            "extra": "iterations: 32349298\ncpu: 21.666065211059603 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 37.04242245058896,
            "unit": "ns/iter",
            "extra": "iterations: 19066296\ncpu: 36.65405173611069 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dea3a52d4b395a774b538ea6683a08ece558b92a",
          "message": "Flatten `Token` to not contain a variant at all (#1374)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-12-10T15:23:52-04:00",
          "tree_id": "2310cc2f8b28f10a2f56070bf3d32b0fc5988b60",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/dea3a52d4b395a774b538ea6683a08ece558b92a"
        },
        "date": 1733858847616,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 320.0140973642868,
            "unit": "ns/iter",
            "extra": "iterations: 2163525\ncpu: 319.9889069920616 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 20694.636290249262,
            "unit": "ns/iter",
            "extra": "iterations: 33447\ncpu: 20693.604807606065 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 47.53319904757561,
            "unit": "ns/iter",
            "extra": "iterations: 14763541\ncpu: 47.530399380473796 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 119.56500782540536,
            "unit": "ns/iter",
            "extra": "iterations: 5738363\ncpu: 119.55622187024416 ns\nthreads: 1"
          },
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.6260583775724196,
            "unit": "ns/iter",
            "extra": "iterations: 431308034\ncpu: 1.6257197750227874 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.6233985109590516,
            "unit": "ns/iter",
            "extra": "iterations: 432552679\ncpu: 1.6230208112986868 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.6356507853991515,
            "unit": "ns/iter",
            "extra": "iterations: 425907335\ncpu: 1.6353909471880785 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.6287243510600846,
            "unit": "ns/iter",
            "extra": "iterations: 430300534\ncpu: 1.6285547997948824 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.9716896217794557,
            "unit": "ns/iter",
            "extra": "iterations: 360143440\ncpu: 1.9714589275872976 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.9536934015420306,
            "unit": "ns/iter",
            "extra": "iterations: 354946175\ncpu: 1.9534398419704089 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.9648058955136096,
            "unit": "ns/iter",
            "extra": "iterations: 359773240\ncpu: 1.9645680151197462 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.9940277305906795,
            "unit": "ns/iter",
            "extra": "iterations: 348947922\ncpu: 1.9929220269149537 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.6773790850016566,
            "unit": "ns/iter",
            "extra": "iterations: 414191380\ncpu: 1.6772681266326706 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.6732595138521391,
            "unit": "ns/iter",
            "extra": "iterations: 413379317\ncpu: 1.6726477875524624 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.642480844935392,
            "unit": "ns/iter",
            "extra": "iterations: 107450956\ncpu: 6.641271763091622 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 70.6201162967455,
            "unit": "ns/iter",
            "extra": "iterations: 9598377\ncpu: 70.62016838888496 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 6.044257117232684,
            "unit": "ns/iter",
            "extra": "iterations: 139176078\ncpu: 6.043430825806142 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.219887881805799,
            "unit": "ns/iter",
            "extra": "iterations: 319178526\ncpu: 2.219745196768017 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 734.0975989404486,
            "unit": "ns/iter",
            "extra": "iterations: 934754\ncpu: 733.4186320679039 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 21.62420307101362,
            "unit": "ns/iter",
            "extra": "iterations: 32261187\ncpu: 21.620469203442518 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 38.09695129001139,
            "unit": "ns/iter",
            "extra": "iterations: 18622073\ncpu: 38.09420143503906 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}