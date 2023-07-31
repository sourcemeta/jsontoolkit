cmake_minimum_required(VERSION 3.24)

# Needs to happen before the first call to "project()".
if(WIN32)
  include(cmake/vcpkg.cmake)
endif()

project(sourcemeta_jsontoolkit VERSION 0.0.1 LANGUAGES CXX
  DESCRIPTION "A multi-backend JSON library for modern C++"
  HOMEPAGE_URL "https://jsontoolkit.sourcemeta.com")
include(vendor/noa/cmake/noa.cmake)
include(cmake/compiler.cmake)

# Options
noa_option_enum(
  NAME JSONTOOLKIT_BACKEND
  DEFAULT rapidjson
  DESCRIPTION "Set the JSON Toolkit backend"
  CHOICES rapidjson)

# TODO: Remove this anti-pattern option
set(JSONTOOLKIT_BACKEND_PATH "" CACHE PATH "Set a custom path to the JSON Toolkit backend")
option(JSONTOOLKIT_TESTS "Build the JSON Toolkit tests" OFF)
option(JSONTOOLKIT_CONTRIB "Build the JSON Toolkit extra programs" OFF)
option(JSONTOOLKIT_WEBSITE "Build the JSON Toolkit website" OFF)

if(PROJECT_IS_TOP_LEVEL)
  include(GNUInstallDirs)
  install(FILES README.markdown
    DESTINATION "${CMAKE_INSTALL_DOCDIR}"
    COMPONENT sourcemeta_jsontoolkit)

  include(CMakePackageConfigHelpers)
  configure_package_config_file(
    cmake/config.cmake.in
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
  install(FILES
    "cmake/${JSONTOOLKIT_BACKEND}.cmake"
    DESTINATION "${CMAKE_INSTALL_LIBDIR}/cmake/${PROJECT_NAME}"
    COMPONENT sourcemeta_jsontoolkit_dev)
endif()

add_subdirectory(src/json)
add_subdirectory(src/jsonschema)

if(JSONTOOLKIT_CONTRIB)
  add_subdirectory(./contrib/prettify)
  add_subdirectory(./contrib/minify)
  add_subdirectory(./contrib/jsonschema_walker)
  add_subdirectory(./contrib/jsonschema_keywords)
endif()

if(PROJECT_IS_TOP_LEVEL)
  noa_target_clang_format(SOURCES
    src/*.h src/*.cc include/*.h
    test/*.cc test/*.h
    contrib/*.cc contrib/*.h)
  noa_target_clang_tidy(SOURCES
    src/*.h src/*.cc include/*.h contrib/*.cc)
  if(JSONTOOLKIT_WEBSITE)
    add_subdirectory(./www)
  endif()
  if(JSONTOOLKIT_TESTS)
    enable_testing()
  endif()
endif()

if(JSONTOOLKIT_TESTS)
  include(cmake/googletest.cmake)
  add_subdirectory(./test/json)
  add_subdirectory(./test/jsonschema)
  if(JSONTOOLKIT_CONTRIB)
    add_subdirectory(./test/contrib)
  endif()

  if(PROJECT_IS_TOP_LEVEL)
    add_subdirectory(./test/packaging)
  endif()
endif()
