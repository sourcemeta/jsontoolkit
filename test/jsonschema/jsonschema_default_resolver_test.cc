#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

static auto
EXPECT_SCHEMA(const sourcemeta::jsontoolkit::SchemaResolver &resolver,
              const std::string &identifier) -> void {
  const std::optional<sourcemeta::jsontoolkit::JSON> result{
      resolver(identifier).get()};
  EXPECT_TRUE(result.has_value());
  const sourcemeta::jsontoolkit::JSON &document{result.value()};
  EXPECT_TRUE(document.is_object());
  EXPECT_TRUE(document.defines("$id"));
  EXPECT_EQ(document.at("$id").to_string(), identifier);
}

TEST(JSONSchema, default_resolver_jsonschema_2020_12) {
  sourcemeta::jsontoolkit::DefaultSchemaResolver resolver;
  EXPECT_SCHEMA(resolver, "https://json-schema.org/draft/2020-12/schema");
  EXPECT_SCHEMA(resolver,
                "https://json-schema.org/draft/2020-12/meta/applicator");
  EXPECT_SCHEMA(resolver, "https://json-schema.org/draft/2020-12/meta/content");
  EXPECT_SCHEMA(resolver, "https://json-schema.org/draft/2020-12/meta/core");
  EXPECT_SCHEMA(resolver,
                "https://json-schema.org/draft/2020-12/meta/format-annotation");
  EXPECT_SCHEMA(resolver,
                "https://json-schema.org/draft/2020-12/meta/format-assertion");
  EXPECT_SCHEMA(resolver,
                "https://json-schema.org/draft/2020-12/meta/hyper-schema");
  EXPECT_SCHEMA(resolver,
                "https://json-schema.org/draft/2020-12/meta/meta-data");
  EXPECT_SCHEMA(resolver,
                "https://json-schema.org/draft/2020-12/meta/unevaluated");
  EXPECT_SCHEMA(resolver,
                "https://json-schema.org/draft/2020-12/meta/validation");
}

TEST(JSONSchema, default_resolver_jsonschema_2019_09) {
  sourcemeta::jsontoolkit::DefaultSchemaResolver resolver;
  EXPECT_SCHEMA(resolver, "https://json-schema.org/draft/2019-09/schema");
  EXPECT_SCHEMA(resolver,
                "https://json-schema.org/draft/2019-09/meta/applicator");
  EXPECT_SCHEMA(resolver, "https://json-schema.org/draft/2019-09/meta/content");
  EXPECT_SCHEMA(resolver, "https://json-schema.org/draft/2019-09/meta/core");
  EXPECT_SCHEMA(resolver, "https://json-schema.org/draft/2019-09/meta/format");
  EXPECT_SCHEMA(resolver,
                "https://json-schema.org/draft/2019-09/meta/hyper-schema");
  EXPECT_SCHEMA(resolver,
                "https://json-schema.org/draft/2019-09/meta/meta-data");
  EXPECT_SCHEMA(resolver,
                "https://json-schema.org/draft/2019-09/meta/validation");
}

TEST(JSONSchema, default_resolver_idempotency) {
  sourcemeta::jsontoolkit::DefaultSchemaResolver resolver;
  EXPECT_SCHEMA(resolver, "https://json-schema.org/draft/2020-12/schema");
  EXPECT_SCHEMA(resolver, "https://json-schema.org/draft/2020-12/schema");
  EXPECT_SCHEMA(resolver, "https://json-schema.org/draft/2020-12/schema");
}

TEST(JSONSchema, default_resolver_invalid) {
  sourcemeta::jsontoolkit::DefaultSchemaResolver resolver;
  const std::optional<sourcemeta::jsontoolkit::JSON> result{
      resolver("https://example.com/foobar").get()};
  EXPECT_FALSE(result.has_value());
}
