#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_vocabulary, core_vocabularies_boolean_without_default) {
  const sourcemeta::jsontoolkit::JSON document{true};
  EXPECT_THROW(sourcemeta::jsontoolkit::vocabularies(
                   document, sourcemeta::jsontoolkit::official_resolver),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(JSONSchema_vocabulary, unresolvable_dialect) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://non-existent.com/dialect"
  })JSON");
  EXPECT_THROW(sourcemeta::jsontoolkit::vocabularies(
                   document, sourcemeta::jsontoolkit::official_resolver),
               sourcemeta::jsontoolkit::SchemaResolutionError);
}
