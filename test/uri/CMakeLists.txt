add_executable(sourcemeta_jsontoolkit_uri_unit
  uri_test.cc
  uri_fragment_test.cc
  uri_host_test.cc
  uri_port_test.cc
  uri_scheme_test.cc
  uri_is_absolute_test.cc
  uri_recompose_test.cc
  uri_resolve_from_test.cc
  uri_escape_test.cc
  uri_unescape_test.cc)
sourcemeta_jsontoolkit_add_compile_options(sourcemeta_jsontoolkit_uri_unit)
target_link_libraries(sourcemeta_jsontoolkit_uri_unit
  PRIVATE GTest::gtest GTest::gtest_main)
target_link_libraries(sourcemeta_jsontoolkit_uri_unit
  PRIVATE sourcemeta::jsontoolkit::uri)
set_target_properties(sourcemeta_jsontoolkit_uri_unit
  PROPERTIES FOLDER "JSON Toolkit/URI")
add_test(NAME JSON COMMAND sourcemeta_jsontoolkit_uri_unit --gtest_brief=1)
