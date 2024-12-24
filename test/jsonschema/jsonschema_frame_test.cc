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

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 21);

  EXPECT_FRAME_STATIC_RESOURCE(frame, "https://www.sourcemeta.com/test",
                               "https://www.sourcemeta.com/test", "",
                               "https://json-schema.org/draft/2020-12/schema",
                               "https://www.sourcemeta.com/test", "", 0);
  EXPECT_FRAME_STATIC_RESOURCE(frame, "https://www.sourcemeta.com/foo",
                               "https://www.sourcemeta.com/test", "/$defs/foo",
                               "http://json-schema.org/draft-04/schema#",
                               "https://www.sourcemeta.com/foo", "", 0);
  EXPECT_FRAME_STATIC_RESOURCE(frame, "https://www.sourcemeta.com/bar",
                               "https://www.sourcemeta.com/test",
                               "/$defs/foo/definitions/bar",
                               "http://json-schema.org/draft-04/schema#",
                               "https://www.sourcemeta.com/bar", "", 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.sourcemeta.com/test#/$id",
                              "https://www.sourcemeta.com/test", "/$id",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.sourcemeta.com/test", "/$id", 0);
  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.sourcemeta.com/test#/$schema",
                              "https://www.sourcemeta.com/test", "/$schema",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.sourcemeta.com/test", "/$schema", 0);
  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.sourcemeta.com/test#/$defs",
                              "https://www.sourcemeta.com/test", "/$defs",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.sourcemeta.com/test", "/$defs", 0);
  EXPECT_FRAME_STATIC_SUBSCHEMA(frame,
                                "https://www.sourcemeta.com/test#/$defs/foo",
                                "https://www.sourcemeta.com/test", "/$defs/foo",
                                "http://json-schema.org/draft-04/schema#",
                                "https://www.sourcemeta.com/foo", "", 0);
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.sourcemeta.com/test#/$defs/foo/id",
      "https://www.sourcemeta.com/test", "/$defs/foo/id",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/foo", "/id", 0);
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.sourcemeta.com/test#/$defs/foo/$schema",
      "https://www.sourcemeta.com/test", "/$defs/foo/$schema",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/foo", "/$schema", 0);
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.sourcemeta.com/test#/$defs/foo/definitions",
      "https://www.sourcemeta.com/test", "/$defs/foo/definitions",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/foo", "/definitions", 0);
  EXPECT_FRAME_STATIC_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/test#/$defs/foo/definitions/bar",
      "https://www.sourcemeta.com/test", "/$defs/foo/definitions/bar",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/bar", "", 0);
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.sourcemeta.com/test#/$defs/foo/definitions/bar/id",
      "https://www.sourcemeta.com/test", "/$defs/foo/definitions/bar/id",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/bar", "/id", 0);
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.sourcemeta.com/test#/$defs/foo/definitions/bar/type",
      "https://www.sourcemeta.com/test", "/$defs/foo/definitions/bar/type",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/bar", "/type", 0);
  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.sourcemeta.com/foo#/id",
                              "https://www.sourcemeta.com/test",
                              "/$defs/foo/id",
                              "http://json-schema.org/draft-04/schema#",
                              "https://www.sourcemeta.com/foo", "/id", 0);
  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.sourcemeta.com/foo#/$schema",
                              "https://www.sourcemeta.com/test",
                              "/$defs/foo/$schema",
                              "http://json-schema.org/draft-04/schema#",
                              "https://www.sourcemeta.com/foo", "/$schema", 0);
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.sourcemeta.com/foo#/definitions",
      "https://www.sourcemeta.com/test", "/$defs/foo/definitions",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/foo", "/definitions", 0);
  EXPECT_FRAME_STATIC_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/foo#/definitions/bar",
      "https://www.sourcemeta.com/test", "/$defs/foo/definitions/bar",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/bar", "", 0);
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.sourcemeta.com/foo#/definitions/bar/id",
      "https://www.sourcemeta.com/test", "/$defs/foo/definitions/bar/id",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/bar", "/id", 0);
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.sourcemeta.com/foo#/definitions/bar/type",
      "https://www.sourcemeta.com/test", "/$defs/foo/definitions/bar/type",
      "http://json-schema.org/draft-04/schema#",
      "https://www.sourcemeta.com/bar", "/type", 0);
  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.sourcemeta.com/bar#/id",
                              "https://www.sourcemeta.com/test",
                              "/$defs/foo/definitions/bar/id",
                              "http://json-schema.org/draft-04/schema#",
                              "https://www.sourcemeta.com/bar", "/id", 0);
  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.sourcemeta.com/bar#/type",
                              "https://www.sourcemeta.com/test",
                              "/$defs/foo/definitions/bar/type",
                              "http://json-schema.org/draft-04/schema#",
                              "https://www.sourcemeta.com/bar", "/type", 0);

  // References

  EXPECT_EQ(references.size(), 2);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(references, "/$defs/foo/$schema",
                          "http://json-schema.org/draft-04/schema",
                          "http://json-schema.org/draft-04/schema",
                          std::nullopt);
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

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 14);

  // Top level

  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "", "", "https://json-schema.org/draft/2020-12/schema", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema",
      "https://json-schema.org/draft/2020-12/schema", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/properties", "/properties",
      "https://json-schema.org/draft/2020-12/schema", 0);

  // Foo

  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "#/properties/foo", "/properties/foo",
      "https://json-schema.org/draft/2020-12/schema", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/properties/foo/$anchor", "/properties/foo/$anchor",
      "https://json-schema.org/draft/2020-12/schema", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/properties/foo/type", "/properties/foo/type",
      "https://json-schema.org/draft/2020-12/schema", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_ANCHOR(
      frame, "#foo", "/properties/foo",
      "https://json-schema.org/draft/2020-12/schema", 0);

  // Bar

  EXPECT_ANONYMOUS_FRAME_STATIC_RESOURCE(
      frame, "https://example.com", "/properties/bar",
      "https://json-schema.org/draft/2020-12/schema", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_ANCHOR(
      frame, "https://example.com#bar", "/properties/bar",
      "https://json-schema.org/draft/2020-12/schema", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "https://example.com#/$id", "/properties/bar/$id",
      "https://json-schema.org/draft/2020-12/schema", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "https://example.com#/$anchor", "/properties/bar/$anchor",
      "https://json-schema.org/draft/2020-12/schema", 0);

  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "#/properties/bar", "/properties/bar",
      "https://json-schema.org/draft/2020-12/schema", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/properties/bar/$id", "/properties/bar/$id",
      "https://json-schema.org/draft/2020-12/schema", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/properties/bar/$anchor", "/properties/bar/$anchor",
      "https://json-schema.org/draft/2020-12/schema", 0);

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", std::nullopt);
}

TEST(JSONSchema_frame, no_id_with_default) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "items": { "type": "string" }
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver,
                                 "https://json-schema.org/draft/2020-12/schema",
                                 "https://www.sourcemeta.com/schema");

  EXPECT_EQ(frame.size(), 4);
  EXPECT_FRAME_STATIC_RESOURCE(frame, "https://www.sourcemeta.com/schema",
                               "https://www.sourcemeta.com/schema", "",
                               "https://json-schema.org/draft/2020-12/schema",
                               "https://www.sourcemeta.com/schema", "", 0);
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://json-schema.org/draft/2020-12/schema",
      "https://www.sourcemeta.com/schema", "/$schema", 0);
  EXPECT_FRAME_STATIC_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/schema#/items",
      "https://www.sourcemeta.com/schema", "/items",
      "https://json-schema.org/draft/2020-12/schema",
      "https://www.sourcemeta.com/schema", "/items", 0);
  EXPECT_FRAME_STATIC_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items/type",
      "https://www.sourcemeta.com/schema", "/items/type",
      "https://json-schema.org/draft/2020-12/schema",
      "https://www.sourcemeta.com/schema", "/items/type", 0);

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", std::nullopt);
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

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 12);
  EXPECT_FRAME_STATIC_RESOURCE(frame, "https://www.example.com",
                               "https://www.example.com", "",
                               "https://json-schema.org/draft/2020-12/schema",
                               "https://www.example.com", "", 0);
  EXPECT_FRAME_STATIC_RESOURCE(frame, "https://www.example.org",
                               "https://www.example.com", "/items",
                               "https://json-schema.org/draft/2020-12/schema",
                               "https://www.example.org", "", 0);
  EXPECT_FRAME_STATIC_ANCHOR(frame, "https://www.example.org#foo",
                             "https://www.example.com", "/items/items",
                             "https://json-schema.org/draft/2020-12/schema",
                             "https://www.example.org", "/items", 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.example.com#/$id",
                              "https://www.example.com", "/$id",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.example.com", "/$id", 0);
  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.example.com#/$schema",
                              "https://www.example.com", "/$schema",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.example.com", "/$schema", 0);
  EXPECT_FRAME_STATIC_SUBSCHEMA(frame, "https://www.example.com#/items",
                                "https://www.example.com", "/items",
                                "https://json-schema.org/draft/2020-12/schema",
                                "https://www.example.org", "", 0);
  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.example.com#/items/$id",
                              "https://www.example.com", "/items/$id",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.example.org", "/$id", 0);
  EXPECT_FRAME_STATIC_SUBSCHEMA(frame, "https://www.example.com#/items/items",
                                "https://www.example.com", "/items/items",
                                "https://json-schema.org/draft/2020-12/schema",
                                "https://www.example.org", "/items", 0);
  EXPECT_FRAME_STATIC_POINTER(frame,
                              "https://www.example.com#/items/items/$anchor",
                              "https://www.example.com", "/items/items/$anchor",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.example.org", "/items/$anchor", 0);
  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.example.org#/$id",
                              "https://www.example.com", "/items/$id",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.example.org", "/$id", 0);
  EXPECT_FRAME_STATIC_SUBSCHEMA(frame, "https://www.example.org#/items",
                                "https://www.example.com", "/items/items",
                                "https://json-schema.org/draft/2020-12/schema",
                                "https://www.example.org", "/items", 0);
  EXPECT_FRAME_STATIC_POINTER(frame, "https://www.example.org#/items/$anchor",
                              "https://www.example.com", "/items/items/$anchor",
                              "https://json-schema.org/draft/2020-12/schema",
                              "https://www.example.org", "/items/$anchor", 0);

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", std::nullopt);
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

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  std::set<std::string> uris;
  for (const auto &entry : frame) {
    uris.insert(entry.first.second);
  }

  EXPECT_EQ(frame.size(), 12);
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

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", std::nullopt);
}

TEST(JSONSchema_frame, reference_frame_static) {
  sourcemeta::jsontoolkit::FrameLocations frame;
  frame.insert(
      {{sourcemeta::jsontoolkit::ReferenceType::Static, "https://example.com"},
       {sourcemeta::jsontoolkit::FrameLocationType::Resource,
        "https://example.com",
        "https://example.com",
        sourcemeta::jsontoolkit::empty_pointer,
        sourcemeta::jsontoolkit::empty_pointer,
        "https://json-schema.org/draft/2020-12/schema",
        {}}});
  EXPECT_EQ(frame.size(), 1);
  EXPECT_TRUE(frame.contains(
      {sourcemeta::jsontoolkit::ReferenceType::Static, "https://example.com"}));
  EXPECT_FALSE(frame.contains({sourcemeta::jsontoolkit::ReferenceType::Dynamic,
                               "https://example.com"}));
}

TEST(JSONSchema_frame, reference_frame_dynamic) {
  sourcemeta::jsontoolkit::FrameLocations frame;
  frame.insert(
      {{sourcemeta::jsontoolkit::ReferenceType::Dynamic, "https://example.com"},
       {sourcemeta::jsontoolkit::FrameLocationType::Resource,
        "https://example.com",
        "https://example.com",
        sourcemeta::jsontoolkit::empty_pointer,
        sourcemeta::jsontoolkit::empty_pointer,
        "https://json-schema.org/draft/2020-12/schema",
        {}}});
  EXPECT_EQ(frame.size(), 1);
  EXPECT_FALSE(frame.contains(
      {sourcemeta::jsontoolkit::ReferenceType::Static, "https://example.com"}));
  EXPECT_TRUE(frame.contains({sourcemeta::jsontoolkit::ReferenceType::Dynamic,
                              "https://example.com"}));
}

TEST(JSONSchema_frame, reference_frame_both) {
  sourcemeta::jsontoolkit::FrameLocations frame;
  frame.insert(
      {{sourcemeta::jsontoolkit::ReferenceType::Static, "https://example.com"},
       {sourcemeta::jsontoolkit::FrameLocationType::Resource,
        "https://example.com",
        "https://example.com",
        sourcemeta::jsontoolkit::empty_pointer,
        sourcemeta::jsontoolkit::empty_pointer,
        "https://json-schema.org/draft/2020-12/schema",
        {}}});
  frame.insert(
      {{sourcemeta::jsontoolkit::ReferenceType::Dynamic, "https://example.com"},
       {sourcemeta::jsontoolkit::FrameLocationType::Resource,
        "https://example.com",
        "https://example.com",
        sourcemeta::jsontoolkit::empty_pointer,
        sourcemeta::jsontoolkit::empty_pointer,
        "https://json-schema.org/draft/2020-12/schema",
        {}}});
  EXPECT_EQ(frame.size(), 2);
  EXPECT_TRUE(frame.contains(
      {sourcemeta::jsontoolkit::ReferenceType::Static, "https://example.com"}));
  EXPECT_TRUE(frame.contains({sourcemeta::jsontoolkit::ReferenceType::Dynamic,
                              "https://example.com"}));
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

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", std::nullopt);
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

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_FRAME_DESTINATION_OF(frame, Static,
                              "https://www.sourcemeta.com/schema", 0,
                              "/properties/foo/$ref")
  EXPECT_FRAME_DESTINATION_OF(frame, Static,
                              "https://www.sourcemeta.com/schema#baz", 0,
                              "/properties/anchor/$ref")
  EXPECT_FRAME_DESTINATION_OF(frame, Static,
                              "https://www.sourcemeta.com/schema#baz", 1,
                              "/properties/bar/$ref")
  EXPECT_FRAME_DESTINATION_OF(
      frame, Static, "https://www.sourcemeta.com/schema#/properties/baz", 0,
      "/properties/anchor/$ref")
  EXPECT_FRAME_DESTINATION_OF(
      frame, Static, "https://www.sourcemeta.com/schema#/properties/baz", 1,
      "/properties/bar/$ref")
  EXPECT_FRAME_DESTINATION_OF(frame, Static, "https://www.sourcemeta.com/test",
                              0, "/properties/qux/$ref")
  EXPECT_FRAME_DESTINATION_OF(
      frame, Static, "https://www.sourcemeta.com/schema#/properties/qux", 0,
      "/properties/qux/$ref")

  EXPECT_EQ(references.size(), 5);
  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(references, "/properties/foo/$ref",
                          "https://www.sourcemeta.com/schema",
                          "https://www.sourcemeta.com/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(references, "/properties/bar/$ref",
                          "https://www.sourcemeta.com/schema#/properties/baz",
                          "https://www.sourcemeta.com/schema",
                          "/properties/baz");
  EXPECT_STATIC_REFERENCE(references, "/properties/qux/$ref",
                          "https://www.sourcemeta.com/test",
                          "https://www.sourcemeta.com/test", std::nullopt);
  EXPECT_STATIC_REFERENCE(references, "/properties/anchor/$ref",
                          "https://www.sourcemeta.com/schema#baz",
                          "https://www.sourcemeta.com/schema", "baz");
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

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_FRAME_DESTINATION_OF(frame, Static, "", 0, "/properties/foo/$ref")
  EXPECT_FRAME_DESTINATION_OF(frame, Static, "#baz", 0,
                              "/properties/anchor/$ref")
  EXPECT_FRAME_DESTINATION_OF(frame, Static, "#baz", 1, "/properties/bar/$ref")
  EXPECT_FRAME_DESTINATION_OF(frame, Static, "#/properties/baz", 0,
                              "/properties/anchor/$ref")
  EXPECT_FRAME_DESTINATION_OF(frame, Static, "#/properties/baz", 1,
                              "/properties/bar/$ref")
  EXPECT_FRAME_DESTINATION_OF(frame, Static, "https://www.example.com", 0,
                              "/properties/qux/$ref")
  EXPECT_FRAME_DESTINATION_OF(frame, Static, "#/properties/qux", 0,
                              "/properties/qux/$ref")

  EXPECT_EQ(references.size(), 5);
  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(references, "/properties/foo/$ref", "", std::nullopt,
                          std::nullopt);
  EXPECT_STATIC_REFERENCE(references, "/properties/bar/$ref",
                          "#/properties/baz", std::nullopt, "/properties/baz");
  EXPECT_STATIC_REFERENCE(references, "/properties/qux/$ref",
                          "https://www.example.com", "https://www.example.com",
                          std::nullopt);
  EXPECT_STATIC_REFERENCE(references, "/properties/anchor/$ref", "#baz",
                          std::nullopt, "baz");
}

TEST(JSONSchema_frame, no_dynamic_ref_on_old_drafts) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "properties": {
      "foo": { "$dynamicRef": "#" }
    }
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame, remote_refs) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "$ref": "https://www.example.com" },
      "bar": { "$ref": "https://www.example.com/test#foo" },
      "baz": { "$ref": "https://www.example.com/x/y#/foo/bar" }
    }
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(references.size(), 4);
  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(references, "/properties/foo/$ref",
                          "https://www.example.com", "https://www.example.com",
                          std::nullopt);
  EXPECT_STATIC_REFERENCE(references, "/properties/bar/$ref",
                          "https://www.example.com/test#foo",
                          "https://www.example.com/test", "foo");
  EXPECT_STATIC_REFERENCE(references, "/properties/baz/$ref",
                          "https://www.example.com/x/y#/foo/bar",
                          "https://www.example.com/x/y", "/foo/bar");
}

TEST(JSONSchema_frame, no_dialect) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "type": "string"
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  EXPECT_THROW(sourcemeta::jsontoolkit::frame(
                   document, frame, references,
                   sourcemeta::jsontoolkit::default_schema_walker,
                   sourcemeta::jsontoolkit::official_resolver),
               sourcemeta::jsontoolkit::SchemaError);
}
