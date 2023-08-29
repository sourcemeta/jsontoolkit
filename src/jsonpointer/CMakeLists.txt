set(JSONPOINTER_PUBLIC_HEADERS include/sourcemeta/jsontoolkit/jsonpointer.h)

set(JSONPOINTER_PRIVATE_HEADERS
  include/sourcemeta/jsontoolkit/jsonpointer_pointer.h
  include/sourcemeta/jsontoolkit/jsonpointer_error.h
  include/sourcemeta/jsontoolkit/jsonpointer_token.h
  "${CMAKE_CURRENT_BINARY_DIR}/jsonpointer_export.h")

add_library(sourcemeta_jsontoolkit_jsonpointer
  ${JSONPOINTER_PUBLIC_HEADERS} ${JSONPOINTER_PRIVATE_HEADERS}
  jsonpointer.cc stringify.h parser.h grammar.h)
sourcemeta_jsontoolkit_add_compile_options(sourcemeta_jsontoolkit_jsonpointer)
add_library(sourcemeta::jsontoolkit::jsonpointer
  ALIAS sourcemeta_jsontoolkit_jsonpointer)
target_include_directories(sourcemeta_jsontoolkit_jsonpointer
  PUBLIC
    "$<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>"
    "$<INSTALL_INTERFACE:${CMAKE_INSTALL_INCLUDEDIR}>")
set_target_properties(sourcemeta_jsontoolkit_jsonpointer PROPERTIES
  OUTPUT_NAME sourcemeta_jsontoolkit_jsonpointer
  PUBLIC_HEADER "${JSONPOINTER_PUBLIC_HEADERS}"
  PRIVATE_HEADER "${JSONPOINTER_PRIVATE_HEADERS}"
  EXPORT_NAME jsontoolkit::jsonpointer
  FOLDER "JSON Toolkit/JSON Pointer")

include(GenerateExportHeader)
generate_export_header(sourcemeta_jsontoolkit_jsonpointer
  EXPORT_FILE_NAME jsonpointer_export.h)
set_target_properties(sourcemeta_jsontoolkit_jsonpointer PROPERTIES
  SOVERSION "${PROJECT_VERSION_MAJOR}"
  VERSION "${PROJECT_VERSION}")

target_link_libraries(sourcemeta_jsontoolkit_jsonpointer PUBLIC
  sourcemeta::jsontoolkit::json)

# To find the generated files
target_include_directories(sourcemeta_jsontoolkit_jsonpointer
  PUBLIC "$<BUILD_INTERFACE:${CMAKE_CURRENT_BINARY_DIR}>")

# Installation
include(GNUInstallDirs)
install(TARGETS sourcemeta_jsontoolkit_jsonpointer
  EXPORT sourcemeta_jsontoolkit_jsonpointer
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
install(EXPORT sourcemeta_jsontoolkit_jsonpointer
  DESTINATION "${CMAKE_INSTALL_LIBDIR}/cmake/${PROJECT_NAME}"
  NAMESPACE sourcemeta::
  COMPONENT sourcemeta_jsontoolkit_dev)
