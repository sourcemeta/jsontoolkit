#include <cstdlib>  // EXIT_SUCCESS
#include <iostream> // std::cout, std::endl

#include <sourcemeta/jsontoolkit/json.h>

int main() {
  const sourcemeta::jsontoolkit::JSON document{"Hello World"};
  sourcemeta::jsontoolkit::stringify(document, std::cout);
  std::cout << std::endl;
  return EXIT_SUCCESS;
}
