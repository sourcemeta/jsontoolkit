#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/uri.h>

TEST(URI_fragment, https_no_fragment) {
  const sourcemeta::jsontoolkit::URI uri{"https://example.com/foo"};
  EXPECT_FALSE(uri.fragment().has_value());
}

TEST(URI_fragment, https_with_fragment) {
  const sourcemeta::jsontoolkit::URI uri{"https://example.com/#foo"};
  EXPECT_TRUE(uri.fragment().has_value());
  EXPECT_EQ(uri.fragment().value(), "foo");
}

TEST(URI_fragment, https_with_escaped_jsonpointer) {
  const sourcemeta::jsontoolkit::URI uri{"https://example.com/#/c%25d"};
  EXPECT_TRUE(uri.fragment().has_value());
  EXPECT_EQ(uri.fragment().value(), "/c%25d");
}

TEST(URI_fragment, invalid_fragment_with_pointer) {
  EXPECT_THROW(sourcemeta::jsontoolkit::URI{"#foo#/$defs/bar"},
               sourcemeta::jsontoolkit::URIParseError);
}
