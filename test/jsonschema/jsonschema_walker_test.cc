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
        "https://json-schema.org/draft/2020-12/vocab/applicator": true
      }
    })JSON"));
  } else {
    promise.set_value(std::nullopt);
  }

  return promise.get_future();
}

static auto test_walker(const std::string &keyword,
                        const std::unordered_map<std::string, bool> &)
    -> sourcemeta::jsontoolkit::schema_walker_strategy_t {
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
    return sourcemeta::jsontoolkit::schema_walker_strategy_t::ElementsOrMembers;
  }

  return sourcemeta::jsontoolkit::schema_walker_strategy_t::None;
}

TEST(jsonschema, walker_true) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(true)};
  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, vocabularies)) {
    subschemas.push_back(sourcemeta::jsontoolkit::from(subschema));
  }

  EXPECT_EQ(subschemas.size(), 1);
  EXPECT_EQ(sourcemeta::jsontoolkit::to_boolean(subschemas.at(0)), true);
}

TEST(jsonschema, walker_false) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(false)};
  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, vocabularies)) {
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

  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, vocabularies)) {
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

  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, vocabularies)) {
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

  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, vocabularies)) {
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

  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, vocabularies)) {
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

  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, vocabularies)) {
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

  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, vocabularies)) {
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

  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, vocabularies)) {
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

  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  std::vector<sourcemeta::jsontoolkit::JSON> subschemas;
  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, test_walker, vocabularies)) {
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
