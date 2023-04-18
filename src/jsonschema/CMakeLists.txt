add_library(sourcemeta_jsontoolkit_jsonschema
  include/jsontoolkit/jsonschema.h
  include/jsontoolkit/jsonschema/resolver.h
  include/jsontoolkit/jsonschema/walker.h
  include/jsontoolkit/jsonschema/default_walker.h
  jsonschema.cc
  default_walker.cc)
set_target_properties(sourcemeta_jsontoolkit_jsonschema
  PROPERTIES PUBLIC_HEADER "${CMAKE_CURRENT_SOURCE_DIR}/include/jsontoolkit/jsonschema.h")
target_include_directories(sourcemeta_jsontoolkit_jsonschema
  PUBLIC
    "$<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>"
    "$<INSTALL_INTERFACE:${CMAKE_INSTALL_INCLUDEDIR}>")
target_link_libraries(sourcemeta_jsontoolkit_jsonschema PUBLIC
  sourcemeta_jsontoolkit_json)

# GCC does not allow the use of std::promise, std::future
# without compiling with pthreads support.
if(CMAKE_CXX_COMPILER_ID STREQUAL "GNU")
  set(CMAKE_THREAD_PREFER_PTHREAD TRUE)
  set(THREADS_PREFER_PTHREAD_FLAG TRUE)
  find_package(Threads REQUIRED)
  target_link_libraries(sourcemeta_jsontoolkit_jsonschema PUBLIC Threads::Threads)
endif()

install(TARGETS sourcemeta_jsontoolkit_jsonschema
  EXPORT sourcemeta_jsontoolkit_jsonschema
  ARCHIVE DESTINATION "${CMAKE_INSTALL_LIBDIR}"
  COMPONENT jsonschema
  PUBLIC_HEADER DESTINATION "${CMAKE_INSTALL_INCLUDEDIR}/jsontoolkit")
install(FILES include/jsontoolkit/jsonschema/resolver.h
  DESTINATION "${CMAKE_INSTALL_INCLUDEDIR}/jsontoolkit/jsonschema")
