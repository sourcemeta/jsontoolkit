cmake_minimum_required(VERSION 3.22)
project(example VERSION 1.0.0 LANGUAGES CXX)
include(vendor/noa/cmake/noa.cmake)

set(BUILD_GMOCK OFF CACHE BOOL "disable googlemock")
set(INSTALL_GTEST OFF CACHE BOOL "disable installation")
add_subdirectory("${PROJECT_SOURCE_DIR}/vendor/googletest")

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
