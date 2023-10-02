#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <exception>   // std::exception
#include <string>      // std::string
#include <type_traits> // std::is_base_of_v

TEST(JSONSchema, schema_error_throw) {
  static_assert(
      std::is_base_of_v<std::exception, sourcemeta::jsontoolkit::SchemaError>,
      "Must subclass std::exception");
  auto exception{sourcemeta::jsontoolkit::SchemaError("My error")};
  EXPECT_THROW(throw exception, sourcemeta::jsontoolkit::SchemaError);
  EXPECT_EQ(std::string{exception.what()}, "My error");
}

TEST(JSONSchema, resolution_error_throw) {
  static_assert(
      std::is_base_of_v<std::exception,
                        sourcemeta::jsontoolkit::SchemaResolutionError>,
      "Must subclass std::exception");
  auto exception{sourcemeta::jsontoolkit::SchemaResolutionError(
      "https://sourcemeta.com/test", "My error")};
  EXPECT_THROW(throw exception, sourcemeta::jsontoolkit::SchemaResolutionError);
  EXPECT_EQ(std::string{exception.what()}, "My error");
  EXPECT_EQ(exception.id(), "https://sourcemeta.com/test");
}
