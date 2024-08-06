#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPLAIN_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPLAIN_H_

#if defined(__EMSCRIPTEN__) || defined(__Unikraft__)
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
#else
#include "jsonschema_export.h"
#endif

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema_resolver.h>

#include <optional> // std::optional, std::nullopt
#include <set>      // std::set
#include <string>   // std::string
#include <variant>  // std::variant

namespace sourcemeta::jsontoolkit {

/// @ingroup jsonschema
/// The explanation result of a schema that represents a single string value
struct SchemaExplainerScalarString {
  std::optional<std::string> title;
  std::optional<std::string> description;
  std::optional<std::string> regular_expression;
  std::set<std::string> examples;
};

/// @ingroup jsonschema
/// The explanation result of a schema
using SchemaExplanation = std::variant<SchemaExplainerScalarString>;

/// @ingroup jsonschema
///
/// Analyze a schema and return a structured high level explanation of it. If
/// the schema cannot be explained (yet), an empty optional is returned.
///
/// For example:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/json.h>
/// #include <sourcemeta/jsontoolkit/jsonschema.h>
/// #include <cassert>
///
/// const auto schema = sourcemeta::jsontoolkit::parse(R"JSON({
///   "$schema": "https://json-schema.org/draft/2020-12/schema",
///   "type": "string"
/// })JSON");
///
/// const auto result{sourcemeta::jsontoolkit::explain(
///   schema, sourcemeta::jsontoolkit::official_resolver)};
///
/// assert(result.has_value());
/// assert(std::holds_alternative<
///   sourcemeta::jsontoolkit::SchemaExplainerScalarString>(result.value()));
/// ```
SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
auto explain(const JSON &schema, const SchemaResolver &resolver,
             const std::optional<std::string> &default_dialect = std::nullopt)
    -> std::optional<SchemaExplanation>;

} // namespace sourcemeta::jsontoolkit

#endif
