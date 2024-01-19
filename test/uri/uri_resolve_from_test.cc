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
