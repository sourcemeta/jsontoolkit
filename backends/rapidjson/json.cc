#include <jsontoolkit/json.h>

sourcemeta::jsontoolkit::JSON::JSON(const std::string &json)
    : is_top_level{true} {
  rapidjson::Document *document = new rapidjson::Document();
  document->Parse(json);
  this->data = document;
  this->allocator = &document->GetAllocator();
}

sourcemeta::jsontoolkit::JSON::~JSON() {
  if (this->is_top_level) {
    delete static_cast<rapidjson::Document *>(this->data);
  } else {
    delete this->data;
  }
}

auto sourcemeta::jsontoolkit::JSON::is_boolean() const -> bool {
  return this->data->IsBool();
}

auto sourcemeta::jsontoolkit::JSON::is_object() const -> bool {
  return this->data->IsObject();
}
