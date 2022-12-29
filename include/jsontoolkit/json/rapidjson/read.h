#ifndef JSONTOOLKIT_JSON_RAPIDJSON_READ_H_
#define JSONTOOLKIT_JSON_RAPIDJSON_READ_H_

#include <cassert>     // assert
#include <cstddef>     // std::size_t
#include <cstdint>     // std::int64_t
#include <istream>     // std::basic_istream
#include <ostream>     // std::basic_ostream
#include <stdexcept>   // std::domain_error
#include <string>      // std::string
#include <type_traits> // std::enable_if_t, std::is_same_v

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wambiguous-reversed-operator"
#include <rapidjson/document.h>       // rapidjson::Value, rapidjson::Document
#include <rapidjson/error/en.h>       // rapidjson::GetParseError_En
#include <rapidjson/istreamwrapper.h> // rapidjson::IStreamWrapper
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

template <typename CharT, typename Traits>
inline auto parse(std::basic_istream<CharT, Traits> &stream)
    -> rapidjson::Document {
  rapidjson::IStreamWrapper istream_wrapper{stream};
  rapidjson::Document document;
  document.ParseStream(istream_wrapper);
  if (document.HasParseError()) {
    throw std::domain_error(
        rapidjson::GetParseError_En(document.GetParseError()));
  }

  return document;
}

inline auto from(const std::string &value) -> rapidjson::Document {
  rapidjson::Document document;
  document.SetString(value.c_str(), document.GetAllocator());
  return document;
}

inline auto from(std::nullptr_t) -> rapidjson::Document {
  return parse("null");
}

inline auto from(std::int64_t value) -> rapidjson::Document {
  rapidjson::Document document;
  document.SetInt64(value);
  return document;
}

template <typename T>
typename std::enable_if_t<std::is_same_v<T, double>, rapidjson::Document>
from(T value) {
  rapidjson::Document document;
  document.SetDouble(value);
  return document;
}

template <typename T>
typename std::enable_if_t<std::is_same_v<T, bool>, rapidjson::Document>
from(T value) {
  return value ? parse("true") : parse("false");
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
  } else if (is_array(value)) {
    return value.Size();
  }

  assert(is_string(value));
  return value.GetStringLength();
}

template <typename Encoding, typename Allocator>
inline auto empty(const rapidjson::GenericValue<Encoding, Allocator> &value)
    -> bool {
  return size(value) == 0;
}

template <typename Encoding, typename Allocator>
inline auto defines(const rapidjson::GenericValue<Encoding, Allocator> &value,
                    const std::string &key) -> bool {
  assert(is_object(value));
  return value.HasMember(key);
}

template <typename Encoding, typename Allocator>
inline auto at(const rapidjson::GenericValue<Encoding, Allocator> &value,
               const std::size_t index) -> const rapidjson::Value & {
  assert(is_array(value));
  assert(size(value) > index);
  return value[static_cast<rapidjson::SizeType>(index)];
}

template <typename Encoding, typename Allocator>
inline auto at(const rapidjson::GenericValue<Encoding, Allocator> &value,
               const std::string &key) -> const rapidjson::Value & {
  assert(is_object(value));
  assert(defines(value, key));
  return value[key];
}

template <typename Encoding, typename Allocator, typename CharT,
          typename Traits>
inline auto stringify(const rapidjson::GenericValue<Encoding, Allocator> &value,
                      std::basic_ostream<CharT, Traits> &stream) -> void {
  rapidjson::OStreamWrapper ostream_wrapper{stream};
  rapidjson::Writer<rapidjson::OStreamWrapper> writer{ostream_wrapper};
  value.Accept(writer);
}

template <typename Encoding, typename Allocator, typename CharT,
          typename Traits>
inline auto prettify(const rapidjson::GenericValue<Encoding, Allocator> &value,
                     std::basic_ostream<CharT, Traits> &stream) -> void {
  rapidjson::OStreamWrapper ostream_wrapper{stream};
  rapidjson::PrettyWriter<rapidjson::OStreamWrapper> writer{ostream_wrapper};
  value.Accept(writer);
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

} // namespace sourcemeta::jsontoolkit

#endif
