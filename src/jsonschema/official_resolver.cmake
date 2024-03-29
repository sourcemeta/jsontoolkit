# If PROJECT_SOURCE_DIR is not defined, exit
if(NOT PROJECT_SOURCE_DIR)
  message(FATAL_ERROR "Missing PROJECT_SOURCE_DIR")
endif()

# JSON Schema 2020-12
set(JSON_SCHEMA_2020_12_DIR "${PROJECT_SOURCE_DIR}/vendor/jsonschema-2020-12")
file(READ "${JSON_SCHEMA_2020_12_DIR}/schema.json" METASCHEMA_JSONSCHEMA_2020_12)
file(READ "${JSON_SCHEMA_2020_12_DIR}/hyper-schema.json" METASCHEMA_HYPERSCHEMA_2020_12)
file(READ "${JSON_SCHEMA_2020_12_DIR}/meta/applicator.json" METASCHEMA_JSONSCHEMA_2020_12_APPLICATOR)
file(READ "${JSON_SCHEMA_2020_12_DIR}/meta/content.json" METASCHEMA_JSONSCHEMA_2020_12_CONTENT)
file(READ "${JSON_SCHEMA_2020_12_DIR}/meta/core.json" METASCHEMA_JSONSCHEMA_2020_12_CORE)
file(READ "${JSON_SCHEMA_2020_12_DIR}/meta/format-annotation.json" METASCHEMA_JSONSCHEMA_2020_12_FORMAT_ANNOTATION)
file(READ "${JSON_SCHEMA_2020_12_DIR}/meta/format-assertion.json" METASCHEMA_JSONSCHEMA_2020_12_FORMAT_ASSERTION)
file(READ "${JSON_SCHEMA_2020_12_DIR}/meta/hyper-schema.json" METASCHEMA_JSONSCHEMA_2020_12_HYPER_SCHEMA)
file(READ "${JSON_SCHEMA_2020_12_DIR}/meta/meta-data.json" METASCHEMA_JSONSCHEMA_2020_12_META_DATA)
file(READ "${JSON_SCHEMA_2020_12_DIR}/meta/unevaluated.json" METASCHEMA_JSONSCHEMA_2020_12_UNEVALUATED)
file(READ "${JSON_SCHEMA_2020_12_DIR}/meta/validation.json" METASCHEMA_JSONSCHEMA_2020_12_VALIDATION)
file(READ "${JSON_SCHEMA_2020_12_DIR}/links.json" METASCHEMA_LINKS_2020_12)
file(READ "${JSON_SCHEMA_2020_12_DIR}/output/schema.json" METASCHEMA_JSONSCHEMA_2020_12_OUTPUT)

# JSON Schema 2019-09
set(JSON_SCHEMA_2019_09_DIR "${PROJECT_SOURCE_DIR}/vendor/jsonschema-2019-09")
file(READ "${JSON_SCHEMA_2019_09_DIR}/schema.json" METASCHEMA_JSONSCHEMA_2019_09)
file(READ "${JSON_SCHEMA_2019_09_DIR}/hyper-schema.json" METASCHEMA_HYPERSCHEMA_2019_09)
file(READ "${JSON_SCHEMA_2019_09_DIR}/meta/applicator.json" METASCHEMA_JSONSCHEMA_2019_09_APPLICATOR)
file(READ "${JSON_SCHEMA_2019_09_DIR}/meta/content.json" METASCHEMA_JSONSCHEMA_2019_09_CONTENT)
file(READ "${JSON_SCHEMA_2019_09_DIR}/meta/core.json" METASCHEMA_JSONSCHEMA_2019_09_CORE)
file(READ "${JSON_SCHEMA_2019_09_DIR}/meta/format.json" METASCHEMA_JSONSCHEMA_2019_09_FORMAT)
file(READ "${JSON_SCHEMA_2019_09_DIR}/meta/hyper-schema.json" METASCHEMA_JSONSCHEMA_2019_09_HYPER_SCHEMA)
file(READ "${JSON_SCHEMA_2019_09_DIR}/meta/meta-data.json" METASCHEMA_JSONSCHEMA_2019_09_META_DATA)
file(READ "${JSON_SCHEMA_2019_09_DIR}/meta/validation.json" METASCHEMA_JSONSCHEMA_2019_09_VALIDATION)
file(READ "${JSON_SCHEMA_2019_09_DIR}/links.json" METASCHEMA_LINKS_2019_09)
file(READ "${JSON_SCHEMA_2019_09_DIR}/output/hyper-schema.json" METASCHEMA_HYPERSCHEMA_2019_09_OUTPUT)
file(READ "${JSON_SCHEMA_2019_09_DIR}/output/schema.json" METASCHEMA_JSONSCHEMA_2019_09_OUTPUT)

# JSON Schema Draft7
set(JSON_SCHEMA_DRAFT7_DIR "${PROJECT_SOURCE_DIR}/vendor/jsonschema-draft7")
file(READ "${JSON_SCHEMA_DRAFT7_DIR}/schema.json" METASCHEMA_JSONSCHEMA_DRAFT7)
file(READ "${JSON_SCHEMA_DRAFT7_DIR}/hyper-schema.json" METASCHEMA_HYPERSCHEMA_DRAFT7)
file(READ "${JSON_SCHEMA_DRAFT7_DIR}/hyper-schema-output.json" METASCHEMA_HYPERSCHEMA_DRAFT7_OUTPUT)
file(READ "${JSON_SCHEMA_DRAFT7_DIR}/links.json" METASCHEMA_LINKS_DRAFT7)

# JSON Schema Draft6
set(JSON_SCHEMA_DRAFT6_DIR "${PROJECT_SOURCE_DIR}/vendor/jsonschema-draft6")
file(READ "${JSON_SCHEMA_DRAFT6_DIR}/schema.json" METASCHEMA_JSONSCHEMA_DRAFT6)
file(READ "${JSON_SCHEMA_DRAFT6_DIR}/hyper-schema.json" METASCHEMA_HYPERSCHEMA_DRAFT6)
file(READ "${JSON_SCHEMA_DRAFT6_DIR}/links.json" METASCHEMA_LINKS_DRAFT6)

# JSON Schema Draft4
set(JSON_SCHEMA_DRAFT4_DIR "${PROJECT_SOURCE_DIR}/vendor/jsonschema-draft4")
file(READ "${JSON_SCHEMA_DRAFT4_DIR}/schema.json" METASCHEMA_JSONSCHEMA_DRAFT4)
file(READ "${JSON_SCHEMA_DRAFT4_DIR}/hyper-schema.json" METASCHEMA_HYPERSCHEMA_DRAFT4)
file(READ "${JSON_SCHEMA_DRAFT4_DIR}/links.json" METASCHEMA_LINKS_DRAFT4)

# JSON Schema Draft3
set(JSON_SCHEMA_DRAFT3_DIR "${PROJECT_SOURCE_DIR}/vendor/jsonschema-draft3")
file(READ "${JSON_SCHEMA_DRAFT3_DIR}/schema.json" METASCHEMA_JSONSCHEMA_DRAFT3)
file(READ "${JSON_SCHEMA_DRAFT3_DIR}/hyper-schema.json" METASCHEMA_HYPERSCHEMA_DRAFT3)
file(READ "${JSON_SCHEMA_DRAFT3_DIR}/json-ref.json" METASCHEMA_JSON_REF_DRAFT3)
file(READ "${JSON_SCHEMA_DRAFT3_DIR}/links.json" METASCHEMA_LINKS_DRAFT3)

# JSON Schema Draft2
set(JSON_SCHEMA_DRAFT2_DIR "${PROJECT_SOURCE_DIR}/vendor/jsonschema-draft2")
file(READ "${JSON_SCHEMA_DRAFT2_DIR}/schema.json" METASCHEMA_JSONSCHEMA_DRAFT2)
file(READ "${JSON_SCHEMA_DRAFT2_DIR}/hyper-schema.json" METASCHEMA_HYPERSCHEMA_DRAFT2)
file(READ "${JSON_SCHEMA_DRAFT2_DIR}/json-ref.json" METASCHEMA_JSON_REF_DRAFT2)
file(READ "${JSON_SCHEMA_DRAFT2_DIR}/links.json" METASCHEMA_LINKS_DRAFT2)

# JSON Schema Draft1
set(JSON_SCHEMA_DRAFT1_DIR "${PROJECT_SOURCE_DIR}/vendor/jsonschema-draft1")
file(READ "${JSON_SCHEMA_DRAFT1_DIR}/schema.json" METASCHEMA_JSONSCHEMA_DRAFT1)
file(READ "${JSON_SCHEMA_DRAFT1_DIR}/hyper-schema.json" METASCHEMA_HYPERSCHEMA_DRAFT1)
file(READ "${JSON_SCHEMA_DRAFT1_DIR}/json-ref.json" METASCHEMA_JSON_REF_DRAFT1)
file(READ "${JSON_SCHEMA_DRAFT1_DIR}/links.json" METASCHEMA_LINKS_DRAFT1)

# JSON Schema Draft0
set(JSON_SCHEMA_DRAFT0_DIR "${PROJECT_SOURCE_DIR}/vendor/jsonschema-draft0")
file(READ "${JSON_SCHEMA_DRAFT0_DIR}/schema.json" METASCHEMA_JSONSCHEMA_DRAFT0)
file(READ "${JSON_SCHEMA_DRAFT0_DIR}/hyper-schema.json" METASCHEMA_HYPERSCHEMA_DRAFT0)
file(READ "${JSON_SCHEMA_DRAFT0_DIR}/json-ref.json" METASCHEMA_JSON_REF_DRAFT0)
file(READ "${JSON_SCHEMA_DRAFT0_DIR}/links.json" METASCHEMA_LINKS_DRAFT0)

if(NOT OFFICIAL_RESOLVER_INPUT)
  message(FATAL_ERROR "Missing OFFICIAL_RESOLVER_INPUT")
endif()
if(NOT OFFICIAL_RESOLVER_OUTPUT)
  message(FATAL_ERROR "Missing OFFICIAL_RESOLVER_OUTPUT")
endif()
configure_file("${OFFICIAL_RESOLVER_INPUT}" "${OFFICIAL_RESOLVER_OUTPUT}" @ONLY)
