#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_compile_template_2020_12, basic_type_string) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "type": "string"
  })JSON")};

  const auto compiled_schema{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON compiled_schema_json{
      sourcemeta::jsontoolkit::to_json(compiled_schema)};

  const sourcemeta::jsontoolkit::JSON expected{
      sourcemeta::jsontoolkit::parse(R"EOF([
    {
      "category": "assertion",
      "type": "type",
      "relativeSchemaLocation": "/type",
      "relativeInstanceLocation": "",
      "absoluteKeywordLocation": "#/type",
      "target": {
        "category": "target",
        "location": "",
        "type": "instance"
      },
      "value": {
        "category": "value",
        "type": "type",
        "value": "string"
      },
      "condition": []
    }
  ])EOF")};

  EXPECT_EQ(compiled_schema_json, expected);
}
