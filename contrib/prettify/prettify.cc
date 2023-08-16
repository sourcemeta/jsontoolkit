#include <sourcemeta/jsontoolkit/json.h>

#include <cstdlib>    // EXIT_FAILURE, EXIT_SUCCESS
#include <exception>  // std::exception
#include <filesystem> // std::filesystem::path, std::filesystem::canonical
#include <fstream>    // std::ifstream
#include <iostream>   // std::cerr, std::cout, std::cin
#include <istream>    // std::basic_istream
#include <span>       // std::span

namespace {
template <typename CharT, typename Traits>
auto prettify(std::basic_istream<CharT, Traits> &stream) -> int {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(stream);
  sourcemeta::jsontoolkit::prettify(document, std::cout);
  std::cout << std::endl;
  return EXIT_SUCCESS;
}
} // namespace

auto main(int argc, char *argv[]) -> int {
  const auto arguments{std::span(argv, static_cast<std::size_t>(argc))};

  try {
    if (arguments.size() == 1) {
      return prettify(std::cin);
    } else {
      const std::filesystem::path input{arguments[1]};
      std::ifstream stream{std::filesystem::canonical(input)};
      stream.exceptions(std::ios_base::badbit);
      return prettify(stream);
    }

    // TODO: Catch and pretty print line/column numbers
  } catch (const std::exception &error) {
    std::cerr << "Error: " << error.what() << "\n";
    return EXIT_FAILURE;
  }
}
