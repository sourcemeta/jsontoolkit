#include <gtest/gtest.h>

#include <vector>

#include <sourcemeta/core/json.h>
#include <sourcemeta/core/jsonpointer.h>

TEST(JSONPointer_proxy, getter) {
  sourcemeta::core::JSON document = sourcemeta::core::parse("[ 1, 2, 3 ]");
  sourcemeta::core::PointerProxy transformer{document};
  const sourcemeta::core::JSON expected =
      sourcemeta::core::parse("[ 1, 2, 3 ]");
  EXPECT_EQ(transformer.value(), document);
  EXPECT_EQ(transformer.value(), expected);
  EXPECT_EQ(expected, document);
}

TEST(JSONPointer_proxy, replace_with_empty_object) {
  sourcemeta::core::JSON document = sourcemeta::core::parse("[ 1, 2, 3 ]");
  sourcemeta::core::PointerProxy transformer{document};
  transformer.replace(sourcemeta::core::JSON::make_object());

  const sourcemeta::core::JSON expected = sourcemeta::core::parse("{}");
  const auto &traces{transformer.traces()};

  EXPECT_EQ(document, expected);
  EXPECT_EQ(traces.size(), 1);

  using namespace sourcemeta::core;
  EXPECT_TRUE(
      std::holds_alternative<PointerProxy::OperationReplace>(traces.at(0)));
  EXPECT_TRUE(
      std::get<PointerProxy::OperationReplace>(traces.at(0)).pointer.empty());
}

TEST(JSONPointer_proxy, replace_subschema_with_empty_object) {
  sourcemeta::core::JSON document = sourcemeta::core::parse("[ 1, 2, 3 ]");
  sourcemeta::core::PointerProxy transformer{document};
  transformer.replace({1}, sourcemeta::core::JSON::make_object());

  const sourcemeta::core::JSON expected =
      sourcemeta::core::parse("[ 1, {}, 3 ]");
  const auto &traces{transformer.traces()};

  EXPECT_EQ(document, expected);
  EXPECT_EQ(traces.size(), 1);

  using namespace sourcemeta::core;
  EXPECT_TRUE(
      std::holds_alternative<PointerProxy::OperationReplace>(traces.at(0)));
  EXPECT_EQ(std::get<PointerProxy::OperationReplace>(traces.at(0)).pointer,
            sourcemeta::core::Pointer({1}));
}

TEST(JSONPointer_proxy, assign) {
  sourcemeta::core::JSON document = sourcemeta::core::parse("{ \"foo\": 1 }");
  sourcemeta::core::PointerProxy transformer{document};
  transformer.assign("bar", sourcemeta::core::JSON{2});

  const sourcemeta::core::JSON expected =
      sourcemeta::core::parse("{ \"foo\": 1, \"bar\": 2 }");
  const auto &traces{transformer.traces()};

  EXPECT_EQ(document, expected);
  EXPECT_EQ(traces.size(), 1);

  using namespace sourcemeta::core;
  EXPECT_TRUE(
      std::holds_alternative<PointerProxy::OperationAssign>(traces.at(0)));
  EXPECT_EQ(std::get<PointerProxy::OperationAssign>(traces.at(0)).pointer,
            sourcemeta::core::Pointer{"bar"});
}

TEST(JSONPointer_proxy, assign_subobject) {
  sourcemeta::core::JSON document =
      sourcemeta::core::parse("{ \"foo\": 1, \"bar\": {} }");
  sourcemeta::core::PointerProxy transformer{document};
  transformer.assign({"bar"}, "baz", sourcemeta::core::JSON{2});

  const sourcemeta::core::JSON expected =
      sourcemeta::core::parse("{ \"foo\": 1, \"bar\": { \"baz\": 2 } }");
  const auto &traces{transformer.traces()};

  EXPECT_EQ(document, expected);
  EXPECT_EQ(traces.size(), 1);

  using namespace sourcemeta::core;
  EXPECT_TRUE(
      std::holds_alternative<PointerProxy::OperationAssign>(traces.at(0)));
  EXPECT_EQ(std::get<PointerProxy::OperationAssign>(traces.at(0)).pointer,
            sourcemeta::core::Pointer({"bar", "baz"}));
}

TEST(JSONPointer_proxy, erase) {
  sourcemeta::core::JSON document =
      sourcemeta::core::parse("{ \"foo\": 1, \"bar\": 2 }");
  sourcemeta::core::PointerProxy transformer{document};
  transformer.erase("foo");

  const sourcemeta::core::JSON expected =
      sourcemeta::core::parse("{ \"bar\": 2 }");
  const auto &traces{transformer.traces()};

  EXPECT_EQ(document, expected);
  EXPECT_EQ(traces.size(), 1);

  using namespace sourcemeta::core;
  EXPECT_TRUE(
      std::holds_alternative<PointerProxy::OperationErase>(traces.at(0)));
  EXPECT_EQ(std::get<PointerProxy::OperationErase>(traces.at(0)).pointer,
            sourcemeta::core::Pointer{"foo"});
}

TEST(JSONPointer_proxy, erase_in_subobject) {
  sourcemeta::core::JSON document =
      sourcemeta::core::parse("{ \"foo\": { \"bar\": 1, \"baz\": 2 } }");
  sourcemeta::core::PointerProxy transformer{document};
  transformer.erase({"foo"}, "bar");

  const sourcemeta::core::JSON expected =
      sourcemeta::core::parse("{ \"foo\": { \"baz\": 2 } }");
  const auto &traces{transformer.traces()};

  EXPECT_EQ(document, expected);
  EXPECT_EQ(traces.size(), 1);

  using namespace sourcemeta::core;
  EXPECT_TRUE(
      std::holds_alternative<PointerProxy::OperationErase>(traces.at(0)));
  EXPECT_EQ(std::get<PointerProxy::OperationErase>(traces.at(0)).pointer,
            sourcemeta::core::Pointer({"foo", "bar"}));
}

TEST(JSONPointer_proxy, erase_many) {
  sourcemeta::core::JSON document =
      sourcemeta::core::parse("{ \"foo\": 1, \"bar\": 2, \"baz\": 3 }");
  sourcemeta::core::PointerProxy transformer{document};
  std::vector<std::string> keys{"foo", "baz"};
  transformer.erase_keys(keys.cbegin(), keys.cend());

  const sourcemeta::core::JSON expected =
      sourcemeta::core::parse("{ \"bar\": 2 }");
  const auto &traces{transformer.traces()};

  EXPECT_EQ(document, expected);
  EXPECT_EQ(traces.size(), 2);

  using namespace sourcemeta::core;
  EXPECT_TRUE(
      std::holds_alternative<PointerProxy::OperationErase>(traces.at(0)));
  EXPECT_TRUE(
      std::holds_alternative<PointerProxy::OperationErase>(traces.at(1)));
  EXPECT_EQ(std::get<PointerProxy::OperationErase>(traces.at(0)).pointer,
            sourcemeta::core::Pointer{"foo"});
  EXPECT_EQ(std::get<PointerProxy::OperationErase>(traces.at(1)).pointer,
            sourcemeta::core::Pointer{"baz"});
}

TEST(JSONPointer_proxy, erase_many_in_subobject) {
  sourcemeta::core::JSON document = sourcemeta::core::parse(
      "{ \"foo\": { \"bar\": 1, \"baz\": 2, \"qux\": 3 } }");
  sourcemeta::core::PointerProxy transformer{document};
  std::vector<std::string> keys{"bar", "qux"};
  transformer.erase_keys({"foo"}, keys.cbegin(), keys.cend());

  const sourcemeta::core::JSON expected =
      sourcemeta::core::parse("{ \"foo\": { \"baz\": 2 } }");
  const auto &traces{transformer.traces()};

  EXPECT_EQ(document, expected);
  EXPECT_EQ(traces.size(), 2);

  using namespace sourcemeta::core;
  EXPECT_TRUE(
      std::holds_alternative<PointerProxy::OperationErase>(traces.at(0)));
  EXPECT_TRUE(
      std::holds_alternative<PointerProxy::OperationErase>(traces.at(1)));
  EXPECT_EQ(std::get<PointerProxy::OperationErase>(traces.at(0)).pointer,
            sourcemeta::core::Pointer({"foo", "bar"}));
  EXPECT_EQ(std::get<PointerProxy::OperationErase>(traces.at(1)).pointer,
            sourcemeta::core::Pointer({"foo", "qux"}));
}
