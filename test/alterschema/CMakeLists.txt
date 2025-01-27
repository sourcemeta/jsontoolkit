noa_googletest(NAMESPACE sourcemeta PROJECT jsontoolkit NAME alterschema
  FOLDER "JSON Toolkit/AlterSchema"
  SOURCES
    alterschema_lint_2020_12_test.cc
    alterschema_lint_2019_09_test.cc
    alterschema_lint_draft7_test.cc
    alterschema_lint_draft6_test.cc
    alterschema_lint_draft4_test.cc
    alterschema_lint_draft3_test.cc
    alterschema_lint_draft2_test.cc
    alterschema_lint_draft1_test.cc
    alterschema_lint_draft0_test.cc
    alterschema_test_utils.h)

target_link_libraries(sourcemeta_jsontoolkit_alterschema_unit
  PRIVATE sourcemeta::jsontoolkit::json)
target_link_libraries(sourcemeta_jsontoolkit_alterschema_unit
  PRIVATE sourcemeta::jsontoolkit::jsonschema)
target_link_libraries(sourcemeta_jsontoolkit_alterschema_unit
  PRIVATE sourcemeta::jsontoolkit::alterschema)
