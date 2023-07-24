#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <future> // std::promise, std::future
#include <string> // std::string

static auto test_resolver(const std::string &identifier)
    -> std::future<std::optional<sourcemeta::jsontoolkit::JSON>> {
  std::promise<std::optional<sourcemeta::jsontoolkit::JSON>> promise;

  if (identifier == "https://sourcemeta.com/metaschema_1") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/metaschema_1",
      "$schema": "https://sourcemeta.com/metaschema_1"
    })JSON"));
  } else if (identifier == "https://sourcemeta.com/metaschema_2") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/metaschema_2",
      "$schema": "https://sourcemeta.com/metaschema_1"
    })JSON"));
  } else if (identifier == "https://sourcemeta.com/no-schema") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/no-schema"
    })JSON"));
  } else if (identifier == "https://sourcemeta.com/metaschema_3") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/metaschema_3",
      "$schema": "https://sourcemeta.com/no-schema"
    })JSON"));
  } else if (identifier == "https://sourcemeta.com/metaschema_4") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "id": "https://sourcemeta.com/metaschema_4",
      "$schema": "http://json-schema.org/draft-04/schema#"
    })JSON"));
  } else if (identifier == "https://sourcemeta.com/metaschema_5") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "id": "https://sourcemeta.com/metaschema_5",
      "$schema": "https://sourcemeta.com/metaschema_4"
    })JSON"));
  } else if (identifier == "https://sourcemeta.com/metaschema_6") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$id": "https://sourcemeta.com/metaschema_6",
      "$schema": "https://sourcemeta.com/metaschema_6"
    })JSON"));
  } else {
    promise.set_value(std::nullopt);
  }

  return promise.get_future();
}

TEST(jsonschema_draft, boolean_schema_true) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("true")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver).get()};
  EXPECT_FALSE(draft.has_value());
}

TEST(jsonschema_draft, boolean_schema_false) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("false")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver).get()};
  EXPECT_FALSE(draft.has_value());
}

TEST(jsonschema_draft, boolean_schema_default_metaschema_one_hop) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("true")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver,
                                     "https://sourcemeta.com/metaschema_1")
          .get()};
  EXPECT_TRUE(draft.has_value());
  EXPECT_EQ(draft.value(), "https://sourcemeta.com/metaschema_1");
}

TEST(jsonschema_draft, boolean_schema_default_metaschema_two_hops) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("true")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver,
                                     "https://sourcemeta.com/metaschema_2")
          .get()};
  EXPECT_TRUE(draft.has_value());
  EXPECT_EQ(draft.value(), "https://sourcemeta.com/metaschema_1");
}

TEST(jsonschema_draft, self_descriptive_schema) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "https://example.com/my-schema"
  })JSON")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver).get()};
  EXPECT_TRUE(draft.has_value());
  EXPECT_EQ(draft.value(), "https://example.com/my-schema");
}

TEST(jsonschema_draft, non_resolvable_schema_with_id) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "https://example.com/does-not-exist"
  })JSON")};
  EXPECT_THROW(sourcemeta::jsontoolkit::draft(document, test_resolver),
               sourcemeta::jsontoolkit::ResolutionError);
}

TEST(jsonschema_draft, non_resolvable_schema) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://example.com/does-not-exist"
  })JSON")};
  EXPECT_THROW(sourcemeta::jsontoolkit::draft(document, test_resolver),
               sourcemeta::jsontoolkit::ResolutionError);
}

TEST(jsonschema_draft, non_resolvable_default_schema) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{}")};
  EXPECT_THROW(
      sourcemeta::jsontoolkit::draft(document, test_resolver,
                                     "https://example.com/does-not-exist"),
      sourcemeta::jsontoolkit::ResolutionError);
}

TEST(jsonschema_draft, id_with_one_hop) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "https://sourcemeta.com/metaschema_1"
  })JSON")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver).get()};
  EXPECT_TRUE(draft.has_value());
  EXPECT_EQ(draft.value(), "https://sourcemeta.com/metaschema_1");
}

TEST(jsonschema_draft, id_with_two_hops) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "https://sourcemeta.com/metaschema_2"
  })JSON")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver).get()};
  EXPECT_TRUE(draft.has_value());
  EXPECT_EQ(draft.value(), "https://sourcemeta.com/metaschema_1");
}

TEST(jsonschema_draft, no_id_with_one_hop) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/metaschema_1"
  })JSON")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver).get()};
  EXPECT_TRUE(draft.has_value());
  EXPECT_EQ(draft.value(), "https://sourcemeta.com/metaschema_1");
}

TEST(jsonschema_draft, no_id_with_two_hops) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/metaschema_2"
  })JSON")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver).get()};
  EXPECT_TRUE(draft.has_value());
  EXPECT_EQ(draft.value(), "https://sourcemeta.com/metaschema_1");
}

TEST(jsonschema_draft, self_descriptive_metaschema_without_schema) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://sourcemeta.com/no-schema",
    "$schema": "https://sourcemeta.com/no-schema"
  })JSON")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver).get()};
  EXPECT_TRUE(draft.has_value());
  EXPECT_EQ(draft.value(), "https://sourcemeta.com/no-schema");
}

TEST(jsonschema_draft, metaschema_without_schema_one_hop) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/metaschema_3"
  })JSON")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver).get()};
  EXPECT_TRUE(draft.has_value());
  EXPECT_EQ(draft.value(), "https://sourcemeta.com/no-schema");
}

TEST(jsonschema_draft, id_self_descriptive_default_metaschema) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://sourcemeta.com/foo-bar"
  })JSON")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver,
                                     "https://sourcemeta.com/foo-bar")
          .get()};
  EXPECT_TRUE(draft.has_value());
  EXPECT_EQ(draft.value(), "https://sourcemeta.com/foo-bar");
}

TEST(jsonschema_draft, id_default_metaschema_one_hop) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://sourcemeta.com/foo-bar"
  })JSON")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver,
                                     "https://sourcemeta.com/metaschema_1")
          .get()};
  EXPECT_TRUE(draft.has_value());
  EXPECT_EQ(draft.value(), "https://sourcemeta.com/metaschema_1");
}

TEST(jsonschema_draft, id_default_metaschema_two_hops) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://sourcemeta.com/foo-bar"
  })JSON")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver,
                                     "https://sourcemeta.com/metaschema_2")
          .get()};
  EXPECT_TRUE(draft.has_value());
  EXPECT_EQ(draft.value(), "https://sourcemeta.com/metaschema_1");
}

TEST(jsonschema_draft, default_metaschema_one_hop) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{}")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver,
                                     "https://sourcemeta.com/metaschema_1")
          .get()};
  EXPECT_TRUE(draft.has_value());
  EXPECT_EQ(draft.value(), "https://sourcemeta.com/metaschema_1");
}

TEST(jsonschema_draft, default_metaschema_two_hops) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse("{}")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver,
                                     "https://sourcemeta.com/metaschema_2")
          .get()};
  EXPECT_TRUE(draft.has_value());
  EXPECT_EQ(draft.value(), "https://sourcemeta.com/metaschema_1");
}

// In Draft 0, the official metaschema is defined on top of the
// official hyper-schema metaschema.
// See http://json-schema.org/draft-00/schema#
TEST(jsonschema_draft, jsonschema_draft_hyperschema_0) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-00/hyper-schema#",
    "type": "object"
  })JSON")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver).get()};
  EXPECT_TRUE(draft.has_value());
  EXPECT_EQ(draft.value(), "http://json-schema.org/draft-00/hyper-schema#");
}

// In Draft 1, the official metaschema is defined on top of the
// official hyper-schema metaschema.
// See http://json-schema.org/draft-01/schema#
TEST(jsonschema_draft, jsonschema_draft_hyperschema_1) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-01/hyper-schema#",
    "type": "object"
  })JSON")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver).get()};
  EXPECT_TRUE(draft.has_value());
  EXPECT_EQ(draft.value(), "http://json-schema.org/draft-01/hyper-schema#");
}

// In Draft 2, the official metaschema is defined on top of the
// official hyper-schema metaschema.
// See http://json-schema.org/draft-02/schema#
TEST(jsonschema_draft, jsonschema_draft_hyperschema_2) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-02/hyper-schema#",
    "type": "object"
  })JSON")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver).get()};
  EXPECT_TRUE(draft.has_value());
  EXPECT_EQ(draft.value(), "http://json-schema.org/draft-02/hyper-schema#");
}

TEST(jsonschema_draft, jsonschema_draft_3) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-03/schema#",
    "type": "object"
  })JSON")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver).get()};
  EXPECT_TRUE(draft.has_value());
  EXPECT_EQ(draft.value(), "http://json-schema.org/draft-03/schema#");
}

TEST(jsonschema_draft, jsonschema_draft_4) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object"
  })JSON")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver).get()};
  EXPECT_TRUE(draft.has_value());
  EXPECT_EQ(draft.value(), "http://json-schema.org/draft-04/schema#");
}

TEST(jsonschema_draft, jsonschema_draft_4_one_hop) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/metaschema_4"
  })JSON")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver).get()};
  EXPECT_TRUE(draft.has_value());
  EXPECT_EQ(draft.value(), "http://json-schema.org/draft-04/schema#");
}

TEST(jsonschema_draft, jsonschema_draft_4_two_hops) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/metaschema_5"
  })JSON")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver).get()};
  EXPECT_TRUE(draft.has_value());
  EXPECT_EQ(draft.value(), "http://json-schema.org/draft-04/schema#");
}

TEST(jsonschema_draft, default_metaschema_precedence) {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/metaschema_6"
  })JSON")};
  const std::optional<std::string> draft{
      sourcemeta::jsontoolkit::draft(document, test_resolver,
                                     "https://sourcemeta.com/metaschema_1")
          .get()};
  EXPECT_TRUE(draft.has_value());
  EXPECT_EQ(draft.value(), "https://sourcemeta.com/metaschema_6");
}
