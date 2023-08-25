#include <sourcemeta/jsontoolkit/jsonpointer.h>

#include <functional>  // std::reference_wrapper
#include <type_traits> // std::is_same_v
#include <utility>     // std::move

namespace {
template <typename CharT, typename Traits,
          template <typename T> typename Allocator, typename V>
auto traverse(V &document,
              const sourcemeta::jsontoolkit::GenericPointer<CharT, Traits,
                                                            Allocator> &pointer)
    -> V & {
  using Pointer =
      sourcemeta::jsontoolkit::GenericPointer<CharT, Traits, Allocator>;
  // Make sure types match
  static_assert(
      std::is_same_v<typename Pointer::Value, std::remove_const_t<V>>);

  std::reference_wrapper<V> current{document};

  // Evaluation of a JSON Pointer begins with a reference to the root
  // value of a JSON document and completes with a reference to some value
  // within the document.  Each reference token in the JSON Pointer is
  // evaluated sequentially.
  // See https://www.rfc-editor.org/rfc/rfc6901#section-4
  for (const typename Pointer::Token &token : pointer) {
    if (token.is_property()) {
      // If the currently referenced value is a JSON object, the new
      // referenced value is the object member with the name identified by
      // the reference token.  The member name is equal to the token if it
      // has the same number of Unicode characters as the token and their
      // code points are byte-by-byte equal.  No Unicode character
      // normalization is performed.
      // See https://www.rfc-editor.org/rfc/rfc6901#section-4
      current = current.get().at(token.to_property());
    } else {
      // If the currently referenced value is a JSON array, the reference
      // token MUST contain [...] characters comprised of digits (see ABNF
      // below; note that leading zeros are not allowed) that represent an
      // unsigned base-10 integer value, making the new referenced value the
      // array element with the zero-based index identified by the
      // token.
      // See https://www.rfc-editor.org/rfc/rfc6901#section-4
      current = current.get().at(token.to_index());
    }
  }

  return current.get();
}
} // namespace

namespace sourcemeta::jsontoolkit {

auto get(const JSON &document, const Pointer &pointer) -> const JSON & {
  return traverse(document, pointer);
}

auto get(JSON &document, const Pointer &pointer) -> JSON & {
  return traverse(document, pointer);
}

auto set(JSON &document, const Pointer &pointer, const JSON &value) -> void {
  return traverse(document, pointer).into(value);
}

auto set(JSON &document, const Pointer &pointer, JSON &&value) -> void {
  return traverse(document, pointer).into(std::move(value));
}

} // namespace sourcemeta::jsontoolkit
