#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_H_

#if defined(__EMSCRIPTEN__) || defined(__Unikraft__)
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
#else
#include "jsonschema_export.h"
#endif

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema_error.h>
#include <sourcemeta/jsontoolkit/jsonschema_resolver.h>
#include <sourcemeta/jsontoolkit/jsonschema_walker.h>

#include <future>   // std::promise, std::future
#include <map>      // std::map
#include <optional> // std::optional
#include <string>   // std::string

/// @defgroup jsonschema JSON Schema
/// @brief A set of JSON Schema utilities across draft versions.
///
/// This functionality is included as follows:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/jsonschema.h>
/// ```
///
/// Older JSON Schema versions might not be supported, but older JSON Schema
/// documents can be automatically upgraded using a tool like
/// [Alterschema](https://github.com/sourcemeta/alterschema).

namespace sourcemeta::jsontoolkit {

/// @ingroup jsonschema
///
/// This function returns true if the given JSON instance is of a
/// schema-compatible type: an object or a boolean. For example:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/json.h>
/// #include <sourcemeta/jsontoolkit/jsonschema.h>
/// #include <cassert>
///
/// const sourcemeta::jsontoolkit::JSON document{true};
/// assert(sourcemeta::jsontoolkit::is_schema(document));
/// ```
SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
auto is_schema(const JSON &schema) -> bool;

/// @ingroup jsonschema
///
/// This function returns the URI identifier of the given schema, if any. For
/// example:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/json.h>
/// #include <sourcemeta/jsontoolkit/jsonschema.h>
/// #include <cassert>
///
/// const sourcemeta::jsontoolkit::JSON document =
///     sourcemeta::jsontoolkit::parse(R"JSON({
///   "$schema": "https://json-schema.org/draft/2020-12/schema",
///   "$id": "https://sourcemeta.com/example-schema"
/// })JSON");
///
/// std::optional<std::string> id{sourcemeta::jsontoolkit::id(document)};
/// assert(id.has_value());
/// assert(id.value() == "https://sourcemeta.com/example-schema");
/// ```
SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
auto id(const JSON &schema) -> std::optional<std::string>;

/// @ingroup jsonschema
///
/// Get the metaschema corresponding to a JSON Schema instance. The result is
/// empty if the metaschema cannot be determined. For example:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/json.h>
/// #include <sourcemeta/jsontoolkit/jsonschema.h>
/// #include <cassert>
///
/// const sourcemeta::jsontoolkit::JSON document =
///   sourcemeta::jsontoolkit::parse(R"JSON({
///   "$schema": "https://json-schema.org/draft/2020-12/schema",
///   "type": "object"
/// })JSON");
///
/// const std::optional<std::string>
///   metaschema{sourcemeta::jsontoolkit::metaschema(document)};
/// assert(metaschema.has_value());
/// assert(metaschema.value() ==
///   "https://json-schema.org/draft/2020-12/schema");
/// ```
SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
auto metaschema(const JSON &schema) -> std::optional<std::string>;

/// @ingroup jsonschema
///
/// Get the draft URI that applies to the given schema. If you set a default
/// metaschema URI, this will be used if the given schema does not declare the
/// `$schema` keyword. The result of this function is unset if its draft could
/// not be determined. For example:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/json.h>
/// #include <sourcemeta/jsontoolkit/jsonschema.h>
/// #include <cassert>
///
/// const sourcemeta::jsontoolkit::JSON document =
///   sourcemeta::jsontoolkit::parse(R"JSON({
///   "$schema": "https://json-schema.org/draft/2020-12/schema",
///   "type": "object"
/// })JSON");
///
/// sourcemeta::jsontoolkit::DefaultSchemaResolver resolver;
/// const std::optional<std::string> draft{
///     sourcemeta::jsontoolkit::draft(document, resolver).get()};
///
/// assert(draft.has_value());
/// assert(draft.value() == "https://json-schema.org/draft/2020-12/schema");
/// ```
SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
auto draft(const JSON &schema, const SchemaResolver &resolver,
           const std::optional<std::string> &default_metaschema = std::nullopt)
    -> std::future<std::optional<std::string>>;

/// @ingroup jsonschema
///
/// List the vocabularies that a specific schema makes use of. If you set a
/// default metaschema URI, this will be used if the given schema does not
/// declare the
/// `$schema` keyword. The resulting map values are set to `true` or `false`
/// depending on whether the corresponding vocabulary is required or optional,
/// respectively. For example:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/json.h>
/// #include <sourcemeta/jsontoolkit/jsonschema.h>
/// #include <cassert>
///
/// const sourcemeta::jsontoolkit::JSON document =
///   sourcemeta::jsontoolkit::parse(R"JSON({
///   "$schema": "https://json-schema.org/draft/2020-12/schema",
///   "type": "object"
/// })JSON");
///
/// sourcemeta::jsontoolkit::DefaultSchemaResolver resolver;
/// const std::map<std::string, bool> vocabularies{
///     sourcemeta::jsontoolkit::vocabularies(document, resolver).get()};
///
/// assert(vocabularies.at("https://json-schema.org/draft/2020-12/vocab/core"));
/// assert(vocabularies.at("https://json-schema.org/draft/2020-12/vocab/applicator"));
/// assert(vocabularies.at("https://json-schema.org/draft/2020-12/vocab/unevaluated"));
/// assert(vocabularies.at("https://json-schema.org/draft/2020-12/vocab/validation"));
/// assert(vocabularies.at("https://json-schema.org/draft/2020-12/vocab/meta-data"));
/// assert(vocabularies.at("https://json-schema.org/draft/2020-12/vocab/format-annotation"));
/// assert(vocabularies.at("https://json-schema.org/draft/2020-12/vocab/content"));
/// ```
SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
auto vocabularies(const JSON &schema, const SchemaResolver &resolver,
                  const std::optional<std::string> &default_metaschema =
                      std::nullopt) -> std::future<std::map<std::string, bool>>;

} // namespace sourcemeta::jsontoolkit

#endif
