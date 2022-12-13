#include <cassert>
#include <jsontoolkit/json.h>

sourcemeta::jsontoolkit::JSON::JSON(const std::string &json)
    : is_top_level{true}, is_owned{true} {
  rapidjson::Document *document = new rapidjson::Document();
  document->Parse(json);
  this->data = document;
  this->allocator = &document->GetAllocator();
}

sourcemeta::jsontoolkit::JSON::JSON(
    rapidjson::Value *const value,
    rapidjson::Document::AllocatorType *const value_allocator)
    : data{value}, allocator{value_allocator},
      is_top_level{false}, is_owned{false} {}

sourcemeta::jsontoolkit::JSON::JSON(const sourcemeta::jsontoolkit::JSON &other)
    : is_top_level{true}, is_owned{true} {
  rapidjson::Document *document = new rapidjson::Document();
  document->CopyFrom(*other.data, document->GetAllocator());
  this->data = document;
  this->allocator = &document->GetAllocator();
}

sourcemeta::jsontoolkit::JSON::~JSON() {
  if (!this->is_owned) {
    return;
  } else if (this->is_top_level) {
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

auto sourcemeta::jsontoolkit::JSON::at(const std::string &key) const
    -> const sourcemeta::jsontoolkit::JSON {
  assert(this->is_object());
  return sourcemeta::jsontoolkit::JSON{&(this->data)->operator[](key),
                                       this->allocator};
}

auto sourcemeta::jsontoolkit::JSON::operator==(
    const sourcemeta::jsontoolkit::JSON &value) const -> bool {
  return *this->data == *value.data;
}
