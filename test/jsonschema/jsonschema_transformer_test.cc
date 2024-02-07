#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_transformer, schema) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]");
  sourcemeta::jsontoolkit::SchemaTransformer transformer{document};
  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]");
  EXPECT_EQ(transformer.schema(), document);
  EXPECT_EQ(transformer.schema(), expected);
  EXPECT_EQ(expected, document);
}

TEST(JSONSchema_transformer, replace_with_empty_object) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]");
  sourcemeta::jsontoolkit::SchemaTransformer transformer{document};
  transformer.replace(sourcemeta::jsontoolkit::JSON::make_object());

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse("{}");
  const auto &traces{transformer.traces()};

  EXPECT_EQ(document, expected);
  EXPECT_EQ(traces.size(), 1);

  using namespace sourcemeta::jsontoolkit;
  EXPECT_TRUE(
      std::holds_alternative<SchemaTransformerOperationReplace>(traces.at(0)));
  EXPECT_TRUE(std::get<SchemaTransformerOperationReplace>(traces.at(0))
                  .pointer.empty());
}

TEST(JSONSchema_transformer, replace_subschema_with_empty_object) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]");
  sourcemeta::jsontoolkit::SchemaTransformer transformer{document};
  transformer.replace({1}, sourcemeta::jsontoolkit::JSON::make_object());

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse("[ 1, {}, 3 ]");
  const auto &traces{transformer.traces()};

  EXPECT_EQ(document, expected);
  EXPECT_EQ(traces.size(), 1);

  using namespace sourcemeta::jsontoolkit;
  EXPECT_TRUE(
      std::holds_alternative<SchemaTransformerOperationReplace>(traces.at(0)));
  EXPECT_EQ(std::get<SchemaTransformerOperationReplace>(traces.at(0)).pointer,
            sourcemeta::jsontoolkit::Pointer({1}));
}

TEST(JSONSchema_transformer, assign) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1 }");
  sourcemeta::jsontoolkit::SchemaTransformer transformer{document};
  transformer.assign("bar", sourcemeta::jsontoolkit::JSON{2});

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }");
  const auto &traces{transformer.traces()};

  EXPECT_EQ(document, expected);
  EXPECT_EQ(traces.size(), 1);

  using namespace sourcemeta::jsontoolkit;
  EXPECT_TRUE(
      std::holds_alternative<SchemaTransformerOperationAssign>(traces.at(0)));
  EXPECT_EQ(std::get<SchemaTransformerOperationAssign>(traces.at(0)).pointer,
            sourcemeta::jsontoolkit::Pointer{"bar"});
}

TEST(JSONSchema_transformer, assign_subobject) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": {} }");
  sourcemeta::jsontoolkit::SchemaTransformer transformer{document};
  transformer.assign({"bar"}, "baz", sourcemeta::jsontoolkit::JSON{2});

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": { \"baz\": 2 } }");
  const auto &traces{transformer.traces()};

  EXPECT_EQ(document, expected);
  EXPECT_EQ(traces.size(), 1);

  using namespace sourcemeta::jsontoolkit;
  EXPECT_TRUE(
      std::holds_alternative<SchemaTransformerOperationAssign>(traces.at(0)));
  EXPECT_EQ(std::get<SchemaTransformerOperationAssign>(traces.at(0)).pointer,
            sourcemeta::jsontoolkit::Pointer({"bar", "baz"}));
}

TEST(JSONSchema_transformer, erase) {
  sourcemeta::jsontoolkit::JSON document =
      sourcemeta::jsontoolkit::parse("{ \"foo\": 1, \"bar\": 2 }");
  sourcemeta::jsontoolkit::SchemaTransformer transformer{document};
  transformer.erase("foo");

  const sourcemeta::jsontoolkit::JSON expected =
      sourcemeta::jsontoolkit::parse("{ \"bar\": 2 }");
  const auto &traces{transformer.traces()};

  EXPECT_EQ(document, expected);
  EXPECT_EQ(traces.size(), 1);

  using namespace sourcemeta::jsontoolkit;
  EXPECT_TRUE(
      std::holds_alternative<SchemaTransformerOperationErase>(traces.at(0)));
  EXPECT_EQ(std::get<SchemaTransformerOperationErase>(traces.at(0)).pointer,
            sourcemeta::jsontoolkit::Pointer{"foo"});
}
