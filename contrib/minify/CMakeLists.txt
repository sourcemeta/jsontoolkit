add_executable(sourcemeta_jsontoolkit_minify minify.cc)
sourcemeta_jsontoolkit_add_compile_options(sourcemeta_jsontoolkit_minify)
target_link_libraries(sourcemeta_jsontoolkit_minify
  PRIVATE sourcemeta::jsontoolkit::json)
set_target_properties(sourcemeta_jsontoolkit_minify PROPERTIES
  OUTPUT_NAME jsontoolkit_minify
  FOLDER "JSON Toolkit/Contrib")
install(TARGETS sourcemeta_jsontoolkit_minify
  RUNTIME DESTINATION "${CMAKE_INSTALL_BINDIR}"
  COMPONENT sourcemeta_jsontoolkit_contrib)
