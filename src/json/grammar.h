#ifndef SOURCEMETA_JSONTOOLKIT_JSON_GRAMMAR_H_
#define SOURCEMETA_JSONTOOLKIT_JSON_GRAMMAR_H_

#include <string_view> // std::basic_string_view

namespace sourcemeta::jsontoolkit::internal {

// String
template <typename CharT> static constexpr CharT token_string_quote{'\u0022'};
template <typename CharT> static constexpr CharT token_string_escape{'\u005C'};
template <typename CharT> static constexpr CharT token_string_solidus{'\u002F'};
template <typename CharT>
static constexpr CharT token_string_escape_backspace{'\u0062'};
template <typename CharT>
static constexpr CharT token_string_escape_form_feed{'\u0066'};
template <typename CharT>
static constexpr CharT token_string_escape_line_feed{'\u006E'};
template <typename CharT>
static constexpr CharT token_string_escape_carriage_return{'\u0072'};
template <typename CharT>
static constexpr CharT token_string_escape_tabulation{'\u0074'};
template <typename CharT>
static constexpr CharT token_string_escape_unicode{'\u0075'};

// Array
template <typename CharT> static constexpr CharT token_array_begin{'\u005B'};
template <typename CharT> static constexpr CharT token_array_end{'\u005D'};
template <typename CharT>
static constexpr CharT token_array_delimiter{'\u002C'};

// Object
template <typename CharT> static constexpr CharT token_object_begin{'\u007B'};
template <typename CharT> static constexpr CharT token_object_end{'\u007D'};
template <typename CharT>
static constexpr CharT token_object_key_delimiter{'\u003A'};
template <typename CharT>
static constexpr CharT token_object_delimiter{'\u002C'};

// Boolean
template <typename CharT, typename Traits>
static constexpr std::basic_string_view<CharT, Traits> constant_true{
    "\u0074\u0072\u0075\u0065"};
template <typename CharT, typename Traits>
static constexpr std::basic_string_view<CharT, Traits> constant_false{
    "\u0066\u0061\u006C\u0073\u0065"};

// Null
template <typename CharT, typename Traits>
static constexpr std::basic_string_view<CharT, Traits> constant_null{
    "\u006E\u0075\u006C\u006C"};

// Number
template <typename CharT>
static constexpr CharT token_number_decimal_point{'\u002E'};
template <typename CharT>
static constexpr CharT token_number_exponent_uppercase{'\u0045'};
template <typename CharT>
static constexpr CharT token_number_exponent_lowercase{'\u0065'};
template <typename CharT> static constexpr CharT token_number_plus{'\u002B'};
template <typename CharT> static constexpr CharT token_number_minus{'\u002D'};
template <typename CharT> static constexpr CharT token_number_zero{'\u0030'};
template <typename CharT> static constexpr CharT token_number_one{'\u0031'};
template <typename CharT> static constexpr CharT token_number_two{'\u0032'};
template <typename CharT> static constexpr CharT token_number_three{'\u0033'};
template <typename CharT> static constexpr CharT token_number_four{'\u0034'};
template <typename CharT> static constexpr CharT token_number_five{'\u0035'};
template <typename CharT> static constexpr CharT token_number_six{'\u0036'};
template <typename CharT> static constexpr CharT token_number_seven{'\u0037'};
template <typename CharT> static constexpr CharT token_number_eight{'\u0038'};
template <typename CharT> static constexpr CharT token_number_nine{'\u0039'};

// Whitespace
template <typename CharT>
static constexpr CharT token_whitespace_tabulation{'\u0009'};
template <typename CharT>
static constexpr CharT token_whitespace_line_feed{'\u000A'};
template <typename CharT>
static constexpr CharT token_whitespace_carriage_return{'\u000D'};
template <typename CharT>
static constexpr CharT token_whitespace_space{'\u0020'};

} // namespace sourcemeta::jsontoolkit::internal

#endif
