#include <jsontoolkit/json.h>

sourcemeta::jsontoolkit::JSON::JSON(const std::string &json) {
  rapidjson::Document *document = new rapidjson::Document();
  document->Parse(json);
  this->data = document;
}

sourcemeta::jsontoolkit::JSON::~JSON() {
  static_cast<rapidjson::Document *>(this->data)->~GenericDocument();
}

auto sourcemeta::jsontoolkit::JSON::is_boolean() const -> bool {
  return this->data->IsBool();
}

auto sourcemeta::jsontoolkit::JSON::is_object() const -> bool {
  return this->data->IsObject();
}
