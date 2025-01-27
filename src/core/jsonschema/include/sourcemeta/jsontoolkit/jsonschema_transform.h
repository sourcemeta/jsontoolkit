#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_RULE_H_
#define SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_RULE_H_

#ifndef SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT
#include <sourcemeta/jsontoolkit/jsonschema_export.h>
#endif

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sourcemeta/jsontoolkit/jsonschema_resolver.h>

#include <optional> // std::optional, std::nullopt
#include <set>      // std::set
#include <string>   // std::string
#include <vector>   // std::vector

namespace sourcemeta::jsontoolkit {
/// @ingroup jsonschema
///
/// A class that represents a transformation rule. Clients of this class
/// are expected to subclass and implement their own condition and
/// transformation methods.
///
/// For example, this is a rule that deletes any property called `foo` in every
/// subschema:
///
/// ```cpp
/// #include <sourcemeta/jsontoolkit/jsonschema.h>
///
/// class MyTransformRule final
///   : public sourcemeta::jsontoolkit::TransformRule {
/// public:
///   MyTransformRule() : sourcemeta::jsontoolkit::TransformRule("my_rule", "My
///   rule") {};
///
///   [[nodiscard]] auto condition(const sourcemeta::jsontoolkit::JSON &schema,
///                                const std::string &dialect,
///                                const std::set<std::string> &vocabularies,
///                                const sourcemeta::jsontoolkit::Pointer
///                                  &pointer) const
///       -> bool override
///     return schema.defines("foo");
///   }
///
///   auto transform(sourcemeta::jsontoolkit::PointerProxy &transformer)
///       const -> void override {
///     transformer.erase("foo");
///   }
/// };
/// ```
class SOURCEMETA_JSONTOOLKIT_JSONSCHEMA_EXPORT TransformRule {
public:
  /// Create a transformation rule. Each rule must have a unique name.
  TransformRule(std::string &&name, std::string &&message);

  // Necessary to wrap rules on smart pointers
  virtual ~TransformRule() = default;

  // We don't need any of these
  TransformRule(const TransformRule &) = delete;
  TransformRule(TransformRule &&) = delete;
  auto operator=(const TransformRule &) -> TransformRule & = delete;
  auto operator=(TransformRule &&) -> TransformRule & = delete;

  /// Compare a rule against another rule.
  auto operator==(const TransformRule &other) const -> bool;

  /// Fetch the name of a rule
  [[nodiscard]] auto name() const -> const std::string &;

  /// Fetch the message of a rule
  [[nodiscard]] auto message() const -> const std::string &;

  /// Apply the rule to a schema
  auto
  apply(JSON &schema, const Pointer &pointer, const SchemaResolver &resolver,
        const std::optional<std::string> &default_dialect = std::nullopt) const
      -> std::vector<PointerProxy::Operation>;

  /// Check if the rule applies to a schema
  auto
  check(const JSON &schema, const Pointer &pointer,
        const SchemaResolver &resolver,
        const std::optional<std::string> &default_dialect = std::nullopt) const
      -> bool;

private:
  /// The rule condition
  [[nodiscard]] virtual auto
  condition(const JSON &schema, const std::string &dialect,
            const std::set<std::string> &vocabularies,
            const Pointer &pointer) const -> bool = 0;

  /// The rule transformation
  virtual auto transform(PointerProxy &transformer) const -> void = 0;

// Exporting symbols that depends on the standard C++ library is considered
// safe.
// https://learn.microsoft.com/en-us/cpp/error-messages/compiler-warnings/compiler-warning-level-2-c4275?view=msvc-170&redirectedfrom=MSDN
#if defined(_MSC_VER)
#pragma warning(disable : 4251)
#endif
  const std::string name_;
  const std::string message_;
#if defined(_MSC_VER)
#pragma warning(default : 4251)
#endif
};
} // namespace sourcemeta::jsontoolkit

#endif
