noa_googletest(NAMESPACE sourcemeta PROJECT jsontoolkit NAME regex
  FOLDER "JSON Toolkit/Regex"
  SOURCES regex_matches_test.cc regex_to_regex_test.cc)

target_link_libraries(sourcemeta_jsontoolkit_regex_unit
  PRIVATE sourcemeta::jsontoolkit::regex)
