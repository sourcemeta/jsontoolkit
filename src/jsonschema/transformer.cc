#include <sourcemeta/jsontoolkit/jsonschema.h>

#include <utility> // std::move

sourcemeta::jsontoolkit::SchemaTransformer::SchemaTransformer(
    sourcemeta::jsontoolkit::JSON &schema)
    : data{schema} {}

auto sourcemeta::jsontoolkit::SchemaTransformer::schema() const
    -> const sourcemeta::jsontoolkit::JSON & {
  return this->data;
}

auto sourcemeta::jsontoolkit::SchemaTransformer::replace(
    const sourcemeta::jsontoolkit::JSON &value) -> void {
  this->data = value;
  this->operations.push_back(SchemaTransformerOperationReplace{
      sourcemeta::jsontoolkit::empty_pointer});
}

auto sourcemeta::jsontoolkit::SchemaTransformer::replace(
    sourcemeta::jsontoolkit::JSON &&value) -> void {
  this->data = std::move(value);
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
