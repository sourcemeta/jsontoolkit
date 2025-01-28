noa_library(NAMESPACE sourcemeta PROJECT core NAME regex
  FOLDER "Core/Regex")

if(SOURCEMETA_CORE_INSTALL)
  noa_library_install(NAMESPACE sourcemeta PROJECT core NAME regex)
endif()

target_link_libraries(sourcemeta_core_regex INTERFACE Boost::regex)
