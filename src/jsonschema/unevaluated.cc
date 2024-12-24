#include <sourcemeta/jsontoolkit/jsonschema.h>
#include <sourcemeta/jsontoolkit/uri.h>

#include <cassert> // assert
#include <utility> // std::move

namespace {

auto find_adjacent_dependencies(
    const sourcemeta::jsontoolkit::JSON &subschema,
    const sourcemeta::jsontoolkit::FrameLocationsEntry &entry,
    const std::set<sourcemeta::jsontoolkit::JSON::String> &keywords,
    std::set<sourcemeta::jsontoolkit::Pointer> &dependencies) -> bool {
  for (const auto &keyword : keywords) {
    // TODO: Consider adjacent cases too
    if (subschema.defines(keyword)) {
      dependencies.emplace(entry.relative_pointer.concat({keyword}));
    }
  }

  return false;
}

} // namespace

namespace sourcemeta::jsontoolkit {

auto unevaluated(const JSON &schema, const FrameLocations &frame,
                 const FrameReferences &, const SchemaWalker &,
                 const SchemaResolver &resolver) -> UnevaluatedEntries {
  UnevaluatedEntries result;

  for (const auto &entry : frame) {
    if (entry.second.type != FrameLocationType::Subschema &&
        entry.second.type != FrameLocationType::Resource) {
      continue;
    }

    const auto &subschema{get(schema, entry.second.pointer)};
    assert(is_schema(subschema));
    if (!subschema.is_object()) {
      continue;
    }

    const auto subschema_vocabularies{
        vocabularies(schema, resolver, entry.second.dialect)};
    for (const auto &pair : subschema.as_object()) {
      const auto keyword_uri{
          to_uri(entry.second.relative_pointer.concat({pair.first}),
                 entry.second.base)
              .recompose()};
      std::set<Pointer> dependencies;

      if ((subschema_vocabularies.contains(
               "https://json-schema.org/draft/2020-12/vocab/unevaluated") &&
           subschema_vocabularies.contains(
               "https://json-schema.org/draft/2020-12/vocab/applicator")) &&
          pair.first == "unevaluatedProperties") {
        const auto fully_resolved{find_adjacent_dependencies(
            subschema, entry.second,
            {"properties", "patternProperties", "additionalProperties"},
            dependencies)};
        result.emplace(keyword_uri, UnevaluatedEntry{std::move(dependencies),
                                                     !fully_resolved});
      } else if (
          (subschema_vocabularies.contains(
               "https://json-schema.org/draft/2020-12/vocab/unevaluated") &&
           subschema_vocabularies.contains(
               "https://json-schema.org/draft/2020-12/vocab/applicator")) &&
          pair.first == "unevaluatedItems") {
        const auto fully_resolved{find_adjacent_dependencies(
            subschema, entry.second, {"prefixItems", "items", "contains"},
            dependencies)};
        result.emplace(keyword_uri, UnevaluatedEntry{std::move(dependencies),
                                                     !fully_resolved});
      } else if (subschema_vocabularies.contains(
                     "https://json-schema.org/draft/2019-09/vocab/"
                     "applicator") &&
                 pair.first == "unevaluatedProperties") {
        const auto fully_resolved{find_adjacent_dependencies(
            subschema, entry.second,
            {"properties", "patternProperties", "additionalProperties"},
            dependencies)};
        result.emplace(keyword_uri, UnevaluatedEntry{std::move(dependencies),
                                                     !fully_resolved});
      } else if (subschema_vocabularies.contains(
                     "https://json-schema.org/draft/2019-09/vocab/"
                     "applicator") &&
                 pair.first == "unevaluatedItems") {
        const auto fully_resolved{find_adjacent_dependencies(
            subschema, entry.second, {"items", "additionalItems"},
            dependencies)};
        result.emplace(keyword_uri, UnevaluatedEntry{std::move(dependencies),
                                                     !fully_resolved});
      }
    }
  }

  return result;
}

} // namespace sourcemeta::jsontoolkit
