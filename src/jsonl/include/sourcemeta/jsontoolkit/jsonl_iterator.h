#ifndef SOURCEMETA_JSONTOOLKIT_JSONL_ITERATOR_H_
#define SOURCEMETA_JSONTOOLKIT_JSONL_ITERATOR_H_

#if defined(__EMSCRIPTEN__) || defined(__Unikraft__)
#define SOURCEMETA_JSONTOOLKIT_JSONL_EXPORT
#else
#include "jsonl_export.h"
#endif

#include <sourcemeta/jsontoolkit/json.h>

#include <cstddef>  // std::ptrdiff_t
#include <cstdint>  // std::uint64_t
#include <istream>  // std::basic_istream
#include <iterator> // std::forward_iterator_tag
#include <memory>   // std::unique_ptr

namespace sourcemeta::jsontoolkit {

/// @ingroup jsonl
/// A forward iterator to parse JSON documents out of a JSON Lines stream.
class SOURCEMETA_JSONTOOLKIT_JSONL_EXPORT ConstJSONLIterator {
public:
  ConstJSONLIterator(std::basic_istream<JSON::Char, JSON::CharTraits> *stream);
  ~ConstJSONLIterator();
  using iterator_category = std::forward_iterator_tag;
  using difference_type = std::ptrdiff_t;
  using value_type = JSON;
  using pointer = const value_type *;
  using reference = const value_type &;

  auto operator*() const -> reference;
  auto operator->() const -> pointer;
  auto operator++() -> ConstJSONLIterator &;

  SOURCEMETA_JSONTOOLKIT_JSONL_EXPORT friend auto
  operator==(const ConstJSONLIterator &left, const ConstJSONLIterator &right)
      -> bool;

private:
  std::uint64_t line{1};
  std::uint64_t column{0};
  auto parse_next() -> JSON;
  // TODO: Move this member into Internal
  std::basic_istream<JSON::Char, JSON::CharTraits> *data;

  // Use PIMPL idiom to hide internal details, mainly
  // templated members, which are tricky to DLL-export.
  struct Internal;
  std::unique_ptr<Internal> internal;
};

} // namespace sourcemeta::jsontoolkit

#endif
