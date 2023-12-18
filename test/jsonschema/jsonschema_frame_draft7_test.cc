#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include "jsonschema_test_utils.h"

#define EXPECT_FRAME_DRAFT7(frame, reference, base_id, expected_pointer)       \
  EXPECT_FRAME(frame, reference, base_id, expected_pointer,                    \
               "http://json-schema.org/draft-07/schema#");

TEST(JSONSchema_frame_draft7, empty_schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-07/schema#"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::frame(document, static_frame,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 1);
  EXPECT_FRAME_DRAFT7(static_frame, "https://www.sourcemeta.com/schema",
                      "https://www.sourcemeta.com/schema", "");
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

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::frame(document, static_frame,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 1);
  EXPECT_FRAME_DRAFT7(static_frame, "https://www.sourcemeta.com/schema",
                      "https://www.sourcemeta.com/schema", "");
}

TEST(JSONSchema_frame_draft7, one_level_applicators_with_identifiers) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/test/qux",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "items": { "$id": "../foo", "type": "string" }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::frame(document, static_frame,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 2);
  EXPECT_FRAME_DRAFT7(static_frame, "https://www.sourcemeta.com/test/qux",
                      "https://www.sourcemeta.com/test/qux", "");
  EXPECT_FRAME_DRAFT7(static_frame, "https://www.sourcemeta.com/foo",
                      "https://www.sourcemeta.com/test/qux", "/items");
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

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::frame(document, static_frame,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 2);
  EXPECT_FRAME_DRAFT7(static_frame, "https://www.sourcemeta.com/schema",
                      "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_DRAFT7(static_frame, "https://www.sourcemeta.com/foo",
                      "https://www.sourcemeta.com/schema", "/items");
}

TEST(JSONSchema_frame_draft7, id_override) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "items": { "$id": "schema" }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  EXPECT_THROW(sourcemeta::jsontoolkit::frame(
                   document, static_frame,
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

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::frame(document, static_frame,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver,
                                 "http://json-schema.org/draft-07/schema#",
                                 "https://www.sourcemeta.com/schema")
      .wait();

  EXPECT_EQ(static_frame.size(), 1);
  EXPECT_FRAME_DRAFT7(static_frame, "https://www.sourcemeta.com/schema",
                      "https://www.sourcemeta.com/schema", "");
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

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::frame(
      document, static_frame, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      "http://json-schema.org/draft-07/schema#", "https://www.example.com")
      .wait();

  EXPECT_EQ(static_frame.size(), 5);
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/schema"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/test"));
  EXPECT_TRUE(static_frame.defines("https://www.example.com"));
  EXPECT_TRUE(static_frame.defines("https://www.example.com/test"));
  EXPECT_TRUE(static_frame.defines("https://www.test.com"));

  EXPECT_FRAME_DRAFT7(static_frame, "https://www.sourcemeta.com/schema",
                      "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_DRAFT7(static_frame, "https://www.sourcemeta.com/test",
                      "https://www.sourcemeta.com/schema", "/properties/one");
  EXPECT_FRAME_DRAFT7(static_frame, "https://www.example.com",
                      "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_DRAFT7(static_frame, "https://www.example.com/test",
                      "https://www.sourcemeta.com/schema", "/properties/one");
  EXPECT_FRAME_DRAFT7(static_frame, "https://www.test.com",
                      "https://www.sourcemeta.com/schema", "/properties/two");
}
