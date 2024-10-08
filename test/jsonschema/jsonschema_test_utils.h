#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_TEST_UTILS_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_TEST_UTILS_H_

#include <cassert>
#include <tuple>
#include <vector>

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

#endif
