#ifndef SOURCEMETA_JSONTOOLKIT_JSON_H_
#define SOURCEMETA_JSONTOOLKIT_JSON_H_

#include "json_export.h"

#include <sourcemeta/jsontoolkit/json_error.h>
#include <sourcemeta/jsontoolkit/json_value.h>

#include <istream> // std::basic_istream
#include <memory>  // std::allocator
#include <ostream> // std::basic_ostream
#include <sstream> // std::basic_istringstream
#include <string>  // std::char_traits, std::basic_string

/// @defgroup json JSON
/// @brief A full-blown ECMA-404 implementation with read, write, and iterators
/// support.
///
/// This functionality is included as follows:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/json.h>
/// ```

namespace sourcemeta::jsontoolkit {

/// @ingroup json
using JSON = GenericValue<char, std::char_traits<char>, std::allocator>;

/// @ingroup json
/// Create a JSON document from a C++ standard input stream. For example, a JSON
/// document that represents an array can be parsed as follows:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/json.h>
/// #include <cassert>
/// #include <sstream>
///
/// std::istringstream stream{"[ 1, 2, 3 ]"};
/// const sourcemeta::jsontoolkit::JSON document =
///   sourcemeta::jsontoolkit::parse(stream);
/// assert(document.is_array());
/// ```
///
/// If parsing fails, sourcemeta::jsontoolkit::ParseError will be thrown.
SOURCEMETA_JSONTOOLKIT_JSON_EXPORT
auto parse(std::basic_istream<char, std::char_traits<char>> &stream) -> JSON;

/// @ingroup json
///
/// Create a JSON document from a JSON string. For example, a JSON document that
/// represents an array can be parsed as follows:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/json.h>
/// #include <cassert>
///
/// const sourcemeta::jsontoolkit::JSON document =
///   sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]");
/// assert(document.is_array());
/// ```
///
/// If parsing fails, sourcemeta::jsontoolkit::ParseError will be thrown.
SOURCEMETA_JSONTOOLKIT_JSON_EXPORT
auto parse(const std::basic_string<char, std::char_traits<char>> &input)
    -> JSON;

/// @ingroup json
///
/// Stringify the input JSON document into a given C++ standard output stream in
/// compact mode. For example:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/json.h>
/// #include <iostream>
/// #include <sstream>
///
/// const sourcemeta::jsontoolkit::JSON document =
///   sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]");
/// std::ostringstream stream;
/// sourcemeta::jsontoolkit::stringify(document, stream);
/// std::cout << stream.str() << std::endl;
/// ```
SOURCEMETA_JSONTOOLKIT_JSON_EXPORT
auto stringify(const JSON &document,
               std::basic_ostream<char, std::char_traits<char>> &stream)
    -> void;

/// @ingroup json
///
/// Stringify the input JSON document into a given C++ standard output stream in
/// pretty mode, indenting the output using 4 spaces. For example:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/json.h>
/// #include <iostream>
/// #include <sstream>
///
/// const sourcemeta::jsontoolkit::JSON document =
///   sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]");
/// std::ostringstream stream;
/// sourcemeta::jsontoolkit::prettify(document, stream);
/// std::cout << stream.str() << std::endl;
/// ```
SOURCEMETA_JSONTOOLKIT_JSON_EXPORT
auto prettify(const JSON &document,
              std::basic_ostream<char, std::char_traits<char>> &stream) -> void;

/// @ingroup json
///
/// Encode the input JSON document into a given standard output stream.
/// The JSON document is stringified or prettified depending on the
/// presence of the `NDEBUG` define (for debugging purposes). For example:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/json.h>
/// #include <iostream>
/// #include <sstream>
///
/// const sourcemeta::jsontoolkit::JSON document =
///   sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]");
/// std::ostringstream stream;
/// stream << document;
/// std::cout << stream.str() << std::endl;
/// ```
SOURCEMETA_JSONTOOLKIT_JSON_EXPORT
auto operator<<(std::basic_ostream<char, std::char_traits<char>> &stream,
                const JSON &document)
    -> std::basic_ostream<char, std::char_traits<char>> &;

} // namespace sourcemeta::jsontoolkit

#endif
