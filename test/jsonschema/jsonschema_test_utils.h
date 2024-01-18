#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_TEST_UTILS_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_TEST_UTILS_H_

#define TO_POINTER(pointer_string)                                             \
  sourcemeta::jsontoolkit::to_pointer((pointer_string))

#define EXPECT_FRAME(frame, expected_type, reference, root_id,                 \
                     expected_pointer, expected_dialect)                       \
  EXPECT_TRUE((frame).defines((expected_type), (reference)));                  \
  EXPECT_TRUE((frame).root((expected_type), (reference)).has_value());         \
  EXPECT_EQ((frame).root((expected_type), (reference)).value(), (root_id));    \
  EXPECT_EQ((frame).pointer((expected_type), (reference)),                     \
            TO_POINTER(expected_pointer));                                     \
  EXPECT_EQ((frame).dialect((expected_type), (reference)), (expected_dialect));

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
  EXPECT_TRUE((frame).defines((expected_type), (reference)));                  \
  EXPECT_FALSE((frame).root((expected_type), (reference)).has_value());        \
  EXPECT_EQ((frame).pointer((expected_type), (reference)),                     \
            TO_POINTER(expected_pointer));                                     \
  EXPECT_EQ((frame).dialect((expected_type), (reference)), (expected_dialect));

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
  EXPECT_EQ(                                                                   \
      std::get<0>(                                                             \
          (references).at({TO_POINTER(expected_pointer), expected_type})),     \
      (expected_uri));                                                         \
  EXPECT_EQ(                                                                   \
      std::get<1>(                                                             \
          (references).at({TO_POINTER(expected_pointer), expected_type})),     \
      (expected_base));                                                        \
  EXPECT_EQ(                                                                   \
      std::get<2>(                                                             \
          (references).at({TO_POINTER(expected_pointer), expected_type})),     \
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
