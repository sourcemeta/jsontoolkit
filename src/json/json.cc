#include "parser.h"
#include "stringify.h"

#include <sourcemeta/jsontoolkit/json.h>

namespace sourcemeta::jsontoolkit {

auto parse(std::basic_istream<char, std::char_traits<char>> &stream) -> JSON {
  return parse<char, std::char_traits<char>, std::allocator>(stream);
}

auto parse(const std::basic_string<char, std::char_traits<char>> &input)
    -> JSON {
  return parse<char, std::char_traits<char>, std::allocator>(input);
}

auto stringify(const JSON &document,
               std::basic_ostream<char, std::char_traits<char>> &stream)
    -> void {
  stringify<char, std::char_traits<char>, std::allocator>(document, stream);
}

auto prettify(const JSON &document,
              std::basic_ostream<char, std::char_traits<char>> &stream)
    -> void {
  prettify<char, std::char_traits<char>, std::allocator>(document, stream);
}

auto operator<<(std::basic_ostream<char, std::char_traits<char>> &stream,
                const JSON &document)
    -> std::basic_ostream<char, std::char_traits<char>> & {
#ifdef NDEBUG
  stringify(document, stream);
#else
  prettify(document, stream);
#endif
  return stream;
}

} // namespace sourcemeta::jsontoolkit
