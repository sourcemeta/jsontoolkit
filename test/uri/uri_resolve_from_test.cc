#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/uri.h>

TEST(URI_resolve_from, relative_base) {
  const sourcemeta::jsontoolkit::URI base{"../foo"};
  const sourcemeta::jsontoolkit::URI relative{"../baz"};
  EXPECT_THROW(relative.resolve_from(base), sourcemeta::jsontoolkit::URIError);
}

TEST(URI_resolve_from, example_1) {
  const sourcemeta::jsontoolkit::URI base{"https://foobar.com/foo/bar"};
  const sourcemeta::jsontoolkit::URI relative{"../baz"};
  EXPECT_EQ(relative.resolve_from(base), "https://foobar.com/baz");
}
