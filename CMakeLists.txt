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

# JSON
add_library(sourcemeta_jsontoolkit_json INTERFACE
  include/jsontoolkit/json.h
  include/jsontoolkit/json/read.h
  include/jsontoolkit/json/write.h
  include/jsontoolkit/json/iterators.h
  include/jsontoolkit/json/${JSONTOOLKIT_BACKEND}/common.h
  include/jsontoolkit/json/${JSONTOOLKIT_BACKEND}/read.h
  include/jsontoolkit/json/${JSONTOOLKIT_BACKEND}/write.h
  include/jsontoolkit/json/${JSONTOOLKIT_BACKEND}/iterators.h)
target_include_directories(sourcemeta_jsontoolkit_json INTERFACE include)
include(cmake/${JSONTOOLKIT_BACKEND}.cmake)
string(TOUPPER ${JSONTOOLKIT_BACKEND} UPPER_JSONTOOLKIT_BACKEND)
target_compile_definitions(sourcemeta_jsontoolkit_json INTERFACE
  JSONTOOLKIT_BACKEND_${UPPER_JSONTOOLKIT_BACKEND})
target_link_libraries(sourcemeta_jsontoolkit_json INTERFACE
  ${JSONTOOLKIT_BACKEND})

if(PROJECT_IS_TOP_LEVEL)
  include(cmake/clang-format.cmake)
  if(JSONTOOLKIT_TESTS)
    enable_testing()
  endif()
endif()

if(JSONTOOLKIT_TESTS)
  include(cmake/googletest.cmake)
  add_subdirectory(./test)
endif()
