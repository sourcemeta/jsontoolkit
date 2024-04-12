#include <sourcemeta/jsontoolkit/jsonschema.h>
#include <sourcemeta/jsontoolkit/jsonschema_compile.h>

#include <cassert> // assert
#include <utility> // std::move

namespace {

auto compile_subschema(
    const sourcemeta::jsontoolkit::SchemaCompilerContext &context)
    -> sourcemeta::jsontoolkit::SchemaCompilerTemplate {
  using namespace sourcemeta::jsontoolkit;
  assert(is_schema(context.schema));

  // Handle boolean schemas earlier on, as nobody should be able to
  // override what these mean.
  if (context.schema.is_boolean()) {
    if (context.schema.to_boolean()) {
      return {};
    } else {
      return {SchemaCompilerAssertionFail{context.instance_location,
                                          context.schema_location,
                                          SchemaCompilerValueNone{},
                                          {}}};
    }
  }

  SchemaCompilerTemplate steps;
  for (const auto &entry :
       SchemaKeywordIterator{context.schema, context.walker, context.resolver,
                             context.default_dialect}) {
    assert(entry.pointer.back().is_property());
    const auto &keyword{entry.pointer.back().to_property()};
    for (auto &&step : context.compiler(
             {keyword, context.schema, entry.vocabularies, entry.value,
              context.schema_location.concat({keyword}),
              context.instance_location, context.frame, context.references,
              context.walker, context.resolver, context.compiler,
              context.default_dialect})) {
      steps.push_back(std::move(step));
    }
  }

  return steps;
}

} // namespace

namespace sourcemeta::jsontoolkit {

auto compile(const JSON &schema, const SchemaWalker &walker,
             const SchemaResolver &resolver, const SchemaCompiler &compiler,
             const std::optional<std::string> &default_dialect)
    -> SchemaCompilerTemplate {
  assert(is_schema(schema));

  // Make sure the input schema is bundled, otherwise we won't be able to
  // resolve remote references here
  const JSON result{bundle(schema, walker, resolver, default_dialect).get()};

  // Perform framing to resolve references later on
  ReferenceFrame frame;
  ReferenceMap references;
  sourcemeta::jsontoolkit::frame(result, frame, references, walker, resolver,
                                 default_dialect)
      .wait();

  const std::string base{
      sourcemeta::jsontoolkit::id(schema, resolver, default_dialect)
          .get()
          .value_or("")};
  assert(frame.contains({ReferenceType::Static, base}));
  const auto root_frame_entry{frame.at({ReferenceType::Static, base})};

  return compile_subschema(
      {"",
       result,
       vocabularies(schema, resolver, default_dialect).get(),
       result,
       {},
       {},
       frame,
       references,
       walker,
       resolver,
       compiler,
       root_frame_entry.dialect});
}

auto compile(const SchemaCompilerContext &context,
             const Pointer &pointer) -> SchemaCompilerTemplate {
  return compile_subschema(
      {context.keyword, get(context.value, pointer), context.vocabularies,
       context.value, context.schema_location.concat(pointer),
       context.instance_location, context.frame, context.references,
       context.walker, context.resolver, context.compiler,
       context.default_dialect});
}

} // namespace sourcemeta::jsontoolkit
