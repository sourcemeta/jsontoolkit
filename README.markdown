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

Supported backends
------------------

| Name      | CMake ID    | URL                   | Reading | Writing | Iterators |
|-----------|-------------|-----------------------|---------|---------|-----------|
| RapidJSON | `rapidjson` | https://rapidjson.org | Y       | Y       | Y         |

Using JSON Toolkit
------------------

### As a git submodule

```sh
# Add the project as a submodule, in this case to deps/jsontoolkit
$ git submodule add https://github.com/sourcemeta/jsontoolkit.git deps/jsontoolkit

# Add the project as a CMake subdirectory
add_subdirectory("${PROJECT_SOURCE_DIR}/deps/jsontoolkit")

# Link your targets accordingly
target_link_libraries(my-executable-or-library PUBLIC sourcemeta_jsontoolkit_json)
```

Documentation
-------------

JSON Toolkit provides a set of (mostly `inline`) functions under the
`sourcemeta::jsontoolkit` namespace that are included as follows:

```c++
#include <jsontoolkit/json.h>
```

The `JSON` type referred to by the functions below is a logical alias to the
underlying JSON types. It is recommended to refer to this type as `auto`.

### Conversion

A set of functions to create JSON instances from various types.

#### `JSON parse(const std::basic_istream<C, T> &stream)`

Create a JSON document from a C++ standard input stream. For example, a JSON
document that represents an array can be parsed as follows:

```c++
#include <jsontoolkit/json.h>
#include <cassert>
#include <sstream>

std::istringstream stream{"[ 1, 2, 3 ]"};
const auto document{sourcemeta::jsontoolkit::parse(stream)};
assert(sourcemeta::jsontoolkit::is_array(document));
```

The return type of this function is backend-specific. To write code that is
portable across backends, it is recommended to treat this as an opaque type
using `auto`.

If parsing fails,
[`std::domain_error`](https://en.cppreference.com/w/cpp/error/domain_error)
with a human-friendly error string will be thrown.

#### `JSON parse(const std::string &source)`

Create a JSON document from a JSON string. For example, a JSON document that
represents an array can be parsed as follows:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const auto document{sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
assert(sourcemeta::jsontoolkit::is_array(document));
```

The return type of this function is backend-specific. To write code that is
portable across backends, it is recommended to treat this as an opaque type
using `auto`.

If parsing fails,
[`std::domain_error`](https://en.cppreference.com/w/cpp/error/domain_error)
with a human-friendly error string will be thrown.

#### `JSON from(std::nullptr_t | const std::string & | bool | std::int64_t | double)`

Create a JSON document from a set of supported basic C++ types. For example:

```c++
#include <jsontoolkit/json.h>

const auto my_null{sourcemeta::jsontoolkit::from(nullptr)};
const auto my_string{sourcemeta::jsontoolkit::from("Foo Bar")};
const auto my_bool{sourcemeta::jsontoolkit::from(true)};
const auto my_integer{sourcemeta::jsontoolkit::from(4)};
const auto my_real{sourcemeta::jsontoolkit::from(3.14)};
```

These functions are particularly handy for scalar types when passing them to
functions that modify the JSON document and take other JSON values as input.

<!-- `(TODO) JSON from(const std::vector<???> &)` -->
<!-- `(TODO) JSON from(const std::map<std::string, ???> &)` -->
<!-- `(TODO) JSON from(const std::unordered_map<std::string, ???> &)` -->

### Stringify

A set of functions to convert JSON instances into strings.

#### `void stringify(const JSON &, std::basic_ostream<C, T> &)`

Stringify the input JSON document into a given C++ standard output stream in
compact mode. For example:

```c++
#include <jsontoolkit/json.h>
#include <iostream>
#include <sstream>

const auto document{sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
std::ostringstream stream;
sourcemeta::jsontoolkit::stringify(document, stream);
std::cout << stream.str() << std::endl;
```

#### `void prettify(const JSON &, std::basic_ostream<C, T> &)`

Stringify the input JSON document into a given C++ standard output stream in
pretty mode, indenting the output using 4 spaces. For example:

```c++
#include <jsontoolkit/json.h>
#include <iostream>
#include <sstream>

const auto document{sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
std::ostringstream stream;
sourcemeta::jsontoolkit::prettify(document, stream);
std::cout << stream.str() << std::endl;
```

### Types

A set of functions to check the type of a given JSON instance.

#### `bool is_boolean(const JSON &)`

Check if the input JSON document is a boolean. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const auto document{sourcemeta::jsontoolkit::parse("true")};
assert(sourcemeta::jsontoolkit::is_boolean(document));
```

#### `bool is_null(const JSON &)`

Check if the input JSON document is null. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const auto document{sourcemeta::jsontoolkit::parse("null")};
assert(sourcemeta::jsontoolkit::is_null(document));
```

#### `bool is_array(const JSON &)`

Check if the input JSON document is an array. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const auto document{sourcemeta::jsontoolkit::parse("[ 1, 2, 3 ]")};
assert(sourcemeta::jsontoolkit::is_array(document));
```

#### `bool is_object(const JSON &)`

Check if the input JSON document is an object. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const auto document{sourcemeta::jsontoolkit::parse("{ \"foo\": 1 }")};
assert(sourcemeta::jsontoolkit::is_object(document));
```

#### `bool is_string(const JSON &)`

Check if the input JSON document is a string. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const auto document{sourcemeta::jsontoolkit::parse("\"foo\"")};
assert(sourcemeta::jsontoolkit::is_string(document));
```

#### `bool is_integer(const JSON &)`

Check if the input JSON document is an integer. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const auto document{sourcemeta::jsontoolkit::parse("5")};
assert(sourcemeta::jsontoolkit::is_integer(document));
```

#### `bool is_real(const JSON &)`

Check if the input JSON document is a real type. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const auto document{sourcemeta::jsontoolkit::parse("3.14")};
assert(sourcemeta::jsontoolkit::is_real(document));
```

### Reading

A set of functions to read JSON instances. None of these functions modify the
input instance.

#### `bool to_boolean(const JSON &)`

Convert a JSON instance into a boolean value. The result of this function is
undefined unless the JSON instance holds a boolean value. For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const auto document{sourcemeta::jsontoolkit::from(true)};
assert(sourcemeta::jsontoolkit::is_boolean(document));
assert(sourcemeta::jsontoolkit::to_boolean(document));
```

#### `std::int64_t to_integer(const JSON &)`

Convert a JSON instance into a signed integer value. The result of this
function is undefined unless the JSON instance holds an integer value. For
example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const auto document{sourcemeta::jsontoolkit::from(5)};
assert(sourcemeta::jsontoolkit::is_integer(document));
assert(sourcemeta::jsontoolkit::to_integer(document) == 5);
```

#### `double to_real(const JSON &)`

Convert a JSON instance into an IEEE 64-bit floating-point value. The result of
this function is undefined unless the JSON instance holds a real value. For
example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const auto document{sourcemeta::jsontoolkit::from(3.14)};
assert(sourcemeta::jsontoolkit::is_real(document));
assert(sourcemeta::jsontoolkit::to_real(document) == 3.14);
```

#### `std::string to_string(const JSON &)`

Convert a JSON instance into a standard string value. The result of this
function is undefined unless the JSON instance holds a string value. For
example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const auto document{sourcemeta::jsontoolkit::from("foo")};
assert(sourcemeta::jsontoolkit::is_string(document));
assert(sourcemeta::jsontoolkit::to_string(document) == "foo");
```

#### `std::size_t size(const JSON &)`

If the input JSON instance is an object, return its number of pairs. If the
input JSON instance is an array, return its number of elements. If the input
JSON instance is a string, return its length. The result of this function is
undefined for other types of JSON instances.

For example:

```c++
#include <jsontoolkit/json.h>
#include <cassert>

const auto my_object{sourcemeta::jsontoolkit::parse("{ \"foo\": 1 }")};
const auto my_array{sourcemeta::jsontoolkit::parse("[ 1, 2 ]")};
const auto my_string{sourcemeta::jsontoolkit::parse("\"foo\"")};

assert(sourcemeta::jsontoolkit::size(my_object) == 1);
assert(sourcemeta::jsontoolkit::size(my_array) == 2);
assert(sourcemeta::jsontoolkit::size(my_string) == 3);
```

#### `bool empty(const JSON &)`
#### `JSON& get(const JSON &, std::size_t index | const std::string &key)`
#### `bool defines(const JSON &, const std::string &key)`

### Writing

#### `(TODO REMOVE, use from) void set(JSON &root, JSON &value, std::nullptr_t | std::int64_t | double | const std::string &)`
#### `(TODO REMOVE, use from) void set(JSON &root, std::nullptr_t | std::int64_t | double | const std::string &)`
<!-- `(TODO) void set(JSON &root, JSON &value, bool)` -->

#### `void erase(JSON &, const std::string &key)`
#### `void clear(JSON &)`
#### `void assign(JSON &root, JSON &value, const std::string &key, JSON &)`
#### `void assign(JSON &root, const std::string &key, JSON &)`

### Iterators

#### `Iterator object::begin(JSON &)`
#### `Iterator object::end(JSON &)`
#### `ConstIterator object::cbegin(const JSON &)`
#### `ConstIterator object::cend(const JSON &)`
#### `JSON& value(const IteratorPair &)`
#### `std::string& key(const IteratorPair &)`

Developing JSON Toolkit
-----------------------

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
