cmake_minimum_required(VERSION 3.21)
project("JSON Toolkit" VERSION 0.0.1 LANGUAGES CXX 
  DESCRIPTION "A multi-backend JSON library for modern C++")

# Global options
set(JSONTOOLKIT_CXX_FLAGS -Wall -Wextra -Werror -Wpedantic 
  -Wshadow -Wdouble-promotion -Wconversion -Wunused-parameter)

# Specify the C++ standard
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

# Backends
set(JSONTOOLKIT_BACKEND "rapidjson" CACHE STRING "Select the JSON backend")
if(JSONTOOLKIT_BACKEND STREQUAL "rapidjson")
  add_subdirectory(./backends/rapidjson)
else()
  message(FATAL_ERROR "Invalid JSON backend: ${JSONTOOLKIT_BACKEND}")
endif()

# Common
set_target_properties(sourcemeta_jsontoolkit
  PROPERTIES PUBLIC_HEADER "${PROJECT_SOURCE_DIR}/include/jsontoolkit/json.h")
target_include_directories(sourcemeta_jsontoolkit
  PRIVATE "$<BUILD_INTERFACE:${PROJECT_SOURCE_DIR}/include>")
string(TOUPPER ${JSONTOOLKIT_BACKEND} JSONTOOLKIT_BACKEND_UPPER)
target_compile_definitions(sourcemeta_jsontoolkit 
  PRIVATE JSONTOOLKIT_BACKEND_${JSONTOOLKIT_BACKEND_UPPER})

# Installation
include(GNUInstallDirs)
target_include_directories(sourcemeta_jsontoolkit
  INTERFACE
    "$<BUILD_INTERFACE:${PROJECT_SOURCE_DIR}/include>"
    "$<INSTALL_INTERFACE:${CMAKE_INSTALL_INCLUDEDIR}>")
install(TARGETS sourcemeta_jsontoolkit
  EXPORT sourcemeta_jsontoolkit
  ARCHIVE DESTINATION "${CMAKE_INSTALL_LIBDIR}"
  COMPONENT jsontoolkit
  PUBLIC_HEADER DESTINATION "${CMAKE_INSTALL_INCLUDEDIR}/jsontoolkit")

if(PROJECT_IS_TOP_LEVEL)
  enable_testing()
  include(GoogleTest)
  find_package(GTest REQUIRED)
  file(GLOB_RECURSE JSONTOOLKIT_CXX_FILES 
    include/*.h backends/*.cc backends/*.h)
  find_program(CLANG_FORMAT_BIN NAMES clang-format)
  if(CLANG_FORMAT_BIN)
    add_custom_target(clang_format
      WORKING_DIRECTORY "${PROJECT_SOURCE_DIR}"
      VERBATIM
      COMMAND "${CLANG_FORMAT_BIN}" --style=file
      -i ${JSONTOOLKIT_CXX_FILES})
    add_custom_target(clang_format_test
      WORKING_DIRECTORY ${PROJECT_SOURCE_DIR}
      VERBATIM
      COMMAND "${CLANG_FORMAT_BIN}" --style=file
      --dry-run -Werror
      -i ${JSONTOOLKIT_CXX_FILES})
  else()
    message(WARNING "clang-format: command not found")
  endif()
endif()
