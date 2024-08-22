add_executable(sourcemeta_jsontoolkit_uri_unit
  uri_test.cc
  uri_fragment_test.cc
  uri_host_test.cc
  uri_path_test.cc
  uri_parse_test.cc
  uri_port_test.cc
  uri_scheme_test.cc
  uri_query_test.cc
  uri_is_absolute_test.cc
  uri_is_relative_test.cc
  uri_is_urn_test.cc
  uri_is_tag_test.cc
  uri_is_mailto_test.cc
  uri_recompose_test.cc
  uri_recompose_without_fragment_test.cc
  uri_normalize_test.cc
  uri_canonicalize_test.cc
  uri_resolve_from_test.cc
  uri_relative_to_test.cc
  uri_escape_test.cc
  uri_unescape_test.cc
  uri_user_info_test.cc)
noa_add_default_options(PRIVATE sourcemeta_jsontoolkit_uri_unit)
target_link_libraries(sourcemeta_jsontoolkit_uri_unit
  PRIVATE GTest::gtest GTest::gtest_main)
target_link_libraries(sourcemeta_jsontoolkit_uri_unit
  PRIVATE sourcemeta::jsontoolkit::uri)
set_target_properties(sourcemeta_jsontoolkit_uri_unit
  PROPERTIES FOLDER "JSON Toolkit/URI")
add_test(NAME URI COMMAND sourcemeta_jsontoolkit_uri_unit --gtest_brief=1)
