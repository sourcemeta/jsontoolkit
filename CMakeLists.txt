cmake_minimum_required(VERSION 3.22)
project(example VERSION 1.0.0 LANGUAGES CXX)
include(vendor/noa/cmake/noa.cmake)
enable_testing()
add_executable(example test.cc)
if(MSVC)
  target_compile_options(example PRIVATE
    /MP
    /sdl)
endif()
add_test(NAME Example COMMAND example)
