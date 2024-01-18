#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_REFERENCE_FRAME_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_REFERENCE_FRAME_H_

#if defined(__EMSCRIPTEN__) || defined(__Unikraft__)
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
#else
#include "jsonschema_export.h"
#endif

#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema_reference_type.h>

#include <map>      // std::map
#include <optional> // std::optional
#include <string>   // std::string
#include <tuple>    // std::tuple
#include <utility>  // std::pair
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
  auto root(const ReferenceType type, const std::string &uri) const
      -> std::optional<std::string>;

  /// Get the identifier that consists of the JSON Schema base URI of the JSON
  /// document registered at the given URI.
  auto base(const ReferenceType type, const std::string &uri) const
      -> const std::string &;

  /// Get the JSON Pointer that must be used to get the schema registered at a
  /// given URI, relative to its root schema
  auto pointer(const ReferenceType type, const std::string &uri) const
      -> const Pointer &;

  /// Get the dialect that must be used to evaluate the schema registered at a
  /// given URI
  auto dialect(const ReferenceType type, const std::string &uri) const
      -> const std::string &;

  /// Check whether the reference frame defines a given URI
  auto defines(const ReferenceType type, const std::string &uri) const -> bool;

  /// Check the number of entries stored in the reference frame
  auto size() const -> std::size_t;

  /// Check whether the reference frame is empty or not
  auto empty() const -> bool;

  /// Store a new entry in the reference frame
  auto store(const ReferenceType type, const std::string &uri,
             const std::optional<std::string> &root, const std::string &base,
             const Pointer &pointer_from_root, const std::string &dialect)
      -> void;

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
  std::map<
      std::pair<ReferenceType, std::string>,
      std::tuple<std::optional<std::string>, std::string, Pointer, std::string>>
      data;
  // TODO: Revise the design of this class. The fact that we need this mirror
  // indicates a bad interface design Keep a mirror of the map keys for
  // iteration purposes
  std::vector<std::pair<ReferenceType, std::string>> keys;
#if defined(_MSC_VER)
#pragma warning(default : 4251)
#endif
};

} // namespace sourcemeta::jsontoolkit

#endif
