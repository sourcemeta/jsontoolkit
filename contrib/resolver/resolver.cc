#include "schemas.h"
#include <jsontoolkit/contrib/resolver.h>

auto sourcemeta::jsontoolkit::contrib::Resolver::operator()(
    const std::string &identifier)
    -> std::future<std::optional<sourcemeta::jsontoolkit::JSON>> {
  std::promise<std::optional<sourcemeta::jsontoolkit::JSON>> promise;

  if (identifier == "https://json-schema.org/draft/2020-12/schema") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        sourcemeta::jsontoolkit::contrib::resolver::
            METASCHEMA_JSONSCHEMA_2020_12));
  } else if (identifier ==
             "https://json-schema.org/draft/2020-12/meta/applicator") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        sourcemeta::jsontoolkit::contrib::resolver::
            METASCHEMA_JSONSCHEMA_2020_12_APPLICATOR));
  } else if (identifier ==
             "https://json-schema.org/draft/2020-12/meta/content") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        sourcemeta::jsontoolkit::contrib::resolver::
            METASCHEMA_JSONSCHEMA_2020_12_CONTENT));
  } else if (identifier == "https://json-schema.org/draft/2020-12/meta/core") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        sourcemeta::jsontoolkit::contrib::resolver::
            METASCHEMA_JSONSCHEMA_2020_12_CORE));
  } else if (identifier ==
             "https://json-schema.org/draft/2020-12/meta/format-annotation") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        sourcemeta::jsontoolkit::contrib::resolver::
            METASCHEMA_JSONSCHEMA_2020_12_FORMAT_ANNOTATION));
  } else if (identifier ==
             "https://json-schema.org/draft/2020-12/meta/format-assertion") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        sourcemeta::jsontoolkit::contrib::resolver::
            METASCHEMA_JSONSCHEMA_2020_12_FORMAT_ASSERTION));
  } else if (identifier ==
             "https://json-schema.org/draft/2020-12/meta/hyper-schema") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        sourcemeta::jsontoolkit::contrib::resolver::
            METASCHEMA_JSONSCHEMA_2020_12_HYPER_SCHEMA));
  } else if (identifier ==
             "https://json-schema.org/draft/2020-12/meta/meta-data") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        sourcemeta::jsontoolkit::contrib::resolver::
            METASCHEMA_JSONSCHEMA_2020_12_META_DATA));
  } else if (identifier ==
             "https://json-schema.org/draft/2020-12/meta/unevaluated") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        sourcemeta::jsontoolkit::contrib::resolver::
            METASCHEMA_JSONSCHEMA_2020_12_UNEVALUATED));
  } else if (identifier ==
             "https://json-schema.org/draft/2020-12/meta/validation") {
    promise.set_value(sourcemeta::jsontoolkit::parse(
        sourcemeta::jsontoolkit::contrib::resolver::
            METASCHEMA_JSONSCHEMA_2020_12_VALIDATION));
  } else {
    promise.set_value(std::nullopt);
  }

  return promise.get_future();
}
