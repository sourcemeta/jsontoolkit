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

### Creation

##### `JSON sourcemeta::jsontoolkit::parse(const std::string &source)`

Create a JSON document from a JSON string.

##### `JSON sourcemeta::jsontoolkit::from(const std::string &)`

Create a JSON string document from a string literal.

##### `JSON sourcemeta::jsontoolkit::from(std::nullptr_t)`

Create a JSON null document from a `nullptr` literal.

##### `JSON sourcemeta::jsontoolkit::from(bool)`

Create a JSON boolean document from a boolean literal.

##### `JSON sourcemeta::jsontoolkit::from(std::int64_t)`

Create a JSON integer document from an `std::int64_t` literal.

##### `(TODO) JSON sourcemeta::jsontoolkit::from(double)`
##### `(TODO) JSON sourcemeta::jsontoolkit::from(const std::vector<???> &)`
##### `(TODO) JSON sourcemeta::jsontoolkit::from(const std::map<std::string, ???> &)`
##### `(TODO) JSON sourcemeta::jsontoolkit::from(const std::unordered_map<std::string, ???> &)`

### Types

##### `bool sourcemeta::jsontoolkit::is_boolean(const JSON &)`

Check if the input JSON document is a boolean.

##### `bool sourcemeta::jsontoolkit::is_null(const JSON &)`

Check if the input JSON document is null.

##### `bool sourcemeta::jsontoolkit::is_array(const JSON &)`

Check if the input JSON document is an array.

##### `bool sourcemeta::jsontoolkit::is_object(const JSON &)`

Check if the input JSON document is an object.

##### `bool sourcemeta::jsontoolkit::is_string(const JSON &)`

Check if the input JSON document is a string.

##### `bool sourcemeta::jsontoolkit::is_integer(const JSON &)`

Check if the input JSON document is an integer.

##### `bool sourcemeta::jsontoolkit::is_real(const JSON &)`

Check if the input JSON document is a real type.

### Write

### Iterators

Developing JSON Toolkit
-----------------------

JSON Toolkit makes use of the [CMake](https://cmake.org) build system. You can
configure, build and test the project as follows:

```sh
# Find the backend id in the "Supported backends" section
cmake -S . -B ./build -DCMAKE_BUILD_TYPE=<Debug|Release> -DJSONTOOLKIT_BACKEND=<backend-id>
cmake --build ./build
ctest --test-dir ./build --output-on-failure
```

Building and running the test suite requires the presence of
[GoogleTest](https://google.github.io/googletest/) in the system.
