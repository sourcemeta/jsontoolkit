#include <jsontoolkit/json.h>
#include <jsontoolkit/jsonschema.h>

#include <cassert>   // assert
#include <stdexcept> // std::invalid_argument

auto sourcemeta::jsontoolkit::is_schema(
    const sourcemeta::jsontoolkit::Value &schema) -> bool {
  return sourcemeta::jsontoolkit::is_object(schema) ||
         sourcemeta::jsontoolkit::is_boolean(schema);
}

auto sourcemeta::jsontoolkit::id(const sourcemeta::jsontoolkit::Value &schema)
    -> std::optional<std::string> {
  assert(is_schema(schema));
  if (sourcemeta::jsontoolkit::is_object(schema) &&
      sourcemeta::jsontoolkit::defines(schema, "$id")) {
    const sourcemeta::jsontoolkit::Value &id{
        sourcemeta::jsontoolkit::at(schema, "$id")};
    if (!sourcemeta::jsontoolkit::is_string(id) ||
        sourcemeta::jsontoolkit::empty(id)) {
      throw std::invalid_argument("The value of the $id property is not valid");
    }

    return sourcemeta::jsontoolkit::to_string(id);
  }

  return std::nullopt;
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
