function(sourcemeta_jsontoolkit_add_compile_options target)
  if(MSVC)
    # See https://learn.microsoft.com/en-us/cpp/build/reference/compiler-options-listed-by-category
    target_compile_options("${target}" PRIVATE
      /permissive-
      /EHsc
      /W4
      /WL
      /std:c++20
      /MD
      /MP
      /sdl)
  endif()
endfunction()
