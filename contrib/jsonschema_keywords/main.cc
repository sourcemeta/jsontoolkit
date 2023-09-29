#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <algorithm>  // std::sort
#include <cstdlib>    // EXIT_SUCCESS, EXIT_FAILURE
#include <exception>  // std::exception
#include <filesystem> // std::filesystem
#include <fstream>    // std::ifstream
#include <ios>        // std::ios_base
#include <iostream>   // std::cout, std::cerr
#include <map>        // std::map
#include <span>       // std::span
#include <utility>    // std::pair
#include <vector>     // std::vector

namespace {
auto analyze(const sourcemeta::jsontoolkit::JSON &schema,
             std::map<std::string, unsigned long> &accumulator) -> void {
  const sourcemeta::jsontoolkit::DefaultSchemaResolver resolver;
  for (const sourcemeta::jsontoolkit::JSON &subschema :
       sourcemeta::jsontoolkit::subschema_iterator(
           schema, sourcemeta::jsontoolkit::default_schema_walker, resolver)) {
    if (!subschema.is_object()) {
      continue;
    }

    for (const auto &pair : subschema.as_object()) {
      const std::string keyword{pair.first};
      if (accumulator.find(keyword) == accumulator.end()) {
        accumulator.insert({keyword, 1});
      } else {
        accumulator.insert_or_assign(keyword, accumulator.at(keyword) + 1);
      }
    }
  }
}

auto scan(const std::filesystem::path &directory) -> int {
  std::map<std::string, unsigned long> accumulator;
  for (const std::filesystem::directory_entry &directory_entry :
       std::filesystem::recursive_directory_iterator(directory)) {
    if (std::filesystem::is_directory(directory_entry.path()) ||
        directory_entry.path().extension() != ".json") {
      continue;
    }

    std::cerr << "Scanning: " << directory_entry.path().string() << "\n";
    std::ifstream stream{directory_entry.path()};
    stream.exceptions(std::ios_base::badbit);
    analyze(sourcemeta::jsontoolkit::parse(stream), accumulator);
  }

  std::vector<std::pair<std::string, unsigned long>> result;
  result.reserve(accumulator.size());
  for (const auto &iterator : accumulator) {
    result.emplace_back(iterator);
  }

  std::sort(result.begin(), result.end(),
            [](const auto &left, const auto &right) {
              return left.second == right.second ? left.first < right.first
                                                 : left.second > right.second;
            });

  for (auto const &[keyword, count] : result) {
    std::cout << count << " " << keyword << "\n";
  }

  return EXIT_SUCCESS;
}
} // namespace

auto main(int argc, char *argv[]) -> int {
  const auto arguments{std::span(argv, static_cast<std::size_t>(argc))};
  if (arguments.size() <= 1) {
    std::cerr << "Usage: " << std::string{arguments.front()}
              << " <directory>\n";
    return EXIT_FAILURE;
  }

  try {
    // Make sure the directory indeed exists
    return scan(
        std::filesystem::canonical(std::filesystem::path{arguments[1]}));
  } catch (const std::exception &error) {
    std::cerr << "Error: " << error.what() << "\n";
    return EXIT_FAILURE;
  }
}
