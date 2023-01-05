#ifndef JSONTOOLKIT_JSONSCHEMA_H_
#define JSONTOOLKIT_JSONSCHEMA_H_

#include <jsontoolkit/json.h>

#include <optional>  // std::optional
#include <stdexcept> // std::invalid_argument
#include <string>    // std::string

namespace sourcemeta::jsontoolkit {

auto metaschema(const Value &schema) -> std::optional<std::string> {
  if (is_boolean(schema)) {
    return std::nullopt;
  } else if (is_object(schema)) {
    if (defines(schema, "$schema")) {
      const Value &metaschema{at(schema, "$schema")};
      if (!is_string(metaschema) || empty(metaschema)) {
        throw std::invalid_argument("The input document is not a valid schema");
      }

      return to_string(metaschema);
    }

    return std::nullopt;
  } else {
    throw std::invalid_argument("The input document is not a valid schema");
  }
}

} // namespace sourcemeta::jsontoolkit

#endif
