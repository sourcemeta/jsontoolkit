set(PRETTIFY_BIN $<TARGET_FILE:jsontoolkit_prettify>)
set(MINIFY_BIN $<TARGET_FILE:jsontoolkit_minify>)
set(JSONSCHEMA_WALKER_BIN $<TARGET_FILE:jsontoolkit_jsonschema_walker>)

set(FAIL_BIN "${CMAKE_CURRENT_SOURCE_DIR}/fail.sh")
set(IS_SAME_BIN "${CMAKE_CURRENT_SOURCE_DIR}/is_same.sh")

add_test(NAME prettify_invalid COMMAND
  "${FAIL_BIN}" "${PRETTIFY_BIN}"
  "${CMAKE_CURRENT_SOURCE_DIR}/invalid.json")

add_test(NAME prettify_not_found COMMAND
  "${FAIL_BIN}" "${PRETTIFY_BIN}"
  "${CMAKE_CURRENT_SOURCE_DIR}/non-existent.json")

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
  "${FAIL_BIN}" "${MINIFY_BIN}"
  "${CMAKE_CURRENT_SOURCE_DIR}/invalid.json")

add_test(NAME minify_not_found COMMAND
  "${FAIL_BIN}" "${MINIFY_BIN}"
  "${CMAKE_CURRENT_SOURCE_DIR}/non-existent.json")

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

add_test(NAME jsonschema_walker_2020_12 COMMAND
  "${IS_SAME_BIN}" "${JSONSCHEMA_WALKER_BIN}"
  "${CMAKE_CURRENT_SOURCE_DIR}/example-2020-12-subschemas.txt"
  "${CMAKE_CURRENT_SOURCE_DIR}/example-2020-12.json")

if(NOT CMAKE_SYSTEM_NAME STREQUAL "Windows")
  add_test(NAME jsonschema_walker_2020_12_stdin COMMAND
    "${CMAKE_CURRENT_SOURCE_DIR}/is_same_stdin.sh"
    "${JSONSCHEMA_WALKER_BIN}"
    "${CMAKE_CURRENT_SOURCE_DIR}/example-2020-12-subschemas.txt"
    "${CMAKE_CURRENT_SOURCE_DIR}/example-2020-12.json")
endif()
