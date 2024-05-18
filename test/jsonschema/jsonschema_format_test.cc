#include <gtest/gtest.h>
#include <sstream>

#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_format, example_1) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "title": "My example schema",
    "type": "object",
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  std::ostringstream stream;
  sourcemeta::jsontoolkit::prettify(
      document, stream, sourcemeta::jsontoolkit::schema_format_compare);
  EXPECT_EQ(stream.str(), R"JSON({
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "My example schema",
  "type": "object"
})JSON");
}

TEST(JSONSchema_format, compare_known_vs_unknown) {
  EXPECT_TRUE(sourcemeta::jsontoolkit::schema_format_compare("$id", "foo"));
  EXPECT_FALSE(sourcemeta::jsontoolkit::schema_format_compare("foo", "$id"));
}

TEST(JSONSchema_format, compare_unknown_vs_unknown) {
  // Alphabetic ordering applies here
  EXPECT_TRUE(sourcemeta::jsontoolkit::schema_format_compare("bar", "foo"));
  EXPECT_FALSE(sourcemeta::jsontoolkit::schema_format_compare("foo", "bar"));
}
