add_executable(sourcemeta_jsontoolkit_jsonpointer_unit
  jsonpointer_empty_pointer_test.cc
  jsonpointer_get_test.cc
  jsonpointer_error_test.cc
  jsonpointer_parse_error_test.cc
  jsonpointer_parse_test.cc
  jsonpointer_pointer_test.cc
  jsonpointer_set_test.cc
  jsonpointer_stringify_test.cc
  jsonpointer_token_test.cc
  jsonpointer_walker_test.cc)
sourcemeta_jsontoolkit_add_compile_options(sourcemeta_jsontoolkit_jsonpointer_unit)
target_link_libraries(sourcemeta_jsontoolkit_jsonpointer_unit
  PRIVATE GTest::gtest GTest::gtest_main)
target_link_libraries(sourcemeta_jsontoolkit_jsonpointer_unit
  PRIVATE sourcemeta::jsontoolkit::jsonpointer)
target_link_libraries(sourcemeta_jsontoolkit_jsonpointer_unit
  PRIVATE sourcemeta::jsontoolkit::json)
add_test(NAME JSONPointer COMMAND sourcemeta_jsontoolkit_jsonpointer_unit --gtest_brief=1)
set_target_properties(sourcemeta_jsontoolkit_jsonpointer_unit
  PROPERTIES FOLDER "JSON Toolkit/JSON Pointer")
