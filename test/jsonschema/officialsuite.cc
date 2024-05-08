#include <gtest/gtest.h>

#include <cassert>
#include <cctype>
#include <filesystem>
#include <ostream>
#include <set>
#include <sstream>
#include <string>
#include <utility>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

static auto callback_noop(
    bool, const sourcemeta::jsontoolkit::SchemaCompilerTemplate::value_type &,
    const sourcemeta::jsontoolkit::Pointer &,
    const sourcemeta::jsontoolkit::Pointer &,
    const sourcemeta::jsontoolkit::JSON &) noexcept -> void {}

static auto slugify(const std::string &input, std::ostream &output) -> void {
  for (const auto character : input) {
    output << (std::isalnum(character) ? character : '_');
  }
}

class OfficialTest : public testing::Test {
public:
  explicit OfficialTest(
      bool test_valid,
      sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode test_mode,
      sourcemeta::jsontoolkit::SchemaCompilerTemplate test_schema,
      sourcemeta::jsontoolkit::JSON test_instance)
      : valid{test_valid}, mode{test_mode}, schema{std::move(test_schema)},

        // TODO: Why cannot we use {} initializers here without confusing MSVC?
        instance(std::move(test_instance)) {}

  auto TestBody() -> void override {
    const auto result{sourcemeta::jsontoolkit::evaluate(
        this->schema, this->instance, this->mode, callback_noop)};
    if (this->valid) {
      EXPECT_TRUE(result);
    } else {
      EXPECT_FALSE(result);
    }
  }

private:
  const bool valid;
  const sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode mode;
  const sourcemeta::jsontoolkit::SchemaCompilerTemplate schema;
  const sourcemeta::jsontoolkit::JSON instance;
};

static auto register_tests(const std::filesystem::path &subdirectory,
                           const std::string &suite_name,
                           const std::string &default_dialect,
                           const std::set<std::string> &blacklist) -> void {
  for (const std::filesystem::directory_entry &entry :
       std::filesystem::directory_iterator(
           std::filesystem::path{OFFICIAL_SUITE_PATH} / "tests" /
           subdirectory)) {
    if (!entry.is_regular_file()) {
      continue;
    }

    const std::string name{entry.path().stem().string()};
    if (blacklist.contains(name)) {
      continue;
    }

    const sourcemeta::jsontoolkit::JSON suite{
        sourcemeta::jsontoolkit::from_file(entry.path())};
    assert(suite.is_array());
    for (const auto &test : suite.as_array()) {
      assert(test.is_object());
      assert(test.defines("description"));
      assert(test.defines("schema"));
      assert(test.defines("tests"));
      assert(test.at("description").is_string());
      assert(sourcemeta::jsontoolkit::is_schema(test.at("schema")));
      assert(test.at("tests").is_array());

      const auto schema{sourcemeta::jsontoolkit::compile(
          test.at("schema"), sourcemeta::jsontoolkit::default_schema_walker,
          sourcemeta::jsontoolkit::official_resolver,
          sourcemeta::jsontoolkit::default_schema_compiler, default_dialect)};

      for (const auto &test_case : test.at("tests").as_array()) {
        assert(test_case.is_object());
        assert(test_case.defines("data"));
        assert(test_case.defines("description"));
        assert(test_case.defines("valid"));
        assert(test_case.at("description").is_string());
        assert(test_case.at("valid").is_boolean());

        const auto &instance{test_case.at("data")};
        const bool valid{test_case.at("valid").to_boolean()};

        for (const auto mode :
             {sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode::Fast,
              sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode::
                  Exhaustive}) {
          std::ostringstream title;
          switch (mode) {
            case sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode::Fast:
              title << "fast";
              break;
            case sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode::
                Exhaustive:
              title << "exhaustive";
              break;
            default:
              // We should never get here
              assert(false);
          }

          title << "_";
          slugify(test.at("description").to_string(), title);
          title << "__";
          slugify(test_case.at("description").to_string(), title);

          testing::RegisterTest(
              suite_name.c_str(), title.str().c_str(), nullptr, nullptr,
              __FILE__, __LINE__, [=]() -> OfficialTest * {
                return new OfficialTest(valid, mode, schema, instance);
              });
        }
      }
    }
  }
}

int main(int argc, char **argv) {
  testing::InitGoogleTest(&argc, argv);

  // Draft4
  // TODO: Enable optional tests too
  register_tests("draft4", "JSONSchemaOfficialSuite_Draft4",
                 "http://json-schema.org/draft-04/schema#",
                 // TODO: Enable all tests
                 {"refRemote", "not", "maxLength", "maximum", "multipleOf",
                  "additionalProperties", "allOf", "additionalItems",
                  "uniqueItems", "properties", "ref", "items",
                  "infinite-loop-detection", "definitions", "minLength",
                  "oneOf", "dependencies", "enum", "anyOf"});

  return RUN_ALL_TESTS();
}
