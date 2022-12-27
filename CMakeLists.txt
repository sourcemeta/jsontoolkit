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
option(JSONTOOLKIT_RAPIDJSON "Build with RapidJSON support" ON)

# JSON
set(JSONTOOLKIT_JSON_FILES
  include/jsontoolkit/read.h
  include/jsontoolkit/write.h
  include/jsontoolkit/iterators.h)
if(JSONTOOLKIT_RAPIDJSON)
  include(cmake/rapidjson.cmake)
  list(APPEND JSONTOOLKIT_JSON_FILES
    include/jsontoolkit/json/rapidjson/read.h
    include/jsontoolkit/json/rapidjson/write.h
    include/jsontoolkit/json/rapidjson/iterators.h)
endif()
add_library(sourcemeta_jsontoolkit_json INTERFACE ${JSONTOOLKIT_JSON_FILES})
target_include_directories(sourcemeta_jsontoolkit_json INTERFACE include)
if(JSONTOOLKIT_RAPIDJSON)
  target_link_libraries(sourcemeta_jsontoolkit_json INTERFACE rapidjson)
  target_compile_definitions(sourcemeta_jsontoolkit_json INTERFACE JSONTOOLKIT_RAPIDJSON)
endif()

if(PROJECT_IS_TOP_LEVEL)
  enable_testing()
  include(cmake/googletest.cmake)
  add_subdirectory(./test)
  include(cmake/clang-format.cmake)
endif()
