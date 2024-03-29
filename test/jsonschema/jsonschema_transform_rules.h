#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_TRANSFORM_RULES_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_TRANSFORM_RULES_H_

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

class ExampleRule1 final : public sourcemeta::jsontoolkit::SchemaTransformRule {
public:
  ExampleRule1()
      : sourcemeta::jsontoolkit::SchemaTransformRule("example_rule_1"){};

  [[nodiscard]] auto
  condition(const sourcemeta::jsontoolkit::JSON &schema, const std::string &,
            const std::set<std::string> &,
            const sourcemeta::jsontoolkit::Pointer &) const -> bool override {
    return schema.defines("foo");
  }

  auto transform(sourcemeta::jsontoolkit::SchemaTransformer &transformer) const
      -> void override {
    transformer.erase("foo");
  }
};

class ExampleRule2 final : public sourcemeta::jsontoolkit::SchemaTransformRule {
public:
  ExampleRule2()
      : sourcemeta::jsontoolkit::SchemaTransformRule("example_rule_2"){};

  [[nodiscard]] auto
  condition(const sourcemeta::jsontoolkit::JSON &schema, const std::string &,
            const std::set<std::string> &,
            const sourcemeta::jsontoolkit::Pointer &) const -> bool override {
    return schema.defines("bar");
  }

  auto transform(sourcemeta::jsontoolkit::SchemaTransformer &transformer) const
      -> void override {
    transformer.erase("bar");
  }
};

class ExampleRule3 final : public sourcemeta::jsontoolkit::SchemaTransformRule {
public:
  ExampleRule3()
      : sourcemeta::jsontoolkit::SchemaTransformRule("example_rule_3"){};

  [[nodiscard]] auto condition(
      const sourcemeta::jsontoolkit::JSON &schema, const std::string &,
      const std::set<std::string> &,
      const sourcemeta::jsontoolkit::Pointer &pointer) const -> bool override {
    return !schema.defines("top") && pointer.empty();
  }

  auto transform(sourcemeta::jsontoolkit::SchemaTransformer &transformer) const
      -> void override {
    transformer.assign("top", sourcemeta::jsontoolkit::JSON{true});
  }
};

class ExampleRule4 final : public sourcemeta::jsontoolkit::SchemaTransformRule {
public:
  ExampleRule4()
      : sourcemeta::jsontoolkit::SchemaTransformRule("example_rule_4"){};

  [[nodiscard]] auto
  condition(const sourcemeta::jsontoolkit::JSON &schema, const std::string &,
            const std::set<std::string> &,
            const sourcemeta::jsontoolkit::Pointer &) const -> bool override {
    return !schema.defines("here");
  }

  auto transform(sourcemeta::jsontoolkit::SchemaTransformer &transformer) const
      -> void override {
    transformer.assign("here", sourcemeta::jsontoolkit::JSON{true});
  }
};

class ExampleRule5 final : public sourcemeta::jsontoolkit::SchemaTransformRule {
public:
  ExampleRule5()
      : sourcemeta::jsontoolkit::SchemaTransformRule("example_rule_5"){};

  [[nodiscard]] auto condition(
      const sourcemeta::jsontoolkit::JSON &schema, const std::string &,
      const std::set<std::string> &,
      const sourcemeta::jsontoolkit::Pointer &pointer) const -> bool override {
    return !schema.defines("baz") &&
           pointer == sourcemeta::jsontoolkit::Pointer{"properties", "baz"};
  }

  auto transform(sourcemeta::jsontoolkit::SchemaTransformer &transformer) const
      -> void override {
    transformer.assign("baz", sourcemeta::jsontoolkit::JSON{true});
  }
};

class ExampleRule6 final : public sourcemeta::jsontoolkit::SchemaTransformRule {
public:
  ExampleRule6()
      : sourcemeta::jsontoolkit::SchemaTransformRule("example_rule_6"){};

  [[nodiscard]] auto
  condition(const sourcemeta::jsontoolkit::JSON &schema,
            const std::string &dialect, const std::set<std::string> &,
            const sourcemeta::jsontoolkit::Pointer &) const -> bool override {
    return !schema.defines("draft") &&
           dialect == "http://json-schema.org/draft-03/schema#";
  }

  auto transform(sourcemeta::jsontoolkit::SchemaTransformer &transformer) const
      -> void override {
    transformer.assign("draft", sourcemeta::jsontoolkit::JSON{3});
  }
};

class ExampleRuleConflictsWith1 final
    : public sourcemeta::jsontoolkit::SchemaTransformRule {
public:
  ExampleRuleConflictsWith1()
      : sourcemeta::jsontoolkit::SchemaTransformRule(
            "example_rule_conflicts_with_1"){};

  [[nodiscard]] auto
  condition(const sourcemeta::jsontoolkit::JSON &schema, const std::string &,
            const std::set<std::string> &,
            const sourcemeta::jsontoolkit::Pointer &) const -> bool override {
    return schema.defines("$schema") && schema.size() == 1;
  }

  auto transform(sourcemeta::jsontoolkit::SchemaTransformer &transformer) const
      -> void override {
    transformer.assign("foo", sourcemeta::jsontoolkit::JSON{true});
  }
};

#endif
