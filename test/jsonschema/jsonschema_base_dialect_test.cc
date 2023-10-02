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
      "$id": "https://sourcemeta.com/metaschema_4",
      "$schema": "https://sourcemeta.com/metaschema_4"
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

TEST(JSONSchema_base_dialect, boolean_schema_default_dialect_one_hop) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("true");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, test_resolver, "https://sourcemeta.com/metaschema_1")
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "https://sourcemeta.com/metaschema_1");
}

TEST(JSONSchema_base_dialect, boolean_schema_default_dialect_two_hops) {
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
               sourcemeta::jsontoolkit::SchemaResolutionError);
}

TEST(JSONSchema_base_dialect, non_resolvable_schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://example.com/does-not-exist"
  })JSON");
  EXPECT_THROW(sourcemeta::jsontoolkit::base_dialect(document, test_resolver),
               sourcemeta::jsontoolkit::SchemaResolutionError);
}

TEST(JSONSchema_base_dialect, non_resolvable_default_schema) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{}");
  EXPECT_THROW(
      sourcemeta::jsontoolkit::base_dialect(
          document, test_resolver, "https://example.com/does-not-exist"),
      sourcemeta::jsontoolkit::SchemaResolutionError);
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

TEST(JSONSchema_base_dialect, id_self_descriptive_default_dialect) {
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

TEST(JSONSchema_base_dialect, id_default_dialect_one_hop) {
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

TEST(JSONSchema_base_dialect, id_default_dialect_two_hops) {
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

TEST(JSONSchema_base_dialect, default_dialect_one_hop) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{}");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, test_resolver, "https://sourcemeta.com/metaschema_1")
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "https://sourcemeta.com/metaschema_1");
}

TEST(JSONSchema_base_dialect, default_dialect_two_hops) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{}");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, test_resolver, "https://sourcemeta.com/metaschema_2")
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "https://sourcemeta.com/metaschema_1");
}

TEST(JSONSchema_base_dialect, default_dialect_precedence) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://sourcemeta.com/metaschema_4"
  })JSON");
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(
          document, test_resolver, "https://sourcemeta.com/metaschema_1")
          .get()};
  EXPECT_TRUE(base_dialect.has_value());
  EXPECT_EQ(base_dialect.value(), "https://sourcemeta.com/metaschema_4");
}
