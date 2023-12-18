#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include "jsonschema_test_utils.h"

#define EXPECT_FRAME_2019_09(frame, reference, base_id, expected_pointer)      \
  EXPECT_FRAME(frame, reference, base_id, expected_pointer,                    \
               "https://json-schema.org/draft/2019-09/schema");

TEST(JSONSchema_frame_2019_09, empty_schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::frame(document, static_frame,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 1);
  EXPECT_FRAME_2019_09(static_frame, "https://www.sourcemeta.com/schema",
                       "https://www.sourcemeta.com/schema", "");
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

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::frame(document, static_frame,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 1);
  EXPECT_FRAME_2019_09(static_frame, "https://www.sourcemeta.com/schema",
                       "https://www.sourcemeta.com/schema", "");
}

TEST(JSONSchema_frame_2019_09, one_level_applicators_with_identifiers) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/test/qux",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "items": { "$id": "../foo", "type": "string" },
    "properties": {
      "foo": { "$anchor": "test", "type": "number" },
      "bar": { "$anchor": "bar", "type": "array" }
    }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::frame(document, static_frame,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 4);
  EXPECT_FRAME_2019_09(static_frame, "https://www.sourcemeta.com/test/qux",
                       "https://www.sourcemeta.com/test/qux", "");
  EXPECT_FRAME_2019_09(static_frame, "https://www.sourcemeta.com/foo",
                       "https://www.sourcemeta.com/test/qux", "/items");
  EXPECT_FRAME_2019_09(static_frame, "https://www.sourcemeta.com/test/qux#test",
                       "https://www.sourcemeta.com/test/qux",
                       "/properties/foo");
  EXPECT_FRAME_2019_09(static_frame, "https://www.sourcemeta.com/test/qux#bar",
                       "https://www.sourcemeta.com/test/qux",
                       "/properties/bar");
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

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::frame(document, static_frame,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 2);
  EXPECT_FRAME_2019_09(static_frame, "https://www.sourcemeta.com/schema",
                       "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_2019_09(static_frame, "https://www.sourcemeta.com/foo",
                       "https://www.sourcemeta.com/schema", "/items");
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
        "$id": "https://www.sourcemeta.com/bar",
        "items": {
          "$anchor": "xxx"
        }
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
  sourcemeta::jsontoolkit::frame(document, static_frame,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 8);
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/schema"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/foo"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/foo#test"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/bar"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/baz"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/baz#extra"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/qux"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/bar#xxx"));

  EXPECT_FRAME_2019_09(static_frame, "https://www.sourcemeta.com/schema",
                       "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_2019_09(static_frame, "https://www.sourcemeta.com/foo",
                       "https://www.sourcemeta.com/schema", "/properties/foo");
  EXPECT_FRAME_2019_09(static_frame, "https://www.sourcemeta.com/foo#test",
                       "https://www.sourcemeta.com/schema", "/properties/foo");
  EXPECT_FRAME_2019_09(static_frame, "https://www.sourcemeta.com/bar",
                       "https://www.sourcemeta.com/schema", "/properties/bar");
  EXPECT_FRAME_2019_09(static_frame, "https://www.sourcemeta.com/baz",
                       "https://www.sourcemeta.com/schema", "/properties/baz");
  EXPECT_FRAME_2019_09(static_frame, "https://www.sourcemeta.com/baz#extra",
                       "https://www.sourcemeta.com/schema",
                       "/properties/baz/items");
  EXPECT_FRAME_2019_09(static_frame, "https://www.sourcemeta.com/qux",
                       "https://www.sourcemeta.com/schema",
                       "/properties/foo/items");
  EXPECT_FRAME_2019_09(static_frame, "https://www.sourcemeta.com/bar#xxx",
                       "https://www.sourcemeta.com/schema",
                       "/properties/bar/items");
}

TEST(JSONSchema_frame_2019_09, id_override) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
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

TEST(JSONSchema_frame_2019_09, static_anchor_override) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$anchor": "foo",
    "items": { "$anchor": "foo" }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  EXPECT_THROW(sourcemeta::jsontoolkit::frame(
                   document, static_frame,
                   sourcemeta::jsontoolkit::default_schema_walker,
                   sourcemeta::jsontoolkit::official_resolver)
                   .wait(),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(JSONSchema_frame_2019_09, explicit_argument_id_same) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::frame(document, static_frame,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver,
                                 "https://json-schema.org/draft/2019-09/schema",
                                 "https://www.sourcemeta.com/schema")
      .wait();

  EXPECT_EQ(static_frame.size(), 1);
  EXPECT_FRAME_2019_09(static_frame, "https://www.sourcemeta.com/schema",
                       "https://www.sourcemeta.com/schema", "");
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

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::frame(
      document, static_frame, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      "https://json-schema.org/draft/2019-09/schema", "https://www.example.com")
      .wait();

  EXPECT_EQ(static_frame.size(), 10);
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/schema"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/schema#foo"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/test"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/test#bar"));
  EXPECT_TRUE(static_frame.defines("https://www.example.com"));
  EXPECT_TRUE(static_frame.defines("https://www.example.com#foo"));
  EXPECT_TRUE(static_frame.defines("https://www.example.com/test"));
  EXPECT_TRUE(static_frame.defines("https://www.example.com/test#bar"));
  EXPECT_TRUE(static_frame.defines("https://www.test.com"));
  EXPECT_TRUE(static_frame.defines("https://www.test.com#baz"));

  EXPECT_FRAME_2019_09(static_frame, "https://www.sourcemeta.com/schema",
                       "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_2019_09(static_frame, "https://www.sourcemeta.com/schema#foo",
                       "https://www.sourcemeta.com/schema", "/items");
  EXPECT_FRAME_2019_09(static_frame, "https://www.sourcemeta.com/test",
                       "https://www.sourcemeta.com/schema", "/properties/one");
  EXPECT_FRAME_2019_09(static_frame, "https://www.sourcemeta.com/test#bar",
                       "https://www.sourcemeta.com/schema", "/properties/one");
  EXPECT_FRAME_2019_09(static_frame, "https://www.example.com",
                       "https://www.sourcemeta.com/schema", "");
  EXPECT_FRAME_2019_09(static_frame, "https://www.example.com#foo",
                       "https://www.sourcemeta.com/schema", "/items");
  EXPECT_FRAME_2019_09(static_frame, "https://www.example.com/test",
                       "https://www.sourcemeta.com/schema", "/properties/one");
  EXPECT_FRAME_2019_09(static_frame, "https://www.example.com/test#bar",
                       "https://www.sourcemeta.com/schema", "/properties/one");
  EXPECT_FRAME_2019_09(static_frame, "https://www.test.com",
                       "https://www.sourcemeta.com/schema", "/properties/two");
  EXPECT_FRAME_2019_09(static_frame, "https://www.test.com#baz",
                       "https://www.sourcemeta.com/schema", "/properties/two");
}
