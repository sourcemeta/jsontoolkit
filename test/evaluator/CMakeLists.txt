add_executable(sourcemeta_jsontoolkit_evaluator_unit
  evaluator_utils.h
  evaluator_2019_09_test.cc
  evaluator_2020_12_test.cc
  evaluator_draft4_test.cc
  evaluator_draft6_test.cc
  evaluator_draft7_test.cc
  evaluator_test.cc)
noa_add_default_options(PRIVATE sourcemeta_jsontoolkit_evaluator_unit)
target_link_libraries(sourcemeta_jsontoolkit_evaluator_unit
  PRIVATE GTest::gtest)
target_link_libraries(sourcemeta_jsontoolkit_evaluator_unit
  PRIVATE GTest::gtest_main)
target_link_libraries(sourcemeta_jsontoolkit_evaluator_unit
  PRIVATE sourcemeta::jsontoolkit::json)
target_link_libraries(sourcemeta_jsontoolkit_evaluator_unit
  PRIVATE sourcemeta::jsontoolkit::jsonpointer)
target_link_libraries(sourcemeta_jsontoolkit_evaluator_unit
  PRIVATE sourcemeta::jsontoolkit::jsonschema)
target_link_libraries(sourcemeta_jsontoolkit_evaluator_unit
  PRIVATE sourcemeta::jsontoolkit::uri)
target_link_libraries(sourcemeta_jsontoolkit_evaluator_unit
  PRIVATE sourcemeta::jsontoolkit::evaluator)

if(MSVC)
  # error C1128: number of sections exceeded object file format limit: compile with /bigobj
  target_compile_options(sourcemeta_jsontoolkit_evaluator_unit PRIVATE "/bigobj")
endif()

add_test(NAME Evaluator COMMAND sourcemeta_jsontoolkit_evaluator_unit --gtest_brief=1)
set_target_properties(sourcemeta_jsontoolkit_evaluator_unit
  PROPERTIES FOLDER "JSON Toolkit/Evaluator")

# JSON Schema Test Suite
# See https://github.com/json-schema-org/JSON-Schema-Test-Suite
add_executable(sourcemeta_jsontoolkit_evaluator_official_suite officialsuite.cc)
noa_add_default_options(PRIVATE sourcemeta_jsontoolkit_evaluator_official_suite)
target_compile_definitions(sourcemeta_jsontoolkit_evaluator_official_suite
  PRIVATE OFFICIAL_SUITE_PATH="${PROJECT_SOURCE_DIR}/vendor/jsonschema-test-suite")
target_link_libraries(sourcemeta_jsontoolkit_evaluator_official_suite PRIVATE GTest::gtest)
target_link_libraries(sourcemeta_jsontoolkit_evaluator_official_suite PRIVATE sourcemeta::jsontoolkit::json)
target_link_libraries(sourcemeta_jsontoolkit_evaluator_official_suite PRIVATE sourcemeta::jsontoolkit::jsonschema)
target_link_libraries(sourcemeta_jsontoolkit_evaluator_official_suite PRIVATE sourcemeta::jsontoolkit::evaluator)
set_target_properties(sourcemeta_jsontoolkit_evaluator_official_suite
  PROPERTIES FOLDER "JSON Toolkit/Evaluator")
add_test(NAME JSONSchemaOfficialSuite COMMAND sourcemeta_jsontoolkit_evaluator_official_suite --gtest_brief=1)
