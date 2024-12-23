#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include "jsonschema_test_utils.h"

#define EXPECT_FRAME_STATIC_DRAFT7_POINTER(                                    \
    frame, reference, root_id, expected_pointer, expected_base,                \
    expected_relative_pointer, expected_destination_of_size)                   \
  EXPECT_FRAME_STATIC_POINTER(frame, reference, root_id, expected_pointer,     \
                              "http://json-schema.org/draft-07/schema#",       \
                              expected_base, expected_relative_pointer,        \
                              expected_destination_of_size);

#define EXPECT_FRAME_STATIC_DRAFT7_RESOURCE(                                   \
    frame, reference, root_id, expected_pointer, expected_base,                \
    expected_relative_pointer, expected_destination_of_size)                   \
  EXPECT_FRAME_STATIC_RESOURCE(frame, reference, root_id, expected_pointer,    \
                               "http://json-schema.org/draft-07/schema#",      \
                               expected_base, expected_relative_pointer,       \
                               expected_destination_of_size);

#define EXPECT_FRAME_STATIC_DRAFT7_ANCHOR(                                     \
    frame, reference, root_id, expected_pointer, expected_base,                \
    expected_relative_pointer, expected_destination_of_size)                   \
  EXPECT_FRAME_STATIC_ANCHOR(frame, reference, root_id, expected_pointer,      \
                             "http://json-schema.org/draft-07/schema#",        \
                             expected_base, expected_relative_pointer,         \
                             expected_destination_of_size);

TEST(JSONSchema_frame_draft7, anonymous_with_nested_schema_resource) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "additionalProperties": { "$id": "https://example.com" }
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 6);

  EXPECT_ANONYMOUS_FRAME_STATIC_RESOURCE(
      frame, "https://example.com", "/additionalProperties",
      "http://json-schema.org/draft-07/schema#", 0);

  // JSON Pointers

  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "https://example.com#/$id", "/additionalProperties/$id",
      "http://json-schema.org/draft-07/schema#", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "", "", "http://json-schema.org/draft-07/schema#", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema", "http://json-schema.org/draft-07/schema#",
      0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalProperties", "/additionalProperties",
      "http://json-schema.org/draft-07/schema#", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalProperties/$id", "/additionalProperties/$id",
      "http://json-schema.org/draft-07/schema#", 0);

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "http://json-schema.org/draft-07/schema",
      "http://json-schema.org/draft-07/schema", std::nullopt);
}

TEST(JSONSchema_frame_draft7, empty_schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-07/schema#"
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 3);
  EXPECT_FRAME_STATIC_DRAFT7_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", 0);

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "http://json-schema.org/draft-07/schema",
      "http://json-schema.org/draft-07/schema", std::nullopt);
}

TEST(JSONSchema_frame_draft7, one_level_applicators_without_identifiers) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "items": { "type": "string" },
    "properties": {
      "foo": { "type": "number" }
    }
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 8);
  EXPECT_FRAME_STATIC_DRAFT7_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items",
      "https://www.sourcemeta.com/schema", "/items",
      "https://www.sourcemeta.com/schema", "/items", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items/type",
      "https://www.sourcemeta.com/schema", "/items/type",
      "https://www.sourcemeta.com/schema", "/items/type", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties",
      "https://www.sourcemeta.com/schema", "/properties",
      "https://www.sourcemeta.com/schema", "/properties", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/foo",
      "https://www.sourcemeta.com/schema", "/properties/foo",
      "https://www.sourcemeta.com/schema", "/properties/foo", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/foo/type",
      "https://www.sourcemeta.com/schema", "/properties/foo/type",
      "https://www.sourcemeta.com/schema", "/properties/foo/type", 0);

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "http://json-schema.org/draft-07/schema",
      "http://json-schema.org/draft-07/schema", std::nullopt);
}

TEST(JSONSchema_frame_draft7, one_level_applicators_with_identifiers) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/test/qux",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "items": { "$id": "../foo", "type": "string" }
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 9);
  EXPECT_FRAME_STATIC_DRAFT7_RESOURCE(
      frame, "https://www.sourcemeta.com/test/qux",
      "https://www.sourcemeta.com/test/qux", "",
      "https://www.sourcemeta.com/test/qux", "", 0);
  EXPECT_FRAME_STATIC_DRAFT7_RESOURCE(frame, "https://www.sourcemeta.com/foo",
                                      "https://www.sourcemeta.com/test/qux",
                                      "/items",
                                      "https://www.sourcemeta.com/foo", "", 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/$id",
      "https://www.sourcemeta.com/test/qux", "/$id",
      "https://www.sourcemeta.com/test/qux", "/$id", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/$schema",
      "https://www.sourcemeta.com/test/qux", "/$schema",
      "https://www.sourcemeta.com/test/qux", "/$schema", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/items",
      "https://www.sourcemeta.com/test/qux", "/items",
      "https://www.sourcemeta.com/foo", "", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/items/$id",
      "https://www.sourcemeta.com/test/qux", "/items/$id",
      "https://www.sourcemeta.com/foo", "/$id", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/items/type",
      "https://www.sourcemeta.com/test/qux", "/items/type",
      "https://www.sourcemeta.com/foo", "/type", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/foo#/$id",
      "https://www.sourcemeta.com/test/qux", "/items/$id",
      "https://www.sourcemeta.com/foo", "/$id", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/foo#/type",
      "https://www.sourcemeta.com/test/qux", "/items/type",
      "https://www.sourcemeta.com/foo", "/type", 0);

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "http://json-schema.org/draft-07/schema",
      "http://json-schema.org/draft-07/schema", std::nullopt);
}

TEST(JSONSchema_frame_draft7, subschema_absolute_identifier) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "items": {
      "$id": "https://www.sourcemeta.com/foo",
      "type": "string"
     }
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 9);
  EXPECT_FRAME_STATIC_DRAFT7_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", 0);
  EXPECT_FRAME_STATIC_DRAFT7_RESOURCE(frame, "https://www.sourcemeta.com/foo",
                                      "https://www.sourcemeta.com/schema",
                                      "/items",
                                      "https://www.sourcemeta.com/foo", "", 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items",
      "https://www.sourcemeta.com/schema", "/items",
      "https://www.sourcemeta.com/foo", "", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items/$id",
      "https://www.sourcemeta.com/schema", "/items/$id",
      "https://www.sourcemeta.com/foo", "/$id", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items/type",
      "https://www.sourcemeta.com/schema", "/items/type",
      "https://www.sourcemeta.com/foo", "/type", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/foo#/$id",
      "https://www.sourcemeta.com/schema", "/items/$id",
      "https://www.sourcemeta.com/foo", "/$id", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/foo#/type",
      "https://www.sourcemeta.com/schema", "/items/type",
      "https://www.sourcemeta.com/foo", "/type", 0);

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "http://json-schema.org/draft-07/schema",
      "http://json-schema.org/draft-07/schema", std::nullopt);
}

TEST(JSONSchema_frame_draft7, id_override) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "items": { "$id": "schema" }
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  EXPECT_THROW(sourcemeta::jsontoolkit::frame(
                   document, frame, references,
                   sourcemeta::jsontoolkit::default_schema_walker,
                   sourcemeta::jsontoolkit::official_resolver),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(JSONSchema_frame_draft7, explicit_argument_id_same) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-07/schema#"
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver,
                                 "http://json-schema.org/draft-07/schema#",
                                 "https://www.sourcemeta.com/schema");

  EXPECT_EQ(frame.size(), 3);
  EXPECT_FRAME_STATIC_DRAFT7_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", 0);

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "http://json-schema.org/draft-07/schema",
      "http://json-schema.org/draft-07/schema", std::nullopt);
}

TEST(JSONSchema_frame_draft7, explicit_argument_id_different) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
      "one": {
        "$id": "test"
      },
      "two": {
        "$id": "https://www.test.com"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver,
                                 "http://json-schema.org/draft-07/schema#",
                                 "https://www.example.com");

  EXPECT_EQ(frame.size(), 22);

  EXPECT_FRAME_STATIC_DRAFT7_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", 0);
  EXPECT_FRAME_STATIC_DRAFT7_RESOURCE(frame, "https://www.sourcemeta.com/test",
                                      "https://www.sourcemeta.com/schema",
                                      "/properties/one",
                                      "https://www.sourcemeta.com/test", "", 0);
  EXPECT_FRAME_STATIC_DRAFT7_RESOURCE(
      frame, "https://www.example.com", "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", 0);
  EXPECT_FRAME_STATIC_DRAFT7_RESOURCE(frame, "https://www.example.com/test",
                                      "https://www.sourcemeta.com/schema",
                                      "/properties/one",
                                      "https://www.example.com/test", "", 0);
  EXPECT_FRAME_STATIC_DRAFT7_RESOURCE(
      frame, "https://www.test.com", "https://www.sourcemeta.com/schema",
      "/properties/two", "https://www.test.com", "", 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id", "https://www.example.com",
      "/$id", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.example.com", "/$schema", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties",
      "https://www.sourcemeta.com/schema", "/properties",
      "https://www.example.com", "/properties", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/one",
      "https://www.sourcemeta.com/schema", "/properties/one",
      "https://www.example.com/test", "", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/one/$id",
      "https://www.sourcemeta.com/schema", "/properties/one/$id",
      "https://www.example.com/test", "/$id", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/two",
      "https://www.sourcemeta.com/schema", "/properties/two",
      "https://www.test.com", "", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/two/$id",
      "https://www.sourcemeta.com/schema", "/properties/two/$id",
      "https://www.test.com", "/$id", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.sourcemeta.com/test#/$id",
      "https://www.sourcemeta.com/schema", "/properties/one/$id",
      "https://www.example.com/test", "/$id", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(
      frame, "https://www.test.com#/$id", "https://www.sourcemeta.com/schema",
      "/properties/two/$id", "https://www.test.com", "/$id", 0);

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "http://json-schema.org/draft-07/schema",
      "http://json-schema.org/draft-07/schema", std::nullopt);
}

TEST(JSONSchema_frame_draft7, ref_metaschema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$ref": "http://json-schema.org/draft-07/schema#"
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 3);

  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "", "", "http://json-schema.org/draft-07/schema#", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema", "http://json-schema.org/draft-07/schema#",
      0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$ref", "/$ref", "http://json-schema.org/draft-07/schema#", 0);

  // References

  EXPECT_EQ(references.size(), 2);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "http://json-schema.org/draft-07/schema",
      "http://json-schema.org/draft-07/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(
      references, "/$ref", "http://json-schema.org/draft-07/schema",
      "http://json-schema.org/draft-07/schema", std::nullopt);
}

TEST(JSONSchema_frame_draft7, location_independent_identifier_anonymous) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "definitions": {
      "foo": {
        "$id": "#foo"
      },
      "bar": {
        "$ref": "#foo"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 8);

  // Pointers
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "", "", "http://json-schema.org/draft-07/schema#", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema", "http://json-schema.org/draft-07/schema#",
      0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/definitions", "/definitions",
      "http://json-schema.org/draft-07/schema#", 0);

  // Foo
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/definitions/foo", "/definitions/foo",
      "http://json-schema.org/draft-07/schema#", 1);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/definitions/foo/$id", "/definitions/foo/$id",
      "http://json-schema.org/draft-07/schema#", 0);

  // Bar
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/definitions/bar", "/definitions/bar",
      "http://json-schema.org/draft-07/schema#", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/definitions/bar/$ref", "/definitions/bar/$ref",
      "http://json-schema.org/draft-07/schema#", 0);

  // Anchors
  EXPECT_ANONYMOUS_FRAME_STATIC_ANCHOR(
      frame, "#foo", "/definitions/foo",
      "http://json-schema.org/draft-07/schema#", 1);

  // References

  EXPECT_EQ(references.size(), 2);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "http://json-schema.org/draft-07/schema",
      "http://json-schema.org/draft-07/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(references, "/definitions/bar/$ref", "#foo",
                          std::nullopt, "foo");
}

TEST(JSONSchema_frame_draft7, ref_with_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$ref": "#/definitions/string",
    "definitions": {
      "string": { "type": "string" }
    }
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 7);

  // JSON Pointers

  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "", "", "http://json-schema.org/draft-07/schema#", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$id", "/$id", "http://json-schema.org/draft-07/schema#", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema", "http://json-schema.org/draft-07/schema#",
      0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$ref", "/$ref", "http://json-schema.org/draft-07/schema#", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/definitions", "/definitions",
      "http://json-schema.org/draft-07/schema#", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/definitions/string", "/definitions/string",
      "http://json-schema.org/draft-07/schema#", 1);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/definitions/string/type", "/definitions/string/type",
      "http://json-schema.org/draft-07/schema#", 0);

  // References

  EXPECT_EQ(references.size(), 2);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "http://json-schema.org/draft-07/schema",
      "http://json-schema.org/draft-07/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(references, "/$ref", "#/definitions/string",
                          std::nullopt, "/definitions/string");
}

TEST(JSONSchema_frame_draft7, relative_base_uri_without_ref) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "common"
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 3);

  EXPECT_FRAME_STATIC_DRAFT7_RESOURCE(frame, "common", "common", "", "common",
                                      "", 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT7_POINTER(frame, "common#/$schema", "common",
                                     "/$schema", "common", "/$schema", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(frame, "common#/$id", "common", "/$id",
                                     "common", "/$id", 0);

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "http://json-schema.org/draft-07/schema",
      "http://json-schema.org/draft-07/schema", std::nullopt);
}

TEST(JSONSchema_frame_draft7, relative_base_uri_with_ref) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "common",
    "allOf": [ { "$ref": "#foo" } ],
    "definitions": {
      "foo": {
        "$id": "#foo"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::FrameLocations frame;
  sourcemeta::jsontoolkit::FrameReferences references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 10);

  EXPECT_FRAME_STATIC_DRAFT7_RESOURCE(frame, "common", "common", "", "common",
                                      "", 0);

  // Anchors
  EXPECT_FRAME_STATIC_DRAFT7_ANCHOR(frame, "common#foo", "common",
                                    "/definitions/foo", "common",
                                    "/definitions/foo", 1);

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT7_POINTER(frame, "common#/$schema", "common",
                                     "/$schema", "common", "/$schema", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(frame, "common#/$id", "common", "/$id",
                                     "common", "/$id", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(frame, "common#/allOf", "common", "/allOf",
                                     "common", "/allOf", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(frame, "common#/allOf/0", "common",
                                     "/allOf/0", "common", "/allOf/0", 0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(frame, "common#/allOf/0/$ref", "common",
                                     "/allOf/0/$ref", "common", "/allOf/0/$ref",
                                     0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(frame, "common#/definitions", "common",
                                     "/definitions", "common", "/definitions",
                                     0);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(frame, "common#/definitions/foo", "common",
                                     "/definitions/foo", "common",
                                     "/definitions/foo", 1);
  EXPECT_FRAME_STATIC_DRAFT7_POINTER(frame, "common#/definitions/foo/$id",
                                     "common", "/definitions/foo/$id", "common",
                                     "/definitions/foo/$id", 0);

  // References

  EXPECT_EQ(references.size(), 2);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "http://json-schema.org/draft-07/schema",
      "http://json-schema.org/draft-07/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(references, "/allOf/0/$ref", "common#foo", "common",
                          "foo");
}
