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

| Name      | CMake ID    | URL                   |
|-----------|-------------|-----------------------|
| RapidJSON | `rapidjson` | https://rapidjson.org |

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

##### `JSON parse(const std::string &source)`

Create a JSON document from a JSON string.

##### `JSON from(std::nullptr_t | const std::string & | bool | std::int64_t)`

Create a JSON document from a set of supported C++ types.

<!-- `(TODO) JSON from(double)` -->
<!-- `(TODO) JSON from(const std::vector<???> &)` -->
<!-- `(TODO) JSON from(const std::map<std::string, ???> &)` -->
<!-- `(TODO) JSON from(const std::unordered_map<std::string, ???> &)` -->

### Stringify

##### `void stringify(const JSON &, std::basic_ostream<C, T> &)`
##### `void prettify(const JSON &, std::basic_ostream<C, T> &)`

### Types

##### `bool is_boolean(const JSON &)`

Check if the input JSON document is a boolean.

##### `bool is_null(const JSON &)`

Check if the input JSON document is null.

##### `bool is_array(const JSON &)`

Check if the input JSON document is an array.

##### `bool is_object(const JSON &)`

Check if the input JSON document is an object.

##### `bool is_string(const JSON &)`

Check if the input JSON document is a string.

##### `bool is_integer(const JSON &)`

Check if the input JSON document is an integer.

##### `bool is_real(const JSON &)`

Check if the input JSON document is a real type.

### Reading

##### `bool to_boolean(const JSON &)`
##### `std::int64_t to_integer(const JSON &)`
##### `double to_real(const JSON &)`
##### `std::string to_string(const JSON &)`
##### `std::size_t size(const JSON &)`
##### `bool empty(const JSON &)`
##### `JSON& get(const JSON &, std::size_t index | const std::string &key)`
##### `bool defines(const JSON &, const std::string &key)`
##### `bool contains(const JSON &, const JSON & | const std::string &)`

### Writing

##### `void set(JSON &root, JSON &value, std::nullptr_t | std::int64_t | double | const std::string &)`
##### `void set(JSON &root, std::nullptr_t | std::int64_t | double | const std::string &)`
<!-- `(TODO) void set(JSON &root, JSON &value, bool)` -->

##### `void erase(JSON &, const std::string &key)`
##### `void clear(JSON &)`

##### `void assign(JSON &root, JSON &value, const std::string &key, JSON & | const std::string &)`
##### `void assign(JSON &root, const std::string &key, JSON & | const std::string &)`

### Iterators

##### `Iterator object::begin(JSON &)`
##### `Iterator object::end(JSON &)`
##### `ConstIterator object::cbegin(const JSON &)`
##### `ConstIterator object::cend(const JSON &)`
##### `JSON& value(const IteratorPair &)`
##### `(TODO) std::string& key(const IteratorPair &)`

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
