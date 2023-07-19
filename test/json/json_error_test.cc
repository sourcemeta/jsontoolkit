#include <gtest/gtest.h>
#include <jsontoolkit/json/error.h>

#include <exception>   // std::exception
#include <string>      // std::string
#include <type_traits> // std::is_base_of_v

TEST(JSON, parse_error_throw) {
  static_assert(
      std::is_base_of_v<std::exception, sourcemeta::jsontoolkit::ParseError>,
      "Must subclass std::exception");
  auto exception{sourcemeta::jsontoolkit::ParseError()};
  EXPECT_THROW(throw exception, sourcemeta::jsontoolkit::ParseError);
  EXPECT_EQ(std::string{exception.what()},
            "The input is not a valid JSON document");
}
