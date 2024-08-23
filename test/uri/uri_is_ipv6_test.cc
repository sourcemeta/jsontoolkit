#include <gtest/gtest.h>
#include <sourcemeta/jsontoolkit/uri.h>

TEST(URI_is_ipv6, ipv6_1) {
  const sourcemeta::jsontoolkit::URI uri{
      "http://[FEDC:BA98:7654:3210:FEDC:BA98:7654:3210]:80/index.html"};
  EXPECT_TRUE(uri.is_ipv6());
  EXPECT_EQ(uri.host().value(), "FEDC:BA98:7654:3210:FEDC:BA98:7654:3210");
  EXPECT_EQ(uri.recompose(),
            "http://[FEDC:BA98:7654:3210:FEDC:BA98:7654:3210]:80/index.html");
}

TEST(URI_is_ipv6, ipv6_2) {
  const sourcemeta::jsontoolkit::URI uri{
      "http://[1080:0:0:0:8:800:200C:417A]/index.html"};
  EXPECT_TRUE(uri.is_ipv6());
  EXPECT_EQ(uri.host().value(), "1080:0:0:0:8:800:200C:417A");
  EXPECT_EQ(uri.recompose(), "http://[1080:0:0:0:8:800:200C:417A]/index.html");
}

TEST(URI_is_ipv6, ipv6_3) {
  const sourcemeta::jsontoolkit::URI uri{"http://[3ffe:2a00:100:7031::1]"};
  EXPECT_TRUE(uri.is_ipv6());
  EXPECT_EQ(uri.host().value(), "3ffe:2a00:100:7031::1");
  EXPECT_EQ(uri.recompose(), "http://[3ffe:2a00:100:7031::1]");
}

TEST(URI_is_ipv6, ipv6_4) {
  const sourcemeta::jsontoolkit::URI uri{"http://[1080::8:800:200C:417A]/foo"};
  EXPECT_TRUE(uri.is_ipv6());
  EXPECT_EQ(uri.host().value(), "1080::8:800:200C:417A");
  EXPECT_EQ(uri.recompose(), "http://[1080::8:800:200C:417A]/foo");
}

TEST(URI_is_ipv6, ipv6_5) {
  const sourcemeta::jsontoolkit::URI uri{"http://[::192.9.5.5]/ipng"};
  EXPECT_TRUE(uri.is_ipv6());
  EXPECT_EQ(uri.host().value(), "::192.9.5.5");
  EXPECT_EQ(uri.recompose(), "http://[::192.9.5.5]/ipng");
}

TEST(URI_is_ipv6, ipv6_6) {
  const sourcemeta::jsontoolkit::URI uri{
      "http://[::FFFF:129.144.52.38]:80/index.html"};
  EXPECT_TRUE(uri.is_ipv6());
  EXPECT_EQ(uri.host().value(), "::FFFF:129.144.52.38");
  EXPECT_EQ(uri.recompose(), "http://[::FFFF:129.144.52.38]:80/index.html");
}

TEST(URI_is_ipv6, ipv6_7) {
  const sourcemeta::jsontoolkit::URI uri{"http://[2010:836B:4179::836B:4179]"};
  EXPECT_TRUE(uri.is_ipv6());
  EXPECT_EQ(uri.host().value(), "2010:836B:4179::836B:4179");
  EXPECT_EQ(uri.recompose(), "http://[2010:836B:4179::836B:4179]");
}
