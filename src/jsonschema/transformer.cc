#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <utility> // std::move

sourcemeta::jsontoolkit::SchemaTransformer::SchemaTransformer(
    sourcemeta::jsontoolkit::JSON &schema)
    : data{schema} {}

auto sourcemeta::jsontoolkit::SchemaTransformer::at(
    const sourcemeta::jsontoolkit::JSON::Array::size_type index) const
    -> const sourcemeta::jsontoolkit::JSON & {
  return this->data.at(index);
}

auto sourcemeta::jsontoolkit::SchemaTransformer::at(
    const sourcemeta::jsontoolkit::JSON::String &key) const
    -> const sourcemeta::jsontoolkit::JSON & {
  return this->data.at(key);
}

auto sourcemeta::jsontoolkit::SchemaTransformer::into_object() -> void {
  this->data.into_object();
  this->operations.push_back(SchemaTransformerOperationReplace{
      sourcemeta::jsontoolkit::empty_pointer});
}

auto sourcemeta::jsontoolkit::SchemaTransformer::erase(
    const sourcemeta::jsontoolkit::JSON::String &key) -> void {
  this->data.erase(key);
  this->operations.push_back(SchemaTransformerOperationErase{{key}});
}

auto sourcemeta::jsontoolkit::SchemaTransformer::assign(
    const sourcemeta::jsontoolkit::JSON::String &key,
    const sourcemeta::jsontoolkit::JSON &value) -> void {
  this->data.assign(key, value);
  this->operations.push_back(SchemaTransformerOperationAssign{{key}});
}

auto sourcemeta::jsontoolkit::SchemaTransformer::assign(
    const sourcemeta::jsontoolkit::JSON::String &key,
    sourcemeta::jsontoolkit::JSON &&value) -> void {
  this->data.assign(key, std::move(value));
  this->operations.push_back(SchemaTransformerOperationAssign{{key}});
}

auto sourcemeta::jsontoolkit::SchemaTransformer::traces() const
    -> const std::vector<SchemaTransformerOperation> & {
  return this->operations;
}
