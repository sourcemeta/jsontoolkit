#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <future>      // std::promise, std::future
#include <string>      // std::string
#include <string_view> // std::string_view

static auto test_resolver(std::string_view identifier)
    -> std::future<std::optional<sourcemeta::jsontoolkit::JSON>> {
  std::promise<std::optional<sourcemeta::jsontoolkit::JSON>> promise;
  if (identifier == "https://example.com/foo/bar") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://example.com/foo/bar",
      "$anchor": "baz"
    })JSON"));
  } else if (identifier == "https://www.sourcemeta.com/test-1") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://www.sourcemeta.com/test-1",
      "type": "string"
    })JSON"));
  } else if (identifier == "https://www.sourcemeta.com/test-2") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://www.sourcemeta.com/test-2",
      "$ref": "test-3"
    })JSON"));
  } else if (identifier == "https://www.sourcemeta.com/test-3") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://www.sourcemeta.com/test-3",
      "$ref": "test-1"
    })JSON"));
  } else if (identifier == "https://www.sourcemeta.com/test-4") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://www.sourcemeta.com/test-4",
      "type": "boolean"
    })JSON"));
  } else if (identifier == "https://www.sourcemeta.com/recursive") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://www.sourcemeta.com/recursive",
      "properties": {
        "foo": { "$ref": "#" }
      }
    })JSON"));
  } else if (identifier ==
             "https://www.sourcemeta.com/recursive-empty-fragment") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://www.sourcemeta.com/recursive-empty-fragment#",
      "properties": {
        "foo": { "$ref": "#" }
      }
    })JSON"));
  } else {
    promise.set_value(
        sourcemeta::jsontoolkit::official_resolver(identifier).get());
  }

  return promise.get_future();
}

TEST(JSONSchema_bundle_2020_12, no_references_no_id) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema"
  })JSON");

  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver)
      .wait();

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

  const auto result =
      sourcemeta::jsontoolkit::bundle(
          document, sourcemeta::jsontoolkit::default_schema_walker,
          test_resolver)
          .get();

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
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver)
      .wait();

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
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver)
      .wait();

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
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver)
      .wait();
  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver)
      .wait();
  sourcemeta::jsontoolkit::bundle(
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver)
      .wait();

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
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver)
      .wait();

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
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver)
      .wait();

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
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver)
      .wait();

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
      document, sourcemeta::jsontoolkit::default_schema_walker, test_resolver)
      .wait();

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$ref": "https://www.sourcemeta.com/recursive-empty-fragment#",
    "$defs": {
      "https://www.sourcemeta.com/recursive-empty-fragment": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://www.sourcemeta.com/recursive-empty-fragment#",
        "properties": {
          "foo": { "$ref": "#" }
        }
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}
