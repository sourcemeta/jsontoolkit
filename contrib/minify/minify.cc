#include <jsontoolkit/json.h>

#include <cstdlib>   // EXIT_FAILURE, EXIT_SUCCESS
#include <exception> // std::exception
#include <fstream>   // std::ifstream
#include <iostream>  // std::cerr, std::cout, std::cin
#include <istream>   // std::basic_istream

template <typename CharT, typename Traits>
static auto minify(std::basic_istream<CharT, Traits> &stream) -> int {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(stream)};
  sourcemeta::jsontoolkit::stringify(document, std::cout);
  std::cout << std::endl;
  return EXIT_SUCCESS;
}

auto main(int argc, char *argv[]) -> int {
  try {
    if (argc == 1) {
      return minify(std::cin);
    } else {
      std::ifstream stream{argv[1]};
      stream.exceptions(std::ios_base::badbit);
      return minify(stream);
    }
  } catch (const std::exception &error) {
    std::cerr << "Error: " << error.what() << "\n";
    return EXIT_FAILURE;
  }
}
