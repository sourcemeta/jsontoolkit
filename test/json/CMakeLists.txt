add_executable(sourcemeta_jsontoolkit_json_unit
  json_array_test.cc
  json_boolean_test.cc
  json_error_test.cc
  json_integer_test.cc
  json_null_test.cc
  json_number_test.cc
  json_object_test.cc
  json_parse_error_test.cc
  json_parse_test.cc
  json_prettify_test.cc
  json_real_test.cc
  json_string_test.cc
  json_stringify_test.cc
  json_value_test.cc
  json_type_test.cc)
sourcemeta_jsontoolkit_add_compile_options(sourcemeta_jsontoolkit_json_unit)
target_link_libraries(sourcemeta_jsontoolkit_json_unit
  PRIVATE GTest::gtest GTest::gtest_main)
target_link_libraries(sourcemeta_jsontoolkit_json_unit
  PRIVATE sourcemeta::jsontoolkit::json)
set_target_properties(sourcemeta_jsontoolkit_json_unit
  PROPERTIES FOLDER "JSON Toolkit/JSON")
add_test(NAME JSON COMMAND sourcemeta_jsontoolkit_json_unit)
