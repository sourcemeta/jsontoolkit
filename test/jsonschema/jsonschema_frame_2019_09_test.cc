#include <gtest/gtest.h>

#include <sourcemeta/core/json.h>
#include <sourcemeta/core/jsonpointer.h>
#include <sourcemeta/core/jsonschema.h>

#include "jsonschema_test_utils.h"

#define EXPECT_FRAME_STATIC_2019_09_POINTER(                                   \
    frame, reference, root_id, expected_pointer, expected_base,                \
    expected_relative_pointer, expected_instance_locations,                    \
    expected_destination_of_size)                                              \
  EXPECT_FRAME_STATIC_POINTER(frame, reference, root_id, expected_pointer,     \
                              "https://json-schema.org/draft/2019-09/schema",  \
                              "https://json-schema.org/draft/2019-09/schema",  \
                              expected_base, expected_relative_pointer,        \
                              expected_instance_locations,                     \
                              expected_destination_of_size);

#define EXPECT_FRAME_STATIC_2019_09_RESOURCE(                                  \
    frame, reference, root_id, expected_pointer, expected_base,                \
    expected_relative_pointer, expected_instance_locations,                    \
    expected_destination_of_size)                                              \
  EXPECT_FRAME_STATIC_RESOURCE(frame, reference, root_id, expected_pointer,    \
                               "https://json-schema.org/draft/2019-09/schema", \
                               "https://json-schema.org/draft/2019-09/schema", \
                               expected_base, expected_relative_pointer,       \
                               expected_instance_locations,                    \
                               expected_destination_of_size);

#define EXPECT_FRAME_STATIC_2019_09_ANCHOR(                                    \
    frame, reference, root_id, expected_pointer, expected_base,                \
    expected_relative_pointer, expected_instance_locations,                    \
    expected_destination_of_size)                                              \
  EXPECT_FRAME_STATIC_ANCHOR(frame, reference, root_id, expected_pointer,      \
                             "https://json-schema.org/draft/2019-09/schema",   \
                             "https://json-schema.org/draft/2019-09/schema",   \
                             expected_base, expected_relative_pointer,         \
                             expected_instance_locations,                      \
                             expected_destination_of_size);

#define EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(                                 \
    frame, reference, root_id, expected_pointer, expected_base,                \
    expected_relative_pointer, expected_instance_locations,                    \
    expected_destination_of_size)                                              \
  EXPECT_FRAME_STATIC_SUBSCHEMA(                                               \
      frame, reference, root_id, expected_pointer,                             \
      "https://json-schema.org/draft/2019-09/schema",                          \
      "https://json-schema.org/draft/2019-09/schema", expected_base,           \
      expected_relative_pointer, expected_instance_locations,                  \
      expected_destination_of_size);

#define EXPECT_FRAME_DYNAMIC_2019_09_ANCHOR(                                   \
    frame, reference, root_id, expected_pointer, expected_base,                \
    expected_relative_pointer, expected_instance_locations,                    \
    expected_destination_of_size)                                              \
  EXPECT_FRAME_DYNAMIC_ANCHOR(frame, reference, root_id, expected_pointer,     \
                              "https://json-schema.org/draft/2019-09/schema",  \
                              "https://json-schema.org/draft/2019-09/schema",  \
                              expected_base, expected_relative_pointer,        \
                              expected_instance_locations,                     \
                              expected_destination_of_size);

TEST(JSONSchema_frame_2019_09, anonymous_with_nested_schema_resource) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalProperties": { "$id": "https://example.com" }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 6);

  EXPECT_ANONYMOUS_FRAME_STATIC_RESOURCE(
      frame, "https://example.com", "/additionalProperties",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {"/~P~"}, 0);

  // JSON Pointers

  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "https://example.com#/$id", "/additionalProperties/$id",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {""}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "#/additionalProperties", "/additionalProperties",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {"/~P~"}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalProperties/$id", "/additionalProperties/$id",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, empty_schema) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema"
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 3);
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", {""}, 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", {}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, empty_schema_trailing_hash) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/schema#",
    "$schema": "https://json-schema.org/draft/2019-09/schema"
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 3);
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", {""}, 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", {}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, one_level_applicators_without_identifiers) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "items": { "type": "string" },
    "properties": {
      "foo": { "type": "number" }
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 8);
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", {""}, 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/schema#/items",
      "https://www.sourcemeta.com/schema", "/items",
      "https://www.sourcemeta.com/schema", "/items", {"/~I~"}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items/type",
      "https://www.sourcemeta.com/schema", "/items/type",
      "https://www.sourcemeta.com/schema", "/items/type", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties",
      "https://www.sourcemeta.com/schema", "/properties",
      "https://www.sourcemeta.com/schema", "/properties", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/schema#/properties/foo",
      "https://www.sourcemeta.com/schema", "/properties/foo",
      "https://www.sourcemeta.com/schema", "/properties/foo", {"/foo"}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/foo/type",
      "https://www.sourcemeta.com/schema", "/properties/foo/type",
      "https://www.sourcemeta.com/schema", "/properties/foo/type", {}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, one_level_applicators_with_identifiers) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/test/qux",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "items": { "$id": "../foo", "type": "string" },
    "properties": {
      "foo": { "$anchor": "test", "type": "number" }
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 14);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/test/qux",
      "https://www.sourcemeta.com/test/qux", "",
      "https://www.sourcemeta.com/test/qux", "", {""}, 0);
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/foo",
      "https://www.sourcemeta.com/test/qux", "/items",
      "https://www.sourcemeta.com/foo", "", {"/~I~"}, 0);

  // Anchors

  EXPECT_FRAME_STATIC_2019_09_ANCHOR(
      frame, "https://www.sourcemeta.com/test/qux#test",
      "https://www.sourcemeta.com/test/qux", "/properties/foo",
      "https://www.sourcemeta.com/test/qux", "/properties/foo", {"/foo"}, 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/$id",
      "https://www.sourcemeta.com/test/qux", "/$id",
      "https://www.sourcemeta.com/test/qux", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/$schema",
      "https://www.sourcemeta.com/test/qux", "/$schema",
      "https://www.sourcemeta.com/test/qux", "/$schema", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/test/qux#/items",
      "https://www.sourcemeta.com/test/qux", "/items",
      "https://www.sourcemeta.com/foo", "", {"/~I~"}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/items/$id",
      "https://www.sourcemeta.com/test/qux", "/items/$id",
      "https://www.sourcemeta.com/foo", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/items/type",
      "https://www.sourcemeta.com/test/qux", "/items/type",
      "https://www.sourcemeta.com/foo", "/type", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/properties",
      "https://www.sourcemeta.com/test/qux", "/properties",
      "https://www.sourcemeta.com/test/qux", "/properties", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/test/qux#/properties/foo",
      "https://www.sourcemeta.com/test/qux", "/properties/foo",
      "https://www.sourcemeta.com/test/qux", "/properties/foo", {"/foo"}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/properties/foo/$anchor",
      "https://www.sourcemeta.com/test/qux", "/properties/foo/$anchor",
      "https://www.sourcemeta.com/test/qux", "/properties/foo/$anchor", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/test/qux#/properties/foo/type",
      "https://www.sourcemeta.com/test/qux", "/properties/foo/type",
      "https://www.sourcemeta.com/test/qux", "/properties/foo/type", {}, 0);

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/foo#/$id",
      "https://www.sourcemeta.com/test/qux", "/items/$id",
      "https://www.sourcemeta.com/foo", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/foo#/type",
      "https://www.sourcemeta.com/test/qux", "/items/type",
      "https://www.sourcemeta.com/foo", "/type", {}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, subschema_absolute_identifier) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "items": {
      "$id": "https://www.sourcemeta.com/foo",
      "type": "string"
     }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 9);
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", {""}, 0);
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/foo",
      "https://www.sourcemeta.com/schema", "/items",
      "https://www.sourcemeta.com/foo", "", {"/~I~"}, 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/schema#/items",
      "https://www.sourcemeta.com/schema", "/items",
      "https://www.sourcemeta.com/foo", "", {"/~I~"}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items/$id",
      "https://www.sourcemeta.com/schema", "/items/$id",
      "https://www.sourcemeta.com/foo", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items/type",
      "https://www.sourcemeta.com/schema", "/items/type",
      "https://www.sourcemeta.com/foo", "/type", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/foo#/$id",
      "https://www.sourcemeta.com/schema", "/items/$id",
      "https://www.sourcemeta.com/foo", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/foo#/type",
      "https://www.sourcemeta.com/schema", "/items/type",
      "https://www.sourcemeta.com/foo", "/type", {}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, nested_schemas) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
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

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 30);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", {""}, 0);
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/foo",
      "https://www.sourcemeta.com/schema", "/properties/foo",
      "https://www.sourcemeta.com/foo", "", {"/foo"}, 0);
  EXPECT_FRAME_STATIC_2019_09_ANCHOR(
      frame, "https://www.sourcemeta.com/foo#test",
      "https://www.sourcemeta.com/schema", "/properties/foo",
      "https://www.sourcemeta.com/foo", "", {"/foo"}, 0);
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/bar",
      "https://www.sourcemeta.com/schema", "/properties/bar",
      "https://www.sourcemeta.com/bar", "", {"/bar"}, 0);
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/baz",
      "https://www.sourcemeta.com/schema", "/properties/baz",
      "https://www.sourcemeta.com/baz", "", {"/baz"}, 0);
  EXPECT_FRAME_STATIC_2019_09_ANCHOR(
      frame, "https://www.sourcemeta.com/baz#extra",
      "https://www.sourcemeta.com/schema", "/properties/baz/items",
      "https://www.sourcemeta.com/baz", "/items", {"/baz/~I~"}, 0);
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/qux",
      "https://www.sourcemeta.com/schema", "/properties/foo/items",
      "https://www.sourcemeta.com/qux", "", {"/foo/~I~"}, 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties",
      "https://www.sourcemeta.com/schema", "/properties",
      "https://www.sourcemeta.com/schema", "/properties", {}, 0);

  // foo
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/schema#/properties/foo",
      "https://www.sourcemeta.com/schema", "/properties/foo",
      "https://www.sourcemeta.com/foo", "", {"/foo"}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/foo/$id",
      "https://www.sourcemeta.com/schema", "/properties/foo/$id",
      "https://www.sourcemeta.com/foo", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/foo/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/foo/$anchor",
      "https://www.sourcemeta.com/foo", "/$anchor", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/schema#/properties/foo/items",
      "https://www.sourcemeta.com/schema", "/properties/foo/items",
      "https://www.sourcemeta.com/qux", "", {"/foo/~I~"}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/foo/items/$id",
      "https://www.sourcemeta.com/schema", "/properties/foo/items/$id",
      "https://www.sourcemeta.com/qux", "/$id", {}, 0);

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/foo#/$id",
      "https://www.sourcemeta.com/schema", "/properties/foo/$id",
      "https://www.sourcemeta.com/foo", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/foo#/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/foo/$anchor",
      "https://www.sourcemeta.com/foo", "/$anchor", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/foo#/items",
      "https://www.sourcemeta.com/schema", "/properties/foo/items",
      "https://www.sourcemeta.com/qux", "", {"/foo/~I~"}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/foo#/items/$id",
      "https://www.sourcemeta.com/schema", "/properties/foo/items/$id",
      "https://www.sourcemeta.com/qux", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/qux#/$id",
      "https://www.sourcemeta.com/schema", "/properties/foo/items/$id",
      "https://www.sourcemeta.com/qux", "/$id", {}, 0);

  // bar
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/schema#/properties/bar",
      "https://www.sourcemeta.com/schema", "/properties/bar",
      "https://www.sourcemeta.com/bar", "", {"/bar"}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/bar/$id",
      "https://www.sourcemeta.com/schema", "/properties/bar/$id",
      "https://www.sourcemeta.com/bar", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/bar#/$id",
      "https://www.sourcemeta.com/schema", "/properties/bar/$id",
      "https://www.sourcemeta.com/bar", "/$id", {}, 0);

  // baz
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/schema#/properties/baz",
      "https://www.sourcemeta.com/schema", "/properties/baz",
      "https://www.sourcemeta.com/baz", "", {"/baz"}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/baz/$id",
      "https://www.sourcemeta.com/schema", "/properties/baz/$id",
      "https://www.sourcemeta.com/baz", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/schema#/properties/baz/items",
      "https://www.sourcemeta.com/schema", "/properties/baz/items",
      "https://www.sourcemeta.com/baz", "/items", {"/baz/~I~"}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/baz/items/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/baz/items/$anchor",
      "https://www.sourcemeta.com/baz", "/items/$anchor", {}, 0);

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/baz#/$id",
      "https://www.sourcemeta.com/schema", "/properties/baz/$id",
      "https://www.sourcemeta.com/baz", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/baz#/items",
      "https://www.sourcemeta.com/schema", "/properties/baz/items",
      "https://www.sourcemeta.com/baz", "/items", {"/baz/~I~"}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/baz#/items/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/baz/items/$anchor",
      "https://www.sourcemeta.com/baz", "/items/$anchor", {}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, id_override) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "items": { "$id": "schema" }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  EXPECT_THROW(frame.analyse(document, sourcemeta::core::schema_official_walker,
                             sourcemeta::core::schema_official_resolver),
               sourcemeta::core::SchemaError);
}

TEST(JSONSchema_frame_2019_09, static_anchor_override) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$anchor": "foo",
    "items": { "$anchor": "foo" }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  EXPECT_THROW(frame.analyse(document, sourcemeta::core::schema_official_walker,
                             sourcemeta::core::schema_official_resolver),
               sourcemeta::core::SchemaError);
}

TEST(JSONSchema_frame_2019_09, explicit_argument_id_same) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema"
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver,
                "https://json-schema.org/draft/2019-09/schema",
                "https://www.sourcemeta.com/schema");

  EXPECT_EQ(frame.locations().size(), 3);
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", {""}, 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", {}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, anchor_top_level) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$anchor": "foo"
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 5);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", {""}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$anchor",
      "https://www.sourcemeta.com/schema", "/$anchor",
      "https://www.sourcemeta.com/schema", "/$anchor", {}, 0);

  // Anchors

  EXPECT_FRAME_STATIC_2019_09_ANCHOR(
      frame, "https://www.sourcemeta.com/schema#foo",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", {""}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, explicit_argument_id_different) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
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

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver,
                "https://json-schema.org/draft/2019-09/schema",
                "https://www.example.com");

  EXPECT_EQ(frame.locations().size(), 38);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", {""}, 0);
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/test",
      "https://www.sourcemeta.com/schema", "/properties/one",
      "https://www.sourcemeta.com/test", "", {"/one"}, 0);
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.example.com", "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", {""}, 0);
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.example.com/test",
      "https://www.sourcemeta.com/schema", "/properties/one",
      "https://www.example.com/test", "", {"/one"}, 0);
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.test.com", "https://www.sourcemeta.com/schema",
      "/properties/two", "https://www.test.com", "", {"/two"}, 0);

  // Anchors

  EXPECT_FRAME_STATIC_2019_09_ANCHOR(
      frame, "https://www.sourcemeta.com/schema#foo",
      "https://www.sourcemeta.com/schema", "/items",
      "https://www.sourcemeta.com/schema", "/items", {"/~I~"}, 0);
  EXPECT_FRAME_STATIC_2019_09_ANCHOR(
      frame, "https://www.example.com#foo", "https://www.sourcemeta.com/schema",
      "/items", "https://www.example.com", "/items", {"/~I~"}, 0);
  EXPECT_FRAME_STATIC_2019_09_ANCHOR(
      frame, "https://www.sourcemeta.com/test#bar",
      "https://www.sourcemeta.com/schema", "/properties/one",
      "https://www.sourcemeta.com/test", "", {"/one"}, 0);
  EXPECT_FRAME_STATIC_2019_09_ANCHOR(
      frame, "https://www.example.com/test#bar",
      "https://www.sourcemeta.com/schema", "/properties/one",
      "https://www.example.com/test", "", {"/one"}, 0);
  EXPECT_FRAME_STATIC_2019_09_ANCHOR(
      frame, "https://www.test.com#baz", "https://www.sourcemeta.com/schema",
      "/properties/two", "https://www.test.com", "", {"/two"}, 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id", "https://www.example.com",
      "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.example.com", "/$schema", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/schema#/items",
      "https://www.sourcemeta.com/schema", "/items", "https://www.example.com",
      "/items", {"/~I~"}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/items/$anchor",
      "https://www.sourcemeta.com/schema", "/items/$anchor",
      "https://www.example.com", "/items/$anchor", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties",
      "https://www.sourcemeta.com/schema", "/properties",
      "https://www.example.com", "/properties", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/schema#/properties/one",
      "https://www.sourcemeta.com/schema", "/properties/one",
      "https://www.example.com/test", "", {"/one"}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/one/$id",
      "https://www.sourcemeta.com/schema", "/properties/one/$id",
      "https://www.example.com/test", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/one/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/one/$anchor",
      "https://www.example.com/test", "/$anchor", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/schema#/properties/two",
      "https://www.sourcemeta.com/schema", "/properties/two",
      "https://www.test.com", "", {"/two"}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/two/$id",
      "https://www.sourcemeta.com/schema", "/properties/two/$id",
      "https://www.test.com", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/properties/two/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/two/$anchor",
      "https://www.test.com", "/$anchor", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/test#/$id",
      "https://www.sourcemeta.com/schema", "/properties/one/$id",
      "https://www.example.com/test", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/test#/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/one/$anchor",
      "https://www.example.com/test", "/$anchor", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.test.com#/$id", "https://www.sourcemeta.com/schema",
      "/properties/two/$id", "https://www.test.com", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.test.com#/$anchor",
      "https://www.sourcemeta.com/schema", "/properties/two/$anchor",
      "https://www.test.com", "/$anchor", {}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, ref_metaschema) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$ref": "https://json-schema.org/draft/2019-09/schema"
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 3);

  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {""}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$ref", "/$ref", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 2);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(
      frame, "/$ref", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, location_independent_identifier_anonymous) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
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

  sourcemeta::core::SchemaFrame frame;

  EXPECT_THROW(frame.analyse(document, sourcemeta::core::schema_official_walker,
                             sourcemeta::core::schema_official_resolver),
               sourcemeta::core::SchemaError);
}

TEST(JSONSchema_frame_2019_09, recursive_anchor_true_with_id) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": true
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 5);

  // Dynamic anchors

  EXPECT_FRAME_DYNAMIC_2019_09_ANCHOR(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", {""}, 0);

  // Static identifiers

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", {""}, 0);

  // Static pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/$recursiveAnchor", {}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_anchor_false_with_id) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": false
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 4);

  // Static identifiers

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", {""}, 0);

  // Static pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/$recursiveAnchor", {}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_anchor_true_without_id) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "properties": {
      "foo": {
        "$recursiveAnchor": true
      }
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 6);

  // Dynamic anchors

  EXPECT_ANONYMOUS_FRAME_DYNAMIC_ANCHOR(
      frame, "", "/properties/foo",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {"/foo"}, 0);

  // Static frames

  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {""}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/properties", "/properties",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "#/properties/foo", "/properties/foo",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {"/foo"}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/properties/foo/$recursiveAnchor",
      "/properties/foo/$recursiveAnchor",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_anchor_false_without_id) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "properties": {
      "foo": {
        "$recursiveAnchor": false
      }
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 5);

  // Static frames

  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {""}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/properties", "/properties",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "#/properties/foo", "/properties/foo",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {"/foo"}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/properties/foo/$recursiveAnchor",
      "/properties/foo/$recursiveAnchor",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_ref_no_recursive_anchor_anonymous) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalItems": {
      "$recursiveRef": "#"
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 4);

  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {""}, 1);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "#/additionalItems", "/additionalItems",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {"/~I~"}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems/$recursiveRef",
      "/additionalItems/$recursiveRef",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 2);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(frame, "/additionalItems/$recursiveRef", "",
                          std::nullopt, std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_ref_no_recursive_anchor) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalItems": {
      "$recursiveRef": "#"
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 5);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", {""}, 1);

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/schema#/additionalItems",
      "https://www.sourcemeta.com/schema", "/additionalItems",
      "https://www.sourcemeta.com/schema", "/additionalItems", {"/~I~"}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/additionalItems/$recursiveRef",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveRef",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveRef", {},
      0);

  // References

  EXPECT_EQ(frame.references().size(), 2);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(frame, "/additionalItems/$recursiveRef",
                          "https://www.sourcemeta.com/schema",
                          "https://www.sourcemeta.com/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_ref_recursive_anchor_false_anonymous) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": false,
    "additionalItems": {
      "$recursiveRef": "#"
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 5);

  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {""}, 1);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$recursiveAnchor", "/$recursiveAnchor",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "#/additionalItems", "/additionalItems",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {"/~I~"}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems/$recursiveRef",
      "/additionalItems/$recursiveRef",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 2);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(frame, "/additionalItems/$recursiveRef", "",
                          std::nullopt, std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_ref_recursive_anchor_false) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": false,
    "additionalItems": {
      "$recursiveRef": "#"
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 6);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", {""}, 1);

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/$recursiveAnchor", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/schema#/additionalItems",
      "https://www.sourcemeta.com/schema", "/additionalItems",
      "https://www.sourcemeta.com/schema", "/additionalItems", {"/~I~"}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/additionalItems/$recursiveRef",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveRef",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveRef", {},
      0);

  // References

  EXPECT_EQ(frame.references().size(), 2);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(frame, "/additionalItems/$recursiveRef",
                          "https://www.sourcemeta.com/schema",
                          "https://www.sourcemeta.com/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_ref_recursive_anchor_true_anonymous) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": true,
    "additionalItems": {
      "$recursiveRef": "#"
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 6);

  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {""}, 1);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$recursiveAnchor", "/$recursiveAnchor",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "#/additionalItems", "/additionalItems",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {"/~I~"}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems/$recursiveRef",
      "/additionalItems/$recursiveRef",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);

  // Anchors

  EXPECT_ANONYMOUS_FRAME_DYNAMIC_ANCHOR(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {""}, 1);

  // References

  EXPECT_EQ(frame.references().size(), 2);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_DYNAMIC_REFERENCE(frame, "/additionalItems/$recursiveRef", "",
                           std::nullopt, std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_ref_recursive_anchor_true) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": true,
    "additionalItems": {
      "$recursiveRef": "#"
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 7);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", {""}, 1);

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/$recursiveAnchor", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/schema#/additionalItems",
      "https://www.sourcemeta.com/schema", "/additionalItems",
      "https://www.sourcemeta.com/schema", "/additionalItems", {"/~I~"}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/additionalItems/$recursiveRef",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveRef",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveRef", {},
      0);

  // Anchors

  EXPECT_FRAME_DYNAMIC_2019_09_ANCHOR(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", {""}, 1);

  // References

  EXPECT_EQ(frame.references().size(), 2);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_DYNAMIC_REFERENCE(frame, "/additionalItems/$recursiveRef",
                           "https://www.sourcemeta.com/schema",
                           "https://www.sourcemeta.com/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09,
     recursive_ref_recursive_anchor_false_anonymous_nested) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalItems": {
      "$id": "https://example.com",
      "$recursiveAnchor": false,
      "$recursiveRef": "#"
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 10);

  EXPECT_ANONYMOUS_FRAME_STATIC_RESOURCE(
      frame, "https://example.com", "/additionalItems",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {"/~I~"}, 2);

  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {""}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "#/additionalItems", "/additionalItems",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {"/~I~"}, 2);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems/$id", "/additionalItems/$id",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems/$recursiveAnchor",
      "/additionalItems/$recursiveAnchor",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems/$recursiveRef",
      "/additionalItems/$recursiveRef",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);

  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "https://example.com#/$id", "/additionalItems/$id",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "https://example.com#/$recursiveAnchor",
      "/additionalItems/$recursiveAnchor",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "https://example.com#/$recursiveRef",
      "/additionalItems/$recursiveRef",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 2);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(frame, "/additionalItems/$recursiveRef",
                          "https://example.com", "https://example.com",
                          std::nullopt);
}

TEST(JSONSchema_frame_2019_09,
     recursive_ref_recursive_anchor_true_anonymous_nested) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalItems": {
      "$id": "https://example.com",
      "$recursiveAnchor": true,
      "$recursiveRef": "#"
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 11);

  EXPECT_ANONYMOUS_FRAME_STATIC_RESOURCE(
      frame, "https://example.com", "/additionalItems",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {"/~I~"}, 2);

  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {""}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "#/additionalItems", "/additionalItems",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {"/~I~"}, 2);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems/$id", "/additionalItems/$id",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems/$recursiveAnchor",
      "/additionalItems/$recursiveAnchor",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems/$recursiveRef",
      "/additionalItems/$recursiveRef",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);

  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "https://example.com#/$id", "/additionalItems/$id",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "https://example.com#/$recursiveAnchor",
      "/additionalItems/$recursiveAnchor",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "https://example.com#/$recursiveRef",
      "/additionalItems/$recursiveRef",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);

  // Anchors

  EXPECT_ANONYMOUS_FRAME_DYNAMIC_ANCHOR(
      frame, "https://example.com", "/additionalItems",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {"/~I~"}, 2);

  // References

  EXPECT_EQ(frame.references().size(), 2);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_DYNAMIC_REFERENCE(frame, "/additionalItems/$recursiveRef",
                           "https://example.com", "https://example.com",
                           std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_ref_nested_recursive_anchor_true) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalItems": {
      "$recursiveAnchor": true,
      "$recursiveRef": "#"
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 7);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", {""}, 0);

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame,
      "https://www.sourcemeta.com/schema#/additionalItems/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveAnchor",
      {}, 0);
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/schema#/additionalItems",
      "https://www.sourcemeta.com/schema", "/additionalItems",
      "https://www.sourcemeta.com/schema", "/additionalItems", {"/~I~"}, 1);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/additionalItems/$recursiveRef",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveRef",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveRef", {},
      0);

  // Anchors

  EXPECT_FRAME_DYNAMIC_2019_09_ANCHOR(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "/additionalItems",
      "https://www.sourcemeta.com/schema", "/additionalItems", {"/~I~"}, 1);

  // References

  EXPECT_EQ(frame.references().size(), 2);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_DYNAMIC_REFERENCE(frame, "/additionalItems/$recursiveRef",
                           "https://www.sourcemeta.com/schema",
                           "https://www.sourcemeta.com/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_ref_multiple_recursive_anchor_true) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": true,
    "additionalItems": {
      "$id": "nested",
      "$recursiveAnchor": true,
      "$recursiveRef": "#"
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 14);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", {""}, 0);
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/nested",
      "https://www.sourcemeta.com/schema", "/additionalItems",
      "https://www.sourcemeta.com/nested", "", {"/~I~"}, 2);

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/$recursiveAnchor", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/schema#/additionalItems",
      "https://www.sourcemeta.com/schema", "/additionalItems",
      "https://www.sourcemeta.com/nested", "", {"/~I~"}, 2);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/additionalItems/$id",
      "https://www.sourcemeta.com/schema", "/additionalItems/$id",
      "https://www.sourcemeta.com/nested", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame,
      "https://www.sourcemeta.com/schema#/additionalItems/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveAnchor",
      "https://www.sourcemeta.com/nested", "/$recursiveAnchor", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/additionalItems/$recursiveRef",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveRef",
      "https://www.sourcemeta.com/nested", "/$recursiveRef", {}, 0);

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/nested#/$id",
      "https://www.sourcemeta.com/schema", "/additionalItems/$id",
      "https://www.sourcemeta.com/nested", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/nested#/$recursiveAnchor",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveAnchor",
      "https://www.sourcemeta.com/nested", "/$recursiveAnchor", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/nested#/$recursiveRef",
      "https://www.sourcemeta.com/schema", "/additionalItems/$recursiveRef",
      "https://www.sourcemeta.com/nested", "/$recursiveRef", {}, 0);

  // Anchors

  EXPECT_FRAME_DYNAMIC_2019_09_ANCHOR(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", {""}, 0);
  EXPECT_FRAME_DYNAMIC_2019_09_ANCHOR(
      frame, "https://www.sourcemeta.com/nested",
      "https://www.sourcemeta.com/schema", "/additionalItems",
      "https://www.sourcemeta.com/nested", "", {"/~I~"}, 2);

  // References

  EXPECT_EQ(frame.references().size(), 2);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_DYNAMIC_REFERENCE(frame, "/additionalItems/$recursiveRef",
                           "https://www.sourcemeta.com/nested",
                           "https://www.sourcemeta.com/nested", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, recursive_anchor_conflict) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": true,
    "items": {
      "$recursiveAnchor": true
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  EXPECT_THROW(frame.analyse(document, sourcemeta::core::schema_official_walker,
                             sourcemeta::core::schema_official_resolver),
               sourcemeta::core::SchemaError);
}

TEST(JSONSchema_frame_2019_09, invalid_recursive_ref) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveRef": "nested#"
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  EXPECT_THROW(frame.analyse(document, sourcemeta::core::schema_official_walker,
                             sourcemeta::core::schema_official_resolver),
               sourcemeta::core::SchemaError);
}

TEST(JSONSchema_frame_2019_09, recursive_anchor_on_relative_id) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$recursiveAnchor": true,
    "additionalItems": {
      "$id": "middle",
      "$recursiveAnchor": true
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 11);

  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {""}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_RESOURCE(
      frame, "middle", "/additionalItems",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {"/~I~"}, 0);

  // JSON Pointers

  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {""}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$schema", "/$schema",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/$recursiveAnchor", "/$recursiveAnchor",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);

  EXPECT_ANONYMOUS_FRAME_STATIC_SUBSCHEMA(
      frame, "#/additionalItems", "/additionalItems",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {"/~I~"}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems/$id", "/additionalItems/$id",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "#/additionalItems/$recursiveAnchor",
      "/additionalItems/$recursiveAnchor",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);
  EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(
      frame, "middle#/$recursiveAnchor", "/additionalItems/$recursiveAnchor",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {}, 0);

  // Anchors

  EXPECT_ANONYMOUS_FRAME_DYNAMIC_ANCHOR(
      frame, "", "", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {""}, 0);
  EXPECT_ANONYMOUS_FRAME_DYNAMIC_ANCHOR(
      frame, "middle", "/additionalItems",
      "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", {"/~I~"}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, ref_with_id) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$ref": "#/$defs/string",
    "$defs": {
      "string": { "type": "string" }
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 7);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", {""}, 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$ref",
      "https://www.sourcemeta.com/schema", "/$ref",
      "https://www.sourcemeta.com/schema", "/$ref", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$defs",
      "https://www.sourcemeta.com/schema", "/$defs",
      "https://www.sourcemeta.com/schema", "/$defs", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/schema#/$defs/string",
      "https://www.sourcemeta.com/schema", "/$defs/string",
      "https://www.sourcemeta.com/schema", "/$defs/string", {}, 1);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$defs/string/type",
      "https://www.sourcemeta.com/schema", "/$defs/string/type",
      "https://www.sourcemeta.com/schema", "/$defs/string/type", {}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 2);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(frame, "/$ref",
                          "https://www.sourcemeta.com/schema#/$defs/string",
                          "https://www.sourcemeta.com/schema", "/$defs/string");
}

TEST(JSONSchema_frame_2019_09, ref_from_definitions) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$ref": "#/definitions/middle",
    "definitions": {
      "middle": { "$ref": "#/definitions/string" },
      "string": { "type": "string" }
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 9);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(
      frame, "https://www.sourcemeta.com/schema",
      "https://www.sourcemeta.com/schema", "",
      "https://www.sourcemeta.com/schema", "", {""}, 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$id",
      "https://www.sourcemeta.com/schema", "/$id",
      "https://www.sourcemeta.com/schema", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$schema",
      "https://www.sourcemeta.com/schema", "/$schema",
      "https://www.sourcemeta.com/schema", "/$schema", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/$ref",
      "https://www.sourcemeta.com/schema", "/$ref",
      "https://www.sourcemeta.com/schema", "/$ref", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/definitions",
      "https://www.sourcemeta.com/schema", "/definitions",
      "https://www.sourcemeta.com/schema", "/definitions", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/schema#/definitions/middle",
      "https://www.sourcemeta.com/schema", "/definitions/middle",
      "https://www.sourcemeta.com/schema", "/definitions/middle", {}, 1);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/definitions/middle/$ref",
      "https://www.sourcemeta.com/schema", "/definitions/middle/$ref",
      "https://www.sourcemeta.com/schema", "/definitions/middle/$ref", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(
      frame, "https://www.sourcemeta.com/schema#/definitions/string",
      "https://www.sourcemeta.com/schema", "/definitions/string",
      "https://www.sourcemeta.com/schema", "/definitions/string", {}, 1);
  EXPECT_FRAME_STATIC_2019_09_POINTER(
      frame, "https://www.sourcemeta.com/schema#/definitions/string/type",
      "https://www.sourcemeta.com/schema", "/definitions/string/type",
      "https://www.sourcemeta.com/schema", "/definitions/string/type", {}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 3);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(
      frame, "/$ref", "https://www.sourcemeta.com/schema#/definitions/middle",
      "https://www.sourcemeta.com/schema", "/definitions/middle");
  EXPECT_STATIC_REFERENCE(
      frame, "/definitions/middle/$ref",
      "https://www.sourcemeta.com/schema#/definitions/string",
      "https://www.sourcemeta.com/schema", "/definitions/string");
}

TEST(JSONSchema_frame_2019_09, relative_base_uri_without_ref) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "common"
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 3);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame, "common", "common", "", "common",
                                       "", {""}, 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(frame, "common#/$schema", "common",
                                      "/$schema", "common", "/$schema", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(frame, "common#/$id", "common", "/$id",
                                      "common", "/$id", {}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}

TEST(JSONSchema_frame_2019_09, relative_base_uri_with_ref) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "common",
    "allOf": [ { "$ref": "#foo" } ],
    "$defs": {
      "foo": {
        "$anchor": "foo"
      }
    }
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 10);

  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame, "common", "common", "", "common",
                                       "", {""}, 0);

  // Anchors
  EXPECT_FRAME_STATIC_2019_09_ANCHOR(frame, "common#foo", "common",
                                     "/$defs/foo", "common", "/$defs/foo", {""},
                                     1);

  // JSON Pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(frame, "common#/$schema", "common",
                                      "/$schema", "common", "/$schema", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(frame, "common#/$id", "common", "/$id",
                                      "common", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(frame, "common#/allOf", "common",
                                      "/allOf", "common", "/allOf", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(frame, "common#/allOf/0", "common",
                                        "/allOf/0", "common", "/allOf/0", {""},
                                        0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(frame, "common#/allOf/0/$ref", "common",
                                      "/allOf/0/$ref", "common",
                                      "/allOf/0/$ref", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(frame, "common#/$defs", "common",
                                      "/$defs", "common", "/$defs", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_SUBSCHEMA(frame, "common#/$defs/foo", "common",
                                        "/$defs/foo", "common", "/$defs/foo",
                                        {}, 1);
  EXPECT_FRAME_STATIC_2019_09_POINTER(frame, "common#/$defs/foo/$anchor",
                                      "common", "/$defs/foo/$anchor", "common",
                                      "/$defs/foo/$anchor", {}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 2);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
  EXPECT_STATIC_REFERENCE(frame, "/allOf/0/$ref", "common#foo", "common",
                          "foo");
}

TEST(JSONSchema_frame_2019_09, relative_id_leading_slash) {
  const sourcemeta::core::JSON document = sourcemeta::core::parse_json(R"JSON({
    "$id": "/base",
    "$schema": "https://json-schema.org/draft/2019-09/schema"
  })JSON");

  sourcemeta::core::SchemaFrame frame;
  frame.analyse(document, sourcemeta::core::schema_official_walker,
                sourcemeta::core::schema_official_resolver);

  EXPECT_EQ(frame.locations().size(), 3);
  EXPECT_FRAME_STATIC_2019_09_RESOURCE(frame, "/base", "/base", "", "/base", "",
                                       {""}, 0);

  // JSON Pointers

  EXPECT_FRAME_STATIC_2019_09_POINTER(frame, "/base#/$id", "/base", "/$id",
                                      "/base", "/$id", {}, 0);
  EXPECT_FRAME_STATIC_2019_09_POINTER(frame, "/base#/$schema", "/base",
                                      "/$schema", "/base", "/$schema", {}, 0);

  // References

  EXPECT_EQ(frame.references().size(), 1);

  EXPECT_STATIC_REFERENCE(
      frame, "/$schema", "https://json-schema.org/draft/2019-09/schema",
      "https://json-schema.org/draft/2019-09/schema", std::nullopt);
}
