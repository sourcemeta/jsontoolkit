#include <gtest/gtest.h>
#include <jsontoolkit/contrib/resolver.h>
#include <jsontoolkit/json.h>
#include <jsontoolkit/jsonschema.h>

static auto
EXPECT_SCHEMA(const sourcemeta::jsontoolkit::schema_resolver_t &resolver,
              const std::string &identifier) -> void {
  const std::optional<sourcemeta::jsontoolkit::JSON> result{
      resolver(identifier).get()};
  EXPECT_TRUE(result.has_value());
  const sourcemeta::jsontoolkit::JSON &document{result.value()};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "$id"));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(
                sourcemeta::jsontoolkit::at(document, "$id")),
            identifier);
}

TEST(Resolver, jsonschema_2020_12) {
  sourcemeta::jsontoolkit::contrib::Resolver resolver;
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

TEST(Resolver, idempotency) {
  sourcemeta::jsontoolkit::contrib::Resolver resolver;
  EXPECT_SCHEMA(resolver, "https://json-schema.org/draft/2020-12/schema");
  EXPECT_SCHEMA(resolver, "https://json-schema.org/draft/2020-12/schema");
  EXPECT_SCHEMA(resolver, "https://json-schema.org/draft/2020-12/schema");
}

TEST(Resolver, invalid) {
  sourcemeta::jsontoolkit::contrib::Resolver resolver;
  const std::optional<sourcemeta::jsontoolkit::JSON> result{
      resolver("https://example.com/foobar").get()};
  EXPECT_FALSE(result.has_value());
}
