#ifndef JSONTOOLKIT_JSONSCHEMA_H_
#define JSONTOOLKIT_JSONSCHEMA_H_

#include <jsontoolkit/json.h>

#include <optional> // std::optional
#include <string>   // std::string

namespace sourcemeta::jsontoolkit {

auto is_schema(const Value &schema) -> bool;
auto metaschema(const Value &schema) -> std::optional<std::string>;

} // namespace sourcemeta::jsontoolkit

#endif
