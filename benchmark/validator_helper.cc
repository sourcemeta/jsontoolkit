#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

// This is just a convenience script to run validation under a profiler,
// without the additional overhead of Google Benchmark.

#include <chrono>     // std::chrono
#include <cstdlib>    // EXIT_SUCCESS, EXIT_FAILURE
#include <filesystem> // std::filesystem::path
#include <iostream>   // std::cerr

auto main(int argc, char **argv) noexcept -> int {
  if (argc < 3) {
    std::cerr << "Usage: " << argv[0] << " <schema.json> <instance.json>\n";
    return EXIT_FAILURE;
  }

  const auto schema{sourcemeta::jsontoolkit::from_file(argv[1])};
  const auto instance{sourcemeta::jsontoolkit::from_file(argv[2])};

  const auto schema_template{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const auto timestamp_start{std::chrono::high_resolution_clock::now()};
  const auto result{
      sourcemeta::jsontoolkit::evaluate(schema_template, instance)};
  const auto timestamp_end{std::chrono::high_resolution_clock::now()};
  const auto duration{std::chrono::duration_cast<std::chrono::nanoseconds>(
      timestamp_end - timestamp_start)};
  std::cout << duration.count() << "ns\n";
  return result ? EXIT_SUCCESS : EXIT_FAILURE;
}