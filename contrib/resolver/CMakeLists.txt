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

configure_file(schemas.h.in schemas.h @ONLY)
add_library(sourcemeta_jsontoolkit_contrib_resolver
  include/jsontoolkit/contrib/resolver.h schemas.h.in resolver.cc)
target_link_libraries(sourcemeta_jsontoolkit_contrib_resolver
  PUBLIC sourcemeta_jsontoolkit_json)
target_include_directories(sourcemeta_jsontoolkit_contrib_resolver
  PUBLIC "${CMAKE_CURRENT_SOURCE_DIR}/include")
# To find the generated schemas file
target_include_directories(sourcemeta_jsontoolkit_contrib_resolver
  PRIVATE "${CMAKE_CURRENT_BINARY_DIR}")
