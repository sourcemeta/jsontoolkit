#ifndef SOURCEMETA_JSONTOOLKIT_JSON_ERROR_H_
#define SOURCEMETA_JSONTOOLKIT_JSON_ERROR_H_

#include "json_export.h"

#include <cstdint>   // std::uint64_t
#include <exception> // std::exception

namespace sourcemeta::jsontoolkit {

/// @ingroup json
/// This class represents a parsing error.
class SOURCEMETA_JSONTOOLKIT_JSON_EXPORT ParseError : public std::exception {
public:
  /// Create a parsing error
  ParseError(const std::uint64_t line, const std::uint64_t column)
      : line_{line}, column_{column} {}

  [[nodiscard]] auto what() const noexcept -> const char * override {
    return "The input is not a valid JSON document";
  }

  /// Get the line number of the error
  [[nodiscard]] auto line() const noexcept -> std::uint64_t { return line_; }

  // Get the column number of the error
  [[nodiscard]] auto column() const noexcept -> std::uint64_t {
    return column_;
  }

private:
  std::uint64_t line_;
  std::uint64_t column_;
};

} // namespace sourcemeta::jsontoolkit

#endif
