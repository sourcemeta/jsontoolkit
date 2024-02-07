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
    const sourcemeta::jsontoolkit::Pointer &path,
    const sourcemeta::jsontoolkit::JSON &value) -> void {
  // TODO: Check that the path exists with an assert
  sourcemeta::jsontoolkit::set(this->data, path, value);
  this->operations.push_back(SchemaTransformerOperationReplace{path});
}

auto sourcemeta::jsontoolkit::SchemaTransformer::replace(
    const sourcemeta::jsontoolkit::Pointer &path,
    sourcemeta::jsontoolkit::JSON &&value) -> void {
  // TODO: Check that the path exists with an assert
  sourcemeta::jsontoolkit::set(this->data, path, std::move(value));
  this->operations.push_back(SchemaTransformerOperationReplace{path});
}

auto sourcemeta::jsontoolkit::SchemaTransformer::replace(
    const sourcemeta::jsontoolkit::JSON &value) -> void {
  this->replace(sourcemeta::jsontoolkit::empty_pointer, value);
}

auto sourcemeta::jsontoolkit::SchemaTransformer::replace(
    sourcemeta::jsontoolkit::JSON &&value) -> void {
  this->replace(sourcemeta::jsontoolkit::empty_pointer, std::move(value));
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
