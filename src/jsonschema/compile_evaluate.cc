#include <sourcemeta/jsontoolkit/jsonschema.h>
#include <sourcemeta/jsontoolkit/jsonschema_compile.h>
#include <sourcemeta/jsontoolkit/uri.h>

#include "trace.h"

#include <algorithm>   // std::min
#include <cassert>     // assert
#include <functional>  // std::reference_wrapper
#include <iterator>    // std::distance, std::advance
#include <limits>      // std::numeric_limits
#include <map>         // std::map
#include <optional>    // std::optional
#include <set>         // std::set
#include <stack>       // std::stack
#include <type_traits> // std::is_same_v
#include <vector>      // std::vector

namespace {

class EvaluationContext {
public:
  using Pointer = sourcemeta::jsontoolkit::Pointer;
  using JSON = sourcemeta::jsontoolkit::JSON;
  using Annotations = std::set<JSON>;
  using InstanceAnnotations = std::map<Pointer, Annotations>;
  using Template = sourcemeta::jsontoolkit::SchemaCompilerTemplate;

  template <typename T> auto value(T &&document) -> const JSON & {
    return *(this->values.emplace(std::forward<T>(document)).first);
  }

  auto annotate(const Pointer &current_instance_location, const JSON &value)
      -> std::pair<std::reference_wrapper<const JSON>, bool> {
    const auto result{this->annotations_.insert({current_instance_location, {}})
                          .first->second.insert({this->evaluate_path(), {}})
                          .first->second.insert(value)};
    return {*(result.first), result.second};
  }

private:
  auto
  annotations(const Pointer &current_instance_location,
              const Pointer &schema_location) const -> const Annotations & {
    static const Annotations placeholder;
    // Use `.find()` instead of `.contains()` and `.at()` for performance
    // reasons
    const auto instance_location_result{
        this->annotations_.find(current_instance_location)};
    if (instance_location_result == this->annotations_.end()) {
      return placeholder;
    }

    const auto schema_location_result{
        instance_location_result->second.find(schema_location)};
    if (schema_location_result == instance_location_result->second.end()) {
      return placeholder;
    }

    return schema_location_result->second;
  }

  auto annotations(const Pointer &current_instance_location) const
      -> const InstanceAnnotations & {
    static const InstanceAnnotations placeholder;
    // Use `.find()` instead of `.contains()` and `.at()` for performance
    // reasons
    const auto instance_location_result{
        this->annotations_.find(current_instance_location)};
    if (instance_location_result == this->annotations_.end()) {
      return placeholder;
    }

    return instance_location_result->second;
  }

public:
  auto
  defines_any_adjacent_annotation(const Pointer &expected_instance_location,
                                  const Pointer &base_evaluate_path,
                                  const std::string &keyword) const -> bool {
    // TODO: We should be taking masks into account
    // TODO: How can we avoid this expensive pointer manipulation?
    auto expected_evaluate_path{base_evaluate_path};
    expected_evaluate_path.push_back({keyword});
    return !this->annotations(expected_instance_location,
                              expected_evaluate_path)
                .empty();
  }

  auto defines_any_adjacent_annotation(
      const Pointer &expected_instance_location,
      const Pointer &base_evaluate_path,
      const std::set<std::string> &keywords) const -> bool {
    for (const auto &keyword : keywords) {
      if (this->defines_any_adjacent_annotation(expected_instance_location,
                                                base_evaluate_path, keyword)) {
        return true;
      }
    }

    return false;
  }

  auto defines_adjacent_annotation(const Pointer &expected_instance_location,
                                   const Pointer &base_evaluate_path,
                                   const std::set<std::string> &keywords,
                                   const JSON &value) const -> bool {
    // TODO: We should be taking masks into account
    for (const auto &keyword : keywords) {
      auto expected_evaluate_path{base_evaluate_path};
      expected_evaluate_path.push_back({keyword});
      if (this->annotations(expected_instance_location, expected_evaluate_path)
              .contains(value)) {
        return true;
      }
    }

    return false;
  }

  auto defines_annotation(const Pointer &expected_instance_location,
                          const Pointer &base_evaluate_path,
                          const std::set<std::string> &keywords,
                          const JSON &value) const -> bool {
    if (keywords.empty()) {
      return false;
    }

    const auto instance_annotations{
        this->annotations(expected_instance_location)};
    for (const auto &[schema_location, schema_annotations] :
         instance_annotations) {
      assert(!schema_location.empty());
      const auto &keyword{schema_location.back()};
      if (keyword.is_property() && keywords.contains(keyword.to_property()) &&
          schema_annotations.contains(value) &&
          schema_location.initial().starts_with(base_evaluate_path)) {
        bool blacklisted = false;
        for (const auto &masked : this->annotation_blacklist) {
          if (schema_location.starts_with(masked) &&
              !this->evaluate_path_.starts_with(masked)) {
            blacklisted = true;
            break;
          }
        }

        if (!blacklisted) {
          return true;
        }
      }
    }

    return false;
  }

  auto largest_annotation_index(const Pointer &expected_instance_location,
                                const std::set<std::string> &keywords,
                                const std::uint64_t default_value) const
      -> std::uint64_t {
    // TODO: We should be taking masks into account

    std::uint64_t result{default_value};
    for (const auto &[schema_location, schema_annotations] :
         this->annotations(expected_instance_location)) {
      assert(!schema_location.empty());
      const auto &keyword{schema_location.back()};
      if (!keyword.is_property() || !keywords.contains(keyword.to_property())) {
        continue;
      }

      for (const auto &annotation : schema_annotations) {
        if (annotation.is_integer() && annotation.is_positive()) {
          result = std::max(
              result, static_cast<std::uint64_t>(annotation.to_integer()) + 1);
        }
      }
    }

    return result;
  }

  template <typename T>
  auto push(const T &step, const Pointer &relative_evaluate_path,
            const Pointer &relative_instance_location) -> void {
    this->frame_sizes.emplace(relative_evaluate_path.size(),
                              relative_instance_location.size());
    this->evaluate_path_.push_back(relative_evaluate_path);
    this->instance_location_.push_back(relative_instance_location);

    // TODO: Do schema resource management using hashes to avoid
    // expensive string comparisons
    if (step.dynamic) {
      // Note that we are potentially repeatedly pushing back the
      // same schema resource over and over again. However, the
      // logic for making sure this list is "pure" takes a lot of
      // computation power. Being silly seems faster.
      this->resources_.push_back(step.schema_resource);
    }
  }

  template <typename T> auto push(const T &step) -> void {
    this->push(step, step.relative_schema_location,
               step.relative_instance_location);
  }

  template <typename T> auto pop(const T &step) -> void {
    assert(!this->frame_sizes.empty());
    const auto &sizes{this->frame_sizes.top()};
    this->evaluate_path_.pop_back(sizes.first);
    this->instance_location_.pop_back(sizes.second);
    this->frame_sizes.pop();

    // TODO: Do schema resource management using hashes to avoid
    // expensive string comparisons
    if (step.dynamic) {
      assert(!this->resources_.empty());
      this->resources_.pop_back();
    }
  }

  auto resources() const -> const std::vector<std::string> & {
    return this->resources_;
  }

  auto evaluate_path() const -> const Pointer & { return this->evaluate_path_; }

  auto instance_location() const -> const Pointer & {
    return this->instance_location_;
  }

  enum class TargetType { Key, Value };
  auto target_type(const TargetType type) -> void {
    this->property_as_instance = (type == TargetType::Key);
  }

  auto resolve_target(const JSON &instance) -> const JSON & {
    using namespace sourcemeta::jsontoolkit;
    if (this->property_as_instance) [[unlikely]] {
      assert(!this->instance_location().empty());
      assert(this->instance_location().back().is_property());
      return this->value(this->instance_location().back().to_property());
    }

    // TODO: This means that we traverse the instance into
    // the current instance location EVERY single time.
    // Can we be smarter? Maybe we keep a reference to the current
    // instance location in this class that we manipulate through
    // .push() and .pop()
    return get(instance, this->instance_location());
  }

  auto mark(const std::size_t id, const Template &children) -> void {
    this->labels.try_emplace(id, children);
  }

  // TODO: At least currently, we only need to mask if a schema
  // makes use of `unevaluatedProperties` or `unevaluatedItems`
  // Detect if a schema does need this so if not, we avoid
  // an unnecessary copy
  auto mask() -> void {
    this->annotation_blacklist.insert(this->evaluate_path_);
  }

  auto jump(const std::size_t id) const -> const Template & {
    assert(this->labels.contains(id));
    return this->labels.at(id).get();
  }

  auto find_dynamic_anchor(const std::string &anchor) const
      -> std::optional<std::size_t> {
    for (const auto &resource : this->resources()) {
      std::ostringstream name;
      name << resource;
      name << '#';
      name << anchor;
      const auto label{std::hash<std::string>{}(name.str())};
      if (this->labels.contains(label)) {
        return label;
      }
    }

    return std::nullopt;
  }

private:
  Pointer evaluate_path_;
  Pointer instance_location_;
  std::stack<std::pair<std::size_t, std::size_t>> frame_sizes;
  // TODO: Keep hashes of schema resources URI instead for performance reasons
  std::vector<std::string> resources_;
  std::set<Pointer> annotation_blacklist;
  // For efficiency, as we likely reference the same JSON values
  // over and over again
  std::set<JSON> values;
  // We don't use a pair for holding the two pointers for runtime
  // efficiency when resolving keywords like `unevaluatedProperties`
  std::map<Pointer, InstanceAnnotations> annotations_;
  std::map<std::size_t, const std::reference_wrapper<const Template>> labels;
  bool property_as_instance{false};
};

auto evaluate_step(
    const sourcemeta::jsontoolkit::SchemaCompilerTemplate::value_type &step,
    const sourcemeta::jsontoolkit::JSON &instance,
    const sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode mode,
    const std::optional<
        sourcemeta::jsontoolkit::SchemaCompilerEvaluationCallback> &callback,
    EvaluationContext &context) -> bool {
  SOURCEMETA_TRACE_REGISTER_ID(trace_id);

  using namespace sourcemeta::jsontoolkit;
  bool result{false};

#define CALLBACK_PRE(current_step, current_instance_location)                  \
  if (current_step.report && callback.has_value()) {                           \
    callback.value()(SchemaCompilerEvaluationType::Pre, true, step,            \
                     context.evaluate_path(), current_instance_location,       \
                     context.value(nullptr));                                  \
  }

#define CALLBACK_POST(title, current_step)                                     \
  if (current_step.report && callback.has_value()) {                           \
    callback.value()(SchemaCompilerEvaluationType::Post, result, step,         \
                     context.evaluate_path(), context.instance_location(),     \
                     context.value(nullptr));                                  \
  }                                                                            \
  context.pop(current_step);                                                   \
  SOURCEMETA_TRACE_END(trace_id, title);                                       \
  return result;

  // As a safety guard, only emit the annotation if it didn't exist already.
  // Otherwise we risk confusing consumers
#define CALLBACK_ANNOTATION(annotation_result, current_step,                   \
                            current_instance_location)                         \
  if (annotation_result.second && callback.has_value()) {                      \
    CALLBACK_PRE(current_step, current_instance_location);                     \
    callback.value()(SchemaCompilerEvaluationType::Post, result, step,         \
                     context.evaluate_path(), current_instance_location,       \
                     annotation_result.first);                                 \
  }

#define EVALUATE_IMPLICIT_PRECONDITION(title, current_step, precondition)      \
  if (!(precondition)) {                                                       \
    context.pop(current_step);                                                 \
    SOURCEMETA_TRACE_END(trace_id, title);                                     \
    return true;                                                               \
  }

  if (std::holds_alternative<SchemaCompilerAssertionFail>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAssertionFail");
    const auto &assertion{std::get<SchemaCompilerAssertionFail>(step)};
    context.push(assertion);
    CALLBACK_PRE(assertion, context.instance_location());
    CALLBACK_POST("SchemaCompilerAssertionFail", assertion);
  } else if (std::holds_alternative<SchemaCompilerAssertionDefines>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAssertionDefines");
    const auto &assertion{std::get<SchemaCompilerAssertionDefines>(step)};
    context.push(assertion);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerAssertionDefines", assertion,
                                   target.is_object());
    CALLBACK_PRE(assertion, context.instance_location());
    result = target.defines(assertion.value);
    CALLBACK_POST("SchemaCompilerAssertionDefines", assertion);
  } else if (std::holds_alternative<SchemaCompilerAssertionDefinesAll>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAssertionDefinesAll");
    const auto &assertion{std::get<SchemaCompilerAssertionDefinesAll>(step)};
    context.push(assertion);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerAssertionDefinesAll",
                                   assertion, target.is_object());

    CALLBACK_PRE(assertion, context.instance_location());
    // Otherwise we are we even emitting this instruction?
    assert(assertion.value.size() > 1);
    result = true;
    for (const auto &property : assertion.value) {
      if (!target.defines(property)) {
        result = false;
        break;
      }
    }

    CALLBACK_POST("SchemaCompilerAssertionDefinesAll", assertion);
  } else if (std::holds_alternative<
                 SchemaCompilerAssertionPropertyDependencies>(step)) {
    SOURCEMETA_TRACE_START(trace_id,
                           "SchemaCompilerAssertionPropertyDependencies");
    const auto &assertion{
        std::get<SchemaCompilerAssertionPropertyDependencies>(step)};
    context.push(assertion);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION(
        "SchemaCompilerAssertionPropertyDependencies", assertion,
        target.is_object());
    CALLBACK_PRE(assertion, context.instance_location());
    // Otherwise we are we even emitting this instruction?
    assert(!assertion.value.empty());

    result = true;
    for (const auto &[property, dependencies] : assertion.value) {
      if (!target.defines(property)) {
        continue;
      }

      assert(!dependencies.empty());
      for (const auto &dependency : dependencies) {
        if (!target.defines(dependency)) {
          result = false;
          // For efficiently breaking from the outer loop too
          goto evaluate_assertion_property_dependencies_end;
        }
      }
    }

  evaluate_assertion_property_dependencies_end:
    CALLBACK_POST("SchemaCompilerAssertionPropertyDependencies", assertion);
  } else if (std::holds_alternative<SchemaCompilerAssertionType>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAssertionType");
    const auto &assertion{std::get<SchemaCompilerAssertionType>(step)};
    context.push(assertion);
    CALLBACK_PRE(assertion, context.instance_location());
    const auto &target{context.resolve_target(instance)};
    // In non-strict mode, we consider a real number that represents an
    // integer to be an integer
    result =
        target.type() == assertion.value ||
        (assertion.value == JSON::Type::Integer && target.is_integer_real());

    CALLBACK_POST("SchemaCompilerAssertionType", assertion);
  } else if (std::holds_alternative<SchemaCompilerAssertionTypeAny>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAssertionTypeAny");
    const auto &assertion{std::get<SchemaCompilerAssertionTypeAny>(step)};
    context.push(assertion);
    CALLBACK_PRE(assertion, context.instance_location());
    // Otherwise we are we even emitting this instruction?
    assert(assertion.value.size() > 1);
    const auto &target{context.resolve_target(instance)};
    // In non-strict mode, we consider a real number that represents an
    // integer to be an integer
    result = assertion.value.contains(target.type()) ||
             (assertion.value.contains(JSON::Type::Integer) &&
              target.is_integer_real());

    CALLBACK_POST("SchemaCompilerAssertionTypeAny", assertion);
  } else if (std::holds_alternative<SchemaCompilerAssertionTypeStrict>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAssertionTypeStrict");
    const auto &assertion{std::get<SchemaCompilerAssertionTypeStrict>(step)};
    context.push(assertion);
    CALLBACK_PRE(assertion, context.instance_location());
    const auto &target{context.resolve_target(instance)};
    result = target.type() == assertion.value;
    CALLBACK_POST("SchemaCompilerAssertionTypeStrict", assertion);
  } else if (std::holds_alternative<SchemaCompilerAssertionTypeStrictAny>(
                 step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAssertionTypeStrictAny");
    const auto &assertion{std::get<SchemaCompilerAssertionTypeStrictAny>(step)};
    context.push(assertion);
    CALLBACK_PRE(assertion, context.instance_location());
    // Otherwise we are we even emitting this instruction?
    assert(assertion.value.size() > 1);
    const auto &target{context.resolve_target(instance)};
    result = assertion.value.contains(target.type());
    CALLBACK_POST("SchemaCompilerAssertionTypeStrictAny", assertion);
  } else if (std::holds_alternative<SchemaCompilerAssertionRegex>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAssertionRegex");
    const auto &assertion{std::get<SchemaCompilerAssertionRegex>(step)};
    context.push(assertion);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerAssertionRegex", assertion,
                                   target.is_string());
    CALLBACK_PRE(assertion, context.instance_location());
    result = std::regex_search(target.to_string(), assertion.value.first);
    CALLBACK_POST("SchemaCompilerAssertionRegex", assertion);
  } else if (std::holds_alternative<SchemaCompilerAssertionStringSizeLess>(
                 step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAssertionStringSizeLess");
    const auto &assertion{
        std::get<SchemaCompilerAssertionStringSizeLess>(step)};
    context.push(assertion);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerAssertionStringSizeLess",
                                   assertion, target.is_string());
    CALLBACK_PRE(assertion, context.instance_location());
    result = (target.size() < assertion.value);
    CALLBACK_POST("SchemaCompilerAssertionStringSizeLess", assertion);
  } else if (std::holds_alternative<SchemaCompilerAssertionStringSizeGreater>(
                 step)) {
    SOURCEMETA_TRACE_START(trace_id,
                           "SchemaCompilerAssertionStringSizeGreater");
    const auto &assertion{
        std::get<SchemaCompilerAssertionStringSizeGreater>(step)};
    context.push(assertion);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerAssertionStringSizeGreater",
                                   assertion, target.is_string());
    CALLBACK_PRE(assertion, context.instance_location());
    result = (target.size() > assertion.value);
    CALLBACK_POST("SchemaCompilerAssertionStringSizeGreater", assertion);

  } else if (std::holds_alternative<SchemaCompilerAssertionArraySizeLess>(
                 step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAssertionArraySizeLess");
    const auto &assertion{std::get<SchemaCompilerAssertionArraySizeLess>(step)};
    context.push(assertion);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerAssertionArraySizeLess",
                                   assertion, target.is_array());
    CALLBACK_PRE(assertion, context.instance_location());
    result = (target.size() < assertion.value);
    CALLBACK_POST("SchemaCompilerAssertionArraySizeLess", assertion);
  } else if (std::holds_alternative<SchemaCompilerAssertionArraySizeGreater>(
                 step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAssertionArraySizeGreater");
    const auto &assertion{
        std::get<SchemaCompilerAssertionArraySizeGreater>(step)};
    context.push(assertion);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerAssertionArraySizeGreater",
                                   assertion, target.is_array());
    CALLBACK_PRE(assertion, context.instance_location());
    result = (target.size() > assertion.value);
    CALLBACK_POST("SchemaCompilerAssertionArraySizeGreater", assertion);
  } else if (std::holds_alternative<SchemaCompilerAssertionObjectSizeLess>(
                 step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAssertionObjectSizeLess");
    const auto &assertion{
        std::get<SchemaCompilerAssertionObjectSizeLess>(step)};
    context.push(assertion);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerAssertionObjectSizeLess",
                                   assertion, target.is_object());
    CALLBACK_PRE(assertion, context.instance_location());
    result = (target.size() < assertion.value);
    CALLBACK_POST("SchemaCompilerAssertionObjectSizeLess", assertion);
  } else if (std::holds_alternative<SchemaCompilerAssertionObjectSizeGreater>(
                 step)) {
    SOURCEMETA_TRACE_START(trace_id,
                           "SchemaCompilerAssertionObjectSizeGreater");
    const auto &assertion{
        std::get<SchemaCompilerAssertionObjectSizeGreater>(step)};
    context.push(assertion);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerAssertionObjectSizeGreater",
                                   assertion, target.is_object());
    CALLBACK_PRE(assertion, context.instance_location());
    result = (target.size() > assertion.value);
    CALLBACK_POST("SchemaCompilerAssertionObjectSizeGreater", assertion);
  } else if (std::holds_alternative<SchemaCompilerAssertionEqual>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAssertionEqual");
    const auto &assertion{std::get<SchemaCompilerAssertionEqual>(step)};
    context.push(assertion);
    CALLBACK_PRE(assertion, context.instance_location());
    const auto &target{context.resolve_target(instance)};
    result = (target == assertion.value);
    CALLBACK_POST("SchemaCompilerAssertionEqual", assertion);
  } else if (std::holds_alternative<SchemaCompilerAssertionEqualsAny>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAssertionEqualsAny");
    const auto &assertion{std::get<SchemaCompilerAssertionEqualsAny>(step)};
    context.push(assertion);
    CALLBACK_PRE(assertion, context.instance_location());
    const auto &target{context.resolve_target(instance)};
    result = assertion.value.contains(target);
    CALLBACK_POST("SchemaCompilerAssertionEqualsAny", assertion);
  } else if (std::holds_alternative<SchemaCompilerAssertionGreaterEqual>(
                 step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAssertionGreaterEqual");
    const auto &assertion{std::get<SchemaCompilerAssertionGreaterEqual>(step)};
    context.push(assertion);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerAssertionGreaterEqual",
                                   assertion, target.is_number());
    CALLBACK_PRE(assertion, context.instance_location());
    result = target >= assertion.value;
    CALLBACK_POST("SchemaCompilerAssertionGreaterEqual", assertion);
  } else if (std::holds_alternative<SchemaCompilerAssertionLessEqual>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAssertionLessEqual");
    const auto &assertion{std::get<SchemaCompilerAssertionLessEqual>(step)};
    context.push(assertion);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerAssertionLessEqual",
                                   assertion, target.is_number());
    CALLBACK_PRE(assertion, context.instance_location());
    result = target <= assertion.value;
    CALLBACK_POST("SchemaCompilerAssertionLessEqual", assertion);
  } else if (std::holds_alternative<SchemaCompilerAssertionGreater>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAssertionGreater");
    const auto &assertion{std::get<SchemaCompilerAssertionGreater>(step)};
    context.push(assertion);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerAssertionGreater", assertion,
                                   target.is_number());
    CALLBACK_PRE(assertion, context.instance_location());
    result = target > assertion.value;
    CALLBACK_POST("SchemaCompilerAssertionGreater", assertion);
  } else if (std::holds_alternative<SchemaCompilerAssertionLess>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAssertionLess");
    const auto &assertion{std::get<SchemaCompilerAssertionLess>(step)};
    context.push(assertion);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerAssertionLess", assertion,
                                   target.is_number());
    CALLBACK_PRE(assertion, context.instance_location());
    result = target < assertion.value;
    CALLBACK_POST("SchemaCompilerAssertionLess", assertion);
  } else if (std::holds_alternative<SchemaCompilerAssertionUnique>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAssertionUnique");
    const auto &assertion{std::get<SchemaCompilerAssertionUnique>(step)};
    context.push(assertion);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerAssertionUnique", assertion,
                                   target.is_array());
    CALLBACK_PRE(assertion, context.instance_location());
    result = target.unique();
    CALLBACK_POST("SchemaCompilerAssertionUnique", assertion);
  } else if (std::holds_alternative<SchemaCompilerAssertionDivisible>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAssertionDivisible");
    const auto &assertion{std::get<SchemaCompilerAssertionDivisible>(step)};
    context.push(assertion);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerAssertionDivisible",
                                   assertion, target.is_number());
    CALLBACK_PRE(assertion, context.instance_location());
    assert(assertion.value.is_number());
    result = target.divisible_by(assertion.value);
    CALLBACK_POST("SchemaCompilerAssertionDivisible", assertion);
  } else if (std::holds_alternative<SchemaCompilerAssertionStringType>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAssertionStringType");
    const auto &assertion{std::get<SchemaCompilerAssertionStringType>(step)};
    context.push(assertion);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerAssertionStringType",
                                   assertion, target.is_string());

    CALLBACK_PRE(assertion, context.instance_location());
    switch (assertion.value) {
      case SchemaCompilerValueStringType::URI:
        try {
          result = URI{target.to_string()}.is_absolute();
        } catch (const URIParseError &) {
          result = false;
        }

        break;
      default:
        // We should never get here
        assert(false);
    }

    CALLBACK_POST("SchemaCompilerAssertionStringType", assertion);
  } else if (std::holds_alternative<SchemaCompilerLogicalOr>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerLogicalOr");
    const auto &logical{std::get<SchemaCompilerLogicalOr>(step)};
    context.push(logical);
    CALLBACK_PRE(logical, context.instance_location());
    result = logical.children.empty();
    for (const auto &child : logical.children) {
      if (evaluate_step(child, instance, mode, callback, context)) {
        result = true;
        // This boolean value controls whether we should still evaluate
        // every disjunction even on fast mode
        if (mode == SchemaCompilerEvaluationMode::Fast && !logical.value) {
          break;
        }
      }
    }

    CALLBACK_POST("SchemaCompilerLogicalOr", logical);
  } else if (std::holds_alternative<SchemaCompilerLogicalAnd>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerLogicalAnd");
    const auto &logical{std::get<SchemaCompilerLogicalAnd>(step)};
    context.push(logical);
    CALLBACK_PRE(logical, context.instance_location());
    result = true;
    for (const auto &child : logical.children) {
      if (!evaluate_step(child, instance, mode, callback, context)) {
        result = false;
        break;
      }
    }

    CALLBACK_POST("SchemaCompilerLogicalAnd", logical);
  } else if (std::holds_alternative<SchemaCompilerLogicalWhenType>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerLogicalWhenType");
    const auto &logical{std::get<SchemaCompilerLogicalWhenType>(step)};
    context.push(logical);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerLogicalWhenType", logical,
                                   target.type() == logical.value);
    CALLBACK_PRE(logical, context.instance_location());
    result = true;
    for (const auto &child : logical.children) {
      if (!evaluate_step(child, instance, mode, callback, context)) {
        result = false;
        break;
      }
    }

    CALLBACK_POST("SchemaCompilerLogicalWhenType", logical);
  } else if (std::holds_alternative<SchemaCompilerLogicalWhenDefines>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerLogicalWhenDefines");
    const auto &logical{std::get<SchemaCompilerLogicalWhenDefines>(step)};
    context.push(logical);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerLogicalWhenDefines", logical,
                                   target.is_object() &&
                                       target.defines(logical.value));
    CALLBACK_PRE(logical, context.instance_location());
    result = true;
    for (const auto &child : logical.children) {
      if (!evaluate_step(child, instance, mode, callback, context)) {
        result = false;
        break;
      }
    }

    CALLBACK_POST("SchemaCompilerLogicalWhenDefines", logical);
  } else if (std::holds_alternative<SchemaCompilerLogicalWhenAdjacentUnmarked>(
                 step)) {
    SOURCEMETA_TRACE_START(trace_id,
                           "SchemaCompilerLogicalWhenAdjacentUnmarked");
    const auto &logical{
        std::get<SchemaCompilerLogicalWhenAdjacentUnmarked>(step)};
    context.push(logical);
    EVALUATE_IMPLICIT_PRECONDITION(
        "SchemaCompilerLogicalWhenAdjacentUnmarked", logical,
        !context.defines_any_adjacent_annotation(
            context.instance_location(), context.evaluate_path().initial(),
            logical.value));
    CALLBACK_PRE(logical, context.instance_location());
    result = true;
    for (const auto &child : logical.children) {
      if (!evaluate_step(child, instance, mode, callback, context)) {
        result = false;
        break;
      }
    }

    CALLBACK_POST("SchemaCompilerLogicalWhenAdjacentUnmarked", logical);
  } else if (std::holds_alternative<SchemaCompilerLogicalWhenAdjacentMarked>(
                 step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerLogicalWhenAdjacentMarked");
    const auto &logical{
        std::get<SchemaCompilerLogicalWhenAdjacentMarked>(step)};
    context.push(logical);
    EVALUATE_IMPLICIT_PRECONDITION(
        "SchemaCompilerLogicalWhenAdjacentMarked", logical,
        context.defines_any_adjacent_annotation(
            context.instance_location(), context.evaluate_path().initial(),
            logical.value));
    CALLBACK_PRE(logical, context.instance_location());
    result = true;
    for (const auto &child : logical.children) {
      if (!evaluate_step(child, instance, mode, callback, context)) {
        result = false;
        break;
      }
    }

    CALLBACK_POST("SchemaCompilerLogicalWhenAdjacentMarked", logical);
  } else if (std::holds_alternative<SchemaCompilerLogicalWhenArraySizeGreater>(
                 step)) {
    SOURCEMETA_TRACE_START(trace_id,
                           "SchemaCompilerLogicalWhenArraySizeGreater");
    const auto &logical{
        std::get<SchemaCompilerLogicalWhenArraySizeGreater>(step)};
    context.push(logical);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION(
        "SchemaCompilerLogicalWhenArraySizeGreater", logical,
        target.is_array() && target.size() > logical.value);
    CALLBACK_PRE(logical, context.instance_location());
    result = true;
    for (const auto &child : logical.children) {
      if (!evaluate_step(child, instance, mode, callback, context)) {
        result = false;
        break;
      }
    }

    CALLBACK_POST("SchemaCompilerLogicalWhenArraySizeGreater", logical);
  } else if (std::holds_alternative<SchemaCompilerLogicalWhenArraySizeEqual>(
                 step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerLogicalWhenArraySizeEqual");
    const auto &logical{
        std::get<SchemaCompilerLogicalWhenArraySizeEqual>(step)};
    context.push(logical);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION(
        "SchemaCompilerLogicalWhenArraySizeEqual", logical,
        target.is_array() && target.size() == logical.value);
    CALLBACK_PRE(logical, context.instance_location());
    result = true;
    for (const auto &child : logical.children) {
      if (!evaluate_step(child, instance, mode, callback, context)) {
        result = false;
        break;
      }
    }

    CALLBACK_POST("SchemaCompilerLogicalWhenArraySizeEqual", logical);
  } else if (std::holds_alternative<SchemaCompilerLogicalXor>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerLogicalXor");
    const auto &logical{std::get<SchemaCompilerLogicalXor>(step)};
    context.push(logical);
    CALLBACK_PRE(logical, context.instance_location());
    result = false;

    // TODO: Cache results of a given branch so we can avoid
    // computing it multiple times
    for (auto iterator{logical.children.cbegin()};
         iterator != logical.children.cend(); ++iterator) {
      if (!evaluate_step(*iterator, instance, mode, callback, context)) {
        continue;
      }

      // Check if another one matches
      bool subresult{true};
      for (auto subiterator{logical.children.cbegin()};
           subiterator != logical.children.cend(); ++subiterator) {
        // Don't compare the element against itself
        if (std::distance(logical.children.cbegin(), iterator) ==
            std::distance(logical.children.cbegin(), subiterator)) {
          continue;
        }

        // We don't need to report traces that part of the exhaustive
        // XOR search. We can treat those as internal
        if (evaluate_step(*subiterator, instance, mode, std::nullopt,
                          context)) {
          subresult = false;
          break;
        }
      }

      result = result || subresult;
      if (result && mode == SchemaCompilerEvaluationMode::Fast) {
        break;
      }
    }

    CALLBACK_POST("SchemaCompilerLogicalXor", logical);
  } else if (std::holds_alternative<SchemaCompilerLogicalTryMark>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerLogicalTryMark");
    const auto &logical{std::get<SchemaCompilerLogicalTryMark>(step)};
    context.push(logical);
    CALLBACK_PRE(logical, context.instance_location());
    result = true;
    for (const auto &child : logical.children) {
      if (!evaluate_step(child, instance, mode, callback, context)) {
        result = false;
        break;
      }
    }

    if (result) {
      context.annotate(context.instance_location(), JSON{true});
    } else {
      result = true;
    }

    CALLBACK_POST("SchemaCompilerLogicalTryMark", logical);
  } else if (std::holds_alternative<SchemaCompilerLogicalNot>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerLogicalNot");
    const auto &logical{std::get<SchemaCompilerLogicalNot>(step)};
    context.push(logical);
    CALLBACK_PRE(logical, context.instance_location());
    // Ignore annotations produced inside "not"
    context.mask();
    result = false;
    for (const auto &child : logical.children) {
      if (!evaluate_step(child, instance, mode, callback, context)) {
        result = true;
        if (mode == SchemaCompilerEvaluationMode::Fast) {
          break;
        }
      }
    }

    CALLBACK_POST("SchemaCompilerLogicalNot", logical);
  } else if (std::holds_alternative<SchemaCompilerControlLabel>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerControlLabel");
    const auto &control{std::get<SchemaCompilerControlLabel>(step)};
    context.mark(control.value, control.children);
    context.push(control);
    CALLBACK_PRE(control, context.instance_location());
    result = true;
    for (const auto &child : control.children) {
      if (!evaluate_step(child, instance, mode, callback, context)) {
        result = false;
        break;
      }
    }

    CALLBACK_POST("SchemaCompilerControlLabel", control);
  } else if (std::holds_alternative<SchemaCompilerControlMark>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerControlMark");
    const auto &control{std::get<SchemaCompilerControlMark>(step)};
    context.mark(control.value, control.children);
    SOURCEMETA_TRACE_END(trace_id, "SchemaCompilerControlMark");
    return true;
  } else if (std::holds_alternative<SchemaCompilerControlJump>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerControlJump");
    const auto &control{std::get<SchemaCompilerControlJump>(step)};
    context.push(control);
    CALLBACK_PRE(control, context.instance_location());
    assert(control.children.empty());
    result = true;
    for (const auto &child : context.jump(control.value)) {
      if (!evaluate_step(child, instance, mode, callback, context)) {
        result = false;
        break;
      }
    }

    CALLBACK_POST("SchemaCompilerControlJump", control);
  } else if (std::holds_alternative<SchemaCompilerControlDynamicAnchorJump>(
                 step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerControlDynamicAnchorJump");
    const auto &control{std::get<SchemaCompilerControlDynamicAnchorJump>(step)};
    context.push(control);
    CALLBACK_PRE(control, context.instance_location());
    const auto id{context.find_dynamic_anchor(control.value)};
    result = id.has_value();
    if (id.has_value()) {
      for (const auto &child : context.jump(id.value())) {
        if (!evaluate_step(child, instance, mode, callback, context)) {
          result = false;
          break;
        }
      }
    }

    CALLBACK_POST("SchemaCompilerControlDynamicAnchorJump", control);
  } else if (std::holds_alternative<SchemaCompilerAnnotationEmit>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAnnotationEmit");
    const auto &annotation{std::get<SchemaCompilerAnnotationEmit>(step)};
    context.push(annotation);
    // Annotations never fail
    result = true;
    const auto &current_instance_location{context.instance_location()};
    const auto value{
        context.annotate(current_instance_location, annotation.value)};
    CALLBACK_ANNOTATION(value, annotation, current_instance_location);
    context.pop(annotation);
    SOURCEMETA_TRACE_END(trace_id, "SchemaCompilerAnnotationEmit");
    return result;
  } else if (std::holds_alternative<SchemaCompilerAnnotationWhenArraySizeEqual>(
                 step)) {
    SOURCEMETA_TRACE_START(trace_id,
                           "SchemaCompilerAnnotationWhenArraySizeEqual");
    const auto &annotation{
        std::get<SchemaCompilerAnnotationWhenArraySizeEqual>(step)};
    context.push(annotation);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION(
        "SchemaCompilerAnnotationWhenArraySizeEqual", annotation,
        target.is_array() && target.size() == annotation.value.first);
    // Annotations never fail
    result = true;
    const auto &current_instance_location{context.instance_location()};
    const auto value{
        context.annotate(current_instance_location, annotation.value.second)};
    CALLBACK_ANNOTATION(value, annotation, current_instance_location);
    context.pop(annotation);
    SOURCEMETA_TRACE_END(trace_id,
                         "SchemaCompilerAnnotationWhenArraySizeEqual");
    return result;
  } else if (std::holds_alternative<
                 SchemaCompilerAnnotationWhenArraySizeGreater>(step)) {
    SOURCEMETA_TRACE_START(trace_id,
                           "SchemaCompilerAnnotationWhenArraySizeGreater");
    const auto &annotation{
        std::get<SchemaCompilerAnnotationWhenArraySizeGreater>(step)};
    context.push(annotation);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION(
        "SchemaCompilerAnnotationWhenArraySizeGreater", annotation,
        target.is_array() && target.size() > annotation.value.first);
    // Annotations never fail
    result = true;
    const auto &current_instance_location{context.instance_location()};
    const auto value{
        context.annotate(current_instance_location, annotation.value.second)};
    CALLBACK_ANNOTATION(value, annotation, current_instance_location);
    context.pop(annotation);
    SOURCEMETA_TRACE_END(trace_id,
                         "SchemaCompilerAnnotationWhenArraySizeGreater");
    return result;
  } else if (std::holds_alternative<SchemaCompilerAnnotationToParent>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerAnnotationToParent");
    const auto &annotation{std::get<SchemaCompilerAnnotationToParent>(step)};
    context.push(annotation);
    // Annotations never fail
    result = true;
    // TODO: Can we avoid a copy of the instance location here?
    const auto destination{context.instance_location().initial()};
    const auto value{context.annotate(destination, annotation.value)};
    CALLBACK_ANNOTATION(value, annotation, destination);
    context.pop(annotation);
    SOURCEMETA_TRACE_END(trace_id, "SchemaCompilerAnnotationToParent");
    return result;
  } else if (std::holds_alternative<SchemaCompilerAnnotationBasenameToParent>(
                 step)) {
    SOURCEMETA_TRACE_START(trace_id,
                           "SchemaCompilerAnnotationBasenameToParent");
    const auto &annotation{
        std::get<SchemaCompilerAnnotationBasenameToParent>(step)};
    context.push(annotation);
    // Annotations never fail
    result = true;
    // TODO: Can we avoid a copy of the instance location here?
    const auto destination{context.instance_location().initial()};
    const auto value{context.annotate(
        destination, context.instance_location().back().to_json())};
    CALLBACK_ANNOTATION(value, annotation, destination);
    context.pop(annotation);
    SOURCEMETA_TRACE_END(trace_id, "SchemaCompilerAnnotationBasenameToParent");
    return result;
  } else if (std::holds_alternative<SchemaCompilerLoopPropertiesMatch>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerLoopPropertiesMatch");
    const auto &loop{std::get<SchemaCompilerLoopPropertiesMatch>(step)};
    context.push(loop);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerLoopPropertiesMatch", loop,
                                   target.is_object());
    CALLBACK_PRE(loop, context.instance_location());
    assert(!loop.value.empty());
    result = true;
    for (const auto &entry : target.as_object()) {
      const auto index{loop.value.find(entry.first)};
      if (index == loop.value.cend()) {
        continue;
      }

      const auto &substep{loop.children[index->second]};
      assert(std::holds_alternative<SchemaCompilerLogicalAnd>(substep));
      for (const auto &child :
           std::get<SchemaCompilerLogicalAnd>(substep).children) {
        if (!evaluate_step(child, instance, mode, callback, context)) {
          result = false;
          // For efficiently breaking from the outer loop too
          goto evaluate_loop_properties_match_end;
        }
      }
    }

  evaluate_loop_properties_match_end:
    CALLBACK_POST("SchemaCompilerLoopPropertiesMatch", loop);
  } else if (std::holds_alternative<SchemaCompilerLoopProperties>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerLoopProperties");
    const auto &loop{std::get<SchemaCompilerLoopProperties>(step)};
    context.push(loop);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerLoopProperties", loop,
                                   target.is_object());
    CALLBACK_PRE(loop, context.instance_location());
    result = true;
    for (const auto &entry : target.as_object()) {
      context.push(loop, empty_pointer, {entry.first});
      for (const auto &child : loop.children) {
        if (!evaluate_step(child, instance, mode, callback, context)) {
          result = false;
          context.pop(loop);
          // For efficiently breaking from the outer loop too
          goto evaluate_loop_properties_end;
        }
      }

      context.pop(loop);
    }

  evaluate_loop_properties_end:
    CALLBACK_POST("SchemaCompilerLoopProperties", loop);
  } else if (std::holds_alternative<SchemaCompilerLoopPropertiesRegex>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerLoopPropertiesRegex");
    const auto &loop{std::get<SchemaCompilerLoopPropertiesRegex>(step)};
    context.push(loop);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerLoopPropertiesRegex", loop,
                                   target.is_object());
    CALLBACK_PRE(loop, context.instance_location());
    result = true;
    for (const auto &entry : target.as_object()) {
      if (!std::regex_search(entry.first, loop.value.first)) {
        continue;
      }

      context.push(loop, empty_pointer, {entry.first});
      for (const auto &child : loop.children) {
        if (!evaluate_step(child, instance, mode, callback, context)) {
          result = false;
          context.pop(loop);
          // For efficiently breaking from the outer loop too
          goto evaluate_loop_properties_regex_end;
        }
      }

      context.pop(loop);
    }

  evaluate_loop_properties_regex_end:
    CALLBACK_POST("SchemaCompilerLoopPropertiesRegex", loop);
  } else if (std::holds_alternative<
                 SchemaCompilerLoopPropertiesNoAdjacentAnnotation>(step)) {
    SOURCEMETA_TRACE_START(trace_id,
                           "SchemaCompilerLoopPropertiesNoAdjacentAnnotation");
    const auto &loop{
        std::get<SchemaCompilerLoopPropertiesNoAdjacentAnnotation>(step)};
    context.push(loop);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION(
        "SchemaCompilerLoopPropertiesNoAdjacentAnnotation", loop,
        target.is_object());
    CALLBACK_PRE(loop, context.instance_location());
    result = true;
    assert(!loop.value.empty());

    for (const auto &entry : target.as_object()) {
      // TODO: It might be more efficient to get all the annotations we
      // potentially care about as a set first, and the make the loop
      // check for O(1) containment in that set?
      if (context.defines_adjacent_annotation(
              context.instance_location(),
              // TODO: Can we avoid doing this expensive operation on a loop?
              context.evaluate_path().initial(), loop.value,
              // TODO: This conversion implies a string copy
              JSON{entry.first})) {
        continue;
      }

      context.push(loop, empty_pointer, {entry.first});
      for (const auto &child : loop.children) {
        if (!evaluate_step(child, instance, mode, callback, context)) {
          result = false;
          context.pop(loop);
          // For efficiently breaking from the outer loop too
          goto evaluate_loop_properties_no_adjacent_annotation_end;
        }
      }

      context.pop(loop);
    }

  evaluate_loop_properties_no_adjacent_annotation_end:
    CALLBACK_POST("SchemaCompilerLoopPropertiesNoAdjacentAnnotation", loop);
  } else if (std::holds_alternative<SchemaCompilerLoopPropertiesNoAnnotation>(
                 step)) {
    SOURCEMETA_TRACE_START(trace_id,
                           "SchemaCompilerLoopPropertiesNoAnnotation");
    const auto &loop{std::get<SchemaCompilerLoopPropertiesNoAnnotation>(step)};
    context.push(loop);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerLoopPropertiesNoAnnotation",
                                   loop, target.is_object());
    CALLBACK_PRE(loop, context.instance_location());
    result = true;
    assert(!loop.value.empty());

    for (const auto &entry : target.as_object()) {
      // TODO: It might be more efficient to get all the annotations we
      // potentially care about as a set first, and the make the loop
      // check for O(1) containment in that set?
      if (context.defines_annotation(
              context.instance_location(),
              // TODO: Can we avoid doing this expensive operation on a loop?
              context.evaluate_path().initial(), loop.value,
              // TODO: This conversion implies a string copy
              JSON{entry.first})) {
        continue;
      }

      context.push(loop, empty_pointer, {entry.first});
      for (const auto &child : loop.children) {
        if (!evaluate_step(child, instance, mode, callback, context)) {
          result = false;
          context.pop(loop);
          // For efficiently breaking from the outer loop too
          goto evaluate_loop_properties_no_annotation_end;
        }
      }

      context.pop(loop);
    }

  evaluate_loop_properties_no_annotation_end:
    CALLBACK_POST("SchemaCompilerLoopPropertiesNoAnnotation", loop);
  } else if (std::holds_alternative<SchemaCompilerLoopKeys>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerLoopKeys");
    const auto &loop{std::get<SchemaCompilerLoopKeys>(step)};
    context.push(loop);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerLoopKeys", loop,
                                   target.is_object());
    CALLBACK_PRE(loop, context.instance_location());
    assert(target.is_object());
    result = true;
    context.target_type(EvaluationContext::TargetType::Key);
    for (const auto &entry : target.as_object()) {
      context.push(loop, empty_pointer, {entry.first});
      for (const auto &child : loop.children) {
        if (!evaluate_step(child, instance, mode, callback, context)) {
          result = false;
          context.pop(loop);
          goto evaluate_loop_keys_end;
        }
      }

      context.pop(loop);
    }

  evaluate_loop_keys_end:
    context.target_type(EvaluationContext::TargetType::Value);
    CALLBACK_POST("SchemaCompilerLoopKeys", loop);
  } else if (std::holds_alternative<SchemaCompilerLoopItems>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerLoopItems");
    const auto &loop{std::get<SchemaCompilerLoopItems>(step)};
    context.push(loop);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerLoopItems", loop,
                                   target.is_array());
    CALLBACK_PRE(loop, context.instance_location());
    const auto &array{target.as_array()};
    result = true;
    auto iterator{array.cbegin()};

    // We need this check, as advancing an iterator past its bounds
    // is considered undefined behavior
    // See https://en.cppreference.com/w/cpp/iterator/advance
    std::advance(iterator,
                 std::min(static_cast<std::ptrdiff_t>(loop.value),
                          static_cast<std::ptrdiff_t>(target.size())));

    for (; iterator != array.cend(); ++iterator) {
      const auto index{std::distance(array.cbegin(), iterator)};
      context.push(loop, empty_pointer,
                   {static_cast<Pointer::Token::Index>(index)});
      for (const auto &child : loop.children) {
        if (!evaluate_step(child, instance, mode, callback, context)) {
          result = false;
          context.pop(loop);
          CALLBACK_POST("SchemaCompilerLoopItems", loop);
        }
      }

      context.pop(loop);
    }

    CALLBACK_POST("SchemaCompilerLoopItems", loop);
  } else if (std::holds_alternative<SchemaCompilerLoopItemsUnmarked>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerLoopItemsUnmarked");
    const auto &loop{std::get<SchemaCompilerLoopItemsUnmarked>(step)};
    context.push(loop);
    const auto &target{context.resolve_target(instance)};
    // Otherwise you shouldn't be using this step?
    assert(!loop.value.empty());
    EVALUATE_IMPLICIT_PRECONDITION(
        "SchemaCompilerLoopItemsUnmarked", loop,
        target.is_array() &&
            !context.defines_annotation(context.instance_location(),
                                        context.evaluate_path().initial(),
                                        loop.value, JSON{true}));

    CALLBACK_PRE(loop, context.instance_location());
    const auto &array{target.as_array()};
    result = true;

    for (auto iterator = array.cbegin(); iterator != array.cend(); ++iterator) {
      const auto index{std::distance(array.cbegin(), iterator)};
      context.push(loop, empty_pointer,
                   {static_cast<Pointer::Token::Index>(index)});
      for (const auto &child : loop.children) {
        if (!evaluate_step(child, instance, mode, callback, context)) {
          result = false;
          context.pop(loop);
          CALLBACK_POST("SchemaCompilerLoopItemsUnmarked", loop);
        }
      }

      context.pop(loop);
    }

    CALLBACK_POST("SchemaCompilerLoopItemsUnmarked", loop);
  } else if (std::holds_alternative<SchemaCompilerLoopItemsUnevaluated>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerLoopItemsUnevaluated");
    const auto &loop{std::get<SchemaCompilerLoopItemsUnevaluated>(step)};
    context.push(loop);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION(
        "SchemaCompilerLoopItemsUnevaluated", loop,
        target.is_array() &&
            !context.defines_annotation(context.instance_location(),
                                        context.evaluate_path().initial(),
                                        loop.value.mask, JSON{true}));
    CALLBACK_PRE(loop, context.instance_location());
    assert(target.is_array());
    const auto &array{target.as_array()};
    result = true;
    auto iterator{array.cbegin()};

    // Determine the proper start based on integer annotations collected for the
    // current instance location by the keyword requested by the user.
    const std::uint64_t start{context.largest_annotation_index(
        context.instance_location(), {loop.value.index}, 0)};

    // We need this check, as advancing an iterator past its bounds
    // is considered undefined behavior
    // See https://en.cppreference.com/w/cpp/iterator/advance
    std::advance(iterator,
                 std::min(static_cast<std::ptrdiff_t>(start),
                          static_cast<std::ptrdiff_t>(target.size())));

    for (; iterator != array.cend(); ++iterator) {
      const auto index{std::distance(array.cbegin(), iterator)};

      if (context.defines_annotation(
              context.instance_location(),
              // TODO: Can we avoid doing this expensive operation on a loop?
              context.evaluate_path().initial(), loop.value.filter,
              JSON{static_cast<std::size_t>(index)})) {
        continue;
      }

      context.push(loop, empty_pointer,
                   {static_cast<Pointer::Token::Index>(index)});
      for (const auto &child : loop.children) {
        if (!evaluate_step(child, instance, mode, callback, context)) {
          result = false;
          context.pop(loop);
          CALLBACK_POST("SchemaCompilerLoopItemsUnevaluated", loop);
        }
      }

      context.pop(loop);
    }

    CALLBACK_POST("SchemaCompilerLoopItemsUnevaluated", loop);
  } else if (std::holds_alternative<SchemaCompilerLoopContains>(step)) {
    SOURCEMETA_TRACE_START(trace_id, "SchemaCompilerLoopContains");
    const auto &loop{std::get<SchemaCompilerLoopContains>(step)};
    context.push(loop);
    const auto &target{context.resolve_target(instance)};
    EVALUATE_IMPLICIT_PRECONDITION("SchemaCompilerLoopContains", loop,
                                   target.is_array());
    CALLBACK_PRE(loop, context.instance_location());
    const auto minimum{std::get<0>(loop.value)};
    const auto &maximum{std::get<1>(loop.value)};
    assert(!maximum.has_value() || maximum.value() >= minimum);
    const auto is_exhaustive{std::get<2>(loop.value)};
    assert(target.is_array());
    result = minimum == 0 && target.empty();
    const auto &array{target.as_array()};
    auto match_count{std::numeric_limits<decltype(minimum)>::min()};
    for (auto iterator = array.cbegin(); iterator != array.cend(); ++iterator) {
      const auto index{std::distance(array.cbegin(), iterator)};
      context.push(loop, empty_pointer,
                   {static_cast<Pointer::Token::Index>(index)});
      bool subresult{true};
      for (const auto &child : loop.children) {
        if (!evaluate_step(child, instance, mode, callback, context)) {
          subresult = false;
          break;
        }
      }

      context.pop(loop);

      if (subresult) {
        match_count += 1;

        // Exceeding the upper bound is definitely a failure
        if (maximum.has_value() && match_count > maximum.value()) {
          result = false;

          // Note that here we don't want to consider whether to run
          // exhaustively or not. At this point, its already a failure,
          // and anything that comes after would not run at all anyway
          break;
        }

        if (match_count >= minimum) {
          result = true;

          // Exceeding the lower bound when there is no upper bound
          // is definitely a success
          if (!maximum.has_value() && !is_exhaustive) {
            break;
          }
        }
      }
    }

    CALLBACK_POST("SchemaCompilerLoopContains", loop);
  }

#undef CALLBACK_PRE
#undef CALLBACK_POST
#undef CALLBACK_ANNOTATION
#undef EVALUATE_IMPLICIT_PRECONDITION
  // We should never get here
  assert(false);
  return result;
}

inline auto evaluate_internal(
    const sourcemeta::jsontoolkit::SchemaCompilerTemplate &steps,
    const sourcemeta::jsontoolkit::JSON &instance,
    const sourcemeta::jsontoolkit::SchemaCompilerEvaluationMode mode,
    const std::optional<
        sourcemeta::jsontoolkit::SchemaCompilerEvaluationCallback> &callback)
    -> bool {
  EvaluationContext context;
  bool overall{true};
  for (const auto &step : steps) {
    if (!evaluate_step(step, instance, mode, callback, context)) {
      overall = false;
      break;
    }
  }

  // The evaluation path and instance location must be empty by the time
  // we are done, otherwise there was a frame push/pop mismatch
  assert(context.evaluate_path().empty());
  assert(context.instance_location().empty());
  assert(context.resources().empty());
  return overall;
}

} // namespace

namespace sourcemeta::jsontoolkit {

auto evaluate(const SchemaCompilerTemplate &steps, const JSON &instance,
              const SchemaCompilerEvaluationMode mode,
              const SchemaCompilerEvaluationCallback &callback) -> bool {
  return evaluate_internal(steps, instance, mode, callback);
}

auto evaluate(const SchemaCompilerTemplate &steps,
              const JSON &instance) -> bool {
  return evaluate_internal(steps, instance,
                           // Otherwise what's the point of an exhaustive
                           // evaluation if you don't get the results?
                           SchemaCompilerEvaluationMode::Fast, std::nullopt);
}

} // namespace sourcemeta::jsontoolkit
