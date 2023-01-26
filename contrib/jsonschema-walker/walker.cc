#include <jsontoolkit/json.h>
#include <jsontoolkit/jsonschema.h>

#include <cstdlib>       // EXIT_FAILURE, EXIT_SUCCESS
#include <exception>     // std::exception
#include <filesystem>    // std::filesystem::path, std::filesystem::canonical
#include <fstream>       // std::ifstream
#include <future>        // std::promise, std::future
#include <iostream>      // std::cerr, std::cout, std::cin
#include <istream>       // std::basic_istream
#include <unordered_map> // std::unordered_map

// TODO: Add networking support instead
static auto resolver(const std::string &identifier)
    -> std::future<std::optional<sourcemeta::jsontoolkit::JSON>> {
  std::promise<std::optional<sourcemeta::jsontoolkit::JSON>> promise;

  if (identifier == "https://json-schema.org/draft/2020-12/schema") {
    promise.set_value(sourcemeta::jsontoolkit::parse(R"JSON({
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://json-schema.org/draft/2020-12/schema",
      "$vocabulary": {
          "https://json-schema.org/draft/2020-12/vocab/core": true,
          "https://json-schema.org/draft/2020-12/vocab/applicator": true,
          "https://json-schema.org/draft/2020-12/vocab/unevaluated": true,
          "https://json-schema.org/draft/2020-12/vocab/validation": true,
          "https://json-schema.org/draft/2020-12/vocab/meta-data": true,
          "https://json-schema.org/draft/2020-12/vocab/format-annotation": true,
          "https://json-schema.org/draft/2020-12/vocab/content": true
      },
      "$dynamicAnchor": "meta",
      "title": "Core and Validation specifications meta-schema",
      "allOf": [
          {
              "$ref": "meta/core"
          },
          {
              "$ref": "meta/applicator"
          },
          {
              "$ref": "meta/unevaluated"
          },
          {
              "$ref": "meta/validation"
          },
          {
              "$ref": "meta/meta-data"
          },
          {
              "$ref": "meta/format-annotation"
          },
          {
              "$ref": "meta/content"
          }
      ],
      "type": [
          "object",
          "boolean"
      ],
      "$comment": "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.",
      "properties": {
          "definitions": {
              "$comment": "\"definitions\" has been replaced by \"$defs\".",
              "type": "object",
              "additionalProperties": {
                  "$dynamicRef": "#meta"
              },
              "deprecated": true,
              "default": {}
          },
          "dependencies": {
              "$comment": "\"dependencies\" has been split and replaced by \"dependentSchemas\" and \"dependentRequired\" in order to serve their differing semantics.",
              "type": "object",
              "additionalProperties": {
                  "anyOf": [
                      {
                          "$dynamicRef": "#meta"
                      },
                      {
                          "$ref": "meta/validation#/$defs/stringArray"
                      }
                  ]
              },
              "deprecated": true,
              "default": {}
          },
          "$recursiveAnchor": {
              "$comment": "\"$recursiveAnchor\" has been replaced by \"$dynamicAnchor\".",
              "$ref": "meta/core#/$defs/anchorString",
              "deprecated": true
          },
          "$recursiveRef": {
              "$comment": "\"$recursiveRef\" has been replaced by \"$dynamicRef\".",
              "$ref": "meta/core#/$defs/uriReferenceString",
              "deprecated": true
          }
      }
    })JSON"));
  } else {
    promise.set_value(std::nullopt);
  }

  return promise.get_future();
}

// Because standard "contains()" is introduced in C++20
static auto contains(const std::unordered_map<std::string, bool> &map,
                     const std::string &key) -> bool {
  return map.find(key) != map.end();
}

static auto walker(const std::string &keyword,
                   const std::unordered_map<std::string, bool> &vocabularies)
    -> sourcemeta::jsontoolkit::schema_walker_strategy_t {
  if (contains(vocabularies,
               "https://json-schema.org/draft/2020-12/vocab/core") &&
      keyword == "$defs") {
    return sourcemeta::jsontoolkit::schema_walker_strategy_t::Members;
  }

  if (contains(vocabularies,
               "https://json-schema.org/draft/2020-12/vocab/content") &&
      keyword == "contentSchema") {
    return sourcemeta::jsontoolkit::schema_walker_strategy_t::Value;
  }

  if (contains(vocabularies,
               "https://json-schema.org/draft/2020-12/vocab/unevaluated")) {
    if (keyword == "unevaluatedProperties" || keyword == "unevaluatedItems") {
      return sourcemeta::jsontoolkit::schema_walker_strategy_t::Value;
    }
  }

  if (contains(vocabularies,
               "https://json-schema.org/draft/2020-12/vocab/applicator")) {
    if (keyword == "dependentSchemas" || keyword == "properties" ||
        keyword == "patternProperties") {
      return sourcemeta::jsontoolkit::schema_walker_strategy_t::Members;
    }

    if (keyword == "allOf" || keyword == "anyOf" || keyword == "oneOf" ||
        keyword == "prefixItems") {
      return sourcemeta::jsontoolkit::schema_walker_strategy_t::Elements;
    }

    if (keyword == "not" || keyword == "if" || keyword == "then" ||
        keyword == "else" || keyword == "items" || keyword == "contains" ||
        keyword == "additionalProperties" || keyword == "propertyNames") {
      return sourcemeta::jsontoolkit::schema_walker_strategy_t::Value;
    }
  }

  return sourcemeta::jsontoolkit::schema_walker_strategy_t::None;
}

template <typename CharT, typename Traits>
static auto walk(std::basic_istream<CharT, Traits> &stream) -> int {
  const sourcemeta::jsontoolkit::JSON document{
      sourcemeta::jsontoolkit::parse(stream)};

  const std::optional<std::string> metaschema{
      sourcemeta::jsontoolkit::metaschema(document)};
  if (!metaschema.has_value()) {
    std::cerr << "The given schema does not declare its meta-schema. We will "
                 "only assume the presence of the 'core' vocabulary\n";
  }

  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(document, resolver).get()};

  for (const auto &subschema : sourcemeta::jsontoolkit::subschema_iterator(
           document, walker, vocabularies)) {
    sourcemeta::jsontoolkit::prettify(subschema, std::cout);
    std::cout << "\n";
  }

  return EXIT_SUCCESS;
}

auto main(int argc, char *argv[]) -> int {
  try {
    if (argc == 1) {
      return walk(std::cin);
    } else {
      const std::filesystem::path input{argv[1]};
      std::ifstream stream{std::filesystem::canonical(input)};
      stream.exceptions(std::ios_base::badbit);
      return walk(stream);
    }
  } catch (const std::exception &error) {
    std::cerr << "Error: " << error.what() << "\n";
    return EXIT_FAILURE;
  }
}
