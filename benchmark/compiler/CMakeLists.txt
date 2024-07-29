add_executable(compiler_benchmark basic.cc)

target_link_libraries(compiler_benchmark benchmark::benchmark)
target_link_libraries(compiler_benchmark benchmark::benchmark_main)
target_link_libraries(compiler_benchmark sourcemeta::jsontoolkit::json)
target_link_libraries(compiler_benchmark sourcemeta::jsontoolkit::jsonschema)

add_custom_target(run_compiler_benchmark
    COMMAND compiler_benchmark
    DEPENDS compiler_benchmark
    WORKING_DIRECTORY ${CMAKE_PROJECT_DIR}
    COMMENT "Running compiler benchmark...")
