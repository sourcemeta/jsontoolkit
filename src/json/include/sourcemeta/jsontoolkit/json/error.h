#ifndef JSONTOOLKIT_JSON_ERROR_H
#define JSONTOOLKIT_JSON_ERROR_H

#include <exception> // std::exception

namespace sourcemeta::jsontoolkit {

class ParseError : public std::exception {
public:
  ParseError() {}
  auto what() const noexcept -> const char * override {
    return "The input is not a valid JSON document";
  }
};

} // namespace sourcemeta::jsontoolkit

#endif
