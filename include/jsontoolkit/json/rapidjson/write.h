#ifndef JSONTOOLKIT_JSON_RAPIDJSON_WRITE_H_
#define JSONTOOLKIT_JSON_RAPIDJSON_WRITE_H_

#include "common.h"
#include "read.h"

#include <cassert>     // assert
#include <cstdint>     // std::int64_t
#include <string>      // std::string
#include <type_traits> // std::enable_if_t, std::is_same_v

namespace sourcemeta::jsontoolkit {

// TODO: Add non-const alternatives to set()
// TODO: Add efficient "move" overloads

inline auto set(JSON &root, JSONValue &value, const JSONValue &other) -> void {
  value.CopyFrom(other, root.GetAllocator());
}

inline auto set(JSON &value, const JSONValue &other) -> void {
  return set(value, value, other);
}

inline auto erase(JSONValue &value, const std::string &key) -> void {
  assert(is_object(value));
  value.EraseMember(key);
}

inline auto clear(JSONValue &value) -> void {
  if (is_array(value)) {
    value.Erase(value.Begin(), value.End());
  } else {
    value.EraseMember(value.MemberBegin(), value.MemberEnd());
  }
}

inline auto assign(JSON &root, JSONValue &value, const std::string &key,
                   const JSONValue &member) -> void {
  assert(is_object(value));
  auto &allocator{root.GetAllocator()};
  if (defines(value, key)) {
    value[key] = JSONValue{member, allocator};
  } else {
    value.AddMember(from(key), JSONValue{member, allocator}, allocator);
  }
}

inline auto assign(JSON &root, const std::string &key, const JSONValue &member)
    -> void {
  return assign(root, root, key, member);
}

inline auto assign(JSON &, JSONValue &value, const std::string &key,
                   JSONValue &&member) -> void {
  assert(is_object(value));
  value[key] = member;
}

inline auto assign(JSON &root, const std::string &key, JSONValue &&member)
    -> void {
  return assign(root, root, key, member);
}

} // namespace sourcemeta::jsontoolkit

#endif
