#include <gtest/gtest.h>
#include <jsontoolkit/contrib/resolver.h>
#include <jsontoolkit/json.h>

TEST(Resolver, jsonschema_2020_12_metaschema) {
  sourcemeta::jsontoolkit::contrib::Resolver resolver;
  const std::optional<sourcemeta::jsontoolkit::JSON> result{
      resolver("https://json-schema.org/draft/2020-12/schema").get()};
  EXPECT_TRUE(result.has_value());
  const sourcemeta::jsontoolkit::JSON &document{result.value()};
  EXPECT_TRUE(sourcemeta::jsontoolkit::is_object(document));
  EXPECT_TRUE(sourcemeta::jsontoolkit::defines(document, "$id"));
  EXPECT_EQ(sourcemeta::jsontoolkit::to_string(
                sourcemeta::jsontoolkit::at(document, "$id")),
            "https://json-schema.org/draft/2020-12/schema");
}

TEST(Resolver, multiple_times) {
  sourcemeta::jsontoolkit::contrib::Resolver resolver;
  const std::optional<sourcemeta::jsontoolkit::JSON> result1{
      resolver("https://json-schema.org/draft/2020-12/schema").get()};
  const std::optional<sourcemeta::jsontoolkit::JSON> result2{
      resolver("https://json-schema.org/draft/2020-12/schema").get()};
  EXPECT_TRUE(result1.has_value());
  EXPECT_TRUE(result2.has_value());
}
