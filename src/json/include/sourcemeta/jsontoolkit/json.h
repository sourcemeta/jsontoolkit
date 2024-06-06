#ifndef SOURCEMETA_JSONTOOLKIT_JSON_H_
#define SOURCEMETA_JSONTOOLKIT_JSON_H_

#if defined(__EMSCRIPTEN__) || defined(__Unikraft__)
#define SOURCEMETA_JSONTOOLKIT_JSON_EXPORT
#else
#include "json_export.h"
#endif

#include <sourcemeta/jsontoolkit/json_error.h>
#include <sourcemeta/jsontoolkit/json_value.h>

#include <cstdint>    // std::uint64_t
#include <istream>    // std::basic_istream

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
auto parse(std::basic_istream<JSON::Char, JSON::CharTraits> &stream) -> JSON;

} // namespace sourcemeta::jsontoolkit

#endif
