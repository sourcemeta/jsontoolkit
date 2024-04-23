#include <gtest/gtest.h>

#include <utility>
#include <vector>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_compile_evaluate, fast_step_defines_true_no_condition) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionDefines{{SchemaCompilerTargetType::Instance, {}},
                                     Pointer{},
                                     "#",
                                     SchemaCompilerValueString{"foo"},
                                     {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_defines_false_no_condition) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionDefines{{SchemaCompilerTargetType::Instance, {}},
                                     Pointer{},
                                     "#",
                                     SchemaCompilerValueString{"bar"},
                                     {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_defines_true_with_condition) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate condition{
      SchemaCompilerAssertionDefines{{SchemaCompilerTargetType::Instance, {}},
                                     Pointer{},
                                     "#",
                                     SchemaCompilerValueString{"foo"},
                                     {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionDefines{{SchemaCompilerTargetType::Instance, {}},
                                     Pointer{},
                                     "#",
                                     SchemaCompilerValueString{"bar"},
                                     condition}};

  const JSON instance{parse("{ \"foo\": 1, \"bar\": 2 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_defines_false_with_condition) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate condition{
      SchemaCompilerAssertionDefines{{SchemaCompilerTargetType::Instance, {}},
                                     Pointer{},
                                     "#",
                                     SchemaCompilerValueString{"xxx"},
                                     {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionDefines{{SchemaCompilerTargetType::Instance, {}},
                                     Pointer{},
                                     "#",
                                     SchemaCompilerValueString{"baz"},
                                     condition}};

  const JSON instance{parse("{ \"foo\": 1, \"bar\": 2 }")};
  const auto result{evaluate(steps, instance)};

  // As the rule won't execute
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_fail_no_condition) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionFail{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueNone{},
                                  {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_fail_with_condition_true) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate condition{
      SchemaCompilerAssertionDefines{{SchemaCompilerTargetType::Instance, {}},
                                     Pointer{},
                                     "#",
                                     SchemaCompilerValueString{"foo"},
                                     {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionFail{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueNone{},
                                  condition}};

  const JSON instance{parse("{ \"foo\": 1, \"bar\": 2 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_fail_with_condition_false) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate condition{
      SchemaCompilerAssertionDefines{{SchemaCompilerTargetType::Instance, {}},
                                     Pointer{},
                                     "#",
                                     SchemaCompilerValueString{"xxx"},
                                     {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionFail{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueNone{},
                                  condition}};

  const JSON instance{parse("{ \"foo\": 1, \"bar\": 2 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_type_true_no_condition) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Object},
                                  {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_type_false_no_condition) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_or_empty_no_condition) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{Pointer{}, "#", {}, {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_or_no_condition_true) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}},
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Object},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{Pointer{}, "#", children, {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_or_no_condition_false) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}},
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Array},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{Pointer{}, "#", children, {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_compile_evaluate,
     fast_step_or_no_condition_true_with_callback) {
  using namespace sourcemeta::jsontoolkit;

  const auto assertion_1{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}}};
  const auto assertion_2{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Object},
                                  {}}};

  const SchemaCompilerTemplate children{assertion_1, assertion_2};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{Pointer{}, "#", children, {assertion_1}}};

  std::vector<std::pair<bool, SchemaCompilerTemplate::value_type>> trace;
  const JSON instance{"foo bar"};
  const auto result{
      evaluate(steps, instance, SchemaCompilerEvaluationMode::Fast,
               [&trace](const bool subresult,
                        const SchemaCompilerTemplate::value_type &step) {
                 trace.push_back({subresult, step});
               })};

  EXPECT_TRUE(result);
  EXPECT_EQ(trace.size(), 2);

  EXPECT_TRUE(trace.at(0).first);
  EXPECT_TRUE(
      std::holds_alternative<SchemaCompilerAssertionType>(trace.at(0).second));

  EXPECT_TRUE(trace.at(1).first);
  EXPECT_TRUE(
      std::holds_alternative<SchemaCompilerLogicalOr>(trace.at(1).second));
}

TEST(JSONSchema_compile_evaluate,
     exhaustive_step_or_no_condition_true_with_callback) {
  using namespace sourcemeta::jsontoolkit;

  const auto assertion_1{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}}};
  const auto assertion_2{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Object},
                                  {}}};

  const SchemaCompilerTemplate children{assertion_1, assertion_2};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{Pointer{}, "#", children, {assertion_1}}};

  std::vector<std::pair<bool, SchemaCompilerTemplate::value_type>> trace;
  const JSON instance{"foo bar"};
  const auto result{
      evaluate(steps, instance, SchemaCompilerEvaluationMode::Exhaustive,
               [&trace](const bool subresult,
                        const SchemaCompilerTemplate::value_type &step) {
                 trace.push_back({subresult, step});
               })};

  EXPECT_TRUE(result);
  EXPECT_EQ(trace.size(), 3);

  EXPECT_TRUE(trace.at(0).first);
  EXPECT_TRUE(
      std::holds_alternative<SchemaCompilerAssertionType>(trace.at(0).second));

  EXPECT_FALSE(trace.at(1).first);
  EXPECT_TRUE(
      std::holds_alternative<SchemaCompilerAssertionType>(trace.at(1).second));

  EXPECT_TRUE(trace.at(2).first);
  EXPECT_TRUE(
      std::holds_alternative<SchemaCompilerLogicalOr>(trace.at(2).second));
}

TEST(JSONSchema_compile_evaluate, fast_step_and_empty_no_condition) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{Pointer{}, "#", {}, {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_and_no_condition_true) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Object},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{Pointer{}, "#", children, {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_and_no_condition_false) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}},
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Array},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{Pointer{}, "#", children, {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}
