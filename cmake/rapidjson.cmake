if(JSONTOOLKIT_BACKEND_PATH STREQUAL "")
  # RapidJSON's find package implementation populates RAPIDJSON_INCLUDE_DIRS
  # See https://github.com/rjeczalik/rapidjson/blob/master/cmake/Findrapidjson.cmake
  find_package(RapidJSON REQUIRED)
else()
  set(RAPIDJSON_INCLUDE_DIRS "${JSONTOOLKIT_BACKEND_PATH}/include")
endif()

add_library(rapidjson INTERFACE)
target_include_directories(rapidjson INTERFACE "${RAPIDJSON_INCLUDE_DIRS}")
# Build RapidJSON using std::string
target_compile_definitions(rapidjson INTERFACE RAPIDJSON_HAS_STDSTRING)
