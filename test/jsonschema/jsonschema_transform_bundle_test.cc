#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include "jsonschema_transform_rules.h"

TEST(JSONSchema_transform_bundle, flat_document_no_applicators) {
  sourcemeta::jsontoolkit::SchemaTransformBundle bundle;
  bundle.add<ExampleRule1>();
  bundle.add<ExampleRule2>();

  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "foo": "bar",
    "bar": "baz",
    "qux": "xxx"
  })JSON");

  bundle.apply(document, sourcemeta::jsontoolkit::default_schema_walker,
               sourcemeta::jsontoolkit::official_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "qux": "xxx"
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_transform_bundle, flat_document_no_applicators_no_walker) {
  sourcemeta::jsontoolkit::SchemaTransformBundle bundle;
  bundle.add<ExampleRule1>();
  bundle.add<ExampleRule2>();

  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "foo": "bar",
    "bar": "baz",
    "qux": "xxx"
  })JSON");

  bundle.apply(document, sourcemeta::jsontoolkit::schema_walker_none,
               sourcemeta::jsontoolkit::official_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "qux": "xxx"
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_transform_bundle, throw_if_no_dialect_invalid_default) {
  sourcemeta::jsontoolkit::SchemaTransformBundle bundle;
  bundle.add<ExampleRule1>();
  bundle.add<ExampleRule2>();

  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": "bar",
    "bar": "baz",
    "qux": "xxx"
  })JSON");

  EXPECT_THROW(bundle.apply(document,
                            sourcemeta::jsontoolkit::default_schema_walker,
                            sourcemeta::jsontoolkit::official_resolver,
                            sourcemeta::jsontoolkit::empty_pointer,
                            "https://example.com/invalid"),
               sourcemeta::jsontoolkit::SchemaResolutionError);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": "bar",
    "bar": "baz",
    "qux": "xxx"
  })JSON");

  // Nothing should have been modified
  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_transform_bundle, with_default_dialect) {
  sourcemeta::jsontoolkit::SchemaTransformBundle bundle;
  bundle.add<ExampleRule1>();
  bundle.add<ExampleRule2>();

  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": "bar",
    "bar": "baz",
    "qux": "xxx"
  })JSON");

  bundle.apply(document, sourcemeta::jsontoolkit::default_schema_walker,
               sourcemeta::jsontoolkit::official_resolver,
               sourcemeta::jsontoolkit::empty_pointer,
               "https://json-schema.org/draft/2020-12/schema");

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "qux": "xxx"
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_transform_bundle, with_explicit_default_dialect_same) {
  sourcemeta::jsontoolkit::SchemaTransformBundle bundle;
  bundle.add<ExampleRule1>();
  bundle.add<ExampleRule2>();

  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "foo": "bar",
    "bar": "baz",
    "qux": "xxx"
  })JSON");

  bundle.apply(document, sourcemeta::jsontoolkit::default_schema_walker,
               sourcemeta::jsontoolkit::official_resolver,
               sourcemeta::jsontoolkit::empty_pointer,
               "https://json-schema.org/draft/2020-12/schema");

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "qux": "xxx"
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_transform_bundle, throw_on_rules_called_twice) {
  sourcemeta::jsontoolkit::SchemaTransformBundle bundle;
  bundle.add<ExampleRule1>();
  bundle.add<ExampleRuleConflictsWith1>();

  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "foo": "bar"
  })JSON");

  EXPECT_THROW(bundle.apply(document,
                            sourcemeta::jsontoolkit::default_schema_walker,
                            sourcemeta::jsontoolkit::official_resolver),
               std::runtime_error);
}

TEST(JSONSchema_transform_bundle, top_level_rule) {
  sourcemeta::jsontoolkit::SchemaTransformBundle bundle;
  bundle.add<ExampleRule3>();

  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "type": "string" }
    }
  })JSON");

  bundle.apply(document, sourcemeta::jsontoolkit::default_schema_walker,
               sourcemeta::jsontoolkit::official_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "top": true,
    "properties": {
      "foo": { "type": "string" }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_transform_bundle, walker_2020_12) {
  sourcemeta::jsontoolkit::SchemaTransformBundle bundle;
  bundle.add<ExampleRule4>();

  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "type": "string" },
      "bar": {
        "items": {
          "type": "number"
        }
      }
    }
  })JSON");

  bundle.apply(document, sourcemeta::jsontoolkit::default_schema_walker,
               sourcemeta::jsontoolkit::official_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "here": true,
    "properties": {
      "foo": {
        "type": "string",
        "here": true
      },
      "bar": {
        "here": true,
        "items": {
          "here": true,
          "type": "number"
        }
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_transform_bundle, none_walker) {
  sourcemeta::jsontoolkit::SchemaTransformBundle bundle;
  bundle.add<ExampleRule4>();

  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "type": "string" },
      "bar": {
        "items": {
          "type": "number"
        }
      }
    }
  })JSON");

  bundle.apply(document, sourcemeta::jsontoolkit::schema_walker_none,
               sourcemeta::jsontoolkit::official_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "here": true,
    "properties": {
      "foo": { "type": "string" },
      "bar": {
        "items": { "type": "number" }
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_transform_bundle, mismatch_default_dialect) {
  sourcemeta::jsontoolkit::SchemaTransformBundle bundle;
  bundle.add<ExampleRule4>();

  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "type": "string" },
      "bar": {
        "unevaluatedItems": {
          "type": "number"
        }
      }
    }
  })JSON");

  bundle.apply(document, sourcemeta::jsontoolkit::default_schema_walker,
               sourcemeta::jsontoolkit::official_resolver,
               sourcemeta::jsontoolkit::empty_pointer,
               "http://json-schema.org/draft-04/schema#");

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "here": true,
    "properties": {
      "foo": {
        "type": "string",
        "here": true
      },
      "bar": {
        "here": true,
        "unevaluatedItems": {
          "here": true,
          "type": "number"
        }
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_transform_bundle, specific_subschema) {
  sourcemeta::jsontoolkit::SchemaTransformBundle bundle;
  bundle.add<ExampleRule4>();

  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "type": "string" },
      "bar": {
        "items": {
          "type": "number"
        }
      }
    }
  })JSON");

  bundle.apply(document, sourcemeta::jsontoolkit::default_schema_walker,
               sourcemeta::jsontoolkit::official_resolver,
               {"properties", "bar"});

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": {
        "type": "string"
      },
      "bar": {
        "here": true,
        "items": {
          "here": true,
          "type": "number"
        }
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_transform_bundle, rule_pointers) {
  sourcemeta::jsontoolkit::SchemaTransformBundle bundle;
  bundle.add<ExampleRule5>();

  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "type": "string" },
      "bar": { "type": "string" },
      "baz": { "type": "string" }
    }
  })JSON");

  bundle.apply(document, sourcemeta::jsontoolkit::default_schema_walker,
               sourcemeta::jsontoolkit::official_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
      "foo": { "type": "string" },
      "bar": { "type": "string" },
      "baz": { "type": "string", "baz": true }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_transform_bundle, multi_dialect_rules) {
  sourcemeta::jsontoolkit::SchemaTransformBundle bundle;
  bundle.add<ExampleRule4>();

  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "unevaluatedItems": { "type": "string" },
    "$defs": {
      "foo": {
        "$schema": "http://json-schema.org/draft-03/schema#",
        "additionalItems": {
          "type": "string"
        }
      }
    }
  })JSON");

  bundle.apply(document, sourcemeta::jsontoolkit::default_schema_walker,
               sourcemeta::jsontoolkit::official_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "here": true,
    "unevaluatedItems": {
      "here": true,
      "type": "string"
    },
    "$defs": {
      "foo": {
        "$schema": "http://json-schema.org/draft-03/schema#",
        "here": true,
        "additionalItems": {
          "here": true,
          "type": "string"
        }
      }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}

TEST(JSONSchema_transform_bundle, dialect_specific_rules) {
  sourcemeta::jsontoolkit::SchemaTransformBundle bundle;
  bundle.add<ExampleRule6>();

  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$defs": {
      "foo": { "$schema": "http://json-schema.org/draft-03/schema#" },
      "bar": { "$schema": "http://json-schema.org/draft-02/schema#" },
      "baz": { "$schema": "http://json-schema.org/draft-01/schema#" }
    }
  })JSON");

  bundle.apply(document, sourcemeta::jsontoolkit::default_schema_walker,
               sourcemeta::jsontoolkit::official_resolver);

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$defs": {
      "foo": { "$schema": "http://json-schema.org/draft-03/schema#", "draft": 3 },
      "bar": { "$schema": "http://json-schema.org/draft-02/schema#" },
      "baz": { "$schema": "http://json-schema.org/draft-01/schema#" }
    }
  })JSON");

  EXPECT_EQ(document, expected);
}
