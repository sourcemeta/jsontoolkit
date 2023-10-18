include(./metaschemas.cmake)
configure_file(official_resolver.in.cc official_resolver.cc @ONLY)

set(JSONSCHEMA_PUBLIC_HEADERS
  include/sourcemeta/jsontoolkit/jsonschema.h)
set(JSONSCHEMA_PRIVATE_HEADERS
  include/sourcemeta/jsontoolkit/jsonschema_anchor.h
  include/sourcemeta/jsontoolkit/jsonschema_resolver.h
  include/sourcemeta/jsontoolkit/jsonschema_walker.h
  include/sourcemeta/jsontoolkit/jsonschema_error.h
  "${CMAKE_CURRENT_BINARY_DIR}/jsonschema_export.h")

add_library(sourcemeta_jsontoolkit_jsonschema
  ${JSONSCHEMA_PUBLIC_HEADERS}
  ${JSONSCHEMA_PRIVATE_HEADERS}
  jsonschema.cc default_walker.cc anchor.cc walker.cc
  "${CMAKE_CURRENT_BINARY_DIR}/official_resolver.cc")
sourcemeta_jsontoolkit_add_compile_options(sourcemeta_jsontoolkit_jsonschema)
add_library(sourcemeta::jsontoolkit::jsonschema ALIAS sourcemeta_jsontoolkit_jsonschema)

set_target_properties(sourcemeta_jsontoolkit_jsonschema PROPERTIES
  OUTPUT_NAME sourcemeta_jsontoolkit_jsonschema
  PUBLIC_HEADER "${JSONSCHEMA_PUBLIC_HEADERS}"
  PRIVATE_HEADER "${JSONSCHEMA_PRIVATE_HEADERS}"
  EXPORT_NAME jsontoolkit::jsonschema
  FOLDER "JSON Toolkit/JSON Schema")

target_include_directories(sourcemeta_jsontoolkit_jsonschema
  PUBLIC
    "$<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>"
    "$<INSTALL_INTERFACE:${CMAKE_INSTALL_INCLUDEDIR}>")
target_link_libraries(sourcemeta_jsontoolkit_jsonschema PUBLIC
  sourcemeta::jsontoolkit::json)
target_link_libraries(sourcemeta_jsontoolkit_jsonschema PUBLIC
  sourcemeta::jsontoolkit::jsonpointer)

include(GenerateExportHeader)
generate_export_header(sourcemeta_jsontoolkit_jsonschema
  EXPORT_FILE_NAME jsonschema_export.h)
set_target_properties(sourcemeta_jsontoolkit_jsonschema PROPERTIES
  SOVERSION "${PROJECT_VERSION_MAJOR}"
  VERSION "${PROJECT_VERSION}")

# To find the generated files
target_include_directories(sourcemeta_jsontoolkit_jsonschema
  PUBLIC "$<BUILD_INTERFACE:${CMAKE_CURRENT_BINARY_DIR}>")

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
  PUBLIC_HEADER DESTINATION "${CMAKE_INSTALL_INCLUDEDIR}/sourcemeta/jsontoolkit"
    COMPONENT sourcemeta_jsontoolkit_dev
  PRIVATE_HEADER DESTINATION "${CMAKE_INSTALL_INCLUDEDIR}/sourcemeta/jsontoolkit"
    COMPONENT sourcemeta_jsontoolkit_dev
  RUNTIME DESTINATION "${CMAKE_INSTALL_BINDIR}"
    COMPONENT sourcemeta_jsontoolkit
  LIBRARY DESTINATION "${CMAKE_INSTALL_LIBDIR}"
    COMPONENT sourcemeta_jsontoolkit
    NAMELINK_COMPONENT sourcemeta_jsontoolkit_dev
  ARCHIVE DESTINATION "${CMAKE_INSTALL_LIBDIR}"
    COMPONENT sourcemeta_jsontoolkit_dev)
install(EXPORT sourcemeta_jsontoolkit_jsonschema
  DESTINATION "${CMAKE_INSTALL_LIBDIR}/cmake/${PROJECT_NAME}"
  NAMESPACE sourcemeta::
  COMPONENT sourcemeta_jsontoolkit_dev)
