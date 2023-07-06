add_executable(jsontoolkit_minify minify.cc)
jsontoolkit_target_compile_options(jsontoolkit_minify PRIVATE)
target_link_libraries(jsontoolkit_minify PRIVATE sourcemeta::jsontoolkit::json)
set_target_properties(jsontoolkit_minify PROPERTIES
  OUTPUT_NAME jsontoolkit-minify)
install(TARGETS jsontoolkit_minify
  RUNTIME DESTINATION "${CMAKE_INSTALL_BINDIR}"
  COMPONENT jsontoolkit)
