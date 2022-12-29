#ifndef JSONTOOLKIT_JSON_RAPIDJSON_ITERATORS_H_
#define JSONTOOLKIT_JSON_RAPIDJSON_ITERATORS_H_

#include "read.h"

#include <cassert> // assert

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wambiguous-reversed-operator"
#include <rapidjson/document.h> // rapidjson::Value, rapidjson::Document
#pragma clang diagnostic pop

namespace sourcemeta::jsontoolkit {

template <typename Encoding, typename Allocator>
inline auto value(const rapidjson::GenericMember<Encoding, Allocator> &member)
    -> const rapidjson::GenericValue<Encoding, Allocator> & {
  return member.value;
}

template <typename Encoding, typename Allocator>
inline auto key(rapidjson::GenericMember<Encoding, Allocator> &member)
    -> rapidjson::GenericValue<Encoding, Allocator> & {
  return member.name;
}

template <typename Encoding, typename Allocator>
inline auto value(rapidjson::GenericMember<Encoding, Allocator> &member)
    -> rapidjson::GenericValue<Encoding, Allocator> & {
  return member.value;
}

namespace object {
template <typename Encoding, typename Allocator>
inline auto cbegin(const rapidjson::GenericValue<Encoding, Allocator> &value)
    -> rapidjson::Value::ConstMemberIterator {
  assert(is_object(value));
  return value.MemberBegin();
}

template <typename Encoding, typename Allocator>
inline auto cend(const rapidjson::GenericValue<Encoding, Allocator> &value)
    -> rapidjson::Value::ConstMemberIterator {
  assert(is_object(value));
  return value.MemberEnd();
}

template <typename Encoding, typename Allocator>
inline auto begin(rapidjson::GenericValue<Encoding, Allocator> &value)
    -> rapidjson::Value::MemberIterator {
  assert(is_object(value));
  return value.MemberBegin();
}

template <typename Encoding, typename Allocator>
inline auto end(rapidjson::GenericValue<Encoding, Allocator> &value)
    -> rapidjson::Value::MemberIterator {
  assert(is_object(value));
  return value.MemberEnd();
}
} // namespace object

} // namespace sourcemeta::jsontoolkit

#endif
