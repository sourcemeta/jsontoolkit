#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>
#include <vector>

static auto test_resolver(const std::string &identifier)
    -> std::future<std::optional<sourcemeta::jsontoolkit::JSON>> {
  std::promise<std::optional<sourcemeta::jsontoolkit::JSON>> promise;
  if (identifier == "https://sourcemeta.com/test-metaschema") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://sourcemeta.com/test-metaschema",
      "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/core": true,
        "https://sourcemeta.com/vocab/test-1": true
      }
    })JSON"));
  } else if (identifier == "https://sourcemeta.com/custom-vocab") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://sourcemeta.com/custom-vocab",
      "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/core": true,
        "https://sourcemeta.com/vocab/test-2": true
      }
    })JSON"));
  } else {
    sourcemeta::jsontoolkit::DefaultResolver resolver;
    const std::optional<sourcemeta::jsontoolkit::JSON> result{
        resolver(identifier).get()};
    if (result.has_value()) {
      promise.set_value(sourcemeta::jsontoolkit::JSON{result.value()});
    } else {
      promise.set_value(std::nullopt);
    }
  }

  return promise.get_future();
}

static auto
test_walker(const std::string &keyword,
            const std::unordered_map<std::string, bool> &vocabularies)
    -> sourcemeta::jsontoolkit::schema_walker_strategy_t {
  if (vocabularies.find("https://sourcemeta.com/vocab/test-1") !=
      vocabularies.end()) {
    if (keyword == "schema") {
      return sourcemeta::jsontoolkit::schema_walker_strategy_t::Value;
    }

    if (keyword == "schemas") {
      return sourcemeta::jsontoolkit::schema_walker_strategy_t::Elements;
    }

    if (keyword == "schemaMap") {
      return sourcemeta::jsontoolkit::schema_walker_strategy_t::Members;
    }

    if (keyword == "schemaOrSchemas") {
      return sourcemeta::jsontoolkit::schema_walker_strategy_t::ValueOrElements;
    }

    if (keyword == "schemasOrMap") {
      return sourcemeta::jsontoolkit::schema_walker_strategy_t::
          ElementsOrMembers;
    }
  }

  if (vocabularies.find("https://sourcemeta.com/vocab/test-2") !=
      vocabularies.end()) {
    if (keyword == "custom") {
      return sourcemeta::jsontoolkit::schema_walker_strategy_t::Value;
    }
  }

  return sourcemeta::jsontoolkit::schema_walker_strategy_t::None;
}

TEST(JSONSchema, walker_true) {
  const sourcemeta::jsontoolkit::JSON document{true};
  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(subschema);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.at(0).is_boolean(), true);
  EXPECT_EQ(subschemas.at(0).to_boolean(), true);
}

TEST(JSONSchema, walker_false) {
  const sourcemeta::jsontoolkit::JSON document{false};
  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(subschema);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.at(0).to_boolean(), false);
}

TEST(JSONSchema, walker_value) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": {
      "schema": {
        "foo": 1
      }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(subschema);
  }

  EXPECT_EQ(subschemas.size(), 3);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": {
      "schema": {
        "foo": 1
      }
    }
  })JSON"));
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": {
      "foo": 1
    }
  })JSON"));
  EXPECT_EQ(subschemas.at(2), sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": 1
  })JSON"));
}

TEST(JSONSchema, walker_value_invalid) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": [ { "foo": 1 } ]
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(subschema);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": [ { "foo": 1 } ]
  })JSON"));
}

TEST(JSONSchema, walker_elements) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemas": [ { "foo": 1 }, { "schema": { "bar": 2 } } ]
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(subschema);
  }

  EXPECT_EQ(subschemas.size(), 4);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemas": [ { "foo": 1 }, { "schema": { "bar": 2 } } ]
  })JSON"));
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": 1
  })JSON"));
  EXPECT_EQ(subschemas.at(2), sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": { "bar": 2 }
  })JSON"));
  EXPECT_EQ(subschemas.at(3), sourcemeta::jsontoolkit::parse(R"JSON({
    "bar": 2
  })JSON"));
}

TEST(JSONSchema, walker_elements_invalid) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemas": { "foo": 1 }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(subschema);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemas": { "foo": 1 }
  })JSON"));
}

TEST(JSONSchema, walker_members) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemaMap": {
      "foo": {
        "schema": {
          "bar": 1
        }
      }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(subschema);
  }

  EXPECT_EQ(subschemas.size(), 3);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemaMap": {
      "foo": {
        "schema": {
          "bar": 1
        }
      }
    }
  })JSON"));
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": { "bar": 1 }
  })JSON"));
  EXPECT_EQ(subschemas.at(2), sourcemeta::jsontoolkit::parse(R"JSON({
    "bar": 1
  })JSON"));
}

TEST(JSONSchema, walker_members_invalid) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemaMap": [ { "foo": 1 } ]
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(subschema);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemaMap": [ { "foo": 1 } ]
  })JSON"));
}

TEST(JSONSchema, walker_value_or_elements) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemaOrSchemas": {
      "schemaOrSchemas": [
        { "foo": 1 }
      ]
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(subschema);
  }

  EXPECT_EQ(subschemas.size(), 3);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemaOrSchemas": {
      "schemaOrSchemas": [
        { "foo": 1 }
      ]
    }
  })JSON"));
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "schemaOrSchemas": [ { "foo": 1 } ]
  })JSON"));

  EXPECT_EQ(subschemas.at(2), sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": 1
  })JSON"));
}

TEST(JSONSchema, walker_elements_or_members) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemasOrMap": [
      {
        "schemasOrMap": {
          "foo": { "bar": 1 }
        }
      }
    ]
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(subschema);
  }

  EXPECT_EQ(subschemas.size(), 3);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemasOrMap": [
      {
        "schemasOrMap": {
          "foo": { "bar": 1 }
        }
      }
    ]
  })JSON"));
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "schemasOrMap": {
      "foo": { "bar": 1 }
    }
  })JSON"));
  EXPECT_EQ(subschemas.at(2), sourcemeta::jsontoolkit::parse(R"JSON({
    "bar": 1
  })JSON"));
}

TEST(JSONSchema, walker_no_metaschema_and_not_default) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": { "foo": 1 }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(subschema);
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": { "foo": 1 }
  })JSON"));
}

TEST(JSONSchema, walker_no_metaschema_with_default) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": {
      "schema": {
        "foo": 1
      }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver,
           "https://sourcemeta.com/test-metaschema")) {
    subschemas.push_back(subschema);
  }

  EXPECT_EQ(subschemas.size(), 3);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": {
      "schema": {
        "foo": 1
      }
    }
  })JSON"));
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": {
      "foo": 1
    }
  })JSON"));
  EXPECT_EQ(subschemas.at(2), sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": 1
  })JSON"));
}

TEST(JSONSchema, walker_unknown_keyword_from_other_vocab) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": {
      "custom": { "foo": 1 }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(subschema);
  }

  EXPECT_EQ(subschemas.size(), 2);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": {
      "custom": { "foo": 1 }
    }
  })JSON"));
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "custom": { "foo": 1 }
  })JSON"));
}

TEST(JSONSchema, walker_multi_metaschemas) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": {
      "$schema": "https://sourcemeta.com/custom-vocab",
      "custom": { "foo": 1 }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(subschema);
  }

  EXPECT_EQ(subschemas.size(), 3);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": {
      "$schema": "https://sourcemeta.com/custom-vocab",
      "custom": { "foo": 1 }
    }
  })JSON"));
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/custom-vocab",
    "custom": { "foo": 1 }
  })JSON"));
  EXPECT_EQ(subschemas.at(2), sourcemeta::jsontoolkit::parse(R"JSON({
    "foo": 1
  })JSON"));
}

TEST(JSONSchema, walker_flat_const) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": {
      "schema": { "foo": 1 }
    },
    "schemaMap": {
      "foo": {
        "schema": { "foo": 2 }
      }
    }
  })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::flat_subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(subschema);
  }

  EXPECT_EQ(subschemas.size(), 2);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": { "foo": 1 }
  })JSON"));
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": { "foo": 2 }
  })JSON"));
}

TEST(JSONSchema, walker_flat_non_const) {
  const std::string json{R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": {
      "schema": { "foo": 1 }
    },
    "schemaMap": {
      "foo": {
        "schema": { "foo": 2 }
      }
    }
  })JSON"};

  sourcemeta::jsontoolkit::JSON document = sourcemeta::jsontoolkit::parse(json);
  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (sourcemeta::jsontoolkit::JSON &subschema :
       sourcemeta::jsontoolkit::flat_subschema_iterator(document, test_walker,
                                                        test_resolver)) {
    subschemas.push_back(subschema);
  }

  EXPECT_EQ(subschemas.size(), 2);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": { "foo": 1 }
  })JSON"));
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": { "foo": 2 }
  })JSON"));
}

TEST(JSONSchema, walker_flat_non_const_modify) {
  const std::string json{R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": {
      "schema": { "foo": 1 }
    },
    "schemaMap": {
      "foo": {
        "schema": { "foo": 2 }
      }
    }
  })JSON"};

  sourcemeta::jsontoolkit::JSON document = sourcemeta::jsontoolkit::parse(json);
  for (sourcemeta::jsontoolkit::JSON &subschema :
       sourcemeta::jsontoolkit::flat_subschema_iterator(document, test_walker,
                                                        test_resolver)) {
    subschema.into(sourcemeta::jsontoolkit::JSON{true});
  }

  EXPECT_EQ(document, sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": true,
    "schemaMap": {
      "foo": true
    }
  })JSON"));
}

TEST(JSONSchema, walker_flat_const_no_metaschema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({ "foo": 1 })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::flat_subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(subschema);
  }

  EXPECT_EQ(subschemas.size(), 0);
}

TEST(JSONSchema, walker_flat_non_const_no_metaschema) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({ "foo": 1 })JSON");

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (auto &subschema : sourcemeta::jsontoolkit::flat_subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(subschema);
  }

  EXPECT_EQ(subschemas.size(), 0);
}

TEST(JSONSchema, schema_walker_none_never_walks) {
  const std::unordered_map<std::string, bool> vocabularies{
      {"https://json-schema.org/draft/2020-12/vocab/core", true},
      {"https://json-schema.org/draft/2020-12/vocab/applicator", true},
      {"https://json-schema.org/draft/2020-12/vocab/unevaluated", true},
      {"https://json-schema.org/draft/2020-12/vocab/validation", true},
      {"https://json-schema.org/draft/2020-12/vocab/meta-data", true},
      {"https://json-schema.org/draft/2020-12/vocab/format-annotation", true},
      {"https://json-schema.org/draft/2020-12/vocab/content", true}};

  EXPECT_EQ(
      sourcemeta::jsontoolkit::schema_walker_none("properties", vocabularies),
      sourcemeta::jsontoolkit::schema_walker_strategy_t::None);
  EXPECT_EQ(sourcemeta::jsontoolkit::schema_walker_none("contentSchema",
                                                        vocabularies),
            sourcemeta::jsontoolkit::schema_walker_strategy_t::None);
  EXPECT_EQ(sourcemeta::jsontoolkit::schema_walker_none("unevaluatedItems",
                                                        vocabularies),
            sourcemeta::jsontoolkit::schema_walker_strategy_t::None);
}
