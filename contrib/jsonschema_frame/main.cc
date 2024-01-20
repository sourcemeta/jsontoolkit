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

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(schema, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  std::cout << "--------------------------------------------------\n";
  std::cout << "Frames: " << frame.size() << "\n";
  std::cout << "--------------------------------------------------\n";
  for (const auto &[key, entry] : frame) {
    if (key.first == sourcemeta::jsontoolkit::ReferenceType::Dynamic) {
      std::cout << "(DYNAMIC) ";
    } else {
      std::cout << "(STATIC) ";
    }

    std::cout << "URI: ";
    std::cout << key.second << "\n";
    std::cout << "    Location : " << entry.root.value_or("<ANONYMOUS>")
              << "\n";
    std::cout << "    Pointer  : ";
    sourcemeta::jsontoolkit::stringify(entry.pointer, std::cout);
    std::cout << "\n";
    std::cout << "    Base URI : " << entry.base << "\n";
    std::cout << "    Dialect  : " << entry.dialect << "\n";
  }

  std::cout << "--------------------------------------------------\n";
  std::cout << "References: " << references.size() << "\n";
  std::cout << "--------------------------------------------------\n";
  for (const auto &[pointer, entry] : references) {
    if (pointer.second == sourcemeta::jsontoolkit::ReferenceType::Dynamic) {
      std::cout << "(DYNAMIC) ";
    } else {
      std::cout << "(STATIC) ";
    }

    sourcemeta::jsontoolkit::stringify(pointer.first, std::cout);
    std::cout << "\n         --> " << entry.destination << "\n";

    if (entry.base.has_value()) {
      std::cout << "\n         --> (without fragment) " << entry.base.value()
                << "\n";
    }

    if (entry.fragment.has_value()) {
      std::cout << "\n         --> (fragment) " << entry.fragment.value()
                << "\n";
    }
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
