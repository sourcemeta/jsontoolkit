#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_frame_2020_12, empty_schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::frame(document, static_frame,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 1);
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/schema"));
  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/schema"),
            "https://www.sourcemeta.com/schema");
  EXPECT_EQ(static_frame.pointer("https://www.sourcemeta.com/schema"),
            sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(static_frame.dialect("https://www.sourcemeta.com/schema"),
            "https://json-schema.org/draft/2020-12/schema");
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
  sourcemeta::jsontoolkit::frame(document, static_frame,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 1);
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/schema"));
  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/schema"),
            "https://www.sourcemeta.com/schema");
  EXPECT_EQ(static_frame.pointer("https://www.sourcemeta.com/schema"),
            sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(static_frame.dialect("https://www.sourcemeta.com/schema"),
            "https://json-schema.org/draft/2020-12/schema");
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
  sourcemeta::jsontoolkit::frame(document, static_frame,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 3);

  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/test/qux"));
  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/test/qux"),
            "https://www.sourcemeta.com/test/qux");
  EXPECT_EQ(static_frame.pointer("https://www.sourcemeta.com/test/qux"),
            sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(static_frame.dialect("https://www.sourcemeta.com/test/qux"),
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/foo"));
  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/foo"),
            "https://www.sourcemeta.com/test/qux");
  EXPECT_EQ(static_frame.pointer("https://www.sourcemeta.com/foo"),
            sourcemeta::jsontoolkit::Pointer{"items"});
  EXPECT_EQ(static_frame.dialect("https://www.sourcemeta.com/foo"),
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/test/qux#test"));
  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/test/qux#test"),
            "https://www.sourcemeta.com/test/qux");
  EXPECT_EQ(static_frame.pointer("https://www.sourcemeta.com/test/qux#test"),
            sourcemeta::jsontoolkit::Pointer({"properties", "foo"}));
  EXPECT_EQ(static_frame.dialect("https://www.sourcemeta.com/test/qux#test"),
            "https://json-schema.org/draft/2020-12/schema");
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
  sourcemeta::jsontoolkit::frame(document, static_frame,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 2);

  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/schema"));
  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/schema"),
            "https://www.sourcemeta.com/schema");
  EXPECT_EQ(static_frame.pointer("https://www.sourcemeta.com/schema"),
            sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(static_frame.dialect("https://www.sourcemeta.com/schema"),
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/foo"));
  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/foo"),
            "https://www.sourcemeta.com/schema");
  EXPECT_EQ(static_frame.pointer("https://www.sourcemeta.com/foo"),
            sourcemeta::jsontoolkit::Pointer{"items"});
  EXPECT_EQ(static_frame.dialect("https://www.sourcemeta.com/foo"),
            "https://json-schema.org/draft/2020-12/schema");
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
  sourcemeta::jsontoolkit::frame(document, static_frame,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 7);
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/schema"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/foo"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/foo#test"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/bar"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/baz"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/baz#extra"));
  EXPECT_TRUE(static_frame.defines("https://www.sourcemeta.com/qux"));

  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/schema"),
            "https://www.sourcemeta.com/schema");
  EXPECT_EQ(static_frame.pointer("https://www.sourcemeta.com/schema"),
            sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(static_frame.dialect("https://www.sourcemeta.com/schema"),
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/foo"),
            "https://www.sourcemeta.com/schema");
  EXPECT_EQ(static_frame.pointer("https://www.sourcemeta.com/foo"),
            sourcemeta::jsontoolkit::Pointer({"properties", "foo"}));
  EXPECT_EQ(static_frame.dialect("https://www.sourcemeta.com/foo"),
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/foo#test"),
            "https://www.sourcemeta.com/schema");
  EXPECT_EQ(static_frame.pointer("https://www.sourcemeta.com/foo#test"),
            sourcemeta::jsontoolkit::Pointer({"properties", "foo"}));
  EXPECT_EQ(static_frame.dialect("https://www.sourcemeta.com/foo#test"),
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/bar"),
            "https://www.sourcemeta.com/schema");
  EXPECT_EQ(static_frame.pointer("https://www.sourcemeta.com/bar"),
            sourcemeta::jsontoolkit::Pointer({"properties", "bar"}));
  EXPECT_EQ(static_frame.dialect("https://www.sourcemeta.com/bar"),
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/baz"),
            "https://www.sourcemeta.com/schema");
  EXPECT_EQ(static_frame.pointer("https://www.sourcemeta.com/baz"),
            sourcemeta::jsontoolkit::Pointer({"properties", "baz"}));
  EXPECT_EQ(static_frame.dialect("https://www.sourcemeta.com/baz"),
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/baz#extra"),
            "https://www.sourcemeta.com/schema");
  EXPECT_EQ(static_frame.pointer("https://www.sourcemeta.com/baz#extra"),
            sourcemeta::jsontoolkit::Pointer({"properties", "baz", "items"}));
  EXPECT_EQ(static_frame.dialect("https://www.sourcemeta.com/baz#extra"),
            "https://json-schema.org/draft/2020-12/schema");

  EXPECT_EQ(static_frame.base("https://www.sourcemeta.com/qux"),
            "https://www.sourcemeta.com/schema");
  EXPECT_EQ(static_frame.pointer("https://www.sourcemeta.com/qux"),
            sourcemeta::jsontoolkit::Pointer({"properties", "foo", "items"}));
  EXPECT_EQ(static_frame.dialect("https://www.sourcemeta.com/qux"),
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_frame_2020_12, id_override) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
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

TEST(JSONSchema_frame_2020_12, static_anchor_override) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/schema",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
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
