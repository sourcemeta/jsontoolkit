window.BENCHMARK_DATA = {
  "lastUpdate": 1738003208744,
  "repoUrl": "https://github.com/sourcemeta/jsontoolkit",
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
      }
    ]
  }
}