#ifndef SOURCEMETA_JSONTOOLKIT_URI_H_
#define SOURCEMETA_JSONTOOLKIT_URI_H_

#if defined(__EMSCRIPTEN__) || defined(__Unikraft__)
#define SOURCEMETA_JSONTOOLKIT_URI_EXPORT
#else
#include "uri_export.h"
#endif

#include <sourcemeta/jsontoolkit/uri_error.h>

#include <cstdint>     // std::uint32_t
#include <istream>     // std::istream
#include <memory>      // std::unique_ptr
#include <optional>    // std::optional
#include <ostream>     // std::ostream
#include <string>      // std::string
#include <string_view> // std::string_view

/// @defgroup uri URI
/// @brief A RFC 3986 URI implementation based on `uriparser`.
///
/// This functionality is included as follows:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/uri.h>
/// ```

namespace sourcemeta::jsontoolkit {

/// @ingroup uri
class SOURCEMETA_JSONTOOLKIT_URI_EXPORT URI {
public:
  // TODO: Add a constructor that takes a C++ input stream

  /// This constructor creates a URI from a string type. For example:
  ///
  /// ```cpp
  /// #include <sourcemeta/jsontoolkit/uri.h>
  ///
  /// const sourcemeta::jsontoolkit::URI uri{"https://www.sourcemeta.com"};
  /// ```
  URI(std::string input);

  /// Destructor
  ~URI();

  /// Copy constructor
  URI(const URI &other);

  /// Move constructor
  URI(URI &&other);

  /// Check if the URI is absolute. For example:
  ///
  /// ```cpp
  /// #include <sourcemeta/jsontoolkit/uri.h>
  /// #include <cassert>
  ///
  /// const sourcemeta::jsontoolkit::URI uri{"https://www.sourcemeta.com"};
  /// assert(uri.is_absolute());
  /// ```
  [[nodiscard]] auto is_absolute() const noexcept -> bool;

  /// Check if the URI is a URN. For example:
  ///
  /// ```cpp
  /// #include <sourcemeta/jsontoolkit/uri.h>
  /// #include <cassert>
  ///
  /// const sourcemeta::jsontoolkit::URI uri{"urn:example:schema"};
  /// assert(uri.is_urn());
  /// ```
  auto is_urn() const -> bool;

  /// Get the scheme part of the URI, if any. For example:
  ///
  /// ```cpp
  /// #include <sourcemeta/jsontoolkit/uri.h>
  /// #include <cassert>
  ///
  /// const sourcemeta::jsontoolkit::URI uri{"https://www.sourcemeta.com"};
  /// assert(uri.scheme().has_value());
  /// assert(uri.scheme().value() == "https");
  /// ```
  [[nodiscard]] auto scheme() const -> std::optional<std::string_view>;

  /// Get the host part of the URI, if any. For example:
  ///
  /// ```cpp
  /// #include <sourcemeta/jsontoolkit/uri.h>
  /// #include <cassert>
  ///
  /// const sourcemeta::jsontoolkit::URI uri{"https://www.sourcemeta.com"};
  /// assert(uri.host().has_value());
  /// assert(uri.host().value() == "sourcemeta.com");
  /// ```
  [[nodiscard]] auto host() const -> std::optional<std::string_view>;

  /// Get the port part of the URI, if any. For example:
  ///
  /// ```cpp
  /// #include <sourcemeta/jsontoolkit/uri.h>
  /// #include <cassert>
  ///
  /// const sourcemeta::jsontoolkit::URI uri{"http://localhost:8000"};
  /// assert(uri.port().has_value());
  /// assert(uri.port().value() == 8000);
  /// ```
  [[nodiscard]] auto port() const -> std::optional<std::uint32_t>;

  /// Get the path part of the URI, if any. For example:
  ///
  /// ```cpp
  /// #include <sourcemeta/jsontoolkit/uri.h>
  /// #include <cassert>
  ///
  /// const sourcemeta::jsontoolkit::URI
  /// uri{"https://www.sourcemeta.com/foo/bar"}; assert(uri.path().has_value());
  /// assert(uri.path().value() == "/foo/bar");
  /// ```
  [[nodiscard]] auto path() const -> std::optional<std::string>;

  /// Get the fragment part of the URI, if any. For example:
  ///
  /// ```cpp
  /// #include <sourcemeta/jsontoolkit/uri.h>
  /// #include <cassert>
  ///
  /// const sourcemeta::jsontoolkit::URI uri{"https://www.sourcemeta.com/#foo"};
  /// assert(uri.fragment().has_value());
  /// assert(uri.fragment().value() == "foo");
  /// ```
  [[nodiscard]] auto fragment() const -> std::optional<std::string_view>;

  /// Normalize and recompose a URI as established by RFC 3986. For example:
  ///
  /// ```cpp
  /// #include <sourcemeta/jsontoolkit/uri.h>
  /// #include <cassert>
  ///
  /// const sourcemeta::jsontoolkit::URI
  ///   uri{"https://www.sourcemeta.com/foo/../bar"};
  /// assert(uri.recompose() == "https://sourcemeta.com/bar");
  /// ```
  [[nodiscard]] auto recompose() const -> std::string;

  /// Resolve a relative URI against a base URI as established by RFC 3986. For
  /// example:
  ///
  /// ```cpp
  /// #include <sourcemeta/jsontoolkit/uri.h>
  /// #include <cassert>
  ///
  /// const sourcemeta::jsontoolkit::URI base{"https://www.sourcemeta.com"};
  /// const sourcemeta::jsontoolkit::URI relative{"foo"};
  /// assert(relative.resolve_from(base) == "https://sourcemeta.com/foo");
  /// ```
  ///
  /// Note that we return a string, and not a sourcemeta::jsontoolkit::URI for
  /// performance reasons. The user can always parse the string back into a URI
  /// object if they wish.
  auto resolve_from(const URI &base) const -> std::string;

  /// Esscape a string as established by RFC 3986 using C++ standard stream. For
  /// example:
  ///
  /// ```cpp
  /// #include <sourcemeta/jsontoolkit/uri.h>
  /// #include <sstream>
  /// #include <cassert>
  ///
  /// std::istringstream input{"foo bar"};
  /// std::ostringstream output;
  /// sourcemeta::jsontoolkit::URI::escape(input, output)};
  /// assert(output.str() == "foo%20bar");
  /// ```
  static auto escape(std::istream &input, std::ostream &output) -> void;

  /// Unescape a string that has been percentage-escaped as established by
  /// RFC 3986 using C++ standard streams. For example:
  ///
  /// ```cpp
  /// #include <sourcemeta/jsontoolkit/uri.h>
  /// #include <sstream>
  /// #include <cassert>
  ///
  /// std::istringstream input{"foo%20bar"};
  /// std::ostringstream output;
  /// sourcemeta::jsontoolkit::URI::unescape(input, output)};
  /// assert(output.str() == "foo bar");
  /// ```
  static auto unescape(std::istream &input, std::ostream &output) -> void;

  /// Create a URI from a fragment. For example:
  ///
  /// ```cpp
  /// #include <sourcemeta/jsontoolkit/uri.h>
  /// #include <cassert>
  ///
  /// const sourcemeta::jsontoolkit::URI uri{
  ///   sourcemeta::jsontoolkit::URI::from_fragment("foo")};
  /// assert(uri.recompose() == "#foo");
  static auto from_fragment(std::string_view fragment) -> URI;

private:
// Exporting symbols that depends on the standard C++ library is considered
// safe.
// https://learn.microsoft.com/en-us/cpp/error-messages/compiler-warnings/compiler-warning-level-2-c4275?view=msvc-170&redirectedfrom=MSDN
#if defined(_MSC_VER)
#pragma warning(disable : 4251)
#endif
  // We need to keep the string as the URI structure just
  // points to fragments of it.
  // We keep this as const as this class is immutable
  std::string data;
  // Use PIMPL idiom to hide `urlparser`
  struct Internal;
  std::unique_ptr<Internal> internal;
#if defined(_MSC_VER)
#pragma warning(default : 4251)
#endif
};

} // namespace sourcemeta::jsontoolkit

#endif
