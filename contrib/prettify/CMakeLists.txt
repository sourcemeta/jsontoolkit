add_executable(jsontoolkit_prettify prettify.cc)
target_link_libraries(jsontoolkit_prettify PRIVATE sourcemeta::jsontoolkit::json)
set_target_properties(jsontoolkit_prettify PROPERTIES
  OUTPUT_NAME jsontoolkit-prettify)
install(TARGETS jsontoolkit_prettify
  RUNTIME DESTINATION "${CMAKE_INSTALL_BINDIR}"
  COMPONENT jsontoolkit)
