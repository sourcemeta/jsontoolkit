#include "parser.h"

#include <sourcemeta/jsontoolkit/json.h>

namespace sourcemeta::jsontoolkit {

auto parse(std::basic_istream<JSON::Char, JSON::CharTraits> &stream) -> JSON {
  std::uint64_t line{1};
  std::uint64_t column{0};
  return internal_parse(stream, line, column);
}

} // namespace sourcemeta::jsontoolkit
