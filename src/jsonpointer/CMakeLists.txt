noa_library(NAMESPACE sourcemeta PROJECT jsontoolkit NAME jsonpointer
  FOLDER "JSON Toolkit/JSON Pointer"
  PRIVATE_HEADERS pointer.h error.h token.h walker.h subpointer_walker.h
  SOURCES jsonpointer.cc stringify.h parser.h grammar.h)

target_link_libraries(sourcemeta_jsontoolkit_jsonpointer PUBLIC
  sourcemeta::jsontoolkit::json)

sourcemeta_jsontoolkit_add_compile_options(sourcemeta_jsontoolkit_jsonpointer)
