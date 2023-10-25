#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_frame_draft3, empty_schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-03/schema#"
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::frame(document, static_frame,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 1);
  EXPECT_TRUE(static_frame.contains("https://www.sourcemeta.com/schema"));
  EXPECT_EQ(std::get<0>(static_frame.at("https://www.sourcemeta.com/schema")),
            sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(std::get<1>(static_frame.at("https://www.sourcemeta.com/schema")),
            "http://json-schema.org/draft-03/schema#");
}

TEST(JSONSchema_frame_draft3, one_level_applicators_without_identifiers) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-03/schema#",
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
  EXPECT_TRUE(static_frame.contains("https://www.sourcemeta.com/schema"));
  EXPECT_EQ(std::get<0>(static_frame.at("https://www.sourcemeta.com/schema")),
            sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(std::get<1>(static_frame.at("https://www.sourcemeta.com/schema")),
            "http://json-schema.org/draft-03/schema#");
}

TEST(JSONSchema_frame_draft3, one_level_applicators_with_identifiers) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://www.sourcemeta.com/test/qux",
    "$schema": "http://json-schema.org/draft-03/schema#",
    "items": { "id": "../foo", "type": "string" }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::frame(document, static_frame,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 2);

  EXPECT_TRUE(static_frame.contains("https://www.sourcemeta.com/test/qux"));
  EXPECT_EQ(std::get<0>(static_frame.at("https://www.sourcemeta.com/test/qux")),
            sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(std::get<1>(static_frame.at("https://www.sourcemeta.com/test/qux")),
            "http://json-schema.org/draft-03/schema#");

  EXPECT_TRUE(static_frame.contains("https://www.sourcemeta.com/foo"));
  EXPECT_EQ(std::get<0>(static_frame.at("https://www.sourcemeta.com/foo")),
            sourcemeta::jsontoolkit::Pointer{"items"});
  EXPECT_EQ(std::get<1>(static_frame.at("https://www.sourcemeta.com/foo")),
            "http://json-schema.org/draft-03/schema#");
}

TEST(JSONSchema_frame_draft3, subschema_absolute_identifier) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-03/schema#",
    "items": {
      "id": "https://www.sourcemeta.com/foo",
      "type": "string"
     }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  sourcemeta::jsontoolkit::frame(document, static_frame,
                                 sourcemeta::jsontoolkit::default_schema_walker,
                                 sourcemeta::jsontoolkit::official_resolver)
      .wait();

  EXPECT_EQ(static_frame.size(), 2);

  EXPECT_TRUE(static_frame.contains("https://www.sourcemeta.com/schema"));
  EXPECT_EQ(std::get<0>(static_frame.at("https://www.sourcemeta.com/schema")),
            sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(std::get<1>(static_frame.at("https://www.sourcemeta.com/schema")),
            "http://json-schema.org/draft-03/schema#");

  EXPECT_TRUE(static_frame.contains("https://www.sourcemeta.com/foo"));
  EXPECT_EQ(std::get<0>(static_frame.at("https://www.sourcemeta.com/foo")),
            sourcemeta::jsontoolkit::Pointer{"items"});
  EXPECT_EQ(std::get<1>(static_frame.at("https://www.sourcemeta.com/foo")),
            "http://json-schema.org/draft-03/schema#");
}

TEST(JSONSchema_frame_draft3, id_override) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "https://www.sourcemeta.com/schema",
    "$schema": "http://json-schema.org/draft-03/schema#",
    "items": { "id": "schema" }
  })JSON");

  sourcemeta::jsontoolkit::ReferenceFrame static_frame;
  EXPECT_THROW(sourcemeta::jsontoolkit::frame(
                   document, static_frame,
                   sourcemeta::jsontoolkit::default_schema_walker,
                   sourcemeta::jsontoolkit::official_resolver)
                   .wait(),
               sourcemeta::jsontoolkit::SchemaError);
}
