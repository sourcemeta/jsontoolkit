cmake_minimum_required(VERSION 3.16)
project(noa VERSION 0.0.0 LANGUAGES CXX
  DESCRIPTION "The swiss-army knife for JSON programming in C++")
list(APPEND CMAKE_MODULE_PATH "${PROJECT_SOURCE_DIR}/cmake")
include(noa)

# Options
option(NOA_GOOGLETEST "Build the Google Test library" ON)

if(NOA_GOOGLETEST)
  find_package(GoogleTest REQUIRED)
  enable_testing()
endif()
