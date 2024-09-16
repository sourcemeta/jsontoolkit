#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_COMPILE_HELPERS_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_COMPILE_HELPERS_H_

#include <sourcemeta/jsontoolkit/jsonschema_compile.h>

#include <cassert> // assert
#include <numeric> // std::accumulate
#include <utility> // std::declval, std::move

namespace sourcemeta::jsontoolkit {

static const SchemaCompilerDynamicContext relative_dynamic_context{
    "", empty_pointer, empty_pointer};

// Instantiate a value-oriented step
template <typename Step>
auto make(const bool report, const SchemaCompilerContext &context,
          const SchemaCompilerSchemaContext &schema_context,
          const SchemaCompilerDynamicContext &dynamic_context,
          // Take the value type from the "type" property of the step struct
          decltype(std::declval<Step>().value) &&value) -> Step {
  const auto relative_schema_location{
      dynamic_context.keyword.empty()
          ? dynamic_context.base_schema_location
          : dynamic_context.base_schema_location.concat(
                {dynamic_context.keyword})};
  return {
      relative_schema_location,
      dynamic_context.base_instance_location,
      to_uri(schema_context.relative_pointer, schema_context.base).recompose(),
      schema_context.base.recompose(),
      context.uses_dynamic_scopes,
      report,
      std::move(value),
      relative_schema_location.size()};
}

// Instantiate an applicator step
template <typename Step>
auto make(const bool report, const SchemaCompilerContext &context,
          const SchemaCompilerSchemaContext &schema_context,
          const SchemaCompilerDynamicContext &dynamic_context,
          // Take the value type from the "value" property of the step struct
          decltype(std::declval<Step>().value) &&value,
          SchemaCompilerTemplate &&children) -> Step {
  const auto relative_schema_location{
      dynamic_context.keyword.empty()
          ? dynamic_context.base_schema_location
          : dynamic_context.base_schema_location.concat(
                {dynamic_context.keyword})};

  const std::size_t evaluate_path_depth = std::accumulate(
      children.cbegin(), children.cend(), relative_schema_location.size(),
      [](const auto accumulator, const auto &child) {
        return accumulator +
               std::visit([](auto &&step) { return step.evaluate_path_depth; },
                          child);
      });

  return {
      relative_schema_location,
      dynamic_context.base_instance_location,
      to_uri(schema_context.relative_pointer, schema_context.base).recompose(),
      schema_context.base.recompose(),
      context.uses_dynamic_scopes,
      report,
      std::move(value),
      std::move(children),
      evaluate_path_depth};
}

template <typename Type, typename Step>
auto unroll(const SchemaCompilerDynamicContext &dynamic_context,
            const Step &step,
            const Pointer &base_instance_location = empty_pointer) -> Type {
  assert(std::holds_alternative<Type>(step));
  const auto relative_schema_location{
      dynamic_context.keyword.empty()
          ? std::get<Type>(step).relative_schema_location
          : dynamic_context.base_schema_location
                .concat({dynamic_context.keyword})
                .concat(std::get<Type>(step).relative_schema_location)};
  return {relative_schema_location,
          base_instance_location.concat(
              std::get<Type>(step).relative_instance_location),
          std::get<Type>(step).keyword_location,
          std::get<Type>(step).schema_resource,
          std::get<Type>(step).dynamic,
          std::get<Type>(step).report,
          std::get<Type>(step).value,
          relative_schema_location.size()};
}

} // namespace sourcemeta::jsontoolkit

#endif
