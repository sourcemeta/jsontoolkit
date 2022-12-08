JSON Toolkit
============

JSON is not supported in the C++ standard library. As a consequence, consuming
a C++ library that uses JSON also means adopting their JSON implementation of
choice. Otherwise, you would need to write (often inefficient) code to make
multiple JSON implementations work together.

To solve this problem, JSON Toolkit aims to be a thin and interoperable
frontend to multiple JSON implementations that provides an interface that
resembles standard C++ containers.

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
