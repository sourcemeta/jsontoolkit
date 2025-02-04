window.BENCHMARK_DATA = {
  "lastUpdate": 1738708905426,
  "repoUrl": "https://github.com/sourcemeta/core",
  "entries": {
    "Benchmark (macos/gcc)": [
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb6f334e8d227f6cbbaa1f5bc55a80ff7b51d166",
          "message": "Benchmark GCC on macOS (#1476)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-23T12:31:12-04:00",
          "tree_id": "4b6a087a0202d564d71b69f9b0f54ff8d2f650fd",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/fb6f334e8d227f6cbbaa1f5bc55a80ff7b51d166"
        },
        "date": 1737650395173,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 205.3849793964567,
            "unit": "ns/iter",
            "extra": "iterations: 3516280\ncpu: 205.11648674167023 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 23498.064881071037,
            "unit": "ns/iter",
            "extra": "iterations: 30520\ncpu: 23485.812581913488 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 23.90355892626568,
            "unit": "ns/iter",
            "extra": "iterations: 29264336\ncpu: 23.90144782372647 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 119.52414855176553,
            "unit": "ns/iter",
            "extra": "iterations: 5921865\ncpu: 119.51623348387716 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.544254919685629,
            "unit": "ns/iter",
            "extra": "iterations: 125120652\ncpu: 5.542450338254313 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.2055139392748275,
            "unit": "ns/iter",
            "extra": "iterations: 136798906\ncpu: 5.205421745112493 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.7721176375448229,
            "unit": "ns/iter",
            "extra": "iterations: 903960639\ncpu: 0.7719240970181227 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 2.9817006722960047,
            "unit": "ns/iter",
            "extra": "iterations: 245179594\ncpu: 2.98020723535418 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 1.9234511415303033,
            "unit": "ns/iter",
            "extra": "iterations: 364226695\ncpu: 1.9234477033595794 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 1.9265031072713967,
            "unit": "ns/iter",
            "extra": "iterations: 360856364\ncpu: 1.9260821460807085 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.2787953450005063,
            "unit": "ns/iter",
            "extra": "iterations: 547726544\ncpu: 1.2786636099199127 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 1.7590347756963327,
            "unit": "ns/iter",
            "extra": "iterations: 400982981\ncpu: 1.7588551968992414 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.7376435933758945,
            "unit": "ns/iter",
            "extra": "iterations: 376368368\ncpu: 1.7374812965153341 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 1.9525850884180258,
            "unit": "ns/iter",
            "extra": "iterations: 369299597\ncpu: 1.9517676321753463 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.8936291713536992,
            "unit": "ns/iter",
            "extra": "iterations: 395862670\ncpu: 1.8928180320715748 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 54.19842067946014,
            "unit": "ns/iter",
            "extra": "iterations: 12265854\ncpu: 54.14820688392353 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 38.28035535450496,
            "unit": "ns/iter",
            "extra": "iterations: 18315210\ncpu: 38.27365342794318 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 189.81836043931227,
            "unit": "ns/iter",
            "extra": "iterations: 3938824\ncpu: 186.76234327809556 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d785bc4d3141dd8aa039cb8ea414744e50ccd8b",
          "message": "Upgrade Noa to enable SIMD if possible (#1477)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-23T14:09:16-04:00",
          "tree_id": "94dc56d3c3e328661cd49ff9cb3def795d102698",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/2d785bc4d3141dd8aa039cb8ea414744e50ccd8b"
        },
        "date": 1737656295898,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 230.77125580170355,
            "unit": "ns/iter",
            "extra": "iterations: 2951221\ncpu: 230.59913168142953 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 28515.860312681267,
            "unit": "ns/iter",
            "extra": "iterations: 23597\ncpu: 28208.28918930372 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 25.874653489014673,
            "unit": "ns/iter",
            "extra": "iterations: 25699674\ncpu: 25.848849288905395 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 130.26151910424161,
            "unit": "ns/iter",
            "extra": "iterations: 5412218\ncpu: 130.17491165359579 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 6.266932283910248,
            "unit": "ns/iter",
            "extra": "iterations: 119594745\ncpu: 6.2610443293306925 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 6.011854246958226,
            "unit": "ns/iter",
            "extra": "iterations: 118815242\ncpu: 6.006460012933348 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.960109817488114,
            "unit": "ns/iter",
            "extra": "iterations: 799506590\ncpu: 0.9576506430047057 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.7664136115575477,
            "unit": "ns/iter",
            "extra": "iterations: 206038700\ncpu: 3.7636376078862894 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.310522275464849,
            "unit": "ns/iter",
            "extra": "iterations: 288958881\ncpu: 2.308217687207886 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.249258958658113,
            "unit": "ns/iter",
            "extra": "iterations: 296433063\ncpu: 2.246314878850075 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.415885686843323,
            "unit": "ns/iter",
            "extra": "iterations: 488400488\ncpu: 1.414599323659969 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 1.9206079933666491,
            "unit": "ns/iter",
            "extra": "iterations: 361514228\ncpu: 1.9190890600300197 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 2.854012339067094,
            "unit": "ns/iter",
            "extra": "iterations: 354190069\ncpu: 2.4044406507625737 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.166019823985871,
            "unit": "ns/iter",
            "extra": "iterations: 341992251\ncpu: 2.1629232762937676 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 2.1421007058450026,
            "unit": "ns/iter",
            "extra": "iterations: 348720197\ncpu: 2.141037446133353 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 60.478695426467056,
            "unit": "ns/iter",
            "extra": "iterations: 12291484\ncpu: 60.41971823743976 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 42.06533303363665,
            "unit": "ns/iter",
            "extra": "iterations: 16651007\ncpu: 41.97746118297828 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 178.97637734761756,
            "unit": "ns/iter",
            "extra": "iterations: 3583037\ncpu: 178.65235552967985 ns\nthreads: 1"
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
          "id": "2d785bc4d3141dd8aa039cb8ea414744e50ccd8b",
          "message": "Upgrade Noa to enable SIMD if possible (#1477)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-23T18:09:16Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/2d785bc4d3141dd8aa039cb8ea414744e50ccd8b"
        },
        "date": 1737660836696,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 312.7149567113118,
            "unit": "ns/iter",
            "extra": "iterations: 2496069\ncpu: 256.1635916314813 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 32995.53077202079,
            "unit": "ns/iter",
            "extra": "iterations: 19871\ncpu: 31706.45664536259 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 33.069845473761184,
            "unit": "ns/iter",
            "extra": "iterations: 22287173\ncpu: 33.001045040571114 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 156.86386277406243,
            "unit": "ns/iter",
            "extra": "iterations: 4244456\ncpu: 156.58025433648052 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 7.065158267004071,
            "unit": "ns/iter",
            "extra": "iterations: 98506917\ncpu: 7.052418461132032 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 7.18480167603027,
            "unit": "ns/iter",
            "extra": "iterations: 102907883\ncpu: 7.176146068421215 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 1.09437923958855,
            "unit": "ns/iter",
            "extra": "iterations: 612696829\ncpu: 1.0921094550009487 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.898334164356106,
            "unit": "ns/iter",
            "extra": "iterations: 185512040\ncpu: 3.890297362909715 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.50855606969893,
            "unit": "ns/iter",
            "extra": "iterations: 307693660\ncpu: 2.3622618678590914 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.527224896630376,
            "unit": "ns/iter",
            "extra": "iterations: 299929731\ncpu: 2.5176630455484865 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.8555003087604405,
            "unit": "ns/iter",
            "extra": "iterations: 371256278\ncpu: 1.850885872426918 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.3791128990930344,
            "unit": "ns/iter",
            "extra": "iterations: 276245274\ncpu: 2.371881301397392 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 2.575542162192411,
            "unit": "ns/iter",
            "extra": "iterations: 286036515\ncpu: 2.3071005462362026 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.553434387346033,
            "unit": "ns/iter",
            "extra": "iterations: 272445628\ncpu: 2.4580610998096133 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 2.6380183402983324,
            "unit": "ns/iter",
            "extra": "iterations: 295234078\ncpu: 2.3860321436199503 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 72.93497138412587,
            "unit": "ns/iter",
            "extra": "iterations: 11058452\ncpu: 70.12979755213482 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 47.7606018120132,
            "unit": "ns/iter",
            "extra": "iterations: 13959796\ncpu: 47.62770172286185 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 191.29319515789592,
            "unit": "ns/iter",
            "extra": "iterations: 3861110\ncpu: 189.0979536972539 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b74613548348d2e08e26d2d5028dd6e0070ec18",
          "message": "Fix GitHub Pages deployments (#1478)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-24T10:02:41-04:00",
          "tree_id": "a5037ec9e860c968cba4fdabc9b3877b9681136f",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9b74613548348d2e08e26d2d5028dd6e0070ec18"
        },
        "date": 1737728027069,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 223.30274587204596,
            "unit": "ns/iter",
            "extra": "iterations: 3182267\ncpu: 223.1858608972785 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 25884.984348313923,
            "unit": "ns/iter",
            "extra": "iterations: 27240\ncpu: 25846.071953010283 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 25.09935364528382,
            "unit": "ns/iter",
            "extra": "iterations: 27939093\ncpu: 25.08145128404849 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 122.43131677674148,
            "unit": "ns/iter",
            "extra": "iterations: 5754260\ncpu: 122.41313392165128 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.866337908509899,
            "unit": "ns/iter",
            "extra": "iterations: 117728182\ncpu: 5.865163194314853 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.509174223216546,
            "unit": "ns/iter",
            "extra": "iterations: 122867373\ncpu: 5.5064821805867 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.8242025526868092,
            "unit": "ns/iter",
            "extra": "iterations: 875821082\ncpu: 0.8239536759632367 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.0654989225974867,
            "unit": "ns/iter",
            "extra": "iterations: 230484544\ncpu: 3.063437520565371 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.0662589557279922,
            "unit": "ns/iter",
            "extra": "iterations: 343051492\ncpu: 2.0654187972457523 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.0461139544658997,
            "unit": "ns/iter",
            "extra": "iterations: 343750614\ncpu: 2.045730164135797 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.3749590947481063,
            "unit": "ns/iter",
            "extra": "iterations: 520349377\ncpu: 1.3748743279460067 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 1.858652453407324,
            "unit": "ns/iter",
            "extra": "iterations: 376747165\ncpu: 1.858445305089425 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.9077907102776093,
            "unit": "ns/iter",
            "extra": "iterations: 379029900\ncpu: 1.9044618907373836 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.020194835978216,
            "unit": "ns/iter",
            "extra": "iterations: 335441825\ncpu: 2.0197063976741756 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.8646911139987181,
            "unit": "ns/iter",
            "extra": "iterations: 372421645\ncpu: 1.8640941237451438 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 55.65741820207309,
            "unit": "ns/iter",
            "extra": "iterations: 12699334\ncpu: 55.60874294667736 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 37.269233210738044,
            "unit": "ns/iter",
            "extra": "iterations: 18742536\ncpu: 37.25717800408656 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 167.00264615113514,
            "unit": "ns/iter",
            "extra": "iterations: 4245795\ncpu: 166.90937739575307 ns\nthreads: 1"
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
          "id": "9b74613548348d2e08e26d2d5028dd6e0070ec18",
          "message": "Fix GitHub Pages deployments (#1478)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-24T14:02:41Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/9b74613548348d2e08e26d2d5028dd6e0070ec18"
        },
        "date": 1737746126854,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 219.14733422424777,
            "unit": "ns/iter",
            "extra": "iterations: 3219012\ncpu: 219.06317839138225 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 26912.816776120795,
            "unit": "ns/iter",
            "extra": "iterations: 28184\ncpu: 26909.02639795629 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 24.894568134591562,
            "unit": "ns/iter",
            "extra": "iterations: 28232295\ncpu: 24.893087862676417 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 124.82002589499558,
            "unit": "ns/iter",
            "extra": "iterations: 5807875\ncpu: 124.73288423046284 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.711702966497344,
            "unit": "ns/iter",
            "extra": "iterations: 123424138\ncpu: 5.707206154439578 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.687145734028291,
            "unit": "ns/iter",
            "extra": "iterations: 131359192\ncpu: 5.680873859211927 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.8416126530228605,
            "unit": "ns/iter",
            "extra": "iterations: 817632836\ncpu: 0.8401558373812675 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.0477192408301303,
            "unit": "ns/iter",
            "extra": "iterations: 218022350\ncpu: 3.0459537749226175 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.0636424363533084,
            "unit": "ns/iter",
            "extra": "iterations: 337383542\ncpu: 2.0629370237627085 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.052859906505919,
            "unit": "ns/iter",
            "extra": "iterations: 335133479\ncpu: 2.0519018334184405 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.4259180266350877,
            "unit": "ns/iter",
            "extra": "iterations: 502545032\ncpu: 1.4249688175208142 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 1.9540152729368248,
            "unit": "ns/iter",
            "extra": "iterations: 342693769\ncpu: 1.9491833830220586 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.8932172587668006,
            "unit": "ns/iter",
            "extra": "iterations: 374918991\ncpu: 1.8929129146194703 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.1184850944182076,
            "unit": "ns/iter",
            "extra": "iterations: 343145665\ncpu: 2.11747101628109 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.9898031468362383,
            "unit": "ns/iter",
            "extra": "iterations: 367116822\ncpu: 1.989230556152501 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 57.632638825910846,
            "unit": "ns/iter",
            "extra": "iterations: 12500223\ncpu: 57.62337199904352 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 39.37208243772645,
            "unit": "ns/iter",
            "extra": "iterations: 18239189\ncpu: 39.034027225662214 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 198.64684347828458,
            "unit": "ns/iter",
            "extra": "iterations: 3833432\ncpu: 198.00168621746835 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c43c576cf013015a5c2172dc2092876daf5b0e9",
          "message": "Namespace current modules under `src/core` (#1479)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-27T14:31:35-04:00",
          "tree_id": "e25fe0ef6eb18c9bda554d374f2111e85a02e393",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/5c43c576cf013015a5c2172dc2092876daf5b0e9"
        },
        "date": 1738003203153,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 213.16082221678118,
            "unit": "ns/iter",
            "extra": "iterations: 3313076\ncpu: 213.1532750833365 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 24743.794661411925,
            "unit": "ns/iter",
            "extra": "iterations: 26654\ncpu: 24706.685675695942 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 23.964197394958717,
            "unit": "ns/iter",
            "extra": "iterations: 28457367\ncpu: 23.957381580664165 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 118.5627746771994,
            "unit": "ns/iter",
            "extra": "iterations: 6160941\ncpu: 118.56240791788149 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.586521176715103,
            "unit": "ns/iter",
            "extra": "iterations: 116194144\ncpu: 5.5855999076855305 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.173304823173108,
            "unit": "ns/iter",
            "extra": "iterations: 134061094\ncpu: 5.1726714985631785 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.751447749358146,
            "unit": "ns/iter",
            "extra": "iterations: 870192188\ncpu: 0.7513248326242157 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 2.889165597822071,
            "unit": "ns/iter",
            "extra": "iterations: 234429683\ncpu: 2.8875652235557583 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 1.925764912723556,
            "unit": "ns/iter",
            "extra": "iterations: 362921832\ncpu: 1.9255110560557291 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 1.9416774571528428,
            "unit": "ns/iter",
            "extra": "iterations: 358397248\ncpu: 1.9416360027407387 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.3313075065309803,
            "unit": "ns/iter",
            "extra": "iterations: 547131468\ncpu: 1.3199953616997948 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 1.759109885357443,
            "unit": "ns/iter",
            "extra": "iterations: 366705258\ncpu: 1.7572286896415363 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.8071705888049658,
            "unit": "ns/iter",
            "extra": "iterations: 387882549\ncpu: 1.806704121664422 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 1.908279626090417,
            "unit": "ns/iter",
            "extra": "iterations: 341190462\ncpu: 1.9078610702781043 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.8315607831399965,
            "unit": "ns/iter",
            "extra": "iterations: 385853508\ncpu: 1.82877953775141 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 54.54814860958687,
            "unit": "ns/iter",
            "extra": "iterations: 12628768\ncpu: 54.523529136016975 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 35.579475073552246,
            "unit": "ns/iter",
            "extra": "iterations: 19422971\ncpu: 35.57756431804375 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 162.24193108662723,
            "unit": "ns/iter",
            "extra": "iterations: 4267486\ncpu: 162.22361362169679 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90a915c5d7009cdca6cb95707c64d35fbdd5f46b",
          "message": "Make project follow \"Live at Head\" (#1481)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-27T14:52:07-04:00",
          "tree_id": "d0f73708216d27992fbb59e2f81406e940015e16",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/90a915c5d7009cdca6cb95707c64d35fbdd5f46b"
        },
        "date": 1738004377054,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 202.09508072734155,
            "unit": "ns/iter",
            "extra": "iterations: 3433527\ncpu: 202.0595731444664 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 22940.23964322201,
            "unit": "ns/iter",
            "extra": "iterations: 30558\ncpu: 22939.62301197722 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 23.627428359377184,
            "unit": "ns/iter",
            "extra": "iterations: 29622984\ncpu: 23.626080343560258 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 114.08554963132927,
            "unit": "ns/iter",
            "extra": "iterations: 6161972\ncpu: 114.06494544279015 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.385744093341523,
            "unit": "ns/iter",
            "extra": "iterations: 129632030\ncpu: 5.3847880033969995 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.067683398585804,
            "unit": "ns/iter",
            "extra": "iterations: 138646807\ncpu: 5.067047811638391 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.745370146606143,
            "unit": "ns/iter",
            "extra": "iterations: 939698223\ncpu: 0.7453201281620391 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 2.826882031765197,
            "unit": "ns/iter",
            "extra": "iterations: 247459125\ncpu: 2.8265435756309225 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 1.8989138202041285,
            "unit": "ns/iter",
            "extra": "iterations: 369609639\ncpu: 1.8978779933820917 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 1.8924269145012675,
            "unit": "ns/iter",
            "extra": "iterations: 370356653\ncpu: 1.8922246821363318 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.2539621689516844,
            "unit": "ns/iter",
            "extra": "iterations: 559221564\ncpu: 1.2536050916663155 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 1.7238535415150478,
            "unit": "ns/iter",
            "extra": "iterations: 403744441\ncpu: 1.7234441625414234 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.7240685112459642,
            "unit": "ns/iter",
            "extra": "iterations: 406331811\ncpu: 1.7239974351897374 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 1.8805700006330206,
            "unit": "ns/iter",
            "extra": "iterations: 372649645\ncpu: 1.8804875018732414 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.7254081236571035,
            "unit": "ns/iter",
            "extra": "iterations: 406619770\ncpu: 1.7253219143771612 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 51.690047289163665,
            "unit": "ns/iter",
            "extra": "iterations: 13666003\ncpu: 51.66902129320472 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 34.76705880778256,
            "unit": "ns/iter",
            "extra": "iterations: 20097040\ncpu: 34.76148726379599 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 155.84789555724956,
            "unit": "ns/iter",
            "extra": "iterations: 4472129\ncpu: 155.83986955653577 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f285701952ddab41e8d272009788b0ffa79e451c",
          "message": "Implement a `PointerProxy` class (#1480)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-27T14:54:16-04:00",
          "tree_id": "1e94c2d51e5917ad799ce1e0cc19aac6143be572",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/f285701952ddab41e8d272009788b0ffa79e451c"
        },
        "date": 1738004689244,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 216.21509594941247,
            "unit": "ns/iter",
            "extra": "iterations: 3256405\ncpu: 216.1107110448485 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 23828.67190302635,
            "unit": "ns/iter",
            "extra": "iterations: 29400\ncpu: 23826.836734693872 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 24.218518155859254,
            "unit": "ns/iter",
            "extra": "iterations: 28756999\ncpu: 24.212888138988365 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 117.3557015951958,
            "unit": "ns/iter",
            "extra": "iterations: 5972594\ncpu: 117.3342772001577 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.579267215545694,
            "unit": "ns/iter",
            "extra": "iterations: 126223921\ncpu: 5.577698699440647 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.237618055546419,
            "unit": "ns/iter",
            "extra": "iterations: 131801921\ncpu: 5.235697588960022 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.7734738449834633,
            "unit": "ns/iter",
            "extra": "iterations: 908006019\ncpu: 0.7733109531292645 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 2.99620526250668,
            "unit": "ns/iter",
            "extra": "iterations: 237657915\ncpu: 2.981592260455543 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 1.955507152007,
            "unit": "ns/iter",
            "extra": "iterations: 357011710\ncpu: 1.9550002995700053 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.024872705958354,
            "unit": "ns/iter",
            "extra": "iterations: 357907977\ncpu: 2.0245092218215652 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.3100397677736282,
            "unit": "ns/iter",
            "extra": "iterations: 520969002\ncpu: 1.3100203608659235 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 1.782364311081305,
            "unit": "ns/iter",
            "extra": "iterations: 391766194\ncpu: 1.7821854225635447 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.796509234033133,
            "unit": "ns/iter",
            "extra": "iterations: 392783997\ncpu: 1.7964097452778898 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 1.9528465300801838,
            "unit": "ns/iter",
            "extra": "iterations: 359963798\ncpu: 1.9479625559456941 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.7858692632762243,
            "unit": "ns/iter",
            "extra": "iterations: 392748736\ncpu: 1.7855410742811402 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 53.20884450834256,
            "unit": "ns/iter",
            "extra": "iterations: 13176719\ncpu: 53.20664423366708 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 36.94768250329327,
            "unit": "ns/iter",
            "extra": "iterations: 19406386\ncpu: 36.94294239020095 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 165.28141894184168,
            "unit": "ns/iter",
            "extra": "iterations: 4217630\ncpu: 165.16455924298708 ns\nthreads: 1"
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
          "id": "0fc100e5da458b5ca38a2419d359fc06be02b034",
          "message": "Implement `TransformRule` in the JSON Schema module (#1482)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-27T19:08:34Z",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/0fc100e5da458b5ca38a2419d359fc06be02b034"
        },
        "date": 1738005692106,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 265.48373806171037,
            "unit": "ns/iter",
            "extra": "iterations: 2543466\ncpu: 265.42874958816043 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 27284.843079793613,
            "unit": "ns/iter",
            "extra": "iterations: 26941\ncpu: 27275.602241936078 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 26.73470523229167,
            "unit": "ns/iter",
            "extra": "iterations: 24987149\ncpu: 26.46920623077086 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 128.4278609445176,
            "unit": "ns/iter",
            "extra": "iterations: 5991971\ncpu: 122.70152842862568 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 6.0044203344483105,
            "unit": "ns/iter",
            "extra": "iterations: 128193389\ncpu: 5.993241975996126 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.756198711807972,
            "unit": "ns/iter",
            "extra": "iterations: 124201561\ncpu: 5.7504510752485585 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.8669589993505308,
            "unit": "ns/iter",
            "extra": "iterations: 784515898\ncpu: 0.8664795726038939 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.403854707406344,
            "unit": "ns/iter",
            "extra": "iterations: 212984121\ncpu: 3.4014695396000922 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.155209136543456,
            "unit": "ns/iter",
            "extra": "iterations: 317106539\ncpu: 2.152282958756643 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.1927889200459236,
            "unit": "ns/iter",
            "extra": "iterations: 313978784\ncpu: 2.190899624606484 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.5866654329945047,
            "unit": "ns/iter",
            "extra": "iterations: 422542013\ncpu: 1.5851157503715472 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 1.953092742825081,
            "unit": "ns/iter",
            "extra": "iterations: 322781454\ncpu: 1.9520421393231566 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.83401508070085,
            "unit": "ns/iter",
            "extra": "iterations: 376870895\ncpu: 1.8329804958804259 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.24089132118328,
            "unit": "ns/iter",
            "extra": "iterations: 351675735\ncpu: 2.2347689129021138 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.9047236451432341,
            "unit": "ns/iter",
            "extra": "iterations: 328117822\ncpu: 1.9041361307097804 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 55.845487028638665,
            "unit": "ns/iter",
            "extra": "iterations: 11809961\ncpu: 55.82372371932475 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 39.965027060481205,
            "unit": "ns/iter",
            "extra": "iterations: 17728296\ncpu: 39.9390330576611 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 182.07918926054853,
            "unit": "ns/iter",
            "extra": "iterations: 3712760\ncpu: 181.9538564302564 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0fc100e5da458b5ca38a2419d359fc06be02b034",
          "message": "Implement `TransformRule` in the JSON Schema module (#1482)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-27T15:08:34-04:00",
          "tree_id": "c085656a29bf1a78a7a4f9771ce1716d237d4204",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/0fc100e5da458b5ca38a2419d359fc06be02b034"
        },
        "date": 1738005897782,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 225.53524386811998,
            "unit": "ns/iter",
            "extra": "iterations: 3087332\ncpu: 225.3622221387269 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 27628.742809797695,
            "unit": "ns/iter",
            "extra": "iterations: 27886\ncpu: 27426.271247220815 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 25.135020231942192,
            "unit": "ns/iter",
            "extra": "iterations: 28111885\ncpu: 25.116067456878095 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 118.70276494535462,
            "unit": "ns/iter",
            "extra": "iterations: 6094323\ncpu: 118.62384058081597 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.74125390298375,
            "unit": "ns/iter",
            "extra": "iterations: 101890802\ncpu: 5.7383786222430455 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.6180782925244666,
            "unit": "ns/iter",
            "extra": "iterations: 130679909\ncpu: 5.61369383873692 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.8840167728124099,
            "unit": "ns/iter",
            "extra": "iterations: 885336301\ncpu: 0.8818411705452034 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.090206258294578,
            "unit": "ns/iter",
            "extra": "iterations: 203725262\ncpu: 3.0742530104096764 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.014704005178141,
            "unit": "ns/iter",
            "extra": "iterations: 357553314\ncpu: 2.0130032971810192 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 1.9870587616447017,
            "unit": "ns/iter",
            "extra": "iterations: 338841935\ncpu: 1.9858433401993156 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.3433741904770458,
            "unit": "ns/iter",
            "extra": "iterations: 529260547\ncpu: 1.3423653133170352 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 1.7411116237888928,
            "unit": "ns/iter",
            "extra": "iterations: 394241817\ncpu: 1.7402339640698201 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.756216489417419,
            "unit": "ns/iter",
            "extra": "iterations: 404781042\ncpu: 1.754017422584724 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 1.9377998265711915,
            "unit": "ns/iter",
            "extra": "iterations: 345508391\ncpu: 1.9334233766843631 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.7710241638774564,
            "unit": "ns/iter",
            "extra": "iterations: 406112574\ncpu: 1.7696152397389189 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 52.390000805969215,
            "unit": "ns/iter",
            "extra": "iterations: 12841209\ncpu: 52.35916649281229 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 35.84086767736914,
            "unit": "ns/iter",
            "extra": "iterations: 19712535\ncpu: 35.82299283171854 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 161.9926789795267,
            "unit": "ns/iter",
            "extra": "iterations: 4428082\ncpu: 161.7858476875544 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "79e143feb7d709925083571d4569daa41cae8f82",
          "message": "Implement a `SchemaTransformer` class for JSON Schema (#1483)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-27T15:32:06-04:00",
          "tree_id": "ae699edc46bb0fe9dbfa3b843da29f5f406d52e8",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/79e143feb7d709925083571d4569daa41cae8f82"
        },
        "date": 1738006791726,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 213.8031524925053,
            "unit": "ns/iter",
            "extra": "iterations: 3440936\ncpu: 213.79124749777375 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 23156.875554075734,
            "unit": "ns/iter",
            "extra": "iterations: 30368\ncpu: 23153.78029504743 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 23.475091540110633,
            "unit": "ns/iter",
            "extra": "iterations: 29466116\ncpu: 23.468481560311513 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 113.52496230419202,
            "unit": "ns/iter",
            "extra": "iterations: 6183909\ncpu: 113.51962003321849 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.362532913089781,
            "unit": "ns/iter",
            "extra": "iterations: 130138132\ncpu: 5.361895005531506 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.051257477607911,
            "unit": "ns/iter",
            "extra": "iterations: 138520600\ncpu: 5.051198161139927 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.7575545247377501,
            "unit": "ns/iter",
            "extra": "iterations: 935766326\ncpu: 0.7509887676808751 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.0044114609404984,
            "unit": "ns/iter",
            "extra": "iterations: 234503506\ncpu: 2.9627190307338047 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 1.927709241009007,
            "unit": "ns/iter",
            "extra": "iterations: 352600428\ncpu: 1.9241950551461073 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 1.9718569881559858,
            "unit": "ns/iter",
            "extra": "iterations: 357946410\ncpu: 1.9702809702714976 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.2798063791760539,
            "unit": "ns/iter",
            "extra": "iterations: 525738663\ncpu: 1.2774369611085608 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 1.784514769215845,
            "unit": "ns/iter",
            "extra": "iterations: 394588501\ncpu: 1.7810757237449217 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.7748875349217168,
            "unit": "ns/iter",
            "extra": "iterations: 390026466\ncpu: 1.7733488885854236 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 1.9090186415763397,
            "unit": "ns/iter",
            "extra": "iterations: 372463259\ncpu: 1.9027863363027737 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.7313745334436403,
            "unit": "ns/iter",
            "extra": "iterations: 393802671\ncpu: 1.7304301117856045 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 55.8940731531871,
            "unit": "ns/iter",
            "extra": "iterations: 13475273\ncpu: 55.20719320491683 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 34.6293131479983,
            "unit": "ns/iter",
            "extra": "iterations: 20055180\ncpu: 34.61085864100945 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 156.06905283395852,
            "unit": "ns/iter",
            "extra": "iterations: 4453068\ncpu: 155.87186182649805 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98caa5c18e4de32220849ea7992f46b16e8ed614",
          "message": "Bring AlterSchema as an extension module of this project (#1484)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-27T16:05:03-04:00",
          "tree_id": "9d259a23f81e57cdf1b872b6c09543c4c6d0fa6d",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/98caa5c18e4de32220849ea7992f46b16e8ed614"
        },
        "date": 1738008870099,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 225.34911761921225,
            "unit": "ns/iter",
            "extra": "iterations: 3176534\ncpu: 225.1488572135542 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 27619.770879054202,
            "unit": "ns/iter",
            "extra": "iterations: 28778\ncpu: 27594.96837862255 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 37.72493690734755,
            "unit": "ns/iter",
            "extra": "iterations: 19858269\ncpu: 37.67589209311246 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 165.0790669022235,
            "unit": "ns/iter",
            "extra": "iterations: 4392295\ncpu: 164.98345398020842 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 7.776180643348525,
            "unit": "ns/iter",
            "extra": "iterations: 87328618\ncpu: 7.761476312381357 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 6.053130429357453,
            "unit": "ns/iter",
            "extra": "iterations: 97792680\ncpu: 6.047303335996103 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.828795123877223,
            "unit": "ns/iter",
            "extra": "iterations: 852784952\ncpu: 0.8281947264003798 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.1230296496362033,
            "unit": "ns/iter",
            "extra": "iterations: 224963925\ncpu: 3.1209892875046497 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.584135263044657,
            "unit": "ns/iter",
            "extra": "iterations: 334977915\ncpu: 2.5817702041640525 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.575782712765765,
            "unit": "ns/iter",
            "extra": "iterations: 274273176\ncpu: 2.5732118987822536 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.7513381548261033,
            "unit": "ns/iter",
            "extra": "iterations: 407607113\ncpu: 1.7492383652294143 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.3870643227696697,
            "unit": "ns/iter",
            "extra": "iterations: 274847165\ncpu: 2.384426995999758 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 2.412934789355077,
            "unit": "ns/iter",
            "extra": "iterations: 321358889\ncpu: 2.411269849766001 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.7022213410942872,
            "unit": "ns/iter",
            "extra": "iterations: 254491780\ncpu: 2.700401561103472 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 2.57091008324416,
            "unit": "ns/iter",
            "extra": "iterations: 282906011\ncpu: 2.569528294681583 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 80.09867384568358,
            "unit": "ns/iter",
            "extra": "iterations: 10234217\ncpu: 79.87440563357211 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 54.23369569680022,
            "unit": "ns/iter",
            "extra": "iterations: 12565069\ncpu: 54.150757150637205 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 248.77059250914914,
            "unit": "ns/iter",
            "extra": "iterations: 3096098\ncpu: 231.0585776031636 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25c773208e27e9da152428992287b3864800a95b",
          "message": "Bring back Regex module (#1485)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-27T17:16:34-04:00",
          "tree_id": "b437befb8843cd569295465871bd3502cf418006",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/25c773208e27e9da152428992287b3864800a95b"
        },
        "date": 1738013242099,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.307258232359736,
            "unit": "ns/iter",
            "extra": "iterations: 299424250\ncpu: 2.2989954888423365 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.4866142250527155,
            "unit": "ns/iter",
            "extra": "iterations: 290529968\ncpu: 2.4760337288165752 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.2767789947568207,
            "unit": "ns/iter",
            "extra": "iterations: 308563066\ncpu: 2.2646683190528067 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.4229302688969163,
            "unit": "ns/iter",
            "extra": "iterations: 325816286\ncpu: 2.4056133277512086 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.040878574220909,
            "unit": "ns/iter",
            "extra": "iterations: 360763375\ncpu: 2.0348323884041712 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.078585156732602,
            "unit": "ns/iter",
            "extra": "iterations: 332492602\ncpu: 2.071056606546692 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.19364977944299,
            "unit": "ns/iter",
            "extra": "iterations: 331053792\ncpu: 2.1904506685125065 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.0439360119887415,
            "unit": "ns/iter",
            "extra": "iterations: 342433922\ncpu: 2.04077328530554 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.3498742847739904,
            "unit": "ns/iter",
            "extra": "iterations: 329422616\ncpu: 2.3460562889829006 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.3729913248092065,
            "unit": "ns/iter",
            "extra": "iterations: 292446524\ncpu: 2.307991186792151 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 7.046598025094817,
            "unit": "ns/iter",
            "extra": "iterations: 109678329\ncpu: 6.644430186386225 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 92.40012184451756,
            "unit": "ns/iter",
            "extra": "iterations: 7206094\ncpu: 92.00032639041338 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.31504060787908,
            "unit": "ns/iter",
            "extra": "iterations: 143419993\ncpu: 4.904100085962224 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.1873454382733284,
            "unit": "ns/iter",
            "extra": "iterations: 345612450\ncpu: 2.101700908054672 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 960.6516415210623,
            "unit": "ns/iter",
            "extra": "iterations: 636972\ncpu: 925.8256249882222 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 270.466393366361,
            "unit": "ns/iter",
            "extra": "iterations: 2943997\ncpu: 247.13340400822435 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 27834.316547057537,
            "unit": "ns/iter",
            "extra": "iterations: 27408\ncpu: 26201.255107997516 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 27.95184948868726,
            "unit": "ns/iter",
            "extra": "iterations: 26998465\ncpu: 26.060259351781756 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 130.00838687250172,
            "unit": "ns/iter",
            "extra": "iterations: 5510336\ncpu: 126.7826499146332 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 6.298982865014246,
            "unit": "ns/iter",
            "extra": "iterations: 118471381\ncpu: 6.267885068377814 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 6.0395776497263025,
            "unit": "ns/iter",
            "extra": "iterations: 118105586\ncpu: 5.9282547397885175 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.859495210246331,
            "unit": "ns/iter",
            "extra": "iterations: 877072083\ncpu: 0.8301974422779602 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 4.30433869616401,
            "unit": "ns/iter",
            "extra": "iterations: 179283532\ncpu: 4.016448091841469 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.0534331171553513,
            "unit": "ns/iter",
            "extra": "iterations: 332161279\ncpu: 2.0513468699643305 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.050799404781123,
            "unit": "ns/iter",
            "extra": "iterations: 333339683\ncpu: 2.049149965742315 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.5785908978959966,
            "unit": "ns/iter",
            "extra": "iterations: 454162071\ncpu: 1.5771506379272249 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.065165559893803,
            "unit": "ns/iter",
            "extra": "iterations: 336050542\ncpu: 2.06196661929503 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 2.0133791856408787,
            "unit": "ns/iter",
            "extra": "iterations: 372271120\ncpu: 1.988123601959772 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.1063131093744354,
            "unit": "ns/iter",
            "extra": "iterations: 331915580\ncpu: 2.104565263251586 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.941167571837577,
            "unit": "ns/iter",
            "extra": "iterations: 374866788\ncpu: 1.9384512665869988 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 63.42998870938045,
            "unit": "ns/iter",
            "extra": "iterations: 12190025\ncpu: 63.35729418110304 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 41.46197372249117,
            "unit": "ns/iter",
            "extra": "iterations: 17379128\ncpu: 41.316629925276004 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 189.52957310522316,
            "unit": "ns/iter",
            "extra": "iterations: 4113026\ncpu: 173.75868764262668 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "201aa7f9f6355107202463ae156221c150bc9271",
          "message": "Rename project to \"Core\" (#1486)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-28T10:32:01-04:00",
          "tree_id": "54902423f5e6d8f46a9ce1d469c04c0e97c2bc94",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/201aa7f9f6355107202463ae156221c150bc9271"
        },
        "date": 1738075351776,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.0997233744843733,
            "unit": "ns/iter",
            "extra": "iterations: 349175945\ncpu: 2.0878586009125004 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.9997025816170784,
            "unit": "ns/iter",
            "extra": "iterations: 304080764\ncpu: 1.9990544354196644 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.037572405070126,
            "unit": "ns/iter",
            "extra": "iterations: 351252214\ncpu: 2.0372227461603987 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.9937948148717874,
            "unit": "ns/iter",
            "extra": "iterations: 334028431\ncpu: 1.9935817978320527 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.71721257528561,
            "unit": "ns/iter",
            "extra": "iterations: 421468396\ncpu: 1.7169757136428332 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.6495946102669918,
            "unit": "ns/iter",
            "extra": "iterations: 408522956\ncpu: 1.6495009401625897 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.7341295694495507,
            "unit": "ns/iter",
            "extra": "iterations: 420309348\ncpu: 1.678589837121586 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.7131398472052586,
            "unit": "ns/iter",
            "extra": "iterations: 393705216\ncpu: 1.7042801891656902 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.9609254690194118,
            "unit": "ns/iter",
            "extra": "iterations: 344661198\ncpu: 1.956724470040287 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.9763751316555198,
            "unit": "ns/iter",
            "extra": "iterations: 348153048\ncpu: 1.97596144555368 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.22681874093665,
            "unit": "ns/iter",
            "extra": "iterations: 115903634\ncpu: 6.213825875381942 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 71.4976132691297,
            "unit": "ns/iter",
            "extra": "iterations: 9893014\ncpu: 71.48418065515739 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.5333822596208035,
            "unit": "ns/iter",
            "extra": "iterations: 157695306\ncpu: 4.527947077892109 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 1.9582673309738345,
            "unit": "ns/iter",
            "extra": "iterations: 357670238\ncpu: 1.9573616298485568 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 862.0038491563802,
            "unit": "ns/iter",
            "extra": "iterations: 822523\ncpu: 861.7047790760885 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 223.04024033651106,
            "unit": "ns/iter",
            "extra": "iterations: 3251866\ncpu: 222.9984261344102 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 23918.782365417377,
            "unit": "ns/iter",
            "extra": "iterations: 29782\ncpu: 23916.12383318772 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 24.411455840521562,
            "unit": "ns/iter",
            "extra": "iterations: 27901563\ncpu: 24.40884763337468 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 114.03907602525355,
            "unit": "ns/iter",
            "extra": "iterations: 5905827\ncpu: 114.00791116976474 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.413220559822155,
            "unit": "ns/iter",
            "extra": "iterations: 129184660\ncpu: 5.4120357633793486 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.202780959831564,
            "unit": "ns/iter",
            "extra": "iterations: 138567215\ncpu: 5.202103542313383 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 1.007450230581849,
            "unit": "ns/iter",
            "extra": "iterations: 694045093\ncpu: 1.0073034260325813 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.7084341867976187,
            "unit": "ns/iter",
            "extra": "iterations: 189048169\ncpu: 3.7072879558013687 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.04986263167727,
            "unit": "ns/iter",
            "extra": "iterations: 339346225\ncpu: 2.0440186125541806 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 1.952228368117017,
            "unit": "ns/iter",
            "extra": "iterations: 355580841\ncpu: 1.95180088457016 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.500697532648391,
            "unit": "ns/iter",
            "extra": "iterations: 475646880\ncpu: 1.5004240120317807 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.0609974353162768,
            "unit": "ns/iter",
            "extra": "iterations: 353201774\ncpu: 2.0383561267163914 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.8184828903555086,
            "unit": "ns/iter",
            "extra": "iterations: 387738598\ncpu: 1.8145704441836294 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 1.9797001760151622,
            "unit": "ns/iter",
            "extra": "iterations: 352403391\ncpu: 1.9791410009445651 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.8208825179166015,
            "unit": "ns/iter",
            "extra": "iterations: 396917651\ncpu: 1.8202365104695266 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 54.29158947767602,
            "unit": "ns/iter",
            "extra": "iterations: 13005109\ncpu: 54.27982187615659 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 37.24810639208389,
            "unit": "ns/iter",
            "extra": "iterations: 18419114\ncpu: 37.21389639045613 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 172.56268673752015,
            "unit": "ns/iter",
            "extra": "iterations: 4318882\ncpu: 172.4900101461442 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73a59dc261bd2caea15960c5954096113b987409",
          "message": "Stop consuming `FlatMap` from Noa (#1487)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-28T10:41:15-04:00",
          "tree_id": "a5aa109626a5666ad9e9dc5d3a678d988cd2b6ef",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/73a59dc261bd2caea15960c5954096113b987409"
        },
        "date": 1738075889029,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.877271291135805,
            "unit": "ns/iter",
            "extra": "iterations: 279879092\ncpu: 2.47154582022154 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.443791313984109,
            "unit": "ns/iter",
            "extra": "iterations: 317165447\ncpu: 2.2802956842899733 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.17685285702276,
            "unit": "ns/iter",
            "extra": "iterations: 339423562\ncpu: 2.113954599297972 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.028867685342938,
            "unit": "ns/iter",
            "extra": "iterations: 346031024\ncpu: 2.026598632381588 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.7004568948896053,
            "unit": "ns/iter",
            "extra": "iterations: 415553577\ncpu: 1.698555948178012 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.696900225552773,
            "unit": "ns/iter",
            "extra": "iterations: 411881002\ncpu: 1.695586823885602 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.7028765232729426,
            "unit": "ns/iter",
            "extra": "iterations: 406169129\ncpu: 1.701379919496539 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.6949070322433324,
            "unit": "ns/iter",
            "extra": "iterations: 388401230\ncpu: 1.6927624044856895 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.030448889719994,
            "unit": "ns/iter",
            "extra": "iterations: 345967746\ncpu: 2.027492470353002 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.0494221367795276,
            "unit": "ns/iter",
            "extra": "iterations: 341950486\ncpu: 2.0476561042232326 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.466665372962175,
            "unit": "ns/iter",
            "extra": "iterations: 108879937\ncpu: 6.464092645461402 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 76.49701976290403,
            "unit": "ns/iter",
            "extra": "iterations: 9373201\ncpu: 75.42748736530895 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.887457213768917,
            "unit": "ns/iter",
            "extra": "iterations: 137265668\ncpu: 4.882400747140946 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.0697035003206117,
            "unit": "ns/iter",
            "extra": "iterations: 344995835\ncpu: 2.0678278623276736 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 885.4627054822018,
            "unit": "ns/iter",
            "extra": "iterations: 789524\ncpu: 885.2840445635592 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 220.2980668665595,
            "unit": "ns/iter",
            "extra": "iterations: 3200600\ncpu: 220.23401862150914 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 25114.725875489286,
            "unit": "ns/iter",
            "extra": "iterations: 27158\ncpu: 25105.38331246794 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 25.946153203477348,
            "unit": "ns/iter",
            "extra": "iterations: 27822161\ncpu: 25.918942816843025 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 123.08261876054146,
            "unit": "ns/iter",
            "extra": "iterations: 5696661\ncpu: 123.06419497316064 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.758392406365255,
            "unit": "ns/iter",
            "extra": "iterations: 121601668\ncpu: 5.757133199850517 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.5054902474720615,
            "unit": "ns/iter",
            "extra": "iterations: 127947359\ncpu: 5.50480295572182 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 1.115495570700371,
            "unit": "ns/iter",
            "extra": "iterations: 689071329\ncpu: 1.0750483568588622 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 4.326623096845049,
            "unit": "ns/iter",
            "extra": "iterations: 170287299\ncpu: 4.097487035718379 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.293374190259104,
            "unit": "ns/iter",
            "extra": "iterations: 312498605\ncpu: 2.186320159733184 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.235427194652832,
            "unit": "ns/iter",
            "extra": "iterations: 327572733\ncpu: 2.1265109388698753 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.6593356364643792,
            "unit": "ns/iter",
            "extra": "iterations: 432539315\ncpu: 1.6033432706573791 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.1742821422713883,
            "unit": "ns/iter",
            "extra": "iterations: 329311034\ncpu: 2.131978365474395 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.8620378469872418,
            "unit": "ns/iter",
            "extra": "iterations: 377395111\ncpu: 1.8609038101715114 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.043190396107593,
            "unit": "ns/iter",
            "extra": "iterations: 340921267\ncpu: 2.0399783390456507 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.8981064770752778,
            "unit": "ns/iter",
            "extra": "iterations: 374846714\ncpu: 1.8974796188289378 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 56.54779591394213,
            "unit": "ns/iter",
            "extra": "iterations: 12613294\ncpu: 56.5289289221359 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 38.88587731038979,
            "unit": "ns/iter",
            "extra": "iterations: 17127142\ncpu: 38.826150912977624 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 165.20176548950565,
            "unit": "ns/iter",
            "extra": "iterations: 4232267\ncpu: 165.1668006768005 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c3f7d13ad27ad8d9ca5760e9fd5c0577c4bf60dd",
          "message": "Stop consuming GoogleTest and GoogleBenchmark from Noa (#1488)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-28T10:58:49-04:00",
          "tree_id": "234f2661f0661fd6e63eb021898c021360e4f1a3",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/c3f7d13ad27ad8d9ca5760e9fd5c0577c4bf60dd"
        },
        "date": 1738076835822,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.9422334319404766,
            "unit": "ns/iter",
            "extra": "iterations: 370256747\ncpu: 1.9071711878892514 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.9248250354764807,
            "unit": "ns/iter",
            "extra": "iterations: 359767693\ncpu: 1.900796022837992 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.9186656331599659,
            "unit": "ns/iter",
            "extra": "iterations: 369443829\ncpu: 1.899097900482187 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.9303102351047885,
            "unit": "ns/iter",
            "extra": "iterations: 369007580\ncpu: 1.9049066688548784 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.6337959023616806,
            "unit": "ns/iter",
            "extra": "iterations: 438371263\ncpu: 1.5992722588661097 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.6431496139025195,
            "unit": "ns/iter",
            "extra": "iterations: 428567055\ncpu: 1.6026313548529771 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.65681634924508,
            "unit": "ns/iter",
            "extra": "iterations: 430668521\ncpu: 1.6088243421905455 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.6539180955007715,
            "unit": "ns/iter",
            "extra": "iterations: 424600118\ncpu: 1.6073146734264425 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.9572065285170237,
            "unit": "ns/iter",
            "extra": "iterations: 367832521\ncpu: 1.9164645857944689 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.9473115540718464,
            "unit": "ns/iter",
            "extra": "iterations: 363846166\ncpu: 1.9199047984471524 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.186587392815636,
            "unit": "ns/iter",
            "extra": "iterations: 112806794\ncpu: 6.064616994611154 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 71.41027770751175,
            "unit": "ns/iter",
            "extra": "iterations: 10124971\ncpu: 69.97629919137547 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.594091960392208,
            "unit": "ns/iter",
            "extra": "iterations: 156487526\ncpu: 4.484312698508633 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 1.934369992521681,
            "unit": "ns/iter",
            "extra": "iterations: 365884893\ncpu: 1.9073949576813984 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 855.0031236709585,
            "unit": "ns/iter",
            "extra": "iterations: 845942\ncpu: 837.2134259795579 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 212.47629564857675,
            "unit": "ns/iter",
            "extra": "iterations: 3345856\ncpu: 209.4605984238413 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 23841.04615052382,
            "unit": "ns/iter",
            "extra": "iterations: 29958\ncpu: 23378.062621002675 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 24.392625255910623,
            "unit": "ns/iter",
            "extra": "iterations: 28792958\ncpu: 24.073490469440596 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 116.90236071109466,
            "unit": "ns/iter",
            "extra": "iterations: 5878796\ncpu: 115.25387171114642 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.495133046372576,
            "unit": "ns/iter",
            "extra": "iterations: 129725723\ncpu: 5.434797229844695 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.341123184624311,
            "unit": "ns/iter",
            "extra": "iterations: 131650712\ncpu: 5.193993937533748 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.9811750500905899,
            "unit": "ns/iter",
            "extra": "iterations: 741666843\ncpu: 0.9612523557292139 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.579323197136499,
            "unit": "ns/iter",
            "extra": "iterations: 198591138\ncpu: 3.511687414772769 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 1.9748506302144149,
            "unit": "ns/iter",
            "extra": "iterations: 366369384\ncpu: 1.9433528867139143 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 1.933911187320243,
            "unit": "ns/iter",
            "extra": "iterations: 365668913\ncpu: 1.9145324502878862 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.471081857742513,
            "unit": "ns/iter",
            "extra": "iterations: 483288572\ncpu: 1.452724191458846 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 1.971392376207168,
            "unit": "ns/iter",
            "extra": "iterations: 359973053\ncpu: 1.949507037128127 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.7700459693013506,
            "unit": "ns/iter",
            "extra": "iterations: 397998635\ncpu: 1.749257255618476 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 1.928390988822747,
            "unit": "ns/iter",
            "extra": "iterations: 367261280\ncpu: 1.9060816865856325 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.761070880311814,
            "unit": "ns/iter",
            "extra": "iterations: 399862904\ncpu: 1.7445279194991226 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 54.0052243645939,
            "unit": "ns/iter",
            "extra": "iterations: 13284749\ncpu: 53.10405187181198 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 36.83958358776272,
            "unit": "ns/iter",
            "extra": "iterations: 18011064\ncpu: 36.38585704875645 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 158.8090222241317,
            "unit": "ns/iter",
            "extra": "iterations: 4483013\ncpu: 156.5335634761709 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a03319dcabacbfd003e751e6b3d63dd372ecf3e0",
          "message": "Get rid of Noa in this project (#1489)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-28T11:09:22-04:00",
          "tree_id": "2ad631b3231d34b76bce1fd6503a4b69e8e3db76",
          "url": "https://github.com/sourcemeta/jsontoolkit/commit/a03319dcabacbfd003e751e6b3d63dd372ecf3e0"
        },
        "date": 1738077610466,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.7983595926291285,
            "unit": "ns/iter",
            "extra": "iterations: 301626691\ncpu: 2.6741035328335707 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.9289608364277693,
            "unit": "ns/iter",
            "extra": "iterations: 285893991\ncpu: 2.690434301572991 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.690688733582172,
            "unit": "ns/iter",
            "extra": "iterations: 265284157\ncpu: 2.6767750024363473 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.791487374009105,
            "unit": "ns/iter",
            "extra": "iterations: 265332424\ncpu: 2.7375998343873746 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.2375182619239715,
            "unit": "ns/iter",
            "extra": "iterations: 319076683\ncpu: 2.231541939402698 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.3642151014833765,
            "unit": "ns/iter",
            "extra": "iterations: 272368242\ncpu: 2.350553042817674 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.392316963627823,
            "unit": "ns/iter",
            "extra": "iterations: 360607263\ncpu: 2.3880606087515233 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.1996964337171274,
            "unit": "ns/iter",
            "extra": "iterations: 310666513\ncpu: 2.1839849858552323 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.5025595281084976,
            "unit": "ns/iter",
            "extra": "iterations: 274616420\ncpu: 2.4986124282007642 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.6596624662557646,
            "unit": "ns/iter",
            "extra": "iterations: 306269333\ncpu: 2.545929076091991 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 7.451776614304587,
            "unit": "ns/iter",
            "extra": "iterations: 92395824\ncpu: 7.170345707399062 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 87.47202414111246,
            "unit": "ns/iter",
            "extra": "iterations: 7865257\ncpu: 83.88880363349843 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.391657804852589,
            "unit": "ns/iter",
            "extra": "iterations: 123448081\ncpu: 5.241693469499952 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.52889273058107,
            "unit": "ns/iter",
            "extra": "iterations: 313662231\ncpu: 2.381166510289852 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 1158.9030498235893,
            "unit": "ns/iter",
            "extra": "iterations: 624582\ncpu: 1125.2821887278208 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 292.91318326669125,
            "unit": "ns/iter",
            "extra": "iterations: 2499491\ncpu: 291.3185124491343 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 35017.9387754344,
            "unit": "ns/iter",
            "extra": "iterations: 20013\ncpu: 33747.51411582467 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 31.802487782654318,
            "unit": "ns/iter",
            "extra": "iterations: 20211411\ncpu: 31.709414053279158 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 157.9048818962297,
            "unit": "ns/iter",
            "extra": "iterations: 4909456\ncpu: 156.31141209942663 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 7.49350355262558,
            "unit": "ns/iter",
            "extra": "iterations: 105885734\ncpu: 7.138468719497194 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 7.550058573125443,
            "unit": "ns/iter",
            "extra": "iterations: 98805861\ncpu: 7.204208260479618 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 1.4660575753113896,
            "unit": "ns/iter",
            "extra": "iterations: 550279857\ncpu: 1.3949156783327479 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 4.683385615438262,
            "unit": "ns/iter",
            "extra": "iterations: 157212576\ncpu: 4.638693789992991 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.508562861208083,
            "unit": "ns/iter",
            "extra": "iterations: 257594436\ncpu: 2.4844946573302513 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.517574461058276,
            "unit": "ns/iter",
            "extra": "iterations: 294085520\ncpu: 2.5119631867628245 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 2.0024037396989516,
            "unit": "ns/iter",
            "extra": "iterations: 300479479\ncpu: 1.9935271519823168 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.491118370248562,
            "unit": "ns/iter",
            "extra": "iterations: 291155931\ncpu: 2.482539158716291 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 2.5115639789301105,
            "unit": "ns/iter",
            "extra": "iterations: 269151059\ncpu: 2.498544878472883 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.585175118637691,
            "unit": "ns/iter",
            "extra": "iterations: 270405995\ncpu: 2.559336748432659 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 2.29935530331651,
            "unit": "ns/iter",
            "extra": "iterations: 327358266\ncpu: 2.291568834250845 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 66.20535408624788,
            "unit": "ns/iter",
            "extra": "iterations: 12100050\ncpu: 65.95047127904421 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 44.36734626076721,
            "unit": "ns/iter",
            "extra": "iterations: 15222322\ncpu: 43.4899485111404 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 212.9278645860231,
            "unit": "ns/iter",
            "extra": "iterations: 3300859\ncpu: 202.95838143949723 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d3d01a3fdec8161900885b1a30be648ff04a27cb",
          "message": "Offer GoogleTest and GoogleBenchmark to downstream components (#1490)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-28T11:40:23-04:00",
          "tree_id": "88352ef3888357e1bd0b6df79cc197537911944c",
          "url": "https://github.com/sourcemeta/core/commit/d3d01a3fdec8161900885b1a30be648ff04a27cb"
        },
        "date": 1738079476713,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.0986948180553955,
            "unit": "ns/iter",
            "extra": "iterations: 307865524\ncpu: 2.0942228009915134 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.084751477601565,
            "unit": "ns/iter",
            "extra": "iterations: 343345955\ncpu: 2.0712490991775345 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.2832563430156756,
            "unit": "ns/iter",
            "extra": "iterations: 330196467\ncpu: 2.113032905346017 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.0691927421676954,
            "unit": "ns/iter",
            "extra": "iterations: 341059135\ncpu: 2.062656964165467 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.873374086197109,
            "unit": "ns/iter",
            "extra": "iterations: 410323745\ncpu: 1.7874130096955523 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.7672551440358728,
            "unit": "ns/iter",
            "extra": "iterations: 420354779\ncpu: 1.7608031048458725 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.8268766891101047,
            "unit": "ns/iter",
            "extra": "iterations: 381515051\ncpu: 1.7296434263087543 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.7238640436969392,
            "unit": "ns/iter",
            "extra": "iterations: 393315878\ncpu: 1.7220077751348744 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.0472358197090235,
            "unit": "ns/iter",
            "extra": "iterations: 339868519\ncpu: 2.0445612381063154 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.193949669497607,
            "unit": "ns/iter",
            "extra": "iterations: 351481494\ncpu: 2.1422607245432945 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.654799337892965,
            "unit": "ns/iter",
            "extra": "iterations: 109810812\ncpu: 6.543963995093672 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 76.68924549844067,
            "unit": "ns/iter",
            "extra": "iterations: 8068327\ncpu: 76.34358399207183 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.377297243446069,
            "unit": "ns/iter",
            "extra": "iterations: 147009717\ncpu: 4.846706833671407 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.136081439467284,
            "unit": "ns/iter",
            "extra": "iterations: 335493271\ncpu: 2.1316850793111732 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 934.686265980826,
            "unit": "ns/iter",
            "extra": "iterations: 785167\ncpu: 907.4044120550158 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 234.11504905780959,
            "unit": "ns/iter",
            "extra": "iterations: 3068534\ncpu: 232.45790986836064 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 27422.88058080113,
            "unit": "ns/iter",
            "extra": "iterations: 26787\ncpu: 26603.016388546734 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 26.73598551149099,
            "unit": "ns/iter",
            "extra": "iterations: 27824594\ncpu: 26.042464447100127 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 124.22457047807805,
            "unit": "ns/iter",
            "extra": "iterations: 5718160\ncpu: 124.17386012283706 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 6.056313481597349,
            "unit": "ns/iter",
            "extra": "iterations: 126710593\ncpu: 6.048097336266147 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.6337597167799,
            "unit": "ns/iter",
            "extra": "iterations: 125129599\ncpu: 5.621707458680521 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 1.0352639694271346,
            "unit": "ns/iter",
            "extra": "iterations: 736129222\ncpu: 1.0265697616878457 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.875527017772023,
            "unit": "ns/iter",
            "extra": "iterations: 182626005\ncpu: 3.828436152890717 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.1411571848120783,
            "unit": "ns/iter",
            "extra": "iterations: 336312098\ncpu: 2.1337263936309507 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.0957563424161645,
            "unit": "ns/iter",
            "extra": "iterations: 339609643\ncpu: 2.0881974779497128 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.722301269589331,
            "unit": "ns/iter",
            "extra": "iterations: 380017589\ncpu: 1.6952425852057051 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.2218242189614603,
            "unit": "ns/iter",
            "extra": "iterations: 334665621\ncpu: 2.1993415332015824 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 2.127007861109165,
            "unit": "ns/iter",
            "extra": "iterations: 336423625\ncpu: 2.0973883745530686 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.12171417075449,
            "unit": "ns/iter",
            "extra": "iterations: 326346412\ncpu: 2.118016238523862 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.9111775345089799,
            "unit": "ns/iter",
            "extra": "iterations: 370959194\ncpu: 1.9088595496570988 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 63.734286414119715,
            "unit": "ns/iter",
            "extra": "iterations: 10485006\ncpu: 63.39176153070369 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 40.921627384938795,
            "unit": "ns/iter",
            "extra": "iterations: 16551907\ncpu: 40.849975776205234 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 180.1939153754831,
            "unit": "ns/iter",
            "extra": "iterations: 3875003\ncpu: 179.8292801321695 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9e6e39e87e96422d99f7fdabe6d406f420df1b04",
          "message": "Fix `CMAKE_MODULE_PATH` append when including the project (#1491)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-28T11:40:38-04:00",
          "tree_id": "727ae80a46a5eea7f99380ec7966a788aebac91e",
          "url": "https://github.com/sourcemeta/core/commit/9e6e39e87e96422d99f7fdabe6d406f420df1b04"
        },
        "date": 1738079669071,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.6053605022352273,
            "unit": "ns/iter",
            "extra": "iterations: 271536743\ncpu: 2.6019277987730747 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.6657677161166107,
            "unit": "ns/iter",
            "extra": "iterations: 264905675\ncpu: 2.6642124597745953 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.8792947288907738,
            "unit": "ns/iter",
            "extra": "iterations: 263349962\ncpu: 2.869952948768605 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.7522810872537984,
            "unit": "ns/iter",
            "extra": "iterations: 245831402\ncpu: 2.7446859697769623 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.5975754709827856,
            "unit": "ns/iter",
            "extra": "iterations: 320737513\ncpu: 2.3260172875381744 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.3734843786661726,
            "unit": "ns/iter",
            "extra": "iterations: 277694029\ncpu: 2.2650180929889556 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.226537404063046,
            "unit": "ns/iter",
            "extra": "iterations: 282950609\ncpu: 2.2078199520680286 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.2886253013333238,
            "unit": "ns/iter",
            "extra": "iterations: 271894288\ncpu: 2.2800000859157414 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.565639859520872,
            "unit": "ns/iter",
            "extra": "iterations: 315863096\ncpu: 2.5511147399125123 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.753983039418321,
            "unit": "ns/iter",
            "extra": "iterations: 249092591\ncpu: 2.7196473298557464 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.770882835730812,
            "unit": "ns/iter",
            "extra": "iterations: 108106439\ncpu: 6.76107738596402 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 89.83396619342953,
            "unit": "ns/iter",
            "extra": "iterations: 7152783\ncpu: 89.67544520783011 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.401308705858131,
            "unit": "ns/iter",
            "extra": "iterations: 121331877\ncpu: 5.396182900887617 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.506408988636042,
            "unit": "ns/iter",
            "extra": "iterations: 247423263\ncpu: 2.495711165202772 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 1059.4022846787022,
            "unit": "ns/iter",
            "extra": "iterations: 787951\ncpu: 1051.588233278465 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 244.00363124024727,
            "unit": "ns/iter",
            "extra": "iterations: 3044643\ncpu: 243.3283639494022 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 33145.36352786198,
            "unit": "ns/iter",
            "extra": "iterations: 23561\ncpu: 33071.176944951396 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 28.13575894015514,
            "unit": "ns/iter",
            "extra": "iterations: 19292250\ncpu: 28.06582954295103 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 134.62535746757004,
            "unit": "ns/iter",
            "extra": "iterations: 5615138\ncpu: 129.95335110196763 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 7.532378275233816,
            "unit": "ns/iter",
            "extra": "iterations: 97976094\ncpu: 7.156541676380747 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.91478232955964,
            "unit": "ns/iter",
            "extra": "iterations: 113839649\ncpu: 5.9112796456355765 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 1.0806241985554816,
            "unit": "ns/iter",
            "extra": "iterations: 604725498\ncpu: 1.0739385095351148 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.994367913214177,
            "unit": "ns/iter",
            "extra": "iterations: 180775786\ncpu: 3.8195325562019677 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.1251988682787895,
            "unit": "ns/iter",
            "extra": "iterations: 334424193\ncpu: 2.1206240901357307 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.083930379627796,
            "unit": "ns/iter",
            "extra": "iterations: 337141426\ncpu: 2.035445504700445 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.5620923072158786,
            "unit": "ns/iter",
            "extra": "iterations: 421884982\ncpu: 1.5609112153700635 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.0932828534804147,
            "unit": "ns/iter",
            "extra": "iterations: 345670477\ncpu: 2.0913327810751996 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.8501024693722343,
            "unit": "ns/iter",
            "extra": "iterations: 375035494\ncpu: 1.8490143228949898 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.081471605878622,
            "unit": "ns/iter",
            "extra": "iterations: 333280961\ncpu: 2.07985178007213 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 2.0352938298936523,
            "unit": "ns/iter",
            "extra": "iterations: 337169032\ncpu: 2.0336713485596696 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 67.21582050308515,
            "unit": "ns/iter",
            "extra": "iterations: 8600671\ncpu: 66.67596051517319 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 41.26329190166971,
            "unit": "ns/iter",
            "extra": "iterations: 14615609\ncpu: 41.224009208237526 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 186.57516128594196,
            "unit": "ns/iter",
            "extra": "iterations: 3693483\ncpu: 186.37746538971498 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e60f27bd892e5e09077cc3bf21fedb2cb8a6fc77",
          "message": "Simplify README even more (#1492)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-28T11:40:49-04:00",
          "tree_id": "6627e8a084a810a4ed1a76d916cd78ce12307c3e",
          "url": "https://github.com/sourcemeta/core/commit/e60f27bd892e5e09077cc3bf21fedb2cb8a6fc77"
        },
        "date": 1738079997433,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.2487961818934705,
            "unit": "ns/iter",
            "extra": "iterations: 289470311\ncpu: 2.2451041619946994 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.516705552352797,
            "unit": "ns/iter",
            "extra": "iterations: 319834782\ncpu: 2.5109620504001344 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.387222261194031,
            "unit": "ns/iter",
            "extra": "iterations: 306744434\ncpu: 2.3832086876595144 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.190227600803567,
            "unit": "ns/iter",
            "extra": "iterations: 291816222\ncpu: 2.186804405959309 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.2394669972431194,
            "unit": "ns/iter",
            "extra": "iterations: 326885898\ncpu: 2.108283056003843 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.9253074684965739,
            "unit": "ns/iter",
            "extra": "iterations: 368225312\ncpu: 1.9070063276910214 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.9222190270457562,
            "unit": "ns/iter",
            "extra": "iterations: 374854744\ncpu: 1.9175934452092724 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.940908391975756,
            "unit": "ns/iter",
            "extra": "iterations: 312187812\ncpu: 1.9374683339655825 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.113554539090945,
            "unit": "ns/iter",
            "extra": "iterations: 299205396\ncpu: 2.110008737944016 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.187785115701548,
            "unit": "ns/iter",
            "extra": "iterations: 312905100\ncpu: 2.1833169226068856 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 7.452425192592184,
            "unit": "ns/iter",
            "extra": "iterations: 105526578\ncpu: 7.261914624010646 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 92.68417836874725,
            "unit": "ns/iter",
            "extra": "iterations: 9512421\ncpu: 91.305672867086 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.278536045466146,
            "unit": "ns/iter",
            "extra": "iterations: 137144648\ncpu: 5.228443183579428 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.141641506350633,
            "unit": "ns/iter",
            "extra": "iterations: 318025696\ncpu: 2.138770572803019 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 955.079115452416,
            "unit": "ns/iter",
            "extra": "iterations: 786809\ncpu: 953.7308292101405 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 242.8818076706509,
            "unit": "ns/iter",
            "extra": "iterations: 3018621\ncpu: 239.97911629184264 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 25472.502016101742,
            "unit": "ns/iter",
            "extra": "iterations: 28135\ncpu: 25454.842722587597 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 25.75664568496893,
            "unit": "ns/iter",
            "extra": "iterations: 27280026\ncpu: 25.660532728231345 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 138.83093338973353,
            "unit": "ns/iter",
            "extra": "iterations: 5694853\ncpu: 138.73387074258153 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.8465077414553415,
            "unit": "ns/iter",
            "extra": "iterations: 119295136\ncpu: 5.83875439816759 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.561806799409691,
            "unit": "ns/iter",
            "extra": "iterations: 128301472\ncpu: 5.557714879530001 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 1.0201777796095854,
            "unit": "ns/iter",
            "extra": "iterations: 685931544\ncpu: 1.0193116297331215 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.802094421672884,
            "unit": "ns/iter",
            "extra": "iterations: 182323478\ncpu: 3.7973387058796595 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.130183921695696,
            "unit": "ns/iter",
            "extra": "iterations: 342913689\ncpu: 2.1124411863301313 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.090227355169176,
            "unit": "ns/iter",
            "extra": "iterations: 339495994\ncpu: 2.0764781100775016 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.54955924231847,
            "unit": "ns/iter",
            "extra": "iterations: 420258879\ncpu: 1.5486383096738763 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.0797455593968253,
            "unit": "ns/iter",
            "extra": "iterations: 338375123\ncpu: 2.0785925211174514 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.9280327446398697,
            "unit": "ns/iter",
            "extra": "iterations: 327433297\ncpu: 1.923823892595746 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.361399295838576,
            "unit": "ns/iter",
            "extra": "iterations: 310077519\ncpu: 2.2984575028156042 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 2.141456582340349,
            "unit": "ns/iter",
            "extra": "iterations: 284771633\ncpu: 2.1341030129921634 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 73.30933705099729,
            "unit": "ns/iter",
            "extra": "iterations: 12131716\ncpu: 70.36333524457685 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 47.097571961214754,
            "unit": "ns/iter",
            "extra": "iterations: 11927684\ncpu: 46.94758848406773 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 205.45167434969846,
            "unit": "ns/iter",
            "extra": "iterations: 3191247\ncpu: 205.27555529233547 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5ab8296b1196e60a7f781995d42f853cc2366f3",
          "message": "Read Doxygen site name from CMake variables (#1493)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-28T12:01:52-04:00",
          "tree_id": "716ddbc446ec26d6cfe4972784f0c3db998a237d",
          "url": "https://github.com/sourcemeta/core/commit/f5ab8296b1196e60a7f781995d42f853cc2366f3"
        },
        "date": 1738081438703,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.235326564502711,
            "unit": "ns/iter",
            "extra": "iterations: 296105786\ncpu: 2.2019022620517115 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.0305627036271754,
            "unit": "ns/iter",
            "extra": "iterations: 321505011\ncpu: 2.0293058511613657 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.1864727920464953,
            "unit": "ns/iter",
            "extra": "iterations: 341381816\ncpu: 2.1847795197152506 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.315029901595251,
            "unit": "ns/iter",
            "extra": "iterations: 286264615\ncpu: 2.308905695522305 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.787138290845041,
            "unit": "ns/iter",
            "extra": "iterations: 367538959\ncpu: 1.7860773230301281 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.8005559881451096,
            "unit": "ns/iter",
            "extra": "iterations: 389366945\ncpu: 1.7996391552960396 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.7853461446111032,
            "unit": "ns/iter",
            "extra": "iterations: 391107337\ncpu: 1.7836791438151929 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 3.235803267080865,
            "unit": "ns/iter",
            "extra": "iterations: 395770905\ncpu: 2.166624653724861 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.635081136762697,
            "unit": "ns/iter",
            "extra": "iterations: 311448860\ncpu: 2.4568624203665386 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.6531006840274163,
            "unit": "ns/iter",
            "extra": "iterations: 268853341\ncpu: 2.539607644302994 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 7.888760786331521,
            "unit": "ns/iter",
            "extra": "iterations: 80487524\ncpu: 7.665324628447986 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 92.90518657008339,
            "unit": "ns/iter",
            "extra": "iterations: 7946779\ncpu: 90.38957796611663 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.836160259898715,
            "unit": "ns/iter",
            "extra": "iterations: 129971406\ncpu: 5.739793258834171 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.630837592255526,
            "unit": "ns/iter",
            "extra": "iterations: 269900330\ncpu: 2.51546191143968 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 1180.986032321656,
            "unit": "ns/iter",
            "extra": "iterations: 555816\ncpu: 1110.3206816644358 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 265.70865677620736,
            "unit": "ns/iter",
            "extra": "iterations: 2770741\ncpu: 264.1784273593239 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 27904.45132698317,
            "unit": "ns/iter",
            "extra": "iterations: 23370\ncpu: 27775.952075310324 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 30.897651090141853,
            "unit": "ns/iter",
            "extra": "iterations: 25393509\ncpu: 30.751992566289147 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 168.81223136501424,
            "unit": "ns/iter",
            "extra": "iterations: 5288207\ncpu: 152.91118520889978 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 6.703406302655156,
            "unit": "ns/iter",
            "extra": "iterations: 103942386\ncpu: 6.686030855593409 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 6.268711434640872,
            "unit": "ns/iter",
            "extra": "iterations: 103365278\ncpu: 6.241399553919856 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 1.5132174711106416,
            "unit": "ns/iter",
            "extra": "iterations: 636989044\ncpu: 1.4076788422753514 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 4.049592864918261,
            "unit": "ns/iter",
            "extra": "iterations: 164768688\ncpu: 4.041848048216549 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.070344051579597,
            "unit": "ns/iter",
            "extra": "iterations: 315252833\ncpu: 2.068457224617544 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.0777897199312467,
            "unit": "ns/iter",
            "extra": "iterations: 335101392\ncpu: 2.076213398719641 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.5868180422811984,
            "unit": "ns/iter",
            "extra": "iterations: 449891705\ncpu: 1.585179259973244 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.2573104948256626,
            "unit": "ns/iter",
            "extra": "iterations: 317260321\ncpu: 2.2558288970526528 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 2.0353293279042726,
            "unit": "ns/iter",
            "extra": "iterations: 325427007\ncpu: 2.0251146519010383 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.052138384787679,
            "unit": "ns/iter",
            "extra": "iterations: 337837838\ncpu: 2.0485390390166955 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.8966273740142983,
            "unit": "ns/iter",
            "extra": "iterations: 373967582\ncpu: 1.8955894417607544 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 64.52281497238911,
            "unit": "ns/iter",
            "extra": "iterations: 12058155\ncpu: 64.11403734650918 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 39.55768841996966,
            "unit": "ns/iter",
            "extra": "iterations: 16814151\ncpu: 39.53336686461297 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 185.3399991796541,
            "unit": "ns/iter",
            "extra": "iterations: 3733592\ncpu: 184.41972234780897 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e412c5f51c9b2f3299c9e554028587cfd03d9ce",
          "message": "Don't mask GoogleTest / GoogleBenchmark in `vendorpull.mask` (#1494)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-28T12:03:30-04:00",
          "tree_id": "df76e9d0a7b52ea16e2e51a548e0c99c32dbea3b",
          "url": "https://github.com/sourcemeta/core/commit/0e412c5f51c9b2f3299c9e554028587cfd03d9ce"
        },
        "date": 1738081450301,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.1409126551656668,
            "unit": "ns/iter",
            "extra": "iterations: 327657065\ncpu: 2.1188189548117933 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.1580175656179996,
            "unit": "ns/iter",
            "extra": "iterations: 334468935\ncpu: 2.141855117277185 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.104762202815379,
            "unit": "ns/iter",
            "extra": "iterations: 316091305\ncpu: 2.100576603965742 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.0569224291648327,
            "unit": "ns/iter",
            "extra": "iterations: 324753651\ncpu: 2.050498887231909 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.7181063793774387,
            "unit": "ns/iter",
            "extra": "iterations: 383631013\ncpu: 1.7152002254833345 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.8051802437307378,
            "unit": "ns/iter",
            "extra": "iterations: 378956030\ncpu: 1.8027078233852092 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.8376753381747732,
            "unit": "ns/iter",
            "extra": "iterations: 406449777\ncpu: 1.8326347857732947 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.7735045840320398,
            "unit": "ns/iter",
            "extra": "iterations: 386456361\ncpu: 1.7716152950061024 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.15870305863117,
            "unit": "ns/iter",
            "extra": "iterations: 330461466\ncpu: 2.152635248552702 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.100492614730181,
            "unit": "ns/iter",
            "extra": "iterations: 331306056\ncpu: 2.097957424599569 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.557204234052495,
            "unit": "ns/iter",
            "extra": "iterations: 85386680\ncpu: 6.536382489634222 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 81.45062473995087,
            "unit": "ns/iter",
            "extra": "iterations: 8386749\ncpu: 77.460288843746 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.016749284267371,
            "unit": "ns/iter",
            "extra": "iterations: 114712727\ncpu: 4.9386150500981385 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.287357386664964,
            "unit": "ns/iter",
            "extra": "iterations: 340644207\ncpu: 2.1253260296893854 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 893.7779114979661,
            "unit": "ns/iter",
            "extra": "iterations: 748735\ncpu: 885.2918589354038 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 238.73825520319767,
            "unit": "ns/iter",
            "extra": "iterations: 3050375\ncpu: 238.41363766750072 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 25575.218159098957,
            "unit": "ns/iter",
            "extra": "iterations: 27520\ncpu: 25529.505813953423 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 25.73135990190156,
            "unit": "ns/iter",
            "extra": "iterations: 27555367\ncpu: 25.688897556690144 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 126.70109004710558,
            "unit": "ns/iter",
            "extra": "iterations: 5691520\ncpu: 126.4117494096479 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.767880515770196,
            "unit": "ns/iter",
            "extra": "iterations: 120850094\ncpu: 5.751604959446666 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.473027186976904,
            "unit": "ns/iter",
            "extra": "iterations: 129172741\ncpu: 5.448262493709898 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.9955108647469205,
            "unit": "ns/iter",
            "extra": "iterations: 698798067\ncpu: 0.9936647406324326 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 4.0110340922050325,
            "unit": "ns/iter",
            "extra": "iterations: 187411816\ncpu: 3.9907462398208686 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.123962987339223,
            "unit": "ns/iter",
            "extra": "iterations: 338876383\ncpu: 2.1147121367852937 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.10473207602653,
            "unit": "ns/iter",
            "extra": "iterations: 306655744\ncpu: 2.1007139523856577 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.5779308179784413,
            "unit": "ns/iter",
            "extra": "iterations: 421818883\ncpu: 1.571465922259346 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.11141011244248,
            "unit": "ns/iter",
            "extra": "iterations: 310181944\ncpu: 2.106689356489427 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.9586314261249635,
            "unit": "ns/iter",
            "extra": "iterations: 352245565\ncpu: 1.9562574194511153 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.1198358822130743,
            "unit": "ns/iter",
            "extra": "iterations: 342025671\ncpu: 2.108578569238442 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 2.0054130911444004,
            "unit": "ns/iter",
            "extra": "iterations: 376816119\ncpu: 1.9128401457794322 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 59.45820148514879,
            "unit": "ns/iter",
            "extra": "iterations: 11140820\ncpu: 57.687943975398824 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 42.389750265114394,
            "unit": "ns/iter",
            "extra": "iterations: 17875520\ncpu: 40.55574327348247 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 185.0678524504503,
            "unit": "ns/iter",
            "extra": "iterations: 4134819\ncpu: 174.7263906836059 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "514001ace2da9444cfe2382a4134ed4cd773ce73",
          "message": "Modify parent's `CMAKE_MODULE_PATH` (#1495)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-28T12:22:29-04:00",
          "tree_id": "a9470b69171f307fd5c3841da7c8786711931600",
          "url": "https://github.com/sourcemeta/core/commit/514001ace2da9444cfe2382a4134ed4cd773ce73"
        },
        "date": 1738082249892,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.3693760568177797,
            "unit": "ns/iter",
            "extra": "iterations: 295961812\ncpu: 2.3622574658381934 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.2448386582671906,
            "unit": "ns/iter",
            "extra": "iterations: 328413388\ncpu: 2.2132167157570333 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.123902391095557,
            "unit": "ns/iter",
            "extra": "iterations: 332462598\ncpu: 2.117805143302165 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.1872127726200303,
            "unit": "ns/iter",
            "extra": "iterations: 346034445\ncpu: 2.184542639967532 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.7213223992555386,
            "unit": "ns/iter",
            "extra": "iterations: 342888493\ncpu: 1.7163509771090497 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.7138428317499859,
            "unit": "ns/iter",
            "extra": "iterations: 420190767\ncpu: 1.710139908904757 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.855178463070471,
            "unit": "ns/iter",
            "extra": "iterations: 391485744\ncpu: 1.8467339132533014 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.9278339658814752,
            "unit": "ns/iter",
            "extra": "iterations: 392867766\ncpu: 1.8137807722306247 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.2867923243517594,
            "unit": "ns/iter",
            "extra": "iterations: 312772279\ncpu: 2.209757853892159 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.1365788952003926,
            "unit": "ns/iter",
            "extra": "iterations: 333519151\ncpu: 2.133910445220582 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.84225116760729,
            "unit": "ns/iter",
            "extra": "iterations: 104930221\ncpu: 6.799861786243645 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 82.37052585317998,
            "unit": "ns/iter",
            "extra": "iterations: 9265387\ncpu: 79.52296002314866 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.81132966830924,
            "unit": "ns/iter",
            "extra": "iterations: 144212148\ncpu: 4.806918207750429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.127269758391674,
            "unit": "ns/iter",
            "extra": "iterations: 324152111\ncpu: 2.120100337708427 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 907.9269042650328,
            "unit": "ns/iter",
            "extra": "iterations: 769789\ncpu: 906.7978368098275 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 228.85143879599372,
            "unit": "ns/iter",
            "extra": "iterations: 2887646\ncpu: 228.47814448169927 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 26037.432647533715,
            "unit": "ns/iter",
            "extra": "iterations: 26179\ncpu: 25988.92241873247 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 28.122970368354586,
            "unit": "ns/iter",
            "extra": "iterations: 27284811\ncpu: 27.89357785912467 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 140.60225402023374,
            "unit": "ns/iter",
            "extra": "iterations: 5351109\ncpu: 129.9732447984147 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 6.545865218294473,
            "unit": "ns/iter",
            "extra": "iterations: 121665073\ncpu: 6.036399616511133 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 6.47271573593858,
            "unit": "ns/iter",
            "extra": "iterations: 129044152\ncpu: 6.0855992916284976 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 1.1136520112108483,
            "unit": "ns/iter",
            "extra": "iterations: 591426013\ncpu: 1.094894349870271 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 4.111133813363609,
            "unit": "ns/iter",
            "extra": "iterations: 178651184\ncpu: 4.098052885000753 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.2405216723482977,
            "unit": "ns/iter",
            "extra": "iterations: 324982822\ncpu: 2.177367393283316 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.489500392026669,
            "unit": "ns/iter",
            "extra": "iterations: 327264907\ncpu: 2.18564528215669 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.5922804512911923,
            "unit": "ns/iter",
            "extra": "iterations: 445420127\ncpu: 1.5875730734547597 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.1631746253194724,
            "unit": "ns/iter",
            "extra": "iterations: 341806889\ncpu: 2.1541637213754377 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.9875953505595807,
            "unit": "ns/iter",
            "extra": "iterations: 373020990\ncpu: 1.913492857332237 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.134561525546161,
            "unit": "ns/iter",
            "extra": "iterations: 335414500\ncpu: 2.09761354980181 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.858349234344484,
            "unit": "ns/iter",
            "extra": "iterations: 368533552\ncpu: 1.8559178568359944 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 67.31134618268709,
            "unit": "ns/iter",
            "extra": "iterations: 12873563\ncpu: 67.15576721067839 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 51.14937660567235,
            "unit": "ns/iter",
            "extra": "iterations: 13394822\ncpu: 51.039200072983476 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 217.29906371021696,
            "unit": "ns/iter",
            "extra": "iterations: 3050428\ncpu: 216.81973808265488 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32f08ad1e4d3e39097eda3fdd44e58ad0b5d59ec",
          "message": "Support old Clang versions (#1496)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-28T13:14:40-04:00",
          "tree_id": "76abafec782f1a89b18def2dad33a815e758db87",
          "url": "https://github.com/sourcemeta/core/commit/32f08ad1e4d3e39097eda3fdd44e58ad0b5d59ec"
        },
        "date": 1738085134990,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.2832958426894554,
            "unit": "ns/iter",
            "extra": "iterations: 312044471\ncpu: 2.2818189911142515 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.2327621949887217,
            "unit": "ns/iter",
            "extra": "iterations: 331643531\ncpu: 2.2312933340466703 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.5522930690091035,
            "unit": "ns/iter",
            "extra": "iterations: 292585874\ncpu: 2.53416198760163 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.3870303051087363,
            "unit": "ns/iter",
            "extra": "iterations: 296840347\ncpu: 2.3837662472480536 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.8560831524774686,
            "unit": "ns/iter",
            "extra": "iterations: 382641208\ncpu: 1.8546042223450216 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.8317757687395426,
            "unit": "ns/iter",
            "extra": "iterations: 385203773\ncpu: 1.8305324335439472 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.2296130586190483,
            "unit": "ns/iter",
            "extra": "iterations: 393446309\ncpu: 2.2282633740503606 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.8695473004260552,
            "unit": "ns/iter",
            "extra": "iterations: 396378235\ncpu: 1.8683139855042774 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.220666649089393,
            "unit": "ns/iter",
            "extra": "iterations: 313088439\ncpu: 2.218855484472235 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.4684305859070435,
            "unit": "ns/iter",
            "extra": "iterations: 298813284\ncpu: 2.4635417480301895 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 7.44995902098891,
            "unit": "ns/iter",
            "extra": "iterations: 95077692\ncpu: 7.443365369028947 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 79.67971547930026,
            "unit": "ns/iter",
            "extra": "iterations: 8267098\ncpu: 79.60955585623896 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.9396724039931605,
            "unit": "ns/iter",
            "extra": "iterations: 142751973\ncpu: 4.925185867658725 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.5088013315851443,
            "unit": "ns/iter",
            "extra": "iterations: 306016280\ncpu: 2.4942627235387542 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 989.2720892096952,
            "unit": "ns/iter",
            "extra": "iterations: 615212\ncpu: 988.2609571984929 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 234.93904460842936,
            "unit": "ns/iter",
            "extra": "iterations: 2809947\ncpu: 234.7795171937406 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 25662.577647870687,
            "unit": "ns/iter",
            "extra": "iterations: 27420\ncpu: 25646.717724288872 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 26.327074243768735,
            "unit": "ns/iter",
            "extra": "iterations: 26922559\ncpu: 26.240633366241486 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 136.4379546677491,
            "unit": "ns/iter",
            "extra": "iterations: 4937958\ncpu: 134.41770869659064 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 6.591113439334022,
            "unit": "ns/iter",
            "extra": "iterations: 108024691\ncpu: 6.385354992591447 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.615534496315439,
            "unit": "ns/iter",
            "extra": "iterations: 125897016\ncpu: 5.610601604727455 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 1.042296088572728,
            "unit": "ns/iter",
            "extra": "iterations: 618292629\ncpu: 1.0373922798293604 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.8584516407740805,
            "unit": "ns/iter",
            "extra": "iterations: 184945930\ncpu: 3.8399709579983794 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.061697893151242,
            "unit": "ns/iter",
            "extra": "iterations: 341918750\ncpu: 2.0606211270952492 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.081081571929755,
            "unit": "ns/iter",
            "extra": "iterations: 335601037\ncpu: 2.0796538837870266 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.6007584462672948,
            "unit": "ns/iter",
            "extra": "iterations: 409980087\ncpu: 1.5984776353296386 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.120165809145354,
            "unit": "ns/iter",
            "extra": "iterations: 331005263\ncpu: 2.1178092264955906 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.924173899185013,
            "unit": "ns/iter",
            "extra": "iterations: 367538959\ncpu: 1.9223104998781864 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.2394217449608966,
            "unit": "ns/iter",
            "extra": "iterations: 335675067\ncpu: 2.158965831084497 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 2.860982020577568,
            "unit": "ns/iter",
            "extra": "iterations: 264977874\ncpu: 2.5122474942945803 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 71.47409823587779,
            "unit": "ns/iter",
            "extra": "iterations: 8064237\ncpu: 69.53875487538396 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 53.72751278460807,
            "unit": "ns/iter",
            "extra": "iterations: 14639574\ncpu: 52.3190770441815 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 199.35333580423142,
            "unit": "ns/iter",
            "extra": "iterations: 3032154\ncpu: 194.964701660932 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11a33a90fce7a13ab73c381561685ef8d0f74d31",
          "message": "Revise JSON public interface (#1497)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-28T14:08:59-04:00",
          "tree_id": "e84fc7d9010b8ed613d29f7ce973ec19b9f9efd4",
          "url": "https://github.com/sourcemeta/core/commit/11a33a90fce7a13ab73c381561685ef8d0f74d31"
        },
        "date": 1738088360505,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.196760277209099,
            "unit": "ns/iter",
            "extra": "iterations: 307662556\ncpu: 2.195385778437075 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.2322388629451297,
            "unit": "ns/iter",
            "extra": "iterations: 305374149\ncpu: 2.230765119545204 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.3215049687761944,
            "unit": "ns/iter",
            "extra": "iterations: 318174587\ncpu: 2.320141300285558 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.3500710499001016,
            "unit": "ns/iter",
            "extra": "iterations: 297997880\ncpu: 2.3487885215827733 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.0218266456797207,
            "unit": "ns/iter",
            "extra": "iterations: 347919442\ncpu: 2.0200279580811697 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.1037899700310523,
            "unit": "ns/iter",
            "extra": "iterations: 342621643\ncpu: 2.0853673858542554 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.0174590362279674,
            "unit": "ns/iter",
            "extra": "iterations: 346526076\ncpu: 2.016246534936089 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.0201504749374,
            "unit": "ns/iter",
            "extra": "iterations: 347777700\ncpu: 2.0185480552663377 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.323303586173808,
            "unit": "ns/iter",
            "extra": "iterations: 294466553\ncpu: 2.321458899272688 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.643869943396479,
            "unit": "ns/iter",
            "extra": "iterations: 270177429\ncpu: 2.6421452104350305 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.876340459185298,
            "unit": "ns/iter",
            "extra": "iterations: 104244229\ncpu: 6.823140300649181 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 74.9346184043941,
            "unit": "ns/iter",
            "extra": "iterations: 9559054\ncpu: 74.67088270450186 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.138597757528322,
            "unit": "ns/iter",
            "extra": "iterations: 138318052\ncpu: 5.134196077313183 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.533402868271604,
            "unit": "ns/iter",
            "extra": "iterations: 283443269\ncpu: 2.531811753836356 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 912.6251609121055,
            "unit": "ns/iter",
            "extra": "iterations: 783725\ncpu: 912.0648186545044 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 220.5396592765276,
            "unit": "ns/iter",
            "extra": "iterations: 2718056\ncpu: 220.40789446575053 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 29117.145683620212,
            "unit": "ns/iter",
            "extra": "iterations: 26387\ncpu: 29081.631106226676 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 26.933432085760153,
            "unit": "ns/iter",
            "extra": "iterations: 22519045\ncpu: 26.854513590607304 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 126.15392027961005,
            "unit": "ns/iter",
            "extra": "iterations: 5568992\ncpu: 126.03950589262851 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 6.533409925520619,
            "unit": "ns/iter",
            "extra": "iterations: 118946474\ncpu: 6.522463204752051 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.4464437338623455,
            "unit": "ns/iter",
            "extra": "iterations: 129165590\ncpu: 5.442533108082406 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.8209938713791164,
            "unit": "ns/iter",
            "extra": "iterations: 813386010\ncpu: 0.8203349846157278 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.713139426758567,
            "unit": "ns/iter",
            "extra": "iterations: 188489232\ncpu: 3.710015646941547 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.079401748237526,
            "unit": "ns/iter",
            "extra": "iterations: 340299755\ncpu: 2.0777417250858745 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.0781193187743954,
            "unit": "ns/iter",
            "extra": "iterations: 338198561\ncpu: 2.076167911311711 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.5504810253478103,
            "unit": "ns/iter",
            "extra": "iterations: 453620540\ncpu: 1.5487592338742007 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.069647201336622,
            "unit": "ns/iter",
            "extra": "iterations: 339329775\ncpu: 2.068465698301898 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.8472640281530048,
            "unit": "ns/iter",
            "extra": "iterations: 379003222\ncpu: 1.8463431426976122 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.044030207526412,
            "unit": "ns/iter",
            "extra": "iterations: 341738472\ncpu: 2.039451384917538 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.854803647292833,
            "unit": "ns/iter",
            "extra": "iterations: 374848722\ncpu: 1.853211600385286 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 58.92435510813561,
            "unit": "ns/iter",
            "extra": "iterations: 11064220\ncpu: 58.87997527164149 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 38.5514895762365,
            "unit": "ns/iter",
            "extra": "iterations: 17714119\ncpu: 38.50826563827421 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 163.53684220010373,
            "unit": "ns/iter",
            "extra": "iterations: 4359985\ncpu: 163.33817662216637 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1039b8d3e44f77b0e1be3a3062da8798112210c",
          "message": "Revise Pointer and YAML public interfaces (#1498)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-28T14:22:49-04:00",
          "tree_id": "aca463235b944cc7dd2885a001a54685f2c7e302",
          "url": "https://github.com/sourcemeta/core/commit/d1039b8d3e44f77b0e1be3a3062da8798112210c"
        },
        "date": 1738089176727,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.4195720697651444,
            "unit": "ns/iter",
            "extra": "iterations: 268971109\ncpu: 2.4142741665239593 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.3174542852993736,
            "unit": "ns/iter",
            "extra": "iterations: 301356535\ncpu: 2.3159909241722594 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.34573295774675,
            "unit": "ns/iter",
            "extra": "iterations: 298671764\ncpu: 2.3440314230708474 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.392394755450172,
            "unit": "ns/iter",
            "extra": "iterations: 298222593\ncpu: 2.3792563563418545 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.9970364152816449,
            "unit": "ns/iter",
            "extra": "iterations: 358827148\ncpu: 1.9960028219492463 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.0219891210105225,
            "unit": "ns/iter",
            "extra": "iterations: 339048726\ncpu: 2.019246637723689 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.9939159830868136,
            "unit": "ns/iter",
            "extra": "iterations: 352238476\ncpu: 1.992692587052871 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.1077153542634384,
            "unit": "ns/iter",
            "extra": "iterations: 324113088\ncpu: 2.105993325391416 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.353490441479331,
            "unit": "ns/iter",
            "extra": "iterations: 293014534\ncpu: 2.352064215353901 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.682683548533442,
            "unit": "ns/iter",
            "extra": "iterations: 262895000\ncpu: 2.6806443637193533 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.906095276325223,
            "unit": "ns/iter",
            "extra": "iterations: 106342575\ncpu: 6.885135139900467 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 73.29214143605276,
            "unit": "ns/iter",
            "extra": "iterations: 9860960\ncpu: 73.2292799078384 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.11486335625981,
            "unit": "ns/iter",
            "extra": "iterations: 137292590\ncpu: 5.110596281998888 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.3275476075501382,
            "unit": "ns/iter",
            "extra": "iterations: 301237224\ncpu: 2.3261202274258097 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 867.4661879869855,
            "unit": "ns/iter",
            "extra": "iterations: 825647\ncpu: 866.7445046127452 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 213.24683500663022,
            "unit": "ns/iter",
            "extra": "iterations: 3084271\ncpu: 213.1320496804597 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 24996.58601164034,
            "unit": "ns/iter",
            "extra": "iterations: 28433\ncpu: 24979.07361164841 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 25.106959900570214,
            "unit": "ns/iter",
            "extra": "iterations: 27940989\ncpu: 25.078425105138543 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 121.97786776868148,
            "unit": "ns/iter",
            "extra": "iterations: 5782639\ncpu: 121.88466200293672 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.758435847668455,
            "unit": "ns/iter",
            "extra": "iterations: 120902276\ncpu: 5.755441692429343 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.486693152532578,
            "unit": "ns/iter",
            "extra": "iterations: 131462805\ncpu: 5.483421717648557 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.797841942657607,
            "unit": "ns/iter",
            "extra": "iterations: 878525082\ncpu: 0.7974194640011419 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.7041075376409105,
            "unit": "ns/iter",
            "extra": "iterations: 188768287\ncpu: 3.7014691985841774 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.0221980617441124,
            "unit": "ns/iter",
            "extra": "iterations: 347919442\ncpu: 2.0209678308233263 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.023561221865578,
            "unit": "ns/iter",
            "extra": "iterations: 348758420\ncpu: 2.022273756143292 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.5005616754259958,
            "unit": "ns/iter",
            "extra": "iterations: 463613002\ncpu: 1.4998112585289411 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.069351140277079,
            "unit": "ns/iter",
            "extra": "iterations: 339482822\ncpu: 2.067203270744578 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.8334778564425385,
            "unit": "ns/iter",
            "extra": "iterations: 380054728\ncpu: 1.8324492466253453 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.0728651951016746,
            "unit": "ns/iter",
            "extra": "iterations: 356319323\ncpu: 2.066783787642066 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.876194814754322,
            "unit": "ns/iter",
            "extra": "iterations: 369676005\ncpu: 1.8747984468183165 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 59.14382191972436,
            "unit": "ns/iter",
            "extra": "iterations: 11676007\ncpu: 59.0885223004747 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 38.44343493689406,
            "unit": "ns/iter",
            "extra": "iterations: 17820184\ncpu: 38.412903031753245 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 186.46083669995804,
            "unit": "ns/iter",
            "extra": "iterations: 3792126\ncpu: 186.36432439217504 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2492e5e62e025bca66d2eee0ef5cb61743b289f6",
          "message": "Namespace JSON-related errors (#1499)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-28T14:44:20-04:00",
          "tree_id": "978e964d8a9e02731fd1c6c75e1ef75911ced68d",
          "url": "https://github.com/sourcemeta/core/commit/2492e5e62e025bca66d2eee0ef5cb61743b289f6"
        },
        "date": 1738090461744,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.026600767951069,
            "unit": "ns/iter",
            "extra": "iterations: 347036310\ncpu: 2.0251454379514353 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.079071925094296,
            "unit": "ns/iter",
            "extra": "iterations: 363638253\ncpu: 2.0779194536499985 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.009437282351249,
            "unit": "ns/iter",
            "extra": "iterations: 339469651\ncpu: 2.0080675783297037 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.9704979943229592,
            "unit": "ns/iter",
            "extra": "iterations: 334347521\ncpu: 1.9695076488992396 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.9963061784457965,
            "unit": "ns/iter",
            "extra": "iterations: 336291094\ncpu: 1.9946588297101904 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.0208231926398756,
            "unit": "ns/iter",
            "extra": "iterations: 344225615\ncpu: 2.019117606921845 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.055018419848769,
            "unit": "ns/iter",
            "extra": "iterations: 335615519\ncpu: 2.052256111553649 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.0435971677945113,
            "unit": "ns/iter",
            "extra": "iterations: 350840262\ncpu: 2.041954922494047 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.0052680676414862,
            "unit": "ns/iter",
            "extra": "iterations: 337585301\ncpu: 2.0034906673854267 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.3539794063396373,
            "unit": "ns/iter",
            "extra": "iterations: 287425936\ncpu: 2.347195974687545 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.434392888215279,
            "unit": "ns/iter",
            "extra": "iterations: 109546166\ncpu: 6.3997584360917035 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 74.8030893008348,
            "unit": "ns/iter",
            "extra": "iterations: 8830022\ncpu: 74.75587263542485 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.669338381029344,
            "unit": "ns/iter",
            "extra": "iterations: 142618766\ncpu: 4.666636927709777 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.077835856775558,
            "unit": "ns/iter",
            "extra": "iterations: 333204811\ncpu: 2.076713712275903 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 880.0238996168044,
            "unit": "ns/iter",
            "extra": "iterations: 780814\ncpu: 878.8328590419756 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 237.0036123475368,
            "unit": "ns/iter",
            "extra": "iterations: 3053009\ncpu: 236.80310146481685 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 25509.622509919067,
            "unit": "ns/iter",
            "extra": "iterations: 27208\ncpu: 25424.286974419218 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 26.654392013281743,
            "unit": "ns/iter",
            "extra": "iterations: 27430757\ncpu: 26.638382600961503 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 124.7035009488768,
            "unit": "ns/iter",
            "extra": "iterations: 5583918\ncpu: 124.62163663578144 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 6.135770671134114,
            "unit": "ns/iter",
            "extra": "iterations: 118887889\ncpu: 6.124803847766198 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.548843530010463,
            "unit": "ns/iter",
            "extra": "iterations: 124172920\ncpu: 5.5459998846769345 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.8206788841898318,
            "unit": "ns/iter",
            "extra": "iterations: 877280930\ncpu: 0.8198673599345229 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.7865099879272117,
            "unit": "ns/iter",
            "extra": "iterations: 183675451\ncpu: 3.7834724031792573 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.046332388426806,
            "unit": "ns/iter",
            "extra": "iterations: 327896497\ncpu: 2.0451392623447306 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.0703781023923953,
            "unit": "ns/iter",
            "extra": "iterations: 344069954\ncpu: 2.0686084086261176 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.57251345832712,
            "unit": "ns/iter",
            "extra": "iterations: 460232615\ncpu: 1.5712967235057833 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.121870257146912,
            "unit": "ns/iter",
            "extra": "iterations: 350138305\ncpu: 2.120439236146981 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.8715366193755891,
            "unit": "ns/iter",
            "extra": "iterations: 368471475\ncpu: 1.8700226387945 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.101276302125172,
            "unit": "ns/iter",
            "extra": "iterations: 337081357\ncpu: 2.099042220243581 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 2.0327701402503022,
            "unit": "ns/iter",
            "extra": "iterations: 373422955\ncpu: 2.031449834143168 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 60.30684480203827,
            "unit": "ns/iter",
            "extra": "iterations: 10038145\ncpu: 60.27000008467694 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 37.79610067356233,
            "unit": "ns/iter",
            "extra": "iterations: 16108136\ncpu: 37.776562105013426 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 189.26061572963368,
            "unit": "ns/iter",
            "extra": "iterations: 3595570\ncpu: 189.15025990315934 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a44f00c487ae0ff1084fb7ae347dff839426535",
          "message": "Remove `anchors()` from the public JSON Schema interface (#1500)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-28T14:46:27-04:00",
          "tree_id": "c81ce37bb1996925fe30e3118cc58e02f71b0480",
          "url": "https://github.com/sourcemeta/core/commit/3a44f00c487ae0ff1084fb7ae347dff839426535"
        },
        "date": 1738090652207,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.0379328918072175,
            "unit": "ns/iter",
            "extra": "iterations: 340268326\ncpu: 2.0368719244235507 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.0361142627987583,
            "unit": "ns/iter",
            "extra": "iterations: 346430038\ncpu: 2.0346330360648466 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.0987442978945574,
            "unit": "ns/iter",
            "extra": "iterations: 345406099\ncpu: 2.0939497075875324 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.0353534665302773,
            "unit": "ns/iter",
            "extra": "iterations: 347446270\ncpu: 2.0333877810805108 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.031408390799496,
            "unit": "ns/iter",
            "extra": "iterations: 347127520\ncpu: 2.0296633352492495 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.017677895346648,
            "unit": "ns/iter",
            "extra": "iterations: 344973733\ncpu: 2.0164984561302814 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.033382121101866,
            "unit": "ns/iter",
            "extra": "iterations: 347586015\ncpu: 2.0312612404730968 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.037947366511367,
            "unit": "ns/iter",
            "extra": "iterations: 347354892\ncpu: 2.0366864445945363 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.022677054892075,
            "unit": "ns/iter",
            "extra": "iterations: 346682251\ncpu: 2.021190868522427 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.3578196785253507,
            "unit": "ns/iter",
            "extra": "iterations: 297015419\ncpu: 2.356554425209817 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.472651582566345,
            "unit": "ns/iter",
            "extra": "iterations: 106086324\ncpu: 6.4606254054009735 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 73.55183719799044,
            "unit": "ns/iter",
            "extra": "iterations: 9521607\ncpu: 73.49326642025865 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.73106125101573,
            "unit": "ns/iter",
            "extra": "iterations: 148761138\ncpu: 4.726200736646692 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.0651391833391317,
            "unit": "ns/iter",
            "extra": "iterations: 345694377\ncpu: 2.0620960230429186 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 880.7580448587958,
            "unit": "ns/iter",
            "extra": "iterations: 797530\ncpu: 880.0897771870672 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 225.0275811596015,
            "unit": "ns/iter",
            "extra": "iterations: 3123745\ncpu: 224.78403326776044 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 28440.359345994275,
            "unit": "ns/iter",
            "extra": "iterations: 27957\ncpu: 28007.976535393624 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 26.693127658581098,
            "unit": "ns/iter",
            "extra": "iterations: 25885276\ncpu: 26.430778640336044 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 122.0241275033822,
            "unit": "ns/iter",
            "extra": "iterations: 5747362\ncpu: 121.94498971876094 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.805640549202992,
            "unit": "ns/iter",
            "extra": "iterations: 121872660\ncpu: 5.8014980554293585 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.698044275313943,
            "unit": "ns/iter",
            "extra": "iterations: 129320697\ncpu: 5.691153984423716 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.8077840838958594,
            "unit": "ns/iter",
            "extra": "iterations: 865800866\ncpu: 0.807381959814301 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.7330192388891823,
            "unit": "ns/iter",
            "extra": "iterations: 188577586\ncpu: 3.729875935520781 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.054200506416629,
            "unit": "ns/iter",
            "extra": "iterations: 344240851\ncpu: 2.0526674796071664 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.056108633137606,
            "unit": "ns/iter",
            "extra": "iterations: 343197819\ncpu: 2.054194289620472 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.5502688306856098,
            "unit": "ns/iter",
            "extra": "iterations: 442768951\ncpu: 1.5489455582896128 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.0699706951794954,
            "unit": "ns/iter",
            "extra": "iterations: 340456991\ncpu: 2.0687106407516938 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.8570757302744108,
            "unit": "ns/iter",
            "extra": "iterations: 377828995\ncpu: 1.8546670829219876 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.0214743949480414,
            "unit": "ns/iter",
            "extra": "iterations: 346848878\ncpu: 2.020124741473133 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.8710601381824672,
            "unit": "ns/iter",
            "extra": "iterations: 376004469\ncpu: 1.8700841558348524 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 57.915578368698284,
            "unit": "ns/iter",
            "extra": "iterations: 12017786\ncpu: 57.878214839238936 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 38.77973408532813,
            "unit": "ns/iter",
            "extra": "iterations: 18244323\ncpu: 38.68841830962994 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 169.95327395678524,
            "unit": "ns/iter",
            "extra": "iterations: 4189309\ncpu: 169.82848484081728 ns\nthreads: 1"
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
          "id": "97b49300df8f66e34ea71b812368f5693576a559",
          "message": "Revise JSON Schema public interface namespaces (#1501)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-28T19:08:15Z",
          "url": "https://github.com/sourcemeta/core/commit/97b49300df8f66e34ea71b812368f5693576a559"
        },
        "date": 1738092094875,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.0803541093062576,
            "unit": "ns/iter",
            "extra": "iterations: 341463415\ncpu: 2.0801847834855165 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.0816608247269177,
            "unit": "ns/iter",
            "extra": "iterations: 334430584\ncpu: 2.0811792739625745 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.0890726880494705,
            "unit": "ns/iter",
            "extra": "iterations: 331690675\ncpu: 2.088228739020174 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.0379794518999295,
            "unit": "ns/iter",
            "extra": "iterations: 340957799\ncpu: 2.0376187376784416 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.08127756563514,
            "unit": "ns/iter",
            "extra": "iterations: 337068372\ncpu: 2.0806757864543886 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.0417621909354895,
            "unit": "ns/iter",
            "extra": "iterations: 333342857\ncpu: 2.0412256801410926 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.9947458726551082,
            "unit": "ns/iter",
            "extra": "iterations: 322635657\ncpu: 1.994376585598534 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.0229854322841376,
            "unit": "ns/iter",
            "extra": "iterations: 363377752\ncpu: 2.0212299623670984 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.948631640825621,
            "unit": "ns/iter",
            "extra": "iterations: 361249303\ncpu: 1.9486210607304641 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.439497857853424,
            "unit": "ns/iter",
            "extra": "iterations: 288681222\ncpu: 2.4388735613707517 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.541600933887988,
            "unit": "ns/iter",
            "extra": "iterations: 103409561\ncpu: 6.540903891855784 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 77.73171753553517,
            "unit": "ns/iter",
            "extra": "iterations: 8799497\ncpu: 77.52920422610528 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.479573826342723,
            "unit": "ns/iter",
            "extra": "iterations: 151267296\ncpu: 4.479467921473261 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.021374414608799,
            "unit": "ns/iter",
            "extra": "iterations: 351594481\ncpu: 2.020318970820246 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 887.841648274539,
            "unit": "ns/iter",
            "extra": "iterations: 791175\ncpu: 887.7441779631557 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 225.31831198489382,
            "unit": "ns/iter",
            "extra": "iterations: 3195399\ncpu: 225.26795558238624 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 24679.526628858996,
            "unit": "ns/iter",
            "extra": "iterations: 28354\ncpu: 24673.661564505852 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 25.93426394774989,
            "unit": "ns/iter",
            "extra": "iterations: 27910686\ncpu: 25.887110048101274 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 127.60116334693704,
            "unit": "ns/iter",
            "extra": "iterations: 6119256\ncpu: 127.43330234917424 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.538371625157385,
            "unit": "ns/iter",
            "extra": "iterations: 118906064\ncpu: 5.538161619747167 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.389903268275561,
            "unit": "ns/iter",
            "extra": "iterations: 136732103\ncpu: 5.388858825640951 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.8238564095827031,
            "unit": "ns/iter",
            "extra": "iterations: 931780366\ncpu: 0.8237617232643011 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.767068197486477,
            "unit": "ns/iter",
            "extra": "iterations: 184778965\ncpu: 3.766197088505187 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.0553482212392207,
            "unit": "ns/iter",
            "extra": "iterations: 340698919\ncpu: 2.054335840143956 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.0544022125110932,
            "unit": "ns/iter",
            "extra": "iterations: 364856976\ncpu: 2.053388174767982 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.5859259416018787,
            "unit": "ns/iter",
            "extra": "iterations: 454247539\ncpu: 1.585882009588605 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.106470891637616,
            "unit": "ns/iter",
            "extra": "iterations: 361156112\ncpu: 2.1061446137176234 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.8089450238086604,
            "unit": "ns/iter",
            "extra": "iterations: 365285366\ncpu: 1.808728357324898 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 1.9691325803346178,
            "unit": "ns/iter",
            "extra": "iterations: 354703367\ncpu: 1.9687549230396777 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.8050055090642503,
            "unit": "ns/iter",
            "extra": "iterations: 406437978\ncpu: 1.8048239576666725 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 60.04601399867257,
            "unit": "ns/iter",
            "extra": "iterations: 12318522\ncpu: 60.02018748677815 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 38.612021126689456,
            "unit": "ns/iter",
            "extra": "iterations: 18405698\ncpu: 38.61184726599347 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 192.77800416132058,
            "unit": "ns/iter",
            "extra": "iterations: 3935304\ncpu: 183.09665530286878 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97b49300df8f66e34ea71b812368f5693576a559",
          "message": "Revise JSON Schema public interface namespaces (#1501)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-28T15:08:15-04:00",
          "tree_id": "901e16a94681e85cdd122d6725780e0be0265b65",
          "url": "https://github.com/sourcemeta/core/commit/97b49300df8f66e34ea71b812368f5693576a559"
        },
        "date": 1738092107235,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.1377475672394706,
            "unit": "ns/iter",
            "extra": "iterations: 282048803\ncpu: 2.1375485149639153 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.073204088317801,
            "unit": "ns/iter",
            "extra": "iterations: 341395136\ncpu: 2.0728590579568182 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.040108356447086,
            "unit": "ns/iter",
            "extra": "iterations: 345627808\ncpu: 2.0397722164762837 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.040202048297104,
            "unit": "ns/iter",
            "extra": "iterations: 342893532\ncpu: 2.0397001830877377 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.061490211505423,
            "unit": "ns/iter",
            "extra": "iterations: 340351048\ncpu: 2.060772264758827 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.078306432368491,
            "unit": "ns/iter",
            "extra": "iterations: 340463614\ncpu: 2.077249876105705 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.0029643604421836,
            "unit": "ns/iter",
            "extra": "iterations: 338247588\ncpu: 2.0026632089391274 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.0140446441526367,
            "unit": "ns/iter",
            "extra": "iterations: 342770960\ncpu: 2.010873383206088 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.0348776056389233,
            "unit": "ns/iter",
            "extra": "iterations: 340094741\ncpu: 2.034541898429418 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.4763371566771006,
            "unit": "ns/iter",
            "extra": "iterations: 293806558\ncpu: 2.4596319596106517 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.474068531623166,
            "unit": "ns/iter",
            "extra": "iterations: 104679158\ncpu: 6.472702044470003 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 74.56593647539144,
            "unit": "ns/iter",
            "extra": "iterations: 9255097\ncpu: 74.54551799943314 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.687675264028264,
            "unit": "ns/iter",
            "extra": "iterations: 146439532\ncpu: 4.687395477335997 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 1.9830267423668893,
            "unit": "ns/iter",
            "extra": "iterations: 341703440\ncpu: 1.9826139297866086 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 860.8714943888306,
            "unit": "ns/iter",
            "extra": "iterations: 794236\ncpu: 859.69283688979 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 223.14341001354458,
            "unit": "ns/iter",
            "extra": "iterations: 3177745\ncpu: 223.1292945154502 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 24703.16820547436,
            "unit": "ns/iter",
            "extra": "iterations: 28673\ncpu: 24691.03337634711 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 25.24927929430813,
            "unit": "ns/iter",
            "extra": "iterations: 28532531\ncpu: 25.237368532080172 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 121.22837012106777,
            "unit": "ns/iter",
            "extra": "iterations: 5768106\ncpu: 121.18570636531294 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.6557095884104225,
            "unit": "ns/iter",
            "extra": "iterations: 111130515\ncpu: 5.649213449609201 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.41370805767281,
            "unit": "ns/iter",
            "extra": "iterations: 129113177\ncpu: 5.409122571586932 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.8280984162496426,
            "unit": "ns/iter",
            "extra": "iterations: 906630056\ncpu: 0.8275944471887225 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.718684304624199,
            "unit": "ns/iter",
            "extra": "iterations: 191558824\ncpu: 3.71777183180034 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.027995453377608,
            "unit": "ns/iter",
            "extra": "iterations: 345184674\ncpu: 2.0270366928283683 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.0194888203830192,
            "unit": "ns/iter",
            "extra": "iterations: 342467429\ncpu: 2.0189715618182156 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.5194723009625855,
            "unit": "ns/iter",
            "extra": "iterations: 435215121\ncpu: 1.519469264947705 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.0632830169740703,
            "unit": "ns/iter",
            "extra": "iterations: 336710054\ncpu: 2.0632885527083187 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.8608094053755413,
            "unit": "ns/iter",
            "extra": "iterations: 367263207\ncpu: 1.8607200148965561 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.0170726674629336,
            "unit": "ns/iter",
            "extra": "iterations: 346587843\ncpu: 2.0169836135885513 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.8246472049551847,
            "unit": "ns/iter",
            "extra": "iterations: 379181834\ncpu: 1.8241485693114683 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 61.40948509143745,
            "unit": "ns/iter",
            "extra": "iterations: 9568201\ncpu: 61.223316692448186 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 38.4757057490783,
            "unit": "ns/iter",
            "extra": "iterations: 18203047\ncpu: 38.41906247893553 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 170.56790540673393,
            "unit": "ns/iter",
            "extra": "iterations: 4402488\ncpu: 170.46997061661605 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ddad44ecc9941c714abd815da4bacbf2e416dafd",
          "message": "Revise JSON Schema public interface (#1502)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-28T15:58:07-04:00",
          "tree_id": "74552ca9904db65607c1774a630a10a53e1758aa",
          "url": "https://github.com/sourcemeta/core/commit/ddad44ecc9941c714abd815da4bacbf2e416dafd"
        },
        "date": 1738094917698,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.9247922871571648,
            "unit": "ns/iter",
            "extra": "iterations: 364617516\ncpu: 1.9234457183894589 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.9506176550170498,
            "unit": "ns/iter",
            "extra": "iterations: 371016213\ncpu: 1.9493029540463775 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.9470040286959447,
            "unit": "ns/iter",
            "extra": "iterations: 367732039\ncpu: 1.9453621771585692 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.9125224586607763,
            "unit": "ns/iter",
            "extra": "iterations: 362210103\ncpu: 1.9115203973203359 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.9110298431902022,
            "unit": "ns/iter",
            "extra": "iterations: 370035576\ncpu: 1.9099001443039616 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.954149280151372,
            "unit": "ns/iter",
            "extra": "iterations: 368300870\ncpu: 1.952965791256483 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.923371330147804,
            "unit": "ns/iter",
            "extra": "iterations: 356731524\ncpu: 1.9221345854480736 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.925122438015843,
            "unit": "ns/iter",
            "extra": "iterations: 360979182\ncpu: 1.9238588667420653 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.9493304310313206,
            "unit": "ns/iter",
            "extra": "iterations: 370417408\ncpu: 1.948234571092291 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.2358413501957233,
            "unit": "ns/iter",
            "extra": "iterations: 316901249\ncpu: 2.228094721078234 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.111231946522103,
            "unit": "ns/iter",
            "extra": "iterations: 114047379\ncpu: 6.098167323950528 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 69.7881278065978,
            "unit": "ns/iter",
            "extra": "iterations: 9960018\ncpu: 69.74174143058787 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.4487990864563836,
            "unit": "ns/iter",
            "extra": "iterations: 155281225\ncpu: 4.446506652687733 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 1.9582676864443849,
            "unit": "ns/iter",
            "extra": "iterations: 368537433\ncpu: 1.9565827930428976 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 830.6790275992772,
            "unit": "ns/iter",
            "extra": "iterations: 864913\ncpu: 830.1251108493011 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 214.11397532785048,
            "unit": "ns/iter",
            "extra": "iterations: 3258133\ncpu: 213.97039347380894 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 23392.437118194484,
            "unit": "ns/iter",
            "extra": "iterations: 29628\ncpu: 23380.180909950097 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 25.272008005675385,
            "unit": "ns/iter",
            "extra": "iterations: 27099746\ncpu: 25.257321599988487 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 115.70502784304887,
            "unit": "ns/iter",
            "extra": "iterations: 6166749\ncpu: 115.64018577697917 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.45784997069716,
            "unit": "ns/iter",
            "extra": "iterations: 119425393\ncpu: 5.4550040291682 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.171498426498031,
            "unit": "ns/iter",
            "extra": "iterations: 137808839\ncpu: 5.168637985550433 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.7579414911608794,
            "unit": "ns/iter",
            "extra": "iterations: 931743158\ncpu: 0.7572848739931421 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.5355491327623945,
            "unit": "ns/iter",
            "extra": "iterations: 196565716\ncpu: 3.530809004353521 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 1.944182201417723,
            "unit": "ns/iter",
            "extra": "iterations: 360597974\ncpu: 1.9427341541303256 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 1.9553813386451515,
            "unit": "ns/iter",
            "extra": "iterations: 355461669\ncpu: 1.9509276540306824 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.4617415479323208,
            "unit": "ns/iter",
            "extra": "iterations: 465088466\ncpu: 1.460666195063204 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.0130885233393405,
            "unit": "ns/iter",
            "extra": "iterations: 364984436\ncpu: 1.9851997195847466 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.7768491719319544,
            "unit": "ns/iter",
            "extra": "iterations: 359167757\ncpu: 1.7690841887012663 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.128341934587564,
            "unit": "ns/iter",
            "extra": "iterations: 361813201\ncpu: 2.070734284789128 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.7540009363519242,
            "unit": "ns/iter",
            "extra": "iterations: 385030032\ncpu: 1.752642505559161 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 55.35070630252534,
            "unit": "ns/iter",
            "extra": "iterations: 12913938\ncpu: 55.3200735515377 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 36.30256837161788,
            "unit": "ns/iter",
            "extra": "iterations: 19190438\ncpu: 36.28155855535977 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 161.85986699265626,
            "unit": "ns/iter",
            "extra": "iterations: 4187004\ncpu: 161.72590233971545 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1257bcddc2797de7c95dedefebf6c2fb1e00717a",
          "message": "Revise CMake utilities, folders, and tests (#1503)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-28T15:58:20-04:00",
          "tree_id": "40913ac7be77dc66181e38b88ff1703afbd5caa1",
          "url": "https://github.com/sourcemeta/core/commit/1257bcddc2797de7c95dedefebf6c2fb1e00717a"
        },
        "date": 1738095042593,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.0195352121306307,
            "unit": "ns/iter",
            "extra": "iterations: 367401996\ncpu: 2.0193276249919987 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.0044123012923354,
            "unit": "ns/iter",
            "extra": "iterations: 361077869\ncpu: 2.0038447717769157 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.75059972573592,
            "unit": "ns/iter",
            "extra": "iterations: 280960886\ncpu: 2.563349689892423 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.1223706807555174,
            "unit": "ns/iter",
            "extra": "iterations: 328384116\ncpu: 2.1200264144322998 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.040972518982862,
            "unit": "ns/iter",
            "extra": "iterations: 353128720\ncpu: 2.0397123179332453 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.9821743014098978,
            "unit": "ns/iter",
            "extra": "iterations: 347251504\ncpu: 1.9803053178424819 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.9915841120050153,
            "unit": "ns/iter",
            "extra": "iterations: 348980976\ncpu: 1.9867014183604097 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.953160059113542,
            "unit": "ns/iter",
            "extra": "iterations: 343197819\ncpu: 1.952984438983279 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.9299199508174247,
            "unit": "ns/iter",
            "extra": "iterations: 357891508\ncpu: 1.9295652022008833 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.267588344551017,
            "unit": "ns/iter",
            "extra": "iterations: 313396819\ncpu: 2.261264177030466 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.192077472735549,
            "unit": "ns/iter",
            "extra": "iterations: 114155251\ncpu: 6.17481012765676 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 71.82328415201803,
            "unit": "ns/iter",
            "extra": "iterations: 9981036\ncpu: 71.79565327687425 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.8515080422239345,
            "unit": "ns/iter",
            "extra": "iterations: 133771595\ncpu: 4.851358765663211 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 1.9913458953135965,
            "unit": "ns/iter",
            "extra": "iterations: 358674544\ncpu: 1.9910138925275953 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 864.3879016345603,
            "unit": "ns/iter",
            "extra": "iterations: 824461\ncpu: 863.4902075416546 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 207.02069793080955,
            "unit": "ns/iter",
            "extra": "iterations: 3383555\ncpu: 207.0156979862893 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 23802.662074479005,
            "unit": "ns/iter",
            "extra": "iterations: 28814\ncpu: 23799.298951898443 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 24.20943667035933,
            "unit": "ns/iter",
            "extra": "iterations: 28444993\ncpu: 24.175467366084362 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 116.33542127616542,
            "unit": "ns/iter",
            "extra": "iterations: 6045897\ncpu: 116.29705236460394 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.411902958484133,
            "unit": "ns/iter",
            "extra": "iterations: 127898266\ncpu: 5.406156171030509 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.159746236368902,
            "unit": "ns/iter",
            "extra": "iterations: 137884846\ncpu: 5.158986071609341 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.7505964390304584,
            "unit": "ns/iter",
            "extra": "iterations: 870527664\ncpu: 0.750551679193967 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.4991555376971326,
            "unit": "ns/iter",
            "extra": "iterations: 197193653\ncpu: 3.4974097264682427 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 1.9564389130318078,
            "unit": "ns/iter",
            "extra": "iterations: 362030266\ncpu: 1.956143081142287 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 1.920578342685858,
            "unit": "ns/iter",
            "extra": "iterations: 362679267\ncpu: 1.9198505769561987 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.521060614610012,
            "unit": "ns/iter",
            "extra": "iterations: 478632479\ncpu: 1.5158143916932159 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 1.968544356336936,
            "unit": "ns/iter",
            "extra": "iterations: 356161596\ncpu: 1.9683537132397642 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.767188685547873,
            "unit": "ns/iter",
            "extra": "iterations: 402428368\ncpu: 1.7670995798188904 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 1.916462914232256,
            "unit": "ns/iter",
            "extra": "iterations: 368376460\ncpu: 1.9161919303964128 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.745115102305819,
            "unit": "ns/iter",
            "extra": "iterations: 397562375\ncpu: 1.7450720783122364 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 55.23822930604589,
            "unit": "ns/iter",
            "extra": "iterations: 12322859\ncpu: 55.20074521667437 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 36.559372616828064,
            "unit": "ns/iter",
            "extra": "iterations: 18653385\ncpu: 36.55615321294241 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 157.1121933454952,
            "unit": "ns/iter",
            "extra": "iterations: 4355753\ncpu: 157.1099187672031 ns\nthreads: 1"
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
          "id": "1257bcddc2797de7c95dedefebf6c2fb1e00717a",
          "message": "Revise CMake utilities, folders, and tests (#1503)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-28T19:58:20Z",
          "url": "https://github.com/sourcemeta/core/commit/1257bcddc2797de7c95dedefebf6c2fb1e00717a"
        },
        "date": 1738178081979,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.9531142180088146,
            "unit": "ns/iter",
            "extra": "iterations: 364317685\ncpu: 1.952790186400092 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.9498255446131942,
            "unit": "ns/iter",
            "extra": "iterations: 359379813\ncpu: 1.9495057169502175 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.9779014130368056,
            "unit": "ns/iter",
            "extra": "iterations: 358604720\ncpu: 1.9766332133051676 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.9509459980409456,
            "unit": "ns/iter",
            "extra": "iterations: 358909939\ncpu: 1.9505979743848783 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.9621694685633304,
            "unit": "ns/iter",
            "extra": "iterations: 356800620\ncpu: 1.9619248419467425 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.949194914185844,
            "unit": "ns/iter",
            "extra": "iterations: 357880529\ncpu: 1.9486726532697165 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.9527610996306506,
            "unit": "ns/iter",
            "extra": "iterations: 358659842\ncpu: 1.9515678033449848 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.9511618218346114,
            "unit": "ns/iter",
            "extra": "iterations: 357690342\ncpu: 1.950603407681609 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.9427383078363005,
            "unit": "ns/iter",
            "extra": "iterations: 355956939\ncpu: 1.9420860341761705 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.278289086454607,
            "unit": "ns/iter",
            "extra": "iterations: 307521988\ncpu: 2.277889150482472 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.152429629480925,
            "unit": "ns/iter",
            "extra": "iterations: 112885019\ncpu: 6.151914630939632 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 73.45754822765414,
            "unit": "ns/iter",
            "extra": "iterations: 9762765\ncpu: 72.1077481635581 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.3973732440260225,
            "unit": "ns/iter",
            "extra": "iterations: 156715599\ncpu: 4.3959440183105265 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 1.9452588904485049,
            "unit": "ns/iter",
            "extra": "iterations: 370921847\ncpu: 1.9398291198523037 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 823.475558385263,
            "unit": "ns/iter",
            "extra": "iterations: 841437\ncpu: 823.44251560129 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 197.1921061149052,
            "unit": "ns/iter",
            "extra": "iterations: 3539000\ncpu: 197.18931901667145 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 22784.70619556691,
            "unit": "ns/iter",
            "extra": "iterations: 30386\ncpu: 22782.004870664183 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 23.579894551111536,
            "unit": "ns/iter",
            "extra": "iterations: 29576048\ncpu: 23.578708013998277 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 114.10370617442618,
            "unit": "ns/iter",
            "extra": "iterations: 6132658\ncpu: 113.72882688061247 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.386388274571394,
            "unit": "ns/iter",
            "extra": "iterations: 130509359\ncpu: 5.386372329052682 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.056697923911345,
            "unit": "ns/iter",
            "extra": "iterations: 138729240\ncpu: 5.05318129040422 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.744421713776442,
            "unit": "ns/iter",
            "extra": "iterations: 933059636\ncpu: 0.744386503501047 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.4459626026403023,
            "unit": "ns/iter",
            "extra": "iterations: 202858567\ncpu: 3.4459032730917296 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 1.8910378419897973,
            "unit": "ns/iter",
            "extra": "iterations: 370711660\ncpu: 1.890620327399467 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 1.8918060223814475,
            "unit": "ns/iter",
            "extra": "iterations: 370243038\ncpu: 1.8912874196975458 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.4571920086559111,
            "unit": "ns/iter",
            "extra": "iterations: 488843884\ncpu: 1.456213370565566 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 1.919586164786371,
            "unit": "ns/iter",
            "extra": "iterations: 365144362\ncpu: 1.9192600870556438 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.72887396665273,
            "unit": "ns/iter",
            "extra": "iterations: 406289359\ncpu: 1.7287186691985177 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 1.9600240064695464,
            "unit": "ns/iter",
            "extra": "iterations: 372423627\ncpu: 1.9380107696550646 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.729811086743139,
            "unit": "ns/iter",
            "extra": "iterations: 405097281\ncpu: 1.727543068846226 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 54.385964188424914,
            "unit": "ns/iter",
            "extra": "iterations: 12940676\ncpu: 54.356897584021084 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 36.15190856917258,
            "unit": "ns/iter",
            "extra": "iterations: 19383924\ncpu: 36.15052349565559 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 154.00825395065823,
            "unit": "ns/iter",
            "extra": "iterations: 4546990\ncpu: 154.00451727406497 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cf5a497e4892b197e5ce2fb632c83c96a66fe75",
          "message": "Generalise `relativize()` as `reference_visit()` (#1504)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-29T15:48:51-04:00",
          "tree_id": "5d4eaa6065dbeed02b4f0e86756cad1f7382065e",
          "url": "https://github.com/sourcemeta/core/commit/8cf5a497e4892b197e5ce2fb632c83c96a66fe75"
        },
        "date": 1738180862743,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.1474114065616297,
            "unit": "ns/iter",
            "extra": "iterations: 260263684\ncpu: 2.146384741099722 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.097186850711712,
            "unit": "ns/iter",
            "extra": "iterations: 312652139\ncpu: 2.09712302655956 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.104534677862823,
            "unit": "ns/iter",
            "extra": "iterations: 339969209\ncpu: 2.1028580855979806 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.1477959861472034,
            "unit": "ns/iter",
            "extra": "iterations: 320454129\ncpu: 2.1468969744496547 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.106017485637286,
            "unit": "ns/iter",
            "extra": "iterations: 339263991\ncpu: 2.096541392157353 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.1471174639873305,
            "unit": "ns/iter",
            "extra": "iterations: 337852513\ncpu: 2.144625160742846 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.477149789943814,
            "unit": "ns/iter",
            "extra": "iterations: 321249753\ncpu: 2.4645279649444563 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.153035969708371,
            "unit": "ns/iter",
            "extra": "iterations: 322219818\ncpu: 2.152785028262911 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.1077532788910704,
            "unit": "ns/iter",
            "extra": "iterations: 330959878\ncpu: 2.0946043495942974 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.449274790967231,
            "unit": "ns/iter",
            "extra": "iterations: 292658046\ncpu: 2.447757749329068 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 7.358027784551672,
            "unit": "ns/iter",
            "extra": "iterations: 93930733\ncpu: 7.341409759891898 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 79.35266264829255,
            "unit": "ns/iter",
            "extra": "iterations: 8995464\ncpu: 79.3509929004218 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.125080256705062,
            "unit": "ns/iter",
            "extra": "iterations: 141037756\ncpu: 5.115757797507783 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.094043830778999,
            "unit": "ns/iter",
            "extra": "iterations: 329376115\ncpu: 2.0934153042639445 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 879.9034618945302,
            "unit": "ns/iter",
            "extra": "iterations: 730712\ncpu: 879.5311969695299 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 234.61476147545105,
            "unit": "ns/iter",
            "extra": "iterations: 2962449\ncpu: 234.60690800077882 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 25499.527461027996,
            "unit": "ns/iter",
            "extra": "iterations: 25090\ncpu: 25491.709844559682 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 26.62064859441013,
            "unit": "ns/iter",
            "extra": "iterations: 27862249\ncpu: 26.406482836327996 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 126.48953626974541,
            "unit": "ns/iter",
            "extra": "iterations: 4984335\ncpu: 126.28404792213954 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.776251818090912,
            "unit": "ns/iter",
            "extra": "iterations: 121548880\ncpu: 5.773430409231229 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.54141518039224,
            "unit": "ns/iter",
            "extra": "iterations: 128958567\ncpu: 5.540004178241227 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.801659643317213,
            "unit": "ns/iter",
            "extra": "iterations: 868745036\ncpu: 0.8014365218197346 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.7319907230811404,
            "unit": "ns/iter",
            "extra": "iterations: 188551681\ncpu: 3.731125579304708 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.0311515513602623,
            "unit": "ns/iter",
            "extra": "iterations: 345227233\ncpu: 2.0299962836361876 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.0411049611975653,
            "unit": "ns/iter",
            "extra": "iterations: 343686479\ncpu: 2.031511399667262 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.5527776129163937,
            "unit": "ns/iter",
            "extra": "iterations: 451936548\ncpu: 1.5521979868731592 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.0730944322752256,
            "unit": "ns/iter",
            "extra": "iterations: 337269753\ncpu: 2.0708557283522606 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.9022250347431315,
            "unit": "ns/iter",
            "extra": "iterations: 347537695\ncpu: 1.9020210167417988 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.04070451461554,
            "unit": "ns/iter",
            "extra": "iterations: 346668516\ncpu: 2.0407650748416857 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 2.369642906381747,
            "unit": "ns/iter",
            "extra": "iterations: 375711840\ncpu: 2.196608975644742 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 69.58990923492337,
            "unit": "ns/iter",
            "extra": "iterations: 9487280\ncpu: 66.37518867367665 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 38.753988591279374,
            "unit": "ns/iter",
            "extra": "iterations: 17155475\ncpu: 38.73043445314114 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 167.29791605641006,
            "unit": "ns/iter",
            "extra": "iterations: 3946374\ncpu: 167.25556168776737 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eeee8b439d1e84b8e180be7bb104a0e04cca90c3",
          "message": "Test `SchemaFlatFileResolver` re-identifying a schema with absolute refs (#1505)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-30T10:36:22-04:00",
          "tree_id": "4312d96058e14714b794be1a9c1b1827f15bec3e",
          "url": "https://github.com/sourcemeta/core/commit/eeee8b439d1e84b8e180be7bb104a0e04cca90c3"
        },
        "date": 1738248345798,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.9775467675749383,
            "unit": "ns/iter",
            "extra": "iterations: 346532938\ncpu: 1.976949158004715 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.9815095212805114,
            "unit": "ns/iter",
            "extra": "iterations: 355861031\ncpu: 1.9811582010506799 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.9007176336790017,
            "unit": "ns/iter",
            "extra": "iterations: 371183439\ncpu: 1.9004619438314976 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.0863586954698823,
            "unit": "ns/iter",
            "extra": "iterations: 335147920\ncpu: 2.0855537459400018 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.741259582632124,
            "unit": "ns/iter",
            "extra": "iterations: 339660727\ncpu: 2.3711719842135315 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.1043798957412183,
            "unit": "ns/iter",
            "extra": "iterations: 329230494\ncpu: 2.0996991852158158 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.091920562348601,
            "unit": "ns/iter",
            "extra": "iterations: 349991250\ncpu: 2.091006560878308 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.9713966899053583,
            "unit": "ns/iter",
            "extra": "iterations: 352744351\ncpu: 1.9709883320002517 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.160401478303646,
            "unit": "ns/iter",
            "extra": "iterations: 352508095\ncpu: 2.1554965993050432 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.416267927768212,
            "unit": "ns/iter",
            "extra": "iterations: 291286780\ncpu: 2.415042660020483 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.627031176475574,
            "unit": "ns/iter",
            "extra": "iterations: 105650809\ncpu: 6.61452578181393 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 76.62784787795925,
            "unit": "ns/iter",
            "extra": "iterations: 9063835\ncpu: 76.61800992626182 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.6852978945564585,
            "unit": "ns/iter",
            "extra": "iterations: 145450919\ncpu: 4.684473667711929 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 1.9607279775558117,
            "unit": "ns/iter",
            "extra": "iterations: 347708600\ncpu: 1.960656135626206 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 843.3256077166175,
            "unit": "ns/iter",
            "extra": "iterations: 829836\ncpu: 843.2401100940396 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 218.6498051968864,
            "unit": "ns/iter",
            "extra": "iterations: 3227353\ncpu: 218.56518329417327 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 23838.17808574992,
            "unit": "ns/iter",
            "extra": "iterations: 29415\ncpu: 23836.511983681776 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 24.394426363415388,
            "unit": "ns/iter",
            "extra": "iterations: 28698287\ncpu: 24.392570887593276 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 118.91069340343599,
            "unit": "ns/iter",
            "extra": "iterations: 5855144\ncpu: 118.88640142753077 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.722924343804009,
            "unit": "ns/iter",
            "extra": "iterations: 123404555\ncpu: 5.718273527261638 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.354344762190323,
            "unit": "ns/iter",
            "extra": "iterations: 125540272\ncpu: 5.340732414535487 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.8141188089566251,
            "unit": "ns/iter",
            "extra": "iterations: 875612929\ncpu: 0.8137419816467796 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.6705832530238665,
            "unit": "ns/iter",
            "extra": "iterations: 186340695\ncpu: 3.67023424485994 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.007866434191008,
            "unit": "ns/iter",
            "extra": "iterations: 345397577\ncpu: 2.0071709999285745 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 1.9580395168619087,
            "unit": "ns/iter",
            "extra": "iterations: 369865475\ncpu: 1.942384592668454 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.4362981128128565,
            "unit": "ns/iter",
            "extra": "iterations: 488598212\ncpu: 1.4360715671223105 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 1.9252299082431414,
            "unit": "ns/iter",
            "extra": "iterations: 362925595\ncpu: 1.9249455249911507 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.7241320811771217,
            "unit": "ns/iter",
            "extra": "iterations: 405195767\ncpu: 1.723848215818114 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 1.8814336928115438,
            "unit": "ns/iter",
            "extra": "iterations: 368454020\ncpu: 1.881382648505234 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.7236810369418731,
            "unit": "ns/iter",
            "extra": "iterations: 404671060\ncpu: 1.7236221438716304 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 54.08054521630487,
            "unit": "ns/iter",
            "extra": "iterations: 12384120\ncpu: 54.06730554936506 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 36.46296678134313,
            "unit": "ns/iter",
            "extra": "iterations: 19198490\ncpu: 36.44203268069526 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 165.14505028220867,
            "unit": "ns/iter",
            "extra": "iterations: 4472100\ncpu: 164.53836005456014 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9f78156a4a71a65126977e707afecae10a6e9d29",
          "message": "Rename `official_resolver` to `schema_official_resolver` (#1506)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-30T13:37:46-04:00",
          "tree_id": "2db1e24a49609cdb360ec940707e53ce61868293",
          "url": "https://github.com/sourcemeta/core/commit/9f78156a4a71a65126977e707afecae10a6e9d29"
        },
        "date": 1738259278087,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.026204661603368,
            "unit": "ns/iter",
            "extra": "iterations: 308455651\ncpu: 2.025866596945569 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.0557444814705064,
            "unit": "ns/iter",
            "extra": "iterations: 337612980\ncpu: 2.05566740946986 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.072147714081021,
            "unit": "ns/iter",
            "extra": "iterations: 325831452\ncpu: 2.069748011926117 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.3141456612298805,
            "unit": "ns/iter",
            "extra": "iterations: 320523094\ncpu: 2.279015190087988 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.0479396389069824,
            "unit": "ns/iter",
            "extra": "iterations: 338718965\ncpu: 2.042911887145141 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.0176757681333206,
            "unit": "ns/iter",
            "extra": "iterations: 345438485\ncpu: 2.015748187408822 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.004273546452147,
            "unit": "ns/iter",
            "extra": "iterations: 345771218\ncpu: 2.004001385679244 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.0364470298115527,
            "unit": "ns/iter",
            "extra": "iterations: 346193601\ncpu: 2.0356037718906332 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.084475610800603,
            "unit": "ns/iter",
            "extra": "iterations: 350431030\ncpu: 2.084415869222541 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.4282226925518855,
            "unit": "ns/iter",
            "extra": "iterations: 289284888\ncpu: 2.4243437147674296 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.444312136606807,
            "unit": "ns/iter",
            "extra": "iterations: 109204368\ncpu: 6.443460210309555 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 76.59141047831147,
            "unit": "ns/iter",
            "extra": "iterations: 9183821\ncpu: 76.56617000701542 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.640058517456055,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.346609999999998 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.183401508555047,
            "unit": "ns/iter",
            "extra": "iterations: 297688660\ncpu: 2.1740028659472617 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 893.5818635176652,
            "unit": "ns/iter",
            "extra": "iterations: 787995\ncpu: 892.5450034581424 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 212.59116498832967,
            "unit": "ns/iter",
            "extra": "iterations: 3289675\ncpu: 212.43040725907562 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 26159.877776402758,
            "unit": "ns/iter",
            "extra": "iterations: 27371\ncpu: 25978.773154068225 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 25.750001845006388,
            "unit": "ns/iter",
            "extra": "iterations: 27496160\ncpu: 25.735775468283432 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 119.81589903272769,
            "unit": "ns/iter",
            "extra": "iterations: 5719048\ncpu: 119.7942384816495 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.933745470328619,
            "unit": "ns/iter",
            "extra": "iterations: 121470838\ncpu: 5.930271099306991 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.7331870677664165,
            "unit": "ns/iter",
            "extra": "iterations: 133052023\ncpu: 5.693021292881803 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.8231414608203673,
            "unit": "ns/iter",
            "extra": "iterations: 889883298\ncpu: 0.8226314637495274 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.7552263237605072,
            "unit": "ns/iter",
            "extra": "iterations: 189209644\ncpu: 3.754835033673014 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.04934881617062,
            "unit": "ns/iter",
            "extra": "iterations: 343816461\ncpu: 2.0487413486581176 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.073956469169083,
            "unit": "ns/iter",
            "extra": "iterations: 342965772\ncpu: 2.073104834496426 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.5834478244216128,
            "unit": "ns/iter",
            "extra": "iterations: 436262106\ncpu: 1.5829726911922184 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.1584915382947343,
            "unit": "ns/iter",
            "extra": "iterations: 336169968\ncpu: 2.1542168216525517 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 2.0954668525045217,
            "unit": "ns/iter",
            "extra": "iterations: 367278623\ncpu: 2.087733812920554 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.0462044982975427,
            "unit": "ns/iter",
            "extra": "iterations: 345264695\ncpu: 2.045534948193883 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.8568784811239738,
            "unit": "ns/iter",
            "extra": "iterations: 372506865\ncpu: 1.8567443045646934 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 58.72231027510378,
            "unit": "ns/iter",
            "extra": "iterations: 12213847\ncpu: 58.71974653031098 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 40.52479275617672,
            "unit": "ns/iter",
            "extra": "iterations: 18063537\ncpu: 40.49328766564383 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 172.8734237906307,
            "unit": "ns/iter",
            "extra": "iterations: 4078303\ncpu: 172.8574360463158 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47ba2307b9bfab9fb378386207b3172c97ed1363",
          "message": "Improve handling of top-level `$ref` before 2019-09 (#1507)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-30T14:08:26-04:00",
          "tree_id": "c38061ac7f9a1c16f75dee6ebe9dfffe9b87dbb8",
          "url": "https://github.com/sourcemeta/core/commit/47ba2307b9bfab9fb378386207b3172c97ed1363"
        },
        "date": 1738261102543,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.9271846913407817,
            "unit": "ns/iter",
            "extra": "iterations: 364275975\ncpu: 1.9257432500180662 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.932944829576268,
            "unit": "ns/iter",
            "extra": "iterations: 367378857\ncpu: 1.9319021399209155 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.9922593411931628,
            "unit": "ns/iter",
            "extra": "iterations: 356500792\ncpu: 1.9861021795429843 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.1032413969862356,
            "unit": "ns/iter",
            "extra": "iterations: 354238463\ncpu: 2.0733858028285326 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.9982821355399112,
            "unit": "ns/iter",
            "extra": "iterations: 356977118\ncpu: 1.9899566783997622 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.963385308647583,
            "unit": "ns/iter",
            "extra": "iterations: 370174511\ncpu: 1.9602187034428218 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.9371458335804648,
            "unit": "ns/iter",
            "extra": "iterations: 370403687\ncpu: 1.935393801844095 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.9410444636362356,
            "unit": "ns/iter",
            "extra": "iterations: 371177534\ncpu: 1.9396028424500495 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.031300641134403,
            "unit": "ns/iter",
            "extra": "iterations: 351840124\ncpu: 2.029566701721605 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.37782196674005,
            "unit": "ns/iter",
            "extra": "iterations: 302032680\ncpu: 2.374309296596647 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.200766652141059,
            "unit": "ns/iter",
            "extra": "iterations: 108852847\ncpu: 6.18891483839645 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 73.94150878891523,
            "unit": "ns/iter",
            "extra": "iterations: 9548753\ncpu: 73.795290337911 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.783136695489747,
            "unit": "ns/iter",
            "extra": "iterations: 134418926\ncpu: 4.742434856234443 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.2649818452753383,
            "unit": "ns/iter",
            "extra": "iterations: 306956960\ncpu: 2.231638598453673 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 914.7182570873321,
            "unit": "ns/iter",
            "extra": "iterations: 760795\ncpu: 902.7609277137735 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 239.31616743914503,
            "unit": "ns/iter",
            "extra": "iterations: 3147878\ncpu: 235.40969503900698 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 26371.53997911759,
            "unit": "ns/iter",
            "extra": "iterations: 25976\ncpu: 25958.69263935948 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 26.616676440561005,
            "unit": "ns/iter",
            "extra": "iterations: 27922042\ncpu: 26.27408124377141 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 127.80049231410891,
            "unit": "ns/iter",
            "extra": "iterations: 6114178\ncpu: 125.91864352002881 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.968354344536137,
            "unit": "ns/iter",
            "extra": "iterations: 127602173\ncpu: 5.896529677437371 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.46282286623326,
            "unit": "ns/iter",
            "extra": "iterations: 129636832\ncpu: 5.391932132374216 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.7896949126056495,
            "unit": "ns/iter",
            "extra": "iterations: 865993666\ncpu: 0.786114294743586 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.5537224766055346,
            "unit": "ns/iter",
            "extra": "iterations: 191018319\ncpu: 3.5443616274311527 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 1.9130318472673788,
            "unit": "ns/iter",
            "extra": "iterations: 365863857\ncpu: 1.9120172343233044 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 1.9121514775409707,
            "unit": "ns/iter",
            "extra": "iterations: 360651852\ncpu: 1.9110563169934904 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.438809768523175,
            "unit": "ns/iter",
            "extra": "iterations: 486895554\ncpu: 1.4379120824750882 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 1.9274921165497474,
            "unit": "ns/iter",
            "extra": "iterations: 364177427\ncpu: 1.9264016602544658 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.765211050733194,
            "unit": "ns/iter",
            "extra": "iterations: 406164415\ncpu: 1.7642362884005909 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 1.8990655548879982,
            "unit": "ns/iter",
            "extra": "iterations: 365491351\ncpu: 1.898066802680654 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.7584700309818315,
            "unit": "ns/iter",
            "extra": "iterations: 398517515\ncpu: 1.7571573987155824 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 56.04023902420101,
            "unit": "ns/iter",
            "extra": "iterations: 12109051\ncpu: 55.929403551112244 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 36.4454317402181,
            "unit": "ns/iter",
            "extra": "iterations: 18215173\ncpu: 36.424523664968696 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 163.50325481434692,
            "unit": "ns/iter",
            "extra": "iterations: 4521818\ncpu: 163.29582482090078 ns\nthreads: 1"
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
          "id": "47ba2307b9bfab9fb378386207b3172c97ed1363",
          "message": "Improve handling of top-level `$ref` before 2019-09 (#1507)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-30T18:08:26Z",
          "url": "https://github.com/sourcemeta/core/commit/47ba2307b9bfab9fb378386207b3172c97ed1363"
        },
        "date": 1738264438615,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.072544721212451,
            "unit": "ns/iter",
            "extra": "iterations: 352204802\ncpu: 2.070917250015234 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.039304335866101,
            "unit": "ns/iter",
            "extra": "iterations: 306398029\ncpu: 2.0386880491323276 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.0545502128911037,
            "unit": "ns/iter",
            "extra": "iterations: 344459371\ncpu: 2.054146467102501 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.058277671101337,
            "unit": "ns/iter",
            "extra": "iterations: 349549082\ncpu: 2.057422081858021 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.0642637456320854,
            "unit": "ns/iter",
            "extra": "iterations: 342999383\ncpu: 2.063881263599824 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.04963699967362,
            "unit": "ns/iter",
            "extra": "iterations: 345697791\ncpu: 2.0490122252473393 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.043248065804204,
            "unit": "ns/iter",
            "extra": "iterations: 343127163\ncpu: 2.0428898542200202 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.0963689570369985,
            "unit": "ns/iter",
            "extra": "iterations: 342502618\ncpu: 2.0889124999330657 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.2605565477013596,
            "unit": "ns/iter",
            "extra": "iterations: 327747578\ncpu: 2.231793761722316 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.398005662652423,
            "unit": "ns/iter",
            "extra": "iterations: 289494254\ncpu: 2.3972600160830853 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.59262759438007,
            "unit": "ns/iter",
            "extra": "iterations: 105933807\ncpu: 6.5744734350951894 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 75.48042402018764,
            "unit": "ns/iter",
            "extra": "iterations: 9668375\ncpu: 75.39612396085161 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.726193830971828,
            "unit": "ns/iter",
            "extra": "iterations: 140453102\ncpu: 4.726161192224853 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.0316470149352357,
            "unit": "ns/iter",
            "extra": "iterations: 343142301\ncpu: 2.0304987113786352 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 900.3170268847095,
            "unit": "ns/iter",
            "extra": "iterations: 808314\ncpu: 899.9299777066825 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 210.46122487728266,
            "unit": "ns/iter",
            "extra": "iterations: 3258815\ncpu: 210.4409118038307 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 24950.04065405632,
            "unit": "ns/iter",
            "extra": "iterations: 28925\ncpu: 24944.235090751965 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 25.352924599247235,
            "unit": "ns/iter",
            "extra": "iterations: 27358926\ncpu: 25.35223787658902 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 127.9827734007141,
            "unit": "ns/iter",
            "extra": "iterations: 5505092\ncpu: 127.95317498781074 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.822334858705969,
            "unit": "ns/iter",
            "extra": "iterations: 119551851\ncpu: 5.8215744396964215 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 6.299689496068071,
            "unit": "ns/iter",
            "extra": "iterations: 127741888\ncpu: 6.292407389500925 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.8333151501326479,
            "unit": "ns/iter",
            "extra": "iterations: 868982298\ncpu: 0.8332954556917819 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.7848906155776896,
            "unit": "ns/iter",
            "extra": "iterations: 180701120\ncpu: 3.782007549261463 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.041943184051642,
            "unit": "ns/iter",
            "extra": "iterations: 295042444\ncpu: 2.0418689319154346 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.049580213554066,
            "unit": "ns/iter",
            "extra": "iterations: 357763467\ncpu: 2.049370792798138 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.5807596110427016,
            "unit": "ns/iter",
            "extra": "iterations: 452105844\ncpu: 1.5802140350125566 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.134471318696586,
            "unit": "ns/iter",
            "extra": "iterations: 336074743\ncpu: 2.1332814052021742 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.8855192660611166,
            "unit": "ns/iter",
            "extra": "iterations: 369672101\ncpu: 1.8851003311175032 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.061030186816725,
            "unit": "ns/iter",
            "extra": "iterations: 336087652\ncpu: 2.0607957355124724 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.8936602629114017,
            "unit": "ns/iter",
            "extra": "iterations: 370166681\ncpu: 1.8932768289861326 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 57.77991640278821,
            "unit": "ns/iter",
            "extra": "iterations: 12556730\ncpu: 57.77698493158653 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 40.16962446677111,
            "unit": "ns/iter",
            "extra": "iterations: 17686325\ncpu: 40.1638554080624 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 171.67113906528516,
            "unit": "ns/iter",
            "extra": "iterations: 4164584\ncpu: 171.6445147942758 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5f57199b7a20ef20f8ff936ada4559f2866aa355",
          "message": "Simplify JSON Schema headers (#1509)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-31T11:50:57-04:00",
          "tree_id": "998bf3060367023ff81bb0035a7777c4daef7c87",
          "url": "https://github.com/sourcemeta/core/commit/5f57199b7a20ef20f8ff936ada4559f2866aa355"
        },
        "date": 1738339314623,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.336577678256594,
            "unit": "ns/iter",
            "extra": "iterations: 299446025\ncpu: 2.2524760514019175 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.2148508477630098,
            "unit": "ns/iter",
            "extra": "iterations: 330933279\ncpu: 2.1808625659554775 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.3478048026405394,
            "unit": "ns/iter",
            "extra": "iterations: 328581420\ncpu: 2.2054594565937404 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.310258832705768,
            "unit": "ns/iter",
            "extra": "iterations: 312169713\ncpu: 2.2409060548420348 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.2801454853642387,
            "unit": "ns/iter",
            "extra": "iterations: 344478017\ncpu: 2.200114267378637 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.193465531194357,
            "unit": "ns/iter",
            "extra": "iterations: 324387949\ncpu: 2.1669547286419046 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.1993120395022743,
            "unit": "ns/iter",
            "extra": "iterations: 332636381\ncpu: 2.1252636223215746 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.180395803793685,
            "unit": "ns/iter",
            "extra": "iterations: 304952427\ncpu: 2.1009637677026882 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.417966383926427,
            "unit": "ns/iter",
            "extra": "iterations: 335644485\ncpu: 2.1944022110180077 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.561992840028341,
            "unit": "ns/iter",
            "extra": "iterations: 286891125\ncpu: 2.3696724672120832 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.465351936615954,
            "unit": "ns/iter",
            "extra": "iterations: 81165067\ncpu: 6.461585253173014 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 80.96170314428528,
            "unit": "ns/iter",
            "extra": "iterations: 8684217\ncpu: 80.8714245625135 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.0324296951293945,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.026080000000004 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.1507506321527723,
            "unit": "ns/iter",
            "extra": "iterations: 339662376\ncpu: 2.1491812210605272 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 913.4841858000825,
            "unit": "ns/iter",
            "extra": "iterations: 765387\ncpu: 912.9708239099965 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 234.026730949039,
            "unit": "ns/iter",
            "extra": "iterations: 3221205\ncpu: 233.94475048933552 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 28587.97223575331,
            "unit": "ns/iter",
            "extra": "iterations: 28151\ncpu: 28463.109658626723 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 26.76370651910224,
            "unit": "ns/iter",
            "extra": "iterations: 25431980\ncpu: 26.735079219156283 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 131.85888675474214,
            "unit": "ns/iter",
            "extra": "iterations: 5019540\ncpu: 131.7479290931036 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 6.339358825705547,
            "unit": "ns/iter",
            "extra": "iterations: 109666301\ncpu: 6.324641149335382 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 6.437921636937374,
            "unit": "ns/iter",
            "extra": "iterations: 99816053\ncpu: 5.757310399761045 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.8232951992859046,
            "unit": "ns/iter",
            "extra": "iterations: 804727197\ncpu: 0.8227632947765263 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.9130337233157646,
            "unit": "ns/iter",
            "extra": "iterations: 186764282\ncpu: 3.9053934306346654 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.04477361531796,
            "unit": "ns/iter",
            "extra": "iterations: 323867159\ncpu: 2.041472812623147 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.036342996028238,
            "unit": "ns/iter",
            "extra": "iterations: 360288025\ncpu: 2.033442549193798 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.5589707691874624,
            "unit": "ns/iter",
            "extra": "iterations: 446354559\ncpu: 1.5573986777628137 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.2127030958680307,
            "unit": "ns/iter",
            "extra": "iterations: 334092200\ncpu: 2.1956334209538624 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.943353902382196,
            "unit": "ns/iter",
            "extra": "iterations: 362871036\ncpu: 1.930096178852915 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.2038259523777324,
            "unit": "ns/iter",
            "extra": "iterations: 329532723\ncpu: 2.1550909831798326 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.901493783080745,
            "unit": "ns/iter",
            "extra": "iterations: 362142643\ncpu: 1.899099742307894 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 61.028887877341866,
            "unit": "ns/iter",
            "extra": "iterations: 10289881\ncpu: 60.89895500249239 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 39.69378267812432,
            "unit": "ns/iter",
            "extra": "iterations: 18834360\ncpu: 39.41238247543321 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 213.18649942190672,
            "unit": "ns/iter",
            "extra": "iterations: 3583477\ncpu: 190.8484413322588 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c3d468af9858f484526f432a63803d45cb29ea53",
          "message": "Allow `SchemaFlatFileResolver` to take a custom reference visitor (#1510)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-31T12:05:11-04:00",
          "tree_id": "8622372ac82736d613498d2d6f21cffaf01aef1b",
          "url": "https://github.com/sourcemeta/core/commit/c3d468af9858f484526f432a63803d45cb29ea53"
        },
        "date": 1738340101325,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.9545728162004088,
            "unit": "ns/iter",
            "extra": "iterations: 364647906\ncpu: 1.9543893939157846 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.915285261861305,
            "unit": "ns/iter",
            "extra": "iterations: 359895322\ncpu: 1.9142816199205828 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.8924581399868308,
            "unit": "ns/iter",
            "extra": "iterations: 359734413\ncpu: 1.8919846848235797 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.8938610132383853,
            "unit": "ns/iter",
            "extra": "iterations: 351974577\ncpu: 1.8936680190967308 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.9047222925579328,
            "unit": "ns/iter",
            "extra": "iterations: 372562378\ncpu: 1.904129460973109 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.9072466962002732,
            "unit": "ns/iter",
            "extra": "iterations: 361723457\ncpu: 1.9068240852292861 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.9187974588903032,
            "unit": "ns/iter",
            "extra": "iterations: 371800524\ncpu: 1.9184722827340621 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.9094251696692368,
            "unit": "ns/iter",
            "extra": "iterations: 364141433\ncpu: 1.9087858096060142 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.9339835786119668,
            "unit": "ns/iter",
            "extra": "iterations: 367952397\ncpu: 1.933546311426798 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.2925803865407643,
            "unit": "ns/iter",
            "extra": "iterations: 313687531\ncpu: 2.289545898462887 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.124952991585372,
            "unit": "ns/iter",
            "extra": "iterations: 116470608\ncpu: 6.124386334447579 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 68.96130249492153,
            "unit": "ns/iter",
            "extra": "iterations: 9430912\ncpu: 68.96035081230762 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.448266748599201,
            "unit": "ns/iter",
            "extra": "iterations: 156810738\ncpu: 4.448100996756991 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 1.9438410896439537,
            "unit": "ns/iter",
            "extra": "iterations: 370794135\ncpu: 1.9428516581040296 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 823.2536066280511,
            "unit": "ns/iter",
            "extra": "iterations: 863068\ncpu: 823.216710618399 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 212.8317046652063,
            "unit": "ns/iter",
            "extra": "iterations: 3299272\ncpu: 212.7845173116982 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 23447.984281860627,
            "unit": "ns/iter",
            "extra": "iterations: 28755\ncpu: 23446.60059120156 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 23.534191331448497,
            "unit": "ns/iter",
            "extra": "iterations: 28549871\ncpu: 23.531980232064726 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 115.05873759341422,
            "unit": "ns/iter",
            "extra": "iterations: 6176489\ncpu: 115.0376856495658 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.733769571908107,
            "unit": "ns/iter",
            "extra": "iterations: 130616510\ncpu: 5.731985948790102 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.430445681478728,
            "unit": "ns/iter",
            "extra": "iterations: 129017989\ncpu: 5.429901717038865 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.795870890036801,
            "unit": "ns/iter",
            "extra": "iterations: 864250880\ncpu: 0.7952251087091732 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.503881812917075,
            "unit": "ns/iter",
            "extra": "iterations: 200522504\ncpu: 3.503437200245621 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 1.9161700820516099,
            "unit": "ns/iter",
            "extra": "iterations: 360384479\ncpu: 1.9160259118706362 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 1.9247383176291506,
            "unit": "ns/iter",
            "extra": "iterations: 369527691\ncpu: 1.9244647081130477 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.4543259732370692,
            "unit": "ns/iter",
            "extra": "iterations: 489219695\ncpu: 1.4537987887016637 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 1.934437870977794,
            "unit": "ns/iter",
            "extra": "iterations: 357763467\ncpu: 1.9343870010070126 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.7581643373149969,
            "unit": "ns/iter",
            "extra": "iterations: 404825520\ncpu: 1.7576535194717935 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 1.9229177365797465,
            "unit": "ns/iter",
            "extra": "iterations: 370715587\ncpu: 1.9226814976085709 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.752470284966356,
            "unit": "ns/iter",
            "extra": "iterations: 404530744\ncpu: 1.7524650734580551 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 56.08684450985707,
            "unit": "ns/iter",
            "extra": "iterations: 12411127\ncpu: 56.08427018755008 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 38.1229252166395,
            "unit": "ns/iter",
            "extra": "iterations: 19126676\ncpu: 38.06923900420569 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 162.23391221895838,
            "unit": "ns/iter",
            "extra": "iterations: 4138437\ncpu: 162.05079357254908 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "020411329021dc3ac4799bbeb6043e4042ab0b95",
          "message": "Implement a new `URI::rebase` method (#1512)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-31T12:56:25-04:00",
          "tree_id": "9fca2ddae5498dd153d14eb2c6a2ab8f611dfb2b",
          "url": "https://github.com/sourcemeta/core/commit/020411329021dc3ac4799bbeb6043e4042ab0b95"
        },
        "date": 1738343101206,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.8842584735646382,
            "unit": "ns/iter",
            "extra": "iterations: 372387964\ncpu: 1.8825071370996298 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.8922256638546033,
            "unit": "ns/iter",
            "extra": "iterations: 372564360\ncpu: 1.891206126103957 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.8851627068668948,
            "unit": "ns/iter",
            "extra": "iterations: 372290919\ncpu: 1.8842119541465363 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.8816965590905295,
            "unit": "ns/iter",
            "extra": "iterations: 372955405\ncpu: 1.8807315582408575 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.5730677628124818,
            "unit": "ns/iter",
            "extra": "iterations: 446944496\ncpu: 1.5718976434156615 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.6243788883841455,
            "unit": "ns/iter",
            "extra": "iterations: 439742688\ncpu: 1.6164134604098293 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.606879258388706,
            "unit": "ns/iter",
            "extra": "iterations: 416406413\ncpu: 1.6009047391880589 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.606154747923962,
            "unit": "ns/iter",
            "extra": "iterations: 447261482\ncpu: 1.598405024289574 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.0461007890820166,
            "unit": "ns/iter",
            "extra": "iterations: 372296859\ncpu: 1.990720528748813 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.9261118606023913,
            "unit": "ns/iter",
            "extra": "iterations: 357306927\ncpu: 1.9223752692597535 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.069722129086121,
            "unit": "ns/iter",
            "extra": "iterations: 117357118\ncpu: 6.063586189974438 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 72.73320001669275,
            "unit": "ns/iter",
            "extra": "iterations: 9794593\ncpu: 72.45844722695479 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.602272198797153,
            "unit": "ns/iter",
            "extra": "iterations: 142339492\ncpu: 4.565352811572475 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 1.8881345795359983,
            "unit": "ns/iter",
            "extra": "iterations: 372376079\ncpu: 1.8866276316315134 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 814.743395535848,
            "unit": "ns/iter",
            "extra": "iterations: 864486\ncpu: 814.1774418556222 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 209.88632779878563,
            "unit": "ns/iter",
            "extra": "iterations: 3329132\ncpu: 209.77059485775877 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 23102.044675125777,
            "unit": "ns/iter",
            "extra": "iterations: 30417\ncpu: 23088.831903211933 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 23.77156908596748,
            "unit": "ns/iter",
            "extra": "iterations: 29444797\ncpu: 23.750579771359973 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 126.59933694956324,
            "unit": "ns/iter",
            "extra": "iterations: 5668567\ncpu: 126.31693336252337 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.365191582379881,
            "unit": "ns/iter",
            "extra": "iterations: 130188960\ncpu: 5.362351769305157 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.054135717233418,
            "unit": "ns/iter",
            "extra": "iterations: 138558987\ncpu: 5.051292703229693 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.7446774539073732,
            "unit": "ns/iter",
            "extra": "iterations: 941176471\ncpu: 0.7442876246743712 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.449735846810854,
            "unit": "ns/iter",
            "extra": "iterations: 203352410\ncpu: 3.4478666862123797 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 1.8929260373024552,
            "unit": "ns/iter",
            "extra": "iterations: 370955263\ncpu: 1.8914868448705655 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 1.8917086117150954,
            "unit": "ns/iter",
            "extra": "iterations: 369621349\ncpu: 1.890404874854785 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.4380577250658628,
            "unit": "ns/iter",
            "extra": "iterations: 489188925\ncpu: 1.4371482347029796 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 1.9659817285898,
            "unit": "ns/iter",
            "extra": "iterations: 364961601\ncpu: 1.9501065264123614 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.7256799494108641,
            "unit": "ns/iter",
            "extra": "iterations: 402903205\ncpu: 1.7248038520815487 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 1.8859921347997552,
            "unit": "ns/iter",
            "extra": "iterations: 371396131\ncpu: 1.8847584602328509 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.727206263379654,
            "unit": "ns/iter",
            "extra": "iterations: 406315301\ncpu: 1.7249288871845863 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 58.0782072746402,
            "unit": "ns/iter",
            "extra": "iterations: 12628541\ncpu: 57.62771803963715 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 33.89767211560459,
            "unit": "ns/iter",
            "extra": "iterations: 20709630\ncpu: 33.8484560081471 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 155.50820584147908,
            "unit": "ns/iter",
            "extra": "iterations: 4555008\ncpu: 155.39775122239055 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "978ddb3e9245caccb32a471359e93472c4fa282a",
          "message": "Make sure identifiers are canonicalised during framing (#1513)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-31T14:41:44-04:00",
          "tree_id": "92b0cc91543e0d8db0a09229ef8ba199eb705185",
          "url": "https://github.com/sourcemeta/core/commit/978ddb3e9245caccb32a471359e93472c4fa282a"
        },
        "date": 1738349524559,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.995880349706053,
            "unit": "ns/iter",
            "extra": "iterations: 350798066\ncpu: 1.993545768293944 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.0270626366085294,
            "unit": "ns/iter",
            "extra": "iterations: 353546067\ncpu: 2.025792582215318 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.9994867644108911,
            "unit": "ns/iter",
            "extra": "iterations: 352927534\ncpu: 1.9978407238693943 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.044926464477498,
            "unit": "ns/iter",
            "extra": "iterations: 351652768\ncpu: 2.041954636341723 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.6533648921813568,
            "unit": "ns/iter",
            "extra": "iterations: 413765383\ncpu: 1.6524098633935271 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.6873026960329565,
            "unit": "ns/iter",
            "extra": "iterations: 412067697\ncpu: 1.6814955529018336 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.7998531355120542,
            "unit": "ns/iter",
            "extra": "iterations: 403821303\ncpu: 1.7664521279601737 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.7840048803839266,
            "unit": "ns/iter",
            "extra": "iterations: 409807273\ncpu: 1.7730554040215898 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.0632203438334784,
            "unit": "ns/iter",
            "extra": "iterations: 350345090\ncpu: 2.0536465917076234 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.117951054810228,
            "unit": "ns/iter",
            "extra": "iterations: 347686149\ncpu: 2.05148235571501 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.33406157843322,
            "unit": "ns/iter",
            "extra": "iterations: 107617803\ncpu: 6.328971424923054 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 73.14363790582632,
            "unit": "ns/iter",
            "extra": "iterations: 9821115\ncpu: 73.07612221219281 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.708063939850136,
            "unit": "ns/iter",
            "extra": "iterations: 150591394\ncpu: 4.704007189149199 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.007850345715929,
            "unit": "ns/iter",
            "extra": "iterations: 345057058\ncpu: 2.0067521702454205 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 875.4433353298203,
            "unit": "ns/iter",
            "extra": "iterations: 808501\ncpu: 874.4973722976223 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 224.15152477951446,
            "unit": "ns/iter",
            "extra": "iterations: 3147892\ncpu: 223.90539446715434 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 24363.416661619787,
            "unit": "ns/iter",
            "extra": "iterations: 28799\ncpu: 24339.3867842633 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 25.128167292273638,
            "unit": "ns/iter",
            "extra": "iterations: 28051503\ncpu: 25.1067830483094 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 120.86850881145061,
            "unit": "ns/iter",
            "extra": "iterations: 5856074\ncpu: 120.78518816531339 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.6450245929643925,
            "unit": "ns/iter",
            "extra": "iterations: 123094237\ncpu: 5.64151512633367 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.312140400080479,
            "unit": "ns/iter",
            "extra": "iterations: 130755580\ncpu: 5.30875240658945 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.7805375556929338,
            "unit": "ns/iter",
            "extra": "iterations: 877039116\ncpu: 0.7797919015507158 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.579529169875104,
            "unit": "ns/iter",
            "extra": "iterations: 194015992\ncpu: 3.5775659152880754 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.0072277631339923,
            "unit": "ns/iter",
            "extra": "iterations: 354147062\ncpu: 2.005776910835991 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.0594123920179745,
            "unit": "ns/iter",
            "extra": "iterations: 346438611\ncpu: 2.0499014181765087 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.65924336853178,
            "unit": "ns/iter",
            "extra": "iterations: 448758222\ncpu: 1.6067672181836967 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.123461882542391,
            "unit": "ns/iter",
            "extra": "iterations: 330096813\ncpu: 2.109723488908691 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.9536272378970059,
            "unit": "ns/iter",
            "extra": "iterations: 372122694\ncpu: 1.9240562630130704 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.184182714114444,
            "unit": "ns/iter",
            "extra": "iterations: 331105467\ncpu: 2.132420241795646 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.93937242527227,
            "unit": "ns/iter",
            "extra": "iterations: 364251333\ncpu: 1.9129374057774455 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 57.155762995326945,
            "unit": "ns/iter",
            "extra": "iterations: 11849143\ncpu: 56.71878548516129 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 39.35795230884551,
            "unit": "ns/iter",
            "extra": "iterations: 17384696\ncpu: 39.25607902490794 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 170.4384056874183,
            "unit": "ns/iter",
            "extra": "iterations: 4133476\ncpu: 169.11456604562397 ns\nthreads: 1"
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
          "id": "978ddb3e9245caccb32a471359e93472c4fa282a",
          "message": "Make sure identifiers are canonicalised during framing (#1513)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-31T18:41:44Z",
          "url": "https://github.com/sourcemeta/core/commit/978ddb3e9245caccb32a471359e93472c4fa282a"
        },
        "date": 1738350765318,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.8991378444735323,
            "unit": "ns/iter",
            "extra": "iterations: 366507498\ncpu: 1.8991344073402827 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.941273527843766,
            "unit": "ns/iter",
            "extra": "iterations: 367153407\ncpu: 1.941240327370841 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.9333407601198604,
            "unit": "ns/iter",
            "extra": "iterations: 359910125\ncpu: 1.9332604216122018 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.921001566606609,
            "unit": "ns/iter",
            "extra": "iterations: 368333816\ncpu: 1.9206409220922556 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.6336486862672521,
            "unit": "ns/iter",
            "extra": "iterations: 440867123\ncpu: 1.6322083513585106 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.6320353559497611,
            "unit": "ns/iter",
            "extra": "iterations: 364275975\ncpu: 1.6311341970877966 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.6217319629100457,
            "unit": "ns/iter",
            "extra": "iterations: 433597621\ncpu: 1.6215010552375717 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.6061857008046234,
            "unit": "ns/iter",
            "extra": "iterations: 435158304\ncpu: 1.605654755010723 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.9389018577790047,
            "unit": "ns/iter",
            "extra": "iterations: 363283460\ncpu: 1.9388110870778474 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.984238242962283,
            "unit": "ns/iter",
            "extra": "iterations: 341331877\ncpu: 1.984080730906946 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.7846548600982555,
            "unit": "ns/iter",
            "extra": "iterations: 108056375\ncpu: 6.759934339829555 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 73.97517434859351,
            "unit": "ns/iter",
            "extra": "iterations: 9256198\ncpu: 73.83549919740268 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.502966459397362,
            "unit": "ns/iter",
            "extra": "iterations: 154301598\ncpu: 4.501832832606178 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 1.9767029165217584,
            "unit": "ns/iter",
            "extra": "iterations: 368787900\ncpu: 1.9766890399603694 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 853.5314933833743,
            "unit": "ns/iter",
            "extra": "iterations: 816488\ncpu: 853.5263224934113 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 216.5215688123586,
            "unit": "ns/iter",
            "extra": "iterations: 3354659\ncpu: 216.43093977659163 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 24129.827412014773,
            "unit": "ns/iter",
            "extra": "iterations: 29317\ncpu: 24121.635910904944 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 23.795921743392352,
            "unit": "ns/iter",
            "extra": "iterations: 28879913\ncpu: 23.795570298290055 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 116.03399184367615,
            "unit": "ns/iter",
            "extra": "iterations: 5643796\ncpu: 116.03023922196995 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.520310992525142,
            "unit": "ns/iter",
            "extra": "iterations: 128372059\ncpu: 5.518171208892121 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.238260292323986,
            "unit": "ns/iter",
            "extra": "iterations: 133955909\ncpu: 5.237424800723053 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.7662120295462261,
            "unit": "ns/iter",
            "extra": "iterations: 875656743\ncpu: 0.7658571756124771 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.5249954664751333,
            "unit": "ns/iter",
            "extra": "iterations: 194662358\ncpu: 3.5243074575311657 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 1.9506815627386733,
            "unit": "ns/iter",
            "extra": "iterations: 369317133\ncpu: 1.9495331672034883 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 1.9730987769442148,
            "unit": "ns/iter",
            "extra": "iterations: 349205557\ncpu: 1.9728122482312045 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.480826874723159,
            "unit": "ns/iter",
            "extra": "iterations: 483285235\ncpu: 1.4807508034049484 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 1.9452556834853147,
            "unit": "ns/iter",
            "extra": "iterations: 356163408\ncpu: 1.9451998280519511 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.7682552047246713,
            "unit": "ns/iter",
            "extra": "iterations: 406600875\ncpu: 1.7675613708406241 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 1.9449060392775126,
            "unit": "ns/iter",
            "extra": "iterations: 372473169\ncpu: 1.9444863691644851 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.7814070242950817,
            "unit": "ns/iter",
            "extra": "iterations: 405935943\ncpu: 1.781209603309252 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 53.811951847493084,
            "unit": "ns/iter",
            "extra": "iterations: 13227263\ncpu: 53.80523544440021 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 37.701438459022036,
            "unit": "ns/iter",
            "extra": "iterations: 18562322\ncpu: 37.6993244702899 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 163.11363976803142,
            "unit": "ns/iter",
            "extra": "iterations: 4371148\ncpu: 161.62710573972734 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80bb2d68372e74c076af3e1433f301aeacc96cd4",
          "message": "Test `reference_visitor_relativize` with camel case paths (#1514)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-02-03T10:41:27-04:00",
          "tree_id": "fca329708238fed059b8e75859401ff7b27d290e",
          "url": "https://github.com/sourcemeta/core/commit/80bb2d68372e74c076af3e1433f301aeacc96cd4"
        },
        "date": 1738594343344,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.2010060498172406,
            "unit": "ns/iter",
            "extra": "iterations: 287740212\ncpu: 2.1973154033819915 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.4250111894369186,
            "unit": "ns/iter",
            "extra": "iterations: 290029210\ncpu: 2.4212354334930595 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.3243604890504623,
            "unit": "ns/iter",
            "extra": "iterations: 303760116\ncpu: 2.315073516761495 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.468242560641808,
            "unit": "ns/iter",
            "extra": "iterations: 319815786\ncpu: 2.4567642824235083 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.366629599968099,
            "unit": "ns/iter",
            "extra": "iterations: 300879859\ncpu: 2.360580074587178 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.8903934330665135,
            "unit": "ns/iter",
            "extra": "iterations: 319545697\ncpu: 1.8868881842586702 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.8650976739987952,
            "unit": "ns/iter",
            "extra": "iterations: 338118515\ncpu: 1.858685555861973 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.0429749490760267,
            "unit": "ns/iter",
            "extra": "iterations: 347179169\ncpu: 1.9756744103503545 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.612691468564417,
            "unit": "ns/iter",
            "extra": "iterations: 257390793\ncpu: 2.558440386793478 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.3836948489571266,
            "unit": "ns/iter",
            "extra": "iterations: 288141733\ncpu: 2.2888874621990256 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.817705991557972,
            "unit": "ns/iter",
            "extra": "iterations: 97600424\ncpu: 6.776784084462603 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 91.57611186259292,
            "unit": "ns/iter",
            "extra": "iterations: 8634087\ncpu: 88.56141940659158 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.370240211486816,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.356909999999999 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.538252707199824,
            "unit": "ns/iter",
            "extra": "iterations: 297722846\ncpu: 2.3230934719735927 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 953.488883990558,
            "unit": "ns/iter",
            "extra": "iterations: 622300\ncpu: 949.8184155551992 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 240.79339881101706,
            "unit": "ns/iter",
            "extra": "iterations: 2989243\ncpu: 240.06412325796214 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 27986.2974983786,
            "unit": "ns/iter",
            "extra": "iterations: 27287\ncpu: 27957.45226664716 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 28.90270074515234,
            "unit": "ns/iter",
            "extra": "iterations: 25034243\ncpu: 28.804545837475633 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 128.00382232125304,
            "unit": "ns/iter",
            "extra": "iterations: 4769140\ncpu: 123.8904708186383 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 6.0595273298119325,
            "unit": "ns/iter",
            "extra": "iterations: 120616869\ncpu: 5.871807201362543 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.892950433613677,
            "unit": "ns/iter",
            "extra": "iterations: 129644035\ncpu: 5.706533277832613 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.8680065376992768,
            "unit": "ns/iter",
            "extra": "iterations: 845328954\ncpu: 0.8331159090996922 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.8994778235184127,
            "unit": "ns/iter",
            "extra": "iterations: 177833330\ncpu: 3.888016942605732 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.1037813048986296,
            "unit": "ns/iter",
            "extra": "iterations: 337143050\ncpu: 2.0838276215392746 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.361130810739676,
            "unit": "ns/iter",
            "extra": "iterations: 337917751\ncpu: 2.354922159741768 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 2.302851671610867,
            "unit": "ns/iter",
            "extra": "iterations: 354906584\ncpu: 1.9854830306557658 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.7097727184018794,
            "unit": "ns/iter",
            "extra": "iterations: 254362314\ncpu: 2.7064032763910206 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 2.3885489417657317,
            "unit": "ns/iter",
            "extra": "iterations: 298418383\ncpu: 2.3842633045833574 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.6596474335284555,
            "unit": "ns/iter",
            "extra": "iterations: 277409000\ncpu: 2.6465291320757434 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 2.513151357578281,
            "unit": "ns/iter",
            "extra": "iterations: 306414123\ncpu: 2.5055209351430605 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 75.84285280968774,
            "unit": "ns/iter",
            "extra": "iterations: 7067138\ncpu: 75.71226145576894 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 50.108360331730886,
            "unit": "ns/iter",
            "extra": "iterations: 13218271\ncpu: 49.869381555273215 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 268.4116802061656,
            "unit": "ns/iter",
            "extra": "iterations: 3088040\ncpu: 229.8937189932777 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b4680bdfd316d35e65ed31071c5a564195d3e71",
          "message": "Implement the idea of JSON Pointer templates (#1515)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-02-03T12:36:47-04:00",
          "tree_id": "10da809ffc3af9758f09a2d7125e8314a773e80e",
          "url": "https://github.com/sourcemeta/core/commit/3b4680bdfd316d35e65ed31071c5a564195d3e71"
        },
        "date": 1738601288704,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.2072042040912034,
            "unit": "ns/iter",
            "extra": "iterations: 332997165\ncpu: 2.194105766636182 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.10210657912692,
            "unit": "ns/iter",
            "extra": "iterations: 294893291\ncpu: 2.099725625836635 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.1280351522421315,
            "unit": "ns/iter",
            "extra": "iterations: 301638327\ncpu: 2.064893431132178 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.6008500479346472,
            "unit": "ns/iter",
            "extra": "iterations: 338009126\ncpu: 2.3704951682280893 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.056637222060187,
            "unit": "ns/iter",
            "extra": "iterations: 305524761\ncpu: 2.0155747703866123 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.1576308209795916,
            "unit": "ns/iter",
            "extra": "iterations: 354387315\ncpu: 2.0786438137606598 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.012143806201974,
            "unit": "ns/iter",
            "extra": "iterations: 344881952\ncpu: 2.004709135953858 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.1183664768494435,
            "unit": "ns/iter",
            "extra": "iterations: 358626767\ncpu: 2.0007458060150864 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.2139344988036886,
            "unit": "ns/iter",
            "extra": "iterations: 260657154\ncpu: 2.197913969397521 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.1693204778662714,
            "unit": "ns/iter",
            "extra": "iterations: 324816942\ncpu: 2.1532990111088512 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.5010713575573655,
            "unit": "ns/iter",
            "extra": "iterations: 109170306\ncpu: 6.496620060770013 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 78.91474369898499,
            "unit": "ns/iter",
            "extra": "iterations: 9506994\ncpu: 78.87940183826781 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.0148606300354,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.01297000000001 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.138062011418763,
            "unit": "ns/iter",
            "extra": "iterations: 320182962\ncpu: 2.137118714018264 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 912.1364479499188,
            "unit": "ns/iter",
            "extra": "iterations: 697413\ncpu: 911.6033110940002 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 242.372927214381,
            "unit": "ns/iter",
            "extra": "iterations: 2725655\ncpu: 242.01412137633025 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 27159.12948897951,
            "unit": "ns/iter",
            "extra": "iterations: 26507\ncpu: 27125.5140151658 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 27.763150471612747,
            "unit": "ns/iter",
            "extra": "iterations: 25381999\ncpu: 27.752187682301887 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 128.04372615359142,
            "unit": "ns/iter",
            "extra": "iterations: 5664118\ncpu: 127.82766884446971 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 6.561796641591287,
            "unit": "ns/iter",
            "extra": "iterations: 116493867\ncpu: 6.536404186840131 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.641783764845749,
            "unit": "ns/iter",
            "extra": "iterations: 125006697\ncpu: 5.583532856643702 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.8339430313921318,
            "unit": "ns/iter",
            "extra": "iterations: 856216745\ncpu: 0.8324352497918015 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.8983030173861266,
            "unit": "ns/iter",
            "extra": "iterations: 184558760\ncpu: 3.887201019339321 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.017576218271381,
            "unit": "ns/iter",
            "extra": "iterations: 368552956\ncpu: 2.013743175621142 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.0504803301417605,
            "unit": "ns/iter",
            "extra": "iterations: 340159195\ncpu: 2.0486466638069274 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.5685972699030257,
            "unit": "ns/iter",
            "extra": "iterations: 453917633\ncpu: 1.5661563867909958 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.118973478771345,
            "unit": "ns/iter",
            "extra": "iterations: 324999420\ncpu: 2.11774531782242 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.9139627290503287,
            "unit": "ns/iter",
            "extra": "iterations: 378061624\ncpu: 1.91172008508327 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 1.9981360081451354,
            "unit": "ns/iter",
            "extra": "iterations: 322210919\ncpu: 1.9954662057867742 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 2.015200272692123,
            "unit": "ns/iter",
            "extra": "iterations: 372451368\ncpu: 1.9283161822082597 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 61.23717215892599,
            "unit": "ns/iter",
            "extra": "iterations: 10113269\ncpu: 60.827117324774065 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 47.71960539593699,
            "unit": "ns/iter",
            "extra": "iterations: 17233569\ncpu: 41.87490124651492 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 183.95080322156468,
            "unit": "ns/iter",
            "extra": "iterations: 3835785\ncpu: 183.6917345471651 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d39fd28e8a45fabb91839b7e43c52312b938259d",
          "message": "Make `PointerTemplate` distinguish between property/item/key wildcards (#1517)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-02-03T14:39:31-04:00",
          "tree_id": "4dd9548c71e43ed84723214d154924952cb87c65",
          "url": "https://github.com/sourcemeta/core/commit/d39fd28e8a45fabb91839b7e43c52312b938259d"
        },
        "date": 1738608676739,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.205677564025736,
            "unit": "ns/iter",
            "extra": "iterations: 287283204\ncpu: 2.2007830294178983 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.140831658830007,
            "unit": "ns/iter",
            "extra": "iterations: 311522321\ncpu: 2.131413883501465 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.148690553128455,
            "unit": "ns/iter",
            "extra": "iterations: 305974814\ncpu: 2.1439477041401185 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.0745778982025853,
            "unit": "ns/iter",
            "extra": "iterations: 323336089\ncpu: 2.071182347974772 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.8485354617869736,
            "unit": "ns/iter",
            "extra": "iterations: 423846834\ncpu: 1.839645686724654 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.8910636826242864,
            "unit": "ns/iter",
            "extra": "iterations: 391753039\ncpu: 1.8583340204796726 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.8699266872690201,
            "unit": "ns/iter",
            "extra": "iterations: 418020256\ncpu: 1.8572879874988624 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.8954998504634595,
            "unit": "ns/iter",
            "extra": "iterations: 349203815\ncpu: 1.8168014573380322 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.2757626863923006,
            "unit": "ns/iter",
            "extra": "iterations: 328273236\ncpu: 2.2629258755654336 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.259719178018998,
            "unit": "ns/iter",
            "extra": "iterations: 329619619\ncpu: 2.233319734527093 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 7.0708546962378716,
            "unit": "ns/iter",
            "extra": "iterations: 105198299\ncpu: 7.028345581899562 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 79.68338289262412,
            "unit": "ns/iter",
            "extra": "iterations: 9074763\ncpu: 79.57232602107636 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.143110752105713,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.1310500000000125 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.1878691142743363,
            "unit": "ns/iter",
            "extra": "iterations: 333277787\ncpu: 2.184601039732658 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 980.5599428884849,
            "unit": "ns/iter",
            "extra": "iterations: 754107\ncpu: 947.2979298693683 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 252.10473603572143,
            "unit": "ns/iter",
            "extra": "iterations: 3000789\ncpu: 250.43213634814015 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 29363.524361420048,
            "unit": "ns/iter",
            "extra": "iterations: 22639\ncpu: 28638.897477803854 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 31.35690443886298,
            "unit": "ns/iter",
            "extra": "iterations: 23473942\ncpu: 31.112073123465947 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 152.94548640697658,
            "unit": "ns/iter",
            "extra": "iterations: 4840941\ncpu: 152.29187878968145 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 6.696459334959636,
            "unit": "ns/iter",
            "extra": "iterations: 89265220\ncpu: 6.664790609377258 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 6.787974910264689,
            "unit": "ns/iter",
            "extra": "iterations: 109274263\ncpu: 6.759304338662091 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 1.113225699802795,
            "unit": "ns/iter",
            "extra": "iterations: 729965066\ncpu: 1.102291106078767 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 4.74320420835815,
            "unit": "ns/iter",
            "extra": "iterations: 136221223\ncpu: 4.683785580166154 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.451447593203276,
            "unit": "ns/iter",
            "extra": "iterations: 308512748\ncpu: 2.4051745181045168 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.4083650871884226,
            "unit": "ns/iter",
            "extra": "iterations: 255704960\ncpu: 2.400508773861872 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.7833159556940184,
            "unit": "ns/iter",
            "extra": "iterations: 381868866\ncpu: 1.7358210082515642 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.3716708711214207,
            "unit": "ns/iter",
            "extra": "iterations: 286965220\ncpu: 2.320671473706804 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 2.40188376287537,
            "unit": "ns/iter",
            "extra": "iterations: 333147722\ncpu: 2.388192826964612 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.7598190955907334,
            "unit": "ns/iter",
            "extra": "iterations: 292737598\ncpu: 2.74133218787974 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 2.2958602522465203,
            "unit": "ns/iter",
            "extra": "iterations: 350632892\ncpu: 2.2917273830659317 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 71.71610904572447,
            "unit": "ns/iter",
            "extra": "iterations: 9435997\ncpu: 71.08883141866205 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 49.42111329205975,
            "unit": "ns/iter",
            "extra": "iterations: 11737089\ncpu: 49.13841924518106 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 197.06951337287603,
            "unit": "ns/iter",
            "extra": "iterations: 3956725\ncpu: 196.25700547801503 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "295e405e50cb6224edfe067c8f1b5420483073b1",
          "message": "Support regular expression wildcards in `PointerTemplate` (#1518)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-02-03T14:57:46-04:00",
          "tree_id": "291f3a225ff52567c9f19da01855a5bc3e86e667",
          "url": "https://github.com/sourcemeta/core/commit/295e405e50cb6224edfe067c8f1b5420483073b1"
        },
        "date": 1738609707694,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.3038552088231676,
            "unit": "ns/iter",
            "extra": "iterations: 309235085\ncpu: 2.2152790327785734 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.052141402794866,
            "unit": "ns/iter",
            "extra": "iterations: 342258121\ncpu: 2.047443017429526 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.057074082058664,
            "unit": "ns/iter",
            "extra": "iterations: 342754177\ncpu: 2.053999767886127 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.1440984933566094,
            "unit": "ns/iter",
            "extra": "iterations: 304120397\ncpu: 2.142276566869009 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.723239015262432,
            "unit": "ns/iter",
            "extra": "iterations: 388524108\ncpu: 1.7207143295210912 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.771563141570356,
            "unit": "ns/iter",
            "extra": "iterations: 389761522\ncpu: 1.7692459647158294 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.715926741083621,
            "unit": "ns/iter",
            "extra": "iterations: 410177079\ncpu: 1.7134843363590286 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.7643170300495477,
            "unit": "ns/iter",
            "extra": "iterations: 390082976\ncpu: 1.762794180487383 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.3257266405423294,
            "unit": "ns/iter",
            "extra": "iterations: 319590924\ncpu: 2.3232731102213604 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.1277999946001627,
            "unit": "ns/iter",
            "extra": "iterations: 323564759\ncpu: 2.1250861871518 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 7.152575506089794,
            "unit": "ns/iter",
            "extra": "iterations: 109262323\ncpu: 7.147166365847793 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 82.74593879779384,
            "unit": "ns/iter",
            "extra": "iterations: 9103441\ncpu: 82.63062286008103 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.759335380096489,
            "unit": "ns/iter",
            "extra": "iterations: 146167692\ncpu: 4.756447820220074 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.0197208142794705,
            "unit": "ns/iter",
            "extra": "iterations: 346706290\ncpu: 2.0172751985549473 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 917.7998935741583,
            "unit": "ns/iter",
            "extra": "iterations: 715666\ncpu: 915.1755148351313 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 226.0421692998104,
            "unit": "ns/iter",
            "extra": "iterations: 3170577\ncpu: 225.87213620738407 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 25506.405605693893,
            "unit": "ns/iter",
            "extra": "iterations: 28671\ncpu: 25482.020159743206 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 25.772016422531248,
            "unit": "ns/iter",
            "extra": "iterations: 27675641\ncpu: 25.751815468339096 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 121.00878929402766,
            "unit": "ns/iter",
            "extra": "iterations: 5697867\ncpu: 120.94560999756588 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.793248773644863,
            "unit": "ns/iter",
            "extra": "iterations: 117066644\ncpu: 5.788805221067085 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.467819120206652,
            "unit": "ns/iter",
            "extra": "iterations: 124283153\ncpu: 5.463145918095591 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.8299126833578271,
            "unit": "ns/iter",
            "extra": "iterations: 832322656\ncpu: 0.8290715085376666 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.8874613707636496,
            "unit": "ns/iter",
            "extra": "iterations: 186057391\ncpu: 3.884742208386668 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.111059735666651,
            "unit": "ns/iter",
            "extra": "iterations: 329653769\ncpu: 2.1095375372456275 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.0642551204908486,
            "unit": "ns/iter",
            "extra": "iterations: 345656822\ncpu: 2.0627250921146274 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.5636777377447102,
            "unit": "ns/iter",
            "extra": "iterations: 447656200\ncpu: 1.5609322511337966 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.0343166937597013,
            "unit": "ns/iter",
            "extra": "iterations: 338188758\ncpu: 2.033119031118125 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.880697007235534,
            "unit": "ns/iter",
            "extra": "iterations: 374367586\ncpu: 1.8680810683219726 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.0610166111654844,
            "unit": "ns/iter",
            "extra": "iterations: 345697791\ncpu: 2.057820496747121 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.8298988427408969,
            "unit": "ns/iter",
            "extra": "iterations: 384011937\ncpu: 1.8286983615303651 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 56.98616330437269,
            "unit": "ns/iter",
            "extra": "iterations: 12834381\ncpu: 56.95109097976749 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 38.773723865399134,
            "unit": "ns/iter",
            "extra": "iterations: 17740697\ncpu: 38.74887215536107 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 169.91215888536382,
            "unit": "ns/iter",
            "extra": "iterations: 4169049\ncpu: 169.67178845823136 ns\nthreads: 1"
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
          "id": "295e405e50cb6224edfe067c8f1b5420483073b1",
          "message": "Support regular expression wildcards in `PointerTemplate` (#1518)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-02-03T18:57:46Z",
          "url": "https://github.com/sourcemeta/core/commit/295e405e50cb6224edfe067c8f1b5420483073b1"
        },
        "date": 1738610332006,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.9002430620924509,
            "unit": "ns/iter",
            "extra": "iterations: 368822875\ncpu: 1.9001343124392702 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.9195567811334915,
            "unit": "ns/iter",
            "extra": "iterations: 356183343\ncpu: 1.9194945901779572 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.0138701660495624,
            "unit": "ns/iter",
            "extra": "iterations: 357117349\ncpu: 2.0136070174512852 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.9550458809761504,
            "unit": "ns/iter",
            "extra": "iterations: 354095110\ncpu: 1.9547318798048354 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.6304350610056364,
            "unit": "ns/iter",
            "extra": "iterations: 432582082\ncpu: 1.6302986862964879 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.6039282658329077,
            "unit": "ns/iter",
            "extra": "iterations: 432779993\ncpu: 1.6036415990237325 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.6188963897828839,
            "unit": "ns/iter",
            "extra": "iterations: 439742688\ncpu: 1.618178128751514 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.622697919946904,
            "unit": "ns/iter",
            "extra": "iterations: 435575302\ncpu: 1.6226034781007854 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.9420676167546151,
            "unit": "ns/iter",
            "extra": "iterations: 365151981\ncpu: 1.9419201781627486 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.9333375805204691,
            "unit": "ns/iter",
            "extra": "iterations: 365150077\ncpu: 1.9323068635146412 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.112213386198732,
            "unit": "ns/iter",
            "extra": "iterations: 117282399\ncpu: 6.105485615109218 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 71.73523907228714,
            "unit": "ns/iter",
            "extra": "iterations: 9038206\ncpu: 71.70482726328632 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.455138360963791,
            "unit": "ns/iter",
            "extra": "iterations: 153236575\ncpu: 4.45501995851839 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 1.9144717131519287,
            "unit": "ns/iter",
            "extra": "iterations: 365071997\ncpu: 1.914378549281056 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 847.4710959608632,
            "unit": "ns/iter",
            "extra": "iterations: 827678\ncpu: 847.1531199331133 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 209.31469212166908,
            "unit": "ns/iter",
            "extra": "iterations: 3250055\ncpu: 209.25215111744248 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 23684.884635261053,
            "unit": "ns/iter",
            "extra": "iterations: 30541\ncpu: 23673.25889787489 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 23.61096332386108,
            "unit": "ns/iter",
            "extra": "iterations: 29265560\ncpu: 23.608910951985745 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 114.97977441684887,
            "unit": "ns/iter",
            "extra": "iterations: 6054525\ncpu: 114.95749047200246 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.41023123246772,
            "unit": "ns/iter",
            "extra": "iterations: 129901460\ncpu: 5.409415721732442 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.107044722205746,
            "unit": "ns/iter",
            "extra": "iterations: 137462443\ncpu: 5.105547265735696 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.7517310893853022,
            "unit": "ns/iter",
            "extra": "iterations: 901829425\ncpu: 0.7516975840525503 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.5144478528031637,
            "unit": "ns/iter",
            "extra": "iterations: 200235706\ncpu: 3.5112269137453254 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 1.9179258448284862,
            "unit": "ns/iter",
            "extra": "iterations: 366455693\ncpu: 1.916818358720378 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 1.9215413800986276,
            "unit": "ns/iter",
            "extra": "iterations: 370329223\ncpu: 1.921133833934563 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.4666254144163302,
            "unit": "ns/iter",
            "extra": "iterations: 478589937\ncpu: 1.4665101493765778 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 1.9538833430772686,
            "unit": "ns/iter",
            "extra": "iterations: 352739018\ncpu: 1.9538779801218311 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.7368516896583652,
            "unit": "ns/iter",
            "extra": "iterations: 405076183\ncpu: 1.7368337846710673 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 1.9024045995732697,
            "unit": "ns/iter",
            "extra": "iterations: 364475130\ncpu: 1.901973393904825 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.7439226316515668,
            "unit": "ns/iter",
            "extra": "iterations: 399869757\ncpu: 1.7438152993400735 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 53.46419919116025,
            "unit": "ns/iter",
            "extra": "iterations: 13205305\ncpu: 53.46048425235158 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 36.88467447232809,
            "unit": "ns/iter",
            "extra": "iterations: 17902630\ncpu: 36.88078232081008 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 161.619847834242,
            "unit": "ns/iter",
            "extra": "iterations: 4266810\ncpu: 161.61089900886137 ns\nthreads: 1"
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
          "id": "295e405e50cb6224edfe067c8f1b5420483073b1",
          "message": "Support regular expression wildcards in `PointerTemplate` (#1518)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-02-03T18:57:46Z",
          "url": "https://github.com/sourcemeta/core/commit/295e405e50cb6224edfe067c8f1b5420483073b1"
        },
        "date": 1738696334810,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.9248846664627854,
            "unit": "ns/iter",
            "extra": "iterations: 352024139\ncpu: 1.902451922480236 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.9286444754601029,
            "unit": "ns/iter",
            "extra": "iterations: 366588112\ncpu: 1.902590338226789 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.8870528541252563,
            "unit": "ns/iter",
            "extra": "iterations: 370888437\ncpu: 1.885736869170715 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.8852757797813713,
            "unit": "ns/iter",
            "extra": "iterations: 372352309\ncpu: 1.884016784759619 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.5740564973484963,
            "unit": "ns/iter",
            "extra": "iterations: 442575791\ncpu: 1.573018710370444 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.5788044703334174,
            "unit": "ns/iter",
            "extra": "iterations: 447270055\ncpu: 1.577874467808939 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.5908044742273466,
            "unit": "ns/iter",
            "extra": "iterations: 438887983\ncpu: 1.5897450534661852 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.571107955645336,
            "unit": "ns/iter",
            "extra": "iterations: 446605163\ncpu: 1.5694444625128534 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.8806642267313047,
            "unit": "ns/iter",
            "extra": "iterations: 371165725\ncpu: 1.8795539377996167 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.8852645088844244,
            "unit": "ns/iter",
            "extra": "iterations: 369847887\ncpu: 1.883844749395584 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 5.957231936345244,
            "unit": "ns/iter",
            "extra": "iterations: 117347281\ncpu: 5.953644550145135 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 69.45457501241322,
            "unit": "ns/iter",
            "extra": "iterations: 10251303\ncpu: 69.33596636447098 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.393882256531156,
            "unit": "ns/iter",
            "extra": "iterations: 159681731\ncpu: 4.390759015506904 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 1.9022739507525885,
            "unit": "ns/iter",
            "extra": "iterations: 372701232\ncpu: 1.9011823389947888 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 820.3674340405339,
            "unit": "ns/iter",
            "extra": "iterations: 853253\ncpu: 819.8318669843532 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 207.1053109609952,
            "unit": "ns/iter",
            "extra": "iterations: 3275237\ncpu: 206.99234895062497 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 22932.235203488497,
            "unit": "ns/iter",
            "extra": "iterations: 30471\ncpu: 22920.448951462044 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 23.725250810746402,
            "unit": "ns/iter",
            "extra": "iterations: 29194888\ncpu: 23.70973301901344 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 113.89625841599819,
            "unit": "ns/iter",
            "extra": "iterations: 5826390\ncpu: 113.79619283982028 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.372153595942662,
            "unit": "ns/iter",
            "extra": "iterations: 129663246\ncpu: 5.366709699678487 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.066072802001112,
            "unit": "ns/iter",
            "extra": "iterations: 138748489\ncpu: 5.063082164447949 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.7584800700396552,
            "unit": "ns/iter",
            "extra": "iterations: 938652363\ncpu: 0.7524425738861126 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.5859506733005198,
            "unit": "ns/iter",
            "extra": "iterations: 200417441\ncpu: 3.5230466793556334 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 1.9076691529462637,
            "unit": "ns/iter",
            "extra": "iterations: 369609639\ncpu: 1.8963899369518353 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 1.93961770039059,
            "unit": "ns/iter",
            "extra": "iterations: 364917841\ncpu: 1.9109068443710275 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.4869377753522388,
            "unit": "ns/iter",
            "extra": "iterations: 484620231\ncpu: 1.4666886657482525 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 1.9724189170566453,
            "unit": "ns/iter",
            "extra": "iterations: 353283773\ncpu: 1.9427328749684767 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.768271710107667,
            "unit": "ns/iter",
            "extra": "iterations: 400457666\ncpu: 1.7429407881531191 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 1.9244308253219564,
            "unit": "ns/iter",
            "extra": "iterations: 366434591\ncpu: 1.9000307752059358 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.7657640275106217,
            "unit": "ns/iter",
            "extra": "iterations: 401855424\ncpu: 1.7450430132803267 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 53.89284160437022,
            "unit": "ns/iter",
            "extra": "iterations: 13243279\ncpu: 53.09651786389173 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 37.051526059604896,
            "unit": "ns/iter",
            "extra": "iterations: 19236318\ncpu: 36.47834268491512 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 157.59096450282735,
            "unit": "ns/iter",
            "extra": "iterations: 4468532\ncpu: 155.57077805417987 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "26d3205705ed685eeb290d574dfb3b3f6f4299a7",
          "message": "Revise `SchemaKeywordType` for 2020-12 applicators (#1519)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-02-04T15:57:19-04:00",
          "tree_id": "29e543751f246437b02cbca2be1e379842c98110",
          "url": "https://github.com/sourcemeta/core/commit/26d3205705ed685eeb290d574dfb3b3f6f4299a7"
        },
        "date": 1738699733882,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.4335093366017078,
            "unit": "ns/iter",
            "extra": "iterations: 279373087\ncpu: 2.4291638371021764 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.4102222582714625,
            "unit": "ns/iter",
            "extra": "iterations: 304264484\ncpu: 2.3514147645309795 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.365884680227211,
            "unit": "ns/iter",
            "extra": "iterations: 279653230\ncpu: 2.2702795172435524 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.3518905261439214,
            "unit": "ns/iter",
            "extra": "iterations: 296114554\ncpu: 2.250959944373419 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.9501080771866819,
            "unit": "ns/iter",
            "extra": "iterations: 289568502\ncpu: 1.9157746652983687 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.4002164687098966,
            "unit": "ns/iter",
            "extra": "iterations: 388440025\ncpu: 2.2620480471856617 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.774730643252747,
            "unit": "ns/iter",
            "extra": "iterations: 401878495\ncpu: 1.7299582054023568 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.7449555535424641,
            "unit": "ns/iter",
            "extra": "iterations: 414397348\ncpu: 1.7080007954104963 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.5192077019487757,
            "unit": "ns/iter",
            "extra": "iterations: 340309682\ncpu: 2.3646315181828963 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.2320880483058763,
            "unit": "ns/iter",
            "extra": "iterations: 315575452\ncpu: 2.156989701467659 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.873984536688011,
            "unit": "ns/iter",
            "extra": "iterations: 107540097\ncpu: 6.7967671630424595 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 73.88590415018454,
            "unit": "ns/iter",
            "extra": "iterations: 9562580\ncpu: 72.8628675524806 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.985710620880127,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.441210000000005 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.406712799177613,
            "unit": "ns/iter",
            "extra": "iterations: 313201908\ncpu: 2.304079194817674 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 991.7447278860707,
            "unit": "ns/iter",
            "extra": "iterations: 637517\ncpu: 957.4881924717324 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 269.4080187719487,
            "unit": "ns/iter",
            "extra": "iterations: 2688647\ncpu: 255.18485691874017 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 28702.654371193184,
            "unit": "ns/iter",
            "extra": "iterations: 25231\ncpu: 27452.261107367925 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 28.16188256916037,
            "unit": "ns/iter",
            "extra": "iterations: 24437075\ncpu: 27.042188969015285 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 139.91566997764906,
            "unit": "ns/iter",
            "extra": "iterations: 5404320\ncpu: 134.82214228617067 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 6.221045727591171,
            "unit": "ns/iter",
            "extra": "iterations: 109351079\ncpu: 6.048070179536083 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 6.013780177074989,
            "unit": "ns/iter",
            "extra": "iterations: 129020367\ncpu: 5.875452206704701 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 1.0493735390016325,
            "unit": "ns/iter",
            "extra": "iterations: 844869830\ncpu: 1.011267025596122 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 4.5110299594714585,
            "unit": "ns/iter",
            "extra": "iterations: 136173524\ncpu: 4.316000517104918 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.1439174249021264,
            "unit": "ns/iter",
            "extra": "iterations: 303106408\ncpu: 2.108203532272399 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.00180218471352,
            "unit": "ns/iter",
            "extra": "iterations: 285576743\ncpu: 1.9834143146593743 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.491402405689962,
            "unit": "ns/iter",
            "extra": "iterations: 483001787\ncpu: 1.490948935143385 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.0168688298203166,
            "unit": "ns/iter",
            "extra": "iterations: 357999499\ncpu: 2.015284943178084 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.8378966617672823,
            "unit": "ns/iter",
            "extra": "iterations: 386597226\ncpu: 1.8376489850964486 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.080036944197873,
            "unit": "ns/iter",
            "extra": "iterations: 344535664\ncpu: 2.0608229399439 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.8485102256553771,
            "unit": "ns/iter",
            "extra": "iterations: 371055547\ncpu: 1.8444111819193472 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 59.74146602891669,
            "unit": "ns/iter",
            "extra": "iterations: 12458398\ncpu: 59.67717518737133 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 41.70356974014517,
            "unit": "ns/iter",
            "extra": "iterations: 17134940\ncpu: 41.67327110570557 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 176.90476406399537,
            "unit": "ns/iter",
            "extra": "iterations: 3919132\ncpu: 176.84426041276433 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db01771e700cd1c9e528eb645f3adb04eead9464",
          "message": "Revise `pop_back` on `Pointer` and `PointerTemplate` (#1520)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-02-04T18:26:06-04:00",
          "tree_id": "311526614f6fd6651867d3a3638bcfe7bff3d16d",
          "url": "https://github.com/sourcemeta/core/commit/db01771e700cd1c9e528eb645f3adb04eead9464"
        },
        "date": 1738708741391,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.0268136928112095,
            "unit": "ns/iter",
            "extra": "iterations: 343916124\ncpu: 2.025319406077047 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.039289937928621,
            "unit": "ns/iter",
            "extra": "iterations: 346653065\ncpu: 2.038129967205107 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.1417974849596,
            "unit": "ns/iter",
            "extra": "iterations: 346625600\ncpu: 2.1399227293079344 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.026440358651844,
            "unit": "ns/iter",
            "extra": "iterations: 346027603\ncpu: 2.0262516455948734 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.705839709607771,
            "unit": "ns/iter",
            "extra": "iterations: 417029085\ncpu: 1.7052407747531557 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.693863160997926,
            "unit": "ns/iter",
            "extra": "iterations: 416636907\ncpu: 1.6937913760002055 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.692933985080754,
            "unit": "ns/iter",
            "extra": "iterations: 411711426\ncpu: 1.692556863845697 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.094078844174613,
            "unit": "ns/iter",
            "extra": "iterations: 407059576\ncpu: 2.0593644012443053 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.0329814506179402,
            "unit": "ns/iter",
            "extra": "iterations: 331453518\ncpu: 2.0324780502103463 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.036169653513848,
            "unit": "ns/iter",
            "extra": "iterations: 342398748\ncpu: 2.034023208519445 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.612152321017589,
            "unit": "ns/iter",
            "extra": "iterations: 101637821\ncpu: 6.611367632527267 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 73.41005182778908,
            "unit": "ns/iter",
            "extra": "iterations: 9595482\ncpu: 73.40923572156147 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.012403441896601,
            "unit": "ns/iter",
            "extra": "iterations: 148179823\ncpu: 5.010054574029281 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.0506981122935213,
            "unit": "ns/iter",
            "extra": "iterations: 346375184\ncpu: 2.050571267253367 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 872.2232638690335,
            "unit": "ns/iter",
            "extra": "iterations: 804293\ncpu: 872.1150128124941 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 248.47383618095023,
            "unit": "ns/iter",
            "extra": "iterations: 2897915\ncpu: 248.44483016237544 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 24919.43726687059,
            "unit": "ns/iter",
            "extra": "iterations: 28103\ncpu: 24916.023200370066 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 25.135212530140276,
            "unit": "ns/iter",
            "extra": "iterations: 27101110\ncpu: 25.12487495899625 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 130.3185529205102,
            "unit": "ns/iter",
            "extra": "iterations: 5764543\ncpu: 129.41147286090157 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 5.928647852703097,
            "unit": "ns/iter",
            "extra": "iterations: 108771657\ncpu: 5.926148573796214 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.481124772340742,
            "unit": "ns/iter",
            "extra": "iterations: 128615000\ncpu: 5.476507405823599 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.8365945627492478,
            "unit": "ns/iter",
            "extra": "iterations: 873776713\ncpu: 0.8364528249907698 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.9317077854182374,
            "unit": "ns/iter",
            "extra": "iterations: 187619775\ncpu: 3.9278002545307418 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.111702473106931,
            "unit": "ns/iter",
            "extra": "iterations: 345602212\ncpu: 2.1104957511093727 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.048424936028073,
            "unit": "ns/iter",
            "extra": "iterations: 345290241\ncpu: 2.0479177110597875 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.57237158988045,
            "unit": "ns/iter",
            "extra": "iterations: 454755114\ncpu: 1.5722967768538454 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.066938566838873,
            "unit": "ns/iter",
            "extra": "iterations: 340634261\ncpu: 2.0662983163634303 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.8605961672822011,
            "unit": "ns/iter",
            "extra": "iterations: 379333890\ncpu: 1.8597125608787486 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.178039683098074,
            "unit": "ns/iter",
            "extra": "iterations: 335982798\ncpu: 2.1451693488188726 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 1.9981911567479773,
            "unit": "ns/iter",
            "extra": "iterations: 365125316\ncpu: 1.9734430027853775 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 69.75982891673395,
            "unit": "ns/iter",
            "extra": "iterations: 11846336\ncpu: 69.33418062766394 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 41.09111089298202,
            "unit": "ns/iter",
            "extra": "iterations: 17911563\ncpu: 40.82368467788118 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 167.47261785553414,
            "unit": "ns/iter",
            "extra": "iterations: 4162034\ncpu: 167.3518284569516 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c7e6999fdfd0977c4f361e6622d33c4487d3f1c5",
          "message": "Revise `SchemaKeywordType` (#1521)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-02-04T18:30:39-04:00",
          "tree_id": "97c03b55d08322d59da73b6fb9e74a9c90f02d2b",
          "url": "https://github.com/sourcemeta/core/commit/c7e6999fdfd0977c4f361e6622d33c4487d3f1c5"
        },
        "date": 1738708899707,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.152007641208661,
            "unit": "ns/iter",
            "extra": "iterations: 327407262\ncpu: 2.0973694835149996 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.121744300934085,
            "unit": "ns/iter",
            "extra": "iterations: 311926278\ncpu: 2.083136451876621 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.060048105001468,
            "unit": "ns/iter",
            "extra": "iterations: 292002470\ncpu: 2.0563798655538763 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.0350614846089843,
            "unit": "ns/iter",
            "extra": "iterations: 343597069\ncpu: 2.0337455206871966 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.6984766476604212,
            "unit": "ns/iter",
            "extra": "iterations: 412038590\ncpu: 1.6973677149997037 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.7207619364772706,
            "unit": "ns/iter",
            "extra": "iterations: 404699135\ncpu: 1.7195440756254659 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.7137172176694584,
            "unit": "ns/iter",
            "extra": "iterations: 410612575\ncpu: 1.7117352044077057 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.743607096239406,
            "unit": "ns/iter",
            "extra": "iterations: 411592805\ncpu: 1.740924504256094 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.054806586906319,
            "unit": "ns/iter",
            "extra": "iterations: 333438128\ncpu: 2.0529595823546622 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.0362775044709904,
            "unit": "ns/iter",
            "extra": "iterations: 346761250\ncpu: 2.0243121167662177 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.460729593074116,
            "unit": "ns/iter",
            "extra": "iterations: 108191654\ncpu: 6.454194701561715 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 76.08479519606355,
            "unit": "ns/iter",
            "extra": "iterations: 9477005\ncpu: 75.99183497317993 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 4.843567155781352,
            "unit": "ns/iter",
            "extra": "iterations: 143958573\ncpu: 4.838829570782143 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.120000627152561,
            "unit": "ns/iter",
            "extra": "iterations: 342757533\ncpu: 2.104178407655887 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 887.616711687911,
            "unit": "ns/iter",
            "extra": "iterations: 771503\ncpu: 886.9686832066772 ns\nthreads: 1"
          },
          {
            "name": "JSON_Array_Of_Objects_Unique",
            "value": 228.18159539217777,
            "unit": "ns/iter",
            "extra": "iterations: 3081094\ncpu: 227.9206671396587 ns\nthreads: 1"
          },
          {
            "name": "JSON_Parse_1",
            "value": 25468.073289167474,
            "unit": "ns/iter",
            "extra": "iterations: 27992\ncpu: 25444.948556730455 ns\nthreads: 1"
          },
          {
            "name": "JSON_Fast_Hash_Helm_Chart_Lock",
            "value": 27.634999367418388,
            "unit": "ns/iter",
            "extra": "iterations: 25272948\ncpu: 27.616208445488777 ns\nthreads: 1"
          },
          {
            "name": "JSON_Equality_Helm_Chart_Lock",
            "value": 122.92772795223584,
            "unit": "ns/iter",
            "extra": "iterations: 5620097\ncpu: 122.84645620885236 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/10",
            "value": 6.232450226395195,
            "unit": "ns/iter",
            "extra": "iterations: 99145929\ncpu: 6.211288816508037 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal/100",
            "value": 5.547218033272281,
            "unit": "ns/iter",
            "extra": "iterations: 125118416\ncpu: 5.541510372062261 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Perfect_Hash/10",
            "value": 0.842663642738559,
            "unit": "ns/iter",
            "extra": "iterations: 850185219\ncpu: 0.8415225106377722 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Equal_Small_By_Runtime_Perfect_Hash/10",
            "value": 3.8020951562439635,
            "unit": "ns/iter",
            "extra": "iterations: 181689348\ncpu: 3.7992430904645182 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/10",
            "value": 2.0666950027386335,
            "unit": "ns/iter",
            "extra": "iterations: 339237684\ncpu: 2.0618611462988277 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Fast_Hash/100",
            "value": 2.318439335994243,
            "unit": "ns/iter",
            "extra": "iterations: 340078218\ncpu: 2.232798102935243 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/10",
            "value": 1.6301531141376033,
            "unit": "ns/iter",
            "extra": "iterations: 427428711\ncpu: 1.5986642507035527 ns\nthreads: 1"
          },
          {
            "name": "JSON_String_Key_Hash/100",
            "value": 2.0904405282610408,
            "unit": "ns/iter",
            "extra": "iterations: 335026012\ncpu: 2.0885661857205386 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Same_Length",
            "value": 1.9251638298407083,
            "unit": "ns/iter",
            "extra": "iterations: 376791779\ncpu: 1.923776049264597 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Small",
            "value": 2.3199394977255867,
            "unit": "ns/iter",
            "extra": "iterations: 306289435\ncpu: 2.2725628783114944 ns\nthreads: 1"
          },
          {
            "name": "JSON_Object_Defines_Miss_Too_Large",
            "value": 2.0056516521035945,
            "unit": "ns/iter",
            "extra": "iterations: 315885902\ncpu: 1.9809367750764642 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Traverse",
            "value": 57.782415110641345,
            "unit": "ns/iter",
            "extra": "iterations: 12388942\ncpu: 57.69491858142499 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Object_Try_Traverse",
            "value": 38.455672854390194,
            "unit": "ns/iter",
            "extra": "iterations: 18132930\ncpu: 38.428814317377224 ns\nthreads: 1"
          },
          {
            "name": "Pointer_Push_Back_Pointer_To_Weak_Pointer",
            "value": 172.3872320191702,
            "unit": "ns/iter",
            "extra": "iterations: 4132573\ncpu: 172.2043385561479 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}