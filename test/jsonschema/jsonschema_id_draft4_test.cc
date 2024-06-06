#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <iostream>

int main() {
  std::cerr << "XXXX JSONSchema_id_draft4.id_boolean_default_dialect\n";
  const sourcemeta::jsontoolkit::JSON document{true};
  std::cerr << "XXXX Getting id\n";
  sourcemeta::jsontoolkit::base_dialect(
      document, sourcemeta::jsontoolkit::official_resolver)
      .wait();
  std::cerr << "XXXX Got id\n";
  return 0;
}
