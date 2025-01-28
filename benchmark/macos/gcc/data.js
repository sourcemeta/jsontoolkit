window.BENCHMARK_DATA = {
  "lastUpdate": 1738088365402,
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
      }
    ]
  }
}