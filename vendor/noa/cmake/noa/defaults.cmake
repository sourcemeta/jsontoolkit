# Hide symbols from shared libraries by default
set(CMAKE_VISIBILITY_INLINES_HIDDEN YES)
if("CXX" IN_LIST NOA_LANGUAGES)
  set(CMAKE_CXX_VISIBILITY_PRESET hidden)
endif()

# By default, stay within ISO C++
if("CXX" IN_LIST NOA_LANGUAGES)
  set(CMAKE_CXX_STANDARD_REQUIRED ON)
  set(CMAKE_CXX_EXTENSIONS OFF)
endif()

# Export compile commands by default.
# It is very useful for IDE integration, linting, etc
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
