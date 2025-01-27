#include <gtest/gtest.h>

#include <vector>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>

TEST(JSONPointer_proxy, getter) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]");
  sourcemeta::jsontoolkit::PointerProxy transformer{document};
  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]");
  EXPECT_EQ(transformer.value(), document);
  EXPECT_EQ(transformer.value(), expected);
  EXPECT_EQ(expected, document);
}

TEST(JSONPointer_proxy, replace_with_empty_object) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]");
  sourcemeta::jsontoolkit::PointerProxy transformer{document};
  transformer.replace(sourcemeta::jsontoolkit::JSON::make_object());

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse("{}");
  const auto &traces{transformer.traces()};

  EXPECT_EQ(document, expected);
  EXPECT_EQ(traces.size(), 1);

  using namespace sourcemeta::jsontoolkit;
  EXPECT_TRUE(
      std::holds_alternative<PointerProxy::OperationReplace>(traces.at(0)));
  EXPECT_TRUE(
      std::get<PointerProxy::OperationReplace>(traces.at(0)).pointer.empty());
}

TEST(JSONPointer_proxy, replace_subschema_with_empty_object) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]");
  sourcemeta::jsontoolkit::PointerProxy transformer{document};
  transformer.replace({1}, sourcemeta::jsontoolkit::JSON::make_object());

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse("[ 1, {}, 3 ]");
  const auto &traces{transformer.traces()};

  EXPECT_EQ(document, expected);
  EXPECT_EQ(traces.size(), 1);

  using namespace sourcemeta::jsontoolkit;
  EXPECT_TRUE(
      std::holds_alternative<PointerProxy::OperationReplace>(traces.at(0)));
  EXPECT_EQ(std::get<PointerProxy::OperationReplace>(traces.at(0)).pointer,
            sourcemeta::jsontoolkit::Pointer({1}));
}

TEST(JSONPointer_proxy, assign) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1 }");
  sourcemeta::jsontoolkit::PointerProxy transformer{document};
  transformer.assign("bar", sourcemeta::jsontoolkit::JSON{2});

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }");
  const auto &traces{transformer.traces()};

  EXPECT_EQ(document, expected);
  EXPECT_EQ(traces.size(), 1);

  using namespace sourcemeta::jsontoolkit;
  EXPECT_TRUE(
      std::holds_alternative<PointerProxy::OperationAssign>(traces.at(0)));
  EXPECT_EQ(std::get<PointerProxy::OperationAssign>(traces.at(0)).pointer,
            sourcemeta::jsontoolkit::Pointer{"bar"});
}

TEST(JSONPointer_proxy, assign_subobject) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": {} }");
  sourcemeta::jsontoolkit::PointerProxy transformer{document};
  transformer.assign({"bar"}, "baz", sourcemeta::jsontoolkit::JSON{2});

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": { \"baz\": 2 } }");
  const auto &traces{transformer.traces()};

  EXPECT_EQ(document, expected);
  EXPECT_EQ(traces.size(), 1);

  using namespace sourcemeta::jsontoolkit;
  EXPECT_TRUE(
      std::holds_alternative<PointerProxy::OperationAssign>(traces.at(0)));
  EXPECT_EQ(std::get<PointerProxy::OperationAssign>(traces.at(0)).pointer,
            sourcemeta::jsontoolkit::Pointer({"bar", "baz"}));
}

TEST(JSONPointer_proxy, erase) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }");
  sourcemeta::jsontoolkit::PointerProxy transformer{document};
  transformer.erase("foo");

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse("{ \"bar\": 2 }");
  const auto &traces{transformer.traces()};

  EXPECT_EQ(document, expected);
  EXPECT_EQ(traces.size(), 1);

  using namespace sourcemeta::jsontoolkit;
  EXPECT_TRUE(
      std::holds_alternative<PointerProxy::OperationErase>(traces.at(0)));
  EXPECT_EQ(std::get<PointerProxy::OperationErase>(traces.at(0)).pointer,
            sourcemeta::jsontoolkit::Pointer{"foo"});
}

TEST(JSONPointer_proxy, erase_in_subobject) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": { \"bar\": 1, \"baz\": 2 } }");
  sourcemeta::jsontoolkit::PointerProxy transformer{document};
  transformer.erase({"foo"}, "bar");

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse("{ \"foo\": { \"baz\": 2 } }");
  const auto &traces{transformer.traces()};

  EXPECT_EQ(document, expected);
  EXPECT_EQ(traces.size(), 1);

  using namespace sourcemeta::jsontoolkit;
  EXPECT_TRUE(
      std::holds_alternative<PointerProxy::OperationErase>(traces.at(0)));
  EXPECT_EQ(std::get<PointerProxy::OperationErase>(traces.at(0)).pointer,
            sourcemeta::jsontoolkit::Pointer({"foo", "bar"}));
}

TEST(JSONPointer_proxy, erase_many) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2, \"baz\": 3 }");
  sourcemeta::jsontoolkit::PointerProxy transformer{document};
  std::vector<std::string> keys{"foo", "baz"};
  transformer.erase_keys(keys.cbegin(), keys.cend());

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse("{ \"bar\": 2 }");
  const auto &traces{transformer.traces()};

  EXPECT_EQ(document, expected);
  EXPECT_EQ(traces.size(), 2);

  using namespace sourcemeta::jsontoolkit;
  EXPECT_TRUE(
      std::holds_alternative<PointerProxy::OperationErase>(traces.at(0)));
  EXPECT_TRUE(
      std::holds_alternative<PointerProxy::OperationErase>(traces.at(1)));
  EXPECT_EQ(std::get<PointerProxy::OperationErase>(traces.at(0)).pointer,
            sourcemeta::jsontoolkit::Pointer{"foo"});
  EXPECT_EQ(std::get<PointerProxy::OperationErase>(traces.at(1)).pointer,
            sourcemeta::jsontoolkit::Pointer{"baz"});
}

TEST(JSONPointer_proxy, erase_many_in_subobject) {
  sourcemeta::jsontoolkit::JSON document = sourcemeta::jsontoolkit::parse(
      "{ \"foo\": { \"bar\": 1, \"baz\": 2, \"qux\": 3 } }");
  sourcemeta::jsontoolkit::PointerProxy transformer{document};
  std::vector<std::string> keys{"bar", "qux"};
  transformer.erase_keys({"foo"}, keys.cbegin(), keys.cend());

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse("{ \"foo\": { \"baz\": 2 } }");
  const auto &traces{transformer.traces()};

  EXPECT_EQ(document, expected);
  EXPECT_EQ(traces.size(), 2);

  using namespace sourcemeta::jsontoolkit;
  EXPECT_TRUE(
      std::holds_alternative<PointerProxy::OperationErase>(traces.at(0)));
  EXPECT_TRUE(
      std::holds_alternative<PointerProxy::OperationErase>(traces.at(1)));
  EXPECT_EQ(std::get<PointerProxy::OperationErase>(traces.at(0)).pointer,
            sourcemeta::jsontoolkit::Pointer({"foo", "bar"}));
  EXPECT_EQ(std::get<PointerProxy::OperationErase>(traces.at(1)).pointer,
            sourcemeta::jsontoolkit::Pointer({"foo", "qux"}));
}
