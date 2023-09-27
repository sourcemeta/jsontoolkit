#include "parser.h"
#include "stringify.h"

#include <sourcemeta/jsontoolkit/json.h>

namespace sourcemeta::jsontoolkit {

auto parse(std::basic_istream<JSON::Char, JSON::CharTraits> &stream) -> JSON {
  return parse<JSON::Char, JSON::CharTraits, std::allocator>(stream);
}

auto parse(const std::basic_string<JSON::Char, JSON::CharTraits> &input)
    -> JSON {
  return parse<JSON::Char, JSON::CharTraits, std::allocator>(input);
}

auto stringify(const JSON &document,
               std::basic_ostream<JSON::Char, JSON::CharTraits> &stream)
    -> void {
  stringify<JSON::Char, JSON::CharTraits, std::allocator>(document, stream);
}

auto prettify(const JSON &document,
              std::basic_ostream<JSON::Char, JSON::CharTraits> &stream)
    -> void {
  prettify<JSON::Char, JSON::CharTraits, std::allocator>(document, stream);
}

auto operator<<(std::basic_ostream<JSON::Char, JSON::CharTraits> &stream,
                const JSON &document)
    -> std::basic_ostream<JSON::Char, JSON::CharTraits> & {
#ifdef NDEBUG
  stringify(document, stream);
#else
  prettify(document, stream);
#endif
  return stream;
}

} // namespace sourcemeta::jsontoolkit
