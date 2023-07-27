# Compiler detection (C++)
# TODO: Detect compilers on programming languages other than C++
if(CMAKE_CXX_COMPILER_ID STREQUAL "Clang" OR CMAKE_CXX_COMPILER_ID STREQUAL "AppleClang")
  set(NOA_COMPILER_LLVM ON)
elseif(CMAKE_CXX_COMPILER_ID STREQUAL "GNU")
  set(NOA_COMPILER_GCC ON)
elseif(MSVC)
  set(NOA_COMPILER_MSVC ON)
endif()
