#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <string>      // std::string
#include <string_view> // std::string_view

static auto test_resolver(std::string_view identifier)
    -> std::optional<sourcemeta::jsontoolkit::JSON> {
  if (identifier == "https://www.sourcemeta.com/test-1") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://www.sourcemeta.com/test-1",
      "type": "string"
    })JSON");
  } else if (identifier == "https://www.sourcemeta.com/test-2") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2019-09/schema",
      "$id": "https://www.sourcemeta.com/test-2",
      "$ref": "test-3"
    })JSON");
  } else if (identifier == "https://www.sourcemeta.com/test-3") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "http://json-schema.org/draft-06/schema#",
      "$id": "https://www.sourcemeta.com/test-3",
      "allOf": [ { "$ref": "test-4" } ]
    })JSON");
  } else if (identifier == "https://www.sourcemeta.com/test-4") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "http://json-schema.org/draft-04/schema#",
      "id": "https://www.sourcemeta.com/test-4",
      "type": "string"
    })JSON");
  } else if (identifier == "https://www.sourcemeta.com/no-dialect") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "foo": 1
    })JSON");
  } else if (identifier == "https://www.sourcemeta.com/array") {
    return sourcemeta::jsontoolkit::parse(R"JSON([
      "foo", "bar", "baz"
    ])JSON");
  } else {
    return sourcemeta::jsontoolkit::official_resolver(identifier);
  }
}

TEST(JSONSchema_bundle, across_dialects) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.example.com",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "items": { "$ref": "https://www.sourcemeta.com/test-2" }
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.example.com",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "items": { "$ref": "https://www.sourcemeta.com/test-2" },
    "$defs": {
      "https://www.sourcemeta.com/test-2": {
        "$schema": "https://json-schema.org/draft/2019-09/schema",
        "$id": "https://www.sourcemeta.com/test-2",
        "$ref": "test-3"
      },
      "https://www.sourcemeta.com/test-3": {
        "$schema": "http://json-schema.org/draft-06/schema#",
        "$id": "https://www.sourcemeta.com/test-3",
        "allOf": [ { "$ref": "test-4" } ]
      },
      "https://www.sourcemeta.com/test-4": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "https://www.sourcemeta.com/test-4",
        "type": "string"
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle, across_dialects_const) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.example.com",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "items": { "$ref": "https://www.sourcemeta.com/test-2" }
  })JSON");

  const auto result = sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.example.com",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "items": { "$ref": "https://www.sourcemeta.com/test-2" },
    "$defs": {
      "https://www.sourcemeta.com/test-2": {
        "$schema": "https://json-schema.org/draft/2019-09/schema",
        "$id": "https://www.sourcemeta.com/test-2",
        "$ref": "test-3"
      },
      "https://www.sourcemeta.com/test-3": {
        "$schema": "http://json-schema.org/draft-06/schema#",
        "$id": "https://www.sourcemeta.com/test-3",
        "allOf": [ { "$ref": "test-4" } ]
      },
      "https://www.sourcemeta.com/test-4": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "https://www.sourcemeta.com/test-4",
        "type": "string"
      }
    }
  })JSON");

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_bundle, with_default_dialect) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "properties": {
      "foo": { "$ref": "https://www.sourcemeta.com/test-1" }
    }
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver,
      sourcemeta::jsontoolkit::BundleOptions::Default,
      "https://json-schema.org/draft/2020-12/schema");

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "properties": {
      "foo": { "$ref": "https://www.sourcemeta.com/test-1" }
    },
    "$defs": {
      "https://www.sourcemeta.com/test-1": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://www.sourcemeta.com/test-1",
        "type": "string"
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle, without_default_dialect) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "properties": {
      "foo": { "$ref": "https://www.sourcemeta.com/test-1" }
    }
  })JSON");

  EXPECT_THROW(sourcemeta::jsontoolkit::bundle(
                   document, sourcemeta::jsontoolkit::default_schema_walker,
                   test_resolver),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(JSONSchema_bundle, target_no_dialect) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "$ref": "https://www.sourcemeta.com/no-dialect" }
    }
  })JSON");

  EXPECT_THROW(sourcemeta::jsontoolkit::bundle(
                   document, sourcemeta::jsontoolkit::default_schema_walker,
                   test_resolver),
               sourcemeta::jsontoolkit::SchemaResolutionError);
}

TEST(JSONSchema_bundle, target_array) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "$ref": "https://www.sourcemeta.com/array" }
    }
  })JSON");

  EXPECT_THROW(sourcemeta::jsontoolkit::bundle(
                   document, sourcemeta::jsontoolkit::default_schema_walker,
                   test_resolver),
               sourcemeta::jsontoolkit::SchemaResolutionError);
}
