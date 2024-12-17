#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>

TEST(JSON_hash, hash_empty) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{""};
  const auto hash{hasher(value)};
  EXPECT_EQ(hash.a, 0x0000000000000000);
  EXPECT_EQ(hash.b, 0x0000000000000000);
}

TEST(JSON_hash, hash_f) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"f"};
  const auto hash{hasher(value)};
  EXPECT_EQ(hash.a, 0x0000000000006600);
  EXPECT_EQ(hash.b, 0x0000000000000000);
}

TEST(JSON_hash, hash_fo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"fo"};
  const auto hash{hasher(value)};
  EXPECT_EQ(hash.a, 0x00000000006f6600);
  EXPECT_EQ(hash.b, 0x0000000000000000);
}

TEST(JSON_hash, hash_foo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"foo"};
  const auto hash{hasher(value)};
  EXPECT_EQ(hash.a, 0x000000006f6f6600);
  EXPECT_EQ(hash.b, 0x0000000000000000);
}

TEST(JSON_hash, hash_fooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"fooo"};
  const auto hash{hasher(value)};
  EXPECT_EQ(hash.a, 0x0000006f6f6f6600);
  EXPECT_EQ(hash.b, 0x0000000000000000);
}

TEST(JSON_hash, hash_foooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"foooo"};
  const auto hash{hasher(value)};
  EXPECT_EQ(hash.a, 0x00006f6f6f6f6600);
  EXPECT_EQ(hash.b, 0x0000000000000000);
}

TEST(JSON_hash, hash_fooooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"fooooo"};
  const auto hash{hasher(value)};
  EXPECT_EQ(hash.a, 0x006f6f6f6f6f6600);
  EXPECT_EQ(hash.b, 0x0000000000000000);
}

TEST(JSON_hash, hash_foooooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"foooooo"};
  const auto hash{hasher(value)};
  EXPECT_EQ(hash.a, 0x6f6f6f6f6f6f6600);
  EXPECT_EQ(hash.b, 0x0000000000000000);
}

TEST(JSON_hash, hash_fooooooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"fooooooo"};
  const auto hash{hasher(value)};
  EXPECT_EQ(hash.a, 0x6f6f6f6f6f6f6600);
  EXPECT_EQ(hash.b, 0x000000000000006f);
}

TEST(JSON_hash, hash_foooooooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"foooooooo"};
  const auto hash{hasher(value)};
  EXPECT_EQ(hash.a, 0x6f6f6f6f6f6f6600);
  EXPECT_EQ(hash.b, 0x0000000000006f6f);
}

TEST(JSON_hash, hash_fooooooooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"fooooooooo"};
  const auto hash{hasher(value)};
  EXPECT_EQ(hash.a, 0x6f6f6f6f6f6f6600);
  EXPECT_EQ(hash.b, 0x00000000006f6f6f);
}

TEST(JSON_hash, hash_foooooooooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"foooooooooo"};
  const auto hash{hasher(value)};
  EXPECT_EQ(hash.a, 0x6f6f6f6f6f6f6600);
  EXPECT_EQ(hash.b, 0x000000006f6f6f6f);
}

TEST(JSON_hash, hash_fooooooooooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"fooooooooooo"};
  const auto hash{hasher(value)};
  EXPECT_EQ(hash.a, 0x6f6f6f6f6f6f6600);
  EXPECT_EQ(hash.b, 0x0000006f6f6f6f6f);
}

TEST(JSON_hash, hash_foooooooooooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"foooooooooooo"};
  const auto hash{hasher(value)};
  EXPECT_EQ(hash.a, 0x6f6f6f6f6f6f6600);
  EXPECT_EQ(hash.b, 0x00006f6f6f6f6f6f);
}

TEST(JSON_hash, hash_fooooooooooooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"fooooooooooooo"};
  const auto hash{hasher(value)};
  EXPECT_EQ(hash.a, 0x6f6f6f6f6f6f6600);
  EXPECT_EQ(hash.b, 0x006f6f6f6f6f6f6f);
}

TEST(JSON_hash, hash_foooooooooooooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"foooooooooooooo"};
  const auto hash{hasher(value)};
  EXPECT_EQ(hash.a, 0x6f6f6f6f6f6f6600);
  EXPECT_EQ(hash.b, 0x6f6f6f6f6f6f6f6f);
}

TEST(JSON_hash, hash_fooooooooooooooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"fooooooooooooooo"};
  const auto hash{hasher(value)};
  // 0x10 (length) + 0x66 (f) + 0x6f (o)
  EXPECT_EQ(hash.a, 0x00000000000000e5);
  EXPECT_EQ(hash.b, 0x0000000000000000);
}
