add_executable(jsontoolkit_minify minify.cc)
target_link_libraries(jsontoolkit_minify PRIVATE sourcemeta::jsontoolkit::json)
set_target_properties(jsontoolkit_minify PROPERTIES
  OUTPUT_NAME jsontoolkit_minify
  FOLDER "JSON Toolkit/Contrib")
install(TARGETS jsontoolkit_minify
  RUNTIME DESTINATION "${CMAKE_INSTALL_BINDIR}"
  COMPONENT sourcemeta_jsontoolkit_contrib)
