#ifndef JSONTOOLKIT_JSONSCHEMA_ERROR_H
#define JSONTOOLKIT_JSONSCHEMA_ERROR_H

#include <exception> // std::exception
#include <string>    // std::string

namespace sourcemeta::jsontoolkit {

class SchemaError : public std::exception {
public:
  SchemaError(const std::string &message) : message_{message} {}
  auto what() const noexcept -> const char * override {
    return this->message_.c_str();
  }

private:
  const std::string message_;
};

class ResolutionError : public std::exception {
public:
  ResolutionError(const std::string &identifier, const std::string &message)
      : identifier_{identifier}, message_{message} {}
  auto what() const noexcept -> const char * override {
    return this->message_.c_str();
  }

  auto id() const noexcept -> const std::string & { return this->identifier_; }

private:
  const std::string identifier_;
  const std::string message_;
};

} // namespace sourcemeta::jsontoolkit

#endif
