#ifndef JSONTOOLKIT_JSONSCHEMA_WALKER_H_
#define JSONTOOLKIT_JSONSCHEMA_WALKER_H_

#include <functional>    // std::function
#include <string>        // std::string
#include <unordered_map> // std::unordered_map

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

enum class schema_walker_type_t { Deep, Flat };

} // namespace sourcemeta::jsontoolkit

#endif
