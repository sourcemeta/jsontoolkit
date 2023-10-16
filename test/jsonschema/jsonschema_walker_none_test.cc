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
  std::vector<sourcemeta::jsontoolkit::Pointer> pointers;
  for (const auto &pointer : sourcemeta::jsontoolkit::SchemaIteratorFlat(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, pointer));
    pointers.push_back(pointer);
  }

  EXPECT_TRUE(subschemas.empty());
  EXPECT_TRUE(pointers.empty());
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
  std::vector<sourcemeta::jsontoolkit::Pointer> pointers;
  for (const auto &pointer : sourcemeta::jsontoolkit::SchemaIterator(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, pointer));
    pointers.push_back(pointer);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.front(), document);
  EXPECT_EQ(pointers.size(), 1);
  EXPECT_EQ(pointers.front(), sourcemeta::jsontoolkit::Pointer{});
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
  std::vector<sourcemeta::jsontoolkit::Pointer> pointers;
  for (const auto &pointer : sourcemeta::jsontoolkit::SchemaIteratorFlat(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, pointer));
    pointers.push_back(pointer);
  }

  EXPECT_TRUE(subschemas.empty());
  EXPECT_TRUE(pointers.empty());
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
  std::vector<sourcemeta::jsontoolkit::Pointer> pointers;
  for (const auto &pointer : sourcemeta::jsontoolkit::SchemaIterator(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, pointer));
    pointers.push_back(pointer);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.front(), document);
  EXPECT_EQ(pointers.size(), 1);
  EXPECT_EQ(pointers.front(), sourcemeta::jsontoolkit::Pointer{});
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
  std::vector<sourcemeta::jsontoolkit::Pointer> pointers;
  for (const auto &pointer : sourcemeta::jsontoolkit::SchemaIteratorFlat(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, pointer));
    pointers.push_back(pointer);
  }

  EXPECT_TRUE(subschemas.empty());
  EXPECT_TRUE(pointers.empty());
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
  std::vector<sourcemeta::jsontoolkit::Pointer> pointers;
  for (const auto &pointer : sourcemeta::jsontoolkit::SchemaIterator(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, pointer));
    pointers.push_back(pointer);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.front(), document);
  EXPECT_EQ(pointers.size(), 1);
  EXPECT_EQ(pointers.front(), sourcemeta::jsontoolkit::Pointer{});
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
  std::vector<sourcemeta::jsontoolkit::Pointer> pointers;
  for (const auto &pointer : sourcemeta::jsontoolkit::SchemaIteratorFlat(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, pointer));
    pointers.push_back(pointer);
  }

  EXPECT_TRUE(subschemas.empty());
  EXPECT_TRUE(pointers.empty());
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
  std::vector<sourcemeta::jsontoolkit::Pointer> pointers;
  for (const auto &pointer : sourcemeta::jsontoolkit::SchemaIterator(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, pointer));
    pointers.push_back(pointer);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.front(), document);
  EXPECT_EQ(pointers.size(), 1);
  EXPECT_EQ(pointers.front(), sourcemeta::jsontoolkit::Pointer{});
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
  std::vector<sourcemeta::jsontoolkit::Pointer> pointers;
  for (const auto &pointer : sourcemeta::jsontoolkit::SchemaIteratorFlat(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, pointer));
    pointers.push_back(pointer);
  }

  EXPECT_TRUE(subschemas.empty());
  EXPECT_TRUE(pointers.empty());
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
  std::vector<sourcemeta::jsontoolkit::Pointer> pointers;
  for (const auto &pointer : sourcemeta::jsontoolkit::SchemaIterator(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, pointer));
    pointers.push_back(pointer);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.front(), document);
  EXPECT_EQ(pointers.size(), 1);
  EXPECT_EQ(pointers.front(), sourcemeta::jsontoolkit::Pointer{});
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
  std::vector<sourcemeta::jsontoolkit::Pointer> pointers;
  for (const auto &pointer : sourcemeta::jsontoolkit::SchemaIteratorFlat(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, pointer));
    pointers.push_back(pointer);
  }

  EXPECT_TRUE(subschemas.empty());
  EXPECT_TRUE(pointers.empty());
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
  std::vector<sourcemeta::jsontoolkit::Pointer> pointers;
  for (const auto &pointer : sourcemeta::jsontoolkit::SchemaIterator(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, pointer));
    pointers.push_back(pointer);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.front(), document);
  EXPECT_EQ(pointers.size(), 1);
  EXPECT_EQ(pointers.front(), sourcemeta::jsontoolkit::Pointer{});
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
  std::vector<sourcemeta::jsontoolkit::Pointer> pointers;
  for (const auto &pointer : sourcemeta::jsontoolkit::SchemaIteratorFlat(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, pointer));
    pointers.push_back(pointer);
  }

  EXPECT_TRUE(subschemas.empty());
  EXPECT_TRUE(pointers.empty());
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
  std::vector<sourcemeta::jsontoolkit::Pointer> pointers;
  for (const auto &pointer : sourcemeta::jsontoolkit::SchemaIterator(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, pointer));
    pointers.push_back(pointer);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.front(), document);
  EXPECT_EQ(pointers.size(), 1);
  EXPECT_EQ(pointers.front(), sourcemeta::jsontoolkit::Pointer{});
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
  std::vector<sourcemeta::jsontoolkit::Pointer> pointers;
  for (const auto &pointer : sourcemeta::jsontoolkit::SchemaIteratorFlat(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, pointer));
    pointers.push_back(pointer);
  }

  EXPECT_TRUE(subschemas.empty());
  EXPECT_TRUE(pointers.empty());
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
  std::vector<sourcemeta::jsontoolkit::Pointer> pointers;
  for (const auto &pointer : sourcemeta::jsontoolkit::SchemaIterator(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, pointer));
    pointers.push_back(pointer);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.front(), document);
  EXPECT_EQ(pointers.size(), 1);
  EXPECT_EQ(pointers.front(), sourcemeta::jsontoolkit::Pointer{});
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
  std::vector<sourcemeta::jsontoolkit::Pointer> pointers;
  for (const auto &pointer : sourcemeta::jsontoolkit::SchemaIteratorFlat(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, pointer));
    pointers.push_back(pointer);
  }

  EXPECT_TRUE(subschemas.empty());
  EXPECT_TRUE(pointers.empty());
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
  std::vector<sourcemeta::jsontoolkit::Pointer> pointers;
  for (const auto &pointer : sourcemeta::jsontoolkit::SchemaIterator(
           document, sourcemeta::jsontoolkit::schema_walker_none,
           sourcemeta::jsontoolkit::official_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, pointer));
    pointers.push_back(pointer);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.front(), document);
  EXPECT_EQ(pointers.size(), 1);
  EXPECT_EQ(pointers.front(), sourcemeta::jsontoolkit::Pointer{});
}
