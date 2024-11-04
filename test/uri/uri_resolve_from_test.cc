#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/uri.h>

TEST(URI_resolve_from, relative_base) {
  const sourcemeta::jsontoolkit::URI base{"../foo"};
  sourcemeta::jsontoolkit::URI relative{"../baz"};
  EXPECT_THROW(relative.resolve_from(base), sourcemeta::jsontoolkit::URIError);
}

TEST(URI_resolve_from, example_1) {
  const sourcemeta::jsontoolkit::URI base{"https://foobar.com/foo/bar"};
  sourcemeta::jsontoolkit::URI relative{"../baz"};
  relative.resolve_from(base);
  EXPECT_EQ(relative.recompose(), "https://foobar.com/baz");
}

TEST(URI_resolve_from, add_fragment) {
  const sourcemeta::jsontoolkit::URI base{"https://foobar.com/foo/bar"};
  sourcemeta::jsontoolkit::URI relative{"#baz"};
  relative.resolve_from(base);
  EXPECT_EQ(relative.recompose(), "https://foobar.com/foo/bar#baz");
}

TEST(URI_resolve_from, change_fragment) {
  const sourcemeta::jsontoolkit::URI base{"https://foobar.com/foo/bar#baz"};
  sourcemeta::jsontoolkit::URI relative{"#qux"};
  relative.resolve_from(base);
  EXPECT_EQ(relative.recompose(), "https://foobar.com/foo/bar#qux");
}

TEST(URI_try_resolve_from, example_1) {
  const sourcemeta::jsontoolkit::URI base{"https://foobar.com/foo/bar"};
  sourcemeta::jsontoolkit::URI relative{"../baz"};
  relative.try_resolve_from(base);
  EXPECT_EQ(relative.recompose(), "https://foobar.com/baz");
}

TEST(URI_try_resolve_from, relative_base) {
  const sourcemeta::jsontoolkit::URI base{"../foo"};
  sourcemeta::jsontoolkit::URI relative{"../baz"};
  relative.try_resolve_from(base);
  EXPECT_EQ(relative.recompose(), "../baz");
}

// RFC 3986, inspired from
// https://cr.openjdk.org/~dfuchs/writeups/updating-uri/A Section "Resolutuon"

TEST(URI_resolve_from, rfc3986_resolve_with_relative_path) {
  const sourcemeta::jsontoolkit::URI base{"s://h/a/c"};
  sourcemeta::jsontoolkit::URI relative_path{"../../b"};
  relative_path.resolve_from(base);
  EXPECT_EQ(relative_path.recompose(), "s://h/b");
}

TEST(URI_resolve_from, rfc3986_resolve_with_empty) {
  const sourcemeta::jsontoolkit::URI base{"s://h/a/c"};
  sourcemeta::jsontoolkit::URI empty{""};
  empty.resolve_from(base);
  EXPECT_EQ(empty.recompose(), "s://h/a/c");
}

TEST(URI_resolve_from, rfc3986_resolve_with_query) {
  const sourcemeta::jsontoolkit::URI base{"s://h/a/c"};
  sourcemeta::jsontoolkit::URI query{"?x=y"};
  query.resolve_from(base);
  EXPECT_EQ(query.recompose(), "s://h/a/c?x=y");
}

TEST(URI_resolve_from, rfc3986_resolve_with_fragment) {
  const sourcemeta::jsontoolkit::URI base{"s://h/a/c"};
  sourcemeta::jsontoolkit::URI fragment{"#x=y"};
  fragment.resolve_from(base);
  EXPECT_EQ(fragment.recompose(), "s://h/a/c#x=y");
}

TEST(URI_resolve_from, rfc3986_resolve_with_absolute_path) {
  const sourcemeta::jsontoolkit::URI base{"s://h/a/c"};
  sourcemeta::jsontoolkit::URI absolute_path{"/././x"};
  absolute_path.resolve_from(base);
  EXPECT_EQ(absolute_path.recompose(), "s://h/x");
}
