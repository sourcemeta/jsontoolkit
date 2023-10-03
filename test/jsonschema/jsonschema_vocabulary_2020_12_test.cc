#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <future> // std::promise, std::future
#include <string> // std::string

static auto test_resolver(std::string_view identifier)
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
  } else if (identifier == "https://sourcemeta.com/optional-core") {
    // Optional core
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/optional-core",
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/core": false
      }
    })JSON"));
  } else if (identifier == "https://sourcemeta.com/no-core") {
    // Missing core
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/no-core",
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
  } else {
    const std::optional<sourcemeta::jsontoolkit::JSON> result{
        sourcemeta::jsontoolkit::official_resolver(identifier).get()};
    if (result.has_value()) {
      promise.set_value(result.value());
    } else {
      promise.set_value(std::nullopt);
    }
  }

  return promise.get_future();
}

#define EXPECT_VOCABULARY_REQUIRED(vocabularies, vocabulary)                   \
  EXPECT_TRUE((vocabularies).contains(vocabulary));                            \
  EXPECT_TRUE((vocabularies).at(vocabulary));

#define EXPECT_VOCABULARY_OPTIONAL(vocabularies, vocabulary)                   \
  EXPECT_TRUE((vocabularies).contains(vocabulary));                            \
  EXPECT_FALSE((vocabularies).at(vocabulary));

TEST(JSONSchema_vocabulary_2020_12, core_vocabularies_boolean_with_default) {
  const sourcemeta::jsontoolkit::JSON document{true};
  const std::map<std::string, bool> vocabularies{
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

TEST(JSONSchema_vocabulary_2020_12,
     real_metaschema_takes_precedence_over_default) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/2020-12-no-vocabularies"
  })JSON");
  const std::map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(
          document, test_resolver,
          "https://sourcemeta.com/2020-12-custom-vocabularies")
          .get()};
  EXPECT_EQ(vocabularies.size(), 1);
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/core");
}

TEST(JSONSchema_vocabulary_2020_12, core_cannot_be_optional) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/optional-core"
  })JSON");

  EXPECT_THROW(sourcemeta::jsontoolkit::vocabularies(document, test_resolver),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(JSONSchema_vocabulary_2020_12, core_must_be_declared) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/no-core"
  })JSON");

  EXPECT_THROW(sourcemeta::jsontoolkit::vocabularies(document, test_resolver),
               sourcemeta::jsontoolkit::SchemaError);
}

TEST(JSONSchema_vocabulary_2020_12, no_vocabularies) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/2020-12-no-vocabularies"
  })JSON");
  const std::map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  EXPECT_EQ(vocabularies.size(), 1);
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/core");
}

TEST(JSONSchema_vocabulary_2020_12, no_vocabularies_hyper) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/2020-12-hyper-no-vocabularies"
  })JSON");
  const std::map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver).get()};
  EXPECT_EQ(vocabularies.size(), 1);
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2020-12/vocab/core");
}

TEST(JSONSchema_vocabulary_2020_12, hyper) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/hyper-schema"
  })JSON");
  const std::map<std::string, bool> vocabularies{
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
