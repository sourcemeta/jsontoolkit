#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_KEYWORDS_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_KEYWORDS_H_

#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
#include <sourcemeta/jsontoolkit/jsonschema_export.h>
#endif

#include <map>           // std::map
#include <optional>      // std::optional
#include <string>        // std::string
#include <unordered_set> // std::set
#include <vector>        // std::vector

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>

#include <sourcemeta/jsontoolkit/jsonschema_frame.h>
#include <sourcemeta/jsontoolkit/jsonschema_resolver.h>
#include <sourcemeta/jsontoolkit/jsonschema_walker.h>

namespace sourcemeta::jsontoolkit {

/// @ingroup jsonschema
struct KeywordEntry {
  /// The vocabulary that identified the given keyword
  std::optional<std::string> vocabulary;
  /// The absolute pointers of the keyword dependencies
  std::set<Pointer> dependencies;
  /// Whether it requires runtime evaluation for full resolution
  bool dynamic;
};

/// @ingroup jsonschema
/// The flattened set of keywords in the schema by absolute URI
using KeywordEntries = std::map<std::string, KeywordEntry>;

/// @ingroup jsonschema
///
/// This function performs a static analysis pass on the input schema collecting
/// information about each keyword and its dependencies.
///
/// For example:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/json.h>
/// #include <sourcemeta/jsontoolkit/jsonschema.h>
/// #include <cassert>
///
/// const sourcemeta::jsontoolkit::JSON document =
///     sourcemeta::jsontoolkit::parse(R"JSON({
///   "$schema": "https://json-schema.org/draft/2020-12/schema",
///   "type": "number"
/// })JSON");
///
/// sourcemeta::jsontoolkit::FrameLocations frame;
/// sourcemeta::jsontoolkit::FrameReferences references;
/// sourcemeta::jsontoolkit::frame(document, frame, references,
///                                sourcemeta::jsontoolkit::default_schema_walker,
///                                sourcemeta::jsontoolkit::official_resolver);
/// const auto result{sourcemeta::jsontoolkit::keywords(
///     schema, frame, references,
///     sourcemeta::jsontoolkit::default_schema_walker,
///     sourcemeta::jsontoolkit::official_resolver)};
///
/// assert(result.contains("#/$schema"));
/// assert(result.contains("#/type"));
///
/// assert(!result.at("#/type").dynamic);
/// assert(result.at("#/type").vocabulary.has_value());
/// assert(result.at("#/type").vocabulary.value() ==
///   "https://json-schema.org/draft/2020-12/vocab/validation");
/// assert(result.at("#/type").dependencies.empty());
/// ```
auto SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
keywords(const JSON &schema, const FrameLocations &frame,
         const FrameReferences &references, const SchemaWalker &walker,
         const SchemaResolver &resolver) -> KeywordEntries;

} // namespace sourcemeta::jsontoolkit

#endif
