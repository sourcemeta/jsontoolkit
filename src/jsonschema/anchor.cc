#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <cassert> // assert
#include <utility> // std::move

namespace sourcemeta::jsontoolkit {

auto anchors(const JSON &schema, const SchemaResolver &resolver,
             const std::optional<std::string> &default_dialect)
    -> std::future<std::map<std::string, AnchorType>> {
  const std::map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(schema, resolver, default_dialect)
          .get()};
  std::promise<std::map<std::string, AnchorType>> promise;
  std::map<std::string, AnchorType> result;

  // 2020-12
  if (vocabularies.contains(
          "https://json-schema.org/draft/2020-12/vocab/core")) {
    // A dynamic anchor takes precedence over a static anchor
    if (schema.defines("$dynamicAnchor")) {
      const auto &anchor{schema.at("$dynamicAnchor")};
      assert(anchor.is_string());
      result.insert({anchor.to_string(), AnchorType::Dynamic});
    }

    if (schema.defines("$anchor")) {
      const auto &anchor{schema.at("$anchor")};
      assert(anchor.is_string());
      result.insert({anchor.to_string(), AnchorType::Static});
    }
  }

  // 2019-09
  if (vocabularies.contains(
          "https://json-schema.org/draft/2019-09/vocab/core")) {
    if (schema.defines("$anchor")) {
      const auto &anchor{schema.at("$anchor")};
      assert(anchor.is_string());
      result.insert({anchor.to_string(), AnchorType::Static});
    }
  }

  promise.set_value(std::move(result));
  return promise.get_future();
}

} // namespace sourcemeta::jsontoolkit
