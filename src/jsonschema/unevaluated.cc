#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <iostream>

namespace {

auto process_2020_12_evaluated_properties() -> void {

}

}

namespace sourcemeta::jsontoolkit {

auto unevaluated(const JSON &schema, const SchemaWalker &walker,
                 const SchemaResolver &resolver,
                 const std::optional<std::string> &default_dialect)
    -> std::map<std::string, UnevaluatedEntry> {
  std::map<std::string, UnevaluatedEntry> result;

  for (const auto &entry : sourcemeta::jsontoolkit::SchemaIterator{
           schema, walker, resolver, default_dialect}) {

    if (entry.vocabularies.contains(
            "https://json-schema.org/draft/2020-12/vocab/unevaluated")) {
      if (entry.value.defines("unevaluatedProperties")) {
        process_2020_12_evaluated_properties(entry, result);
      }

    }

    if (entry.vocabularies.contains(
            "https://json-schema.org/draft/2019-09/vocab/applicator")) {

    }

    std::cerr << "XXX: ";
    sourcemeta::jsontoolkit::stringify(entry.pointer, std::cerr);
    std::cerr << "\n";
  }

  return result;
}

} // namespace sourcemeta::jsontoolkit
