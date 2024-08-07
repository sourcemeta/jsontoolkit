#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <cassert> // assert

static auto quantify(const std::int64_t value, const std::string &singular,
                     const std::string &plural) -> std::string {
  std::ostringstream result;
  result << value;
  result << ' ';
  result << (value == 1 ? singular : plural);
  return result.str();
}

static auto
explain_constant_from_value(const sourcemeta::jsontoolkit::JSON &schema,
                            const sourcemeta::jsontoolkit::JSON &value)
    -> std::optional<sourcemeta::jsontoolkit::SchemaExplanation> {
  std::optional<std::string> title;
  std::optional<std::string> description;

  if (schema.defines("title")) {
    assert(schema.at("title").is_string());
    title = schema.at("title").to_string();
  } else if (schema.defines("description")) {
    assert(schema.at("description").is_string());
    description = schema.at("description").to_string();
  }

  return sourcemeta::jsontoolkit::SchemaExplainerConstant{value, title,
                                                          description};
}

static auto explain_string(const sourcemeta::jsontoolkit::JSON &schema,
                           const std::map<std::string, bool> &vocabularies)
    -> std::optional<sourcemeta::jsontoolkit::SchemaExplanation> {
  assert(schema.is_object());
  sourcemeta::jsontoolkit::SchemaExplainerScalar explanation;
  explanation.type = "string";

  if (vocabularies.contains("http://json-schema.org/draft-07/schema#")) {
    static const std::set<std::string> IGNORE{"$id",  "$schema",   "$comment",
                                              "type", "minLength", "maxLength"};

    // TODO: Extract into a range computation utility
    if (schema.defines("minLength") && schema.defines("maxLength")) {
      if (schema.at("minLength") == schema.at("maxLength")) {
        if (schema.at("maxLength").to_integer() == 0) {
          return explain_constant_from_value(schema,
                                             sourcemeta::jsontoolkit::JSON{""});
        }

        explanation.constraints.emplace(
            "range", "exactly " + quantify(schema.at("minLength").to_integer(),
                                           "character", "characters"));
      } else if (schema.at("minLength").to_integer() <= 0) {
        explanation.constraints.emplace(
            "range", "<= " + quantify(schema.at("maxLength").to_integer(),
                                      "character", "characters"));
      } else {
        explanation.constraints.emplace(
            "range", std::to_string(schema.at("minLength").to_integer()) +
                         " to " +
                         quantify(schema.at("maxLength").to_integer(),
                                  "character", "characters"));
      }
    } else if (schema.defines("minLength") &&
               schema.at("minLength").to_integer() > 0) {
      explanation.constraints.emplace(
          "range", ">= " + quantify(schema.at("minLength").to_integer(),
                                    "character", "characters"));
    } else if (schema.defines("maxLength")) {
      if (schema.at("maxLength").to_integer() == 0) {
        return explain_constant_from_value(schema,
                                           sourcemeta::jsontoolkit::JSON{""});
      }

      explanation.constraints.emplace(
          "range", "<= " + quantify(schema.at("maxLength").to_integer(),
                                    "character", "characters"));
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
