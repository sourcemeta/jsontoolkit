noa_library(NAMESPACE sourcemeta PROJECT jsontoolkit NAME json 
  FOLDER "JSON Toolkit/JSON"
  PRIVATE_HEADERS array.h error.h object.h value.h
  SOURCES grammar.h parser.h stringify.h json.cc)

sourcemeta_jsontoolkit_add_compile_options(sourcemeta_jsontoolkit_json)
