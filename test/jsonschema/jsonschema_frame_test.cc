#include <gtest/gtest.h>

#include <set>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include "jsonschema_test_utils.h"

TEST(JSONSchema_frame, nested_schemas_mixing_dialects) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/test",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$defs": {
      "foo": {
        "id": "foo",
        "$schema": "http://json-schema.org/draft-04/schema#",
        "definitions": {
          "bar": {
            "id": "bar",
            "type": "string"
          }
        }
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, static_frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 32);

  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/test"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/foo"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/bar"));

  EXPECT_FRAME(static_frame, "https://www.sourcemeta.com/test",
               "https://www.sourcemeta.com/test", "",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "https://www.sourcemeta.com/foo",
               "https://www.sourcemeta.com/test", "/$defs/foo",
               "http://json-schema.org/draft-04/schema#");
  EXPECT_FRAME(static_frame, "https://www.sourcemeta.com/bar",
               "https://www.sourcemeta.com/test", "/$defs/foo/definitions/bar",
               "http://json-schema.org/draft-04/schema#");

  // Bases

  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/test"),
            "https://www.sourcemeta.com/test");
  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/foo"),
            "https://www.sourcemeta.com/foo");
  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/bar"),
            "https://www.sourcemeta.com/bar");
  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/test#/$id"),
            "https://www.sourcemeta.com/test");
  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/test#/$schema"),
            "https://www.sourcemeta.com/test");
  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/test#/$defs"),
            "https://www.sourcemeta.com/test");
  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/test#/$defs/foo"),
            "https://www.sourcemeta.com/foo");
  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/test#/$defs/foo/id"),
            "https://www.sourcemeta.com/foo");
  EXPECT_EQ(
      static_frame.base("https://www.sourcemeta.com/test#/$defs/foo/$schema"),
      "https://www.sourcemeta.com/foo");
  EXPECT_EQ(static_frame.base(
                "https://www.sourcemeta.com/test#/$defs/foo/definitions"),
            "https://www.sourcemeta.com/foo");
  EXPECT_EQ(static_frame.base(
                "https://www.sourcemeta.com/test#/$defs/foo/definitions/bar"),
            "https://www.sourcemeta.com/bar");
  EXPECT_EQ(
      static_frame.base(
          "https://www.sourcemeta.com/test#/$defs/foo/definitions/bar/id"),
      "https://www.sourcemeta.com/bar");
  EXPECT_EQ(
      static_frame.base(
          "https://www.sourcemeta.com/test#/$defs/foo/definitions/bar/type"),
      "https://www.sourcemeta.com/bar");
  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/foo#/id"),
            "https://www.sourcemeta.com/foo");
  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/foo#/$schema"),
            "https://www.sourcemeta.com/foo");
  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/foo#/definitions"),
            "https://www.sourcemeta.com/foo");
  EXPECT_EQ(
      static_frame.base("https://www.sourcemeta.com/foo#/definitions/bar"),
      "https://www.sourcemeta.com/bar");
  EXPECT_EQ(
      static_frame.base("https://www.sourcemeta.com/foo#/definitions/bar/id"),
      "https://www.sourcemeta.com/bar");
  EXPECT_EQ(
      static_frame.base("https://www.sourcemeta.com/foo#/definitions/bar/type"),
      "https://www.sourcemeta.com/bar");
  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/bar#/id"),
            "https://www.sourcemeta.com/bar");
  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/bar#/type"),
            "https://www.sourcemeta.com/bar");

  // JSON Pointers

  EXPECT_FRAME(static_frame, "https://www.sourcemeta.com/test#/$id",
               "https://www.sourcemeta.com/test", "/$id",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "https://www.sourcemeta.com/test#/$schema",
               "https://www.sourcemeta.com/test", "/$schema",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "https://www.sourcemeta.com/test#/$defs",
               "https://www.sourcemeta.com/test", "/$defs",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "https://www.sourcemeta.com/test#/$defs/foo",
               "https://www.sourcemeta.com/test", "/$defs/foo",
               "http://json-schema.org/draft-04/schema#");
  EXPECT_FRAME(static_frame, "https://www.sourcemeta.com/test#/$defs/foo/id",
               "https://www.sourcemeta.com/test", "/$defs/foo/id",
               "http://json-schema.org/draft-04/schema#");
  EXPECT_FRAME(static_frame,
               "https://www.sourcemeta.com/test#/$defs/foo/$schema",
               "https://www.sourcemeta.com/test", "/$defs/foo/$schema",
               "http://json-schema.org/draft-04/schema#");
  EXPECT_FRAME(static_frame,
               "https://www.sourcemeta.com/test#/$defs/foo/definitions",
               "https://www.sourcemeta.com/test", "/$defs/foo/definitions",
               "http://json-schema.org/draft-04/schema#");
  EXPECT_FRAME(static_frame,
               "https://www.sourcemeta.com/test#/$defs/foo/definitions/bar",
               "https://www.sourcemeta.com/test", "/$defs/foo/definitions/bar",
               "http://json-schema.org/draft-04/schema#");
  EXPECT_FRAME(static_frame,
               "https://www.sourcemeta.com/test#/$defs/foo/definitions/bar/id",
               "https://www.sourcemeta.com/test",
               "/$defs/foo/definitions/bar/id",
               "http://json-schema.org/draft-04/schema#");
  EXPECT_FRAME(
      static_frame,
      "https://www.sourcemeta.com/test#/$defs/foo/definitions/bar/type",
      "https://www.sourcemeta.com/test", "/$defs/foo/definitions/bar/type",
      "http://json-schema.org/draft-04/schema#");
  EXPECT_FRAME(static_frame, "https://www.sourcemeta.com/foo#/id",
               "https://www.sourcemeta.com/test", "/$defs/foo/id",
               "http://json-schema.org/draft-04/schema#");
  EXPECT_FRAME(static_frame, "https://www.sourcemeta.com/foo#/$schema",
               "https://www.sourcemeta.com/test", "/$defs/foo/$schema",
               "http://json-schema.org/draft-04/schema#");
  EXPECT_FRAME(static_frame, "https://www.sourcemeta.com/foo#/definitions",
               "https://www.sourcemeta.com/test", "/$defs/foo/definitions",
               "http://json-schema.org/draft-04/schema#");
  EXPECT_FRAME(static_frame, "https://www.sourcemeta.com/foo#/definitions/bar",
               "https://www.sourcemeta.com/test", "/$defs/foo/definitions/bar",
               "http://json-schema.org/draft-04/schema#");
  EXPECT_FRAME(
      static_frame, "https://www.sourcemeta.com/foo#/definitions/bar/id",
      "https://www.sourcemeta.com/test", "/$defs/foo/definitions/bar/id",
      "http://json-schema.org/draft-04/schema#");
  EXPECT_FRAME(
      static_frame, "https://www.sourcemeta.com/foo#/definitions/bar/type",
      "https://www.sourcemeta.com/test", "/$defs/foo/definitions/bar/type",
      "http://json-schema.org/draft-04/schema#");
  EXPECT_FRAME(static_frame, "https://www.sourcemeta.com/bar#/id",
               "https://www.sourcemeta.com/test",
               "/$defs/foo/definitions/bar/id",
               "http://json-schema.org/draft-04/schema#");
  EXPECT_FRAME(static_frame, "https://www.sourcemeta.com/bar#/type",
               "https://www.sourcemeta.com/test",
               "/$defs/foo/definitions/bar/type",
               "http://json-schema.org/draft-04/schema#");

  EXPECT_FRAME(static_frame, "", "https://www.sourcemeta.com/test", "",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "#/$id", "https://www.sourcemeta.com/test", "/$id",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "#/$schema", "https://www.sourcemeta.com/test",
               "/$schema", "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "#/$defs", "https://www.sourcemeta.com/test",
               "/$defs", "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "#/$defs/foo", "https://www.sourcemeta.com/test",
               "/$defs/foo", "http://json-schema.org/draft-04/schema#");
  EXPECT_FRAME(static_frame, "#/$defs/foo/id",
               "https://www.sourcemeta.com/test", "/$defs/foo/id",
               "http://json-schema.org/draft-04/schema#");
  EXPECT_FRAME(static_frame, "#/$defs/foo/$schema",
               "https://www.sourcemeta.com/test", "/$defs/foo/$schema",
               "http://json-schema.org/draft-04/schema#");
  EXPECT_FRAME(static_frame, "#/$defs/foo/definitions",
               "https://www.sourcemeta.com/test", "/$defs/foo/definitions",
               "http://json-schema.org/draft-04/schema#");
  EXPECT_FRAME(static_frame, "#/$defs/foo/definitions/bar",
               "https://www.sourcemeta.com/test", "/$defs/foo/definitions/bar",
               "http://json-schema.org/draft-04/schema#");
  EXPECT_FRAME(static_frame, "#/$defs/foo/definitions/bar/id",
               "https://www.sourcemeta.com/test",
               "/$defs/foo/definitions/bar/id",
               "http://json-schema.org/draft-04/schema#");
  EXPECT_FRAME(static_frame, "#/$defs/foo/definitions/bar/type",
               "https://www.sourcemeta.com/test",
               "/$defs/foo/definitions/bar/type",
               "http://json-schema.org/draft-04/schema#");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame, no_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": {
        "$anchor": "foo",
        "type": "string"
      },
      "bar": {
        "$id": "https://example.com",
        "$anchor": "bar"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, static_frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 14);

  EXPECT_ANONYMOUS_FRAME(static_frame, "", "",
                         "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME(static_frame, "#/$schema", "/$schema",
                         "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME(static_frame, "#/properties", "/properties",
                         "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME(static_frame, "#/properties/foo", "/properties/foo",
                         "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME(static_frame, "#/properties/foo/$anchor",
                         "/properties/foo/$anchor",
                         "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME(static_frame, "#/properties/foo/type",
                         "/properties/foo/type",
                         "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME(static_frame, "#foo", "/properties/foo",
                         "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME(static_frame, "#/properties/bar", "/properties/bar",
                         "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME(static_frame, "#/properties/bar/$id",
                         "/properties/bar/$id",
                         "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME(static_frame, "#/properties/bar/$anchor",
                         "/properties/bar/$anchor",
                         "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME(static_frame, "https://example.com", "/properties/bar",
                         "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME(static_frame, "https://example.com#bar",
                         "/properties/bar",
                         "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME(static_frame, "https://example.com#/$id",
                         "/properties/bar/$id",
                         "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME(static_frame, "https://example.com#/$anchor",
                         "/properties/bar/$anchor",
                         "https://json-schema.org/draft/2020-12/schema");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame, no_id_with_default) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "items": { "type": "string" }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, static_frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver,
                                 "https://json-schema.org/draft/2020-12/schema",
                                 "https://www.sourcemeta.com/schema")
      .wait();

  EXPECT_EQ(static_frame.size(), 8);
  EXPECT_FRAME(static_frame, "https://www.sourcemeta.com/schema",
               "https://www.sourcemeta.com/schema", "",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "https://www.sourcemeta.com/schema#/$schema",
               "https://www.sourcemeta.com/schema", "/$schema",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "https://www.sourcemeta.com/schema#/items",
               "https://www.sourcemeta.com/schema", "/items",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "https://www.sourcemeta.com/schema#/items/type",
               "https://www.sourcemeta.com/schema", "/items/type",
               "https://json-schema.org/draft/2020-12/schema");

  // Empty base

  EXPECT_FRAME(static_frame, "", "https://www.sourcemeta.com/schema", "",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "#/$schema", "https://www.sourcemeta.com/schema",
               "/$schema", "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "#/items", "https://www.sourcemeta.com/schema",
               "/items", "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "#/items/type",
               "https://www.sourcemeta.com/schema", "/items/type",
               "https://json-schema.org/draft/2020-12/schema");

  // Bases

  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/schema"),
            "https://www.sourcemeta.com/schema");
  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/schema#/$schema"),
            "https://www.sourcemeta.com/schema");
  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/schema#/items"),
            "https://www.sourcemeta.com/schema");
  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/schema#/items/type"),
            "https://www.sourcemeta.com/schema");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame, anchor_on_absolute_subid) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.example.com",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "items": {
      "$id": "https://www.example.org",
      "items": {
        "$anchor": "foo"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, static_frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 19);
  EXPECT_FRAME(static_frame, "https://www.example.com",
               "https://www.example.com", "",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "https://www.example.org",
               "https://www.example.com", "/items",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "https://www.example.org#foo",
               "https://www.example.com", "/items/items",
               "https://json-schema.org/draft/2020-12/schema");

  // JSON Pointers

  EXPECT_FRAME(static_frame, "https://www.example.com#/$id",
               "https://www.example.com", "/$id",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "https://www.example.com#/$schema",
               "https://www.example.com", "/$schema",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "https://www.example.com#/items",
               "https://www.example.com", "/items",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "https://www.example.com#/items/$id",
               "https://www.example.com", "/items/$id",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "https://www.example.com#/items/items",
               "https://www.example.com", "/items/items",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "https://www.example.com#/items/items/$anchor",
               "https://www.example.com", "/items/items/$anchor",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "https://www.example.org#/$id",
               "https://www.example.com", "/items/$id",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "https://www.example.org#/items",
               "https://www.example.com", "/items/items",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "https://www.example.org#/items/$anchor",
               "https://www.example.com", "/items/items/$anchor",
               "https://json-schema.org/draft/2020-12/schema");

  EXPECT_FRAME(static_frame, "", "https://www.example.com", "",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "#/$id", "https://www.example.com", "/$id",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "#/$schema", "https://www.example.com", "/$schema",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "#/items", "https://www.example.com", "/items",
               "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "#/items/$id", "https://www.example.com",
               "/items/$id", "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "#/items/items", "https://www.example.com",
               "/items/items", "https://json-schema.org/draft/2020-12/schema");
  EXPECT_FRAME(static_frame, "#/items/items/$anchor", "https://www.example.com",
               "/items/items/$anchor",
               "https://json-schema.org/draft/2020-12/schema");

  // Bases

  EXPECT_EQ(static_frame.base("https://www.example.com"),
            "https://www.example.com");
  EXPECT_EQ(static_frame.base("https://www.example.com#/$id"),
            "https://www.example.com");
  EXPECT_EQ(static_frame.base("https://www.example.com#/$schema"),
            "https://www.example.com");

  EXPECT_EQ(static_frame.base("https://www.example.org"),
            "https://www.example.org");
  EXPECT_EQ(static_frame.base("https://www.example.org#foo"),
            "https://www.example.org");
  EXPECT_EQ(static_frame.base("https://www.example.com#/items"),
            "https://www.example.org");
  EXPECT_EQ(static_frame.base("https://www.example.com#/items/$id"),
            "https://www.example.org");
  EXPECT_EQ(static_frame.base("https://www.example.com#/items/items"),
            "https://www.example.org");
  EXPECT_EQ(static_frame.base("https://www.example.com#/items/items/$anchor"),
            "https://www.example.org");
  EXPECT_EQ(static_frame.base("https://www.example.org#/$id"),
            "https://www.example.org");
  EXPECT_EQ(static_frame.base("https://www.example.org#/items"),
            "https://www.example.org");
  EXPECT_EQ(static_frame.base("https://www.example.org#/items/$anchor"),
            "https://www.example.org");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame, uri_iterators) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "items": {
      "$id": "test",
      "$anchor": "foo",
      "type": "string"
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, static_frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  std::set<std::string> uris;
  for (const auto &uri : static_frame) {
    uris.insert(uri);
  }

  EXPECT_EQ(static_frame.size(), 19);
  EXPECT_EQ(uris.size(), 19);

  EXPECT_TRUE(uris.contains("https://www.sourcemeta.com/schema"));
  EXPECT_TRUE(uris.contains("https://www.sourcemeta.com/test"));
  EXPECT_TRUE(uris.contains("https://www.sourcemeta.com/test#foo"));
  EXPECT_TRUE(uris.contains("https://www.sourcemeta.com/schema#/$id"));
  EXPECT_TRUE(uris.contains("https://www.sourcemeta.com/schema#/$schema"));
  EXPECT_TRUE(uris.contains("https://www.sourcemeta.com/schema#/items"));
  EXPECT_TRUE(uris.contains("https://www.sourcemeta.com/schema#/items/$id"));
  EXPECT_TRUE(
      uris.contains("https://www.sourcemeta.com/schema#/items/$anchor"));
  EXPECT_TRUE(uris.contains("https://www.sourcemeta.com/schema#/items/type"));
  EXPECT_TRUE(uris.contains("https://www.sourcemeta.com/test#/$id"));
  EXPECT_TRUE(uris.contains("https://www.sourcemeta.com/test#/$anchor"));
  EXPECT_TRUE(uris.contains("https://www.sourcemeta.com/test#/type"));

  EXPECT_TRUE(uris.contains(""));
  EXPECT_TRUE(uris.contains("#/$id"));
  EXPECT_TRUE(uris.contains("#/$schema"));
  EXPECT_TRUE(uris.contains("#/items"));
  EXPECT_TRUE(uris.contains("#/items/$id"));
  EXPECT_TRUE(uris.contains("#/items/$anchor"));
  EXPECT_TRUE(uris.contains("#/items/type"));

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame, reference_frame_uri_canonicalize) {
  sourcemeta::jsontoolkit::ReferenceFrame frame;
  frame.store("https://example.com#", "https://example.com#",
              "https://example.com#", sourcemeta::jsontoolkit::empty_pointer,
              "https://json-schema.org/draft/2020-12/schema");
  EXPECT_EQ(frame.size(), 1);
  EXPECT_TRUE(frame.defines("https://example.com"));
  // This is canonicalized
  EXPECT_TRUE(frame.defines("https://example.com#"));
  // These must not be canonicalized
  EXPECT_TRUE(frame.root("https://example.com").has_value());
  EXPECT_EQ(frame.root("https://example.com").value(), "https://example.com#");
  EXPECT_EQ(frame.base("https://example.com"), "https://example.com#");
}

TEST(JSONSchema_frame, no_refs) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "type": "string" },
      "bar": { "type": "number" },
      "baz": { "type": "array" }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, static_frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame, refs_with_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "$ref": "#" },
      "bar": { "$ref": "#/properties/baz" },
      "baz": {
        "$anchor": "baz",
        "type": "string"
      },
      "qux": {
        "$id": "test",
        "$ref": "#"
      },
      "anchor": {
        "$ref": "#baz"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, static_frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(references.size(), 4);
  EXPECT_STATIC_REFERENCE(references, "/properties/foo/$ref",
                          "https://www.sourcemeta.com/schema#");
  EXPECT_STATIC_REFERENCE(references, "/properties/bar/$ref",
                          "https://www.sourcemeta.com/schema#/properties/baz");
  EXPECT_STATIC_REFERENCE(references, "/properties/qux/$ref",
                          "https://www.sourcemeta.com/test#");
  EXPECT_STATIC_REFERENCE(references, "/properties/anchor/$ref",
                          "https://www.sourcemeta.com/schema#baz");
}

TEST(JSONSchema_frame, refs_with_no_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "$ref": "#" },
      "bar": { "$ref": "#/properties/baz" },
      "baz": {
        "$anchor": "baz",
        "type": "string"
      },
      "qux": {
        "$id": "https://www.example.com",
        "$ref": "#"
      },
      "anchor": {
        "$ref": "#baz"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, static_frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(references.size(), 4);
  EXPECT_STATIC_REFERENCE(references, "/properties/foo/$ref", "#");
  EXPECT_STATIC_REFERENCE(references, "/properties/bar/$ref",
                          "#/properties/baz");
  EXPECT_STATIC_REFERENCE(references, "/properties/qux/$ref",
                          "https://www.example.com#");
  EXPECT_STATIC_REFERENCE(references, "/properties/anchor/$ref", "#baz");
}
