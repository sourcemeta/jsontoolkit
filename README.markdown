JSON Toolkit
============

JSON is not supported in the C++ standard library. As a consequence, consuming
a C++ library that uses JSON also means adopting their JSON implementation of
choice. Otherwise, you would need to write (often inefficient) code to make
multiple JSON implementations work together.

To solve this problem, JSON Toolkit aims to be a thin, header-only and
low-overhead frontend to multiple JSON implementations. With JSON Toolkit,
libraries can support multiple JSON backends and transparently let the
end-consumer swap them as required.

**JSON Toolkit targets C++17 and supports the Clang compiler.**

Usage
-----

### As a git submodule

```sh
# Add the project as a submodule, in this case to deps/jsontoolkit
$ git submodule add https://github.com/sourcemeta/jsontoolkit.git deps/jsontoolkit

# Add the project as a CMake subdirectory
add_subdirectory("${PROJECT_SOURCE_DIR}/deps/jsontoolkit")

# Link your targets accordingly
target_link_libraries(my-executable-or-library PUBLIC sourcemeta_jsontoolkit_json)
```

### Using `FetchContent`

```cmake
cmake_minimum_required(VERSION 3.14)
project(my_project)
set(CMAKE_CXX_STANDARD 17)

include(FetchContent)
FetchContent_Declare(
  jsontoolkit
  URL https://github.com/sourcemeta/jsontoolkit/archive/<commit-sha>.zip
  DOWNLOAD_EXTRACT_TIMESTAMP NO)
FetchContent_MakeAvailable(jsontoolkit)

add_executable(my_example ...)
target_link_libraries(my_example PRIVATE sourcemeta_jsontoolkit_json)
```

### CMake options

| Option                     | Type    | Default     | Description                                      |
|----------------------------|---------|-------------|--------------------------------------------------|
| `JSONTOOLKIT_BACKEND`      | String  | `rapidjson` | The JSON implementation backend                  |
| `JSONTOOLKIT_BACKEND_PATH` | String  |             | A custom path to the JSON implementation backend |
| `JSONTOOLKIT_TESTS`        | Boolean | `OFF`       | Build the JSON Toolkit tests                     |
| `JSONTOOLKIT_CONTRIB`      | Boolean | `OFF`       | Build the JSON Toolkit `contrib` programs        |

### Supported backends

| Name                               | CMake ID    | Reading | Writing | Iterators |
|------------------------------------|-------------|---------|---------|-----------|
| [RapidJSON](https://rapidjson.org) | `rapidjson` | Y       | Y       | Y         |

JSON
----

JSON Toolkit provides a set of (mostly `inline`) functions and aliases under
the `sourcemeta::jsontoolkit` namespace that are included as follows:

```c++
#include <jsontoolkit/json.h>
```

### Conversion

A set of functions to encode and decode JSON instances.

#### Parse from stream

`JSON parse(const std::basic_istream<C, T> &stream)`

Create a JSON document from a C++ standard input stream. For example, a JSON
document that represents an array can be parsed as follows:

```c++
#include <jsontoolkit/json.h>
#include <cassert>
#include <sstream>

std::istringstream stream{"[ 1, 2, 3 ]"};
const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse(stream)};
assert(sourcemeta::jsontoolkit::is_array(document));
```

If parsing fails,
[`std::domain_error`](https://en.cppreference.com/w/cpp/error/domain_error)
with a human-friendly error string will be thrown.

#### Parse from string

`JSON parse(const std::string &source)`

Create a JSON document from a JSON string. For example, a JSON document that
represents an array can be parsed as follows:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
assert(sourcemeta::jsontoolkit::is_array(document));
```

If parsing fails,
[`std::domain_error`](https://en.cppreference.com/w/cpp/error/domain_error)
with a human-friendly error string will be thrown.

#### Create from type

`JSON from(std::nullptr_t | const std::string & | bool | std::int64_t | double)`

This function creates a JSON document from a set of supported basic C++ types.
For example:

```c++
#include <jsontoolkit/json.h>

const sourcemeta::jsontoolkit::JSON my_null{sourcemeta::jsontoolkit::from(nullptr)};
const sourcemeta::jsontoolkit::JSON my_string{sourcemeta::jsontoolkit::from("Foo Bar")};
const sourcemeta::jsontoolkit::JSON my_bool{sourcemeta::jsontoolkit::from(true)};
const sourcemeta::jsontoolkit::JSON my_integer{sourcemeta::jsontoolkit::from(4)};
const sourcemeta::jsontoolkit::JSON my_real{sourcemeta::jsontoolkit::from(3.14)};
```

These functions are particularly handy for scalar types when passing them to
functions that modify the JSON document and take other JSON values as input.

#### Create object

`JSON make_object()`

This function creates an empty JSON object. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::make_object()};
assert(sourcemeta::jsontoolkit::is_object(document));
assert(sourcemeta::jsontoolkit::empty(document));
```

This function is particularly handy for programatically constructing objects.

#### Create array

`JSON make_array()`

This function creates an empty JSON array. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::make_array()};
assert(sourcemeta::jsontoolkit::is_array(document));
assert(sourcemeta::jsontoolkit::empty(document));
```

This function is particularly handy for programatically constructing arrays.

#### Stringify to stream

`void stringify(const JSON & | const Value &, std::basic_ostream<C, T> &)`

Stringify the input JSON document into a given C++ standard output stream in
compact mode. For example:

```c++
#include <jsontoolkit/json.h>
#include <iostream>
#include <sstream>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
std::ostringstream stream;
sourcemeta::jsontoolkit::stringify(document, stream);
std::cout << stream.str() << std::endl;
```

#### Prettify to stream

`void prettify(const JSON & | const Value &, std::basic_ostream<C, T> &)`

Stringify the input JSON document into a given C++ standard output stream in
pretty mode, indenting the output using 4 spaces. For example:

```c++
#include <jsontoolkit/json.h>
#include <iostream>
#include <sstream>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
std::ostringstream stream;
sourcemeta::jsontoolkit::prettify(document, stream);
std::cout << stream.str() << std::endl;
```

### Types

A set of functions to check the type of a given JSON instance.

#### Is boolean

`bool is_boolean(const JSON & | const Value &)`

Check if the input JSON document is a boolean. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("true")};
assert(sourcemeta::jsontoolkit::is_boolean(document));
```

#### Is null

`bool is_null(const JSON & | const Value &)`

Check if the input JSON document is null. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("null")};
assert(sourcemeta::jsontoolkit::is_null(document));
```

#### Is array

`bool is_array(const JSON & | const Value &)`

Check if the input JSON document is an array. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
assert(sourcemeta::jsontoolkit::is_array(document));
```

#### Is object

`bool is_object(const JSON & | const Value &)`

Check if the input JSON document is an object. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("{ \"foo\": 1 }")};
assert(sourcemeta::jsontoolkit::is_object(document));
```

#### Is string

`bool is_string(const JSON & | const Value &)`

Check if the input JSON document is a string. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("\"foo\"")};
assert(sourcemeta::jsontoolkit::is_string(document));
```

#### Is integer

`bool is_integer(const JSON & | const Value &)`

Check if the input JSON document is an integer. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("5")};
assert(sourcemeta::jsontoolkit::is_integer(document));
```

#### Is real

`bool is_real(const JSON & | const Value &)`

Check if the input JSON document is a real type. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("3.14")};
assert(sourcemeta::jsontoolkit::is_real(document));
```

### Reading

A set of functions to read JSON instances. None of these functions modify the
input instance.

#### To boolean

`bool to_boolean(const JSON & | const Value &)`

Convert a JSON instance into a boolean value. The result of this function is
undefined unless the JSON instance holds a boolean value. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
assert(sourcemeta::jsontoolkit::is_boolean(document));
assert(sourcemeta::jsontoolkit::to_boolean(document));
```

#### To integer

`std::int64_t to_integer(const JSON & | const Value &)`

Convert a JSON instance into a signed integer value. The result of this
function is undefined unless the JSON instance holds an integer value. For
example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(5)};
assert(sourcemeta::jsontoolkit::is_integer(document));
assert(sourcemeta::jsontoolkit::to_integer(document) == 5);
```

#### To real

`double to_real(const JSON & | const Value &)`

Convert a JSON instance into an IEEE 64-bit floating-point value. The result of
this function is undefined unless the JSON instance holds a real value. For
example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(3.14)};
assert(sourcemeta::jsontoolkit::is_real(document));
assert(sourcemeta::jsontoolkit::to_real(document) == 3.14);
```

#### To string

`std::string to_string(const JSON & | const Value &)`

Convert a JSON instance into a standard string value. The result of this
function is undefined unless the JSON instance holds a string value. For
example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from("foo")};
assert(sourcemeta::jsontoolkit::is_string(document));
assert(sourcemeta::jsontoolkit::to_string(document) == "foo");
```

#### Size

`std::size_t size(const JSON & | const Value &)`

If the input JSON instance is an object, return its number of pairs. If the
input JSON instance is an array, return its number of elements. If the input
JSON instance is a string, return its length. The result of this function is
undefined for other types of JSON instances.

For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON my_object{sourcemeta::jsontoolkit::parse("{ \"foo\": 1 }")};
const sourcemeta::jsontoolkit::JSON my_array{sourcemeta::jsontoolkit::parse("[ 1, 2 ]")};
const sourcemeta::jsontoolkit::JSON my_string{sourcemeta::jsontoolkit::parse("\"foo\"")};

assert(sourcemeta::jsontoolkit::size(my_object) == 1);
assert(sourcemeta::jsontoolkit::size(my_array) == 2);
assert(sourcemeta::jsontoolkit::size(my_string) == 3);
```

#### Is empty

`bool empty(const JSON & | const Value &)`

A convenience function to check whether the input JSON document is an empty
object, empty array or empty string. The result of this function is undefined
for other types of JSON instances.

For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON my_object{sourcemeta::jsontoolkit::parse("{}")};
const sourcemeta::jsontoolkit::JSON my_array{sourcemeta::jsontoolkit::parse("[]")};
const sourcemeta::jsontoolkit::JSON my_string{sourcemeta::jsontoolkit::parse("\"\"")};

assert(sourcemeta::jsontoolkit::empty(my_object));
assert(sourcemeta::jsontoolkit::empty(my_array));
assert(sourcemeta::jsontoolkit::empty(my_string));
```

#### Get element or member

`Value& at([const] JSON & | [const] Value &, std::size_t index | const std::string &key)`

This function retrieves a reference to an object value or an array element.
This function supports both `const` and non-`const` overloads. The result of
this function is undefined if the input JSON document is neither an object nor
an array.

For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON my_object{sourcemeta::jsontoolkit::parse("{ \"foo\": 1 }")};
const sourcemeta::jsontoolkit::Value &value{sourcemeta::jsontoolkit::at(my_object, "foo")};
assert(sourcemeta::jsontoolkit::to_integer(value) == 1);

const sourcemeta::jsontoolkit::JSON my_array{sourcemeta::jsontoolkit::parse("[ 1, 2 ]")};
const sourcemeta::jsontoolkit::Value &element{sourcemeta::jsontoolkit::at(my_array, 1)};
assert(sourcemeta::jsontoolkit::to_integer(element) == 2);
```

#### Get first element

`Value& front([const] JSON & | [const] Value &)`

This function retrieves a reference to the first element of a JSON array. This
function supports both `const` and non-`const` overloads. This function is
undefined if the input JSON instance is not an array or if it is an empty
array. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
const sourcemeta::jsontoolkit::Value &value{sourcemeta::jsontoolkit::front(my_object)};
assert(sourcemeta::jsontoolkit::to_integer(value) == 1);
```

#### Get last element

`Value& back([const] JSON & | [const] Value &)`

This function retrieves a reference to the last element of a JSON array. This
function supports both `const` and non-`const` overloads. This function is
undefined if the input JSON instance is not an array or if it is an empty
array. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
const sourcemeta::jsontoolkit::Value &value{sourcemeta::jsontoolkit::back(my_object)};
assert(sourcemeta::jsontoolkit::to_integer(value) == 3);
```

#### Defines member

`bool defines(const JSON & | const Value &, const std::string &key)`

This function checks whether an input JSON object defines a specific key. This
function is undefined is the input JSON instance is not an object. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("{ \"foo\": 1 }")};
assert(sourcemeta::jsontoolkit::defines(document, "foo"));
assert(!sourcemeta::jsontoolkit::defines(document, "bar"));
```

### Writing

A set of functions to write to JSON instance. To accomodate for the memory
model of some JSON implementations [^1], some of these functions need a
reference to the root of the JSON document under modification. If you are
modifying the top-level JSON document, then this additional argument is not
necessary.

[^1]: RapidJSON requires the root document allocator as an argument to many of
  its writing functions, as RapidJSON values do not store a pointer to its
  parent for memory-efficiency purposes. See
  [http://rapidjson.org/md_doc_dom.html#Allocator](http://rapidjson.org/md_doc_dom.html#Allocator)

#### Set instance

`void set([JSON &root,] JSON &value | Value &value, const JSON &other)`

This function sets a value to another JSON value. For example, the member of a
JSON document can be transformed from a boolean to an integer as follows:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("{ \"foo\": true }")};
sourcemeta::jsontoolkit::Value &member{sourcemeta::jsontoolkit::at(document, "foo")};
sourcemeta::jsontoolkit::set(document, member, sourcemeta::jsontoolkit::from(2));
assert(sourcemeta::jsontoolkit::is_integer(document, "foo"));
```

#### Set member

`void assign([JSON &root,] JSON &value | Value &value, const std::string &key, JSON & | Value &)`

This function sets or updates an object key. This function is undefined is the
input JSON instance is not an object. For example, an object can be updated to
contain a new `bar` boolean member as follows:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("{ \"foo\": true }")};
sourcemeta::jsontoolkit::assign(document, "bar", sourcemeta::jsontoolkit::from(false));
assert(sourcemeta::jsontoolkit::defines(document, "foo"));
assert(sourcemeta::jsontoolkit::defines(document, "bar"));
```

#### Erase member

`void erase(JSON & | Value &, const std::string &key)`

This function deletes an object key. This function is undefined is the
input JSON instance is not an object. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("{ \"foo\": true }")};
sourcemeta::jsontoolkit::erase(document, "foo");
assert(!sourcemeta::jsontoolkit::defines(document, "foo"));
```

This function does nothing if the given key does not exist.

#### Clear

`void clear(JSON & | Value &)`

This function deletes all members of an object or all elements of an array,
leaving them empty. This function is undefined is the input JSON instance is
not an object or an array. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

sourcemeta::jsontoolkit::JSON my_object{sourcemeta::jsontoolkit::parse("{ \"foo\": true }")};
sourcemeta::jsontoolkit::JSON my_array{sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
sourcemeta::jsontoolkit::clear(my_object);
sourcemeta::jsontoolkit::clear(my_array);
assert(sourcemeta::jsontoolkit::empty(my_object));
assert(sourcemeta::jsontoolkit::empty(my_array));
```

#### Insert element to the front

`void push_front([JSON &root,] JSON &value | Value &value, JSON & | Value &)`

This function inserts a new element to the beginning of the given array. This
function is undefined is the input JSON instance is not an array. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
sourcemeta::jsontoolkit::push_front(document, sourcemeta::jsontoolkit::from(0));
assert(sourcemeta::jsontoolkit::size(document) == 4);
sourcemeta::jsontoolkit::Value &value{sourcemeta::jsontoolkit::front(document)};
assert(sourcemeta::jsontoolkit::to_integer(value) == 0);
```

#### Insert element to the back

`void push_back([JSON &root,] JSON &value | Value &value, JSON & | Value &)`

This function inserts a new element to the end of the given array. This
function is undefined is the input JSON instance is not an array. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
sourcemeta::jsontoolkit::push_front(document, sourcemeta::jsontoolkit::from(4));
assert(sourcemeta::jsontoolkit::size(document) == 4);
sourcemeta::jsontoolkit::Value &value{sourcemeta::jsontoolkit::back(document)};
assert(sourcemeta::jsontoolkit::to_integer(value) == 4);
```

#### Make the instance an object

`void make_object(JSON & | Value &)`

This function converts an existing JSON instance into an empty object. For
example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
assert(sourcemeta::jsontoolkit::is_boolean(document));
sourcemeta::jsontoolkit::make_object(document);
assert(sourcemeta::jsontoolkit::is_object(document));
assert(sourcemeta::jsontoolkit::empty(document));
```

#### Make the instance an array

`void make_array(JSON & | Value &)`

This function converts an existing JSON instance into an empty array. For
example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
assert(sourcemeta::jsontoolkit::is_boolean(document));
sourcemeta::jsontoolkit::make_array(document);
assert(sourcemeta::jsontoolkit::is_array(document));
assert(sourcemeta::jsontoolkit::empty(document));
```

### Iterators

A set of functions that provide a standard iterators interface over JSON for
both objects and arrays. The `Iterator`, `ConstIterator` and `IteratorPair`
types referred in this section are logical types that map to backend-specify
iterator types. To write portable code across backends, it is recommended to
always refer to these types using `auto`.

#### Mutable object iterators

`Iterator begin_object(JSON & | Value &)`

`Iterator end_object(JSON & | Value &)`

These functions provide mutable
[random-access](https://en.cppreference.com/w/cpp/iterator/random_access_iterator)
object iterators. The iteration order is not guaranteed. These functions are
undefined if the given JSON instance is not an object. For example, every value
of an object can be set to `true` as follows:

```c++
#include <jsontoolkit/json.h>
#include <algorithm>

sourcemeta::jsontoolkit::JSON document{
  sourcemeta::jsontoolkit::parse("{ \"foo\": false, \"bar\": false }")};
std::for_each(sourcemeta::jsontoolkit::begin_object(document),
              sourcemeta::jsontoolkit::end_object(document),
              [](auto &pair) {
                  sourcemeta::jsontoolkit::set(
                    document,
                    sourcemeta::jsontoolkit::value(element),
                    sourcemeta::jsontoolkit::from("true"));
              });
```

#### Const object iterators

`ConstIterator cbegin_object(const JSON & | const Value &)`

`ConstIterator cend_object(const JSON & | const Value &)`

These functions provide immutable
[random-access](https://en.cppreference.com/w/cpp/iterator/random_access_iterator)
object iterators. The iteration order is not guaranteed. These functions are
undefined if the given JSON instance is not an object. For example, the keys
of an object can be printed as follows:

```c++
#include <jsontoolkit/json.h>
#include <algorithm>
#include <iostream>

const sourcemeta::jsontoolkit::JSON document{
  sourcemeta::jsontoolkit::parse("{ \"foo\": false, \"bar\": false }")};
std::for_each(sourcemeta::jsontoolkit::cbegin_object(document),
              sourcemeta::jsontoolkit::cend_object(document),
              [](const auto &pair) {
                std::cout << "Key: "
                          << sourcemeta::jsontoolkit::key(element)
                          << "\n";
              });
```

#### Mutable array iterators

`Iterator begin_array(JSON & | Value &)`

`Iterator end_array(JSON & | Value &)`

These functions provide mutable
[bidirectional](https://en.cppreference.com/w/cpp/iterator/bidirectional_iterator)
array iterators. The iteration order is from start to end. These functions are
undefined if the given JSON instance is not an array. For example, every
integer value of an array can be incremented as follows:

```c++
#include <jsontoolkit/json.h>
#include <algorithm>

sourcemeta::jsontoolkit::JSON document{
  sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
std::for_each(sourcemeta::jsontoolkit::begin_array(document),
              sourcemeta::jsontoolkit::end_array(document),
              [](auto &element) {
                  const auto current{sourcemeta::jsontoolkit::to_integer(element)};
                  sourcemeta::jsontoolkit::set(
                    document, element, sourcemeta::jsontoolkit::from(current + 1));
              });
```

#### Reverse mutable array iterators

`Iterator rbegin_array(JSON & | Value &)`

`Iterator rend_array(JSON & | Value &)`

These functions provide reverse mutable
[bidirectional](https://en.cppreference.com/w/cpp/iterator/bidirectional_iterator)
array iterators. The iteration order is from end to start. These functions are
undefined if the given JSON instance is not an array. For example, every
integer value of an array can be decremented as follows:

```c++
#include <jsontoolkit/json.h>
#include <algorithm>

sourcemeta::jsontoolkit::JSON document{
  sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
std::for_each(sourcemeta::jsontoolkit::rbegin_array(document),
              sourcemeta::jsontoolkit::rend_array(document),
              [](auto &element) {
                  const auto current{sourcemeta::jsontoolkit::to_integer(element)};
                  sourcemeta::jsontoolkit::set(
                    document, element, sourcemeta::jsontoolkit::from(current - 1));
              });
```

#### Const array iterators

`ConstIterator cbegin_array(const JSON & | const Value &)`

`ConstIterator cend_array(const JSON & | const Value &)`

These functions provide immutable
[bidirectional](https://en.cppreference.com/w/cpp/iterator/bidirectional_iterator)
array iterators. The iteration order is from start to end. These functions are
undefined if the given JSON instance is not an array. For example, the pairs of
an array can be printed as follows:

```c++
#include <jsontoolkit/json.h>
#include <algorithm>
#include <iostream>

const sourcemeta::jsontoolkit::JSON document{
  sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
std::for_each(sourcemeta::jsontoolkit::cbegin_array(document),
              sourcemeta::jsontoolkit::cend_array(document),
              [](const auto &element) {
                std::cout << "Element: "
                          << sourcemeta::jsontoolkit::to_integer(element)
                          << "\n";
              });
```

#### Reverse const array iterators

`ConstIterator crbegin_array(const JSON & | const Value &)`

`ConstIterator crend_array(const JSON & | const Value &)`

These functions provide reverse immutable
[bidirectional](https://en.cppreference.com/w/cpp/iterator/bidirectional_iterator)
array iterators. The iteration order is from end to start. These functions are
undefined if the given JSON instance is not an array. For example, the pairs of
an array can be printed in reverse as follows:

```c++
#include <jsontoolkit/json.h>
#include <algorithm>
#include <iostream>

const sourcemeta::jsontoolkit::JSON document{
  sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
std::for_each(sourcemeta::jsontoolkit::crbegin_array(document),
              sourcemeta::jsontoolkit::crend_array(document),
              [](const auto &element) {
                std::cout << "Element: "
                          << sourcemeta::jsontoolkit::to_integer(element)
                          << "\n";
              });
```

#### Get object value

`JSON& value(const IteratorPair &)`

This function is a utility to retrieve the value of a member pair returned by
an object iterator. For example:

```c++
#include <jsontoolkit/json.h>
#include <algorithm>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{
  sourcemeta::jsontoolkit::parse("{ \"foo\": false, \"bar\": false }")};
std::for_each(sourcemeta::jsontoolkit::cbegin_object(document),
              sourcemeta::jsontoolkit::cend_object(document),
              [](const auto &pair) {
                assert(sourcemeta::jsontoolkit::is_boolean(
                  sourcemeta::jsontoolkit::value(element)));
              });
```

#### Get object key

`std::string& key(const IteratorPair &)`

This function is a utility to retrieve the key of a member pair returned by an
object iterator. For example:

```c++
#include <jsontoolkit/json.h>
#include <algorithm>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{
  sourcemeta::jsontoolkit::parse("{ \"foo\": false, \"bar\": false }")};
std::for_each(sourcemeta::jsontoolkit::cbegin_object(document),
              sourcemeta::jsontoolkit::cend_object(document),
              [](const auto &pair) {
                assert(sourcemeta::jsontoolkit::key(element).size() == 3);
              });
```

JSON Schema
-----------

JSON Toolkit aims to support the latest version of [JSON
Schema](https://json-schema.org) at any given point in time. This functionality
is included as follows:

```c++
#include <jsontoolkit/jsonschema.h>
```

Older JSON Schema versions will not be supported. Older JSON Schema documents
can be automatically upgraded using a tool like
[Alterschema](https://github.com/sourcemeta/alterschema).

### General

A set of functions that implement foundational utilities for JSON Schema
support.

#### Is schema

`bool is_schema(const JSON & | const Value &)`

This function returns true if the given JSON instance is of a schema-compatible
type: an object or a boolean. For example:

```c++
#include <jsontoolkit/json.h>
#include <jsontoolkit/jsonschema.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::from(true)};
assert(sourcemeta::jsontoolkit::is_schema(document));
```

#### Get identifier

`std::optional<std::string> id(const JSON & | const Value &)`

This function returns the URI identifier of the given schema, if any. For
example:

```c++
#include <jsontoolkit/json.h>
#include <jsontoolkit/jsonschema.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{
    sourcemeta::jsontoolkit::parse(R"JSON({
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://sourcemeta.com/example-schema"
})JSON")};

std::optional<std::string> id{sourcemeta::jsontoolkit::id(document)};
assert(id.has_value());
assert(id.value() == "https://sourcemeta.com/example-schema");
```

#### Get metaschema

`std::optional<std::string> metaschema(const JSON & | const Value &)`

Get the metaschema corresponding to a JSON Schema instance. The result is empty
if the metaschema cannot be determined. For example:

```c++
#include <jsontoolkit/json.h>
#include <jsontoolkit/jsonschema.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse(R"JSON({
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object"
})JSON")};

const std::optional<std::string> metaschema{sourcemeta::jsontoolkit::metaschema(document)};
assert(metaschema.has_value());
assert(metaschema.value() == "https://json-schema.org/draft/2020-12/schema");
```

If the input document is not a valid JSON Schema instance,
[`std::invalid_argument`](https://en.cppreference.com/w/cpp/error/invalid_argument)
will be thrown.

Contributing
------------

JSON Toolkit makes use of the [CMake](https://cmake.org) build system. You can
configure, build and test the project as follows:

```sh
# Find the backend id in the "Supported backends" section
cmake -S . -B ./build -DCMAKE_BUILD_TYPE=<Debug|Release> \
  -DJSONTOOLKIT_BACKEND=<backend-id> -DJSONTOOLKIT_CONTRIB=ON -DJSONTOOLKIT_TESTS=ON
# Format the code
cmake --build ./build --config <Debug|Release> --target clang_format
# Build the project
cmake --build ./build --config <Debug|Release>
# Run the test suite
ctest --test-dir ./build --build-config <Debug|Release> --output-on-failure --progress
```

Building and running the test suite requires the presence of
[GoogleTest](https://google.github.io/googletest/) in the system.
