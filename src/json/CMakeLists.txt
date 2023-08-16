set(JSON_PUBLIC_HEADERS include/sourcemeta/jsontoolkit/json.h)
set(JSON_PRIVATE_HEADERS
  include/sourcemeta/jsontoolkit/json_array.h
  include/sourcemeta/jsontoolkit/json_error.h
  include/sourcemeta/jsontoolkit/json_object.h
  include/sourcemeta/jsontoolkit/json_value.h
  "${CMAKE_CURRENT_BINARY_DIR}/json_export.h")

add_library(sourcemeta_jsontoolkit_json
  ${JSON_PUBLIC_HEADERS} ${JSON_PRIVATE_HEADERS}
  grammar.h parser.h stringify.h json.cc)
add_library(sourcemeta::jsontoolkit::json
  ALIAS sourcemeta_jsontoolkit_json)
target_include_directories(sourcemeta_jsontoolkit_json
  PUBLIC
    "$<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>"
    "$<INSTALL_INTERFACE:${CMAKE_INSTALL_INCLUDEDIR}>")
set_target_properties(sourcemeta_jsontoolkit_json PROPERTIES
  OUTPUT_NAME sourcemeta_jsontoolkit_json
  PUBLIC_HEADER "${JSON_PUBLIC_HEADERS}"
  PRIVATE_HEADER "${JSON_PRIVATE_HEADERS}"
  EXPORT_NAME jsontoolkit::json
  FOLDER "JSON Toolkit/JSON")

include(GenerateExportHeader)
generate_export_header(sourcemeta_jsontoolkit_json
  EXPORT_FILE_NAME json_export.h)
set_target_properties(sourcemeta_jsontoolkit_json PROPERTIES
  SOVERSION "${PROJECT_VERSION_MAJOR}"
  VERSION "${PROJECT_VERSION}")

# To find the generated files
target_include_directories(sourcemeta_jsontoolkit_json
  PUBLIC "$<BUILD_INTERFACE:${CMAKE_CURRENT_BINARY_DIR}>")

# Installation
include(GNUInstallDirs)
install(TARGETS sourcemeta_jsontoolkit_json
  EXPORT sourcemeta_jsontoolkit_json
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
install(EXPORT sourcemeta_jsontoolkit_json
  DESTINATION "${CMAKE_INSTALL_LIBDIR}/cmake/${PROJECT_NAME}"
  NAMESPACE sourcemeta::
  COMPONENT sourcemeta_jsontoolkit_dev)
