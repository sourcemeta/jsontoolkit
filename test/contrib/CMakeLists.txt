if(JSONTOOLKIT_JSON)
  set(PRETTIFY_BIN $<TARGET_FILE:sourcemeta_jsontoolkit_prettify>)
  set(MINIFY_BIN $<TARGET_FILE:sourcemeta_jsontoolkit_minify>)

  add_test(NAME prettify_invalid COMMAND
    "${PRETTIFY_BIN}" "${CMAKE_CURRENT_SOURCE_DIR}/invalid.json")
  set_tests_properties(prettify_invalid PROPERTIES WILL_FAIL TRUE)

  add_test(NAME prettify_not_found COMMAND
    "${PRETTIFY_BIN}" "${CMAKE_CURRENT_SOURCE_DIR}/non_existent.json")
  set_tests_properties(prettify_not_found PROPERTIES WILL_FAIL TRUE)

  add_test(NAME prettify COMMAND
    "${IS_SAME_BIN}" "${PRETTIFY_BIN}"
    "${CMAKE_CURRENT_SOURCE_DIR}/prettify_output.json"
    "${CMAKE_CURRENT_SOURCE_DIR}/prettify_input.json")

  add_test(NAME prettify_stdin COMMAND
    "${IS_SAME_STDIN_BIN}" "${PRETTIFY_BIN}"
    "${CMAKE_CURRENT_SOURCE_DIR}/prettify_output.json"
    "${CMAKE_CURRENT_SOURCE_DIR}/prettify_input.json")

  add_test(NAME minify_invalid COMMAND
    "${MINIFY_BIN}" "${CMAKE_CURRENT_SOURCE_DIR}/invalid.json")
  set_tests_properties(minify_invalid PROPERTIES WILL_FAIL TRUE)

  add_test(NAME minify_not_found COMMAND
    "${MINIFY_BIN}" "${CMAKE_CURRENT_SOURCE_DIR}/non_existent.json")
  set_tests_properties(minify_not_found PROPERTIES WILL_FAIL TRUE)

  add_test(NAME minify COMMAND
    "${IS_SAME_BIN}" "${MINIFY_BIN}"
    "${CMAKE_CURRENT_SOURCE_DIR}/minify_output.json"
    "${CMAKE_CURRENT_SOURCE_DIR}/minify_input.json")

  add_test(NAME minify_stdin COMMAND
    "${IS_SAME_STDIN_BIN}" "${MINIFY_BIN}"
    "${CMAKE_CURRENT_SOURCE_DIR}/minify_output.json"
    "${CMAKE_CURRENT_SOURCE_DIR}/minify_input.json")

  # For some strange reason, Windows throws weird errors on GitHub Actions
  # when running these Batch-based tests in parallel
  if(WIN32)
    set_tests_properties(
      prettify_invalid prettify_not_found
      prettify
      prettify_stdin
      minify_invalid
      minify_not_found
      minify
      minify_stdin
      PROPERTIES RUN_SERIAL TRUE)
  endif()
endif()

if(JSONTOOLKIT_JSONSCHEMA)
  set(JSONSCHEMA_WALKER_BIN $<TARGET_FILE:sourcemeta_jsontoolkit_jsonschema_walker>)
  set(JSONSCHEMA_KEYWORDS_BIN $<TARGET_FILE:sourcemeta_jsontoolkit_jsonschema_keywords>)

  add_test(NAME jsonschema_walker_deep_2020_12 COMMAND
    "${IS_SAME_BIN}" "${JSONSCHEMA_WALKER_BIN}"
    "${CMAKE_CURRENT_SOURCE_DIR}/example_2020_12_subschemas_deep.txt"
    deep "${CMAKE_CURRENT_SOURCE_DIR}/example_2020_12.json")

  add_test(NAME jsonschema_walker_flat_2020_12 COMMAND
    "${IS_SAME_BIN}" "${JSONSCHEMA_WALKER_BIN}"
    "${CMAKE_CURRENT_SOURCE_DIR}/example_2020_12_subschemas_flat.txt"
    flat "${CMAKE_CURRENT_SOURCE_DIR}/example_2020_12.json")

  add_test(NAME jsonschema_walker_deep_2020_12_stdin COMMAND
    "${IS_SAME_STDIN_BIN}" "${JSONSCHEMA_WALKER_BIN}"
    "${CMAKE_CURRENT_SOURCE_DIR}/example_2020_12_subschemas_deep.txt"
    "${CMAKE_CURRENT_SOURCE_DIR}/example_2020_12.json" deep)

  add_test(NAME jsonschema_walker_flat_2020_12_stdin COMMAND
    "${IS_SAME_STDIN_BIN}" "${JSONSCHEMA_WALKER_BIN}"
    "${CMAKE_CURRENT_SOURCE_DIR}/example_2020_12_subschemas_flat.txt"
    "${CMAKE_CURRENT_SOURCE_DIR}/example_2020_12.json" flat)

  add_test(NAME jsonschema_walker_invalid_mode COMMAND
    "${JSONSCHEMA_WALKER_BIN}"
    "${CMAKE_CURRENT_SOURCE_DIR}/example_2020_12.json" xxxxx)
  set_tests_properties(jsonschema_walker_invalid_mode PROPERTIES WILL_FAIL TRUE)

  add_test(NAME jsonschema_keywords COMMAND
    "${IS_SAME_BIN}" "${JSONSCHEMA_KEYWORDS_BIN}"
    "${CMAKE_CURRENT_SOURCE_DIR}/schemas/keyword_count.txt"
    "${CMAKE_CURRENT_SOURCE_DIR}/schemas")

  # For some strange reason, Windows throws weird errors on GitHub Actions
  # when running these Batch-based tests in parallel
  if(WIN32)
    set_tests_properties(
      jsonschema_walker_deep_2020_12
      jsonschema_walker_flat_2020_12
      jsonschema_walker_deep_2020_12_stdin
      jsonschema_walker_flat_2020_12_stdin
      jsonschema_walker_invalid_mode
      jsonschema_keywords
      PROPERTIES RUN_SERIAL TRUE)
  endif()
endif()
