function(noa_sanitizer)
  cmake_parse_arguments(NOA_SANITIZER "" "TYPE" "" ${ARGN})

  if(NOT NOA_SANITIZER_TYPE)
    message(FATAL_ERROR "You must pass the intended sanitizer")
  endif()

  if(NOA_COMPILER_LLVM AND "${NOA_SANITIZER_TYPE}" STREQUAL "address")
    # See https://clang.llvm.org/docs/AddressSanitizer.html
    message(STATUS "Enabling sanitizer: Clang AddressSanitizer")
    add_compile_options(-fsanitize=address -fsanitize-address-use-after-scope)
    add_link_options(-fsanitize=address)
    # Get nicer stack traces with the Address sanitizer
    add_compile_options(-fno-omit-frame-pointer -fno-optimize-sibling-calls)
    add_compile_options(-O1)
  else()
    message(FATAL_ERROR "Unrecognized compiler and/or sanitizer combination")
  endif()
endfunction()
