#ifndef JSONTOOLKIT_JSON_RAPIDJSON_ITERATORS_H_
#define JSONTOOLKIT_JSON_RAPIDJSON_ITERATORS_H_

#include "common.h"
#include "read.h"

#include <cassert> // assert

namespace sourcemeta::jsontoolkit {

inline auto value(const rapidjson::Value::Member &member) -> const JSONValue & {
  return member.value;
}

inline auto key(rapidjson::Value::Member &member) -> std::string {
  return member.name.GetString();
}

inline auto value(rapidjson::Value::Member &member) -> JSONValue & {
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
