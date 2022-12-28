#ifndef JSONTOOLKIT_WRITE_H_
#define JSONTOOLKIT_WRITE_H_

#if JSONTOOLKIT_BACKEND == rapidjson
#include "json/rapidjson/write.h"
#else
#error Unknown JSON Toolkit backend
#endif

#endif
