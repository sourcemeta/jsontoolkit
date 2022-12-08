cmake_minimum_required(VERSION 3.21)
project("JSON Toolkit" VERSION 0.0.1 LANGUAGES CXX 
  DESCRIPTION "A multi-backend JSON library for modern C++")

# Global options
set(JSONTOOLKIT_CXX_FLAGS -Wall -Wextra -Werror -Wpedantic 
  -Wshadow -Wdouble-promotion -Wconversion -Wunused-parameter)

# Specify the C++ standard
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

# Options
set(JSONTOOLKIT_BACKEND "rapidjson" CACHE STRING "Select the JSON backend")

if(JSONTOOLKIT_BACKEND STREQUAL "rapidjson")
  add_subdirectory(./backends/rapidjson)
else()
  message(FATAL_ERROR "Invalid JSON backend: ${JSONTOOLKIT_BACKEND}")
endif()
