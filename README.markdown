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

##### `sourcemeta::jsontoolkit::parse(const std::string &source) -> JSON`

Create a JSON document from a JSON string.

##### `sourcemeta::jsontoolkit::from(const std::string &) -> JSON`

Create a JSON string document from a string literal.

##### `sourcemeta::jsontoolkit::from(std::nullptr_t) -> JSON`

Create a JSON null document from a `nullptr` literal.

##### `sourcemeta::jsontoolkit::from(bool) -> JSON`

Create a JSON boolean document from a boolean literal.

##### `sourcemeta::jsontoolkit::from(std::int64_t) -> JSON`

Create a JSON integer document from an `std::int64_t` literal.

##### `(TODO) sourcemeta::jsontoolkit::from(double) -> JSON`
##### `(TODO) sourcemeta::jsontoolkit::from(const std::vector<???> &) -> JSON`
##### `(TODO) sourcemeta::jsontoolkit::from(const std::map<std::string, ???> &) -> JSON`
##### `(TODO) sourcemeta::jsontoolkit::from(const std::unordered_map<std::string, ???> &) -> JSON`

### Read

##### `sourcemeta::jsontoolkit::is_boolean(const JSON &document) -> bool`

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
