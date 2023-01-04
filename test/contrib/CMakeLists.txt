set(PRETTIFY_BIN $<TARGET_FILE:jsontoolkit_prettify>)

add_test(NAME prettify_invalid COMMAND
  "${CMAKE_CURRENT_SOURCE_DIR}/fail.sh"
  "${PRETTIFY_BIN}"
  "${CMAKE_CURRENT_SOURCE_DIR}/prettify-invalid.json")

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
