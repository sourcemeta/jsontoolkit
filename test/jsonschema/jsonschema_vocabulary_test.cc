#include <gtest/gtest.h>
#include <jsontoolkit/json.h>
#include <jsontoolkit/jsonschema.h>

#include <future> // std::promise, std::future
#include <string> // std::string

static auto test_resolver(const std::string &identifier)
    -> std::future<std::optional<sourcemeta::jsontoolkit::JSON>> {
  std::promise<std::optional<sourcemeta::jsontoolkit::JSON>> promise;

  if (identifier == "https://sourcemeta.com/metaschema_1") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/metaschema_1",
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/core": true,
        "https://json-schema.org/draft/2020-12/vocab/applicator": true,
        "https://json-schema.org/draft/2020-12/vocab/validation": false
      }
    })JSON"));
  } else if (identifier == "https://sourcemeta.com/metaschema_2") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/metaschema_2",
      "$schema": "https://json-schema.org/draft/2020-12/schema"
    })JSON"));
  } else if (identifier == "https://sourcemeta.com/metaschema_3") {
    // Optional core
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/metaschema_3",
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/core": false
      }
    })JSON"));
  } else if (identifier == "https://sourcemeta.com/invalid_1") {
    // No $id
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/core": true
      }
    })JSON"));
  } else if (identifier == "https://sourcemeta.com/invalid_2") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "non-matching-id",
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/core": true
      }
    })JSON"));
  } else {
    promise.set_value(std::nullopt);
  }

  return promise.get_future();
}

static auto EXPECT_VOCABULARY_REQUIRED(
    const std::unordered_map<std::string, bool> &vocabularies,
    const std::string &vocabulary) -> void {
  EXPECT_TRUE(vocabularies.find(vocabulary) != vocabularies.end());
  EXPECT_TRUE(vocabularies.at(vocabulary));
}

static auto EXPECT_VOCABULARY_OPTIONAL(
    const std::unordered_map<std::string, bool> &vocabularies,
    const std::string &vocabulary) -> void {
  EXPECT_TRUE(vocabularies.find(vocabulary) != vocabularies.end());
  EXPECT_FALSE(vocabularies.at(vocabulary));
}

static auto EXPECT_VOCABULARY_MISSING(
    const std::unordered_map<std::string, bool> &vocabularies,
    const std::string &vocabulary) -> void {
  EXPECT_TRUE(vocabularies.find(vocabulary) == vocabularies.end());
}

TEST(jsonschema_vocabulary, core_vocabularies_boolean) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(true)};
  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  EXPECT_EQ(vocabularies.size(), 1);
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/core");
}

TEST(jsonschema_vocabulary, default_metaschema_with_boolean) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(true)};
  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(
          document, test_resolver, "https://sourcemeta.com/metaschema_1")
          .get()};
  EXPECT_EQ(vocabularies.size(), 3);
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/core");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/applicator");
  EXPECT_VOCABULARY_OPTIONAL(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/validation");
}

TEST(jsonschema_vocabulary, not_random_vocabulary_boolean) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(true)};
  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  EXPECT_EQ(vocabularies.size(), 1);
  EXPECT_VOCABULARY_MISSING(vocabularies, "https://example.com/my-vocabulary");
}

TEST(jsonschema_vocabulary, unresolvable_metaschema) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://non-existent.com/metaschema"
  })JSON")};
  EXPECT_THROW(sourcemeta::jsontoolkit::vocabularies(document, test_resolver),
               std::runtime_error);
}

TEST(jsonschema_vocabulary, custom_metaschema_invalid_1) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/invalid_1"
  })JSON")};
  EXPECT_THROW(sourcemeta::jsontoolkit::vocabularies(document, test_resolver),
               std::runtime_error);
}

TEST(jsonschema_vocabulary, custom_metaschema_invalid_2) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/invalid_2"
  })JSON")};
  EXPECT_THROW(sourcemeta::jsontoolkit::vocabularies(document, test_resolver),
               std::runtime_error);
}

TEST(jsonschema_vocabulary, custom_metaschema_1) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/metaschema_1"
  })JSON")};
  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  EXPECT_EQ(vocabularies.size(), 3);
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/core");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/applicator");
  EXPECT_VOCABULARY_OPTIONAL(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/validation");
}

TEST(jsonschema_vocabulary, custom_metaschema_2) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/metaschema_2"
  })JSON")};
  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  EXPECT_EQ(vocabularies.size(), 3);
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/core");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/applicator");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/unevaluated");
}

TEST(jsonschema_vocabulary, real_metaschema_takes_precedence_over_default) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/metaschema_2"
  })JSON")};
  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(
          document, test_resolver, "https://sourcemeta.com/metaschema_1")
          .get()};
  EXPECT_EQ(vocabularies.size(), 3);
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/core");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/applicator");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/unevaluated");
}

TEST(jsonschema_vocabulary, custom_metaschema_3) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/metaschema_3"
  })JSON")};
  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  EXPECT_EQ(vocabularies.size(), 1);
  // Core must always be required, even if a metaschema claims its optional
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/core");
}
