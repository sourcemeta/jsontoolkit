#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <vector>

static auto test_resolver(std::string_view identifier)
    -> std::optional<sourcemeta::jsontoolkit::JSON> {
  if (identifier == "https://sourcemeta.com/test-metaschema") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://sourcemeta.com/test-metaschema",
      "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/core": true,
        "https://sourcemeta.com/vocab/test-1": true
      }
    })JSON");
  } else if (identifier == "https://sourcemeta.com/custom-vocab") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://sourcemeta.com/custom-vocab",
      "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/core": true,
        "https://sourcemeta.com/vocab/test-2": true
      }
    })JSON");
  } else {
    return sourcemeta::jsontoolkit::official_resolver(identifier);
  }
}

static auto test_walker(std::string_view keyword,
                        const std::map<std::string, bool> &vocabularies)
    -> sourcemeta::jsontoolkit::SchemaWalkerResult {
  if (vocabularies.find("https://sourcemeta.com/vocab/test-1") !=
      vocabularies.end()) {
    if (keyword == "schema") {
      return {sourcemeta::jsontoolkit::KeywordType::ApplicatorValue,
              "https://sourcemeta.com/vocab/test-1",
              {}};
    }

    if (keyword == "schemas") {
      return {sourcemeta::jsontoolkit::KeywordType::ApplicatorElements,
              "https://sourcemeta.com/vocab/test-1",
              {}};
    }

    if (keyword == "schemaMap") {
      return {sourcemeta::jsontoolkit::KeywordType::ApplicatorMembers,
              "https://sourcemeta.com/vocab/test-1",
              {}};
    }

    if (keyword == "schemaOrSchemas") {
      return {sourcemeta::jsontoolkit::KeywordType::ApplicatorValueOrElements,
              "https://sourcemeta.com/vocab/test-1",
              {}};
    }

    if (keyword == "schemasOrMap") {
      return {sourcemeta::jsontoolkit::KeywordType::ApplicatorElementsOrMembers,
              "https://sourcemeta.com/vocab/test-1",
              {}};
    }
  }

  if (vocabularies.find("https://sourcemeta.com/vocab/test-2") !=
      vocabularies.end()) {
    if (keyword == "custom") {
      return {sourcemeta::jsontoolkit::KeywordType::ApplicatorValue,
              "https://sourcemeta.com/vocab/test-2",
              {}};
    }
  }

  return {sourcemeta::jsontoolkit::KeywordType::Unknown, std::nullopt, {}};
}

TEST(JSONSchema_walker, true) {
  const sourcemeta::jsontoolkit::JSON document{true};
  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.at(0).is_boolean(), true);
  EXPECT_EQ(subschemas.at(0).to_boolean(), true);
  EXPECT_EQ(entries.size(), 1);

  EXPECT_EQ(entries.at(0).pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_FALSE(entries.at(0).dialect.has_value());
  EXPECT_FALSE(entries.at(0).base_dialect.has_value());
  EXPECT_TRUE(entries.at(0).vocabularies.empty());
}

TEST(JSONSchema_walker, false) {
  const sourcemeta::jsontoolkit::JSON document{false};
  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.at(0).is_boolean(), true);
  EXPECT_EQ(subschemas.at(0).to_boolean(), false);
  EXPECT_EQ(entries.size(), 1);
  EXPECT_EQ(entries.at(0).pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_FALSE(entries.at(0).dialect.has_value());
  EXPECT_FALSE(entries.at(0).base_dialect.has_value());
  EXPECT_TRUE(entries.at(0).vocabularies.empty());
}

TEST(JSONSchema_walker, value) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": {
      "schema": {
        "foo": 1
      }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 3);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": {
      "schema": {
        "foo": 1
      }
    }
  })JSON"));
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": {
      "foo": 1
    }
  })JSON"));
  EXPECT_EQ(subschemas.at(2), sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": 1
  })JSON"));

  EXPECT_EQ(entries.size(), 3);

  EXPECT_EQ(entries.at(0).pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.at(0).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(0).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(entries.at(1).pointer, sourcemeta::jsontoolkit::Pointer{"schema"});
  EXPECT_EQ(entries.at(1).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(1).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(entries.at(2).pointer,
            sourcemeta::jsontoolkit::Pointer({"schema", "schema"}));
  EXPECT_EQ(entries.at(2).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(2).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_walker, value_invalid) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": [ { "foo": 1 } ]
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": [ { "foo": 1 } ]
  })JSON"));

  EXPECT_EQ(entries.size(), 1);
  EXPECT_EQ(entries.at(0).pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.at(0).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(0).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_walker, elements) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemas": [ { "foo": 1 }, { "schema": { "bar": 2 } } ]
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 4);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemas": [ { "foo": 1 }, { "schema": { "bar": 2 } } ]
  })JSON"));
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": 1
  })JSON"));
  EXPECT_EQ(subschemas.at(2), sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": { "bar": 2 }
  })JSON"));
  EXPECT_EQ(subschemas.at(3), sourcemeta::jsontoolkit::parse(R"JSON({
    "bar": 2
  })JSON"));

  EXPECT_EQ(entries.size(), 4);

  EXPECT_EQ(entries.at(0).pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.at(0).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(0).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(entries.at(1).pointer,
            sourcemeta::jsontoolkit::Pointer({"schemas", 0}));
  EXPECT_EQ(entries.at(1).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(1).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(entries.at(2).pointer,
            sourcemeta::jsontoolkit::Pointer({"schemas", 1}));
  EXPECT_EQ(entries.at(2).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(2).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(entries.at(3).pointer,
            sourcemeta::jsontoolkit::Pointer({"schemas", 1, "schema"}));
  EXPECT_EQ(entries.at(3).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(3).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_walker, elements_invalid) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemas": { "foo": 1 }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemas": { "foo": 1 }
  })JSON"));

  EXPECT_EQ(entries.size(), 1);
  EXPECT_EQ(entries.at(0).pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.at(0).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(0).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_walker, members) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemaMap": {
      "foo": {
        "schema": {
          "bar": 1
        }
      }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 3);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemaMap": {
      "foo": {
        "schema": {
          "bar": 1
        }
      }
    }
  })JSON"));
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": { "bar": 1 }
  })JSON"));
  EXPECT_EQ(subschemas.at(2), sourcemeta::jsontoolkit::parse(R"JSON({
    "bar": 1
  })JSON"));

  EXPECT_EQ(entries.size(), 3);

  EXPECT_EQ(entries.at(0).pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.at(0).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(0).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(entries.at(1).pointer,
            sourcemeta::jsontoolkit::Pointer({"schemaMap", "foo"}));
  EXPECT_EQ(entries.at(1).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(1).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(entries.at(2).pointer,
            sourcemeta::jsontoolkit::Pointer({"schemaMap", "foo", "schema"}));
  EXPECT_EQ(entries.at(2).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(2).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_walker, members_invalid) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemaMap": [ { "foo": 1 } ]
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemaMap": [ { "foo": 1 } ]
  })JSON"));

  EXPECT_EQ(entries.size(), 1);
  EXPECT_EQ(entries.at(0).pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.at(0).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(0).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_walker, value_or_elements) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemaOrSchemas": {
      "schemaOrSchemas": [
        { "foo": 1 }
      ]
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 3);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemaOrSchemas": {
      "schemaOrSchemas": [
        { "foo": 1 }
      ]
    }
  })JSON"));
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "schemaOrSchemas": [ { "foo": 1 } ]
  })JSON"));

  EXPECT_EQ(subschemas.at(2), sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": 1
  })JSON"));

  EXPECT_EQ(entries.size(), 3);

  EXPECT_EQ(entries.at(0).pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.at(0).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(0).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(entries.at(1).pointer,
            sourcemeta::jsontoolkit::Pointer{"schemaOrSchemas"});
  EXPECT_EQ(entries.at(1).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(1).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(entries.at(2).pointer,
            sourcemeta::jsontoolkit::Pointer(
                {"schemaOrSchemas", "schemaOrSchemas", 0}));
  EXPECT_EQ(entries.at(2).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(2).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_walker, elements_or_members) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemasOrMap": [
      {
        "schemasOrMap": {
          "foo": { "bar": 1 }
        }
      }
    ]
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 3);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemasOrMap": [
      {
        "schemasOrMap": {
          "foo": { "bar": 1 }
        }
      }
    ]
  })JSON"));
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "schemasOrMap": {
      "foo": { "bar": 1 }
    }
  })JSON"));
  EXPECT_EQ(subschemas.at(2), sourcemeta::jsontoolkit::parse(R"JSON({
    "bar": 1
  })JSON"));

  EXPECT_EQ(entries.size(), 3);

  EXPECT_EQ(entries.at(0).pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.at(0).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(0).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(entries.at(1).pointer,
            sourcemeta::jsontoolkit::Pointer({"schemasOrMap", 0}));
  EXPECT_EQ(entries.at(1).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(1).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(entries.at(2).pointer,
            sourcemeta::jsontoolkit::Pointer(
                {"schemasOrMap", 0, "schemasOrMap", "foo"}));
  EXPECT_EQ(entries.at(2).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(2).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_walker, no_metaschema_and_no_default) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": { "foo": 1 }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": { "foo": 1 }
  })JSON"));

  EXPECT_EQ(entries.size(), 1);
  EXPECT_EQ(entries.at(0).pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_FALSE(entries.at(0).dialect.has_value());
  EXPECT_FALSE(entries.at(0).base_dialect.has_value());
}

TEST(JSONSchema_walker, no_metaschema_with_default) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": {
      "schema": {
        "foo": 1
      }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, test_walker, test_resolver,
           "https://sourcemeta.com/test-metaschema")) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 3);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": {
      "schema": {
        "foo": 1
      }
    }
  })JSON"));
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": {
      "foo": 1
    }
  })JSON"));
  EXPECT_EQ(subschemas.at(2), sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": 1
  })JSON"));

  EXPECT_EQ(entries.size(), 3);

  EXPECT_EQ(entries.at(0).pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.at(0).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(0).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(entries.at(1).pointer, sourcemeta::jsontoolkit::Pointer{"schema"});
  EXPECT_EQ(entries.at(1).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(1).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(entries.at(2).pointer,
            sourcemeta::jsontoolkit::Pointer({"schema", "schema"}));
  EXPECT_EQ(entries.at(2).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(2).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_walker, unknown_keyword_from_other_vocab) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": {
      "custom": { "foo": 1 }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 2);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": {
      "custom": { "foo": 1 }
    }
  })JSON"));
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "custom": { "foo": 1 }
  })JSON"));

  EXPECT_EQ(entries.size(), 2);

  EXPECT_EQ(entries.at(0).pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.at(0).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(0).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(entries.at(1).pointer, sourcemeta::jsontoolkit::Pointer{"schema"});
  EXPECT_EQ(entries.at(1).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(1).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_walker, multi_metaschemas) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": {
      "$schema": "https://sourcemeta.com/custom-vocab",
      "custom": { "foo": 1 }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 3);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": {
      "$schema": "https://sourcemeta.com/custom-vocab",
      "custom": { "foo": 1 }
    }
  })JSON"));
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/custom-vocab",
    "custom": { "foo": 1 }
  })JSON"));
  EXPECT_EQ(subschemas.at(2), sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": 1
  })JSON"));

  EXPECT_EQ(entries.size(), 3);

  EXPECT_EQ(entries.at(0).pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.at(0).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(0).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(entries.at(1).pointer, sourcemeta::jsontoolkit::Pointer{"schema"});
  EXPECT_EQ(entries.at(1).dialect, "https://sourcemeta.com/custom-vocab");
  EXPECT_EQ(entries.at(1).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(entries.at(2).pointer,
            sourcemeta::jsontoolkit::Pointer({"schema", "custom"}));
  EXPECT_EQ(entries.at(2).dialect, "https://sourcemeta.com/custom-vocab");
  EXPECT_EQ(entries.at(2).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_walker, flat) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": {
      "schema": { "foo": 1 }
    },
    "schemaMap": {
      "foo": {
        "schema": { "foo": 2 }
      }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIteratorFlat(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 2);
  EXPECT_EQ(entries.size(), 2);

  // We don't guarantee any specific ordering
  if (subschemas.at(0).at("schema").at("foo").to_integer() == 1) {
    EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
      "schema": { "foo": 1 }
    })JSON"));
    EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
      "schema": { "foo": 2 }
    })JSON"));

    EXPECT_EQ(entries.at(0).pointer,
              sourcemeta::jsontoolkit::Pointer{"schema"});
    EXPECT_EQ(entries.at(0).dialect, "https://sourcemeta.com/test-metaschema");
    EXPECT_EQ(entries.at(0).base_dialect,
              "https://json-schema.org/draft/2020-12/schema");

    EXPECT_EQ(entries.at(1).pointer,
              sourcemeta::jsontoolkit::Pointer({"schemaMap", "foo"}));
    EXPECT_EQ(entries.at(1).dialect, "https://sourcemeta.com/test-metaschema");
    EXPECT_EQ(entries.at(1).base_dialect,
              "https://json-schema.org/draft/2020-12/schema");
  } else {
    EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
      "schema": { "foo": 1 }
    })JSON"));
    EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
      "schema": { "foo": 2 }
    })JSON"));

    EXPECT_EQ(entries.at(1).pointer,
              sourcemeta::jsontoolkit::Pointer{"schema"});
    EXPECT_EQ(entries.at(1).dialect, "https://sourcemeta.com/test-metaschema");
    EXPECT_EQ(entries.at(1).base_dialect,
              "https://json-schema.org/draft/2020-12/schema");

    EXPECT_EQ(entries.at(0).pointer,
              sourcemeta::jsontoolkit::Pointer({"schemaMap", "foo"}));
    EXPECT_EQ(entries.at(0).dialect, "https://sourcemeta.com/test-metaschema");
    EXPECT_EQ(entries.at(0).base_dialect,
              "https://json-schema.org/draft/2020-12/schema");
  }
}

TEST(JSONSchema_walker, flat_non_modify) {
  const std::string json{R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": {
      "schema": { "foo": 1 }
    },
    "schemaMap": {
      "foo": {
        "schema": { "foo": 2 }
      }
    }
  })JSON"};

  sourcemeta::jsontoolkit::JSON document = sourcemeta::jsontoolkit::parse(json);
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIteratorFlat(
           document, test_walker, test_resolver)) {
    sourcemeta::jsontoolkit::set(document, entry.pointer,
                                 sourcemeta::jsontoolkit::JSON{true});
  }

  EXPECT_EQ(document, sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": true,
    "schemaMap": {
      "foo": true
    }
  })JSON"));
}

TEST(JSONSchema_walker, flat_no_metaschema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({ "foo": 1 })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIteratorFlat(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 0);
  EXPECT_EQ(entries.size(), 0);
}

TEST(JSONSchema_walker, members_with_array) {
  const std::string json{R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemaMap": {
      "foo": { "test": 1 },
      "bar": [ "baz" ]
    }
  })JSON"};

  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(json);
  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 2);
  EXPECT_EQ(subschemas.at(0), document);
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "test": 1
  })JSON"));

  EXPECT_EQ(entries.size(), 2);

  EXPECT_EQ(entries.at(0).pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.at(0).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(0).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(entries.at(1).pointer,
            sourcemeta::jsontoolkit::Pointer({"schemaMap", "foo"}));
  EXPECT_EQ(entries.at(1).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(1).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_walker, elements_or_members_with_array_property) {
  const std::string json{R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemasOrMap": {
      "foo": { "test": 1 },
      "bar": [ "baz" ]
    }
  })JSON"};

  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(json);
  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 2);
  EXPECT_EQ(subschemas.at(0), document);
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "test": 1
  })JSON"));

  EXPECT_EQ(entries.size(), 2);

  EXPECT_EQ(entries.at(0).pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.at(0).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(0).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(entries.at(1).pointer,
            sourcemeta::jsontoolkit::Pointer({"schemasOrMap", "foo"}));
  EXPECT_EQ(entries.at(1).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(1).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_walker, elements_with_string_items) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemas": [ { "foo": 1 }, "foo" ]
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 2);
  EXPECT_EQ(subschemas.at(0), document);
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": 1
  })JSON"));

  EXPECT_EQ(entries.size(), 2);

  EXPECT_EQ(entries.at(0).pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.at(0).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(0).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(entries.at(1).pointer,
            sourcemeta::jsontoolkit::Pointer({"schemas", 0}));
  EXPECT_EQ(entries.at(1).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(1).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_walker, value_or_elements_with_string_items) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemaOrSchemas": [ { "foo": 1 }, "foo" ]
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::get(document, entry.pointer));
    entries.push_back(entry);
  }

  EXPECT_EQ(subschemas.size(), 2);
  EXPECT_EQ(subschemas.at(0), document);
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": 1
  })JSON"));

  EXPECT_EQ(entries.size(), 2);

  EXPECT_EQ(entries.at(0).pointer, sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(entries.at(0).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(0).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(entries.at(1).pointer,
            sourcemeta::jsontoolkit::Pointer({"schemaOrSchemas", 0}));
  EXPECT_EQ(entries.at(1).dialect, "https://sourcemeta.com/test-metaschema");
  EXPECT_EQ(entries.at(1).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");
}
