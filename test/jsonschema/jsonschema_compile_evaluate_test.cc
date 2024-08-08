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
                                     "",
                                     true,
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
                                     "",
                                     true,
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
                                     "",
                                     true,
                                     SchemaCompilerValueString{"foo"},
                                     {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionDefines{{SchemaCompilerTargetType::Instance, {}},
                                     Pointer{},
                                     Pointer{},
                                     "#",
                                     "",
                                     true,
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
                                     "",
                                     true,
                                     SchemaCompilerValueString{"xxx"},
                                     {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionDefines{{SchemaCompilerTargetType::Instance, {}},
                                     Pointer{},
                                     Pointer{},
                                     "#",
                                     "",
                                     true,
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
                                  "",
                                  true,
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
                                     "",
                                     true,
                                     SchemaCompilerValueString{"foo"},
                                     {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionFail{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  "",
                                  true,
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
                                     "",
                                     true,
                                     SchemaCompilerValueString{"xxx"},
                                     {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionFail{{SchemaCompilerTargetType::Instance, {}},
                                  Pointer{},
                                  Pointer{},
                                  "#",
                                  "",
                                  true,
                                  SchemaCompilerValueNone{},
                                  condition}};

  const JSON instance{parse("{ \"foo\": 1, \"bar\": 2 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_type_true_no_condition) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::Object},
      {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_type_false_no_condition) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
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
                              "",
                              true,
                              false,
                              {},
                              {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_or_no_condition_true) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionTypeStrict{
          {SchemaCompilerTargetType::Instance, {}},
          Pointer{},
          Pointer{},
          "#",
          "",
          true,
          SchemaCompilerValueType{JSON::Type::String},
          {}},
      SchemaCompilerAssertionTypeStrict{
          {SchemaCompilerTargetType::Instance, {}},
          Pointer{},
          Pointer{},
          "#",
          "",
          true,
          SchemaCompilerValueType{JSON::Type::Object},
          {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{{SchemaCompilerTargetType::Instance, {}},
                              Pointer{},
                              Pointer{},
                              "#",
                              "",
                              true,
                              false,
                              children,
                              {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_or_no_condition_false) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionTypeStrict{
          {SchemaCompilerTargetType::Instance, {}},
          Pointer{},
          Pointer{},
          "#",
          "",
          true,
          SchemaCompilerValueType{JSON::Type::String},
          {}},
      SchemaCompilerAssertionTypeStrict{
          {SchemaCompilerTargetType::Instance, {}},
          Pointer{},
          Pointer{},
          "#",
          "",
          true,
          SchemaCompilerValueType{JSON::Type::Array},
          {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{{SchemaCompilerTargetType::Instance, {}},
                              Pointer{},
                              Pointer{},
                              "#",
                              "",
                              true,
                              false,
                              children,
                              {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_compile_evaluate,
     fast_step_or_no_condition_true_with_callback) {
  using namespace sourcemeta::jsontoolkit;

  const auto assertion_1{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};
  const auto assertion_2{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::Object},
      {}}};

  const SchemaCompilerTemplate children{assertion_1, assertion_2};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{{SchemaCompilerTargetType::Instance, {}},
                              Pointer{},
                              Pointer{},
                              "#",
                              "",
                              true,
                              false,
                              children,
                              {assertion_1}}};

  std::vector<
      std::tuple<bool, SchemaCompilerTemplate::value_type, Pointer, JSON, JSON>>
      trace;
  const JSON instance{"foo bar"};
  const auto result{evaluate(
      steps, instance, SchemaCompilerEvaluationMode::Fast,
      [&trace](const sourcemeta::jsontoolkit::SchemaCompilerEvaluationType type,
               const bool subresult,
               const SchemaCompilerTemplate::value_type &step,
               const Pointer &evaluate_path, const Pointer &,
               const JSON &document, const JSON &value) {
        if (type !=
            sourcemeta::jsontoolkit::SchemaCompilerEvaluationType::Post) {
          return;
        }

        trace.push_back({subresult, step, evaluate_path, document, value});
      })};

  EXPECT_TRUE(result);
  EXPECT_EQ(trace.size(), 2);

  EXPECT_TRUE(std::get<0>(trace.at(0)));
  EXPECT_TRUE(std::holds_alternative<SchemaCompilerAssertionTypeStrict>(
      std::get<1>(trace.at(0))));
  EXPECT_TRUE(std::get<2>(trace.at(0)).empty());
  EXPECT_EQ(std::get<3>(trace.at(0)), instance);
  EXPECT_TRUE(std::get<4>(trace.at(0)).is_null());

  EXPECT_TRUE(std::get<0>(trace.at(1)));
  EXPECT_TRUE(std::holds_alternative<SchemaCompilerLogicalOr>(
      std::get<1>(trace.at(1))));
  EXPECT_TRUE(std::get<2>(trace.at(1)).empty());
  EXPECT_EQ(std::get<3>(trace.at(1)), instance);
  EXPECT_TRUE(std::get<4>(trace.at(1)).is_null());
}

TEST(JSONSchema_compile_evaluate,
     exhaustive_step_or_no_condition_true_with_callback) {
  using namespace sourcemeta::jsontoolkit;

  const auto assertion_1{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};
  const auto assertion_2{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::Object},
      {}}};

  const SchemaCompilerTemplate children{assertion_1, assertion_2};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalOr{{SchemaCompilerTargetType::Instance, {}},
                              Pointer{},
                              Pointer{},
                              "#",
                              "",
                              true,
                              false,
                              children,
                              {assertion_1}}};

  std::vector<
      std::tuple<bool, SchemaCompilerTemplate::value_type, Pointer, JSON, JSON>>
      trace;
  const JSON instance{"foo bar"};
  const auto result{evaluate(
      steps, instance, SchemaCompilerEvaluationMode::Exhaustive,
      [&trace](const sourcemeta::jsontoolkit::SchemaCompilerEvaluationType type,
               const bool subresult,
               const SchemaCompilerTemplate::value_type &step,
               const Pointer &evaluate_path, const Pointer &,
               const JSON &document, const JSON &value) {
        if (type !=
            sourcemeta::jsontoolkit::SchemaCompilerEvaluationType::Post) {
          return;
        }

        trace.push_back({subresult, step, evaluate_path, document, value});
      })};

  EXPECT_TRUE(result);
  EXPECT_EQ(trace.size(), 3);

  EXPECT_TRUE(std::get<0>(trace.at(0)));
  EXPECT_TRUE(std::holds_alternative<SchemaCompilerAssertionTypeStrict>(
      std::get<1>(trace.at(0))));
  EXPECT_TRUE(std::get<2>(trace.at(0)).empty());
  EXPECT_EQ(std::get<3>(trace.at(0)), instance);
  EXPECT_TRUE(std::get<4>(trace.at(0)).is_null());

  EXPECT_FALSE(std::get<0>(trace.at(1)));
  EXPECT_TRUE(std::holds_alternative<SchemaCompilerAssertionTypeStrict>(
      std::get<1>(trace.at(1))));
  EXPECT_TRUE(std::get<2>(trace.at(1)).empty());
  EXPECT_EQ(std::get<3>(trace.at(1)), instance);
  EXPECT_TRUE(std::get<4>(trace.at(1)).is_null());

  EXPECT_TRUE(std::get<0>(trace.at(2)));
  EXPECT_TRUE(std::holds_alternative<SchemaCompilerLogicalOr>(
      std::get<1>(trace.at(2))));
  EXPECT_TRUE(std::get<2>(trace.at(2)).empty());
  EXPECT_EQ(std::get<3>(trace.at(2)), instance);
  EXPECT_TRUE(std::get<4>(trace.at(2)).is_null());
}

TEST(JSONSchema_compile_evaluate, fast_step_and_empty_no_condition) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{{SchemaCompilerTargetType::Instance, {}},
                               Pointer{},
                               Pointer{},
                               "#",
                               "",
                               true,
                               SchemaCompilerValueNone{},
                               {},
                               {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_and_no_condition_true) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::Object},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{{SchemaCompilerTargetType::Instance, {}},
                               Pointer{},
                               Pointer{},
                               "#",
                               "",
                               true,
                               SchemaCompilerValueNone{},
                               children,
                               {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_and_no_condition_false) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionTypeStrict{
          {SchemaCompilerTargetType::Instance, {}},
          Pointer{},
          Pointer{},
          "#",
          "",
          true,
          SchemaCompilerValueType{JSON::Type::String},
          {}},
      SchemaCompilerAssertionTypeStrict{
          {SchemaCompilerTargetType::Instance, {}},
          Pointer{},
          Pointer{},
          "#",
          "",
          true,
          SchemaCompilerValueType{JSON::Type::Array},
          {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{{SchemaCompilerTargetType::Instance, {}},
                               Pointer{},
                               Pointer{},
                               "#",
                               "",
                               true,
                               SchemaCompilerValueNone{},
                               children,
                               {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_compile_evaluate, fast_loop_properties_empty) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#/loop/type",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{SchemaCompilerTargetType::Instance, {}},
                                   {"loop"},
                                   {},
                                   "#/loop",
                                   "",
                                   true,
                                   true,
                                   children,
                                   {}}};

  const JSON instance{parse("{}")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_loop_properties_single_true) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{"loop", "type"},
      Pointer{},
      "#/loop/type",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::Integer},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{SchemaCompilerTargetType::Instance, {}},
                                   {"loop"},
                                   {},
                                   "#/loop",
                                   "",
                                   true,
                                   true,
                                   children,
                                   {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_loop_properties_single_false) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{"loop", "type"},
      Pointer{},
      "#/loop/type",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::Integer},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{SchemaCompilerTargetType::Instance, {}},
                                   {"loop"},
                                   {},
                                   "#/loop",
                                   "",
                                   true,
                                   true,
                                   children,
                                   {}}};

  const JSON instance{parse("{ \"foo\": true }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_compile_evaluate, fast_loop_properties_multi_true) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{"loop", "type"},
      Pointer{},
      "#/loop/type",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::Integer},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{SchemaCompilerTargetType::Instance, {}},
                                   {"loop"},
                                   {},
                                   "#/loop",
                                   "",
                                   true,
                                   true,
                                   children,
                                   {}}};

  const JSON instance{parse("{ \"foo\": 1, \"bar\": 2 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_loop_properties_multi_false) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{"loop", "type"},
      Pointer{},
      "#/loop/type",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::Integer},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{SchemaCompilerTargetType::Instance, {}},
                                   {"loop"},
                                   {},
                                   "#/loop",
                                   "",
                                   true,
                                   true,
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
      "",
      true,
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
      "",
      true,
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
      "",
      true,
      SchemaCompilerValueRegex{std::regex{"^a", std::regex::ECMAScript}, "^a"},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{SchemaCompilerTargetType::Instance, {}},
                                   {"loop"},
                                   {},
                                   "#/loop",
                                   "",
                                   true,
                                   true,
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
      "",
      true,
      SchemaCompilerValueRegex{std::regex{"^a", std::regex::ECMAScript}, "^a"},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{SchemaCompilerTargetType::Instance, {}},
                                   {"loop"},
                                   {},
                                   "#/loop",
                                   "",
                                   true,
                                   true,
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
      "",
      true,
      SchemaCompilerValueRegex{std::regex{"^a", std::regex::ECMAScript}, "^a"},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{SchemaCompilerTargetType::Instance, {}},
                                   {"loop"},
                                   {},
                                   "#/loop",
                                   "",
                                   true,
                                   true,
                                   children,
                                   {}}};

  const JSON instance{parse("{ \"aaa\": 1, \"bbb\": true }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_not_type_true) {
  using namespace sourcemeta::jsontoolkit;
  SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::Integer},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalNot{{SchemaCompilerTargetType::Instance, {}},
                               Pointer{},
                               Pointer{},
                               "#",
                               "",
                               true,
                               SchemaCompilerValueNone{},
                               std::move(children),
                               {}}};

  const JSON instance{"foo"};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_not_type_false) {
  using namespace sourcemeta::jsontoolkit;
  SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::Integer},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalNot{{SchemaCompilerTargetType::Instance, {}},
                               Pointer{},
                               Pointer{},
                               "#",
                               "",
                               true,
                               SchemaCompilerValueNone{},
                               std::move(children),
                               {}}};

  const JSON instance{5};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_compile_evaluate, fast_loop_items_empty) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#/loop/type",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopItems{{SchemaCompilerTargetType::Instance, {}},
                              {"loop"},
                              {},
                              "#/loop",
                              "",
                              true,
                              SchemaCompilerValueUnsignedInteger{0},
                              children,
                              {}}};

  const JSON instance{parse("[]")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_loop_items_single_true) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#/loop/type",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopItems{{SchemaCompilerTargetType::Instance, {}},
                              {"loop"},
                              {},
                              "#/loop",
                              "",
                              true,
                              SchemaCompilerValueUnsignedInteger{0},
                              children,
                              {}}};

  const JSON instance{parse("[ \"foo\" ]")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_loop_items_single_false) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#/loop/type",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopItems{{SchemaCompilerTargetType::Instance, {}},
                              {"loop"},
                              {},
                              "#/loop",
                              "",
                              true,
                              SchemaCompilerValueUnsignedInteger{0},
                              children,
                              {}}};

  const JSON instance{parse("[ 5 ]")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_compile_evaluate, fast_loop_items_multi_true) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#/loop/type",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopItems{{SchemaCompilerTargetType::Instance, {}},
                              {"loop"},
                              {},
                              "#/loop",
                              "",
                              true,
                              SchemaCompilerValueUnsignedInteger{0},
                              children,
                              {}}};

  const JSON instance{parse("[ \"foo\", \"bar\", \"baz\" ]")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_loop_items_multi_false) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#/loop/type",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopItems{{SchemaCompilerTargetType::Instance, {}},
                              {"loop"},
                              {},
                              "#/loop",
                              "",
                              true,
                              SchemaCompilerValueUnsignedInteger{0},
                              children,
                              {}}};

  const JSON instance{parse("[ \"foo\", 4, \"baz\" ]")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_size_greater_array_true) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{SchemaCompilerAssertionSizeGreater{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      SchemaCompilerValueUnsignedInteger{2},
      {}}};

  const JSON instance{parse("[ 1, 2, 3 ]")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_step_size_greater_array_false) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{SchemaCompilerAssertionSizeGreater{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#",
      "",
      true,
      SchemaCompilerValueUnsignedInteger{3},
      {}}};

  const JSON instance{parse("[ 1, 2, 3 ]")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_compile_evaluate, fast_loop_items_with_index_empty) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#/loop/type",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopItems{{SchemaCompilerTargetType::Instance, {}},
                              {"loop"},
                              {},
                              "#/loop",
                              "",
                              true,
                              SchemaCompilerValueUnsignedInteger{2},
                              children,
                              {}}};

  const JSON instance{parse("[]")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_loop_items_with_index_less) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#/loop/type",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopItems{{SchemaCompilerTargetType::Instance, {}},
                              {"loop"},
                              {},
                              "#/loop",
                              "",
                              true,
                              SchemaCompilerValueUnsignedInteger{2},
                              children,
                              {}}};

  const JSON instance{parse("[ 1, 2 ]")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_loop_items_with_index_match) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#/loop/type",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopItems{{SchemaCompilerTargetType::Instance, {}},
                              {"loop"},
                              {},
                              "#/loop",
                              "",
                              true,
                              SchemaCompilerValueUnsignedInteger{2},
                              children,
                              {}}};

  const JSON instance{parse("[ 1, 2, \"foo\", \"bar\" ]")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_compile_evaluate, fast_loop_items_with_index_no_match) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      {SchemaCompilerTargetType::Instance, {}},
      Pointer{},
      Pointer{},
      "#/loop/type",
      "",
      true,
      SchemaCompilerValueType{JSON::Type::String},
      {}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopItems{{SchemaCompilerTargetType::Instance, {}},
                              {"loop"},
                              {},
                              "#/loop",
                              "",
                              true,
                              SchemaCompilerValueUnsignedInteger{2},
                              children,
                              {}}};

  const JSON instance{parse("[ 1, 2, 3, \"foo\" ]")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}
