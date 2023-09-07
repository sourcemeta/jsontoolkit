#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_DEFAULT_RESOLVER_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_DEFAULT_RESOLVER_H_

#if defined(__EMSCRIPTEN__) || defined(__Unikraft__)
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
#else
#include "jsonschema_export.h"
#endif

#include <future>   // std::future
#include <optional> // std::optional
#include <string>   // std::string

#include <sourcemeta/jsontoolkit/json.h>

namespace sourcemeta::jsontoolkit {

/// @ingroup jsonschema
/// A default resolver that relies on built-in official schemas.
class SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT DefaultResolver {
public:
  auto operator()(const std::string &identifier)
      -> std::future<std::optional<sourcemeta::jsontoolkit::JSON>>;
};

} // namespace sourcemeta::jsontoolkit

#endif
