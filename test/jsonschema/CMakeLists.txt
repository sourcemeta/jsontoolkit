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
  jsonschema_unevaluated_2020_12_test.cc
  jsonschema_unevaluated_2019_09_test.cc
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
  jsonschema_keyword_iterator_test.cc
  jsonschema_official_resolver_test.cc
  jsonschema_map_resolver_test.cc
  jsonschema_flat_file_resolver_test.cc
  jsonschema_format_test.cc)
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
target_compile_definitions(sourcemeta_jsontoolkit_jsonschema_unit
  PRIVATE SCHEMAS_PATH="${CMAKE_CURRENT_SOURCE_DIR}/schemas")
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
