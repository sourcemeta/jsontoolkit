add_executable(sourcemeta_jsontoolkit_prettify prettify.cc)
sourcemeta_jsontoolkit_add_compile_options(sourcemeta_jsontoolkit_prettify)
target_link_libraries(sourcemeta_jsontoolkit_prettify
  PRIVATE sourcemeta::jsontoolkit::json)
set_target_properties(sourcemeta_jsontoolkit_prettify PROPERTIES
  OUTPUT_NAME jsontoolkit_prettify
  FOLDER "JSON Toolkit/Contrib")
install(TARGETS sourcemeta_jsontoolkit_prettify
  RUNTIME DESTINATION "${CMAKE_INSTALL_BINDIR}"
  COMPONENT sourcemeta_jsontoolkit_contrib)
