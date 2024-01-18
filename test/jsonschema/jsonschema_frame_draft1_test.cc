#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include "jsonschema_test_utils.h"

#define EXPECT_FRAME_STATIC_DRAFT1(frame, reference, root_id,                  \
                                   expected_pointer)                           \
  EXPECT_FRAME_STATIC(frame, reference, root_id, expected_pointer,             \
                      "http://json-schema.org/draft-01/schema#");

TEST(JSONSchema_frame_draft1, empty_schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-01/schema#"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(frame.size(), 3);
  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.sourcemeta.com/schema",
                             "https://www.sourcemeta.com/schema", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.sourcemeta.com/schema#/id",
                             "https://www.sourcemeta.com/schema", "/id");
  EXPECT_FRAME_STATIC_DRAFT1(frame,
                             "https://www.sourcemeta.com/schema#/$schema",
                             "https://www.sourcemeta.com/schema", "/$schema");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame_draft1, one_level_applicators_without_identifiers) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-01/schema#",
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
  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.sourcemeta.com/schema",
                             "https://www.sourcemeta.com/schema", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.sourcemeta.com/schema#/id",
                             "https://www.sourcemeta.com/schema", "/id");
  EXPECT_FRAME_STATIC_DRAFT1(frame,
                             "https://www.sourcemeta.com/schema#/$schema",
                             "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.sourcemeta.com/schema#/items",
                             "https://www.sourcemeta.com/schema", "/items");
  EXPECT_FRAME_STATIC_DRAFT1(
      frame, "https://www.sourcemeta.com/schema#/items/type",
      "https://www.sourcemeta.com/schema", "/items/type");
  EXPECT_FRAME_STATIC_DRAFT1(
      frame, "https://www.sourcemeta.com/schema#/properties",
      "https://www.sourcemeta.com/schema", "/properties");
  EXPECT_FRAME_STATIC_DRAFT1(
      frame, "https://www.sourcemeta.com/schema#/properties/foo",
      "https://www.sourcemeta.com/schema", "/properties/foo");
  EXPECT_FRAME_STATIC_DRAFT1(
      frame, "https://www.sourcemeta.com/schema#/properties/foo/type",
      "https://www.sourcemeta.com/schema", "/properties/foo/type");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame_draft1, one_level_applicators_with_identifiers) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://www.sourcemeta.com/test/qux",
    "$schema": "http://json-schema.org/draft-01/schema#",
    "items": { "id": "../foo", "type": "string" }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(frame.size(), 9);
  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.sourcemeta.com/test/qux",
                             "https://www.sourcemeta.com/test/qux", "");
  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.sourcemeta.com/foo",
                             "https://www.sourcemeta.com/test/qux", "/items");

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.sourcemeta.com/test/qux#/id",
                             "https://www.sourcemeta.com/test/qux", "/id");
  EXPECT_FRAME_STATIC_DRAFT1(frame,
                             "https://www.sourcemeta.com/test/qux#/$schema",
                             "https://www.sourcemeta.com/test/qux", "/$schema");
  EXPECT_FRAME_STATIC_DRAFT1(frame,
                             "https://www.sourcemeta.com/test/qux#/items",
                             "https://www.sourcemeta.com/test/qux", "/items");
  EXPECT_FRAME_STATIC_DRAFT1(
      frame, "https://www.sourcemeta.com/test/qux#/items/id",
      "https://www.sourcemeta.com/test/qux", "/items/id");
  EXPECT_FRAME_STATIC_DRAFT1(
      frame, "https://www.sourcemeta.com/test/qux#/items/type",
      "https://www.sourcemeta.com/test/qux", "/items/type");
  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.sourcemeta.com/foo#/id",
                             "https://www.sourcemeta.com/test/qux",
                             "/items/id");
  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.sourcemeta.com/foo#/type",
                             "https://www.sourcemeta.com/test/qux",
                             "/items/type");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame_draft1, subschema_absolute_identifier) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-01/schema#",
    "items": {
      "id": "https://www.sourcemeta.com/foo",
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
  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.sourcemeta.com/schema",
                             "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.sourcemeta.com/foo",
                             "https://www.sourcemeta.com/schema", "/items");

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.sourcemeta.com/schema#/id",
                             "https://www.sourcemeta.com/schema", "/id");
  EXPECT_FRAME_STATIC_DRAFT1(frame,
                             "https://www.sourcemeta.com/schema#/$schema",
                             "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.sourcemeta.com/schema#/items",
                             "https://www.sourcemeta.com/schema", "/items");
  EXPECT_FRAME_STATIC_DRAFT1(frame,
                             "https://www.sourcemeta.com/schema#/items/id",
                             "https://www.sourcemeta.com/schema", "/items/id");
  EXPECT_FRAME_STATIC_DRAFT1(
      frame, "https://www.sourcemeta.com/schema#/items/type",
      "https://www.sourcemeta.com/schema", "/items/type");
  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.sourcemeta.com/foo#/id",
                             "https://www.sourcemeta.com/schema", "/items/id");
  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.sourcemeta.com/foo#/type",
                             "https://www.sourcemeta.com/schema",
                             "/items/type");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame_draft1, id_override) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-01/schema#",
    "items": { "id": "schema" }
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

TEST(JSONSchema_frame_draft1, explicit_argument_id_same) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-01/schema#"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(document, frame, references,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver,
                                 "http://json-schema.org/draft-01/schema#",
                                 "https://www.sourcemeta.com/schema")
      .wait();

  EXPECT_EQ(frame.size(), 3);
  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.sourcemeta.com/schema",
                             "https://www.sourcemeta.com/schema", "");

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.sourcemeta.com/schema#/id",
                             "https://www.sourcemeta.com/schema", "/id");
  EXPECT_FRAME_STATIC_DRAFT1(frame,
                             "https://www.sourcemeta.com/schema#/$schema",
                             "https://www.sourcemeta.com/schema", "/$schema");

  // References

  EXPECT_TRUE(references.empty());
}

TEST(JSONSchema_frame_draft1, explicit_argument_id_different) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-01/schema#",
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
                                 "http://json-schema.org/draft-01/schema#",
                                 "https://www.example.com")
      .wait();

  EXPECT_EQ(frame.size(), 22);

  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.sourcemeta.com/schema",
                             "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.sourcemeta.com/test",
                             "https://www.sourcemeta.com/schema",
                             "/properties/one");
  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.example.com",
                             "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.example.com/test",
                             "https://www.sourcemeta.com/schema",
                             "/properties/one");
  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.test.com",
                             "https://www.sourcemeta.com/schema",
                             "/properties/two");

  // JSON Pointers

  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.sourcemeta.com/schema#/id",
                             "https://www.sourcemeta.com/schema", "/id");
  EXPECT_FRAME_STATIC_DRAFT1(frame,
                             "https://www.sourcemeta.com/schema#/$schema",
                             "https://www.sourcemeta.com/schema", "/$schema");
  EXPECT_FRAME_STATIC_DRAFT1(
      frame, "https://www.sourcemeta.com/schema#/properties",
      "https://www.sourcemeta.com/schema", "/properties");
  EXPECT_FRAME_STATIC_DRAFT1(
      frame, "https://www.sourcemeta.com/schema#/properties/one",
      "https://www.sourcemeta.com/schema", "/properties/one");
  EXPECT_FRAME_STATIC_DRAFT1(
      frame, "https://www.sourcemeta.com/schema#/properties/one/id",
      "https://www.sourcemeta.com/schema", "/properties/one/id");
  EXPECT_FRAME_STATIC_DRAFT1(
      frame, "https://www.sourcemeta.com/schema#/properties/two",
      "https://www.sourcemeta.com/schema", "/properties/two");
  EXPECT_FRAME_STATIC_DRAFT1(
      frame, "https://www.sourcemeta.com/schema#/properties/two/id",
      "https://www.sourcemeta.com/schema", "/properties/two/id");
  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.sourcemeta.com/test#/id",
                             "https://www.sourcemeta.com/schema",
                             "/properties/one/id");
  EXPECT_FRAME_STATIC_DRAFT1(frame, "https://www.test.com#/id",
                             "https://www.sourcemeta.com/schema",
                             "/properties/two/id");

  // References

  EXPECT_TRUE(references.empty());
}
