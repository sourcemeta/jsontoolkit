#ifndef SOURCEMETA_JSONTOOLKIT_JSON_STRINGIFY_H_
#define SOURCEMETA_JSONTOOLKIT_JSON_STRINGIFY_H_

#include "grammar.h"

#include <sourcemeta/jsontoolkit/json_value.h>

#include <ios>      // std::showpoint, std::noshowpoint
#include <iterator> // std::next, std::cbegin, std::cend
#include <ostream>  // std::basic_ostream
#include <string>   // std::to_string

namespace sourcemeta::jsontoolkit::internal {
template <typename CharT, typename Traits>
auto indent(std::basic_ostream<CharT, Traits> &stream,
            const std::size_t indentation) -> void {
  constexpr auto multiplier{2};
  for (std::size_t index{0}; index < indentation * multiplier; index++) {
    stream.put(internal::token_whitespace_space<CharT>);
  }
}
} // namespace sourcemeta::jsontoolkit::internal

namespace sourcemeta::jsontoolkit {

template <template <typename T> typename Allocator>
auto stringify(const std::nullptr_t,
               std::basic_ostream<typename GenericValue<Allocator>::Char,
                                  typename GenericValue<Allocator>::CharTraits>
                   &stream) -> void {
  stream.write(internal::constant_null<typename GenericValue<Allocator>::Char, typename GenericValue<Allocator>::CharTraits>.data(),
               internal::constant_null<typename GenericValue<Allocator>::Char, typename GenericValue<Allocator>::CharTraits>.size());
}

template <template <typename T> typename Allocator>
auto stringify(const bool value,
               std::basic_ostream<typename GenericValue<Allocator>::Char,
                                  typename GenericValue<Allocator>::CharTraits>
                   &stream) -> void {
  if (value) {
    stream.write(internal::constant_true<typename GenericValue<Allocator>::Char, typename GenericValue<Allocator>::CharTraits>.data(),
                 internal::constant_true<typename GenericValue<Allocator>::Char, typename GenericValue<Allocator>::CharTraits>.size());
  } else {
    stream.write(internal::constant_false<typename GenericValue<Allocator>::Char, typename GenericValue<Allocator>::CharTraits>.data(),
                 internal::constant_false<typename GenericValue<Allocator>::Char, typename GenericValue<Allocator>::CharTraits>.size());
  }
}

template <template <typename T> typename Allocator>
auto stringify(const std::int64_t value,
               std::basic_ostream<typename GenericValue<Allocator>::Char,
                                  typename GenericValue<Allocator>::CharTraits>
                   &stream) -> void {
  const auto string{std::to_string(value)};
  stream.write(string.c_str(),
               static_cast<typename std::basic_ostream<
                   typename GenericValue<Allocator>::Char,
                   typename GenericValue<Allocator>::CharTraits>::int_type>(
                   string.size()));
}

template <template <typename T> typename Allocator>
auto stringify(const double value,
               std::basic_ostream<typename GenericValue<Allocator>::Char,
                                  typename GenericValue<Allocator>::CharTraits>
                   &stream) -> void {
  if (value == static_cast<double>(0.0)) {
    stream.write("0.0", 3);
  } else {
    // TODO: use .put() etc instead of formatted output
    stream << std::noshowpoint << value << std::showpoint;
  }
}

template <template <typename T> typename Allocator>
auto stringify(const GenericValue<Allocator> &document,
               std::basic_ostream<typename GenericValue<Allocator>::Char,
                                  typename GenericValue<Allocator>::CharTraits>
                   &stream) -> void;

template <template <typename T> typename Allocator>
auto stringify(const typename GenericValue<Allocator>::String &document,
               std::basic_ostream<typename GenericValue<Allocator>::Char,
                                  typename GenericValue<Allocator>::CharTraits>
                   &stream) -> void {
  stream.put(
      internal::token_string_quote<typename GenericValue<Allocator>::Char>);
  for (const auto character : document) {
    switch (character) {
      case internal::token_string_escape<
          typename GenericValue<Allocator>::Char>:
      case internal::token_string_quote<typename GenericValue<Allocator>::Char>:
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(character);
        break;

      // See https://www.asciitable.com
      // See https://www.rfc-editor.org/rfc/rfc4627#section-2.5

      // Null
      case '\u0000':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('0');
        stream.put('0');
        break;
      // Start of heading
      case '\u0001':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('0');
        stream.put('1');
        break;
      // Start of text
      case '\u0002':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('0');
        stream.put('2');
        break;
      // End of text
      case '\u0003':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('0');
        stream.put('3');
        break;
      // End of transmission
      case '\u0004':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('0');
        stream.put('4');
        break;
      // Enquiry
      case '\u0005':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('0');
        stream.put('5');
        break;
      // Acknowledge
      case '\u0006':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('0');
        stream.put('6');
        break;
      // Bell
      case '\u0007':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('0');
        stream.put('7');
        break;
      // Backspace
      case '\b':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_backspace<
                   typename GenericValue<Allocator>::Char>);
        break;
      // Horizontal tab
      case '\t':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_tabulation<
                   typename GenericValue<Allocator>::Char>);
        break;
      // Line feed
      case '\n':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_line_feed<
                   typename GenericValue<Allocator>::Char>);
        break;
      // Vertical tab
      case '\u000B':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('0');
        stream.put('B');
        break;
      // Form feed
      case '\f':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_form_feed<
                   typename GenericValue<Allocator>::Char>);
        break;
      // Carriage return
      case '\r':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_carriage_return<
                   typename GenericValue<Allocator>::Char>);
        break;
      // Shift out
      case '\u000E':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('0');
        stream.put('E');
        break;
      // Shift in
      case '\u000F':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('0');
        stream.put('F');
        break;
      // Data link escape
      case '\u0010':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('1');
        stream.put('0');
        break;
      // Device control 1
      case '\u0011':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('1');
        stream.put('1');
        break;
      // Device control 2
      case '\u0012':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('1');
        stream.put('2');
        break;
      // Device control 3
      case '\u0013':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('1');
        stream.put('3');
        break;
      // Device control 4
      case '\u0014':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('1');
        stream.put('4');
        break;
      // Negative acknowledge
      case '\u0015':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('1');
        stream.put('5');
        break;
      // Synchronous idle
      case '\u0016':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('1');
        stream.put('6');
        break;
      // End of transmission block
      case '\u0017':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('1');
        stream.put('7');
        break;
      // Cancel
      case '\u0018':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('1');
        stream.put('8');
        break;
      // End of medium
      case '\u0019':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('1');
        stream.put('9');
        break;
      // Substitute
      case '\u001A':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('1');
        stream.put('A');
        break;
      // Escape
      case '\u001B':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('1');
        stream.put('B');
        break;
      // File separator
      case '\u001C':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('1');
        stream.put('C');
        break;
      // Group separator
      case '\u001D':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('1');
        stream.put('D');
        break;
      // Record separator
      case '\u001E':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('1');
        stream.put('E');
        break;
      // Unit separator
      case '\u001F':
        stream.put(internal::token_string_escape<
                   typename GenericValue<Allocator>::Char>);
        stream.put(internal::token_string_escape_unicode<
                   typename GenericValue<Allocator>::Char>);
        stream.put('0');
        stream.put('0');
        stream.put('1');
        stream.put('F');
        break;
      default:
        stream.put(character);
    }
  }

  stream.put(
      internal::token_string_quote<typename GenericValue<Allocator>::Char>);
}

template <template <typename T> typename Allocator>
auto stringify(const typename GenericValue<Allocator>::Array &document,
               std::basic_ostream<typename GenericValue<Allocator>::Char,
                                  typename GenericValue<Allocator>::CharTraits>
                   &stream) -> void {
  stream.put(
      internal::token_array_begin<typename GenericValue<Allocator>::Char>);
  const auto end{std::cend(document)};
  for (auto iterator = std::cbegin(document); iterator != end; ++iterator) {
    stringify<Allocator>(*iterator, stream);
    if (std::next(iterator) != end) {
      stream.put(internal::token_array_delimiter<
                 typename GenericValue<Allocator>::Char>);
    }
  }

  stream.put(internal::token_array_end<typename GenericValue<Allocator>::Char>);
}

template <template <typename T> typename Allocator>
auto stringify(const typename GenericValue<Allocator>::Object &document,
               std::basic_ostream<typename GenericValue<Allocator>::Char,
                                  typename GenericValue<Allocator>::CharTraits>
                   &stream) -> void {
  stream.put(
      internal::token_object_begin<typename GenericValue<Allocator>::Char>);
  const auto end{std::cend(document)};
  for (auto iterator = std::cbegin(document); iterator != end; ++iterator) {
    stringify<Allocator>(iterator->first, stream);
    stream.put(internal::token_object_key_delimiter<
               typename GenericValue<Allocator>::Char>);
    stringify<Allocator>(iterator->second, stream);
    if (std::next(iterator) != end) {
      stream.put(internal::token_object_delimiter<
                 typename GenericValue<Allocator>::Char>);
    }
  }

  stream.put(
      internal::token_object_end<typename GenericValue<Allocator>::Char>);
}

template <template <typename T> typename Allocator>
auto prettify(
    const typename GenericValue<Allocator>::Object &document,
    std::basic_ostream<typename GenericValue<Allocator>::Char,
                       typename GenericValue<Allocator>::CharTraits> &stream,
    const std::size_t) -> void;

template <template <typename T> typename Allocator>
auto prettify(
    const typename GenericValue<Allocator>::Array &document,
    std::basic_ostream<typename GenericValue<Allocator>::Char,
                       typename GenericValue<Allocator>::CharTraits> &stream,
    const std::size_t indentation) -> void {
  stream.put(
      internal::token_array_begin<typename GenericValue<Allocator>::Char>);
  const auto end{std::cend(document)};
  for (auto iterator = std::cbegin(document); iterator != end; ++iterator) {
    stream.put(internal::token_whitespace_line_feed<
               typename GenericValue<Allocator>::Char>);
    internal::indent(stream, indentation + 1);
    prettify<Allocator>(*iterator, stream, indentation + 1);
    if (std::next(iterator) == end) {
      stream.put(internal::token_whitespace_line_feed<
                 typename GenericValue<Allocator>::Char>);
    } else {
      stream.put(internal::token_array_delimiter<
                 typename GenericValue<Allocator>::Char>);
    }
  }

  if (std::cbegin(document) != end) {
    internal::indent(stream, indentation);
  }

  stream.put(internal::token_array_end<typename GenericValue<Allocator>::Char>);
}

template <template <typename T> typename Allocator>
auto prettify(
    const typename GenericValue<Allocator>::Object &document,
    std::basic_ostream<typename GenericValue<Allocator>::Char,
                       typename GenericValue<Allocator>::CharTraits> &stream,
    const std::size_t indentation) -> void {
  stream.put(
      internal::token_object_begin<typename GenericValue<Allocator>::Char>);
  const auto end{std::cend(document)};
  for (auto iterator = std::cbegin(document); iterator != end; ++iterator) {
    stream.put(internal::token_whitespace_line_feed<
               typename GenericValue<Allocator>::Char>);
    internal::indent(stream, indentation + 1);
    stringify<Allocator>(iterator->first, stream);
    stream.put(internal::token_object_key_delimiter<
               typename GenericValue<Allocator>::Char>);
    stream.put(internal::token_whitespace_space<
               typename GenericValue<Allocator>::Char>);
    prettify<Allocator>(iterator->second, stream, indentation + 1);
    if (std::next(iterator) == end) {
      stream.put(internal::token_whitespace_line_feed<
                 typename GenericValue<Allocator>::Char>);
    } else {
      stream.put(internal::token_object_delimiter<
                 typename GenericValue<Allocator>::Char>);
    }
  }

  if (std::cbegin(document) != end) {
    internal::indent(stream, indentation);
  }

  stream.put(
      internal::token_object_end<typename GenericValue<Allocator>::Char>);
}

template <template <typename T> typename Allocator>
auto stringify(const GenericValue<Allocator> &document,
               std::basic_ostream<typename GenericValue<Allocator>::Char,
                                  typename GenericValue<Allocator>::CharTraits>
                   &stream) -> void {
  switch (document.type()) {
    case GenericValue<Allocator>::Type::Null:
      stringify<Allocator>(nullptr, stream);
      break;
    case GenericValue<Allocator>::Type::Boolean:
      stringify<Allocator>(document.to_boolean(), stream);
      break;
    case GenericValue<Allocator>::Type::Integer:
      stringify<Allocator>(document.to_integer(), stream);
      break;
    case GenericValue<Allocator>::Type::Real:
      stringify<Allocator>(document.to_real(), stream);
      break;
    case GenericValue<Allocator>::Type::String:
      stringify<Allocator>(document.to_string(), stream);
      break;
    case GenericValue<Allocator>::Type::Array:
      stringify<Allocator>(document.as_array(), stream);
      break;
    case GenericValue<Allocator>::Type::Object:
      stringify<Allocator>(document.as_object(), stream);
      break;
  }
}

template <template <typename T> typename Allocator>
auto prettify(
    const GenericValue<Allocator> &document,
    std::basic_ostream<typename GenericValue<Allocator>::Char,
                       typename GenericValue<Allocator>::CharTraits> &stream,
    const std::size_t indentation = 0) -> void {
  switch (document.type()) {
    case GenericValue<Allocator>::Type::Null:
      stringify<Allocator>(nullptr, stream);
      break;
    case GenericValue<Allocator>::Type::Boolean:
      stringify<Allocator>(document.to_boolean(), stream);
      break;
    case GenericValue<Allocator>::Type::Integer:
      stringify<Allocator>(document.to_integer(), stream);
      break;
    case GenericValue<Allocator>::Type::Real:
      stringify<Allocator>(document.to_real(), stream);
      break;
    case GenericValue<Allocator>::Type::String:
      stringify<Allocator>(document.to_string(), stream);
      break;
    case GenericValue<Allocator>::Type::Array:
      prettify<Allocator>(document.as_array(), stream, indentation);
      break;
    case GenericValue<Allocator>::Type::Object:
      prettify<Allocator>(document.as_object(), stream, indentation);
      break;
  }
}

} // namespace sourcemeta::jsontoolkit

#endif
