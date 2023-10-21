Getting Started
===============

@tableofcontents

JSON Toolkit is a swiss-army knife for [JSON](https://www.json.org) programming
in modern C++. It comes with a built-in parser and growing support for
standards such as [JSON Schema](http://json-schema.org), [JSON
Pointer](https://www.rfc-editor.org/rfc/rfc6901), and more.  It targets C++20
and supports the Clang, GCC, and MSVC compilers on macOS, GNU/Linux, FreeBSD,
Windows, and Unikraft.

Installation
------------

### As a git submodule

```sh
# Add the project as a submodule, in this case to deps/jsontoolkit
$ git submodule add https://github.com/sourcemeta/jsontoolkit.git deps/jsontoolkit

# Add the project as a CMake subdirectory
add_subdirectory("${PROJECT_SOURCE_DIR}/deps/jsontoolkit")

# Link your targets accordingly
target_link_libraries(my_executable_or_library PUBLIC sourcemeta::jsontoolkit::json)
target_link_libraries(my_executable_or_library PUBLIC sourcemeta::jsontoolkit::jsonschema)
target_link_libraries(my_executable_or_library PUBLIC sourcemeta::jsontoolkit::jsonpointer)
```

### Using FetchContent

```cmake
cmake_minimum_required(VERSION 3.14)
project(my_project)
set(CMAKE_CXX_STANDARD 20)

include(FetchContent)
FetchContent_Declare(
  jsontoolkit
  URL https://github.com/sourcemeta/jsontoolkit/archive/<commit-sha>.zip
  DOWNLOAD_EXTRACT_TIMESTAMP NO)
FetchContent_MakeAvailable(jsontoolkit)

add_executable(my_example ...)
target_link_libraries(my_example PUBLIC sourcemeta::jsontoolkit::json)
target_link_libraries(my_example PUBLIC sourcemeta::jsontoolkit::jsonschema)
target_link_libraries(my_example PUBLIC sourcemeta::jsontoolkit::jsonpointer)
```

### Using find_package

Assuming you have installed JSON Toolkit in a place where CMake can find the
package config file:

```sh
find_package(JSONToolkit REQUIRED)

# Link your targets accordingly
target_link_libraries(my_executable_or_library PUBLIC sourcemeta::jsontoolkit::json)
target_link_libraries(my_executable_or_library PUBLIC sourcemeta::jsontoolkit::jsonschema)
target_link_libraries(my_executable_or_library PUBLIC sourcemeta::jsontoolkit::jsonpointer)
```

### Using Unikraft

On your [`Kraftfile`](https://unikraft.org/docs/cli/reference/kraftfile/v0.5)
libraries, declare JSON Toolkit as follows:

```yml
libraries:
  ...
  jsontoolkit:
    source: https://github.com/sourcemeta/jsontoolkit.git
    version: <sha-or-tag>
```

Then, on your target `kconfig` configuration, specify:

```yml
- CONFIG_LIBJSONTOOLKIT=y
```

CMake
-----

### Options

| Option                            | Type    | Default | Description                                 |
|-----------------------------------|---------|---------|---------------------------------------------|
| `JSONTOOLKIT_URI`                 | Boolean | `ON`    | Build the JSON Toolkit URI library          |
| `JSONTOOLKIT_JSON`                | Boolean | `ON`    | Build the JSON Toolkit JSON library         |
| `JSONTOOLKIT_JSONSCHEMA`          | Boolean | `ON`    | Build the JSON Toolkit JSON Schema library  |
| `JSONTOOLKIT_JSONPOINTER`         | Boolean | `ON`    | Build the JSON Toolkit JSON Pointer library |
| `JSONTOOLKIT_TESTS`               | Boolean | `OFF`   | Build the JSON Toolkit tests                |
| `JSONTOOLKIT_CONTRIB`             | Boolean | `OFF`   | Build the JSON Toolkit `contrib` programs   |
| `JSONTOOLKIT_DOCS`                | Boolean | `OFF`   | Build the JSON Toolkit docs                 |
| `JSONTOOLKIT_ADDRESS_SANITIZER`   | Boolean | `OFF`   | Enable the address sanitizer                |
| `JSONTOOLKIT_UNDEFINED_SANITIZER` | Boolean | `OFF`   | Enable the undefined behavior sanitizer     |

### Components

If you install JSON Toolkit from source, keep in mind that the project is split
into a set of CMake components:

| Component                        | Description                                    |
|----------------------------------|------------------------------------------------|
| `sourcemeta_jsontoolkit`         | The core JSON Toolkit libraries                |
| `sourcemeta_jsontoolkit_dev`     | The JSON Toolkit headers and development files |
| `sourcemeta_jsontoolkit_contrib` | The optional executables located in `contrib/` |

Contributing
------------

JSON Toolkit makes use of the [CMake](https://cmake.org) build system. You can
configure, build and test the project as follows:

```sh
cmake -S . -B ./build \
  -DCMAKE_BUILD_TYPE:STRING=<Debug|Release> \
  -DCMAKE_COMPILE_WARNING_AS_ERROR:BOOL=ON \
  -DJSONTOOLKIT_CONTRIB:BOOL=ON \
  -DJSONTOOLKIT_DOCS:BOOL=ON \
  -DJSONTOOLKIT_TESTS:BOOL=ON
# Format the code
cmake --build ./build --config <Debug|Release> --target clang_format
# Build the project
cmake --build ./build --config <Debug|Release>
# Run the test suite
ctest --test-dir ./build --build-config <Debug|Release> --output-on-failure --progress
```

Or simply run:

```sh
# On UNIX-based systems
make
# On Windows
nmake
```
