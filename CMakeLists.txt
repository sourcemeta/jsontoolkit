cmake_minimum_required(VERSION 3.21)
project("JSON Toolkit" VERSION 0.0.1 LANGUAGES CXX
  DESCRIPTION "A multi-backend JSON library for modern C++")

# Global options
add_compile_options(-Wall -Wextra -Werror -Wpedantic
  -Wshadow -Wdouble-promotion -Wconversion -Wunused-parameter)

# Specify the C++ standard
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

# Options
set(JSONTOOLKIT_BACKEND "rapidjson" CACHE STRING "Set the JSON Toolkit backend")
option(JSONTOOLKIT_TESTS "Build the JSON Toolkit tests" ON)
option(JSONTOOLKIT_CONTRIB "Build the JSON Toolkit extra programs" ON)

if(PROJECT_IS_TOP_LEVEL)
  include(GNUInstallDirs)
endif()

# JSON
set(JSONTOOLKIT_JSON_META_HEADERS
  include/jsontoolkit/json/read.h
  include/jsontoolkit/json/write.h
  include/jsontoolkit/json/iterators.h)
set(JSONTOOLKIT_JSON_BACKEND_HEADERS
  include/jsontoolkit/json/${JSONTOOLKIT_BACKEND}/common.h
  include/jsontoolkit/json/${JSONTOOLKIT_BACKEND}/read.h
  include/jsontoolkit/json/${JSONTOOLKIT_BACKEND}/write.h
  include/jsontoolkit/json/${JSONTOOLKIT_BACKEND}/iterators.h)
add_library(sourcemeta_jsontoolkit_json INTERFACE
  include/jsontoolkit/json.h
  ${JSONTOOLKIT_JSON_META_HEADERS} ${JSONTOOLKIT_JSON_BACKEND_HEADERS})
set_target_properties(sourcemeta_jsontoolkit_json
  PROPERTIES PUBLIC_HEADER "${CMAKE_CURRENT_SOURCE_DIR}/include/jsontoolkit/json.h")
target_include_directories(sourcemeta_jsontoolkit_json
  INTERFACE
    "$<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>"
    "$<INSTALL_INTERFACE:${CMAKE_INSTALL_INCLUDEDIR}>")
include(cmake/${JSONTOOLKIT_BACKEND}.cmake)
string(TOUPPER ${JSONTOOLKIT_BACKEND} UPPER_JSONTOOLKIT_BACKEND)
target_compile_definitions(sourcemeta_jsontoolkit_json INTERFACE
  JSONTOOLKIT_BACKEND_${UPPER_JSONTOOLKIT_BACKEND})
target_link_libraries(sourcemeta_jsontoolkit_json INTERFACE
  ${JSONTOOLKIT_BACKEND})
install(TARGETS sourcemeta_jsontoolkit_json
  EXPORT sourcemeta_jsontoolkit_json
  ARCHIVE DESTINATION "${CMAKE_INSTALL_LIBDIR}"
  COMPONENT jsontoolkit
  PUBLIC_HEADER DESTINATION "${CMAKE_INSTALL_INCLUDEDIR}/jsontoolkit")
install(FILES ${JSONTOOLKIT_JSON_META_HEADERS}
  DESTINATION "${CMAKE_INSTALL_INCLUDEDIR}/jsontoolkit/json")
install(FILES ${JSONTOOLKIT_JSON_BACKEND_HEADERS}
  DESTINATION "${CMAKE_INSTALL_INCLUDEDIR}/jsontoolkit/json/${JSONTOOLKIT_BACKEND}")

if(JSONTOOLKIT_CONTRIB)
  add_subdirectory(./contrib/prettify)
  add_subdirectory(./contrib/minify)
endif()

if(PROJECT_IS_TOP_LEVEL)
  include(cmake/clang-format.cmake)
  if(JSONTOOLKIT_TESTS)
    enable_testing()
  endif()
endif()

if(JSONTOOLKIT_TESTS)
  include(cmake/googletest.cmake)
  add_subdirectory(./test)
  if(JSONTOOLKIT_CONTRIB)
    add_subdirectory(./test/contrib)
  endif()
endif()
