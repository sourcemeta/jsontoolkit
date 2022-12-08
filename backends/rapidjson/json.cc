#include <jsontoolkit/json.h>

sourcemeta::jsontoolkit::JSON::JSON(const std::string &json)
    : is_top_level{true}, is_owned{true} {
  rapidjson::Document *document = new rapidjson::Document();
  document->Parse(json);
  this->data = document;
  this->allocator = &document->GetAllocator();
}

sourcemeta::jsontoolkit::JSON::~JSON() {
  if (!is_owned) {
    return;
  } else if (is_top_level) {
    static_cast<rapidjson::Document *>(this->data)->~GenericDocument();
  } else {
    this->data->~GenericValue();
  }
}
