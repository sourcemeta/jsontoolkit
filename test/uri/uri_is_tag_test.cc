#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/uri.h>

TEST(URI_is_tag, tag) {
  const sourcemeta::jsontoolkit::URI uri{"tag:yaml.org,2002:int"};
  EXPECT_TRUE(uri.is_tag());
}

TEST(URI_is_tag, urn) {
  const sourcemeta::jsontoolkit::URI uri{"urn:example:schema"};
  EXPECT_FALSE(uri.is_tag());
}

TEST(URI_is_tag, https_url) {
  const sourcemeta::jsontoolkit::URI uri{"https://www.sourcemeta.com"};
  EXPECT_FALSE(uri.is_tag());
}

TEST(URI_is_tag, relative) {
  const sourcemeta::jsontoolkit::URI uri{"../foo"};
  EXPECT_FALSE(uri.is_tag());
}
