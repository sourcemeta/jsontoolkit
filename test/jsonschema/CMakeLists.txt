add_executable(sourcemeta_jsontoolkit_jsonschema_unit
  jsonschema_id_draft4_test.cc)
sourcemeta_jsontoolkit_add_compile_options(sourcemeta_jsontoolkit_jsonschema_unit)
add_test(NAME JSONSchema COMMAND sourcemeta_jsontoolkit_jsonschema_unit)
set_target_properties(sourcemeta_jsontoolkit_jsonschema_unit
  PROPERTIES FOLDER "JSON Toolkit/JSON Schema")

# JSON Schema Referencing Suite
# See https://github.com/python-jsonschema/referencing-suite
# add_executable(sourcemeta_jsontoolkit_jsonschema_referencing_suite referencingsuite.cc)
# sourcemeta_jsontoolkit_add_compile_options(sourcemeta_jsontoolkit_jsonschema_referencing_suite)
# target_compile_definitions(sourcemeta_jsontoolkit_jsonschema_referencing_suite
  # PRIVATE REFERENCING_SUITE_PATH="${PROJECT_SOURCE_DIR}/vendor/referencing-suite/tests")
# target_link_libraries(sourcemeta_jsontoolkit_jsonschema_referencing_suite PRIVATE GTest::gtest)
# target_link_libraries(sourcemeta_jsontoolkit_jsonschema_referencing_suite PRIVATE sourcemeta::jsontoolkit::uri)
# target_link_libraries(sourcemeta_jsontoolkit_jsonschema_referencing_suite PRIVATE sourcemeta::jsontoolkit::json)
# target_link_libraries(sourcemeta_jsontoolkit_jsonschema_referencing_suite PRIVATE sourcemeta::jsontoolkit::jsonschema)
# target_link_libraries(sourcemeta_jsontoolkit_jsonschema_referencing_suite PRIVATE sourcemeta::jsontoolkit::jsonpointer)
# set_target_properties(sourcemeta_jsontoolkit_jsonschema_referencing_suite
  # PROPERTIES FOLDER "JSON Toolkit/JSON Schema")
# add_test(NAME JSONSchemaReferencingSuite COMMAND sourcemeta_jsontoolkit_jsonschema_referencing_suite --gtest_brief=1)

# # JSON Schema Test Suite
# # See https://github.com/json-schema-org/JSON-Schema-Test-Suite
# add_executable(sourcemeta_jsontoolkit_jsonschema_official_suite officialsuite.cc)
# sourcemeta_jsontoolkit_add_compile_options(sourcemeta_jsontoolkit_jsonschema_official_suite)
# target_compile_definitions(sourcemeta_jsontoolkit_jsonschema_official_suite
  # PRIVATE OFFICIAL_SUITE_PATH="${PROJECT_SOURCE_DIR}/vendor/jsonschema-test-suite")
# target_link_libraries(sourcemeta_jsontoolkit_jsonschema_official_suite PRIVATE GTest::gtest)
# target_link_libraries(sourcemeta_jsontoolkit_jsonschema_official_suite PRIVATE sourcemeta::jsontoolkit::json)
# target_link_libraries(sourcemeta_jsontoolkit_jsonschema_official_suite PRIVATE sourcemeta::jsontoolkit::jsonschema)
# set_target_properties(sourcemeta_jsontoolkit_jsonschema_official_suite
  # PROPERTIES FOLDER "JSON Toolkit/JSON Schema")
# add_test(NAME JSONSchemaOfficialSuite COMMAND sourcemeta_jsontoolkit_jsonschema_official_suite --gtest_brief=1)
