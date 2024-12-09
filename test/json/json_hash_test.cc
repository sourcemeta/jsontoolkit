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

#ifdef __SIZEOF_INT128__

TEST(JSON_hash, hash_fooooooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"fooooooo"};
  EXPECT_EQ(hasher(value) >> 64, 0x000000000000006f);
  EXPECT_EQ(static_cast<__uint64_t>(hasher(value)), 0x6f6f6f6f6f6f6600);
}

TEST(JSON_hash, hash_foooooooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"foooooooo"};
  EXPECT_EQ(hasher(value) >> 64, 0x0000000000006f6f);
  EXPECT_EQ(static_cast<__uint64_t>(hasher(value)), 0x6f6f6f6f6f6f6600);
}

TEST(JSON_hash, hash_fooooooooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"fooooooooo"};
  EXPECT_EQ(hasher(value) >> 64, 0x00000000006f6f6f);
  EXPECT_EQ(static_cast<__uint64_t>(hasher(value)), 0x6f6f6f6f6f6f6600);
}

TEST(JSON_hash, hash_foooooooooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"foooooooooo"};
  EXPECT_EQ(hasher(value) >> 64, 0x000000006f6f6f6f);
  EXPECT_EQ(static_cast<__uint64_t>(hasher(value)), 0x6f6f6f6f6f6f6600);
}

TEST(JSON_hash, hash_fooooooooooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"fooooooooooo"};
  EXPECT_EQ(hasher(value) >> 64, 0x0000006f6f6f6f6f);
  EXPECT_EQ(static_cast<__uint64_t>(hasher(value)), 0x6f6f6f6f6f6f6600);
}

TEST(JSON_hash, hash_foooooooooooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"foooooooooooo"};
  EXPECT_EQ(hasher(value) >> 64, 0x00006f6f6f6f6f6f);
  EXPECT_EQ(static_cast<__uint64_t>(hasher(value)), 0x6f6f6f6f6f6f6600);
}

TEST(JSON_hash, hash_fooooooooooooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"fooooooooooooo"};
  EXPECT_EQ(hasher(value) >> 64, 0x006f6f6f6f6f6f6f);
  EXPECT_EQ(static_cast<__uint64_t>(hasher(value)), 0x6f6f6f6f6f6f6600);
}

TEST(JSON_hash, hash_foooooooooooooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"foooooooooooooo"};
  EXPECT_EQ(hasher(value) >> 64, 0x6f6f6f6f6f6f6f6f);
  EXPECT_EQ(static_cast<__uint64_t>(hasher(value)), 0x6f6f6f6f6f6f6600);
}

TEST(JSON_hash, hash_fooooooooooooooo) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"fooooooooooooooo"};
  // 0x10 (length) + 0x66 (f) + 0x6f (o)
  EXPECT_EQ(hasher(value) >> 64, 0x0000000000000000);
  EXPECT_EQ(static_cast<__uint64_t>(hasher(value)), 0x00000000000000e5);
}

#else

TEST(JSON_hash, hash_foobar) {
  const sourcemeta::jsontoolkit::Hash hasher;
  const sourcemeta::jsontoolkit::JSON::String value{"fooooooo"};
  // 0x08 (length) + 0x66 (f) + 0x6f (o)
  EXPECT_EQ(hasher(value), 0x00000000000000dd);
}

#endif
