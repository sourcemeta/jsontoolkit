function(noa_sanitizer)
  cmake_parse_arguments(NOA_SANITIZER "" "TYPE;TARGET" "" ${ARGN})

  if(NOT NOA_SANITIZER_TYPE)
    message(FATAL_ERROR "You must pass the intended sanitizer")
  endif()
  if(NOT NOA_SANITIZER_TARGET)
    message(FATAL_ERROR "You must pass the target to sanitize")
  endif()
  if(NOT TARGET "${NOA_SANITIZER_TARGET}")
    message(FATAL_ERROR "You must pass a valid target")
  endif()

  if(NOA_COMPILER_LLVM AND "${NOA_SANITIZER_TYPE}" STREQUAL "address")
    # See https://clang.llvm.org/docs/AddressSanitizer.html
    message(STATUS "Enabling sanitizer: Clang AddressSanitizer on ${NOA_SANITIZER_TARGET}")
    target_compile_options("${NOA_SANITIZER_TARGET}" PRIVATE
      -fsanitize=address -fsanitize-address-use-after-scope
      # Get nicer stack traces with the Address sanitizer
      -fno-omit-frame-pointer -fno-optimize-sibling-calls -O1)
    target_link_options("${NOA_SANITIZER_TARGET}" PRIVATE -fsanitize=address)
  elseif(NOA_COMPILER_LLVM AND "${NOA_SANITIZER_TYPE}" STREQUAL "memory")
    if(APPLE)
      message(FATAL_ERROR "Clang MemorySanitizer is not available on Apple platforms")
    endif()

    # See https://clang.llvm.org/docs/MemorySanitizer.html
    message(STATUS "Enabling sanitizer: Clang MemorySanitizer on ${NOA_SANITIZER_TARGET}")
    target_compile_options("${NOA_SANITIZER_TARGET}" PRIVATE
      -fsanitize=memory -fno-sanitize-memory-use-after-dtor
      # Get nicer stack traces with the Memory sanitizer
      -fno-omit-frame-pointer -fno-optimize-sibling-calls -O1)
    target_link_options("${NOA_SANITIZER_TARGET}" PUBLIC -fsanitize=memory)
  elseif(NOA_COMPILER_LLVM AND "${NOA_SANITIZER_TYPE}" STREQUAL "undefined")
    # See https://clang.llvm.org/docs/UndefinedBehaviorSanitizer.html
    message(STATUS "Enabling sanitizer: Clang UndefinedBehaviorSanitizer")
    target_compile_options("${NOA_SANITIZER_TARGET}" PRIVATE
      -fsanitize=undefined,nullability,integer,implicit-conversion,local-bounds)
    target_link_options("${NOA_SANITIZER_TARGET}" PUBLIC
      -fsanitize=undefined,nullability,integer,implicit-conversion,local-bounds)
    # Exit after an error, otherwise this sanitizer only prints warnings
    target_compile_options("${NOA_SANITIZER_TARGET}" PRIVATE -fno-sanitize-recover=all)
  else()
    message(FATAL_ERROR "Unrecognized compiler and/or sanitizer combination")
  endif()
endfunction()
