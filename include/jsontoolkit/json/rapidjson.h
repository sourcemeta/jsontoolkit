#ifndef JSONTOOLKIT_JSON_RAPIDJSON_H_
#define JSONTOOLKIT_JSON_RAPIDJSON_H_

#include <cassert>     // assert
#include <cstddef>     // std::size_t
#include <cstdint>     // std::int64_t
#include <ostream>     // std::basic_ostream
#include <stdexcept>   // std::domain_error
#include <string>      // std::string
#include <type_traits> // std::enable_if_t, std::is_same_v

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wambiguous-reversed-operator"
#include <rapidjson/document.h>       // rapidjson::Value, rapidjson::Document
#include <rapidjson/error/en.h>       // rapidjson::GetParseError_En
#include <rapidjson/ostreamwrapper.h> // rapidjson::OStreamWrapper
#include <rapidjson/prettywriter.h>   // rapidjson::PrettyWriter
#include <rapidjson/writer.h>         // rapidjson::Writer
#pragma clang diagnostic pop

namespace sourcemeta::jsontoolkit {

inline auto parse(const std::string &json) -> rapidjson::Document {
  rapidjson::Document document;
  document.Parse(json);
  if (document.HasParseError()) {
    throw std::domain_error(
        rapidjson::GetParseError_En(document.GetParseError()));
  }

  return document;
}

inline auto from(const std::string &value) -> rapidjson::Value {
  rapidjson::Document document;
  return rapidjson::Value{value, document.GetAllocator()};
}

inline auto from(bool value) -> rapidjson::Value {
  rapidjson::Value result;
  result.SetBool(value);
  return result;
}

inline auto from(std::nullptr_t) -> rapidjson::Value {
  rapidjson::Value result;
  result.SetNull();
  return result;
}

template <typename Encoding, typename Allocator>
inline auto set(rapidjson::GenericValue<Encoding, Allocator> &value,
                std::nullptr_t) -> void {
  value.SetNull();
}

template <typename Encoding, typename Allocator>
inline auto set(rapidjson::GenericValue<Encoding, Allocator> &value,
                std::int64_t new_value) -> void {
  value.SetInt64(new_value);
}

template <typename Encoding, typename Allocator, typename T,
          typename = std::enable_if_t<std::is_same_v<T, double>>>
inline auto set(rapidjson::GenericValue<Encoding, Allocator> &value,
                T new_value) -> void {
  value.SetDouble(new_value);
}

template <typename Encoding, typename Allocator>
inline auto is_null(const rapidjson::GenericValue<Encoding, Allocator> &value)
    -> bool {
  return value.IsNull();
}

template <typename Encoding, typename Allocator>
inline auto
is_boolean(const rapidjson::GenericValue<Encoding, Allocator> &value) -> bool {
  return value.IsBool();
}

template <typename Encoding, typename Allocator>
inline auto
to_boolean(const rapidjson::GenericValue<Encoding, Allocator> &value) -> bool {
  assert(is_boolean(value));
  return value.GetBool();
}

template <typename Encoding, typename Allocator>
inline auto is_array(const rapidjson::GenericValue<Encoding, Allocator> &value)
    -> bool {
  return value.IsArray();
}

template <typename Encoding, typename Allocator>
inline auto is_object(const rapidjson::GenericValue<Encoding, Allocator> &value)
    -> bool {
  return value.IsObject();
}

template <typename Encoding, typename Allocator>
inline auto is_string(const rapidjson::GenericValue<Encoding, Allocator> &value)
    -> bool {
  return value.IsString();
}

template <typename Encoding, typename Allocator>
inline auto
is_integer(const rapidjson::GenericValue<Encoding, Allocator> &value) -> bool {
  return value.IsInt64();
}

template <typename Encoding, typename Allocator>
inline auto
to_integer(const rapidjson::GenericValue<Encoding, Allocator> &value)
    -> std::int64_t {
  return value.GetInt64();
}

template <typename Encoding, typename Allocator>
inline auto is_real(const rapidjson::GenericValue<Encoding, Allocator> &value)
    -> bool {
  return value.IsDouble();
}

template <typename Encoding, typename Allocator>
inline auto to_real(const rapidjson::GenericValue<Encoding, Allocator> &value)
    -> double {
  return value.GetDouble();
}

template <typename Encoding, typename Allocator>
inline auto to_string(const rapidjson::GenericValue<Encoding, Allocator> &value)
    -> std::string {
  return value.GetString();
}

template <typename Encoding, typename Allocator>
inline auto size(const rapidjson::GenericValue<Encoding, Allocator> &value)
    -> std::size_t {
  if (is_object(value)) {
    return value.MemberCount();
  }

  assert(is_array(value));
  return value.Size();
}

template <typename Encoding, typename Allocator>
inline auto empty(const rapidjson::GenericValue<Encoding, Allocator> &value)
    -> bool {
  return size(value) == 0;
}

template <typename Encoding, typename Allocator>
inline auto get(const rapidjson::GenericValue<Encoding, Allocator> &value,
                const std::size_t index) -> const rapidjson::Value & {
  assert(is_array(value));
  assert(size(value) > index);
  return value[static_cast<rapidjson::SizeType>(index)];
}

template <typename Encoding, typename Allocator>
inline auto defines(const rapidjson::GenericValue<Encoding, Allocator> &value,
                    const std::string &key) -> bool {
  assert(is_object(value));
  return value.HasMember(key);
}

template <typename Encoding, typename Allocator>
inline auto erase(rapidjson::GenericValue<Encoding, Allocator> &value,
                  const std::string &key) -> void {
  assert(is_object(value));
  value.EraseMember(key);
}

template <typename Encoding, typename Allocator>
inline auto get(const rapidjson::GenericValue<Encoding, Allocator> &value,
                const std::string &key) -> const rapidjson::Value & {
  assert(is_object(value));
  assert(defines(value, key));
  return value[key];
}

template <typename Encoding, typename Allocator, typename CharT,
          typename Traits>
inline auto stringify(const rapidjson::GenericValue<Encoding, Allocator> &value,
                      std::basic_ostream<CharT, Traits> &stream)
    -> std::basic_ostream<CharT, Traits> & {
  rapidjson::OStreamWrapper ostream_wrapper{stream};
  rapidjson::Writer<rapidjson::OStreamWrapper> writer{ostream_wrapper};
  value.Accept(writer);
  return stream;
}

template <typename Encoding, typename Allocator, typename CharT,
          typename Traits>
inline auto prettify(const rapidjson::GenericValue<Encoding, Allocator> &value,
                     std::basic_ostream<CharT, Traits> &stream)
    -> std::basic_ostream<CharT, Traits> & {
  rapidjson::OStreamWrapper ostream_wrapper{stream};
  rapidjson::PrettyWriter<rapidjson::OStreamWrapper> writer{ostream_wrapper};
  value.Accept(writer);
  return stream;
}

template <typename Encoding, typename Allocator>
inline auto
contains(const rapidjson::GenericValue<Encoding, Allocator> &value,
         const rapidjson::GenericValue<Encoding, Allocator> &element) -> bool {
  assert(is_array(value));
  for (rapidjson::Value::ConstValueIterator iterator = value.Begin();
       iterator != value.End(); ++iterator) {
    if (*iterator == element) {
      return true;
    }
  }

  return false;
}

template <typename Encoding, typename Allocator>
inline auto contains(const rapidjson::GenericValue<Encoding, Allocator> &value,
                     const std::string &element) -> bool {
  return contains(value, from(element));
}

// TODO: Support arrays too
template <typename Encoding, typename Allocator>
inline auto clear(rapidjson::GenericValue<Encoding, Allocator> &value) -> void {
  assert(is_object(value));
  value.EraseMember(value.MemberBegin(), value.MemberEnd());
}

template <typename Encoding, typename Allocator>
inline auto assign(rapidjson::GenericValue<Encoding, Allocator> &value,
                   const std::string &key,
                   const rapidjson::GenericValue<Encoding, Allocator> &member)
    -> void {
  assert(is_object(value));
  rapidjson::GenericDocument<Encoding, Allocator> document;
  value[key] = rapidjson::GenericValue<Encoding, Allocator>{
      member, document.GetAllocator()};
}

template <typename Encoding, typename Allocator>
inline auto assign(rapidjson::GenericValue<Encoding, Allocator> &value,
                   const std::string &key,
                   rapidjson::GenericValue<Encoding, Allocator> &&member)
    -> void {
  assert(is_object(value));
  value[key] = member;
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
