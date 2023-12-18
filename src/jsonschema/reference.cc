#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>
#include <sourcemeta/jsontoolkit/uri.h>

#include <cassert>  // assert
#include <map>      // std::map
#include <optional> // std::optional
#include <sstream>  // std::ostringstream
#include <vector>   // std::vector

static auto find_bases(const std::map<sourcemeta::jsontoolkit::Pointer,
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

  assert(default_base.has_value());
  return {default_base.value()};
}

auto sourcemeta::jsontoolkit::ReferenceFrame::defines(
    const std::string &uri) const -> bool {
  return this->data.contains(uri);
}

auto sourcemeta::jsontoolkit::ReferenceFrame::size() const -> std::size_t {
  return this->data.size();
}

auto sourcemeta::jsontoolkit::ReferenceFrame::empty() const -> bool {
  return this->data.empty();
}

auto sourcemeta::jsontoolkit::ReferenceFrame::base(const std::string &uri) const
    -> const std::string & {
  assert(this->defines(uri));
  return std::get<0>(this->data.at(uri));
}

auto sourcemeta::jsontoolkit::ReferenceFrame::pointer(
    const std::string &uri) const -> const sourcemeta::jsontoolkit::Pointer & {
  assert(this->defines(uri));
  return std::get<1>(this->data.at(uri));
}

auto sourcemeta::jsontoolkit::ReferenceFrame::dialect(
    const std::string &uri) const -> const std::string & {
  assert(this->defines(uri));
  return std::get<2>(this->data.at(uri));
}

auto sourcemeta::jsontoolkit::ReferenceFrame::store(
    const std::string &uri, const std::string &base_identifier,
    const sourcemeta::jsontoolkit::Pointer &pointer_from_base,
    const std::string &dialect) -> void {
  const auto canonical{sourcemeta::jsontoolkit::URI{uri}.canonicalize()};
  if (!this->data
           .insert({canonical, {base_identifier, pointer_from_base, dialect}})
           .second) {
    std::ostringstream error;
    error << "Schema identifier already exists: " << uri;
    throw SchemaError(error.str());
  }
}

auto sourcemeta::jsontoolkit::frame(
    const sourcemeta::jsontoolkit::JSON &schema,
    sourcemeta::jsontoolkit::ReferenceFrame &static_frame,
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
    static_frame.store(default_id.value(), root_id.value(),
                       sourcemeta::jsontoolkit::empty_pointer,
                       root_dialect.value());
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
        find_bases(base_dialects, pointer, root_dialect)};

    // Handle schema identifiers
    const std::optional<std::string> id{
        sourcemeta::jsontoolkit::id(subschema, resolver,
                                    effective_dialects.front(),
                                    pointer.empty() ? default_id : std::nullopt)
            .get()};
    if (id.has_value()) {
      for (const auto &base_string : find_bases(base_uris, pointer, id)) {
        const sourcemeta::jsontoolkit::URI base{base_string};
        const sourcemeta::jsontoolkit::URI maybe_relative{id.value()};
        const std::string new_id{maybe_relative.resolve_from(base)};
        assert(root_id.has_value());
        if (!maybe_relative.is_absolute() || !static_frame.defines(new_id)) {
          static_frame.store(new_id, root_id.value(), pointer,
                             effective_dialects.front());
        }

        if (base_uris.contains(pointer)) {
          base_uris.at(pointer).push_back(new_id);
        } else {
          base_uris.insert({pointer, {new_id}});
        }
      }
    }

    // Handle schema anchors
    for (const auto &[name, type] :
         sourcemeta::jsontoolkit::anchors(subschema, resolver,
                                          effective_dialects.front())
             .get()) {
      bool is_first = true;
      const auto anchor_uri{sourcemeta::jsontoolkit::URI::from_fragment(name)};
      for (const auto &base_string : find_bases(base_uris, pointer, id)) {
        const sourcemeta::jsontoolkit::URI anchor_base{base_string};
        const auto result{anchor_uri.resolve_from(anchor_base)};
        assert(root_id.has_value());
        if (type == sourcemeta::jsontoolkit::AnchorType::Static) {
          if (!is_first && static_frame.defines(result)) {
            continue;
          }

          static_frame.store(result, root_id.value(), pointer,
                             effective_dialects.front());
        }

        is_first = false;
      }
    }
  }

  return std::promise<void>{}.get_future();
}
