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

template <typename Encoding, typename Allocator>
inline auto set(rapidjson::GenericDocument<Encoding, Allocator> &,
                rapidjson::GenericValue<Encoding, Allocator> &value,
                std::nullptr_t) -> void {
  value.SetNull();
}

template <typename Encoding, typename Allocator>
inline auto set(rapidjson::GenericDocument<Encoding, Allocator> &value,
                std::nullptr_t) -> void {
  return set(value, value, nullptr);
}

template <typename Encoding, typename Allocator>
inline auto set(rapidjson::GenericDocument<Encoding, Allocator> &,
                rapidjson::GenericValue<Encoding, Allocator> &value,
                std::int64_t new_value) -> void {
  value.SetInt64(new_value);
}

template <typename Encoding, typename Allocator>
inline auto set(rapidjson::GenericDocument<Encoding, Allocator> &value,
                std::int64_t new_value) -> void {
  return set(value, value, new_value);
}

template <typename Encoding, typename Allocator, typename T,
          typename = std::enable_if_t<std::is_same_v<T, double>>>
inline auto set(rapidjson::GenericDocument<Encoding, Allocator> &,
                rapidjson::GenericValue<Encoding, Allocator> &value,
                T new_value) -> void {
  value.SetDouble(new_value);
}

template <typename Encoding, typename Allocator, typename T,
          typename = std::enable_if_t<std::is_same_v<T, double>>>
inline auto set(rapidjson::GenericDocument<Encoding, Allocator> &value,
                T new_value) -> void {
  return set(value, value, new_value);
}

template <typename Encoding, typename Allocator>
inline auto set(rapidjson::GenericDocument<Encoding, Allocator> &root,
                rapidjson::GenericValue<Encoding, Allocator> &value,
                const std::string &new_value) -> void {
  value.SetString(new_value.c_str(), root.GetAllocator());
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
                   const rapidjson::GenericValue<Encoding, Allocator> &member)
    -> void {
  return assign(root, root, key, member);
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
