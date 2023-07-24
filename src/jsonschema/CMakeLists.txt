include("${CMAKE_CURRENT_SOURCE_DIR}/metaschemas.cmake")
configure_file(default_metaschemas.h.in default_metaschemas.h @ONLY)

add_library(sourcemeta_jsontoolkit_jsonschema
  include/sourcemeta/jsontoolkit/jsonschema.h
  include/sourcemeta/jsontoolkit/jsonschema/resolver.h
  include/sourcemeta/jsontoolkit/jsonschema/walker.h
  include/sourcemeta/jsontoolkit/jsonschema/default_walker.h
  include/sourcemeta/jsontoolkit/jsonschema/default_resolver.h
  include/sourcemeta/jsontoolkit/jsonschema/error.h
  jsonschema.cc default_metaschemas.h.in
  default_walker.cc default_resolver.cc)
add_library(sourcemeta::jsontoolkit::jsonschema ALIAS sourcemeta_jsontoolkit_jsonschema)
set_target_properties(sourcemeta_jsontoolkit_jsonschema
  PROPERTIES PUBLIC_HEADER "${CMAKE_CURRENT_SOURCE_DIR}/include/sourcemeta/jsontoolkit/jsonschema.h"
  OUTPUT_NAME sourcemeta-jsontoolkit-jsonschema
  EXPORT_NAME jsontoolkit::jsonschema)

target_include_directories(sourcemeta_jsontoolkit_jsonschema
  PUBLIC
    "$<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>"
    "$<INSTALL_INTERFACE:${CMAKE_INSTALL_INCLUDEDIR}>")
target_link_libraries(sourcemeta_jsontoolkit_jsonschema PUBLIC
  sourcemeta::jsontoolkit::json)

# To find the generated metaschemas file
target_include_directories(sourcemeta_jsontoolkit_jsonschema
  PRIVATE "${CMAKE_CURRENT_BINARY_DIR}")

# GCC does not allow the use of std::promise, std::future
# without compiling with pthreads support.
if(CMAKE_CXX_COMPILER_ID STREQUAL "GNU")
  set(CMAKE_THREAD_PREFER_PTHREAD TRUE)
  set(THREADS_PREFER_PTHREAD_FLAG TRUE)
  find_package(Threads REQUIRED)
  target_link_libraries(sourcemeta_jsontoolkit_jsonschema PUBLIC Threads::Threads)
endif()

# Installation
install(TARGETS sourcemeta_jsontoolkit_jsonschema
  EXPORT sourcemeta_jsontoolkit_jsonschema
  ARCHIVE DESTINATION "${CMAKE_INSTALL_LIBDIR}" COMPONENT jsontoolkit
  PUBLIC_HEADER DESTINATION "${CMAKE_INSTALL_INCLUDEDIR}/sourcemeta/jsontoolkit" COMPONENT jsontoolkit)
install(EXPORT sourcemeta_jsontoolkit_jsonschema
  DESTINATION "${CMAKE_INSTALL_LIBDIR}/cmake/${PROJECT_NAME}"
  NAMESPACE sourcemeta::
  COMPONENT jsontoolkit)
