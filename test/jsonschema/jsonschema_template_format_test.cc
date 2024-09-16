#include <gtest/gtest.h>
#include <sstream>

#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_compiler_template_format, example_1) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "absoluteKeywordLocation": "#/properties",
    "category": "annotation",
    "report": true,
    "dynamic": true,
    "type": "public",
    "evaluatePathDepth": 5,
    "relativeSchemaLocation": "",
    "relativeInstanceLocation": "",
    "value": {
      "category": "value",
      "type": "json",
      "value": "foo"
    }
  })JSON");

  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(
      document, stream,
      sourcemeta::jsontoolkit::compiler_template_format_compare);
  EXPECT_EQ(stream.str(), R"JSON({
  "category": "annotation",
  "type": "public",
  "value": {
    "category": "value",
    "type": "json",
    "value": "foo"
  },
  "absoluteKeywordLocation": "#/properties",
  "relativeSchemaLocation": "",
  "relativeInstanceLocation": "",
  "evaluatePathDepth": 5,
  "report": true,
  "dynamic": true
})JSON");
}
