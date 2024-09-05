window.BENCHMARK_DATA = {
  "lastUpdate": 1725561238508,
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
      }
    ]
  }
}