add_executable(sourcemeta_jsontoolkit_jsonpointer_unit
  jsonpointer_empty_pointer_test.cc
  jsonpointer_get_test.cc
  jsonpointer_error_test.cc
  jsonpointer_parse_error_test.cc
  jsonpointer_parse_test.cc
  jsonpointer_pointer_test.cc
  jsonpointer_resolve_from_test.cc
  jsonpointer_set_test.cc
  jsonpointer_stringify_test.cc
  jsonpointer_token_test.cc
  jsonpointer_walker_test.cc
  jsonpointer_subpointer_walker_test.cc
  jsonpointer_to_string_test.cc
  jsonpointer_to_uri_test.cc)
sourcemeta_jsontoolkit_add_compile_options(sourcemeta_jsontoolkit_jsonpointer_unit)
target_link_libraries(sourcemeta_jsontoolkit_jsonpointer_unit
  PRIVATE GTest::gtest GTest::gtest_main)
target_link_libraries(sourcemeta_jsontoolkit_jsonpointer_unit
  PRIVATE sourcemeta::jsontoolkit::jsonpointer)
target_link_libraries(sourcemeta_jsontoolkit_jsonpointer_unit
  PRIVATE sourcemeta::jsontoolkit::json)
target_link_libraries(sourcemeta_jsontoolkit_jsonpointer_unit
  PRIVATE sourcemeta::jsontoolkit::uri)
add_test(NAME JSONPointer COMMAND sourcemeta_jsontoolkit_jsonpointer_unit --gtest_brief=1)
set_target_properties(sourcemeta_jsontoolkit_jsonpointer_unit
  PROPERTIES FOLDER "JSON Toolkit/JSON Pointer")
