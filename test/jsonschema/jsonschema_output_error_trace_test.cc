#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/jsonschema.h>

namespace {
// TODO: this is temporary to let the code compile
// we should use a parameter for the SchemaCompilerErrorTraceOutput class
class SchemaCompilerErrorTraceOutput {
public:
  SchemaCompilerErrorTraceOutput(
      const sourcemeta::jsontoolkit::JSON &instance,
      const sourcemeta::jsontoolkit::WeakPointer &base)
      : instance_(instance), base_(base) {
    (void)instance_;
  }

  // Prevent accidental copies
  SchemaCompilerErrorTraceOutput(const SchemaCompilerErrorTraceOutput &) =
      delete;
  auto operator=(const SchemaCompilerErrorTraceOutput &)
      -> SchemaCompilerErrorTraceOutput & = delete;

  struct Entry {
    const std::string message;
    const sourcemeta::jsontoolkit::WeakPointer instance_location;
    const sourcemeta::jsontoolkit::WeakPointer evaluate_path;
  };

  auto operator()(
      const sourcemeta::jsontoolkit::SchemaCompilerEvaluationType, const bool,
      const sourcemeta::jsontoolkit::SchemaCompilerTemplate::value_type &,
      const sourcemeta::jsontoolkit::WeakPointer &evaluate_path,
      const sourcemeta::jsontoolkit::WeakPointer &instance_location,
      const sourcemeta::jsontoolkit::JSON &) {

    // Generate a message based on the input or type, result, and step.
    std::string message = "Evaluation of step";

    // Add a new entry to the output vector
    output.push_back({message, instance_location, evaluate_path});
  };

  using container_type = typename std::vector<Entry>;
  using const_iterator = typename container_type::const_iterator;
  auto begin() const -> const_iterator { return output.begin(); }
  auto end() const -> const_iterator { return output.end(); }
  auto cbegin() const -> const_iterator {
    return output.cbegin(); // Returns a const iterator to the beginning
  }
  auto cend() const -> const_iterator {
    return output.cend(); // Returns a const iterator to the end
  }

private:
// Exporting symbols that depends on the standard C++ library is considered
// safe.
// https://learn.microsoft.com/en-us/cpp/error-messages/compiler-warnings/compiler-warning-level-2-c4275?view=msvc-170&redirectedfrom=MSDN
#if defined(_MSC_VER)
#pragma warning(disable : 4251)
#endif
  const sourcemeta::jsontoolkit::JSON &instance_;
  const sourcemeta::jsontoolkit::WeakPointer base_;
  container_type output;
  std::set<sourcemeta::jsontoolkit::WeakPointer> mask;
#if defined(_MSC_VER)
#pragma warning(default : 4251)
#endif
};
} // namespace

#define EXPECT_OUTPUT(traces, index, expected_instance_location,               \
                      expected_evaluate_path, expected_message)                \
  EXPECT_TRUE(traces.size() > index);                                          \
  EXPECT_EQ(traces.at((index)).message, (expected_message));                   \
  EXPECT_EQ(                                                                   \
      traces.at((index)).instance_location,                                    \
      sourcemeta::jsontoolkit::to_pointer((expected_instance_location)));      \
  EXPECT_EQ(traces.at((index)).evaluate_path,                                  \
            sourcemeta::jsontoolkit::to_pointer((expected_evaluate_path)));

TEST(JSONSchema_output_error_trace, success_string_1) {

  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "type": "string"
  })JSON")};

  const auto schema_template{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{"foo"};
  const sourcemeta::jsontoolkit::WeakPointer empty_pointer{};
  SchemaCompilerErrorTraceOutput output{instance, empty_pointer};

  const auto result{sourcemeta::jsontoolkit::evaluate(
      schema_template, instance,
      sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode::Fast,
      std::ref(output))};

  EXPECT_TRUE(result);
  std::vector<SchemaCompilerErrorTraceOutput::Entry> traces{output.cbegin(),
                                                            output.cend()};
  EXPECT_TRUE(traces.empty());
}

TEST(JSONSchema_output_error_trace, success_oneof_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "oneOf": [
      { "type": "string" },
      { "minLength": 3 }
    ]
  })JSON")};

  const auto schema_template{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{"fo"};
  const sourcemeta::jsontoolkit::WeakPointer empty_pointer{};
  SchemaCompilerErrorTraceOutput output{instance, empty_pointer};
  const auto result{sourcemeta::jsontoolkit::evaluate(
      schema_template, instance,
      sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode::Fast,
      std::ref(output))};

  EXPECT_TRUE(result);
  std::vector<SchemaCompilerErrorTraceOutput::Entry> traces{output.cbegin(),
                                                            output.cend()};
  EXPECT_TRUE(traces.empty());
}

TEST(JSONSchema_output_error_trace, fail_string) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "type": "string"
  })JSON")};

  const auto schema_template{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};

  const sourcemeta::jsontoolkit::WeakPointer empty_pointer{};
  SchemaCompilerErrorTraceOutput output{instance, empty_pointer};
  const auto result{sourcemeta::jsontoolkit::evaluate(
      schema_template, instance,
      sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode::Fast,
      std::ref(output))};

  EXPECT_FALSE(result);
  std::vector<SchemaCompilerErrorTraceOutput::Entry> traces{output.cbegin(),
                                                            output.cend()};

  EXPECT_EQ(traces.size(), 1);
  // EXPECT_OUTPUT(
  //     traces, 0, "", "/type",
  //     "The value was expected to be of type string but it was of type
  //     integer");
}

TEST(JSONSchema_output_error_trace, fail_string_over_ref) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$ref": "#/$defs/string",
    "$defs": {
      "string": {
        "type": "string"
      }
    }
  })JSON")};

  const auto schema_template{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  const sourcemeta::jsontoolkit::WeakPointer empty_pointer{};
  SchemaCompilerErrorTraceOutput output{instance, empty_pointer};
  const auto result{sourcemeta::jsontoolkit::evaluate(
      schema_template, instance,
      sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode::Fast,
      std::ref(output))};

  EXPECT_FALSE(result);
  std::vector<SchemaCompilerErrorTraceOutput::Entry> traces{output.cbegin(),
                                                            output.cend()};

  EXPECT_EQ(traces.size(), 2);
  // EXPECT_OUTPUT(
  //     traces, 0, "", "/$ref/type",
  //     "The value was expected to be of type string but it was of type
  //     integer");
  // EXPECT_OUTPUT(traces, 1, "", "/$ref",
  //               "The integer value was expected to validate against the "
  //               "statically referenced schema");
}

TEST(JSONSchema_output_error_trace, fail_string_with_matching_base) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$ref": "#/$defs/string",
    "$defs": {
      "string": {
        "type": "string"
      }
    }
  })JSON")};

  const auto schema_template{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  const std::string ref = "$ref";
  const sourcemeta::jsontoolkit::WeakPointer pointer{std::cref(ref)};
  SchemaCompilerErrorTraceOutput output{instance, pointer};
  const auto result{sourcemeta::jsontoolkit::evaluate(
      schema_template, instance,
      sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode::Fast,
      std::ref(output))};

  EXPECT_FALSE(result);
  std::vector<SchemaCompilerErrorTraceOutput::Entry> traces{output.cbegin(),
                                                            output.cend()};

  EXPECT_EQ(traces.size(), 1);
  // EXPECT_OUTPUT(
  //     traces, 0, "", "/type",
  //     "The value was expected to be of type string but it was of type
  //     integer");
}

TEST(JSONSchema_output_error_trace, fail_string_with_non_matching_base) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$ref": "#/$defs/string",
    "$defs": {
      "string": {
        "type": "string"
      }
    }
  })JSON")};

  const auto schema_template{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{5};
  const std::string foo = "foo";
  const sourcemeta::jsontoolkit::WeakPointer pointer{std::cref(foo)};
  SchemaCompilerErrorTraceOutput output{instance, pointer};
  const auto result{sourcemeta::jsontoolkit::evaluate(
      schema_template, instance,
      sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode::Fast,
      std::ref(output))};

  EXPECT_FALSE(result);
  std::vector<SchemaCompilerErrorTraceOutput::Entry> traces{output.cbegin(),
                                                            output.cend()};

  EXPECT_EQ(traces.size(), 2);
  // EXPECT_OUTPUT(
  //     traces, 0, "", "/$ref/type",
  //     "The value was expected to be of type string but it was of type
  //     integer");
  // EXPECT_OUTPUT(traces, 1, "", "/$ref",
  //               "The integer value was expected to validate against the "
  //               "statically referenced schema");
}

TEST(JSONSchema_output_error_trace, fail_oneof_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "oneOf": [
      { "type": "string" },
      { "minLength": 3 }
    ]
  })JSON")};

  const auto schema_template{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{"foo"};
  const sourcemeta::jsontoolkit::WeakPointer empty_pointer;
  SchemaCompilerErrorTraceOutput output{instance, empty_pointer};
  const auto result{sourcemeta::jsontoolkit::evaluate(
      schema_template, instance,
      sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode::Fast,
      std::ref(output))};

  EXPECT_FALSE(result);
  std::vector<SchemaCompilerErrorTraceOutput::Entry> traces{output.cbegin(),
                                                            output.cend()};

  EXPECT_EQ(traces.size(), 1);
  // EXPECT_OUTPUT(traces, 0, "", "/oneOf",
  //               "The string value was expected to validate against one and "
  //               "only one of the 2 given subschemas");
}

TEST(JSONSchema_output_error_trace, fail_not_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "not": {
      "type": "string"
    }
  })JSON")};

  const auto schema_template{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{"foo"};
  const sourcemeta::jsontoolkit::WeakPointer empty_pointer;
  SchemaCompilerErrorTraceOutput output{instance, empty_pointer};
  const auto result{sourcemeta::jsontoolkit::evaluate(
      schema_template, instance,
      sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode::Fast,
      std::ref(output))};

  EXPECT_FALSE(result);
  std::vector<SchemaCompilerErrorTraceOutput::Entry> traces{output.cbegin(),
                                                            output.cend()};

  EXPECT_EQ(traces.size(), 1);
  // EXPECT_OUTPUT(traces, 0, "", "/not",
  //               "The string value was expected to not validate against the "
  //               "given subschema, but it did");
}

TEST(JSONSchema_output_error_trace, fail_not_not_1) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "not": {
      "not": {
        "type": "string"
      }
    }
  })JSON")};

  const auto schema_template{sourcemeta::jsontoolkit::compile(
      schema, sourcemeta::jsontoolkit::default_schema_walker,
      sourcemeta::jsontoolkit::official_resolver,
      sourcemeta::jsontoolkit::default_schema_compiler)};

  const sourcemeta::jsontoolkit::JSON instance{1};
  const sourcemeta::jsontoolkit::WeakPointer empty_pointer;
  SchemaCompilerErrorTraceOutput output{instance, empty_pointer};
  const auto result{sourcemeta::jsontoolkit::evaluate(
      schema_template, instance,
      sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode::Fast,
      std::ref(output))};

  EXPECT_FALSE(result);
  std::vector<SchemaCompilerErrorTraceOutput::Entry> traces{output.cbegin(),
                                                            output.cend()};

  EXPECT_EQ(traces.size(), 1);
  // EXPECT_OUTPUT(traces, 0, "", "/not",
  //               "The integer value was expected to not validate against the "
  //               "given subschema, but it did");
}
