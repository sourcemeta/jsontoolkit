find_package(Doxygen)
if(DOXYGEN_FOUND)
  set(DOXYGEN_IN "${PROJECT_SOURCE_DIR}/doxygen/Doxyfile.in")
  set(DOXYGEN_OUT "${CMAKE_CURRENT_BINARY_DIR}/Doxyfile")
  configure_file("${DOXYGEN_IN}" "${DOXYGEN_OUT}" @ONLY)
  add_custom_target(doxygen
    WORKING_DIRECTORY "${PROJECT_SOURCE_DIR}"
    VERBATIM
    COMMAND "${CMAKE_COMMAND}" -E make_directory "${CMAKE_CURRENT_BINARY_DIR}/website"
    COMMAND "${DOXYGEN_EXECUTABLE}" "${DOXYGEN_OUT}")
else()
  add_custom_target(doxygen VERBATIM
    COMMAND "${CMAKE_COMMAND}" -E echo "Could not locate Doxygen"
    COMMAND "${CMAKE_COMMAND}" -E false)
endif()
set_target_properties(doxygen PROPERTIES FOLDER "JSON Toolkit/Website")
