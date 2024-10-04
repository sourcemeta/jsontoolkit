window.BENCHMARK_DATA = {
  "lastUpdate": 1728055555607,
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
      }
    ]
  }
}