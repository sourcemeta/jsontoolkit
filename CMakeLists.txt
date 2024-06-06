cmake_minimum_required(VERSION 3.22)
project(jsontoolkit VERSION 2.0.0 LANGUAGES CXX
  DESCRIPTION "The swiss-army knife for JSON programming in C++"
  HOMEPAGE_URL "https://jsontoolkit.sourcemeta.com")
list(APPEND CMAKE_MODULE_PATH "${PROJECT_SOURCE_DIR}/cmake")
include(vendor/noa/cmake/noa.cmake)
include(cmake/CompilerOptions.cmake)

# Options
option(JSONTOOLKIT_URI "Build the JSON Toolkit URI library" ON)
option(JSONTOOLKIT_JSON "Build the JSON Toolkit JSON library" ON)
option(JSONTOOLKIT_JSONSCHEMA "Build the JSON Toolkit JSON Schema library" ON)
option(JSONTOOLKIT_JSONPOINTER "Build the JSON Toolkit JSON Pointer library" ON)
option(JSONTOOLKIT_JSONL "Build the JSON Toolkit JSONL library" ON)
option(JSONTOOLKIT_TESTS "Build the JSON Toolkit tests" OFF)
option(JSONTOOLKIT_DOCS "Build the JSON Toolkit docs" OFF)
option(JSONTOOLKIT_INSTALL "Install the JSON Toolkit library" ON)
option(JSONTOOLKIT_ADDRESS_SANITIZER "Build JSON Toolkit with an address sanitizer" OFF)
option(JSONTOOLKIT_UNDEFINED_SANITIZER "Build JSON Toolkit with an undefined behavior sanitizer" OFF)

if(JSONTOOLKIT_JSON)
  add_subdirectory(src/json)
endif()

# Testing
if(JSONTOOLKIT_TESTS)
  find_package(GoogleTest REQUIRED)
  enable_testing()

  if(JSONTOOLKIT_JSON)
    add_subdirectory(test/json)
  endif()
endif()
