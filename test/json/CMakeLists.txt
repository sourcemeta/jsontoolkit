add_executable(sourcemeta_jsontoolkit_json_unit
  json_parse_error_test.cc
  json_error_test.cc
  json_read_test.cc
  json_write_test.cc
  json_iterators_test.cc
  json_stringify_test.cc)
target_link_libraries(sourcemeta_jsontoolkit_json_unit
  PRIVATE GTest::gtest)
target_link_libraries(sourcemeta_jsontoolkit_json_unit
  PRIVATE GTest::gtest_main)
target_link_libraries(sourcemeta_jsontoolkit_json_unit
  PRIVATE sourcemeta::jsontoolkit::json)
gtest_discover_tests(sourcemeta_jsontoolkit_json_unit)
set_target_properties(sourcemeta_jsontoolkit_json_unit
  PROPERTIES FOLDER "JSON Toolkit/JSON")

# JSON Test Suite
# See https://github.com/nst/JSONTestSuite
add_executable(sourcemeta_jsontoolkit_jsontestsuite jsontestsuite.cc)
target_compile_definitions(sourcemeta_jsontoolkit_jsontestsuite
  PRIVATE JSONTESTSUITE_PATH="${PROJECT_SOURCE_DIR}/vendor/jsontestsuite")
target_link_libraries(sourcemeta_jsontoolkit_jsontestsuite PRIVATE GTest::gtest)
target_link_libraries(sourcemeta_jsontoolkit_jsontestsuite PRIVATE sourcemeta::jsontoolkit::json)
gtest_discover_tests(sourcemeta_jsontoolkit_jsontestsuite)
set_target_properties(sourcemeta_jsontoolkit_jsontestsuite
  PROPERTIES FOLDER "JSON Toolkit/JSON")
