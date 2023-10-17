#ifndef JSONTOOLKIT_JSONPOINTER_POINTER_H_
#define JSONTOOLKIT_JSONPOINTER_POINTER_H_

#include <sourcemeta/jsontoolkit/jsonpointer_token.h>

#include <cassert>          // assert
#include <initializer_list> // std::initializer_list
#include <utility>          // std::move
#include <vector>           // std::vector

namespace sourcemeta::jsontoolkit {

/// @ingroup jsonpointer
template <typename CharT, typename Traits,
          template <typename T> typename Allocator>
class GenericPointer {
public:
  using Token = GenericToken<CharT, Traits, Allocator>;
  using Value = typename Token::Value;
  using Container = std::vector<Token>;

  /// This constructor creates an empty JSON Pointer. For example:
  ///
  /// ```cpp
  /// #include <sourcemeta/jsontoolkit/jsonpointer.h>
  /// #include <cassert>
  ///
  /// const sourcemeta::jsontoolkit::Pointer pointer;
  /// assert(pointer.empty());
  /// ```
  GenericPointer() : data{} {}

  /// This constructor is the preferred way of creating a pointer.
  /// For example:
  ///
  /// ```cpp
  /// #include <sourcemeta/jsontoolkit/jsonpointer.h>
  /// #include <cassert>
  ///
  /// // Equivalent to /foo/bar/1
  /// const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar", 1};
  /// assert(pointer.size() == 3);
  /// ```
  GenericPointer(std::initializer_list<Token> tokens)
      : data{std::move(tokens)} {}

  // Member types
  using value_type = typename Container::value_type;
  using allocator_type = typename Container::allocator_type;
  using size_type = typename Container::size_type;
  using difference_type = typename Container::difference_type;
  using reference = typename Container::reference;
  using const_reference = typename Container::const_reference;
  using pointer = typename Container::pointer;
  using const_pointer = typename Container::const_pointer;
  using iterator = typename Container::iterator;
  using const_iterator = typename Container::const_iterator;
  using reverse_iterator = typename Container::reverse_iterator;
  using const_reverse_iterator = typename Container::const_reverse_iterator;

  /// Get a mutable begin iterator on the pointer
  auto begin() noexcept -> iterator { return this->data.begin(); }
  /// Get a mutable end iterator on the pointer
  auto end() noexcept -> iterator { return this->data.end(); }
  /// Get a constant begin iterator on the pointer
  auto begin() const noexcept -> const_iterator { return this->data.begin(); }
  /// Get a constant end iterator on the pointer
  auto end() const noexcept -> const_iterator { return this->data.end(); }
  /// Get a constant begin iterator on the pointer
  auto cbegin() const noexcept -> const_iterator { return this->data.cbegin(); }
  /// Get a constant end iterator on the pointer
  auto cend() const noexcept -> const_iterator { return this->data.cend(); }
  /// Get a mutable reverse begin iterator on the pointer
  auto rbegin() noexcept -> reverse_iterator { return this->data.rbegin(); }
  /// Get a mutable reverse end iterator on the pointer
  auto rend() noexcept -> reverse_iterator { return this->data.rend(); }
  /// Get a constant reverse begin iterator on the pointer
  auto rbegin() const noexcept -> const_reverse_iterator {
    return this->data.rbegin();
  }
  /// Get a constant reverse end iterator on the pointer
  auto rend() const noexcept -> const_reverse_iterator {
    return this->data.rend();
  }
  /// Get a constant reverse begin iterator on the pointer
  auto crbegin() const noexcept -> const_reverse_iterator {
    return this->data.crbegin();
  }
  /// Get a constant reverse end iterator on the pointer
  auto crend() const noexcept -> const_reverse_iterator {
    return this->data.crend();
  }

  /// Access a token in a JSON Pointer at a given index.
  /// For example:
  ///
  /// ```cpp
  /// #include <sourcemeta/jsontoolkit/jsonpointer.h>
  /// #include <cassert>
  ///
  /// const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar", 1};
  /// assert(pointer.at(1).is_property());
  /// assert(pointer.at(1).to_property() == "bar");
  /// ```
  [[nodiscard]] auto at(const size_type index) const -> const_reference {
    assert(this->size() > index);
    return this->data[index];
  }

  /// Access the last token in a JSON Pointer
  /// For example:
  ///
  /// ```cpp
  /// #include <sourcemeta/jsontoolkit/jsonpointer.h>
  /// #include <cassert>
  ///
  /// const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar", 1};
  /// assert(pointer.back().is_property());
  /// assert(pointer.back().to_property() == "bar");
  /// ```
  [[nodiscard]] auto back() const -> const_reference {
    assert(!this->empty());
    return this->data.back();
  }

  /// Get the number of tokens in a JSON Pointer.
  /// For example:
  ///
  /// ```cpp
  /// #include <sourcemeta/jsontoolkit/jsonpointer.h>
  /// #include <cassert>
  ///
  /// const sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  /// assert(pointer.size() == 3);
  /// ```
  [[nodiscard]] auto size() const noexcept -> size_type {
    return this->data.size();
  }

  /// Check if a JSON Pointer is the empty pointer.
  /// For example:
  ///
  /// ```cpp
  /// #include <sourcemeta/jsontoolkit/jsonpointer.h>
  /// #include <cassert>
  ///
  /// const sourcemeta::jsontoolkit::Pointer empty_pointer;
  /// const sourcemeta::jsontoolkit::Pointer non_empty_pointer{"foo", "bar"};
  /// assert(empty_pointer.empty());
  /// assert(!non_empty_pointer.empty());
  /// ```
  [[nodiscard]] auto empty() const noexcept -> bool {
    return this->data.empty();
  }

  /// Emplace a token into the back of a JSON Pointer.
  /// For example:
  ///
  /// ```cpp
  /// #include <sourcemeta/jsontoolkit/jsonpointer.h>
  /// #include <cassert>
  ///
  /// sourcemeta::jsontoolkit::Pointer pointer;
  /// assert(pointer.empty());
  /// auto &token{pointer.emplace_back("foo")};
  /// assert(!pointer.empty());
  /// assert(token.is_property());
  /// ```
  template <class... Args> auto emplace_back(Args &&...args) -> reference {
    return this->data.emplace_back(args...);
  }

  /// Remove the last token of a JSON Pointer, if any.
  /// For example:
  ///
  /// ```cpp
  /// #include <sourcemeta/jsontoolkit/jsonpointer.h>
  /// #include <cassert>
  ///
  /// sourcemeta::jsontoolkit::Pointer pointer{"foo", "bar"};
  /// pointer.pop_back();
  /// assert(pointer.size() == 1);
  /// assert(pointer.at(0).is_property());
  /// assert(pointer.at(0).to_property() == "foo");
  /// ```
  auto pop_back() -> void {
    if (!this->empty()) {
      this->data.pop_back();
    }
  }

  /// Compare JSON Pointer instances
  auto operator==(const GenericPointer<CharT, Traits, Allocator> &other)
      const noexcept -> bool {
    return this->data == other.data;
  }

  /// Overload to support ordering of JSON Pointers. Typically for sorting
  /// reasons.
  auto operator<(const GenericPointer<CharT, Traits, Allocator> &other)
      const noexcept -> bool {
    return this->data < other.data;
  }

private:
  Container data;
};

} // namespace sourcemeta::jsontoolkit

#endif
