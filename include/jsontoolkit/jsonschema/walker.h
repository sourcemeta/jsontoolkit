#ifndef JSONTOOLKIT_JSONSCHEMA_WALKER_H_
#define JSONTOOLKIT_JSONSCHEMA_WALKER_H_

#include <jsontoolkit/json.h>
#include <jsontoolkit/jsonschema/resolver.h>

#include <functional>    // std::function
#include <optional>      // std::optional
#include <string>        // std::string
#include <unordered_map> // std::unordered_map
#include <vector>        // std::vector

namespace sourcemeta::jsontoolkit {

enum class schema_walker_strategy_t {
  None,
  Value,
  Elements,
  Members,
  ValueOrElements,
  ElementsOrMembers
};

// Take a keyword + vocabularies in use and guide subschema walking
using schema_walker_t = std::function<schema_walker_strategy_t(
    const std::string &, const std::unordered_map<std::string, bool> &)>;

class SchemaWalker {
public:
  SchemaWalker(const Value &input, const schema_walker_t &walker,
               const schema_resolver_t &resolver,
               const std::optional<std::string> &default_metaschema);
  inline auto begin() const -> decltype(auto) {
    return this->subschemas.cbegin();
  }
  inline auto end() const -> decltype(auto) { return this->subschemas.cend(); }

private:
  auto walk(const Value &subschema, const schema_walker_t &walker,
            const schema_resolver_t &resolver, const std::string &metaschema)
      -> void;
  auto walk_array(const Value &array, const schema_walker_t &walker,
                  const schema_resolver_t &resolver,
                  const std::string &metaschema) -> void;
  auto walk_object(const Value &object, const schema_walker_t &walker,
                   const schema_resolver_t &resolver,
                   const std::string &metaschema) -> void;
  auto walk_schema(const Value &schema, const schema_walker_t &walker,
                   const schema_resolver_t &resolver,
                   const std::string &metaschema) -> void;
  std::vector<std::reference_wrapper<const Value>> subschemas;
};

} // namespace sourcemeta::jsontoolkit

#endif
