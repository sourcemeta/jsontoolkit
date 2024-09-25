#include <gtest/gtest.h>

#include <tuple>
#include <vector>

#include <sourcemeta/jsontoolkit/evaluator.h>
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

TEST(JSONSchema_evaluator_evaluate, fast_step_defines_true) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionDefines{Pointer{}, Pointer{}, "#", "", true, true,
                                     SchemaCompilerValueString{"foo"}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_step_defines_false) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{
      SchemaCompilerAssertionDefines{Pointer{}, Pointer{}, "#", "", true, true,
                                     SchemaCompilerValueString{"bar"}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_step_fail) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{SchemaCompilerAssertionFail{
      Pointer{}, Pointer{}, "#", "", true, true, SchemaCompilerValueNone{}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_step_type_true) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{SchemaCompilerAssertionTypeStrict{
      Pointer{}, Pointer{}, "#", "", true, true,
      SchemaCompilerValueType{JSON::Type::Object}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_step_type_false) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{SchemaCompilerAssertionTypeStrict{
      Pointer{}, Pointer{}, "#", "", true, true,
      SchemaCompilerValueType{JSON::Type::String}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_step_or_empty) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{SchemaCompilerLogicalOr{
      Pointer{}, Pointer{}, "#", "", true, true, false, {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_step_or_false) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionTypeStrict{
          Pointer{}, Pointer{}, "#", "", true, true,
          SchemaCompilerValueType{JSON::Type::String}},
      SchemaCompilerAssertionTypeStrict{
          Pointer{}, Pointer{}, "#", "", true, true,
          SchemaCompilerValueType{JSON::Type::Array}}};

  const SchemaCompilerTemplate steps{SchemaCompilerLogicalOr{
      Pointer{}, Pointer{}, "#", "", true, true, false, children}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_step_and_empty) {
  using namespace sourcemeta::jsontoolkit;
  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{Pointer{},
                               Pointer{},
                               "#",
                               "",
                               true,
                               true,
                               SchemaCompilerValueNone{},
                               {}}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_step_and_false) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{
      SchemaCompilerAssertionTypeStrict{
          Pointer{}, Pointer{}, "#", "", true, true,
          SchemaCompilerValueType{JSON::Type::String}},
      SchemaCompilerAssertionTypeStrict{
          Pointer{}, Pointer{}, "#", "", true, true,
          SchemaCompilerValueType{JSON::Type::Array}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalAnd{Pointer{}, Pointer{}, "#", "", true, true,
                               SchemaCompilerValueNone{}, children}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_loop_properties_empty) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{}, Pointer{}, "#/loop/type", "", true, true,
      SchemaCompilerValueType{JSON::Type::String}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{"loop"},
                                   {},
                                   "#/loop",
                                   "",
                                   true,
                                   true,
                                   SchemaCompilerValueNone{},
                                   children}};

  const JSON instance{parse("{}")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_loop_properties_single_true) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{"loop", "type"}, Pointer{}, "#/loop/type", "", true, true,
      SchemaCompilerValueType{JSON::Type::Integer}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{"loop"},
                                   {},
                                   "#/loop",
                                   "",
                                   true,
                                   true,
                                   SchemaCompilerValueNone{},
                                   children}};

  const JSON instance{parse("{ \"foo\": 1 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_loop_properties_single_false) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{"loop", "type"}, Pointer{}, "#/loop/type", "", true, true,
      SchemaCompilerValueType{JSON::Type::Integer}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{"loop"},
                                   {},
                                   "#/loop",
                                   "",
                                   true,
                                   true,
                                   SchemaCompilerValueNone{},
                                   children}};

  const JSON instance{parse("{ \"foo\": true }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_loop_properties_multi_true) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{"loop", "type"}, Pointer{}, "#/loop/type", "", true, true,
      SchemaCompilerValueType{JSON::Type::Integer}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{"loop"},
                                   {},
                                   "#/loop",
                                   "",
                                   true,
                                   true,
                                   SchemaCompilerValueNone{},
                                   children}};

  const JSON instance{parse("{ \"foo\": 1, \"bar\": 2 }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_loop_properties_multi_false) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{"loop", "type"}, Pointer{}, "#/loop/type", "", true, true,
      SchemaCompilerValueType{JSON::Type::Integer}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopProperties{{"loop"},
                                   {},
                                   "#/loop",
                                   "",
                                   true,
                                   true,
                                   SchemaCompilerValueNone{},
                                   children}};

  const JSON instance{parse("{ \"foo\": 1, \"bar\": true }")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_regex_true) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate steps{SchemaCompilerAssertionRegex{
      Pointer{}, Pointer{}, "#", "", true, true,
      SchemaCompilerValueRegex{std::regex{"^a", std::regex::ECMAScript},
                               "^a"}}};

  const JSON instance{"abc"};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_regex_false) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate steps{SchemaCompilerAssertionRegex{
      Pointer{}, Pointer{}, "#", "", true, true,
      SchemaCompilerValueRegex{std::regex{"^a", std::regex::ECMAScript},
                               "^a"}}};

  const JSON instance{"foo"};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_step_not_type_true) {
  using namespace sourcemeta::jsontoolkit;
  SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{}, Pointer{}, "#", "", true, true,
      SchemaCompilerValueType{JSON::Type::Integer}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalNot{Pointer{}, Pointer{}, "#", "", true, true,
                               SchemaCompilerValueNone{}, std::move(children)}};

  const JSON instance{"foo"};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_step_not_type_false) {
  using namespace sourcemeta::jsontoolkit;
  SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{}, Pointer{}, "#", "", true, true,
      SchemaCompilerValueType{JSON::Type::Integer}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLogicalNot{Pointer{}, Pointer{}, "#", "", true, true,
                               SchemaCompilerValueNone{}, std::move(children)}};

  const JSON instance{5};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_loop_items_empty) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{}, Pointer{}, "#/loop/type", "", true, true,
      SchemaCompilerValueType{JSON::Type::String}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopItems{{"loop"},
                              {},
                              "#/loop",
                              "",
                              true,
                              true,
                              SchemaCompilerValueUnsignedInteger{0},
                              children}};

  const JSON instance{parse("[]")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_loop_items_single_true) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{}, Pointer{}, "#/loop/type", "", true, true,
      SchemaCompilerValueType{JSON::Type::String}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopItems{{"loop"},
                              {},
                              "#/loop",
                              "",
                              true,
                              true,
                              SchemaCompilerValueUnsignedInteger{0},
                              children}};

  const JSON instance{parse("[ \"foo\" ]")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_loop_items_single_false) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{}, Pointer{}, "#/loop/type", "", true, true,
      SchemaCompilerValueType{JSON::Type::String}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopItems{{"loop"},
                              {},
                              "#/loop",
                              "",
                              true,
                              true,
                              SchemaCompilerValueUnsignedInteger{0},
                              children}};

  const JSON instance{parse("[ 5 ]")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_loop_items_multi_true) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{}, Pointer{}, "#/loop/type", "", true, true,
      SchemaCompilerValueType{JSON::Type::String}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopItems{{"loop"},
                              {},
                              "#/loop",
                              "",
                              true,
                              true,
                              SchemaCompilerValueUnsignedInteger{0},
                              children}};

  const JSON instance{parse("[ \"foo\", \"bar\", \"baz\" ]")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_loop_items_multi_false) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{}, Pointer{}, "#/loop/type", "", true, true,
      SchemaCompilerValueType{JSON::Type::String}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopItems{{"loop"},
                              {},
                              "#/loop",
                              "",
                              true,
                              true,
                              SchemaCompilerValueUnsignedInteger{0},
                              children}};

  const JSON instance{parse("[ \"foo\", 4, \"baz\" ]")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_loop_items_with_index_empty) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{}, Pointer{}, "#/loop/type", "", true, true,
      SchemaCompilerValueType{JSON::Type::String}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopItems{{"loop"},
                              {},
                              "#/loop",
                              "",
                              true,
                              true,
                              SchemaCompilerValueUnsignedInteger{2},
                              children}};

  const JSON instance{parse("[]")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_loop_items_with_index_less) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{}, Pointer{}, "#/loop/type", "", true, true,
      SchemaCompilerValueType{JSON::Type::String}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopItems{{"loop"},
                              {},
                              "#/loop",
                              "",
                              true,
                              true,
                              SchemaCompilerValueUnsignedInteger{2},
                              children}};

  const JSON instance{parse("[ 1, 2 ]")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_loop_items_with_index_match) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{}, Pointer{}, "#/loop/type", "", true, true,
      SchemaCompilerValueType{JSON::Type::String}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopItems{{"loop"},
                              {},
                              "#/loop",
                              "",
                              true,
                              true,
                              SchemaCompilerValueUnsignedInteger{2},
                              children}};

  const JSON instance{parse("[ 1, 2, \"foo\", \"bar\" ]")};
  const auto result{evaluate(steps, instance)};
  EXPECT_TRUE(result);
}

TEST(JSONSchema_evaluator_evaluate, fast_loop_items_with_index_no_match) {
  using namespace sourcemeta::jsontoolkit;

  const SchemaCompilerTemplate children{SchemaCompilerAssertionTypeStrict{
      Pointer{}, Pointer{}, "#/loop/type", "", true, true,
      SchemaCompilerValueType{JSON::Type::String}}};

  const SchemaCompilerTemplate steps{
      SchemaCompilerLoopItems{{"loop"},
                              {},
                              "#/loop",
                              "",
                              true,
                              true,
                              SchemaCompilerValueUnsignedInteger{2},
                              children}};

  const JSON instance{parse("[ 1, 2, 3, \"foo\" ]")};
  const auto result{evaluate(steps, instance)};
  EXPECT_FALSE(result);
}
