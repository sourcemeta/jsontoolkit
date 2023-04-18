#include <jsontoolkit/contrib/resolver.h>
#include <jsontoolkit/json.h>
#include <jsontoolkit/jsonschema.h>

#include <algorithm>     // std::sort
#include <cstdlib>       // EXIT_SUCCESS, EXIT_FAILURE
#include <exception>     // std::exception
#include <filesystem>    // std::filesystem
#include <fstream>       // std::ifstream
#include <ios>           // std::ios_base
#include <iostream>      // std::cout, std::cerr
#include <unordered_map> // std::unordered_map
#include <utility>       // std::pair
#include <vector>        // std::vector

static auto analyze(const sourcemeta::jsontoolkit::JSON &schema,
                    std::unordered_map<std::string, unsigned long> &accumulator)
    -> void {
  const sourcemeta::jsontoolkit::contrib::Resolver resolver;
  for (const sourcemeta::jsontoolkit::Value &subschema :
       sourcemeta::jsontoolkit::subschema_iterator(
           schema, sourcemeta::jsontoolkit::default_schema_walker, resolver)) {
    if (!sourcemeta::jsontoolkit::is_object(subschema)) {
      continue;
    }

    for (const auto &pair :
         sourcemeta::jsontoolkit::object_iterator(subschema)) {
      const std::string keyword{sourcemeta::jsontoolkit::key(pair)};
      if (accumulator.find(keyword) == accumulator.end()) {
        accumulator.insert({keyword, 1});
      } else {
        accumulator.insert_or_assign(keyword, accumulator.at(keyword) + 1);
      }
    }
  }
}

static auto scan(const std::filesystem::path &directory) -> int {
  std::unordered_map<std::string, unsigned long> accumulator;
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
  for (const auto &iterator : accumulator) {
    result.push_back(iterator);
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

auto main(int argc, char *argv[]) -> int {
  if (argc <= 1) {
    std::cerr << "Usage: " << argv[0] << " <directory>\n";
    return EXIT_FAILURE;
  }

  try {
    // Make sure the directory indeed exists
    return scan(std::filesystem::canonical(std::filesystem::path{argv[1]}));
  } catch (const std::exception &error) {
    std::cerr << "Error: " << error.what() << "\n";
    return EXIT_FAILURE;
  }
}
