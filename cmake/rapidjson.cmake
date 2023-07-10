if(NOT JSONTOOLKIT_BACKEND_PATH OR JSONTOOLKIT_BACKEND_PATH STREQUAL "")
  # RapidJSON's find package implementation populates RAPIDJSON_INCLUDE_DIRS
  # See https://github.com/rjeczalik/rapidjson/blob/master/cmake/Findrapidjson.cmake
  find_package(RapidJSON CONFIG REQUIRED)
else()
  set(RAPIDJSON_INCLUDE_DIRS "${JSONTOOLKIT_BACKEND_PATH}/include")
endif()

# RapidJSON through VCPKG already declares the `rapidjson` library
if(NOT TARGET rapidjson)
  add_library(rapidjson INTERFACE)
  target_include_directories(rapidjson INTERFACE "${RAPIDJSON_INCLUDE_DIRS}")
  # We need RapidJSON to be part of an export set in order to export
  # targets that depend on it. That said, we never install this component.
  install(TARGETS rapidjson EXPORT rapidjson COMPONENT rapidjson)
  install(EXPORT rapidjson
    DESTINATION "${CMAKE_INSTALL_LIBDIR}/cmake/rapidjson"
    COMPONENT rapidjson
    EXCLUDE_FROM_ALL)
endif()

# Build RapidJSON using std::string
target_compile_definitions(rapidjson INTERFACE RAPIDJSON_HAS_STDSTRING)

