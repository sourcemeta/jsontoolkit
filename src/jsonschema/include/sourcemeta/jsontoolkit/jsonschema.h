#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_H_

#include "jsonschema_export.h"

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema_default_resolver.h>
#include <sourcemeta/jsontoolkit/jsonschema_default_walker.h>
#include <sourcemeta/jsontoolkit/jsonschema_error.h>
#include <sourcemeta/jsontoolkit/jsonschema_resolver.h>
#include <sourcemeta/jsontoolkit/jsonschema_walker.h>

#include <future>        // std::promise, std::future
#include <optional>      // std::optional
#include <stdexcept>     // std::invalid_argument
#include <string>        // std::string
#include <unordered_map> // std::unordered_map
#include <vector>        // std::vector

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
/// const sourcemeta::jsontoolkit::JSON document{
///     sourcemeta::jsontoolkit::parse(R"JSON({
///   "$schema": "https://json-schema.org/draft/2020-12/schema",
///   "$id": "https://sourcemeta.com/example-schema"
/// })JSON")};
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
/// const sourcemeta::jsontoolkit::JSON document{
///   sourcemeta::jsontoolkit::parse(R"JSON({
///   "$schema": "https://json-schema.org/draft/2020-12/schema",
///   "type": "object"
/// })JSON")};
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
/// const sourcemeta::jsontoolkit::JSON document{
///   sourcemeta::jsontoolkit::parse(R"JSON({
///   "$schema": "https://json-schema.org/draft/2020-12/schema",
///   "type": "object"
/// })JSON")};
///
/// sourcemeta::jsontoolkit::DefaultResolver resolver;
/// const std::optional<std::string> draft{
///     sourcemeta::jsontoolkit::draft(document, resolver).get()};
///
/// assert(draft.has_value());
/// assert(draft.value() == "https://json-schema.org/draft/2020-12/schema");
/// ```
SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
auto draft(const JSON &schema, const schema_resolver_t &resolver,
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
/// const sourcemeta::jsontoolkit::JSON document{
///   sourcemeta::jsontoolkit::parse(R"JSON({
///   "$schema": "https://json-schema.org/draft/2020-12/schema",
///   "type": "object"
/// })JSON")};
///
/// sourcemeta::jsontoolkit::DefaultResolver resolver;
/// const std::unordered_map<std::string, bool> vocabularies{
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
auto vocabularies(
    const JSON &schema, const schema_resolver_t &resolver,
    const std::optional<std::string> &default_metaschema = std::nullopt)
    -> std::future<std::unordered_map<std::string, bool>>;

// We inline the definition of this class in this file to avoid a circular
// dependency
/// @ingroup jsonschema
template <typename ValueT>
class SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT SchemaWalker {
private:
  using internal = typename std::vector<std::reference_wrapper<ValueT>>;

public:
  using iterator = typename internal::iterator;
  using const_iterator = typename internal::const_iterator;

  SchemaWalker(ValueT &input, const schema_walker_t &walker,
               const schema_resolver_t &resolver,
               const std::optional<std::string> &default_metaschema,
               const schema_walker_type_t type)
      : walker_type{type} {
    const std::optional<std::string> metaschema{
        sourcemeta::jsontoolkit::metaschema(input)};

    // If the given schema declares no metaschema and the user didn't
    // not pass a default, then there is nothing we can do. We know
    // the current schema is a subschema, but cannot walk any further.
    if (!metaschema.has_value() && !default_metaschema.has_value()) {
      if (this->walker_type != schema_walker_type_t::Flat) {
        this->subschemas.push_back(input);
      }
    } else {
      const std::string &effective_metaschema{metaschema.has_value()
                                                  ? metaschema.value()
                                                  : default_metaschema.value()};
      this->walk(input, walker, resolver, effective_metaschema, 0);
    }
  }

  inline auto begin() const -> decltype(auto) {
    return this->subschemas.begin();
  }
  inline auto end() const -> decltype(auto) { return this->subschemas.end(); }

  inline auto cbegin() const -> decltype(auto) {
    return this->subschemas.cbegin();
  }
  inline auto cend() const -> decltype(auto) { return this->subschemas.cend(); }

private:
  auto walk(ValueT &subschema, const schema_walker_t &walker,
            const schema_resolver_t &resolver, const std::string &metaschema,
            const std::size_t level) -> void {
    if (this->walker_type == schema_walker_type_t::Deep || level > 0) {
      this->subschemas.push_back(subschema);
    }

    // We can't recurse any further
    if (!subschema.is_object() ||
        (this->walker_type == schema_walker_type_t::Flat && level > 0)) {
      return;
    }

    // Recalculate the metaschema and its vocabularies at every step.
    // This is needed for correctly traversing through schemas that
    // contains subschemas that use different metaschemas/vocabularies.
    // This is often the case for bundled schemas.
    const std::optional<std::string> current_metaschema{
        sourcemeta::jsontoolkit::metaschema(subschema)};
    const std::string &new_metaschema{current_metaschema.has_value()
                                          ? current_metaschema.value()
                                          : metaschema};
    const std::unordered_map<std::string, bool> vocabularies{
        sourcemeta::jsontoolkit::vocabularies(subschema, resolver,
                                              new_metaschema)
            .get()};

    for (auto &pair : subschema.as_object()) {
      switch (walker(pair.first, vocabularies)) {
        case schema_walker_strategy_t::Value:
          this->walk_schema(pair.second, walker, resolver, new_metaschema,
                            level);
          break;
        case schema_walker_strategy_t::Elements:
          this->walk_array(pair.second, walker, resolver, new_metaschema,
                           level);
          break;
        case schema_walker_strategy_t::Members:
          this->walk_object(pair.second, walker, resolver, new_metaschema,
                            level);
          break;
        case schema_walker_strategy_t::ValueOrElements:
          if (pair.second.is_array()) {
            this->walk_array(pair.second, walker, resolver, new_metaschema,
                             level);
          } else {
            this->walk_schema(pair.second, walker, resolver, new_metaschema,
                              level);
          }
          break;
        case schema_walker_strategy_t::ElementsOrMembers:
          if (pair.second.is_array()) {
            this->walk_array(pair.second, walker, resolver, new_metaschema,
                             level);
          } else {
            this->walk_object(pair.second, walker, resolver, new_metaschema,
                              level);
          }
          break;
        case schema_walker_strategy_t::None:
          break;
      }
    }
  }

  auto walk_array(ValueT &array, const schema_walker_t &walker,
                  const schema_resolver_t &resolver,
                  const std::string &metaschema, const std::size_t level)
      -> void {
    if (array.is_array()) {
      for (auto &element : array.as_array()) {
        this->walk(element, walker, resolver, metaschema, level + 1);
      }
    }
  }

  auto walk_object(ValueT &object, const schema_walker_t &walker,
                   const schema_resolver_t &resolver,
                   const std::string &metaschema, const std::size_t level)
      -> void {
    if (object.is_object()) {
      for (auto &pair : object.as_object()) {
        this->walk(pair.second, walker, resolver, metaschema, level + 1);
      }
    }
  }

  auto walk_schema(ValueT &schema, const schema_walker_t &walker,
                   const schema_resolver_t &resolver,
                   const std::string &metaschema, const std::size_t level)
      -> void {
    if (schema.is_object() || schema.is_boolean()) {
      this->walk(schema, walker, resolver, metaschema, level + 1);
    }
  }

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
  schema_walker_type_t walker_type;
};

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
/// const sourcemeta::jsontoolkit::JSON document{
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
/// })JSON")};
///
/// sourcemeta::jsontoolkit::DefaultResolver resolver;
///
/// for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
///          document, sourcemeta::jsontoolkit::default_schema_walker,
///          resolver)) {
///   sourcemeta::jsontoolkit::prettify(subschema, std::cout);
///   std::cout << "\n";
/// }
/// ```
SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
auto subschema_iterator(
    const JSON &schema, const schema_walker_t &walker,
    const schema_resolver_t &resolver,
    const std::optional<std::string> &default_metaschema = std::nullopt)
    -> SchemaWalker<std::remove_reference_t<decltype(schema)>>;

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
/// const sourcemeta::jsontoolkit::JSON document{
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
/// })JSON")};
///
/// sourcemeta::jsontoolkit::DefaultResolver resolver;
///
/// for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
///          document, sourcemeta::jsontoolkit::default_schema_walker,
///          resolver)) {
///   sourcemeta::jsontoolkit::prettify(subschema, std::cout);
///   std::cout << "\n";
/// }
/// ```
SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
auto flat_subschema_iterator(
    const JSON &schema, const schema_walker_t &walker,
    const schema_resolver_t &resolver,
    const std::optional<std::string> &default_metaschema = std::nullopt)
    -> SchemaWalker<std::remove_reference_t<decltype(schema)>>;

/// @ingroup jsonschema
/// A mutable variant of sourcemeta::jsontoolkit::flat_subschema_iterator.
SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
auto flat_subschema_iterator(
    JSON &schema, const schema_walker_t &walker,
    const schema_resolver_t &resolver,
    const std::optional<std::string> &default_metaschema = std::nullopt)
    -> SchemaWalker<std::remove_reference_t<decltype(schema)>>;

} // namespace sourcemeta::jsontoolkit

#endif
