#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonl.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>
#include <sourcemeta/jsontoolkit/regex.h>
#include <sourcemeta/jsontoolkit/uri.h>

#include <cstdlib>  // EXIT_SUCCESS
#include <iostream> // std::cout

auto main() -> int {
  const sourcemeta::jsontoolkit::JSON document{"Hello World"};
  sourcemeta::jsontoolkit::stringify(document, std::cout);
  std::cout << std::endl;
  return EXIT_SUCCESS;
}
