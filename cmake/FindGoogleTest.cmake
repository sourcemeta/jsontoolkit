if(NOT GoogleTest_FOUND)
  # See https://github.com/google/googletest/blob/main/googletest/README.md#visual-studio-dynamic-vs-static-runtimes
  set(gtest_force_shared_crt ON CACHE BOOL "" FORCE)
  set(BUILD_GMOCK OFF CACHE BOOL "disable googlemock")
  set(INSTALL_GTEST OFF CACHE BOOL "disable installation")
  add_subdirectory("${PROJECT_SOURCE_DIR}/vendor/googletest")
  set(GoogleTest_FOUND ON)
endif()
