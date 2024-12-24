#include <sourcemeta/jsontoolkit/jsonschema.h>
#include <sourcemeta/jsontoolkit/uri.h>

#include <cassert> // assert
#include <utility> // std::move

#include <iostream>

namespace {
using namespace sourcemeta::jsontoolkit;

auto find_sibling_dependency(const JSON &subschema,
                             const FrameLocationsEntry &entry,
                             const JSON::String &keyword,
                             std::set<Pointer> &dependencies) -> void {
  if (subschema.defines(keyword)) {
    dependencies.emplace(entry.relative_pointer.concat({keyword}));
  }
}

auto navigate_frame(const FrameLocations &frame,
                    const FrameLocationsEntry &entry,
                    const Pointer &relative_pointer)
    -> const FrameLocationsEntry & {
  const auto new_uri{
      to_uri(entry.relative_pointer.concat(relative_pointer), entry.base)
          .recompose()};
  assert(frame.contains({ReferenceType::Static, new_uri}));
  return frame.at({ReferenceType::Static, new_uri});
}

// TODO: Extract all of this into a public utility to traverse
// adjacent subschemas
auto find_adjacent_dependencies(const JSON &schema, const FrameLocations &frame,
                                const FrameLocationsEntry &entry,
                                const SchemaWalker &walker,
                                const SchemaResolver &resolver,
                                const std::set<JSON::String> &keywords,
                                std::set<Pointer> &dependencies) -> bool {
  const auto &subschema{get(schema, entry.relative_pointer)};
  if (!subschema.is_object()) {
    return true;
  }

  const auto subschema_vocabularies{
      vocabularies(subschema, resolver, entry.dialect)};

  std::cerr << "TRAVERSING: ";
  stringify(subschema, std::cerr);
  std::cerr << "\n";

  bool result{true};
  for (const auto &property : subschema.as_object()) {
    if (keywords.contains(property.first)) {
      dependencies.emplace(entry.relative_pointer.concat({property.first}));
    }

    const auto walker_result{walker(property.first, subschema_vocabularies)};

    // TODO: Treat anyOf, then, else, etc differently by giving it
    // a different walker strategy altogether

    switch (walker_result.strategy) {
      case SchemaWalkerStrategy::Reference:
        // TODO: Implement support for static references
        result = false;
        break;
      case SchemaWalkerStrategy::ApplicatorValueInPlace:
        if (property.second.is_object() &&
            !find_adjacent_dependencies(
                schema, frame, navigate_frame(frame, entry, {property.first}),
                walker, resolver, keywords, dependencies)) {
          result = false;
        }

        break;
      case SchemaWalkerStrategy::ApplicatorElementsInPlace:
        if (property.second.is_array()) {
          for (std::size_t index = 0; index < property.second.size(); index++) {
            if (!find_adjacent_dependencies(
                    schema, frame,
                    navigate_frame(frame, entry, {property.first, index}),
                    walker, resolver, keywords, dependencies)) {
              result = false;
            }
          }
        }

        break;
      case SchemaWalkerStrategy::ApplicatorValueOrElementsInPlace:
        if (property.second.is_array()) {
          for (std::size_t index = 0; index < property.second.size(); index++) {
            if (!find_adjacent_dependencies(
                    schema, frame,
                    navigate_frame(frame, entry, {property.first, index}),
                    walker, resolver, keywords, dependencies)) {
              result = false;
            }
          }
        } else if (property.second.is_object() &&
                   !find_adjacent_dependencies(
                       schema, frame,
                       navigate_frame(frame, entry, {property.first}), walker,
                       resolver, keywords, dependencies)) {
          result = false;
        }

        break;
      default:
        break;
    }
  }

  return result;
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
                  schema, frame, entry.second, walker, resolver,
                  {"properties", "patternProperties", "additionalProperties"},
                  dependencies)) {
            dynamic = true;
          }
        }
      }

      if (subschema_vocabularies.contains(
              "https://json-schema.org/draft/2019-09/vocab/applicator")) {
        if (pair.first == "unevaluatedItems") {
          if (!find_adjacent_dependencies(
                  schema, frame, entry.second, walker, resolver,
                  {"items", "additionalItems"}, dependencies)) {
            dynamic = true;
          }
        }
      }

      if (subschema_vocabularies.contains(
              "https://json-schema.org/draft/2020-12/vocab/unevaluated") &&
          subschema_vocabularies.contains(
              "https://json-schema.org/draft/2020-12/vocab/applicator")) {
        if (pair.first == "unevaluatedItems") {
          if (!find_adjacent_dependencies(
                  schema, frame, entry.second, walker, resolver,
                  {"prefixItems", "items", "contains"}, dependencies)) {
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
