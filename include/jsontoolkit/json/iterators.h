#ifndef JSONTOOLKIT_JSON_ITERATORS_H_
#define JSONTOOLKIT_JSON_ITERATORS_H_

#if JSONTOOLKIT_BACKEND == rapidjson
#include "rapidjson/iterators.h"
#else
#error Unknown JSON Toolkit backend
#endif

#endif
