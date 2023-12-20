#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_REFERENCE_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_REFERENCE_H_

#if defined(__EMSCRIPTEN__) || defined(__Unikraft__)
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
#else
#include "jsonschema_export.h"
#endif

#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema_resolver.h>
#include <sourcemeta/jsontoolkit/jsonschema_walker.h>

#include <future>   // std::future
#include <map>      // std::map
#include <optional> // std::optional
#include <string>   // std::string
#include <tuple>    // std::tuple
#include <vector>   // std::vector

namespace sourcemeta::jsontoolkit {

/// @ingroup jsonschema
/// A JSON Schema reference frame is a mapping of URIs to schema identifiers,
/// JSON Pointers within the schema, and subschemas dialects. We call it
/// reference frame as this mapping is essential for resolving references.
class SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT ReferenceFrame {
public:
  /// Get the identifier of the root JSON Schema that declares the schema
  /// registered at the given URI.
  auto root(const std::string &uri) const -> const std::string &;

  /// Get the identifier that consists of the JSON Schema base URI of the JSON
  /// document registered at the given URI.
  auto base(const std::string &uri) const -> const std::string &;

  /// Get the JSON Pointer that must be used to get the schema registered at a
  /// given URI, relative to its root schema
  auto pointer(const std::string &uri) const -> const Pointer &;

  /// Get the dialect that must be used to evaluate the schema registered at a
  /// given URI
  auto dialect(const std::string &uri) const -> const std::string &;

  /// Check whether the reference frame defines a given URI
  auto defines(const std::string &uri) const -> bool;

  /// Check the number of entries stored in the reference frame
  auto size() const -> std::size_t;

  /// Check whether the reference frame is empty or not
  auto empty() const -> bool;

  /// Store a new entry in the reference frame
  auto store(const std::string &uri, const std::string &root,
             const std::string &base, const Pointer &pointer_from_root,
             const std::string &dialect) -> void;

  /// Get a begin iterator on the URIs registered in the static frame
  inline auto begin() const -> decltype(auto) { return this->keys.begin(); }

  /// Get an end iterator on the URIs registered in the static frame
  inline auto end() const -> decltype(auto) { return this->keys.end(); }

private:
// Exporting symbols that depends on the standard C++ library is considered
// safe.
// https://learn.microsoft.com/en-us/cpp/error-messages/compiler-warnings/compiler-warning-level-2-c4275?view=msvc-170&redirectedfrom=MSDN
#if defined(_MSC_VER)
#pragma warning(disable : 4251)
#endif
  std::map<std::string,
           std::tuple<std::string, std::string, Pointer, std::string>>
      data;
  // Keep a mirror of the map keys for iteration purposes
  std::vector<std::string> keys;
#if defined(_MSC_VER)
#pragma warning(default : 4251)
#endif
};

// TODO: Support dynamic anchors too

/// @ingroup jsonschema
///
/// This function computes the static reference frame of a schema. Each entry
/// consists in the URI of the resulting schema, the JSON Pointer within that
/// resulting schema, and the dialect URI of the resulting subschema. For
/// example:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/json.h>
/// #include <sourcemeta/jsontoolkit/jsonschema.h>
/// #include <cassert>
///
/// const sourcemeta::jsontoolkit::JSON document =
///     sourcemeta::jsontoolkit::parse(R"JSON({
///   "$id": "https://www.example.com/schema",
///   "$schema": "https://json-schema.org/draft/2020-12/schema",
///   "items": { "$id": "foo", "type": "string" },
///   "properties": {
///     "foo": { "$anchor": "test", "type": "number" }
///   }
/// })JSON");
///
/// sourcemeta::jsontoolkit::ReferenceFrame static_frame;
/// sourcemeta::jsontoolkit::frame(document, static_frame,
///                                sourcemeta::jsontoolkit::default_schema_walker,
///                                sourcemeta::jsontoolkit::official_resolver)
///     .wait();
///
/// assert(static_frame.size() == 3);
///
/// assert(static_frame.base("https://www.example.com/schema")
///   == "https://www.example.com/schema");
/// assert(static_frame.pointer("https://www.example.com/schema")
///   == sourcemeta::jsonpointer::Pointer{});
/// assert(static_frame.dialect("https://www.example.com/schema")
///   == "https://json-schema.org/draft/2020-12/schema");
///
/// assert(static_frame.base("https://www.example.com/foo")
///   == "https://www.example.com/schema");
/// assert(static_frame.pointer("https://www.example.com/foo")
///   == sourcemeta::jsonpointer::Pointer{"items"});
/// assert(static_frame.dialect("https://www.example.com/foo")
///   == "https://json-schema.org/draft/2020-12/schema");
///
/// assert(static_frame.base("https://www.example.com/schema#test")
///   == "https://www.example.com/schema");
/// assert(static_frame.pointer("https://www.example.com/schema#test")
///   == sourcemeta::jsonpointer::Pointer{"properties", "foo"});
/// assert(static_frame.dialect("https://www.example.com/schema#test")
///   == "https://json-schema.org/draft/2020-12/schema");
/// ```
SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
auto frame(const JSON &schema, ReferenceFrame &static_frame,
           const SchemaWalker &walker, const SchemaResolver &resolver,
           const std::optional<std::string> &default_dialect = std::nullopt,
           const std::optional<std::string> &default_id = std::nullopt)
    -> std::future<void>;

} // namespace sourcemeta::jsontoolkit

#endif
