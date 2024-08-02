#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/uri.h>
#include <string_view>

// Getter

TEST(URI_path_getter, https_example_url_no_path) {
  const sourcemeta::jsontoolkit::URI uri{"https://example.com"};
  EXPECT_FALSE(uri.path().has_value());
}

TEST(URI_path_getter, https_example_url_slash) {
  const sourcemeta::jsontoolkit::URI uri{"https://example.com/"};
  EXPECT_TRUE(uri.path().has_value());
  EXPECT_EQ(uri.path().value(), "/");
}

TEST(URI_path_getter, https_example_url_single) {
  const sourcemeta::jsontoolkit::URI uri{"https://example.com/foo"};
  EXPECT_TRUE(uri.path().has_value());
  EXPECT_EQ(uri.path().value(), "/foo");
}

TEST(URI_path_getter, https_example_url_multi) {
  const sourcemeta::jsontoolkit::URI uri{"https://example.com/foo/bar/baz"};
  EXPECT_TRUE(uri.path().has_value());
  EXPECT_EQ(uri.path().value(), "/foo/bar/baz");
}

TEST(URI_path_getter, relative_multi) {
  const sourcemeta::jsontoolkit::URI uri{"../foo/bar"};
  EXPECT_TRUE(uri.path().has_value());
  EXPECT_EQ(uri.path().value(), "../foo/bar");
}

TEST(URI_path_getter, urn) {
  const sourcemeta::jsontoolkit::URI uri{"urn:example:schema"};
  EXPECT_TRUE(uri.path().has_value());
  EXPECT_EQ(uri.path().value(), "example:schema");
}

TEST(URI_path_getter, urn_with_fragment) {
  const sourcemeta::jsontoolkit::URI uri{"urn:example:schema#foo"};
  EXPECT_TRUE(uri.path().has_value());
  EXPECT_EQ(uri.path().value(), "example:schema");
}

TEST(URI_path_getter, tag) {
  const sourcemeta::jsontoolkit::URI uri{
      "tag:bowtie.report,2023-11:referencing-suite-tag-uris-id"};
  EXPECT_TRUE(uri.path().has_value());
  EXPECT_EQ(uri.path().value(),
            "bowtie.report,2023-11:referencing-suite-tag-uris-id");
}

TEST(URI_path_getter, tag_with_fragment) {
  const sourcemeta::jsontoolkit::URI uri{
      "tag:bowtie.report,2023-11:referencing-suite-tag-uris-id#foo"};
  EXPECT_TRUE(uri.path().has_value());
  EXPECT_EQ(uri.path().value(),
            "bowtie.report,2023-11:referencing-suite-tag-uris-id");
}

TEST(URI_path_getter, without_scheme) {
  const sourcemeta::jsontoolkit::URI uri{"example.com/foo"};
  EXPECT_EQ(uri.path().value(), "example.com/foo");
}

// Setter

TEST(URI_path_setter, no_path) {
  sourcemeta::jsontoolkit::URI uri{"https://example.com"};

  uri.path(std::string_view{"/foo"});
  EXPECT_EQ(uri.path().value(), "/foo");
  EXPECT_EQ(uri.recompose(), "https://example.com/foo");

  uri.path(std::string{"/foo"});
  EXPECT_EQ(uri.path().value(), "/foo");
  EXPECT_EQ(uri.recompose(), "https://example.com/foo");
}

TEST(URI_path_setter, url_slash) {
  sourcemeta::jsontoolkit::URI uri{"https://example.com/"};

  uri.path(std::string_view{"/foo"});
  EXPECT_EQ(uri.path().value(), "/foo");
  EXPECT_EQ(uri.recompose(), "https://example.com/foo");

  uri.path(std::string{"/foo"});
  EXPECT_EQ(uri.path().value(), "/foo");
  EXPECT_EQ(uri.recompose(), "https://example.com/foo");
}

TEST(URI_path_setter, url_path) {
  sourcemeta::jsontoolkit::URI uri{"https://example.com/foo"};

  uri.path(std::string_view{"/bar"});
  EXPECT_EQ(uri.path().value(), "/bar");
  EXPECT_EQ(uri.recompose(), "https://example.com/bar");

  uri.path(std::string{"/bar"});
  EXPECT_EQ(uri.path().value(), "/bar");
  EXPECT_EQ(uri.recompose(), "https://example.com/bar");
}

TEST(URI_path_setter, set_empty) {
  sourcemeta::jsontoolkit::URI uri{"https://example.com/foo/bar/baz"};

  uri.path(std::string_view{""});
  EXPECT_EQ(uri.path().has_value(), false);
  EXPECT_EQ(uri.recompose(), "https://example.com");

  uri.path(std::string{""});
  EXPECT_EQ(uri.path().has_value(), false);
  EXPECT_EQ(uri.recompose(), "https://example.com");
}

TEST(URI_path_setter, set_path_without_leading_slash) {
  sourcemeta::jsontoolkit::URI uri{"https://example.com"};

  uri.path(std::string_view{"foo"});
  EXPECT_EQ(uri.path().value(), "/foo");
  EXPECT_EQ(uri.recompose(), "https://example.com/foo");

  uri.path(std::string{"foo"});
  EXPECT_EQ(uri.path().value(), "/foo");
  EXPECT_EQ(uri.recompose(), "https://example.com/foo");
}

TEST(URI_path_setter, set_path_with_trailing_slash) {
  sourcemeta::jsontoolkit::URI uri{"https://example.com"};

  uri.path(std::string_view{"/foo/"});
  EXPECT_EQ(uri.path().value(), "/foo/");
  EXPECT_EQ(uri.recompose(), "https://example.com/foo/");

  uri.path(std::string{"/foo/"});
  EXPECT_EQ(uri.path().value(), "/foo/");
  EXPECT_EQ(uri.recompose(), "https://example.com/foo/");
}

TEST(URI_path_setter, set_path_with_query) {
  sourcemeta::jsontoolkit::URI uri{"https://example.com"};

  uri.path(std::string_view{"/foo%20bar?query=value#fragment"});
  EXPECT_EQ(uri.path().value(), "/foo%20bar");
  EXPECT_EQ(uri.recompose(), "https://example.com/foo%20bar");

  uri.path(std::string{"/foo%20bar?query=value#fragment"});
  EXPECT_EQ(uri.path().value(), "/foo%20bar");
  EXPECT_EQ(uri.recompose(), "https://example.com/foo%20bar");
}

TEST(URI_path_setter, set_path_with_fragment) {
  sourcemeta::jsontoolkit::URI uri{"https://example.com"};

  uri.path(std::string_view{"/foo%20bar#fragment"});
  EXPECT_EQ(uri.path().value(), "/foo%20bar");
  EXPECT_EQ(uri.recompose(), "https://example.com/foo%20bar");

  uri.path(std::string{"/foo%20bar#fragment"});
  EXPECT_EQ(uri.path().value(), "/foo%20bar");
  EXPECT_EQ(uri.recompose(), "https://example.com/foo%20bar");
}

TEST(URI_path_setter, set_path_with_query_and_fragment) {
  sourcemeta::jsontoolkit::URI uri{
      "https://example.com/old?query=value#fragment"};

  uri.path(std::string_view{"/new"});
  EXPECT_EQ(uri.path().value(), "/new");
  EXPECT_EQ(uri.recompose(), "https://example.com/new?query=value#fragment");

  uri.path(std::string{"/new"});
  EXPECT_EQ(uri.path().value(), "/new");
  EXPECT_EQ(uri.recompose(), "https://example.com/new?query=value#fragment");
}

TEST(URI_path_setter_no_scheme, set_path_on_host_only) {
  sourcemeta::jsontoolkit::URI uri{"example.com"};

  uri.path(std::string_view{"/foo"});
  EXPECT_EQ(uri.path().value(), "foo");
  EXPECT_EQ(uri.recompose(), "foo");

  uri.path(std::string{"/foo"});
  EXPECT_EQ(uri.path().value(), "foo");
  EXPECT_EQ(uri.recompose(), "foo");
}

TEST(URI_path_setter_no_scheme, replace_existing_path) {
  sourcemeta::jsontoolkit::URI uri{"example.com/old"};

  uri.path(std::string_view{"/new"});
  EXPECT_EQ(uri.path().value(), "new");
  EXPECT_EQ(uri.recompose(), "new");

  uri.path(std::string{"/new"});
  EXPECT_EQ(uri.path().value(), "new");
  EXPECT_EQ(uri.recompose(), "new");
}

TEST(URI_path_setter_no_scheme, set_empty_path) {
  sourcemeta::jsontoolkit::URI uri{"example.com/foo"};

  uri.path(std::string_view{""});
  EXPECT_EQ(uri.path().has_value(), false);
  EXPECT_EQ(uri.recompose(), "");

  uri.path(std::string{""});
  EXPECT_EQ(uri.path().has_value(), false);
  EXPECT_EQ(uri.recompose(), "");
}

TEST(URI_path_setter_no_scheme, set_path_on_ip_address) {
  sourcemeta::jsontoolkit::URI uri{"192.168.0.1"};

  uri.path(std::string_view{"/admin"});
  EXPECT_EQ(uri.path().value(), "admin");
  EXPECT_EQ(uri.recompose(), "admin");

  uri.path(std::string{"/admin"});
  EXPECT_EQ(uri.path().value(), "admin");
  EXPECT_EQ(uri.recompose(), "admin");
}

// TODO: dig why scheme return example.com
// TEST(URI_path_setter_no_scheme, set_path_with_port) {
//   sourcemeta::jsontoolkit::URI uri{"example.com:8080"};
//   std::cout << "urn : " << uri.is_urn() << std::endl;
//   std::cout << "tag : " << uri.is_tag() << std::endl;
//   std::cout << "scheme : " << uri.scheme().value() << std::endl;
//
//   uri.path("/test");
//   EXPECT_EQ(uri.path().value(), "test");
// }
