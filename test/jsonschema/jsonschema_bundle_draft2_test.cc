#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <string>      // std::string
#include <string_view> // std::string_view

static auto test_resolver(std::string_view identifier)
    -> std::optional<sourcemeta::jsontoolkit::JSON> {
  if (identifier == "https://www.sourcemeta.com/test-1") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "http://json-schema.org/draft-02/schema#",
      "id": "https://www.sourcemeta.com/test-1",
      "type": "string"
    })JSON");
  } else {
    return sourcemeta::jsontoolkit::official_resolver(identifier);
  }
}

TEST(JSONSchema_bundle_draft2, no_references_no_id) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-02/schema#"
  })JSON");

  EXPECT_THROW(sourcemeta::jsontoolkit::bundle(
                   document, sourcemeta::jsontoolkit::default_schema_walker,
                   test_resolver),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(JSONSchema_bundle_draft2, const_no_references_no_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-02/schema#"
  })JSON");

  EXPECT_THROW(sourcemeta::jsontoolkit::bundle(
                   document, sourcemeta::jsontoolkit::default_schema_walker,
                   test_resolver),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(JSONSchema_bundle_draft2, simple_bundling) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://example.com",
    "$schema": "http://json-schema.org/draft-02/schema#",
    "properties": {
      "test": { "$ref": "https://www.sourcemeta.com/test-1" }
    }
  })JSON");

  EXPECT_THROW(sourcemeta::jsontoolkit::bundle(
                   document, sourcemeta::jsontoolkit::default_schema_walker,
                   test_resolver),
               sourcemeta::jsontoolkit::SchemaError);
}
