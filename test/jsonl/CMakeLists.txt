noa_googletest(NAMESPACE sourcemeta PROJECT jsontoolkit NAME jsonl
  FOLDER "JSON Toolkit/JSONL"
  SOURCES
    jsonl_parse_test.cc
    jsonl_parse_error_test.cc)

target_link_libraries(sourcemeta_jsontoolkit_jsonl_unit
  PRIVATE sourcemeta::jsontoolkit::jsonl)
