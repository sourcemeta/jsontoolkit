set(JSONTOOLKIT_JSON_META_HEADERS
  include/sourcemeta/jsontoolkit/json.h
  include/sourcemeta/jsontoolkit/json/read.h
  include/sourcemeta/jsontoolkit/json/write.h
  include/sourcemeta/jsontoolkit/json/iterators.h
  include/sourcemeta/jsontoolkit/json/error.h)
set(JSONTOOLKIT_JSON_BACKEND_HEADERS
  include/sourcemeta/jsontoolkit/json/${JSONTOOLKIT_BACKEND}/common.h
  include/sourcemeta/jsontoolkit/json/${JSONTOOLKIT_BACKEND}/read.h
  include/sourcemeta/jsontoolkit/json/${JSONTOOLKIT_BACKEND}/write.h
  include/sourcemeta/jsontoolkit/json/${JSONTOOLKIT_BACKEND}/iterators.h)
add_library(sourcemeta_jsontoolkit_json
  INTERFACE ${JSONTOOLKIT_JSON_META_HEADERS} ${JSONTOOLKIT_JSON_BACKEND_HEADERS})
add_library(sourcemeta::jsontoolkit::json ALIAS sourcemeta_jsontoolkit_json)
set_target_properties(sourcemeta_jsontoolkit_json
  PROPERTIES PUBLIC_HEADER "${CMAKE_CURRENT_SOURCE_DIR}/include/sourcemeta/jsontoolkit/json.h"
  OUTPUT_NAME sourcemeta_jsontoolkit_json
  EXPORT_NAME jsontoolkit::json)
target_include_directories(sourcemeta_jsontoolkit_json
  INTERFACE
    "$<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>"
    "$<INSTALL_INTERFACE:${CMAKE_INSTALL_INCLUDEDIR}>")
include("${PROJECT_SOURCE_DIR}/cmake/${JSONTOOLKIT_BACKEND}.cmake")
string(TOUPPER ${JSONTOOLKIT_BACKEND} UPPER_JSONTOOLKIT_BACKEND)
target_compile_definitions(sourcemeta_jsontoolkit_json INTERFACE
  JSONTOOLKIT_BACKEND_${UPPER_JSONTOOLKIT_BACKEND})
target_link_libraries(sourcemeta_jsontoolkit_json INTERFACE
  ${JSONTOOLKIT_BACKEND})

# Installation
install(TARGETS sourcemeta_jsontoolkit_json
  EXPORT sourcemeta_jsontoolkit_json
  ARCHIVE DESTINATION "${CMAKE_INSTALL_LIBDIR}"
  COMPONENT sourcemeta_jsontoolkit_dev
  PUBLIC_HEADER DESTINATION "${CMAKE_INSTALL_INCLUDEDIR}/sourcemeta/jsontoolkit"
  COMPONENT sourcemeta_jsontoolkit_dev)
install(FILES ${JSONTOOLKIT_JSON_META_HEADERS}
  DESTINATION "${CMAKE_INSTALL_INCLUDEDIR}/sourcemeta/jsontoolkit/json"
  COMPONENT sourcemeta_jsontoolkit_dev)
install(FILES ${JSONTOOLKIT_JSON_BACKEND_HEADERS}
  DESTINATION "${CMAKE_INSTALL_INCLUDEDIR}/sourcemeta/jsontoolkit/json/${JSONTOOLKIT_BACKEND}"
  COMPONENT sourcemeta_jsontoolkit_dev)
install(EXPORT sourcemeta_jsontoolkit_json
  DESTINATION "${CMAKE_INSTALL_LIBDIR}/cmake/${PROJECT_NAME}"
  NAMESPACE sourcemeta::
  COMPONENT sourcemeta_jsontoolkit_dev)
