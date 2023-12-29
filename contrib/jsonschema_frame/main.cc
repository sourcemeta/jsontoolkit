#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <cstdlib>    // EXIT_FAILURE, EXIT_SUCCESS
#include <exception>  // std::exception
#include <filesystem> // std::filesystem::path, std::filesystem::canonical
#include <fstream>    // std::ifstream
#include <iostream>   // std::cerr, std::cout, std::cin
#include <istream>    // std::basic_istream
#include <span>       // std::span

namespace {
template <typename CharT, typename Traits>
auto frame(std::basic_istream<CharT, Traits> &stream) -> int {
  const sourcemeta::jsontoolkit::JSON schema =
      sourcemeta::jsontoolkit::parse(stream);

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::frame(schema, static_frame,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  std::cout << "Static frames: " << static_frame.size() << "\n";
  for (const auto &uri : static_frame) {
    std::cout << "URI: ";
    std::cout << uri << "\n";
    std::cout << "    Location : "
              << static_frame.root(uri).value_or("<ANONYMOUS>") << "\n";
    std::cout << "    Pointer  : ";
    sourcemeta::jsontoolkit::stringify(static_frame.pointer(uri), std::cout);
    std::cout << "\n";
    std::cout << "    Base URI : " << static_frame.base(uri) << "\n";
    std::cout << "    Dialect  : " << static_frame.dialect(uri) << "\n";
  }

  return EXIT_SUCCESS;
}
} // namespace

auto main(int argc, char *argv[]) -> int {
  const auto arguments{std::span(argv, static_cast<std::size_t>(argc))};

  try {
    if (arguments.size() == 1) {
      return frame(std::cin);
    } else {
      const std::filesystem::path input{arguments[1]};
      std::ifstream stream{std::filesystem::canonical(input)};
      stream.exceptions(std::ios_base::badbit);
      return frame(stream);
    }
  } catch (const std::exception &error) {
    std::cerr << "Error: " << error.what() << "\n";
    return EXIT_FAILURE;
  }
}
