#include <gtest/gtest.h>

#include <tuple>
#include <vector>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_compile_evaluate, fast_step_defines_true_no_condition) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionDefines{{SchemaCompilerTargetType::Instance, {}},
                                     Pointer{},
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
                                     Pointer{},
                                     "#",
                                     SchemaCompilerValueString{"foo"},
                                     {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionDefines{{SchemaCompilerTargetType::Instance, {}},
                                     Pointer{},
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
                                     Pointer{},
                                     "#",
                                     SchemaCompilerValueString{"xxx"},
                                     {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionDefines{{SchemaCompilerTargetType::Instance, {}},
                                     Pointer{},
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
                                     Pointer{},
                                     "#",
                                     SchemaCompilerValueString{"foo"},
                                     {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionFail{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
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
                                     Pointer{},
                                     "#",
                                     SchemaCompilerValueString{"xxx"},
                                     {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionFail{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
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
      SchemaCompilerLogicalOr{{SchemaCompilerTargetType::Instance, {}},
                              Pointer{},
                              Pointer{},
                              "#",
                              {},
                              {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_or_no_condition_true) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}},
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Object},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{{SchemaCompilerTargetType::Instance, {}},
                              Pointer{},
                              Pointer{},
                              "#",
                              children,
                              {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_or_no_condition_false) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}},
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Array},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{{SchemaCompilerTargetType::Instance, {}},
                              Pointer{},
                              Pointer{},
                              "#",
                              children,
                              {}}};

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
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}}};
  const auto assertion_2{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Object},
                                  {}}};

  const SchemaCompilerTemplate children{assertion_1, assertion_2};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{{SchemaCompilerTargetType::Instance, {}},
                              Pointer{},
                              Pointer{},
                              "#",
                              children,
                              {assertion_1}}};

  std::vector<
      std::tuple<bool, SchemaCompilerTemplate::value_type, Pointer, JSON>>
      trace;
  const JSON instance{"foo bar"};
  const auto result{evaluate(
      steps, instance, SchemaCompilerEvaluationMode::Fast,
      [&trace](
          const bool subresult, const SchemaCompilerTemplate::value_type &step,
          const Pointer &evaluate_path, const Pointer &, const JSON &value) {
        trace.push_back({subresult, step, evaluate_path, value});
      })};

  EXPECT_TRUE(result);
  EXPECT_EQ(trace.size(), 2);

  EXPECT_TRUE(std::get<0>(trace.at(0)));
  EXPECT_TRUE(std::holds_alternative<SchemaCompilerAssertionType>(
      std::get<1>(trace.at(0))));
  EXPECT_TRUE(std::get<2>(trace.at(0)).empty());
  EXPECT_TRUE(std::get<3>(trace.at(0)).is_null());

  EXPECT_TRUE(std::get<0>(trace.at(1)));
  EXPECT_TRUE(std::holds_alternative<SchemaCompilerLogicalOr>(
      std::get<1>(trace.at(1))));
  EXPECT_TRUE(std::get<2>(trace.at(1)).empty());
  EXPECT_TRUE(std::get<3>(trace.at(1)).is_null());
}

TEST(JSONSchema_compile_evaluate,
     exhaustive_step_or_no_condition_true_with_callback) {
  using namespace sourcemeta::jsontoolkit;

  const auto assertion_1{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}}};
  const auto assertion_2{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Object},
                                  {}}};

  const SchemaCompilerTemplate children{assertion_1, assertion_2};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{{SchemaCompilerTargetType::Instance, {}},
                              Pointer{},
                              Pointer{},
                              "#",
                              children,
                              {assertion_1}}};

  std::vector<
      std::tuple<bool, SchemaCompilerTemplate::value_type, Pointer, JSON>>
      trace;
  const JSON instance{"foo bar"};
  const auto result{evaluate(
      steps, instance, SchemaCompilerEvaluationMode::Exhaustive,
      [&trace](
          const bool subresult, const SchemaCompilerTemplate::value_type &step,
          const Pointer &evaluate_path, const Pointer &, const JSON &value) {
        trace.push_back({subresult, step, evaluate_path, value});
      })};

  EXPECT_TRUE(result);
  EXPECT_EQ(trace.size(), 3);

  EXPECT_TRUE(std::get<0>(trace.at(0)));
  EXPECT_TRUE(std::holds_alternative<SchemaCompilerAssertionType>(
      std::get<1>(trace.at(0))));
  EXPECT_TRUE(std::get<2>(trace.at(0)).empty());
  EXPECT_TRUE(std::get<3>(trace.at(0)).is_null());

  EXPECT_FALSE(std::get<0>(trace.at(1)));
  EXPECT_TRUE(std::holds_alternative<SchemaCompilerAssertionType>(
      std::get<1>(trace.at(1))));
  EXPECT_TRUE(std::get<2>(trace.at(1)).empty());
  EXPECT_TRUE(std::get<3>(trace.at(1)).is_null());

  EXPECT_TRUE(std::get<0>(trace.at(2)));
  EXPECT_TRUE(std::holds_alternative<SchemaCompilerLogicalOr>(
      std::get<1>(trace.at(2))));
  EXPECT_TRUE(std::get<2>(trace.at(2)).empty());
  EXPECT_TRUE(std::get<3>(trace.at(2)).is_null());
}

TEST(JSONSchema_compile_evaluate, fast_step_and_empty_no_condition) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{{SchemaCompilerTargetType::Instance, {}},
                               Pointer{},
                               Pointer{},
                               "#",
                               {},
                               {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_and_no_condition_true) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Object},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{{SchemaCompilerTargetType::Instance, {}},
                               Pointer{},
                               Pointer{},
                               "#",
                               children,
                               {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_and_no_condition_false) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}},
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  SchemaCompilerValueType{JSON::Type::Array},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{{SchemaCompilerTargetType::Instance, {}},
                               Pointer{},
                               Pointer{},
                               "#",
                               children,
                               {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_compile_evaluate, fast_loop_properties_empty) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#/loop/type",
                                  SchemaCompilerValueType{JSON::Type::String},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{SchemaCompilerTargetType::Instance, {}},
                                   {"loop"},
                                   {},
                                   "#/loop",
                                   children,
                                   {}}};

  const JSON instance{parse("{}")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_loop_properties_single_true) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{"loop", "type"},
                                  Pointer{},
                                  "#/loop/type",
                                  SchemaCompilerValueType{JSON::Type::Integer},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{SchemaCompilerTargetType::Instance, {}},
                                   {"loop"},
                                   {},
                                   "#/loop",
                                   children,
                                   {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_loop_properties_single_false) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{"loop", "type"},
                                  Pointer{},
                                  "#/loop/type",
                                  SchemaCompilerValueType{JSON::Type::Integer},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{SchemaCompilerTargetType::Instance, {}},
                                   {"loop"},
                                   {},
                                   "#/loop",
                                   children,
                                   {}}};

  const JSON instance{parse("{ \"foo\": true }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_compile_evaluate, fast_loop_properties_multi_true) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{"loop", "type"},
                                  Pointer{},
                                  "#/loop/type",
                                  SchemaCompilerValueType{JSON::Type::Integer},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{SchemaCompilerTargetType::Instance, {}},
                                   {"loop"},
                                   {},
                                   "#/loop",
                                   children,
                                   {}}};

  const JSON instance{parse("{ \"foo\": 1, \"bar\": 2 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_loop_properties_multi_false) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionType{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{"loop", "type"},
                                  Pointer{},
                                  "#/loop/type",
                                  SchemaCompilerValueType{JSON::Type::Integer},
                                  {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{SchemaCompilerTargetType::Instance, {}},
                                   {"loop"},
                                   {},
                                   "#/loop",
                                   children,
                                   {}}};

  const JSON instance{parse("{ \"foo\": 1, \"bar\": true }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_compile_evaluate, fast_regex_true) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate steps{SchemaCompilerAssertionRegex{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      SchemaCompilerValueRegex{std::regex{"^a", std::regex::ECMAScript}, "^a"},
      {}}};

  const JSON instance{"abc"};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_regex_false) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate steps{SchemaCompilerAssertionRegex{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      SchemaCompilerValueRegex{std::regex{"^a", std::regex::ECMAScript}, "^a"},
      {}}};

  const JSON instance{"foo"};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_compile_evaluate, fast_loop_regex_instance_basename_empty) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionRegex{
      {SchemaCompilerTargetType::InstanceBasename, {}},
      Pointer{"loop", "regex"},
      Pointer{},
      "#/loop/regex",
      SchemaCompilerValueRegex{std::regex{"^a", std::regex::ECMAScript}, "^a"},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{SchemaCompilerTargetType::Instance, {}},
                                   {"loop"},
                                   {},
                                   "#/loop",
                                   children,
                                   {}}};

  const JSON instance{parse("{}")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate,
     fast_loop_regex_instance_basename_multi_true) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionRegex{
      {SchemaCompilerTargetType::InstanceBasename, {}},
      Pointer{"loop", "regex"},
      Pointer{},
      "#/loop/regex",
      SchemaCompilerValueRegex{std::regex{"^a", std::regex::ECMAScript}, "^a"},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{SchemaCompilerTargetType::Instance, {}},
                                   {"loop"},
                                   {},
                                   "#/loop",
                                   children,
                                   {}}};

  const JSON instance{parse("{ \"aaa\": 1, \"abc\": true }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate,
     fast_loop_regex_instance_basename_multi_false) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionRegex{
      {SchemaCompilerTargetType::InstanceBasename, {}},
      Pointer{"loop", "regex"},
      Pointer{},
      "#/loop/regex",
      SchemaCompilerValueRegex{std::regex{"^a", std::regex::ECMAScript}, "^a"},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{SchemaCompilerTargetType::Instance, {}},
                                   {"loop"},
                                   {},
                                   "#/loop",
                                   children,
                                   {}}};

  const JSON instance{parse("{ \"aaa\": 1, \"bbb\": true }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}
