file(READ "${PROJECT_SOURCE_DIR}/vendor/jsonschema-2020-12/schema.json" METASCHEMA_JSONSCHEMA_2020_12)
file(READ "${PROJECT_SOURCE_DIR}/vendor/jsonschema-2020-12/meta/applicator.json" METASCHEMA_JSONSCHEMA_2020_12_APPLICATOR)
file(READ "${PROJECT_SOURCE_DIR}/vendor/jsonschema-2020-12/meta/content.json" METASCHEMA_JSONSCHEMA_2020_12_CONTENT)
file(READ "${PROJECT_SOURCE_DIR}/vendor/jsonschema-2020-12/meta/core.json" METASCHEMA_JSONSCHEMA_2020_12_CORE)
file(READ "${PROJECT_SOURCE_DIR}/vendor/jsonschema-2020-12/meta/format-annotation.json" METASCHEMA_JSONSCHEMA_2020_12_FORMAT_ANNOTATION)
file(READ "${PROJECT_SOURCE_DIR}/vendor/jsonschema-2020-12/meta/format-assertion.json" METASCHEMA_JSONSCHEMA_2020_12_FORMAT_ASSERTION)
file(READ "${PROJECT_SOURCE_DIR}/vendor/jsonschema-2020-12/meta/hyper-schema.json" METASCHEMA_JSONSCHEMA_2020_12_HYPER_SCHEMA)
file(READ "${PROJECT_SOURCE_DIR}/vendor/jsonschema-2020-12/meta/meta-data.json" METASCHEMA_JSONSCHEMA_2020_12_META_DATA)
file(READ "${PROJECT_SOURCE_DIR}/vendor/jsonschema-2020-12/meta/unevaluated.json" METASCHEMA_JSONSCHEMA_2020_12_UNEVALUATED)
file(READ "${PROJECT_SOURCE_DIR}/vendor/jsonschema-2020-12/meta/validation.json" METASCHEMA_JSONSCHEMA_2020_12_VALIDATION)
configure_file(default_metaschemas.h.in default_metaschemas.h @ONLY)

add_library(sourcemeta_jsontoolkit_jsonschema
  include/jsontoolkit/jsonschema.h
  include/jsontoolkit/jsonschema/resolver.h
  include/jsontoolkit/jsonschema/walker.h
  include/jsontoolkit/jsonschema/default_walker.h
  include/jsontoolkit/jsonschema/default_resolver.h
  jsonschema.cc default_metaschemas.h.in
  default_walker.cc default_resolver.cc)
set_target_properties(sourcemeta_jsontoolkit_jsonschema
  PROPERTIES PUBLIC_HEADER "${CMAKE_CURRENT_SOURCE_DIR}/include/jsontoolkit/jsonschema.h")
target_include_directories(sourcemeta_jsontoolkit_jsonschema
  PUBLIC
    "$<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>"
    "$<INSTALL_INTERFACE:${CMAKE_INSTALL_INCLUDEDIR}>")
target_link_libraries(sourcemeta_jsontoolkit_jsonschema PUBLIC
  sourcemeta_jsontoolkit_json)

# To find the generated metaschemas file
target_include_directories(sourcemeta_jsontoolkit_jsonschema
  PRIVATE "${CMAKE_CURRENT_BINARY_DIR}")

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
