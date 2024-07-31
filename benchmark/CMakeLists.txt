if(JSONTOOLKIT_JSON AND JSONTOOLKIT_JSONSCHEMA)
  add_subdirectory(jsonschema)

  # TODO: find a way to put this outside this if statement
  # by adding a dependency to existing targets
  add_custom_target(benchmark_all
      COMMAND sourcemeta_jsontoolkit_benchmark_jsonschema
      DEPENDS sourcemeta_jsontoolkit_benchmark_jsonschema
      COMMENT "Running benchmark...")
endif()
