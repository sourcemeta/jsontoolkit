#include <sourcemeta/jsontoolkit/jsonschema.h>
#include <sourcemeta/jsontoolkit/uri.h>

#include <cassert>  // assert
#include <optional> // std::optional
#include <sstream>  // std::ostringstream

auto sourcemeta::jsontoolkit::ReferenceFrame::defines(
    const ReferenceType type, const std::string &uri) const -> bool {
  // TODO: Canonicalize BEFORE checking on the reference frame
  const auto canonical{sourcemeta::jsontoolkit::URI{uri}.canonicalize()};
  return this->data.contains({type, canonical});
}

auto sourcemeta::jsontoolkit::ReferenceFrame::size() const -> std::size_t {
  return this->data.size();
}

auto sourcemeta::jsontoolkit::ReferenceFrame::empty() const -> bool {
  return this->data.empty();
}

auto sourcemeta::jsontoolkit::ReferenceFrame::root(const ReferenceType type,
                                                   const std::string &uri) const
    -> std::optional<std::string> {
  assert(this->defines(type, uri));
  return std::get<0>(this->data.at({type, uri}));
}

auto sourcemeta::jsontoolkit::ReferenceFrame::base(const ReferenceType type,
                                                   const std::string &uri) const
    -> const std::string & {
  assert(this->defines(type, uri));
  return std::get<1>(this->data.at({type, uri}));
}

auto sourcemeta::jsontoolkit::ReferenceFrame::pointer(
    const ReferenceType type, const std::string &uri) const
    -> const sourcemeta::jsontoolkit::Pointer & {
  assert(this->defines(type, uri));
  return std::get<2>(this->data.at({type, uri}));
}

auto sourcemeta::jsontoolkit::ReferenceFrame::dialect(
    const ReferenceType type, const std::string &uri) const
    -> const std::string & {
  assert(this->defines(type, uri));
  return std::get<3>(this->data.at({type, uri}));
}

auto sourcemeta::jsontoolkit::ReferenceFrame::store(
    const ReferenceType type, const std::string &uri,
    const std::optional<std::string> &root_id, const std::string &base_id,
    const sourcemeta::jsontoolkit::Pointer &pointer_from_root,
    const std::string &dialect) -> void {
  // TODO: Canonicalize BEFORE inserting to the reference frame
  const auto canonical{sourcemeta::jsontoolkit::URI{uri}.canonicalize()};
  if (!this->data
           .insert({{type, canonical},
                    {root_id, base_id, pointer_from_root, dialect}})
           .second) {
    std::ostringstream error;
    error << "Schema identifier already exists: " << uri;
    throw SchemaError(error.str());
  }

  this->keys.push_back({type, canonical});
}
