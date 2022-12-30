#ifndef JSONTOOLKIT_JSON_RAPIDJSON_WRITE_H_
#define JSONTOOLKIT_JSON_RAPIDJSON_WRITE_H_

#include "read.h"

#include <cassert>     // assert
#include <cstdint>     // std::int64_t
#include <string>      // std::string
#include <type_traits> // std::enable_if_t, std::is_same_v

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wambiguous-reversed-operator"
#include <rapidjson/document.h> // rapidjson::Value, rapidjson::Document
#pragma clang diagnostic pop

namespace sourcemeta::jsontoolkit {

// TODO: Add non-const alternatives to set()

template <typename Encoding, typename Allocator>
inline auto set(rapidjson::GenericDocument<Encoding, Allocator> &root,
                rapidjson::GenericValue<Encoding, Allocator> &value,
                const rapidjson::GenericValue<Encoding, Allocator> &other)
    -> void {
  value.CopyFrom(other, root.GetAllocator());
}

template <typename Encoding, typename Allocator>
inline auto set(rapidjson::GenericDocument<Encoding, Allocator> &value,
                const rapidjson::GenericValue<Encoding, Allocator> &other)
    -> void {
  return set(value, value, other);
}

template <typename Encoding, typename Allocator>
inline auto erase(rapidjson::GenericValue<Encoding, Allocator> &value,
                  const std::string &key) -> void {
  assert(is_object(value));
  value.EraseMember(key);
}

template <typename Encoding, typename Allocator>
inline auto clear(rapidjson::GenericValue<Encoding, Allocator> &value) -> void {
  if (is_array(value)) {
    value.Erase(value.Begin(), value.End());
  } else {
    value.EraseMember(value.MemberBegin(), value.MemberEnd());
  }
}

template <typename Encoding, typename Allocator>
inline auto assign(rapidjson::GenericDocument<Encoding, Allocator> &root,
                   rapidjson::GenericValue<Encoding, Allocator> &value,
                   const std::string &key,
                   const rapidjson::GenericValue<Encoding, Allocator> &member)
    -> void {
  assert(is_object(value));
  auto &allocator{root.GetAllocator()};
  if (defines(value, key)) {
    value[key] =
        rapidjson::GenericValue<Encoding, Allocator>{member, allocator};
  } else {
    value.AddMember(
        from(key),
        rapidjson::GenericValue<Encoding, Allocator>{member, allocator},
        allocator);
  }
}

template <typename Encoding, typename Allocator>
inline auto assign(rapidjson::GenericDocument<Encoding, Allocator> &root,
                   const std::string &key,
                   const rapidjson::GenericValue<Encoding, Allocator> &member)
    -> void {
  return assign(root, root, key, member);
}

template <typename Encoding, typename Allocator>
inline auto assign(rapidjson::GenericDocument<Encoding, Allocator> &,
                   rapidjson::GenericValue<Encoding, Allocator> &value,
                   const std::string &key,
                   rapidjson::GenericValue<Encoding, Allocator> &&member)
    -> void {
  assert(is_object(value));
  value[key] = member;
}

template <typename Encoding, typename Allocator>
inline auto assign(rapidjson::GenericDocument<Encoding, Allocator> &root,
                   const std::string &key,
                   rapidjson::GenericValue<Encoding, Allocator> &&member)
    -> void {
  return assign(root, root, key, member);
}

} // namespace sourcemeta::jsontoolkit

#endif
