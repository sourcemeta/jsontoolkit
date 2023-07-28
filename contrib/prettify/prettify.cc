#include <sourcemeta/jsontoolkit/json.h>

#include <cstdlib>    // EXIT_FAILURE, EXIT_SUCCESS
#include <exception>  // std::exception
#include <filesystem> // std::filesystem::path, std::filesystem::canonical
#include <fstream>    // std::ifstream
#include <iostream>   // std::cerr, std::cout, std::cin
#include <istream>    // std::basic_istream

namespace {
template <typename CharT, typename Traits>
auto prettify(std::basic_istream<CharT, Traits> &stream) -> int {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(stream)};
  sourcemeta::jsontoolkit::prettify(document, std::cout);
  std::cout << std::endl;
  return EXIT_SUCCESS;
}
} // namespace

auto main(int argc, char *argv[]) -> int {
  try {
    if (argc == 1) {
      return prettify(std::cin);
    } else {
      // TODO: Use std::span on C++20
      // NOLINTNEXTLINE(cppcoreguidelines-pro-bounds-pointer-arithmetic)
      const std::filesystem::path input{argv[1]};
      std::ifstream stream{std::filesystem::canonical(input)};
      stream.exceptions(std::ios_base::badbit);
      return prettify(stream);
    }
  } catch (const std::exception &error) {
    std::cerr << "Error: " << error.what() << "\n";
    return EXIT_FAILURE;
  }
}
