Getting Started
===============

@tableofcontents

JSON Toolkit is a swiss-army knife for [JSON](https://www.json.org) programming
in modern C++. It comes with a built-in parser and growing support for
standards such as [JSON Schema](http://json-schema.org), [JSON
Pointer](https://www.rfc-editor.org/rfc/rfc6901),
[JSONL](https://jsonlines.org), and more. It targets C++20 and supports the
Clang, GCC, and MSVC compilers on macOS, GNU/Linux, FreeBSD, Windows, and
Unikraft (through the ELF loader).

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
target_link_libraries(my_executable_or_library PUBLIC sourcemeta::jsontoolkit::jsonl)
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
target_link_libraries(my_example PUBLIC sourcemeta::jsontoolkit::jsonl)
```

### Using find_package

Assuming you have installed JSON Toolkit in a place where CMake can find the
package config file:

```sh
find_package(JSONToolkit REQUIRED)

# This package also supports component-based inclusion
find_package(JSONToolkit REQUIRED COMPONENTS json jsonschema jsonpointer jsonl)

# Link your targets accordingly
target_link_libraries(my_executable_or_library PUBLIC sourcemeta::jsontoolkit::json)
target_link_libraries(my_executable_or_library PUBLIC sourcemeta::jsontoolkit::jsonschema)
target_link_libraries(my_executable_or_library PUBLIC sourcemeta::jsontoolkit::jsonpointer)
target_link_libraries(my_executable_or_library PUBLIC sourcemeta::jsontoolkit::jsonl)
```

CMake
-----

### Options

Check the top-level
[`CMakeLists.txt`](https://github.com/sourcemeta/jsontoolkit/blob/main/CMakeLists.txt)
for the available CMake options.

### Components

If you install JSON Toolkit from source, keep in mind that the project is split
into a set of CMake components:

| Component                        | Description                                    |
|----------------------------------|------------------------------------------------|
| `sourcemeta_jsontoolkit`         | The core JSON Toolkit libraries                |
| `sourcemeta_jsontoolkit_dev`     | The JSON Toolkit headers and development files |

Contributing
------------

You can configure, build and test the project by simply runnning:

```sh
# On UNIX-based systems
make
# On Windows
nmake
```
