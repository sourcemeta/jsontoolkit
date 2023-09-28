#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>

#include <exception>   // std::exception
#include <string>      // std::string
#include <type_traits> // std::is_base_of_v

TEST(JSONPointer_error, parse_error) {
  static_assert(std::is_base_of_v<std::exception,
                                  sourcemeta::jsontoolkit::PointerParseError>,
                "Must subclass std::exception");
  auto exception{sourcemeta::jsontoolkit::PointerParseError(5)};
  EXPECT_THROW(throw exception, sourcemeta::jsontoolkit::PointerParseError);
  EXPECT_EQ(std::string{exception.what()},
            "The input is not a valid JSON Pointer");
  EXPECT_EQ(exception.column(), 5);
}

TEST(JSONPointer_error, line_is_always_one) {
  auto exception_1{sourcemeta::jsontoolkit::PointerParseError(5)};
  auto exception_2{sourcemeta::jsontoolkit::PointerParseError(1)};
  auto exception_3{sourcemeta::jsontoolkit::PointerParseError(8)};
  EXPECT_EQ(exception_1.line(), 1);
  EXPECT_EQ(exception_2.line(), 1);
  EXPECT_EQ(exception_3.line(), 1);
}
