#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_TEST_UTILS_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_TEST_UTILS_H_

#define TO_POINTER(pointer_string)                                             \
  sourcemeta::jsontoolkit::to_pointer((pointer_string))

#define EXPECT_FRAME(frame, expected_type, reference, root_id,                 \
                     expected_pointer, expected_dialect)                       \
  EXPECT_TRUE((frame).contains({(expected_type), (reference)}));               \
  EXPECT_TRUE((frame).at({(expected_type), (reference)}).root.has_value());    \
  EXPECT_EQ((frame).at({(expected_type), (reference)}).root.value(),           \
            (root_id));                                                        \
  EXPECT_EQ((frame).at({(expected_type), (reference)}).pointer,                \
            TO_POINTER(expected_pointer));                                     \
  EXPECT_EQ((frame).at({(expected_type), (reference)}).dialect,                \
            (expected_dialect));

#define EXPECT_FRAME_STATIC(frame, reference, root_id, expected_pointer,       \
                            expected_dialect)                                  \
  EXPECT_FRAME(frame, sourcemeta::jsontoolkit::ReferenceType::Static,          \
               reference, root_id, expected_pointer, expected_dialect)

#define EXPECT_FRAME_DYNAMIC(frame, reference, root_id, expected_pointer,      \
                             expected_dialect)                                 \
  EXPECT_FRAME(frame, sourcemeta::jsontoolkit::ReferenceType::Dynamic,         \
               reference, root_id, expected_pointer, expected_dialect)

#define EXPECT_ANONYMOUS_FRAME(frame, expected_type, reference,                \
                               expected_pointer, expected_dialect)             \
  EXPECT_TRUE((frame).contains({(expected_type), (reference)}));               \
  EXPECT_FALSE((frame).at({(expected_type), (reference)}).root.has_value());   \
  EXPECT_EQ((frame).at({(expected_type), (reference)}).pointer,                \
            TO_POINTER(expected_pointer));                                     \
  EXPECT_EQ((frame).at({(expected_type), (reference)}).dialect,                \
            (expected_dialect));

#define EXPECT_ANONYMOUS_FRAME_STATIC(frame, reference, expected_pointer,      \
                                      expected_dialect)                        \
  EXPECT_ANONYMOUS_FRAME(frame,                                                \
                         sourcemeta::jsontoolkit::ReferenceType::Static,       \
                         reference, expected_pointer, expected_dialect)

#define EXPECT_ANONYMOUS_FRAME_DYNAMIC(frame, reference, expected_pointer,     \
                                       expected_dialect)                       \
  EXPECT_ANONYMOUS_FRAME(frame,                                                \
                         sourcemeta::jsontoolkit::ReferenceType::Dynamic,      \
                         reference, expected_pointer, expected_dialect)

#define EXPECT_REFERENCE(references, expected_type, expected_pointer,          \
                         expected_uri, expected_base, expected_fragment)       \
  EXPECT_TRUE(                                                                 \
      (references).contains({TO_POINTER(expected_pointer), expected_type}));   \
  EXPECT_EQ((references)                                                       \
                .at({TO_POINTER(expected_pointer), expected_type})             \
                .destination,                                                  \
            (expected_uri));                                                   \
  EXPECT_EQ(                                                                   \
      (references).at({TO_POINTER(expected_pointer), expected_type}).base,     \
      (expected_base));                                                        \
  EXPECT_EQ(                                                                   \
      (references).at({TO_POINTER(expected_pointer), expected_type}).fragment, \
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
