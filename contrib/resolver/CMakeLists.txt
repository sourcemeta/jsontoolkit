add_library(sourcemeta_jsontoolkit_contrib_resolver
  include/jsontoolkit/contrib/resolver.h curl.cc)
target_link_libraries(sourcemeta_jsontoolkit_contrib_resolver
  PUBLIC sourcemeta_jsontoolkit_json)
target_link_libraries(sourcemeta_jsontoolkit_contrib_resolver
  PUBLIC CURL::libcurl)
target_include_directories(sourcemeta_jsontoolkit_contrib_resolver
  PUBLIC "${CMAKE_CURRENT_SOURCE_DIR}/include")
target_compile_definitions(sourcemeta_jsontoolkit_contrib_resolver
  PRIVATE JSONTOOLKIT_VERSION="${PROJECT_VERSION}")
