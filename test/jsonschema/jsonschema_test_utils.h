#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_TEST_UTILS_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_TEST_UTILS_H_

#include <cassert>
#include <tuple>
#include <vector>

namespace {
std::string flatten_pointer(const auto &pointer) {
  std::string flat_representation;
  for (const auto &token : pointer) {
    if (token.is_property()) {
      flat_representation += "/" + token.to_property();
    } else if (token.is_index()) {
      flat_representation += "/" + std::to_string(token.to_index());
    }
  }
  return flat_representation;
}
} // namespace

#define FLATTEN_POINTER(pointer) flatten_pointer(pointer)

#define TO_POINTER(pointer_string)                                             \
  sourcemeta::jsontoolkit::to_pointer((pointer_string))

#define EXPECT_FRAME(frame, expected_type, reference, root_id,                 \
                     expected_pointer, expected_dialect, expected_base,        \
                     expected_relative_pointer)                                \
  EXPECT_TRUE((frame).contains({(expected_type), (reference)}));               \
  EXPECT_TRUE((frame).at({(expected_type), (reference)}).root.has_value());    \
  EXPECT_EQ((frame).at({(expected_type), (reference)}).root.value(),           \
            (root_id));                                                        \
  EXPECT_EQ((frame).at({(expected_type), (reference)}).pointer,                \
            TO_POINTER(expected_pointer));                                     \
  EXPECT_EQ((frame).at({(expected_type), (reference)}).dialect,                \
            (expected_dialect));                                               \
  EXPECT_EQ((frame).at({(expected_type), (reference)}).base, (expected_base)); \
  EXPECT_EQ((frame).at({(expected_type), (reference)}).relative_pointer,       \
            TO_POINTER(expected_relative_pointer));

#define EXPECT_FRAME_STATIC(frame, reference, root_id, expected_pointer,       \
                            expected_dialect, expected_base,                   \
                            expected_relative_pointer)                         \
  EXPECT_FRAME(frame, sourcemeta::jsontoolkit::ReferenceType::Static,          \
               reference, root_id, expected_pointer, expected_dialect,         \
               expected_base, expected_relative_pointer)

#define EXPECT_FRAME_STATIC_RESOURCE(frame, reference, root_id,                \
                                     expected_pointer, expected_dialect,       \
                                     expected_base, expected_relative_pointer) \
  EXPECT_FRAME_STATIC(frame, reference, root_id, expected_pointer,             \
                      expected_dialect, expected_base,                         \
                      expected_relative_pointer)                               \
  EXPECT_EQ(                                                                   \
      (frame)                                                                  \
          .at({sourcemeta::jsontoolkit::ReferenceType::Static, (reference)})   \
          .type,                                                               \
      sourcemeta::jsontoolkit::ReferenceEntryType::Resource);

#define EXPECT_FRAME_STATIC_POINTER(frame, reference, root_id,                 \
                                    expected_pointer, expected_dialect,        \
                                    expected_base, expected_relative_pointer)  \
  EXPECT_FRAME_STATIC(frame, reference, root_id, expected_pointer,             \
                      expected_dialect, expected_base,                         \
                      expected_relative_pointer)                               \
  EXPECT_EQ(                                                                   \
      (frame)                                                                  \
          .at({sourcemeta::jsontoolkit::ReferenceType::Static, (reference)})   \
          .type,                                                               \
      sourcemeta::jsontoolkit::ReferenceEntryType::Pointer);

#define EXPECT_FRAME_STATIC_ANCHOR(frame, reference, root_id,                  \
                                   expected_pointer, expected_dialect,         \
                                   expected_base, expected_relative_pointer)   \
  EXPECT_FRAME_STATIC(frame, reference, root_id, expected_pointer,             \
                      expected_dialect, expected_base,                         \
                      expected_relative_pointer)                               \
  EXPECT_EQ(                                                                   \
      (frame)                                                                  \
          .at({sourcemeta::jsontoolkit::ReferenceType::Static, (reference)})   \
          .type,                                                               \
      sourcemeta::jsontoolkit::ReferenceEntryType::Anchor);

#define EXPECT_FRAME_DYNAMIC_ANCHOR(frame, reference, root_id,                 \
                                    expected_pointer, expected_dialect,        \
                                    expected_base, expected_relative_pointer)  \
  EXPECT_FRAME_DYNAMIC(frame, reference, root_id, expected_pointer,            \
                       expected_dialect, expected_base,                        \
                       expected_relative_pointer)                              \
  EXPECT_EQ(                                                                   \
      (frame)                                                                  \
          .at({sourcemeta::jsontoolkit::ReferenceType::Dynamic, (reference)})  \
          .type,                                                               \
      sourcemeta::jsontoolkit::ReferenceEntryType::Anchor);

#define EXPECT_FRAME_DYNAMIC(frame, reference, root_id, expected_pointer,      \
                             expected_dialect, expected_base,                  \
                             expected_relative_pointer)                        \
  EXPECT_FRAME(frame, sourcemeta::jsontoolkit::ReferenceType::Dynamic,         \
               reference, root_id, expected_pointer, expected_dialect,         \
               expected_base, expected_relative_pointer)

#define __EXPECT_ANONYMOUS_FRAME(frame, expected_type, reference,              \
                                 expected_pointer, expected_dialect)           \
  EXPECT_TRUE((frame).contains({(expected_type), (reference)}));               \
  EXPECT_FALSE((frame).at({(expected_type), (reference)}).root.has_value());   \
  EXPECT_EQ((frame).at({(expected_type), (reference)}).pointer,                \
            TO_POINTER(expected_pointer));                                     \
  EXPECT_EQ((frame).at({(expected_type), (reference)}).dialect,                \
            (expected_dialect));

#define EXPECT_ANONYMOUS_FRAME_STATIC(frame, reference, expected_pointer,      \
                                      expected_dialect)                        \
  __EXPECT_ANONYMOUS_FRAME(frame,                                              \
                           sourcemeta::jsontoolkit::ReferenceType::Static,     \
                           reference, expected_pointer, expected_dialect)

#define EXPECT_ANONYMOUS_FRAME_STATIC_RESOURCE(                                \
    frame, reference, expected_pointer, expected_dialect)                      \
  __EXPECT_ANONYMOUS_FRAME(frame,                                              \
                           sourcemeta::jsontoolkit::ReferenceType::Static,     \
                           reference, expected_pointer, expected_dialect)      \
  EXPECT_EQ(                                                                   \
      (frame)                                                                  \
          .at({sourcemeta::jsontoolkit::ReferenceType::Static, (reference)})   \
          .type,                                                               \
      sourcemeta::jsontoolkit::ReferenceEntryType::Resource);

#define EXPECT_ANONYMOUS_FRAME_STATIC_POINTER(                                 \
    frame, reference, expected_pointer, expected_dialect)                      \
  __EXPECT_ANONYMOUS_FRAME(frame,                                              \
                           sourcemeta::jsontoolkit::ReferenceType::Static,     \
                           reference, expected_pointer, expected_dialect)      \
  EXPECT_EQ(                                                                   \
      (frame)                                                                  \
          .at({sourcemeta::jsontoolkit::ReferenceType::Static, (reference)})   \
          .type,                                                               \
      sourcemeta::jsontoolkit::ReferenceEntryType::Pointer);

#define EXPECT_ANONYMOUS_FRAME_STATIC_ANCHOR(                                  \
    frame, reference, expected_pointer, expected_dialect)                      \
  __EXPECT_ANONYMOUS_FRAME(frame,                                              \
                           sourcemeta::jsontoolkit::ReferenceType::Static,     \
                           reference, expected_pointer, expected_dialect)      \
  EXPECT_EQ(                                                                   \
      (frame)                                                                  \
          .at({sourcemeta::jsontoolkit::ReferenceType::Static, (reference)})   \
          .type,                                                               \
      sourcemeta::jsontoolkit::ReferenceEntryType::Anchor);

#define EXPECT_ANONYMOUS_FRAME_DYNAMIC_ANCHOR(                                 \
    frame, reference, expected_pointer, expected_dialect)                      \
  __EXPECT_ANONYMOUS_FRAME(frame,                                              \
                           sourcemeta::jsontoolkit::ReferenceType::Dynamic,    \
                           reference, expected_pointer, expected_dialect)      \
  EXPECT_EQ(                                                                   \
      (frame)                                                                  \
          .at({sourcemeta::jsontoolkit::ReferenceType::Dynamic, (reference)})  \
          .type,                                                               \
      sourcemeta::jsontoolkit::ReferenceEntryType::Anchor);

#define EXPECT_REFERENCE(references, expected_type, expected_pointer,          \
                         expected_uri, expected_base, expected_fragment)       \
  EXPECT_TRUE(                                                                 \
      (references).contains({expected_type, TO_POINTER(expected_pointer)}));   \
  EXPECT_EQ((references)                                                       \
                .at({expected_type, TO_POINTER(expected_pointer)})             \
                .destination,                                                  \
            (expected_uri));                                                   \
  EXPECT_EQ(                                                                   \
      (references).at({expected_type, TO_POINTER(expected_pointer)}).base,     \
      (expected_base));                                                        \
  EXPECT_EQ(                                                                   \
      (references).at({expected_type, TO_POINTER(expected_pointer)}).fragment, \
      (expected_fragment));

#define EXPECT_STATIC_REFERENCE(references, expected_pointer, expected_uri,    \
                                expected_base, expected_fragment)              \
  EXPECT_REFERENCE(references, sourcemeta::jsontoolkit::ReferenceType::Static, \
                   expected_pointer, expected_uri, expected_base,              \
                   expected_fragment)

#define EXPECT_DYNAMIC_REFERENCE(references, expected_pointer, expected_uri,   \
                                 expected_base, expected_fragment)             \
  EXPECT_REFERENCE(                                                            \
      references, sourcemeta::jsontoolkit::ReferenceType::Dynamic,             \
      expected_pointer, expected_uri, expected_base, expected_fragment)

inline auto FIRST_PROPERTY_IS(const sourcemeta::jsontoolkit::JSON &document,
                              const std::string &check) -> bool {
  assert(document.is_object());
  return document.as_object().cbegin()->first == check;
}

#define EVALUATE_WITH_TRACE(mode, schema_template, instance, count)            \
  std::vector<                                                                 \
      std::tuple<bool, sourcemeta::jsontoolkit::WeakPointer,                   \
                 sourcemeta::jsontoolkit::WeakPointer,                         \
                 sourcemeta::jsontoolkit::SchemaCompilerTemplate::value_type,  \
                 sourcemeta::jsontoolkit::JSON>>                               \
      trace_pre;                                                               \
  std::vector<                                                                 \
      std::tuple<bool, sourcemeta::jsontoolkit::WeakPointer,                   \
                 sourcemeta::jsontoolkit::WeakPointer,                         \
                 sourcemeta::jsontoolkit::SchemaCompilerTemplate::value_type,  \
                 sourcemeta::jsontoolkit::JSON>>                               \
      trace_post;                                                              \
  const auto result{sourcemeta::jsontoolkit::evaluate(                         \
      schema_template, instance,                                               \
      sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode::mode,             \
      [&trace_pre, &trace_post](                                               \
          const sourcemeta::jsontoolkit::SchemaCompilerEvaluationType type,    \
          const bool valid,                                                    \
          const sourcemeta::jsontoolkit::SchemaCompilerTemplate::value_type    \
              &step,                                                           \
          const sourcemeta::jsontoolkit::WeakPointer &evaluate_path,           \
          const sourcemeta::jsontoolkit::WeakPointer &instance_location,       \
          const sourcemeta::jsontoolkit::JSON &annotation) {                   \
        if (type ==                                                            \
            sourcemeta::jsontoolkit::SchemaCompilerEvaluationType::Pre) {      \
          trace_pre.push_back(                                                 \
              {valid, evaluate_path, instance_location, step, annotation});    \
        } else if (type == sourcemeta::jsontoolkit::                           \
                               SchemaCompilerEvaluationType::Post) {           \
          trace_post.push_back(                                                \
              {valid, evaluate_path, instance_location, step, annotation});    \
        }                                                                      \
      })};                                                                     \
  EXPECT_EQ(trace_pre.size(), count);                                          \
  EXPECT_EQ(trace_post.size(), count);

#define EVALUATE_WITH_TRACE_FAST_SUCCESS(schema_template, instance, count)     \
  EVALUATE_WITH_TRACE(Fast, schema_template, instance, count)                  \
  EXPECT_TRUE(result);

#define EVALUATE_WITH_TRACE_FAST_FAILURE(schema_template, instance, count)     \
  EVALUATE_WITH_TRACE(Fast, schema_template, instance, count)                  \
  EXPECT_FALSE(result);

#define EVALUATE_WITH_TRACE_EXHAUSTIVE_SUCCESS(schema_template, instance,      \
                                               count)                          \
  EVALUATE_WITH_TRACE(Exhaustive, schema_template, instance, count)            \
  EXPECT_TRUE(result);

#define EVALUATE_WITH_TRACE_EXHAUSTIVE_FAILURE(schema_template, instance,      \
                                               count)                          \
  EVALUATE_WITH_TRACE(Exhaustive, schema_template, instance, count)            \
  EXPECT_FALSE(result);

#define EVALUATE_TRACE_PRE(index, step_type, evaluate_path,                    \
                           expected_keyword_location,                          \
                           expected_instance_location)                         \
  EXPECT_TRUE(index < trace_pre.size());                                       \
  EXPECT_TRUE(std::get<0>(trace_pre.at(index)));                               \
  EXPECT_EQ(FLATTEN_POINTER(std::get<1>(trace_pre.at(index))), evaluate_path); \
  EXPECT_EQ(FLATTEN_POINTER(std::get<2>(trace_pre.at(index))),                 \
            expected_instance_location);                                       \
  EXPECT_TRUE(std::holds_alternative<                                          \
              sourcemeta::jsontoolkit::SchemaCompiler##step_type>(             \
      std::get<3>(trace_pre.at(index))));                                      \
  EXPECT_EQ(std::get<sourcemeta::jsontoolkit::SchemaCompiler##step_type>(      \
                std::get<3>(trace_pre.at(index)))                              \
                .keyword_location,                                             \
            expected_keyword_location);                                        \
  EXPECT_TRUE(std::get<4>(trace_pre.at(index)).is_null());

#define EVALUATE_TRACE_POST(index, step_type, evaluate_path,                   \
                            expected_keyword_location,                         \
                            expected_instance_location)                        \
  EXPECT_EQ(FLATTEN_POINTER(std::get<1>(trace_post.at(index))),                \
            evaluate_path);                                                    \
  EXPECT_EQ(FLATTEN_POINTER(std::get<2>(trace_post.at(index))),                \
            expected_instance_location);                                       \
  EXPECT_TRUE(std::holds_alternative<                                          \
              sourcemeta::jsontoolkit::SchemaCompiler##step_type>(             \
      std::get<3>(trace_post.at(index))));                                     \
  EXPECT_EQ(std::get<sourcemeta::jsontoolkit::SchemaCompiler##step_type>(      \
                std::get<3>(trace_post.at(index)))                             \
                .keyword_location,                                             \
            expected_keyword_location);

#define EVALUATE_TRACE_POST_SUCCESS(index, step_type, evaluate_path,           \
                                    keyword_location, instance_location)       \
  EXPECT_TRUE(index < trace_post.size());                                      \
  EXPECT_TRUE(std::get<0>(trace_post.at(index)));                              \
  EVALUATE_TRACE_POST(index, step_type, evaluate_path, keyword_location,       \
                      instance_location);                                      \
  EXPECT_TRUE(std::get<4>(trace_post.at(index)).is_null());

#define EVALUATE_TRACE_PRE_ANNOTATION(index, evaluate_path, keyword_location,  \
                                      instance_location)                       \
  if (std::holds_alternative<                                                  \
          sourcemeta::jsontoolkit::SchemaCompilerAnnotationBasenameToParent>(  \
          std::get<3>(trace_pre.at(index)))) {                                 \
    EVALUATE_TRACE_PRE(index, AnnotationBasenameToParent, evaluate_path,       \
                       keyword_location, instance_location);                   \
  } else if (std::holds_alternative<                                           \
                 sourcemeta::jsontoolkit::SchemaCompilerAnnotationToParent>(   \
                 std::get<3>(trace_pre.at(index)))) {                          \
    EVALUATE_TRACE_PRE(index, AnnotationToParent, evaluate_path,               \
                       keyword_location, instance_location);                   \
  } else if (std::holds_alternative<                                           \
                 sourcemeta::jsontoolkit::                                     \
                     SchemaCompilerAnnotationWhenArraySizeEqual>(              \
                 std::get<3>(trace_pre.at(index)))) {                          \
    EVALUATE_TRACE_PRE(index, AnnotationWhenArraySizeEqual, evaluate_path,     \
                       keyword_location, instance_location);                   \
  } else if (std::holds_alternative<                                           \
                 sourcemeta::jsontoolkit::                                     \
                     SchemaCompilerAnnotationWhenArraySizeGreater>(            \
                 std::get<3>(trace_pre.at(index)))) {                          \
    EVALUATE_TRACE_PRE(index, AnnotationWhenArraySizeGreater, evaluate_path,   \
                       keyword_location, instance_location);                   \
  } else {                                                                     \
    EVALUATE_TRACE_PRE(index, AnnotationEmit, evaluate_path, keyword_location, \
                       instance_location);                                     \
  }                                                                            \
  EXPECT_TRUE(std::get<4>(trace_pre.at(index)).is_null());

#define EVALUATE_TRACE_POST_ANNOTATION(index, evaluate_path, keyword_location, \
                                       instance_location, expected_annotation) \
  EXPECT_TRUE(index < trace_post.size());                                      \
  EXPECT_TRUE(std::get<0>(trace_post.at(index)));                              \
  if (std::holds_alternative<                                                  \
          sourcemeta::jsontoolkit::SchemaCompilerAnnotationBasenameToParent>(  \
          std::get<3>(trace_post.at(index)))) {                                \
    EVALUATE_TRACE_POST(index, AnnotationBasenameToParent, evaluate_path,      \
                        keyword_location, instance_location);                  \
  } else if (std::holds_alternative<                                           \
                 sourcemeta::jsontoolkit::SchemaCompilerAnnotationToParent>(   \
                 std::get<3>(trace_post.at(index)))) {                         \
    EVALUATE_TRACE_POST(index, AnnotationToParent, evaluate_path,              \
                        keyword_location, instance_location);                  \
  } else if (std::holds_alternative<                                           \
                 sourcemeta::jsontoolkit::                                     \
                     SchemaCompilerAnnotationWhenArraySizeEqual>(              \
                 std::get<3>(trace_post.at(index)))) {                         \
    EVALUATE_TRACE_POST(index, AnnotationWhenArraySizeEqual, evaluate_path,    \
                        keyword_location, instance_location);                  \
  } else if (std::holds_alternative<                                           \
                 sourcemeta::jsontoolkit::                                     \
                     SchemaCompilerAnnotationWhenArraySizeGreater>(            \
                 std::get<3>(trace_post.at(index)))) {                         \
    EVALUATE_TRACE_POST(index, AnnotationWhenArraySizeGreater, evaluate_path,  \
                        keyword_location, instance_location);                  \
  } else {                                                                     \
    EVALUATE_TRACE_POST(index, AnnotationEmit, evaluate_path,                  \
                        keyword_location, instance_location);                  \
  }                                                                            \
  EXPECT_EQ(std::get<4>(trace_post.at(index)),                                 \
            sourcemeta::jsontoolkit::JSON(expected_annotation));

#define EVALUATE_TRACE_POST_FAILURE(index, step_type, evaluate_path,           \
                                    keyword_location, instance_location)       \
  EXPECT_TRUE(index < trace_post.size());                                      \
  EXPECT_FALSE(std::get<0>(trace_post.at(index)));                             \
  EVALUATE_TRACE_POST(index, step_type, evaluate_path, keyword_location,       \
                      instance_location);                                      \
  EXPECT_TRUE(std::get<4>(trace_post.at(index)).is_null());

#define EVALUATE_TRACE_POST_DESCRIBE(instance, index, message)                 \
  EXPECT_EQ(sourcemeta::jsontoolkit::describe(                                 \
                std::get<0>(trace_post.at(index)),                             \
                std::get<3>(trace_post.at(index)),                             \
                std::get<1>(trace_post.at(index)),                             \
                std::get<2>(trace_post.at(index)), instance,                   \
                std::get<4>(trace_post.at(index))),                            \
            (message));

#endif
