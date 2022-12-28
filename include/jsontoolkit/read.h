#ifndef JSONTOOLKIT_READ_H_
#define JSONTOOLKIT_READ_H_

#if JSONTOOLKIT_BACKEND == rapidjson
#include "json/rapidjson/read.h"
#else
#error Unknown JSON Toolkit backend
#endif

#endif
