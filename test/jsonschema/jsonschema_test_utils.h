#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_TEST_UTILS_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_TEST_UTILS_H_

#define TO_POINTER(pointer_string)                                             \
  sourcemeta::jsontoolkit::to_pointer((pointer_string))

#define EXPECT_FRAME(frame, reference, root_id, expected_pointer,              \
                     expected_dialect)                                         \
  EXPECT_TRUE((frame).defines((reference)));                                   \
  EXPECT_TRUE((frame).root((reference)).has_value());                          \
  EXPECT_EQ((frame).root((reference)).value(), (root_id));                     \
  EXPECT_EQ((frame).pointer((reference)), TO_POINTER(expected_pointer));       \
  EXPECT_EQ((frame).dialect((reference)), (expected_dialect));

#define EXPECT_ANONYMOUS_FRAME(frame, reference, expected_pointer,             \
                               expected_dialect)                               \
  EXPECT_TRUE((frame).defines((reference)));                                   \
  EXPECT_FALSE((frame).root((reference)).has_value());                         \
  EXPECT_EQ((frame).pointer((reference)), TO_POINTER(expected_pointer));       \
  EXPECT_EQ((frame).dialect((reference)), (expected_dialect));

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
