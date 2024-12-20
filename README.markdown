![JSON Toolkit](./assets/banner.png)

JSON Toolkit is a swiss-army knife for [JSON](https://www.json.org) programming
in modern C++. It comes with a built-in parser and growing support for
standards such as [JSON Schema](http://json-schema.org), [JSON
Pointer](https://www.rfc-editor.org/rfc/rfc6901),
[JSONL](https://jsonlines.org), and more. For example:

```cpp
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>

#include <sstream>
#include <iostream>
#include <stdlib>
#include <utility>

auto main() -> int {
  // Parsing a JSON document from a string
  auto document{sourcemeta::jsontoolkit::parse(R"JSON({
    "name": "John Doe",
    "age": 20,
    "address": "14 Manchester Road, Coventry CV77 1XN"
  })JSON")};

  // Updating a property using JSON Pointer
  const sourcemeta::jsontoolkit::Pointer pointer{"name"};
  sourcemeta::jsontoolkit::JSON new_value{"Jane Doe"};
  sourcemeta::jsontoolkit::set(document, pointer, std::move(new_value));

  // Pretty-print result
  sourcemeta::jsontoolkit::prettify(document, std::cout);
  std::cout << "\n";

  return EXIT_SUCCESS;
}
```

Documentation
-------------

Refer to the project website for documentation:
[https://jsontoolkit.sourcemeta.com](https://jsontoolkit.sourcemeta.com).
