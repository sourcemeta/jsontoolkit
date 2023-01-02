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

### CMake options

| Option                | Type    | Default     | Description                     |
|-----------------------|---------|-------------|---------------------------------|
| `JSONTOOLKIT_BACKEND` | String  | `rapidjson` | The JSON implementation backend |
| `JSONTOOLKIT_TESTS`   | Boolean | `ON`        | Build the JSON Toolkit tests    |

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

Create a JSON document from a set of supported basic C++ types. For example:

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

#### Stringify to stream

`void stringify(const JSON & | const JSONValue &, std::basic_ostream<C, T> &)`

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

`void prettify(const JSON & | const JSONValue &, std::basic_ostream<C, T> &)`

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

`bool is_boolean(const JSON & | const JSONValue &)`

Check if the input JSON document is a boolean. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("true")};
assert(sourcemeta::jsontoolkit::is_boolean(document));
```

#### Is null

`bool is_null(const JSON & | const JSONValue &)`

Check if the input JSON document is null. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("null")};
assert(sourcemeta::jsontoolkit::is_null(document));
```

#### Is array

`bool is_array(const JSON & | const JSONValue &)`

Check if the input JSON document is an array. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
assert(sourcemeta::jsontoolkit::is_array(document));
```

#### Is object

`bool is_object(const JSON & | const JSONValue &)`

Check if the input JSON document is an object. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("{ \"foo\": 1 }")};
assert(sourcemeta::jsontoolkit::is_object(document));
```

#### Is string

`bool is_string(const JSON & | const JSONValue &)`

Check if the input JSON document is a string. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("\"foo\"")};
assert(sourcemeta::jsontoolkit::is_string(document));
```

#### Is integer

`bool is_integer(const JSON & | const JSONValue &)`

Check if the input JSON document is an integer. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("5")};
assert(sourcemeta::jsontoolkit::is_integer(document));
```

#### Is real

`bool is_real(const JSON & | const JSONValue &)`

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

`bool to_boolean(const JSON & | const JSONValue &)`

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

`std::int64_t to_integer(const JSON & | const JSONValue &)`

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

`double to_real(const JSON & | const JSONValue &)`

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

`std::string to_string(const JSON & | const JSONValue &)`

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

`std::size_t size(const JSON & | const JSONValue &)`

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

`bool empty(const JSON & | const JSONValue &)`

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

`JSONValue& at([const] JSON & | [const] JSONValue &, std::size_t index | const std::string &key)`

This function retrieves a reference to an object value or an array element.
This function supports both `const` and non-`const` overloads. The result of
this function is undefined if the input JSON document is neither an object nor
an array.

For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON my_object{sourcemeta::jsontoolkit::parse("{ \"foo\": 1 }")};
const sourcemeta::jsontoolkit::JSONValue &value{sourcemeta::jsontoolkit::at(my_object, "foo")};
assert(sourcemeta::jsontoolkit::to_integer(value) == 1);

const sourcemeta::jsontoolkit::JSON my_array{sourcemeta::jsontoolkit::parse("[ 1, 2 ]")};
const sourcemeta::jsontoolkit::JSONValue &element{sourcemeta::jsontoolkit::at(my_array, 1)};
assert(sourcemeta::jsontoolkit::to_integer(element) == 2);
```

#### Get first element

`JSONValue& front([const] JSON & | [const] JSONValue &)`

This function retrieves a reference to the first element of a JSON array. This
function supports both `const` and non-`const` overloads. This function is
undefined if the input JSON instance is not an array or if it is an empty
array. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
const sourcemeta::jsontoolkit::JSONValue &value{sourcemeta::jsontoolkit::front(my_object)};
assert(sourcemeta::jsontoolkit::to_integer(value) == 1);
```

#### Get last element

`JSONValue& back([const] JSON & | [const] JSONValue &)`

This function retrieves a reference to the last element of a JSON array. This
function supports both `const` and non-`const` overloads. This function is
undefined if the input JSON instance is not an array or if it is an empty
array. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
const sourcemeta::jsontoolkit::JSONValue &value{sourcemeta::jsontoolkit::back(my_object)};
assert(sourcemeta::jsontoolkit::to_integer(value) == 3);
```

#### Defines member

`bool defines(const JSON & | const JSONValue &, const std::string &key)`

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

`void set([JSON &root,] JSON &value | JSONValue &value, const JSON &other)`

This function sets a value to another JSON value. For example, the member of a
JSON document can be transformed from a boolean to an integer as follows:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("{ \"foo\": true }")};
sourcemeta::jsontoolkit::JSONValue &member{sourcemeta::jsontoolkit::at(document, "foo")};
sourcemeta::jsontoolkit::set(document, member, sourcemeta::jsontoolkit::from(2));
```

#### Set member

`void assign([JSON &root,] JSON &value | JSONValue &value, const std::string &key, JSON & | JSONValue &)`

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

`void erase(JSON & | JSONValue &, const std::string &key)`

This function deletes an object key. This function is undefined is the
input JSON instance is not an object. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

sourcemeta::jsontoolkit::JSON document{sourcemeta::jsontoolkit::parse("{ \"foo\": true }")};
sourcemeta::jsontoolkit::erase(document, "foo");
assert(!sourcemeta::jsontoolkit::defines(document, "foo"));
```

#### Clear

`void clear(JSON & | JSONValue &)`

#### Insert element to the front

`void push_front([JSON &root,] JSON &value | JSONValue &value, JSON & | JSONValue &)`

#### Insert element to the back

`void push_back([JSON &root,] JSON &value | JSONValue &value, JSON & | JSONValue &)`

#### Make the instance an array

`void make_array(JSON & | JSONValue &)`

#### Make the instance an object

`void make_object(JSON & | JSONValue &)`

### Iterators

#### Mutable object iterators

`Iterator begin_object(JSON & | JSONValue &)`

`Iterator end_object(JSON & | JSONValue &)`

#### Const object iterators

`ConstIterator cbegin_object(const JSON & | const JSONValue &)`

`ConstIterator cend_object(const JSON & | const JSONValue &)`

#### Mutable array iterators

`Iterator begin_array(JSON & | JSONValue &)`

`Iterator end_array(JSON & | JSONValue &)`

#### Reverse mutable array iterators

`Iterator rbegin_array(JSON & | JSONValue &)`

`Iterator rend_array(JSON & | JSONValue &)`

#### Const array iterators

`ConstIterator cbegin_array(const JSON & | const JSONValue &)`

`ConstIterator cend_array(const JSON & | const JSONValue &)`

#### Reverse const array iterators

`ConstIterator crbegin_array(const JSON & | const JSONValue &)`

`ConstIterator crend_array(const JSON & | const JSONValue &)`

#### Get object value

`JSON& value(const IteratorPair &)`

#### Get object key

`std::string& key(const IteratorPair &)`

Contributing
------------

JSON Toolkit makes use of the [CMake](https://cmake.org) build system. You can
configure, build and test the project as follows:

```sh
# Find the backend id in the "Supported backends" section
cmake -S . -B ./build -DCMAKE_BUILD_TYPE=<Debug|Release> -DJSONTOOLKIT_BACKEND=<backend-id>
cmake --build ./build
ctest --test-dir ./build --output-on-failure --progress
```

Building and running the test suite requires the presence of
[GoogleTest](https://google.github.io/googletest/) in the system.
