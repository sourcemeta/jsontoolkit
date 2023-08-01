include("${CMAKE_CURRENT_SOURCE_DIR}/metaschemas.cmake")
configure_file(default_metaschemas.h.in default_metaschemas.h @ONLY)

function(noa_isomorphic_library)
  cmake_parse_arguments(NOA_ISOMORPHIC_LIBRARY ""
    "NAME;COMPONENT;VERSION;INCLUDE_DIRECTORY;INCLUDE_NAMESPACE;FOLDER" "SOURCES" ${ARGN})

  # (1) Declare the library target
  add_library("${NOA_ISOMORPHIC_LIBRARY_NAME}" ${NOA_ISOMORPHIC_LIBRARY_SOURCES})

  # TODO: Ensure there is always at least one underscore component
  # Add a "::" alias
  string(REPLACE "_" "::" LIBRARY_ALIAS "${NOA_ISOMORPHIC_LIBRARY_NAME}")
  add_library("${LIBRARY_ALIAS}" ALIAS "${NOA_ISOMORPHIC_LIBRARY_NAME}")

  # Split target on the root namespace
  string(FIND "${LIBRARY_ALIAS}" "::" ROOT_NAMESPACE_END)
  string(SUBSTRING "${LIBRARY_ALIAS}" 0 "${ROOT_NAMESPACE_END}" ROOT_NAMESPACE)
  math(EXPR TAIL_NAMESPACE_START "${ROOT_NAMESPACE_END} + 2")
  string(SUBSTRING "${LIBRARY_ALIAS}" "${TAIL_NAMESPACE_START}" -1 TAIL_NAMESPACE)

  include(GNUInstallDirs)
  target_include_directories("${NOA_ISOMORPHIC_LIBRARY_NAME}"
    PUBLIC
      "$<BUILD_INTERFACE:${NOA_ISOMORPHIC_LIBRARY_INCLUDE_DIRECTORY}>"
      "$<INSTALL_INTERFACE:${CMAKE_INSTALL_INCLUDEDIR}>")

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
  # TODO: Improve the name of this export header. Maybe only `export.h`?
  # TODO: Check that INCLUDE_NAMESPACE exists
  install(FILES
    "${CMAKE_CURRENT_BINARY_DIR}/${NOA_ISOMORPHIC_LIBRARY_NAME}_export.h"
    DESTINATION "${CMAKE_INSTALL_INCLUDEDIR}/${NOA_ISOMORPHIC_LIBRARY_INCLUDE_NAMESPACE}"
    COMPONENT "${NOA_ISOMORPHIC_LIBRARY_COMPONENT}_dev")
  # To find the export header file
  # TODO: Locate the export header in a nice isolated subdirectory
  target_include_directories("${NOA_ISOMORPHIC_LIBRARY_NAME}"
    PUBLIC "$<BUILD_INTERFACE:${CMAKE_CURRENT_BINARY_DIR}>")

  # Set misc target properties
  set_target_properties("${NOA_ISOMORPHIC_LIBRARY_NAME}" PROPERTIES
    OUTPUT_NAME "${NOA_ISOMORPHIC_LIBRARY_NAME}"
    EXPORT_NAME "${TAIL_NAMESPACE}"
    # For IDE integration
    FOLDER "${NOA_ISOMORPHIC_LIBRARY_FOLDER}")

  # Installation
  # TODO: Check component is defined
  install(TARGETS "${NOA_ISOMORPHIC_LIBRARY_NAME}"
    EXPORT "${NOA_ISOMORPHIC_LIBRARY_NAME}"
    # Be explicit on header location
    PUBLIC_HEADER DESTINATION "${CMAKE_INSTALL_INCLUDEDIR}"
            COMPONENT "${NOA_ISOMORPHIC_LIBRARY_COMPONENT}_dev"
    PRIVATE_HEADER DESTINATION "${CMAKE_INSTALL_INCLUDEDIR}"
            COMPONENT "${NOA_ISOMORPHIC_LIBRARY_COMPONENT}_dev"
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
  # Install export
  install(EXPORT "${NOA_ISOMORPHIC_LIBRARY_NAME}"
    DESTINATION "${CMAKE_INSTALL_LIBDIR}/cmake/${PROJECT_NAME}"
    NAMESPACE "${ROOT_NAMESPACE}::"
    COMPONENT "${NOA_ISOMORPHIC_LIBRARY_COMPONENT}_dev")
endfunction()

noa_isomorphic_library(
  NAME sourcemeta_jsontoolkit_jsonschema
  COMPONENT sourcemeta_jsontoolkit
  VERSION "${PROJECT_VERSION}"
  # TODO: Set to sourcemeta/jsontoolkit/jsonschema
  INCLUDE_NAMESPACE "sourcemeta/jsontoolkit"
  INCLUDE_DIRECTORY "${CMAKE_CURRENT_SOURCE_DIR}/include"
  FOLDER "JSON Toolkit/JSON Schema"
  SOURCES
    include/sourcemeta/jsontoolkit/jsonschema.h
    include/sourcemeta/jsontoolkit/jsonschema/resolver.h
    include/sourcemeta/jsontoolkit/jsonschema/walker.h
    include/sourcemeta/jsontoolkit/jsonschema/default_walker.h
    include/sourcemeta/jsontoolkit/jsonschema/default_resolver.h
    include/sourcemeta/jsontoolkit/jsonschema/error.h
    jsonschema.cc default_metaschemas.h.in
    default_walker.cc default_resolver.cc)

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
