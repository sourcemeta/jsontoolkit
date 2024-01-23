#include <gtest/gtest.h>
#include <vector>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_walker_none, flat_2020_12) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "contentSchema": { "type": "array" },
    "unevaluatedItems": { "type": "integer" },
    "properties": {
      "foo": { "type": "object" }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIteratorFlat(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_TRUE(subschemas.empty());
  EXPECT_TRUE(entries.empty());
}

TEST(JSONSchema_walker_none, deep_2020_12) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "contentSchema": { "type": "array" },
    "unevaluatedItems": { "type": "integer" },
    "properties": {
      "foo": { "type": "object" }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.front(), document);
  EXPECT_EQ(entries.size(), 1);
  EXPECT_EQ(entries.front().pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.front().dialect,
            "https://json-schema.org/draft/2020-12/schema");
  EXPECT_EQ(entries.front().vocabularies.size(), 7);
  EXPECT_EQ(entries.front().base_dialect,
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_walker_none, flat_2019_09) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "contentSchema": { "type": "array" },
    "properties": {
      "foo": { "type": "object" }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIteratorFlat(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_TRUE(subschemas.empty());
  EXPECT_TRUE(entries.empty());
}

TEST(JSONSchema_walker_none, deep_2019_09) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "contentSchema": { "type": "array" },
    "properties": {
      "foo": { "type": "object" }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.front(), document);
  EXPECT_EQ(entries.size(), 1);
  EXPECT_EQ(entries.front().pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.front().dialect,
            "https://json-schema.org/draft/2019-09/schema");
  EXPECT_EQ(entries.front().vocabularies.size(), 6);
  EXPECT_EQ(entries.front().base_dialect,
            "https://json-schema.org/draft/2019-09/schema");
}

TEST(JSONSchema_walker_none, flat_draft7) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "anyOf": [ { "type": "array" } ],
    "properties": {
      "foo": { "type": "object" }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIteratorFlat(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_TRUE(subschemas.empty());
  EXPECT_TRUE(entries.empty());
}

TEST(JSONSchema_walker_none, deep_draft7) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "anyOf": [ { "type": "array" } ],
    "properties": {
      "foo": { "type": "object" }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.front(), document);
  EXPECT_EQ(entries.size(), 1);
  EXPECT_EQ(entries.front().pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.front().dialect, "http://json-schema.org/draft-07/schema#");
  EXPECT_EQ(entries.front().vocabularies.size(), 1);
  EXPECT_EQ(entries.front().base_dialect,
            "http://json-schema.org/draft-07/schema#");
}

TEST(JSONSchema_walker_none, flat_draft6) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-06/schema#",
    "anyOf": [ { "type": "array" } ],
    "properties": {
      "foo": { "type": "object" }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIteratorFlat(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_TRUE(subschemas.empty());
  EXPECT_TRUE(entries.empty());
}

TEST(JSONSchema_walker_none, deep_draft6) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-06/schema#",
    "anyOf": [ { "type": "array" } ],
    "properties": {
      "foo": { "type": "object" }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.front(), document);
  EXPECT_EQ(entries.size(), 1);
  EXPECT_EQ(entries.front().pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.front().dialect, "http://json-schema.org/draft-06/schema#");
  EXPECT_EQ(entries.front().vocabularies.size(), 1);
  EXPECT_EQ(entries.front().base_dialect,
            "http://json-schema.org/draft-06/schema#");
}

TEST(JSONSchema_walker_none, flat_draft4) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "anyOf": [ { "type": "array" } ],
    "properties": {
      "foo": { "type": "object" }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIteratorFlat(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_TRUE(subschemas.empty());
  EXPECT_TRUE(entries.empty());
}

TEST(JSONSchema_walker_none, deep_draft4) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "anyOf": [ { "type": "array" } ],
    "properties": {
      "foo": { "type": "object" }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.front(), document);
  EXPECT_EQ(entries.size(), 1);
  EXPECT_EQ(entries.front().pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.front().dialect, "http://json-schema.org/draft-04/schema#");
  EXPECT_EQ(entries.front().vocabularies.size(), 1);
  EXPECT_EQ(entries.front().base_dialect,
            "http://json-schema.org/draft-04/schema#");
}

TEST(JSONSchema_walker_none, flat_draft3) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-03/schema#",
    "additionalProperties": { "type": "array" },
    "properties": {
      "foo": { "type": "object" }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIteratorFlat(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_TRUE(subschemas.empty());
  EXPECT_TRUE(entries.empty());
}

TEST(JSONSchema_walker_none, deep_draft3) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-03/schema#",
    "additionalProperties": { "type": "array" },
    "properties": {
      "foo": { "type": "object" }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.front(), document);
  EXPECT_EQ(entries.size(), 1);
  EXPECT_EQ(entries.front().pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.front().dialect, "http://json-schema.org/draft-03/schema#");
  EXPECT_EQ(entries.front().vocabularies.size(), 1);
  EXPECT_EQ(entries.front().base_dialect,
            "http://json-schema.org/draft-03/schema#");
}

TEST(JSONSchema_walker_none, flat_draft2) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-02/schema#",
    "additionalProperties": { "type": "array" },
    "properties": {
      "foo": { "type": "object" }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIteratorFlat(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_TRUE(subschemas.empty());
  EXPECT_TRUE(entries.empty());
}

TEST(JSONSchema_walker_none, deep_draft2) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-02/schema#",
    "additionalProperties": { "type": "array" },
    "properties": {
      "foo": { "type": "object" }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.front(), document);
  EXPECT_EQ(entries.size(), 1);
  EXPECT_EQ(entries.front().pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.front().dialect, "http://json-schema.org/draft-02/schema#");
  EXPECT_EQ(entries.front().vocabularies.size(), 1);
  EXPECT_EQ(entries.front().base_dialect,
            "http://json-schema.org/draft-02/hyper-schema#");
}

TEST(JSONSchema_walker_none, flat_draft1) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-01/schema#",
    "additionalProperties": { "type": "array" },
    "properties": {
      "foo": { "type": "object" }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIteratorFlat(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_TRUE(subschemas.empty());
  EXPECT_TRUE(entries.empty());
}

TEST(JSONSchema_walker_none, deep_draft1) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-01/schema#",
    "additionalProperties": { "type": "array" },
    "properties": {
      "foo": { "type": "object" }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.front(), document);
  EXPECT_EQ(entries.size(), 1);
  EXPECT_EQ(entries.front().pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.front().dialect, "http://json-schema.org/draft-01/schema#");
  EXPECT_EQ(entries.front().vocabularies.size(), 1);
  EXPECT_EQ(entries.front().base_dialect,
            "http://json-schema.org/draft-01/hyper-schema#");
}

TEST(JSONSchema_walker_none, flat_draft0) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-00/schema#",
    "additionalProperties": { "type": "array" },
    "properties": {
      "foo": { "type": "object" }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIteratorFlat(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_TRUE(subschemas.empty());
  EXPECT_TRUE(entries.empty());
}

TEST(JSONSchema_walker_none, deep_draft0) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-00/schema#",
    "additionalProperties": { "type": "array" },
    "properties": {
      "foo": { "type": "object" }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.front(), document);
  EXPECT_EQ(entries.size(), 1);
  EXPECT_EQ(entries.front().pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.front().dialect, "http://json-schema.org/draft-00/schema#");
  EXPECT_EQ(entries.front().vocabularies.size(), 1);
  EXPECT_EQ(entries.front().base_dialect,
            "http://json-schema.org/draft-00/hyper-schema#");
}
