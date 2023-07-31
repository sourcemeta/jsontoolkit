include("${CMAKE_CURRENT_SOURCE_DIR}/metaschemas.cmake")
configure_file(default_metaschemas.h.in default_metaschemas.h @ONLY)

function(noa_isomorphic_library)
  cmake_parse_arguments(NOA_ISOMORPHIC_LIBRARY ""
    "NAME;COMPONENT;VERSION;INCLUDE_DIRECTORY" "SOURCES" ${ARGN})
  add_library("${NOA_ISOMORPHIC_LIBRARY_NAME}" ${NOA_ISOMORPHIC_LIBRARY_SOURCES})

  include(GNUInstallDirs)
  target_include_directories("${NOA_ISOMORPHIC_LIBRARY_NAME}"
    PUBLIC
      "$<BUILD_INTERFACE:${NOA_ISOMORPHIC_LIBRARY_INCLUDE_DIRECTORY}>"
      "$<INSTALL_INTERFACE:${CMAKE_INSTALL_INCLUDEDIR}>")

  # TODO: Ensure there is always at least one underscore component
  # Add a "::" alias
  string(REPLACE "_" "::" LIBRARY_ALIAS "${NOA_ISOMORPHIC_LIBRARY_NAME}")
  add_library("${LIBRARY_ALIAS}" ALIAS "${NOA_ISOMORPHIC_LIBRARY_NAME}")

  # Version
  # TODO: Check that this was found
  string(FIND "${NOA_ISOMORPHIC_LIBRARY_VERSION}" "." MAJOR_VERSION_END)
  string(SUBSTRING "${NOA_ISOMORPHIC_LIBRARY_VERSION}"
    0 "${MAJOR_VERSION_END}" MAJOR_VERSION)
  set_target_properties("${NOA_ISOMORPHIC_LIBRARY_NAME}" PROPERTIES
    SOVERSION "${MAJOR_VERSION}"
    VERSION "${NOA_ISOMORPHIC_LIBRARY_VERSION}")

  # Export header
  include(GenerateExportHeader)
  generate_export_header("${NOA_ISOMORPHIC_LIBRARY_NAME}")
  # To find the export header file
  target_include_directories("${NOA_ISOMORPHIC_LIBRARY_NAME}"
    PUBLIC "$<BUILD_INTERFACE:${CMAKE_CURRENT_BINARY_DIR}>")

  # Installation
  install(TARGETS "${NOA_ISOMORPHIC_LIBRARY_NAME}"
    EXPORT "${NOA_ISOMORPHIC_LIBRARY_NAME}"
    # For DLLs on Windows
    RUNTIME DESTINATION "${CMAKE_INSTALL_BINDIR}"
            COMPONENT "${NOA_ISOMORPHIC_LIBRARY_COMPONENT}"
    # For shared libraries on non-Windows
    LIBRARY DESTINATION "${CMAKE_INSTALL_LIBDIR}"
            COMPONENT "${NOA_ISOMORPHIC_LIBRARY_COMPONENT}"
            NAMELINK_COMPONENT "${NOA_ISOMORPHIC_LIBRARY_COMPONENT}_dev"
    # For static libraries
    ARCHIVE DESTINATION "${CMAKE_INSTALL_LIBDIR}"
            COMPONENT "${NOA_ISOMORPHIC_LIBRARY_COMPONENT}_dev")
endfunction()

noa_isomorphic_library(
  NAME sourcemeta_jsontoolkit_jsonschema
  VERSION "${PROJECT_VERSION}"
  INCLUDE_DIRECTORY "${CMAKE_CURRENT_SOURCE_DIR}/include"
  SOURCES
    include/sourcemeta/jsontoolkit/jsonschema.h
    include/sourcemeta/jsontoolkit/jsonschema/resolver.h
    include/sourcemeta/jsontoolkit/jsonschema/walker.h
    include/sourcemeta/jsontoolkit/jsonschema/default_walker.h
    include/sourcemeta/jsontoolkit/jsonschema/default_resolver.h
    include/sourcemeta/jsontoolkit/jsonschema/error.h
    jsonschema.cc default_metaschemas.h.in
    default_walker.cc default_resolver.cc)

# TODO: Include these on the macro too
set_target_properties(sourcemeta_jsontoolkit_jsonschema
  PROPERTIES
  OUTPUT_NAME sourcemeta_jsontoolkit_jsonschema
  EXPORT_NAME jsontoolkit::jsonschema)
install(FILES
  "${CMAKE_CURRENT_BINARY_DIR}/sourcemeta_jsontoolkit_jsonschema_export.h"
  DESTINATION "${CMAKE_INSTALL_INCLUDEDIR}/sourcemeta/jsontoolkit"
  COMPONENT sourcemeta_jsontoolkit_dev)
install(EXPORT sourcemeta_jsontoolkit_jsonschema
  DESTINATION "${CMAKE_INSTALL_LIBDIR}/cmake/${PROJECT_NAME}"
  NAMESPACE sourcemeta::
  COMPONENT sourcemeta_jsontoolkit_dev)

target_link_libraries(sourcemeta_jsontoolkit_jsonschema PUBLIC
  sourcemeta::jsontoolkit::json)

# GCC does not allow the use of std::promise, std::future
# without compiling with pthreads support.
if(CMAKE_CXX_COMPILER_ID STREQUAL "GNU")
  set(CMAKE_THREAD_PREFER_PTHREAD TRUE)
  set(THREADS_PREFER_PTHREAD_FLAG TRUE)
  find_package(Threads REQUIRED)
  target_link_libraries(sourcemeta_jsontoolkit_jsonschema PUBLIC Threads::Threads)
endif()
