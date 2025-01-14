#include <sourcemeta/jsontoolkit/yaml.h>

#include <string_view> // std::string_view

// See https://pyyaml.org/wiki/LibYAML for basic documentation
#include <yaml.h>

namespace sourcemeta::jsontoolkit {

auto from_yaml(const JSON::String &input) -> JSON {
  yaml_parser_t parser;
  if (!yaml_parser_initialize(&parser)) {
    throw YAMLError("Could not initialize the YAML parser");
  }

  yaml_parser_set_input_string(
      &parser, reinterpret_cast<const unsigned char *>(input.c_str()),
      input.size());

  yaml_document_t document;
  if (!yaml_parser_load(&parser, &document)) {
    yaml_parser_delete(&parser);
    // TODO: Ideally we would get line/column information like for `ParseError`
    throw YAMLParseError("Failed to parse the YAML document");
  }

  yaml_node_t *const root = yaml_document_get_root_node(&document);
  if (!root) {
    yaml_document_delete(&document);
    yaml_parser_delete(&parser);
    throw YAMLParseError("The input YAML document is empty");
  }

  try {
    const sourcemeta::jsontoolkit::JSON result{nullptr};
    yaml_document_delete(&document);
    yaml_parser_delete(&parser);
    return result;
  } catch (...) {
    yaml_document_delete(&document);
    yaml_parser_delete(&parser);
    throw;
  }
}

} // namespace sourcemeta::jsontoolkit
