set(PRETTIFY_BIN $<TARGET_FILE:jsontoolkit_prettify>)
set(MINIFY_BIN $<TARGET_FILE:jsontoolkit_minify>)
set(JSONSCHEMA_WALKER_BIN $<TARGET_FILE:jsontoolkit_jsonschema_walker>)
set(JSONSCHEMA_KEYWORDS_BIN $<TARGET_FILE:jsontoolkit_jsonschema_keywords>)

if(CMAKE_SYSTEM_NAME STREQUAL "Windows")
  set(IS_SAME_BIN "${CMAKE_CURRENT_SOURCE_DIR}/is_same.bat")
else()
  set(IS_SAME_BIN "${CMAKE_CURRENT_SOURCE_DIR}/is_same.sh")
endif()

add_test(NAME prettify_invalid COMMAND
  "${PRETTIFY_BIN}" "${CMAKE_CURRENT_SOURCE_DIR}/invalid.json")
set_tests_properties(prettify_invalid PROPERTIES WILL_FAIL TRUE)

add_test(NAME prettify_not_found COMMAND
  "${PRETTIFY_BIN}" "${CMAKE_CURRENT_SOURCE_DIR}/non-existent.json")
set_tests_properties(prettify_not_found PROPERTIES WILL_FAIL TRUE)

add_test(NAME prettify COMMAND
  "${IS_SAME_BIN}" "${PRETTIFY_BIN}"
  "${CMAKE_CURRENT_SOURCE_DIR}/prettify-output.json"
  "${CMAKE_CURRENT_SOURCE_DIR}/prettify-input.json")

if(NOT CMAKE_SYSTEM_NAME STREQUAL "Windows")
  add_test(NAME prettify_stdin COMMAND
    "${CMAKE_CURRENT_SOURCE_DIR}/is_same_stdin.sh"
    "${PRETTIFY_BIN}"
    "${CMAKE_CURRENT_SOURCE_DIR}/prettify-output.json"
    "${CMAKE_CURRENT_SOURCE_DIR}/prettify-input.json")
endif()

add_test(NAME minify_invalid COMMAND
  "${MINIFY_BIN}" "${CMAKE_CURRENT_SOURCE_DIR}/invalid.json")
set_tests_properties(minify_invalid PROPERTIES WILL_FAIL TRUE)

add_test(NAME minify_not_found COMMAND
  "${MINIFY_BIN}" "${CMAKE_CURRENT_SOURCE_DIR}/non-existent.json")
set_tests_properties(minify_not_found PROPERTIES WILL_FAIL TRUE)

add_test(NAME minify COMMAND
  "${IS_SAME_BIN}" "${MINIFY_BIN}"
  "${CMAKE_CURRENT_SOURCE_DIR}/minify-output.json"
  "${CMAKE_CURRENT_SOURCE_DIR}/minify-input.json")

if(NOT CMAKE_SYSTEM_NAME STREQUAL "Windows")
  add_test(NAME minify_stdin COMMAND
    "${CMAKE_CURRENT_SOURCE_DIR}/is_same_stdin.sh"
    "${MINIFY_BIN}"
    "${CMAKE_CURRENT_SOURCE_DIR}/minify-output.json"
    "${CMAKE_CURRENT_SOURCE_DIR}/minify-input.json")
endif()

add_test(NAME jsonschema_walker_deep_2020_12 COMMAND
  "${IS_SAME_BIN}" "${JSONSCHEMA_WALKER_BIN}"
  "${CMAKE_CURRENT_SOURCE_DIR}/example-2020-12-subschemas-deep.txt"
  deep "${CMAKE_CURRENT_SOURCE_DIR}/example-2020-12.json")

add_test(NAME jsonschema_walker_flat_2020_12 COMMAND
  "${IS_SAME_BIN}" "${JSONSCHEMA_WALKER_BIN}"
  "${CMAKE_CURRENT_SOURCE_DIR}/example-2020-12-subschemas-flat.txt"
  flat "${CMAKE_CURRENT_SOURCE_DIR}/example-2020-12.json")

if(NOT CMAKE_SYSTEM_NAME STREQUAL "Windows")
  add_test(NAME jsonschema_walker_deep_2020_12_stdin COMMAND
    "${CMAKE_CURRENT_SOURCE_DIR}/is_same_stdin.sh"
    "${JSONSCHEMA_WALKER_BIN}"
    "${CMAKE_CURRENT_SOURCE_DIR}/example-2020-12-subschemas-deep.txt"
    "${CMAKE_CURRENT_SOURCE_DIR}/example-2020-12.json" deep)

  add_test(NAME jsonschema_walker_flat_2020_12_stdin COMMAND
    "${CMAKE_CURRENT_SOURCE_DIR}/is_same_stdin.sh"
    "${JSONSCHEMA_WALKER_BIN}"
    "${CMAKE_CURRENT_SOURCE_DIR}/example-2020-12-subschemas-flat.txt"
    "${CMAKE_CURRENT_SOURCE_DIR}/example-2020-12.json" flat)
endif()

add_test(NAME jsonschema_walker_invalid_mode COMMAND
  "${JSONSCHEMA_WALKER_BIN}"
  "${CMAKE_CURRENT_SOURCE_DIR}/example-2020-12.json" xxxxx)
set_tests_properties(jsonschema_walker_invalid_mode PROPERTIES WILL_FAIL TRUE)

add_test(NAME jsonschema_keywords COMMAND
  "${IS_SAME_BIN}" "${JSONSCHEMA_KEYWORDS_BIN}"
  "${CMAKE_CURRENT_SOURCE_DIR}/schemas/keyword-count.txt"
  "${CMAKE_CURRENT_SOURCE_DIR}/schemas")
