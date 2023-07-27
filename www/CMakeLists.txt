find_program(SASSC_BIN NAMES sassc REQUIRED)
find_program(PANDOC_BIN NAMES pandoc REQUIRED)
find_program(CONVERT_BIN NAMES convert REQUIRED)

set(WWW_OUTPUT_DIRECTORY "${CMAKE_CURRENT_BINARY_DIR}/dist")
file(MAKE_DIRECTORY "${WWW_OUTPUT_DIRECTORY}")

macro(imagemagick_convert size source destination)
  add_custom_command(
    OUTPUT "${destination}"
    COMMAND "${CONVERT_BIN}" -resize "${size}" "${source}" "${destination}"
    MAIN_DEPENDENCY "${source}"
    DEPENDS "${source}")
endmacro()

add_custom_command(
  OUTPUT "${WWW_OUTPUT_DIRECTORY}/style.min.css"
  COMMAND "${SASSC_BIN}" --style compressed
    "${CMAKE_CURRENT_SOURCE_DIR}/main.scss" style.min.css
  MAIN_DEPENDENCY main.scss DEPENDS main.scss
  WORKING_DIRECTORY "${WWW_OUTPUT_DIRECTORY}")

# TODO: Make this command work on Windows too
add_custom_command(
  OUTPUT "${CMAKE_CURRENT_BINARY_DIR}/index.markdown"
  COMMAND tail -n +4 "${PROJECT_SOURCE_DIR}/README.markdown" >
    "${CMAKE_CURRENT_BINARY_DIR}/index.markdown"
  MAIN_DEPENDENCY "${PROJECT_SOURCE_DIR}/README.markdown"
  DEPENDS "${PROJECT_SOURCE_DIR}/README.markdown")

add_custom_command(
  OUTPUT "${WWW_OUTPUT_DIRECTORY}/index.html"
  COMMAND "${PANDOC_BIN}" --standalone --table-of-contents --toc-depth=5
    --template "${CMAKE_CURRENT_SOURCE_DIR}/template.html"
    --output "${WWW_OUTPUT_DIRECTORY}/index.html"
    --metadata title="JSON Toolkit"
    "${CMAKE_CURRENT_BINARY_DIR}/index.markdown"
  MAIN_DEPENDENCY "${CMAKE_CURRENT_BINARY_DIR}/index.markdown"
  DEPENDS "${CMAKE_CURRENT_BINARY_DIR}/index.markdown"
  "${CMAKE_CURRENT_SOURCE_DIR}/template.html")

imagemagick_convert(192x192
  "${CMAKE_CURRENT_SOURCE_DIR}/icon.svg"
  "${WWW_OUTPUT_DIRECTORY}/icon-192x192.png")
imagemagick_convert(512x512
  "${CMAKE_CURRENT_SOURCE_DIR}/icon.svg"
  "${WWW_OUTPUT_DIRECTORY}/icon-512x512.png")
imagemagick_convert(180x180
  "${CMAKE_CURRENT_SOURCE_DIR}/icon.svg"
  "${WWW_OUTPUT_DIRECTORY}/apple-touch-icon.png")
imagemagick_convert(32x32
  "${CMAKE_CURRENT_SOURCE_DIR}/icon.svg"
  "${WWW_OUTPUT_DIRECTORY}/favicon.ico")

noa_command_copy_file(
  FROM "${CMAKE_CURRENT_SOURCE_DIR}/CNAME"
  TO "${WWW_OUTPUT_DIRECTORY}/CNAME")
noa_command_copy_file(
  FROM "${CMAKE_CURRENT_SOURCE_DIR}/manifest.webmanifest"
  TO "${WWW_OUTPUT_DIRECTORY}/manifest.webmanifest")
noa_command_copy_file(
  FROM "${CMAKE_CURRENT_SOURCE_DIR}/icon.svg"
  TO "${WWW_OUTPUT_DIRECTORY}/icon.svg")

add_custom_target(www DEPENDS
  "${WWW_OUTPUT_DIRECTORY}/index.html"
  "${WWW_OUTPUT_DIRECTORY}/CNAME"
  "${WWW_OUTPUT_DIRECTORY}/icon.svg"
  "${WWW_OUTPUT_DIRECTORY}/favicon.ico"
  "${WWW_OUTPUT_DIRECTORY}/manifest.webmanifest"
  "${WWW_OUTPUT_DIRECTORY}/apple-touch-icon.png"
  "${WWW_OUTPUT_DIRECTORY}/icon-192x192.png"
  "${WWW_OUTPUT_DIRECTORY}/icon-512x512.png"
  "${WWW_OUTPUT_DIRECTORY}/style.min.css")
