#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include "jsonschema_test_utils.h"

#define EXPECT_FRAME_2020_12(frame, reference, root_id, expected_pointer)      \
  EXPECT_FRAME(frame, reference, root_id, expected_pointer,                    \
               "https://json-schema.org/draft/2020-12/schema");

TEST(JSONSchema_frame_2020_12, empty_schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::ReferenceFrame dynamic_frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, static_frame, dynamic_frame,
                                 references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 6);
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema",
                       "https://www.sourcemeta.com/schema", "");

  // JSON Pointers

  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema#/$id",
                       "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/$schema",
                       "https://www.sourcemeta.com/schema", "/$schema");

  EXPECT_FRAME_2020_12(static_frame, "", "https://www.sourcemeta.com/schema",
                       "");
  EXPECT_FRAME_2020_12(static_frame, "#/$id",
                       "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_2020_12(static_frame, "#/$schema",
                       "https://www.sourcemeta.com/schema", "/$schema");

  // References

  EXPECT_TRUE(references.empty());

  // Dynamic frame

  EXPECT_TRUE(dynamic_frame.empty());
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

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::ReferenceFrame dynamic_frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, static_frame, dynamic_frame,
                                 references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 16);
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema",
                       "https://www.sourcemeta.com/schema", "");

  // JSON Pointers

  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema#/$id",
                       "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/$schema",
                       "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema#/items",
                       "https://www.sourcemeta.com/schema", "/items");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/items/type",
                       "https://www.sourcemeta.com/schema", "/items/type");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/properties",
                       "https://www.sourcemeta.com/schema", "/properties");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/properties/foo",
                       "https://www.sourcemeta.com/schema", "/properties/foo");
  EXPECT_FRAME_2020_12(
      static_frame, "https://www.sourcemeta.com/schema#/properties/foo/type",
      "https://www.sourcemeta.com/schema", "/properties/foo/type");

  EXPECT_FRAME_2020_12(static_frame, "", "https://www.sourcemeta.com/schema",
                       "");
  EXPECT_FRAME_2020_12(static_frame, "#/$id",
                       "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_2020_12(static_frame, "#/$schema",
                       "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_2020_12(static_frame, "#/items",
                       "https://www.sourcemeta.com/schema", "/items");
  EXPECT_FRAME_2020_12(static_frame, "#/items/type",
                       "https://www.sourcemeta.com/schema", "/items/type");
  EXPECT_FRAME_2020_12(static_frame, "#/properties",
                       "https://www.sourcemeta.com/schema", "/properties");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/foo",
                       "https://www.sourcemeta.com/schema", "/properties/foo");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/foo/type",
                       "https://www.sourcemeta.com/schema",
                       "/properties/foo/type");

  // References

  EXPECT_TRUE(references.empty());

  // Dynamic frame

  EXPECT_TRUE(dynamic_frame.empty());
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

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::ReferenceFrame dynamic_frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, static_frame, dynamic_frame,
                                 references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 25);
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/test/qux",
                       "https://www.sourcemeta.com/test/qux", "");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/foo",
                       "https://www.sourcemeta.com/test/qux", "/items");

  // Anchors

  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/test/qux#test",
                       "https://www.sourcemeta.com/test/qux",
                       "/properties/foo");
  EXPECT_FRAME_2020_12(static_frame, "#test",
                       "https://www.sourcemeta.com/test/qux",
                       "/properties/foo");

  // JSON Pointers

  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/test/qux#/$id",
                       "https://www.sourcemeta.com/test/qux", "/$id");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/test/qux#/$schema",
                       "https://www.sourcemeta.com/test/qux", "/$schema");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/test/qux#/items",
                       "https://www.sourcemeta.com/test/qux", "/items");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/test/qux#/items/$id",
                       "https://www.sourcemeta.com/test/qux", "/items/$id");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/test/qux#/items/type",
                       "https://www.sourcemeta.com/test/qux", "/items/type");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/test/qux#/properties",
                       "https://www.sourcemeta.com/test/qux", "/properties");
  EXPECT_FRAME_2020_12(
      static_frame, "https://www.sourcemeta.com/test/qux#/properties/foo",
      "https://www.sourcemeta.com/test/qux", "/properties/foo");
  EXPECT_FRAME_2020_12(
      static_frame,
      "https://www.sourcemeta.com/test/qux#/properties/foo/$anchor",
      "https://www.sourcemeta.com/test/qux", "/properties/foo/$anchor");
  EXPECT_FRAME_2020_12(
      static_frame, "https://www.sourcemeta.com/test/qux#/properties/foo/type",
      "https://www.sourcemeta.com/test/qux", "/properties/foo/type");

  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/foo#/$id",
                       "https://www.sourcemeta.com/test/qux", "/items/$id");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/foo#/type",
                       "https://www.sourcemeta.com/test/qux", "/items/type");

  EXPECT_FRAME_2020_12(static_frame, "", "https://www.sourcemeta.com/test/qux",
                       "");
  EXPECT_FRAME_2020_12(static_frame, "#/$id",
                       "https://www.sourcemeta.com/test/qux", "/$id");
  EXPECT_FRAME_2020_12(static_frame, "#/$schema",
                       "https://www.sourcemeta.com/test/qux", "/$schema");
  EXPECT_FRAME_2020_12(static_frame, "#/items",
                       "https://www.sourcemeta.com/test/qux", "/items");
  EXPECT_FRAME_2020_12(static_frame, "#/items/$id",
                       "https://www.sourcemeta.com/test/qux", "/items/$id");
  EXPECT_FRAME_2020_12(static_frame, "#/items/type",
                       "https://www.sourcemeta.com/test/qux", "/items/type");
  EXPECT_FRAME_2020_12(static_frame, "#/properties",
                       "https://www.sourcemeta.com/test/qux", "/properties");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/foo",
                       "https://www.sourcemeta.com/test/qux",
                       "/properties/foo");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/foo/$anchor",
                       "https://www.sourcemeta.com/test/qux",
                       "/properties/foo/$anchor");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/foo/type",
                       "https://www.sourcemeta.com/test/qux",
                       "/properties/foo/type");

  // References

  EXPECT_TRUE(references.empty());

  // Dynamic frame

  EXPECT_TRUE(dynamic_frame.empty());
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

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::ReferenceFrame dynamic_frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, static_frame, dynamic_frame,
                                 references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 15);
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema",
                       "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/foo",
                       "https://www.sourcemeta.com/schema", "/items");

  // JSON Pointers

  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema#/$id",
                       "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/$schema",
                       "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema#/items",
                       "https://www.sourcemeta.com/schema", "/items");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/items/$id",
                       "https://www.sourcemeta.com/schema", "/items/$id");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/items/type",
                       "https://www.sourcemeta.com/schema", "/items/type");

  EXPECT_FRAME_2020_12(static_frame, "", "https://www.sourcemeta.com/schema",
                       "");
  EXPECT_FRAME_2020_12(static_frame, "#/$id",
                       "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_2020_12(static_frame, "#/$schema",
                       "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_2020_12(static_frame, "#/items",
                       "https://www.sourcemeta.com/schema", "/items");
  EXPECT_FRAME_2020_12(static_frame, "#/items/$id",
                       "https://www.sourcemeta.com/schema", "/items/$id");
  EXPECT_FRAME_2020_12(static_frame, "#/items/type",
                       "https://www.sourcemeta.com/schema", "/items/type");

  // References

  EXPECT_TRUE(references.empty());

  // Dynamic frame

  EXPECT_TRUE(dynamic_frame.empty());
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

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::ReferenceFrame dynamic_frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, static_frame, dynamic_frame,
                                 references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 45);
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/schema"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/foo"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/foo#test"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/bar"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/baz"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/baz#extra"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/qux"));

  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema",
                       "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/foo",
                       "https://www.sourcemeta.com/schema", "/properties/foo");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/foo#test",
                       "https://www.sourcemeta.com/schema", "/properties/foo");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/bar",
                       "https://www.sourcemeta.com/schema", "/properties/bar");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/baz",
                       "https://www.sourcemeta.com/schema", "/properties/baz");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/baz#extra",
                       "https://www.sourcemeta.com/schema",
                       "/properties/baz/items");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/qux",
                       "https://www.sourcemeta.com/schema",
                       "/properties/foo/items");

  // JSON Pointers

  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema#/$id",
                       "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/$schema",
                       "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/properties",
                       "https://www.sourcemeta.com/schema", "/properties");

  // foo
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/properties/foo",
                       "https://www.sourcemeta.com/schema", "/properties/foo");
  EXPECT_FRAME_2020_12(
      static_frame, "https://www.sourcemeta.com/schema#/properties/foo/$id",
      "https://www.sourcemeta.com/schema", "/properties/foo/$id");
  EXPECT_FRAME_2020_12(
      static_frame, "https://www.sourcemeta.com/schema#/properties/foo/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/foo/$anchor");
  EXPECT_FRAME_2020_12(
      static_frame, "https://www.sourcemeta.com/schema#/properties/foo/items",
      "https://www.sourcemeta.com/schema", "/properties/foo/items");
  EXPECT_FRAME_2020_12(
      static_frame,
      "https://www.sourcemeta.com/schema#/properties/foo/items/$id",
      "https://www.sourcemeta.com/schema", "/properties/foo/items/$id");

  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/foo#/$id",
                       "https://www.sourcemeta.com/schema",
                       "/properties/foo/$id");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/foo#/$anchor",
                       "https://www.sourcemeta.com/schema",
                       "/properties/foo/$anchor");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/foo#/items",
                       "https://www.sourcemeta.com/schema",
                       "/properties/foo/items");
  EXPECT_FRAME_2020_12(
      static_frame, "https://www.sourcemeta.com/foo#/items/$id",
      "https://www.sourcemeta.com/schema", "/properties/foo/items/$id");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/qux#/$id",
                       "https://www.sourcemeta.com/schema",
                       "/properties/foo/items/$id");

  // bar
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/properties/bar",
                       "https://www.sourcemeta.com/schema", "/properties/bar");
  EXPECT_FRAME_2020_12(
      static_frame, "https://www.sourcemeta.com/schema#/properties/bar/$id",
      "https://www.sourcemeta.com/schema", "/properties/bar/$id");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/bar#/$id",
                       "https://www.sourcemeta.com/schema",
                       "/properties/bar/$id");

  // baz
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/properties/baz",
                       "https://www.sourcemeta.com/schema", "/properties/baz");
  EXPECT_FRAME_2020_12(
      static_frame, "https://www.sourcemeta.com/schema#/properties/baz/$id",
      "https://www.sourcemeta.com/schema", "/properties/baz/$id");
  EXPECT_FRAME_2020_12(
      static_frame, "https://www.sourcemeta.com/schema#/properties/baz/items",
      "https://www.sourcemeta.com/schema", "/properties/baz/items");
  EXPECT_FRAME_2020_12(
      static_frame,
      "https://www.sourcemeta.com/schema#/properties/baz/items/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/baz/items/$anchor");

  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/baz#/$id",
                       "https://www.sourcemeta.com/schema",
                       "/properties/baz/$id");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/baz#/items",
                       "https://www.sourcemeta.com/schema",
                       "/properties/baz/items");
  EXPECT_FRAME_2020_12(
      static_frame, "https://www.sourcemeta.com/baz#/items/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/baz/items/$anchor");

  EXPECT_FRAME_2020_12(static_frame, "", "https://www.sourcemeta.com/schema",
                       "");
  EXPECT_FRAME_2020_12(static_frame, "#/$id",
                       "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_2020_12(static_frame, "#/$schema",
                       "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_2020_12(static_frame, "#/properties",
                       "https://www.sourcemeta.com/schema", "/properties");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/foo",
                       "https://www.sourcemeta.com/schema", "/properties/foo");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/foo/$id",
                       "https://www.sourcemeta.com/schema",
                       "/properties/foo/$id");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/foo/$anchor",
                       "https://www.sourcemeta.com/schema",
                       "/properties/foo/$anchor");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/foo/items",
                       "https://www.sourcemeta.com/schema",
                       "/properties/foo/items");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/foo/items/$id",
                       "https://www.sourcemeta.com/schema",
                       "/properties/foo/items/$id");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/bar",
                       "https://www.sourcemeta.com/schema", "/properties/bar");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/bar/$id",
                       "https://www.sourcemeta.com/schema",
                       "/properties/bar/$id");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/baz",
                       "https://www.sourcemeta.com/schema", "/properties/baz");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/baz/$id",
                       "https://www.sourcemeta.com/schema",
                       "/properties/baz/$id");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/baz/items",
                       "https://www.sourcemeta.com/schema",
                       "/properties/baz/items");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/baz/items/$anchor",
                       "https://www.sourcemeta.com/schema",
                       "/properties/baz/items/$anchor");

  // References

  EXPECT_TRUE(references.empty());

  // Dynamic frame

  EXPECT_TRUE(dynamic_frame.empty());
}

TEST(JSONSchema_frame_2020_12, id_override) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "items": { "$id": "schema" }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::ReferenceFrame dynamic_frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  EXPECT_THROW(sourcemeta::jsontoolkit::frame(
                   document, static_frame, dynamic_frame, references,
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

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::ReferenceFrame dynamic_frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  EXPECT_THROW(sourcemeta::jsontoolkit::frame(
                   document, static_frame, dynamic_frame, references,
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

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::ReferenceFrame dynamic_frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, static_frame, dynamic_frame,
                                 references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver,
                                 "https://json-schema.org/draft/2020-12/schema",
                                 "https://www.sourcemeta.com/schema")
      .wait();

  EXPECT_EQ(static_frame.size(), 6);
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema",
                       "https://www.sourcemeta.com/schema", "");

  // JSON Pointers

  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema#/$id",
                       "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/$schema",
                       "https://www.sourcemeta.com/schema", "/$schema");

  EXPECT_FRAME_2020_12(static_frame, "", "https://www.sourcemeta.com/schema",
                       "");
  EXPECT_FRAME_2020_12(static_frame, "#/$id",
                       "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_2020_12(static_frame, "#/$schema",
                       "https://www.sourcemeta.com/schema", "/$schema");

  // References

  EXPECT_TRUE(references.empty());

  // Dynamic frame

  EXPECT_TRUE(dynamic_frame.empty());
}

TEST(JSONSchema_frame_2020_12, anchor_top_level) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$anchor": "foo"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::ReferenceFrame dynamic_frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, static_frame, dynamic_frame,
                                 references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 10);

  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema",
                       "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema#/$id",
                       "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/$schema",
                       "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/$anchor",
                       "https://www.sourcemeta.com/schema", "/$anchor");

  // JSON Pointers

  EXPECT_FRAME_2020_12(static_frame, "", "https://www.sourcemeta.com/schema",
                       "");
  EXPECT_FRAME_2020_12(static_frame, "#/$id",
                       "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_2020_12(static_frame, "#/$schema",
                       "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_2020_12(static_frame, "#/$anchor",
                       "https://www.sourcemeta.com/schema", "/$anchor");

  // Anchors

  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema#foo",
                       "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_2020_12(static_frame, "#foo",
                       "https://www.sourcemeta.com/schema", "");

  // References

  EXPECT_TRUE(references.empty());

  // Dynamic frame

  EXPECT_TRUE(dynamic_frame.empty());
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

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::ReferenceFrame dynamic_frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(
      document, static_frame, dynamic_frame, references,
      sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      "https://json-schema.org/draft/2020-12/schema", "https://www.example.com")
      .wait();

  EXPECT_EQ(static_frame.size(), 51);

  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema",
                       "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/test",
                       "https://www.sourcemeta.com/schema", "/properties/one");
  EXPECT_FRAME_2020_12(static_frame, "https://www.example.com",
                       "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_2020_12(static_frame, "https://www.example.com/test",
                       "https://www.sourcemeta.com/schema", "/properties/one");
  EXPECT_FRAME_2020_12(static_frame, "https://www.test.com",
                       "https://www.sourcemeta.com/schema", "/properties/two");

  // Anchors

  EXPECT_FRAME_2020_12(static_frame, "https://www.example.com#foo",
                       "https://www.sourcemeta.com/schema", "/items");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema#foo",
                       "https://www.sourcemeta.com/schema", "/items");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/test#bar",
                       "https://www.sourcemeta.com/schema", "/properties/one");
  EXPECT_FRAME_2020_12(static_frame, "https://www.example.com/test#bar",
                       "https://www.sourcemeta.com/schema", "/properties/one");
  EXPECT_FRAME_2020_12(static_frame, "https://www.test.com#baz",
                       "https://www.sourcemeta.com/schema", "/properties/two");
  EXPECT_FRAME_2020_12(static_frame, "#foo",
                       "https://www.sourcemeta.com/schema", "/items");

  // JSON Pointers

  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema#/$id",
                       "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/$schema",
                       "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema#/items",
                       "https://www.sourcemeta.com/schema", "/items");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/items/$anchor",
                       "https://www.sourcemeta.com/schema", "/items/$anchor");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/properties",
                       "https://www.sourcemeta.com/schema", "/properties");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/properties/one",
                       "https://www.sourcemeta.com/schema", "/properties/one");
  EXPECT_FRAME_2020_12(
      static_frame, "https://www.sourcemeta.com/schema#/properties/one/$id",
      "https://www.sourcemeta.com/schema", "/properties/one/$id");
  EXPECT_FRAME_2020_12(
      static_frame, "https://www.sourcemeta.com/schema#/properties/one/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/one/$anchor");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/properties/two",
                       "https://www.sourcemeta.com/schema", "/properties/two");
  EXPECT_FRAME_2020_12(
      static_frame, "https://www.sourcemeta.com/schema#/properties/two/$id",
      "https://www.sourcemeta.com/schema", "/properties/two/$id");
  EXPECT_FRAME_2020_12(
      static_frame, "https://www.sourcemeta.com/schema#/properties/two/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/two/$anchor");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/test#/$id",
                       "https://www.sourcemeta.com/schema",
                       "/properties/one/$id");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/test#/$anchor",
                       "https://www.sourcemeta.com/schema",
                       "/properties/one/$anchor");
  EXPECT_FRAME_2020_12(static_frame, "https://www.test.com#/$id",
                       "https://www.sourcemeta.com/schema",
                       "/properties/two/$id");
  EXPECT_FRAME_2020_12(static_frame, "https://www.test.com#/$anchor",
                       "https://www.sourcemeta.com/schema",
                       "/properties/two/$anchor");

  EXPECT_FRAME_2020_12(static_frame, "", "https://www.sourcemeta.com/schema",
                       "");
  EXPECT_FRAME_2020_12(static_frame, "#/$id",
                       "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_2020_12(static_frame, "#/$schema",
                       "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_2020_12(static_frame, "#/items",
                       "https://www.sourcemeta.com/schema", "/items");
  EXPECT_FRAME_2020_12(static_frame, "#/items/$anchor",
                       "https://www.sourcemeta.com/schema", "/items/$anchor");
  EXPECT_FRAME_2020_12(static_frame, "#/properties",
                       "https://www.sourcemeta.com/schema", "/properties");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/one",
                       "https://www.sourcemeta.com/schema", "/properties/one");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/one/$id",
                       "https://www.sourcemeta.com/schema",
                       "/properties/one/$id");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/one/$anchor",
                       "https://www.sourcemeta.com/schema",
                       "/properties/one/$anchor");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/two",
                       "https://www.sourcemeta.com/schema", "/properties/two");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/two/$id",
                       "https://www.sourcemeta.com/schema",
                       "/properties/two/$id");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/two/$anchor",
                       "https://www.sourcemeta.com/schema",
                       "/properties/two/$anchor");

  // References

  EXPECT_TRUE(references.empty());

  // Dynamic frame

  EXPECT_TRUE(dynamic_frame.empty());
}

TEST(JSONSchema_frame_2020_12, dynamic_anchor) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": {
        "$dynamicAnchor": "foo",
        "$anchor": "extra",
        "items": {
          "$id": "test",
          "$dynamicAnchor": "foo"
        }
      },
      "bar": {
        "$dynamicAnchor": "bar",
        "$anchor": "bar"
      },
      "baz": {
        "$dynamicAnchor": "baz",
        "items": {
          "$dynamicAnchor": "baz"
        }
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::ReferenceFrame dynamic_frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, static_frame, dynamic_frame,
                                 references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  // Static

  EXPECT_EQ(static_frame.size(), 46);
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema",
                       "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema#/$id",
                       "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/$schema",
                       "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/properties",
                       "https://www.sourcemeta.com/schema", "/properties");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/test",
                       "https://www.sourcemeta.com/schema",
                       "/properties/foo/items");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/test#/$id",
                       "https://www.sourcemeta.com/schema",
                       "/properties/foo/items/$id");
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/test#/$dynamicAnchor",
                       "https://www.sourcemeta.com/schema",
                       "/properties/foo/items/$dynamicAnchor");

  // foo
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/properties/foo",
                       "https://www.sourcemeta.com/schema", "/properties/foo");
  EXPECT_FRAME_2020_12(
      static_frame,
      "https://www.sourcemeta.com/schema#/properties/foo/$dynamicAnchor",
      "https://www.sourcemeta.com/schema", "/properties/foo/$dynamicAnchor");
  EXPECT_FRAME_2020_12(
      static_frame, "https://www.sourcemeta.com/schema#/properties/foo/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/foo/$anchor");
  EXPECT_FRAME_2020_12(
      static_frame, "https://www.sourcemeta.com/schema#/properties/foo/items",
      "https://www.sourcemeta.com/schema", "/properties/foo/items");
  EXPECT_FRAME_2020_12(
      static_frame,
      "https://www.sourcemeta.com/schema#/properties/foo/items/$id",
      "https://www.sourcemeta.com/schema", "/properties/foo/items/$id");
  EXPECT_FRAME_2020_12(
      static_frame,
      "https://www.sourcemeta.com/schema#/properties/foo/items/$dynamicAnchor",
      "https://www.sourcemeta.com/schema",
      "/properties/foo/items/$dynamicAnchor");

  // bar
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/properties/bar",
                       "https://www.sourcemeta.com/schema", "/properties/bar");
  EXPECT_FRAME_2020_12(
      static_frame,
      "https://www.sourcemeta.com/schema#/properties/bar/$dynamicAnchor",
      "https://www.sourcemeta.com/schema", "/properties/bar/$dynamicAnchor");
  EXPECT_FRAME_2020_12(
      static_frame, "https://www.sourcemeta.com/schema#/properties/bar/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/bar/$anchor");

  // baz
  EXPECT_FRAME_2020_12(static_frame,
                       "https://www.sourcemeta.com/schema#/properties/baz",
                       "https://www.sourcemeta.com/schema", "/properties/baz");
  EXPECT_FRAME_2020_12(
      static_frame,
      "https://www.sourcemeta.com/schema#/properties/baz/$dynamicAnchor",
      "https://www.sourcemeta.com/schema", "/properties/baz/$dynamicAnchor");
  EXPECT_FRAME_2020_12(
      static_frame, "https://www.sourcemeta.com/schema#/properties/baz/items",
      "https://www.sourcemeta.com/schema", "/properties/baz/items");
  EXPECT_FRAME_2020_12(
      static_frame,
      "https://www.sourcemeta.com/schema#/properties/baz/items/$dynamicAnchor",
      "https://www.sourcemeta.com/schema",
      "/properties/baz/items/$dynamicAnchor");

  // JSON Pointers

  EXPECT_FRAME_2020_12(static_frame, "", "https://www.sourcemeta.com/schema",
                       "");
  EXPECT_FRAME_2020_12(static_frame, "#/$id",
                       "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_2020_12(static_frame, "#/$schema",
                       "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_2020_12(static_frame, "#/properties",
                       "https://www.sourcemeta.com/schema", "/properties");

  // foo
  EXPECT_FRAME_2020_12(static_frame, "#/properties/foo",
                       "https://www.sourcemeta.com/schema", "/properties/foo");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/foo/$dynamicAnchor",
                       "https://www.sourcemeta.com/schema",
                       "/properties/foo/$dynamicAnchor");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/foo/$anchor",
                       "https://www.sourcemeta.com/schema",
                       "/properties/foo/$anchor");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/foo/items",
                       "https://www.sourcemeta.com/schema",
                       "/properties/foo/items");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/foo/items/$id",
                       "https://www.sourcemeta.com/schema",
                       "/properties/foo/items/$id");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/foo/items/$dynamicAnchor",
                       "https://www.sourcemeta.com/schema",
                       "/properties/foo/items/$dynamicAnchor");

  // bar
  EXPECT_FRAME_2020_12(static_frame, "#/properties/bar",
                       "https://www.sourcemeta.com/schema", "/properties/bar");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/bar/$dynamicAnchor",
                       "https://www.sourcemeta.com/schema",
                       "/properties/bar/$dynamicAnchor");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/bar/$anchor",
                       "https://www.sourcemeta.com/schema",
                       "/properties/bar/$anchor");

  // baz
  EXPECT_FRAME_2020_12(static_frame, "#/properties/baz",
                       "https://www.sourcemeta.com/schema", "/properties/baz");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/baz/$dynamicAnchor",
                       "https://www.sourcemeta.com/schema",
                       "/properties/baz/$dynamicAnchor");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/baz/items",
                       "https://www.sourcemeta.com/schema",
                       "/properties/baz/items");
  EXPECT_FRAME_2020_12(static_frame, "#/properties/baz/items/$dynamicAnchor",
                       "https://www.sourcemeta.com/schema",
                       "/properties/baz/items/$dynamicAnchor");

  // Static anchors

  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema#foo",
                       "https://www.sourcemeta.com/schema", "/properties/foo");
  EXPECT_FRAME_2020_12(static_frame, "#foo",
                       "https://www.sourcemeta.com/schema", "/properties/foo");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema#extra",
                       "https://www.sourcemeta.com/schema", "/properties/foo");
  EXPECT_FRAME_2020_12(static_frame, "#extra",
                       "https://www.sourcemeta.com/schema", "/properties/foo");
  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/test#foo",
                       "https://www.sourcemeta.com/schema",
                       "/properties/foo/items");

  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema#bar",
                       "https://www.sourcemeta.com/schema", "/properties/bar");
  EXPECT_FRAME_2020_12(static_frame, "#bar",
                       "https://www.sourcemeta.com/schema", "/properties/bar");

  EXPECT_FRAME_2020_12(static_frame, "https://www.sourcemeta.com/schema#baz",
                       "https://www.sourcemeta.com/schema", "/properties/baz");
  EXPECT_FRAME_2020_12(static_frame, "#baz",
                       "https://www.sourcemeta.com/schema", "/properties/baz");

  // Dynamic Anchor

  EXPECT_EQ(dynamic_frame.size(), 3);
  EXPECT_FRAME_2020_12(dynamic_frame, "#foo",
                       "https://www.sourcemeta.com/schema", "/properties/foo");
  EXPECT_FRAME_2020_12(dynamic_frame, "#bar",
                       "https://www.sourcemeta.com/schema", "/properties/bar");
  EXPECT_FRAME_2020_12(dynamic_frame, "#baz",
                       "https://www.sourcemeta.com/schema", "/properties/baz");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame_2020_12, dynamic_anchor_no_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": {
        "$dynamicAnchor": "foo",
        "items": {
          "$dynamicAnchor": "foo"
        }
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::ReferenceFrame dynamic_frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, static_frame, dynamic_frame,
                                 references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  // Static

  EXPECT_EQ(static_frame.size(), 8);

  EXPECT_ANONYMOUS_FRAME(static_frame, "", "",
                         "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME(static_frame, "#/$schema", "/$schema",
                         "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME(static_frame, "#/properties", "/properties",
                         "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME(static_frame, "#/properties/foo", "/properties/foo",
                         "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME(static_frame, "#/properties/foo/$dynamicAnchor",
                         "/properties/foo/$dynamicAnchor",
                         "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME(static_frame, "#/properties/foo/items",
                         "/properties/foo/items",
                         "https://json-schema.org/draft/2020-12/schema");
  EXPECT_ANONYMOUS_FRAME(static_frame, "#/properties/foo/items/$dynamicAnchor",
                         "/properties/foo/items/$dynamicAnchor",
                         "https://json-schema.org/draft/2020-12/schema");

  // Static anchors

  EXPECT_ANONYMOUS_FRAME(static_frame, "#foo", "/properties/foo",
                         "https://json-schema.org/draft/2020-12/schema");

  // Dynamic Anchor

  EXPECT_EQ(dynamic_frame.size(), 1);
  EXPECT_ANONYMOUS_FRAME(dynamic_frame, "#foo", "/properties/foo",
                         "https://json-schema.org/draft/2020-12/schema");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame_2020_12, dynamic_static_anchor_mismatch) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$anchor": "foo",
    "items": {
      "$dynamicAnchor": "foo"
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::ReferenceFrame dynamic_frame;
  sourcemeta::jsontoolkit::ReferenceMap references;

  EXPECT_THROW(sourcemeta::jsontoolkit::frame(
                   document, static_frame, dynamic_frame, references,
                   sourcemeta::jsontoolkit::default_schema_walker,
                   sourcemeta::jsontoolkit::official_resolver)
                   .wait(),
               sourcemeta::jsontoolkit::SchemaError);
}
