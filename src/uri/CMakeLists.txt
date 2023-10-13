set(URI_PUBLIC_HEADERS include/sourcemeta/jsontoolkit/uri.h)
set(URI_PRIVATE_HEADERS
  include/sourcemeta/jsontoolkit/uri_error.h
  "${CMAKE_CURRENT_BINARY_DIR}/uri_export.h")

add_library(sourcemeta_jsontoolkit_uri
  ${URI_PUBLIC_HEADERS} ${URI_PRIVATE_HEADERS} uri.cc escaping.cc)
sourcemeta_jsontoolkit_add_compile_options(sourcemeta_jsontoolkit_uri)
add_library(sourcemeta::jsontoolkit::uri
  ALIAS sourcemeta_jsontoolkit_uri)
target_include_directories(sourcemeta_jsontoolkit_uri
  PUBLIC
    "$<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>"
    "$<INSTALL_INTERFACE:${CMAKE_INSTALL_INCLUDEDIR}>")
set_target_properties(sourcemeta_jsontoolkit_uri PROPERTIES
  OUTPUT_NAME sourcemeta_jsontoolkit_uri
  PUBLIC_HEADER "${URI_PUBLIC_HEADERS}"
  PRIVATE_HEADER "${URI_PRIVATE_HEADERS}"
  EXPORT_NAME jsontoolkit::uri
  FOLDER "JSON Toolkit/URI")

target_link_libraries(sourcemeta_jsontoolkit_uri
  PRIVATE uriparser::uriparser)

include(GenerateExportHeader)
generate_export_header(sourcemeta_jsontoolkit_uri
  EXPORT_FILE_NAME uri_export.h)
set_target_properties(sourcemeta_jsontoolkit_uri PROPERTIES
  SOVERSION "${PROJECT_VERSION_MAJOR}"
  VERSION "${PROJECT_VERSION}")

# To find the generated files
target_include_directories(sourcemeta_jsontoolkit_uri
  PUBLIC "$<BUILD_INTERFACE:${CMAKE_CURRENT_BINARY_DIR}>")

# Installation
include(GNUInstallDirs)
install(TARGETS sourcemeta_jsontoolkit_uri
  EXPORT sourcemeta_jsontoolkit_uri
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
install(EXPORT sourcemeta_jsontoolkit_uri
  DESTINATION "${CMAKE_INSTALL_LIBDIR}/cmake/${PROJECT_NAME}"
  NAMESPACE sourcemeta::
  COMPONENT sourcemeta_jsontoolkit_dev)
