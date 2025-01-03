#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <string>      // std::string
#include <string_view> // std::string_view

static auto test_resolver(std::string_view identifier)
    -> std::optional<sourcemeta::jsontoolkit::JSON> {
  if (identifier == "https://www.sourcemeta.com/test-1") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$id": "https://www.sourcemeta.com/test-1",
      "type": "string"
    })JSON");
  } else if (identifier == "https://www.sourcemeta.com/test-2") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$id": "https://www.sourcemeta.com/test-2",
      "allOf": [ { "$ref": "test-3" } ]
    })JSON");
  } else if (identifier == "https://www.sourcemeta.com/test-3") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$id": "https://www.sourcemeta.com/test-3",
      "allOf": [ { "$ref": "test-1" } ]
    })JSON");
  } else if (identifier == "https://www.sourcemeta.com/test-4") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$id": "https://www.sourcemeta.com/test-4",
      "type": "boolean"
    })JSON");
  } else if (identifier == "https://www.sourcemeta.com/recursive") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$id": "https://www.sourcemeta.com/recursive",
      "properties": {
        "foo": { "$ref": "#" }
      }
    })JSON");
  } else if (identifier ==
             "https://www.sourcemeta.com/recursive-empty-fragment") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$id": "https://www.sourcemeta.com/recursive-empty-fragment#",
      "properties": {
        "foo": { "$ref": "#" }
      }
    })JSON");
  } else if (identifier == "https://www.sourcemeta.com/anonymous") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "type": "integer"
    })JSON");
  } else if (identifier == "https://example.com/meta/1.json") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://example.com/meta/2.json",
      "$id": "https://example.com/meta/1.json"
    })JSON");
  } else if (identifier == "https://example.com/meta/2.json") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$id": "https://example.com/meta/2.json"
    })JSON");
  } else {
    return sourcemeta::jsontoolkit::official_resolver(identifier);
  }
}

TEST(JSONSchema_bundle_draft7, no_references_no_id) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#"
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#"
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_draft7, const_no_references_no_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#"
  })JSON");

  const auto result = sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#"
  })JSON");

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_bundle_draft7, simple_with_id) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
      "foo": { "$ref": "https://www.sourcemeta.com/test-1" },
      "bar": {
        "$id": "https://www.sourcemeta.com",
        "allOf": [ { "$ref": "test-2" } ]
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
      "foo": { "$ref": "https://www.sourcemeta.com/test-1" },
      "bar": {
        "$id": "https://www.sourcemeta.com",
        "allOf": [ { "$ref": "test-2" } ]
      }
    },
    "definitions": {
      "https://www.sourcemeta.com/test-1": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "https://www.sourcemeta.com/test-1",
        "type": "string"
      },
      "https://www.sourcemeta.com/test-2": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "https://www.sourcemeta.com/test-2",
        "allOf": [ { "$ref": "test-3" } ]
      },
      "https://www.sourcemeta.com/test-3": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "https://www.sourcemeta.com/test-3",
        "allOf": [ { "$ref": "test-1" } ]
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_draft7, simple_without_id) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
      "foo": { "$ref": "https://www.sourcemeta.com/test-1" },
      "bar": {
        "$id": "https://www.sourcemeta.com",
        "allOf": [ { "$ref": "test-2" } ]
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
      "foo": { "$ref": "https://www.sourcemeta.com/test-1" },
      "bar": {
        "$id": "https://www.sourcemeta.com",
        "allOf": [ { "$ref": "test-2" } ]
      }
    },
    "definitions": {
      "https://www.sourcemeta.com/test-1": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "https://www.sourcemeta.com/test-1",
        "type": "string"
      },
      "https://www.sourcemeta.com/test-2": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "https://www.sourcemeta.com/test-2",
        "allOf": [ { "$ref": "test-3" } ]
      },
      "https://www.sourcemeta.com/test-3": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "https://www.sourcemeta.com/test-3",
        "allOf": [ { "$ref": "test-1" } ]
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_draft7, schema_not_found) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
      "foo": { "$ref": "https://www.sourcemeta.com/xxx" }
    }
  })JSON");

  EXPECT_THROW(sourcemeta::jsontoolkit::bundle(
                   document, sourcemeta::jsontoolkit::default_schema_walker,
                   test_resolver),
               sourcemeta::jsontoolkit::SchemaResolutionError);
}

TEST(JSONSchema_bundle_draft7, idempotency) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
      "test": { "$ref": "https://www.sourcemeta.com/test-2" }
    }
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);
  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);
  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
      "test": { "$ref": "https://www.sourcemeta.com/test-2" }
    },
    "definitions": {
      "https://www.sourcemeta.com/test-1": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "https://www.sourcemeta.com/test-1",
        "type": "string"
      },
      "https://www.sourcemeta.com/test-2": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "https://www.sourcemeta.com/test-2",
        "allOf": [ { "$ref": "test-3" } ]
      },
      "https://www.sourcemeta.com/test-3": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "https://www.sourcemeta.com/test-3",
        "allOf": [ { "$ref": "test-1" } ]
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_draft7, pre_embedded) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
      "test": { "$ref": "https://www.sourcemeta.com/test-2" }
    },
    "definitions": {
      "already-embedded": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "https://www.sourcemeta.com/test-1",
        "type": "string"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
      "test": { "$ref": "https://www.sourcemeta.com/test-2" }
    },
    "definitions": {
      "already-embedded": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "https://www.sourcemeta.com/test-1",
        "type": "string"
      },
      "https://www.sourcemeta.com/test-2": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "https://www.sourcemeta.com/test-2",
        "allOf": [ { "$ref": "test-3" } ]
      },
      "https://www.sourcemeta.com/test-3": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "https://www.sourcemeta.com/test-3",
        "allOf": [ { "$ref": "test-1" } ]
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_draft7, taken_definitions_entry) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
      "test": { "$ref": "https://www.sourcemeta.com/test-1" },
      "extra": { "$ref": "https://www.sourcemeta.com/test-4" }
    },
    "definitions": {
      "https://www.sourcemeta.com/test-1": { "foo": 1 },
      "https://www.sourcemeta.com/test-4": { "foo": 1 },
      "https://www.sourcemeta.com/test-4/x": { "foo": 1 },
      "https://www.sourcemeta.com/test-4/x/x": { "foo": 1 }
    }
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
      "test": { "$ref": "https://www.sourcemeta.com/test-1" },
      "extra": { "$ref": "https://www.sourcemeta.com/test-4" }
    },
    "definitions": {
      "https://www.sourcemeta.com/test-1": { "foo": 1 },
      "https://www.sourcemeta.com/test-1/x": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "https://www.sourcemeta.com/test-1",
        "type": "string"
      },
      "https://www.sourcemeta.com/test-4": { "foo": 1 },
      "https://www.sourcemeta.com/test-4/x": { "foo": 1 },
      "https://www.sourcemeta.com/test-4/x/x": { "foo": 1 },
      "https://www.sourcemeta.com/test-4/x/x/x": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "https://www.sourcemeta.com/test-4",
        "type": "boolean"
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_draft7, recursive) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$ref": "https://www.sourcemeta.com/recursive"
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$ref": "https://www.sourcemeta.com/recursive",
    "definitions": {
      "https://www.sourcemeta.com/recursive": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "https://www.sourcemeta.com/recursive",
        "properties": {
          "foo": { "$ref": "#" }
        }
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_draft7, recursive_empty_fragment) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$ref": "https://www.sourcemeta.com/recursive-empty-fragment#"
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$ref": "https://www.sourcemeta.com/recursive-empty-fragment#",
    "definitions": {
      "https://www.sourcemeta.com/recursive-empty-fragment": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "https://www.sourcemeta.com/recursive-empty-fragment",
        "properties": {
          "foo": { "$ref": "#" }
        }
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_draft7, anonymous_no_dialect) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$ref": "https://www.sourcemeta.com/anonymous"
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver,
      sourcemeta::jsontoolkit::BundleOptions::Default,
      "http://json-schema.org/draft-07/schema#");

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$ref": "https://www.sourcemeta.com/anonymous",
    "definitions": {
      "https://www.sourcemeta.com/anonymous": {
        "$id": "https://www.sourcemeta.com/anonymous",
        "type": "integer"
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_draft7, without_id) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/top-level",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
      "foo": {
        "$ref": "recursive#/properties/foo"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver,
      sourcemeta::jsontoolkit::BundleOptions::WithoutIdentifiers);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
      "foo": {
        "$ref": "#/definitions/https%3A~1~1www.sourcemeta.com~1recursive/properties/foo"
      }
    },
    "definitions": {
      "https://www.sourcemeta.com/recursive": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "properties": {
          "foo": {
            "$ref": "#/definitions/https%3A~1~1www.sourcemeta.com~1recursive"
          }
        }
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_draft7, metaschema) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://example.com/meta/1.json",
    "type": "string"
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://example.com/meta/1.json",
    "type": "string",
    "definitions": {
      "https://example.com/meta/1.json": {
        "$schema": "https://example.com/meta/2.json",
        "$id": "https://example.com/meta/1.json"
      },
      "https://example.com/meta/2.json": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "https://example.com/meta/2.json"
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_draft7, metaschema_without_id) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://example.com/meta/1.json",
    "type": "string"
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver,
      sourcemeta::jsontoolkit::BundleOptions::WithoutIdentifiers);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "#/definitions/https%3A~1~1example.com~1meta~11.json",
    "type": "string",
    "definitions": {
      "https://example.com/meta/1.json": {
        "$schema": "#/definitions/https%3A~1~1example.com~1meta~12.json"
      },
      "https://example.com/meta/2.json": {
        "$schema": "http://json-schema.org/draft-07/schema#"
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_draft7, relative_base_uri_with_ref) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "common",
    "allOf": [ { "$ref": "#reference" } ],
    "definitions": {
      "reference": {
        "$id": "#reference"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "common",
    "allOf": [ { "$ref": "#reference" } ],
    "definitions": {
      "reference": {
        "$id": "#reference"
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}
