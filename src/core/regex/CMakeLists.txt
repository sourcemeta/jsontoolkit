noa_library(NAMESPACE sourcemeta PROJECT jsontoolkit NAME regex
  FOLDER "JSON Toolkit/Regex")

if(JSONTOOLKIT_INSTALL)
  noa_library_install(NAMESPACE sourcemeta PROJECT jsontoolkit NAME regex)
endif()

target_link_libraries(sourcemeta_jsontoolkit_regex INTERFACE Boost::regex)
