#ifndef JSONTOOLKIT_JSONSCHEMA_H_
#define JSONTOOLKIT_JSONSCHEMA_H_

#include <jsontoolkit/json.h>
#include <jsontoolkit/jsonschema/resolver.h>

#include <future>        // std::promise, std::future
#include <optional>      // std::optional
#include <stdexcept>     // std::invalid_argument
#include <string>        // std::string
#include <unordered_map> // std::unordered_map

namespace sourcemeta::jsontoolkit {

auto is_schema(const Value &schema) -> bool;
auto id(const Value &schema) -> std::optional<std::string>;
auto metaschema(const Value &schema) -> std::optional<std::string>;
auto vocabularies(const Value &schema, const schema_resolver_t &resolver)
    -> std::future<std::unordered_map<std::string, bool>>;

} // namespace sourcemeta::jsontoolkit

#endif
