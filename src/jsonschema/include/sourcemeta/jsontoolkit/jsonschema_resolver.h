#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_RESOLVER_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_RESOLVER_H_

#include <sourcemeta/jsontoolkit/json.h>

#include <functional> // std::function
#include <future>     // std::future
#include <optional>   // std::optional
#include <string>     // std::string

namespace sourcemeta::jsontoolkit {

// Take a URI and get back a schema
/// @ingroup jsonschema
///
/// Some functions need to reference other schemas by their URIs. To accomplish
/// this in a generic and flexible way, these functions take resolver functions
/// as arguments, of the type sourcemeta::jsontoolkit::schema_resolver_t.
///
/// For convenience, we provide the following default resolvers:
///
/// - sourcemeta::jsontoolkit::DefaultResolver
///
/// You can implement resolvers to read from a local storage, to send HTTP
/// requests, or anything your application might require. Unless your resolver
/// is trivial, it is recommended to create a callable object that implements
/// the function interface.
using schema_resolver_t =
    std::function<std::future<std::optional<JSON>>(const std::string &)>;

} // namespace sourcemeta::jsontoolkit

#endif
