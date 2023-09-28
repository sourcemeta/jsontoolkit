#ifndef SOURCEMETA_JSONTOOLKIT_JSONPOINTER_STRINGIFY_H_
#define SOURCEMETA_JSONTOOLKIT_JSONPOINTER_STRINGIFY_H_

#include "grammar.h"

#include <sourcemeta/jsontoolkit/jsonpointer_pointer.h>

#include <ostream> // std::basic_ostream
#include <string>  // std::to_string

namespace sourcemeta::jsontoolkit {

template <typename CharT, typename Traits,
          template <typename T> typename Allocator>
auto stringify(const GenericPointer<CharT, Traits, Allocator> &pointer,
               std::basic_ostream<CharT, Traits> &stream) -> void {
  for (const auto &token : pointer) {
    // A JSON Pointer is a Unicode string (see [RFC4627], Section 3)
    // containing a sequence of zero or more reference tokens, each prefixed
    // by a '/' (%x2F) character.
    // See https://www.rfc-editor.org/rfc/rfc6901#section-3
    stream.put(internal::token_pointer_slash<CharT>);
    if (token.is_property()) {
      for (const auto &character : token.to_property()) {
        switch (character) {
          // Because the characters '~' (%x7E) and '/' (%x2F) have special
          // meanings in JSON Pointer, '~' needs to be encoded as '~0' and '/'
          // needs to be encoded as '~1' when these characters appear in a
          // reference token.
          // See https://www.rfc-editor.org/rfc/rfc6901#section-3
          case internal::token_pointer_slash<CharT>:
            stream.put(internal::token_pointer_tilde<CharT>);
            stream.put(internal::token_pointer_one<CharT>);
            break;
          case internal::token_pointer_tilde<CharT>:
            stream.put(internal::token_pointer_tilde<CharT>);
            stream.put(internal::token_pointer_zero<CharT>);
            break;

          // All instances of quotation mark '"' (%x22), reverse solidus '\'
          // (%x5C), and control (%x00-1F) characters MUST be escaped. See
          // https://www.rfc-editor.org/rfc/rfc6901#section-5
          case internal::token_pointer_quote<CharT>:
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_quote<CharT>);
            break;
          case internal::token_pointer_reverse_solidus<CharT>:
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            break;

          // See https://www.asciitable.com
          // See https://www.rfc-editor.org/rfc/rfc4627#section-2.5

          // Null
          case '\u0000':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('0');
            stream.put('0');
            break;
          // Start of heading
          case '\u0001':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('0');
            stream.put('1');
            break;
          // Start of text
          case '\u0002':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('0');
            stream.put('2');
            break;
          // End of text
          case '\u0003':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('0');
            stream.put('3');
            break;
          // End of transmission
          case '\u0004':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('0');
            stream.put('4');
            break;
          // Enquiry
          case '\u0005':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('0');
            stream.put('5');
            break;
          // Acknowledge
          case '\u0006':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('0');
            stream.put('6');
            break;
          // Bell
          case '\u0007':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('0');
            stream.put('7');
            break;
          // Backspace
          case '\u0008':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_backspace<CharT>);
            break;
          // Horizontal tab
          case '\u0009':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_tab<CharT>);
            break;
          // Line feed
          case '\u000A':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_line_feed<CharT>);
            break;
          // Vertical tab
          case '\u000B':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('0');
            stream.put('B');
            break;
          // Form feed
          case '\u000C':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_form_feed<CharT>);
            break;
          // Carriage return
          case '\u000D':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_carriage_return<CharT>);
            break;
          // Shift out
          case '\u000E':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('0');
            stream.put('E');
            break;
          // Shift in
          case '\u000F':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('0');
            stream.put('F');
            break;
          // Data link escape
          case '\u0010':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('1');
            stream.put('0');
            break;
          // Device control 1
          case '\u0011':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('1');
            stream.put('1');
            break;
          // Device control 2
          case '\u0012':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('1');
            stream.put('2');
            break;
          // Device control 3
          case '\u0013':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('1');
            stream.put('3');
            break;
          // Device control 4
          case '\u0014':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('1');
            stream.put('4');
            break;
          // Negative acknowledge
          case '\u0015':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('1');
            stream.put('5');
            break;
          // Synchronous idle
          case '\u0016':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('1');
            stream.put('6');
            break;
          // End of transmission block
          case '\u0017':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('1');
            stream.put('7');
            break;
          // Cancel
          case '\u0018':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('1');
            stream.put('8');
            break;
          // End of medium
          case '\u0019':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('1');
            stream.put('9');
            break;
          // Substitute
          case '\u001A':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('1');
            stream.put('A');
            break;
          // Escape
          case '\u001B':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('1');
            stream.put('B');
            break;
          // File separator
          case '\u001C':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('1');
            stream.put('C');
            break;
          // Group separator
          case '\u001D':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('1');
            stream.put('D');
            break;
          // Record separator
          case '\u001E':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('1');
            stream.put('E');
            break;
          // Unit separator
          case '\u001F':
            stream.put(internal::token_pointer_reverse_solidus<CharT>);
            stream.put(internal::token_pointer_escape_unicode<CharT>);
            stream.put('0');
            stream.put('0');
            stream.put('1');
            stream.put('F');
            break;
          default:
            stream.put(character);
        }
      }
    } else {
      const auto index{std::to_string(token.to_index())};
      stream.write(
          index.c_str(),
          static_cast<typename std::basic_ostream<CharT, Traits>::int_type>(
              index.size()));
    }
  }
}

} // namespace sourcemeta::jsontoolkit

#endif
