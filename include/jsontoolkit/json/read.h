#ifndef JSONTOOLKIT_JSON_READ_H_
#define JSONTOOLKIT_JSON_READ_H_

#if JSONTOOLKIT_BACKEND == rapidjson
#include "rapidjson/read.h"
#else
#error Unknown JSON Toolkit backend
#endif

#endif
