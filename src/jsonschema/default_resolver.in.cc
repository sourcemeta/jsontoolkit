#include <sourcemeta/jsontoolkit/jsonschema_resolver.h>

auto sourcemeta::jsontoolkit::DefaultSchemaResolver::operator()(
    const std::string &identifier)
    -> std::future<std::optional<sourcemeta::jsontoolkit::JSON>> {
  std::promise<std::optional<sourcemeta::jsontoolkit::JSON>> promise;

  // JSON Schema 2020-12
  if (identifier == "https://json-schema.org/draft/2020-12/schema") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        R"EOF(@METASCHEMA_JSONSCHEMA_2020_12@)EOF"));
  } else if (identifier ==
             "https://json-schema.org/draft/2020-12/hyper-schema") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        R"EOF(@METASCHEMA_HYPERSCHEMA_2020_12@)EOF"));
  } else if (identifier ==
             "https://json-schema.org/draft/2020-12/meta/applicator") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        R"EOF(@METASCHEMA_JSONSCHEMA_2020_12_APPLICATOR@)EOF"));
  } else if (identifier ==
             "https://json-schema.org/draft/2020-12/meta/content") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        R"EOF(@METASCHEMA_JSONSCHEMA_2020_12_CONTENT@)EOF"));
  } else if (identifier == "https://json-schema.org/draft/2020-12/meta/core") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        R"EOF(@METASCHEMA_JSONSCHEMA_2020_12_CORE@)EOF"));
  } else if (identifier ==
             "https://json-schema.org/draft/2020-12/meta/format-annotation") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        R"EOF(@METASCHEMA_JSONSCHEMA_2020_12_FORMAT_ANNOTATION@)EOF"));
  } else if (identifier ==
             "https://json-schema.org/draft/2020-12/meta/format-assertion") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        R"EOF(@METASCHEMA_JSONSCHEMA_2020_12_FORMAT_ASSERTION@)EOF"));
  } else if (identifier ==
             "https://json-schema.org/draft/2020-12/meta/hyper-schema") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        R"EOF(@METASCHEMA_JSONSCHEMA_2020_12_HYPER_SCHEMA@)EOF"));
  } else if (identifier ==
             "https://json-schema.org/draft/2020-12/meta/meta-data") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        R"EOF(@METASCHEMA_JSONSCHEMA_2020_12_META_DATA@)EOF"));
  } else if (identifier ==
             "https://json-schema.org/draft/2020-12/meta/unevaluated") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        R"EOF(@METASCHEMA_JSONSCHEMA_2020_12_UNEVALUATED@)EOF"));
  } else if (identifier ==
             "https://json-schema.org/draft/2020-12/meta/validation") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        R"EOF(@METASCHEMA_JSONSCHEMA_2020_12_VALIDATION@)EOF"));

    // JSON Schema 2019-09
  } else if (identifier == "https://json-schema.org/draft/2019-09/schema") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        R"EOF(@METASCHEMA_JSONSCHEMA_2019_09@)EOF"));
  } else if (identifier ==
             "https://json-schema.org/draft/2019-09/hyper-schema") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        R"EOF(@METASCHEMA_HYPERSCHEMA_2019_09@)EOF"));
  } else if (identifier ==
             "https://json-schema.org/draft/2019-09/meta/applicator") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        R"EOF(@METASCHEMA_JSONSCHEMA_2019_09_APPLICATOR@)EOF"));
  } else if (identifier ==
             "https://json-schema.org/draft/2019-09/meta/content") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        R"EOF(@METASCHEMA_JSONSCHEMA_2019_09_CONTENT@)EOF"));
  } else if (identifier == "https://json-schema.org/draft/2019-09/meta/core") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        R"EOF(@METASCHEMA_JSONSCHEMA_2019_09_CORE@)EOF"));
  } else if (identifier ==
             "https://json-schema.org/draft/2019-09/meta/format") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        R"EOF(@METASCHEMA_JSONSCHEMA_2019_09_FORMAT@)EOF"));
  } else if (identifier ==
             "https://json-schema.org/draft/2019-09/meta/hyper-schema") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        R"EOF(@METASCHEMA_JSONSCHEMA_2019_09_HYPER_SCHEMA@)EOF"));
  } else if (identifier ==
             "https://json-schema.org/draft/2019-09/meta/meta-data") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        R"EOF(@METASCHEMA_JSONSCHEMA_2019_09_META_DATA@)EOF"));
  } else if (identifier ==
             "https://json-schema.org/draft/2019-09/meta/validation") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        R"EOF(@METASCHEMA_JSONSCHEMA_2019_09_VALIDATION@)EOF"));

    // Otherwise
  } else {
    promise.set_value(std::nullopt);
  }

  return promise.get_future();
}
