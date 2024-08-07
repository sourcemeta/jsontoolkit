#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPLAIN_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPLAIN_H_

#if defined(__EMSCRIPTEN__) || defined(__Unikraft__)
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
#else
#include "jsonschema_export.h"
#endif

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema_resolver.h>

#include <map>      // std::map
#include <optional> // std::optional, std::nullopt
#include <set>      // std::set
#include <string>   // std::string
#include <variant>  // std::variant

namespace sourcemeta::jsontoolkit {

/// @ingroup jsonschema
/// The explanation result of a constant value
struct SchemaExplainerConstant {
  JSON value;
  std::optional<std::string> title;
  std::optional<std::string> description;
};

/// @ingroup jsonschema
/// The explanation result of a scalar value (non container and non enumeration)
struct SchemaExplainerScalar {
  std::string type;
  std::map<std::string, std::string> constraints;
  std::optional<std::string> title;
  std::optional<std::string> description;
  std::set<JSON> examples;
};

/// @ingroup jsonschema
/// The explanation result of a schema
using SchemaExplanation =
    std::variant<SchemaExplainerConstant, SchemaExplainerScalar>;

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
///   sourcemeta::jsontoolkit::SchemaExplainerScalar>(result.value()));
/// ```
SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
auto explain(const JSON &schema, const SchemaResolver &resolver,
             const std::optional<std::string> &default_dialect = std::nullopt)
    -> std::optional<SchemaExplanation>;

} // namespace sourcemeta::jsontoolkit

#endif
