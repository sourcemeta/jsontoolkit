add_executable(jsontoolkit_jsonschema_walker walker.cc)
jsontoolkit_target_compile_options(jsontoolkit_jsonschema_walker PRIVATE)
target_link_libraries(jsontoolkit_jsonschema_walker PRIVATE sourcemeta::jsontoolkit::json)
target_link_libraries(jsontoolkit_jsonschema_walker PRIVATE sourcemeta::jsontoolkit::jsonschema)
set_target_properties(jsontoolkit_jsonschema_walker PROPERTIES
  OUTPUT_NAME jsontoolkit-jsonschema-walker)
install(TARGETS jsontoolkit_jsonschema_walker
  RUNTIME DESTINATION "${CMAKE_INSTALL_BINDIR}"
  COMPONENT jsontoolkit)
