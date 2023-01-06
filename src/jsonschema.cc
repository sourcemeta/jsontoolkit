#include <jsontoolkit/json.h>
#include <jsontoolkit/jsonschema.h>

#include <stdexcept> // std::invalid_argument

auto sourcemeta::jsontoolkit::is_schema(
    const sourcemeta::jsontoolkit::Value &schema) -> bool {
  return sourcemeta::jsontoolkit::is_object(schema) ||
         sourcemeta::jsontoolkit::is_boolean(schema);
}

auto sourcemeta::jsontoolkit::metaschema(
    const sourcemeta::jsontoolkit::Value &schema)
    -> std::optional<std::string> {
  if (!sourcemeta::jsontoolkit::is_schema(schema)) {
    throw std::invalid_argument("The input document is not a valid schema");
  }

  if (sourcemeta::jsontoolkit::is_boolean(schema)) {
    return std::nullopt;
  }

  if (sourcemeta::jsontoolkit::defines(schema, "$schema")) {
    const sourcemeta::jsontoolkit::Value &metaschema{
        sourcemeta::jsontoolkit::at(schema, "$schema")};
    if (!sourcemeta::jsontoolkit::is_string(metaschema) ||
        sourcemeta::jsontoolkit::empty(metaschema)) {
      throw std::invalid_argument(
          "The value of the $schema property is not valid");
    }

    return sourcemeta::jsontoolkit::to_string(metaschema);
  }

  return std::nullopt;
}
