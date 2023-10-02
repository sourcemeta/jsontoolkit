#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_WALKER_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_WALKER_H_

#if defined(__EMSCRIPTEN__) || defined(__Unikraft__)
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
#else
#include "jsonschema_export.h"
#endif

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema_resolver.h>

#include <functional>  // std::function, std::reference_wrapper
#include <map>         // std::map
#include <optional>    // std::optional
#include <string>      // std::string
#include <string_view> // std::string_view
#include <vector>      // std::vector

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
enum class SchemaWalkerStrategy {
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
/// sourcemeta::jsontoolkit::SchemaWalker. This function returns a
/// sourcemeta::jsontoolkit::SchemaWalkerStrategy.
///
/// For convenience, we provide the following default walkers:
///
/// - sourcemeta::jsontoolkit::default_schema_walker
/// - sourcemeta::jsontoolkit::schema_walker_none
using SchemaWalker = std::function<SchemaWalkerStrategy(
    std::string_view, const std::map<std::string, bool> &)>;

/// @ingroup jsonschema
/// A stub walker that doesn't walk
SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
auto schema_walker_none(std::string_view, const std::map<std::string, bool> &)
    -> sourcemeta::jsontoolkit::SchemaWalkerStrategy;

/// @ingroup jsonschema
/// A default schema walker with support for a wide range of drafs
SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
auto default_schema_walker(std::string_view keyword,
                           const std::map<std::string, bool> &vocabularies)
    -> sourcemeta::jsontoolkit::SchemaWalkerStrategy;

/// @ingroup jsonschema
///
/// Return an iterator over the subschemas of a given JSON Schema definition
/// according to the applicators understood by the provided walker function.
/// This walker recursively traverses over every subschema of
/// the JSON Schema definition, including the top-level schema in a read-only
/// mode.
///
/// For example:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/json.h>
/// #include <sourcemeta/jsontoolkit/jsonschema.h>
/// #include <iostream>
///
/// const sourcemeta::jsontoolkit::JSON document =
///   sourcemeta::jsontoolkit::parse(R"JSON({
///   "$schema": "https://json-schema.org/draft/2020-12/schema",
///   "type": "object",
///   "properties": {
///     "foo": {
///       "type": "array",
///       "items": {
///         "type": "string"
///       }
///     }
///   }
/// })JSON");
///
/// for (const auto &subschema :
/// sourcemeta::jsontoolkit::ConstSchemaIterator{
///          document, sourcemeta::jsontoolkit::default_schema_walker,
///          sourcemeta::jsontoolkit::official_resolver}) {
///   sourcemeta::jsontoolkit::prettify(subschema, std::cout);
///   std::cout << "\n";
/// }
/// ```
class SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT ConstSchemaIterator {
private:
  using internal = typename std::vector<std::reference_wrapper<const JSON>>;

public:
  using const_iterator = typename internal::const_iterator;
  ConstSchemaIterator(
      const JSON &input, const SchemaWalker &walker,
      const SchemaResolver &resolver,
      const std::optional<std::string> &default_dialect = std::nullopt);
  auto begin() const -> const_iterator;
  auto end() const -> const_iterator;
  auto cbegin() const -> const_iterator;
  auto cend() const -> const_iterator;

private:
// Exporting symbols that depends on the standard C++ library is considered
// safe.
// https://learn.microsoft.com/en-us/cpp/error-messages/compiler-warnings/compiler-warning-level-2-c4275?view=msvc-170&redirectedfrom=MSDN
#if defined(_MSC_VER)
#pragma warning(disable : 4251)
#endif
  internal subschemas;
#if defined(_MSC_VER)
#pragma warning(default : 4251)
#endif
};

/// @ingroup jsonschema
///
/// Return an iterator over the subschemas of a given JSON Schema definition
/// according to the applicators understood by the provided walker function.
/// This walker traverse over the first-level of subschemas of the JSON Schema
/// definition, ignoring the top-level schema in read-write modes.
///
/// For example:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/json.h>
/// #include <sourcemeta/jsontoolkit/jsonschema.h>
/// #include <iostream>
///
/// const sourcemeta::jsontoolkit::JSON document =
///   sourcemeta::jsontoolkit::parse(R"JSON({
///   "$schema": "https://json-schema.org/draft/2020-12/schema",
///   "type": "object",
///   "properties": {
///     "foo": {
///       "type": "array",
///       "items": {
///         "type": "string"
///       }
///     }
///   }
/// })JSON");
///
/// for (const auto &subschema :
/// sourcemeta::jsontoolkit::ConstSchemaIteratorFlat{
///          document, sourcemeta::jsontoolkit::default_schema_walker,
///          sourcemeta::jsontoolkit::official_resolver}) {
///   sourcemeta::jsontoolkit::prettify(subschema, std::cout);
///   std::cout << "\n";
/// }
/// ```
class SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT ConstSchemaIteratorFlat {
private:
  using internal = typename std::vector<std::reference_wrapper<const JSON>>;

public:
  using const_iterator = typename internal::const_iterator;
  ConstSchemaIteratorFlat(
      const JSON &input, const SchemaWalker &walker,
      const SchemaResolver &resolver,
      const std::optional<std::string> &default_dialect = std::nullopt);
  auto begin() const -> const_iterator;
  auto end() const -> const_iterator;
  auto cbegin() const -> const_iterator;
  auto cend() const -> const_iterator;

private:
// Exporting symbols that depends on the standard C++ library is considered
// safe.
// https://learn.microsoft.com/en-us/cpp/error-messages/compiler-warnings/compiler-warning-level-2-c4275?view=msvc-170&redirectedfrom=MSDN
#if defined(_MSC_VER)
#pragma warning(disable : 4251)
#endif
  internal subschemas;
#if defined(_MSC_VER)
#pragma warning(default : 4251)
#endif
};

/// @ingroup jsonschema
/// A mutable variant of sourcemeta::jsontoolkit::ConstSchemaIteratorFlat.
class SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT SchemaIteratorFlat {
private:
  using internal = typename std::vector<std::reference_wrapper<JSON>>;

public:
  using iterator = typename internal::iterator;
  using const_iterator = typename internal::const_iterator;
  SchemaIteratorFlat(
      JSON &input, const SchemaWalker &walker, const SchemaResolver &resolver,
      const std::optional<std::string> &default_dialect = std::nullopt);
  auto begin() -> iterator;
  auto end() -> iterator;
  auto cbegin() const -> const_iterator;
  auto cend() const -> const_iterator;

private:
// Exporting symbols that depends on the standard C++ library is considered
// safe.
// https://learn.microsoft.com/en-us/cpp/error-messages/compiler-warnings/compiler-warning-level-2-c4275?view=msvc-170&redirectedfrom=MSDN
#if defined(_MSC_VER)
#pragma warning(disable : 4251)
#endif
  internal subschemas;
#if defined(_MSC_VER)
#pragma warning(default : 4251)
#endif
};

} // namespace sourcemeta::jsontoolkit

#endif
