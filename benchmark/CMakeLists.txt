add_subdirectory(jsonschema)

add_custom_target(run_benchmark
    COMMAND sourcemeta_jsontoolkit_benchmark_jsonschema
    DEPENDS sourcemeta_jsontoolkit_benchmark_jsonschema
    COMMENT "Running benchmark...")
