#ifndef JSONTOOLKIT_JSON_RAPIDJSON_COMMON_H_
#define JSONTOOLKIT_JSON_RAPIDJSON_COMMON_H_

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

#endif
