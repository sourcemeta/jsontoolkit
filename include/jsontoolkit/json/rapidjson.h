#ifndef JSONTOOLKIT_JSON_RAPIDJSON_H_
#define JSONTOOLKIT_JSON_RAPIDJSON_H_

#include <cassert>   // assert
#include <cstddef>   // std::size_t
#include <cstdint>   // std::int64_t
#include <ostream>   // std::basic_ostream
#include <stdexcept> // std::domain_error
#include <string>    // std::string

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

inline auto is_boolean(const rapidjson::Value &value) -> bool {
  return value.IsBool();
}

inline auto to_boolean(const rapidjson::Value &value) -> bool {
  assert(is_boolean(value));
  return value.GetBool();
}

inline auto is_array(const rapidjson::Value &value) -> bool {
  return value.IsArray();
}

inline auto is_object(const rapidjson::Value &value) -> bool {
  return value.IsObject();
}

inline auto is_string(const rapidjson::Value &value) -> bool {
  return value.IsString();
}

inline auto is_integer(const rapidjson::Value &value) -> bool {
  return value.IsInt64();
}

inline auto to_integer(const rapidjson::Value &value) -> std::int64_t {
  return value.GetInt64();
}

inline auto is_real(const rapidjson::Value &value) -> bool {
  return value.IsDouble();
}

inline auto to_real(const rapidjson::Value &value) -> double {
  return value.GetDouble();
}

inline auto to_string(const rapidjson::Value &value) -> std::string {
  return value.GetString();
}

inline auto size(const rapidjson::Value &value) -> std::size_t {
  if (is_object(value)) {
    return value.MemberCount();
  }

  assert(is_array(value));
  return value.Size();
}

inline auto get(const rapidjson::Value &value, const std::size_t index)
    -> const rapidjson::Value & {
  assert(is_array(value));
  assert(size(value) > index);
  return value[static_cast<rapidjson::SizeType>(index)];
}

inline auto defines(const rapidjson::Value &value, const std::string &key)
    -> bool {
  assert(is_object(value));
  return value.HasMember(key);
}

inline auto get(const rapidjson::Value &value, const std::string &key)
    -> const rapidjson::Value & {
  assert(is_object(value));
  assert(defines(value, key));
  return value[key];
}

template <typename CharT, typename Traits>
inline auto stringify(const rapidjson::Value &value,
                      std::basic_ostream<CharT, Traits> &stream)
    -> std::basic_ostream<CharT, Traits> & {
  rapidjson::OStreamWrapper ostream_wrapper{stream};
  rapidjson::Writer<rapidjson::OStreamWrapper> writer{ostream_wrapper};
  value.Accept(writer);
  return stream;
}

template <typename CharT, typename Traits>
inline auto prettify(const rapidjson::Value &value,
                     std::basic_ostream<CharT, Traits> &stream)
    -> std::basic_ostream<CharT, Traits> & {
  rapidjson::OStreamWrapper ostream_wrapper{stream};
  rapidjson::PrettyWriter<rapidjson::OStreamWrapper> writer{ostream_wrapper};
  value.Accept(writer);
  return stream;
}

inline auto contains(const rapidjson::Value &value,
                     const rapidjson::Value &element) -> bool {
  assert(is_array(value));
  for (rapidjson::Value::ConstValueIterator iterator = value.Begin();
       iterator != value.End(); ++iterator) {
    if (*iterator == element) {
      return true;
    }
  }

  return false;
}

inline auto contains(const rapidjson::Value &value, const std::string &element)
    -> bool {
  return contains(value, from(element));
}

} // namespace sourcemeta::jsontoolkit

#endif
