find_program(VCPKG_BIN NAMES vcpkg)

if(VCPKG_BIN)
  get_filename_component(VCPKG_DIRECTORY "${VCPKG_BIN}" DIRECTORY)
  set(VCPKG_CMAKE_TOOLCHAIN "${VCPKG_DIRECTORY}/scripts/buildsystems/vcpkg.cmake")
else()
  # Attempt to find vcpkg from standard locations
  find_file(VCPKG_CMAKE_TOOLCHAIN
    NAMES scripts/buildsystems/vcpkg.cmake
    PATHS C:/src/vcpkg C:/dev/vcpkg C:/vcpkg
    NO_DEFAULT_PATH)
endif()

if(VCPKG_CMAKE_TOOLCHAIN)
  message(STATUS "Using VCPKG toolchain: ${VCPKG_CMAKE_TOOLCHAIN}")
  set(CMAKE_TOOLCHAIN_FILE "${VCPKG_CMAKE_TOOLCHAIN}"
    CACHE STRING "VCPKG toolchain file")
endif()
