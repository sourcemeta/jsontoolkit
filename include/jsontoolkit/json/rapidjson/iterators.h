#ifndef JSONTOOLKIT_JSON_RAPIDJSON_ITERATORS_H_
#define JSONTOOLKIT_JSON_RAPIDJSON_ITERATORS_H_

#include "common.h"
#include "read.h"

#include <cassert> // assert

namespace sourcemeta::jsontoolkit {

template <typename Encoding, typename Allocator>
inline auto value(const rapidjson::GenericMember<Encoding, Allocator> &member)
    -> const JSONValue & {
  return member.value;
}

template <typename Encoding, typename Allocator>
inline auto key(rapidjson::GenericMember<Encoding, Allocator> &member)
    -> std::string {
  return member.name.GetString();
}

template <typename Encoding, typename Allocator>
inline auto value(rapidjson::GenericMember<Encoding, Allocator> &member)
    -> JSONValue & {
  return member.value;
}

namespace object {
inline auto cbegin(const JSONValue &value)
    -> rapidjson::Value::ConstMemberIterator {
  assert(is_object(value));
  return value.MemberBegin();
}

inline auto cend(const JSONValue &value)
    -> rapidjson::Value::ConstMemberIterator {
  assert(is_object(value));
  return value.MemberEnd();
}

inline auto begin(JSONValue &value) -> rapidjson::Value::MemberIterator {
  assert(is_object(value));
  return value.MemberBegin();
}

inline auto end(JSONValue &value) -> rapidjson::Value::MemberIterator {
  assert(is_object(value));
  return value.MemberEnd();
}
} // namespace object

} // namespace sourcemeta::jsontoolkit

#endif
