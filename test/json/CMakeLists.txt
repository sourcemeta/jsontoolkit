add_executable(sourcemeta_jsontoolkit_json_unit
  json_parse_error_test.cc)
sourcemeta_jsontoolkit_add_compile_options(sourcemeta_jsontoolkit_json_unit)
target_link_libraries(sourcemeta_jsontoolkit_json_unit
  PRIVATE GTest::gtest GTest::gtest_main)
target_link_libraries(sourcemeta_jsontoolkit_json_unit
  PRIVATE sourcemeta::jsontoolkit::json)
set_target_properties(sourcemeta_jsontoolkit_json_unit
  PROPERTIES FOLDER "JSON Toolkit/JSON")
add_test(NAME JSON COMMAND sourcemeta_jsontoolkit_json_unit --gtest_catch_exceptions=0)
