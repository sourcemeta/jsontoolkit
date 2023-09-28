#ifndef SOURCEMETA_JSONTOOLKIT_JSONPOINTER_ERROR_H_
#define SOURCEMETA_JSONTOOLKIT_JSONPOINTER_ERROR_H_

#if defined(__EMSCRIPTEN__) || defined(__Unikraft__)
#define SOURCEMETA_JSONTOOLKIT_JSONPOINTER_EXPORT
#else
#include "jsonpointer_export.h"
#endif

#include <sourcemeta/jsontoolkit/json_error.h>

#include <cstdint> // std::uint64_t

namespace sourcemeta::jsontoolkit {

/// @ingroup jsonpointer
/// This class represents a parsing error.
class SOURCEMETA_JSONTOOLKIT_JSONPOINTER_EXPORT PointerParseError
    : public ParseError {
public:
  /// Create a parsing error
  PointerParseError(const std::uint64_t column) : ParseError{1, column} {}

  [[nodiscard]] auto what() const noexcept -> const char * override {
    return "The input is not a valid JSON Pointer";
  }

  /// Get the column number of the error
  [[nodiscard]] auto column() const noexcept -> std::uint64_t {
    return ParseError::column();
  }
};

} // namespace sourcemeta::jsontoolkit

#endif
