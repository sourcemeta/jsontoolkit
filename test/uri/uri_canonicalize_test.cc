#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/uri.h>

TEST(URI_canonicalize, example_1) {
  const sourcemeta::jsontoolkit::URI uri{
      "https://example.com/foo?bar=baz#test"};
  EXPECT_EQ(uri.canonicalize(), "https://example.com/foo?bar=baz#test");
}

// The empty fragment is optional
TEST(URI_canonicalize, example_2) {
  const sourcemeta::jsontoolkit::URI uri{"http://example.com/foo#"};
  EXPECT_EQ(uri.canonicalize(), "http://example.com/foo");
}

// Explicit 80 port for http scheme
TEST(URI_canonicalize, example_3) {
  const sourcemeta::jsontoolkit::URI uri{"http://example.com:80/default/port"};
  EXPECT_EQ(uri.canonicalize(), "http://example.com/default/port");
}

// Explicit 443 port for https scheme
TEST(URI_canonicalize, example_4) {
  const sourcemeta::jsontoolkit::URI uri{
      "https://example.com:443/default/port"};
  EXPECT_EQ(uri.canonicalize(), "https://example.com/default/port");
}

TEST(URI_canonicalize, example_5) {
  const sourcemeta::jsontoolkit::URI uri{"https://example.com:80/default/port"};
  EXPECT_EQ(uri.canonicalize(), "https://example.com:80/default/port");
}

TEST(URI_canonicalize, example_6) {
  const sourcemeta::jsontoolkit::URI uri{"http://example.com:443/default/port"};
  EXPECT_EQ(uri.canonicalize(), "http://example.com:443/default/port");
}

// Schemes are case insensitive
TEST(URI_canonicalize, example_7) {
  const sourcemeta::jsontoolkit::URI uri{
      "hTtP://example.com/case-insensitive-scheme"};
  EXPECT_EQ(uri.canonicalize(), "http://example.com/case-insensitive-scheme");
}

// Hosts are case insensitive
TEST(URI_canonicalize, example_8) {
  const sourcemeta::jsontoolkit::URI uri{
      "http://exAmpLe.com/case-insensitive-host"};
  EXPECT_EQ(uri.canonicalize(), "http://example.com/case-insensitive-host");
}

// Paths are case sensitive
TEST(URI_canonicalize, example_9) {
  const sourcemeta::jsontoolkit::URI uri{
      "hTtP://exAmpLe.com/case-SENSITIVE-path"};
  EXPECT_EQ(uri.canonicalize(), "http://example.com/case-SENSITIVE-path");
}

TEST(URI_canonicalize, example_10) {
  const sourcemeta::jsontoolkit::URI uri{"urn:example:schema"};
  EXPECT_EQ(uri.canonicalize(), "urn:example:schema");
}

TEST(URI_canonicalize, example_11) {
  const sourcemeta::jsontoolkit::URI uri{"../foo"};
  EXPECT_EQ(uri.canonicalize(), "/../foo");
}

TEST(URI_canonicalize, example_12) {
  const sourcemeta::jsontoolkit::URI uri{"#foo"};
  EXPECT_EQ(uri.canonicalize(), "#foo");
}

TEST(URI_canonicalize, example_13) {
  const sourcemeta::jsontoolkit::URI uri{
      "tag:bowtie.report,2023-11:referencing-suite-tag-uris-id"};
  EXPECT_EQ(uri.canonicalize(),
            "tag:bowtie.report,2023-11:referencing-suite-tag-uris-id");
}
