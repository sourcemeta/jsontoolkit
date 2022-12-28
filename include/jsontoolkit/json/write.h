#ifndef JSONTOOLKIT_JSON_WRITE_H_
#define JSONTOOLKIT_JSON_WRITE_H_

#if JSONTOOLKIT_BACKEND == rapidjson
#include "rapidjson/write.h"
#else
#error Unknown JSON Toolkit backend
#endif

#endif
