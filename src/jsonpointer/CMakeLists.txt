noa_library(NAMESPACE sourcemeta PROJECT jsontoolkit NAME jsonpointer
  FOLDER "JSON Toolkit/JSON Pointer"
  PRIVATE_HEADERS pointer.h error.h token.h walker.h subpointer_walker.h
  SOURCES jsonpointer.cc stringify.h parser.h grammar.h)

target_compile_options(sourcemeta_jsontoolkit_jsonpointer PRIVATE -O3)

if(JSONTOOLKIT_INSTALL)
  noa_library_install(NAMESPACE sourcemeta PROJECT jsontoolkit NAME jsonpointer)
endif()

target_link_libraries(sourcemeta_jsontoolkit_jsonpointer PUBLIC
  sourcemeta::jsontoolkit::uri)
target_link_libraries(sourcemeta_jsontoolkit_jsonpointer PUBLIC
  sourcemeta::jsontoolkit::json)
