#include <gtest/gtest.h>

#include <set>

#include <sourcemeta/core/json.h>
#include <sourcemeta/core/jsonpointer.h>
#include <sourcemeta/core/jsonschema.h>

#include "jsonschema_test_utils.h"

TEST(JSONSchema_frame, nested_schemas_mixing_dialects) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
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

  sourcemeta::core::SchemaFrame frame{
      sourcemeta::core::SchemaFrame::Mode::Instances};
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 21);

  EXPECT_FRAME_STATIC_RESOURCE(frame, "https://www.sourcemeta.com/test",
                               "https://www.sourcemeta.com/test", "",
                               "https://json-schema.org/draft/2020-12/schema",
                               "https://json-schema.org/draft/2020-12/schema",
                               "https://www.sourcemeta.com/test", "", {""},
                               std::nullopt);
  EXPECT_FRAME_STATIC_RESOURCE(frame, "https://www.sourcemeta.com/foo",
                               "https://www.sourcemeta.com/test", "/$defs/foo",
                               "http://json-schema.org/draft-04/schema#",
                               "http://json-schema.org/draft-04/schema#",
                               "https://www.sourcemeta.com/foo", "", {}, "");
  EXPECT_FRAME_STATIC_RESOURCE(
      frame, "https://www.sourcemeta.com/bar",
      "https://www.sourcemeta.com/test", "/$defs/foo/definitions/bar",
      "http://json-schema.org/draft-04/schema#",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/bar", "", {}, "/$defs/foo");

  // JSON Pointers

  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.sourcemeta.com/test#/$id",
                              "https://www.sourcemeta.com/test", "/$id",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.sourcemeta.com/test", "/$id", {},
                              "");
  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.sourcemeta.com/test#/$schema",
                              "https://www.sourcemeta.com/test", "/$schema",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.sourcemeta.com/test", "/$schema", {},
                              "");
  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.sourcemeta.com/test#/$defs",
                              "https://www.sourcemeta.com/test", "/$defs",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.sourcemeta.com/test", "/$defs", {},
                              "");
  EXPECT_FRAME_STATIC_SUBSCHEMA(frame,
                                "https://www.sourcemeta.com/test#/$defs/foo",
                                "https://www.sourcemeta.com/test", "/$defs/foo",
                                "http://json-schema.org/draft-04/schema#",
                                "http://json-schema.org/draft-04/schema#",
                                "https://www.sourcemeta.com/foo", "", {}, "");
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.sourcemeta.com/test#/$defs/foo/id",
      "https://www.sourcemeta.com/test", "/$defs/foo/id",
      "http://json-schema.org/draft-04/schema#",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/foo", "/id", {}, "/$defs/foo");
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.sourcemeta.com/test#/$defs/foo/$schema",
      "https://www.sourcemeta.com/test", "/$defs/foo/$schema",
      "http://json-schema.org/draft-04/schema#",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/foo", "/$schema", {}, "/$defs/foo");
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.sourcemeta.com/test#/$defs/foo/definitions",
      "https://www.sourcemeta.com/test", "/$defs/foo/definitions",
      "http://json-schema.org/draft-04/schema#",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/foo", "/definitions", {}, "/$defs/foo");
  EXPECT_FRAME_STATIC_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/test#/$defs/foo/definitions/bar",
      "https://www.sourcemeta.com/test", "/$defs/foo/definitions/bar",
      "http://json-schema.org/draft-04/schema#",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/bar", "", {}, "/$defs/foo");
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.sourcemeta.com/test#/$defs/foo/definitions/bar/id",
      "https://www.sourcemeta.com/test", "/$defs/foo/definitions/bar/id",
      "http://json-schema.org/draft-04/schema#",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/bar", "/id", {},
      "/$defs/foo/definitions/bar");
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.sourcemeta.com/test#/$defs/foo/definitions/bar/type",
      "https://www.sourcemeta.com/test", "/$defs/foo/definitions/bar/type",
      "http://json-schema.org/draft-04/schema#",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/bar", "/type", {},
      "/$defs/foo/definitions/bar");
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.sourcemeta.com/foo#/id",
      "https://www.sourcemeta.com/test", "/$defs/foo/id",
      "http://json-schema.org/draft-04/schema#",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/foo", "/id", {}, "/$defs/foo");
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.sourcemeta.com/foo#/$schema",
      "https://www.sourcemeta.com/test", "/$defs/foo/$schema",
      "http://json-schema.org/draft-04/schema#",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/foo", "/$schema", {}, "/$defs/foo");
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.sourcemeta.com/foo#/definitions",
      "https://www.sourcemeta.com/test", "/$defs/foo/definitions",
      "http://json-schema.org/draft-04/schema#",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/foo", "/definitions", {}, "/$defs/foo");
  EXPECT_FRAME_STATIC_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/foo#/definitions/bar",
      "https://www.sourcemeta.com/test", "/$defs/foo/definitions/bar",
      "http://json-schema.org/draft-04/schema#",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/bar", "", {}, "/$defs/foo");
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.sourcemeta.com/foo#/definitions/bar/id",
      "https://www.sourcemeta.com/test", "/$defs/foo/definitions/bar/id",
      "http://json-schema.org/draft-04/schema#",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/bar", "/id", {},
      "/$defs/foo/definitions/bar");
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.sourcemeta.com/foo#/definitions/bar/type",
      "https://www.sourcemeta.com/test", "/$defs/foo/definitions/bar/type",
      "http://json-schema.org/draft-04/schema#",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/bar", "/type", {},
      "/$defs/foo/definitions/bar");
  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.sourcemeta.com/bar#/id",
                              "https://www.sourcemeta.com/test",
                              "/$defs/foo/definitions/bar/id",
                              "http://json-schema.org/draft-04/schema#",
                              "http://json-schema.org/draft-04/schema#",
                              "https://www.sourcemeta.com/bar", "/id", {},
                              "/$defs/foo/definitions/bar");
  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.sourcemeta.com/bar#/type",
                              "https://www.sourcemeta.com/test",
                              "/$defs/foo/definitions/bar/type",
                              "http://json-schema.org/draft-04/schema#",
                              "http://json-schema.org/draft-04/schema#",
                              "https://www.sourcemeta.com/bar", "/type", {},
                              "/$defs/foo/definitions/bar");

  // References

  EXPECT_EQ(frame.references().size(), 2);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(
      frame, "/$defs/foo/$schema", "http://json-schema.org/draft-04/schema",
      "http://json-schema.org/draft-04/schema", std::nullopt);
}

TEST(JSONSchema_frame, no_id) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
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

  sourcemeta::core::SchemaFrame frame{
      sourcemeta::core::SchemaFrame::Mode::Instances};
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 14);

  // Top level

  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "", "", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", {""}, std::nullopt);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema",
      "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", {}, "");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/properties", "/properties",
      "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", {}, "");

  // Foo

  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "#/properties/foo", "/properties/foo",
      "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", {"/foo"}, "");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/properties/foo/$anchor", "/properties/foo/$anchor",
      "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", {}, "/properties/foo");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/properties/foo/type", "/properties/foo/type",
      "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", {}, "/properties/foo");
  EXPECT_ANONYMOUS_FRAME_STATIC_ANCHOR(
      frame, "#foo", "/properties/foo",
      "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", {"/foo"}, "");

  // Bar

  EXPECT_ANONYMOUS_FRAME_STATIC_RESOURCE(
      frame, "https://example.com", "/properties/bar",
      "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", {"/bar"}, "");
  EXPECT_ANONYMOUS_FRAME_STATIC_ANCHOR(
      frame, "https://example.com#bar", "/properties/bar",
      "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", {"/bar"}, "");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "https://example.com#/$id", "/properties/bar/$id",
      "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", {}, "/properties/bar");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "https://example.com#/$anchor", "/properties/bar/$anchor",
      "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", {}, "/properties/bar");

  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "#/properties/bar", "/properties/bar",
      "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", {"/bar"}, "");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/properties/bar/$id", "/properties/bar/$id",
      "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", {}, "/properties/bar");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/properties/bar/$anchor", "/properties/bar/$anchor",
      "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", {}, "/properties/bar");

  // References

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", std::nullopt);
}

TEST(JSONSchema_frame, no_id_with_default) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "items": { "type": "string" }
  })JSON");

  sourcemeta::core::SchemaFrame frame{
      sourcemeta::core::SchemaFrame::Mode::Instances};
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver,
                "https://json-schema.org/draft/2020-12/schema",
                "https://www.sourcemeta.com/schema");

  EXPECT_EQ(frame.locations().size(), 4);
  EXPECT_FRAME_STATIC_RESOURCE(frame, "https://www.sourcemeta.com/schema",
                               "https://www.sourcemeta.com/schema", "",
                               "https://json-schema.org/draft/2020-12/schema",
                               "https://json-schema.org/draft/2020-12/schema",
                               "https://www.sourcemeta.com/schema", "", {""},
                               std::nullopt);
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema",
      "https://www.sourcemeta.com/schema", "/$schema", {}, "");
  EXPECT_FRAME_STATIC_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/schema#/items",
      "https://www.sourcemeta.com/schema", "/items",
      "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema",
      "https://www.sourcemeta.com/schema", "/items", {"/~I~"}, "");
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items/type",
      "https://www.sourcemeta.com/schema", "/items/type",
      "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema",
      "https://www.sourcemeta.com/schema", "/items/type", {}, "/items");

  // References

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", std::nullopt);
}

TEST(JSONSchema_frame, anchor_on_absolute_subid) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.example.com",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "items": {
      "$id": "https://www.example.org",
      "items": {
        "$anchor": "foo"
      }
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame{
      sourcemeta::core::SchemaFrame::Mode::Instances};
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 12);
  EXPECT_FRAME_STATIC_RESOURCE(
      frame, "https://www.example.com", "https://www.example.com", "",
      "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", "https://www.example.com",
      "", {""}, std::nullopt);
  EXPECT_FRAME_STATIC_RESOURCE(frame, "https://www.example.org",
                               "https://www.example.com", "/items",
                               "https://json-schema.org/draft/2020-12/schema",
                               "https://json-schema.org/draft/2020-12/schema",
                               "https://www.example.org", "", {"/~I~"}, "");
  EXPECT_FRAME_STATIC_ANCHOR(
      frame, "https://www.example.org#foo", "https://www.example.com",
      "/items/items", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", "https://www.example.org",
      "/items", {"/~I~/~I~"}, "/items");

  // JSON Pointers

  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.example.com#/$id",
                              "https://www.example.com", "/$id",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.example.com", "/$id", {}, "");
  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.example.com#/$schema",
                              "https://www.example.com", "/$schema",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.example.com", "/$schema", {}, "");
  EXPECT_FRAME_STATIC_SUBSCHEMA(frame, "https://www.example.com#/items",
                                "https://www.example.com", "/items",
                                "https://json-schema.org/draft/2020-12/schema",
                                "https://json-schema.org/draft/2020-12/schema",
                                "https://www.example.org", "", {"/~I~"}, "");
  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.example.com#/items/$id",
                              "https://www.example.com", "/items/$id",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.example.org", "/$id", {}, "/items");
  EXPECT_FRAME_STATIC_SUBSCHEMA(
      frame, "https://www.example.com#/items/items", "https://www.example.com",
      "/items/items", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", "https://www.example.org",
      "/items", {"/~I~/~I~"}, "/items");
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.example.com#/items/items/$anchor",
      "https://www.example.com", "/items/items/$anchor",
      "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", "https://www.example.org",
      "/items/$anchor", {}, "/items/items");
  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.example.org#/$id",
                              "https://www.example.com", "/items/$id",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.example.org", "/$id", {}, "/items");
  EXPECT_FRAME_STATIC_SUBSCHEMA(
      frame, "https://www.example.org#/items", "https://www.example.com",
      "/items/items", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", "https://www.example.org",
      "/items", {"/~I~/~I~"}, "/items");
  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.example.org#/items/$anchor",
                              "https://www.example.com", "/items/items/$anchor",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.example.org", "/items/$anchor", {},
                              "/items/items");

  // References

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", std::nullopt);
}

TEST(JSONSchema_frame, uri_iterators) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "items": {
      "$id": "test",
      "$anchor": "foo",
      "type": "string"
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame{
      sourcemeta::core::SchemaFrame::Mode::Instances};
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  std::set<std::string> uris;
  for (const auto &entry : frame.locations()) {
    uris.insert(entry.first.second);
  }

  EXPECT_EQ(frame.locations().size(), 12);
  EXPECT_EQ(uris.size(), 12);

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

  // References

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", std::nullopt);
}

TEST(JSONSchema_frame, no_refs) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "type": "string" },
      "bar": { "type": "number" },
      "baz": { "type": "array" }
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame{
      sourcemeta::core::SchemaFrame::Mode::Instances};
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", std::nullopt);
}

TEST(JSONSchema_frame, refs_with_id) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
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

  sourcemeta::core::SchemaFrame frame{
      sourcemeta::core::SchemaFrame::Mode::Instances};
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.references().size(), 5);
  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(frame, "/properties/foo/$ref",
                          "https://www.sourcemeta.com/schema",
                          "https://www.sourcemeta.com/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(frame, "/properties/bar/$ref",
                          "https://www.sourcemeta.com/schema#/properties/baz",
                          "https://www.sourcemeta.com/schema",
                          "/properties/baz");
  EXPECT_STATIC_REFERENCE(frame, "/properties/qux/$ref",
                          "https://www.sourcemeta.com/test",
                          "https://www.sourcemeta.com/test", std::nullopt);
  EXPECT_STATIC_REFERENCE(frame, "/properties/anchor/$ref",
                          "https://www.sourcemeta.com/schema#baz",
                          "https://www.sourcemeta.com/schema", "baz");
}

TEST(JSONSchema_frame, refs_with_no_id) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
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

  sourcemeta::core::SchemaFrame frame{
      sourcemeta::core::SchemaFrame::Mode::Instances};
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.references().size(), 5);
  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(frame, "/properties/foo/$ref", "", std::nullopt,
                          std::nullopt);
  EXPECT_STATIC_REFERENCE(frame, "/properties/bar/$ref", "#/properties/baz",
                          std::nullopt, "/properties/baz");
  EXPECT_STATIC_REFERENCE(frame, "/properties/qux/$ref",
                          "https://www.example.com", "https://www.example.com",
                          std::nullopt);
  EXPECT_STATIC_REFERENCE(frame, "/properties/anchor/$ref", "#baz",
                          std::nullopt, "baz");
}

TEST(JSONSchema_frame, no_dynamic_ref_on_old_drafts) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "properties": {
      "foo": { "$dynamicRef": "#" }
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame{
      sourcemeta::core::SchemaFrame::Mode::Instances};
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame, remote_refs) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "$ref": "https://www.example.com" },
      "bar": { "$ref": "https://www.example.com/test#foo" },
      "baz": { "$ref": "https://www.example.com/x/y#/foo/bar" }
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame{
      sourcemeta::core::SchemaFrame::Mode::Instances};
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.references().size(), 4);
  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(frame, "/properties/foo/$ref",
                          "https://www.example.com", "https://www.example.com",
                          std::nullopt);
  EXPECT_STATIC_REFERENCE(frame, "/properties/bar/$ref",
                          "https://www.example.com/test#foo",
                          "https://www.example.com/test", "foo");
  EXPECT_STATIC_REFERENCE(frame, "/properties/baz/$ref",
                          "https://www.example.com/x/y#/foo/bar",
                          "https://www.example.com/x/y", "/foo/bar");
}

TEST(JSONSchema_frame, no_dialect) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "type": "string"
  })JSON");

  sourcemeta::core::SchemaFrame frame{
      sourcemeta::core::SchemaFrame::Mode::Instances};
  EXPECT_THROW(frame.analyse(document, sourcemeta::core::schema_official_walker,
                             sourcemeta::core::schema_official_resolver),
               sourcemeta::core::SchemaError);
}

TEST(JSONSchema_frame, mode_references) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.example.com",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "items": {
      "$anchor": "helper",
      "$ref": "#/$defs/helper"
    },
    "$defs": {
      "helper": true
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame{
      sourcemeta::core::SchemaFrame::Mode::References};
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 9);
  EXPECT_FRAME_STATIC_RESOURCE(frame, "https://www.example.com",
                               "https://www.example.com", "",
                               "https://json-schema.org/draft/2020-12/schema",
                               "https://json-schema.org/draft/2020-12/schema",
                               "https://www.example.com", "", {}, std::nullopt);

  // JSON Pointers

  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.example.com#/$id",
                              "https://www.example.com", "/$id",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.example.com", "/$id", {}, "");
  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.example.com#/$schema",
                              "https://www.example.com", "/$schema",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.example.com", "/$schema", {}, "");

  EXPECT_FRAME_STATIC_SUBSCHEMA(frame, "https://www.example.com#/items",
                                "https://www.example.com", "/items",
                                "https://json-schema.org/draft/2020-12/schema",
                                "https://json-schema.org/draft/2020-12/schema",
                                "https://www.example.com", "/items", {}, "");
  EXPECT_FRAME_STATIC_ANCHOR(frame, "https://www.example.com#helper",
                             "https://www.example.com", "/items",
                             "https://json-schema.org/draft/2020-12/schema",
                             "https://json-schema.org/draft/2020-12/schema",
                             "https://www.example.com", "/items", {}, "");

  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.example.com#/items/$anchor",
                              "https://www.example.com", "/items/$anchor",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.example.com", "/items/$anchor", {},
                              "/items");
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.example.com#/items/$ref", "https://www.example.com",
      "/items/$ref", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", "https://www.example.com",
      "/items/$ref", {}, "/items");

  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.example.com#/$defs",
                              "https://www.example.com", "/$defs",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.example.com", "/$defs", {}, "");
  EXPECT_FRAME_STATIC_SUBSCHEMA(
      frame, "https://www.example.com#/$defs/helper", "https://www.example.com",
      "/$defs/helper", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", "https://www.example.com",
      "/$defs/helper", {}, "");

  // References

  EXPECT_EQ(frame.references().size(), 2);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(frame, "/items/$ref",
                          "https://www.example.com#/$defs/helper",
                          "https://www.example.com", "/$defs/helper");
}

TEST(JSONSchema_frame, mode_locations) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.example.com",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "items": {
      "$anchor": "helper",
      "$ref": "#/$defs/helper"
    },
    "$defs": {
      "helper": true
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame{
      sourcemeta::core::SchemaFrame::Mode::Locations};
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 9);
  EXPECT_FRAME_STATIC_RESOURCE(frame, "https://www.example.com",
                               "https://www.example.com", "",
                               "https://json-schema.org/draft/2020-12/schema",
                               "https://json-schema.org/draft/2020-12/schema",
                               "https://www.example.com", "", {}, std::nullopt);

  // JSON Pointers

  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.example.com#/$id",
                              "https://www.example.com", "/$id",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.example.com", "/$id", {}, "");
  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.example.com#/$schema",
                              "https://www.example.com", "/$schema",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.example.com", "/$schema", {}, "");

  EXPECT_FRAME_STATIC_SUBSCHEMA(frame, "https://www.example.com#/items",
                                "https://www.example.com", "/items",
                                "https://json-schema.org/draft/2020-12/schema",
                                "https://json-schema.org/draft/2020-12/schema",
                                "https://www.example.com", "/items", {}, "");
  EXPECT_FRAME_STATIC_ANCHOR(frame, "https://www.example.com#helper",
                             "https://www.example.com", "/items",
                             "https://json-schema.org/draft/2020-12/schema",
                             "https://json-schema.org/draft/2020-12/schema",
                             "https://www.example.com", "/items", {}, "");

  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.example.com#/items/$anchor",
                              "https://www.example.com", "/items/$anchor",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.example.com", "/items/$anchor", {},
                              "/items");
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.example.com#/items/$ref", "https://www.example.com",
      "/items/$ref", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", "https://www.example.com",
      "/items/$ref", {}, "/items");

  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.example.com#/$defs",
                              "https://www.example.com", "/$defs",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.example.com", "/$defs", {}, "");
  EXPECT_FRAME_STATIC_SUBSCHEMA(
      frame, "https://www.example.com#/$defs/helper", "https://www.example.com",
      "/$defs/helper", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", "https://www.example.com",
      "/$defs/helper", {}, "");

  // References

  EXPECT_EQ(frame.references().size(), 0);
}

TEST(JSONSchema_frame, references_to_1) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://example.com",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": {
        "$id": "foo",
        "$dynamicAnchor": "test"
      },
      "bar": {
        "$id": "bar",
        "$dynamicAnchor": "test"
      },
      "baz": {
        "$id": "baz",
        "$anchor": "test"
      }
    },
    "$defs": {
      "bookending": {
        "$dynamicAnchor": "test"
      },
      "static": {
        "$ref": "#test"
      },
      "dynamic": {
        "$dynamicRef": "#test"
      },
      "dynamic-non-anchor": {
        "$dynamicRef": "baz"
      }
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame{
      sourcemeta::core::SchemaFrame::Mode::References};
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  const auto foo{frame.references_to({"properties", "foo"})};
  EXPECT_EQ(foo.size(), 1);
  EXPECT_REFERENCE_TO(foo, 0, Dynamic, "/$defs/dynamic/$dynamicRef");

  const auto bar{frame.references_to({"properties", "bar"})};
  EXPECT_EQ(bar.size(), 1);
  EXPECT_REFERENCE_TO(bar, 0, Dynamic, "/$defs/dynamic/$dynamicRef");

  const auto baz{frame.references_to({"properties", "baz"})};
  EXPECT_EQ(baz.size(), 1);
  EXPECT_REFERENCE_TO(baz, 0, Static, "/$defs/dynamic-non-anchor/$dynamicRef");

  const auto bookending{frame.references_to({"$defs", "bookending"})};
  EXPECT_EQ(bookending.size(), 2);
  EXPECT_REFERENCE_TO(bookending, 0, Static, "/$defs/static/$ref");
  EXPECT_REFERENCE_TO(bookending, 1, Dynamic, "/$defs/dynamic/$dynamicRef");
}

TEST(JSONSchema_frame, references_to_2) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://example.com",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "properties": {
      "foo": {
        "$id": "foo",
        "$recursiveAnchor": true
      },
      "bar": {
        "$id": "bar",
        "$recursiveAnchor": true
      },
      "baz": {
        "$id": "baz",
        "$anchor": "test"
      },
      "qux": {
        "$id": "qux",
        "$recursiveAnchor": false
      }
    },
    "$defs": {
      "bookending": {
        "$recursiveAnchor": true
      },
      "static": {
        "$ref": "#test"
      },
      "dynamic": {
        "$recursiveRef": "#"
      }
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame{
      sourcemeta::core::SchemaFrame::Mode::References};
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  const auto foo{frame.references_to({"properties", "foo"})};
  EXPECT_EQ(foo.size(), 1);
  EXPECT_REFERENCE_TO(foo, 0, Dynamic, "/$defs/dynamic/$recursiveRef");

  const auto bar{frame.references_to({"properties", "bar"})};
  EXPECT_EQ(bar.size(), 1);
  EXPECT_REFERENCE_TO(bar, 0, Dynamic, "/$defs/dynamic/$recursiveRef");

  const auto baz{frame.references_to({"properties", "baz"})};
  EXPECT_EQ(baz.size(), 0);

  const auto qux{frame.references_to({"properties", "qux"})};
  EXPECT_EQ(qux.size(), 0);

  const auto bookending{frame.references_to({"$defs", "bookending"})};
  EXPECT_EQ(bookending.size(), 1);
  EXPECT_REFERENCE_TO(bookending, 0, Dynamic, "/$defs/dynamic/$recursiveRef");
}
