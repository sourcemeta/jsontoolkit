#ifndef SOURCEMETA_JSONTOOLKIT_URI_H_
#define SOURCEMETA_JSONTOOLKIT_URI_H_

#if defined(__EMSCRIPTEN__) || defined(__Unikraft__)
#define SOURCEMETA_JSONTOOLKIT_URI_EXPORT
#else
#include "uri_export.h"
#endif

#include <sourcemeta/jsontoolkit/uri_error.h>

#include <memory>      // std::unique_ptr
#include <optional>    // std::optional
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
  /// This constructor creates a URI from a string type. For example:
  ///
  /// ```cpp
  /// #include <sourcemeta/jsontoolkit/uri.h>
  ///
  /// const sourcemeta::jsontoolkit::URI uri{"https://www.sourcemeta.com"};
  /// ```
  URI(std::string input);
  ~URI();

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
  auto host() const -> std::optional<std::string_view>;

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
  auto recompose() const -> std::string;

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
  const std::string data;
  // Use PIMPL idiom to hide `urlparser`
  struct Internal;
  const std::unique_ptr<Internal> internal;
#if defined(_MSC_VER)
#pragma warning(default : 4251)
#endif
};

} // namespace sourcemeta::jsontoolkit

#endif
