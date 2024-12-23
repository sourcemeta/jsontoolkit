#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_UNEVALUATED_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_UNEVALUATED_H_

#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
#include <sourcemeta/jsontoolkit/jsonschema_export.h>
#endif

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>

#include <sourcemeta/jsontoolkit/jsonschema_resolver.h>
#include <sourcemeta/jsontoolkit/jsonschema_walker.h>

#include <cstdint>  // std::uint8_t
#include <map>      // std::map
#include <optional> // std::optional, std::nullopt
#include <string>   // std::string
#include <vector>   // std::vector

namespace sourcemeta::jsontoolkit {

/// @ingroup jsonschema
/// The unevaluated keyword type
enum class UnevaluatedType : std::uint8_t { Properties, Items };

// TODO: Document
/// @ingroup jsonschema
struct UnevaluatedEntry {
  UnevaluatedType type;
  std::vector<Pointer> dependencies;
  bool has_unknown_dependencies;
};

// TODO: Test & document
/// @ingroup jsonschema
SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
auto unevaluated(const JSON &schema, const SchemaWalker &walker,
                 const SchemaResolver &resolver,
                 const std::optional<std::string> &default_dialect =
                     std::nullopt) -> std::map<std::string, UnevaluatedEntry>;

} // namespace sourcemeta::jsontoolkit

#endif
