#ifndef JSONTOOLKIT_JSONPOINTER_GRAMMAR_H_
#define JSONTOOLKIT_JSONPOINTER_GRAMMAR_H_

namespace sourcemeta::jsontoolkit::internal {
template <typename CharT> static constexpr CharT token_pointer_hyphen{'\u002D'};
template <typename CharT> static constexpr CharT token_pointer_slash{'\u002F'};
template <typename CharT> static constexpr CharT token_pointer_tilde{'\u007E'};
template <typename CharT> static constexpr CharT token_pointer_zero{'\u0030'};
template <typename CharT> static constexpr CharT token_pointer_one{'\u0031'};
template <typename CharT> static constexpr CharT token_pointer_quote{'\u0022'};
template <typename CharT>
static constexpr CharT token_pointer_escape_unicode{'\u0075'};
template <typename CharT>
static constexpr CharT token_pointer_escape_backspace{'\u0062'};
template <typename CharT>
static constexpr CharT token_pointer_escape_form_feed{'\u0066'};
template <typename CharT>
static constexpr CharT token_pointer_escape_line_feed{'\u006E'};
template <typename CharT>
static constexpr CharT token_pointer_escape_carriage_return{'\u0072'};
template <typename CharT>
static constexpr CharT token_pointer_escape_tab{'\u0074'};
template <typename CharT>
static constexpr CharT token_pointer_reverse_solidus{'\u005C'};
} // namespace sourcemeta::jsontoolkit::internal

#endif
