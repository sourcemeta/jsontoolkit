#ifndef JSONTOOLKIT_ITERATORS_H_
#define JSONTOOLKIT_ITERATORS_H_

#if JSONTOOLKIT_BACKEND == rapidjson
#include "json/rapidjson/iterators.h"
#else
#error Unknown JSON Toolkit backend
#endif

#endif
