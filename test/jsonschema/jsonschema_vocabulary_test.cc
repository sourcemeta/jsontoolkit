#include <gtest/gtest.h>
#include <jsontoolkit/json.h>
#include <jsontoolkit/jsonschema.h>

#include <future> // std::promise, std::future
#include <string> // std::string

static auto test_resolver(const std::string &identifier)
    -> std::future<std::optional<sourcemeta::jsontoolkit::JSON>> {
  std::promise<std::optional<sourcemeta::jsontoolkit::JSON>> promise;

  if (identifier == "https://sourcemeta.com/2020-12-custom-vocabularies") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/2020-12-custom-vocabularies",
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/core": true,
        "https://json-schema.org/draft/2020-12/vocab/applicator": true,
        "https://json-schema.org/draft/2020-12/vocab/validation": false
      }
    })JSON"));
  } else if (identifier ==
             "https://sourcemeta.com/2019-09-custom-vocabularies") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/2019-09-custom-vocabularies",
      "$schema": "https://json-schema.org/draft/2019-09/schema",
      "$vocabulary": {
        "https://json-schema.org/draft/2019-09/vocab/core": true,
        "https://json-schema.org/draft/2019-09/vocab/applicator": true,
        "https://json-schema.org/draft/2019-09/vocab/validation": false
      }
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
  } else if (identifier == "https://sourcemeta.com/metaschema_4") {
    // Missing core
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/metaschema_4",
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/validation": true
      }
    })JSON"));
  } else if (identifier == "https://sourcemeta.com/2020-12-no-vocabularies") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/2020-12-no-vocabularies",
      "$schema": "https://json-schema.org/draft/2020-12/schema"
    })JSON"));
  } else if (identifier ==
             "https://sourcemeta.com/2020-12-hyper-no-vocabularies") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/2020-12-hyper-no-vocabularies",
      "$schema": "https://json-schema.org/draft/2020-12/hyper-schema"
    })JSON"));
  } else if (identifier == "https://sourcemeta.com/2019-09-no-vocabularies") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/2019-09-no-vocabularies",
      "$schema": "https://json-schema.org/draft/2019-09/schema"
    })JSON"));
  } else if (identifier ==
             "https://sourcemeta.com/2019-09-hyper-no-vocabularies") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/2019-09-hyper-no-vocabularies",
      "$schema": "https://json-schema.org/draft/2019-09/hyper-schema"
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
    sourcemeta::jsontoolkit::DefaultResolver resolver;
    const std::optional<sourcemeta::jsontoolkit::JSON> result{
        resolver(identifier).get()};
    if (result.has_value()) {
      promise.set_value(sourcemeta::jsontoolkit::from(result.value()));
    } else {
      promise.set_value(std::nullopt);
    }
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

TEST(jsonschema_vocabulary, core_vocabularies_boolean_without_default) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(true)};
  EXPECT_THROW(sourcemeta::jsontoolkit::vocabularies(document, test_resolver),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(jsonschema_vocabulary, core_vocabularies_boolean_with_default) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(true)};
  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(
          document, test_resolver,
          "https://sourcemeta.com/2020-12-custom-vocabularies")
          .get()};
  EXPECT_EQ(vocabularies.size(), 3);
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/core");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/applicator");
  EXPECT_VOCABULARY_OPTIONAL(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/validation");
}

TEST(jsonschema_vocabulary, default_metaschema_with_boolean) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::from(true)};
  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(
          document, test_resolver,
          "https://sourcemeta.com/2020-12-custom-vocabularies")
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
      sourcemeta::jsontoolkit::vocabularies(
          document, test_resolver,
          "https://sourcemeta.com/2020-12-custom-vocabularies")
          .get()};
  EXPECT_EQ(vocabularies.size(), 3);
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

TEST(jsonschema_vocabulary, real_metaschema_takes_precedence_over_default) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/2020-12-no-vocabularies"
  })JSON")};
  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(
          document, test_resolver,
          "https://sourcemeta.com/2020-12-custom-vocabularies")
          .get()};
  EXPECT_EQ(vocabularies.size(), 6);
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/core");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/applicator");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/unevaluated");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/validation");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/content");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/meta-data");
}

TEST(jsonschema_vocabulary, custom_metaschema_3_invalid) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/metaschema_3"
  })JSON")};

  EXPECT_THROW(sourcemeta::jsontoolkit::vocabularies(document, test_resolver),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(jsonschema_vocabulary, custom_metaschema_4_invalid) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/metaschema_4"
  })JSON")};

  EXPECT_THROW(sourcemeta::jsontoolkit::vocabularies(document, test_resolver),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(jsonschema_vocabulary, no_vocabularies_2020_12) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/2020-12-no-vocabularies"
  })JSON")};
  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  EXPECT_EQ(vocabularies.size(), 6);
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/core");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/applicator");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/unevaluated");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/validation");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/content");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/meta-data");
}

TEST(jsonschema_vocabulary, no_vocabularies_2020_12_hyper) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/2020-12-hyper-no-vocabularies"
  })JSON")};
  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  EXPECT_EQ(vocabularies.size(), 6);
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/core");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/applicator");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/unevaluated");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/validation");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/content");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/meta-data");
}

TEST(jsonschema_vocabulary, hyper_2020_12) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/hyper-schema"
  })JSON")};
  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  EXPECT_EQ(vocabularies.size(), 8);
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/core");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/applicator");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/unevaluated");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/validation");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies,
      "https://json-schema.org/draft/2020-12/vocab/format-annotation");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/content");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/meta-data");
  // Notice this is 2019-09. That's actually correct.
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/hyper-schema");
}

TEST(jsonschema_vocabulary, no_vocabularies_2019_09) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/2019-09-no-vocabularies"
  })JSON")};
  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  EXPECT_EQ(vocabularies.size(), 6);
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/core");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/applicator");
  EXPECT_VOCABULARY_OPTIONAL(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/format");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/validation");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/content");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/meta-data");
}

TEST(jsonschema_vocabulary, no_vocabularies_2019_09_hyper) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/2019-09-hyper-no-vocabularies"
  })JSON")};
  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  EXPECT_EQ(vocabularies.size(), 6);
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/core");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/applicator");
  EXPECT_VOCABULARY_OPTIONAL(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/format");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/validation");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/content");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/meta-data");
}

TEST(jsonschema_vocabulary, hyper_2019_09) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/hyper-schema"
  })JSON")};
  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  EXPECT_EQ(vocabularies.size(), 7);
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/core");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/applicator");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/validation");
  EXPECT_VOCABULARY_OPTIONAL(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/format");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/content");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/meta-data");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/hyper-schema");
}

TEST(jsonschema_vocabulary, custom_vocabularies_2020_12) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/2020-12-custom-vocabularies"
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

TEST(jsonschema_vocabulary, custom_vocabularies_2019_09) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/2019-09-custom-vocabularies"
  })JSON")};
  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  EXPECT_EQ(vocabularies.size(), 3);
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/core");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/applicator");
  EXPECT_VOCABULARY_OPTIONAL(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/validation");
}
