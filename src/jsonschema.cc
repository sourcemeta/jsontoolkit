#include <jsontoolkit/json.h>
#include <jsontoolkit/jsonschema.h>

#include <cassert>   // assert
#include <future>    // std::future
#include <sstream>   // std::ostringstream
#include <stdexcept> // std::invalid_argument, std::runtime_error

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

auto sourcemeta::jsontoolkit::vocabularies(
    const sourcemeta::jsontoolkit::Value &schema,
    const sourcemeta::jsontoolkit::schema_resolver_t &resolver,
    const std::optional<std::string> &default_metaschema)
    -> std::future<std::unordered_map<std::string, bool>> {
  std::promise<std::unordered_map<std::string, bool>> promise;

  // If the meta-schema, as referenced by the schema, is not recognized, or is
  // missing, then the behavior is implementation-defined. If the
  // implementation proceeds with processing the schema, it MUST assume the
  // use of the core vocabulary.
  // https://json-schema.org/draft/2020-12/json-schema-core.html#section-8.1.2.1
  // TODO: Do not assume 2020-12 core if the schema already has a
  // non-2020-12 metaschema
  std::unordered_map<std::string, bool> result{
      {"https://json-schema.org/draft/2020-12/vocab/core", true}};

  /*
   * (1) Identify the schema's metaschema
   */
  const std::optional<std::string> metaschema_id{
      sourcemeta::jsontoolkit::metaschema(schema)};
  if (!metaschema_id.has_value() && !default_metaschema.has_value()) {
    promise.set_value(result);
    return promise.get_future();
  }
  const std::string &effective_metaschema_id{metaschema_id.has_value()
                                                 ? metaschema_id.value()
                                                 : default_metaschema.value()};

  /*
   * (2) Resolve the metaschema
   */
  std::future<std::optional<sourcemeta::jsontoolkit::JSON>> metaschema_future{
      resolver(effective_metaschema_id)};
  const std::optional<sourcemeta::jsontoolkit::JSON> metaschema{
      metaschema_future.get()};
  if (!metaschema.has_value()) {
    std::ostringstream error;
    error << "Could not resolve schema: " << effective_metaschema_id;
    throw std::runtime_error(error.str());
  }
  const std::optional<std::string> resolved_id{
      sourcemeta::jsontoolkit::id(metaschema.value())};
  if (!resolved_id.has_value() ||
      resolved_id.value() != effective_metaschema_id) {
    std::ostringstream error;
    error << "Resolved metaschema id does not match request: "
          << effective_metaschema_id;
    throw std::runtime_error(error.str());
  }

  /*
   * (3) Parse the "$vocabulary" keyword, if any
   */
  if (!sourcemeta::jsontoolkit::defines(metaschema.value(), "$vocabulary")) {
    promise.set_value(result);
    return promise.get_future();
  }
  const sourcemeta::jsontoolkit::Value &vocabulary_value{
      sourcemeta::jsontoolkit::at(metaschema.value(), "$vocabulary")};
  for (auto iterator = sourcemeta::jsontoolkit::cbegin_object(vocabulary_value);
       iterator != sourcemeta::jsontoolkit::cend_object(vocabulary_value);
       iterator++) {
    result.insert({sourcemeta::jsontoolkit::key(*iterator),
                   sourcemeta::jsontoolkit::to_boolean(
                       sourcemeta::jsontoolkit::value(*iterator))});
  }

  promise.set_value(result);
  return promise.get_future();
}

auto sourcemeta::jsontoolkit::subschema_iterator(
    const sourcemeta::jsontoolkit::Value &schema,
    const sourcemeta::jsontoolkit::schema_walker_t &walker,
    const std::unordered_map<std::string, bool> &vocabularies) -> SchemaWalker {
  return sourcemeta::jsontoolkit::SchemaWalker{schema, walker, vocabularies};
}
