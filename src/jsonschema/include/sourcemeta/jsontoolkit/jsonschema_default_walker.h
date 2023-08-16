#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_DEFAULT_WALKER_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_DEFAULT_WALKER_H_

#include "jsonschema_export.h"

#include <sourcemeta/jsontoolkit/jsonschema_walker.h>

namespace sourcemeta::jsontoolkit {

// TODO: Move the contents of this file to jsonschema_walker.h

/// @ingroup jsonschema
/// A stub walker that doesn't walk
SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
auto schema_walker_none(const std::string &,
                        const std::unordered_map<std::string, bool> &)
    -> sourcemeta::jsontoolkit::schema_walker_strategy_t;

/// @ingroup jsonschema
/// A default schema walker with support for a wide range of drafs
SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
auto default_schema_walker(
    const std::string &keyword,
    const std::unordered_map<std::string, bool> &vocabularies)
    -> sourcemeta::jsontoolkit::schema_walker_strategy_t;

} // namespace sourcemeta::jsontoolkit

#endif
