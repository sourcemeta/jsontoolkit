sourcemeta_googletest(NAMESPACE sourcemeta PROJECT core NAME regex
  FOLDER "Core/Regex"
  SOURCES regex_matches_test.cc regex_to_regex_test.cc)

target_link_libraries(sourcemeta_core_regex_unit
  PRIVATE sourcemeta::core::regex)
