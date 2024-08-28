set(BENCHMARK_SOURCES)

if(JSONTOOLKIT_JSONSCHEMA)
  list(APPEND BENCHMARK_SOURCES jsonschema_compiler.cc)
  list(APPEND BENCHMARK_SOURCES jsonschema_validator.cc)
endif()

if(BENCHMARK_SOURCES)
  add_executable(sourcemeta_jsontoolkit_benchmark ${BENCHMARK_SOURCES})
  noa_add_default_options(PRIVATE sourcemeta_jsontoolkit_benchmark)
  target_link_libraries(sourcemeta_jsontoolkit_benchmark 
    PRIVATE benchmark::benchmark)
  target_link_libraries(sourcemeta_jsontoolkit_benchmark 
    PRIVATE benchmark::benchmark_main)

  if(JSONTOOLKIT_JSON)
    target_link_libraries(sourcemeta_jsontoolkit_benchmark 
      PRIVATE sourcemeta::jsontoolkit::json)
  endif()
  if(JSONTOOLKIT_JSONSCHEMA)
    target_link_libraries(sourcemeta_jsontoolkit_benchmark 
      PRIVATE sourcemeta::jsontoolkit::jsonschema)
  endif()

  add_custom_target(benchmark_all
    COMMAND sourcemeta_jsontoolkit_benchmark
    DEPENDS sourcemeta_jsontoolkit_benchmark
    COMMENT "Running benchmark...")
else()
  add_custom_target(benchmark_all
    VERBATIM
    COMMAND "${CMAKE_COMMAND}" -E echo "Nothing to benchmark"
    COMMAND "${CMAKE_COMMAND}" -E false)
endif()
