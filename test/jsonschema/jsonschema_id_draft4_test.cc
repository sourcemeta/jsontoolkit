#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <iostream>

TEST(JSONSchema_id_draft4, id_boolean_default_dialect) {
  std::cerr << "XXXX JSONSchema_id_draft4.id_boolean_default_dialect\n";
  const sourcemeta::jsontoolkit::JSON document{true};
  std::cerr << "XXXX Getting id\n";
  std::optional<std::string> id{
      sourcemeta::jsontoolkit::id(document,
                                  sourcemeta::jsontoolkit::official_resolver,
                                  "http://json-schema.org/draft-04/schema#")
          .get()};
  std::cerr << "XXXX Got id\n";
  EXPECT_FALSE(id.has_value());
  std::cerr << "XXXX Finishing test\n";
}
