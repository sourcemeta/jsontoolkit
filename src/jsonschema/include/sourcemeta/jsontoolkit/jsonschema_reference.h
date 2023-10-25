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

namespace sourcemeta::jsontoolkit {

/// @ingroup jsonschema
/// A JSON Schema reference frame is a mapping of URIs to JSON Pointers within a
/// schema. We call it reference frame as this mapping is essential for
/// resolving references.
using ReferenceFrame =
    std::map<std::string, std::tuple<std::string, Pointer, std::string>>;

// TODO: Support dynamic anchors too

/// @ingroup jsonschema
///
/// This function computes the static reference frame of a schema.
/// For example:
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
/// assert(std::get<0>(static_frame.at("https://www.example.com/schema"))
///   == sourcemeta::jsonpointer::Pointer{});
/// assert(std::get<0>(static_frame.at("https://www.example.com/foo"))
///   == sourcemeta::jsonpointer::Pointer{"items"});
/// assert(std::get<0>(static_frame.at("https://www.example.com/schema#test"))
///   == sourcemeta::jsonpointer::Pointer{"properties", "foo"});
/// ```
SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
auto frame(const JSON &schema, ReferenceFrame &static_frame,
           const SchemaWalker &walker, const SchemaResolver &resolver,
           const std::optional<std::string> &default_dialect = std::nullopt)
    -> std::future<void>;

} // namespace sourcemeta::jsontoolkit

#endif
