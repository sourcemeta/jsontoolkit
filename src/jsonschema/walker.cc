#include <jsontoolkit/json.h>
#include <jsontoolkit/jsonschema/walker.h>

#include <cassert> // assert
#include <string>  // std::string

sourcemeta::jsontoolkit::SchemaWalker::SchemaWalker(
    const sourcemeta::jsontoolkit::Value &input,
    const sourcemeta::jsontoolkit::schema_walker_t &walker,
    const std::unordered_map<std::string, bool> &vocabularies) {
  this->walk(input, walker, vocabularies);
}

auto sourcemeta::jsontoolkit::SchemaWalker::walk(
    const sourcemeta::jsontoolkit::Value &subschema,
    const sourcemeta::jsontoolkit::schema_walker_t &walker,
    const std::unordered_map<std::string, bool> &vocabularies) -> void {
  this->subschemas.push_back(subschema);

  // We can't recurse any further
  if (!sourcemeta::jsontoolkit::is_object(subschema)) {
    return;
  }

  for (const auto &pair : sourcemeta::jsontoolkit::object_iterator(subschema)) {
    switch (walker(sourcemeta::jsontoolkit::key(pair), vocabularies)) {
    case sourcemeta::jsontoolkit::schema_walker_strategy_t::Value:
      this->walk_schema(sourcemeta::jsontoolkit::value(pair), walker,
                        vocabularies);
      break;
    case sourcemeta::jsontoolkit::schema_walker_strategy_t::Elements:
      this->walk_array(sourcemeta::jsontoolkit::value(pair), walker,
                       vocabularies);
      break;
    case sourcemeta::jsontoolkit::schema_walker_strategy_t::Members:
      this->walk_object(sourcemeta::jsontoolkit::value(pair), walker,
                        vocabularies);
      break;
    case sourcemeta::jsontoolkit::schema_walker_strategy_t::ValueOrElements:
      if (sourcemeta::jsontoolkit::is_array(
              sourcemeta::jsontoolkit::value(pair))) {
        this->walk_array(sourcemeta::jsontoolkit::value(pair), walker,
                         vocabularies);
      } else {
        this->walk_schema(sourcemeta::jsontoolkit::value(pair), walker,
                          vocabularies);
      }
      break;
    case sourcemeta::jsontoolkit::schema_walker_strategy_t::ElementsOrMembers:
      if (sourcemeta::jsontoolkit::is_array(
              sourcemeta::jsontoolkit::value(pair))) {
        this->walk_array(sourcemeta::jsontoolkit::value(pair), walker,
                         vocabularies);
      } else {
        this->walk_object(sourcemeta::jsontoolkit::value(pair), walker,
                          vocabularies);
      }
      break;
    default:
      break;
    }
  }
}

auto sourcemeta::jsontoolkit::SchemaWalker::walk_array(
    const Value &array, const schema_walker_t &walker,
    const std::unordered_map<std::string, bool> &vocabularies) -> void {
  if (!sourcemeta::jsontoolkit::is_array(array)) {
    return;
  }

  for (const auto &element : sourcemeta::jsontoolkit::array_iterator(array)) {
    this->walk(element, walker, vocabularies);
  }
}

auto sourcemeta::jsontoolkit::SchemaWalker::walk_object(
    const Value &object, const schema_walker_t &walker,
    const std::unordered_map<std::string, bool> &vocabularies) -> void {
  if (!sourcemeta::jsontoolkit::is_object(object)) {
    return;
  }

  for (const auto &pair : sourcemeta::jsontoolkit::object_iterator(object)) {
    this->walk(sourcemeta::jsontoolkit::value(pair), walker, vocabularies);
  }
}

auto sourcemeta::jsontoolkit::SchemaWalker::walk_schema(
    const Value &schema, const schema_walker_t &walker,
    const std::unordered_map<std::string, bool> &vocabularies) -> void {
  if (!sourcemeta::jsontoolkit::is_object(schema) &&
      !sourcemeta::jsontoolkit::is_boolean(schema)) {
    return;
  }

  this->walk(schema, walker, vocabularies);
}
