#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/uri.h>

TEST(URI_recompose, example_1) {
  const sourcemeta::jsontoolkit::URI uri{"https://example.com/foo"};
  EXPECT_EQ(uri.recompose(), "https://example.com/foo");
}

TEST(URI_recompose, example_2) {
  const sourcemeta::jsontoolkit::URI uri{"https://example.com/foo/../bar"};
  EXPECT_EQ(uri.recompose(), "https://example.com/bar");
}

TEST(URI_recompose, urn) {
  const sourcemeta::jsontoolkit::URI uri{"urn:example:schema"};
  EXPECT_EQ(uri.recompose(), "urn:example:schema");
}

TEST(URI_recompose, https_with_empty_fragment) {
  const sourcemeta::jsontoolkit::URI uri{"https://example.com/foo#"};
  EXPECT_EQ(uri.recompose(), "https://example.com/foo#");
}

TEST(URI_recompose, http_trailing_slash) {
  const sourcemeta::jsontoolkit::URI uri{"http://example.com/"};
  EXPECT_EQ(uri.recompose(), "http://example.com/");
}

TEST(URI_recompose, no_scheme) {
  const sourcemeta::jsontoolkit::URI uri{"example.com/foo"};
  EXPECT_EQ(uri.recompose(), "example.com/foo");
}

TEST(URI_recompose, empty_fragment) {
  const sourcemeta::jsontoolkit::URI uri{"#"};
  EXPECT_EQ(uri.recompose(), "#");
}

/*
 * RFC 3986 normalization tests
 */

// Inspired from https://cr.openjdk.org/~dfuchs/writeups/updating-uri/

TEST(URI_normalize, rfc3986_1) {
  const sourcemeta::jsontoolkit::URI uri{"s://h/a/../../b"};
  EXPECT_EQ(uri.recompose(), "s://h/b");
}

// Inspired from
// https://github.com/uriparser/uriparser/blob/master/test/test.cpp#L1438

TEST(URI_normalize, rfc3986_2) {
  const sourcemeta::jsontoolkit::URI uri{"eXAMPLE://a/./b/../b/%63/%7bfoo%7d"};
  EXPECT_EQ(uri.recompose(), "example://a/b/c/%7Bfoo%7D");
}

TEST(URI_normalize, percent_encoding) {
  const sourcemeta::jsontoolkit::URI uri{"http://examp%4Ce.com/"};
  EXPECT_EQ(uri.recompose(), "http://example.com/");
}

TEST(URI_normalize, dot_segments) {
  const sourcemeta::jsontoolkit::URI uri{"http://example.com/a/b/%2E%2E/"};
  EXPECT_EQ(uri.recompose(), "http://example.com/a/");
}

TEST(URI_normalize, case_normalization) {
  const sourcemeta::jsontoolkit::URI uri{"http://user:pass@SOMEHOST.COM:123"};
  EXPECT_EQ(uri.recompose(), "http://user:pass@somehost.com:123");
}

TEST(URI_normalize, complex_case) {
  const sourcemeta::jsontoolkit::URI uri{
      "HTTP://a:b@HOST:123/./1/2/../%41?abc#def"};
  EXPECT_EQ(uri.recompose(), "http://a:b@host:123/1/A?abc#def");
}

TEST(URI_normalize, relative_path_1) {
  const sourcemeta::jsontoolkit::URI uri{"../../abc"};
  EXPECT_EQ(uri.recompose(), "../../abc");
}

TEST(URI_normalize, relative_path_2) {
  const sourcemeta::jsontoolkit::URI uri{"../../abc/.."};
  EXPECT_EQ(uri.recompose(), "../../");
}

TEST(URI_normalize, relative_path_3) {
  const sourcemeta::jsontoolkit::URI uri{"../../abc/../def"};
  EXPECT_EQ(uri.recompose(), "../../def");
}

TEST(URI_normalize, relative_path_4) {
  const sourcemeta::jsontoolkit::URI uri{"abc/.."};
  EXPECT_EQ(uri.recompose(), "");
}

TEST(URI_normalize, relative_path_5) {
  const sourcemeta::jsontoolkit::URI uri{"abc/../"};
  EXPECT_EQ(uri.recompose(), "");
}

TEST(URI_normalize, relative_path_6) {
  const sourcemeta::jsontoolkit::URI uri{"../../abc/./def"};
  EXPECT_EQ(uri.recompose(), "../../abc/def");
}

TEST(URI_normalize, relative_path_7) {
  const sourcemeta::jsontoolkit::URI uri{"./def"};
  EXPECT_EQ(uri.recompose(), "def");
}

TEST(URI_normalize, relative_path_8) {
  const sourcemeta::jsontoolkit::URI uri{"def/."};
  EXPECT_EQ(uri.recompose(), "def/");
}

TEST(URI_normalize, relative_path_9) {
  const sourcemeta::jsontoolkit::URI uri{"./abc:def"};
  EXPECT_EQ(uri.recompose(), "./abc:def");
}
