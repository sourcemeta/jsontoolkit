#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>
#include <sourcemeta/jsontoolkit/uri.h>

#include <cassert>  // assert
#include <map>      // std::map
#include <optional> // std::optional
#include <utility>  // std::pair
#include <vector>   // std::vector

static auto find_nearest_bases(const std::map<sourcemeta::jsontoolkit::Pointer,
                                              std::vector<std::string>> &bases,
                               const sourcemeta::jsontoolkit::Pointer &pointer,
                               const std::optional<std::string> &default_base)
    -> std::vector<std::string> {
  for (const auto &subpointer :
       sourcemeta::jsontoolkit::SubPointerWalker{pointer}) {
    if (bases.contains(subpointer)) {
      return bases.at(subpointer);
    }
  }

  if (default_base.has_value()) {
    return {default_base.value()};
  }

  return {};
}

static auto find_every_base(const std::map<sourcemeta::jsontoolkit::Pointer,
                                           std::vector<std::string>> &bases,
                            const sourcemeta::jsontoolkit::Pointer &pointer)
    -> std::vector<std::pair<std::string, sourcemeta::jsontoolkit::Pointer>> {
  std::vector<std::pair<std::string, sourcemeta::jsontoolkit::Pointer>> result;

  for (const auto &subpointer :
       sourcemeta::jsontoolkit::SubPointerWalker{pointer}) {
    if (bases.contains(subpointer)) {
      for (const auto &base : bases.at(subpointer)) {
        result.push_back({base, subpointer});
      }
    }
  }

  if (result.empty()) {
    result.push_back({"", sourcemeta::jsontoolkit::empty_pointer});
  }

  return result;
}

auto sourcemeta::jsontoolkit::frame(
    const sourcemeta::jsontoolkit::JSON &schema,
    sourcemeta::jsontoolkit::ReferenceFrame &frame,
    sourcemeta::jsontoolkit::ReferenceMap &references,
    const sourcemeta::jsontoolkit::SchemaWalker &walker,
    const sourcemeta::jsontoolkit::SchemaResolver &resolver,
    const std::optional<std::string> &default_dialect,
    const std::optional<std::string> &default_id) -> std::future<void> {
  std::map<sourcemeta::jsontoolkit::Pointer, std::vector<std::string>>
      base_uris;
  std::map<sourcemeta::jsontoolkit::Pointer, std::vector<std::string>>
      base_dialects;

  const std::optional<std::string> root_id{
      sourcemeta::jsontoolkit::id(schema, resolver, default_dialect, default_id)
          .get()};
  const std::optional<std::string> root_dialect{
      sourcemeta::jsontoolkit::dialect(schema, default_dialect)};
  assert(root_dialect.has_value());

  // If the top-level schema has a specific identifier but the user
  // passes a different default identifier, then the schema is by
  // definition known by two names, and we should handle that accordingly
  const bool has_explicit_different_id{root_id.has_value() &&
                                       default_id.has_value() &&
                                       root_id.value() != default_id.value()};
  if (has_explicit_different_id) {
    frame.store(default_id.value(), root_id.value(), root_id.value(),
                sourcemeta::jsontoolkit::empty_pointer, root_dialect.value());
    base_uris.insert(
        {sourcemeta::jsontoolkit::empty_pointer, {default_id.value()}});
  }

  for (const auto &pointer : sourcemeta::jsontoolkit::SchemaIterator{
           schema, walker, resolver, default_dialect}) {
    const auto &subschema{sourcemeta::jsontoolkit::get(schema, pointer)};
    const std::optional<std::string> current_dialect{
        sourcemeta::jsontoolkit::dialect(subschema)};
    if (current_dialect.has_value()) {
      base_dialects.insert({pointer, {current_dialect.value()}});
    }

    const auto effective_dialects{
        find_nearest_bases(base_dialects, pointer, root_dialect)};
    assert(effective_dialects.size() == 1);

    // Handle schema identifiers
    const std::optional<std::string> id{
        sourcemeta::jsontoolkit::id(subschema, resolver,
                                    effective_dialects.front(),
                                    pointer.empty() ? default_id : std::nullopt)
            .get()};

    const std::optional<std::string> base_dialect{
        sourcemeta::jsontoolkit::base_dialect(subschema, resolver,
                                              effective_dialects.front())
            .get()};

    if (id.has_value()) {
      // In older drafts, the presence of `$ref` would override any sibling
      // keywords
      // See
      // https://json-schema.org/draft-07/draft-handrews-json-schema-01#rfc.section.8.3
      const bool ref_overrides_id =
          base_dialect.has_value() &&
          (base_dialect.value() == "http://json-schema.org/draft-07/schema#" ||
           base_dialect.value() ==
               "http://json-schema.org/draft-07/hyper-schema#" ||
           base_dialect.value() == "http://json-schema.org/draft-06/schema#" ||
           base_dialect.value() ==
               "http://json-schema.org/draft-06/hyper-schema#" ||
           base_dialect.value() == "http://json-schema.org/draft-04/schema#" ||
           base_dialect.value() ==
               "http://json-schema.org/draft-04/hyper-schema#" ||
           base_dialect.value() == "http://json-schema.org/draft-03/schema#" ||
           base_dialect.value() ==
               "http://json-schema.org/draft-03/hyper-schema#" ||
           base_dialect.value() ==
               "http://json-schema.org/draft-02/hyper-schema#" ||
           base_dialect.value() ==
               "http://json-schema.org/draft-01/hyper-schema#" ||
           base_dialect.value() ==
               "http://json-schema.org/draft-00/hyper-schema#");

      if (!subschema.defines("$ref") || !ref_overrides_id) {
        for (const auto &base_string :
             find_nearest_bases(base_uris, pointer, id)) {
          const sourcemeta::jsontoolkit::URI base{base_string};
          const sourcemeta::jsontoolkit::URI maybe_relative{id.value()};
          const std::string new_id{maybe_relative.resolve_from(base)};
          if (!maybe_relative.is_absolute() || !frame.defines(new_id)) {
            frame.store(new_id, root_id, new_id, pointer,
                        effective_dialects.front());
          }

          if (base_uris.contains(pointer)) {
            base_uris.at(pointer).push_back(new_id);
          } else {
            base_uris.insert({pointer, {new_id}});
          }
        }
      }
    }

    // Handle schema anchors
    for (const auto &[name, type] :
         sourcemeta::jsontoolkit::anchors(subschema, resolver,
                                          effective_dialects.front())
             .get()) {
      const auto anchor_uri{sourcemeta::jsontoolkit::URI::from_fragment(name)};
      const auto bases{find_nearest_bases(base_uris, pointer, id)};
      const auto relative_anchor_uri{anchor_uri.recompose()};

      if (bases.empty()) {
        if (type == sourcemeta::jsontoolkit::AnchorType::Static) {
          frame.store(relative_anchor_uri, root_id, "", pointer,
                      effective_dialects.front());
        }
      } else {
        bool is_first = true;
        for (const auto &base_string : bases) {
          const sourcemeta::jsontoolkit::URI anchor_base{base_string};
          const auto absolute_anchor_uri{anchor_uri.resolve_from(anchor_base)};
          if (!is_first && frame.defines(absolute_anchor_uri)) {
            continue;
          }

          if (type == sourcemeta::jsontoolkit::AnchorType::Static) {
            frame.store(absolute_anchor_uri, root_id, base_string, pointer,
                        effective_dialects.front());

            if (root_id.has_value() && root_id.value() == base_string) {
              frame.store(relative_anchor_uri, root_id, "", pointer,
                          effective_dialects.front());
            }
          }

          is_first = false;
        }
      }
    }
  }

  // Pre-compute every possible pointer to the schema
  for (const auto &pointer : sourcemeta::jsontoolkit::PointerWalker{schema}) {
    const auto dialects{
        find_nearest_bases(base_dialects, pointer, root_dialect)};
    assert(dialects.size() == 1);

    for (const auto &base : find_every_base(base_uris, pointer)) {
      const auto relative_pointer_uri{
          sourcemeta::jsontoolkit::to_uri(pointer.resolve_from(base.second))};
      const auto result{base.first.empty()
                            ? relative_pointer_uri.recompose()
                            : relative_pointer_uri.resolve_from({base.first})};
      if (!frame.defines(result)) {
        const auto nearest_bases{
            find_nearest_bases(base_uris, pointer, base.first)};
        assert(!nearest_bases.empty());
        frame.store(result, root_id, nearest_bases.front(), pointer,
                    dialects.front());
      }
    }
  }

  // Resolve references after all framing was performed
  for (const auto &pointer : sourcemeta::jsontoolkit::SchemaIterator{
           schema, walker, resolver, default_dialect}) {
    const auto &subschema{sourcemeta::jsontoolkit::get(schema, pointer)};
    const auto effective_dialects{
        find_nearest_bases(base_dialects, pointer, root_dialect)};
    assert(effective_dialects.size() == 1);
    const std::optional<std::string> id{
        sourcemeta::jsontoolkit::id(subschema, resolver,
                                    effective_dialects.front(),
                                    pointer.empty() ? default_id : std::nullopt)
            .get()};

    // TODO: Handle $recursiveRef too
    if (subschema.is_object()) {
      const auto nearest_bases{find_nearest_bases(base_uris, pointer, id)};

      if (subschema.defines("$ref")) {
        assert(subschema.at("$ref").is_string());
        const sourcemeta::jsontoolkit::URI ref{
            subschema.at("$ref").to_string()};
        references.insert({{pointer.concat({"$ref"}), ReferenceType::Static},
                           nearest_bases.empty()
                               ? ref.recompose()
                               : ref.resolve_from(nearest_bases.front())});
      }

      if (subschema.defines("$dynamicRef")) {
        assert(subschema.at("$dynamicRef").is_string());
        const sourcemeta::jsontoolkit::URI ref{
            subschema.at("$dynamicRef").to_string()};
        // TODO: Check bookending requirement
        references.insert(
            {{pointer.concat({"$dynamicRef"}), ReferenceType::Dynamic},
             nearest_bases.empty() ? ref.recompose()
                                   : ref.resolve_from(nearest_bases.front())});
      }
    }
  }

  return std::promise<void>{}.get_future();
}
