#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>

TEST(JSON_hash, hash_empty) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{""};
  EXPECT_EQ(hasher(value), 0x0000000000000000);
}

TEST(JSON_hash, hash_f) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"f"};
  EXPECT_EQ(hasher(value), 0x0000000000006600);
}

TEST(JSON_hash, hash_fo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"fo"};
  EXPECT_EQ(hasher(value), 0x00000000006f6600);
}

TEST(JSON_hash, hash_foo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"foo"};
  EXPECT_EQ(hasher(value), 0x000000006f6f6600);
}

TEST(JSON_hash, hash_fooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"fooo"};
  EXPECT_EQ(hasher(value), 0x0000006f6f6f6600);
}

TEST(JSON_hash, hash_foooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"foooo"};
  EXPECT_EQ(hasher(value), 0x00006f6f6f6f6600);
}

TEST(JSON_hash, hash_fooooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"fooooo"};
  EXPECT_EQ(hasher(value), 0x006f6f6f6f6f6600);
}

TEST(JSON_hash, hash_foooooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"foooooo"};
  EXPECT_EQ(hasher(value), 0x6f6f6f6f6f6f6600);
}

TEST(JSON_hash, hash_foobar) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"fooooooo"};
  // 0x08 (length) + 0x66 (f) + 0x6f (o)
  EXPECT_EQ(hasher(value), 0x00000000000000dd);
}
