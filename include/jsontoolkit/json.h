#ifndef JSONTOOLKIT_JSON_H_
#define JSONTOOLKIT_JSON_H_

#include <string>

#if defined(JSONTOOLKIT_BACKEND_RAPIDJSON)
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wambiguous-reversed-operator"
#include <rapidjson/document.h> // rapidjson::Value, rapidjson::Document
#pragma clang diagnostic pop
#endif

namespace sourcemeta::jsontoolkit {
class JSON {
public:
  JSON(const std::string &json);
  ~JSON();

  auto is_boolean() const -> bool;
  auto is_object() const -> bool;
  auto at(const std::string &key) const -> const JSON;

private:
#if defined(JSONTOOLKIT_BACKEND_RAPIDJSON)
  JSON(rapidjson::Value *const value,
       rapidjson::Document::AllocatorType *const value_allocator);
  rapidjson::Value *data;
  rapidjson::Document::AllocatorType *allocator;
  const bool is_top_level{true};
  const bool is_owned{true};
#endif
};
} // namespace sourcemeta::jsontoolkit

#endif
