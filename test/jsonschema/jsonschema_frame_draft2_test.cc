#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include "jsonschema_test_utils.h"

#define EXPECT_FRAME_STATIC_DRAFT2_POINTER(                                    \
    frame, reference, root_id, expected_pointer, expected_base,                \
    expected_relative_pointer, expected_destination_of_size)                   \
  EXPECT_FRAME_STATIC_POINTER(frame, reference, root_id, expected_pointer,     \
                              "http://json-schema.org/draft-02/schema#",       \
                              expected_base, expected_relative_pointer,        \
                              expected_destination_of_size);

#define EXPECT_FRAME_STATIC_DRAFT2_RESOURCE(                                   \
    frame, reference, root_id, expected_pointer, expected_base,                \
    expected_relative_pointer, expected_destination_of_size)                   \
  EXPECT_FRAME_STATIC_RESOURCE(frame, reference, root_id, expected_pointer,    \
                               "http://json-schema.org/draft-02/schema#",      \
                               expected_base, expected_relative_pointer,       \
                               expected_destination_of_size);

TEST(JSONSchema_frame_draft2, anonymous_with_nested_schema_resource) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-02/schema#",
    "additionalProperties": { "id": "https://example.com" }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 6);

  EXPECT_ANONYMOUS_FRAME_STATIC_RESOURCE(
      frame, "https://example.com", "/additionalProperties",
      "http://json-schema.org/draft-02/schema#", 0);

  // JSON Pointers

  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "https://example.com#/id", "/additionalProperties/id",
      "http://json-schema.org/draft-02/schema#", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "", "", "http://json-schema.org/draft-02/schema#", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema", "http://json-schema.org/draft-02/schema#",
      0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalProperties", "/additionalProperties",
      "http://json-schema.org/draft-02/schema#", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalProperties/id", "/additionalProperties/id",
      "http://json-schema.org/draft-02/schema#", 0);

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "http://json-schema.org/draft-02/schema",
      "http://json-schema.org/draft-02/schema", std::nullopt);
}

TEST(JSONSchema_frame_draft2, empty_schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-02/schema#"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 3);
  EXPECT_FRAME_STATIC_DRAFT2_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/schema#/id",
      "https://www.sourcemeta.com/schema", "/id",
      "https://www.sourcemeta.com/schema", "/id", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", 0);

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "http://json-schema.org/draft-02/schema",
      "http://json-schema.org/draft-02/schema", std::nullopt);
}

TEST(JSONSchema_frame_draft2, one_level_applicators_without_identifiers) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-02/schema#",
    "items": { "type": "string" },
    "properties": {
      "foo": { "type": "number" }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 8);
  EXPECT_FRAME_STATIC_DRAFT2_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/schema#/id",
      "https://www.sourcemeta.com/schema", "/id",
      "https://www.sourcemeta.com/schema", "/id", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items",
      "https://www.sourcemeta.com/schema", "/items",
      "https://www.sourcemeta.com/schema", "/items", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items/type",
      "https://www.sourcemeta.com/schema", "/items/type",
      "https://www.sourcemeta.com/schema", "/items/type", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties",
      "https://www.sourcemeta.com/schema", "/properties",
      "https://www.sourcemeta.com/schema", "/properties", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/foo",
      "https://www.sourcemeta.com/schema", "/properties/foo",
      "https://www.sourcemeta.com/schema", "/properties/foo", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/foo/type",
      "https://www.sourcemeta.com/schema", "/properties/foo/type",
      "https://www.sourcemeta.com/schema", "/properties/foo/type", 0);

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "http://json-schema.org/draft-02/schema",
      "http://json-schema.org/draft-02/schema", std::nullopt);
}

TEST(JSONSchema_frame_draft2, one_level_applicators_with_identifiers) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://www.sourcemeta.com/test/qux",
    "$schema": "http://json-schema.org/draft-02/schema#",
    "items": { "id": "../foo", "type": "string" }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 9);
  EXPECT_FRAME_STATIC_DRAFT2_RESOURCE(
      frame, "https://www.sourcemeta.com/test/qux",
      "https://www.sourcemeta.com/test/qux", "",
      "https://www.sourcemeta.com/test/qux", "", 0);
  EXPECT_FRAME_STATIC_DRAFT2_RESOURCE(frame, "https://www.sourcemeta.com/foo",
                                      "https://www.sourcemeta.com/test/qux",
                                      "/items",
                                      "https://www.sourcemeta.com/foo", "", 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/id",
      "https://www.sourcemeta.com/test/qux", "/id",
      "https://www.sourcemeta.com/test/qux", "/id", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/$schema",
      "https://www.sourcemeta.com/test/qux", "/$schema",
      "https://www.sourcemeta.com/test/qux", "/$schema", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/items",
      "https://www.sourcemeta.com/test/qux", "/items",
      "https://www.sourcemeta.com/foo", "", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/items/id",
      "https://www.sourcemeta.com/test/qux", "/items/id",
      "https://www.sourcemeta.com/foo", "/id", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/items/type",
      "https://www.sourcemeta.com/test/qux", "/items/type",
      "https://www.sourcemeta.com/foo", "/type", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/foo#/id",
      "https://www.sourcemeta.com/test/qux", "/items/id",
      "https://www.sourcemeta.com/foo", "/id", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/foo#/type",
      "https://www.sourcemeta.com/test/qux", "/items/type",
      "https://www.sourcemeta.com/foo", "/type", 0);

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "http://json-schema.org/draft-02/schema",
      "http://json-schema.org/draft-02/schema", std::nullopt);
}

TEST(JSONSchema_frame_draft2, subschema_absolute_identifier) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-02/schema#",
    "items": {
      "id": "https://www.sourcemeta.com/foo",
      "type": "string"
     }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 9);
  EXPECT_FRAME_STATIC_DRAFT2_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", 0);
  EXPECT_FRAME_STATIC_DRAFT2_RESOURCE(frame, "https://www.sourcemeta.com/foo",
                                      "https://www.sourcemeta.com/schema",
                                      "/items",
                                      "https://www.sourcemeta.com/foo", "", 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/schema#/id",
      "https://www.sourcemeta.com/schema", "/id",
      "https://www.sourcemeta.com/schema", "/id", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items",
      "https://www.sourcemeta.com/schema", "/items",
      "https://www.sourcemeta.com/foo", "", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items/id",
      "https://www.sourcemeta.com/schema", "/items/id",
      "https://www.sourcemeta.com/foo", "/id", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items/type",
      "https://www.sourcemeta.com/schema", "/items/type",
      "https://www.sourcemeta.com/foo", "/type", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/foo#/id",
      "https://www.sourcemeta.com/schema", "/items/id",
      "https://www.sourcemeta.com/foo", "/id", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/foo#/type",
      "https://www.sourcemeta.com/schema", "/items/type",
      "https://www.sourcemeta.com/foo", "/type", 0);

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "http://json-schema.org/draft-02/schema",
      "http://json-schema.org/draft-02/schema", std::nullopt);
}

TEST(JSONSchema_frame_draft2, id_override) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-02/schema#",
    "items": { "id": "schema" }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  EXPECT_THROW(sourcemeta::jsontoolkit::frame(
                   document, frame, references,
                   sourcemeta::jsontoolkit::default_schema_walker,
                   sourcemeta::jsontoolkit::official_resolver),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(JSONSchema_frame_draft2, explicit_argument_id_same) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-02/schema#"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver,
                                 "http://json-schema.org/draft-02/schema#",
                                 "https://www.sourcemeta.com/schema");

  EXPECT_EQ(frame.size(), 3);
  EXPECT_FRAME_STATIC_DRAFT2_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/schema#/id",
      "https://www.sourcemeta.com/schema", "/id",
      "https://www.sourcemeta.com/schema", "/id", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", 0);

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "http://json-schema.org/draft-02/schema",
      "http://json-schema.org/draft-02/schema", std::nullopt);
}

TEST(JSONSchema_frame_draft2, explicit_argument_id_different) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-02/schema#",
    "properties": {
      "one": {
        "id": "test"
      },
      "two": {
        "id": "https://www.test.com"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver,
                                 "http://json-schema.org/draft-02/schema#",
                                 "https://www.example.com");

  EXPECT_EQ(frame.size(), 22);

  EXPECT_FRAME_STATIC_DRAFT2_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", 0);
  EXPECT_FRAME_STATIC_DRAFT2_RESOURCE(frame, "https://www.sourcemeta.com/test",
                                      "https://www.sourcemeta.com/schema",
                                      "/properties/one",
                                      "https://www.sourcemeta.com/test", "", 0);
  EXPECT_FRAME_STATIC_DRAFT2_RESOURCE(
      frame, "https://www.example.com", "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", 0);
  EXPECT_FRAME_STATIC_DRAFT2_RESOURCE(frame, "https://www.example.com/test",
                                      "https://www.sourcemeta.com/schema",
                                      "/properties/one",
                                      "https://www.example.com/test", "", 0);
  EXPECT_FRAME_STATIC_DRAFT2_RESOURCE(
      frame, "https://www.test.com", "https://www.sourcemeta.com/schema",
      "/properties/two", "https://www.test.com", "", 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT2_POINTER(frame,
                                     "https://www.sourcemeta.com/schema#/id",
                                     "https://www.sourcemeta.com/schema", "/id",
                                     "https://www.example.com", "/id", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.example.com", "/$schema", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties",
      "https://www.sourcemeta.com/schema", "/properties",
      "https://www.example.com", "/properties", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/one",
      "https://www.sourcemeta.com/schema", "/properties/one",
      "https://www.example.com/test", "", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/one/id",
      "https://www.sourcemeta.com/schema", "/properties/one/id",
      "https://www.example.com/test", "/id", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/two",
      "https://www.sourcemeta.com/schema", "/properties/two",
      "https://www.test.com", "", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/two/id",
      "https://www.sourcemeta.com/schema", "/properties/two/id",
      "https://www.test.com", "/id", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.sourcemeta.com/test#/id",
      "https://www.sourcemeta.com/schema", "/properties/one/id",
      "https://www.example.com/test", "/id", 0);
  EXPECT_FRAME_STATIC_DRAFT2_POINTER(
      frame, "https://www.test.com#/id", "https://www.sourcemeta.com/schema",
      "/properties/two/id", "https://www.test.com", "/id", 0);

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "http://json-schema.org/draft-02/schema",
      "http://json-schema.org/draft-02/schema", std::nullopt);
}

TEST(JSONSchema_frame_draft2, ref_metaschema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-02/schema#",
    "$ref": "http://json-schema.org/draft-02/schema#"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 3);

  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "", "", "http://json-schema.org/draft-02/schema#", 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema", "http://json-schema.org/draft-02/schema#",
      0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$ref", "/$ref", "http://json-schema.org/draft-02/schema#", 0);

  // References

  EXPECT_EQ(references.size(), 2);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "http://json-schema.org/draft-02/schema",
      "http://json-schema.org/draft-02/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(
      references, "/$ref", "http://json-schema.org/draft-02/schema",
      "http://json-schema.org/draft-02/schema", std::nullopt);
}
