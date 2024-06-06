cmake_minimum_required(VERSION 3.22)
project(jsontoolkit VERSION 2.0.0 LANGUAGES CXX)
list(APPEND CMAKE_MODULE_PATH "${PROJECT_SOURCE_DIR}/cmake")
include(vendor/noa/cmake/noa.cmake)
include(cmake/CompilerOptions.cmake)

find_package(GoogleTest REQUIRED)
enable_testing()

add_executable(example test.cc)
sourcemeta_jsontoolkit_add_compile_options(example)
target_link_libraries(example PRIVATE GTest::gtest GTest::gtest_main)
add_test(NAME Example COMMAND example --gtest_catch_exceptions=0)
