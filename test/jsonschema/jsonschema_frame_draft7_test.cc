#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include "jsonschema_test_utils.h"

#define EXPECT_FRAME_STATIC_DRAFT7(frame, reference, root_id,                  \
                                   expected_pointer, expected_base,            \
                                   expected_relative_pointer)                  \
  EXPECT_FRAME_STATIC(frame, reference, root_id, expected_pointer,             \
                      "http://json-schema.org/draft-07/schema#",               \
                      expected_base, expected_relative_pointer);

TEST(JSONSchema_frame_draft7, empty_schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-07/schema#"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(frame.size(), 3);
  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.sourcemeta.com/schema",
                             "https://www.sourcemeta.com/schema", "",
                             "https://www.sourcemeta.com/schema", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.sourcemeta.com/schema#/$id",
                             "https://www.sourcemeta.com/schema", "/$id",
                             "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_DRAFT7(frame,
                             "https://www.sourcemeta.com/schema#/$schema",
                             "https://www.sourcemeta.com/schema", "/$schema",
                             "https://www.sourcemeta.com/schema", "/$schema");

  // References

  EXPECT_TRUE(references.empty());
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

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(frame.size(), 8);
  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.sourcemeta.com/schema",
                             "https://www.sourcemeta.com/schema", "",
                             "https://www.sourcemeta.com/schema", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.sourcemeta.com/schema#/$id",
                             "https://www.sourcemeta.com/schema", "/$id",
                             "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_DRAFT7(frame,
                             "https://www.sourcemeta.com/schema#/$schema",
                             "https://www.sourcemeta.com/schema", "/$schema",
                             "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.sourcemeta.com/schema#/items",
                             "https://www.sourcemeta.com/schema", "/items",
                             "https://www.sourcemeta.com/schema", "/items");
  EXPECT_FRAME_STATIC_DRAFT7(
      frame, "https://www.sourcemeta.com/schema#/items/type",
      "https://www.sourcemeta.com/schema", "/items/type",
      "https://www.sourcemeta.com/schema", "/items/type");
  EXPECT_FRAME_STATIC_DRAFT7(
      frame, "https://www.sourcemeta.com/schema#/properties",
      "https://www.sourcemeta.com/schema", "/properties",
      "https://www.sourcemeta.com/schema", "/properties");
  EXPECT_FRAME_STATIC_DRAFT7(
      frame, "https://www.sourcemeta.com/schema#/properties/foo",
      "https://www.sourcemeta.com/schema", "/properties/foo",
      "https://www.sourcemeta.com/schema", "/properties/foo");
  EXPECT_FRAME_STATIC_DRAFT7(
      frame, "https://www.sourcemeta.com/schema#/properties/foo/type",
      "https://www.sourcemeta.com/schema", "/properties/foo/type",
      "https://www.sourcemeta.com/schema", "/properties/foo/type");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame_draft7, one_level_applicators_with_identifiers) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/test/qux",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "items": { "$id": "../foo", "type": "string" }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(frame.size(), 9);
  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.sourcemeta.com/test/qux",
                             "https://www.sourcemeta.com/test/qux", "",
                             "https://www.sourcemeta.com/test/qux", "");
  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.sourcemeta.com/foo",
                             "https://www.sourcemeta.com/test/qux", "/items",
                             "https://www.sourcemeta.com/foo", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.sourcemeta.com/test/qux#/$id",
                             "https://www.sourcemeta.com/test/qux", "/$id",
                             "https://www.sourcemeta.com/test/qux", "/$id");
  EXPECT_FRAME_STATIC_DRAFT7(frame,
                             "https://www.sourcemeta.com/test/qux#/$schema",
                             "https://www.sourcemeta.com/test/qux", "/$schema",
                             "https://www.sourcemeta.com/test/qux", "/$schema");
  EXPECT_FRAME_STATIC_DRAFT7(frame,
                             "https://www.sourcemeta.com/test/qux#/items",
                             "https://www.sourcemeta.com/test/qux", "/items",
                             "https://www.sourcemeta.com/foo", "");
  EXPECT_FRAME_STATIC_DRAFT7(
      frame, "https://www.sourcemeta.com/test/qux#/items/$id",
      "https://www.sourcemeta.com/test/qux", "/items/$id",
      "https://www.sourcemeta.com/foo", "/$id");
  EXPECT_FRAME_STATIC_DRAFT7(
      frame, "https://www.sourcemeta.com/test/qux#/items/type",
      "https://www.sourcemeta.com/test/qux", "/items/type",
      "https://www.sourcemeta.com/foo", "/type");
  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.sourcemeta.com/foo#/$id",
                             "https://www.sourcemeta.com/test/qux",
                             "/items/$id", "https://www.sourcemeta.com/foo",
                             "/$id");
  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.sourcemeta.com/foo#/type",
                             "https://www.sourcemeta.com/test/qux",
                             "/items/type", "https://www.sourcemeta.com/foo",
                             "/type");

  // References

  EXPECT_TRUE(references.empty());
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

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(frame.size(), 9);
  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.sourcemeta.com/schema",
                             "https://www.sourcemeta.com/schema", "",
                             "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.sourcemeta.com/foo",
                             "https://www.sourcemeta.com/schema", "/items",
                             "https://www.sourcemeta.com/foo", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.sourcemeta.com/schema#/$id",
                             "https://www.sourcemeta.com/schema", "/$id",
                             "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_DRAFT7(frame,
                             "https://www.sourcemeta.com/schema#/$schema",
                             "https://www.sourcemeta.com/schema", "/$schema",
                             "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.sourcemeta.com/schema#/items",
                             "https://www.sourcemeta.com/schema", "/items",
                             "https://www.sourcemeta.com/foo", "");
  EXPECT_FRAME_STATIC_DRAFT7(frame,
                             "https://www.sourcemeta.com/schema#/items/$id",
                             "https://www.sourcemeta.com/schema", "/items/$id",
                             "https://www.sourcemeta.com/foo", "/$id");
  EXPECT_FRAME_STATIC_DRAFT7(frame,
                             "https://www.sourcemeta.com/schema#/items/type",
                             "https://www.sourcemeta.com/schema", "/items/type",
                             "https://www.sourcemeta.com/foo", "/type");
  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.sourcemeta.com/foo#/$id",
                             "https://www.sourcemeta.com/schema", "/items/$id",
                             "https://www.sourcemeta.com/foo", "/$id");
  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.sourcemeta.com/foo#/type",
                             "https://www.sourcemeta.com/schema", "/items/type",
                             "https://www.sourcemeta.com/foo", "/type");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame_draft7, id_override) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-07/schema#",
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

TEST(JSONSchema_frame_draft7, explicit_argument_id_same) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-07/schema#"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver,
                                 "http://json-schema.org/draft-07/schema#",
                                 "https://www.sourcemeta.com/schema")
      .wait();

  EXPECT_EQ(frame.size(), 3);
  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.sourcemeta.com/schema",
                             "https://www.sourcemeta.com/schema", "",
                             "https://www.sourcemeta.com/schema", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.sourcemeta.com/schema#/$id",
                             "https://www.sourcemeta.com/schema", "/$id",
                             "https://www.sourcemeta.com/schema", "/$id");
  EXPECT_FRAME_STATIC_DRAFT7(frame,
                             "https://www.sourcemeta.com/schema#/$schema",
                             "https://www.sourcemeta.com/schema", "/$schema",
                             "https://www.sourcemeta.com/schema", "/$schema");

  // References

  EXPECT_TRUE(references.empty());
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

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver,
                                 "http://json-schema.org/draft-07/schema#",
                                 "https://www.example.com")
      .wait();

  EXPECT_EQ(frame.size(), 22);

  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.sourcemeta.com/schema",
                             "https://www.sourcemeta.com/schema", "",
                             "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.sourcemeta.com/test",
                             "https://www.sourcemeta.com/schema",
                             "/properties/one",
                             "https://www.sourcemeta.com/test", "");
  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.example.com",
                             "https://www.sourcemeta.com/schema", "",
                             "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.example.com/test",
                             "https://www.sourcemeta.com/schema",
                             "/properties/one", "https://www.example.com/test",
                             "");
  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.test.com",
                             "https://www.sourcemeta.com/schema",
                             "/properties/two", "https://www.test.com", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.sourcemeta.com/schema#/$id",
                             "https://www.sourcemeta.com/schema", "/$id",
                             "https://www.example.com", "/$id");
  EXPECT_FRAME_STATIC_DRAFT7(frame,
                             "https://www.sourcemeta.com/schema#/$schema",
                             "https://www.sourcemeta.com/schema", "/$schema",
                             "https://www.example.com", "/$schema");
  EXPECT_FRAME_STATIC_DRAFT7(frame,
                             "https://www.sourcemeta.com/schema#/properties",
                             "https://www.sourcemeta.com/schema", "/properties",
                             "https://www.example.com", "/properties");
  EXPECT_FRAME_STATIC_DRAFT7(
      frame, "https://www.sourcemeta.com/schema#/properties/one",
      "https://www.sourcemeta.com/schema", "/properties/one",
      "https://www.example.com/test", "");
  EXPECT_FRAME_STATIC_DRAFT7(
      frame, "https://www.sourcemeta.com/schema#/properties/one/$id",
      "https://www.sourcemeta.com/schema", "/properties/one/$id",
      "https://www.example.com/test", "/$id");
  EXPECT_FRAME_STATIC_DRAFT7(
      frame, "https://www.sourcemeta.com/schema#/properties/two",
      "https://www.sourcemeta.com/schema", "/properties/two",
      "https://www.test.com", "");
  EXPECT_FRAME_STATIC_DRAFT7(
      frame, "https://www.sourcemeta.com/schema#/properties/two/$id",
      "https://www.sourcemeta.com/schema", "/properties/two/$id",
      "https://www.test.com", "/$id");
  EXPECT_FRAME_STATIC_DRAFT7(frame, "https://www.sourcemeta.com/test#/$id",
                             "https://www.sourcemeta.com/schema",
                             "/properties/one/$id",
                             "https://www.example.com/test", "/$id");
  EXPECT_FRAME_STATIC_DRAFT7(
      frame, "https://www.test.com#/$id", "https://www.sourcemeta.com/schema",
      "/properties/two/$id", "https://www.test.com", "/$id");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame_draft7, ref_metaschema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$ref": "http://json-schema.org/draft-07/schema#"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(frame.size(), 3);

  EXPECT_ANONYMOUS_FRAME_STATIC(frame, "", "",
                                "http://json-schema.org/draft-07/schema#");
  EXPECT_ANONYMOUS_FRAME_STATIC(frame, "#/$schema", "/$schema",
                                "http://json-schema.org/draft-07/schema#");
  EXPECT_ANONYMOUS_FRAME_STATIC(frame, "#/$ref", "/$ref",
                                "http://json-schema.org/draft-07/schema#");

  // References

  EXPECT_EQ(references.size(), 1);

  EXPECT_STATIC_REFERENCE(references, "/$ref",
                          "http://json-schema.org/draft-07/schema#",
                          "http://json-schema.org/draft-07/schema", "");
}
