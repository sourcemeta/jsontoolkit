# RapidJSON's find package implementation populates RAPIDJSON_INCLUDE_DIRS
# See https://github.com/rjeczalik/rapidjson/blob/master/cmake/Findrapidjson.cmake
find_package(RapidJSON REQUIRED)
add_library(rapidjson INTERFACE)
target_include_directories(rapidjson INTERFACE "${RAPIDJSON_INCLUDE_DIRS}")
# Build RapidJSON using std::string
target_compile_definitions(rapidjson INTERFACE RAPIDJSON_HAS_STDSTRING)
add_library(sourcemeta_jsontoolkit "${PROJECT_SOURCE_DIR}/include/jsontoolkit/json.h" json.cc)
target_link_libraries(sourcemeta_jsontoolkit PUBLIC rapidjson)
