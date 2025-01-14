add_executable(sourcemeta_jsontoolkit_yaml_unit
  yaml_parse_test.cc)
noa_add_default_options(PRIVATE sourcemeta_jsontoolkit_yaml_unit)
target_link_libraries(sourcemeta_jsontoolkit_yaml_unit
  PRIVATE GTest::gtest GTest::gtest_main)
target_link_libraries(sourcemeta_jsontoolkit_yaml_unit
  PRIVATE sourcemeta::jsontoolkit::json)
target_link_libraries(sourcemeta_jsontoolkit_yaml_unit
  PRIVATE sourcemeta::jsontoolkit::yaml)
set_target_properties(sourcemeta_jsontoolkit_yaml_unit
  PROPERTIES FOLDER "JSON Toolkit/YAML")
add_test(NAME YAML COMMAND sourcemeta_jsontoolkit_yaml_unit --gtest_brief=1)
