#include <gtest/gtest.h>

#include <exception>
#include <sstream>

#include <sourcemeta/jsontoolkit/jsonl.h>

#define EXPECT_PARSE_ERROR(stream, expected_line, expected_column)             \
  try {                                                                        \
    sourcemeta::jsontoolkit::JSONL parser{stream};                             \
    sourcemeta::jsontoolkit::ConstJSONLIterator iterator{parser.cbegin()};     \
    while (iterator != parser.cend())                                          \
      ++iterator;                                                              \
    FAIL() << "The JSONL parser was expected to throw";                        \
  } catch (const sourcemeta::jsontoolkit::ParseError &error) {                 \
    EXPECT_EQ(error.line(), expected_line);                                    \
    EXPECT_EQ(error.column(), expected_column);                                \
    SUCCEED();                                                                 \
  } catch (const std::exception &) {                                           \
    FAIL() << "The JSONL parser was expected to throw a parse error";          \
  }

TEST(JSONL_parse_error, invalid_first_row) {
  std::istringstream input{"trrue"};
  EXPECT_PARSE_ERROR(input, 1, 3);
}

TEST(JSONL_parse_error, invalid_second_row) {
  std::istringstream input{"true\ntrrue"};
  EXPECT_PARSE_ERROR(input, 2, 3);
}

TEST(JSONL_parse_error, empty) {
  std::istringstream input{""};
  EXPECT_PARSE_ERROR(input, 1, 1);
}

TEST(JSONL_parse_error, blank) {
  std::istringstream input{"    "};
  EXPECT_PARSE_ERROR(input, 1, 5);
}

TEST(JSONL_parse_error, blank_with_whitespace_characters) {
  std::istringstream input{"\r\r\n\n\t\t"};
  EXPECT_PARSE_ERROR(input, 3, 3);
}

TEST(JSONL_parse_error, invalid_delimiter_space) {
  std::istringstream input{"false true"};
  EXPECT_PARSE_ERROR(input, 1, 7);
}

TEST(JSONL_parse_error, invalid_delimiter_carriage_return) {
  std::istringstream input{"false\rtrue"};
  EXPECT_PARSE_ERROR(input, 1, 7);
}

TEST(JSONL_parse_error, invalid_delimiter_tab) {
  std::istringstream input{"false\ttrue"};
  EXPECT_PARSE_ERROR(input, 1, 7);
}

TEST(JSONL_parse_error, invalid_delimiter_x) {
  std::istringstream input{"false x true"};
  EXPECT_PARSE_ERROR(input, 1, 7);
}

TEST(JSONL_parse_error, invalid_multi_line_row) {
  std::istringstream input{
      "{\n \"foo\": 1\n }\n{\n \"bar\" 2\n }\n{\n \"baz\": 3\n }"};
  EXPECT_PARSE_ERROR(input, 5, 8);
}

TEST(JSONL_parse_error, backspace_prefix) {
  std::istringstream input{"false\n\btrue"};
  EXPECT_PARSE_ERROR(input, 2, 1);
}
