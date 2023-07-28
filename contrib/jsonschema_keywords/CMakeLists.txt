add_executable(jsontoolkit_jsonschema_keywords main.cc)
target_link_libraries(jsontoolkit_jsonschema_keywords PRIVATE sourcemeta::jsontoolkit::json)
target_link_libraries(jsontoolkit_jsonschema_keywords PRIVATE sourcemeta::jsontoolkit::jsonschema)
set_target_properties(jsontoolkit_jsonschema_keywords PROPERTIES
  OUTPUT_NAME jsonschema_keywords)
install(TARGETS jsontoolkit_jsonschema_keywords
  RUNTIME DESTINATION "${CMAKE_INSTALL_BINDIR}"
  COMPONENT sourcemeta_jsontoolkit_contrib)
