#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <vector>

TEST(JSONSchema_keyword_iterator, draft_2020_12) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {},
    "patternProperties": {},
    "additionalProperties": true,
    "unevaluatedProperties": true,
    "prefixItems": [],
    "items": true,
    "minContains": 0,
    "maxContains": 1,
    "contains": true,
    "unevaluatedItems": true,
    "if": true,
    "then": true,
    "else": true
  })JSON");

  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaKeywordIterator(
           document, sourcemeta::jsontoolkit::default_schema_walker,
           sourcemeta::jsontoolkit::official_resolver)) {
    entries.push_back(entry);

    // The same for all entries
    EXPECT_EQ(entry.dialect, "https://json-schema.org/draft/2020-12/schema");
    EXPECT_EQ(entry.base_dialect,
              "https://json-schema.org/draft/2020-12/schema");
    EXPECT_EQ(entry.vocabularies.size(), 7);
  }

  EXPECT_EQ(entries.size(), 14);

  EXPECT_EQ(entries.at(0).pointer,
            sourcemeta::jsontoolkit::Pointer({"$schema"}));
  EXPECT_EQ(entries.at(0).value,
            sourcemeta::jsontoolkit::JSON{
                "https://json-schema.org/draft/2020-12/schema"});

  EXPECT_EQ(entries.at(1).pointer, sourcemeta::jsontoolkit::Pointer({"if"}));
  EXPECT_EQ(entries.at(1).value, sourcemeta::jsontoolkit::JSON{true});

  EXPECT_EQ(entries.at(2).pointer,
            sourcemeta::jsontoolkit::Pointer({"maxContains"}));
  EXPECT_EQ(entries.at(2).value, sourcemeta::jsontoolkit::JSON{1});

  EXPECT_EQ(entries.at(3).pointer,
            sourcemeta::jsontoolkit::Pointer({"minContains"}));
  EXPECT_EQ(entries.at(3).value, sourcemeta::jsontoolkit::JSON{0});

  EXPECT_EQ(entries.at(4).pointer,
            sourcemeta::jsontoolkit::Pointer({"patternProperties"}));
  EXPECT_EQ(entries.at(4).value, sourcemeta::jsontoolkit::parse("{}"));

  EXPECT_EQ(entries.at(5).pointer,
            sourcemeta::jsontoolkit::Pointer({"prefixItems"}));
  EXPECT_EQ(entries.at(5).value, sourcemeta::jsontoolkit::parse("[]"));

  EXPECT_EQ(entries.at(6).pointer,
            sourcemeta::jsontoolkit::Pointer({"properties"}));
  EXPECT_EQ(entries.at(6).value, sourcemeta::jsontoolkit::parse("{}"));

  EXPECT_EQ(entries.at(7).pointer,
            sourcemeta::jsontoolkit::Pointer({"additionalProperties"}));
  EXPECT_EQ(entries.at(7).value, sourcemeta::jsontoolkit::JSON{true});

  EXPECT_EQ(entries.at(8).pointer,
            sourcemeta::jsontoolkit::Pointer({"contains"}));
  EXPECT_EQ(entries.at(8).value, sourcemeta::jsontoolkit::JSON{true});

  EXPECT_EQ(entries.at(9).pointer, sourcemeta::jsontoolkit::Pointer({"else"}));
  EXPECT_EQ(entries.at(9).value, sourcemeta::jsontoolkit::JSON{true});

  EXPECT_EQ(entries.at(10).pointer,
            sourcemeta::jsontoolkit::Pointer({"items"}));
  EXPECT_EQ(entries.at(10).value, sourcemeta::jsontoolkit::JSON{true});

  EXPECT_EQ(entries.at(11).pointer, sourcemeta::jsontoolkit::Pointer({"then"}));
  EXPECT_EQ(entries.at(11).value, sourcemeta::jsontoolkit::JSON{true});

  EXPECT_EQ(entries.at(12).pointer,
            sourcemeta::jsontoolkit::Pointer({"unevaluatedItems"}));
  EXPECT_EQ(entries.at(12).value, sourcemeta::jsontoolkit::JSON{true});

  EXPECT_EQ(entries.at(13).pointer,
            sourcemeta::jsontoolkit::Pointer({"unevaluatedProperties"}));
  EXPECT_EQ(entries.at(13).value, sourcemeta::jsontoolkit::JSON{true});
}

TEST(JSONSchema_keyword_iterator, draft_2019_09) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "properties": {},
    "patternProperties": {},
    "additionalProperties": true,
    "unevaluatedProperties": true,
    "additionalItems": true,
    "items": [],
    "minContains": 0,
    "maxContains": 1,
    "contains": true,
    "unevaluatedItems": true,
    "if": true,
    "then": true,
    "else": true
  })JSON");

  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaKeywordIterator(
           document, sourcemeta::jsontoolkit::default_schema_walker,
           sourcemeta::jsontoolkit::official_resolver)) {
    entries.push_back(entry);

    // The same for all entries
    EXPECT_EQ(entry.dialect, "https://json-schema.org/draft/2019-09/schema");
    EXPECT_EQ(entry.base_dialect,
              "https://json-schema.org/draft/2019-09/schema");
    EXPECT_EQ(entry.vocabularies.size(), 6);
  }

  EXPECT_EQ(entries.size(), 14);

  EXPECT_EQ(entries.at(0).pointer,
            sourcemeta::jsontoolkit::Pointer({"$schema"}));
  EXPECT_EQ(entries.at(0).value,
            sourcemeta::jsontoolkit::JSON{
                "https://json-schema.org/draft/2019-09/schema"});

  EXPECT_EQ(entries.at(1).pointer, sourcemeta::jsontoolkit::Pointer({"if"}));
  EXPECT_EQ(entries.at(1).value, sourcemeta::jsontoolkit::JSON{true});

  EXPECT_EQ(entries.at(2).pointer, sourcemeta::jsontoolkit::Pointer({"items"}));
  EXPECT_EQ(entries.at(2).value, sourcemeta::jsontoolkit::parse("[]"));

  EXPECT_EQ(entries.at(3).pointer,
            sourcemeta::jsontoolkit::Pointer({"maxContains"}));
  EXPECT_EQ(entries.at(3).value, sourcemeta::jsontoolkit::JSON{1});

  EXPECT_EQ(entries.at(4).pointer,
            sourcemeta::jsontoolkit::Pointer({"minContains"}));
  EXPECT_EQ(entries.at(4).value, sourcemeta::jsontoolkit::JSON{0});

  EXPECT_EQ(entries.at(5).pointer,
            sourcemeta::jsontoolkit::Pointer({"patternProperties"}));
  EXPECT_EQ(entries.at(5).value, sourcemeta::jsontoolkit::parse("{}"));

  EXPECT_EQ(entries.at(6).pointer,
            sourcemeta::jsontoolkit::Pointer({"properties"}));
  EXPECT_EQ(entries.at(6).value, sourcemeta::jsontoolkit::parse("{}"));

  EXPECT_EQ(entries.at(7).pointer,
            sourcemeta::jsontoolkit::Pointer({"additionalItems"}));
  EXPECT_EQ(entries.at(7).value, sourcemeta::jsontoolkit::JSON{true});

  EXPECT_EQ(entries.at(8).pointer,
            sourcemeta::jsontoolkit::Pointer({"additionalProperties"}));
  EXPECT_EQ(entries.at(8).value, sourcemeta::jsontoolkit::JSON{true});

  EXPECT_EQ(entries.at(9).pointer,
            sourcemeta::jsontoolkit::Pointer({"contains"}));
  EXPECT_EQ(entries.at(9).value, sourcemeta::jsontoolkit::JSON{true});

  EXPECT_EQ(entries.at(10).pointer, sourcemeta::jsontoolkit::Pointer({"else"}));
  EXPECT_EQ(entries.at(10).value, sourcemeta::jsontoolkit::JSON{true});

  EXPECT_EQ(entries.at(11).pointer, sourcemeta::jsontoolkit::Pointer({"then"}));
  EXPECT_EQ(entries.at(11).value, sourcemeta::jsontoolkit::JSON{true});

  EXPECT_EQ(entries.at(12).pointer,
            sourcemeta::jsontoolkit::Pointer({"unevaluatedItems"}));
  EXPECT_EQ(entries.at(12).value, sourcemeta::jsontoolkit::JSON{true});

  EXPECT_EQ(entries.at(13).pointer,
            sourcemeta::jsontoolkit::Pointer({"unevaluatedProperties"}));
  EXPECT_EQ(entries.at(13).value, sourcemeta::jsontoolkit::JSON{true});
}

TEST(JSONSchema_keyword_iterator, draft7) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {},
    "patternProperties": {},
    "additionalProperties": true,
    "additionalItems": true,
    "items": [],
    "if": true,
    "then": true,
    "else": true
  })JSON");

  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaKeywordIterator(
           document, sourcemeta::jsontoolkit::default_schema_walker,
           sourcemeta::jsontoolkit::official_resolver)) {
    entries.push_back(entry);

    // The same for all entries
    EXPECT_EQ(entry.dialect, "http://json-schema.org/draft-07/schema#");
    EXPECT_EQ(entry.base_dialect, "http://json-schema.org/draft-07/schema#");
    EXPECT_EQ(entry.vocabularies.size(), 1);
  }

  EXPECT_EQ(entries.size(), 9);

  EXPECT_EQ(entries.at(0).pointer,
            sourcemeta::jsontoolkit::Pointer({"$schema"}));
  EXPECT_EQ(
      entries.at(0).value,
      sourcemeta::jsontoolkit::JSON{"http://json-schema.org/draft-07/schema#"});

  EXPECT_EQ(entries.at(1).pointer, sourcemeta::jsontoolkit::Pointer({"if"}));
  EXPECT_EQ(entries.at(1).value, sourcemeta::jsontoolkit::JSON{true});

  EXPECT_EQ(entries.at(2).pointer, sourcemeta::jsontoolkit::Pointer({"items"}));
  EXPECT_EQ(entries.at(2).value, sourcemeta::jsontoolkit::parse("[]"));

  EXPECT_EQ(entries.at(3).pointer,
            sourcemeta::jsontoolkit::Pointer({"patternProperties"}));
  EXPECT_EQ(entries.at(3).value, sourcemeta::jsontoolkit::parse("{}"));

  EXPECT_EQ(entries.at(4).pointer,
            sourcemeta::jsontoolkit::Pointer({"properties"}));
  EXPECT_EQ(entries.at(4).value, sourcemeta::jsontoolkit::parse("{}"));

  EXPECT_EQ(entries.at(5).pointer,
            sourcemeta::jsontoolkit::Pointer({"additionalItems"}));
  EXPECT_EQ(entries.at(5).value, sourcemeta::jsontoolkit::JSON{true});

  EXPECT_EQ(entries.at(6).pointer,
            sourcemeta::jsontoolkit::Pointer({"additionalProperties"}));
  EXPECT_EQ(entries.at(6).value, sourcemeta::jsontoolkit::JSON{true});

  EXPECT_EQ(entries.at(7).pointer, sourcemeta::jsontoolkit::Pointer({"else"}));
  EXPECT_EQ(entries.at(7).value, sourcemeta::jsontoolkit::JSON{true});

  EXPECT_EQ(entries.at(8).pointer, sourcemeta::jsontoolkit::Pointer({"then"}));
  EXPECT_EQ(entries.at(8).value, sourcemeta::jsontoolkit::JSON{true});
}

TEST(JSONSchema_keyword_iterator, draft6) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-06/schema#",
    "properties": {},
    "patternProperties": {},
    "additionalProperties": true,
    "additionalItems": true,
    "items": []
  })JSON");

  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaKeywordIterator(
           document, sourcemeta::jsontoolkit::default_schema_walker,
           sourcemeta::jsontoolkit::official_resolver)) {
    entries.push_back(entry);

    // The same for all entries
    EXPECT_EQ(entry.dialect, "http://json-schema.org/draft-06/schema#");
    EXPECT_EQ(entry.base_dialect, "http://json-schema.org/draft-06/schema#");
    EXPECT_EQ(entry.vocabularies.size(), 1);
  }

  EXPECT_EQ(entries.size(), 6);

  EXPECT_EQ(entries.at(0).pointer,
            sourcemeta::jsontoolkit::Pointer({"$schema"}));
  EXPECT_EQ(
      entries.at(0).value,
      sourcemeta::jsontoolkit::JSON{"http://json-schema.org/draft-06/schema#"});

  EXPECT_EQ(entries.at(1).pointer, sourcemeta::jsontoolkit::Pointer({"items"}));
  EXPECT_EQ(entries.at(1).value, sourcemeta::jsontoolkit::parse("[]"));

  EXPECT_EQ(entries.at(2).pointer,
            sourcemeta::jsontoolkit::Pointer({"patternProperties"}));
  EXPECT_EQ(entries.at(2).value, sourcemeta::jsontoolkit::parse("{}"));

  EXPECT_EQ(entries.at(3).pointer,
            sourcemeta::jsontoolkit::Pointer({"properties"}));
  EXPECT_EQ(entries.at(3).value, sourcemeta::jsontoolkit::parse("{}"));

  EXPECT_EQ(entries.at(4).pointer,
            sourcemeta::jsontoolkit::Pointer({"additionalItems"}));
  EXPECT_EQ(entries.at(4).value, sourcemeta::jsontoolkit::JSON{true});

  EXPECT_EQ(entries.at(5).pointer,
            sourcemeta::jsontoolkit::Pointer({"additionalProperties"}));
  EXPECT_EQ(entries.at(5).value, sourcemeta::jsontoolkit::JSON{true});
}

TEST(JSONSchema_keyword_iterator, draft4) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "properties": {},
    "patternProperties": {},
    "additionalProperties": true,
    "additionalItems": true,
    "items": []
  })JSON");

  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaKeywordIterator(
           document, sourcemeta::jsontoolkit::default_schema_walker,
           sourcemeta::jsontoolkit::official_resolver)) {
    entries.push_back(entry);

    // The same for all entries
    EXPECT_EQ(entry.dialect, "http://json-schema.org/draft-04/schema#");
    EXPECT_EQ(entry.base_dialect, "http://json-schema.org/draft-04/schema#");
    EXPECT_EQ(entry.vocabularies.size(), 1);
  }

  EXPECT_EQ(entries.size(), 6);

  EXPECT_EQ(entries.at(0).pointer,
            sourcemeta::jsontoolkit::Pointer({"$schema"}));
  EXPECT_EQ(
      entries.at(0).value,
      sourcemeta::jsontoolkit::JSON{"http://json-schema.org/draft-04/schema#"});

  EXPECT_EQ(entries.at(1).pointer, sourcemeta::jsontoolkit::Pointer({"items"}));
  EXPECT_EQ(entries.at(1).value, sourcemeta::jsontoolkit::parse("[]"));

  EXPECT_EQ(entries.at(2).pointer,
            sourcemeta::jsontoolkit::Pointer({"patternProperties"}));
  EXPECT_EQ(entries.at(2).value, sourcemeta::jsontoolkit::parse("{}"));

  EXPECT_EQ(entries.at(3).pointer,
            sourcemeta::jsontoolkit::Pointer({"properties"}));
  EXPECT_EQ(entries.at(3).value, sourcemeta::jsontoolkit::parse("{}"));

  EXPECT_EQ(entries.at(4).pointer,
            sourcemeta::jsontoolkit::Pointer({"additionalItems"}));
  EXPECT_EQ(entries.at(4).value, sourcemeta::jsontoolkit::JSON{true});

  EXPECT_EQ(entries.at(5).pointer,
            sourcemeta::jsontoolkit::Pointer({"additionalProperties"}));
  EXPECT_EQ(entries.at(5).value, sourcemeta::jsontoolkit::JSON{true});
}

TEST(JSONSchema_keyword_iterator, draft3) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-03/schema#",
    "properties": {},
    "patternProperties": {},
    "additionalProperties": true,
    "additionalItems": true,
    "items": []
  })JSON");

  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaKeywordIterator(
           document, sourcemeta::jsontoolkit::default_schema_walker,
           sourcemeta::jsontoolkit::official_resolver)) {
    entries.push_back(entry);

    // The same for all entries
    EXPECT_EQ(entry.dialect, "http://json-schema.org/draft-03/schema#");
    EXPECT_EQ(entry.base_dialect, "http://json-schema.org/draft-03/schema#");
    EXPECT_EQ(entry.vocabularies.size(), 1);
  }

  EXPECT_EQ(entries.size(), 6);

  EXPECT_EQ(entries.at(0).pointer,
            sourcemeta::jsontoolkit::Pointer({"$schema"}));
  EXPECT_EQ(
      entries.at(0).value,
      sourcemeta::jsontoolkit::JSON{"http://json-schema.org/draft-03/schema#"});

  EXPECT_EQ(entries.at(1).pointer, sourcemeta::jsontoolkit::Pointer({"items"}));
  EXPECT_EQ(entries.at(1).value, sourcemeta::jsontoolkit::parse("[]"));

  EXPECT_EQ(entries.at(2).pointer,
            sourcemeta::jsontoolkit::Pointer({"patternProperties"}));
  EXPECT_EQ(entries.at(2).value, sourcemeta::jsontoolkit::parse("{}"));

  EXPECT_EQ(entries.at(3).pointer,
            sourcemeta::jsontoolkit::Pointer({"properties"}));
  EXPECT_EQ(entries.at(3).value, sourcemeta::jsontoolkit::parse("{}"));

  EXPECT_EQ(entries.at(4).pointer,
            sourcemeta::jsontoolkit::Pointer({"additionalItems"}));
  EXPECT_EQ(entries.at(4).value, sourcemeta::jsontoolkit::JSON{true});

  EXPECT_EQ(entries.at(5).pointer,
            sourcemeta::jsontoolkit::Pointer({"additionalProperties"}));
  EXPECT_EQ(entries.at(5).value, sourcemeta::jsontoolkit::JSON{true});
}

TEST(JSONSchema_keyword_iterator, draft2) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-02/schema#",
    "properties": {},
    "additionalProperties": true
  })JSON");

  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaKeywordIterator(
           document, sourcemeta::jsontoolkit::default_schema_walker,
           sourcemeta::jsontoolkit::official_resolver)) {
    entries.push_back(entry);

    // The same for all entries
    EXPECT_EQ(entry.dialect, "http://json-schema.org/draft-02/schema#");
    EXPECT_EQ(entry.base_dialect,
              "http://json-schema.org/draft-02/hyper-schema#");
    EXPECT_EQ(entry.vocabularies.size(), 1);
  }

  EXPECT_EQ(entries.size(), 3);

  EXPECT_EQ(entries.at(0).pointer,
            sourcemeta::jsontoolkit::Pointer({"$schema"}));
  EXPECT_EQ(
      entries.at(0).value,
      sourcemeta::jsontoolkit::JSON{"http://json-schema.org/draft-02/schema#"});

  EXPECT_EQ(entries.at(1).pointer,
            sourcemeta::jsontoolkit::Pointer({"properties"}));
  EXPECT_EQ(entries.at(1).value, sourcemeta::jsontoolkit::parse("{}"));

  EXPECT_EQ(entries.at(2).pointer,
            sourcemeta::jsontoolkit::Pointer({"additionalProperties"}));
  EXPECT_EQ(entries.at(2).value, sourcemeta::jsontoolkit::JSON{true});
}

TEST(JSONSchema_keyword_iterator, draft1) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-01/schema#",
    "properties": {},
    "additionalProperties": true
  })JSON");

  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaKeywordIterator(
           document, sourcemeta::jsontoolkit::default_schema_walker,
           sourcemeta::jsontoolkit::official_resolver)) {
    entries.push_back(entry);

    // The same for all entries
    EXPECT_EQ(entry.dialect, "http://json-schema.org/draft-01/schema#");
    EXPECT_EQ(entry.base_dialect,
              "http://json-schema.org/draft-01/hyper-schema#");
    EXPECT_EQ(entry.vocabularies.size(), 1);
  }

  EXPECT_EQ(entries.size(), 3);

  EXPECT_EQ(entries.at(0).pointer,
            sourcemeta::jsontoolkit::Pointer({"$schema"}));
  EXPECT_EQ(
      entries.at(0).value,
      sourcemeta::jsontoolkit::JSON{"http://json-schema.org/draft-01/schema#"});

  EXPECT_EQ(entries.at(1).pointer,
            sourcemeta::jsontoolkit::Pointer({"properties"}));
  EXPECT_EQ(entries.at(1).value, sourcemeta::jsontoolkit::parse("{}"));

  EXPECT_EQ(entries.at(2).pointer,
            sourcemeta::jsontoolkit::Pointer({"additionalProperties"}));
  EXPECT_EQ(entries.at(2).value, sourcemeta::jsontoolkit::JSON{true});
}

TEST(JSONSchema_keyword_iterator, draft0) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-00/schema#",
    "properties": {},
    "additionalProperties": true
  })JSON");

  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaKeywordIterator(
           document, sourcemeta::jsontoolkit::default_schema_walker,
           sourcemeta::jsontoolkit::official_resolver)) {
    entries.push_back(entry);

    // The same for all entries
    EXPECT_EQ(entry.dialect, "http://json-schema.org/draft-00/schema#");
    EXPECT_EQ(entry.base_dialect,
              "http://json-schema.org/draft-00/hyper-schema#");
    EXPECT_EQ(entry.vocabularies.size(), 1);
  }

  EXPECT_EQ(entries.size(), 3);

  EXPECT_EQ(entries.at(0).pointer,
            sourcemeta::jsontoolkit::Pointer({"$schema"}));
  EXPECT_EQ(
      entries.at(0).value,
      sourcemeta::jsontoolkit::JSON{"http://json-schema.org/draft-00/schema#"});

  EXPECT_EQ(entries.at(1).pointer,
            sourcemeta::jsontoolkit::Pointer({"properties"}));
  EXPECT_EQ(entries.at(1).value, sourcemeta::jsontoolkit::parse("{}"));

  EXPECT_EQ(entries.at(2).pointer,
            sourcemeta::jsontoolkit::Pointer({"additionalProperties"}));
  EXPECT_EQ(entries.at(2).value, sourcemeta::jsontoolkit::JSON{true});
}

TEST(JSONSchema_keyword_iterator, unknown_keyword) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "foobar": 0
  })JSON");

  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaKeywordIterator(
           document, sourcemeta::jsontoolkit::default_schema_walker,
           sourcemeta::jsontoolkit::official_resolver)) {
    entries.push_back(entry);
  }

  EXPECT_EQ(entries.size(), 2);

  EXPECT_EQ(entries.at(0).pointer,
            sourcemeta::jsontoolkit::Pointer({"$schema"}));
  EXPECT_EQ(entries.at(0).value,
            sourcemeta::jsontoolkit::JSON{
                "https://json-schema.org/draft/2020-12/schema"});
  EXPECT_EQ(entries.at(0).dialect,
            "https://json-schema.org/draft/2020-12/schema");
  EXPECT_EQ(entries.at(0).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");
  EXPECT_EQ(entries.at(0).vocabularies.size(), 7);

  EXPECT_EQ(entries.at(1).pointer,
            sourcemeta::jsontoolkit::Pointer({"foobar"}));
  EXPECT_EQ(entries.at(1).value, sourcemeta::jsontoolkit::JSON{0});
  EXPECT_EQ(entries.at(1).dialect,
            "https://json-schema.org/draft/2020-12/schema");
  EXPECT_EQ(entries.at(1).base_dialect,
            "https://json-schema.org/draft/2020-12/schema");
  EXPECT_EQ(entries.at(1).vocabularies.size(), 7);
}

TEST(JSONSchema_keyword_iterator, with_default_dialect) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "properties": {},
    "patternProperties": {},
    "additionalProperties": true
  })JSON");

  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaKeywordIterator(
           document, sourcemeta::jsontoolkit::default_schema_walker,
           sourcemeta::jsontoolkit::official_resolver,
           "https://json-schema.org/draft/2020-12/schema")) {
    entries.push_back(entry);

    // The same for all entries
    EXPECT_EQ(entry.dialect, "https://json-schema.org/draft/2020-12/schema");
    EXPECT_EQ(entry.base_dialect,
              "https://json-schema.org/draft/2020-12/schema");
    EXPECT_EQ(entry.vocabularies.size(), 7);
  }

  EXPECT_EQ(entries.size(), 3);

  EXPECT_EQ(entries.at(0).pointer,
            sourcemeta::jsontoolkit::Pointer({"patternProperties"}));
  EXPECT_EQ(entries.at(0).value, sourcemeta::jsontoolkit::parse("{}"));

  EXPECT_EQ(entries.at(1).pointer,
            sourcemeta::jsontoolkit::Pointer({"properties"}));
  EXPECT_EQ(entries.at(1).value, sourcemeta::jsontoolkit::parse("{}"));

  EXPECT_EQ(entries.at(2).pointer,
            sourcemeta::jsontoolkit::Pointer({"additionalProperties"}));
  EXPECT_EQ(entries.at(2).value, sourcemeta::jsontoolkit::JSON{true});
}

TEST(JSONSchema_keyword_iterator, no_default_dialect) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "properties": {},
    "patternProperties": {},
    "additionalProperties": true
  })JSON");

  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaKeywordIterator(
           document, sourcemeta::jsontoolkit::default_schema_walker,
           sourcemeta::jsontoolkit::official_resolver)) {
    entries.push_back(entry);

    // The same for all entries
    EXPECT_FALSE(entry.dialect.has_value());
    EXPECT_FALSE(entry.base_dialect.has_value());
    EXPECT_EQ(entry.vocabularies.size(), 0);
  }

  EXPECT_EQ(entries.size(), 3);

  EXPECT_EQ(entries.at(0).pointer,
            sourcemeta::jsontoolkit::Pointer({"additionalProperties"}));
  EXPECT_EQ(entries.at(0).value, sourcemeta::jsontoolkit::JSON{true});

  EXPECT_EQ(entries.at(1).pointer,
            sourcemeta::jsontoolkit::Pointer({"patternProperties"}));
  EXPECT_EQ(entries.at(1).value, sourcemeta::jsontoolkit::parse("{}"));

  EXPECT_EQ(entries.at(2).pointer,
            sourcemeta::jsontoolkit::Pointer({"properties"}));
  EXPECT_EQ(entries.at(2).value, sourcemeta::jsontoolkit::parse("{}"));
}

TEST(JSONSchema_keyword_iterator, boolean_true) {
  const sourcemeta::jsontoolkit::JSON document{true};

  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaKeywordIterator(
           document, sourcemeta::jsontoolkit::default_schema_walker,
           sourcemeta::jsontoolkit::official_resolver)) {
    entries.push_back(entry);
  }

  EXPECT_TRUE(entries.empty());
}

TEST(JSONSchema_keyword_iterator, boolean_false) {
  const sourcemeta::jsontoolkit::JSON document{false};

  std::vector<sourcemeta::jsontoolkit::SchemaIteratorEntry> entries;
  for (const auto &entry : sourcemeta::jsontoolkit::SchemaKeywordIterator(
           document, sourcemeta::jsontoolkit::default_schema_walker,
           sourcemeta::jsontoolkit::official_resolver)) {
    entries.push_back(entry);
  }

  EXPECT_TRUE(entries.empty());
}
