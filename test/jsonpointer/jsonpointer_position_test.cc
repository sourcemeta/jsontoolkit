#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>

TEST(JSONPointer_position, track_1) {
  const auto input{R"JSON([
  {
    "foo": {
      "bar": 3
    }
  }
])JSON"};

  sourcemeta::jsontoolkit::PositionTracker tracker;
  sourcemeta::jsontoolkit::parse(input, std::ref(tracker));

  EXPECT_EQ(tracker.size(), 4);

  sourcemeta::jsontoolkit::Pointer pointer_1;
  EXPECT_TRUE(tracker.get(pointer_1).has_value());
  EXPECT_EQ(tracker.get(pointer_1).value(),
            sourcemeta::jsontoolkit::PositionTracker::Position({1, 1, 7, 1}));

  sourcemeta::jsontoolkit::Pointer pointer_2{0};
  EXPECT_TRUE(tracker.get(pointer_2).has_value());
  EXPECT_EQ(tracker.get(pointer_2).value(),
            sourcemeta::jsontoolkit::PositionTracker::Position({2, 3, 6, 3}));

  sourcemeta::jsontoolkit::Pointer pointer_3{0, "foo"};
  EXPECT_TRUE(tracker.get(pointer_3).has_value());
  EXPECT_EQ(tracker.get(pointer_3).value(),
            sourcemeta::jsontoolkit::PositionTracker::Position({3, 12, 5, 5}));

  sourcemeta::jsontoolkit::Pointer pointer_4{0, "foo", "bar"};
  EXPECT_TRUE(tracker.get(pointer_4).has_value());
  EXPECT_EQ(tracker.get(pointer_4).value(),
            sourcemeta::jsontoolkit::PositionTracker::Position({4, 14, 4, 14}));
}
