#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include "jsonschema_test_utils.h"

#define EXPECT_FRAME_STATIC_2019_09_POINTER(frame, reference, root_id,         \
                                            expected_pointer, expected_base,   \
                                            expected_relative_pointer)         \
  EXPECT_FRAME_STATIC_POINTER(frame, reference, root_id, expected_pointer,     \
                              "https://json-schema.org/draft/2019-09/schema",  \
                              expected_base, expected_relative_pointer);

#define EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame, reference, root_id,        \
                                             expected_pointer, expected_base,  \
                                             expected_relative_pointer)        \
  EXPECT_FRAME_STATIC_RESOURCE(frame, reference, root_id, expected_pointer,    \
                               "https://json-schema.org/draft/2019-09/schema", \
                               expected_base, expected_relative_pointer);

#define EXPECT_FRAME_STATIC_2019_09_ANCHOR(frame, reference, root_id,          \
                                           expected_pointer, expected_base,    \
                                           expected_relative_pointer)          \
  EXPECT_FRAME_STATIC_ANCHOR(frame, reference, root_id, expected_pointer,      \
                             "https://json-schema.org/draft/2019-09/schema",   \
                             expected_base, expected_relative_pointer);

#define EXPECT_FRAME_DYNAMIC_2019_09_ANCHOR(frame, reference, root_id,         \
                                            expected_pointer, expected_base,   \
                                            expected_relative_pointer)         \
  EXPECT_FRAME_DYNAMIC_ANCHOR(frame, reference, root_id, expected_pointer,     \
                              "https://json-schema.org/draft/2019-09/schema",  \
                              expected_base, expected_relative_pointer);

TEST(JSONSchema_frame_2019_09, anonymous_with_nested_schema_resource) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalProperties": { "$id": "https://example.com" }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 6);

  EXPECT_ANONYMOUS_FRAME_STATIC_RESOURCE(
      frame, "https://example.com", "/additionalProperties",
      "https://json-schema.org/draft/2019-09/schema");

  // JSON Pointers

  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "https://example.com#/$id", "/additionalProperties/$id",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalProperties", "/additionalProperties",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalProperties/$id", "/additionalProperties/$id",
      "https://json-schema.org/draft/2019-09/schema");

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, empty_schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 3);
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame,
                                       "https://www.sourcemeta.com/schema",
                                       "https://www.sourcemeta.com/schema", "",
                                       "https://www.sourcemeta.com/schema", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema");

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, one_level_applicators_without_identifiers) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
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
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame,
                                       "https://www.sourcemeta.com/schema",
                                       "https://www.sourcemeta.com/schema", "",
                                       "https://www.sourcemeta.com/schema", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items",
      "https://www.sourcemeta.com/schema", "/items",
      "https://www.sourcemeta.com/schema", "/items");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items/type",
      "https://www.sourcemeta.com/schema", "/items/type",
      "https://www.sourcemeta.com/schema", "/items/type");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties",
      "https://www.sourcemeta.com/schema", "/properties",
      "https://www.sourcemeta.com/schema", "/properties");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/foo",
      "https://www.sourcemeta.com/schema", "/properties/foo",
      "https://www.sourcemeta.com/schema", "/properties/foo");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/foo/type",
      "https://www.sourcemeta.com/schema", "/properties/foo/type",
      "https://www.sourcemeta.com/schema", "/properties/foo/type");

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, one_level_applicators_with_identifiers) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/test/qux",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "items": { "$id": "../foo", "type": "string" },
    "properties": {
      "foo": { "$anchor": "test", "type": "number" }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 14);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/test/qux",
      "https://www.sourcemeta.com/test/qux", "",
      "https://www.sourcemeta.com/test/qux", "");
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame, "https://www.sourcemeta.com/foo",
                                       "https://www.sourcemeta.com/test/qux",
                                       "/items",
                                       "https://www.sourcemeta.com/foo", "");

  // Anchors

  EXPECT_FRAME_STATIC_2019_09_ANCHOR(
      frame, "https://www.sourcemeta.com/test/qux#test",
      "https://www.sourcemeta.com/test/qux", "/properties/foo",
      "https://www.sourcemeta.com/test/qux", "/properties/foo");

  // JSON Pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/$id",
      "https://www.sourcemeta.com/test/qux", "/$id",
      "https://www.sourcemeta.com/test/qux", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/$schema",
      "https://www.sourcemeta.com/test/qux", "/$schema",
      "https://www.sourcemeta.com/test/qux", "/$schema");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/items",
      "https://www.sourcemeta.com/test/qux", "/items",
      "https://www.sourcemeta.com/foo", "");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/items/$id",
      "https://www.sourcemeta.com/test/qux", "/items/$id",
      "https://www.sourcemeta.com/foo", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/items/type",
      "https://www.sourcemeta.com/test/qux", "/items/type",
      "https://www.sourcemeta.com/foo", "/type");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/properties",
      "https://www.sourcemeta.com/test/qux", "/properties",
      "https://www.sourcemeta.com/test/qux", "/properties");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/properties/foo",
      "https://www.sourcemeta.com/test/qux", "/properties/foo",
      "https://www.sourcemeta.com/test/qux", "/properties/foo");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/properties/foo/$anchor",
      "https://www.sourcemeta.com/test/qux", "/properties/foo/$anchor",
      "https://www.sourcemeta.com/test/qux", "/properties/foo/$anchor");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/properties/foo/type",
      "https://www.sourcemeta.com/test/qux", "/properties/foo/type",
      "https://www.sourcemeta.com/test/qux", "/properties/foo/type");

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/foo#/$id",
      "https://www.sourcemeta.com/test/qux", "/items/$id",
      "https://www.sourcemeta.com/foo", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/foo#/type",
      "https://www.sourcemeta.com/test/qux", "/items/type",
      "https://www.sourcemeta.com/foo", "/type");

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, subschema_absolute_identifier) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "items": {
      "$id": "https://www.sourcemeta.com/foo",
      "type": "string"
     }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 9);
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame,
                                       "https://www.sourcemeta.com/schema",
                                       "https://www.sourcemeta.com/schema", "",
                                       "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame, "https://www.sourcemeta.com/foo",
                                       "https://www.sourcemeta.com/schema",
                                       "/items",
                                       "https://www.sourcemeta.com/foo", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items",
      "https://www.sourcemeta.com/schema", "/items",
      "https://www.sourcemeta.com/foo", "");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items/$id",
      "https://www.sourcemeta.com/schema", "/items/$id",
      "https://www.sourcemeta.com/foo", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items/type",
      "https://www.sourcemeta.com/schema", "/items/type",
      "https://www.sourcemeta.com/foo", "/type");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/foo#/$id",
      "https://www.sourcemeta.com/schema", "/items/$id",
      "https://www.sourcemeta.com/foo", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/foo#/type",
      "https://www.sourcemeta.com/schema", "/items/type",
      "https://www.sourcemeta.com/foo", "/type");

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, nested_schemas) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "properties": {
      "foo": {
        "$id": "https://www.sourcemeta.com/foo",
        "$anchor": "test",
        "items": {
          "$id": "qux"
        }
      },
      "bar": {
        "$id": "https://www.sourcemeta.com/bar"
      },
      "baz": {
        "$id": "baz",
        "items": {
          "$anchor": "extra"
        }
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 30);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame,
                                       "https://www.sourcemeta.com/schema",
                                       "https://www.sourcemeta.com/schema", "",
                                       "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame, "https://www.sourcemeta.com/foo",
                                       "https://www.sourcemeta.com/schema",
                                       "/properties/foo",
                                       "https://www.sourcemeta.com/foo", "");
  EXPECT_FRAME_STATIC_2019_09_ANCHOR(
      frame, "https://www.sourcemeta.com/foo#test",
      "https://www.sourcemeta.com/schema", "/properties/foo",
      "https://www.sourcemeta.com/foo", "");
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame, "https://www.sourcemeta.com/bar",
                                       "https://www.sourcemeta.com/schema",
                                       "/properties/bar",
                                       "https://www.sourcemeta.com/bar", "");
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame, "https://www.sourcemeta.com/baz",
                                       "https://www.sourcemeta.com/schema",
                                       "/properties/baz",
                                       "https://www.sourcemeta.com/baz", "");
  EXPECT_FRAME_STATIC_2019_09_ANCHOR(
      frame, "https://www.sourcemeta.com/baz#extra",
      "https://www.sourcemeta.com/schema", "/properties/baz/items",
      "https://www.sourcemeta.com/baz", "/items");
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame, "https://www.sourcemeta.com/qux",
                                       "https://www.sourcemeta.com/schema",
                                       "/properties/foo/items",
                                       "https://www.sourcemeta.com/qux", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties",
      "https://www.sourcemeta.com/schema", "/properties",
      "https://www.sourcemeta.com/schema", "/properties");

  // foo
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/foo",
      "https://www.sourcemeta.com/schema", "/properties/foo",
      "https://www.sourcemeta.com/foo", "");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/foo/$id",
      "https://www.sourcemeta.com/schema", "/properties/foo/$id",
      "https://www.sourcemeta.com/foo", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/foo/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/foo/$anchor",
      "https://www.sourcemeta.com/foo", "/$anchor");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/foo/items",
      "https://www.sourcemeta.com/schema", "/properties/foo/items",
      "https://www.sourcemeta.com/qux", "");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/foo/items/$id",
      "https://www.sourcemeta.com/schema", "/properties/foo/items/$id",
      "https://www.sourcemeta.com/qux", "/$id");

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/foo#/$id",
      "https://www.sourcemeta.com/schema", "/properties/foo/$id",
      "https://www.sourcemeta.com/foo", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/foo#/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/foo/$anchor",
      "https://www.sourcemeta.com/foo", "/$anchor");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/foo#/items",
      "https://www.sourcemeta.com/schema", "/properties/foo/items",
      "https://www.sourcemeta.com/qux", "");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/foo#/items/$id",
      "https://www.sourcemeta.com/schema", "/properties/foo/items/$id",
      "https://www.sourcemeta.com/qux", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/qux#/$id",
      "https://www.sourcemeta.com/schema", "/properties/foo/items/$id",
      "https://www.sourcemeta.com/qux", "/$id");

  // bar
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/bar",
      "https://www.sourcemeta.com/schema", "/properties/bar",
      "https://www.sourcemeta.com/bar", "");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/bar/$id",
      "https://www.sourcemeta.com/schema", "/properties/bar/$id",
      "https://www.sourcemeta.com/bar", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/bar#/$id",
      "https://www.sourcemeta.com/schema", "/properties/bar/$id",
      "https://www.sourcemeta.com/bar", "/$id");

  // baz
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/baz",
      "https://www.sourcemeta.com/schema", "/properties/baz",
      "https://www.sourcemeta.com/baz", "");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/baz/$id",
      "https://www.sourcemeta.com/schema", "/properties/baz/$id",
      "https://www.sourcemeta.com/baz", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/baz/items",
      "https://www.sourcemeta.com/schema", "/properties/baz/items",
      "https://www.sourcemeta.com/baz", "/items");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/baz/items/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/baz/items/$anchor",
      "https://www.sourcemeta.com/baz", "/items/$anchor");

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/baz#/$id",
      "https://www.sourcemeta.com/schema", "/properties/baz/$id",
      "https://www.sourcemeta.com/baz", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/baz#/items",
      "https://www.sourcemeta.com/schema", "/properties/baz/items",
      "https://www.sourcemeta.com/baz", "/items");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/baz#/items/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/baz/items/$anchor",
      "https://www.sourcemeta.com/baz", "/items/$anchor");

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, id_override) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "items": { "$id": "schema" }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  EXPECT_THROW(sourcemeta::jsontoolkit::frame(
                   document, frame, references,
                   sourcemeta::jsontoolkit::default_schema_walker,
                   sourcemeta::jsontoolkit::official_resolver),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(JSONSchema_frame_2019_09, static_anchor_override) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$anchor": "foo",
    "items": { "$anchor": "foo" }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  EXPECT_THROW(sourcemeta::jsontoolkit::frame(
                   document, frame, references,
                   sourcemeta::jsontoolkit::default_schema_walker,
                   sourcemeta::jsontoolkit::official_resolver),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(JSONSchema_frame_2019_09, explicit_argument_id_same) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver,
                                 "https://json-schema.org/draft/2019-09/schema",
                                 "https://www.sourcemeta.com/schema");

  EXPECT_EQ(frame.size(), 3);
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame,
                                       "https://www.sourcemeta.com/schema",
                                       "https://www.sourcemeta.com/schema", "",
                                       "https://www.sourcemeta.com/schema", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema");

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, anchor_top_level) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$anchor": "foo"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 5);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame,
                                       "https://www.sourcemeta.com/schema",
                                       "https://www.sourcemeta.com/schema", "",
                                       "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$anchor",
      "https://www.sourcemeta.com/schema", "/$anchor",
      "https://www.sourcemeta.com/schema", "/$anchor");

  // Anchors

  EXPECT_FRAME_STATIC_2019_09_ANCHOR(frame,
                                     "https://www.sourcemeta.com/schema#foo",
                                     "https://www.sourcemeta.com/schema", "",
                                     "https://www.sourcemeta.com/schema", "");

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, explicit_argument_id_different) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "items": {
      "$anchor": "foo"
    },
    "properties": {
      "one": {
        "$id": "test",
        "$anchor": "bar"
      },
      "two": {
        "$id": "https://www.test.com",
        "$anchor": "baz"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver,
                                 "https://json-schema.org/draft/2019-09/schema",
                                 "https://www.example.com");

  EXPECT_EQ(frame.size(), 38);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame,
                                       "https://www.sourcemeta.com/schema",
                                       "https://www.sourcemeta.com/schema", "",
                                       "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame, "https://www.sourcemeta.com/test",
                                       "https://www.sourcemeta.com/schema",
                                       "/properties/one",
                                       "https://www.sourcemeta.com/test", "");
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame, "https://www.example.com",
                                       "https://www.sourcemeta.com/schema", "",
                                       "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame, "https://www.example.com/test",
                                       "https://www.sourcemeta.com/schema",
                                       "/properties/one",
                                       "https://www.example.com/test", "");
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.test.com", "https://www.sourcemeta.com/schema",
      "/properties/two", "https://www.test.com", "");

  // Anchors

  EXPECT_FRAME_STATIC_2019_09_ANCHOR(
      frame, "https://www.sourcemeta.com/schema#foo",
      "https://www.sourcemeta.com/schema", "/items",
      "https://www.sourcemeta.com/schema", "/items");
  EXPECT_FRAME_STATIC_2019_09_ANCHOR(
      frame, "https://www.example.com#foo", "https://www.sourcemeta.com/schema",
      "/items", "https://www.example.com", "/items");
  EXPECT_FRAME_STATIC_2019_09_ANCHOR(
      frame, "https://www.sourcemeta.com/test#bar",
      "https://www.sourcemeta.com/schema", "/properties/one",
      "https://www.sourcemeta.com/test", "");
  EXPECT_FRAME_STATIC_2019_09_ANCHOR(frame, "https://www.example.com/test#bar",
                                     "https://www.sourcemeta.com/schema",
                                     "/properties/one",
                                     "https://www.example.com/test", "");
  EXPECT_FRAME_STATIC_2019_09_ANCHOR(
      frame, "https://www.test.com#baz", "https://www.sourcemeta.com/schema",
      "/properties/two", "https://www.test.com", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id", "https://www.example.com",
      "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.example.com", "/$schema");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items",
      "https://www.sourcemeta.com/schema", "/items", "https://www.example.com",
      "/items");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items/$anchor",
      "https://www.sourcemeta.com/schema", "/items/$anchor",
      "https://www.example.com", "/items/$anchor");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties",
      "https://www.sourcemeta.com/schema", "/properties",
      "https://www.example.com", "/properties");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/one",
      "https://www.sourcemeta.com/schema", "/properties/one",
      "https://www.example.com/test", "");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/one/$id",
      "https://www.sourcemeta.com/schema", "/properties/one/$id",
      "https://www.example.com/test", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/one/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/one/$anchor",
      "https://www.example.com/test", "/$anchor");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/two",
      "https://www.sourcemeta.com/schema", "/properties/two",
      "https://www.test.com", "");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/two/$id",
      "https://www.sourcemeta.com/schema", "/properties/two/$id",
      "https://www.test.com", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/two/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/two/$anchor",
      "https://www.test.com", "/$anchor");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/test#/$id",
      "https://www.sourcemeta.com/schema", "/properties/one/$id",
      "https://www.example.com/test", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/test#/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/one/$anchor",
      "https://www.example.com/test", "/$anchor");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.test.com#/$id", "https://www.sourcemeta.com/schema",
      "/properties/two/$id", "https://www.test.com", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(frame, "https://www.test.com#/$anchor",
                                      "https://www.sourcemeta.com/schema",
                                      "/properties/two/$anchor",
                                      "https://www.test.com", "/$anchor");

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, ref_metaschema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$ref": "https://json-schema.org/draft/2019-09/schema"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 3);

  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$ref", "/$ref", "https://json-schema.org/draft/2019-09/schema");

  // References

  EXPECT_EQ(references.size(), 2);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(
      references, "/$ref", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, location_independent_identifier_anonymous) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$defs": {
      "foo": {
        "$id": "#foo"
      },
      "bar": {
        "$ref": "#foo"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;

  EXPECT_THROW(sourcemeta::jsontoolkit::frame(
                   document, frame, references,
                   sourcemeta::jsontoolkit::default_schema_walker,
                   sourcemeta::jsontoolkit::official_resolver),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(JSONSchema_frame_2019_09, recursive_anchor_true_with_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": true
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 5);

  // Dynamic anchors

  EXPECT_FRAME_DYNAMIC_2019_09_ANCHOR(frame,
                                      "https://www.sourcemeta.com/schema",
                                      "https://www.sourcemeta.com/schema", "",
                                      "https://www.sourcemeta.com/schema", "");

  // Static identifiers

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame,
                                       "https://www.sourcemeta.com/schema",
                                       "https://www.sourcemeta.com/schema", "",
                                       "https://www.sourcemeta.com/schema", "");

  // Static pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/$recursiveAnchor");

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_anchor_false_with_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": false
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 4);

  // Static identifiers

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame,
                                       "https://www.sourcemeta.com/schema",
                                       "https://www.sourcemeta.com/schema", "",
                                       "https://www.sourcemeta.com/schema", "");

  // Static pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/$recursiveAnchor");

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_anchor_true_without_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "properties": {
      "foo": {
        "$recursiveAnchor": true
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 6);

  // Dynamic anchors

  EXPECT_ANONYMOUS_FRAME_DYNAMIC_ANCHOR(
      frame, "", "/properties/foo",
      "https://json-schema.org/draft/2019-09/schema");

  // Static frames

  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/properties", "/properties",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/properties/foo", "/properties/foo",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/properties/foo/$recursiveAnchor",
      "/properties/foo/$recursiveAnchor",
      "https://json-schema.org/draft/2019-09/schema");

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_anchor_false_without_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "properties": {
      "foo": {
        "$recursiveAnchor": false
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 5);

  // Static frames

  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/properties", "/properties",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/properties/foo", "/properties/foo",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/properties/foo/$recursiveAnchor",
      "/properties/foo/$recursiveAnchor",
      "https://json-schema.org/draft/2019-09/schema");

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_ref_no_recursive_anchor_anonymous) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalItems": {
      "$recursiveRef": "#"
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 4);

  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems", "/additionalItems",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems/$recursiveRef",
      "/additionalItems/$recursiveRef",
      "https://json-schema.org/draft/2019-09/schema");

  // References

  EXPECT_EQ(references.size(), 2);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(references, "/additionalItems/$recursiveRef", "",
                          std::nullopt, std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_ref_no_recursive_anchor) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalItems": {
      "$recursiveRef": "#"
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 5);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame,
                                       "https://www.sourcemeta.com/schema",
                                       "https://www.sourcemeta.com/schema", "",
                                       "https://www.sourcemeta.com/schema", "");

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/additionalItems",
      "https://www.sourcemeta.com/schema", "/additionalItems",
      "https://www.sourcemeta.com/schema", "/additionalItems");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/additionalItems/$recursiveRef",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveRef",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveRef");

  // References

  EXPECT_EQ(references.size(), 2);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(references, "/additionalItems/$recursiveRef",
                          "https://www.sourcemeta.com/schema",
                          "https://www.sourcemeta.com/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_ref_recursive_anchor_false_anonymous) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": false,
    "additionalItems": {
      "$recursiveRef": "#"
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 5);

  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$recursiveAnchor", "/$recursiveAnchor",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems", "/additionalItems",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems/$recursiveRef",
      "/additionalItems/$recursiveRef",
      "https://json-schema.org/draft/2019-09/schema");

  // References

  EXPECT_EQ(references.size(), 2);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(references, "/additionalItems/$recursiveRef", "",
                          std::nullopt, std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_ref_recursive_anchor_false) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": false,
    "additionalItems": {
      "$recursiveRef": "#"
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 6);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame,
                                       "https://www.sourcemeta.com/schema",
                                       "https://www.sourcemeta.com/schema", "",
                                       "https://www.sourcemeta.com/schema", "");

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/$recursiveAnchor");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/additionalItems",
      "https://www.sourcemeta.com/schema", "/additionalItems",
      "https://www.sourcemeta.com/schema", "/additionalItems");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/additionalItems/$recursiveRef",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveRef",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveRef");

  // References

  EXPECT_EQ(references.size(), 2);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(references, "/additionalItems/$recursiveRef",
                          "https://www.sourcemeta.com/schema",
                          "https://www.sourcemeta.com/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_ref_recursive_anchor_true_anonymous) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": true,
    "additionalItems": {
      "$recursiveRef": "#"
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 6);

  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$recursiveAnchor", "/$recursiveAnchor",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems", "/additionalItems",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems/$recursiveRef",
      "/additionalItems/$recursiveRef",
      "https://json-schema.org/draft/2019-09/schema");

  // Anchors

  EXPECT_ANONYMOUS_FRAME_DYNAMIC_ANCHOR(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema");

  // References

  EXPECT_EQ(references.size(), 2);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_DYNAMIC_REFERENCE(references, "/additionalItems/$recursiveRef", "",
                           std::nullopt, std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_ref_recursive_anchor_true) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": true,
    "additionalItems": {
      "$recursiveRef": "#"
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 7);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame,
                                       "https://www.sourcemeta.com/schema",
                                       "https://www.sourcemeta.com/schema", "",
                                       "https://www.sourcemeta.com/schema", "");

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/$recursiveAnchor");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/additionalItems",
      "https://www.sourcemeta.com/schema", "/additionalItems",
      "https://www.sourcemeta.com/schema", "/additionalItems");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/additionalItems/$recursiveRef",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveRef",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveRef");

  // Anchors

  EXPECT_FRAME_DYNAMIC_2019_09_ANCHOR(frame,
                                      "https://www.sourcemeta.com/schema",
                                      "https://www.sourcemeta.com/schema", "",
                                      "https://www.sourcemeta.com/schema", "");

  // References

  EXPECT_EQ(references.size(), 2);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_DYNAMIC_REFERENCE(references, "/additionalItems/$recursiveRef",
                           "https://www.sourcemeta.com/schema",
                           "https://www.sourcemeta.com/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09,
     recursive_ref_recursive_anchor_false_anonymous_nested) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalItems": {
      "$id": "https://example.com",
      "$recursiveAnchor": false,
      "$recursiveRef": "#"
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 10);

  EXPECT_ANONYMOUS_FRAME_STATIC_RESOURCE(
      frame, "https://example.com", "/additionalItems",
      "https://json-schema.org/draft/2019-09/schema");

  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems", "/additionalItems",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems/$id", "/additionalItems/$id",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems/$recursiveAnchor",
      "/additionalItems/$recursiveAnchor",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems/$recursiveRef",
      "/additionalItems/$recursiveRef",
      "https://json-schema.org/draft/2019-09/schema");

  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "https://example.com#/$id", "/additionalItems/$id",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "https://example.com#/$recursiveAnchor",
      "/additionalItems/$recursiveAnchor",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "https://example.com#/$recursiveRef",
      "/additionalItems/$recursiveRef",
      "https://json-schema.org/draft/2019-09/schema");

  // References

  EXPECT_EQ(references.size(), 2);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(references, "/additionalItems/$recursiveRef",
                          "https://example.com", "https://example.com",
                          std::nullopt);
}

TEST(JSONSchema_frame_2019_09,
     recursive_ref_recursive_anchor_true_anonymous_nested) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalItems": {
      "$id": "https://example.com",
      "$recursiveAnchor": true,
      "$recursiveRef": "#"
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 11);

  EXPECT_ANONYMOUS_FRAME_STATIC_RESOURCE(
      frame, "https://example.com", "/additionalItems",
      "https://json-schema.org/draft/2019-09/schema");

  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems", "/additionalItems",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems/$id", "/additionalItems/$id",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems/$recursiveAnchor",
      "/additionalItems/$recursiveAnchor",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems/$recursiveRef",
      "/additionalItems/$recursiveRef",
      "https://json-schema.org/draft/2019-09/schema");

  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "https://example.com#/$id", "/additionalItems/$id",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "https://example.com#/$recursiveAnchor",
      "/additionalItems/$recursiveAnchor",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "https://example.com#/$recursiveRef",
      "/additionalItems/$recursiveRef",
      "https://json-schema.org/draft/2019-09/schema");

  // Anchors

  EXPECT_ANONYMOUS_FRAME_DYNAMIC_ANCHOR(
      frame, "https://example.com", "/additionalItems",
      "https://json-schema.org/draft/2019-09/schema");

  // References

  EXPECT_EQ(references.size(), 2);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_DYNAMIC_REFERENCE(references, "/additionalItems/$recursiveRef",
                           "https://example.com", "https://example.com",
                           std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_ref_nested_recursive_anchor_true) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalItems": {
      "$recursiveAnchor": true,
      "$recursiveRef": "#"
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 7);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame,
                                       "https://www.sourcemeta.com/schema",
                                       "https://www.sourcemeta.com/schema", "",
                                       "https://www.sourcemeta.com/schema", "");

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame,
      "https://www.sourcemeta.com/schema#/additionalItems/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveAnchor");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/additionalItems",
      "https://www.sourcemeta.com/schema", "/additionalItems",
      "https://www.sourcemeta.com/schema", "/additionalItems");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/additionalItems/$recursiveRef",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveRef",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveRef");

  // Anchors

  EXPECT_FRAME_DYNAMIC_2019_09_ANCHOR(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "/additionalItems",
      "https://www.sourcemeta.com/schema", "/additionalItems");

  // References

  EXPECT_EQ(references.size(), 2);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_DYNAMIC_REFERENCE(references, "/additionalItems/$recursiveRef",
                           "https://www.sourcemeta.com/schema",
                           "https://www.sourcemeta.com/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_ref_multiple_recursive_anchor_true) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": true,
    "additionalItems": {
      "$id": "nested",
      "$recursiveAnchor": true,
      "$recursiveRef": "#"
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 14);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame,
                                       "https://www.sourcemeta.com/schema",
                                       "https://www.sourcemeta.com/schema", "",
                                       "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/nested",
      "https://www.sourcemeta.com/schema", "/additionalItems",
      "https://www.sourcemeta.com/nested", "");

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/$recursiveAnchor");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/additionalItems",
      "https://www.sourcemeta.com/schema", "/additionalItems",
      "https://www.sourcemeta.com/nested", "");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/additionalItems/$id",
      "https://www.sourcemeta.com/schema", "/additionalItems/$id",
      "https://www.sourcemeta.com/nested", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame,
      "https://www.sourcemeta.com/schema#/additionalItems/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveAnchor",
      "https://www.sourcemeta.com/nested", "/$recursiveAnchor");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/additionalItems/$recursiveRef",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveRef",
      "https://www.sourcemeta.com/nested", "/$recursiveRef");

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/nested#/$id",
      "https://www.sourcemeta.com/schema", "/additionalItems/$id",
      "https://www.sourcemeta.com/nested", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/nested#/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveAnchor",
      "https://www.sourcemeta.com/nested", "/$recursiveAnchor");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/nested#/$recursiveRef",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveRef",
      "https://www.sourcemeta.com/nested", "/$recursiveRef");

  // Anchors

  EXPECT_FRAME_DYNAMIC_2019_09_ANCHOR(frame,
                                      "https://www.sourcemeta.com/schema",
                                      "https://www.sourcemeta.com/schema", "",
                                      "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_DYNAMIC_2019_09_ANCHOR(
      frame, "https://www.sourcemeta.com/nested",
      "https://www.sourcemeta.com/schema", "/additionalItems",
      "https://www.sourcemeta.com/nested", "");

  // References

  EXPECT_EQ(references.size(), 2);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_DYNAMIC_REFERENCE(references, "/additionalItems/$recursiveRef",
                           "https://www.sourcemeta.com/nested",
                           "https://www.sourcemeta.com/nested", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_anchor_conflict) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": true,
    "items": {
      "$recursiveAnchor": true
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  EXPECT_THROW(sourcemeta::jsontoolkit::frame(
                   document, frame, references,
                   sourcemeta::jsontoolkit::default_schema_walker,
                   sourcemeta::jsontoolkit::official_resolver),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(JSONSchema_frame_2019_09, invalid_recursive_ref) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveRef": "nested#"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  EXPECT_THROW(sourcemeta::jsontoolkit::frame(
                   document, frame, references,
                   sourcemeta::jsontoolkit::default_schema_walker,
                   sourcemeta::jsontoolkit::official_resolver),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(JSONSchema_frame_2019_09, recursive_anchor_on_relative_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": true,
    "additionalItems": {
      "$id": "middle",
      "$recursiveAnchor": true
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 11);

  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_RESOURCE(
      frame, "middle", "/additionalItems",
      "https://json-schema.org/draft/2019-09/schema");

  // JSON Pointers

  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$recursiveAnchor", "/$recursiveAnchor",
      "https://json-schema.org/draft/2019-09/schema");

  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems", "/additionalItems",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems/$id", "/additionalItems/$id",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems/$recursiveAnchor",
      "/additionalItems/$recursiveAnchor",
      "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "middle#/$recursiveAnchor", "/additionalItems/$recursiveAnchor",
      "https://json-schema.org/draft/2019-09/schema");

  // Anchors

  EXPECT_ANONYMOUS_FRAME_DYNAMIC_ANCHOR(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema");
  EXPECT_ANONYMOUS_FRAME_DYNAMIC_ANCHOR(
      frame, "middle", "/additionalItems",
      "https://json-schema.org/draft/2019-09/schema");

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, ref_with_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$ref": "#/$defs/string",
    "$defs": {
      "string": { "type": "string" }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 7);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame,
                                       "https://www.sourcemeta.com/schema",
                                       "https://www.sourcemeta.com/schema", "",
                                       "https://www.sourcemeta.com/schema", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$ref",
      "https://www.sourcemeta.com/schema", "/$ref",
      "https://www.sourcemeta.com/schema", "/$ref");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$defs",
      "https://www.sourcemeta.com/schema", "/$defs",
      "https://www.sourcemeta.com/schema", "/$defs");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$defs/string",
      "https://www.sourcemeta.com/schema", "/$defs/string",
      "https://www.sourcemeta.com/schema", "/$defs/string");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$defs/string/type",
      "https://www.sourcemeta.com/schema", "/$defs/string/type",
      "https://www.sourcemeta.com/schema", "/$defs/string/type");

  // References

  EXPECT_EQ(references.size(), 2);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(references, "/$ref",
                          "https://www.sourcemeta.com/schema#/$defs/string",
                          "https://www.sourcemeta.com/schema", "/$defs/string");
}

TEST(JSONSchema_frame_2019_09, ref_from_definitions) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$ref": "#/definitions/middle",
    "definitions": {
      "middle": { "$ref": "#/definitions/string" },
      "string": { "type": "string" }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver);

  EXPECT_EQ(frame.size(), 9);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame,
                                       "https://www.sourcemeta.com/schema",
                                       "https://www.sourcemeta.com/schema", "",
                                       "https://www.sourcemeta.com/schema", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$ref",
      "https://www.sourcemeta.com/schema", "/$ref",
      "https://www.sourcemeta.com/schema", "/$ref");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/definitions",
      "https://www.sourcemeta.com/schema", "/definitions",
      "https://www.sourcemeta.com/schema", "/definitions");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/definitions/middle",
      "https://www.sourcemeta.com/schema", "/definitions/middle",
      "https://www.sourcemeta.com/schema", "/definitions/middle");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/definitions/middle/$ref",
      "https://www.sourcemeta.com/schema", "/definitions/middle/$ref",
      "https://www.sourcemeta.com/schema", "/definitions/middle/$ref");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/definitions/string",
      "https://www.sourcemeta.com/schema", "/definitions/string",
      "https://www.sourcemeta.com/schema", "/definitions/string");
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/definitions/string/type",
      "https://www.sourcemeta.com/schema", "/definitions/string/type",
      "https://www.sourcemeta.com/schema", "/definitions/string/type");

  // References

  EXPECT_EQ(references.size(), 3);

  EXPECT_STATIC_REFERENCE(
      references, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(
      references, "/$ref",
      "https://www.sourcemeta.com/schema#/definitions/middle",
      "https://www.sourcemeta.com/schema", "/definitions/middle");
  EXPECT_STATIC_REFERENCE(
      references, "/definitions/middle/$ref",
      "https://www.sourcemeta.com/schema#/definitions/string",
      "https://www.sourcemeta.com/schema", "/definitions/string");
}
