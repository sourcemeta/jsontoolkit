#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <string> // std::string

static auto test_resolver(std::string_view identifier)
    -> std::optional<sourcemeta::jsontoolkit::JSON> {
  if (identifier == "https://sourcemeta.com/2019-09-custom-vocabularies") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/2019-09-custom-vocabularies",
      "$schema": "https://json-schema.org/draft/2019-09/schema",
      "$vocabulary": {
        "https://json-schema.org/draft/2019-09/vocab/core": true,
        "https://json-schema.org/draft/2019-09/vocab/applicator": true,
        "https://json-schema.org/draft/2019-09/vocab/validation": false
      }
    })JSON");
  } else if (identifier == "https://sourcemeta.com/2019-09-no-vocabularies") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/2019-09-no-vocabularies",
      "$schema": "https://json-schema.org/draft/2019-09/schema"
    })JSON");
  } else if (identifier ==
             "https://sourcemeta.com/2019-09-hyper-no-vocabularies") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/2019-09-hyper-no-vocabularies",
      "$schema": "https://json-schema.org/draft/2019-09/hyper-schema"
    })JSON");
  } else {
    return sourcemeta::jsontoolkit::official_resolver(identifier);
  }
}

#define EXPECT_VOCABULARY_REQUIRED(vocabularies, vocabulary)                   \
  EXPECT_TRUE((vocabularies).contains(vocabulary));                            \
  EXPECT_TRUE((vocabularies).at(vocabulary));

#define EXPECT_VOCABULARY_OPTIONAL(vocabularies, vocabulary)                   \
  EXPECT_TRUE((vocabularies).contains(vocabulary));                            \
  EXPECT_FALSE((vocabularies).at(vocabulary));

TEST(JSONSchema_vocabulary_2019_09, no_vocabularies) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/2019-09-no-vocabularies"
  })JSON");
  const std::map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver)};
  EXPECT_EQ(vocabularies.size(), 1);
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/core");
}

TEST(JSONSchema_vocabulary_2019_09, no_vocabularies_hyper) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/2019-09-hyper-no-vocabularies"
  })JSON");
  const std::map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver)};
  EXPECT_EQ(vocabularies.size(), 1);
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/core");
}

TEST(JSONSchema_vocabulary_2019_09, hyper) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/hyper-schema"
  })JSON");
  const std::map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver)};
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

TEST(JSONSchema_vocabulary_2019_09, custom_vocabularies) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/2019-09-custom-vocabularies"
  })JSON");
  const std::map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver)};
  EXPECT_EQ(vocabularies.size(), 3);
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/core");
  EXPECT_VOCABULARY_REQUIRED(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/applicator");
  EXPECT_VOCABULARY_OPTIONAL(
      vocabularies, "https://json-schema.org/draft/2019-09/vocab/validation");
}
