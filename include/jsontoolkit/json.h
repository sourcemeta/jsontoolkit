#ifndef JSONTOOLKIT_JSON_H_
#define JSONTOOLKIT_JSON_H_

#include <string>

#if defined(JSONTOOLKIT_BACKEND_RAPIDJSON)
#include <rapidjson/document.h> // rapidjson::Document
#endif

namespace sourcemeta::jsontoolkit {
class JSON {
public:
  JSON(const std::string &json);
};
} // namespace sourcemeta::jsontoolkit

#endif
