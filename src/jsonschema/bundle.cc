#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <cassert> // assert
#include <map>     // std::map
#include <sstream> // std::ostringstream
#include <utility> // std::move

namespace {

auto definitions_keyword(const std::map<std::string, bool> &vocabularies)
    -> std::string {
  if (vocabularies.contains(
          "https://json-schema.org/draft/2020-12/vocab/core") ||
      vocabularies.contains(
          "https://json-schema.org/draft/2019-09/vocab/core")) {
    return "$defs";
  }

  if (vocabularies.contains("http://json-schema.org/draft-07/schema#") ||
      vocabularies.contains("http://json-schema.org/draft-06/schema#") ||
      vocabularies.contains("http://json-schema.org/draft-04/schema#")) {
    return "definitions";
  }

  // We don't attempt to bundle on dialects where we
  // don't know where to put the embedded schemas
  throw sourcemeta::jsontoolkit::SchemaError(
      "Cannot determine how to bundle on this dialect");
}

auto identifier_string(const sourcemeta::jsontoolkit::JSON &target,
                       const sourcemeta::jsontoolkit::SchemaResolver &resolver,
                       const std::optional<std::string> &default_dialect)
    -> std::optional<std::string> {
  const auto dialect{sourcemeta::jsontoolkit::dialect(target, default_dialect)};
  assert(dialect.has_value());
  const auto base_dialect{
      sourcemeta::jsontoolkit::base_dialect(target, resolver, dialect).get()};
  const auto vocabularies{sourcemeta::jsontoolkit::vocabularies(
                              resolver, base_dialect.value(), dialect.value())
                              .get()};
  assert(!vocabularies.empty());

  // Always insert an identifier, as a schema might refer to another schema
  // using another URI (i.e. due to relying on HTTP re-directions, etc)

  if (target.is_object()) {
    if (vocabularies.contains(
            "https://json-schema.org/draft/2020-12/vocab/core") ||
        vocabularies.contains(
            "https://json-schema.org/draft/2019-09/vocab/core") ||
        vocabularies.contains("http://json-schema.org/draft-07/schema#") ||
        vocabularies.contains("http://json-schema.org/draft-06/schema#")) {
      return "$id";
    } else if (vocabularies.contains(
                   "http://json-schema.org/draft-04/schema#") ||
               vocabularies.contains(
                   "http://json-schema.org/draft-03/schema#") ||
               vocabularies.contains(
                   "http://json-schema.org/draft-02/schema#") ||
               vocabularies.contains(
                   "http://json-schema.org/draft-01/schema#") ||
               vocabularies.contains(
                   "http://json-schema.org/draft-00/schema#")) {
      return "id";
    } else {
      throw sourcemeta::jsontoolkit::SchemaError(
          "Cannot determine how to bundle on this dialect");
    }
  }

  return std::nullopt;
}

auto embed_schema(sourcemeta::jsontoolkit::JSON &definitions,
                  const std::string &identifier,
                  const sourcemeta::jsontoolkit::JSON &target) -> std::string {
  std::ostringstream key;
  key << identifier;
  // Ensure we get a definitions entry that does not exist
  while (definitions.defines(key.str())) {
    key << "/x";
  }

  definitions.assign(key.str(), target);
  return key.str();
}

auto set_pointer_as_uri_fragment(
    sourcemeta::jsontoolkit::JSON &document,
    const sourcemeta::jsontoolkit::Pointer &location,
    const sourcemeta::jsontoolkit::Pointer &pointer) -> void {
  sourcemeta::jsontoolkit::set(
      document, location,
      sourcemeta::jsontoolkit::JSON{
          sourcemeta::jsontoolkit::to_uri(pointer).recompose()});
}

auto revise_framed_reference(
    sourcemeta::jsontoolkit::JSON &root,
    const sourcemeta::jsontoolkit::ReferenceFrame &frame,
    const sourcemeta::jsontoolkit::Pointer &base,
    const sourcemeta::jsontoolkit::ReferenceType &type,
    const std::string &reference,
    const sourcemeta::jsontoolkit::Pointer &relative_schema_location,
    const sourcemeta::jsontoolkit::BundleOptions &options) -> void {
  if (base.empty() ||
      options != sourcemeta::jsontoolkit::BundleOptions::WithoutIdentifiers) {
    return;
  }

  const auto &frame_entry{frame.at({type, reference})};
  set_pointer_as_uri_fragment(root, base.concat(relative_schema_location),
                              base.concat(frame_entry.pointer));
}

auto bundle_schema(sourcemeta::jsontoolkit::JSON &root,
                   const sourcemeta::jsontoolkit::Pointer &base,
                   const std::string &container,
                   sourcemeta::jsontoolkit::ReferenceFrame &frame,
                   const sourcemeta::jsontoolkit::ReferenceMap &references,
                   const sourcemeta::jsontoolkit::SchemaWalker &walker,
                   const sourcemeta::jsontoolkit::SchemaResolver &resolver,
                   const sourcemeta::jsontoolkit::BundleOptions options,
                   const std::optional<std::string> &default_dialect) -> void {
  for (const auto &[key, reference] : references) {
    if (frame.contains({sourcemeta::jsontoolkit::ReferenceType::Static,
                        reference.destination})) {
      revise_framed_reference(root, frame, base,
                              sourcemeta::jsontoolkit::ReferenceType::Static,
                              reference.destination, key.second, options);
      continue;
    } else if (frame.contains({sourcemeta::jsontoolkit::ReferenceType::Dynamic,
                               reference.destination})) {
      revise_framed_reference(root, frame, base,
                              sourcemeta::jsontoolkit::ReferenceType::Dynamic,
                              reference.destination, key.second, options);
      continue;
    }

    root.assign_if_missing(container,
                           sourcemeta::jsontoolkit::JSON::make_object());

    if (!reference.base.has_value()) {
      throw sourcemeta::jsontoolkit::SchemaReferenceError(
          reference.destination, key.second,
          "Could not resolve schema reference");
    }

    assert(reference.base.has_value());
    const auto identifier{reference.base.value()};
    const auto remote{resolver(identifier).get()};
    if (!remote.has_value()) {
      if (frame.contains(
              {sourcemeta::jsontoolkit::ReferenceType::Static, identifier}) ||
          frame.contains(
              {sourcemeta::jsontoolkit::ReferenceType::Dynamic, identifier})) {
        throw sourcemeta::jsontoolkit::SchemaReferenceError(
            reference.destination, key.second,
            "Could not resolve schema reference");
      }

      throw sourcemeta::jsontoolkit::SchemaResolutionError(
          identifier, "Could not resolve schema");
    }

    sourcemeta::jsontoolkit::JSON copy{remote.value()};

    const auto identifier_key{
        identifier_string(copy, resolver, default_dialect)};
    if (identifier_key.has_value()) {
      copy.assign(identifier_key.value(),
                  sourcemeta::jsontoolkit::JSON{identifier});
    }

    // We need to frame after fixing-up missing identifiers but before
    // potentially removing the identifiers (if requested by the user)
    sourcemeta::jsontoolkit::ReferenceMap new_references;
    sourcemeta::jsontoolkit::frame(copy, frame, new_references, walker,
                                   resolver, default_dialect)
        .wait();

    if (options == sourcemeta::jsontoolkit::BundleOptions::WithoutIdentifiers) {
      // Remove ids
      if (identifier_key.has_value()) {
        copy.erase(identifier_key.value());
      }

      // Remove anchors
      for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator{
               copy, walker, resolver, default_dialect}) {
        if (entry.vocabularies.contains(
                "https://json-schema.org/draft/2020-12/vocab/core")) {
          auto &subschema{sourcemeta::jsontoolkit::get(copy, entry.pointer)};
          subschema.erase("$anchor");
          subschema.erase("$dynamicAnchor");
        }

        if (entry.vocabularies.contains(
                "https://json-schema.org/draft/2019-09/vocab/core")) {
          auto &subschema{sourcemeta::jsontoolkit::get(copy, entry.pointer)};
          subschema.erase("$anchor");
          subschema.erase("$recursiveAnchor");
        }
      }
    }

    const auto embed_key{embed_schema(root.at(container), identifier, copy)};
    const sourcemeta::jsontoolkit::Pointer embed_location{container, embed_key};

    // Rephrase the reference as a plain pointer URI
    if (options == sourcemeta::jsontoolkit::BundleOptions::WithoutIdentifiers) {
      assert(frame.contains({sourcemeta::jsontoolkit::ReferenceType::Static,
                             reference.destination}) ||
             frame.contains({sourcemeta::jsontoolkit::ReferenceType::Dynamic,
                             reference.destination}));
      const auto reference_type{
          frame.contains({sourcemeta::jsontoolkit::ReferenceType::Static,
                          reference.destination})
              ? sourcemeta::jsontoolkit::ReferenceType::Static
              : sourcemeta::jsontoolkit::ReferenceType::Dynamic};
      const auto &frame_entry{
          frame.at({reference_type, reference.destination})};
      const auto destination_pointer{
          embed_location.concat(frame_entry.pointer)};
      set_pointer_as_uri_fragment(root, key.second, destination_pointer);
    }

    bundle_schema(root, embed_location, container, frame, new_references,
                  walker, resolver, options, default_dialect);
  }
}

} // namespace

namespace sourcemeta::jsontoolkit {

auto bundle(sourcemeta::jsontoolkit::JSON &schema, const SchemaWalker &walker,
            const SchemaResolver &resolver, const BundleOptions options,
            const std::optional<std::string> &default_dialect)
    -> std::future<void> {
  const auto vocabularies{
      sourcemeta::jsontoolkit::vocabularies(schema, resolver, default_dialect)
          .get()};

  sourcemeta::jsontoolkit::ReferenceFrame frame;
  sourcemeta::jsontoolkit::ReferenceMap references;
  sourcemeta::jsontoolkit::frame(schema, frame, references, walker, resolver,
                                 default_dialect)
      .wait();

  bundle_schema(schema, empty_pointer, definitions_keyword(vocabularies), frame,
                references, walker, resolver, options, default_dialect);
  return std::promise<void>{}.get_future();
}

auto bundle(const sourcemeta::jsontoolkit::JSON &schema,
            const SchemaWalker &walker, const SchemaResolver &resolver,
            const BundleOptions options,
            const std::optional<std::string> &default_dialect)
    -> std::future<sourcemeta::jsontoolkit::JSON> {
  sourcemeta::jsontoolkit::JSON copy = schema;
  bundle(copy, walker, resolver, options, default_dialect).wait();
  std::promise<sourcemeta::jsontoolkit::JSON> promise;
  promise.set_value(std::move(copy));
  return promise.get_future();
}

} // namespace sourcemeta::jsontoolkit
