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

auto print_frame(const sourcemeta::jsontoolkit::ReferenceFrame &frame) -> void {
  for (const auto &uri : frame) {
    std::cout << "URI: ";
    std::cout << uri << "\n";
    std::cout << "    Location : " << frame.root(uri).value_or("<ANONYMOUS>")
              << "\n";
    std::cout << "    Pointer  : ";
    sourcemeta::jsontoolkit::stringify(frame.pointer(uri), std::cout);
    std::cout << "\n";
    std::cout << "    Base URI : " << frame.base(uri) << "\n";
    std::cout << "    Dialect  : " << frame.dialect(uri) << "\n";
  }
}

template <typename CharT, typename Traits>
auto frame(std::basic_istream<CharT, Traits> &stream) -> int {
  const sourcemeta::jsontoolkit::JSON schema =
      sourcemeta::jsontoolkit::parse(stream);

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(schema, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  std::cout << "--------------------------------------------------\n";
  std::cout << "Static frame: " << frame.size() << "\n";
  std::cout << "--------------------------------------------------\n";
  print_frame(frame);

  std::cout << "--------------------------------------------------\n";
  std::cout << "References: " << references.size() << "\n";
  std::cout << "--------------------------------------------------\n";
  for (const auto &[pointer, destination] : references) {
    std::cout << "(STATIC) ";
    sourcemeta::jsontoolkit::stringify(pointer, std::cout);
    std::cout << "\n         --> " << destination << "\n";
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
