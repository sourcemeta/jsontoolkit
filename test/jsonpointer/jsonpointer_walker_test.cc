#include <gtest/gtest.h>
#include <memory>
#include <set>
#include <string>
#include <vector>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>

TEST(JSONPointer_walker, null) {
  const sourcemeta::jsontoolkit::JSON document{nullptr};
  std::vector<sourcemeta::jsontoolkit::Pointer> subpointers;
  for (const auto &subpointer :
       sourcemeta::jsontoolkit::PointerWalker{document}) {
    subpointers.push_back(subpointer);
  }

  EXPECT_EQ(subpointers.size(), 1);
  EXPECT_EQ(subpointers.at(0), sourcemeta::jsontoolkit::Pointer{});
}

TEST(JSONPointer_walker, boolean_false) {
  const sourcemeta::jsontoolkit::JSON document{false};
  std::vector<sourcemeta::jsontoolkit::Pointer> subpointers;
  for (const auto &subpointer :
       sourcemeta::jsontoolkit::PointerWalker{document}) {
    subpointers.push_back(subpointer);
  }

  EXPECT_EQ(subpointers.size(), 1);
  EXPECT_EQ(subpointers.at(0), sourcemeta::jsontoolkit::Pointer{});
}

TEST(JSONPointer_walker, boolean_true) {
  const sourcemeta::jsontoolkit::JSON document{true};
  std::vector<sourcemeta::jsontoolkit::Pointer> subpointers;
  for (const auto &subpointer :
       sourcemeta::jsontoolkit::PointerWalker{document}) {
    subpointers.push_back(subpointer);
  }

  EXPECT_EQ(subpointers.size(), 1);
  EXPECT_EQ(subpointers.at(0), sourcemeta::jsontoolkit::Pointer{});
}

TEST(JSONPointer_walker, integer) {
  const sourcemeta::jsontoolkit::JSON document{5};
  std::vector<sourcemeta::jsontoolkit::Pointer> subpointers;
  for (const auto &subpointer :
       sourcemeta::jsontoolkit::PointerWalker{document}) {
    subpointers.push_back(subpointer);
  }

  EXPECT_EQ(subpointers.size(), 1);
  EXPECT_EQ(subpointers.at(0), sourcemeta::jsontoolkit::Pointer{});
}

TEST(JSONPointer_walker, real) {
  const sourcemeta::jsontoolkit::JSON document{3.14};
  std::vector<sourcemeta::jsontoolkit::Pointer> subpointers;
  for (const auto &subpointer :
       sourcemeta::jsontoolkit::PointerWalker{document}) {
    subpointers.push_back(subpointer);
  }

  EXPECT_EQ(subpointers.size(), 1);
  EXPECT_EQ(subpointers.at(0), sourcemeta::jsontoolkit::Pointer{});
}

TEST(JSONPointer_walker, string) {
  const sourcemeta::jsontoolkit::JSON document{"foo bar"};
  std::vector<sourcemeta::jsontoolkit::Pointer> subpointers;
  for (const auto &subpointer :
       sourcemeta::jsontoolkit::PointerWalker{document}) {
    subpointers.push_back(subpointer);
  }

  EXPECT_EQ(subpointers.size(), 1);
  EXPECT_EQ(subpointers.at(0), sourcemeta::jsontoolkit::Pointer{});
}

TEST(JSONPointer_walker, array_empty) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("[]");
  std::vector<sourcemeta::jsontoolkit::Pointer> subpointers;
  for (const auto &subpointer :
       sourcemeta::jsontoolkit::PointerWalker{document}) {
    subpointers.push_back(subpointer);
  }

  EXPECT_EQ(subpointers.size(), 1);
  EXPECT_EQ(subpointers.at(0), sourcemeta::jsontoolkit::Pointer{});
}

TEST(JSONPointer_walker, array_scalars) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3, 4 ]");
  std::vector<sourcemeta::jsontoolkit::Pointer> subpointers;
  for (const auto &subpointer :
       sourcemeta::jsontoolkit::PointerWalker{document}) {
    subpointers.push_back(subpointer);
  }

  EXPECT_EQ(subpointers.size(), 5);
  EXPECT_EQ(subpointers.at(0), sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(subpointers.at(1), sourcemeta::jsontoolkit::Pointer({0}));
  EXPECT_EQ(subpointers.at(2), sourcemeta::jsontoolkit::Pointer({1}));
  EXPECT_EQ(subpointers.at(3), sourcemeta::jsontoolkit::Pointer({2}));
  EXPECT_EQ(subpointers.at(4), sourcemeta::jsontoolkit::Pointer({3}));
}

TEST(JSONPointer_walker, array_deep) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse(R"EOF([
    [],
    [ 1, 2 ],
    [ "foo" ]
  ])EOF");
  std::vector<sourcemeta::jsontoolkit::Pointer> subpointers;
  for (const auto &subpointer :
       sourcemeta::jsontoolkit::PointerWalker{document}) {
    subpointers.push_back(subpointer);
  }

  EXPECT_EQ(subpointers.size(), 7);
  EXPECT_EQ(subpointers.at(0), sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(subpointers.at(1), sourcemeta::jsontoolkit::Pointer({0}));
  EXPECT_EQ(subpointers.at(2), sourcemeta::jsontoolkit::Pointer({1}));
  EXPECT_EQ(subpointers.at(3), sourcemeta::jsontoolkit::Pointer({1, 0}));
  EXPECT_EQ(subpointers.at(4), sourcemeta::jsontoolkit::Pointer({1, 1}));
  EXPECT_EQ(subpointers.at(5), sourcemeta::jsontoolkit::Pointer({2}));
  EXPECT_EQ(subpointers.at(6), sourcemeta::jsontoolkit::Pointer({2, 0}));
}

TEST(JSONPointer_walker, object_empty) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{}");
  std::vector<sourcemeta::jsontoolkit::Pointer> subpointers;
  for (const auto &subpointer :
       sourcemeta::jsontoolkit::PointerWalker{document}) {
    subpointers.push_back(subpointer);
  }

  EXPECT_EQ(subpointers.size(), 1);
  EXPECT_EQ(subpointers.at(0), sourcemeta::jsontoolkit::Pointer{});
}

TEST(JSONPointer_walker, object_scalars) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2, \"baz\": 3 }");
  // Do a set to not dependent on object property ordering
  std::set<sourcemeta::jsontoolkit::Pointer> subpointers;
  for (const auto &subpointer :
       sourcemeta::jsontoolkit::PointerWalker{document}) {
    subpointers.insert(subpointer);
  }

  EXPECT_EQ(subpointers.size(), 4);
  EXPECT_TRUE(subpointers.contains(sourcemeta::jsontoolkit::Pointer{}));
  EXPECT_TRUE(subpointers.contains(sourcemeta::jsontoolkit::Pointer({"foo"})));
  EXPECT_TRUE(subpointers.contains(sourcemeta::jsontoolkit::Pointer({"bar"})));
  EXPECT_TRUE(subpointers.contains(sourcemeta::jsontoolkit::Pointer({"baz"})));
}

TEST(JSONPointer_walker, object_nested) {
  const sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": { \"bar\": 1 } }");
  std::vector<sourcemeta::jsontoolkit::Pointer> subpointers;
  for (const auto &subpointer :
       sourcemeta::jsontoolkit::PointerWalker{document}) {
    subpointers.push_back(subpointer);
  }

  EXPECT_EQ(subpointers.size(), 3);
  EXPECT_EQ(subpointers.at(0), sourcemeta::jsontoolkit::Pointer{});
  EXPECT_EQ(subpointers.at(1), sourcemeta::jsontoolkit::Pointer({"foo"}));
  EXPECT_EQ(subpointers.at(2),
            sourcemeta::jsontoolkit::Pointer({"foo", "bar"}));
}
