#ifndef SOURCEMETA_CORE_JSONSCHEMA_FRAME_H_
#define SOURCEMETA_CORE_JSONSCHEMA_FRAME_H_

#ifndef SOURCEMETA_CORE_JSONSCHEMA_EXPORT
#include <sourcemeta/core/jsonschema_export.h>
#endif

#include <sourcemeta/core/json.h>
#include <sourcemeta/core/jsonpointer.h>

#include <sourcemeta/core/jsonschema_resolver.h>
#include <sourcemeta/core/jsonschema_types.h>
#include <sourcemeta/core/jsonschema_walker.h>

#include <cstdint>       // std::uint8_t
#include <functional>    // std::reference_wrapper
#include <map>           // std::map
#include <optional>      // std::optional
#include <string>        // std::string
#include <tuple>         // std::tuple
#include <unordered_set> // std::set
#include <utility>       // std::pair
#include <vector>        // std::vector

namespace sourcemeta::core {

/// @ingroup jsonschema
///
/// This class performs a static analysis pass on the input schema, computing
/// things such as the static identifiers and references of a schema.
///
/// For example:
///
/// ```cpp
/// #include <sourcemeta/core/json.h>
/// #include <sourcemeta/core/jsonschema.h>
/// #include <cassert>
///
/// const sourcemeta::core::JSON document =
///     sourcemeta::core::parse_json(R"JSON({
///   "$id": "https://www.example.com/schema",
///   "$schema": "https://json-schema.org/draft/2020-12/schema",
///   "items": { "$id": "foo", "type": "string" },
///   "properties": {
///     "foo": { "$anchor": "test", "type": "number" },
///     "bar": { "$ref": "#/properties/foo" }
///   }
/// })JSON");
///
/// sourcemeta::core::SchemaFrame
///   frame{sourcemeta::core::SchemaFrame::Mode::Full};
///
/// frame.analyse(document,
///   sourcemeta::core::schema_official_walker,
///   sourcemeta::core::schema_official_resolver);
///
/// // IDs
/// assert(frame.locations().contains({sourcemeta::core::SchemaReferenceType::Static,
///   "https://www.example.com/schema"}));
/// assert(frame.locations().contains({sourcemeta::core::SchemaReferenceType::Static,
///   "https://www.example.com/foo"}));
///
/// // Anchors
/// assert(frame.locations().contains({sourcemeta::core::SchemaReferenceType::Static,
///   "https://www.example.com/schema#test"}));
///
/// // Root Pointers
/// assert(frame.locations().contains({sourcemeta::core::SchemaReferenceType::Static,
///   "https://www.example.com/schema#/$id"}));
/// assert(frame.locations().contains({sourcemeta::core::SchemaReferenceType::Static,
///   "https://www.example.com/schema#/$schema"}));
/// assert(frame.locations().contains({sourcemeta::core::SchemaReferenceType::Static,
///   "https://www.example.com/schema#/items"}));
/// assert(frame.locations().contains({sourcemeta::core::SchemaReferenceType::Static,
///   "https://www.example.com/schema#/items/$id"}));
/// assert(frame.locations().contains({sourcemeta::core::SchemaReferenceType::Static,
///   "https://www.example.com/schema#/items/type"}));
/// assert(frame.locations().contains({sourcemeta::core::SchemaReferenceType::Static,
///   "https://www.example.com/schema#/properties"}));
/// assert(frame.locations().contains({sourcemeta::core::SchemaReferenceType::Static,
///   "https://www.example.com/schema#/properties/foo"}));
/// assert(frame.locations().contains({sourcemeta::core::SchemaReferenceType::Static,
///   "https://www.example.com/schema#/properties/foo/$anchor"}));
/// assert(frame.locations().contains({sourcemeta::core::SchemaReferenceType::Static,
///   "https://www.example.com/schema#/properties/foo/type"}));
/// assert(frame.locations().contains({sourcemeta::core::SchemaReferenceType::Static,
///   "https://www.example.com/schema#/properties/bar"}));
/// assert(frame.locations().contains({sourcemeta::core::SchemaReferenceType::Static,
///   "https://www.example.com/schema#/properties/bar/$ref"}));
///
/// // Subpointers
/// assert(frame.locations().contains({sourcemeta::core::SchemaReferenceType::Static,
///   "https://www.example.com/foo#/$id"}));
/// assert(frame.locations().contains({sourcemeta::core::SchemaReferenceType::Static,
///   "https://www.example.com/foo#/type"}));
///
/// // References
/// assert(frame.references().contains({sourcemeta::core::SchemaReferenceType::Static,
///   { "properties", "bar", "$ref" }}));
/// assert(frame.references().at({sourcemeta::core::SchemaReferenceType::Static,
///   { "properties", "bar", "$ref" }}).destination ==
///     "https://www.example.com/schema#/properties/foo");
/// ```
class SOURCEMETA_CORE_JSONSCHEMA_EXPORT SchemaFrame {
public:
  /// The mode of framing. More extensive analysis can be compute and memory
  /// intensive
  enum class Mode { Full };

  SchemaFrame(const Mode mode) : mode_{mode} {}

  /// A single entry in a JSON Schema reference map
  struct ReferencesEntry {
    std::string destination;
    std::optional<std::string> base;
    std::optional<std::string> fragment;
  };

  /// A JSON Schema reference map is a mapping of a JSON Pointer
  /// of a subschema to a destination static reference URI.
  /// For convenience, the value consists of the URI on its entirety,
  /// but also broken down by its potential fragment component.
  /// The reference type is part of the key as it is possible to
  /// have a static and a dynamic reference to the same location
  /// on the same schema object.
  using References =
      std::map<std::pair<SchemaReferenceType, Pointer>, ReferencesEntry>;

#if defined(__GNUC__)
#pragma GCC diagnostic push
// GCC believes that a member of an enum class (which is namespaced by
// definition), can shadow an alias defined even on a different namespace.
#pragma GCC diagnostic ignored "-Wshadow"
#endif
  /// @ingroup jsonschema
  /// The type of a location frame
  enum class LocationType : std::uint8_t {
    Resource,
    Anchor,
    Pointer,
    Subschema
  };
#if defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

  /// Determines a location entry
  using LocationKey = std::pair<SchemaReferenceType, std::string>;

  /// A single frame in a JSON Schema reference frame
  struct LocationsEntry {
    std::optional<Pointer> parent;
    LocationType type;
    std::optional<std::string> root;
    std::string base;
    Pointer pointer;
    Pointer relative_pointer;
    std::string dialect;
    std::string base_dialect;
    // TODO: Support only populating these when needed, given
    // how expensive they can be, by taking more options on the
    // analyse method
    std::vector<PointerTemplate> instance_locations;
    std::vector<std::reference_wrapper<const LocationKey>> destination_of;
  };

  /// A JSON Schema reference frame is a mapping of URIs to schema identifiers,
  /// JSON Pointers within the schema, and subschemas dialects. We call it
  /// reference frame as this mapping is essential for resolving references.
  using Locations = std::map<LocationKey, LocationsEntry>;

  /// Analyse a given schema
  auto analyse(const JSON &schema, const SchemaWalker &walker,
               const SchemaResolver &resolver,
               const std::optional<std::string> &default_dialect = std::nullopt,
               const std::optional<std::string> &default_id = std::nullopt)
      -> void;

  /// Access the analysed schema locations
  auto locations() const noexcept -> const Locations &;

  /// Access the analysed schema references
  auto references() const noexcept -> const References &;

  /// Get the vocabularies associated with a location entry
  auto vocabularies(const LocationsEntry &location,
                    const SchemaResolver &resolver) const
      -> std::map<std::string, bool>;

  /// Get the URI associated with a location entry
  auto uri(const LocationsEntry &location,
           const Pointer &relative_schema_location = empty_pointer) const
      -> std::string;

  /// Get the location associated by traversing a pointer from another location
  auto traverse(const LocationsEntry &location,
                const Pointer &relative_schema_location) const
      -> const LocationsEntry &;

  /// Get the location associated with a given URI
  auto traverse(const std::string &uri) const
      -> std::optional<std::reference_wrapper<const LocationsEntry>>;

  /// Try to dereference a reference location into its destination location
  auto
  dereference(const LocationsEntry &location,
              const Pointer &relative_schema_location = empty_pointer) const
      -> std::pair<SchemaReferenceType,
                   std::optional<std::reference_wrapper<const LocationsEntry>>>;

private:
  Mode mode_;
// Exporting symbols that depends on the standard C++ library is considered
// safe.
// https://learn.microsoft.com/en-us/cpp/error-messages/compiler-warnings/compiler-warning-level-2-c4275?view=msvc-170&redirectedfrom=MSDN
#if defined(_MSC_VER)
#pragma warning(disable : 4251 4275)
#endif
  Locations locations_;
  References references_;
#if defined(_MSC_VER)
#pragma warning(default : 4251 4275)
#endif
};

// TODO: Eventually generalize this to detecting cross-keyword dependencies as
// part of framing

/// @ingroup jsonschema
struct SchemaUnevaluatedEntry {
  /// The absolute pointers of the static keyword dependencies
  std::set<Pointer> static_dependencies;
  /// The absolute pointers of the static keyword dependencies
  std::set<Pointer> dynamic_dependencies;
  /// Whether the entry cannot be fully resolved, which means
  /// there might be unknown dynamic dependencies
  bool unresolved{false};
};

/// @ingroup jsonschema
/// The flattened set of unevaluated cases in the schema by absolute URI
using SchemaUnevaluatedEntries = std::map<std::string, SchemaUnevaluatedEntry>;

/// @ingroup jsonschema
///
/// This function performs a static analysis pass on `unevaluatedProperties` and
/// `unevaluatedItems` occurences throughout the entire schema (if any).
///
/// For example:
///
/// ```cpp
/// #include <sourcemeta/core/json.h>
/// #include <sourcemeta/core/jsonschema.h>
/// #include <cassert>
///
/// const sourcemeta::core::JSON document =
///     sourcemeta::core::parse_json(R"JSON({
///   "$schema": "https://json-schema.org/draft/2020-12/schema",
///   "unevaluatedProperties": false
/// })JSON");
///
/// sourcemeta::core::SchemaFrame
///   frame{sourcemeta::core::SchemaFrame::Mode::Full};
///
/// frame.analyse(document,
///   sourcemeta::core::schema_official_walker,
///   sourcemeta::core::schema_official_resolver);
/// const auto result{sourcemeta::core::unevaluated(
///     schema, frame,
///     sourcemeta::core::schema_official_walker,
///     sourcemeta::core::schema_official_resolver)};
///
/// assert(result.contains("#/unevaluatedProperties"));
/// assert(!result.at("#/unevaluatedProperties").dynamic);
/// assert(result.at("#/unevaluatedProperties").dependencies.empty());
/// ```
auto SOURCEMETA_CORE_JSONSCHEMA_EXPORT unevaluated(
    const JSON &schema, const SchemaFrame &frame, const SchemaWalker &walker,
    const SchemaResolver &resolver) -> SchemaUnevaluatedEntries;

} // namespace sourcemeta::core

#endif
