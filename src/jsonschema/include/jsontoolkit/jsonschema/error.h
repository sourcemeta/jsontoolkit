#ifndef JSONTOOLKIT_JSONSCHEMA_ERROR_H
#define JSONTOOLKIT_JSONSCHEMA_ERROR_H

#include <exception> // std::exception
#include <string>    // std::string

namespace sourcemeta::jsontoolkit {

class SchemaError : public std::exception {
public:
  SchemaError(const std::string &message) : message_{message} {}
  const char *what() const noexcept override { return this->message_.c_str(); }

private:
  const std::string message_;
};

} // namespace sourcemeta::jsontoolkit

#endif
