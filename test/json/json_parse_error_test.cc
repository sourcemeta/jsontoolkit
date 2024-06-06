#include <exception>
#include <gtest/gtest.h>
#include <sstream>

#include <iostream>

#include <sourcemeta/jsontoolkit/json.h>

#define EXPECT_PARSE_ERROR(input, expected_line, expected_column)              \
  try {                                                                        \
    sourcemeta::jsontoolkit::parse((input));                                   \
    std::cerr << "WENT BEYOND PARSE\n"; \
    FAIL() << "The parse function was expected to throw";                      \
  } catch (const sourcemeta::jsontoolkit::ParseError &error) {                 \
    std::cerr << "PARSE_ERROR\n"; \
    EXPECT_EQ(error.line(), expected_line);                                    \
    EXPECT_EQ(error.column(), expected_column);                                \
    SUCCEED();                                                                 \
  } catch (const std::exception &) {                                           \
    std::cerr << "GENERAL EXCEPTION\n"; \
    FAIL() << "The parse function was expected to throw a parse error";        \
  }

TEST(JSON_parse_error, boolean_true_invalid) {
  std::cerr << "JSON_parse_error.boolean_true_invalid\n";
  std::istringstream input{"trrue"};
  std::cerr << "After std::istringstream\n";
  EXPECT_PARSE_ERROR(input, 1, 3);
}
