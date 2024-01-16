#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_REFERENCE_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_REFERENCE_H_

#if defined(__EMSCRIPTEN__) || defined(__Unikraft__)
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
#else
#include "jsonschema_export.h"
#endif

#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema_reference_frame.h>
#include <sourcemeta/jsontoolkit/jsonschema_resolver.h>
#include <sourcemeta/jsontoolkit/jsonschema_walker.h>

#include <future>   // std::future
#include <map>      // std::map
#include <optional> // std::optional
#include <string>   // std::string
#include <utility>  // std::pair

namespace sourcemeta::jsontoolkit {

/// @ingroup jsonschema
/// A JSON Schema reference map is a mapping of a JSON Pointer
/// of a subschema to a destination static reference URI.
using ReferenceMap = std::map<Pointer, std::string>;

// TODO: Support $dynamicRef
// TODO: Support $recursiveAnchor
// TODO: Support $recursiveRef

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
///     "foo": { "$anchor": "test", "type": "number" },
///     "bar": { "$ref": "#/properties/foo" }
///   }
/// })JSON");
///
/// sourcemeta::jsontoolkit::ReferenceFrame static_frame;
/// sourcemeta::jsontoolkit::ReferenceFrame dynamic_frame;
/// sourcemeta::jsontoolkit::ReferenceMap references;
/// sourcemeta::jsontoolkit::frame(document, static_frame, dynamic_frame,
/// references,
///                                sourcemeta::jsontoolkit::default_schema_walker,
///                                sourcemeta::jsontoolkit::official_resolver)
///     .wait();
///
/// // IDs
/// assert(static_frame.defines("https://www.example.com/schema"));
/// assert(static_frame.defines("https://www.example.com/foo"));
///
/// // Anchors
/// assert(static_frame.defines("https://www.example.com/schema#test"));
///
/// // Root Pointers
/// assert(static_frame.defines("https://www.example.com/schema#/$id"));
/// assert(static_frame.defines("https://www.example.com/schema#/$schema"));
/// assert(static_frame.defines("https://www.example.com/schema#/items"));
/// assert(static_frame.defines("https://www.example.com/schema#/items/$id"));
/// assert(static_frame.defines("https://www.example.com/schema#/items/type"));
/// assert(static_frame.defines("https://www.example.com/schema#/properties"));
/// assert(static_frame.defines("https://www.example.com/schema#/properties/foo"));
/// assert(static_frame.defines("https://www.example.com/schema#/properties/foo/$anchor"));
/// assert(static_frame.defines("https://www.example.com/schema#/properties/foo/type"));
/// assert(static_frame.defines("https://www.example.com/schema#/properties/bar"));
/// assert(static_frame.defines("https://www.example.com/schema#/properties/bar/$ref"));
///
/// // Subpointers
/// assert(static_frame.defines("https://www.example.com/foo#/$id"));
/// assert(static_frame.defines("https://www.example.com/foo#/type"));
///
/// // References
/// assert(references.contains({ "properties", "bar", "$ref" }));
/// assert(references.at({ "properties", "bar", "$ref" }) ==
///   "https://www.example.com/schema#/properties/foo");
/// ```
SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
auto frame(const JSON &schema, ReferenceFrame &static_frame,
           ReferenceFrame &dynamic_frame, ReferenceMap &references,
           const SchemaWalker &walker, const SchemaResolver &resolver,
           const std::optional<std::string> &default_dialect = std::nullopt,
           const std::optional<std::string> &default_id = std::nullopt)
    -> std::future<void>;

} // namespace sourcemeta::jsontoolkit

#endif
