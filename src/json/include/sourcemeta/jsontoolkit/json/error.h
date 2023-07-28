#ifndef SOURCEMETA_JSONTOOLKIT_JSON_ERROR_H
#define SOURCEMETA_JSONTOOLKIT_JSON_ERROR_H

#include <exception> // std::exception

namespace sourcemeta::jsontoolkit {

class ParseError : public std::exception {
public:
  [[nodiscard]] auto what() const noexcept -> const char * override {
    return "The input is not a valid JSON document";
  }
};

} // namespace sourcemeta::jsontoolkit

#endif
