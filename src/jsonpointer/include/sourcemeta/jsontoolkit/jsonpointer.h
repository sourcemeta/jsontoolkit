#ifndef JSONTOOLKIT_JSONPOINTER_H_
#define JSONTOOLKIT_JSONPOINTER_H_

#ifdef __EMSCRIPTEN__
#define SOURCEMETA_JSONTOOLKIT_JSONPOINTER_EXPORT
#else
#include "jsonpointer_export.h"
#endif

#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonpointer_pointer.h>

#include <memory> // std::allocator
#include <string> // std::char_traits

/// @defgroup jsonpointer JSON Pointer
/// @brief An growing implementation of RFC 6901 JSON Pointer.
///
/// This functionality is included as follows:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/jsonpointer.h>
/// ```

namespace sourcemeta::jsontoolkit {

/// @ingroup jsonpointer
using Pointer = GenericPointer<char, std::char_traits<char>, std::allocator>;

/// @ingroup jsonpointer
/// Get a value from a JSON document using a JSON Pointer (`const` overload).
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/json.h>
/// #include <sourcemeta/jsontoolkit/jsonpointer.h>
/// #include <cassert>
/// #include <sstream>
///
/// std::istringstream stream{"[ { \"foo\": 1 }, { \"bar\": 2 } ]"};
/// const sourcemeta::jsontoolkit::JSON document =
///   sourcemeta::jsontoolkit::parse(stream);
///
/// const sourcemeta::jsontoolkit::Pointer pointer{1, "bar"};
/// const sourcemeta::jsontoolkit::JSON &value{
///   sourcemeta::jsontoolkit::get(document, pointer)};
/// assert(value.is_integer());
/// assert(value.to_integer() == 2);
/// ```
SOURCEMETA_JSONTOOLKIT_JSONPOINTER_EXPORT
auto get(const JSON &document, const Pointer &pointer) -> const JSON &;

/// @ingroup jsonpointer
/// Get a value from a JSON document using a JSON Pointer (non-`const`
/// overload).
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/json.h>
/// #include <sourcemeta/jsontoolkit/jsonpointer.h>
/// #include <cassert>
/// #include <sstream>
///
/// std::istringstream stream{"[ { \"foo\": 1 }, { \"bar\": 2 } ]"};
/// sourcemeta::jsontoolkit::JSON document =
///   sourcemeta::jsontoolkit::parse(stream);
///
/// const sourcemeta::jsontoolkit::Pointer pointer{1, "bar"};
/// sourcemeta::jsontoolkit::JSON &value{
///   sourcemeta::jsontoolkit::get(document, pointer)};
/// assert(value.is_integer());
/// assert(value.to_integer() == 2);
/// ```
SOURCEMETA_JSONTOOLKIT_JSONPOINTER_EXPORT
auto get(JSON &document, const Pointer &pointer) -> JSON &;

} // namespace sourcemeta::jsontoolkit

#endif
