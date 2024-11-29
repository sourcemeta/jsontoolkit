set(BENCHMARK_SOURCES)

if(JSONTOOLKIT_JSON)
  list(APPEND BENCHMARK_SOURCES json.cc)
endif()

if(JSONTOOLKIT_REGEX)
  list(APPEND BENCHMARK_SOURCES regex.cc)
endif()

if(JSONTOOLKIT_JSONPOINTER)
  list(APPEND BENCHMARK_SOURCES jsonpointer.cc)
endif()

if(BENCHMARK_SOURCES)
  add_executable(sourcemeta_jsontoolkit_benchmark ${BENCHMARK_SOURCES})
  noa_add_default_options(PRIVATE sourcemeta_jsontoolkit_benchmark)
  target_link_libraries(sourcemeta_jsontoolkit_benchmark
    PRIVATE benchmark::benchmark)
  target_link_libraries(sourcemeta_jsontoolkit_benchmark
    PRIVATE benchmark::benchmark_main)
  target_compile_definitions(sourcemeta_jsontoolkit_benchmark
    PRIVATE CURRENT_DIRECTORY="${CMAKE_CURRENT_SOURCE_DIR}")

  if(JSONTOOLKIT_JSON)
    target_link_libraries(sourcemeta_jsontoolkit_benchmark
      PRIVATE sourcemeta::jsontoolkit::json)
  endif()

  if(JSONTOOLKIT_REGEX)
    target_link_libraries(sourcemeta_jsontoolkit_benchmark
      PRIVATE sourcemeta::jsontoolkit::regex)
  endif()

  if(JSONTOOLKIT_JSONPOINTER)
    target_link_libraries(sourcemeta_jsontoolkit_benchmark
      PRIVATE sourcemeta::jsontoolkit::jsonpointer)
  endif()

  add_custom_target(benchmark_all
    COMMAND sourcemeta_jsontoolkit_benchmark
    DEPENDS sourcemeta_jsontoolkit_benchmark
    COMMENT "Running benchmark...")
  add_custom_target(benchmark_json
    COMMAND sourcemeta_jsontoolkit_benchmark
      --benchmark_format=json
      --benchmark_out="${PROJECT_BINARY_DIR}/benchmark.json"
    DEPENDS sourcemeta_jsontoolkit_benchmark
    COMMENT "Running benchmark...")
else()
  add_custom_target(benchmark_all VERBATIM
    COMMAND "${CMAKE_COMMAND}" -E echo "Nothing to benchmark"
    COMMAND "${CMAKE_COMMAND}" -E false)
  add_custom_target(benchmark_json VERBATIM
    COMMAND "${CMAKE_COMMAND}" -E echo "Nothing to benchmark"
    COMMAND "${CMAKE_COMMAND}" -E false)
endif()
