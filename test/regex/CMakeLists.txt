noa_googletest(NAMESPACE sourcemeta PROJECT jsontoolkit NAME regex
  FOLDER "JSON Toolkit/Regex"
  SOURCES
    regex_to_regex_test.cc
    regex_matches_test.cc)

target_link_libraries(sourcemeta_jsontoolkit_regex_unit
  PRIVATE sourcemeta::jsontoolkit::regex)
target_compile_definitions(sourcemeta_jsontoolkit_regex_unit
  PRIVATE TEST_DIRECTORY="${CMAKE_CURRENT_SOURCE_DIR}")
