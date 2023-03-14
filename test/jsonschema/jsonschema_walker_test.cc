#include <gtest/gtest.h>
#include <jsontoolkit/json.h>
#include <jsontoolkit/jsonschema.h>
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
    promise.set_value(std::nullopt);
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

TEST(jsonschema, walker_true) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(true)};
  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::from(subschema));
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_boolean(subschemas.at(0)), true);
}

TEST(jsonschema, walker_false) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(false)};
  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::from(subschema));
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_boolean(subschemas.at(0)), false);
}

TEST(jsonschema, walker_value) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": {
      "schema": {
        "foo": 1
      }
    }
  })JSON")};

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::from(subschema));
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

TEST(jsonschema, walker_value_invalid) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": [ { "foo": 1 } ]
  })JSON")};

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::from(subschema));
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": [ { "foo": 1 } ]
  })JSON"));
}

TEST(jsonschema, walker_elements) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemas": [ { "foo": 1 }, { "schema": { "bar": 2 } } ]
  })JSON")};

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::from(subschema));
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

TEST(jsonschema, walker_elements_invalid) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemas": { "foo": 1 }
  })JSON")};

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::from(subschema));
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemas": { "foo": 1 }
  })JSON"));
}

TEST(jsonschema, walker_members) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemaMap": {
      "foo": {
        "schema": {
          "bar": 1
        }
      }
    }
  })JSON")};

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::from(subschema));
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

TEST(jsonschema, walker_members_invalid) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemaMap": [ { "foo": 1 } ]
  })JSON")};

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::from(subschema));
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemaMap": [ { "foo": 1 } ]
  })JSON"));
}

TEST(jsonschema, walker_value_or_elements) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemaOrSchemas": {
      "schemaOrSchemas": [
        { "foo": 1 }
      ]
    }
  })JSON")};

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::from(subschema));
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

TEST(jsonschema, walker_elements_or_members) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schemasOrMap": [
      {
        "schemasOrMap": {
          "foo": { "bar": 1 }
        }
      }
    ]
  })JSON")};

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::from(subschema));
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

TEST(jsonschema, walker_no_metaschema_and_not_default) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": { "foo": 1 }
  })JSON")};

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::from(subschema));
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": { "foo": 1 }
  })JSON"));
}

TEST(jsonschema, walker_no_metaschema_with_default) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": {
      "schema": {
        "foo": 1
      }
    }
  })JSON")};

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver,
           "https://sourcemeta.com/test-metaschema")) {
    subschemas.push_back(sourcemeta::jsontoolkit::from(subschema));
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

TEST(jsonschema, walker_unknown_keyword_from_other_vocab) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": {
      "custom": { "foo": 1 }
    }
  })JSON")};

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::from(subschema));
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

TEST(jsonschema, walker_multi_metaschemas) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": {
      "$schema": "https://sourcemeta.com/custom-vocab",
      "custom": { "foo": 1 }
    }
  })JSON")};

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::from(subschema));
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

TEST(jsonschema, walker_flat_const) {
  const sourcemeta::jsontoolkit::JSON document{
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
  })JSON")};

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::flat_subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::from(subschema));
  }

  EXPECT_EQ(subschemas.size(), 2);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": { "foo": 1 }
  })JSON"));
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": { "foo": 2 }
  })JSON"));
}

TEST(jsonschema, walker_flat_non_const) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": {
      "schema": { "foo": 1 }
    },
    "schemaMap": {
      "foo": {
        "schema": { "foo": 2 }
      }
    }
  })JSON")};

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (sourcemeta::jsontoolkit::Value &subschema :
       sourcemeta::jsontoolkit::flat_subschema_iterator(document, test_walker,
                                                        test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::from(subschema));
  }

  EXPECT_EQ(subschemas.size(), 2);
  EXPECT_EQ(subschemas.at(0), sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": { "foo": 1 }
  })JSON"));
  EXPECT_EQ(subschemas.at(1), sourcemeta::jsontoolkit::parse(R"JSON({
    "schema": { "foo": 2 }
  })JSON"));
}

TEST(jsonschema, walker_flat_non_const_modify) {
  sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": {
      "schema": { "foo": 1 }
    },
    "schemaMap": {
      "foo": {
        "schema": { "foo": 2 }
      }
    }
  })JSON")};

  for (sourcemeta::jsontoolkit::Value &subschema :
       sourcemeta::jsontoolkit::flat_subschema_iterator(document, test_walker,
                                                        test_resolver)) {
    sourcemeta::jsontoolkit::set(document, subschema,
                                 sourcemeta::jsontoolkit::from(true));
  }

  EXPECT_EQ(document, sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/test-metaschema",
    "schema": true,
    "schemaMap": {
      "foo": true
    }
  })JSON"));
}

TEST(jsonschema, walker_flat_const_no_metaschema) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({ "foo": 1 })JSON")};

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::flat_subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::from(subschema));
  }

  EXPECT_EQ(subschemas.size(), 0);
}

TEST(jsonschema, walker_flat_non_const_no_metaschema) {
  sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({ "foo": 1 })JSON")};

  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (auto &subschema : sourcemeta::jsontoolkit::flat_subschema_iterator(
           document, test_walker, test_resolver)) {
    subschemas.push_back(sourcemeta::jsontoolkit::from(subschema));
  }

  EXPECT_EQ(subschemas.size(), 0);
}
