cmake_minimum_required(VERSION 3.22)
project(jsontoolkit VERSION 2.0.0 LANGUAGES CXX)
list(APPEND CMAKE_MODULE_PATH "${PROJECT_SOURCE_DIR}/cmake")
include(vendor/noa/cmake/noa.cmake)

find_package(GoogleTest REQUIRED)
enable_testing()

add_executable(example test.cc)
if(WIN32)
  target_compile_options(example PRIVATE
    /options:strict
    /permissive-
    /W4
    /WL
    /MP
    /sdl)
endif()

target_link_libraries(example PRIVATE GTest::gtest GTest::gtest_main)
add_test(NAME Example COMMAND example --gtest_catch_exceptions=0)
