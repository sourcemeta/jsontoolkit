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

template <typename CharT, typename Traits,
          template <typename T> typename Allocator>
auto stringify(const std::nullptr_t, std::basic_ostream<CharT, Traits> &stream)
    -> void {
  stream.write(internal::constant_null<CharT, Traits>.data(),
               internal::constant_null<CharT, Traits>.size());
}

template <typename CharT, typename Traits,
          template <typename T> typename Allocator>
auto stringify(const bool value, std::basic_ostream<CharT, Traits> &stream)
    -> void {
  if (value) {
    stream.write(internal::constant_true<CharT, Traits>.data(),
                 internal::constant_true<CharT, Traits>.size());
  } else {
    stream.write(internal::constant_false<CharT, Traits>.data(),
                 internal::constant_false<CharT, Traits>.size());
  }
}

template <typename CharT, typename Traits,
          template <typename T> typename Allocator>
auto stringify(const std::int64_t value,
               std::basic_ostream<CharT, Traits> &stream) -> void {
  const auto string{std::to_string(value)};
  stream.write(
      string.c_str(),
      static_cast<typename std::basic_ostream<CharT, Traits>::int_type>(
          string.size()));
}

template <typename CharT, typename Traits,
          template <typename T> typename Allocator>
auto stringify(const double value, std::basic_ostream<CharT, Traits> &stream)
    -> void {
  if (value == static_cast<double>(0.0)) {
    stream.write("0.0", 3);
  } else {
    // TODO: use .put() etc instead of formatted output
    stream << std::noshowpoint << value << std::showpoint;
  }
}

template <typename CharT, typename Traits,
          template <typename T> typename Allocator>
auto stringify(const GenericValue<CharT, Traits, Allocator> &document,
               std::basic_ostream<CharT, Traits> &stream) -> void;

template <typename CharT, typename Traits,
          template <typename T> typename Allocator>
auto stringify(
    const typename GenericValue<CharT, Traits, Allocator>::String &document,
    std::basic_ostream<CharT, Traits> &stream) -> void {
  stream.put(internal::token_string_quote<CharT>);
  for (const auto character : document) {
    switch (character) {
      case internal::token_string_escape<CharT>:
      case internal::token_string_quote<CharT>:
        stream.put(internal::token_string_escape<CharT>);
        stream.put(character);
        break;
      case '\b':
        stream.put(internal::token_string_escape<CharT>);
        stream.put(internal::token_string_escape_backspace<CharT>);
        break;
      case '\f':
        stream.put(internal::token_string_escape<CharT>);
        stream.put(internal::token_string_escape_form_feed<CharT>);
        break;
      case '\n':
        stream.put(internal::token_string_escape<CharT>);
        stream.put(internal::token_string_escape_line_feed<CharT>);
        break;
      case '\r':
        stream.put(internal::token_string_escape<CharT>);
        stream.put(internal::token_string_escape_carriage_return<CharT>);
        break;
      case '\t':
        stream.put(internal::token_string_escape<CharT>);
        stream.put(internal::token_string_escape_tabulation<CharT>);
        break;
      default:
        stream.put(character);
    }
  }

  stream.put(internal::token_string_quote<CharT>);
}

template <typename CharT, typename Traits,
          template <typename T> typename Allocator>
auto stringify(
    const typename GenericValue<CharT, Traits, Allocator>::Array &document,
    std::basic_ostream<CharT, Traits> &stream) -> void {
  stream.put(internal::token_array_begin<CharT>);
  const auto end{std::cend(document)};
  for (auto iterator = std::cbegin(document); iterator != end; ++iterator) {
    stringify<CharT, Traits, Allocator>(*iterator, stream);
    if (std::next(iterator) != end) {
      stream.put(internal::token_array_delimiter<CharT>);
    }
  }

  stream.put(internal::token_array_end<CharT>);
}

template <typename CharT, typename Traits,
          template <typename T> typename Allocator>
auto stringify(
    const typename GenericValue<CharT, Traits, Allocator>::Object &document,
    std::basic_ostream<CharT, Traits> &stream) -> void {
  stream.put(internal::token_object_begin<CharT>);
  const auto end{std::cend(document)};
  for (auto iterator = std::cbegin(document); iterator != end; ++iterator) {
    stringify<CharT, Traits, Allocator>(iterator->first, stream);
    stream.put(internal::token_object_key_delimiter<CharT>);
    stringify<CharT, Traits, Allocator>(iterator->second, stream);
    if (std::next(iterator) != end) {
      stream.put(internal::token_object_delimiter<CharT>);
    }
  }

  stream.put(internal::token_object_end<CharT>);
}

template <typename CharT, typename Traits,
          template <typename T> typename Allocator>
auto prettify(
    const typename GenericValue<CharT, Traits, Allocator>::Object &document,
    std::basic_ostream<CharT, Traits> &stream, const std::size_t) -> void;

template <typename CharT, typename Traits,
          template <typename T> typename Allocator>
auto prettify(
    const typename GenericValue<CharT, Traits, Allocator>::Array &document,
    std::basic_ostream<CharT, Traits> &stream, const std::size_t indentation)
    -> void {
  stream.put(internal::token_array_begin<CharT>);
  const auto end{std::cend(document)};
  for (auto iterator = std::cbegin(document); iterator != end; ++iterator) {
    stream.put(internal::token_whitespace_line_feed<CharT>);
    internal::indent(stream, indentation + 1);
    prettify<CharT, Traits, Allocator>(*iterator, stream, indentation + 1);
    if (std::next(iterator) == end) {
      stream.put(internal::token_whitespace_line_feed<CharT>);
    } else {
      stream.put(internal::token_array_delimiter<CharT>);
    }
  }

  if (std::cbegin(document) != end) {
    internal::indent(stream, indentation);
  }

  stream.put(internal::token_array_end<CharT>);
}

template <typename CharT, typename Traits,
          template <typename T> typename Allocator>
auto prettify(
    const typename GenericValue<CharT, Traits, Allocator>::Object &document,
    std::basic_ostream<CharT, Traits> &stream, const std::size_t indentation)
    -> void {
  stream.put(internal::token_object_begin<CharT>);
  const auto end{std::cend(document)};
  for (auto iterator = std::cbegin(document); iterator != end; ++iterator) {
    stream.put(internal::token_whitespace_line_feed<CharT>);
    internal::indent(stream, indentation + 1);
    stringify<CharT, Traits, Allocator>(iterator->first, stream);
    stream.put(internal::token_object_key_delimiter<CharT>);
    stream.put(internal::token_whitespace_space<CharT>);
    prettify<CharT, Traits, Allocator>(iterator->second, stream,
                                       indentation + 1);
    if (std::next(iterator) == end) {
      stream.put(internal::token_whitespace_line_feed<CharT>);
    } else {
      stream.put(internal::token_object_delimiter<CharT>);
    }
  }

  if (std::cbegin(document) != end) {
    internal::indent(stream, indentation);
  }

  stream.put(internal::token_object_end<CharT>);
}

template <typename CharT, typename Traits,
          template <typename T> typename Allocator>
auto stringify(const GenericValue<CharT, Traits, Allocator> &document,
               std::basic_ostream<CharT, Traits> &stream) -> void {
  switch (document.type()) {
    case GenericValue<CharT, Traits, Allocator>::Type::Null:
      stringify<CharT, Traits, Allocator>(nullptr, stream);
      break;
    case GenericValue<CharT, Traits, Allocator>::Type::Boolean:
      stringify<CharT, Traits, Allocator>(document.to_boolean(), stream);
      break;
    case GenericValue<CharT, Traits, Allocator>::Type::Integer:
      stringify<CharT, Traits, Allocator>(document.to_integer(), stream);
      break;
    case GenericValue<CharT, Traits, Allocator>::Type::Real:
      stringify<CharT, Traits, Allocator>(document.to_real(), stream);
      break;
    case GenericValue<CharT, Traits, Allocator>::Type::String:
      stringify<CharT, Traits, Allocator>(document.to_string(), stream);
      break;
    case GenericValue<CharT, Traits, Allocator>::Type::Array:
      stringify<CharT, Traits, Allocator>(document.as_array(), stream);
      break;
    case GenericValue<CharT, Traits, Allocator>::Type::Object:
      stringify<CharT, Traits, Allocator>(document.as_object(), stream);
      break;
  }
}

template <typename CharT, typename Traits,
          template <typename T> typename Allocator>
auto prettify(const GenericValue<CharT, Traits, Allocator> &document,
              std::basic_ostream<CharT, Traits> &stream,
              const std::size_t indentation = 0) -> void {
  switch (document.type()) {
    case GenericValue<CharT, Traits, Allocator>::Type::Null:
      stringify<CharT, Traits, Allocator>(nullptr, stream);
      break;
    case GenericValue<CharT, Traits, Allocator>::Type::Boolean:
      stringify<CharT, Traits, Allocator>(document.to_boolean(), stream);
      break;
    case GenericValue<CharT, Traits, Allocator>::Type::Integer:
      stringify<CharT, Traits, Allocator>(document.to_integer(), stream);
      break;
    case GenericValue<CharT, Traits, Allocator>::Type::Real:
      stringify<CharT, Traits, Allocator>(document.to_real(), stream);
      break;
    case GenericValue<CharT, Traits, Allocator>::Type::String:
      stringify<CharT, Traits, Allocator>(document.to_string(), stream);
      break;
    case GenericValue<CharT, Traits, Allocator>::Type::Array:
      prettify<CharT, Traits, Allocator>(document.as_array(), stream,
                                         indentation);
      break;
    case GenericValue<CharT, Traits, Allocator>::Type::Object:
      prettify<CharT, Traits, Allocator>(document.as_object(), stream,
                                         indentation);
      break;
  }
}

} // namespace sourcemeta::jsontoolkit

#endif
