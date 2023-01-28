#include <jsontoolkit/json.h>
#include <jsontoolkit/jsonschema.h>

#include <cassert> // assert
#include <string>  // std::string

sourcemeta::jsontoolkit::SchemaWalker::SchemaWalker(
    const sourcemeta::jsontoolkit::Value &input,
    const sourcemeta::jsontoolkit::schema_walker_t &walker,
    const sourcemeta::jsontoolkit::schema_resolver_t &resolver,
    const std::optional<std::string> &default_metaschema) {
  const std::optional<std::string> metaschema{
      sourcemeta::jsontoolkit::metaschema(input)};

  // If the given schema declares no metaschema and the user didn't
  // not pass a default, then there is nothing we can do. We know
  // the current schema is a subschema, but cannot walk any further.
  if (!metaschema.has_value() && !default_metaschema.has_value()) {
    this->subschemas.push_back(input);
  } else {
    const std::string &effective_metaschema{metaschema.has_value()
                                                ? metaschema.value()
                                                : default_metaschema.value()};
    this->walk(input, walker, resolver, effective_metaschema);
  }
}

auto sourcemeta::jsontoolkit::SchemaWalker::walk(
    const sourcemeta::jsontoolkit::Value &subschema,
    const sourcemeta::jsontoolkit::schema_walker_t &walker,
    const sourcemeta::jsontoolkit::schema_resolver_t &resolver,
    const std::string &metaschema) -> void {
  this->subschemas.push_back(subschema);

  // We can't recurse any further
  if (!sourcemeta::jsontoolkit::is_object(subschema)) {
    return;
  }

  // Recalculate the metaschema and its vocabularies at every step.
  // This is needed for correctly traversing through schemas that
  // contains subschemas that use different metaschemas/vocabularies.
  // This is often the case for bundled schemas.
  const std::optional<std::string> current_metaschema{
      sourcemeta::jsontoolkit::metaschema(subschema)};
  const std::string &new_metaschema{
      current_metaschema.has_value() ? current_metaschema.value() : metaschema};
  const std::unordered_map<std::string, bool> vocabularies{
      sourcemeta::jsontoolkit::vocabularies(subschema, resolver, new_metaschema)
          .get()};

  for (const auto &pair : sourcemeta::jsontoolkit::object_iterator(subschema)) {
    switch (walker(sourcemeta::jsontoolkit::key(pair), vocabularies)) {
    case sourcemeta::jsontoolkit::schema_walker_strategy_t::Value:
      this->walk_schema(sourcemeta::jsontoolkit::value(pair), walker, resolver,
                        new_metaschema);
      break;
    case sourcemeta::jsontoolkit::schema_walker_strategy_t::Elements:
      this->walk_array(sourcemeta::jsontoolkit::value(pair), walker, resolver,
                       new_metaschema);
      break;
    case sourcemeta::jsontoolkit::schema_walker_strategy_t::Members:
      this->walk_object(sourcemeta::jsontoolkit::value(pair), walker, resolver,
                        new_metaschema);
      break;
    case sourcemeta::jsontoolkit::schema_walker_strategy_t::ValueOrElements:
      if (sourcemeta::jsontoolkit::is_array(
              sourcemeta::jsontoolkit::value(pair))) {
        this->walk_array(sourcemeta::jsontoolkit::value(pair), walker, resolver,
                         new_metaschema);
      } else {
        this->walk_schema(sourcemeta::jsontoolkit::value(pair), walker,
                          resolver, new_metaschema);
      }
      break;
    case sourcemeta::jsontoolkit::schema_walker_strategy_t::ElementsOrMembers:
      if (sourcemeta::jsontoolkit::is_array(
              sourcemeta::jsontoolkit::value(pair))) {
        this->walk_array(sourcemeta::jsontoolkit::value(pair), walker, resolver,
                         new_metaschema);
      } else {
        this->walk_object(sourcemeta::jsontoolkit::value(pair), walker,
                          resolver, new_metaschema);
      }
      break;
    default:
      break;
    }
  }
}

auto sourcemeta::jsontoolkit::SchemaWalker::walk_array(
    const Value &array, const schema_walker_t &walker,
    const sourcemeta::jsontoolkit::schema_resolver_t &resolver,
    const std::string &metaschema) -> void {
  if (!sourcemeta::jsontoolkit::is_array(array)) {
    return;
  }

  for (const auto &element : sourcemeta::jsontoolkit::array_iterator(array)) {
    this->walk(element, walker, resolver, metaschema);
  }
}

auto sourcemeta::jsontoolkit::SchemaWalker::walk_object(
    const Value &object, const schema_walker_t &walker,
    const sourcemeta::jsontoolkit::schema_resolver_t &resolver,
    const std::string &metaschema) -> void {
  if (!sourcemeta::jsontoolkit::is_object(object)) {
    return;
  }

  for (const auto &pair : sourcemeta::jsontoolkit::object_iterator(object)) {
    this->walk(sourcemeta::jsontoolkit::value(pair), walker, resolver,
               metaschema);
  }
}

auto sourcemeta::jsontoolkit::SchemaWalker::walk_schema(
    const Value &schema, const schema_walker_t &walker,
    const sourcemeta::jsontoolkit::schema_resolver_t &resolver,
    const std::string &metaschema) -> void {
  if (!sourcemeta::jsontoolkit::is_object(schema) &&
      !sourcemeta::jsontoolkit::is_boolean(schema)) {
    return;
  }

  this->walk(schema, walker, resolver, metaschema);
}
