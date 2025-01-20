set(BENCHMARK_SOURCES)

if(NOA_REGEX)
  list(APPEND BENCHMARK_SOURCES regex.cc)
endif()

if(BENCHMARK_SOURCES)
  noa_googlebenchmark(NAMESPACE sourcemeta PROJECT noa
    FOLDER "Noa" SOURCES ${BENCHMARK_SOURCES})

  target_compile_definitions(sourcemeta_noa_benchmark
    PRIVATE CURRENT_DIRECTORY="${CMAKE_CURRENT_SOURCE_DIR}")

  if(NOA_REGEX)
    target_link_libraries(sourcemeta_noa_benchmark
      PRIVATE sourcemeta::noa::regex)
  endif()

  add_custom_target(benchmark_all
    COMMAND sourcemeta_noa_benchmark
    DEPENDS sourcemeta_noa_benchmark
    COMMENT "Running benchmark...")
  add_custom_target(benchmark_json
    COMMAND sourcemeta_noa_benchmark
      --benchmark_format=json
      --benchmark_out="${PROJECT_BINARY_DIR}/benchmark.json"
    DEPENDS sourcemeta_noa_benchmark
    COMMENT "Running benchmark...")
else()
  add_custom_target(benchmark_all VERBATIM
    COMMAND "${CMAKE_COMMAND}" -E echo "Nothing to benchmark"
    COMMAND "${CMAKE_COMMAND}" -E false)
  add_custom_target(benchmark_json VERBATIM
    COMMAND "${CMAKE_COMMAND}" -E echo "Nothing to benchmark"
    COMMAND "${CMAKE_COMMAND}" -E false)
endif()
