#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_RESOLVER_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_RESOLVER_H_

#include <sourcemeta/jsontoolkit/json.h>

#include <functional> // std::function
#include <future>     // std::future
#include <optional>   // std::optional
#include <string>     // std::string

namespace sourcemeta::jsontoolkit {

// Take a URI and get back a schema
using schema_resolver_t =
    std::function<std::future<std::optional<JSON>>(const std::string &)>;

} // namespace sourcemeta::jsontoolkit

#endif
