window.BENCHMARK_DATA = {
  "lastUpdate": 1737650399384,
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
      }
    ]
  }
}