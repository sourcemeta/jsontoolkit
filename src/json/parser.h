#ifndef SOURCEMETA_JSONTOOLKIT_JSON_PARSER_H_
#define SOURCEMETA_JSONTOOLKIT_JSON_PARSER_H_

#include "grammar.h"

#include <sourcemeta/jsontoolkit/json_error.h>
#include <sourcemeta/jsontoolkit/json_value.h>

#include <iostream>

#include <cassert>    // assert
#include <cctype>     // std::isxdigit
#include <cstdint>    // std::uint64_t
#include <functional> // std::reference_wrapper
#include <istream>    // std::basic_istream
#include <optional>   // std::optional
#include <sstream>    // std::basic_ostringstream, std::basic_istringstream
#include <stack>      // std::stack
#include <stdexcept>  // std::out_of_range
#include <string>     // std::basic_string, std::stol, std::stod, std::stoul

namespace sourcemeta::jsontoolkit::internal {

inline auto parse_boolean_true(
    const std::uint64_t line, std::uint64_t &column,
    std::basic_istream<typename JSON::Char, typename JSON::CharTraits> &stream)
    -> JSON {
  std::cerr << "parse_boolean_true()\n";
  for (
      const auto character :
      internal::constant_true<typename JSON::Char, typename JSON::CharTraits>.substr(
          1)) {
    column += 1;
    if (stream.get() != character) {
      throw ParseError(line, column);
    }
  }

  std::cerr << "parse_boolean_true() END\n";
  return JSON{true};
}

} // namespace sourcemeta::jsontoolkit::internal

// We use "goto" to avoid recursion
// NOLINTBEGIN(cppcoreguidelines-avoid-goto)

namespace sourcemeta::jsontoolkit {
auto internal_parse(
    std::basic_istream<typename JSON::Char, typename JSON::CharTraits> &stream,
    std::uint64_t &line, std::uint64_t &column) -> JSON {
  std::cerr << "internal_parse()\n";

  // Globals
  using Result = JSON;
  enum class Container { Array, Object };
  std::stack<Container> levels;
  std::stack<std::reference_wrapper<Result>> frames;
  std::optional<Result> result;
  typename Result::String key{""};
  typename JSON::Char character;

  /*
   * Parse any JSON document
   */

  column += 1;
  character = static_cast<typename JSON::Char>(stream.get());

  std::cerr << "internal_parse() switch\n"; \

  // A JSON value can be an object, array, number, string, true, false, or null.
  // See
  // https://www.ecma-international.org/wp-content/uploads/ECMA-404_2nd_edition_december_2017.pdf
  switch (character) {
    case internal::constant_true<typename JSON::Char, typename JSON::CharTraits>.front():
      std::cerr << "internal_parse() switch constant_true\n";
      return internal::parse_boolean_true(line, column, stream);
    default:
      std::cerr << "internal_parse() switch default\n";
      throw ParseError(line, column);
  }
}

// NOLINTEND(cppcoreguidelines-avoid-goto)

} // namespace sourcemeta::jsontoolkit

#endif
