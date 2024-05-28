#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_MapSchemaResolver, empty_no_fallback) {
  sourcemeta::jsontoolkit::MapSchemaResolver resolver;
  EXPECT_FALSE(resolver("https://json-schema.org/draft/2020-12/schema")
                   .get()
                   .has_value());
}

TEST(JSONSchema_MapSchemaResolver, empty_with_fallback) {
  sourcemeta::jsontoolkit::MapSchemaResolver resolver{
      sourcemeta::jsontoolkit::official_resolver};
  EXPECT_TRUE(resolver("https://json-schema.org/draft/2020-12/schema")
                  .get()
                  .has_value());
  EXPECT_EQ(resolver("https://json-schema.org/draft/2020-12/schema").get(),
            sourcemeta::jsontoolkit::official_resolver(
                "https://json-schema.org/draft/2020-12/schema")
                .get());
}

TEST(JSONSchema_MapSchemaResolver, single_schema) {
  sourcemeta::jsontoolkit::MapSchemaResolver resolver;

  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/test",
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  resolver.add(document);

  EXPECT_TRUE(resolver("https://www.sourcemeta.com/test").get().has_value());
  EXPECT_EQ(resolver("https://www.sourcemeta.com/test").get().value(),
            document);
}

TEST(JSONSchema_MapSchemaResolver, single_schema_with_default_dialect) {
  sourcemeta::jsontoolkit::MapSchemaResolver resolver;

  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/test"
  })JSON");

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/test",
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  resolver.add(document, "https://json-schema.org/draft/2020-12/schema");

  EXPECT_TRUE(resolver("https://www.sourcemeta.com/test").get().has_value());
  EXPECT_EQ(resolver("https://www.sourcemeta.com/test").get().value(),
            expected);
}

TEST(JSONSchema_MapSchemaResolver, single_schema_anonymous_with_default) {
  sourcemeta::jsontoolkit::MapSchemaResolver resolver;

  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/test",
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  resolver.add(document, std::nullopt, "https://www.sourcemeta.com/test");

  EXPECT_TRUE(resolver("https://www.sourcemeta.com/test").get().has_value());
  EXPECT_EQ(resolver("https://www.sourcemeta.com/test").get().value(),
            expected);
}

TEST(JSONSchema_MapSchemaResolver, single_schema_idempotent) {
  sourcemeta::jsontoolkit::MapSchemaResolver resolver;

  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/test",
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  resolver.add(document);
  resolver.add(document);
  resolver.add(document);

  EXPECT_TRUE(resolver("https://www.sourcemeta.com/test").get().has_value());
  EXPECT_EQ(resolver("https://www.sourcemeta.com/test").get().value(),
            document);
}

TEST(JSONSchema_MapSchemaResolver, duplicate_ids) {
  sourcemeta::jsontoolkit::MapSchemaResolver resolver;

  const sourcemeta::jsontoolkit::JSON document_1 =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/test",
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  const sourcemeta::jsontoolkit::JSON document_2 =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/test",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "type": "string"
  })JSON");

  resolver.add(document_1);
  EXPECT_THROW(resolver.add(document_2), sourcemeta::jsontoolkit::SchemaError);
}

TEST(JSONSchema_MapSchemaResolver, embedded_resource) {
  sourcemeta::jsontoolkit::MapSchemaResolver resolver;

  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
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

  const sourcemeta::jsontoolkit::JSON embedded =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/string",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "type": "string"
  })JSON");

  EXPECT_TRUE(resolver("https://www.sourcemeta.com/test").get().has_value());
  EXPECT_TRUE(resolver("https://www.sourcemeta.com/string").get().has_value());
  EXPECT_EQ(resolver("https://www.sourcemeta.com/test").get().value(),
            document);
  EXPECT_EQ(resolver("https://www.sourcemeta.com/string").get().value(),
            embedded);
}
