#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <string> // std::string

static auto test_resolver(std::string_view identifier)
    -> std::optional<sourcemeta::jsontoolkit::JSON> {
  if (identifier == "https://sourcemeta.com/one-hop") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/one-hop",
      "$schema": "http://json-schema.org/draft-07/schema#"
    })JSON");
  } else if (identifier == "https://sourcemeta.com/with-vocabulary") {
    return sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/with-vocabulary",
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/core": true,
        "https://json-schema.org/draft/2020-12/vocab/applicator": true,
        "https://json-schema.org/draft/2020-12/vocab/validation": false
      }
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

TEST(JSONSchema_vocabulary_draft7, schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object"
  })JSON");
  const std::map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver)};
  EXPECT_EQ(vocabularies.size(), 1);
  EXPECT_VOCABULARY_REQUIRED(vocabularies,
                             "http://json-schema.org/draft-07/schema#");
}

TEST(JSONSchema_vocabulary_draft7, hyperschema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/hyper-schema#",
    "type": "object"
  })JSON");
  const std::map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver)};
  EXPECT_EQ(vocabularies.size(), 1);
  EXPECT_VOCABULARY_REQUIRED(vocabularies,
                             "http://json-schema.org/draft-07/hyper-schema#");
}

TEST(JSONSchema_vocabulary_draft7, one_hop) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/one-hop",
    "type": "object"
  })JSON");
  const std::map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver)};
  EXPECT_EQ(vocabularies.size(), 1);
  EXPECT_VOCABULARY_REQUIRED(vocabularies,
                             "http://json-schema.org/draft-07/schema#");
}

TEST(JSONSchema_vocabulary_draft7, ignore_vocabulary) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/with-vocabulary",
    "type": "object"
  })JSON");
  const std::map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, test_resolver)};
  EXPECT_EQ(vocabularies.size(), 1);
  EXPECT_VOCABULARY_REQUIRED(vocabularies,
                             "http://json-schema.org/draft-07/schema#");
}
