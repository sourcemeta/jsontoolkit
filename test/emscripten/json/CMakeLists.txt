find_program(EMPP_BIN NAMES em++ REQUIRED)
find_program(NODEJS_BIN NAMES node REQUIRED)

function(sourcemeta_jsontoolkit_add_emscripten_test_json target)
  add_custom_target("sourcemeta_jsontoolkit_emscripten_json_${target}" ALL
    COMMAND "${EMPP_BIN}" "${CMAKE_CURRENT_SOURCE_DIR}/${target}.cc" -std=c++20
      "-I${PROJECT_SOURCE_DIR}/src/json/include"
      "${PROJECT_SOURCE_DIR}/src/json/json.cc"
      -O3 -o "${CMAKE_CURRENT_BINARY_DIR}/${target}.js"
    DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/${target}.cc"
    BYPRODUCTS "${CMAKE_CURRENT_BINARY_DIR}/${target}.js" 
      "${CMAKE_CURRENT_BINARY_DIR}/${target}.wasm")
  add_test(NAME "JSONToolkit_emscripten_json.${target}" COMMAND
    "${IS_SAME_BIN}" "${NODEJS_BIN}" 
    "${CMAKE_CURRENT_SOURCE_DIR}/${target}.txt"
    "${CMAKE_CURRENT_BINARY_DIR}/${target}.js")
endfunction()

sourcemeta_jsontoolkit_add_emscripten_test_json(hello_world)
