#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_relativize, draft4_1) {
  auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "http://asyncapi.com/definitions/1.0.0/asyncapi.json",
    "$schema": "http://json-schema.org/draft-04/schema",
    "title": "AsyncAPI 1.0 schema.",
    "type": "object",
    "required": [
        "asyncapi",
        "info",
        "topics"
    ],
    "additionalProperties": false,
    "patternProperties": {
        "^x-": {
            "$ref": "http://asyncapi.com/definitions/1.0.0/vendorExtension.json"
        }
    }
  })JSON");

  sourcemeta::jsontoolkit::relativize(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver);

  const auto expected = sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "http://asyncapi.com/definitions/1.0.0/asyncapi.json",
    "$schema": "http://json-schema.org/draft-04/schema",
    "title": "AsyncAPI 1.0 schema.",
    "type": "object",
    "required": [
        "asyncapi",
        "info",
        "topics"
    ],
    "additionalProperties": false,
    "patternProperties": {
        "^x-": {
            "$ref": "vendorExtension.json"
        }
    }
  })JSON");

  EXPECT_EQ(schema, expected);
}

TEST(JSONSchema_relativize, draft4_2) {
  auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "http://example.com",
    "$schema": "http://json-schema.org/draft-04/schema",
    "properties": {
      "foo": {
        "$ref": "http://asyncapi.com/definitions/1.0.0/vendorExtension.json"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::relativize(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver);

  const auto expected = sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "http://example.com",
    "$schema": "http://json-schema.org/draft-04/schema",
    "properties": {
      "foo": {
        "$ref": "http://asyncapi.com/definitions/1.0.0/vendorExtension.json"
      }
    }
  })JSON");

  EXPECT_EQ(schema, expected);
}

TEST(JSONSchema_relativize, draft4_3) {
  auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "http://example.com",
    "$schema": "http://json-schema.org/draft-04/schema",
    "properties": {
      "foo": {
        "$ref": "http://example.com/nested"
      },
      "bar": {
        "id": "http://sourcemeta.com",
        "properties": {
          "bar": {
            "$ref": "http://example.com/nested"
          },
          "baz": {
            "$ref": "http://sourcemeta.com/nested"
          }
        }
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::relativize(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver);

  const auto expected = sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "http://example.com",
    "$schema": "http://json-schema.org/draft-04/schema",
    "properties": {
      "foo": {
        "$ref": "nested"
      },
      "bar": {
        "id": "http://sourcemeta.com",
        "properties": {
          "bar": {
            "$ref": "http://example.com/nested"
          },
          "baz": {
            "$ref": "nested"
          }
        }
      }
    }
  })JSON");

  EXPECT_EQ(schema, expected);
}

TEST(JSONSchema_relativize, draft4_4) {
  auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema",
    "properties": {
      "foo": {
        "$ref": "http://asyncapi.com/definitions/1.0.0/vendorExtension.json"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::relativize(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver);

  const auto expected = sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema",
    "properties": {
      "foo": {
        "$ref": "http://asyncapi.com/definitions/1.0.0/vendorExtension.json"
      }
    }
  })JSON");

  EXPECT_EQ(schema, expected);
}

TEST(JSONSchema_relativize, draft4_5) {
  auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema",
    "properties": {
      "foo": {
        "$ref": "http://example.com/nested"
      },
      "bar": {
        "id": "http://sourcemeta.com",
        "properties": {
          "bar": {
            "$ref": "http://example.com/nested"
          },
          "baz": {
            "$ref": "http://sourcemeta.com/nested"
          }
        }
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::relativize(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver);

  const auto expected = sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema",
    "properties": {
      "foo": {
        "$ref": "http://example.com/nested"
      },
      "bar": {
        "id": "http://sourcemeta.com",
        "properties": {
          "bar": {
            "$ref": "http://example.com/nested"
          },
          "baz": {
            "$ref": "nested"
          }
        }
      }
    }
  })JSON");

  EXPECT_EQ(schema, expected);
}

TEST(JSONSchema_relativize, draft4_6) {
  auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema",
    "properties": {
      "foo": {
        "$ref": "http://asyncapi.com/definitions/1.0.0/vendorExtension.json"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::relativize(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver, std::nullopt,
      "http://asyncapi.com/definitions");

  const auto expected = sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema",
    "properties": {
      "foo": {
        "$ref": "1.0.0/vendorExtension.json"
      }
    }
  })JSON");

  EXPECT_EQ(schema, expected);
}

TEST(JSONSchema_relativize, draft4_7) {
  auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "http://asyncapi.com/definitions",
    "properties": {
      "foo": {
        "$ref": "http://asyncapi.com/definitions/1.0.0/vendorExtension.json"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::relativize(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      "http://json-schema.org/draft-04/schema");

  const auto expected = sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "http://asyncapi.com/definitions",
    "properties": {
      "foo": {
        "$ref": "1.0.0/vendorExtension.json"
      }
    }
  })JSON");

  EXPECT_EQ(schema, expected);
}

TEST(JSONSchema_relativize, draft4_8) {
  auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "id": "http://asyncapi.com/definitions",
    "properties": {
      "foo": {
        "$ref": "http://asyncapi.com/definitions/1.0.0/vendorExtension.json"
      }
    }
  })JSON");

  EXPECT_THROW(sourcemeta::jsontoolkit::relativize(
                   schema, sourcemeta::jsontoolkit::default_schema_walker,
                   sourcemeta::jsontoolkit::official_resolver),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(JSONSchema_relativize, 2020_12_1) {
  auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "http://example.com",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": {
        "$dynamicRef": "http://example.com/foo#bar"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::relativize(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver);

  const auto expected = sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "http://example.com",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": {
        "$dynamicRef": "foo#bar"
      }
    }
  })JSON");

  EXPECT_EQ(schema, expected);
}
