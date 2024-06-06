cmake_minimum_required(VERSION 3.22)
project(jsontoolkit VERSION 2.0.0 LANGUAGES CXX)
list(APPEND CMAKE_MODULE_PATH "${PROJECT_SOURCE_DIR}/cmake")
include(vendor/noa/cmake/noa.cmake)
include(cmake/CompilerOptions.cmake)

find_package(GoogleTest REQUIRED)
enable_testing()

add_subdirectory(test/json)
