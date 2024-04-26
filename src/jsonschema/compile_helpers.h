#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_COMPILE_HELPERS_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_COMPILE_HELPERS_H_

#include <sourcemeta/jsontoolkit/jsonschema_compile.h>

namespace sourcemeta::jsontoolkit {

// Prepare a compiler context for applicator use
inline auto
applicate(const SchemaCompilerContext &context) -> SchemaCompilerContext {
  return {"",
          context.schema,
          context.vocabularies,
          context.value,
          context.root,
          context.base,
          context.relative_pointer,
          empty_pointer,
          empty_pointer,
          context.frame,
          context.references,
          context.walker,
          context.resolver,
          context.compiler,
          context.default_dialect};
}

inline auto
keyword_location(const SchemaCompilerContext &context) -> std::string {
  return to_uri(context.relative_pointer, context.base).recompose();
}

inline auto
relative_schema_location(const SchemaCompilerContext &context) -> Pointer {
  return context.keyword.empty()
             ? context.base_schema_location
             : context.base_schema_location.concat({context.keyword});
}

// Instantiate a value-oriented step
template <typename Step, typename ValueType>
auto make(const SchemaCompilerContext &context, ValueType &&type,
          SchemaCompilerTemplate &&condition,
          const SchemaCompilerTargetType target_type =
              SchemaCompilerTargetType::Instance,
          const std::optional<Pointer> &target_location = std::nullopt)
    -> Step {
  return {{target_type, target_location.value_or(empty_pointer)},
          relative_schema_location(context),
          context.base_instance_location,
          keyword_location(context),
          std::move(type),
          std::move(condition)};
}

// Instantiate an applicator step
template <typename Step>
auto make(const SchemaCompilerContext &context,
          SchemaCompilerTemplate &&children,
          SchemaCompilerTemplate &&condition) -> Step {
  return {{SchemaCompilerTargetType::Instance, empty_pointer},
          relative_schema_location(context),
          context.base_instance_location,
          keyword_location(context),
          std::move(children),
          std::move(condition)};
}

// Instantiate a control step
template <typename Step>
auto make(const SchemaCompilerContext &context, const std::size_t id,
          SchemaCompilerTemplate &&children) -> Step {
  return {relative_schema_location(context), context.base_instance_location,
          keyword_location(context), id, std::move(children)};
}

} // namespace sourcemeta::jsontoolkit

#endif
