#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>

TEST(JSONPointer_empty_pointer, is_empty) {
  EXPECT_TRUE(sourcemeta::jsontoolkit::empty_pointer.empty());
  EXPECT_EQ(sourcemeta::jsontoolkit::empty_pointer,
            sourcemeta::jsontoolkit::Pointer{});
}
