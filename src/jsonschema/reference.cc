#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>
#include <sourcemeta/jsontoolkit/uri.h>

#include <cassert>  // assert
#include <map>      // std::map
#include <optional> // std::optional
#include <sstream>  // std::ostringstream

static auto
find_base(const std::map<sourcemeta::jsontoolkit::Pointer, std::string> &bases,
          const sourcemeta::jsontoolkit::Pointer &pointer,
          const std::optional<std::string> &default_base)
    -> const std::string & {
  for (const auto &subpointer :
       sourcemeta::jsontoolkit::SubPointerWalker{pointer}) {
    if (bases.contains(subpointer)) {
      return bases.at(subpointer);
    }
  }

  assert(default_base.has_value());
  return default_base.value();
}

auto sourcemeta::jsontoolkit::frame(
    const sourcemeta::jsontoolkit::JSON &schema,
    sourcemeta::jsontoolkit::ReferenceFrame &static_frame,
    sourcemeta::jsontoolkit::ReferenceFrame &dynamic_frame,
    const sourcemeta::jsontoolkit::SchemaWalker &walker,
    const sourcemeta::jsontoolkit::SchemaResolver &resolver,
    const std::optional<std::string> &default_dialect) -> std::future<void> {
  std::map<sourcemeta::jsontoolkit::Pointer, std::string> base_uris;
  std::map<sourcemeta::jsontoolkit::Pointer, std::string> base_dialects;

  const std::optional<std::string> root_dialect{
      sourcemeta::jsontoolkit::dialect(schema, default_dialect)};
  assert(root_dialect.has_value());

  for (const auto &pointer : sourcemeta::jsontoolkit::SchemaIterator{
           schema, walker, resolver, default_dialect}) {
    const auto &subschema{sourcemeta::jsontoolkit::get(schema, pointer)};
    const std::optional<std::string> current_dialect{
        sourcemeta::jsontoolkit::dialect(subschema)};
    if (current_dialect.has_value()) {
      base_dialects.insert({pointer, current_dialect.value()});
    }

    const std::string effective_dialect{
        find_base(base_dialects, pointer, root_dialect)};

    // Handle schema identifiers
    const std::optional<std::string> id{
        sourcemeta::jsontoolkit::id(subschema, resolver, effective_dialect)
            .get()};
    if (id.has_value()) {
      const sourcemeta::jsontoolkit::URI base{
          find_base(base_uris, pointer, id)};
      const sourcemeta::jsontoolkit::URI relative{id.value()};
      const std::string new_id{relative.resolve_from(base)};
      if (!static_frame.insert({new_id, pointer}).second) {
        std::ostringstream error;
        error << "Schema identifier already exists: " << new_id;
        throw sourcemeta::jsontoolkit::SchemaError(error.str());
      }

      base_uris.insert({pointer, new_id});
    }

    // Handle schema anchors
    for (const auto &[name, type] : sourcemeta::jsontoolkit::anchors(
                                        subschema, resolver, effective_dialect)
                                        .get()) {
      const auto anchor_uri{sourcemeta::jsontoolkit::URI::from_fragment(name)};
      const sourcemeta::jsontoolkit::URI anchor_base{
          find_base(base_uris, pointer, id)};
      const auto result{anchor_uri.resolve_from(anchor_base)};
      if (type == sourcemeta::jsontoolkit::AnchorType::Static) {
        if (!static_frame.insert({result, pointer}).second) {
          std::ostringstream error;
          error << "Schema anchor already exists: " << name;
          throw sourcemeta::jsontoolkit::SchemaError(error.str());
        }
      } else {
        if (!dynamic_frame.insert({result, pointer}).second) {
          std::ostringstream error;
          error << "Schema anchor already exists: " << name;
          throw sourcemeta::jsontoolkit::SchemaError(error.str());
        }
      }
    }
  }

  return std::promise<void>{}.get_future();
}
