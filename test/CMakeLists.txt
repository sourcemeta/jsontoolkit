macro(add_jsontoolkit_json_test backend)
  add_executable(sourcemeta_jsontoolkit_json_unit_${backend}
    json_parse_error_test.cc
    json_read_test.cc
    json_write_test.cc
    json_iterators_test.cc
    json_stringify_test.cc)
  target_link_libraries(sourcemeta_jsontoolkit_json_unit_${backend}
    PRIVATE GTest::gtest)
  target_link_libraries(sourcemeta_jsontoolkit_json_unit_${backend}
    PRIVATE GTest::gtest_main)
  target_link_libraries(sourcemeta_jsontoolkit_json_unit_${backend}
    PRIVATE sourcemeta_jsontoolkit_json)
  target_compile_definitions(sourcemeta_jsontoolkit_json_unit_${backend}
    PRIVATE CATEGORY=JSON_${backend})
  gtest_discover_tests(sourcemeta_jsontoolkit_json_unit_${backend})
endmacro()

add_jsontoolkit_json_test(rapidjson)
