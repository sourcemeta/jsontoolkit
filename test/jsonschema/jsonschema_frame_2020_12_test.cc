#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include "jsonschema_test_utils.h"

#define EXPECT_FRAME_STATIC_2020_12(frame, reference, root_id,                 \
                                    expected_pointer, expected_base,           \
                                    expected_relative_pointer)                 \
  EXPECT_FRAME_STATIC(frame, reference, root_id, expected_pointer,             \
                      "https://json-schema.org/draft/2020-12/schema",          \
                      expected_base, expected_relative_pointer);

#define EXPECT_FRAME_DYNAMIC_2020_12(frame, reference, root_id,                \
                                     expected_pointer, expected_base,          \
                                     expected_relative_pointer)                \
  EXPECT_FRAME_DYNAMIC(frame, reference, root_id, expected_pointer,            \
                       "https://json-schema.org/draft/2020-12/schema",         \
                       expected_base, expected_relative_pointer);

TEST(JSONSchema_frame_2020_12, empty_schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(frame.size(), 3);
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/schema",
                              "https://www.sourcemeta.com/schema", "",
                              "https://www.sourcemeta.com/schema", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/schema#/$id",
                              "https://www.sourcemeta.com/schema", "/$id",
                              "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_2020_12(frame,
                              "https://www.sourcemeta.com/schema#/$schema",
                              "https://www.sourcemeta.com/schema", "/$schema",
                              "https://www.sourcemeta.com/schema", "/$schema");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame_2020_12, one_level_applicators_without_identifiers) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "items": { "type": "string" },
    "properties": {
      "foo": { "type": "number" }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(frame.size(), 8);
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/schema",
                              "https://www.sourcemeta.com/schema", "",
                              "https://www.sourcemeta.com/schema", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/schema#/$id",
                              "https://www.sourcemeta.com/schema", "/$id",
                              "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_2020_12(frame,
                              "https://www.sourcemeta.com/schema#/$schema",
                              "https://www.sourcemeta.com/schema", "/$schema",
                              "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/schema#/items",
                              "https://www.sourcemeta.com/schema", "/items",
                              "https://www.sourcemeta.com/schema", "/items");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/items/type",
      "https://www.sourcemeta.com/schema", "/items/type",
      "https://www.sourcemeta.com/schema", "/items/type");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties",
      "https://www.sourcemeta.com/schema", "/properties",
      "https://www.sourcemeta.com/schema", "/properties");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/foo",
      "https://www.sourcemeta.com/schema", "/properties/foo",
      "https://www.sourcemeta.com/schema", "/properties/foo");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/foo/type",
      "https://www.sourcemeta.com/schema", "/properties/foo/type",
      "https://www.sourcemeta.com/schema", "/properties/foo/type");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame_2020_12, one_level_applicators_with_identifiers) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/test/qux",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "items": { "$id": "../foo", "type": "string" },
    "properties": {
      "foo": { "$anchor": "test", "type": "number" }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(frame.size(), 14);
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/test/qux",
                              "https://www.sourcemeta.com/test/qux", "",
                              "https://www.sourcemeta.com/test/qux", "");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/foo",
                              "https://www.sourcemeta.com/test/qux", "/items",
                              "https://www.sourcemeta.com/foo", "");

  // Anchors

  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/test/qux#test",
      "https://www.sourcemeta.com/test/qux", "/properties/foo",
      "https://www.sourcemeta.com/test/qux", "/properties/foo");

  // JSON Pointers

  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/test/qux#/$id",
                              "https://www.sourcemeta.com/test/qux", "/$id",
                              "https://www.sourcemeta.com/test/qux", "/$id");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/test/qux#/$schema",
      "https://www.sourcemeta.com/test/qux", "/$schema",
      "https://www.sourcemeta.com/test/qux", "/$schema");
  EXPECT_FRAME_STATIC_2020_12(frame,
                              "https://www.sourcemeta.com/test/qux#/items",
                              "https://www.sourcemeta.com/test/qux", "/items",
                              "https://www.sourcemeta.com/foo", "");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/test/qux#/items/$id",
      "https://www.sourcemeta.com/test/qux", "/items/$id",
      "https://www.sourcemeta.com/foo", "/$id");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/test/qux#/items/type",
      "https://www.sourcemeta.com/test/qux", "/items/type",
      "https://www.sourcemeta.com/foo", "/type");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/test/qux#/properties",
      "https://www.sourcemeta.com/test/qux", "/properties",
      "https://www.sourcemeta.com/test/qux", "/properties");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/test/qux#/properties/foo",
      "https://www.sourcemeta.com/test/qux", "/properties/foo",
      "https://www.sourcemeta.com/test/qux", "/properties/foo");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/test/qux#/properties/foo/$anchor",
      "https://www.sourcemeta.com/test/qux", "/properties/foo/$anchor",
      "https://www.sourcemeta.com/test/qux", "/properties/foo/$anchor");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/test/qux#/properties/foo/type",
      "https://www.sourcemeta.com/test/qux", "/properties/foo/type",
      "https://www.sourcemeta.com/test/qux", "/properties/foo/type");

  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/foo#/$id",
                              "https://www.sourcemeta.com/test/qux",
                              "/items/$id", "https://www.sourcemeta.com/foo",
                              "/$id");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/foo#/type",
                              "https://www.sourcemeta.com/test/qux",
                              "/items/type", "https://www.sourcemeta.com/foo",
                              "/type");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame_2020_12, subschema_absolute_identifier) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "items": {
      "$id": "https://www.sourcemeta.com/foo",
      "type": "string"
     }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(frame.size(), 9);
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/schema",
                              "https://www.sourcemeta.com/schema", "",
                              "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/foo",
                              "https://www.sourcemeta.com/schema", "/items",
                              "https://www.sourcemeta.com/foo", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/schema#/$id",
                              "https://www.sourcemeta.com/schema", "/$id",
                              "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_2020_12(frame,
                              "https://www.sourcemeta.com/schema#/$schema",
                              "https://www.sourcemeta.com/schema", "/$schema",
                              "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/schema#/items",
                              "https://www.sourcemeta.com/schema", "/items",
                              "https://www.sourcemeta.com/foo", "");
  EXPECT_FRAME_STATIC_2020_12(frame,
                              "https://www.sourcemeta.com/schema#/items/$id",
                              "https://www.sourcemeta.com/schema", "/items/$id",
                              "https://www.sourcemeta.com/foo", "/$id");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/items/type",
      "https://www.sourcemeta.com/schema", "/items/type",
      "https://www.sourcemeta.com/foo", "/type");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame_2020_12, nested_schemas) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
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
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(frame.size(), 30);

  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/schema",
                              "https://www.sourcemeta.com/schema", "",
                              "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/foo",
                              "https://www.sourcemeta.com/schema",
                              "/properties/foo",
                              "https://www.sourcemeta.com/foo", "");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/foo#test",
                              "https://www.sourcemeta.com/schema",
                              "/properties/foo",
                              "https://www.sourcemeta.com/foo", "");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/bar",
                              "https://www.sourcemeta.com/schema",
                              "/properties/bar",
                              "https://www.sourcemeta.com/bar", "");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/baz",
                              "https://www.sourcemeta.com/schema",
                              "/properties/baz",
                              "https://www.sourcemeta.com/baz", "");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/baz#extra",
                              "https://www.sourcemeta.com/schema",
                              "/properties/baz/items",
                              "https://www.sourcemeta.com/baz", "/items");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/qux",
                              "https://www.sourcemeta.com/schema",
                              "/properties/foo/items",
                              "https://www.sourcemeta.com/qux", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/schema#/$id",
                              "https://www.sourcemeta.com/schema", "/$id",
                              "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_2020_12(frame,
                              "https://www.sourcemeta.com/schema#/$schema",
                              "https://www.sourcemeta.com/schema", "/$schema",
                              "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties",
      "https://www.sourcemeta.com/schema", "/properties",
      "https://www.sourcemeta.com/schema", "/properties");

  // foo
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/foo",
      "https://www.sourcemeta.com/schema", "/properties/foo",
      "https://www.sourcemeta.com/foo", "");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/foo/$id",
      "https://www.sourcemeta.com/schema", "/properties/foo/$id",
      "https://www.sourcemeta.com/foo", "/$id");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/foo/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/foo/$anchor",
      "https://www.sourcemeta.com/foo", "/$anchor");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/foo/items",
      "https://www.sourcemeta.com/schema", "/properties/foo/items",
      "https://www.sourcemeta.com/qux", "");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/foo/items/$id",
      "https://www.sourcemeta.com/schema", "/properties/foo/items/$id",
      "https://www.sourcemeta.com/qux", "/$id");

  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/foo#/$id",
                              "https://www.sourcemeta.com/schema",
                              "/properties/foo/$id",
                              "https://www.sourcemeta.com/foo", "/$id");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/foo#/$anchor",
                              "https://www.sourcemeta.com/schema",
                              "/properties/foo/$anchor",
                              "https://www.sourcemeta.com/foo", "/$anchor");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/foo#/items",
                              "https://www.sourcemeta.com/schema",
                              "/properties/foo/items",
                              "https://www.sourcemeta.com/qux", "");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/foo#/items/$id",
      "https://www.sourcemeta.com/schema", "/properties/foo/items/$id",
      "https://www.sourcemeta.com/qux", "/$id");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/qux#/$id",
                              "https://www.sourcemeta.com/schema",
                              "/properties/foo/items/$id",
                              "https://www.sourcemeta.com/qux", "/$id");

  // bar
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/bar",
      "https://www.sourcemeta.com/schema", "/properties/bar",
      "https://www.sourcemeta.com/bar", "");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/bar/$id",
      "https://www.sourcemeta.com/schema", "/properties/bar/$id",
      "https://www.sourcemeta.com/bar", "/$id");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/bar#/$id",
                              "https://www.sourcemeta.com/schema",
                              "/properties/bar/$id",
                              "https://www.sourcemeta.com/bar", "/$id");

  // baz
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/baz",
      "https://www.sourcemeta.com/schema", "/properties/baz",
      "https://www.sourcemeta.com/baz", "");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/baz/$id",
      "https://www.sourcemeta.com/schema", "/properties/baz/$id",
      "https://www.sourcemeta.com/baz", "/$id");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/baz/items",
      "https://www.sourcemeta.com/schema", "/properties/baz/items",
      "https://www.sourcemeta.com/baz", "/items");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/baz/items/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/baz/items/$anchor",
      "https://www.sourcemeta.com/baz", "/items/$anchor");

  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/baz#/$id",
                              "https://www.sourcemeta.com/schema",
                              "/properties/baz/$id",
                              "https://www.sourcemeta.com/baz", "/$id");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/baz#/items",
                              "https://www.sourcemeta.com/schema",
                              "/properties/baz/items",
                              "https://www.sourcemeta.com/baz", "/items");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/baz#/items/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/baz/items/$anchor",
      "https://www.sourcemeta.com/baz", "/items/$anchor");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame_2020_12, id_override) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "items": { "$id": "schema" }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  EXPECT_THROW(sourcemeta::jsontoolkit::frame(
                   document, frame, references,
                   sourcemeta::jsontoolkit::default_schema_walker,
                   sourcemeta::jsontoolkit::official_resolver)
                   .wait(),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(JSONSchema_frame_2020_12, static_anchor_override) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$anchor": "foo",
    "items": { "$anchor": "foo" }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  EXPECT_THROW(sourcemeta::jsontoolkit::frame(
                   document, frame, references,
                   sourcemeta::jsontoolkit::default_schema_walker,
                   sourcemeta::jsontoolkit::official_resolver)
                   .wait(),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(JSONSchema_frame_2020_12, explicit_argument_id_same) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver,
                                 "https://json-schema.org/draft/2020-12/schema",
                                 "https://www.sourcemeta.com/schema")
      .wait();

  EXPECT_EQ(frame.size(), 3);
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/schema",
                              "https://www.sourcemeta.com/schema", "",
                              "https://www.sourcemeta.com/schema", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/schema#/$id",
                              "https://www.sourcemeta.com/schema", "/$id",
                              "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_2020_12(frame,
                              "https://www.sourcemeta.com/schema#/$schema",
                              "https://www.sourcemeta.com/schema", "/$schema",
                              "https://www.sourcemeta.com/schema", "/$schema");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame_2020_12, anchor_top_level) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$anchor": "foo"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(frame.size(), 5);

  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/schema",
                              "https://www.sourcemeta.com/schema", "",
                              "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/schema#/$id",
                              "https://www.sourcemeta.com/schema", "/$id",
                              "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_2020_12(frame,
                              "https://www.sourcemeta.com/schema#/$schema",
                              "https://www.sourcemeta.com/schema", "/$schema",
                              "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_2020_12(frame,
                              "https://www.sourcemeta.com/schema#/$anchor",
                              "https://www.sourcemeta.com/schema", "/$anchor",
                              "https://www.sourcemeta.com/schema", "/$anchor");

  // Anchors

  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/schema#foo",
                              "https://www.sourcemeta.com/schema", "",
                              "https://www.sourcemeta.com/schema", "");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame_2020_12, explicit_argument_id_different) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
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
                                 "https://json-schema.org/draft/2020-12/schema",
                                 "https://www.example.com")
      .wait();

  EXPECT_EQ(frame.size(), 38);

  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/schema",
                              "https://www.sourcemeta.com/schema", "",
                              "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/test",
                              "https://www.sourcemeta.com/schema",
                              "/properties/one",
                              "https://www.sourcemeta.com/test", "");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.example.com",
                              "https://www.sourcemeta.com/schema", "",
                              "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.example.com/test",
                              "https://www.sourcemeta.com/schema",
                              "/properties/one", "https://www.example.com/test",
                              "");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.test.com",
                              "https://www.sourcemeta.com/schema",
                              "/properties/two", "https://www.test.com", "");

  // Anchors

  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/schema#foo",
                              "https://www.sourcemeta.com/schema", "/items",
                              "https://www.sourcemeta.com/schema", "/items");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.example.com#foo",
                              "https://www.sourcemeta.com/schema", "/items",
                              "https://www.example.com", "/items");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/test#bar",
                              "https://www.sourcemeta.com/schema",
                              "/properties/one",
                              "https://www.sourcemeta.com/test", "");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.example.com/test#bar",
                              "https://www.sourcemeta.com/schema",
                              "/properties/one", "https://www.example.com/test",
                              "");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.test.com#baz",
                              "https://www.sourcemeta.com/schema",
                              "/properties/two", "https://www.test.com", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/schema#/$id",
                              "https://www.sourcemeta.com/schema", "/$id",
                              "https://www.example.com", "/$id");
  EXPECT_FRAME_STATIC_2020_12(frame,
                              "https://www.sourcemeta.com/schema#/$schema",
                              "https://www.sourcemeta.com/schema", "/$schema",
                              "https://www.example.com", "/$schema");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/schema#/items",
                              "https://www.sourcemeta.com/schema", "/items",
                              "https://www.example.com", "/items");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/items/$anchor",
      "https://www.sourcemeta.com/schema", "/items/$anchor",
      "https://www.example.com", "/items/$anchor");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties",
      "https://www.sourcemeta.com/schema", "/properties",
      "https://www.example.com", "/properties");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/one",
      "https://www.sourcemeta.com/schema", "/properties/one",
      "https://www.example.com/test", "");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/one/$id",
      "https://www.sourcemeta.com/schema", "/properties/one/$id",
      "https://www.example.com/test", "/$id");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/one/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/one/$anchor",
      "https://www.example.com/test", "/$anchor");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/two",
      "https://www.sourcemeta.com/schema", "/properties/two",
      "https://www.test.com", "");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/two/$id",
      "https://www.sourcemeta.com/schema", "/properties/two/$id",
      "https://www.test.com", "/$id");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/two/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/two/$anchor",
      "https://www.test.com", "/$anchor");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/test#/$id",
                              "https://www.sourcemeta.com/schema",
                              "/properties/one/$id",
                              "https://www.example.com/test", "/$id");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/test#/$anchor",
                              "https://www.sourcemeta.com/schema",
                              "/properties/one/$anchor",
                              "https://www.example.com/test", "/$anchor");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.test.com#/$id", "https://www.sourcemeta.com/schema",
      "/properties/two/$id", "https://www.test.com", "/$id");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.test.com#/$anchor",
                              "https://www.sourcemeta.com/schema",
                              "/properties/two/$anchor", "https://www.test.com",
                              "/$anchor");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame_2020_12, dynamic_refs_with_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "$dynamicRef": "#" },
      "bar": { "$dynamicRef": "#/properties/baz" },
      "baz": {
        "$anchor": "baz",
        "type": "string"
      },
      "qux": {
        "$id": "test",
        "$dynamicRef": "#"
      },
      "anchor": {
        "$dynamicRef": "#baz"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(references.size(), 4);
  EXPECT_DYNAMIC_REFERENCE(references, "/properties/foo/$dynamicRef",
                           "https://www.sourcemeta.com/schema#",
                           "https://www.sourcemeta.com/schema", "");
  EXPECT_DYNAMIC_REFERENCE(references, "/properties/bar/$dynamicRef",
                           "https://www.sourcemeta.com/schema#/properties/baz",
                           "https://www.sourcemeta.com/schema",
                           "/properties/baz");
  EXPECT_DYNAMIC_REFERENCE(references, "/properties/qux/$dynamicRef",
                           "https://www.sourcemeta.com/test#",
                           "https://www.sourcemeta.com/test", "");
  EXPECT_DYNAMIC_REFERENCE(references, "/properties/anchor/$dynamicRef",
                           "https://www.sourcemeta.com/schema#baz",
                           "https://www.sourcemeta.com/schema", "baz");
}

TEST(JSONSchema_frame_2020_12, dynamic_refs_with_no_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "$dynamicRef": "#" },
      "bar": { "$dynamicRef": "#/properties/baz" },
      "baz": {
        "$anchor": "baz",
        "type": "string"
      },
      "qux": {
        "$id": "https://www.example.com",
        "$dynamicRef": "#"
      },
      "anchor": {
        "$dynamicRef": "#baz"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(references.size(), 4);
  EXPECT_DYNAMIC_REFERENCE(references, "/properties/foo/$dynamicRef", "#",
                           std::nullopt, "");
  EXPECT_DYNAMIC_REFERENCE(references, "/properties/bar/$dynamicRef",
                           "#/properties/baz", std::nullopt, "/properties/baz");
  EXPECT_DYNAMIC_REFERENCE(references, "/properties/qux/$dynamicRef",
                           "https://www.example.com#",
                           "https://www.example.com", "");
  EXPECT_DYNAMIC_REFERENCE(references, "/properties/anchor/$dynamicRef", "#baz",
                           std::nullopt, "baz");
}

TEST(JSONSchema_frame_2020_12, different_dynamic_and_refs_in_same_object) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": {
        "$ref": "#/properties/bar",
        "$dynamicRef": "#"
      },
      "bar": {
        "type": "string"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(references.size(), 2);
  EXPECT_STATIC_REFERENCE(references, "/properties/foo/$ref",
                          "https://www.sourcemeta.com/schema#/properties/bar",
                          "https://www.sourcemeta.com/schema",
                          "/properties/bar");
  EXPECT_DYNAMIC_REFERENCE(references, "/properties/foo/$dynamicRef",
                           "https://www.sourcemeta.com/schema#",
                           "https://www.sourcemeta.com/schema", "");
}

TEST(JSONSchema_frame_2020_12, same_dynamic_and_refs_in_same_object) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": {
        "$ref": "#/properties/bar",
        "$dynamicRef": "#/properties/bar"
      },
      "bar": {
        "type": "string"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(references.size(), 2);
  EXPECT_STATIC_REFERENCE(references, "/properties/foo/$ref",
                          "https://www.sourcemeta.com/schema#/properties/bar",
                          "https://www.sourcemeta.com/schema",
                          "/properties/bar");
  EXPECT_DYNAMIC_REFERENCE(references, "/properties/foo/$dynamicRef",
                           "https://www.sourcemeta.com/schema#/properties/bar",
                           "https://www.sourcemeta.com/schema",
                           "/properties/bar");
}

TEST(JSONSchema_frame_2020_12, dynamic_anchor_with_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$dynamicAnchor": "foo",
    "properties": {
      "foo": {
        "$dynamicAnchor": "test"
      },
      "bar": {
        "$id": "bar",
        "$dynamicAnchor": "test",
        "$anchor": "test"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(frame.size(), 19);

  // Dynamic anchors

  EXPECT_FRAME_DYNAMIC_2020_12(frame, "https://www.sourcemeta.com/schema#foo",
                               "https://www.sourcemeta.com/schema", "",
                               "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_DYNAMIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#test",
      "https://www.sourcemeta.com/schema", "/properties/foo",
      "https://www.sourcemeta.com/schema", "/properties/foo");
  EXPECT_FRAME_DYNAMIC_2020_12(frame, "https://www.sourcemeta.com/bar#test",
                               "https://www.sourcemeta.com/schema",
                               "/properties/bar",
                               "https://www.sourcemeta.com/bar", "");

  // Static anchors

  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/bar#test",
                              "https://www.sourcemeta.com/schema",
                              "/properties/bar",
                              "https://www.sourcemeta.com/bar", "");

  // Static identifiers

  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/schema",
                              "https://www.sourcemeta.com/schema", "",
                              "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/bar",
                              "https://www.sourcemeta.com/schema",
                              "/properties/bar",
                              "https://www.sourcemeta.com/bar", "");

  // Static pointers

  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/schema#/$id",
                              "https://www.sourcemeta.com/schema", "/$id",
                              "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_2020_12(frame,
                              "https://www.sourcemeta.com/schema#/$schema",
                              "https://www.sourcemeta.com/schema", "/$schema",
                              "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/$dynamicAnchor",
      "https://www.sourcemeta.com/schema", "/$dynamicAnchor",
      "https://www.sourcemeta.com/schema", "/$dynamicAnchor");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties",
      "https://www.sourcemeta.com/schema", "/properties",
      "https://www.sourcemeta.com/schema", "/properties");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/foo",
      "https://www.sourcemeta.com/schema", "/properties/foo",
      "https://www.sourcemeta.com/schema", "/properties/foo");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/foo/$dynamicAnchor",
      "https://www.sourcemeta.com/schema", "/properties/foo/$dynamicAnchor",
      "https://www.sourcemeta.com/schema", "/properties/foo/$dynamicAnchor");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/bar",
      "https://www.sourcemeta.com/schema", "/properties/bar",
      "https://www.sourcemeta.com/bar", "");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/bar/$id",
      "https://www.sourcemeta.com/schema", "/properties/bar/$id",
      "https://www.sourcemeta.com/bar", "/$id");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/bar/$dynamicAnchor",
      "https://www.sourcemeta.com/schema", "/properties/bar/$dynamicAnchor",
      "https://www.sourcemeta.com/bar", "/$dynamicAnchor");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/schema#/properties/bar/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/bar/$anchor",
      "https://www.sourcemeta.com/bar", "/$anchor");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/bar#/$id",
                              "https://www.sourcemeta.com/schema",
                              "/properties/bar/$id",
                              "https://www.sourcemeta.com/bar", "/$id");
  EXPECT_FRAME_STATIC_2020_12(
      frame, "https://www.sourcemeta.com/bar#/$dynamicAnchor",
      "https://www.sourcemeta.com/schema", "/properties/bar/$dynamicAnchor",
      "https://www.sourcemeta.com/bar", "/$dynamicAnchor");
  EXPECT_FRAME_STATIC_2020_12(frame, "https://www.sourcemeta.com/bar#/$anchor",
                              "https://www.sourcemeta.com/schema",
                              "/properties/bar/$anchor",
                              "https://www.sourcemeta.com/bar", "/$anchor");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame_2020_12, dynamic_anchor_without_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": {
        "$dynamicAnchor": "test"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(frame.size(), 6);

  // Dynamic anchors

  EXPECT_ANONYMOUS_FRAME_DYNAMIC(
      frame, "#test", "/properties/foo",
      "https://json-schema.org/draft/2020-12/schema");

  // Static frames

  EXPECT_ANONYMOUS_FRAME_STATIC(frame, "", "",
                                "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC(frame, "#/$schema", "/$schema",
                                "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC(frame, "#/properties", "/properties",
                                "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC(frame, "#/properties/foo", "/properties/foo",
                                "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC(frame, "#/properties/foo/$dynamicAnchor",
                                "/properties/foo/$dynamicAnchor",
                                "https://json-schema.org/draft/2020-12/schema");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame_2020_12, dynamic_anchor_same_on_schema_resource) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$dynamicAnchor": "foo",
    "items": {
      "$dynamicAnchor": "foo"
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  EXPECT_THROW(sourcemeta::jsontoolkit::frame(
                   document, frame, references,
                   sourcemeta::jsontoolkit::default_schema_walker,
                   sourcemeta::jsontoolkit::official_resolver)
                   .wait(),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(JSONSchema_frame_2020_12, no_id_recursive_empty_pointer) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": {
        "$ref": "#"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(frame.size(), 5);

  EXPECT_ANONYMOUS_FRAME_STATIC(frame, "", "",
                                "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC(frame, "#/$schema", "/$schema",
                                "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC(frame, "#/properties", "/properties",
                                "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC(frame, "#/properties/foo", "/properties/foo",
                                "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC(frame, "#/properties/foo/$ref",
                                "/properties/foo/$ref",
                                "https://json-schema.org/draft/2020-12/schema");

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(references, "/properties/foo/$ref", "#", std::nullopt,
                          "");
}

TEST(JSONSchema_frame_2020_12, ref_metaschema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$ref": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(frame.size(), 3);

  EXPECT_ANONYMOUS_FRAME_STATIC(frame, "", "",
                                "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC(frame, "#/$schema", "/$schema",
                                "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME_STATIC(frame, "#/$ref", "/$ref",
                                "https://json-schema.org/draft/2020-12/schema");

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(
      references, "/$ref", "https://json-schema.org/draft/2020-12/schema",
      "https://json-schema.org/draft/2020-12/schema", std::nullopt);
}
