#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_FlatFileSchemaResolver, empty_no_fallback) {
  sourcemeta::jsontoolkit::FlatFileSchemaResolver resolver;
  EXPECT_FALSE(
      resolver("https://json-schema.org/draft/2020-12/schema").has_value());
}

TEST(JSONSchema_FlatFileSchemaResolver, empty_with_fallback) {
  sourcemeta::jsontoolkit::FlatFileSchemaResolver resolver{
      sourcemeta::jsontoolkit::official_resolver};
  EXPECT_TRUE(
      resolver("https://json-schema.org/draft/2020-12/schema").has_value());
  EXPECT_EQ(resolver("https://json-schema.org/draft/2020-12/schema"),
            sourcemeta::jsontoolkit::official_resolver(
                "https://json-schema.org/draft/2020-12/schema"));
}

TEST(JSONSchema_FlatFileSchemaResolver, single_schema) {
  sourcemeta::jsontoolkit::FlatFileSchemaResolver resolver;
  const auto schema_path{std::filesystem::path{SCHEMAS_PATH} /
                         "2020-12-id.json"};
  resolver.add(schema_path);
  EXPECT_TRUE(
      resolver("https://www.sourcemeta.com/2020-12-id.json").has_value());
  EXPECT_EQ(resolver("https://www.sourcemeta.com/2020-12-id.json").value(),
            sourcemeta::jsontoolkit::from_file(schema_path));
}

TEST(JSONSchema_FlatFileSchemaResolver, single_schema_with_default_dialect) {
  sourcemeta::jsontoolkit::FlatFileSchemaResolver resolver;
  const auto schema_path{std::filesystem::path{SCHEMAS_PATH} / "only-id.json"};

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/only-id.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  resolver.add(schema_path, "https://json-schema.org/draft/2020-12/schema");

  EXPECT_TRUE(resolver("https://www.sourcemeta.com/only-id.json").has_value());
  EXPECT_EQ(resolver("https://www.sourcemeta.com/only-id.json").value(),
            expected);
}

TEST(JSONSchema_FlatFileSchemaResolver, single_schema_anonymous_with_default) {
  sourcemeta::jsontoolkit::FlatFileSchemaResolver resolver;
  const auto schema_path{std::filesystem::path{SCHEMAS_PATH} /
                         "2020-12-anonymous.json"};

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/test",
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  resolver.add(schema_path, std::nullopt, "https://www.sourcemeta.com/test");

  EXPECT_TRUE(resolver("https://www.sourcemeta.com/test").has_value());
  EXPECT_EQ(resolver("https://www.sourcemeta.com/test").value(), expected);
}

TEST(JSONSchema_FlatFileSchemaResolver, single_schema_idempotent) {
  sourcemeta::jsontoolkit::FlatFileSchemaResolver resolver;
  const auto schema_path{std::filesystem::path{SCHEMAS_PATH} /
                         "2020-12-id.json"};

  resolver.add(schema_path);
  resolver.add(schema_path);
  resolver.add(schema_path);

  EXPECT_TRUE(
      resolver("https://www.sourcemeta.com/2020-12-id.json").has_value());
  EXPECT_EQ(resolver("https://www.sourcemeta.com/2020-12-id.json").value(),
            sourcemeta::jsontoolkit::from_file(schema_path));
}

TEST(JSONSchema_FlatFileSchemaResolver, duplicate_ids) {
  sourcemeta::jsontoolkit::FlatFileSchemaResolver resolver;

  const auto schema_path_1{std::filesystem::path{SCHEMAS_PATH} /
                           "2020-12-id.json"};
  const auto schema_path_2{std::filesystem::path{SCHEMAS_PATH} /
                           "2020-12-id-duplicate.json"};

  resolver.add(schema_path_1);
  EXPECT_THROW(resolver.add(schema_path_2),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(JSONSchema_FlatFileSchemaResolver, no_embedded_resource) {
  sourcemeta::jsontoolkit::FlatFileSchemaResolver resolver;
  const auto schema_path{std::filesystem::path{SCHEMAS_PATH} /
                         "2020-12-embedded.json"};

  resolver.add(schema_path);

  EXPECT_TRUE(
      resolver("https://www.sourcemeta.com/2020-12-embedded.json").has_value());
  EXPECT_EQ(
      resolver("https://www.sourcemeta.com/2020-12-embedded.json").value(),
      sourcemeta::jsontoolkit::from_file(schema_path));
  EXPECT_FALSE(resolver("https://www.sourcemeta.com/string").has_value());
}

TEST(JSONSchema_FlatFileSchemaResolver, metaschema_out_of_order) {
  sourcemeta::jsontoolkit::FlatFileSchemaResolver resolver;
  const auto schema_path{std::filesystem::path{SCHEMAS_PATH} /
                         "2020-12-meta-1-schema.json"};
  const auto metaschema_path{std::filesystem::path{SCHEMAS_PATH} /
                             "2020-12-meta-1.json"};

  resolver.add(schema_path);

  // We can't resolve it yet until eventually satisfying the metaschema
  EXPECT_THROW(
      resolver("https://www.sourcemeta.com/2020-12-meta-1-schema.json"),
      sourcemeta::jsontoolkit::SchemaResolutionError);

  // Note we add the metaschema AFTER the schema
  resolver.add(metaschema_path);

  EXPECT_TRUE(
      resolver("https://www.sourcemeta.com/2020-12-meta-1.json").has_value());
  EXPECT_EQ(resolver("https://www.sourcemeta.com/2020-12-meta-1.json").value(),
            sourcemeta::jsontoolkit::from_file(metaschema_path));

  EXPECT_TRUE(resolver("https://www.sourcemeta.com/2020-12-meta-1-schema.json")
                  .has_value());
  EXPECT_EQ(
      resolver("https://www.sourcemeta.com/2020-12-meta-1-schema.json").value(),
      sourcemeta::jsontoolkit::from_file(schema_path));
}

TEST(JSONSchema_FlatFileSchemaResolver, iterators) {
  sourcemeta::jsontoolkit::FlatFileSchemaResolver resolver;
  const auto schema_path{std::filesystem::path{SCHEMAS_PATH} /
                         "2020-12-id.json"};
  resolver.add(schema_path);

  std::vector<std::string> identifiers;
  std::vector<sourcemeta::jsontoolkit::FlatFileSchemaResolver::Entry> entries;
  for (const auto &entry : resolver) {
    identifiers.push_back(entry.first);
    entries.push_back(entry.second);
  }

  EXPECT_EQ(identifiers.size(), 1);
  EXPECT_EQ(identifiers.at(0), "https://www.sourcemeta.com/2020-12-id.json");

  EXPECT_EQ(entries.size(), 1);
  EXPECT_EQ(entries.at(0).path, schema_path);
  EXPECT_FALSE(entries.at(0).default_dialect.has_value());
  EXPECT_FALSE(entries.at(0).default_id.has_value());
}
