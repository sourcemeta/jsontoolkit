#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_TEST_UTILS_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_TEST_UTILS_H_

#define TO_POINTER(pointer_string)                                             \
  sourcemeta::jsontoolkit::to_pointer(                                         \
      sourcemeta::jsontoolkit::JSON((pointer_string)))

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
                         expected_uri)                                         \
  EXPECT_TRUE((references).contains(TO_POINTER(expected_pointer)));            \
  EXPECT_EQ((references).at(TO_POINTER(expected_pointer)).first,               \
            (expected_type));                                                  \
  EXPECT_EQ((references).at(TO_POINTER(expected_pointer)).second,              \
            (expected_uri));

#define EXPECT_STATIC_REFERENCE(references, expected_pointer, expected_uri)    \
  EXPECT_REFERENCE(references, sourcemeta::jsontoolkit::ReferenceType::Static, \
                   expected_pointer, expected_uri)

#endif
