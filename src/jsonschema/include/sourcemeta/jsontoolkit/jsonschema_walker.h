#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_WALKER_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_WALKER_H_

#if defined(__EMSCRIPTEN__) || defined(__Unikraft__)
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
#else
#include "jsonschema_export.h"
#endif

#include <functional> // std::function
#include <map>        // std::map
#include <string>     // std::string

namespace sourcemeta::jsontoolkit {

#if defined(__GNUC__)
#pragma GCC diagnostic push
// For some strang reason, GCC on Debian 11 believes that a member of
// an enum class (which is namespaced by definition), can shadow an
// alias defined even on a different namespace.
#pragma GCC diagnostic ignored "-Wshadow"
#endif
/// @ingroup jsonschema
/// Determines the possible states of a schema walk strategy
enum class schema_walker_strategy_t {
  /// The JSON Schema keyword is not an applicator
  None,
  /// The JSON Schema keyword is an applicator that takes a JSON Schema
  /// definition as an argument
  Value,
  /// The JSON Schema keyword is an applicator that takes an arrat of JSON
  /// Schema definitions as an argument
  Elements,
  /// The JSON Schema keyword is an applicator that takes an object as argument,
  /// whose values are JSON Schema definitions
  Members,
  /// The JSON Schema keyword is an applicator that either takes a JSON Schema
  /// definition or an array of JSON Schema definitions as an argument
  ValueOrElements,
  /// The JSON Schema keyword is an applicator that either takes an array of
  /// JSON Schema definitions or an object whose values are JSON Schema
  /// definitions as an argument
  ElementsOrMembers
};
#if defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

// Take a keyword + vocabularies in use and guide subschema walking
/// @ingroup jsonschema
///
/// For walking purposes, some functions need to understand which JSON Schema
/// keywords declare other JSON Schema definitions. To accomplish this in a
/// generic and flexible way that does not assume the use any vocabulary other
/// than `core`, these functions take a walker function as argument, of the type
/// sourcemeta::jsontoolkit::schema_walker_t. This function returns a
/// sourcemeta::jsontoolkit::schema_walker_strategy_t.
///
/// For convenience, we provide the following default walkers:
///
/// - sourcemeta::jsontoolkit::default_schema_walker
/// - sourcemeta::jsontoolkit::schema_walker_none
using schema_walker_t = std::function<schema_walker_strategy_t(
    const std::string &, const std::map<std::string, bool> &)>;

/// @ingroup jsonschema
enum class schema_walker_type_t { Deep, Flat };

/// @ingroup jsonschema
/// A stub walker that doesn't walk
SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
auto schema_walker_none(const std::string &,
                        const std::map<std::string, bool> &)
    -> sourcemeta::jsontoolkit::schema_walker_strategy_t;

/// @ingroup jsonschema
/// A default schema walker with support for a wide range of drafs
SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
auto default_schema_walker(const std::string &keyword,
                           const std::map<std::string, bool> &vocabularies)
    -> sourcemeta::jsontoolkit::schema_walker_strategy_t;

} // namespace sourcemeta::jsontoolkit

#endif
