#include <gtest/gtest.h>

#include <sourcemeta/core/jsonschema.h>

TEST(JSONSchema_SchemaMapResolver, empty_no_fallback) {
  sourcemeta::core::SchemaMapResolver resolver;
  EXPECT_FALSE(
      resolver("https://json-schema.org/draft/2020-12/schema").has_value());
}

TEST(JSONSchema_SchemaMapResolver, empty_with_fallback) {
  sourcemeta::core::SchemaMapResolver resolver{
      sourcemeta::core::official_resolver};
  EXPECT_TRUE(
      resolver("https://json-schema.org/draft/2020-12/schema").has_value());
  EXPECT_EQ(resolver("https://json-schema.org/draft/2020-12/schema"),
            sourcemeta::core::official_resolver(
                "https://json-schema.org/draft/2020-12/schema"));
}

TEST(JSONSchema_SchemaMapResolver, single_schema) {
  sourcemeta::core::SchemaMapResolver resolver;

  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/test",
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  resolver.add(document);

  EXPECT_TRUE(resolver("https://www.sourcemeta.com/test").has_value());
  EXPECT_EQ(resolver("https://www.sourcemeta.com/test").value(), document);
}

TEST(JSONSchema_SchemaMapResolver, single_schema_with_default_dialect) {
  sourcemeta::core::SchemaMapResolver resolver;

  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/test"
  })JSON");

  const sourcemeta::core::JSON expected = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/test",
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  resolver.add(document, "https://json-schema.org/draft/2020-12/schema");

  EXPECT_TRUE(resolver("https://www.sourcemeta.com/test").has_value());
  EXPECT_EQ(resolver("https://www.sourcemeta.com/test").value(), expected);
}

TEST(JSONSchema_SchemaMapResolver, single_schema_anonymous_with_default) {
  sourcemeta::core::SchemaMapResolver resolver;

  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  const sourcemeta::core::JSON expected = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/test",
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  resolver.add(document, std::nullopt, "https://www.sourcemeta.com/test");

  EXPECT_TRUE(resolver("https://www.sourcemeta.com/test").has_value());
  EXPECT_EQ(resolver("https://www.sourcemeta.com/test").value(), expected);
}

TEST(JSONSchema_SchemaMapResolver, single_schema_idempotent) {
  sourcemeta::core::SchemaMapResolver resolver;

  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/test",
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  resolver.add(document);
  resolver.add(document);
  resolver.add(document);

  EXPECT_TRUE(resolver("https://www.sourcemeta.com/test").has_value());
  EXPECT_EQ(resolver("https://www.sourcemeta.com/test").value(), document);
}

TEST(JSONSchema_SchemaMapResolver, duplicate_ids) {
  sourcemeta::core::SchemaMapResolver resolver;

  const sourcemeta::core::JSON document_1 =
      sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/test",
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  const sourcemeta::core::JSON document_2 =
      sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/test",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "type": "string"
  })JSON");

  resolver.add(document_1);
  EXPECT_THROW(resolver.add(document_2), sourcemeta::core::SchemaError);
}

TEST(JSONSchema_SchemaMapResolver, embedded_resource) {
  sourcemeta::core::SchemaMapResolver resolver;

  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/test",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$defs": {
      "string": {
        "$id": "string",
        "type": "string"
      }
    }
  })JSON");

  resolver.add(document);

  const sourcemeta::core::JSON embedded = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/string",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "type": "string"
  })JSON");

  EXPECT_TRUE(resolver("https://www.sourcemeta.com/test").has_value());
  EXPECT_TRUE(resolver("https://www.sourcemeta.com/string").has_value());
  EXPECT_EQ(resolver("https://www.sourcemeta.com/test").value(), document);
  EXPECT_EQ(resolver("https://www.sourcemeta.com/string").value(), embedded);
}
