#include "parser.h"

#include <sourcemeta/jsontoolkit/json.h>

#include <cassert> // assert
#include <fstream> // std::ifstream
#include <ios>     // std::ios_base

namespace sourcemeta::jsontoolkit {

auto parse(std::basic_istream<JSON::Char, JSON::CharTraits> &stream,
           std::uint64_t &line, std::uint64_t &column) -> JSON {
  return internal_parse(stream, line, column);
}

auto parse(const std::basic_string<JSON::Char, JSON::CharTraits> &input,
           std::uint64_t &line, std::uint64_t &column) -> JSON {
  return internal_parse(input, line, column);
}

auto parse(std::basic_istream<JSON::Char, JSON::CharTraits> &stream) -> JSON {
  std::uint64_t line{1};
  std::uint64_t column{0};
  return parse(stream, line, column);
}

} // namespace sourcemeta::jsontoolkit
