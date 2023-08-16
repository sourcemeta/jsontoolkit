cmake_minimum_required(VERSION 3.24)
project(jsontoolkit VERSION 0.0.1 LANGUAGES CXX
  DESCRIPTION "The swiss-army knife for JSON programming in C++"
  HOMEPAGE_URL "https://jsontoolkit.sourcemeta.com")
list(APPEND CMAKE_MODULE_PATH "${PROJECT_SOURCE_DIR}/cmake")
include(vendor/noa/cmake/noa.cmake)
include(CompilerOptions)

# Options
option(JSONTOOLKIT_TESTS "Build the JSON Toolkit tests" OFF)
option(JSONTOOLKIT_CONTRIB "Build the JSON Toolkit extra programs" OFF)
option(JSONTOOLKIT_DOCS "Build the JSON Toolkit docs" OFF)
option(JSONTOOLKIT_ADDRESS_SANITIZER "Build JSON Toolkit with an address sanitizer" OFF)
option(JSONTOOLKIT_MEMORY_SANITIZER "Build JSON Toolkit with a memory sanitizer" OFF)

if(PROJECT_IS_TOP_LEVEL)
  include(GNUInstallDirs)
  include(CMakePackageConfigHelpers)
  configure_package_config_file(
    config.cmake.in
    "${CMAKE_CURRENT_BINARY_DIR}/${PROJECT_NAME}-config.cmake"
    INSTALL_DESTINATION "${CMAKE_INSTALL_LIBDIR}/cmake/${PROJECT_NAME}")
  write_basic_package_version_file(
    "${CMAKE_CURRENT_BINARY_DIR}/${PROJECT_NAME}-config-version.cmake"
    COMPATIBILITY SameMajorVersion)
  install(FILES
    "${CMAKE_CURRENT_BINARY_DIR}/${PROJECT_NAME}-config-version.cmake"
    "${CMAKE_CURRENT_BINARY_DIR}/${PROJECT_NAME}-config.cmake"
    DESTINATION "${CMAKE_INSTALL_LIBDIR}/cmake/${PROJECT_NAME}"
    COMPONENT sourcemeta_jsontoolkit_dev)
endif()

add_subdirectory(src/json)
add_subdirectory(src/jsonschema)

if(JSONTOOLKIT_ADDRESS_SANITIZER)
  noa_sanitizer(TYPE address TARGET sourcemeta_jsontoolkit_json)
  noa_sanitizer(TYPE address TARGET sourcemeta_jsontoolkit_jsonschema)
elseif(JSONTOOLKIT_MEMORY_SANITIZER)
  noa_sanitizer(TYPE memory TARGET sourcemeta_jsontoolkit_json)
  noa_sanitizer(TYPE memory TARGET sourcemeta_jsontoolkit_jsonschema)
endif()

if(JSONTOOLKIT_CONTRIB)
  add_subdirectory(./contrib/prettify)
  add_subdirectory(./contrib/minify)
  add_subdirectory(./contrib/jsonschema_walker)
  add_subdirectory(./contrib/jsonschema_keywords)
endif()

if(JSONTOOLKIT_DOCS)
  include(Doxygen)
endif()

if(PROJECT_IS_TOP_LEVEL)
  noa_target_clang_format(SOURCES
    src/*.h src/*.cc
    test/*.h test/*.cc
    contrib/*.h contrib/*.cc)
  noa_target_clang_tidy(SOURCES
    src/*.h src/*.cc)
endif()

# Testing
if(JSONTOOLKIT_TESTS)
  find_package(GoogleTest REQUIRED)
  enable_testing()
  add_subdirectory(test/json)
  add_subdirectory(test/jsonschema)
  if(JSONTOOLKIT_CONTRIB)
    add_subdirectory(./test/contrib)
  endif()

  if(PROJECT_IS_TOP_LEVEL)
    # Otherwise we need the child project to link
    # against the sanitizers too.
    if(NOT JSONTOOLKIT_ADDRESS_SANITIZER AND NOT JSONTOOLKIT_MEMORY_SANITIZER)
      add_subdirectory(./test/packaging)
    endif()
  endif()
endif()
