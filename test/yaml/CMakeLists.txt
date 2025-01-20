noa_googletest(NAMESPACE sourcemeta PROJECT jsontoolkit NAME yaml
  FOLDER "JSON Toolkit/YAML"
  SOURCES
    yaml_parse_test.cc)

target_link_libraries(sourcemeta_jsontoolkit_yaml_unit
  PRIVATE sourcemeta::jsontoolkit::json)
target_link_libraries(sourcemeta_jsontoolkit_yaml_unit
  PRIVATE sourcemeta::jsontoolkit::yaml)

target_compile_definitions(sourcemeta_jsontoolkit_yaml_unit
  PRIVATE STUBS_PATH="${CMAKE_CURRENT_SOURCE_DIR}/stubs")
