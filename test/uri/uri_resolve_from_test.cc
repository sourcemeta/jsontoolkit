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

TEST(URI_resolve_from_if_absolute, example_1) {
  const sourcemeta::jsontoolkit::URI base{"https://foobar.com/foo/bar"};
  sourcemeta::jsontoolkit::URI relative{"../baz"};
  relative.resolve_from_if_absolute(base);
  EXPECT_EQ(relative.recompose(), "https://foobar.com/baz");
}

TEST(URI_resolve_from_if_absolute, relative_base) {
  const sourcemeta::jsontoolkit::URI base{"../foo"};
  sourcemeta::jsontoolkit::URI relative{"../baz"};
  relative.resolve_from_if_absolute(base);
  EXPECT_EQ(relative.recompose(), "../baz");
}

// RFC 3986, inspired from
// https://cr.openjdk.org/~dfuchs/writeups/updating-uri/A Section "Resolutuon"
// TODO: find better names for each case

TEST(URI_resolve_from, rfc3986_1) {
  const sourcemeta::jsontoolkit::URI base{"s://h/a/c"};
  sourcemeta::jsontoolkit::URI relative{"../../b"};
  relative.resolve_from(base);
  EXPECT_EQ(relative.recompose(), "s://h/b");
}

TEST(URI_resolve_from, rfc3986_2) {
  const sourcemeta::jsontoolkit::URI base{"s://h/a/c"};
  sourcemeta::jsontoolkit::URI relative{""};
  relative.resolve_from(base);
  EXPECT_EQ(relative.recompose(), "s://h/a/c");
}

TEST(URI_resolve_from, rfc3986_3) {
  const sourcemeta::jsontoolkit::URI base{"s://h/a/c"};
  sourcemeta::jsontoolkit::URI relative{"?x=y"};
  relative.resolve_from(base);
  EXPECT_EQ(relative.recompose(), "s://h/a/c?x=y");
}

TEST(URI_resolve_from, rfc3986_4) {
  const sourcemeta::jsontoolkit::URI base{"s://h/a/c"};
  sourcemeta::jsontoolkit::URI relative{"#x=y"};
  relative.resolve_from(base);
  EXPECT_EQ(relative.recompose(), "s://h/a/c#x=y");
}

TEST(URI_resolve_from, rfc3986_5) {
  const sourcemeta::jsontoolkit::URI base{"s://h/a/c"};
  sourcemeta::jsontoolkit::URI relative{"/././x"};
  relative.resolve_from(base);
  EXPECT_EQ(relative.recompose(), "s://h/x");
}
