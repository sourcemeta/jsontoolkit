add_executable(sourcemeta_jsontoolkit_jsonl_unit
  jsonl_parse_test.cc
  jsonl_parse_error_test.cc)
sourcemeta_jsontoolkit_add_compile_options(sourcemeta_jsontoolkit_jsonl_unit)
target_link_libraries(sourcemeta_jsontoolkit_jsonl_unit
  PRIVATE GTest::gtest GTest::gtest_main)
target_link_libraries(sourcemeta_jsontoolkit_jsonl_unit
  PRIVATE sourcemeta::jsontoolkit::jsonl)
set_target_properties(sourcemeta_jsontoolkit_jsonl_unit
  PROPERTIES FOLDER "JSON Toolkit/JSONL")
add_test(NAME JSONL COMMAND sourcemeta_jsontoolkit_jsonl_unit --gtest_brief=1)
