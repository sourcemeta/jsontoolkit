#ifndef SOURCEMETA_JSONTOOLKIT_EVALUATOR_CONTEXT_H_
#define SOURCEMETA_JSONTOOLKIT_EVALUATOR_CONTEXT_H_

#include <sourcemeta/jsontoolkit/evaluator.h>

#include <cassert>    // assert
#include <cstdint>    // std::uint8_t
#include <functional> // std::reference_wrapper
#include <map>        // std::map
#include <optional>   // std::optional
#include <set>        // std::set
#include <vector>     // std::vector

namespace sourcemeta::jsontoolkit {

class EvaluationContext {
public:
  EvaluationContext(const JSON &instance);

  auto annotate(const WeakPointer &current_instance_location, const JSON &value)
      -> std::pair<std::reference_wrapper<const JSON>, bool>;
  auto
  defines_any_adjacent_annotation(const WeakPointer &expected_instance_location,
                                  const WeakPointer &base_evaluate_path,
                                  const std::string &keyword) const -> bool;
  auto defines_any_adjacent_annotation(
      const WeakPointer &expected_instance_location,
      const WeakPointer &base_evaluate_path,
      const std::vector<std::string> &keywords) const -> bool;
  auto defines_annotation(const WeakPointer &expected_instance_location,
                          const WeakPointer &base_evaluate_path,
                          const std::vector<std::string> &keywords,
                          const JSON &value) const -> bool;
  auto largest_annotation_index(const WeakPointer &expected_instance_location,
                                const std::vector<std::string> &keywords,
                                const std::uint64_t default_value) const
      -> std::uint64_t;

  template <typename T> auto push_without_traverse(const T &step) -> void {
    // Guard against infinite recursion in a cheap manner, as
    // infinite recursion will manifest itself through huge
    // ever-growing evaluate paths
    constexpr auto EVALUATE_PATH_LIMIT{300};
    if (this->evaluate_path_.size() > EVALUATE_PATH_LIMIT) [[unlikely]] {
      throw sourcemeta::jsontoolkit::SchemaEvaluationError(
          "The evaluation path depth limit was reached "
          "likely due to infinite recursion");
    }

    this->frame_sizes.emplace_back(step.relative_schema_location.size(),
                                   step.relative_instance_location.size());
    this->evaluate_path_.push_back(step.relative_schema_location);
    this->instance_location_.push_back(step.relative_instance_location);

    if (step.dynamic) {
      // Note that we are potentially repeatedly pushing back the
      // same schema resource over and over again. However, the
      // logic for making sure this list is "pure" takes a lot of
      // computation power. Being silly seems faster.
      this->resources_.push_back(step.schema_resource);
    }
  }

  template <typename T> auto push(const T &step) -> void {
    this->push_without_traverse(step);
    if (!step.relative_instance_location.empty()) {
      this->instances_.emplace_back(
          get(this->instances_.back().get(), step.relative_instance_location));
    }
  }

  // A performance shortcut for pushing without re-traversing the target
  // if we already know that the destination target will be
  template <typename T>
  auto push(const T &step, std::reference_wrapper<const JSON> &&new_instance)
      -> void {
    this->push_without_traverse(step);
    assert(!step.relative_instance_location.empty());
    this->instances_.emplace_back(std::move(new_instance));
  }

  template <typename T> auto pop(const T &step) -> void {
    assert(!this->frame_sizes.empty());
    const auto &sizes{this->frame_sizes.back()};
    this->evaluate_path_.pop_back(sizes.first);
    this->instance_location_.pop_back(sizes.second);
    if (sizes.second > 0) {
      this->instances_.pop_back();
    }

    this->frame_sizes.pop_back();

    // TODO: Do schema resource management using hashes to avoid
    // expensive string comparisons
    if (step.dynamic) {
      assert(!this->resources_.empty());
      this->resources_.pop_back();
    }
  }

  auto enter(const WeakPointer::Token::Property &property) -> void;
  auto enter(const WeakPointer::Token::Index &index) -> void;
  auto leave() -> void;
  auto instances() const noexcept
      -> const std::vector<std::reference_wrapper<const JSON>> &;
  auto resources() const noexcept -> const std::vector<std::string> &;
  auto evaluate_path() const noexcept -> const WeakPointer &;
  auto instance_location() const noexcept -> const WeakPointer &;

  enum class TargetType : std::uint8_t { Key, Value };
  auto target_type(const TargetType type) noexcept -> void;

  auto resolve_target() -> const JSON &;
  auto mark(const std::size_t id, const SchemaCompilerTemplate &children)
      -> void;

  // TODO: At least currently, we only need to mask if a schema
  // makes use of `unevaluatedProperties` or `unevaluatedItems`
  // Detect if a schema does need this so if not, we avoid
  // an unnecessary copy
  auto mask() -> void;

  auto jump(const std::size_t id) const noexcept
      -> const SchemaCompilerTemplate &;
  auto find_dynamic_anchor(const std::string &anchor) const
      -> std::optional<std::size_t>;

  // TODO: Remove this
  const JSON null{nullptr};

private:
  auto annotations(const WeakPointer &current_instance_location,
                   const WeakPointer &schema_location) const
      -> const std::set<JSON> &;
  auto annotations(const WeakPointer &current_instance_location) const
      -> const std::map<WeakPointer, std::set<JSON>> &;

  std::vector<std::reference_wrapper<const JSON>> instances_;
  WeakPointer evaluate_path_;
  WeakPointer instance_location_;
  std::vector<std::pair<std::size_t, std::size_t>> frame_sizes;
  // TODO: Keep hashes of schema resources URI instead for performance reasons
  std::vector<std::string> resources_;
  std::vector<WeakPointer> annotation_blacklist;
  // We don't use a pair for holding the two pointers for runtime
  // efficiency when resolving keywords like `unevaluatedProperties`
  std::map<WeakPointer, std::map<WeakPointer, std::set<JSON>>> annotations_;
  std::map<std::size_t,
           const std::reference_wrapper<const SchemaCompilerTemplate>>
      labels;
  bool property_as_instance{false};
};

} // namespace sourcemeta::jsontoolkit

#endif
