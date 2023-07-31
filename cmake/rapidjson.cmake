# RapidJSON's find package implementation populates RAPIDJSON_INCLUDE_DIRS
# See https://github.com/rjeczalik/rapidjson/blob/master/cmake/Findrapidjson.cmake
find_package(RapidJSON CONFIG REQUIRED)

# RapidJSON through VCPKG already declares the `rapidjson` library
if(NOT TARGET rapidjson)
  add_library(rapidjson INTERFACE IMPORTED)
  set_property(TARGET rapidjson PROPERTY
    INTERFACE_INCLUDE_DIRECTORIES ${RAPIDJSON_INCLUDE_DIRS})
endif()

# Build RapidJSON using std::string
target_compile_definitions(rapidjson INTERFACE RAPIDJSON_HAS_STDSTRING)
