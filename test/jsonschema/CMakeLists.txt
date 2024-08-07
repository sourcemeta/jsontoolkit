add_executable(sourcemeta_jsontoolkit_jsonschema_unit
  jsonschema_test_utils.h
  jsonschema_anchor_2020_12_test.cc
  jsonschema_anchor_2019_09_test.cc
  jsonschema_anchor_draft7_test.cc
  jsonschema_anchor_draft6_test.cc
  jsonschema_anchor_draft4_test.cc
  jsonschema_identify_2020_12_test.cc
  jsonschema_identify_2019_09_test.cc
  jsonschema_identify_draft7_test.cc
  jsonschema_identify_draft6_test.cc
  jsonschema_identify_draft4_test.cc
  jsonschema_identify_draft3_test.cc
  jsonschema_identify_draft2_test.cc
  jsonschema_identify_draft1_test.cc
  jsonschema_identify_draft0_test.cc
  jsonschema_identify_test.cc
  jsonschema_is_schema_test.cc
  jsonschema_frame_2020_12_test.cc
  jsonschema_frame_2019_09_test.cc
  jsonschema_frame_draft7_test.cc
  jsonschema_frame_draft6_test.cc
  jsonschema_frame_draft4_test.cc
  jsonschema_frame_draft3_test.cc
  jsonschema_frame_draft2_test.cc
  jsonschema_frame_draft1_test.cc
  jsonschema_frame_draft0_test.cc
  jsonschema_frame_test.cc
  jsonschema_lint_2020_12_test.cc
  jsonschema_lint_2019_09_test.cc
  jsonschema_lint_draft7_test.cc
  jsonschema_lint_draft6_test.cc
  jsonschema_lint_draft4_test.cc
  jsonschema_lint_draft3_test.cc
  jsonschema_lint_draft2_test.cc
  jsonschema_lint_draft1_test.cc
  jsonschema_lint_draft0_test.cc
  jsonschema_bundle_2020_12_test.cc
  jsonschema_bundle_2019_09_test.cc
  jsonschema_bundle_draft7_test.cc
  jsonschema_bundle_draft6_test.cc
  jsonschema_bundle_draft4_test.cc
  jsonschema_bundle_draft3_test.cc
  jsonschema_bundle_draft2_test.cc
  jsonschema_bundle_draft1_test.cc
  jsonschema_bundle_draft0_test.cc
  jsonschema_bundle_test.cc
  jsonschema_metaschema_test.cc
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
  jsonschema_default_walker_2020_12_test.cc
  jsonschema_default_walker_2019_09_test.cc
  jsonschema_default_walker_draft7_test.cc
  jsonschema_default_walker_draft6_test.cc
  jsonschema_default_walker_draft4_test.cc
  jsonschema_default_walker_draft3_test.cc
  jsonschema_default_walker_draft2_test.cc
  jsonschema_default_walker_draft1_test.cc
  jsonschema_default_walker_draft0_test.cc
  jsonschema_walker_none_test.cc
  jsonschema_walker_test.cc
  jsonschema_error_test.cc
  jsonschema_compile_test.cc
  jsonschema_compile_evaluate_test.cc
  jsonschema_compile_json_test.cc
  jsonschema_compile_template_draft4_test.cc
  jsonschema_compile_2019_09_test.cc
  jsonschema_compile_draft7_test.cc
  jsonschema_compile_draft6_test.cc
  jsonschema_compile_draft4_test.cc
  jsonschema_keyword_iterator_test.cc
  jsonschema_official_resolver_test.cc
  jsonschema_map_resolver_test.cc
  jsonschema_transformer_test.cc
  jsonschema_transform_rule_test.cc
  jsonschema_transform_bundle_test.cc
  jsonschema_transform_rules.h
  jsonschema_format_test.cc
  jsonschema_template_format_test.cc
  jsonschema_explain_string_test.cc
  jsonschema_explain_object_test.cc
  jsonschema_explain_enumeration_test.cc)
noa_add_default_options(PRIVATE sourcemeta_jsontoolkit_jsonschema_unit)
target_link_libraries(sourcemeta_jsontoolkit_jsonschema_unit
  PRIVATE GTest::gtest)
target_link_libraries(sourcemeta_jsontoolkit_jsonschema_unit
  PRIVATE GTest::gtest_main)
target_link_libraries(sourcemeta_jsontoolkit_jsonschema_unit
  PRIVATE sourcemeta::jsontoolkit::json)
target_link_libraries(sourcemeta_jsontoolkit_jsonschema_unit
  PRIVATE sourcemeta::jsontoolkit::jsonpointer)
target_link_libraries(sourcemeta_jsontoolkit_jsonschema_unit
  PRIVATE sourcemeta::jsontoolkit::jsonschema)
target_link_libraries(sourcemeta_jsontoolkit_jsonschema_unit
  PRIVATE sourcemeta::jsontoolkit::uri)
add_test(NAME JSONSchema COMMAND sourcemeta_jsontoolkit_jsonschema_unit --gtest_brief=1)
set_target_properties(sourcemeta_jsontoolkit_jsonschema_unit
  PROPERTIES FOLDER "JSON Toolkit/JSON Schema")

# JSON Schema Referencing Suite
# See https://github.com/python-jsonschema/referencing-suite
add_executable(sourcemeta_jsontoolkit_jsonschema_referencing_suite referencingsuite.cc)
noa_add_default_options(PRIVATE sourcemeta_jsontoolkit_jsonschema_referencing_suite)
target_compile_definitions(sourcemeta_jsontoolkit_jsonschema_referencing_suite
  PRIVATE REFERENCING_SUITE_PATH="${PROJECT_SOURCE_DIR}/vendor/referencing-suite/tests")
target_link_libraries(sourcemeta_jsontoolkit_jsonschema_referencing_suite PRIVATE GTest::gtest)
target_link_libraries(sourcemeta_jsontoolkit_jsonschema_referencing_suite PRIVATE sourcemeta::jsontoolkit::uri)
target_link_libraries(sourcemeta_jsontoolkit_jsonschema_referencing_suite PRIVATE sourcemeta::jsontoolkit::json)
target_link_libraries(sourcemeta_jsontoolkit_jsonschema_referencing_suite PRIVATE sourcemeta::jsontoolkit::jsonschema)
target_link_libraries(sourcemeta_jsontoolkit_jsonschema_referencing_suite PRIVATE sourcemeta::jsontoolkit::jsonpointer)
set_target_properties(sourcemeta_jsontoolkit_jsonschema_referencing_suite
  PROPERTIES FOLDER "JSON Toolkit/JSON Schema")
add_test(NAME JSONSchemaReferencingSuite COMMAND sourcemeta_jsontoolkit_jsonschema_referencing_suite --gtest_brief=1)

# JSON Schema Test Suite
# See https://github.com/json-schema-org/JSON-Schema-Test-Suite
add_executable(sourcemeta_jsontoolkit_jsonschema_official_suite officialsuite.cc)
noa_add_default_options(PRIVATE sourcemeta_jsontoolkit_jsonschema_official_suite)
target_compile_definitions(sourcemeta_jsontoolkit_jsonschema_official_suite
  PRIVATE OFFICIAL_SUITE_PATH="${PROJECT_SOURCE_DIR}/vendor/jsonschema-test-suite")
target_link_libraries(sourcemeta_jsontoolkit_jsonschema_official_suite PRIVATE GTest::gtest)
target_link_libraries(sourcemeta_jsontoolkit_jsonschema_official_suite PRIVATE sourcemeta::jsontoolkit::json)
target_link_libraries(sourcemeta_jsontoolkit_jsonschema_official_suite PRIVATE sourcemeta::jsontoolkit::jsonschema)
set_target_properties(sourcemeta_jsontoolkit_jsonschema_official_suite
  PROPERTIES FOLDER "JSON Toolkit/JSON Schema")
add_test(NAME JSONSchemaOfficialSuite COMMAND sourcemeta_jsontoolkit_jsonschema_official_suite --gtest_brief=1)
