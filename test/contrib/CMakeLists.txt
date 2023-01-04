set(PRETTIFY_BIN $<TARGET_FILE:jsontoolkit_prettify>)
set(MINIFY_BIN $<TARGET_FILE:jsontoolkit_minify>)

add_test(NAME prettify_invalid COMMAND
  "${CMAKE_CURRENT_SOURCE_DIR}/fail.sh"
  "${PRETTIFY_BIN}"
  "${CMAKE_CURRENT_SOURCE_DIR}/invalid.json")

add_test(NAME prettify_not_found COMMAND
  "${CMAKE_CURRENT_SOURCE_DIR}/fail.sh"
  "${PRETTIFY_BIN}"
  "${CMAKE_CURRENT_SOURCE_DIR}/non-existent.json")

add_test(NAME prettify COMMAND
  "${CMAKE_CURRENT_SOURCE_DIR}/is_same.sh"
  "${PRETTIFY_BIN}"
  "${CMAKE_CURRENT_SOURCE_DIR}/prettify-output.json"
  "${CMAKE_CURRENT_SOURCE_DIR}/prettify-input.json")

add_test(NAME prettify_stdin COMMAND
  "${CMAKE_CURRENT_SOURCE_DIR}/is_same_stdin.sh"
  "${PRETTIFY_BIN}"
  "${CMAKE_CURRENT_SOURCE_DIR}/prettify-output.json"
  "${CMAKE_CURRENT_SOURCE_DIR}/prettify-input.json")

add_test(NAME minify_invalid COMMAND
  "${CMAKE_CURRENT_SOURCE_DIR}/fail.sh"
  "${MINIFY_BIN}"
  "${CMAKE_CURRENT_SOURCE_DIR}/invalid.json")

add_test(NAME minify_not_found COMMAND
  "${CMAKE_CURRENT_SOURCE_DIR}/fail.sh"
  "${MINIFY_BIN}"
  "${CMAKE_CURRENT_SOURCE_DIR}/non-existent.json")

add_test(NAME minify COMMAND
  "${CMAKE_CURRENT_SOURCE_DIR}/is_same.sh"
  "${MINIFY_BIN}"
  "${CMAKE_CURRENT_SOURCE_DIR}/minify-output.json"
  "${CMAKE_CURRENT_SOURCE_DIR}/minify-input.json")

add_test(NAME minify_stdin COMMAND
  "${CMAKE_CURRENT_SOURCE_DIR}/is_same_stdin.sh"
  "${MINIFY_BIN}"
  "${CMAKE_CURRENT_SOURCE_DIR}/minify-output.json"
  "${CMAKE_CURRENT_SOURCE_DIR}/minify-input.json")
