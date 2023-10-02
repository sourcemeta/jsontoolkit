#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <future> // std::promise, std::future
#include <string> // std::string

static auto test_resolver(std::string_view identifier)
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

TEST(JSONSchema_base_dialect, boolean_schema_true) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("true");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(document, test_resolver).get()};
  EXPECT_FALSE(base_dialect.has_value());
}

TEST(JSONSchema_base_dialect, boolean_schema_false) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("false");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(document, test_resolver).get()};
  EXPECT_FALSE(base_dialect.has_value());
}

TEST(JSONSchema_base_dialect, boolean_schema_default_metaschema_one_hop) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("true");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, test_resolver, "https://sourcemeta.com/metaschema_1")
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "https://sourcemeta.com/metaschema_1");
}

TEST(JSONSchema_base_dialect, boolean_schema_default_metaschema_two_hops) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("true");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, test_resolver, "https://sourcemeta.com/metaschema_2")
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "https://sourcemeta.com/metaschema_1");
}

TEST(JSONSchema_base_dialect, self_descriptive_schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "https://example.com/my-schema"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(document, test_resolver).get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "https://example.com/my-schema");
}

TEST(JSONSchema_base_dialect, non_resolvable_schema_with_id) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "https://example.com/does-not-exist"
  })JSON");
  EXPECT_THROW(sourcemeta::jsontoolkit::base_dialect(document, test_resolver),
               sourcemeta::jsontoolkit::ResolutionError);
}

TEST(JSONSchema_base_dialect, non_resolvable_schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://example.com/does-not-exist"
  })JSON");
  EXPECT_THROW(sourcemeta::jsontoolkit::base_dialect(document, test_resolver),
               sourcemeta::jsontoolkit::ResolutionError);
}

TEST(JSONSchema_base_dialect, non_resolvable_default_schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{}");
  EXPECT_THROW(
      sourcemeta::jsontoolkit::base_dialect(
          document, test_resolver, "https://example.com/does-not-exist"),
      sourcemeta::jsontoolkit::ResolutionError);
}

TEST(JSONSchema_base_dialect, id_with_one_hop) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "https://sourcemeta.com/metaschema_1"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(document, test_resolver).get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "https://sourcemeta.com/metaschema_1");
}

TEST(JSONSchema_base_dialect, id_with_two_hops) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://example.com/my-schema",
    "$schema": "https://sourcemeta.com/metaschema_2"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(document, test_resolver).get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "https://sourcemeta.com/metaschema_1");
}

TEST(JSONSchema_base_dialect, no_id_with_one_hop) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/metaschema_1"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(document, test_resolver).get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "https://sourcemeta.com/metaschema_1");
}

TEST(JSONSchema_base_dialect, no_id_with_two_hops) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/metaschema_2"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(document, test_resolver).get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "https://sourcemeta.com/metaschema_1");
}

TEST(JSONSchema_base_dialect, self_descriptive_metaschema_without_schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://sourcemeta.com/no-schema",
    "$schema": "https://sourcemeta.com/no-schema"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(document, test_resolver).get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "https://sourcemeta.com/no-schema");
}

TEST(JSONSchema_base_dialect, metaschema_without_schema_one_hop) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/metaschema_3"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(document, test_resolver).get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "https://sourcemeta.com/no-schema");
}

TEST(JSONSchema_base_dialect, id_self_descriptive_default_metaschema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://sourcemeta.com/foo-bar"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(document, test_resolver,
                                            "https://sourcemeta.com/foo-bar")
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "https://sourcemeta.com/foo-bar");
}

TEST(JSONSchema_base_dialect, id_default_metaschema_one_hop) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://sourcemeta.com/foo-bar"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, test_resolver, "https://sourcemeta.com/metaschema_1")
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "https://sourcemeta.com/metaschema_1");
}

TEST(JSONSchema_base_dialect, id_default_metaschema_two_hops) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$id": "https://sourcemeta.com/foo-bar"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, test_resolver, "https://sourcemeta.com/metaschema_2")
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "https://sourcemeta.com/metaschema_1");
}

TEST(JSONSchema_base_dialect, default_metaschema_one_hop) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{}");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, test_resolver, "https://sourcemeta.com/metaschema_1")
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "https://sourcemeta.com/metaschema_1");
}

TEST(JSONSchema_base_dialect, default_metaschema_two_hops) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{}");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, test_resolver, "https://sourcemeta.com/metaschema_2")
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "https://sourcemeta.com/metaschema_1");
}

TEST(JSONSchema_base_dialect, default_metaschema_precedence) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/metaschema_6"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, test_resolver, "https://sourcemeta.com/metaschema_1")
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "https://sourcemeta.com/metaschema_6");
}

TEST(JSONSchema_base_dialect, jsonschema_base_dialect_4_one_hop) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/metaschema_4"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(document, test_resolver).get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "http://json-schema.org/draft-04/schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_base_dialect_4_two_hops) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/metaschema_5"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(document, test_resolver).get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "http://json-schema.org/draft-04/schema#");
}

/*
 * Official base_dialects
 */

TEST(JSONSchema_base_dialect, jsonschema_draft_hyperschema_0) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-00/hyper-schema#",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-00/hyper-schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_schema_0) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-00/schema#",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-00/hyper-schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_jsonref_0) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-00/json-ref#"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-00/hyper-schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_links_0) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-00/links#"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-00/hyper-schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_hyperschema_1) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-01/hyper-schema#",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-01/hyper-schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_schema_1) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-01/schema#",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-01/hyper-schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_jsonref_1) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-01/json-ref#"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-01/hyper-schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_links_1) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-01/links#"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-01/hyper-schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_hyperschema_2) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-02/hyper-schema#",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-02/hyper-schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_schema_2) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-02/schema#",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-02/hyper-schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_jsonref_2) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-02/json-ref#"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-02/hyper-schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_links_2) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-02/links#"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-02/hyper-schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_hyperschema_3) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-03/hyper-schema#",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-03/hyper-schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_schema_3) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-03/schema#",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "http://json-schema.org/draft-03/schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_jsonref_3) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-03/json-ref#"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-03/hyper-schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_links_3) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-03/links#"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-03/hyper-schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_hyperschema_4) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/hyper-schema#",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-04/hyper-schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_schema_4) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "http://json-schema.org/draft-04/schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_links_4) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-04/links#"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-04/hyper-schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_hyperschema_6) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-06/hyper-schema#",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-06/hyper-schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_schema_6) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-06/schema#",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "http://json-schema.org/draft-06/schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_links_6) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-06/links#"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-06/hyper-schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_hyperschema_7) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/hyper-schema#",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-07/hyper-schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_schema_7) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "http://json-schema.org/draft-07/schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_links_7) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/links#"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "http://json-schema.org/draft-07/hyper-schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_draft_hyperschema_output_7) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/hyper-schema-output"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "http://json-schema.org/draft-07/schema#");
}

TEST(JSONSchema_base_dialect, jsonschema_schema_2019_09) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2019-09/schema");
}

TEST(JSONSchema_base_dialect, jsonschema_hyperschema_2019_09) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/hyper-schema",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2019-09/hyper-schema");
}

TEST(JSONSchema_base_dialect, jsonschema_links_2019_09) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/links"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2019-09/schema");
}

TEST(JSONSchema_base_dialect, jsonschema_output_2019_09) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/output/schema"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2019-09/schema");
}

TEST(JSONSchema_base_dialect, jsonschema_output_hyperschema_2019_09) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/output/hyper-schema"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2019-09/schema");
}

TEST(JSONSchema_base_dialect, jsonschema_meta_applicator_2019_09) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/meta/applicator"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2019-09/schema");
}

TEST(JSONSchema_base_dialect, jsonschema_meta_content_2019_09) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/meta/content"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2019-09/schema");
}

TEST(JSONSchema_base_dialect, jsonschema_meta_core_2019_09) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/meta/core"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2019-09/schema");
}

TEST(JSONSchema_base_dialect, jsonschema_meta_format_2019_09) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/meta/format"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2019-09/schema");
}

TEST(JSONSchema_base_dialect, jsonschema_meta_hyperschema_2019_09) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/meta/hyper-schema"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2019-09/hyper-schema");
}

TEST(JSONSchema_base_dialect, jsonschema_meta_meta_data_2019_09) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/meta/meta-data"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2019-09/schema");
}

TEST(JSONSchema_base_dialect, jsonschema_meta_validation_2019_09) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2019-09/meta/validation"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2019-09/schema");
}

TEST(JSONSchema_base_dialect, jsonschema_schema_2020_12) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_base_dialect, jsonschema_hyperschema_2020_12) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/hyper-schema",
    "type": "object"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/hyper-schema");
}

TEST(JSONSchema_base_dialect, jsonschema_links_2020_12) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/links"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_base_dialect, jsonschema_output_2020_12) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/output/schema"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_base_dialect, jsonschema_meta_applicator_2020_12) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/meta/applicator"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_base_dialect, jsonschema_meta_content_2020_12) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/meta/content"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_base_dialect, jsonschema_meta_core_2020_12) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/meta/core"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_base_dialect, jsonschema_meta_format_annotation_2020_12) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/meta/format-annotation"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_base_dialect, jsonschema_meta_format_assertion_2020_12) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/meta/format-assertion"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_base_dialect, jsonschema_meta_hyperschema_2020_12) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/meta/hyper-schema"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/hyper-schema");
}

TEST(JSONSchema_base_dialect, jsonschema_meta_meta_data_2020_12) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/meta/meta-data"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_base_dialect, jsonschema_meta_unevaluated_2020_12) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/meta/unevaluated"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema_base_dialect, jsonschema_meta_validation_2020_12) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/meta/validation"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, sourcemeta::jsontoolkit::official_resolver)
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(),
            "https://json-schema.org/draft/2020-12/schema");
}
