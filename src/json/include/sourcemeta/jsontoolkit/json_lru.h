#ifndef SOURCEMETA_JSONTOOLKIT_JSON_LRU_H_
#define SOURCEMETA_JSONTOOLKIT_JSON_LRU_H_

#include <sourcemeta/jsontoolkit/json_value.h>

#include <cassert>       // assert
#include <cstdint>       // std::uint64_t
#include <iterator>      // std::prev
#include <list>          // std::list
#include <optional>      // std::optional
#include <stdexcept>     // std::invalid_argument
#include <string>        // std::basic_string
#include <tuple>         // std::tuple
#include <unordered_map> // std::unordered_map
#include <utility>       // std::move

namespace sourcemeta::jsontoolkit {

// TODO: Write plenty of unit tests
// TODO: Properly document
// TODO: Document that this class is not thread-safe
template <typename CharT, typename Traits,
          template <typename T> typename Allocator>
class GenericJSONLRUCache {
public:
  GenericJSONLRUCache() : logical_size_limit{0} {}
  GenericJSONLRUCache(const std::uint64_t limit) : logical_size_limit{limit} {}

  using String = std::basic_string<CharT, Traits, Allocator<CharT>>;
  using Value = GenericValue<CharT, Traits, Allocator>;

  auto insert(String key, Value &&document,
              const std::uint64_t logical_size = 1) -> void {
    assert(!this->index.contains(key));
    this->make_space(logical_size);
    this->current_logical_size += logical_size;
    assert(this->current_logical_size <= this->logical_size_limit);
    this->queue.push_front(std::move(key));
    this->index.insert(
        {std::move(key),
         {this->queue.begin(), logical_size, std::move(document)}});
  }

  auto at(const String &key) -> std::optional<const Value &> {
    if (!this->index.contains(key)) {
      return std::nullopt;
    }

    // Move value to the front
    this->queue.splice(this->queue.begin(), this->queue,
                       this->index.at(key).first);
    // Otherwise there is something very off
    assert(this->queue.size() == this->index.size());
    // Get the value
    return std::get<2>(this->index.at(this->queue.front()));
  }

private:
  auto make_space(const std::uint64_t logical_size) -> void {
    assert(this->queue.size() == this->index.size());
    while (this->logical_size_limit > 0 &&
           this->current_logical_size + logical_size >
               this->logical_size_limit) {
      if (this->queue.empty()) {
        assert(this->index.empty());
        throw std::invalid_argument(
            "The value does not fit within the LRU limits");
      }

      // Get rid of the last value
      const auto &last_key{this->queue.back()};
      assert(this->index.contains(last_key));
      const auto &entry{this->index.at(last_key)};
      assert(std::get<0>(entry) == std::prev(this->queue.end()));
      const std::uint64_t last_value_logical_size{std::get<1>(entry)};
      this->index.erase(last_key);
      this->queue.pop_back();
      this->current_logical_size -= last_value_logical_size;
      assert(this->queue.size() == this->index.size());
    }
  }

  const std::uint64_t logical_size_limit;
  std::uint64_t current_logical_size = 0;

  // Least-recently used values will be at the back of the list
  using List = std::list<String, Allocator<String>>;
  List queue;
  using Entry =
      std::tuple<typename List::iterator, const std::uint64_t, const Value>;
  std::unordered_map<String, Entry> index;
};

} // namespace sourcemeta::jsontoolkit

#endif
