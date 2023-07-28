#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <cstdlib>       // EXIT_FAILURE, EXIT_SUCCESS
#include <exception>     // std::exception
#include <filesystem>    // std::filesystem::path, std::filesystem::canonical
#include <fstream>       // std::ifstream
#include <iostream>      // std::cerr, std::cout, std::cin
#include <istream>       // std::basic_istream
#include <unordered_map> // std::unordered_map

namespace {
template <typename CharT, typename Traits>
auto walk(const std::string &mode, std::basic_istream<CharT, Traits> &stream)
    -> int {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(stream)};

  const std::optional<std::string> metaschema{
      sourcemeta::jsontoolkit::metaschema(document)};
  if (!metaschema.has_value()) {
    std::cerr << "The given schema does not declare its meta-schema. We will "
                 "only assume the presence of the 'core' vocabulary\n";
  }

  const sourcemeta::jsontoolkit::DefaultResolver resolver;
  if (mode == "deep") {
    for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
             document, sourcemeta::jsontoolkit::default_schema_walker,
             resolver)) {
      sourcemeta::jsontoolkit::prettify(subschema, std::cout);
      std::cout << "\n";
    }
  } else if (mode == "flat") {
    for (const auto &subschema :
         sourcemeta::jsontoolkit::flat_subschema_iterator(
             document, sourcemeta::jsontoolkit::default_schema_walker,
             resolver)) {
      sourcemeta::jsontoolkit::prettify(subschema, std::cout);
      std::cout << "\n";
    }
  } else {
    std::cerr << "Unknown mode: " << mode << "\n";
    return EXIT_FAILURE;
  }

  return EXIT_SUCCESS;
}

auto help(const std::string &program) -> void {
  std::cerr << "Usage: " << program << " <flat|deep> [input.json]\n";
}
} // namespace

auto main(int argc, char *argv[]) -> int {
  if (argc == 1) {
    // TODO: Use std::span on C++20
    // NOLINTNEXTLINE(cppcoreguidelines-pro-bounds-pointer-arithmetic)
    help(argv[0]);
    return EXIT_FAILURE;
  }

  try {
    if (argc == 2) {
      // TODO: Use std::span on C++20
      // NOLINTNEXTLINE(cppcoreguidelines-pro-bounds-pointer-arithmetic)
      return walk(argv[1], std::cin);
    } else {
      // TODO: Use std::span on C++20
      // NOLINTNEXTLINE(cppcoreguidelines-pro-bounds-pointer-arithmetic)
      const std::filesystem::path input{argv[2]};
      std::ifstream stream{std::filesystem::canonical(input)};
      stream.exceptions(std::ios_base::badbit);
      // TODO: Use std::span on C++20
      // NOLINTNEXTLINE(cppcoreguidelines-pro-bounds-pointer-arithmetic)
      return walk(argv[1], stream);
    }
  } catch (const std::exception &error) {
    std::cerr << "Error: " << error.what() << "\n";
    return EXIT_FAILURE;
  }
}
