add_executable(sourcemeta_jsontoolkit_jsonschema_unit
  jsonschema_id_test.cc
  jsonschema_is_schema_test.cc
  jsonschema_metaschema_test.cc
  jsonschema_draft_test.cc
  jsonschema_vocabulary_test.cc
  jsonschema_walker_test.cc
  jsonschema_default_walker_test.cc
  jsonschema_default_resolver_test.cc)
target_link_libraries(sourcemeta_jsontoolkit_jsonschema_unit
  PRIVATE GTest::gtest)
target_link_libraries(sourcemeta_jsontoolkit_jsonschema_unit
  PRIVATE GTest::gtest_main)
target_link_libraries(sourcemeta_jsontoolkit_jsonschema_unit
  PRIVATE sourcemeta::jsontoolkit::jsonschema)
gtest_discover_tests(sourcemeta_jsontoolkit_jsonschema_unit)
