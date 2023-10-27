noa_library(NAMESPACE sourcemeta PROJECT jsontoolkit NAME jsonl
  FOLDER "JSON Toolkit/JSONL"
  PRIVATE_HEADERS iterator.h
  SOURCES jsonl.cc iterator.cc grammar.h)

target_link_libraries(sourcemeta_jsontoolkit_jsonl PUBLIC
  sourcemeta::jsontoolkit::json)

sourcemeta_jsontoolkit_add_compile_options(sourcemeta_jsontoolkit_jsonl)
