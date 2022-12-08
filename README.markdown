JSON Toolkit
============

JSON is not supported in the C++ standard library. As a consequence, consuming
a C++ library that uses JSON also means adopting their JSON implementation of
choice. Otherwise, you would need to write (often inefficient) code to make
multiple JSON implementations work together.

To solve this problem, JSON Toolkit aims to be a thin and interoperable
frontend to multiple JSON implementations that provides an interface that
resembles standard C++ containers.

Using JSON Toolkit
------------------

### As a git submodule

```sh
# Add the project as a submodule, in this case to deps/jsontoolkit
$ git submodule add https://github.com/sourcemeta/jsontoolkit.git deps/jsontoolkit
# Add the project as a CMake subdirectory
add_subdirectory("${PROJECT_SOURCE_DIR}/deps/jsontoolkit")
# Link your targets accordingly
target_link_libraries(my-executable-or-library PUBLIC sourcemeta_jsontoolkit)
```

Building JSON Toolkit
---------------------

JSON Toolkit makes use of the [CMake](https://cmake.org) build system.  JSON
Toolkit provides a set of CMake
[presets](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html) to
configure, build and test the project.

```sh
cmake --list-presets
```

You can configure and build the project using a given preset as follows:

```sh
cmake --preset <preset> -DJSONTOOLKIT_BACKEND=<backend>
cmake --build --preset <preset>
```
