#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_lint_draft7, enum_to_const_1) {
  sourcemeta::jsontoolkit::SchemaTransformBundle bundle;
  bundle.add(
      sourcemeta::jsontoolkit::SchemaTransformBundle::Category::Modernize);

  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "enum": [ 1 ]
  })JSON");

  bundle.apply(document, sourcemeta::jsontoolkit::default_schema_walker,
               sourcemeta::jsontoolkit::official_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "const": 1
  })JSON");

  EXPECT_EQ(document, expected);
}
