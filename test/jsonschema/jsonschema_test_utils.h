#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_TEST_UTILS_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_TEST_UTILS_H_

#define EXPECT_FRAME(frame, reference, root_id, expected_pointer,              \
                     expected_dialect)                                         \
  EXPECT_TRUE((frame).defines((reference)));                                   \
  EXPECT_TRUE((frame).root((reference)).has_value());                          \
  EXPECT_EQ((frame).root((reference)).value(), (root_id));                     \
  EXPECT_EQ((frame).pointer((reference)),                                      \
            sourcemeta::jsontoolkit::to_pointer(                               \
                sourcemeta::jsontoolkit::JSON((expected_pointer))));           \
  EXPECT_EQ((frame).dialect((reference)), (expected_dialect));

#define EXPECT_ANONYMOUS_FRAME(frame, reference, expected_pointer,             \
                               expected_dialect)                               \
  EXPECT_TRUE((frame).defines((reference)));                                   \
  EXPECT_FALSE((frame).root((reference)).has_value());                         \
  EXPECT_EQ((frame).pointer((reference)),                                      \
            sourcemeta::jsontoolkit::to_pointer(                               \
                sourcemeta::jsontoolkit::JSON((expected_pointer))));           \
  EXPECT_EQ((frame).dialect((reference)), (expected_dialect));

#endif
