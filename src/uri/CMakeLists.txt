noa_library(NAMESPACE sourcemeta PROJECT jsontoolkit NAME uri
  FOLDER "JSON Toolkit/URI"
  PRIVATE_HEADERS error.h
  SOURCES uri.cc escaping.cc)

target_link_libraries(sourcemeta_jsontoolkit_uri
  PRIVATE uriparser::uriparser)

sourcemeta_jsontoolkit_add_compile_options(sourcemeta_jsontoolkit_uri)
