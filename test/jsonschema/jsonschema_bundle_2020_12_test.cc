#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <string>      // std::string
#include <string_view> // std::string_view

static auto test_resolver(std::string_view identifier)
    -> std::optional<sourcemeta::jsontoolkit::JSON> {
  if (identifier == "https://example.com/foo/bar") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://example.com/foo/bar",
      "$anchor": "baz"
    })JSON");
  } else if (identifier == "https://example.com/baz-anchor") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://example.com/baz-anchor",
      "$defs": {
        "baz": {
          "$anchor": "baz",
          "type": "string"
        }
      }
    })JSON");
  } else if (identifier == "https://www.sourcemeta.com/test-1") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://www.sourcemeta.com/test-1",
      "type": "string"
    })JSON");
  } else if (identifier == "https://www.sourcemeta.com/test-2") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://www.sourcemeta.com/test-2",
      "$ref": "test-3"
    })JSON");
  } else if (identifier == "https://www.sourcemeta.com/test-3") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://www.sourcemeta.com/test-3",
      "$ref": "test-1"
    })JSON");
  } else if (identifier == "https://www.sourcemeta.com/test-4") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://www.sourcemeta.com/test-4",
      "type": "boolean"
    })JSON");
  } else if (identifier == "https://www.sourcemeta.com/recursive") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://www.sourcemeta.com/recursive",
      "properties": {
        "foo": { "$ref": "#" }
      }
    })JSON");
  } else if (identifier ==
             "https://www.sourcemeta.com/recursive-empty-fragment") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://www.sourcemeta.com/recursive-empty-fragment#",
      "properties": {
        "foo": { "$ref": "#" }
      }
    })JSON");
  } else if (identifier == "https://www.sourcemeta.com/anonymous") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "type": "integer"
    })JSON");
  } else if (identifier == "https://example.com/nested/ref-string.json") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$ref": "string.json"
    })JSON");
  } else if (identifier == "https://example.com/nested/string.json") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "type": "string"
    })JSON");
  } else if (identifier == "https://example.com/meta/1.json") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://example.com/meta/2.json",
      "$id": "https://example.com/meta/1.json",
      "$vocabulary": { "https://json-schema.org/draft/2020-12/vocab/core": true }
    })JSON");
  } else if (identifier == "https://example.com/meta/2.json") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://example.com/meta/2.json",
      "$vocabulary": { "https://json-schema.org/draft/2020-12/vocab/core": true }
    })JSON");
  } else {
    return sourcemeta::jsontoolkit::official_resolver(identifier);
  }
}

TEST(JSONSchema_bundle_2020_12, no_references_no_id) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_2020_12, const_no_references_no_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  const auto result = sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  EXPECT_EQ(result, expected);
}

TEST(JSONSchema_bundle_2020_12, simple_with_id) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "$ref": "https://www.sourcemeta.com/test-1" },
      "bar": { "$id": "https://www.sourcemeta.com", "$ref": "test-2" },
      "baz": { "$ref": "https://example.com/foo/bar#baz" },
      "qux": { "$ref": "https://example.com/foo/bar" },
      "dyn": { "$dynamicRef": "https://www.sourcemeta.com/test-4" }
    }
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "$ref": "https://www.sourcemeta.com/test-1" },
      "bar": { "$id": "https://www.sourcemeta.com", "$ref": "test-2" },
      "baz": { "$ref": "https://example.com/foo/bar#baz" },
      "qux": { "$ref": "https://example.com/foo/bar" },
      "dyn": { "$dynamicRef": "https://www.sourcemeta.com/test-4" }
    },
    "$defs": {
      "https://www.sourcemeta.com/test-1": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://www.sourcemeta.com/test-1",
        "type": "string"
      },
      "https://www.sourcemeta.com/test-2": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://www.sourcemeta.com/test-2",
        "$ref": "test-3"
      },
      "https://www.sourcemeta.com/test-3": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://www.sourcemeta.com/test-3",
        "$ref": "test-1"
      },
      "https://www.sourcemeta.com/test-4": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://www.sourcemeta.com/test-4",
        "type": "boolean"
      },
      "https://example.com/foo/bar": {
        "$id": "https://example.com/foo/bar",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$anchor": "baz"
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_2020_12, simple_without_id) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "$ref": "https://www.sourcemeta.com/test-1" },
      "bar": { "$id": "https://www.sourcemeta.com", "$ref": "test-2" },
      "baz": { "$ref": "https://example.com/foo/bar#baz" },
      "qux": { "$ref": "https://example.com/foo/bar" },
      "dyn": { "$dynamicRef": "https://www.sourcemeta.com/test-4" }
    }
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "$ref": "https://www.sourcemeta.com/test-1" },
      "bar": { "$id": "https://www.sourcemeta.com", "$ref": "test-2" },
      "baz": { "$ref": "https://example.com/foo/bar#baz" },
      "qux": { "$ref": "https://example.com/foo/bar" },
      "dyn": { "$dynamicRef": "https://www.sourcemeta.com/test-4" }
    },
    "$defs": {
      "https://www.sourcemeta.com/test-1": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://www.sourcemeta.com/test-1",
        "type": "string"
      },
      "https://www.sourcemeta.com/test-2": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://www.sourcemeta.com/test-2",
        "$ref": "test-3"
      },
      "https://www.sourcemeta.com/test-3": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://www.sourcemeta.com/test-3",
        "$ref": "test-1"
      },
      "https://www.sourcemeta.com/test-4": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://www.sourcemeta.com/test-4",
        "type": "boolean"
      },
      "https://example.com/foo/bar": {
        "$id": "https://example.com/foo/bar",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$anchor": "baz"
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_2020_12, schema_not_found) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "$ref": "https://www.sourcemeta.com/xxx" }
    }
  })JSON");

  EXPECT_THROW(sourcemeta::jsontoolkit::bundle(
                   document, sourcemeta::jsontoolkit::default_schema_walker,
                   test_resolver),
               sourcemeta::jsontoolkit::SchemaResolutionError);
}

TEST(JSONSchema_bundle_2020_12, anchor_not_found) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "$ref": "https://example.com/foo/bar#xxxxxxxx" }
    }
  })JSON");

  EXPECT_THROW(sourcemeta::jsontoolkit::bundle(
                   document, sourcemeta::jsontoolkit::default_schema_walker,
                   test_resolver),
               sourcemeta::jsontoolkit::SchemaReferenceError);
}

TEST(JSONSchema_bundle_2020_12, idempotency) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
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
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "test": { "$ref": "https://www.sourcemeta.com/test-2" }
    },
    "$defs": {
      "https://www.sourcemeta.com/test-1": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://www.sourcemeta.com/test-1",
        "type": "string"
      },
      "https://www.sourcemeta.com/test-2": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://www.sourcemeta.com/test-2",
        "$ref": "test-3"
      },
      "https://www.sourcemeta.com/test-3": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://www.sourcemeta.com/test-3",
        "$ref": "test-1"
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_2020_12, pre_embedded) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "test": { "$ref": "https://www.sourcemeta.com/test-2" }
    },
    "$defs": {
      "already-embedded": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
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
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "test": { "$ref": "https://www.sourcemeta.com/test-2" }
    },
    "$defs": {
      "already-embedded": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://www.sourcemeta.com/test-1",
        "type": "string"
      },
      "https://www.sourcemeta.com/test-2": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://www.sourcemeta.com/test-2",
        "$ref": "test-3"
      },
      "https://www.sourcemeta.com/test-3": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://www.sourcemeta.com/test-3",
        "$ref": "test-1"
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_2020_12, taken_definitions_entry) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "test": { "$ref": "https://www.sourcemeta.com/test-1" },
      "extra": { "$ref": "https://www.sourcemeta.com/test-4" }
    },
    "$defs": {
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
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "test": { "$ref": "https://www.sourcemeta.com/test-1" },
      "extra": { "$ref": "https://www.sourcemeta.com/test-4" }
    },
    "$defs": {
      "https://www.sourcemeta.com/test-1": { "foo": 1 },
      "https://www.sourcemeta.com/test-1/x": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://www.sourcemeta.com/test-1",
        "type": "string"
      },
      "https://www.sourcemeta.com/test-4": { "foo": 1 },
      "https://www.sourcemeta.com/test-4/x": { "foo": 1 },
      "https://www.sourcemeta.com/test-4/x/x": { "foo": 1 },
      "https://www.sourcemeta.com/test-4/x/x/x": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://www.sourcemeta.com/test-4",
        "type": "boolean"
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_2020_12, recursive) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$ref": "https://www.sourcemeta.com/recursive"
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$ref": "https://www.sourcemeta.com/recursive",
    "$defs": {
      "https://www.sourcemeta.com/recursive": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://www.sourcemeta.com/recursive",
        "properties": {
          "foo": { "$ref": "#" }
        }
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_2020_12, recursive_empty_fragment) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$ref": "https://www.sourcemeta.com/recursive-empty-fragment#"
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$ref": "https://www.sourcemeta.com/recursive-empty-fragment#",
    "$defs": {
      "https://www.sourcemeta.com/recursive-empty-fragment": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://www.sourcemeta.com/recursive-empty-fragment",
        "properties": {
          "foo": { "$ref": "#" }
        }
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_2020_12, anonymous_no_dialect) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$ref": "https://www.sourcemeta.com/anonymous"
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver,
      sourcemeta::jsontoolkit::BundleOptions::Default,
      "https://json-schema.org/draft/2020-12/schema");

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$ref": "https://www.sourcemeta.com/anonymous",
    "$defs": {
      "https://www.sourcemeta.com/anonymous": {
        "$id": "https://www.sourcemeta.com/anonymous",
        "type": "integer"
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_2020_12, relative_in_target_without_id) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/test",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$ref": "nested/ref-string.json"
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/test",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$ref": "nested/ref-string.json",
    "$defs": {
      "https://example.com/nested/ref-string.json": {
        "$id": "https://example.com/nested/ref-string.json",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$ref": "string.json"
      },
      "https://example.com/nested/string.json": {
        "$id": "https://example.com/nested/string.json",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "type": "string"
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_2020_12, without_id) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/top-level",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": {
        "$ref": "recursive#/properties/foo"
      },
      "baz": {
        "$ref": "https://example.com/baz-anchor#baz"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver,
      sourcemeta::jsontoolkit::BundleOptions::WithoutIdentifiers);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": {
        "$ref": "#/$defs/https%3A~1~1www.sourcemeta.com~1recursive/properties/foo"
      },
      "baz": {
        "$ref": "#/$defs/https%3A~1~1example.com~1baz-anchor/$defs/baz"
      }
    },
    "$defs": {
      "https://www.sourcemeta.com/recursive": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "properties": {
          "foo": {
            "$ref": "#/$defs/https%3A~1~1www.sourcemeta.com~1recursive"
          }
        }
      },
      "https://example.com/baz-anchor": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$defs": {
          "baz": {
            "type": "string"
          }
        }
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_2020_12, without_id_boolean_subschema) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://www.sourcemeta.com/top-level",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": true
    }
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver,
      sourcemeta::jsontoolkit::BundleOptions::WithoutIdentifiers);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": true
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_2020_12, metaschema) {
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
    "$defs": {
      "https://example.com/meta/1.json": {
        "$schema": "https://example.com/meta/2.json",
        "$id": "https://example.com/meta/1.json",
        "$vocabulary": { "https://json-schema.org/draft/2020-12/vocab/core": true }
      },
      "https://example.com/meta/2.json": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://example.com/meta/2.json",
        "$vocabulary": { "https://json-schema.org/draft/2020-12/vocab/core": true }
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_2020_12, metaschema_without_id) {
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
    "$schema": "#/$defs/https%3A~1~1example.com~1meta~11.json",
    "type": "string",
    "$defs": {
      "https://example.com/meta/1.json": {
        "$schema": "#/$defs/https%3A~1~1example.com~1meta~12.json",
        "$vocabulary": { "https://json-schema.org/draft/2020-12/vocab/core": true }
      },
      "https://example.com/meta/2.json": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$vocabulary": { "https://json-schema.org/draft/2020-12/vocab/core": true }
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_bundle_2020_12, relative_base_uri_with_ref) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "common",
    "allOf": [ { "$ref": "#reference" } ],
    "definitions": {
      "reference": {
        "$anchor": "reference"
      }
    }
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "common",
    "allOf": [ { "$ref": "#reference" } ],
    "definitions": {
      "reference": {
        "$anchor": "reference"
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}
