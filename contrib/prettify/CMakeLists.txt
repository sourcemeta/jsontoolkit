add_executable(jsontoolkit_prettify prettify.cc)
sourcemeta_jsontoolkit_add_compile_options(jsontoolkit_prettify)
target_link_libraries(jsontoolkit_prettify PRIVATE sourcemeta::jsontoolkit::json)
set_target_properties(jsontoolkit_prettify PROPERTIES
  OUTPUT_NAME jsontoolkit_prettify
  FOLDER "JSON Toolkit/Contrib")
install(TARGETS jsontoolkit_prettify
  RUNTIME DESTINATION "${CMAKE_INSTALL_BINDIR}"
  COMPONENT sourcemeta_jsontoolkit_contrib)
