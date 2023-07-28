add_executable(jsontoolkit_jsonschema_walker walker.cc)
target_link_libraries(jsontoolkit_jsonschema_walker PRIVATE sourcemeta::jsontoolkit::json)
target_link_libraries(jsontoolkit_jsonschema_walker PRIVATE sourcemeta::jsontoolkit::jsonschema)
set_target_properties(jsontoolkit_jsonschema_walker PROPERTIES
  OUTPUT_NAME jsontoolkit_jsonschema-walker)
install(TARGETS jsontoolkit_jsonschema_walker
  RUNTIME DESTINATION "${CMAKE_INSTALL_BINDIR}"
  COMPONENT jsontoolkit)
