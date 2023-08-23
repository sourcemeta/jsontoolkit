#include <sourcemeta/jsontoolkit/jsonpointer.h>

#include <cassert>     // assert
#include <functional>  // std::reference_wrapper
#include <type_traits> // std::is_same_v

namespace {
template <typename CharT, typename Traits,
          template <typename T> typename Allocator, typename V>
auto internal_get(V &document, const sourcemeta::jsontoolkit::GenericPointer<
                                   CharT, Traits, Allocator> &pointer) -> V & {
  using Pointer =
      sourcemeta::jsontoolkit::GenericPointer<CharT, Traits, Allocator>;
  // Make sure types match
  static_assert(
      std::is_same_v<typename Pointer::Value, std::remove_const_t<V>>);

  std::reference_wrapper<V> current{document};
  for (const typename Pointer::Token &token : pointer) {
    if (token.is_property()) {
      assert(current.get().is_object());
      assert(current.get().defines(token.to_property()));
      current = current.get().at(token.to_property());
    } else if (token.is_index()) {
      assert(current.get().is_array());
      assert(current.get().size() > token.to_index());
      current = current.get().at(token.to_index());
    }
  }

  return current.get();
}
} // namespace

namespace sourcemeta::jsontoolkit {

auto get(const JSON &document, const Pointer &pointer) -> const JSON & {
  return internal_get(document, pointer);
}

auto get(JSON &document, const Pointer &pointer) -> JSON & {
  return internal_get(document, pointer);
}

} // namespace sourcemeta::jsontoolkit
