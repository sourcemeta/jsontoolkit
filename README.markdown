![JSON Toolkit](./assets/banner.png)

JSON Toolkit is a swiss-army knife for [JSON](https://www.json.org) programming
in modern C++. It comes with a built-in parser and growing support for
standards such as [JSON Schema](http://json-schema.org), [JSON
Pointer](https://www.rfc-editor.org/rfc/rfc6901),
[JSONL](https://jsonlines.org), and more.

Documentation
-------------

Refer to the project website for documentation:
[https://jsontoolkit.sourcemeta.com](https://jsontoolkit.sourcemeta.com).

Commercial Use
--------------

This project is governed by the [AGPL-3.0](./LICENSE) copyleft license and our
[Contribution Agreement](https://www.sourcemeta.com/contributing/). To ensure
the sustainability of the project, you can freely make use of this software as
long the outcome is distributed under the same license. Otherwise, you must
obtain a [commercial license](./LICENSE-COMMERCIAL) that removes such
restrictions. Read more about our licensing approach
[here](https://www.sourcemeta.com/licensing/).

Example
--------------

```cpp
#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonpointer.h>
#include <sstream>
#include <iostream>

int main()
{
    // creating json using parse
    sourcemeta::jsontoolkit::JSON _template_ =
        sourcemeta::jsontoolkit::parse(R"JSON({
            "name" : "xyz" ,
            "age" : 20 ,
            "address" : "zxy"
        })JSON");

    // stringstream for output
    std::ostringstream stringvar;
    // pointer for the name
    const sourcemeta::jsontoolkit::Pointer name_pointer{"name"};
    const sourcemeta::jsontoolkit::Pointer age_pointer{"age"};
    const sourcemeta::jsontoolkit::Pointer address_pointer{"address"};
    // value instance for json
    const sourcemeta::jsontoolkit::JSON name_value{"xyz_with_foo"};
    const sourcemeta::jsontoolkit::JSON age_value{20 + 1};
    const sourcemeta::jsontoolkit::JSON address_value{"zxy_with_bar"};
    // updating the value of the name using pointer
    sourcemeta::jsontoolkit::set(_template_, name_pointer, name_value);
    sourcemeta::jsontoolkit::set(_template_, age_pointer, age_value);
    sourcemeta::jsontoolkit::set(_template_, address_pointer, address_value);
    sourcemeta::jsontoolkit::prettify(_template_, stringvar);
    std::cout << stringvar.str() << std::endl;

    /*
    output :
        {
            "address": "zxy_with_bar",
            "age": 21,
            "name": "xyz_with_foo"
        }

    */
}
```
