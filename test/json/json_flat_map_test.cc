#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json_flat_map.h>

TEST(JSON_flat_map, empty_by_default) {
  sourcemeta::jsontoolkit::FlatMap<std::uint64_t, bool> map;
  EXPECT_TRUE(map.empty());
  EXPECT_EQ(map.size(), 0);
}

TEST(JSON_flat_map, clear) {
  sourcemeta::jsontoolkit::FlatMap<std::uint64_t, bool> map;
  map.clear();
  EXPECT_TRUE(map.empty());
  map.assign(0, true);
  EXPECT_FALSE(map.empty());
  map.clear();
  EXPECT_TRUE(map.empty());
}

TEST(JSON_flat_map, set_insert_move) {
  sourcemeta::jsontoolkit::FlatMap<std::uint64_t, bool> map;

  const auto hash_1{map.assign(0, true)};
  const auto hash_2{map.assign(1, false)};
  const auto hash_3{map.assign(2, true)};

  EXPECT_FALSE(map.empty());
  EXPECT_EQ(map.size(), 3);

  EXPECT_NE(map.find(0), map.cend());
  EXPECT_NE(map.find(1), map.cend());
  EXPECT_NE(map.find(2), map.cend());

  EXPECT_NE(map.find(0, hash_1), map.cend());
  EXPECT_NE(map.find(1, hash_2), map.cend());
  EXPECT_NE(map.find(2, hash_3), map.cend());

  EXPECT_EQ(map.find(3), map.cend());

  EXPECT_EQ(map.find(0)->first, 0);
  EXPECT_EQ(map.find(1)->first, 1);
  EXPECT_EQ(map.find(2)->first, 2);
  EXPECT_TRUE(map.find(0)->second);
  EXPECT_FALSE(map.find(1)->second);
  EXPECT_TRUE(map.find(2)->second);

  EXPECT_EQ(map.find(0, hash_1)->first, 0);
  EXPECT_EQ(map.find(1, hash_2)->first, 1);
  EXPECT_EQ(map.find(2, hash_3)->first, 2);
  EXPECT_TRUE(map.find(0, hash_1)->second);
  EXPECT_FALSE(map.find(1, hash_2)->second);
  EXPECT_TRUE(map.find(2, hash_3)->second);

  EXPECT_TRUE(map.at(0));
  EXPECT_FALSE(map.at(1));
  EXPECT_TRUE(map.at(2));
  EXPECT_TRUE(map.at(0, hash_1));
  EXPECT_FALSE(map.at(1, hash_2));
  EXPECT_TRUE(map.at(2, hash_3));
}

TEST(JSON_flat_map, set_assign_move) {
  sourcemeta::jsontoolkit::FlatMap<std::uint64_t, bool> map;

  const auto hash_1{map.assign(0, true)};
  const auto hash_2{map.assign(1, false)};
  const auto hash_3{map.assign(1, true)};

  EXPECT_EQ(hash_2, hash_3);

  EXPECT_FALSE(map.empty());
  EXPECT_EQ(map.size(), 2);

  EXPECT_NE(map.find(0), map.cend());
  EXPECT_NE(map.find(1), map.cend());

  EXPECT_NE(map.find(0, hash_1), map.cend());
  EXPECT_NE(map.find(1, hash_2), map.cend());

  EXPECT_EQ(map.find(2), map.cend());

  EXPECT_EQ(map.find(0)->first, 0);
  EXPECT_EQ(map.find(1)->first, 1);
  EXPECT_TRUE(map.find(0)->second);
  EXPECT_TRUE(map.find(1)->second);

  EXPECT_EQ(map.find(0, hash_1)->first, 0);
  EXPECT_EQ(map.find(1, hash_2)->first, 1);
  EXPECT_TRUE(map.find(0, hash_1)->second);
  EXPECT_TRUE(map.find(1, hash_2)->second);

  EXPECT_TRUE(map.at(0));
  EXPECT_TRUE(map.at(1));
  EXPECT_TRUE(map.at(0, hash_1));
  EXPECT_TRUE(map.at(1, hash_2));
}

TEST(JSON_flat_map, set_insert_copy) {
  sourcemeta::jsontoolkit::FlatMap<std::uint64_t, bool> map;

  const std::uint64_t key_1{0};
  const std::uint64_t key_2{1};
  const std::uint64_t key_3{2};

  const bool value_1{true};
  const bool value_2{false};
  const bool value_3{true};

  const auto hash_1{map.assign(key_1, value_1)};
  const auto hash_2{map.assign(key_2, value_2)};
  const auto hash_3{map.assign(key_3, value_3)};

  EXPECT_FALSE(map.empty());
  EXPECT_EQ(map.size(), 3);

  EXPECT_NE(map.find(key_1), map.cend());
  EXPECT_NE(map.find(key_2), map.cend());
  EXPECT_NE(map.find(key_3), map.cend());

  EXPECT_NE(map.find(key_1, hash_1), map.cend());
  EXPECT_NE(map.find(key_2, hash_2), map.cend());
  EXPECT_NE(map.find(key_3, hash_3), map.cend());

  EXPECT_EQ(map.find(3), map.cend());

  EXPECT_EQ(map.find(key_1)->first, key_1);
  EXPECT_EQ(map.find(key_2)->first, key_2);
  EXPECT_EQ(map.find(key_3)->first, key_3);
  EXPECT_TRUE(map.find(key_1)->second);
  EXPECT_FALSE(map.find(key_2)->second);
  EXPECT_TRUE(map.find(key_3)->second);

  EXPECT_EQ(map.find(key_1, hash_1)->first, key_1);
  EXPECT_EQ(map.find(key_2, hash_2)->first, key_2);
  EXPECT_EQ(map.find(key_3, hash_3)->first, key_3);
  EXPECT_TRUE(map.find(key_1, hash_1)->second);
  EXPECT_FALSE(map.find(key_2, hash_2)->second);
  EXPECT_TRUE(map.find(key_3, hash_3)->second);

  EXPECT_TRUE(map.at(key_1));
  EXPECT_FALSE(map.at(key_2));
  EXPECT_TRUE(map.at(key_3));
  EXPECT_TRUE(map.at(key_1, hash_1));
  EXPECT_FALSE(map.at(key_2, hash_2));
  EXPECT_TRUE(map.at(key_3, hash_3));
}

TEST(JSON_flat_map, set_assign_copy) {
  sourcemeta::jsontoolkit::FlatMap<std::uint64_t, bool> map;

  const std::uint64_t key_1{0};
  const std::uint64_t key_2{1};

  const bool value_1{true};
  const bool value_2{false};
  const bool value_3{true};

  const auto hash_1{map.assign(key_1, value_1)};
  const auto hash_2{map.assign(key_2, value_2)};
  const auto hash_3{map.assign(key_2, value_3)};

  EXPECT_EQ(hash_2, hash_3);

  EXPECT_FALSE(map.empty());
  EXPECT_EQ(map.size(), 2);

  EXPECT_NE(map.find(key_1), map.cend());
  EXPECT_NE(map.find(key_2), map.cend());

  EXPECT_NE(map.find(key_1, hash_1), map.cend());
  EXPECT_NE(map.find(key_2, hash_2), map.cend());

  EXPECT_EQ(map.find(2), map.cend());

  EXPECT_EQ(map.find(key_1)->first, key_1);
  EXPECT_EQ(map.find(key_2)->first, key_2);
  EXPECT_TRUE(map.find(key_1)->second);
  EXPECT_TRUE(map.find(key_2)->second);

  EXPECT_EQ(map.find(key_1, hash_1)->first, key_1);
  EXPECT_EQ(map.find(key_2, hash_2)->first, key_2);
  EXPECT_TRUE(map.find(key_1, hash_1)->second);
  EXPECT_TRUE(map.find(key_2, hash_2)->second);

  EXPECT_TRUE(map.at(key_1));
  EXPECT_TRUE(map.at(key_2));
  EXPECT_TRUE(map.at(key_1, hash_1));
  EXPECT_TRUE(map.at(key_2, hash_2));
}

TEST(JSON_flat_map, erase) {
  sourcemeta::jsontoolkit::FlatMap<std::uint64_t, bool> map;
  EXPECT_EQ(map.erase(0), 0);

  const auto hash_1{map.assign(1, true)};
  const auto hash_2{map.assign(2, false)};
  EXPECT_EQ(map.size(), 2);
  EXPECT_TRUE(map.at(1, hash_1));
  EXPECT_FALSE(map.at(2, hash_2));

  EXPECT_EQ(map.erase(1), 1);
  EXPECT_EQ(map.size(), 1);
  EXPECT_FALSE(map.at(2, hash_2));

  EXPECT_EQ(map.erase(2, hash_2), 0);
  EXPECT_EQ(map.size(), 0);
}

TEST(JSON_flat_map, initializer_list) {
  sourcemeta::jsontoolkit::FlatMap<std::uint64_t, bool> map{
      {0, true}, {1, true}, {2, true}, {1, false}};

  EXPECT_FALSE(map.empty());
  EXPECT_EQ(map.size(), 3);

  EXPECT_NE(map.find(0), map.cend());
  EXPECT_NE(map.find(1), map.cend());
  EXPECT_NE(map.find(2), map.cend());

  EXPECT_EQ(map.find(0)->first, 0);
  EXPECT_EQ(map.find(1)->first, 1);
  EXPECT_EQ(map.find(2)->first, 2);

  EXPECT_TRUE(map.at(0));
  EXPECT_FALSE(map.at(1));
  EXPECT_TRUE(map.at(2));
}

TEST(JSON_flat_map, iterators) {
  sourcemeta::jsontoolkit::FlatMap<std::uint64_t, bool> map{
      {0, true}, {1, false}, {2, true}};

  std::vector<std::uint64_t> keys;
  std::vector<bool> values;
  for (const auto &[key, value] : map) {
    keys.push_back(key);
    values.push_back(value);
  }

  EXPECT_EQ(keys.size(), 3);
  EXPECT_EQ(values.size(), 3);

  EXPECT_TRUE(map.at(0));
  EXPECT_FALSE(map.at(1));
  EXPECT_TRUE(map.at(2));
}

TEST(JSON_flat_map, equality_same_size_true) {
  sourcemeta::jsontoolkit::FlatMap<std::uint64_t, bool> map_1{
      {0, true}, {1, false}, {2, true}};
  sourcemeta::jsontoolkit::FlatMap<std::uint64_t, bool> map_2{
      {2, true}, {1, false}, {0, true}};

  EXPECT_EQ(map_1, map_2);
}

TEST(JSON_flat_map, equality_same_size_false) {
  sourcemeta::jsontoolkit::FlatMap<std::uint64_t, bool> map_1{
      {0, true}, {1, false}, {2, true}};
  sourcemeta::jsontoolkit::FlatMap<std::uint64_t, bool> map_2{
      {0, true}, {1, true}, {2, true}};

  EXPECT_NE(map_1, map_2);
}

TEST(JSON_flat_map, equality_different_size_false) {
  sourcemeta::jsontoolkit::FlatMap<std::uint64_t, bool> map_1{
      {0, true}, {1, true}, {2, true}};
  sourcemeta::jsontoolkit::FlatMap<std::uint64_t, bool> map_2{{0, true},
                                                              {1, true}};

  EXPECT_NE(map_1, map_2);
}

TEST(JSON_flat_map, at_modify_without_hash) {
  sourcemeta::jsontoolkit::FlatMap<std::uint64_t, bool> map;
  map.assign(0, true);
  map.assign(1, false);
  map.at(0) = false;
  map.at(1) = true;
  EXPECT_EQ(map.size(), 2);
  EXPECT_FALSE(map.at(0));
  EXPECT_TRUE(map.at(1));
}

TEST(JSON_flat_map, at_modify_with_hash) {
  sourcemeta::jsontoolkit::FlatMap<std::uint64_t, bool> map;
  const auto hash_1{map.assign(0, true)};
  const auto hash_2{map.assign(1, false)};
  map.at(0, hash_1) = false;
  map.at(1, hash_2) = true;
  EXPECT_EQ(map.size(), 2);
  EXPECT_FALSE(map.at(0));
  EXPECT_TRUE(map.at(1));
}
