#ifndef SOURCEMETA_JSONTOOLKIT_ALTERSCHEMA_TEST_UTILS_H_
#define SOURCEMETA_JSONTOOLKIT_ALTERSCHEMA_TEST_UTILS_H_

#include <sourcemeta/jsontoolkit/alterschema.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#define LINT_AND_FIX_FOR_READABILITY(document)                                 \
  sourcemeta::jsontoolkit::SchemaTransformer bundle;                           \
  sourcemeta::jsontoolkit::add(                                                \
      bundle, sourcemeta::jsontoolkit::AlterSchemaCategory::AntiPattern);      \
  sourcemeta::jsontoolkit::add(                                                \
      bundle, sourcemeta::jsontoolkit::AlterSchemaCategory::Simplify);         \
  sourcemeta::jsontoolkit::add(                                                \
      bundle, sourcemeta::jsontoolkit::AlterSchemaCategory::Superfluous);      \
  sourcemeta::jsontoolkit::add(                                                \
      bundle, sourcemeta::jsontoolkit::AlterSchemaCategory::Redundant);        \
  sourcemeta::jsontoolkit::add(                                                \
      bundle, sourcemeta::jsontoolkit::AlterSchemaCategory::SyntaxSugar);      \
  bundle.apply(document, sourcemeta::jsontoolkit::default_schema_walker,       \
               sourcemeta::jsontoolkit::official_resolver);

#define LINT_AND_FIX_FOR_ANALYSIS(document)                                    \
  sourcemeta::jsontoolkit::SchemaTransformer bundle;                           \
  sourcemeta::jsontoolkit::add(                                                \
      bundle, sourcemeta::jsontoolkit::AlterSchemaCategory::AntiPattern);      \
  sourcemeta::jsontoolkit::add(                                                \
      bundle, sourcemeta::jsontoolkit::AlterSchemaCategory::Simplify);         \
  sourcemeta::jsontoolkit::add(                                                \
      bundle, sourcemeta::jsontoolkit::AlterSchemaCategory::Superfluous);      \
  sourcemeta::jsontoolkit::add(                                                \
      bundle, sourcemeta::jsontoolkit::AlterSchemaCategory::Implicit);         \
  sourcemeta::jsontoolkit::add(                                                \
      bundle, sourcemeta::jsontoolkit::AlterSchemaCategory::Desugar);          \
  bundle.apply(document, sourcemeta::jsontoolkit::default_schema_walker,       \
               sourcemeta::jsontoolkit::official_resolver);

#endif
