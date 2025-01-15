#include <sourcemeta/jsontoolkit/yaml.h>

#include <memory>      // std::unique_ptr
#include <string>      // std::string
#include <string_view> // std::string_view

// See https://pyyaml.org/wiki/LibYAML for basic documentation
#include <yaml.h>

class YAMLParser {
public:
  YAMLParser() {
    if (!yaml_parser_initialize(&this->parser)) {
      throw sourcemeta::jsontoolkit::YAMLError(
          "Could not initialize the YAML parser");
    }

    yaml_parser_set_encoding(&this->parser, YAML_UTF8_ENCODING);
  }

  ~YAMLParser() { yaml_parser_delete(&this->parser); }

  auto parse(const sourcemeta::jsontoolkit::JSON::String &input)
      -> const sourcemeta::jsontoolkit::JSON & {
    yaml_parser_set_input_string(
        &this->parser, reinterpret_cast<const unsigned char *>(input.c_str()),
        input.size());
    this->handle_next_event();
    return this->result;
  }

private:
  auto handle_next_event() -> void {
    yaml_event_t event{};
    if (!yaml_parser_parse(&this->parser, &event)) {
      throw sourcemeta::jsontoolkit::YAMLError(
          "Could parse the next YAML token");
    }

    std::unique_ptr<yaml_event_t, void (*)(yaml_event_t *)> event_guard(
        &event, [](yaml_event_t *data) {
          if (data) {
            yaml_event_delete(data);
          }
        });

    switch (event.type) {
      case YAML_STREAM_START_EVENT:
        this->handle_next_event();
        break;
      case YAML_STREAM_END_EVENT:
        if (!this->has_parsed) {
          // TODO: Ideally we would get line/column information like for
          // `ParseError`, possive with `yaml_mark_t` in `yaml_event_t`
          throw sourcemeta::jsontoolkit::YAMLParseError(
              "Failed to parse the YAML document");
        }

        break;
      case YAML_DOCUMENT_START_EVENT:
        this->handle_next_event();
        break;
      case YAML_DOCUMENT_END_EVENT:
        this->handle_next_event();
        break;

      case YAML_NO_EVENT:
        // TODO: Ideally we would get line/column information like for
        // `ParseError`, possive with `yaml_mark_t` in `yaml_event_t`
        throw sourcemeta::jsontoolkit::YAMLParseError(
            "Failed to parse the YAML document");

      case YAML_SCALAR_EVENT: {
        this->has_parsed = true;
        const std::string_view input{
            reinterpret_cast<char *>(event.data.scalar.value),
            event.data.scalar.length};

        try {
          // TODO: Avoid this std::string transformation
          this->current = sourcemeta::jsontoolkit::parse(std::string{input});
          // Looks like it is very hard in YAML, given a scalar value, to
          // determine whether it is a string or something else without
          // attempting to parsing it and potentially failing to do so
        } catch (const sourcemeta::jsontoolkit::ParseError &) {
          this->current = sourcemeta::jsontoolkit::JSON{input};
        }

        this->handle_next_event();
        break;
      }

      default:
        assert(false);
        break;
    }
  }

  sourcemeta::jsontoolkit::JSON result{nullptr};
  sourcemeta::jsontoolkit::JSON &current = result;
  bool has_parsed{false};
  yaml_parser_t parser;
};

namespace sourcemeta::jsontoolkit {

auto from_yaml(const JSON::String &input) -> JSON {
  YAMLParser yaml;
  return yaml.parse(input);
}

} // namespace sourcemeta::jsontoolkit
