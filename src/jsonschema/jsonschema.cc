#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <cassert>     // assert
#include <future>      // std::future
#include <sstream>     // std::ostringstream
#include <type_traits> // std::remove_reference_t

auto sourcemeta::jsontoolkit::is_schema(
    const sourcemeta::jsontoolkit::JSON &schema) -> bool {
  return schema.is_object() || schema.is_boolean();
}

// TODO: Make this function take a dialect as an argument
auto sourcemeta::jsontoolkit::id(const sourcemeta::jsontoolkit::JSON &schema)
    -> std::optional<std::string> {
  assert(is_schema(schema));

  // TODO: Test that we always use "$id" or "id" correctly depending on the
  // dialect, and we don't just fallback
  if (schema.is_object() && schema.defines("$id")) {
    const sourcemeta::jsontoolkit::JSON &id{schema.at("$id")};
    if (!id.is_string() || id.empty()) {
      throw sourcemeta::jsontoolkit::SchemaError(
          "The value of the $id property is not valid");
    }

    return id.to_string();
  }

  // TODO: Test that we always use "$id" or "id" correctly depending on the
  // dialect and we don't just fallback
  if (schema.is_object() && schema.defines("id")) {
    const sourcemeta::jsontoolkit::JSON &id{schema.at("id")};
    if (!id.is_string() || id.empty()) {
      throw sourcemeta::jsontoolkit::SchemaError(
          "The value of the id property is not valid");
    }

    return id.to_string();
  }

  return std::nullopt;
}

auto sourcemeta::jsontoolkit::dialect(
    const sourcemeta::jsontoolkit::JSON &schema) -> std::optional<std::string> {
  assert(sourcemeta::jsontoolkit::is_schema(schema));
  if (schema.is_boolean() || !schema.defines("$schema")) {
    return std::nullopt;
  }

  const sourcemeta::jsontoolkit::JSON &dialect{schema.at("$schema")};
  assert(dialect.is_string() && !dialect.empty());
  return dialect.to_string();
}

auto sourcemeta::jsontoolkit::base_dialect(
    const sourcemeta::jsontoolkit::JSON &schema,
    const sourcemeta::jsontoolkit::SchemaResolver &resolver,
    const std::optional<std::string> &default_dialect)
    -> std::future<std::optional<std::string>> {
  assert(sourcemeta::jsontoolkit::is_schema(schema));
  const std::optional<std::string> metaschema_id{
      sourcemeta::jsontoolkit::dialect(schema)};
  const std::optional<std::string> &effective_metaschema_id{
      metaschema_id.has_value() ? metaschema_id : default_dialect};

  // There is no metaschema information whatsoever
  // Nothing we can do at this point
  if (!effective_metaschema_id.has_value()) {
    std::promise<std::optional<std::string>> promise;
    promise.set_value(std::nullopt);
    return promise.get_future();
  }

  // For compatibility with older JSON Schema drafts that didn't support $id nor
  // $vocabulary
  if (
      // In Draft 0, 1, and 2, the official metaschema is defined on top of
      // the official hyper-schema metaschema. See
      // http://json-schema.org/draft-00/schema#
      effective_metaschema_id.value() ==
          "http://json-schema.org/draft-00/hyper-schema#" ||
      effective_metaschema_id.value() ==
          "http://json-schema.org/draft-01/hyper-schema#" ||
      effective_metaschema_id.value() ==
          "http://json-schema.org/draft-02/hyper-schema#" ||

      // Draft 3 and 4 have both schema and hyper-schema dialects
      effective_metaschema_id.value() ==
          "http://json-schema.org/draft-03/hyper-schema#" ||
      effective_metaschema_id.value() ==
          "http://json-schema.org/draft-03/schema#" ||
      effective_metaschema_id.value() ==
          "http://json-schema.org/draft-04/hyper-schema#" ||
      effective_metaschema_id.value() ==
          "http://json-schema.org/draft-04/schema#") {
    std::promise<std::optional<std::string>> promise;
    promise.set_value(effective_metaschema_id);
    return promise.get_future();
  }

  // If we reach the bottom of the metaschema hierarchy, where the schema
  // defines itself, then we got to the base dialect
  const std::optional<std::string> schema_id{id(schema)};
  if (schema_id.has_value() &&
      schema_id.value() == effective_metaschema_id.value()) {
    std::promise<std::optional<std::string>> promise;
    promise.set_value(schema_id.value());
    return promise.get_future();
  }

  // Otherwise, traverse the metaschema hierarchy up
  const std::optional<sourcemeta::jsontoolkit::JSON> metaschema{
      resolver(effective_metaschema_id.value()).get()};
  if (!metaschema.has_value()) {
    throw sourcemeta::jsontoolkit::SchemaResolutionError(
        effective_metaschema_id.value(), "Could not resolve schema");
  }

  return base_dialect(metaschema.value(), resolver,
                      effective_metaschema_id.value());
}

// TODO: Support every JSON Schema draft from Draft 7 and older
// for completeness, returning the draft itself as the only vocabulary.
namespace {
auto core_vocabulary(const std::string &draft) -> std::string {
  if (draft == "https://json-schema.org/draft/2020-12/schema" ||
      draft == "https://json-schema.org/draft/2020-12/hyper-schema") {
    return "https://json-schema.org/draft/2020-12/vocab/core";
  } else if (draft == "https://json-schema.org/draft/2019-09/schema" ||
             draft == "https://json-schema.org/draft/2019-09/hyper-schema") {
    return "https://json-schema.org/draft/2019-09/vocab/core";
  } else {
    std::ostringstream error;
    error << "Unrecognized draft: " << draft;
    throw sourcemeta::jsontoolkit::SchemaError(error.str());
  }
}
} // namespace

auto sourcemeta::jsontoolkit::vocabularies(
    const sourcemeta::jsontoolkit::JSON &schema,
    const sourcemeta::jsontoolkit::SchemaResolver &resolver,
    const std::optional<std::string> &default_dialect)
    -> std::future<std::map<std::string, bool>> {
  std::promise<std::map<std::string, bool>> promise;

  // If the meta-schema, as referenced by the schema, is not recognized, or is
  // missing, then the behavior is implementation-defined. If the
  // implementation proceeds with processing the schema, it MUST assume the
  // use of the vocabulary from the core specification.
  // See https://json-schema.org/draft/2020-12/json-schema-core.html#section-8
  std::map<std::string, bool> result;

  /*
   * (1) Identify the schema's metaschema
   */
  const std::optional<std::string> metaschema_id{
      sourcemeta::jsontoolkit::dialect(schema)};
  if (!metaschema_id.has_value() && !default_dialect.has_value()) {
    // If the schema has no declared metaschema and the user didn't
    // provide a explicit default, then we cannot do anything.
    // Better to abort instead of trying to guess.
    throw sourcemeta::jsontoolkit::SchemaError(
        "Cannot determine the metaschema of the given schema");
  }
  const std::string &effective_metaschema_id{metaschema_id.has_value()
                                                 ? metaschema_id.value()
                                                 : default_dialect.value()};

  /*
   * (2) Resolve the metaschema
   */
  std::future<std::optional<sourcemeta::jsontoolkit::JSON>> metaschema_future{
      resolver(effective_metaschema_id)};
  const std::optional<sourcemeta::jsontoolkit::JSON> metaschema{
      metaschema_future.get()};
  if (!metaschema.has_value()) {
    throw sourcemeta::jsontoolkit::SchemaResolutionError(
        effective_metaschema_id, "Could not resolve schema");
  }
  const std::optional<std::string> resolved_id{
      sourcemeta::jsontoolkit::id(metaschema.value())};
  if (!resolved_id.has_value() ||
      resolved_id.value() != effective_metaschema_id) {
    throw sourcemeta::jsontoolkit::SchemaResolutionError(
        effective_metaschema_id,
        "Resolved metaschema id does not match request");
  }

  /*
   * (3) Resolve the metaschema's draft
   */
  const std::optional<std::string> base_dialect{
      sourcemeta::jsontoolkit::base_dialect(metaschema.value(), resolver,
                                            default_dialect)
          .get()};
  if (!base_dialect.has_value()) {
    std::ostringstream error;
    error << "Could not determine dialect for schema: " << resolved_id.value();
    throw sourcemeta::jsontoolkit::SchemaError(error.str());
  }
  const std::string core{core_vocabulary(base_dialect.value())};

  /*
   * (4) Parse the "$vocabulary" keyword, if any
   */
  if (!metaschema.value().defines("$vocabulary")) {
    // The core vocabulary is always used
    // See https://json-schema.org/draft/2020-12/json-schema-core.html#section-8
    // See
    // https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-02#section-8
    result.insert({core, true});

    if (base_dialect.value() ==
            "https://json-schema.org/draft/2020-12/schema" ||
        base_dialect.value() ==
            "https://json-schema.org/draft/2020-12/hyper-schema") {
      // See
      // https://json-schema.org/draft/2020-12/json-schema-core.html#section-10
      result.insert(
          {"https://json-schema.org/draft/2020-12/vocab/applicator", true});
      // See
      // https://json-schema.org/draft/2020-12/json-schema-core.html#section-11
      result.insert(
          {"https://json-schema.org/draft/2020-12/vocab/unevaluated", true});
      // See
      // https://json-schema.org/draft/2020-12/json-schema-validation.html#section-6
      result.insert(
          {"https://json-schema.org/draft/2020-12/vocab/validation", true});
      // See
      // https://json-schema.org/draft/2020-12/json-schema-validation.html#section-8
      result.insert(
          {"https://json-schema.org/draft/2020-12/vocab/content", true});
      // See
      // https://json-schema.org/draft/2020-12/json-schema-validation.html#section-9
      result.insert(
          {"https://json-schema.org/draft/2020-12/vocab/meta-data", true});
    } else if (base_dialect.value() ==
                   "https://json-schema.org/draft/2019-09/schema" ||
               base_dialect.value() ==
                   "https://json-schema.org/draft/2019-09/hyper-schema") {
      // See
      // https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-02#section-9
      result.insert(
          {"https://json-schema.org/draft/2019-09/vocab/applicator", true});
      // See
      // https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-02#section-6
      result.insert(
          {"https://json-schema.org/draft/2019-09/vocab/validation", true});
      // The Format vocabulary is optional by default
      // See
      // https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-02#section-7
      result.insert(
          {"https://json-schema.org/draft/2019-09/vocab/format", false});
      // See
      // https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-02#section-8
      result.insert(
          {"https://json-schema.org/draft/2019-09/vocab/content", true});
      // See
      // https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-02#section-9
      result.insert(
          {"https://json-schema.org/draft/2019-09/vocab/meta-data", true});
    }

    promise.set_value(result);
    return promise.get_future();
  }

  const sourcemeta::jsontoolkit::JSON &vocabulary_value{
      metaschema.value().at("$vocabulary")};

  // Handle core vocabulary edge cases
  if (!vocabulary_value.defines(core)) {
    throw sourcemeta::jsontoolkit::SchemaError(
        "Every metaschema must declare the core vocabulary");
  } else if (!vocabulary_value.at(core).to_boolean()) {
    throw sourcemeta::jsontoolkit::SchemaError(
        "The core vocabulary must be marked as required");
  }

  for (const auto &[key, value] : vocabulary_value.as_object()) {
    result.insert({key, value.to_boolean()});
  }

  promise.set_value(result);
  return promise.get_future();
}
