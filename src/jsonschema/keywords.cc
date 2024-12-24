#include <sourcemeta/jsontoolkit/jsonschema.h>
#include <sourcemeta/jsontoolkit/uri.h>

#include <cassert> // assert
#include <utility> // std::move

// #include <iostream>

namespace {

auto find_sibling_dependency(
    const sourcemeta::jsontoolkit::JSON &subschema,
    const sourcemeta::jsontoolkit::FrameLocationsEntry &entry,
    const sourcemeta::jsontoolkit::JSON::String &keyword,
    std::set<sourcemeta::jsontoolkit::Pointer> &dependencies) -> void {
  if (subschema.defines(keyword)) {
    dependencies.emplace(entry.relative_pointer.concat({keyword}));
  }
}

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

auto keywords(const JSON &schema, const FrameLocations &frame,
              const FrameReferences &, const SchemaWalker &walker,
              const SchemaResolver &resolver) -> KeywordEntries {
  KeywordEntries result;

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
      const auto walker_result{walker(pair.first, subschema_vocabularies)};
      std::set<Pointer> dependencies;
      bool dynamic{false};

      // TODO: Can we somehow derive this dependency information from the
      // walker? We can make walker results distinguish between mandatory
      // ordering and preference ordering (for compiler optimisations, etc),
      // plus mark each as sibling or adjacent

      if ((subschema_vocabularies.contains(
               "http://json-schema.org/draft-00/hyper-schema#") ||
           subschema_vocabularies.contains(
               "http://json-schema.org/draft-01/hyper-schema#") ||
           subschema_vocabularies.contains(
               "http://json-schema.org/draft-02/hyper-schema#") ||
           subschema_vocabularies.contains(
               "http://json-schema.org/draft-03/schema#") ||
           subschema_vocabularies.contains(
               "http://json-schema.org/draft-04/schema#") ||
           subschema_vocabularies.contains(
               "http://json-schema.org/draft-06/schema#") ||
           subschema_vocabularies.contains(
               "http://json-schema.org/draft-07/schema#") ||
           subschema_vocabularies.contains(
               "https://json-schema.org/draft/2019-09/vocab/applicator") ||
           subschema_vocabularies.contains(
               "https://json-schema.org/draft/2020-12/vocab/applicator"))) {
        if (pair.first == "additionalProperties") {
          find_sibling_dependency(subschema, entry.second, "properties",
                                  dependencies);
        }
      }

      if ((subschema_vocabularies.contains(
               "http://json-schema.org/draft-03/schema#") ||
           subschema_vocabularies.contains(
               "http://json-schema.org/draft-04/schema#") ||
           subschema_vocabularies.contains(
               "http://json-schema.org/draft-06/schema#") ||
           subschema_vocabularies.contains(
               "http://json-schema.org/draft-07/schema#") ||
           subschema_vocabularies.contains(
               "https://json-schema.org/draft/2019-09/vocab/applicator") ||
           subschema_vocabularies.contains(
               "https://json-schema.org/draft/2020-12/vocab/applicator"))) {
        if (pair.first == "additionalProperties") {
          find_sibling_dependency(subschema, entry.second, "patternProperties",
                                  dependencies);
        }
      }

      if ((subschema_vocabularies.contains(
               "http://json-schema.org/draft-03/schema#") ||
           subschema_vocabularies.contains(
               "http://json-schema.org/draft-04/schema#") ||
           subschema_vocabularies.contains(
               "http://json-schema.org/draft-06/schema#") ||
           subschema_vocabularies.contains(
               "http://json-schema.org/draft-07/schema#") ||
           subschema_vocabularies.contains(
               "https://json-schema.org/draft/2019-09/vocab/applicator"))) {
        if (pair.first == "additionalItems") {
          find_sibling_dependency(subschema, entry.second, "items",
                                  dependencies);
        }
      }

      if (subschema_vocabularies.contains(
              "https://json-schema.org/draft/2020-12/vocab/applicator")) {
        if (pair.first == "items") {
          find_sibling_dependency(subschema, entry.second, "prefixItems",
                                  dependencies);
        }
      }

      if ((subschema_vocabularies.contains(
               "http://json-schema.org/draft-07/schema#") ||
           subschema_vocabularies.contains(
               "https://json-schema.org/draft/2019-09/vocab/applicator") ||
           subschema_vocabularies.contains(
               "https://json-schema.org/draft/2020-12/vocab/applicator"))) {
        if (pair.first == "then" || pair.first == "else") {
          find_sibling_dependency(subschema, entry.second, "if", dependencies);
        }
      }

      if ((subschema_vocabularies.contains(
               "https://json-schema.org/draft/2019-09/vocab/validation") &&
           subschema_vocabularies.contains(
               "https://json-schema.org/draft/2019-09/vocab/applicator")) ||
          (subschema_vocabularies.contains(
               "https://json-schema.org/draft/2020-12/vocab/validation") &&
           subschema_vocabularies.contains(
               "https://json-schema.org/draft/2020-12/vocab/applicator"))) {
        if (pair.first == "minContains" || pair.first == "maxContains") {
          find_sibling_dependency(subschema, entry.second, "contains",
                                  dependencies);
        }
      }

      if (subschema_vocabularies.contains(
              "https://json-schema.org/draft/2019-09/vocab/applicator") ||
          (subschema_vocabularies.contains(
               "https://json-schema.org/draft/2020-12/vocab/unevaluated") &&
           subschema_vocabularies.contains(
               "https://json-schema.org/draft/2020-12/vocab/applicator"))) {
        if (pair.first == "unevaluatedProperties") {
          if (!find_adjacent_dependencies(
                  subschema, entry.second,
                  {"properties", "patternProperties", "additionalProperties"},
                  dependencies)) {
            dynamic = true;
          }
        }
      }

      if (subschema_vocabularies.contains(
              "https://json-schema.org/draft/2019-09/vocab/applicator")) {
        if (pair.first == "unevaluatedItems") {
          if (!find_adjacent_dependencies(subschema, entry.second,
                                          {"items", "additionalItems"},
                                          dependencies)) {
            dynamic = true;
          }
        }
      }

      if (subschema_vocabularies.contains(
              "https://json-schema.org/draft/2020-12/vocab/unevaluated") &&
          subschema_vocabularies.contains(
              "https://json-schema.org/draft/2020-12/vocab/applicator")) {
        if (pair.first == "unevaluatedItems") {
          if (!find_adjacent_dependencies(subschema, entry.second,
                                          {"prefixItems", "items", "contains"},
                                          dependencies)) {
            dynamic = true;
          }
        }
      }

      result.emplace(keyword_uri,
                     KeywordEntry{walker_result.vocabulary,
                                  std::move(dependencies), dynamic});
    }
  }

  return result;
}

} // namespace sourcemeta::jsontoolkit
