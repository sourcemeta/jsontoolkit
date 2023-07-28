#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_ERROR_H
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_ERROR_H

#include <exception> // std::exception
#include <string>    // std::string
#include <utility>   // std::move

namespace sourcemeta::jsontoolkit {

class SchemaError : public std::exception {
public:
  SchemaError(std::string message) : message_{std::move(message)} {}
  [[nodiscard]] auto what() const noexcept -> const char * override {
    return this->message_.c_str();
  }

private:
  std::string message_;
};

class ResolutionError : public std::exception {
public:
  ResolutionError(std::string identifier, std::string message)
      : identifier_{std::move(identifier)}, message_{std::move(message)} {}
  [[nodiscard]] auto what() const noexcept -> const char * override {
    return this->message_.c_str();
  }

  [[nodiscard]] auto id() const noexcept -> const std::string & {
    return this->identifier_;
  }

private:
  std::string identifier_;
  std::string message_;
};

} // namespace sourcemeta::jsontoolkit

#endif
