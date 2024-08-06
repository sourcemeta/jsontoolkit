#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <cassert> // assert

static auto explain_string(const sourcemeta::jsontoolkit::JSON &schema,
                           const std::map<std::string, bool> &vocabularies)
    -> std::optional<sourcemeta::jsontoolkit::SchemaExplanation> {
  assert(schema.is_object());
  sourcemeta::jsontoolkit::SchemaExplainerScalar explanation;
  explanation.type = "string";

  if (vocabularies.contains("http://json-schema.org/draft-07/schema#")) {
    static const std::set<std::string> IGNORE{"$id",  "$schema",   "$comment",
                                              "type", "minLength", "maxLength"};

    if (schema.defines("minLength") && schema.defines("maxLength")) {
      if (schema.at("minLength") == schema.at("maxLength")) {
        explanation.constraints.emplace(
            "range", "exactly " +
                         std::to_string(schema.at("minLength").to_integer()) +
                         " characters");
      } else {
        explanation.constraints.emplace(
            "range", std::to_string(schema.at("minLength").to_integer()) +
                         " to " +
                         std::to_string(schema.at("maxLength").to_integer()) +
                         " characters");
      }
    } else if (schema.defines("minLength")) {
      explanation.constraints.emplace(
          "range", ">= " + std::to_string(schema.at("minLength").to_integer()) +
                       " characters");
    } else if (schema.defines("maxLength")) {
      explanation.constraints.emplace(
          "range", "<= " + std::to_string(schema.at("maxLength").to_integer()) +
                       " characters");
    }

    for (const auto &[keyword, value] : schema.as_object()) {
      if (IGNORE.contains(keyword)) {
        continue;
      } else if (keyword == "title") {
        assert(value.is_string());
        explanation.title = value.to_string();
      } else if (keyword == "description") {
        assert(value.is_string());
        explanation.description = value.to_string();
      } else if (keyword == "pattern") {
        assert(value.is_string());
        explanation.constraints.emplace("matches", value.to_string());
      } else if (keyword == "examples") {
        assert(value.is_array());
        for (const auto &item : value.as_array()) {
          assert(item.is_string());
          explanation.examples.insert(item.to_string());
        }
      } else {
        return std::nullopt;
      }
    }
  }

  return explanation;
}

namespace sourcemeta::jsontoolkit {

auto explain(const JSON &schema, const SchemaResolver &resolver,
             const std::optional<std::string> &default_dialect)
    -> std::optional<SchemaExplanation> {
  assert(is_schema(schema));

  if (schema.is_boolean()) {
    return std::nullopt;
  }

  const auto vocabularies{
      sourcemeta::jsontoolkit::vocabularies(schema, resolver, default_dialect)
          .get()};

  // TODO: Support strings in other dialects
  if (vocabularies.contains("http://json-schema.org/draft-07/schema#") &&
      schema.defines("type") && schema.at("type").is_string() &&
      schema.at("type").to_string() == "string") {
    return explain_string(schema, vocabularies);
  }

  return std::nullopt;
}

} // namespace sourcemeta::jsontoolkit
