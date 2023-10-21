#ifndef JSONTOOLKIT_JSONPOINTER_H_
#define JSONTOOLKIT_JSONPOINTER_H_

#if defined(__EMSCRIPTEN__) || defined(__Unikraft__)
#define SOURCEMETA_JSONTOOLKIT_JSONPOINTER_EXPORT
#else
#include "jsonpointer_export.h"
#endif

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonpointer_error.h>
#include <sourcemeta/jsontoolkit/jsonpointer_pointer.h>
#include <sourcemeta/jsontoolkit/jsonpointer_walker.h>

#include <memory>  // std::allocator
#include <ostream> // std::basic_ostream

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
using Pointer = GenericPointer<JSON::Char, JSON::CharTraits, std::allocator>;

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
/// assert(document.at("foo").to_integer() == 1);
///
/// const sourcemeta::jsontoolkit::Pointer pointer{1, "bar"};
/// sourcemeta::jsontoolkit::JSON &value{
///   sourcemeta::jsontoolkit::get(document, pointer)};
/// assert(value.is_integer());
/// assert(value.to_integer() == 2);
/// ```
SOURCEMETA_JSONTOOLKIT_JSONPOINTER_EXPORT
auto get(JSON &document, const Pointer &pointer) -> JSON &;

/// @ingroup jsonpointer
/// Set a value in a JSON document using a JSON Pointer (`const` overload).
///
/// If the last token of the JSON Pointer is the constant `-` and the tail
/// instance is an array, then the operation is equivalent to
/// `sourcemeta::jsontoolkit::JSON::push_back`.
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/json.h>
/// #include <sourcemeta/jsontoolkit/jsonpointer.h>
/// #include <cassert>
/// #include <sstream>
///
/// std::istringstream stream{"{ \"foo\": 1 }"};
/// sourcemeta::jsontoolkit::JSON document =
///   sourcemeta::jsontoolkit::parse(stream);
/// assert(document.at("foo").to_integer() == 1);
///
/// const sourcemeta::jsontoolkit::Pointer pointer{"foo"};
/// const sourcemeta::jsontoolkit::JSON value{2};
/// sourcemeta::jsontoolkit::set(document, pointer, value);
/// assert(document.at("foo").to_integer() == 2);
/// ```
SOURCEMETA_JSONTOOLKIT_JSONPOINTER_EXPORT
auto set(JSON &document, const Pointer &pointer, const JSON &value) -> void;

/// @ingroup jsonpointer
/// Set a value in a JSON document using a JSON Pointer (non-`const` overload).
///
/// If the last token of the JSON Pointer is the constant `-` and the tail
/// instance is an array, then the operation is equivalent to
/// `sourcemeta::jsontoolkit::JSON::push_back`.
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/json.h>
/// #include <sourcemeta/jsontoolkit/jsonpointer.h>
/// #include <cassert>
/// #include <sstream>
///
/// std::istringstream stream{"{ \"foo\": 1 }"};
/// sourcemeta::jsontoolkit::JSON document =
///   sourcemeta::jsontoolkit::parse(stream);
///
/// const sourcemeta::jsontoolkit::Pointer pointer{"foo"};
/// sourcemeta::jsontoolkit::set(document, pointer,
///   sourcemeta::jsontoolkit::JSON{2});
/// assert(document.at("foo").to_integer() == 2);
/// ```
SOURCEMETA_JSONTOOLKIT_JSONPOINTER_EXPORT
auto set(JSON &document, const Pointer &pointer, JSON &&value) -> void;

/// @ingroup jsonpointer
/// Create a JSON Pointer from a JSON string value. For example:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/json.h>
/// #include <sourcemeta/jsontoolkit/jsonpointer.h>
/// #include <cassert>
///
/// const sourcemeta::jsontoolkit::JSON document{"/foo/bar/0"};
/// assert(document.is_string());
/// const sourcemeta::jsontoolkit::Pointer pointer =
///   sourcemeta::jsontoolkit::to_pointer(document);
/// assert(pointer.size() == 3);
/// ```
SOURCEMETA_JSONTOOLKIT_JSONPOINTER_EXPORT
auto to_pointer(const JSON &document) -> Pointer;

// TODO: Add an operator<< overload

/// @ingroup jsonpointer
///
/// Stringify the input JSON Pointer into a given C++ standard output stream.
/// For example:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/jsonpointer.h>
/// #include <iostream>
/// #include <sstream>
///
/// const sourcemeta::jsontoolkit::Pointer pointer{"foo"};
/// std::ostringstream stream;
/// sourcemeta::jsontoolkit::stringify(pointer, stream);
/// std::cout << stream.str() << std::endl;
/// ```
SOURCEMETA_JSONTOOLKIT_JSONPOINTER_EXPORT
auto stringify(const Pointer &pointer,
               std::basic_ostream<JSON::Char, JSON::CharTraits> &stream)
    -> void;

/// @ingroup jsonpointer
///
/// Walk over every subpointer of a JSON Pointer, from the current pointer down
/// to the empty pointer. For example:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/json.h>
/// #include <sourcemeta/jsontoolkit/jsonpointer.h>
/// #include <cassert>
/// #include <vector>
///
/// const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
/// std::vector<sourcemeta::jsontoolkit::Pointer> subpointers;
///
/// for (const auto &subpointer :
/// sourcemeta::jsontoolkit::SubPointerWalker{pointer}) {
///   subpointers.push_back(subpointer);
/// }
///
/// assert(subpointers.size() == 3);
/// assert(subpointers.at(0) == sourcemeta::jsontoolkit::Pointer{"foo", "bar"});
/// assert(subpointers.at(1) == sourcemeta::jsontoolkit::Pointer{"foo"});
/// assert(subpointers.at(2) == sourcemeta::jsontoolkit::Pointer{});
/// ```
using SubPointerWalker =
    GenericSubPointerWalker<JSON::Char, JSON::CharTraits, std::allocator>;

} // namespace sourcemeta::jsontoolkit

#endif
