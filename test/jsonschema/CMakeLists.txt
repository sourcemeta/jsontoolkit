add_executable(sourcemeta_jsontoolkit_jsonschema_unit
  jsonschema_id_test.cc
  jsonschema_is_schema_test.cc
  jsonschema_dialect_test.cc
  jsonschema_dialect_2020_12_test.cc
  jsonschema_dialect_2019_09_test.cc
  jsonschema_dialect_draft7_test.cc
  jsonschema_dialect_draft6_test.cc
  jsonschema_dialect_draft4_test.cc
  jsonschema_dialect_draft3_test.cc
  jsonschema_dialect_draft2_test.cc
  jsonschema_dialect_draft1_test.cc
  jsonschema_dialect_draft0_test.cc
  jsonschema_base_dialect_test.cc
  jsonschema_base_dialect_2020_12_test.cc
  jsonschema_base_dialect_2019_09_test.cc
  jsonschema_base_dialect_draft7_test.cc
  jsonschema_base_dialect_draft6_test.cc
  jsonschema_base_dialect_draft4_test.cc
  jsonschema_base_dialect_draft3_test.cc
  jsonschema_base_dialect_draft2_test.cc
  jsonschema_base_dialect_draft1_test.cc
  jsonschema_base_dialect_draft0_test.cc
  jsonschema_vocabulary_2020_12_test.cc
  jsonschema_vocabulary_2019_09_test.cc
  jsonschema_vocabulary_draft7_test.cc
  jsonschema_vocabulary_draft6_test.cc
  jsonschema_vocabulary_draft4_test.cc
  jsonschema_vocabulary_draft3_test.cc
  jsonschema_vocabulary_draft2_test.cc
  jsonschema_vocabulary_draft1_test.cc
  jsonschema_vocabulary_draft0_test.cc
  jsonschema_vocabulary_test.cc
  jsonschema_walker_test.cc
  jsonschema_error_test.cc
  jsonschema_default_walker_test.cc
  jsonschema_official_resolver_test.cc)
sourcemeta_jsontoolkit_add_compile_options(sourcemeta_jsontoolkit_jsonschema_unit)
target_link_libraries(sourcemeta_jsontoolkit_jsonschema_unit
  PRIVATE GTest::gtest)
target_link_libraries(sourcemeta_jsontoolkit_jsonschema_unit
  PRIVATE GTest::gtest_main)
target_link_libraries(sourcemeta_jsontoolkit_jsonschema_unit
  PRIVATE sourcemeta::jsontoolkit::jsonschema)
gtest_discover_tests(sourcemeta_jsontoolkit_jsonschema_unit)
set_target_properties(sourcemeta_jsontoolkit_jsonschema_unit
  PROPERTIES FOLDER "JSON Toolkit/JSON Schema")
