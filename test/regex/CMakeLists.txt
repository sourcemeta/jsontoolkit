add_executable(sourcemeta_jsontoolkit_regex_unit
  regex_to_regex_test.cc
  regex_matches_test.cc)
noa_add_default_options(PRIVATE sourcemeta_jsontoolkit_regex_unit)
target_link_libraries(sourcemeta_jsontoolkit_regex_unit
  PRIVATE GTest::gtest GTest::gtest_main)
target_link_libraries(sourcemeta_jsontoolkit_regex_unit
  PRIVATE sourcemeta::jsontoolkit::regex)
target_compile_definitions(sourcemeta_jsontoolkit_regex_unit
  PRIVATE TEST_DIRECTORY="${CMAKE_CURRENT_SOURCE_DIR}")
set_target_properties(sourcemeta_jsontoolkit_regex_unit
  PROPERTIES FOLDER "JSON Toolkit/Regex")
add_test(NAME JSON COMMAND sourcemeta_jsontoolkit_regex_unit --gtest_brief=1)
