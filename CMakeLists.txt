cmake_minimum_required(VERSION 3.22)
project(example VERSION 1.0.0 LANGUAGES CXX)
include(vendor/noa/cmake/noa.cmake)
include(cmake/CompilerOptions.cmake)

enable_testing()
add_executable(example test.cc)
sourcemeta_jsontoolkit_add_compile_options(example)
add_test(NAME Example COMMAND example)
